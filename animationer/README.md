# Bootcamp FMW2025 - 🎞️ CSS-animationer

Vi fortsätter med styling även denna vecka och ägnar lite tid åt animationer. Med hjälp av CSS kan man animera vilket element som helst på otaliga sätt. Det varierar hur mycket animation som används, men det är väldigt sällan man stöter på en sida eller app helt utan animationer och det är alltid en bra bonuskunskap som uppskattas i arbetslivet.

## 🎯 Mål

Ni har fria händer kring att göra ändringar i existerande HTML och CSS, samt vad ni vill skapa för animation(er). Importera SVG:er, skapa egna element och allt ni kommer på så länge följande krav uppfylls:

Animationen/animationerna ska vid något tillfälle

- Rotera
- Spegelvändas
- Ändra storlek

### Andra exempel på properties att animera _(som inte är krav)_

- **Color** - Färgövergångar
- **Opacity** - Genomskinlighet
- **Box-shadow** - Skuggeffekter
- **Border-radius** - Rundade hörn
- **Margin/Padding** - Avståndsändringar
- **Background-color** - Bakgrundsfärger
- **Font-size** - Textstorlek

### Förslag på animationer

- Loading spinner
- En SVG som flyger från höger till vänster
- En SVG som flyger diagonalt
- En logotyp (Text i en box med bakgrundsfärg)

## 🎨 Properties att använda för att skapa själva animationerna

### Animation properties

- `animation`: Kombinerar alla animation-egenskaper
- `animation-name`: Namnet på @keyframes-regeln
- `animation-duration`: Hur länge animationen ska köra
- `animation-timing-function`: Hastighetskurva (ease, linear, ease-in-out)
- `animation-iteration-count`: Antal gånger (infinite för oändlig loop)
- `animation-direction`: Riktning (normal, reverse, alternate)
- `animation-fill-mode`: Hur elementet ska se ut före/efter animation

### Transform properties

- `transform: translateX()`: Horisontell rörelse
- `transform: translateY()`: Vertikal rörelse
- `transform: translate()`: Kombinerad rörelse
- `transform: scale()`: Förstoring/förminskning
- `transform: rotate()`: Rotation
- `transform: rotateY()`: 3D-rotation runt Y-axeln

### Transition properties

- `transition`: Kortform för alla transition-egenskaper
- `transition-property`: Vilka egenskaper som ska animeras
- `transition-duration`: Hur länge övergången ska ta
- `transition-timing-function`: Hastighetskurva
- `transition-delay`: Fördröjning innan övergången startar

### Viktiga punkter:

- **Procentvärden**: 0% = start, 100% = slut
- **Mellanvärden**: 25%, 50%, 75% etc. för mer kontroll
- **from/to**: Alternativ syntax (from = 0%, to = 100%)
- **Multiple Properties**: Du kan animera flera egenskaper samtidigt

## 🎯 @keyframes - Hur det fungerar

`@keyframes` är grunden för CSS-animationer. Det definierar vad som händer vid olika tidpunkter under animationen:

```css
@keyframes animation-name {
  0% {
    /* Startposition */
    transform: translateX(0);
  }
  50% {
    /* Mitten av animationen */
    transform: translateX(100px);
  }
  100% {
    /* Slutposition */
    transform: translateX(200px);
  }
}
```

## 💡 Tips för framgång

- **Starta enkelt**: Börja med grundläggande animationer innan du går till komplexa
- **Testa ofta**: Öppna HTML-filen i webbläsaren regelbundet
- **Använd Developer Tools**: Inspektera element och testa animationer i realtid
- **Experimentera**: Prova olika timing-funktioner och durations
- **Tänk på användarupplevelsen**: Animationer ska förbättra, inte störa

## 🎁 Bonusuppgifter

Skapa fler animationer
