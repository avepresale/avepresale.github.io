import{D as A}from"./Dialog-9334f072.js";import{_ as x,u as C,d as k,f as E,L as w,g as i,r as v,o as $,c as B,b as O,a as m,l as g,j as V,F as H,q as L,s as o,n as M,A as N,t as T,v as U}from"./index-ef9f90dd.js";import{u as D}from"./manage-fd049987.js";import{a as F,f as I}from"./units-69fd59a3.js";/* empty css                                                       */import"./bignumber-3e8dfdf6.js";const j={class:"mint-token"},q={__name:"EditMaxSwapAmount",setup(R){const{t:s}=C(),_=k();E();const t=D(),h=w(()=>_.walletAddress.toLowerCase()===t.owner.toLowerCase()),c=i(""),n=i(t.maxSwapAmount);t.$subscribe((a,e)=>{n.value=t.maxSwapAmount});const y=w(()=>s("operationHash",{hash:L(c.value)})),p=i(!1),r=i(!1);function S(a){return a.replace("-","")}async function b(){if(!n.value){o(s("amountEmpty"));return}if(n.value.replace(".","").length>34){o(s("amountOver"));return}let a=n.value.split(".");if(a[1]&&a[1].length>t.decimals){o(s("amountOver"));return}r.value=!0;try{const e=await M.wallet.contract(t.tokenAddress,t.abi);let l=await e.changeSwapLimit(F(n.value,t.decimals));o({type:"success",message:s("submitSuccess")}),c.value=l.hash,p.value=!0,l.wait().then(async d=>{if(d.status===1){o({type:"success",message:s("upChainSuccessfully")});let f=await e.maxSwapAmount();t.maxSwapAmount=I(f.toString(),t.decimals)}r.value=!1})}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?o(s("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?o(s("userCancelOperate")):o(s("unkonwError")),r.value=!1}finally{}}return(a,e)=>{const l=v("van-field"),d=v("van-cell-group"),f=v("van-button");return $(),B(H,null,[O("div",j,[m(d,{inset:""},{default:g(()=>[m(l,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=u=>n.value=u),"label-width":"9.2em",type:"number",label:a.$t("swapAmount"),placeholder:a.$t("pleaseEnter"),formatter:S,"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),m(f,{type:"primary",round:"",block:"",class:"btn",onClick:b,loading:r.value,disabled:!h.value},{default:g(()=>[N(T(a.$t("submit")),1)]),_:1},8,["loading","disabled"])]),m(A,{show:p.value,"onUpdate:show":e[1]||(e[1]=u=>p.value=u),title:a.$t("submitSuccess"),message:y.value,showCancelButton:!1,confirmButtonText:a.$t("copyHash"),onOnConfirm:e[2]||(e[2]=u=>V(U)(c.value))},null,8,["show","title","message","confirmButtonText"])],64)}}},W=x(q,[["__scopeId","data-v-70d6d162"]]);export{W as default};
