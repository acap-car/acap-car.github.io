(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405,1057],{11057:function(e,t,o){"use strict";o.d(t,{Z:function(){return z}});var n=o(63366),a=o(87462),r=o(67294),i=o(86010),l=o(47925),s=o(27192),c=o(41796),d=o(11496),u=o(33616),p=o(47739),m=o(98216),h=o(28979);function v(e){return(0,h.Z)("MuiButton",e)}var x=(0,o(76087).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=o(98363),g=o(85893);const b=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),S=(0,d.ZP)(p.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,m.Z)(o.color)}`],t[`size${(0,m.Z)(o.size)}`],t[`${o.variant}Size${(0,m.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${e.palette[t.color].main}`,backgroundColor:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.palette[t.color].dark,"@media (hover: none)":{backgroundColor:e.palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[8]}),[`&.${x.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:e.shadows[6]}),[`&.${x.disabled}`]:(0,a.Z)({color:e.palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${e.palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${e.palette.action.disabled}`},"contained"===t.variant&&{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid "+("light"===e.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].main,border:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:e.palette[t.color].contrastText,backgroundColor:e.palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${x.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${x.disabled}`]:{boxShadow:"none"}})),w=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e)))),Z=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,m.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))));var z=r.forwardRef((function(e,t){const o=r.useContext(f.Z),c=(0,l.Z)(o,e),d=(0,u.Z)({props:c,name:"MuiButton"}),{children:p,color:h="primary",component:x="button",className:y,disabled:z=!1,disableElevation:C=!1,disableFocusRipple:j=!1,endIcon:I,focusVisibleClassName:R,fullWidth:k=!1,size:P="medium",startIcon:$,type:E,variant:_="text"}=d,L=(0,n.Z)(d,b),M=(0,a.Z)({},d,{color:h,component:x,disabled:z,disableElevation:C,disableFocusRipple:j,fullWidth:k,size:P,type:E,variant:_}),T=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:r,variant:i,classes:l}=e,c={root:["root",i,`${i}${(0,m.Z)(t)}`,`size${(0,m.Z)(r)}`,`${i}Size${(0,m.Z)(r)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,m.Z)(r)}`],endIcon:["endIcon",`iconSize${(0,m.Z)(r)}`]},d=(0,s.Z)(c,v,l);return(0,a.Z)({},l,d)})(M),A=$&&(0,g.jsx)(w,{className:T.startIcon,ownerState:M,children:$}),N=I&&(0,g.jsx)(Z,{className:T.endIcon,ownerState:M,children:I});return(0,g.jsxs)(S,(0,a.Z)({ownerState:M,className:(0,i.Z)(y,o.className),component:x,disabled:z,focusRipple:!j,focusVisibleClassName:(0,i.Z)(T.focusVisible,R),ref:t,type:E},L,{classes:T,children:[A,p,N]}))}))},98363:function(e,t,o){"use strict";const n=o(67294).createContext({});t.Z=n},58951:function(e,t,o){"use strict";o.d(t,{Z:function(){return v}});var n=o(63366),a=o(87462),r=o(67294),i=o(27192),l=o(11496),s=o(33616),c=o(15861),d=o(28979);function u(e){return(0,d.Z)("MuiDialogContentText",e)}(0,o(76087).Z)("MuiDialogContentText",["root"]);var p=o(85893);const m=["children"],h=(0,l.ZP)(c.Z,{shouldForwardProp:e=>(0,l.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,t)=>t.root})({});var v=r.forwardRef((function(e,t){const o=(0,s.Z)({props:e,name:"MuiDialogContentText"}),r=(0,n.Z)(o,m),l=(e=>{const{classes:t}=e,o=(0,i.Z)({root:["root"]},u,t);return(0,a.Z)({},t,o)})(r);return(0,p.jsx)(h,(0,a.Z)({component:"p",variant:"body1",color:"text.secondary",ref:t,ownerState:r},o,{classes:l}))}))},78581:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(87059)}])},43370:function(e,t,o){"use strict";var n=o(85893),a=o(9008),r=o(47426);t.Z=function(e){var t=e.title,o=e.ogDescription,i=e.ogImageURL,l=e.ogImgAlt,s=void 0===l?"Picture":l,c=e.ogSiteName,d=void 0===c?"ACAP-".concat(r.Gt.toUpperCase()):c,u=e.ogURL,p=e.canonicalURL,m=void 0===p?"http://localhost":p;return(0,n.jsxs)(a.default,{children:[(0,n.jsx)("meta",{name:"description",content:o}),(0,n.jsx)("meta",{rel:"canonical",href:m}),(0,n.jsx)("meta",{name:"og:description",content:o}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:site_name",content:d}),(0,n.jsx)("meta",{property:"og:image",content:i}),(0,n.jsx)("meta",{property:"og:image:width",content:"600"}),(0,n.jsx)("meta",{property:"og:image:height",content:"315"}),(0,n.jsx)("meta",{property:"og:image:alt",content:s}),(0,n.jsx)("meta",{property:"og:url",content:u}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:t}),(0,n.jsx)("meta",{name:"twitter:image",content:i}),(0,n.jsx)("title",{children:t})]})}},87059:function(e,t,o){"use strict";o.r(t),o.d(t,{__N_SSG:function(){return S},default:function(){return w}});var n=o(85893),a=o(9473),r=o(5152),i=o(67294),l=o(58951),s=o(43370),c=o(47426),d=o(34051),u=o.n(d),p=o(11057),m=o(87357),h=o(15861);function v(e,t,o,n,a,r,i){try{var l=e[r](i),s=l.value}catch(c){return void o(c)}l.done?t(s):Promise.resolve(s).then(n,a)}var x=function(){var e=(0,i.useState)(null),t=e[0],o=e[1],a=(0,i.useState)(!1),r=a[0],l=a[1];(0,i.useEffect)((function(){var e=function(e){e.preventDefault(),o(e),l(!0)};return window.addEventListener("beforeinstallprompt",e),function(){return window.removeEventListener("beforeinstallprompt",e)}}),[]);var s=function(){var e,n=(e=u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return t.prompt(),e.next=5,t.userChoice;case 5:o(null),l(!1);case 7:case"end":return e.stop()}}),e)})),function(){var t=this,o=arguments;return new Promise((function(n,a){var r=e.apply(t,o);function i(e){v(r,n,a,i,l,"next",e)}function l(e){v(r,n,a,i,l,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return r?(0,n.jsxs)(m.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",my:4},children:[(0,n.jsx)(h.Z,{variant:"body1",color:"error",children:"Install this app on your device for easier access."}),(0,n.jsx)(h.Z,{variant:"h2",color:"error",sx:{mb:1},children:" \u2193 "}),(0,n.jsx)(p.Z,{variant:"contained",color:"info",onClick:s,children:"Install App"})]}):null},f=(0,r.default)((function(){return Promise.all([o.e(5124),o.e(972),o.e(1903),o.e(6295),o.e(1524),o.e(5883)]).then(o.bind(o,35883))}),{loadableGenerated:{webpack:function(){return[35883]}},ssr:!1}),g=(0,r.default)((function(){return Promise.all([o.e(9269),o.e(5124),o.e(972),o.e(1903),o.e(6295),o.e(9257)]).then(o.bind(o,69257))}),{loadableGenerated:{webpack:function(){return[69257]}},ssr:!1}),b=(0,r.default)((function(){return Promise.all([o.e(5124),o.e(3203),o.e(8737)]).then(o.bind(o,28737))}),{loadableGenerated:{webpack:function(){return[28737]}},ssr:!1});function y(e){var t=e.villages,o=e.provincesMunicipalities,r=e.media,d={villages:t,provincesMunicipalities:o},u=(0,i.useState)(!1),p=u[0],m=u[1],h=(0,a.v9)((function(e){return e.dashboard.showWelcome}));return(0,i.useEffect)((function(){h&&m(h)}),[h]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{title:"Agro-Climatic Advisory Portal - ".concat(c.Gt," (ACAP-").concat(c.Gt.toUpperCase(),")"),ogDescription:r.description,ogImageURL:r.url,ogURL:r.path,canonicalURL:r.path}),(0,n.jsx)(f,{}),(0,n.jsx)(g,{data:d}),(0,n.jsxs)(b,{title:"Welcome to the Agro-Climatic Advisory Portal-".concat(c.Gt," (ACAP-").concat(c.Gt.toUpperCase(),")!"),isOpen:p,children:[(0,n.jsxs)(l.Z,{variant:"body1",children:["This website serves as a centralized hub for the development of Climate Information Services (CIS) in the ",c.Gt," Region. It contains relevant weather and climate information which can be used in developing tailored advisories and crop recommendations."]}),(0,n.jsxs)(l.Z,{variant:"body1",sx:{marginTop:"16px"},children:["The ACAP-",c.Gt," is a work-in-progress and we welcome any feedbacks and suggestions. For any concerns regarding this website, you may send an e-mail at"," ",(0,n.jsx)("span",{style:{color:"#438364"},children:"spcs@car.da.gov.ph"}),"."]}),(0,n.jsx)(x,{})]})]})}y.customLayout=!0;var S=!0,w=y}},function(e){e.O(0,[7739,9774,2888,179],(function(){return t=78581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);