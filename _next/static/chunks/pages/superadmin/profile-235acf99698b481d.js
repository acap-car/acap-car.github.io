(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[589],{19536:function(e,n,t){"use strict";var r=t(64836);n.Z=void 0;var a=r(t(64938)),o=t(85893),i=(0,a.default)([(0,o.jsx)("path",{d:"M21 19.1H3V5h18v14.1zM21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},"0"),(0,o.jsx)("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41z"},"1")],"CancelPresentation");n.Z=i},34484:function(e,n,t){"use strict";t(67294);var r=t(88169),a=t(85893);n.Z=(0,r.Z)((0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},36510:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/profile",function(){return t(19155)}])},49576:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(85893),a=t(87357),o=t(11057),i=t(66242),s=t(44267),u=t(15861),c=t(61903),l=t(19227),d=t(55688),p={profileContainer:{display:"flex",flexDirection:"column",width:"100%"},profileCard:{padding:"22px",display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"15px",maxWidth:"600px",margin:"auto",borderColor:"#E2E8F0"},textfield:{marginTop:function(e){return e.spacing(3)}},button:{marginTop:function(e){return e.spacing(2)},width:"200px"}};var f=function(e){var n=e.user,t=e.password,f=e.message,v=e.handleUpdateUser,x=e.handleUpdatePassword,g=e.handleSaveSuccess,h=e.togglePrompt,m={uid:"UID",accountlevel:"Account Level",email:"Email",name:"Display Name",password:"Enter a new password"};return(0,r.jsxs)(i.Z,{sx:p.profileCard,children:[(0,r.jsx)(l.Z,{isOpen:f.isOpen,maxWidth:"xs",openButtonText:null,title:f.title,contentText:f.msg,loading:f.loading,cancelBtnText:null,modalCancelHandlerCB:function(){f.savesuccess?g():h()},modalConfirmHandlerCB:function(){f.savesuccess?g():x()}}),(0,r.jsx)(d.Z,{openSnackbar:""!==f.error,message:f.error,severity:"warning"}),(0,r.jsxs)(s.Z,{sx:p.profileContainer,children:[(0,r.jsx)(u.Z,{variant:"h5",children:"Profile Information"}),(0,r.jsx)("br",{}),void 0!==n&&null!==n&&Object.keys(m).map((function(e,a){var o=n[e];return["accountlevel"].includes(e)&&(o=2===parseInt(n[e])?"Admin":"Superadmin"),"password"===e&&(o=t),(0,r.jsx)(c.Z,{sx:p.textfield,size:"small",disabled:["uid","accountlevel"].includes(e),id:e,label:m[e],variant:"outlined",value:o,onChange:v},"".concat(e,"-").concat(a))})),(0,r.jsx)(a.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,r.jsx)(o.Z,{disableElevation:!0,variant:"contained",sx:p.button,onClick:h,children:"Update Password"})})]}),!1]})}},19155:function(e,n,t){"use strict";t.r(n);var r=t(34051),a=t.n(r),o=t(85893),i=t(67294),s=t(47426),u=t(95243),c=t(66383),l=t(49576),d=t(24633);function p(e,n,t,r,a,o,i){try{var s=e[o](i),u=s.value}catch(c){return void t(c)}s.done?n(u):Promise.resolve(u).then(r,a)}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}var x=v({},t(27392).BF,{title:"Save changes",msg:"Do you want to save the new password?"});n.default=(0,u.Z)((function(e){var n=(0,i.useState)(""),t=n[0],r=n[1],u=(0,i.useState)(x),f=u[0],g=u[1],h=(0,i.useRef)(!1);(0,i.useState)((function(){return h.current=!0,function(){h.current=!1}}),[]);var m=function(){var n,r=(n=a().mark((function n(){var r,o;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==t){n.next=3;break}return g(v({},x,{error:"Please check your input."})),n.abrupt("return");case 3:return n.prev=3,g(v({},f,{loading:!0,msg:"Saving changes..."})),n.next=7,(0,d.Nq)({password:t,uid:e.user.uid},e.user.accountlevel);case 7:h.current&&g(v({},f,{loading:!1,savesuccess:!0,msg:"Password updated. You will be signed-out. Please sign-in using your new password."})),n.next=15;break;case 10:n.prev=10,n.t0=n.catch(3),o=(null===n.t0||void 0===n.t0||null===(r=n.t0.response)||void 0===r?void 0:r.data)||n.t0.message,h.current&&g((function(e){return v({},e,{isOpen:!1,loading:!1,error:o})}));case 15:case"end":return n.stop()}}),n,null,[[3,10]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function i(e){p(o,r,a,i,s,"next",e)}function s(e){p(o,r,a,i,s,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,o.jsx)(c.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:s.DW.SUPERADMIN,children:(0,o.jsx)(l.Z,{user:e.user,password:t,message:f,handleUpdateUser:function(e){var n=e.target.value;r(n)},handleUpdatePassword:m,handleSaveSuccess:e.onBtnLogoutClick,togglePrompt:function(){return g((function(e){return v({},x,{isOpen:!e.isOpen})}))}})})}))}},function(e){e.O(0,[5124,7739,972,1903,3028,3203,542,1433,2289,1050,4730,9774,2888,179],(function(){return n=36510,e(e.s=n);var n}));var n=e.O();_N_E=n}]);