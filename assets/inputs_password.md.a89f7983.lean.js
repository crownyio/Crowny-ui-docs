import{p as a,e as s,o as n,c as t,f as e,F as p,w as o,b as l,a as c,d as u}from"./app.6f46cc12.js";const r={name:"password",props:{register:{type:Boolean,default:!1},strength__meter:{type:Boolean,default:!1},level:{type:Number,default:0}}},i=o();a("data-v-0f4333e4");const k={key:0,class:"crowny__input__wrapper"},d=l("input",{type:"password",class:"crowny__input__text",placeholder:"Secret.."},null,-1),_=l("i",{class:"icon-Show"},null,-1),g=c('',5);s();const h=i(((a,s,o,l,c,u)=>(n(),t(p,null,[o.strength__meter?e("v-if",!0):(n(),t("div",k,[d,_])),o.register||o.strength__meter?(n(),t("div",{key:1,class:["strength__meter",{["strength__"+o.level]:o.level>0}]},[g],2)):e("v-if",!0)],64))));r.render=h,r.__scopeId="data-v-0f4333e4";const v=c('',4),m=c('',7),q=u("  "),f=u("  "),w=c('',5),T=u("  "),y=u("     "),b=u("     "),S=u("     "),x=u("  "),A=c('',4),P=c('',3),C='{"title":"Password field","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default password","slug":"default-password"},{"level":2,"title":"Strength meter","slug":"strength-meter"},{"level":2,"title":"Password + Strength Meter","slug":"password-strength-meter"}],"relativePath":"inputs/password.md","lastUpdated":1624365845758}',I={};const V=Object.assign(I,{expose:[],setup:function(a){return(a,s)=>(n(),t("div",null,[v,l(r),m,l("p",null,[q,l(r,{strength__meter:!0}),f]),w,l("p",null,[T,l(r,{strength__meter:!0,level:1}),y,l(r,{strength__meter:!0,level:2}),b,l(r,{strength__meter:!0,level:3}),S,l(r,{strength__meter:!0,level:4}),x]),A,l(r,{register:!0}),P]))}});export default V;export{C as __pageData};