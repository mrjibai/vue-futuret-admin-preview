import{a as X}from"./index-23cadc71.js";import{d as L,C as w,l as N,r as o,o as h,a as U,f as e,w as t,h as y,g as c,t as Z,F as ee,b as te,e as x,p as ae,q as le,s as oe}from"./index-6404fce2.js";const ne=b=>(ae("data-v-54c5c157"),b=b(),le(),b),ie={class:"DicManagement"},se={class:"sercarINput"},de=ne(()=>y("span",{class:"ml10"},"字段",-1)),ce={class:"dialog-footer"},ue=L({name:"DicManagement"}),pe=L({...ue,setup(b){let V=X;const C=w({filterName:""}),i=w({dicManagementList:[],Tips:"添加字典"}),v=N(!1),u=N(!1),n=w({DicName:"",column:"",DicStatus:"",DicDescription:"",createTime:new Date().toLocaleString(),list:[]}),D=()=>{v.value=!1,i.dicManagementList=V};D();const k=()=>{v.value=!0,setTimeout(()=>{D()},1e3)},M=s=>{i.Tips="修改字典",E(),u.value=!0},T=s=>{v.value=!0,setTimeout(()=>{D()},1e3)},p=w({currentPage:1,total:V.length,pageSize:10}),$=s=>{p.pageSize=s},I=s=>{p.currentPage=s},B=()=>{u.value=!1;for(const s in n)n[s]=""},E=()=>{i.Tips==="修改字典"&&(i.dicManagementList.column==="SYS_UERINFO"||(i.dicManagementList.list=[{id:Math.random(),label:"role",value:"admin"},{id:Math.random(),label:"role",value:"common"},{id:Math.random(),label:"roleName",value:"超级管理员"},{id:Math.random(),label:"roleName",value:"普通用户"}]))},P=()=>{i.dicManagementList.list.push({id:Math.random(),label:"",value:""})},F=s=>{i.dicManagementList.list.splice(s,1)},R=()=>{v.value=!0,u.value=!1,setTimeout(()=>{D()},1e3)},q=()=>{u.value=!0,i.Tips="新增部门"};return(s,l)=>{const f=o("a-input"),d=o("a-button"),A=o("vxe-toolbar"),r=o("vxe-column"),j=o("a-tag"),H=o("a-popconfirm"),K=o("vxe-table"),O=o("a-spin"),Y=o("a-pagination"),g=o("a-form-item"),m=o("a-col"),G=o("a-switch"),J=o("a-tooltip"),z=o("a-row"),Q=o("a-form"),W=o("a-modal");return h(),U("div",ie,[e(A,null,{buttons:t(()=>[y("div",se,[e(f,{modelValue:C.filterName,"onUpdate:modelValue":l[0]||(l[0]=a=>C.filterName=a),type:"search",placeholder:"请输入字典名称",onKeyup:k},null,8,["modelValue"]),e(d,{type:"primary",ghost:"",onClick:k},{default:t(()=>[c("查询")]),_:1}),e(d,{type:"primary",onClick:q},{default:t(()=>[c("新增字典")]),_:1})])]),_:1}),e(O,{spinning:v.value},{default:t(()=>[e(K,{border:"none","show-header-overflow":"","show-overflow":"","row-config":{isHover:!0},data:i.dicManagementList,height:"600","tree-config":{}},{default:t(()=>[e(r,{type:"seq",title:"序号",width:"60"}),e(r,{field:"DicName",title:"字典名称"}),e(r,{field:"column",title:"字段名"}),e(r,{field:"DicStatus",title:"字典状态"},{default:t(({row:a})=>[e(j,{title:a.DicStatus,color:"#87d068"},{default:t(()=>[c(Z(a.DicStatus),1)]),_:2},1032,["title"])]),_:1}),e(r,{field:"DicDescription",title:"字典描述"}),e(r,{field:"createTime",title:"创建时间"}),e(r,{field:"",title:"操作",width:"20%"},{default:t(({row:a})=>[e(d,{type:"link",onClick:_=>M(a)},{default:t(()=>[c("新增")]),_:2},1032,["onClick"]),e(d,{type:"link",onClick:_=>M(a)},{default:t(()=>[c("修改")]),_:2},1032,["onClick"]),e(H,{title:"你确认要删除这条数据吗 ?",onConfirm:_=>T(a),"ok-text":"确认","cancel-text":"取消"},{default:t(()=>[e(d,{type:"link"},{default:t(()=>[c("删除")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),_:1},8,["spinning"]),e(Y,{"show-total":a=>`总数 ${a} 条`,onShowSizeChange:$,onChange:I,current:p.currentPage,"onUpdate:current":l[1]||(l[1]=a=>p.currentPage=a),"page-sizes":[10,20,30,40],pageSize:p.pageSize,"onUpdate:pageSize":l[2]||(l[2]=a=>p.pageSize=a),layout:"total, sizes, prev, pager, next, jumper",total:p.total,"show-size-changer":""},null,8,["show-total","current","pageSize","total"]),e(W,{open:u.value,"onUpdate:open":l[8]||(l[8]=a=>u.value=a),title:i.Tips,width:"47%","before-close":B,draggable:""},{footer:t(()=>[y("span",ce,[e(d,{onClick:l[7]||(l[7]=a=>u.value=!1)},{default:t(()=>[c("取消")]),_:1}),e(d,{type:"primary",onClick:R},{default:t(()=>[c(" 保存 ")]),_:1})])]),default:t(()=>[e(Q,{model:n,"label-width":"120px"},{default:t(()=>[e(z,{gutter:20},{default:t(()=>[e(m,{span:12,offset:0},{default:t(()=>[e(g,{label:"字典名称"},{default:t(()=>[e(f,{modelValue:n.DicName,"onUpdate:modelValue":l[3]||(l[3]=a=>n.DicName=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:12,offset:0},{default:t(()=>[e(g,{label:"字段名"},{default:t(()=>[e(f,{modelValue:n.column,"onUpdate:modelValue":l[4]||(l[4]=a=>n.column=a)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,{span:24,offset:0},{default:t(()=>[e(g,{label:"字典状态"},{default:t(()=>[e(J,{titile:"Switch value: "+n.DicStatus,placement:"top"},{default:t(()=>[e(G,{checked:n.DicStatus,"onUpdate:checked":l[5]||(l[5]=a=>n.DicStatus=a)},null,8,["checked"])]),_:1},8,["titile"])]),_:1})]),_:1}),e(m,{xs:24,sm:24,md:24,lg:24,xl:24,class:"mb20",span:12,offset:0},{default:t(()=>[(h(!0),U(ee,null,te(i.dicManagementList.list,(a,_)=>(h(),x(z,{gutter:35},{default:t(()=>[e(m,{xs:24,sm:12,md:12,lg:12,xl:12},{default:t(()=>[e(g,{prop:`list[${_}.label]`},{label:t(()=>[_===0?(h(),x(d,{key:0,type:"primary",shape:"circle",size:"small",onClick:P},{default:t(()=>[c(" + ")]),_:1})):(h(),x(d,{key:1,type:"danger",shape:"circle",size:"small",onClick:S=>F(_)},null,8,["onClick"])),de]),default:t(()=>[e(f,{modelValue:a.label,"onUpdate:modelValue":S=>a.label=S,style:{width:"100%"},placeholder:"请输入字段名"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024),e(m,{xs:24,sm:12,md:12,lg:12,xl:12,class:"mb20"},{default:t(()=>[e(g,{label:"属性",prop:`list[${_}].value`},{default:t(()=>[e(f,{modelValue:a.value,"onUpdate:modelValue":S=>a.value=S,style:{width:"100%"},placeholder:"请输入属性值"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop"])]),_:2},1024)]),_:2},1024))),256))]),_:1}),e(m,{span:24,offset:0},{default:t(()=>[e(g,{label:"字典描述"},{default:t(()=>[e(f,{type:"textarea",modelValue:n.DicDescription,"onUpdate:modelValue":l[6]||(l[6]=a=>n.DicDescription=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["open","title"])])}}});const _e=oe(pe,[["__scopeId","data-v-54c5c157"]]);export{_e as default};
