/*! custobar.js v1.9.4 | Custobar Ltd. <info@custobar.com> (https://www.custobar.com/) | http://www.custobar.com/ */!function(){"use strict";var t="development"===(window||{}).ENV&&window.console?console:{log:function(){}};function e(t,e){var n={};for(var o in t||{})n[o]=t[o];for(var i in e||{})n[i]=e[i];return n}var n=null;var o={setJson:function(t,e,o){var i=encodeURIComponent,r=new Date;r.setDate(r.getDate()+o);var s=i(t)+"="+i(JSON.stringify(e))+";path=/;expires="+r.toUTCString(),u=s+";Secure;SameSite=None";null===n&&(document.cookie=u,n=!!document.cookie),document.cookie=n?u:s},getJson:function(t){var e,n=decodeURIComponent;return(document.cookie||"").split("; ").map((function(o){var i=o.split("=");if(n(i[0])===t){e=n(i[1]);try{e=JSON.parse(e)}catch(t){}}})),e}};function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(r=o.key,s=void 0,s=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(r,"string"),"symbol"===i(s)?s:String(s)),o)}var r,s}var s=["customer_id","customer_token"],u=function(){function n(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.baseURL=t,this.baseQuery=e||{}}var o,i,u;return o=n,(i=[{key:"getQueryString",value:function(t,n){var o=(new Date).getTime()+"-"+parseInt(9999*Math.random()),i=e(this.baseQuery,e(t,{_:o})),r="",u="?";for(var a in i)n&&s.indexOf(a)>=0||(r+=u+encodeURIComponent(a)+"="+encodeURIComponent(i[a]),u="&");return r}},{key:"xmlHTTPRequest",value:function(){return new XMLHttpRequest}},{key:"_request",value:function(e,n,o){var i=this.baseURL+n+this.getQueryString(o.query,o.anonymous),r=this.xmlHTTPRequest();r.withCredentials=!0,r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(t.log("request done ("+r.status+") ",i),200===r.status&&o.onSuccess&&o.onSuccess(JSON.parse(r.responseText)))},r.open(e,i,!0),r.setRequestHeader("Content-Type","application/json"),r.send(null==o.data?null:JSON.stringify({payload:o.data}))}},{key:"get",value:function(t,e){return this._request("GET",t,e)}},{key:"post",value:function(t,e){return this._request("POST",t,e)}}])&&r(o.prototype,i),u&&r(o,u),Object.defineProperty(o,"prototype",{writable:!1}),n}();function a(t,e){if(t){var n=null,o=!1;window.addEventListener("resize",i),window.addEventListener("scroll",i)}function i(){var r=(new Date).getTime();n&&r<n+100||(n=r,!o&&function(t,e){var n=window.innerHeight||0,o=window.innerWidth||0,i=t.getBoundingClientRect();return r=i,s={x:0,y:0,width:o,height:n},!(s.x>r.x+r.width||s.x+s.width<r.x||s.y>r.y+r.height||s.y+s.height<r.y);var r,s}(t)&&(o=!0,window.removeEventListener("resize",i),window.removeEventListener("scroll",i),e()))}}function c(t,e,n){t&&t.length>0&&e.get("/banners",{query:{slots:t.map((function(t){return t[0]})).join()},onSuccess:function(e){t.map((function(t){var o=(e.banners||{})[t[0]];o&&function(t,e,n){for(var o=e.banner_id,i=document.querySelectorAll(t),r=i.length-1;r>=0;--r){var s=i[r];s.innerHTML=e.html,s.setAttribute("data-id",o),s.style.opacity=1,s.addEventListener("click",(function(){return n.stash({type:"BANNER_CLICK",banner_id:o})})),a(s,(function(){return n.push({type:"BANNER_VIEW",banner_id:o})}))}}(t[1],o,n)}))}})}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(i=o.key,r=void 0,r=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"),"symbol"===l(r)?r:String(r)),o)}var i,r}var p="cb_event",d={url:"https://api.custobar.com/api"},h=function(){function n(t,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.config=t,this._path=o.pathname,this._query=function(t){var e=decodeURIComponent,n={},o=t.indexOf("?")+1;if(o){var i=t.indexOf("#"),r=i<0?void 0:i;t.substring(o,r).split("&").map((function(t){var o=t.indexOf("=");o>=0&&(n[e(t.substr(0,o))]=e(t.substr(o+1)))}))}return n}(o.search),this._pushed=Array.isArray(i)?i:[],this._stashed=[];var r={},s=t._companyToken;s.length>=32?(this._apiEndpoint="/js/track_event",r.access_token=s):(this._apiEndpoint="/track_event",r.company_token=s,t.datasourceId&&(r.datasource_id=t.datasourceId)),this._api=new u(e(d,t.endpoint).url,r)}var i,r,s;return i=n,(r=[{key:"setCBCookie",value:function(t){o.setJson("cb",t,365)}},{key:"setCustomerToken",value:function(t){return!(!t||"--cookie--"===t||(this.setCBCookie({token:t}),this.customerIdentification={customer_token:t},this._api.baseQuery.customer_token=t,0))}},{key:"setCustomerId",value:function(t){return!!t&&(this.setCBCookie({customerId:t}),this.customerIdentification={customer_id:t},this._api.baseQuery.customer_id=t,!0)}},{key:"initializeCustomer",value:function(){var t=this.config._urlToken||"cb",e=o.getJson("cb"),n=this._query[t];return n&&"cb-check-"==n.substring(0,9)&&(this._api.post("/js/check-js-validity/"+n,{}),n=void 0),this.setCustomerToken(this.config.customerToken)||this.setCustomerId(this.config.customerId)||this.setCustomerToken(n)||"object"==l(e)&&this.setCustomerId(e.customerId)||"object"==l(e)&&this.setCustomerToken(e.token)||"string"==typeof e&&this.setCustomerToken(e)}},{key:"initialize",value:function(){var e=this;if(this.initializeCustomer()){c(this.config._banners,this._api,this);var n=o.getJson(p);Array.isArray(n)?o.setJson(p,[],-1):n=[];for(var i=function(t,e,n,o,i){var r={};for(var s in o&&(r.product_id=o),["utm_campaign","utm_content","utm_medium","utm_source"].map((function(t){e[t]&&(r[t]=e[t])})),n&&n.map((function(e){if(!r.label){var n=e[1];if("^"===n||"/"===n)"/"===t&&(r.label=e[0]);else{var o=new RegExp(n,"i");(t.substr(1).match(o)||t.match(o))&&(r.label=e[0])}}})),r)return r.type="BROWSE",r.path=t,[r];return[]}(this._path,this._query,this.config._pages,this.config.productId),r=n.concat(this._pushed).concat(i),s=[],u=[],a=0,l=r[0];a<r.length;l=r[a+=1])l._options&&l._options.anonymous?s.push(l):u.push(l);u.length>0&&this._send(u.map((function(t){return e.enrich(t)}))),s.length>0&&this._send(s.map((function(t){return e.enrich(t)})),{anonymous:!0})}else t.log("Custobar: No customer id or token found.")}},{key:"stash",value:function(t){this._stashed.push(this.enrich(t)),o.setJson(p,this._stashed,1)}},{key:"enrich",value:function(t){if(t._options&&t._options.anonymous){var n=e({},t);return delete n._options,n}return e(t,this.customerIdentification)}},{key:"push",value:function(t){var e=void 0;t._options&&t._options.anonymous&&(e={anonymous:!0}),this._send([this.enrich(t)],e)}},{key:"_send",value:function(e,n){(e=e.filter((function(e){if(e&&e.type)return!0;t.log('required field "type" is missing:',e)}))).length>0&&this._api.post(this._apiEndpoint,{data:e,anonymous:!(!n||!n.anonymous)})}}])&&f(i.prototype,r),s&&f(i,s),Object.defineProperty(i,"prototype",{writable:!1}),n}();window.cstbr=new h(window.cstbrConfig,window.location,window.cstbr),window.cstbr.initialize()}();