import{_ as M,d as Q,Q as z,f as G,u as J,g as c,L as y,r as R,o as B,c as W,b as g,t as S,a as v,l as N,j as f,m as w,K as T,F as X,q as Y,s as x,n as Z,A as ee,v as le}from"./index-ef9f90dd.js";import{u as ue}from"./manage-fd049987.js";import{R as F}from"./Rate-3652ccc7.js";import{B as l}from"./bignumber-3e8dfdf6.js";import{D as ae}from"./Dialog-9334f072.js";import"./units-69fd59a3.js";/* empty css                                                       */const te={class:"rate-editing"},se={class:"buy-rate"},re={class:"title"},ie={class:"sell-rate"},de={class:"title"},oe={__name:"TaxEditing",setup(ne){Q(),z(),G();const e=ue(),{t:I}=J(),V=c(!1),t=c(e.buyFundFee),s=c(e.buyLPFee),m=c(e.buyBurnFee),o=c(e.buyRewardFee),r=c(e.sellFundFee),i=c(e.sellLPFee),p=c(e.sellBurnFee),n=c(e.sellRewardFee),k=c(""),C=y(()=>I("operationHash",{hash:Y(k.value)})),$=c(!1),_=y(()=>e.deployerId==4?25:20);e.$subscribe((a,u)=>{t.value=e.buyFundFee,s.value=e.buyLPFee,m.value=e.buyBurnFee,o.value=e.buyRewardFee,r.value=e.sellFundFee,i.value=e.sellLPFee,p.value=e.sellBurnFee,n.value=e.sellRewardFee});const L=y(()=>{if(e.deployerId==1)return l(t.value).plus(s.value).plus(m.value);if(e.deployerId==2||e.deployerId==3)return l(t.value).plus(s.value).plus(o.value);if(e.deployerId==4)return l(t.value).plus(s.value).plus(o.value).plus(m.value)}),U=y(()=>{if(e.deployerId==1)return l(r.value).plus(i.value).plus(p.value);if(e.deployerId==2||e.deployerId==3)return l(r.value).plus(i.value).plus(n.value);if(e.deployerId==4)return l(r.value).plus(i.value).plus(n.value).plus(p.value)}),P=y(()=>{if(e.deployerId==1)return Number(l(20).minus(s.value).minus(m.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(s.value).minus(o.value));if(e.deployerId==4)return Number(l(25).minus(s.value).minus(o.value).minus(m.value))}),A=y(()=>{if(e.deployerId==1)return Number(l(20).minus(t.value).minus(m.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(t.value).minus(o.value));if(e.deployerId==4)return Number(l(25).minus(t.value).minus(o.value).minus(m.value))}),E=y(()=>{if(e.deployerId==1)return Number(l(20).minus(t.value).minus(s.value));if(e.deployerId==4)return Number(l(25).minus(t.value).minus(s.value).minus(o.value))}),H=y(()=>{if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(t.value).minus(s.value).toNumber());if(e.deployerId==4)return Number(l(25).minus(t.value).minus(s.value).minus(m.value))}),h=y(()=>{if(e.deployerId==1)return Number(l(20).minus(i.value).minus(p.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(i.value).minus(n.value));if(e.deployerId==4)return Number(l(25).minus(i.value).minus(n.value).minus(p.value))}),q=y(()=>{if(e.deployerId==1)return Number(l(20).minus(r.value).minus(p.value));if(e.deployerId==2||e.deployerId==3)return Number(l(20).minus(r.value).minus(n.value));if(e.deployerId==4)return Number(l(25).minus(r.value).minus(n.value).minus(p.value))}),D=y(()=>{if(e.deployerId==1)return Number(l(20).minus(r.value).minus(i.value));if(e.deployerId==4)return Number(l(25).minus(r.value).minus(i.value).minus(n.value))}),O=y(()=>{if(e.deployerId==2||e.deployerId==3)return l(20).minus(r.value).minus(i.value).toNumber();if(e.deployerId==4)return Number(l(25).minus(r.value).minus(i.value).minus(p.value))});async function j(){if(e.deployerId==1){if(l(t.value).plus(m.value).plus(s.value).plus(r.value).plus(p.value).plus(i.value).lte(0)){x(I("taxlimit1"));return}}else if(e.deployerId==2){if(l(t.value).plus(s.value).plus(r.value).plus(i.value).lte(0)){x(I("taxlimit2"));return}}else if(e.deployerId==3&&l(t.value).plus(o.value).plus(s.value).plus(r.value).plus(n.value).plus(i.value).lte(0)){x(I("taxlimit1"));return}V.value=!0;try{const a=await Z.wallet.contract(e.tokenAddress,e.abi);let u;e.deployerId==1?u=[l(s.value).div(100).multipliedBy(1e4).toNumber(),l(m.value).div(100).multipliedBy(1e4).toNumber(),l(t.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==2?u=[l(s.value).div(100).multipliedBy(1e4).toNumber(),l(o.value).div(100).multipliedBy(1e4).toNumber(),l(t.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(n.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==3?u=[l(t.value).div(100).multipliedBy(1e4).toNumber(),l(o.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber(),l(n.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber()]:e.deployerId==4&&(u=[l(t.value).div(100).multipliedBy(1e4).toNumber(),l(s.value).div(100).multipliedBy(1e4).toNumber(),l(o.value).div(100).multipliedBy(1e4).toNumber(),l(m.value).div(100).multipliedBy(1e4).toNumber(),l(r.value).div(100).multipliedBy(1e4).toNumber(),l(i.value).div(100).multipliedBy(1e4).toNumber(),l(n.value).div(100).multipliedBy(1e4).toNumber(),l(p.value).div(100).multipliedBy(1e4).toNumber()]);const b=await a.completeCustoms(u);x({type:"success",message:I("submitSuccess")}),k.value=b.hash,$.value=!0,await b.wait(),e.getTokenFee(e.tokenAddress),x({type:"success",message:I("editTaxSuccessfully")})}catch(a){console.log(a),a.info&&a.info.error&&a.info.error.code===4001?x(I("userCancelOperate")):a.error&&a.error.message&&a.error.message=="Canceled"?x(I("userCancelOperate")):x(I("editTaxFail"))}finally{V.value=!1}}return(a,u)=>{const b=R("van-cell"),K=R("van-button");return B(),W(X,null,[g("div",te,[g("div",se,[g("div",re,S(a.$t("editBuyTax",{buyFee:L.value,maxBuyFee:_.value})),1),v(b,{class:"rate-cell",title:a.$t("marketingTax")},{extra:N(()=>[v(F,{value:t.value,"onUpdate:value":u[0]||(u[0]=d=>t.value=d),maxValue:P.value},null,8,["value","maxValue"])]),_:1},8,["title"]),v(b,{class:"rate-cell",title:a.$t("liquidityTax")},{extra:N(()=>[v(F,{value:s.value,"onUpdate:value":u[1]||(u[1]=d=>s.value=d),maxValue:A.value},null,8,["value","maxValue"])]),_:1},8,["title"]),f(e).deployerId==1||f(e).deployerId==4?(B(),w(b,{key:0,class:"rate-cell",title:a.$t("burnTax")},{extra:N(()=>[v(F,{value:m.value,"onUpdate:value":u[2]||(u[2]=d=>m.value=d),maxValue:E.value},null,8,["value","maxValue"])]),_:1},8,["title"])):T("",!0),f(e).deployerId==2||f(e).deployerId==3||f(e).deployerId==4?(B(),w(b,{key:1,class:"rate-cell",title:a.$t("rewardTax")},{extra:N(()=>[v(F,{value:o.value,"onUpdate:value":u[3]||(u[3]=d=>o.value=d),maxValue:H.value},null,8,["value","maxValue"])]),_:1},8,["title"])):T("",!0)]),g("div",ie,[g("div",de,S(a.$t("editSellTax",{sellFee:U.value,maxSellFee:_.value})),1),v(b,{class:"rate-cell",title:a.$t("marketingTax")},{extra:N(()=>[v(F,{value:r.value,"onUpdate:value":u[4]||(u[4]=d=>r.value=d),maxValue:h.value},null,8,["value","maxValue"])]),_:1},8,["title"]),v(b,{class:"rate-cell",title:a.$t("liquidityTax")},{extra:N(()=>[v(F,{value:i.value,"onUpdate:value":u[5]||(u[5]=d=>i.value=d),maxValue:q.value},null,8,["value","maxValue"])]),_:1},8,["title"]),f(e).deployerId==1||f(e).deployerId==4?(B(),w(b,{key:0,class:"rate-cell",title:a.$t("burnTax")},{extra:N(()=>[v(F,{value:p.value,"onUpdate:value":u[6]||(u[6]=d=>p.value=d),maxValue:D.value},null,8,["value","maxValue"])]),_:1},8,["title"])):T("",!0),f(e).deployerId==2||f(e).deployerId==3||f(e).deployerId==4?(B(),w(b,{key:1,class:"rate-cell",title:a.$t("rewardTax")},{extra:N(()=>[v(F,{value:n.value,"onUpdate:value":u[7]||(u[7]=d=>n.value=d),maxValue:O.value},null,8,["value","maxValue"])]),_:1},8,["title"])):T("",!0)]),v(K,{type:"primary",round:"",block:"",class:"btn",loading:V.value,onClick:j},{default:N(()=>[ee(S(a.$t("submit")),1)]),_:1},8,["loading"])]),v(ae,{show:$.value,"onUpdate:show":u[8]||(u[8]=d=>$.value=d),title:a.$t("submitSuccess"),message:C.value,showCancelButton:!1,confirmButtonText:a.$t("copyHash"),onOnConfirm:u[9]||(u[9]=d=>f(le)(k.value))},null,8,["show","title","message","confirmButtonText"])],64)}}},Ie=M(oe,[["__scopeId","data-v-88cc3e06"]]);export{Ie as default};
