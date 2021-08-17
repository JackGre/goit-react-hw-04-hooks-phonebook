(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={Filter:"ContactFilter_Filter__3IQxg"}},11:function(t,e,n){t.exports={ContactItem:"ContactItem_ContactItem__N0GfI"}},12:function(t,e,n){t.exports={ContactList:"ContactList_ContactList__7Iu9H"}},13:function(t,e,n){t.exports={Container:"App_Container__3maQX"}},19:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(19),n(14)),s=n(2),u=n(8),l=n.n(u),j=n(9),b=n.n(j),d=n(0);function m(t){var e=t.addContact,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),j=u[0],m=u[1],f=function(t){switch(t.currentTarget.name){case"name":return o(t.target.value);case"number":return m(t.target.value);default:return}};return Object(d.jsxs)("form",{className:b.a.Form,onSubmit:function(t){t.preventDefault();var n={id:l.a.generate(),name:r,number:j};e(n),o(""),m("")},children:[Object(d.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:f}),Object(d.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:j,onChange:f}),Object(d.jsx)("button",{type:"submit",children:"Add contact"})]})}var f=n(10),O=n.n(f),h=function(t){var e=t.value,n=t.onChange;return Object(d.jsx)("div",{className:O.a.Filter,children:Object(d.jsxs)("label",{children:["Find contacts by name",Object(d.jsx)("input",{type:"text",value:e,onChange:n})]})})},p=n(11),x=n.n(p),C=function(t){var e=t.contacts,n=t.onClick;return e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(d.jsxs)("li",{className:x.a.ContactItem,children:[Object(d.jsxs)("p",{children:[Object(d.jsx)("span",{children:e}),Object(d.jsx)("span",{children:c})]}),Object(d.jsx)("button",{onClick:function(){return n(a)},children:"Delete"})]},a)}))},v=n(12),g=n.n(v),_=function(t){var e=t.contacts,n=t.onClick;return Object(d.jsx)("ul",{className:g.a.ContactList,children:Object(d.jsx)(C,{contacts:e,onClick:n})})},k=n(13),I=n.n(k);function S(){var t=Object(c.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),u=o[0],l=o[1];Object(c.useEffect)((function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&a(e)}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var j=u.toLowerCase(),b=n.filter((function(t){return t.name.toLowerCase().includes(j)}));return Object(d.jsxs)("div",{className:I.a.Container,children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(m,{addContact:function(t){void 0===n.find((function(e){return e.name===t.name}))?a((function(e){return[t].concat(Object(i.a)(e))})):alert("".concat(t.name," is already in contacts"))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(h,{value:u,onChange:function(t){l(t.currentTarget.value)}}),Object(d.jsx)(_,{contacts:b,onClick:function(t){a(n.filter((function(e){return e.id!==t})))}})]})}o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={Form:"ContactForm_Form__31Qtp"}}},[[29,1,2]]]);
//# sourceMappingURL=main.1f0a8853.chunk.js.map