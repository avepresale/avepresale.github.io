import{S as te,_ as z,M as P,r as _,o as n,c as u,j as i,m as k,b as t,t as o,g as B,K as R,X as ae,a as h,y as ne,z as se,T as j,L as b,l as f,A as $,Y as E,Z as W,G as Z,C as J,F as Y,x as H,w as K,d as oe,f as le,u as ce,$ as ie,h as de,i as ue,p as re,n as pe,k as V,s as me,q as he}from"./index-036e97cb.js";import{B as D}from"./bignumber-3e8dfdf6.js";import{s as ve}from"./function-call-f762c577.js";const q=te("lp",{state:()=>({networks:[{name:"bsc",pinkName:"BSC",value:56,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/bsc.png"},{name:"eth",pinkName:"ETH",value:1,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/eth.png"},{name:"polygon",pinkName:"Matic",value:137,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/polygon.png"},{name:"avalanche",pinkName:"AVAX",value:43114,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/avalanche.png"},{name:"fantom",pinkName:"FTM",value:250,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/fantom.png"},{name:"cronos",pinkName:"Cronos",value:25,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/cronos.png"},{name:"dogechain",pinkName:"DogeChain",value:2e3,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/dogechain.png"},{name:"alveychain",pinkName:"Alvey",value:3797,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/alveychain.png"},{name:"arbitrum",pinkName:"Arbitrum",value:42161,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/arbitrum.png"},{name:"pulse",pinkName:"PulseChain",value:369,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/pulse.png"}],checkedNetworks:[56,1,137,43114,250,25,2e3,3797,42161,369],platforms:[{name:"allPlatforms",value:"all",icon:""},{name:"PinkSale",value:"pinksale",icon:"/assets/images/pinkswap.png"}],checkedPlatform:"all",statusList:[{name:"allStatus",value:"all"},{name:"salelive",value:"salelive"},{name:"upcoming",value:"upcoming"},{name:"ended",value:"ended"},{name:"canceled",value:"canceled"}],checkedStatus:"all"}),actions:{}});const _e={class:"progress-data"},fe={__name:"Progress",props:{cumulateAmount:{type:String,default:"0"},topAmount:{type:String,default:"0"},symbol:{type:String,default:""}},setup(N){const e=N,a=P(()=>D(e.cumulateAmount).lte(e.topAmount)?D(e.cumulateAmount).dividedBy(e.topAmount).multipliedBy(100).toString():D(e.topAmount).dividedBy(e.cumulateAmount).multipliedBy(100).toString());return(r,g)=>{const p=_("van-progress");return n(),u("div",null,[i(D)(e.cumulateAmount).lte(e.topAmount)?(n(),k(p,{key:0,percentage:a.value,color:"rgba(72, 199, 116, 0.5)","stroke-width":"7","show-pivot":!1},null,8,["percentage"])):(n(),k(p,{key:1,percentage:a.value,color:"#52c41a","track-color":"rgba(72, 199, 116, 0.5)","stroke-width":"7","show-pivot":!1},null,8,["percentage"])),t("div",_e,[t("text",null,o(e.cumulateAmount)+" "+o(e.symbol),1),t("text",null,o(e.topAmount)+" "+o(e.symbol),1)])])}}},ge=z(fe,[["__scopeId","data-v-e376a842"]]);const ke={class:"launch-pad-item"},ye={class:"top"},we={class:"left"},Ie={class:"token-info"},Se={class:"token-name"},$e={class:"status"},be={key:0,class:"spot sale-live"},Ce={key:1,class:"spot upcoming"},Ne={key:2,class:"spot ended"},Ae={key:3,class:"spot canceled"},xe={class:"right"},Le={class:"tags"},Te={class:"content"},Pe={class:"line1"},Be={class:"price"},De={key:0},Ve={class:"small-title"},ze={class:"value"},Me={key:1},Ue={class:"small-title"},Fe={class:"value"},We={class:"sale-status"},qe={key:0},Oe={key:1},Xe={key:2},Re={key:3},je={class:"progress"},Ee={class:"small-title"},Ke={class:"line3"},Ye={class:"liquidity"},He={class:"lastdays"},Ge={key:0},Ze={key:1},Je={class:"bottom"},Qe={class:"platform"},et={__name:"LaunchpadItem",props:{launchpadItem:Object},setup(N){const e=N,a=q(),r=B("");let g=null;function p(l){return l<10?"0"+l.toString():l.toString()}function y(l){let w;l.status=="salelive"?w=l.endTime:l.status=="upcoming"&&(w=l.startTime),g=setInterval(function(){let c=Math.floor(D(new Date().getTime()).div(1e3).toNumber());if(c<w){let v=w-c;r.value=s(v)}else c>=w&&(clearInterval(g),r.value="00 : 00 : 00")},1e3)}function s(l){let w=Math.floor(l/86400),c=Math.floor(l/(60*60)%24),v=Math.floor(l/60%60),S=Math.floor(l%60);return w>0?p(w)+" : "+p(c)+" : "+p(v)+" : "+p(S):p(c)+" : "+p(v)+" : "+p(S)}y(e.launchpadItem);const m=P(()=>e.launchpadItem.hardCap!==""&&e.launchpadItem.hardCap!=="0"?R(e.launchpadItem.hardCap,e.launchpadItem.currencyDecimals):R(e.launchpadItem.softCap,e.launchpadItem.currencyDecimals)),L=P(()=>a.platforms.find(l=>l.value==e.launchpadItem.platform).name),A=P(()=>D(R(e.launchpadItem.cumulateAmount,e.launchpadItem.currencyDecimals)).dividedBy(m.value).multipliedBy(100).toFixed(2));ae(()=>{clearInterval(g)});function T(){e.launchpadItem.platform=="pinksale"&&window.open("https://www.pinksale.finance/launchpad/"+e.launchpadItem.address+"?chain="+a.networks.find(l=>l.value==e.launchpadItem.chainId).pinkName)}return(l,w)=>{const c=_("van-tag"),v=_("van-button");return n(),u("div",ke,[t("div",ye,[t("div",we,[h(j,{class:"token-icon",tokenIcon:i(ne)(i(a).networks.find(S=>S.value==e.launchpadItem.chainId).name,e.launchpadItem.tokenAddress.toLowerCase()),chainIcon:i(se)(i(a).networks.find(S=>S.value==e.launchpadItem.chainId).name)},null,8,["tokenIcon","chainIcon"]),t("div",Ie,[t("div",Se,o(e.launchpadItem.tokenName),1),t("div",$e,[e.launchpadItem.status=="salelive"?(n(),u("span",be)):e.launchpadItem.status=="upcoming"?(n(),u("span",Ce)):e.launchpadItem.status=="ended"?(n(),u("span",Ne)):e.launchpadItem.status=="canceled"?(n(),u("span",Ae)):b("",!0),t("span",null,o(l.$t(e.launchpadItem.status)),1)])])]),t("div",xe,[t("div",Le,[e.launchpadItem.tags.indexOf("KYC")>-1?(n(),k(c,{key:0,class:"tag kyc",plain:"",type:"primary"},{default:f(()=>[$("KYC")]),_:1})):b("",!0),e.launchpadItem.tags.indexOf("SAFU")>-1?(n(),k(c,{key:1,class:"tag safu",plain:"",type:"primary"},{default:f(()=>[$("SAFU")]),_:1})):b("",!0),e.launchpadItem.tags.indexOf("Audit")>-1?(n(),k(c,{key:2,class:"tag audit",plain:"",type:"primary"},{default:f(()=>[$("Audit")]),_:1})):b("",!0),e.launchpadItem.tags.indexOf("DOXX")>-1?(n(),k(c,{key:3,class:"tag doxx",plain:"",type:"primary"},{default:f(()=>[$("DOXX")]),_:1})):b("",!0)])])]),t("div",Te,[t("div",Pe,[t("div",Be,[e.launchpadItem.hardCap!==""&&e.launchpadItem.hardCap!=="0"?(n(),u("div",De,[t("div",Ve,o(l.$t("soft"))+"/"+o(l.$t("hard")),1),t("div",ze,o(i(E)(i(W).formatUnits(e.launchpadItem.softCap,e.launchpadItem.currencyDecimals)))+" "+o(e.launchpadItem.currencySymbol)+" - "+o(i(E)(i(W).formatUnits(e.launchpadItem.hardCap,e.launchpadItem.currencyDecimals)))+" "+o(e.launchpadItem.currencySymbol),1)])):(n(),u("div",Me,[t("div",Ue,o(l.$t("soft")),1),t("div",Fe,o(i(E)(i(W).formatUnits(e.launchpadItem.softCap,e.launchpadItem.currencyDecimals)))+" "+o(e.launchpadItem.currencySymbol),1)]))]),t("div",We,[e.launchpadItem.status=="salelive"?(n(),u("div",qe,[t("div",null,o(l.$t("endsIn"))+":",1),t("div",null,o(r.value),1)])):e.launchpadItem.status=="upcoming"?(n(),u("div",Oe,[t("div",null,o(l.$t("startsIn"))+":",1),t("div",null,o(r.value),1)])):e.launchpadItem.status=="ended"?(n(),u("div",Xe,[t("div",null,o(l.$t("saleEnded")),1)])):e.launchpadItem.status=="canceled"?(n(),u("div",Re,[t("div",null,o(l.$t("saleCanceled")),1)])):b("",!0)])]),t("div",je,[t("div",Ee,o(l.$t("progress"))+"("+o(A.value)+"%)",1),h(ge,{cumulateAmount:i(W).formatUnits(e.launchpadItem.cumulateAmount,e.launchpadItem.currencyDecimals),topAmount:m.value,symbol:e.launchpadItem.currencySymbol},null,8,["cumulateAmount","topAmount","symbol"])]),t("div",Ke,[t("div",Ye,[$(o(l.$t("liquidity"))+" ",1),t("span",null,o(e.launchpadItem.liquidityPercentage)+"%",1)]),t("div",He,[e.launchpadItem.liquidityLockDays==0||e.launchpadItem.liquidityLockDays==""?(n(),u("text",Ge,o(l.$t("unlocked")),1)):(n(),u("text",Ze,[$(o(l.$t("locked"))+" ",1),t("span",null,o(e.launchpadItem.liquidityLockDays)+" "+o(l.$t("days")),1)]))])]),t("div",Je,[t("div",Qe,[$(o(l.$t("platform",{platform:L.value}))+" ",1),e.launchpadItem.platform=="pinksale"?(n(),k(j,{key:0,class:"token-icon",tokenIcon:"/assets/images/pinkswap.png"})):e.launchpadItem.platform=="gempad"?(n(),k(j,{key:1,class:"token-icon",tokenIcon:"/assets/images/gemPad.png"})):b("",!0)]),h(v,{class:"view",type:"primary",onClick:T},{default:f(()=>[$(o(l.$t("view")),1)]),_:1})])])])}}},tt=z(et,[["__scopeId","data-v-4b37487c"]]);const at={class:"select-box"},nt={class:"title"},st={class:"operate"},ot={__name:"MultipleSelect",props:{option:{type:Array,define:[]},checked:{type:Array,define:[]},show:{type:Boolean,define:!1},showName:{type:String,define:""}},emits:["confirm","toggleSelect"],setup(N,{emit:e}){const a=N;q();const r=B([]),g=B([]);function p(){e("toggleSelect")}Z(()=>a.show,(s,m)=>{s&&(r.value=a.checked)});const y=s=>{g.value[s].toggle()};return(s,m)=>{const L=_("van-image"),A=_("van-checkbox"),T=_("van-cell"),l=_("van-cell-group"),w=_("van-checkbox-group"),c=_("van-button");return n(),u("div",at,[t("div",{class:J(["select-btn",a.show?"triangle-top":"triangle-bottom"]),onClick:p},[t("text",null,o(a.showName),1)],2),a.show?(n(),u("div",{key:0,class:"select-popup",onClick:m[5]||(m[5]=v=>p())},[t("div",{class:"select-content",onClick:m[4]||(m[4]=K(()=>{},["stop"]))},[h(w,{class:"select-list",modelValue:r.value,"onUpdate:modelValue":m[1]||(m[1]=v=>r.value=v)},{default:f(()=>[h(l,{inset:""},{default:f(()=>[(n(!0),u(Y,null,H(a.option,(v,S)=>(n(),k(T,{border:!1,clickable:"",key:v,onClick:M=>y(S)},{title:f(()=>[t("div",nt,[h(L,{class:"chain-icon",round:"",src:v.icon,"error-icon":"/assets/images/default.png"},null,8,["src"]),$(" "+o(v.name.toUpperCase()),1)])]),"right-icon":f(()=>[h(A,{name:v.value,ref_for:!0,ref:M=>g.value[S]=M,onClick:m[0]||(m[0]=K(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"]),t("div",st,[h(c,{class:"btn cancel",type:"default",onClick:m[2]||(m[2]=v=>p())},{default:f(()=>[$(o(s.$t("cancel")),1)]),_:1}),h(c,{class:"btn",type:"primary",onClick:m[3]||(m[3]=v=>e("confirm",r.value))},{default:f(()=>[$(o(s.$t("confirm")),1)]),_:1})])])])):b("",!0)])}}},lt=z(ot,[["__scopeId","data-v-5f78231a"]]);const ct={class:"select-box"},it={class:"title"},dt={__name:"SingleSelect",props:{option:{type:Array,define:[]},checked:{type:String,define:""},show:{type:Boolean,define:!1},showName:{type:String,define:""}},emits:["confirm","toggleSelect"],setup(N,{emit:e}){const a=N;q();const r=B("");Z(()=>a.show,(y,s)=>{y&&(r.value=a.checked)});function g(){e("toggleSelect")}const p=y=>{e("confirm",y)};return(y,s)=>{const m=_("van-image"),L=_("van-icon"),A=_("van-radio"),T=_("van-cell"),l=_("van-cell-group"),w=_("van-radio-group");return n(),u("div",ct,[t("div",{class:J(["select-btn",a.show?"triangle-top":"triangle-bottom"]),onClick:g},[t("text",null,o(a.showName),1)],2),a.show?(n(),u("div",{key:0,class:"select-popup",onClick:s[2]||(s[2]=c=>g())},[t("div",{class:"select-content",onClick:s[1]||(s[1]=K(()=>{},["stop"]))},[h(w,{class:"select-list",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=c=>r.value=c)},{default:f(()=>[h(l,{inset:""},{default:f(()=>[(n(!0),u(Y,null,H(N.option,(c,v)=>(n(),k(T,{border:!1,clickable:"",key:c,onClick:S=>p(c.value)},{title:f(()=>[t("div",it,[c.icon?(n(),k(m,{key:0,class:"chain-icon",round:"",src:c.icon},null,8,["src"])):b("",!0),$(" "+o(y.$t(c.name)),1)])]),"right-icon":f(()=>[h(A,{name:c.value},{icon:f(S=>[r.value&&r.value==c.value?(n(),k(L,{key:0,class:"icon",name:"success",color:"#3F80F7"})):b("",!0)]),_:2},1032,["name"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])):b("",!0)])}}},G=z(dt,[["__scopeId","data-v-49a11c5a"]]);const ut={class:"body"},rt={class:"top"},pt={class:"tools-bar"},mt={class:"left"},ht={class:"address-text"},vt={style:{"margin-left":"4px"}},_t={class:"tools"},ft={class:"select"},gt={class:"launchpad-content"},kt={class:"text"},yt={__name:"Index",setup(N){const e=oe(),a=q();le();const{t:r}=ce();ie("reload");const g=B(!1),p=B(!1),y=B(!1),s=de({page:1,pageSize:10,launchpadList:[],refreshing:!1,loading:!1,finished:!1,error:!1});async function m(){await e.connectWallet()}function L(){ve({title:r("tips"),message:r("disonnectWallet"),confirmButtonText:r("confirm"),cancelButtonText:r("cancel")}).then(()=>{e.disconnectWallet()}).catch(()=>{})}function A(){p.value=!1,y.value=!1,g.value=!g.value,g.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function T(d){if(d.length===0){me(r("selectNetworkWarn"));return}A(),a.checkedNetworks=d,U()}const l=P(()=>a.networks.length===a.checkedNetworks.length?"allNetworks":r("networks",{num:a.checkedNetworks.length}));function w(){g.value=!1,y.value=!1,p.value=!p.value,p.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function c(d){w(),a.checkedPlatform=d,U()}const v=P(()=>a.platforms.find(d=>d.value===a.checkedPlatform).name);function S(){g.value=!1,p.value=!1,y.value=!y.value,y.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function M(d){S(),a.checkedStatus=d,U()}const Q=P(()=>a.statusList.find(d=>d.value===a.checkedStatus).name);ue(()=>{O()});function U(){s.page=1,s.launchpadList=[],s.finished=!1,s.error=!1,O()}async function O(){s.loading=!0;let d=re({duration:0});console.log(a.checkedNetworks.toString());let I="";a.checkedPlatform!=="all"&&(I=a.checkedPlatform);let F="";a.checkedStatus!=="all"&&(F=a.checkedStatus);try{let x=await pe.launchpad.getLaunchpadList(s.page,s.pageSize,a.checkedNetworks.toString(),I,F);if(console.log(x),x.data.status==0){for(let X of x.data.data.list)s.launchpadList.push(X);x.data.data.list.length<s.pageSize?s.finished=!0:s.page++}}catch(x){s.error=!0,console.log(x)}finally{d.close(),s.loading=!1,s.refreshing=!1}}return(d,I)=>{const F=_("van-image"),x=_("van-empty"),X=_("van-list"),ee=_("van-pull-refresh");return n(),u("div",ut,[t("div",rt,[t("div",pt,[t("div",mt,[t("div",{onClick:I[0]||(I[0]=C=>i(e).showSelectDapp=!0)},[h(V,{class:"icon",name:"menu"})]),i(e).isConnectWallet?(n(),u("div",{key:0,class:"address",onClick:L},[i(e).chainIcon?(n(),k(F,{key:0,class:"chain-icon",round:"",src:i(e).chainIcon},null,8,["src"])):(n(),k(V,{key:1,class:"chain-icon",name:"wallet"})),t("div",ht,o(i(he)(i(e).walletAddress)),1)])):(n(),u("div",{key:1,class:"address",onClick:m},[h(V,{name:"wallet"}),t("div",vt,o(d.$t("pleaseConnectWallet")),1)]))]),t("div",_t,[h(V,{name:"language",onClick:I[1]||(I[1]=C=>i(e).showLanguagePicker=!0)})])]),t("div",ft,[h(lt,{onConfirm:T,onToggleSelect:A,show:g.value,option:i(a).networks,checked:i(a).checkedNetworks,showName:d.$t(l.value)},null,8,["show","option","checked","showName"]),h(G,{onConfirm:c,onToggleSelect:w,show:p.value,option:i(a).platforms,checked:i(a).checkedPlatform,showName:d.$t(v.value)},null,8,["show","option","checked","showName"]),h(G,{onConfirm:M,onToggleSelect:S,show:y.value,option:i(a).statusList,checked:i(a).checkedStatus,showName:d.$t(Q.value)},null,8,["show","option","checked","showName"])])]),t("div",gt,[h(ee,{modelValue:s.refreshing,"onUpdate:modelValue":I[5]||(I[5]=C=>s.refreshing=C),onRefresh:U,"pulling-text":d.$t("pulling"),"loosing-text":d.$t("loosing"),"loading-text":d.$t("loading")},{default:f(()=>[s.launchpadList.length==0?(n(),k(x,{key:0,class:"empty-box"},{image:f(()=>[h(V,{class:"icon",name:"emptyHistory"}),t("div",kt,o(d.$t("noRecord")),1)]),_:1})):(n(),k(X,{key:1,class:"launchpad-list",loading:s.loading,"onUpdate:loading":I[2]||(I[2]=C=>s.loading=C),"loading-text":d.$t("loading"),finished:s.finished,"error-text":d.$t("errorText"),"finished-text":d.$t("noMore"),error:s.error,"onUpdate:error":I[3]||(I[3]=C=>s.error=C),onLoad:I[4]||(I[4]=C=>O())},{default:f(()=>[(n(!0),u(Y,null,H(s.launchpadList,C=>(n(),k(tt,{class:"launchpad-item",launchpadItem:C},null,8,["launchpadItem"]))),256))]),_:1},8,["loading","loading-text","finished","error-text","finished-text","error"]))]),_:1},8,["modelValue","pulling-text","loosing-text","loading-text"])])])}}},$t=z(yt,[["__scopeId","data-v-dec9c5e2"]]);export{$t as default};
