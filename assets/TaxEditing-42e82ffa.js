import{_ as K,d as M,Q,f as z,u as G,g as y,K as v,r as w,o as N,c as H,b as g,t as k,a as o,l as c,j as B,m as V,I as _,s as F,n as J,A as W}from"./index-2dc1edc6.js";import{u as X}from"./manage-498a9386.js";import{R as I}from"./Rate-dda976f8.js";import{B as l}from"./bignumber-3e8dfdf6.js";const Y={class:"rate-editing"},Z={class:"buy-rate"},h={class:"title"},ee={class:"sell-rate"},le={class:"title"},ue={__name:"TaxEditing",setup(ae){M(),Q();const R=z(),e=X(),{t:b}=G(),T=y(!1),t=y(e.buyFundFee),s=y(e.buyLPFee),f=y(e.buyBurnFee),m=y(e.buyRewardFee),r=y(e.sellFundFee),i=y(e.sellLPFee),x=y(e.sellBurnFee),p=y(e.sellRewardFee);e.$subscribe((u,a)=>{t.value=e.buyFundFee,s.value=e.buyLPFee,f.value=e.buyBurnFee,m.value=e.buyRewardFee,r.value=e.sellFundFee,i.value=e.sellLPFee,x.value=e.sellBurnFee,p.value=e.sellRewardFee});const $=v(()=>{if(e.deployerId==1)return l(t.value).plus(s.value).plus(f.value);if(e.deployerId==2||e.deployerId==3)return l(t.value).plus(s.value).plus(m.value)}),C=v(()=>{if(e.deployerId==1)return l(r.value).plus(i.value).plus(x.value);if(e.deployerId==2||e.deployerId==3)return l(r.value).plus(i.value).plus(p.value)}),S=v(()=>{if(e.deployerId==1)return Number(l(20).minus(s.value).minus(f.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(s.value).minus(m.value))}),L=v(()=>{if(e.deployerId==1)return Number(l(20).minus(t.value).minus(f.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(t.value).minus(m.value))}),P=v(()=>{if(e.deployerId==1)return Number(l(20).minus(t.value).minus(s.value))}),U=v(()=>{if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(t.value).minus(s.value).toNumber())}),A=v(()=>{if(e.deployerId==1)return Number(l(20).minus(i.value).minus(x.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(i.value).minus(p.value))}),E=v(()=>{if(e.deployerId==1)return Number(l(20).minus(r.value).minus(x.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(r.value).minus(p.value))}),q=v(()=>{if(e.deployerId==1)return Number(l(20).minus(r.value).minus(i.value))}),O=v(()=>{if(e.deployerId==2||e.deployerId==3)return l(20).minus(r.value).minus(i.value).toNumber()});async function j(){if(e.deployerId==1){if(l(t.value).plus(f.value).plus(s.value).plus(r.value).plus(x.value).plus(i.value).lte(0)){F(b("taxlimit1"));return}}else if(e.deployerId==2){if(l(t.value).plus(s.value).plus(r.value).plus(i.value).lte(0)){F(b("taxlimit2"));return}}else if(e.deployerId==3&&l(t.value).plus(m.value).plus(s.value).plus(r.value).plus(p.value).plus(i.value).lte(0)){F(b("taxlimit1"));return}T.value=!0;try{const u=await J.wallet.contract(e.tokenAddress,e.abi);let a;e.deployerId==1?a=[l(s.value).div(100).multipliedBy(1e4).toNumber(),l(f.value).div(100).multipliedBy(1e4).toNumber(),l(t.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(x.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==2?a=[l(s.value).div(100).multipliedBy(1e4).toNumber(),l(m.value).div(100).multipliedBy(1e4).toNumber(),l(t.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==3&&(a=[l(t.value).div(100).multipliedBy(1e4).toNumber(),l(m.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber()]);const n=await u.completeCustoms(a);F({type:"success",message:b("submitSuccess")}),await n.wait(),e.getTokenFee(e.tokenAddress),F({type:"success",message:b("editTaxSuccess"),onClose:()=>{R.push("/createToken/manage/"+e.deployerId+"/"+e.tokenAddress)}})}catch(u){console.log(u),u.info&&u.info.error&&u.info.error.code===4001?F(b("userCancelOperate")):u.error&&u.error.message&&u.error.message=="Canceled"?F(b("userCancelOperate")):F(b("editTaxFail"))}finally{T.value=!1}}return(u,a)=>{const n=w("van-cell"),D=w("van-button");return N(),H("div",Y,[g("div",Z,[g("div",h,k(u.$t("editBuyTax",{buyFee:$.value})),1),o(n,{class:"rate-cell",title:u.$t("marketingTax")},{extra:c(()=>[o(I,{value:t.value,"onUpdate:value":a[0]||(a[0]=d=>t.value=d),maxValue:S.value},null,8,["value","maxValue"])]),_:1},8,["title"]),o(n,{class:"rate-cell",title:u.$t("liquidityTax")},{extra:c(()=>[o(I,{value:s.value,"onUpdate:value":a[1]||(a[1]=d=>s.value=d),maxValue:L.value},null,8,["value","maxValue"])]),_:1},8,["title"]),B(e).deployerId==1?(N(),V(n,{key:0,class:"rate-cell",title:u.$t("burnTax")},{extra:c(()=>[o(I,{value:f.value,"onUpdate:value":a[2]||(a[2]=d=>f.value=d),maxValue:P.value},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0),B(e).deployerId==2||B(e).deployerId==3?(N(),V(n,{key:1,class:"rate-cell",title:u.$t("rewardTax")},{extra:c(()=>[o(I,{value:m.value,"onUpdate:value":a[3]||(a[3]=d=>m.value=d),maxValue:U.value},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0)]),g("div",ee,[g("div",le,k(u.$t("editSellTax",{sellFee:C.value})),1),o(n,{class:"rate-cell",title:u.$t("marketingTax")},{extra:c(()=>[o(I,{value:r.value,"onUpdate:value":a[4]||(a[4]=d=>r.value=d),maxValue:A.value},null,8,["value","maxValue"])]),_:1},8,["title"]),o(n,{class:"rate-cell",title:u.$t("liquidityTax")},{extra:c(()=>[o(I,{value:i.value,"onUpdate:value":a[5]||(a[5]=d=>i.value=d),maxValue:E.value},null,8,["value","maxValue"])]),_:1},8,["title"]),B(e).deployerId==1?(N(),V(n,{key:0,class:"rate-cell",title:u.$t("burnTax")},{extra:c(()=>[o(I,{value:x.value,"onUpdate:value":a[6]||(a[6]=d=>x.value=d),maxValue:q.value},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0),B(e).deployerId==2||B(e).deployerId==3?(N(),V(n,{key:1,class:"rate-cell",title:u.$t("rewardTax")},{extra:c(()=>[o(I,{value:p.value,"onUpdate:value":a[7]||(a[7]=d=>p.value=d),maxValue:O.value},null,8,["value","maxValue"])]),_:1},8,["title"])):_("",!0)]),o(D,{type:"primary",round:"",block:"",class:"btn",loading:T.value,onClick:j},{default:c(()=>[W(k(u.$t("submit")),1)]),_:1},8,["loading"])])}}},de=K(ue,[["__scopeId","data-v-a6605253"]]);export{de as default};
