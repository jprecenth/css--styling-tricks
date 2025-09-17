## 🎨 Viktiga CSS Properties att Använda

### Animation Properties

- `animation`: Kombinerar alla animation-egenskaper
- `animation-name`: Namnet på @keyframes-regeln
- `animation-duration`: Hur länge animationen ska köra
- `animation-timing-function`: Hastighetskurva (ease, linear, ease-in-out)
- `animation-iteration-count`: Antal gånger (infinite för oändlig loop)
- `animation-direction`: Riktning (normal, reverse, alternate)
- `animation-fill-mode`: Hur elementet ska se ut före/efter animation

### Transform Properties

- `transform: translateX()`: Horisontell rörelse
- `transform: translateY()`: Vertikal rörelse
- `transform: translate()`: Kombinerad rörelse
- `transform: scale()`: Förstoring/förminskning
- `transform: rotate()`: Rotation
- `transform: rotateY()`: 3D-rotation runt Y-axeln

### Transition Properties

- `transition`: Kortform för alla transition-egenskaper
- `transition-property`: Vilka egenskaper som ska animeras
- `transition-duration`: Hur länge övergången ska ta
- `transition-timing-function`: Hastighetskurva
- `transition-delay`: Fördröjning innan övergången startar

### Viktiga Punkter:

- **Procentvärden**: 0% = start, 100% = slut
- **Mellanvärden**: 25%, 50%, 75% etc. för mer kontroll
- **from/to**: Alternativ syntax (from = 0%, to = 100%)
- **Multiple Properties**: Du kan animera flera egenskaper samtidigt

## 🎯 @keyframes - Hur det Fungerar

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

Lycka till med övningen! 🚀
