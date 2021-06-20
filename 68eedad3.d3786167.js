(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,h=d["".concat(c,".").concat(p)]||d[p]||b[p]||r;return t?i.a.createElement(h,s(s({ref:n},l),{},{components:t})):i.a.createElement(h,s({ref:n},l))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},82:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(8),r=(t(0),t(108)),c={id:"watching-files",title:"Watching Files",hide_title:!0,sidebar_label:"Watching Files"},s={unversionedId:"getting-started/watching-files",id:"getting-started/watching-files",isDocsHomePage:!1,title:"Watching Files",description:"Watching Files",source:"@site/docs/getting-started/8-watching-files.md",slug:"/getting-started/watching-files",permalink:"/docs/en/getting-started/watching-files",version:"current",sidebar_label:"Watching Files",sidebar:"docs",previous:{title:"Using Plugins",permalink:"/docs/en/getting-started/using-plugins"},next:{title:"Creating Custom Registries",permalink:"/docs/en/advanced/creating-custom-registries"}},o=[{value:"Warning: avoid synchronous",id:"warning-avoid-synchronous",children:[]},{value:"Watched events",id:"watched-events",children:[]},{value:"Initial execution",id:"initial-execution",children:[]},{value:"Queueing",id:"queueing",children:[]},{value:"Delay",id:"delay",children:[]},{value:"Using the watcher instance",id:"using-the-watcher-instance",children:[]},{value:"Optional dependency",id:"optional-dependency",children:[]}],l={toc:o};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"watching-files"},"Watching Files"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"watch()")," API connects ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/getting-started/explaining-globs"}),"globs")," to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/getting-started/creating-tasks"}),"tasks")," using a file system watcher. It watches for changes to files that match the globs and executes the task when a change occurs. If the task doesn't signal ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/en/getting-started/async-completion"}),"Async Completion"),", it will never be run a second time."),Object(r.b)("p",null,"This API provides built-in delay and queueing based on most-common-use defaults."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { watch, series } = require('gulp');\n\nfunction clean(cb) {\n  // body omitted\n  cb();\n}\n\nfunction javascript(cb) {\n  // body omitted\n  cb();\n}\n\nfunction css(cb) {\n  // body omitted\n  cb();\n}\n\nexports.default = function() {\n  // You can use a single task\n  watch('src/*.css', css);\n  // Or a composed task\n  watch('src/*.js', series(clean, javascript));\n};\n")),Object(r.b)("h2",{id:"warning-avoid-synchronous"},"Warning: avoid synchronous"),Object(r.b)("p",null,"A watcher's task cannot be synchronous, like tasks registered into the task system. If you pass a sync task, the completion can't be determined and the task won't run again - it is assumed to still be running."),Object(r.b)("p",null,"There is no error or warning message provided because the file watcher keeps your Node process running. Since the process doesn't exit, it cannot be determined whether the task is done or just taking a really, really long time to run."),Object(r.b)("h2",{id:"watched-events"},"Watched events"),Object(r.b)("p",null,"By default, the watcher executes tasks whenever a file is created, changed, or deleted.\nIf you need to use different events, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"events")," option when calling ",Object(r.b)("inlineCode",{parentName:"p"},"watch()"),". The available events are ",Object(r.b)("inlineCode",{parentName:"p"},"'add'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'addDir'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'change'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'unlink'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'unlinkDir'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'ready'"),", ",Object(r.b)("inlineCode",{parentName:"p"},"'error'"),". Additionally ",Object(r.b)("inlineCode",{parentName:"p"},"'all'")," is available, which represents all events other than ",Object(r.b)("inlineCode",{parentName:"p"},"'ready'")," and ",Object(r.b)("inlineCode",{parentName:"p"},"'error'"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { watch } = require('gulp');\n\nexports.default = function() {\n  // All events will be watched\n  watch('src/*.js', { events: 'all' }, function(cb) {\n    // body omitted\n    cb();\n  });\n};\n")),Object(r.b)("h2",{id:"initial-execution"},"Initial execution"),Object(r.b)("p",null,"Upon calling ",Object(r.b)("inlineCode",{parentName:"p"},"watch()"),", the tasks won't be executed, instead they'll wait for the first file change."),Object(r.b)("p",null,"To execute tasks before the first file change, set the ",Object(r.b)("inlineCode",{parentName:"p"},"ignoreInitial")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { watch } = require('gulp');\n\nexports.default = function() {\n  // The task will be executed upon startup\n  watch('src/*.js', { ignoreInitial: false }, function(cb) {\n    // body omitted\n    cb();\n  });\n};\n")),Object(r.b)("h2",{id:"queueing"},"Queueing"),Object(r.b)("p",null,"Each ",Object(r.b)("inlineCode",{parentName:"p"},"watch()")," guarantees that its currently running task won't execute again concurrently. When a file change is made while a watcher task is running, another execution will queue up to run when the task finishes. Only one run can be queued up at a time."),Object(r.b)("p",null,"To disable queueing, set the ",Object(r.b)("inlineCode",{parentName:"p"},"queue")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { watch } = require('gulp');\n\nexports.default = function() {\n  // The task will be run (concurrently) for every change made\n  watch('src/*.js', { queue: false }, function(cb) {\n    // body omitted\n    cb();\n  });\n};\n")),Object(r.b)("h2",{id:"delay"},"Delay"),Object(r.b)("p",null,"Upon file change, a watcher task won't run until a 200ms delay has elapsed. This is to avoid starting a task too early when many files are being changed at once - like find-and-replace."),Object(r.b)("p",null,"To adjust the delay duration, set the ",Object(r.b)("inlineCode",{parentName:"p"},"delay")," option to a positive integer."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { watch } = require('gulp');\n\nexports.default = function() {\n  // The task won't be run until 500ms have elapsed since the first change\n  watch('src/*.js', { delay: 500 }, function(cb) {\n    // body omitted\n    cb();\n  });\n};\n")),Object(r.b)("h2",{id:"using-the-watcher-instance"},"Using the watcher instance"),Object(r.b)("p",null,"You likely won't use this feature, but if you need full control over changed files - like access to paths or metadata - use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/chokidar"}),"chokidar")," instance returned from ",Object(r.b)("inlineCode",{parentName:"p"},"watch()"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Be careful:")," The returned chokidar instance doesn't have queueing, delay, or async completion features."),Object(r.b)("h2",{id:"optional-dependency"},"Optional dependency"),Object(r.b)("p",null,"Gulp has an optional dependency called ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/fsevents"}),"fsevents"),", which is a Mac-specific file watcher. If you see an installation warning for fsevents - ",Object(r.b)("em",{parentName:"p"},'"npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents"')," - it is not an issue.\nIf fsevents installation is skipped, a fallback watcher will be used and any errors occurring in your gulpfile aren't related to this warning."))}u.isMDXComponent=!0}}]);