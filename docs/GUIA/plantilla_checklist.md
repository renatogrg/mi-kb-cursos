# Template 2: Checklist / Guía Paso a Paso
 
Úsalo para tutoriales, instalaciones y procesos paso a paso.
 
---
 
## 1. Título + Objetivo
 
````markdown
# Instalar Mkdocs
 
## Objetivo
 
Tener mkdocs funcionando en tu máquina en 10 minutos.
````
 
Resultado
 
# Instalar Mkdocs
 
## Objetivo
 
Tener mkdocs funcionando en tu máquina en 10 minutos.
 
---
 
## 2. Requisitos
 
````markdown
## Requisitos
 
- [ ] Python 3.8+ instalado
- [ ] pip funcionando
- [ ] Git instalado
````
 
Resultado
 
## Requisitos
 
- [ ] Python 3.8+ instalado
- [ ] pip funcionando
- [ ] Git instalado
---
 
## 3. Pasos con código
 
````markdown
## Pasos
 
### Paso 1: Instala Mkdocs
 
```bash
pip install mkdocs mkdocs-material
```
 
Resultado esperado: Sin errores en la terminal.
 
### Paso 2: Crea tu proyecto
 
```bash
mkdocs new mi-kb
cd mi-kb
```
 
Resultado esperado: Ves carpeta con mkdocs.yml y docs/
````
 
Resultado
 
## Pasos
 
### Paso 1: Instala Mkdocs
 
````bash
pip install mkdocs mkdocs-material
````
 
Resultado esperado: Sin errores en la terminal.
 
### Paso 2: Crea tu proyecto
 
````bash
mkdocs new mi-kb
cd mi-kb
````
 
Resultado esperado: Ves carpeta con mkdocs.yml y docs/
 
---
 
## 4. Checklist de Verificación
 
````markdown
## Checklist de Verificación
 
- [ ] Mkdocs instalado correctamente
- [ ] Proyecto creado (existe mkdocs.yml)
- [ ] Servidor corriendo en localhost:8000
````
 
Resultado
 
## Checklist de Verificación
 
- [ ] Mkdocs instalado correctamente
- [ ] Proyecto creado (existe mkdocs.yml)
- [ ] Servidor corriendo en localhost:8000
---
 
## 5. Solución de Problemas
 
````markdown
## Solución de Problemas
 
| Problema | Solución |
|---|---|
| mkdocs: command not found | Usa `python -m mkdocs serve` |
| Puerto 8000 en uso | Usa `python -m mkdocs serve -a localhost:8001` |
````
 
Resultado
 
## Solución de Problemas
 
| Problema | Solución |
|---|---|
| mkdocs: command not found | Usa `python -m mkdocs serve` |
| Puerto 8000 en uso | Usa `python -m mkdocs serve -a localhost:8001` |
 
---
 
## 6. Tips Pro
 
````markdown
## Tips Pro
 
💡 Guarda este comando: `python -m mkdocs serve`
💡 Siempre trabaja dentro de la carpeta del proyecto
💡 Ctrl+C en terminal para parar el servidor
````
 
Resultado
 
## Tips Pro
 
💡 Guarda este comando: `python -m mkdocs serve`
 
💡 Siempre trabaja dentro de la carpeta del proyecto
 
💡 Ctrl+C en terminal para parar el servidor
 
---