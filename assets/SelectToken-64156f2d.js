import{_ as D,f as E,Q as z,d as U,a6 as q,u as j,g as k,G as $,D as S,i as G,r as m,o as r,c as v,a as b,b as a,t as d,F as N,x as A,j as i,l as L,C as K,m as B,T as Q,z as H,q as J,K as P,n as f,p as X,y as Y,I as Z}from"./index-ef9f90dd.js";import{B as p}from"./bignumber-3e8dfdf6.js";import{f as ee}from"./units-69fd59a3.js";const te={class:"body"},se={class:"content"},ne={class:"type"},ae={class:"select"},oe={class:"network"},ce={class:"network-list"},ie=["onClick"],le={class:"item-left"},re={class:"left-content"},de={class:"token-name"},ue={class:"token-address"},he={class:"item-right"},_e={class:"item-right-left"},ke={class:"qty"},me={class:"amount"},ve={class:"item-right-right"},F="/multiTransfer",fe={__name:"SelectToken",setup(pe){const T=E();z();const o=U(),w=q();j();const u=k([]),c=k("");async function V(){if(c.value)if(c.value.startsWith("0x")){let e=u.value.filter(n=>n.address.toLowerCase()==c.value.toLowerCase());if(e.length==0&&Z(c.value)){let n=await f.wallet.contractERC20(c.value);const l=c.value.toLowerCase(),t=await n.balanceOf(o.walletAddress),_=await n.decimals(),y=await n.name(),s=await n.symbol();let g={address:l,amount:Number(ee(t.toString(),_)),chain:o.chain,chainCoinSymbol:o.chainCoinSymbol,decimals:Number(_),icon:`https://ave.s3.ap-east-1.amazonaws.com/token_icon/${o.chain}/${l}.png`,name:y,price:0,symbol:s,tokenId:`${l}-${o.chain}`,tokenType:0};e.push(g)}return e}else return u.value.filter(e=>e.symbol.toLowerCase().indexOf(c.value.toLowerCase())>-1);else return u.value}const x=k([]);$(()=>[c.value,u.value],async()=>{x.value=await V()});const h=S.chainList.filter(e=>S[o.dappType].chainList.map(n=>n.chain).some(n=>n==e.chain)),C=k(h.find(e=>e.chain==o.chain)?h.find(e=>e.chain==o.chain):h[0]);async function M(e){C.value.chain!=e.chain&&await f.wallet.switchNetwork(e.chainId)}async function I(){const e=X({message:"Loading...",forbidClick:!0,duration:0}),n=await f.debank.getTokenList(o.walletAddress,C.value.chain);let l=[];for(let t of n.data.data)t.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(t.token=f.wallet.MAIN_COIN_ADDRESS),new RegExp("^0x.*$","gi").test(t.token)&&t.value>0&&t.risk_score<60&&t.risk_level>=0&&t.flag!=="blacklist"&&t.symbol!==""&&t.flag!=="lp"&&l.push({address:t.token.toLowerCase(),tokenId:`${t.token}-${t.chain}`.toLowerCase(),chain:t.chain.toLowerCase(),symbol:t.symbol,decimals:t.decimals,icon:Y(t.chain.toLowerCase(),t.token.toLowerCase()),amount:t.value,price:t.current_price_usd});u.value=l,e.close()}$(()=>o.isConnectWallet,async(e,n)=>{e&&await I()});function O(e){w.token=e,T.push(F)}function R(){T.push(F)}async function W(){console.log("init",o.isConnectWallet),o.isConnectWallet&&await I()}return G(()=>{console.log("onMounted"),W()}),(e,n)=>{const l=m("van-search"),t=m("van-icon"),_=m("van-cell"),y=m("van-list");return r(),v("div",te,[b(l,{modelValue:c.value,"onUpdate:modelValue":n[0]||(n[0]=s=>c.value=s),shape:"round","show-action":"",placeholder:e.$t("searchTokenContractOrName"),"action-text":e.$t("cancel"),onCancel:R},null,8,["modelValue","placeholder","action-text"]),a("div",se,[a("div",ne,[a("div",ae,d(e.$t("myToken")),1)]),a("div",oe,[a("ul",ce,[(r(!0),v(N,null,A(i(h),s=>(r(),v("li",{class:K(C.value.chain==s.chain?"network-selected":""),onClick:g=>M(s)},d(s.chain.toUpperCase()),11,ie))),256))])]),a("div",null,[b(y,{"finished-text":e.$t("noMore"),class:"token-list"},{default:L(()=>[(r(!0),v(N,null,A(x.value,s=>(r(),B(_,{class:"item",key:s,onClick:g=>O(s)},{title:L(()=>[a("div",le,[b(Q,{class:"token-icon-1",tokenIcon:s.icon,chainIcon:i(H)(s.chain)},null,8,["tokenIcon","chainIcon"]),a("div",re,[a("div",de,d(s.symbol),1),a("div",ue,d(i(J)(s.address)),1)])])]),value:L(()=>[a("div",he,[a("div",_e,[a("div",ke,d(i(p)(s.amount).toString().indexOf(".")==-1?i(p)(s.amount):i(p)(s.amount).toFixed(6,1)),1),a("div",me,"$"+d(i(p)(s.amount).multipliedBy(s.price).toFixed(2,1)),1)]),a("div",ve,[i(w).token&&i(w).token.address==s.address?(r(),B(t,{key:0,name:"success",color:"#3F80F7"})):P("",!0)])])]),_:2},1032,["onClick"]))),128))]),_:1},8,["finished-text"])])])])}}},ge=D(fe,[["__scopeId","data-v-b50bd836"]]);export{ge as default};
