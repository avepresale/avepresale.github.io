import{_ as L,u as B,f as x,d as F,e as W,g as U,r as _,o as d,c,b as e,t as n,A as m,a as i,j as l,l as f,n as A,N,O as z}from"./index-97688f7f.js";import{u as E}from"./create-b7238b4d.js";import{b as M}from"./units-66bbd7ca.js";const k=u=>(N("data-v-9935e7ba"),u=u(),z(),u),O={class:"create-control"},K={class:"control-item"},R={class:"left"},j={class:"title"},D={class:"content"},q=k(()=>e("br",null,null,-1)),G=k(()=>e("br",null,null,-1)),H={class:"right"},J={class:"control-item"},P={class:"left"},Q={class:"title"},X={class:"content"},Y={key:0},Z={key:1},ee={class:"right"},te={class:"control-item"},oe={class:"left"},le={class:"title"},se={class:"content"},ae={class:"right"},ne={class:"control-item"},ie={class:"left"},de={class:"title"},ce={class:"content"},re={class:"right"},ue={class:"control-item"},me={class:"left"},pe={class:"title"},_e={class:"content"},he={key:0},ve={key:1},be={class:"right"},fe={class:"control-item"},ke={class:"left"},Ve={class:"title"},Se={class:"content"},ge={key:0},ye={key:1},Te={class:"right"},$e={style:{"text-align":"center","padding-top":"20px"}},we={__name:"IssueControl",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(u,{emit:V}){const S=u,{t:h}=B(),g=x(),y=F(),T=W(),t=E(),$=U("");async function w(){let s=await(await A.wallet.contractTokenFactory(T.tokenFactoryAddress)).baseFee();$.value=M(s)}w();function C(o){o&&t.enableManualStartTrade==!1&&(t.enableManualStartTrade=!0)}function v(o){if(o){const s=new RegExp("^(.*\\..{"+t.decimals+"}).*$");return o.replace("-","").replace(s,"$1")}else return o}function I(){g.push("/createToken/create/taxSetting")}return t.step=2,(o,s)=>{const r=_("van-switch"),p=_("van-field"),b=_("van-button");return d(),c("div",O,[e("div",K,[e("div",R,[e("div",j,n(o.$t("manuallyOpenTheTrading")),1),e("div",D,[m(n(o.$t("manuallyOpenTheTradingInfo1")),1),q,m(" "+n(o.$t("manuallyOpenTheTradingInfo2")),1),G,m(" "+n(o.$t("manuallyOpenTheTradingInfo3")),1)])]),e("div",H,[i(r,{modelValue:l(t).enableManualStartTrade,"onUpdate:modelValue":s[0]||(s[0]=a=>l(t).enableManualStartTrade=a),size:"18px"},null,8,["modelValue"])])]),e("div",J,[e("div",P,[e("div",Q,n(o.$t("autoKillBlock")),1),e("div",X,[l(t).enableKillBlock?(d(),c("div",Z,[i(p,{class:"input",modelValue:l(t).killBlock,"onUpdate:modelValue":s[1]||(s[1]=a=>l(t).killBlock=a),placeholder:o.$t("pleaseEnterTheNumberOfBlocks"),type:"digit"},null,8,["modelValue","placeholder"])])):(d(),c("div",Y,n(o.$t("autoKillBlockInfo")),1))])]),e("div",ee,[i(r,{modelValue:l(t).enableKillBlock,"onUpdate:modelValue":s[2]||(s[2]=a=>l(t).enableKillBlock=a),size:"18px",onChange:C},null,8,["modelValue"])])]),e("div",te,[e("div",oe,[e("div",le,n(o.$t("taxSwitch")),1),e("div",se,n(o.$t("taxSwitchInfo")),1)]),e("div",ae,[i(r,{modelValue:l(t).enableChangeTax,"onUpdate:modelValue":s[3]||(s[3]=a=>l(t).enableChangeTax=a),size:"18px"},null,8,["modelValue"])])]),e("div",ne,[e("div",ie,[e("div",de,n(o.$t("whiteList2")),1),e("div",ce,n(o.$t("whiteList2Info")),1)]),e("div",re,[i(r,{modelValue:l(t).enableWhiteList,"onUpdate:modelValue":s[4]||(s[4]=a=>l(t).enableWhiteList=a),size:"18px"},null,8,["modelValue"])])]),e("div",ue,[e("div",me,[e("div",pe,n(l(h)("maxWalletLimit")),1),e("div",_e,[l(t).enableWalletLimit?(d(),c("div",ve,[i(p,{class:"input",modelValue:l(t).maxWalletAmount,"onUpdate:modelValue":s[5]||(s[5]=a=>l(t).maxWalletAmount=a),placeholder:o.$t("pleaseEnterMaxWalletNumber"),type:"number",formatter:v},null,8,["modelValue","placeholder"])])):(d(),c("div",he,n(o.$t("maxWalletLimitInfo")),1))])]),e("div",be,[i(r,{modelValue:l(t).enableWalletLimit,"onUpdate:modelValue":s[6]||(s[6]=a=>l(t).enableWalletLimit=a),size:"18px"},null,8,["modelValue"])])]),e("div",fe,[e("div",ke,[e("div",Ve,n(l(h)("maxSwapLimit")),1),e("div",Se,[l(t).enableSwapLimit?(d(),c("div",ye,[i(p,{class:"input",modelValue:l(t).maxSwapAmount,"onUpdate:modelValue":s[7]||(s[7]=a=>l(t).maxSwapAmount=a),placeholder:o.$t("pleaseEnterMaxSwapNumber"),type:"number",formatter:v},null,8,["modelValue","placeholder"])])):(d(),c("div",ge,n(o.$t("maxSwapLimitInfo")),1))])]),e("div",Te,[i(r,{modelValue:l(t).enableSwapLimit,"onUpdate:modelValue":s[8]||(s[8]=a=>l(t).enableSwapLimit=a),size:"18px"},null,8,["modelValue"])])]),i(b,{type:"default",round:"",block:"",class:"btn-control",onClick:I},{default:f(()=>[m(n(o.$t("previousStep")),1)]),_:1}),i(b,{type:"primary",round:"",block:"",class:"btn-control",onClick:s[9]||(s[9]=a=>V("createTokenClick")),loading:S.createTokenLoading},{default:f(()=>[m(n(o.$t("create")),1)]),_:1},8,["loading"]),e("div",$e,n(o.$t("creationFee",{baseFeeAmount:l(t).baseFee,baseFeeSymbol:l(y).chainCoinSymbol})),1)])}}},Be=L(we,[["__scopeId","data-v-9935e7ba"]]);export{Be as default};
