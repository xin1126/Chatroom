import{c as e,a as t,o,b as r,r as n,d as a}from"./vendor.d5f23afa.js";let s;const i={},p=function(e,t){if(!t||0===t.length)return e();if(void 0===s){const e=document.createElement("link").relList;s=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":s,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},m=[{path:"/",component:()=>p((()=>import("./Layout.db738a7d.js")),["./assets/Layout.db738a7d.js","./assets/Layout.cf29e568.css","./assets/vendor.d5f23afa.js","./assets/role.e7340623.js"]),children:[{path:"",component:()=>p((()=>import("./Home.3a63b97e.js")),["./assets/Home.3a63b97e.js","./assets/role.e7340623.js","./assets/vendor.d5f23afa.js"])},{path:"/chatroom",component:()=>p((()=>import("./Chatroom.36a3da83.js")),["./assets/Chatroom.36a3da83.js","./assets/AddMessage.0b634627.js","./assets/AddMessage.8dda92fc.css","./assets/firebaseData.a6fd469c.js","./assets/role.e7340623.js","./assets/vendor.d5f23afa.js"])},{path:"/hall",component:()=>p((()=>import("./Hall.a581f8fc.js")),["./assets/Hall.a581f8fc.js","./assets/vendor.d5f23afa.js","./assets/role.e7340623.js","./assets/firebaseData.a6fd469c.js"])},{path:"/public",component:()=>p((()=>import("./PublicRoom.d8b0350e.js")),["./assets/PublicRoom.d8b0350e.js","./assets/AddMessage.0b634627.js","./assets/AddMessage.8dda92fc.css","./assets/firebaseData.a6fd469c.js","./assets/role.e7340623.js","./assets/vendor.d5f23afa.js"])},{path:"/private",component:()=>p((()=>import("./PrivateRoom.128ccebb.js")),["./assets/PrivateRoom.128ccebb.js","./assets/AddMessage.0b634627.js","./assets/AddMessage.8dda92fc.css","./assets/firebaseData.a6fd469c.js","./assets/role.e7340623.js","./assets/vendor.d5f23afa.js"])},{path:"/room/:id",component:()=>p((()=>import("./Room.ffef5a03.js")),["./assets/Room.ffef5a03.js","./assets/AddMessage.0b634627.js","./assets/AddMessage.8dda92fc.css","./assets/firebaseData.a6fd469c.js","./assets/role.e7340623.js","./assets/vendor.d5f23afa.js"])}]}],_=e({history:t(),routes:m}),c={setup(){}};c.render=function(e,t,a,s,i,p){const m=n("Router-view");return o(),r(m)};a(c).use(_).mount("#app");