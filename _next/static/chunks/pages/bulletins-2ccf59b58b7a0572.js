(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3689],{55113:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var o=n(63366),a=n(87462),r=n(67294),i=n(86010),l=n(27192),s=n(41796),c=n(11496),u=n(33616),d=n(28979);function p(e){return(0,d.Z)("MuiPaper",e)}(0,n(76087).Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=n(85893);const m=["className","component","elevation","square","variant"],v=e=>{let t;return t=e<1?5.11916*e**2:4.5*Math.log(e+1)+2,(t/100).toFixed(2)},h=(0,c.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t[`elevation${n.elevation}`]]}})((({theme:e,ownerState:t})=>(0,a.Z)({backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${e.palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:e.shadows[t.elevation]},"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",v(t.elevation))}, ${(0,s.Fq)("#fff",v(t.elevation))})`}))));var g=r.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiPaper"}),{className:r,component:s="div",elevation:c=1,square:d=!1,variant:v="elevation"}=n,g=(0,o.Z)(n,m),x=(0,a.Z)({},n,{component:s,elevation:c,square:d,variant:v}),y=(e=>{const{square:t,elevation:n,variant:o,classes:a}=e,r={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${n}`]};return(0,l.Z)(r,p,a)})(x);return(0,f.jsx)(h,(0,a.Z)({as:s,ownerState:x,className:(0,i.Z)(y.root,r),ref:t},g))}))},11413:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bulletins",function(){return n(22406)}])},43370:function(e,t,n){"use strict";var o=n(85893),a=n(9008),r=n(47426);t.Z=function(e){var t=e.title,n=e.ogDescription,i=e.ogImageURL,l=e.ogImgAlt,s=void 0===l?"Picture":l,c=e.ogSiteName,u=void 0===c?"ACAP-".concat(r.Gt.toUpperCase()):c,d=e.ogURL,p=e.canonicalURL,f=void 0===p?"http://localhost":p;return(0,o.jsxs)(a.default,{children:[(0,o.jsx)("meta",{name:"description",content:n}),(0,o.jsx)("meta",{rel:"canonical",href:f}),(0,o.jsx)("meta",{name:"og:description",content:n}),(0,o.jsx)("meta",{property:"og:title",content:t}),(0,o.jsx)("meta",{property:"og:site_name",content:u}),(0,o.jsx)("meta",{property:"og:image",content:i}),(0,o.jsx)("meta",{property:"og:image:width",content:"600"}),(0,o.jsx)("meta",{property:"og:image:height",content:"315"}),(0,o.jsx)("meta",{property:"og:image:alt",content:s}),(0,o.jsx)("meta",{property:"og:url",content:d}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("meta",{name:"twitter:title",content:t}),(0,o.jsx)("meta",{name:"twitter:image",content:i}),(0,o.jsx)("title",{children:t})]})}},48418:function(e,t,n){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var o,a,r=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!t||r.length!==t);i=!0);}catch(s){l=!0,a=s}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return r}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var r,i=(r=n(67294))&&r.__esModule?r:{default:r},l=n(76273),s=n(90387),c=n(57190);var u={};function d(e,t,n,o){if(e&&l.isLocalURL(t)){e.prefetch(t,n,o).catch((function(e){0}));var a=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var p=function(e){var t,n=!1!==e.prefetch,o=s.useRouter(),r=i.default.useMemo((function(){var t=a(l.resolveHref(o,e.href,!0),2),n=t[0],r=t[1];return{href:n,as:e.as?l.resolveHref(o,e.as):r||n}}),[o,e.href,e.as]),p=r.href,f=r.as,m=e.children,v=e.replace,h=e.shallow,g=e.scroll,x=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var y=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,b=a(c.useIntersection({rootMargin:"200px"}),2),w=b[0],Z=b[1],j=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=Z&&n&&l.isLocalURL(p),t="undefined"!==typeof x?x:o&&o.locale,a=u[p+"%"+f+(t?"%"+t:"")];e&&!a&&d(o,p,f,{locale:t})}),[f,p,Z,x,n,o]);var C={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,o,a,r,i,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),t[a?"replace":"push"](n,o,{shallow:r,locale:s,scroll:i}))}(e,o,p,f,v,h,g,x)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(p)&&d(o,p,f,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof x?x:o&&o.locale,M=o&&o.isLocaleDomain&&l.getDomainLocale(f,S,o&&o.locales,o&&o.domainLocales);C.href=M||l.addBasePath(l.addLocale(f,S,o&&o.defaultLocale))}return i.default.cloneElement(t,C)};t.default=p},22406:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return U}});var o=n(85893),a=n(41664),r=n(87357),i=n(66242),l=n(63366),s=n(87462),c=n(67294),u=n(86010),d=n(27192),p=n(11496),f=n(33616),m=n(28979),v=n(76087);function h(e){return(0,m.Z)("MuiCardActions",e)}(0,v.Z)("MuiCardActions",["root","spacing"]);const g=["disableSpacing","className"],x=(0,p.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disableSpacing&&t.spacing]}})((({ownerState:e})=>(0,s.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})));var y=c.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:a=!1,className:r}=n,i=(0,l.Z)(n,g),c=(0,s.Z)({},n,{disableSpacing:a}),p=(e=>{const{classes:t,disableSpacing:n}=e,o={root:["root",!n&&"spacing"]};return(0,d.Z)(o,h,t)})(c);return(0,o.jsx)(x,(0,s.Z)({className:(0,u.Z)(p.root,r),ownerState:c,ref:t},i))})),b=n(44267);function w(e){return(0,m.Z)("MuiCardMedia",e)}(0,v.Z)("MuiCardMedia",["root","media","img"]);const Z=["children","className","component","image","src","style"],j=(0,p.ZP)("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e,{isMediaComponent:o,isImageComponent:a}=n;return[t.root,o&&t.media,a&&t.img]}})((({ownerState:e})=>(0,s.Z)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"}))),C=["video","audio","picture","iframe","img"],S=["picture","img"];var M=c.forwardRef((function(e,t){const n=(0,f.Z)({props:e,name:"MuiCardMedia"}),{children:a,className:r,component:i="div",image:c,src:p,style:m}=n,v=(0,l.Z)(n,Z),h=-1!==C.indexOf(i),g=!h&&c?(0,s.Z)({backgroundImage:`url("${c}")`},m):m,x=(0,s.Z)({},n,{component:i,isMediaComponent:h,isImageComponent:-1!==S.indexOf(i)}),y=(e=>{const{classes:t,isMediaComponent:n,isImageComponent:o}=e,a={root:["root",n&&"media",o&&"img"]};return(0,d.Z)(a,w,t)})(x);return(0,o.jsx)(j,(0,s.Z)({className:(0,u.Z)(y.root,r),as:i,role:!h&&c?"img":void 0,ref:t,style:g,ownerState:x,src:h?c||p:void 0},v,{children:a}))})),R=n(11057),_=n(86886),k=n(15861),P=[{title:"10-Day Farm Weather Outlook",img:"th_clouds",description:"View and download the 10-Day Farm Weather Outlook and Advisory Recommendations PDF Bulletins here.",href:"/bulletins/weather"},{title:"Seasonal Outlook",img:"th_seasonal",description:"View and download Regional Seasonal Climate Outlook and Advisory Crop Recommendations PDF Bulletins here.",href:"/bulletins/seasonal-outlook"},{title:"Special Weather Forecast",img:"th_typhoon_03",description:"View the Special Weather Forecast PDF bulletins here.",href:"/bulletins/special-weather-forecast"}],A={container:{marginTop:function(e){return e.spacing(8)}},card:{height:"100%",boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px !important","& a":{color:function(e){return e.palette.primary.main},textDecoration:"none"},alignItems:"baseline"}};var L=function(e){var t=e.media;return(0,o.jsx)(r.Z,{sx:A.container,children:(0,o.jsx)(_.ZP,{container:!0,maxWidth:"lg",spacing:3,children:P.map((function(e,n){return(0,o.jsx)(_.ZP,{item:!0,xs:12,md:4,children:(0,o.jsxs)(i.Z,{sx:A.card,children:[(0,o.jsx)(M,{placeholder:"/images/thumbnails/".concat(e.img,".png"),component:"img",height:"225",srcSet:void 0!==t[n]?t[n]:"/images/thumbnails/".concat(e.img,".png"),alt:e.title}),(0,o.jsxs)(b.Z,{children:[(0,o.jsx)(k.Z,{gutterBottom:!0,variant:"h5",component:"div",children:e.title}),(0,o.jsx)(k.Z,{variant:"body2",color:"text.secondary",children:e.description})]}),(0,o.jsx)(y,{children:(0,o.jsx)(R.Z,{size:"small",children:(0,o.jsx)(a.default,{href:e.href,passHref:!0,children:(0,o.jsx)("a",{children:"View"})})})})]})},n)}))})})},N=n(43370),I=n(47426);var E=!0,U=function(e){var t=e.media,n=e.info;return(0,o.jsxs)("div",{id:"acap-bulletins",children:[(0,o.jsx)(N.Z,{title:"Agro-Climatic Advisory Portal - ".concat(I.Gt," (ACAP-").concat(I.Gt.toUpperCase(),") Bulletins"),ogDescription:n.description,ogImageURL:n.url,ogURL:n.path,canonicalURL:n.path}),(0,o.jsx)(k.Z,{variant:"h4",children:"Bulletins"}),(0,o.jsx)(k.Z,{variant:"label",children:"Welcome to the Bulletins PDF downloads page. You can preview and download Bulletins integrated with the Seasonal and 10-Day Weather Forecasts here."}),(0,o.jsx)(L,{media:t})]})}},41664:function(e,t,n){e.exports=n(48418)}},function(e){e.O(0,[7739,2289,9774,2888,179],(function(){return t=11413,e(e.s=t);var t}));var t=e.O();_N_E=t}]);