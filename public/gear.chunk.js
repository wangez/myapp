webpackJsonp([3],{436:function(t,e,n){"use strict";function r(t){a||n(537)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(514),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);var u=n(540),a=!1,s=n(24),f=r,h=s(o.a,u.a,!1,f,null,null);h.options.__file="src\\renderer\\components\\articles\\gear.vue",e.default=h.exports},446:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},447:function(t,e,n){t.exports=!n(453)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},448:function(t,e,n){var r=n(451),i=n(461);t.exports=n(447)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},449:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},451:function(t,e,n){var r=n(452),i=n(467),o=n(468),c=Object.defineProperty;e.f=n(447)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},452:function(t,e,n){var r=n(449);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},453:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},459:function(t,e,n){var r=n(446),i=n(151),o=n(465),c=n(448),u=function(t,e,n){var a,s,f,h=t&u.F,l=t&u.G,d=t&u.S,p=t&u.P,v=t&u.B,g=t&u.W,y=l?i:i[e]||(i[e]={}),b=y.prototype,w=l?r:d?r[e]:(r[e]||{}).prototype;l&&(n=e);for(a in n)(s=!h&&w&&void 0!==w[a])&&a in y||(f=s?w[a]:n[a],y[a]=l&&"function"!=typeof w[a]?n[a]:v&&s?o(f,r):g&&w[a]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):p&&"function"==typeof f?o(Function.call,f):f,p&&((y.virtual||(y.virtual={}))[a]=f,t&u.R&&b&&!b[a]&&c(b,a,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},460:function(t,e,n){var r=n(449),i=n(446).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},461:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},463:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},465:function(t,e,n){var r=n(466);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},466:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},467:function(t,e,n){t.exports=!n(447)&&!n(453)(function(){return 7!=Object.defineProperty(n(460)("div"),"a",{get:function(){return 7}}).a})},468:function(t,e,n){var r=n(449);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},472:function(t,e,n){"use strict";e.__esModule=!0;var r=n(485),i=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},485:function(t,e,n){t.exports={default:n(486),__esModule:!0}},486:function(t,e,n){n(487);var r=n(151).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},487:function(t,e,n){var r=n(459);r(r.S+r.F*!n(447),"Object",{defineProperty:n(451).f})},514:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(539),i=function(t){return t&&t.__esModule?t:{default:t}}(r),o=function(t,e){return t<e?t:e};e.default={name:"gear",data:function(){return{canvas:null,ctx:null,width:null,height:null,gear:null,animaHandle:null}},mounted:function(){var t=this,e=this.canvas=this.$refs.cvs,n=this.ctx=e.getContext("2d"),r=e.getBoundingClientRect(),c=this.width=e.width=r.width,u=this.height=e.height=r.height,a=o(c,u);this.gear=new i.default({ctx:n,R:a/5,r:a/5*.9,x:Math.floor(c/2),y:Math.floor(u/2),teethNumber:20,rr:a/5*.1,childs:[{cTeethNumber:15,cAngle:2,cbegin:9.2,cR:a/8,cr:a/8*.9,crr:a/8*.1,cChilds:[{cTeethNumber:8,cAngle:11,cbegin:-9,cR:a/14,cr:a/14*.9,crr:a/14*.1}]},{cTeethNumber:10,cAngle:7,cbegin:-7,cR:a/10,cr:a/10*.9,crr:a/10*.1}]}),e.addEventListener("mousemove",function(e){t.gear.onthis(e.offsetX,e.offsetY)}),this.anima()},beforeDestroy:function(){cancelAnimationFrame(this.animaHandle)},methods:{anima:function(){var t=this;this.ctx.clearRect(0,0,this.width,this.height),this.gear.draw(),this.gear.update(1/Math.PI),this.animaHandle=requestAnimationFrame(function(e){return t.anima()})}}}},537:function(t,e,n){var r=n(538);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(23)("53cffb79",r,!1)},538:function(t,e,n){e=t.exports=n(19)(void 0),e.push([t.i,"\n#canvas-warper {\n  position: absolute;\n  top: 3em;\n  bottom: 0;\n  width: 100%;\n}\n#canvas-warper #cvs {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n",""])},539:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(463),o=r(i),c=n(472),u=r(c),a=function(){function t(e){var n=e.ctx,r=e.R,i=e.r,c=e.x,u=e.y,a=e.teethNumber,s=e.Ratio,f=void 0===s?.2:s,h=e.ratio,l=void 0===h?.7:h,d=e.begin,p=void 0===d?0:d,v=e.rr,g=e.childs;(0,o.default)(this,t),this.ctx=n,this.R=r,this.r=i,this.x=c,this.y=u,this.teethNumber=a,this.teechAngle=360/a,this.Ratio=f,this.ratio=l,this.Angle=this.teechAngle*f,this.angle=this.teechAngle*l,this.disAngle=(this.angle-this.Angle)/2,this.begin=p,this.rr=v,g&&(this.childs=g.map(function(e){var o=e.cAngle,a=e.cR,s=e.cr,f=e.cTeethNumber,h=e.crr,l=e.cChilds,d=e.cbegin,p=(o-3)/12*360/180*Math.PI,v=s+i+(a-s>r-i?a-s:r-i);return new t({ctx:n,R:a,r:s,x:c+v*Math.cos(p),y:u+v*Math.sin(p),teethNumber:f,begin:d,rr:h,childs:l})}))}return(0,u.default)(t,[{key:"path",value:function(){var t=this.ctx,e=this.R,n=this.r,r=this.x,i=this.y,o=this.teethNumber,c=this.teechAngle,u=this.Angle,a=this.angle,s=this.disAngle,f=this.begin,h=Math.cos,l=Math.sin,d=Math.PI/180;t.beginPath();for(var p=0;p<o;p++){var v=c*p+f;t.lineTo(n*h(v*d)+r,n*l(v*d)+i),t.lineTo(e*h((v+s)*d)+r,e*l((v+s)*d)+i),t.lineTo(e*h((v+s+u)*d)+r,e*l((v+s+u)*d)+i),t.lineTo(n*h((v+a)*d)+r,n*l((v+a)*d)+i)}t.closePath()}},{key:"draw",value:function(){var t=this.ctx,e=this.rr,n=this.x,r=this.y,i=this.childs;this.path(),this.heightShow?(t.fillStyle="#333",t.fill(),e&&(t.beginPath(),t.arc(n,r,e,0,2*Math.PI),t.stroke()),t.fillStyle="#ddd",e&&(t.beginPath(),t.arc(n,r,e,0,2*Math.PI),t.stroke()),t.fill()):(t.stroke(),e&&(t.beginPath(),t.arc(n,r,e,0,2*Math.PI),t.stroke())),i&&i.forEach(function(t){return t.draw()})}},{key:"update",value:function(t){var e=this;this.begin+=t,this.childs&&this.childs.forEach(function(n){n.update(-t/e.teechAngle*n.teechAngle)})}},{key:"onthis",value:function(t,e){this.path(),this.ctx.isPointInPath(t,e)?this.heightShow=!0:this.heightShow=!1,this.childs&&this.childs.forEach(function(n){return n.onthis(t,e)})}}]),t}();e.default=a},540:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"canvas-warper"}},[n("canvas",{ref:"cvs",attrs:{id:"cvs"}})])},i=[];r._withStripped=!0;var o={render:r,staticRenderFns:i};e.a=o}});