(this["webpackJsonpbirthday-app"]=this["webpackJsonpbirthday-app"]||[]).push([[0],[,function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/person1.5ea8f1f3.jpg"},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(4),i=a.n(c),r=(a(10),a(11),a(5)),s=(a(12),a(13),a(0));var d=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("h1",{className:"heading",children:[e.total," Birthdays Today"]})})};a(15);var m=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("div",{className:"person-container",children:[Object(s.jsx)("div",{className:"photo-container",children:Object(s.jsx)("img",{src:e.src,alt:e.name,className:"photo"})}),Object(s.jsxs)("div",{className:"content",children:[Object(s.jsx)("h3",{className:"name",children:e.name}),Object(s.jsxs)("p",{className:"age",children:[e.age," years"]})]}),Object(s.jsx)("i",{className:"fas fa-times delete",onClick:e.click})]})})};a(16);var u=function(e){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{className:"btn",onClick:e.click,children:e.name})})},j=[{id:1,name:"First LastName",birthday:"June 8, 1994",pic:a(1)},{id:2,name:"First LastName",birthday:"June 8, 1993",pic:a(1)},{id:3,name:"First LastName",birthday:"June 11, 1992",pic:a(1)},{id:4,name:"First LastName",birthday:"June 11, 1991",pic:a(1)},{id:5,name:"First LastName",birthday:"June 12, 1990",pic:a(1)},{id:6,name:"First LastName",birthday:"June 12, 1989",pic:a(1)},{id:7,name:"First LastName",birthday:"June 13 1988",pic:a(1)},{id:8,name:"First LastName",birthday:"June 13 1987",pic:a(1)},{id:9,name:"First LastName",birthday:"June 12 1986",pic:a(1)}];var l=function(){var e=Object(n.useState)(j),t=Object(r.a)(e,2),a=t[0],c=t[1],i=function(e){var t=a.filter((function(t){return t.id!==e}));c(t)},l=0;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)(d,{total:l}),Object(s.jsx)("div",{className:"people-container",children:a.map((function(e){var t=e.id,a=e.name,n=e.pic,c=e.birthday,r=Number((new Date).getFullYear())-Number(new Date(c).getFullYear()),d=Number(new Date(c).getMonth())+Number(new Date(c).getDate());if(function(){var e=new Date,t=e.getMonth(),a=e.getDate();return Number(t+a)}()===d)return l++,Object(s.jsx)(m,{name:a,src:n,age:r,click:function(){i(t)}},t)}))}),Object(s.jsxs)("div",{className:"btn-container",children:[Object(s.jsx)(u,{name:"Add"}),Object(s.jsx)(u,{name:"Clear All",click:function(){return c([])}})]})]})};var b=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(l,{})})};i.a.render(Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(b,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.7c039bef.chunk.js.map