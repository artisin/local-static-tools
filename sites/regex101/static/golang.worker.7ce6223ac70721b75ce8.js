!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/static/",r(r.s="EJox")}({EJox:function(t,e,r){"use strict";function n(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.r(e);var u,c=function(t){for(var e={},r=0;r<t.length;r++)for(var i=t[r],a=0;a<i.length;a++){var u=i[a],c=o(l(u),2),f=c[0],s=c[1];if(f===s)e[f]=[].concat(n(e[f]||[]),[u]);else for(var g=f;g<s;g++)e[g]=[].concat(n(e[g]||[]),[u])}return e},l=function(t){return[Math.min(t.start,t.end),Math.max(t.start,t.end)]};null==(u=self).performance&&(u.performance={}),null==u.performance.now&&(u.performance.now=function(){return Date.now()}),importScripts("/static/golang.js");const f=Module();self.onmessage=function(t){const e=performance.now(),{regex:r,flags:n,testString:o}=t.data,i=n.replace("g","");let a=r;i.length>0&&(a=`(?${i})${r}`);const u=function(t,e,r){const n=-1!==e.indexOf("g"),o=[];if(p.pattern!==t||p.flags!==e||!p.regexPointer){p.regexPointer&&f._free(p.regexPointer);const r=2*(2*t.length+1),n=f._malloc(r);f.stringToUTF8(t,n,r),p.pattern=t,p.flags=e,p.regexPointer=g(n)}if(p.subject!==r||!p.testStringPointer){p.testStringPointer&&f._free(p.testStringPointer);const t=2*(2*r.length+1),e=f._malloc(t);f.stringToUTF8(r,e,t),p.subject=r,p.testStringPointer=e,p.subjectLength=function(r,n){let o=0;for(let i=e,a=e+t;i<a;i++){if(0===f.HEAP8[i])return o;o++}return o}()}let i=0,a=0;for(;a<=p.subjectLength;){const t=s(p.regexPointer,p.testStringPointer,a,p.subjectLength);if(!t.get(0))break;{const e=t.get(0).getEnd();if(a=t.get(0).getStart()===e?e+1:e,o.push(b(t,i,r,p.testStringPointer)),i++,!n)break}}return{matchResult:o,matchMap:c(o)}}(a,n,o);u.time=performance.now()-e,self.postMessage(u)},self.postMessage("onload");const s=f.RE2_Match,g=f.RE2_CreateRegex,p={pattern:null,flags:null,regexPointer:null,subject:null,testStringPointer:null,subjectLength:0};function b(t,e,r,n){const o=[];for(let i=0,a=t.size();i<a;i++){const a=t.get(i),u=a.getStart(),c=a.getEnd(),l=d(n,n+u),f=l+d(n+u,n+c);o.push({isParticipating:!0,groupNum:i,start:l,end:f,content:r.substring(l,f),match:e})}return o}function d(t,e){let r=0;for(;t!==e;){const e=255&f.HEAP8[t];if(0===e)return r;e<240?(e<128?t++:t+=e<224?2:3,r++):(t+=4,r+=2)}return r}}});