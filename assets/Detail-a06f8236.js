import{D as ao,_ as no}from"./DelayPopup-9b114bc4.js";import{_ as K,d as W,$ as X,u as Z,g as w,J as lo,p as j,r as G,o as p,c as y,a as k,l as D,b as t,t as s,T as E,j as l,y as B,A as v,q as A,z as oo,a0 as io,F as to,n as u,H as M,a4 as Y,s as co,E as x,G as z,h as ro,i as uo,m as q,I,k as J,B as R,v as Q,a2 as ko,N as mo,O as po}from"./index-2dc1edc6.js";import{O as _o}from"./OperateSuccessDialog-a3074a61.js";import{I as ho}from"./InputQty-89b6dfe4.js";import{B as V}from"./bignumber-3e8dfdf6.js";const vo="/assets/images/time.png",yo="/assets/images/add.png";const wo={class:"ave-popup"},go={class:"title"},bo={class:"body"},fo={class:"info"},Lo={class:"key"},So={class:"value"},Co={key:0,class:"token"},$o={key:1,class:"token"},Io={class:"key"},Do={class:"value"},To={class:"key"},Vo={class:"value"},Ao={class:"key"},Eo={class:"value"},Bo={class:"key"},Uo={class:"value"},Fo={style:{}},No={__name:"AppendLockPopup",props:{show:Boolean,lockId:String,isLockV2:Boolean,isLpToken:Boolean,unlockDate:Number,tokenList:Array,symbol:String,address:String,chainCoinSymbol:String,amountString:String,chain:String,decimals:Number},emits:["update:show","success"],setup(C,{emit:n}){const a=C,$=W(),U=X(),{t:g}=Z(),o=w(0n),b=w(""),f=w(""),F=w(""),N=w(!1),P=w("");async function H(){const i=await(await u.wallet.contractERC20(a.address)).balanceOf($.walletAddress);if(f.value=M(i,a.decimals),console.log("value:"+f.value),i==0n)throw Y(g("balanceSlow")),n("update:show",!1),"Blance Slow"}async function c(){if(!a.isLockV2)return;const e=await u.wallet.contractTokenLockV2(U.tokenLockV2Address);o.value=await e.editFee();const i=await u.wallet.getBalance($.walletAddress);if(console.log("balance",i),i<o.value){co(g("balanceSlow2",{chainMianCoin:$.chainCoinSymbol,amount:x(o.value)})),n("update:show",!1);return}const _=await(await u.wallet.contractERC20(a.address)).decimals(),h=M("1",_),S=V(a.amountString).plus(V(h)).toString(),T=z(S,_),so=await u.wallet.getGasPrice();let eo=await e.editLock.estimateGas(a.lockId.toString(),T.toString(),0n,{value:o.value});F.value=x(eo*so).toString()}async function d(){if(!a.isLockV2)return;if(!b.value){Y(g("enterAmount"));return}if(V(b.value).gt(V(f.value))){Y(g("balanceSlow"));return}const e=j({message:"Loading...",forbidClick:!0,duration:0}),i=await u.wallet.contractTokenLockV2(U.tokenLockV2Address),_=await(await u.wallet.contractERC20(a.address)).decimals(),h=V(a.amountString).plus(V(b.value)).toString();console.log(h);const S=z(h,_);try{o.value=await i.editFee();let T=await i.editLock(a.lockId.toString(),S.toString(),0n,{value:o.value});console.dir(T),P.value=T.hash,N.value=!0}catch(T){console.log(T)}finally{e.close()}}lo(()=>a.show,(e,i)=>{e&&r()});async function r(){const e=j({message:"Loading...",forbidClick:!0,duration:0});try{await H(),await c()}catch(i){console.log(i)}finally{e.close()}}function m(){n("update:show",!1),n("success")}return(e,i)=>{const L=G("van-button"),_=G("van-popup");return p(),y(to,null,[k(_,{show:C.show,"onUpdate:show":i[1]||(i[1]=h=>{n("update:show",h)}),round:"",closeable:"",position:"bottom"},{default:D(()=>[t("div",wo,[t("div",go,s(e.$t("appendLock")),1),t("div",bo,[t("ul",fo,[t("li",null,[t("div",Lo,s(e.$t("appendAssets")),1),t("div",So,[a.isLpToken?(p(),y("div",Co,[k(E,{class:"token-icon",tokenIcon:l(B)(a.chain,a.tokenList[0].address)},null,8,["tokenIcon"]),k(E,{class:"token-icon",tokenIcon:l(B)(a.chain,a.tokenList[1].address)},null,8,["tokenIcon"]),v(" "+s(`${a.symbol} (${l(A)(a.address)})`),1)])):(p(),y("div",$o,[k(E,{class:"token-icon",tokenIcon:l(B)(a.chain,a.address),chainIcon:l(oo)(a.chain)},null,8,["tokenIcon","chainIcon"]),v(" "+s(`${a.symbol} (${l(A)(a.address)})`),1)]))])]),t("li",null,[t("div",Io,s(e.$t("currentAmount")),1),t("div",Do,s(a.amountString),1)]),t("li",null,[t("div",To,s(e.$t("balance")),1),t("div",Vo,s(`${f.value} ${a.symbol}`),1)]),t("li",null,[t("div",Ao,s(e.$t("editFee")),1),t("div",Eo,s(`${o.value?l(io).formatEther(o.value):"--"} ${a.chainCoinSymbol}`),1)]),t("li",null,[t("div",Bo,s(e.$t("gas")),1),t("div",Uo,s(`${F.value?F.value:"--"} ${a.chainCoinSymbol}`),1)])]),t("div",Fo,[k(ho,{total:f.value,amount:b.value,"onUpdate:amount":i[0]||(i[0]=h=>b.value=h),decimals:a.decimals},null,8,["total","amount","decimals"])]),k(L,{class:"btn",type:"primary",block:"",onClick:d},{default:D(()=>[v(s(e.$t("confirmAndLock")),1)]),_:1})])])]),_:1},8,["show"]),k(_o,{show:N.value,"onUpdate:show":i[2]||(i[2]=h=>N.value=h),txHash:P.value,onClose:m},null,8,["show","txHash"])],64)}}},Po=K(No,[["__scopeId","data-v-828095f1"]]);const O=C=>(mo("data-v-b99e6ed7"),C=C(),po(),C),Ho={key:0,class:"body"},Ro={key:0,class:"token"},Yo={key:1,class:"token"},Go={class:"info"},Mo={class:"item"},qo={class:"key"},Oo={class:"value"},jo={key:0,class:"item"},xo={class:"key"},zo={class:"value"},Jo={class:"item"},Qo={class:"key"},Ko={class:"value"},Wo={class:"item"},Xo={class:"key"},Zo={key:0,class:"value"},ot={key:1,class:"value"},tt={class:"item"},st={class:"key"},et={class:"value"},at={class:"blue-font"},nt={class:"item"},lt={class:"key"},it={class:"value"},ct={class:"item"},dt={class:"key"},rt={class:"value"},ut={class:"footer"},kt=O(()=>t("img",{src:no,alt:""},null,-1)),mt=O(()=>t("img",{src:vo,alt:""},null,-1)),pt=O(()=>t("img",{src:yo,alt:""},null,-1)),_t={__name:"Detail",props:{lockId:String,tokenType:String,version:String},setup(C){const n=C,{t:a}=Z(),$=W(),U=X(),g=w(!1),o=ro({id:n.lockId,address:"",amountString:"",tokenList:[],lockDate:0,unlockDate:0,isLpToken:!1,symbol:"",chain:"",isExpired:!1,chainCoinSymbol:"",decimals:0}),b=w(!1),f=w(!1);async function F(){g.value=!1;let c;n.version=="V2"?c=await u.wallet.contractTokenLockV2(U.tokenLockV2Address):n.version=="V3"&&(c=await u.wallet.contractTokenLockV3(U.tokenLockV3Address)),console.dir(c);let d;try{console.log(n.lockId),d=await c.getLockById(n.lockId)}catch{Y(a("failedToGetDetail"));return}if(o.lockDate=Number(d[4]),o.unlockDate=Number(d[5]),o.tokenId=d.tokenId,o.address=d[1],o.owner=d[2],o.isExpired=R().unix()>=o.unlockDate,o.chain=$.chain,o.chainCoinSymbol=$.chainCoinSymbol,n.tokenType=="lpToken"){if(n.version=="V2")try{const r=await u.wallet.contractLP(o.address);let m=await r.decimals();o.decimals=m;let e=await r.token0(),L=await(await u.wallet.contractERC20(e)).symbol(),_=await r.token1(),S=await(await u.wallet.contractERC20(_)).symbol();o.isLpToken=!0,o.tokenList[0]={symbol:L.toUpperCase(),address:e.toLowerCase()},o.tokenList[1]={symbol:S.toUpperCase(),address:_.toLowerCase()},o.amountString=M(d[3],m),o.symbol=`${L}/${S}`}catch(r){console.log(r)}else if(n.version=="V3")try{let m=await(await u.wallet.contractNFT(o.address)).positions(o.tokenId);console.log(m.token0);let e=m.token0,L=await(await u.wallet.contractERC20(e)).symbol(),_=m.token1,S=await(await u.wallet.contractERC20(_)).symbol();o.isLpToken=!0,o.tokenList[0]={symbol:L.toUpperCase(),address:e.toLowerCase()},o.tokenList[1]={symbol:S.toUpperCase(),address:_.toLowerCase()},o.liquidity=m.liquidity,o.symbol=`${L}/${S}`}catch(r){console.log(r)}}else if(n.tokenType=="token")try{const r=await u.wallet.contractERC20(o.address);let m=await r.symbol(),e=await r.decimals();o.decimals=e,o.tokenList=[],o.isLpToken=!1,o.symbol=m.toUpperCase(),o.amountString=M(d[3],e)}catch(r){console.log(r)}g.value=!0,console.log("getDetailDone")}function N(){console.log(o),b.value=!0}function P(){f.value=!0}function H(){window.location.reload()}return uo(()=>{F()}),w(!0),console.log(n.lockId),console.log(n.tokenType),(c,d)=>{const r=G("van-button"),m=G("van-action-bar");return p(),y(to,null,[g.value?(p(),y("div",Ho,[o.isLpToken?(p(),y("div",Ro,[k(E,{class:"token-icon",tokenIcon:l(B)(o.chain,o.tokenList[0].address)},null,8,["tokenIcon"]),k(E,{class:"token-icon",tokenIcon:l(B)(o.chain,o.tokenList[1].address)},null,8,["tokenIcon"]),v(" "+s(`${o.symbol} (${l(A)(o.address)})`),1)])):(p(),y("div",Yo,[o.address?(p(),q(E,{key:0,class:"token-icon",tokenIcon:l(B)(o.chain,o.address.toLowerCase()),chainIcon:l(oo)(o.chain)},null,8,["tokenIcon","chainIcon"])):I("",!0),v(" "+s(`${o.symbol} (${l(A)(o.address)})`),1)])),t("ul",Go,[t("li",Mo,[t("div",qo,s(c.$t("contractAddress")),1),t("div",Oo,[v(s(l(A)(o.address))+" ",1),k(J,{class:"copy-icon",name:"copy",onClick:d[0]||(d[0]=e=>l(Q)(o.address))})])]),n.version=="V3"?(p(),y("li",jo,[t("div",xo,s(c.$t("tokenID")),1),t("div",zo,s(n.lockId),1)])):I("",!0),t("li",Jo,[t("div",Qo,s(c.$t("contractChian")),1),t("div",Ko,s(o.chain.toUpperCase()),1)]),t("li",Wo,[t("div",Xo,s(`${o.symbol} ${c.$t("lockNumber")}`),1),n.version=="V2"?(p(),y("div",Zo,s(o.amountString),1)):I("",!0),n.version=="V3"?(p(),y("div",ot,s(o.liquidity),1)):I("",!0)]),t("li",tt,[t("div",st,s(c.$t("unlockTime2")),1),t("div",et,[t("span",null,s(l(R).unix(o.unlockDate).format("YYYY-MM-DD HH:mm:ss")),1),t("span",null,[v("("),t("span",at,s(o.isExpired?c.$t("expired"):c.$t("dayLeft",{day:l(ko)(l(R).unix(o.unlockDate).toDate())})),1),v(")")])])]),t("li",nt,[t("div",lt,s(c.$t("lockUser")),1),t("div",it,[v(s(l(A)(o.owner))+" ",1),k(J,{class:"copy-icon",name:"copy",onClick:d[1]||(d[1]=e=>l(Q)(o.owner))})])]),t("li",ct,[t("div",dt,s(c.$t("lockTime")),1),t("div",rt,s(l(R).unix(o.lockDate).format("YYYY-MM-DD HH:mm:ss")),1)])])])):I("",!0),t("div",ut,[t("span",null,s(`${c.$t("technicalSupport")}:`),1),kt]),!o.isExpired&&g.value&&l($).walletAddress&&o.owner.toLowerCase()==l($).walletAddress.toLowerCase()?(p(),q(m,{key:1,class:"tools"},{default:D(()=>[k(r,{class:"btn",color:"#9F3FF7",onClick:N},{icon:D(()=>[mt]),default:D(()=>[v(s(c.$t("delay")),1)]),_:1}),n.version=="V2"?(p(),q(r,{key:0,class:"btn",color:"#3F80F7",onClick:P},{icon:D(()=>[pt]),default:D(()=>[v(s(c.$t("append")),1)]),_:1})):I("",!0),k(ao,{show:b.value,"onUpdate:show":d[2]||(d[2]=e=>b.value=e),onSuccess:H,isLockV2:n.version=="V2",lockId:o.id,isLpToken:o.isLpToken,chain:o.chain,unlockDate:o.unlockDate,tokenList:o.tokenList,symbol:o.symbol,address:o.address,chainCoinSymbol:o.chainCoinSymbol,amountString:o.amountString,decimals:o.decimals},null,8,["show","isLockV2","lockId","isLpToken","chain","unlockDate","tokenList","symbol","address","chainCoinSymbol","amountString","decimals"]),k(Po,{show:f.value,"onUpdate:show":d[3]||(d[3]=e=>f.value=e),onSuccess:H,isLockV2:n.version=="V2",lockId:o.id,isLpToken:o.isLpToken,chain:o.chain,unlockDate:o.unlockDate,tokenList:o.tokenList,symbol:o.symbol,address:o.address,chainCoinSymbol:o.chainCoinSymbol,amountString:o.amountString,decimals:o.decimals},null,8,["show","isLockV2","lockId","isLpToken","chain","unlockDate","tokenList","symbol","address","chainCoinSymbol","amountString","decimals"])]),_:1})):I("",!0)],64)}}},bt=K(_t,[["__scopeId","data-v-b99e6ed7"]]);export{bt as default};
