import{B as a,g as v,r as y,o as _,c as h,b as D,a as n,t as r,j as Y,m as w,l as u,J as C,F as g,k as V,A as p,_ as B}from"./index-08da7f30.js";const S={__name:"SelectDate",props:{date:Date,showTools:Boolean,minDate:{type:Date,default:a().add(1,"day").toDate()}},emits:["update:date"],setup(c,{emit:l}){const k=c,m=v(!1),d=v("");function M(e){m.value=!1;let t=a().add(30,"day").format("YYYY-MM-DD"),o=a().add(90,"day").format("YYYY-MM-DD"),i=a().add(1,"year").format("YYYY-MM-DD"),s=a(e).format("YYYY-MM-DD");s==t?d.value="1":s==o?d.value="2":s==i?d.value="1":d.value="",l("update:date",e)}function $(e){switch(e){case"1":l("update:date",a().endOf("day").add(30,"day").toDate());break;case"2":l("update:date",a().endOf("day").add(90,"day").toDate());break;case"3":l("update:date",a().endOf("day").add(1,"year").toDate());break;case"0":l("update:date",a().endOf("day").add(100,"year").toDate());break}}return(e,t)=>{const o=y("van-radio"),i=y("van-radio-group"),s=y("van-calendar");return _(),h(g,null,[D("div",{class:"calendar",onClick:t[0]||(t[0]=f=>m.value=!0)},[D("div",null,[n(V,{class:"icon",name:"calendar"}),D("span",null,r(Y(a)(k.date).format("YYYY-MM-DD")),1)])]),c.showTools?(_(),w(i,{key:0,modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=f=>d.value=f),class:"day",onChange:$},{default:u(()=>[n(o,{name:"1",shape:"square"},{default:u(()=>[p(r(`30${e.$t("day")}`),1)]),_:1}),n(o,{name:"2",shape:"square"},{default:u(()=>[p(r(`90${e.$t("day")}`),1)]),_:1}),n(o,{name:"3",shape:"square"},{default:u(()=>[p(r(`1${e.$t("year")}`),1)]),_:1}),n(o,{name:"0",shape:"square"},{default:u(()=>[p(r(e.$t("permanent")),1)]),_:1})]),_:1},8,["modelValue"])):C("",!0),n(s,{show:m.value,"onUpdate:show":t[2]||(t[2]=f=>m.value=f),onConfirm:M,"default-date":c.date,"min-date":c.minDate,"max-date":Y(a)().add(10,"year").toDate()},null,8,["show","default-date","min-date","max-date"])],64)}}},q=B(S,[["__scopeId","data-v-989dc898"]]);export{q as S};
