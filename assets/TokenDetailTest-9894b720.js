import{g as r,r as u,o as c,c as i,a as n,l as m,j as _,F as d,b as p,n as f,A as k,E as v}from"./index-91516651.js";import{u as T,F as g}from"./manage-253e515a.js";import"./bignumber-3e8dfdf6.js";const x=p("div",null,null,-1),C={__name:"TokenDetailTest",setup(w){T();const t=r("");async function l(){const a=await f.wallet.contract(t.value,g);let e=await a.maxSwapAmount(),o=await a.maxWalletAmount();console.log(ethers.formatUnits(e,18)),console.log(ethers.formatUnits(o,18))}return(a,e)=>{const o=u("van-field");return c(),i(d,null,[n(o,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),error:"",required:"",label:"token地址",placeholder:"请输入Token地址"},null,8,["modelValue"]),n(_(v),{onClick:l},{default:m(()=>[k("获取Token信息")]),_:1}),x],64)}}};export{C as default};
