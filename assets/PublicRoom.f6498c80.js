import{e,h as t,w as n,i as l,m as a,o as s,b as o,f as c,t as r,F as i,j as u,g as d,k as g,l as b,n as p,p as v}from"./vendor.c5ff6843.js";import{n as x,u as m,i as y,c as h}from"./role.2924c011.js";const f={setup(){const s=e(""),o=e(""),c=e(""),r=e(""),i=e(""),u=e(""),d=e("請輸入留言"),g=e(!1),b=e(!0),p=t(),v=e(JSON.parse(localStorage.getItem(x.value))||[]);let f,k,j=!0;let w;return n(s,(()=>{setTimeout((()=>{var e;u.value.scrollTop=(null==(e=u.value)?void 0:e.scrollHeight)+2e3}),500)})),l((()=>{if(x.value){j=!0;const e={},t={};m.ref("publicRoom").push().set(1),m.ref("publicRoom").once("value",(t=>{f=Object.keys(t.val()).pop(),e[x.value]={content:"",status:!0},m.ref("publicRoom").child(f).push().set(e)})),m.ref("onLinePublicRoom").push().set(1),m.ref("onLinePublicRoom").once("value",(e=>{w=Object.keys(e.val()).pop(),t[x.value]=y.value,m.ref("onLinePublicRoom").child(w).push().set(t)})),k=new WebSocket("wss://vast-hollows-31339.herokuapp.com/"),m.ref().on("value",(e=>{j&&(s.value=Object.entries(e.val().publicRoom[f]),e.val().onLinePublicRoom[w]&&(o.value=Object.entries(e.val().onLinePublicRoom[w]).map((e=>e[1]))||{}))}))}else p.push("/"),m.off("value")})),a((()=>{j=!1,null==k||k.close()})),{name:x,data:s,onLine:o,str:d,addData:()=>{if(""!==c.value){const e={};e[x.value]={img:y.value,content:c.value,date:(new Date).getTime(),edit:!1},c.value="",m.ref("publicRoom").child(f).push().set(e);const t=[...s.value].pop()[0];v.value.push(t),localStorage.setItem(x.value,JSON.stringify(v.value))}else d.value="請輸入留言"===d.value?"尚未輸入留言":"請輸入留言"},message:c,tempId:v,editData:(e,t,n)=>{if(n)r.value=""!==r.value?"":e,i.value=""!==i.value?"":t,g.value=!1;else{if(g.value=!0,t===i.value||""===i.value)return;const n={};n[x.value]={img:y.value,content:i.value,date:(new Date).getTime(),edit:!0},m.ref("publicRoom").child(f).child(e).set(n),r.value="",i.value=""}},editInput:r,editMessage:i,removeMessage:e=>{const t={};t[x.value]={content:""},m.ref("publicRoom").child(f).child(e).set(t)},verify:g,checked:h,scroll:u,onLineHeight:b}}},k={class:"flex justify-center"},j={class:"\n        w-[180px]\n        h-onLine\n        mt-3\n        bg-gray-700\n        dark:bg-white\n        dark:shadow-md\n        rounded-lg\n        hidden\n        md:block\n      "},w={class:"text-center mt-3 text-white dark:text-gray-600"},O={class:"pl-3"},L=c("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full ml-auto mr-3"},null,-1),D={class:"\n        flex\n        justify-center\n        items-center\n        flex-col\n        bg-gray-500\n        dark:bg-gray-200\n        relative\n        p-3\n      "},R={class:"\n          md:hidden\n          w-full\n          sm:w-[500px]\n          flex\n          justify-between\n          bg-gray-800\n          dark:bg-gray-300\n          rounded-t-lg\n          px-3\n          py-2\n        "},I={class:"text-white dark:text-gray-600"},M={class:"pl-3 pt-2"},C={class:"pr-2"},S=c("div",{class:"w-[12px] h-[12px] bg-green-500 rounded-full mr-3 ml-auto"},null,-1),H={class:"message"},P={key:0,class:"flex break-all mb-8"},T={class:"ml-1"},K={class:"text-white dark:text-gray-500 mb-1 relative"},J={class:"absolute w-52 bottom-1 ml-2 text-gray-400 text-xs"},N={class:"\n                    relative\n                    bg-gray-500\n                    text-white text-lg\n                    px-3\n                    py-1\n                    ml-2\n                    rounded-lg\n                  "},U=c("i",{class:"fas fa-2x fa-caret-left absolute text-gray-500"},null,-1),V={key:1,class:"text-right break-all mb-8"},z={class:"mr-2 text-gray-400 text-xs"},F={key:0,class:"\n                  inline-block\n                  relative\n                  bg-blue-900\n                  text-white text-lg\n                  px-3\n                  py-1\n                  mb-2\n                  rounded-lg\n                "},W=c("i",{class:"fas fa-2x fa-caret-right absolute text-blue-900"},null,-1),q={class:"text-sm text-red-500 mb-2"},A={class:"fas fa-exclamation-triangle"},B={class:"flex justify-end"},E={key:2,class:"text-center mb-6"},G={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},Q={key:3,class:"text-center mb-6"},X={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},Y={key:4,class:"text-center mb-6"},Z={class:"bg-gray-400 px-2 py-1 text-sm text-gray-100 rounded-lg"},$={class:"\n          flex\n          justify-center\n          max-w-[500px]\n          w-full\n          bg-gray-800\n          dark:bg-gray-300\n          dark:shadow-lg\n          p-5\n          rounded-b-lg\n        "},_=c("i",{class:"far fa-paper-plane text-xl"},null,-1);f.render=function(e,t,n,l,a,x){return s(),o("div",k,[c("div",j,[c("p",w," 線上人數："+r(Object.values(l.onLine).length),1),c("ul",O,[(s(!0),o(i,null,u(l.onLine,(e=>(s(),o("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[c("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),p(" "+r(Object.keys(e).join(""))+" ",1),L])))),128))])]),c("div",D,[c("div",R,[c("p",I," 線上人數："+r(Object.values(l.onLine).length),1),c("button",{type:"button",class:"\n            bg-gray-500\n            hover:bg-gray-600\n            text-white text-sm\n            flex\n            rounded-lg\n            px-2\n            py-1\n          ",onClick:t[1]||(t[1]=e=>l.onLineHeight=!l.onLineHeight)}," 查看線上用戶 "),c("div",{class:["\n            absolute\n            right-6\n            top-16\n            bg-gray-500\n            rounded-lg\n            z-10\n            overflow-hidden\n          ",{"h-0":l.onLineHeight}]},[c("ul",M,[(s(!0),o(i,null,u(l.onLine,(e=>(s(),o("li",{class:"flex items-center mb-2 text-white dark:text-gray-600",key:e},[c("img",{class:"w-[30px] h-[40px] mr-1",src:Object.values(e).join(""),alt:""},null,8,["src"]),c("p",C,r(Object.keys(e).join("")),1),S])))),128))])],2)]),c("div",{ref:"scroll",class:["\n          w-full\n          sm:w-[500px]\n          h-chatroom\n          scroll\n          overflow-y-auto overflow-x-hidden\n          bg-gray-700\n          dark:bg-white\n          md:rounded-t-lg\n          p-4\n        ",l.checked?["scroll-track","scroll-thumb"]:"scroll"]},[c("ul",H,[(s(!0),o(i,null,u(l.data,(e=>(s(),o(i,{key:e[0]},[l.tempId.indexOf(e[0])<0&&""!==Object.values(e[1])[0].content?(s(),o("li",P,[c("img",{class:"w-[40px] h-[50px]",src:Object.values(e[1])[0].img,alt:"avatar"},null,8,["src"]),c("div",T,[c("div",K,[p(r(Object.keys(e[1]).join(""))+" ",1),c("span",J,r(new Date(Object.values(e[1])[0].date).toLocaleString())+r(Object.values(e[1])[0].edit?"(已編輯)":""),1)]),c("div",N,[U,p(" "+r(Object.values(e[1])[0].content),1)])])])):l.tempId.indexOf(e[0])>=0&&""!==Object.values(e[1])[0].content?(s(),o("li",V,[c("span",z,r(new Date(Object.values(e[1])[0].date).toLocaleString())+r(Object.values(e[1])[0].edit?"(已編輯)":""),1),l.editInput!==e[0]?(s(),o("div",F,[W,p(" "+r(Object.values(e[1])[0].content),1)])):d((s(),o("input",{key:1,type:"text",class:"\n                  mb-2\n                  py-1\n                  pl-2\n                  rounded-lg\n                  dark:border-2 dark:border-gray-500\n                ","onUpdate:modelValue":t[2]||(t[2]=e=>l.editMessage=e),onKeydown:b((t=>l.editData(e[0],Object.values(e[1])[0].content,!1)),["enter"])},null,40,["onKeydown"])),[[g,l.editMessage]]),d(c("div",q,[d(c("i",A,null,512),[[v,""===l.editMessage||l.editMessage===Object.values(e[1])[0].content]]),p(" "+r(l.editMessage===Object.values(e[1])[0].content?"尚未編輯新留言":""===l.editMessage?"編輯留言不可為空":""),1)],512),[[v,l.verify&&l.editInput===e[0]]]),c("div",B,[c("button",{class:"\n                    bg-gray-500\n                    hover:bg-gray-800\n                    text-white text-sm\n                    flex\n                    rounded-lg\n                    px-2\n                    py-1\n                    mr-3\n                  ",onClick:t=>l.editData(e[0],Object.values(e[1])[0].content,!0)},r(l.editInput!==e[0]?"編輯":"取消"),9,["onClick"]),l.editInput!==e[0]?(s(),o("button",{key:0,class:"\n                    bg-gray-500\n                    hover:bg-gray-800\n                    text-white text-sm\n                    rounded-lg\n                    px-2\n                    py-1\n                  ",onClick:t=>l.removeMessage(e[0])}," 收回 ",8,["onClick"])):(s(),o("button",{key:1,class:"\n                    bg-green-600\n                    hover:bg-green-900\n                    text-white text-sm\n                    rounded-lg\n                    px-2\n                    py-1\n                  ",onClick:t=>l.editData(e[0],Object.values(e[1])[0].content,!1)}," 確認 ",8,["onClick"]))])])):""===Object.values(e[1])[0].content&&Object.values(e[1])[0].status?(s(),o("li",E,[c("span",G,r(Object.keys(e[1]).join(""))+"加入聊天室",1)])):""===Object.values(e[1])[0].content&&!1===Object.values(e[1])[0].status?(s(),o("li",Q,[c("span",X,r(Object.keys(e[1]).join(""))+"離開聊天室",1)])):(s(),o("li",Y,[c("span",Z,r(Object.keys(e[1]).join(""))+"已收回訊息",1)]))],64)))),128))])],2),c("div",$,[d(c("input",{type:"text",placeholder:l.str,"onUpdate:modelValue":t[3]||(t[3]=e=>l.message=e),onKeydown:t[4]||(t[4]=b((e=>l.addData()),["enter"])),class:"rounded-l-lg p-2 w-full"},null,40,["placeholder"]),[[g,l.message]]),c("button",{onClick:t[5]||(t[5]=(...e)=>l.addData&&l.addData(...e)),class:"\n            bg-gray-500\n            hover:bg-gray-700\n            text-white\n            rounded-r-lg\n            px-3\n            py-1\n          "},[_])])])])};export default f;
