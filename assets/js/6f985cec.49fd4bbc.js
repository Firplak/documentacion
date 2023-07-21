"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[99],{8463:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"fpkbot-gcp","metadata":{"permalink":"/documentacion/blog/fpkbot-gcp","editUrl":"https://github.com/firplak/documentacion/blog/FirplakBot.mdx","source":"@site/blog/FirplakBot.mdx","title":"FirplakBot en la nube de Google","description":"Descripcion","date":"2023-07-21T16:39:48.081Z","formattedDate":"July 21, 2023","tags":[{"label":"gcp","permalink":"/documentacion/blog/tags/gcp"},{"label":"cloud","permalink":"/documentacion/blog/tags/cloud"}],"readingTime":1.515,"truncated":false,"authors":[{"name":"Jhonatan David","title":"Analista desarrollador","url":"https://github.com/jdaar","imageURL":"https://github.com/jdaar.png","key":"jhonatan"}],"frontMatter":{"slug":"fpkbot-gcp","title":"FirplakBot en la nube de Google","authors":["jhonatan"],"tags":["gcp","cloud"]}},"content":"## Descripcion\\n\\nEl despliegue del bot en la nube de Google sigue el siguiente diagrama:\\n\\n![Diagrama de la nube](./assets/firplakbot_diagram.png)\\n\\nComo se ve en el diagrama, el despliegue usa las siguientes herramientas:\\n\\n### Herramientas de la nube de Google\\n\\nTodas las herramientas de la nube de Google estan bajo la cuenta **cloud.firplak@gmail.com** cuya contrase\xf1a esta en el Keepass de sistemas.\\n\\n* **Cloud Build**:\\n    Este se usa para hacer la build del contenedor de Docker que contiene el codigo necesario para la implementacion con Twilio, esto permite que con un Makefile que esta en el repositorio del aplicativo se pueda desplegar de manera casi inmediata.\\n    * [**Ir al panel de administracion**](https://console.cloud.google.com/cloud-build/builds?authuser=2&project=firplakbot)\\n* **Cloud Run**:\\n    En esta herramienta se ejecuta el codigo que permite la implementacion con Twilio y contiene la logica de negocio propia del Bot (cache, bot simple, etc).\\n    * [**Ir al panel de administracion**](https://console.cloud.google.com/run?authuser=2&project=firplakbot)\\n* **DialogFlow**:\\n    Esta herramienta es la encargada de hacer el reconocimiento de lenguaje natural y comunicarse con la implementacion.\\n    * [**Ir al panel de administracion**](https://dialogflow.cloud.google.com/#/agent/firplakbot/intents)\\n* **Firebase Storage**\\n    En esta herramienta se guarda el cache de conversaciones para poder dar respuestas acorde al historial de mensajes.\\n    * [**Ir al panel de administracion**](https://console.firebase.google.com/u/2/project/firplakbot/overview)\\n---\\n### Herramientas externas a la nube de Google\\n\\nPara acceder al api de Freshdesk es necesario conseguir el API key desde el perfil del agente en la interfaz de la aplicacion, [**Ver como**](https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key), y para acceder a Twilio se ingresa con la cuenta que esta en el Keepass.\\n\\n* **Freshdesk API**:\\n    Con esta herramienta nos comunicamos con nuestra mesa de ayuda Freshdesk.\\n    * [**Ir a la documentacion**](https://developers.freshdesk.com/api/)\\n* **Twilio**:\\n    Esta herramienta es la que nos permite conectar con el servicio de mensajeria que en este caso es Whatsapp, sin embargo podemos hacer uso de diferentes medios como telefono, sms, etc.\\n    * [**Ir al panel de administracion**](https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1)"}]}')}}]);