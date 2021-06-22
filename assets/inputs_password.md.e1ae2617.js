import{p as a,b as s,o as n,c as t,e,F as p,w as o,d as l,a as c,f as u}from"./app.26186fc7.js";const r={name:"password",props:{register:{type:Boolean,default:!1},strength__meter:{type:Boolean,default:!1},level:{type:Number,default:0}}},i=o();a("data-v-0f4333e4");const k={key:0,class:"crowny__input__wrapper"},d=l("input",{type:"password",class:"crowny__input__text",placeholder:"Secret.."},null,-1),_=l("i",{class:"icon-Show"},null,-1),g=c('<div class="strength__meter__bar" data-v-0f4333e4></div><div class="strength__meter__bar" data-v-0f4333e4></div><div class="strength__meter__bar" data-v-0f4333e4></div><div class="strength__meter__bar" data-v-0f4333e4></div><div class="strength__meter__bar" data-v-0f4333e4></div>',5);s();const h=i(((a,s,o,l,c,u)=>(n(),t(p,null,[o.strength__meter?e("v-if",!0):(n(),t("div",k,[d,_])),o.register||o.strength__meter?(n(),t("div",{key:1,class:["strength__meter",{["strength__"+o.level]:o.level>0}]},[g],2)):e("v-if",!0)],64))));r.render=h,r.__scopeId="data-v-0f4333e4";const v=c('<h1 id="password-field"><a class="header-anchor" href="#password-field" aria-hidden="true">#</a> Password field</h1><h2 id="default-password"><a class="header-anchor" href="#default-password" aria-hidden="true">#</a> Default password</h2><p>The passwordfield is used wherever any password or secret input is needed.</p><h4 id="preview"><a class="header-anchor" href="#preview" aria-hidden="true">#</a> Preview</h4>',4),m=c('   <h4 id="markup"><a class="header-anchor" href="#markup" aria-hidden="true">#</a> Markup</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Secret..<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-Show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="warning custom-block"><p class="custom-block-title">Important</p><p>The <code>crowny__input__wrapper</code> comes default with the Crowny-UI library and is needed for the icon positioning.</p></div><h2 id="strength-meter"><a class="header-anchor" href="#strength-meter" aria-hidden="true">#</a> Strength meter</h2><p>Additionally we provide the strength meter as a seperate option. The strength meter is intended for password registration pages to give users feedback on their password&#39;s strength.</p><h4 id="preview-1"><a class="header-anchor" href="#preview-1" aria-hidden="true">#</a> Preview</h4>',7),q=u("  "),f=u("  "),w=c('<h4 id="markup-1"><a class="header-anchor" href="#markup-1" aria-hidden="true">#</a> Markup</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  \n</code></pre></div><p>Add strength levels by applying the <code>strength__{level}</code> class to the container.</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter strength__{level}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h4 id="strength-levels"><a class="header-anchor" href="#strength-levels" aria-hidden="true">#</a> Strength levels</h4>',5),T=u("  "),y=u("     "),b=u("     "),S=u("     "),x=u("  "),A=c('<table><thead><tr><th style="text-align:left;">Class</th><th style="text-align:left;">Level</th><th style="text-align:left;">Color</th></tr></thead><tbody><tr><td style="text-align:left;">strength__1</td><td style="text-align:left;">1</td><td style="text-align:left;">Red</td></tr><tr><td style="text-align:left;">strength__2</td><td style="text-align:left;">2</td><td style="text-align:left;">Red</td></tr><tr><td style="text-align:left;">strength__3</td><td style="text-align:left;">3</td><td style="text-align:left;">Yellow</td></tr><tr><td style="text-align:left;">strength__4</td><td style="text-align:left;">4</td><td style="text-align:left;">Green</td></tr></tbody></table><h2 id="password-strength-meter"><a class="header-anchor" href="#password-strength-meter" aria-hidden="true">#</a> Password + Strength Meter</h2><p>We can combine the password &amp; strength meter like shown below.</p><h4 id="preview-2"><a class="header-anchor" href="#preview-2" aria-hidden="true">#</a> Preview</h4>',4),P=c('   <h4 id="markup-2"><a class="header-anchor" href="#markup-2" aria-hidden="true">#</a> Markup</h4><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>crowny__input__text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Secret..<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon-Show<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>strength__meter__bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  \n</code></pre></div>',3),C='{"title":"Password field","description":"","frontmatter":{},"headers":[{"level":2,"title":"Default password","slug":"default-password"},{"level":2,"title":"Strength meter","slug":"strength-meter"},{"level":2,"title":"Password + Strength Meter","slug":"password-strength-meter"}],"relativePath":"inputs/password.md","lastUpdated":1624365845758}',I={};const V=Object.assign(I,{expose:[],setup:function(a){return(a,s)=>(n(),t("div",null,[v,l(r),m,l("p",null,[q,l(r,{strength__meter:!0}),f]),w,l("p",null,[T,l(r,{strength__meter:!0,level:1}),y,l(r,{strength__meter:!0,level:2}),b,l(r,{strength__meter:!0,level:3}),S,l(r,{strength__meter:!0,level:4}),x]),A,l(r,{register:!0}),P]))}});export default V;export{C as __pageData};
