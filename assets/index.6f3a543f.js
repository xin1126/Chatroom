import{c as e,a as t,o,b as r,r as n,d as s}from"./vendor.c5ff6843.js";let a;const i={},p=function(e,t){if(!t||0===t.length)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":a,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},m=[{path:"/",component:()=>p((()=>import("./Layout.7678f86d.js")),["./assets/Layout.7678f86d.js","./assets/Layout.cf29e568.css","./assets/vendor.c5ff6843.js","./assets/role.6113f3f7.js"]),children:[{path:"",component:()=>p((()=>import("./Home.9207d790.js")),["./assets/Home.9207d790.js","./assets/role.6113f3f7.js","./assets/vendor.c5ff6843.js"])},{path:"/chatroom",component:()=>p((()=>import("./Chatroom.af469a68.js")),["./assets/Chatroom.af469a68.js","./assets/AddMessage.2c326f6b.js","./assets/AddMessage.8dda92fc.css","./assets/vendor.c5ff6843.js","./assets/role.6113f3f7.js"])},{path:"/hall",component:()=>p((()=>import("./Hall.8c146ab9.js")),["./assets/Hall.8c146ab9.js","./assets/vendor.c5ff6843.js","./assets/role.6113f3f7.js"])},{path:"/public",component:()=>p((()=>import("./PublicRoom.93841275.js")),["./assets/PublicRoom.93841275.js","./assets/AddMessage.2c326f6b.js","./assets/AddMessage.8dda92fc.css","./assets/vendor.c5ff6843.js","./assets/role.6113f3f7.js"])},{path:"/private",component:()=>p((()=>import("./PrivateRoom.ef87a47a.js")),["./assets/PrivateRoom.ef87a47a.js","./assets/AddMessage.2c326f6b.js","./assets/AddMessage.8dda92fc.css","./assets/vendor.c5ff6843.js","./assets/role.6113f3f7.js"])},{path:"/room/:id",component:()=>p((()=>import("./Room.82f49ac8.js")),["./assets/Room.82f49ac8.js","./assets/AddMessage.2c326f6b.js","./assets/AddMessage.8dda92fc.css","./assets/vendor.c5ff6843.js","./assets/role.6113f3f7.js"])}]}],_=e({history:t(),routes:m}),c={setup(){}};c.render=function(e,t,s,a,i,p){const m=n("Router-view");return o(),r(m)};s(c).use(_).mount("#app");
