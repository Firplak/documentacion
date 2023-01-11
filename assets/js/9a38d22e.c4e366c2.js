"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[98],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(k,i(i({ref:t},d),{},{components:r})):n.createElement(k,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4967:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),i=["components"],o={title:"lib/generator.ts",nav_order:3,parent:"Modules"},s=void 0,p={unversionedId:"desarrollos/Nivel de servicio/modules/lib/generator.ts",id:"desarrollos/Nivel de servicio/modules/lib/generator.ts",title:"lib/generator.ts",description:"generator overview",source:"@site/docs/desarrollos/Nivel de servicio/modules/lib/generator.ts.md",sourceDirName:"desarrollos/Nivel de servicio/modules/lib",slug:"/desarrollos/Nivel de servicio/modules/lib/generator.ts",permalink:"/documentacion/docs/desarrollos/Nivel de servicio/modules/lib/generator.ts",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/desarrollos/Nivel de servicio/modules/lib/generator.ts.md",tags:[],version:"current",frontMatter:{title:"lib/generator.ts",nav_order:3,parent:"Modules"},sidebar:"defaultSidebar",previous:{title:"lib/file.ts",permalink:"/documentacion/docs/desarrollos/Nivel de servicio/modules/lib/file.ts"},next:{title:"lib/logger.ts",permalink:"/documentacion/docs/desarrollos/Nivel de servicio/modules/lib/logger.ts"}},d=[{value:"generator overview",id:"generator-overview",children:[],level:2},{value:"PDFRenderer (class)",id:"pdfrenderer-class",children:[{value:"generateMetrics (static method)",id:"generatemetrics-static-method",children:[],level:3},{value:"initialize (method)",id:"initialize-method",children:[],level:3},{value:"render (method)",id:"render-method",children:[],level:3},{value:"close (method)",id:"close-method",children:[],level:3},{value:"_processed (property)",id:"_processed-property",children:[],level:3},{value:"_timeouts (property)",id:"_timeouts-property",children:[],level:3}],level:2},{value:"TGeneratedMetrics (type alias)",id:"tgeneratedmetrics-type-alias",children:[],level:2},{value:"TProcessedAssociateData (type alias)",id:"tprocessedassociatedata-type-alias",children:[],level:2},{value:"TTimeout (type alias)",id:"ttimeout-type-alias",children:[],level:2}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"generator-overview"},"generator overview"),(0,l.kt)("p",null,"Generators"),(0,l.kt)("p",null,"Added in v2.0.1"),(0,l.kt)("hr",null),(0,l.kt)("h2",{class:"text-delta"},"Table of contents"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generators"},"Generators"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#pdfrenderer-class"},"PDFRenderer (class)"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#generatemetrics-static-method"},"generateMetrics (static method)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#initialize-method"},"initialize (method)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#render-method"},"render (method)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#close-method"},"close (method)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#_processed-property"},"_","processed (property)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#_timeouts-property"},"_","timeouts (property)")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#utils"},"utils"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tgeneratedmetrics-type-alias"},"TGeneratedMetrics (type alias)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#tprocessedassociatedata-type-alias"},"TProcessedAssociateData (type alias)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#ttimeout-type-alias"},"TTimeout (type alias)"))))),(0,l.kt)("hr",null),(0,l.kt)("h1",{id:"generators"},"Generators"),(0,l.kt)("h2",{id:"pdfrenderer-class"},"PDFRenderer (class)"),(0,l.kt)("p",null,"Generator of reports. Singleton."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export declare class PDFRenderer {\n  private constructor()\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { PDFRenderer } from '../../src/lib/generator'\nPDFRenderer.instance.render(data).then(() => console.log('Done'))\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h3",{id:"generatemetrics-static-method"},"generateMetrics (static method)"),(0,l.kt)("p",null,"Generates metrics based on associate data"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"public static generateMetrics(v: TAssociateData): TGeneratedMetrics\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { PDFRenderer } from '../../src/lib/generator'\nPDFRenderer.generateRenderer([]).then((metrics) => console.log(metrics))\n")),(0,l.kt)("p",null,"Added in v2.1.6"),(0,l.kt)("h3",{id:"initialize-method"},"initialize (method)"),(0,l.kt)("p",null,"Initializes the renderer"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"private async initialize()\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h3",{id:"render-method"},"render (method)"),(0,l.kt)("p",null,"It renders the data of all associates in input array to PDF"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"public async render(data: TAssociateData[]): Promise<void>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { PDFRenderer } from '../../src/lib/generator'\nPDFRenderer.instance.render()\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h3",{id:"close-method"},"close (method)"),(0,l.kt)("p",null,"Closes the browser"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"public async close(): Promise<void>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { PDFRenderer } from '../../src/lib/generator'\nPDFRenderer.instance.close()\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h3",{id:"_processed-property"},"_","processed (property)"),(0,l.kt)("p",null,"Used to keep track of processed associates"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"_processed: TProcessedAssociateData[]\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h3",{id:"_timeouts-property"},"_","timeouts (property)"),(0,l.kt)("p",null,"Used to keep track of batch timeouts"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"_timeouts: TTimeout\n")),(0,l.kt)("p",null,"Added in v2.0.3"),(0,l.kt)("h1",{id:"utils"},"utils"),(0,l.kt)("h2",{id:"tgeneratedmetrics-type-alias"},"TGeneratedMetrics (type alias)"),(0,l.kt)("p",null,"Return type for PDFRenderer.generateMetrics"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export type TGeneratedMetrics = {\n  ns: number[]\n  table_data: Array<{\n    month: string\n    ns: string\n    lines: number\n  }>\n  filtered_ns: number[]\n  accumulated_ns: number\n}\n")),(0,l.kt)("p",null,"Added in v2.1.6"),(0,l.kt)("h2",{id:"tprocessedassociatedata-type-alias"},"TProcessedAssociateData (type alias)"),(0,l.kt)("p",null,"PDFRenderer.render method return type"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export type TProcessedAssociateData = {\n  name: string\n  file_path: string\n  mail_path: string\n}\n")),(0,l.kt)("p",null,"Added in v2.1.4"),(0,l.kt)("h2",{id:"ttimeout-type-alias"},"TTimeout (type alias)"),(0,l.kt)("p",null,"Type for timeout data from PDFRenderer.render method"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Signature")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"export type TTimeout = Map<string, { timeout?: NodeJS.Timeout; status: boolean }>\n")),(0,l.kt)("p",null,"Added in v2.1.5"))}u.isMDXComponent=!0}}]);