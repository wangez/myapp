webpackJsonp([2],{441:function(t,e,n){"use strict";function o(t){s||n(552)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(516),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);var a=n(564),s=!1,f=n(24),c=o,l=f(r.a,a.a,!1,c,null,null);l.options.__file="src\\renderer\\components\\games\\tower\\index.vue",e.default=l.exports},442:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},443:function(t,e,n){t.exports=!n(449)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},444:function(t,e,n){var o=n(447),i=n(457);t.exports=n(443)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},445:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},447:function(t,e,n){var o=n(448),i=n(463),r=n(464),u=Object.defineProperty;e.f=n(443)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},448:function(t,e,n){var o=n(445);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},449:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},451:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},452:function(t,e,n){var o=n(470),i=n(453);t.exports=function(t){return o(i(t))}},453:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},454:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},455:function(t,e,n){var o=n(442),i=n(151),r=n(461),u=n(444),a=function(t,e,n){var s,f,c,l=t&a.F,d=t&a.G,h=t&a.S,p=t&a.P,v=t&a.B,m=t&a.W,x=d?i:i[e]||(i[e]={}),y=x.prototype,g=d?o:h?o[e]:(o[e]||{}).prototype;d&&(n=e);for(s in n)(f=!l&&g&&void 0!==g[s])&&s in x||(c=f?g[s]:n[s],x[s]=d&&"function"!=typeof g[s]?n[s]:v&&f?r(c,o):m&&g[s]==c?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(c):p&&"function"==typeof c?r(Function.call,c):c,p&&((x.virtual||(x.virtual={}))[s]=c,t&a.R&&y&&!y[s]&&u(y,s,c)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},456:function(t,e,n){var o=n(445),i=n(442).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},457:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},458:function(t,e,n){var o=n(465)("keys"),i=n(466);t.exports=function(t){return o[t]||(o[t]=i(t))}},459:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},460:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},461:function(t,e,n){var o=n(462);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},462:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},463:function(t,e,n){t.exports=!n(443)&&!n(449)(function(){return 7!=Object.defineProperty(n(456)("div"),"a",{get:function(){return 7}}).a})},464:function(t,e,n){var o=n(445);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},465:function(t,e,n){var o=n(442),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},466:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},467:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},468:function(t,e,n){"use strict";e.__esModule=!0;var o=n(481),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}()},470:function(t,e,n){var o=n(460);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},472:function(t,e,n){var o=n(473),i=n(467);t.exports=Object.keys||function(t){return o(t,i)}},473:function(t,e,n){var o=n(451),i=n(452),r=n(474)(!1),u=n(458)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),s=0,f=[];for(n in a)n!=u&&o(a,n)&&f.push(n);for(;e.length>s;)o(a,n=e[s++])&&(~r(f,n)||f.push(n));return f}},474:function(t,e,n){var o=n(452),i=n(475),r=n(476);t.exports=function(t){return function(e,n,u){var a,s=o(e),f=i(s.length),c=r(u,f);if(t&&n!=n){for(;f>c;)if((a=s[c++])!=a)return!0}else for(;f>c;c++)if((t||c in s)&&s[c]===n)return t||c||0;return!t&&-1}}},475:function(t,e,n){var o=n(454),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},476:function(t,e,n){var o=n(454),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},478:function(t,e,n){var o=n(453);t.exports=function(t){return Object(o(t))}},481:function(t,e,n){t.exports={default:n(482),__esModule:!0}},482:function(t,e,n){n(483);var o=n(151).Object;t.exports=function(t,e,n){return o.defineProperty(t,e,n)}},483:function(t,e,n){var o=n(455);o(o.S+o.F*!n(443),"Object",{defineProperty:n(447).f})},484:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createDom=void 0;var o=n(555),i=function(t){return t&&t.__esModule?t:{default:t}}(o),r=function(t,e){var n=document.createElement(t);return e&&(0,i.default)(e).forEach(function(t){return n.style[t]=e[t]}),n};e.createDom=r},516:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(554),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"advert",data:function(){return{moving:!0}},mounted:function(){new i.default(this.$refs.tower)}}},552:function(t,e,n){var o=n(553);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(23)("a64ab8d0",o,!1)},553:function(t,e,n){e=t.exports=n(19)(void 0),e.push([t.i,"\n#tower {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 100;\n}\n",""])},554:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(459),r=o(i),u=n(484),a=n(559),s=o(a),f=n(562),c=o(f),l=function t(e){(0,r.default)(this,t);var n=this.rect=e.getBoundingClientRect(),o=n.width,i=n.height,a=(0,u.createDom)("div",{position:"absolute",width:o+"px",height:i+"px",backgroundColor:"#fff"});e.appendChild(a);var f=new s.default;f.setName("访客"),a.appendChild(f.dom);var l=new c.default;a.appendChild(l.dom)};e.default=l},555:function(t,e,n){t.exports={default:n(556),__esModule:!0}},556:function(t,e,n){n(557),t.exports=n(151).Object.keys},557:function(t,e,n){var o=n(478),i=n(472);n(558)("keys",function(){return function(t){return i(o(t))}})},558:function(t,e,n){var o=n(455),i=n(151),r=n(449);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],u={};u[t]=e(n),o(o.S+o.F*r(function(){n(1)}),"Object",u)}},559:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(459),r=o(i),u=n(468),a=o(u),s=n(484),f=n(560),c=o(f),l=n(561),d=o(l),h=function(){function t(){(0,r.default)(this,t),this.hp=0,this.maxhp=0,this.money=0,this.floor=0,this.score=0;var e=this.dom=(0,s.createDom)("div",{position:"absolute",top:0,left:0,height:"60px",width:"100%",backgroundColor:"rgb(62, 73, 78)",zIndex:99}),n=this.nameDom=(0,s.createDom)("div",{float:"left",height:"60px",lineHeight:"60px",fontSize:"30px",color:"#fff",margin:"0 20px"}),o=this.hpDom=(0,s.createDom)("div",{background:"url("+c.default+") 0 50% no-repeat",backgroundSize:"35px 30px",float:"left",height:"60px",lineHeight:"60px",fontSize:"26px",color:"red",padding:"0 0 0 40px",margin:"0 20px"}),i=this.moneyDom=(0,s.createDom)("div",{background:"url("+d.default+") 0 50% no-repeat",backgroundSize:"35px 30px",float:"left",height:"60px",lineHeight:"60px",fontSize:"26px",color:"#f9f554",padding:"0 0 0 40px",margin:"0 20px"}),u=this.levelDom=(0,s.createDom)("div",{float:"left",height:"60px",lineHeight:"60px",fontSize:"26px",color:"#f9f554",margin:"0 20px"});this.updateHpDom(),this.updateMoneyDom(),this.updateLevelDom(),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(u)}return(0,a.default)(t,[{key:"setName",value:function(t){this.name=t,this.nameDom.innerHTML=t}},{key:"changeMaxHp",value:function(t){t>0&&(this.hp+=t),this.maxhp+=t,this.updateHpDom()}},{key:"changeHp",value:function(t){this.hp+=t,this.updateHpDom()}},{key:"updateHpDom",value:function(){this.hpDom.innerHTML=this.hp+"/"+this.maxhp}},{key:"changeMoney",value:function(t){if(this.money+t<0)throw new Error("金钱数量不能设置为负数");this.money+=t,this.updateMoneyDom()}},{key:"updateMoneyDom",value:function(){this.moneyDom.innerHTML=this.money}},{key:"changeFloor",value:function(t){0===t?this.floor=0:this.floor+=t,this.changeScore(0)}},{key:"changeScore",value:function(t){0===t?this.score=0:this.score+=t}},{key:"updateLevelDom",value:function(){this.levelDom.innerHTML=this.floor+"层"+this.maxhp+"分"}}]),t}();e.default=h},560:function(t,e,n){t.exports=n.p+"public/imgs/heart--assets.png"},561:function(t,e,n){t.exports=n.p+"public/imgs/money--assets.png"},562:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(459),r=o(i),u=n(484),a=n(563),s=o(a),f=function t(){var e=this;(0,r.default)(this,t),this.hover=null,this.selections={};var n=this.dom=(0,u.createDom)("div",{position:"absolute",height:"100%",width:"100%",backgroundColor:"#888"});n.classList.add("choose");var o=this.selections.normal=new s.default({id:"normal",top:"25%",height:"25%",width:"20%",left:"4%"}).setContent("挑战普通怪物"),i=this.selections.advanced=new s.default({id:"advanced",top:"25%",height:"25%",width:"20%",left:"28%"}).setContent("挑战高级怪物"),a=this.selections.elitist=new s.default({id:"elitist",top:"25%",height:"25%",width:"20%",left:"52%"}).setContent("挑战精英怪物"),f=this.selections.boss=new s.default({id:"boss",top:"25%",height:"25%",width:"20%",left:"76%"}).setContent("挑战boss"),c=this.selections.shop=new s.default({id:"shop",top:"55%",height:"25%",width:"20%",left:"4%"}).setContent("商店"),l=this.selections.smithy=new s.default({id:"smithy",top:"55%",height:"25%",width:"20%",left:"28%"}).setContent("铁匠铺"),d=this.selections.hotel=new s.default({id:"hotel",top:"55%",height:"25%",width:"20%",left:"52%"}).setContent("旅馆"),h=this.selections.chat=new s.default({id:"chat",top:"55%",height:"25%",width:"20%",left:"76%"}).setContent("聊天室");n.appendChild(o.dom),n.appendChild(i.dom),n.appendChild(a.dom),n.appendChild(f.dom),n.appendChild(c.dom),n.appendChild(l.dom),n.appendChild(d.dom),n.appendChild(h.dom),n.addEventListener("mousemove",function(t){t.stopPropagation();var n=t.target;if(!n.classList.contains("selection")){if(!n.classList.contains("choose"))return;e.hover&&e.hover.reset(),e.hover=null}var o=n.getAttribute("id"),i=e.selections[o];if(i&&e.hover!==i){e.hover&&e.hover.reset(),e.hover=i;var r=i.dom.getBoundingClientRect(),u=r.top,a=r.left,s=r.width,f=r.height;i.dom.style.top=u-.05*f+"px",i.dom.style.left=a-.05*s+"px",i.dom.style.width=1.1*s+"px",i.dom.style.height=1.1*f+"px"}})};e.default=f},563:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(459),r=o(i),u=n(468),a=o(u),s=n(484),f=function(){function t(e){var n=e.top,o=e.left,i=e.width,u=e.height,a=e.id,f=e.callback;(0,r.default)(this,t),this.top=n,this.left=o,this.width=i,this.height=u,this.hover=!1;var c=this.dom=(0,s.createDom)("div",{position:"absolute",top:n,left:o,height:u,width:i,boxSizing:"border-box",textAlign:"center",padding:"1em 0 0 0",border:"1px solid #fff",boxShadow:"0 0 2px 2px #fff"});c.setAttribute("id",a),c.classList.add("selection"),document.addEventListener("click",f)}return(0,a.default)(t,[{key:"setContent",value:function(t){return this.dom.innerHTML=t,this}},{key:"reset",value:function(){var t=this.dom,e=this.top,n=this.left,o=this.width,i=this.height;return t.style.top=e,t.style.left=n,t.style.width=o,t.style.height=i,this}}]),t}();e.default=f},564:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"tower",attrs:{id:"tower"}})},i=[];o._withStripped=!0;var r={render:o,staticRenderFns:i};e.a=r}});