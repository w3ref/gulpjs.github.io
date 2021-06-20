(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),c=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=c(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,f=p["".concat(l,".").concat(d)]||p[d]||g[d]||a;return t?r.a.createElement(f,u(u({ref:n},s),{},{components:t})):r.a.createElement(f,u({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=d;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return c}));var i=t(3),r=t(8),a=(t(0),t(108)),l={id:"using-plugins",title:"Using Plugins",hide_title:!0,sidebar_label:"Using Plugins"},u={unversionedId:"getting-started/using-plugins",id:"getting-started/using-plugins",isDocsHomePage:!1,title:"Using Plugins",description:"Using Plugins",source:"@site/docs/getting-started/7-using-plugins.md",slug:"/getting-started/using-plugins",permalink:"/docs/en/getting-started/using-plugins",version:"current",sidebar_label:"Using Plugins",sidebar:"docs",previous:{title:"Explaining Globs",permalink:"/docs/en/getting-started/explaining-globs"},next:{title:"Watching Files",permalink:"/docs/en/getting-started/watching-files"}},o=[{value:"Do you need a plugin?",id:"do-you-need-a-plugin",children:[]},{value:"Conditional plugins",id:"conditional-plugins",children:[]},{value:"Inline plugins",id:"inline-plugins",children:[]}],s={toc:o};function c(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"using-plugins"},"Using Plugins"),Object(a.b)("p",null,"Gulp plugins are ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/rvagg/through2"}),"Node Transform Streams")," that encapsulate common behavior to transform files in a pipeline - often placed between ",Object(a.b)("inlineCode",{parentName:"p"},"src()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"dest()")," using the ",Object(a.b)("inlineCode",{parentName:"p"},".pipe()")," method. They can change the filename, metadata, or contents of every file that passes through the stream."),Object(a.b)("p",null,'Plugins from npm - using the "gulpplugin" and "gulpfriendly" keywords - can be browsed and searched on the ',Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://gulpjs.com/plugins/"}),"plugin search page"),"."),Object(a.b)("p",null,"Each plugin should only do a small amount of work, so you can connect them like building blocks. You may need to combine a bunch of them to get the desired result."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst uglify = require('gulp-uglify');\nconst rename = require('gulp-rename');\n\nexports.default = function() {\n  return src('src/*.js')\n    // The gulp-uglify plugin won't update the filename\n    .pipe(uglify())\n    // So use gulp-rename to change the extension\n    .pipe(rename({ extname: '.min.js' }))\n    .pipe(dest('output/'));\n}\n")),Object(a.b)("h2",{id:"do-you-need-a-plugin"},"Do you need a plugin?"),Object(a.b)("p",null,"Not everything in gulp should use plugins. They are a quick way to get started, but many operations are improved by using a module or library instead."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const { rollup } = require('rollup');\n\n// Rollup's promise API works great in an `async` task\nexports.default = async function() {\n  const bundle = await rollup({\n    input: 'src/index.js'\n  });\n\n  return bundle.write({\n    file: 'output/bundle.js',\n    format: 'iife'\n  });\n}\n")),Object(a.b)("p",null,"Plugins should always transform files. Use a (non-plugin) Node module or library for any other operations."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const del = require('delete');\n\nexports.default = function(cb) {\n  // Use the `delete` module directly, instead of using gulp-rimraf\n  del(['output/*.js'], cb);\n}\n")),Object(a.b)("h2",{id:"conditional-plugins"},"Conditional plugins"),Object(a.b)("p",null,"Since plugin operations shouldn't be file-type-aware, you may need a plugin like ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.npmjs.com/package/gulp-if"}),"gulp-if")," to transform subsets of files."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst gulpif = require('gulp-if');\nconst uglify = require('gulp-uglify');\n\nfunction isJavaScript(file) {\n  // Check if file extension is '.js'\n  return file.extname === '.js';\n}\n\nexports.default = function() {\n  // Include JavaScript and CSS files in a single pipeline\n  return src(['src/*.js', 'src/*.css'])\n    // Only apply gulp-uglify plugin to JavaScript files\n    .pipe(gulpif(isJavaScript, uglify()))\n    .pipe(dest('output/'));\n}\n")),Object(a.b)("h2",{id:"inline-plugins"},"Inline plugins"),Object(a.b)("p",null,"Inline plugins are one-off Transform Streams you define inside your gulpfile by writing the desired behavior."),Object(a.b)("p",null,"There are two situations where creating an inline plugin is helpful:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Instead of creating and maintaining your own plugin."),Object(a.b)("li",{parentName:"ul"},"Instead of forking a plugin that exists to add a feature you want.")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const { src, dest } = require('gulp');\nconst uglify = require('uglify-js');\nconst through2 = require('through2');\n\nexports.default = function() {\n  return src('src/*.js')\n    // Instead of using gulp-uglify, you can create an inline plugin\n    .pipe(through2.obj(function(file, _, cb) {\n      if (file.isBuffer()) {\n        const code = uglify.minify(file.contents.toString())\n        file.contents = Buffer.from(code.code)\n      }\n      cb(null, file);\n    }))\n    .pipe(dest('output/'));\n}\n")))}c.isMDXComponent=!0}}]);