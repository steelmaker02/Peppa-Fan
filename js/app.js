// Daten für die Charaktere
const charactersData = [
    {
        id: 'peppa',
        name: 'Peppa Wutz',
        species: 'Schwein <img src="assets/icons/pig_face.png" class="icon-inline" alt="">',
        img: 'assets/images/peppa.png',
        desc: 'Peppa ist ein freches kleines Schweinemädchen. Sie ist 4 Jahre alt und lebt mit Mama Wutz, Papa Wutz und Schorsch in einem gelben Haus auf dem Hügel.',
        likes: 'In Matschepfützen springen, ihr Teddy, Verkleiden, die Feen-Prinzessin spielen.'
    },
    {
        id: 'george',
        name: 'Schorsch Wutz',
        species: 'Schwein <img src="assets/icons/pig_face.png" class="icon-inline" alt="">',
        img: 'assets/images/george.png',
        desc: 'Schorsch ist Peppas kleiner Bruder (18 Monate alt). Er spricht noch nicht viel, aber ein Wort kann er sehr gut: "Saurier!".',
        likes: 'Sein Dinosaurier (Saurier!), Schokoladenkuchen, Weltraum-Spiele.'
    },
    {
        id: 'mama',
        name: 'Mama Wutz',
        species: 'Schwein <img src="assets/icons/pig_face.png" class="icon-inline" alt="">',
        img: 'assets/images/mama.png',
        desc: 'Mama Wutz arbeitet oft am Computer zu Hause. Sie ist sehr klug und kann fast alles besser als Papa Wutz (z.B. Karten lesen).',
        likes: 'In Matschepfützen springen, Arbeiten, Kochen.'
    },
    {
        id: 'papa',
        name: 'Papa Wutz',
        species: 'Schwein <img src="assets/icons/pig_face.png" class="icon-inline" alt="">',
        img: 'assets/images/papa.png',
        desc: 'Papa Wutz ist sehr lustig und lacht viel. Er sagt oft, er sei Experte in allem, aber dann geht doch etwas schief. Er hat einen dicken Bauch.',
        likes: 'Essen (besonders Kekse), Weltmeister im Pfützen-Springen sein, seine Brille verlieren.'
    },
    {
        id: 'opa',
        name: 'Opa Wutz',
        species: 'Schwein <img src="assets/icons/pig_face.png" class="icon-inline" alt="">',
        img: 'assets/images/opa.png',
        desc: 'Opa Wutz ist sehr gut im Reparieren von Dingen. Er hat einen großen Gemüsegarten und ein eigenes Boot.',
        likes: 'Segeln, Gärtnern, seine Minilokomotive "Gertrud".'
    },
    {
        id: 'oma',
        name: 'Oma Wutz',
        species: 'Schwein <img src="assets/icons/pig_face.png" class="icon-inline" alt="">',
        img: 'assets/images/oma.png',
        desc: 'Oma Wutz backt den leckersten Schokoladenkuchen der Welt. Sie hat drei Hühner und einen Papagei namens Polly.',
        likes: 'Backen, ihre Hühner, Parfüm.'
    },
    {
        id: 'suzy',
        name: 'Luzie Locke',
        species: 'Schaf <img src="assets/icons/sheep.png" class="icon-inline" alt="">',
        img: 'assets/images/suzy.png',
        desc: 'Luzie ist Peppas allerbeste Freundin. Sie mag es, Krankenschwester zu spielen und trägt oft ein Krankenschwestern-Kostüm.',
        likes: 'Krankenschwester spielen, Kommandieren, Kartenspiele.'
    },
    {
        id: 'rebecca',
        name: 'Luisa Löffel',
        species: 'Hase <img src="assets/icons/rabbit.png" class="icon-inline" alt="">',
        img: 'assets/images/rebecca.png',
        desc: 'Luisa wohnt in einem Bau. Sie ist sehr ehrlich, wird aber schnell rot, wenn sie an Karotten denkt.',
        likes: 'Karotten (pssst!), ganz schnell rennen.'
    },
    {
        id: 'pedro',
        name: 'Pedro Pony',
        species: 'Pony <img src="assets/icons/pony.png" class="icon-inline" alt="">',
        img: 'assets/images/pedro.png',
        desc: 'Pedro kommt oft zu spät und ist ein bisschen verträumt. Er trägt eine Brille und schläft gerne.',
        likes: 'Schlafen, Superhelden spielen, Cowboy spielen.'
    },
    {
        id: 'emily',
        name: 'Emily Elefant',
        species: 'Elefant <img src="assets/icons/elephant.png" class="icon-inline" alt="">',
        img: 'assets/images/emily.png',
        desc: 'Emily ist sehr schlau. Sie kann mit ihrem Rüssel ein sehr lautes Geräusch machen (Tröööt!).',
        likes: 'Bausteine bauen, laut Trompeten.'
    },
    {
        id: 'danny',
        name: 'Klausi Kläff',
        species: 'Hund <img src="assets/icons/dog.png" class="icon-inline" alt="">',
        img: 'assets/images/danny.png',
        desc: 'Klausi (Danny Dog) liebt Fußball und Piraten. Sein Opa ist Kapitän Kläff, ein echter Seemann.',
        likes: 'Fußball spielen, Piraten, Bellen (Wuff!).'
    },
    {
        id: 'candy',
        name: 'Molly Mietze',
        species: 'Katze <img src="assets/icons/cat.png" class="icon-inline" alt="">',
        img: 'assets/images/candy.png',
        desc: 'Molly (Candy Cat) kann sich sehr leise anschleichen. Sie verkleidet sich gerne als Tiger.',
        likes: 'Tiger spielen, Fische, Milch trinken.'
    }
];

