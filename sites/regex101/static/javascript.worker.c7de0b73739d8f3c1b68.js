!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="static/",n(n.s="Bf5+")}({"Bf5+":function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t);var u,c=function(e){for(var t={},n=0;n<e.length;n++)for(var a=e[n],i=0;i<a.length;i++){var u=a[i],c=o(l(u),2),f=c[0],s=c[1];if(f===s)t[f]=[].concat(r(t[f]||[]),[u]);else for(var d=f;d<s;d++)t[d]=[].concat(r(t[d]||[]),[u])}return t},l=function(e){return[Math.min(e.start,e.end),Math.max(e.start,e.end)]};null==(u=self).performance&&(u.performance={}),null==u.performance.now&&(u.performance.now=function(){return Date.now()});const f=void 0!==/test/.hasIndices;self.onmessage=function(e){try{const n=performance.now();let r=e.data.flags;f&&!r.includes("d")&&(r+="d");const o=function(e,t,n){const r=new RegExp(e,t),o=[],a=-1!==t.indexOf("g");let i;for(;i=r.exec(n);){i.index===r.lastIndex&&r.lastIndex++;const e=[];for(let t=0;t<i.length;t++){let n=void 0,r=void 0;null!=i.indices&&null!=i.indices[t]?(n=i.indices[t][0],r=i.indices[t][1]):0===t&&(n=i.index,r=i.index+i[0].length);const a={content:i[t],groupNum:t,isParticipating:void 0!==i[t],match:o.length,start:n,end:r};e.push(a)}if(o.push(e),!a)break}return{matchResult:o,matchMap:c(o)}}(e.data.regex,r,e.data.testString);o.time=performance.now()-n,self.postMessage(o)}catch(t){self.postMessage({error:t.message})}},self.postMessage("onload")}});