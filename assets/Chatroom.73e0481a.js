import{e,h as t,w as n,i as a,m as l,o as s,b as r,f as o,t as c,F as i,j as u,g as d,k as g,l as v,n as b,p}from"./vendor.1a76514e.js";import{n as x,i as m,p as y,c as h}from"./role.61617118.js";const f={setup(){const s=e(""),r=e(""),o=e(""),c=e(""),i=e(""),u=e(""),d=e("請輸入留言"),g=e(!1),v=e(!0),b=t(),p=e(JSON.parse(localStorage.getItem(x.value))||[]);let f;return n(s,(()=>{setTimeout((()=>{var e;u.value.scrollTop=(null==(e=u.value)?void 0:e.scrollHeight)+2e3}),500)})),a((()=>{if(x.value){const e={},t={};e[x.value]=m.value,t[x.value]={content:"",status:!0},y.ref("chatroom").push().set(t),y.ref("onLine").push().set(e),f=new WebSocket("wss://fierce-savannah-16080.herokuapp.com/"),y.ref().on("value",(e=>{s.value=Object.entries(e.val().chatroom),e.val().onLine&&(r.value=Object.entries(e.val().onLine).map((e=>e[1]))||{})}))}else b.push("/")})),l((()=>{null==f||f.close()})),{name:x,data:s,onLine:r,str:d,addData:()=>{if(""!==o.value){const e={};e[x.value]={img:m.value,content:o.value,date:(new Date).getTime(),edit:!1},o.value="",y.ref("chatroom").push().set(e);const t=[...s.value].pop()[0];p.value.push(t),localStorage.setItem(x.value,JSON.stringify(p.value))}else d.value="請輸入留言"===d.value?"尚未輸入留言":"請輸入留言"},message:o,tempId:p,editData:(e,t,n)=>{if(n)c.value=""!==c.value?"":e,i.value=""!==i.value?"":t,g.value=!1;else{if(g.value=!0,t===i.value||""===i.value)return;const n={};n[x.value]={img:m.value,content:i.value,date:(new Date).getTime(),edit:!0},y.ref("chatroom").child(e).set(n),c.value="",i.value=""}},editInput:c,editMessage:i,removeMessage:e=>{const t={};t[x.value]={content:""},y.ref("chatroom").child(e).set(t)},verify:g,checked:h,scroll:u,onLineHeight:v}}},k={class:"flex justify-center"},j={class:"\n        w-[180px]\n        h-onLine\n        mt-3\n        bg-gray-700\n        dark:bg-white\n        dark:shadow-md\n        rounded-lg\n        hidden\n        md:block\n      "},w={class:"text-center mt-3 text-white dark:text-gray-600"},O={class:"pl-3"},L=o("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full ml-auto mr-3"},null,-1),D={class:"\n        flex\n        justify-center\n        items-center\n        flex-col\n        bg-gray-500\n        dark:bg-gray-200\n        relative\n        p-3\n      "},I={class:"\n          md:hidden\n          w-full\n          sm:w-[500px]\n          flex\n          justify-between\n          bg-gray-800\n          dark:bg-gray-300\n          rounded-t-lg\n          px-3\n          py-2\n        "},M={class:"text-white dark:text-gray-600"},C={class:"pl-3 pt-2"},S={class:"pr-2"},H=o("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full mr-3 ml-auto"},null,-1),T={class:"message"},K={key:0,class:"flex break-all mb-8"},J={class:"ml-1"},N={class:"text-white dark:text-gray-500 mb-1 relative"},U={class:"absolute w-52 bottom-1 ml-2 text-gray-400 text-xs"},V={class:"\n                    relative\n                    bg-gray-500\n                    text-white text-lg\n                    px-3\n                    py-1\n                    ml-2\n                    rounded-lg\n                  "},z=o("i",{class:"fas fa-2x fa-caret-left absolute text-gray-500"},null,-1),F={key:1,class:"text-right break-all mb-8"},W={class:"mr-2 text-gray-400 text-xs"},q={key:0,class:"\n                  inline-block\n                  relative\n                  bg-blue-900\n                  text-white text-lg\n                  px-3\n                  py-1\n                  mb-2\n                  rounded-lg\n                "},A=o("i",{class:"fas fa-2x fa-caret-right absolute text-blue-900"},null,-1),B={class:"text-sm text-red-500 mb-2"},E={class:"fas fa-exclamation-triangle"},G={class:"flex justify-end"},P={key:2,class:"text-center mb-6"},Q={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},R={key:3,class:"text-center mb-6"},X={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},Y={key:4,class:"text-center mb-6"},Z={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},$={class:"\n          flex\n          justify-center\n          max-w-[500px]\n          w-full\n          bg-gray-800\n          dark:bg-gray-300\n          dark:shadow-lg\n          p-5\n          rounded-b-lg\n        "},_=o("i",{class:"far fa-paper-plane text-xl"},null,-1);f.render=function(e,t,n,a,l,x){return s(),r("div",k,[o("div",j,[o("p",w," 線上人數："+c(Object.values(a.onLine).length),1),o("ul",O,[(s(!0),r(i,null,u(a.onLine,(e=>(s(),r("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[o("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),b(" "+c(Object.keys(e).join(""))+" ",1),L])))),128))])]),o("div",D,[o("div",I,[o("p",M," 線上人數："+c(Object.values(a.onLine).length),1),o("button",{type:"button",class:"\n            bg-gray-500\n            hover:bg-gray-600\n            text-white text-sm\n            flex\n            rounded-lg\n            px-2\n            py-1\n          ",onClick:t[1]||(t[1]=e=>a.onLineHeight=!a.onLineHeight)}," 查看線上用戶 "),o("div",{class:["\n            absolute\n            right-6\n            top-16\n            bg-gray-500\n            rounded-lg\n            z-10\n            overflow-hidden\n          ",{"h-0":a.onLineHeight}]},[o("ul",C,[(s(!0),r(i,null,u(a.onLine,(e=>(s(),r("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[o("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),o("p",S,c(Object.keys(e).join("")),1),H])))),128))])],2)]),o("div",{ref:"scroll",class:["\n          w-full\n          sm:w-[500px]\n          h-chatroom\n          scroll\n          overflow-y-auto overflow-x-hidden\n          bg-gray-700\n          dark:bg-white\n          md:rounded-t-lg\n          p-4\n        ",a.checked?["scroll-track","scroll-thumb"]:"scroll"]},[o("ul",T,[(s(!0),r(i,null,u(a.data,(e=>(s(),r(i,{key:e[0]},[a.tempId.indexOf(e[0])<0&&""!==Object.values(e[1])[0].content?(s(),r("li",K,[o("img",{class:"w-[40px] h-[50px]",src:Object.values(e[1])[0].img,alt:"avatar"},null,8,["src"]),o("div",J,[o("div",N,[b(c(Object.keys(e[1]).join(""))+" ",1),o("span",U,c(new Date(Object.values(e[1])[0].date).toLocaleString())+c(Object.values(e[1])[0].edit?"(已編輯)":""),1)]),o("div",V,[z,b(" "+c(Object.values(e[1])[0].content),1)])])])):a.tempId.indexOf(e[0])>=0&&""!==Object.values(e[1])[0].content?(s(),r("li",F,[o("span",W,c(new Date(Object.values(e[1])[0].date).toLocaleString())+c(Object.values(e[1])[0].edit?"(已編輯)":""),1),a.editInput!==e[0]?(s(),r("div",q,[A,b(" "+c(Object.values(e[1])[0].content),1)])):d((s(),r("input",{key:1,type:"text",class:"\n                  mb-2\n                  py-1\n                  pl-2\n                  rounded-lg\n                  dark:border-2 dark:border-gray-500\n                ","onUpdate:modelValue":t[2]||(t[2]=e=>a.editMessage=e),onKeydown:v((t=>a.editData(e[0],Object.values(e[1])[0].content,!1)),["enter"])},null,40,["onKeydown"])),[[g,a.editMessage]]),d(o("div",B,[d(o("i",E,null,512),[[p,""===a.editMessage||a.editMessage===Object.values(e[1])[0].content]]),b(" "+c(a.editMessage===Object.values(e[1])[0].content?"尚未編輯新留言":""===a.editMessage?"編輯留言不可為空":""),1)],512),[[p,a.verify&&a.editInput===e[0]]]),o("div",G,[o("button",{class:"\n                    bg-gray-500\n                    hover:bg-gray-800\n                    text-white text-sm\n                    flex\n                    rounded-lg\n                    px-2\n                    py-1\n                    mr-3\n                  ",onClick:t=>a.editData(e[0],Object.values(e[1])[0].content,!0)},c(a.editInput!==e[0]?"編輯":"取消"),9,["onClick"]),a.editInput!==e[0]?(s(),r("button",{key:0,class:"\n                    bg-gray-500\n                    hover:bg-gray-800\n                    text-white text-sm\n                    rounded-lg\n                    px-2\n                    py-1\n                  ",onClick:t=>a.removeMessage(e[0])}," 收回 ",8,["onClick"])):(s(),r("button",{key:1,class:"\n                    bg-green-600\n                    hover:bg-green-900\n                    text-white text-sm\n                    rounded-lg\n                    px-2\n                    py-1\n                  ",onClick:t=>a.editData(e[0],Object.values(e[1])[0].content,!1)}," 確認 ",8,["onClick"]))])])):""===Object.values(e[1])[0].content&&Object.values(e[1])[0].status?(s(),r("li",P,[o("span",Q,c(Object.keys(e[1]).join(""))+"加入聊天室",1)])):""===Object.values(e[1])[0].content&&!1===Object.values(e[1])[0].status?(s(),r("li",R,[o("span",X,c(Object.keys(e[1]).join(""))+"離開聊天室",1)])):(s(),r("li",Y,[o("span",Z,c(Object.keys(e[1]).join(""))+"已收回訊息",1)]))],64)))),128))])],2),o("div",$,[d(o("input",{type:"text",placeholder:a.str,"onUpdate:modelValue":t[3]||(t[3]=e=>a.message=e),onKeydown:t[4]||(t[4]=v((e=>a.addData()),["enter"])),class:"rounded-l-lg p-2 w-full"},null,40,["placeholder"]),[[g,a.message]]),o("button",{onClick:t[5]||(t[5]=(...e)=>a.addData&&a.addData(...e)),class:"\n            bg-gray-500\n            hover:bg-gray-700\n            text-white\n            rounded-r-lg\n            px-3\n            py-1\n          "},[_])])])])};export default f;
