# Bootcamp FMW2025 - ✈️ Mer CSS-animationer

I denna övning kommer ni ta rå HTML av en flygbolagswebbplats (Eller om man vill göra om den till något helt annat) och, med hjälp av CSS-animationer, få den att komma till liv med rörliga element och interaktiva effekter.

### Det är fritt fram att ändra färger, bilder, SVG-ikoner och textinnehåll

Men fokusera i första hand på att skapa mjuka och engagerande animationer som förbättrar användarupplevelsen. Du kan också ändra CSS-selektorerna efter det du finner optimalt. Nedan finns bilden och färgerna i exemplet:

```css
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

:root {
  --primary-color: #eaa57a;
  --secondary-color: #fff2e8;
}
```

### Bakgrundsbilden

<img src="https://images.unsplash.com/photo-1755446133347-d9def00b03a3" height="300">

### Den stylade versionen

<img src="screenshot.png" height="300">

Designen i uppgiften är inspirerad av [denna mock-up](https://dribbble.com/shots/7073442-Airlines-Landing-Page-Preview) av en landing page för ett flygbolag.

### 💡 Om man byter bild är det också viktigt att se över färgerna. En orange eller blå primära färg funkar i dessa fall pga hur de förhåller sig till bakgrundsbildens färger

## 💻 Förväntat resultat

Webbplatsen ska ha följande animerade element och interaktioner:

### 🎈 Logo Animation

- **Interaktion**: Klickbar med JavaScript
- **Animation**: Ballong-effekt med rotation och skalning

### ✈️ Pappersflygplan Animation

- **Animation**: Kontinuerlig rörelse över skärmen
- **Beteende**: Flyger från vänster till höger, vänder sig halvvägs

### 🎠 Testimonials Carousel

- **Animation**: Kontinuerlig scrollning av kundrecensioner
- **Beteende**: Oändlig loop med mjuka övergångar

### 🖱️ Hover-effekter på Carousel Items

- **Interaktion**: Hover för att visa text
- **Animation**: Mjuk övergång mellan bild och text

### 🚀 CTA-knapp Animation

- **Interaktion**: Hover-effekt
- **Animation**: Skalning och rotation

### 🛩️ Flygplansikon Animation

- **Animation**: Flyger bort från skärmen

## 🕵️‍♂️ Analysera designen

- Timing och hastighet på animationer
- Mjuka övergångar mellan states
- Visuell hierarki med rörelse
- Interaktiva element som reagerar på hover/click
- Oändliga loops som fungerar sömlöst

## 🎁 Bonusuppgifter

- Lägg till ännu fler ändringar på `:hover` och andra states ni kan hitta
- Experimentera med olika timing-funktioner (`ease-in`, `ease-out`, `cubic-bezier`)
- Skapa staggered animations där element animeras med fördröjning
- Lägg till 3D transforms med `perspective` och `rotateX/Y/Z`
