import{D as J}from"./DropDown-27980a3a.js";import{_ as j,u as q,d as z,g as V,J as X,K as C,n as O,s as _,r as S,o as k,m as I,l as i,a,b as u,c as x,x as Y,T as Z,t as g,j as t,I as T,F as E,y as K,q as ee,f as se,L as H,A as Q}from"./index-a6f40eeb.js";import{u as M}from"./create-beabff50.js";import{B as p}from"./bignumber-3e8dfdf6.js";import{R as L}from"./Rate-5aef4b4a.js";const te={class:"chain-swap"},ae=["onClick"],le={class:"left"},ne={class:"swap-name"},oe={class:"right"},re={__name:"ChainSwaps",props:{showChainSwap:Boolean},emits:["update:showChainSwap"],setup(A,{emit:$}){const f=A,{t:B}=q(),N=z(),e=M(),y=V(""),m=V([]);X(()=>f.showChainSwap,(w,l)=>{w&&m.value.length==0&&P()}),P();const D=C(()=>y.value?m.value.filter(w=>w.showName.toLowerCase().indexOf(y.value.toLocaleLowerCase())!=-1):m.value);async function P(){m.value=[];let w=N.chain;if(w=="bsc_test")m.value=[{chain:"bsc",factoryAddress:"0x6725F303b657a9451d8BA641348b6761A6CC7a17",isSwapSupported:1,name:"cakev2",routerAddress:"0xd99d1c33f9fc3444f8101754abc46c52416550d1",showName:"PancakeSwapV2",sortId:1,swapUrl:"https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=",swapIcon:"https://www.avestorage.cloud/swap/cakev2.jpeg"}];else try{let l=await O.ave.getChainSwaps(w);if(l.data.status==1){let c=l.data.data;if(c&&c.length>0)for(let d of c){let b="https://www.avestorage.cloud/swap/"+d.name+".jpeg",v={chain:d.chain,factoryAddress:d.factory_address.toLowerCase(),isSwapSupported:d.is_swap_supported,name:d.name,routerAddress:d.router_address.toLowerCase(),showName:d.show_name,sortId:d.sort_id,swapUrl:d.swap_url,swapIcon:b};m.value.push(v)}console.log(m.value)}else _(B("unknowError"))}catch(l){l&&l.message?_(l.message):_(B("unknowError"))}finally{}}function U(w){e.chainSwap=w,$("update:showChainSwap",!1)}return(w,l)=>{const c=S("van-search"),d=S("van-icon"),b=S("van-action-sheet");return k(),I(b,{show:A.showChainSwap,"safe-area-inset-bottom":"",title:w.$t("selectSwap"),onClose:l[1]||(l[1]=v=>$("update:showChainSwap",!1)),onCancel:l[2]||(l[2]=v=>$("update:showChainSwap",!1))},{default:i(()=>[a(c,{modelValue:y.value,"onUpdate:modelValue":l[0]||(l[0]=v=>y.value=v),shape:"round",placeholder:w.$t("search"),clearable:""},null,8,["modelValue","placeholder"]),u("ul",te,[(k(!0),x(E,null,Y(D.value,v=>(k(),x("li",{class:"swap-item",onClick:s=>U(v)},[u("div",le,[a(Z,{class:"token-icon",tokenIcon:v.swapIcon},null,8,["tokenIcon"]),u("div",ne,g(v.showName),1)]),u("div",oe,[t(e).chainSwap&&t(e).chainSwap.factoryAddress==v.factoryAddress?(k(),I(d,{key:0,name:"success",color:"#3F80F7"})):T("",!0)])],8,ae))),256))])]),_:1},8,["show","title"])}}},ue=j(re,[["__scopeId","data-v-16828252"]]);const de={class:"token-list"},ie=["onClick"],ce={class:"left"},pe={class:"token-info"},ve={class:"token-name"},me={class:"token-address"},we={class:"right"},fe={key:0,class:"amount"},ye={class:"price"},ke={class:"icon"},he={__name:"TokenList",props:{showTokenList:Boolean},emits:["update:showTokenList"],setup(A,{emit:$}){const f=A,{t:B}=q(),N=z(),e=M(),y=V(""),m=V([]);X(()=>f.showTokenList,(l,c)=>{l&&m.value.length==0&&U()}),U();const D=C(()=>y.value?y.value.startsWith("0x")?m.value.filter(l=>l.address.toLowerCase()==y.value.toLowerCase()):m.value.filter(l=>l.symbol.toLowerCase().indexOf(y.value.toLowerCase())>-1):m.value);function P(l){e.token=l,$("update:showTokenList",!1)}async function U(){let l=N.chain,c=[];if(l=="bsc_test")c=[{chain:"bsc",demical:18,name:"",symbol:"BNB",tokenAddress:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",currentPriceUsd:289.85489812433093,value:.0319133884,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png"},{chain:"bsc",demical:18,name:"Binance-Peg BSC-USD",symbol:"USDT",tokenAddress:"0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",currentPriceUsd:.9970705187821386,value:0,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0x55d398326f99059ff775485246999027b3197955.png"},{chain:"bsc",demical:18,name:"Wrapped BNB",symbol:"WBNB",tokenAddress:"0xae13d989dac2f0debff460ac112a837c89baa7cd",currentPriceUsd:289.85489812433093,value:0,icon:"https://ave.s3.ap-east-1.amazonaws.com/token_icon/bsc/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"}];else try{let d=await O.ave.getUserToken(l,N.walletAddress);if(console.log(d),d.data.status==1){let v=d.data.data.filter(s=>new RegExp("^0x.*$","gi").test(s.token)&&s.value>0&&s.risk_score<60&&s.risk_level>=0&&s.flag!=="blacklist"&&s.symbol!==""&&s.flag!=="lp").map(s=>({chain:s.chain,demical:s.decimals,name:s.name,symbol:s.symbol,tokenAddress:s.token.toLowerCase(),currentPriceUsd:s.current_price_usd,value:s.value,icon:K(s.chain.toLowerCase(),s.token.toLowerCase())}));c=c.concat(v)}else return;let b=await O.ave.getSwapTokens(l);if(console.log(b),b.data.status==1){let v=b.data.data.filter(s=>new RegExp("^0x.*$","gi").test(s.token)&&c.findIndex(o=>o.tokenAddress==s.token)==-1&&s.risk_score<60&&s.risk_level>=0&&s.flag!=="blacklist"&&s.symbol!==""&&s.flag!=="lp").map(s=>({chain:s.chain,demical:s.decimals,name:s.name,symbol:s.symbol,tokenAddress:s.token.toLowerCase(),currentPriceUsd:s.current_price_usd,value:s.value,icon:K(s.chain.toLowerCase(),s.token.toLowerCase())}));c=c.concat(v)}else return}catch(d){d&&d.message?_(d.message):_(B("unknowError")),c=[]}finally{}m.value=c}function w(){$("update:showTokenList",!1)}return(l,c)=>{const d=S("van-search"),b=S("van-icon"),v=S("van-action-sheet");return k(),I(v,{show:A.showTokenList,"safe-area-inset-bottom":"",title:l.$t("selectCurrency"),onClose:w,onCancel:w},{default:i(()=>[a(d,{modelValue:y.value,"onUpdate:modelValue":c[0]||(c[0]=s=>y.value=s),shape:"round",placeholder:l.$t("searchTokenOrName"),clearable:""},null,8,["modelValue","placeholder"]),u("ul",de,[(k(!0),x(E,null,Y(D.value,s=>(k(),x("li",{class:"token-item",onClick:o=>P(s)},[u("div",ce,[a(Z,{class:"token-icon",tokenIcon:s.icon},null,8,["tokenIcon"]),u("div",pe,[u("div",ve,g(s.symbol),1),u("div",me,g(t(ee)(s.tokenAddress)),1)])]),u("div",we,[s.value>0?(k(),x("div",fe,[u("div",null,g(t(p)(s.value).toString().indexOf(".")==-1?t(p)(s.value):t(p)(s.value).toFixed(6)),1),u("div",ye,"$"+g(t(p)(s.value).multipliedBy(s.currentPriceUsd).toFixed(2)),1)])):T("",!0),u("div",ke,[t(e).token&&t(e).token.tokenAddress==s.tokenAddress?(k(),I(b,{key:0,name:"success",color:"#3F80F7"})):T("",!0)])])],8,ie))),256))])]),_:1},8,["show","title"])}}},_e=j(he,[["__scopeId","data-v-dcd36613"]]);const be={class:"setting"},Fe={style:{color:"#999"}},ge={class:"rate-setting"},Ce={class:"title"},Se={class:"rate-setting"},Le={class:"title"},Te={class:"address-setting"},Ie={class:"title"},$e={class:"btn-control-group"},h=20,Be={__name:"TaxSetting",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(A,{emit:$}){const{t:f}=q(),B=se(),N=z(),e=M(),y=V(!1),m=V(!1),D=C(()=>e.deployerId==1?p(h).minus(e.buyBurnFee).minus(e.buyLPFee).toNumber():e.deployerId==2||e.deployerId==3?p(h).minus(e.buyRewardFee).minus(e.buyLPFee).toNumber():0),P=C(()=>e.deployerId==1?p(h).minus(e.buyFundFee).minus(e.buyBurnFee).toNumber():e.deployerId==2||e.deployerId==3?p(h).minus(e.buyFundFee).minus(e.buyRewardFee).toNumber():0),U=C(()=>{if(e.deployerId==1)return p(h).minus(e.buyFundFee).minus(e.buyLPFee).toNumber()}),w=C(()=>e.deployerId==2||e.deployerId==3?p(h).minus(e.buyFundFee).minus(e.buyLPFee).toNumber():0),l=C(()=>e.deployerId==1?p(h).minus(e.sellBurnFee).minus(e.sellLPFee).toNumber():e.deployerId==2||e.deployerId==3?p(h).minus(e.sellRewardFee).minus(e.sellLPFee).toNumber():0),c=C(()=>e.deployerId==1?p(h).minus(e.sellFundFee).minus(e.sellBurnFee).toNumber():e.deployerId==2||e.deployerId==3?p(h).minus(e.sellFundFee).minus(e.sellRewardFee).toNumber():0),d=C(()=>e.deployerId==1?p(h).minus(e.sellFundFee).minus(e.sellLPFee).toNumber():0),b=C(()=>e.deployerId==2||e.deployerId==3?p(h).minus(e.sellFundFee).minus(e.sellLPFee).toNumber():0);function v(){e.step=2,B.push("/createToken/create/detail")}function s(){const o=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;if(e.deployerId===1||e.deployerId==2||e.deployerId==3){if(!e.token){_(f("pleaseSelectCurrency"));return}if(!e.chainSwap){_(f("pleaseSelectSwap"));return}if(e.deployerId===1){if(p(e.buyFundFee).plus(e.buyBurnFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellBurnFee).plus(e.sellLPFee).lte(0)){_(f("taxMustGt0"));return}}else if(e.deployerId===2){if(p(e.buyFundFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellLPFee).lte(0)){_(f("taxlimit2"));return}}else if(e.deployerId===3){if(!e.rewardToken){_(f("dividendTokenError"));return}if(!o.test(e.rewardToken)){_(f("pleaseEnterTrueAddress"));return}if(p(e.buyFundFee).plus(e.buyLPFee).plus(e.buyRewardFee).plus(e.sellFundFee).plus(e.sellLPFee).plus(e.sellRewardFee).lte(0)){_(f("taxMustGt0"));return}}if((Number(e.buyFundFee)>0||Number(e.sellFundFee)>0)&&!e.fundAddress){_(f("pleaseEnterMarketingAddress"));return}if(e.fundAddress&&!o.test(e.fundAddress)){_(f("pleaseEnterTrueAddress"));return}}e.step=3,B.push("/createToken/create/IssueControl")}return(o,n)=>{const F=S("van-cell"),R=S("van-cell-group"),W=S("van-field"),G=S("van-button");return k(),x(E,null,[u("div",be,[a(R,{inset:""},{default:i(()=>[a(F,{title:o.$t("selectCurrency"),class:"switch-cell",onClick:n[0]||(n[0]=r=>m.value=!0)},H({_:2},[t(e).token?{name:"value",fn:i(()=>[a(J,{logo:t(e).token.icon,value:t(e).token.symbol},null,8,["logo","value"])]),key:"0"}:{name:"value",fn:i(()=>[u("div",null,"---")]),key:"1"}]),1032,["title"])]),_:1}),a(R,{inset:""},{default:i(()=>[a(F,{title:o.$t("selectSwap"),class:"switch-cell",onClick:n[1]||(n[1]=r=>y.value=!0)},H({_:2},[t(e).chainSwap?{name:"value",fn:i(()=>[a(J,{logo:t(e).chainSwap.swapIcon,value:t(e).chainSwap.showName},null,8,["logo","value"])]),key:"0"}:{name:"value",fn:i(()=>[u("div",null,"---")]),key:"1"}]),1032,["title"])]),_:1}),t(e).deployerId===3?(k(),x(E,{key:0},[a(R,{inset:"",class:"rate-cell"},{default:i(()=>[a(W,{modelValue:t(e).rewardToken,"onUpdate:modelValue":n[2]||(n[2]=r=>t(e).rewardToken=r),"label-width":"8em",label:o.$t("rewardToken"),placeholder:o.$t("enterContract"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),a(R,{inset:"",class:"rate-cell"},{default:i(()=>[u("div",Fe,g(o.$t("rewardTokenInfo")),1)]),_:1})],64)):T("",!0),u("div",ge,[u("div",Ce,g(t(f)("buyTax",{max:h})),1),a(F,{class:"rate-cell",title:o.$t("marketingTax")},{extra:i(()=>[a(L,{value:t(e).buyFundFee,"onUpdate:value":n[3]||(n[3]=r=>t(e).buyFundFee=r),"max-value":D.value},null,8,["value","max-value"])]),_:1},8,["title"]),a(F,{class:"rate-cell",title:o.$t("liquidityTax")},{extra:i(()=>[a(L,{value:t(e).buyLPFee,"onUpdate:value":n[4]||(n[4]=r=>t(e).buyLPFee=r),"max-value":P.value},null,8,["value","max-value"])]),_:1},8,["title"]),t(e).deployerId==1?(k(),I(F,{key:0,class:"rate-cell",title:o.$t("burnTax")},{extra:i(()=>[a(L,{value:t(e).buyBurnFee,"onUpdate:value":n[5]||(n[5]=r=>t(e).buyBurnFee=r),"max-value":U.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0),t(e).deployerId==2||t(e).deployerId==3?(k(),I(F,{key:1,class:"rate-cell",title:o.$t("rewardTax")},{extra:i(()=>[a(L,{value:t(e).buyRewardFee,"onUpdate:value":n[6]||(n[6]=r=>t(e).buyRewardFee=r),"max-value":w.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0)]),u("div",Se,[u("div",Le,g(t(f)("sellTax",{max:h})),1),a(F,{class:"rate-cell",title:o.$t("marketingTax")},{extra:i(()=>[a(L,{value:t(e).sellFundFee,"onUpdate:value":n[7]||(n[7]=r=>t(e).sellFundFee=r),"max-value":l.value},null,8,["value","max-value"])]),_:1},8,["title"]),a(F,{class:"rate-cell",title:o.$t("liquidityTax")},{extra:i(()=>[a(L,{value:t(e).sellLPFee,"onUpdate:value":n[8]||(n[8]=r=>t(e).sellLPFee=r),"max-value":c.value},null,8,["value","max-value"])]),_:1},8,["title"]),t(e).deployerId==1?(k(),I(F,{key:0,class:"rate-cell",title:o.$t("burnTax")},{extra:i(()=>[a(L,{value:t(e).sellBurnFee,"onUpdate:value":n[9]||(n[9]=r=>t(e).sellBurnFee=r),"max-value":d.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0),t(e).deployerId==2||t(e).deployerId==3?(k(),I(F,{key:1,class:"rate-cell",title:o.$t("rewardTax")},{extra:i(()=>[a(L,{value:t(e).sellRewardFee,"onUpdate:value":n[10]||(n[10]=r=>t(e).sellRewardFee=r),"max-value":b.value},null,8,["value","max-value"])]),_:1},8,["title"])):T("",!0)]),u("div",Te,[u("div",Ie,g(o.$t("addressSetting")),1),a(R,{inset:"",class:"rate-cell"},{default:i(()=>[a(F,{title:o.$t("ownerAddr"),class:"switch-cell",value:t(ee)(t(N).walletAddress)},null,8,["title","value"])]),_:1}),a(R,{inset:"",class:"rate-cell"},{default:i(()=>[a(W,{modelValue:t(e).fundAddress,"onUpdate:modelValue":n[11]||(n[11]=r=>t(e).fundAddress=r),"label-width":"10em",label:o.$t("marketingAddress"),placeholder:o.$t("enterAddress"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1})]),u("div",$e,[a(G,{type:"primary",plain:"",round:"",block:"",class:"btn-control",onClick:v},{default:i(()=>[Q(g(o.$t("previousStep")),1)]),_:1}),a(G,{type:"primary",round:"",block:"",class:"btn-control",onClick:s},{default:i(()=>[Q(g(o.$t("nextStep")),1)]),_:1})])]),a(_e,{showTokenList:m.value,"onUpdate:showTokenList":n[12]||(n[12]=r=>m.value=r)},null,8,["showTokenList"]),a(ue,{showChainSwap:y.value,"onUpdate:showChainSwap":n[13]||(n[13]=r=>y.value=r)},null,8,["showChainSwap"])],64)}}},Re=j(Be,[["__scopeId","data-v-015b8649"]]);export{Re as default};
