import{n as s,g as a,i as n,r as e,_ as t,a as r,b as l,d as m,e as o,f as g,h as c,j as d,k as p,l as i,m as u,o as x}from"./role.873164bd.js";import{e as b,j as v,w as h,k as w,o as k,b as f,g as y,F as C,l as j,h as G,m as A}from"./vendor.d3f60c9a.js";const U={setup(){const k=b([]),f=b("請輸入暱稱"),y=b(!0),C=v(),{updateAvatar:j,updateGender:G,getImg:A}=e(),U=()=>{k.value=[];for(let s=1;s<7;s+=1){const n=`/src/assets/img/${a.value}${s}.png`,e={"/src/assets/img/man1.png":t,"/src/assets/img/man2.png":r,"/src/assets/img/man3.png":l,"/src/assets/img/man4.png":m,"/src/assets/img/man5.png":o,"/src/assets/img/man6.png":g,"/src/assets/img/woman1.png":c,"/src/assets/img/woman2.png":d,"/src/assets/img/woman3.png":p,"/src/assets/img/woman4.png":i,"/src/assets/img/woman5.png":u,"/src/assets/img/woman6.png":x};k.value.push(e[n].default)}};return h(a,(()=>U())),h(s,(()=>{y.value=""===s.value})),w((()=>{A(),U(),s.value=""})),{gender:a,name:s,inputName:y,imgUrl:n,imgs:k,str:f,updateAvatar:j,updateGender:G,enterChatroom:()=>{""!==s.value?C.push("/chatroom"):f.value="請輸入暱稱"===f.value?"尚未輸入暱稱":"請輸入暱稱"}}}},N={class:"\n      max-w-[850px]\n      mx-auto\n      sm:pt-[150px]\n      bg-gray-500\n      dark:bg-gray-200\n      py-3\n    "},$={class:"\n        grid grid-cols-12\n        bg-gray-700\n        dark:bg-white\n        dark:shadow-md\n        lg:p-10\n        sm:p-5\n        px-3\n        pt-5\n        mx-3\n        rounded-lg\n      "},F={class:"sm:col-span-7 col-span-12 sm:mb-0 mb-10"},I=y("h2",{class:"\n            text-center text-white\n            dark:text-gray-500\n            sm:text-3xl\n            text-2xl\n            font-black\n            mb-3\n          "}," 選擇頭像 ",-1),V={class:"grid sm:grid-cols-9 grid-cols-10 gap-3"},_={class:"sm:col-span-5 col-span-12 sm:pb-0 pb-5"},q=y("h2",{class:"\n            text-white\n            dark:text-gray-500\n            text-center\n            sm:text-3xl\n            text-2xl\n            font-black\n            mb-1\n          "}," 基本資料 ",-1),z={class:"flex justify-center mb-5"},B={class:"flex justify-center"};U.render=function(s,a,n,e,t,r){return k(),f("div",N,[y("div",$,[y("div",F,[I,y("div",V,[(k(!0),f(C,null,j(e.imgs,((s,a)=>(k(),f("img",{key:s,src:s,alt:e.gender,class:"\n              cursor-pointer\n              w-[120px]\n              h-[140px]\n              sm:col-span-3\n              col-span-5\n              mx-auto\n              hover:scale-110\n            ",onClick:s=>e.updateAvatar(a+1)},null,8,["src","alt","onClick"])))),128))])]),y("div",_,[q,y("img",{src:e.imgUrl,alt:"avatar",class:"w-[150px] h-[180px] mx-auto mb-3"},null,8,["src"]),y("div",z,[y("button",{class:"\n              bg-blue-700\n              hover:bg-blue-900\n              text-white\n              rounded-lg\n              active:ring-4\n              p-2\n              mr-20\n            ",onClick:a[1]||(a[1]=s=>e.updateGender("man"))}," 男性 "),y("button",{class:"bg-red-400 hover:bg-red-600 text-white rounded-lg p-2",onClick:a[2]||(a[2]=s=>e.updateGender("woman"))}," 女性 ")]),y("div",B,[G(y("input",{type:"text",placeholder:e.str,class:"\n              rounded-l-lg\n              p-2\n              lg:w-max\n              sm:w-6/12\n              w-7/12\n              dark:border-2 dark:border-r-0 dark:border-gray-500\n            ","onUpdate:modelValue":a[3]||(a[3]=s=>e.name=s)},null,8,["placeholder"]),[[A,e.name]]),y("button",{class:["bg-gray-500 text-white rounded-r-lg p-2",e.inputName?["disabled:opacity-50","cursor-not-allowed"]:"hover:bg-gray-800"],onClick:a[4]||(a[4]=(...s)=>e.enterChatroom&&e.enterChatroom(...s))}," 進入聊天室 ",2)])])])])};export default U;
