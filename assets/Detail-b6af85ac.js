import{_ as W}from"./Dialog-64046d7c.js";import{T as fe,d as X,a as pe,g as ke,_ as I,n as P,f as ye,c as we}from"./TokenIcon-138447c5.js";import{_ as se,n as u,j as ae,A as $e,L as be,o as v,q as w,f as e,t,y as N,x as ge,p as te,g as oe,h as Te,C as Ae,k as E,r as Z,c as m,l,d as B,w as T,B as G,F as x,E as Ce,D as k,M as Se,G as ee}from"./index-e864de28.js";import{d as z,B as i,f as c,p as Ie}from"./dayjs.min-dab59b25.js";import{P as Be}from"./Progress-2d546016.js";import{_ as De,M as Re}from"./NumberInput-4dcbafba.js";import{u as Pe}from"./presale-9b6d39d4.js";import{s as _}from"./function-call-ecde7c14.js";const Ee=y=>(te("data-v-4369e074"),y=y(),oe(),y),Ne={class:"info-box"},Me={key:0,class:"fold-operate-fixed"},Le=Ee(()=>e("span",{class:"dot"},"...",-1)),He={class:"fold-text"},Ue={__name:"ShowMore",props:{introduce:{type:String,default:""}},setup(y){const n=y,r=u(!1),A=u(!0),C=u(null);ae(),$e(()=>{M()});async function M(){if(!n.introduce)return;await be();let h=C.value.scrollHeight,D=C.value.offsetHeight;h>D&&(r.value=!0)}async function $(){A.value=!1}async function a(){A.value=!0}return(h,D)=>(v(),w("div",Ne,[e("div",{class:ge(["info",{fold:A.value}]),ref_key:"info",ref:C},[r.value&&A.value?(v(),w("div",Me,[Le,e("span",{class:"fold-operate",onClick:$},t(h.$t("expand")),1)])):N("",!0),e("span",He,t(n.introduce),1),A.value?N("",!0):(v(),w("span",{key:1,class:"fold-operate",onClick:a},t(h.$t("putAway")),1))],2)]))}},Fe=se(Ue,[["__scopeId","data-v-4369e074"]]);const H=y=>(te("data-v-f74e918c"),y=y(),oe(),y),Ve={key:0,class:"detail-body"},je={class:"banner"},Oe=["src"],qe={class:"info detail-item"},Ge={class:"avatar"},ze={class:"name"},Ye={class:"tools"},Je={class:"contact-list"},Ke={class:"detail-item"},Qe={class:"title-grey"},We={class:"key-value-list"},Xe={class:"key-value"},Ze={class:"key"},xe={class:"value"},es={class:"key-value"},ss={class:"key"},as=H(()=>e("div",{class:"value"},"$--",-1)),ts={class:"key-value"},os={class:"key"},ls={class:"value"},ns={class:"key-value"},is={class:"key"},cs={class:"value"},us={class:"key-value"},rs={class:"key"},ds={class:"value"},vs={class:"key-value"},ms={class:"key"},hs={class:"value"},_s={class:"key-value"},fs={class:"key"},ps={class:"value"},ks={class:"key-value"},ys={class:"key"},ws={class:"value"},$s={class:"key-value"},bs={class:"key"},gs={class:"value"},Ts={class:"key-value"},As={class:"key"},Cs={class:"value icon-text"},Ss={class:"detail-item"},Is={class:"title-grey"},Bs=["href"],Ds={class:"key-value-list"},Rs={class:"key-value"},Ps={class:"key"},Es={class:"value"},Ns={class:"key-value"},Ms={class:"key"},Ls={class:"value"},Hs={class:"key-value"},Us={class:"key"},Fs={class:"value"},Vs={class:"key-value"},js={class:"key"},Os=H(()=>e("div",{class:"value"},"买2%，卖7%",-1)),qs={class:"key-value"},Gs={class:"key"},zs={class:"value"},Ys={class:"detail-item"},Js={class:"amount"},Ks={class:"chain-drop-down"},Qs={class:"left"},Ws={class:"token"},Xs=H(()=>e("div",{class:"right"},null,-1)),Zs={class:"amount-info"},xs={key:0},ea={key:1},sa={class:"small"},aa={class:"small"},ta={class:"key-value-list"},oa={class:"key-value"},la={class:"key"},na={key:0},ia={key:1,class:"value"},ca={class:"key-value"},ua={class:"key"},ra={class:"value"},da={class:"key-value"},va={class:"key"},ma={class:"value"},ha={class:"key-value"},_a={class:"key"},fa={class:"value"},pa={class:"risk-tips"},ka={class:"top-icon"},ya={class:"top-text"},wa=H(()=>e("a",null,"https://t.me/farmersworldofficial",-1)),$a={class:"top-icon"},ba={class:"top-text"},ga={__name:"Detail",setup(y){const{t:n}=ae(),r=Te(),A=Pe(),C=u(!1),M=Ae(),$=u(""),a=u(null),h=u(0n),D=u(0n),Y=u(0n),b=u(0n),g=u(z().unix());async function le(){const s=Ce({message:n("getDetail")+"...",forbidClick:!0,duration:0});try{let o=await k.presale.getPresale(M.params.chain,M.params.contractAddress);if(o.status!=1)throw o.msg;console.dir(o.data),a.value=o.data,document.title=a.value.tokenName,await K()}catch(o){console.error(o)}finally{s.close()}}le();const ne=E(()=>{var s,o;return`https://ave.ai/check/${(s=a.value)==null?void 0:s.tokenAddress}-${(o=a.value)==null?void 0:o.contractChain}`}),ie=E(()=>{if(a.value){let s=[];return a.value.liquidityRate>0&&s.push(`${a.value.liquidityRate/100}%${n("menuLiquidity")}`),a.value.salesRate>0&&s.push(`${a.value.salesRate/100}%${n("marketing&Construction")}`),a.value.marketRate>0&&s.push(`${a.value.marketRate/100}%${n("markeRateManage")}`),a.value.otherRate>0&&s.push(`${a.value.otherRate/100}%${n("other")}`),s.join(",")}return""}),ce=E(()=>{if(g.value&&a.value){let s=X(g.value,a.value.endTime);return`${s.day*24+s.hour<10?"0"+(s.day*24+s.hour):s.day*24+s.hour}:${s.minute<10?"0"+s.minute:s.minute}:${s.second<10?"0"+s.second:s.second} `}return""}),J=E(()=>{if(g.value&&a.value){let s=X(g.value,a.value.startTime),o="";return s.day>0&&(o+=`${s.day} ${n("day")}`),s.hour>0&&(o+=`${s.hour} ${n("hour")}`),s.minute>0&&(o+=`${s.minute} ${n("minute")}`),s.second>0&&(o+=`${s.second} ${n("second")}`),o}return""});async function K(){a.value&&(await U(),a.value.status==0&&a.value.startTime<=g.value<a.value.endTime&&setTimeout(()=>{K()},1e4))}async function U(){if(a.value){const s=await k.wallet.contractPresale(a.value.contractAddress);if(D.value=await s.cumulateAmount(),Y.value=await s.investorNumber(),b.value=await s.investAmounts(r.walletAddress),a.value.isEth){const o=k.wallet.getEthersProvider();h.value=await o.getBalance(r.walletAddress)}else{const o=await k.wallet.contractERC20(a.value.baseTokenAddress);h.value=await o.balanceOf(r.walletAddress)}}}async function ue(){const s=await k.wallet.contractPresale(a.value.contractAddress);if(a.value.isEth){const p=k.wallet.getEthersProvider();h.value=await p.getBalance(r.walletAddress)}else{const p=await k.wallet.contractERC20(a.value.baseTokenAddress);h.value=await p.balanceOf(r.walletAddress)}const o=await s.getMaxInvestAmount();let d=i(c(h.value,a.value.baseTokenDecimal)),f=i(c(o,a.value.baseTokenDecimal));$.value=d.lt(f)?d.toString():f.toString()}setInterval(()=>{g.value=z().unix()},1e3);const S=E(()=>a.value?a.value.isEth&&r.chain==a.value.contractChain?r.chainCoinSymbol:a.value.baseTokenSymbol:""),F=u(!1);async function re(){if(!$.value){_(n("inputInvestAmount"));return}const s=i($.value).toNumber();if(s<=0){_(n("investAmountLimit"));return}const o=i(c(a.value.minInvest,a.value.baseTokenDecimal)).toNumber(),d=i(c(a.value.maxInvest,a.value.baseTokenDecimal)).toNumber();if(s<o||s>d){_(n("investAmountLimit2"));return}F.value=!0;try{await de()}catch(f){console.log(f)}finally{F.value=!1}}async function de(){const s=await k.wallet.contractPresale(a.value.contractAddress);if(a.value.isEth){const L=k.wallet.getEthersProvider();h.value=await L.getBalance(r.walletAddress)}else{const L=await k.wallet.contractERC20(a.value.baseTokenAddress);h.value=await L.balanceOf(r.walletAddress)}const o=Ie($.value,a.value.baseTokenDecimal);if(o>h.value){_(n("balanceNotEnough"));return}const d=await s.getMaxInvestAmount();if(o>d){_(n("exceededInvestRange"));return}let f;if(a.value.isEth)f=await s.buyToken(0n,{value:o});else{var p=await k.wallet.contractERC20(a.value.baseTokenAddress);if(await p.allowance(r.walletAddress,a.value.contractAddress)<o&&(_(n("approveFirst")),V.value=!0,!await Q()))return;f=await s.buyToken(o)}console.dir(f),R.value=f.hash,await f.wait(),_({type:"success",message:n("upChainSuccessfully")}),A.setJoinedContractAddresses(r.walletAddress,a.value.contractAddress),C.value=!0,await U()}const V=u(!1),j=u(!1);async function Q(){j.value=!0;try{var s=await k.wallet.contractERC20(a.value.baseTokenAddress);return(await(await s.approve(a.value.contractAddress,Re)).wait()).status===1?(_({type:"success",message:n("upChainSuccessfully")}),V.value=!1,!0):(_(n("unkonwError")),!1)}catch(o){return console.log(o),o.info&&o.info.error&&o.info.error.code===4001?_(n("userCancelOperate")):o.error&&o.error.message&&o.error.message=="Canceled"?_(n("userCancelOperate")):_(n("unkonwError")),!1}finally{j.value=!1}}const O=u(!1),q=u(!1),R=u("");async function ve(){O.value=!0;try{await me()}catch(s){console.log(s)}finally{O.value=!1}}async function me(){if(b.value<=0n){_(n("notInvest"));return}let o=await(await k.wallet.contractPresale(a.value.contractAddress)).claim();R.value=o.hash,q.value=!0,o.wait().then(async d=>{d.status===1&&(_({type:"success",message:n("upChainSuccessfully")}),await U())})}async function he(){window.open(r.txNetwork+R.value)}function _e(){window.open(r.txNetwork+R.value)}return(s,o)=>{const d=Z("van-button"),f=Z("van-image");return v(),w(x,null,[a.value?(v(),w("div",Ve,[e("div",je,[e("img",{src:a.value.bannerImage,alt:""},null,8,Oe)]),e("div",qe,[e("div",Ge,[m(fe,{class:"token-icon",tokenIcon:l(pe)(a.value.tokenAddress),chainIcon:l(ke)(a.value.contractChain)},null,8,["tokenIcon","chainIcon"])]),e("div",ze,t(a.value.tokenSymbol),1),a.value.description?(v(),B(Fe,{key:0,introduce:a.value.description},null,8,["introduce"])):N("",!0),e("div",Ye,[e("ul",Je,[e("li",null,[m(I,{name:"twitterGrey"})]),e("li",null,[m(I,{name:"telegramGrey"})]),e("li",null,[m(I,{name:"discordGrey"})]),e("li",null,[m(I,{name:"youtubeGrey"})])]),m(d,{type:"primary",class:"remind"},{default:T(()=>[G(t(s.$t("reminderForStarting")),1)]),_:1})])]),e("div",Ke,[e("div",Qe,t(s.$t("launchInformation")),1),e("ul",We,[e("li",Xe,[e("div",Ze,t(s.$t("launchTotal")),1),e("div",xe,t(l(P)(l(i)(l(c)(BigInt(a.value.saleAmount),a.value.tokenDecimal)))),1)]),e("li",es,[e("div",ss,t(s.$t("initMarkrtValue")),1),as]),e("li",ts,[e("div",os,t(s.$t("launchPrice")),1),e("div",ls,t(`1 ${l(S)} = ${l(i)(l(c)(a.value.salePrice,6))} ${a.value.tokenSymbol}`),1)]),e("li",ns,[e("div",is,t(s.$t("launchRelease")),1),e("div",cs,t(`${l(i)(l(i)(a.value.saleAmount).div(l(i)(a.value.tokenTotalSupply)).multipliedBy(100).toFixed(8))}%${s.$t("release")}`),1)]),e("li",us,[e("div",rs,t(s.$t("launchEnd")),1),e("div",ds,t(`${l(ce)} ${s.$t("end")}`),1)]),e("li",vs,[e("div",ms,t(s.$t("tradeTime")),1),e("div",hs,t(`${l(z).unix(a.value.startTime).format("YYYY-MM-DD HH:mm")} (UTC)`),1)]),e("li",_s,[e("div",fs,t(s.$t("launchProgress")),1),e("div",ps,[m(Be,{launchAmountNow:l(i)(l(c)(D.value,a.value.baseTokenDecimal)).toString(),launchAmountTarget:l(i)(l(c)(a.value.hardCap,a.value.baseTokenDecimal)).toString(),symbol:l(S),class:"progress"},null,8,["launchAmountNow","launchAmountTarget","symbol"])])]),e("li",ks,[e("div",ys,t(s.$t("purposeOfFunds")),1),e("div",ws,t(l(ie)),1)]),e("li",$s,[e("div",bs,t(s.$t("liquidityAdd")),1),e("div",gs,t(s.$t("add&lockTime",{lpLockTime:a.value.lpLockTime})),1)]),e("li",Ts,[e("div",As,t(s.$t("tradePlatform")),1),e("div",Cs,[m(f,{class:"icon","lazy-load":"",round:"",src:`https://www.avestorage.cloud/swap/${a.value.dexName.toLowerCase()}.jpeg`,"error-icon":"/assets/images/default.png"},null,8,["src"]),e("div",null,t(a.value.dexName),1)])])])]),e("div",Ss,[e("div",Is,[e("span",null,t(s.$t("economicModelTitle")),1),e("a",{class:"title-right contract-check",target:"_blank",href:l(ne)},t(s.$t("contractDetection"))+">",9,Bs)]),e("ul",Ds,[e("li",Rs,[e("div",Ps,t(s.$t("tokenContract")),1),e("div",Es,[G(t(l(ye)(a.value.tokenAddress))+" ",1),m(I,{name:"copy"})])]),e("li",Ns,[e("div",Ms,t(s.$t("publishAmount")),1),e("div",Ls,t(l(P)(l(i)(l(c)(BigInt(a.value.tokenTotalSupply),a.value.tokenDecimal)))),1)]),e("li",Hs,[e("div",Us,t(s.$t("shareAllocation")),1),e("div",Fs,t(a.value.tokenEconomicModel),1)]),e("li",Vs,[e("div",js,t(s.$t("transactionTax")),1),Os]),e("li",qs,[e("div",Gs,t(s.$t("taxDescription")),1),e("div",zs,t(a.value.tokenTaxUsage),1)])])]),e("div",Ys,[e("div",null,[e("div",Js,[e("div",Ks,[e("div",Qs,[m(f,{class:"icon","lazy-load":"",round:"",src:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a.png","error-icon":"/assets/images/default.png"}),e("div",Ws,t(l(S)),1)]),Xs]),m(De,{modelValue:$.value,"onUpdate:modelValue":o[0]||(o[0]=p=>$.value=p),placeholder:s.$t("inputAmount"),class:"amount-ipt"},null,8,["modelValue","placeholder"]),e("div",{class:"amount-max",onClick:ue},t(s.$t("max")),1)]),e("div",Zs,[e("div",null,t(`${s.$t("investRange")}:${l(i)(l(c)(a.value.minInvest,a.value.baseTokenDecimal))}-${l(i)(l(c)(a.value.maxInvest,a.value.baseTokenDecimal))} ${l(S)}, ${s.$t("invested")}${l(i)(l(c)(b.value,a.value.baseTokenDecimal))}`),1),e("div",null,t(`${s.$t("balance")}: ${l(i)(l(c)(h.value,a.value.baseTokenDecimal))} ${l(S)}`),1)]),a.value.status==0&&g.value<a.value.startTime?(v(),B(d,{key:0,type:"primary",block:"",class:"btn",onClick:o[1]||(o[1]=p=>{l(Se)(s.$t("fromStartTime",{startTimeCountdown:l(J)}))})},{default:T(()=>[e("div",null,t(s.$t("fromStartTime",{startTimeCountdown:l(J)})),1)]),_:1})):a.value.status==0&&a.value.startTime<=g.value<a.value.endTime?(v(),w(x,{key:1},[V.value?(v(),B(d,{key:0,type:"danger",block:"",class:"btn",onClick:Q,loading:j.value},{default:T(()=>[G("Approve")]),_:1},8,["loading"])):(v(),B(d,{key:1,type:"primary",block:"",class:"btn",onClick:re,loading:F.value},{default:T(()=>[b.value==0n?(v(),w("div",xs,t(s.$t("immediateInvest")),1)):(v(),w("div",ea,t(s.$t("continueInvest")),1)),e("div",sa,"("+t(s.$t("investorPeople",{investorNumber:Y.value}))+")",1)]),_:1},8,["loading"]))],64)):a.value.status==1?(v(),B(d,{key:2,color:"#999999",block:"",class:"btn"},{default:T(()=>[e("div",null,t(s.$t("returnedToken")),1),e("div",aa,"(*"+t(s.$t("returnedAddress"))+")",1)]),_:1})):a.value.status==2?(v(),B(d,{key:3,type:"primary",block:"",class:"btn",onClick:ve,loading:O.value},{default:T(()=>[e("div",null,t(s.$t("finishReceiveToken")),1)]),_:1},8,["loading"])):N("",!0)]),e("ul",ta,[e("li",oa,[e("div",la,t(s.$t("investStatus")),1),b.value==0n?(v(),w("div",na,t(s.$t("notInvested")),1)):(v(),w("div",ia,t(s.$t("invested")),1))]),e("li",ca,[e("div",ua,t(s.$t("expectedReceipt")),1),e("div",ra,t(`${l(P)(l(i)(l(c)(b.value,a.value.baseTokenDecimal)).multipliedBy(l(i)(l(c)(a.value.salePrice,6))))} ${a.value.tokenSymbol}`),1)]),e("li",da,[e("div",va,t(s.$t("investAmount")),1),e("div",ma,t(`${l(P)(l(i)(l(c)(b.value,a.value.baseTokenDecimal)))} ${l(S)}`),1)]),e("li",ha,[e("div",_a,t(s.$t("expectedReturn")),1),e("div",fa,t(`${l(P)(l(i)(l(c)(b.value,a.value.baseTokenDecimal)))} ${l(S)}`),1)])]),e("div",pa,[e("div",null,t(s.$t("riskReminder"))+":",1),e("div",null,t(s.$t("reminderInfo")),1)])])])):N("",!0),m(W,{class:"show-join-success",confirmText:s.$t("reminderForStarting"),cancelText:s.$t("checkHash"),show:C.value,"onUpdate:show":o[2]||(o[2]=p=>C.value=p),onCancelClick:_e},{default:T(()=>[ee(s.$slots,"default",{},()=>[e("div",ka,[m(I,{class:"icon",name:"createSuccess"}),e("div",ya,t(s.$t("SuccessParticipated")),1)]),e("text",null,t(s.$t("contactTeam")),1),wa],!0)]),_:3},8,["confirmText","cancelText","show"]),m(W,{class:"show-join-success","confirm-text":s.$t("checkBlockchainBrowser"),show:q.value,"onUpdate:show":o[4]||(o[4]=p=>q.value=p),showCancelButton:!1,onConfirmClick:he},{default:T(()=>[ee(s.$slots,"default",{},()=>[e("div",$a,[m(I,{class:"icon",name:"createSuccess"}),e("div",ba,t(s.$t("operateSuccess")),1)]),e("div",{class:"copy-hash",onClick:o[3]||(o[3]=p=>l(we)(R.value))},t(s.$t("copyHash")),1)],!0)]),_:3},8,["confirm-text","show"])],64)}}},Ea=se(ga,[["__scopeId","data-v-f74e918c"]]);export{Ea as default};
