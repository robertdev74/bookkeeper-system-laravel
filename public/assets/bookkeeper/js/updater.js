!function(t){var e={};function r(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=44)}({44:function(t,e,r){t.exports=r(45)},45:function(t,e){!function(t){"use strict";function e(){this._init()}e.prototype={_init:function(){this.el=$("#updateIndicator"),this.progressBar=$("#updateProgress"),this.progressMessage=$("#updateMessage"),this.starturl=this.el.data("starturl"),this.completeurl=this.el.data("completeurl"),this._start()},_start:function(){this._request(this.starturl)},_next:function(t){this.progressMessage.text(t.message),t.next?this._request(t.next):this._complete()},_request:function(t){var e=this;axios.post(t).then(function(t){e._setProgress(t.data.progress),e._next(t.data)}).catch(function(t){console.log(t)})},_setProgress:function(t){this.progressBar.attr("value",t.toString()),this.progressBar.text(t.toString()+"%")},_complete:function(){t.location=this.completeurl}},t.Updater=e}(window)}});