# Como desplegar el conector de SAP B1

Para desplegar el conector solo es necesario contar con la definicion Swagger 2.0 del api, esta se genera automaticamente con Github Actions cada vez que se hace push en el origen, el repositorio del conector es:

[Conector en github](https://github.com/Firplak/fpk-sap-connector)

Ya contando con este conector basta con crear el conector en el cliente web de la Power Platform o con [pac cli](https://learn.microsoft.com/en-us/power-platform/developer/cli/introduction).

# Paso a paso conseguir definicion

- Primero nos dirigimos al repositorio: [Conector en github](https://github.com/Firplak/fpk-sap-connector).
![[Pasted image 20231012192147.png]]
- Estando en el repositorio nos dirigimos a **Actions**.
![[Pasted image 20231012192201.png]]
- Despues seleccionamos la ejecucion mas reciente.
- Estando en la ultima ejecucion llendo al fondo de la pagina (scroll al fondo) vamos a ver los artefactos, entre los cuales esta incluido FPKSapConnector, descargamos este zip y dentro de el estara un json con la definicion.

![[Pasted image 20231012192217.png]]

# Paso a paso creacion por cliente web

- Inicialmente nos dirigimos a **Data -> Custom connectors**.
![[Pasted image 20231012192259.png]]
- Despues vamos a ver la siguiente pantalla.
![[Pasted image 20231012192311.png]]
- En esta pantalla seleccionamos **New custom connector -> Import an Open Api file**.
![[Pasted image 20231012192321.png]]
- Habiendo hecho esto seleccionamos el archivo que se consiguio en el anterior titulo para la creacion del nuevo conector.
![[Pasted image 20231012192334.png]]
> Debemos asegurarnos que la casilla "Connect via on-premises data gateway" este habilitada.

Ya con esto podemos terminar la creacion del conector y empezar a usarlo.

# Paso a paso creacion con pac cli

Primero preparemos los archivos necesarios
- Icon (opcional)
- apiDefinition.json (el documento que conseguimos desde el github)
- apiProperties.json
> este documento es el que contiene las propiedades con las que queremos que se cree el conector, aqui se definen cosas como si se va a usar el gateway o no, el host, etc.

> Este documento no se encuentra en el github, pero aqui hay un boilerplate
```json
{
  "properties": {
    "connectionParameters": {
      "authType": {
        "type": "string",
        "allowedValues": [
          {
            "value": "none"
          }
        ],
        "uiDefinition": {
          "displayName": "Authentication Type",
          "description": "Authentication type to connect to your API",
          "tooltip": "Authentication type to connect to your API",
          "constraints": {
            "tabIndex": 1,
            "required": "true",
            "allowedValues": [
              {
                "text": "none",
                "value": "anonymous"
              }
            ],
            "capability": [
              "gateway"
            ]
          }
        }
      },
      "gateway": {
        "type": "gatewaySetting",
        "gatewaySettings": {
          "dataSourceType": "CustomConnector",
          "connectionDetails": []
        },
        "uiDefinition": {
          "constraints": {
            "tabIndex": 4,
            "required": "true",
            "capability": [
              "gateway"
            ]
          }
        }
      }
    },
    "iconBrandColor": "#007ee5",
    "capabilities": [],
    "publisher": "",
    "stackOwner": "",
    "policyTemplateInstances": []
  }
}
```

## Comandos

```sh
#Asegurarse de estar conectado
pac auth create

#Listar entornos (normalmente buscar desarrollo)
pac org list

#Seleccionar entorno (normalmente desarrollo)
pac org select -env <id del entorno (output del anterior)>

#Crear conector 
pac connector create -df .\apiDefinition.json -pf .\apiProperties.json -if .\icon.png -sol <Nombre del conector>

```
