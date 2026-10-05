# Skill: git-workflow-manager
# Versión: 1.0.0

## Descripción
Define comandos y flujos estandarizados para gestionar el ciclo de vida del código con Git, usando **Conventional Commits** para generar historiales legibles.

## Conventional Commits

### Estructura
`<tipo>(<scope>): <descripción corta>`

### Tipos Permitidos
| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de error/bug |
| `docs` | Cambios de documentación |
| `style` | Formato (espacios, puntos y comas; sin cambio lógico) |
| `refactor` | Refactorización de código |
| `perf` | Mejora de rendimiento |
| `chore` | Tareas de mantenimiento, dependencias o configuración |

### Ejemplos Correctos
- `feat(navbar): agregar menú responsive`
- `fix(demo): reparar botón que no respondía al click`
- `docs(readme): actualizar instrucciones de instalación`
- `style(css): reordenar variables del tema`

## Flujo de Trabajo (Feature Branch)
1. `git checkout -b feat/nueva-feature`
2. Modificar código.
3. `git add .`
4. `git commit -m "feat(scope): descripcion"`
5. `git push origin feat/nueva-feature`
