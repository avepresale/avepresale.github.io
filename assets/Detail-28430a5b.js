import{_ as Q}from"./Dialog-07c94ba7.js";import{T as fe,d as W,a as ye,g as ke,_ as B,n as N,f as pe,c as we}from"./TokenIcon-1709db4b.js";import{_ as se,n as u,j as ae,A as $e,L as be,o as _,q as $,f as e,t as l,y as M,x as ge,p as te,g as oe,h as Te,C as Ae,k as P,r as X,c as m,l as o,d as D,w as A,B as q,F as Z,E as Ce,D as p,M as Se,G as ee}from"./index-50c344a8.js";import{d as G,B as i,f as c,p as Ie}from"./dayjs.min-28e1ab39.js";import{P as Be}from"./Progress-096e06ac.js";import{_ as De,M as xe}from"./NumberInput-36bf40f9.js";import{u as Ee}from"./presale-04965cc7.js";import{s as f}from"./function-call-6146fb36.js";const Ne=w=>(te("data-v-4369e074"),w=w(),oe(),w),Pe={class:"info-box"},Me={key:0,class:"fold-operate-fixed"},Re=Ne(()=>e("span",{class:"dot"},"...",-1)),Le={class:"fold-text"},Ue={__name:"ShowMore",props:{introduce:{type:String,default:""}},setup(w){const n=w,r=u(!1),C=u(!0),S=u(null);ae(),$e(()=>{R()});async function R(){if(!n.introduce)return;await be();let h=S.value.scrollHeight,x=S.value.offsetHeight;h>x&&(r.value=!0)}async function b(){C.value=!1}async function s(){C.value=!0}return(h,x)=>(_(),$("div",Pe,[e("div",{class:ge(["info",{fold:C.value}]),ref_key:"info",ref:S},[r.value&&C.value?(_(),$("div",Me,[Re,e("span",{class:"fold-operate",onClick:b},l(h.$t("expand")),1)])):M("",!0),e("span",Le,l(n.introduce),1),C.value?M("",!0):(_(),$("span",{key:1,class:"fold-operate",onClick:s},l(h.$t("putAway")),1))],2)]))}},He=se(Ue,[["__scopeId","data-v-4369e074"]]);const d=w=>(te("data-v-347c7d2a"),w=w(),oe(),w),Ve={key:0,class:"detail-body"},je={class:"banner"},Fe=["src"],Oe={class:"info detail-item"},qe={class:"avatar"},Ge={class:"name"},ze={class:"tools"},Ye={class:"contact-list"},Je={class:"detail-item"},Ke={class:"title-grey"},Qe={class:"key-value-list"},We={class:"key-value"},Xe={class:"key"},Ze={class:"value"},es={class:"key-value"},ss={class:"key"},as=d(()=>e("div",{class:"value"},"$--",-1)),ts={class:"key-value"},os={class:"key"},ls={class:"value"},ns={class:"key-value"},is={class:"key"},cs={class:"value"},us={class:"key-value"},ds={class:"key"},rs={class:"value"},vs={class:"key-value"},_s={class:"key"},ms={class:"value"},hs={class:"key-value"},fs={class:"key"},ys={class:"value"},ks={class:"key-value"},ps={class:"key"},ws={class:"value"},$s={class:"key-value"},bs={class:"key"},gs={class:"value"},Ts={class:"key-value"},As=d(()=>e("div",{class:"key"},"交易平台",-1)),Cs={class:"value icon-text"},Ss={class:"detail-item"},Is={class:"title-grey"},Bs=["href"],Ds={class:"key-value-list"},xs={class:"key-value"},Es={class:"key"},Ns={class:"value"},Ps={class:"key-value"},Ms={class:"key"},Rs={class:"value"},Ls={class:"key-value"},Us={class:"key"},Hs={class:"value"},Vs={class:"key-value"},js={class:"key"},Fs=d(()=>e("div",{class:"value"},"买2%，卖7%",-1)),Os={class:"key-value"},qs=d(()=>e("div",{class:"key"},"费率说明",-1)),Gs={class:"value"},zs={class:"detail-item"},Ys={class:"amount"},Js={class:"chain-drop-down"},Ks={class:"left"},Qs={class:"token"},Ws=d(()=>e("div",{class:"right"},null,-1)),Xs={class:"amount-info"},Zs={key:0},ea={key:1},sa={class:"small"},aa=d(()=>e("div",null,"已取消/过期，领取退回代币",-1)),ta=d(()=>e("div",{class:"small"},"(*已投入资金将自动返还原地址)",-1)),oa=d(()=>e("div",null,"已完成，领取代币",-1)),la={class:"key-value-list"},na={class:"key-value"},ia=d(()=>e("div",{class:"key"},"投入状态",-1)),ca={key:0},ua={key:1,class:"value"},da={class:"key-value"},ra=d(()=>e("div",{class:"key"},"预计收到",-1)),va={class:"value"},_a={class:"key-value"},ma=d(()=>e("div",{class:"key"},"投入金额",-1)),ha={class:"value"},fa={class:"key-value"},ya=d(()=>e("div",{class:"key"},"预计退回",-1)),ka={class:"value"},pa=d(()=>e("div",{class:"risk-tips"},[e("div",null,"风险提示："),e("div",null," 该网站提供的任何信息都不构成投资建议、财务咨询、交易咨询，或任何其他建议，请您也不用将网站提供的信息视为以上列举的咨询。 ")],-1)),wa={class:"top-icon"},$a=d(()=>e("div",{class:"top-text"},"参与成功",-1)),ba=d(()=>e("text",null,"请等待募集结束后，将自动发放代币，如需咨询请联系团队",-1)),ga=d(()=>e("a",null,"https://t.me/farmersworldofficial",-1)),Ta={class:"top-icon"},Aa=d(()=>e("div",{class:"top-text"},"操作已成功提交，请等待链上执行完成",-1)),Ca={__name:"Detail",setup(w){const{t:n}=ae(),r=Te(),C=Ee(),S=u(!1),R=Ae(),b=u(""),s=u(null),h=u(0n),x=u(0n),z=u(0n),g=u(0n),T=u(G().unix());async function le(){const a=Ce({message:n("getDetail")+"...",forbidClick:!0,duration:0});try{let t=await p.presale.getPresale(R.params.chain,R.params.contractAddress);if(t.status!=1)throw t.msg;console.dir(t.data),s.value=t.data,await J()}catch(t){console.error(t)}finally{a.close()}}le();const ne=P(()=>{var a,t;return`https://ave.ai/check/${(a=s.value)==null?void 0:a.tokenAddress}-${(t=s.value)==null?void 0:t.contractChain}`}),ie=P(()=>{if(s.value){let a=[];return s.value.liquidityRate>0&&a.push(`${s.value.liquidityRate/100}%${$t("menuLiquidity")}`),s.value.salesRate>0&&a.push(`${s.value.salesRate/100}%${$t("marketing&Construction")}`),s.value.marketRate>0&&a.push(`${s.value.marketRate/100}%${$t("markeRateManage")}`),s.value.otherRate>0&&a.push(`${s.value.otherRate/100}%${$t("other")}`),a.join(",")}return""}),ce=P(()=>{if(T.value&&s.value){let a=W(T.value,s.value.endTime);return`${a.day*24+a.hour<10?"0"+(a.day*24+a.hour):a.day*24+a.hour}:${a.minute<10?"0"+a.minute:a.minute}:${a.second<10?"0"+a.second:a.second} `}return""}),Y=P(()=>{if(T.value&&s.value){let a=W(T.value,s.value.startTime),t="";return a.day>0&&(t+=`${a.day} ${n("day")}`),a.hour>0&&(t+=`${a.hour} ${n("hour")}`),a.minute>0&&(t+=`${a.minute} ${n("minute")}`),a.second>0&&(t+=`${a.second} ${n("second")}`),t}return""});async function J(){s.value&&(await U(),s.value.status==0&&s.value.startTime<=T.value<s.value.endTime&&setTimeout(()=>{J()},1e4))}async function U(){if(s.value){const a=await p.wallet.contractPresale(s.value.contractAddress);if(x.value=await a.cumulateAmount(),z.value=await a.investorNumber(),g.value=await a.investAmounts(r.walletAddress),s.value.isEth){const t=p.wallet.getEthersProvider();h.value=await t.getBalance(r.walletAddress)}else{const t=await p.wallet.contractERC20(s.value.baseTokenAddress);h.value=await t.balanceOf(r.walletAddress)}}}async function ue(){const a=await p.wallet.contractPresale(s.value.contractAddress);if(s.value.isEth){const k=p.wallet.getEthersProvider();h.value=await k.getBalance(r.walletAddress)}else{const k=await p.wallet.contractERC20(s.value.baseTokenAddress);h.value=await k.balanceOf(r.walletAddress)}const t=await a.getMaxInvestAmount();let v=i(c(h.value,s.value.baseTokenDecimal)),y=i(c(t,s.value.baseTokenDecimal));b.value=v.lt(y)?v.toString():y.toString()}setInterval(()=>{T.value=G().unix()},1e3);const I=P(()=>s.value?s.value.isEth&&r.chain==s.value.contractChain?r.chainCoinSymbol:s.value.baseTokenSymbol:""),H=u(!1);async function de(){if(!b.value){f(n("inputInvestAmount"));return}const a=i(b.value).toNumber();if(a<=0){f(n("investAmountLimit"));return}const t=i(c(s.value.minInvest,s.value.baseTokenDecimal)).toNumber(),v=i(c(s.value.maxInvest,s.value.baseTokenDecimal)).toNumber();if(a<t||a>v){f(n("investAmountLimit2"));return}H.value=!0;try{await re()}catch(y){console.log(y)}finally{H.value=!1}}async function re(){const a=await p.wallet.contractPresale(s.value.contractAddress);if(s.value.isEth){const L=p.wallet.getEthersProvider();h.value=await L.getBalance(r.walletAddress)}else{const L=await p.wallet.contractERC20(s.value.baseTokenAddress);h.value=await L.balanceOf(r.walletAddress)}const t=Ie(b.value,s.value.baseTokenDecimal);if(t>h.value){f(n("balanceNotEnough"));return}const v=await a.getMaxInvestAmount();if(t>v){f(n("exceededInvestRange"));return}let y;if(s.value.isEth)y=await a.buyToken(0n,{value:t});else{var k=await p.wallet.contractERC20(s.value.baseTokenAddress);if(await k.allowance(r.walletAddress,s.value.contractAddress)<t&&(f("需要先授权"),V.value=!0,!await K()))return;y=await a.buyToken(t)}console.dir(y),E.value=y.hash,await y.wait(),f({type:"success",message:n("upChainSuccessfully")}),C.setJoinedContractAddresses(r.walletAddress,s.value.contractAddress),S.value=!0,await U()}const V=u(!1),j=u(!1);async function K(){j.value=!0;try{var a=await p.wallet.contractERC20(s.value.baseTokenAddress);return(await(await a.approve(s.value.contractAddress,xe)).wait()).status===1?(f({type:"success",message:n("upChainSuccessfully")}),V.value=!1,!0):(f(n("unkonwError")),!1)}catch(t){return console.log(t),t.info&&t.info.error&&t.info.error.code===4001?f(n("userCancelOperate")):t.error&&t.error.message&&t.error.message=="Canceled"?f(n("userCancelOperate")):f(n("unkonwError")),!1}finally{j.value=!1}}const F=u(!1),O=u(!1),E=u("");async function ve(){F.value=!0;try{await _e()}catch(a){console.log(a)}finally{F.value=!1}}async function _e(){if(g.value<=0n){f(n("notInvest"));return}let t=await(await p.wallet.contractPresale(s.value.contractAddress)).claim();E.value=t.hash,O.value=!0,t.wait().then(async v=>{v.status===1&&(f({type:"success",message:n("upChainSuccessfully")}),await U())})}async function me(){window.open(r.txNetwork+E.value)}function he(){window.open(r.txNetwork+E.value)}return(a,t)=>{const v=X("van-button"),y=X("van-image");return _(),$(Z,null,[s.value?(_(),$("div",Ve,[e("div",je,[e("img",{src:s.value.bannerImage,alt:""},null,8,Fe)]),e("div",Oe,[e("div",qe,[m(fe,{class:"token-icon",tokenIcon:o(ye)(s.value.tokenAddress),chainIcon:o(ke)(s.value.contractChain)},null,8,["tokenIcon","chainIcon"])]),e("div",Ge,l(s.value.tokenSymbol),1),s.value.description?(_(),D(He,{key:0,introduce:s.value.description},null,8,["introduce"])):M("",!0),e("div",ze,[e("ul",Ye,[e("li",null,[m(B,{name:"twitterGrey"})]),e("li",null,[m(B,{name:"telegramGrey"})]),e("li",null,[m(B,{name:"discordGrey"})]),e("li",null,[m(B,{name:"youtubeGrey"})])]),m(v,{type:"primary",class:"remind"},{default:A(()=>[q(l(a.$t("reminderForStarting")),1)]),_:1})])]),e("div",Je,[e("div",Ke,l(a.$t("launchInformation")),1),e("ul",Qe,[e("li",We,[e("div",Xe,l(a.$t("launchTotal")),1),e("div",Ze,l(o(N)(o(i)(o(c)(BigInt(s.value.saleAmount),s.value.tokenDecimal)))),1)]),e("li",es,[e("div",ss,l(a.$t("initMarkrtValue")),1),as]),e("li",ts,[e("div",os,l(a.$t("launchPrice")),1),e("div",ls,l(`1 ${o(I)} = ${o(i)(o(c)(s.value.salePrice,6))} ${s.value.tokenSymbol}`),1)]),e("li",ns,[e("div",is,l(a.$t("launchRelease")),1),e("div",cs,l(`${o(i)(o(i)(s.value.saleAmount).div(o(i)(s.value.tokenTotalSupply)).multipliedBy(100).toFixed(8))}%${a.$t("release")}`),1)]),e("li",us,[e("div",ds,l(a.$t("launchEnd")),1),e("div",rs,l(`${o(ce)} ${a.$t("end")}`),1)]),e("li",vs,[e("div",_s,l(a.$t("tradeTime")),1),e("div",ms,l(`${o(G).unix(s.value.startTime).format("YYYY-MM-DD HH:mm")} (UTC)`),1)]),e("li",hs,[e("div",fs,l(a.$t("launchProgress")),1),e("div",ys,[m(Be,{launchAmountNow:o(i)(o(c)(x.value,s.value.baseTokenDecimal)).toString(),launchAmountTarget:o(i)(o(c)(s.value.hardCap,s.value.baseTokenDecimal)).toString(),symbol:o(I),class:"progress"},null,8,["launchAmountNow","launchAmountTarget","symbol"])])]),e("li",ks,[e("div",ps,l(a.$t("purposeOfFunds")),1),e("div",ws,l(o(ie)),1)]),e("li",$s,[e("div",bs,l(a.$t("liquidityAdd")),1),e("div",gs,l(a.$t("add&lockTime",{lpLockTime:s.value.lpLockTime})),1)]),e("li",Ts,[As,e("div",Cs,[m(y,{class:"icon","lazy-load":"",round:"",src:`https://www.avestorage.cloud/swap/${s.value.dexName.toLowerCase()}.jpeg`,"error-icon":"/assets/images/default.png"},null,8,["src"]),e("div",null,l(s.value.dexName),1)])])])]),e("div",Ss,[e("div",Is,[e("span",null,l(a.$t("economicModelTitle")),1),e("a",{class:"title-right contract-check",target:"_blank",href:o(ne)},l(a.$t("contractDetection"))+">",9,Bs)]),e("ul",Ds,[e("li",xs,[e("div",Es,l(a.$t("tokenContract")),1),e("div",Ns,[q(l(o(pe)(s.value.tokenAddress))+" ",1),m(B,{name:"copy"})])]),e("li",Ps,[e("div",Ms,l(a.$t("publishAmount")),1),e("div",Rs,l(o(N)(o(i)(o(c)(BigInt(s.value.tokenTotalSupply),s.value.tokenDecimal)))),1)]),e("li",Ls,[e("div",Us,l(a.$t("shareAllocation")),1),e("div",Hs,l(s.value.tokenEconomicModel),1)]),e("li",Vs,[e("div",js,l(a.$t("transactionTax")),1),Fs]),e("li",Os,[qs,e("div",Gs,l(s.value.tokenTaxUsage),1)])])]),e("div",zs,[e("div",null,[e("div",Ys,[e("div",Js,[e("div",Ks,[m(y,{class:"icon","lazy-load":"",round:"",src:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0x5fac926bf1e638944bb16fb5b787b5ba4bc85b0a.png","error-icon":"/assets/images/default.png"}),e("div",Qs,l(o(I)),1)]),Ws]),m(De,{modelValue:b.value,"onUpdate:modelValue":t[0]||(t[0]=k=>b.value=k),placeholder:"输入金额",class:"amount-ipt"},null,8,["modelValue"]),e("div",{class:"amount-max",onClick:ue},"最大")]),e("div",Xs,[e("div",null,l(`投入范围:${o(i)(o(c)(s.value.minInvest,s.value.baseTokenDecimal))}-${o(i)(o(c)(s.value.maxInvest,s.value.baseTokenDecimal))} ${o(I)}, 已投${o(i)(o(c)(g.value,s.value.baseTokenDecimal))}`),1),e("div",null,l(`余额: ${o(i)(o(c)(h.value,s.value.baseTokenDecimal))} ${o(I)}`),1)]),s.value.status==0&&T.value<s.value.startTime?(_(),D(v,{key:0,type:"primary",block:"",class:"btn",onClick:t[1]||(t[1]=k=>{o(Se)(`距开始还有${o(Y)}`)})},{default:A(()=>[e("div",null,l(`距开始还有${o(Y)}`),1)]),_:1})):s.value.status==0&&s.value.startTime<=T.value<s.value.endTime?(_(),$(Z,{key:1},[V.value?(_(),D(v,{key:0,type:"danger",block:"",class:"btn",onClick:K,loading:j.value},{default:A(()=>[q("Approve")]),_:1},8,["loading"])):(_(),D(v,{key:1,type:"primary",block:"",class:"btn",onClick:de,loading:H.value},{default:A(()=>[g.value==0n?(_(),$("div",Zs,"立即投入")):(_(),$("div",ea,"继续投入")),e("div",sa,"("+l(z.value)+"人已参加)",1)]),_:1},8,["loading"]))],64)):s.value.status==1?(_(),D(v,{key:2,color:"#999999",block:"",class:"btn"},{default:A(()=>[aa,ta]),_:1})):s.value.status==2?(_(),D(v,{key:3,type:"primary",block:"",class:"btn",onClick:ve,loading:F.value},{default:A(()=>[oa]),_:1},8,["loading"])):M("",!0)]),e("ul",la,[e("li",na,[ia,g.value==0n?(_(),$("div",ca,"未投入")):(_(),$("div",ua,"已投入"))]),e("li",da,[ra,e("div",va,l(`${o(N)(o(i)(o(c)(g.value,s.value.baseTokenDecimal)).multipliedBy(o(i)(o(c)(s.value.salePrice,6))))} ${s.value.tokenSymbol}`),1)]),e("li",_a,[ma,e("div",ha,l(`${o(N)(o(i)(o(c)(g.value,s.value.baseTokenDecimal)))} ${o(I)}`),1)]),e("li",fa,[ya,e("div",ka,l(`${o(N)(o(i)(o(c)(g.value,s.value.baseTokenDecimal)))} ${o(I)}`),1)])]),pa])])):M("",!0),m(Q,{class:"show-join-success",confirmText:"开盘提醒我",cancelText:"查看交易哈希",show:S.value,"onUpdate:show":t[2]||(t[2]=k=>S.value=k),onCancelClick:he},{default:A(()=>[ee(a.$slots,"default",{},()=>[e("div",wa,[m(B,{class:"icon",name:"createSuccess"}),$a]),ba,ga],!0)]),_:3},8,["show"]),m(Q,{class:"show-join-success","confirm-text":"查看区块链浏览器",show:O.value,"onUpdate:show":t[4]||(t[4]=k=>O.value=k),showCancelButton:!1,onConfirmClick:me},{default:A(()=>[ee(a.$slots,"default",{},()=>[e("div",Ta,[m(B,{class:"icon",name:"createSuccess"}),Aa]),e("div",{class:"copy-hash",onClick:t[3]||(t[3]=k=>o(we)(E.value))},"复制交易哈希")],!0)]),_:3},8,["show"])],64)}}},Ra=se(Ca,[["__scopeId","data-v-347c7d2a"]]);export{Ra as default};
