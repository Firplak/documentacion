"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[3941],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9778:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={title:"lib/file.ts",nav_order:2,parent:"Modules"},p=void 0,s={unversionedId:"desarrollos/nivel-servicio/modules/lib/file.ts",id:"desarrollos/nivel-servicio/modules/lib/file.ts",title:"lib/file.ts",description:"file overview",source:"@site/docs/desarrollos/nivel-servicio/modules/lib/file.ts.md",sourceDirName:"desarrollos/nivel-servicio/modules/lib",slug:"/desarrollos/nivel-servicio/modules/lib/file.ts",permalink:"/documentacion/docs/desarrollos/nivel-servicio/modules/lib/file.ts",editUrl:"https://github.com/firplak/documentacion/docs/desarrollos/nivel-servicio/modules/lib/file.ts.md",tags:[],version:"current",frontMatter:{title:"lib/file.ts",nav_order:2,parent:"Modules"},sidebar:"defaultSidebar",previous:{title:"index.ts",permalink:"/documentacion/docs/desarrollos/nivel-servicio/modules/index.ts"},next:{title:"lib/generator.ts",permalink:"/documentacion/docs/desarrollos/nivel-servicio/modules/lib/generator.ts"}},u=[{value:"file overview",id:"file-overview",children:[],level:2},{value:"cleanOutputDirectory",id:"cleanoutputdirectory",children:[],level:2},{value:"getData",id:"getdata",children:[],level:2},{value:"processData",id:"processdata",children:[],level:2},{value:"readTemplate",id:"readtemplate",children:[],level:2},{value:"writeFile",id:"writefile",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"file-overview"},"file overview"),(0,l.kt)("p",null,"Handles file operations."),(0,l.kt)("p",null,"Added in v2.0.1"),(0,l.kt)("hr",null),(0,l.kt)("h2",{class:"text-delta"},"Table of contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#file"},"File"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#cleanoutputdirectory"},"cleanOutputDirectory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#getdata"},"getData")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#processdata"},"processData")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#readtemplate"},"readTemplate")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#writefile"},"writeFile"))))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"file"},"File"),(0,l.kt)("h2",{id:"cleanoutputdirectory"},"cleanOutputDirectory"),(0,l.kt)("p",null,"It cleans the output directory."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export async function cleanOutputDirectory(): Promise<void>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { cleanOutputDirectory } from '../../src/lib/file'\ncleanOutputDirectory()\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h2",{id:"getdata"},"getData"),(0,l.kt)("p",null,"Gets data from input file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getData(): Promise<ILine[]>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { getData } from '../../src/lib/file'\ngetData().then((data) => console.log(data))\n")),(0,l.kt)("p",null,"Added in v2.0.1"),(0,l.kt)("h2",{id:"processdata"},"processData"),(0,l.kt)("p",null,"Processes data from input file contents."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export async function processData(data: ILine[]): Promise<TAssociateData[]>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { processData } from '../../src/lib/file'\nprocessData([]).then((data) => console.log(data))\n")),(0,l.kt)("p",null,"Added in v2.0.2"),(0,l.kt)("h2",{id:"readtemplate"},"readTemplate"),(0,l.kt)("p",null,"It reads the template file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export async function readTemplate(type: 'ns' | 'mail'): Promise<string | undefined>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { readTemplate } from '../../src/lib/file'\nreadTemplate('ns').then((data) => console.log(data))\n")),(0,l.kt)("p",null,"Added in v2.0.2"),(0,l.kt)("h2",{id:"writefile"},"writeFile"),(0,l.kt)("p",null,"Writes string data to output file."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export async function writeFile(name: string, data: string): Promise<void>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { writeFile } from '../../src/lib/file'\nwriteFile('output.txt', 'Hello world!')\n")),(0,l.kt)("p",null,"Added in v2.0.3"))}d.isMDXComponent=!0}}]);