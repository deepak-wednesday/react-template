(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[305],{83389:(e,t,r)=>{"use strict";var o=r(47286),n=r(2490);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(66289)),i=n(r(83609)),l=n(r(93429)),f=o(r(67294)),u=n(r(125)),p=n(r(94184)),c=n(r(32994));var s=f.forwardRef((function(e,t){var r=e.arrow,o=void 0!==r&&r,n=e.prefixCls,s=void 0===n?"rc-dropdown":n,v=e.transitionName,y=e.animation,d=e.align,b=e.placement,m=void 0===b?"bottomLeft":b,g=e.placements,h=void 0===g?c.default:g,O=e.getPopupContainer,w=e.showAction,x=e.hideAction,C=e.overlayClassName,j=e.overlayStyle,P=e.visible,S=e.trigger,A=void 0===S?["hover"]:S,k=(0,l.default)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),_=f.useState(),M=(0,i.default)(_,2),N=M[0],E=M[1],I="visible"in e?P:N,W=f.useRef(null);f.useImperativeHandle(t,(function(){return W.current}));var R,T,L,V,D,F,H=function(){var t=e.overlay;return"function"===typeof t?t():t},U=function(t){var r=e.onOverlayClick,o=H().props;E(!1),r&&r(t),o.onClick&&o.onClick(t)},X=function(){var e=H(),t={prefixCls:"".concat(s,"-menu"),onClick:U};return"string"===typeof e.type&&delete t.prefixCls,f.createElement(f.Fragment,null,o&&f.createElement("div",{className:"".concat(s,"-arrow")}),f.cloneElement(e,t))},Y=x;return Y||-1===A.indexOf("contextMenu")||(Y=["click"]),f.createElement(u.default,Object.assign({},k,{prefixCls:s,ref:W,popupClassName:(0,p.default)(C,(0,a.default)({},"".concat(s,"-show-arrow"),o)),popupStyle:j,builtinPlacements:h,action:A,showAction:w,hideAction:Y||[],popupPlacement:m,popupAlign:d,popupTransitionName:v,popupAnimation:y,popupVisible:I,stretch:(D=e.minOverlayWidthMatchTrigger,F=e.alignPoint,("minOverlayWidthMatchTrigger"in e?D:!F)?"minWidth":""),popup:"function"===typeof e.overlay?X:X(),onPopupVisibleChange:function(t){var r=e.onVisibleChange;E(t),"function"===typeof r&&r(t)},getPopupContainer:O}),(T=e.children,L=T.props?T.props:{},V=(0,p.default)(L.className,void 0!==(R=e.openClassName)?R:"".concat(s,"-open")),N&&T?f.cloneElement(T,{className:V}):T))}));t.default=s},64911:(e,t,r)=>{"use strict";var o=r(2490);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(83389)).default;t.default=n},32994:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={adjustX:1,adjustY:1},o=[0,0],n={topLeft:{points:["bl","tl"],overflow:r,offset:[0,-4],targetOffset:o},topCenter:{points:["bc","tc"],overflow:r,offset:[0,-4],targetOffset:o},topRight:{points:["br","tr"],overflow:r,offset:[0,-4],targetOffset:o},bottomLeft:{points:["tl","bl"],overflow:r,offset:[0,4],targetOffset:o},bottomCenter:{points:["tc","bc"],overflow:r,offset:[0,4],targetOffset:o},bottomRight:{points:["tr","br"],overflow:r,offset:[0,4],targetOffset:o}};t.default=n},18112:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}},81172:e=>{e.exports=function(e){if(Array.isArray(e))return e}},66289:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},2490:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},47286:(e,t,r)=>{var o=r(66150);function n(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!==typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=a?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}},65204:e=>{e.exports=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return r}}},38191:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},93429:(e,t,r)=>{var o=r(39705);e.exports=function(e,t){if(null==e)return{};var r,n,a=o(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}},39705:e=>{e.exports=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}},83609:(e,t,r)=>{var o=r(81172),n=r(65204),a=r(62246),i=r(38191);e.exports=function(e,t){return o(e)||n(e,t)||a(e,t)||i()}},66150:e=>{function t(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},62246:(e,t,r)=>{var o=r(18112);e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}}}]);