/* Memory Spiel (mit KI erstellt) */
let cardsFiles = [
    'pig_face.png', 'pig_face.png',
    'dino.png', 'dino.png',
    'crown.png', 'crown.png',
    'helicopter.png', 'helicopter.png',
    'rabbit.png', 'rabbit.png',
    'guitar.png', 'guitar.png'
];

let hasFlippedCard = false; // Flag: Erste Karte umgedreht? Verhindert Doppelflips.
let lockBoard = false; // Flag: Board gesperrt während Check/Animation.
let firstCard, secondCard; // Referenzen auf umgedrehte Karten.
let matchedPairs = 0; // Zähler für gefundene Paare (Ziel: 12 für Win).

// Spiel initialisieren – Baut Board neu auf, mischt Karten, resetet Zustände.
window.initMemoryGame = function () {
    const board = document.getElementById('memory-board');
    if (!board) return;

    const msg = document.getElementById('game-msg');
    board.innerHTML = ''; // Board leeren.
    if (msg) msg.textContent = ''; // Nachricht löschen.
    document.getElementById('confetti-container').innerHTML = ''; // Konfetti clearen.

    hasFlippedCard = false;
    lockBoard = false;
    matchedPairs = 0;

    // Karten mischen (Fisher-Yates-Sort via Math.random()).
    const shuffledCards = [...cardsFiles].sort(() => 0.5 - Math.random());

    shuffledCards.forEach(fileName => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.dataset.icon = fileName; // Icon-Datei speichern für späteren Vergleich.
        card.innerHTML = ''; // Rückseite leer.
        card.addEventListener('click', flipCard); // Flip-Handler.
        board.appendChild(card);
    });
};

// Karte umdrehen – Prüft Flags, zeigt Icon, startet Match-Check.
function flipCard() {
    if (lockBoard) return; // Board gesperrt? Ignorieren.
    if (this === firstCard) return; // Selbe Karte? Ignorieren.

    this.classList.add('flipped'); // CSS-Animation triggern.
    this.innerHTML = `<img src="assets/icons/${this.dataset.icon}" class="game-icon" alt="">`; // Icon laden.

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return; // Erste Karte – warten auf Zweite.
    }

    secondCard = this;
    checkForMatch(); // Zweite Karte – Match prüfen.
}

// Überprüfen auf Übereinstimmung – Vergleicht dataset.icon, entscheidet Flip/Unflip.
function checkForMatch() {
    let isMatch = firstCard.dataset.icon === secondCard.dataset.icon;
    isMatch ? disableCards() : unflipCards(); // Match? Deaktivieren. Sonst zurückdrehen.
}

// Paar gefunden – Event-Listener entfernen, Win prüfen, Board reseten.
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedPairs += 2; // Paar zählen (2 Karten).

    if (matchedPairs === cardsFiles.length) { // Alle 12 Karten gematcht?
        document.getElementById('game-msg').innerHTML = '<h3>🎉 Super gemacht! Du hast gewonnen! 🎉</h3>';
        celebrateWin(); // Konfetti-Party!
    }
    resetBoard(); // Flags reseten für nächste Runde.
}

