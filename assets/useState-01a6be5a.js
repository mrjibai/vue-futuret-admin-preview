import{f as m,A as g,u as O,H as v,D as b,G as y,c as P,S as i}from"./index-6404fce2.js";var C={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"};const j=C;function d(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?Object(arguments[t]):{},r=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(a){return Object.getOwnPropertyDescriptor(o,a).enumerable}))),r.forEach(function(a){w(e,a,o[a])})}return e}function w(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var c=function(t,o){var r=d({},t,o.attrs);return m(g,d({},r,{icon:j}),null)};c.displayName="RedoOutlined";c.inheritAttrs=!1;const D=c;function V(){const e=O(),t=v(),o=b(),r=y(),a=n=>{let s=i.get("RouterslistSeeion")||[];s=s.filter(l=>l.path!==n.path),r.RouterSessionlist=s,i.set("RouterslistSeeion",s)},f=()=>{o.setKeyRoute(),e.push({path:t.fullPath,query:t.query})},h=n=>{a(n),e.replace(u.value[u.value.length-1].path)},p=n=>{let s=i.get("RouterslistSeeion")||[];s=s.filter(l=>l.path===n.path||l.path==="/home"),r.RouterSessionlist=s,i.set("RouterslistSeeion",s)},R=()=>{p({path:"/home",children:[]}),e.replace(u.value[u.value.length-1].path)},S=n=>{o.setKeyCompont("RouterLaMain"),e.push(n.path)},u=P(()=>r.RouterSessionlist);return{reloads:f,RSclose:h,removes:p,clears:R,fullscreen:S,listRouter:u}}export{D as R,V as U};
