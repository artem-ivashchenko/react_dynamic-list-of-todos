(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),l=c.n(a),n=c(2),i=c(1),d=c.n(i),o=(c(13),c(14),c(6)),r=c.n(o),j=c(0),b=function(e){var t=e.todos,c=e.setSelectedTodo,s=e.selectedTodo,a=Object(i.useCallback)((function(e){c(e)}),[]);return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsxs)("tr",{"data-cy":"todo",className:r()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),Object(j.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:r()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return a(e)},children:Object(j.jsx)("span",{className:"icon",children:(null===s||void 0===s?void 0:s.id)===e.id?Object(j.jsx)("i",{className:"far fa-eye-slash"}):Object(j.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var u=function(e){var t=e.filter,c=e.setFilter,a=e.query,l=e.setQuery,n=Object(i.useCallback)((function(e){c(e.target.value)}),[]),d=Object(i.useCallback)((function(e){l(e.target.value)}),[]),o=Object(i.useCallback)((function(){l("")}),[]);return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:n,children:[Object(j.jsx)("option",{value:s.All,children:"All"}),Object(j.jsx)("option",{value:s.Active,children:"Active"}),Object(j.jsx)("option",{value:s.Completed,children:"Completed"})]})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:d}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:o})})]})]})},h=(c(16),d.a.memo((function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})})));function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.setSelectedTodo,c=e.selectedTodo,s=Object(i.useState)(null),a=Object(n.a)(s,2),l=a[0],d=a[1],o=Object(i.useState)(!0),r=Object(n.a)(o,2),b=r[0],u=r[1];Object(i.useEffect)((function(){var e;(e=c.userId,m("/users/".concat(e))).then(d).finally((function(){return u(!1)}))}),[c]);var O=Object(i.useCallback)((function(){t(null)}),[]);return Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),b?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:O})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(j.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(j.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(j.jsx)("a",{href:"mailto:".concat(null===l||void 0===l?void 0:l.email),children:null===l||void 0===l?void 0:l.name})]})]})]})]})},x=c(8);var f=function(){var e=Object(i.useState)([]),t=Object(n.a)(e,2),c=t[0],a=t[1],l=Object(i.useState)(s.All),d=Object(n.a)(l,2),o=d[0],r=d[1],f=Object(i.useState)(""),v=Object(n.a)(f,2),p=v[0],N=v[1],y=Object(i.useState)(null),g=Object(n.a)(y,2),k=g[0],C=g[1],S=Object(i.useState)(!0),T=Object(n.a)(S,2),w=T[0],A=T[1];Object(i.useEffect)((function(){m("/todos").then(a).finally((function(){return A(!1)}))}),[]);var _=Object(i.useMemo)((function(){return function(e,t,c){var a=Object(x.a)(e);switch(c.trim()&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),t){case s.Active:return a.filter((function(e){return!e.completed}));case s.Completed:return a.filter((function(e){return e.completed}));default:return a}}(c,o,p)}),[c,o,p]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(u,{filter:o,setFilter:r,query:p,setQuery:N})}),Object(j.jsxs)("div",{className:"block",children:[w&&Object(j.jsx)(h,{}),!w&&Object(j.jsx)(b,{todos:_,selectedTodo:k,setSelectedTodo:C})]})]})})}),k&&Object(j.jsx)(O,{setSelectedTodo:C,selectedTodo:k})]})};l.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.b73fab9e.chunk.js.map