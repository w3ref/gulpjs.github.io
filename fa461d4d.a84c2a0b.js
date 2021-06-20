(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),c=(a(0),a(108)),i={id:"task",title:"task()",hide_title:!0,sidebar_label:"task()"},b={unversionedId:"api/task",id:"api/task",isDocsHomePage:!1,title:"task()",description:"task()",source:"@site/docs/api/task.md",slug:"/api/task",permalink:"/docs/en/api/task",version:"current",sidebar_label:"task()",sidebar:"docs",previous:{title:"watch()",permalink:"/docs/en/api/watch"},next:{title:"registry()",permalink:"/docs/en/api/registry"}},s=[{value:"Usage",id:"usage",children:[]},{value:"Signature",id:"signature",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Errors",id:"errors",children:[]}]},{value:"Task metadata",id:"task-metadata",children:[]}],o={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"task"},"task()"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Reminder"),": This API isn't the recommended pattern anymore - ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/en/getting-started/creating-tasks"}),"export your tasks"),"."),Object(c.b)("p",null,"Defines a task within the task system. The task can then be accessed from the command line and the ",Object(c.b)("inlineCode",{parentName:"p"},"series()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"parallel()"),", and ",Object(c.b)("inlineCode",{parentName:"p"},"lastRun()")," APIs."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Register a named function as a task:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\nfunction build(cb) {\n  // body omitted\n  cb();\n}\n\ntask(build);\n")),Object(c.b)("p",null,"Register an anonymous function as a task:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\ntask('build', function(cb) {\n  // body omitted\n  cb();\n});\n")),Object(c.b)("p",null,"Retrieve a task that has been registered previously:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\ntask('build', function(cb) {\n  // body omitted\n  cb();\n});\n\nconst build = task('build');\n")),Object(c.b)("h2",{id:"signature"},"Signature"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"task([taskName], taskFunction)\n")),Object(c.b)("h3",{id:"parameters"},"Parameters"),Object(c.b)("p",null,"If the ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," is not provided, the task will be referenced by the ",Object(c.b)("inlineCode",{parentName:"p"},"name")," property of a named function or a user-defined ",Object(c.b)("inlineCode",{parentName:"p"},"displayName")," property. The ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," parameter must be used for anonymous functions missing a ",Object(c.b)("inlineCode",{parentName:"p"},"displayName")," property."),Object(c.b)("p",null,"Since any registered task can be run from the command line, avoid using spaces in task names."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"note"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"taskName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An alias for the task function within the task system. Not needed when using named functions for ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"taskFunction",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"(required)")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/en/api/concepts#tasks"}),"task function")," or composed task - generated by ",Object(c.b)("inlineCode",{parentName:"td"},"series()")," and ",Object(c.b)("inlineCode",{parentName:"td"},"parallel()"),". Ideally a named function. ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"#task-metadata"}),"Task metadata")," can be attached to provide extra information to the command line.")))),Object(c.b)("h3",{id:"returns"},"Returns"),Object(c.b)("p",null,"When registering a task, nothing is returned."),Object(c.b)("p",null,"When retrieving a task, a wrapped task (not the original function) registered as ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," will be returned. The wrapped task has an ",Object(c.b)("inlineCode",{parentName:"p"},"unwrap()")," method that will return the original function."),Object(c.b)("h3",{id:"errors"},"Errors"),Object(c.b)("p",null,"When registering a task where ",Object(c.b)("inlineCode",{parentName:"p"},"taskName")," is missing and ",Object(c.b)("inlineCode",{parentName:"p"},"taskFunction"),' is anonymous, will throw an error with the message, "Task name must be specified".'),Object(c.b)("h2",{id:"task-metadata"},"Task metadata"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"property"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"note"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A special property of named functions. Used to register the task.",Object(c.b)("br",null),Object(c.b)("strong",{parentName:"td"},"Note:")," ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name"}),Object(c.b)("inlineCode",{parentName:"a"},"name"))," is not writable; it cannot be set or changed.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"displayName"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When attached to a ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction")," creates an alias for the task. If using characters that aren't allowed in function names, use this property.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"description"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When attached to a ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction")," provides a description to be printed by the command line when listing tasks.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"flags"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"object"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When attached to a ",Object(c.b)("inlineCode",{parentName:"td"},"taskFunction")," provides flags to be printed by the command line when listing tasks. The keys of the object represent the flags and the values are their descriptions.")))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { task } = require('gulp');\n\nconst clean = function(cb) {\n  // body omitted\n  cb();\n};\nclean.displayName = 'clean:all';\n\ntask(clean);\n\nfunction build(cb) {\n  // body omitted\n  cb();\n}\nbuild.description = 'Build the project';\nbuild.flags = { '-e': 'An example flag' };\n\ntask(build);\n")))}l.isMDXComponent=!0},108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),l=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||c;return a?r.a.createElement(m,b(b({ref:t},o),{},{components:a})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=u;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<c;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);