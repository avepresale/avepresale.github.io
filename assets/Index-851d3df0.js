import{S as ae,_ as z,M as P,r as v,o as n,c as u,j as i,m as k,b as t,t as o,g as B,K as R,X as ne,a as h,y as se,z as oe,T as j,L as C,l as f,A as $,Y as E,Z as W,Q as le,R as ce,G as Q,C as Z,F as K,x as Y,w as H,d as ie,f as de,u as ue,$ as re,h as pe,i as me,p as he,n as _e,k as V,s as ve,q as fe}from"./index-69e8eade.js";import{B as D}from"./bignumber-3e8dfdf6.js";import{s as ge}from"./function-call-c8729b5a.js";const q=ae("lp",{state:()=>({networks:[{name:"bsc",pinkName:"BSC",value:56,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/bsc.png"},{name:"eth",pinkName:"ETH",value:1,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/eth.png"},{name:"polygon",pinkName:"Matic",value:137,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/polygon.png"},{name:"avalanche",pinkName:"AVAX",value:43114,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/avalanche.png"},{name:"fantom",pinkName:"FTM",value:250,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/fantom.png"},{name:"cronos",pinkName:"Cronos",value:25,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/cronos.png"},{name:"dogechain",pinkName:"DogeChain",value:2e3,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/dogechain.png"},{name:"alveychain",pinkName:"Alvey",value:3797,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/alveychain.png"},{name:"arbitrum",pinkName:"Arbitrum",value:42161,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/arbitrum.png"},{name:"pulse",pinkName:"PulseChain",value:369,icon:"https://ave.s3.ap-east-1.amazonaws.com/chain/pulse.png"}],checkedNetworks:[56,1,137,43114,250,25,2e3,3797,42161,369],platforms:[{name:"allPlatforms",value:"all",icon:""},{name:"PinkSale",value:"pinksale",icon:"/assets/images/pinkswap.png"}],checkedPlatform:"all",statusList:[{name:"allStatus",value:"all"},{name:"salelive",value:"salelive"},{name:"upcoming",value:"upcoming"},{name:"ended",value:"ended"},{name:"canceled",value:"canceled"}],checkedStatus:"all"}),actions:{}});const ke={class:"progress-data"},ye={__name:"Progress",props:{cumulateAmount:{type:String,default:"0"},topAmount:{type:String,default:"0"},symbol:{type:String,default:""}},setup(b){const e=b,a=P(()=>D(e.cumulateAmount).lte(e.topAmount)?D(e.cumulateAmount).dividedBy(e.topAmount).multipliedBy(100).toString():D(e.topAmount).dividedBy(e.cumulateAmount).multipliedBy(100).toString());return(p,g)=>{const r=v("van-progress");return n(),u("div",null,[i(D)(e.cumulateAmount).lte(e.topAmount)?(n(),k(r,{key:0,percentage:a.value,color:"rgba(72, 199, 116, 0.5)","stroke-width":"7","show-pivot":!1},null,8,["percentage"])):(n(),k(r,{key:1,percentage:a.value,color:"#52c41a","track-color":"rgba(72, 199, 116, 0.5)","stroke-width":"7","show-pivot":!1},null,8,["percentage"])),t("div",ke,[t("text",null,o(e.cumulateAmount)+" "+o(e.symbol),1),t("text",null,o(e.topAmount)+" "+o(e.symbol),1)])])}}},we=z(ye,[["__scopeId","data-v-e376a842"]]);const J=b=>(le("data-v-74d585bd"),b=b(),ce(),b),Ie={class:"launch-pad-item"},Se={class:"top"},be={class:"left"},$e={class:"token-info"},Ce={class:"token-name"},Ne={class:"status"},xe={key:0,class:"spot sale-live"},Ae={key:1,class:"spot upcoming"},Le={key:2,class:"spot ended"},Te={key:3,class:"spot canceled"},Pe={class:"right"},Be={class:"tags"},De={class:"content"},Ve={class:"line1"},ze={class:"price"},Me={key:0},Ue=J(()=>t("div",{class:"small-title"},"Soft/Hard",-1)),Fe={class:"value"},We={key:1},qe=J(()=>t("div",{class:"small-title"},"Soft",-1)),Oe={class:"value"},Xe={class:"sale-status"},Re={key:0},je={key:1},Ee={key:2},He={key:3},Ke={class:"progress"},Ye={class:"small-title"},Ge={class:"line3"},Qe={class:"liquidity"},Ze={class:"lastdays"},Je={key:0},et={key:1},tt={class:"bottom"},at={class:"platform"},nt={__name:"LaunchpadItem",props:{launchpadItem:Object},setup(b){const e=b,a=q(),p=B("");let g=null;function r(l){return l<10?"0"+l.toString():l.toString()}function y(l){let w;l.status=="salelive"?w=l.endTime:l.status=="upcoming"&&(w=l.startTime),g=setInterval(function(){let c=Math.floor(D(new Date().getTime()).div(1e3).toNumber());if(c<w){let _=w-c;p.value=s(_)}else c>=w&&(clearInterval(g),p.value="00 : 00 : 00")},1e3)}function s(l){let w=Math.floor(l/86400),c=Math.floor(l/(60*60)%24),_=Math.floor(l/60%60),S=Math.floor(l%60);return w>0?r(w)+" : "+r(c)+" : "+r(_)+" : "+r(S):r(c)+" : "+r(_)+" : "+r(S)}y(e.launchpadItem);const m=P(()=>e.launchpadItem.hardCap!==""&&e.launchpadItem.hardCap!=="0"?R(e.launchpadItem.hardCap,e.launchpadItem.currencyDecimals):R(e.launchpadItem.softCap,e.launchpadItem.currencyDecimals)),L=P(()=>a.platforms.find(l=>l.value==e.launchpadItem.platform).name),x=P(()=>D(R(e.launchpadItem.cumulateAmount,e.launchpadItem.currencyDecimals)).dividedBy(m.value).multipliedBy(100).toFixed(2));ne(()=>{clearInterval(g)});function T(){e.launchpadItem.platform=="pinksale"&&window.open("https://www.pinksale.finance/launchpad/"+e.launchpadItem.address+"?chain="+a.networks.find(l=>l.value==e.launchpadItem.chainId).pinkName)}return(l,w)=>{const c=v("van-tag"),_=v("van-button");return n(),u("div",Ie,[t("div",Se,[t("div",be,[h(j,{class:"token-icon",tokenIcon:i(se)(i(a).networks.find(S=>S.value==e.launchpadItem.chainId).name,e.launchpadItem.tokenAddress.toLowerCase()),chainIcon:i(oe)(i(a).networks.find(S=>S.value==e.launchpadItem.chainId).name)},null,8,["tokenIcon","chainIcon"]),t("div",$e,[t("div",Ce,o(e.launchpadItem.tokenName),1),t("div",Ne,[e.launchpadItem.status=="salelive"?(n(),u("span",xe)):e.launchpadItem.status=="upcoming"?(n(),u("span",Ae)):e.launchpadItem.status=="ended"?(n(),u("span",Le)):e.launchpadItem.status=="canceled"?(n(),u("span",Te)):C("",!0),t("span",null,o(l.$t(e.launchpadItem.status)),1)])])]),t("div",Pe,[t("div",Be,[e.launchpadItem.tags.indexOf("KYC")>-1?(n(),k(c,{key:0,class:"tag kyc",plain:"",type:"primary"},{default:f(()=>[$("KYC")]),_:1})):C("",!0),e.launchpadItem.tags.indexOf("SAFU")>-1?(n(),k(c,{key:1,class:"tag safu",plain:"",type:"primary"},{default:f(()=>[$("SAFU")]),_:1})):C("",!0),e.launchpadItem.tags.indexOf("Audit")>-1?(n(),k(c,{key:2,class:"tag audit",plain:"",type:"primary"},{default:f(()=>[$("Audit")]),_:1})):C("",!0),e.launchpadItem.tags.indexOf("DOXX")>-1?(n(),k(c,{key:3,class:"tag doxx",plain:"",type:"primary"},{default:f(()=>[$("DOXX")]),_:1})):C("",!0)])])]),t("div",De,[t("div",Ve,[t("div",ze,[e.launchpadItem.hardCap!==""&&e.launchpadItem.hardCap!=="0"?(n(),u("div",Me,[Ue,t("div",Fe,o(i(E)(i(W).formatUnits(e.launchpadItem.softCap,e.launchpadItem.currencyDecimals)))+" "+o(e.launchpadItem.currencySymbol)+" - "+o(i(E)(i(W).formatUnits(e.launchpadItem.hardCap,e.launchpadItem.currencyDecimals)))+" "+o(e.launchpadItem.currencySymbol),1)])):(n(),u("div",We,[qe,t("div",Oe,o(i(E)(i(W).formatUnits(e.launchpadItem.softCap,e.launchpadItem.currencyDecimals)))+" "+o(e.launchpadItem.currencySymbol),1)]))]),t("div",Xe,[e.launchpadItem.status=="salelive"?(n(),u("div",Re,[t("div",null,o(l.$t("endsIn"))+":",1),t("div",null,o(p.value),1)])):e.launchpadItem.status=="upcoming"?(n(),u("div",je,[t("div",null,o(l.$t("startsIn"))+":",1),t("div",null,o(p.value),1)])):e.launchpadItem.status=="ended"?(n(),u("div",Ee,[t("div",null,o(l.$t("saleEnded")),1)])):e.launchpadItem.status=="canceled"?(n(),u("div",He,[t("div",null,o(l.$t("saleCanceled")),1)])):C("",!0)])]),t("div",Ke,[t("div",Ye,"Progress("+o(x.value)+"%)",1),h(we,{cumulateAmount:i(W).formatUnits(e.launchpadItem.cumulateAmount,e.launchpadItem.currencyDecimals),topAmount:m.value,symbol:e.launchpadItem.currencySymbol},null,8,["cumulateAmount","topAmount","symbol"])]),t("div",Ge,[t("div",Qe,[$("Liquidity "),t("span",null,o(e.launchpadItem.liquidityPercentage)+"%",1)]),t("div",Ze,[e.launchpadItem.liquidityLockDays==0||e.launchpadItem.liquidityLockDays==""?(n(),u("text",Je,"Unlocked")):(n(),u("text",et,[$("Locked "),t("span",null,o(e.launchpadItem.liquidityLockDays)+" Days",1)]))])]),t("div",tt,[t("div",at,[$(" launchpad by "+o(L.value)+" ",1),e.launchpadItem.platform=="pinksale"?(n(),k(j,{key:0,class:"token-icon",tokenIcon:"/assets/images/pinkswap.png"})):e.launchpadItem.platform=="gempad"?(n(),k(j,{key:1,class:"token-icon",tokenIcon:"/assets/images/gemPad.png"})):C("",!0)]),h(_,{class:"view",type:"primary",onClick:T},{default:f(()=>[$(o(l.$t("view")),1)]),_:1})])])])}}},st=z(nt,[["__scopeId","data-v-74d585bd"]]);const ot={class:"select-box"},lt={class:"title"},ct={class:"operate"},it={__name:"MultipleSelect",props:{option:{type:Array,define:[]},checked:{type:Array,define:[]},show:{type:Boolean,define:!1},showName:{type:String,define:""}},emits:["confirm","toggleSelect"],setup(b,{emit:e}){const a=b;q();const p=B([]),g=B([]);function r(){e("toggleSelect")}Q(()=>a.show,(s,m)=>{s&&(p.value=a.checked)});const y=s=>{g.value[s].toggle()};return(s,m)=>{const L=v("van-image"),x=v("van-checkbox"),T=v("van-cell"),l=v("van-cell-group"),w=v("van-checkbox-group"),c=v("van-button");return n(),u("div",ot,[t("div",{class:Z(["select-btn",a.show?"triangle-top":"triangle-bottom"]),onClick:r},[t("text",null,o(a.showName),1)],2),a.show?(n(),u("div",{key:0,class:"select-popup",onClick:m[5]||(m[5]=_=>r())},[t("div",{class:"select-content",onClick:m[4]||(m[4]=H(()=>{},["stop"]))},[h(w,{class:"select-list",modelValue:p.value,"onUpdate:modelValue":m[1]||(m[1]=_=>p.value=_)},{default:f(()=>[h(l,{inset:""},{default:f(()=>[(n(!0),u(K,null,Y(a.option,(_,S)=>(n(),k(T,{border:!1,clickable:"",key:_,onClick:M=>y(S)},{title:f(()=>[t("div",lt,[h(L,{class:"chain-icon",round:"",src:_.icon,"error-icon":"/assets/images/default.png"},null,8,["src"]),$(" "+o(_.name.toUpperCase()),1)])]),"right-icon":f(()=>[h(x,{name:_.value,ref_for:!0,ref:M=>g.value[S]=M,onClick:m[0]||(m[0]=H(()=>{},["stop"]))},null,8,["name"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"]),t("div",ct,[h(c,{class:"btn cancel",type:"default",onClick:m[2]||(m[2]=_=>r())},{default:f(()=>[$(o(s.$t("cancel")),1)]),_:1}),h(c,{class:"btn",type:"primary",onClick:m[3]||(m[3]=_=>e("confirm",p.value))},{default:f(()=>[$(o(s.$t("confirm")),1)]),_:1})])])])):C("",!0)])}}},dt=z(it,[["__scopeId","data-v-1ad5de92"]]);const ut={class:"select-box"},rt={class:"title"},pt={__name:"SingleSelect",props:{option:{type:Array,define:[]},checked:{type:String,define:""},show:{type:Boolean,define:!1},showName:{type:String,define:""}},emits:["confirm","toggleSelect"],setup(b,{emit:e}){const a=b;q();const p=B("");Q(()=>a.show,(y,s)=>{y&&(p.value=a.checked)});function g(){e("toggleSelect")}const r=y=>{e("confirm",y)};return(y,s)=>{const m=v("van-image"),L=v("van-icon"),x=v("van-radio"),T=v("van-cell"),l=v("van-cell-group"),w=v("van-radio-group");return n(),u("div",ut,[t("div",{class:Z(["select-btn",a.show?"triangle-top":"triangle-bottom"]),onClick:g},[t("text",null,o(a.showName),1)],2),a.show?(n(),u("div",{key:0,class:"select-popup",onClick:s[2]||(s[2]=c=>g())},[t("div",{class:"select-content",onClick:s[1]||(s[1]=H(()=>{},["stop"]))},[h(w,{class:"select-list",modelValue:p.value,"onUpdate:modelValue":s[0]||(s[0]=c=>p.value=c)},{default:f(()=>[h(l,{inset:""},{default:f(()=>[(n(!0),u(K,null,Y(b.option,(c,_)=>(n(),k(T,{border:!1,clickable:"",key:c,onClick:S=>r(c.value)},{title:f(()=>[t("div",rt,[c.icon?(n(),k(m,{key:0,class:"chain-icon",round:"",src:c.icon},null,8,["src"])):C("",!0),$(" "+o(y.$t(c.name)),1)])]),"right-icon":f(()=>[h(x,{name:c.value},{icon:f(S=>[p.value&&p.value==c.value?(n(),k(L,{key:0,class:"icon",name:"success",color:"#3F80F7"})):C("",!0)]),_:2},1032,["name"])]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1},8,["modelValue"])])])):C("",!0)])}}},G=z(pt,[["__scopeId","data-v-c90cd5d9"]]);const mt={class:"body"},ht={class:"top"},_t={class:"tools-bar"},vt={class:"left"},ft={class:"address-text"},gt={style:{"margin-left":"4px"}},kt={class:"tools"},yt={class:"select"},wt={class:"launchpad-content"},It={class:"text"},St={__name:"Index",setup(b){const e=ie(),a=q();de();const{t:p}=ue();re("reload");const g=B(!1),r=B(!1),y=B(!1),s=pe({page:1,pageSize:10,launchpadList:[],refreshing:!1,loading:!1,finished:!1,error:!1});async function m(){await e.connectWallet()}function L(){ge({title:p("tips"),message:p("disonnectWallet"),confirmButtonText:p("confirm"),cancelButtonText:p("cancel")}).then(()=>{e.disconnectWallet()}).catch(()=>{})}function x(){r.value=!1,y.value=!1,g.value=!g.value,g.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function T(d){if(d.length===0){ve(p("selectNetworkWarn"));return}x(),a.checkedNetworks=d,U()}const l=P(()=>a.networks.length===a.checkedNetworks.length?"allNetworks":a.checkedNetworks.length+" Networks");function w(){g.value=!1,y.value=!1,r.value=!r.value,r.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function c(d){w(),a.checkedPlatform=d,U()}const _=P(()=>a.platforms.find(d=>d.value===a.checkedPlatform).name);function S(){g.value=!1,r.value=!1,y.value=!y.value,y.value?document.body.style.overflow="hidden":document.body.style.overflow=""}function M(d){S(),a.checkedStatus=d,U()}const ee=P(()=>a.statusList.find(d=>d.value===a.checkedStatus).name);me(()=>{O()});function U(){s.page=1,s.launchpadList=[],s.finished=!1,s.error=!1,O()}async function O(){s.loading=!0;let d=he({duration:0});console.log(a.checkedNetworks.toString());let I="";a.checkedPlatform!=="all"&&(I=a.checkedPlatform);let F="";a.checkedStatus!=="all"&&(F=a.checkedStatus);try{let A=await _e.launchpad.getLaunchpadList(s.page,s.pageSize,a.checkedNetworks.toString(),I,F);if(console.log(A),A.data.status==0){for(let X of A.data.data.list)s.launchpadList.push(X);A.data.data.list.length<s.pageSize?s.finished=!0:s.page++}}catch(A){s.error=!0,console.log(A)}finally{d.close(),s.loading=!1,s.refreshing=!1}}return(d,I)=>{const F=v("van-image"),A=v("van-empty"),X=v("van-list"),te=v("van-pull-refresh");return n(),u("div",mt,[t("div",ht,[t("div",_t,[t("div",vt,[t("div",{onClick:I[0]||(I[0]=N=>i(e).showSelectDapp=!0)},[h(V,{class:"icon",name:"menu"})]),i(e).isConnectWallet?(n(),u("div",{key:0,class:"address",onClick:L},[i(e).chainIcon?(n(),k(F,{key:0,class:"chain-icon",round:"",src:i(e).chainIcon},null,8,["src"])):(n(),k(V,{key:1,class:"chain-icon",name:"wallet"})),t("div",ft,o(i(fe)(i(e).walletAddress)),1)])):(n(),u("div",{key:1,class:"address",onClick:m},[h(V,{name:"wallet"}),t("div",gt,o(d.$t("pleaseConnectWallet")),1)]))]),t("div",kt,[h(V,{name:"language",onClick:I[1]||(I[1]=N=>i(e).showLanguagePicker=!0)})])]),t("div",yt,[h(dt,{onConfirm:T,onToggleSelect:x,show:g.value,option:i(a).networks,checked:i(a).checkedNetworks,showName:d.$t(l.value)},null,8,["show","option","checked","showName"]),h(G,{onConfirm:c,onToggleSelect:w,show:r.value,option:i(a).platforms,checked:i(a).checkedPlatform,showName:d.$t(_.value)},null,8,["show","option","checked","showName"]),h(G,{onConfirm:M,onToggleSelect:S,show:y.value,option:i(a).statusList,checked:i(a).checkedStatus,showName:d.$t(ee.value)},null,8,["show","option","checked","showName"])])]),t("div",wt,[h(te,{modelValue:s.refreshing,"onUpdate:modelValue":I[5]||(I[5]=N=>s.refreshing=N),onRefresh:U,"pulling-text":d.$t("pulling"),"loosing-text":d.$t("loosing"),"loading-text":d.$t("loading")},{default:f(()=>[s.launchpadList.length==0?(n(),k(A,{key:0,class:"empty-box"},{image:f(()=>[h(V,{class:"icon",name:"emptyHistory"}),t("div",It,o(d.$t("noRecord")),1)]),_:1})):(n(),k(X,{key:1,class:"launchpad-list",loading:s.loading,"onUpdate:loading":I[2]||(I[2]=N=>s.loading=N),"loading-text":d.$t("loading"),finished:s.finished,"error-text":d.$t("errorText"),"finished-text":d.$t("noMore"),error:s.error,"onUpdate:error":I[3]||(I[3]=N=>s.error=N),onLoad:I[4]||(I[4]=N=>O())},{default:f(()=>[(n(!0),u(K,null,Y(s.launchpadList,N=>(n(),k(st,{class:"launchpad-item",launchpadItem:N},null,8,["launchpadItem"]))),256))]),_:1},8,["loading","loading-text","finished","error-text","finished-text","error"]))]),_:1},8,["modelValue","pulling-text","loosing-text","loading-text"])])])}}},Nt=z(St,[["__scopeId","data-v-3f000a04"]]);export{Nt as default};