// Kein Paar – 1s Delay, dann zurückdrehen (Animation).
function unflipCards() {
    lockBoard = true; // Board sperren während Animation.
    setTimeout(() => {
        if (firstCard) {
            firstCard.classList.remove('flipped');
            firstCard.innerHTML = '';
        }
        if (secondCard) {
            secondCard.classList.remove('flipped');
            secondCard.innerHTML = '';
        }
        resetBoard();
    }, 1000);
}

// Zustand zurücksetzen – Bereit für nächste Flip.
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Gewinnfeier mit Konfetti – 50 zufällige Icons fallen animiert (CSS).
function celebrateWin() {
    const container = document.getElementById('confetti-container');
    const confettiIcons = ['balloon.png', 'star.png', 'pig_face.png', 'sparkles.png'];

    for (let i = 0; i < 50; i++) {
        const el = document.createElement('img');
        el.className = 'confetti-img'; // CSS-Animation (fallen, rotieren).
        const randomIcon = confettiIcons[Math.floor(Math.random() * confettiIcons.length)];
        el.src = `assets/icons/${randomIcon}`;
        el.alt = '';
        el.style.left = Math.random() * 100 + 'vw'; // Zufällige Startposition.
        el.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Variierende Dauer.
        container.appendChild(el);
    }

    setTimeout(() => {
        container.innerHTML = ''; // Nach 6s clearen.
    }, 6000);
}

/* Malen mit Canvas (mit KI erstellt) */
let ctx; // Globaler Canvas-Kontext für Zugriff in changeColor/clear.

/* Canvas setuppen – Initialisiert weißes Feld, Event-Listener für Draw.
   Unterstützt Maus (PC) und Touch (Mobile), lineCap=round für weiche Linien. */
function setupCanvas() {
    const canvas = document.getElementById('drawingCanvas');
    if (!canvas) return;

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Weißer Hintergrund.
    ctx.lineWidth = 6; // Dicke Linie für Kinder.
    ctx.lineCap = 'round'; // Runde Enden.
    ctx.strokeStyle = '#ffb7b2'; // Startfarbe: Hellrosa.

    let painting = false; // Flag: Zeichne aktiv?

    /* Starten des Strichs – Setzt painting=true, ruft draw(). */
    function startDraw(e) {
        painting = true;
        draw(e);
    }

    /* Beenden – painting=false, beginPath() für neuen Strich. */
    function endDraw() {
        painting = false;
        ctx.beginPath();
    }

    /* Draw-Loop – Berechnet Koordinaten relativ zum Canvas, zeichnet Linie. */
    function draw(e) {
        if (!painting) return;
        e.preventDefault(); // Scroll verhindern auf Touch.

        const rect = canvas.getBoundingClientRect();
        const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
        const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);

        ctx.lineTo(clientX - rect.left, clientY - rect.top); // Linie zum neuen Punkt.
        ctx.stroke(); // Zeichnen.
        ctx.beginPath(); // Neuen Pfad starten.
        ctx.moveTo(clientX - rect.left, clientY - rect.top); // Nächster Punkt vorbereiten.
    }

    /* Maus-Events (Desktop). */
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mousemove', draw);

    /* Touch-Events (Mobile) – passive:false für preventDefault(). */
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchend', endDraw);
    canvas.addEventListener('touchmove', draw, { passive: false });
}

/* Farbe wechseln – Globale ctx.strokeStyle updaten (gerufen von Buttons). */
window.changeColor = (color) => {
    if (ctx) ctx.strokeStyle = color;
};

