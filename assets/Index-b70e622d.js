import{_ as Z,u as x,f as ee,d as te,g,K as T,r as F,o as p,c as k,b as a,a as l,j as n,T as ne,t as s,A as d,k as E,l as i,J as y,m as I,F as se,q as S,n as U,s as c,y as oe,v as A,N as ae,O as le}from"./index-97688f7f.js";import{B as _}from"./bignumber-3e8dfdf6.js";import{u as re}from"./manage-6e113ace.js";import{D as P}from"./Dialog-89ee87f1.js";import"./units-66bbd7ca.js";/* empty css                                                       */const ie=C=>(ae("data-v-72010a79"),C=C(),le(),C),ue={class:"manage"},de=ie(()=>a("div",{class:"top-background"},null,-1)),ce={class:"top"},pe={class:"token-info"},me={class:"left"},fe={class:"token-name"},ve={class:"right"},ye={key:0},ke={key:1},we={key:0,class:"model-manage"},he={class:"title"},ge={key:1,class:"trade-manage"},Ce={class:"title"},be={class:"authority-manage"},$e={class:"title"},Te={class:"bottom-operate"},Ie={key:2,class:"bottom-operate",style:{marginTop:"12px",marginBottom:"20px"}},_e={__name:"Index",setup(C){const R=window.ethereum.isMetaMask,{t:r}=x(),w=ee(),O=te(),e=re(),b=g(!1),m=T(()=>O.walletAddress.toLowerCase()===e.owner.toLowerCase()),M=T(()=>{if(e.deployerId==1)return _(e.buyFundFee).plus(e.buyLPFee).plus(e.buyBurnFee);if(e.deployerId==2||e.deployerId==3)return _(e.buyFundFee).plus(e.buyLPFee).plus(e.buyRewardFee)}),N=T(()=>{if(e.deployerId==1)return _(e.sellFundFee).plus(e.sellLPFee).plus(e.sellBurnFee);if(e.deployerId==2||e.deployerId==3)return _(e.sellFundFee).plus(e.sellLPFee).plus(e.sellRewardFee)});let j=e.name;e.$subscribe((t,o)=>{o.name!=j&&(document.title=r("manageName",{name:o.name}),j=o.name)});const h=g(!1),B=g(!1),$=g(!1),L=g("");function W(){h.value=!0}const z=T(()=>r("operationHash",{hash:S(L.value)}));async function H(){B.value=!0;try{const t=await U.wallet.contract(e.tokenAddress,e.abi);let o=await t.renounceOwnership();L.value=o.hash,o.wait().then(async f=>{f.status===1&&(c({type:"success",message:r("upChainSuccessfully")}),e.owner=await t.owner())}),$.value=!0,h.value=!1}catch(t){console.log(t),t.info&&t.info.error&&t.info.error.code===4001?c(r("userCancelOperate")):t.error&&t.error.message&&t.error.message=="Canceled"?c(r("userCancelOperate")):c(r("unkonwError"))}finally{B.value=!1}}async function V(){try{await window.ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e.tokenAddress,symbol:e.symbol,decimals:e.decimals,image:""}}})}catch(t){console.log(t),t.info&&t.info.error&&t.info.error.code===4001?c(r("userCancelOperate")):t.error&&t.error.message&&t.error.message=="Canceled"?c(r("userCancelOperate")):c(r("unkonwError"))}}async function q(){if(!b.value&&m.value&&!e.tradeStart){b.value=!0;try{await(await(await U.wallet.contract(e.tokenAddress,e.abi)).startTrade()).wait(),c({type:"success",message:r("tradeOpening")}),e.tradeStart=!0}catch(t){console.log(t.info),t.info&&t.info.error&&t.info.error.code===4001?c(r("userCancelOperate")):t.error&&t.error.message&&t.error.message=="Canceled"?c(r("userCancelOperate")):c(r("unkonwError"))}finally{b.value=!1}}}function D(){w.push("/createToken/manage/"+e.deployerId+"/"+e.tokenAddress+"/mintToken")}function K(){m.value&&w.push("/createToken/manage/"+e.deployerId+"/"+e.tokenAddress+"/whiteList")}function J(){console.log(m.value),m.value&&w.push("/createToken/manage/"+e.deployerId+"/"+e.tokenAddress+"/taxEditing")}function G(){w.push("/createToken/manage/"+e.deployerId+"/"+e.tokenAddress+"/transferOwnership")}function Q(){window.open("https://m.jfliquidity.xyz/add?utm_source=ave.ai")}function X(){w.push("/lockMaster")}return(t,o)=>{const f=F("van-button"),v=F("van-cell"),Y=F("van-switch");return p(),k(se,null,[a("div",ue,[de,a("div",ce,[a("div",pe,[a("div",me,[l(ne,{class:"token-icon",tokenIcon:n(oe)(n(O).chain.toLowerCase(),n(e).tokenAddress.toLowerCase())},null,8,["tokenIcon"]),a("div",fe,s(n(e).name),1)]),a("div",ve,[a("div",null,s(t.$t("chain"))+"："+s(n(O).chain.toUpperCase()),1),a("div",null,s(t.$t("tokenSymbol"))+"："+s(n(e).symbol),1),a("div",null,s(t.$t("totalSupply"))+"："+s(n(e).totalSupply),1),a("div",null,[n(e).deployerId==0?(p(),k("span",ye,s(t.$t("rate"))+"："+s(t.$t("freeTax")),1)):(p(),k("span",ke,s(t.$t("tax"))+"："+s(t.$t("buy"))+s(M.value)+"% "+s(t.$t("sell"))+s(N.value)+"%",1))]),a("div",null,[d(s(t.$t("managerAddress"))+"："+s(n(S)(n(e).owner))+" ",1),l(E,{class:"icon",name:"copy",onClick:o[0]||(o[0]=u=>n(A)(n(e).owner))})]),a("div",null,[d(s(t.$t("tokenAddress"))+"："+s(n(S)(n(e).tokenAddress))+" ",1),l(E,{class:"icon",name:"copy",onClick:o[1]||(o[1]=u=>n(A)(n(e).tokenAddress))})])])])]),n(e).canMint?(p(),k("div",we,[a("div",he,s(t.$t("economicManagement")),1),l(v,{class:"cell"},{title:i(()=>[d(s(t.$t("published"))+" "+s(n(e).totalSupply),1)]),extra:i(()=>[l(f,{class:"btn",type:"primary",round:"",size:"mini",onClick:o[2]||(o[2]=u=>D()),disabled:!m.value},{default:i(()=>[d(s(t.$t("mint")),1)]),_:1},8,["disabled"])]),_:1})])):y("",!0),n(e).deployerId!=0&&(n(e).enableManualStartTrade||n(e).enableChangeTax||n(e).enableWhiteList)?(p(),k("div",ge,[a("div",Ce,s(t.$t("tradeManage")),1),n(e).deployerId!=0&&n(e).enableManualStartTrade?(p(),I(v,{key:0,class:"cell",title:t.$t("openTrade")},{extra:i(()=>[l(Y,{class:"switch","model-value":n(e).tradeStart,loading:b.value,onClick:o[3]||(o[3]=u=>q()),disabled:n(e).tradeStart||!m.value},null,8,["model-value","loading","disabled"])]),_:1},8,["title"])):y("",!0),n(e).deployerId!=0&&n(e).enableKillBlock?(p(),I(v,{key:1,class:"cell killBlock",title:t.$t("autoKillBlockNum")},{extra:i(()=>[d(s(n(e).killBlock),1)]),_:1},8,["title"])):y("",!0),n(e).deployerId!=0&&n(e).enableChangeTax?(p(),I(v,{key:2,title:t.$t("taxEdit"),"is-link":"",onClick:o[4]||(o[4]=u=>J())},{value:i(()=>[d(s(t.$t("buy"))+s(M.value)+"% "+s(t.$t("sell"))+s(N.value)+"% ",1)]),_:1},8,["title"])):y("",!0),n(e).deployerId!=0&&n(e).enableWhiteList?(p(),I(v,{key:3,title:t.$t("whiteList"),"is-link":"",value:n(e).whiteListCount,onClick:o[5]||(o[5]=u=>K())},null,8,["title","value"])):y("",!0)])):y("",!0),a("div",be,[a("div",$e,s(t.$t("authorityManagement")),1),l(v,{class:"cell",title:t.$t("contractOwnership")},{extra:i(()=>[l(f,{class:"btn",type:"primary",round:"",size:"mini",onClick:W,disabled:!m.value},{default:i(()=>[d(s(t.$t("renounce")),1)]),_:1},8,["disabled"])]),_:1},8,["title"]),l(v,{class:"cell",title:t.$t("transferOwnership")},{extra:i(()=>[l(f,{class:"btn",type:"primary",round:"",size:"mini",onClick:G,disabled:!m.value},{default:i(()=>[d(s(t.$t("transfer")),1)]),_:1},8,["disabled"])]),_:1},8,["title"])]),a("div",Te,[l(f,{type:"primary",class:"manage-btn",onClick:Q},{default:i(()=>[d(s(t.$t("LPAddOrManage")),1)]),_:1}),l(f,{type:"primary",class:"lock-btn",onClick:X},{default:i(()=>[d(s(t.$t("lockToken")),1)]),_:1})]),n(R)?(p(),k("div",Ie,[l(f,{type:"primary",block:"",onClick:V},{default:i(()=>[d(s(t.$t("importToWallet")),1)]),_:1})])):y("",!0)]),l(P,{show:h.value,"onUpdate:show":o[6]||(o[6]=u=>h.value=u),title:t.$t("giveUpConfirm"),message:t.$t("giveUpConfirmInfo"),cancelButtonText:t.$t("thinkAgain"),confirmButtonText:t.$t("confirmAndGiveUp"),confirmButtonLoading:B.value,onOnConfirm:H,onOnCancel:o[7]||(o[7]=u=>h.value=!1)},null,8,["show","title","message","cancelButtonText","confirmButtonText","confirmButtonLoading"]),l(P,{show:$.value,"onUpdate:show":o[8]||(o[8]=u=>$.value=u),title:t.$t("giveUpSuccesslly"),message:z.value,showCancelButton:!1,confirmButtonText:t.$t("copyHash"),onOnConfirm:o[9]||(o[9]=u=>n(A)(L.value)),onOnCancel:o[10]||(o[10]=u=>$.value=!1)},null,8,["show","title","message","confirmButtonText"])],64)}}},Me=Z(_e,[["__scopeId","data-v-72010a79"]]);export{Me as default};
