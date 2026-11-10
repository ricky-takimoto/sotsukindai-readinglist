(()=>{var $o=()=>{};var lr={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};var p=function(n,e){if(!n)throw Be(e)},Be=function(n){return new Error("Firebase Database ("+lr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};var qo=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},bu=function(n){let e=[],t=0,i=0;for(;t<n.length;){let r=n[t++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){let s=n[t++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){let s=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{let s=n[t++],o=n[t++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();let t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<n.length;r+=3){let s=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,l=c?n[r+2]:0,d=s>>2,u=(s&3)<<4|a>>4,h=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(h=64)),i.push(t[d],t[u],t[h],t[_])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):bu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();let t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<n.length;){let s=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;let l=r<n.length?t[n.charAt(r)]:64;++r;let u=r<n.length?t[n.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new ur;let h=s<<2|a>>4;if(i.push(h),l!==64){let _=a<<4&240|l>>2;if(i.push(_),u!==64){let m=l<<6&192|u;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},ur=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},hr=function(n){let e=qo(n);return Pn.encodeByteArray(e,!0)},Lt=function(n){return hr(n).replace(/\./g,"")},lt=function(n){try{return Pn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Ko(n){return Yo(void 0,n)}function Yo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:let t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(let t in e)!e.hasOwnProperty(t)||!Tu(t)||(n[t]=Yo(n[t],e[t]));return n}function Tu(n){return n!=="__proto__"}function Cu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Su=()=>Cu().__FIREBASE_DEFAULTS__,Au=()=>{if(typeof process>"u"||typeof process.env>"u")return;let n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ru=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=n&&lt(n[1]);return e&&JSON.parse(e)},fr=()=>{try{return $o()||Su()||Au()||Ru()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},pr=n=>{var e,t;return(t=(e=fr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Jo=n=>{let e=pr(n);if(!e)return;let t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},_r=()=>{var n;return(n=fr())===null||n===void 0?void 0:n.config},mr=n=>{var e;return(e=fr())===null||e===void 0?void 0:e[`_${n}`]};var $=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}};function Ee(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nn(n){return(await fetch(n,{credentials:"include"})).ok}function Qo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let t={alg:"none",type:"JWT"},i=e||"demo-project",r=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Lt(JSON.stringify(t)),Lt(JSON.stringify(o)),""].join(".")}var xt={};function ku(){let n={prod:[],emulator:[]};for(let e of Object.keys(xt))xt[e]?n.emulator.push(e):n.prod.push(e);return n}function Pu(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}var zo=!1;function On(n,e){if(typeof window>"u"||typeof document>"u"||!Ee(window.location.host)||xt[n]===e||xt[n]||zo)return;xt[n]=e;function t(h){return`__firebase__banner__${h}`}let i="__firebase__banner",s=ku().prod.length>0;function o(){let h=document.getElementById(i);h&&h.remove()}function a(h){h.style.display="flex",h.style.background="#7faaf0",h.style.position="fixed",h.style.bottom="5px",h.style.left="5px",h.style.padding=".5em",h.style.borderRadius="5px",h.style.alignItems="center"}function c(h,_){h.setAttribute("width","24"),h.setAttribute("id",_),h.setAttribute("height","24"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill","none"),h.style.marginLeft="-6px"}function l(){let h=document.createElement("span");return h.style.cursor="pointer",h.style.marginLeft="16px",h.style.fontSize="24px",h.innerHTML=" &times;",h.onclick=()=>{zo=!0,o()},h}function d(h,_){h.setAttribute("id",_),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline"}function u(){let h=Pu(i),_=t("text"),m=document.getElementById(_)||document.createElement("span"),E=t("learnmore"),R=document.getElementById(E)||document.createElement("a"),q=t("preprendIcon"),K=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(h.created){let Z=h.element;a(Z),d(R,E);let ct=l();c(K,q),Z.append(K,m,R,ct),document.body.appendChild(Z)}s?(m.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,m.innerText="Preview backend running in this workspace."),m.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}function U(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mt(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function Xo(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zo(){let n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Dn(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ea(){let n=U();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oe(){return lr.NODE_CLIENT===!0||lr.NODE_ADMIN===!0}function ta(){try{return typeof indexedDB=="object"}catch{return!1}}function na(){return new Promise((n,e)=>{try{let t=!0,i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}var Nu="FirebaseError",ee=class n extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Nu,Object.setPrototypeOf(this,n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_e.prototype.create)}},_e=class{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){let i=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?Ou(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ee(r,a,i)}};function Ou(n,e){return n.replace(Du,(t,i)=>{let r=e[i];return r!=null?String(r):`<${i}?>`})}var Du=/\{\$([^}]+)}/g;function ut(n){return JSON.parse(n)}function D(n){return JSON.stringify(n)}var ia=function(n){let e={},t={},i={},r="";try{let s=n.split(".");e=ut(lt(s[0])||""),t=ut(lt(s[1])||""),r=s[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:r}};var ra=function(n){let e=ia(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},sa=function(n){let e=ia(n).claims;return typeof e=="object"&&e.admin===!0};function te(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function je(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function dt(n){for(let e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ft(n,e,t){let i={};for(let r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=e.call(t,n[r],r,n));return i}function ae(n,e){if(n===e)return!0;let t=Object.keys(n),i=Object.keys(e);for(let r of t){if(!i.includes(r))return!1;let s=n[r],o=e[r];if(Go(s)&&Go(o)){if(!ae(s,o))return!1}else if(s!==o)return!1}for(let r of i)if(!t.includes(r))return!1;return!0}function Go(n){return n!==null&&typeof n=="object"}function be(n){let e=[];for(let[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ht(n){let e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){let[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function ft(n){let e=n.indexOf("?");if(!e)return"";let t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}var kn=class{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);let i=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)i[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)i[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){let h=i[u-3]^i[u-8]^i[u-14]^i[u-16];i[u]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,d;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(o^a),d=1518500249):(l=s^o^a,d=1859775393):u<60?(l=s&o|a&(s|o),d=2400959708):(l=s^o^a,d=3395469782);let h=(r<<5|r>>>27)+l+c+d+i[u]&4294967295;c=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);let i=t-this.blockSize,r=0,s=this.buf_,o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=i;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<t;)if(s[o]=e[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){let e=[],t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[i]=this.chain_[r]>>s&255,++i;return e}};function oa(n,e){let t=new dr(n,e);return t.subscribe.bind(t)}var dr=class{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let r;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");xu(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:i},r.next===void 0&&(r.next=cr),r.error===void 0&&(r.error=cr),r.complete===void 0&&(r.complete=cr);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function xu(n,e){if(typeof n!="object"||n===null)return!1;for(let t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function cr(){}function $e(n,e){return`${n} failed: ${e} argument `}var aa=function(n){let e=[],t=0;for(let i=0;i<n.length;i++){let r=n.charCodeAt(i);if(r>=55296&&r<=56319){let s=r-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");let o=n.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ut=function(n){let e=0;for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};var Rm=4*60*60*1e3;function L(n){return n&&n._delegate?n._delegate:n}var Y=class{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var ze="[DEFAULT]";var xn=class{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let i=new $;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let i=this.normalizeInstanceIdentifier(e?.identifier),r=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mu(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(let[t,i]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(t);try{let s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:i,options:t});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,t){var i;let r=this.normalizeInstanceIdentifier(t),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);let o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){let i=this.onInitCallbacks.get(t);if(i)for(let r of i)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Lu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Lu(n){return n===ze?void 0:n}function Mu(n){return n.instantiationMode==="EAGER"}var Wt=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new xn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}};var Fu=[],C;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(C||(C={}));var Uu={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Wu=C.INFO,Vu={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Hu=(n,e,...t)=>{if(e<n.logLevel)return;let i=new Date().toISOString(),r=Vu[e];if(r)console[r](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Te=class{constructor(e){this.name=e,this._logLevel=Wu,this._logHandler=Hu,this._userLogHandler=null,Fu.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}};var Bu=(n,e)=>e.some(t=>n instanceof t),ca,la;function ju(){return ca||(ca=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $u(){return la||(la=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ua=new WeakMap,vr=new WeakMap,da=new WeakMap,gr=new WeakMap,Ir=new WeakMap;function zu(n){let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ce(n.result)),r()},o=()=>{i(n.error),r()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ua.set(t,n)}).catch(()=>{}),Ir.set(e,n),e}function Gu(n){if(vr.has(n))return;let e=new Promise((t,i)=>{let r=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});vr.set(n,e)}var yr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||da.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ce(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ha(n){yr=n(yr)}function qu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let i=n.call(Ln(this),e,...t);return da.set(i,e.sort?e.sort():[e]),ce(i)}:$u().includes(n)?function(...e){return n.apply(Ln(this),e),ce(ua.get(this))}:function(...e){return ce(n.apply(Ln(this),e))}}function Ku(n){return typeof n=="function"?qu(n):(n instanceof IDBTransaction&&Gu(n),Bu(n,ju())?new Proxy(n,yr):n)}function ce(n){if(n instanceof IDBRequest)return zu(n);if(gr.has(n))return gr.get(n);let e=Ku(n);return e!==n&&(gr.set(n,e),Ir.set(e,n)),e}var Ln=n=>Ir.get(n);function pa(n,e,{blocked:t,upgrade:i,blocking:r,terminated:s}={}){let o=indexedDB.open(n,e),a=ce(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ce(o.result),c.oldVersion,c.newVersion,ce(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}var Yu=["get","getKey","getAll","getAllKeys","count"],Ju=["put","add","delete","clear"],wr=new Map;function fa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wr.get(e))return wr.get(e);let t=e.replace(/FromIndex$/,""),i=e!==t,r=Ju.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Yu.includes(t)))return;let s=async function(o,...a){let c=this.transaction(o,r?"readwrite":"readonly"),l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),r&&c.done]))[0]};return wr.set(e,s),s}ha(n=>({...n,get:(e,t,i)=>fa(e,t)||n.get(e,t,i),has:(e,t)=>!!fa(e,t)||n.has(e,t)}));var br=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Qu(t)){let i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}};function Qu(n){let e=n.getComponent();return e?.type==="VERSION"}var Tr="@firebase/app",_a="0.13.2";var me=new Te("@firebase/app"),Xu="@firebase/app-compat",Zu="@firebase/analytics-compat",ed="@firebase/analytics",td="@firebase/app-check-compat",nd="@firebase/app-check",id="@firebase/auth",rd="@firebase/auth-compat",sd="@firebase/database",od="@firebase/data-connect",ad="@firebase/database-compat",cd="@firebase/functions",ld="@firebase/functions-compat",ud="@firebase/installations",dd="@firebase/installations-compat",hd="@firebase/messaging",fd="@firebase/messaging-compat",pd="@firebase/performance",_d="@firebase/performance-compat",md="@firebase/remote-config",gd="@firebase/remote-config-compat",vd="@firebase/storage",yd="@firebase/storage-compat",Id="@firebase/firestore",wd="@firebase/ai",Ed="@firebase/firestore-compat",bd="firebase",Td="11.10.0";var Cr="[DEFAULT]",Cd={[Tr]:"fire-core",[Xu]:"fire-core-compat",[ed]:"fire-analytics",[Zu]:"fire-analytics-compat",[nd]:"fire-app-check",[td]:"fire-app-check-compat",[id]:"fire-auth",[rd]:"fire-auth-compat",[sd]:"fire-rtdb",[od]:"fire-data-connect",[ad]:"fire-rtdb-compat",[cd]:"fire-fn",[ld]:"fire-fn-compat",[ud]:"fire-iid",[dd]:"fire-iid-compat",[hd]:"fire-fcm",[fd]:"fire-fcm-compat",[pd]:"fire-perf",[_d]:"fire-perf-compat",[md]:"fire-rc",[gd]:"fire-rc-compat",[vd]:"fire-gcs",[yd]:"fire-gcs-compat",[Id]:"fire-fst",[Ed]:"fire-fst-compat",[wd]:"fire-vertex","fire-js":"fire-js",[bd]:"fire-js-all"};var Mn=new Map,Sd=new Map,Sr=new Map;function ma(n,e){try{n.container.addComponent(e)}catch(t){me.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Se(n){let e=n.name;if(Sr.has(e))return me.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,n);for(let t of Mn.values())ma(t,n);for(let t of Sd.values())ma(t,n);return!0}function Ht(n,e){let t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function G(n){return n==null?!1:n.settings!==void 0}var Ad={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ce=new _e("app","Firebase",Ad);var Ar=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Y("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}};var Ae=Td;function Pr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});let i=Object.assign({name:Cr,automaticDataCollectionEnabled:!0},e),r=i.name;if(typeof r!="string"||!r)throw Ce.create("bad-app-name",{appName:String(r)});if(t||(t=_r()),!t)throw Ce.create("no-options");let s=Mn.get(r);if(s){if(ae(t,s.options)&&ae(i,s.config))return s;throw Ce.create("duplicate-app",{appName:r})}let o=new Wt(r);for(let c of Sr.values())o.addComponent(c);let a=new Ar(t,i,o);return Mn.set(r,a),a}function Fn(n=Cr){let e=Mn.get(n);if(!e&&n===Cr&&_r())return Pr();if(!e)throw Ce.create("no-app",{appName:n});return e}function ne(n,e,t){var i;let r=(i=Cd[n])!==null&&i!==void 0?i:n;t&&(r+=`-${t}`);let s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),me.warn(a.join(" "));return}Se(new Y(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var Rd="firebase-heartbeat-database",kd=1,Vt="firebase-heartbeat-store",Er=null;function Ia(){return Er||(Er=pa(Rd,kd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ce.create("idb-open",{originalErrorMessage:n.message})})),Er}async function Pd(n){try{let t=(await Ia()).transaction(Vt),i=await t.objectStore(Vt).get(wa(n));return await t.done,i}catch(e){if(e instanceof ee)me.warn(e.message);else{let t=Ce.create("idb-get",{originalErrorMessage:e?.message});me.warn(t.message)}}}async function ga(n,e){try{let i=(await Ia()).transaction(Vt,"readwrite");await i.objectStore(Vt).put(e,wa(n)),await i.done}catch(t){if(t instanceof ee)me.warn(t.message);else{let i=Ce.create("idb-set",{originalErrorMessage:t?.message});me.warn(i.message)}}}function wa(n){return`${n.name}!${n.options.appId}`}var Nd=1024,Od=30,Rr=class{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new kr(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=va();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>Od){let o=xd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){me.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=va(),{heartbeatsToSend:i,unsentEntries:r}=Dd(this._heartbeatsCache.heartbeats),s=Lt(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return me.warn(t),""}}};function va(){return new Date().toISOString().substring(0,10)}function Dd(n,e=Nd){let t=[],i=n.slice();for(let r of n){let s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ya(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),ya(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}var kr=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ta()?na().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let t=await Pd(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return ga(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function ya(n){return Lt(JSON.stringify({version:2,heartbeats:n})).length}function xd(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}function Ld(n){Se(new Y("platform-logger",e=>new br(e),"PRIVATE")),Se(new Y("heartbeat",e=>new Rr(e),"PRIVATE")),ne(Tr,_a,n),ne(Tr,_a,"esm2017"),ne("fire-js","")}Ld("");var Md="firebase",Fd="11.10.0";ne(Md,Fd,"app");function Un(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function Va(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Ha=Va,Ba=new _e("auth","Firebase",Va());var zn=new Te("@firebase/auth");function Ud(n,...e){zn.logLevel<=C.WARN&&zn.warn(`Auth (${Ae}): ${n}`,...e)}function Vn(n,...e){zn.logLevel<=C.ERROR&&zn.error(`Auth (${Ae}): ${n}`,...e)}function ie(n,...e){throw ts(n,...e)}function ue(n,...e){return ts(n,...e)}function ja(n,e,t){let i=Object.assign(Object.assign({},Ha()),{[e]:t});return new _e("auth","Firebase",i).create(e,{appName:n.name})}function Pe(n){return ja(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ts(n,...e){if(typeof n!="string"){let t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ba.create(n,...e)}function g(n,e,...t){if(!n)throw ts(e,...t)}function le(n){let e="INTERNAL ASSERTION FAILED: "+n;throw Vn(e),new Error(e)}function ve(n,e){n||le(e)}function Mr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Wd(){return Ea()==="http:"||Ea()==="https:"}function Ea(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}function Vd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wd()||Zo()||"connection"in navigator)?navigator.onLine:!0}function Hd(){if(typeof navigator>"u")return null;let n=navigator;return n.languages&&n.languages[0]||n.language||null}var Ge=class{constructor(e,t){this.shortDelay=e,this.longDelay=t,ve(t>e,"Short delay should be less than long delay!"),this.isMobile=Mt()||Dn()}get(){return Vd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function ns(n,e){ve(n.emulator,"Emulator should always be set here");let{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}var Gn=class{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var Bd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var jd=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$d=new Ge(3e4,6e4);function x(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function W(n,e,t,i,r={}){return $a(n,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});let a=be(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);let l=Object.assign({method:e,headers:c},s);return Xo()||(l.referrerPolicy="no-referrer"),n.emulatorConfig&&Ee(n.emulatorConfig.host)&&(l.credentials="include"),Gn.fetch()(await za(n,n.config.apiHost,t,a),l)})}async function $a(n,e,t){n._canInitEmulator=!1;let i=Object.assign(Object.assign({},Bd),e);try{let r=new Fr(n),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw jt(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jt(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jt(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw jt(n,"user-disabled",o);let d=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ja(n,d,l);ie(n,d)}}catch(r){if(r instanceof ee)throw r;ie(n,"network-request-failed",{message:String(r)})}}async function Ne(n,e,t,i,r={}){let s=await W(n,e,t,i,r);return"mfaPendingCredential"in s&&ie(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function za(n,e,t,i){let r=`${e}${t}?${i}`,s=n,o=s.config.emulator?ns(n.config,r):`${n.config.apiScheme}://${r}`;return jd.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function zd(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Fr=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ue(this.auth,"network-request-failed")),$d.get())})}};function jt(n,e,t){let i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);let r=ue(n,e,i);return r.customData._tokenResponse=t,r}function ba(n){return n!==void 0&&n.enterprise!==void 0}var qn=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zd(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function Ga(n,e){return W(n,"GET","/v2/recaptchaConfig",x(n,e))}async function Gd(n,e){return W(n,"POST","/v1/accounts:delete",e)}async function Kn(n,e){return W(n,"POST","/v1/accounts:lookup",e)}function $t(n){if(n)try{let e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qa(n,e=!1){let t=L(n),i=await t.getIdToken(e),r=is(i);g(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");let s=typeof r.firebase=="object"?r.firebase:void 0,o=s?.sign_in_provider;return{claims:r,token:i,authTime:$t(Nr(r.auth_time)),issuedAtTime:$t(Nr(r.iat)),expirationTime:$t(Nr(r.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Nr(n){return Number(n)*1e3}function is(n){let[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Vn("JWT malformed, contained fewer than 3 sections"),null;try{let r=lt(t);return r?JSON.parse(r):(Vn("Failed to decode base64 JWT payload"),null)}catch(r){return Vn("Caught error parsing JWT payload as JSON",r?.toString()),null}}function Ta(n){let e=is(n);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Kt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ee&&qd(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function qd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}var Ur=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){let i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;let r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var Yt=class{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$t(this.lastLoginAt),this.creationTime=$t(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function Yn(n){var e;let t=n.auth,i=await n.getIdToken(),r=await Kt(n,Kn(t,{idToken:i}));g(r?.users.length,t,"internal-error");let s=r.users[0];n._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ya(s.providerUserInfo):[],a=Kd(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!a?.length,d=c?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Yt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,u)}async function Ka(n){let e=L(n);await Yn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kd(n,e){return[...n.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Ya(n){return n.map(e=>{var{providerId:t}=e,i=Un(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}async function Yd(n,e){let t=await $a(n,{},async()=>{let i=be({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=n.config,o=await za(n,r,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:a,body:i};return n.emulatorConfig&&Ee(n.emulatorConfig.host)&&(c.credentials="include"),Gn.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jd(n,e){return W(n,"POST","/v2/accounts:revokeToken",x(n,e))}var zt=class n{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");let t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ta(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){g(e.length!==0,"internal-error");let t=Ta(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:i,refreshToken:r,expiresIn:s}=await Yd(e,t);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){let{refreshToken:i,accessToken:r,expirationTime:s}=t,o=new n;return i&&(g(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(g(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(g(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new n,this.toJSON())}_performRefresh(){return le("not implemented")}};function Re(n,e){g(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}var ke=class n{constructor(e){var{uid:t,auth:i,stsTokenManager:r}=e,s=Un(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ur(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yt(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let t=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return qa(this,e)}reload(){return Ka(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Yn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(G(this.auth.app))return Promise.reject(Pe(this.auth));let e=await this.getIdToken();return await Kt(this,Gd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,r,s,o,a,c,l,d;let u=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(r=t.email)!==null&&r!==void 0?r:void 0,_=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,E=(a=t.tenantId)!==null&&a!==void 0?a:void 0,R=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,q=(l=t.createdAt)!==null&&l!==void 0?l:void 0,K=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Z,emailVerified:ct,isAnonymous:Bo,providerData:or,stsTokenManager:jo}=t;g(Z&&jo,e,"internal-error");let wu=zt.fromJSON(this.name,jo);g(typeof Z=="string",e,"internal-error"),Re(u,e.name),Re(h,e.name),g(typeof ct=="boolean",e,"internal-error"),g(typeof Bo=="boolean",e,"internal-error"),Re(_,e.name),Re(m,e.name),Re(E,e.name),Re(R,e.name),Re(q,e.name),Re(K,e.name);let ar=new n({uid:Z,auth:e,email:h,emailVerified:ct,displayName:u,isAnonymous:Bo,photoURL:m,phoneNumber:_,tenantId:E,stsTokenManager:wu,createdAt:q,lastLoginAt:K});return or&&Array.isArray(or)&&(ar.providerData=or.map(Eu=>Object.assign({},Eu))),R&&(ar._redirectEventId=R),ar}static async _fromIdTokenResponse(e,t,i=!1){let r=new zt;r.updateFromServerResponse(t);let s=new n({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Yn(s),s}static async _fromGetAccountInfoResponse(e,t,i){let r=t.users[0];g(r.localId!==void 0,"internal-error");let s=r.providerUserInfo!==void 0?Ya(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!s?.length,a=new zt;a.updateFromIdToken(i);let c=new n({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Yt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!s?.length};return Object.assign(c,l),c}};var Ca=new Map;function ge(n){ve(n instanceof Function,"Expected a class definition");let e=Ca.get(n);return e?(ve(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ca.set(n,e),e)}var Jn=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}};Jn.type="NONE";var Wr=Jn;function Hn(n,e,t){return`firebase:${n}:${e}:${t}`}var Qn=class n{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;let{config:r,name:s}=this.auth;this.fullUserKey=Hn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Hn("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let t=await Kn(this.auth,{idToken:e}).catch(()=>{});return t?ke._fromGetAccountInfoResponse(this.auth,t,e):null}return ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new n(ge(Wr),e,i);let r=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l),s=r[0]||ge(Wr),o=Hn(i,e.config.apiKey,e.name),a=null;for(let l of t)try{let d=await l._get(o);if(d){let u;if(typeof d=="string"){let h=await Kn(e,{idToken:d}).catch(()=>{});if(!h)break;u=await ke._fromGetAccountInfoResponse(e,h,d)}else u=ke._fromJSON(e,d);l!==s&&(a=u),s=l;break}}catch{}let c=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new n(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new n(s,e,i))}};function Sa(n){let e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Za(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ja(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(tc(e))return"Blackberry";if(nc(e))return"Webos";if(Qa(e))return"Safari";if((e.includes("chrome/")||Xa(e))&&!e.includes("edge/"))return"Chrome";if(ec(e))return"Android";{let t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function Ja(n=U()){return/firefox\//i.test(n)}function Qa(n=U()){let e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xa(n=U()){return/crios\//i.test(n)}function Za(n=U()){return/iemobile/i.test(n)}function ec(n=U()){return/android/i.test(n)}function tc(n=U()){return/blackberry/i.test(n)}function nc(n=U()){return/webos/i.test(n)}function rs(n=U()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qd(n=U()){var e;return rs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xd(){return ea()&&document.documentMode===10}function ic(n=U()){return rs(n)||ec(n)||nc(n)||tc(n)||/windows phone/i.test(n)||Za(n)}function rc(n,e=[]){let t;switch(n){case"Browser":t=Sa(U());break;case"Worker":t=`${Sa(U())}-${n}`;break;default:t=n}let i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ae}/${i}`}var Vr=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let i=s=>new Promise((o,a)=>{try{let c=e(s);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);let r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(let r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}};async function Zd(n,e={}){return W(n,"GET","/v2/passwordPolicy",x(n,e))}var eh=6,Hr=class{constructor(e){var t,i,r,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:eh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,r,s,o,a;let c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){let i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Br=class{constructor(e,t,i,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xn(this),this.idTokenSubscription=new Xn(this),this.beforeStateQueue=new Vr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ba,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ge(t)),this._initializationPromise=this.queue(async()=>{var i,r,s;if(!this._deleted&&(this.persistenceManager=await Qn.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await Kn(this,{idToken:e}),i=await ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(G(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}let i=await this.assertedPersistence.getCurrentUser(),r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yn(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(G(this.app))return Promise.reject(Pe(this));let t=e?L(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return G(this.app)?Promise.reject(Pe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return G(this.app)?Promise.reject(Pe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await Zd(this),t=new Hr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _e("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Jd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){let i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&ge(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await Qn.create(this,[ge(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,r){if(this._deleted)return()=>{};let s=typeof t=="function"?t:t.next.bind(t),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){let c=e.addObserver(t,i,r);return()=>{o=!0,c()}}else{let c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);let r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(G(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Ud(`Error while retrieving App Check token: ${t.error}`),t?.token}};function Xe(n){return L(n)}var Xn=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=oa(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var mi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function th(n){mi=n}function sc(n){return mi.loadJS(n)}function nh(){return mi.recaptchaEnterpriseScript}function ih(){return mi.gapiScript}function oc(n){return`__${n}${Math.floor(Math.random()*1e6)}`}var jr=class{constructor(){this.enterprise=new $r}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}},$r=class{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}};var rh="recaptcha-enterprise",Gt="NO_RECAPTCHA",Zn=class{constructor(e){this.type=rh,this.auth=Xe(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Ga(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let l=new qn(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){let c=window.grecaptcha;ba(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gt)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new jr().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{i(this.auth).then(a=>{if(!t&&ba(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nh();c.length!==0&&(c+=a),sc(c).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}};async function Bt(n,e,t,i=!1,r=!1){let s=new Zn(n),o;if(r)o=Gt;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}let a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){let c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qt(n,e,t,i,r){var s,o;if(r==="EMAIL_PASSWORD_PROVIDER")if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let a=await Bt(n,e,t,t==="getOobCode");return i(n,a)}else return i(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let c=await Bt(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(a)});else if(r==="PHONE_PROVIDER")if(!((o=n._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){let a=await Bt(n,e,t);return i(n,a).catch(async c=>{var l;if(((l=n._getRecaptchaConfig())===null||l===void 0?void 0:l.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);let d=await Bt(n,e,t,!1,!0);return i(n,d)}return Promise.reject(c)})}else{let a=await Bt(n,e,t,!1,!0);return i(n,a)}else return Promise.reject(r+" provider is not supported.")}async function sh(n){let e=Xe(n),t=await Ga(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),i=new qn(t);e.tenantId==null?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,i.isAnyProviderEnabled()&&new Zn(e).verify()}function ac(n,e){let t=Ht(n,"auth");if(t.isInitialized()){let r=t.getImmediate(),s=t.getOptions();if(ae(s,e??{}))return r;ie(r,"already-initialized")}return t.initialize({options:e})}function oh(n,e){let t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(ge);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function cc(n,e,t){let i=Xe(n);g(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");let r=!!t?.disableWarnings,s=lc(e),{host:o,port:a}=ah(e),c=a===null?"":`:${a}`,l={url:`${s}//${o}${c}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!i._canInitEmulator){g(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),g(ae(l,i.config.emulator)&&ae(d,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=d,i.settings.appVerificationDisabledForTesting=!0,Ee(o)?(Nn(`${s}//${o}${c}`),On("Auth",!0)):r||ch()}function lc(n){let e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ah(n){let e=lc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};let i=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){let s=r[1];return{host:s,port:Aa(i.substr(s.length+1))}}else{let[s,o]=i.split(":");return{host:s,port:Aa(o)}}}function Aa(n){if(!n)return null;let e=Number(n);return isNaN(e)?null:e}function ch(){function n(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}var qe=class{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return le("not implemented")}_getIdTokenResponse(e){return le("not implemented")}_linkToIdToken(e,t){return le("not implemented")}_getReauthenticationResolver(e){return le("not implemented")}};async function lh(n,e){return W(n,"POST","/v1/accounts:signUp",e)}async function uh(n,e){return Ne(n,"POST","/v1/accounts:signInWithPassword",x(n,e))}async function dh(n,e){return Ne(n,"POST","/v1/accounts:signInWithEmailLink",x(n,e))}async function hh(n,e){return Ne(n,"POST","/v1/accounts:signInWithEmailLink",x(n,e))}var Jt=class n extends qe{constructor(e,t,i,r=null){super("password",i),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new n(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new n(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(e,t,"signInWithPassword",uh,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return dh(e,{email:this._email,oobCode:this._password});default:ie(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":let i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(e,i,"signUpPassword",lh,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hh(e,{idToken:t,email:this._email,oobCode:this._password});default:ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function pt(n,e){return Ne(n,"POST","/v1/accounts:signInWithIdp",x(n,e))}var fh="http://localhost",Ke=class n extends qe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=t,s=Un(t,["providerId","signInMethod"]);if(!i||!r)return null;let o=new n(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let t=this.buildRequest();return pt(e,t)}_linkToIdToken(e,t){let i=this.buildRequest();return i.idToken=t,pt(e,i)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,pt(e,t)}buildRequest(){let e={requestUri:fh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=be(t)}return e}};async function Ra(n,e){return W(n,"POST","/v1/accounts:sendVerificationCode",x(n,e))}async function ph(n,e){return Ne(n,"POST","/v1/accounts:signInWithPhoneNumber",x(n,e))}async function _h(n,e){let t=await Ne(n,"POST","/v1/accounts:signInWithPhoneNumber",x(n,e));if(t.temporaryProof)throw jt(n,"account-exists-with-different-credential",t);return t}var mh={USER_NOT_FOUND:"user-not-found"};async function gh(n,e){let t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ne(n,"POST","/v1/accounts:signInWithPhoneNumber",x(n,t),mh)}var Qt=class n extends qe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new n({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new n({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return ph(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return _h(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return gh(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:r}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!t&&!r&&!s?null:new n({verificationId:t,verificationCode:i,phoneNumber:r,temporaryProof:s})}};function vh(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yh(n){let e=ht(ft(n)).link,t=e?ht(ft(e)).deep_link_id:null,i=ht(ft(n)).deep_link_id;return(i?ht(ft(i)).link:null)||i||t||e||n}var ei=class n{constructor(e){var t,i,r,s,o,a;let c=ht(ft(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,d=(i=c.oobCode)!==null&&i!==void 0?i:null,u=vh((r=c.mode)!==null&&r!==void 0?r:null);g(l&&d&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=d,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){let t=yh(e);try{return new n(t)}catch{return null}}};var _t=class n{constructor(){this.providerId=n.PROVIDER_ID}static credential(e,t){return Jt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let i=ei.parseLink(t);return g(i,"argument-error"),Jt._fromEmailAndCode(e,i.code,i.tenantId)}};_t.PROVIDER_ID="password";_t.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_t.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var ti=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Ye=class extends ti{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Xt=class n extends Ye{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";var Zt=class n extends Ye{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return n.credential(t,i)}catch{return null}}};Zt.GOOGLE_SIGN_IN_METHOD="google.com";Zt.PROVIDER_ID="google.com";var en=class n extends Ye{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n.credential(e.oauthAccessToken)}catch{return null}}};en.GITHUB_SIGN_IN_METHOD="github.com";en.PROVIDER_ID="github.com";var tn=class n extends Ye{constructor(){super("twitter.com")}static credential(e,t){return Ke._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n.credentialFromTaggedObject(e)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return n.credential(t,i)}catch{return null}}};tn.TWITTER_SIGN_IN_METHOD="twitter.com";tn.PROVIDER_ID="twitter.com";async function Ih(n,e){return Ne(n,"POST","/v1/accounts:signUp",x(n,e))}var Je=class n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,r=!1){let s=await ke._fromIdTokenResponse(e,i,r),o=ka(i);return new n({user:s,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);let r=ka(i);return new n({user:e,providerId:r,_tokenResponse:i,operationType:t})}};function ka(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}async function ss(n){var e;if(G(n.app))return Promise.reject(Pe(n));let t=Xe(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Je({user:t.currentUser,providerId:null,operationType:"signIn"});let i=await Ih(t,{returnSecureToken:!0}),r=await Je._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(r.user),r}var zr=class n extends ee{constructor(e,t,i,r){var s;super(t.code,t.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,n.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,r){return new n(e,t,i,r)}};function uc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zr._fromErrorAndOperation(n,s,e,i):s})}async function wh(n,e,t=!1){let i=await Kt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Je._forOperation(n,"link",i)}async function Eh(n,e,t=!1){let{auth:i}=n;if(G(i.app))return Promise.reject(Pe(i));let r="reauthenticate";try{let s=await Kt(n,uc(i,r,e,n),t);g(s.idToken,i,"internal-error");let o=is(s.idToken);g(o,i,"internal-error");let{sub:a}=o;return g(n.uid===a,i,"user-mismatch"),Je._forOperation(n,r,s)}catch(s){throw s?.code==="auth/user-not-found"&&ie(i,"user-mismatch"),s}}async function bh(n,e,t=!1){if(G(n.app))return Promise.reject(Pe(n));let i="signIn",r=await uc(n,i,e),s=await Je._fromIdTokenResponse(n,i,r);return t||await n._updateCurrentUser(s.user),s}function dc(n,e,t,i){return L(n).onIdTokenChanged(e,t,i)}function hc(n,e,t){return L(n).beforeAuthStateChanged(e,t)}function os(n,e,t,i){return L(n).onAuthStateChanged(e,t,i)}function Pa(n,e){return W(n,"POST","/v2/accounts/mfaEnrollment:start",x(n,e))}function Th(n,e){return W(n,"POST","/v2/accounts/mfaEnrollment:finalize",x(n,e))}function Ch(n,e){return W(n,"POST","/v2/accounts/mfaEnrollment:start",x(n,e))}function Sh(n,e){return W(n,"POST","/v2/accounts/mfaEnrollment:finalize",x(n,e))}var ni="__sak";var ii=class{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ni,"1"),this.storage.removeItem(ni),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Ah=1e3,Rh=10,ri=class extends ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let i=this.storage.getItem(t),r=this.localCache[t];i!==r&&e(t,r,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let i=e.key;t?this.detachListener():this.stopPolling();let r=()=>{let o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Xd()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rh):r()}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ah)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}};ri.type="LOCAL";var fc=ri;var kh=1e3;function Or(n){var e,t;let i=n.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),r=RegExp(`${i}=([^;]+)`);return(t=(e=document.cookie.match(r))===null||e===void 0?void 0:e[1])!==null&&t!==void 0?t:null}function Dr(n){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${n.split(":")[3]}`}var Gr=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let t=new URL(`${window.location.origin}/__cookies__`);return t.searchParams.set("finalTarget",e),t}async _isAvailable(){var e;return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:(e=navigator.cookieEnabled)!==null&&e!==void 0?e:!0}async _set(e,t){}async _get(e){if(!this._isAvailable())return null;let t=Dr(e);if(window.cookieStore){let i=await window.cookieStore.get(t);return i?.value}return Or(t)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let i=Dr(e);document.cookie=`${i}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,t){if(!this._isAvailable())return;let i=Dr(e);if(window.cookieStore){let a=l=>{let d=l.changed.find(h=>h.name===i);d&&t(d.value),l.deleted.find(h=>h.name===i)&&t(null)},c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(t,c),window.cookieStore.addEventListener("change",a)}let r=Or(i),s=setInterval(()=>{let a=Or(i);a!==r&&(t(a),r=a)},kh),o=()=>clearInterval(s);this.listenerUnsubscribes.set(t,o)}_removeListener(e,t){let i=this.listenerUnsubscribes.get(t);i&&(i(),this.listenerUnsubscribes.delete(t))}};Gr.type="COOKIE";var si=class extends ii{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}};si.type="SESSION";var as=si;function Ph(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}var oi=class n{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;let i=new n(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let t=e,{eventId:i,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:r});let a=Array.from(o).map(async l=>l(t.origin,s)),c=await Ph(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};oi.receivers=[];function cs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}var qr=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){let r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{let l=cs("",20);r.port1.start();let d=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(u){let h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(d),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function de(){return window}function Nh(n){de().location.href=n}function pc(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function Oh(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Dh(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xh(){return pc()?self:null}var _c="firebaseLocalStorageDb",Lh=1,ai="firebaseLocalStorage",mc="fbase_key",Qe=class{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}};function gi(n,e){return n.transaction([ai],e?"readwrite":"readonly").objectStore(ai)}function Mh(){let n=indexedDB.deleteDatabase(_c);return new Qe(n).toPromise()}function Kr(){let n=indexedDB.open(_c,Lh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{let i=n.result;try{i.createObjectStore(ai,{keyPath:mc})}catch(r){t(r)}}),n.addEventListener("success",async()=>{let i=n.result;i.objectStoreNames.contains(ai)?e(i):(i.close(),await Mh(),e(await Kr()))})})}async function Na(n,e,t){let i=gi(n,!0).put({[mc]:e,value:t});return new Qe(i).toPromise()}async function Fh(n,e){let t=gi(n,!1).get(e),i=await new Qe(t).toPromise();return i===void 0?null:i.value}function Oa(n,e){let t=gi(n,!0).delete(e);return new Qe(t).toPromise()}var Uh=800,Wh=3,ci=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kr(),this.db)}async _withRetries(e){let t=0;for(;;)try{let i=await this._openDb();return await e(i)}catch(i){if(t++>Wh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oi._getInstance(xh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Oh(),!this.activeServiceWorker)return;this.sender=new qr(this.activeServiceWorker);let i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Dh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Kr();return await Na(e,ni,"1"),await Oa(e,ni),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Na(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(i=>Fh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Oa(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(r=>{let s=gi(r,!1).getAll();return new Qe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let t=[],i=new Set;if(e.length!==0)for(let{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(let r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;let i=this.listeners[e];if(i)for(let r of Array.from(i))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};ci.type="LOCAL";var gc=ci;function Da(n,e){return W(n,"POST","/v2/accounts/mfaSignIn:start",x(n,e))}function Vh(n,e){return W(n,"POST","/v2/accounts/mfaSignIn:finalize",x(n,e))}function Hh(n,e){return W(n,"POST","/v2/accounts/mfaSignIn:finalize",x(n,e))}var ng=oc("rcb"),ig=new Ge(3e4,6e4);var Bn="recaptcha";async function Bh(n,e,t){var i;if(!n._getRecaptchaConfig())try{await sh(n)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let s=r.session;if("phoneNumber"in r){g(s.type==="enroll",n,"internal-error");let o={idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await qt(n,o,"mfaSmsEnrollment",async(d,u)=>{if(u.phoneEnrollmentInfo.captchaResponse===Gt){g(t?.type===Bn,d,"argument-error");let h=await xr(d,u,t);return Pa(d,h)}return Pa(d,u)},"PHONE_PROVIDER").catch(d=>Promise.reject(d))).phoneSessionInfo.sessionInfo}else{g(s.type==="signin",n,"internal-error");let o=((i=r.multiFactorHint)===null||i===void 0?void 0:i.uid)||r.multiFactorUid;g(o,n,"missing-multi-factor-info");let a={mfaPendingCredential:s.credential,mfaEnrollmentId:o,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await qt(n,a,"mfaSmsSignIn",async(u,h)=>{if(h.phoneSignInInfo.captchaResponse===Gt){g(t?.type===Bn,u,"argument-error");let _=await xr(u,h,t);return Da(u,_)}return Da(u,h)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneResponseInfo.sessionInfo}}else{let s={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await qt(n,s,"sendVerificationCode",async(l,d)=>{if(d.captchaResponse===Gt){g(t?.type===Bn,l,"argument-error");let u=await xr(l,d,t);return Ra(l,u)}return Ra(l,d)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).sessionInfo}}finally{t?._reset()}}async function xr(n,e,t){g(t.type===Bn,n,"argument-error");let i=await t.verify();g(typeof i=="string",n,"argument-error");let r=Object.assign({},e);if("phoneEnrollmentInfo"in r){let s=r.phoneEnrollmentInfo.phoneNumber,o=r.phoneEnrollmentInfo.captchaResponse,a=r.phoneEnrollmentInfo.clientType,c=r.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(r,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:i,captchaResponse:o,clientType:a,recaptchaVersion:c}}),r}else if("phoneSignInInfo"in r){let s=r.phoneSignInInfo.captchaResponse,o=r.phoneSignInInfo.clientType,a=r.phoneSignInInfo.recaptchaVersion;return Object.assign(r,{phoneSignInInfo:{recaptchaToken:i,captchaResponse:s,clientType:o,recaptchaVersion:a}}),r}else return Object.assign(r,{recaptchaToken:i}),r}var nn=class n{constructor(e){this.providerId=n.PROVIDER_ID,this.auth=Xe(e)}verifyPhoneNumber(e,t){return Bh(this.auth,e,L(t))}static credential(e,t){return Qt._fromVerification(e,t)}static credentialFromResult(e){let t=e;return n.credentialFromTaggedObject(t)}static credentialFromError(e){return n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:i}=e;return t&&i?Qt._fromTokenResponse(t,i):null}};nn.PROVIDER_ID="phone";nn.PHONE_SIGN_IN_METHOD="phone";function jh(n,e){return e?ge(e):(g(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}var rn=class extends qe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return pt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return pt(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}};function $h(n){return bh(n.auth,new rn(n),n.bypassAuthState)}function zh(n){let{auth:e,user:t}=n;return g(t,e,"internal-error"),Eh(t,new rn(n),n.bypassAuthState)}async function Gh(n){let{auth:e,user:t}=n;return g(t,e,"internal-error"),wh(t,new rn(n),n.bypassAuthState)}var li=class{constructor(e,t,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $h;case"linkViaPopup":case"linkViaRedirect":return Gh;case"reauthViaPopup":case"reauthViaRedirect":return zh;default:ie(this.auth,"internal-error")}}resolve(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var qh=new Ge(2e3,1e4);var Yr=class n extends li{constructor(e,t,i,r,s){super(e,t,r,s),this.provider=i,this.authWindow=null,this.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){ve(this.filter.length===1,"Popup operations only handle one event");let e=cs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ue(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ue(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}pollUserCancellation(){let e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ue(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qh.get())};e()}};Yr.currentPopupAction=null;var Kh="pendingRedirect",jn=new Map,Jr=class extends li{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=jn.get(this.auth._key());if(!e){try{let i=await Yh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}jn.set(this.auth._key(),e)}return this.bypassAuthState||jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Yh(n,e){let t=Xh(e),i=Qh(n);if(!await i._isAvailable())return!1;let r=await i._get(t)==="true";return await i._remove(t),r}function Jh(n,e){jn.set(n._key(),e)}function Qh(n){return ge(n._redirectPersistence)}function Xh(n){return Hn(Kh,n.config.apiKey,n.name)}async function Zh(n,e,t=!1){if(G(n.app))return Promise.reject(Pe(n));let i=Xe(n),r=jh(i,e),o=await new Jr(i,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}var ef=10*60*1e3,Qr=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tf(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!vc(e)){let r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ue(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ef&&this.cachedEventUids.clear(),this.cachedEventUids.has(xa(e))}saveEventToCache(e){this.cachedEventUids.add(xa(e)),this.lastProcessedEventTime=Date.now()}};function xa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vc({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function tf(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vc(n);default:return!1}}async function nf(n,e={}){return W(n,"GET","/v1/projects",e)}var rf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sf=/^https?/;async function of(n){if(n.config.emulator)return;let{authorizedDomains:e}=await nf(n);for(let t of e)try{if(af(t))return}catch{}ie(n,"unauthorized-domain")}function af(n){let e=Mr(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){let o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!sf.test(t))return!1;if(rf.test(n))return i===n;let r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}var cf=new Ge(3e4,6e4);function La(){let n=de().___jsl;if(n?.H){for(let e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lf(n){return new Promise((e,t)=>{var i,r,s;function o(){La(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{La(),t(ue(n,"network-request-failed"))},timeout:cf.get()})}if(!((r=(i=de().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=de().gapi)===null||s===void 0)&&s.load)o();else{let a=oc("iframefcb");return de()[a]=()=>{gapi.load?o():t(ue(n,"network-request-failed"))},sc(`${ih()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw $n=null,e})}var $n=null;function uf(n){return $n=$n||lf(n),$n}var df=new Ge(5e3,15e3),hf="__/auth/iframe",ff="emulator/auth/iframe",pf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_f=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mf(n){let e=n.config;g(e.authDomain,n,"auth-domain-config-required");let t=e.emulator?ns(e,ff):`https://${n.config.authDomain}/${hf}`,i={apiKey:e.apiKey,appName:n.name,v:Ae},r=_f.get(n.config.apiHost);r&&(i.eid=r);let s=n._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${be(i).slice(1)}`}async function gf(n){let e=await uf(n),t=de().gapi;return g(t,n,"internal-error"),e.open({where:document.body,url:mf(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pf,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});let o=ue(n,"network-request-failed"),a=de().setTimeout(()=>{s(o)},df.get());function c(){de().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}var vf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yf=500,If=600,wf="_blank",Ef="http://localhost",ui=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function bf(n,e,t,i=yf,r=If){let s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),a="",c=Object.assign(Object.assign({},vf),{width:i.toString(),height:r.toString(),top:s,left:o}),l=U().toLowerCase();t&&(a=Xa(l)?wf:t),Ja(l)&&(e=e||Ef,c.scrollbars="yes");let d=Object.entries(c).reduce((h,[_,m])=>`${h}${_}=${m},`,"");if(Qd(l)&&a!=="_self")return Tf(e||"",a),new ui(null);let u=window.open(e||"",a,d);g(u,n,"popup-blocked");try{u.focus()}catch{}return new ui(u)}function Tf(n,e){let t=document.createElement("a");t.href=n,t.target=e;let i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}var Cf="__/auth/handler",Sf="emulator/auth/handler",Af=encodeURIComponent("fac");async function Ma(n,e,t,i,r,s){g(n.config.authDomain,n,"auth-domain-config-required"),g(n.config.apiKey,n,"invalid-api-key");let o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ae,eventId:r};if(e instanceof ti){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",dt(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[d,u]of Object.entries(s||{}))o[d]=u}if(e instanceof Ye){let d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);let a=o;for(let d of Object.keys(a))a[d]===void 0&&delete a[d];let c=await n._getAppCheckToken(),l=c?`#${Af}=${encodeURIComponent(c)}`:"";return`${Rf(n)}?${be(a).slice(1)}${l}`}function Rf({config:n}){return n.emulator?ns(n,Sf):`https://${n.authDomain}/${Cf}`}var Lr="webStorageSupport",Xr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=as,this._completeRedirectFn=Zh,this._overrideRedirectResult=Jh}async _openPopup(e,t,i,r){var s;ve((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await Ma(e,t,i,Mr(),r);return bf(e,o,cs())}async _openRedirect(e,t,i,r){await this._originValidation(e);let s=await Ma(e,t,i,Mr(),r);return Nh(s),new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(ve(s,"If manager is not set, promise should be"),s)}let i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){let t=await gf(e),i=new Qr(e);return t.register("authEvent",r=>(g(r?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Lr,{type:Lr},r=>{var s;let o=(s=r?.[0])===null||s===void 0?void 0:s[Lr];o!==void 0&&t(!!o),ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=of(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ic()||Qa()||rs()}},yc=Xr,di=class{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return le("unexpected MultiFactorSessionType")}}},Zr=class n extends di{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new n(e)}_finalizeEnroll(e,t,i){return Th(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Vh(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},hi=class{constructor(){}static assertion(e){return Zr._fromCredential(e)}};hi.FACTOR_ID="phone";var fi=class{static assertionForEnrollment(e,t){return pi._fromSecret(e,t)}static assertionForSignIn(e,t){return pi._fromEnrollmentId(e,t)}static async generateSecret(e){var t;let i=e;g(typeof((t=i.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");let r=await Ch(i.user.auth,{idToken:i.credential,totpEnrollmentInfo:{}});return _i._fromStartTotpMfaEnrollmentResponse(r,i.user.auth)}};fi.FACTOR_ID="totp";var pi=class n extends di{constructor(e,t,i){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=i}static _fromSecret(e,t){return new n(t,void 0,e)}static _fromEnrollmentId(e,t){return new n(t,e)}async _finalizeEnroll(e,t,i){return g(typeof this.secret<"u",e,"argument-error"),Sh(e,{idToken:t,displayName:i,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){g(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let i={verificationCode:this.otp};return Hh(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:i})}},_i=class n{constructor(e,t,i,r,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=i,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new n(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var i;let r=!1;return(Wn(e)||Wn(t))&&(r=!0),r&&(Wn(e)&&(e=((i=this.auth.currentUser)===null||i===void 0?void 0:i.email)||"unknownuser"),Wn(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Wn(n){return typeof n>"u"||n?.length===0}var Fa="@firebase/auth",Ua="1.10.8";var es=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function kf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pf(n){Se(new Y("auth",(e,{options:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});let c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rc(n)},l=new Br(i,r,s,c);return oh(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Se(new Y("auth-internal",e=>{let t=Xe(e.getProvider("auth").getImmediate());return(i=>new es(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ne(Fa,Ua,kf(n)),ne(Fa,Ua,"esm2017")}var Nf=5*60,Of=mr("authIdTokenMaxAge")||Nf,Wa=null,Df=n=>async e=>{let t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Of)return;let r=t?.token;Wa!==r&&(Wa=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function ls(n=Fn()){let e=Ht(n,"auth");if(e.isInitialized())return e.getImmediate();let t=ac(n,{popupRedirectResolver:yc,persistence:[gc,fc,as]}),i=mr("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(i,location.origin);if(location.origin===s.origin){let o=Df(s.toString());hc(t,o,()=>o(t.currentUser)),dc(t,a=>o(a))}}let r=pr("auth");return r&&cc(t,`http://${r}`),t}function xf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}th({loadJS(n){return new Promise((e,t)=>{let i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=r=>{let s=ue("internal-error");s.customData=r,t(s)},i.type="text/javascript",i.charset="UTF-8",xf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pf("Browser");var Ic="@firebase/database",wc="1.0.20";var po="";function Lf(n){po=n}var gs=class{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),D(t))}get(e){let t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:ut(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}};var vs=class{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return te(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}};var el=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){let e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gs(e)}}catch{}return new vs},et=el("localStorage"),ys=el("sessionStorage");var vt=new Te("@firebase/database"),Mf=function(){let n=1;return function(){return n++}}(),tl=function(n){let e=aa(n),t=new kn;t.update(e);let i=t.digest();return Pn.encodeByteArray(i)},En=function(...n){let e="";for(let t=0;t<n.length;t++){let i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=En.apply(null,i):typeof i=="object"?e+=D(i):e+=i,e+=" "}return e},nt=null,Ec=!0,Ff=function(n,e){p(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(vt.logLevel=C.VERBOSE,nt=vt.log.bind(vt),e&&ys.set("logging_enabled",!0)):typeof n=="function"?nt=n:(nt=null,ys.remove("logging_enabled"))},M=function(...n){if(Ec===!0&&(Ec=!1,nt===null&&ys.get("logging_enabled")===!0&&Ff(!0)),nt){let e=En.apply(null,n);nt(e)}},bn=function(n){return function(...e){M(n,...e)}},Is=function(...n){let e="FIREBASE INTERNAL ERROR: "+En(...n);vt.error(e)},Ie=function(...n){let e=`FIREBASE FATAL ERROR: ${En(...n)}`;throw vt.error(e),new Error(e)},B=function(...n){let e="FIREBASE WARNING: "+En(...n);vt.warn(e)},Uf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&B("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},zi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Wf=function(n){if(oe()||document.readyState==="complete")n();else{let e=!1,t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},It="[MIN_NAME]",it="[MAX_NAME]",ot=function(n,e){if(n===e)return 0;if(n===It||e===it)return-1;if(e===It||n===it)return 1;{let t=bc(n),i=bc(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Vf=function(n,e){return n===e?0:n<e?-1:1},sn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+D(e))},_o=function(n){if(typeof n!="object"||n===null)return D(n);let e=[];for(let i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=D(e[i]),t+=":",t+=_o(n[e[i]]);return t+="}",t},nl=function(n,e){let t=n.length;if(t<=e)return[n];let i=[];for(let r=0;r<t;r+=e)r+e>t?i.push(n.substring(r,t)):i.push(n.substring(r,r+e));return i};function F(n,e){for(let t in n)n.hasOwnProperty(t)&&e(t,n[t])}var il=function(n){p(!zi(n),"Invalid JSON number");let e=11,t=52,i=(1<<e-1)-1,r,s,o,a,c;n===0?(s=0,o=0,r=1/n===-1/0?1:0):(r=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),s=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(s=0,o=Math.round(n/Math.pow(2,1-i-t))));let l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();let d=l.join(""),u="";for(c=0;c<64;c+=8){let h=parseInt(d.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},Hf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Bf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function jf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");let i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}var $f=new RegExp("^-?(0*)\\d{1,10}$"),zf=-2147483648,Gf=2147483647,bc=function(n){if($f.test(n)){let e=Number(n);if(e>=zf&&e<=Gf)return e}return null},Rt=function(n){try{n()}catch(e){setTimeout(()=>{let t=e.stack||"";throw B("Exception was thrown by user callback.",t),e},Math.floor(0))}},qf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ln=function(n,e){let t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};var ws=class{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,G(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){B(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}};var Es=class{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',B(e)}},De=class{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}};De.OWNER="owner";var yi="5",rl="v",sl="s",ol="r",al="f",cl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ll="ls",ul="p",bs="ac",dl="websocket",hl="long_polling";var Ii=class{constructor(e,t,i,r,s=!1,o="",a=!1,c=!1,l=null){this.secure=t,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=et.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&et.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){let e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}};function Kf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function fl(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===dl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===hl)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Kf(n)&&(t.ns=n.namespace);let r=[];return F(t,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}var Ts=class{constructor(){this.counters_={}}incrementCounter(e,t=1){te(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ko(this.counters_)}};var us={},ds={};function mo(n){let e=n.toString();return us[e]||(us[e]=new Ts),us[e]}function Yf(n,e){let t=n.toString();return ds[t]||(ds[t]=e()),ds[t]}var Cs=class{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&Rt(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};var Tc="start",Jf="close",Qf="pLPCommand",Xf="pRTLPCB",pl="id",_l="pw",ml="ser",Zf="cb",ep="seg",tp="ts",np="d",ip="dframe",gl=1870,vl=30,rp=gl-vl,sp=25e3,op=3e4,Ss=class n{constructor(e,t,i,r,s,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bn(e),this.stats_=mo(t),this.urlFn=c=>(this.appCheckToken&&(c[bs]=this.appCheckToken),fl(t,hl,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Cs(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(op)),Wf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new As((...s)=>{let[o,a,c,l,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Tc)this.id=a,this.password=c;else if(o===Jf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{let[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);let i={};i[Tc]="t",i[ml]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Zf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[rl]=yi,this.transportSessionId&&(i[sl]=this.transportSessionId),this.lastSessionId&&(i[ll]=this.lastSessionId),this.applicationId&&(i[ul]=this.applicationId),this.appCheckToken&&(i[bs]=this.appCheckToken),typeof location<"u"&&location.hostname&&cl.test(location.hostname)&&(i[ol]=al);let r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){n.forceAllow_=!0}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){return oe()?!1:n.forceAllow_?!0:!n.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Hf()&&!Bf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){let t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=hr(t),r=nl(i,rp);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(oe())return;this.myDisconnFrame=document.createElement("iframe");let i={};i[ip]="t",i[pl]=e,i[_l]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){let t=D(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}},As=class n{constructor(e,t,i,r){if(this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0,oe())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=Mf(),window[Qf+this.uniqueCallbackIdentifier]=e,window[Xf+this.uniqueCallbackIdentifier]=t,this.myIFrame=n.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');let o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){M("frame writing exception"),a.stack&&M(a.stack),M(a)}}}static createIFrame_(){let e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||M("No IE domain setting required")}catch{let i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;let e={};e[pl]=this.myID,e[_l]=this.myPW,e[ml]=this.currentSerial;let t=this.urlFn(e),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vl+i.length<=gl;){let o=this.pendingSegs.shift();i=i+"&"+ep+r+"="+o.seg+"&"+tp+r+"="+o.ts+"&"+np+r+"="+o.d,r++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);let i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(i,Math.floor(sp)),s=()=>{clearTimeout(r),i()};this.addTag(e,s)}addTag(e,t){oe()?this.doNodeLongPoll(e,t):setTimeout(()=>{try{if(!this.sendNewPolls)return;let i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){let r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{M("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}};var ap=16384,cp=45e3,wi=null;typeof MozWebSocket<"u"?wi=MozWebSocket:typeof WebSocket<"u"&&(wi=WebSocket);var ye=class n{constructor(e,t,i,r,s,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bn(this.connId),this.stats_=mo(t),this.connURL=n.connectionURL_(t,o,a,r,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,r,s){let o={};return o[rl]=yi,!oe()&&typeof location<"u"&&location.hostname&&cl.test(location.hostname)&&(o[ol]=al),t&&(o[sl]=t),i&&(o[ll]=i),r&&(o[bs]=r),s&&(o[ul]=s),fl(e,dl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,et.set("previous_websocket_failure",!0);try{let i;if(oe()){let r=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/${yi}/${po}/${process.platform}/${r}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let s=process.env,o=this.connURL.indexOf("wss://")===0?s.HTTPS_PROXY||s.https_proxy:s.HTTP_PROXY||s.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new wi(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");let r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){n.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){let t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&wi!==null&&!n.forceDisallow_}static previouslyFailed(){return et.isInMemoryStorage||et.get("previous_websocket_failure")===!0}markConnectionHealthy(){et.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){let t=this.frames.join("");this.frames=null;let i=ut(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){let t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;let t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{let i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();let t=D(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);let i=nl(t,ap);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};ye.responsesRequiredToBeHealthy=2;ye.healthyTimeout=3e4;var Ei=class n{static get ALL_TRANSPORTS(){return[Ss,ye]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){let t=ye&&ye.isAvailable(),i=t&&!ye.previouslyFailed();if(e.webSocketOnly&&(t||B("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ye];else{let r=this.transports_=[];for(let s of n.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);n.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};Ei.globalTransportInitialized_=!1;var lp=6e4,up=5e3,dp=10*1024,hp=100*1024,hs="t",Cc="d",fp="s",Sc="r",pp="e",Ac="o",Rc="a",kc="n",Pc="p",_p="h",Rs=class{constructor(e,t,i,r,s,o,a,c,l,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bn("c:"+this.id+":"),this.transportManager_=new Ei(t),this.log_("Connection created"),this.start_()}start_(){let e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));let r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ln(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){let t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(hs in e){let t=e[hs];t===Rc?this.upgradeIfSecondaryHealthy_():t===Sc?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ac&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){let t=sn("t",e),i=sn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pc,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Rc,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:kc,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){let t=sn("t",e),i=sn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){let t=sn(hs,e);if(Cc in e){let i=e[Cc];if(t===_p){let r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===kc){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===fp?this.onConnectionShutdown_(i):t===Sc?this.onReset_(i):t===pp?Is("Server Error: "+i):t===Ac?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Is("Unknown control packet command: "+t)}}onHandshake_(e){let t=e.ts,i=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),yi!==i&&B("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;let t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),ln(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ln(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(up))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pc,d:{}}}))}onSecondaryConnectionLost_(){let e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(et.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};var bi=class{put(e,t,i,r){}merge(e,t,i,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}};var Ti=class{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){let i=[...this.listeners_[e]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});let r=this.getInitialEvent(e);r&&t.apply(i,r)}off(e,t,i){this.validateEventType_(e);let r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}};var Ci=class n extends Ti{static getInstance(){return new n}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mt()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}};var Nc=32,Oc=768,T=class{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}};function b(){return new T("")}function y(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Me(n){return n.pieces_.length-n.pieceNum_}function S(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new T(n.pieces_,e)}function go(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function mp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function fn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function yl(n){if(n.pieceNum_>=n.pieces_.length)return null;let e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new T(e,0)}function k(n,e){let t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof T)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{let i=e.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&t.push(i[r])}return new T(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function H(n,e){let t=y(n),i=y(e);if(t===null)return e;if(t===i)return H(S(n),S(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function gp(n,e){let t=fn(n,0),i=fn(e,0);for(let r=0;r<t.length&&r<i.length;r++){let s=ot(t[r],i[r]);if(s!==0)return s}return t.length===i.length?0:t.length<i.length?-1:1}function vo(n,e){if(Me(n)!==Me(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function J(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Me(n)>Me(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}var ks=class{constructor(e,t){this.errorPrefix_=t,this.parts_=fn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ut(this.parts_[i]);Il(this)}};function vp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ut(e),Il(n)}function yp(n){let e=n.parts_.pop();n.byteLength_-=Ut(e),n.parts_.length>0&&(n.byteLength_-=1)}function Il(n){if(n.byteLength_>Oc)throw new Error(n.errorPrefix_+"has a key path longer than "+Oc+" bytes ("+n.byteLength_+").");if(n.parts_.length>Nc)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Nc+") or object contains a cycle "+Ze(n))}function Ze(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}var Ps=class n extends Ti{static getInstance(){return new n}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{let i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}};var on=1e3,Ip=60*5*1e3,Dc=30*1e3,wp=1.3,Ep=3e4,bp="server_kill",xc=3,rt=class n extends bi{constructor(e,t,i,r,s,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=n.nextPersistentConnectionId_++,this.log_=bn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=on,this.maxReconnectDelay_=Ip,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!oe())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ps.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ci.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){let r=++this.requestNumber_,s={r,a:e,b:t};this.log_(D(s)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(e){this.initConnection_();let t=new $,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{let a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;let s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,i,r){this.initConnection_();let s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");let a={onComplete:r,hashFn:t,query:e,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){let t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){let t=e.query,i=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+i+" for "+r);let s={p:i},o="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{let c=a.d,l=a.s;n.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,r),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&te(e,"w")){let i=je(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){let r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();B(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sa(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Dc)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let e=this.authToken_,t=ra(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,r=>{let s=r.s,o=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{let t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){let i=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,e._queryObject,t)}sendUnlisten_(e,t,i,r){this.log_("Unlisten on "+e+" for "+t);let s={p:e},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,r){let s={p:t,d:i};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,i,r){this.putInternal("p",e,t,i,r)}merge(e,t,i,r){this.putInternal("m",e,t,i,r)}putInternal(e,t,i,r,s){this.initConnection_();let o={p:t,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;let a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){let t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){let t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){let s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+D(e));let t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Is("Unrecognized action received from server: "+D(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ep&&(this.reconnectDelay_=on),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());let e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_),t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+n.nextConnectionId_++,s=this.lastSessionId,o=!1,a=null,c=function(){a?a.close():(o=!0,i())},l=function(u){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:c,sendRequest:l};let d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[u,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new Rs(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,_=>{B(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(bp)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&B(u),c())}}}interrupt(e){M("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){M("Resuming connection for reason: "+e),delete this.interruptReasons_[e],dt(this.interruptReasons_)&&(this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){let t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){let t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(s=>_o(s)).join("$"):i="default";let r=this.removeListen_(e,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){let i=new T(e).toString(),r;if(this.listens.has(i)){let s=this.listens.get(i);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(e,t){M("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=xc&&(this.reconnectDelay_=Dc,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){M("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=xc&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(let e of this.listens.values())for(let t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){let e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){let e={},t="js";oe()&&(this.repoInfo_.nodeAdmin?t="admin_node":t="node"),e["sdk."+t+"."+po.replace(/\./g,"-")]=1,Mt()?e["framework.cordova"]=1:Dn()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){let e=Ci.getInstance().currentlyOnline();return dt(this.interruptReasons_)&&e}};rt.nextPersistentConnectionId_=0;rt.nextConnectionId_=0;var w=class n{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new n(e,t)}};var wt=class{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){let i=new w(It,e),r=new w(It,t);return this.compare(i,r)!==0}minPost(){return w.MIN}};var vi,Si=class extends wt{static get __EMPTY_NODE(){return vi}static set __EMPTY_NODE(e){vi=e}compare(e,t){return ot(e.name,t.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return w.MIN}maxPost(){return new w(it,vi)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new w(e,vi)}toString(){return".key"}},yt=new Si;var gt=class{constructor(e,t,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},V=class n{constructor(e,t,i,r,s){this.key=e,this.value=t,this.color=i??n.RED,this.left=r??Q.EMPTY_NODE,this.right=s??Q.EMPTY_NODE}copy(e,t,i,r,s){return new n(e??this.key,t??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let r=this,s=i(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,i),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Q.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,r;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Q.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){let e=this.copy(null,null,n.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){let e=this.copy(null,null,n.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){let e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");let e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};V.RED=!0;V.BLACK=!1;var Ns=class{copy(e,t,i,r,s){return this}insert(e,t,i){return new V(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}},Q=class n{constructor(e,t=n.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new n(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,V.BLACK,null,null))}remove(e){return new n(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,V.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,r=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new gt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new gt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new gt(this.root_,null,this.comparator_,!0,e)}};Q.EMPTY_NODE=new Ns;function Tp(n,e){return ot(n.name,e.name)}function yo(n,e){return ot(n,e)}var Os;function Cp(n){Os=n}var wl=function(n){return typeof n=="number"?"number:"+il(n):"string:"+n},El=function(n){if(n.isLeafNode()){let e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&te(e,".sv"),"Priority must be a string or number.")}else p(n===Os||n.isEmpty(),"priority of unexpected type.");p(n===Os||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};var Lc,we=class n{static set __childrenNodeConstructor(e){Lc=e}static get __childrenNodeConstructor(){return Lc}constructor(e,t=n.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),El(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new n(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:y(e)===".priority"?this.priorityNode_:n.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:n.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){let i=y(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Me(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,n.__childrenNodeConstructor.EMPTY_NODE.updateChild(S(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+wl(this.priorityNode_.val())+":");let t=typeof this.value_;e+=t+":",t==="number"?e+=il(this.value_):e+=this.value_,this.lazyHash_=tl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===n.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof n.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){let t=typeof e.value_,i=typeof this.value_,r=n.VALUE_TYPE_ORDER.indexOf(t),s=n.VALUE_TYPE_ORDER.indexOf(i);return p(r>=0,"Unknown leaf type: "+t),p(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){let t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}};we.VALUE_TYPE_ORDER=["object","boolean","number","string"];var bl,Tl;function Sp(n){bl=n}function Ap(n){Tl=n}var Ds=class extends wt{compare(e,t){let i=e.node.getPriority(),r=t.node.getPriority(),s=i.compareTo(r);return s===0?ot(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return w.MIN}maxPost(){return new w(it,new we("[PRIORITY-POST]",Tl))}makePost(e,t){let i=bl(e);return new w(t,new we("[PRIORITY-POST]",i))}toString(){return".priority"}},P=new Ds;var Rp=Math.log(2),xs=class{constructor(e){let t=s=>parseInt(Math.log(s)/Rp,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;let r=i(this.count);this.bits_=e+1&r}nextBitIsOne(){let e=!(this.bits_&1<<this.current_);return this.current_--,e}},Ai=function(n,e,t,i){n.sort(e);let r=function(c,l){let d=l-c,u,h;if(d===0)return null;if(d===1)return u=n[c],h=t?t(u):u,new V(h,u.node,V.BLACK,null,null);{let _=parseInt(d/2,10)+c,m=r(c,_),E=r(_+1,l);return u=n[_],h=t?t(u):u,new V(h,u.node,V.BLACK,m,E)}},s=function(c){let l=null,d=null,u=n.length,h=function(m,E){let R=u-m,q=u;u-=m;let K=r(R+1,q),Z=n[R],ct=t?t(Z):Z;_(new V(ct,Z.node,E,null,K))},_=function(m){l?(l.left=m,l=m):(d=m,l=m)};for(let m=0;m<c.count;++m){let E=c.nextBitIsOne(),R=Math.pow(2,c.count-(m+1));E?h(R,V.BLACK):(h(R,V.BLACK),h(R,V.RED))}return d},o=new xs(n.length),a=s(o);return new Q(i||e,a)};var fs,mt={},Et=class n{static get Default(){return p(mt&&P,"ChildrenNode.ts has not been loaded"),fs=fs||new n({".priority":mt},{".priority":P}),fs}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){let t=je(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Q?t:null}hasIndex(e){return te(this.indexSet_,e.toString())}addIndex(e,t){p(e!==yt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let i=[],r=!1,s=t.getIterator(w.Wrap),o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Ai(i,e.getCompare()):a=mt;let c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;let d=Object.assign({},this.indexes_);return d[c]=a,new n(d,l)}addToIndexes(e,t){let i=Ft(this.indexes_,(r,s)=>{let o=je(this.indexSet_,s);if(p(o,"Missing index implementation for "+s),r===mt)if(o.isDefinedOn(e.node)){let a=[],c=t.getIterator(w.Wrap),l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Ai(a,o.getCompare())}else return mt;else{let a=t.get(e.name),c=r;return a&&(c=c.remove(new w(e.name,a))),c.insert(e,e.node)}});return new n(i,this.indexSet_)}removeFromIndexes(e,t){let i=Ft(this.indexes_,r=>{if(r===mt)return r;{let s=t.get(e.name);return s?r.remove(new w(e.name,s)):r}});return new n(i,this.indexSet_)}};var an,v=class n{static get EMPTY_NODE(){return an||(an=new n(new Q(yo),null,Et.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&El(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||an}updatePriority(e){return this.children_.isEmpty()?this:new n(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{let t=this.children_.get(e);return t===null?an:t}}getChild(e){let t=y(e);return t===null?this:this.getImmediateChild(t).getChild(S(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{let i=new w(e,t),r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(i,this.children_));let o=r.isEmpty()?an:this.priorityNode_;return new n(r,o,s)}}updateChild(e,t){let i=y(e);if(i===null)return t;{p(y(e)!==".priority"||Me(e)===1,".priority must be the last token in a path");let r=this.getImmediateChild(i).updateChild(S(e),t);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;let t={},i=0,r=0,s=!0;if(this.forEachChild(P,(o,a)=>{t[o]=a.val(e),i++,s&&n.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!e&&s&&r<2*i){let o=[];for(let a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+wl(this.getPriority().val())+":"),this.forEachChild(P,(t,i)=>{let r=i.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":tl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){let r=this.resolveIndex_(i);if(r){let s=r.getPredecessorKey(new w(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){let t=this.getFirstChildName(e);return t?new w(t,this.children_.get(t)):null}getLastChildName(e){let t=this.resolveIndex_(e);if(t){let i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){let t=this.getLastChildName(e);return t?new w(t,this.children_.get(t)):null}forEachChild(e,t){let i=this.resolveIndex_(e);return i?i.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,r=>r);{let r=this.children_.getIteratorFrom(e.name,w.Wrap),s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){let i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,r=>r);{let r=this.children_.getReverseIteratorFrom(e.name,w.Wrap),s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Tn?-1:0}withIndex(e){if(e===yt||this.indexMap_.hasIndex(e))return this;{let t=this.indexMap_.addIndex(e,this.children_);return new n(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{let t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){let i=this.getIterator(P),r=t.getIterator(P),s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===yt?null:this.indexMap_.get(e.toString())}};v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Ls=class extends v{constructor(){super(new Q(yo),v.EMPTY_NODE,Et.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}},Tn=new Ls;Object.defineProperties(w,{MIN:{value:new w(It,v.EMPTY_NODE)},MAX:{value:new w(it,Tn)}});Si.__EMPTY_NODE=v.EMPTY_NODE;we.__childrenNodeConstructor=v;Cp(Tn);Ap(Tn);var kp=!0;function N(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){let t=n;return new we(t,N(e))}if(!(n instanceof Array)&&kp){let t=[],i=!1;if(F(n,(o,a)=>{if(o.substring(0,1)!=="."){let c=N(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new w(o,c)))}}),t.length===0)return v.EMPTY_NODE;let s=Ai(t,Tp,o=>o.name,yo);if(i){let o=Ai(t,P.getCompare());return new v(s,N(e),new Et({".priority":o},{".priority":P}))}else return new v(s,N(e),Et.Default)}else{let t=v.EMPTY_NODE;return F(n,(i,r)=>{if(te(n,i)&&i.substring(0,1)!=="."){let s=N(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(i,s))}}),t.updatePriority(N(e))}}Sp(N);var Ms=class extends wt{constructor(e){super(),this.indexPath_=e,p(!I(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){let i=this.extractChild(e.node),r=this.extractChild(t.node),s=i.compareTo(r);return s===0?ot(e.name,t.name):s}makePost(e,t){let i=N(e),r=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new w(t,r)}maxPost(){let e=v.EMPTY_NODE.updateChild(this.indexPath_,Tn);return new w(it,e)}toString(){return fn(this.indexPath_,0).join("/")}};var Fs=class extends wt{compare(e,t){let i=e.node.compareTo(t.node);return i===0?ot(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return w.MIN}maxPost(){return w.MAX}makePost(e,t){let i=N(e);return new w(t,i)}toString(){return".value"}},Pp=new Fs;function Cl(n){return{type:"value",snapshotNode:n}}function bt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function pn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function _n(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Np(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}var mn=class{constructor(e){this.index_=e}updateChild(e,t,i,r,s,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");let a=e.getImmediateChild(t);return a.getChild(r).equals(i.getChild(r))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(pn(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(bt(t,i)):o.trackChildChange(_n(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(P,(r,s)=>{t.hasChild(r)||i.trackChildChange(pn(r,s))}),t.isLeafNode()||t.forEachChild(P,(r,s)=>{if(e.hasChild(r)){let o=e.getImmediateChild(r);o.equals(s)||i.trackChildChange(_n(r,s,o))}else i.trackChildChange(bt(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};var Ri=class n{constructor(e){this.indexedFilter_=new mn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=n.getStartPost_(e),this.endPost_=n.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){let t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,r,s,o){return this.matches(new w(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,r,s,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(v.EMPTY_NODE);let s=this;return t.forEachChild(P,(o,a)=>{s.matches(new w(o,a))||(r=r.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){let t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){let t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}};var Us=class{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{let i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{let i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ri(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,r,s,o){return this.rangedFilter_.matches(new w(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,r,s,o):this.fullLimitUpdateChild_(e,t,i,s,o)}updateFullNode(e,t,i){let r;if(t.isLeafNode()||t.isEmpty())r=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=v.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){let a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(v.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let o=0;for(;s.hasNext();){let a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,r,s){let o;if(this.reverse_){let u=this.index_.getCompare();o=(h,_)=>u(_,h)}else o=this.index_.getCompare();let a=e;p(a.numChildren()===this.limit_,"");let c=new w(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(c);if(a.hasChild(t)){let u=a.getImmediateChild(t),h=r.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=r.getChildAfterChild(this.index_,h,this.reverse_);let _=h==null?1:o(h,c);if(d&&!i.isEmpty()&&_>=0)return s?.trackChildChange(_n(t,i,u)),a.updateImmediateChild(t,i);{s?.trackChildChange(pn(t,u));let E=a.updateImmediateChild(t,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s?.trackChildChange(bt(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return i.isEmpty()?e:d&&o(l,c)>=0?(s!=null&&(s.trackChildChange(pn(l.name,l.node)),s.trackChildChange(bt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,v.EMPTY_NODE)):e}};var Ws=class n{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=P}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:It}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:it}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===P}copy(){let e=new n;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}};function Op(n){return n.loadsAllData()?new mn(n.getIndex()):n.hasLimit()?new Us(n):new Ri(n)}function Mc(n){let e={};if(n.isDefault())return e;let t;if(n.index_===P?t="$priority":n.index_===Pp?t="$value":n.index_===yt?t="$key":(p(n.index_ instanceof Ms,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=D(t),n.startSet_){let i=n.startAfterSet_?"startAfter":"startAt";e[i]=D(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+D(n.indexStartName_))}if(n.endSet_){let i=n.endBeforeSet_?"endBefore":"endAt";e[i]=D(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+D(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Fc(n){let e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==P&&(e.i=n.index_.toString()),e}var Vs=class n extends bi{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=bn("p:rest:"),this.listens_={}}listen(e,t,i,r){let s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);let o=n.getListenId_(e,i),a={};this.listens_[o]=a;let c=Mc(e._queryParams);this.restRequest_(s+".json",c,(l,d)=>{let u=d;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,i),je(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",r(h,null)}})}unlisten(e,t){let i=n.getListenId_(e,t);delete this.listens_[i]}get(e){let t=Mc(e._queryParams),i=e._path.toString(),r=new $;return this.restRequest_(i+".json",t,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);let o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+be(t);this.log_("Sending REST request for "+o);let a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=ut(a.responseText)}catch{B("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&B("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}};var Hs=class{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}};function ki(){return{value:null,children:new Map}}function kt(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{let i=y(e);n.children.has(i)||n.children.set(i,ki());let r=n.children.get(i);e=S(e),kt(r,e,t)}}function Bs(n,e){if(I(e))return n.value=null,n.children.clear(),!0;if(n.value!==null){if(n.value.isLeafNode())return!1;{let t=n.value;return n.value=null,t.forEachChild(P,(i,r)=>{kt(n,new T(i),r)}),Bs(n,e)}}else if(n.children.size>0){let t=y(e);return e=S(e),n.children.has(t)&&Bs(n.children.get(t),e)&&n.children.delete(t),n.children.size===0}else return!0}function js(n,e,t){n.value!==null?t(e,n.value):Dp(n,(i,r)=>{let s=new T(e.toString()+"/"+i);js(r,s,t)})}function Dp(n,e){n.children.forEach((t,i)=>{e(i,t)})}var $s=class{constructor(e){this.collection_=e,this.last_=null}get(){let e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,(i,r)=>{t[i]=t[i]-r}),this.last_=e,t}};var Uc=10*1e3,xp=30*1e3,Lp=5*60*1e3,zs=class{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $s(e);let i=Uc+(xp-Uc)*Math.random();ln(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){let e=this.statsListener_.get(),t={},i=!1;F(e,(r,s)=>{s>0&&te(this.statsToReport_,r)&&(t[r]=s,i=!0)}),i&&this.server_.reportStats(t),ln(this.reportStats_.bind(this),Math.floor(Math.random()*2*Lp))}};var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function Io(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Eo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}var Gs=class n{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=re.ACK_USER_WRITE,this.source=Io()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let t=this.affectedTree.subtree(new T(e));return new n(b(),t,this.revert)}}else return p(y(this.path)===e,"operationForChild called for unrelated child."),new n(S(this.path),this.affectedTree,this.revert)}};var Pi=class n{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new n(this.source,b()):new n(this.source,S(this.path))}};var Tt=class n{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=re.OVERWRITE}operationForChild(e){return I(this.path)?new n(this.source,b(),this.snap.getImmediateChild(e)):new n(this.source,S(this.path),this.snap)}};var gn=class n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=re.MERGE}operationForChild(e){if(I(this.path)){let t=this.children.subtree(new T(e));return t.isEmpty()?null:t.value?new Tt(this.source,b(),t.value):new n(this.source,b(),t)}else return p(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new n(this.source,S(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};var he=class{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;let t=y(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}};var qs=class{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}};function Mp(n,e,t,i){let r=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Np(o.childName,o.snapshotNode))}),cn(n,r,"child_removed",e,i,t),cn(n,r,"child_added",e,i,t),cn(n,r,"child_moved",s,i,t),cn(n,r,"child_changed",e,i,t),cn(n,r,"value",e,i,t),r}function cn(n,e,t,i,r,s){let o=i.filter(a=>a.type===t);o.sort((a,c)=>Up(n,a,c)),o.forEach(a=>{let c=Fp(n,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function Fp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Up(n,e,t){if(e.childName==null||t.childName==null)throw Be("Should only compare child_ events.");let i=new w(e.childName,e.snapshotNode),r=new w(t.childName,t.snapshotNode);return n.index_.compare(i,r)}function Gi(n,e){return{eventCache:n,serverCache:e}}function un(n,e,t,i){return Gi(new he(e,t,i),n.serverCache)}function Sl(n,e,t,i){return Gi(n.eventCache,new he(e,t,i))}function Ni(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function st(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}var ps,Wp=()=>(ps||(ps=new Q(Vf)),ps),j=class n{static fromObject(e){let t=new n(null);return F(e,(i,r)=>{t=t.set(new T(i),r)}),t}constructor(e,t=Wp()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:b(),value:this.value};if(I(e))return null;{let i=y(e),r=this.children.get(i);if(r!==null){let s=r.findRootMostMatchingPathAndValue(S(e),t);return s!=null?{path:k(new T(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{let t=y(e),i=this.children.get(t);return i!==null?i.subtree(S(e)):new n(null)}}set(e,t){if(I(e))return new n(t,this.children);{let i=y(e),s=(this.children.get(i)||new n(null)).set(S(e),t),o=this.children.insert(i,s);return new n(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new n(null):new n(null,this.children);{let t=y(e),i=this.children.get(t);if(i){let r=i.remove(S(e)),s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new n(null):new n(this.value,s)}else return this}}get(e){if(I(e))return this.value;{let t=y(e),i=this.children.get(t);return i?i.get(S(e)):null}}setTree(e,t){if(I(e))return t;{let i=y(e),s=(this.children.get(i)||new n(null)).setTree(S(e),t),o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new n(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,t){let i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(k(e,r),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,b(),t)}findOnPath_(e,t,i){let r=this.value?i(t,this.value):!1;if(r)return r;if(I(e))return null;{let s=y(e),o=this.children.get(s);return o?o.findOnPath_(S(e),k(t,s),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,b(),t)}foreachOnPath_(e,t,i){if(I(e))return this;{this.value&&i(t,this.value);let r=y(e),s=this.children.get(r);return s?s.foreachOnPath_(S(e),k(t,r),i):new n(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,t){this.children.inorderTraversal((i,r)=>{r.foreach_(k(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}};var se=class n{constructor(e){this.writeTree_=e}static empty(){return new n(new j(null))}};function dn(n,e,t){if(I(e))return new se(new j(t));{let i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){let r=i.path,s=i.value,o=H(r,e);return s=s.updateChild(o,t),new se(n.writeTree_.set(r,s))}else{let r=new j(t),s=n.writeTree_.setTree(e,r);return new se(s)}}}function Ks(n,e,t){let i=n;return F(t,(r,s)=>{i=dn(i,k(e,r),s)}),i}function Wc(n,e){if(I(e))return se.empty();{let t=n.writeTree_.setTree(e,new j(null));return new se(t)}}function Ys(n,e){return at(n,e)!=null}function at(n,e){let t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(H(t.path,e)):null}function Vc(n){let e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(P,(i,r)=>{e.push(new w(i,r))}):n.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&e.push(new w(i,r.value))}),e}function xe(n,e){if(I(e))return n;{let t=at(n,e);return t!=null?new se(new j(t)):new se(n.writeTree_.subtree(e))}}function Js(n){return n.writeTree_.isEmpty()}function Ct(n,e){return Al(b(),n.writeTree_,e)}function Al(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(p(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):t=Al(k(n,r),s,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(k(n,".priority"),i)),t}}function qi(n,e){return Nl(e,n)}function Vp(n,e,t,i,r){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:r}),r&&(n.visibleWrites=dn(n.visibleWrites,e,t)),n.lastWriteId=i}function Hp(n,e,t,i){p(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ks(n.visibleWrites,e,t),n.lastWriteId=i}function Bp(n,e){for(let t=0;t<n.allWrites.length;t++){let i=n.allWrites[t];if(i.writeId===e)return i}return null}function jp(n,e){let t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");let i=n.allWrites[t];n.allWrites.splice(t,1);let r=i.visible,s=!1,o=n.allWrites.length-1;for(;r&&o>=0;){let a=n.allWrites[o];a.visible&&(o>=t&&$p(a,i.path)?r=!1:J(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return zp(n),!0;if(i.snap)n.visibleWrites=Wc(n.visibleWrites,i.path);else{let a=i.children;F(a,c=>{n.visibleWrites=Wc(n.visibleWrites,k(i.path,c))})}return!0}else return!1}function $p(n,e){if(n.snap)return J(n.path,e);for(let t in n.children)if(n.children.hasOwnProperty(t)&&J(k(n.path,t),e))return!0;return!1}function zp(n){n.visibleWrites=Rl(n.allWrites,Gp,b()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Gp(n){return n.visible}function Rl(n,e,t){let i=se.empty();for(let r=0;r<n.length;++r){let s=n[r];if(e(s)){let o=s.path,a;if(s.snap)J(t,o)?(a=H(t,o),i=dn(i,a,s.snap)):J(o,t)&&(a=H(o,t),i=dn(i,b(),s.snap.getChild(a)));else if(s.children){if(J(t,o))a=H(t,o),i=Ks(i,a,s.children);else if(J(o,t))if(a=H(o,t),I(a))i=Ks(i,b(),s.children);else{let c=je(s.children,y(a));if(c){let l=c.getChild(S(a));i=dn(i,b(),l)}}}else throw Be("WriteRecord should have .snap or .children")}}return i}function kl(n,e,t,i,r){if(!i&&!r){let s=at(n.visibleWrites,e);if(s!=null)return s;{let o=xe(n.visibleWrites,e);if(Js(o))return t;if(t==null&&!Ys(o,b()))return null;{let a=t||v.EMPTY_NODE;return Ct(o,a)}}}else{let s=xe(n.visibleWrites,e);if(!r&&Js(s))return t;if(!r&&t==null&&!Ys(s,b()))return null;{let o=function(l){return(l.visible||r)&&(!i||!~i.indexOf(l.writeId))&&(J(l.path,e)||J(e,l.path))},a=Rl(n.allWrites,o,e),c=t||v.EMPTY_NODE;return Ct(a,c)}}}function qp(n,e,t){let i=v.EMPTY_NODE,r=at(n.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(P,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(t){let s=xe(n.visibleWrites,e);return t.forEachChild(P,(o,a)=>{let c=Ct(xe(s,new T(o)),a);i=i.updateImmediateChild(o,c)}),Vc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{let s=xe(n.visibleWrites,e);return Vc(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Kp(n,e,t,i,r){p(i||r,"Either existingEventSnap or existingServerSnap must exist");let s=k(e,t);if(Ys(n.visibleWrites,s))return null;{let o=xe(n.visibleWrites,s);return Js(o)?r.getChild(t):Ct(o,r.getChild(t))}}function Yp(n,e,t,i){let r=k(e,t),s=at(n.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(t)){let o=xe(n.visibleWrites,r);return Ct(o,i.getNode().getImmediateChild(t))}else return null}function Jp(n,e){return at(n.visibleWrites,e)}function Qp(n,e,t,i,r,s,o){let a,c=xe(n.visibleWrites,e),l=at(c,b());if(l!=null)a=l;else if(t!=null)a=Ct(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){let d=[],u=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o),_=h.getNext();for(;_&&d.length<r;)u(_,i)!==0&&d.push(_),_=h.getNext();return d}else return[]}function Xp(){return{visibleWrites:se.empty(),allWrites:[],lastWriteId:-1}}function Oi(n,e,t,i){return kl(n.writeTree,n.treePath,e,t,i)}function bo(n,e){return qp(n.writeTree,n.treePath,e)}function Hc(n,e,t,i){return Kp(n.writeTree,n.treePath,e,t,i)}function Di(n,e){return Jp(n.writeTree,k(n.treePath,e))}function Zp(n,e,t,i,r,s){return Qp(n.writeTree,n.treePath,e,t,i,r,s)}function To(n,e,t){return Yp(n.writeTree,n.treePath,e,t)}function Pl(n,e){return Nl(k(n.treePath,e),n.writeTree)}function Nl(n,e){return{treePath:n,writeTree:e}}var Qs=class{constructor(){this.changeMap=new Map}trackChildChange(e){let t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");let r=this.changeMap.get(i);if(r){let s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(i,_n(i,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(i,pn(i,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(i,bt(i,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(i,_n(i,e.snapshotNode,r.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}};var Xs=class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}},Ol=new Xs,vn=class{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){let t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{let i=this.optCompleteServerCache_!=null?new he(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return To(this.writes_,e,i)}}getChildAfterChild(e,t,i){let r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:st(this.viewCache_),s=Zp(this.writes_,r,t,1,i,e);return s.length===0?null:s[0]}};function e_(n){return{filter:n}}function t_(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function n_(n,e,t,i,r){let s=new Qs,o,a;if(t.type===re.OVERWRITE){let l=t;l.source.fromUser?o=Zs(n,e,l.path,l.snap,i,r,s):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!I(l.path),o=xi(n,e,l.path,l.snap,i,r,a,s))}else if(t.type===re.MERGE){let l=t;l.source.fromUser?o=r_(n,e,l.path,l.children,i,r,s):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=eo(n,e,l.path,l.children,i,r,a,s))}else if(t.type===re.ACK_USER_WRITE){let l=t;l.revert?o=a_(n,e,l.path,i,r,s):o=s_(n,e,l.path,l.affectedTree,i,r,s)}else if(t.type===re.LISTEN_COMPLETE)o=o_(n,e,t.path,i,s);else throw Be("Unknown operation type: "+t.type);let c=s.getChanges();return i_(e,o,c),{viewCache:o,changes:c}}function i_(n,e,t){let i=e.eventCache;if(i.isFullyInitialized()){let r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Ni(n);(t.length>0||!n.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&t.push(Cl(Ni(e)))}}function Dl(n,e,t,i,r,s){let o=e.eventCache;if(Di(i,t)!=null)return e;{let a,c;if(I(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){let l=st(e),d=l instanceof v?l:v.EMPTY_NODE,u=bo(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{let l=Oi(i,st(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{let l=y(t);if(l===".priority"){p(Me(t)===1,"Can't have a priority with additional path components");let d=o.getNode();c=e.serverCache.getNode();let u=Hc(i,t,d,c);u!=null?a=n.filter.updatePriority(d,u):a=o.getNode()}else{let d=S(t),u;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();let h=Hc(i,t,o.getNode(),c);h!=null?u=o.getNode().getImmediateChild(l).updateChild(d,h):u=o.getNode().getImmediateChild(l)}else u=To(i,l,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),l,u,d,r,s):a=o.getNode()}}return un(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function xi(n,e,t,i,r,s,o,a){let c=e.serverCache,l,d=o?n.filter:n.filter.getIndexedFilter();if(I(t))l=d.updateFullNode(c.getNode(),i,null);else if(d.filtersNodes()&&!c.isFiltered()){let _=c.getNode().updateChild(t,i);l=d.updateFullNode(c.getNode(),_,null)}else{let _=y(t);if(!c.isCompleteForPath(t)&&Me(t)>1)return e;let m=S(t),R=c.getNode().getImmediateChild(_).updateChild(m,i);_===".priority"?l=d.updatePriority(c.getNode(),R):l=d.updateChild(c.getNode(),_,R,m,Ol,null)}let u=Sl(e,l,c.isFullyInitialized()||I(t),d.filtersNodes()),h=new vn(r,u,s);return Dl(n,u,t,r,h,a)}function Zs(n,e,t,i,r,s,o){let a=e.eventCache,c,l,d=new vn(r,e,s);if(I(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=un(e,l,!0,n.filter.filtersNodes());else{let u=y(t);if(u===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=un(e,l,a.isFullyInitialized(),a.isFiltered());else{let h=S(t),_=a.getNode().getImmediateChild(u),m;if(I(h))m=i;else{let E=d.getCompleteChild(u);E!=null?go(h)===".priority"&&E.getChild(yl(h)).isEmpty()?m=E:m=E.updateChild(h,i):m=v.EMPTY_NODE}if(_.equals(m))c=e;else{let E=n.filter.updateChild(a.getNode(),u,m,h,d,o);c=un(e,E,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Bc(n,e){return n.eventCache.isCompleteForChild(e)}function r_(n,e,t,i,r,s,o){let a=e;return i.foreach((c,l)=>{let d=k(t,c);Bc(e,y(d))&&(a=Zs(n,a,d,l,r,s,o))}),i.foreach((c,l)=>{let d=k(t,c);Bc(e,y(d))||(a=Zs(n,a,d,l,r,s,o))}),a}function jc(n,e,t){return t.foreach((i,r)=>{e=e.updateChild(i,r)}),e}function eo(n,e,t,i,r,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;I(t)?l=i:l=new j(null).setTree(t,i);let d=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(d.hasChild(u)){let _=e.serverCache.getNode().getImmediateChild(u),m=jc(n,_,h);c=xi(n,c,new T(u),m,r,s,o,a)}}),l.children.inorderTraversal((u,h)=>{let _=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!d.hasChild(u)&&!_){let m=e.serverCache.getNode().getImmediateChild(u),E=jc(n,m,h);c=xi(n,c,new T(u),E,r,s,o,a)}}),c}function s_(n,e,t,i,r,s,o){if(Di(r,t)!=null)return e;let a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(I(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return xi(n,e,t,c.getNode().getChild(t),r,s,a,o);if(I(t)){let l=new j(null);return c.getNode().forEachChild(yt,(d,u)=>{l=l.set(new T(d),u)}),eo(n,e,t,l,r,s,a,o)}else return e}else{let l=new j(null);return i.foreach((d,u)=>{let h=k(t,d);c.isCompleteForPath(h)&&(l=l.set(d,c.getNode().getChild(h)))}),eo(n,e,t,l,r,s,a,o)}}function o_(n,e,t,i,r){let s=e.serverCache,o=Sl(e,s.getNode(),s.isFullyInitialized()||I(t),s.isFiltered());return Dl(n,o,t,i,Ol,r)}function a_(n,e,t,i,r,s){let o;if(Di(i,t)!=null)return e;{let a=new vn(i,e,r),c=e.eventCache.getNode(),l;if(I(t)||y(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Oi(i,st(e));else{let u=e.serverCache.getNode();p(u instanceof v,"serverChildren would be complete if leaf node"),d=bo(i,u)}d=d,l=n.filter.updateFullNode(c,d,s)}else{let d=y(t),u=To(i,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=c.getImmediateChild(d)),u!=null?l=n.filter.updateChild(c,d,u,S(t),a,s):e.eventCache.getNode().hasChild(d)?l=n.filter.updateChild(c,d,v.EMPTY_NODE,S(t),a,s):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Oi(i,st(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,s)))}return o=e.serverCache.isFullyInitialized()||Di(i,b())!=null,un(e,l,o,n.filter.filtersNodes())}}var to=class{constructor(e,t){this.query_=e,this.eventRegistrations_=[];let i=this.query_._queryParams,r=new mn(i.getIndex()),s=Op(i);this.processor_=e_(s);let o=t.serverCache,a=t.eventCache,c=r.updateFullNode(v.EMPTY_NODE,o.getNode(),null),l=s.updateFullNode(v.EMPTY_NODE,a.getNode(),null),d=new he(c,o.isFullyInitialized(),r.filtersNodes()),u=new he(l,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Gi(u,d),this.eventGenerator_=new qs(this.query_)}get query(){return this.query_}};function c_(n){return n.viewCache_.serverCache.getNode()}function l_(n){return Ni(n.viewCache_)}function u_(n,e){let t=st(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(y(e)).isEmpty())?t.getChild(e):null}function $c(n){return n.eventRegistrations_.length===0}function d_(n,e){n.eventRegistrations_.push(e)}function zc(n,e,t){let i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");let r=n.query._path;n.eventRegistrations_.forEach(s=>{let o=s.createCancelEvent(t,r);o&&i.push(o)})}if(e){let r=[];for(let s=0;s<n.eventRegistrations_.length;++s){let o=n.eventRegistrations_[s];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(n.eventRegistrations_.slice(s+1));break}}n.eventRegistrations_=r}else n.eventRegistrations_=[];return i}function Gc(n,e,t,i){e.type===re.MERGE&&e.source.queryId!==null&&(p(st(n.viewCache_),"We should always have a full cache before handling merges"),p(Ni(n.viewCache_),"Missing event cache, even though we have a server cache"));let r=n.viewCache_,s=n_(n.processor_,r,e,t,i);return t_(n.processor_,s.viewCache),p(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=s.viewCache,xl(n,s.changes,s.viewCache.eventCache.getNode(),null)}function h_(n,e){let t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(P,(s,o)=>{i.push(bt(s,o))}),t.isFullyInitialized()&&i.push(Cl(t.getNode())),xl(n,i,t.getNode(),e)}function xl(n,e,t,i){let r=i?[i]:n.eventRegistrations_;return Mp(n.eventGenerator_,e,t,r)}var Li,Mi=class{constructor(){this.views=new Map}};function f_(n){p(!Li,"__referenceConstructor has already been defined"),Li=n}function p_(){return p(Li,"Reference.ts has not been loaded"),Li}function __(n){return n.views.size===0}function Co(n,e,t,i){let r=e.source.queryId;if(r!==null){let s=n.views.get(r);return p(s!=null,"SyncTree gave us an op for an invalid query."),Gc(s,e,t,i)}else{let s=[];for(let o of n.views.values())s=s.concat(Gc(o,e,t,i));return s}}function Ll(n,e,t,i,r){let s=e._queryIdentifier,o=n.views.get(s);if(!o){let a=Oi(t,r?i:null),c=!1;a?c=!0:i instanceof v?(a=bo(t,i),c=!1):(a=v.EMPTY_NODE,c=!1);let l=Gi(new he(a,c,!1),new he(i,r,!1));return new to(e,l)}return o}function m_(n,e,t,i,r,s){let o=Ll(n,e,i,r,s);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),d_(o,t),h_(o,t)}function g_(n,e,t,i){let r=e._queryIdentifier,s=[],o=[],a=Fe(n);if(r==="default")for(let[c,l]of n.views.entries())o=o.concat(zc(l,t,i)),$c(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||s.push(l.query));else{let c=n.views.get(r);c&&(o=o.concat(zc(c,t,i)),$c(c)&&(n.views.delete(r),c.query._queryParams.loadsAllData()||s.push(c.query)))}return a&&!Fe(n)&&s.push(new(p_())(e._repo,e._path)),{removed:s,events:o}}function Ml(n){let e=[];for(let t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Le(n,e){let t=null;for(let i of n.views.values())t=t||u_(i,e);return t}function Fl(n,e){if(e._queryParams.loadsAllData())return Ki(n);{let i=e._queryIdentifier;return n.views.get(i)}}function Ul(n,e){return Fl(n,e)!=null}function Fe(n){return Ki(n)!=null}function Ki(n){for(let e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}var Fi;function v_(n){p(!Fi,"__referenceConstructor has already been defined"),Fi=n}function y_(){return p(Fi,"Reference.ts has not been loaded"),Fi}var I_=1,Ui=class{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=Xp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function Wl(n,e,t,i,r){return Vp(n.pendingWriteTree_,e,t,i,r),r?Pt(n,new Tt(Io(),e,t)):[]}function w_(n,e,t,i){Hp(n.pendingWriteTree_,e,t,i);let r=j.fromObject(t);return Pt(n,new gn(Io(),e,r))}function Oe(n,e,t=!1){let i=Bp(n.pendingWriteTree_,e);if(jp(n.pendingWriteTree_,e)){let s=new j(null);return i.snap!=null?s=s.set(b(),!0):F(i.children,o=>{s=s.set(new T(o),!0)}),Pt(n,new Gs(i.path,s,t))}else return[]}function Cn(n,e,t){return Pt(n,new Tt(wo(),e,t))}function E_(n,e,t){let i=j.fromObject(t);return Pt(n,new gn(wo(),e,i))}function b_(n,e){return Pt(n,new Pi(wo(),e))}function T_(n,e,t){let i=Ao(n,t);if(i){let r=Ro(i),s=r.path,o=r.queryId,a=H(s,e),c=new Pi(Eo(o),a);return ko(n,s,c)}else return[]}function Wi(n,e,t,i,r=!1){let s=e._path,o=n.syncPointTree_.get(s),a=[];if(o&&(e._queryIdentifier==="default"||Ul(o,e))){let c=g_(o,e,t,i);__(o)&&(n.syncPointTree_=n.syncPointTree_.remove(s));let l=c.removed;if(a=c.events,!r){let d=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(s,(h,_)=>Fe(_));if(d&&!u){let h=n.syncPointTree_.subtree(s);if(!h.isEmpty()){let _=A_(h);for(let m=0;m<_.length;++m){let E=_[m],R=E.query,q=jl(n,E);n.listenProvider_.startListening(hn(R),yn(n,R),q.hashFn,q.onComplete)}}}!u&&l.length>0&&!i&&(d?n.listenProvider_.stopListening(hn(e),null):l.forEach(h=>{let _=n.queryToTagMap.get(Yi(h));n.listenProvider_.stopListening(hn(h),_)}))}R_(n,l)}return a}function Vl(n,e,t,i){let r=Ao(n,i);if(r!=null){let s=Ro(r),o=s.path,a=s.queryId,c=H(o,e),l=new Tt(Eo(a),c,t);return ko(n,o,l)}else return[]}function C_(n,e,t,i){let r=Ao(n,i);if(r){let s=Ro(r),o=s.path,a=s.queryId,c=H(o,e),l=j.fromObject(t),d=new gn(Eo(a),c,l);return ko(n,o,d)}else return[]}function no(n,e,t,i=!1){let r=e._path,s=null,o=!1;n.syncPointTree_.foreachOnPath(r,(h,_)=>{let m=H(h,r);s=s||Le(_,m),o=o||Fe(_)});let a=n.syncPointTree_.get(r);a?(o=o||Fe(a),s=s||Le(a,b())):(a=new Mi,n.syncPointTree_=n.syncPointTree_.set(r,a));let c;s!=null?c=!0:(c=!1,s=v.EMPTY_NODE,n.syncPointTree_.subtree(r).foreachChild((_,m)=>{let E=Le(m,b());E&&(s=s.updateImmediateChild(_,E))}));let l=Ul(a,e);if(!l&&!e._queryParams.loadsAllData()){let h=Yi(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");let _=k_();n.queryToTagMap.set(h,_),n.tagToQueryMap.set(_,h)}let d=qi(n.pendingWriteTree_,r),u=m_(a,e,t,d,s,c);if(!l&&!o&&!i){let h=Fl(a,e);u=u.concat(P_(n,e,h))}return u}function So(n,e,t){let r=n.pendingWriteTree_,s=n.syncPointTree_.findOnPath(e,(o,a)=>{let c=H(o,e),l=Le(a,c);if(l)return l});return kl(r,e,s,t,!0)}function S_(n,e){let t=e._path,i=null;n.syncPointTree_.foreachOnPath(t,(l,d)=>{let u=H(l,t);i=i||Le(d,u)});let r=n.syncPointTree_.get(t);r?i=i||Le(r,b()):(r=new Mi,n.syncPointTree_=n.syncPointTree_.set(t,r));let s=i!=null,o=s?new he(i,!0,!1):null,a=qi(n.pendingWriteTree_,e._path),c=Ll(r,e,a,s?o.getNode():v.EMPTY_NODE,s);return l_(c)}function Pt(n,e){return Hl(e,n.syncPointTree_,null,qi(n.pendingWriteTree_,b()))}function Hl(n,e,t,i){if(I(n.path))return Bl(n,e,t,i);{let r=e.get(b());t==null&&r!=null&&(t=Le(r,b()));let s=[],o=y(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){let l=t?t.getImmediateChild(o):null,d=Pl(i,o);s=s.concat(Hl(a,c,l,d))}return r&&(s=s.concat(Co(r,n,i,t))),s}}function Bl(n,e,t,i){let r=e.get(b());t==null&&r!=null&&(t=Le(r,b()));let s=[];return e.children.inorderTraversal((o,a)=>{let c=t?t.getImmediateChild(o):null,l=Pl(i,o),d=n.operationForChild(o);d&&(s=s.concat(Bl(d,a,c,l)))}),r&&(s=s.concat(Co(r,n,i,t))),s}function jl(n,e){let t=e.query,i=yn(n,t);return{hashFn:()=>(c_(e)||v.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return i?T_(n,t._path,i):b_(n,t._path);{let s=jf(r,t);return Wi(n,t,null,s)}}}}function yn(n,e){let t=Yi(e);return n.queryToTagMap.get(t)}function Yi(n){return n._path.toString()+"$"+n._queryIdentifier}function Ao(n,e){return n.tagToQueryMap.get(e)}function Ro(n){let e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new T(n.substr(0,e))}}function ko(n,e,t){let i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");let r=qi(n.pendingWriteTree_,e);return Co(i,t,r,null)}function A_(n){return n.fold((e,t,i)=>{if(t&&Fe(t))return[Ki(t)];{let r=[];return t&&(r=Ml(t)),F(i,(s,o)=>{r=r.concat(o)}),r}})}function hn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(y_())(n._repo,n._path):n}function R_(n,e){for(let t=0;t<e.length;++t){let i=e[t];if(!i._queryParams.loadsAllData()){let r=Yi(i),s=n.queryToTagMap.get(r);n.queryToTagMap.delete(r),n.tagToQueryMap.delete(s)}}}function k_(){return I_++}function P_(n,e,t){let i=e._path,r=yn(n,e),s=jl(n,t),o=n.listenProvider_.startListening(hn(e),r,s.hashFn,s.onComplete),a=n.syncPointTree_.subtree(i);if(r)p(!Fe(a.value),"If we're adding a query, it shouldn't be shadowed");else{let c=a.fold((l,d,u)=>{if(!I(l)&&d&&Fe(d))return[Ki(d).query];{let h=[];return d&&(h=h.concat(Ml(d).map(_=>_.query))),F(u,(_,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){let d=c[l];n.listenProvider_.stopListening(hn(d),yn(n,d))}}return o}var io=class n{constructor(e){this.node_=e}getImmediateChild(e){let t=this.node_.getImmediateChild(e);return new n(t)}node(){return this.node_}},ro=class n{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){let t=k(this.path_,e);return new n(this.syncTree_,t)}node(){return So(this.syncTree_,this.path_)}},N_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},qc=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return O_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return D_(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},O_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},D_=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));let i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);let r=e.node();if(p(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;let o=r.getValue();return typeof o!="number"?i:o+i},$l=function(n,e,t,i){return Po(e,new ro(t,n),i)},zl=function(n,e,t){return Po(n,new io(e),t)};function Po(n,e,t){let i=n.getPriority().val(),r=qc(i,e.getImmediateChild(".priority"),t),s;if(n.isLeafNode()){let o=n,a=qc(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new we(a,N(r)):n}else{let o=n;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new we(r))),o.forEachChild(P,(a,c)=>{let l=Po(c,e.getImmediateChild(a),t);l!==c&&(s=s.updateImmediateChild(a,l))}),s}}var In=class{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}};function No(n,e){let t=e instanceof T?e:new T(e),i=n,r=y(t);for(;r!==null;){let s=je(i.node.children,r)||{children:{},childCount:0};i=new In(r,i,s),t=S(t),r=y(t)}return i}function Nt(n){return n.node.value}function Gl(n,e){n.node.value=e,so(n)}function ql(n){return n.node.childCount>0}function x_(n){return Nt(n)===void 0&&!ql(n)}function Ji(n,e){F(n.node.children,(t,i)=>{e(new In(t,n,i))})}function Kl(n,e,t,i){t&&!i&&e(n),Ji(n,r=>{Kl(r,e,!0,i)}),t&&i&&e(n)}function L_(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Sn(n){return new T(n.parent===null?n.name:Sn(n.parent)+"/"+n.name)}function so(n){n.parent!==null&&M_(n.parent,n.name,n)}function M_(n,e,t){let i=x_(t),r=te(n.node.children,e);i&&r?(delete n.node.children[e],n.node.childCount--,so(n)):!i&&!r&&(n.node.children[e]=t.node,n.node.childCount++,so(n))}var F_=/[\[\].#$\/\u0000-\u001F\u007F]/,U_=/[\[\].#$\u0000-\u001F\u007F]/,_s=10*1024*1024,Oo=function(n){return typeof n=="string"&&n.length!==0&&!F_.test(n)},Yl=function(n){return typeof n=="string"&&n.length!==0&&!U_.test(n)},W_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Yl(n)},Jl=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!zi(n)||n&&typeof n=="object"&&te(n,".sv")},Vi=function(n,e,t,i){i&&e===void 0||Qi($e(n,"value"),e,t)},Qi=function(n,e,t){let i=t instanceof T?new ks(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ze(i));if(typeof e=="function")throw new Error(n+"contains a function "+Ze(i)+" with contents = "+e.toString());if(zi(e))throw new Error(n+"contains "+e.toString()+" "+Ze(i));if(typeof e=="string"&&e.length>_s/3&&Ut(e)>_s)throw new Error(n+"contains a string greater than "+_s+" utf8 bytes "+Ze(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(F(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Oo(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ze(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);vp(i,o),Qi(n,a,i),yp(i)}),r&&s)throw new Error(n+' contains ".value" child '+Ze(i)+" in addition to actual children.")}},V_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];let s=fn(i);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Oo(s[o]))throw new Error(n+"contains an invalid key ("+s[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gp);let r=null;for(t=0;t<e.length;t++){if(i=e[t],r!==null&&J(r,i))throw new Error(n+"contains a path "+r.toString()+" that is ancestor of another path "+i.toString());r=i}},Ql=function(n,e,t,i){if(i&&e===void 0)return;let r=$e(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");let s=[];F(e,(o,a)=>{let c=new T(o);if(Qi(r,a,k(t,c)),go(c)===".priority"&&!Jl(a))throw new Error(r+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(c)}),V_(r,s)},H_=function(n,e,t){if(!(t&&e===void 0)){if(zi(e))throw new Error($e(n,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Jl(e))throw new Error($e(n,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}};var Xl=function(n,e,t,i){if(!(i&&t===void 0)&&!Yl(t))throw new Error($e(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Xl(n,e,t,i)},tt=function(n,e){if(y(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},j_=function(n,e){let t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Oo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!W_(t))throw new Error($e(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};var oo=class{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function Xi(n,e){let t=null;for(let i=0;i<e.length;i++){let r=e[i],s=r.getPath();t!==null&&!vo(s,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&n.eventLists_.push(t)}function Zl(n,e,t){Xi(n,t),eu(n,i=>vo(i,e))}function X(n,e,t){Xi(n,t),eu(n,i=>J(i,e)||J(e,i))}function eu(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){let r=n.eventLists_[i];if(r){let s=r.path;e(s)?($_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function $_(n){for(let e=0;e<n.events.length;e++){let t=n.events[e];if(t!==null){n.events[e]=null;let i=t.getEventRunner();nt&&M("event: "+t.toString()),Rt(i)}}}var z_="repo_interrupt",G_=25,ao=class{constructor(e,t,i,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ki(),this.transactionQueueTree_=new In,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function q_(n,e,t){if(n.stats_=mo(n.repoInfo_),n.forceRestClient_||qf())n.server_=new Vs(n.repoInfo_,(i,r,s,o)=>{Kc(n,i,r,s,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Yc(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{D(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new rt(n.repoInfo_,e,(i,r,s,o)=>{Kc(n,i,r,s,o)},i=>{Yc(n,i)},i=>{K_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Yf(n.repoInfo_,()=>new zs(n.stats_,n.server_)),n.infoData_=new Hs,n.infoSyncTree_=new Ui({startListening:(i,r,s,o)=>{let a=[],c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=Cn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Do(n,"connected",!1),n.serverSyncTree_=new Ui({startListening:(i,r,s,o)=>(n.server_.listen(i,s,r,(a,c)=>{let l=o(a,c);X(n.eventQueue_,i._path,l)}),[]),stopListening:(i,r)=>{n.server_.unlisten(i,r)}})}function tu(n){let t=n.infoData_.getNode(new T(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Zi(n){return N_({timestamp:tu(n)})}function Kc(n,e,t,i,r){n.dataUpdateCount++;let s=new T(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(i){let c=Ft(t,l=>N(l));o=C_(n.serverSyncTree_,s,c,r)}else{let c=N(t);o=Vl(n.serverSyncTree_,s,c,r)}else if(i){let c=Ft(t,l=>N(l));o=E_(n.serverSyncTree_,s,c)}else{let c=N(t);o=Cn(n.serverSyncTree_,s,c)}let a=s;o.length>0&&(a=St(n,s)),X(n.eventQueue_,a,o)}function Yc(n,e){Do(n,"connected",e),e===!1&&X_(n)}function K_(n,e){F(e,(t,i)=>{Do(n,t,i)})}function Do(n,e,t){let i=new T("/.info/"+e),r=N(t);n.infoData_.updateSnapshot(i,r);let s=Cn(n.infoSyncTree_,i,r);X(n.eventQueue_,i,s)}function xo(n){return n.nextWriteId_++}function Y_(n,e,t){let i=S_(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(r=>{let s=N(r).withIndex(e._queryParams.getIndex());no(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Cn(n.serverSyncTree_,e._path,s);else{let a=yn(n.serverSyncTree_,e);o=Vl(n.serverSyncTree_,e._path,s,a)}return X(n.eventQueue_,e._path,o),Wi(n.serverSyncTree_,e,t,null,!0),s},r=>(An(n,"get for query "+D(e)+" failed: "+r),Promise.reject(new Error(r))))}function J_(n,e,t,i,r){An(n,"set",{path:e.toString(),value:t,priority:i});let s=Zi(n),o=N(t,i),a=So(n.serverSyncTree_,e),c=zl(o,a,s),l=xo(n),d=Wl(n.serverSyncTree_,e,c,l,!0);Xi(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(h,_)=>{let m=h==="ok";m||B("set at "+e+" failed: "+h);let E=Oe(n.serverSyncTree_,l,!m);X(n.eventQueue_,e,E),Ue(n,r,h,_)});let u=Mo(n,e);St(n,u),X(n.eventQueue_,u,[])}function Q_(n,e,t,i){An(n,"update",{path:e.toString(),value:t});let r=!0,s=Zi(n),o={};if(F(t,(a,c)=>{r=!1,o[a]=$l(k(e,a),N(c),n.serverSyncTree_,s)}),r)M("update() called with empty data.  Don't do anything."),Ue(n,i,"ok",void 0);else{let a=xo(n),c=w_(n.serverSyncTree_,e,o,a);Xi(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,d)=>{let u=l==="ok";u||B("update at "+e+" failed: "+l);let h=Oe(n.serverSyncTree_,a,!u),_=h.length>0?St(n,e):e;X(n.eventQueue_,_,h),Ue(n,i,l,d)}),F(t,l=>{let d=Mo(n,k(e,l));St(n,d)}),X(n.eventQueue_,e,[])}}function X_(n){An(n,"onDisconnectEvents");let e=Zi(n),t=ki();js(n.onDisconnect_,b(),(r,s)=>{let o=$l(r,s,n.serverSyncTree_,e);kt(t,r,o)});let i=[];js(t,b(),(r,s)=>{i=i.concat(Cn(n.serverSyncTree_,r,s));let o=Mo(n,r);St(n,o)}),n.onDisconnect_=ki(),X(n.eventQueue_,b(),i)}function Z_(n,e,t){n.server_.onDisconnectCancel(e.toString(),(i,r)=>{i==="ok"&&Bs(n.onDisconnect_,e),Ue(n,t,i,r)})}function Jc(n,e,t,i){let r=N(t);n.server_.onDisconnectPut(e.toString(),r.val(!0),(s,o)=>{s==="ok"&&kt(n.onDisconnect_,e,r),Ue(n,i,s,o)})}function em(n,e,t,i,r){let s=N(t,i);n.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&kt(n.onDisconnect_,e,s),Ue(n,r,o,a)})}function tm(n,e,t,i){if(dt(t)){M("onDisconnect().update() called with empty data.  Don't do anything."),Ue(n,i,"ok",void 0);return}n.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&F(t,(o,a)=>{let c=N(a);kt(n.onDisconnect_,k(e,o),c)}),Ue(n,i,r,s)})}function nm(n,e,t){let i;y(e._path)===".info"?i=no(n.infoSyncTree_,e,t):i=no(n.serverSyncTree_,e,t),Zl(n.eventQueue_,e._path,i)}function Qc(n,e,t){let i;y(e._path)===".info"?i=Wi(n.infoSyncTree_,e,t):i=Wi(n.serverSyncTree_,e,t),Zl(n.eventQueue_,e._path,i)}function im(n){n.persistentConnection_&&n.persistentConnection_.interrupt(z_)}function An(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),M(t,...e)}function Ue(n,e,t,i){e&&Rt(()=>{if(t==="ok")e(null);else{let r=(t||"error").toUpperCase(),s=r;i&&(s+=": "+i);let o=new Error(s);o.code=r,e(o)}})}function nu(n,e,t){return So(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Lo(n,e=n.transactionQueueTree_){if(e||er(n,e),Nt(e)){let t=ru(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&rm(n,Sn(e),t)}else ql(e)&&Ji(e,t=>{Lo(n,t)})}function rm(n,e,t){let i=t.map(l=>l.currentWriteId),r=nu(n,e,i),s=r,o=r.hash();for(let l=0;l<t.length;l++){let d=t[l];p(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;let u=H(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}let a=s.val(!0),c=e;n.server_.put(c.toString(),a,l=>{An(n,"transaction put response",{path:c.toString(),status:l});let d=[];if(l==="ok"){let u=[];for(let h=0;h<t.length;h++)t[h].status=2,d=d.concat(Oe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&u.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();er(n,No(n.transactionQueueTree_,e)),Lo(n,n.transactionQueueTree_),X(n.eventQueue_,e,d);for(let h=0;h<u.length;h++)Rt(u[h])}else{if(l==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{B("transaction at "+c.toString()+" failed: "+l);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=l}St(n,e)}},o)}function St(n,e){let t=iu(n,e),i=Sn(t),r=ru(n,t);return sm(n,r,i),i}function sm(n,e,t){if(e.length===0)return;let i=[],r=[],o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){let c=e[a],l=H(t,c.path),d=!1,u;if(p(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)d=!0,u=c.abortReason,r=r.concat(Oe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=G_)d=!0,u="maxretry",r=r.concat(Oe(n.serverSyncTree_,c.currentWriteId,!0));else{let h=nu(n,c.path,o);c.currentInputSnapshot=h;let _=e[a].update(h.val());if(_!==void 0){Qi("transaction failed: Data returned ",_,c.path);let m=N(_);typeof _=="object"&&_!=null&&te(_,".priority")||(m=m.updatePriority(h.getPriority()));let R=c.currentWriteId,q=Zi(n),K=zl(m,h,q);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=K,c.currentWriteId=xo(n),o.splice(o.indexOf(R),1),r=r.concat(Wl(n.serverSyncTree_,c.path,K,c.currentWriteId,c.applyLocally)),r=r.concat(Oe(n.serverSyncTree_,R,!0))}else d=!0,u="nodata",r=r.concat(Oe(n.serverSyncTree_,c.currentWriteId,!0))}X(n.eventQueue_,t,r),r=[],d&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(u),!1,null))))}er(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Rt(i[a]);Lo(n,n.transactionQueueTree_)}function iu(n,e){let t,i=n.transactionQueueTree_;for(t=y(e);t!==null&&Nt(i)===void 0;)i=No(i,t),e=S(e),t=y(e);return i}function ru(n,e){let t=[];return su(n,e,t),t.sort((i,r)=>i.order-r.order),t}function su(n,e,t){let i=Nt(e);if(i)for(let r=0;r<i.length;r++)t.push(i[r]);Ji(e,r=>{su(n,r,t)})}function er(n,e){let t=Nt(e);if(t){let i=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[i]=t[r],i++);t.length=i,Gl(e,t.length>0?t:void 0)}Ji(e,i=>{er(n,i)})}function Mo(n,e){let t=Sn(iu(n,e)),i=No(n.transactionQueueTree_,e);return L_(i,r=>{ms(n,r)}),ms(n,i),Kl(i,r=>{ms(n,r)}),t}function ms(n,e){let t=Nt(e);if(t){let i=[],r=[],s=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(s===o-1,"All SENT items should be at beginning of queue."),s=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(Oe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Gl(e,void 0):t.length=s+1,X(n.eventQueue_,Sn(e),r);for(let o=0;o<i.length;o++)Rt(i[o])}}function om(n){let e="",t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let r=t[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function am(n){let e={};n.charAt(0)==="?"&&(n=n.substring(1));for(let t of n.split("&")){if(t.length===0)continue;let i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):B(`Invalid query segment '${t}' in query '${n}'`)}return e}var Xc=function(n,e){let t=cm(n),i=t.namespace;t.domain==="firebase.com"&&Ie(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Ie("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Uf();let r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ii(t.host,t.secure,i,r,e,"",i!==t.subdomain),path:new T(t.pathString)}},cm=function(n){let e="",t="",i="",r="",s="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let d=n.indexOf("/");d===-1&&(d=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(d,u)),d<u&&(r=om(n.substring(d,u)));let h=am(n.substring(Math.min(n.length,u)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;let _=e.slice(0,l);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{let m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),s=i}"ns"in h&&(s=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};var Zc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",lm=function(){let n=0,e=[];return function(t){let i=t===n;n=t;let r,s=new Array(8);for(r=7;r>=0;r--)s[r]=Zc.charAt(t%64),t=Math.floor(t/64);p(t===0,"Cannot push at time == 0");let o=s.join("");if(i){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)o+=Zc.charAt(e[r]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();var Hi=class{constructor(e,t,i,r){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=r}getPath(){let e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+D(this.snapshot.exportVal())}},Bi=class{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};var ji=class{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}};var co=class{constructor(e,t){this._repo=e,this._path=t}cancel(){let e=new $;return Z_(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){tt("OnDisconnect.remove",this._path);let e=new $;return Jc(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){tt("OnDisconnect.set",this._path),Vi("OnDisconnect.set",e,this._path,!1);let t=new $;return Jc(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){tt("OnDisconnect.setWithPriority",this._path),Vi("OnDisconnect.setWithPriority",e,this._path,!1),H_("OnDisconnect.setWithPriority",t,!1);let i=new $;return em(this._repo,this._path,e,t,i.wrapCallback(()=>{})),i.promise}update(e){tt("OnDisconnect.update",this._path),Ql("OnDisconnect.update",e,this._path,!1);let t=new $;return tm(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};var lo=class n{constructor(e,t,i,r){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=r}get key(){return I(this._path)?null:go(this._path)}get ref(){return new fe(this._repo,this._path)}get _queryIdentifier(){let e=Fc(this._queryParams),t=_o(e);return t==="{}"?"default":t}get _queryObject(){return Fc(this._queryParams)}isEqual(e){if(e=L(e),!(e instanceof n))return!1;let t=this._repo===e._repo,i=vo(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mp(this._path)}};var fe=class n extends lo{constructor(e,t){super(e,t,new Ws,!1)}get parent(){let e=yl(this._path);return e===null?null:new n(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}},wn=class n{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){let t=new T(e),i=At(this.ref,e);return new n(this._node.getChild(t),i,P)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,r)=>e(new n(r,At(this.ref,i),P)))}hasChild(e){let t=new T(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function tr(n,e){return n=L(n),n._checkNotDeleted("ref"),e!==void 0?At(n._root,e):n._root}function At(n,e){return n=L(n),y(n._path)===null?B_("child","path",e,!1):Xl("child","path",e,!1),new fe(n._repo,k(n._path,e))}function ou(n){return n=L(n),new co(n._repo,n._path)}function Fo(n,e){n=L(n),tt("push",n._path),Vi("push",e,n._path,!0);let t=tu(n._repo),i=lm(t),r=At(n,i),s=At(n,i),o;return e!=null?o=Ot(s,e).then(()=>s):o=Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}function Uo(n){return tt("remove",n._path),Ot(n,null)}function Ot(n,e){n=L(n),tt("set",n._path),Vi("set",e,n._path,!1);let t=new $;return J_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function nr(n,e){Ql("update",e,n._path,!1);let t=new $;return Q_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function ir(n){n=L(n);let e=new ji(()=>{}),t=new $i(e);return Y_(n._repo,n,t).then(i=>new wn(i,new fe(n._repo,n._path),n._queryParams.getIndex()))}var $i=class n{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){let i=t._queryParams.getIndex();return new Hi("value",this,new wn(e.snapshotNode,new fe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Bi(this,e,t):null}matches(e){return e instanceof n?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}},uo=class n{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Bi(this,e,t):null}createEvent(e,t){p(e.childName!=null,"Child events should have a childName.");let i=At(new fe(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Hi(e.type,this,new wn(e.snapshotNode,i,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof n?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}};function au(n,e,t,i,r){let s;if(typeof i=="object"&&(s=void 0,r=i),typeof i=="function"&&(s=i),r&&r.onlyOnce){let c=t,l=(d,u)=>{Qc(n._repo,n,a),c(d,u)};l.userCallback=t.userCallback,l.context=t.context,t=l}let o=new ji(t,s||void 0),a=e==="value"?new $i(o):new uo(e,o);return nm(n._repo,n,a),()=>Qc(n._repo,n,a)}function rr(n,e,t,i){return au(n,"value",e,t,i)}function cu(n,e,t,i){return au(n,"child_added",e,t,i)}f_(fe);v_(fe);var um="FIREBASE_DATABASE_EMULATOR_HOST",ho={},dm=!1;function hm(n,e,t,i){let r=e.lastIndexOf(":"),s=e.substring(0,r),o=Ee(s);n.repoInfo_=new Ii(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function fm(n,e,t,i,r){let s=i||n.options.databaseURL;s===void 0&&(n.options.projectId||Ie("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",n.options.projectId),s=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Xc(s,r),a=o.repoInfo,c,l;typeof process<"u"&&process.env&&(l=process.env[um]),l?(c=!0,s=`http://${l}?ns=${a.namespace}`,o=Xc(s,r),a=o.repoInfo):c=!o.repoInfo.secure;let d=r&&c?new De(De.OWNER):new Es(n.name,n.options,e);j_("Invalid Firebase Database URL",o),I(o.path)||Ie("Database URL must point to the root of a Firebase Database (not including a child path).");let u=_m(a,n,d,new ws(n,t));return new fo(u,n)}function pm(n,e){let t=ho[e];(!t||t[n.key]!==n)&&Ie(`Database ${e}(${n.repoInfo_}) has already been deleted.`),im(n),delete t[n.key]}function _m(n,e,t,i){let r=ho[e.name];r||(r={},ho[e.name]=r);let s=r[n.toURLString()];return s&&Ie("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ao(n,dm,t,i),r[n.toURLString()]=s,s}var fo=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(q_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fe(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ie("Cannot call "+e+" on a deleted database.")}};function lu(n=Fn(),e){let t=Ht(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){let i=Jo("database");i&&mm(t,...i)}return t}function mm(n,e,t,i={}){n=L(n),n._checkNotDeleted("useEmulator");let r=`${e}:${t}`,s=n._repoInternal;if(n._instanceStarted){if(r===n._repoInternal.repoInfo_.host&&ae(i,s.repoInfo_.emulatorOptions))return;Ie("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Ie('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new De(De.OWNER);else if(i.mockUserToken){let a=typeof i.mockUserToken=="string"?i.mockUserToken:Qo(i.mockUserToken,n.app.options.projectId);o=new De(a)}Ee(e)&&(Nn(e),On("Database",!0)),hm(s,r,i,o)}function gm(n){Lf(Ae),Se(new Y("database",(e,{instanceIdentifier:t})=>{let i=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return fm(i,r,s,t)},"PUBLIC").setMultipleInstances(!0)),ne(Ic,wc,n),ne(Ic,wc,"esm2017")}var vm={".sv":"timestamp"};function We(){return vm}rt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};rt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};gm();var ym={apiKey:"AIzaSyD_uTfjUEtMoDGTs38wfCIjGV04YzH-V0E",authDomain:"sotsukindai-geoatlas.firebaseapp.com",databaseURL:"https://sotsukindai-geoatlas-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"sotsukindai-geoatlas",storageBucket:"sotsukindai-geoatlas.firebasestorage.app",messagingSenderId:"599027572691",appId:"1:599027572691:web:8aa5b2cd34a6daeec51926"},A=window._atlas,fu=Pr(ym),uu=ls(fu),Wo=lu(fu),du="ACDEFGHJKMNPQRTUVWXY34679",pe=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),f={uid:null,code:null,owner:null,name:"",follow:!0,lead:null,peers:{},zaps:{},zseen:new Set,comments:{},off:[],applying:!1,lastCam:null,lastBook:null,fx:[],raf:0,joinedAt:0};try{f.name=localStorage.getItem("geoatlas.nick")||""}catch{}var Dt=()=>f.owner&&f.owner===f.uid,z=n=>tr(Wo,`rooms/${f.code}${n?"/"+n:""}`),Im=`
#collab { position: fixed; left: 12px; bottom: calc(12px + env(safe-area-inset-bottom)); z-index: 30; width: min(340px, calc(100vw - 24px)); max-height: min(70vh, 560px); overflow: auto; padding: 12px 14px; border-radius: 14px;
  background: rgba(5,14,24,.94); border: 1px solid rgba(143,211,240,.35); box-shadow: 0 10px 34px rgba(0,0,0,.55); color: #e6ecf3; font-size: 13.5px; line-height: 1.6; backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
#collab[hidden] { display: none; }
#collab.min { max-height: none; width: auto; padding: 8px 12px; }
#collab.min .cbody { display: none; }
#collab h4 { margin: 0; font-size: 14px; color: #8FD3F0; letter-spacing: .06em; font-weight: 600; }
#collab .chead { display: flex; align-items: center; gap: 8px; } #collab .chead h4 { flex: 1; }
#collab .chead button { padding: 2px 8px; font-size: 12px; border-radius: 8px; }
#collab p { margin: 8px 0; } #collab .note { color: #9fb0c4; font-size: 12px; }
#collab input { width: 100%; box-sizing: border-box; font-size: 16px; padding: 6px 9px; border-radius: 8px; border: 1px solid rgba(255,255,255,.25); background: rgba(0,0,0,.35); color: #fff; }
#collab .row { display: flex; gap: 6px; margin: 6px 0; } #collab .row > * { flex: 1; }
#collab button { font-size: 13px; padding: 7px 10px; border-radius: 10px; }
#collab .prim { background: rgba(143,211,240,.16); border-color: rgba(143,211,240,.6); color: #cfeefb; }
#collab .on { background: #8FD3F0; color: #04101C; border-color: #8FD3F0; font-weight: 600; }
#collab .zap { background: rgba(242,198,109,.14); border-color: rgba(242,198,109,.6); color: #F2C66D; width: 100%; }
#collab .roster { display: flex; flex-wrap: wrap; gap: 4px; margin: 6px 0; } #collab .roster span { padding: 0 8px; border-radius: 999px; border: 1px solid rgba(255,255,255,.2); font-size: 12px; }
#collab .roster .me { border-color: #8FD3F0; color: #8FD3F0; } #collab .roster .t { border-color: #F2C66D; color: #F2C66D; }
#collab ol { margin: 4px 0; padding-left: 1.4em; } #collab ol li { cursor: pointer; } #collab ol li:hover { color: #F6DCA8; }
#collab .err { color: #ff9b9b; }
#collabfx { position: fixed; inset: 0; pointer-events: none; z-index: 9; }
#collabfx .pr { position: absolute; left: 0; top: 0; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 9px; background: rgba(143,211,240,.9); color: #04101C; font: 600 11px/18px sans-serif; text-align: center; box-shadow: 0 0 12px 3px rgba(143,211,240,.65); transform: translate(-50%, -50%); }
#collabfx .pr.t { background: #F2C66D; box-shadow: 0 0 14px 4px rgba(242,198,109,.7); }
#collabfx .cm { position: absolute; left: 0; top: 0; padding: 0 5px; border-radius: 7px; background: rgba(4,12,20,.85); border: 1px solid rgba(255,255,255,.35); color: #fff; font: 10px/14px sans-serif; transform: translate(-50%, 0); }
#collabfx .zb { position: absolute; left: 0; top: 0; width: 20px; height: 20px; margin: -10px 0 0 -10px; border-radius: 50%; border: 2px solid #F2C66D; box-shadow: 0 0 18px 6px rgba(242,198,109,.6); animation: czb 1.4s ease-out forwards; }
#collabfx .zt { position: absolute; left: 0; top: 0; color: #F2C66D; font-size: 22px; transform: translate(-50%, -50%); animation: czt 1.4s ease-out forwards; text-shadow: 0 0 10px rgba(242,198,109,.9); }
@keyframes czb { from { transform: scale(.4); opacity: 1; } to { transform: scale(4.5); opacity: 0; } }
@keyframes czt { from { opacity: 1; margin-top: 0; } to { opacity: 0; margin-top: -40px; } }
.collabslot:empty { display: none; }
.collabslot { margin: 10px 0 12px; padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(143,211,240,.35); background: rgba(143,211,240,.06); }
.collabslot h3 { margin: 0 0 6px !important; font-size: 13.5px !important; color: #8FD3F0 !important; }
.collabslot ul { list-style: none; margin: 0 0 8px; padding: 0; } .collabslot li { padding: 5px 0; border-bottom: 1px solid rgba(255,255,255,.08); font-size: 13.5px; }
.collabslot li b { color: #F6DCA8; font-weight: 500; margin-right: 6px; } .collabslot li .del { float: right; padding: 0 6px; font-size: 11px; border-radius: 6px; }
.collabslot textarea { width: 100%; box-sizing: border-box; min-height: 56px; font-size: 16px; padding: 6px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,.25); background: rgba(0,0,0,.35); color: #fff; resize: vertical; }
.collabslot .crow { display: flex; justify-content: space-between; align-items: center; margin-top: 4px; font-size: 11.5px; color: #9fb0c4; }
.collabslot .zap { margin: 0 0 8px; background: rgba(242,198,109,.14); border-color: rgba(242,198,109,.6); color: #F2C66D; }
@media (max-width: 760px) { #collab { left: 8px; right: 8px; width: auto; top: calc(58px + env(safe-area-inset-top)); bottom: auto; max-height: 40vh; } #collab.min { right: auto; } }   /* スマホでは上に置き、下の本の説明と重ならないように */
`,pu=document.createElement("style");pu.textContent=Im;document.head.appendChild(pu);var O=document.createElement("div");O.id="collab";O.hidden=!0;document.body.appendChild(O);var sr=document.createElement("div");sr.id="collabfx";document.body.appendChild(sr);function He(n){f.msg=n,f.msgT=Date.now();let e=O.querySelector(".msg");e&&(e.textContent=n),clearTimeout(He.t),He.t=setTimeout(()=>{f.msg="";let t=O.querySelector(".msg");t&&(t.textContent="")},4e3)}function Vo(n){O.classList.remove("min"),O.innerHTML=`<div class="chead"><h4>会読の部屋</h4><button data-c="close" aria-label="閉じる">×</button></div><div class="cbody">
    <p class="note">江戸の読書会「会読」にならい、同じ部屋の人と、いま見ている本・亭主（案内役）の案内・⚡・本へのコメントを共有します。部屋の外の人には中の様子は見えません。</p>
    <p>表示する名前（ニックネーム）<input class="nick" maxlength="20" placeholder="例：ゆう" value="${pe(f.name)}"></p>
    <p><b>客</b>：亭主に聞いた合言葉で入る</p><div class="row"><input class="code" maxlength="5" placeholder="合言葉（5文字）" autocapitalize="characters" style="text-transform: uppercase"><button class="prim" data-c="join">入る</button></div>
    <p><b>亭主</b>（案内役）：新しい会読の部屋を作る</p><div class="row"><button data-c="create">部屋を作る</button></div>
    ${n?`<p class="err">${pe(n)}</p>`:""}<p class="msg note"></p></div>`;let e=location.hash.match(/room=([A-Z0-9]{5})/i);e&&(O.querySelector(".code").value=e[1].toUpperCase())}function Ve(){let n=Object.entries(f.peers),e=n.length,t=f.lead||{},i=Dt(),r=Object.entries(f.zaps).sort((o,a)=>a[1]-o[1]).slice(0,5),s=Object.values(f.comments||{}).reduce((o,a)=>o+Object.keys(a||{}).length,0);O.innerHTML=`<div class="chead"><h4>会読 ${pe(f.code)}　いま ${e} 人</h4><button data-c="min" aria-label="たたむ">${O.classList.contains("min")?"開く":"たたむ"}</button><button data-c="leave">退出</button></div><div class="cbody">
    <div class="roster">${n.sort((o,a)=>(a[0]===f.owner)-(o[0]===f.owner)).map(([o,a])=>`<span class="${o===f.uid?"me":""} ${o===f.owner?"t":""}" title="${a.book?pe(A.title(a.book)):"地図を見ています"}">${o===f.owner?"亭主 ":""}${pe(a.name||"ゲスト")}${o===f.uid?"（あなた）":""}</span>`).join("")}</div>
    ${i?`<div class="row"><button class="${t.on?"on":"prim"}" data-c="lead">${t.on?"みんなを連れていく：オン":"みんなを連れていく"}</button></div>
      <p class="note">${t.on?"あなたが開いた本と視点に、客の画面がついてきます。":"オンにすると、あなたの画面に客がついてきます。"}</p>`:t.on?`<div class="row"><button class="${f.follow?"on":"prim"}" data-c="follow">${f.follow?"亭主についていく中":"亭主に戻る"}</button></div><p class="note">${f.follow?"自分で別の本を開くと、自由に見るに切り替わります。":"自由に見ています。"}</p>`:'<p class="note">亭主が案内を始めると、画面がついていきます。</p>'}
    <div class="row"><button class="zap" data-c="zap" ${A.book()?"":"disabled"}>⚡ 開いている本をみんなに送る</button></div>
    ${r.length?`<p class="note">この会読の ⚡</p><ol>${r.map(([o,a])=>`<li data-open="${o}">『${pe(A.title(+o))}』 ${a}</li>`).join("")}</ol>`:""}
    <div class="row"><button data-c="copy">招待リンクを写す</button>${i?`<button data-c="export">一座建立（記録を書き出す）${s?`・コメント ${s}`:""}</button>`:""}</div>
    <p class="msg note">${pe(f.msg||"")}</p></div>`}function Rn(){let n=A.slot();if(!n)return;let e=A.book();if(!f.code||!e){n.innerHTML="",n.dataset.cbook="";return}let t=Object.entries(f.comments[e]||{}).sort((s,o)=>(s[1].t||0)-(o[1].t||0)),i=Dt(),r=t.length?`<ul>${t.map(([s,o])=>`<li>${o.uid===f.uid||i?`<button class="del" data-del="${s}" aria-label="消す">消す</button>`:""}<b>${o.uid===f.owner?"亭主 ":""}${pe(o.name||"ゲスト")}</b>${pe(o.text)}</li>`).join("")}</ul>`:'<p class="note" style="margin:0 0 6px">まだコメントはありません。</p>';if(n.dataset.cbook===String(e)&&n.querySelector(".clist")){n.querySelector(".clist").innerHTML=r;return}n.dataset.cbook=String(e),n.innerHTML=`<h3>会読 ${pe(f.code)} のコメント</h3>
    <button class="zap" data-c="zap">⚡ この本をみんなに送る</button>
    <div class="clist">${r}</div>
    <textarea maxlength="300" placeholder="この本について、部屋のみんなに（300字まで）"></textarea>
    <div class="crow"><span>部屋の人だけに見えます</span><button data-c="post">送る</button></div>`}async function _u(){return f.uid?f.uid:(await ss(uu),new Promise(n=>{let e=os(uu,t=>{t&&(f.uid=t.uid,e(),n(t.uid))})}))}function mu(){let n=(O.querySelector(".nick")||{}).value;f.name=(n||"").trim().slice(0,20)||"ゲスト";try{localStorage.setItem("geoatlas.nick",f.name)}catch{}}async function wm(){mu(),await _u();for(let n=0;n<6;n++){let e=Array.from({length:5},()=>du[Math.floor(Math.random()*du.length)]).join(""),t=tr(Wo,`rooms/${e}/meta`);if(!(await ir(t)).exists())return await Ot(t,{owner:f.uid,created:We()}),gu(e)}throw new Error("部屋を作れませんでした。もう一度試してください。")}async function gu(n){if(n=String(n||"").toUpperCase().trim(),!/^[A-Z0-9]{5}$/.test(n))throw new Error("合言葉は 5 文字です。");mu(),await _u();let e=await ir(tr(Wo,`rooms/${n}/meta`));if(!e.exists())throw new Error(`「${n}」の部屋は見つかりません。合言葉を確かめてください。`);f.code=n,f.owner=e.val().owner,f.peers={},f.zaps={},f.zseen=new Set,f.comments={},f.lead=null,f.follow=!0,f.joinedAt=Date.now();let t=z(`presence/${f.uid}`);await ou(t).remove(),await Ot(t,{name:f.name,book:A.book()||0,t:We()}),f.lastBook=A.book()||0,f.off.push(rr(z("presence"),r=>{f.peers=r.val()||{},Ve()})),f.off.push(rr(z("lead"),r=>{f.lead=r.val(),Ve(),vu()})),f.off.push(rr(z("comments"),r=>{f.comments=r.val()||{},Rn()})),(await ir(z("zaps"))).forEach(r=>{f.zseen.add(r.key);let s=r.val();f.zaps[s.book]=(f.zaps[s.book]||0)+1}),f.off.push(cu(z("zaps"),r=>{if(f.zseen.has(r.key))return;f.zseen.add(r.key);let s=r.val();f.zaps[s.book]=(f.zaps[s.book]||0)+1,bm(s.book),Ve()})),history.replaceState(null,"",location.pathname+location.search+`#room=${n}`),Ve(),Rn(),Tm()}async function Em(){if(f.off.forEach(n=>{try{n()}catch{}}),f.off=[],f.code&&f.uid)try{await Uo(z(`presence/${f.uid}`)),Dt()&&f.lead&&f.lead.on&&await nr(z("lead"),{on:!1})}catch{}f.code=null,f.peers={},f.lead=null,cancelAnimationFrame(f.raf),sr.innerHTML="",Rn(),history.replaceState(null,"",location.pathname+location.search),Vo()}function vu(){let n=f.lead;!n||!n.on||Dt()||!f.follow||(f.applying=!0,(n.book||0)!==(A.book()||0)&&(n.book?A.open(n.book):A.close()),n.cam&&JSON.stringify(n.cam)!==JSON.stringify(f.lastCam)&&(f.lastCam=n.cam,setTimeout(()=>A.setCam(n.cam),n.book?250:0)),setTimeout(()=>{f.applying=!1},400))}var hu=0;function yu(n){if(!Dt()||!f.lead||!f.lead.on)return;let e=performance.now();if(!n&&e-hu<400)return;let t=A.cam(),i=A.book()||0,r=f._sent||{},s=!r.cam||t.some((o,a)=>Math.abs(o-r.cam[a])>.3);!n&&!s&&i===r.book||(hu=e,f._sent={cam:t,book:i},nr(z("lead"),{on:!0,book:i,cam:t,t:We()}).catch(o=>He("案内を送れませんでした："+o.message)))}function Iu(){let n=A.book()||0;n!==f.lastBook&&(f.lastBook=n,nr(z(`presence/${f.uid}`),{book:n,t:We()}).catch(()=>{}),!Dt()&&f.lead&&f.lead.on&&f.follow&&!f.applying&&n&&n!==(f.lead.book||0)&&(f.follow=!1,He("自由に見るに切り替えました。「亭主に戻る」でまたついていけます。")),n&&innerWidth<=760&&!O.classList.contains("min")&&O.classList.add("min"),Ve(),Rn(),yu(!0))}function bm(n){f.fx.push({book:n,t:performance.now()})}function Tm(){cancelAnimationFrame(f.raf);let n=()=>{if(!f.code)return;f.raf=requestAnimationFrame(n),f.code&&f.uid&&(A.book()||0)!==f.lastBook&&Iu(),yu(!1);let e={};Object.entries(f.peers).forEach(([r,s])=>{s&&s.book&&r!==f.uid&&(e[s.book]=e[s.book]||[]).push(r)});let t="";for(let r in e){let s=A.pos(+r);if(!s)continue;let o=e[r].includes(f.owner);t+=`<div class="pr${o?" t":""}" style="transform: translate(${(s.x+s.w+6).toFixed(0)}px, ${s.y.toFixed(0)}px) translate(-50%, -50%)">${e[r].length}</div>`}for(let r in f.comments){let s=Object.keys(f.comments[r]||{}).length;if(!s)continue;let o=A.pos(+r);!o||o.w<18||(t+=`<div class="cm" style="transform: translate(${(o.x+o.w/2).toFixed(0)}px, ${(o.y+o.w*1.43+3).toFixed(0)}px) translate(-50%, 0)">💬${s}</div>`)}let i=performance.now();f.fx=f.fx.filter(r=>i-r.t<1400);for(let r of f.fx){let s=A.pos(+r.book);if(!s)continue;let o=(s.x+s.w/2).toFixed(0),a=(s.y+s.w*.7).toFixed(0);t+=`<div class="zb" style="left:${o}px;top:${a}px;animation-delay:-${i-r.t|0}ms"></div><div class="zt" style="left:${o}px;top:${a}px;animation-delay:-${i-r.t|0}ms">⚡</div>`}t!==f._fxh&&(f._fxh=t,sr.innerHTML=t)};f.raf=requestAnimationFrame(n)}function Cm(){let n=new Date,e=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,t=Object.entries(f.zaps).sort((o,a)=>a[1]-o[1]),i=`# 一座建立 — 会読の記録　部屋 ${f.code}（${e}）

## ⚡ が多かった本

`+(t.length?t.map(([o,a])=>`- 『${A.title(+o)}』 ⚡${a}`).join(`
`):"（なし）")+`

## 本へのコメント
`,r=Object.entries(f.comments).filter(([,o])=>o&&Object.keys(o).length);r.length||(i+=`
（なし）
`),r.forEach(([o,a])=>{i+=`
### 『${A.title(+o)}』

`+Object.values(a).sort((c,l)=>(c.t||0)-(l.t||0)).map(c=>`- ${c.uid===f.owner?"亭主 ":""}${c.name}：${c.text.replace(/\n/g," ")}`).join(`
`)+`
`});let s=document.createElement("a");s.href=URL.createObjectURL(new Blob([i],{type:"text/markdown"})),s.download=`kaidoku-record_${f.code}_${e}.md`,document.body.appendChild(s),s.click(),setTimeout(()=>{URL.revokeObjectURL(s.href),s.remove()},500)}async function Ho(n,e){try{if(n==="close"){O.hidden=!0;return}if(n==="create"){O.querySelector(".msg").textContent="部屋を作っています…",await wm();return}if(n==="join"){O.querySelector(".msg").textContent="入っています…",await gu(O.querySelector(".code").value);return}if(n==="leave"){await Em();return}if(n==="min"){O.classList.toggle("min"),Ve();return}if(n==="lead"){let t=!(f.lead&&f.lead.on);f._sent=null,await Ot(z("lead"),{on:t,book:A.book()||0,cam:A.cam(),t:We()});return}if(n==="follow"){f.follow=!f.follow,f.lastCam=null,Ve(),vu();return}if(n==="zap"){let t=A.book();if(!t)return;await Fo(z("zaps"),{uid:f.uid,book:t,t:We()});return}if(n==="copy"){let t=location.origin+location.pathname+`#room=${f.code}`;try{await navigator.clipboard.writeText(t),He("リンクを写しました："+t)}catch{He(t)}return}if(n==="export"){Cm();return}if(n==="post"){let t=A.slot(),i=t&&t.querySelector("textarea"),r=i&&i.value.trim();if(!r)return;let s=A.book();await Fo(z(`comments/${s}`),{uid:f.uid,name:f.name,text:r.slice(0,300),t:We()}),i.value="";return}}catch(t){f.code?He(t.message):Vo(t.message)}}O.addEventListener("click",n=>{let e=n.target.closest("[data-c]");if(e){Ho(e.dataset.c,e);return}let t=n.target.closest("[data-open]");t&&A.open(+t.dataset.open)});O.addEventListener("keydown",n=>{n.key==="Enter"&&n.target.classList.contains("code")&&Ho("join")});document.addEventListener("click",n=>{if(!n.target.closest(".collabslot")||!f.code)return;let t=n.target.closest("[data-del]");if(t){Uo(z(`comments/${A.book()}/${t.dataset.del}`)).catch(r=>He(r.message));return}let i=n.target.closest("[data-c]");i&&Ho(i.dataset.c,i)});window.addEventListener("atlas:book",()=>{f.code&&f.uid&&Iu(),setTimeout(Rn,0)});window._collab={open:()=>{O.hidden=!1,f.code?Ve():Vo()}};})();
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-35c79a8a.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/database/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
