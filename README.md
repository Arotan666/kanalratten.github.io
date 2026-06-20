# 🐀 Die Kanalratten Website

Offizielle Website der Berlin Folk Metal & Kneipen Punk Band **Die Kanalratten**

**Website:** [https://diekanalratten.github.io ](https://arotan666.github.io/kanalratten.github.io/index.html) 
**Motto:** "Immer einer mehr, als du siehst."  
**Slogan:** "Brücke. Bier. Beton. Beats."

---

## 📁 Struktur

```
kanalratten.github.io/
├── index.html              # Startseite
├── about.html              # Über uns
├── musik.html              # Musik & Streaming
├── termine.html            # Konzerttermine
├── galerie.html            # Fotos
├── merchandise.html        # Merch-Shop
├── kontakt.html            # Kontaktformular
├── pressekit.html          # Pressebereich
├── impressum.html          # Rechtliches (wird noch erstellt)
├── css/
│   └── style.css           # Hauptstylesheet
├── js/
│   └── script.js           # JavaScript-Funktionen
└── images/                 # Ordner für deine Fotos
    └── (werden noch hochgeladen)
```

---

## 📸 Wie du Bilder hochlädst

### Variante 1: Web-Interface (Einfach)

1. Gehe zu: https://github.com/Arotan666/kanalratten.github.io
2. Klick auf **"Add file"** → **"Upload files"**
3. Wähle deine Bilder aus
4. Gib einen aussagekräftigen Namen ein (z.B. `band-foto-konzert-1.jpg`)
5. Klick **"Commit changes"**

### Variante 2: Git Command Line (Fortgeschritten)

```bash
# Repository klonen
git clone https://github.com/Arotan666/kanalratten.github.io.git
cd kanalratten.github.io

# Bilder in den "images" Ordner legen
cp deine-fotos/* images/

# Dateiname in der Website eintragen
# z.B. in galerie.html:
# <img src="images/dein-foto.jpg" alt="Beschreibung">

# Commit und Push
git add .
git commit -m "Neue Fotos hinzugefügt"
git push origin main
```

---

## 🖼️ Bilder in der Website eintragen

### In der Galerie (galerie.html)
```html
<div class="gallery-item">
    <img src="images/dein-foto.jpg" alt="Konzert 2026">
    <div class="gallery-overlay">
        <p>Beschreibung deines Fotos</p>
    </div>
</div>
```

### Auf der Startseite (index.html)
```html
<div class="hero-image">
    <img src="images/band-foto.jpg" alt="Die Kanalratten">
</div>
```

### In der "Über uns" Seite (about.html)
```html
<div class="houseboat-image">
    <img src="images/hausboot.jpg" alt="Kanalratten Hausboot">
</div>
```

---

## ✏️ Wie du die Website bearbeitest

### Texte ändern

1. Gehe zu GitHub: https://github.com/Arotan666/kanalratten.github.io
2. Klick auf die Datei (z.B. `index.html`)
3. Klick auf das **Stift-Icon** (Edit)
4. Bearbeite den Text
5. Scroll nach unten
6. Gib eine Nachricht ein (z.B. "Text aktualisiert")
7. Klick **"Commit changes"**

### Beispiele:

**Mitgliedernamen ändern** (about.html):
```html
<h3>Name</h3>  <!-- Ändere "Name" zu deinem Namen -->
```

**Song-Titel aktualisieren** (musik.html):
```html
<h4>Lied 1</h4>  <!-- Ändere zu echtem Lied-Namen -->
```

**Termine hinzufügen** (termine.html):
```html
<span class="date-badge">15 JUN</span>  <!-- Datum -->
<h3>Kneipenabend Zur Alten Schleuße</h3>  <!-- Event-Name -->
```

---

## 🎨 Design anpassen

Die Farben sind im **css/style.css** definiert:

```css
:root {
    --primary-color: #8B0000;        /* Dunkelrot */
    --secondary-color: #1a1a1a;      /* Dunkelgrau */
    --accent-color: #00AA44;         /* Grün (Wasser) */
}
```

**Farben ändern:**
1. Öffne `css/style.css`
2. Suche `:root {`
3. Ändere die Hex-Codes (z.B. `#8B0000` zu `#FF0000` für helles Rot)
4. Speichern & Commit

---

## 🔗 Social Media Links

Die Links sind in jeder HTML-Datei im Footer definiert. Du kannst sie alle anpassen:

```html
<a href="https://www.instagram.com/diekanalratten" target="_blank">
    <i class="fab fa-instagram"></i>
</a>
```

**Wichtige Social-Links:**
- Instagram: `@diekanalratten`
- YouTube: `@DieKanalrattenOfficial`
- TikTok: `@diekanalratten`
- Facebook: `Die Kanalratten`
- Spotify: `Die Kanalratten`

---

## ✨ Features der Website

✅ **Responsive Design** - Funktioniert auf allen Geräten (Handy, Tablet, PC)  
✅ **Dark Mode Aesthetic** - Passend zum Folk Metal Vibe  
✅ **Embedded Music Player** - Spotify-Integration  
✅ **Kontaktformular** - Mailto-Integration (öffnet Mail-Client)  
✅ **Mobile Menu** - Hamburger-Menü auf kleinen Bildschirmen  
✅ **Galerie** - Mit Lightbox-Effect (Klick auf Fotos vergrößert sie)  
✅ **SEO-optimiert** - Meta-Tags für Suchmaschinen  

---

## 🚀 GitHub Pages aktivieren

Die Website ist bereits auf GitHub Pages gehostet!

**So wird sie automatisch aktualisiert:**
1. Du bearbeitest eine Datei auf GitHub
2. Du machst einen Commit
3. **Automatisch** wird die Website in 1-2 Minuten aktualisiert
4. Die neue Version ist live unter: **https://diekanalratten.github.io**

---

## 📧 E-Mail Integration

### Kontaktformular
Das Kontaktformular öffnet deinen Mail-Client mit einer vorausgefüllten Nachricht. Die E-Mails gehen an:
- **Allgemein:** info@diekanalratten.de
- **Booking:** booking@diekanalratten.de
- **Presse:** presse@diekanalratten.de

Diese E-Mail-Adressen kannst du in den HTML-Dateien anpassen.

---

## 📝 Was noch zu tun ist

- [ ] `impressum.html` erstellen (Rechtliche Informationen)
- [ ] Echte Fotos/Bandbilder hochladen
- [ ] Real Song-Titel, Album-Namen eintragen
- [ ] Mitgliedernamen und Biographien eintragen
- [ ] Echte Konzerttermine eintragen
- [ ] Real Kontakt-E-Mails eintragen
- [ ] Spotify-Link für echten Artist aktualisieren
- [ ] Google Analytics hinzufügen (optional)
- [ ] SSL-Zertifikat überprüfen (sollte automatisch sein)

---

## 🐀 Tipps

1. **Bilder optimieren:** Nutze Tools wie [TinyPNG](https://tinypng.com) um Bilder zu komprimieren
2. **Konsistent bleiben:** Nutze immer die gleichen Farben und Fonts
3. **Mobile first:** Teste die Website auf dem Handy!
4. **Backup:** Speichere wichtige Änderungen lokal ab
5. **Gettyimages etc.:** Für Placeholder-Bilder nutze [via.placeholder.com](https://via.placeholder.com)

---

## 🔧 Technische Details

- **HTML5** - Moderne Semantic HTML
- **CSS3** - Responsive Design mit CSS Grid & Flexbox
- **JavaScript** - Vanilla JS (keine Dependencies!)
- **Icons:** [Font Awesome 6](https://fontawesome.com)
- **Hosting:** GitHub Pages
- **SSL:** Automatisch mit HTTPS

---

## 📞 Support

Bei Fragen zur Website:
- E-Mail: info@diekanalratten.de
- GitHub Issues: https://github.com/Arotan666/kanalratten.github.io/issues

---

## 🎸 Jetzt kann's losgehen!

Die Website ist bereit zum Leben erweckt zu werden. Laden Sie Fotos hoch, füllen Sie Informationen aus und rocken Sie die digitale Welt! 

**Brücke. Bier. Beton. Beats.** 🐀🍺

---

**Zuletzt aktualisiert:** 2026-06-01  
**Version:** 1.0  
**Status:** Live auf GitHub Pages ✨
