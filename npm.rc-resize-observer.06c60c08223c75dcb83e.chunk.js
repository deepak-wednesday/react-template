(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[633],{49870:(e,t,r)=>{"use strict";var n=r(38326),o=r(24470);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(93919)),u=o(r(33007)),f=o(r(36365)),c=o(r(30196)),s=o(r(10737)),l=n(r(67294)),a=o(r(59636)),p=o(r(38034)),d=o(r(99251)),y=r(86108),h=o(r(32018)),b=function(e){(0,c.default)(r,e);var t=(0,s.default)(r);function r(){var e;return(0,u.default)(this,r),(e=t.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var r=e.props.onResize,n=t[0].target,o=n.getBoundingClientRect(),u=o.width,f=o.height,c=n.offsetWidth,s=n.offsetHeight,l=Math.floor(u),a=Math.floor(f);if(e.state.width!==l||e.state.height!==a||e.state.offsetWidth!==c||e.state.offsetHeight!==s){var p={width:l,height:a,offsetWidth:c,offsetHeight:s};e.setState(p),r&&Promise.resolve().then((function(){r((0,i.default)((0,i.default)({},p),{},{offsetWidth:c,offsetHeight:s}),n)}))}},e.setChildNode=function(t){e.childNode=t},e}return(0,f.default)(r,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=(0,a.default)(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new h.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=(0,p.default)(e);if(t.length>1)(0,d.default)(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return(0,d.default)(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var r=t[0];if(l.isValidElement(r)&&(0,y.supportRef)(r)){var n=r.ref;t[0]=l.cloneElement(r,{ref:(0,y.composeRef)(n,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!l.isValidElement(e)||"key"in e&&null!==e.key?e:l.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),r}(l.Component);b.displayName="ResizeObserver";var v=b;t.default=v},29954:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},33007:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},36365:e=>{function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}},10737:(e,t,r)=>{var n=r(52455),o=r(43289),i=r(60930);e.exports=function(e){var t=o();return function(){var r,o=n(e);if(t){var u=n(this).constructor;r=Reflect.construct(o,arguments,u)}else r=o.apply(this,arguments);return i(this,r)}}},3854:e=>{e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},52455:e=>{function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},30196:(e,t,r)=>{var n=r(65213);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},24470:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},38326:(e,t,r)=>{var n=r(79249);function o(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=i?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(r,u,f):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}},43289:e=>{e.exports=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},93919:(e,t,r)=>{var n=r(3854);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},60930:(e,t,r)=>{var n=r(79249),o=r(29954);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},65213:e=>{function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t},79249:e=>{function t(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t},38034:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){var r=[];return o.default.Children.forEach(t,(function(t){void 0!==t&&null!==t&&(Array.isArray(t)?r=r.concat(e(t)):(0,i.isFragment)(t)&&t.props?r=r.concat(e(t.props.children)):r.push(t))})),r};var n,o=(n=r(67294))&&n.__esModule?n:{default:n},i=r(59864)},59636:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return o.default.findDOMNode(e)};var n,o=(n=r(73935))&&n.__esModule?n:{default:n}},86108:(e,t)=>{"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){"function"===typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=n,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){t.forEach((function(t){n(t,e)}))}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&e.prototype&&!e.prototype.render)return!1;return!0}},99251:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.warning=n,t.note=o,t.resetWarned=function(){r={}},t.call=i,t.warningOnce=u,t.noteOnce=function(e,t){i(o,e,t)},t.default=void 0;var r={};function n(e,t){0}function o(e,t){0}function i(e,t,n){t||r[n]||(e(!1,n),r[n]=!0)}function u(e,t){i(n,e,t)}var f=u;t.default=f}}]);