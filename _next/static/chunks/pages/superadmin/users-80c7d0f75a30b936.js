(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2254],{53052:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/superadmin/users",function(){return t(201)}])},201:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return le}});var a=t(34051),r=t.n(a),i=t(85893),o=t(45697),s=t.n(o),l=t(67294),u=t(47426),c=t(24633);function d(e,n,t,a,r,i,o){try{var s=e[i](o),l=s.value}catch(u){return void t(u)}s.done?n(l):Promise.resolve(l).then(a,r)}function f(){var e=(0,l.useState)(null),n=e[0],t=e[1],a=(0,l.useState)(!0),i=a[0],o=a[1],s=(0,l.useState)(""),u=s[0],f=s[1];return(0,l.useEffect)((function(){var e=function(){var e,n=(e=r().mark((function e(){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.Rf)();case 3:n=e.sent,o(!1),t(n.data),e.next=14;break;case 8:e.prev=8,e.t0=e.catch(0),a="",void 0!==e.t0.response&&(a=void 0!==e.t0.response.data?e.t0.response.data:""),""===a&&(a=e.t0.message),f(a);case 14:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){d(i,a,r,o,s,"next",e)}function s(e){d(i,a,r,o,s,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();e()}),[]),{users:n,loading:i,error:u}}function p(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var m=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,t,a;return n=e,t=[{key:"isValidEmail",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/^[a-z.A-Z.0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e)&&""!==e}},{key:"isValidName",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return/[a-zA-Z0-9. ]+$/.test(e.trim())&&""!==e}},{key:"isValidPassword",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.length>0}}],t&&p(n.prototype,t),a&&p(n,a),e}(),v=new m,h=v.isValidEmail.bind(v),b=v.isValidName.bind(v),g=v.isValidPassword.bind(v),x=t(95243),y=t(66383),w=t(87357),E=t(15861),T=t(19227),j=t(55688),C=t(42176),k=t(6132),S=t(50853),D=t(24343),I=t(50480),V=t(47312),A=t(18972),O=t(18360),_=t(72852),Z=t(61903),P={container:{width:"parent",display:"flex",flexDirection:"column","& .MuiTextField-root, button":{marginTop:function(e){return e.spacing(2)}}},formlabel:{fontSize:"12px",marginTop:function(e){return e.spacing(3)},marginBottom:"4px"},selectBox:{marginBottom:function(e){return e.spacing(2)}}};function U(e){var n=e.state,t=e.loadstatus,a=e.onTextChange,r=e.type,o=void 0===r?"create":r,s=e.inputValidation,l=e.handleInputClick;return(0,i.jsxs)(w.Z,{component:"form",noValidate:!0,autoComplete:"off",sx:P.container,children:["create"!==o&&(0,i.jsx)(Z.Z,{id:"uid",label:"Enter UID",variant:"standard",size:"small",disabled:!0,value:n.uid}),(0,i.jsx)(Z.Z,{id:"email",label:"Enter email",variant:"standard",size:"small",error:""!==s.email,helperText:""!==s.email?s.email:"",disabled:t.isLoading,value:n.email,onChange:a,onClick:l}),(0,i.jsx)(Z.Z,{id:"displayname",label:"Enter display name",variant:"standard",size:"small",error:""!==s.displayname,helperText:""!==s.displayname?s.displayname:"",disabled:t.isLoading,value:n.displayname,onChange:a,onClick:l}),(0,i.jsx)(Z.Z,{id:"password",label:"Enter password",type:"password",placeholder:"create"===n.mode?"Enter password":"Password will not be updated if left blank",variant:"standard",size:"small",error:""!==s.password&&"create"===o,helperText:""!==s.password&&"create"===o?s.password:"",disabled:t.isLoading,value:n.password,onChange:a,onClick:l}),(0,i.jsx)(V.Z,{sx:P.formlabel,id:"accountlevel-label",children:"Account Type"}),(0,i.jsxs)(O.Z,{labelId:"accountlevel-label",id:"account_level",size:"small",sx:P.selectBox,disabled:t.isLoading,value:n.account_level,onChange:a,children:[(0,i.jsx)(A.Z,{value:1,size:"small",children:"Superadmin"}),(0,i.jsx)(A.Z,{value:2,size:"small",children:"Admin"})]}),(0,i.jsx)(I.Z,{control:(0,i.jsx)(_.Z,{checked:n.disabled,disabled:t.isLoading,id:"disabled",name:"disabled",onChange:a}),label:"Account Disabled"}),(0,i.jsx)(I.Z,{control:(0,i.jsx)(_.Z,{checked:n.emailverified,disabled:t.isLoading,id:"emailverified",name:"emailverified",onChange:a}),label:"Email Verified"})]})}U.propTypes={state:s().object,loadstatus:s().object,onTextChange:s().func,type:s().string,inputValidation:s().object,handleInputClick:s().func};var L=U,B={container:{width:"parent"},infoRow:{width:"parent",display:"flex",justifyContent:"space-between",fontSize:"14px",alignItems:"center",padding:"12px",borderBottom:"1px solid #f0f0f0","& div:first-child":{color:"#a0a0a0"},"& div:last-child":{color:"#000"}}},N={email:"Email",displayName:"Display Name",acclevel:"Acc. Type",emailVerified:"Email Verified",disabled:"Acc. Disabled",last_signin:"Last Signin"};function R(e){var n=e.userinfo;return(0,i.jsx)(w.Z,{children:Object.keys(N).map((function(e){return(0,i.jsxs)(w.Z,{sx:B.infoRow,children:[(0,i.jsx)("div",{children:N[e]}),(0,i.jsx)("div",{children:n[e].toString()})]},e)}))})}R.propTypes={userinfo:s().object};var z=R,M={gridContainer:{marginTop:"24px",minHeight:500}},H={datagrid:{background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"8px","& .MuiDataGrid-main":{borderRadius:2},"& .MuiDataGrid-virtualScrollerRenderZone":{"& .MuiDataGrid-row":{"&:nth-of-type(2n)":{backgroundColor:"rgba(235, 235, 235, .7)"}}},"& .MuiDataGrid-columnHeader:focus-within":{outline:"none !important"},"& .MuiDataGrid-columnHeaders":{color:function(e){return e.palette.primary.dark},fontSize:16}}};function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function F(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){W(e,n,t[n])}))}return e}function G(e){return(0,i.jsxs)(C.D,F({},e,{children:[(0,i.jsx)(k.S,{}),(0,i.jsx)(S.M,{})]}))}var $,X={CREATE:0,VIEW:1,EDIT:2,DELETE:3},q=(W($={},X.CREATE,{windowTitle:"Create a New User",buttonText:"Create User",yesBtnText:"Save"}),W($,X.VIEW,{windowTitle:"User Information",buttonText:"View",yesBtnText:"Edit"}),W($,X.EDIT,{windowTitle:"Update User Information",buttonText:"Edit",yesBtnText:"Update"}),W($,X.DELETE,{windowTitle:"User Information",buttonText:"Delete",yesBtnText:"Delete"}),$);function J(e){var n=e.state,t=e.loadstatus,a=e.loadingusers,r=e.rows,o=e.columns,s=e.onTextChange,u=e.onEditStart,c=e.handleCreateUser,d=e.handleDeleteUser,f=e.handleUpdateUser,p=e.handleInputClick,m=e.inputValidation,v=e.usersLoadingError,h=(0,l.useState)({}),b=h[0],g=h[1],x=(0,l.useState)(!1),y=x[0],C=x[1],k=(0,l.useState)(X.CREATE),S=k[0],I=k[1];return(0,i.jsxs)("div",{children:[(0,i.jsx)(E.Z,{variant:"h5",children:"Users Management"}),(0,i.jsx)("p",{children:"Manage admin user accounts"}),(0,i.jsx)("br",{}),(0,i.jsx)(T.Z,{isOpen:t.dialogOpen&&[X.CREATE,X.DELETE].includes(S)||y&&[X.VIEW,X.EDIT].includes(S),maxWidth:"xs",openButtonText:"Create User",title:q[S].windowTitle,confirmBtnText:q[S].yesBtnText,extraBtnText:S===X.VIEW?q[X.DELETE].buttonText:"",loading:t.isLoading,colorTheme:"secondary",modalConfirmHandlerCB:function(){switch(S){case X.CREATE:c();break;case X.VIEW:I(X.EDIT);break;case X.EDIT:f(),I(X.CREATE)}},modalCancelHandlerCB:function(){p(),C(!1)},modalOpenHandlerCB:function(){I(X.CREATE),C(!0)},modalExtraHandlerCB:function(){I(X.DELETE),d(b.uid,b.email)},children:S===X.CREATE||S===X.EDIT?(0,i.jsx)(L,{state:n,loadstatus:t,onTextChange:s,inputValidation:m,handleInputClick:p,type:"create"}):(0,i.jsx)(z,{userinfo:b})}),(0,i.jsx)(w.Z,{sx:M.gridContainer,style:{height:r.length<=4?"500px":"unset"},children:(0,i.jsx)(D._,{rows:r,columns:o,sx:H.datagrid,rowHeight:48,autoHeight:r.length>=5,disableDensitySelector:!0,rowsPerPageOptions:[15,30,100],error:""!==v?v:null,components:{Toolbar:G},loading:a,initialState:{columns:{columnVisibilityModel:{rowId:!1}},pagination:{pageSize:12}},onRowClick:function(e){var n=F({},e.row);n.account_level="Admin"===n.acclevel?2:1,n.displayname=n.displayName,n.emailverified=n.emailVerified,u(n.uid,"edit"),g(n),I(X.VIEW),C(!0)}})}),(""!==t.error||""!==t.message)&&(0,i.jsx)(j.Z,{openSnackbar:!0,message:""!==t.error?t.error:t.message,severity:""!==t.error?"error":"success"})]})}J.propTypes={state:s().object,loadstatus:s().object,onTextChange:s().func,onEditStart:s().func,handleCreateUser:s().func,handleDeleteUser:s().func,handleUpdateUser:s().func,handleInputClick:s().func,inputValidation:s().object,usersLoadingError:s().string};var K=J;function Q(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function Y(e,n,t,a,r,i,o){try{var s=e[i](o),l=s.value}catch(u){return void t(u)}s.done?n(l):Promise.resolve(l).then(a,r)}function ee(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){Y(i,a,r,o,s,"next",e)}function s(e){Y(i,a,r,o,s,"throw",e)}o(void 0)}))}}function ne(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){ne(e,n,t[n])}))}return e}function ae(e){return function(e){if(Array.isArray(e))return Q(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return Q(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Q(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var re={email:"",displayname:"",password:"",account_level:2,disabled:!1,emailverified:!0,mode:"create"},ie={isLoading:!1,dialogOpen:!1,error:"",message:""},oe={email:"",displayname:"",password:"",account_level:"",disabled:"",emailverified:""};function se(e){var n=(0,l.useState)(re),t=n[0],a=n[1],o=(0,l.useState)(ie),s=o[0],d=o[1],p=(0,l.useState)(oe),m=p[0],v=p[1],x=(0,l.useState)([]),w=x[0],E=x[1],T=f(),j=T.users,C=T.loading,k=T.error,S=(0,l.useState)([]),D=S[0],I=S[1],V=(0,l.useState)([]),A=V[0],O=V[1];(0,l.useEffect)((function(){null!==j&&E((function(e){return j.users}))}),[j]),(0,l.useEffect)((function(){if(w.length>0){var e={email:{label:"Email",width:280},displayName:{label:"Display Name",width:200},acclevel:{label:"Acc. Type",width:120},emailVerified:{label:"Email Verified",width:125},disabled:{label:"Acc. Disabled",width:120},last_signin:{label:"Last Signin",width:250}},n=["email","displayName","acclevel","emailVerified","disabled","last_signin"].reduce((function(n,t,a){return n.push({field:t,headerName:e[t].label,width:e[t].width,align:a>1?"center":"left",headerAlign:a>1?"center":"left",editable:!1,sortable:!1,disableColumnMenu:!0,renderCell:function(e){return(0,i.jsx)("div",{style:{fontSize:"last_signin"===t?"13px":"14px"},children:e.value.toString()})}}),n}),[]),t=w.filter((function(e){return void 0!==e.customClaims})).map((function(e,n){return{id:n,uid:e.uid,email:e.email,displayName:e.displayName,acclevel:1===e.customClaims.account_level?"Superadmin":"Admin",emailVerified:e.emailVerified,disabled:e.disabled,date_created:e.metadata.creationTime,last_signin:e.metadata.lastSignInTime?e.metadata.lastSignInTime:"-"}}));I(t),O(n)}}),[w]);var _=function(e){var n=Object.keys(re).reduce((function(n,t){return n[t]=e[t],n}),{});if(null!==n)return n.uid=e.uid,n.account_level=e.customClaims.account_level,n.displayname=e.displayName,n.emailverified=e.emailVerified,n.password="",n},Z=function(){d(te({},ie,{dialogOpen:!0,isLoading:!0}))},P=function(e){var n=e.message,t=void 0===n?"":n,r=e.error,i=void 0===r?"":r;d((function(e){return te({},ie,{message:t,error:i})})),a((function(e){return te({},re)}))},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"create",n=0,a={};return h(t.email)||(a.email="Please check your email input.",n+=1),b(t.displayname)||(a.displayname="Please check your display name.",n+=1),"create"===e&&(g(t.password)||(a.password="Please check your password input.",n+=1)),v(te({},m,a)),0===n},L=function(){var e=ee(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U("create")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,Z(),e.next=6,(0,c.r4)(t);case 6:return e.next=8,(0,c.Rf)();case 8:n=e.sent.data,E(n.users),P({message:"User successfully ".concat(t.email," created!")}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),P({error:e.t0.response?e.t0.response.data:e.t0.message});case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=ee(r().mark((function e(n,t){var a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(),e.next=4,(0,c.h8)(n);case 4:return e.next=6,(0,c.Rf)();case 6:a=e.sent.data,E(a.users),P({message:"Successfully deleted user ".concat(t,"!")}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),P({error:e.t0.response?e.t0.response.data:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n,t){return e.apply(this,arguments)}}(),N=function(){var e=ee(r().mark((function e(){var n,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(U("edit")){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,Z(),e.next=6,(0,c.Nq)(t);case 6:return e.next=8,(0,c.PR)({uid:t.uid,email:t.email});case 8:n=e.sent,a=w.findIndex((function(e){return e.uid===n.uid})),a>=0&&((i=ae(w))[a]=n,E(i)),P({message:"Successfully updated ".concat(t.email,"'s details!")}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),P({error:e.t0.response?e.t0.response.data:e.t0.message});case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(){return e.apply(this,arguments)}}();return(0,i.jsx)(y.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:u.DW.SUPERADMIN,children:(0,i.jsx)(K,{state:t,loadstatus:s,loadingusers:C,rows:D,columns:A,onTextChange:function(e){var n=e.target,r=n.id,i=n.value,o=n.checked,l=void 0!==r?r:"account_level";["emailverified","disabled"].includes(l)&&(i=o),a(te({},t,ne({},l,i))),(""!==s.error||""!==s.message||Object.keys(m).filter((function(e){return""!==m[e]})).length>0)&&(d(ie),v(oe))},onEditStart:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"create",t=w.find((function(n){return n.uid===e})),r=_(t);r=te({},r,{mode:n}),a(r)},handleCreateUser:L,handleDeleteUser:B,handleUpdateUser:N,handleInputClick:function(e){if(e){var n=e.target.id;a(te({},t,ne({},n,"")))}else a(re),d(ie);v(oe)},inputValidation:m,usersLoadingError:k})})}se.propTypes={loading:s().bool,user:s().object,onBtnLogoutClick:s().func,accLevel:s().number};var le=(0,x.Z)(se)}},function(e){e.O(0,[5124,7739,972,1903,3028,3203,542,6295,1433,9821,4343,5441,1050,4730,9774,2888,179],(function(){return n=53052,e(e.s=n);var n}));var n=e.O();_N_E=n}]);