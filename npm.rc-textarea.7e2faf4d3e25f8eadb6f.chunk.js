(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[843],{71874:(e,t,r)=>{"use strict";var n=r(44063),o=r(59585);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i=o(r(14846)),u=o(r(93345)),l=o(r(52363)),s=o(r(3939)),c=o(r(91301)),f=o(r(27569)),p=o(r(31675)),d=n(r(67294)),b=o(r(49870)),v=o(r(18475)),y=o(r(94184)),h=o(r(64100));!function(e){e[e.NONE=0]="NONE",e[e.RESIZING=1]="RESIZING",e[e.RESIZED=2]="RESIZED"}(a||(a={}));var m=function(e){(0,f.default)(r,e);var t=(0,p.default)(r);function r(e){var n;return(0,s.default)(this,r),(n=t.call(this,e)).saveTextArea=function(e){n.textArea=e},n.handleResize=function(e){var t=n.state.resizeStatus,r=n.props,o=r.autoSize,i=r.onResize;t===a.NONE&&("function"===typeof i&&i(e),o&&n.resizeOnNextFrame())},n.resizeOnNextFrame=function(){cancelAnimationFrame(n.nextFrameActionId),n.nextFrameActionId=requestAnimationFrame(n.resizeTextarea)},n.resizeTextarea=function(){var e=n.props.autoSize;if(e&&n.textArea){var t=e.minRows,r=e.maxRows,o=(0,h.default)(n.textArea,!1,t,r);n.setState({textareaStyles:o,resizeStatus:a.RESIZING},(function(){cancelAnimationFrame(n.resizeFrameId),n.resizeFrameId=requestAnimationFrame((function(){n.setState({resizeStatus:a.RESIZED},(function(){n.resizeFrameId=requestAnimationFrame((function(){n.setState({resizeStatus:a.NONE}),n.fixFirefoxAutoScroll()}))}))}))}))}},n.renderTextArea=function(){var e=n.props,t=e.prefixCls,r=void 0===t?"rc-textarea":t,o=e.autoSize,s=e.onResize,c=e.className,f=e.disabled,p=n.state,h=p.textareaStyles,m=p.resizeStatus,x=(0,v.default)(n.props,["prefixCls","onPressEnter","autoSize","defaultValue","onResize"]),g=(0,y.default)(r,c,(0,l.default)({},"".concat(r,"-disabled"),f));"value"in x&&(x.value=x.value||"");var O=(0,u.default)((0,u.default)((0,u.default)({},n.props.style),h),m===a.RESIZING?{overflowX:"hidden",overflowY:"hidden"}:null);return d.createElement(b.default,{onResize:n.handleResize,disabled:!(o||s)},d.createElement("textarea",(0,i.default)({},x,{className:g,style:O,ref:n.saveTextArea})))},n.state={textareaStyles:{},resizeStatus:a.NONE},n}return(0,c.default)(r,[{key:"componentDidMount",value:function(){this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){e.value!==this.props.value&&this.resizeTextarea()}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.nextFrameActionId),cancelAnimationFrame(this.resizeFrameId)}},{key:"fixFirefoxAutoScroll",value:function(){try{if(document.activeElement===this.textArea){var e=this.textArea.selectionStart,t=this.textArea.selectionEnd;this.textArea.setSelectionRange(e,t)}}catch(e){}}},{key:"render",value:function(){return this.renderTextArea()}}]),r}(d.Component);t.default=m},64100:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.calculateNodeStyling=i,t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;r||((r=document.createElement("textarea")).setAttribute("tab-index","-1"),r.setAttribute("aria-hidden","true"),document.body.appendChild(r));e.getAttribute("wrap")?r.setAttribute("wrap",e.getAttribute("wrap")):r.removeAttribute("wrap");var u=i(e,t),l=u.paddingSize,s=u.borderSize,c=u.boxSizing,f=u.sizingStyle;r.setAttribute("style","".concat(f,";").concat(n)),r.value=e.value||e.placeholder||"";var p,d=Number.MIN_SAFE_INTEGER,b=Number.MAX_SAFE_INTEGER,v=r.scrollHeight;"border-box"===c?v+=s:"content-box"===c&&(v-=l);if(null!==o||null!==a){r.value=" ";var y=r.scrollHeight-l;null!==o&&(d=y*o,"border-box"===c&&(d=d+l+s),v=Math.max(d,v)),null!==a&&(b=y*a,"border-box"===c&&(b=b+l+s),p=v>b?"":"hidden",v=Math.min(b,v))}return{height:v,minHeight:d,maxHeight:b,overflowY:p,resize:"none"}};var r,n="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",o=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],a={};function i(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&a[r])return a[r];var n=window.getComputedStyle(e),i=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),u=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),l=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=o.map((function(e){return"".concat(e,":").concat(n.getPropertyValue(e))})).join(";"),c={sizingStyle:s,paddingSize:u,borderSize:l,boxSizing:i};return t&&r&&(a[r]=c),c}},14818:(e,t,r)=>{"use strict";var n=r(44063),o=r(59585);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ResizableTextArea",{enumerable:!0,get:function(){return f.default}}),t.default=void 0;var a=o(r(14846)),i=o(r(3939)),u=o(r(91301)),l=o(r(27569)),s=o(r(31675)),c=n(r(67294)),f=o(r(71874)),p=function(e){(0,l.default)(r,e);var t=(0,s.default)(r);function r(e){var n;(0,i.default)(this,r),(n=t.call(this,e)).focus=function(){n.resizableTextArea.textArea.focus()},n.saveTextArea=function(e){n.resizableTextArea=e},n.handleChange=function(e){var t=n.props.onChange;n.setValue(e.target.value,(function(){n.resizableTextArea.resizeTextarea()})),t&&t(e)},n.handleKeyDown=function(e){var t=n.props,r=t.onPressEnter,o=t.onKeyDown;13===e.keyCode&&r&&r(e),o&&o(e)};var o="undefined"===typeof e.value||null===e.value?e.defaultValue:e.value;return n.state={value:o},n}return(0,u.default)(r,[{key:"setValue",value:function(e,t){"value"in this.props||this.setState({value:e},t)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return c.createElement(f.default,(0,a.default)({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value}:null}}]),r}(c.Component);t.default=p},86459:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},3939:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},91301:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},31675:(e,t,r)=>{var n=r(82388),o=r(11855),a=r(36974);e.exports=function(e){var t=o();return function(){var r,o=n(e);if(t){var i=n(this).constructor;r=Reflect.construct(o,arguments,i)}else r=o.apply(this,arguments);return a(this,r)}}},52363:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},14846:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t},82388:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},27569:(e,t,r)=>{var n=r(58445);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},59585:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},44063:(e,t,r)=>{var n=r(37267);function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var u=a?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,t&&t.set(e,r),r}},11855:e=>{e.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},93345:(e,t,r)=>{var n=r(52363);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},36974:(e,t,r)=>{var n=r(37267),o=r(86459);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},58445:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},37267:e=>{function t(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t}}]);