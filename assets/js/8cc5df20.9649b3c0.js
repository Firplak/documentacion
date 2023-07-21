"use strict";(self.webpackChunkfirplak_documentation=self.webpackChunkfirplak_documentation||[]).push([[905],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=s,g=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7671:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),s=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"utils"},a="Module `src.lib.utils`",p={unversionedId:"desarrollos/reenvio-facture/lib/utils",id:"desarrollos/reenvio-facture/lib/utils",title:"utils",description:"Functions",source:"@site/docs/desarrollos/reenvio-facture/lib/utils.md",sourceDirName:"desarrollos/reenvio-facture/lib",slug:"/desarrollos/reenvio-facture/lib/utils",permalink:"/documentacion/docs/desarrollos/reenvio-facture/lib/utils",editUrl:"https://github.com/firplak/documentacion/docs/desarrollos/reenvio-facture/lib/utils.md",tags:[],version:"current",frontMatter:{title:"utils"},sidebar:"defaultSidebar",previous:{title:"mail",permalink:"/documentacion/docs/desarrollos/reenvio-facture/lib/mail"},next:{title:"\xbfComo acceder a los cursos?",permalink:"/documentacion/docs/cursos/access"}},c=[{value:"Functions",id:"functions",children:[],level:2},{value:"Returns",id:"returns",children:[],level:2},{value:"Args",id:"args",children:[],level:2},{value:"Returns",id:"returns-1",children:[],level:2},{value:"Args",id:"args-1",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"module-srclibutils"},"Module ",(0,o.kt)("inlineCode",{parentName:"h1"},"src.lib.utils")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    import pytest\n    import requests\n    \n    from .constants import PROCESSED_FILE\n    \n    \n    def registerProcessed(itemLdf: str) -> None:\n        """\n        It registers the LDF of the item in PROCESSED_FILE\n    \n        Args:\n            itemLdf (str): The LDF of the item\n        """\n    \n        with open(PROCESSED_FILE, "a", encoding="utf-8") as file:\n            file.write(f"{itemLdf}\\n")\n    \n    \n    def getProcessed() -> list:\n        """\n        It gets all the registered LDFs\n    \n        Returns:\n            processedLdfs (list): A list with all processed Ldfs\n        """\n    \n        with open(PROCESSED_FILE, "r", encoding="utf-8") as file:\n            return file.read().split("\\n")\n    \n    \n    def getUrlAsBlob(url: str) -> bytes:\n        """\n        Gets the content of a URL as a blob\n    \n        Args:\n            url (str): The url where the content is\n    \n        Returns:\n            content (bytes): The content of the URL\n        """\n    \n        headers = {"Content-Type": "application/json"}\n        response = requests.request("GET", url, headers=headers, timeout=20)\n        return response.content\n    \n    \n    @pytest.fixture\n    def google_content():\n        """For testing purposes"""\n    \n        return getUrlAsBlob("https://www.google.com")\n    \n    \n    def test_getUrlAsBlob(google_content):\n        """For testing purposes"""\n    \n        assert type(google_content) is bytes\n    \n    \n    @pytest.fixture\n    def processed():\n        """For testing purposes"""\n    \n        return getProcessed()\n    \n    \n    @pytest.fixture\n    def processed_after_modification():\n        """For testing purposes"""\n    \n        registerProcessed("test1")\n        return getProcessed()\n    \n    \n    @pytest.fixture\n    def processed_after_second_modification():\n        """For testing purposes"""\n    \n        registerProcessed("test2")\n        return getProcessed()\n    \n    \n    def test_getProcessed(processed, processed_after_modification):\n        """For testing purposes"""\n    \n        assert type(processed) is list\n        assert "test1" in processed_after_modification\n    \n    \n    def test_registerProcessed(processed_after_second_modification):\n        """For testing purposes"""\n    \n        assert "test2" in processed_after_second_modification\n')),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def getProcessed() \u2011>\xa0list")),(0,o.kt)("p",null,"It gets all the registered LDFs"),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("p",null,"processedLdfs (list): A list with all processed Ldfs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def getProcessed() -> list:\n        """\n        It gets all the registered LDFs\n    \n        Returns:\n            processedLdfs (list): A list with all processed Ldfs\n        """\n    \n        with open(PROCESSED_FILE, "r", encoding="utf-8") as file:\n            return file.read().split("\\n")\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def getUrlAsBlob(url:\xa0str) \u2011>\xa0bytes")),(0,o.kt)("p",null,"Gets the content of a URL as a blob"),(0,o.kt)("h2",{id:"args"},"Args"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"url"))," :\u2002",(0,o.kt)("inlineCode",{parentName:"p"},"str")),(0,o.kt)("p",null,"The url where the content is"),(0,o.kt)("h2",{id:"returns-1"},"Returns"),(0,o.kt)("p",null,"content (bytes): The content of the URL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def getUrlAsBlob(url: str) -> bytes:\n        """\n        Gets the content of a URL as a blob\n    \n        Args:\n            url (str): The url where the content is\n    \n        Returns:\n            content (bytes): The content of the URL\n        """\n    \n        headers = {"Content-Type": "application/json"}\n        response = requests.request("GET", url, headers=headers, timeout=20)\n        return response.content\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def google_content()")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    @pytest.fixture\n    def google_content():\n        """For testing purposes"""\n    \n        return getUrlAsBlob("https://www.google.com")\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def processed()")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    @pytest.fixture\n    def processed():\n        """For testing purposes"""\n    \n        return getProcessed()\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def processed_after_modification()")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    @pytest.fixture\n    def processed_after_modification():\n        """For testing purposes"""\n    \n        registerProcessed("test1")\n        return getProcessed()\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def processed_after_second_modification()")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    @pytest.fixture\n    def processed_after_second_modification():\n        """For testing purposes"""\n    \n        registerProcessed("test2")\n        return getProcessed()\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def registerProcessed(itemLdf:\xa0str) \u2011>\xa0None")),(0,o.kt)("p",null,"It registers the LDF of the item in PROCESSED","_","FILE"),(0,o.kt)("h2",{id:"args-1"},"Args"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"itemLdf"))," :\u2002",(0,o.kt)("inlineCode",{parentName:"p"},"str")),(0,o.kt)("p",null,"The LDF of the item"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def registerProcessed(itemLdf: str) -> None:\n        """\n        It registers the LDF of the item in PROCESSED_FILE\n    \n        Args:\n            itemLdf (str): The LDF of the item\n        """\n    \n        with open(PROCESSED_FILE, "a", encoding="utf-8") as file:\n            file.write(f"{itemLdf}\\n")\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def test_getProcessed(processed, processed_after_modification)")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def test_getProcessed(processed, processed_after_modification):\n        """For testing purposes"""\n    \n        assert type(processed) is list\n        assert "test1" in processed_after_modification\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def test_getUrlAsBlob(google_content)")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def test_getUrlAsBlob(google_content):\n        """For testing purposes"""\n    \n        assert type(google_content) is bytes\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"def test_registerProcessed(processed_after_second_modification)")),(0,o.kt)("p",null,"For testing purposes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'    def test_registerProcessed(processed_after_second_modification):\n        """For testing purposes"""\n    \n        assert "test2" in processed_after_second_modification\n')),(0,o.kt)("h1",{id:"index"},"Index"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"super-module"},"Super-module"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"index.html",title:"src.lib"},"src.lib")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h3",{parentName:"li",id:"functions-1"},(0,o.kt)("a",{parentName:"h3",href:"#header-functions"},"Functions")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.getProcessed",title:"src.lib.utils.getProcessed"},"getProcessed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.getUrlAsBlob",title:"src.lib.utils.getUrlAsBlob"},"getUrlAsBlob")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.google_content",title:"src.lib.utils.google_content"},"google_content")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.processed",title:"src.lib.utils.processed"},"processed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.processed_after_modification",title:"src.lib.utils.processed_after_modification"},"processed_after_modification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.processed_after_second_modification",title:"src.lib.utils.processed_after_second_modification"},"processed_after_second_modification")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.registerProcessed",title:"src.lib.utils.registerProcessed"},"registerProcessed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.test_getProcessed",title:"src.lib.utils.test_getProcessed"},"test_getProcessed")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.test_getUrlAsBlob",title:"src.lib.utils.test_getUrlAsBlob"},"test_getUrlAsBlob")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#src.lib.utils.test_registerProcessed",title:"src.lib.utils.test_registerProcessed"},"test_registerProcessed"))))),(0,o.kt)("p",null,"Generated by ",(0,o.kt)("a",{parentName:"p",href:"https://pdoc3.github.io/pdoc",title:"pdoc: Python API documentation generator"},"pdoc 0.10.0"),"."))}d.isMDXComponent=!0}}]);