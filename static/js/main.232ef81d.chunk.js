(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{21:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r,o,a,i,c,d,s,l,b,u,j,x,p,g,f,m,O,h=t(0),k=t.n(h),w=t(12),v=t.n(w),D=(t(21),t(4)),T=t(2),y=t(3),C=y.b.form(r||(r=Object(T.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px;\n\n  @media (max-width: 768px) {\n    margin-top: 10px;\n  }\n"]))),S=y.b.button(o||(o=Object(T.a)(["\n  padding: 11px;\n  border: none;\n  border-radius: 3px;\n  cursor: pointer;\n  text-align: center;\n  transition: 0.3s;\n  background-color: #2e747c;\n  color: white;\n  flex-grow: 0;\n  margin-left: 20px;\n  transition: 1s;\n\n  @media (max-width: 768px) {\n    flex-basis: 100%;\n    margin: 10px 0;\n  }\n  &:hover {\n    background-color: #3d858dc9;\n    transform: scale(1.1);\n  }\n"]))),z=y.b.input(a||(a=Object(T.a)(["\n  border-radius: 3px;\n  flex-grow: 1;\n  padding: 10px;\n  border: 1px solid #dfdedf;\n  border-radius: 2px;\n  margin-left: 15px;\n\n  @media (max-width: 768px) {\n    flex-basis: 100%;\n    margin: 0px;\n  }\n"]))),N=t(1),_=function(n){var e=n.addNewTask,t=Object(h.useState)(""),r=Object(D.a)(t,2),o=r[0],a=r[1],i=Object(h.useRef)(null);return Object(N.jsxs)(C,{onSubmit:function(n){n.preventDefault(),""!==o.trim()&&(e(o.trim()),a(""),i.current.focus())},children:[Object(N.jsx)(z,{value:o,className:"form__input js-new__task",placeholder:"Co jest do zrobienia?",onChange:function(n){return a(n.target.value)},required:!0}),Object(N.jsx)(S,{children:"Dodaj zadanie"})]})},A=y.b.ul(i||(i=Object(T.a)(["\n  padding: 0px;\n"]))),F=y.b.li(c||(c=Object(T.a)(["\n  list-style: none;\n  padding: 20px;\n  border-bottom: 1px solid #838586;\n  display: grid;\n  align-items: center;\n  word-break: break-all;\n  grid-template-columns: 35px auto 40px;\n\n  ","\n"])),(function(n){return n.hidden&&Object(y.a)(d||(d=Object(T.a)(["\n      display: none;\n    "])))})),H=y.b.span(s||(s=Object(T.a)(["\n  margin-left: 10px;\n  margin-right: 10px;\n\n  ","\n"])),(function(n){return n.done&&Object(y.a)(l||(l=Object(T.a)(["\n      text-decoration: line-through;\n    "])))})),I=y.b.button(b||(b=Object(T.a)(["\n  width: 35px;\n  height: 35px;\n  border: none;\n  color: #fff;\n  transition: 0.5s;\n  cursor: pointer;\n\n  ","\n\n  ","\n"])),(function(n){return n.toggleDone&&Object(y.a)(u||(u=Object(T.a)(["\n      background-color: #008000;\n      &:hover background-color: #008000b7;\n    "])))}),(function(n){return n.remove&&Object(y.a)(j||(j=Object(T.a)(["\n      background-color: #eb293c;\n      &:hover background-color: #eb293cb4;\n    "])))})),J=function(n){var e=n.tasks,t=n.hideTasksDone,r=n.removeTask,o=n.toglleTaskDone;return Object(N.jsx)(A,{children:e.map((function(n){return Object(N.jsxs)(F,{hidden:n.done&&t,children:[Object(N.jsx)(I,{onClick:function(){return o(n.id)},toggleDone:!0,children:n.done?"\u2714":""}),Object(N.jsx)(H,{done:n.done,children:n.content}),Object(N.jsx)(I,{remove:!0,onClick:function(){return r(n.id)},children:"\ud83d\uddd1"})]},n.id)}))})},L=y.b.div(x||(x=Object(T.a)(["\n  display: flex;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n  }\n"]))),P=y.b.button(p||(p=Object(T.a)(["\n  padding: 5px;\n  border: none;\n  color: teal;\n  background: white;\n  transition: 1s;\n  cursor: pointer;\n  margin-right: 20px;\n\n  &:hover {\n    color: rgb(2, 175, 175);\n  }\n\n  &:disabled {\n    color: rgba(204, 204, 204, 0.953);\n    cursor: not-allowed;\n  }\n"]))),B=function(n){var e=n.tasks,t=n.hideTasksDone,r=n.toggleHideDone,o=n.setAllDone;return e.length?Object(N.jsxs)(L,{children:[Object(N.jsxs)(P,{onClick:r,className:"buttons__button",children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(N.jsx)(P,{onClick:o,className:"buttons__button ",disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]}):null},E=y.b.div(g||(g=Object(T.a)(["\n  margin: 10px 10px;\n  display: grid;\n  background: white;\n  grid-row-gap: 2px;\n  grid-auto-rows: minmax(65px, auto);\n\n  @media (max-width: 768px) {\n    margin: 10px 15px;\n  }\n"]))),U=y.b.div(f||(f=Object(T.a)(["\n  border-bottom: 3px solid #efefef;\n  display: grid;\n  grid-template-columns: auto auto;\n  align-items: center;\n  grid-gap: 10px;\n  justify-content: space-between;\n\n  @media (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]))),q=y.b.h2(m||(m=Object(T.a)(["\n  margin-left: 20px;\n  font-size: 19px;\n  padding: 5px;\n"]))),M=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(N.jsxs)(E,{children:[Object(N.jsxs)(U,{children:[Object(N.jsx)(q,{children:e}),r]}),t]})},R=function(n){var e=n.title;return Object(N.jsx)("header",{children:Object(N.jsx)("h1",{children:e})})},G=y.b.main(O||(O=Object(T.a)(["\n  max-width: 900px;\n  padding: 20px;\n  margin: 0 auto;\n"]))),K=function(n){var e=n.children;return Object(N.jsx)(G,{children:e})},Q=t(16),V=t(6);var W=function(){var n=Object(h.useState)(!1),e=Object(D.a)(n,2),t=e[0],r=e[1],o=function(){var n=Object(h.useState)(JSON.parse(localStorage.getItem("tasks"))||[]),e=Object(D.a)(n,2),t=e[0],r=e[1];return Object(h.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]),{tasks:t,removeTask:function(n){r((function(e){return e.filter((function(e){return e.id!==n}))}))},toglleTaskDone:function(n){r((function(e){return e.map((function(e){return e.id===n?Object(V.a)(Object(V.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){r((function(n){return n.map((function(n){return Object(V.a)(Object(V.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){r((function(e){return[].concat(Object(Q.a)(e),[{content:n,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}}}(),a=o.tasks,i=o.removeTask,c=o.toglleTaskDone,d=o.setAllDone,s=o.addNewTask;return Object(N.jsxs)(K,{children:[Object(N.jsx)(R,{title:"Lista zada\u0144"}),Object(N.jsx)(M,{title:"Dodaj nowe zadanie",body:Object(N.jsx)(_,{addNewTask:s})}),Object(N.jsx)(M,{title:"Lista zada\u0144",body:Object(N.jsx)(J,{tasks:a,hideTasksDone:t,removeTask:i,toglleTaskDone:c}),extraHeaderContent:Object(N.jsx)(B,{tasks:a,hideTasksDone:t,toggleHideDone:function(){r((function(n){return!n}))},setAllDone:d})})]})},X=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),r(n),o(n),a(n),i(n)}))};v.a.render(Object(N.jsx)(k.a.StrictMode,{children:Object(N.jsx)(W,{})}),document.getElementById("root")),X()}},[[25,1,2]]]);
//# sourceMappingURL=main.232ef81d.chunk.js.map