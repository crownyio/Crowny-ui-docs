import{o as e,c as o,a as c}from"./app.26186fc7.js";const a='{"title":"Publish to NPM","description":"","frontmatter":{"title":"Publish to NPM"},"headers":[{"level":2,"title":"1. Crowny-ui style library","slug":"_1-crowny-ui-style-library"},{"level":2,"title":"2. Crowny icon pack","slug":"_2-crowny-icon-pack"}],"relativePath":"npm.md","lastUpdated":1624359193290}',n={},r=c('<h1 id="npm-publisher"><a class="header-anchor" href="#npm-publisher" aria-hidden="true">#</a> NPM Publisher</h1><h2 id="_1-crowny-ui-style-library"><a class="header-anchor" href="#_1-crowny-ui-style-library" aria-hidden="true">#</a> 1. Crowny-ui style library</h2><p>This package will publish all of the Crowny-ui&#39;s styling that we can re-use in any web-related project.</p><p>Open up the <code>package.json</code> located in <code>/npmPublisher/</code> and edit it&#39;s <code>&quot;version:&quot; x.x.x</code> by adding <code>+1</code>. e.g: <code>0.0.5</code> should change to <code>0.0.6</code> etc.</p><p>After editing the <code>package.json</code> the NPM Publisher should be ready. Run the following command to publish the <a href="https://www.npmjs.com/package/@crowny/crowny-ui" target="_blank" rel="noopener noreferrer">Crowny-ui style library</a>.</p><div class="language-bash"><pre><code>    node publishLibraryToNpm.js\n</code></pre></div><p>The publishing script will copy all the necessary <code>/src/assets</code> and <code>/src/scss</code> and places them into <code>/npmPublisher/npm-package</code>.</p><h2 id="_2-crowny-icon-pack"><a class="header-anchor" href="#_2-crowny-icon-pack" aria-hidden="true">#</a> 2. Crowny icon pack</h2><p>This package will publish all of the Crowny icon fonts that we can re-use in any web-related project.</p><p>Open up the <code>package.json</code> located in <code>/npmPublisher-icons/</code> and edit it&#39;s <code>&quot;version:&quot; x.x.x</code> by adding <code>+1</code>. e.g: <code>0.0.5</code> should change to <code>0.0.6</code> etc.</p><p>After editing the <code>package.json</code> the NPM Publisher should be ready. Run the following command to publish the <a href="https://www.npmjs.com/package/@crowny/crowny-icons" target="_blank" rel="noopener noreferrer">Crowny icon fonts</a>.</p><div class="language-bash"><pre><code>    node publishIconPack.js\n</code></pre></div><p>The publishing script will copy the necessary <code>/src/assets/iconPack</code> and places them into <code>/npmPublisher-icons/npm-package</code>.</p>',13);n.render=function(c,a,n,i,s,t){return e(),o("div",null,[r])};export default n;export{a as __pageData};
