import{P as o,d as a,f as i,D as r}from"./index-119ecb2f.js";const n=o("ctCreate",{state:()=>({baseFee:0,step:0,deployerList:[],deployerId:-1,deployerName:"",owner:"",name:"",symbol:"",decimals:"18",totalSupply:"",txHash:"",canMint:!1,token:null,chainSwap:null,mustHoldNum:"",buyFundFee:"0",buyBurnFee:"0",buyLPFee:"0",buyRewardFee:"0",sellFundFee:"0",sellBurnFee:"0",sellLPFee:"0",sellRewardFee:"0",fundAddress:"",rewardToken:"",killBlock:"",maxSwapAmount:"",maxWalletAmount:"",currencyIsEth:!1,enableManualStartTrade:!1,enableKillBlock:!1,enableSwapLimit:!1,enableWalletLimit:!1,enableChangeTax:!1,enableWhiteList:!1}),actions:{changeDeployer(l){const t=this.deployerList.find(s=>s.deployerId==l);t?(this.deployerId=t.deployerId,this.deployerName=t.deployerName):(this.deployerId=this.deployerList[0].deployerId,this.deployerName=this.deployerList[0].deployerName)},init(){const l=a(),t=i(),s=r.createToken.chainList.find(e=>e.chain===l.chain);if(!s||s.deployerList.length===0){l.netErrorDialogShow=!0,t.push("/");return}else this.deployerList=r.createToken.deployerList.filter(e=>s.deployerList.some(d=>d.deployerId==e.deployerId)),this.deployerId===-1?(this.changeDeployer(this.deployerList[0].deployerId),this.baseFee=s.deployerList.find(e=>e.deployerId==this.deployerId).baseFee):this.deployerId===4&&(l.chain!="bsc"||l.chain!="core")?(this.changeDeployer(this.deployerList[0].deployerId),this.baseFee=s.deployerList.find(e=>e.deployerId==this.deployerId).baseFee,t.push("/createToken/create/detail")):s.deployerList.some(e=>e.deployerId==this.deployerId)?this.baseFee=s.deployerList.find(e=>e.deployerId==this.deployerId).baseFee:(this.changeDeployer(createStore.deployerList[0].deployerId),this.baseFee=s.deployerList.find(e=>e.deployerId==this.deployerId).baseFee,t.push("/createToken/create/detail"))}},persist:{enabled:!0,strategies:[{key:"createInfo",storage:sessionStorage}]}});export{n as u};
