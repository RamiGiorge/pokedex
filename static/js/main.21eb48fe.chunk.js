(this.webpackJsonptranslated=this.webpackJsonptranslated||[]).push([[0],{13:function(e,t,n){"use strict";n(0);var c=n(22),a=n.n(c),r=n.p+"static/media/loading.494a1ef8.gif",s=n(1);t.a=function(){return Object(s.jsx)("div",{className:a.a.fallbackContainer,children:Object(s.jsx)("img",{src:r,alt:"loading"})})}},16:function(e,t,n){"use strict";var c=n(18),a=n.n(c),r=n(1);t.a=function(e){var t=e.handleClick,n=e.children;return Object(r.jsx)("div",{className:a.a.btnWrapper,children:Object(r.jsx)("button",{onClick:t,className:a.a.backBtn,children:n})})}},18:function(e,t,n){e.exports={btnWrapper:"Button_btnWrapper__1ZtKc",backBtn:"Button_backBtn__3BX2q"}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return d}));var c=n(12),a=n(3),r=n(0),s=n(11),i=n.n(s),u=n(6),o=n(17),l=function(e){var t=Object(r.useState)(null),n=Object(a.a)(t,2),s=n[0],l=n[1],j=Object(r.useState)([]),b=Object(a.a)(j,2),d=b[0],f=b[1],O=Object(r.useState)(!0),p=Object(a.a)(O,2),x=p[0],m=p[1],h=Object(r.useState)(null),k=Object(a.a)(h,2),v=k[0],_=k[1],g=Object(r.useCallback)(Object(o.a)(i.a.mark((function t(){var n,a,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((n=t.sent).ok){t.next=6;break}throw Error("Fetching failed: server responded with a status of ".concat(n.status));case 6:return t.next=8,n.json();case 8:a=t.sent,r=a.results,s=a.next,l(s),r.map(function(){var e=Object(o.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.url);case 3:if((n=e.sent).ok){e.next=6;break}throw Error("Fetching failed: server responded with a status of ".concat(n.status));case 6:return e.next=8,n.json();case 8:a=e.sent,f((function(e){return[].concat(Object(c.a)(e),[Object(u.a)(Object(u.a)({},a),{},{isCaptured:!1})])})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),_(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),_(t.t0.message);case 18:m(!1);case 19:case"end":return t.stop()}}),t,null,[[0,15]])}))),[e]);return Object(r.useEffect)((function(){var e=!0;return e&&g(),function(){return e=!1}}),[g]),{items:d,pending:x,error:v,nextUrl:s}},j=n(1),b=Object(r.createContext)(),d=function(e){var t=Object(r.useState)("https://pokeapi.co/api/v2/pokemon"),n=Object(a.a)(t,2),s=n[0],i=n[1],u=Object(r.useState)(null),o=Object(a.a)(u,2),d=o[0],f=o[1],O=Object(r.useState)(null),p=Object(a.a)(O,2),x=p[0],m=p[1],h=l(s),k=h.items,v=h.error,_=h.pending,g=h.nextUrl;return Object(r.useEffect)((function(){f(Object(c.a)(k).sort((function(e,t){return e.id-t.id})))}),[k,f]),Object(j.jsx)(b.Provider,{value:{pokemons:d,setPokemons:f,setUrl:i,error:v,pending:_,nextUrl:g,filtered:x,setFiltered:m},children:e.children})}},22:function(e,t,n){e.exports={fallbackContainer:"Fallback_fallbackContainer__1dsEG"}},23:function(e,t,n){e.exports={notFound:"NotFound_notFound__3i0Ol"}},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=n(9),u=n(2),o=n(19),l=n(20),j=n(8);l.b.add(j.e,j.c,j.b,j.a,j.d);n(33);var b=n(13),d=n(23),f=n.n(d),O=n(1),p=function(){return Object(O.jsxs)("div",{className:f.a.notFound,children:[Object(O.jsx)(b.a,{}),Object(O.jsx)("h2",{children:"Where are you going?!"}),Object(O.jsxs)("h3",{children:["Let's take you back ",Object(O.jsx)(i.b,{to:"/pokedex",children:"HOME"})]})]})},x=n(6),m=n(3),h=n(5),k=n.n(h),v=function(e){var t=e.card,n=e.choiceHandler,c=e.flipped;return Object(O.jsx)("div",{className:k.a.memoryCard,children:Object(O.jsxs)("div",{className:c?k.a.flipped:"",children:[Object(O.jsx)("img",{src:t.src,alt:"front",className:k.a.front}),Object(O.jsx)("img",{src:"./assets/back.png",alt:"back",onClick:function(){return n(t)},className:k.a.back})]})})},_=n(16),g=[{src:"./assets/pikachu.png"},{src:"./assets/butterfree.png"},{src:"./assets/mankey.png"},{src:"./assets/parasect.png"},{src:"./assets/venonat.png"},{src:"./assets/puff.png"}],C=function(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(0),s=Object(m.a)(r,2),i=s[0],o=s[1],l=Object(c.useState)(null),j=Object(m.a)(l,2),b=j[0],d=j[1],f=Object(c.useState)(null),p=Object(m.a)(f,2),h=p[0],C=p[1],S=Object(c.useState)(!1),G=Object(m.a)(S,2),N=G[0],w=G[1],y=Object(u.f)();Object(c.useEffect)((function(){E()}),[]),Object(c.useEffect)((function(){b&&h&&(w(!0),b.src===h.src&&a((function(e){return e.map((function(e){return e.src===b.src?Object(x.a)(Object(x.a)({},e),{},{matched:!0}):e}))})),setTimeout((function(){B()}),1e3))}),[b,h]);var E=function(){var e=[].concat(g,g).sort((function(){return Math.random()-.5})).map((function(e){return Object(x.a)(Object(x.a)({},e),{},{id:Math.random()})}));a(e),d(null),C(null),o(0)},F=function(e){N||(b?C(e):d(e))},B=function(){d(null),C(null),o((function(e){return e+1})),w(!1)};return Object(O.jsxs)("div",{className:k.a.game,children:[Object(O.jsxs)("div",{className:k.a.btnContainer,children:[Object(O.jsx)(_.a,{handleClick:function(){return y("/pokedex")},children:"Home"}),Object(O.jsx)(_.a,{handleClick:E,children:"New Game"})]}),Object(O.jsxs)("p",{children:["Attempts - ",i]}),Object(O.jsx)("div",{className:k.a.cardGrid,children:n.map((function(e){return Object(O.jsx)(v,{card:e,choiceHandler:F,flipped:e===b||e===h||e.matched,disabled:N},e.id)}))})]})},S=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,48))})),G=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,50))})),N=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,49))}));var w=function(){return Object(O.jsx)(i.a,{children:Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(b.a,{}),children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(S,{title:"pok\xe9dex"}),Object(O.jsx)(o.a,{children:Object(O.jsxs)(u.c,{children:[Object(O.jsx)(u.a,{path:"/pokedex",element:Object(O.jsx)(G,{})}),Object(O.jsx)(u.a,{path:"/pokedex/pokemon/:id",element:Object(O.jsx)(N,{})}),Object(O.jsx)(u.a,{path:"/pokedex/game",element:Object(O.jsx)(C,{})}),Object(O.jsx)(u.a,{path:"*",element:Object(O.jsx)(p,{})})]})})]})})})};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={game:"Game_game__1cR7f",cardGrid:"Game_cardGrid__1Gw6s",memoryCard:"Game_memoryCard__1kSPr",front:"Game_front__eFDTL",flipped:"Game_flipped__1ogKZ",back:"Game_back__1rfSE",btnContainer:"Game_btnContainer__32xGY"}}},[[34,1,2]]]);
//# sourceMappingURL=main.21eb48fe.chunk.js.map