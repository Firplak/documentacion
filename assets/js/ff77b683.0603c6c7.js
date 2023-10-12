"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[873],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6046:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={slug:"fpkbot-gcp",title:"FirplakBot en la nube de Google",authors:["jhonatan"],tags:["gcp","cloud"]},c="FirplakBot en la nube de Google",s={permalink:"/documentacion/blog/fpkbot-gcp",editUrl:"https://github.com/firplak/documentacion/blog/FirplakBot.mdx",source:"@site/blog/FirplakBot.mdx",title:"FirplakBot en la nube de Google",description:"Descripcion",date:"2023-10-12T22:37:48.138Z",formattedDate:"October 12, 2023",tags:[{label:"gcp",permalink:"/documentacion/blog/tags/gcp"},{label:"cloud",permalink:"/documentacion/blog/tags/cloud"}],readingTime:1.515,truncated:!1,authors:[{name:"Jhonatan David",title:"Analista desarrollador",url:"https://github.com/jdaar",imageURL:"https://github.com/jdaar.png",key:"jhonatan"}],frontMatter:{slug:"fpkbot-gcp",title:"FirplakBot en la nube de Google",authors:["jhonatan"],tags:["gcp","cloud"]}},p={authorsImageUrls:[void 0]},u=[{value:"Descripcion",id:"descripcion",children:[{value:"Herramientas de la nube de Google",id:"herramientas-de-la-nube-de-google",children:[],level:3},{value:"Herramientas externas a la nube de Google",id:"herramientas-externas-a-la-nube-de-google",children:[],level:3}],level:2}],m={toc:u};function d(e){var a=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"descripcion"},"Descripcion"),(0,o.kt)("p",null,"El despliegue del bot en la nube de Google sigue el siguiente diagrama:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Diagrama de la nube",src:t(6821).Z,width:"753",height:"439"})),(0,o.kt)("p",null,"Como se ve en el diagrama, el despliegue usa las siguientes herramientas:"),(0,o.kt)("h3",{id:"herramientas-de-la-nube-de-google"},"Herramientas de la nube de Google"),(0,o.kt)("p",null,"Todas las herramientas de la nube de Google estan bajo la cuenta ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"mailto:cloud.firplak@gmail.com"},"cloud.firplak@gmail.com"))," cuya contrase\xf1a esta en el Keepass de sistemas."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud Build"),":\nEste se usa para hacer la build del contenedor de Docker que contiene el codigo necesario para la implementacion con Twilio, esto permite que con un Makefile que esta en el repositorio del aplicativo se pueda desplegar de manera casi inmediata.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/cloud-build/builds?authuser=2&project=firplakbot"},(0,o.kt)("strong",{parentName:"a"},"Ir al panel de administracion"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Cloud Run"),":\nEn esta herramienta se ejecuta el codigo que permite la implementacion con Twilio y contiene la logica de negocio propia del Bot (cache, bot simple, etc).",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/run?authuser=2&project=firplakbot"},(0,o.kt)("strong",{parentName:"a"},"Ir al panel de administracion"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DialogFlow"),":\nEsta herramienta es la encargada de hacer el reconocimiento de lenguaje natural y comunicarse con la implementacion.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dialogflow.cloud.google.com/#/agent/firplakbot/intents"},(0,o.kt)("strong",{parentName:"a"},"Ir al panel de administracion"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Firebase Storage"),"\nEn esta herramienta se guarda el cache de conversaciones para poder dar respuestas acorde al historial de mensajes.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.firebase.google.com/u/2/project/firplakbot/overview"},(0,o.kt)("strong",{parentName:"a"},"Ir al panel de administracion")))))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"herramientas-externas-a-la-nube-de-google"},"Herramientas externas a la nube de Google"),(0,o.kt)("p",null,"Para acceder al api de Freshdesk es necesario conseguir el API key desde el perfil del agente en la interfaz de la aplicacion, ",(0,o.kt)("a",{parentName:"p",href:"https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key"},(0,o.kt)("strong",{parentName:"a"},"Ver como")),", y para acceder a Twilio se ingresa con la cuenta que esta en el Keepass."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Freshdesk API"),":\nCon esta herramienta nos comunicamos con nuestra mesa de ayuda Freshdesk.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.freshdesk.com/api/"},(0,o.kt)("strong",{parentName:"a"},"Ir a la documentacion"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Twilio"),":\nEsta herramienta es la que nos permite conectar con el servicio de mensajeria que en este caso es Whatsapp, sin embargo podemos hacer uso de diferentes medios como telefono, sms, etc.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://console.twilio.com/?frameUrl=%2Fconsole%3Fx-target-region%3Dus1"},(0,o.kt)("strong",{parentName:"a"},"Ir al panel de administracion")))))))}d.isMDXComponent=!0},6821:function(e,a,t){a.Z=t.p+"assets/images/firplakbot_diagram-3c93e37eb6c7d7e9602639a96f6a34d2.png"}}]);