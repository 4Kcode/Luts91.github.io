(()=>{var e={198:(e,t,n)=>{var
r=1/0,i=9007199254740991,o=17976931348623157e292,a=NaN,s="[object Arguments]",u="
[object Function]",c="[object GeneratorFunction]",l="[object Map]",d="[object
Promise]",f="[object Set]",h="[object String]",p="[object Symbol]",y="[object

WeakMap]",v="[object DataView]",b=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-
f]+$/i,w=/^0b[01]+$/i,m=/^\[object .+?Constructor\]$/,I=/^0o[0-7]+$/i,_=/^(?:0|[1-

9]\d*)$/,E="\\ud800-\\udfff",S="\\u0300-\\u036f\\ufe20-\\ufe23",k="\\u20d0-
\\u20f0",x="\\ufe0e\\ufe0f",T="["+E+"]",A="["+S+k+"]",C="\\ud83c[\\udffb-
\\udfff]",O="[^"+E+"]",L="(?:\\ud83c[\\udde6-\\uddff]){2}",j="[\\ud800-\\udbff]
[\\udc00-\\udfff]",D="\\u200d",q="(?:"+A+"|"+C+")"+"?",z="["+x+"]?",B=z+q+("(?:"+D+"
(?:"+[O,L,j].join("|")+")"+z+q+")*"),P="(?:"+
[O+A+"?",A,L,j,T].join("|")+")",M=RegExp(C+"(?="+C+")|"+P+B,"g"),R=RegExp("
["+D+E+S+k+x+"]"),N=parseInt,F="object"==typeof
n.g&&n.g&&n.g.Object===Object&&n.g,G="object"==typeof
self&&self&&self.Object===Object&&self,K=F||G||Function("return this")();function
V(e,t){return function(e,t){for(var n=-1,r=e?
e.length:0,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}(t,(function(t){return
e[t]}))}function U(e){var t=-1,n=Array(e.size);return e.forEach((function(e,r)
{n[++t]=[r,e]})),n}function Y(e){var t=-1,n=Array(e.size);return
e.forEach((function(e){n[++t]=e})),n}function Z(e){return function(e){return
R.test(e)}(e)?function(e){return e.match(M)||[]}(e):function(e){return e.split("")}
(e)}var $,Q,W,H=Function.prototype,J=Object.prototype,X=K["__core-js_shared__"],ee=
($=/[^.]+$/.exec(X&&X.keys&&X.keys.IE_PROTO||""))?"Symbol(src)_1."+$:"",te=H.toStrin
g,ne=J.hasOwnProperty,re=J.toString,ie=RegExp("^"+te.call(ne).replace(/[\\^$.*+?()
[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?
=\\\])/g,"$1.*?")+"$"),oe=K.Symbol,ae=oe?oe.iterator:void
0,se=J.propertyIsEnumerable,ue=Math.floor,ce=(Q=Object.keys,W=Object,function(e)
{return
Q(W(e))}),le=Math.random,de=ke(K,"DataView"),fe=ke(K,"Map"),he=ke(K,"Promise"),pe=ke
(K,"Set"),ye=ke(K,"WeakMap"),ve=Ae(de),be=Ae(fe),ge=Ae(he),we=Ae(pe),me=Ae(ye);funct
ion Ie(e,t){var n=Oe(e)||function(e){return function(e){return qe(e)&&Le(e)}
(e)&&ne.call(e,"callee")&&(!se.call(e,"callee")||re.call(e)==s)}(e)?function(e,t)
{for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}(e.length,String):
[],r=n.length,i=!!r;for(var o in e)!t&&!ne.call(e,o)||i&&
("length"==o||Te(o,r))||n.push(o);return n}function _e(e){if(!De(e)||function(e)
{return!!ee&&ee in e}(e))return!1;var t=je(e)||function(e){var
t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}
(e)?ie:m;return t.test(Ae(e))}function Ee(e){if(n=
(t=e)&&t.constructor,r="function"==typeof n&&n.prototype||J,t!==r)return ce(e);var
t,n,r,i=[];for(var o in Object(e))ne.call(e,o)&&"constructor"!=o&&i.push(o);return
i}function Se(e,t){return e+ue(le()*(t-e+1))}function ke(e,t){var n=function(e,t)
{return null==e?void 0:e[t]}(e,t);return _e(n)?n:void 0}var xe=function(e){return
re.call(e)};function Te(e,t){return!!(t=null==t?i:t)&&("number"==typeof
e||_.test(e))&&e>-1&&e%1==0&&e<t}function Ae(e){if(null!=e){try{return
te.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ce(e,t,n){var
i,s,u,c=-1,d=function(e){if(!e)return[];if(Le(e))return function(e)
{return"string"==typeof e||!Oe(e)&&qe(e)&&re.call(e)==h}(e)?Z(e):function(e,t){var
n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}
(e);if(ae&&e[ae])return function(e){for(var t,n=[];!
(t=e.next()).done;)n.push(t.value);return n}(e[ae]());var t=xe(e),n=t==l?U:t==f?
Y:ze;return n(e)}(e),y=d.length,v=y-1;for((n?function(e,t,n){if(!De(n))return!1;var
r=typeof t;return!!("number"==r?Le(n)&&Te(t,n.length):"string"==r&&t in
n)&&function(e,t){return e===t||e!=e&&t!=t}(n[t],e)}(e,t,n):void 0===t)?t=1:
(i=function(e){var t=function(e){return e?(e=function(e){if("number"==typeof
e)return e;if(function(e){return"symbol"==typeof e||qe(e)&&re.call(e)==p}(e))return
a;if(De(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=De(t)?
t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(b,"");var
n=w.test(e);return n||I.test(e)?N(e.slice(2),n?2:8):g.test(e)?a:+e}(e))===r||e===-r?
(e<0?-1:1)*o:e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}(t),s=0,u=y,i==i&&

6/3/24, 1:21 PM
Page 1 of 10

(void 0!==u&&(i=i<=u?i:u),void 0!==s&&(i=i>=s?i:s)),t=i);++c<t;){var
m=Se(c,v),_=d[m];d[m]=d[c],d[c]=_}return d.length=t,d}(de&&xe(new de(new
ArrayBuffer(1)))!=v||fe&&xe(new fe)!=l||he&&xe(he.resolve())!=d||pe&&xe(new
pe)!=f||ye&&xe(new ye)!=y)&&(xe=function(e){var t=re.call(e),n="[object Object]"==t?
e.constructor:void 0,r=n?Ae(n):void 0;if(r)switch(r){case ve:return v;case be:return
l;case ge:return d;case we:return f;case me:return y}return t});var
Oe=Array.isArray;function Le(e){return null!=e&&function(e){return"number"==typeof
e&&e>-1&&e%1==0&&e<=i}(e.length)&&!je(e)}function je(e){var t=De(e)?
re.call(e):"";return t==u||t==c}function De(e){var t=typeof e;return!!e&&
("object"==t||"function"==t)}function qe(e){return!!e&&"object"==typeof e}function
ze(e){return e?V(e,function(e){return Le(e)?Ie(e):Ee(e)}(e)):
[]}e.exports=function(e){return Ce(e,4294967295)}},807:function(e,t,n){"use
strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e)
{for(var t,n=1,r=arguments.length;n<r;n++)for(var i in
t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return
e},r.apply(this,arguments)},i=this&&this.__awaiter||function(e,t,n,r){return new(n||
(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function
s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):
(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||
[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,i,o,a=
{label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o=
{next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&
(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s)
{return function(o){if(n)throw new TypeError("Generator is already
executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||
((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return
i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return
a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case
7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,
(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&
(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1])
{a.label=i[1],i=o;break}if(i&&a.label<i[2])
{a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e
,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?
o[1]:void 0,done:!0}}([o,s])}}},a=this&&this.__spreadArray||function(e,t,n)
{if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||
(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return
e.concat(r||Array.prototype.slice.call(t))},s=this&&this.__importDefault||function(e
){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",
{value:!0}),t.INIT_STATE=void 0;var u,c=n(607),l=n(378),d=s(n(198));!function(e)
{e[e.UNINITIALIZED=0]="UNINITIALIZED",e[e.REQUESTED=1]="REQUESTED",e[e.INITIALIZED=2
]="INITIALIZED"}(u=t.INIT_STATE||(t.INIT_STATE={}));var f=[{width:970,height:90},
{width:320,height:50},{width:160,height:600},{width:336,height:280},
{width:728,height:90},{width:300,height:600},{width:468,height:60},
{width:970,height:250},{width:300,height:250},{width:250,height:250},
{width:120,height:600}],h=function(){function e()
{this.initState=u.UNINITIALIZED,this.requestInProgress=!1,this.eventListeners=
{},this.adblockDetectionExecuted=!1,this.hasAdblock=!1,this.gameLink=null,this.disab
leBannerCheck=!1}return e.prototype.addEventListener=function(e,t){var
n;if(this.isValidCrazyEvent(e)){var i=this.eventListeners[e]||
[];this.eventListeners=r(r({},this.eventListeners),((n={})[e]=a(a([],i,!0),
[t],!1),n)),this.callListenersForTriggeredEvents(e,t)}else console.error("[CrazySDK]
Invalid Event",e)},e.prototype.removeEventListener=function(e,t){var
n;if(this.isValidCrazyEvent(e)){var i=this.eventListeners[e]||
[];this.eventListeners=r(r({},this.eventListeners),((n={})[e]=i.filter((function(e)
{return e!==t})),n))}else console.error("[CrazySDK] Invalid
Event",e)},e.prototype.callListenersForTriggeredEvents=function(e,t){switch(e)
{case"adblockDetectionExecuted":return
this.adblockDetectionEventCallback(t);case"initialized":return
this.initEventCallback(t)}},e.prototype.adblockDetectionEventCallback=function(e)

6/3/24, 1:21 PM
Page 2 of 10

{this.adblockDetectionExecuted&&e({hasAdblock:this.hasAdblock})},e.prototype.inviteL
ink=function(e){void 0===e&&(e={}),(0,c.debug)("Requesting invite
link"),this.ensureInit(!1);var
t="utm_source=invite";Object.keys(e).forEach((function(n){var
r="".concat(n,"=").concat(e[n]);t="".concat(t,"&").concat(r)}));var

n=this.gameLink||"https://www.crazygames.com/game/your-game-will-appear-
here",r=n.includes("?")?"".concat(n,"&").concat(t):"".concat(n,"?").concat(t);return

(0,c.debug)("Invite link is
".concat(r)),r},e.prototype.checkBannerContainers=function(e,t){return i(this,void
0,void 0,(function(){var n,r,i,a,s;return o(this,(function(o){switch(o.label){case
0:e&&0!==e.length||(0,c.debug)("Container id not specified"),n=
[],r=0,i="string"==typeof e?[e]:e,o.label=1;case 1:return r<i.length?(a=i[r],
[4,this.checkVisible(a,t)]):[3,4];case 2:
(s=o.sent()).isVisible&&n.push({id:a,width:s.size.width,height:s.size.height}),o.lab
el=3;case 3:return r++,[3,1];case
4:return[2,n]}}))}))},e.prototype.checkVisible=function(e,t){return void 0===t&&
(t=!1),i(this,void 0,void 0,(function(){var n=this;return o(this,(function(r)
{return[2,(0,l.checkContainerVisible)(e,(function(t){n.callListeners("bannerError",
{containerId:e,error:t})}),t,this.disableBannerCheck)]}))}))},e.prototype.getBannerF
orContainers=function(e){var t=[];return e.forEach((function(e){var n=(0,d.default)
(f).find((function(t){return e.width>=t.width&&e.height>=t.height}));n?
t.push({containerId:e.id,size:"".concat(n.width,"x").concat(n.height)}):(0,c.debug)
("No available banner size has been found for container
".concat(e.id))})),t},e.prototype.initEventCallback=function(e)
{this.initState===u.INITIALIZED&&e({userInfo:this.userInfo})},e.prototype.callListen
ers=function(e,t){(this.eventListeners[e]||[]).forEach((function(e){return
e(t)}))},e.prototype.isValidCrazyEvent=function(e){switch(e)
{case"adStarted":case"adFinished":case"adError":case"adblockDetectionExecuted":case"
bannerRendered":case"bannerError":case"requestBanner":case"initialized":return!0;def
ault:return!1}},e.prototype.renderFakeBanner=function(e){var
t=e.size.split("x"),n=t[0],r=t[1],i=document.getElementById(e.containerId);if(i)
{i.innerHTML="";var
o=document.createElement("img");o.setAttribute("src","".concat("https://images.crazy

games.com/crazygames-
sdk/").concat(e.size,".png")),o.setAttribute("width","".concat(n,"px")),o.setAttribu

te("height","".concat(r,"px")),i.appendChild(o),i.style.backgroundColor="rgb(191,
173, 255, 0.25)"}},e}();t.default=h},883:function(e,t,n){"use strict";var
r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var
n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t)
{if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value
"+String(t)+" is not a constructor or null");function n()
{this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):
(n.prototype=t.prototype,new n)}),o=this&&this.__createBinding||(Object.create?
function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!
("get"in i?!t.__esModule:i.writable||i.configurable)||(i=
{enumerable:!0,get:function(){return
t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&
(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t)
{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t)
{e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return
e;var t={};if(null!=e)for(var n in
e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return
a(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))
((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e)
{try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t
instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||
[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,i,o,a=
{label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o=
{next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&

6/3/24, 1:21 PM
Page 3 of 10

(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s)
{return function(o){if(n)throw new TypeError("Generator is already
executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||
((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return
i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return
a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case
7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,
(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&
(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1])
{a.label=i[1],i=o;break}if(i&&a.label<i[2])
{a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e
,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?
o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var
l=s(n(807)),d=n(400),f=n(607),h=function(e){function t(){var
t=e.call(this)||this;return t.queuedBanners=[],t.initCallbacks=
[],t.rafvertizingUrl="",t.inGameRenderedBannerIds=new
Set,t.receiveMessage=function(e){var
n=e.data,r=n.type,i=n.data;if(r)return"initialized"===r?(t.gfWindow=e.source,void
t.initializeReply(i)):void(t.isValidCrazyEvent(r)&&t.callListeners(r,e.data))},t.que
uedRequest=null,t.registerDefaultListeners(),t}return
i(t,e),t.prototype.init=function(){this.initState===l.INIT_STATE.UNINITIALIZED&&
((0,f.debug)
("Initializing"),this.registerMessageListener(),this.sendInit(),this.initState=l.INI
T_STATE.REQUESTED)},t.prototype.requestAd=function(e){return void 0===e&&
(e="midgame"),u(this,void 0,void 0,(function(){return c(this,(function(t)
{switch(t.label){case 0:return(0,f.debug)("Requesting ".concat(e," ad")),
[4,this.ensureInit()];case 1:return t.sent(),this.requestInProgress?[2]:
(this.requestInProgress=!0,this.postMessage("requestAd",{adType:e}),
[2])}}))}))},t.prototype.requestBanner=function(e){return u(this,void 0,void 0,
(function(){var t,n,r,i,o;return c(this,(function(a){switch(a.label){case
0:return[4,this.ensureInit(!0)];case 1:a.sent(),(0,f.debug)("Requesting banners to
gameframe",e),t=[],n=0,r=e,a.label=2;case 2:return n<r.length?(i=r[n],
[4,this.checkVisible(i.containerId)]):[3,5];case
3:a.sent().isVisible&&t.push(i),a.label=4;case 4:return n++,[3,2];case 5:return
t.length>0&&((0,f.debug)("Valid banners",e),
(o=this.queuedBanners).push.apply(o,t),this.postMessage("requestBanner",t)),
[2]}}))}))},t.prototype.requestResponsiveBanner=function(e){return u(this,void
0,void 0,(function(){var t,n;return c(this,(function(r){switch(r.label){case
0:return[4,this.ensureInit(!0)];case 1:return r.sent(),(0,f.debug)("Requesting
responsive banner to gameframe",e),[4,this.checkBannerContainers(e,!0)];case
2:return(t=r.sent()).length>0&&((0,f.debug)("Valid containers",t),
(n=this.queuedBanners).push.apply(n,this.getBannerForContainers(t)),this.postMessage
("requestResponsiveBanner",t)),[2]}}))}))},t.prototype.clearBanner=function(e){var
t=document.querySelector("#".concat(e));if(this.postMessage("clearBanner",{}),t)
{for(;t.firstChild;)t.removeChild(t.firstChild);this.inGameRenderedBannerIds.delete(
e)}},t.prototype.clearAllBanners=function(){var
e=this,t=Array.from(this.inGameRenderedBannerIds.values());this.postMessage("clearAl
lBanners",{}),t.forEach((function(t)
{e.clearBanner(t)}))},t.prototype.inviteLink=function(t){void 0===t&&(t={});var
n=e.prototype.inviteLink.call(this,t);return this.postMessage("inviteUrl",
{inviteUrl:n}),n},t.prototype.happytime=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){switch(e.label){case 0:return(0,f.debug)
("Requesting happytime"),[4,this.ensureInit()];case 1:return
e.sent(),this.postMessage("happytime",{}),
[2]}}))}))},t.prototype.gameplayStart=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){switch(e.label){case 0:return(0,f.debug)
("Requesting gameplay start"),[4,this.ensureInit()];case 1:return
e.sent(),this.postMessage("gameplayStart",{}),
[2]}}))}))},t.prototype.gameplayStop=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){switch(e.label){case 0:return(0,f.debug)

6/3/24, 1:21 PM
Page 4 of 10

("Requesting gameplay stop"),[4,this.ensureInit()];case 1:return
e.sent(),this.postMessage("gameplayStop",{}),
[2]}}))}))},t.prototype.sdkGameLoadingStart=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){switch(e.label){case 0:return(0,f.debug)
("Requesting start of game loading from sdk"),[4,this.ensureInit()];case 1:return
e.sent(),this.postMessage("sdkGameLoadingStart",{}),
[2]}}))}))},t.prototype.sdkGameLoadingStop=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){switch(e.label){case 0:return(0,f.debug)
("Requesting stop of game loading from sdk"),[4,this.ensureInit()];case 1:return
e.sent(),this.postMessage("sdkGameLoadingStop",{}),
[2]}}))}))},t.prototype.sendInit=function(){var e={type:"init",data:
{version:"1.30.0",sdkType:"js"}};window.parent.postMessage(e,"*"),window.parent.pare
nt.postMessage(e,"*"),window.parent.parent.parent.postMessage(e,"*")},t.prototype.re
gisterDefaultListeners=function(){var e=this;(0,f.debug)("Registering default
listeners"),this.addEventListener("adFinished",(function()
{e.requestInProgress=!1})),this.addEventListener("adError",(function()
{e.requestInProgress=!1})),this.addEventListener("adblockDetectionExecuted",
(function(t){e.adblockDetectionExecuted=!0;var
n=t.hasAdblock;e.hasAdblock=!!n})),this.addEventListener("bannerError",(function(e)
{(0,f.debug)(e.error,e.containerId)})),this.addEventListener("bannerRendered",
(function(t){e.inGameRenderedBannerIds.add(t.containerId),(0,f.debug)("Banner
rendered for container
".concat(t.containerId))})),this.addEventListener("requestBanner",(function(t)
{return u(e,void 0,void 0,(function(){return c(this,(function(e){switch(e.label)
{case 0:return(0,f.debug)("Banner request answer from gameframe
received",t.request),this.buildBannerRequestCallback(t.request),[4,
(0,d.requestInGameBanner)(t.request)];case 1:return e.sent(),
[2]}}))}))}))},t.prototype.buildBannerRequestCallback=function(e){var
t=this;e.options.banner={callback:function(e){if(e.empty){if(t.useTestAds){var
n=t.queuedBanners.find((function(t){return t.containerId===e.code}));return void(n&&
(t.renderFakeBanner(n),t.removeBannerFromQueue(e.code),t.callListeners("bannerRender
ed",{containerId:e.code})))}var r="Sorry, no banner is available for the moment for
".concat(e.code,", please retry");t.callListeners("bannerError",
{containerId:e.code,error:r}),t.removeBannerFromQueue(e.code,r)}else
t.removeBannerFromQueue(e.code),t.callListeners("bannerRendered",
{containerId:e.code})}}},t.prototype.removeBannerFromQueue=function(e,t){var
n=this.queuedBanners.find((function(t){return
t.containerId!==e}));if(this.queuedBanners=this.queuedBanners.filter((function(t)
{return t.containerId!==e})),n){var
r=n.size.split("x").map(parseInt),i=r[0],o=r[1];this.postMessage("bannerProcessed",
{containerId:n.containerId,width:i,height:o,error:t})}},t.prototype.registerMessageL
istener=function()
{window.addEventListener("message",this.receiveMessage,!1)},t.prototype.initializeRe
ply=function(e){return u(this,void 0,void 0,(function(){return c(this,(function(t)
{return e&&void 0!==e.debug&&(0,f.forceDebug)(e.debug),(0,f.debug)("Initialize reply
received from gameframe",e),this.initState===l.INIT_STATE.INITIALIZED||(e&&
(this.gameLink=e.gameLink,this.rafvertizingUrl=e.rafvertizingUrl,this.useTestAds=e.u
seTestAds,this.userInfo=e.userInfo,this.disableBannerCheck=e.disableBannerCheck||!1)
,this.initState=l.INIT_STATE.INITIALIZED,this.initCallbacks.length>0&&((0,f.debug)
("Calling init callbacks"),this.initCallbacks.forEach((function(e){return
e()})),this.initCallbacks=[]),this.callListeners("initialized",
{userInfo:this.userInfo})),[2]}))}))},t.prototype.ensureInit=function(e){return void
0===e&&(e=!1),u(this,void 0,void 0,(function(){var t=this;return c(this,(function(n)
{return this.initState===l.INIT_STATE.INITIALIZED?e?[2,(0,d.loadCrazyAdsIfNeeded)
(this.rafvertizingUrl)]:[2,Promise.resolve()]:(this.init(),[2,new
Promise((function(n){t.initCallbacks.push((function(){return u(t,void 0,void 0,
(function(){return c(this,(function(t){switch(t.label){case 0:return e?[3,1]:(n(),
[3,3]);case 1:return[4,(0,d.loadCrazyAdsIfNeeded)(this.rafvertizingUrl)];case
2:t.sent(),n(),t.label=3;case
3:return[2]}}))}))}))}))])}))}))},t.prototype.postMessage=function(e,t)

6/3/24, 1:21 PM
Page 5 of 10

{this.gfWindow?this.gfWindow.postMessage({type:e,data:t},"*"):(0,f.debug)
("CrazyGames gameframe hasn't been
detected")},t.prototype.isValidCrazyEvent=function(e){switch(e)
{case"adStarted":case"adFinished":case"adError":case"adblockDetectionExecuted":case"
bannerRendered":case"bannerError":case"requestBanner":case"initialized":return!0;def
ault:return!1}},t}(l.default);t.default=h},56:function(e,t,n){"use strict";var
r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var
n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t)
{if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value
"+String(t)+" is not a constructor or null");function n()
{this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):
(n.prototype=t.prototype,new n)}),o=this&&this.__createBinding||(Object.create?
function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!
("get"in i?!t.__esModule:i.writable||i.configurable)||(i=
{enumerable:!0,get:function(){return
t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&
(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t)
{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t)
{e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return
e;var t={};if(null!=e)for(var n in
e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return
a(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))
((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e)
{try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t
instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||
[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,i,o,a=
{label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o=
{next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&
(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s)
{return function(o){if(n)throw new TypeError("Generator is already
executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||
((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return
i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return
a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case
7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,
(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&
(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1])
{a.label=i[1],i=o;break}if(i&&a.label<i[2])
{a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e
,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?
o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var
l=s(n(807)),d=n(607),f=function(e){function t(){var
t=null!==e&&e.apply(this,arguments)||this;return
t.overlay=null,t.adDurationInMs=5e3,t}return i(t,e),t.prototype.init=function()
{this.initState!==l.INIT_STATE.INITIALIZED&&
(this.initState=l.INIT_STATE.INITIALIZED,this.overlay=document.createElement("div"),
this.createOverlayStyle(),document.body.appendChild(this.overlay),(0,d.debug)
("initializing"))},t.prototype.requestAd=function(e){return void 0===e&&
(e="midgame"),u(this,void 0,void 0,(function(){return c(this,(function(t)
{switch(t.label){case 0:return[4,this.ensureInit()];case 1:return
t.sent(),this.requestInProgress?[2]:(this.renderFakeAd(e),
[2])}}))}))},t.prototype.happytime=function(){(0,d.debug)("happy
time")},t.prototype.gameplayStart=function(){(0,d.debug)("gameplay
start")},t.prototype.gameplayStop=function(){(0,d.debug)("gameplay
stop")},t.prototype.sdkGameLoadingStart=function(){(0,d.debug)("game load start from
sdk")},t.prototype.sdkGameLoadingStop=function(){(0,d.debug)("game load stop from
sdk")},t.prototype.requestBanner=function(e){return u(this,void 0,void 0,(function()
{var t,n,r,i;return c(this,(function(o){switch(o.label){case 0:(0,d.debug)
("Requesting banners to gameframe",e),t=[],n=0,r=e,o.label=1;case 1:return

6/3/24, 1:21 PM
Page 6 of 10

n<r.length?(i=r[n],[4,this.checkVisible(i.containerId)]):[3,4];case
2:o.sent().isVisible&&t.push(i),o.label=3;case 3:return n++,[3,1];case 4:return
t.length>0&&((0,d.debug)("Valid banners",t),this.renderFakeBanners(t)),
[2]}}))}))},t.prototype.requestResponsiveBanner=function(e){return u(this,void
0,void 0,(function(){var t;return c(this,(function(n){switch(n.label){case
0:return(0,d.debug)("Requesting responsive banner",e),
[4,this.checkBannerContainers(e,!0)];case 1:return
t=n.sent(),this.renderFakeBanners(this.getBannerForContainers(t)),
[2]}}))}))},t.prototype.ensureInit=function(e){return void 0===e&&(e=!1),u(this,void
0,void 0,(function(){return c(this,(function(e)
{return[2]}))}))},t.prototype.initEventCallback=function(e){(0,d.debug)("Cannot get
user info outside of
CrazyGames"),this.initState===l.INIT_STATE.INITIALIZED&&e({userInfo:{browser:
{name:"Chrome",version:"89.0.4389.82"},countryCode:"FR",os:
{name:"Windows",version:"10"}}})},t.prototype.renderFakeBanners=function(e){var
t=this;e.forEach((function(e)
{t.renderFakeBanner(e)}))},t.prototype.renderFakeAd=function(e){var t=this;
(0,d.debug)("requesting ".concat(e,"
ad")),this.requestInProgress=!0,this.showOverlay(),this.overlay.innerHTML="<h1>A
".concat(e," ad would appear here</h1>"),this.callListeners("adStarted",
{}),window.setTimeout((function()
{t.requestInProgress=!1,t.callListeners("adFinished",
{}),t.hideOverlay()}),this.adDurationInMs)},t.prototype.showOverlay=function()
{this.overlay.style.display="flex"},t.prototype.hideOverlay=function()
{this.overlay.style.display="none",this.overlay.innerHTML=""},t.prototype.createOver
layStyle=function(){var e=
{position:"fixed",display:"none",width:"100%",height:"100%",top:"0",left:"0",right:"

0",bottom:"0","align-items":"center","justify-content":"center","background-
color":"rgba(0,0,0,0.5)","z-index":"10000"};for(var t in

e)this.overlay.style[t]=e[t]},t.prototype.clearBanner=function(e){(0,d.debug)
("clearBanner ".concat(e))},t.prototype.clearAllBanners=function(){(0,d.debug)
("clearAllBanners")},t}(l.default);t.default=f},675:function(e,t,n){"use strict";var
r,i=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||
{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var
n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t)
{if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value
"+String(t)+" is not a constructor or null");function n()
{this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):
(n.prototype=t.prototype,new n)}),o=this&&this.__createBinding||(Object.create?
function(e,t,n,r){void 0===r&&(r=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!
("get"in i?!t.__esModule:i.writable||i.configurable)||(i=
{enumerable:!0,get:function(){return
t[n]}}),Object.defineProperty(e,r,i)}:function(e,t,n,r){void 0===r&&
(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t)
{Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t)
{e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return
e;var t={};if(null!=e)for(var n in
e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return
a(t,e),t},u=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))
((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e)
{try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t
instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||
[])).next())}))},c=this&&this.__generator||function(e,t){var n,r,i,o,a=
{label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o=
{next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&
(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s)
{return function(o){if(n)throw new TypeError("Generator is already
executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||
((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return
i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return

6/3/24, 1:21 PM
Page 7 of 10

a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case
7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,
(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&
(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1])
{a.label=i[1],i=o;break}if(i&&a.label<i[2])
{a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e
,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?
o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var
l=s(n(807)),d=n(400),f=n(607),h=function(e){function t(){var
t=null!==e&&e.apply(this,arguments)||this;return t.yandexPromise=null,t}return
i(t,e),t.prototype.init=function()
{this.installYandex()},t.prototype.requestAd=function(e){return void 0===e&&
(e="midgame"),u(this,void 0,void 0,(function(){return c(this,(function(t)
{return(0,f.debug)("Requesting ".concat(e," ad")),this.requestInProgress?[2]:
(this.requestInProgress=!0,"rewarded"===e?[2,this.requestRewardedAd()]:
[2,this.requestMidrollAd()])}))}))},t.prototype.requestBanner=function(e){return
u(this,void 0,void 0,(function(){return c(this,(function(e){return(0,f.debug)
("Banner not supported with YandexSDK"),
[2]}))}))},t.prototype.requestResponsiveBanner=function(e){return u(this,void 0,void
0,(function(){return c(this,(function(e){return(0,f.debug)("Responsive banner not
supported with YandexSDK"),[2]}))}))},t.prototype.inviteLink=function(e){return void
0===e&&(e={}),(0,f.debug)("Invite link not supported with
YandexSDK"),""},t.prototype.happytime=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){return(0,f.debug)("Happytime not supported
with YandexSDK"),[2]}))}))},t.prototype.gameplayStart=function(){return u(this,void
0,void 0,(function(){return c(this,(function(e){return(0,f.debug)("Gameplay start
not supported with YandexSDK"),[2]}))}))},t.prototype.gameplayStop=function(){return
u(this,void 0,void 0,(function(){return c(this,(function(e){return(0,f.debug)
("Gameplay stop not supported with YandexSDK"),
[2]}))}))},t.prototype.sdkGameLoadingStart=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){return(0,f.debug)("Game load start from SDK
is not supported with YandexSDK"),
[2]}))}))},t.prototype.sdkGameLoadingStop=function(){return u(this,void 0,void 0,
(function(){return c(this,(function(e){return(0,f.debug)("Game load stop from SDK is
not supported with YandexSDK"),[2]}))}))},t.prototype.ensureInit=function(){return
u(this,void 0,void 0,(function(){var e;return c(this,(function(t){switch(t.label)
{case 0:return this.yandexSDKObj?
[2,this.yandexSDKObj]:this.initState!==l.INIT_STATE.UNINITIALIZED&&this.yandexPromis
e?[3,1]:[2,this.installYandex()];case 1:return e=this,[4,this.yandexPromise];case
2:return e.yandexSDKObj=t.sent(),
[2,this.yandexSDKObj]}}))}))},t.prototype.installYandex=function(){return
u(this,void 0,void 0,(function(){var e,t;return c(this,(function(n){switch(n.label)
{case 0:return(0,f.debug)("Initializing"),this.initState=l.INIT_STATE.REQUESTED,[4,
(0,d.loadScript)("https://yandex.ru/games/sdk/v2")];case 1:return
n.sent(),e=window.YaGames.init(),this.yandexPromise=e,[4,Promise.race([e,new
Promise((function(e,t){setTimeout((function(){t("Yandex SDK was unable to init
within the timeout")}),5e3)}))])];case 2:return t=n.sent(),this.yandexSDKObj=t,
(0,f.debug)("Yandex SDK
initialized"),this.initState=l.INIT_STATE.INITIALIZED,this.callListeners("initialize
d",{userInfo:void 0,locale:t.environment.i18n.lang}),
[2,t]}}))}))},t.prototype.requestMidrollAd=function(){return u(this,void 0,void 0,
(function(){var e=this;return c(this,(function(t){switch(t.label){case
0:return[4,this.ensureInit()];case 1:return
t.sent().adv.showFullscreenAdv({callbacks:{onOpen:function()
{e.requestInProgress=!1,e.callListeners("adStarted",{})},onClose:function()
{e.requestInProgress=!1,e.callListeners("adFinished",{})},onError:function(t)
{e.requestInProgress=!1,e.callListeners("adError",t)}}}),
[2]}}))}))},t.prototype.requestRewardedAd=function(){return u(this,void 0,void 0,
(function(){var e=this;return c(this,(function(t){switch(t.label){case
0:return[4,this.ensureInit()];case 1:return

6/3/24, 1:21 PM
Page 8 of 10

t.sent().adv.showRewardedVideo({callbacks:{onOpen:function()
{e.requestInProgress=!1,e.callListeners("adStarted",{})},onRewarded:function()
{e.requestInProgress=!1,e.callListeners("adFinished",{})},onClose:function()
{e.requestInProgress=!1,e.callListeners("adFinished",{})},onError:function(t)
{e.requestInProgress=!1,e.callListeners("adError",t)}}}),
[2]}}))}))},t.prototype.clearBanner=function(e){(0,f.debug)("clearBanner not
supported with YandexSDK")},t.prototype.clearAllBanners=function(){(0,f.debug)
("clearAllBanners not supported with YandexSDK")},t}
(l.default);t.default=h},400:function(e,t,n){"use strict";var
r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o)
{function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e)
{try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t
instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||
[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,o,a=
{label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o=
{next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&
(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s)
{return function(o){if(n)throw new TypeError("Generator is already
executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||
((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return
i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return
a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case
7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,
(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&
(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1])
{a.label=i[1],i=o;break}if(i&&a.label<i[2])
{a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e
,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?
o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",
{value:!0}),t.loadCrazyAdsIfNeeded=t.loadScript=t.requestInGameBanner=void 0;var
o,a=n(607);function s(e){return new Promise((function(t,n){var
r=document.createElement("script");r.onload=function(){return
t()},r.onerror=function(e){return
n(e)},r.src=e,r.async=!0,document.head.appendChild(r)}))}t.requestInGameBanner=funct
ion(e){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(r)
{if(t=window.CrazygamesAds,(0,a.debug)("Requesting banner to CrazyAds"),!t)throw
n="CrazygamesAds not found, maybe using an adblocker.",(0,a.debug)(n),new
Error(n);return t.requestAds(e.request,e.options),
[2]}))}))},t.loadScript=s,t.loadCrazyAdsIfNeeded=function(e){return
window.CrazygamesAds?Promise.resolve():function(e){if(o)return o;return
o=s(e).then((function(){window.CrazygamesAds.initAds()})),o}
(e)}},607:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e)
{return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",
{value:!0}),t.CrazyEventTypeMap=t.CrazyAdTypeMap=t.debug=t.forceDebug=void 0;var
i,o,a,s=r(n(883)),u=r(n(56)),c=r(n(675)),l=function(){function e(){}return
e.getInstance=function(){if(!this.instance)try{var
e=window.parent;window.location.origin.endsWith("yandex.net")||"true"===f("useYandex
Sdk")?(d("Running with YandexSDK"),this.instance=new
c.default):e.Crazygames&&e.Crazygames.load?(d("Running with
CrazySDK"),this.instance=new s.default):(d("Running with
LocalSDK"),i=!0,this.instance=new u.default)}catch(e){d("Falling back to
CrazySDK"),this.instance=new s.default}return this.instance},e.instance=null,e}
();function d(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];void
0===i&&(i="true"===f("sdk_debug")),i&&(t.length>0?console.log("[JS-SDK]
".concat(e),t):console.log("[JS-SDK] ".concat(e)))}function f(e){return
decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*
[&\\?]"+encodeURIComponent(e).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=
([^&]*))?)?.*$","i"),"$1"))}t.forceDebug=function(e)
{i=e},t.debug=d,t.CrazyAdTypeMap=
{midgame:"midgame",rewarded:"rewarded"},t.CrazyEventTypeMap=

6/3/24, 1:21 PM
Page 9 of 10

{adStarted:"adStarted",adFinished:"adFinished",adError:"adError",adblockDetectionExe
cuted:"adblockDetectionExecuted"},window.CrazyGames=
{CrazySDK:l,CrazyAdType:t.CrazyAdTypeMap,CrazyEventType:t.CrazyEventTypeMap},o="\n.c

razy-banner-container {\n display: flex;\n align-items: center;\n justify-
content: center;\n}\n",

(a=document.createElement("style")).textContent=o,document.head.append(a),t.default=
s.default},378:function(e,t){"use strict";var
n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o)
{function a(e){try{u(r.next(e))}catch(e){o(e)}}function s(e)
{try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t
instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||
[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,i,o,a=
{label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o=
{next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&
(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s)
{return function(o){if(n)throw new TypeError("Generator is already
executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||
((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return
i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return
a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case
7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,
(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&
(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1])
{a.label=i[1],i=o;break}if(i&&a.label<i[2])
{a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e
,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?
o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",
{value:!0}),t.checkContainerVisible=void 0;var i=.95;function o(e,t){return
n(this,void 0,void 0,(function(){return r(this,(function(n){return[2,new
Promise((function(n){var r=new IntersectionObserver((function(e){var
o=e[0];n({isVisible:t||o.intersectionRatio>i,size:
{width:Math.ceil(o.boundingClientRect.width),height:Math.ceil(o.boundingClientRect.h
eight)}}),r.disconnect()}));r.observe(e)}))]}))}))}t.checkContainerVisible=function(
e,t,i,a){return n(this,void 0,void 0,(function(){var n,s,u;return r(this,
(function(r){switch(r.label){case 0:return(n=document.getElementById(e))?[4,o(n,a)]:
(u="The container ".concat(e," is not present on the page"),t(u),[2,
{isVisible:!1,size:{width:0,height:0}}]);case
1:return(s=r.sent()).isVisible?!i||0!==s.size.width&&0!==s.size.height?
(n.classList.add("crazy-banner-container"),[2,s]):(u="The container ".concat(e,"
must have a non-null width and height to render a responsive banner."),t(u),[2,
{isVisible:!1,size:{width:0,height:0}}]):(u="The container ".concat(e," is not
entirely visible on the page"),t(u),[2,s])}}))}))}}},t={};function n(r){var
i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return
e[r].call(o.exports,o,o.exports,n),o.exports}n.g=function(){if("object"==typeof
globalThis)return globalThis;try{return this||new Function("return this")()}catch(e)
