_N_E=("object"!==typeof self?self:this.webpackJsonp_N_E="object"!==typeof self?self:this.webpackJsonp_N_E||[]).push([[68],{"6lBk":function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/json-to-scala-case-class",function(){return t("bxG3")}])},ANhw:function(e,r){!function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t={rotl:function(e,r){return e<<r|e>>>32-r},rotr:function(e,r){return e<<32-r|e>>>r},endian:function(e){if(e.constructor==Number)return 16711935&t.rotl(e,8)|4278255360&t.rotl(e,24);for(var r=0;r<e.length;r++)e[r]=t.endian(e[r]);return e},randomBytes:function(e){for(var r=[];e>0;e--)r.push(Math.floor(256*Math.random()));return r},bytesToWords:function(e){for(var r=[],t=0,n=0;t<e.length;t++,n+=8)r[n>>>5]|=e[t]<<24-n%32;return r},wordsToBytes:function(e){for(var r=[],t=0;t<32*e.length;t+=8)r.push(e[t>>>5]>>>24-t%32&255);return r},bytesToHex:function(e){for(var r=[],t=0;t<e.length;t++)r.push((e[t]>>>4).toString(16)),r.push((15&e[t]).toString(16));return r.join("")},hexToBytes:function(e){for(var r=[],t=0;t<e.length;t+=2)r.push(parseInt(e.substr(t,2),16));return r},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var a=e[n]<<16|e[n+1]<<8|e[n+2],o=0;o<4;o++)8*n+6*o<=8*e.length?t.push(r.charAt(a>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,a=0;n<e.length;a=++n%4)0!=a&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*a+8)-1)<<2*a|r.indexOf(e.charAt(n))>>>6-2*a);return t}};e.exports=t}()},WLfg:function(e,r,t){(function(r){!function(){var n=t("ANhw"),a=t("mmNF").utf8,o=t("mmNF").bin,i=function(e,t){var i=n.wordsToBytes(function(e){e.constructor==String?e=a.stringToBytes(e):"undefined"!==typeof r&&"function"==typeof r.isBuffer&&r.isBuffer(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());var t=n.bytesToWords(e),o=8*e.length,i=[],s=1732584193,c=-271733879,u=-1732584194,f=271733878,l=-1009589776;t[o>>5]|=128<<24-o%32,t[15+(o+64>>>9<<4)]=o;for(var p=0;p<t.length;p+=16){for(var y=s,d=c,g=u,b=f,m=l,h=0;h<80;h++){if(h<16)i[h]=t[p+h];else{var v=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=v<<1|v>>>31}var N=(s<<5|s>>>27)+l+(i[h]>>>0)+(h<20?1518500249+(c&u|~c&f):h<40?1859775393+(c^u^f):h<60?(c&u|c&f|u&f)-1894007588:(c^u^f)-899497514);l=f,f=u,u=c<<30|c>>>2,c=s,s=N}s+=y,c+=d,u+=g,f+=b,l+=m}return[s,c,u,f,l]}(e));return t&&t.asBytes?i:t&&t.asString?o.bytesToString(i):n.bytesToHex(i)};i._blocksize=16,i._digestsize=20,e.exports=i}()}).call(this,t("HDXh").Buffer)},XJmi:function(e,r){e.exports=["as","use","extern crate","break","const","continue","crate","else","if","if let","enum","extern","false","fn","for","if","impl","in","for","let","loop","match","mod","move","mut","pub","impl","ref","return","Self","self","static","struct","super","trait","true","type","unsafe","use","where","while","abstract","alignof","become","box","do","final","macro","offsetof","override","priv","proc","pure","sizeof","typeof","unsized","virtual","yield","dyn","try","async","await","union"]},bxG3:function(e,r,t){"use strict";t.r(r),t.d(r,"default",(function(){return l}));var n=t("nKUr"),a=t("vJKn"),o=t.n(a),i=t("rg98"),s=t("rYmI"),c=t.n(s),u=t("sN8P"),f=t("q1tI");function l(){var e=Object(f.useCallback)(function(){var e=Object(i.a)(o.a.mark((function e(r){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.value,e.abrupt("return",c()(t,{lang:"scala"}));case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),[]);return Object(n.jsx)(u.a,{transformer:e,editorTitle:"JSON",editorLanguage:"json",resultTitle:"Scala Case Class",resultLanguage:"scala"})}},mmNF:function(e,r){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var r=[],t=0;t<e.length;t++)r.push(255&e.charCodeAt(t));return r},bytesToString:function(e){for(var r=[],t=0;t<e.length;t++)r.push(String.fromCharCode(e[t]));return r.join("")}}};e.exports=t},rYmI:function(e,r,t){e.exports=function(e,r,t){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e,t=t&&t.hasOwnProperty("default")?t.default:t;var n={STRING:"string",NUMBER:"number",INTEGER:"number",BOOLEAN:"boolean",ARRAY:"[]",ANY:"any"},a={flow:{interface:"type",separator:",",startingBrace:"{",endingBrace:"}",terminator:";",equator:" = ",types:n,optional:"?",handleArray:function(e,r){return void 0===e&&(e=""),r?"any[]":e+"[]"}},typescript:{interface:"interface",separator:";",startingBrace:"{",endingBrace:"}",terminator:"",equator:"",types:n,optional:"?",handleArray:function(e,r){return void 0===e&&(e=""),r?"any[]":e+"[]"}},"rust-serde":{interface:"struct",separator:",",startingBrace:"{",endingBrace:"}",terminator:"",equator:"",types:r.merge({},n,{STRING:"String",NUMBER:"f64",INTEGER:"i64",BOOLEAN:"bool",ANY:"()"}),handleOptionalValue:function(e){return"Option<"+e+">"},handleArray:function(e){return void 0===e&&(e=""),"Vec<"+e+">"},preInterface:"#[derive(Serialize, Deserialize)]\n"},scala:{interface:"case class",separator:",",startingBrace:"(",endingBrace:")",terminator:"",equator:"",types:r.merge({},n,{STRING:"String",NUMBER:"Double",INTEGER:"Int",ANY:"Any",BOOLEAN:"Boolean"}),hideTerminatorAtLast:!0,handleOptionalValue:function(e){return"Option["+e+"]"},handleArray:function(e){return void 0===e&&(e=""),"Seq["+e+"]"}},"io-ts":{preText:"import * as t from 'io-ts'",interface:"const",separator:",",startingBrace:"{",endingBrace:"})",terminator:";",equator:" = t.type(",handleArray:function(e,r){return void 0===e&&(e=""),r?"t.Array":"t.array("+e+")"},types:{STRING:"t.string",NUMBER:"t.number",INTEGER:"t.Integer",ANY:"t.any",BOOLEAN:"t.boolean",ARRAY:"t.array"}},sarcastic:{interface:"const",separator:",",startingBrace:"{",endingBrace:"})",terminator:";",equator:" = is.shape(",handleArray:function(e,r){return void 0===e&&(e=""),r?"is.array":"is.arrayOf("+e+")"},handleOptionalValue:function(e){return"is.maybe("+e+")"},types:{STRING:"is.string",NUMBER:"is.number",INTEGER:"is.number",ANY:"is.any",BOOLEAN:"is.boolean",ARRAY:"is.array"}}},o={},i={},s={},c={},u={};function f(e){return r.upperFirst(r.camelCase(e))}function l(e,t){if(m(e)){var n=e.map((function(e){return Object.keys(e)}));u[t]=r.difference(r.union.apply(void 0,n),r.intersection.apply(void 0,n))}}function p(e){return/[ ~`!@#$%\^&*+=\-\[\]\\';,\/{}|\\":<>\?]/g.test(e)}function y(e){var t=o.types,n=t.STRING;switch(!0){case r.isString(e):n=t.STRING;break;case r.isInteger(e):n=t.INTEGER;break;case r.isNumber(e):n=t.NUMBER;break;case r.isBoolean(e):n=t.BOOLEAN}return n}function d(t){return r.isObject(t)?e(Object.keys(t).map((function(e){return e.toLowerCase()})).sort().join("|")):e(Object.keys(t).map((function(e){return typeof e})).sort().join("|"))}function g(e){return f(e)}function b(e,r,t,n,a){var o=g(e),i=d(r);return-1!==Object.keys(n).indexOf(i)?n[i]:void 0!==a[o]?(a[o]++,n[i]=o+a[o],n[i]):(n[i]=o,a[o]=0,o)}function m(e){return r.isEmpty(e)||e.every((function(e){return r.isObject(e)?"object":typeof e})),!0}function h(e,t){return t=b(t,e,i,s,c),i[t]=i[t]||{},Object.keys(e).map((function(n){var a="string",u=e[n],f=o.types,d=o.handleArray;switch(!0){case r.isString(u):a=f.STRING;break;case r.isInteger(u):a=f.INTEGER;break;case r.isNumber(u):a=f.NUMBER;break;case r.isBoolean(u):a=f.BOOLEAN;break;case r.isArray(u):if(a=d("",!0),m(u))if(r.isEmpty(u))a=d("",!0);else if(r.isObject(u[0])){var g=b(n,r.assign.apply(void 0,[{}].concat(u)),i,s,c);a=d(g),l(u,g),h(r.assign.apply(void 0,[{}].concat(u)),n)}else a=""+d(y(u[0]));break;case r.isObject(u)&&!r.isArray(u):a=f.ANY,r.isEmpty(u)||(a=b(n,u,i,s,c),h(u,n))}p(n)&&(n='"'+n+'"'),i[t][n]=a})),{classes:i,classesCache:s,classesInUse:c}}function v(e,r){return u[r]&&u[r].indexOf(e)>=0}function N(e,r){return v(e,r)&&o.optional?o.optional:""}function O(e,n,a,o){var i="camelCase"===o?r.camelCase:r.snakeCase,s=p(e)||"snakeCase"===o?i(e):e;if("rust-serde"===n&&(t.indexOf(e)>=0||e.indexOf(" ")>=0||e!==s)){var c=(s.indexOf("_")>=0?"":"_")+s;return'  #[serde(rename = "'+e.replace(/"/g,"")+'")]\n  '+c}return"  "+e+N(e,a)}function B(e,t){e=r.isString(e)?JSON.parse(e):e,r.isArray(e)&&(e=r.merge.apply(void 0,[{}].concat(e)));var n={objectName:"_RootInterface",lang:"flow",rustCase:"camelCase"};o={},u={};var f=r.merge({},n,t),l=f.objectName,p=f.lang,y=f.rustCase;if("camelCase"!==y&&"snakeCase"!==y)throw new Error("rustCase can only be 'camelCase' or 'snakeCase'.");var d=(o=a[p]).preText?o.preText+";\n\n":"",g={};i={},s={},c={},h(e,l);var b=o.equator,m=o.separator,N=o.endingBrace,B=o.startingBrace,A=o.terminator,T=o.preInterface,E=o.hideTerminatorAtLast,R=o.handleOptionalValue;return Object.keys(i).map((function(e){d=T||"",d+=o.interface+" "+e+b+" "+B+"\n";var r=Object.keys(i[e]);r.map((function(t,n){var a=n===r.length-1&&E?"":m,o=O(t,p,e,y),s=i[e][t];s=v(t,e)&&R?R(s):s,d+=o+": "+s+a+"\n"})),d+=""+N+A+"\n\n",g[e]=d})),d="",Object.keys(g).sort().forEach((function(e){d+=g[e]})),d}return B}(t("WLfg"),t("GaOo"),t("XJmi"))}},[["6lBk",1,2,17,0,3,4]]]);