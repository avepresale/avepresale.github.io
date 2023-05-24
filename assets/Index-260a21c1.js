import{_ as se,o as _,q as D,F as ae,v as Te,x as De,f as e,t as s,y as W,j as Le,k as O,r as T,d as j,w as E,c as u,l as v,p as Ye,g as Oe,h as He,n as c,D as P,B as Z,H as wt,z as yt,I as kt,J as gt,E as $t,G as Ke}from"./index-e864de28.js";import{C as bt,d as Ct}from"./dappList-13303094.js";import{d as F,B as y,f as be,p as ue,a as St}from"./dayjs.min-dab59b25.js";import{T as st,a as Xe,f as xe,b as Dt,_ as Ze,n as Ce}from"./TokenIcon-138447c5.js";import{_ as et}from"./Dialog-64046d7c.js";import{s as d}from"./function-call-ecde7c14.js";import{_ as he,M as Tt}from"./NumberInput-4dcbafba.js";const Lt={class:"step-ul"},It={__name:"Step",props:{index:{type:Number,default:0},stepList:{type:Array,default:[]}},setup(h){const l=h;return(i,U)=>(_(),D("ul",Lt,[(_(!0),D(ae,null,Te(l.stepList.length*2-1,k=>(_(),D("li",{class:De(["step-li",k&1?"step-item":"step-line"])},[k&1?(_(),D(ae,{key:0},[e("div",{class:De(["step-index",parseInt(k/2)<=l.index?"step-index-select":""])},s(parseInt(k/2)+1),3),e("div",{class:De(["step-text",parseInt(k/2)<=l.index?"step-text-select":""])},s(h.stepList[parseInt(k/2)]),3)],64)):W("",!0)],2))),256))]))}},Pt=se(It,[["__scopeId","data-v-7b6ae5e1"]]),tt={__name:"DateSelect",props:{show:{type:Boolean,default:!1},minDate:Date,maxDate:Date,currentDate:Date},emits:["update:currentDate","update:show"],setup(h,{emit:l}){const i=h;Le();const U=O(()=>F(i.currentDate).format("YYYY-MM-DD").split("-")),k=O(()=>F(i.currentDate).format("HH:mm").split(":"));function f(p){let m=F(`${p[0].selectedValues.join("-")} ${p[1].selectedValues.join(":")}`,"YYYY-MM-DD HH:mm");l("update:currentDate",m.toDate()),l("update:show",!1)}function $(){l("update:show",!1)}return(p,m)=>{const R=T("van-date-picker"),b=T("van-time-picker"),o=T("van-picker-group"),g=T("van-popup");return _(),j(g,{show:i.show,"onUpdate:show":m[0]||(m[0]=A=>l("update:show",A)),position:"bottom"},{default:E(()=>[u(o,{title:p.$t("selectDate"),tabs:[p.$t("selectDate"),p.$t("selectTime")],onConfirm:f,onCancel:$},{default:E(()=>[u(R,{"model-value":v(U),"min-date":i.minDate,"max-date":i.maxDate},null,8,["model-value","min-date","max-date"]),u(b,{"model-value":v(k)},null,8,["model-value"])]),_:1},8,["title","tabs"])]),_:1},8,["show"])}}};const At=h=>(Ye("data-v-d4249c60"),h=h(),Oe(),h),Vt={class:"drop-down"},Ut={class:"left"},Rt={class:"token"},Bt=At(()=>e("div",{class:"right"},null,-1)),Ft={__name:"DropDown",props:{text:{type:String,default:""},icon:{type:String,default:""}},setup(h){const l=h;return(i,U)=>{const k=T("van-image");return _(),D("div",Vt,[e("div",Ut,[l.icon?(_(),j(k,{key:0,class:"icon","lazy-load":"",round:"",src:l.icon,"error-icon":"/assets/images/default.png"},null,8,["src"])):W("",!0),e("div",Rt,s(l.text),1)]),Bt])}}},at=se(Ft,[["__scopeId","data-v-d4249c60"]]);const Et=h=>(Ye("data-v-a30d64fa"),h=h(),Oe(),h),Mt={class:"rate"},Nt={class:"value-show"},xt=Et(()=>e("div",null,"%",-1)),Yt={__name:"Rate",props:{value:{type:String,default:"0"},minValue:{type:Number,default:0},maxValue:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:value"],setup(h,{emit:l}){const i=h;function U(){let p=y(i.value).plus(i.step);p.gt(i.maxValue)&&(p=y(i.maxValue)),l("update:value",p.toString())}function k(){let p=y(i.value).minus(i.step);p.lt(i.minValue)&&(p=y(i.minValue)),l("update:value",p.toString())}function f(p){l("update:value",p)}function $(p){let m=p.replace("-","");return m&&(m=m.replace(/^(.*\..{2}).*$/,"$1").replace(/^0+(.*$)/,"$1"),(!m||m.startsWith("."))&&(m="0"+m),y(m).gt(i.maxValue)?i.maxValue.toString():y(m).lt(i.minValue)?i.minValue.toString():m)}return(p,m)=>{const R=T("van-button"),b=T("van-field");return _(),D("div",Mt,[u(R,{icon:"minus",class:"round-icon-btn",color:"#dddddd",onClick:k,disabled:i.value===""||i.value===i.minValue.toString()},null,8,["disabled"]),e("div",Nt,[u(b,{"model-value":i.value,"onUpdate:modelValue":f,type:"number","input-align":"center",class:"rate-ipt",formatter:$},null,8,["model-value"]),xt]),u(R,{icon:"plus",class:"round-icon-btn",color:"#dddddd",onClick:U,disabled:i.value===""||i.value===i.maxValue.toString()},null,8,["disabled"])])}}},Se=se(Yt,[["__scopeId","data-v-a30d64fa"]]);const Ot={class:"chain-swap"},Ht=["onClick"],qt={class:"left"},Wt={class:"swap-name"},jt={class:"right"},zt={__name:"ChainSwaps",props:{show:Boolean,chainSwap:Object},emits:["update:show","update:chainSwap"],setup(h,{emit:l}){const i=h,{t:U}=Le(),k=He(),f=c(""),$=c([]);m();const p=O(()=>f.value?$.value.filter(o=>o.showName.toLowerCase().indexOf(f.value.toLocaleLowerCase())!=-1):$.value);async function m(){$.value=[];let o=k.chain;try{let g=await P.ave.getChainSwaps(o);if(g.data.status==1){let A=g.data.data;if(A&&A.length>0)for(let C of A){let r="https://www.avestorage.cloud/swap/"+C.name+".jpeg",w={chain:C.chain,factoryAddress:C.factory_address.toLowerCase(),isSwapSupported:C.is_swap_supported,name:C.name,routerAddress:C.router_address.toLowerCase(),showName:C.show_name,sortId:C.sort_id,swapUrl:C.swap_url,swapIcon:r};$.value.push(w)}console.log($.value)}else d(U("unknowError"))}catch(g){g&&g.message?d(g.message):d(U("unknowError"))}finally{}}function R(o){l("update:chainSwap",o),l("update:show",!1)}function b(){l("update:show",!1)}return(o,g)=>{const A=T("van-search"),C=T("van-icon"),r=T("van-action-sheet");return _(),j(r,{show:i.show,"safe-area-inset-bottom":"",title:o.$t("selectSwap"),onClose:b,onCancel:b},{default:E(()=>[u(A,{modelValue:f.value,"onUpdate:modelValue":g[0]||(g[0]=w=>f.value=w),shape:"round",placeholder:o.$t("search"),clearable:""},null,8,["modelValue","placeholder"]),e("ul",Ot,[(_(!0),D(ae,null,Te(v(p),w=>(_(),D("li",{class:"swap-item",onClick:Ie=>R(w)},[e("div",qt,[u(st,{class:"token-icon",tokenIcon:w.swapIcon},null,8,["tokenIcon"]),e("div",Wt,s(w.showName),1)]),e("div",jt,[i.chainSwap&&i.chainSwap.factoryAddress==w.factoryAddress?(_(),j(C,{key:0,name:"success",color:"#3F80F7"})):W("",!0)])],8,Ht))),256))])]),_:1},8,["show","title"])}}},Qt=se(zt,[["__scopeId","data-v-edbf192a"]]);const Gt={class:"token-list"},Jt=["onClick"],Kt={class:"left"},Xt={class:"token-info"},Zt={class:"token-name"},ea={class:"token-address"},ta={class:"right"},aa={key:0,class:"amount"},sa={class:"price"},la={class:"icon"},na={__name:"TokenList",props:{show:Boolean,token:Object},emits:["update:show","update:token"],setup(h,{emit:l}){const i=h,{t:U}=Le(),k=He(),f=c(""),$=c([]);R();const p=O(()=>f.value?f.value.startsWith("0x")?$.value.filter(o=>o.address.toLowerCase()==f.value.toLowerCase()):$.value.filter(o=>o.symbol.toLowerCase().indexOf(f.value.toLowerCase())>-1):$.value);function m(o){l("update:token",o),l("update:show",!1)}async function R(){let o=[];try{let g=await P.ave.getUserToken(k.chain,k.walletAddress);if(console.log(g),g.data.status==1){let C=g.data.data.filter(r=>new RegExp("^0x.*$","gi").test(r.token)&&r.value>0&&r.risk_score<60&&r.risk_level>=0&&r.flag!=="blacklist"&&r.symbol!==""&&r.flag!=="lp").map(r=>({chain:r.chain,demical:r.decimals,name:r.name,symbol:r.symbol,tokenAddress:r.token.toLowerCase(),currentPriceUsd:r.current_price_usd,value:r.value,icon:Xe(r.chain.toLowerCase(),r.token.toLowerCase())}));o=o.concat(C)}else return;let A=await P.ave.getSwapTokens(k.chain);if(console.log(A),A.data.status==1){let C=A.data.data.filter(r=>new RegExp("^0x.*$","gi").test(r.token)&&o.findIndex(w=>w.tokenAddress==r.token)==-1&&r.risk_score<60&&r.risk_level>=0&&r.flag!=="blacklist"&&r.symbol!==""&&r.flag!=="lp").map(r=>({chain:r.chain,demical:r.decimals,name:r.name,symbol:r.symbol,tokenAddress:r.token.toLowerCase(),currentPriceUsd:r.current_price_usd,value:r.value,icon:Xe(r.chain.toLowerCase(),r.token.toLowerCase())}));o=o.concat(C)}else return}catch(g){g&&g.message?d(g.message):d(U("unknowError")),o=[]}finally{}$.value=o}function b(){l("update:show",!1)}return(o,g)=>{const A=T("van-search"),C=T("van-icon"),r=T("van-action-sheet");return _(),j(r,{show:i.show,"safe-area-inset-bottom":"",title:o.$t("selectCurrency"),onClose:b,onCancel:b},{default:E(()=>[u(A,{modelValue:f.value,"onUpdate:modelValue":g[0]||(g[0]=w=>f.value=w),shape:"round",placeholder:o.$t("searchTokenOrName"),clearable:""},null,8,["modelValue","placeholder"]),e("ul",Gt,[(_(!0),D(ae,null,Te(v(p),w=>(_(),D("li",{class:"token-item",onClick:Ie=>m(w)},[e("div",Kt,[u(st,{class:"token-icon",tokenIcon:w.icon},null,8,["tokenIcon"]),e("div",Xt,[e("div",Zt,s(w.symbol),1),e("div",ea,s(v(xe)(w.tokenAddress)),1)])]),e("div",ta,[w.value>0?(_(),D("div",aa,[e("div",null,s(v(y)(w.value).toString().indexOf(".")==-1?v(y)(w.value):v(y)(w.value).toFixed(6)),1),e("div",sa,"$"+s(v(y)(w.value).multipliedBy(w.currentPriceUsd).toFixed(2)),1)])):W("",!0),e("div",la,[i.token&&i.token.tokenAddress==w.tokenAddress?(_(),j(C,{key:0,name:"success",color:"#3F80F7"})):W("",!0)])])],8,Jt))),256))])]),_:1},8,["show","title"])}}},oa=se(na,[["__scopeId","data-v-6902c167"]]);const ia={key:0,class:"show-upload"},ua={key:1,class:"show-image"},ra={__name:"UploadImage",props:{profilePicture:{type:File},urlPicture:{type:String,default:""}},emits:["update:profilePicture","update:urlPicture"],setup(h,{emit:l}){function i(f,$){console.log(f),U(f)}function U(f,$){let p=new FileReader;p.readAsDataURL(f),p.onloadend=function(m){let R=m.target.result,b=new Image;b.src=R,b.onload=function(){let o=Dt(b,f.name,f.type);console.log(o),l("update:urlPicture",o.base64Data),l("update:profilePicture",o.fileData)}}}function k(){l("update:urlPicture",""),l("update:profilePicture",void 0)}return(f,$)=>{const p=T("van-icon"),m=T("van-image"),R=T("van-uploader");return _(),j(R,{modelValue:f.fileList,"onUpdate:modelValue":$[1]||($[1]=b=>f.fileList=b),class:"uploader-box","before-read":i,"preview-image":!0,accept:"image/*"},{default:E(()=>[h.urlPicture?(_(),D("div",ua,[u(m,{class:"image",fit:"contain",src:h.urlPicture},null,8,["src"]),u(p,{onClick:$[0]||($[0]=wt(b=>k(),["stop"])),class:"close",name:"cross"})])):(_(),D("div",ia,[e("div",null,[u(p,{class:"icon",name:"plus"})]),Z(" *建议尺寸 320*150, 不超过500K ")]))]),_:1},8,["modelValue"])}}},ca=se(ra,[["__scopeId","data-v-2b36daea"]]);const da=h=>(Ye("data-v-625ca0a4"),h=h(),Oe(),h),va={class:"step"},pa={class:"info"},ma={key:0,class:"desc"},_a={class:"desc-item"},fa={class:"title grey"},ha={class:"key-value-list"},wa={class:"key-value"},ya={class:"key"},ka={class:"value"},ga={class:"key-value"},$a={class:"key"},ba={class:"value"},Ca={class:"key-value"},Sa={class:"key"},Da={class:"value"},Ta={class:"key-value"},La={class:"key"},Ia={class:"value"},Pa={class:"desc-item"},Aa={class:"title"},Va={class:"desc-item"},Ua={class:"title"},Ra={class:"balance"},Ba={key:1,class:"create-token"},Fa=["href"],Ea={key:1,class:"desc"},Ma={class:"desc-item"},Na={class:"title-grey"},xa={class:"data-range"},Ya={class:"data-to"},Oa={class:"desc-item"},Ha={class:"title-grey"},qa={class:"title-right"},Wa={class:"desc-item"},ja={class:"title-grey"},za={class:"title-right"},Qa={class:"desc-item"},Ga={class:"title-grey"},Ja={key:0,class:"title-right"},Ka={class:"desc-item"},Xa={class:"title-grey"},Za={class:"title-right"},es={class:"input input-range"},ts=da(()=>e("div",null,"~",-1)),as={class:"desc-item"},ss={class:"title-grey"},ls={class:"title-right"},ns={class:"input icon-input"},os={class:"left"},is={class:"token"},us={class:"desc-item"},rs={class:"title-grey"},cs={class:"title-right"},ds={class:"input icon-input"},vs={class:"left"},ps={class:"token"},ms={class:"desc-item"},_s={class:"title-grey"},fs={class:"input icon-input"},hs={class:"desc-item"},ws={class:"title-grey"},ys={class:"input percentage-input"},ks={class:"label"},gs={class:"input percentage-input"},$s={class:"label"},bs={class:"input percentage-input"},Cs={class:"label"},Ss={class:"input percentage-input"},Ds={class:"label"},Ts={class:"desc-item"},Ls={class:"title-grey"},Is={class:"liquidity-day-list"},Ps=["onClick"],As={class:"desc-item"},Vs={class:"title-grey"},Us={class:"desc-item"},Rs={class:"title-grey"},Bs={class:"tips"},Fs={key:2,class:"desc"},Es={class:"key-value-list"},Ms={class:"key-value"},Ns={class:"key"},xs={class:"value"},Ys={class:"key-value"},Os={class:"key"},Hs={class:"value"},qs={class:"key-value"},Ws={class:"key"},js={class:"value"},zs={class:"key-value"},Qs={class:"key"},Gs={class:"value"},Js={class:"key-value"},Ks={class:"key"},Xs={class:"value"},Zs={class:"key-value"},el={class:"key"},tl={class:"value"},al={class:"key-value"},sl={class:"key"},ll={class:"value icon-text"},nl={class:"check"},ol={class:"check-div"},il={class:"danger-tips"},ul={class:"edit"},rl={class:"footer"},cl={class:"top-icon"},dl={class:"top-text"},vl={__name:"Index",setup(h){const{t:l}=Le(),i=He(),U=yt(),k=c(!1),f=c(!1),$=c(!1),p=c([l("verifyToken"),l("launchConfiguration"),l("confirmRelease")]),m=c(0);function R(){k.value=!1}const b=c(""),o=c(null),g=c(!1);async function A(){if(!i.walletAddress){d(l("pleaseConnectWallet"));return}g.value=!0,o.value=null;try{var t=await P.wallet.contractERC20(b.value);const a=await t.symbol(),L=await t.decimals(),V=b.value,N=await t.totalSupply(),Y=await t.balanceOf(i.walletAddress),H=be(Y,L);let I=0,ie=0,B=await P.presale.getTokenFeeRate(i.chain,b.value);if(B.status==1&&B.data[b.value.toLowerCase()]){const q=B.data[b.value.toLowerCase()].buy_tax,te=B.data[b.value.toLowerCase()].sell_tax;I=q?y(q).toNumber():0,ie=te?y(te).toNumber():0}console.log(B),o.value={symbol:a,address:V,decimal:L,totalSupplyBint:N,balance:H,buyTax:I,sellTax:ie}}catch{d(l("queryAddressFail"))}finally{g.value=!1}}const C=c(""),r=c(""),w=c(!1);async function Ie(){w.value=!0;try{await lt()}catch{d(l("verifyOwnerFail"))}finally{w.value=!1}}async function lt(){var t=await P.wallet.contractERC20(o.value.address);const a=await t.balanceOf(i.walletAddress);if(o.value.balance=be(a,o.value.decimal),a<=0n){d(l("balanceEmpty"));return}let L=await t.owner();if(console.log(L),L.toLowerCase()!=i.walletAddress.toLowerCase()){d(l("verifyOwnerFail"));return}m.value=1}const we=new Date,qe=c(F(we).add(10,"minute").toDate()),We=c(F(we).startOf("day").add(1,"year").toDate()),ee=c(F(we).add(10,"minute").toDate()),le=c(F(we).startOf("day").add(7,"day").toDate()),Pe=c(!1),Ae=c(!1),je=O(()=>{if(z.value&&x.value){let t=y(x.value),a=y(z.value);return t.multipliedBy(a).toFormat()}else return""}),Ve=c(!1),S=c(null),z=c(""),ne=c(""),oe=c(""),re=c(""),Ue=c(30),Q=c(""),x=c(""),nt=[{name:l("30days"),value:30},{name:l("90days"),value:90},{name:l("180days"),value:180},{name:l("365days"),value:365},{name:l("permanent"),value:365*100}],G=c(50),ot=O(()=>100-J.value-K.value-X.value),J=c(0),it=O(()=>100-G.value-K.value-X.value),K=c(0),ut=O(()=>100-G.value-J.value-X.value),X=c(0),rt=O(()=>100-G.value-J.value-K.value),Re=c(!1),M=c(null),Be=c(!1);async function ct(){if(ee.value<=new Date){d(l("startTimeLimit"));return}if(le.value<=ee.value){d(l("timeLimitPrompt"));return}if(!S.value){d(l("paymentPrompt"));return}if(!z.value){d(l("presalePricePrompt"));return}if(y(z.value).toNumber()<=0){d(l("launchPriceLimit"));return}if(!ne.value||!oe.value){d(l("investRangePrompt"));return}if(y(ne.value).toNumber()<=0){d(l("minInvestLimit"));return}if(y(oe.value).toNumber()<=0){d(l("maxInvestLimit"));return}if(y(oe.value).lte(y(ne.value))){d(l("maxInvestPrompt"));return}if(!Q.value){d(l("inputSoftPrompt"));return}if(y(Q.value).toNumber()<=0){d(l("softLimit"));return}if(!x.value){d(l("inputHardPrompt"));return}if(y(x.value).toNumber()<=0){d(l("hardLimit"));return}if(y(x.value).lte(y(Q.value))){d(l("hardLimitPrompt"));return}if(y(x.value).div(y(Q.value)).toNumber()<2){d(l("hardSoftLimit"));return}if(!re.value){d(l("receiveAddressPrompt"));return}if(!M.value){d(l("selectAMMPrompt"));return}if(!me.value){d(l("coverImgPrompt"));return}if(me.value.size>500*1024){d(l("imgExceedPrompt"));return}Be.value=!0;try{await dt()}catch(t){console.log(t),d(l("unkonwError"))}finally{Be.value=!1}}const Fe=c(!1),Ee=c(!1);let ce=c(0n),de=[],ve=[],pe=[],ze="",Qe=0n,Me=0n;async function dt(){let a=await(await P.wallet.contractUniswapV2Factory(M.value.factoryAddress)).getPair(o.value.address,S.value.tokenAddress);if(a!="0x0000000000000000000000000000000000000000"){let $e=await(await P.wallet.contractUniswapV2Pair(a)).getReserves();if($e[0]!=0n||$e[1]!=0n){d(l("hasLiquidity"));return}}var L=await P.wallet.contractERC20(o.value.address);const V=ue(z.value,6),N=ue(x.value,S.value.demical),Y=ue(G.value.toString(),2),H=V,I=await P.wallet.contractPresaleFactory(i.presaleFactoryAddress);if(ce.value=await I.estimeateTokenAmount(V,N,Y,H,o.value.decimal,BigInt(S.value.demical)),console.log(ce.value),await L.allowance(i.walletAddress,i.presaleFactoryAddress)<ce.value&&(d("需要先授权"),Fe.value=!0,!await Ge()))return;let B,q;S.value.tokenAddress.toLowerCase()==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"?(B=(await(await P.wallet.contractSwapRouter(M.value.routerAddress)).WETH()).toLowerCase(),q=!0):(B=S.value.tokenAddress.toLowerCase(),q=!1),console.log("baseTokenAddress",B);const te=ue(ne.value,S.value.demical),ye=ue(oe.value,S.value.demical),ke=ue(Q.value,S.value.demical),ge=await I.isBaseFeeEnabled();if(Qe=await I.baseFee(),ge){const fe=await I.baseFee();await I.baseFeeToken()=="0x0000000000000000000000000000000000000000"&&(Me=fe)}de=[o.value.address,re.value,M.value.routerAddress,B],ve=[V,te,ye,ke,N,Y,H,F(ee.value).unix(),F(le.value).unix(),Ue.value],pe=[q],console.dir(de),console.dir(ve),console.dir(pe);let _e=await I.presaleCreate.estimateGas(de,ve,pe,{value:Qe});console.dir(_e);const n=await P.wallet.getGasPrice();ze=St(_e*n),m.value=2}async function Ge(){Ee.value=!0;try{var t=await P.wallet.contractERC20(o.value.address);return(await(await t.approve(i.presaleFactoryAddress,Tt)).wait()).status===1?(d({type:"success",message:l("upChainSuccessfully")}),Fe.value=!1,!0):(d(l("unkonwError")),!1)}catch(a){return console.log(a),a.info&&a.info.error&&a.info.error.code===4001?d(l("userCancelOperate")):a.error&&a.error.message&&a.error.message=="Canceled"?d(l("userCancelOperate")):d(l("unkonwError")),!1}finally{Ee.value=!1}}async function vt(){const t=$t({message:l("checkBalance"),forbidClick:!0,duration:0});try{await pt(t)}catch(a){d(a)}finally{t.close(),k.value=!1}}let Ne="";async function pt(t){var a=await P.wallet.contractERC20(o.value.address);const L=await a.balanceOf(i.walletAddress);if(console.log(L),L<ce.value){d(l("balanceNotEnough"));return}const V=await P.wallet.contractPresaleFactory(i.presaleFactoryAddress);let N=await V.presaleCreate.staticCall(de,ve,pe,{value:Me});t.message=l("waitConfirm");let Y=await V.presaleCreate(de,ve,pe,{value:Me});t.message=l("waitUpChain"),Ne=Y.hash,await Y.wait();const H={profile_picture:me.value,contractAddress:N,contractChain:i.chain,createPresaleTxHash:Ne,tokenEconomicModel:C.value,tokenTaxUsage:r.value,salesRate:J.value*100,marketRate:K.value*100,otherRate:X.value*100,dexName:M.value.showName};t.message="上传数据中,请勿关闭页面...";let I=await P.presale.uploadPresaleInfo(H);if(console.log("postRes"),console.dir(I),I.status!=200)throw l("networkError");if(I.data.status!=1)throw I.data.msg;f.value=!0}function mt(){window.open(i.txNetwork+Ne)}function _t(){U.push("/MyLaunch")}const me=c(void 0),Je=c("");function ft(){if($.value==!1){d("请先勾选须知");return}k.value=!0}const ht=O(()=>{let t=[];return G.value>0&&t.push(`${G.value}%流动性`),J.value>0&&t.push(`${J.value}%营销/建设`),K.value>0&&t.push(`${K.value}%市值管理`),X.value>0&&t.push(`${X.value}%其他`),t.join(",")});return(t,a)=>{var Y,H,I,ie,B,q,te,ye,ke,ge,_e;const L=T("van-button"),V=T("van-field"),N=T("van-image");return _(),D(ae,null,[e("div",va,[u(Pt,{stepList:p.value,index:m.value},null,8,["stepList","index"])]),e("div",pa,[m.value==0?(_(),D(ae,{key:0},[u(bt,{class:"query",contractAddress:b.value,"onUpdate:contractAddress":a[0]||(a[0]=n=>b.value=n)},null,8,["contractAddress"]),u(L,{type:"primary",block:"",class:"btn",onClick:A,loading:g.value},{default:E(()=>[Z(s(t.$t("query")),1)]),_:1},8,["loading"]),o.value?(_(),D("div",ma,[e("div",_a,[e("div",fa,s(t.$t("tokenInfo")),1),e("ul",ha,[e("li",wa,[e("div",ya,s(t.$t("tokenName")),1),e("div",ka,s(o.value.symbol),1)]),e("li",ga,[e("div",$a,s(t.$t("tokenContract")),1),e("div",ba,[Z(s(v(xe)(o.value.address))+" ",1),u(Ze,{name:"copy"})])]),e("li",Ca,[e("div",Sa,s(t.$t("total")),1),e("div",Da,s(v(Ce)(v(y)(v(be)(o.value.totalSupplyBint,o.value.decimal)))),1)]),e("li",Ta,[e("div",La,s(t.$t("tax")),1),e("div",Ia,s(`${t.$t("buy")}${o.value.buyTax*100}%, ${t.$t("sell")}${o.value.sellTax*100}%`),1)])])]),e("div",Pa,[e("div",Aa,s(t.$t("economicModel")),1),u(V,{class:"ipt",modelValue:C.value,"onUpdate:modelValue":a[1]||(a[1]=n=>C.value=n),placeholder:t.$t("economicModelExample")},null,8,["modelValue","placeholder"])]),e("div",Va,[e("div",Ua,s(t.$t("taxExplain")),1),u(V,{class:"ipt",modelValue:r.value,"onUpdate:modelValue":a[2]||(a[2]=n=>r.value=n),placeholder:t.$t("taxExample")},null,8,["modelValue","placeholder"])]),e("div",Ra,s(t.$t("currentTokenBalance"))+": "+s(v(Ce)(v(y)(o.value.balance))),1),u(L,{type:"primary",block:"",class:"btn",onClick:Ie,loading:w.value},{default:E(()=>[Z(s(t.$t("verifyOwner")),1)]),_:1},8,["loading"])])):(_(),D("div",Ba,[Z(s(t.$t("noToken"))+", ",1),e("a",{href:v(Ct).find(n=>n.name=="menuCreateToken").url,target:"_blank"},s(t.$t("clickToCreate")),9,Fa)]))],64)):W("",!0),m.value==1?(_(),D("div",Ea,[e("div",Ma,[e("div",Na,s(t.$t("startEndDate")),1),e("div",xa,[u(V,{"model-value":v(F)(ee.value).format("YYYY-MM-DD HH:mm"),readonly:"","input-align":"center",class:"input",onClick:a[3]||(a[3]=n=>Pe.value=!0)},null,8,["model-value"]),e("span",Ya,s(t.$t("to")),1),u(V,{"model-value":v(F)(le.value).format("YYYY-MM-DD HH:mm"),readonly:"","input-align":"center",class:"input",onClick:a[4]||(a[4]=n=>Ae.value=!0)},null,8,["model-value"])]),u(tt,{currentDate:ee.value,"onUpdate:currentDate":a[5]||(a[5]=n=>ee.value=n),show:Pe.value,"onUpdate:show":a[6]||(a[6]=n=>Pe.value=n),minDate:qe.value,maxDate:We.value},null,8,["currentDate","show","minDate","maxDate"]),u(tt,{currentDate:le.value,"onUpdate:currentDate":a[7]||(a[7]=n=>le.value=n),show:Ae.value,"onUpdate:show":a[8]||(a[8]=n=>Ae.value=n),minDate:qe.value,maxDate:We.value},null,8,["currentDate","show","minDate","maxDate"])]),e("div",Oa,[e("div",Ha,[e("span",null,s(t.$t("launchQuantity")),1),e("span",qa,"*"+s(t.$t("useToExplain")),1)]),u(V,{"model-value":v(je),readonly:"",class:"input input-disabled"},null,8,["model-value"])]),e("div",Wa,[e("div",ja,[e("span",null,s(t.$t("paymentWay")),1),e("span",za,"*"+s(t.$t("paymentExplain")),1)]),u(at,{class:"input",text:(Y=S.value)==null?void 0:Y.symbol,icon:(H=S.value)==null?void 0:H.icon,onClick:a[9]||(a[9]=n=>Ve.value=!0)},null,8,["text","icon"])]),e("div",Qa,[e("div",Ga,[e("span",null,s(t.$t("launchPrice")),1),S.value?(_(),D("span",Ja,s(`1 ${S.value.symbol} = $${new v(y)(S.value.currentPriceUsd).toFixed(6)}`),1)):W("",!0)]),u(he,{modelValue:z.value,"onUpdate:modelValue":a[10]||(a[10]=n=>z.value=n),class:"input"},null,8,["modelValue"])]),e("div",Ka,[e("div",Xa,[e("span",null,s(t.$t("investRange")),1),e("span",Za,"*"+s(t.$t("investRangeExplain")),1)]),e("div",es,[u(he,{modelValue:ne.value,"onUpdate:modelValue":a[11]||(a[11]=n=>ne.value=n),"input-align":"center",class:"range-input"},null,8,["modelValue"]),ts,u(he,{modelValue:oe.value,"onUpdate:modelValue":a[12]||(a[12]=n=>oe.value=n),"input-align":"center",class:"range-input"},null,8,["modelValue"])])]),e("div",as,[e("div",ss,[e("span",null,s(t.$t("soft")),1),e("span",ls,"*"+s(t.$t("softExplain")),1)]),e("div",ns,[e("div",os,[u(N,{class:"icon","lazy-load":"",round:"",src:(I=S.value)==null?void 0:I.icon,"error-icon":"/assets/images/default.png"},null,8,["src"]),e("div",is,s((ie=S.value)==null?void 0:ie.symbol),1)]),u(he,{class:"right",modelValue:Q.value,"onUpdate:modelValue":a[13]||(a[13]=n=>Q.value=n),"input-align":"right"},null,8,["modelValue"])])]),e("div",us,[e("div",rs,[e("span",null,s(t.$t("hard")),1),e("span",cs,"*"+s(t.$t("hardExplain")),1)]),e("div",ds,[e("div",vs,[u(N,{class:"icon","lazy-load":"",round:"",src:(B=S.value)==null?void 0:B.icon,"error-icon":"/assets/images/default.png"},null,8,["src"]),e("div",ps,s((q=S.value)==null?void 0:q.symbol),1)]),u(he,{class:"right",modelValue:x.value,"onUpdate:modelValue":a[14]||(a[14]=n=>x.value=n),"input-align":"right"},null,8,["modelValue"])])]),e("div",ms,[e("div",_s,s(t.$t("receiveAddress")),1),e("div",fs,[u(N,{class:"receiving-address-icon","lazy-load":"",round:"",src:v(i).chainIcon,"error-icon":"/assets/images/default.png"},null,8,["src"]),u(V,{class:"right",modelValue:re.value,"onUpdate:modelValue":a[15]||(a[15]=n=>re.value=n),clearable:""},null,8,["modelValue"])])]),e("div",hs,[e("div",ws,s(t.$t("purposeOfFunds")),1),e("ul",null,[e("li",ys,[e("div",ks,s(t.$t("liquidityProvision")),1),u(Se,{class:"rate",value:G.value,"onUpdate:value":a[16]||(a[16]=n=>G.value=n),"max-value":v(ot),"min-value":50},null,8,["value","max-value"])]),e("li",gs,[e("div",$s,s(t.$t("marketing&Construction")),1),u(Se,{class:"rate",value:J.value,"onUpdate:value":a[17]||(a[17]=n=>J.value=n),"max-value":v(it)},null,8,["value","max-value"])]),e("li",bs,[e("div",Cs,s(t.$t("markeRateManage")),1),u(Se,{class:"rate",value:K.value,"onUpdate:value":a[18]||(a[18]=n=>K.value=n),"max-value":v(ut)},null,8,["value","max-value"])]),e("li",Ss,[e("div",Ds,s(t.$t("other")),1),u(Se,{class:"rate",value:X.value,"onUpdate:value":a[19]||(a[19]=n=>X.value=n),"max-value":v(rt)},null,8,["value","max-value"])])])]),e("div",Ts,[e("div",Ls,s(t.$t("liquidityLockIn")),1),e("ul",Is,[(_(),D(ae,null,Te(nt,n=>e("li",{class:De({"liquidity-day-select":n.value==Ue.value}),key:n.value,onClick:fe=>Ue.value=n.value},s(n.name),11,Ps)),64))])]),e("div",As,[e("div",Vs,s(t.$t("selectAMM")),1),u(at,{class:"input",text:(te=M.value)==null?void 0:te.showName,icon:(ye=M.value)==null?void 0:ye.swapIcon,onClick:a[20]||(a[20]=n=>Re.value=!0)},null,8,["text","icon"])]),e("div",Us,[e("div",Rs,s(t.$t("activityCover")),1),u(ca,{profilePicture:me.value,"onUpdate:profilePicture":a[21]||(a[21]=n=>me.value=n),urlPicture:Je.value,"onUpdate:urlPicture":a[22]||(a[22]=n=>Je.value=n)},null,8,["profilePicture","urlPicture"])]),e("div",Bs,"*"+s(t.$t("connectBusiness")),1),Fe.value?(_(),j(L,{key:0,type:"danger",block:"",class:"btn",onClick:Ge,loading:Ee.value},{default:E(()=>[Z(s(t.$t("approve")),1)]),_:1},8,["loading"])):(_(),j(L,{key:1,type:"primary",block:"",class:"btn",onClick:ct,loading:Be.value},{default:E(()=>[Z(s(t.$t("nextStep")),1)]),_:1},8,["loading"]))])):W("",!0),m.value==2?(_(),D("div",Fs,[e("ul",Es,[e("li",Ms,[e("div",Ns,s(t.$t("startEndDate")),1),e("div",xs,s(`${v(F)(ee.value).format("YYYY-MM-DD")}~${v(F)(le.value).format("YYYY-MM-DD")}`),1)]),e("li",Ys,[e("div",Os,s(t.$t("launchQuantity")),1),e("div",Hs,s(v(Ce)(v(je))),1)]),e("li",qs,[e("div",Ws,s(t.$t("launchPrice")),1),e("div",js,s(v(Ce)(z.value)),1)]),e("li",zs,[e("div",Qs,s(t.$t("soft"))+"/"+s(t.$t("hard")),1),e("div",Gs,s(`${Q.value}-${x.value} ${(ke=S.value)==null?void 0:ke.symbol}`),1)]),e("li",Js,[e("div",Ks,s(t.$t("receiveAddress")),1),e("div",Xs,s(v(xe)(re.value,6)),1)]),e("li",Zs,[e("div",el,s(t.$t("purposeOfFunds")),1),e("div",tl,s(v(ht)),1)]),e("li",al,[e("div",sl,s(t.$t("selectAMM")),1),e("div",ll,[u(N,{class:"icon","lazy-load":"",round:"",src:(ge=M.value)==null?void 0:ge.swapIcon,"error-icon":"/assets/images/default.png"},null,8,["src"]),e("div",null,s((_e=M.value)==null?void 0:_e.showName),1)])])]),e("div",nl,[e("div",ol,[kt(e("input",{type:"checkbox","onUpdate:modelValue":a[23]||(a[23]=n=>$.value=n)},null,512),[[gt,$.value]])]),e("div",null,s(t.$t("confirmWarn")),1)]),e("ul",il,[e("li",null,"*"+s(t.$t("createConfirmTips1",{symbol:o.value.symbol,price:v(be)(v(ce),o.value.decimal)})),1),e("li",null,"*"+s(t.$t("createConfirmTips2",{gasString:v(ze),chainCoinSymbol:t.chainCoinSymbol})),1),e("li",null,"*"+s(t.$t("createConfirmTips3")),1)]),u(L,{type:"primary",block:"",class:"btn",onClick:ft},{default:E(()=>[Z(s(t.$t("confirmRelease")),1)]),_:1}),e("div",ul,[e("div",{class:"edit-btn",onClick:a[24]||(a[24]=n=>m.value=1)},s(t.$t("goBack")),1)])])):W("",!0)]),e("div",rl,[e("div",null,s(t.$t("createFooterWarn1")),1),e("div",null,s(t.$t("createFooterWarn2")),1)]),u(et,{class:"show-confirm-submit",title:t.$t("confirmSubmit"),onCancelClick:R,confirmText:t.$t("submit"),cancelText:t.$t("seeAgain"),show:k.value,"onUpdate:show":a[25]||(a[25]=n=>k.value=n),onConfirmClick:vt},{default:E(()=>[Ke(t.$slots,"default",{},()=>[e("text",null,s(t.$t("confirmSubmitWarn")),1)],!0)]),_:3},8,["title","confirmText","cancelText","show"]),u(et,{class:"show-submit-success",onCancelClick:mt,confirmText:t.$t("manageLaunch"),cancelText:t.$t("checkHash"),show:f.value,"onUpdate:show":a[26]||(a[26]=n=>f.value=n),onConfirmClick:_t},{default:E(()=>[Ke(t.$slots,"default",{},()=>[e("div",cl,[u(Ze,{class:"icon",name:"createSuccess"}),e("div",dl,s(t.$t("submitSuccess")),1)]),e("text",null,s(t.$t("submitSuccessInfo"))+"~",1)],!0)]),_:3},8,["confirmText","cancelText","show"]),u(oa,{show:Ve.value,"onUpdate:show":a[27]||(a[27]=n=>Ve.value=n),token:S.value,"onUpdate:token":a[28]||(a[28]=n=>S.value=n)},null,8,["show","token"]),u(Qt,{show:Re.value,"onUpdate:show":a[29]||(a[29]=n=>Re.value=n),chainSwap:M.value,"onUpdate:chainSwap":a[30]||(a[30]=n=>M.value=n)},null,8,["show","chainSwap"])],64)}}},kl=se(vl,[["__scopeId","data-v-625ca0a4"]]);export{kl as default};
