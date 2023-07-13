import{D as X}from"./DropDown-03a7ce1f.js";import{_ as j,u as W,d as G,g as B,E as ee,L as $,n as O,s as F,r as g,o as w,m as A,l as d,a as n,b as r,c as I,x as te,T as se,t as p,j as t,K as T,F as M,y as Y,q as ae,f as le,A as z,M as Z,C as D}from"./index-e9c6c54d.js";import{u as K}from"./create-6a4a67f6.js";import{B as v}from"./bignumber-3e8dfdf6.js";import{R as x}from"./Rate-6944e835.js";/* empty css                                                       */const oe={class:"chain-swap"},re=["onClick"],ue={class:"left"},ie={class:"swap-name"},de={class:"right"},ce={__name:"ChainSwaps",props:{showChainSwap:Boolean},emits:["update:showChainSwap"],setup(U,{emit:N}){const k=U,{t:P}=W(),_=G(),e=K(),h=B(""),f=B([]);ee(()=>k.showChainSwap,(y,o)=>{y&&f.value.length==0&&R()}),R();const L=$(()=>h.value?f.value.filter(y=>y.showName.toLowerCase().indexOf(h.value.toLocaleLowerCase())!=-1):f.value);async function R(){f.value=[];let y=_.chain;if(y=="bsc_test")f.value=[{chain:"bsc",factoryAddress:"0x6725F303b657a9451d8BA641348b6761A6CC7a17",isSwapSupported:1,name:"cakev2",routerAddress:"0xd99d1c33f9fc3444f8101754abc46c52416550d1",showName:"PancakeSwapV2",sortId:1,swapUrl:"https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=",swapIcon:"https://www.avestorage.cloud/swap/cakev2.jpeg"}];else try{let o=await O.ave.getChainSwaps(y);if(o.data.status==1){let c=o.data.data;if(c&&c.length>0)for(let i of c){let C="https://www.avestorage.cloud/swap/"+i.name+".jpeg",m={chain:i.chain,factoryAddress:i.factory_address.toLowerCase(),isSwapSupported:i.is_swap_supported,name:i.name,routerAddress:i.router_address.toLowerCase(),showName:i.show_name,sortId:i.sort_id,swapUrl:i.swap_url,swapIcon:C};f.value.push(m)}console.log(f.value)}else F(P("unknowError"))}catch(o){o&&o.message?F(o.message):F(P("unknowError"))}finally{}}function V(y){e.chainSwap=y,N("update:showChainSwap",!1)}return(y,o)=>{const c=g("van-search"),i=g("van-icon"),C=g("van-action-sheet");return w(),A(C,{show:U.showChainSwap,"safe-area-inset-bottom":"",title:y.$t("selectSwap"),onClose:o[1]||(o[1]=m=>N("update:showChainSwap",!1)),onCancel:o[2]||(o[2]=m=>N("update:showChainSwap",!1))},{default:d(()=>[n(c,{modelValue:h.value,"onUpdate:modelValue":o[0]||(o[0]=m=>h.value=m),shape:"round",placeholder:y.$t("search"),clearable:""},null,8,["modelValue","placeholder"]),r("ul",oe,[(w(!0),I(M,null,te(L.value,m=>(w(),I("li",{class:"swap-item",onClick:s=>V(m)},[r("div",ue,[n(se,{class:"token-icon",tokenIcon:m.swapIcon},null,8,["tokenIcon"]),r("div",ie,p(m.showName),1)]),r("div",de,[t(e).chainSwap&&t(e).chainSwap.factoryAddress==m.factoryAddress?(w(),A(i,{key:0,name:"success",color:"#3F80F7"})):T("",!0)])],8,re))),256))])]),_:1},8,["show","title"])}}},pe=j(ce,[["__scopeId","data-v-16828252"]]);const ve={class:"token-list"},me=["onClick"],we={class:"left"},fe={class:"token-info"},ye={class:"token-name"},ke={key:0,class:"token-address"},he={class:"right"},_e={key:0,class:"amount"},be={class:"price"},Fe={class:"icon"},ge={__name:"TokenList",props:{showTokenList:Boolean},emits:["update:showTokenList"],setup(U,{emit:N}){const k=U,{t:P}=W(),_=G(),e=K(),h=B(""),f=B([]);ee(()=>k.showTokenList,(o,c)=>{o&&f.value.length==0&&V()}),V();const L=$(()=>h.value?h.value.startsWith("0x")?f.value.filter(o=>o.address.toLowerCase()==h.value.toLowerCase()):f.value.filter(o=>o.symbol.toLowerCase().indexOf(h.value.toLowerCase())>-1):f.value);function R(o){e.token=o,N("update:showTokenList",!1)}async function V(){let o=_.chain,c=[];if(o=="bsc_test")c=[{chain:"bsc",demical:18,name:"",symbol:"BNB",tokenAddress:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",currentPriceUsd:289.85489812433093,value:.0319133884,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png"},{chain:"bsc",demical:18,name:"Binance-Peg BSC-USD",symbol:"USDT",tokenAddress:"0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",currentPriceUsd:.9970705187821386,value:0,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0x55d398326f99059ff775485246999027b3197955.png"},{chain:"bsc",demical:18,name:"Wrapped BNB",symbol:"WBNB",tokenAddress:"0xae13d989dac2f0debff460ac112a837c89baa7cd",currentPriceUsd:289.85489812433093,value:0,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"}];else try{let i=await O.ave.getUserToken(o,_.walletAddress);if(console.log(i),i.data.status==1){let m=i.data.data.filter(s=>new RegExp("^0x.*$","gi").test(s.token)&&s.value>0&&s.risk_score<60&&s.risk_level>=0&&s.flag!=="blacklist"&&s.symbol!==""&&s.flag!=="lp"&&s.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee").map(s=>({chain:s.chain,demical:s.decimals,name:s.name,symbol:s.symbol,tokenAddress:s.token.toLowerCase(),currentPriceUsd:s.current_price_usd,value:s.value,icon:Y(s.chain.toLowerCase(),s.token.toLowerCase())}));c=c.concat(m)}else return;let C=await O.ave.getSwapTokens(o);if(console.log(C),C.data.status==1){let m=C.data.data.filter(s=>new RegExp("^0x.*$","gi").test(s.token)&&c.findIndex(q=>q.tokenAddress==s.token)==-1&&s.risk_score<60&&s.risk_level>=0&&s.flag!=="blacklist"&&s.symbol!==""&&s.flag!=="lp"&&s.token=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee").map(s=>({chain:s.chain,demical:s.decimals,name:s.name,symbol:s.symbol,tokenAddress:s.token.toLowerCase(),currentPriceUsd:s.current_price_usd,value:s.value,icon:Y(s.chain.toLowerCase(),s.token.toLowerCase())}));c=c.concat(m)}else return}catch(i){i&&i.message?F(i.message):F(P("unknowError")),c=[]}finally{}f.value=c}function y(){N("update:showTokenList",!1)}return(o,c)=>{const i=g("van-search"),C=g("van-icon"),m=g("van-action-sheet");return w(),A(m,{show:U.showTokenList,"safe-area-inset-bottom":"",title:o.$t("selectCurrency"),onClose:y,onCancel:y},{default:d(()=>[n(i,{modelValue:h.value,"onUpdate:modelValue":c[0]||(c[0]=s=>h.value=s),shape:"round",placeholder:o.$t("searchTokenOrName"),clearable:""},null,8,["modelValue","placeholder"]),r("ul",ve,[(w(!0),I(M,null,te(L.value,s=>(w(),I("li",{class:"token-item",onClick:q=>R(s)},[r("div",we,[n(se,{class:"token-icon",tokenIcon:s.icon},null,8,["tokenIcon"]),r("div",fe,[r("div",ye,p(s.symbol),1),s.tokenAddress!=="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"?(w(),I("div",ke,p(t(ae)(s.tokenAddress)),1)):T("",!0)])]),r("div",he,[s.value>0?(w(),I("div",_e,[r("div",null,p(t(v)(s.value).toString().indexOf(".")==-1?t(v)(s.value):t(v)(s.value).toFixed(6)),1),r("div",be,"$"+p(t(v)(s.value).multipliedBy(s.currentPriceUsd).toFixed(2)),1)])):T("",!0),r("div",Fe,[t(e).token&&t(e).token.tokenAddress==s.tokenAddress?(w(),A(C,{key:0,name:"success",color:"#3F80F7"})):T("",!0)])])],8,me))),256))])]),_:1},8,["show","title"])}}},Ce=j(ge,[["__scopeId","data-v-f108970b"]]);const Se={class:"setting"},Te={class:"explain"},$e={style:{color:"#999"}},Ie={class:"rate-setting"},Le={class:"title"},xe={class:"rate-setting"},Be={class:"title"},Ae={class:"address-setting"},Ne={class:"title"},Pe={class:"explain"},Ue={class:"btn-control-group"},Re={style:{"text-align":"center","padding-top":"20px"}},Ve={class:"content"},b=20,Ee={__name:"TaxSetting",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(U,{emit:N}){const{t:k}=W(),P=le(),_=G(),e=K(),h=B(!1),f=B(!1),L=B(!1);B(!1);const R=$(()=>e.deployerId==1?v(b).minus(e.buyBurnFee).minus(e.buyLPFee).toNumber():e.deployerId==2||e.deployerId==3?v(b).minus(e.buyRewardFee).minus(e.buyLPFee).toNumber():0),V=$(()=>e.deployerId==1?v(b).minus(e.buyFundFee).minus(e.buyBurnFee).toNumber():e.deployerId==2||e.deployerId==3?v(b).minus(e.buyFundFee).minus(e.buyRewardFee).toNumber():0),y=$(()=>{if(e.deployerId==1)return v(b).minus(e.buyFundFee).minus(e.buyLPFee).toNumber()}),o=$(()=>e.deployerId==2||e.deployerId==3?v(b).minus(e.buyFundFee).minus(e.buyLPFee).toNumber():0),c=$(()=>e.deployerId==1?v(b).minus(e.sellBurnFee).minus(e.sellLPFee).toNumber():e.deployerId==2||e.deployerId==3?v(b).minus(e.sellRewardFee).minus(e.sellLPFee).toNumber():0),i=$(()=>e.deployerId==1?v(b).minus(e.sellFundFee).minus(e.sellBurnFee).toNumber():e.deployerId==2||e.deployerId==3?v(b).minus(e.sellFundFee).minus(e.sellRewardFee).toNumber():0),C=$(()=>e.deployerId==1?v(b).minus(e.sellFundFee).minus(e.sellLPFee).toNumber():0),m=$(()=>e.deployerId==2||e.deployerId==3?v(b).minus(e.sellFundFee).minus(e.sellLPFee).toNumber():0);function s(){P.push("/createToken/create/detail")}function q(){const l=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;if(e.deployerId===1||e.deployerId==2||e.deployerId==3){if(!e.token){F(k("pleaseSelectCurrency"));return}if(!e.chainSwap){F(k("pleaseSelectSwap"));return}if(e.deployerId===1){if(v(e.buyFundFee).plus(e.buyBurnFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellBurnFee).plus(e.sellLPFee).lte(0)){F(k("taxMustGt0"));return}}else if(e.deployerId===2){if(v(e.buyFundFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellLPFee).lte(0)){F(k("taxlimit2"));return}}else if(e.deployerId===3){if(!e.rewardToken){F(k("dividendTokenError"));return}if(!l.test(e.rewardToken)){F(k("pleaseEnterTrueAddress"));return}if(v(e.buyFundFee).plus(e.buyLPFee).plus(e.buyRewardFee).plus(e.sellFundFee).plus(e.sellLPFee).plus(e.sellRewardFee).lte(0)){F(k("taxMustGt0"));return}}if((Number(e.buyFundFee)>0||Number(e.sellFundFee)>0)&&!e.fundAddress){F(k("pleaseEnterMarketingAddress"));return}if(e.fundAddress&&!l.test(e.fundAddress)){F(k("pleaseEnterTrueAddress"));return}}P.push("/createToken/create/IssueControl")}return e.step=1,(l,a)=>{const S=g("van-cell"),E=g("van-cell-group"),H=g("van-field"),J=g("van-icon"),Q=g("van-button"),ne=g("van-dialog");return w(),I(M,null,[r("div",Se,[n(E,{inset:""},{default:d(()=>[n(S,{title:l.$t("selectCurrency"),class:"switch-cell",onClick:a[0]||(a[0]=u=>f.value=!0)},Z({_:2},[t(e).token?{name:"value",fn:d(()=>[n(X,{logo:t(e).token.icon,value:t(e).token.symbol},null,8,["logo","value"])]),key:"0"}:{name:"value",fn:d(()=>[r("div",null,"---")]),key:"1"}]),1032,["title"])]),_:1}),r("div",Te,p(l.$t("currencyExplain")),1),n(E,{inset:""},{default:d(()=>[n(S,{title:l.$t("selectSwap"),class:"switch-cell",onClick:a[1]||(a[1]=u=>h.value=!0)},Z({_:2},[t(e).chainSwap?{name:"value",fn:d(()=>[n(X,{logo:t(e).chainSwap.swapIcon,value:t(e).chainSwap.showName},null,8,["logo","value"])]),key:"0"}:{name:"value",fn:d(()=>[r("div",null,"---")]),key:"1"}]),1032,["title"])]),_:1}),t(e).deployerId===3?(w(),I(M,{key:0},[n(E,{inset:"",class:"rate-cell"},{default:d(()=>[n(H,{modelValue:t(e).rewardToken,"onUpdate:modelValue":a[2]||(a[2]=u=>t(e).rewardToken=u),"label-width":"8em",label:l.$t("rewardToken"),placeholder:l.$t("enterContract"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),n(E,{inset:"",class:"rate-cell"},{default:d(()=>[r("div",$e,p(l.$t("rewardTokenInfo",{chainToken:t(_).chainCoinSymbol})),1)]),_:1})],64)):T("",!0),r("div",Ie,[r("div",Le,[z(p(t(k)("buyTax",{max:b})),1),n(J,{class:"question-icon",name:"question-o",onClick:a[3]||(a[3]=u=>L.value=!0)})]),n(S,{class:"rate-cell",title:l.$t("marketingTax")},{extra:d(()=>[n(x,{value:t(e).buyFundFee,"onUpdate:value":a[4]||(a[4]=u=>t(e).buyFundFee=u),"max-value":R.value},null,8,["value","max-value"])]),_:1},8,["title"]),n(S,{class:"rate-cell",title:l.$t("liquidityTax")},{extra:d(()=>[n(x,{value:t(e).buyLPFee,"onUpdate:value":a[5]||(a[5]=u=>t(e).buyLPFee=u),"max-value":V.value},null,8,["value","max-value"])]),_:1},8,["title"]),t(e).deployerId==1?(w(),A(S,{key:0,class:"rate-cell",title:l.$t("burnTax")},{extra:d(()=>[n(x,{value:t(e).buyBurnFee,"onUpdate:value":a[6]||(a[6]=u=>t(e).buyBurnFee=u),"max-value":y.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0),t(e).deployerId==2||t(e).deployerId==3?(w(),A(S,{key:1,class:"rate-cell",title:l.$t("rewardTax")},{extra:d(()=>[n(x,{value:t(e).buyRewardFee,"onUpdate:value":a[7]||(a[7]=u=>t(e).buyRewardFee=u),"max-value":o.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0)]),r("div",xe,[r("div",Be,[z(p(t(k)("sellTax",{max:b})),1),n(J,{class:"question-icon",name:"question-o",onClick:a[8]||(a[8]=u=>L.value=!0)})]),n(S,{class:"rate-cell",title:l.$t("marketingTax")},{extra:d(()=>[n(x,{value:t(e).sellFundFee,"onUpdate:value":a[9]||(a[9]=u=>t(e).sellFundFee=u),"max-value":c.value},null,8,["value","max-value"])]),_:1},8,["title"]),n(S,{class:"rate-cell",title:l.$t("liquidityTax")},{extra:d(()=>[n(x,{value:t(e).sellLPFee,"onUpdate:value":a[10]||(a[10]=u=>t(e).sellLPFee=u),"max-value":i.value},null,8,["value","max-value"])]),_:1},8,["title"]),t(e).deployerId==1?(w(),A(S,{key:0,class:"rate-cell",title:l.$t("burnTax")},{extra:d(()=>[n(x,{value:t(e).sellBurnFee,"onUpdate:value":a[11]||(a[11]=u=>t(e).sellBurnFee=u),"max-value":C.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0),t(e).deployerId==2||t(e).deployerId==3?(w(),A(S,{key:1,class:"rate-cell",title:l.$t("rewardTax")},{extra:d(()=>[n(x,{value:t(e).sellRewardFee,"onUpdate:value":a[12]||(a[12]=u=>t(e).sellRewardFee=u),"max-value":m.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0)]),r("div",Ae,[r("div",Ne,p(l.$t("addressSetting")),1),n(E,{inset:"",class:"rate-cell"},{default:d(()=>[n(S,{title:l.$t("ownerAddr"),class:"switch-cell",value:t(ae)(t(_).walletAddress)},null,8,["title","value"])]),_:1}),n(E,{inset:"",class:"rate-cell"},{default:d(()=>[n(H,{modelValue:t(e).fundAddress,"onUpdate:modelValue":a[13]||(a[13]=u=>t(e).fundAddress=u),"label-width":"10em",label:l.$t("marketingAddress"),placeholder:l.$t("enterAddress"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),r("div",Pe,p(l.$t("marketAddressExplain")),1)]),r("div",Ue,[n(Q,{type:"primary",plain:"",round:"",block:"",class:"btn-control",onClick:s},{default:d(()=>[z(p(l.$t("previousStep")),1)]),_:1}),n(Q,{type:"primary",round:"",block:"",class:"btn-control",onClick:q},{default:d(()=>[z(p(l.$t("nextStep")),1)]),_:1})]),r("div",Re,p(l.$t("creationFee",{baseFeeAmount:t(e).baseFee,baseFeeSymbol:t(_).chainCoinSymbol})),1)]),n(ne,{class:"tax-instruction",show:L.value,"onUpdate:show":a[14]||(a[14]=u=>L.value=u),title:l.$t("taxInstruction"),showCancelButton:!1,confirmButtonText:l.$t("understand"),onConfirm:a[15]||(a[15]=u=>L.value=!1),"close-on-click-overlay":""},{default:d(()=>[r("div",Ve,[r("div",{class:D(t(_).language)},p(l.$t("taxInstructionText1")),3),r("div",{class:D(t(_).language)},p(l.$t("taxInstructionText2")),3),r("div",{class:D(t(_).language)},p(l.$t("taxInstructionText3")),3),t(e).deployerId==1?(w(),I("div",{key:0,class:D(t(_).language)},p(l.$t("taxInstructionText4")),3)):T("",!0),t(e).deployerId==2||t(e).deployerId==3?(w(),I("div",{key:1,class:D(t(_).language)},p(l.$t("taxInstructionText5")),3)):T("",!0),r("div",{class:D(t(_).language)},p(l.$t("taxInstructionText6")),3)])]),_:1},8,["show","title","confirmButtonText"]),n(Ce,{showTokenList:f.value,"onUpdate:showTokenList":a[16]||(a[16]=u=>f.value=u)},null,8,["showTokenList"]),n(pe,{showChainSwap:h.value,"onUpdate:showChainSwap":a[17]||(a[17]=u=>h.value=u)},null,8,["showChainSwap"])],64)}}},We=j(Ee,[["__scopeId","data-v-1c3626ee"]]);export{We as default};
