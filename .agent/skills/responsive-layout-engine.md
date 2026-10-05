# Skill: responsive-layout-engine
# Versión: 1.0.0

## Descripción
Asegura patrones de diseño fluido utilizando CSS Grid, Flexbox y breakpoints responsivos bajo la filosofía Mobile-First.

## Metodología Mobile-First
Todos los estilos base (fuera de `@media`) deben estar orientados a pantallas móviles (320px - 600px).
Para pantallas grandes, escala progresivamente.

```css
/* ✅ CORRECTO: Diseño móvil primero */
.container { padding: 1rem; }

@media (min-width: 768px) { /* Tablets */
  .container { padding: 2rem; }
}

@media (min-width: 1024px) { /* Laptops / Desktop */
  .container { padding: 4rem; }
}
```

## CSS Grid: El patrón "Auto-Fit"
Utiliza este patrón para crear galerías o tarjetas de características sin necesidad de media queries manuales.
```css
.grid-auto {
  display: grid;
  /* Crea tantas columnas como quepan de 300px min, llenando el espacio restante */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-6);
}
```

## Flexbox
Úsalo para alineación unidimensional: Navbars, botones al lado de otros, o centrado perfecto.
```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Importante para que no se desborde en móviles */
}
```

## Clamp para Textos Fluidos
Para no escribir múltiples media-queries de tamaño de fuente:
```css
h1 {
  /* min 2rem, ideal 5vw, max 4rem */
  font-size: clamp(2rem, 5vw, 4rem); 
}
```
