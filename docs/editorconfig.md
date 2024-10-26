# Guía de configuración de .editorconfig

El archivo `.editorconfig` ayuda a mantener un estilo de código consistente en todo el proyecto. A continuación se explica cada configuración en el archivo.

## Ejemplo de archivo .editorconfig

```editorconfig
# Indentación de 4 espacios para todos los archivos
[*]
indent_style = space
indent_size = 4
end_of_line = lf
charset = utf-8
insert_final_newline = true
trim_trailing_whitespace = true

# Configuración específica para Python
[*.py]
indent_size = 4

# Configuración específica para JavaScript
[*.js]
indent_size = 2
```

# Explicación de las configuraciones:

1. **Indentación (indent_style, indent_size)**: Configura el tipo de indentación (`indent_style`) y el tamaño (`indent_size`) para mantener la coherencia. En este ejemplo, se usa una indentación de 4 espacios para la mayoría de los archivos, excepto en algunos casos como JSON y YAML, que comúnmente usan 2.

2. **Final de línea (end_of_line)**: Establece `lf` (line feed) para los finales de línea, lo cual es estándar en sistemas UNIX/Linux y ayuda a evitar problemas de compatibilidad en repositorios compartidos entre diferentes sistemas operativos (Windows y UNIX).

3. **Codificación de caracteres (charset)**: Define UTF-8 como la codificación de caracteres predeterminada, garantizando que no haya problemas de compatibilidad de caracteres en diferentes editores y sistemas.

4. **Nueva línea final (insert_final_newline)**: Inserta una nueva línea al final de cada archivo automáticamente, lo cual ayuda a evitar conflictos en herramientas de control de versiones y problemas en algunas herramientas de procesamiento de archivos.

5. **Espacios en blanco finales (trim_trailing_whitespace)**: Elimina los espacios en blanco al final de cada línea, lo cual es útil para evitar errores y mantener el código limpio y consistente.

6. **Longitud máxima de línea (max_line_length)**: Define un límite de longitud de línea en algunos archivos, especialmente útil para mejorar la legibilidad y evitar el desplazamiento horizontal en editores de texto. En archivos Markdown, este límite se puede desactivar para permitir párrafos largos sin interrupción.

7. **Configuraciones específicas para distintos archivos**: Puedes definir configuraciones particulares para diferentes tipos de archivos, como Python (`*.py`), JavaScript (`*.js`), JSON (`*.json`), entre otros. Esto permite que cada tipo de archivo siga convenciones específicas de formato.

[⬅️ Volver al README](../README.md)