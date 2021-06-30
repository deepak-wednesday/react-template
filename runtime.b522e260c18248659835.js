(()=>{"use strict";var e,r,t,a,n,o={},c={};function i(e){var r=c[e];if(void 0!==r)return r.exports;var t=c[e]={id:e,loaded:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.loaded=!0,t.exports}i.m=o,e=[],i.O=(r,t,a,n)=>{if(!t){var o=1/0;for(l=0;l<e.length;l++){for(var[t,a,n]=e[l],c=!0,d=0;d<t.length;d++)(!1&n||o>=n)&&Object.keys(i.O).every((e=>i.O[e](t[d])))?t.splice(d--,1):(c=!1,n<o&&(o=n));c&&(e.splice(l--,1),r=a())}return r}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,a,n]},i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"===typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"===typeof e.then)return e}var n=Object.create(null);i.r(n);var o={};r=r||[null,t({}),t([]),t(t)];for(var c=2&a&&e;"object"==typeof c&&!~r.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((r=>o[r]=()=>e[r]));return o.default=()=>e,i.d(n,o),n},i.d=(e,r)=>{for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,t)=>(i.f[t](e,r),r)),[])),i.u=e=>(({5:"npm.dom-align",29:"npm.resize-observer-polyfill",35:"npm.ramda",153:"npm.rc-menu",278:"npm.axios",280:"npm.shallowequal",285:"npm.apisauce",305:"npm.rc-dropdown",320:"npm.rc-tabs",500:"npm.rc-align",586:"npm.rc-overflow",633:"npm.rc-resize-observer",642:"npm.hoist-non-react-statics",797:"npm.intl",843:"npm.rc-textarea",855:"npm.rc-trigger"}[e]||e)+"."+{5:"07a999c8895d148e796f",29:"b808762f56a41287b1df",35:"7beba359dfc43364d919",153:"7296ae4e6bb78e5ffd55",278:"47ec1803dc684031cab0",280:"5c808e88457837f08e94",285:"0b1ec043e806ca705815",305:"aa4a6b7c94a5a6a4b7c4",320:"8ed8b887df271ec35cda",482:"e4db38cc496e491c69e3",500:"dc240a7448d30e999984",533:"6099f9a7676caa0a2100",586:"c2954e3c9023a7344ae6",587:"dc69c3f6b3d40226363f",633:"06c60c08223c75dcb83e",642:"df7ac295a8f8548d57bc",797:"0e2884ee73465dc92e3f",843:"7e2faf4d3e25f8eadb6f",855:"a5e73128a35719f9afef"}[e]+".chunk.js"),i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),i.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},n="react-template:",i.l=(e,r,t,o)=>{if(a[e])a[e].push(r);else{var c,d;if(void 0!==t)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var p=l[f];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+t){c=p;break}}c||(d=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",n+t),c.src=e),a[e]=[r];var s=(r,t)=>{c.onerror=c.onload=null,clearTimeout(u);var n=a[e];if(delete a[e],c.parentNode&&c.parentNode.removeChild(c),n&&n.forEach((e=>e(t))),r)return r(t)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),d&&document.head.appendChild(c)}},i.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),i.p="/react-template/",(()=>{var e={666:0};i.f.j=(r,t)=>{var a=i.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(666!=r){var n=new Promise(((t,n)=>a=e[r]=[t,n]));t.push(a[2]=n);var o=i.p+i.u(r),c=new Error;i.l(o,(t=>{if(i.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+r+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,a[1](c)}}),"chunk-"+r,r)}else e[r]=0},i.O.j=r=>0===e[r];var r=(r,t)=>{var a,n,[o,c,d]=t,l=0;for(a in c)i.o(c,a)&&(i.m[a]=c[a]);if(d)var f=d(i);for(r&&r(t);l<o.length;l++)n=o[l],i.o(e,n)&&e[n]&&e[n][0](),e[o[l]]=0;return i.O(f)},t=self.webpackChunkreact_template=self.webpackChunkreact_template||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();