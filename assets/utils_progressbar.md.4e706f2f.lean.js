var g=Object.defineProperty,_=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var u=(s,a,n)=>a in s?g(s,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[a]=n,r=(s,a)=>{for(var n in a||(a={}))m.call(a,n)&&u(s,n,a[n]);if(l)for(var n of l(a))y.call(a,n)&&u(s,n,a[n]);return s},i=(s,a)=>_(s,h(a));import{_ as b,r as v,i as f,t as q,o as p,c as e,b as k,F as w,j as x,n as T,d as C,k as P,p as S,e as I,f as V,a as d}from"./app.939c2002.js";const M={name:"Progressbar",setup(){const s=[],a=v({steps:[{label:"Welcome",icon:"Crown"},{label:"Company details",icon:"Company"},{label:"Loyalty program",icon:"Rewards"},{label:"Summary",icon:"TransactionHistory"}],active:2});f(()=>{for(let t=0;t<a.active;t++)setTimeout(()=>{s[t].classList.add("is-complete")},500*t)});const n=t=>{!t||s.push(t)};return i(r({},q(a)),{step:s,setCompleted:n})}},N=s=>(S("data-v-0e4bf384"),s=s(),I(),s),L={class:"wrapper"},$={class:"crowny__progress"},A=N(()=>k("div",{class:"crowny__progress__bar"},null,-1));function D(s,a,n,t,H,F){return p(),e("div",L,[k("ul",$,[(p(!0),e(w,null,x(s.steps,(o,c)=>(p(),e("li",{ref_for:!0,ref:s.active>c?t.setCompleted:"",class:T(["crowny__progress__step",[{"is-active":c===s.active},`icon-${o.icon}`]]),key:o},[A,C(" "+P(o.label),1)],2))),128))])])}var R=b(M,[["render",D],["__scopeId","data-v-0e4bf384"]]);const B=d("",4),j=d("",10),z='{"title":"Progressbar","description":"","frontmatter":{},"headers":[{"level":2,"title":"Multi-step progressbar","slug":"multi-step-progressbar"}],"relativePath":"utils/progressbar.md","lastUpdated":1645542518420}',E={},J=Object.assign(E,{setup(s){return(a,n)=>(p(),e("div",null,[B,V(R),j]))}});export{z as __pageData,J as default};