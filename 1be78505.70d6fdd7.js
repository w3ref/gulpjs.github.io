(window.webpackJsonp=window.webpackJsonp||[]).push([[6,28],{121:function(e,a,t){"use strict";var n=t(3),r=t(8),i=t(0),c=t.n(i),l=t(115),o=t.n(l),s=t(111),b=t(21),m=t(110),v=t(114),u=t(113),f=t(123),_=t(117),d=t(122),p=t(120),g=t(57),h=t.n(g);function O(){}function j(e){var a=e.activeBasePath,t=e.to,i=e.href,l=e.logo,u=e.label,f=(e.position,Object(r.a)(e,["activeBasePath","to","href","logo","label","position"])),d=Object(m.a)(t),p=Object(m.a)(a),g=function(e){void 0===e&&(e={});var a=Object(b.default)().siteConfig,t=(a=void 0===a?{}:a).baseUrl,n=Object(_.a)().isDarkTheme,r=e.href||t;e.target?e.target:Object(v.a)(r);var i=e.srcDark&&n?e.srcDark:e.src;return{logoImageUrl:Object(m.a)(i),logoAlt:e.alt}}(l),O=g.logoImageUrl,j=g.logoAlt,E=null!=O?c.a.createElement("img",{className:o()(h.a.navbarIcon),src:O,alt:j}):u;return c.a.createElement(s.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({activeClassName:"navbar__link--active",to:d},a?{isActive:function(e,a){return a.pathname.startsWith(p)}}:null),f),E)}function E(e){var a,t=e.items,i=e.emphasis,l=e.position,s=Object(r.a)(e,["items","emphasis","position"]);return t?c.a.createElement("div",{className:o()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===l,"dropdown--right":"right"===l})},c.a.createElement(j,Object(n.a)({className:"navbar__item navbar__link"},s),s.label),c.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(j,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):c.a.createElement(j,Object(n.a)({className:o()("navbar__item","navbar__link",(a={"navbar__link--icon":s.logo},a[h.a.emphasis]=i,a[h.a.noWrap]=!0,a))},s))}function k(e){return"/plugins"!==e&&"/plugins/"!==e}a.a=function(){var e,a=Object(b.default)().siteConfig.themeConfig.navbar,t=(a=void 0===a?{}:a).items,r=void 0===t?[]:t,l=a.hideOnScroll,s=void 0!==l&&l,m=Object(u.useLocation)(),v=Object(i.useState)(k(m.pathname)),_=v[0],g=v[1];Object(i.useEffect)((function(){g(k(m.pathname))}),[m]);var j=Object(d.a)(s),N=j.navbarRef,w=j.isNavbarVisible;return c.a.createElement("nav",{ref:N,className:o()("navbar","navbar--light","navbar--fixed-top",(e={},e[h.a.navbarHideable]=s,e[h.a.navbarHidden]=!w,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},c.a.createElement(p.a,{className:"navbar__brand",imageClassName:"navbar__logo"}),r.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(E,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},r.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(E,Object(n.a)({},e,{key:a}))})),_&&c.a.createElement(f.a,{handleSearchBarToggle:O,isSearchBarExpanded:!0}))))}}}]);