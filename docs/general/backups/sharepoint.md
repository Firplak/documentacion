# Backups de listas de Sharepoint

En cuanto a los backups de las listas de Sharepoint se ha optado por implementar un flujo de nube programado todos los dias, el cual se encarga de hacer un backup de las listas de Sharepoint y guardarlas en un directorio de Sharepoint.

El sitio en el cual se maneja todos los datos relevantes para el proceso de backup de listas de Sharepoint es el siguiente [Sitio de Sharepoint de Backups](https://firplaksa.sharepoint.com/sites/Backups).

## Como programo el backup de una lista?

En el sitio de Sharepoint mencionado anteriormente se encuentra un directorio llamado `Backups` y una lista llamada `Listas para Backup`.

El uso de esta herramienta es relativamente sencillo, simplemente se introduce la información de la lista que se desea incluir en la generación de los backups a la lista «Listas para Backup» en el sitio de SharePoint «Backups».

La información requerida es:

- Nombre de la lista
- Sitio de SharePoint
- Nombre del sitio de SharePoint
- Frecuencia (en días)

Los backups se guardan en la librería de documentos «Backups» en el sitio de SharePoint «Backups».

La herramienta fue creada con Power Automate bajo el nombre «Backup diario para listas de SharePoint». Su ejecución es a las 7 PM todos los días.

## Formato del backup

El backup se almacena en formato CSV, el cual contiene la información de todos los elementos de la lista, excluyendo todo archivo adjunto.
