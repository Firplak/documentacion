# Como funciona el sistema de plantillas

El sistema de plantillas para las notificaciones tiene un funcionamiento relativamente sencillo. Este permite mediante el uso de [JMESPath](https://jmespath.org/), introducir atributos de un objeto que se hace accesible para la plantilla.

## Plantillas

### Ejemplo de plantilla

Un ejemplo de esto seria cuando se desea enviar una notificacion cuando se modifica un servicio y se desea informar sobre el consecutivo:

> Cuando se modifica la tabla **Servicios** usar la siguiente plantilla
> `Se modifico el servicio con el consecutivo <% record.consecutivo %>`

En este ejemplo se puede evidenciar el uso de los siguientes caracteres ``<% ... %>`, estos indican al sistema de plantillas que se desea cambiar el valor que hay dentro`<% ESTE_VALOR %>`, el cual debe ser un JSONPath procesable por [JMESPath](https://jmespath.org/), este valor debe ser reemplazado por el atributo solicitado del objeto.

> El sistema de plantillas esta disponible solo desde las siguientes columnas de la tabla `Notificaciones`
>
> ```hs
> Notificaciones(recipients)
> Notificaciones(subject_template)
> Notificaciones(body_template)
> ```

La estructura del objeto es la siguiente:

```js
{
    users: {
        ...
    },
    record: {
        ...
    },
    relations: [
        ...
    ],
    related_user: [
        ...
    ],
    additional_values: [
        ...
    ]
}
```

> Notar la diferencia ente los atributos que son definidos con `{}` y `[]`

### Atributo users

El atributo users contiene toda llave foranea que referencie a la tabla usuarios de la tabla de la cual se haya originado la solicitud de notificacion, para cada llave foranea se le asignara como valor el respectivo usuario referenciado, entonces internamente cada una de estas llaves foraneas tendra la siguiente estructura

> Linea de la tabla Usuarios
>
> ```js
>{
>   id: 63,
>   created_at: "2023-10-03T14:08:26.390415+00:00",
>   user_id: "1f009f87-5c03-4b71-9fbf-9531006addf1",
>   display_name: "Javier Uribe",
>   rol: "tecnico",
>   nombres: "Javier",
>   apellidos: "Uribe",
>   url_foto: null,
>   correo: "consultor1@firplak.com",
>   cedula: null
>}```

#### Estructura de users

```ts
*/ 
{
    users: {
        "tecnico_id": {
            ...
        },
        "usuario_id": {
            ...
        },
        "llave_foranea_que_referencie_a_la_tabla_usuarios": {
            ...
        }
    },
    ...
}
```

### Atributo record

Contiene todos las columnas de la linea de la tabla que origino la solicitud de notificacion

#### Estructura de record

Si la tabla que origino la solicitud de notificacion fue **Servicios** por ejemplo

```js
{
    record: {
        id: 76,
        created_at: "2023-09-21T21:33:34.373081+00:00",
        consecutivo: "JhoDavMant6299",
        numero_de_pedido: "PRUEBA912",
        comercial_id: 1,
        consumidor_id: 132,
        estado: true,
        ubicacion_id: 37,
        consecutivo_sap: null,
        fecha_cierre: null,
        coordinador_id: 30,
        pedido_digitado: null,
        orden_de_venta: "PRUEBA",
        actividad_mac: null,
        decision_cliente: null,
        sharepoint_uid: "a46f79fe-831b-4e15-bc54-038907099bf0",
        tipo_de_servicio: "mantenimiento",
        canal_de_venta: "canal_ditribuidor",
        cerrado_por: null
    },
    ...
}
```

## Atributo relations

Este atributo contiene toda relacion que se haga desde la tabla que origino la solicitud de notificacion hacia otra tabla

### Ejemplo de relations

Si la tabla que origino la solicitud de notificacion fue **Servicios** y servicios cuenta con las siguientes llaves foraneas.

```hs
Usuarios(comercial_id) 
Usuarios(coordinador_id)
Consumidores(consumidor_id)
Ubicaciones(ubicacion_id)
```

Estas se transforman de la siguiente manera

```hs
Usuarios(comercial_id)      se convierte en `Usuarios_comercial_id
Usuarios(coordinador_id)    se convierte en `Usuarios_coordinador_id
Consumidores(consumidor_id) se convierte en `Consumidores_consumidor_id
Ubicaciones(ubicacion_id)   se convierte en `Ubicaciones_ubicacion_id
```

```hs
Tabla(llave_foranea)        se convierte en `Tabla_llave_foranea
```

Y terminan en el atributo relations de la siguiente manera

```js
{
   relations: {
       'Usuarios_comercial_id': { ... },
       'Usuarios_coordinador_id': { ... },
       'Consumidores_consumidor_id': { ... };
       'Ubicaciones_ubicacion_id': { ... }
   }, 
   ...
}
```

 Donde todos las llaves tienen los respectivos elementos de la base de datos

## Atributo related_users

El funcionamiento es muy similar a el anterior solo que cuando ya tenemos las relaciones definidas, lo que hacemos es extraer de estas relaciones todos los usuarios relacionados

### Ejemplo 1 de related_users

Una solitidud de notificacion originada por la tabla `Visitas`

```hs
Visitas -> Servicio -> Usuarios(coordinador_id)
```

En related_users se encuentran todos los `X -> Y -> Usuarios(*)`

> Importante notar que solo nos interesan las relaciones que tengan como destino la tabla `Usuarios`

La manera en la cual se estructuran los nombres de related users es:

### Ejemplo 2 (Ejemplo 1 de related_users continuacion)

Vamos a seguir con el ejemplo con la tabla `Visitas`

Las relaciones de la tabla `Visitas` son las siguientes:

```hs
Servicios(servicio_id)
Usuarios(tecnico_id) 
Usuarios(modified_by)
```

Vamos a filtrar todas las relaciones con la tabla `Usuarios` porque ya contamos con estos datos en el **Atributo user**. Quedamos con las siguientes relaciones

```hs
Servicios(servicio_id)
```

Ahora vamos a identificar las relaciones con la tabla `Usuarios` que hay en cada una de estas tablas, como vimos anteriormente las relaciones que tiene la tabla `Servicios` con la tabla `Usuarios` son las siguientes

```hs
Usuarios(comercial_id)
Usuarios(coordinador_id)
```

Entonces ahora contamos con las siguientes relaciones

```hs
Visitas -> Servicios(servicio_id) -> Usuarios(comercial_id)
Visitas -> Servicios(servicio_id) -> Usuarios(coordinador_id)
```

> Conviene abstraerlo como se indico anteriormente `X -> Y -> Usuarios(*)`

Entonces related_users lo que contiene es esta ultima parte, todas las relaciones con la tabla usuarios que estan presentes en las relaciones con la tabla que origino la solicitud de notificacion, el `Usuarios(*)` de la abstraccion.

Contando con las relaciones mencionadas anteriormente en la forma `X -> Y -> Usuarios(*)` facilmente podemos ver que hay informacion irrelevante, `X`, entonces reducimos a `Y -> Usuarios(*)`, y para facilitar el manejo de estas relaciones tambien se ignora cual es la llave foranea que hay en `X` de `Y` (por ejemplo, ignoramos que la llave foranea que hay en `Visitas`[`X`] de  `Servicios`[`Y`] que en este caso seria `servicio_id`) para solo quedar con los siguientes datos

```hs
Servicios -> Usuarios(comercial_id)
Servicios -> Usuarios(coordinador_id)
```

Teniendo estas relaciones las transformamos de la siguiente manera

```hs
Servicios -> Usuarios(comercial_id)` se convierte en Servicios_comercial_id
Servicios -> Usuarios(coordinador_id)` se convierte en Servicios_coordinador_id
```

Y finalmente nuestro atributo related_users termina con la siguiente estructura

```js
{
   related_users:{
       'Servicios_comercial_id': {
           ...
       }
       'Servicios_coordinador_id': {
           ...
       }
   },
   ...
}
 ```

## Filtros

Todos los filtros se introducen en la columna `Notificaciones(conditions)` en formato JSON con la estructura indicada segun el tipo de datos que se quiera filtrar

> Estos filtros determinan si una notificacion debe ser enviada segun el estado actual de la fila de la tabla que origino la solicitud de notificacion

### De booleanos

Un filtro de valores booleanos debe tener la siguiente estructura

```ts
{
    "NOMBRE_DE_LA_COLUMNA": {
        "value": boolean
    }
}
```

### De cadenas de texto

Un filtro de valores string debe tener la siguiente estructura

```ts
{
    "NOMBRE_DE_LA_COLUMNA": {
        "blob": "blob-like string para documentacion de la sintaxis ver https://www.npmjs.com/package/micromatch"
    }
}
```

### De numeros

Un filtro de valores numericos debe tener la siguiente estructura

```ts
/*
eq: igual a
gt: mayor que
gte: mayor o igual que
lt: menor que
lte: menor o igual que
neq: diferente de
*/
{
    "NOMBRE_DE_LA_COLUMNA": {
        eq?: number,
        gt?: number,
        gte?: number,
        lt?: number,
        lte?: number,
        neq?: number
    }
}
```
