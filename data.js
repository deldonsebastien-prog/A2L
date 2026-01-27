window.SOFTWARE_CATALOG = [
  // --- SYSTÈME ---
  {
    "id": "ubuntu", "name": "Ubuntu", "category": "systeme",
    "description": "Distribution Linux populaire, accessible et robuste pour desktop et serveur.",
    "official_url": "https://ubuntu.com/download",
    "platforms": ["Linux"], "tags": ["os", "desktop", "server"], "recommended": true
  },
  {
    "id": "linux-mint", "name": "Linux Mint", "category": "systeme",
    "description": "Distribution Linux élégante, moderne et confortable, basée sur Ubuntu.",
    "official_url": "https://linuxmint.com/download.php",
    "platforms": ["Linux"], "tags": ["os", "desktop", "beginner"], "recommended": true
  },
  {
    "id": "debian", "name": "Debian", "category": "systeme",
    "description": "Le système d'exploitation universel, reconnu pour sa stabilité légendaire.",
    "official_url": "https://www.debian.org/distrib/",
    "platforms": ["Linux"], "tags": ["os", "server", "stable"], "recommended": true
  },
  {
    "id": "fedora", "name": "Fedora", "category": "systeme",
    "description": "Distribution innovante intégrant les dernières technologies du monde Linux.",
    "official_url": "https://fedoraproject.org/workstation/download",
    "platforms": ["Linux"], "tags": ["os", "gnome", "redhat"]
  },
  {
    "id": "arch-linux", "name": "Arch Linux", "category": "systeme",
    "description": "Distribution légère et flexible en rolling release pour utilisateurs avancés.",
    "official_url": "https://archlinux.org/download/",
    "platforms": ["Linux"], "tags": ["os", "rolling", "diy"]
  },
  {
    "id": "manjaro", "name": "Manjaro", "category": "systeme",
    "description": "Système rapide et convivial basé sur Arch Linux, avec installateur graphique.",
    "official_url": "https://manjaro.org/download/",
    "platforms": ["Linux"], "tags": ["os", "rolling", "desktop"], "recommended": true
  },
  {
    "id": "pop-os", "name": "Pop!_OS", "category": "systeme",
    "description": "OS conçu pour les développeurs et les professionnels, excellente gestion GPU.",
    "official_url": "https://pop.system76.com/",
    "platforms": ["Linux"], "tags": ["os", "dev", "gaming"]
  },
  {
    "id": "mx-linux", "name": "MX Linux", "category": "systeme",
    "description": "Distribution de poids moyen stable et performante.",
    "official_url": "https://mxlinux.org/download-links/",
    "platforms": ["Linux"], "tags": ["os", "stable", "desktop"]
  },
  {
    "id": "elementary-os", "name": "elementary OS", "category": "systeme",
    "description": "Le remplaçant rapide et ouvert de Windows et macOS axé sur le design.",
    "official_url": "https://elementary.io/",
    "platforms": ["Linux"], "tags": ["os", "design", "macos-like"]
  },
  {
    "id": "zorin-os", "name": "Zorin OS", "category": "systeme",
    "description": "Conçu pour rendre votre ordinateur plus rapide et plus sûr (interface Windows-like).",
    "official_url": "https://zorin.com/os/download/",
    "platforms": ["Linux"], "tags": ["os", "windows-like", "beginner"]
  },
  {
    "id": "alpine", "name": "Alpine Linux", "category": "systeme",
    "description": "Distribution Linux légère orientée sécurité, idéale pour les conteneurs.",
    "official_url": "https://www.alpinelinux.org/downloads/",
    "platforms": ["Linux"], "tags": ["os", "lightweight", "server"]
  },
  {
    "id": "kali", "name": "Kali Linux", "category": "systeme",
    "description": "Distribution Linux avancée pour les tests d'intrusion et l'audit de sécurité.",
    "official_url": "https://www.kali.org/get-kali/",
    "platforms": ["Linux"], "tags": ["os", "security", "pentest"]
  },
  {
    "id": "tails", "name": "Tails", "category": "systeme",
    "description": "Système portable qui protège contre la surveillance et la censure.",
    "official_url": "https://tails.net/install/",
    "platforms": ["Linux", "USB"], "tags": ["os", "privacy", "tor"]
  },
  {
    "id": "nixos", "name": "NixOS", "category": "systeme",
    "description": "Distribution avec configuration déclarative et mises à jour atomiques.",
    "official_url": "https://nixos.org/download.html",
    "platforms": ["Linux"], "tags": ["os", "devops", "unique"]
  },
  {
    "id": "proxmox", "name": "Proxmox VE", "category": "systeme",
    "description": "Plateforme complète de gestion de la virtualisation serveur (KVM et LXC).",
    "official_url": "https://www.proxmox.com/en/downloads",
    "platforms": ["Linux"], "tags": ["virtualisation", "server"], "recommended": true
  },
  {
    "id": "xcp-ng", "name": "XCP-ng", "category": "systeme",
    "description": "Hyperviseur de virtualisation basé sur XenServer, communautaire.",
    "official_url": "https://xcp-ng.org/",
    "platforms": ["Linux"], "tags": ["virtualisation", "server"]
  },
  {
    "id": "docker", "name": "Docker", "category": "systeme",
    "description": "Plateforme pour développer, expédier et exécuter des applications en conteneurs.",
    "official_url": "https://docs.docker.com/get-docker/",
    "platforms": ["Multi"], "tags": ["container", "devops"], "recommended": true
  },
  {
    "id": "kubernetes", "name": "Kubernetes", "category": "systeme",
    "description": "Système d'orchestration pour l'automatisation du déploiement de conteneurs.",
    "official_url": "https://kubernetes.io/releases/download/",
    "platforms": ["Linux"], "tags": ["container", "orchestration"]
  },
  {
    "id": "podman", "name": "Podman", "category": "systeme",
    "description": "Moteur de conteneurs sans démon pour gérer pods et images OCI.",
    "official_url": "https://podman.io/",
    "platforms": ["Linux", "Windows", "macOS"], "tags": ["container", "daemonless"]
  },
  {
    "id": "rufus", "name": "Rufus", "category": "systeme",
    "description": "Utilitaire permettant de formater et de créer des média USB démarrables.",
    "official_url": "https://rufus.ie/",
    "platforms": ["Windows"], "tags": ["usb", "boot", "iso"], "recommended": true
  },
  {
    "id": "ventoy", "name": "Ventoy", "category": "systeme",
    "description": "Créez une clé USB bootable une fois et ajoutez simplement vos ISOs.",
    "official_url": "https://www.ventoy.net/en/download.html",
    "platforms": ["Windows", "Linux"], "tags": ["usb", "boot", "multi-iso"], "recommended": true
  },
  {
    "id": "etcher", "name": "balenaEtcher", "category": "systeme",
    "description": "Outil pour flasher des images OS sur cartes SD et clés USB de manière sûre.",
    "official_url": "https://etcher.balena.io/",
    "platforms": ["Multi"], "tags": ["usb", "flash"]
  },
  {
    "id": "gparted", "name": "GParted", "category": "systeme",
    "description": "Éditeur de partitions gratuit pour gérer graphiquement vos disques.",
    "official_url": "https://gparted.org/download.php",
    "platforms": ["Linux"], "tags": ["disk", "partition"]
  },
  {
    "id": "clonezilla", "name": "Clonezilla", "category": "systeme",
    "description": "Logiciel de partitionnement et de clonage de disque/partition.",
    "official_url": "https://clonezilla.org/downloads.php",
    "platforms": ["Linux"], "tags": ["backup", "disk", "clone"]
  },
  {
    "id": "virtualbox", "name": "VirtualBox", "category": "systeme",
    "description": "Virtualiseur généraliste complet pour matériel x86.",
    "official_url": "https://www.virtualbox.org/wiki/Downloads",
    "platforms": ["Multi"], "tags": ["vm", "virtualisation"], "recommended": true
  },
  {
    "id": "qemu", "name": "QEMU", "category": "systeme",
    "description": "Émulateur de machine générique et virtualiseur open source.",
    "official_url": "https://www.qemu.org/download/",
    "platforms": ["Multi"], "tags": ["vm", "emulation"]
  },
  {
    "id": "bleachbit", "name": "BleachBit", "category": "systeme",
    "description": "Nettoyeur de système, libère de l'espace et protège la vie privée.",
    "official_url": "https://www.bleachbit.org/download",
    "platforms": ["Windows", "Linux"], "tags": ["cleaner", "maintenance"]
  },
  {
    "id": "stacer", "name": "Stacer", "category": "systeme",
    "description": "Optimiseur de système Linux et moniteur d'application.",
    "official_url": "https://github.com/oguzhaninan/Stacer",
    "platforms": ["Linux"], "tags": ["cleaner", "monitor"]
  },
  {
    "id": "timeshift", "name": "Timeshift", "category": "systeme",
    "description": "Outil de restauration système pour Linux (instantanés).",
    "official_url": "https://github.com/linuxmint/timeshift",
    "platforms": ["Linux"], "tags": ["backup", "restore"]
  },
  {
    "id": "powertoys", "name": "Microsoft PowerToys", "category": "systeme",
    "description": "Utilitaires système pour les utilisateurs avancés de Windows.",
    "official_url": "https://github.com/microsoft/PowerToys/releases",
    "platforms": ["Windows"], "tags": ["tools", "productivity"]
  },
  {
    "id": "windows-terminal", "name": "Windows Terminal", "category": "systeme",
    "description": "Application de terminal moderne, rapide et efficace.",
    "official_url": "https://github.com/microsoft/terminal",
    "platforms": ["Windows"], "tags": ["terminal", "console"]
  },
  {
    "id": "7-zip", "name": "7-Zip", "category": "systeme",
    "description": "Archiveur de fichiers avec un taux de compression élevé.",
    "official_url": "https://www.7-zip.org/download.html",
    "platforms": ["Windows", "Linux"], "tags": ["zip", "archive"], "recommended": true
  },
  {
    "id": "peazip", "name": "PeaZip", "category": "systeme",
    "description": "Gestionnaire d'archives gratuit et extracteur RAR/ZIP.",
    "official_url": "https://peazip.github.io/",
    "platforms": ["Multi"], "tags": ["zip", "archive"]
  },
  {
    "id": "testdisk", "name": "TestDisk & PhotoRec", "category": "systeme",
    "description": "Récupération de données et réparation de partitions perdues.",
    "official_url": "https://www.cgsecurity.org/wiki/TestDisk_Download",
    "platforms": ["Multi"], "tags": ["recovery", "disk"]
  },
  {
    "id": "windirstat", "name": "WinDirStat", "category": "systeme",
    "description": "Visionneuse de statistiques d'utilisation du disque et outil de nettoyage.",
    "official_url": "https://windirstat.net/download.html",
    "platforms": ["Windows"], "tags": ["disk", "storage"]
  },
  {
    "id": "fd", "name": "fd", "category": "systeme",
    "description": "Alternative simple, rapide et conviviale à 'find'.",
    "official_url": "https://github.com/sharkdp/fd",
    "platforms": ["Multi"], "tags": ["cli", "search"]
  },
  {
    "id": "bat", "name": "bat", "category": "systeme",
    "description": "Clone de 'cat' avec coloration syntaxique et intégration Git.",
    "official_url": "https://github.com/sharkdp/bat",
    "platforms": ["Multi"], "tags": ["cli", "tools"]
  },
  {
    "id": "reactos", "name": "ReactOS", "category": "systeme",
    "description": "OS gratuit et open source compatible avec les programmes Windows.",
    "official_url": "https://reactos.org/download/",
    "platforms": ["PC"], "tags": ["os", "windows-compatible"]
  },
  {
    "id": "freebsd", "name": "FreeBSD", "category": "systeme",
    "description": "OS avancé dérivé de BSD pour serveurs, bureaux et embarqué.",
    "official_url": "https://www.freebsd.org/where/",
    "platforms": ["PC"], "tags": ["os", "server", "bsd"]
  },
  {
    "id": "haiku", "name": "Haiku", "category": "systeme",
    "description": "OS rapide inspiré de BeOS, pour l'informatique personnelle.",
    "official_url": "https://www.haiku-os.org/get-haiku/",
    "platforms": ["PC"], "tags": ["os", "desktop"]
  },
  {
    "id": "freedos", "name": "FreeDOS", "category": "systeme",
    "description": "Système complet compatible DOS pour jouer ou gérer du matériel.",
    "official_url": "https://www.freedos.org/download/",
    "platforms": ["PC"], "tags": ["os", "dos", "retro"]
  },
  
  // --- RÉSEAU & SÉCURITÉ ---
  {
    "id": "wireguard", "name": "WireGuard", "category": "reseau-securite",
    "description": "VPN extrêmement simple, rapide et moderne.",
    "official_url": "https://www.wireguard.com/install/",
    "platforms": ["Multi"], "tags": ["vpn", "tunnel"], "recommended": true
  },
  {
    "id": "openvpn", "name": "OpenVPN", "category": "reseau-securite",
    "description": "Standard de l'industrie pour les VPN, très flexible.",
    "official_url": "https://openvpn.net/community-downloads/",
    "platforms": ["Multi"], "tags": ["vpn", "ssl"]
  },
  {
    "id": "tor", "name": "Tor", "category": "reseau-securite",
    "description": "Anonymat en ligne via un réseau de relais (Onion Routing).",
    "official_url": "https://www.torproject.org/",
    "platforms": ["Multi"], "tags": ["privacy", "network"], "recommended": true
  },
  {
    "id": "wireshark", "name": "Wireshark", "category": "reseau-securite",
    "description": "Analyseur de protocole réseau le plus utilisé au monde.",
    "official_url": "https://www.wireshark.org/download.html",
    "platforms": ["Multi"], "tags": ["analysis", "sniffing"]
  },
  {
    "id": "nmap", "name": "Nmap", "category": "reseau-securite",
    "description": "Scanner de sécurité réseau et outil d'exploration.",
    "official_url": "https://nmap.org/download.html",
    "platforms": ["Multi"], "tags": ["scanner", "security"], "recommended": true
  },
  {
    "id": "pi-hole", "name": "Pi-hole", "category": "reseau-securite",
    "description": "Bloqueur de publicités et traceurs au niveau réseau (DNS).",
    "official_url": "https://pi-hole.net/",
    "platforms": ["Linux", "Docker"], "tags": ["dns", "adblock"], "recommended": true
  },
  {
    "id": "pfsense", "name": "pfSense CE", "category": "reseau-securite",
    "description": "Pare-feu et routeur open source basé sur FreeBSD.",
    "official_url": "https://www.pfsense.org/download/",
    "platforms": ["BSD"], "tags": ["firewall", "router"]
  },
  {
    "id": "opnsense", "name": "OPNsense", "category": "reseau-securite",
    "description": "Plateforme de pare-feu et de routage facile à utiliser.",
    "official_url": "https://opnsense.org/download/",
    "platforms": ["BSD"], "tags": ["firewall", "router"]
  },
  {
    "id": "keepassxc", "name": "KeePassXC", "category": "reseau-securite",
    "description": "Gestionnaire de mots de passe sécurisé stockant les données localement.",
    "official_url": "https://keepassxc.org/download/",
    "platforms": ["Multi"], "tags": ["password", "encryption"], "recommended": true
  },
  {
    "id": "bitwarden", "name": "Bitwarden", "category": "reseau-securite",
    "description": "Gestionnaire de mots de passe sécurisé cloud pour tous appareils.",
    "official_url": "https://bitwarden.com/download/",
    "platforms": ["Multi"], "tags": ["password", "cloud"], "recommended": true
  },
  {
    "id": "veracrypt", "name": "VeraCrypt", "category": "reseau-securite",
    "description": "Logiciel de chiffrement de disque gratuit (successeur de TrueCrypt).",
    "official_url": "https://www.veracrypt.fr/en/Downloads.html",
    "platforms": ["Multi"], "tags": ["encryption", "disk"], "recommended": true
  },
  {
    "id": "gnupg", "name": "GnuPG", "category": "reseau-securite",
    "description": "Implémentation complète et libre du standard OpenPGP.",
    "official_url": "https://gnupg.org/download/",
    "platforms": ["Multi"], "tags": ["encryption", "pgp"]
  },
  {
    "id": "filezilla", "name": "FileZilla", "category": "reseau-securite",
    "description": "Solution FTP gratuite supportant FTP, SFTP et FTPS.",
    "official_url": "https://filezilla-project.org/download.php?type=client",
    "platforms": ["Multi"], "tags": ["ftp", "sftp"]
  },
  {
    "id": "winscp", "name": "WinSCP", "category": "reseau-securite",
    "description": "Client SFTP et FTP graphique pour Windows.",
    "official_url": "https://winscp.net/eng/download.php",
    "platforms": ["Windows"], "tags": ["sftp", "ssh"]
  },
  {
    "id": "putty", "name": "PuTTY", "category": "reseau-securite",
    "description": "Client SSH et Telnet pour la plateforme Windows.",
    "official_url": "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",
    "platforms": ["Windows"], "tags": ["ssh", "terminal"]
  },
  {
    "id": "cyberchef", "name": "CyberChef", "category": "reseau-securite",
    "description": "Le couteau suisse du web pour le chiffrement, encodage, etc.",
    "official_url": "https://gchq.github.io/CyberChef/",
    "platforms": ["Web"], "tags": ["tools", "crypto"]
  },
  {
    "id": "cryptomator", "name": "Cryptomator", "category": "reseau-securite",
    "description": "Chiffrement côté client transparent pour vos fichiers cloud.",
    "official_url": "https://cryptomator.org/downloads/",
    "platforms": ["Multi"], "tags": ["encryption", "cloud"]
  },
  {
    "id": "tailscale", "name": "Tailscale (Client)", "category": "reseau-securite",
    "description": "Créez un réseau privé sécurisé (Mesh VPN) facilement.",
    "official_url": "https://tailscale.com/download",
    "platforms": ["Multi"], "tags": ["vpn", "mesh"]
  },
  {
    "id": "adguard-home", "name": "AdGuard Home", "category": "reseau-securite",
    "description": "Logiciel réseau pour bloquer pubs et tracking (alternative à Pi-hole).",
    "official_url": "https://github.com/AdguardTeam/AdGuardHome",
    "platforms": ["Multi"], "tags": ["dns", "privacy"]
  },
  {
    "id": "opensnitch", "name": "OpenSnitch", "category": "reseau-securite",
    "description": "Pare-feu applicatif pour Linux (type Little Snitch).",
    "official_url": "https://github.com/evilsocket/opensnitch",
    "platforms": ["Linux"], "tags": ["firewall", "privacy"]
  },
  {
    "id": "suricata", "name": "Suricata", "category": "reseau-securite",
    "description": "Moteur de détection de menaces (IDS/IPS) haute performance.",
    "official_url": "https://suricata.io/download/",
    "platforms": ["Linux", "BSD"], "tags": ["ids", "security"]
  },
  {
    "id": "snort", "name": "Snort", "category": "reseau-securite",
    "description": "Système de prévention des intrusions réseau.",
    "official_url": "https://www.snort.org/downloads",
    "platforms": ["Linux", "Windows"], "tags": ["ids", "security"]
  },
  {
    "id": "clamav", "name": "ClamAV", "category": "reseau-securite",
    "description": "Moteur antivirus open source pour la détection de malwares.",
    "official_url": "https://www.clamav.net/downloads",
    "platforms": ["Multi"], "tags": ["antivirus", "security"]
  },
  {
    "id": "wazuh", "name": "Wazuh", "category": "reseau-securite",
    "description": "Plateforme de sécurité unifiée XDR et SIEM.",
    "official_url": "https://wazuh.com/install/",
    "platforms": ["Linux"], "tags": ["siem", "security"]
  },
  {
    "id": "greenbone", "name": "Greenbone (OpenVAS)", "category": "reseau-securite",
    "description": "Scanner de vulnérabilités complet.",
    "official_url": "https://greenbone.github.io/docs/latest/",
    "platforms": ["Linux"], "tags": ["scanner", "vulnerability"]
  },
  {
    "id": "metasploit", "name": "Metasploit", "category": "reseau-securite",
    "description": "Framework de test d'intrusion le plus utilisé.",
    "official_url": "https://www.metasploit.com/download",
    "platforms": ["Linux", "Windows"], "tags": ["pentest", "security"]
  },
  {
    "id": "angry-ip", "name": "Angry IP Scanner", "category": "reseau-securite",
    "description": "Scanner de réseau rapide et simple à utiliser.",
    "official_url": "https://angryip.org/download/",
    "platforms": ["Multi"], "tags": ["scanner", "network"]
  },
  {
    "id": "tcpdump", "name": "tcpdump", "category": "reseau-securite",
    "description": "Outil puissant d'analyse de paquets en ligne de commande.",
    "official_url": "https://www.tcpdump.org/",
    "platforms": ["Linux", "BSD"], "tags": ["cli", "network"]
  },
  {
    "id": "openwrt", "name": "OpenWrt", "category": "reseau-securite",
    "description": "Système d'exploitation Linux pour routeurs et appareils embarqués.",
    "official_url": "https://openwrt.org/downloads",
    "platforms": ["Router"], "tags": ["firmware", "router"]
  },
  {
    "id": "i2p", "name": "I2P", "category": "reseau-securite",
    "description": "Réseau anonyme offrant une couche d'identité sensible aux applications.",
    "official_url": "https://geti2p.net/en/download",
    "platforms": ["Multi"], "tags": ["privacy", "network"]
  },
  {
    "id": "zerotier", "name": "ZeroTier", "category": "reseau-securite",
    "description": "Créez des réseaux sécurisés entre vos appareils comme s'ils étaient sur le même LAN.",
    "official_url": "https://www.zerotier.com/download/",
    "platforms": ["Multi"], "tags": ["vpn", "mesh"]
  },
  
  // --- NAVIGATEURS & INTERNET ---
  {
    "id": "firefox", "name": "Firefox", "category": "navigateurs-internet",
    "description": "Navigateur web rapide, privé et sécurisé par Mozilla.",
    "official_url": "https://www.mozilla.org/firefox/new/",
    "platforms": ["Multi"], "tags": ["browser", "web"], "recommended": true
  },
  {
    "id": "chromium", "name": "Chromium", "category": "navigateurs-internet",
    "description": "Projet open-source navigateur web qui sert de base à Chrome.",
    "official_url": "https://download-chromium.appspot.com/",
    "platforms": ["Multi"], "tags": ["browser", "web"]
  },
  {
    "id": "brave", "name": "Brave", "category": "navigateurs-internet",
    "description": "Navigateur rapide mettant l'accent sur la confidentialité.",
    "official_url": "https://brave.com/download/",
    "platforms": ["Multi"], "tags": ["browser", "privacy", "web"], "recommended": true
  },
  {
    "id": "librewolf", "name": "LibreWolf", "category": "navigateurs-internet",
    "description": "Fork de Firefox focalisé sur la vie privée et la sécurité.",
    "official_url": "https://librewolf.net/",
    "platforms": ["Multi"], "tags": ["browser", "privacy"]
  },
  {
    "id": "tor-browser", "name": "Tor Browser", "category": "navigateurs-internet",
    "description": "Navigateur pour accéder au réseau Tor et protéger son anonymat.",
    "official_url": "https://www.torproject.org/download/",
    "platforms": ["Multi"], "tags": ["browser", "privacy", "onion"], "recommended": true
  },
  {
    "id": "thunderbird", "name": "Thunderbird", "category": "navigateurs-internet",
    "description": "Client de messagerie, calendrier et carnet d'adresses.",
    "official_url": "https://www.thunderbird.net/download/",
    "platforms": ["Windows", "macOS", "Linux"], "tags": ["email", "calendar"], "recommended": true
  },
  {
    "id": "signal", "name": "Signal", "category": "navigateurs-internet",
    "description": "Messagerie instantanée chiffrée centrée sur la vie privée.",
    "official_url": "https://signal.org/download/",
    "platforms": ["Multi"], "tags": ["chat", "privacy"], "recommended": true
  },
  {
    "id": "element", "name": "Element", "category": "navigateurs-internet",
    "description": "Messagerie sécurisée et décentralisée basée sur Matrix.",
    "official_url": "https://element.io/download",
    "platforms": ["Multi"], "tags": ["chat", "matrix"]
  },
  {
    "id": "jitsi", "name": "Jitsi Meet", "category": "navigateurs-internet",
    "description": "Visioconférence sécurisée et gratuite, sans compte.",
    "official_url": "https://jitsi.org/downloads/",
    "platforms": ["Web", "Mobile"], "tags": ["video", "conference"]
  },
  {
    "id": "nextcloud", "name": "Nextcloud", "category": "navigateurs-internet",
    "description": "Suite de productivité auto-hébergée (fichiers, calendrier, etc.).",
    "official_url": "https://nextcloud.com/install/",
    "platforms": ["Server", "Client"], "tags": ["cloud", "storage"], "recommended": true
  },
  {
    "id": "transmission", "name": "Transmission", "category": "navigateurs-internet",
    "description": "Client BitTorrent simple, léger et multiplateforme.",
    "official_url": "https://transmissionbt.com/download",
    "platforms": ["Multi"], "tags": ["torrent", "p2p"]
  },
  {
    "id": "qbittorrent", "name": "qBittorrent", "category": "navigateurs-internet",
    "description": "Client BitTorrent complet, alternative à µTorrent.",
    "official_url": "https://www.qbittorrent.org/download.php",
    "platforms": ["Multi"], "tags": ["torrent", "p2p"], "recommended": true
  },
  {
    "id": "deluge", "name": "Deluge", "category": "navigateurs-internet",
    "description": "Client BitTorrent léger avec architecture client-serveur.",
    "official_url": "https://deluge-torrent.org/download/",
    "platforms": ["Multi"], "tags": ["torrent", "p2p"]
  },
  {
    "id": "filezilla-server", "name": "FileZilla Server", "category": "navigateurs-internet",
    "description": "Serveur FTP gratuit et open source.",
    "official_url": "https://filezilla-project.org/download.php?type=server",
    "platforms": ["Windows"], "tags": ["ftp", "server"]
  },
  {
    "id": "mattermost", "name": "Mattermost", "category": "navigateurs-internet",
    "description": "Alternative open source à Slack pour la collaboration.",
    "official_url": "https://mattermost.com/download/",
    "platforms": ["Server", "Client"], "tags": ["chat", "team"]
  },
  {
    "id": "zulip", "name": "Zulip", "category": "navigateurs-internet",
    "description": "Chat de groupe avec un modèle de threading unique.",
    "official_url": "https://zulip.com/apps/",
    "platforms": ["Multi"], "tags": ["chat", "team"]
  },
  {
    "id": "rocketchat", "name": "Rocket.Chat", "category": "navigateurs-internet",
    "description": "Plateforme de communication d'équipe omnicanale.",
    "official_url": "https://rocket.chat/install",
    "platforms": ["Server", "Client"], "tags": ["chat", "team"]
  },
  {
    "id": "pidgin", "name": "Pidgin", "category": "navigateurs-internet",
    "description": "Client de messagerie instantanée universel.",
    "official_url": "https://pidgin.im/install/",
    "platforms": ["Windows", "Linux"], "tags": ["chat", "legacy"]
  },
  {
    "id": "hexchat", "name": "HexChat", "category": "navigateurs-internet",
    "description": "Client IRC populaire et facile à utiliser.",
    "official_url": "https://hexchat.github.io/downloads.html",
    "platforms": ["Windows", "Linux"], "tags": ["irc", "chat"]
  },
  {
    "id": "mumble", "name": "Mumble", "category": "navigateurs-internet",
    "description": "Chat vocal à faible latence et haute qualité (VoIP).",
    "official_url": "https://www.mumble.info/downloads/",
    "platforms": ["Multi"], "tags": ["voip", "chat"]
  },
  {
    "id": "ferdium", "name": "Ferdium", "category": "navigateurs-internet",
    "description": "Application pour regrouper tous vos services de messagerie (Fork de Ferdi/Franz).",
    "official_url": "https://ferdium.org/download",
    "platforms": ["Multi"], "tags": ["chat", "aggregator"]
  },
  {
    "id": "waterfox", "name": "Waterfox", "category": "navigateurs-internet",
    "description": "Navigateur 64-bits basé sur Firefox, respectueux de la vie privée.",
    "official_url": "https://www.waterfox.net/download/",
    "platforms": ["Multi"], "tags": ["browser", "web"]
  },
  {
    "id": "pale-moon", "name": "Pale Moon", "category": "navigateurs-internet",
    "description": "Navigateur web focalisé sur l'efficacité et la personnalisation.",
    "official_url": "https://www.palemoon.org/download.shtml",
    "platforms": ["Windows", "Linux"], "tags": ["browser", "legacy"]
  },
  {
    "id": "seamonkey", "name": "SeaMonkey", "category": "navigateurs-internet",
    "description": "Suite internet tout-en-un (navigateur, email, chat).",
    "official_url": "https://www.seamonkey-project.org/releases/",
    "platforms": ["Multi"], "tags": ["browser", "suite"]
  },
  {
    "id": "mailspring", "name": "Mailspring", "category": "navigateurs-internet",
    "description": "Client email de bureau moderne et extensible.",
    "official_url": "https://getmailspring.com/download",
    "platforms": ["Multi"], "tags": ["email", "client"]
  },
  {
    "id": "sylpheed", "name": "Sylpheed", "category": "navigateurs-internet",
    "description": "Client email léger et simple.",
    "official_url": "https://sylpheed.sraoss.jp/en/download.html",
    "platforms": ["Multi"], "tags": ["email", "lightweight"]
  },
  {
    "id": "claws-mail", "name": "Claws Mail", "category": "navigateurs-internet",
    "description": "Client email rapide et hautement configurable.",
    "official_url": "https://www.claws-mail.org/downloads.php",
    "platforms": ["Windows", "Linux"], "tags": ["email", "client"]
  },
  {
    "id": "session", "name": "Session", "category": "navigateurs-internet",
    "description": "Messagerie privée sans métadonnées et sans numéro de téléphone.",
    "official_url": "https://getsession.org/download",
    "platforms": ["Multi"], "tags": ["chat", "privacy"]
  },
  {
    "id": "mullvad-browser", "name": "Mullvad Browser", "category": "navigateurs-internet",
    "description": "Navigateur axé sur la confidentialité développé en collaboration avec Tor Project.",
    "official_url": "https://mullvad.net/en/browser",
    "platforms": ["Multi"], "tags": ["browser", "privacy"]
  },

  // --- BUREAUTIQUE & PDF ---
  {
    "id": "libreoffice", "name": "LibreOffice", "category": "bureautique-pdf",
    "description": "Suite bureautique complète, puissante et gratuite.",
    "official_url": "https://www.libreoffice.org/download/download/",
    "platforms": ["Multi"], "tags": ["office", "word", "excel"], "recommended": true
  },
  {
    "id": "onlyoffice", "name": "ONLYOFFICE", "category": "bureautique-pdf",
    "description": "Suite bureautique compatible MS Office avec édition collaborative.",
    "official_url": "https://www.onlyoffice.com/download-desktop.aspx",
    "platforms": ["Multi"], "tags": ["office", "cloud"], "recommended": true
  },
  {
    "id": "scribus", "name": "Scribus", "category": "bureautique-pdf",
    "description": "Logiciel de PAO professionnel pour la mise en page.",
    "official_url": "https://www.scribus.net/downloads/",
    "platforms": ["Multi"], "tags": ["pao", "design"]
  },
  {
    "id": "sumatrapdf", "name": "Sumatra PDF", "category": "bureautique-pdf",
    "description": "Lecteur PDF, ePub, MOBI très léger pour Windows.",
    "official_url": "https://www.sumatrapdfreader.org/download-free-pdf-viewer",
    "platforms": ["Windows"], "tags": ["pdf", "reader"], "recommended": true
  },
  {
    "id": "pdfsam", "name": "PDFsam Basic", "category": "bureautique-pdf",
    "description": "Outil pour diviser, fusionner et tourner des PDF.",
    "official_url": "https://pdfsam.org/download-pdfsam-basic/",
    "platforms": ["Multi"], "tags": ["pdf", "tools"], "recommended": true
  },
  {
    "id": "calibre", "name": "calibre", "category": "bureautique-pdf",
    "description": "Gestionnaire de bibliothèque d'e-books puissant.",
    "official_url": "https://calibre-ebook.com/download",
    "platforms": ["Multi"], "tags": ["ebook", "converter"], "recommended": true
  },
  {
    "id": "okular", "name": "Okular", "category": "bureautique-pdf",
    "description": "Lecteur de documents universel (PDF, EPub, etc.) par KDE.",
    "official_url": "https://okular.kde.org/download/",
    "platforms": ["Multi"], "tags": ["pdf", "reader"]
  },
  {
    "id": "evince", "name": "Evince", "category": "bureautique-pdf",
    "description": "Visionneuse de documents simple pour GNOME.",
    "official_url": "https://wiki.gnome.org/Apps/Evince",
    "platforms": ["Linux"], "tags": ["pdf", "reader"]
  },
  {
    "id": "zotero", "name": "Zotero", "category": "bureautique-pdf",
    "description": "Assistant de recherche pour collecter et citer vos sources.",
    "official_url": "https://www.zotero.org/download/",
    "platforms": ["Multi"], "tags": ["research", "bibliography"], "recommended": true
  },
  {
    "id": "texstudio", "name": "TeXstudio", "category": "bureautique-pdf",
    "description": "Environnement de développement intégré pour LaTeX.",
    "official_url": "https://www.texstudio.org/#download",
    "platforms": ["Multi"], "tags": ["latex", "editor"]
  },
  {
    "id": "lyx", "name": "LyX", "category": "bureautique-pdf",
    "description": "Processeur de documents basé sur la structure (WYSIWYM).",
    "official_url": "https://www.lyx.org/Download",
    "platforms": ["Multi"], "tags": ["latex", "editor"]
  },
  {
    "id": "drawio", "name": "draw.io", "category": "bureautique-pdf",
    "description": "Logiciel de diagrammes (diagrams.net) version bureau.",
    "official_url": "https://github.com/jgraph/drawio-desktop/releases",
    "platforms": ["Multi"], "tags": ["diagram", "chart"], "recommended": true
  },
  {
    "id": "projectlibre", "name": "ProjectLibre", "category": "bureautique-pdf",
    "description": "Alternative à Microsoft Project pour la gestion de projet.",
    "official_url": "https://www.projectlibre.com/product/projectlibre-open-source",
    "platforms": ["Multi"], "tags": ["project", "gantt"]
  },
  {
    "id": "ganttproject", "name": "GanttProject", "category": "bureautique-pdf",
    "description": "Outil de planification de projet et gestion de ressources.",
    "official_url": "https://www.ganttproject.biz/download",
    "platforms": ["Multi"], "tags": ["project", "gantt"]
  },
  {
    "id": "dia", "name": "Dia", "category": "bureautique-pdf",
    "description": "Éditeur de diagrammes similaire à Visio.",
    "official_url": "http://dia-installer.de/download/index.html",
    "platforms": ["Multi"], "tags": ["diagram", "chart"]
  },
  {
    "id": "pdfarranger", "name": "PDF Arranger", "category": "bureautique-pdf",
    "description": "Fusionner, diviser, tourner et réorganiser des pages PDF.",
    "official_url": "https://github.com/pdfarranger/pdfarranger",
    "platforms": ["Multi"], "tags": ["pdf", "tools"]
  },
  {
    "id": "calligra", "name": "Calligra Suite", "category": "bureautique-pdf",
    "description": "Suite bureautique et d'arts graphiques par KDE.",
    "official_url": "https://calligra.org/get-calligra/",
    "platforms": ["Linux"], "tags": ["office", "suite"]
  },
  {
    "id": "abiword", "name": "AbiWord", "category": "bureautique-pdf",
    "description": "Traitement de texte léger et efficace.",
    "official_url": "https://www.abisource.com/download/",
    "platforms": ["Linux", "Windows"], "tags": ["office", "word"]
  },
  {
    "id": "gnumeric", "name": "Gnumeric", "category": "bureautique-pdf",
    "description": "Tableur rapide et précis.",
    "official_url": "http://www.gnumeric.org/download.html",
    "platforms": ["Linux"], "tags": ["office", "excel"]
  },
  {
    "id": "sigil", "name": "Sigil", "category": "bureautique-pdf",
    "description": "Éditeur d'e-books EPUB multiplateforme.",
    "official_url": "https://sigil-ebook.com/download/",
    "platforms": ["Multi"], "tags": ["ebook", "editor"]
  },
  {
    "id": "freemind", "name": "FreeMind", "category": "bureautique-pdf",
    "description": "Logiciel de création de cartes heuristiques (mind mapping).",
    "official_url": "https://freemind.sourceforge.net/wiki/index.php/Download",
    "platforms": ["Multi"], "tags": ["mindmap", "brainstorm"]
  },
  {
    "id": "freeplane", "name": "Freeplane", "category": "bureautique-pdf",
    "description": "Outil de cartes mentales et gestion de connaissances (Fork de FreeMind).",
    "official_url": "https://www.freeplane.org/wiki/index.php/Download",
    "platforms": ["Multi"], "tags": ["mindmap", "brainstorm"]
  },

  // --- CRÉATION ---
  {
    "id": "blender", "name": "Blender", "category": "creation",
    "description": "Suite de création 3D complète (modélisation, animation, vidéo).",
    "official_url": "https://www.blender.org/download/",
    "platforms": ["Multi"], "tags": ["3d", "animation", "video"], "recommended": true
  },
  {
    "id": "gimp", "name": "GIMP", "category": "creation",
    "description": "Éditeur d'images avancé pour la retouche et la composition.",
    "official_url": "https://www.gimp.org/downloads/",
    "platforms": ["Multi"], "tags": ["image", "photo"], "recommended": true
  },
  {
    "id": "krita", "name": "Krita", "category": "creation",
    "description": "Programme de peinture numérique professionnel.",
    "official_url": "https://krita.org/en/download/krita-desktop/",
    "platforms": ["Multi"], "tags": ["painting", "drawing"], "recommended": true
  },
  {
    "id": "inkscape", "name": "Inkscape", "category": "creation",
    "description": "Éditeur de graphiques vectoriels de qualité pro (SVG).",
    "official_url": "https://inkscape.org/release/",
    "platforms": ["Multi"], "tags": ["vector", "svg"], "recommended": true
  },
  {
    "id": "darktable", "name": "Darktable", "category": "creation",
    "description": "Workflow photographique et développeur RAW.",
    "official_url": "https://www.darktable.org/install/",
    "platforms": ["Multi"], "tags": ["photo", "raw"], "recommended": true
  },
  {
    "id": "godot", "name": "Godot Engine", "category": "creation",
    "description": "Moteur de jeu 2D/3D léger et performant.",
    "official_url": "https://godotengine.org/download",
    "platforms": ["Multi"], "tags": ["game-dev", "3d"], "recommended": true
  },
  {
    "id": "rawtherapee", "name": "RawTherapee", "category": "creation",
    "description": "Traitement d'images RAW puissant.",
    "official_url": "https://rawtherapee.com/downloads/",
    "platforms": ["Multi"], "tags": ["photo", "raw"]
  },
  {
    "id": "freecad", "name": "FreeCAD", "category": "creation",
    "description": "Modélisateur 3D paramétrique pour la CAO.",
    "official_url": "https://www.freecad.org/downloads.php",
    "platforms": ["Multi"], "tags": ["cad", "3d", "engineering"]
  },
  {
    "id": "librecad", "name": "LibreCAD", "category": "creation",
    "description": "Application de CAO 2D gratuite.",
    "official_url": "https://librecad.org/#download",
    "platforms": ["Multi"], "tags": ["cad", "2d"]
  },
  {
    "id": "openscad", "name": "OpenSCAD", "category": "creation",
    "description": "Création de modèles 3D CAO via script.",
    "official_url": "https://openscad.org/downloads.html",
    "platforms": ["Multi"], "tags": ["cad", "code"]
  },
  {
    "id": "sweet-home-3d", "name": "Sweet Home 3D", "category": "creation",
    "description": "Aménagement intérieur pour dessiner le plan de votre maison.",
    "official_url": "https://www.sweethome3d.com/download.jsp",
    "platforms": ["Multi"], "tags": ["architecture", "3d"]
  },
  {
    "id": "pencil2d", "name": "Pencil2D", "category": "creation",
    "description": "Logiciel d'animation 2D facile et intuitif.",
    "official_url": "https://www.pencil2d.org/download/",
    "platforms": ["Multi"], "tags": ["animation", "2d"]
  },
  {
    "id": "opentoonz", "name": "OpenToonz", "category": "creation",
    "description": "Logiciel de production d'animation 2D professionnel.",
    "official_url": "https://opentoonz.github.io/e/download/opentoonz.html",
    "platforms": ["Windows", "macOS"], "tags": ["animation", "2d"]
  },
  {
    "id": "synfig", "name": "Synfig Studio", "category": "creation",
    "description": "Logiciel d'animation 2D vectorielle.",
    "official_url": "https://www.synfig.org/download/",
    "platforms": ["Multi"], "tags": ["animation", "2d"]
  },
  {
    "id": "digikam", "name": "digiKam", "category": "creation",
    "description": "Gestionnaire de photos professionnel.",
    "official_url": "https://www.digikam.org/download/",
    "platforms": ["Multi"], "tags": ["photo", "management"]
  },
  {
    "id": "fontforge", "name": "FontForge", "category": "creation",
    "description": "Éditeur de polices de caractères complet.",
    "official_url": "https://fontforge.org/en-US/downloads/",
    "platforms": ["Multi"], "tags": ["fonts", "design"]
  },
  {
    "id": "natron", "name": "Natron", "category": "creation",
    "description": "Logiciel de compositing nodal pour les effets visuels.",
    "official_url": "https://natrongithub.github.io/",
    "platforms": ["Multi"], "tags": ["vfx", "video"]
  },
  {
    "id": "meshlab", "name": "MeshLab", "category": "creation",
    "description": "Système de traitement et d'édition de maillages 3D.",
    "official_url": "https://www.meshlab.net/#download",
    "platforms": ["Multi"], "tags": ["3d", "processing"]
  },
  {
    "id": "leocad", "name": "LeoCAD", "category": "creation",
    "description": "Programme de CAO pour créer des modèles LEGO virtuels.",
    "official_url": "https://www.leocad.org/download.html",
    "platforms": ["Multi"], "tags": ["cad", "lego"]
  },
  {
    "id": "tiled", "name": "Tiled", "category": "creation",
    "description": "Éditeur de cartes (tile map) flexible pour le développement de jeux.",
    "official_url": "https://www.mapeditor.org/download.html",
    "platforms": ["Multi"], "tags": ["gamedev", "maps"]
  },

  // --- AUDIO & VIDÉO ---
  {
    "id": "vlc", "name": "VLC", "category": "audio-video",
    "description": "Lecteur multimédia universel qui lit presque tout.",
    "official_url": "https://www.videolan.org/vlc/",
    "platforms": ["Multi"], "tags": ["player", "video"], "recommended": true
  },
  {
    "id": "mpv", "name": "mpv", "category": "audio-video",
    "description": "Lecteur multimédia minimaliste et puissant.",
    "official_url": "https://mpv.io/installation/",
    "platforms": ["Multi"], "tags": ["player", "minimal"], "recommended": true
  },
  {
    "id": "ffmpeg", "name": "FFmpeg", "category": "audio-video",
    "description": "Outil ultime pour enregistrer, convertir et streamer.",
    "official_url": "https://ffmpeg.org/download.html",
    "platforms": ["Multi"], "tags": ["cli", "converter"], "recommended": true
  },
  {
    "id": "obs-studio", "name": "OBS Studio", "category": "audio-video",
    "description": "Logiciel d'enregistrement et de streaming en direct.",
    "official_url": "https://obsproject.com/download",
    "platforms": ["Multi"], "tags": ["streaming", "recording"], "recommended": true
  },
  {
    "id": "kdenlive", "name": "Kdenlive", "category": "audio-video",
    "description": "Montage vidéo non-linéaire avancé.",
    "official_url": "https://kdenlive.org/en/download/",
    "platforms": ["Multi"], "tags": ["video-editor", "montage"], "recommended": true
  },
  {
    "id": "shotcut", "name": "Shotcut", "category": "audio-video",
    "description": "Éditeur vidéo multiplateforme supportant de nombreux formats.",
    "official_url": "https://shotcut.org/download/",
    "platforms": ["Multi"], "tags": ["video-editor", "montage"]
  },
  {
    "id": "audacity", "name": "Audacity", "category": "audio-video",
    "description": "Enregistrement et édition audio multipiste.",
    "official_url": "https://www.audacityteam.org/download/",
    "platforms": ["Multi"], "tags": ["audio", "editor"], "recommended": true
  },
  {
    "id": "handbrake", "name": "HandBrake", "category": "audio-video",
    "description": "Transcodeur vidéo pour convertir des fichiers.",
    "official_url": "https://handbrake.fr/downloads.php",
    "platforms": ["Multi"], "tags": ["converter", "video"], "recommended": true
  },
  {
    "id": "openshot", "name": "OpenShot", "category": "audio-video",
    "description": "Éditeur vidéo facile à utiliser.",
    "official_url": "https://www.openshot.org/download/",
    "platforms": ["Multi"], "tags": ["video-editor", "simple"]
  },
  {
    "id": "kodi", "name": "Kodi", "category": "audio-video",
    "description": "Centre de divertissement multimédia (Home Cinema).",
    "official_url": "https://kodi.tv/download/",
    "platforms": ["Multi"], "tags": ["media-center", "tv"]
  },
  {
    "id": "jellyfin", "name": "Jellyfin", "category": "audio-video",
    "description": "Serveur média libre (alternative à Plex).",
    "official_url": "https://jellyfin.org/downloads/",
    "platforms": ["Multi"], "tags": ["media-server", "streaming"]
  },
  {
    "id": "lmms", "name": "LMMS", "category": "audio-video",
    "description": "Station de travail audio numérique (DAW) pour la musique.",
    "official_url": "https://lmms.io/download",
    "platforms": ["Multi"], "tags": ["daw", "music"]
  },
  {
    "id": "musescore", "name": "MuseScore", "category": "audio-video",
    "description": "Création de partitions musicales.",
    "official_url": "https://musescore.org/en/download",
    "platforms": ["Multi"], "tags": ["music", "score"]
  },
  {
    "id": "mixxx", "name": "Mixxx", "category": "audio-video",
    "description": "Logiciel de DJ professionnel.",
    "official_url": "https://mixxx.org/download/",
    "platforms": ["Multi"], "tags": ["dj", "music"]
  },
  {
    "id": "ardour", "name": "Ardour", "category": "audio-video",
    "description": "DAW complet pour l'enregistrement et le mixage.",
    "official_url": "https://ardour.org/download.html",
    "platforms": ["Multi"], "tags": ["daw", "pro"]
  },
  {
    "id": "tenacity", "name": "Tenacity", "category": "audio-video",
    "description": "Éditeur audio (Fork d'Audacity focalisé vie privée).",
    "official_url": "https://tenacityaudio.org/",
    "platforms": ["Multi"], "tags": ["audio", "editor"]
  },
  {
    "id": "olive", "name": "Olive", "category": "audio-video",
    "description": "Éditeur vidéo non-linéaire en cours de développement.",
    "official_url": "https://olivevideoeditor.org/download",
    "platforms": ["Multi"], "tags": ["video-editor", "beta"]
  },
  {
    "id": "clementine", "name": "Clementine", "category": "audio-video",
    "description": "Lecteur de musique et gestionnaire de bibliothèque moderne.",
    "official_url": "https://www.clementine-player.org/downloads",
    "platforms": ["Multi"], "tags": ["music", "player"]
  },
  {
    "id": "strawberry", "name": "Strawberry", "category": "audio-video",
    "description": "Lecteur audio et organisateur de collection (Fork de Clementine).",
    "official_url": "https://www.strawberrymusicplayer.org/",
    "platforms": ["Multi"], "tags": ["music", "player"]
  },
  {
    "id": "mpc-hc", "name": "MPC-HC", "category": "audio-video",
    "description": "Lecteur multimédia extrêmement léger pour Windows.",
    "official_url": "https://github.com/clsid2/mpc-hc/releases",
    "platforms": ["Windows"], "tags": ["player", "lightweight"]
  },
  {
    "id": "qmmp", "name": "Qmmp", "category": "audio-video",
    "description": "Lecteur audio avec interface similaire à Winamp.",
    "official_url": "https://qmmp.ylsoftware.com/downloads.php",
    "platforms": ["Linux", "Windows"], "tags": ["player", "winamp"]
  },
  {
    "id": "deadbeef", "name": "DeaDBeeF", "category": "audio-video",
    "description": "Lecteur audio modulaire ultime.",
    "official_url": "https://deadbeef.sourceforge.io/download.html",
    "platforms": ["Multi"], "tags": ["player", "audio"]
  },

  // --- DEV / DATA / IA ---
  {
    "id": "vscodium", "name": "VSCodium", "category": "dev-data-ia",
    "description": "VS Code sans la télémétrie de Microsoft.",
    "official_url": "https://vscodium.com/#install",
    "platforms": ["Multi"], "tags": ["ide", "editor"], "recommended": true
  },
  {
    "id": "notepad-plus-plus", "name": "Notepad++", "category": "dev-data-ia",
    "description": "Éditeur de code source léger et rapide.",
    "official_url": "https://notepad-plus-plus.org/downloads/",
    "platforms": ["Windows"], "tags": ["editor", "lightweight"], "recommended": true
  },
  {
    "id": "git", "name": "Git", "category": "dev-data-ia",
    "description": "Système de contrôle de version distribué.",
    "official_url": "https://git-scm.com/downloads",
    "platforms": ["Multi"], "tags": ["version-control", "cli"], "recommended": true
  },
  {
    "id": "python", "name": "Python", "category": "dev-data-ia",
    "description": "Langage de programmation polyvalent et populaire.",
    "official_url": "https://www.python.org/downloads/",
    "platforms": ["Multi"], "tags": ["language", "ai"], "recommended": true
  },
  {
    "id": "nodejs", "name": "Node.js", "category": "dev-data-ia",
    "description": "Environnement d'exécution JavaScript.",
    "official_url": "https://nodejs.org/en/download",
    "platforms": ["Multi"], "tags": ["runtime", "web"], "recommended": true
  },
  {
    "id": "go", "name": "Go", "category": "dev-data-ia",
    "description": "Langage simple, fiable et efficace par Google.",
    "official_url": "https://go.dev/dl/",
    "platforms": ["Multi"], "tags": ["language", "backend"]
  },
  {
    "id": "rust", "name": "Rust", "category": "dev-data-ia",
    "description": "Langage pour des logiciels fiables et performants.",
    "official_url": "https://www.rust-lang.org/tools/install",
    "platforms": ["Multi"], "tags": ["language", "system"]
  },
  {
    "id": "dbeaver", "name": "DBeaver", "category": "dev-data-ia",
    "description": "Outil de base de données universel.",
    "official_url": "https://dbeaver.io/download/",
    "platforms": ["Multi"], "tags": ["db", "sql"], "recommended": true
  },
  {
    "id": "postman-alt", "name": "Hoppscotch", "category": "dev-data-ia",
    "description": "Développement d'API (Alternative à Postman).",
    "official_url": "https://hoppscotch.io/",
    "platforms": ["Web"], "tags": ["api", "tools"]
  },
  {
    "id": "eclipse", "name": "Eclipse IDE", "category": "dev-data-ia",
    "description": "IDE célèbre pour le développement Java.",
    "official_url": "https://www.eclipse.org/downloads/",
    "platforms": ["Multi"], "tags": ["ide", "java"]
  },
  {
    "id": "intellij", "name": "IntelliJ IDEA CE", "category": "dev-data-ia",
    "description": "IDE Java/Kotlin avancé (version Community).",
    "official_url": "https://www.jetbrains.com/idea/download/",
    "platforms": ["Multi"], "tags": ["ide", "java"]
  },
  {
    "id": "pycharm", "name": "PyCharm CE", "category": "dev-data-ia",
    "description": "IDE Python intelligent (version Community).",
    "official_url": "https://www.jetbrains.com/pycharm/download/",
    "platforms": ["Multi"], "tags": ["ide", "python"]
  },
  {
    "id": "tensorflow", "name": "TensorFlow", "category": "dev-data-ia",
    "description": "Plateforme pour le Machine Learning.",
    "official_url": "https://www.tensorflow.org/install",
    "platforms": ["Multi"], "tags": ["ai", "ml"]
  },
  {
    "id": "pytorch", "name": "PyTorch", "category": "dev-data-ia",
    "description": "Framework de ML flexible et performant.",
    "official_url": "https://pytorch.org/get-started/locally/",
    "platforms": ["Multi"], "tags": ["ai", "ml"]
  },
  {
    "id": "jupyter", "name": "JupyterLab", "category": "dev-data-ia",
    "description": "Notebooks interactifs pour la data science.",
    "official_url": "https://jupyter.org/install",
    "platforms": ["Multi"], "tags": ["data", "notebook"], "recommended": true
  },
  {
    "id": "rstudio", "name": "RStudio Desktop", "category": "dev-data-ia",
    "description": "IDE pour R (calcul statistique).",
    "official_url": "https://posit.co/download/rstudio-desktop/",
    "platforms": ["Multi"], "tags": ["data", "stats"]
  },
  {
    "id": "postgresql", "name": "PostgreSQL", "category": "dev-data-ia",
    "description": "SGBD relationnel objet puissant.",
    "official_url": "https://www.postgresql.org/download/",
    "platforms": ["Multi"], "tags": ["db", "sql"]
  },
  {
    "id": "mariadb", "name": "MariaDB", "category": "dev-data-ia",
    "description": "Base de données relationnelle (Fork de MySQL).",
    "official_url": "https://mariadb.org/download/",
    "platforms": ["Multi"], "tags": ["db", "sql"]
  },
  {
    "id": "sqlite", "name": "SQLite", "category": "dev-data-ia",
    "description": "Moteur de base de données SQL autonome.",
    "official_url": "https://www.sqlite.org/download.html",
    "platforms": ["Multi"], "tags": ["db", "sql"]
  },
  {
    "id": "redis", "name": "Redis", "category": "dev-data-ia",
    "description": "Store de structure de données en mémoire.",
    "official_url": "https://redis.io/download/",
    "platforms": ["Linux"], "tags": ["db", "cache"]
  },
  {
    "id": "mongodb", "name": "MongoDB Community", "category": "dev-data-ia",
    "description": "Base de données NoSQL orientée documents.",
    "official_url": "https://www.mongodb.com/try/download/community",
    "platforms": ["Multi"], "tags": ["db", "nosql"]
  },
  {
    "id": "neovim", "name": "Neovim", "category": "dev-data-ia",
    "description": "Éditeur de texte hyperextensible basé sur Vim.",
    "official_url": "https://github.com/neovim/neovim/releases",
    "platforms": ["Multi"], "tags": ["editor", "cli"]
  },
  {
    "id": "emacs", "name": "GNU Emacs", "category": "dev-data-ia",
    "description": "Éditeur de texte extensible et personnalisable.",
    "official_url": "https://www.gnu.org/software/emacs/download.html",
    "platforms": ["Multi"], "tags": ["editor", "cli"]
  },
  {
    "id": "geany", "name": "Geany", "category": "dev-data-ia",
    "description": "IDE léger et rapide.",
    "official_url": "https://www.geany.org/download/releases/",
    "platforms": ["Multi"], "tags": ["ide", "lightweight"]
  },
  {
    "id": "php", "name": "PHP", "category": "dev-data-ia",
    "description": "Langage de script populaire pour le web.",
    "official_url": "https://www.php.net/downloads",
    "platforms": ["Multi"], "tags": ["language", "web"]
  },

  // --- GESTION & BI ---
  {
    "id": "odoo", "name": "Odoo", "category": "gestion-bi",
    "description": "Suite ERP/CRM intégrée (Community Edition).",
    "official_url": "https://www.odoo.com/page/download",
    "platforms": ["Multi"], "tags": ["erp", "crm"], "recommended": true
  },
  {
    "id": "dolibarr", "name": "Dolibarr", "category": "gestion-bi",
    "description": "ERP et CRM simple pour PME et indépendants.",
    "official_url": "https://www.dolibarr.org/downloads.php",
    "platforms": ["Web"], "tags": ["erp", "crm"], "recommended": true
  },
  {
    "id": "metabase", "name": "Metabase", "category": "gestion-bi",
    "description": "Business Intelligence simple pour tous.",
    "official_url": "https://www.metabase.com/start/",
    "platforms": ["Java", "Docker"], "tags": ["bi", "analytics"], "recommended": true
  },
  {
    "id": "matomo", "name": "Matomo", "category": "gestion-bi",
    "description": "Alternative éthique à Google Analytics.",
    "official_url": "https://matomo.org/download/",
    "platforms": ["Web"], "tags": ["analytics", "privacy"], "recommended": true
  },
  {
    "id": "erpnext", "name": "ERPNext", "category": "gestion-bi",
    "description": "ERP moderne et complet (Python/JS).",
    "official_url": "https://erpnext.com/download",
    "platforms": ["Linux"], "tags": ["erp", "business"]
  },
  {
    "id": "superset", "name": "Apache Superset", "category": "gestion-bi",
    "description": "Plateforme moderne d'exploration de données.",
    "official_url": "https://superset.apache.org/docs/installation/installing-superset-from-scratch",
    "platforms": ["Web"], "tags": ["bi", "viz"]
  },
  {
    "id": "grafana", "name": "Grafana", "category": "gestion-bi",
    "description": "Visualisation et monitoring de métriques.",
    "official_url": "https://grafana.com/grafana/download",
    "platforms": ["Multi"], "tags": ["monitoring", "dashboard"]
  },
  {
    "id": "glpi", "name": "GLPI", "category": "gestion-bi",
    "description": "Gestion de parc informatique et helpdesk.",
    "official_url": "https://glpi-project.org/downloads/",
    "platforms": ["Web"], "tags": ["itsm", "inventory"]
  },
  {
    "id": "suitecrm", "name": "SuiteCRM", "category": "gestion-bi",
    "description": "CRM open source de classe entreprise.",
    "official_url": "https://suitecrm.com/download/",
    "platforms": ["Web"], "tags": ["crm", "sales"]
  },
  {
    "id": "mautic", "name": "Mautic", "category": "gestion-bi",
    "description": "Automatisation marketing open source.",
    "official_url": "https://www.mautic.org/download",
    "platforms": ["Web"], "tags": ["marketing", "automation"]
  },
  {
    "id": "invoiceplane", "name": "InvoicePlane", "category": "gestion-bi",
    "description": "Application de facturation simple.",
    "official_url": "https://www.invoiceplane.com/downloads",
    "platforms": ["Web"], "tags": ["invoice", "billing"]
  },
  {
    "id": "zabbix", "name": "Zabbix", "category": "gestion-bi",
    "description": "Solution de monitoring de niveau entreprise.",
    "official_url": "https://www.zabbix.com/download",
    "platforms": ["Linux"], "tags": ["monitoring", "it"]
  },
  {
    "id": "prometheus", "name": "Prometheus", "category": "gestion-bi",
    "description": "Système de monitoring et d'alerte.",
    "official_url": "https://prometheus.io/download/",
    "platforms": ["Multi"], "tags": ["monitoring", "metrics"]
  },
  {
    "id": "kimai", "name": "Kimai", "category": "gestion-bi",
    "description": "Logiciel de suivi du temps (Time Tracking).",
    "official_url": "https://www.kimai.org/download/",
    "platforms": ["Web"], "tags": ["timetracking", "productivity"]
  },
  {
    "id": "akaunting", "name": "Akaunting", "category": "gestion-bi",
    "description": "Comptabilité en ligne pour petites entreprises.",
    "official_url": "https://akaunting.com/download",
    "platforms": ["Web"], "tags": ["accounting", "finance"]
  },
  {
    "id": "orangehrm", "name": "OrangeHRM", "category": "gestion-bi",
    "description": "Gestion des ressources humaines (RH).",
    "official_url": "https://www.orangehrm.com/open-source/download-orangehrm/",
    "platforms": ["Web"], "tags": ["hr", "management"]
  },
  {
    "id": "civicrm", "name": "CiviCRM", "category": "gestion-bi",
    "description": "CRM pour organisations à but non lucratif.",
    "official_url": "https://civicrm.org/download",
    "platforms": ["Web"], "tags": ["crm", "non-profit"]
  },
  {
    "id": "kanboard", "name": "Kanboard", "category": "gestion-bi",
    "description": "Gestion de projet Kanban minimaliste.",
    "official_url": "https://kanboard.org/",
    "platforms": ["Web"], "tags": ["project", "kanban"]
  },
  {
    "id": "redmine", "name": "Redmine", "category": "gestion-bi",
    "description": "Gestion de projet web flexible.",
    "official_url": "https://www.redmine.org/projects/redmine/wiki/Download",
    "platforms": ["Web"], "tags": ["project", "issue-tracker"]
  },
  {
    "id": "focalboard", "name": "Focalboard", "category": "gestion-bi",
    "description": "Alternative à Trello et Notion.",
    "official_url": "https://www.focalboard.com/download/",
    "platforms": ["Server", "Desktop"], "tags": ["project", "kanban"]
  },

  // --- NOTES & WIKI ---
  {
    "id": "joplin", "name": "Joplin", "category": "notes-wiki",
    "description": "Notes et to-do list sécurisées et synchronisées.",
    "official_url": "https://joplinapp.org/download/",
    "platforms": ["Multi"], "tags": ["notes", "markdown"], "recommended": true
  },
  {
    "id": "logseq", "name": "Logseq", "category": "notes-wiki",
    "description": "Gestion de connaissances 'privacy-first' (outliner).",
    "official_url": "https://logseq.com/downloads",
    "platforms": ["Multi"], "tags": ["pkm", "notes"], "recommended": true
  },
  {
    "id": "standard-notes", "name": "Standard Notes", "category": "notes-wiki",
    "description": "Notes chiffrées de bout en bout.",
    "official_url": "https://standardnotes.com/download",
    "platforms": ["Multi"], "tags": ["notes", "security"], "recommended": true
  },
  {
    "id": "trilium", "name": "Trilium Notes", "category": "notes-wiki",
    "description": "Base de connaissances hiérarchique personnelle.",
    "official_url": "https://github.com/zadam/trilium/releases",
    "platforms": ["Multi"], "tags": ["pkm", "notes"]
  },
  {
    "id": "dokuwiki", "name": "DokuWiki", "category": "notes-wiki",
    "description": "Wiki simple sans base de données.",
    "official_url": "https://download.dokuwiki.org/",
    "platforms": ["Web"], "tags": ["wiki", "php"]
  },
  {
    "id": "mediawiki", "name": "MediaWiki", "category": "notes-wiki",
    "description": "Le moteur de wiki de Wikipédia.",
    "official_url": "https://www.mediawiki.org/wiki/Download",
    "platforms": ["Web"], "tags": ["wiki", "enterprise"]
  },
  {
    "id": "bookstack", "name": "BookStack", "category": "notes-wiki",
    "description": "Plateforme organisée pour la documentation.",
    "official_url": "https://www.bookstackapp.com/docs/admin/installation/",
    "platforms": ["Web"], "tags": ["wiki", "docs"]
  },
  {
    "id": "zim", "name": "Zim", "category": "notes-wiki",
    "description": "Wiki de bureau graphique.",
    "official_url": "https://zim-wiki.org/downloads.html",
    "platforms": ["Multi"], "tags": ["wiki", "desktop"]
  },
  {
    "id": "xournalpp", "name": "Xournal++", "category": "notes-wiki",
    "description": "Prise de notes manuscrites avec support PDF.",
    "official_url": "https://xournalpp.github.io/installation/",
    "platforms": ["Multi"], "tags": ["handwriting", "pdf"]
  },
  {
    "id": "qownnotes", "name": "QOwnNotes", "category": "notes-wiki",
    "description": "Notes en markdown avec support Nextcloud.",
    "official_url": "https://www.qownnotes.org/installation/",
    "platforms": ["Multi"], "tags": ["notes", "markdown"]
  },
  {
    "id": "cherrytree", "name": "CherryTree", "category": "notes-wiki",
    "description": "Prise de notes hiérarchique.",
    "official_url": "https://www.giuspen.com/cherrytree/#downl",
    "platforms": ["Multi"], "tags": ["notes", "code"]
  },
  {
    "id": "tiddlywiki", "name": "TiddlyWiki", "category": "notes-wiki",
    "description": "Carnet de notes web non-linéaire unique.",
    "official_url": "https://tiddlywiki.com/",
    "platforms": ["Web"], "tags": ["wiki", "pkm"]
  },
  {
    "id": "wikijs", "name": "Wiki.js", "category": "notes-wiki",
    "description": "Wiki moderne et puissant basé sur Node.js.",
    "official_url": "https://js.wiki/get-started",
    "platforms": ["Web"], "tags": ["wiki", "modern"]
  },
  {
    "id": "xwiki", "name": "XWiki", "category": "notes-wiki",
    "description": "Wiki d'entreprise avancé.",
    "official_url": "https://www.xwiki.org/xwiki/bin/view/Main/Download",
    "platforms": ["Web"], "tags": ["wiki", "enterprise"]
  },
  {
    "id": "laverna", "name": "Laverna", "category": "notes-wiki",
    "description": "Alternative open source à Evernote chiffrée.",
    "official_url": "https://github.com/Laverna/laverna",
    "platforms": ["Web", "Desktop"], "tags": ["notes", "privacy"]
  },
  {
    "id": "simplenote-electron", "name": "Simplenote (Electron)", "category": "notes-wiki",
    "description": "Notes simples et synchronisées (Client open source).",
    "official_url": "https://github.com/Automattic/simplenote-electron/releases",
    "platforms": ["Multi"], "tags": ["notes", "sync"]
  },
  {
    "id": "notable", "name": "Notable", "category": "notes-wiki",
    "description": "Prise de notes basée sur Markdown (anciennes versions FOSS).",
    "official_url": "https://github.com/notable/notable",
    "platforms": ["Multi"], "tags": ["notes", "markdown"]
  },
  {
    "id": "boostnote", "name": "Boost Note", "category": "notes-wiki",
    "description": "Notes pour développeurs.",
    "official_url": "https://github.com/BoostIO/BoostNote.next",
    "platforms": ["Multi"], "tags": ["notes", "dev"]
  },
  {
    "id": "leanote", "name": "Leanote", "category": "notes-wiki",
    "description": "Plateforme de notes et blog (similaire à Evernote).",
    "official_url": "http://leanote.org/",
    "platforms": ["Web"], "tags": ["notes", "blog"]
  },
  {
    "id": "min", "name": "Min", "category": "notes-wiki",
    "description": "Navigateur minimaliste avec gestion de tâches.",
    "official_url": "https://minbrowser.org/",
    "platforms": ["Multi"], "tags": ["browser", "tasks"]
  },

  // --- BACKUP & SYNC ---
  {
    "id": "syncthing", "name": "Syncthing", "category": "backup-sync",
    "description": "Synchro de fichiers décentralisée entre appareils.",
    "official_url": "https://syncthing.net/downloads/",
    "platforms": ["Multi"], "tags": ["sync", "p2p"], "recommended": true
  },
  {
    "id": "rclone", "name": "rclone", "category": "backup-sync",
    "description": "Le 'couteau suisse' du stockage cloud.",
    "official_url": "https://rclone.org/downloads/",
    "platforms": ["Multi"], "tags": ["cli", "cloud"], "recommended": true
  },
  {
    "id": "restic", "name": "restic", "category": "backup-sync",
    "description": "Sauvegarde rapide, sécurisée et dédupliquée.",
    "official_url": "https://restic.net/#download",
    "platforms": ["Multi"], "tags": ["backup", "cli"], "recommended": true
  },
  {
    "id": "duplicati", "name": "Duplicati", "category": "backup-sync",
    "description": "Sauvegardes chiffrées en ligne avec interface web.",
    "official_url": "https://www.duplicati.com/download",
    "platforms": ["Multi"], "tags": ["backup", "gui"]
  },
  {
    "id": "borgbackup", "name": "BorgBackup", "category": "backup-sync",
    "description": "Sauvegarde dédupliquant avec compression.",
    "official_url": "https://www.borgbackup.org/releases/",
    "platforms": ["Linux", "macOS"], "tags": ["backup", "deduplication"]
  },
  {
    "id": "freefilesync", "name": "FreeFileSync", "category": "backup-sync",
    "description": "Comparaison et synchronisation de dossiers.",
    "official_url": "https://freefilesync.org/download.php",
    "platforms": ["Multi"], "tags": ["sync", "gui"]
  },
  {
    "id": "rsync", "name": "rsync", "category": "backup-sync",
    "description": "Utilitaire de copie de fichiers rapide standard.",
    "official_url": "https://rsync.samba.org/download.html",
    "platforms": ["Linux", "macOS"], "tags": ["cli", "sync"]
  },
  {
    "id": "urbackup", "name": "UrBackup", "category": "backup-sync",
    "description": "Système de sauvegarde Client/Serveur facile.",
    "official_url": "https://www.urbackup.org/download.html",
    "platforms": ["Multi"], "tags": ["backup", "server"]
  },
  {
    "id": "nextcloud-desktop", "name": "Nextcloud Client", "category": "backup-sync",
    "description": "Client de synchronisation pour serveur Nextcloud.",
    "official_url": "https://nextcloud.com/install/",
    "platforms": ["Multi"], "tags": ["sync", "cloud"]
  },
  {
    "id": "owncloud-desktop", "name": "ownCloud Client", "category": "backup-sync",
    "description": "Client de synchronisation pour serveur ownCloud.",
    "official_url": "https://owncloud.com/desktop-app/",
    "platforms": ["Multi"], "tags": ["sync", "cloud"]
  },
  {
    "id": "seafile-client", "name": "Seafile Client", "category": "backup-sync",
    "description": "Client pour Seafile, synchro rapide et fiable.",
    "official_url": "https://www.seafile.com/en/download/",
    "platforms": ["Multi"], "tags": ["sync", "cloud"]
  },
  {
    "id": "bacula", "name": "Bacula", "category": "backup-sync",
    "description": "Solution de sauvegarde réseau d'entreprise.",
    "official_url": "https://www.bacula.org/bacula-binary-package-download/",
    "platforms": ["Linux"], "tags": ["backup", "enterprise"]
  },
  {
    "id": "amanda", "name": "Amanda", "category": "backup-sync",
    "description": "Advanced Maryland Automatic Network Disk Archiver.",
    "official_url": "http://www.amanda.org/download.php",
    "platforms": ["Linux"], "tags": ["backup", "network"]
  },
  {
    "id": "grsync", "name": "Grsync", "category": "backup-sync",
    "description": "Interface graphique pour rsync.",
    "official_url": "https://opbyte.it/grsync/",
    "platforms": ["Linux"], "tags": ["gui", "sync"]
  },
  {
    "id": "backuppc", "name": "BackupPC", "category": "backup-sync",
    "description": "Système de sauvegarde haute performance.",
    "official_url": "https://backuppc.github.io/backuppc/",
    "platforms": ["Linux"], "tags": ["backup", "server"]
  },
  {
    "id": "kopia", "name": "Kopia", "category": "backup-sync",
    "description": "Sauvegarde rapide et sécurisée (chiffrée/dédupliquée).",
    "official_url": "https://kopia.io/docs/installation/",
    "platforms": ["Multi"], "tags": ["backup", "modern"]
  },
  {
    "id": "vorta", "name": "Vorta", "category": "backup-sync",
    "description": "Interface graphique pour BorgBackup.",
    "official_url": "https://vorta.borgbase.com/install/",
    "platforms": ["Linux", "macOS"], "tags": ["gui", "backup"]
  },
  {
    "id": "pika-backup", "name": "Pika Backup", "category": "backup-sync",
    "description": "Sauvegardes simples basées sur Borg (GNOME).",
    "official_url": "https://apps.gnome.org/app/org.gnome.World.PikaBackup/",
    "platforms": ["Linux"], "tags": ["gui", "simple"]
  },
  {
    "id": "deja-dup", "name": "Déjà Dup", "category": "backup-sync",
    "description": "Outil de sauvegarde simple intégré à GNOME.",
    "official_url": "https://gitlab.gnome.org/World/deja-dup",
    "platforms": ["Linux"], "tags": ["gui", "simple"]
  },
  {
    "id": "unison", "name": "Unison", "category": "backup-sync",
    "description": "Outil de synchronisation de fichiers bi-directionnel.",
    "official_url": "https://github.com/bcpierce00/unison/releases",
    "platforms": ["Multi"], "tags": ["sync", "cli"]
  },

  // --- ANDROID ---
  {
    "id": "f-droid", "name": "F-Droid", "category": "android",
    "description": "Catalogue d'applications libres et open source.",
    "official_url": "https://f-droid.org/",
    "platforms": ["Android"], "tags": ["store", "manager"], "recommended": true
  },
  {
    "id": "aurora-store", "name": "Aurora Store", "category": "android",
    "description": "Client Play Store anonyme (sans compte Google).",
    "official_url": "https://auroraoss.com/",
    "platforms": ["Android"], "tags": ["store", "privacy"], "recommended": true
  },
  {
    "id": "newpipe", "name": "NewPipe", "category": "android",
    "description": "Lecteur YouTube léger et privé.",
    "official_url": "https://newpipe.net/",
    "platforms": ["Android"], "tags": ["video", "youtube"], "recommended": true
  },
  {
    "id": "k9-mail", "name": "K-9 Mail", "category": "android",
    "description": "Client email avancé (futur Thunderbird Android).",
    "official_url": "https://k9mail.app/",
    "platforms": ["Android"], "tags": ["email", "client"], "recommended": true
  },
  {
    "id": "aegis", "name": "Aegis", "category": "android",
    "description": "Authentificateur 2FA sécurisé et simple.",
    "official_url": "https://getaegis.app/",
    "platforms": ["Android"], "tags": ["security", "2fa"], "recommended": true
  },
  {
    "id": "antennapod", "name": "AntennaPod", "category": "android",
    "description": "Gestionnaire de podcasts.",
    "official_url": "https://antennapod.org/",
    "platforms": ["Android"], "tags": ["podcast", "audio"]
  },
  {
    "id": "osmand", "name": "OsmAnd", "category": "android",
    "description": "GPS et cartes hors ligne (OpenStreetMap).",
    "official_url": "https://osmand.net/",
    "platforms": ["Android"], "tags": ["maps", "gps"], "recommended": true
  },
  {
    "id": "termux", "name": "Termux", "category": "android",
    "description": "Émulateur de terminal et environnement Linux.",
    "official_url": "https://termux.dev/en/",
    "platforms": ["Android"], "tags": ["terminal", "tools"], "recommended": true
  },
  {
    "id": "signal-android", "name": "Signal", "category": "android",
    "description": "Messagerie privée chiffrée.",
    "official_url": "https://signal.org/android/apk/",
    "platforms": ["Android"], "tags": ["chat", "privacy"]
  },
  {
    "id": "vlc-android", "name": "VLC for Android", "category": "android",
    "description": "Lecteur multimédia universel.",
    "official_url": "https://www.videolan.org/vlc/download-android.html",
    "platforms": ["Android"], "tags": ["video", "audio"]
  },
  {
    "id": "netguard", "name": "NetGuard", "category": "android",
    "description": "Pare-feu internet sans root.",
    "official_url": "https://github.com/M66B/NetGuard/releases",
    "platforms": ["Android"], "tags": ["firewall", "privacy"]
  },
  {
    "id": "organic-maps", "name": "Organic Maps", "category": "android",
    "description": "Cartes hors ligne rapides (Fork Maps.me).",
    "official_url": "https://organicmaps.app/",
    "platforms": ["Android"], "tags": ["maps", "gps"]
  },
  {
    "id": "open-camera", "name": "Open Camera", "category": "android",
    "description": "Appareil photo complet et léger.",
    "official_url": "https://opencamera.org.uk/",
    "platforms": ["Android"], "tags": ["photo", "tools"]
  },
  {
    "id": "simple-gallery", "name": "Simple Gallery", "category": "android",
    "description": "Galerie photo hors ligne hautement personnalisable.",
    "official_url": "https://github.com/SimpleMobileTools/Simple-Gallery",
    "platforms": ["Android"], "tags": ["photo", "gallery"]
  },
  {
    "id": "tusky", "name": "Tusky", "category": "android",
    "description": "Client léger pour Mastodon.",
    "official_url": "https://tusky.app/",
    "platforms": ["Android"], "tags": ["social", "fediverse"]
  },
  {
    "id": "fedilab", "name": "Fedilab", "category": "android",
    "description": "Client multi-comptes pour le Fediverse.",
    "official_url": "https://fedilab.app/",
    "platforms": ["Android"], "tags": ["social", "fediverse"]
  },
  {
    "id": "bromite", "name": "Bromite", "category": "android",
    "description": "Navigateur Chromium avec adblock et vie privée.",
    "official_url": "https://www.bromite.org/",
    "platforms": ["Android"], "tags": ["browser", "privacy"]
  },
  {
    "id": "fair-email", "name": "FairEmail", "category": "android",
    "description": "Client email orienté vie privée.",
    "official_url": "https://email.faircode.eu/",
    "platforms": ["Android"], "tags": ["email", "privacy"]
  },
  {
    "id": "lawnchair", "name": "Lawnchair", "category": "android",
    "description": "Lanceur d'applications (Launcher) personnalisable.",
    "official_url": "https://lawnchair.app/",
    "platforms": ["Android"], "tags": ["launcher", "ui"]
  },
  {
    "id": "anysoftkeyboard", "name": "AnySoftKeyboard", "category": "android",
    "description": "Clavier open source avec support multilingue.",
    "official_url": "https://anysoftkeyboard.github.io/",
    "platforms": ["Android"], "tags": ["keyboard", "input"]
  }
];