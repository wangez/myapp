webpackJsonp([1],{434:function(t,n,e){"use strict";function r(t){a||e(530)}Object.defineProperty(n,"__esModule",{value:!0});var o=e(512),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);var c=e(533),a=!1,s=e(24),f=r,l=s(i.a,c.a,!1,f,null,null);l.options.__file="src\\renderer\\components\\articles\\capa.vue",n.default=l.exports},446:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},447:function(t,n,e){t.exports=!e(453)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},448:function(t,n,e){var r=e(451),o=e(461);t.exports=e(447)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},449:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},450:function(t,n,e){var r=e(469)("wks"),o=e(470),i=e(446).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},451:function(t,n,e){var r=e(452),o=e(467),i=e(468),u=Object.defineProperty;n.f=e(447)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},452:function(t,n,e){var r=e(449);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},453:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},454:function(t,n){t.exports={}},455:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},456:function(t,n,e){var r=e(474),o=e(457);t.exports=function(t){return r(o(t))}},457:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},458:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},459:function(t,n,e){var r=e(446),o=e(151),i=e(465),u=e(448),c=function(t,n,e){var a,s,f,l=t&c.F,p=t&c.G,h=t&c.S,v=t&c.P,d=t&c.B,y=t&c.W,g=p?o:o[n]||(o[n]={}),x=g.prototype,m=p?r:h?r[n]:(r[n]||{}).prototype;p&&(e=n);for(a in e)(s=!l&&m&&void 0!==m[a])&&a in g||(f=s?m[a]:e[a],g[a]=p&&"function"!=typeof m[a]?e[a]:d&&s?i(f,r):y&&m[a]==f?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(f):v&&"function"==typeof f?i(Function.call,f):f,v&&((g.virtual||(g.virtual={}))[a]=f,t&c.R&&x&&!x[a]&&u(x,a,f)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},460:function(t,n,e){var r=e(449),o=e(446).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},461:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},462:function(t,n,e){var r=e(469)("keys"),o=e(470);t.exports=function(t){return r[t]||(r[t]=o(t))}},463:function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},464:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},465:function(t,n,e){var r=e(466);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},466:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},467:function(t,n,e){t.exports=!e(447)&&!e(453)(function(){return 7!=Object.defineProperty(e(460)("div"),"a",{get:function(){return 7}}).a})},468:function(t,n,e){var r=e(449);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},469:function(t,n,e){var r=e(446),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},470:function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},471:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},472:function(t,n,e){"use strict";n.__esModule=!0;var r=e(485),o=function(t){return t&&t.__esModule?t:{default:t}}(r);n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},473:function(t,n,e){e(492);for(var r=e(446),o=e(448),i=e(454),u=e(450)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),a=0;a<c.length;a++){var s=c[a],f=r[s],l=f&&f.prototype;l&&!l[u]&&o(l,u,s),i[s]=i.Array}},474:function(t,n,e){var r=e(464);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},475:function(t,n,e){"use strict";var r=e(495),o=e(459),i=e(496),u=e(448),c=e(455),a=e(454),s=e(497),f=e(481),l=e(501),p=e(450)("iterator"),h=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,e,d,y,g,x){s(e,n,d);var m,_,b,w=function(t){if(!h&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new e(this,t)}}return function(){return new e(this,t)}},O=n+" Iterator",S="values"==y,M=!1,j=t.prototype,L=j[p]||j["@@iterator"]||y&&j[y],T=!h&&L||w(y),P=y?S?w("entries"):T:void 0,E="Array"==n?j.entries||L:L;if(E&&(b=l(E.call(new t)))!==Object.prototype&&b.next&&(f(b,O,!0),r||c(b,p)||u(b,p,v)),S&&L&&"values"!==L.name&&(M=!0,T=function(){return L.call(this)}),r&&!x||!h&&!M&&j[p]||u(j,p,T),a[n]=T,a[O]=v,y)if(m={values:S?T:w("values"),keys:g?T:w("keys"),entries:P},x)for(_ in m)_ in j||i(j,_,m[_]);else o(o.P+o.F*(h||M),n,m);return m}},476:function(t,n,e){var r=e(477),o=e(471);t.exports=Object.keys||function(t){return r(t,o)}},477:function(t,n,e){var r=e(455),o=e(456),i=e(478)(!1),u=e(462)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),a=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>a;)r(c,e=n[a++])&&(~i(s,e)||s.push(e));return s}},478:function(t,n,e){var r=e(456),o=e(479),i=e(480);t.exports=function(t){return function(n,e,u){var c,a=r(n),s=o(a.length),f=i(u,s);if(t&&e!=e){for(;s>f;)if((c=a[f++])!=c)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},479:function(t,n,e){var r=e(458),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},480:function(t,n,e){var r=e(458),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),t<0?o(t+n,0):i(t,n)}},481:function(t,n,e){var r=e(451).f,o=e(455),i=e(450)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},482:function(t,n,e){var r=e(457);t.exports=function(t){return Object(r(t))}},483:function(t,n,e){"use strict";var r=e(502)(!0);e(475)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,e=this._i;return e>=n.length?{value:void 0,done:!0}:(t=r(n,e),this._i+=t.length,{value:t,done:!1})})},484:function(t,n,e){var r=e(464),o=e(450)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=u(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},485:function(t,n,e){t.exports={default:e(486),__esModule:!0}},486:function(t,n,e){e(487);var r=e(151).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},487:function(t,n,e){var r=e(459);r(r.S+r.F*!e(447),"Object",{defineProperty:e(451).f})},489:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var o=e(490),i=r(o),u=e(504),c=r(u);n.default=function(){function t(t,n){var e=[],r=!0,o=!1,i=void 0;try{for(var u,a=(0,c.default)(t);!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return e}return function(n,e){if(Array.isArray(n))return n;if((0,i.default)(Object(n)))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},490:function(t,n,e){t.exports={default:e(491),__esModule:!0}},491:function(t,n,e){e(473),e(483),t.exports=e(503)},492:function(t,n,e){"use strict";var r=e(493),o=e(494),i=e(454),u=e(456);t.exports=e(475)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==n?o(0,e):"values"==n?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},493:function(t,n){t.exports=function(){}},494:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},495:function(t,n){t.exports=!0},496:function(t,n,e){t.exports=e(448)},497:function(t,n,e){"use strict";var r=e(498),o=e(461),i=e(481),u={};e(448)(u,e(450)("iterator"),function(){return this}),t.exports=function(t,n,e){t.prototype=r(u,{next:o(1,e)}),i(t,n+" Iterator")}},498:function(t,n,e){var r=e(452),o=e(499),i=e(471),u=e(462)("IE_PROTO"),c=function(){},a=function(){var t,n=e(460)("iframe"),r=i.length;for(n.style.display="none",e(500).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;r--;)delete a.prototype[i[r]];return a()};t.exports=Object.create||function(t,n){var e;return null!==t?(c.prototype=r(t),e=new c,c.prototype=null,e[u]=t):e=a(),void 0===n?e:o(e,n)}},499:function(t,n,e){var r=e(451),o=e(452),i=e(476);t.exports=e(447)?Object.defineProperties:function(t,n){o(t);for(var e,u=i(n),c=u.length,a=0;c>a;)r.f(t,e=u[a++],n[e]);return t}},500:function(t,n,e){var r=e(446).document;t.exports=r&&r.documentElement},501:function(t,n,e){var r=e(455),o=e(482),i=e(462)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},502:function(t,n,e){var r=e(458),o=e(457);t.exports=function(t){return function(n,e){var i,u,c=String(o(n)),a=r(e),s=c.length;return a<0||a>=s?t?"":void 0:(i=c.charCodeAt(a),i<55296||i>56319||a+1===s||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},503:function(t,n,e){var r=e(484),o=e(450)("iterator"),i=e(454);t.exports=e(151).isIterable=function(t){var n=Object(t);return void 0!==n[o]||"@@iterator"in n||i.hasOwnProperty(r(n))}},504:function(t,n,e){t.exports={default:e(505),__esModule:!0}},505:function(t,n,e){e(473),e(483),t.exports=e(506)},506:function(t,n,e){var r=e(452),o=e(507);t.exports=e(151).getIterator=function(t){var n=o(t);if("function"!=typeof n)throw TypeError(t+" is not iterable!");return r(n.call(t))}},507:function(t,n,e){var r=e(484),o=e(450)("iterator"),i=e(454);t.exports=e(151).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},508:function(t,n,e){t.exports=e.p+"public/imgs/bk--assets.jpg"},512:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(532),i=r(o),u=e(508),c=r(u);n.default={name:"capa",data:function(){return{}},mounted:function(){var t=this,n=new Image;n.src=c.default,n.onload=function(n){t.pic=new i.default(t.$refs.cvs,n.target),t.pic.animation()}},beforeDestroy:function(){this.pic.distroy()}}},530:function(t,n,e){var r=e(531);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);e(23)("080b021d",r,!1)},531:function(t,n,e){n=t.exports=e(19)(void 0),n.push([t.i,"\n#canvas-warper {\n  position: absolute;\n  top: 3em;\n  bottom: 0;\n  width: 100%;\n}\n#canvas-warper #cvs {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n",""])},532:function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(489),i=r(o),u=e(463),c=r(u),a=e(472),s=r(a),f=function(){function t(n,e){(0,c.default)(this,t);var r=n.getBoundingClientRect(),o=r.width,i=r.height,u=(r.top,r.left,e.width),a=e.height,s=Math.floor(o/57),f=Math.floor(i/30),l=57+Math.ceil((o-57*s)/s),p=30+Math.ceil((i-30*f)/f),h=u/l,v=a/p;this.speedx=s/120,this.speedy=f/120,this.ispeedx=h/120,this.ispeedy=v/120,this.zs=120,this.flag=-120,this.change=1,this.stopcount=60,this.movingList=[],this.width=n.width=o,this.height=n.height=i,this.canvas=n,this.ctx=n.getContext("2d"),this.img=e;for(var d=0;d<p;d++)for(var y=0;y<l;y++)this.movingList.push([s*y,f*d,h*y,v*d])}return(0,s.default)(t,[{key:"animation",value:function(){var t=this;this.animahandle=requestAnimationFrame(function(n){return t.animation()});var n=this.ctx,e=this.img,r=this.flag,o=this.speedx,u=this.speedy,c=this.ispeedx,a=this.ispeedy;if(n.clearRect(0,0,this.width,this.height),r<0?this.movingList.forEach(function(t){var s=(0,i.default)(t,4),f=s[0],l=s[1],p=s[2],h=s[3];n.drawImage(e,p,h,-r*c,-r*a,f,l,r*o,r*u)}):this.movingList.forEach(function(t){var s=(0,i.default)(t,4),f=s[0],l=s[1],p=s[2],h=s[3];n.drawImage(e,p,h,r*c,r*a,f,l,r*o,r*u)}),(r===this.zs||r===-this.zs)&&this.stopcount<60)return void this.stopcount++;this.stopcount=0,1===this.change&&r>=this.zs?this.change=-1:-1===this.change&&r<=-this.zs&&(this.change=1),this.flag+=this.change}},{key:"distroy",value:function(){cancelAnimationFrame(this.animahandle)}}]),t}();n.default=f},533:function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"canvas-warper"}},[e("canvas",{ref:"cvs",attrs:{id:"cvs"}})])},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};n.a=i}});