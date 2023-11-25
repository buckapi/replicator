# Sync API

Sync API es una interfaz de programación de aplicaciones (API) que permite a los usuarios realizar operaciones de sincronización de archivos utilizando `rsync`. Esta API facilita la automatización de tareas de sincronización para proyectos y directorios específicos.

## Instalación

Para comenzar a usar la Sync API, sigue estos pasos:

1. Clona el repositorio en tu máquina local:
   ```
   git clone https://github.com/buckapi/replicator.git
   ```
2. Instala las dependencias necesarias:
   ```
   cd sync-api
   npm install
   ```

## Uso

Para utilizar la API, envía una solicitud POST con los siguientes parámetros:

- `project_name`: Nombre del proyecto a sincronizar.
- `source_dir`: Directorio de origen de los archivos.
- `dest_dir`: Directorio de destino para los archivos.
- `exclude_dir`: Directorio que debe excluirse de la sincronización.

Ejemplo de solicitud utilizando `curl`:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "project_name": "mi-proyecto",
    "source_dir": "/ruta/al/directorio/fuente",
    "dest_dir": "/ruta/al/directorio/destino",
    "exclude_dir": "/ruta/al/directorio/excluir"
}' http://tu-servidor/api/runRsync
```

## Contribuir

Si deseas contribuir a este proyecto, considera los siguientes pasos:

1. Haz un "fork" del repositorio.
2. Crea una rama para tu característica (`git checkout -b mi-nueva-caracteristica`).
3. Realiza tus cambios y haz un commit de tus cambios (`git commit -am 'Añadir alguna característica'`).
4. Haz push a la rama (`git push origin mi-nueva-caracteristica`).
5. Crea una nueva Pull Request.

## Soporte

Si encuentras algún problema o tienes alguna pregunta, por favor abre un issue en el repositorio de GitHub o contacta a [tu-email@dominio.com](mailto:tu-email@dominio.com).

## Licencia

Este proyecto está licenciado bajo [INSERTE NOMBRE DE LICENCIA] - ver el archivo LICENSE.md para detalles.
