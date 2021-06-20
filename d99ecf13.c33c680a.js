(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.a.createElement(g,c(c({ref:t},l),{},{components:n})):a.a.createElement(g,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<i;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),i=(n(0),n(108)),s={id:"creating-custom-registries",title:"Creating Custom Registries",hide_title:!0,sidebar_label:"Creating Custom Registries"},c={unversionedId:"advanced/creating-custom-registries",id:"advanced/creating-custom-registries",isDocsHomePage:!1,title:"Creating Custom Registries",description:"Creating Custom Registries",source:"@site/docs/advanced/creating-custom-registries.md",slug:"/advanced/creating-custom-registries",permalink:"/docs/en/advanced/creating-custom-registries",version:"current",sidebar_label:"Creating Custom Registries",sidebar:"docs",previous:{title:"Watching Files",permalink:"/docs/en/getting-started/watching-files"},next:{title:"Automate Releases",permalink:"/docs/en/recipes/automate-releases"}},o=[{value:"Structure",id:"structure",children:[]},{value:"Registration",id:"registration",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>init(gulpInst)</code>",id:"initgulpinst",children:[]},{value:"<code>get(name)</code>",id:"getname",children:[]},{value:"<code>set(name, fn)</code>",id:"setname-fn",children:[]},{value:"<code>tasks()</code>",id:"tasks",children:[]}]},{value:"Use Cases",id:"use-cases",children:[{value:"Sharing Tasks",id:"sharing-tasks",children:[]},{value:"Sharing Functionality",id:"sharing-functionality",children:[]}]},{value:"Examples",id:"examples",children:[]}],l={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"creating-custom-registries"},"Creating Custom Registries"),Object(i.b)("p",null,"Allows custom registries to be plugged into the task system, which can provide shared tasks or augmented functionality. Registries are registered using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/en/api/registry"}),Object(i.b)("inlineCode",{parentName:"a"},"registry()")),"."),Object(i.b)("h2",{id:"structure"},"Structure"),Object(i.b)("p",null,"In order to be accepted by gulp, custom registries must follow a specific format."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// as a function\nfunction TestRegistry() {}\n\nTestRegistry.prototype.init = function (gulpInst) {}\nTestRegistry.prototype.get = function (name) {}\nTestRegistry.prototype.set = function (name, fn) {}\nTestRegistry.prototype.tasks = function () {}\n\n// as a class\nclass TestRegistry {\n  init(gulpInst) {}\n\n  get(name) {}\n\n  set(name, fn) {}\n\n  tasks() {}\n}\n")),Object(i.b)("p",null,"If a registry instance passed to ",Object(i.b)("inlineCode",{parentName:"p"},"registry()")," doesn't have all four methods, an error will be thrown."),Object(i.b)("h2",{id:"registration"},"Registration"),Object(i.b)("p",null,"If we want to register our example registry from above, we will need to pass an instance of it to ",Object(i.b)("inlineCode",{parentName:"p"},"registry()"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { registry } = require('gulp');\n\n// ... TestRegistry setup code\n\n// good!\nregistry(new TestRegistry())\n\n// bad!\nregistry(TestRegistry())\n// This will trigger an error: 'Custom registries must be instantiated, but it looks like you passed a constructor'\n")),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"initgulpinst"},Object(i.b)("inlineCode",{parentName:"h3"},"init(gulpInst)")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"init()")," method of a registry is called at the very end of the ",Object(i.b)("inlineCode",{parentName:"p"},"registry()")," function. The gulp instance passed as the only argument (",Object(i.b)("inlineCode",{parentName:"p"},"gulpInst"),") can be used to pre-define tasks using\n",Object(i.b)("inlineCode",{parentName:"p"},"gulpInst.task(taskName, fn)"),"."),Object(i.b)("h4",{id:"parameters"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"gulpInst"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"object"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Instance of gulp.")))),Object(i.b)("h3",{id:"getname"},Object(i.b)("inlineCode",{parentName:"h3"},"get(name)")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"get()")," method receives a task ",Object(i.b)("inlineCode",{parentName:"p"},"name")," for the custom registry to resolve and return, or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," if no task with that name exists."),Object(i.b)("h4",{id:"parameters-1"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"name"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of the task to be retrieved.")))),Object(i.b)("h3",{id:"setname-fn"},Object(i.b)("inlineCode",{parentName:"h3"},"set(name, fn)")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"set()")," method receives a task ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fn"),". This is called internally by ",Object(i.b)("inlineCode",{parentName:"p"},"task()")," to provide user-registered tasks to custom registries."),Object(i.b)("h4",{id:"parameters-2"},"Parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"parameter"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"type"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"note"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"name"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"string"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Name of the task to be set.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"fn"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"function"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Task function to be set.")))),Object(i.b)("h3",{id:"tasks"},Object(i.b)("inlineCode",{parentName:"h3"},"tasks()")),Object(i.b)("p",null,"Must return an object listing all tasks in the registry."),Object(i.b)("h2",{id:"use-cases"},"Use Cases"),Object(i.b)("h3",{id:"sharing-tasks"},"Sharing Tasks"),Object(i.b)("p",null,"To share common tasks with all your projects, you can expose an ",Object(i.b)("inlineCode",{parentName:"p"},"init")," method on the registry and it will receive an instance of gulp as the only argument. You can then use ",Object(i.b)("inlineCode",{parentName:"p"},"gulpInst.task(name, fn)")," to register pre-defined tasks."),Object(i.b)("p",null,"For example, you might want to share a ",Object(i.b)("inlineCode",{parentName:"p"},"clean")," task:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const fs = require('fs');\nconst util = require('util');\n\nconst DefaultRegistry = require('undertaker-registry');\nconst del = require('del');\n\nfunction CommonRegistry(opts){\n  DefaultRegistry.call(this);\n\n  opts = opts || {};\n\n  this.buildDir = opts.buildDir || './build';\n}\n\nutil.inherits(CommonRegistry, DefaultRegistry);\n\nCommonRegistry.prototype.init = function(gulpInst) {\n  const buildDir = this.buildDir;\n  const exists = fs.existsSync(buildDir);\n\n  if(exists){\n    throw new Error('Cannot initialize common tasks. ' + buildDir + ' directory exists.');\n  }\n\n  gulpInst.task('clean', function(){\n    return del([buildDir]);\n  });\n}\n\nmodule.exports = CommonRegistry;\n")),Object(i.b)("p",null,"Then to use it in a project:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { registry, series, task } = require('gulp');\nconst CommonRegistry = require('myorg-common-tasks');\n\nregistry(new CommonRegistry({ buildDir: '/dist' }));\n\ntask('build', series('clean', function build(cb) {\n  // do things\n  cb();\n}));\n")),Object(i.b)("h3",{id:"sharing-functionality"},"Sharing Functionality"),Object(i.b)("p",null,"By controlling how tasks are added to the registry, you can decorate them."),Object(i.b)("p",null,"For example, if you wanted all tasks to share some data, you can use a custom registry to bind them to that data. Be sure to return the altered task, as per the description of registry methods above:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { registry, series, task } = require('gulp');\nconst util = require('util');\nconst DefaultRegistry = require('undertaker-registry');\n\n// Some task defined somewhere else\nconst BuildRegistry = require('./build.js');\nconst ServeRegistry = require('./serve.js');\n\nfunction ConfigRegistry(config){\n  DefaultRegistry.call(this);\n  this.config = config;\n}\n\nutil.inherits(ConfigRegistry, DefaultRegistry);\n\nConfigRegistry.prototype.set = function set(name, fn) {\n  var bound = fn.bind(this.config);\n  // Preserve internal properties and task metadata.\n  var task = Object.assign(bound, fn);\n  // The `DefaultRegistry` uses `this._tasks` for storage.\n  this._tasks[name] = task;\n  return task;\n};\n\nregistry(new BuildRegistry());\nregistry(new ServeRegistry());\n\n// `registry` will reset each task in the registry with\n// `ConfigRegistry.prototype.set` which will bind them to the config object.\nregistry(new ConfigRegistry({\n  src: './src',\n  build: './build',\n  bindTo: '0.0.0.0:8888'\n}));\n\ntask('default', series('clean', 'build', 'serve', function(cb) {\n  console.log('Server bind to ' + this.bindTo);\n  console.log('Serving' + this.build);\n  cb();\n}));\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/gulpjs/undertaker-registry"}),"undertaker-registry"),": The Gulp 4 default registry."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/gulpjs/undertaker-common-tasks"}),"undertaker-common-tasks"),": Proof-of-concept custom registry that pre-defines tasks."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/gulpjs/undertaker-task-metadata"}),"undertaker-task-metadata"),": Proof-of-concept custom registry that attaches metadata to each task.")))}b.isMDXComponent=!0}}]);