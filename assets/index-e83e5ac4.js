import{f as e,A as ee,O as te,d as B,E as A,u as ne,l as w,D as oe,P as ae,U as se,k as E,_ as V,H as re,ab as ie,z as le,ag as ce,r as d,o as b,a as D,h as o,i as u,e as H,w as t,F as I,b as ue,g as c,t as N,a0 as de,a1 as _e,ah as fe,ai as pe,S as me,p as he,q as ve,s as ge}from"./index-6404fce2.js";import{M as we}from"./index-23cadc71.js";import{i as be}from"./IsPcMobile-9614ff5a.js";var ye={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z"}}]},name:"menu-unfold",theme:"outlined"};const ke=ye;function j(a){for(var i=1;i<arguments.length;i++){var s=arguments[i]!=null?Object(arguments[i]):{},_=Object.keys(s);typeof Object.getOwnPropertySymbols=="function"&&(_=_.concat(Object.getOwnPropertySymbols(s).filter(function(f){return Object.getOwnPropertyDescriptor(s,f).enumerable}))),_.forEach(function(f){Oe(a,f,s[f])})}return a}function Oe(a,i,s){return i in a?Object.defineProperty(a,i,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[i]=s,a}var P=function(i,s){var _=j({},i,s.attrs);return e(ee,j({},_,{icon:ke}),null)};P.displayName="MenuUnfoldOutlined";P.inheritAttrs=!1;const Se=P,Pe=te("drawer",{state:()=>({opendrawer:!1,checked:!1}),actions:{setopendrawer(){this.opendrawer=!this.opendrawer},setchecked(a){this.checked=a}}}),y=a=>(he("data-v-96167046"),a=a(),ve(),a),Ue={class:"HeaderTabar"},Ce={class:"leftspoabs"},ze={class:"rightsUSer"},Me={class:"rigUserBtns"},xe=y(()=>o("i",{class:"iconfont icon-ziti icon"},null,-1)),Te=[xe],Re=y(()=>o("li",{class:"Usericon"},[o("i",{class:"iconfont icon-tongzhi icon"})],-1)),Ae=y(()=>o("li",{class:"Usericon"},[o("i",{class:"iconfont icon-sousuo icon"})],-1)),Ee=y(()=>o("i",{class:"iconfont icon-pifu icon"},null,-1)),Ve=[Ee],De={class:"dropdmon"},He=["src"],Ie=B({name:"HeaderTabar"}),Ne=B({...Ie,setup(a){const{locale:i}=A(),s=be(),_=ne(),f=Pe(),k=w(!1),U=w("默认"),C=oe(),{ThemeConfig:z,isMobileNav:$}=ae(C),F=r=>{const n=document.documentElement;switch(r){case"大号":n.style.setProperty("--wangwang-FontSize","18px");break;case"默认":n.style.setProperty("--wangwang-FontSize","14px");break;case"小号":n.style.setProperty("--wangwang-FontSize","12px");break}},L=()=>{(s.isAndroid||s.isPhone)&&($.value=!0)},M=w(),q=r=>{i.value=r,M.value.setThemeConfig()},W=se(),G=E(()=>V(()=>import("./index-174ea722.js"),["./index-174ea722.js","./index-6404fce2.js","./index-c9caafb2.css","./index-23cadc71.js","./IsPcMobile-9614ff5a.js","./index-807c6e6d.css"],import.meta.url)),J=E(()=>V(()=>import("./index-55b240ac.js"),["./index-55b240ac.js","./index-6404fce2.js","./index-c9caafb2.css","./useState-01a6be5a.js","./index-c86d34b7.css"],import.meta.url)),{t:x}=A(),O=w([{path:"/",redirect:"/home",meta:{title:x("message.routes.home")}}]),Q=({key:r})=>{if(r.includes("http"))return window.open(r,"_blank");r==="/login"&&me.clear(),_.push(r)},S=re();ie([()=>S.fullPath,()=>C.ThemeConfig.internationalization],()=>{T()});const T=()=>{O.value=[{path:"/",redirect:"/home",meta:{title:x("message.routes.home")}}],X()};le(()=>{T()});const X=()=>{const r=S.fullPath.split("/").filter(h=>h!==""),n=ce.getRoutes();let m="";S.fullPath!=="/home"&&r.forEach(h=>{m=m+"/"+h;for(let p=0;p<n.length;p++)m===n[p].path&&O.value.push(n[p])})};return(r,n)=>{const m=d("router-link"),h=d("a-breadcrumb-item"),p=d("a-breadcrumb"),v=d("a-menu-item"),Y=d("a-menu"),Z=d("a-dropdown"),g=d("a-select-option"),R=d("a-select"),K=d("a-modal");return b(),D(I,null,[o("div",Ue,[o("div",Ce,[e(u(Se),{onClick:L}),u(s).isPc?(b(),H(de,{key:0,name:"el-fade-in-linear"},{default:t(()=>[e(p,{class:"transition-box"},{default:t(()=>[(b(!0),D(I,null,ue(O.value,l=>(b(),H(h,{key:l.path},{default:t(()=>[e(m,{to:l.path},{default:t(()=>[c(N(r.$t(l.meta.title)),1)]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})]),_:1})):_e("",!0)]),o("div",ze,[o("ul",Me,[o("li",{class:"Usericon",onClick:n[0]||(n[0]=l=>k.value=!0)},Te),Re,Ae,o("li",{class:"Usericon",onClick:n[1]||(n[1]=(...l)=>u(f).setopendrawer&&u(f).setopendrawer(...l))},Ve)]),o("div",De,[e(Z,null,{overlay:t(()=>[e(Y,{onClick:Q},{default:t(()=>[e(v,{key:"/home"},{default:t(()=>[c("首页")]),_:1}),e(v,{key:""},{default:t(()=>[c("个人中心")]),_:1}),e(v,{key:"https://gitee.com/mr-yichen/Vue-futuret-Admin"},{default:t(()=>[c("我的仓库")]),_:1}),e(v,{key:"404"},{default:t(()=>[c("404")]),_:1}),e(v,{key:"/login"},{default:t(()=>[c("退出登录")]),_:1})]),_:1})]),default:t(()=>[o("span",{class:"ant-dropdown-link",onClick:n[2]||(n[2]=fe(()=>{},["prevent"]))},[o("img",{src:u(we).avavr,alt:"",class:"imgAvavr"},null,8,He),c(" "+N(u(W).userinfoRouter)+" ",1),e(u(pe))])]),_:1})])])]),e(u(J)),e(u(G),{ref_key:"dreweir",ref:M},null,512),e(K,{open:k.value,"onUpdate:open":n[5]||(n[5]=l=>k.value=l),title:"字体设置"},{footer:t(()=>[]),default:t(()=>[o("p",null,[e(R,{value:U.value,"onUpdate:value":n[3]||(n[3]=l=>U.value=l),style:{width:"100px"},onChange:F},{default:t(()=>[e(g,{value:"大号"},{default:t(()=>[c("大号")]),_:1}),e(g,{value:"默认"},{default:t(()=>[c("默认")]),_:1}),e(g,{value:"小号"},{default:t(()=>[c("小号")]),_:1})]),_:1},8,["value"]),e(R,{value:u(z).internationalization,"onUpdate:value":n[4]||(n[4]=l=>u(z).internationalization=l),style:{width:"100px"},onChange:q},{default:t(()=>[e(g,{value:"en"},{default:t(()=>[c("英文")]),_:1}),e(g,{value:"zh-cn"},{default:t(()=>[c("简体中文")]),_:1})]),_:1},8,["value"])])]),_:1},8,["open"])],64)}}});const je=ge(Ne,[["__scopeId","data-v-96167046"]]),Le=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));export{Pe as d,Le as i};
