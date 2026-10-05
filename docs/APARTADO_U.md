# 📐 Apartado U: Fundamentos Conceptuales y Lógicos

## 1. ¿Qué es el Apartado U?

El **Apartado U** es el núcleo teórico y arquitectónico de cualquier demostración o módulo que vayas a construir en este proyecto. Antes de programar y clonar carpetas, el **Apartado U** define cómo debe comportarse el módulo, qué lógica necesita y cómo va a interactuar con el usuario.

Sirve como el puente directo entre la *visión del proyecto* (definida en la explicación general) y la *implementación técnica* en el código fuente.

---

## 2. Arquitectura de los Conceptos (U1 y U2)

Para mantener la estandarización y modularidad, todo módulo interactivo se divide conceptualmente en dos fases o "capas":

### 🔹 Concepto U1: El Fundamento y Modelo Base
Representa la "columna vertebral" de tu demostración.
- **Lógica de Negocio:** Define los datos iniciales, el estado, variables o contexto del Agente IA que requiere el módulo.
- **Estructura UI/UX:** Cómo organizar el esqueleto semántico (HTML5) aplicando el sistema de diseño (tokens de CSS).
- **Entregable:** Una interfaz limpia, sin interacción, que cumpla con los lineamientos de Mobile-First.

### 🔹 Concepto U2: La Aplicación Práctica (Interacción)
Representa la "vida" y la respuesta del módulo ante las acciones del usuario.
- **Comportamiento (JS):** Manejo de eventos (clicks, formularios), llamadas a APIs externas o a respuestas generadas por Inteligencia Artificial.
- **Experiencia de Usuario (UI/UX):** Transiciones suaves (microinteracciones), mensajes de carga, validaciones de errores accesibles.
- **Entregable:** El módulo 100% funcional, interactivo y accesible por teclado / lectores de pantalla.

---

## 3. Flujo Práctico de Implementación

Basado en las metas del proyecto para acelerar el desarrollo, cada vez que apliques el **Apartado U** para una nueva característica, debes seguir este flujo estricto:

1. **Ideación Teórica:** Detallar en este documento (o en notas del proyecto) qué hará la demostración. *Ejemplo: "Un módulo donde el usuario ingresa un texto y la IA lo resume".*
2. **Duplicar la Plantilla:** 
   Clonar el directorio `src/templates/template-demo/` y pegarlo en `src/pages/Demos/` con el nombre de tu característica (Ej. `demo-resumen/`).
3. **Aplicar U1 (Vista):** Modificar el `index.html` y los estilos aislados en `styles.css` del nuevo directorio.
4. **Aplicar U2 (Lógica):** Escribir la funcionalidad en `script.js` respetando la separación entre vista y lógica.
5. **Vinculación:** Conectar el nuevo módulo creando una "Card" y un enlace en la landing principal (`index.html` de la raíz).

---

## 4. Estándares Técnicos del Apartado U

Para que cualquier componente se considere "Aprobado" bajo esta filosofía, debe cumplir con las reglas dictadas a los agentes IA en la carpeta `.agent/skills/`:

- **Modularidad:** El CSS y JS del demo no debe interferir con otros demos. El código debe ser encapsulado.
- **Diseño Adaptativo:** Debe implementarse con Flexbox / Grid para garantizar su correcta visualización desde los 320px (teléfonos pequeños) hasta monitores anchos (Desktop).
- **Accesibilidad (a11y):** Los botones no son solo bloques bonitos; deben tener atributos como `aria-label`, contrastes de lectura WCAG AA, y un estado de `:focus-visible` para navegación con teclado.
- **Autodocumentado:** El código final (`script.js`) debe contener comentarios JSDoc claros explicando la función de cada bloque importante.

---

## 5. Ejemplos de Casos de Uso del Apartado U

A continuación, algunas ideas de demostraciones prácticas que nacen de este fundamento:

* **Demo A (Prototipo de Dashboard):**
  * *U1:* Layout con CSS Grid creando un panel lateral y un contenido principal.
  * *U2:* Botones que colapsan el menú con animaciones suaves de `250ms`.
* **Demo B (Asistente Chatbot IA):**
  * *U1:* Componente visual del chat, burbujas de texto, tokens de color (Indigo y Violeta).
  * *U2:* Lógica en JS que toma el prompt, muestra un estado de "Cargando..." simulado y renderiza la respuesta. 
