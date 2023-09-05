import{B as S}from"./bignumber-3e8dfdf6.js";import{_ as J,L as Le,r as D,o as v,c as w,a as r,b as e,S as q,F as I,N as Ae,O as Te,d as ie,Z as ue,m as U,l as b,t as n,j as o,z as de,T as G,A as C,q as z,y as H,K as Z,B as j,Y as Se,u as Ie,g as y,f as Ve,i as De,C as ae,n as f,$ as A,D as Ne,p as se,M as Oe,I as Ee}from"./index-ef9f90dd.js";import{S as Be}from"./SelectDate-27660fa8.js";import{e as re}from"./ethers-d42bac4d.js";import{O as Fe}from"./OperateSuccessDialog-ad02adda.js";import{a as le,b as ce,f as Pe}from"./units-69fd59a3.js";const W=h=>(Ae("data-v-f3c827bd"),h=h(),Te(),h),Ue={class:"progress-bar"},Ge=W(()=>e("div",null,"25%",-1)),Me=W(()=>e("div",null,"50%",-1)),Re=W(()=>e("div",null,"75%",-1)),Qe=W(()=>e("div",null,"100%",-1)),We=W(()=>e("div",{class:"bbb"},null,-1)),Ye={__name:"InputQty",props:{total:String,amount:String,decimals:Number},emits:["update:amount"],setup(h,{emit:m}){const i=h;function $(c){return c&&c.replace("-","")}const l=Le(()=>{const c=i.amount?S(i.amount):S(0),u=i.total?S(i.total):S(0);return u.lte(S(0))?0:c.div(u).multipliedBy(100).toNumber()});function g(c){m("update:amount",S(S(i.total).multipliedBy(c).div(100).toFixed(i.decimals,1)).toString())}return(c,u)=>{const B=D("van-field");return v(),w(I,null,[r(B,{"model-value":i.amount,"onUpdate:modelValue":u[0]||(u[0]=d=>m("update:amount",d)),type:"number",placeholder:c.$t("enterNumber"),class:"input","input-align":"center",formatter:$},null,8,["model-value","placeholder"]),e("ul",Ue,[e("li",{onClick:u[1]||(u[1]=d=>g(25))},[e("div",{class:"block",style:q({"--percent":l.value<0?0:l.value<25?(l.value-0)/25*100:100})},null,4),Ge]),e("li",{onClick:u[2]||(u[2]=d=>g(50))},[e("div",{class:"block",style:q({"--percent":l.value<25?0:l.value<50?(l.value-25)/25*100:100})},null,4),Me]),e("li",{onClick:u[3]||(u[3]=d=>g(75))},[e("div",{class:"block",style:q({"--percent":l.value<50?0:l.value<75?(l.value-50)/25*100:100})},null,4),Re]),e("li",{onClick:u[4]||(u[4]=d=>g(100))},[e("div",{class:"block",style:q({"--percent":l.value<75?0:l.value<100?(l.value-75)/25*100:100})},null,4),Qe])]),We],64)}}},qe=J(Ye,[["__scopeId","data-v-f3c827bd"]]);const je={class:"ave-popup"},ze={class:"title"},He={class:"body"},Ke={class:"info"},Ze={class:"key"},Je={class:"value"},Xe={key:0,class:"token"},xe={key:1,class:"token"},et={key:2,class:"token"},tt={class:"key"},ot={class:"value"},nt={class:"item"},at={class:"key"},st={class:"value"},lt={class:"item"},ct={class:"key"},it={class:"value"},ut={class:"key"},dt={class:"value"},rt={class:"key"},kt={class:"value"},vt={class:"blue-font"},pt={class:"key"},ft={class:"value"},mt={class:"tips"},yt={__name:"LockConfirmPopup",props:{show:Boolean,showGas:String,amount:String,unlockDate:Date,isLockV2:Boolean,positions:Object},emits:["update:show","confirm"],setup(h,{emit:m}){const i=h,$=ie(),l=ue();function g(){m("confirm")}return(c,u)=>{const B=D("van-button"),d=D("van-popup");return v(),U(d,{show:h.show,"onUpdate:show":u[0]||(u[0]=a=>{m("update:show",a)}),round:"",closeable:"",position:"bottom"},{default:b(()=>[e("div",je,[e("div",ze,n(c.$t("lockConfirm")),1),e("div",He,[e("ul",Ke,[i.isLockV2?(v(),w(I,{key:0},[e("li",null,[e("div",Ze,n(c.$t("lockAssets")),1),e("div",Je,[o(l).token?o(l).token.tokenType==0?(v(),w("div",xe,[r(G,{class:"token-icon",tokenIcon:o(l).token.icon,chainIcon:o(de)(o(l).token.chain)},null,8,["tokenIcon","chainIcon"]),C(" "+n(`${o(l).token.symbol} (${o(z)(o(l).token.address)})`),1)])):o(l).token.tokenType==1?(v(),w("div",et,[r(G,{class:"token-icon",tokenIcon:o(H)(o(l).token.chain,o(l).token.tokenList[0].address)},null,8,["tokenIcon"]),r(G,{class:"token-icon",tokenIcon:o(H)(o(l).token.chain,o(l).token.tokenList[1].address)},null,8,["tokenIcon"]),C(" "+n(`${o(l).token.symbol} (${o(z)(o(l).token.address)})`),1)])):Z("",!0):(v(),w("div",Xe," -- "))])]),e("li",null,[e("div",tt,n(c.$t("lockNumber")),1),e("div",ot,n(h.amount),1)])],64)):(v(),w(I,{key:1},[e("li",nt,[e("div",at,n(c.$t("transactionPairs")),1),e("div",st,n(i.positions?`${i.positions.token0Symbol}/${i.positions.token1Symbol}`:"--/--"),1)]),e("li",lt,[e("div",ct,n(c.$t("lockQuantity")),1),e("div",it,n(i.positions?o(re).formatEther(h.positions.liquidity.toString()):"--"),1)])],64)),e("li",null,[e("div",ut,n(c.$t("contractChian")),1),e("div",dt,n(o($).chain.toUpperCase()),1)]),e("li",null,[e("div",rt,n(c.$t("unlockTime2")),1),e("div",kt,[e("span",null,n(o(j)(h.unlockDate).format("YYYY-MM-DD")),1),e("span",null,[C("("),e("span",vt,n(c.$t("dayLeft",{day:o(Se)(i.unlockDate)})),1),C(")")])])]),e("li",null,[e("div",pt,n(c.$t("gas")),1),e("div",ft,n(h.showGas?`${h.showGas} ${o($).chainCoinSymbol.toUpperCase()}`:"--"),1)])]),e("div",mt,[e("div",null,n(c.$t("createTips1")),1),e("div",null,n(c.$t("createTips2")),1),e("div",null,n(c.$t("createTips3")),1)]),r(B,{class:"btn",type:"primary",block:"",onClick:g},{default:b(()=>[C(n(c.$t("confirmAndLock")),1)]),_:1})])])]),_:1},8,["show"])}}},_t=J(yt,[["__scopeId","data-v-5ab12648"]]);const wt={class:"body"},ht={class:"tab"},$t={class:"form"},bt={class:"title token-title"},gt={key:0,class:"token-box"},Ct={key:1,class:"token"},Lt={class:"title token-title"},At={class:"title token-title"},Tt={class:"title token-title"},St={key:0,class:"info"},It={class:"item"},Vt={class:"key"},Dt={class:"value"},Nt={class:"item"},Ot={class:"key"},Et={class:"value"},Bt={class:"title token-title"},Ft={class:"tools"},Pt={__name:"Create",setup(h){const{t:m}=Ie(),i=y(!0),$=y(""),l=y(""),g=y(!1),c=y(!1),u=y(!1),B=Ve(),d=ie(),a=ue(),ke=j().add(1,"day").endOf("day").toDate(),M=y(ke),N=y(""),R=y(!1),X=y(""),Y=y(!1),Q=y(""),F=y("");async function ve(){await d.connectWallet()}async function x(){if(a.token==null)return;if(a.token.address==f.wallet.MAIN_COIN_ADDRESS){g.value=!1;return}await f.wallet.isAllowanceEnough(a.tokenLockV2Address,a.token.address,d.walletAddress)?g.value=!1:g.value=!0}async function pe(){if(c.value=!0,i.value)try{let t=await f.wallet.approveMaxAmount(a.token.address,a.tokenLockV2Address);console.log(t),await t.wait(),g.value=!1}catch(t){console.log(t)}finally{c.value=!1}}async function fe(){u.value=!0,Q.value="";try{if(!a.token){A(m("pleaseSelectToken"));return}if(!N.value){A(m("enterAmount"));return}let t=Ne[d.dappType].chainList.find(s=>s.chain==a.token.chain);if(!t){A(m("tokenChainNotSupport"));return}if(d.chain!=t.chain){A(m("switchTokenChain"));try{await f.wallet.switchNetwork(t.chainId)}catch{A(m("switchTokenChain"));return}return}if(S(N.value).gt(S(F.value))){A(m("balanceSlow"));return}if(await x(),g.value){A(m("approveFirst"));return}await ee()}catch(t){console.log(t)}finally{u.value=!1}}async function ee(){const t=await f.wallet.getGasPrice();let s;const k=j(M.value).endOf("day").unix();if(i.value){const _=a.token.address,O=await(await f.wallet.contractERC20(_)).decimals(),L=a.token.tokenType==1,p=le(N.value,O);s=await(await f.wallet.contractTokenLockV2(a.tokenLockV2Address)).lock.estimateGas(d.walletAddress,_,L,p.toString(),k,"")}else s=await(await f.wallet.contractTokenLockV3(a.tokenLockV3Address)).lock.estimateGas(d.walletAddress,$.value,l.value,k,"");console.dir(s),X.value=ce(s*t),R.value=!0}async function me(){const t=se({message:"Loading...",forbidClick:!0,duration:0}),s=j(M.value).endOf("day").unix();if(i.value){const k=a.token.address,_=a.token.tokenType==1,O=await(await f.wallet.contractERC20(k)).decimals(),L=le(N.value,O),p=await f.wallet.contractTokenLockV2(a.tokenLockV2Address);try{let E=await p.lock(d.walletAddress,k,_,L.toString(),s,"");console.dir(E),Q.value=E.hash,Y.value=!0,R.value=!1}catch(E){console.log(E)}finally{t.close()}}else{const k=await f.wallet.contractTokenLockV3(a.tokenLockV3Address);try{let _=await k.lock(d.walletAddress,$.value,l.value,s,"");console.dir(_),Q.value=_.hash,Y.value=!0,R.value=!1}catch(_){console.log(_)}finally{t.close()}}}function ye(){B.push("/lockMaster/selectToken")}async function _e(){if(!a.token)return;const t=se({message:"Loading...",forbidClick:!0,duration:0});try{if(a.token.address==f.wallet.MAIN_COIN_ADDRESS){const k=await(await f.wallet.getEthersProvider()).getBalance(d.walletAddress);F.value=ce(k)}else{const s=await f.wallet.contractERC20(a.token.address),k=await s.decimals(),_=await s.balanceOf(d.walletAddress);F.value=Pe(_,k)}}catch(s){console.log(s),a.token=null}finally{t.close()}}De(()=>{d.chainId>0&&d.isConnectWallet&&a.token&&(x(),_e())});const K=y(!1),V=y(null);async function we(){c.value=!0;try{const t=await f.wallet.contractNFT($.value);if((await t.ownerOf(l.value)).toLowerCase()!=d.walletAddress){A(m("notOwnToken"));return}await(await t.approve(a.tokenLockV3Address,l.value)).wait(),K.value=!1}catch(t){console.log(t)}finally{c.value=!1}}async function he(){u.value=!0,Q.value="";try{if((await(await f.wallet.contractNFT($.value)).ownerOf(l.value)).toLowerCase()!=d.walletAddress){A(m("notOwnToken"));return}await ee()}catch(t){console.log(t)}finally{u.value=!1}}const P=y(!1),te=y(!1);async function oe(){if(P.value=!1,!(!$.value||!Ee($.value))&&l.value){te.value=!0;try{const t=await f.wallet.contractNFT($.value);let s;try{s=await t.ownerOf(l.value)}catch(Ce){console.error(Ce),A(m("trueTokenAddressIDFormat"));return}const k=await t.positions(l.value),_=k[2],T=k[3],L=await(await f.wallet.contractERC20(_)).symbol(),E=await(await f.wallet.contractERC20(T)).symbol();V.value={token0:k[2],token0Symbol:L,token1:k[3],token1Symbol:E,liquidity:k[7]};const ge=await t.getApproved(l.value);K.value=ge.toLowerCase()!=a.tokenLockV3Address.toLowerCase(),P.value=!0}catch(t){console.log(t)}finally{te.value=!1}}}function ne(t){i.value!=t&&(i.value=t,P.value=!1,V.value=null)}function $e(t){$.value=t,oe()}function be(t){l.value=t,oe()}return(t,s)=>{const k=D("van-divider"),_=D("van-cell"),T=D("van-cell-group"),O=D("van-field"),L=D("van-button");return v(),w(I,null,[e("div",wt,[e("ul",ht,[e("li",{class:ae({"tab-select":i.value}),onClick:s[0]||(s[0]=p=>ne(!0))},n(t.$t("tokenOrLP(V2)")),3),e("li",{class:ae({"tab-select":!i.value}),onClick:s[1]||(s[1]=p=>ne(!1))},"LP(uniV3)",2)]),r(k),e("div",$t,[i.value?(v(),w(I,{key:0},[r(T,{inset:"",class:"form-item"},{default:b(()=>[e("div",bt,n(t.$t("selectToken2")),1),r(_,{"is-link":"",class:"token-cell",onClick:ye},Oe({_:2},[o(a).token?{name:"title",fn:b(()=>[o(a).token.tokenType==0?(v(),w("div",gt,[r(G,{class:"token-icon",tokenIcon:o(a).token.icon,chainIcon:o(de)(o(a).token.chain)},null,8,["tokenIcon","chainIcon"]),C(" "+n(`${o(a).token.symbol} (${o(z)(o(a).token.address)})`),1)])):o(a).token.tokenType==1?(v(),w("div",Ct,[r(G,{class:"token-icon",tokenIcon:o(H)(o(a).token.chain,o(a).token.tokenList[0].address)},null,8,["tokenIcon"]),r(G,{class:"token-icon",tokenIcon:o(H)(o(a).token.chain,o(a).token.tokenList[1].address)},null,8,["tokenIcon"]),C(" "+n(`${o(a).token.symbol} (${o(z)(o(a).token.address)})`),1)])):Z("",!0)]),key:"0"}:{name:"title",fn:b(()=>[e("div",{class:"token-box",style:{color:"#999999"}},n(t.$t("pleaseSelectToken")),1)]),key:"1"}]),1024)]),_:1}),r(T,{inset:"",class:"form-item"},{default:b(()=>[e("div",Lt,[e("div",null,n(o(m)("setNumberOfLock")),1),e("div",null,[C(n(`${o(m)("balance")}: `),1),e("span",null,n(F.value?F.value:"--"),1)])]),e("div",null,[r(qe,{amount:N.value,"onUpdate:amount":s[2]||(s[2]=p=>N.value=p),total:F.value,decimals:o(a).token?o(a).token.decimals:0},null,8,["amount","total","decimals"])])]),_:1})],64)):(v(),w(I,{key:1},[r(T,{inset:"",class:"form-item"},{default:b(()=>[e("div",At,[e("div",null,n(t.$t("enterTokenAddress")),1)]),e("div",null,[r(O,{class:"token-cell","model-value":$.value,"onUpdate:modelValue":s[3]||(s[3]=p=>$e(p)),placeholder:t.$t("contractAddress")},null,8,["model-value","placeholder"])])]),_:1}),r(T,{inset:"",class:"form-item"},{default:b(()=>[e("div",Tt,[e("div",null,n(t.$t("enterTokenId")),1)]),e("div",null,[r(O,{class:"token-cell","model-value":l.value,"onUpdate:modelValue":s[4]||(s[4]=p=>be(p)),placeholder:t.$t("forExample")},null,8,["model-value","placeholder"]),P.value?(v(),w("ul",St,[e("li",It,[e("div",Vt,n(t.$t("transactionPairs")),1),e("div",Dt,n(V.value?`${V.value.token0Symbol}/${V.value.token1Symbol}`:"--/--"),1)]),e("li",Nt,[e("div",Ot,n(t.$t("lockQuantity")),1),e("div",Et,n(V.value?o(re).formatEther(V.value.liquidity.toString()):"--"),1)])])):Z("",!0)])]),_:1})],64)),r(T,{inset:"",class:"form-item"},{default:b(()=>[e("div",Bt,[e("div",null,n(t.$t("setDate")),1)]),e("div",null,[r(Be,{date:M.value,"onUpdate:date":s[5]||(s[5]=p=>M.value=p),showTools:""},null,8,["date"])])]),_:1})]),r(k),e("div",Ft,[o(d).isConnectWallet?(v(),w(I,{key:0},[i.value?(v(),w(I,{key:0},[g.value?(v(),U(L,{key:0,class:"btn",type:"danger",onClick:pe,block:"",loading:c.value},{default:b(()=>[C(n(t.$t("approve")),1)]),_:1},8,["loading"])):(v(),U(L,{key:1,class:"btn",color:"#3F80F7",onClick:fe,block:"",loading:u.value},{default:b(()=>[C(n(t.$t("oneKeyLock")),1)]),_:1},8,["loading"]))],64)):(v(),w(I,{key:1},[K.value?(v(),U(L,{key:0,class:"btn",type:"danger",onClick:we,block:"",loading:c.value,disabled:!P.value},{default:b(()=>[C(n(t.$t("approve")),1)]),_:1},8,["loading","disabled"])):(v(),U(L,{key:1,class:"btn",color:"#3F80F7",onClick:he,block:"",loading:u.value,disabled:!P.value},{default:b(()=>[C(n(t.$t("oneKeyLock")),1)]),_:1},8,["loading","disabled"]))],64))],64)):(v(),U(L,{key:1,class:"btn",type:"primary",onClick:ve,block:""},{default:b(()=>[C(n(t.$t("connectWallet")),1)]),_:1}))])]),r(_t,{show:R.value,"onUpdate:show":s[6]||(s[6]=p=>R.value=p),isLockV2:i.value,positions:V.value,unlockDate:M.value,amount:N.value,showGas:X.value,onConfirm:me},null,8,["show","isLockV2","positions","unlockDate","amount","showGas"]),r(Fe,{show:Y.value,"onUpdate:show":s[7]||(s[7]=p=>Y.value=p),txHash:Q.value,onClose:s[8]||(s[8]=p=>o(B).push("/lockMaster"))},null,8,["show","txHash"])],64)}}},Yt=J(Pt,[["__scopeId","data-v-d0198a6f"]]);export{Yt as default};
