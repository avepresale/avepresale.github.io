import{h as v,z as x,n as f,r as k,o as d,q as i,F as p,v as B,c as s,w as n,f as u,D as _,B as o,t as b,l as h}from"./index-50c344a8.js";import{d as F}from"./dayjs.min-28e1ab39.js";import{u as V}from"./presale-04965cc7.js";const y=u("div",null,"页面跳转",-1),S=u("div",null,"测试工具",-1),L={__name:"Test",setup(D){const r=v(),l=V(),m=x(),w=f([{name:"创建预售",url:"/Create"},{name:"设置",url:"/Setting"},{name:"详情",url:"/Detail/core/0xcaea6d44f20315630e5ce305a4a862354152aa4b"}]);f("123456");async function g(){const c=await _.wallet.contractUniswapV2Factory("0xa4500e495E853AF8485607d9E6522fB474139A48");console.log(c);let a=await c.getPair("0x8cB75087419d99C83Ac18d055AA258F2088a8Bab","0x3b6118ddd349328c7e0c040832093b3dcc5579ed");if(console.log(a),a!="0x0000000000000000000000000000000000000000"){let t=await(await _.wallet.contractUniswapV2Pair(a)).getReserves();t[0]!=0n||t[1]!=0n}}function A(){l.setJoinedContractAddresses(r.walletAddress,F().unix())}function C(){l.getJoinedContractAddresses(r.walletAddress),console.log(l.getJoinedContractAddresses(r.walletAddress))}return(c,a)=>{const e=k("van-button");return d(),i(p,null,[y,(d(!0),i(p,null,B(w.value,t=>(d(),i("ul",null,[u("li",null,[s(e,{onClick:E=>h(m).push(t.url)},{default:n(()=>[o(b(t.name),1)]),_:2},1032,["onClick"])])]))),256)),S,s(e,{onClick:g},{default:n(()=>[o("测测")]),_:1}),s(e,{onClick:A},{default:n(()=>[o("add")]),_:1}),s(e,{onClick:C},{default:n(()=>[o("get")]),_:1})],64)}}};export{L as default};
