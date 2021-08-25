import{o as e,d as t,r as a,a as n}from"./firebaseData.a6fd469c.js";import{o as l,b as s,f as r,t as o,F as c,j as i,n as u,e as d,u as g,w as p,g as b,k as v,l as x,p as m}from"./vendor.d5f23afa.js";import{c as h,v as y,n as f,i as k,d as j}from"./role.e7340623.js";const w={setup:()=>({onLine:e})},O={class:"\n      w-[180px]\n      h-onLine\n      mt-3\n      bg-gray-700\n      dark:bg-white\n      dark:shadow-md\n      rounded-lg\n      hidden\n      md:block\n    "},D={class:"text-center mt-3 text-white dark:text-gray-600"},L={class:"pl-3"},I=r("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full ml-auto mr-3"},null,-1);w.render=function(e,t,a,n,d,g){return l(),s("div",O,[r("p",D," 線上人數："+o(Object.values(n.onLine).length),1),r("ul",L,[(l(!0),s(c,null,i(n.onLine,(e=>(l(),s("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[r("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),u(" "+o(Object.keys(e).join(""))+" ",1),I])))),128))])])};const M={setup(){const t=d(!0);return{onLine:e,onLineHeight:t}}},C={class:"\n      md:hidden\n      w-full\n      sm:w-[500px]\n      flex\n      justify-between\n      bg-gray-800\n      dark:bg-gray-300\n      rounded-t-lg\n      px-3\n      py-2\n    "},H={class:"text-white dark:text-gray-600"},R={class:"pl-3 pt-2"},T={class:"pr-2"},S=r("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full mr-3 ml-auto"},null,-1);M.render=function(e,t,a,n,u,d){return l(),s("div",C,[r("p",H," 線上人數："+o(Object.values(n.onLine).length),1),r("button",{type:"button",class:"\n        bg-gray-500\n        hover:bg-gray-600\n        text-white text-sm\n        flex\n        rounded-lg\n        px-2\n        py-1\n      ",onClick:t[1]||(t[1]=e=>n.onLineHeight=!n.onLineHeight)}," 查看線上用戶 "),r("div",{class:["\n        absolute\n        right-6\n        top-16\n        bg-gray-500\n        rounded-lg\n        z-10\n        overflow-hidden\n      ",{"h-0":n.onLineHeight}]},[r("ul",R,[(l(!0),s(c,null,i(n.onLine,(e=>(l(),s("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[r("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),r("p",T,o(Object.keys(e).join("")),1),S])))),128))])],2)])};const K={setup(){const e=d(""),l=d(""),s=d(""),r=d(!1),o=g();return p(t,(()=>{setTimeout((()=>{var e,t;""!==(null==(e=s.value)?void 0:e.scrollTop)&&(null==(t=s.value)?void 0:t.scrollHeight)&&(s.value.scrollTop=s.value.scrollHeight+2e3)}),500)})),{data:t,checked:h,tempId:y,verify:r,scroll:s,editInput:e,editMessage:l,editData:(t,s,c)=>{if(c)e.value=""!==e.value?"":t,l.value=""!==l.value?"":s,r.value=!1;else{if(r.value=!0,s===l.value||""===l.value)return;const c={};c[f.value]={img:k.value,content:l.value,date:(new Date).getTime(),edit:!0},"/chatroom"===o.path?j.ref("chatroom").child(t).set(c):"/public"===o.path||"/private"===o.path?j.ref("publicRoom").child(a.value).child(t).set(c):j.ref("publicRoom").child(n.value).child(t).set(c),e.value="",l.value=""}},removeMessage:e=>{const t={};t[f.value]={content:""},"/chatroom"===o.path?j.ref("chatroom").child(e).set(t):"/public"===o.path||"/private"===o.path?j.ref("publicRoom").child(a.value).child(e).set(t):j.ref("publicRoom").child(n.value).child(e).set(t)}}}},U={class:"message"},V={key:0,class:"flex break-all mb-8"},z={class:"ml-1"},F={class:"text-white dark:text-gray-500 mb-1 relative"},J={class:"absolute w-52 bottom-1 ml-2 text-gray-400 text-xs"},N={class:"\n                relative\n                bg-gray-500\n                text-white text-lg\n                px-3\n                py-1\n                ml-2\n                rounded-lg\n              "},_=r("i",{class:"fas fa-2x fa-caret-left absolute text-gray-500"},null,-1),q={key:1,class:"text-right break-all mb-8"},A={class:"mr-2 text-gray-400 text-xs"},B={key:0,class:"\n              inline-block\n              relative\n              bg-blue-900\n              text-white text-lg\n              px-3\n              py-1\n              mb-2\n              rounded-lg\n            "},E=r("i",{class:"fas fa-2x fa-caret-right absolute text-blue-900"},null,-1),G={class:"text-sm text-red-500 mb-2"},P={class:"fas fa-exclamation-triangle"},Q={class:"flex justify-end"},W={key:2,class:"text-center mb-6"},X={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},Y={key:3,class:"text-center mb-6"},Z={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},$={key:4,class:"text-center mb-6"},ee={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"};K.render=function(e,t,a,n,d,g){return l(),s("div",{ref:"scroll",class:["\n      w-full\n      sm:w-[500px]\n      h-chatroom\n      scroll\n      overflow-y-auto overflow-x-hidden\n      bg-gray-700\n      dark:bg-white\n      md:rounded-t-lg\n      p-4\n    ",n.checked?["scroll-track","scroll-thumb"]:"scroll"]},[r("ul",U,[(l(!0),s(c,null,i(n.data,(e=>(l(),s(c,{key:e[0]},[n.tempId.indexOf(e[0])<0&&""!==Object.values(e[1])[0].content?(l(),s("li",V,[r("img",{class:"w-[40px] h-[50px]",src:Object.values(e[1])[0].img,alt:"avatar"},null,8,["src"]),r("div",z,[r("div",F,[u(o(Object.keys(e[1]).join(""))+" ",1),r("span",J,o(new Date(Object.values(e[1])[0].date).toLocaleString())+o(Object.values(e[1])[0].edit?"(已編輯)":""),1)]),r("div",N,[_,u(" "+o(Object.values(e[1])[0].content),1)])])])):n.tempId.indexOf(e[0])>=0&&""!==Object.values(e[1])[0].content?(l(),s("li",q,[r("span",A,o(new Date(Object.values(e[1])[0].date).toLocaleString())+o(Object.values(e[1])[0].edit?"(已編輯)":""),1),n.editInput!==e[0]?(l(),s("div",B,[E,u(" "+o(Object.values(e[1])[0].content),1)])):b((l(),s("input",{key:1,type:"text",class:"mb-2 py-1 pl-2 rounded-lg dark:border-2 dark:border-gray-500","onUpdate:modelValue":t[1]||(t[1]=e=>n.editMessage=e),onKeydown:x((t=>n.editData(e[0],Object.values(e[1])[0].content,!1)),["enter"])},null,40,["onKeydown"])),[[v,n.editMessage]]),b(r("div",G,[b(r("i",P,null,512),[[m,""===n.editMessage||n.editMessage===Object.values(e[1])[0].content]]),u(" "+o(n.editMessage===Object.values(e[1])[0].content?"尚未編輯新留言":""===n.editMessage?"編輯留言不可為空":""),1)],512),[[m,n.verify&&n.editInput===e[0]]]),r("div",Q,[r("button",{class:"\n                bg-gray-500\n                hover:bg-gray-800\n                text-white text-sm\n                flex\n                rounded-lg\n                px-2\n                py-1\n                mr-3\n              ",onClick:t=>n.editData(e[0],Object.values(e[1])[0].content,!0)},o(n.editInput!==e[0]?"編輯":"取消"),9,["onClick"]),n.editInput!==e[0]?(l(),s("button",{key:0,class:"\n                bg-gray-500\n                hover:bg-gray-800\n                text-white text-sm\n                rounded-lg\n                px-2\n                py-1\n              ",onClick:t=>n.removeMessage(e[0])}," 收回 ",8,["onClick"])):(l(),s("button",{key:1,class:"\n                bg-green-600\n                hover:bg-green-900\n                text-white text-sm\n                rounded-lg\n                px-2\n                py-1\n              ",onClick:t=>n.editData(e[0],Object.values(e[1])[0].content,!1)}," 確認 ",8,["onClick"]))])])):""===Object.values(e[1])[0].content&&Object.values(e[1])[0].status?(l(),s("li",W,[r("span",X,o(Object.keys(e[1]).join(""))+"加入聊天室",1)])):""===Object.values(e[1])[0].content&&!1===Object.values(e[1])[0].status?(l(),s("li",Y,[r("span",Z,o(Object.keys(e[1]).join(""))+"離開聊天室",1)])):(l(),s("li",$,[r("span",ee,o(Object.keys(e[1]).join(""))+"已收回訊息",1)]))],64)))),128))])],2)};const te={setup(){const e=d("請輸入留言"),l=d(""),s=g();return{name:f,data:t,str:e,tempId:y,message:l,addData:()=>{if(""!==l.value){const e={};e[f.value]={img:k.value,content:l.value,date:(new Date).getTime(),edit:!1},l.value="","/chatroom"===s.path?j.ref("chatroom").push().set(e):"/public"===s.path||"/private"===s.path?j.ref("publicRoom").child(a.value).push().set(e):j.ref("publicRoom").child(n.value).push().set(e);const r=[...t.value].pop()[0];y.value.push(r),localStorage.setItem(f.value,JSON.stringify(y.value))}else e.value="請輸入留言"===e.value?"尚未輸入留言":"請輸入留言"}}}},ae={class:"\n      flex\n      justify-center\n      max-w-[500px]\n      w-full\n      bg-gray-800\n      dark:bg-gray-300\n      dark:shadow-lg\n      p-5\n      rounded-b-lg\n    "},ne=r("i",{class:"far fa-paper-plane text-xl"},null,-1);te.render=function(e,t,a,n,o,c){return l(),s("div",ae,[b(r("input",{type:"text",placeholder:n.str,"onUpdate:modelValue":t[1]||(t[1]=e=>n.message=e),onKeydown:t[2]||(t[2]=x((e=>n.addData()),["enter"])),class:"rounded-l-lg p-2 w-full"},null,40,["placeholder"]),[[v,n.message]]),r("button",{onClick:t[3]||(t[3]=(...e)=>n.addData&&n.addData(...e)),class:"bg-gray-500 hover:bg-gray-700 text-white rounded-r-lg px-3 py-1"},[ne])])};export{w as _,M as a,K as b,te as c};