/* Canvas löschen – Weiß übermalen. */
window.clearCanvas = () => {
    const canvas = document.getElementById('drawingCanvas');
    if (canvas && ctx) {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
};

/* Bild als PNG downloaden – toDataURL() + temporärer Link. */
window.downloadDrawing = () => {
    const canvas = document.getElementById('drawingCanvas');
    if (canvas) {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = 'mein-wutz-bild.png'; // Deutscher Name.
        link.href = image;
        link.click(); // Auto-Download.
    }
};

/* Initialisierung beim Laden der Seite */
document.addEventListener('DOMContentLoaded', () => {
    // Starthintergrund setzen
    document.body.classList.add('bg-home');
    // Charakterkarten erzeugen
    const gridContainer = document.getElementById('char-grid-container');
    if (gridContainer) {
        charactersData.forEach(char => {
            const card = document.createElement('div');
            card.className = 'char-card';
            card.innerHTML = `
                <img src="${char.img}" class="char-img-small" alt="${char.name}" onerror="this.src='assets/images/error.png'">
                <h3>${char.name}</h3>
            `;
            card.addEventListener('click', () => openCharacterDetail(char));
            gridContainer.appendChild(card);
        });
    }
    // Canvas und Spiel einrichten
    setupCanvas();
    initMemoryGame();
});

/* Navigation für die Einzelseiten */
window.showPage = function (pageId) {
    // Alle Seiten verstecken
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
        page.classList.remove('active');
    });

    // Gewählte Seite anzeigen
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
        window.scrollTo(0, 0);
        // Spiel initialisieren, wenn geöffnet
        if (pageId === 'games') {
            const board = document.getElementById('memory-board');
            if (board.innerHTML === '') initMemoryGame();
        }
    }

    /* Aktive Navigationsknopf aktualisieren */
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(pageId)) {
            btn.classList.add('active');
        }
    });

    /* Hintergrundfarbe anpassen */
    document.body.classList.remove('bg-home', 'bg-characters', 'bg-games', 'bg-painting', 'bg-links', 'bg-parents');

    if (pageId === 'home') document.body.classList.add('bg-home');
    else if (pageId === 'characters' || pageId === 'char-detail') document.body.classList.add('bg-characters');
    else if (pageId === 'games') document.body.classList.add('bg-games');
    else if (pageId === 'painting') document.body.classList.add('bg-painting');
    else if (pageId === 'links') document.body.classList.add('bg-links');
    else if (pageId === 'parents') document.body.classList.add('bg-parents');
};

/* Detailansicht für Charakter öffnen */
window.openCharacterDetail = function (char) {
    document.getElementById('detail-name').textContent = char.name;
    document.getElementById('detail-species').innerHTML = char.species;
    document.getElementById('detail-desc').textContent = char.desc;
    document.getElementById('detail-likes').textContent = char.likes;

    const imgEl = document.getElementById('detail-img');
    imgEl.src = char.img;
    imgEl.onerror = function () { this.src = 'assets/images/error.png'; };

    showPage('char-detail');
};

/* Animation für das Wechseln des Bildes */
window.toggleFamilyImage = function () {
    const img = document.getElementById('family-img');
    const mainSrc = 'assets/images/family.png';
    const funSrc = 'assets/images/family_fun.gif';

    img.classList.add('swapping');

    setTimeout(() => {
        if (img.getAttribute('src').includes('family.png')) {
            img.src = funSrc;
        } else {
            img.src = mainSrc;
        }
        img.classList.remove('swapping');
    }, 400);
};

// Tabs für rechtliche Infos wechseln
window.showLegal = function (tabName) {
    document.getElementById('legal-impressum').classList.add('hidden');
    document.getElementById('legal-privacy').classList.add('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    if (tabName === 'impressum') {
        document.getElementById('legal-impressum').classList.remove('hidden');
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
    } else {
        document.getElementById('legal-privacy').classList.remove('hidden');
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
};

/* Burger-Menü Funktionalität */
const burgerBtn = document.getElementById('burgerBtn');
const navMenu = document.getElementById('mainNav');

if (burgerBtn && navMenu) {
    // Klick auf den Burger-Menü
    burgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('nav-open'); // Menü anzeigen / ausblenden
        burgerBtn.classList.toggle('open'); // Animation des Kreuzes
        burgerBtn.setAttribute('aria-expanded', navMenu.classList.contains('nav-open'));
    });

    /* Automatisches Schließen des Menüs beim Klicken auf eine beliebige Navigationsschaltfläche */
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navMenu.classList.remove('nav-open');
            burgerBtn.classList.remove('open');
        });
    });
}

/* Slider */
window.slideInfinite = function (direction) {
    const slider = document.getElementById('photoSlider');
    if (!slider) return;

    // Breite eines Scrolls 
    const scrollAmount = slider.clientWidth * 0.8;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;

    if (direction === 1) {
        // Rechts
        if (currentScroll >= maxScroll - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    } else {
        // Links
        if (currentScroll <= 0) {
            slider.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    }
};