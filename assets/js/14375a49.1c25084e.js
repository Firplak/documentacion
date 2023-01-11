"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[717],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,a=new Array(i);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3341:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),l=r(3366),i=(r(7294),r(3905)),a=["components"],o={title:"lib/mail.ts",nav_order:5,parent:"Modules"},s=void 0,u={unversionedId:"desarrollos/Nivel de servicio/modules/lib/mail.ts",id:"desarrollos/Nivel de servicio/modules/lib/mail.ts",title:"lib/mail.ts",description:"mail overview",source:"@site/docs/desarrollos/Nivel de servicio/modules/lib/mail.ts.md",sourceDirName:"desarrollos/Nivel de servicio/modules/lib",slug:"/desarrollos/Nivel de servicio/modules/lib/mail.ts",permalink:"/docs/desarrollos/Nivel de servicio/modules/lib/mail.ts",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/desarrollos/Nivel de servicio/modules/lib/mail.ts.md",tags:[],version:"current",frontMatter:{title:"lib/mail.ts",nav_order:5,parent:"Modules"},sidebar:"defaultSidebar",previous:{title:"lib/logger.ts",permalink:"/docs/desarrollos/Nivel de servicio/modules/lib/logger.ts"},next:{title:"lib/utils.ts",permalink:"/docs/desarrollos/Nivel de servicio/modules/lib/utils.ts"}},p=[{value:"mail overview",id:"mail-overview",children:[],level:2},{value:"TMailOptions (type alias)",id:"tmailoptions-type-alias",children:[],level:2},{value:"sendMail",id:"sendmail",children:[],level:2}],c={toc:p};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mail-overview"},"mail overview"),(0,i.kt)("p",null,"All mail related functions"),(0,i.kt)("p",null,"Added in v2.1.4"),(0,i.kt)("hr",null),(0,i.kt)("h2",{class:"text-delta"},"Table of contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mail"},"Mail"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tmailoptions-type-alias"},"TMailOptions (type alias)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sendmail"},"sendMail"))))),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"mail"},"Mail"),(0,i.kt)("h2",{id:"tmailoptions-type-alias"},"TMailOptions (type alias)"),(0,i.kt)("p",null,"Type of sendMail function input"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type TMailOptions = {\n  body: string\n  subject: string\n  to: string\n  file_path?: string\n}\n")),(0,i.kt)("p",null,"Added in v2.1.4"),(0,i.kt)("h2",{id:"sendmail"},"sendMail"),(0,i.kt)("p",null,"Sends mail with the specified options."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export declare function sendMail({ body, subject, to, file_path }: TMailOptions): void\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { sendMail } from '../../src/lib/mail'\nsendMail('Hello world!', 'Hello, example', 'admin@test.com', 'output.pdf')\n")),(0,i.kt)("p",null,"Added in v2.1.4"))}d.isMDXComponent=!0}}]);