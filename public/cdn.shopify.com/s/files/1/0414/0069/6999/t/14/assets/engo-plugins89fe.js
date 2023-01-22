/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */(function(i,h,o){var u=/\+/g;function s(d){return d}function y(d){return decodeURIComponent(d.replace(u," "))}var n=i.cookie=function(d,c,p){if(c!==o){if(p=i.extend({},n.defaults,p),c===null&&(p.expires=-1),typeof p.expires=="number"){var g=p.expires,S=p.expires=new Date;S.setDate(S.getDate()+g)}return c=n.json?JSON.stringify(c):String(c),h.cookie=[encodeURIComponent(d),"=",n.raw?c:encodeURIComponent(c),p.expires?"; expires="+p.expires.toUTCString():"",p.path?"; path="+p.path:"",p.domain?"; domain="+p.domain:"",p.secure?"; secure":""].join("")}for(var t=n.raw?s:y,m=h.cookie.split("; "),b=0,I=m.length;b<I;b++){var e=m[b].split("=");if(t(e.shift())===d){var a=t(e.join("="));return n.json?JSON.parse(a):a}}return null};n.defaults={},i.removeCookie=function(d,c){return i.cookie(d)!==null?(i.cookie(d,null,c),!0):!1}})(jQuery,document);/*!
Countdown
*/jQuery(document).ready(function(i){i.fn.ENGO_CountDown=function(h){return this.each(function(){new i.ENGO_CountDown(this,h)})},i.ENGO_CountDown=function(h,o){if(this.options=i.extend({autoStart:!0,LeadingZero:!0,DisplayFormat:"<div><span>%%D%%</span> Days</div><div><span>%%H%%</span> Hours</div><div><span>%%M%%</span> Mins</div><div><span>%%S%%</span> Secs</div>",FinishMessage:"Expired",CountActive:!0,TargetDate:null},o||{}),!(this.options.TargetDate==null||this.options.TargetDate=="")){this.timer=null,this.element=h,this.CountStepper=-1,this.CountStepper=Math.ceil(this.CountStepper),this.SetTimeOutPeriod=(Math.abs(this.CountStepper)-1)*1e3+990;var u=new Date(this.options.TargetDate),s=new Date;this.CountStepper>0?ddiff=new Date(s-u):ddiff=new Date(u-s),gsecs=Math.floor(ddiff.valueOf()/1e3),this.CountBack(gsecs,this)}},i.ENGO_CountDown.fn=i.ENGO_CountDown.prototype,i.ENGO_CountDown.fn.extend=i.ENGO_CountDown.extend=i.extend,i.ENGO_CountDown.fn.extend({calculateDate:function(h,o,u){var s=(Math.floor(h/o)%u).toString();return this.options.LeadingZero&&s.length<2&&(s="0"+s),"<b>"+s+"</b>"},CountBack:function(h,o){if(h<0){o.element.innerHTML='<div class="labelexpired"> '+o.options.FinishMessage+"</div>";return}clearInterval(o.timer),DisplayStr=o.options.DisplayFormat.replace(/%%D%%/g,o.calculateDate(h,86400,1e5)),DisplayStr=DisplayStr.replace(/%%H%%/g,o.calculateDate(h,3600,24)),DisplayStr=DisplayStr.replace(/%%M%%/g,o.calculateDate(h,60,60)),DisplayStr=DisplayStr.replace(/%%S%%/g,o.calculateDate(h,1,60)),o.element.innerHTML=DisplayStr,o.options.CountActive&&(o.timer=null,o.timer=setTimeout(function(){o.CountBack(h+o.CountStepper,o)},o.SetTimeOutPeriod))}}),i(document).ready(function(){i('[data-countdown="section-countdown"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:'<li class="list-inline-item mr-0"> <p class="mb-0">%%D%%</p> <span>day</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%H%%</p> <span>hours</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%M%%</p> <span>mins</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%S%%</p> <span>secs</span> </li>',FinishMessage:"Expired"})})}),i(document).ready(function(){i('[data-countdown="section-countdown-v2"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:'<li class="list-inline-item mr-0"> <p class="mb-0">%%D%%</p> <span>day</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%H%%</p> <span>hours</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%M%%</p> <span>mins</span> </li> <li class="list-inline-item mr-0"> <p class="mb-0">%%S%%</p> <span>secs</span> </li>',FinishMessage:"Expired"})})}),i(document).ready(function(){i('[data-countdown="countdown"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:`<div class="countdown-times"><div class="day distance"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class="hours distance"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class="minutes distance"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class="seconds distance"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>`,FinishMessage:"Expired"})})}),i(document).ready(function(){i('[data-countdown="countdown-hd-1"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:`<div class="countdown-times"><div class="day distance"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class="hours distance"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class="minutes distance"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class="seconds distance"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>`,FinishMessage:"Expired"})})}),i(document).ready(function(){i('[data-countdown="countdown-hd-2"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:`<div class="countdown-times"><div class="day distance"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class="hours distance"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class="minutes distance"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class="seconds distance"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>`,FinishMessage:"Expired"})})}),i(document).ready(function(){i('[data-countdown="countdown-hd-3"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:`<div class="countdown-times"><div class="day distance"><div class='number'>%%D%%</div> <div class='text'>days </div></div><div class="hours distance"><div class='number'>%%H%%</div><div class='text'> <div class='text'>hours </div></div></div><div class="minutes distance"><div class='number'>%%M%%</div><div class='text'> mins</div> </div><div class="seconds distance"><div class='number'>%%S%%</div> <div class='text'>secs</div> </div></div>`,FinishMessage:"Expired"})})}),i(document).ready(function(){i('[data-countdown="countdown-v1"]').each(function(h,o){var u=i(this),s=u.data("date").split("-");u.ENGO_CountDown({TargetDate:s[0]+"/"+s[1]+"/"+s[2]+" "+s[3]+":"+s[4]+":"+s[5],DisplayFormat:'<li><span id="days">%%D%%</span>Days</li><li><span id="hours">%%H%%</span>Hours</li><li><span id="minutes">%%M%%</span>Mins</li><li><span id="seconds">%%S%%</span>Sec</li>',FinishMessage:"<li><span>00</span>Days</li><li><span>00</span>Hours</li><li><span>00</span>Mins</li><li><span>00</span>Sec</li>"})})})});/*!
History  
*/typeof JSON!="object"&&(JSON={}),function(){"use strict";function f(i){return i<10?"0"+i:i}function quote(i){return escapable.lastIndex=0,escapable.test(i)?'"'+i.replace(escapable,function(h){var o=meta[h];return typeof o=="string"?o:"\\u"+("0000"+h.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+i+'"'}function str(i,h){var o,u,s,y,n=gap,d,c=h[i];switch(c&&typeof c=="object"&&typeof c.toJSON=="function"&&(c=c.toJSON(i)),typeof rep=="function"&&(c=rep.call(h,i,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,d=[],Object.prototype.toString.apply(c)==="[object Array]"){for(y=c.length,o=0;o<y;o+=1)d[o]=str(o,c)||"null";return s=d.length===0?"[]":gap?`[
`+gap+d.join(`,
`+gap)+`
`+n+"]":"["+d.join(",")+"]",gap=n,s}if(rep&&typeof rep=="object")for(y=rep.length,o=0;o<y;o+=1)typeof rep[o]=="string"&&(u=rep[o],s=str(u,c),s&&d.push(quote(u)+(gap?": ":":")+s));else for(u in c)Object.prototype.hasOwnProperty.call(c,u)&&(s=str(u,c),s&&d.push(quote(u)+(gap?": ":":")+s));return s=d.length===0?"{}":gap?`{
`+gap+d.join(`,
`+gap)+`
`+n+"}":"{"+d.join(",")+"}",gap=n,s}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(i){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(i){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(i,h,o){var u;if(gap="",indent="",typeof o=="number")for(u=0;u<o;u+=1)indent+=" ";else typeof o=="string"&&(indent=o);if(rep=h,!h||typeof h=="function"||typeof h=="object"&&typeof h.length=="number")return str("",{"":i});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(i,h){var o,u,s=i[h];if(s&&typeof s=="object")for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(u=walk(s,o),u!==void 0?s[o]=u:delete s[o]);return reviver.call(i,h,s)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(i){return"\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(i,h){"use strict";var o=i.History=i.History||{},u=i.jQuery;if(typeof o.Adapter!="undefined")throw new Error("History.js Adapter has already been loaded...");o.Adapter={bind:function(s,y,n){u(s).bind(y,n)},trigger:function(s,y,n){u(s).trigger(y,n)},extractEventData:function(s,y,n){var d=y&&y.originalEvent&&y.originalEvent[s]||n&&n[s]||h;return d},onDomLoad:function(s){u(s)}},typeof o.init!="undefined"&&o.init()}(window),function(i,h){"use strict";var o=i.document,u=i.setTimeout||u,s=i.clearTimeout||s,y=i.setInterval||y,n=i.History=i.History||{};if(typeof n.initHtml4!="undefined")throw new Error("History.js HTML4 Support has already been loaded...");n.initHtml4=function(){if(typeof n.initHtml4.initialized!="undefined")return!1;n.initHtml4.initialized=!0,n.enabled=!0,n.savedHashes=[],n.isLastHash=function(d){var c=n.getHashByIndex(),p;return p=d===c,p},n.isHashEqual=function(d,c){return d=encodeURIComponent(d).replace(/%25/g,"%"),c=encodeURIComponent(c).replace(/%25/g,"%"),d===c},n.saveHash=function(d){return n.isLastHash(d)?!1:(n.savedHashes.push(d),!0)},n.getHashByIndex=function(d){var c=null;return typeof d=="undefined"?c=n.savedHashes[n.savedHashes.length-1]:d<0?c=n.savedHashes[n.savedHashes.length+d]:c=n.savedHashes[d],c},n.discardedHashes={},n.discardedStates={},n.discardState=function(d,c,p){var g=n.getHashByState(d),S;return S={discardedState:d,backState:p,forwardState:c},n.discardedStates[g]=S,!0},n.discardHash=function(d,c,p){var g={discardedHash:d,backState:p,forwardState:c};return n.discardedHashes[d]=g,!0},n.discardedState=function(d){var c=n.getHashByState(d),p;return p=n.discardedStates[c]||!1,p},n.discardedHash=function(d){var c=n.discardedHashes[d]||!1;return c},n.recycleState=function(d){var c=n.getHashByState(d);return n.discardedState(d)&&delete n.discardedStates[c],!0},n.emulated.hashChange&&(n.hashChangeInit=function(){n.checkerFunction=null;var d="",c,p,g,S,t=Boolean(n.getHash());return n.isInternetExplorer()?(c="historyjs-iframe",p=o.createElement("iframe"),p.setAttribute("id",c),p.setAttribute("src","#"),p.style.display="none",o.body.appendChild(p),p.contentWindow.document.open(),p.contentWindow.document.close(),g="",S=!1,n.checkerFunction=function(){if(S)return!1;S=!0;var m=n.getHash(),b=n.getHash(p.contentWindow.document);return m!==d?(d=m,b!==m&&(g=b=m,p.contentWindow.document.open(),p.contentWindow.document.close(),p.contentWindow.document.location.hash=n.escapeHash(m)),n.Adapter.trigger(i,"hashchange")):b!==g&&(g=b,t&&b===""?n.back():n.setHash(b,!1)),S=!1,!0}):n.checkerFunction=function(){var m=n.getHash()||"";return m!==d&&(d=m,n.Adapter.trigger(i,"hashchange")),!0},n.intervalList.push(y(n.checkerFunction,n.options.hashChangeInterval)),!0},n.Adapter.onDomLoad(n.hashChangeInit)),n.emulated.pushState&&(n.onHashChange=function(d){var c=d&&d.newURL||n.getLocationHref(),p=n.getHashByUrl(c),g=null,S=null,t=null,m;return n.isLastHash(p)?(n.busy(!1),!1):(n.doubleCheckComplete(),n.saveHash(p),p&&n.isTraditionalAnchor(p)?(n.Adapter.trigger(i,"anchorchange"),n.busy(!1),!1):(g=n.extractState(n.getFullUrl(p||n.getLocationHref()),!0),n.isLastSavedState(g)?(n.busy(!1),!1):(S=n.getHashByState(g),m=n.discardedState(g),m?(n.getHashByIndex(-2)===n.getHashByState(m.forwardState)?n.back(!1):n.forward(!1),!1):(n.pushState(g.data,g.title,encodeURI(g.url),!1),!0))))},n.Adapter.bind(i,"hashchange",n.onHashChange),n.pushState=function(d,c,p,g){if(p=encodeURI(p).replace(/%25/g,"%"),n.getHashByUrl(p))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(g!==!1&&n.busy())return n.pushQueue({scope:n,callback:n.pushState,args:arguments,queue:g}),!1;n.busy(!0);var S=n.createStateObject(d,c,p),t=n.getHashByState(S),m=n.getState(!1),b=n.getHashByState(m),I=n.getHash(),e=n.expectedStateId==S.id;return n.storeState(S),n.expectedStateId=S.id,n.recycleState(S),n.setTitle(S),t===b?(n.busy(!1),!1):(n.saveState(S),e||n.Adapter.trigger(i,"statechange"),!n.isHashEqual(t,I)&&!n.isHashEqual(t,n.getShortUrl(n.getLocationHref()))&&n.setHash(t,!1),n.busy(!1),!0)},n.replaceState=function(d,c,p,g){if(p=encodeURI(p).replace(/%25/g,"%"),n.getHashByUrl(p))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(g!==!1&&n.busy())return n.pushQueue({scope:n,callback:n.replaceState,args:arguments,queue:g}),!1;n.busy(!0);var S=n.createStateObject(d,c,p),t=n.getHashByState(S),m=n.getState(!1),b=n.getHashByState(m),I=n.getStateByIndex(-2);return n.discardState(m,S,I),t===b?(n.storeState(S),n.expectedStateId=S.id,n.recycleState(S),n.setTitle(S),n.saveState(S),n.Adapter.trigger(i,"statechange"),n.busy(!1)):n.pushState(S.data,S.title,S.url,!1),!0}),n.emulated.pushState&&n.getHash()&&!n.emulated.hashChange&&n.Adapter.onDomLoad(function(){n.Adapter.trigger(i,"hashchange")})},typeof n.init!="undefined"&&n.init()}(window),function(i,h){"use strict";var o=i.console||h,u=i.document,s=i.navigator,y=!1,n=i.setTimeout,d=i.clearTimeout,c=i.setInterval,p=i.clearInterval,g=i.JSON,S=i.alert,t=i.History=i.History||{},m=i.history;try{y=i.sessionStorage,y.setItem("TEST","1"),y.removeItem("TEST")}catch{y=!1}if(g.stringify=g.stringify||g.encode,g.parse=g.parse||g.decode,typeof t.init!="undefined")throw new Error("History.js Core has already been loaded...");t.init=function(b){return typeof t.Adapter=="undefined"?!1:(typeof t.initCore!="undefined"&&t.initCore(),typeof t.initHtml4!="undefined"&&t.initHtml4(),!0)},t.initCore=function(b){if(typeof t.initCore.initialized!="undefined")return!1;if(t.initCore.initialized=!0,t.options=t.options||{},t.options.hashChangeInterval=t.options.hashChangeInterval||100,t.options.safariPollInterval=t.options.safariPollInterval||500,t.options.doubleCheckInterval=t.options.doubleCheckInterval||500,t.options.disableSuid=t.options.disableSuid||!1,t.options.storeInterval=t.options.storeInterval||1e3,t.options.busyDelay=t.options.busyDelay||250,t.options.debug=t.options.debug||!1,t.options.initialTitle=t.options.initialTitle||u.title,t.options.html4Mode=t.options.html4Mode||!1,t.options.delayInit=t.options.delayInit||!1,t.intervalList=[],t.clearAllIntervals=function(){var e,a=t.intervalList;if(typeof a!="undefined"&&a!==null){for(e=0;e<a.length;e++)p(a[e]);t.intervalList=null}},t.debug=function(){(t.options.debug||!1)&&t.log.apply(t,arguments)},t.log=function(){var e=typeof o!="undefined"&&typeof o.log!="undefined"&&typeof o.log.apply!="undefined",a=u.getElementById("log"),r,l,v,H,x;for(e?(H=Array.prototype.slice.call(arguments),r=H.shift(),typeof o.debug!="undefined"?o.debug.apply(o,[r,H]):o.log.apply(o,[r,H])):r=`
`+arguments[0]+`
`,l=1,v=arguments.length;l<v;++l){if(x=arguments[l],typeof x=="object"&&typeof g!="undefined")try{x=g.stringify(x)}catch{}r+=`
`+x+`
`}return a?(a.value+=r+`
-----
`,a.scrollTop=a.scrollHeight-a.clientHeight):e||S(r),!0},t.getInternetExplorerMajorVersion=function(){var e=t.getInternetExplorerMajorVersion.cached=typeof t.getInternetExplorerMajorVersion.cached!="undefined"?t.getInternetExplorerMajorVersion.cached:function(){for(var a=3,r=u.createElement("div"),l=r.getElementsByTagName("i");(r.innerHTML="<!--[if gt IE "+ ++a+"]><i></i><![endif]-->")&&l[0];);return a>4?a:!1}();return e},t.isInternetExplorer=function(){var e=t.isInternetExplorer.cached=typeof t.isInternetExplorer.cached!="undefined"?t.isInternetExplorer.cached:Boolean(t.getInternetExplorerMajorVersion());return e},t.options.html4Mode?t.emulated={pushState:!0,hashChange:!0}:t.emulated={pushState:!Boolean(i.history&&i.history.pushState&&i.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(s.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(s.userAgent)),hashChange:Boolean(!("onhashchange"in i||"onhashchange"in u)||t.isInternetExplorer()&&t.getInternetExplorerMajorVersion()<8)},t.enabled=!t.emulated.pushState,t.bugs={setHash:Boolean(!t.emulated.pushState&&s.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),safariPoll:Boolean(!t.emulated.pushState&&s.vendor==="Apple Computer, Inc."&&/AppleWebKit\/5([0-2]|3[0-3])/.test(s.userAgent)),ieDoubleCheck:Boolean(t.isInternetExplorer()&&t.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(t.isInternetExplorer()&&t.getInternetExplorerMajorVersion()<7)},t.isEmptyObject=function(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0},t.cloneObject=function(e){var a,r;return e?(a=g.stringify(e),r=g.parse(a)):r={},r},t.getRootUrl=function(){var e=u.location.protocol+"//"+(u.location.hostname||u.location.host);return u.location.port&&(e+=":"+u.location.port),e+="/",e},t.getBaseHref=function(){var e=u.getElementsByTagName("base"),a=null,r="";return e.length===1&&(a=e[0],r=a.href.replace(/[^\/]+$/,"")),r=r.replace(/\/+$/,""),r&&(r+="/"),r},t.getBaseUrl=function(){var e=t.getBaseHref()||t.getBasePageUrl()||t.getRootUrl();return e},t.getPageUrl=function(){var e=t.getState(!1,!1),a=(e||{}).url||t.getLocationHref(),r;return r=a.replace(/\/+$/,"").replace(/[^\/]+$/,function(l,v,H){return/\./.test(l)?l:l+"/"}),r},t.getBasePageUrl=function(){var e=t.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(a,r,l){return/[^\/]$/.test(a)?"":a}).replace(/\/+$/,"")+"/";return e},t.getFullUrl=function(e,a){var r=e,l=e.substring(0,1);return a=typeof a=="undefined"?!0:a,/[a-z]+\:\/\//.test(e)||(l==="/"?r=t.getRootUrl()+e.replace(/^\/+/,""):l==="#"?r=t.getPageUrl().replace(/#.*/,"")+e:l==="?"?r=t.getPageUrl().replace(/[\?#].*/,"")+e:a?r=t.getBaseUrl()+e.replace(/^(\.\/)+/,""):r=t.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},t.getShortUrl=function(e){var a=e,r=t.getBaseUrl(),l=t.getRootUrl();return t.emulated.pushState&&(a=a.replace(r,"")),a=a.replace(l,"/"),t.isTraditionalAnchor(a)&&(a="./"+a),a=a.replace(/^(\.\/)+/g,"./").replace(/\#$/,""),a},t.getLocationHref=function(e){return e=e||u,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash||e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},t.store={},t.idToState=t.idToState||{},t.stateToId=t.stateToId||{},t.urlToId=t.urlToId||{},t.storedStates=t.storedStates||[],t.savedStates=t.savedStates||[],t.normalizeStore=function(){t.store.idToState=t.store.idToState||{},t.store.urlToId=t.store.urlToId||{},t.store.stateToId=t.store.stateToId||{}},t.getState=function(e,a){typeof e=="undefined"&&(e=!0),typeof a=="undefined"&&(a=!0);var r=t.getLastSavedState();return!r&&a&&(r=t.createStateObject()),e&&(r=t.cloneObject(r),r.url=r.cleanUrl||r.url),r},t.getIdByState=function(e){var a=t.extractId(e.url),r;if(!a)if(r=t.getStateString(e),typeof t.stateToId[r]!="undefined")a=t.stateToId[r];else if(typeof t.store.stateToId[r]!="undefined")a=t.store.stateToId[r];else{for(;a=new Date().getTime()+String(Math.random()).replace(/\D/g,""),!(typeof t.idToState[a]=="undefined"&&typeof t.store.idToState[a]=="undefined"););t.stateToId[r]=a,t.idToState[a]=e}return a},t.normalizeState=function(e){var a,r;return(!e||typeof e!="object")&&(e={}),typeof e.normalized!="undefined"?e:((!e.data||typeof e.data!="object")&&(e.data={}),a={},a.normalized=!0,a.title=e.title||"",a.url=t.getFullUrl(e.url?e.url:t.getLocationHref()),a.hash=t.getShortUrl(a.url),a.data=t.cloneObject(e.data),a.id=t.getIdByState(a),a.cleanUrl=a.url.replace(/\??\&_suid.*/,""),a.url=a.cleanUrl,r=!t.isEmptyObject(a.data),(a.title||r)&&t.options.disableSuid!==!0&&(a.hash=t.getShortUrl(a.url).replace(/\??\&_suid.*/,""),/\?/.test(a.hash)||(a.hash+="?"),a.hash+="&_suid="+a.id),a.hashedUrl=t.getFullUrl(a.hash),(t.emulated.pushState||t.bugs.safariPoll)&&t.hasUrlDuplicate(a)&&(a.url=a.hashedUrl),a)},t.createStateObject=function(e,a,r){var l={data:e,title:a,url:r};return l=t.normalizeState(l),l},t.getStateById=function(e){e=String(e);var a=t.idToState[e]||t.store.idToState[e]||h;return a},t.getStateString=function(e){var a,r,l;return a=t.normalizeState(e),r={data:a.data,title:e.title,url:e.url},l=g.stringify(r),l},t.getStateId=function(e){var a,r;return a=t.normalizeState(e),r=a.id,r},t.getHashByState=function(e){var a,r;return a=t.normalizeState(e),r=a.hash,r},t.extractId=function(e){var a,r,l,v;return e.indexOf("#")!=-1?v=e.split("#")[0]:v=e,r=/(.*)\&_suid=([0-9]+)$/.exec(v),l=r&&r[1]||e,a=r?String(r[2]||""):"",a||!1},t.isTraditionalAnchor=function(e){var a=!/[\/\?\.]/.test(e);return a},t.extractState=function(e,a){var r=null,l,v;return a=a||!1,l=t.extractId(e),l&&(r=t.getStateById(l)),r||(v=t.getFullUrl(e),l=t.getIdByUrl(v)||!1,l&&(r=t.getStateById(l)),!r&&a&&!t.isTraditionalAnchor(e)&&(r=t.createStateObject(null,null,v))),r},t.getIdByUrl=function(e){var a=t.urlToId[e]||t.store.urlToId[e]||h;return a},t.getLastSavedState=function(){return t.savedStates[t.savedStates.length-1]||h},t.getLastStoredState=function(){return t.storedStates[t.storedStates.length-1]||h},t.hasUrlDuplicate=function(e){var a=!1,r;return r=t.extractState(e.url),a=r&&r.id!==e.id,a},t.storeState=function(e){return t.urlToId[e.url]=e.id,t.storedStates.push(t.cloneObject(e)),e},t.isLastSavedState=function(e){var a=!1,r,l,v;return t.savedStates.length&&(r=e.id,l=t.getLastSavedState(),v=l.id,a=r===v),a},t.saveState=function(e){return t.isLastSavedState(e)?!1:(t.savedStates.push(t.cloneObject(e)),!0)},t.getStateByIndex=function(e){var a=null;return typeof e=="undefined"?a=t.savedStates[t.savedStates.length-1]:e<0?a=t.savedStates[t.savedStates.length+e]:a=t.savedStates[e],a},t.getCurrentIndex=function(){var e=null;return t.savedStates.length<1?e=0:e=t.savedStates.length-1,e},t.getHash=function(e){var a=t.getLocationHref(e),r;return r=t.getHashByUrl(a),r},t.unescapeHash=function(e){var a=t.normalizeHash(e);return a=decodeURIComponent(a),a},t.normalizeHash=function(e){var a=e.replace(/[^#]*#/,"").replace(/#.*/,"");return a},t.setHash=function(e,a){var r,l;return a!==!1&&t.busy()?(t.pushQueue({scope:t,callback:t.setHash,args:arguments,queue:a}),!1):(t.busy(!0),r=t.extractState(e,!0),r&&!t.emulated.pushState?t.pushState(r.data,r.title,r.url,!1):t.getHash()!==e&&(t.bugs.setHash?(l=t.getPageUrl(),t.pushState(null,null,l+"#"+e,!1)):u.location.hash=e),t)},t.escapeHash=function(e){var a=t.normalizeHash(e);return a=i.encodeURIComponent(a),t.bugs.hashEscape||(a=a.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),a},t.getHashByUrl=function(e){var a=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return a=t.unescapeHash(a),a},t.setTitle=function(e){var a=e.title,r;a||(r=t.getStateByIndex(0),r&&r.url===e.url&&(a=r.title||t.options.initialTitle));try{u.getElementsByTagName("title")[0].innerHTML=a.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch{}return u.title=a,t},t.queues=[],t.busy=function(e){if(typeof e!="undefined"?t.busy.flag=e:typeof t.busy.flag=="undefined"&&(t.busy.flag=!1),!t.busy.flag){d(t.busy.timeout);var a=function(){var r,l,v;if(!t.busy.flag)for(r=t.queues.length-1;r>=0;--r)l=t.queues[r],l.length!==0&&(v=l.shift(),t.fireQueueItem(v),t.busy.timeout=n(a,t.options.busyDelay))};t.busy.timeout=n(a,t.options.busyDelay)}return t.busy.flag},t.busy.flag=!1,t.fireQueueItem=function(e){return e.callback.apply(e.scope||t,e.args||[])},t.pushQueue=function(e){return t.queues[e.queue||0]=t.queues[e.queue||0]||[],t.queues[e.queue||0].push(e),t},t.queue=function(e,a){return typeof e=="function"&&(e={callback:e}),typeof a!="undefined"&&(e.queue=a),t.busy()?t.pushQueue(e):t.fireQueueItem(e),t},t.clearQueue=function(){return t.busy.flag=!1,t.queues=[],t},t.stateChanged=!1,t.doubleChecker=!1,t.doubleCheckComplete=function(){return t.stateChanged=!0,t.doubleCheckClear(),t},t.doubleCheckClear=function(){return t.doubleChecker&&(d(t.doubleChecker),t.doubleChecker=!1),t},t.doubleCheck=function(e){return t.stateChanged=!1,t.doubleCheckClear(),t.bugs.ieDoubleCheck&&(t.doubleChecker=n(function(){return t.doubleCheckClear(),t.stateChanged||e(),!0},t.options.doubleCheckInterval)),t},t.safariStatePoll=function(){var e=t.extractState(t.getLocationHref()),a;if(!t.isLastSavedState(e))return a=e,a||(a=t.createStateObject()),t.Adapter.trigger(i,"popstate"),t},t.back=function(e){return e!==!1&&t.busy()?(t.pushQueue({scope:t,callback:t.back,args:arguments,queue:e}),!1):(t.busy(!0),t.doubleCheck(function(){t.back(!1)}),m.go(-1),!0)},t.forward=function(e){return e!==!1&&t.busy()?(t.pushQueue({scope:t,callback:t.forward,args:arguments,queue:e}),!1):(t.busy(!0),t.doubleCheck(function(){t.forward(!1)}),m.go(1),!0)},t.go=function(e,a){var r;if(e>0)for(r=1;r<=e;++r)t.forward(a);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(r=-1;r>=e;--r)t.back(a)}return t},t.emulated.pushState){var I=function(){};t.pushState=t.pushState||I,t.replaceState=t.replaceState||I}else t.onPopState=function(e,a){var r=!1,l=!1,v,H;return t.doubleCheckComplete(),v=t.getHash(),v?(H=t.extractState(v||t.getLocationHref(),!0),H?t.replaceState(H.data,H.title,H.url,!1):(t.Adapter.trigger(i,"anchorchange"),t.busy(!1)),t.expectedStateId=!1,!1):(r=t.Adapter.extractEventData("state",e,a)||!1,r?l=t.getStateById(r):t.expectedStateId?l=t.getStateById(t.expectedStateId):l=t.extractState(t.getLocationHref()),l||(l=t.createStateObject(null,null,t.getLocationHref())),t.expectedStateId=!1,t.isLastSavedState(l)?(t.busy(!1),!1):(t.storeState(l),t.saveState(l),t.setTitle(l),t.Adapter.trigger(i,"statechange"),t.busy(!1),!0))},t.Adapter.bind(i,"popstate",t.onPopState),t.pushState=function(e,a,r,l){if(t.getHashByUrl(r)&&t.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(l!==!1&&t.busy())return t.pushQueue({scope:t,callback:t.pushState,args:arguments,queue:l}),!1;t.busy(!0);var v=t.createStateObject(e,a,r);return t.isLastSavedState(v)?t.busy(!1):(t.storeState(v),t.expectedStateId=v.id,m.pushState(v.id,v.title,v.url),t.Adapter.trigger(i,"popstate")),!0},t.replaceState=function(e,a,r,l){if(t.getHashByUrl(r)&&t.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(l!==!1&&t.busy())return t.pushQueue({scope:t,callback:t.replaceState,args:arguments,queue:l}),!1;t.busy(!0);var v=t.createStateObject(e,a,r);return t.isLastSavedState(v)?t.busy(!1):(t.storeState(v),t.expectedStateId=v.id,m.replaceState(v.id,v.title,v.url),t.Adapter.trigger(i,"popstate")),!0};if(y){try{t.store=g.parse(y.getItem("History.store"))||{}}catch{t.store={}}t.normalizeStore()}else t.store={},t.normalizeStore();t.Adapter.bind(i,"unload",t.clearAllIntervals),t.saveState(t.storeState(t.extractState(t.getLocationHref(),!0))),y&&(t.onUnload=function(){var e,a,r;try{e=g.parse(y.getItem("History.store"))||{}}catch{e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(a in t.idToState)!t.idToState.hasOwnProperty(a)||(e.idToState[a]=t.idToState[a]);for(a in t.urlToId)!t.urlToId.hasOwnProperty(a)||(e.urlToId[a]=t.urlToId[a]);for(a in t.stateToId)!t.stateToId.hasOwnProperty(a)||(e.stateToId[a]=t.stateToId[a]);t.store=e,t.normalizeStore(),r=g.stringify(e);try{y.setItem("History.store",r)}catch(l){if(l.code!==DOMException.QUOTA_EXCEEDED_ERR)throw l;y.length&&(y.removeItem("History.store"),y.setItem("History.store",r))}},t.intervalList.push(c(t.onUnload,t.options.storeInterval)),t.Adapter.bind(i,"beforeunload",t.onUnload),t.Adapter.bind(i,"unload",t.onUnload)),t.emulated.pushState||(t.bugs.safariPoll&&t.intervalList.push(c(t.safariStatePoll,t.options.safariPollInterval)),(s.vendor==="Apple Computer, Inc."||(s.appCodeName||"")==="Mozilla")&&(t.Adapter.bind(i,"hashchange",function(){t.Adapter.trigger(i,"popstate")}),t.getHash()&&t.Adapter.onDomLoad(function(){t.Adapter.trigger(i,"hashchange")})))},(!t.options||!t.options.delayInit)&&t.init()}(window);
//# sourceMappingURL=/s/files/1/0414/0069/6999/t/14/assets/engo-plugins.js.map?v=2799513531484695232
