(function(){"use strict";var n={3470:function(n,t,e){var r=e(9242),o=e(3396);function u(n,t,e,r,u,i){const a=(0,o.up)("narvar"),c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(c)],64)}function i(n,t){const e=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(e,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Pokemon List")])),_:1}),(0,o.Wm)(e,{to:"/ID"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Pokemon")])),_:1}),(0,o.Wm)(e,{to:"/aboat"},{default:(0,o.w5)((()=>[(0,o.Uk)("Page aboat")])),_:1})])}var a=e(89);const c={},f=(0,a.Z)(c,[["render",i],["__scopeId","data-v-f88362f4"]]);var s=f,l={name:"App",components:{narvar:s}};const d=(0,a.Z)(l,[["render",u]]);var p=d,v=e(2483);const m=[{path:"/",redirect:"ListaPokemon"},{path:"/listas",name:"ListaPokemon",component:()=>e.e(31).then(e.bind(e,7031))},{path:"/about",component:()=>e.e(231).then(e.bind(e,5231))},{path:"/id",component:()=>e.e(597).then(e.bind(e,507)),props:n=>{const t=Number(n.params.id);return isNaN(t)?{id:1}:{id:t}}}],b=(0,v.p7)({history:(0,v.r5)(),routes:m});var h=b;(0,r.ri)(p).use(h).mount("#app")}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return n[r].call(u.exports,u,u.exports,e),u.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,u){if(!r){var i=1/0;for(s=0;s<n.length;s++){r=n[s][0],o=n[s][1],u=n[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(n){return e.O[n](r[c])}))?r.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var f=o();void 0!==f&&(t=f)}}return t}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,o,u]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.f={},e.e=function(n){return Promise.all(Object.keys(e.f).reduce((function(t,r){return e.f[r](n,t),t}),[]))}}(),function(){e.u=function(n){return"js/"+n+"."+{31:"c90efd87",231:"5748049a",597:"292e2b38"}[n]+".js"}}(),function(){e.miniCssF=function(n){}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){var n={},t="app_rutas_vue:";e.l=function(r,o,u,i){if(n[r])n[r].push(o);else{var a,c;if(void 0!==u)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+u){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,e.nc&&a.setAttribute("nonce",e.nc),a.setAttribute("data-webpack",t+u),a.src=r),n[r]=[o];var d=function(t,e){a.onerror=a.onload=null,clearTimeout(p);var o=n[r];if(delete n[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(n){return n(e)})),t)return t(e)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){e.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){e.p="/"}(),function(){var n={143:0};e.f.j=function(t,r){var o=e.o(n,t)?n[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var u=new Promise((function(e,r){o=n[t]=[e,r]}));r.push(o[2]=u);var i=e.p+e.u(t),a=new Error,c=function(r){if(e.o(n,t)&&(o=n[t],0!==o&&(n[t]=void 0),o)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,o[1](a)}};e.l(i,c,"chunk-"+t,t)}},e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,u,i=r[0],a=r[1],c=r[2],f=0;if(i.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(c)var s=c(e)}for(t&&t(r);f<i.length;f++)u=i[f],e.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return e.O(s)},r=self["webpackChunkapp_rutas_vue"]=self["webpackChunkapp_rutas_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[998],(function(){return e(3470)}));r=e.O(r)})();
//# sourceMappingURL=app.7062beac.js.map