# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

---

## **Día a Día: Flujo de Trabajo**

```bash
# 1. Ver status
git status

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