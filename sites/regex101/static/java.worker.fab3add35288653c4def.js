!function(e){var r={};function t(s){if(r[s])return r[s].exports;var n=r[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(s,n,function(r){return e[r]}.bind(null,n));return s},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="regex101/static/",t(t.s="d7iu")}({As0v:function(e,r,t){"use strict";function s(e){if(null==e)return"";for(var r=0,t="",s=0,n=e.length;s<n;s++){var a=e.charAt(s);"'"===a&&r%2===0?(t+="\\"+a,r=0):(t+=a,"\\"===a?r++:r=0)}return t}t.d(r,"a",function(){return s})},bxFT:function(e,r,t){"use strict";t.d(r,"a",function(){return c}),t.d(r,"b",function(){return f});var s=1,n=2,a=4,o=8,u=32,i=64,_=256;function c(e){for(var r=0,t=0;t<e.length;t++){var c=e.charAt(t);switch(c){case"g":continue;case"m":r|=o;break;case"i":r|=n;break;case"s":r|=u;break;case"x":r|=a;break;case"d":r|=s;break;case"u":r|=i;break;case"U":r|=_;break;default:throw new Error("Unknown java flag ".concat(c))}}return r}var l=["out of stack space","too much recursion","maximum call stack size exceeded"];function f(e){if(null!=e.message){var r=e.message.toLowerCase().trim().replace(/\s+/g," ").replace(/[^a-z ]/i,"");if(l.includes(r))return"JAVA_STACK_ERROR"}return e.message||"Unknown internal Java matcher error"}},d7iu:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var js_workers_utils_java__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("bxFT"),js_workers_utils_javascript__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("As0v");importScripts("regex101/static/java8.js"),main(),self.onmessage=function(event){try{const startTime=performance.now(),{regex:regex,flags:flags,testString:testString,substString:substString,listMode:listMode}=event.data,substFn=listMode?self.javaSubstituteList:self.javaSubstitute,safeSubstString=Object(js_workers_utils_javascript__WEBPACK_IMPORTED_MODULE_1__.a)(substString).replace(/\\[\d$\\]/g,e=>"\\\\"===e?"\\\\\\\\":"\\"+e),javaSubstString=eval(`'${safeSubstString}'`),[result,error]=substFn(regex,testString,Object(js_workers_utils_java__WEBPACK_IMPORTED_MODULE_0__.a)(flags),javaSubstString,flags.includes("g"));if(null!=error){const[[[,e,,r]]]=error;return void self.postMessage({error:e+" near index "+r})}const[resultString]=result;self.postMessage({result:resultString,time:performance.now()-startTime})}catch(error){self.postMessage({error:Object(js_workers_utils_java__WEBPACK_IMPORTED_MODULE_0__.b)(error)})}},self.postMessage("onload")}});