(this.webpackJsonpaemigo=this.webpackJsonpaemigo||[]).push([[0],{124:function(e,t,a){},152:function(e,t,a){},153:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(44),i=a.n(s),r=(a(152),a(153),a(46)),l=a(20),j=a(14),o=a(51),b=a(326),u=a(333),d=a(315),x=a(317),O=a(332),h=a(319),m=a(327),p=a(330),g=a(331),v=a(325),f=a(128),y=a.n(f),S=a(329),w=a(129),C=a(324),T=a(127),A=a.n(T),I=a(321),N=a(318),k=a(322),D=a(334),P=a(73),W=a.n(P),F=a(125),E=a(54),H=a(1);function B(e){return Object(H.jsxs)(S.a,Object(o.a)(Object(o.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(H.jsx)(r.b,{style:{cursor:"pointer",color:"rgba(0, 0, 0, 0.6)"},to:"/",children:"aemigo"})," ",(new Date).getFullYear(),"."]}))}var R=c.forwardRef((function(e,t){return Object(H.jsx)(N.a,Object(o.a)({elevation:6,ref:t,variant:"filled"},e))})),Y=Object(w.a)();function q(){var e=c.useState(""),t=Object(j.a)(e,2),a=(t[0],t[1]),n=c.useState(""),s=Object(j.a)(n,2),i=s[0],r=s[1],o=c.useState(""),f=Object(j.a)(o,2),w=f[0],T=f[1],N=c.useState("Atlantis"),P=Object(j.a)(N,2),q=P[0],z=P[1],J=c.useState(""),L=Object(j.a)(J,2),M=L[0],V=L[1],G=c.useState(""),K=Object(j.a)(G,2),Q=K[0],U=K[1],X=c.useState(""),Z=Object(j.a)(X,2),$=Z[0],_=Z[1],ee=c.useState(!1),te=Object(j.a)(ee,2),ae=te[0],ce=te[1],ne=c.useState(!1),se=Object(j.a)(ne,2),ie=se[0],re=se[1],le=c.useState(""),je=Object(j.a)(le,2),oe=je[0],be=je[1],ue=Object(l.f)(),de=function(e){z(e.target.value)},xe=function(e){var t=e.target.value;r(t),A.a.isEmail(t)?t.includes("@wipro.com")?V(""):V("Only Wipro email IDs are allowed!"):V("Please enter a valid Wipro email ID!")},Oe=function(e){T(e.target.value),e.target.value.length>0?_(""):_("Please enter your input!")},he=function(e){e.preventDefault(),""===i?V("Please enter a valid Wipro email ID!"):""===w?_("Please enter your input!"):0===M.length&&0===Q.length&&0===$.length&&function(){re(!0);var e={email:i,team:q,input:w};console.log(e),W.a.post("/participate",e).then((function(e){e.data.exists?(re(!1),V("You have already participated!")):(V(""),U(""),_(""),r(""),a(""),T(""),re(!1),be("Response is successfully submitted. Thanks for your participation!"),ce(!0),setTimeout((function(){ue.push("/results")}),3e3))}))}()},me=function(e,t){"clickaway"!==t&&ce(!1)};return Object(H.jsx)(F.Detector,{render:function(e){var t=e.online;return Object(H.jsx)(H.Fragment,{children:Object(H.jsx)(C.a,{theme:Y,children:Object(H.jsxs)(v.a,{container:!0,component:"main",sx:{height:"100vh"},children:[Object(H.jsx)(d.a,{}),Object(H.jsx)(v.a,{item:!0,xs:!1,sm:4,md:7}),Object(H.jsx)(E.a,{type:"thick",bg:!0}),Object(H.jsx)(v.a,{item:!0,xs:12,sm:8,md:5,component:p.a,elevation:6,square:!0,mt:10,children:Object(H.jsxs)(g.a,{sx:{my:8,mx:4,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(H.jsx)(b.a,{sx:{m:4,bgcolor:"secondary.main"},children:Object(H.jsx)(y.a,{})}),Object(H.jsx)(S.a,{component:"h1",variant:"h5",children:"Participate and unveil your team's logo!"}),Object(H.jsxs)(g.a,{component:"form",noValidate:!0,onSubmit:he,sx:{mt:4},children:[Object(H.jsx)(x.a,{error:M.length>0,margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:i,autoComplete:"email",autoFocus:!0,helperText:M,onChange:xe}),Object(H.jsxs)(m.a,{row:!0,"aria-label":"team",name:"team",defaultValue:"Atlantis",onChange:de,children:[Object(H.jsx)(O.a,{value:"Atlantis",control:Object(H.jsx)(h.a,{}),label:"Atlantis"}),Object(H.jsx)(O.a,{value:"Olympia",control:Object(H.jsx)(h.a,{}),label:"Olympia"}),Object(H.jsx)(O.a,{value:"Titans",control:Object(H.jsx)(h.a,{}),label:"Titans"}),Object(H.jsx)(O.a,{value:"Wakanda",control:Object(H.jsx)(h.a,{}),label:"Wakanda"})]}),Object(H.jsx)(x.a,{error:$.length>0,multiline:!0,rows:3,margin:"normal",required:!0,fullWidth:!0,id:"input",value:w,label:"Your Thoughts",name:"input",autoComplete:"input",helperText:$,onChange:Oe}),Object(H.jsx)("p",{}),Object(H.jsx)(u.a,{disabled:!t,type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Participate!"}),Object(H.jsx)(I.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!t||ae,autoHideDuration:6e3,onClose:me,children:Object(H.jsx)(R,{onClose:me,severity:t&&!oe.includes("CAPTCHA")?"success":"error",sx:{width:"100%"},children:t?oe:"You are offline! Please go online to participate."})}),Object(H.jsx)(k.a,{sx:{color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:ie,children:Object(H.jsx)(D.a,{color:"inherit"})}),Object(H.jsx)(B,{sx:{mt:4}})]})]})})]})})})}})}var z=a(5),J=a(328),L=(a(264),a.p+"static/media/loader-meta.6a77a9a6.gif"),M=Object(z.a)(p.a)((function(e){var t=e.theme;return Object(o.a)(Object(o.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary,height:"45vh",boxShadow:"1.5px 1.5px 5px grey",borderRadius:"10px"})}));function V(){var e=c.useState(L),t=Object(j.a)(e,2),a=t[0],n=t[1],s=c.useState(L),i=Object(j.a)(s,2),r=i[0],l=i[1],o=c.useState(L),u=Object(j.a)(o,2),d=u[0],x=u[1],O=c.useState(L),h=Object(j.a)(O,2),m=h[0],p=h[1];function f(){W.a.post("/results","").then((function(e){var t=e.data,a=t.A,c=t.B,s=t.C,i=t.D;n(a),l(c),x(s),p(i)}))}return c.useEffect((function(){f(),setInterval((function(){f()}),5e3)}),[]),Object(H.jsxs)(g.a,{mt:5,sx:{width:"98vw",height:"95vh",padding:"1%"},children:[Object(H.jsx)(E.a,{type:"lines",bg:!0}),Object(H.jsxs)(v.a,{container:!0,rowSpacing:2,columnSpacing:{xs:1,sm:2,md:2},children:[Object(H.jsx)(v.a,{item:!0,xs:12,sm:12,md:6,children:Object(H.jsxs)(M,{sx:{backgroundColor:"#8f1414"},children:[Object(H.jsx)("p",{}),Object(H.jsx)(J.a,{avatar:Object(H.jsx)(b.a,{children:"A"}),label:"Team Atlantis",color:"error"}),Object(H.jsx)("p",{}),Object(H.jsx)("img",{alt:"teamA",className:"resultImg",src:a})]})}),Object(H.jsx)(v.a,{item:!0,xs:12,sm:12,md:6,children:Object(H.jsxs)(M,{sx:{backgroundColor:"#004e00"},children:[Object(H.jsx)("p",{}),Object(H.jsx)(J.a,{avatar:Object(H.jsx)(b.a,{children:"O"}),label:"Team Olympia",color:"success"}),Object(H.jsx)("p",{}),Object(H.jsx)("img",{alt:"teamB",className:"resultImg",src:r})]})}),Object(H.jsx)(v.a,{item:!0,xs:12,sm:12,md:6,children:Object(H.jsxs)(M,{sx:{backgroundColor:"#0000a3"},children:[Object(H.jsx)("p",{}),Object(H.jsx)(J.a,{avatar:Object(H.jsx)(b.a,{children:"T"}),label:"Team Titans",color:"primary"}),Object(H.jsx)("p",{}),Object(H.jsx)("img",{alt:"teamC",className:"resultImg",src:d})]})}),Object(H.jsx)(v.a,{item:!0,xs:12,sm:12,md:6,children:Object(H.jsxs)(M,{sx:{backgroundColor:"#b77907"},children:[Object(H.jsx)("p",{}),Object(H.jsx)(J.a,{avatar:Object(H.jsx)(b.a,{children:"W"}),label:"Team Wakanda",color:"warning"}),Object(H.jsx)("p",{}),Object(H.jsx)("img",{alt:"teamD",className:"resultImg",src:m})]})})]})]})}a(124);function G(){return Object(H.jsxs)("div",{className:"home",children:[Object(H.jsx)(E.a,{type:"circle",bg:!0}),Object(H.jsx)("header",{children:Object(H.jsx)("div",{className:"textWhite row banner",children:Object(H.jsxs)("div",{className:"banner-text",children:[Object(H.jsx)("h1",{className:"responsive-headline",children:"A E M I G O"}),Object(H.jsx)("h3",{children:"Aemigo"})]})})})]})}function K(){var e=Object(l.g)(),t=c.useState(""),a=Object(j.a)(t,2),n=a[0],s=a[1];return c.useEffect((function(){var t=e.pathname.includes("participate")?"participate":e.pathname.includes("results")?"results":"home";s(t)}),[e]),Object(H.jsx)(H.Fragment,{children:Object(H.jsxs)("nav",{id:"nav-wrap",children:[Object(H.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(H.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(H.jsxs)("ul",{id:"nav",className:"nav",children:[Object(H.jsx)("li",{className:"home"===n?"current":"",children:Object(H.jsx)(r.b,{to:"/",children:Object(H.jsx)("strong",{children:"Home"})})}),Object(H.jsx)("li",{className:"participate"===n?"current":"",children:Object(H.jsx)(r.b,{to:"/participate",children:Object(H.jsx)("strong",{children:"Participate"})})}),Object(H.jsx)("li",{className:"results"===n?"current":"",children:Object(H.jsx)(r.b,{to:"/results",children:Object(H.jsx)("strong",{children:"Results"})})})]})]})})}var Q=function(){return Object(H.jsx)("div",{children:Object(H.jsxs)(r.a,{children:[Object(H.jsx)(K,{}),Object(H.jsxs)(l.c,{children:[Object(H.jsx)(l.a,{path:"/participate",children:Object(H.jsx)(q,{})}),Object(H.jsx)(l.a,{path:"/results",children:Object(H.jsx)(V,{})}),Object(H.jsx)(l.a,{path:"/",children:Object(H.jsx)(G,{})})]})]})})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,335)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(H.jsx)(n.a.StrictMode,{children:Object(H.jsx)(Q,{})}),document.getElementById("root")),U()}},[[265,1,2]]]);