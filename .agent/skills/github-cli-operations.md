# Skill: github-cli-operations
# Versión: 1.0.0

## Descripción
Permite al agente interactuar con el CLI de GitHub (`gh`) para gestionar repositorios, ramas, commits, pull requests e issues de forma automatizada y consistente.

## Prerequisitos
- `gh` CLI instalado
- Autenticado: `gh auth login`

## Comandos Disponibles

### Repositorios
```bash
# Crear nuevo repositorio y subirlo
gh repo create <nombre> --public --source=. --remote=origin --push

# Clonar un repo
gh repo clone <owner>/<repo>
```

### Ramas y Commits
```bash
# Crear y cambiar a nueva rama
git checkout -b feat/nombre-feature

# Stage y commit
git add .
git commit -m "feat(scope): descripción"

# Push a la rama remota
git push origin HEAD
```

### Pull Requests
```bash
# Crear PR
gh pr create --title "feat: título" --body "Descripción de los cambios" --base main

# Listar PRs abiertos
gh pr list

# Hacer merge
gh pr merge <número> --squash --delete-branch
```
