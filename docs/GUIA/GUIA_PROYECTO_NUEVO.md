# 🚀 Quick Start - Knowledge Base con Mkdocs

**Para replicar un proyecto idéntico en 15 minutos**

---

## **1. Instalación (5 min)**

```bash
# Crea carpeta del proyecto
mkdir mi-kb-nuevo
cd mi-kb-nuevo

# Inicia Git
git init
git config --global user.email "tu-email@gmail.com"
git config --global user.name "Tu Nombre"

# Conecta con GitHub (reemplaza TU_USUARIO)
git remote add origin https://github.com/TU_USUARIO/mi-kb-nuevo.git
git branch -M main

# Instala dependencias
pip install mkdocs mkdocs-material mkdocs-awesome-pages-plugin mkdocs-git-revision-date-localized-plugin mkdocs-minify-plugin mkdocs-mermaid2-plugin
```

---

## **2. Estructura de Carpetas (1 min)**

```bash
# Crea estructura
mkdocs new .
mkdir -p docs/js docs/css

# Resultado esperado:
# mi-kb-nuevo/
# ├── mkdocs.yml
# ├── docs/
# │   ├── index.md
# │   ├── js/
# │   └── css/
```

---

## **3. Archivos de Configuración (5 min)**

### **A) mkdocs.yml** (Reemplaza TODO el contenido)

```yaml
site_name: Mi KB - Cursos Tecnología
site_description: Knowledge Base - SEO, Cursos, Apuntes
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
  - Nuevo Curso:
      - Tema 1: nuevo-curso/01-tema.md
      - Tema 2: nuevo-curso/02-tema.md

extra_javascript:
  - js/pdf-export.js

extra_css:
  - css/custom.css

copyright: ""
```

### **B) docs/index.md**

```markdown
# Mi Knowledge Base

Apuntes estructurados de cursos de tecnología.

## 📚 Cursos

- **Nuevo Curso** - En curso

## 🔍 Cómo Usar

1. Usa el buscador arriba
2. Navega por el menú izquierdo
3. Descarga en PDF con el botón abajo a la derecha

---

Última actualización: hoy
```

### **C) docs/js/pdf-export.js** (Crear archivo nuevo)

```javascript
document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.createElement('button');
  downloadBtn.innerHTML = '📥 Descargar PDF';
  downloadBtn.className = 'pdf-download-btn';
  downloadBtn.title = 'Descargar esta página en PDF';
  
  // Estilos más visibles
  downloadBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 999;
    padding: 12px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  `;
  
  // Hover effect
  downloadBtn.onmouseover = function() {
    this.style.transform = 'scale(1.08)';
    this.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
  };
  
  downloadBtn.onmouseout = function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
  };
  
  downloadBtn.onclick = function() {
    window.print();
  };
  
  document.body.appendChild(downloadBtn);
});
```

### **D) docs/css/custom.css** (Crear archivo nuevo)

```css
/* Ocultar footer completamente */
footer {
  display: none !important;
}

/* Opcional: ajusta el padding si queda espacio */
.md-content {
  margin-bottom: 0;
}
```

---

## **4. Crea tu Primer Apunte (2 min)**

Crea carpeta y archivos:

```bash
mkdir docs/nuevo-curso
```

### **docs/nuevo-curso/01-tema.md**

```markdown
# Tema 1

## Concepto

Explicación del concepto principal

## Checklist

- [ ] Punto 1
- [ ] Punto 2

## Diagrama (Opcional con Mermaid)

\`\`\`mermaid
graph TD
    A[Inicio] --> B[Paso 1]
    B --> C[Resultado]
\`\`\`

## Recursos

- [Link oficial](https://ejemplo.com)
```

---

## **5. Prueba Localmente (2 min)**

```bash
python -m mkdocs serve
```

Abre: **http://localhost:8000**

Verifica:
- ✅ Buscador funciona
- ✅ Menú navega bien
- ✅ Botón PDF visible abajo a derecha
- ✅ No hay footer azul

---

## **6. Pushea a GitHub**

```bash
git add .
git commit -m "Initial: KB con estructura completa"
git push origin main
```

---

## **7. Despliega en GitHub Pages (Opcional)**

```bash
# Crear archivo .github/workflows/deploy.yml
mkdir -p .github/workflows

# Contenido del archivo:
```

**.github/workflows/deploy.yml:**

```yaml
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
```

Luego:
```bash
git add .
git commit -m "Agrega GitHub Actions deployment"
git push origin main
```

Tu KB estará en: `https://tu-usuario.github.io/mi-kb-nuevo/`

---

## **Comandos Diarios de Trabajo**

```bash
# Ver estado
git status

# Editar archivos en docs/

# Prueba local
python -m mkdocs serve

# Cuando esté listo:
git add .
git commit -m "Agrega [tema]"
git push origin main
```

---

## **Plugins Instalados**

| Plugin | Función |
|---|---|
| `mkdocs` | Core |
| `mkdocs-material` | Tema bonito |
| `mkdocs-awesome-pages-plugin` | Navegación automática |
| `mkdocs-git-revision-date-localized-plugin` | Muestra fecha última edición |
| `mkdocs-minify-plugin` | Comprime HTML (más rápido) |
| `mkdocs-mermaid2-plugin` | Diagramas |

---

## **Estructura de Carpetas Final**

```
mi-kb-nuevo/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── index.md
│   ├── js/
│   │   └── pdf-export.js
│   ├── css/
│   │   └── custom.css
│   └── nuevo-curso/
│       ├── 01-tema.md
│       └── 02-tema.md
├── mkdocs.yml
└── .git/
```

---

## **Colores Alternativos para el Botón PDF**

En `docs/js/pdf-export.js`, reemplaza la línea del `background`:

**Rojo/Naranja:**
```javascript
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

**Verde:**
```javascript
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

**Naranja Brillante:**
```javascript
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
```

---

## **Solución de Problemas**

### **Error: mkdocs command not found**
```bash
python -m mkdocs serve
```

### **Error: Plugin no encontrado**
```bash
pip install [nombre-del-plugin]
```

### **Puerto 8000 en uso**
```bash
python -m mkdocs serve -a localhost:8001
```

---

## **Pro Tips**

✅ Usa Markdown puro (portabilidad)  
✅ Un commit por cada cambio importante  
✅ Vincula conceptos entre apuntes  
✅ Usa Mermaid para diagramas  
✅ Exporta PDF con Ctrl+P desde navegador  
✅ Organiza por carpetas (un curso = una carpeta)  

---

**¡Listo! Ya puedes replicar esto en 15 minutos. 🚀**
