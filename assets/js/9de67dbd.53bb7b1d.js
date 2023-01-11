"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[375],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2371:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={title:"main"},l="Module `src.main`",u={unversionedId:"desarrollos/Reenvio a Facture/main",id:"desarrollos/Reenvio a Facture/main",title:"main",description:"Expand source code",source:"@site/docs/desarrollos/Reenvio a Facture/main.md",sourceDirName:"desarrollos/Reenvio a Facture",slug:"/desarrollos/Reenvio a Facture/main",permalink:"/documentacion/docs/desarrollos/Reenvio a Facture/main",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/desarrollos/Reenvio a Facture/main.md",tags:[],version:"current",frontMatter:{title:"main"},sidebar:"defaultSidebar",previous:{title:"Package `src`",permalink:"/documentacion/docs/desarrollos/Reenvio a Facture/"},next:{title:"Module `src.lib`",permalink:"/documentacion/docs/desarrollos/Reenvio a Facture/lib/"}},s=[{value:"Functions",id:"functions",children:[],level:2}],p={toc:s};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"module-srcmain"},"Module ",(0,o.kt)("inlineCode",{parentName:"h1"},"src.main")),(0,o.kt)("p",null,"Expand source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'from .lib.constants import CONFIG\nfrom .lib.facture import getFactureJWT, getFactureInvoices, getFactureInvoiceDetails\nfrom .lib.mail import sendMail\nfrom .lib.utils import registerProcessed, getProcessed, getUrlAsBlob\n\nRECIPIENT = CONFIG["Email"]["RECIPIENT"]\n\n\ndef main():\n    JWT = getFactureJWT()\n    invoices = getFactureInvoices(JWT)\n    invoiceDetails = []\n    for invoice in invoices:\n        invoiceDetails.append(getFactureInvoiceDetails(\n            JWT, invoice["ldf"].strip()))\n    for invoice in invoiceDetails:\n        if invoice:\n            if not invoice["LDF"] in getProcessed():\n                sendMail(\n                    RECIPIENT,\n                    invoice["LDF"],\n                    f"Se recibio la factura {invoice[\'LDF\']}",\n                    [\n                        {\n                            "name": invoice["LDF"] + ".xml",\n                            "data": getUrlAsBlob(invoice["UBL"]),\n                        },\n                        {\n                            "name": invoice["LDF"] + ".pdf",\n                            "data": getUrlAsBlob(invoice["URI"]),\n                        },\n                    ],\n                )\n                registerProcessed(invoice["LDF"])\n\n\nif (__name__ == "__main__"):\n    main()\n')),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def main()")),(0,o.kt)("p",null,"Expand source code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'def main():\n    JWT = getFactureJWT()\n    invoices = getFactureInvoices(JWT)\n    invoiceDetails = []\n    for invoice in invoices:\n        invoiceDetails.append(getFactureInvoiceDetails(\n            JWT, invoice["ldf"].strip()))\n    for invoice in invoiceDetails:\n        if invoice:\n            if not invoice["LDF"] in getProcessed():\n                sendMail(\n                    RECIPIENT,\n                    invoice["LDF"],\n                    f"Se recibio la factura {invoice[\'LDF\']}",\n                    [\n                        {\n                            "name": invoice["LDF"] + ".xml",\n                            "data": getUrlAsBlob(invoice["UBL"]),\n                        },\n                        {\n                            "name": invoice["LDF"] + ".pdf",\n                            "data": getUrlAsBlob(invoice["URI"]),\n                        },\n                    ],\n                )\n                registerProcessed(invoice["LDF"])\n')),(0,o.kt)("h1",{id:"index"},"Index"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"super-module"},"Super-module"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:".",title:"src"},"src")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"functions-1"},(0,o.kt)("a",{parentName:"h3",href:"#header-functions"},"Functions")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.main.main",title:"src.main.main"},"main"))))),(0,o.kt)("p",null,"Generated by ",(0,o.kt)("a",{parentName:"p",href:"https://pdoc3.github.io/pdoc",title:"pdoc: Python API documentation generator"},"pdoc 0.10.0"),"."))}d.isMDXComponent=!0}}]);