import{a as C,g as N,T as P,n as f,_ as k}from"./TokenIcon-1709db4b.js";import{P as B}from"./Progress-096e06ac.js";import{d as M,B as y}from"./dayjs.min-28e1ab39.js";import{_ as b,n as g,r as x,o,q as c,f as s,c as p,l as m,t,y as n,B as S,d as T,p as A,g as F,j as $}from"./index-50c344a8.js";const D=r=>(A("data-v-f1ad1ac7"),r=r(),F(),r),L={class:"launch-pad-item"},V={class:"top"},Y={class:"left"},j={class:"token-info"},H={class:"token-name"},W={class:"right"},q={key:0,class:"underway"},E={key:0,class:"status"},O={key:0},R={key:1,class:"success"},U={key:2,class:"fail"},z={key:1,class:"count-down"},G={key:2,class:"count-down"},J={key:1,class:"done"},K={class:"content"},Q={class:"price"},X={class:"small-title"},Z={class:"value"},ee={class:"small-title"},se={class:"value"},te={class:"date"},ae=D(()=>s("div",{class:"small-title"},"Trade",-1)),oe={class:"value"},ne={class:"progress"},ce={class:"small-title"},le={__name:"LaunchPadItem",props:{presaleItem:Object},setup(r){const e=r,i=g(""),u=g(!1);function v(a){return a<10?"0"+a.toString():a.toString()}function w(a,d){let _=setInterval(function(){let l=Math.floor(y(new Date().getTime()).div(1e3).toNumber());if(l<a){let h=a-l;i.value=I(h),u.value=!1}else if(l>a&&l<d){let h=d-l;i.value=I(h),u.value=!0}else l>d&&(clearInterval(_),i.value="00 : 00 : 00")},1e3)}function I(a){let d=Math.floor(a/3600),_=Math.floor(a/60%60),l=Math.floor(a%60);return v(d)+" : "+v(_)+" : "+v(l)}return w(e.presaleItem.startTime,e.presaleItem.endTime),(a,d)=>{const _=x("van-icon");return o(),c("div",L,[s("div",V,[s("div",Y,[p(P,{class:"token-icon",tokenIcon:m(C)(e.presaleItem.chain,e.presaleItem.tokenAddress),chainIcon:m(N)(e.presaleItem.chain)},null,8,["tokenIcon","chainIcon"]),s("div",j,[s("div",H,t(e.presaleItem.tokenName),1)])]),s("div",W,[e.presaleItem.status==0?(o(),c("div",q,[e.presaleItem.isMine?(o(),c("div",E,[e.presaleItem.approveStatus==0?(o(),c("div",O,"待审核")):n("",!0),e.presaleItem.approveStatus==1?(o(),c("div",R,[p(_,{class:"icon",name:"success"}),S("通过")])):n("",!0),e.presaleItem.approveStatus==2?(o(),c("div",U,[p(_,{class:"icon",name:"cross"}),S("驳回")])):n("",!0)])):n("",!0),e.presaleItem.approveStatus==1&&!u.value?(o(),c("div",z,"距开始 "+t(i.value),1)):n("",!0),e.presaleItem.approveStatus==1&&u.value?(o(),c("div",G,"距结束 "+t(i.value),1)):n("",!0)])):n("",!0),e.presaleItem.approveStatus==1?(o(),c("div",J,[e.presaleItem.status==1?(o(),T(k,{key:0,class:"icon",name:"cancelCn"})):n("",!0),e.presaleItem.status==2?(o(),T(k,{key:1,class:"icon",name:"doneCn"})):n("",!0)])):n("",!0)])]),s("div",K,[s("div",Q,[s("div",null,[s("div",X,"Soft/Hard("+t(e.presaleItem.baseTokenSymbol)+")",1),s("div",Z,t(m(f)(e.presaleItem.softCap))+"-"+t(m(f)(e.presaleItem.hardCap)),1)]),s("div",null,[s("div",ee,"Price("+t(e.presaleItem.baseTokenSymbol)+")",1),s("div",se,"1 = "+t(e.presaleItem.salePrice)+" "+t(e.presaleItem.tokenSymbol),1)])]),s("div",te,[ae,s("div",oe,t(m(M).unix(e.presaleItem.startTime).format("YYYY-MM-DD HH:mm:ss"))+" (UTC)",1)]),s("div",ne,[s("div",ce,"Progress("+t(e.presaleItem.progressRate)+"%)",1),p(B,{launchAmountNow:m(y)(e.presaleItem.cumulateAmount).toString(10),launchAmountTarget:e.presaleItem.hardCap,symbol:e.presaleItem.baseTokenSymbol},null,8,["launchAmountNow","launchAmountTarget","symbol"])])])])}}},pe=b(le,[["__scopeId","data-v-f1ad1ac7"]]);const re={class:"footer"},ie={__name:"Footer",setup(r){return $(),(e,i)=>(o(),c("div",re,[s("div",null,t(e.$t("footerWarn1")),1),s("div",null,t(e.$t("footerWarn2")),1)]))}},ve=b(ie,[["__scopeId","data-v-ad6de646"]]);export{ve as F,pe as L};
