import{D as W}from"./Dialog-7ec61a7d.js";import{u as M,f as P,d as $,e as R,g as h,D as H,r as v,o as U,c as D,a as w,l as A,j as K,s as l,n as y,E as O,b as p,t as F,k as V,A as G,G as m,H as j}from"./index-cf9c8d3a.js";import{u as J}from"./create-4f89c3a6.js";import{B as o}from"./bignumber-3e8dfdf6.js";/* empty css                                                       */const X={class:"create"},q=p("div",{class:"van-dialog__header"},null,-1),z={class:"van-dialog__content"},Q={class:"van-dialog__message van-dialog__message--has-title"},Y=p("div",{style:{paddingTop:"20px"}},null,-1),Z={class:"create-success-title"},ee={class:"create-success-text"},ae={class:"create-success-text"},ie={__name:"Index",setup(te){const{t:s}=M(),L=P(),d=$(),g=R(),e=J(),k=h(!1),C=h(!1),S=h(!1),x=h(!1),_=h("");async function B(){console.log("createTokenClick");const t=/^0x[0-9a-fA-F]{40}(,\d*\.?\d+)?$/;if(d.chainId==-1){d.netErrorDialogShow=!0;return}if(e.deployerId===0||e.deployerId===1||e.deployerId===2){if(!e.name){l(s("pleaseEnterName"));return}if(!e.symbol){l(s("pleaseEnterSymbol"));return}if(!e.totalSupply){l(s("pleaseEnterTotal"));return}}if(e.deployerId===1||e.deployerId==2){if(!e.token){l(s("pleaseSelectCurrency"));return}if(!e.chainSwap){l(s("pleaseSelectSwap"));return}if(e.deployerId===1){if(o(e.buyFundFee).plus(e.buyBurnFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellBurnFee).plus(e.sellLPFee).lte(0)){l(s("taxMustGt0"));return}}else if(e.deployerId===2){if(o(e.buyFundFee).plus(e.buyLPFee).plus(e.sellFundFee).plus(e.sellLPFee).lte(0)){l(s("taxlimit2"));return}}else if(e.deployerId===3){if(!e.rewardToken){l(s("dividendTokenError"));return}if(!t.test(e.rewardToken)){l(s("pleaseEnterTrueAddress"));return}if(o(e.buyFundFee).plus(e.buyLPFee).plus(e.buyRewardFee).plus(e.sellFundFee).plus(e.sellLPFee).plus(e.sellRewardFee).lte(0)){l(s("taxMustGt0"));return}}if((Number(e.buyFundFee)>0||Number(e.sellFundFee)>0)&&!e.fundAddress){l(s("pleaseEnterMarketingAddress"));return}if(e.fundAddress&&!t.test(e.fundAddress)){l(s("pleaseEnterTrueAddress"));return}if(e.enableKillBlock&&(!e.killBlock||Number(e.killBlock)<=0)){l(s("pleaseEnterKillBlockNumber"));return}if(e.enableWalletLimit&&(!e.maxWalletAmount||Number(e.maxWalletAmount)<=0)){l(s("pleaseEnterMaxWalletLimit"));return}if(e.enableSwapLimit&&(!e.maxSwapAmount||Number(e.maxSwapAmount)<=0)){l(s("pleaseEnterMaxSwapLimit"));return}}S.value=!0;let i=await(await y.wallet.contractTokenFactory(g.tokenFactoryAddress)).baseFee();console.log("baseFee",i),_.value=O(i);const r=await y.wallet.getBalance(d.walletAddress);if(console.log("balance",r),r<i){l(s("balanceSlow2",{chainMianCoin:d.chainCoinSymbol,amount:_.value})),S.value=!1;return}k.value=!0,S.value=!1}async function I(){x.value=!0;try{const t=await y.wallet.contractTokenFactory(g.tokenFactoryAddress);let c=await t.baseFee();const i=[],r=[],a=[],n=[];if(e.deployerId==0)i[0]=e.name,i[1]=e.symbol,a[0]=e.decimals,a[1]=m(e.totalSupply,e.decimals),n[0]=e.canMint;else if(e.deployerId==1){i[0]=e.name,i[1]=e.symbol;let u=e.token.tokenAddress,f=!1;u==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(u=(await(await y.wallet.contractSwap(e.chainSwap.routerAddress)).WETH()).toLowerCase(),f=!0),r[0]=u,r[1]=e.chainSwap.routerAddress,r[2]=d.walletAddress,r[3]=e.fundAddress?e.fundAddress:"0x0000000000000000000000000000000000000000",a[0]=e.decimals,a[1]=m(e.totalSupply,e.decimals),a[2]=o(e.buyFundFee).times(100).toNumber(),a[3]=o(e.buyBurnFee).times(100).toNumber(),a[4]=o(e.buyLPFee).times(100).toNumber(),a[5]=o(e.sellFundFee).times(100).toNumber(),a[6]=o(e.sellBurnFee).times(100).toNumber(),a[7]=o(e.sellLPFee).times(100).toNumber(),a[8]=e.killBlock?o(e.killBlock).toNumber():0,a[9]=e.maxSwapAmount?m(e.maxSwapAmount,e.decimals):0n,a[10]=e.maxWalletAmount?m(e.maxWalletAmount,e.decimals):0n,n[0]=e.canMint,n[1]=f,n[2]=e.enableManualStartTrade,n[3]=e.enableKillBlock,n[4]=e.enableSwapLimit,n[5]=e.enableWalletLimit,n[6]=e.enableChangeTax,n[7]=e.enableWhiteList}else if(e.deployerId==2){i[0]=e.name,i[1]=e.symbol;let u=e.token.tokenAddress,f=!1;u==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(u=(await(await y.wallet.contractSwap(e.chainSwap.routerAddress)).WETH()).toLowerCase(),f=!0),r[0]=u,r[1]=e.chainSwap.routerAddress,r[2]=d.walletAddress,r[3]=e.fundAddress?e.fundAddress:"0x0000000000000000000000000000000000000000",a[0]=e.decimals,a[1]=m(e.totalSupply,e.decimals),a[2]=o(e.buyFundFee).times(100).toNumber(),a[3]=o(e.buyRewardFee).times(100).toNumber(),a[4]=o(e.buyLPFee).times(100).toNumber(),a[5]=o(e.sellFundFee).times(100).toNumber(),a[6]=o(e.sellRewardFee).times(100).toNumber(),a[7]=o(e.sellLPFee).times(100).toNumber(),a[8]=e.killBlock?o(e.killBlock).toNumber():0,a[9]=e.maxSwapAmount?m(e.maxSwapAmount,e.decimals):0n,a[10]=e.maxWalletAmount?m(e.maxWalletAmount,e.decimals):0n,n[0]=f,n[1]=e.enableManualStartTrade,n[2]=e.enableKillBlock,n[3]=e.enableSwapLimit,n[4]=e.enableWalletLimit,n[5]=e.enableChangeTax,n[6]=e.enableWhiteList}else if(e.deployerId==3){i[0]=e.name,i[1]=e.symbol;let u=e.token.tokenAddress,f=!1;u==="0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"&&(u=(await(await y.wallet.contractSwap(e.chainSwap.routerAddress)).WETH()).toLowerCase(),f=!0),r[0]=u,r[1]=e.chainSwap.routerAddress,r[2]=d.walletAddress,r[3]=e.fundAddress?e.fundAddress:"0x0000000000000000000000000000000000000000",r[4]=e.rewardToken,a[0]=e.decimals,a[1]=m(e.totalSupply,e.decimals),a[2]=o(e.buyFundFee).times(100).toNumber(),a[3]=o(e.buyRewardFee).times(100).toNumber(),a[4]=o(e.buyLPFee).times(100).toNumber(),a[5]=o(e.sellFundFee).times(100).toNumber(),a[6]=o(e.sellRewardFee).times(100).toNumber(),a[7]=o(e.sellLPFee).times(100).toNumber(),a[8]=e.killBlock?o(e.killBlock).toNumber():0,a[9]=e.maxSwapAmount?m(e.maxSwapAmount,e.decimals):0n,a[10]=e.maxWalletAmount?m(e.maxWalletAmount,e.decimals):0n,n[0]=f,n[1]=e.enableManualStartTrade,n[2]=e.enableKillBlock,n[3]=e.enableSwapLimit,n[4]=e.enableWalletLimit,n[5]=e.enableChangeTax,n[6]=e.enableWhiteList,n[7]=e.canMint}console.log(e.deployerId,i,r,a,n);const b=await t.tokenCreate(e.deployerId,i,r,a,n,{value:c});console.dir(b),e.txHash=b.hash,b.wait().then(async u=>{u.status===1&&l({type:"success",message:s("upChainSuccessfully")})}),C.value=!0}catch(t){if(console.log(JSON.stringify(t)),t.info&&t.info.error&&t.info.error.code===4001)l(s("userCancelOperate"));else if(t.error&&t.error.message&&t.error.message=="Canceled")l(s("userCancelOperate"));else if(t.data&&t.data.code==-32e3){const c=t.data.message.match(/(\d+) want (\d+)/)[2];l(s("balanceSlow2",{chainMianCoin:lmStore.token.chainCoinSymbol,amount:j(c)}))}else t.code==="INSUFFICIENT_FUNDS"?l(s("balanceSlow")):t.info&&t.info.error&&t.info.error.code==-32603&&t.info.error.data.message.endsWith("transfer amount exceeds balance")?l(s("balanceSlow2",{chainMianCoin:d.chainCoinSymbol,amount:_.value})):t.code=="CALL_EXCEPTION"&&t.info.error.message.endsWith("transfer amount exceeds balance")?l(s("balanceSlow2",{chainMianCoin:d.chainCoinSymbol,amount:_.value})):l(s("unkonwError"))}finally{k.value=!1,x.value=!1}}function E(){window.open(d.txBlockExplorerUrl+e.txHash,"_blank")}return H(()=>{console.log("create before mounted")}),(t,c)=>{const i=v("router-view"),r=v("van-action-bar-button"),a=v("van-action-bar"),n=v("van-popup");return U(),D("div",X,[w(i,{onCreateTokenClick:B,createTokenLoading:S.value},null,8,["createTokenLoading"]),w(n,{show:k.value,"onUpdate:show":c[0]||(c[0]=b=>k.value=b),round:"",closeable:"",class:"van-dialog van-dialog--round-button","close-on-click-overlay":!1},{default:A(()=>[q,p("div",z,[p("div",Q,[p("div",null,F(t.$t("createConfirmInfo")),1),Y])]),w(a,{class:"van-dialog__footer"},{default:A(()=>[w(r,{type:"danger",loading:x.value,color:"#3F80F7",text:t.$t("confirmAndCreate"),class:"van-dialog__confirm",onClick:I},null,8,["loading","text"])]),_:1})]),_:1},8,["show"]),w(W,{show:C.value,"onUpdate:show":c[1]||(c[1]=b=>C.value=b),theme:"round-button",showCancelButton:!1,confirmButtonText:t.$t("enterTokenManagement"),onOnConfirm:c[2]||(c[2]=b=>K(L).push("/createToken"))},{default:A(()=>[p("div",null,[w(V,{name:"createSuccess",style:{width:"48px",height:"48px"}})]),p("div",Z,F(t.$t("createdSubmitted")),1),p("div",ee,[G(F(t.$t("inBrowser")),1),p("span",{class:"show",onClick:E},F(t.$t("view")),1)]),p("div",ae,F(t.$t("waitToView")),1)]),_:1},8,["show","confirmButtonText"])])}}};export{ie as default};
