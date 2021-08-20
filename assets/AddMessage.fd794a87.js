import{e,o as t,b as a,f as l,t as n,F as s,j as o,n as u,u as c,w as r,g as i,k as d,l as v,p}from"./vendor.c5ff6843.js";import{n as b,i as g,u as m,v as h,c as x,w as f}from"./role.6113f3f7.js";const y=e(""),k=e(""),j=e(""),w=e(""),O=e(""),R=e(!1),L=()=>{const e={},t={};e[b.value]=g.value,t[b.value]={content:"",status:!0},m.ref("chatroom").push().set(t).then((()=>{m.ref("onLine").push().set(e)})).then((()=>{w.value=new WebSocket("wss://fierce-savannah-16080.herokuapp.com/")})),m.ref().on("value",(e=>{y.value=Object.entries(e.val().chatroom),e.val().onLine&&(k.value=Object.entries(e.val().onLine).map((e=>e[1]))||{})}))},D=(e,t)=>{let a;const l={},n={},s={};m.ref("publicRoom").push().set(1),m.ref("publicRoom").once("value",(e=>{j.value=Object.keys(e.val()).pop(),l[b.value]={content:"",status:!0},m.ref("publicRoom").child(j.value).push().set(l),t&&(s[j.value]=h.value,m.ref("privateRoom").push().set(s))})),m.ref("onLinePublicRoom").push().set(1),m.ref("onLinePublicRoom").once("value",(t=>{a=Object.keys(t.val()).pop(),n[b.value]=g.value,m.ref("onLinePublicRoom").child(a).push().set(n).then((()=>{w.value=new WebSocket(e)}))})),m.ref().on("value",(e=>{var t;R.value&&e.val().publicRoom[j.value]&&(y.value=Object.entries(e.val().publicRoom[j.value]),(null==(t=e.val().onLinePublicRoom)?void 0:t[a])&&(k.value=Object.entries(e.val().onLinePublicRoom[a]).map((e=>e[1]))))}))},I=()=>{let e,t;const a={},l={},n={};m.ref("publicRoom").once("value",(t=>{a[b.value]={content:"",status:!0},m.ref("publicRoom").child(O.value).push().set(a),e=Object.keys(t.val()).indexOf(O.value)})),m.ref("onLinePublicRoom").once("value",(a=>{t=Object.keys(a.val())[e],l[b.value]=g.value,m.ref("onLinePublicRoom").child(t).push().set(l),n[O.value]=t,m.ref("targetRoom").push().set(n).then((()=>{w.value=new WebSocket("wss://young-coast-22846.herokuapp.com/")}))})),m.ref().on("value",(e=>{var a;R.value&&e.val().publicRoom[j.value]&&(y.value=Object.entries(e.val().publicRoom[O.value]),(null==(a=e.val().onLinePublicRoom)?void 0:a[t])&&(k.value=Object.entries(e.val().onLinePublicRoom[t]).map((e=>e[1]))||{}))}))};const M={setup:()=>({onLine:k})},P={class:"\n      w-[180px]\n      h-onLine\n      mt-3\n      bg-gray-700\n      dark:bg-white\n      dark:shadow-md\n      rounded-lg\n      hidden\n      md:block\n    "},C={class:"text-center mt-3 text-white dark:text-gray-600"},S={class:"pl-3"},H=l("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full ml-auto mr-3"},null,-1);M.render=function(e,c,r,i,d,v){return t(),a("div",P,[l("p",C," 線上人數："+n(Object.values(i.onLine).length),1),l("ul",S,[(t(!0),a(s,null,o(i.onLine,(e=>(t(),a("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[l("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),u(" "+n(Object.keys(e).join(""))+" ",1),H])))),128))])])};const T={setup(){const t=e(!0);return{onLine:k,onLineHeight:t}}},K={class:"\n      md:hidden\n      w-full\n      sm:w-[500px]\n      flex\n      justify-between\n      bg-gray-800\n      dark:bg-gray-300\n      rounded-t-lg\n      px-3\n      py-2\n    "},W={class:"text-white dark:text-gray-600"},U={class:"pl-3 pt-2"},V={class:"pr-2"},z=l("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full mr-3 ml-auto"},null,-1);T.render=function(e,u,c,r,i,d){return t(),a("div",K,[l("p",W," 線上人數："+n(Object.values(r.onLine).length),1),l("button",{type:"button",class:"\n        bg-gray-500\n        hover:bg-gray-600\n        text-white text-sm\n        flex\n        rounded-lg\n        px-2\n        py-1\n      ",onClick:u[1]||(u[1]=e=>r.onLineHeight=!r.onLineHeight)}," 查看線上用戶 "),l("div",{class:["\n        absolute\n        right-6\n        top-16\n        bg-gray-500\n        rounded-lg\n        z-10\n        overflow-hidden\n      ",{"h-0":r.onLineHeight}]},[l("ul",U,[(t(!0),a(s,null,o(r.onLine,(e=>(t(),a("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[l("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),l("p",V,n(Object.keys(e).join("")),1),z])))),128))])],2)])};const F={setup(){const t=e(""),a=e(""),l=e(""),n=e(!1),s=c();return r(y,(()=>{setTimeout((()=>{var e,t;""!==(null==(e=l.value)?void 0:e.scrollTop)&&(null==(t=l.value)?void 0:t.scrollHeight)&&(l.value.scrollTop=l.value.scrollHeight+2e3)}),500)})),{data:y,checked:x,tempId:f,verify:n,scroll:l,editInput:t,editMessage:a,editData:(e,l,o)=>{if(o)t.value=""!==t.value?"":e,a.value=""!==a.value?"":l,n.value=!1;else{if(n.value=!0,l===a.value||""===a.value)return;const o={};o[b.value]={img:g.value,content:a.value,date:(new Date).getTime(),edit:!0},"/chatroom"===s.path?m.ref("chatroom").child(e).set(o):"/public"===s.path||"/private"===s.path?m.ref("publicRoom").child(j.value).child(e).set(o):m.ref("publicRoom").child(O.value).child(e).set(o),t.value="",a.value=""}},removeMessage:e=>{const t={};t[b.value]={content:""},"/chatroom"===s.path?m.ref("chatroom").child(e).set(t):"/public"===s.path||"/private"===s.path?m.ref("publicRoom").child(j.value).child(e).set(t):m.ref("publicRoom").child(O.value).child(e).set(t)}}}},J={class:"message"},N={key:0,class:"flex break-all mb-8"},_={class:"ml-1"},q={class:"text-white dark:text-gray-500 mb-1 relative"},A={class:"absolute w-52 bottom-1 ml-2 text-gray-400 text-xs"},B={class:"\n                relative\n                bg-gray-500\n                text-white text-lg\n                px-3\n                py-1\n                ml-2\n                rounded-lg\n              "},E=l("i",{class:"fas fa-2x fa-caret-left absolute text-gray-500"},null,-1),G={key:1,class:"text-right break-all mb-8"},Q={class:"mr-2 text-gray-400 text-xs"},X={key:0,class:"\n              inline-block\n              relative\n              bg-blue-900\n              text-white text-lg\n              px-3\n              py-1\n              mb-2\n              rounded-lg\n            "},Y=l("i",{class:"fas fa-2x fa-caret-right absolute text-blue-900"},null,-1),Z={class:"text-sm text-red-500 mb-2"},$={class:"fas fa-exclamation-triangle"},ee={class:"flex justify-end"},te={key:2,class:"text-center mb-6"},ae={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},le={key:3,class:"text-center mb-6"},ne={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},se={key:4,class:"text-center mb-6"},oe={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"};F.render=function(e,c,r,b,g,m){return t(),a("div",{ref:"scroll",class:["\n      w-full\n      sm:w-[500px]\n      h-chatroom\n      scroll\n      overflow-y-auto overflow-x-hidden\n      bg-gray-700\n      dark:bg-white\n      md:rounded-t-lg\n      p-4\n    ",b.checked?["scroll-track","scroll-thumb"]:"scroll"]},[l("ul",J,[(t(!0),a(s,null,o(b.data,(e=>(t(),a(s,{key:e[0]},[b.tempId.indexOf(e[0])<0&&""!==Object.values(e[1])[0].content?(t(),a("li",N,[l("img",{class:"w-[40px] h-[50px]",src:Object.values(e[1])[0].img,alt:"avatar"},null,8,["src"]),l("div",_,[l("div",q,[u(n(Object.keys(e[1]).join(""))+" ",1),l("span",A,n(new Date(Object.values(e[1])[0].date).toLocaleString())+n(Object.values(e[1])[0].edit?"(已編輯)":""),1)]),l("div",B,[E,u(" "+n(Object.values(e[1])[0].content),1)])])])):b.tempId.indexOf(e[0])>=0&&""!==Object.values(e[1])[0].content?(t(),a("li",G,[l("span",Q,n(new Date(Object.values(e[1])[0].date).toLocaleString())+n(Object.values(e[1])[0].edit?"(已編輯)":""),1),b.editInput!==e[0]?(t(),a("div",X,[Y,u(" "+n(Object.values(e[1])[0].content),1)])):i((t(),a("input",{key:1,type:"text",class:"mb-2 py-1 pl-2 rounded-lg dark:border-2 dark:border-gray-500","onUpdate:modelValue":c[1]||(c[1]=e=>b.editMessage=e),onKeydown:v((t=>b.editData(e[0],Object.values(e[1])[0].content,!1)),["enter"])},null,40,["onKeydown"])),[[d,b.editMessage]]),i(l("div",Z,[i(l("i",$,null,512),[[p,""===b.editMessage||b.editMessage===Object.values(e[1])[0].content]]),u(" "+n(b.editMessage===Object.values(e[1])[0].content?"尚未編輯新留言":""===b.editMessage?"編輯留言不可為空":""),1)],512),[[p,b.verify&&b.editInput===e[0]]]),l("div",ee,[l("button",{class:"\n                bg-gray-500\n                hover:bg-gray-800\n                text-white text-sm\n                flex\n                rounded-lg\n                px-2\n                py-1\n                mr-3\n              ",onClick:t=>b.editData(e[0],Object.values(e[1])[0].content,!0)},n(b.editInput!==e[0]?"編輯":"取消"),9,["onClick"]),b.editInput!==e[0]?(t(),a("button",{key:0,class:"\n                bg-gray-500\n                hover:bg-gray-800\n                text-white text-sm\n                rounded-lg\n                px-2\n                py-1\n              ",onClick:t=>b.removeMessage(e[0])}," 收回 ",8,["onClick"])):(t(),a("button",{key:1,class:"\n                bg-green-600\n                hover:bg-green-900\n                text-white text-sm\n                rounded-lg\n                px-2\n                py-1\n              ",onClick:t=>b.editData(e[0],Object.values(e[1])[0].content,!1)}," 確認 ",8,["onClick"]))])])):""===Object.values(e[1])[0].content&&Object.values(e[1])[0].status?(t(),a("li",te,[l("span",ae,n(Object.keys(e[1]).join(""))+"加入聊天室",1)])):""===Object.values(e[1])[0].content&&!1===Object.values(e[1])[0].status?(t(),a("li",le,[l("span",ne,n(Object.keys(e[1]).join(""))+"離開聊天室",1)])):(t(),a("li",se,[l("span",oe,n(Object.keys(e[1]).join(""))+"已收回訊息",1)]))],64)))),128))])],2)};const ue={setup(){const t=e("請輸入留言"),a=e(""),l=c();return{name:b,data:y,str:t,tempId:f,message:a,addData:()=>{if(""!==a.value){const e={};e[b.value]={img:g.value,content:a.value,date:(new Date).getTime(),edit:!1},a.value="","/chatroom"===l.path?m.ref("chatroom").push().set(e):"/public"===l.path||"/private"===l.path?m.ref("publicRoom").child(j.value).push().set(e):m.ref("publicRoom").child(O.value).push().set(e);const t=[...y.value].pop()[0];f.value.push(t),localStorage.setItem(b.value,JSON.stringify(f.value))}else t.value="請輸入留言"===t.value?"尚未輸入留言":"請輸入留言"}}}},ce={class:"\n      flex\n      justify-center\n      max-w-[500px]\n      w-full\n      bg-gray-800\n      dark:bg-gray-300\n      dark:shadow-lg\n      p-5\n      rounded-b-lg\n    "},re=l("i",{class:"far fa-paper-plane text-xl"},null,-1);ue.render=function(e,n,s,o,u,c){return t(),a("div",ce,[i(l("input",{type:"text",placeholder:o.str,"onUpdate:modelValue":n[1]||(n[1]=e=>o.message=e),onKeydown:n[2]||(n[2]=v((e=>o.addData()),["enter"])),class:"rounded-l-lg p-2 w-full"},null,40,["placeholder"]),[[d,o.message]]),l("button",{onClick:n[3]||(n[3]=(...e)=>o.addData&&o.addData(...e)),class:"bg-gray-500 hover:bg-gray-700 text-white rounded-r-lg px-3 py-1"},[re])])};export{M as _,T as a,F as b,ue as c,y as d,D as e,R as f,L as g,I as h,O as r,w};
