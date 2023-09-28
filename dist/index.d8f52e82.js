var e,t,r,n,i,o,a,c,s,u,l,f,p,h,d,v,g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}var m={},_={},b=g.parcelRequiree88c;null==b&&((b=function(e){if(e in m)return m[e].exports;if(e in _){var t=_[e];delete _[e];var r={id:e,exports:{}};return m[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){_[e]=t},g.parcelRequiree88c=b);var w={},E={},S=function(e){return e&&e.Math===Math&&e};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
S("object"==typeof self&&self)||S("object"==typeof g&&g)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||E||Function("return this")();var j={},L={};// Detect IE8's incomplete defineProperty implementation
j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var O={},k={};k=!L(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var e=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype.call;O=k?x.bind(x):function(){return x.apply(x,arguments)};var T={}.propertyIsEnumerable,M=Object.getOwnPropertyDescriptor;n=M&&!T.call({1:2},1)?function(e){var t=M(this,e);return!!t&&t.enumerable}:T;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var $={},I={},F={},D=Function.prototype,R=D.call,q=k&&D.bind.bind(R,R),A={},H=(F=k?q:function(e){return function(){return R.apply(e,arguments)}})({}.toString),N=F("".slice);A=function(e){return N(H(e),8,-1)};var C=Object,G=F("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
I=L(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!C("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?G(e,""):C(e)}:C;var U={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(e){return null==e};var B=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
U=function(e){if(z(e))throw B("Can't call method on "+e);return e},$=function(e){return I(U(e))};var W={},Y={},Q={},K={},V={},J="object"==typeof document&&document.all,X=(V={all:J,IS_HTMLDDA:void 0===J&&void 0!==J}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
K=V.IS_HTMLDDA?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e};var Z=V.all;Q=V.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:K(e)||e===Z}:function(e){return"object"==typeof e?null!==e:K(e)};var ee={},et={};et=function(e,t){var r;return arguments.length<2?(r=E[e],K(r)?r:void 0):E[e]&&E[e][t]};var er={};er=F({}.isPrototypeOf);var en={},ei={},eo={},ea={};ea="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ec=E.process,es=E.Deno,eu=ec&&ec.versions||es&&es.version,el=eu&&eu.v8;el&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(o=(i=el.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!o&&ea&&(!(i=ea.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=ea.match(/Chrome\/(\d+)/))&&(o=+i[1]),eo=o;var ef=E.String;en=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(ei=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!ef(e)||!(Object(e) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;ee=en?function(e){return"symbol"==typeof e}:function(e){var t=et("Symbol");return K(t)&&er(t.prototype,ep(e))};var eh={},ed={},ev={},eg=String;ev=function(e){try{return eg(e)}catch(e){return"Object"}};var ey=TypeError;// `Assert: IsCallable(argument) is true`
ed=function(e){if(K(e))return e;throw ey(ev(e)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
eh=function(e,t){var r=e[t];return z(r)?void 0:ed(r)};var em={},e_=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
em=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!Q(n=O(r,e))||K(r=e.valueOf)&&!Q(n=O(r,e))||"string"!==t&&K(r=e.toString)&&!Q(n=O(r,e)))return n;throw e_("Can't convert object to primitive value")};var eb={},ew={};ew=!1;var eE={},eS={},ej=Object.defineProperty;eS=function(e,t){try{ej(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var eL="__core-js_shared__";eE=E[eL]||eS(eL,{}),(eb=function(e,t){return eE[e]||(eE[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.2",mode:ew?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var eO={},ek={},ex=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
ek=function(e){return ex(U(e))};var eT=F({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
eO=Object.hasOwn||function(e,t){return eT(ek(e),t)};var eM={},eP=0,e$=Math.random(),eI=F(1..toString);eM=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eI(++eP+e$,36)};var eF=E.Symbol,eD=eb("wks"),eR=en?eF.for||eF:eF&&eF.withoutSetter||eM,eq=TypeError,eA=(eO(eD,e="toPrimitive")||(eD[e]=ei&&eO(eF,e)?eF[e]:eR("Symbol."+e)),eD[e]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
Y=function(e,t){if(!Q(e)||ee(e))return e;var r,n=eh(e,eA);if(n){if(void 0===t&&(t="default"),r=O(n,e,t),!Q(r)||ee(r))return r;throw eq("Can't convert object to primitive value")}return void 0===t&&(t="number"),em(e,t)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
W=function(e){var t=Y(e,"string");return ee(t)?t:t+""};var eH={},eN={},eC=E.document,eG=Q(eC)&&Q(eC.createElement);eN=function(e){return eG?eC.createElement(e):{}},// Thanks to IE8 for its funny defineProperty
eH=!j&&!L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(eN("div"),"a",{get:function(){return 7}}).a});// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eU=Object.getOwnPropertyDescriptor;r=j?eU:function(e,t){if(e=$(e),t=W(t),eH)try{return eU(e,t)}catch(e){}if(eO(e,t))return P(!O(n,e,t),e[t])};var ez={},eB={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
eB=j&&L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eW={},eY=String,eQ=TypeError;// `Assert: Type(argument) is Object`
eW=function(e){if(Q(e))return e;throw eQ(eY(e)+" is not an object")};var eK=TypeError,eV=Object.defineProperty,eJ=Object.getOwnPropertyDescriptor,eX="enumerable",eZ="configurable",e0="writable";a=j?eB?function(e,t,r){if(eW(e),t=W(t),eW(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e0 in r&&!r[e0]){var n=eJ(e,t);n&&n[e0]&&(e[t]=r.value,r={configurable:eZ in r?r[eZ]:n[eZ],enumerable:eX in r?r[eX]:n[eX],writable:!1})}return eV(e,t,r)}:eV:function(e,t,r){if(eW(e),t=W(t),eW(r),eH)try{return eV(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=j?function(e,t,r){return a(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e1={},e2={},e4=Function.prototype,e3=j&&Object.getOwnPropertyDescriptor,e7=eO(e4,"name")&&(!j||j&&e3(e4,"name").configurable),e8={},e9=F(Function.toString);K(eE.inspectSource)||(eE.inspectSource=function(e){return e9(e)}),e8=eE.inspectSource;var e5={},e6={},te=E.WeakMap;e6=K(te)&&/native code/.test(String(te));var tt={},tr=eb("keys");tt=function(e){return tr[e]||(tr[e]=eM(e))};var tn={};tn={};var ti="Object already initialized",to=E.TypeError,ta=E.WeakMap;if(e6||eE.state){var tc=eE.state||(eE.state=new ta);/* eslint-disable no-self-assign -- prototype methods protection */tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,/* eslint-enable no-self-assign -- prototype methods protection */c=function(e,t){if(tc.has(e))throw to(ti);return t.facade=e,tc.set(e,t),t},s=function(e){return tc.get(e)||{}},u=function(e){return tc.has(e)}}else{var ts=tt("state");tn[ts]=!0,c=function(e,t){if(eO(e,ts))throw to(ti);return t.facade=e,ez(e,ts,t),t},s=function(e){return eO(e,ts)?e[ts]:{}},u=function(e){return eO(e,ts)}}var tu=(e5={set:c,get:s,has:u,enforce:function(e){return u(e)?s(e):c(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=s(t)).type!==e)throw to("Incompatible receiver, "+e+" required");return r}}}).enforce,tl=e5.get,tf=String,tp=Object.defineProperty,th=F("".slice),td=F("".replace),tv=F([].join),tg=j&&!L(function(){return 8!==tp(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tm=e2=function(e,t,r){"Symbol("===th(tf(t),0,7)&&(t="["+td(tf(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eO(e,"name")||e7&&e.name!==t)&&(j?tp(e,"name",{value:t,configurable:!0}):e.name=t),tg&&r&&eO(r,"arity")&&e.length!==r.arity&&tp(e,"length",{value:r.arity});try{r&&eO(r,"constructor")&&r.constructor?j&&tp(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tu(e);return eO(n,"source")||(n.source=tv(ty,"string"==typeof t?t:"")),e};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=tm(function(){return K(this)&&tl(this).source||e8(this)},"toString"),e1=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(K(r)&&e2(r,o,n),n.global)i?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:a(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tb={},tw={},tE={},tS={},tj={},tL=Math.ceil,tO=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
tj=Math.trunc||function(e){var t=+e;return(t>0?tO:tL)(t)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
tS=function(e){var t=+e;// eslint-disable-next-line no-self-compare -- NaN check
return t!=t||0===t?0:tj(t)};var tk=Math.max,tx=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
tE=function(e,t){var r=tS(e);return r<0?tk(r+t,0):tx(r,t)};var tT={},tM={},tP=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
tM=function(e){return e>0?tP(tS(e),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
tT=function(e){return tM(e.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var t$=function(e){return function(t,r,n){var i,o=$(t),a=tT(o),c=tE(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(e&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((i=o[c++])!=i)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((e||c in o)&&o[c]===r)return e||c||0;return!e&&-1}},tI={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:t$(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:t$(!1)}.indexOf,tF=F([].push);tw=function(e,t){var r,n=$(e),i=0,o=[];for(r in n)!eO(tn,r)&&eO(n,r)&&tF(o,r);// Don't enum bug & hidden keys
for(;t.length>i;)eO(n,r=t[i++])&&(~tI(o,r)||tF(o,r));return o};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");l=Object.getOwnPropertyNames||function(e){return tw(e,tD)},f=Object.getOwnPropertySymbols;var tR=F([].concat);// all object keys, includes non-enumerable and symbols
tb=et("Reflect","ownKeys")||function(e){var t=l(eW(e));return f?tR(t,f(e)):t},t_=function(e,t,n){for(var i=tb(t),o=0;o<i.length;o++){var c=i[o];eO(e,c)||n&&eO(n,c)||a(e,c,r(t,c))}};var tq={},tA=/#|\.prototype\./,tH=function(e,t){var r=tC[tN(e)];return r===tU||r!==tG&&(K(t)?L(t):!!t)},tN=tH.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tC=tH.data={},tG=tH.NATIVE="N",tU=tH.POLYFILL="P";tq=tH,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/w=function(e,t){var n,i,o,a,c,s=e.target,u=e.global,l=e.stat;if(n=u?E:l?E[s]||eS(s,{}):(E[s]||{}).prototype)for(i in t){// contained in target
if(a=t[i],o=e.dontCallGetSet?(c=r(n,i))&&c.value:n[i],!tq(u?i:s+(l?".":"#")+i,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(e.sham||o&&o.sham)&&ez(a,"sham",!0),e1(n,i,a,e)}};var tz={},tB={},tW=Function.prototype,tY=tW.apply,tQ=tW.call;// eslint-disable-next-line es/no-reflect -- safe
tB="object"==typeof Reflect&&Reflect.apply||(k?tQ.bind(tY):function(){return tQ.apply(tY,arguments)});var tK={},tV={},tJ=(tV=function(e){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===A(e))return F(e)})(tV.bind);// optional / simple context binding
tK=function(e,t){return ed(e),void 0===t?e:k?tJ(e,t):function(){return e.apply(t,arguments)}};var tX={};tX=et("document","documentElement");var tZ={};tZ=F([].slice);var t0={},t1=TypeError;t0=function(e,t){if(e<t)throw t1("Not enough arguments");return e};var t2={};// eslint-disable-next-line redos/no-vulnerable -- safe
t2=/(?:ipad|iphone|ipod).*applewebkit/i.test(ea);var t4={};t4="process"===A(E.process);var t3=E.setImmediate,t7=E.clearImmediate,t8=E.process,t9=E.Dispatch,t5=E.Function,t6=E.MessageChannel,re=E.String,rt=0,rr={},rn="onreadystatechange";L(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
p=E.location});var ri=function(e){if(eO(rr,e)){var t=rr[e];delete rr[e],t()}},ro=function(e){return function(){ri(e)}},ra=function(e){ri(e.data)},rc=function(e){// old engines have not location.origin
E.postMessage(re(e),p.protocol+"//"+p.host)};t3&&t7||(t3=function(e){t0(arguments.length,1);var t=K(e)?e:t5(e),r=tZ(arguments,1);return rr[++rt]=function(){tB(t,void 0,r)},h(rt),rt},t7=function(e){delete rr[e]},t4?h=function(e){t8.nextTick(ro(e))}:t9&&t9.now?h=function(e){t9.now(ro(e))}:t6&&!t2?(v=(d=new t6).port2,d.port1.onmessage=ra,h=tK(v.postMessage,v)):E.addEventListener&&K(E.postMessage)&&!E.importScripts&&p&&"file:"!==p.protocol&&!L(rc)?(h=rc,E.addEventListener("message",ra,!1)):h=rn in eN("script")?function(e){tX.appendChild(eN("script"))[rn]=function(){tX.removeChild(this),ri(e)}}:function(e){setTimeout(ro(e),0)});var rs=(tz={set:t3,clear:t7}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
w({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rs},{clearImmediate:rs});var ru=tz.set,rl={},rf={};/* global Bun -- Deno case */rf="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rp=E.Function,rh=/MSIE .\./.test(ea)||rf&&((t=E.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
rl=function(e,t){var r=t?2:1;return rh?function(n,i/* , ...arguments */){var o=t0(arguments.length,1)>r,a=K(n)?n:rp(n),c=o?tZ(arguments,r):[],s=o?function(){tB(a,this,c)}:a;return t?e(s,i):e(s)}:e};// https://github.com/oven-sh/bun/issues/1633
var rd=E.setImmediate?rl(ru,!1):ru;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
w({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rd},{setImmediate:rd});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,c,s=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
i(s,"_invoke",{value:(a=new k(o||[]),c=p,function(r,i){if(c===h)throw Error("Generator is already running");if(c===d){if("throw"===r)throw i;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===i&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v);var a=f(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(s){if(s===v)continue;return s}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var u=f(e,n,a);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(c=d,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=u.arg)}})}),s)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function y(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var _={};u(_,a,function(){return this});var b=Object.getPrototypeOf,w=b&&b(b(x([])));w&&w!==r&&n.call(w,a)&&// of the polyfill.
(_=w);var E=m.prototype=g.prototype=Object.create(_);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function S(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function j(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,c){var s=f(e[i],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,c)},function(e){r("throw",e,a,c)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,a(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,a,c)})}}(i,o,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function x(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return y.prototype=m,i(E,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},S(j.prototype),u(j.prototype,c,function(){return this}),e.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new j(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(e){return e.done?e.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
S(E),u(E,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(E,a,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=x,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return c.type="throw",c.arg=e,r.next=n,i&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return i("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),v}},e}({});try{regeneratorRuntime=rv}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rv:Function("r","regeneratorRuntime = r")(rv)}const rg="https://forkify-api.herokuapp.com/api/v2/recipes/",ry=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]);if(!t.ok)throw Error(`${r.message} (${t.status})`);let r=await t.json();return r}catch(e){throw e}},rm={recipe:{},search:{query:" ",results:[],page:1,resultsPerPage:12}},r_=async function(e){try{if(!e)return;let t=await ry(`${rg}${e}`),{recipe:r}=t.data;rm.recipe={id:r.id,title:r.title,publisher:r.publisher,image:r.image_url,sourceUrl:r.source_url,cookingTime:r.cooking_time,servings:r.servings,ingredients:r.ingredients}}catch(e){throw e;//to show error from controller
}},rb=async function(e){try{if(rm.search.query=e,!e)return;let t=await ry(`${rg}?search=${e}`);rm.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url}))}catch(e){throw e}},rw=function(e=rm.search.page){rm.search.page=e;let t=(e-1)*rm.search.resultsPerPage,r=e*rm.search.resultsPerPage;return rm.search.results.slice(t,r)},rE=function(e){rm.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rm.recipe.servings;// new quantity= oldQuantity *newServings / oldServings
}),rm.recipe.servings=e};var rS={};rS=new URL(b("27Lyk").resolve("hfd23"),import.meta.url).toString();class rj{_data;//function to initialize _data
render(e){if(!e||Array.isArray(e)&&0==e.length)return this.renderError();this._data=e,this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`<div class="spinner">
      <svg>
        <use href="${/*@__PURE__*/y(rS)}svg#icon-loader"></use>
      </svg>
      </div> `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}//render error message
renderError(e=this._errorMessage){let t=`
      <div class="error">
              <div>
                <svg>
                  <use href="${/*@__PURE__*/y(rS)}svg#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>------------${e}------------- </p>
            </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}//render success message
renderMessage(e=this._message){let t=`
      <div class="message">
              <div>
                <svg>
                  <use href="${/*@__PURE__*/y(rS)}svg#icon-smile"></use>
                </svg>
              </div>
              <p>------------${e}------------- </p>
            </div>
      `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}var rL={};rL=new URL(b("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rO extends rj{_parentElement=document.querySelector(".recipe");_errorMessage=" Recipe couldn't be found ";_message=" ";addHandlerRender(e){["load","hashchange"].forEach(t=>window.addEventListener(t,e))}_generateMarkup(){return`
    <figure class="recipe__fig">
          <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
          <h1 class="recipe__title">
            <span>${this._data.title}</span>
          </h1>
        </figure>

        <div class="recipe__details">
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rL)}svg#icon-clock"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
            <span class="recipe__info-text">minutes</span>
          </div>
          <div class="recipe__info">
            <svg class="recipe__info-icon">
              <use href="${/*@__PURE__*/y(rL)}svg#icon-users"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
            <span class="recipe__info-text">servings</span>

            <div class="recipe__info-buttons">
              <button id = "decrease" class="btn--tiny btn--update-servings" 
              data-updateServingsTo="${this._data.servings-1}">
                <svg>
                  <use href="${/*@__PURE__*/y(rL)}svg#icon-minus-circle"></use>
                </svg>
              </button>
              <button id="increase" class="btn--tiny btn--update-servings"
              data-updateServingsTo="${this._data.servings+1}">
                <svg>
                  <use href="${/*@__PURE__*/y(rL)}svg#icon-plus-circle"></use>
                </svg>
              </button>
            </div>
          </div>
                    
        </div>

        <div class="recipe__ingredients">
          <h2 class="heading--2">Recipe ingredients</h2>
          <ul class="recipe__ingredient-list">

          ${this._data.ingredients.map(e=>this._generateMarkupIngredient(e)).join("")};
            

            
        </div>

        <div class="recipe__directions">
          <h2 class="heading--2">How to cook it</h2>
          <p class="recipe__directions-text">
            This recipe was carefully designed and tested by
            <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
            directions at their website.
          </p>
          <a
            class="btn--small recipe__btn"
            href="${this._data.sourceUrl}"
            target="_blank"
          >
            <span>Directions</span>
            <svg class="search__icon">
              <use href="${/*@__PURE__*/y(rL)}svg#icon-arrow-right"></use>
            </svg>
          </a>
        </div>`}_generateMarkupIngredient(e){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${/*@__PURE__*/y(rL)}svg#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${e.quantity}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${e.unit}</span>
              ${e.description}
            </div>
        </li>

      `}_addHandlerUpdatedServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--update-servings");if(!r)return;let{updateservingsto:n}=r.dataset;+n>0&&e(+n)})}}var rk=new rO;class rx{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clear(),e}_clear(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){//we cannot directly use handler because when we submit a form page will reload so we need to prevent default action first.
this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rT=new rx;class rM extends rj{_parentElement=document.querySelector(".results");_errorMessage=" No recipes found .Try Again ";_message=" ";_generateMarkup(){return this._data.map(e=>this._generateMarkupPreview(e)).join("")}_generateMarkupPreview(e){return`
            <li class="preview">
            <a class="preview__link " href="#${e.id}">
              <figure class="preview__fig">
                <img src="${e.image}" alt="${e.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${e.title}</h4>
                <p class="preview__publisher">${e.publisher}</p>
                
              </div>
            </a>
          </li>
            `}}var rP=new rM;class r$ extends rj{_parentElement=document.querySelector(".pagination");_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//page 1, there are more pages
1==e&&t>1?this._generateMarkupTextRight(e):e==t&&t>1?this._generateMarkupTextleft(e):e>1&&e<t?this._generateMarkupTextBoth(e):"")}_generateMarkupTextRight(e){return`
    <button class="btn--inline pagination__btn--next">
    <span>PAGE ${e+1}</span>
    <svg class="search__icon">
      <use href="${/*@__PURE__*/y(rL)}svg#icon-arrow-right"></use>
    </svg>
  </button>
    `}_generateMarkupTextleft(e){return`
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${/*@__PURE__*/y(rL)}svg#icon-arrow-left"></use>
      </svg>
      <span>PAGE ${e-1}</span>
    </button>
      `}_generateMarkupTextBoth(e){return`
      
   ${this._generateMarkupTextleft(e)}
   ${this._generateMarkupTextRight(e)}

    `}addHandlerCLick(e){document.querySelector(".pagination").addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&// btn.innerText=PAGE 1,PAGE 2 ... PAGE N
e(+r.innerText.slice(5))})}}var rI=new r$;///////////////////////////////////////
async function rF(){try{let e=window.location.hash.slice(1);if(!e)return;rk.renderSpinner(),//loading recipe
await r_(e),rk.render(rm.recipe)}catch(e){rk.renderError()}}const rD=async function(){try{// get search query
let e=rT.getQuery();if(!e)return;rP.renderSpinner(),//load search results
await rb(e),rP.render(rw()),rI.render(rm.search)}catch(e){throw e}};rk.addHandlerRender(rF),rT.addHandlerSearch(rD),rI.addHandlerCLick(function(e){rP.render(rw(e)),rI.render(rm.search)}),rk._addHandlerUpdatedServings(function(e){//change state servings
rE(e),rk.render(rm.recipe)});//# sourceMappingURL=index.d8f52e82.js.map

//# sourceMappingURL=index.d8f52e82.js.map
