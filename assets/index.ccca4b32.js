import{c as e,a as t,o,b as r,r as n,d as s}from"./vendor.da7949e7.js";let a;const d={},i=function(e,t){if(!t||0===t.length)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in d)return;d[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":a,t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e()))},p=[{path:"/",component:()=>i((()=>import("./Layout.e2da9dc3.js")),["./assets/Layout.e2da9dc3.js","./assets/Layout.cf29e568.css","./assets/vendor.da7949e7.js","./assets/role.ecb8d499.js"]),children:[{path:"",component:()=>i((()=>import("./Home.da2abd3f.js")),["./assets/Home.da2abd3f.js","./assets/role.ecb8d499.js","./assets/vendor.da7949e7.js"])},{path:"/hall",component:()=>i((()=>import("./Hall.03c813aa.js")),["./assets/Hall.03c813aa.js","./assets/vendor.da7949e7.js","./assets/role.ecb8d499.js","./assets/firebaseData.d708bc2c.js"])},{path:"/room",component:()=>i((()=>import("./CreateRoom.4267d1b2.js")),["./assets/CreateRoom.4267d1b2.js","./assets/AddMessage.15f9865a.js","./assets/AddMessage.8dda92fc.css","./assets/firebaseData.d708bc2c.js","./assets/role.ecb8d499.js","./assets/vendor.da7949e7.js"])},{path:"/room/:id",component:()=>i((()=>import("./Room.9865fdb2.js")),["./assets/Room.9865fdb2.js","./assets/AddMessage.15f9865a.js","./assets/AddMessage.8dda92fc.css","./assets/firebaseData.d708bc2c.js","./assets/role.ecb8d499.js","./assets/vendor.da7949e7.js"])}]}],m=e({history:t(),routes:p}),l={setup(){}};l.render=function(e,t,s,a,d,i){const p=n("Router-view");return o(),r(p)};s(l).use(m).mount("#app");
