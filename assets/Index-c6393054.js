import{_ as X,u as Y,l as Z,d as x,e as g,O as T,r as F,o as c,c as y,b as o,a as r,f as s,T as ee,t as n,w as i,N as h,g as S,F as te,i as j,v as E,s as u,A as ne,C as f,y as se,p as ae,j as oe}from"./index-a59c7a36.js";import{B as _}from"./bignumber-3e8dfdf6.js";import{u as le}from"./manage-4248302c.js";import{D as N}from"./Dialog-7bef48a5.js";/* empty css                                                       */const re=C=>(ae("data-v-051787cc"),C=C(),oe(),C),ie={class:"manage"},ue=re(()=>o("div",{class:"top-background"},null,-1)),de={class:"top"},ce={class:"token-info"},pe={class:"left"},me={class:"token-name"},fe={class:"right"},ve={key:0},ye={key:1},he={key:0,class:"model-manage"},we={class:"title"},ke={key:1,class:"trade-manage"},ge={class:"title"},Ce={class:"authority-manage"},be={class:"title"},$e={class:"bottom-operate"},Te={key:2,class:"bottom-operate",style:{marginTop:"12px",marginBottom:"20px"}},_e={__name:"Index",setup(C){const U=window.ethereum.isMetaMask,{t:l}=Y(),w=Z(),I=x(),t=le(),b=g(!1),p=T(()=>I.walletAddress.toLowerCase()===t.owner.toLowerCase()),B=T(()=>{if(t.deployerId==1)return _(t.buyFundFee).plus(t.buyLPFee).plus(t.buyBurnFee);if(t.deployerId==2||t.deployerId==3)return _(t.buyFundFee).plus(t.buyLPFee).plus(t.buyRewardFee)}),A=T(()=>{if(t.deployerId==1)return _(t.sellFundFee).plus(t.sellLPFee).plus(t.sellBurnFee);if(t.deployerId==2||t.deployerId==3)return _(t.sellFundFee).plus(t.sellLPFee).plus(t.sellRewardFee)});let M=t.name;t.$subscribe((e,a)=>{a.name!=M&&(document.title=l("manageName",{name:a.name}),M=a.name)});const k=g(!1),O=g(!1),$=g(!1),L=g("");function P(){k.value=!0}const R=T(()=>l("operationHash",{hash:j(L.value)}));async function W(){O.value=!0;try{const e=await E.wallet.contract(t.tokenAddress,t.abi);let a=await e.renounceOwnership();L.value=a.hash,a.wait().then(async m=>{m.status===1&&(u({type:"success",message:l("upChainSuccessfully")}),t.owner=await e.owner())}),$.value=!0,k.value=!1}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?u(l("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?u(l("userCancelOperate")):u(l("unkonwError"))}finally{O.value=!1}}async function z(){try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:t.tokenAddress,symbol:t.symbol,decimals:t.decimals,image:""}}})}catch(e){console.log(e),e.info&&e.info.error&&e.info.error.code===4001?u(l("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?u(l("userCancelOperate")):u(l("unkonwError"))}}async function H(){if(!b.value&&p.value&&!t.tradeStart){b.value=!0;try{await(await(await E.wallet.contract(t.tokenAddress,t.abi)).startTrade()).wait(),u({type:"success",message:l("tradeOpening")}),t.tradeStart=!0}catch(e){console.log(e.info),e.info&&e.info.error&&e.info.error.code===4001?u(l("userCancelOperate")):e.error&&e.error.message&&e.error.message=="Canceled"?u(l("userCancelOperate")):u(l("unkonwError"))}finally{b.value=!1}}}function V(){w.push("/createToken/manage/"+t.deployerId+"/"+t.tokenAddress+"/mintToken")}function D(){p.value&&w.push("/createToken/manage/"+t.deployerId+"/"+t.tokenAddress+"/whiteList")}function q(){console.log(p.value),p.value&&w.push("/createToken/manage/"+t.deployerId+"/"+t.tokenAddress+"/taxEditing")}function G(){w.push("/createToken/manage/"+t.deployerId+"/"+t.tokenAddress+"/transferOwnership")}function J(){window.open("https://m.jfliquidity.xyz/add?utm_source=ave.ai")}function K(){w.push("/lockMaster")}return(e,a)=>{const m=F("van-button"),v=F("van-cell"),Q=F("van-switch");return c(),y(te,null,[o("div",ie,[ue,o("div",de,[o("div",ce,[o("div",pe,[r(ee,{class:"token-icon",tokenIcon:s(ne)(s(I).chain.toLowerCase(),s(t).tokenAddress.toLowerCase())},null,8,["tokenIcon"]),o("div",me,n(s(t).name),1)]),o("div",fe,[o("div",null,n(e.$t("chain"))+"："+n(s(I).chain.toUpperCase()),1),o("div",null,n(e.$t("tokenSymbol"))+"："+n(s(t).symbol),1),o("div",null,n(e.$t("totalSupply"))+"："+n(s(t).totalSupply),1),o("div",null,[s(t).deployerId==0?(c(),y("span",ve,n(e.$t("rate"))+"："+n(e.$t("freeTax")),1)):(c(),y("span",ye,n(e.$t("tax"))+"："+n(e.$t("buy"))+n(B.value)+"% "+n(e.$t("sell"))+n(A.value)+"%",1))]),o("div",null,n(e.$t("managerAddress"))+"："+n(s(j)(s(t).owner)),1)])])]),s(t).canMint?(c(),y("div",he,[o("div",we,n(e.$t("economicManagement")),1),r(v,{class:"cell"},{title:i(()=>[f(n(e.$t("published"))+" "+n(s(t).totalSupply),1)]),extra:i(()=>[r(m,{class:"btn",type:"primary",round:"",size:"mini",onClick:a[0]||(a[0]=d=>V()),disabled:!p.value},{default:i(()=>[f(n(e.$t("mint")),1)]),_:1},8,["disabled"])]),_:1})])):h("",!0),s(t).deployerId!=0&&(s(t).enableManualStartTrade||s(t).enableChangeTax||s(t).enableWhiteList)?(c(),y("div",ke,[o("div",ge,n(e.$t("tradeManage")),1),s(t).deployerId!=0&&s(t).enableManualStartTrade?(c(),S(v,{key:0,class:"cell",title:e.$t("openTrade")},{extra:i(()=>[r(Q,{class:"switch","model-value":s(t).tradeStart,loading:b.value,onClick:a[1]||(a[1]=d=>H()),disabled:s(t).tradeStart||!p.value},null,8,["model-value","loading","disabled"])]),_:1},8,["title"])):h("",!0),s(t).deployerId!=0&&s(t).enableChangeTax?(c(),S(v,{key:1,title:e.$t("taxEdit"),"is-link":"",onClick:a[2]||(a[2]=d=>q())},{value:i(()=>[f(n(e.$t("buy"))+n(B.value)+"% "+n(e.$t("sell"))+n(A.value)+"% ",1)]),_:1},8,["title"])):h("",!0),s(t).deployerId!=0&&s(t).enableWhiteList?(c(),S(v,{key:2,title:e.$t("whiteList"),"is-link":"",value:s(t).whiteListCount,onClick:a[3]||(a[3]=d=>D())},null,8,["title","value"])):h("",!0)])):h("",!0),o("div",Ce,[o("div",be,n(e.$t("authorityManagement")),1),r(v,{class:"cell",title:e.$t("contractOwnership")},{extra:i(()=>[r(m,{class:"btn",type:"primary",round:"",size:"mini",onClick:P,disabled:!p.value},{default:i(()=>[f(n(e.$t("renounce")),1)]),_:1},8,["disabled"])]),_:1},8,["title"]),r(v,{class:"cell",title:e.$t("transferOwnership")},{extra:i(()=>[r(m,{class:"btn",type:"primary",round:"",size:"mini",onClick:G,disabled:!p.value},{default:i(()=>[f(n(e.$t("transfer")),1)]),_:1},8,["disabled"])]),_:1},8,["title"])]),o("div",$e,[r(m,{type:"primary",class:"manage-btn",onClick:J},{default:i(()=>[f(n(e.$t("LPAddOrManage")),1)]),_:1}),r(m,{type:"primary",class:"lock-btn",onClick:K},{default:i(()=>[f(n(e.$t("lockToken")),1)]),_:1})]),s(U)?(c(),y("div",Te,[r(m,{type:"primary",block:"",onClick:z},{default:i(()=>[f(n(e.$t("importToWallet")),1)]),_:1})])):h("",!0)]),r(N,{show:k.value,"onUpdate:show":a[4]||(a[4]=d=>k.value=d),title:e.$t("giveUpConfirm"),message:e.$t("giveUpConfirmInfo"),cancelButtonText:e.$t("thinkAgain"),confirmButtonText:e.$t("confirmAndGiveUp"),confirmButtonLoading:O.value,onOnConfirm:W,onOnCancel:a[5]||(a[5]=d=>k.value=!1)},null,8,["show","title","message","cancelButtonText","confirmButtonText","confirmButtonLoading"]),r(N,{show:$.value,"onUpdate:show":a[6]||(a[6]=d=>$.value=d),title:e.$t("giveUpSuccesslly"),message:R.value,showCancelButton:!1,confirmButtonText:e.$t("copyHash"),onOnConfirm:a[7]||(a[7]=d=>s(se)(L.value)),onOnCancel:a[8]||(a[8]=d=>$.value=!1)},null,8,["show","title","message","confirmButtonText"])],64)}}},Be=X(_e,[["__scopeId","data-v-051787cc"]]);export{Be as default};
