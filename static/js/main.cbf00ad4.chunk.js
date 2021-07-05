(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var r,o,i,a,c,s,l,d,u,b,f,j,m,p,x,h,g,O=t(1),k=t.n(O),w=t(12),v=t.n(w),y=t(4),T=t(3),D=t(2),C=D.default.form(r||(r=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n\n  @media (max-width: ","px) {\n    margin-top: 10px;\n  }\n"])),(function(n){return n.theme.breakpoint.mobile})),z=D.default.button(o||(o=Object(T.a)(["\n  padding: 11px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  text-align: center;\n  transition: 0.3s;\n  background-color: #2e747c;\n  color: ",";\n  flex-grow: 0;\n  margin-left: 20px;\n  transition: 1s;\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    margin: 10px 0;\n  }\n  &:hover {\n    background-color: ",";\n    transform: scale(1.1);\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoint.mobile}),(function(n){return n.theme.colors.darkerTeal})),F=D.default.input(i||(i=Object(T.a)(["\n  border-radius: 3px;\n  flex-grow: 1;\n  padding: 10px;\n  border: 1px solid #dfdedf;\n  border-radius: 2px;\n  margin-left: 15px;\n\n  @media (max-width: ","px) {\n    flex-basis: 100%;\n    margin: 0px;\n  }\n"])),(function(n){return n.theme.breakpoint.mobile})),L=t(0),S=function(n){var e=n.addNewTask,t=Object(O.useState)(""),r=Object(y.a)(t,2),o=r[0],i=r[1],a=Object(O.useRef)(null);return Object(L.jsxs)(C,{onSubmit:function(n){n.preventDefault(),""!==o.trim()&&(e(o.trim()),i(""),a.current.focus())},children:[Object(L.jsx)(F,{value:o,className:"form__input js-new__task",placeholder:"Co jest do zrobienia?",onChange:function(n){return i(n.target.value)},required:!0,ref:a}),Object(L.jsx)(z,{children:"Dodaj zadanie"})]})},N=D.default.ul(a||(a=Object(T.a)(["\n  padding: 0px;\n"]))),_=D.default.li(c||(c=Object(T.a)(["\n  list-style: none;\n  padding: 20px;\n  border-bottom: 1px solid #838586;\n  display: grid;\n  align-items: center;\n  word-break: break-all;\n  grid-template-columns: 35px auto 40px;\n\n  ","\n"])),(function(n){return n.hidden&&Object(D.css)(s||(s=Object(T.a)(["\n      display: none;\n    "])))})),A=D.default.span(l||(l=Object(T.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n\n  ","\n"])),(function(n){return n.done&&Object(D.css)(d||(d=Object(T.a)(["\n      text-decoration: line-through;\n    "])))})),E=D.default.button(u||(u=Object(T.a)(["\n  width: 35px;\n  height: 35px;\n  border: none;\n  color: ",";\n  transition: 0.5s;\n  cursor: pointer;\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.toggleDone&&Object(D.css)(b||(b=Object(T.a)(["\n      background-color: ",";\n      &:hover background-color:",";\n    "])),(function(n){return n.theme.colors.japaneseLaurel}),(function(n){return n.theme.colors.japaneseLaurelLight}))}),(function(n){return n.remove&&Object(D.css)(f||(f=Object(T.a)(["\n      background-color: ",";\n      &:hover background-color: ",";\n    "])),(function(n){return n.theme.colors.alizarinCrimson}),(function(n){return n.theme.colors.alizarinCrimsonLight}))})),B=function(n){var e=n.tasks,t=n.hideTasksDone,r=n.removeTask,o=n.toglleTaskDone;return Object(L.jsx)(N,{children:e.map((function(n){return Object(L.jsxs)(_,{hidden:n.done&&t,children:[Object(L.jsx)(E,{onClick:function(){return o(n.id)},toggleDone:!0,children:n.done?"\u2714":""}),Object(L.jsx)(A,{done:n.done,children:n.content}),Object(L.jsx)(E,{remove:!0,onClick:function(){return r(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},H=D.default.div(j||(j=Object(T.a)(["\n  display: flex;\n\n  @media (max-width: ","px) {\n    flex-direction: column;\n  }\n"])),(function(n){return n.theme.breakpoint.mobile})),I=D.default.button(m||(m=Object(T.a)(["\n  padding: 5px;\n  border: none;\n  color: ",";\n  background: ",";\n  transition: 1s;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:disabled {\n    color: ",";\n    cursor: not-allowed;\n  }\n"])),(function(n){return n.theme.colors.teal}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.colors.bondiBlue}),(function(n){return n.theme.colors.silver})),J=function(n){var e=n.tasks,t=n.hideTasksDone,r=n.toggleHideDone,o=n.setAllDone;return e.length?Object(L.jsxs)(H,{children:[Object(L.jsxs)(I,{onClick:r,className:"buttons__button",children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(L.jsx)(I,{onClick:o,className:"buttons__button ",disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]}):null},P=D.default.div(p||(p=Object(T.a)(["\n  margin: 10px 10px;\n  display: grid;\n  background: ",";\n  grid-row-gap: 2px;\n  grid-auto-rows: minmax(65px, auto);\n\n  @media (max-width: ","px) {\n    margin: 10px 15px;\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.breakpoint.mobile})),M=D.default.div(x||(x=Object(T.a)(["\n  border-bottom: 3px solid #efefef;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-gap: 10px;\n  justify-content: space-between;\n\n  @media (max-width: ","px) {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.breakpoint.mobile})),U=D.default.h2(h||(h=Object(T.a)(["\n  margin-left: 20px;\n  font-size: 19px;\n  padding: 5px;\n"]))),q=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(L.jsxs)(P,{children:[Object(L.jsxs)(M,{children:[Object(L.jsx)(U,{children:e}),r]}),t]})},G=function(n){var e=n.title;return Object(L.jsx)("header",{children:Object(L.jsx)("h1",{children:e})})},R=D.default.main(g||(g=Object(T.a)(["\n  max-width: 900px;\n  padding: 20px;\n  margin: 0 auto;\n"]))),K=function(n){var e=n.children;return Object(L.jsx)(R,{children:e})},Q=t(17),V=t(6);var W,X=function(){var n=Object(O.useState)(!1),e=Object(y.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(O.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),e=Object(y.a)(n,2),t=e[0],r=e[1];return Object(O.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toglleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(V.a)(Object(V.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object(V.a)(Object(V.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(Q.a)(e),[{content:n,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}}}(),i=o.tasks,a=o.removeTask,c=o.toglleTaskDone,s=o.setAllDone,l=o.addNewTask;return Object(L.jsxs)(K,{children:[Object(L.jsx)(G,{title:"Lista zada\u0144"}),Object(L.jsx)(q,{title:"Dodaj nowe zadanie",body:Object(L.jsx)(S,{addNewTask:l})}),Object(L.jsx)(q,{title:"Lista zada\u0144",body:Object(L.jsx)(B,{tasks:i,hideTasksDone:t,removeTask:a,toglleTaskDone:c}),extraHeaderContent:Object(L.jsx)(J,{tasks:i,hideTasksDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:s})})]})},Y=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),i(n),a(n)}))},Z=t(16),$=Object(D.createGlobalStyle)(W||(W=Object(T.a)(["\n  ","\n  \n  html {\n  box-sizing: border-box;\n}\n*, ::after, ::before {\n  box-sizing: inherit;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0 auto;\n  background-color: #EFEFEF;\n  max-width: 850px;\n  font-family: 'Montserrat', sans-serif;\n}\n\nheader {\n  margin-left: 10px;\n  \n}\n"])),Z.normalize);v.a.render(Object(L.jsx)(k.a.StrictMode,{children:Object(L.jsxs)(D.ThemeProvider,{theme:{colors:{white:"#FFFFFF",teal:"#008080",bondiBlue:"#02AFAF",silver:"C0C0C0",darkerTeal:"#3d858dc9",japaneseLaurel:"#008000",japaneseLaurelLight:"#008000b7",alizarinCrimson:"#eb293c",alizarinCrimsonLight:"#eb293cb4"},breakpoint:{mobile:767}},children:[Object(L.jsx)($,{}),Object(L.jsx)(X,{})]})}),document.getElementById("root")),Y()}},[[25,1,2]]]);
//# sourceMappingURL=main.cbf00ad4.chunk.js.map