"use strict";(self.webpackChunkredux_toolkit_app=self.webpackChunkredux_toolkit_app||[]).push([[162],{1162:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(8683),s=n(885),i=n(2791),c=n(9434),o=n(3737),u=n(184),l=function(e){var t=e.text;return(0,u.jsx)("div",{className:"empty",children:t})},a={text:"",isCompleted:!1},d=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.todos})),n=(0,i.useState)(a),d=(0,s.Z)(n,2),x=d[0],p=d[1],f=function(e){"Enter"===e.key&&h()},h=function(t){e((0,o.J)(x)),p(a)};return(0,i.useEffect)((function(){return document.addEventListener("keypress",f),function(){return document.removeEventListener("keypress",f)}}),[x]),(0,u.jsxs)("div",{className:"container flex-align-center",children:[0===t.length?(0,u.jsx)(l,{text:"Ish yo'q bekorchilik... \ud83d\ude01"}):t.map((function(t,n){return(0,u.jsxs)("div",{className:"todo box flex-align-center",children:[" ",(0,u.jsxs)("p",{children:[" ",(0,u.jsxs)("span",{children:[n+1,"."]})," ",(0,u.jsx)("span",{children:t.text})," ",(0,u.jsx)("span",{children:t.isCompleted?"\ud83d\ude0e":"\ud83d\ude23"})," "]}),(0,u.jsx)("button",{className:"small",onClick:function(){return e((0,o.a)({index:n}))},children:"Delete"})]},n)})),(0,u.jsxs)("div",{children:[(0,u.jsx)("input",{type:"text",name:"text",value:x.text,onChange:function(e){return p((function(t){return(0,r.Z)((0,r.Z)({},t),{},{text:e.target.value})}))}}),(0,u.jsx)("input",{type:"checkbox",name:"isCompleted",checked:x.isCompleted,onChange:function(e){return p((function(t){return(0,r.Z)((0,r.Z)({},t),{},{isCompleted:e.target.checked})}))}})]}),(0,u.jsx)("button",{onClick:h,children:"Create Todo"})]})}}}]);
//# sourceMappingURL=162.328df756.chunk.js.map