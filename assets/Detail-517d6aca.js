import{D as k}from"./DropDown-79105417.js";/* empty css                                                       */import{_ as T,u as D,d as N,f as E,i as U,r as d,o as p,c as A,a as l,l as a,j as t,m,H as g,s as y,q as B,A as b,t as h}from"./index-1733633f.js";import{u as L}from"./create-2a77ee86.js";const M={class:"zero"},x={__name:"Detail",props:{createTokenLoading:Boolean},emits:["createTokenClick","nextStepClick"],setup(C,{emit:V}){const $=C,{t:c}=D(),i=N(),e=L(),S=E();function f(o){return o.replace(/[^\x00-\x7F]+/g,"")}function w(){if(e.deployerId===1||e.deployerId===2||e.deployerId===3){if(!e.name){y(c("pleaseEnterName"));return}if(!e.symbol){y(c("pleaseEnterSymbol"));return}if(!e.totalSupply){y(c("pleaseEnterTotal"));return}}e.step=2,S.push("/createToken/create/taxSetting")}return U(()=>{}),(o,n)=>{const u=d("van-cell"),s=d("van-cell-group"),_=d("van-field"),I=d("van-switch"),v=d("van-button");return p(),A("div",M,[l(s,{inset:""},{default:a(()=>[l(u,{title:o.$t("selectChain"),class:"switch-cell"},{value:a(()=>[l(k,{onClick:n[0]||(n[0]=r=>t(i).showSelectChainPopup=!0),error:t(i).chainId==-1,logo:t(i).chainIcon,value:t(i).chain.toUpperCase()},null,8,["error","logo","value"])]),_:1},8,["title"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(u,{title:o.$t("selectTemplate"),class:"switch-cell"},{value:a(()=>[l(k,{disable:"",value:o.$t(t(e).deployerName)},null,8,["value"])]),_:1},8,["title"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(_,{modelValue:t(e).name,"onUpdate:modelValue":n[1]||(n[1]=r=>t(e).name=r),label:o.$t("tokenName"),placeholder:o.$t("lettersLimit"),formatter:f,maxlength:"20","input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(_,{modelValue:t(e).symbol,"onUpdate:modelValue":n[2]||(n[2]=r=>t(e).symbol=r),"label-width":"6.8em",label:o.$t("tokenSymbol"),placeholder:o.$t("lettersLimit"),formatter:f,maxlength:"20","input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(u,{title:o.$t("tokenPrecision"),value:t(e).decimals},null,8,["title","value"])]),_:1}),l(s,{inset:""},{default:a(()=>[l(_,{modelValue:t(e).totalSupply,"onUpdate:modelValue":n[3]||(n[3]=r=>t(e).totalSupply=r),label:o.$t("tokenAmount"),placeholder:o.$t("pleaseEnter"),type:"digit",maxlength:"16","input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1}),t(e).deployerId===0||t(e).deployerId===1||t(e).deployerId===3?(p(),m(s,{key:0,inset:""},{default:a(()=>[l(u,{class:"switch-cell",title:o.$t("isMintToken")},{value:a(()=>[l(I,{modelValue:t(e).canMint,"onUpdate:modelValue":n[4]||(n[4]=r=>t(e).canMint=r)},null,8,["modelValue"])]),_:1},8,["title"])]),_:1})):g("",!0),t(e).deployerId===0?(p(),m(s,{key:1,inset:""},{default:a(()=>[l(u,{title:o.$t("holder"),class:"switch-cell",value:t(B)(t(i).walletAddress)},null,8,["title","value"])]),_:1})):g("",!0),t(e).deployerId===0?(p(),m(v,{key:2,type:"primary",round:"",block:"",class:"btn-control",onClick:n[5]||(n[5]=r=>V("createTokenClick")),loading:$.createTokenLoading},{default:a(()=>[b(h(o.$t("create")),1)]),_:1},8,["loading"])):(p(),m(v,{key:3,type:"primary",round:"",block:"",class:"btn-control",onClick:w},{default:a(()=>[b(h(t(c)("nextStep")),1)]),_:1}))])}}},F=T(x,[["__scopeId","data-v-313de3a5"]]);export{F as default};
