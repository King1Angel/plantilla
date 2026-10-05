# Skill: web-component-architect
# Versión: 1.0.0

## Descripción
Proporciona arquitectura y patrones para construir componentes web reutilizables, modulares y accesibles usando HTML, CSS y Vanilla JS (adaptable a frameworks).

## Convenciones
- **Nombre Lógico**: PascalCase (Ej. `DemoCard`, `NavBar`)
- **Archivos/Clases CSS**: kebab-case (Ej. `demo-card.css`, `.nav-bar`)

## Estructura de Archivos por Componente
```text
components/
  NombreComponente/
    nombre-componente.html   # Estructura semántica HTML
    nombre-componente.css    # Estilos CSS encapsulados (usar prefijos de clase)
    nombre-componente.js     # Lógica y eventos JS
```

## Reglas de Accesibilidad (a11y)
1. **Semántica HTML**: Usa etiquetas semánticas (`<article>`, `<section>`, `<nav>`, `<button>`). Nunca uses un `<div>` como botón.
2. **Atributos ARIA**: Agrega `aria-label` o `aria-labelledby` a elementos interactivos sin texto visible.
3. **Imágenes**: Siempre incluir `alt="descripción"`. Si es decorativa: `alt=""`.
4. **Teclado**: Todo componente interactivo debe ser accesible vía `Tab`, `Enter` y `Espacio`.
5. **Foco Visual**: No ocultes el anillo de foco (`outline`), si lo haces, provee un estilo `.btn:focus-visible`.
