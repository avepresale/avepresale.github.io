import{B as l}from"./bignumber-3e8dfdf6.js";import{_ as m,r as c,o as f,c as b,a as u,b as r,N as y,O as g}from"./index-a6f40eeb.js";const x=o=>(y("data-v-b7aca168"),o=o(),g(),o),V={class:"rate"},h={class:"value-show"},S=x(()=>r("div",null,"%",-1)),N={__name:"Rate",props:{value:{type:String,default:"0"},maxValue:{type:Number,default:100},step:{type:Number,default:1}},emits:["update:value"],setup(o,{emit:n}){const e=o;function p(){let t=l(e.value).plus(e.step);t.gt(e.maxValue)&&(t=l(e.maxValue)),n("update:value",t.toString())}function i(){let t=l(e.value).minus(e.step);t.lt(0)&&(t=l(0)),n("update:value",t.toString())}function d(t){n("update:value",t)}function _(t){let a=t.replace("-","");return a&&(a=a.replace(/^(.*\..{2}).*$/,"$1").replace(/^0+(.*$)/,"$1"),(!a||a.startsWith("."))&&(a="0"+a),l(a).gt(e.maxValue)?e.maxValue.toString():a)}return(t,a)=>{const s=c("van-button"),v=c("van-field");return f(),b("div",V,[u(s,{icon:"minus",type:"primary",round:"",class:"round-icon-btn",color:"#fff",onClick:i,disabled:e.value===""||e.value==="0"},null,8,["disabled"]),r("div",h,[u(v,{"model-value":e.value,"onUpdate:modelValue":d,type:"number","input-align":"center",class:"rate-ipt",formatter:_},null,8,["model-value"]),S]),u(s,{icon:"plus",type:"primary",round:"",class:"round-icon-btn",color:"#fff",onClick:p,disabled:e.value===""||e.value===e.maxValue.toString()},null,8,["disabled"])])}}},R=m(N,[["__scopeId","data-v-b7aca168"]]);export{R};
