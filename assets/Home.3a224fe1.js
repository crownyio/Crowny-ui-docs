import{_ as m,l as h,u as y,m as i,q as e,o,c as a,e as c,s as F,d as n,k as l,x,N as g,F as I,j as L,y as A,b as d,z as k}from"./app.c5367d48.js";const B={key:0,class:"home-hero"},C={key:0,class:"figure"},N=["src","alt"],b={key:1,id:"main-title",class:"title"},w={key:2,class:"tagline"},V=h({setup(v){const{site:s,frontmatter:t}=y(),_=i(()=>{const{heroImage:r,heroText:u,tagline:$,actionLink:H,actionText:T}=t.value;return r||u||$||H&&T}),p=i(()=>t.value.heroText||s.value.title),f=i(()=>t.value.tagline||s.value.description);return(r,u)=>e(_)?(o(),a("header",B,[e(t).heroImage?(o(),a("figure",C,[c("img",{class:"image",src:e(F)(e(t).heroImage),alt:e(t).heroAlt},null,8,N)])):n("",!0),e(p)?(o(),a("h1",b,l(e(p)),1)):n("",!0),e(f)?(o(),a("p",w,l(e(f)),1)):n("",!0),e(t).actionLink&&e(t).actionText?(o(),x(g,{key:3,item:{link:e(t).actionLink,text:e(t).actionText},class:"action"},null,8,["item"])):n("",!0),e(t).altActionLink&&e(t).altActionText?(o(),x(g,{key:4,item:{link:e(t).altActionLink,text:e(t).altActionText},class:"action alt"},null,8,["item"])):n("",!0)])):n("",!0)}});var D=m(V,[["__scopeId","data-v-370f18c0"]]);const S={key:0,class:"home-features"},j={class:"wrapper"},q={class:"container"},z={class:"features"},E={key:0,class:"title"},G={key:1,class:"details"},J=h({setup(v){const{frontmatter:s}=y(),t=i(()=>s.value.features&&s.value.features.length>0),_=i(()=>s.value.features?s.value.features:[]);return(p,f)=>e(t)?(o(),a("div",S,[c("div",j,[c("div",q,[c("div",z,[(o(!0),a(I,null,L(e(_),(r,u)=>(o(),a("section",{key:u,class:"feature"},[r.title?(o(),a("h2",E,l(r.title),1)):n("",!0),r.details?(o(),a("p",G,l(r.details),1)):n("",!0)]))),128))])])])])):n("",!0)}});var K=m(J,[["__scopeId","data-v-e39c13e0"]]);const M={key:0,class:"footer"},O={class:"container"},P={class:"text"},Q=h({setup(v){const{frontmatter:s}=y();return(t,_)=>e(s).footer?(o(),a("footer",M,[c("div",O,[c("p",P,l(e(s).footer),1)])])):n("",!0)}});var R=m(Q,[["__scopeId","data-v-30918238"]]);const U={class:"home","aria-labelledby":"main-title"},W={class:"home-content"},X=h({setup(v){return(s,t)=>{const _=A("Content");return o(),a("main",U,[d(D),k(s.$slots,"hero",{},void 0,!0),d(K),c("div",W,[d(_)]),k(s.$slots,"features",{},void 0,!0),d(R),k(s.$slots,"footer",{},void 0,!0)])}}});var Z=m(X,[["__scopeId","data-v-10122c92"]]);export{Z as default};
