webpackJsonp([5],{435:function(t,e,n){"use strict";function i(t){r||n(525)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(508),a=n.n(s);for(var l in s)"default"!==l&&function(t){n.d(e,t,function(){return s[t]})}(l);var o=n(527),r=!1,u=n(24),c=i,f=u(a.a,o.a,!1,c,null,null);f.options.__file="src\\renderer\\components\\articles\\jsswaper.vue",e.default=f.exports},508:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[["测试1","welcome"],["测试2","welcome"],["测试3","welcome","测试","welcome","welcome","测试","welcome","welcome","测试","welcome"]];e.default={name:"jsswaper",title:"主页",data:function(){return{timeflg:null,lastleft:0,showTime:2,translateTime:1,totalTime:null,animaHandle:null,contents:i}},mounted:function(){this.showTime*=1e3,this.translateTime*=1e3,this.totalTime=this.showTime+this.translateTime,this.timeflg=(new Date).getTime(),this.$refs.swaper.style.left=0,this.update()},beforeDestroy:function(){cancelAnimationFrame(this.animaHandle)},methods:{update:function(){var t=this;this.animaHandle=requestAnimationFrame(function(e){return t.update()});var e=(new Date).getTime()-this.timeflg,n=-Math.floor(e/this.totalTime)%3*100,i=e%this.totalTime-this.showTime;n!==this.lastleft&&(this.lastleft=n,this.$refs.swaper.style.left=this.lastleft+"%"),i<0||(this.$refs.swaper.style.left=this.lastleft-i/10+"%")}}}},525:function(t,e,n){var i=n(526);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(23)("8a27eeba",i,!1)},526:function(t,e,n){e=t.exports=n(19)(void 0),e.push([t.i,"\n.container {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  border: 1px solid #bbb;\n  -webkit-box-shadow: 0 2px 6px rgba(100, 100, 100, 0.8);\n          box-shadow: 0 2px 6px rgba(100, 100, 100, 0.8);\n  margin: auto;\n  overflow: hidden;\n}\n.swaper {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 400%;\n  overflow: hidden;\n}\n.swaper .sub {\n  text-align: center;\n  display: inline;\n  float: left;\n  width: 25%;\n  height: 100%;\n}\n",""])},527:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{ref:"swaper",staticClass:"swaper"},[t._l(t.contents,function(e){return n("div",{staticClass:"sub"},t._l(e,function(e){return n("div",[t._v(t._s(e))])}))}),t._v(" "),n("div",{staticClass:"sub sub1"},t._l(t.contents[0],function(e){return n("div",[t._v(t._s(e))])}))],2)])},s=[];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a}});