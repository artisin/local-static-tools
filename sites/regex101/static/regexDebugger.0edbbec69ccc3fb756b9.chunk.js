(("undefined"!==typeof self?self:this).webpackJsonp=("undefined"!==typeof self?self:this).webpackJsonp||[]).push([[6],{"8rWR":function(e,t,r){"use strict";r.r(t);var n,a,o,i=r("q1tI"),s=r.n(i),c=r("17x9"),l=r.n(c),u=r("/MKj"),p=r("Ty5D"),f=r("sCiT"),y=r("oZrG"),h=r("AwGU"),d=r.n(h),m=r("t9sE"),g=r("Gp5D"),b=r("hTP1"),v=r("NkVb"),S=r("b0lc"),E=r("fyBV"),O=r("DoHE"),k=r("TSYQ"),P=r.n(k),_=r("hKI/"),R=r.n(_),j=r("v7au"),w=r("pwER"),C=r("UwLe"),x=r("vo6h"),N=r("dhO8"),D=r("XQs/");function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q,z,I,K=(o=a=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(o,i.PureComponent);var t,r,n,a=(r=o,n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,a=A(r);if(n){var o=A(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return this,!(t=e)||"object"!==M(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this):t});function o(){return function(e,t){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),a.apply(this,arguments)}return(t=[{key:"render",value:function(){var e=this.context,t=e.flags,r=e.delimiter;return s.a.createElement("div",{className:"_2-nIl"},s.a.createElement("div",{className:"_1kaH0"},r),s.a.createElement("div",{className:"_1tWIS"},this._renderRegex()),s.a.createElement("div",{className:"_1a6qQ"},r,t))}},{key:"_renderRegex",value:function(){var e=this.props,t=e.previousStep,r=e.step,n=this.context.regex;if(null!=t&&t.patternStart>r.patternStart){var a=Math.max(0,t.patternStart+t.patternEnd-(r.patternStart+r.patternEnd));return s.a.createElement(i.Fragment,null,s.a.createElement(S.C,{text:n.substring(0,r.patternStart)}),s.a.createElement(S.A,{text:Object(f.a)("Pattern Backtrack Indicator"),direction:E.b.N},s.a.createElement("span",{className:"_2yeGs"},s.a.createElement("span",{className:"_2gwC0"},r.patternEnd>0&&s.a.createElement(S.C,{text:n.substr(r.patternStart,r.patternEnd)})),s.a.createElement(S.C,{text:n.substr(r.patternStart+r.patternEnd,a)}))),s.a.createElement(S.C,{text:n.substring(r.patternStart+r.patternEnd+a)}))}return s.a.createElement(i.Fragment,null,s.a.createElement(S.C,{text:n.substring(0,r.patternStart)}),s.a.createElement("span",{className:"_2gwC0"},r.patternEnd>0&&s.a.createElement(S.C,{text:n.substr(r.patternStart,r.patternEnd)})),s.a.createElement(S.C,{text:n.substring(r.patternStart+r.patternEnd)}))}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,t),o}(),a.propTypes={step:l.a.object.isRequired,previousStep:l.a.object},a.contextTypes={regex:l.a.string,flags:l.a.string,delimiter:l.a.string,testString:l.a.string},function(e,t,r,n,a){var o={};Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(t,r){return r(e,"_renderRegex",t)||t},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,"_renderRegex",o),o=null)}((n=o).prototype,0,[y.a],Object.getOwnPropertyDescriptor(n.prototype,"_renderRegex"),n.prototype),n);function L(e){return(L="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=(I=z=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(o,i.PureComponent);var t,r,n,a=(r=o,n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,a=U(r);if(n){var o=U(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return this,!(t=e)||"object"!==L(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this):t});function o(){return function(e,t){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),a.apply(this,arguments)}return(t=[{key:"render",value:function(){var e=this.props.step,t=this.context.testString;if(e.stringEnd>0){var r=Math.min(e.stringStart,200),n=Math.min(200,t.length-(e.stringStart+e.stringEnd));return s.a.createElement("div",{className:"UIwmY"},this._renderSubstring(t,{from:0,len:e.stringStart,anchor:!0,maxChars:400-n}),s.a.createElement("span",{className:"_11poU"},s.a.createElement(S.C,{text:t.substr(e.stringStart,e.stringEnd)})),this._renderRestOfString(e.stringStart+e.stringEnd,r))}if(e.stringEnd<0){var a=e.stringStart-Math.abs(e.stringEnd),o=Math.min(a,200),i=Math.min(200,t.length-e.stringStart);return s.a.createElement("div",{className:"UIwmY"},this._renderSubstring(t,{from:0,len:a,anchor:!0,maxChars:400-i}),s.a.createElement("span",{className:"_11poU"},s.a.createElement(S.C,{text:t.substr(a,e.stringStart-a)})),this._renderRestOfString(e.stringStart,o))}var c=Math.min(e.stringStart,200),l=Math.min(200,t.length-e.stringStart);return s.a.createElement("div",{className:"UIwmY"},this._renderSubstring(t,{from:0,len:e.stringStart,anchor:!0,maxChars:400-l}),s.a.createElement("span",{className:"_11poU"}),this._renderRestOfString(e.stringStart,c))}},{key:"_renderRestOfString",value:function(e,t){var r=this.props,n=r.step,a=r.previousStep,o=this.context.testString;if(null!=a&&(a.stringStart>n.stringStart||n.stringStart===a.stringStart&&a.stringEnd>n.stringEnd&&n.stringEnd>0)){var i=Math.max(a.stringStart,n.stringStart+n.stringEnd),c=a.stringEnd-(i-a.stringStart);return s.a.createElement(s.a.Fragment,null,s.a.createElement(S.A,{direction:E.b.N,text:Object(f.a)("Test String Backtrack Indicator")},s.a.createElement("span",{className:"_2uxlx"},s.a.createElement(S.C,{text:o.substr(i,c)}))),this._renderSubstring(o,{from:i+c,len:o.length,maxChars:400-t}))}return this._renderSubstring(o,{from:e,len:o.length,maxChars:400-t})}},{key:"_renderSubstring",value:function(e){var t,r,n,a,o,i,c,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return s.a.createElement(S.C,{text:(t=l.from,r=l.len,n=l.anchor,a=l.maxChars,o=void 0===a?200:a,i=e.substr(t,r),c=i.length,c>o?n?"..."+i.substr(c-o):i.substr(0,o)+"...":i)})}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,t),o}(),z.propTypes={step:l.a.object.isRequired,previousStep:l.a.object},z.contextTypes={regex:l.a.string,flags:l.a.string,delimiter:l.a.string,testString:l.a.string},function(e,t,r,n,a){var o={};Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(t,r){return r(e,"render",t)||t},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,"render",o),o=null)}((q=I).prototype,0,[y.a],Object.getOwnPropertyDescriptor(q.prototype,"render"),q.prototype),q);function G(e){return(G="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var J=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(o,i.Component);var t,r,n,a=(r=o,n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,a=H(r);if(n){var o=H(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return this,!(t=e)||"object"!==G(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this):t});function o(){return function(e,t){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),a.apply(this,arguments)}return(t=[{key:"render",value:function(){var e=this.props,t=e.previousStep,r=e.step;return s.a.createElement(i.Fragment,null,s.a.createElement(K,{step:r,previousStep:t}),s.a.createElement(F,{step:r,previousStep:t}))}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,t),o}();J.propTypes={step:l.a.object.isRequired,previousStep:l.a.object};var V=J,Y=r("d76g"),Z={slider:"_2-mp_",rail:"_2miGe",actualRail:"-KCyb",handle:"_2dCi1",track:"NRLNd",tickLine:"ttZiJ",tickText:"_3luFt"};function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function X(e){var t,r=e.divOrButton,n=(2,function(e){if(Array.isArray(e))return e}(t=e.domain)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),2!==r.length);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(t)||function(e,t){if(e){if("string"===typeof e)return Q(e,2);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Q(e,2):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=n[0],o=n[1],i=e.handle,c=i.id,l=i.value,u=i.percent,p=e.getHandleProps;return s.a.createElement(r,$({role:"slider","aria-valuemin":a,"aria-valuemax":o,"aria-valuenow":l,className:Z.handle,style:{left:"".concat(u,"%")}},p(c)))}function ee(e){var t=e.source,r=e.target,n=e.getTrackProps;return s.a.createElement("div",$({className:Z.track,style:{left:"".concat(t.percent,"%"),width:"".concat(r.percent-t.percent,"%")}},n()))}function te(e){var t=e.tick,r=e.count,n=e.format;return s.a.createElement(i.Fragment,null,s.a.createElement("div",{className:Z.tickLine,style:{left:"".concat(t.percent,"%")}}),s.a.createElement("div",{className:Z.tickText,style:{marginLeft:"".concat(-100/r/2,"%"),width:"".concat(100/r,"%"),left:"".concat(t.percent,"%")}},n(t.value)))}function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}X.propTypes={divOrButton:l.a.oneOf(["div","button"]).isRequired,domain:l.a.array.isRequired,handle:l.a.shape({id:l.a.string.isRequired,value:l.a.number.isRequired,percent:l.a.number.isRequired}).isRequired,getHandleProps:l.a.func.isRequired},X.defaultProps={divOrButton:"div"},ee.propTypes={source:l.a.shape({id:l.a.string.isRequired,value:l.a.number.isRequired,percent:l.a.number.isRequired}).isRequired,target:l.a.shape({id:l.a.string.isRequired,value:l.a.number.isRequired,percent:l.a.number.isRequired}).isRequired,getTrackProps:l.a.func.isRequired},te.propTypes={tick:l.a.shape({id:l.a.string.isRequired,value:l.a.number.isRequired,percent:l.a.number.isRequired}).isRequired,count:l.a.number.isRequired,format:l.a.func.isRequired},te.defaultProps={format:function(e){return e}};var ne=function(e){return s.a.createElement(Y.e,{className:P()(Z.slider,e.className),domain:e.domain,values:[e.currentValue],onUpdate:e.onChange,onChange:e.onChange,step:e.step},s.a.createElement(Y.b,null,function(e){var t=e.getRailProps;return s.a.createElement("div",re({className:Z.rail},t()),s.a.createElement("div",{className:Z.actualRail}))}),s.a.createElement(Y.a,null,function(t){var r=t.handles,n=t.getHandleProps;return s.a.createElement(i.Fragment,null,r.map(function(t){return s.a.createElement(X,{key:t.id,handle:t,domain:e.domain,getHandleProps:n})}))}),s.a.createElement(Y.d,{right:!1},function(e){var t=e.tracks,r=e.getTrackProps;return s.a.createElement(i.Fragment,null,t.map(function(e){return s.a.createElement(ee,{key:e.id,source:e.source,target:e.target,getTrackProps:r})}))}),s.a.createElement(Y.c,{values:e.ticks},function(e){var t=e.ticks;return s.a.createElement(i.Fragment,null,t.map(function(e){return s.a.createElement(te,{key:"tick-".concat(e.id,"-").concat(e.value),tick:e,count:t.length})}))}))};ne.propTypes={domain:l.a.array.isRequired,currentValue:l.a.number.isRequired,ticks:l.a.array.isRequired,onChange:l.a.func.isRequired,className:l.a.string,step:l.a.number},ne.defaultProps={step:1};var ae,oe,ie,se=ne;function ce(e){return(ce="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return r}}(e,t)||ue(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ue(e,t){if(e){if("string"===typeof e)return pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?pe(e,t):void 0}}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){return(fe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function he(e,t,r,n,a){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var de,me,ge,be,ve=(ie=oe=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&fe(e,t)}(o,i.PureComponent);var t,r,n,a=(r=o,n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,a=ye(r);if(n){var o=ye(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return this,!(t=e)||"object"!==ce(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this):t});function o(e){var t;return function(e,t){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this),(t=a.call(this,e)).state={currentStep:1,sliderDomain:[1,Math.min(200,t.props.debugData.length)],isPlaying:!1,speed:300,stepSize:1,showShortcutModal:!1},t.shortcuts=[{description:Object(f.a)("Seek one step backwards"),shortcuts:[N.LEFT_ARROW,N.COMMA]},{description:Object(f.a)("Jump {1} steps backwards",10),shortcuts:[N.SHIFT_LEFT_ARROW,N.PAGE_DOWN]},{description:Object(f.a)("Seek one step forward"),shortcuts:[N.RIGHT_ARROW,N.DOT]},{description:Object(f.a)("Jump {1} steps forward",10),shortcuts:[N.SHIFT_RIGHT_ARROW,N.PAGE_UP]},{description:Object(f.a)("Go to the beginning"),shortcuts:[N.META_LEFT_ARROW,N.HOME]},{description:Object(f.a)("Go to the end"),shortcuts:[N.META_RIGHT_ARROW,N.END]},{description:Object(f.a)("Increase step range"),shortcuts:[N.PLUS]},{description:Object(f.a)("Decrease step range"),shortcuts:[N.MINUS]}],t.onSliderChange=R()(t.onSliderChange,50),t}return(t=[{key:"componentDidMount",value:function(){C.a.on({"key:leftArrow":this.onLeftKeyPress,"key:rightArrow":this.onRightKeyPress,"key:shiftLeftArrow":this.onShiftLeftKeyPress,"key:shiftRightArrow":this.onShiftRightKeyPress,"key:pageUp":this.onShiftLeftKeyPress,"key:pageDown":this.onShiftRightKeyPress,"key:comma":this.onLeftKeyPress,"key:dot":this.onRightKeyPress,"key:metaArrowLeft":this.onBeginningClick,"key:home":this.onBeginningClick,"key:metaArrowRight":this.onEndClick,"key:end":this.onEndClick,"key:plus":this.onPlusPress,"key:minus":this.onMinusPress})}},{key:"componentWillUnmount",value:function(){this._stopPlay(),C.a.off({"key:leftArrow":this.onLeftKeyPress,"key:rightArrow":this.onRightKeyPress,"key:shiftLeftArrow":this.onShiftLeftKeyPress,"key:shiftRightArrow":this.onShiftRightKeyPress,"key:pageUp":this.onShiftLeftKeyPress,"key:pageDown":this.onShiftRightKeyPress,"key:comma":this.onLeftKeyPress,"key:dot":this.onRightKeyPress,"key:metaArrowLeft":this.onBeginningClick,"key:home":this.onBeginningClick,"key:metaArrowRight":this.onEndClick,"key:end":this.onEndClick,"key:plus":this.onPlusPress,"key:minus":this.onMinusPress})}},{key:"onShortcutModalClose",value:function(){this.setState({showShortcutModal:!1})}},{key:"onShortcutClick",value:function(){this.setState({showShortcutModal:!0})}},{key:"onPlusPress",value:function(){this.onEndChange(this.state.sliderDomain[1]+20)}},{key:"onMinusPress",value:function(){this.onEndChange(this.state.sliderDomain[1]-20)}},{key:"onLeftKeyPress",value:function(){this._adjustCurrentStep(-this.state.stepSize)}},{key:"onShiftLeftKeyPress",value:function(){this._adjustCurrentStep(-10)}},{key:"onRightKeyPress",value:function(){this._adjustCurrentStep(this.state.stepSize)}},{key:"onShiftRightKeyPress",value:function(){this._adjustCurrentStep(10)}},{key:"onSliderChange",value:function(e){var t=le(e,1)[0];this.setState({currentStep:t})}},{key:"onStartChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=le(this.state.sliderDomain,2)[1],r=Math.max(1,Math.min(t-1,e));this._stopPlay(),this.setState({sliderDomain:[r,t],currentStep:Math.max(this.state.currentStep,r),isPlaying:!1,stepSize:Math.ceil((t-r)/1e6)})}},{key:"onEndChange",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=le(this.state.sliderDomain,1)[0],r=Math.max(t+1,Math.min(this.props.debugData.length,e));this._stopPlay(),this.setState({sliderDomain:[t,r],currentStep:Math.min(this.state.currentStep,r),isPlaying:!1,stepSize:Math.ceil((r-t)/1e6)})}},{key:"onPlayPauseClick",value:function(){var e=this;this.setState(function(e){return{isPlaying:!e.isPlaying,currentStep:e.currentStep===e.sliderDomain[1]?e.sliderDomain[0]:e.currentStep}},function(){e.state.isPlaying?e._startPlay():e._stopPlay()})}},{key:"onDecreaseSpeedClick",value:function(){this.setState(function(e){return{speed:Math.min(2e3,e.speed+100)}},this._startPlay)}},{key:"onIncreaseSpeedClick",value:function(){this.setState(function(e){return{speed:Math.max(100,e.speed-100)}},this._startPlay)}},{key:"onBeginningClick",value:function(){this._stopPlay();var e=le(this.state.sliderDomain,1)[0];this.setState({currentStep:e,isPlaying:!1})}},{key:"onEndClick",value:function(){this._stopPlay();var e=le(this.state.sliderDomain,2)[1];this.setState({currentStep:e,isPlaying:!1})}},{key:"_adjustCurrentStep",value:function(e){this.setState(function(t){var r=le(t.sliderDomain,2),n=r[0],a=r[1];return{currentStep:Math.min(Math.max(t.currentStep+e,n),a)}})}},{key:"_startPlay",value:function(){var e=this;clearInterval(this._interval),this._interval=setInterval(function(){e.state.currentStep===e.state.sliderDomain[1]?(e.setState({isPlaying:!1}),e._stopPlay()):e.setState(function(e){return{currentStep:e.currentStep+1}})},this.state.speed)}},{key:"_stopPlay",value:function(){clearInterval(this._interval)}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.debugData,n=this.state,a=n.currentStep,o=n.sliderDomain,i=n.isPlaying,c=n.stepSize,l=n.showShortcutModal,u=r[a-1],p=a>1?r[a-2]:null;if(null==u)return s.a.createElement("div",{className:P()("_2M8oT",t)},s.a.createElement("div",{className:"SIJJN"},s.a.createElement(S.n,{text:Object(f.a)("No data")}),s.a.createElement(x.a,{className:"RvGyn"},Object(f.a)("No data captured during the debug process."))));var y,h=Math.min(o[1],4),d=Object(w.a)([o[0]].concat(function(e){if(Array.isArray(e))return pe(e)}(y=new Array(h).fill().map(function(e,t){return Math.round((t+1)*o[1]/(h+1))}))||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(y)||ue(y)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[o[1]]));return s.a.createElement("div",{className:P()("_2M8oT",t)},r.length>1&&s.a.createElement("div",{className:"PjFey"},s.a.createElement(S.n,{text:Object(f.a)("Match Steps")}),s.a.createElement(x.a,{className:"_2RaS3"},s.a.createElement("div",{className:"_289o2"},s.a.createElement(S.z,{codeInput:!0,value:o[0].toString(),onChange:this.onStartChange,validation:/^\d*$/,placeholder:1,wrappedClassName:"_4mglG",className:"_2p_tW"}),s.a.createElement(se,{domain:o,ticks:d,currentValue:a,onChange:this.onSliderChange,className:"_3IVjx",step:c}),s.a.createElement(S.z,{codeInput:!0,value:o[1].toString(),onChange:this.onEndChange,validation:/^\d*$/,placeholder:r.length,wrappedClassName:"_3ZsKa",className:"_2p_tW"})),s.a.createElement("div",{className:"_1hYh-"},s.a.createElement(S.A,{text:Object(f.a)("Go to beginning"),direction:E.b.N},s.a.createElement(S.a,{onClick:this.onBeginningClick,className:"_1SlLz"},s.a.createElement(j.X,{size:24}))),s.a.createElement(S.A,{text:Object(f.a)("Decrease speed"),direction:E.b.N},s.a.createElement(S.a,{onClick:this.onDecreaseSpeedClick,disabled:!i,className:P()("_1y67N",!i&&"_2gyeC")},s.a.createElement(j.T,{size:24}))),s.a.createElement(S.A,{text:i?Object(f.a)("Pause"):Object(f.a)("Play"),direction:E.b.N},s.a.createElement(S.a,{onClick:this.onPlayPauseClick,className:"bMJ8w"},i?s.a.createElement(j.M,{size:24}):s.a.createElement(j.N,{size:24}))),s.a.createElement(S.A,{text:Object(f.a)("Increase speed"),direction:E.b.N},s.a.createElement(S.a,{onClick:this.onIncreaseSpeedClick,disabled:!i,className:P()("_1y67N",!i&&"_2gyeC")},s.a.createElement(j.Z,{size:24}))),s.a.createElement(S.A,{text:Object(f.a)("Go to end"),direction:E.b.N},s.a.createElement(S.a,{onClick:this.onEndClick,className:"_3egPR"},s.a.createElement(j.Y,{size:24}))))),s.a.createElement(S.a,{onClick:this.onShortcutClick,className:"_3GTKc"},s.a.createElement(S.s,null,Object(f.a)("Available keyboard shortcuts")))),s.a.createElement("div",{className:"SIJJN"},s.a.createElement(S.n,{text:Object(f.a)("Match Step {1}",Object(O.a)(a))}),s.a.createElement(x.a,{className:"RvGyn"},s.a.createElement(V,{step:u,previousStep:p}))),s.a.createElement(D.a,{isOpen:l,onModalClose:this.onShortcutModalClose,shortcuts:this.shortcuts}))}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,t),o}(),oe.propTypes={debugData:l.a.array.isRequired,className:l.a.string},he((ae=ie).prototype,"onShortcutModalClose",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onShortcutModalClose"),ae.prototype),he(ae.prototype,"onShortcutClick",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onShortcutClick"),ae.prototype),he(ae.prototype,"onPlusPress",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onPlusPress"),ae.prototype),he(ae.prototype,"onMinusPress",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onMinusPress"),ae.prototype),he(ae.prototype,"onLeftKeyPress",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onLeftKeyPress"),ae.prototype),he(ae.prototype,"onShiftLeftKeyPress",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onShiftLeftKeyPress"),ae.prototype),he(ae.prototype,"onRightKeyPress",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onRightKeyPress"),ae.prototype),he(ae.prototype,"onShiftRightKeyPress",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onShiftRightKeyPress"),ae.prototype),he(ae.prototype,"onSliderChange",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onSliderChange"),ae.prototype),he(ae.prototype,"onStartChange",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onStartChange"),ae.prototype),he(ae.prototype,"onEndChange",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onEndChange"),ae.prototype),he(ae.prototype,"onPlayPauseClick",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onPlayPauseClick"),ae.prototype),he(ae.prototype,"onDecreaseSpeedClick",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onDecreaseSpeedClick"),ae.prototype),he(ae.prototype,"onIncreaseSpeedClick",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onIncreaseSpeedClick"),ae.prototype),he(ae.prototype,"onBeginningClick",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onBeginningClick"),ae.prototype),he(ae.prototype,"onEndClick",[y.a],Object.getOwnPropertyDescriptor(ae.prototype,"onEndClick"),ae.prototype),ae);function Se(e){return(Se="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Ee(e,t){return(Ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Oe(e){return(Oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ke(e,t,r,n,a){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=r.slice().reverse().reduce(function(r,n){return n(e,t,r)||r},o),a&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(a):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}var Pe=Object(u.b)(function(e){return{regex:e.regexEditor.regex,flags:e.regexEditor.flags,delimiter:e.regexEditor.delimiter,testString:e.regexEditor.testString,permalinkFragment:e.general.permalinkFragment,flavor:e.regexEditor.flavor,showUnitTestArea:e.regexEditor.showUnitTestArea}})((be=ge=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Ee(e,t)}(o,i.Component);var t,r,n,a=(r=o,n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,a=Oe(r);if(n){var o=Oe(this).constructor;e=Reflect.construct(a,arguments,o)}else e=a.apply(this,arguments);return this,!(t=e)||"object"!==Se(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this):t});function o(){var e;!function(e,t){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return(e=a.call.apply(a,[this].concat(r))).state={hasDebugged:!1,activeMatch:0,debugResult:[],error:null},e._regexDebugger=new g.a,e}return(t=[{key:"getChildContext",value:function(){var e=this.props;return{regex:e.regex,delimiter:e.delimiter,flags:e.flags,testString:e.testString}}},{key:"componentDidMount",value:function(){this._runDebugger()}},{key:"componentWillUnmount",value:function(){this._regexDebugger.resetWorker(),this._regexDebugger=null}},{key:"onMatchClick",value:function(e){this.setState({activeMatch:e})}},{key:"_runDebugger",value:function(){var e=this.props,t=e.regex,r=e.flags,n=e.testString,a={maxExecutionTime:3e4,debugging:!0,flavor:e.flavor};this._regexDebugger.runMatch(t,r,n,a,this._handleDebugResult)}},{key:"_handleDebugResult",value:function(e,t){this.setState({hasDebugged:!0,debugResult:e?e.calloutData:[],error:t})}},{key:"render",value:function(){var e=this,t=this.props,r=t.permalinkFragment,n=t.location,a=t.flavor,o=t.regex,i=t.showUnitTestArea;if(a!==d.a.PCRE&&a!==d.a.PCRE2||""===o||!r&&(!n.state||!n.state.returnTo)||i)return s.a.createElement(p.a,{to:"/"});var c=this.state,l=c.hasDebugged,u=c.activeMatch,y=c.debugResult,h=c.error;return l?y&&0!==y.length?s.a.createElement("div",{className:"_2W6BO"},s.a.createElement(S.e,{className:"_30Xie",header:s.a.createElement(S.n,{text:Object(f.a)("Match")})},s.a.createElement(b.a,null,y.map(function(t,r){var n;return n=t.status>=0?Object(f.a)("Match {1} found in {2} step(s)",r+1,Object(O.a)(t.steps)):t.status===m.k?Object(f.a)("Match {1} failed in {2} step(s)",r+1,Object(O.a)(t.steps)):Object(f.a)("Match {1} halted after {2} step(s)",r+1,Object(O.a)(t.steps)),s.a.createElement(v.a,{isActive:r===u,className:t.status>=0?"_3C55N":"_1KyMe",icon:"angle-right",key:"debug-result-".concat(r),onClick:function(){return e.onMatchClick(r)}},n)}))),s.a.createElement(ve,{debugData:y[u],className:"_13zW1",key:"match-idx-".concat(u)})):h?s.a.createElement(S.s,{className:"_74m-R",type:E.c.ERROR},s.a.createElement("div",null,Object(f.a)("The regex debugger was unable to debug your pattern due to an error."),s.a.createElement("br",null),s.a.createElement("br",null),h)):s.a.createElement(S.s,{className:"_74m-R",type:E.c.ERROR},Object(f.a)("The regex debugger returned no data for the input you provided.")):s.a.createElement("div",{className:"_74m-R"},s.a.createElement(S.w,null),s.a.createElement("div",{className:"_1tk0j"},Object(f.a)("Please wait while your expression is being debugged...")))}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,t),o}(),ge.propTypes={regex:l.a.string.isRequired,flags:l.a.string.isRequired,delimiter:l.a.string.isRequired,testString:l.a.string.isRequired,location:l.a.object.isRequired,match:l.a.object,permalinkFragment:l.a.string,history:l.a.object.isRequired,flavor:l.a.string.isRequired,showUnitTestArea:l.a.bool.isRequired},ge.childContextTypes={regex:l.a.string,flags:l.a.string,delimiter:l.a.string,testString:l.a.string},ke((me=be).prototype,"getChildContext",[y.a],Object.getOwnPropertyDescriptor(me.prototype,"getChildContext"),me.prototype),ke(me.prototype,"onMatchClick",[y.a],Object.getOwnPropertyDescriptor(me.prototype,"onMatchClick"),me.prototype),ke(me.prototype,"_handleDebugResult",[y.a],Object.getOwnPropertyDescriptor(me.prototype,"_handleDebugResult"),me.prototype),de=me))||de;t.default=Pe}}]);