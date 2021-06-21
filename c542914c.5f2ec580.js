(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(s,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(107)),s={id:"concepts",title:"API Concepts",hide_title:!0,sidebar_label:"Concepts"},o={unversionedId:"api/concepts",id:"api/concepts",isDocsHomePage:!1,title:"API Concepts",description:"Concepts",source:"@site/docs/api/concepts.md",slug:"/api/concepts",permalink:"/docs/ru/api/concepts",version:"current",sidebar_label:"Concepts",sidebar:"docs",previous:{title:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0440\u0435\u043b\u0438\u0437\u043e\u0432",permalink:"/docs/ru/recipes/automate-releases"},next:{title:"src()",permalink:"/docs/ru/api/src"}},l=[{value:"Vinyl",id:"vinyl",children:[]},{value:"Vinyl adapters",id:"vinyl-adapters",children:[]},{value:"Tasks",id:"tasks",children:[]},{value:"Globs",id:"globs",children:[]},{value:"Glob base",id:"glob-base",children:[]},{value:"File system stats",id:"file-system-stats",children:[]},{value:"File system modes",id:"file-system-modes",children:[]},{value:"Modules",id:"modules",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"concepts"},"Concepts"),Object(i.b)("p",null,"The following concepts are prerequisites to understanding the API docs. They will be referenced throughout, refer back to this page for detailed explanations."),Object(i.b)("p",null,"If you're new here, begin with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ru/getting-started/quick-start"}),"Getting Started Guide"),"."),Object(i.b)("h2",{id:"vinyl"},"Vinyl"),Object(i.b)("p",null,"Vinyl is a metadata object that describes a file. The main properties of a Vinyl instance are ",Object(i.b)("inlineCode",{parentName:"p"},"path")," and ",Object(i.b)("inlineCode",{parentName:"p"},"contents")," - core aspects of a file on your file system. Vinyl objects can be used to describe files from many sources - on a local file system or any remote storage option."),Object(i.b)("h2",{id:"vinyl-adapters"},"Vinyl adapters"),Object(i.b)("p",null,"While Vinyl provides a way to describe a file, a way to access these files is needed. Each file source is accessed using a Vinyl adapter."),Object(i.b)("p",null,"An adapter exposes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A method with the signature ",Object(i.b)("inlineCode",{parentName:"li"},"src(globs, [options])")," and returns a stream that produces Vinyl objects."),Object(i.b)("li",{parentName:"ul"},"A method with the signature ",Object(i.b)("inlineCode",{parentName:"li"},"dest(folder, [options])")," and returns a stream that consumes Vinyl objects."),Object(i.b)("li",{parentName:"ul"},"Any extra methods specific to their input/output medium - such as the ",Object(i.b)("inlineCode",{parentName:"li"},"symlink")," method ",Object(i.b)("inlineCode",{parentName:"li"},"vinyl-fs")," provides. They should always return streams that produce and/or consume Vinyl objects.")),Object(i.b)("h2",{id:"tasks"},"Tasks"),Object(i.b)("p",null,"Each gulp task is an asynchronous JavaScript function that either accepts an error-first callback or returns a stream, promise, event emitter, child process, or observable. Due to some platform limitations, synchronous tasks aren't supported."),Object(i.b)("p",null,"For a more detailed explanation, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ru/getting-started/creating-tasks"}),"Creating Tasks"),"."),Object(i.b)("h2",{id:"globs"},"Globs"),Object(i.b)("p",null,"A glob is a string of literal and/or wildcard characters, like ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", ",Object(i.b)("inlineCode",{parentName:"p"},"**"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"!"),", used to match filepaths. Globbing is the act of locating files on a file system using one or more globs."),Object(i.b)("p",null,"If you don't have experience with globs, see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ru/getting-started/explaining-globs"}),"Explaining Globs"),"."),Object(i.b)("h2",{id:"glob-base"},"Glob base"),Object(i.b)("p",null,"A glob base - sometimes called glob parent - is the path segment before any special characters in a glob string. As such, the glob base of ",Object(i.b)("inlineCode",{parentName:"p"},"/src/js/**.js")," is ",Object(i.b)("inlineCode",{parentName:"p"},"/src/js/"),".  All paths that match the glob are guaranteed to share the glob base - that path segment can't be variable."),Object(i.b)("p",null,"Vinyl instances generated by ",Object(i.b)("inlineCode",{parentName:"p"},"src()")," are constructed with the glob base set as their ",Object(i.b)("inlineCode",{parentName:"p"},"base")," property. When written to the file system with ",Object(i.b)("inlineCode",{parentName:"p"},"dest()"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"base")," will be removed from the output path to preserve directory structures."),Object(i.b)("p",null,"For more in depth information, see the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/es128/glob-parent"}),"glob-parent")," repository."),Object(i.b)("h2",{id:"file-system-stats"},"File system stats"),Object(i.b)("p",null,"File metadata is provided as an instance of Node's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/api/fs.html#fs_class_fs_stats"}),Object(i.b)("inlineCode",{parentName:"a"},"fs.Stats")),". It is available as the ",Object(i.b)("inlineCode",{parentName:"p"},"stat")," property on your Vinyl instances and used internally to determine if a Vinyl object represents a directory or symbolic link. When written to the file system, permissions and time values are synchronized from the Vinyl object's ",Object(i.b)("inlineCode",{parentName:"p"},"stat")," property."),Object(i.b)("h2",{id:"file-system-modes"},"File system modes"),Object(i.b)("p",null,"File system modes determine what permissions exist for a file. Most files and directories on your file system will have a fairly permissive mode, allowing gulp to read/write/update files on your behalf. By default, gulp will create files with the same permissions as the running process, but you can configure the modes through options in ",Object(i.b)("inlineCode",{parentName:"p"},"src()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"dest()"),", etc. If you're experiencing permission (EPERM) issues, check the modes on your files."),Object(i.b)("h2",{id:"modules"},"Modules"),Object(i.b)("p",null,"Gulp is made up of many small modules that are pulled together to work cohesively. By utilizing ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://semver.org"}),"semver")," within the small modules, we can release bug fixes and features without publishing new versions of gulp. Often, when you don't see progress on the main repository, work is being done in one of these modules."),Object(i.b)("p",null,"If you're having trouble, ensure your current modules are updated using the ",Object(i.b)("inlineCode",{parentName:"p"},"npm update")," command. If the problem persists, open an issue on the individual project repository."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/undertaker"}),"undertaker")," - the task registration system"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/vinyl"}),"vinyl")," - the virtual file objects"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/vinyl-fs"}),"vinyl-fs")," - a vinyl adapter to your local file system"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/glob-watcher"}),"glob-watcher")," - the file watcher"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/bach"}),"bach")," - task orchestration using ",Object(i.b)("inlineCode",{parentName:"li"},"series()")," and ",Object(i.b)("inlineCode",{parentName:"li"},"parallel()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/last-run"}),"last-run")," - tracks the last run time of a task"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/vinyl-sourcemap"}),"vinyl-sourcemap")," - built-in sourcemap support"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/gulpjs/gulp-cli"}),"gulp-cli")," - the command line interface for interacting with gulp")))}p.isMDXComponent=!0}}]);