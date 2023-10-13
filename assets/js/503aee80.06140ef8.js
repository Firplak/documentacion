"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[7350],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?n.createElement(f,i(i({ref:a},u),{},{components:t})):n.createElement(f,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1222:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={},c="Backups de listas de Sharepoint",s={unversionedId:"general/backups/sharepoint",id:"general/backups/sharepoint",title:"Backups de listas de Sharepoint",description:"En cuanto a los backups de las listas de Sharepoint se ha optado por implementar un flujo de nube programado todos los dias, el cual se encarga de hacer un backup de las listas de Sharepoint y guardarlas en un directorio de Sharepoint.",source:"@site/docs/general/backups/sharepoint.md",sourceDirName:"general/backups",slug:"/general/backups/sharepoint",permalink:"/documentacion/docs/general/backups/sharepoint",editUrl:"https://github.com/firplak/documentacion/docs/general/backups/sharepoint.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sincronizacion de datos entre la aplicacion de servicios de legado (Power Apps) y su nueva version (Supabase)",permalink:"/documentacion/docs/general/aplicacion-servicios/synchronization-system"},next:{title:"Arquitectura del conector de SAP B1",permalink:"/documentacion/docs/general/conector-sap/architecture"}},u=[{value:"Como programo el backup de una lista?",id:"como-programo-el-backup-de-una-lista",children:[],level:2},{value:"Formato del backup",id:"formato-del-backup",children:[],level:2}],p={toc:u};function d(e){var a=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backups-de-listas-de-sharepoint"},"Backups de listas de Sharepoint"),(0,o.kt)("p",null,"En cuanto a los backups de las listas de Sharepoint se ha optado por implementar un flujo de nube programado todos los dias, el cual se encarga de hacer un backup de las listas de Sharepoint y guardarlas en un directorio de Sharepoint."),(0,o.kt)("p",null,"El sitio en el cual se maneja todos los datos relevantes para el proceso de backup de listas de Sharepoint es el siguiente ",(0,o.kt)("a",{parentName:"p",href:"https://firplaksa.sharepoint.com/sites/Backups"},"Sitio de Sharepoint de Backups"),"."),(0,o.kt)("h2",{id:"como-programo-el-backup-de-una-lista"},"Como programo el backup de una lista?"),(0,o.kt)("p",null,"En el sitio de Sharepoint mencionado anteriormente se encuentra un directorio llamado ",(0,o.kt)("inlineCode",{parentName:"p"},"Backups")," y una lista llamada ",(0,o.kt)("inlineCode",{parentName:"p"},"Listas para Backup"),"."),(0,o.kt)("p",null,"El uso de esta herramienta es relativamente sencillo, simplemente se introduce la informaci\xf3n de la lista que se desea incluir en la generaci\xf3n de los backups a la lista \xabListas para Backup\xbb en el sitio de SharePoint \xabBackups\xbb."),(0,o.kt)("p",null,"La informaci\xf3n requerida es:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nombre de la lista"),(0,o.kt)("li",{parentName:"ul"},"Sitio de SharePoint"),(0,o.kt)("li",{parentName:"ul"},"Nombre del sitio de SharePoint"),(0,o.kt)("li",{parentName:"ul"},"Frecuencia (en d\xedas)")),(0,o.kt)("p",null,"Los backups se guardan en la librer\xeda de documentos \xabBackups\xbb en el sitio de SharePoint \xabBackups\xbb."),(0,o.kt)("p",null,"La herramienta fue creada con Power Automate bajo el nombre \xabBackup diario para listas de SharePoint\xbb. Su ejecuci\xf3n es a las 7 PM todos los d\xedas."),(0,o.kt)("h2",{id:"formato-del-backup"},"Formato del backup"),(0,o.kt)("p",null,"El backup se almacena en formato CSV, el cual contiene la informaci\xf3n de todos los elementos de la lista, excluyendo todo archivo adjunto."))}d.isMDXComponent=!0}}]);