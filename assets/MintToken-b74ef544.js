import{D as F}from"./Dialog-78fcdeb9.js";import{_ as U,u as E,d as M,f as N,N as k,g as d,q as h,r as w,o as x,c as D,b as H,a as r,l as m,j as b,F as I,s as o,n as L,A as W,t as j,v as q}from"./index-30e4a335.js";import{u as R}from"./manage-2c673f87.js";import{a as z,f as G}from"./units-319ba825.js";/* empty css                                                       */import"./bignumber-3e8dfdf6.js";const J={class:"mint-token"},K={__name:"MintToken",setup(P){const{t:l}=E(),_=M(),A=N(),t=R(),C=k(()=>_.walletAddress.toLowerCase()===t.owner.toLowerCase()),f=d(""),n=d(_.walletAddress),u=d(""),S=k(()=>l("operationHash",{hash:h(f.value)})),v=d(!1),g=d(!1);function V(a){return a.replace("-","")}async function $(){if(!u.value){o(l("amountEmpty"));return}if(u.value.replace(".","").length>34){o(l("amountOver"));return}let a=u.value.split(".");if(a[1]&&a[1].length>t.decimals){o(l("amountOver"));return}if(!/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/.test(n.value)){o(l("addressWrong"));return}g.value=!0;try{const e=await L.wallet.contract(t.tokenAddress,t.abi);let i=await e.mint(n.value,z(u.value,t.decimals));f.value=i.hash,i.wait().then(async p=>{if(p.status===1){o({type:"success",message:l("upChainSuccessfully")});let y=await e.totalSupply();t.totalSupply=G(y.toString(),t.decimals),u.value=""}}),v.value=!0}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?o(l("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?o(l("userCancelOperate")):o(l("unkonwError"))}finally{g.value=!1}}async function T(){A.push("/createToken/manage/"+t.deployerId+"/"+t.tokenAddress)}const c=d(n.value?h(n.value):"");function B(){c.value=n.value}function O(){n.value=c.value,/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/.test(n.value)?c.value=h(n.value):o(l("addressWrong"))}return(a,e)=>{const i=w("van-field"),p=w("van-cell-group"),y=w("van-button");return x(),D(I,null,[H("div",J,[r(p,{inset:""},{default:m(()=>[r(i,{modelValue:b(t).totalSupply,"onUpdate:modelValue":e[0]||(e[0]=s=>b(t).totalSupply=s),readonly:"",label:a.$t("currentTotal"),"input-align":"right"},null,8,["modelValue","label"])]),_:1}),r(p,{inset:""},{default:m(()=>[r(i,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=s=>u.value=s),"label-width":"7em",type:"number",label:a.$t("mintTokenAmount"),placeholder:a.$t("pleaseEnter"),formatter:V,"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),r(p,{inset:""},{default:m(()=>[r(i,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=s=>c.value=s),onFocus:B,onBlur:O,"label-width":"9em",label:a.$t("receivingAddress"),placeholder:a.$t("pleaseEnter"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),r(y,{type:"primary",round:"",block:"",class:"btn",onClick:$,loading:g.value,disabled:!C.value},{default:m(()=>[W(j(a.$t("submitAdd")),1)]),_:1},8,["loading","disabled"])]),r(F,{show:v.value,"onUpdate:show":e[3]||(e[3]=s=>v.value=s),title:a.$t("submitAddSuccessfully"),message:S.value,showCancelButton:!1,confirmButtonText:a.$t("copyHash"),onOnConfirm:e[4]||(e[4]=s=>b(q)(f.value)),onOnCancel:T},null,8,["show","title","message","confirmButtonText"])],64)}}},te=U(K,[["__scopeId","data-v-7b767d32"]]);export{te as default};
