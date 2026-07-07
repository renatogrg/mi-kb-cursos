# 📋 Templates para Apuntes - Usa Estos Directamente

Copia y pega estos templates en tus nuevos archivos `.md`

---

## **Template 1: Concepto Básico**

Usa cuando quieras documentar un concepto con teoría y ejemplo.

```markdown
# [NOMBRE DEL TEMA]

## Concepto

[Explicación clara de qué es y por qué existe]

## Características Principales

- **Punto 1**: Descripción
- **Punto 2**: Descripción
- **Punto 3**: Descripción

## Ejemplo Práctico

[Cómo se usa en la vida real]

## Errores Comunes

- ❌ Error 1: Explicación
- ❌ Error 2: Explicación

## Recursos

- [Documentación oficial](https://ejemplo.com)
- [Tutorial](https://ejemplo.com)

---

Próximo tema: [Siguiente tema](../siguiente-tema.md)
```

---

## **Template 2: Checklist/Guía Paso a Paso**

Usa para tutoriales y guías prácticas.

```markdown
# [NOMBRE DEL PROCESO]

## Objetivo

[Qué se va a lograr al final]

## Requisitos

- [ ] Requisito 1
- [ ] Requisito 2

## Pasos

### Paso 1: [Nombre]

[Explicación]

\`\`\`bash
# Comando o código
comando-aqui
\`\`\`

Resultado esperado: [Qué debería pasar]

### Paso 2: [Nombre]

[Explicación]

## Checklist de Verificación

- [ ] Verificación 1
- [ ] Verificación 2
- [ ] Verificación 3

## Solución de Problemas

| Problema | Solución |
|---|---|
| Error X | Hacer Y |
| Error Z | Hacer W |

## Tips Pro

💡 Consejo 1
💡 Consejo 2
💡 Consejo 3

---

Próximo: [Siguiente](../siguiente.md)
```

---

## **Template 3: Con Diagrama Mermaid**

Usa para conceptos complejos que necesitan visualización.

```markdown
# [TEMA CON DIAGRAMA]

## Visión General

\`\`\`mermaid
graph TD
    A[Elemento 1] --> B[Proceso]
    B --> C[Resultado]
    A --> D[Alternativa]
    D --> C
\`\`\`

## Explicación de Componentes

### Elemento 1
[Descripción]

### Proceso
[Descripción]

### Resultado
[Descripción]

## Flujo Detallado

1. Comienza en Elemento 1
2. Pasa a Proceso
3. Llega a Resultado

## Casos de Uso

- Caso 1: [Descripción]
- Caso 2: [Descripción]

---

Relacionado: [Tema relacionado](../tema-relacionado.md)
```

---

## **Template 4: Comparativa/Tabla**

Usa para comparar opciones, tecnologías, etc.

```markdown
# [Comparación de X vs Y]

## Comparativa Rápida

| Aspecto | Opción A | Opción B | Opción C |
|---|---|---|---|
| Velocidad | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ |
| Costo | $ | $$ | $$$ |
| Curva aprendizaje | Media | Fácil | Difícil |
| Comunidad | Grande | Pequeña | Grande |

## Análisis Detallado

### Opción A: [Nombre]

**Ventajas:**
- ✅ Ventaja 1
- ✅ Ventaja 2

**Desventajas:**
- ❌ Desventaja 1
- ❌ Desventaja 2

**Cuándo usar:** [Caso de uso]

### Opción B: [Nombre]

[Igual estructura]

## Mi Recomendación

Para [caso específico], usa **[Opción X]** porque [razones].

## Recursos de Comparación

- [Artículo comparativo](https://ejemplo.com)
- [Benchmarks](https://ejemplo.com)
```

---

## **Template 5: Concepto + Checklist (El más usado)**

Ideal para SEO, DevOps, cualquier cosa con "pasos a verificar".

```markdown
# [NOMBRE DEL TEMA]

## Qué es

[Definición en 1-2 líneas]

## Por qué importa

- Razón 1
- Razón 2
- Razón 3

## Checklist Implementable

- [ ] Paso 1: [Descripción clara]
- [ ] Paso 2: [Descripción clara]
- [ ] Paso 3: [Descripción clara]
- [ ] Paso 4: [Descripción clara]

## Herramientas Útiles

### Herramienta 1
```bash
# Cómo usar
comando-aqui
```

### Herramienta 2
[Link + descripción]

## Caso de Estudio

**Situación:** [Antes]

**Acciones:** [Qué se hizo]

**Resultado:** [Después con números]

## Errores Frecuentes

❌ No hacer X porque Y
❌ No hacer Z porque W

## Próximos Pasos

1. [Tema relacionado 1](../tema1.md)
2. [Tema relacionado 2](../tema2.md)
```

---

## **Template 6: Resumen/Síntesis**

Usa para resumir un tema largo o ser referencia rápida.

```markdown
# [RESUMEN TEMA]

## En Una Frase

[Síntesis de 1 línea]

## Conceptos Clave

| Concepto | Definición |
|---|---|
| Concepto 1 | Def 1 |
| Concepto 2 | Def 2 |

## Puntos Principales

1. **Punto 1**: Explicación
2. **Punto 2**: Explicación
3. **Punto 3**: Explicación

## Fórmula/Patrón

[Si aplica, muestra fórmula, patrón o estructura]

## Quick Reference

```
Comando: acción
Resultado: esperado
Alternativa: otra opción
```

## Links

- [Tema completo](../tema-completo.md)
- [Recurso oficial](https://ejemplo.com)
```

---

## **Cómo Estructurar tu Carpeta de Curso**

```
docs/
└── mi-nuevo-curso/
    ├── 00-conceptos-base.md        # Template 1
    ├── 01-tema-practico.md         # Template 5
    ├── 02-herramientas.md          # Template 4
    ├── 03-diagrama-completo.md     # Template 3
    ├── 04-paso-a-paso.md           # Template 2
    └── 99-resumen.md               # Template 6
```

---

## **Tips de Redacción**

✅ **Usa activo**: "Haz X" vs ❌ "Se debe hacer X"
✅ **Sé específico**: "Instala pip 26.1" vs ❌ "Instala pip"
✅ **Incluye números**: "+340% CTR" vs "mejor resultado"
✅ **Emojis moderados**: 📥 Descargar vs 🚀🎉 Descargar
✅ **Links internos**: `[Tema anterior](../00-tema.md)`
✅ **Ejemplos reales**: Caso que resolviste

---

## **Estructura Mínima (Si quieres algo ultra rápido)**

```markdown
# [Tema]

## Concepto
[1 párrafo explicando qué es]

## Checklist
- [ ] Paso 1
- [ ] Paso 2

## Recursos
[Links a documentación]
```

---

## **Markdown que Funciona Bien**

```markdown
# H1 - Título Principal

## H2 - Sección

### H3 - Subsección

**Negrita**: punto importante
*Itálica*: énfasis

- Punto 1
- Punto 2

1. Paso 1
2. Paso 2

> Cita importante

`código inline`

\`\`\`bash
# Bloque de código
comando
\`\`\`

| Columna 1 | Columna 2 |
|---|---|
| Dato | Dato |

[Link](https://ejemplo.com)

---

Línea separadora
```

---

**¡Listo! Copia el template que necesites y empieza a escribir. 📝**
