# Skill: ui-ux-design-system
# Versión: 1.0.0

## Descripción
Proporciona las reglas de consistencia del diseño UI: paletas de colores, escalas tipográficas y espaciados basados en tokens CSS.

## Tokens del Sistema de Diseño (Referencia)

### Colores (Theme Dark/Light)
- `--color-primary`: Color de marca / CTA principal (Ej. Indigo `#6366f1`)
- `--color-secondary`: Acentos (Ej. Violeta `#8b5cf6`)
- `--color-bg`: Fondo general de la página (`#0f172a`)
- `--color-surface`: Fondo de tarjetas, modales o secciones elevadas (`#1e293b`)
- `--color-text`: Texto de lectura principal (`#f1f5f9`)
- `--color-text-muted`: Texto secundario/descriptivo (`#94a3b8`)

### Escala Tipográfica
- `--text-sm`: `0.875rem` (14px) - Meta-textos, tags
- `--text-base`: `1rem` (16px) - Párrafos
- `--text-lg`: `1.125rem` (18px) - Destacados
- `--text-xl`: `1.25rem` (20px) - Títulos de tarjeta
- `--text-2xl`: `1.5rem` (24px) - Títulos de sección

### Escala de Espaciado (Base 4px/8px)
- `--space-2`: `8px` (Gaps muy pequeños)
- `--space-4`: `16px` (Padding normal)
- `--space-6`: `24px` (Padding holgado)
- `--space-8`: `32px` (Separación de componentes)
- `--space-16`: `64px` (Separación de grandes secciones)

## Microinteracciones
- Usar transiciones suaves: `transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);`
- Elevar tarjetas al hacer hover (`transform: translateY(-4px)`) y agregar sombra.
