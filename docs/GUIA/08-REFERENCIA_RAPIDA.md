# ⚡ Referencia Rápida - KB con Mkdocs

**Hoja de consulta para recordar rápido**

---

## **Instalación Única (primera vez)**

```bash
pip install mkdocs mkdocs-material mkdocs-awesome-pages-plugin \
mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-mermaid2-plugin
```

---

## **Crear Nuevo Proyecto**

```bash
mkdir mi-kb && cd mi-kb
git init
git config --global user.email "email@example.com"
git config --global user.name "Tu Nombre"
git remote add origin https://github.com/USUARIO/mi-kb.git
mkdocs new .
mkdir -p docs/js docs/css
```

---

## **Crear Archivos Clave (Copiar y Pegar)**

### mkdocs.yml
```yaml
site_name: Mi KB - Cursos Tecnología
site_description: Knowledge Base
site_author: Tu Nombre
theme:
  name: material
  language: es
  features:
    - content.code.copy
    - search.suggest
    - search.highlight
    - navigation.tabs
    - navigation.sections
    - toc.follow
plugins:
  - search:
      lang: es
  - awesome-pages
  - git-revision-date-localized:
      enable_creation_date: true
      type: date
  - minify:
      minify_html: true
  - mermaid2
nav:
  - Inicio: index.md
  - Mi Curso:
      - Tema 1: mi-curso/01-tema.md
extra_javascript:
  - js/pdf-export.js
extra_css:
  - css/custom.css
copyright: ""
```

### docs/js/pdf-export.js
```javascript
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.createElement('button');
  downloadBtn.innerHTML = '📥 Descargar PDF';
  downloadBtn.style.cssText = 'position: fixed; bottom: 30px; right: 30px; z-index: 999; padding: 12px 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 8px; font-size: 15px; font-weight: 600; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); transition: all 0.3s ease;';
  downloadBtn.onmouseover = function() { this.style.transform = 'scale(1.08)'; };
  downloadBtn.onmouseout = function() { this.style.transform = 'scale(1)'; };
  downloadBtn.onclick = function() { window.print(); };
  document.body.appendChild(downloadBtn);
});
```

### docs/css/custom.css
```css
footer { display: none !important; }
.md-content { margin-bottom: 0; }
```

---

## **Estructura de Carpetas Esperada**

```
mi-kb/
├── .github/workflows/deploy.yml  (opcional para CI/CD)
├── docs/
│   ├── index.md
│   ├── js/pdf-export.js
│   ├── css/custom.css
│   └── mi-curso/
│       ├── 01-tema.md
│       └── 02-tema.md
└── mkdocs.yml
```

---

## **Día a Día: Flujo de Trabajo**

```bash
# 1. Ver status
git status+

# 2. Editar archivos en docs/

# 3. Prueba local (mientras trabajas)
python -m mkdocs serve
# Abre http://localhost:8000

# 4. Cuando esté listo:
git add .
git commit -m "Agrega tema: X"
git push origin main

# 5. Ctrl+C para parar servidor
```

---

## **Comandos Mkdocs**

| Comando | Qué hace |
|---|---|
| `python -m mkdocs serve` | Sirve localmente en :8000 |
| `python -m mkdocs build` | Compila para desplegar |
| `python -m mkdocs gh-deploy` | Publica en GitHub Pages |
| `python -m mkdocs serve -a localhost:8001` | Usa puerto diferente |

---

## **Comandos Git**

| Comando | Qué hace |
|---|---|
| `git status` | Ve cambios pendientes |
| `git add .` | Agrega todo |
| `git commit -m "msg"` | Guarda con mensaje |
| `git push origin main` | Envía a GitHub |
| `git pull origin main` | Trae cambios |
| `git log --oneline` | Ve historial |
| `git diff` | Ve cambios sin guardar |

---

## **Crear Nuevo Curso**

```bash
# 1. Crea carpeta
mkdir docs/nuevo-curso

# 2. Crea archivo
touch docs/nuevo-curso/01-tema.md

# 3. Actualiza mkdocs.yml
# Agrega:
# - Nuevo Curso:
#     - Tema 1: nuevo-curso/01-tema.md

# 4. Escribe contenido en docs/nuevo-curso/01-tema.md

# 5. Prueba
python -m mkdocs serve

# 6. Pushea
git add .
git commit -m "Agrega Nuevo Curso"
git push origin main
```

---

## **Plugins y su Función**

| Plugin | Función | Crítico |
|---|---|---|
| mkdocs-material | Tema visual | ✅ Sí |
| mkdocs-awesome-pages | Navegación automática | ⚠️ Opcional |
| git-revision-date-localized | Muestra fecha edición | ⚠️ Opcional |
| mkdocs-minify | Comprime HTML | ⚠️ Opcional |
| mkdocs-mermaid2 | Diagramas | ⚠️ Opcional |

**Mínimo necesario:**
```bash
pip install mkdocs mkdocs-material
```

---

## **Markdown Útil**

```markdown
# Título H1
## Subtítulo H2
### Subsubtítulo H3

**Negrita**
*Itálica*

- Punto 1
- Punto 2

1. Paso 1
2. Paso 2

> Cita o nota importante

`código inline`

\`\`\`bash
# Bloque de código
comando
\`\`\`

| Columna | Columna |
|---|---|
| Dato | Dato |

[Link](https://url)

\`\`\`mermaid
graph TD
    A --> B
\`\`\`

---
```

---

## **Errores Comunes y Soluciones**

| Error | Solución |
|---|---|
| `mkdocs: command not found` | Usa `python -m mkdocs serve` |
| Plugin no encontrado | `pip install [plugin-name]` |
| Puerto 8000 en uso | Usa `python -m mkdocs serve -a localhost:8001` |
| Git no reconoce correo | `git config --global user.email "email@com"` |
| YAML indentación incorrecta | Usa espacios (no tabs), 2 espacios por nivel |

---

## **Desplegar en GitHub Pages**

```bash
# 1. Crear archivo .github/workflows/deploy.yml
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-python@v2
        with:
          python-version: '3.9'
      - run: pip install mkdocs mkdocs-material mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-mermaid2-plugin
      - run: mkdocs gh-deploy --force
EOF

# 2. Push
git add .
git commit -m "Agrega GitHub Actions"
git push origin main

# Tu KB estará en: https://TU_USUARIO.github.io/mi-kb/
```

---

## **Colores para Botón PDF** (reemplaza en pdf-export.js)

**Púrpura (default):**
```javascript
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Rojo/Naranja:**
```javascript
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Verde/Agua:**
```javascript
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

**Naranja Brillante:**
```javascript
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
```

---

## **Configuración Adicional Útil**

### Cambiar idioma a Inglés
En mkdocs.yml:
```yaml
theme:
  language: en
```

### Agregar favicon
En mkdocs.yml:
```yaml
site_icon: 📚
```

### Cambiar puerto por defecto
```bash
python -m mkdocs serve -a 0.0.0.0:9000
```

### Ver cambios sin recargar (hot reload)
```bash
python -m mkdocs serve  # Ya lo hace automáticamente
```

---

## **Verificación Rápida Pre-Push**

```bash
# 1. Ver qué va a cambiar
git status

# 2. Ver cambios concretos
git diff

# 3. Ver histórico
git log --oneline -5

# 4. Prueba local
python -m mkdocs serve
# Abre http://localhost:8000 y navega

# 5. Cuando esté perfecto:
git add .
git commit -m "Mensaje descriptivo"
git push origin main
```

---

**Imprime esto 🖨️ o guarda como bookmark para referencia rápida**
