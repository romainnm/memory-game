(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{10:function(e,n,a){},12:function(e,n,a){},14:function(e,n,a){"use strict";a.r(n);var i=a(1),t=a.n(i),c=a(5),r=a.n(c),m=(a(10),a(3)),s=a(2),g=a.n(s),o=[{name:"banana",image:"./img/banana.png",id:g()()},{name:"dragon",image:"./img/dragon.png",id:g()()},{name:"kiwi",image:"./img/kiwi.png",id:g()()},{name:"lichi",image:"./img/lichi.png",id:g()()},{name:"lime",image:"./img/lime.png",id:g()()},{name:"mango",image:"./img/mango.png",id:g()()},{name:"orange",image:"./img/orange.png",id:g()()},{name:"papaya",image:"./img/papaya.png",id:g()()},{name:"pineapple",image:"./img/pineapple.png",id:g()()},{name:"pomegranate",image:"./img/pomegranate.png",id:g()()}],d=(a(12),a(0));var j=function(){var e=Object(i.useState)(0),n=Object(m.a)(e,2),a=n[0],t=n[1],c=Object(i.useState)([]),r=Object(m.a)(c,2),s=r[0],g=r[1],j=Object(i.useState)(!1),l=Object(m.a)(j,2),u=l[0],p=l[1];Object(i.useEffect)((function(){h(o),g(o)}),[]),Object(i.useEffect)((function(){h(o)}),[s]),Object(i.useEffect)((function(){var e=setTimeout((function(){p(!1)}),3e3);return function(){clearTimeout(e)}}),[u]);var h=function(e){for(var n=e.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),i=e[n];e[n]=e[a],e[a]=i}return e};return Object(d.jsxs)("main",{children:[Object(d.jsx)("h1",{children:"Memory Game"}),u&&Object(d.jsxs)("p",{className:"game-over",children:[Object(d.jsx)("span",{className:"green",children:"Game Over"})," - Score has been reset!"]}),Object(d.jsxs)("header",{children:[Object(d.jsxs)("h2",{children:["game score:"," ",Object(d.jsx)("span",{className:"green",children:o.length-s.length})]}),Object(d.jsxs)("h4",{children:["Highest Score: ",Object(d.jsx)("span",{className:"green",children:a})]})]}),Object(d.jsx)("div",{className:"main-center",children:o.map((function(e){var n=e.id,i=e.image,c=e.name;return Object(d.jsx)("article",{children:Object(d.jsx)("div",{className:"img-container",children:Object(d.jsx)("img",{src:i,alt:c,className:"fruit-img",onClick:function(){return function(e){if(s.find((function(n){return n.id===e}))){var n=s.filter((function(n){return n.id!==e}));g(n)}else{p(!0);var i=o.length-s.length;i>a&&t(i),g(o)}}(n)}})})},n)}))})]})};r.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5da7e61d.chunk.js.map