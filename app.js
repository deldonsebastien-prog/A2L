document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('software-grid');
    const controls = document.getElementById('controls');
    const loadMoreBtn = document.getElementById('load-more');
    const globalSearchInput = document.getElementById('global-search');
    
    // Config
    const ITEMS_PER_PAGE = 12;
    let currentPage = 1;
    let currentSoftwareList = [];
    let allSoftwareData = [];
    
    // Detect context
    const body = document.body;
    const category = body.getAttribute('data-category');
    const isIndex = !category;

    // Helper: Normalisation (accents + minuscule)
    const normalize = (str) => {
        return str ? str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() : "";
    };

    // Initialize from global variable (data.js)
    if (typeof window.SOFTWARE_CATALOG !== 'undefined') {
        allSoftwareData = window.SOFTWARE_CATALOG;
        if (isIndex) {
            initIndexPage();
        } else {
            initCategoryPage(category);
        }
    } else {
        const errorMsg = 'Erreur: window.SOFTWARE_CATALOG non défini. Vérifiez que data.js est chargé.';
        console.error(errorMsg);
        if (grid) grid.innerHTML = `<p class="no-results">${errorMsg}</p>`;
    }

    function initIndexPage() {
        if (!globalSearchInput) return;

        // 1. Bloquer la soumission par Entrée (rechargement)
        globalSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') e.preventDefault();
        });

        // 2. Recherche Live
        globalSearchInput.addEventListener('input', (e) => {
            const rawTerm = e.target.value;
            const term = normalize(rawTerm.trim());
            const categoriesGrid = document.querySelector('.grid.cat-grid');
            
            const resultsContainer = document.getElementById('global-results');
            const countContainer = document.getElementById('global-count');

            // Sécurité si le HTML n'est pas à jour
            if (!resultsContainer) return;

            if (term.length < 2) {
                // Reset affichage défaut
                if (categoriesGrid) categoriesGrid.style.display = 'grid';
                resultsContainer.innerHTML = '';
                resultsContainer.classList.add('hidden');
                resultsContainer.style.display = 'none'; // Force style
                
                if (countContainer) {
                    countContainer.classList.add('hidden');
                    countContainer.style.display = 'none';
                }
                return;
            }

            // Mode Recherche
            if (categoriesGrid) categoriesGrid.style.display = 'none';
            
            resultsContainer.classList.remove('hidden');
            resultsContainer.style.display = 'grid'; // Force grid
            
            if (countContainer) {
                countContainer.classList.remove('hidden');
                countContainer.style.display = 'block';
            }

            // Filtrage insensible aux accents
            const results = allSoftwareData.filter(item => {
                const searchStr = `${item.name} ${item.description} ${(item.tags || []).join(' ')}`;
                return normalize(searchStr).includes(term);
            });

            // Mise à jour compteur
            if (countContainer) {
                countContainer.textContent = results.length > 0 
                    ? `${results.length} résultat(s) pour "${rawTerm}"`
                    : `Aucun résultat pour "${rawTerm}"`;
            }

            // Rendu (Mode recherche globale = true)
            renderCards(results, resultsContainer, true, true);
        });
    }

    function initCategoryPage(cat) {
        let categoryData = allSoftwareData.filter(item => item.category === cat);
        currentSoftwareList = categoryData;
        
        renderControls();
        renderPaged();

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                currentPage++;
                renderPaged(true);
            });
        }
    }

    function renderControls() {
        if (!controls) return;

        controls.innerHTML = `
            <div class="filter-group">
                <input type="text" id="filter-search" placeholder="Chercher dans cette catégorie...">
                <select id="filter-platform">
                    <option value="">Toutes plateformes</option>
                    <option value="Windows">Windows</option>
                    <option value="macOS">macOS</option>
                    <option value="Linux">Linux</option>
                    <option value="Android">Android</option>
                    <option value="iOS">iOS</option>
                    <option value="Web">Web</option>
                </select>
                <select id="filter-sort">
                    <option value="az">Nom (A-Z)</option>
                    <option value="za">Nom (Z-A)</option>
                    <option value="recommended">Recommandés</option>
                </select>
            </div>
        `;

        const searchInput = document.getElementById('filter-search');
        const platformSelect = document.getElementById('filter-platform');
        const sortSelect = document.getElementById('filter-sort');

        const applyFilters = () => {
            const rawTerm = searchInput.value;
            const term = normalize(rawTerm.trim());
            const platform = platformSelect.value;
            const sort = sortSelect.value;

            let filtered = allSoftwareData.filter(item => item.category === category);

            if (term) {
                filtered = filtered.filter(item => {
                    const searchStr = `${item.name} ${item.description} ${(item.tags || []).join(' ')}`;
                    return normalize(searchStr).includes(term);
                });
            }

            if (platform) {
                filtered = filtered.filter(item => item.platforms && (item.platforms.includes(platform) || item.platforms.includes("Multi")));
            }

            filtered.sort((a, b) => {
                if (sort === 'az') return a.name.localeCompare(b.name);
                if (sort === 'za') return b.name.localeCompare(a.name);
                if (sort === 'recommended') return (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0);
                return 0;
            });

            currentSoftwareList = filtered;
            currentPage = 1;
            renderPaged();
        };

        searchInput.addEventListener('input', applyFilters);
        platformSelect.addEventListener('change', applyFilters);
        sortSelect.addEventListener('change', applyFilters);
    }

    function renderPaged(append = false) {
        if (!append) grid.innerHTML = '';
        
        if (currentSoftwareList.length === 0) {
             grid.innerHTML = '<p class="no-results">Aucun logiciel trouvé dans cette catégorie.</p>';
             if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
             return;
        }

        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageItems = currentSoftwareList.slice(start, end);

        renderCards(pageItems, grid);

        if (loadMoreBtn) {
            if (end >= currentSoftwareList.length) {
                loadMoreBtn.classList.add('hidden');
            } else {
                loadMoreBtn.classList.remove('hidden');
            }
        }
    }

    function renderCards(items, container, showCategory = false, isGlobalSearch = false) {
        // En mode recherche globale, on efface tout avant de réécrire (pas de pagination)
        if (isGlobalSearch) container.innerHTML = '';

        if (items.length === 0) {
            // Le message est géré par initIndexPage pour la recherche globale
            if (!isGlobalSearch) container.innerHTML = '<p class="no-results">Aucun résultat.</p>';
            return;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            
            const categoryBadge = showCategory 
                ? `<span class="cat-badge">${item.category}</span>` 
                : '';

            const starBadge = item.recommended 
                ? `<span class="stars" title="Recommandé">★</span>` 
                : '';

            const tagsHtml = (item.tags || []).slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');

            // Logique de bouton : Lien vers catégorie (Index) OU Téléchargement (Catégorie)
            let actionBtn;
            if (isGlobalSearch) {
                const catUrl = `${item.category}.html`;
                actionBtn = `<a href="${catUrl}" class="btn btn-dl" style="background-color: var(--bg-nav); border: 1px solid var(--border);">Aller à la catégorie</a>`;
            } else {
                actionBtn = `<a href="${item.official_url}" class="btn btn-dl" target="_blank" rel="noopener">Télécharger</a>`;
            }

            card.innerHTML = `
                <div class="card-header">
                    <h3>${item.name}</h3>
                    ${starBadge}
                </div>
                ${categoryBadge}
                <p>${item.description}</p>
                <div class="tags">${tagsHtml}</div>
                <div class="btn-group">
                    ${actionBtn}
                </div>
            `;
            container.appendChild(card);
        });
    }
});