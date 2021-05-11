(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{136:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),i=r.n(n);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(a,".").concat(m)]||p[m]||d[m]||s;return r?i.a.createElement(b,o(o({ref:t},u),{},{components:r})):i.a.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<s;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},137:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return a}));var n=r(22),i=r(138);function s(){var e=Object(n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,s=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var s=void 0===n?{}:n,a=s.forcePrependBaseUrl,o=void 0!==a&&a,c=s.absolute,u=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if(Object(i.b)(r))return r;if(o)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+l:l}(s,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,s().withBaseUrl)(e,t)}},138:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return i}))},96:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),s=(r(0),r(136)),a=r(137),o={id:"sysAdmin",title:"System administrator"},c={unversionedId:"system_overview/user_types/sysAdmin",id:"system_overview/user_types/sysAdmin",isDocsHomePage:!1,title:"System administrator",description:"This user is responsible for administering the system and monitoring performance",source:"@site/docs/system_overview/user_types/System_Administrator_6242267a7c504bb88ccd09d8af752ea4.mdx",slug:"/system_overview/user_types/sysAdmin",permalink:"/opencrvs-core/docs/system_overview/user_types/sysAdmin",version:"current",sidebar:"docs",previous:{title:"Registration manager",permalink:"/opencrvs-core/docs/system_overview/user_types/registrationManager"},next:{title:"Notify a vital event",permalink:"/opencrvs-core/docs/core_functions/notifyAVitalEvent"}},u=[{value:"Example Users",id:"example-users",children:[]},{value:"Site Map",id:"site-map",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This user is responsible for administering the system and monitoring performance"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Able to create users and edit user details"),Object(s.b)("li",{parentName:"ul"},"Able to add offices and edit office details"),Object(s.b)("li",{parentName:"ul"},"Able to view performance reports"),Object(s.b)("li",{parentName:"ul"},"Able to view operational dashboard"),Object(s.b)("li",{parentName:"ul"},"Able to audit users and records")),Object(s.b)("img",{alt:"System_Admin",src:Object(a.a)("assets/system_overview/user_types/System_Administrator_6242267a7c504bb88ccd09d8af752ea4/System_Admin.png")}),Object(s.b)("h3",{id:"example-users"},"Example Users"),Object(s.b)("p",null,'Chipo is an ICT Officer for the Department of National Registration, Passport and Citizenship (DNRPC) in Zambia. He works within a small team who are responsible for all ICT that supports the department. Chipo and his team tried the product on laptops and tablets and said "adding and managing users is simple and let\'s us focus on more pressing activities."'),Object(s.b)("img",{alt:"docImage_sysdmin",src:Object(a.a)("assets/system_overview/user_types/System_Administrator_6242267a7c504bb88ccd09d8af752ea4/docImage_sysdmin.png")}),Object(s.b)("h3",{id:"site-map"},"Site Map"),Object(s.b)("p",null,"The functions available to the System Adminsitrator are visible to the user as per the below sitemap."),Object(s.b)("img",{alt:"ia_systemAdmin2x",src:Object(a.a)("assets/system_overview/user_types/System_Administrator_6242267a7c504bb88ccd09d8af752ea4/ia_systemAdmin2x.png")}))}p.isMDXComponent=!0}}]);