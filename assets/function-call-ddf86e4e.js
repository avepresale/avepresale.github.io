import{a4 as n,a5 as s,a6 as r,a7 as c,a as u,a8 as i,a9 as f}from"./index-bf7a608a.js";let l;const m={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let p=n({},m);function d(){({instance:l}=r({setup(){const{state:t,toggle:o}=c();return()=>u(f,i(t,{"onUpdate:show":o}),null)}}))}function w(e){return s?new Promise((t,o)=>{l||d(),l.open(n({},p,e,{callback:a=>{(a==="confirm"?t:o)(a)}}))}):Promise.resolve()}const C=e=>w(n({showCancelButton:!0},e));export{C as s};
