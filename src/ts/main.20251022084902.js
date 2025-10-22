var yE=Object.create;var L_=Object.defineProperty;var xE=Object.getOwnPropertyDescriptor;var SE=Object.getOwnPropertyNames;var bE=Object.getPrototypeOf,ME=Object.prototype.hasOwnProperty;var vi=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var EE=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of SE(t))!ME.call(e,s)&&s!==n&&L_(e,s,{get:()=>t[s],enumerable:!(i=xE(t,s))||i.enumerable});return e};var Ns=(e,t,n)=>(n=e!=null?yE(bE(e)):{},EE(t||!e||!e.__esModule?L_(n,"default",{value:e,enumerable:!0}):n,e));var G_=vi(Ee=>{"use strict";function fp(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<du(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Oi(e){return e.length===0?null:e[0]}function mu(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,r=s>>>1;i<r;){var a=2*(i+1)-1,o=e[a],l=a+1,c=e[l];if(0>du(o,n))l<s&&0>du(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[a]=n,i=a);else if(l<s&&0>du(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function du(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Ee.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(N_=performance,Ee.unstable_now=function(){return N_.now()}):(cp=Date,O_=cp.now(),Ee.unstable_now=function(){return cp.now()-O_});var N_,cp,O_,es=[],Os=[],TE=1,ei=null,cn=3,dp=!1,ul=!1,hl=!1,pp=!1,B_=typeof setTimeout=="function"?setTimeout:null,z_=typeof clearTimeout=="function"?clearTimeout:null,I_=typeof setImmediate<"u"?setImmediate:null;function pu(e){for(var t=Oi(Os);t!==null;){if(t.callback===null)mu(Os);else if(t.startTime<=e)mu(Os),t.sortIndex=t.expirationTime,fp(es,t);else break;t=Oi(Os)}}function mp(e){if(hl=!1,pu(e),!ul)if(Oi(es)!==null)ul=!0,Aa||(Aa=!0,Ta());else{var t=Oi(Os);t!==null&&gp(mp,t.startTime-e)}}var Aa=!1,fl=-1,F_=5,V_=-1;function H_(){return pp?!0:!(Ee.unstable_now()-V_<F_)}function up(){if(pp=!1,Aa){var e=Ee.unstable_now();V_=e;var t=!0;try{t:{ul=!1,hl&&(hl=!1,z_(fl),fl=-1),dp=!0;var n=cn;try{e:{for(pu(e),ei=Oi(es);ei!==null&&!(ei.expirationTime>e&&H_());){var i=ei.callback;if(typeof i=="function"){ei.callback=null,cn=ei.priorityLevel;var s=i(ei.expirationTime<=e);if(e=Ee.unstable_now(),typeof s=="function"){ei.callback=s,pu(e),t=!0;break e}ei===Oi(es)&&mu(es),pu(e)}else mu(es);ei=Oi(es)}if(ei!==null)t=!0;else{var r=Oi(Os);r!==null&&gp(mp,r.startTime-e),t=!1}}break t}finally{ei=null,cn=n,dp=!1}t=void 0}}finally{t?Ta():Aa=!1}}}var Ta;typeof I_=="function"?Ta=function(){I_(up)}:typeof MessageChannel<"u"?(hp=new MessageChannel,P_=hp.port2,hp.port1.onmessage=up,Ta=function(){P_.postMessage(null)}):Ta=function(){B_(up,0)};var hp,P_;function gp(e,t){fl=B_(function(){e(Ee.unstable_now())},t)}Ee.unstable_IdlePriority=5;Ee.unstable_ImmediatePriority=1;Ee.unstable_LowPriority=4;Ee.unstable_NormalPriority=3;Ee.unstable_Profiling=null;Ee.unstable_UserBlockingPriority=2;Ee.unstable_cancelCallback=function(e){e.callback=null};Ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F_=0<e?Math.floor(1e3/e):5};Ee.unstable_getCurrentPriorityLevel=function(){return cn};Ee.unstable_next=function(e){switch(cn){case 1:case 2:case 3:var t=3;break;default:t=cn}var n=cn;cn=t;try{return e()}finally{cn=n}};Ee.unstable_requestPaint=function(){pp=!0};Ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=cn;cn=e;try{return t()}finally{cn=n}};Ee.unstable_scheduleCallback=function(e,t,n){var i=Ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:TE++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,fp(Os,e),Oi(es)===null&&e===Oi(Os)&&(hl?(z_(fl),fl=-1):hl=!0,gp(mp,n-i))):(e.sortIndex=s,fp(es,e),ul||dp||(ul=!0,Aa||(Aa=!0,Ta()))),e};Ee.unstable_shouldYield=H_;Ee.unstable_wrapCallback=function(e){var t=cn;return function(){var n=cn;cn=t;try{return e.apply(this,arguments)}finally{cn=n}}}});var W_=vi((LU,k_)=>{"use strict";k_.exports=G_()});var nv=vi(Ht=>{"use strict";var vp=Symbol.for("react.transitional.element"),AE=Symbol.for("react.portal"),wE=Symbol.for("react.fragment"),CE=Symbol.for("react.strict_mode"),RE=Symbol.for("react.profiler"),DE=Symbol.for("react.consumer"),UE=Symbol.for("react.context"),LE=Symbol.for("react.forward_ref"),NE=Symbol.for("react.suspense"),OE=Symbol.for("react.memo"),j_=Symbol.for("react.lazy"),X_=Symbol.iterator;function IE(e){return e===null||typeof e!="object"?null:(e=X_&&e[X_]||e["@@iterator"],typeof e=="function"?e:null)}var J_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,$_={};function Ca(e,t,n){this.props=e,this.context=t,this.refs=$_,this.updater=n||J_}Ca.prototype.isReactComponent={};Ca.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ca.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function tv(){}tv.prototype=Ca.prototype;function yp(e,t,n){this.props=e,this.context=t,this.refs=$_,this.updater=n||J_}var xp=yp.prototype=new tv;xp.constructor=yp;Q_(xp,Ca.prototype);xp.isPureReactComponent=!0;var q_=Array.isArray,Te={H:null,A:null,T:null,S:null,V:null},ev=Object.prototype.hasOwnProperty;function Sp(e,t,n,i,s,r){return n=r.ref,{$$typeof:vp,type:e,key:t,ref:n!==void 0?n:null,props:r}}function PE(e,t){return Sp(e.type,t,void 0,void 0,void 0,e.props)}function bp(e){return typeof e=="object"&&e!==null&&e.$$typeof===vp}function BE(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Y_=/\/+/g;function _p(e,t){return typeof e=="object"&&e!==null&&e.key!=null?BE(""+e.key):t.toString(36)}function Z_(){}function zE(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Z_,Z_):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function wa(e,t,n,i,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"bigint":case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case vp:case AE:a=!0;break;case j_:return a=e._init,wa(a(e._payload),t,n,i,s)}}if(a)return s=s(e),a=i===""?"."+_p(e,0):i,q_(s)?(n="",a!=null&&(n=a.replace(Y_,"$&/")+"/"),wa(s,t,n,"",function(c){return c})):s!=null&&(bp(s)&&(s=PE(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(Y_,"$&/")+"/")+a)),t.push(s)),1;a=0;var o=i===""?".":i+":";if(q_(e))for(var l=0;l<e.length;l++)i=e[l],r=o+_p(i,l),a+=wa(i,t,n,r,s);else if(l=IE(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,r=o+_p(i,l++),a+=wa(i,t,n,r,s);else if(r==="object"){if(typeof e.then=="function")return wa(zE(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return a}function gu(e,t,n){if(e==null)return e;var i=[],s=0;return wa(e,i,"","",function(r){return t.call(n,r,s++)}),i}function FE(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var K_=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function VE(){}Ht.Children={map:gu,forEach:function(e,t,n){gu(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gu(e,function(){t++}),t},toArray:function(e){return gu(e,function(t){return t})||[]},only:function(e){if(!bp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ht.Component=Ca;Ht.Fragment=wE;Ht.Profiler=RE;Ht.PureComponent=yp;Ht.StrictMode=CE;Ht.Suspense=NE;Ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Te;Ht.__COMPILER_RUNTIME={__proto__:null,c:function(e){return Te.H.useMemoCache(e)}};Ht.cache=function(e){return function(){return e.apply(null,arguments)}};Ht.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=Q_({},e.props),s=e.key,r=void 0;if(t!=null)for(a in t.ref!==void 0&&(r=void 0),t.key!==void 0&&(s=""+t.key),t)!ev.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];i.children=o}return Sp(e.type,s,void 0,void 0,r,i)};Ht.createContext=function(e){return e={$$typeof:UE,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:DE,_context:e},e};Ht.createElement=function(e,t,n){var i,s={},r=null;if(t!=null)for(i in t.key!==void 0&&(r=""+t.key),t)ev.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var o=Array(a),l=0;l<a;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in a=e.defaultProps,a)s[i]===void 0&&(s[i]=a[i]);return Sp(e,r,void 0,void 0,null,s)};Ht.createRef=function(){return{current:null}};Ht.forwardRef=function(e){return{$$typeof:LE,render:e}};Ht.isValidElement=bp;Ht.lazy=function(e){return{$$typeof:j_,_payload:{_status:-1,_result:e},_init:FE}};Ht.memo=function(e,t){return{$$typeof:OE,type:e,compare:t===void 0?null:t}};Ht.startTransition=function(e){var t=Te.T,n={};Te.T=n;try{var i=e(),s=Te.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(VE,K_)}catch(r){K_(r)}finally{Te.T=t}};Ht.unstable_useCacheRefresh=function(){return Te.H.useCacheRefresh()};Ht.use=function(e){return Te.H.use(e)};Ht.useActionState=function(e,t,n){return Te.H.useActionState(e,t,n)};Ht.useCallback=function(e,t){return Te.H.useCallback(e,t)};Ht.useContext=function(e){return Te.H.useContext(e)};Ht.useDebugValue=function(){};Ht.useDeferredValue=function(e,t){return Te.H.useDeferredValue(e,t)};Ht.useEffect=function(e,t,n){var i=Te.H;if(typeof n=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return i.useEffect(e,t)};Ht.useId=function(){return Te.H.useId()};Ht.useImperativeHandle=function(e,t,n){return Te.H.useImperativeHandle(e,t,n)};Ht.useInsertionEffect=function(e,t){return Te.H.useInsertionEffect(e,t)};Ht.useLayoutEffect=function(e,t){return Te.H.useLayoutEffect(e,t)};Ht.useMemo=function(e,t){return Te.H.useMemo(e,t)};Ht.useOptimistic=function(e,t){return Te.H.useOptimistic(e,t)};Ht.useReducer=function(e,t,n){return Te.H.useReducer(e,t,n)};Ht.useRef=function(e){return Te.H.useRef(e)};Ht.useState=function(e){return Te.H.useState(e)};Ht.useSyncExternalStore=function(e,t,n){return Te.H.useSyncExternalStore(e,t,n)};Ht.useTransition=function(){return Te.H.useTransition()};Ht.version="19.1.1"});var dl=vi((OU,iv)=>{"use strict";iv.exports=nv()});var rv=vi(Sn=>{"use strict";var HE=dl();function sv(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Is(){}var xn={d:{f:Is,r:function(){throw Error(sv(522))},D:Is,C:Is,L:Is,m:Is,X:Is,S:Is,M:Is},p:0,findDOMNode:null},GE=Symbol.for("react.portal");function kE(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:GE,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var pl=HE.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _u(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xn;Sn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(sv(299));return kE(e,t,null,n)};Sn.flushSync=function(e){var t=pl.T,n=xn.p;try{if(pl.T=null,xn.p=2,e)return e()}finally{pl.T=t,xn.p=n,xn.d.f()}};Sn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,xn.d.C(e,t))};Sn.prefetchDNS=function(e){typeof e=="string"&&xn.d.D(e)};Sn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=_u(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?xn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:r}):n==="script"&&xn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};Sn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=_u(t.as,t.crossOrigin);xn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&xn.d.M(e)};Sn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=_u(n,t.crossOrigin);xn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};Sn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=_u(t.as,t.crossOrigin);xn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else xn.d.m(e)};Sn.requestFormReset=function(e){xn.d.r(e)};Sn.unstable_batchedUpdates=function(e,t){return e(t)};Sn.useFormState=function(e,t,n){return pl.H.useFormState(e,t,n)};Sn.useFormStatus=function(){return pl.H.useHostTransitionStatus()};Sn.version="19.1.1"});var lv=vi((PU,ov)=>{"use strict";function av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(av)}catch(e){console.error(e)}}av(),ov.exports=rv()});var ub=vi(Fh=>{"use strict";var Ye=W_(),Dy=dl(),WE=lv();function Y(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Uy(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ec(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ly(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cv(e){if(ec(e)!==e)throw Error(Y(188))}function XE(e){var t=e.alternate;if(!t){if(t=ec(e),t===null)throw Error(Y(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var r=s.alternate;if(r===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===n)return cv(s),e;if(r===i)return cv(s),t;r=r.sibling}throw Error(Y(188))}if(n.return!==i.return)n=s,i=r;else{for(var a=!1,o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a){for(o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a)throw Error(Y(189))}}if(n.alternate!==i)throw Error(Y(190))}if(n.tag!==3)throw Error(Y(188));return n.stateNode.current===n?e:t}function Ny(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Ny(e),t!==null)return t;e=e.sibling}return null}var xe=Object.assign,qE=Symbol.for("react.element"),vu=Symbol.for("react.transitional.element"),Ml=Symbol.for("react.portal"),Ia=Symbol.for("react.fragment"),Oy=Symbol.for("react.strict_mode"),tm=Symbol.for("react.profiler"),YE=Symbol.for("react.provider"),Iy=Symbol.for("react.consumer"),as=Symbol.for("react.context"),Km=Symbol.for("react.forward_ref"),em=Symbol.for("react.suspense"),nm=Symbol.for("react.suspense_list"),jm=Symbol.for("react.memo"),zs=Symbol.for("react.lazy");Symbol.for("react.scope");var im=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var ZE=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var uv=Symbol.iterator;function ml(e){return e===null||typeof e!="object"?null:(e=uv&&e[uv]||e["@@iterator"],typeof e=="function"?e:null)}var KE=Symbol.for("react.client.reference");function sm(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===KE?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ia:return"Fragment";case tm:return"Profiler";case Oy:return"StrictMode";case em:return"Suspense";case nm:return"SuspenseList";case im:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Ml:return"Portal";case as:return(e.displayName||"Context")+".Provider";case Iy:return(e._context.displayName||"Context")+".Consumer";case Km:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case jm:return t=e.displayName||null,t!==null?t:sm(e.type)||"Memo";case zs:t=e._payload,e=e._init;try{return sm(e(t))}catch{}}return null}var El=Array.isArray,Rt=Dy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=WE.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Or={pending:!1,data:null,method:null,action:null},rm=[],Pa=-1;function Hi(e){return{current:e}}function tn(e){0>Pa||(e.current=rm[Pa],rm[Pa]=null,Pa--)}function we(e,t){Pa++,rm[Pa]=e.current,e.current=t}var zi=Hi(null),Hl=Hi(null),Zs=Hi(null),Zu=Hi(null);function Ku(e,t){switch(we(Zs,t),we(Hl,e),we(zi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?gy(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=gy(t),e=QS(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tn(zi),we(zi,e)}function eo(){tn(zi),tn(Hl),tn(Zs)}function am(e){e.memoizedState!==null&&we(Zu,e);var t=zi.current,n=QS(t,e.type);t!==n&&(we(Hl,e),we(zi,n))}function ju(e){Hl.current===e&&(tn(zi),tn(Hl)),Zu.current===e&&(tn(Zu),Jl._currentValue=Or)}var om=Object.prototype.hasOwnProperty,Jm=Ye.unstable_scheduleCallback,Mp=Ye.unstable_cancelCallback,jE=Ye.unstable_shouldYield,JE=Ye.unstable_requestPaint,Fi=Ye.unstable_now,QE=Ye.unstable_getCurrentPriorityLevel,Py=Ye.unstable_ImmediatePriority,By=Ye.unstable_UserBlockingPriority,Ju=Ye.unstable_NormalPriority,$E=Ye.unstable_LowPriority,zy=Ye.unstable_IdlePriority,tT=Ye.log,eT=Ye.unstable_setDisableYieldValue,nc=null,Gn=null;function Ws(e){if(typeof tT=="function"&&eT(e),Gn&&typeof Gn.setStrictMode=="function")try{Gn.setStrictMode(nc,e)}catch{}}var kn=Math.clz32?Math.clz32:sT,nT=Math.log,iT=Math.LN2;function sT(e){return e>>>=0,e===0?32:31-(nT(e)/iT|0)|0}var yu=256,xu=4194304;function Ur(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Eh(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~r,i!==0?s=Ur(i):(a&=o,a!==0?s=Ur(a):n||(n=o&~e,n!==0&&(s=Ur(n))))):(o=i&~r,o!==0?s=Ur(o):a!==0?s=Ur(a):n||(n=i&~e,n!==0&&(s=Ur(n)))),s===0?0:t!==0&&t!==s&&(t&r)===0&&(r=s&-s,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:s}function ic(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function rT(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fy(){var e=yu;return yu<<=1,(yu&4194048)===0&&(yu=256),e}function Vy(){var e=xu;return xu<<=1,(xu&62914560)===0&&(xu=4194304),e}function Ep(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function sc(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function aT(e,t,n,i,s,r){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var h=31-kn(n),d=1<<h;o[h]=0,l[h]=-1;var f=c[h];if(f!==null)for(c[h]=null,h=0;h<f.length;h++){var p=f[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&Hy(e,i,0),r!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function Hy(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-kn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function Gy(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-kn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Qm(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $m(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ky(){var e=ee.p;return e!==0?e:(e=window.event,e===void 0?32:lb(e.type))}function oT(e,t){var n=ee.p;try{return ee.p=e,t()}finally{ee.p=n}}var rr=Math.random().toString(36).slice(2),un="__reactFiber$"+rr,Un="__reactProps$"+rr,fo="__reactContainer$"+rr,lm="__reactEvents$"+rr,lT="__reactListeners$"+rr,cT="__reactHandles$"+rr,hv="__reactResources$"+rr,rc="__reactMarker$"+rr;function tg(e){delete e[un],delete e[Un],delete e[lm],delete e[lT],delete e[cT]}function Ba(e){var t=e[un];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fo]||n[un]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=yy(e);e!==null;){if(n=e[un])return n;e=yy(e)}return t}e=n,n=e.parentNode}return null}function po(e){if(e=e[un]||e[fo]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Tl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(Y(33))}function Ya(e){var t=e[hv];return t||(t=e[hv]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Qe(e){e[rc]=!0}var Wy=new Set,Xy={};function Xr(e,t){no(e,t),no(e+"Capture",t)}function no(e,t){for(Xy[e]=t,e=0;e<t.length;e++)Wy.add(t[e])}var uT=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fv={},dv={};function hT(e){return om.call(dv,e)?!0:om.call(fv,e)?!1:uT.test(e)?dv[e]=!0:(fv[e]=!0,!1)}function Iu(e,t,n){if(hT(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Su(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ns(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Tp,pv;function La(e){if(Tp===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Tp=t&&t[1]||"",pv=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tp+e+pv}var Ap=!1;function wp(e,t){if(!e||Ap)return"";Ap=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var f=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){f=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){f=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&f&&typeof p.stack=="string")return[p.stack,f.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],o=r[1];if(a&&o){var l=a.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{Ap=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?La(n):""}function fT(e){switch(e.tag){case 26:case 27:case 5:return La(e.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 15:return wp(e.type,!1);case 11:return wp(e.type.render,!1);case 1:return wp(e.type,!0);case 31:return La("Activity");default:return""}}function mv(e){try{var t="";do t+=fT(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ii(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dT(e){var t=qy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){i=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qu(e){e._valueTracker||(e._valueTracker=dT(e))}function Yy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=qy(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function $u(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pT=/[\n"\\]/g;function ai(e){return e.replace(pT,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function cm(e,t,n,i,s,r,a,o){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ii(t)):e.value!==""+ii(t)&&(e.value=""+ii(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?um(e,a,ii(t)):n!=null?um(e,a,ii(n)):i!=null&&e.removeAttribute("value"),s==null&&r!=null&&(e.defaultChecked=!!r),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ii(o):e.removeAttribute("name")}function Zy(e,t,n,i,s,r,a,o){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null))return;n=n!=null?""+ii(n):"",t=t!=null?""+ii(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a)}function um(e,t,n){t==="number"&&$u(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Za(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ii(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Ky(e,t,n){if(t!=null&&(t=""+ii(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+ii(n):""}function jy(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(Y(92));if(El(i)){if(1<i.length)throw Error(Y(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=ii(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function io(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mT=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function gv(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||mT.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jy(e,t,n){if(t!=null&&typeof t!="object")throw Error(Y(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&gv(e,s,i)}else for(var r in t)t.hasOwnProperty(r)&&gv(e,r,t[r])}function eg(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_T=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pu(e){return _T.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var hm=null;function ng(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var za=null,Ka=null;function _v(e){var t=po(e);if(t&&(e=t.stateNode)){var n=e[Un]||null;t:switch(e=t.stateNode,t.type){case"input":if(cm(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ai(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Un]||null;if(!s)throw Error(Y(90));cm(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Yy(i)}break t;case"textarea":Ky(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&Za(e,!!n.multiple,t,!1)}}}var Cp=!1;function Qy(e,t,n){if(Cp)return e(t,n);Cp=!0;try{var i=e(t);return i}finally{if(Cp=!1,(za!==null||Ka!==null)&&(Oh(),za&&(t=za,e=Ka,Ka=za=null,_v(t),e)))for(t=0;t<e.length;t++)_v(e[t])}}function Gl(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Un]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(Y(231,t,typeof n));return n}var ds=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fm=!1;if(ds)try{Ra={},Object.defineProperty(Ra,"passive",{get:function(){fm=!0}}),window.addEventListener("test",Ra,Ra),window.removeEventListener("test",Ra,Ra)}catch{fm=!1}var Ra,Xs=null,ig=null,Bu=null;function $y(){if(Bu)return Bu;var e,t=ig,n=t.length,i,s="value"in Xs?Xs.value:Xs.textContent,r=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(i=1;i<=a&&t[n-i]===s[r-i];i++);return Bu=s.slice(e,1<i?1-i:void 0)}function zu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bu(){return!0}function vv(){return!1}function Ln(e){function t(n,i,s,r,a){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(r):r[o]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?bu:vv,this.isPropagationStopped=vv,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bu)},persist:function(){},isPersistent:bu}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Th=Ln(qr),ac=xe({},qr,{view:0,detail:0}),vT=Ln(ac),Rp,Dp,gl,Ah=xe({},ac,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sg,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(Rp=e.screenX-gl.screenX,Dp=e.screenY-gl.screenY):Dp=Rp=0,gl=e),Rp)},movementY:function(e){return"movementY"in e?e.movementY:Dp}}),yv=Ln(Ah),yT=xe({},Ah,{dataTransfer:0}),xT=Ln(yT),ST=xe({},ac,{relatedTarget:0}),Up=Ln(ST),bT=xe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),MT=Ln(bT),ET=xe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),TT=Ln(ET),AT=xe({},qr,{data:0}),xv=Ln(AT),wT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function DT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=RT[e])?!!t[e]:!1}function sg(){return DT}var UT=xe({},ac,{key:function(e){if(e.key){var t=wT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?CT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sg,charCode:function(e){return e.type==="keypress"?zu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),LT=Ln(UT),NT=xe({},Ah,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sv=Ln(NT),OT=xe({},ac,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sg}),IT=Ln(OT),PT=xe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),BT=Ln(PT),zT=xe({},Ah,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),FT=Ln(zT),VT=xe({},qr,{newState:0,oldState:0}),HT=Ln(VT),GT=[9,13,27,32],rg=ds&&"CompositionEvent"in window,wl=null;ds&&"documentMode"in document&&(wl=document.documentMode);var kT=ds&&"TextEvent"in window&&!wl,tx=ds&&(!rg||wl&&8<wl&&11>=wl),bv=" ",Mv=!1;function ex(e,t){switch(e){case"keyup":return GT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function WT(e,t){switch(e){case"compositionend":return nx(t);case"keypress":return t.which!==32?null:(Mv=!0,bv);case"textInput":return e=t.data,e===bv&&Mv?null:e;default:return null}}function XT(e,t){if(Fa)return e==="compositionend"||!rg&&ex(e,t)?(e=$y(),Bu=ig=Xs=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return tx&&t.locale!=="ko"?null:t.data;default:return null}}var qT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qT[e.type]:t==="textarea"}function ix(e,t,n,i){za?Ka?Ka.push(i):Ka=[i]:za=i,t=_h(t,"onChange"),0<t.length&&(n=new Th("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Cl=null,kl=null;function YT(e){KS(e,0)}function wh(e){var t=Tl(e);if(Yy(t))return e}function Tv(e,t){if(e==="change")return t}var sx=!1;ds&&(ds?(Eu="oninput"in document,Eu||(Lp=document.createElement("div"),Lp.setAttribute("oninput","return;"),Eu=typeof Lp.oninput=="function"),Mu=Eu):Mu=!1,sx=Mu&&(!document.documentMode||9<document.documentMode));var Mu,Eu,Lp;function Av(){Cl&&(Cl.detachEvent("onpropertychange",rx),kl=Cl=null)}function rx(e){if(e.propertyName==="value"&&wh(kl)){var t=[];ix(t,kl,e,ng(e)),Qy(YT,t)}}function ZT(e,t,n){e==="focusin"?(Av(),Cl=t,kl=n,Cl.attachEvent("onpropertychange",rx)):e==="focusout"&&Av()}function KT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wh(kl)}function jT(e,t){if(e==="click")return wh(t)}function JT(e,t){if(e==="input"||e==="change")return wh(t)}function QT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qn=typeof Object.is=="function"?Object.is:QT;function Wl(e,t){if(qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!om.call(t,s)||!qn(e[s],t[s]))return!1}return!0}function wv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cv(e,t){var n=wv(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=wv(n)}}function ax(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ax(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ox(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$u(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$u(e.document)}return t}function ag(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var $T=ds&&"documentMode"in document&&11>=document.documentMode,Va=null,dm=null,Rl=null,pm=!1;function Rv(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pm||Va==null||Va!==$u(i)||(i=Va,"selectionStart"in i&&ag(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Rl&&Wl(Rl,i)||(Rl=i,i=_h(dm,"onSelect"),0<i.length&&(t=new Th("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=Va)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ha={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},Np={},lx={};ds&&(lx=document.createElement("div").style,"AnimationEvent"in window||(delete Ha.animationend.animation,delete Ha.animationiteration.animation,delete Ha.animationstart.animation),"TransitionEvent"in window||delete Ha.transitionend.transition);function Yr(e){if(Np[e])return Np[e];if(!Ha[e])return e;var t=Ha[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lx)return Np[e]=t[n];return e}var cx=Yr("animationend"),ux=Yr("animationiteration"),hx=Yr("animationstart"),tA=Yr("transitionrun"),eA=Yr("transitionstart"),nA=Yr("transitioncancel"),fx=Yr("transitionend"),dx=new Map,mm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mm.push("scrollEnd");function Si(e,t){dx.set(e,t),Xr(t,[e])}var Dv=new WeakMap;function oi(e,t){if(typeof e=="object"&&e!==null){var n=Dv.get(e);return n!==void 0?n:(t={value:e,source:t,stack:mv(t)},Dv.set(e,t),t)}return{value:e,source:t,stack:mv(t)}}var ni=[],Ga=0,og=0;function Ch(){for(var e=Ga,t=og=Ga=0;t<e;){var n=ni[t];ni[t++]=null;var i=ni[t];ni[t++]=null;var s=ni[t];ni[t++]=null;var r=ni[t];if(ni[t++]=null,i!==null&&s!==null){var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}r!==0&&px(n,s,r)}}function Rh(e,t,n,i){ni[Ga++]=e,ni[Ga++]=t,ni[Ga++]=n,ni[Ga++]=i,og|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function lg(e,t,n,i){return Rh(e,t,n,i),th(e)}function mo(e,t){return Rh(e,null,null,t),th(e)}function px(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,r=e.return;r!==null;)r.childLanes|=n,i=r.alternate,i!==null&&(i.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(s=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,s&&t!==null&&(s=31-kn(n),e=r.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),r):null}function th(e){if(50<Fl)throw Fl=0,Pm=null,Error(Y(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ka={};function iA(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(e,t,n,i){return new iA(e,t,n,i)}function cg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hs(e,t){var n=e.alternate;return n===null?(n=Hn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function mx(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fu(e,t,n,i,s,r){var a=0;if(i=e,typeof e=="function")cg(e)&&(a=1);else if(typeof e=="string")a=iw(e,n,zi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case im:return e=Hn(31,n,t,s),e.elementType=im,e.lanes=r,e;case Ia:return Ir(n.children,s,r,t);case Oy:a=8,s|=24;break;case tm:return e=Hn(12,n,t,s|2),e.elementType=tm,e.lanes=r,e;case em:return e=Hn(13,n,t,s),e.elementType=em,e.lanes=r,e;case nm:return e=Hn(19,n,t,s),e.elementType=nm,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case YE:case as:a=10;break t;case Iy:a=9;break t;case Km:a=11;break t;case jm:a=14;break t;case zs:a=16,i=null;break t}a=29,n=Error(Y(130,e===null?"null":typeof e,"")),i=null}return t=Hn(a,n,t,s),t.elementType=e,t.type=i,t.lanes=r,t}function Ir(e,t,n,i){return e=Hn(7,e,i,t),e.lanes=n,e}function Op(e,t,n){return e=Hn(6,e,null,t),e.lanes=n,e}function Ip(e,t,n){return t=Hn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wa=[],Xa=0,eh=null,nh=0,si=[],ri=0,Pr=null,os=1,ls="";function Lr(e,t){Wa[Xa++]=nh,Wa[Xa++]=eh,eh=e,nh=t}function gx(e,t,n){si[ri++]=os,si[ri++]=ls,si[ri++]=Pr,Pr=e;var i=os;e=ls;var s=32-kn(i)-1;i&=~(1<<s),n+=1;var r=32-kn(t)+s;if(30<r){var a=s-s%5;r=(i&(1<<a)-1).toString(32),i>>=a,s-=a,os=1<<32-kn(t)+s|n<<s|i,ls=r+e}else os=1<<r|n<<s|i,ls=e}function ug(e){e.return!==null&&(Lr(e,1),gx(e,1,0))}function hg(e){for(;e===eh;)eh=Wa[--Xa],Wa[Xa]=null,nh=Wa[--Xa],Wa[Xa]=null;for(;e===Pr;)Pr=si[--ri],si[ri]=null,ls=si[--ri],si[ri]=null,os=si[--ri],si[ri]=null}var bn=null,Ne=null,te=!1,Br=null,Pi=!1,gm=Error(Y(519));function Hr(e){var t=Error(Y(418,""));throw Xl(oi(t,e)),gm}function Uv(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[un]=e,t[Un]=i,n){case"dialog":Xt("cancel",t),Xt("close",t);break;case"iframe":case"object":case"embed":Xt("load",t);break;case"video":case"audio":for(n=0;n<Zl.length;n++)Xt(Zl[n],t);break;case"source":Xt("error",t);break;case"img":case"image":case"link":Xt("error",t),Xt("load",t);break;case"details":Xt("toggle",t);break;case"input":Xt("invalid",t),Zy(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Qu(t);break;case"select":Xt("invalid",t);break;case"textarea":Xt("invalid",t),jy(t,i.value,i.defaultValue,i.children),Qu(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||JS(t.textContent,n)?(i.popover!=null&&(Xt("beforetoggle",t),Xt("toggle",t)),i.onScroll!=null&&Xt("scroll",t),i.onScrollEnd!=null&&Xt("scrollend",t),i.onClick!=null&&(t.onclick=Bh),t=!0):t=!1,t||Hr(e)}function Lv(e){for(bn=e.return;bn;)switch(bn.tag){case 5:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:bn=bn.return}}function _l(e){if(e!==bn)return!1;if(!te)return Lv(e),te=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Gm(e.type,e.memoizedProps)),n=!n),n&&Ne&&Hr(e),Lv(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(Y(317));t:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Ne=xi(e.nextSibling);break t}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Ne=null}}else t===27?(t=Ne,ar(e.type)?(e=Xm,Xm=null,Ne=e):Ne=t):Ne=bn?xi(e.stateNode.nextSibling):null;return!0}function oc(){Ne=bn=null,te=!1}function Nv(){var e=Br;return e!==null&&(Dn===null?Dn=e:Dn.push.apply(Dn,e),Br=null),e}function Xl(e){Br===null?Br=[e]:Br.push(e)}var _m=Hi(null),Zr=null,cs=null;function Vs(e,t,n){we(_m,t._currentValue),t._currentValue=n}function fs(e){e._currentValue=_m.current,tn(_m)}function vm(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function ym(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var r=s.dependencies;if(r!==null){var a=s.child;r=r.firstContext;t:for(;r!==null;){var o=r;r=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){r.lanes|=n,o=r.alternate,o!==null&&(o.lanes|=n),vm(r.return,n,e),i||(a=null);break t}r=o.next}}else if(s.tag===18){if(a=s.return,a===null)throw Error(Y(341));a.lanes|=n,r=a.alternate,r!==null&&(r.lanes|=n),vm(a,n,e),a=null}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}}function lc(e,t,n,i){e=null;for(var s=t,r=!1;s!==null;){if(!r){if((s.flags&524288)!==0)r=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var a=s.alternate;if(a===null)throw Error(Y(387));if(a=a.memoizedProps,a!==null){var o=s.type;qn(s.pendingProps.value,a.value)||(e!==null?e.push(o):e=[o])}}else if(s===Zu.current){if(a=s.alternate,a===null)throw Error(Y(387));a.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Jl):e=[Jl])}s=s.return}e!==null&&ym(t,e,n,i),t.flags|=262144}function ih(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Gr(e){Zr=e,cs=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function hn(e){return _x(Zr,e)}function Tu(e,t){return Zr===null&&Gr(e),_x(e,t)}function _x(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},cs===null){if(e===null)throw Error(Y(308));cs=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else cs=cs.next=t;return n}var sA=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},rA=Ye.unstable_scheduleCallback,aA=Ye.unstable_NormalPriority,Xe={$$typeof:as,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fg(){return{controller:new sA,data:new Map,refCount:0}}function cc(e){e.refCount--,e.refCount===0&&rA(aA,function(){e.controller.abort()})}var Dl=null,xm=0,so=0,ja=null;function oA(e,t){if(Dl===null){var n=Dl=[];xm=0,so=Ig(),ja={status:"pending",value:void 0,then:function(i){n.push(i)}}}return xm++,t.then(Ov,Ov),t}function Ov(){if(--xm===0&&Dl!==null){ja!==null&&(ja.status="fulfilled");var e=Dl;Dl=null,so=0,ja=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function lA(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var Iv=Rt.S;Rt.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&oA(e,t),Iv!==null&&Iv(e,t)};var zr=Hi(null);function dg(){var e=zr.current;return e!==null?e:_e.pooledCache}function Vu(e,t){t===null?we(zr,zr.current):we(zr,t.pool)}function vx(){var e=dg();return e===null?null:{parent:Xe._currentValue,pool:e}}var uc=Error(Y(460)),yx=Error(Y(474)),Dh=Error(Y(542)),Sm={then:function(){}};function Pv(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Au(){}function xx(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Au,Au),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zv(e),e;default:if(typeof t.status=="string")t.then(Au,Au);else{if(e=_e,e!==null&&100<e.shellSuspendCounter)throw Error(Y(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,zv(e),e}throw Ul=t,uc}}var Ul=null;function Bv(){if(Ul===null)throw Error(Y(459));var e=Ul;return Ul=null,e}function zv(e){if(e===uc||e===Dh)throw Error(Y(483))}var Fs=!1;function pg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ks(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function js(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(re&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=th(e),px(e,null,n),t}return Rh(e,i,t,n),th(e)}function Ll(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gy(e,n)}}function Pp(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?s=r=a:r=r.next=a,n=n.next}while(n!==null);r===null?s=r=t:r=r.next=t}else s=r=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Mm=!1;function Nl(){if(Mm){var e=ja;if(e!==null)throw e}}function Ol(e,t,n,i){Mm=!1;var s=e.updateQueue;Fs=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?r=c:a.next=c,a=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(r!==null){var d=s.baseState;a=0,h=c=l=null,o=r;do{var f=o.lane&-536870913,p=f!==o.lane;if(p?(jt&f)===f:(i&f)===f){f!==0&&f===so&&(Mm=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var y=e,x=o;f=t;var m=n;switch(x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(m,d,f);break t}d=y;break t;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break t;d=xe({},d,f);break t;case 2:Fs=!0}}f=o.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[f]:p.push(f))}else p={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,a|=f;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,r===null&&(s.shared.lanes=0),sr|=a,e.lanes=a,e.memoizedState=d}}function Sx(e,t){if(typeof e!="function")throw Error(Y(191,e));e.call(t)}function bx(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Sx(n[e],t)}var ro=Hi(null),sh=Hi(0);function Fv(e,t){e=gs,we(sh,e),we(ro,t),gs=e|t.baseLanes}function Em(){we(sh,gs),we(ro,ro.current)}function mg(){gs=sh.current,tn(ro),tn(sh)}var nr=0,Wt=null,fe=null,Ve=null,rh=!1,Ja=!1,kr=!1,ah=0,ql=0,Qa=null,cA=0;function ze(){throw Error(Y(321))}function gg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function _g(e,t,n,i,s,r){return nr=r,Wt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Rt.H=e===null||e.memoizedState===null?$x:tS,kr=!1,r=n(i,s),kr=!1,Ja&&(r=Ex(t,n,i,s)),Mx(e),r}function Mx(e){Rt.H=oh;var t=fe!==null&&fe.next!==null;if(nr=0,Ve=fe=Wt=null,rh=!1,ql=0,Qa=null,t)throw Error(Y(300));e===null||$e||(e=e.dependencies,e!==null&&ih(e)&&($e=!0))}function Ex(e,t,n,i){Wt=e;var s=0;do{if(Ja&&(Qa=null),ql=0,Ja=!1,25<=s)throw Error(Y(301));if(s+=1,Ve=fe=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}Rt.H=gA,r=t(n,i)}while(Ja);return r}function uA(){var e=Rt.H,t=e.useState()[0];return t=typeof t.then=="function"?hc(t):t,e=e.useState()[0],(fe!==null?fe.memoizedState:null)!==e&&(Wt.flags|=1024),t}function vg(){var e=ah!==0;return ah=0,e}function yg(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xg(e){if(rh){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rh=!1}nr=0,Ve=fe=Wt=null,Ja=!1,ql=ah=0,Qa=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Wt.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function He(){if(fe===null){var e=Wt.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=Ve===null?Wt.memoizedState:Ve.next;if(t!==null)Ve=t,fe=e;else{if(e===null)throw Wt.alternate===null?Error(Y(467)):Error(Y(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},Ve===null?Wt.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function Sg(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function hc(e){var t=ql;return ql+=1,Qa===null&&(Qa=[]),e=xx(Qa,e,t),t=Wt,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,Rt.H=t===null||t.memoizedState===null?$x:tS),e}function Uh(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return hc(e);if(e.$$typeof===as)return hn(e)}throw Error(Y(438,String(e)))}function bg(e){var t=null,n=Wt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Wt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Sg(),Wt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ZE;return t.index++,n}function ps(e,t){return typeof t=="function"?t(e):t}function Hu(e){var t=He();return Mg(t,fe,e)}function Mg(e,t,n){var i=e.queue;if(i===null)throw Error(Y(311));i.lastRenderedReducer=n;var s=e.baseQueue,r=i.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}t.baseQueue=s=r,i.pending=null}if(r=e.baseState,s===null)e.memoizedState=r;else{t=s.next;var o=a=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(jt&d)===d:(nr&d)===d){var f=c.revertLane;if(f===0)l!==null&&(l=l.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===so&&(h=!0);else if((nr&f)===f){c=c.next,f===so&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,a=r):l=l.next=d,Wt.lanes|=f,sr|=f;d=c.action,kr&&n(r,d),r=c.hasEagerState?c.eagerState:n(r,d)}else f={lane:d,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=f,a=r):l=l.next=f,Wt.lanes|=d,sr|=d;c=c.next}while(c!==null&&c!==t);if(l===null?a=r:l.next=o,!qn(r,e.memoizedState)&&($e=!0,h&&(n=ja,n!==null)))throw n;e.memoizedState=r,e.baseState=a,e.baseQueue=l,i.lastRenderedState=r}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Bp(e){var t=He(),n=t.queue;if(n===null)throw Error(Y(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,r=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);qn(r,t.memoizedState)||($e=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,i]}function Tx(e,t,n){var i=Wt,s=He(),r=te;if(r){if(n===void 0)throw Error(Y(407));n=n()}else n=t();var a=!qn((fe||s).memoizedState,n);a&&(s.memoizedState=n,$e=!0),s=s.queue;var o=Cx.bind(null,i,s,e);if(fc(2048,8,o,[e]),s.getSnapshot!==t||a||Ve!==null&&Ve.memoizedState.tag&1){if(i.flags|=2048,ao(9,Lh(),wx.bind(null,i,s,n,t),null),_e===null)throw Error(Y(349));r||(nr&124)!==0||Ax(i,t,n)}return n}function Ax(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Wt.updateQueue,t===null?(t=Sg(),Wt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wx(e,t,n,i){t.value=n,t.getSnapshot=i,Rx(t)&&Dx(e)}function Cx(e,t,n){return n(function(){Rx(t)&&Dx(e)})}function Rx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch{return!0}}function Dx(e){var t=mo(e,2);t!==null&&Xn(t,e,2)}function Tm(e){var t=Cn();if(typeof e=="function"){var n=e;if(e=n(),kr){Ws(!0);try{n()}finally{Ws(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:e},t}function Ux(e,t,n,i){return e.baseState=n,Mg(e,fe,typeof i=="function"?i:ps)}function hA(e,t,n,i,s){if(Nh(e))throw Error(Y(485));if(e=t.action,e!==null){var r={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};Rt.T!==null?n(!0):r.isTransition=!1,i(r),n=t.pending,n===null?(r.next=t.pending=r,Lx(t,r)):(r.next=n.next,t.pending=n.next=r)}}function Lx(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var r=Rt.T,a={};Rt.T=a;try{var o=n(s,i),l=Rt.S;l!==null&&l(a,o),Vv(e,t,o)}catch(c){Am(e,t,c)}finally{Rt.T=r}}else try{r=n(s,i),Vv(e,t,r)}catch(c){Am(e,t,c)}}function Vv(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Hv(e,t,i)},function(i){return Am(e,t,i)}):Hv(e,t,n)}function Hv(e,t,n){t.status="fulfilled",t.value=n,Nx(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Lx(e,n)))}function Am(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Nx(t),t=t.next;while(t!==i)}e.action=null}function Nx(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ox(e,t){return t}function Gv(e,t){if(te){var n=_e.formState;if(n!==null){t:{var i=Wt;if(te){if(Ne){e:{for(var s=Ne,r=Pi;s.nodeType!==8;){if(!r){s=null;break e}if(s=xi(s.nextSibling),s===null){s=null;break e}}r=s.data,s=r==="F!"||r==="F"?s:null}if(s){Ne=xi(s.nextSibling),i=s.data==="F!";break t}}Hr(i)}i=!1}i&&(t=n[0])}}return n=Cn(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ox,lastRenderedState:t},n.queue=i,n=jx.bind(null,Wt,i),i.dispatch=n,i=Tm(!1),r=wg.bind(null,Wt,!1,i.queue),i=Cn(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=hA.bind(null,Wt,s,r,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function kv(e){var t=He();return Ix(t,fe,e)}function Ix(e,t,n){if(t=Mg(e,t,Ox)[0],e=Hu(ps)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=hc(t)}catch(a){throw a===uc?Dh:a}else i=t;t=He();var s=t.queue,r=s.dispatch;return n!==t.memoizedState&&(Wt.flags|=2048,ao(9,Lh(),fA.bind(null,s,n),null)),[i,r,e]}function fA(e,t){e.action=t}function Wv(e){var t=He(),n=fe;if(n!==null)return Ix(t,n,e);He(),t=t.memoizedState,n=He();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function ao(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Wt.updateQueue,t===null&&(t=Sg(),Wt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Lh(){return{destroy:void 0,resource:void 0}}function Px(){return He().memoizedState}function Gu(e,t,n,i){var s=Cn();i=i===void 0?null:i,Wt.flags|=e,s.memoizedState=ao(1|t,Lh(),n,i)}function fc(e,t,n,i){var s=He();i=i===void 0?null:i;var r=s.memoizedState.inst;fe!==null&&i!==null&&gg(i,fe.memoizedState.deps)?s.memoizedState=ao(t,r,n,i):(Wt.flags|=e,s.memoizedState=ao(1|t,r,n,i))}function Xv(e,t){Gu(8390656,8,e,t)}function Bx(e,t){fc(2048,8,e,t)}function zx(e,t){return fc(4,2,e,t)}function Fx(e,t){return fc(4,4,e,t)}function Vx(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hx(e,t,n){n=n!=null?n.concat([e]):null,fc(4,4,Vx.bind(null,t,e),n)}function Eg(){}function Gx(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&gg(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function kx(e,t){var n=He();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&gg(t,i[1]))return i[0];if(i=e(),kr){Ws(!0);try{e()}finally{Ws(!1)}}return n.memoizedState=[i,t],i}function Tg(e,t,n){return n===void 0||(nr&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=NS(),Wt.lanes|=e,sr|=e,n)}function Wx(e,t,n,i){return qn(n,t)?n:ro.current!==null?(e=Tg(e,n,i),qn(e,t)||($e=!0),e):(nr&42)===0?($e=!0,e.memoizedState=n):(e=NS(),Wt.lanes|=e,sr|=e,t)}function Xx(e,t,n,i,s){var r=ee.p;ee.p=r!==0&&8>r?r:8;var a=Rt.T,o={};Rt.T=o,wg(e,!1,t,n);try{var l=s(),c=Rt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=lA(l,i);Il(e,t,h,Wn(e))}else Il(e,t,i,Wn(e))}catch(d){Il(e,t,{then:function(){},status:"rejected",reason:d},Wn())}finally{ee.p=r,Rt.T=a}}function dA(){}function wm(e,t,n,i){if(e.tag!==5)throw Error(Y(476));var s=qx(e).queue;Xx(e,s,t,Or,n===null?dA:function(){return Yx(e),n(i)})}function qx(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Or,baseState:Or,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:Or},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ps,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yx(e){var t=qx(e).next.queue;Il(e,t,{},Wn())}function Ag(){return hn(Jl)}function Zx(){return He().memoizedState}function Kx(){return He().memoizedState}function pA(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Wn();e=Ks(n);var i=js(t,e,n);i!==null&&(Xn(i,t,n),Ll(i,t,n)),t={cache:fg()},e.payload=t;return}t=t.return}}function mA(e,t,n){var i=Wn();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Nh(e)?Jx(t,n):(n=lg(e,t,n,i),n!==null&&(Xn(n,e,i),Qx(n,t,i)))}function jx(e,t,n){var i=Wn();Il(e,t,n,i)}function Il(e,t,n,i){var s={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nh(e))Jx(t,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,o=r(a,n);if(s.hasEagerState=!0,s.eagerState=o,qn(o,a))return Rh(e,t,s,0),_e===null&&Ch(),!1}catch{}finally{}if(n=lg(e,t,s,i),n!==null)return Xn(n,e,i),Qx(n,t,i),!0}return!1}function wg(e,t,n,i){if(i={lane:2,revertLane:Ig(),action:i,hasEagerState:!1,eagerState:null,next:null},Nh(e)){if(t)throw Error(Y(479))}else t=lg(e,n,i,2),t!==null&&Xn(t,e,2)}function Nh(e){var t=e.alternate;return e===Wt||t!==null&&t===Wt}function Jx(e,t){Ja=rh=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Gy(e,n)}}var oh={readContext:hn,use:Uh,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useLayoutEffect:ze,useInsertionEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useSyncExternalStore:ze,useId:ze,useHostTransitionStatus:ze,useFormState:ze,useActionState:ze,useOptimistic:ze,useMemoCache:ze,useCacheRefresh:ze},$x={readContext:hn,use:Uh,useCallback:function(e,t){return Cn().memoizedState=[e,t===void 0?null:t],e},useContext:hn,useEffect:Xv,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Gu(4194308,4,Vx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Gu(4194308,4,e,t)},useInsertionEffect:function(e,t){Gu(4,2,e,t)},useMemo:function(e,t){var n=Cn();t=t===void 0?null:t;var i=e();if(kr){Ws(!0);try{e()}finally{Ws(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Cn();if(n!==void 0){var s=n(t);if(kr){Ws(!0);try{n(t)}finally{Ws(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=mA.bind(null,Wt,e),[i.memoizedState,e]},useRef:function(e){var t=Cn();return e={current:e},t.memoizedState=e},useState:function(e){e=Tm(e);var t=e.queue,n=jx.bind(null,Wt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eg,useDeferredValue:function(e,t){var n=Cn();return Tg(n,e,t)},useTransition:function(){var e=Tm(!1);return e=Xx.bind(null,Wt,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Wt,s=Cn();if(te){if(n===void 0)throw Error(Y(407));n=n()}else{if(n=t(),_e===null)throw Error(Y(349));(jt&124)!==0||Ax(i,t,n)}s.memoizedState=n;var r={value:n,getSnapshot:t};return s.queue=r,Xv(Cx.bind(null,i,r,e),[e]),i.flags|=2048,ao(9,Lh(),wx.bind(null,i,r,n,t),null),n},useId:function(){var e=Cn(),t=_e.identifierPrefix;if(te){var n=ls,i=os;n=(i&~(1<<32-kn(i)-1)).toString(32)+n,t="\xAB"+t+"R"+n,n=ah++,0<n&&(t+="H"+n.toString(32)),t+="\xBB"}else n=cA++,t="\xAB"+t+"r"+n.toString(32)+"\xBB";return e.memoizedState=t},useHostTransitionStatus:Ag,useFormState:Gv,useActionState:Gv,useOptimistic:function(e){var t=Cn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wg.bind(null,Wt,!0,n),n.dispatch=t,[e,t]},useMemoCache:bg,useCacheRefresh:function(){return Cn().memoizedState=pA.bind(null,Wt)}},tS={readContext:hn,use:Uh,useCallback:Gx,useContext:hn,useEffect:Bx,useImperativeHandle:Hx,useInsertionEffect:zx,useLayoutEffect:Fx,useMemo:kx,useReducer:Hu,useRef:Px,useState:function(){return Hu(ps)},useDebugValue:Eg,useDeferredValue:function(e,t){var n=He();return Wx(n,fe.memoizedState,e,t)},useTransition:function(){var e=Hu(ps)[0],t=He().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:Tx,useId:Zx,useHostTransitionStatus:Ag,useFormState:kv,useActionState:kv,useOptimistic:function(e,t){var n=He();return Ux(n,fe,e,t)},useMemoCache:bg,useCacheRefresh:Kx},gA={readContext:hn,use:Uh,useCallback:Gx,useContext:hn,useEffect:Bx,useImperativeHandle:Hx,useInsertionEffect:zx,useLayoutEffect:Fx,useMemo:kx,useReducer:Bp,useRef:Px,useState:function(){return Bp(ps)},useDebugValue:Eg,useDeferredValue:function(e,t){var n=He();return fe===null?Tg(n,e,t):Wx(n,fe.memoizedState,e,t)},useTransition:function(){var e=Bp(ps)[0],t=He().memoizedState;return[typeof e=="boolean"?e:hc(e),t]},useSyncExternalStore:Tx,useId:Zx,useHostTransitionStatus:Ag,useFormState:Wv,useActionState:Wv,useOptimistic:function(e,t){var n=He();return fe!==null?Ux(n,fe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:bg,useCacheRefresh:Kx},$a=null,Yl=0;function wu(e){var t=Yl;return Yl+=1,$a===null&&($a=[]),xx($a,e,t)}function vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Cu(e,t){throw t.$$typeof===qE?Error(Y(525)):(e=Object.prototype.toString.call(t),Error(Y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qv(e){var t=e._init;return t(e._payload)}function eS(e){function t(u,g){if(e){var _=u.deletions;_===null?(u.deletions=[g],u.flags|=16):_.push(g)}}function n(u,g){if(!e)return null;for(;g!==null;)t(u,g),g=g.sibling;return null}function i(u){for(var g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function s(u,g){return u=hs(u,g),u.index=0,u.sibling=null,u}function r(u,g,_){return u.index=_,e?(_=u.alternate,_!==null?(_=_.index,_<g?(u.flags|=67108866,g):_):(u.flags|=67108866,g)):(u.flags|=1048576,g)}function a(u){return e&&u.alternate===null&&(u.flags|=67108866),u}function o(u,g,_,v){return g===null||g.tag!==6?(g=Op(_,u.mode,v),g.return=u,g):(g=s(g,_),g.return=u,g)}function l(u,g,_,v){var A=_.type;return A===Ia?h(u,g,_.props.children,v,_.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zs&&qv(A)===g.type)?(g=s(g,_.props),vl(g,_),g.return=u,g):(g=Fu(_.type,_.key,_.props,null,u.mode,v),vl(g,_),g.return=u,g)}function c(u,g,_,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ip(_,u.mode,v),g.return=u,g):(g=s(g,_.children||[]),g.return=u,g)}function h(u,g,_,v,A){return g===null||g.tag!==7?(g=Ir(_,u.mode,v,A),g.return=u,g):(g=s(g,_),g.return=u,g)}function d(u,g,_){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Op(""+g,u.mode,_),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case vu:return _=Fu(g.type,g.key,g.props,null,u.mode,_),vl(_,g),_.return=u,_;case Ml:return g=Ip(g,u.mode,_),g.return=u,g;case zs:var v=g._init;return g=v(g._payload),d(u,g,_)}if(El(g)||ml(g))return g=Ir(g,u.mode,_,null),g.return=u,g;if(typeof g.then=="function")return d(u,wu(g),_);if(g.$$typeof===as)return d(u,Tu(u,g),_);Cu(u,g)}return null}function f(u,g,_,v){var A=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return A!==null?null:o(u,g,""+_,v);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vu:return _.key===A?l(u,g,_,v):null;case Ml:return _.key===A?c(u,g,_,v):null;case zs:return A=_._init,_=A(_._payload),f(u,g,_,v)}if(El(_)||ml(_))return A!==null?null:h(u,g,_,v,null);if(typeof _.then=="function")return f(u,g,wu(_),v);if(_.$$typeof===as)return f(u,g,Tu(u,_),v);Cu(u,_)}return null}function p(u,g,_,v,A){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return u=u.get(_)||null,o(g,u,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vu:return u=u.get(v.key===null?_:v.key)||null,l(g,u,v,A);case Ml:return u=u.get(v.key===null?_:v.key)||null,c(g,u,v,A);case zs:var w=v._init;return v=w(v._payload),p(u,g,_,v,A)}if(El(v)||ml(v))return u=u.get(_)||null,h(g,u,v,A,null);if(typeof v.then=="function")return p(u,g,_,wu(v),A);if(v.$$typeof===as)return p(u,g,_,Tu(g,v),A);Cu(g,v)}return null}function y(u,g,_,v){for(var A=null,w=null,T=g,D=g=0,E=null;T!==null&&D<_.length;D++){T.index>D?(E=T,T=null):E=T.sibling;var M=f(u,T,_[D],v);if(M===null){T===null&&(T=E);break}e&&T&&M.alternate===null&&t(u,T),g=r(M,g,D),w===null?A=M:w.sibling=M,w=M,T=E}if(D===_.length)return n(u,T),te&&Lr(u,D),A;if(T===null){for(;D<_.length;D++)T=d(u,_[D],v),T!==null&&(g=r(T,g,D),w===null?A=T:w.sibling=T,w=T);return te&&Lr(u,D),A}for(T=i(T);D<_.length;D++)E=p(T,u,D,_[D],v),E!==null&&(e&&E.alternate!==null&&T.delete(E.key===null?D:E.key),g=r(E,g,D),w===null?A=E:w.sibling=E,w=E);return e&&T.forEach(function(U){return t(u,U)}),te&&Lr(u,D),A}function x(u,g,_,v){if(_==null)throw Error(Y(151));for(var A=null,w=null,T=g,D=g=0,E=null,M=_.next();T!==null&&!M.done;D++,M=_.next()){T.index>D?(E=T,T=null):E=T.sibling;var U=f(u,T,M.value,v);if(U===null){T===null&&(T=E);break}e&&T&&U.alternate===null&&t(u,T),g=r(U,g,D),w===null?A=U:w.sibling=U,w=U,T=E}if(M.done)return n(u,T),te&&Lr(u,D),A;if(T===null){for(;!M.done;D++,M=_.next())M=d(u,M.value,v),M!==null&&(g=r(M,g,D),w===null?A=M:w.sibling=M,w=M);return te&&Lr(u,D),A}for(T=i(T);!M.done;D++,M=_.next())M=p(T,u,D,M.value,v),M!==null&&(e&&M.alternate!==null&&T.delete(M.key===null?D:M.key),g=r(M,g,D),w===null?A=M:w.sibling=M,w=M);return e&&T.forEach(function(F){return t(u,F)}),te&&Lr(u,D),A}function m(u,g,_,v){if(typeof _=="object"&&_!==null&&_.type===Ia&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case vu:t:{for(var A=_.key;g!==null;){if(g.key===A){if(A=_.type,A===Ia){if(g.tag===7){n(u,g.sibling),v=s(g,_.props.children),v.return=u,u=v;break t}}else if(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===zs&&qv(A)===g.type){n(u,g.sibling),v=s(g,_.props),vl(v,_),v.return=u,u=v;break t}n(u,g);break}else t(u,g);g=g.sibling}_.type===Ia?(v=Ir(_.props.children,u.mode,v,_.key),v.return=u,u=v):(v=Fu(_.type,_.key,_.props,null,u.mode,v),vl(v,_),v.return=u,u=v)}return a(u);case Ml:t:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(u,g.sibling),v=s(g,_.children||[]),v.return=u,u=v;break t}else{n(u,g);break}else t(u,g);g=g.sibling}v=Ip(_,u.mode,v),v.return=u,u=v}return a(u);case zs:return A=_._init,_=A(_._payload),m(u,g,_,v)}if(El(_))return y(u,g,_,v);if(ml(_)){if(A=ml(_),typeof A!="function")throw Error(Y(150));return _=A.call(_),x(u,g,_,v)}if(typeof _.then=="function")return m(u,g,wu(_),v);if(_.$$typeof===as)return m(u,g,Tu(u,_),v);Cu(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,g!==null&&g.tag===6?(n(u,g.sibling),v=s(g,_),v.return=u,u=v):(n(u,g),v=Op(_,u.mode,v),v.return=u,u=v),a(u)):n(u,g)}return function(u,g,_,v){try{Yl=0;var A=m(u,g,_,v);return $a=null,A}catch(T){if(T===uc||T===Dh)throw T;var w=Hn(29,T,null,u.mode);return w.lanes=v,w.return=u,w}finally{}}}var oo=eS(!0),nS=eS(!1),ci=Hi(null),Vi=null;function Hs(e){var t=e.alternate;we(qe,qe.current&1),we(ci,e),Vi===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(Vi=e)}function iS(e){if(e.tag===22){if(we(qe,qe.current),we(ci,e),Vi===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Vi=e)}}else Gs(e)}function Gs(){we(qe,qe.current),we(ci,ci.current)}function us(e){tn(ci),Vi===e&&(Vi=null),tn(qe)}var qe=Hi(0);function lh(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Wm(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function zp(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Cm={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Wn(),s=Ks(i);s.payload=t,n!=null&&(s.callback=n),t=js(e,s,i),t!==null&&(Xn(t,e,i),Ll(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Wn(),s=Ks(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=js(e,s,i),t!==null&&(Xn(t,e,i),Ll(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Wn(),i=Ks(n);i.tag=2,t!=null&&(i.callback=t),t=js(e,i,n),t!==null&&(Xn(t,e,n),Ll(t,e,n))}};function Yv(e,t,n,i,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!Wl(n,i)||!Wl(s,r):!0}function Zv(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Cm.enqueueReplaceState(t,t.state,null)}function Wr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=xe({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}var ch=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function sS(e){ch(e)}function rS(e){console.error(e)}function aS(e){ch(e)}function uh(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Kv(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Rm(e,t,n){return n=Ks(n),n.tag=3,n.payload={element:null},n.callback=function(){uh(e,t)},n}function oS(e){return e=Ks(e),e.tag=3,e}function lS(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var r=i.value;e.payload=function(){return s(r)},e.callback=function(){Kv(t,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Kv(t,n,i),typeof s!="function"&&(Js===null?Js=new Set([this]):Js.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function _A(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&lc(t,n,s,!0),n=ci.current,n!==null){switch(n.tag){case 13:return Vi===null?Bm():n.alternate===null&&Oe===0&&(Oe=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===Sm?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Kp(e,i,s)),!1;case 22:return n.flags|=65536,i===Sm?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Kp(e,i,s)),!1}throw Error(Y(435,n.tag))}return Kp(e,i,s),Bm(),!1}if(te)return t=ci.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==gm&&(e=Error(Y(422),{cause:i}),Xl(oi(e,n)))):(i!==gm&&(t=Error(Y(423),{cause:i}),Xl(oi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=oi(i,n),s=Rm(e.stateNode,i,s),Pp(e,s),Oe!==4&&(Oe=2)),!1;var r=Error(Y(520),{cause:i});if(r=oi(r,n),zl===null?zl=[r]:zl.push(r),Oe!==4&&(Oe=2),t===null)return!0;i=oi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Rm(n.stateNode,i,e),Pp(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(Js===null||!Js.has(r))))return n.flags|=65536,s&=-s,n.lanes|=s,s=oS(s),lS(s,e,n,i),Pp(n,s),!1}n=n.return}while(n!==null);return!1}var cS=Error(Y(461)),$e=!1;function nn(e,t,n,i){t.child=e===null?nS(t,null,n,i):oo(t,e.child,n,i)}function jv(e,t,n,i,s){n=n.render;var r=t.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Gr(t),i=_g(e,t,n,a,r,s),o=vg(),e!==null&&!$e?(yg(e,t,s),ms(e,t,s)):(te&&o&&ug(t),t.flags|=1,nn(e,t,i,s),t.child)}function Jv(e,t,n,i,s){if(e===null){var r=n.type;return typeof r=="function"&&!cg(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,uS(e,t,r,i,s)):(e=Fu(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Cg(e,s)){var a=r.memoizedProps;if(n=n.compare,n=n!==null?n:Wl,n(a,i)&&e.ref===t.ref)return ms(e,t,s)}return t.flags|=1,e=hs(r,i),e.ref=t.ref,e.return=t,t.child=e}function uS(e,t,n,i,s){if(e!==null){var r=e.memoizedProps;if(Wl(r,i)&&e.ref===t.ref)if($e=!1,t.pendingProps=i=r,Cg(e,s))(e.flags&131072)!==0&&($e=!0);else return t.lanes=e.lanes,ms(e,t,s)}return Dm(e,t,n,i,s)}function hS(e,t,n){var i=t.pendingProps,s=i.children,r=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=r!==null?r.baseLanes|n:n,e!==null){for(s=t.child=e.child,r=0;s!==null;)r=r|s.lanes|s.childLanes,s=s.sibling;t.childLanes=r&~i}else t.childLanes=0,t.child=null;return Qv(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vu(t,r!==null?r.cachePool:null),r!==null?Fv(t,r):Em(),iS(t);else return t.lanes=t.childLanes=536870912,Qv(e,t,r!==null?r.baseLanes|n:n,n)}else r!==null?(Vu(t,r.cachePool),Fv(t,r),Gs(t),t.memoizedState=null):(e!==null&&Vu(t,null),Em(),Gs(t));return nn(e,t,s,n),t.child}function Qv(e,t,n,i){var s=dg();return s=s===null?null:{parent:Xe._currentValue,pool:s},t.memoizedState={baseLanes:n,cachePool:s},e!==null&&Vu(t,null),Em(),iS(t),e!==null&&lc(e,t,i,!0),null}function ku(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Y(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Dm(e,t,n,i,s){return Gr(t),n=_g(e,t,n,i,void 0,s),i=vg(),e!==null&&!$e?(yg(e,t,s),ms(e,t,s)):(te&&i&&ug(t),t.flags|=1,nn(e,t,n,s),t.child)}function $v(e,t,n,i,s,r){return Gr(t),t.updateQueue=null,n=Ex(t,i,n,s),Mx(e),i=vg(),e!==null&&!$e?(yg(e,t,r),ms(e,t,r)):(te&&i&&ug(t),t.flags|=1,nn(e,t,n,r),t.child)}function ty(e,t,n,i,s){if(Gr(t),t.stateNode===null){var r=ka,a=n.contextType;typeof a=="object"&&a!==null&&(r=hn(a)),r=new n(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cm,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},pg(t),a=n.contextType,r.context=typeof a=="object"&&a!==null?hn(a):ka,r.state=t.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(zp(t,n,a,i),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&Cm.enqueueReplaceState(r,r.state,null),Ol(t,i,r,s),Nl(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var o=t.memoizedProps,l=Wr(n,o);r.props=l;var c=r.context,h=n.contextType;a=ka,typeof h=="object"&&h!==null&&(a=hn(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o||c!==a)&&Zv(t,r,i,a),Fs=!1;var f=t.memoizedState;r.state=f,Ol(t,i,r,s),Nl(),c=t.memoizedState,o||f!==c||Fs?(typeof d=="function"&&(zp(t,n,d,i),c=t.memoizedState),(l=Fs||Yv(t,n,l,i,f,c,a))?(h||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),r.props=i,r.state=c,r.context=a,i=l):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,bm(e,t),a=t.memoizedProps,h=Wr(n,a),r.props=h,d=t.pendingProps,f=r.context,c=n.contextType,l=ka,typeof c=="object"&&c!==null&&(l=hn(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Zv(t,r,i,l),Fs=!1,f=t.memoizedState,r.state=f,Ol(t,i,r,s),Nl();var p=t.memoizedState;a!==d||f!==p||Fs||e!==null&&e.dependencies!==null&&ih(e.dependencies)?(typeof o=="function"&&(zp(t,n,o,i),p=t.memoizedState),(h=Fs||Yv(t,n,h,i,f,p,l)||e!==null&&e.dependencies!==null&&ih(e.dependencies))?(c||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,p,l),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,p,l)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),r.props=i,r.state=p,r.context=l,i=h):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,ku(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=oo(t,e.child,null,s),t.child=oo(t,null,n,s)):nn(e,t,n,s),t.memoizedState=r.state,e=t.child):e=ms(e,t,s),e}function ey(e,t,n,i){return oc(),t.flags|=256,nn(e,t,n,i),t.child}var Fp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Vp(e){return{baseLanes:e,cachePool:vx()}}function Hp(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=li),e}function fS(e,t,n){var i=t.pendingProps,s=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),a&&(s=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(te){if(s?Hs(t):Gs(t),te){var o=Ne,l;if(l=o){t:{for(l=o,o=Pi;l.nodeType!==8;){if(!o){o=null;break t}if(l=xi(l.nextSibling),l===null){o=null;break t}}o=l}o!==null?(t.memoizedState={dehydrated:o,treeContext:Pr!==null?{id:os,overflow:ls}:null,retryLane:536870912,hydrationErrors:null},l=Hn(18,null,null,0),l.stateNode=o,l.return=t,t.child=l,bn=t,Ne=null,l=!0):l=!1}l||Hr(t)}if(o=t.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Wm(o)?t.lanes=32:t.lanes=536870912,null;us(t)}return o=i.children,i=i.fallback,s?(Gs(t),s=t.mode,o=hh({mode:"hidden",children:o},s),i=Ir(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,s=t.child,s.memoizedState=Vp(n),s.childLanes=Hp(e,a,n),t.memoizedState=Fp,i):(Hs(t),Um(t,o))}if(l=e.memoizedState,l!==null&&(o=l.dehydrated,o!==null)){if(r)t.flags&256?(Hs(t),t.flags&=-257,t=Gp(e,t,n)):t.memoizedState!==null?(Gs(t),t.child=e.child,t.flags|=128,t=null):(Gs(t),s=i.fallback,o=t.mode,i=hh({mode:"visible",children:i.children},o),s=Ir(s,o,n,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,oo(t,e.child,null,n),i=t.child,i.memoizedState=Vp(n),i.childLanes=Hp(e,a,n),t.memoizedState=Fp,t=s);else if(Hs(t),Wm(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(Y(419)),i.stack="",i.digest=a,Xl({value:i,source:null,stack:null}),t=Gp(e,t,n)}else if($e||lc(e,t,n,!1),a=(n&e.childLanes)!==0,$e||a){if(a=_e,a!==null&&(i=n&-n,i=(i&42)!==0?1:Qm(i),i=(i&(a.suspendedLanes|n))!==0?0:i,i!==0&&i!==l.retryLane))throw l.retryLane=i,mo(e,i),Xn(a,e,i),cS;o.data==="$?"||Bm(),t=Gp(e,t,n)}else o.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ne=xi(o.nextSibling),bn=t,te=!0,Br=null,Pi=!1,e!==null&&(si[ri++]=os,si[ri++]=ls,si[ri++]=Pr,os=e.id,ls=e.overflow,Pr=t),t=Um(t,i.children),t.flags|=4096);return t}return s?(Gs(t),s=i.fallback,o=t.mode,l=e.child,c=l.sibling,i=hs(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?s=hs(c,s):(s=Ir(s,o,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,o=e.child.memoizedState,o===null?o=Vp(n):(l=o.cachePool,l!==null?(c=Xe._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=vx(),o={baseLanes:o.baseLanes|n,cachePool:l}),s.memoizedState=o,s.childLanes=Hp(e,a,n),t.memoizedState=Fp,i):(Hs(t),n=e.child,e=n.sibling,n=hs(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=n,t.memoizedState=null,n)}function Um(e,t){return t=hh({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hh(e,t){return e=Hn(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Gp(e,t,n){return oo(t,e.child,null,n),e=Um(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ny(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),vm(e.return,t,n)}function kp(e,t,n,i,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s)}function dS(e,t,n){var i=t.pendingProps,s=i.revealOrder,r=i.tail;if(nn(e,t,i.children,n),i=qe.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ny(e,n,t);else if(e.tag===19)ny(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(we(qe,i),s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&lh(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),kp(t,!1,s,n,r);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&lh(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}kp(t,!0,n,null,r);break;case"together":kp(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ms(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),sr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(lc(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(Y(153));if(t.child!==null){for(e=t.child,n=hs(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hs(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cg(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ih(e)))}function vA(e,t,n){switch(t.tag){case 3:Ku(t,t.stateNode.containerInfo),Vs(t,Xe,e.memoizedState.cache),oc();break;case 27:case 5:am(t);break;case 4:Ku(t,t.stateNode.containerInfo);break;case 10:Vs(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Hs(t),t.flags|=128,null):(n&t.child.childLanes)!==0?fS(e,t,n):(Hs(t),e=ms(e,t,n),e!==null?e.sibling:null);Hs(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(lc(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return dS(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(qe,qe.current),i)break;return null;case 22:case 23:return t.lanes=0,hS(e,t,n);case 24:Vs(t,Xe,e.memoizedState.cache)}return ms(e,t,n)}function pS(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)$e=!0;else{if(!Cg(e,n)&&(t.flags&128)===0)return $e=!1,vA(e,t,n);$e=(e.flags&131072)!==0}else $e=!1,te&&(t.flags&1048576)!==0&&gx(t,nh,t.index);switch(t.lanes=0,t.tag){case 16:t:{e=t.pendingProps;var i=t.elementType,s=i._init;if(i=s(i._payload),t.type=i,typeof i=="function")cg(i)?(e=Wr(i,e),t.tag=1,t=ty(null,t,i,e,n)):(t.tag=0,t=Dm(null,t,i,e,n));else{if(i!=null){if(s=i.$$typeof,s===Km){t.tag=11,t=jv(null,t,i,e,n);break t}else if(s===jm){t.tag=14,t=Jv(null,t,i,e,n);break t}}throw t=sm(i)||i,Error(Y(306,t,""))}}return t;case 0:return Dm(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Wr(i,t.pendingProps),ty(e,t,i,s,n);case 3:t:{if(Ku(t,t.stateNode.containerInfo),e===null)throw Error(Y(387));i=t.pendingProps;var r=t.memoizedState;s=r.element,bm(e,t),Ol(t,i,null,n);var a=t.memoizedState;if(i=a.cache,Vs(t,Xe,i),i!==r.cache&&ym(t,[Xe],n,!0),Nl(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=ey(e,t,i,n);break t}else if(i!==s){s=oi(Error(Y(424)),t),Xl(s),t=ey(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=xi(e.firstChild),bn=t,te=!0,Br=null,Pi=!0,n=nS(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(oc(),i===s){t=ms(e,t,n);break t}nn(e,t,i,n)}t=t.child}return t;case 26:return ku(e,t),e===null?(n=Sy(t.type,null,t.pendingProps,null))?t.memoizedState=n:te||(n=t.type,e=t.pendingProps,i=vh(Zs.current).createElement(n),i[un]=t,i[Un]=e,rn(i,n,e),Qe(i),t.stateNode=i):t.memoizedState=Sy(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return am(t),e===null&&te&&(i=t.stateNode=tb(t.type,t.pendingProps,Zs.current),bn=t,Pi=!0,s=Ne,ar(t.type)?(Xm=s,Ne=xi(i.firstChild)):Ne=s),nn(e,t,t.pendingProps.children,n),ku(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&te&&((s=i=Ne)&&(i=WA(i,t.type,t.pendingProps,Pi),i!==null?(t.stateNode=i,bn=t,Ne=xi(i.firstChild),Pi=!1,s=!0):s=!1),s||Hr(t)),am(t),s=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,Gm(s,r)?i=null:a!==null&&Gm(s,a)&&(t.flags|=32),t.memoizedState!==null&&(s=_g(e,t,uA,null,null,n),Jl._currentValue=s),ku(e,t),nn(e,t,i,n),t.child;case 6:return e===null&&te&&((e=n=Ne)&&(n=XA(n,t.pendingProps,Pi),n!==null?(t.stateNode=n,bn=t,Ne=null,e=!0):e=!1),e||Hr(t)),null;case 13:return fS(e,t,n);case 4:return Ku(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=oo(t,null,i,n):nn(e,t,i,n),t.child;case 11:return jv(e,t,t.type,t.pendingProps,n);case 7:return nn(e,t,t.pendingProps,n),t.child;case 8:return nn(e,t,t.pendingProps.children,n),t.child;case 12:return nn(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Vs(t,t.type,i.value),nn(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Gr(t),s=hn(s),i=i(s),t.flags|=1,nn(e,t,i,n),t.child;case 14:return Jv(e,t,t.type,t.pendingProps,n);case 15:return uS(e,t,t.type,t.pendingProps,n);case 19:return dS(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=hh(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=hs(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return hS(e,t,n);case 24:return Gr(t),i=hn(Xe),e===null?(s=dg(),s===null&&(s=_e,r=fg(),s.pooledCache=r,r.refCount++,r!==null&&(s.pooledCacheLanes|=n),s=r),t.memoizedState={parent:i,cache:s},pg(t),Vs(t,Xe,s)):((e.lanes&n)!==0&&(bm(e,t),Ol(t,null,null,n),Nl()),s=e.memoizedState,r=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Vs(t,Xe,i)):(i=r.cache,Vs(t,Xe,i),i!==s.cache&&ym(t,[Xe],n,!0))),nn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(Y(156,t.tag))}function is(e){e.flags|=4}function iy(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ib(t)){if(t=ci.current,t!==null&&((jt&4194048)===jt?Vi!==null:(jt&62914560)!==jt&&(jt&536870912)===0||t!==Vi))throw Ul=Sm,yx;e.flags|=8192}}function Ru(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Vy():536870912,e.lanes|=t,lo|=t)}function yl(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function yA(e,t,n){var i=t.pendingProps;switch(hg(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return Ue(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),fs(Xe),eo(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_l(t)?is(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Nv())),Ue(t),null;case 26:return n=t.memoizedState,e===null?(is(t),n!==null?(Ue(t),iy(t,n)):(Ue(t),t.flags&=-16777217)):n?n!==e.memoizedState?(is(t),Ue(t),iy(t,n)):(Ue(t),t.flags&=-16777217):(e.memoizedProps!==i&&is(t),Ue(t),t.flags&=-16777217),null;case 27:ju(t),n=Zs.current;var s=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&is(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Ue(t),null}e=zi.current,_l(t)?Uv(t,e):(e=tb(s,i,n),t.stateNode=e,is(t))}return Ue(t),null;case 5:if(ju(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&is(t);else{if(!i){if(t.stateNode===null)throw Error(Y(166));return Ue(t),null}if(e=zi.current,_l(t))Uv(t,e);else{switch(s=vh(Zs.current),e){case 1:e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=s.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=s.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?s.createElement("select",{is:i.is}):s.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?s.createElement(n,{is:i.is}):s.createElement(n)}}e[un]=t,e[Un]=i;t:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)e.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break t;for(;s.sibling===null;){if(s.return===null||s.return===t)break t;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=e;t:switch(rn(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&is(t)}}return Ue(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&is(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(Y(166));if(e=Zs.current,_l(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=bn,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[un]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||JS(e.nodeValue,n)),e||Hr(t)}else e=vh(e).createTextNode(i),e[un]=t,t.stateNode=e}return Ue(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=_l(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(Y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Y(317));s[un]=t}else oc(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ue(t),s=!1}else s=Nv(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(us(t),t):(us(t),null)}if(us(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool);var r=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==s&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ru(t,t.updateQueue),Ue(t),null;case 4:return eo(),e===null&&Pg(t.stateNode.containerInfo),Ue(t),null;case 10:return fs(t.type),Ue(t),null;case 19:if(tn(qe),s=t.memoizedState,s===null)return Ue(t),null;if(i=(t.flags&128)!==0,r=s.rendering,r===null)if(i)yl(s,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=lh(e),r!==null){for(t.flags|=128,yl(s,!1),e=r.updateQueue,t.updateQueue=e,Ru(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)mx(n,e),n=n.sibling;return we(qe,qe.current&1|2),t.child}e=e.sibling}s.tail!==null&&Fi()>dh&&(t.flags|=128,i=!0,yl(s,!1),t.lanes=4194304)}else{if(!i)if(e=lh(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ru(t,e),yl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!r.alternate&&!te)return Ue(t),null}else 2*Fi()-s.renderingStartTime>dh&&n!==536870912&&(t.flags|=128,i=!0,yl(s,!1),t.lanes=4194304);s.isBackwards?(r.sibling=t.child,t.child=r):(e=s.last,e!==null?e.sibling=r:t.child=r,s.last=r)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Fi(),t.sibling=null,e=qe.current,we(qe,i?e&1|2:e&1),t):(Ue(t),null);case 22:case 23:return us(t),mg(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),n=t.updateQueue,n!==null&&Ru(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&tn(zr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),fs(Xe),Ue(t),null;case 25:return null;case 30:return null}throw Error(Y(156,t.tag))}function xA(e,t){switch(hg(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return fs(Xe),eo(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ju(t),null;case 13:if(us(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(Y(340));oc()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return tn(qe),null;case 4:return eo(),null;case 10:return fs(t.type),null;case 22:case 23:return us(t),mg(),e!==null&&tn(zr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return fs(Xe),null;case 25:return null;default:return null}}function mS(e,t){switch(hg(t),t.tag){case 3:fs(Xe),eo();break;case 26:case 27:case 5:ju(t);break;case 4:eo();break;case 13:us(t);break;case 19:tn(qe);break;case 10:fs(t.type);break;case 22:case 23:us(t),mg(),e!==null&&tn(zr);break;case 24:fs(Xe)}}function dc(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var r=n.create,a=n.inst;i=r(),a.destroy=i}n=n.next}while(n!==s)}}catch(o){pe(t,t.return,o)}}function ir(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var r=s.next;i=r;do{if((i.tag&e)===e){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){pe(s,l,h)}}}i=i.next}while(i!==r)}}catch(h){pe(t,t.return,h)}}function gS(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{bx(t,n)}catch(i){pe(e,e.return,i)}}}function _S(e,t,n){n.props=Wr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){pe(e,t,i)}}function Pl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){pe(e,t,s)}}function Bi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){pe(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){pe(e,t,s)}else n.current=null}function vS(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){pe(e,e.return,s)}}function Wp(e,t,n){try{var i=e.stateNode;FA(i,e.type,n,t),i[Un]=t}catch(s){pe(e,e.return,s)}}function yS(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ar(e.type)||e.tag===4}function Xp(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||yS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lm(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Bh));else if(i!==4&&(i===27&&ar(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Lm(e,t,n),e=e.sibling;e!==null;)Lm(e,t,n),e=e.sibling}function fh(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ar(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(fh(e,t,n),e=e.sibling;e!==null;)fh(e,t,n),e=e.sibling}function xS(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);rn(t,i,n),t[un]=e,t[Un]=n}catch(r){pe(e,e.return,r)}}var rs=!1,Fe=!1,qp=!1,sy=typeof WeakSet=="function"?WeakSet:Set,Je=null;function SA(e,t){if(e=e.containerInfo,Vm=bh,e=ox(e),ag(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var a=0,o=-1,l=-1,c=0,h=0,d=e,f=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=a+s),d!==r||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break e;if(f===n&&++c===s&&(o=a),f===r&&++h===i&&(l=a),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hm={focusedElem:e,selectionRange:n},bh=!1,Je=t;Je!==null;)if(t=Je,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Je=e;else for(;Je!==null;){switch(t=Je,r=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,s=r.memoizedProps,r=r.memoizedState,i=n.stateNode;try{var y=Wr(n.type,s,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(y,r),i.__reactInternalSnapshotBeforeUpdate=e}catch(x){pe(n,n.return,x)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)km(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":km(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(Y(163))}if(e=t.sibling,e!==null){e.return=t.return,Je=e;break}Je=t.return}}function SS(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Ps(e,n),i&4&&dc(5,n);break;case 1:if(Ps(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(a){pe(n,n.return,a)}else{var s=Wr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){pe(n,n.return,a)}}i&64&&gS(n),i&512&&Pl(n,n.return);break;case 3:if(Ps(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{bx(e,t)}catch(a){pe(n,n.return,a)}}break;case 27:t===null&&i&4&&xS(n);case 26:case 5:Ps(e,n),t===null&&i&4&&vS(n),i&512&&Pl(n,n.return);break;case 12:Ps(e,n);break;case 13:Ps(e,n),i&4&&ES(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=DA.bind(null,n),qA(e,n))));break;case 22:if(i=n.memoizedState!==null||rs,!i){t=t!==null&&t.memoizedState!==null||Fe,s=rs;var r=Fe;rs=i,(Fe=t)&&!r?Bs(e,n,(n.subtreeFlags&8772)!==0):Ps(e,n),rs=s,Fe=r}break;case 30:break;default:Ps(e,n)}}function bS(e){var t=e.alternate;t!==null&&(e.alternate=null,bS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tg(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,Rn=!1;function ss(e,t,n){for(n=n.child;n!==null;)MS(e,t,n),n=n.sibling}function MS(e,t,n){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(nc,n)}catch{}switch(n.tag){case 26:Fe||Bi(n,t),ss(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Fe||Bi(n,t);var i=Ae,s=Rn;ar(n.type)&&(Ae=n.stateNode,Rn=!1),ss(e,t,n),Vl(n.stateNode),Ae=i,Rn=s;break;case 5:Fe||Bi(n,t);case 6:if(i=Ae,s=Rn,Ae=null,ss(e,t,n),Ae=i,Rn=s,Ae!==null)if(Rn)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){pe(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){pe(n,t,r)}break;case 18:Ae!==null&&(Rn?(e=Ae,vy(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),tc(e)):vy(Ae,n.stateNode));break;case 4:i=Ae,s=Rn,Ae=n.stateNode.containerInfo,Rn=!0,ss(e,t,n),Ae=i,Rn=s;break;case 0:case 11:case 14:case 15:Fe||ir(2,n,t),Fe||ir(4,n,t),ss(e,t,n);break;case 1:Fe||(Bi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&_S(n,t,i)),ss(e,t,n);break;case 21:ss(e,t,n);break;case 22:Fe=(i=Fe)||n.memoizedState!==null,ss(e,t,n),Fe=i;break;default:ss(e,t,n)}}function ES(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{tc(e)}catch(n){pe(t,t.return,n)}}function bA(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new sy),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new sy),t;default:throw Error(Y(435,e.tag))}}function Yp(e,t){var n=bA(e);t.forEach(function(i){var s=UA.bind(null,e,i);n.has(i)||(n.add(i),i.then(s,s))})}function zn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],r=e,a=t,o=a;t:for(;o!==null;){switch(o.tag){case 27:if(ar(o.type)){Ae=o.stateNode,Rn=!1;break t}break;case 5:Ae=o.stateNode,Rn=!1;break t;case 3:case 4:Ae=o.stateNode.containerInfo,Rn=!0;break t}o=o.return}if(Ae===null)throw Error(Y(160));MS(r,a,s),Ae=null,Rn=!1,r=s.alternate,r!==null&&(r.return=null),s.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)TS(t,e),t=t.sibling}var yi=null;function TS(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(t,e),Fn(e),i&4&&(ir(3,e,e.return),dc(3,e),ir(5,e,e.return));break;case 1:zn(t,e),Fn(e),i&512&&(Fe||n===null||Bi(n,n.return)),i&64&&rs&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=yi;if(zn(t,e),Fn(e),i&512&&(Fe||n===null||Bi(n,n.return)),i&4){var r=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":r=s.getElementsByTagName("title")[0],(!r||r[rc]||r[un]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=s.createElement(i),s.head.insertBefore(r,s.querySelector("head > title"))),rn(r,i,n),r[un]=e,Qe(r),i=r;break t;case"link":var a=My("link","href",s).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(r=a[o],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break e}}r=s.createElement(i),rn(r,i,n),s.head.appendChild(r);break;case"meta":if(a=My("meta","content",s).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(r=a[o],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break e}}r=s.createElement(i),rn(r,i,n),s.head.appendChild(r);break;default:throw Error(Y(468,i))}r[un]=e,Qe(r),i=r}e.stateNode=i}else Ey(s,e.type,e.stateNode);else e.stateNode=by(s,i,e.memoizedProps);else r!==i?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,i===null?Ey(s,e.type,e.stateNode):by(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Wp(e,e.memoizedProps,n.memoizedProps)}break;case 27:zn(t,e),Fn(e),i&512&&(Fe||n===null||Bi(n,n.return)),n!==null&&i&4&&Wp(e,e.memoizedProps,n.memoizedProps);break;case 5:if(zn(t,e),Fn(e),i&512&&(Fe||n===null||Bi(n,n.return)),e.flags&32){s=e.stateNode;try{io(s,"")}catch(p){pe(e,e.return,p)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Wp(e,s,n!==null?n.memoizedProps:s)),i&1024&&(qp=!0);break;case 6:if(zn(t,e),Fn(e),i&4){if(e.stateNode===null)throw Error(Y(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(p){pe(e,e.return,p)}}break;case 3:if(qu=null,s=yi,yi=yh(t.containerInfo),zn(t,e),yi=s,Fn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{tc(t.containerInfo)}catch(p){pe(e,e.return,p)}qp&&(qp=!1,AS(e));break;case 4:i=yi,yi=yh(e.stateNode.containerInfo),zn(t,e),Fn(e),yi=i;break;case 12:zn(t,e),Fn(e);break;case 13:zn(t,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ng=Fi()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yp(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=rs,h=Fe;if(rs=c||s,Fe=h||l,zn(t,e),Fe=h,rs=c,Fn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||rs||Fe||Nr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(r=l.stateNode,s)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,f=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(p){pe(l,l.return,p)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(p){pe(l,l.return,p)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Yp(e,n))));break;case 19:zn(t,e),Fn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Yp(e,i)));break;case 30:break;case 21:break;default:zn(t,e),Fn(e)}}function Fn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(yS(i)){n=i;break}i=i.return}if(n==null)throw Error(Y(160));switch(n.tag){case 27:var s=n.stateNode,r=Xp(e);fh(e,r,s);break;case 5:var a=n.stateNode;n.flags&32&&(io(a,""),n.flags&=-33);var o=Xp(e);fh(e,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,c=Xp(e);Lm(e,c,l);break;default:throw Error(Y(161))}}catch(h){pe(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function AS(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;AS(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Ps(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)SS(e,t.alternate,t),t=t.sibling}function Nr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ir(4,t,t.return),Nr(t);break;case 1:Bi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&_S(t,t.return,n),Nr(t);break;case 27:Vl(t.stateNode);case 26:case 5:Bi(t,t.return),Nr(t);break;case 22:t.memoizedState===null&&Nr(t);break;case 30:Nr(t);break;default:Nr(t)}e=e.sibling}}function Bs(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:Bs(s,r,n),dc(4,r);break;case 1:if(Bs(s,r,n),i=r,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){pe(i,i.return,c)}if(i=r,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)Sx(l[s],o)}catch(c){pe(i,i.return,c)}}n&&a&64&&gS(r),Pl(r,r.return);break;case 27:xS(r);case 26:case 5:Bs(s,r,n),n&&i===null&&a&4&&vS(r),Pl(r,r.return);break;case 12:Bs(s,r,n);break;case 13:Bs(s,r,n),n&&a&4&&ES(s,r);break;case 22:r.memoizedState===null&&Bs(s,r,n),Pl(r,r.return);break;case 30:break;default:Bs(s,r,n)}t=t.sibling}}function Rg(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&cc(n))}function Dg(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cc(e))}function Ii(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)wS(e,t,n,i),t=t.sibling}function wS(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Ii(e,t,n,i),s&2048&&dc(9,t);break;case 1:Ii(e,t,n,i);break;case 3:Ii(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&cc(e)));break;case 12:if(s&2048){Ii(e,t,n,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,o=r.onPostCommit;typeof o=="function"&&o(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){pe(t,t.return,l)}}else Ii(e,t,n,i);break;case 13:Ii(e,t,n,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?Ii(e,t,n,i):Bl(e,t):r._visibility&2?Ii(e,t,n,i):(r._visibility|=2,Na(e,t,n,i,(t.subtreeFlags&10256)!==0)),s&2048&&Rg(a,t);break;case 24:Ii(e,t,n,i),s&2048&&Dg(t.alternate,t);break;default:Ii(e,t,n,i)}}function Na(e,t,n,i,s){for(s=s&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var r=e,a=t,o=n,l=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:Na(r,a,o,l,s),dc(8,a);break;case 23:break;case 22:var h=a.stateNode;a.memoizedState!==null?h._visibility&2?Na(r,a,o,l,s):Bl(r,a):(h._visibility|=2,Na(r,a,o,l,s)),s&&c&2048&&Rg(a.alternate,a);break;case 24:Na(r,a,o,l,s),s&&c&2048&&Dg(a.alternate,a);break;default:Na(r,a,o,l,s)}t=t.sibling}}function Bl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Bl(n,i),s&2048&&Rg(i.alternate,i);break;case 24:Bl(n,i),s&2048&&Dg(i.alternate,i);break;default:Bl(n,i)}t=t.sibling}}var Al=8192;function Da(e){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)CS(e),e=e.sibling}function CS(e){switch(e.tag){case 26:Da(e),e.flags&Al&&e.memoizedState!==null&&rw(yi,e.memoizedState,e.memoizedProps);break;case 5:Da(e);break;case 3:case 4:var t=yi;yi=yh(e.stateNode.containerInfo),Da(e),yi=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Al,Al=16777216,Da(e),Al=t):Da(e));break;default:Da(e)}}function RS(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,US(i,e)}RS(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)DS(e),e=e.sibling}function DS(e){switch(e.tag){case 0:case 11:case 15:xl(e),e.flags&2048&&ir(9,e,e.return);break;case 3:xl(e);break;case 12:xl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Wu(e)):xl(e);break;default:xl(e)}}function Wu(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Je=i,US(i,e)}RS(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ir(8,t,t.return),Wu(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Wu(t));break;default:Wu(t)}e=e.sibling}}function US(e,t){for(;Je!==null;){var n=Je;switch(n.tag){case 0:case 11:case 15:ir(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:cc(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Je=i;else t:for(n=e;Je!==null;){i=Je;var s=i.sibling,r=i.return;if(bS(i),i===n){Je=null;break t}if(s!==null){s.return=r,Je=s;break t}Je=r}}}var MA={getCacheForType:function(e){var t=hn(Xe),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},EA=typeof WeakMap=="function"?WeakMap:Map,re=0,_e=null,qt=null,jt=0,se=0,Vn=null,qs=!1,go=!1,Ug=!1,gs=0,Oe=0,sr=0,Fr=0,Lg=0,li=0,lo=0,zl=null,Dn=null,Nm=!1,Ng=0,dh=1/0,ph=null,Js=null,sn=0,Qs=null,co=null,to=0,Om=0,Im=null,LS=null,Fl=0,Pm=null;function Wn(){if((re&2)!==0&&jt!==0)return jt&-jt;if(Rt.T!==null){var e=so;return e!==0?e:Ig()}return ky()}function NS(){li===0&&(li=(jt&536870912)===0||te?Fy():536870912);var e=ci.current;return e!==null&&(e.flags|=32),li}function Xn(e,t,n){(e===_e&&(se===2||se===9)||e.cancelPendingCommit!==null)&&(uo(e,0),Ys(e,jt,li,!1)),sc(e,n),((re&2)===0||e!==_e)&&(e===_e&&((re&2)===0&&(Fr|=n),Oe===4&&Ys(e,jt,li,!1)),Gi(e))}function OS(e,t,n){if((re&6)!==0)throw Error(Y(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ic(e,t),s=i?wA(e,t):Zp(e,t,!0),r=i;do{if(s===0){go&&!i&&Ys(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!TA(n)){s=Zp(e,t,!1),r=!1;continue}if(s===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;t:{var o=e;s=zl;var l=o.current.memoizedState.isDehydrated;if(l&&(uo(o,a).flags|=256),a=Zp(o,a,!1),a!==2){if(Ug&&!l){o.errorRecoveryDisabledLanes|=r,Fr|=r,s=4;break t}r=Dn,Dn=s,r!==null&&(Dn===null?Dn=r:Dn.push.apply(Dn,r))}s=a}if(r=!1,s!==2)continue}}if(s===1){uo(e,0),Ys(e,t,0,!0);break}t:{switch(i=e,r=s,r){case 0:case 1:throw Error(Y(345));case 4:if((t&4194048)!==t)break;case 6:Ys(i,t,li,!qs);break t;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(Y(329))}if((t&62914560)===t&&(s=Ng+300-Fi(),10<s)){if(Ys(i,t,li,!qs),Eh(i,0,!0)!==0)break t;i.timeoutHandle=$S(ry.bind(null,i,n,Dn,ph,Nm,t,li,Fr,lo,qs,r,2,-0,0),s);break t}ry(i,n,Dn,ph,Nm,t,li,Fr,lo,qs,r,0,-0,0)}}break}while(!0);Gi(e)}function ry(e,t,n,i,s,r,a,o,l,c,h,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,(d&8192||(d&16785408)===16785408)&&(jl={stylesheets:null,count:0,unsuspend:sw},CS(t),d=aw(),d!==null)){e.cancelPendingCommit=d(oy.bind(null,e,t,r,n,i,s,a,o,l,h,1,f,p)),Ys(e,r,a,!c);return}oy(e,t,r,n,i,s,a,o,l)}function TA(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],r=s.getSnapshot;s=s.value;try{if(!qn(r(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ys(e,t,n,i){t&=~Lg,t&=~Fr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var r=31-kn(s),a=1<<r;i[r]=-1,s&=~a}n!==0&&Hy(e,n,t)}function Oh(){return(re&6)===0?(pc(0,!1),!1):!0}function Og(){if(qt!==null){if(se===0)var e=qt.return;else e=qt,cs=Zr=null,xg(e),$a=null,Yl=0,e=qt;for(;e!==null;)mS(e.alternate,e),e=e.return;qt=null}}function uo(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,HA(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Og(),_e=e,qt=n=hs(e.current,null),jt=t,se=0,Vn=null,qs=!1,go=ic(e,t),Ug=!1,lo=li=Lg=Fr=sr=Oe=0,Dn=zl=null,Nm=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-kn(i),r=1<<s;t|=e[s],i&=~r}return gs=t,Ch(),n}function IS(e,t){Wt=null,Rt.H=oh,t===uc||t===Dh?(t=Bv(),se=3):t===yx?(t=Bv(),se=4):se=t===cS?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Vn=t,qt===null&&(Oe=1,uh(e,oi(t,e.current)))}function PS(){var e=Rt.H;return Rt.H=oh,e===null?oh:e}function BS(){var e=Rt.A;return Rt.A=MA,e}function Bm(){Oe=4,qs||(jt&4194048)!==jt&&ci.current!==null||(go=!0),(sr&134217727)===0&&(Fr&134217727)===0||_e===null||Ys(_e,jt,li,!1)}function Zp(e,t,n){var i=re;re|=2;var s=PS(),r=BS();(_e!==e||jt!==t)&&(ph=null,uo(e,t)),t=!1;var a=Oe;t:do try{if(se!==0&&qt!==null){var o=qt,l=Vn;switch(se){case 8:Og(),a=6;break t;case 3:case 2:case 9:case 6:ci.current===null&&(t=!0);var c=se;if(se=0,Vn=null,qa(e,o,l,c),n&&go){a=0;break t}break;default:c=se,se=0,Vn=null,qa(e,o,l,c)}}AA(),a=Oe;break}catch(h){IS(e,h)}while(!0);return t&&e.shellSuspendCounter++,cs=Zr=null,re=i,Rt.H=s,Rt.A=r,qt===null&&(_e=null,jt=0,Ch()),a}function AA(){for(;qt!==null;)zS(qt)}function wA(e,t){var n=re;re|=2;var i=PS(),s=BS();_e!==e||jt!==t?(ph=null,dh=Fi()+500,uo(e,t)):go=ic(e,t);t:do try{if(se!==0&&qt!==null){t=qt;var r=Vn;e:switch(se){case 1:se=0,Vn=null,qa(e,t,r,1);break;case 2:case 9:if(Pv(r)){se=0,Vn=null,ay(t);break}t=function(){se!==2&&se!==9||_e!==e||(se=7),Gi(e)},r.then(t,t);break t;case 3:se=7;break t;case 4:se=5;break t;case 7:Pv(r)?(se=0,Vn=null,ay(t)):(se=0,Vn=null,qa(e,t,r,7));break;case 5:var a=null;switch(qt.tag){case 26:a=qt.memoizedState;case 5:case 27:var o=qt;if(!a||ib(a)){se=0,Vn=null;var l=o.sibling;if(l!==null)qt=l;else{var c=o.return;c!==null?(qt=c,Ih(c)):qt=null}break e}}se=0,Vn=null,qa(e,t,r,5);break;case 6:se=0,Vn=null,qa(e,t,r,6);break;case 8:Og(),Oe=6;break t;default:throw Error(Y(462))}}CA();break}catch(h){IS(e,h)}while(!0);return cs=Zr=null,Rt.H=i,Rt.A=s,re=n,qt!==null?0:(_e=null,jt=0,Ch(),Oe)}function CA(){for(;qt!==null&&!jE();)zS(qt)}function zS(e){var t=pS(e.alternate,e,gs);e.memoizedProps=e.pendingProps,t===null?Ih(e):qt=t}function ay(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=$v(n,t,t.pendingProps,t.type,void 0,jt);break;case 11:t=$v(n,t,t.pendingProps,t.type.render,t.ref,jt);break;case 5:xg(t);default:mS(n,t),t=qt=mx(t,gs),t=pS(n,t,gs)}e.memoizedProps=e.pendingProps,t===null?Ih(e):qt=t}function qa(e,t,n,i){cs=Zr=null,xg(t),$a=null,Yl=0;var s=t.return;try{if(_A(e,s,t,n,jt)){Oe=1,uh(e,oi(n,e.current)),qt=null;return}}catch(r){if(s!==null)throw qt=s,r;Oe=1,uh(e,oi(n,e.current)),qt=null;return}t.flags&32768?(te||i===1?e=!0:go||(jt&536870912)!==0?e=!1:(qs=e=!0,(i===2||i===9||i===3||i===6)&&(i=ci.current,i!==null&&i.tag===13&&(i.flags|=16384))),FS(t,e)):Ih(t)}function Ih(e){var t=e;do{if((t.flags&32768)!==0){FS(t,qs);return}e=t.return;var n=yA(t.alternate,t,gs);if(n!==null){qt=n;return}if(t=t.sibling,t!==null){qt=t;return}qt=t=e}while(t!==null);Oe===0&&(Oe=5)}function FS(e,t){do{var n=xA(e.alternate,e);if(n!==null){n.flags&=32767,qt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){qt=e;return}qt=e=n}while(e!==null);Oe=6,qt=null}function oy(e,t,n,i,s,r,a,o,l){e.cancelPendingCommit=null;do Ph();while(sn!==0);if((re&6)!==0)throw Error(Y(327));if(t!==null){if(t===e.current)throw Error(Y(177));if(r=t.lanes|t.childLanes,r|=og,aT(e,n,r,a,o,l),e===_e&&(qt=_e=null,jt=0),co=t,Qs=e,to=n,Om=r,Im=s,LS=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,LA(Ju,function(){return WS(!0),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Rt.T,Rt.T=null,s=ee.p,ee.p=2,a=re,re|=4;try{SA(e,t,n)}finally{re=a,ee.p=s,Rt.T=i}}sn=1,VS(),HS(),GS()}}function VS(){if(sn===1){sn=0;var e=Qs,t=co,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Rt.T,Rt.T=null;var i=ee.p;ee.p=2;var s=re;re|=4;try{TS(t,e);var r=Hm,a=ox(e.containerInfo),o=r.focusedElem,l=r.selectionRange;if(a!==o&&o&&o.ownerDocument&&ax(o.ownerDocument.documentElement,o)){if(l!==null&&ag(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),y=o.textContent.length,x=Math.min(l.start,y),m=l.end===void 0?x:Math.min(l.end,y);!p.extend&&x>m&&(a=m,m=x,x=a);var u=Cv(o,x),g=Cv(o,m);if(u&&g&&(p.rangeCount!==1||p.anchorNode!==u.node||p.anchorOffset!==u.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var _=d.createRange();_.setStart(u.node,u.offset),p.removeAllRanges(),x>m?(p.addRange(_),p.extend(g.node,g.offset)):(_.setEnd(g.node,g.offset),p.addRange(_))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}bh=!!Vm,Hm=Vm=null}finally{re=s,ee.p=i,Rt.T=n}}e.current=t,sn=2}}function HS(){if(sn===2){sn=0;var e=Qs,t=co,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Rt.T,Rt.T=null;var i=ee.p;ee.p=2;var s=re;re|=4;try{SS(e,t.alternate,t)}finally{re=s,ee.p=i,Rt.T=n}}sn=3}}function GS(){if(sn===4||sn===3){sn=0,JE();var e=Qs,t=co,n=to,i=LS;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?sn=5:(sn=0,co=Qs=null,kS(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Js=null),$m(n),t=t.stateNode,Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(nc,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Rt.T,s=ee.p,ee.p=2,Rt.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var o=i[a];r(o.value,{componentStack:o.stack})}}finally{Rt.T=t,ee.p=s}}(to&3)!==0&&Ph(),Gi(e),s=e.pendingLanes,(n&4194090)!==0&&(s&42)!==0?e===Pm?Fl++:(Fl=0,Pm=e):Fl=0,pc(0,!1)}}function kS(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,cc(t)))}function Ph(e){return VS(),HS(),GS(),WS(e)}function WS(){if(sn!==5)return!1;var e=Qs,t=Om;Om=0;var n=$m(to),i=Rt.T,s=ee.p;try{ee.p=32>n?32:n,Rt.T=null,n=Im,Im=null;var r=Qs,a=to;if(sn=0,co=Qs=null,to=0,(re&6)!==0)throw Error(Y(331));var o=re;if(re|=4,DS(r.current),wS(r,r.current,a,n),re=o,pc(0,!1),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(nc,r)}catch{}return!0}finally{ee.p=s,Rt.T=i,kS(e,t)}}function ly(e,t,n){t=oi(n,t),t=Rm(e.stateNode,t,2),e=js(e,t,2),e!==null&&(sc(e,2),Gi(e))}function pe(e,t,n){if(e.tag===3)ly(e,e,n);else for(;t!==null;){if(t.tag===3){ly(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Js===null||!Js.has(i))){e=oi(n,e),n=oS(2),i=js(t,n,2),i!==null&&(lS(n,i,t,e),sc(i,2),Gi(i));break}}t=t.return}}function Kp(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new EA;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(Ug=!0,s.add(n),e=RA.bind(null,e,t,n),t.then(e,e))}function RA(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,_e===e&&(jt&n)===n&&(Oe===4||Oe===3&&(jt&62914560)===jt&&300>Fi()-Ng?(re&2)===0&&uo(e,0):Lg|=n,lo===jt&&(lo=0)),Gi(e)}function XS(e,t){t===0&&(t=Vy()),e=mo(e,t),e!==null&&(sc(e,t),Gi(e))}function DA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),XS(e,n)}function UA(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(Y(314))}i!==null&&i.delete(t),XS(e,n)}function LA(e,t){return Jm(e,t)}var mh=null,Oa=null,zm=!1,gh=!1,jp=!1,Vr=0;function Gi(e){e!==Oa&&e.next===null&&(Oa===null?mh=Oa=e:Oa=Oa.next=e),gh=!0,zm||(zm=!0,OA())}function pc(e,t){if(!jp&&gh){jp=!0;do for(var n=!1,i=mh;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var r=0;else{var a=i.suspendedLanes,o=i.pingedLanes;r=(1<<31-kn(42|e)+1)-1,r&=s&~(a&~o),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,cy(i,r))}else r=jt,r=Eh(i,i===_e?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||ic(i,r)||(n=!0,cy(i,r));i=i.next}while(n);jp=!1}}function NA(){qS()}function qS(){gh=zm=!1;var e=0;Vr!==0&&(VA()&&(e=Vr),Vr=0);for(var t=Fi(),n=null,i=mh;i!==null;){var s=i.next,r=YS(i,t);r===0?(i.next=null,n===null?mh=s:n.next=s,s===null&&(Oa=n)):(n=i,(e!==0||(r&3)!==0)&&(gh=!0)),i=s}pc(e,!1)}function YS(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-kn(r),o=1<<a,l=s[a];l===-1?((o&n)===0||(o&i)!==0)&&(s[a]=rT(o,t)):l<=t&&(e.expiredLanes|=o),r&=~o}if(t=_e,n=jt,n=Eh(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(se===2||se===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Mp(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ic(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Mp(i),$m(n)){case 2:case 8:n=By;break;case 32:n=Ju;break;case 268435456:n=zy;break;default:n=Ju}return i=ZS.bind(null,e),n=Jm(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Mp(i),e.callbackPriority=2,e.callbackNode=null,2}function ZS(e,t){if(sn!==0&&sn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ph(!0)&&e.callbackNode!==n)return null;var i=jt;return i=Eh(e,e===_e?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(OS(e,i,t),YS(e,Fi()),e.callbackNode!=null&&e.callbackNode===n?ZS.bind(null,e):null)}function cy(e,t){if(Ph())return null;OS(e,t,!0)}function OA(){GA(function(){(re&6)!==0?Jm(Py,NA):qS()})}function Ig(){return Vr===0&&(Vr=Fy()),Vr}function uy(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Pu(""+e)}function hy(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function IA(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var r=uy((s[Un]||null).action),a=i.submitter;a&&(t=(t=a[Un]||null)?uy(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var o=new Th("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Vr!==0){var l=a?hy(s,a):new FormData(s);wm(n,{pending:!0,data:l,method:s.method,action:r},null,l)}}else typeof r=="function"&&(o.preventDefault(),l=a?hy(s,a):new FormData(s),wm(n,{pending:!0,data:l,method:s.method,action:r},r,l))},currentTarget:s}]})}}for(Du=0;Du<mm.length;Du++)Uu=mm[Du],fy=Uu.toLowerCase(),dy=Uu[0].toUpperCase()+Uu.slice(1),Si(fy,"on"+dy);var Uu,fy,dy,Du;Si(cx,"onAnimationEnd");Si(ux,"onAnimationIteration");Si(hx,"onAnimationStart");Si("dblclick","onDoubleClick");Si("focusin","onFocus");Si("focusout","onBlur");Si(tA,"onTransitionRun");Si(eA,"onTransitionStart");Si(nA,"onTransitionCancel");Si(fx,"onTransitionEnd");no("onMouseEnter",["mouseout","mouseover"]);no("onMouseLeave",["mouseout","mouseover"]);no("onPointerEnter",["pointerout","pointerover"]);no("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),PA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zl));function KS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(h){ch(h)}s.currentTarget=null,r=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==r&&s.isPropagationStopped())break t;r=o,s.currentTarget=c;try{r(s)}catch(h){ch(h)}s.currentTarget=null,r=l}}}}function Xt(e,t){var n=t[lm];n===void 0&&(n=t[lm]=new Set);var i=e+"__bubble";n.has(i)||(jS(t,e,2,!1),n.add(i))}function Jp(e,t,n){var i=0;t&&(i|=4),jS(n,e,i,t)}var Lu="_reactListening"+Math.random().toString(36).slice(2);function Pg(e){if(!e[Lu]){e[Lu]=!0,Wy.forEach(function(n){n!=="selectionchange"&&(PA.has(n)||Jp(n,!1,e),Jp(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Lu]||(t[Lu]=!0,Jp("selectionchange",!1,t))}}function jS(e,t,n,i){switch(lb(t)){case 2:var s=cw;break;case 8:s=uw;break;default:s=Vg}n=s.bind(null,t,n,e),s=void 0,!fm||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Qp(e,t,n,i,s){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===s)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===s)return;a=a.return}for(;o!==null;){if(a=Ba(o),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=r=a;continue t}o=o.parentNode}}i=i.return}Qy(function(){var c=r,h=ng(n),d=[];t:{var f=dx.get(e);if(f!==void 0){var p=Th,y=e;switch(e){case"keypress":if(zu(n)===0)break t;case"keydown":case"keyup":p=LT;break;case"focusin":y="focus",p=Up;break;case"focusout":y="blur",p=Up;break;case"beforeblur":case"afterblur":p=Up;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=IT;break;case cx:case ux:case hx:p=MT;break;case fx:p=BT;break;case"scroll":case"scrollend":p=vT;break;case"wheel":p=FT;break;case"copy":case"cut":case"paste":p=TT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sv;break;case"toggle":case"beforetoggle":p=HT}var x=(t&4)!==0,m=!x&&(e==="scroll"||e==="scrollend"),u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,_;g!==null;){var v=g;if(_=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||_===null||u===null||(v=Gl(g,u),v!=null&&x.push(Kl(g,v,_))),m)break;g=g.return}0<x.length&&(f=new p(f,y,null,n,h),d.push({event:f,listeners:x}))}}if((t&7)===0){t:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==hm&&(y=n.relatedTarget||n.fromElement)&&(Ba(y)||y[fo]))break t;if((p||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=c,y=y?Ba(y):null,y!==null&&(m=ec(y),x=y.tag,y!==m||x!==5&&x!==27&&x!==6)&&(y=null)):(p=null,y=c),p!==y)){if(x=yv,v="onMouseLeave",u="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Sv,v="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?f:Tl(p),_=y==null?f:Tl(y),f=new x(v,g+"leave",p,n,h),f.target=m,f.relatedTarget=_,v=null,Ba(h)===c&&(x=new x(u,g+"enter",y,n,h),x.target=_,x.relatedTarget=m,v=x),m=v,p&&y)e:{for(x=p,u=y,g=0,_=x;_;_=Ua(_))g++;for(_=0,v=u;v;v=Ua(v))_++;for(;0<g-_;)x=Ua(x),g--;for(;0<_-g;)u=Ua(u),_--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break e;x=Ua(x),u=Ua(u)}x=null}else x=null;p!==null&&py(d,f,p,x,!1),y!==null&&m!==null&&py(d,m,y,x,!0)}}t:{if(f=c?Tl(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var A=Tv;else if(Ev(f))if(sx)A=JT;else{A=KT;var w=ZT}else p=f.nodeName,!p||p.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?c&&eg(c.elementType)&&(A=Tv):A=jT;if(A&&(A=A(e,c))){ix(d,A,n,h);break t}w&&w(e,f,c),e==="focusout"&&c&&f.type==="number"&&c.memoizedProps.value!=null&&um(f,"number",f.value)}switch(w=c?Tl(c):window,e){case"focusin":(Ev(w)||w.contentEditable==="true")&&(Va=w,dm=c,Rl=null);break;case"focusout":Rl=dm=Va=null;break;case"mousedown":pm=!0;break;case"contextmenu":case"mouseup":case"dragend":pm=!1,Rv(d,n,h);break;case"selectionchange":if($T)break;case"keydown":case"keyup":Rv(d,n,h)}var T;if(rg)t:{switch(e){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Fa?ex(e,n)&&(D="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(tx&&n.locale!=="ko"&&(Fa||D!=="onCompositionStart"?D==="onCompositionEnd"&&Fa&&(T=$y()):(Xs=h,ig="value"in Xs?Xs.value:Xs.textContent,Fa=!0)),w=_h(c,D),0<w.length&&(D=new xv(D,e,null,n,h),d.push({event:D,listeners:w}),T?D.data=T:(T=nx(n),T!==null&&(D.data=T)))),(T=kT?WT(e,n):XT(e,n))&&(D=_h(c,"onBeforeInput"),0<D.length&&(w=new xv("onBeforeInput","beforeinput",null,n,h),d.push({event:w,listeners:D}),w.data=T)),IA(d,e,c,n,h)}KS(d,t)})}function Kl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _h(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,r=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||r===null||(s=Gl(e,n),s!=null&&i.unshift(Kl(e,s,r)),s=Gl(e,t),s!=null&&i.push(Kl(e,s,r))),e.tag===3)return i;e=e.return}return[]}function Ua(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function py(e,t,n,i,s){for(var r=t._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=Gl(n,r),c!=null&&a.unshift(Kl(n,c,l))):s||(c=Gl(n,r),c!=null&&a.push(Kl(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var BA=/\r\n?/g,zA=/\u0000|\uFFFD/g;function my(e){return(typeof e=="string"?e:""+e).replace(BA,`
`).replace(zA,"")}function JS(e,t){return t=my(t),my(e)===t}function Bh(){}function he(e,t,n,i,s,r){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||io(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&io(e,""+i);break;case"className":Su(e,"class",i);break;case"tabIndex":Su(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Su(e,n,i);break;case"style":Jy(e,i,r);break;case"data":if(t!=="object"){Su(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Pu(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&he(e,t,"name",s.name,s,null),he(e,t,"formEncType",s.formEncType,s,null),he(e,t,"formMethod",s.formMethod,s,null),he(e,t,"formTarget",s.formTarget,s,null)):(he(e,t,"encType",s.encType,s,null),he(e,t,"method",s.method,s,null),he(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Pu(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Bh);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Pu(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xt("beforetoggle",e),Xt("toggle",e),Iu(e,"popover",i);break;case"xlinkActuate":ns(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ns(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ns(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ns(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ns(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ns(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ns(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ns(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ns(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Iu(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=gT.get(n)||n,Iu(e,n,i))}}function Fm(e,t,n,i,s,r){switch(n){case"style":Jy(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Y(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(Y(60));e.innerHTML=n}}break;case"children":typeof i=="string"?io(e,i):(typeof i=="number"||typeof i=="bigint")&&io(e,""+i);break;case"onScroll":i!=null&&Xt("scroll",e);break;case"onScrollEnd":i!=null&&Xt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Bh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xy.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),r=e[Un]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,s),typeof i=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Iu(e,n,i)}}}function rn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xt("error",e),Xt("load",e);var i=!1,s=!1,r;for(r in n)if(n.hasOwnProperty(r)){var a=n[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:he(e,t,r,a,n,null)}}s&&he(e,t,"srcSet",n.srcSet,n,null),i&&he(e,t,"src",n.src,n,null);return;case"input":Xt("invalid",e);var o=r=a=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":a=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":r=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(Y(137,t));break;default:he(e,t,i,h,n,null)}}Zy(e,r,o,l,c,a,s,!1),Qu(e);return;case"select":Xt("invalid",e),i=a=r=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":r=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:he(e,t,s,o,n,null)}t=r,n=a,e.multiple=!!i,t!=null?Za(e,!!i,t,!1):n!=null&&Za(e,!!i,n,!0);return;case"textarea":Xt("invalid",e),r=s=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":s=o;break;case"children":r=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(Y(91));break;default:he(e,t,a,o,n,null)}jy(e,i,s,r),Qu(e);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:he(e,t,l,i,n,null)}return;case"dialog":Xt("beforetoggle",e),Xt("toggle",e),Xt("cancel",e),Xt("close",e);break;case"iframe":case"object":Xt("load",e);break;case"video":case"audio":for(i=0;i<Zl.length;i++)Xt(Zl[i],e);break;case"image":Xt("error",e),Xt("load",e);break;case"details":Xt("toggle",e);break;case"embed":case"source":case"link":Xt("error",e),Xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(Y(137,t));default:he(e,t,c,i,n,null)}return;default:if(eg(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Fm(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&he(e,t,o,i,n,null))}function FA(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,r=null,a=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||he(e,t,p,null,i,d)}}for(var f in i){var p=i[f];if(d=n[f],i.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case"type":r=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":a=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Y(137,t));break;default:p!==d&&he(e,t,f,p,i,d)}}cm(e,a,o,l,c,h,r,s);return;case"select":p=a=o=f=null;for(r in n)if(l=n[r],n.hasOwnProperty(r)&&l!=null)switch(r){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(r)||he(e,t,r,null,i,l)}for(s in i)if(r=i[s],l=n[s],i.hasOwnProperty(s)&&(r!=null||l!=null))switch(s){case"value":f=r;break;case"defaultValue":o=r;break;case"multiple":a=r;default:r!==l&&he(e,t,s,r,i,l)}t=o,n=a,i=p,f!=null?Za(e,!!n,f,!1):!!i!=!!n&&(t!=null?Za(e,!!n,t,!0):Za(e,!!n,n?[]:"",!1));return;case"textarea":p=f=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:he(e,t,o,null,i,s)}for(a in i)if(s=i[a],r=n[a],i.hasOwnProperty(a)&&(s!=null||r!=null))switch(a){case"value":f=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Y(91));break;default:s!==r&&he(e,t,a,s,i,r)}Ky(e,f,p);return;case"option":for(var y in n)if(f=n[y],n.hasOwnProperty(y)&&f!=null&&!i.hasOwnProperty(y))switch(y){case"selected":e.selected=!1;break;default:he(e,t,y,null,i,f)}for(l in i)if(f=i[l],p=n[l],i.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:he(e,t,l,f,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in n)f=n[x],n.hasOwnProperty(x)&&f!=null&&!i.hasOwnProperty(x)&&he(e,t,x,null,i,f);for(c in i)if(f=i[c],p=n[c],i.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Y(137,t));break;default:he(e,t,c,f,i,p)}return;default:if(eg(t)){for(var m in n)f=n[m],n.hasOwnProperty(m)&&f!==void 0&&!i.hasOwnProperty(m)&&Fm(e,t,m,void 0,i,f);for(h in i)f=i[h],p=n[h],!i.hasOwnProperty(h)||f===p||f===void 0&&p===void 0||Fm(e,t,h,f,i,p);return}}for(var u in n)f=n[u],n.hasOwnProperty(u)&&f!=null&&!i.hasOwnProperty(u)&&he(e,t,u,null,i,f);for(d in i)f=i[d],p=n[d],!i.hasOwnProperty(d)||f===p||f==null&&p==null||he(e,t,d,f,i,p)}var Vm=null,Hm=null;function vh(e){return e.nodeType===9?e:e.ownerDocument}function gy(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function QS(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Gm(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $p=null;function VA(){var e=window.event;return e&&e.type==="popstate"?e===$p?!1:($p=e,!0):($p=null,!1)}var $S=typeof setTimeout=="function"?setTimeout:void 0,HA=typeof clearTimeout=="function"?clearTimeout:void 0,_y=typeof Promise=="function"?Promise:void 0,GA=typeof queueMicrotask=="function"?queueMicrotask:typeof _y<"u"?function(e){return _y.resolve(null).then(e).catch(kA)}:$S;function kA(e){setTimeout(function(){throw e})}function ar(e){return e==="head"}function vy(e,t){var n=t,i=0,s=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<i&&8>i){n=i;var a=e.ownerDocument;if(n&1&&Vl(a.documentElement),n&2&&Vl(a.body),n&4)for(n=a.head,Vl(n),a=n.firstChild;a;){var o=a.nextSibling,l=a.nodeName;a[rc]||l==="SCRIPT"||l==="STYLE"||l==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=o}}if(s===0){e.removeChild(r),tc(t);return}s--}else n==="$"||n==="$?"||n==="$!"?s++:i=n.charCodeAt(0)-48;else i=0;n=r}while(n);tc(t)}function km(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":km(n),tg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function WA(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[rc])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=xi(e.nextSibling),e===null)break}return null}function XA(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=xi(e.nextSibling),e===null))return null;return e}function Wm(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function qA(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function xi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Xm=null;function yy(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function tb(e,t,n){switch(t=vh(n),e){case"html":if(e=t.documentElement,!e)throw Error(Y(452));return e;case"head":if(e=t.head,!e)throw Error(Y(453));return e;case"body":if(e=t.body,!e)throw Error(Y(454));return e;default:throw Error(Y(451))}}function Vl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tg(e)}var ui=new Map,xy=new Set;function yh(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _s=ee.d;ee.d={f:YA,r:ZA,D:KA,C:jA,L:JA,m:QA,X:tw,S:$A,M:ew};function YA(){var e=_s.f(),t=Oh();return e||t}function ZA(e){var t=po(e);t!==null&&t.tag===5&&t.type==="form"?Yx(t):_s.r(e)}var _o=typeof document>"u"?null:document;function eb(e,t,n){var i=_o;if(i&&typeof t=="string"&&t){var s=ai(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),xy.has(s)||(xy.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),rn(t,"link",e),Qe(t),i.head.appendChild(t)))}}function KA(e){_s.D(e),eb("dns-prefetch",e,null)}function jA(e,t){_s.C(e,t),eb("preconnect",e,t)}function JA(e,t,n){_s.L(e,t,n);var i=_o;if(i&&e&&t){var s='link[rel="preload"][as="'+ai(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+ai(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+ai(n.imageSizes)+'"]')):s+='[href="'+ai(e)+'"]';var r=s;switch(t){case"style":r=ho(e);break;case"script":r=vo(e)}ui.has(r)||(e=xe({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ui.set(r,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(mc(r))||t==="script"&&i.querySelector(gc(r))||(t=i.createElement("link"),rn(t,"link",e),Qe(t),i.head.appendChild(t)))}}function QA(e,t){_s.m(e,t);var n=_o;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+ai(i)+'"][href="'+ai(e)+'"]',r=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=vo(e)}if(!ui.has(r)&&(e=xe({rel:"modulepreload",href:e},t),ui.set(r,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(gc(r)))return}i=n.createElement("link"),rn(i,"link",e),Qe(i),n.head.appendChild(i)}}}function $A(e,t,n){_s.S(e,t,n);var i=_o;if(i&&e){var s=Ya(i).hoistableStyles,r=ho(e);t=t||"default";var a=s.get(r);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(mc(r)))o.loading=5;else{e=xe({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ui.get(r))&&Bg(e,n);var l=a=i.createElement("link");Qe(l),rn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Xu(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:o},s.set(r,a)}}}function tw(e,t){_s.X(e,t);var n=_o;if(n&&e){var i=Ya(n).hoistableScripts,s=vo(e),r=i.get(s);r||(r=n.querySelector(gc(s)),r||(e=xe({src:e,async:!0},t),(t=ui.get(s))&&zg(e,t),r=n.createElement("script"),Qe(r),rn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function ew(e,t){_s.M(e,t);var n=_o;if(n&&e){var i=Ya(n).hoistableScripts,s=vo(e),r=i.get(s);r||(r=n.querySelector(gc(s)),r||(e=xe({src:e,async:!0,type:"module"},t),(t=ui.get(s))&&zg(e,t),r=n.createElement("script"),Qe(r),rn(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(s,r))}}function Sy(e,t,n,i){var s=(s=Zs.current)?yh(s):null;if(!s)throw Error(Y(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ho(n.href),n=Ya(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ho(n.href);var r=Ya(s).hoistableStyles,a=r.get(e);if(a||(s=s.ownerDocument||s,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=s.querySelector(mc(e)))&&!r._p&&(a.instance=r,a.state.loading=5),ui.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ui.set(e,n),r||nw(s,e,n,a.state))),t&&i===null)throw Error(Y(528,""));return a}if(t&&i!==null)throw Error(Y(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vo(n),n=Ya(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Y(444,e))}}function ho(e){return'href="'+ai(e)+'"'}function mc(e){return'link[rel="stylesheet"]['+e+"]"}function nb(e){return xe({},e,{"data-precedence":e.precedence,precedence:null})}function nw(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),rn(t,"link",n),Qe(t),e.head.appendChild(t))}function vo(e){return'[src="'+ai(e)+'"]'}function gc(e){return"script[async]"+e}function by(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+ai(n.href)+'"]');if(i)return t.instance=i,Qe(i),i;var s=xe({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Qe(i),rn(i,"style",s),Xu(i,n.precedence,e),t.instance=i;case"stylesheet":s=ho(n.href);var r=e.querySelector(mc(s));if(r)return t.state.loading|=4,t.instance=r,Qe(r),r;i=nb(n),(s=ui.get(s))&&Bg(i,s),r=(e.ownerDocument||e).createElement("link"),Qe(r);var a=r;return a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),rn(r,"link",i),t.state.loading|=4,Xu(r,n.precedence,e),t.instance=r;case"script":return r=vo(n.src),(s=e.querySelector(gc(r)))?(t.instance=s,Qe(s),s):(i=n,(s=ui.get(r))&&(i=xe({},n),zg(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),Qe(s),rn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(Y(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Xu(i,n.precedence,e));return t.instance}function Xu(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,r=s,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===t)r=o;else if(r!==s)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Bg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zg(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var qu=null;function My(e,t,n){if(qu===null){var i=new Map,s=qu=new Map;s.set(n,i)}else s=qu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var r=n[s];if(!(r[rc]||r[un]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var o=i.get(a);o?o.push(r):i.set(a,[r])}}return i}function Ey(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function iw(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ib(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jl=null;function sw(){}function rw(e,t,n){if(jl===null)throw Error(Y(475));var i=jl;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var s=ho(n.href),r=e.querySelector(mc(s));if(r){e=r._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=xh.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=r,Qe(r);return}r=e.ownerDocument||e,n=nb(n),(s=ui.get(s))&&Bg(n,s),r=r.createElement("link"),Qe(r);var a=r;a._p=new Promise(function(o,l){a.onload=o,a.onerror=l}),rn(r,"link",n),t.instance=r}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=xh.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function aw(){if(jl===null)throw Error(Y(475));var e=jl;return e.stylesheets&&e.count===0&&qm(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&qm(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function xh(){if(this.count--,this.count===0){if(this.stylesheets)qm(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sh=null;function qm(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sh=new Map,t.forEach(ow,e),Sh=null,xh.call(e))}function ow(e,t){if(!(t.state.loading&4)){var n=Sh.get(e);if(n)var i=n.get(null);else{n=new Map,Sh.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<s.length;r++){var a=s[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}s=t.instance,a=s.getAttribute("data-precedence"),r=n.get(a)||i,r===i&&n.set(null,s),n.set(a,s),this.count++,i=xh.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),r?r.parentNode.insertBefore(s,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Jl={$$typeof:as,Provider:null,Consumer:null,_currentValue:Or,_currentValue2:Or,_threadCount:0};function lw(e,t,n,i,s,r,a,o){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ep(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ep(0),this.hiddenUpdates=Ep(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function sb(e,t,n,i,s,r,a,o,l,c,h,d){return e=new lw(e,t,n,a,o,l,c,d),t=1,r===!0&&(t|=24),r=Hn(3,null,null,t),e.current=r,r.stateNode=e,t=fg(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:n,cache:t},pg(r),e}function rb(e){return e?(e=ka,e):ka}function ab(e,t,n,i,s,r){s=rb(s),i.context===null?i.context=s:i.pendingContext=s,i=Ks(t),i.payload={element:n},r=r===void 0?null:r,r!==null&&(i.callback=r),n=js(e,i,t),n!==null&&(Xn(n,e,t),Ll(n,e,t))}function Ty(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fg(e,t){Ty(e,t),(e=e.alternate)&&Ty(e,t)}function ob(e){if(e.tag===13){var t=mo(e,67108864);t!==null&&Xn(t,e,67108864),Fg(e,67108864)}}var bh=!0;function cw(e,t,n,i){var s=Rt.T;Rt.T=null;var r=ee.p;try{ee.p=2,Vg(e,t,n,i)}finally{ee.p=r,Rt.T=s}}function uw(e,t,n,i){var s=Rt.T;Rt.T=null;var r=ee.p;try{ee.p=8,Vg(e,t,n,i)}finally{ee.p=r,Rt.T=s}}function Vg(e,t,n,i){if(bh){var s=Ym(i);if(s===null)Qp(e,t,i,Mh,n),Ay(e,i);else if(fw(s,e,t,n,i))i.stopPropagation();else if(Ay(e,i),t&4&&-1<hw.indexOf(e)){for(;s!==null;){var r=po(s);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=Ur(r.pendingLanes);if(a!==0){var o=r;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var l=1<<31-kn(a);o.entanglements[1]|=l,a&=~l}Gi(r),(re&6)===0&&(dh=Fi()+500,pc(0,!1))}}break;case 13:o=mo(r,2),o!==null&&Xn(o,r,2),Oh(),Fg(r,2)}if(r=Ym(i),r===null&&Qp(e,t,i,Mh,n),r===s)break;s=r}s!==null&&i.stopPropagation()}else Qp(e,t,i,null,n)}}function Ym(e){return e=ng(e),Hg(e)}var Mh=null;function Hg(e){if(Mh=null,e=Ba(e),e!==null){var t=ec(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Ly(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Mh=e,null}function lb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(QE()){case Py:return 2;case By:return 8;case Ju:case $E:return 32;case zy:return 268435456;default:return 32}default:return 32}}var Zm=!1,$s=null,tr=null,er=null,Ql=new Map,$l=new Map,ks=[],hw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ay(e,t){switch(e){case"focusin":case"focusout":$s=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Ql.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$l.delete(t.pointerId)}}function Sl(e,t,n,i,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:r,targetContainers:[s]},t!==null&&(t=po(t),t!==null&&ob(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function fw(e,t,n,i,s){switch(t){case"focusin":return $s=Sl($s,e,t,n,i,s),!0;case"dragenter":return tr=Sl(tr,e,t,n,i,s),!0;case"mouseover":return er=Sl(er,e,t,n,i,s),!0;case"pointerover":var r=s.pointerId;return Ql.set(r,Sl(Ql.get(r)||null,e,t,n,i,s)),!0;case"gotpointercapture":return r=s.pointerId,$l.set(r,Sl($l.get(r)||null,e,t,n,i,s)),!0}return!1}function cb(e){var t=Ba(e.target);if(t!==null){var n=ec(t);if(n!==null){if(t=n.tag,t===13){if(t=Ly(n),t!==null){e.blockedOn=t,oT(e.priority,function(){if(n.tag===13){var i=Wn();i=Qm(i);var s=mo(n,i);s!==null&&Xn(s,n,i),Fg(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ym(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);hm=i,n.target.dispatchEvent(i),hm=null}else return t=po(n),t!==null&&ob(t),e.blockedOn=n,!1;t.shift()}return!0}function wy(e,t,n){Yu(e)&&n.delete(t)}function dw(){Zm=!1,$s!==null&&Yu($s)&&($s=null),tr!==null&&Yu(tr)&&(tr=null),er!==null&&Yu(er)&&(er=null),Ql.forEach(wy),$l.forEach(wy)}function Nu(e,t){e.blockedOn===t&&(e.blockedOn=null,Zm||(Zm=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,dw)))}var Ou=null;function Cy(e){Ou!==e&&(Ou=e,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,function(){Ou===e&&(Ou=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Hg(i||n)===null)continue;break}var r=po(n);r!==null&&(e.splice(t,3),t-=3,wm(r,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function tc(e){function t(l){return Nu(l,e)}$s!==null&&Nu($s,e),tr!==null&&Nu(tr,e),er!==null&&Nu(er,e),Ql.forEach(t),$l.forEach(t);for(var n=0;n<ks.length;n++){var i=ks[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ks.length&&(n=ks[0],n.blockedOn===null);)cb(n),n.blockedOn===null&&ks.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],r=n[i+1],a=s[Un]||null;if(typeof r=="function")a||Cy(n);else if(a){var o=null;if(r&&r.hasAttribute("formAction")){if(s=r,a=r[Un]||null)o=a.formAction;else if(Hg(s)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Cy(n)}}}function Gg(e){this._internalRoot=e}zh.prototype.render=Gg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(Y(409));var n=t.current,i=Wn();ab(n,i,e,t,null,null)};zh.prototype.unmount=Gg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ab(e.current,2,null,e,null,null),Oh(),t[fo]=null}};function zh(e){this._internalRoot=e}zh.prototype.unstable_scheduleHydration=function(e){if(e){var t=ky();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ks.length&&t!==0&&t<ks[n].priority;n++);ks.splice(n,0,e),n===0&&cb(e)}};var Ry=Dy.version;if(Ry!=="19.1.1")throw Error(Y(527,Ry,"19.1.1"));ee.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(Y(188)):(e=Object.keys(e).join(","),Error(Y(268,e)));return e=XE(t),e=e!==null?Ny(e):null,e=e===null?null:e.stateNode,e};var pw={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:Rt,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(bl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!bl.isDisabled&&bl.supportsFiber))try{nc=bl.inject(pw),Gn=bl}catch{}var bl;Fh.createRoot=function(e,t){if(!Uy(e))throw Error(Y(299));var n=!1,i="",s=sS,r=rS,a=aS,o=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(o=t.unstable_transitionCallbacks)),t=sb(e,1,!1,null,null,n,i,s,r,a,o,null),e[fo]=t.current,Pg(e),new Gg(t)};Fh.hydrateRoot=function(e,t,n){if(!Uy(e))throw Error(Y(299));var i=!1,s="",r=sS,a=rS,o=aS,l=null,c=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(l=n.unstable_transitionCallbacks),n.formState!==void 0&&(c=n.formState)),t=sb(e,1,!0,t,n??null,i,s,r,a,o,l,c),t.context=rb(null),n=t.current,i=Wn(),i=Qm(i),s=Ks(i),s.callback=null,js(n,s,i),n=i,t.current.lanes=n,sc(t,n),Gi(t),e[fo]=t.current,Pg(e),new zh(t)};Fh.version="19.1.1"});var db=vi((zU,fb)=>{"use strict";function hb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hb)}catch(e){console.error(e)}}hb(),fb.exports=ub()});var mb=vi((WU,pb)=>{pb.exports=function(t,n,i,s){var r=i?i.call(s,t,n):void 0;if(r!==void 0)return!!r;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var h=a[c];if(!l(h))return!1;var d=t[h],f=n[h];if(r=i?i.call(s,d,f,h):void 0,r===!1||r===void 0&&d!==f)return!1}return!0}});var oE=vi(ap=>{"use strict";var TU=Symbol.for("react.transitional.element"),AU=Symbol.for("react.fragment");function aE(e,t,n){var i=null;if(n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),"key"in t){n={};for(var s in t)s!=="key"&&(n[s]=t[s])}else n=t;return t=n.ref,{$$typeof:TU,type:e,key:i,ref:t!==void 0?t:null,props:n}}ap.Fragment=AU;ap.jsx=aE;ap.jsxs=aE});var cu=vi((_B,lE)=>{"use strict";lE.exports=oE()});var uE=Ns(db(),1);var Ma=Ns(dl(),1);var fn=function(){return fn=Object.assign||function(t){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},fn.apply(this,arguments)};function _c(e,t,n){if(n||arguments.length===2)for(var i=0,s=t.length,r;i<s;i++)(r||!(i in t))&&(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var Pe=Ns(dl()),Yb=Ns(mb());var me="-ms-",Kr="-moz-",$t="-webkit-",Vh="comm",or="rule",yo="decl";var gb="@import";var Hh="@keyframes";var _b="@layer";var kg=Math.abs,vc=String.fromCharCode,yc=Object.assign;function vb(e,t){return Ie(e,0)^45?(((t<<2^Ie(e,0))<<2^Ie(e,1))<<2^Ie(e,2))<<2^Ie(e,3):0}function Gh(e){return e.trim()}function bi(e,t){return(e=t.exec(e))?e[0]:e}function Ot(e,t,n){return e.replace(t,n)}function xo(e,t,n){return e.indexOf(t,n)}function Ie(e,t){return e.charCodeAt(t)|0}function ki(e,t,n){return e.slice(t,n)}function Mn(e){return e.length}function kh(e){return e.length}function jr(e,t){return t.push(e),e}function yb(e,t){return e.map(t).join("")}function Wg(e,t){return e.filter(function(n){return!bi(n,t)})}var Wh=1,So=1,xb=0,hi=0,Ge=0,bo="";function xc(e,t,n,i,s,r,a,o){return{value:e,root:t,parent:n,type:i,props:s,children:r,line:Wh,column:So,length:a,return:"",siblings:o}}function vs(e,t){return yc(xc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Jr(e){for(;e.root;)e=vs(e.root,{children:[e]});jr(e,e.siblings)}function Sb(){return Ge}function bb(){return Ge=hi>0?Ie(bo,--hi):0,So--,Ge===10&&(So=1,Wh--),Ge}function fi(){return Ge=hi<xb?Ie(bo,hi++):0,So++,Ge===10&&(So=1,Wh++),Ge}function lr(){return Ie(bo,hi)}function Sc(){return hi}function Xh(e,t){return ki(bo,e,t)}function Xg(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Mb(e){return Wh=So=1,xb=Mn(bo=e),hi=0,[]}function Eb(e){return bo="",e}function qh(e){return Gh(Xh(hi-1,qg(e===91?e+2:e===40?e+1:e)))}function Tb(e){for(;(Ge=lr())&&Ge<33;)fi();return Xg(e)>2||Xg(Ge)>3?"":" "}function Ab(e,t){for(;--t&&fi()&&!(Ge<48||Ge>102||Ge>57&&Ge<65||Ge>70&&Ge<97););return Xh(e,Sc()+(t<6&&lr()==32&&fi()==32))}function qg(e){for(;fi();)switch(Ge){case e:return hi;case 34:case 39:e!==34&&e!==39&&qg(Ge);break;case 40:e===41&&qg(e);break;case 92:fi();break}return hi}function wb(e,t){for(;fi()&&e+Ge!==57;)if(e+Ge===84&&lr()===47)break;return"/*"+Xh(t,hi-1)+"*"+vc(e===47?e:fi())}function Cb(e){for(;!Xg(lr());)fi();return Xh(e,hi)}function Ub(e){return Eb(Yh("",null,null,null,[""],e=Mb(e),0,[0],e))}function Yh(e,t,n,i,s,r,a,o,l){for(var c=0,h=0,d=a,f=0,p=0,y=0,x=1,m=1,u=1,g=0,_="",v=s,A=r,w=i,T=_;m;)switch(y=g,g=fi()){case 40:if(y!=108&&Ie(T,d-1)==58){xo(T+=Ot(qh(g),"&","&\f"),"&\f",kg(c?o[c-1]:0))!=-1&&(u=-1);break}case 34:case 39:case 91:T+=qh(g);break;case 9:case 10:case 13:case 32:T+=Tb(y);break;case 92:T+=Ab(Sc()-1,7);continue;case 47:switch(lr()){case 42:case 47:jr(mw(wb(fi(),Sc()),t,n,l),l);break;default:T+="/"}break;case 123*x:o[c++]=Mn(T)*u;case 125*x:case 59:case 0:switch(g){case 0:case 125:m=0;case 59+h:u==-1&&(T=Ot(T,/\f/g,"")),p>0&&Mn(T)-d&&jr(p>32?Db(T+";",i,n,d-1,l):Db(Ot(T," ","")+";",i,n,d-2,l),l);break;case 59:T+=";";default:if(jr(w=Rb(T,t,n,c,h,s,o,_,v=[],A=[],d,r),r),g===123)if(h===0)Yh(T,t,w,w,v,r,d,o,A);else switch(f===99&&Ie(T,3)===110?100:f){case 100:case 108:case 109:case 115:Yh(e,w,w,i&&jr(Rb(e,w,w,0,0,s,o,_,s,v=[],d,A),A),s,A,d,o,i?v:A);break;default:Yh(T,w,w,w,[""],A,0,o,A)}}c=h=p=0,x=u=1,_=T="",d=a;break;case 58:d=1+Mn(T),p=y;default:if(x<1){if(g==123)--x;else if(g==125&&x++==0&&bb()==125)continue}switch(T+=vc(g),g*x){case 38:u=h>0?1:(T+="\f",-1);break;case 44:o[c++]=(Mn(T)-1)*u,u=1;break;case 64:lr()===45&&(T+=qh(fi())),f=lr(),h=d=Mn(_=T+=Cb(Sc())),g++;break;case 45:y===45&&Mn(T)==2&&(x=0)}}return r}function Rb(e,t,n,i,s,r,a,o,l,c,h,d){for(var f=s-1,p=s===0?r:[""],y=kh(p),x=0,m=0,u=0;x<i;++x)for(var g=0,_=ki(e,f+1,f=kg(m=a[x])),v=e;g<y;++g)(v=Gh(m>0?p[g]+" "+_:Ot(_,/&\f/g,p[g])))&&(l[u++]=v);return xc(e,t,n,s===0?or:o,l,c,h,d)}function mw(e,t,n,i){return xc(e,t,n,Vh,vc(Sb()),ki(e,2,-2),0,i)}function Db(e,t,n,i,s){return xc(e,t,n,yo,ki(e,0,i),ki(e,i+1,-1),i,s)}function Yg(e,t,n){switch(vb(e,t)){case 5103:return $t+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $t+e+e;case 4789:return Kr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $t+e+Kr+e+me+e+e;case 5936:switch(Ie(e,t+11)){case 114:return $t+e+me+Ot(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $t+e+me+Ot(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $t+e+me+Ot(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $t+e+me+e+e;case 6165:return $t+e+me+"flex-"+e+e;case 5187:return $t+e+Ot(e,/(\w+).+(:[^]+)/,$t+"box-$1$2"+me+"flex-$1$2")+e;case 5443:return $t+e+me+"flex-item-"+Ot(e,/flex-|-self/g,"")+(bi(e,/flex-|baseline/)?"":me+"grid-row-"+Ot(e,/flex-|-self/g,""))+e;case 4675:return $t+e+me+"flex-line-pack"+Ot(e,/align-content|flex-|-self/g,"")+e;case 5548:return $t+e+me+Ot(e,"shrink","negative")+e;case 5292:return $t+e+me+Ot(e,"basis","preferred-size")+e;case 6060:return $t+"box-"+Ot(e,"-grow","")+$t+e+me+Ot(e,"grow","positive")+e;case 4554:return $t+Ot(e,/([^-])(transform)/g,"$1"+$t+"$2")+e;case 6187:return Ot(Ot(Ot(e,/(zoom-|grab)/,$t+"$1"),/(image-set)/,$t+"$1"),e,"")+e;case 5495:case 3959:return Ot(e,/(image-set\([^]*)/,$t+"$1$`$1");case 4968:return Ot(Ot(e,/(.+:)(flex-)?(.*)/,$t+"box-pack:$3"+me+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$t+e+e;case 4200:if(!bi(e,/flex-|baseline/))return me+"grid-column-align"+ki(e,t)+e;break;case 2592:case 3360:return me+Ot(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,s){return t=s,bi(i.props,/grid-\w+-end/)})?~xo(e+(n=n[t].value),"span",0)?e:me+Ot(e,"-start","")+e+me+"grid-row-span:"+(~xo(n,"span",0)?bi(n,/\d+/):+bi(n,/\d+/)-+bi(e,/\d+/))+";":me+Ot(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return bi(i.props,/grid-\w+-start/)})?e:me+Ot(Ot(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ot(e,/(.+)-inline(.+)/,$t+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mn(e)-1-t>6)switch(Ie(e,t+1)){case 109:if(Ie(e,t+4)!==45)break;case 102:return Ot(e,/(.+:)(.+)-([^]+)/,"$1"+$t+"$2-$3$1"+Kr+(Ie(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~xo(e,"stretch",0)?Yg(Ot(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ot(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,s,r,a,o,l,c){return me+s+":"+r+c+(a?me+s+"-span:"+(o?l:+l-+r)+c:"")+e});case 4949:if(Ie(e,t+6)===121)return Ot(e,":",":"+$t)+e;break;case 6444:switch(Ie(e,Ie(e,14)===45?18:11)){case 120:return Ot(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$t+(Ie(e,14)===45?"inline-":"")+"box$3$1"+$t+"$2$3$1"+me+"$2box$3")+e;case 100:return Ot(e,":",":"+me)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ot(e,"scroll-","scroll-snap-")+e}return e}function Mo(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Lb(e,t,n,i){switch(e.type){case _b:if(e.children.length)break;case gb:case yo:return e.return=e.return||e.value;case Vh:return"";case Hh:return e.return=e.value+"{"+Mo(e.children,i)+"}";case or:if(!Mn(e.value=e.props.join(",")))return""}return Mn(n=Mo(e.children,i))?e.return=e.value+"{"+n+"}":""}function Nb(e){var t=kh(e);return function(n,i,s,r){for(var a="",o=0;o<t;o++)a+=e[o](n,i,s,r)||"";return a}}function Ob(e){return function(t){t.root||(t=t.return)&&e(t)}}function Ib(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case yo:e.return=Yg(e.value,e.length,n);return;case Hh:return Mo([vs(e,{value:Ot(e.value,"@","@"+$t)})],i);case or:if(e.length)return yb(n=e.props,function(s){switch(bi(s,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Jr(vs(e,{props:[Ot(s,/:(read-\w+)/,":"+Kr+"$1")]})),Jr(vs(e,{props:[s]})),yc(e,{props:Wg(n,i)});break;case"::placeholder":Jr(vs(e,{props:[Ot(s,/:(plac\w+)/,":"+$t+"input-$1")]})),Jr(vs(e,{props:[Ot(s,/:(plac\w+)/,":"+Kr+"$1")]})),Jr(vs(e,{props:[Ot(s,/:(plac\w+)/,me+"input-$1")]})),Jr(vs(e,{props:[s]})),yc(e,{props:Wg(n,i)});break}return""})}}var Pb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var xs=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",Zb="active",Qh="data-styled-version",To="6.1.19",i0=`/*!sc*/
`,$h=typeof window<"u"&&typeof document<"u",gw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""&&process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY);var nf=Object.freeze([]),Ao=Object.freeze({});function _w(e,t,n){return n===void 0&&(n=Ao),e.theme!==n.theme&&e.theme||t||n.theme}var Kb=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),vw=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,yw=/(^-|-$)/g;function Bb(e){return e.replace(vw,"-").replace(yw,"")}var xw=/(a)(d)/gi,Zh=52,zb=function(e){return String.fromCharCode(e+(e>25?39:97))};function Jg(e){var t,n="";for(t=Math.abs(e);t>Zh;t=t/Zh|0)n=zb(t%Zh)+n;return(zb(t%Zh)+n).replace(xw,"$1-$2")}var Zg,jb=5381,Eo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jb=function(e){return Eo(jb,e)};function Sw(e){return Jg(Jb(e)>>>0)}function bw(e){return e.displayName||e.name||"Component"}function Kg(e){return typeof e=="string"&&!0}var Qb=typeof Symbol=="function"&&Symbol.for,$b=Qb?Symbol.for("react.memo"):60115,Mw=Qb?Symbol.for("react.forward_ref"):60112,Ew={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Tw={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tM={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Aw=((Zg={})[Mw]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zg[$b]=tM,Zg);function Fb(e){return("type"in(t=e)&&t.type.$$typeof)===$b?tM:"$$typeof"in e?Aw[e.$$typeof]:Ew;var t}var ww=Object.defineProperty,Cw=Object.getOwnPropertyNames,Vb=Object.getOwnPropertySymbols,Rw=Object.getOwnPropertyDescriptor,Dw=Object.getPrototypeOf,Hb=Object.prototype;function eM(e,t,n){if(typeof t!="string"){if(Hb){var i=Dw(t);i&&i!==Hb&&eM(e,i,n)}var s=Cw(t);Vb&&(s=s.concat(Vb(t)));for(var r=Fb(e),a=Fb(t),o=0;o<s.length;++o){var l=s[o];if(!(l in Tw||n&&n[l]||a&&l in a||r&&l in r)){var c=Rw(t,l);try{ww(e,l,c)}catch{}}}}return e}function wo(e){return typeof e=="function"}function s0(e){return typeof e=="object"&&"styledComponentId"in e}function Qr(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tf(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function bc(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Qg(e,t,n){if(n===void 0&&(n=!1),!n&&!bc(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Qg(e[i],t[i]);else if(bc(t))for(var i in t)e[i]=Qg(e[i],t[i]);return e}function r0(e,t){Object.defineProperty(e,"toString",{value:t})}function ys(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Uw=(function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,r=s;t>=r;)if((r<<=1)<0)throw ys(16,"".concat(t));this.groupSizes=new Uint32Array(r),this.groupSizes.set(i),this.length=r;for(var a=s;a<r;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(t+1),l=(a=0,n.length);a<l;a++)this.tag.insertRule(o,n[a])&&(this.groupSizes[t]++,o++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n;this.groupSizes[t]=0;for(var r=i;r<s;r++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],s=this.indexOfGroup(t),r=s+i,a=s;a<r;a++)n+="".concat(this.tag.getRule(a)).concat(i0);return n},e})(),xL=1<<30,jh=new Map,ef=new Map,Jh=1,Kh=function(e){if(jh.has(e))return jh.get(e);for(;ef.has(Jh);)Jh++;var t=Jh++;return jh.set(e,t),ef.set(t,e),t},Lw=function(e,t){Jh=t+1,jh.set(e,t),ef.set(t,e)},Nw="style[".concat(xs,"][").concat(Qh,'="').concat(To,'"]'),Ow=new RegExp("^".concat(xs,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Iw=function(e,t,n){for(var i,s=n.split(","),r=0,a=s.length;r<a;r++)(i=s[r])&&e.registerName(t,i)},Pw=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(i0),s=[],r=0,a=i.length;r<a;r++){var o=i[r].trim();if(o){var l=o.match(Ow);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(Lw(h,c),Iw(e,h,l[3]),e.getTag().insertRules(c,s)),s.length=0}else s.push(o)}}},Gb=function(e){for(var t=document.querySelectorAll(Nw),n=0,i=t.length;n<i;n++){var s=t[n];s&&s.getAttribute(xs)!==Zb&&(Pw(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function $g(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var nM=function(e){var t=document.head,n=e||t,i=document.createElement("style"),s=(function(o){var l=Array.from(o.querySelectorAll("style[".concat(xs,"]")));return l[l.length-1]})(n),r=s!==void 0?s.nextSibling:null;i.setAttribute(xs,Zb),i.setAttribute(Qh,To);var a=$g();return a&&i.setAttribute("nonce",a),n.insertBefore(i,r),i},Bw=(function(){function e(t){this.element=nM(t),this.element.appendChild(document.createTextNode("")),this.sheet=(function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,s=0,r=i.length;s<r;s++){var a=i[s];if(a.ownerNode===n)return a}throw ys(17)})(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e})(),zw=(function(){function e(t){this.element=nM(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e})(),Fw=(function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e})(),kb=$h,Vw={isServer:!$h,useCSSOMInjection:!gw},Mc=(function(){function e(t,n,i){t===void 0&&(t=Ao),n===void 0&&(n={});var s=this;this.options=fn(fn({},Vw),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&$h&&kb&&(kb=!1,Gb(this)),r0(this,function(){return(function(r){for(var a=r.getTag(),o=a.length,l="",c=function(d){var f=(function(u){return ef.get(u)})(d);if(f===void 0)return"continue";var p=r.names.get(f),y=a.getGroup(d);if(p===void 0||!p.size||y.length===0)return"continue";var x="".concat(xs,".g").concat(d,'[id="').concat(f,'"]'),m="";p!==void 0&&p.forEach(function(u){u.length>0&&(m+="".concat(u,","))}),l+="".concat(y).concat(x,'{content:"').concat(m,'"}').concat(i0)},h=0;h<o;h++)c(h);return l})(s)})}return e.registerId=function(t){return Kh(t)},e.prototype.rehydrate=function(){!this.server&&$h&&Gb(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fn(fn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=(function(n){var i=n.useCSSOMInjection,s=n.target;return n.isServer?new Fw(s):i?new Bw(s):new zw(s)})(this.options),new Uw(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Kh(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Kh(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Kh(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e})(),Hw=/&/g,Gw=/^\s*\/\/.*$/gm;function iM(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=iM(n.children,t)),n})}function sM(e){var t,n,i,s=e===void 0?Ao:e,r=s.options,a=r===void 0?Ao:r,o=s.plugins,l=o===void 0?nf:o,c=function(f,p,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},h=l.slice();h.push(function(f){f.type===or&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(Hw,n).replace(i,c))}),a.prefix&&h.push(Ib),h.push(Lb);var d=function(f,p,y,x){p===void 0&&(p=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=p,i=new RegExp("\\".concat(n,"\\b"),"g");var m=f.replace(Gw,""),u=Ub(y||p?"".concat(y," ").concat(p," { ").concat(m," }"):m);a.namespace&&(u=iM(u,a.namespace));var g=[];return Mo(u,Nb(h.concat(Ob(function(_){return g.push(_)})))),g};return d.hash=l.length?l.reduce(function(f,p){return p.name||ys(15),Eo(f,p.name)},jb).toString():"",d}var kw=new Mc,t0=sM(),a0=Pe.default.createContext({shouldForwardProp:void 0,styleSheet:kw,stylis:t0}),SL=a0.Consumer,Ww=Pe.default.createContext(void 0);function e0(){return(0,Pe.useContext)(a0)}function Xw(e){var t=(0,Pe.useState)(e.stylisPlugins),n=t[0],i=t[1],s=e0().styleSheet,r=(0,Pe.useMemo)(function(){var l=s;return e.sheet?l=e.sheet:e.target&&(l=l.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(l=l.reconstructWithOptions({useCSSOMInjection:!1})),l},[e.disableCSSOMInjection,e.sheet,e.target,s]),a=(0,Pe.useMemo)(function(){return sM({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:n})},[e.enableVendorPrefixes,e.namespace,n]);(0,Pe.useEffect)(function(){(0,Yb.default)(n,e.stylisPlugins)||i(e.stylisPlugins)},[e.stylisPlugins]);var o=(0,Pe.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:r,stylis:a}},[e.shouldForwardProp,r,a]);return Pe.default.createElement(a0.Provider,{value:o},Pe.default.createElement(Ww.Provider,{value:a},e.children))}var qw=(function(){function e(t,n){var i=this;this.inject=function(s,r){r===void 0&&(r=t0);var a=i.name+r.hash;s.hasNameForId(i.id,a)||s.insertRules(i.id,a,r(i.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,r0(this,function(){throw ys(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=t0),this.name+t.hash},e})(),Yw=function(e){return e>="A"&&e<="Z"};function Wb(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;Yw(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var rM=function(e){return e==null||e===!1||e===""},aM=function(e){var t,n,i=[];for(var s in e){var r=e[s];e.hasOwnProperty(s)&&!rM(r)&&(Array.isArray(r)&&r.isCss||wo(r)?i.push("".concat(Wb(s),":"),r,";"):bc(r)?i.push.apply(i,_c(_c(["".concat(s," {")],aM(r),!1),["}"],!1)):i.push("".concat(Wb(s),": ").concat((t=s,(n=r)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Pb||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function cr(e,t,n,i){if(rM(e))return[];if(s0(e))return[".".concat(e.styledComponentId)];if(wo(e)){if(!wo(r=e)||r.prototype&&r.prototype.isReactComponent||!t)return[e];var s=e(t);return cr(s,t,n,i)}var r;return e instanceof qw?n?(e.inject(n,i),[e.getName(i)]):[e]:bc(e)?aM(e):Array.isArray(e)?Array.prototype.concat.apply(nf,e.map(function(a){return cr(a,t,n,i)})):[e.toString()]}function oM(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wo(n)&&!s0(n))return!1}return!0}var Zw=Jb(To),Kw=(function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&oM(t),this.componentId=n,this.baseHash=Eo(Zw,n),this.baseStyle=i,Mc.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=Qr(s,this.staticRulesId);else{var r=tf(cr(this.rules,t,n,i)),a=Jg(Eo(this.baseHash,r)>>>0);if(!n.hasNameForId(this.componentId,a)){var o=i(r,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,o)}s=Qr(s,a),this.staticRulesId=a}else{for(var l=Eo(this.baseHash,i.hash),c="",h=0;h<this.rules.length;h++){var d=this.rules[h];if(typeof d=="string")c+=d;else if(d){var f=tf(cr(d,t,n,i));l=Eo(l,f+h),c+=f}}if(c){var p=Jg(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),s=Qr(s,p)}}return s},e})(),lM=Pe.default.createContext(void 0),bL=lM.Consumer;var jg={};function jw(e,t,n){var i=s0(e),s=e,r=!Kg(e),a=t.attrs,o=a===void 0?nf:a,l=t.componentId,c=l===void 0?(function(v,A){var w=typeof v!="string"?"sc":Bb(v);jg[w]=(jg[w]||0)+1;var T="".concat(w,"-").concat(Sw(To+w+jg[w]));return A?"".concat(A,"-").concat(T):T})(t.displayName,t.parentComponentId):l,h=t.displayName,d=h===void 0?(function(v){return Kg(v)?"styled.".concat(v):"Styled(".concat(bw(v),")")})(e):h,f=t.displayName&&t.componentId?"".concat(Bb(t.displayName),"-").concat(t.componentId):t.componentId||c,p=i&&s.attrs?s.attrs.concat(o).filter(Boolean):o,y=t.shouldForwardProp;if(i&&s.shouldForwardProp){var x=s.shouldForwardProp;if(t.shouldForwardProp){var m=t.shouldForwardProp;y=function(v,A){return x(v,A)&&m(v,A)}}else y=x}var u=new Kw(n,f,i?s.componentStyle:void 0);function g(v,A){return(function(w,T,D){var E=w.attrs,M=w.componentStyle,U=w.defaultProps,F=w.foldedComponentIds,G=w.styledComponentId,q=w.target,K=Pe.default.useContext(lM),X=e0(),tt=w.shouldForwardProp||X.shouldForwardProp,V=_w(T,K,U)||Ao,it=(function(Kt,W,j){for(var ht,Et=fn(fn({},W),{className:void 0,theme:j}),_t=0;_t<Kt.length;_t+=1){var kt=wo(ht=Kt[_t])?ht(Et):ht;for(var ve in kt)Et[ve]=ve==="className"?Qr(Et[ve],kt[ve]):ve==="style"?fn(fn({},Et[ve]),kt[ve]):kt[ve]}return W.className&&(Et.className=Qr(Et.className,W.className)),Et})(E,T,V),ct=it.as||q,mt={};for(var Lt in it)it[Lt]===void 0||Lt[0]==="$"||Lt==="as"||Lt==="theme"&&it.theme===V||(Lt==="forwardedAs"?mt.as=it.forwardedAs:tt&&!tt(Lt,ct)||(mt[Lt]=it[Lt]));var ie=(function(Kt,W){var j=e0(),ht=Kt.generateAndInjectStyles(W,j.styleSheet,j.stylis);return ht})(M,it),ce=Qr(F,G);return ie&&(ce+=" "+ie),it.className&&(ce+=" "+it.className),mt[Kg(ct)&&!Kb.has(ct)?"class":"className"]=ce,D&&(mt.ref=D),(0,Pe.createElement)(ct,mt)})(_,v,A)}g.displayName=d;var _=Pe.default.forwardRef(g);return _.attrs=p,_.componentStyle=u,_.displayName=d,_.shouldForwardProp=y,_.foldedComponentIds=i?Qr(s.foldedComponentIds,s.styledComponentId):"",_.styledComponentId=f,_.target=i?s.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?(function(A){for(var w=[],T=1;T<arguments.length;T++)w[T-1]=arguments[T];for(var D=0,E=w;D<E.length;D++)Qg(A,E[D],!0);return A})({},s.defaultProps,v):v}}),r0(_,function(){return".".concat(_.styledComponentId)}),r&&eM(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function Xb(e,t){for(var n=[e[0]],i=0,s=t.length;i<s;i+=1)n.push(t[i],e[i+1]);return n}var qb=function(e){return Object.assign(e,{isCss:!0})};function Jw(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(wo(e)||bc(e))return qb(cr(Xb(nf,_c([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?cr(i):qb(cr(Xb(i,t)))}function n0(e,t,n){if(n===void 0&&(n=Ao),!t)throw ys(1,t);var i=function(s){for(var r=[],a=1;a<arguments.length;a++)r[a-1]=arguments[a];return e(t,n,Jw.apply(void 0,_c([s],r,!1)))};return i.attrs=function(s){return n0(e,t,fn(fn({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},i.withConfig=function(s){return n0(e,t,fn(fn({},n),s))},i}var cM=function(e){return n0(jw,e)},sf=cM;Kb.forEach(function(e){sf[e]=cM(e)});var ML=(function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=oM(t),Mc.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,s){var r=s(tf(cr(this.rules,n,i,s)),""),a=this.componentId+t;i.insertRules(a,a,r)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,s){t>2&&Mc.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,s)},e})();var EL=(function(){function e(){var t=this;this._emitSheetCSS=function(){var n=t.instance.toString();if(!n)return"";var i=$g(),s=tf([i&&'nonce="'.concat(i,'"'),"".concat(xs,'="true"'),"".concat(Qh,'="').concat(To,'"')].filter(Boolean)," ");return"<style ".concat(s,">").concat(n,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ys(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw ys(2);var i=t.instance.toString();if(!i)return[];var s=((n={})[xs]="",n[Qh]=To,n.dangerouslySetInnerHTML={__html:i},n),r=$g();return r&&(s.nonce=r),[Pe.default.createElement("style",fn({},s,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Mc({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(t){if(this.sealed)throw ys(2);return Pe.default.createElement(Xw,{sheet:this.instance},t)},e.prototype.interleaveWithNodeStream=function(t){throw ys(3)},e})();var TL="__sc-".concat(xs,"__");var OM=0,z0=1,IM=2;var F0=1,PM=2,Ki=3,Ci=0,Tn=1,mi=2,Ds=0,ra=1,V0=2,H0=3,G0=4,BM=5,vr=100,zM=101,FM=102,VM=103,HM=104,GM=200,kM=201,WM=202,XM=203,Tf=204,Af=205,qM=206,YM=207,ZM=208,KM=209,jM=210,JM=211,QM=212,$M=213,t1=214,Kf=0,jf=1,Jf=2,aa=3,Qf=4,$f=5,td=6,ed=7,nd=0,e1=1,n1=2,Us=0,i1=1,s1=2,r1=3,a1=4,o1=5,l1=6,c1=7;var k0=300,ha=301,fa=302,id=303,sd=304,tu=306,wf=1e3,_r=1001,Cf=1002,pi=1003,u1=1004;var eu=1005;var Ri=1006,rd=1007;var Mr=1008;var Li=1009,W0=1010,X0=1011,Jo=1012,ad=1013,Er=1014,ji=1015,Qo=1016,od=1017,ld=1018,$o=1020,q0=35902,Y0=35899,Z0=1021,K0=1022,gi=1023,ko=1026,tl=1027,j0=1028,cd=1029,J0=1030,ud=1031;var hd=1033,nu=33776,iu=33777,su=33778,ru=33779,fd=35840,dd=35841,pd=35842,md=35843,gd=36196,_d=37492,vd=37496,yd=37808,xd=37809,Sd=37810,bd=37811,Md=37812,Ed=37813,Td=37814,Ad=37815,wd=37816,Cd=37817,Rd=37818,Dd=37819,Ud=37820,Ld=37821,Nd=36492,Od=36494,Id=36495,Pd=36283,Bd=36284,zd=36285,Fd=36286;var Dc=2300,Rf=2301,Ef=2302,D0=2400,U0=2401,L0=2402;var h1=3200,f1=3201;var Q0=0,d1=1,Ls="",Kn="srgb",oa="srgb-linear",Uc="linear",oe="srgb";var ia=7680;var N0=519,p1=512,m1=513,g1=514,$0=515,_1=516,v1=517,y1=518,x1=519,Df=35044;var t_="300 es",wi=2e3,Lc=2001;var Cs=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uM=1234567,Cc=Math.PI/180,Wo=180/Math.PI;function As(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[e&255]+dn[e>>8&255]+dn[e>>16&255]+dn[e>>24&255]+"-"+dn[t&255]+dn[t>>8&255]+"-"+dn[t>>16&15|64]+dn[t>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function Pt(e,t,n){return Math.max(t,Math.min(n,e))}function e_(e,t){return(e%t+t)%t}function Qw(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function $w(e,t,n){return e!==t?(n-e)/(t-e):0}function Rc(e,t,n){return(1-n)*e+n*t}function tC(e,t,n,i){return Rc(e,t,1-Math.exp(-n*i))}function eC(e,t=1){return t-Math.abs(e_(e,t*2)-t)}function nC(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function iC(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function sC(e,t){return e+Math.floor(Math.random()*(t-e+1))}function rC(e,t){return e+Math.random()*(t-e)}function aC(e){return e*(.5-Math.random())}function oC(e){e!==void 0&&(uM=e);let t=uM+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lC(e){return e*Cc}function cC(e){return e*Wo}function uC(e){return(e&e-1)===0&&e!==0}function hC(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function fC(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function dC(e,t,n,i,s){let r=Math.cos,a=Math.sin,o=r(n/2),l=a(n/2),c=r((t+i)/2),h=a((t+i)/2),d=r((t-i)/2),f=a((t-i)/2),p=r((i-t)/2),y=a((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*f,o*c);break;case"YZY":e.set(l*f,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*f,o*h,o*c);break;case"XZX":e.set(o*h,l*y,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*y,o*c);break;case"ZYZ":e.set(l*y,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ae(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var n_={DEG2RAD:Cc,RAD2DEG:Wo,generateUUID:As,clamp:Pt,euclideanModulo:e_,mapLinear:Qw,inverseLerp:$w,lerp:Rc,damp:tC,pingpong:eC,smoothstep:nC,smootherstep:iC,randInt:sC,randFloat:rC,randFloatSpread:aC,seededRandom:oC,degToRad:lC,radToDeg:cC,isPowerOfTwo:uC,ceilPowerOfTwo:hC,floorPowerOfTwo:fC,setQuaternionFromProperEuler:dC,normalize:ae,denormalize:Ai},Ft=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Pt(this.x,t.x,n.x),this.y=Pt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Pt(this.x,t,n),this.y=Pt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Pt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rs=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],p=r[a+1],y=r[a+2],x=r[a+3];if(o===0){t[n+0]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d;return}if(o===1){t[n+0]=f,t[n+1]=p,t[n+2]=y,t[n+3]=x;return}if(d!==x||l!==f||c!==p||h!==y){let m=1-o,u=l*f+c*p+h*y+d*x,g=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){let A=Math.sqrt(_),w=Math.atan2(A,u*g);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}let v=o*g;if(l=l*m+f*v,c=c*m+p*v,h=h*m+y*v,d=d*m+x*v,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],p=r[a+2],y=r[a+3];return t[n]=o*y+h*d+l*p-c*f,t[n+1]=l*y+h*f+c*d-o*p,t[n+2]=c*y+h*p+o*f-l*d,t[n+3]=h*y-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),p=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d-f*p*y;break;case"YXZ":this._x=f*h*d+c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d+f*p*y;break;case"ZXY":this._x=f*h*d-c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d-f*p*y;break;case"ZYX":this._x=f*h*d-c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d+f*p*y;break;case"YZX":this._x=f*h*d+c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d-f*p*y;break;case"XZY":this._x=f*h*d-c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*s+n*this._y,this._z=p*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class e{constructor(t=0,n=0,i=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(hM.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(hM.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Pt(this.x,t.x,n.x),this.y=Pt(this.y,t.y,n.y),this.z=Pt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Pt(this.x,t,n),this.y=Pt(this.y,t,n),this.z=Pt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return o0.copy(this).projectOnVector(t),this.sub(o0)}reflect(t){return this.sub(o0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Pt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},o0=new O,hM=new Rs,Bt=class e{constructor(t,n,i,s,r,a,o,l,c){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c)}set(t,n,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],y=i[8],x=s[0],m=s[3],u=s[6],g=s[1],_=s[4],v=s[7],A=s[2],w=s[5],T=s[8];return r[0]=a*x+o*g+l*A,r[3]=a*m+o*_+l*w,r[6]=a*u+o*v+l*T,r[1]=c*x+h*g+d*A,r[4]=c*m+h*_+d*w,r[7]=c*u+h*v+d*T,r[2]=f*x+p*g+y*A,r[5]=f*m+p*_+y*w,r[8]=f*u+p*v+y*T,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,p=c*r-a*l,y=n*d+i*f+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/y;return t[0]=d*x,t[1]=(s*c-h*i)*x,t[2]=(o*i-s*a)*x,t[3]=f*x,t[4]=(h*n-s*l)*x,t[5]=(s*r-o*n)*x,t[6]=p*x,t[7]=(i*l-c*n)*x,t[8]=(a*n-i*r)*x,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(t,n){return this.premultiply(l0.makeScale(t,n)),this}rotate(t){return this.premultiply(l0.makeRotation(-t)),this}translate(t,n){return this.premultiply(l0.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},l0=new Bt;function i_(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Nc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function S1(){let e=Nc("canvas");return e.style.display="block",e}var fM={};function Xo(e){e in fM||(fM[e]=!0,console.warn(e))}function b1(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}var dM=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pM=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pC(){let e={enabled:!0,workingColorSpace:oa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(s.r=Go(s.r),s.g=Go(s.g),s.b=Go(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ls?Uc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Xo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Xo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[oa]:{primaries:t,whitePoint:i,transfer:Uc,toXYZ:dM,fromXYZ:pM,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:dM,fromXYZ:pM,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),e}var Jt=pC();function ws(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Go(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Co,Uf=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Co===void 0&&(Co=Nc("canvas")),Co.width=t.width,Co.height=t.height;let s=Co.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Co}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Nc("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ws(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ws(n[i]/255)*255):n[i]=ws(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mC=0,qo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mC++}),this.uuid=As(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(c0(s[a].image)):r.push(c0(s[a]))}else r=c0(s);i.url=r}return n||(t.images[this.uuid]=i),i}};function c0(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Uf.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gC=0,u0=new O,jn=class e extends Cs{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=_r,s=_r,r=Ri,a=Mr,o=gi,l=Li,c=e.DEFAULT_ANISOTROPY,h=Ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gC++}),this.uuid=As(),this.name="",this.source=new qo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(u0).x}get height(){return this.source.getSize(u0).y}get depth(){return this.source.getSize(u0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==k0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wf:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Cf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wf:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Cf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=k0;jn.DEFAULT_ANISOTROPY=1;var le=class e{constructor(t=0,n=0,i=0,s=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],y=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let _=(c+1)/2,v=(p+1)/2,A=(u+1)/2,w=(h+f)/4,T=(d+x)/4,D=(y+m)/4;return _>v&&_>A?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=w/i,r=T/i):v>A?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=w/s,r=D/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=T/r,s=D/r),this.set(i,s,r,n),this}let g=Math.sqrt((m-y)*(m-y)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(d-x)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Pt(this.x,t.x,n.x),this.y=Pt(this.y,t.y,n.y),this.z=Pt(this.z,t.z,n.z),this.w=Pt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Pt(this.x,t,n),this.y=Pt(this.y,t,n),this.z=Pt(this.z,t,n),this.w=Pt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Pt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Lf=class extends Cs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new le(0,0,t,n),this.scissorTest=!1,this.viewport=new le(0,0,t,n);let s={width:t,height:n,depth:i.depth},r=new jn(s);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){let n={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new qo(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xi=class extends Lf{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Oc=class extends jn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nf=class extends jn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(t=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Mi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Mi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Mi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mi):Mi.fromBufferAttribute(r,a),Mi.applyMatrix4(t.matrixWorld),this.expandByPoint(Mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rf.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rf.copy(i.boundingBox)),rf.applyMatrix4(t.matrixWorld),this.union(rf)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mi),Mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ec),af.subVectors(this.max,Ec),Ro.subVectors(t.a,Ec),Do.subVectors(t.b,Ec),Uo.subVectors(t.c,Ec),ur.subVectors(Do,Ro),hr.subVectors(Uo,Do),$r.subVectors(Ro,Uo);let n=[0,-ur.z,ur.y,0,-hr.z,hr.y,0,-$r.z,$r.y,ur.z,0,-ur.x,hr.z,0,-hr.x,$r.z,0,-$r.x,-ur.y,ur.x,0,-hr.y,hr.x,0,-$r.y,$r.x,0];return!h0(n,Ro,Do,Uo,af)||(n=[1,0,0,0,1,0,0,0,1],!h0(n,Ro,Do,Uo,af))?!1:(of.crossVectors(ur,hr),n=[of.x,of.y,of.z],h0(n,Ro,Do,Uo,af))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ss),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ss=[new O,new O,new O,new O,new O,new O,new O,new O],Mi=new O,rf=new Jn,Ro=new O,Do=new O,Uo=new O,ur=new O,hr=new O,$r=new O,Ec=new O,af=new O,of=new O,ta=new O;function h0(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){ta.fromArray(e,r);let o=s.x*Math.abs(ta.x)+s.y*Math.abs(ta.y)+s.z*Math.abs(ta.z),l=t.dot(ta),c=n.dot(ta),h=i.dot(ta);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var _C=new Jn,Tc=new O,f0=new O,qi=class{constructor(t=new O,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):_C.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tc.subVectors(t,this.center);let n=Tc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Tc,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(f0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tc.copy(t.center).add(f0)),this.expandByPoint(Tc.copy(t.center).sub(f0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},bs=new O,d0=new O,lf=new O,fr=new O,p0=new O,cf=new O,m0=new O,Ic=class{constructor(t=new O,n=new O(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=bs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(bs.copy(this.origin).addScaledVector(this.direction,n),bs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){d0.copy(t).add(n).multiplyScalar(.5),lf.copy(n).sub(t).normalize(),fr.copy(this.origin).sub(d0);let r=t.distanceTo(n)*.5,a=-this.direction.dot(lf),o=fr.dot(this.direction),l=-fr.dot(lf),c=fr.lengthSq(),h=Math.abs(1-a*a),d,f,p,y;if(h>0)if(d=a*l-o,f=a*o-l,y=r*h,d>=0)if(f>=-y)if(f<=y){let x=1/h;d*=x,f*=x,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(d0).addScaledVector(lf,f),p}intersectSphere(t,n){bs.subVectors(t.center,this.origin);let i=bs.dot(this.direction),s=bs.dot(bs)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,bs)!==null}intersectTriangle(t,n,i,s,r){p0.subVectors(n,t),cf.subVectors(i,t),m0.crossVectors(p0,cf);let a=this.direction.dot(m0),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fr.subVectors(this.origin,t);let l=o*this.direction.dot(cf.crossVectors(fr,cf));if(l<0)return null;let c=o*this.direction.dot(p0.cross(fr));if(c<0||l+c>a)return null;let h=-o*fr.dot(m0);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class e{constructor(t,n,i,s,r,a,o,l,c,h,d,f,p,y,x,m){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,l,c,h,d,f,p,y,x,m)}set(t,n,i,s,r,a,o,l,c,h,d,f,p,y,x,m){let u=this.elements;return u[0]=t,u[4]=n,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=y,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){let n=this.elements,i=t.elements,s=1/Lo.setFromMatrixColumn(t,0).length(),r=1/Lo.setFromMatrixColumn(t,1).length(),a=1/Lo.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*d,y=o*h,x=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+y*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=y+p*c,n[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*d,y=c*h,x=c*d;n[0]=f+x*o,n[4]=y*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=p*o-y,n[6]=x+f*o,n[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*d,y=c*h,x=c*d;n[0]=f-x*o,n[4]=-a*d,n[8]=y+p*o,n[1]=p+y*o,n[5]=a*h,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*d,y=o*h,x=o*d;n[0]=l*h,n[4]=y*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-y,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,y=o*l,x=o*c;n[0]=l*h,n[4]=x-f*d,n[8]=y*d+p,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+y,n[10]=f-x*d}else if(t.order==="XZY"){let f=a*l,p=a*c,y=o*l,x=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+x,n[5]=a*h,n[9]=p*d-y,n[2]=y*d-p,n[6]=o*h,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vC,t,yC)}lookAt(t,n,i){let s=this.elements;return Yn.subVectors(t,n),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),dr.crossVectors(i,Yn),dr.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),dr.crossVectors(i,Yn)),dr.normalize(),uf.crossVectors(Yn,dr),s[0]=dr.x,s[4]=uf.x,s[8]=Yn.x,s[1]=dr.y,s[5]=uf.y,s[9]=Yn.y,s[2]=dr.z,s[6]=uf.z,s[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],y=i[2],x=i[6],m=i[10],u=i[14],g=i[3],_=i[7],v=i[11],A=i[15],w=s[0],T=s[4],D=s[8],E=s[12],M=s[1],U=s[5],F=s[9],G=s[13],q=s[2],K=s[6],X=s[10],tt=s[14],V=s[3],it=s[7],ct=s[11],mt=s[15];return r[0]=a*w+o*M+l*q+c*V,r[4]=a*T+o*U+l*K+c*it,r[8]=a*D+o*F+l*X+c*ct,r[12]=a*E+o*G+l*tt+c*mt,r[1]=h*w+d*M+f*q+p*V,r[5]=h*T+d*U+f*K+p*it,r[9]=h*D+d*F+f*X+p*ct,r[13]=h*E+d*G+f*tt+p*mt,r[2]=y*w+x*M+m*q+u*V,r[6]=y*T+x*U+m*K+u*it,r[10]=y*D+x*F+m*X+u*ct,r[14]=y*E+x*G+m*tt+u*mt,r[3]=g*w+_*M+v*q+A*V,r[7]=g*T+_*U+v*K+A*it,r[11]=g*D+_*F+v*X+A*ct,r[15]=g*E+_*G+v*tt+A*mt,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],y=t[3],x=t[7],m=t[11],u=t[15];return y*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*p-i*l*p)+x*(+n*l*p-n*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+n*c*d-n*o*p-r*a*d+i*a*p+r*o*h-i*c*h)+u*(-s*o*h-n*l*d+n*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],y=t[12],x=t[13],m=t[14],u=t[15],g=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,_=y*f*c-h*m*c-y*l*p+a*m*p+h*l*u-a*f*u,v=h*x*c-y*d*c+y*o*p-a*x*p-h*o*u+a*d*u,A=y*d*l-h*x*l-y*o*f+a*x*f+h*o*m-a*d*m,w=n*g+i*_+s*v+r*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=g*T,t[1]=(x*f*r-d*m*r-x*s*p+i*m*p+d*s*u-i*f*u)*T,t[2]=(o*m*r-x*l*r+x*s*c-i*m*c-o*s*u+i*l*u)*T,t[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*p-i*l*p)*T,t[4]=_*T,t[5]=(h*m*r-y*f*r+y*s*p-n*m*p-h*s*u+n*f*u)*T,t[6]=(y*l*r-a*m*r-y*s*c+n*m*c+a*s*u-n*l*u)*T,t[7]=(a*f*r-h*l*r+h*s*c-n*f*c-a*s*p+n*l*p)*T,t[8]=v*T,t[9]=(y*d*r-h*x*r-y*i*p+n*x*p+h*i*u-n*d*u)*T,t[10]=(a*x*r-y*o*r+y*i*c-n*x*c-a*i*u+n*o*u)*T,t[11]=(h*o*r-a*d*r-h*i*c+n*d*c+a*i*p-n*o*p)*T,t[12]=A*T,t[13]=(h*x*s-y*d*s+y*i*f-n*x*f-h*i*m+n*d*m)*T,t[14]=(y*o*s-a*x*s-y*i*l+n*x*l+a*i*m-n*o*m)*T,t[15]=(a*d*s-h*o*s+h*i*l-n*d*l-a*i*f+n*o*f)*T,this}scale(t){let n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,d=o+o,f=r*c,p=r*h,y=r*d,x=a*h,m=a*d,u=o*d,g=l*c,_=l*h,v=l*d,A=i.x,w=i.y,T=i.z;return s[0]=(1-(x+u))*A,s[1]=(p+v)*A,s[2]=(y-_)*A,s[3]=0,s[4]=(p-v)*w,s[5]=(1-(f+u))*w,s[6]=(m+g)*w,s[7]=0,s[8]=(y+_)*T,s[9]=(m-g)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements,r=Lo.set(s[0],s[1],s[2]).length(),a=Lo.set(s[4],s[5],s[6]).length(),o=Lo.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ei.copy(this);let c=1/r,h=1/a,d=1/o;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,n.setFromRotationMatrix(Ei),i.x=r,i.y=a,i.z=o,this}makePerspective(t,n,i,s,r,a,o=wi,l=!1){let c=this.elements,h=2*r/(n-t),d=2*r/(i-s),f=(n+t)/(n-t),p=(i+s)/(i-s),y,x;if(l)y=r/(a-r),x=a*r/(a-r);else if(o===wi)y=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Lc)y=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=wi,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),p=-(i+s)/(i-s),y,x;if(l)y=1/(a-r),x=a/(a-r);else if(o===wi)y=-2/(a-r),x=-(a+r)/(a-r);else if(o===Lc)y=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}},Lo=new O,Ei=new Ce,vC=new O(0,0,0),yC=new O(1,1,1),dr=new O,uf=new O,Yn=new O,mM=new Ce,gM=new Rs,Di=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return mM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mM,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return gM.setFromEuler(this),this.setFromQuaternion(gM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xC=0,_M=new O,No=new Rs,Ms=new Ce,hf=new O,Ac=new O,SC=new O,bC=new Rs,vM=new O(1,0,0),yM=new O(0,1,0),xM=new O(0,0,1),SM={type:"added"},MC={type:"removed"},Oo={type:"childadded",child:null},g0={type:"childremoved",child:null},gn=class e extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xC++}),this.uuid=As(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new O,n=new Di,i=new Rs,s=new O(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Bt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return No.setFromAxisAngle(t,n),this.quaternion.multiply(No),this}rotateOnWorldAxis(t,n){return No.setFromAxisAngle(t,n),this.quaternion.premultiply(No),this}rotateX(t){return this.rotateOnAxis(vM,t)}rotateY(t){return this.rotateOnAxis(yM,t)}rotateZ(t){return this.rotateOnAxis(xM,t)}translateOnAxis(t,n){return _M.copy(t).applyQuaternion(this.quaternion),this.position.add(_M.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(vM,t)}translateY(t){return this.translateOnAxis(yM,t)}translateZ(t){return this.translateOnAxis(xM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?hf.copy(t):hf.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ac.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Ac,hf,this.up):Ms.lookAt(hf,Ac,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),No.setFromRotationMatrix(Ms),this.quaternion.premultiply(No.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(SM),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(MC),g0.child=t,this.dispatchEvent(g0),g0.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(SM),Oo.child=t,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ac,t,SC),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ac,bC,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(n){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),y=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};gn.DEFAULT_UP=new O(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new O,Es=new O,_0=new O,Ts=new O,Io=new O,Po=new O,bM=new O,v0=new O,y0=new O,x0=new O,S0=new le,b0=new le,M0=new le,gr=class e{constructor(t=new O,n=new O,i=new O){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ti.subVectors(t,n),s.cross(Ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Ti.subVectors(s,n),Es.subVectors(i,n),_0.subVectors(t,n);let a=Ti.dot(Ti),o=Ti.dot(Es),l=Ti.dot(_0),c=Es.dot(Es),h=Es.dot(_0),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,y=(a*h-o*l)*f;return r.set(1-p-y,y,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Ts)===null?!1:Ts.x>=0&&Ts.y>=0&&Ts.x+Ts.y<=1}static getInterpolation(t,n,i,s,r,a,o,l){return this.getBarycoord(t,n,i,s,Ts)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ts.x),l.addScaledVector(a,Ts.y),l.addScaledVector(o,Ts.z),l)}static getInterpolatedAttribute(t,n,i,s,r,a){return S0.setScalar(0),b0.setScalar(0),M0.setScalar(0),S0.fromBufferAttribute(t,n),b0.fromBufferAttribute(t,i),M0.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(S0,r.x),a.addScaledVector(b0,r.y),a.addScaledVector(M0,r.z),a}static isFrontFacing(t,n,i,s){return Ti.subVectors(i,n),Es.subVectors(t,n),Ti.cross(Es).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),Ti.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,r=this.c,a,o;Io.subVectors(s,i),Po.subVectors(r,i),v0.subVectors(t,i);let l=Io.dot(v0),c=Po.dot(v0);if(l<=0&&c<=0)return n.copy(i);y0.subVectors(t,s);let h=Io.dot(y0),d=Po.dot(y0);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Io,a);x0.subVectors(t,r);let p=Io.dot(x0),y=Po.dot(x0);if(y>=0&&p<=y)return n.copy(r);let x=p*c-l*y;if(x<=0&&c>=0&&y<=0)return o=c/(c-y),n.copy(i).addScaledVector(Po,o);let m=h*y-p*d;if(m<=0&&d-h>=0&&p-y>=0)return bM.subVectors(r,s),o=(d-h)/(d-h+(p-y)),n.copy(s).addScaledVector(bM,o);let u=1/(m+x+f);return a=x*u,o=f*u,n.copy(i).addScaledVector(Io,a).addScaledVector(Po,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},M1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},ff={h:0,s:0,l:0};function E0(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Zt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=e_(t,1),n=Pt(n,0,1),i=Pt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=E0(a,r,t+1/3),this.g=E0(a,r,t),this.b=E0(a,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,n=Kn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Kn){let i=M1[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ws(t.r),this.g=ws(t.g),this.b=ws(t.b),this}copyLinearToSRGB(t){return this.r=Go(t.r),this.g=Go(t.g),this.b=Go(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kn){return Jt.workingToColorSpace(pn.copy(this),t),Math.round(Pt(pn.r*255,0,255))*65536+Math.round(Pt(pn.g*255,0,255))*256+Math.round(Pt(pn.b*255,0,255))}getHexString(t=Kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.workingToColorSpace(pn.copy(this),n);let i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.workingToColorSpace(pn.copy(this),n),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=Kn){Jt.workingToColorSpace(pn.copy(this),t);let n=pn.r,i=pn.g,s=pn.b;return t!==Kn?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(pr),this.setHSL(pr.h+t,pr.s+n,pr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(pr),t.getHSL(ff);let i=Rc(pr.h,ff.h,n),s=Rc(pr.s,ff.s,n),r=Rc(pr.l,ff.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Zt;Zt.NAMES=M1;var EC=0,yr=class extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:EC++}),this.uuid=As(),this.name="",this.type="Material",this.blending=ra,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tf,this.blendDst=Af,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ia,this.stencilZFail=ia,this.stencilZPass=ia,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Tf&&(i.blendSrc=this.blendSrc),this.blendDst!==Af&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ia&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ia&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ia&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pc=class extends yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ke=new O,df=new Ft,TC=0,Nn=class{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:TC++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Df,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)df.fromBufferAttribute(this,n),df.applyMatrix3(t),this.setXY(n,df.x,df.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix3(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyMatrix4(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.applyNormalMatrix(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ke.fromBufferAttribute(this,n),ke.transformDirection(t),this.setXYZ(n,ke.x,ke.y,ke.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ae(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ai(n,this.array)),n}setX(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ai(n,this.array)),n}setY(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ai(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ai(n,this.array)),n}setW(t,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Df&&(t.usage=this.usage),t}};var Bc=class extends Nn{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var zc=class extends Nn{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var On=class extends Nn{constructor(t,n,i){super(new Float32Array(t),n,i)}},AC=0,di=new Ce,T0=new gn,Bo=new O,Zn=new Jn,wc=new Jn,en=new O,Yi=class e extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AC++}),this.uuid=As(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i_(t)?zc:Bc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,n,i){return di.makeTranslation(t,n,i),this.applyMatrix4(di),this}scale(t,n,i){return di.makeScale(t,n,i),this.applyMatrix4(di),this}lookAt(t){return T0.lookAt(t),T0.updateMatrix(),this.applyMatrix4(T0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bo).negate(),this.translate(Bo.x,Bo.y,Bo.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new On(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];wc.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Zn.min,wc.min),Zn.expandByPoint(en),en.addVectors(Zn.max,wc.max),Zn.expandByPoint(en)):(Zn.expandByPoint(wc.min),Zn.expandByPoint(wc.max))}Zn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)en.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(en));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)en.fromBufferAttribute(o,c),l&&(Bo.fromBufferAttribute(t,c),en.add(Bo)),s=Math.max(s,i.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new O,l[D]=new O;let c=new O,h=new O,d=new O,f=new Ft,p=new Ft,y=new Ft,x=new O,m=new O;function u(D,E,M){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),f.fromBufferAttribute(r,D),p.fromBufferAttribute(r,E),y.fromBufferAttribute(r,M),h.sub(c),d.sub(c),p.sub(f),y.sub(f);let U=1/(p.x*y.y-y.x*p.y);isFinite(U)&&(x.copy(h).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(U),o[D].add(x),o[E].add(x),o[M].add(x),l[D].add(m),l[E].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let D=0,E=g.length;D<E;++D){let M=g[D],U=M.start,F=M.count;for(let G=U,q=U+F;G<q;G+=3)u(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let _=new O,v=new O,A=new O,w=new O;function T(D){A.fromBufferAttribute(s,D),w.copy(A);let E=o[D];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),v.crossVectors(w,E);let U=v.dot(l[D])<0?-1:1;a.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,E=g.length;D<E;++D){let M=g[D],U=M.start,F=M.count;for(let G=U,q=U+F;G<q;G+=3)T(t.getX(G+0)),T(t.getX(G+1)),T(t.getX(G+2))}}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){let y=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,y),r.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)en.fromBufferAttribute(t,n),en.normalize(),t.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,y=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[y++]=c[p++]}return new Nn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=t(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},MM=new Ce,ea=new Ic,pf=new qi,EM=new O,mf=new O,gf=new O,_f=new O,A0=new O,vf=new O,TM=new O,yf=new O,We=class extends gn{constructor(t=new Yi,n=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){vf.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(A0.fromBufferAttribute(d,t),a?vf.addScaledVector(A0,h):vf.addScaledVector(A0.sub(n),h))}n.add(vf)}return n}raycast(t,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pf.copy(i.boundingSphere),pf.applyMatrix4(r),ea.copy(t.ray).recast(t.near),!(pf.containsPoint(ea.origin)===!1&&(ea.intersectSphere(pf,EM)===null||ea.origin.distanceToSquared(EM)>(t.far-t.near)**2))&&(MM.copy(r).invert(),ea.copy(t.ray).applyMatrix4(MM),!(i.boundingBox!==null&&ea.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,ea)))}_computeIntersections(t,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,x=f.length;y<x;y++){let m=f[y],u=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=_;v<A;v+=3){let w=o.getX(v),T=o.getX(v+1),D=o.getX(v+2);s=xf(this,u,t,i,c,h,d,w,T,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let y=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=y,u=x;m<u;m+=3){let g=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=xf(this,a,t,i,c,h,d,g,_,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,x=f.length;y<x;y++){let m=f[y],u=a[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,A=_;v<A;v+=3){let w=v,T=v+1,D=v+2;s=xf(this,u,t,i,c,h,d,w,T,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let y=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=y,u=x;m<u;m+=3){let g=m,_=m+1,v=m+2;s=xf(this,a,t,i,c,h,d,g,_,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function wC(e,t,n,i,s,r,a,o){let l;if(t.side===Tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Ci,o),l===null)return null;yf.copy(o),yf.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(yf);return c<n.near||c>n.far?null:{distance:c,point:yf.clone(),object:e}}function xf(e,t,n,i,s,r,a,o,l,c){e.getVertexPosition(o,mf),e.getVertexPosition(l,gf),e.getVertexPosition(c,_f);let h=wC(e,t,n,i,mf,gf,_f,TM);if(h){let d=new O;gr.getBarycoord(TM,mf,gf,_f,d),s&&(h.uv=gr.getInterpolatedAttribute(s,o,l,c,d,new Ft)),r&&(h.uv1=gr.getInterpolatedAttribute(r,o,l,c,d,new Ft)),a&&(h.normal=gr.getInterpolatedAttribute(a,o,l,c,d,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};gr.getNormal(mf,gf,_f,f.normal),h.face=f,h.barycoord=d}return h}var Zi=class e extends Yi{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,p=0;y("z","y","x",-1,-1,i,n,t,a,r,0),y("z","y","x",1,-1,i,n,-t,a,r,1),y("x","z","y",1,1,t,i,n,s,a,2),y("x","z","y",1,-1,t,i,-n,s,a,3),y("x","y","z",1,-1,t,n,i,s,r,4),y("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new On(c,3)),this.setAttribute("normal",new On(h,3)),this.setAttribute("uv",new On(d,2));function y(x,m,u,g,_,v,A,w,T,D,E){let M=v/T,U=A/D,F=v/2,G=A/2,q=w/2,K=T+1,X=D+1,tt=0,V=0,it=new O;for(let ct=0;ct<X;ct++){let mt=ct*U-G;for(let Lt=0;Lt<K;Lt++){let ie=Lt*M-F;it[x]=ie*g,it[m]=mt*_,it[u]=q,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[u]=w>0?1:-1,h.push(it.x,it.y,it.z),d.push(Lt/T),d.push(1-ct/D),tt+=1}}for(let ct=0;ct<D;ct++)for(let mt=0;mt<T;mt++){let Lt=f+mt+K*ct,ie=f+mt+K*(ct+1),ce=f+(mt+1)+K*(ct+1),Kt=f+(mt+1)+K*ct;l.push(Lt,ie,Kt),l.push(ie,ce,Kt),V+=6}o.addGroup(p,V,E),p+=V,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function da(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function _n(e){let t={};for(let n=0;n<e.length;n++){let i=da(e[n]);for(let s in i)t[s]=i[s]}return t}function CC(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function s_(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var au={clone:da,merge:_n},RC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RC,this.fragmentShader=DC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=da(t.uniforms),this.uniformsGroups=CC(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},Fc=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mr=new O,AM=new Ft,wM=new Ft,mn=class extends Fc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=Wo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-t/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-t/mr.z)}getViewSize(t,n){return this.getViewBounds(t,AM,wM),n.subVectors(wM,AM)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Cc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},zo=-90,Fo=1,Of=class extends gn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(zo,Fo,t,n);s.layers=this.layers,this.add(s);let r=new mn(zo,Fo,t,n);r.layers=this.layers,this.add(r);let a=new mn(zo,Fo,t,n);a.layers=this.layers,this.add(a);let o=new mn(zo,Fo,t,n);o.layers=this.layers,this.add(o);let l=new mn(zo,Fo,t,n);l.layers=this.layers,this.add(l);let c=new mn(zo,Fo,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,a),t.setRenderTarget(i,2,s),t.render(n,o),t.setRenderTarget(i,3,s),t.render(n,l),t.setRenderTarget(i,4,s),t.render(n,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(d,f,p),t.xr.enabled=y,i.texture.needsPMREMUpdate=!0}},Vc=class extends jn{constructor(t=[],n=ha,i,s,r,a,o,l,c,h){super(t,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},If=class extends Xi{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Vc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zi(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tn,blending:Ds});r.uniforms.tEquirect.value=n;let a=new We(s,r),o=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Ri),new Of(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}},sa=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},UC={type:"move"},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let m=n.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&f>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(UC)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new sa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}};var Hc=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},Pf=class{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Df,this.updateRanges=[],this.version=0,this.uuid=As()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=As()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=As()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new O,Ui=class e{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)En.fromBufferAttribute(this,n),En.applyMatrix4(t),this.setXYZ(n,En.x,En.y,En.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)En.fromBufferAttribute(this,n),En.applyNormalMatrix(t),this.setXYZ(n,En.x,En.y,En.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)En.fromBufferAttribute(this,n),En.transformDirection(t),this.setXYZ(n,En.x,En.y,En.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=Ai(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=Ai(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=Ai(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=Ai(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=Ai(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=ae(n,this.array),i=ae(i,this.array),s=ae(s,this.array),r=ae(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var w0=new O,LC=new O,NC=new Bt,Wi=class{constructor(t=new O(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=w0.subVectors(i,n).cross(LC.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){let i=t.delta(w0),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||NC.getNormalMatrix(t),s=this.coplanarPoint(w0).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},na=new qi,OC=new Ft(.5,.5),Sf=new O,Ko=class{constructor(t=new Wi,n=new Wi,i=new Wi,s=new Wi,r=new Wi,a=new Wi){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=wi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],p=r[7],y=r[8],x=r[9],m=r[10],u=r[11],g=r[12],_=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,p-h,u-y,A-g).normalize(),s[1].setComponents(c+a,p+h,u+y,A+g).normalize(),s[2].setComponents(c+o,p+d,u+x,A+_).normalize(),s[3].setComponents(c-o,p-d,u-x,A-_).normalize(),i)s[4].setComponents(l,f,m,v).normalize(),s[5].setComponents(c-l,p-f,u-m,A-v).normalize();else if(s[4].setComponents(c-l,p-f,u-m,A-v).normalize(),n===wi)s[5].setComponents(c+l,p+f,u+m,A+v).normalize();else if(n===Lc)s[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),na.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(na)}intersectsSprite(t){na.center.set(0,0,0);let n=OC.distanceTo(t.center);return na.radius=.7071067811865476+n,na.applyMatrix4(t.matrixWorld),this.intersectsSphere(na)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Sf.x=s.normal.x>0?t.max.x:t.min.x,Sf.y=s.normal.y>0?t.max.y:t.min.y,Sf.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sf)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gc=class extends jn{constructor(t,n,i=Er,s,r,a,o=pi,l=pi,c,h=ko,d=1){if(h!==ko&&h!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:n,depth:d};super(f,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},kc=class extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var la=class e extends Yi{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let r=t/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=n/l,p=[],y=[],x=[],m=[];for(let u=0;u<h;u++){let g=u*f-a;for(let _=0;_<c;_++){let v=_*d-r;y.push(v,-g,0),x.push(0,0,1),m.push(_/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let _=g+c*u,v=g+c*(u+1),A=g+1+c*(u+1),w=g+1+c*u;p.push(_,v,w),p.push(v,A,w)}this.setIndex(p),this.setAttribute("position",new On(y,3)),this.setAttribute("normal",new On(x,3)),this.setAttribute("uv",new On(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};var Wc=class extends Yi{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let n=[],i=new Set,s=new O,r=new O;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],f=d.start,p=d.count;for(let y=f,x=f+p;y<x;y+=3)for(let m=0;m<3;m++){let u=o.getX(y+m),g=o.getX(y+(m+1)%3);s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,g),CM(s,r,i)===!0&&(n.push(s.x,s.y,s.z),n.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,d=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,d),CM(s,r,i)===!0&&(n.push(s.x,s.y,s.z),n.push(r.x,r.y,r.z))}}this.setAttribute("position",new On(n,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function CM(e,t,n){let i=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return n.has(i)===!0||n.has(s)===!0?!1:(n.add(i),n.add(s),!0)}var Xc=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ca=class extends yr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Zt(16777215),this.specular=new Zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Q0,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=nd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bf=class extends yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zf=class extends yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function bf(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function IC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var ua=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],t<s)break e}a=n.length;break n}if(!(t>=r)){let o=n[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ff=class extends ua{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:D0,endingEnd:D0}}intervalChanged_(t,n,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case U0:r=t,o=2*n-i;break;case L0:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case U0:a=t,l=2*i-n;break;case L0:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,y=(i-n)/(s-n),x=y*y,m=x*y,u=-f*m+2*f*x-f*y,g=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*y+1,_=(-1-p)*m+(1.5+p)*x+.5*y,v=p*m-p*x;for(let A=0;A!==o;++A)r[A]=u*a[h+A]+g*a[c+A]+_*a[l+A]+v*a[d+A];return r}},Vf=class extends ua{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},Hf=class extends ua{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Qn=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=bf(n,this.TimeBufferType),this.values=bf(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:bf(t.times,Array),values:bf(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Hf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Vf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ff(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case Dc:n=this.InterpolantFactoryMethodDiscrete;break;case Rf:n=this.InterpolantFactoryMethodLinear;break;case Ef:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dc;case this.InterpolantFactoryMethodLinear:return Rf;case this.InterpolantFactoryMethodSmooth:return Ef}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t}return this}trim(t,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&IC(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ef,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,p=d+i;for(let y=0;y!==i;++y){let x=n[d+y];if(x!==n[f+y]||x!==n[p+y]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,f=a*i;for(let p=0;p!==i;++p)n[f+p]=n[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,s}};Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Rf;var xr=class extends Qn{constructor(t,n,i){super(t,n,i)}};xr.prototype.ValueTypeName="bool";xr.prototype.ValueBufferType=Array;xr.prototype.DefaultInterpolation=Dc;xr.prototype.InterpolantFactoryMethodLinear=void 0;xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gf=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};Gf.prototype.ValueTypeName="color";var kf=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};kf.prototype.ValueTypeName="number";var Wf=class extends ua{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)Rs.slerpFlat(r,0,a,c-o,a,c,l);return r}},qc=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Wf(this.times,this.values,this.getValueSize(),t)}};qc.prototype.ValueTypeName="quaternion";qc.prototype.InterpolantFactoryMethodSmooth=void 0;var Sr=class extends Qn{constructor(t,n,i){super(t,n,i)}};Sr.prototype.ValueTypeName="string";Sr.prototype.ValueBufferType=Array;Sr.prototype.DefaultInterpolation=Dc;Sr.prototype.InterpolantFactoryMethodLinear=void 0;Sr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xf=class extends Qn{constructor(t,n,i,s){super(t,n,i,s)}};Xf.prototype.ValueTypeName="vector";var qf=class{constructor(t,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},E1=new qf,Yf=class{constructor(t){this.manager=t!==void 0?t:E1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yf.DEFAULT_MATERIAL_NAME="__DEFAULT";var jo=class extends gn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},Yc=class extends jo{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}},C0=new Ce,RM=new O,DM=new O,O0=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Li,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ko,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera,i=this.matrix;RM.setFromMatrixPosition(t.matrixWorld),n.position.copy(RM),DM.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(DM),n.updateMatrixWorld(),C0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(C0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(C0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Zc=class extends Fc{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},I0=class extends O0{constructor(){super(new Zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kc=class extends jo{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new I0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},jc=class extends jo{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Jc=class extends Yi{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var Zf=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var r_="\\[\\]\\.:\\/",PC=new RegExp("["+r_+"]","g"),a_="[^"+r_+"]",BC="[^"+r_.replace("\\.","")+"]",zC=/((?:WC+[\/:])*)/.source.replace("WC",a_),FC=/(WCOD+)?/.source.replace("WCOD",BC),VC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",a_),HC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",a_),GC=new RegExp("^"+zC+FC+VC+HC+"$"),kC=["material","materials","bones","map"],P0=class{constructor(t,n,i){let s=i||Se.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},Se=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(PC,"")}static parseTrackName(t){let n=GC.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);kC.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=P0;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wL=new Float32Array(1);var br=class extends Pf{constructor(t,n,i=1){super(t,n),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let n=super.clone(t);return n.meshPerAttribute=this.meshPerAttribute,n}toJSON(t){let n=super.toJSON(t);return n.isInstancedInterleavedBuffer=!0,n.meshPerAttribute=this.meshPerAttribute,n}};var UM=new Ce,Qc=class{constructor(t,n,i=0,s=1/0){this.ray=new Ic(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Yo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return UM.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(UM),this}intersectObject(t,n=!0,i=[]){return B0(t,this,i,n),i.sort(LM),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)B0(t[s],this,i,n);return i.sort(LM),i}};function LM(e,t){return e.distance-t.distance}function B0(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){let r=e.children;for(let a=0,o=r.length;a<o;a++)B0(r[a],t,n,!0)}}var NM=new O,Mf=new O,Vo=new O,Ho=new O,R0=new O,WC=new O,XC=new O,$c=class{constructor(t=new O,n=new O){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){NM.subVectors(t,this.start),Mf.subVectors(this.end,this.start);let i=Mf.dot(Mf),r=Mf.dot(NM)/i;return n&&(r=Pt(r,0,1)),r}closestPointToPoint(t,n,i){let s=this.closestPointToPointParameter(t,n);return this.delta(i).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,n=WC,i=XC){let s=10000000000000001e-32,r,a,o=this.start,l=t.start,c=this.end,h=t.end;Vo.subVectors(c,o),Ho.subVectors(h,l),R0.subVectors(o,l);let d=Vo.dot(Vo),f=Ho.dot(Ho),p=Ho.dot(R0);if(d<=s&&f<=s)return n.copy(o),i.copy(l),n.sub(i),n.dot(n);if(d<=s)r=0,a=p/f,a=Pt(a,0,1);else{let y=Vo.dot(R0);if(f<=s)a=0,r=Pt(-y/d,0,1);else{let x=Vo.dot(Ho),m=d*f-x*x;m!==0?r=Pt((x*p-y*f)/m,0,1):r=0,a=(x*r+p)/f,a<0?(a=0,r=Pt(-y/d,0,1)):a>1&&(a=1,r=Pt((x-y)/d,0,1))}}return n.copy(o).add(Vo.multiplyScalar(r)),i.copy(l).add(Ho.multiplyScalar(a)),n.sub(i),n.dot(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function o_(e,t,n,i){let s=qC(i);switch(n){case Z0:return e*t;case j0:return e*t/s.components*s.byteLength;case cd:return e*t/s.components*s.byteLength;case J0:return e*t*2/s.components*s.byteLength;case ud:return e*t*2/s.components*s.byteLength;case K0:return e*t*3/s.components*s.byteLength;case gi:return e*t*4/s.components*s.byteLength;case hd:return e*t*4/s.components*s.byteLength;case nu:case iu:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case su:case ru:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case dd:case md:return Math.max(e,16)*Math.max(t,8)/4;case fd:case pd:return Math.max(e,8)*Math.max(t,8)/2;case gd:case _d:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case vd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yd:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xd:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Sd:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bd:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Md:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wd:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Cd:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Dd:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ud:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ld:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Nd:case Od:case Id:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Pd:case Bd:return Math.ceil(e/4)*Math.ceil(t/4)*8;case zd:case Fd:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qC(e){switch(e){case Li:case W0:return{byteLength:1,components:1};case Jo:case X0:case Qo:return{byteLength:2,components:1};case od:case ld:return{byteLength:2,components:4};case Er:case ad:case ji:return{byteLength:4,components:1};case q0:case Y0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Z1(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function ZC(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<d.length;p++){let y=d[f],x=d[p];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,y=d.length;p<y;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var KC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,JC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$C=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_R=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,SR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ER=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TR="gl_FragColor = linearToOutputTexel( gl_FragColor );",AR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RR=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,DR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UR=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OR=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PR=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FR=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VR=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,HR=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,GR=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kR=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WR=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XR=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qR=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,YR=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZR=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KR=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jR=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QR=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$R=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,h2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,S2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,N2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,O2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,B2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,z2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Z2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,eD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,sD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_D=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,MD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ED=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,AD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:KC,alphahash_pars_fragment:jC,alphamap_fragment:JC,alphamap_pars_fragment:QC,alphatest_fragment:$C,alphatest_pars_fragment:tR,aomap_fragment:eR,aomap_pars_fragment:nR,batching_pars_vertex:iR,batching_vertex:sR,begin_vertex:rR,beginnormal_vertex:aR,bsdfs:oR,iridescence_fragment:lR,bumpmap_pars_fragment:cR,clipping_planes_fragment:uR,clipping_planes_pars_fragment:hR,clipping_planes_pars_vertex:fR,clipping_planes_vertex:dR,color_fragment:pR,color_pars_fragment:mR,color_pars_vertex:gR,color_vertex:_R,common:vR,cube_uv_reflection_fragment:yR,defaultnormal_vertex:xR,displacementmap_pars_vertex:SR,displacementmap_vertex:bR,emissivemap_fragment:MR,emissivemap_pars_fragment:ER,colorspace_fragment:TR,colorspace_pars_fragment:AR,envmap_fragment:wR,envmap_common_pars_fragment:CR,envmap_pars_fragment:RR,envmap_pars_vertex:DR,envmap_physical_pars_fragment:HR,envmap_vertex:UR,fog_vertex:LR,fog_pars_vertex:NR,fog_fragment:OR,fog_pars_fragment:IR,gradientmap_pars_fragment:PR,lightmap_pars_fragment:BR,lights_lambert_fragment:zR,lights_lambert_pars_fragment:FR,lights_pars_begin:VR,lights_toon_fragment:GR,lights_toon_pars_fragment:kR,lights_phong_fragment:WR,lights_phong_pars_fragment:XR,lights_physical_fragment:qR,lights_physical_pars_fragment:YR,lights_fragment_begin:ZR,lights_fragment_maps:KR,lights_fragment_end:jR,logdepthbuf_fragment:JR,logdepthbuf_pars_fragment:QR,logdepthbuf_pars_vertex:$R,logdepthbuf_vertex:t2,map_fragment:e2,map_pars_fragment:n2,map_particle_fragment:i2,map_particle_pars_fragment:s2,metalnessmap_fragment:r2,metalnessmap_pars_fragment:a2,morphinstance_vertex:o2,morphcolor_vertex:l2,morphnormal_vertex:c2,morphtarget_pars_vertex:u2,morphtarget_vertex:h2,normal_fragment_begin:f2,normal_fragment_maps:d2,normal_pars_fragment:p2,normal_pars_vertex:m2,normal_vertex:g2,normalmap_pars_fragment:_2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:y2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:S2,opaque_fragment:b2,packing:M2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:A2,dithering_pars_fragment:w2,roughnessmap_fragment:C2,roughnessmap_pars_fragment:R2,shadowmap_pars_fragment:D2,shadowmap_pars_vertex:U2,shadowmap_vertex:L2,shadowmask_pars_fragment:N2,skinbase_vertex:O2,skinning_pars_vertex:I2,skinning_vertex:P2,skinnormal_vertex:B2,specularmap_fragment:z2,specularmap_pars_fragment:F2,tonemapping_fragment:V2,tonemapping_pars_fragment:H2,transmission_fragment:G2,transmission_pars_fragment:k2,uv_pars_fragment:W2,uv_pars_vertex:X2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:Z2,background_frag:K2,backgroundCube_vert:j2,backgroundCube_frag:J2,cube_vert:Q2,cube_frag:$2,depth_vert:tD,depth_frag:eD,distanceRGBA_vert:nD,distanceRGBA_frag:iD,equirect_vert:sD,equirect_frag:rD,linedashed_vert:aD,linedashed_frag:oD,meshbasic_vert:lD,meshbasic_frag:cD,meshlambert_vert:uD,meshlambert_frag:hD,meshmatcap_vert:fD,meshmatcap_frag:dD,meshnormal_vert:pD,meshnormal_frag:mD,meshphong_vert:gD,meshphong_frag:_D,meshphysical_vert:vD,meshphysical_frag:yD,meshtoon_vert:xD,meshtoon_frag:SD,points_vert:bD,points_frag:MD,shadow_vert:ED,shadow_frag:TD,sprite_vert:AD,sprite_frag:wD},rt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},An={basic:{uniforms:_n([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:_n([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:_n([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:_n([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:_n([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:_n([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:_n([rt.points,rt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:_n([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:_n([rt.common,rt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:_n([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:_n([rt.sprite,rt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:_n([rt.common,rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:_n([rt.lights,rt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};An.physical={uniforms:_n([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var Vd={r:0,b:0,g:0},pa=new Di,CD=new Ce;function RD(e,t,n,i,s,r,a){let o=new Zt(0),l=r===!0?0:1,c,h,d=null,f=0,p=null;function y(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:t).get(v)),v}function x(_){let v=!1,A=y(_);A===null?u(o,l):A&&A.isColor&&(u(A,1),v=!0);let w=e.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(e.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(_,v){let A=y(v);A&&(A.isCubeTexture||A.mapping===tu)?(h===void 0&&(h=new We(new Zi(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:da(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pa.copy(v.backgroundRotation),pa.x*=-1,pa.y*=-1,pa.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pa.y*=-1,pa.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(CD.makeRotationFromEuler(pa)),h.material.toneMapped=Jt.getTransfer(A.colorSpace)!==oe,(d!==A||f!==A.version||p!==e.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new We(new la(2,2),new In({name:"BackgroundMaterial",uniforms:da(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=e.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,v){_.getRGB(Vd,s_(e)),i.buffers.color.setClear(Vd.r,Vd.g,Vd.b,v,a)}function g(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,v=1){o.set(_),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(o,l)},render:x,addToRenderList:m,dispose:g}}function DD(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(M,U,F,G,q){let K=!1,X=d(G,F,U);r!==X&&(r=X,c(r.object)),K=p(M,G,F,q),K&&y(M,G,F,q),q!==null&&t.update(q,e.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(M,U,F,G),q!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return e.createVertexArray()}function c(M){return e.bindVertexArray(M)}function h(M){return e.deleteVertexArray(M)}function d(M,U,F){let G=F.wireframe===!0,q=i[M.id];q===void 0&&(q={},i[M.id]=q);let K=q[U.id];K===void 0&&(K={},q[U.id]=K);let X=K[G];return X===void 0&&(X=f(l()),K[G]=X),X}function f(M){let U=[],F=[],G=[];for(let q=0;q<n;q++)U[q]=0,F[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,U,F,G){let q=r.attributes,K=U.attributes,X=0,tt=F.getAttributes();for(let V in tt)if(tt[V].location>=0){let ct=q[V],mt=K[V];if(mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),ct===void 0||ct.attribute!==mt||mt&&ct.data!==mt.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function y(M,U,F,G){let q={},K=U.attributes,X=0,tt=F.getAttributes();for(let V in tt)if(tt[V].location>=0){let ct=K[V];ct===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));let mt={};mt.attribute=ct,ct&&ct.data&&(mt.data=ct.data),q[V]=mt,X++}r.attributes=q,r.attributesNum=X,r.index=G}function x(){let M=r.newAttributes;for(let U=0,F=M.length;U<F;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){let F=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;F[M]=1,G[M]===0&&(e.enableVertexAttribArray(M),G[M]=1),q[M]!==U&&(e.vertexAttribDivisor(M,U),q[M]=U)}function g(){let M=r.newAttributes,U=r.enabledAttributes;for(let F=0,G=U.length;F<G;F++)U[F]!==M[F]&&(e.disableVertexAttribArray(F),U[F]=0)}function _(M,U,F,G,q,K,X){X===!0?e.vertexAttribIPointer(M,U,F,q,K):e.vertexAttribPointer(M,U,F,G,q,K)}function v(M,U,F,G){x();let q=G.attributes,K=F.getAttributes(),X=U.defaultAttributeValues;for(let tt in K){let V=K[tt];if(V.location>=0){let it=q[tt];if(it===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(it=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(it=M.instanceColor)),it!==void 0){let ct=it.normalized,mt=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;let ie=Lt.buffer,ce=Lt.type,Kt=Lt.bytesPerElement,W=ce===e.INT||ce===e.UNSIGNED_INT||it.gpuType===ad;if(it.isInterleavedBufferAttribute){let j=it.data,ht=j.stride,Et=it.offset;if(j.isInstancedInterleavedBuffer){for(let _t=0;_t<V.locationSize;_t++)u(V.location+_t,j.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _t=0;_t<V.locationSize;_t++)m(V.location+_t);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let _t=0;_t<V.locationSize;_t++)_(V.location+_t,mt/V.locationSize,ce,ct,ht*Kt,(Et+mt/V.locationSize*_t)*Kt,W)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)u(V.location+j,it.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<V.locationSize;j++)m(V.location+j);e.bindBuffer(e.ARRAY_BUFFER,ie);for(let j=0;j<V.locationSize;j++)_(V.location+j,mt/V.locationSize,ce,ct,mt*Kt,mt/V.locationSize*j*Kt,W)}}else if(X!==void 0){let ct=X[tt];if(ct!==void 0)switch(ct.length){case 2:e.vertexAttrib2fv(V.location,ct);break;case 3:e.vertexAttrib3fv(V.location,ct);break;case 4:e.vertexAttrib4fv(V.location,ct);break;default:e.vertexAttrib1fv(V.location,ct)}}}}g()}function A(){D();for(let M in i){let U=i[M];for(let F in U){let G=U[F];for(let q in G)h(G[q].object),delete G[q];delete U[F]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;let U=i[M.id];for(let F in U){let G=U[F];for(let q in G)h(G[q].object),delete G[q];delete U[F]}delete i[M.id]}function T(M){for(let U in i){let F=i[U];if(F[M.id]===void 0)continue;let G=F[M.id];for(let q in G)h(G[q].object),delete G[q];delete F[M.id]}}function D(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function UD(e,t,n){let i;function s(c){i=c}function r(c,h){e.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(e.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];n.update(p,i,1)}function l(c,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)a(c[y],h[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let y=0;for(let x=0;x<d;x++)y+=h[x]*f[x];n.update(y,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function LD(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==gi&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let D=T===Qo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Li&&i.convert(T)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ji&&!D)}function l(T){if(T==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),u=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),_=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=y>0,w=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:A,maxSamples:w}}function ND(e){let t=this,n=null,i=0,s=!1,r=!1,a=new Wi,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,p){let y=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=e.get(d);if(!s||y===null||y.length===0||r&&!m)r?h(null):c();else{let g=r?0:i,_=g*4,v=u.clippingState||null;l.value=v,v=h(y,f,_,p);for(let A=0;A!==_;++A)v[A]=n[A];u.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,p,y){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,y!==!0||m===null){let u=p+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,v=p;_!==x;++_,v+=4)a.copy(d[_]).applyMatrix4(g,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function OD(e){let t=new WeakMap;function n(a,o){return o===id?a.mapping=ha:o===sd&&(a.mapping=fa),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===id||o===sd)if(t.has(a)){let l=t.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new If(l.height);return c.fromEquirectangularTexture(e,a),t.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var nl=4,T1=[.125,.215,.35,.446,.526,.582],_a=20,l_=new Zc,A1=new Zt,c_=null,u_=0,h_=0,f_=!1,ga=(1+Math.sqrt(5))/2,el=1/ga,w1=[new O(-ga,el,0),new O(ga,el,0),new O(-el,0,ga),new O(el,0,ga),new O(0,ga,-el),new O(0,ga,el),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],ID=new O,kd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=ID}=r;c_=this._renderer.getRenderTarget(),u_=this._renderer.getActiveCubeFace(),h_=this._renderer.getActiveMipmapLevel(),f_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=D1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(c_,u_,h_),this._renderer.xr.enabled=f_,t.scissorTest=!1,Hd(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ha||t.mapping===fa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),c_=this._renderer.getRenderTarget(),u_=this._renderer.getActiveCubeFace(),h_=this._renderer.getActiveMipmapLevel(),f_=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Qo,format:gi,colorSpace:oa,depthBuffer:!1},s=C1(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=C1(t,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PD(r)),this._blurMaterial=BD(r,t,n)}return s}_compileMaterial(t){let n=new We(this._lodPlanes[0],t);this._renderer.compile(n,l_)}_sceneToCubeUV(t,n,i,s,r){let l=new mn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(A1),d.toneMapping=Us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let x=new Pc({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),m=new We(new Zi,x),u=!1,g=t.background;g?g.isColor&&(x.color.copy(g),t.background=null,u=!0):(x.color.copy(A1),u=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[_],r.y,r.z)):v===1?(l.up.set(0,0,c[_]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[_],r.z)):(l.up.set(0,c[_],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[_]));let A=this._cubeSize;Hd(s,v*A,_>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===ha||t.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=D1()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R1());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Hd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,l_)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=w1[(s-r-1)%w1.length];this._blur(t,r-1,r,a,o)}n.autoClear=i}_blur(t,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new We(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*_a-1),x=r/y,m=isFinite(r)?1+Math.floor(h*x):_a;m>_a&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_a}`);let u=[],g=0;for(let T=0;T<_a;++T){let D=T/x,E=Math.exp(-D*D/2);u.push(E),T===0?g+=E:T<m&&(g+=2*E)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=y,f.mipInt.value=_-i;let v=this._sizeLods[s],A=3*v*(s>_-nl?s-_+nl:0),w=4*(this._cubeSize-v);Hd(n,A,w,3*v,2*v),l.setRenderTarget(n),l.render(d,l_)}};function PD(e){let t=[],n=[],i=[],s=e,r=e-nl+1+T1.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>e-nl?l=T1[a-e+nl-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,y=6,x=3,m=2,u=1,g=new Float32Array(x*y*p),_=new Float32Array(m*y*p),v=new Float32Array(u*y*p);for(let w=0;w<p;w++){let T=w%3*2/3-1,D=w>2?0:-1,E=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];g.set(E,x*y*w),_.set(f,m*y*w);let M=[w,w,w,w,w,w];v.set(M,u*y*w)}let A=new Yi;A.setAttribute("position",new Nn(g,x)),A.setAttribute("uv",new Nn(_,m)),A.setAttribute("faceIndex",new Nn(v,u)),t.push(A),s>nl&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function C1(e,t,n){let i=new Xi(e,t,n);return i.texture.mapping=tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hd(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function BD(e,t,n){let i=new Float32Array(_a),s=new O(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:_a,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:b_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function R1(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:b_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function D1(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:b_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ds,depthTest:!1,depthWrite:!1})}function b_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zD(e){let t=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===id||l===sd,h=l===ha||l===fa;if(c||h){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new kd(e)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(n===null&&(n=new kd(e)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function FD(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Xo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function VD(e,t,n,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let y in f.attributes)t.remove(f.attributes[y]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],e.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,y=d.attributes.position,x=0;if(p!==null){let g=p.array;x=p.version;for(let _=0,v=g.length;_<v;_+=3){let A=g[_+0],w=g[_+1],T=g[_+2];f.push(A,w,w,T,T,A)}}else if(y!==void 0){let g=y.array;x=y.version;for(let _=0,v=g.length/3-1;_<v;_+=3){let A=_+0,w=_+1,T=_+2;f.push(A,w,w,T,T,A)}}else return;let m=new(i_(f)?zc:Bc)(f,1);m.version=x;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function HD(e,t,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){e.drawElements(i,p,r,f*a),n.update(p,i,1)}function c(f,p,y){y!==0&&(e.drawElementsInstanced(i,p,r,f*a,y),n.update(p,i,y))}function h(f,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,y);let m=0;for(let u=0;u<y;u++)m+=p[u];n.update(m,i,1)}function d(f,p,y,x){if(y===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,x,0,y);let u=0;for(let g=0;g<y;g++)u+=p[g]*x[g];n.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function GD(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function kD(e,t,n){let i=new WeakMap,s=new le;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let E=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],_=0;p===!0&&(_=1),y===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*A*4*d),T=new Oc(w,v,A,d);T.type=ji,T.needsUpdate=!0;let D=_*4;for(let M=0;M<d;M++){let U=m[M],F=u[M],G=g[M],q=v*A*4*M;for(let K=0;K<U.count;K++){let X=K*D;p===!0&&(s.fromBufferAttribute(U,K),w[q+X+0]=s.x,w[q+X+1]=s.y,w[q+X+2]=s.z,w[q+X+3]=0),y===!0&&(s.fromBufferAttribute(F,K),w[q+X+4]=s.x,w[q+X+5]=s.y,w[q+X+6]=s.z,w[q+X+7]=0),x===!0&&(s.fromBufferAttribute(G,K),w[q+X+8]=s.x,w[q+X+9]=s.y,w[q+X+10]=s.z,w[q+X+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:T,size:new Ft(v,A)},i.set(o,f),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let y=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function WD(e,t,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var K1=new jn,U1=new Gc(1,1),j1=new Oc,J1=new Nf,Q1=new Vc,L1=[],N1=[],O1=new Float32Array(16),I1=new Float32Array(9),P1=new Float32Array(4);function sl(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,r=L1[s];if(r===void 0&&(r=new Float32Array(s),L1[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function Ze(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ke(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Xd(e,t){let n=N1[t];n===void 0&&(n=new Int32Array(t),N1[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function XD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function qD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2fv(this.addr,t),Ke(n,t)}}function YD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ze(n,t))return;e.uniform3fv(this.addr,t),Ke(n,t)}}function ZD(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4fv(this.addr,t),Ke(n,t)}}function KD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;P1.set(i),e.uniformMatrix2fv(this.addr,!1,P1),Ke(n,i)}}function jD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;I1.set(i),e.uniformMatrix3fv(this.addr,!1,I1),Ke(n,i)}}function JD(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ze(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ke(n,t)}else{if(Ze(n,i))return;O1.set(i),e.uniformMatrix4fv(this.addr,!1,O1),Ke(n,i)}}function QD(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $D(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2iv(this.addr,t),Ke(n,t)}}function t3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3iv(this.addr,t),Ke(n,t)}}function e3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4iv(this.addr,t),Ke(n,t)}}function n3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function i3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ze(n,t))return;e.uniform2uiv(this.addr,t),Ke(n,t)}}function s3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ze(n,t))return;e.uniform3uiv(this.addr,t),Ke(n,t)}}function r3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ze(n,t))return;e.uniform4uiv(this.addr,t),Ke(n,t)}}function a3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(U1.compareFunction=$0,r=U1):r=K1,n.setTexture2D(t||r,s)}function o3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||J1,s)}function l3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Q1,s)}function c3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||j1,s)}function u3(e){switch(e){case 5126:return XD;case 35664:return qD;case 35665:return YD;case 35666:return ZD;case 35674:return KD;case 35675:return jD;case 35676:return JD;case 5124:case 35670:return QD;case 35667:case 35671:return $D;case 35668:case 35672:return t3;case 35669:case 35673:return e3;case 5125:return n3;case 36294:return i3;case 36295:return s3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return a3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return l3;case 36289:case 36303:case 36311:case 36292:return c3}}function h3(e,t){e.uniform1fv(this.addr,t)}function f3(e,t){let n=sl(t,this.size,2);e.uniform2fv(this.addr,n)}function d3(e,t){let n=sl(t,this.size,3);e.uniform3fv(this.addr,n)}function p3(e,t){let n=sl(t,this.size,4);e.uniform4fv(this.addr,n)}function m3(e,t){let n=sl(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function g3(e,t){let n=sl(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _3(e,t){let n=sl(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function v3(e,t){e.uniform1iv(this.addr,t)}function y3(e,t){e.uniform2iv(this.addr,t)}function x3(e,t){e.uniform3iv(this.addr,t)}function S3(e,t){e.uniform4iv(this.addr,t)}function b3(e,t){e.uniform1uiv(this.addr,t)}function M3(e,t){e.uniform2uiv(this.addr,t)}function E3(e,t){e.uniform3uiv(this.addr,t)}function T3(e,t){e.uniform4uiv(this.addr,t)}function A3(e,t,n){let i=this.cache,s=t.length,r=Xd(n,s);Ze(i,r)||(e.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)n.setTexture2D(t[a]||K1,r[a])}function w3(e,t,n){let i=this.cache,s=t.length,r=Xd(n,s);Ze(i,r)||(e.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||J1,r[a])}function C3(e,t,n){let i=this.cache,s=t.length,r=Xd(n,s);Ze(i,r)||(e.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||Q1,r[a])}function R3(e,t,n){let i=this.cache,s=t.length,r=Xd(n,s);Ze(i,r)||(e.uniform1iv(this.addr,r),Ke(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||j1,r[a])}function D3(e){switch(e){case 5126:return h3;case 35664:return f3;case 35665:return d3;case 35666:return p3;case 35674:return m3;case 35675:return g3;case 35676:return _3;case 5124:case 35670:return v3;case 35667:case 35671:return y3;case 35668:case 35672:return x3;case 35669:case 35673:return S3;case 5125:return b3;case 36294:return M3;case 36295:return E3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return A3;case 35679:case 36299:case 36307:return w3;case 35680:case 36300:case 36308:case 36293:return C3;case 36289:case 36303:case 36311:case 36292:return R3}}var p_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=u3(n.type)}},m_=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D3(n.type)}},g_=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,n[o.id],i)}}},d_=/(\w+)(\])?(\[|\.)?/g;function B1(e,t){e.seq.push(t),e.map[t.id]=t}function U3(e,t,n){let i=e.name,s=i.length;for(d_.lastIndex=0;;){let r=d_.exec(i),a=d_.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){B1(n,c===void 0?new p_(o,e,t):new m_(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new g_(o),B1(n,d)),n=d}}}var il=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(n,s),a=t.getUniformLocation(n,r.name);U3(r,a,this)}}setValue(t,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in n&&i.push(a)}return i}};function z1(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var L3=37297,N3=0;function O3(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var F1=new Bt;function I3(e){Jt._getMatrix(F1,Jt.workingColorSpace,e);let t=`mat3( ${F1.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Uc:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function V1(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+O3(e.getShaderSource(t),o)}else return r}function P3(e,t){let n=I3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function B3(e,t){let n;switch(t){case i1:n="Linear";break;case s1:n="Reinhard";break;case r1:n="Cineon";break;case a1:n="ACESFilmic";break;case l1:n="AgX";break;case c1:n="Neutral";break;case o1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Gd=new O;function z3(){Jt.getLuminanceCoefficients(Gd);let e=Gd.x.toFixed(4),t=Gd.y.toFixed(4),n=Gd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ou).join(`
`)}function V3(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function H3(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=e.getActiveAttrib(t,s),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function ou(e){return e!==""}function H1(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G1(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var G3=/^[ \t]*#include +<([\w\d./]+)>/gm;function __(e){return e.replace(G3,W3)}var k3=new Map;function W3(e,t){let n=Gt[t];if(n===void 0){let i=k3.get(t);if(i!==void 0)n=Gt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return __(n)}var X3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k1(e){return e.replace(X3,q3)}function q3(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function W1(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y3(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===F0?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===PM?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Ki&&(t="SHADOWMAP_TYPE_VSM"),t}function Z3(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ha:case fa:t="ENVMAP_TYPE_CUBE";break;case tu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function K3(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case fa:t="ENVMAP_MODE_REFRACTION";break}return t}function j3(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case nd:t="ENVMAP_BLENDING_MULTIPLY";break;case e1:t="ENVMAP_BLENDING_MIX";break;case n1:t="ENVMAP_BLENDING_ADD";break}return t}function J3(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Q3(e,t,n,i){let s=e.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=Y3(n),c=Z3(n),h=K3(n),d=j3(n),f=J3(n),p=F3(n),y=V3(r),x=s.createProgram(),m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ou).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ou).join(`
`),u.length>0&&(u+=`
`)):(m=[W1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ou).join(`
`),u=[W1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Us?"#define TONE_MAPPING":"",n.toneMapping!==Us?Gt.tonemapping_pars_fragment:"",n.toneMapping!==Us?B3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,P3("linearToOutputTexel",n.outputColorSpace),z3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ou).join(`
`)),a=__(a),a=H1(a,n),a=G1(a,n),o=__(o),o=H1(o,n),o=G1(o,n),a=k1(a),o=k1(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let _=g+m+a,v=g+u+o,A=z1(s,s.VERTEX_SHADER,_),w=z1(s,s.FRAGMENT_SHADER,v);s.attachShader(x,A),s.attachShader(x,w),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(U){if(e.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(w)||"",K=F.trim(),X=G.trim(),tt=q.trim(),V=!0,it=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,x,A,w);else{let ct=V1(s,A,"vertex"),mt=V1(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+K+`
`+ct+`
`+mt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(X===""||tt==="")&&(it=!1);it&&(U.diagnostics={runnable:V,programLog:K,vertexShader:{log:X,prefix:m},fragmentShader:{log:tt,prefix:u}})}s.deleteShader(A),s.deleteShader(w),D=new il(s,x),E=H3(s,x)}let D;this.getUniforms=function(){return D===void 0&&T(this),D};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,L3)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N3++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}var $3=0,v_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new y_(t),n.set(t,i)),i}},y_=class{constructor(t){this.id=$3++,this.code=t,this.usedTimes=0}};function tU(e,t,n,i,s,r,a){let o=new Yo,l=new v_,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,U,F,G){let q=F.fog,K=G.geometry,X=E.isMeshStandardMaterial?F.environment:null,tt=(E.isMeshStandardMaterial?n:t).get(E.envMap||X),V=tt&&tt.mapping===tu?tt.image.height:null,it=y[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));let ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=ct!==void 0?ct.length:0,Lt=0;K.morphAttributes.position!==void 0&&(Lt=1),K.morphAttributes.normal!==void 0&&(Lt=2),K.morphAttributes.color!==void 0&&(Lt=3);let ie,ce,Kt,W;if(it){let ne=An[it];ie=ne.vertexShader,ce=ne.fragmentShader}else ie=E.vertexShader,ce=E.fragmentShader,l.update(E),Kt=l.getVertexShaderID(E),W=l.getFragmentShaderID(E);let j=e.getRenderTarget(),ht=e.state.buffers.depth.getReversed(),Et=G.isInstancedMesh===!0,_t=G.isBatchedMesh===!0,kt=!!E.map,ve=!!E.matcap,R=!!tt,be=!!E.aoMap,It=!!E.lightMap,Dt=!!E.bumpMap,vt=!!E.normalMap,Me=!!E.displacementMap,yt=!!E.emissiveMap,Vt=!!E.metalnessMap,je=!!E.roughnessMap,Be=E.anisotropy>0,C=E.clearcoat>0,S=E.dispersion>0,P=E.iridescence>0,k=E.sheen>0,J=E.transmission>0,H=Be&&!!E.anisotropyMap,Mt=C&&!!E.clearcoatMap,st=C&&!!E.clearcoatNormalMap,xt=C&&!!E.clearcoatRoughnessMap,St=P&&!!E.iridescenceMap,et=P&&!!E.iridescenceThicknessMap,ut=k&&!!E.sheenColorMap,Ct=k&&!!E.sheenRoughnessMap,bt=!!E.specularMap,ot=!!E.specularColorMap,zt=!!E.specularIntensityMap,L=J&&!!E.transmissionMap,nt=J&&!!E.thicknessMap,at=!!E.gradientMap,dt=!!E.alphaMap,Q=E.alphaTest>0,Z=!!E.alphaHash,gt=!!E.extensions,Nt=Us;E.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=e.toneMapping);let ge={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:ce,defines:E.defines,customVertexShaderID:Kt,customFragmentShaderID:W,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:_t,batchingColor:_t&&G._colorsTexture!==null,instancing:Et,instancingColor:Et&&G.instanceColor!==null,instancingMorph:Et&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:oa,alphaToCoverage:!!E.alphaToCoverage,map:kt,matcap:ve,envMap:R,envMapMode:R&&tt.mapping,envMapCubeUVHeight:V,aoMap:be,lightMap:It,bumpMap:Dt,normalMap:vt,displacementMap:f&&Me,emissiveMap:yt,normalMapObjectSpace:vt&&E.normalMapType===d1,normalMapTangentSpace:vt&&E.normalMapType===Q0,metalnessMap:Vt,roughnessMap:je,anisotropy:Be,anisotropyMap:H,clearcoat:C,clearcoatMap:Mt,clearcoatNormalMap:st,clearcoatRoughnessMap:xt,dispersion:S,iridescence:P,iridescenceMap:St,iridescenceThicknessMap:et,sheen:k,sheenColorMap:ut,sheenRoughnessMap:Ct,specularMap:bt,specularColorMap:ot,specularIntensityMap:zt,transmission:J,transmissionMap:L,thicknessMap:nt,gradientMap:at,opaque:E.transparent===!1&&E.blending===ra&&E.alphaToCoverage===!1,alphaMap:dt,alphaTest:Q,alphaHash:Z,combine:E.combine,mapUv:kt&&x(E.map.channel),aoMapUv:be&&x(E.aoMap.channel),lightMapUv:It&&x(E.lightMap.channel),bumpMapUv:Dt&&x(E.bumpMap.channel),normalMapUv:vt&&x(E.normalMap.channel),displacementMapUv:Me&&x(E.displacementMap.channel),emissiveMapUv:yt&&x(E.emissiveMap.channel),metalnessMapUv:Vt&&x(E.metalnessMap.channel),roughnessMapUv:je&&x(E.roughnessMap.channel),anisotropyMapUv:H&&x(E.anisotropyMap.channel),clearcoatMapUv:Mt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:et&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&x(E.sheenRoughnessMap.channel),specularMapUv:bt&&x(E.specularMap.channel),specularColorMapUv:ot&&x(E.specularColorMap.channel),specularIntensityMapUv:zt&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:nt&&x(E.thicknessMap.channel),alphaMapUv:dt&&x(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(vt||Be),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(kt||dt),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Lt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nt,decodeVideoTexture:kt&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===oe,decodeVideoTextureEmissive:yt&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===oe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mi,flipSided:E.side===Tn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:gt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&E.extensions.multiDraw===!0||_t)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function u(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)M.push(U),M.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(g(M,E),_(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function g(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function _(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){let M=y[E.type],U;if(M){let F=An[M];U=au.clone(F.uniforms)}else U=E.uniforms;return U}function A(E,M){let U;for(let F=0,G=h.length;F<G;F++){let q=h[F];if(q.cacheKey===M){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Q3(e,M,E,r),h.push(U)),U}function w(E){if(--E.usedTimes===0){let M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function T(E){l.remove(E)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:D}}function eU(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,l){e.get(a)[o]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function nU(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function X1(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function q1(){let e=[],t=0,n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(d,f,p,y,x,m){let u=e[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:x,group:m},e[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=y,u.renderOrder=d.renderOrder,u.z=x,u.group=m),t++,u}function o(d,f,p,y,x,m){let u=a(d,f,p,y,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):n.push(u)}function l(d,f,p,y,x,m){let u=a(d,f,p,y,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):n.unshift(u)}function c(d,f){n.length>1&&n.sort(d||nU),i.length>1&&i.sort(f||X1),s.length>1&&s.sort(f||X1)}function h(){for(let d=t,f=e.length;d<f;d++){let p=e[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function iU(){let e=new WeakMap;function t(i,s){let r=e.get(i),a;return r===void 0?(a=new q1,e.set(i,[a])):s>=r.length?(a=new q1,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function sU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new O,color:new Zt};break;case"SpotLight":n={position:new O,direction:new O,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":n={color:new Zt,position:new O,halfWidth:new O,halfHeight:new O};break}return e[t.id]=n,n}}}function rU(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var aU=0;function oU(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lU(e){let t=new sU,n=rU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let s=new O,r=new Ce,a=new Ce;function o(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,y=0,x=0,m=0,u=0,g=0,_=0,v=0,A=0,w=0,T=0;c.sort(oU);for(let E=0,M=c.length;E<M;E++){let U=c[E],F=U.color,G=U.intensity,q=U.distance,K=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=F.r*G,d+=F.g*G,f+=F.b*G;else if(U.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(U.sh.coefficients[X],G);T++}else if(U.isDirectionalLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let tt=U.shadow,V=n.get(U);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=U.shadow.matrix,g++}i.directional[p]=X,p++}else if(U.isSpotLight){let X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(F).multiplyScalar(G),X.distance=q,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,i.spot[x]=X;let tt=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,tt.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[x]=tt.matrix,U.castShadow){let V=n.get(U);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=K,v++}x++}else if(U.isRectAreaLight){let X=t.get(U);X.color.copy(F).multiplyScalar(G),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=X,m++}else if(U.isPointLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let tt=U.shadow,V=n.get(U);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,i.pointShadow[y]=V,i.pointShadowMap[y]=K,i.pointShadowMatrix[y]=U.shadow.matrix,_++}i.point[y]=X,y++}else if(U.isHemisphereLight){let X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(G),X.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[u]=X,u++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==p||D.pointLength!==y||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==g||D.numPointShadows!==_||D.numSpotShadows!==v||D.numSpotMaps!==A||D.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=y,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,D.directionalLength=p,D.pointLength=y,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=g,D.numPointShadows=_,D.numSpotShadows=v,D.numSpotMaps=A,D.numLightProbes=T,i.version=aU++)}function l(c,h){let d=0,f=0,p=0,y=0,x=0,m=h.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){let _=c[u];if(_.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(_.isSpotLight){let v=i.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(_.isRectAreaLight){let v=i.rectArea[y];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=i.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function Y1(e){let t=new lU(e),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){t.setup(n)}function l(h){t.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cU(e){let t=new WeakMap;function n(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Y1(e),t.set(s,[o])):r>=a.length?(o=new Y1(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var uU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hU=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fU(e,t,n){let i=new Ko,s=new Ft,r=new Ft,a=new le,o=new Bf({depthPacking:f1}),l=new zf,c={},h=n.maxTextureSize,d={[Ci]:Tn,[Tn]:Ci,[mi]:mi},f=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:uU,fragmentShader:hU}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let y=new Yi;y.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new We(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=F0;let u=this.type;this.render=function(w,T,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),U=e.getActiveMipmapLevel(),F=e.state;F.setBlending(Ds),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let G=u!==Ki&&this.type===Ki,q=u===Ki&&this.type!==Ki;for(let K=0,X=w.length;K<X;K++){let tt=w[K],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||G===!0||q===!0){let mt=this.type!==Ki?{minFilter:pi,magFilter:pi}:{};V.map!==null&&V.map.dispose(),V.map=new Xi(s.x,s.y,mt),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();let ct=V.getViewportCount();for(let mt=0;mt<ct;mt++){let Lt=V.getViewport(mt);a.set(r.x*Lt.x,r.y*Lt.y,r.x*Lt.z,r.y*Lt.w),F.viewport(a),V.updateMatrices(tt,mt),i=V.getFrustum(),v(T,D,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===Ki&&g(V,D),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,e.setRenderTarget(E,M,U)};function g(w,T){let D=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xi(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(T,null,D,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(T,null,D,p,x,null)}function _(w,T,D,E){let M=null,U=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=D.isPointLight===!0?l:o,e.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let F=M.uuid,G=T.uuid,q=c[F];q===void 0&&(q={},c[F]=q);let K=q[G];K===void 0&&(K=M.clone(),q[G]=K,T.addEventListener("dispose",A)),M=K}if(M.visible=T.visible,M.wireframe=T.wireframe,E===Ki?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:d[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let F=e.properties.get(M);F.light=D}return M}function v(w,T,D,E,M){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Ki)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);let G=t.update(w),q=w.material;if(Array.isArray(q)){let K=G.groups;for(let X=0,tt=K.length;X<tt;X++){let V=K[X],it=q[V.materialIndex];if(it&&it.visible){let ct=_(w,it,E,M);w.onBeforeShadow(e,w,T,D,G,ct,V),e.renderBufferDirect(D,null,G,ct,w,V),w.onAfterShadow(e,w,T,D,G,ct,V)}}}else if(q.visible){let K=_(w,q,E,M);w.onBeforeShadow(e,w,T,D,G,K,null),e.renderBufferDirect(D,null,G,K,w,null),w.onAfterShadow(e,w,T,D,G,K,null)}}let F=w.children;for(let G=0,q=F.length;G<q;G++)v(F[G],T,D,E,M)}function A(w){w.target.removeEventListener("dispose",A);for(let D in c){let E=c[D],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}var dU={[Kf]:jf,[Jf]:td,[Qf]:ed,[aa]:$f,[jf]:Kf,[td]:Jf,[ed]:Qf,[$f]:aa};function pU(e,t){function n(){let L=!1,nt=new le,at=null,dt=new le(0,0,0,0);return{setMask:function(Q){at!==Q&&!L&&(e.colorMask(Q,Q,Q,Q),at=Q)},setLocked:function(Q){L=Q},setClear:function(Q,Z,gt,Nt,ge){ge===!0&&(Q*=Nt,Z*=Nt,gt*=Nt),nt.set(Q,Z,gt,Nt),dt.equals(nt)===!1&&(e.clearColor(Q,Z,gt,Nt),dt.copy(nt))},reset:function(){L=!1,at=null,dt.set(-1,0,0,0)}}}function i(){let L=!1,nt=!1,at=null,dt=null,Q=null;return{setReversed:function(Z){if(nt!==Z){let gt=t.get("EXT_clip_control");Z?gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.ZERO_TO_ONE_EXT):gt.clipControlEXT(gt.LOWER_LEFT_EXT,gt.NEGATIVE_ONE_TO_ONE_EXT),nt=Z;let Nt=Q;Q=null,this.setClear(Nt)}},getReversed:function(){return nt},setTest:function(Z){Z?j(e.DEPTH_TEST):ht(e.DEPTH_TEST)},setMask:function(Z){at!==Z&&!L&&(e.depthMask(Z),at=Z)},setFunc:function(Z){if(nt&&(Z=dU[Z]),dt!==Z){switch(Z){case Kf:e.depthFunc(e.NEVER);break;case jf:e.depthFunc(e.ALWAYS);break;case Jf:e.depthFunc(e.LESS);break;case aa:e.depthFunc(e.LEQUAL);break;case Qf:e.depthFunc(e.EQUAL);break;case $f:e.depthFunc(e.GEQUAL);break;case td:e.depthFunc(e.GREATER);break;case ed:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}dt=Z}},setLocked:function(Z){L=Z},setClear:function(Z){Q!==Z&&(nt&&(Z=1-Z),e.clearDepth(Z),Q=Z)},reset:function(){L=!1,at=null,dt=null,Q=null,nt=!1}}}function s(){let L=!1,nt=null,at=null,dt=null,Q=null,Z=null,gt=null,Nt=null,ge=null;return{setTest:function(ne){L||(ne?j(e.STENCIL_TEST):ht(e.STENCIL_TEST))},setMask:function(ne){nt!==ne&&!L&&(e.stencilMask(ne),nt=ne)},setFunc:function(ne,ts,Ni){(at!==ne||dt!==ts||Q!==Ni)&&(e.stencilFunc(ne,ts,Ni),at=ne,dt=ts,Q=Ni)},setOp:function(ne,ts,Ni){(Z!==ne||gt!==ts||Nt!==Ni)&&(e.stencilOp(ne,ts,Ni),Z=ne,gt=ts,Nt=Ni)},setLocked:function(ne){L=ne},setClear:function(ne){ge!==ne&&(e.clearStencil(ne),ge=ne)},reset:function(){L=!1,nt=null,at=null,dt=null,Q=null,Z=null,gt=null,Nt=null,ge=null}}}let r=new n,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,p=[],y=null,x=!1,m=null,u=null,g=null,_=null,v=null,A=null,w=null,T=new Zt(0,0,0),D=0,E=!1,M=null,U=null,F=null,G=null,q=null,K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,tt=0,V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=tt>=2);let it=null,ct={},mt=e.getParameter(e.SCISSOR_BOX),Lt=e.getParameter(e.VIEWPORT),ie=new le().fromArray(mt),ce=new le().fromArray(Lt);function Kt(L,nt,at,dt){let Q=new Uint8Array(4),Z=e.createTexture();e.bindTexture(L,Z),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let gt=0;gt<at;gt++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,dt,0,e.RGBA,e.UNSIGNED_BYTE,Q):e.texImage2D(nt+gt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Q);return Z}let W={};W[e.TEXTURE_2D]=Kt(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=Kt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=Kt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=Kt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(e.DEPTH_TEST),a.setFunc(aa),Dt(!1),vt(z0),j(e.CULL_FACE),be(Ds);function j(L){h[L]!==!0&&(e.enable(L),h[L]=!0)}function ht(L){h[L]!==!1&&(e.disable(L),h[L]=!1)}function Et(L,nt){return d[L]!==nt?(e.bindFramebuffer(L,nt),d[L]=nt,L===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=nt),L===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function _t(L,nt){let at=p,dt=!1;if(L){at=f.get(nt),at===void 0&&(at=[],f.set(nt,at));let Q=L.textures;if(at.length!==Q.length||at[0]!==e.COLOR_ATTACHMENT0){for(let Z=0,gt=Q.length;Z<gt;Z++)at[Z]=e.COLOR_ATTACHMENT0+Z;at.length=Q.length,dt=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,dt=!0);dt&&e.drawBuffers(at)}function kt(L){return y!==L?(e.useProgram(L),y=L,!0):!1}let ve={[vr]:e.FUNC_ADD,[zM]:e.FUNC_SUBTRACT,[FM]:e.FUNC_REVERSE_SUBTRACT};ve[VM]=e.MIN,ve[HM]=e.MAX;let R={[GM]:e.ZERO,[kM]:e.ONE,[WM]:e.SRC_COLOR,[Tf]:e.SRC_ALPHA,[jM]:e.SRC_ALPHA_SATURATE,[ZM]:e.DST_COLOR,[qM]:e.DST_ALPHA,[XM]:e.ONE_MINUS_SRC_COLOR,[Af]:e.ONE_MINUS_SRC_ALPHA,[KM]:e.ONE_MINUS_DST_COLOR,[YM]:e.ONE_MINUS_DST_ALPHA,[JM]:e.CONSTANT_COLOR,[QM]:e.ONE_MINUS_CONSTANT_COLOR,[$M]:e.CONSTANT_ALPHA,[t1]:e.ONE_MINUS_CONSTANT_ALPHA};function be(L,nt,at,dt,Q,Z,gt,Nt,ge,ne){if(L===Ds){x===!0&&(ht(e.BLEND),x=!1);return}if(x===!1&&(j(e.BLEND),x=!0),L!==BM){if(L!==m||ne!==E){if((u!==vr||v!==vr)&&(e.blendEquation(e.FUNC_ADD),u=vr,v=vr),ne)switch(L){case ra:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case V0:e.blendFunc(e.ONE,e.ONE);break;case H0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case G0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case V0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case H0:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case G0:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}g=null,_=null,A=null,w=null,T.set(0,0,0),D=0,m=L,E=ne}return}Q=Q||nt,Z=Z||at,gt=gt||dt,(nt!==u||Q!==v)&&(e.blendEquationSeparate(ve[nt],ve[Q]),u=nt,v=Q),(at!==g||dt!==_||Z!==A||gt!==w)&&(e.blendFuncSeparate(R[at],R[dt],R[Z],R[gt]),g=at,_=dt,A=Z,w=gt),(Nt.equals(T)===!1||ge!==D)&&(e.blendColor(Nt.r,Nt.g,Nt.b,ge),T.copy(Nt),D=ge),m=L,E=!1}function It(L,nt){L.side===mi?ht(e.CULL_FACE):j(e.CULL_FACE);let at=L.side===Tn;nt&&(at=!at),Dt(at),L.blending===ra&&L.transparent===!1?be(Ds):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let dt=L.stencilWrite;o.setTest(dt),dt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?j(e.SAMPLE_ALPHA_TO_COVERAGE):ht(e.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(L){M!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),M=L)}function vt(L){L!==OM?(j(e.CULL_FACE),L!==U&&(L===z0?e.cullFace(e.BACK):L===IM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ht(e.CULL_FACE),U=L}function Me(L){L!==F&&(X&&e.lineWidth(L),F=L)}function yt(L,nt,at){L?(j(e.POLYGON_OFFSET_FILL),(G!==nt||q!==at)&&(e.polygonOffset(nt,at),G=nt,q=at)):ht(e.POLYGON_OFFSET_FILL)}function Vt(L){L?j(e.SCISSOR_TEST):ht(e.SCISSOR_TEST)}function je(L){L===void 0&&(L=e.TEXTURE0+K-1),it!==L&&(e.activeTexture(L),it=L)}function Be(L,nt,at){at===void 0&&(it===null?at=e.TEXTURE0+K-1:at=it);let dt=ct[at];dt===void 0&&(dt={type:void 0,texture:void 0},ct[at]=dt),(dt.type!==L||dt.texture!==nt)&&(it!==at&&(e.activeTexture(at),it=at),e.bindTexture(L,nt||W[L]),dt.type=L,dt.texture=nt)}function C(){let L=ct[it];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{e.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{e.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{e.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{e.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{e.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{e.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{e.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function St(){try{e.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{e.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(L){ie.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function Ct(L){ce.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),ce.copy(L))}function bt(L,nt){let at=c.get(nt);at===void 0&&(at=new WeakMap,c.set(nt,at));let dt=at.get(L);dt===void 0&&(dt=e.getUniformBlockIndex(nt,L.name),at.set(L,dt))}function ot(L,nt){let dt=c.get(nt).get(L);l.get(nt)!==dt&&(e.uniformBlockBinding(nt,dt,L.__bindingPointIndex),l.set(nt,dt))}function zt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},it=null,ct={},d={},f=new WeakMap,p=[],y=null,x=!1,m=null,u=null,g=null,_=null,v=null,A=null,w=null,T=new Zt(0,0,0),D=0,E=!1,M=null,U=null,F=null,G=null,q=null,ie.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ht,bindFramebuffer:Et,drawBuffers:_t,useProgram:kt,setBlending:be,setMaterial:It,setFlipSided:Dt,setCullFace:vt,setLineWidth:Me,setPolygonOffset:yt,setScissorTest:Vt,activeTexture:je,bindTexture:Be,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:St,texImage3D:et,updateUBOMapping:bt,uniformBlockBinding:ot,texStorage2D:st,texStorage3D:xt,texSubImage2D:k,texSubImage3D:J,compressedTexSubImage2D:H,compressedTexSubImage3D:Mt,scissor:ut,viewport:Ct,reset:zt}}function mU(e,t,n,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,S){return p?new OffscreenCanvas(C,S):Nc("canvas")}function x(C,S,P){let k=1,J=Be(C);if((J.width>P||J.height>P)&&(k=P/Math.max(J.width,J.height)),k<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let H=Math.floor(k*J.width),Mt=Math.floor(k*J.height);d===void 0&&(d=y(H,Mt));let st=S?y(H,Mt):d;return st.width=H,st.height=Mt,st.getContext("2d").drawImage(C,0,0,H,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+H+"x"+Mt+")."),st}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function u(C){e.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function _(C,S,P,k,J=!1){if(C!==null){if(e[C]!==void 0)return e[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let H=S;if(S===e.RED&&(P===e.FLOAT&&(H=e.R32F),P===e.HALF_FLOAT&&(H=e.R16F),P===e.UNSIGNED_BYTE&&(H=e.R8)),S===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(H=e.R8UI),P===e.UNSIGNED_SHORT&&(H=e.R16UI),P===e.UNSIGNED_INT&&(H=e.R32UI),P===e.BYTE&&(H=e.R8I),P===e.SHORT&&(H=e.R16I),P===e.INT&&(H=e.R32I)),S===e.RG&&(P===e.FLOAT&&(H=e.RG32F),P===e.HALF_FLOAT&&(H=e.RG16F),P===e.UNSIGNED_BYTE&&(H=e.RG8)),S===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(H=e.RG8UI),P===e.UNSIGNED_SHORT&&(H=e.RG16UI),P===e.UNSIGNED_INT&&(H=e.RG32UI),P===e.BYTE&&(H=e.RG8I),P===e.SHORT&&(H=e.RG16I),P===e.INT&&(H=e.RG32I)),S===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(H=e.RGB8UI),P===e.UNSIGNED_SHORT&&(H=e.RGB16UI),P===e.UNSIGNED_INT&&(H=e.RGB32UI),P===e.BYTE&&(H=e.RGB8I),P===e.SHORT&&(H=e.RGB16I),P===e.INT&&(H=e.RGB32I)),S===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(H=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(H=e.RGBA16UI),P===e.UNSIGNED_INT&&(H=e.RGBA32UI),P===e.BYTE&&(H=e.RGBA8I),P===e.SHORT&&(H=e.RGBA16I),P===e.INT&&(H=e.RGBA32I)),S===e.RGB&&(P===e.UNSIGNED_INT_5_9_9_9_REV&&(H=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(H=e.R11F_G11F_B10F)),S===e.RGBA){let Mt=J?Uc:Jt.getTransfer(k);P===e.FLOAT&&(H=e.RGBA32F),P===e.HALF_FLOAT&&(H=e.RGBA16F),P===e.UNSIGNED_BYTE&&(H=Mt===oe?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT_4_4_4_4&&(H=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(H=e.RGB5_A1)}return(H===e.R16F||H===e.R32F||H===e.RG16F||H===e.RG32F||H===e.RGBA16F||H===e.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function v(C,S){let P;return C?S===null||S===Er||S===$o?P=e.DEPTH24_STENCIL8:S===ji?P=e.DEPTH32F_STENCIL8:S===Jo&&(P=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Er||S===$o?P=e.DEPTH_COMPONENT24:S===ji?P=e.DEPTH_COMPONENT32F:S===Jo&&(P=e.DEPTH_COMPONENT16),P}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==pi&&C.minFilter!==Ri?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function w(C){let S=C.target;S.removeEventListener("dispose",w),D(S),S.isVideoTexture&&h.delete(S)}function T(C){let S=C.target;S.removeEventListener("dispose",T),M(S)}function D(C){let S=i.get(C);if(S.__webglInit===void 0)return;let P=C.source,k=f.get(P);if(k){let J=k[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(C),Object.keys(k).length===0&&f.delete(P)}i.remove(C)}function E(C){let S=i.get(C);e.deleteTexture(S.__webglTexture);let P=C.source,k=f.get(P);delete k[S.__cacheKey],a.memory.textures--}function M(C){let S=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(S.__webglFramebuffer[k]))for(let J=0;J<S.__webglFramebuffer[k].length;J++)e.deleteFramebuffer(S.__webglFramebuffer[k][J]);else e.deleteFramebuffer(S.__webglFramebuffer[k]);S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer[k])}else{if(Array.isArray(S.__webglFramebuffer))for(let k=0;k<S.__webglFramebuffer.length;k++)e.deleteFramebuffer(S.__webglFramebuffer[k]);else e.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&e.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&e.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let k=0;k<S.__webglColorRenderbuffer.length;k++)S.__webglColorRenderbuffer[k]&&e.deleteRenderbuffer(S.__webglColorRenderbuffer[k]);S.__webglDepthRenderbuffer&&e.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let P=C.textures;for(let k=0,J=P.length;k<J;k++){let H=i.get(P[k]);H.__webglTexture&&(e.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(P[k])}i.remove(C)}let U=0;function F(){U=0}function G(){let C=U;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function q(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){let P=i.get(C);if(C.isVideoTexture&&Vt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&P.__version!==C.version){let k=C.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(P,C,S);return}}else C.isExternalTexture&&(P.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+S)}function X(C,S){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){W(P,C,S);return}n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+S)}function tt(C,S){let P=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&P.__version!==C.version){W(P,C,S);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+S)}function V(C,S){let P=i.get(C);if(C.version>0&&P.__version!==C.version){j(P,C,S);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+S)}let it={[wf]:e.REPEAT,[_r]:e.CLAMP_TO_EDGE,[Cf]:e.MIRRORED_REPEAT},ct={[pi]:e.NEAREST,[u1]:e.NEAREST_MIPMAP_NEAREST,[eu]:e.NEAREST_MIPMAP_LINEAR,[Ri]:e.LINEAR,[rd]:e.LINEAR_MIPMAP_NEAREST,[Mr]:e.LINEAR_MIPMAP_LINEAR},mt={[p1]:e.NEVER,[x1]:e.ALWAYS,[m1]:e.LESS,[$0]:e.LEQUAL,[g1]:e.EQUAL,[y1]:e.GEQUAL,[_1]:e.GREATER,[v1]:e.NOTEQUAL};function Lt(C,S){if(S.type===ji&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Ri||S.magFilter===rd||S.magFilter===eu||S.magFilter===Mr||S.minFilter===Ri||S.minFilter===rd||S.minFilter===eu||S.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,it[S.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,it[S.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,it[S.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,ct[S.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===pi||S.minFilter!==eu&&S.minFilter!==Mr||S.type===ji&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ie(C,S){let P=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",w));let k=S.source,J=f.get(k);J===void 0&&(J={},f.set(k,J));let H=q(S);if(H!==C.__cacheKey){J[H]===void 0&&(J[H]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,P=!0),J[H].usedTimes++;let Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&E(S)),C.__cacheKey=H,C.__webglTexture=J[H].texture}return P}function ce(C,S,P){return Math.floor(Math.floor(C/P)/S)}function Kt(C,S,P,k){let H=C.updateRanges;if(H.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,S.width,S.height,P,k,S.data);else{H.sort((et,ut)=>et.start-ut.start);let Mt=0;for(let et=1;et<H.length;et++){let ut=H[Mt],Ct=H[et],bt=ut.start+ut.count,ot=ce(Ct.start,S.width,4),zt=ce(ut.start,S.width,4);Ct.start<=bt+1&&ot===zt&&ce(Ct.start+Ct.count-1,S.width,4)===ot?ut.count=Math.max(ut.count,Ct.start+Ct.count-ut.start):(++Mt,H[Mt]=Ct)}H.length=Mt+1;let st=e.getParameter(e.UNPACK_ROW_LENGTH),xt=e.getParameter(e.UNPACK_SKIP_PIXELS),St=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,S.width);for(let et=0,ut=H.length;et<ut;et++){let Ct=H[et],bt=Math.floor(Ct.start/4),ot=Math.ceil(Ct.count/4),zt=bt%S.width,L=Math.floor(bt/S.width),nt=ot,at=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(e.UNPACK_SKIP_ROWS,L),n.texSubImage2D(e.TEXTURE_2D,0,zt,L,nt,at,P,k,S.data)}C.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,st),e.pixelStorei(e.UNPACK_SKIP_PIXELS,xt),e.pixelStorei(e.UNPACK_SKIP_ROWS,St)}}function W(C,S,P){let k=e.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(k=e.TEXTURE_2D_ARRAY),S.isData3DTexture&&(k=e.TEXTURE_3D);let J=ie(C,S),H=S.source;n.bindTexture(k,C.__webglTexture,e.TEXTURE0+P);let Mt=i.get(H);if(H.version!==Mt.__version||J===!0){n.activeTexture(e.TEXTURE0+P);let st=Jt.getPrimaries(Jt.workingColorSpace),xt=S.colorSpace===Ls?null:Jt.getPrimaries(S.colorSpace),St=S.colorSpace===Ls||st===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let et=x(S.image,!1,s.maxTextureSize);et=je(S,et);let ut=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),bt=_(S.internalFormat,ut,Ct,S.colorSpace,S.isVideoTexture);Lt(k,S);let ot,zt=S.mipmaps,L=S.isVideoTexture!==!0,nt=Mt.__version===void 0||J===!0,at=H.dataReady,dt=A(S,et);if(S.isDepthTexture)bt=v(S.format===tl,S.type),nt&&(L?n.texStorage2D(e.TEXTURE_2D,1,bt,et.width,et.height):n.texImage2D(e.TEXTURE_2D,0,bt,et.width,et.height,0,ut,Ct,null));else if(S.isDataTexture)if(zt.length>0){L&&nt&&n.texStorage2D(e.TEXTURE_2D,dt,bt,zt[0].width,zt[0].height);for(let Q=0,Z=zt.length;Q<Z;Q++)ot=zt[Q],L?at&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ot.width,ot.height,ut,Ct,ot.data):n.texImage2D(e.TEXTURE_2D,Q,bt,ot.width,ot.height,0,ut,Ct,ot.data);S.generateMipmaps=!1}else L?(nt&&n.texStorage2D(e.TEXTURE_2D,dt,bt,et.width,et.height),at&&Kt(S,et,ut,Ct)):n.texImage2D(e.TEXTURE_2D,0,bt,et.width,et.height,0,ut,Ct,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,bt,zt[0].width,zt[0].height,et.depth);for(let Q=0,Z=zt.length;Q<Z;Q++)if(ot=zt[Q],S.format!==gi)if(ut!==null)if(L){if(at)if(S.layerUpdates.size>0){let gt=o_(ot.width,ot.height,S.format,S.type);for(let Nt of S.layerUpdates){let ge=ot.data.subarray(Nt*gt/ot.data.BYTES_PER_ELEMENT,(Nt+1)*gt/ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,Nt,ot.width,ot.height,1,ut,ge)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,et.depth,ut,ot.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Q,bt,ot.width,ot.height,et.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?at&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,et.depth,ut,Ct,ot.data):n.texImage3D(e.TEXTURE_2D_ARRAY,Q,bt,ot.width,ot.height,et.depth,0,ut,Ct,ot.data)}else{L&&nt&&n.texStorage2D(e.TEXTURE_2D,dt,bt,zt[0].width,zt[0].height);for(let Q=0,Z=zt.length;Q<Z;Q++)ot=zt[Q],S.format!==gi?ut!==null?L?at&&n.compressedTexSubImage2D(e.TEXTURE_2D,Q,0,0,ot.width,ot.height,ut,ot.data):n.compressedTexImage2D(e.TEXTURE_2D,Q,bt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?at&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ot.width,ot.height,ut,Ct,ot.data):n.texImage2D(e.TEXTURE_2D,Q,bt,ot.width,ot.height,0,ut,Ct,ot.data)}else if(S.isDataArrayTexture)if(L){if(nt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,dt,bt,et.width,et.height,et.depth),at)if(S.layerUpdates.size>0){let Q=o_(et.width,et.height,S.format,S.type);for(let Z of S.layerUpdates){let gt=et.data.subarray(Z*Q/et.data.BYTES_PER_ELEMENT,(Z+1)*Q/et.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,ut,Ct,gt)}S.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,bt,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(S.isData3DTexture)L?(nt&&n.texStorage3D(e.TEXTURE_3D,dt,bt,et.width,et.height,et.depth),at&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,ut,Ct,et.data)):n.texImage3D(e.TEXTURE_3D,0,bt,et.width,et.height,et.depth,0,ut,Ct,et.data);else if(S.isFramebufferTexture){if(nt)if(L)n.texStorage2D(e.TEXTURE_2D,dt,bt,et.width,et.height);else{let Q=et.width,Z=et.height;for(let gt=0;gt<dt;gt++)n.texImage2D(e.TEXTURE_2D,gt,bt,Q,Z,0,ut,Ct,null),Q>>=1,Z>>=1}}else if(zt.length>0){if(L&&nt){let Q=Be(zt[0]);n.texStorage2D(e.TEXTURE_2D,dt,bt,Q.width,Q.height)}for(let Q=0,Z=zt.length;Q<Z;Q++)ot=zt[Q],L?at&&n.texSubImage2D(e.TEXTURE_2D,Q,0,0,ut,Ct,ot):n.texImage2D(e.TEXTURE_2D,Q,bt,ut,Ct,ot);S.generateMipmaps=!1}else if(L){if(nt){let Q=Be(et);n.texStorage2D(e.TEXTURE_2D,dt,bt,Q.width,Q.height)}at&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ut,Ct,et)}else n.texImage2D(e.TEXTURE_2D,0,bt,ut,Ct,et);m(S)&&u(k),Mt.__version=H.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function j(C,S,P){if(S.image.length!==6)return;let k=ie(C,S),J=S.source;n.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+P);let H=i.get(J);if(J.version!==H.__version||k===!0){n.activeTexture(e.TEXTURE0+P);let Mt=Jt.getPrimaries(Jt.workingColorSpace),st=S.colorSpace===Ls?null:Jt.getPrimaries(S.colorSpace),xt=S.colorSpace===Ls||Mt===st?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let St=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,ut=[];for(let Z=0;Z<6;Z++)!St&&!et?ut[Z]=x(S.image[Z],!0,s.maxCubemapSize):ut[Z]=et?S.image[Z].image:S.image[Z],ut[Z]=je(S,ut[Z]);let Ct=ut[0],bt=r.convert(S.format,S.colorSpace),ot=r.convert(S.type),zt=_(S.internalFormat,bt,ot,S.colorSpace),L=S.isVideoTexture!==!0,nt=H.__version===void 0||k===!0,at=J.dataReady,dt=A(S,Ct);Lt(e.TEXTURE_CUBE_MAP,S);let Q;if(St){L&&nt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,zt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){Q=ut[Z].mipmaps;for(let gt=0;gt<Q.length;gt++){let Nt=Q[gt];S.format!==gi?bt!==null?L?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,Nt.width,Nt.height,bt,Nt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,zt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,0,0,Nt.width,Nt.height,bt,ot,Nt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt,zt,Nt.width,Nt.height,0,bt,ot,Nt.data)}}}else{if(Q=S.mipmaps,L&&nt){Q.length>0&&dt++;let Z=Be(ut[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,dt,zt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ut[Z].width,ut[Z].height,bt,ot,ut[Z].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,ut[Z].width,ut[Z].height,0,bt,ot,ut[Z].data);for(let gt=0;gt<Q.length;gt++){let ge=Q[gt].image[Z].image;L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,ge.width,ge.height,bt,ot,ge.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,zt,ge.width,ge.height,0,bt,ot,ge.data)}}else{L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,bt,ot,ut[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,zt,bt,ot,ut[Z]);for(let gt=0;gt<Q.length;gt++){let Nt=Q[gt];L?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,0,0,bt,ot,Nt.image[Z]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,gt+1,zt,bt,ot,Nt.image[Z])}}}m(S)&&u(e.TEXTURE_CUBE_MAP),H.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ht(C,S,P,k,J,H){let Mt=r.convert(P.format,P.colorSpace),st=r.convert(P.type),xt=_(P.internalFormat,Mt,st,P.colorSpace),St=i.get(S),et=i.get(P);if(et.__renderTarget=S,!St.__hasExternalTextures){let ut=Math.max(1,S.width>>H),Ct=Math.max(1,S.height>>H);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,H,xt,ut,Ct,S.depth,0,Mt,st,null):n.texImage2D(J,H,xt,ut,Ct,0,Mt,st,null)}n.bindFramebuffer(e.FRAMEBUFFER,C),yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,k,J,et.__webglTexture,0,Me(S)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,k,J,et.__webglTexture,H),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Et(C,S,P){if(e.bindRenderbuffer(e.RENDERBUFFER,C),S.depthBuffer){let k=S.depthTexture,J=k&&k.isDepthTexture?k.type:null,H=v(S.stencilBuffer,J),Mt=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,st=Me(S);yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st,H,S.width,S.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,st,H,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,H,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Mt,e.RENDERBUFFER,C)}else{let k=S.textures;for(let J=0;J<k.length;J++){let H=k[J],Mt=r.convert(H.format,H.colorSpace),st=r.convert(H.type),xt=_(H.internalFormat,Mt,st,H.colorSpace),St=Me(S);P&&yt(S)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,St,xt,S.width,S.height):yt(S)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,St,xt,S.width,S.height):e.renderbufferStorage(e.RENDERBUFFER,xt,S.width,S.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function _t(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let k=i.get(S.depthTexture);k.__renderTarget=S,(!k.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);let J=k.__webglTexture,H=Me(S);if(S.depthTexture.format===ko)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(S.depthTexture.format===tl)yt(S)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,H):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function kt(C){let S=i.get(C),P=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let k=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),k){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,k.removeEventListener("dispose",J)};k.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=k}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let k=C.texture.mipmaps;k&&k.length>0?_t(S.__webglFramebuffer[0],C):_t(S.__webglFramebuffer,C)}else if(P){S.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[k]),S.__webglDepthbuffer[k]===void 0)S.__webglDepthbuffer[k]=e.createRenderbuffer(),Et(S.__webglDepthbuffer[k],C,!1);else{let J=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=S.__webglDepthbuffer[k];e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,H)}}else{let k=C.texture.mipmaps;if(k&&k.length>0?n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=e.createRenderbuffer(),Et(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,H=S.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,H),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,H)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ve(C,S,P){let k=i.get(C);S!==void 0&&ht(k.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&kt(C)}function R(C){let S=C.texture,P=i.get(C),k=i.get(S);C.addEventListener("dispose",T);let J=C.textures,H=C.isWebGLCubeRenderTarget===!0,Mt=J.length>1;if(Mt||(k.__webglTexture===void 0&&(k.__webglTexture=e.createTexture()),k.__version=S.version,a.memory.textures++),H){P.__webglFramebuffer=[];for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer[st]=[];for(let xt=0;xt<S.mipmaps.length;xt++)P.__webglFramebuffer[st][xt]=e.createFramebuffer()}else P.__webglFramebuffer[st]=e.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){P.__webglFramebuffer=[];for(let st=0;st<S.mipmaps.length;st++)P.__webglFramebuffer[st]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(Mt)for(let st=0,xt=J.length;st<xt;st++){let St=i.get(J[st]);St.__webglTexture===void 0&&(St.__webglTexture=e.createTexture(),a.memory.textures++)}if(C.samples>0&&yt(C)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let st=0;st<J.length;st++){let xt=J[st];P.__webglColorRenderbuffer[st]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[st]);let St=r.convert(xt.format,xt.colorSpace),et=r.convert(xt.type),ut=_(xt.internalFormat,St,et,xt.colorSpace,C.isXRRenderTarget===!0),Ct=Me(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ct,ut,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+st,e.RENDERBUFFER,P.__webglColorRenderbuffer[st])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),Et(P.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(H){n.bindTexture(e.TEXTURE_CUBE_MAP,k.__webglTexture),Lt(e.TEXTURE_CUBE_MAP,S);for(let st=0;st<6;st++)if(S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)ht(P.__webglFramebuffer[st][xt],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,xt);else ht(P.__webglFramebuffer[st],C,S,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(S)&&u(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Mt){for(let st=0,xt=J.length;st<xt;st++){let St=J[st],et=i.get(St),ut=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ut=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ut,et.__webglTexture),Lt(ut,St),ht(P.__webglFramebuffer,C,St,e.COLOR_ATTACHMENT0+st,ut,0),m(St)&&u(ut)}n.unbindTexture()}else{let st=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(st,k.__webglTexture),Lt(st,S),S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)ht(P.__webglFramebuffer[xt],C,S,e.COLOR_ATTACHMENT0,st,xt);else ht(P.__webglFramebuffer,C,S,e.COLOR_ATTACHMENT0,st,0);m(S)&&u(st),n.unbindTexture()}C.depthBuffer&&kt(C)}function be(C){let S=C.textures;for(let P=0,k=S.length;P<k;P++){let J=S[P];if(m(J)){let H=g(C),Mt=i.get(J).__webglTexture;n.bindTexture(H,Mt),u(H),n.unbindTexture()}}}let It=[],Dt=[];function vt(C){if(C.samples>0){if(yt(C)===!1){let S=C.textures,P=C.width,k=C.height,J=e.COLOR_BUFFER_BIT,H=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Mt=i.get(C),st=S.length>1;if(st)for(let St=0;St<S.length;St++)n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let xt=C.texture.mipmaps;xt&&xt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),st){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);let et=i.get(S[St]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,et,0)}e.blitFramebuffer(0,0,P,k,0,0,P,k,J,e.NEAREST),l===!0&&(It.length=0,Dt.length=0,It.push(e.COLOR_ATTACHMENT0+St),C.depthBuffer&&C.resolveDepthBuffer===!1&&(It.push(H),Dt.push(H),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Dt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),st)for(let St=0;St<S.length;St++){n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.RENDERBUFFER,Mt.__webglColorRenderbuffer[St]);let et=i.get(S[St]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Mt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+St,e.TEXTURE_2D,et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[S])}}}function Me(C){return Math.min(s.maxSamples,C.samples)}function yt(C){let S=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Vt(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function je(C,S){let P=C.colorSpace,k=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||P!==oa&&P!==Ls&&(Jt.getTransfer(P)===oe?(k!==gi||J!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),S}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=X,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=ve,this.setupRenderTarget=R,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=yt}function gU(e,t){function n(i,s=Ls){let r,a=Jt.getTransfer(s);if(i===Li)return e.UNSIGNED_BYTE;if(i===od)return e.UNSIGNED_SHORT_4_4_4_4;if(i===ld)return e.UNSIGNED_SHORT_5_5_5_1;if(i===q0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Y0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===W0)return e.BYTE;if(i===X0)return e.SHORT;if(i===Jo)return e.UNSIGNED_SHORT;if(i===ad)return e.INT;if(i===Er)return e.UNSIGNED_INT;if(i===ji)return e.FLOAT;if(i===Qo)return e.HALF_FLOAT;if(i===Z0)return e.ALPHA;if(i===K0)return e.RGB;if(i===gi)return e.RGBA;if(i===ko)return e.DEPTH_COMPONENT;if(i===tl)return e.DEPTH_STENCIL;if(i===j0)return e.RED;if(i===cd)return e.RED_INTEGER;if(i===J0)return e.RG;if(i===ud)return e.RG_INTEGER;if(i===hd)return e.RGBA_INTEGER;if(i===nu||i===iu||i===su||i===ru)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===nu)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===iu)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===su)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ru)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===nu)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===iu)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===su)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ru)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===dd||i===pd||i===md)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fd)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dd)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pd)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===md)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gd||i===_d||i===vd)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gd||i===_d)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yd||i===xd||i===Sd||i===bd||i===Md||i===Ed||i===Td||i===Ad||i===wd||i===Cd||i===Rd||i===Dd||i===Ud||i===Ld)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Md)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Td)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ad)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ud)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ld)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nd||i===Od||i===Id)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Nd)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Id)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pd||i===Bd||i===zd||i===Fd)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Pd)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Bd)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zd)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fd)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var _U=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vU=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,x_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new kc(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new In({vertexShader:_U,fragmentShader:vU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new We(new la(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},S_=class extends Cs{constructor(t,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,y=null,x=typeof XRWebGLBinding<"u",m=new x_,u={},g=n.getContextAttributes(),_=null,v=null,A=[],w=[],T=new Ft,D=null,E=new mn;E.viewport=new le;let M=new mn;M.viewport=new le;let U=[E,M],F=new Zf,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=A[W];return j===void 0&&(j=new Zo,A[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=A[W];return j===void 0&&(j=new Zo,A[W]=j),j.getGripSpace()},this.getHand=function(W){let j=A[W];return j===void 0&&(j=new Zo,A[W]=j),j.getHandSpace()};function K(W){let j=w.indexOf(W.inputSource);if(j===-1)return;let ht=A[j];ht!==void 0&&(ht.update(W.inputSource,W.frame,c||a),ht.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",tt);for(let W=0;W<A.length;W++){let j=w[W];j!==null&&(w[W]=null,A[W].disconnect(j))}G=null,q=null,m.reset();for(let W in u)delete u[W];t.setRenderTarget(_),p=null,f=null,d=null,s=null,v=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(_=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",X),s.addEventListener("inputsourceschange",tt),g.xrCompatible!==!0&&await n.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Et=null,_t=null;g.depth&&(_t=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ht=g.stencil?tl:ko,Et=g.stencil?$o:Er);let kt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(kt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Xi(f.textureWidth,f.textureHeight,{format:gi,type:Li,depthTexture:new Gc(f.textureWidth,f.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ht={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,n,ht),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Xi(p.framebufferWidth,p.framebufferHeight,{format:gi,type:Li,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(W){for(let j=0;j<W.removed.length;j++){let ht=W.removed[j],Et=w.indexOf(ht);Et>=0&&(w[Et]=null,A[Et].disconnect(ht))}for(let j=0;j<W.added.length;j++){let ht=W.added[j],Et=w.indexOf(ht);if(Et===-1){for(let kt=0;kt<A.length;kt++)if(kt>=w.length){w.push(ht),Et=kt;break}else if(w[kt]===null){w[kt]=ht,Et=kt;break}if(Et===-1)break}let _t=A[Et];_t&&_t.connect(ht)}}let V=new O,it=new O;function ct(W,j,ht){V.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(ht.matrixWorld);let Et=V.distanceTo(it),_t=j.projectionMatrix.elements,kt=ht.projectionMatrix.elements,ve=_t[14]/(_t[10]-1),R=_t[14]/(_t[10]+1),be=(_t[9]+1)/_t[5],It=(_t[9]-1)/_t[5],Dt=(_t[8]-1)/_t[0],vt=(kt[8]+1)/kt[0],Me=ve*Dt,yt=ve*vt,Vt=Et/(-Dt+vt),je=Vt*-Dt;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(je),W.translateZ(Vt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),_t[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let Be=ve+Vt,C=R+Vt,S=Me-je,P=yt+(Et-je),k=be*R/C*Be,J=It*R/C*Be;W.projectionMatrix.makePerspective(S,P,k,J,Be,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function mt(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let j=W.near,ht=W.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),F.near=M.near=E.near=j,F.far=M.far=E.far=ht,(G!==F.near||q!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),G=F.near,q=F.far),F.layers.mask=W.layers.mask|6,E.layers.mask=F.layers.mask&3,M.layers.mask=F.layers.mask&5;let Et=W.parent,_t=F.cameras;mt(F,Et);for(let kt=0;kt<_t.length;kt++)mt(_t[kt],Et);_t.length===2?ct(F,E,M):F.projectionMatrix.copy(E.projectionMatrix),Lt(W,F,Et)};function Lt(W,j,ht){ht===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ht.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(W){return u[W]};let ie=null;function ce(W,j){if(h=j.getViewerPose(c||a),y=j,h!==null){let ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let Et=!1;ht.length!==F.cameras.length&&(F.cameras.length=0,Et=!0);for(let R=0;R<ht.length;R++){let be=ht[R],It=null;if(p!==null)It=p.getViewport(be);else{let vt=d.getViewSubImage(f,be);It=vt.viewport,R===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let Dt=U[R];Dt===void 0&&(Dt=new mn,Dt.layers.enable(R),Dt.viewport=new le,U[R]=Dt),Dt.matrix.fromArray(be.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(be.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(It.x,It.y,It.width,It.height),R===0&&(F.matrix.copy(Dt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Et===!0&&F.cameras.push(Dt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let R=d.getDepthInformation(ht[0]);R&&R.isValid&&R.texture&&m.init(R,s.renderState)}if(_t&&_t.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let R=0;R<ht.length;R++){let be=ht[R].camera;if(be){let It=u[be];It||(It=new kc,u[be]=It);let Dt=d.getCameraImage(be);It.sourceTexture=Dt}}}}for(let ht=0;ht<A.length;ht++){let Et=w[ht],_t=A[ht];Et!==null&&_t!==void 0&&_t.update(Et,j,c||a)}ie&&ie(W,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),y=null}let Kt=new Z1;Kt.setAnimationLoop(ce),this.setAnimationLoop=function(W){ie=W},this.dispose=function(){}}},ma=new Di,yU=new Ce;function xU(e,t){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,s_(e)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,g,_,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(r(m,u),y(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Tn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Tn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let g=t.get(u),_=g.envMap,v=g.envMapRotation;_&&(m.envMap.value=_,ma.copy(v),ma.x*=-1,ma.y*=-1,ma.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ma.y*=-1,ma.z*=-1),m.envMapRotation.value.setFromMatrix4(yU.makeRotationFromEuler(ma)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Tn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let g=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function SU(e,t,n,i){let s={},r={},a=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){let v=_.program;i.uniformBlockBinding(g,v)}function c(g,_){let v=s[g.id];v===void 0&&(y(g),v=h(g),s[g.id]=v,g.addEventListener("dispose",m));let A=_.program;i.updateUBOMapping(g,A);let w=t.render.frame;r[g.id]!==w&&(f(g),r[g.id]=w)}function h(g){let _=d();g.__bindingPointIndex=_;let v=e.createBuffer(),A=g.__size,w=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,_,v),v}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){let _=s[g.id],v=g.uniforms,A=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,_);for(let w=0,T=v.length;w<T;w++){let D=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,M=D.length;E<M;E++){let U=D[E];if(p(U,w,E,A)===!0){let F=U.__offset,G=Array.isArray(U.value)?U.value:[U.value],q=0;for(let K=0;K<G.length;K++){let X=G[K],tt=x(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,e.bufferSubData(e.UNIFORM_BUFFER,F+q,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,q),q+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,F,U.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(g,_,v,A){let w=g.value,T=_+"_"+v;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{let D=A[T];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return A[T]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function y(g){let _=g.uniforms,v=0,A=16;for(let T=0,D=_.length;T<D;T++){let E=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,U=E.length;M<U;M++){let F=E[M],G=Array.isArray(F.value)?F.value:[F.value];for(let q=0,K=G.length;q<K;q++){let X=G[q],tt=x(X),V=v%A,it=V%tt.boundary,ct=V+it;v+=it,ct!==0&&A-ct<tt.storage&&(v+=A-ct),F.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=tt.storage}}}let w=v%A;return w>0&&(v+=A-w),g.__size=v,g.__cache={},this}function x(g){let _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){let _=g.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),e.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function u(){for(let g in s)e.deleteBuffer(s[g]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Wd=class{constructor(t={}){let{canvas:n=S1(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;let y=new Uint32Array(4),x=new Int32Array(4),m=null,u=null,g=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,A=!1;this._outputColorSpace=Kn;let w=0,T=0,D=null,E=-1,M=null,U=new le,F=new le,G=null,q=new Zt(0),K=0,X=n.width,tt=n.height,V=1,it=null,ct=null,mt=new le(0,0,X,tt),Lt=new le(0,0,X,tt),ie=!1,ce=new Ko,Kt=!1,W=!1,j=new Ce,ht=new O,Et=new le,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function ve(){return D===null?V:1}let R=i;function be(b,N){return n.getContext(b,N)}try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"180"}`),n.addEventListener("webglcontextlost",at,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",Q,!1),R===null){let N="webgl2";if(R=be(N,b),R===null)throw be(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let It,Dt,vt,Me,yt,Vt,je,Be,C,S,P,k,J,H,Mt,st,xt,St,et,ut,Ct,bt,ot,zt;function L(){It=new FD(R),It.init(),bt=new gU(R,It),Dt=new LD(R,It,t,bt),vt=new pU(R,It),Dt.reversedDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),Me=new GD(R),yt=new eU,Vt=new mU(R,It,vt,yt,Dt,bt,Me),je=new OD(v),Be=new zD(v),C=new ZC(R),ot=new DD(R,C),S=new VD(R,C,Me,ot),P=new WD(R,S,C,Me),et=new kD(R,Dt,Vt),st=new ND(yt),k=new tU(v,je,Be,It,Dt,ot,st),J=new xU(v,yt),H=new iU,Mt=new cU(It),St=new RD(v,je,Be,vt,P,p,l),xt=new fU(v,P,Dt),zt=new SU(R,Me,Dt,vt),ut=new UD(R,It,Me),Ct=new HD(R,It,Me),Me.programs=k.programs,v.capabilities=Dt,v.extensions=It,v.properties=yt,v.renderLists=H,v.shadowMap=xt,v.state=vt,v.info=Me}L();let nt=new S_(v,R);this.xr=nt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let b=It.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=It.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(X,tt,!1))},this.getSize=function(b){return b.set(X,tt)},this.setSize=function(b,N,B=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,tt=N,n.width=Math.floor(b*V),n.height=Math.floor(N*V),B===!0&&(n.style.width=b+"px",n.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(X*V,tt*V).floor()},this.setDrawingBufferSize=function(b,N,B){X=b,tt=N,V=B,n.width=Math.floor(b*B),n.height=Math.floor(N*B),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,N,B,z){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,N,B,z),vt.viewport(U.copy(mt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Lt)},this.setScissor=function(b,N,B,z){b.isVector4?Lt.set(b.x,b.y,b.z,b.w):Lt.set(b,N,B,z),vt.scissor(F.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){vt.setScissorTest(ie=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){ct=b},this.getClearColor=function(b){return b.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor(...arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,B=!0){let z=0;if(b){let I=!1;if(D!==null){let $=D.texture.format;I=$===hd||$===ud||$===cd}if(I){let $=D.texture.type,lt=$===Li||$===Er||$===Jo||$===$o||$===od||$===ld,pt=St.getClearColor(),ft=St.getClearAlpha(),wt=pt.r,Ut=pt.g,Tt=pt.b;lt?(y[0]=wt,y[1]=Ut,y[2]=Tt,y[3]=ft,R.clearBufferuiv(R.COLOR,0,y)):(x[0]=wt,x[1]=Ut,x[2]=Tt,x[3]=ft,R.clearBufferiv(R.COLOR,0,x))}else z|=R.COLOR_BUFFER_BIT}N&&(z|=R.DEPTH_BUFFER_BIT),B&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",at,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",Q,!1),St.dispose(),H.dispose(),Mt.dispose(),yt.dispose(),je.dispose(),Be.dispose(),P.dispose(),ot.dispose(),zt.dispose(),k.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Ni),nt.removeEventListener("sessionend",A_),Cr.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let b=Me.autoReset,N=xt.enabled,B=xt.autoUpdate,z=xt.needsUpdate,I=xt.type;L(),Me.autoReset=b,xt.enabled=N,xt.autoUpdate=B,xt.needsUpdate=z,xt.type=I}function Q(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Z(b){let N=b.target;N.removeEventListener("dispose",Z),gt(N)}function gt(b){Nt(b),yt.remove(b)}function Nt(b){let N=yt.get(b).programs;N!==void 0&&(N.forEach(function(B){k.releaseProgram(B)}),b.isShaderMaterial&&k.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,B,z,I,$){N===null&&(N=_t);let lt=I.isMesh&&I.matrixWorld.determinant()<0,pt=dE(b,N,B,z,I);vt.setMaterial(z,lt);let ft=B.index,wt=1;if(z.wireframe===!0){if(ft=S.getWireframeAttribute(B),ft===void 0)return;wt=2}let Ut=B.drawRange,Tt=B.attributes.position,Yt=Ut.start*wt,ue=(Ut.start+Ut.count)*wt;$!==null&&(Yt=Math.max(Yt,$.start*wt),ue=Math.min(ue,($.start+$.count)*wt)),ft!==null?(Yt=Math.max(Yt,0),ue=Math.min(ue,ft.count)):Tt!=null&&(Yt=Math.max(Yt,0),ue=Math.min(ue,Tt.count));let Le=ue-Yt;if(Le<0||Le===1/0)return;ot.setup(I,z,pt,B,ft);let ye,de=ut;if(ft!==null&&(ye=C.get(ft),de=Ct,de.setIndex(ye)),I.isMesh)z.wireframe===!0?(vt.setLineWidth(z.wireframeLinewidth*ve()),de.setMode(R.LINES)):de.setMode(R.TRIANGLES);else if(I.isLine){let At=z.linewidth;At===void 0&&(At=1),vt.setLineWidth(At*ve()),I.isLineSegments?de.setMode(R.LINES):I.isLineLoop?de.setMode(R.LINE_LOOP):de.setMode(R.LINE_STRIP)}else I.isPoints?de.setMode(R.POINTS):I.isSprite&&de.setMode(R.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Xo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),de.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))de.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{let At=I._multiDrawStarts,Re=I._multiDrawCounts,Qt=I._multiDrawCount,Pn=ft?C.get(ft).bytesPerElement:1,Ea=yt.get(z).currentProgram.getUniforms();for(let Bn=0;Bn<Qt;Bn++)Ea.setValue(R,"_gl_DrawID",Bn),de.render(At[Bn]/Pn,Re[Bn])}else if(I.isInstancedMesh)de.renderInstances(Yt,Le,I.count);else if(B.isInstancedBufferGeometry){let At=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Re=Math.min(B.instanceCount,At);de.renderInstances(Yt,Le,Re)}else de.render(Yt,Le)};function ge(b,N,B){b.transparent===!0&&b.side===mi&&b.forceSinglePass===!1?(b.side=Tn,b.needsUpdate=!0,fu(b,N,B),b.side=Ci,b.needsUpdate=!0,fu(b,N,B),b.side=mi):fu(b,N,B)}this.compile=function(b,N,B=null){B===null&&(B=b),u=Mt.get(B),u.init(N),_.push(u),B.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),b!==B&&b.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();let z=new Set;return b.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;let $=I.material;if($)if(Array.isArray($))for(let lt=0;lt<$.length;lt++){let pt=$[lt];ge(pt,B,I),z.add(pt)}else ge($,B,I),z.add($)}),u=_.pop(),z},this.compileAsync=function(b,N,B=null){let z=this.compile(b,N,B);return new Promise(I=>{function $(){if(z.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&z.delete(lt)}),z.size===0){I(b);return}setTimeout($,10)}It.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let ne=null;function ts(b){ne&&ne(b)}function Ni(){Cr.stop()}function A_(){Cr.start()}let Cr=new Z1;Cr.setAnimationLoop(ts),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(b){ne=b,nt.setAnimationLoop(b),b===null?Cr.stop():Cr.start()},nt.addEventListener("sessionstart",Ni),nt.addEventListener("sessionend",A_),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(N),N=nt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,D),u=Mt.get(b,_.length),u.init(N),_.push(u),j.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ce.setFromProjectionMatrix(j,wi,N.reversedDepth),W=this.localClippingEnabled,Kt=st.init(this.clippingPlanes,W),m=H.get(b,g.length),m.init(),g.push(m),nt.enabled===!0&&nt.isPresenting===!0){let $=v.xr.getDepthSensingMesh();$!==null&&op($,N,-1/0,v.sortObjects)}op(b,N,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,ct),kt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,kt&&St.addToRenderList(m,b),this.info.render.frame++,Kt===!0&&st.beginShadows();let B=u.state.shadowsArray;xt.render(B,b,N),Kt===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,I=m.transmissive;if(u.setupLights(),N.isArrayCamera){let $=N.cameras;if(I.length>0)for(let lt=0,pt=$.length;lt<pt;lt++){let ft=$[lt];C_(z,I,b,ft)}kt&&St.render(b);for(let lt=0,pt=$.length;lt<pt;lt++){let ft=$[lt];w_(m,b,ft,ft.viewport)}}else I.length>0&&C_(z,I,b,N),kt&&St.render(b),w_(m,b,N);D!==null&&T===0&&(Vt.updateMultisampleRenderTarget(D),Vt.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,N),ot.resetDefaultState(),E=-1,M=null,_.pop(),_.length>0?(u=_[_.length-1],Kt===!0&&st.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function op(b,N,B,z){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)u.pushLight(b),b.castShadow&&u.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ce.intersectsSprite(b)){z&&Et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(j);let lt=P.update(b),pt=b.material;pt.visible&&m.push(b,lt,pt,B,Et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ce.intersectsObject(b))){let lt=P.update(b),pt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Et.copy(b.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(b.matrixWorld).applyMatrix4(j)),Array.isArray(pt)){let ft=lt.groups;for(let wt=0,Ut=ft.length;wt<Ut;wt++){let Tt=ft[wt],Yt=pt[Tt.materialIndex];Yt&&Yt.visible&&m.push(b,lt,Yt,B,Et.z,Tt)}}else pt.visible&&m.push(b,lt,pt,B,Et.z,null)}}let $=b.children;for(let lt=0,pt=$.length;lt<pt;lt++)op($[lt],N,B,z)}function w_(b,N,B,z){let I=b.opaque,$=b.transmissive,lt=b.transparent;u.setupLightsView(B),Kt===!0&&st.setGlobalState(v.clippingPlanes,B),z&&vt.viewport(U.copy(z)),I.length>0&&hu(I,N,B),$.length>0&&hu($,N,B),lt.length>0&&hu(lt,N,B),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function C_(b,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[z.id]===void 0&&(u.state.transmissionRenderTarget[z.id]=new Xi(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?Qo:Li,minFilter:Mr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));let $=u.state.transmissionRenderTarget[z.id],lt=z.viewport||U;$.setSize(lt.z*v.transmissionResolutionScale,lt.w*v.transmissionResolutionScale);let pt=v.getRenderTarget(),ft=v.getActiveCubeFace(),wt=v.getActiveMipmapLevel();v.setRenderTarget($),v.getClearColor(q),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),kt&&St.render(B);let Ut=v.toneMapping;v.toneMapping=Us;let Tt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),u.setupLightsView(z),Kt===!0&&st.setGlobalState(v.clippingPlanes,z),hu(b,B,z),Vt.updateMultisampleRenderTarget($),Vt.updateRenderTargetMipmap($),It.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ue=0,Le=N.length;ue<Le;ue++){let ye=N[ue],de=ye.object,At=ye.geometry,Re=ye.material,Qt=ye.group;if(Re.side===mi&&de.layers.test(z.layers)){let Pn=Re.side;Re.side=Tn,Re.needsUpdate=!0,R_(de,B,z,At,Re,Qt),Re.side=Pn,Re.needsUpdate=!0,Yt=!0}}Yt===!0&&(Vt.updateMultisampleRenderTarget($),Vt.updateRenderTargetMipmap($))}v.setRenderTarget(pt,ft,wt),v.setClearColor(q,K),Tt!==void 0&&(z.viewport=Tt),v.toneMapping=Ut}function hu(b,N,B){let z=N.isScene===!0?N.overrideMaterial:null;for(let I=0,$=b.length;I<$;I++){let lt=b[I],pt=lt.object,ft=lt.geometry,wt=lt.group,Ut=lt.material;Ut.allowOverride===!0&&z!==null&&(Ut=z),pt.layers.test(B.layers)&&R_(pt,N,B,ft,Ut,wt)}}function R_(b,N,B,z,I,$){b.onBeforeRender(v,N,B,z,I,$),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),I.onBeforeRender(v,N,B,z,b,$),I.transparent===!0&&I.side===mi&&I.forceSinglePass===!1?(I.side=Tn,I.needsUpdate=!0,v.renderBufferDirect(B,N,z,I,b,$),I.side=Ci,I.needsUpdate=!0,v.renderBufferDirect(B,N,z,I,b,$),I.side=mi):v.renderBufferDirect(B,N,z,I,b,$),b.onAfterRender(v,N,B,z,I,$)}function fu(b,N,B){N.isScene!==!0&&(N=_t);let z=yt.get(b),I=u.state.lights,$=u.state.shadowsArray,lt=I.state.version,pt=k.getParameters(b,I.state,$,N,B),ft=k.getProgramCacheKey(pt),wt=z.programs;z.environment=b.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(b.isMeshStandardMaterial?Be:je).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,wt===void 0&&(b.addEventListener("dispose",Z),wt=new Map,z.programs=wt);let Ut=wt.get(ft);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===lt)return U_(b,pt),Ut}else pt.uniforms=k.getUniforms(b),b.onBeforeCompile(pt,v),Ut=k.acquireProgram(pt,ft),wt.set(ft,Ut),z.uniforms=pt.uniforms;let Tt=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=st.uniform),U_(b,pt),z.needsLights=mE(b),z.lightsStateVersion=lt,z.needsLights&&(Tt.ambientLightColor.value=I.state.ambient,Tt.lightProbe.value=I.state.probe,Tt.directionalLights.value=I.state.directional,Tt.directionalLightShadows.value=I.state.directionalShadow,Tt.spotLights.value=I.state.spot,Tt.spotLightShadows.value=I.state.spotShadow,Tt.rectAreaLights.value=I.state.rectArea,Tt.ltc_1.value=I.state.rectAreaLTC1,Tt.ltc_2.value=I.state.rectAreaLTC2,Tt.pointLights.value=I.state.point,Tt.pointLightShadows.value=I.state.pointShadow,Tt.hemisphereLights.value=I.state.hemi,Tt.directionalShadowMap.value=I.state.directionalShadowMap,Tt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Tt.spotShadowMap.value=I.state.spotShadowMap,Tt.spotLightMatrix.value=I.state.spotLightMatrix,Tt.spotLightMap.value=I.state.spotLightMap,Tt.pointShadowMap.value=I.state.pointShadowMap,Tt.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function D_(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=il.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function U_(b,N){let B=yt.get(b);B.outputColorSpace=N.outputColorSpace,B.batching=N.batching,B.batchingColor=N.batchingColor,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.instancingMorph=N.instancingMorph,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function dE(b,N,B,z,I){N.isScene!==!0&&(N=_t),Vt.resetTextureUnits();let $=N.fog,lt=z.isMeshStandardMaterial?N.environment:null,pt=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:oa,ft=(z.isMeshStandardMaterial?Be:je).get(z.envMap||lt),wt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ut=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Tt=!!B.morphAttributes.position,Yt=!!B.morphAttributes.normal,ue=!!B.morphAttributes.color,Le=Us;z.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Le=v.toneMapping);let ye=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,de=ye!==void 0?ye.length:0,At=yt.get(z),Re=u.state.lights;if(Kt===!0&&(W===!0||b!==M)){let yn=b===M&&z.id===E;st.setState(z,b,yn)}let Qt=!1;z.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Re.state.version||At.outputColorSpace!==pt||I.isBatchedMesh&&At.batching===!1||!I.isBatchedMesh&&At.batching===!0||I.isBatchedMesh&&At.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&At.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&At.instancing===!1||!I.isInstancedMesh&&At.instancing===!0||I.isSkinnedMesh&&At.skinning===!1||!I.isSkinnedMesh&&At.skinning===!0||I.isInstancedMesh&&At.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&At.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&At.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&At.instancingMorph===!1&&I.morphTexture!==null||At.envMap!==ft||z.fog===!0&&At.fog!==$||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==st.numPlanes||At.numIntersection!==st.numIntersection)||At.vertexAlphas!==wt||At.vertexTangents!==Ut||At.morphTargets!==Tt||At.morphNormals!==Yt||At.morphColors!==ue||At.toneMapping!==Le||At.morphTargetsCount!==de)&&(Qt=!0):(Qt=!0,At.__version=z.version);let Pn=At.currentProgram;Qt===!0&&(Pn=fu(z,N,I));let Ea=!1,Bn=!1,cl=!1,De=Pn.getUniforms(),$n=At.uniforms;if(vt.useProgram(Pn.program)&&(Ea=!0,Bn=!0,cl=!0),z.id!==E&&(E=z.id,Bn=!0),Ea||M!==b){vt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),De.setValue(R,"projectionMatrix",b.projectionMatrix),De.setValue(R,"viewMatrix",b.matrixWorldInverse);let wn=De.map.cameraPosition;wn!==void 0&&wn.setValue(R,ht.setFromMatrixPosition(b.matrixWorld)),Dt.logarithmicDepthBuffer&&De.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&De.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Bn=!0,cl=!0)}if(I.isSkinnedMesh){De.setOptional(R,I,"bindMatrix"),De.setOptional(R,I,"bindMatrixInverse");let yn=I.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),De.setValue(R,"boneTexture",yn.boneTexture,Vt))}I.isBatchedMesh&&(De.setOptional(R,I,"batchingTexture"),De.setValue(R,"batchingTexture",I._matricesTexture,Vt),De.setOptional(R,I,"batchingIdTexture"),De.setValue(R,"batchingIdTexture",I._indirectTexture,Vt),De.setOptional(R,I,"batchingColorTexture"),I._colorsTexture!==null&&De.setValue(R,"batchingColorTexture",I._colorsTexture,Vt));let ti=B.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&et.update(I,B,Pn),(Bn||At.receiveShadow!==I.receiveShadow)&&(At.receiveShadow=I.receiveShadow,De.setValue(R,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&($n.envMap.value=ft,$n.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&($n.envMapIntensity.value=N.environmentIntensity),Bn&&(De.setValue(R,"toneMappingExposure",v.toneMappingExposure),At.needsLights&&pE($n,cl),$&&z.fog===!0&&J.refreshFogUniforms($n,$),J.refreshMaterialUniforms($n,z,V,tt,u.state.transmissionRenderTarget[b.id]),il.upload(R,D_(At),$n,Vt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(il.upload(R,D_(At),$n,Vt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&De.setValue(R,"center",I.center),De.setValue(R,"modelViewMatrix",I.modelViewMatrix),De.setValue(R,"normalMatrix",I.normalMatrix),De.setValue(R,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let yn=z.uniformsGroups;for(let wn=0,lp=yn.length;wn<lp;wn++){let Rr=yn[wn];zt.update(Rr,Pn),zt.bind(Rr,Pn)}}return Pn}function pE(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function mE(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,N,B){let z=yt.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),yt.get(b.texture).__webglTexture=N,yt.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let B=yt.get(b);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0};let gE=R.createFramebuffer();this.setRenderTarget=function(b,N=0,B=0){D=b,w=N,T=B;let z=!0,I=null,$=!1,lt=!1;if(b){let ft=yt.get(b);if(ft.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(ft.__webglFramebuffer===void 0)Vt.setupRenderTarget(b);else if(ft.__hasExternalTextures)Vt.rebindTextures(b,yt.get(b.texture).__webglTexture,yt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Tt=b.depthTexture;if(ft.__boundDepthTexture!==Tt){if(Tt!==null&&yt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Vt.setupDepthRenderbuffer(b)}}let wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);let Ut=yt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?I=Ut[N][B]:I=Ut[N],$=!0):b.samples>0&&Vt.useMultisampledRTT(b)===!1?I=yt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ut)?I=Ut[B]:I=Ut,U.copy(b.viewport),F.copy(b.scissor),G=b.scissorTest}else U.copy(mt).multiplyScalar(V).floor(),F.copy(Lt).multiplyScalar(V).floor(),G=ie;if(B!==0&&(I=gE),vt.bindFramebuffer(R.FRAMEBUFFER,I)&&z&&vt.drawBuffers(b,I),vt.viewport(U),vt.scissor(F),vt.setScissorTest(G),$){let ft=yt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+N,ft.__webglTexture,B)}else if(lt){let ft=N;for(let wt=0;wt<b.textures.length;wt++){let Ut=yt.get(b.textures[wt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+wt,Ut.__webglTexture,B,ft)}}else if(b!==null&&B!==0){let ft=yt.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ft.__webglTexture,B)}E=-1},this.readRenderTargetPixels=function(b,N,B,z,I,$,lt,pt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft){vt.bindFramebuffer(R.FRAMEBUFFER,ft);try{let wt=b.textures[pt],Ut=wt.format,Tt=wt.type;if(!Dt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-z&&B>=0&&B<=b.height-I&&(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),R.readPixels(N,B,z,I,bt.convert(Ut),bt.convert(Tt),$))}finally{let wt=D!==null?yt.get(D).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(b,N,B,z,I,$,lt,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=yt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&lt!==void 0&&(ft=ft[lt]),ft)if(N>=0&&N<=b.width-z&&B>=0&&B<=b.height-I){vt.bindFramebuffer(R.FRAMEBUFFER,ft);let wt=b.textures[pt],Ut=wt.format,Tt=wt.type;if(!Dt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Yt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Yt),R.bufferData(R.PIXEL_PACK_BUFFER,$.byteLength,R.STREAM_READ),b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+pt),R.readPixels(N,B,z,I,bt.convert(Ut),bt.convert(Tt),0);let ue=D!==null?yt.get(D).__webglFramebuffer:null;vt.bindFramebuffer(R.FRAMEBUFFER,ue);let Le=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await b1(R,Le,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Yt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,$),R.deleteBuffer(Yt),R.deleteSync(Le),$}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,B=0){let z=Math.pow(2,-B),I=Math.floor(b.image.width*z),$=Math.floor(b.image.height*z),lt=N!==null?N.x:0,pt=N!==null?N.y:0;Vt.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,B,0,0,lt,pt,I,$),vt.unbindTexture()};let _E=R.createFramebuffer(),vE=R.createFramebuffer();this.copyTextureToTexture=function(b,N,B=null,z=null,I=0,$=null){$===null&&(I!==0?(Xo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),$=I,I=0):$=0);let lt,pt,ft,wt,Ut,Tt,Yt,ue,Le,ye=b.isCompressedTexture?b.mipmaps[$]:b.image;if(B!==null)lt=B.max.x-B.min.x,pt=B.max.y-B.min.y,ft=B.isBox3?B.max.z-B.min.z:1,wt=B.min.x,Ut=B.min.y,Tt=B.isBox3?B.min.z:0;else{let ti=Math.pow(2,-I);lt=Math.floor(ye.width*ti),pt=Math.floor(ye.height*ti),b.isDataArrayTexture?ft=ye.depth:b.isData3DTexture?ft=Math.floor(ye.depth*ti):ft=1,wt=0,Ut=0,Tt=0}z!==null?(Yt=z.x,ue=z.y,Le=z.z):(Yt=0,ue=0,Le=0);let de=bt.convert(N.format),At=bt.convert(N.type),Re;N.isData3DTexture?(Vt.setTexture3D(N,0),Re=R.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Vt.setTexture2DArray(N,0),Re=R.TEXTURE_2D_ARRAY):(Vt.setTexture2D(N,0),Re=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);let Qt=R.getParameter(R.UNPACK_ROW_LENGTH),Pn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ea=R.getParameter(R.UNPACK_SKIP_PIXELS),Bn=R.getParameter(R.UNPACK_SKIP_ROWS),cl=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ye.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ye.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,wt),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ut),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Tt);let De=b.isDataArrayTexture||b.isData3DTexture,$n=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let ti=yt.get(b),yn=yt.get(N),wn=yt.get(ti.__renderTarget),lp=yt.get(yn.__renderTarget);vt.bindFramebuffer(R.READ_FRAMEBUFFER,wn.__webglFramebuffer),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,lp.__webglFramebuffer);for(let Rr=0;Rr<ft;Rr++)De&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.get(b).__webglTexture,I,Tt+Rr),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.get(N).__webglTexture,$,Le+Rr)),R.blitFramebuffer(wt,Ut,lt,pt,Yt,ue,lt,pt,R.DEPTH_BUFFER_BIT,R.NEAREST);vt.bindFramebuffer(R.READ_FRAMEBUFFER,null),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(I!==0||b.isRenderTargetTexture||yt.has(b)){let ti=yt.get(b),yn=yt.get(N);vt.bindFramebuffer(R.READ_FRAMEBUFFER,_E),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,vE);for(let wn=0;wn<ft;wn++)De?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ti.__webglTexture,I,Tt+wn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ti.__webglTexture,I),$n?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,yn.__webglTexture,$,Le+wn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,yn.__webglTexture,$),I!==0?R.blitFramebuffer(wt,Ut,lt,pt,Yt,ue,lt,pt,R.COLOR_BUFFER_BIT,R.NEAREST):$n?R.copyTexSubImage3D(Re,$,Yt,ue,Le+wn,wt,Ut,lt,pt):R.copyTexSubImage2D(Re,$,Yt,ue,wt,Ut,lt,pt);vt.bindFramebuffer(R.READ_FRAMEBUFFER,null),vt.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else $n?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Re,$,Yt,ue,Le,lt,pt,ft,de,At,ye.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(Re,$,Yt,ue,Le,lt,pt,ft,de,ye.data):R.texSubImage3D(Re,$,Yt,ue,Le,lt,pt,ft,de,At,ye):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,$,Yt,ue,lt,pt,de,At,ye.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,$,Yt,ue,ye.width,ye.height,de,ye.data):R.texSubImage2D(R.TEXTURE_2D,$,Yt,ue,lt,pt,de,At,ye);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ea),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,cl),$===0&&N.generateMipmaps&&R.generateMipmap(Re),vt.unbindTexture()},this.initRenderTarget=function(b){yt.get(b).__webglFramebuffer===void 0&&Vt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Vt.setTextureCube(b,0):b.isData3DTexture?Vt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Vt.setTexture2DArray(b,0):Vt.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){w=0,T=0,D=null,vt.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}};var rl=class e{static mergeConfig(t,n){let i=Object.create(t);for(let s in n){let r=n[s];i[s]=r}return i}static keys(t){let n=[];for(let i in t)n.push(i);return n}static compare(t,n){if(t===n)return!0;let i=typeof t;if(i!==typeof n||i!=="object")return!1;let r=e.keys(t),a=e.keys(n);if(r.length!==a.length)return!1;r.sort(),a.sort();for(let o=0,l=r.length;o<l;++o)if(r[o]!==a[o])return!1;for(let o=0,l=r.length;o<l;++o){let c=r[o];if(!e.compare(t[c],n[c]))return!1}return!0}};var Tr=class e{constructor(){this._shouldPropagate=!0;this._bindings=[]}static create(){return new e}add(t,n,i=0){this.registerListener(t,!1,n,i)}registerListener(t,n,i,s=0){let r=this.indexOfListener(t,i),a=null;if(r!==-1){if(a=this._bindings[r],a.isOnce!==n)throw new Error(`You cannot add${n?"":"Once"}() then add${n?"Once":""}() the same listener without removing the relationship first.`)}else a={listener:t,context:i,isOnce:n,priority:s},this.addBinding(a)}addBinding(t){let n=this._bindings.length;do--n;while(this._bindings[n]&&t.priority<=this._bindings[n].priority);this._bindings.splice(n+1,0,t)}indexOfListener(t,n){for(let i=this._bindings.length-1;i>=0;--i){let s=this._bindings[i];if(s.listener===t&&s.context===n)return i}return-1}halt(){this._shouldPropagate=!1}remove(t,n){let i=this.indexOfListener(t,n);return i!==-1?(this._bindings.splice(i,1),!0):!1}removeAll(){this._bindings.length=0}dispatch(...t){let n=Array.prototype.slice.call(t);this._shouldPropagate=!0;let i=this._bindings;for(let s=i.length-1;s>=0&&!(i[s].listener.apply(i[s].context,n)===!1||!this._shouldPropagate);--s);}dispose(){this.removeAll()}get bindings(){return this._bindings}};var qd=class e{constructor(t){this.signals={down:Tr.create(),up:Tr.create(),windowBlur:Tr.create()};this.windowBlur=t=>{this.resetFlags(),this.signals.windowBlur.dispatch(t)};this.onKeyDown=t=>{switch(t.key){case e.KEY_ALT:e._isAltDown=!0;break;case e.KEY_CTRL:e._isCtrlDown=!0;break;case e.KEY_SHIFT:e._isShiftDown=!0;break;case e.KEY_TAB:e._isTabDown=!0;break;case e.KEY_SPACE:e._isSpaceDown=!0;break}this.allow(t)&&this.signals.down.dispatch(t)};this.onKeyUp=t=>{switch(t.key){case e.KEY_ALT:e._isAltDown=!1,t.preventDefault();break;case e.KEY_CTRL:e._isCtrlDown=!1;break;case e.KEY_SHIFT:e._isShiftDown=!1;break;case e.KEY_TAB:e._isTabDown=!1;break;case e.KEY_SPACE:e._isSpaceDown=!1;break}this.allow(t)&&this.signals.up.dispatch(t)};this._domElement=t||document.body,this.setEnabled(!0)}static{this._isCtrlDown=!1}static{this._isShiftDown=!1}static{this._isAltDown=!1}static{this._isTabDown=!1}static{this._isSpaceDown=!1}static getInstance(){return e._instance||(e._instance=new e)}static allowEvent(t){return t.key===e.KEY_ESCAPE||t.key===e.KEY_ENTER?!0:!e.isEventTargetAnInput(t)}static isEventTargetAnInput(t){let i=t.target.nodeName.toLowerCase();return i==="input"||i==="textarea"||document.querySelectorAll(":focus").length>0}static{this.KEY_DOWN="ArrowDown"}static{this.KEY_UP="ArrowUp"}static{this.KEY_LEFT="ArrowLeft"}static{this.KEY_RIGHT="ArrowRight"}static{this.KEY_ESCAPE="Escape"}static{this.KEY_DELETE="Delete"}static{this.KEY_BACKSPACE="Backspace"}static{this.KEY_ENTER="Enter"}static{this.KEY_SPACE=" "}static{this.KEY_TAB="Tab"}static{this.KEY_CTRL="Control"}static{this.KEY_SHIFT="Shift"}static{this.KEY_ALT="Alt"}static{this.KEY_ARROW_UP="ArrowUp"}static{this.KEY_ARROW_RIGHT="ArrowRight"}static{this.KEY_ARROW_DOWN="ArrowDown"}static{this.KEY_ARROW_LEFT="ArrowLeft"}setEnabled(t){t?this.addListeners():this.removeListeners()}addListeners(){this._domElement.addEventListener("keydown",this.onKeyDown),this._domElement.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.windowBlur)}removeListeners(){this._domElement.removeEventListener("keydown",this.onKeyDown),this._domElement.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.windowBlur)}resetFlags(){e._isAltDown=e._isCtrlDown=e._isShiftDown=e._isTabDown=e._isSpaceDown=!1}allow(t){return e.allowEvent(t)}get element(){return this._domElement}static get isAltDown(){return e._isAltDown}static get isCtrlDown(){return e._isCtrlDown}static get isShiftDown(){return e._isShiftDown}static get isTabDown(){return e._isTabDown}static get isSpaceDown(){return e._isSpaceDown}dispose(){this.removeListeners()}};var Yd=class e{constructor(t){this._isOkButtonEnabled=!0;this._container=document.createElement("div");this._okButton=document.createElement("div");this._additionalElements=null;this.resolve=()=>{};this.onKeyDown=t=>{switch(qd.isEventTargetAnInput(t)||t.preventDefault(),t.key){case"Enter":this.onOkClick(t);break;case"Escape":this.onCancelClick();break}};this.onCancelClick=()=>{this.close(),this.resolve?.(this._cancelValue)};this.onOkClick=t=>{this._isOkButtonEnabled&&(t.stopImmediatePropagation(),this.close(),this.resolve?.(this._okValue))};this._props=t,this._config=rl.mergeConfig(e._defaultConfig,t.config||{})}static{this._instances=[]}static{this._lastStateId=1}static{this._defaultConfig={backdrop:!0,ok:"Yes",cancel:"No",parentElement:document.body}}close(){e._instances.length--,window.removeEventListener("keydown",this.onKeyDown),this._container.remove()}enableOkButton(){this._isOkButtonEnabled=!0,this._okButton.classList.remove("disabled")}disableOkButton(){this._isOkButtonEnabled=!1,this._okButton.classList.add("disabled")}open(){return window.addEventListener("keydown",this.onKeyDown),this.draw(),e._instances.push(this),window.history.pushState({browserState:"popup",id:e._lastStateId++},""),new Promise((t,n)=>{this.resolve=t})}draw(){this._container.className="popupBackdrop flexCenter",this._config.backdrop&&(this._container.onclick=this.onCancelClick);let t=document.createElement("div");t.className="popupWindow flexCenter vbox";let n=document.createElement("div");n.className="message",n.innerHTML=this._props.message,t.appendChild(n),this._additionalElements&&t.appendChild(this._additionalElements);let i=document.createElement("div");if(i.className="buttonContainer hbox flexCenter",this._config.cancel){let s=document.createElement("div");s.className="cancel btn",s.textContent=this._config.cancel,s.onclick=this.onCancelClick,i.appendChild(s)}this._okButton.className="ok btn",this._okButton.textContent=this._config.ok||"",this._okButton.onclick=this.onOkClick,this._isOkButtonEnabled||this._okButton.classList.add("disabled"),i.appendChild(this._okButton),t.appendChild(i),this._container.appendChild(t),this._config.parentElement?.appendChild(this._container)}static cancelLast(){let t=e._instances.length;return t>0?(e._instances[t-1].onCancelClick(),!0):!1}};var Zd=class e extends Yd{constructor(n,i={}){super({message:n,config:rl.mergeConfig(e._defaultConfig,i)});this._okValue=!0;this._cancelValue=!1}static{this._defaultConfig={ok:"Ok",cancel:"",backdrop:!0}}static open(n,i){return new e(n,i).open()}};var _i=class{static{this.ANIMATION_DURATION=400}static{this.DAMPING_DURATION=2e3}static{this.MOUSE_BUTTON={LEFT:0,MIDDLE:1,RIGHT:2}}static{this.AUTOROTATION_SPEED=2e-4}static get isIOS(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}};var vn=class{static clamp(t,n,i){return t<=n?n:t>=i?i:t}};var al=class e{constructor(t,n,i,s=0,r=_i.ANIMATION_DURATION,a=!0){this._timeStampAtSetEnd=0;this._hasChanged=!1;this._prevDeltaValue=0;this._prevTimeStamp=1;this._prevDeltaTime=1;this._easing=0;this._timeoutId=-1;this._min=-1/0;this._max=1/0;this._sceneManager=t,this._originalStart=n,this._start=n,this._originalEnd=i,this._end=i,this._value=this._start,this._originalAnimationDuration=this._animationDuration=r,this._easing=s,this._triggerRender=a}static{this._activeInstances=[]}static removeFromActiveOnes(t){e._activeInstances=e._activeInstances.filter(n=>n!==t)}static addToActiveOnes(t){e._activeInstances.includes(t)||e._activeInstances.push(t)}static updateActiveOnes(t){let n=!1;for(let i of e._activeInstances)n=n||i._triggerRender,i.update(t);return n}smoothStep(t){if(t<this._animationDuration){let n=t/this._animationDuration;return vn.clamp(n**2*(3-2*n)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=vn.clamp(this._end,this._min,this._max),this._end}exponentialOut(t){if(t<this._animationDuration){let n=t/this._animationDuration;return vn.clamp((1-2**(-10*n))*(1024/1023)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=vn.clamp(this._end,this._min,this._max),this._end}getNextValue(t){return this._easing===1?this.smoothStep(t):this.exponentialOut(t)}increaseEndBy(t,n=!1){this.setEnd(this._end+t,n)}decreaseEndBy(t,n=!1){this.setEnd(this._end-t,n)}setEnd(t,n=!1,i=this._originalAnimationDuration){this._animationDuration=i;let s=n?vn.clamp(t,this._min,this._max):t;e.addToActiveOnes(this),this._start=this._value,this._end=s,this._timeStampAtSetEnd=this._sceneManager.timeStamp,n||(clearTimeout(this._timeoutId),this._timeoutId=window.setTimeout(()=>{this._end=vn.clamp(this._end,this._min,this._max)},this._animationDuration))}reset(t,n,i=this._originalAnimationDuration){this._animationDuration=i,e.addToActiveOnes(this),this._start=t??this._originalStart,this._end=n??this._originalEnd,this._timeStampAtSetEnd=this._sceneManager.timeStamp}update(t){this._prevDeltaTime=t-this._prevTimeStamp;let n=t-this._timeStampAtSetEnd,i=this._value;this._value=this.getNextValue(n),this._prevDeltaValue=this._value-i,this._prevTimeStamp=t,this._value===i?(this._start=this._end,this._hasChanged=!1,e.removeFromActiveOnes(this)):this._hasChanged=!0}get animationDuration(){return this._animationDuration}get originalAnimationDuration(){return this._originalAnimationDuration}get start(){return this._start}get value(){return this._value}get end(){return this._end}get hasChangedSinceLastTick(){return this._hasChanged}get prevDeltaValue(){return this._prevDeltaValue}get prevDeltaTime(){return this._prevDeltaTime}get derivateAt0(){return this._easing===0?6.938247437862991:0}};var va=class extends al{constructor(t,n,i,s,r,a=0,o=_i.ANIMATION_DURATION,l=!0){super(t,n,i,a,o,l),this._originalMin=this._min=s,this._originalMax=this._max=r}get min(){return this._min}get max(){return this._max}get originalMin(){return this._originalMin}get originalMax(){return this._originalMax}setMin(t){this._min=t;let n=vn.clamp(this._start,this._min,this._max),i=vn.clamp(this._end,this._min,this._max);super.reset(n,i)}setMax(t){this._max=t;let n=vn.clamp(this._start,this._min,this._max),i=vn.clamp(this._end,this._min,this._max);super.reset(n,i)}reset(t,n,i,s,r=!1){this._min=i??this._min,this._max=s??this._max;let a=t??this._originalStart,o=r?vn.clamp(a,this._min,this._max):a,l=n??this._originalEnd,c=r?vn.clamp(l,this._min,this._max):l;super.reset(o,c)}isPlaying(){return this.value!==this.end}};var ol=class e{static lengthOfSquared(t){let n=0;for(let i of t)n+=i*i;return n}static lengthOf(t){return Math.sqrt(e.lengthOfSquared(t))}static normalize(t){let n=e.lengthOf(t);for(let i=0;i<t.length;++i)t[i]/=n;return t}static getWorldPositionFromUV(t,n){let i=[Math.cos(t)*Math.sin(n),Math.cos(n),Math.sin(t)*Math.sin(n)];return e.normalize(i)}};var Kd=class{constructor(t){this._isPointerDown=!1;this._mouseMoved=!0;this._triggerClickThreshold={deltaCursor:3,deltaTime:1e3};this._pointer={downTimeStamp:-1,startX:-1,startY:-1,prevX:null,prevY:null,prevDeltaX:0,prevDeltaY:0,prevTimeStamp:0,prevDeltaTime:1,triggerClickOnPointerUp:!1};this._pinch={startValue:{touchDistance:-1,distanceValue:-1},currentValue:{touchDistance:-1,distanceValue:-1}};this._cameraNormalizedPosition=ol.normalize([0,.3,1]);this._timeoutId=-1;this._dampOnPointerUp=!1;this._isEnabled=!1;this._autoRotation=[0,0];this.SENSITIVITY=1.2;this._prevSpeed=[];this.signals={click:Tr.create()};this.onWheel=t=>{t.preventDefault();let n=1.1,i=this._sceneManager.distance,s=Math.sign(-t.deltaY)>0?i.end/n:i.end*n;i.setEnd(s,!0)};this.onMouseDown=t=>{t.button===_i.MOUSE_BUTTON.LEFT&&this.onPointerDown(t.clientX,t.clientY)};this.onTouchStart=t=>{t.preventDefault(),t.touches.length===1?this.onPointerDown(t.touches[0].clientX,t.touches[0].clientY):t.touches.length===2?(this._isPointerDown=!1,this._pinch.startValue.touchDistance=this.getTouchDistance(t),this._pinch.startValue.distanceValue=this._sceneManager.distance.value):this.onPointerUp(t)};this.onMouseMove=t=>{this.onPointerMove(t.clientX,t.clientY)};this.onTouchMove=t=>{t.touches.length===1?this.onPointerMove(t.touches[0].clientX,t.touches[0].clientY):t.touches.length===2&&this._pinch.startValue.touchDistance?(this._pinch.currentValue.touchDistance=this.getTouchDistance(t),this._pinch.currentValue.distanceValue=this._pinch.startValue.touchDistance/this._pinch.currentValue.touchDistance*this._pinch.startValue.distanceValue,this._sceneManager.distance.setEnd(this._pinch.currentValue.distanceValue)):this.onPointerUp(t)};this.onPointerUp=t=>{if(this._isPointerDown){let n=performance.now();this._domElement.classList.remove("rotating");let i=this._prevSpeed,s=ol.lengthOfSquared(i);if(this._dampOnPointerUp&&!isNaN(s)&&0<s&&s<1/0){this._dampOnPointerUp=!1;let r=this._u.derivateAt0,a=this._u.originalAnimationDuration,o=[a*i[0]/r,a*i[1]/r];this._u.setEnd(this._u.value+o[0]),this._v.setEnd(this._v.value+o[1])}this._triggerClickThreshold.deltaTime<n-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.triggerClickOnPointerUp&&this.signals.click.dispatch({clientX:this._pointer.prevX,clientY:this._pointer.prevY})}this._isPointerDown=!1,this._pointer.triggerClickOnPointerUp=!1,this._pointer.downTimeStamp=-1,this._pointer.startX=-1,this._pointer.startY=-1,this._pointer.prevX=null,this._pointer.prevY=null,this._pointer.prevTimeStamp=0,this._pointer.prevDeltaX=0,this._pointer.prevDeltaY=0,this._pointer.prevDeltaTime=1,this._pinch.startValue.touchDistance=this._pinch.startValue.distanceValue=this._pinch.currentValue.touchDistance=this._pinch.currentValue.distanceValue=-1};this.cancelDamping=()=>{this._dampOnPointerUp=!1};this._domElement=t.domElement,this._sceneManager=t,this._u=new va(this._sceneManager,0,0,-1/0,1/0,0,_i.DAMPING_DURATION),this._v=new va(this._sceneManager,Math.PI/2,Math.PI/2,.01,3.14,0,_i.DAMPING_DURATION)}getTouchDistance(t){let n={x:t.touches[0].clientX,y:t.touches[0].clientY},i={x:t.touches[1].clientX,y:t.touches[1].clientY},s={x:i.x-n.x,y:i.y-n.y};return Math.sqrt(s.x*s.x+s.y*s.y)}onPointerDown(t,n){this.stopRotating(),this._isPointerDown=!0,this._mouseMoved=!1,this._pointer.startX=this._pointer.prevX=t,this._pointer.startY=this._pointer.prevY=n,this._pointer.downTimeStamp=performance.now(),this._pointer.prevTimeStamp=this._pointer.downTimeStamp,this._pointer.triggerClickOnPointerUp=!0,this._domElement.classList.add("rotating"),this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}onPointerMove(t,n){if(this._isPointerDown&&(this._mouseMoved=t!==this._pointer.prevX||n!==this._pointer.prevY,this._mouseMoved)){if(this._domElement.classList.add("rotating"),this._pointer.prevX!=null&&this._pointer.prevY!=null){let s=this._sceneManager.distance.value,r=this._pointer.prevX-t,a=n-this._pointer.prevY,o=r*this.SENSITIVITY/window.innerHeight*s,l=a*this.SENSITIVITY/window.innerHeight*s,c=this._pointer.startX-t,h=this._pointer.startY-n;(this._triggerClickThreshold.deltaCursor<Math.abs(c)||this._triggerClickThreshold.deltaCursor<Math.abs(h))&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaX=this._pointer.prevX-t,this._pointer.prevDeltaY=n-this._pointer.prevY,this._u.reset(this._u.end-o,this._u.end-o),this._v.reset(this._v.end-l,this._v.end-l)}this._pointer.prevX=t,this._pointer.prevY=n;let i=performance.now();this._triggerClickThreshold.deltaTime<i-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaTime=i-this._pointer.prevTimeStamp,this._pointer.prevTimeStamp=i,this._dampOnPointerUp=!0,clearTimeout(this._timeoutId),this._timeoutId=window.setTimeout(this.cancelDamping,100)}}setUVFromSphereSufracePoint(t){let n=Math.PI-Math.atan2(t[2],t[0]);this._u.reset(n,n);let i=Math.PI/2-Math.asin(t[1]);this._v.reset(i,i)}activate(){this._isEnabled||(this._isEnabled=!0,this.setUVFromSphereSufracePoint(this._cameraNormalizedPosition),this._domElement.addEventListener("mousedown",this.onMouseDown),this._domElement.addEventListener("touchstart",this.onTouchStart),this._domElement.addEventListener("wheel",this.onWheel),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("mouseup",this.onPointerUp),window.addEventListener("touchend",this.onPointerUp),window.addEventListener("touchcancel",this.onPointerUp))}deactivate(){this._isEnabled&&(this._isEnabled=!1,this._isPointerDown=!1,this._domElement.classList.remove("rotating"),this._domElement.removeEventListener("mousedown",this.onMouseDown),this._domElement.removeEventListener("touchstart",this.onTouchStart),this._domElement.removeEventListener("wheel",this.onWheel),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchend",this.onPointerUp),window.removeEventListener("touchcancel",this.onPointerUp))}stopRotating(){this._autoRotation[0]=0,this._autoRotation[1]=0,this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}get isEnabled(){return this._isEnabled}update(){return this._isEnabled&&(this._autoRotation[0]!==0&&this._u.reset(this._u.end+this._autoRotation[0]*this._sceneManager.deltaFrame,this._u.end+this._autoRotation[0]*this._sceneManager.deltaFrame),this._autoRotation[1]!==0&&this._v.reset(this._v.end+this._autoRotation[1]*this._sceneManager.deltaFrame,this._v.end+this._autoRotation[1]*this._sceneManager.deltaFrame,void 0,void 0,!0),(this._u.hasChangedSinceLastTick||this._v.hasChangedSinceLastTick)&&(this._prevSpeed[0]=this._u.prevDeltaValue/this._u.prevDeltaTime,this._prevSpeed[1]=this._v.prevDeltaValue/this._v.prevDeltaTime,this._cameraNormalizedPosition=ol.getWorldPositionFromUV(this._u.value,this._v.value),this._sceneManager.needsRender=!0)),this._cameraNormalizedPosition}};var Ar=class{constructor(t){this.name="Task";this._sceneManager=null;this.name=t}init(t){this._sceneManager=t}};var jd=class extends Ar{constructor(){super(...arguments);this._cube=new We(new Zi(2,2,2),new ca({color:16711680}))}update(n){this._cube.rotation.x+=n/1e3*Math.PI*.1,this._cube.rotation.y+=n/1e3*Math.PI*.2,this._sceneManager.needsRender=!0}enable(){this._sceneManager.controls.activate(),this._sceneManager.scene.add(this._cube)}disable(){this._sceneManager.scene.remove(this._cube)}};var tE=new Jn,Jd=new O,ll=class extends Jc{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],n=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new On(t,3)),this.setAttribute("uv",new On(n,2))}applyMatrix4(t){let n=this.attributes.instanceStart,i=this.attributes.instanceEnd;return n!==void 0&&(n.applyMatrix4(t),i.applyMatrix4(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));let i=new br(n,6,1);return this.setAttribute("instanceStart",new Ui(i,3,0)),this.setAttribute("instanceEnd",new Ui(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let n;t instanceof Float32Array?n=t:Array.isArray(t)&&(n=new Float32Array(t));let i=new br(n,6,1);return this.setAttribute("instanceColorStart",new Ui(i,3,0)),this.setAttribute("instanceColorEnd",new Ui(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Wc(t.geometry)),this}fromLineSegments(t){let n=t.geometry;return this.setPositions(n.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;t!==void 0&&n!==void 0&&(this.boundingBox.setFromBufferAttribute(t),tE.setFromBufferAttribute(n),this.boundingBox.union(tE))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,n=this.attributes.instanceEnd;if(t!==void 0&&n!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Jd.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Jd)),Jd.fromBufferAttribute(n,r),s=Math.max(s,i.distanceToSquared(Jd));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};rt.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Ft(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};An.line={uniforms:au.merge([rt.common,rt.fog,rt.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var wr=class extends In{constructor(t){super({type:"LineMaterial",uniforms:au.clone(An.line.uniforms),vertexShader:An.line.vertexShader,fragmentShader:An.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var M_=new le,eE=new O,nE=new O,an=new le,on=new le,Ji=new le,E_=new O,T_=new Ce,ln=new $c,iE=new O,Qd=new Jn,$d=new qi,Qi=new le,$i,ya;function sE(e,t,n){return Qi.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),Qi.multiplyScalar(1/Qi.w),Qi.x=ya/n.width,Qi.y=ya/n.height,Qi.applyMatrix4(e.projectionMatrixInverse),Qi.multiplyScalar(1/Qi.w),Math.abs(Math.max(Qi.x,Qi.y))}function bU(e,t){let n=e.matrixWorld,i=e.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){ln.start.fromBufferAttribute(s,o),ln.end.fromBufferAttribute(r,o),ln.applyMatrix4(n);let c=new O,h=new O;$i.distanceSqToSegment(ln.start,ln.end,h,c),h.distanceTo(c)<ya*.5&&t.push({point:h,pointOnLine:c,distance:$i.origin.distanceTo(h),object:e,face:null,faceIndex:o,uv:null,uv1:null})}}function MU(e,t,n){let i=t.projectionMatrix,r=e.material.resolution,a=e.matrixWorld,o=e.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),d=-t.near;$i.at(1,Ji),Ji.w=1,Ji.applyMatrix4(t.matrixWorldInverse),Ji.applyMatrix4(i),Ji.multiplyScalar(1/Ji.w),Ji.x*=r.x/2,Ji.y*=r.y/2,Ji.z=0,E_.copy(Ji),T_.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,p=h;f<p;f++){if(an.fromBufferAttribute(l,f),on.fromBufferAttribute(c,f),an.w=1,on.w=1,an.applyMatrix4(T_),on.applyMatrix4(T_),an.z>d&&on.z>d)continue;if(an.z>d){let _=an.z-on.z,v=(an.z-d)/_;an.lerp(on,v)}else if(on.z>d){let _=on.z-an.z,v=(on.z-d)/_;on.lerp(an,v)}an.applyMatrix4(i),on.applyMatrix4(i),an.multiplyScalar(1/an.w),on.multiplyScalar(1/on.w),an.x*=r.x/2,an.y*=r.y/2,on.x*=r.x/2,on.y*=r.y/2,ln.start.copy(an),ln.start.z=0,ln.end.copy(on),ln.end.z=0;let x=ln.closestPointToPointParameter(E_,!0);ln.at(x,iE);let m=n_.lerp(an.z,on.z,x),u=m>=-1&&m<=1,g=E_.distanceTo(iE)<ya*.5;if(u&&g){ln.start.fromBufferAttribute(l,f),ln.end.fromBufferAttribute(c,f),ln.start.applyMatrix4(a),ln.end.applyMatrix4(a);let _=new O,v=new O;$i.distanceSqToSegment(ln.start,ln.end,v,_),n.push({point:v,pointOnLine:_,distance:$i.origin.distanceTo(v),object:e,face:null,faceIndex:f,uv:null,uv1:null})}}}var tp=class extends We{constructor(t=new ll,n=new wr({color:Math.random()*16777215})){super(t,n),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,n=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*n.count);for(let a=0,o=0,l=n.count;a<l;a++,o+=2)eE.fromBufferAttribute(n,a),nE.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+eE.distanceTo(nE);let r=new br(s,2,1);return t.setAttribute("instanceDistanceStart",new Ui(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ui(r,1,1)),this}raycast(t,n){let i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;$i=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;ya=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),$d.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=ya*.5;else{let d=Math.max(s.near,$d.distanceToPoint($i.origin));c=sE(s,d,l.resolution)}if($d.radius+=c,$i.intersectsSphere($d)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Qd.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=ya*.5;else{let d=Math.max(s.near,Qd.distanceToPoint($i.origin));h=sE(s,d,l.resolution)}Qd.expandByScalar(h),$i.intersectsBox(Qd)!==!1&&(i?bU(this,n):MU(this,s,n))}onBeforeRender(t){let n=this.material.uniforms;n&&n.resolution&&(t.getViewport(M_),this.material.uniforms.resolution.value.set(M_.z,M_.w))}};var xa=class extends ll{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let n=t.length-3,i=new Float32Array(2*n);for(let s=0;s<n;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setPositions(i),this}setColors(t){let n=t.length-3,i=new Float32Array(2*n);for(let s=0;s<n;s+=3)i[2*s]=t[s],i[2*s+1]=t[s+1],i[2*s+2]=t[s+2],i[2*s+3]=t[s+3],i[2*s+4]=t[s+4],i[2*s+5]=t[s+5];return super.setColors(i),this}setFromPoints(t){let n=t.length-1,i=new Float32Array(6*n);for(let s=0;s<n;s++)i[6*s]=t[s].x,i[6*s+1]=t[s].y,i[6*s+2]=t[s].z||0,i[6*s+3]=t[s+1].x,i[6*s+4]=t[s+1].y,i[6*s+5]=t[s+1].z||0;return super.setPositions(i),this}fromLine(t){let n=t.geometry;return this.setPositions(n.attributes.position.array),this}};var ep=class extends tp{constructor(t=new xa,n=new wr({color:Math.random()*16777215})){super(t,n),this.isLine2=!0,this.type="Line2"}};var Sa=class e{static hex2Array(t,n=1){let{r:i,g:s,b:r,a}=e.hex2rgb(t,n,"RGBObject");return[i/255,s/255,r/255,a??0]}static hex2rgb(t,n=1,i="string"){let s,r,a;return typeof t=="string"?(t.charAt(0)==="#"&&(t=t.substring(1)),t.length===3&&(t=t.substring(0,1)+t.substring(0,1)+t.substring(1,2)+t.substring(1,2)+t.substring(2,3)+t.substring(2,3)),s=t.charAt(0)+t.charAt(1),r=t.charAt(2)+t.charAt(3),a=t.charAt(4)+t.charAt(5),s=parseInt(s,16),r=parseInt(r,16),a=parseInt(a,16)):(s=t>>16&255,r=t>>8&255,a=t&255),i==="RGBObject"?{r:s,g:r,b:a,a:n}:n===1?`rgb(${s}, ${r}, ${a})`:`rgba(${s}, ${r}, ${a}, ${n})`}static getRandomColor(){return Math.round(Math.random()*16777215)}};var lu=class e{static{this.tempV2=new Ft}static{this._raycaster=new Qc}static{this._plane={q:new O(0,0,0),n:new O(0,0,1)}}static domCoordinatesToNDC(t,n,i){return{x:(t/i.offsetWidth-.5)*2,y:-(n/i.offsetHeight-.5)*2}}static domCoordinatesToWorldCoordinates(t,n,i,s,r){let a=e.domCoordinatesToNDC(t,n,s);return e.NDCtoWorldCoordinates(a.x,a.y,i,r)}static NDCtoWorldCoordinates(t,n,i,s){this.tempV2.set(t,n),e._raycaster.setFromCamera(this.tempV2,s);let r=e._raycaster.ray,a=e._plane;a.q.setZ(i);let o=a.n.dot(a.q.clone().sub(r.origin))/a.n.dot(r.direction);if(o<0)return null;let l=r.origin.add(r.direction.multiplyScalar(o));return{x:l.x,y:l.y,z:i}}};var rE="drawingCursor",EU=new Zi(.5,.5,.5),np=class extends Ar{constructor(){super(...arguments);this._shapeObjects=[];this._isDrawing=!1;this._isEnabled=!1;this._shouldExtendLastLine=!1;this._lastCursorPosition=null;this.onPointerDown=n=>{if(!this._isDrawing){this._isDrawing=!0;let i=lu.domCoordinatesToWorldCoordinates(n.clientX,n.clientY,0,this._sceneManager.domElement,this._sceneManager.camera),s=[new Ft(i.x,i.y)],r=new xa;r.setFromPoints(s);let a=Sa.getRandomColor(),o=new wr({color:a}),l=new ep(r,o);this._sceneManager.scene.add(l);let c=this.calculateMidPointOfLine(s),h=new We(EU,new ca({color:a}));h.position.setX(c.x),h.position.setY(c.y);let d={points:s,line:l,box:h};this._sceneManager.scene.add(h),this._shapeObjects.push(d),this._sceneManager.needsRender=!0}};this.onPointerMove=n=>{if(this._isDrawing){let i=lu.domCoordinatesToWorldCoordinates(n.clientX,n.clientY,0,this._sceneManager.domElement,this._sceneManager.camera);(this._lastCursorPosition?.x!==i.x||this._lastCursorPosition.y!==i.y)&&(this._lastCursorPosition=new Ft(i.x,i.y),this._shouldExtendLastLine=!0)}};this.onPointerUp=n=>{this._isDrawing&&(this._isDrawing=!1,this._lastCursorPosition=null,this._shouldExtendLastLine=!1)}}calculateMidPointOfLine(n){if(n.length===0)return new Ft(0,0);if(n.length%2===1)return n[(n.length-1)/2];{let i=n[n.length/2-1],s=n[n.length/2];return new Ft((i.x+s.x)/2,(i.y+s.y)/2)}}addEventListeners(){this._sceneManager.domElement.addEventListener("pointerdown",this.onPointerDown),this._sceneManager.domElement.addEventListener("pointermove",this.onPointerMove),this._sceneManager.domElement.addEventListener("pointerup",this.onPointerUp)}removeEventListeners(){this._sceneManager.domElement.removeEventListener("pointerdown",this.onPointerDown),this._sceneManager.domElement.removeEventListener("pointermove",this.onPointerMove),this._sceneManager.domElement.removeEventListener("pointerup",this.onPointerUp)}update(n){if(this._isDrawing&&this._shouldExtendLastLine){this._shouldExtendLastLine=!1;let i=this._shapeObjects[this._shapeObjects.length-1];if(i){let s=i.points;s.push(this._lastCursorPosition);let r=this.calculateMidPointOfLine(s);i.box.position.setX(r.x),i.box.position.setY(r.y),i.line.geometry.dispose(),i.line.geometry=new xa,i.line.geometry.setFromPoints(s),this._sceneManager.needsRender=!0}}}enable(){this._isEnabled||(this._sceneManager?.domElement.classList.add(rE),this._isEnabled=!0,this._sceneManager.controls.deactivate(),this.addEventListeners(),this._sceneManager.camera.position.set(0,0,10),this._sceneManager.camera.lookAt(0,0,0),this._sceneManager.needsRender=!0)}disable(){if(this._isEnabled){this._sceneManager?.domElement.classList.remove(rE),this.removeEventListeners();for(let n of this._shapeObjects)this._sceneManager.scene.remove(n.line),this._sceneManager.scene.remove(n.box),n.line.geometry.dispose(),n.line.material.dispose();this._shapeObjects.length=0,this._isEnabled=!1}}};var ip=class e extends Xc{static{this._vertexShader=`precision highp float;precision highp int;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 modelMatrix;uniform mat4 viewMatrix;uniform mat4 projectionMatrix;uniform float time;varying vec2 vUv;varying vec3 vNormal;varying vec3 vPosition;void main() { vUv = uv;vec3 finalPos = vec3(position);finalPos.z = 0.2 * sin(finalPos.x + finalPos.y + time);vNormal = normalize(mat3(modelMatrix) * normal);vec4 worldPos = modelMatrix * vec4(finalPos, 1.0);vPosition = worldPos.xyz;gl_Position = projectionMatrix * viewMatrix * worldPos;}`}static{this._fragmentShader=`precision highp float;precision highp int;varying vec2 vUv;varying vec3 vNormal;varying vec3 vPosition;uniform vec3 color;uniform vec3 lightPosition;uniform vec3 viewPosition;void main() { vec3 N = normalize(vNormal);vec3 L = normalize(lightPosition - vPosition);float lambertian = max(dot(N, L), 0.0);vec3 V = normalize(viewPosition - vPosition);vec3 R = reflect(-L, N);float specAngle = max(dot(R, V), 0.0);float specular = pow(specAngle, 16.0);vec3 finalColor = color * lambertian + vec3(1.0) * specular * 0.5;gl_FragColor = vec4(finalColor, 1.0);}`}constructor(t,n=Ci){super({uniforms:{color:{value:Sa.hex2Array(t).slice(0,3)},time:{value:0}},side:n,vertexShader:e._vertexShader,fragmentShader:e._fragmentShader})}getArrayFromColor(t){return Sa.hex2Array(t).slice(0,3)}setColor(t){this.uniforms.color.value=this.getArrayFromColor(t)}setTime(t){this.uniforms.time.value=t}};var sp=class extends Ar{constructor(){super(...arguments);this._plane=new We(new la(8,8,64,64),new ip(39406,mi))}init(n){super.init(n),this._plane.material.uniforms.lightPosition={value:new O(1,5,-1)},this._plane.lookAt(new O(0,1,0))}update(n,i){this._plane.material.uniforms.time={value:i/1e3},this._plane.material.uniforms.viewPosition={value:this._sceneManager.camera.position},this._sceneManager.needsRender=!0}enable(){this._sceneManager.controls.activate(),this._sceneManager.scene.add(this._plane)}disable(){this._sceneManager.scene.remove(this._plane)}};var ba=[new jd("Cube"),new sp("Wave"),new np("Drawing")];var rp=class{constructor(t){this._activeTask=ba[0];this._normalizedCameraPosition=[0,0,1];this._prevTimeStamp=0;this._timeStamp=0;this._deltaFrame=1e3;this.needsRender=!0;this.onWindowResize=()=>{this._canvas.width=0,this._canvas.height=0;let t=window.innerWidth,n=window.innerHeight;this._renderer.setSize(t,n),this._camera.aspect=t/n,this._camera.updateProjectionMatrix()};this.onContextLost=async t=>{t.preventDefault(),await Zd.open("Unfortunately WebGL has crashed. Please reload the page to continue!")};this.update=t=>{this._timeStamp=performance.now(),this._deltaFrame=this._timeStamp-this._prevTimeStamp,this._activeTask.update(this._deltaFrame,this._timeStamp),this._prevTimeStamp=this._timeStamp,this.needsRender=al.updateActiveOnes(this._timeStamp)||this.needsRender,this.needsRender&&(this._controls.isEnabled&&(this._normalizedCameraPosition=this._controls.update(),this._camera.position.set(this._normalizedCameraPosition[0]*this._distance.value,this._normalizedCameraPosition[1]*this._distance.value,this._normalizedCameraPosition[2]*this._distance.value),this._camera.lookAt(0,0,0)),this._renderer.render(this._scene,this._camera),this.needsRender=!1)};this.animate=t=>{this.update(t),this._renderer.setAnimationLoop(this.update)};this._canvas=document.createElement("canvas"),t.appendChild(this._canvas),this._domElement=t,this._scene=new Hc,this._camera=new mn(60,window.innerWidth/window.innerHeight,.05,70),this._distance=new va(this,10,10,1,100,0,_i.ANIMATION_DURATION),this._controls=new Kd(this),this._renderer=new Wd({canvas:this._canvas,antialias:!0})}init(){this.initLights(),this.initControls(),this.initRenderer(),this.initTasks(),this.onWindowResize(),this.animate(0)}initLights(){let t=new jc(16777215,.3),n=new Kc(16777215,.8);n.position.set(.5,0,.866);let i=new Yc(16777215,526368,.75);this._scene.add(t,n,i)}initControls(){this._controls.activate()}initTasks(){ba.forEach(t=>t.init(this))}switchToTask(t){this._activeTask.disable(),this._activeTask=t,this._activeTask.enable(),this.needsRender=!0}initRenderer(){this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setClearColor(15530239),this._canvas.addEventListener("webglcontextlost",this.onContextLost),window.addEventListener("resize",this.onWindowResize)}get scene(){return this._scene}get controls(){return this._controls}get camera(){return this._camera}get domElement(){return this._domElement}get timeStamp(){return this._timeStamp}get deltaFrame(){return this._deltaFrame}get distance(){return this._distance}};var uu=Ns(cu(),1),cE=e=>{let{rootElement:t}=e,n=(0,Ma.useRef)(null),[i,s]=(0,Ma.useState)(ba[0]);return(0,Ma.useEffect)(()=>{n.current=new rp(t),n.current.init()},[t]),(0,Ma.useEffect)(()=>{if(n.current){let r=ba.indexOf(i);n.current.switchToTask(i),console.log(`Switched to task ${r+1}`)}},[i]),(0,uu.jsx)(CU,{children:(0,uu.jsx)(wU,{children:ba.map((r,a)=>(0,uu.jsxs)("button",{className:r===i?"active":"",onMouseDown:()=>s(r),onTouchStart:()=>s(r),children:["Task ",a+1]},r.name))})})},wU=sf.div`
	display: flex;
	gap: 8px;

	button {
		cursor: pointer;
		background-color: #3a75ff;
		color: white;
		padding: 10px 20px;
		border-radius: 5px;
		border: none;
		box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.25);
		&:hover {
			background-color: #335fcc;
		}

		&.active {
			background-color: #254a99;
		}
	}
`,CU=sf.div`
	position: absolute;
	top: 16px;
	width: 100%;
	display: flex;
	justify-content: center;
`;var fE=Ns(cu(),1),hE=document.getElementById("playGround"),RU=uE.createRoot(hE);RU.render((0,fE.jsx)(cE,{rootElement:hE}));
/*! Bundled license information:

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.js:
  (**
   * @license React
   * react-jsx-runtime.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
