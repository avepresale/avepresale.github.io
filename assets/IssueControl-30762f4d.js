import{_ as B,u as x,f as F,d as W,e as U,g as A,r as h,o as d,c,b as e,t as n,A as m,a as i,j as l,l as k,n as V,L as M,M as z}from"./index-1fa9e3e2.js";import{u as E}from"./create-6ea0dc63.js";import{b as N}from"./units-d3346285.js";const S=u=>(M("data-v-244ddc43"),u=u(),z(),u),K={class:"create-control"},O={class:"control-item"},R={class:"left"},j={class:"title"},D={class:"content"},q=S(()=>e("br",null,null,-1)),G=S(()=>e("br",null,null,-1)),H={class:"right"},J={class:"control-item"},P={class:"left"},Q={class:"title"},X={class:"content"},Y={key:0},Z={key:1},ee={class:"right"},te={class:"control-item"},oe={class:"left"},le={class:"title"},se={class:"content"},ae={class:"right"},ne={class:"control-item"},ie={class:"left"},de={class:"title"},ce={class:"content"},re={class:"right"},ue={class:"control-item"},me={class:"left"},pe={class:"title"},_e={class:"content"},he={key:0},ve={key:1},fe={class:"right"},be={class:"control-item"},ke={class:"left"},Ve={class:"title"},Se={class:"content"},ge={key:0},ye={key:1},Te={class:"right"},we={style:{"text-align":"center","padding-top":"20px"}},$e={__name:"IssueControl",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(u,{emit:g}){const y=u,{t:v}=x(),T=F(),w=W(),p=U(),o=E(),$=A("");async function C(){let t;p.v2?t=await V.wallet.contractTokenFactoryV2(p.tokenFactoryV2Address):t=await V.wallet.contractTokenFactory(p.tokenFactoryAddress);let s=await t.baseFee();$.value=N(s)}C();function L(t){t&&o.enableManualStartTrade==!1&&(o.enableManualStartTrade=!0)}function f(t){if(t){const s=new RegExp("^(.*\\..{"+o.decimals+"}).*$");return t.replace("-","").replace(s,"$1")}else return t}function I(){T.push("/createToken/create/taxSetting")}return o.step=2,(t,s)=>{const r=h("van-switch"),_=h("van-field"),b=h("van-button");return d(),c("div",K,[e("div",O,[e("div",R,[e("div",j,n(t.$t("manuallyOpenTheTrading")),1),e("div",D,[m(n(t.$t("manuallyOpenTheTradingInfo1")),1),q,m(" "+n(t.$t("manuallyOpenTheTradingInfo2")),1),G,m(" "+n(t.$t("manuallyOpenTheTradingInfo3")),1)])]),e("div",H,[i(r,{modelValue:l(o).enableManualStartTrade,"onUpdate:modelValue":s[0]||(s[0]=a=>l(o).enableManualStartTrade=a),size:"18px"},null,8,["modelValue"])])]),e("div",J,[e("div",P,[e("div",Q,n(t.$t("autoKillBlock")),1),e("div",X,[l(o).enableKillBlock?(d(),c("div",Z,[i(_,{class:"input",modelValue:l(o).killBlock,"onUpdate:modelValue":s[1]||(s[1]=a=>l(o).killBlock=a),placeholder:t.$t("pleaseEnterTheNumberOfBlocks"),type:"digit"},null,8,["modelValue","placeholder"])])):(d(),c("div",Y,n(t.$t("autoKillBlockInfo")),1))])]),e("div",ee,[i(r,{modelValue:l(o).enableKillBlock,"onUpdate:modelValue":s[2]||(s[2]=a=>l(o).enableKillBlock=a),size:"18px",onChange:L},null,8,["modelValue"])])]),e("div",te,[e("div",oe,[e("div",le,n(t.$t("taxSwitch")),1),e("div",se,n(t.$t("taxSwitchInfo")),1)]),e("div",ae,[i(r,{modelValue:l(o).enableChangeTax,"onUpdate:modelValue":s[3]||(s[3]=a=>l(o).enableChangeTax=a),size:"18px"},null,8,["modelValue"])])]),e("div",ne,[e("div",ie,[e("div",de,n(t.$t("whiteList2")),1),e("div",ce,n(t.$t("whiteList2Info")),1)]),e("div",re,[i(r,{modelValue:l(o).enableWhiteList,"onUpdate:modelValue":s[4]||(s[4]=a=>l(o).enableWhiteList=a),size:"18px"},null,8,["modelValue"])])]),e("div",ue,[e("div",me,[e("div",pe,n(l(v)("maxWalletLimit")),1),e("div",_e,[l(o).enableWalletLimit?(d(),c("div",ve,[i(_,{class:"input",modelValue:l(o).maxWalletAmount,"onUpdate:modelValue":s[5]||(s[5]=a=>l(o).maxWalletAmount=a),placeholder:t.$t("pleaseEnterMaxWalletNumber"),type:"number",formatter:f},null,8,["modelValue","placeholder"])])):(d(),c("div",he,n(t.$t("maxWalletLimitInfo")),1))])]),e("div",fe,[i(r,{modelValue:l(o).enableWalletLimit,"onUpdate:modelValue":s[6]||(s[6]=a=>l(o).enableWalletLimit=a),size:"18px"},null,8,["modelValue"])])]),e("div",be,[e("div",ke,[e("div",Ve,n(l(v)("maxSwapLimit")),1),e("div",Se,[l(o).enableSwapLimit?(d(),c("div",ye,[i(_,{class:"input",modelValue:l(o).maxSwapAmount,"onUpdate:modelValue":s[7]||(s[7]=a=>l(o).maxSwapAmount=a),placeholder:t.$t("pleaseEnterMaxSwapNumber"),type:"number",formatter:f},null,8,["modelValue","placeholder"])])):(d(),c("div",ge,n(t.$t("maxSwapLimitInfo")),1))])]),e("div",Te,[i(r,{modelValue:l(o).enableSwapLimit,"onUpdate:modelValue":s[8]||(s[8]=a=>l(o).enableSwapLimit=a),size:"18px"},null,8,["modelValue"])])]),i(b,{type:"default",round:"",block:"",class:"btn-control",onClick:I},{default:k(()=>[m(n(t.$t("previousStep")),1)]),_:1}),i(b,{type:"primary",round:"",block:"",class:"btn-control",onClick:s[9]||(s[9]=a=>g("createTokenClick")),loading:y.createTokenLoading},{default:k(()=>[m(n(t.$t("create")),1)]),_:1},8,["loading"]),e("div",we,n(t.$t("creationFee",{baseFeeAmount:l(o).baseFee,baseFeeSymbol:l(w).chainCoinSymbol})),1)])}}},Be=B($e,[["__scopeId","data-v-244ddc43"]]);export{Be as default};
