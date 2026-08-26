(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q)){b[q]=a[q]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(Object.getPrototypeOf(r)&&Object.getPrototypeOf(r).p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++){inherit(b[s],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s){A.y5(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.qk(b)
return new s(c,this)}:function(){if(s===null)s=A.qk(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.qk(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
qo(a,b,c,d){return{i:a,p:b,e:c,x:d}},
pr(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qm==null){A.xK()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.l(A.rq("Return interceptor for "+A.V(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ok
if(o==null)o=$.ok=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xS(a)
if(p!=null)return p
if(typeof a=="function")return B.iC
s=Object.getPrototypeOf(a)
if(s==null)return B.cz
if(s===Object.prototype)return B.cz
if(typeof q=="function"){o=$.ok
if(o==null)o=$.ok=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.b8,enumerable:false,writable:true,configurable:true})
return B.b8}return B.b8},
r1(a,b){if(a<0||a>4294967295)throw A.l(A.aS(a,0,4294967295,"length",null))
return J.v6(new Array(a),b)},
r2(a,b){if(a<0)throw A.l(A.c_("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("a4<0>"))},
v6(a,b){var s=A.e(a,b.h("a4<0>"))
s.$flags=1
return s},
r3(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
r4(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.r3(r))break;++b}return b},
v7(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.t(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.r3(q))break}return b},
bf(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eD.prototype
return J.hL.prototype}if(typeof a=="string")return J.cX.prototype
if(a==null)return J.eE.prototype
if(typeof a=="boolean")return J.hK.prototype
if(Array.isArray(a))return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
if(typeof a=="symbol")return J.dG.prototype
if(typeof a=="bigint")return J.dF.prototype
return a}if(a instanceof A.Q)return a
return J.pr(a)},
al(a){if(typeof a=="string")return J.cX.prototype
if(a==null)return a
if(Array.isArray(a))return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
if(typeof a=="symbol")return J.dG.prototype
if(typeof a=="bigint")return J.dF.prototype
return a}if(a instanceof A.Q)return a
return J.pr(a)},
bK(a){if(a==null)return a
if(Array.isArray(a))return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
if(typeof a=="symbol")return J.dG.prototype
if(typeof a=="bigint")return J.dF.prototype
return a}if(a instanceof A.Q)return a
return J.pr(a)},
xF(a){if(typeof a=="string")return J.cX.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.dV.prototype
return a},
de(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cf.prototype
if(typeof a=="symbol")return J.dG.prototype
if(typeof a=="bigint")return J.dF.prototype
return a}if(a instanceof A.Q)return a
return J.pr(a)},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bf(a).O(a,b)},
M(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xP(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).j(a,b)},
ar(a,b,c){return J.bK(a).i(a,b,c)},
uH(a,b){return J.bK(a).t(a,b)},
qL(a,b){return J.xF(a).e7(a,b)},
qM(a,b){return J.bK(a).cw(a,b)},
aU(a,b,c){return J.de(a).aR(a,b,c)},
qN(a,b){return J.bK(a).I(a,b)},
pN(a,b){return J.de(a).N(a,b)},
ee(a){return J.de(a).ga_(a)},
fT(a){return J.bK(a).gF(a)},
bH(a){return J.bf(a).gL(a)},
ef(a){return J.al(a).gB(a)},
dg(a){return J.al(a).gM(a)},
b1(a){return J.bK(a).gv(a)},
qO(a){return J.de(a).gR(a)},
bg(a){return J.al(a).gk(a)},
uI(a){return J.bf(a).gU(a)},
pO(a){return J.de(a).ga2(a)},
k8(a,b,c){return J.bK(a).ab(a,b,c)},
cL(a,b,c,d){return J.bK(a).cL(a,b,c,d)},
uJ(a,b){return J.bK(a).T(a,b)},
r(a){return J.bf(a).l(a)},
uK(a,b){return J.bK(a).aF(a,b)},
ct(a,b){return J.bK(a).eA(a,b)},
dC:function dC(){},
hK:function hK(){},
eE:function eE(){},
c:function c(){},
cz:function cz(){},
ib:function ib(){},
dV:function dV(){},
cf:function cf(){},
dF:function dF(){},
dG:function dG(){},
a4:function a4(a){this.$ti=a},
hJ:function hJ(){},
m_:function m_(a){this.$ti=a},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eF:function eF(){},
eD:function eD(){},
hL:function hL(){},
cX:function cX(){}},A={pR:function pR(){},
qU(a,b,c){if(t.W.b(a))return new A.fb(a,b.h("@<0>").C(c).h("fb<1,2>"))
return new A.cQ(a,b.h("@<0>").C(c).h("cQ<1,2>"))},
r7(a){return new A.hP("Field '"+a+"' has been assigned during initialization.")},
pt(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cj(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nE(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fM(a,b,c){return a},
qn(a){var s,r
for(s=$.bG.length,r=0;r<s;++r)if(a===$.bG[r])return!0
return!1},
q_(a,b,c,d){A.eX(b,"start")
if(c!=null){A.eX(c,"end")
if(b>c)A.ca(A.aS(b,0,c,"start",null))}return new A.f1(a,b,c,d.h("f1<0>"))},
bl(a,b,c,d){if(t.W.b(a))return new A.cU(a,b,c.h("@<0>").C(d).h("cU<1,2>"))
return new A.aP(a,b,c.h("@<0>").C(d).h("aP<1,2>"))},
iy(a,b,c){var s="takeCount"
A.uL(b,s,t.S)
A.eX(b,s)
if(t.W.b(a))return new A.es(a,b,c.h("es<0>"))
return new A.d2(a,b,c.h("d2<0>"))},
dD(){return new A.d_("No element")},
dZ:function dZ(){},
ek:function ek(a,b){this.a=a
this.$ti=b},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
fb:function fb(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b){this.a=a
this.$ti=b},
kR:function kR(a,b){this.a=a
this.b=b},
kQ:function kQ(a){this.a=a},
hP:function hP(a){this.a=a},
dr:function dr(a){this.a=a},
nd:function nd(){},
D:function D(){},
as:function as(){},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
by:function by(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.$ti=c},
eN:function eN(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ad:function ad(a,b,c){this.a=a
this.b=b
this.$ti=c},
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
es:function es(a,b,c){this.a=a
this.b=b
this.$ti=c},
f2:function f2(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b){this.a=a
this.$ti=b},
f7:function f7(a,b){this.a=a
this.$ti=b},
av:function av(){},
cC:function cC(){},
dW:function dW(){},
ha(a,b,c){var s,r,q,p,o,n,m,l=A.N(a),k=A.eM(new A.cg(a,l.h("cg<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.aE)(k),++i,p=o){r=k[i]
c.a(a.j(0,r))
o=p+1
q[r]=p}n=A.eM(new A.aO(a,l.h("aO<2>")),!0,c)
m=new A.a6(q,n,b.h("@<0>").C(c).h("a6<1,2>"))
m.$keys=k
return m}return new A.en(A.pW(a,b,c),b.h("@<0>").C(c).h("en<1,2>"))},
qW(){throw A.l(A.S("Cannot modify unmodifiable Map"))},
ty(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xP(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
V(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.r(a)
return s},
eV(a){var s,r=$.rc
if(r==null)r=$.rc=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
rd(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.t(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
ig(a){var s,r,q,p
if(a instanceof A.Q)return A.bF(A.aC(a),null)
s=J.bf(a)
if(s===B.iB||s===B.iD||t.ak.b(a)){r=B.be(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bF(A.aC(a),null)},
re(a){var s,r,q
if(a==null||typeof a=="number"||A.oM(a))return J.r(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cv)return a.l(0)
if(a instanceof A.bD)return a.e0(!0)
s=$.uo()
for(r=0;r<1;++r){q=s[r].iw(a)
if(q!=null)return q}return"Instance of '"+A.ig(a)+"'"},
va(){return Date.now()},
vj(){var s,r
if($.mA!==0)return
$.mA=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mA=1e6
$.ih=new A.mz(r)},
vk(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.r.co(s,10)|55296)>>>0,s&1023|56320)}}throw A.l(A.aS(a,0,1114111,null,null))},
bB(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vi(a){return a.c?A.bB(a).getUTCFullYear()+0:A.bB(a).getFullYear()+0},
vg(a){return a.c?A.bB(a).getUTCMonth()+1:A.bB(a).getMonth()+1},
vc(a){return a.c?A.bB(a).getUTCDate()+0:A.bB(a).getDate()+0},
vd(a){return a.c?A.bB(a).getUTCHours()+0:A.bB(a).getHours()+0},
vf(a){return a.c?A.bB(a).getUTCMinutes()+0:A.bB(a).getMinutes()+0},
vh(a){return a.c?A.bB(a).getUTCSeconds()+0:A.bB(a).getSeconds()+0},
ve(a){return a.c?A.bB(a).getUTCMilliseconds()+0:A.bB(a).getMilliseconds()+0},
vb(a){var s=a.$thrownJsError
if(s==null)return null
return A.cq(s)},
rf(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
xI(a){throw A.l(A.tb(a))},
t(a,b){if(a==null)J.bg(a)
throw A.l(A.pp(a,b))},
pp(a,b){var s,r="index"
if(!A.t_(b))return new A.bL(!0,b,r,null)
s=A.b_(J.bg(a))
if(b<0||b>=s)return A.az(b,s,a,r)
return A.vl(b,r)},
xB(a,b,c){if(a>c)return A.aS(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aS(b,a,c,"end",null)
return new A.bL(!0,b,"end",null)},
tb(a){return new A.bL(!0,a,null,null)},
l(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.cl()
b.dartException=a
s=A.y7
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
y7(){return J.r(this.dartException)},
ca(a,b){throw A.aK(a,b==null?new Error():b)},
bt(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ca(A.wy(a,b,c),s)},
wy(a,b,c){var s,r,q,p,o,n,m,l,k
if(typeof b=="string")s=b
else{r="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
q=r.length
p=b
if(p>q){c=p/q|0
p%=q}s=r[p]}o=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
n=t.j.b(a)?"list":"ByteData"
m=a.$flags|0
l="a "
if((m&4)!==0)k="constant "
else if((m&2)!==0){k="unmodifiable "
l="an "}else k=(m&1)!==0?"fixed-length ":""
return new A.f6("'"+s+"': Cannot "+o+" "+l+k+n)},
aE(a){throw A.l(A.aR(a))},
cm(a){var s,r,q,p,o,n
a=A.tr(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.nO(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
nP(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rp(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
pS(a,b){var s=b==null,r=s?null:b.method
return new A.hM(a,r,s?null:b.receiver)},
aL(a){var s
if(a==null)return new A.mw(a)
if(a instanceof A.et){s=a.a
return A.cI(a,s==null?A.aa(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cI(a,a.dartException)
return A.xl(a)},
cI(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
xl(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.r.co(r,16)&8191)===10)switch(q){case 438:return A.cI(a,A.pS(A.V(s)+" (Error "+q+")",null))
case 445:case 5007:A.V(s)
return A.cI(a,new A.eT())}}if(a instanceof TypeError){p=$.tO()
o=$.tP()
n=$.tQ()
m=$.tR()
l=$.tU()
k=$.tV()
j=$.tT()
$.tS()
i=$.tX()
h=$.tW()
g=p.a6(s)
if(g!=null)return A.cI(a,A.pS(A.U(s),g))
else{g=o.a6(s)
if(g!=null){g.method="call"
return A.cI(a,A.pS(A.U(s),g))}else if(n.a6(s)!=null||m.a6(s)!=null||l.a6(s)!=null||k.a6(s)!=null||j.a6(s)!=null||m.a6(s)!=null||i.a6(s)!=null||h.a6(s)!=null){A.U(s)
return A.cI(a,new A.eT())}}return A.cI(a,new A.iN(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.f_()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cI(a,new A.bL(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.f_()
return a},
cq(a){var s
if(a instanceof A.et)return a.b
if(a==null)return new A.fu(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fu(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fN(a){if(a==null)return J.bH(a)
if(typeof a=="object")return A.eV(a)
return J.bH(a)},
xv(a){if(typeof a=="number")return B.X.gL(a)
if(a instanceof A.jS)return A.eV(a)
if(a instanceof A.bD)return a.gL(a)
return A.fN(a)},
xD(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
xE(a,b){var s,r=a.length
for(s=0;s<r;++s)b.t(0,a[s])
return b},
wN(a,b,c,d,e,f){t.Z.a(a)
switch(A.b_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.l(new A.o3("Unsupported number of arguments for wrapped closure"))},
e9(a,b){var s=a.$identity
if(!!s)return s
s=A.xw(a,b)
a.$identity=s
return s},
xw(a,b){var s
switch(b){case 0:s=a.$0
break
case 1:s=a.$1
break
case 2:s=a.$2
break
case 3:s=a.$3
break
case 4:s=a.$4
break
default:s=null}if(s!=null)return s.bind(a)
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.wN)},
uT(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ir().constructor.prototype):Object.create(new A.dl(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.qV(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.uP(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.qV(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
uP(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.l("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.uN)}throw A.l("Error in functionType of tearoff")},
uQ(a,b,c,d){var s=A.qT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
qV(a,b,c,d){if(c)return A.uS(a,b,d)
return A.uQ(b.length,d,a,b)},
uR(a,b,c,d){var s=A.qT,r=A.uO
switch(b?-1:a){case 0:throw A.l(new A.ik("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
uS(a,b,c){var s,r
if($.qR==null)$.qR=A.qQ("interceptor")
if($.qS==null)$.qS=A.qQ("receiver")
s=b.length
r=A.uR(s,c,a,b)
return r},
qk(a){return A.uT(a)},
uN(a,b){return A.fD(v.typeUniverse,A.aC(a.a),b)},
qT(a){return a.a},
uO(a){return a.b},
qQ(a){var s,r,q,p=new A.dl("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.l(A.c_("Field name "+a+" not found.",null))},
xG(a){return v.getIsolateTag(a)},
Ai(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xS(a){var s,r,q,p,o,n=A.U($.tm.$1(a)),m=$.pq[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.px[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bE($.ta.$2(a,n))
if(q!=null){m=$.pq[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.px[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.pA(s)
$.pq[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.px[n]=s
return s}if(p==="-"){o=A.pA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.tp(a,s)
if(p==="*")throw A.l(A.rq(n))
if(v.leafTags[n]===true){o=A.pA(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.tp(a,s)},
tp(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.qo(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
pA(a){return J.qo(a,!1,null,!!a.$ia3)},
xU(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.pA(s)
else return J.qo(s,c,null,null)},
xK(){if(!0===$.qm)return
$.qm=!0
A.xL()},
xL(){var s,r,q,p,o,n,m,l
$.pq=Object.create(null)
$.px=Object.create(null)
A.xJ()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.tq.$1(o)
if(n!=null){m=A.xU(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
xJ(){var s,r,q,p,o,n,m=B.d6()
m=A.e8(B.d7,A.e8(B.d8,A.e8(B.bf,A.e8(B.bf,A.e8(B.d9,A.e8(B.da,A.e8(B.db(B.be),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.tm=new A.pu(p)
$.ta=new A.pv(o)
$.tq=new A.pw(n)},
e8(a,b){return a(b)||b},
vT(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.t(b,s)
if(!J.a9(r,b[s]))return!1}return!0},
xz(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
r5(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.l(A.aV("Illegal RegExp pattern ("+String(o)+")",a,null))},
xZ(a,b,c){var s=a.indexOf(b,c)
return s>=0},
ql(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
y1(a,b,c,d){var s=b.ds(a,d)
if(s==null)return a
return A.tu(a,s.b.index,s.gaV(0),c)},
tr(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cJ(a,b,c){var s
if(typeof b=="string")return A.y0(a,b,c)
if(b instanceof A.dE){s=b.gdI()
s.lastIndex=0
return a.replace(s,A.ql(c))}return A.y_(a,b,c)},
y_(a,b,c){var s,r,q,p
for(s=J.qL(b,a),s=s.gv(s),r=0,q="";s.m();){p=s.gp(s)
q=q+a.substring(r,p.gbR(p))+c
r=p.gaV(p)}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
y0(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.tr(b),"g"),A.ql(c))},
y2(a,b,c,d){return d===0?a.replace(b.b,A.ql(c)):A.y1(a,b,c,d)},
tu(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
ae:function ae(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a){this.a=a},
en:function en(a,b){this.a=a
this.$ti=b},
em:function em(){},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b){this.a=a
this.$ti=b},
co:function co(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ds:function ds(){},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b){this.a=a
this.$ti=b},
mz:function mz(a){this.a=a},
eZ:function eZ(){},
nO:function nO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eT:function eT(){},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
iN:function iN(a){this.a=a},
mw:function mw(a){this.a=a},
et:function et(a,b){this.a=a
this.b=b},
fu:function fu(a){this.a=a
this.b=null},
cv:function cv(){},
h6:function h6(){},
h7:function h7(){},
iz:function iz(){},
ir:function ir(){},
dl:function dl(a,b){this.a=a
this.b=b},
ik:function ik(a){this.a=a},
bT:function bT(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
m0:function m0(a){this.a=a},
m3:function m3(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cg:function cg(a,b){this.a=a
this.$ti=b},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aO:function aO(a,b){this.a=a
this.$ti=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
af:function af(a,b){this.a=a
this.$ti=b},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eG:function eG(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pu:function pu(a){this.a=a},
pv:function pv(a){this.a=a},
pw:function pw(a){this.a=a},
bD:function bD(){},
db:function db(){},
e_:function e_(){},
e0:function e0(){},
dE:function dE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fl:function fl(a){this.b=a},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
f0:function f0(a,b){this.a=a
this.c=b},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
wz(a){return a},
v8(a){return new Uint8Array(a)},
cp(a,b,c){if(a>>>0!==a||a>=c)throw A.l(A.pp(b,a))},
wv(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.l(A.xB(a,b,c))
return b},
dL:function dL(){},
eP:function eP(){},
hZ:function hZ(){},
aX:function aX(){},
eO:function eO(){},
bz:function bz(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
eQ:function eQ(){},
eR:function eR(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){},
pY(a,b){var s=b.c
return s==null?b.c=A.fB(a,"bi",[b.x]):s},
rh(a){var s=a.w
if(s===6||s===7)return A.rh(a.x)
return s===11||s===12},
vo(a){return a.as},
xV(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aD(a){return A.ov(v.typeUniverse,a,!1)},
dc(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dc(a1,s,a3,a4)
if(r===s)return a2
return A.rG(a1,r,!0)
case 7:s=a2.x
r=A.dc(a1,s,a3,a4)
if(r===s)return a2
return A.rF(a1,r,!0)
case 8:q=a2.y
p=A.e7(a1,q,a3,a4)
if(p===q)return a2
return A.fB(a1,a2.x,p)
case 9:o=a2.x
n=A.dc(a1,o,a3,a4)
m=a2.y
l=A.e7(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.q8(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.e7(a1,j,a3,a4)
if(i===j)return a2
return A.rH(a1,k,i)
case 11:h=a2.x
g=A.dc(a1,h,a3,a4)
f=a2.y
e=A.xg(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.rE(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.e7(a1,d,a3,a4)
o=a2.x
n=A.dc(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.q9(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.l(A.fY("Attempted to substitute unexpected RTI kind "+a0))}},
e7(a,b,c,d){var s,r,q,p,o=b.length,n=A.oE(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dc(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xh(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.oE(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dc(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xg(a,b,c,d){var s,r=b.a,q=A.e7(a,r,c,d),p=b.b,o=A.e7(a,p,c,d),n=b.c,m=A.xh(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jd()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
tf(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.xH(s)
return a.$S()}return null},
xN(a,b){var s
if(A.rh(b))if(a instanceof A.cv){s=A.tf(a)
if(s!=null)return s}return A.aC(a)},
aC(a){if(a instanceof A.Q)return A.N(a)
if(Array.isArray(a))return A.au(a)
return A.qg(J.bf(a))},
au(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
N(a){var s=a.$ti
return s!=null?s:A.qg(a)},
qg(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.wL(a,s)},
wL(a,b){var s=a instanceof A.cv?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.w2(v.typeUniverse,s.name)
b.$ccache=r
return r},
xH(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ov(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
ps(a){return A.dd(A.N(a))},
qi(a){var s
if(a instanceof A.bD)return A.xC(a.$r,a.bj())
s=a instanceof A.cv?A.tf(a):null
if(s!=null)return s
if(t.dm.b(a))return J.uI(a).a
if(Array.isArray(a))return A.au(a)
return A.aC(a)},
dd(a){var s=a.r
return s==null?a.r=new A.jS(a):s},
xC(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.t(q,0)
s=A.fD(v.typeUniverse,A.qi(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.t(q,r)
s=A.rI(v.typeUniverse,s,A.qi(q[r]))}return A.fD(v.typeUniverse,s,a)},
bY(a){return A.dd(A.ov(v.typeUniverse,a,!1))},
wK(a){var s=this
s.b=A.xd(s)
return s.b(a)},
xd(a){var s,r,q,p,o
if(a===t.K)return A.wT
if(A.df(a))return A.wX
s=a.w
if(s===6)return A.wF
if(s===1)return A.t1
if(s===7)return A.wO
r=A.xc(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.df)){a.f="$i"+q
if(q==="C")return A.wR
if(a===t.m)return A.wQ
return A.wW}}else if(s===10){p=A.xz(a.x,a.y)
o=p==null?A.t1:p
return o==null?A.aa(o):o}return A.wD},
xc(a){if(a.w===8){if(a===t.S)return A.t_
if(a===t.i||a===t.di)return A.wS
if(a===t.N)return A.wV
if(a===t.y)return A.oM}return null},
wJ(a){var s=this,r=A.wC
if(A.df(s))r=A.wr
else if(s===t.K)r=A.aa
else if(A.ea(s)){r=A.wE
if(s===t.h6)r=A.qf
else if(s===t.dk)r=A.bE
else if(s===t.fQ)r=A.wn
else if(s===t.cg)r=A.rT
else if(s===t.cD)r=A.wo
else if(s===t.bX)r=A.aQ}else if(s===t.S)r=A.b_
else if(s===t.N)r=A.U
else if(s===t.y)r=A.e4
else if(s===t.di)r=A.wp
else if(s===t.i)r=A.rS
else if(s===t.m)r=A.x
s.a=r
return s.a(a)},
wD(a){var s=this
if(a==null)return A.ea(s)
return A.xQ(v.typeUniverse,A.xN(a,s),s)},
wF(a){if(a==null)return!0
return this.x.b(a)},
wW(a){var s,r=this
if(a==null)return A.ea(r)
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.bf(a)[s]},
wR(a){var s,r=this
if(a==null)return A.ea(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.bf(a)[s]},
wQ(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.Q)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
t0(a){if(typeof a=="object"){if(a instanceof A.Q)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wC(a){var s=this
if(a==null){if(A.ea(s))return a}else if(s.b(a))return a
throw A.aK(A.rV(a,s),new Error())},
wE(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.rV(a,s),new Error())},
rV(a,b){return new A.fz("TypeError: "+A.rw(a,A.bF(b,null)))},
rw(a,b){return A.hm(a)+": type '"+A.bF(A.qi(a),null)+"' is not a subtype of type '"+b+"'"},
bJ(a,b){return new A.fz("TypeError: "+A.rw(a,b))},
wO(a){var s=this
return s.x.b(a)||A.pY(v.typeUniverse,s).b(a)},
wT(a){return a!=null},
aa(a){if(a!=null)return a
throw A.aK(A.bJ(a,"Object"),new Error())},
wX(a){return!0},
wr(a){return a},
t1(a){return!1},
oM(a){return!0===a||!1===a},
e4(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.bJ(a,"bool"),new Error())},
wn(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.bJ(a,"bool?"),new Error())},
rS(a){if(typeof a=="number")return a
throw A.aK(A.bJ(a,"double"),new Error())},
wo(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.bJ(a,"double?"),new Error())},
t_(a){return typeof a=="number"&&Math.floor(a)===a},
b_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.bJ(a,"int"),new Error())},
qf(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.bJ(a,"int?"),new Error())},
wS(a){return typeof a=="number"},
wp(a){if(typeof a=="number")return a
throw A.aK(A.bJ(a,"num"),new Error())},
rT(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.bJ(a,"num?"),new Error())},
wV(a){return typeof a=="string"},
U(a){if(typeof a=="string")return a
throw A.aK(A.bJ(a,"String"),new Error())},
bE(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.bJ(a,"String?"),new Error())},
x(a){if(A.t0(a))return a
throw A.aK(A.bJ(a,"JSObject"),new Error())},
aQ(a){if(a==null)return a
if(A.t0(a))return a
throw A.aK(A.bJ(a,"JSObject?"),new Error())},
t7(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bF(a[q],b)
return s},
x3(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.t7(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bF(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rW(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.f.t(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.t(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bF(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bF(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bF(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bF(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bF(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bF(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bF(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bF(a.x,b)+">"
if(l===8){p=A.xk(a.x)
o=a.y
return o.length>0?p+("<"+A.t7(o,b)+">"):p}if(l===10)return A.x3(a,b)
if(l===11)return A.rW(a,b,null)
if(l===12)return A.rW(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.t(b,n)
return b[n]}return"?"},
xk(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
w3(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
w2(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ov(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fC(a,5,"#")
q=A.oE(s)
for(p=0;p<s;++p)q[p]=r
o=A.fB(a,b,q)
n[b]=o
return o}else return m},
w1(a,b){return A.rQ(a.tR,b)},
w0(a,b){return A.rQ(a.eT,b)},
ov(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.rB(A.rz(a,null,b,!1))
r.set(b,s)
return s},
fD(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.rB(A.rz(a,b,c,!0))
q.set(c,r)
return r},
rI(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.q8(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cG(a,b){b.a=A.wJ
b.b=A.wK
return b},
fC(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bW(null,null)
s.w=b
s.as=c
r=A.cG(a,s)
a.eC.set(c,r)
return r},
rG(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.vZ(a,b,r,c)
a.eC.set(r,s)
return s},
vZ(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.df(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.ea(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bW(null,null)
q.w=6
q.x=b
q.as=c
return A.cG(a,q)},
rF(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vX(a,b,r,c)
a.eC.set(r,s)
return s},
vX(a,b,c,d){var s,r
if(d){s=b.w
if(A.df(b)||b===t.K)return b
else if(s===1)return A.fB(a,"bi",[b])
else if(b===t.b||b===t.T)return t.eH}r=new A.bW(null,null)
r.w=7
r.x=b
r.as=c
return A.cG(a,r)},
w_(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bW(null,null)
s.w=13
s.x=b
s.as=q
r=A.cG(a,s)
a.eC.set(q,r)
return r},
fA(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
vW(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fB(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fA(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bW(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cG(a,r)
a.eC.set(p,q)
return q},
q8(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fA(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bW(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cG(a,o)
a.eC.set(q,n)
return n},
rH(a,b,c){var s,r,q="+"+(b+"("+A.fA(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bW(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cG(a,s)
a.eC.set(q,r)
return r},
rE(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fA(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fA(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.vW(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bW(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cG(a,p)
a.eC.set(r,o)
return o},
q9(a,b,c,d){var s,r=b.as+("<"+A.fA(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.vY(a,b,c,r,d)
a.eC.set(r,s)
return s},
vY(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.oE(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dc(a,b,r,0)
m=A.e7(a,c,r,0)
return A.q9(a,n,m,c!==m)}}l=new A.bW(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cG(a,l)},
rz(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
rB(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vO(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.rA(a,r,l,k,!1)
else if(q===46)r=A.rA(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.da(a.u,a.e,k.pop()))
break
case 94:k.push(A.w_(a.u,k.pop()))
break
case 35:k.push(A.fC(a.u,5,"#"))
break
case 64:k.push(A.fC(a.u,2,"@"))
break
case 126:k.push(A.fC(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vQ(a,k)
break
case 38:A.vP(a,k)
break
case 63:p=a.u
k.push(A.rG(p,A.da(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.rF(p,A.da(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.vN(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.rC(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vS(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-2)
break
case 43:n=l.indexOf("(",r)
k.push(l.substring(r,n))
k.push(-4)
k.push(a.p)
a.p=k.length
r=n+1
break
default:throw"Bad character "+q}}}m=k.pop()
return A.da(a.u,a.e,m)},
vO(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
rA(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.w3(s,o.x)[p]
if(n==null)A.ca('No "'+p+'" in "'+A.vo(o)+'"')
d.push(A.fD(s,o,n))}else d.push(p)
return m},
vQ(a,b){var s,r=a.u,q=A.ry(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fB(r,p,q))
else{s=A.da(r,a.e,p)
switch(s.w){case 11:b.push(A.q9(r,s,q,a.n))
break
default:b.push(A.q8(r,s,q))
break}}},
vN(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.ry(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.da(p,a.e,o)
q=new A.jd()
q.a=s
q.b=n
q.c=m
b.push(A.rE(p,r,q))
return
case-4:b.push(A.rH(p,b.pop(),s))
return
default:throw A.l(A.fY("Unexpected state under `()`: "+A.V(o)))}},
vP(a,b){var s=b.pop()
if(0===s){b.push(A.fC(a.u,1,"0&"))
return}if(1===s){b.push(A.fC(a.u,4,"1&"))
return}throw A.l(A.fY("Unexpected extended operation "+A.V(s)))},
ry(a,b){var s=b.splice(a.p)
A.rC(a.u,a.e,s)
a.p=b.pop()
return s},
da(a,b,c){if(typeof c=="string")return A.fB(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vR(a,b,c)}else return c},
rC(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.da(a,b,c[s])},
vS(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.da(a,b,c[s])},
vR(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.l(A.fY("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.l(A.fY("Bad index "+c+" for "+b.l(0)))},
xQ(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aI(a,b,null,c,null)
r.set(c,s)}return s},
aI(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.df(d))return!0
s=b.w
if(s===4)return!0
if(A.df(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aI(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.aI(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aI(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aI(a,b.x,c,d,e))return!1
return A.aI(a,A.pY(a,b),c,d,e)}if(s===6)return A.aI(a,p,c,d,e)&&A.aI(a,b.x,c,d,e)
if(q===7){if(A.aI(a,b,c,d.x,e))return!0
return A.aI(a,b,c,A.pY(a,d),e)}if(q===6)return A.aI(a,b,c,p,e)||A.aI(a,b,c,d.x,e)
if(r)return!1
p=s!==11
if((!p||s===12)&&d===t.Z)return!0
o=s===10
if(o&&d===t.gT)return!0
if(q===12){if(b===t.cj)return!0
if(s!==12)return!1
n=b.y
m=d.y
l=n.length
if(l!==m.length)return!1
c=c==null?n:n.concat(c)
e=e==null?m:m.concat(e)
for(k=0;k<l;++k){j=n[k]
i=m[k]
if(!A.aI(a,j,c,i,e)||!A.aI(a,i,e,j,c))return!1}return A.rZ(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.rZ(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.wP(a,b,c,d,e)}if(o&&q===10)return A.wU(a,b,c,d,e)
return!1},
rZ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aI(a3,a4.x,a5,a6.x,a7))return!1
s=a4.y
r=a6.y
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.aI(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aI(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aI(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.aI(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
wP(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fD(a,b,r[o])
return A.rR(a,p,null,c,d.y,e)}return A.rR(a,b.y,null,c,d.y,e)},
rR(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aI(a,b[s],d,e[s],f))return!1
return!0},
wU(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aI(a,r[s],c,q[s],e))return!1
return!0},
ea(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.df(a))if(s!==6)r=s===7&&A.ea(a.x)
return r},
df(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
rQ(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
oE(a){return a>0?new Array(a):v.typeUniverse.sEA},
bW:function bW(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jd:function jd(){this.c=this.b=this.a=null},
jS:function jS(a){this.a=a},
j8:function j8(){},
fz:function fz(a){this.a=a},
vH(){var s,r,q
if(self.scheduleImmediate!=null)return A.xp()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.e9(new A.nY(s),1)).observe(r,{childList:true})
return new A.nX(s,r,q)}else if(self.setImmediate!=null)return A.xq()
return A.xr()},
vI(a){self.scheduleImmediate(A.e9(new A.nZ(t.M.a(a)),0))},
vJ(a){self.setImmediate(A.e9(new A.o_(t.M.a(a)),0))},
vK(a){A.q0(B.aV,t.M.a(a))},
q0(a,b){var s=B.r.a9(a.a,1000)
return A.vU(s<0?0:s,b)},
ro(a,b){var s=B.r.a9(a.a,1000)
return A.vV(s<0?0:s,b)},
vU(a,b){var s=new A.fy(!0)
s.eL(a,b)
return s},
vV(a,b){var s=new A.fy(!1)
s.eM(a,b)
return s},
bd(a){return new A.iY(new A.an($.ag,a.h("an<0>")),a.h("iY<0>"))},
bc(a,b){a.$2(0,null)
b.b=!0
return b.a},
b0(a,b){A.ws(a,b)},
bb(a,b){b.aS(0,a)},
ba(a,b){b.cA(A.aL(a),A.cq(a))},
ws(a,b){var s,r,q=new A.oG(b),p=new A.oH(b)
if(a instanceof A.an)a.e_(q,p,t.z)
else{s=t.z
if(a instanceof A.an)a.cV(q,p,s)
else{r=new A.an($.ag,t._)
r.a=8
r.c=a
r.e_(q,p,s)}}},
be(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ag.es(new A.oU(s),t.H,t.S,t.z)},
rD(a,b,c){return 0},
kj(a){var s
if(t.C.b(a)){s=a.gaH()
if(s!=null)return s}return B.ao},
v0(a,b,c){var s=new A.an($.ag,c.h("an<0>"))
A.c5(a,new A.lE(b,s,c))
return s},
rY(a,b){if($.ag===B.z)return null
return null},
wM(a,b){if($.ag!==B.z)A.rY(a,b)
if(b==null)if(t.C.b(a)){b=a.gaH()
if(b==null){A.rf(a,B.ao)
b=B.ao}}else b=B.ao
else if(t.C.b(a))A.rf(a,b)
return new A.b6(a,b)},
rx(a,b){var s=new A.an($.ag,b.h("an<0>"))
b.a(a)
s.a=8
s.c=a
return s},
o8(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.vp()
b.bY(new A.b6(new A.bL(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dN(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.aP()
b.bc(o.a)
A.d6(b,p)
return}b.a^=2
A.e6(null,null,b.b,t.M.a(new A.o9(o,b)))},
d6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.oN(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.d6(d.a,c)
q.a=l
k=l.a}p=d.a
j=p.c
q.b=n
q.c=j
if(o){i=c.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=c.b.b
if(n){p=p.b===h
p=!(p||p)}else p=!1
if(p){s.a(j)
A.oN(j.a,j.b)
return}g=$.ag
if(g!==h)$.ag=h
else g=null
c=c.c
if((c&15)===8)new A.od(q,d,n).$0()
else if(o){if((c&1)!==0)new A.oc(q,j).$0()}else if((c&2)!==0)new A.ob(d,q).$0()
if(g!=null)$.ag=g
c=q.c
if(c instanceof A.an){p=q.a.$ti
p=p.h("bi<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bq(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.o8(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bq(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
x4(a,b){var s
if(t.ag.b(a))return b.es(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw A.l(A.eh(a,"onError",u.c))},
x_(){var s,r
for(s=$.e5;s!=null;s=$.e5){$.fK=null
r=s.b
$.e5=r
if(r==null)$.fJ=null
s.a.$0()}},
xf(){$.qh=!0
try{A.x_()}finally{$.fK=null
$.qh=!1
if($.e5!=null)$.qF().$1(A.tc())}},
t9(a){var s=new A.iZ(a),r=$.fJ
if(r==null){$.e5=$.fJ=s
if(!$.qh)$.qF().$1(A.tc())}else $.fJ=r.b=s},
x7(a){var s,r,q,p=$.e5
if(p==null){A.t9(a)
$.fK=$.fJ
return}s=new A.iZ(a)
r=$.fK
if(r==null){s.b=p
$.e5=$.fK=s}else{q=r.b
s.b=q
$.fK=r.b=s
if(q==null)$.fJ=s}},
pG(a){var s=null,r=$.ag
if(B.z===r){A.e6(s,s,B.z,a)
return}A.e6(s,s,r,t.M.a(r.cz(a)))},
ze(a,b){A.fM(a,"stream",t.K)
return new A.jE(b.h("jE<0>"))},
c5(a,b){var s=$.ag
if(s===B.z)return A.q0(a,t.M.a(b))
return A.q0(a,t.M.a(s.cz(b)))},
rn(a,b){var s=$.ag
if(s===B.z)return A.ro(a,t.fM.a(b))
return A.ro(a,t.fM.a(s.e8(b,t.E)))},
oN(a,b){A.x7(new A.oO(a,b))},
t5(a,b,c,d,e){var s,r=$.ag
if(r===c)return d.$0()
$.ag=c
s=r
try{r=d.$0()
return r}finally{$.ag=s}},
t6(a,b,c,d,e,f,g){var s,r=$.ag
if(r===c)return d.$1(e)
$.ag=c
s=r
try{r=d.$1(e)
return r}finally{$.ag=s}},
x5(a,b,c,d,e,f,g,h,i){var s,r=$.ag
if(r===c)return d.$2(e,f)
$.ag=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ag=s}},
e6(a,b,c,d){t.M.a(d)
if(B.z!==c){d=c.cz(d)
d=d}A.t9(d)},
nY:function nY(a){this.a=a},
nX:function nX(a,b,c){this.a=a
this.b=b
this.c=c},
nZ:function nZ(a){this.a=a},
o_:function o_(a){this.a=a},
fy:function fy(a){this.a=a
this.b=null
this.c=0},
ou:function ou(a,b){this.a=a
this.b=b},
ot:function ot(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b){this.a=a
this.b=!1
this.$ti=b},
oG:function oG(a){this.a=a},
oH:function oH(a){this.a=a},
oU:function oU(a){this.a=a},
fv:function fv(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
e1:function e1(a,b){this.a=a
this.$ti=b},
b6:function b6(a,b){this.a=a
this.b=b},
lE:function lE(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(){},
cn:function cn(a,b){this.a=a
this.$ti=b},
d5:function d5(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
an:function an(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
o5:function o5(a,b){this.a=a
this.b=b},
oa:function oa(a,b){this.a=a
this.b=b},
o9:function o9(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
o6:function o6(a,b){this.a=a
this.b=b},
od:function od(a,b,c){this.a=a
this.b=b
this.c=c},
oe:function oe(a,b){this.a=a
this.b=b},
of:function of(a){this.a=a},
oc:function oc(a,b){this.a=a
this.b=b},
ob:function ob(a,b){this.a=a
this.b=b},
og:function og(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oh:function oh(a,b,c){this.a=a
this.b=b
this.c=c},
oi:function oi(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a
this.b=null},
it:function it(){},
nq:function nq(a,b){this.a=a
this.b=b},
nr:function nr(a,b){this.a=a
this.b=b},
jE:function jE(a){this.$ti=a},
fH:function fH(){},
jw:function jw(){},
oq:function oq(a,b){this.a=a
this.b=b},
or:function or(a,b,c){this.a=a
this.b=b
this.c=c},
oO:function oO(a,b){this.a=a
this.b=b},
q4(a,b){var s=a[b]
return s===a?null:s},
q6(a,b,c){if(c==null)a[b]=a
else a[b]=c},
q5(){var s=Object.create(null)
A.q6(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
r8(a,b){return new A.bT(a.h("@<0>").C(b).h("bT<1,2>"))},
ai(a,b,c){return b.h("@<0>").C(c).h("pV<1,2>").a(A.xD(a,new A.bT(b.h("@<0>").C(c).h("bT<1,2>"))))},
Y(a,b){return new A.bT(a.h("@<0>").C(b).h("bT<1,2>"))},
dH(a){return new A.d9(a.h("d9<0>"))},
dI(a,b){return b.h("r9<0>").a(A.xE(a,new A.d9(b.h("d9<0>"))))},
q7(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
v4(a,b){var s=J.b1(a.a)
if(new A.d3(s,a.b,a.$ti.h("d3<1>")).m())return s.gp(s)
return null},
pW(a,b,c){var s=A.r8(b,c)
a.N(0,new A.m4(s,b,c))
return s},
b8(a,b,c){var s=A.r8(b,c)
s.S(0,a)
return s},
pX(a){var s,r
if(A.qn(a))return"{...}"
s=new A.aY("")
try{r={}
B.f.t($.bG,a)
s.a+="{"
r.a=!0
J.pN(a,new A.m6(r,s))
s.a+="}"}finally{if(0>=$.bG.length)return A.t($.bG,-1)
$.bG.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
ff:function ff(){},
oj:function oj(a){this.a=a},
fh:function fh(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
d7:function d7(a,b){this.a=a
this.$ti=b},
fg:function fg(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
d9:function d9(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jl:function jl(a){this.a=a
this.c=this.b=null},
fi:function fi(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m4:function m4(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(){},
T:function T(){},
m5:function m5(a){this.a=a},
m6:function m6(a,b){this.a=a
this.b=b},
fj:function fj(a,b){this.a=a
this.$ti=b},
fk:function fk(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fE:function fE(){},
dJ:function dJ(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
ch:function ch(){},
fr:function fr(){},
e2:function e2(){},
x2(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aL(r)
q=A.aV(String(s),null,null)
throw A.l(q)}q=A.oI(p)
return q},
oI(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jh(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.oI(a[s])
return a},
wk(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.u2()
else s=new Uint8Array(o)
for(r=J.al(a),q=0;q<o;++q){p=r.j(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
wj(a,b,c,d){var s=a?$.u1():$.u0()
if(s==null)return null
if(0===c&&d===b.length)return A.rP(s,b)
return A.rP(s,b.subarray(c,d))},
rP(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
qP(a,b,c,d,e,f){if(B.r.b6(f,4)!==0)throw A.l(A.aV("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.l(A.aV("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.l(A.aV("Invalid base64 padding, more than two '=' characters",a,b))},
r6(a,b,c){return new A.eH(a,b)},
wx(a){return a.it()},
vL(a,b){return new A.om(a,[],A.xx())},
vM(a,b,c){var s,r=new A.aY(""),q=A.vL(r,b)
q.bO(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
wl(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jh:function jh(a,b){this.a=a
this.b=b
this.c=null},
ol:function ol(a){this.a=a},
ji:function ji(a){this.a=a},
oC:function oC(){},
oB:function oB(){},
h3:function h3(){},
kx:function kx(){},
cS:function cS(){},
hb:function hb(){},
hl:function hl(){},
eH:function eH(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hN:function hN(){},
m2:function m2(a){this.b=a},
m1:function m1(a){this.a=a},
on:function on(){},
oo:function oo(a,b){this.a=a
this.b=b},
om:function om(a,b,c){this.c=a
this.a=b
this.b=c},
iR:function iR(){},
nU:function nU(){},
oD:function oD(a){this.b=0
this.c=a},
nT:function nT(a){this.a=a},
oA:function oA(a){this.a=a
this.b=16
this.c=0},
xO(a){var s=A.rd(a,null)
if(s!=null)return s
throw A.l(A.aV(a,null,null))},
uV(a,b){a=A.aK(a,new Error())
if(a==null)a=A.aa(a)
a.stack=b.l(0)
throw a},
hS(a,b,c,d){var s,r=c?J.r2(a,d):J.r1(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
eM(a,b,c){var s,r=A.e([],c.h("a4<0>"))
for(s=J.b1(a);s.m();)B.f.t(r,c.a(s.gp(s)))
if(b)return r
r.$flags=1
return r},
aw(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("a4<0>"))
s=A.e([],b.h("a4<0>"))
for(r=J.b1(a);r.m();)B.f.t(s,r.gp(r))
return s},
ra(a,b){var s=A.eM(a,!1,b)
s.$flags=3
return s},
rk(a,b,c){var s,r
A.eX(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.l(A.aS(c,b,null,"end",null))
if(s===0)return""}r=A.vt(a,b,c)
return r},
vt(a,b,c){var s=a.length
if(b>=s)return""
return A.vk(a,b,c==null||c>s?s:c)},
bV(a,b,c){return new A.dE(a,A.r5(a,!1,b,!1,c,""))},
rj(a,b,c){var s=J.b1(b)
if(!s.m())return a
if(c.length===0){do a+=A.V(s.gp(s))
while(s.m())}else{a+=A.V(s.gp(s))
while(s.m())a=a+c+A.V(s.gp(s))}return a},
oz(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.U){s=$.tZ()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.dg.cB(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.f.charCodeAt(o)&a)!==0)p+=A.at(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
wb(a){var s,r,q
if(!$.u_())return A.wc(a)
s=new URLSearchParams()
a.N(0,new A.oy(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.b.u(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
vp(){return A.cq(new Error())},
uU(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
qX(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hh(a){if(a>=10)return""+a
return"0"+a},
kY(a,b,c){return new A.bu(a+1000*b+1e6*c)},
hm(a){if(typeof a=="number"||A.oM(a)||a==null)return J.r(a)
if(typeof a=="string")return JSON.stringify(a)
return A.re(a)},
uW(a,b){A.fM(a,"error",t.K)
A.fM(b,"stackTrace",t.k)
A.uV(a,b)},
fY(a){return new A.fX(a)},
c_(a,b){return new A.bL(!1,null,b,a)},
eh(a,b,c){return new A.bL(!0,a,b,c)},
uL(a,b,c){return a},
vl(a,b){return new A.eW(null,null,!0,a,b,"Value not in range")},
aS(a,b,c,d,e){return new A.eW(b,c,!0,a,d,"Invalid value")},
vm(a,b,c,d){if(a<b||a>c)throw A.l(A.aS(a,b,c,d,null))
return a},
dO(a,b,c){if(0>a||a>c)throw A.l(A.aS(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.l(A.aS(b,a,c,"end",null))
return b}return c},
eX(a,b){if(a<0)throw A.l(A.aS(a,0,null,b,null))
return a},
az(a,b,c,d){return new A.hI(b,!0,a,d,"Index out of range")},
S(a){return new A.f6(a)},
rq(a){return new A.iM(a)},
ak(a){return new A.d_(a)},
aR(a){return new A.h9(a)},
aV(a,b,c){return new A.bR(a,b,c)},
v5(a,b,c){var s,r
if(A.qn(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.f.t($.bG,a)
try{A.wY(a,s)}finally{if(0>=$.bG.length)return A.t($.bG,-1)
$.bG.pop()}r=A.rj(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pQ(a,b,c){var s,r
if(A.qn(a))return b+"..."+c
s=new A.aY(b)
B.f.t($.bG,a)
try{r=s
r.a=A.rj(r.a,a,", ")}finally{if(0>=$.bG.length)return A.t($.bG,-1)
$.bG.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
wY(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.V(l.gp(l))
B.f.t(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.t(b,-1)
r=b.pop()
if(0>=b.length)return A.t(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.m()){if(j<=4){B.f.t(b,A.V(p))
return}r=A.V(p)
if(0>=b.length)return A.t(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.m();p=o,o=n){n=l.gp(l);++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.t(b,-1)
k-=b.pop().length+2;--j}B.f.t(b,"...")
return}}q=A.V(p)
r=A.V(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.t(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.f.t(b,m)
B.f.t(b,q)
B.f.t(b,r)},
rb(a,b,c,d,e){return new A.cR(a,b.h("@<0>").C(c).C(d).C(e).h("cR<1,2,3,4>"))},
eU(a,b,c,d){var s
if(B.T===c){s=B.X.gL(a)
b=J.bH(b)
return A.nE(A.cj(A.cj($.k7(),s),b))}if(B.T===d){s=B.X.gL(a)
b=J.bH(b)
c=J.bH(c)
return A.nE(A.cj(A.cj(A.cj($.k7(),s),b),c))}s=B.X.gL(a)
b=J.bH(b)
c=J.bH(c)
d=J.bH(d)
d=A.nE(A.cj(A.cj(A.cj(A.cj($.k7(),s),b),c),d))
return d},
v9(a){var s,r,q=$.k7()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aE)(a),++r)q=A.cj(q,J.bH(a[r]))
return A.nE(q)},
eb(a){A.xW(a)},
cD(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
a8=a6.length
s=a7+5
if(a8>=s){r=a7+4
if(!(r<a8))return A.t(a6,r)
if(!(a7<a8))return A.t(a6,a7)
q=a7+1
if(!(q<a8))return A.t(a6,q)
p=a7+2
if(!(p<a8))return A.t(a6,p)
o=a7+3
if(!(o<a8))return A.t(a6,o)
n=((a6.charCodeAt(r)^58)*3|a6.charCodeAt(a7)^100|a6.charCodeAt(q)^97|a6.charCodeAt(p)^116|a6.charCodeAt(o)^97)>>>0
if(n===0)return A.rr(a7>0||a8<a8?B.b.u(a6,a7,a8):a6,5,a5).gey()
else if(n===32)return A.rr(B.b.u(a6,s,a8),0,a5).gey()}m=A.hS(8,0,!1,t.S)
B.f.i(m,0,0)
r=a7-1
B.f.i(m,1,r)
B.f.i(m,2,r)
B.f.i(m,7,r)
B.f.i(m,3,a7)
B.f.i(m,4,a7)
B.f.i(m,5,a8)
B.f.i(m,6,a8)
if(A.t8(a6,a7,a8,0,m)>=14)B.f.i(m,7,a8)
l=m[1]
if(l>=a7)if(A.t8(a6,a7,l,20,m)===20)m[7]=l
k=m[2]+1
j=m[3]
i=m[4]
h=m[5]
g=m[6]
if(g<h)h=g
if(i<k)i=h
else if(i<=l)i=l+1
if(j<k)j=i
f=m[7]<a7
e=a5
if(f){f=!1
if(!(k>l+3)){r=j>a7
d=0
if(!(r&&j+1===i)){if(!B.b.X(a6,"\\",i))if(k>a7)q=B.b.X(a6,"\\",k-1)||B.b.X(a6,"\\",k-2)
else q=!1
else q=!0
if(!q){if(!(h<a8&&h===i+2&&B.b.X(a6,"..",i)))q=h>i+2&&B.b.X(a6,"/..",h-3)
else q=!0
if(!q)if(l===a7+4){if(B.b.X(a6,"file",a7)){if(k<=a7){if(!B.b.X(a6,"/",i)){c="file:///"
n=3}else{c="file://"
n=2}a6=c+B.b.u(a6,i,a8)
l-=a7
s=n-a7
h+=s
g+=s
a8=a6.length
a7=d
k=7
j=7
i=7}else if(i===h){s=a7===0
s
if(s){a6=B.b.aE(a6,i,h,"/");++h;++g;++a8}else{a6=B.b.u(a6,a7,i)+"/"+B.b.u(a6,h,a8)
l-=a7
k-=a7
j-=a7
i-=a7
s=1-a7
h+=s
g+=s
a8=a6.length
a7=d}}e="file"}else if(B.b.X(a6,"http",a7)){if(r&&j+3===i&&B.b.X(a6,"80",j+1)){s=a7===0
s
if(s){a6=B.b.aE(a6,j,i,"")
i-=3
h-=3
g-=3
a8-=3}else{a6=B.b.u(a6,a7,j)+B.b.u(a6,i,a8)
l-=a7
k-=a7
j-=a7
s=3+a7
i-=s
h-=s
g-=s
a8=a6.length
a7=d}}e="http"}}else if(l===s&&B.b.X(a6,"https",a7)){if(r&&j+4===i&&B.b.X(a6,"443",j+1)){s=a7===0
s
if(s){a6=B.b.aE(a6,j,i,"")
i-=4
h-=4
g-=4
a8-=3}else{a6=B.b.u(a6,a7,j)+B.b.u(a6,i,a8)
l-=a7
k-=a7
j-=a7
s=4+a7
i-=s
h-=s
g-=s
a8=a6.length
a7=d}}e="https"}f=!q}}}}if(f){if(a7>0||a8<a6.length){a6=B.b.u(a6,a7,a8)
l-=a7
k-=a7
j-=a7
i-=a7
h-=a7
g-=a7}return new A.jy(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.wd(a6,a7,l)
else{if(l===a7)A.e3(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.we(a6,a,k-1):""
a1=A.w8(a6,k,j,!1)
s=j+1
if(s<i){a2=A.rd(B.b.u(a6,s,i),a5)
b=A.wa(a2==null?A.ca(A.aV("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.w9(a6,i,h,a5,e,a1!=null)
a4=h<g?A.qc(a6,h+1,g,a5):a5
return A.qa(e,a0,a1,b,a3,a4,g<a8?A.w7(a6,g+1,a8):a5)},
q2(a){var s,r,q=0,p=null
try{s=A.cD(a,q,p)
return s}catch(r){if(A.aL(r) instanceof A.bR)return null
else throw r}},
rt(a){var s=t.N
return B.f.i3(A.e(a.split("&"),t.s),A.Y(s,s),new A.nS(B.U),t.V)},
iP(a,b,c){throw A.l(A.aV("Illegal IPv4 address, "+a,b,c))},
vD(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.t(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iP("each part must be in the range 0..255",a,r)}A.iP("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iP(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bt(d)
if(!(k<16))return A.t(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iP(j,a,q)
p=l}A.iP("IPv4 address should contain exactly 4 parts",a,q)},
vE(a,b,c){var s
if(b===c)throw A.l(A.aV("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.t(a,b)
if(a.charCodeAt(b)===118){s=A.vF(a,b,c)
if(s!=null)throw A.l(s)
return!1}A.rs(a,b,c)
return!0},
vF(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.t(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.bR(n,a,q)
r=q
break}return new A.bR("Unexpected character",a,q-1)}if(r-1===b)return new A.bR(n,a,r)
return new A.bR("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.bR("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.t(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.t(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.bR("Invalid IPvFuture address character",a,r)}},
rs(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.nR(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.t(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.t(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.t(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.vD(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.r.co(l,8)
if(!(o<16))return A.t(s,o)
s[o]=e;++o
if(!(o<16))return A.t(s,o)
s[o]=l&255;++p
if(j===58){if(p<8){++n
m=n
l=0
k=!0
continue}a2.$2(a1,n)}break}if(j===58){if(q<0){d=p+1;++n
q=p
p=d
m=n
continue}a2.$2("only one wildcard `::` is allowed",n)}if(q!==p-1)a2.$2("missing part",n)
break}if(n<a5)a2.$2("invalid character",n)
if(p<8){if(q<0)a2.$2("an address without a wildcard must contain exactly 8 parts",a5)
c=q+1
b=p-c
if(b>0){a=c*2
a0=16-b*2
B.cr.bQ(s,a0,16,s,a)
B.cr.i0(s,a,a0,0)}}return s},
qa(a,b,c,d,e,f,g){return new A.fF(a,b,c,d,e,f,g)},
rJ(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
e3(a,b,c){throw A.l(A.aV(c,a,b))},
wa(a,b){if(a!=null&&a===A.rJ(b))return null
return a},
w8(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.t(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.t(a,r)
if(a.charCodeAt(r)!==93)A.e3(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.t(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.w5(a,q,r)
if(o<r){n=o+1
p=A.rO(a,B.b.X(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.vE(a,q,o)
l=B.b.u(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.t(a,k)
if(a.charCodeAt(k)===58){o=B.b.bK(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.rO(a,B.b.X(a,"25",n)?o+3:n,c,"%25")}else p=""
A.rs(a,b,o)
return"["+B.b.u(a,b,o)+p+"]"}}return A.wg(a,b,c)},
w5(a,b,c){var s=B.b.bK(a,"%",b)
return s>=b&&s<c?s:c},
rO(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aY(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.t(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.qd(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aY("")
l=h.a+=B.b.u(a,q,r)
if(m)n=B.b.u(a,r,r+3)
else if(n==="%")A.e3(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aY("")
if(q<r){h.a+=B.b.u(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.t(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.u(a,q,r)
if(h==null){h=new A.aY("")
m=h}else m=h
m.a+=i
l=A.qb(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.u(a,b,c)
if(q<c){i=B.b.u(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
wg(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.t(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.qd(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aY("")
k=B.b.u(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.u(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aY("")
if(q<r){p.a+=B.b.u(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.e3(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.t(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.u(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aY("")
l=p}else l=p
l.a+=k
j=A.qb(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.u(a,b,c)
if(q<c){k=B.b.u(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
wd(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.t(a,b)
if(!A.rL(a.charCodeAt(b)))A.e3(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.t(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.e3(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.u(a,b,c)
return A.w4(q?a.toLowerCase():a)},
w4(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
we(a,b,c){return A.fG(a,b,c,16,!1,!1)},
w9(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.fG(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.b.K(s,"/"))s="/"+s
return A.wf(s,e,f)},
wf(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.K(a,"/")&&!B.b.K(a,"\\"))return A.wh(a,!s||c)
return A.wi(a)},
qc(a,b,c,d){if(a!=null){if(d!=null)throw A.l(A.c_("Both query and queryParameters specified",null))
return A.fG(a,b,c,256,!0,!1)}if(d==null)return null
return A.wb(d)},
wc(a){var s={},r=new A.aY("")
s.a=""
a.N(0,new A.ow(new A.ox(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
w7(a,b,c){return A.fG(a,b,c,256,!0,!1)},
qd(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.t(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.t(a,l)
q=a.charCodeAt(l)
p=A.pt(r)
o=A.pt(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.t(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.at(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.u(a,b,b+3).toUpperCase()
return null},
qb(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.t(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.r.ho(a,6*p)&63|q
if(!(o<r))return A.t(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.t(k,l)
if(!(m<r))return A.t(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.t(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.rk(s,0,null)},
fG(a,b,c,d,e,f){var s=A.rN(a,b,c,d,e,f)
return s==null?B.b.u(a,b,c):s},
rN(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.t(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.qd(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.e3(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.t(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.qb(n)}if(o==null){o=new A.aY("")
k=o}else k=o
k.a=(k.a+=B.b.u(a,p,q))+l
if(typeof m!=="number")return A.xI(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.u(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
rM(a){if(B.b.K(a,"."))return!0
return B.b.cJ(a,"/.")!==-1},
wi(a){var s,r,q,p,o,n,m
if(!A.rM(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.t(s,-1)
s.pop()
if(s.length===0)B.f.t(s,"")}p=!0}else{p="."===n
if(!p)B.f.t(s,n)}}if(p)B.f.t(s,"")
return B.f.J(s,"/")},
wh(a,b){var s,r,q,p,o,n
if(!A.rM(a))return!b?A.rK(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.f.gen(s)!==".."){if(0>=s.length)return A.t(s,-1)
s.pop()}else B.f.t(s,"..")
p=!0}else{p="."===n
if(!p)B.f.t(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.f.t(s,"")
if(!b){if(0>=s.length)return A.t(s,0)
B.f.i(s,0,A.rK(s[0]))}return B.f.J(s,"/")},
rK(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.rL(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.u(a,0,s)+"%3A"+B.b.a5(a,s+1)
if(r<=127){if(!(r<128))return A.t(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
w6(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.t(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.l(A.c_("Invalid URL encoding",null))}}return r},
qe(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.t(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.U===d)return B.b.u(a,b,c)
else p=new A.dr(B.b.u(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.t(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.l(A.c_("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.l(A.c_("Truncated URI",null))
B.f.t(p,A.w6(a,n+1))
n+=2}else if(r===43)B.f.t(p,32)
else B.f.t(p,r)}}t.B.a(p)
return B.lT.cB(p)},
rL(a){var s=a|32
return 97<=s&&s<=122},
rr(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.l(A.aV(k,a,r))}}if(q<0&&r>b)throw A.l(A.aV(k,a,r))
while(p!==44){B.f.t(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.t(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.f.t(j,o)
else{n=B.f.gen(j)
if(p!==44||r!==n+7||!B.b.X(a,"base64",n+1))throw A.l(A.aV("Expecting '='",a,r))
break}}B.f.t(j,r)
m=r+1
if((j.length&1)===1)a=B.d2.ic(0,a,m,s)
else{l=A.rN(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aE(a,m,s,l)}return new A.nQ(a,j,c)},
t8(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.t(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.t(n,p)
o=n.charCodeAt(p)
d=o&31
B.f.i(e,o>>>5,r)}return d},
oy:function oy(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
bu:function bu(a){this.a=a},
o0:function o0(){},
ao:function ao(){},
fX:function fX(a){this.a=a},
cl:function cl(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hI:function hI(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f6:function f6(a){this.a=a},
iM:function iM(a){this.a=a},
d_:function d_(a){this.a=a},
h9:function h9(a){this.a=a},
i9:function i9(){},
f_:function f_(){},
o3:function o3(a){this.a=a},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(){},
Q:function Q(){},
jJ:function jJ(){},
nn:function nn(){this.b=this.a=0},
aY:function aY(a){this.a=a},
nS:function nS(a){this.a=a},
nR:function nR(a){this.a=a},
fF:function fF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
ox:function ox(a,b){this.a=a
this.b=b},
ow:function ow(a){this.a=a},
nQ:function nQ(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
K:function K(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
ei:function ei(){},
c1:function c1(){},
hc:function hc(){},
aj:function aj(){},
dv:function dv(){},
kX:function kX(){},
b7:function b7(){},
bN:function bN(){},
hd:function hd(){},
he:function he(){},
hg:function hg(){},
hi:function hi(){},
eo:function eo(){},
ep:function ep(){},
hj:function hj(){},
hk:function hk(){},
I:function I(){},
u:function u(){},
bh:function bh(){},
hn:function hn(){},
ho:function ho(){},
hA:function hA(){},
bj:function bj(){},
hF:function hF(){},
cW:function cW(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
m7:function m7(a){this.a=a},
m8:function m8(a){this.a=a},
hX:function hX(){},
m9:function m9(a){this.a=a},
ma:function ma(a){this.a=a},
bm:function bm(){},
hY:function hY(){},
a2:function a2(){},
eS:function eS(){},
bn:function bn(){},
id:function id(){},
ij:function ij(){},
na:function na(a){this.a=a},
nb:function nb(a){this.a=a},
il:function il(){},
bo:function bo(){},
im:function im(){},
bp:function bp(){},
io:function io(){},
bq:function bq(){},
is:function is(){},
no:function no(a){this.a=a},
np:function np(a){this.a=a},
b3:function b3(){},
f4:function f4(){},
br:function br(){},
b4:function b4(){},
iC:function iC(){},
iD:function iD(){},
iF:function iF(){},
bs:function bs(){},
iH:function iH(){},
iI:function iI(){},
iQ:function iQ(){},
iS:function iS(){},
j1:function j1(){},
fa:function fa(){},
je:function je(){},
fm:function fm(){},
jC:function jC(){},
jK:function jK(){},
P:function P(){},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
j2:function j2(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
j9:function j9(){},
ja:function ja(){},
jf:function jf(){},
jg:function jg(){},
jm:function jm(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
ju:function ju(){},
jv:function jv(){},
jx:function jx(){},
fs:function fs(){},
ft:function ft(){},
jA:function jA(){},
jB:function jB(){},
jD:function jD(){},
jL:function jL(){},
jM:function jM(){},
fw:function fw(){},
fx:function fx(){},
jO:function jO(){},
jP:function jP(){},
jT:function jT(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jX:function jX(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
k1:function k1(){},
mv:function mv(a){this.a=a},
oL(a){var s
if(typeof a=="function")throw A.l(A.c_("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.wu,a)
s[$.qu()]=a
return s},
wu(a,b,c){t.Z.a(a)
if(A.b_(c)>=1)return a.$1(b)
return a.$0()},
xX(a,b){var s=new A.an($.ag,b.h("an<0>")),r=new A.cn(s,b.h("cn<0>"))
a.then(A.e9(new A.pC(r,b),1),A.e9(new A.pD(r),1))
return s},
t2(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
th(a){if(A.t2(a))return a
return new A.po(new A.fh(t.hg)).$1(a)},
pC:function pC(a,b){this.a=a
this.b=b},
pD:function pD(a){this.a=a},
po:function po(a){this.a=a},
bx:function bx(){},
hQ:function hQ(){},
bA:function bA(){},
i7:function i7(){},
ie:function ie(){},
iu:function iu(){},
bC:function bC(){},
iJ:function iJ(){},
jj:function jj(){},
jk:function jk(){},
js:function js(){},
jt:function jt(){},
jH:function jH(){},
jI:function jI(){},
jQ:function jQ(){},
jR:function jR(){},
fZ:function fZ(){},
h_:function h_(){},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
h0:function h0(){},
cu:function cu(){},
i8:function i8(){},
j_:function j_(){},
dX:function dX(a,b){this.a=a
this.b=b},
ht(a,b,c,d,e,f,g,h){var s=c==null?A.uY(a,f,e):c,r=Date.now()
return new A.bO(a,f,b,h,d,s,new A.cT(r,0,!1))},
uX(a,b,c){var s=null
if(a instanceof A.bO)return a
return A.ht(J.r(a),s,s,b,a,s,s,c)},
uY(a,b,c){var s=a.toLowerCase()
if(B.b.H(s,"cancel"))return B.hO
if(b===408||B.b.H(s,"timeout"))return B.c3
if(b!=null)return B.b5
if(c instanceof A.bR)return B.hP
if(B.b.H(s,"network"))return B.c4
return B.hN},
qZ(a,b,c,d,e,f,g,h,i){var s=B.aH.H(0,e)
B.aH.H(0,e)
if(!B.aH.H(0,e))A.ht("HTTP "+e,a,B.b5,d,null,e,null,h)
Date.now()
return new A.c3(e,a,g,c,s,f,i.h("c3<0>"))},
cx:function cx(a,b){this.a=a
this.b=b},
ex:function ex(a,b){this.a=a
this.b=b},
nm:function nm(){},
bO:function bO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
c3:function c3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.Q=f
_.$ti=g},
l0:function l0(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j},
l2:function l2(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l3:function l3(a,b,c){this.a=a
this.b=b
this.c=c},
l4:function l4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l1:function l1(){},
lh:function lh(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.x=null
_.y=f
_.z=g
_.Q=h
_.as=i
_.ax=_.at=!1
_.ay=0
_.CW=_.ch=null
_.cx=j},
lk:function lk(a){this.a=a},
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(){},
li:function li(a){this.a=a},
lj:function lj(a){this.a=a},
cF:function cF(a,b,c){this.a=a
this.b=b
this.$ti=c},
ku:function ku(){},
rv(a){var s,r,q,p,o=null,n=A.aQ(A.x(v.G.document).activeElement)
if(n==null||!A.e4(a.contains(n)))return o
s=A.U(n.value)
r=A.U(n.id).length===0?o:A.U(n.id)
q=A.U(n.name).length===0?o:A.U(n.name)
p=A.U(n.type).length===0?o:A.U(n.type)
return new A.nW("input",s,r,q,p,A.vG(a,n),A.qf(n.selectionStart),A.qf(n.selectionEnd))},
vG(a,b){var s,r,q,p,o,n,m=A.e([],t.t),l=m.$flags|0,k=b
for(;;){s=J.bf(k)
r=s.O(k,a)
if(!!r)break
q=A.aQ(k.parentNode)
if(q==null)return null
p=A.x(q.childNodes)
n=0
for(;;){if(!(n<A.b_(p.length))){o=-1
break}if(J.a9(A.aQ(p.item(n)),k)){o=n
break}++n}if(o===-1)return null
l&1&&A.bt(m,"insert",2)
m.splice(0,0,o)
k=q}if(!s.O(k,a))return null
return m},
l5:function l5(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=!1},
le:function le(a){this.a=a},
l9:function l9(a,b){this.a=a
this.b=b},
ld:function ld(a,b){this.a=a
this.b=b},
lb:function lb(a,b){this.a=a
this.b=b},
lc:function lc(a,b){this.a=a
this.b=b},
l6:function l6(a,b){this.a=a
this.b=b},
l7:function l7(){},
l8:function l8(){},
la:function la(a){this.a=a},
f9:function f9(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=!1},
nW:function nW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wt(){var s,r,q=A.x(A.x(v.G.window).location),p=A.U(q.origin)
if(p.length!==0)return p
s=A.U(q.protocol)
r=A.U(q.host)
if(s.length!==0&&r.length!==0)return s+"//"+r
return"http://localhost"},
kT:function kT(a){this.a=a},
X:function X(){},
iq:function iq(){},
i(a,b,c,d,e){var s,r,q,p,o,n,m,l="className",k=null,j="style",i=a.j(0,l),h=i==null?k:J.r(i),g=a.j(0,j)
i=c==null
s=i?k:c.a7()
if(s==null)s=B.a
A:{if(t.L.b(g)){r=g
break A}if(typeof g=="string"){r=A.ai(["_cssText",g],t.N,t.X)
break A}r=B.a
break A}q=A.to(d,B.a,s,e,r)
r=t.N
s=t.X
p=A.b8(a,r,s)
p.T(0,j)
if(i)o=k
else o=c.aw!=null||c.az!=null||c.aA!=null||c.aB!=null||c.bD!=null||c.bE!=null||c.bF!=null||c.bG!=null||c.bH!=null||c.bI!=null||c.bJ!=null
if(o===!0){c.toString
n="flint-s-"+B.r.iv(A.xe(A.x9(c)),36)}else n=k
m=A.xR(A.e([h,b,n],t.d4))
s=A.b8(p,r,s)
if(m.length!==0)s.i(0,l,m)
if(n!=null){c.toString
s.i(0,"_flintStyleCss",A.x8(n,c))}if(q.a!==0){if(typeof g=="string"){i=i?k:c.a7()
i=new A.aA(A.e([A.pH(A.to(d,B.a,i==null?B.a:i,e,B.a)),g],t.s),t.bB.a(new A.pB()),t.cc).J(0,"; ")}else i=q
s.i(0,j,i)}return s},
to(a,b,c,d,e){var s,r,q,p,o,n=A.Y(t.N,t.X)
for(s=[a,b,c,d,e],r=0;r<5;++r)for(q=J.ee(s[r]),q=q.gv(q);q.m();){p=q.gp(q)
o=p.b
if(o!=null&&p.a!=="_cssText")n.i(0,p.a,o)}return n},
j(a,b){var s,r,q=[]
if(a!=null)q.push(a)
B.f.S(q,b)
s=A.au(q)
r=s.h("ad<1,J>")
q=A.aw(new A.ad(q,s.h("J(1)").a(A.pi()),r),r.h("as.E"))
q.$flags=1
return q},
y6(a){var s
if(a instanceof A.J)return a
if(a instanceof A.X)return new A.dy(a)
if(t.U.b(a))return new A.ev(J.k8(a,A.pi(),t.f0).bN(0,!1))
s=a==null?null:J.r(a)
return new A.cy(s==null?"":s)},
xR(a){var s=A.au(a)
return new A.aP(new A.aA(a,s.h("ab(1)").a(new A.py()),s.h("aA<1>")),s.h("f(1)").a(new A.pz()),s.h("aP<1,f>")).J(0," ")},
pH(a){var s=A.N(a).h("af<1,2>")
return new A.aP(new A.aA(new A.af(a,s),s.h("ab(n.E)").a(new A.pI()),s.h("aA<n.E>")),s.h("f(n.E)").a(new A.pJ()),s.h("aP<n.E,f>")).J(0,"; ")},
x8(a,b){var s,r,q,p,o,n=A.e([],t.s)
for(s=b.gcY(),s=new A.af(s,A.N(s).h("af<1,2>")).gv(0),r="."+a;s.m();){q=s.d
p=A.qj(q.b.a7())
if(p.length===0)continue
B.f.t(n,r+q.a+" { "+p+"; }")}for(s=b.gev(),s=new A.af(s,A.N(s).h("af<1,2>")).gv(0);s.m();){q=s.d
p=A.qj(q.b.a7())
if(p.length===0)continue
o=q.a.c
B.f.t(n,'[data-theme="'+o+'"] .'+a+", ."+a+'[data-theme="'+o+'"] { '+p+"; }")}for(s=b.ge9(),s=new A.af(s,A.N(s).h("af<1,2>")).gv(0);s.m();){q=s.d
p=A.qj(q.b.a7())
if(p.length===0)continue
B.f.t(n,"@media (min-width: "+q.a.c+"px) { ."+a+" { "+p+"; } }")}return B.f.J(n,"\n")},
x9(a){var s,r=a.gcY(),q=A.N(r).h("af<1,2>"),p=t.N
r=A.aw(A.bl(new A.af(r,q),q.h("f(n.E)").a(new A.oP()),q.h("n.E"),p),p)
q=a.gev()
s=A.N(q).h("af<1,2>")
B.f.S(r,A.bl(new A.af(q,s),s.h("f(n.E)").a(new A.oQ()),s.h("n.E"),p))
s=a.ge9()
q=A.N(s).h("af<1,2>")
B.f.S(r,A.bl(new A.af(s,q),q.h("f(n.E)").a(new A.oR()),q.h("n.E"),p))
return B.f.J(r,"|")},
qj(a){var s=A.N(a).h("af<1,2>")
return new A.aP(new A.aA(new A.af(a,s),s.h("ab(n.E)").a(new A.oS()),s.h("aA<n.E>")),s.h("f(n.E)").a(new A.oT()),s.h("aP<n.E,f>")).J(0,"; ")},
xe(a){var s,r,q,p
for(s=new A.dr(a),r=t.e8,s=new A.by(s,s.gk(0),r.h("by<A.E>")),r=r.h("A.E"),q=2166136261;s.m();){p=s.d
q=((q^(p==null?r.a(p):p))>>>0)*16777619>>>0}return q},
pB:function pB(){},
py:function py(){},
pz:function pz(){},
pI:function pI(){},
pJ:function pJ(){},
oP:function oP(){},
oQ:function oQ(){},
oR:function oR(){},
oS:function oS(){},
oT:function oT(){},
mx:function mx(a){this.a=a},
h4:function h4(){},
J:function J(){},
cy:function cy(a){this.a=a},
ev:function ev(a){this.a=a},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a){this.a=a},
nJ:function nJ(a,b){this.a=a
this.b=b},
nK:function nK(){},
nM:function nM(a){this.a=a},
nN:function nN(a,b){this.a=a
this.b=b},
nL:function nL(a,b){this.a=a
this.b=b},
qY(a){var s,r,q=J.al(a),p=q.j(a,"component")
p=p==null?null:J.r(p)
if(p==null)p=""
s=A.wq(q.j(a,"props"))
r=q.j(a,"url")
if(r!=null)J.r(r)
q=q.j(a,"version")
if(q!=null)J.r(q)
return new A.ew(p,s)},
xy(a,b,c){var s,r,q,p,o,n,m,l,k,j=null,i="from",h="to",g={},f=v.G,e=A.aQ(A.x(f.document).querySelector(a))
if(e==null)throw A.l(A.ak('No element found for selector "'+a+'".'))
s=A.wI(c,j,j)
r=s!=null
if(r&&A.bE(e.getAttribute("data-theme"))==null)e.setAttribute("data-theme",s.c)
if(r){r=$.pM()
r.b=B.an
r.c="flint.theme.mode"
r.d=e
q=r.a
p=r.ht()
if(p==null)p=r.hC()
if(p==null)p=s
q.a=q.$ti.c.a(p)
q.bL()
r.d7(q.a)}r=t.cB
A.qp(A.rg(j,j,j,A.e([new A.ci("flint-spin",A.e([new A.aN(i,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b9("rotate("+A.E(0,!1)+")"),j,j,j,j,j,j,j,j)),new A.aN(h,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b9("rotate("+A.E("360deg",!1)+")"),j,j,j,j,j,j,j,j))],r)),new A.ci("flint-fade-in",A.e([new A.aN(i,B.fi),new A.aN(h,B.eu)],r)),new A.ci("flint-slide-up",A.e([new A.aN(i,B.fm),new A.aN(h,B.bv)],r)),new A.ci("flint-slide-down",A.e([new A.aN(i,B.fw),new A.aN(h,B.bv)],r)),new A.ci("flint-scale-in",A.e([new A.aN(i,B.fC),new A.aN(h,B.fx)],r))],t.o),j,"flint-animations",j,j))
o=A.wm(j,j,j)
if(o!=null)A.qp(o)
A.qp(c)
for(n=0;!1;++n)A.xY(B.iW[n])
m=A.bE(e.getAttribute("data-flint-page"))
if(m==null||B.b.D(m).length===0)A.ca(A.ak("Missing data-flint-page payload on Flint app root."))
l=B.E.aU(0,m,j)
if(!t.P.b(l))A.ca(A.ak("Invalid Flint page payload."))
k=A.qY(l)
g.a=0
r=new A.pn(g,e,B.iX,b,j,j,j,new A.l5(e,A.Y(t.N,t.e)))
q=new A.pm(g,a,e,r)
r.$2(k,0)
A.x(f.window).addEventListener("flint:navigate",A.oL(new A.pk(q)))
A.x(f.window).addEventListener("popstate",A.oL(new A.pl(q)))},
wm(a,b,c){return null},
wI(a,b,c){var s=a.c
s=s==null?null:s.c
return s},
wq(a){if(t.P.b(a))return a
if(t.f.b(a))return J.cL(a,new A.oF(),t.N,t.z)
return B.Y},
wB(a){var s,r=v.G,q=A.U(A.x(A.x(r.window).location).pathname),p=A.U(A.x(A.x(r.window).location).search),o=A.x(new r.XMLHttpRequest())
r=new A.an($.ag,t.bJ)
s=new A.cn(r,t.cp)
o.open("GET",q+p,!0)
o.setRequestHeader("Accept","text/html")
p=t.an
q=t.m
A.cE(o,"load",p.a(new A.oJ(o,s,a)),!1,q)
A.cE(o,"error",p.a(new A.oK(s)),!1,q)
o.send()
return r},
xj(a){var s,r,q,p=A.bV("<title[^>]*>(.*?)</title>",!1,!0).i1(a)
if(p==null)return null
s=p.b
if(1>=s.length)return A.t(s,1)
r=s[1]
if(r==null)r=""
q=A.x(A.x(v.G.document).createElement("textarea"))
q.innerHTML=r
s=A.bE(q.textContent)
return B.b.D(s==null?r:s)},
ew:function ew(a,b){this.a=a
this.b=b},
hu:function hu(){},
pn:function pn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pm:function pm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pk:function pk(a){this.a=a},
pl:function pl(a){this.a=a},
oF:function oF(){},
oJ:function oJ(a,b,c){this.a=a
this.b=b
this.c=c},
oK:function oK(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
vq(a,b){return new A.dS(a,A.dH(b.h("~(0)")),b.h("dS<0>"))},
dS:function dS(a,b,c){this.a=a
this.b=b
this.$ti=c},
nl:function nl(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c){var _=this
_.c=a
_.d=b
_.a=_.f=_.e=null
_.$ti=c},
nk:function nk(a){this.a=a},
nj:function nj(){},
ej:function ej(){},
kO:function kO(){},
kV:function kV(a,b){this.a=a
this.b=b},
kW:function kW(){},
hT:function hT(){},
iT:function iT(){},
aF(a){return new A.d(a)},
c2(a,b,c,d){return new A.d("rgba("+a+", "+b+", "+c+", "+A.V(d)+")")},
a(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3){return new A.q(e0,c7,f9,b7,d3,d0,d2,c9,a1,b4,b,c1,c0,a3,a5,a8,a6,a7,a4,b6,e1,f4,e4,n,c2,g3,d6,d8,d9,o,e5,e6,d,d4,f5,e,c8,b1,b2,b3,c6,c3,q,f0,f3,f1,f2,f8,g1,d7,r,e3,f,e2,h,m,l,i,k,j,e8,d5,b5,g,f7,f6,c,g0,b8,a9,b0,a,a0,p,e7,a2,b9,c5,s,e9,d1,c4,g2)},
xb(a){return null},
x0(a){return null},
aW(a,b){var s=A.au(b)
return new A.ez("linear-gradient("+a+"deg, "+new A.ad(b,s.h("f(1)").a(A.qr()),s.h("ad<1,f>")).J(0,", ")+")")},
bk(a,b){var s=A.E(a,!1),r=A.au(b)
return new A.ez("radial-gradient("+("circle at "+s)+", "+new A.ad(b,r.h("f(1)").a(A.qr()),r.h("ad<1,f>")).J(0,", ")+")")},
aM(a){var s
if(a.length===0)throw A.l(A.eh(a,"layers","Must not be empty."))
s=A.au(a)
return new A.kv(new A.ad(a,s.h("f(1)").a(A.y4()),s.h("ad<1,f>")).J(0,", "))},
wH(a){A.aa(a)
if(a instanceof A.L)return a.n()
return A.E(a,!1)},
wG(a){var s
if(typeof a=="number"){B.r.b6(a,1)
s=B.r.is(a)
return""+s+"%"}return A.E(a,!1)},
vz(a,b){return new A.b(a,b)},
a5(a,b){return new A.b("color."+a,b)},
pT(a){return new A.aN("from",a)},
pU(a){return new A.aN("to",a)},
eJ(a,b){return new A.aN(a,b)},
iv(a,b){return new A.ci(a,b)},
rg(a,b,c,d,e,f,g,h){return new A.n8(f,g,h,c,b,a,e,d)},
qq(a){var s=A.N(a).h("af<1,2>")
return new A.aP(new A.aA(new A.af(a,s),s.h("ab(n.E)").a(new A.pE()),s.h("aA<n.E>")),s.h("f(n.E)").a(new A.pF()),s.h("aP<n.E,f>")).J(0,"; ")},
xa(a,b){if((b==null?null:B.b.D(J.r(b)).toLowerCase())!=="none")return""
return B.f.J(A.e([a+"::-webkit-scrollbar { width: 0; height: 0; display: none; }",a+"::-webkit-scrollbar-track { background: transparent; }",a+"::-webkit-scrollbar-thumb { background: transparent; }"],t.s),"\n")},
dw(a,b,c){return new A.h(c,null,a,b)},
eq(a){return new A.h(a,a,a,a)},
er(a,b){return new A.h(b,a,b,a)},
ri(a){return new A.F(""+a+"%")},
eA(a){var s
if(a.length===0)throw A.l(A.eh(a,"tracks","Must not be empty."))
s=A.au(a)
return new A.bw(new A.ad(a,s.h("f(1)").a(A.y3()),s.h("ad<1,f>")).J(0," "))},
a_(a,b){A.aa(a)
A.e4(b)
if(a instanceof A.aG)return a.a
if(a instanceof A.bw)return a.a
return A.E(a,b)},
b2(a,b,c){return new A.m(c,a,b)},
uM(a,b){return new A.m(b,a,"solid")},
ix(a){return new A.b9("translate3d("+A.E(0,!1)+", "+A.E(a,!1)+", "+A.E(0,!1)+")")},
rl(a){return new A.b9("translateX("+A.E(a,!1)+")")},
iw(a){return new A.b9("rotate("+A.E(a,!1)+")")},
pZ(a){var s
if(a.length===0)throw A.l(A.eh(a,"transforms","Must not be empty."))
s=A.au(a)
return new A.b9(new A.ad(a,s.h("f(1)").a(new A.nw()),s.h("ad<1,f>")).J(0," "))},
rm(a){var s=""+a
return A.vv(A.e([new A.aZ("color "+s+"ms ease"),new A.aZ("background "+s+"ms ease"),new A.aZ("border-color "+s+"ms ease")],t.fS))},
vv(a){var s
if(a.length===0)throw A.l(A.eh(a,"transitions","Must not be empty."))
s=A.au(a)
return new A.aZ(new A.ad(a,s.h("f(1)").a(new A.nx()),s.h("ad<1,f>")).J(0,", "))},
vu(a,b,c,d){var s=A.e([a,""+c+"ms",d],t.G)
s.push(A.E(b,!0))
s.push(B.cZ)
s.push(B.d_)
s.push(B.d1)
return new A.ns(new A.ad(s,t.f7.a(new A.nt()),t.en).J(0," "))},
E(a,b){A.e4(b)
if(a==null)return""
if(a instanceof A.b)return a.n()
if(a instanceof A.F)return a.a
if(a instanceof A.hs)return a.n()
if(a instanceof A.m)return a.n()
if(a instanceof A.ap)return a.n()
if(typeof a=="number")return b?B.X.l(a):A.V(a)+"px"
return J.r(a)},
xm(a){var s,r,q,p=A.Y(t.N,t.X)
for(s=new A.af(a,A.N(a).h("af<1,2>")).gv(0);s.m();){r=s.d
q=r.b
if(q!=null&&!J.a9(q,""))p.i(0,r.a,q)}return p},
x6(a){var s,r=B.b.D(a),q=A.bV("[^a-zA-Z0-9_-]+",!0,!1)
r=A.cJ(r,q,"-")
q=A.bV("^-+|-+$",!0,!1)
s=A.cJ(r,q,"")
return s.length===0?"style":s},
d:function d(a){this.a=a},
q:function q(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.as=m
_.at=n
_.ax=o
_.ay=p
_.ch=q
_.CW=r
_.cx=s
_.cy=a0
_.db=a1
_.dx=a2
_.dy=a3
_.fr=a4
_.fx=a5
_.fy=a6
_.go=a7
_.id=a8
_.k1=a9
_.k2=b0
_.k3=b1
_.k4=b2
_.ok=b3
_.p1=b4
_.p2=b5
_.p3=b6
_.p4=b7
_.R8=b8
_.RG=b9
_.rx=c0
_.ry=c1
_.to=c2
_.x1=c3
_.x2=c4
_.xr=c5
_.y1=c6
_.y2=c7
_.cD=c8
_.ec=c9
_.ed=d0
_.aW=d1
_.cE=d2
_.aX=d3
_.aY=d4
_.aZ=d5
_.cF=d6
_.hT=d7
_.cG=d8
_.hU=d9
_.ee=e0
_.b_=e1
_.b0=e2
_.hV=e3
_.cH=e4
_.cI=e5
_.b1=e6
_.ef=e7
_.eg=e8
_.bD=e9
_.hW=f0
_.bE=f1
_.bF=f2
_.bG=f3
_.hX=f4
_.hY=f5
_.hZ=f6
_.bH=f7
_.bI=f8
_.bJ=f9
_.aw=g0
_.az=g1
_.aA=g2
_.aB=g3},
ez:function ez(a){this.a=a},
lF:function lF(){},
kv:function kv(a){this.a=a},
bv:function bv(a){this.a=a},
hs:function hs(){},
L:function L(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.c=a
this.a=b
this.b=c},
iE:function iE(a){this.a=a},
bP:function bP(a,b,c){this.c=a
this.a=b
this.b=c},
b:function b(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lg:function lg(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b){this.a=a
this.b=b},
ci:function ci(a,b){this.a=a
this.b=b},
nu:function nu(){},
nv:function nv(){},
n8:function n8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.y=h},
n9:function n9(){},
pE:function pE(){},
pF:function pF(){},
h:function h(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
kZ:function kZ(a){this.a=a},
F:function F(a){this.a=a},
aG:function aG(a){this.a=a},
bw:function bw(a){this.a=a},
m:function m(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
b9:function b9(a){this.a=a},
nw:function nw(){},
d0:function d0(a){this.a=a},
hw:function hw(a){this.a=a},
kN:function kN(){},
nc:function nc(){},
hf:function hf(a){this.a=a},
ia:function ia(a){this.a=a},
nH:function nH(){},
kw:function kw(){},
l_:function l_(){},
n7:function n7(){},
iK:function iK(a){this.a=a},
aZ:function aZ(a){this.a=a},
nx:function nx(){},
k9:function k9(){},
ka:function ka(){},
kc:function kc(){},
kb:function kb(){},
ns:function ns(a){this.a=a},
nt:function nt(){},
nV:function nV(){},
cw:function cw(a,b,c){this.c=a
this.a=b
this.b=c},
hr:function hr(a,b,c){this.c=a
this.a=b
this.b=c},
cM:function cM(a,b,c){this.c=a
this.a=b
this.b=c},
eI:function eI(a,b,c){this.c=a
this.a=b
this.b=c},
dM:function dM(a,b,c){this.c=a
this.a=b
this.b=c},
nF:function nF(a,b){this.a=a
this.b=b},
ay(a,b,c,d,e,f,g,h,i,j){var s,r=t.N,q=t.X,p=A.b8(g,r,q),o=g.j(0,"type")
p.i(0,"type",o==null?"button":o)
o=!d
if(!o||e)p.i(0,"disabled",!0)
if(e)p.i(0,"aria-busy","true")
if(f!=null&&o&&!e)p.i(0,"onClick",f)
p=A.i(p,null,A.te(d,e,h,i,j).Y(c),B.a,B.a)
o=A.e([],t.Y)
if(e){s=A.b8(B.a,r,q)
s.i(0,"role","status")
s.i(0,"aria-label","Loading")
r=A.i(s,null,null,A.ai(["display","inline-block","width",A.tt(B.bt),"height",A.tt(B.bt),"border","2px solid "+A.k2(i),"border-top-color",A.qs(i),"border-radius","999px","animation",A.E(A.vu("flint-spin",B.d0,800,B.lG),!1),"will-change",A.E(B.dh,!1),"flex-shrink",0],r,q),B.a)
o.push(new A.ip("span",r,B.ag))}B.f.S(o,A.j(a,b))
return new A.dm("button",p,o)},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
ce(a,b,c,d){return new A.eC(b,c,a,d)},
eC:function eC(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=null
_.f=c
_.r=null
_.w=d
_.x=!0
_.y=$
_.a=null},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
hz(a){var s=t.N,r=A.e([],t.r),q=t.X
return new A.lp(A.pW(a,s,q),A.pW(a,s,q),A.Y(s,t.bO),r,B.A)},
ck:function ck(a,b){this.a=a
this.b=b},
lp:function lp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lr:function lr(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c){this.a=a
this.b=b
this.c=c},
ey(a,b,c){var s=A.b8(B.a,t.N,t.X)
if(c!=null)s.i(0,"onSubmit",c)
return new A.hy("form",A.i(s,null,b,B.je,B.a),A.j(null,a))},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
f3(a,b,c,d,e,f,g,h){var s,r=null,q="textarea",p=A.i(B.a,r,r,B.cj,B.a),o=a.a,n=A.ts(r,b,d),m=A.vw(a,r),l=A.tj(q,d,B.a),k=A.ti(r,n,r,l),j=A.e([],t.Y)
j.push(A.tk(l,c,!0))
s=A.b8(A.tg(k,!1,n,l,d,B.a,!0),t.N,t.X)
s.i(0,"rows",g)
if(o!=null)s.i(0,"value",o)
s.i(0,"placeholder",e)
if(m!=null)s.i(0,"onInput",m)
j.push(new A.a7(q,A.i(s,r,A.tn(!1,n!=null&&n.length!==0,B.w,B.ce).Y(B.eB).Y(h),B.a,B.a),B.ag))
B.f.S(j,A.tl(n,r,l))
return new A.iA("div",p,j)},
vw(a,b){return new A.nG(a,b)},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
nG:function nG(a,b){this.a=a
this.b=b},
bX(a,b,c,d,e,f,g,h){var s=null,r=A.i(B.a,s,s,B.cj,B.a),q=a.a
return new A.iB("div",r,A.vx(!1,A.ts(s,b,e),s,c,B.a,B.a,d,e,A.vy(a,s),s,f,!1,g,B.w,h,q,B.ce))},
vy(a,b){return new A.nI(a,b)},
vx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2){var s,r,q,p,o=A.tj("field",h,e)
e.j(0,"aria-describedby")
s=A.ti(null,b,c,o)
r=A.e([],t.Y)
r.push(A.tk(o,g,m))
q=A.b8(A.tg(s,!1,b,o,h,e,m),t.N,t.X)
q.i(0,"type",a0)
if(a1!=null)q.i(0,"value",a1)
q.i(0,"placeholder",k)
if(i!=null)q.i(0,"onInput",i)
p=A.tn(!1,b!=null&&b.length!==0,n,a2)
r.push(new A.a7("input",A.i(q,null,p.Y(null).Y(d),B.a,f),B.ag))
B.f.S(r,A.tl(b,c,o))
return r},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
nI:function nI(a,b){this.a=a
this.b=b},
cc(a){var s,r,q,p,o
if(a==null)return B.A
if(t.V.b(a)){s=A.Y(t.N,t.a)
for(r=J.ee(a),r=r.gv(r),q=t.s;r.m();){p=r.gp(r)
s.i(0,p.a,A.e([p.b],q))}return new A.bQ(s)}o=A.wA(a)
s=A.Y(t.N,t.a)
for(r=J.ee(o),r=r.gv(r);r.m();){q=r.gp(r)
s.i(0,J.r(q.a),A.x1(q.b))}return new A.bQ(s)},
ts(a,b,c){var s,r
if(b==null)s=null
else{r=b.i_(c)
s=r.length===0?null:B.f.gF(r)}return s},
wA(a){var s=J.M(a,"errors")
if(t.f.b(s))return s
return a},
x1(a){var s,r,q
if(a==null)return B.aF
if(typeof a=="string")return A.e([a],t.s)
if(t.U.b(a)){s=A.e([],t.s)
for(r=J.b1(a);r.m();){q=r.gp(r)
if(q!=null&&J.r(q).length!==0)s.push(J.r(q))}return s}return A.e([J.r(a)],t.s)},
bQ:function bQ(a){this.a=a},
ls:function ls(a){this.a=a},
a8(a,b){return new A.lX(a,b)},
r0(a,b){return new A.bI(a,b)},
H(a,b,c){var s,r,q="currentColor",p=t.N,o=t.X,n=A.b8(B.a,p,o)
n.i(0,"xmlns","http://www.w3.org/2000/svg")
n.i(0,"viewBox","0 0 24 24")
n.i(0,"fill","none")
n.i(0,"stroke",q)
n.i(0,"stroke-width",2)
n.i(0,"stroke-linecap","round")
n.i(0,"stroke-linejoin","round")
n.i(0,"focusable","false")
n.i(0,"aria-hidden","true")
s=A.rX(c)
r=A.rX(c)
p=A.i(n,null,null,A.ai(["display","inline-block","width",s,"height",r,"color",b==null?q:b,"vertical-align","middle","flex-shrink",0],p,o),B.a)
o=A.e([],t.Y)
n=a.c
s=A.au(n)
B.f.S(o,new A.ad(n,s.h("J(1)").a(new A.lY()),s.h("ad<1,J>")))
return new A.hG("svg",p,o)},
rX(a){return""+a+"px"},
a0(a){return new A.bI("path",A.ai(["d",a],t.N,t.X))},
c9(a){return new A.bI("polyline",A.ai(["points",a],t.N,t.X))},
aJ(a,b,c,d){return new A.bI("line",A.ai(["x1",a,"y1",b,"x2",c,"y2",d],t.N,t.X))},
c8(a,b,c){return new A.bI("circle",A.ai(["cx",a,"cy",b,"r",c],t.N,t.X))},
fL(a,b,c,d,e){var s=A.Y(t.N,t.X)
s.i(0,"x",a)
s.i(0,"y",b)
s.i(0,"width",c)
s.i(0,"height",d)
if(e!=null)s.i(0,"rx",e)
return new A.bI("rect",s)},
lX:function lX(a,b){this.a=a
this.c=b},
bI:function bI(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
lY:function lY(){},
hC(a,b,c){var s=null,r=A.Y(t.N,t.X)
r.i(0,"display","grid")
r.i(0,"grid-template-columns",A.ww(b))
r.i(0,"gap",A.E(c,!1))
return new A.hB("div",A.i(B.a,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s).Y(s),r,B.a),A.j(s,a))},
ww(a){return A.E(a,!1)},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
q3(a,b,c){var s=A.Y(t.N,t.X)
s.i(0,"display","flex")
s.i(0,"flex-wrap",A.E(B.i,!0))
s.i(0,"gap",A.E(c,!1))
return new A.iV("div",A.i(B.a,null,b,s,B.a),A.j(null,a))},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
bM(a,b){var s=null,r=b.x
if(r===B.e)r=B.c
else if(r==null)r=B.c
return new A.h8("div",A.i(B.a,s,A.a(s,b.z,s,s,b.p3,b.aX,s,b.aZ,s,s,s,s,s,b.fr,s,s,b.x1,b.aW,s,s,r,s,s,s,B.x,s,s,b.ay,s,s,s,b.RG,b.rx,b.y,s,s,b.d,s,s,b.as,s,b.fx,s,b.aA,s,s,b.b,s,b.w,b.f,b.az,b.r,b.e,s,b.b0,b.go,s,s,s,b.a,b.db,b.aY,s,b.dy,s,s,s,b.b_,b.aw,b.x2,s,s,s,b.dx,b.p2,b.b1,s,s,b.c,s,s,b.aB,b.fy),B.ji,B.a),A.j(s,a))},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
W(a,b,c,d,e,f,g){var s=A.b8(B.a,t.N,t.X)
s.i(0,"href",d)
if(e!=null)s.i(0,"target",e)
return new A.hR("a",A.i(s,null,g==null?c:A.te(!1,!1,B.w,f,g).Y(c),B.a,B.a),A.j(a,b))},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
y(a,b){var s=null,r=b.x
if(r===B.e)r=B.c
else if(r==null)r=B.c
return new A.ii("div",A.i(B.a,s,A.a(s,b.z,s,s,b.p3,b.aX,s,b.aZ,s,s,s,s,s,b.fr,s,s,b.x1,b.aW,s,s,r,s,s,s,B.W,s,s,b.ay,s,s,s,b.RG,b.rx,b.y,s,s,b.d,s,s,b.as,s,b.fx,s,b.aA,s,s,b.b,s,s,b.f,b.az,b.r,b.e,s,b.b0,b.go,s,s,s,b.a,b.db,b.aY,s,b.dy,s,s,s,b.b_,b.aw,b.x2,s,s,s,b.dx,b.p2,b.b1,s,s,b.c,s,s,b.aB,b.fy),B.jh,B.a),A.j(s,a))},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
te(a,b,c,d,e){var s,r=null,q=$.uE().Y(A.xt(c)).Y(A.xu(e,d))
if(a||b)s=B.fk
else{s=A.xs(e,d)
s=A.a(A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b9("scale(0.98)"),r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ap(0,0,3,A.y9(d)),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}return q.Y(s)},
xt(a){var s
switch(a.a){case 0:s=B.ft
break
case 1:s=B.eV
break
case 2:s=B.f6
break
case 3:s=B.eI
break
default:s=null}return s},
xu(a,b){var s,r=null,q="solid"
switch(a.a){case 0:s=A.a(r,r,r,r,r,A.qs(b),r,new A.m(1,A.qs(b),q),r,r,r,r,r,r,r,r,A.ya(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 1:s=A.a(r,r,r,r,r,A.k2(b),r,new A.m(1,A.k2(b),q),r,r,r,r,r,r,r,r,A.qt(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 2:s=A.a(r,r,r,r,r,B.v,r,new A.m(1,A.y8(b),q),r,r,r,r,r,r,r,r,A.qt(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 3:s=A.a(r,r,r,r,r,B.v,r,B.ba,r,r,r,r,r,r,r,r,A.qt(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
default:s=r}return s},
xs(a,b){var s,r=null
switch(a.a){case 0:s=A.a(r,r,r,r,r,A.tx(b),r,new A.m(1,A.tx(b),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 1:s=A.a(r,r,r,r,r,A.tw(b),r,new A.m(1,A.tw(b),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 2:s=A.a(r,r,r,r,r,A.k2(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 3:s=A.a(r,r,r,r,r,A.k2(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
default:s=r}return s},
tn(a,b,c,d){var s=null,r="solid",q="#d92d20",p="color.dangerSolid",o=new A.b("color.inputBorder","#d0d5dd").n(),n=new A.b("radius.md","8px").n(),m=new A.b("color.inputText","#101828").n(),l=new A.b("color.inputSurface","#ffffff").n(),k=A.rm(120),j=A.a(s,s,s,s,s,s,s,new A.m(1,new A.b("color.primarySolid","#155eef").n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.ap(0,0,3,new A.b("color.primaryFocus","#155eef").n()),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),i=A.a(s,s,s,s,s,s,s,new A.m(1,new A.b(p,q).n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.ap(0,0,3,new A.b("color.dangerFocus",q).n()),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),h=A.a(s,s,s,s,s,l,s,new A.m(1,o,r),s,s,s,s,s,s,s,s,m,s,s,A.a(s,s,s,s,s,new A.b("color.disabledSurface","#f3f4f6").n(),s,s,s,s,s,s,s,s,s,s,new A.b("color.disabledText","#98a2b3").n(),B.bu,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s,j,B.c6,s,s,s,s,s,s,s,i,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,n,s,s,s,s,s,s,s,s,s,s,s,s,s,k,s,s,B.t,s,s,s,s).Y(A.xM(c))
switch(d.a){case 0:o=B.ev
break
case 1:o=A.a(s,s,s,s,s,new A.b("color.inputSoft","#f9fafb").n(),s,new A.m(1,B.v,r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
break
case 2:o=A.a(s,s,s,s,s,B.v,s,B.ba,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
break
default:o=s}o=h.Y(o)
o=o.Y(s)
return o.Y(b?A.a(s,s,s,s,s,s,s,new A.m(1,new A.b(p,q).n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s):s)},
xM(a){var s
switch(a.a){case 0:s=B.f9
break
case 1:s=B.fh
break
case 2:s=B.eU
break
case 3:s=B.fl
break
default:s=null}return s},
tt(a){var s
switch(a.a){case 0:s="14px"
break
case 1:s="16px"
break
case 2:s="20px"
break
case 3:s="24px"
break
default:s=null}return s},
qs(a){var s
switch(a.a){case 0:s=new A.b("color.neutralSolid","#111827").n()
break
case 1:s=new A.b("color.primarySolid","#155eef").n()
break
case 2:s=new A.b("color.successSolid","#079455").n()
break
case 3:s=new A.b("color.warningSolid","#dc6803").n()
break
case 4:s=new A.b("color.dangerSolid","#d92d20").n()
break
case 5:s=new A.b("color.infoSolid","#1570ef").n()
break
default:s=null}return s},
tx(a){var s
switch(a.a){case 0:s=new A.b("color.neutralSolidHover","#1f2937").n()
break
case 1:s=new A.b("color.primarySolidHover","#004eeb").n()
break
case 2:s=new A.b("color.successSolidHover","#067647").n()
break
case 3:s=new A.b("color.warningSolidHover","#b54708").n()
break
case 4:s=new A.b("color.dangerSolidHover","#b42318").n()
break
case 5:s=new A.b("color.infoSolidHover","#175cd3").n()
break
default:s=null}return s},
k2(a){var s
switch(a.a){case 0:s=new A.b("color.neutralSoft","#f3f4f6").n()
break
case 1:s=new A.b("color.primarySoft","#eff4ff").n()
break
case 2:s=new A.b("color.successSoft","#ecfdf3").n()
break
case 3:s=new A.b("color.warningSoft","#fffaeb").n()
break
case 4:s=new A.b("color.dangerSoft","#fef3f2").n()
break
case 5:s=new A.b("color.infoSoft","#eff8ff").n()
break
default:s=null}return s},
tw(a){var s
switch(a.a){case 0:s=new A.b("color.neutralSoftHover","#e5e7eb").n()
break
case 1:s=new A.b("color.primarySoftHover","#dbeafe").n()
break
case 2:s=new A.b("color.successSoftHover","#d1fadf").n()
break
case 3:s=new A.b("color.warningSoftHover","#fef0c7").n()
break
case 4:s=new A.b("color.dangerSoftHover","#fee4e2").n()
break
case 5:s=new A.b("color.infoSoftHover","#d1e9ff").n()
break
default:s=null}return s},
y8(a){var s
switch(a.a){case 0:s=new A.b("color.neutralBorder","#d1d5db").n()
break
case 1:s=new A.b("color.primaryBorder","#b2ccff").n()
break
case 2:s=new A.b("color.successBorder","#abefc6").n()
break
case 3:s=new A.b("color.warningBorder","#fedf89").n()
break
case 4:s=new A.b("color.dangerBorder","#fecdca").n()
break
case 5:s=new A.b("color.infoBorder","#b2ddff").n()
break
default:s=null}return s},
qt(a){var s
switch(a.a){case 0:s=new A.b("color.neutralText","#374151").n()
break
case 1:s=new A.b("color.primaryText","#1849a9").n()
break
case 2:s=new A.b("color.successText","#067647").n()
break
case 3:s=new A.b("color.warningText","#b54708").n()
break
case 4:s=new A.b("color.dangerText","#b42318").n()
break
case 5:s=new A.b("color.infoText","#175cd3").n()
break
default:s=null}return s},
ya(a){var s
A:{if(B.lE===a){s=new A.b("color.warningOnSolid","#111827").n()
break A}s=new A.b("color.onSolid","#ffffff").n()
break A}return s},
y9(a){var s
switch(a.a){case 0:s=new A.b("color.neutralFocus","#9ca3af").n()
break
case 1:s=new A.b("color.primaryFocus","#155eef").n()
break
case 2:s=new A.b("color.successFocus","#079455").n()
break
case 3:s=new A.b("color.warningFocus","#dc6803").n()
break
case 4:s=new A.b("color.dangerFocus","#d92d20").n()
break
case 5:s=new A.b("color.infoFocus","#1570ef").n()
break
default:s=null}return s},
dT:function dT(a,b){this.a=a
this.b=b},
el:function el(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
lZ:function lZ(a,b){this.a=a
this.b=b},
xi(a){var s
A:{if("light"===a){s=B.af
break A}if("dark"===a){s=B.S
break A}s=null
break A}return s},
lf:function lf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
oY:function oY(){},
oZ:function oZ(){},
p_:function p_(){},
pa:function pa(){},
pb:function pb(){},
pc:function pc(){},
pd:function pd(){},
pe:function pe(){},
pf:function pf(){},
pg:function pg(){},
ph:function ph(){},
p0:function p0(){},
p1:function p1(){},
p2:function p2(){},
p3:function p3(){},
p4:function p4(){},
p5:function p5(){},
p6:function p6(){},
p7:function p7(){},
p8:function p8(){},
p9:function p9(){},
xo(a){var s=A.v4(new A.aA(B.cf,t.dt.a(new A.oV(a)),t.bv),t.bl)
if(s!=null)return s.b
return new A.aP(new A.aA(A.e(a.split("-"),t.s),t.bB.a(new A.oW()),t.cc),t.dG.a(new A.oX()),t.bZ).J(0," ")},
eg:function eg(a,b){this.c=a
this.d=b
this.a=null},
oV:function oV(a){this.a=a},
oW:function oW(){},
oX:function oX(){},
hD:function hD(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.a=null},
r_(a,b){var s=A.Y(t.N,t.y)
if(B.f.H(B.j5,a))s.i(0,"routing",!0)
if(B.f.H(B.j2,a))s.i(0,"middleware",!0)
if(B.f.H(B.iT,a))s.i(0,"auth",!0)
if(B.f.H(B.iJ,a))s.i(0,"models",!0)
return new A.hE(a,b,s)},
hE:function hE(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
lK:function lK(a){this.a=a},
lL:function lL(a,b,c){this.a=a
this.b=b
this.c=c},
lJ:function lJ(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(){this.a=null},
kP:function kP(a){this.a=a},
hp:function hp(){this.a=null},
os(a,b,c,d,e,f,g,h,i){return new A.jz(i,g,c,d,e,a,h,b,f)},
R(a){return new A.f8(a)},
p(a,b,c){return new A.jN(a,b,c)},
eB:function eB(){var _=this
_.c=0
_.d="linux"
_.f=_.e=!1
_.a=null},
lW:function lW(a,b){this.a=a
this.b=b},
lQ:function lQ(a){this.a=a},
lR:function lR(a){this.a=a},
lP:function lP(a){this.a=a},
lN:function lN(a){this.a=a},
lO:function lO(a){this.a=a},
lM:function lM(a){this.a=a},
lS:function lS(a,b){this.a=a
this.b=b},
lT:function lT(a,b){this.a=a
this.b=b},
lV:function lV(a,b){this.a=a
this.b=b},
lU:function lU(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
f8:function f8(a){this.a=a},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(){this.a=null},
iL:function iL(){this.a=null},
iU:function iU(){this.a=null},
dh:function dh(a){this.c=a
this.a=null},
di:function di(a){this.c=a
this.a=null},
cO:function cO(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
ke:function ke(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
kg:function kg(a,b,c){this.a=a
this.b=b
this.c=c},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a){this.a=a},
kd:function kd(){},
dj:function dj(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kz:function kz(){},
ky:function ky(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
kC:function kC(a,b){this.a=a
this.b=b},
kD:function kD(a,b,c){this.a=a
this.b=b
this.c=c},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
kA:function kA(){},
dk:function dk(a){this.c=a
this.a=null},
kG:function kG(){},
cP:function cP(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kI:function kI(a){this.a=a},
kJ:function kJ(a,b){this.a=a
this.b=b},
kK:function kK(a,b,c){this.a=a
this.b=b
this.c=c},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a){this.a=a},
kH:function kH(){},
dp:function dp(a){this.b=a
this.a=null},
kS:function kS(){},
dq:function dq(a){this.c=a
this.a=null},
du:function du(a){this.b=a
this.a=null},
dx:function dx(a){this.b=a
this.a=null},
o4(a,b,c,d,e,f,g,h,i){return new A.jb(h,e,c,i,d,a,g,b,f)},
O(a){return new A.fe(a)},
o(a,b,c){return new A.jc(a,b,c)},
dz:function dz(a){var _=this
_.c=a
_.d=0
_.f=_.e=!1
_.a=null},
lx:function lx(a){this.a=a},
ly:function ly(a){this.a=a},
lw:function lw(a){this.a=a},
lu:function lu(a){this.a=a},
lv:function lv(a){this.a=a},
lt:function lt(a){this.a=a},
lz:function lz(a,b){this.a=a
this.b=b},
lB:function lB(a,b){this.a=a
this.b=b},
lA:function lA(a,b){this.a=a
this.b=b},
lC:function lC(a,b){this.a=a
this.b=b},
lD:function lD(a,b){this.a=a
this.b=b},
jb:function jb(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
fe:function fe(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){var _=this
_.c=a
_.d=null
_.e=!0
_.a=null},
lG:function lG(a,b){this.a=a
this.b=b},
lH:function lH(a){this.a=a},
lI:function lI(a){this.a=a},
dA:function dA(a){this.c=a
this.a=null},
dB:function dB(a){this.c=a
this.a=null},
cZ:function cZ(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.w=d
_.x=e
_.z=_.y=null
_.Q="Connecting"
_.a=null},
mU:function mU(){},
n5:function n5(a){this.a=a},
mD:function mD(a,b){this.a=a
this.b=b},
mE:function mE(a,b){this.a=a
this.b=b},
n_:function n_(a){this.a=a},
n0:function n0(a,b){this.a=a
this.b=b},
n1:function n1(a){this.a=a},
n2:function n2(a,b,c){this.a=a
this.b=b
this.c=c},
n3:function n3(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function n4(a){this.a=a},
mT:function mT(){},
mZ:function mZ(a){this.a=a},
mK:function mK(a){this.a=a},
mJ:function mJ(a){this.a=a},
mL:function mL(a){this.a=a},
mI:function mI(a){this.a=a},
mM:function mM(a){this.a=a},
mN:function mN(a){this.a=a},
mO:function mO(a){this.a=a},
mH:function mH(a){this.a=a},
mP:function mP(a){this.a=a},
mG:function mG(a){this.a=a},
mQ:function mQ(a){this.a=a},
mF:function mF(a){this.a=a},
mV:function mV(){},
mB:function mB(a){this.a=a},
mC:function mC(a,b){this.a=a
this.b=b},
mR:function mR(a,b){this.a=a
this.b=b},
mS:function mS(a,b){this.a=a
this.b=b},
mX:function mX(a){this.a=a},
mY:function mY(a,b){this.a=a
this.b=b},
mW:function mW(a){this.a=a},
dN:function dN(a){this.c=a
this.a=null},
n6:function n6(){},
dQ:function dQ(a){this.c=a
this.a=null},
ne:function ne(){},
nf:function nf(){},
dR:function dR(a){this.c=a
this.a=null},
ni:function ni(){},
ng:function ng(){},
nh:function nh(){},
d1:function d1(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
nz:function nz(a){this.a=a},
nA:function nA(a,b){this.a=a
this.b=b},
nB:function nB(a,b,c){this.a=a
this.b=b
this.c=c},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
nD:function nD(a){this.a=a},
ny:function ny(){},
dU:function dU(a){this.c=a
this.a=null},
dY:function dY(a){this.c=a
this.a=null},
h2(a,b,c,d,e){var s=t.r
return new A.h1(e,c,a,b,d,new A.ck("",A.e([],s)),new A.ck("",A.e([],s)),new A.ck("",A.e([],s)))},
h1:function h1(a,b,c,d,e,f,g,h){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.x=g
_.y=h
_.z=null
_.Q=!1
_.a=_.as=null},
kr:function kr(a){this.a=a},
kq:function kq(a){this.a=a},
ks:function ks(a){this.a=a},
kp:function kp(a){this.a=a},
kt:function kt(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a,b){this.a=a
this.b=b},
ko:function ko(a){this.a=a},
hq:function hq(a){this.b=a
this.a=null},
hx:function hx(){this.a=null},
i6:function i6(a){var _=this
_.b=a
_.e=_.d=_.c=!1
_.a=null},
mm:function mm(a){this.a=a},
ml:function ml(a){this.a=a},
mg:function mg(a){this.a=a},
mf:function mf(a){this.a=a},
mo:function mo(a){this.a=a},
mn:function mn(a){this.a=a},
mu:function mu(a){this.a=a},
mt:function mt(){},
mr:function mr(a){this.a=a},
mq:function mq(a){this.a=a},
ms:function ms(a){this.a=a},
mp:function mp(a){this.a=a},
mj:function mj(a){this.a=a},
mi:function mi(a){this.a=a},
mk:function mk(a){this.a=a},
mh:function mh(a){this.a=a},
md:function md(a){this.a=a},
mc:function mc(a){this.a=a},
me:function me(a){this.a=a},
mb:function mb(a){this.a=a},
ax:function ax(a,b){this.c=a
this.d=b
this.a=null},
cE(a,b,c,d,e){var s=A.xn(new A.o2(c),t.m)
s=s==null?null:A.oL(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.fc(a,b,s,!1,e.h("fc<0>"))},
xn(a,b){var s=$.ag
if(s===B.z)return a
return s.e8(a,b)},
pP:function pP(a,b){this.a=a
this.$ti=b},
o1:function o1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fc:function fc(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
o2:function o2(a){this.a=a},
xW(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
y5(a){throw A.aK(A.r7(a),new Error())},
tv(){throw A.aK(A.r7(""),new Error())},
rU(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.oM(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.cH(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
for(;;){r=a.length
r.toString
if(!(p<r))break
q.push(A.rU(a[p]));++p}return q}return a},
cH(a){var s,r,q,p,o,n
if(a==null)return null
s=A.Y(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.aE)(r),++p){o=r[p]
n=o
n.toString
s.i(0,n,A.rU(a[o]))}return s},
cr(a,b,c){var s=A.au(b),r=s.h("ad<1,J>")
s=A.aw(new A.ad(b,s.h("J(1)").a(A.pi()),r),r.h("as.E"))
s.$flags=1
return new A.a7(a,c,s)},
qp(a){var s,r,q,p,o=a.a
if($.t3.H(0,o))return
s=a.gbB(0)
if(B.b.D(s).length===0)return
r=v.G
q=A.aQ(A.x(r.document).querySelector("head"))
if(q==null)return
p=A.x(A.x(r.document).createElement("style"))
p.setAttribute("data-flint-root-design",o)
p.textContent=s
A.x(q.appendChild(p))
$.t3.t(0,o)},
xY(a){var s,r,q
if($.t4.H(0,a.geo(a)))return
s=v.G
r=A.aQ(A.x(s.document).querySelector("head"))
if(r==null)return
q=A.x(A.x(s.document).createElement("style"))
q.setAttribute("data-flint-stylesheet",a.geo(a))
q.textContent=a.gbB(a)
A.x(r.appendChild(q))
$.t4.t(0,a.geo(a))},
tj(a,b,c){var s,r,q
c.j(0,"id")
s=b.length===0?a:b
r=A.bV("[^a-z0-9_-]+",!0,!1)
r=A.cJ(s.toLowerCase(),r,"-")
q=A.bV("^-+|-+$",!0,!1)
return"flint-"+a+"-"+A.cJ(r,q,"")},
ti(a,b,c,d){var s=A.e([],t.s)
if(b!=null&&b.length!==0)s.push(d+"-error")
return s.length===0?null:B.f.J(s," ")},
tl(a,b,c){var s=A.e([],t.Y)
if(a!=null&&a.length!==0)s.push(new A.a7("p",A.ai(["id",c+"-error","style",B.jc],t.N,t.X),A.j(a,B.h)))
return s},
tk(a,b,c){var s=A.ai(["for",a,"style",B.jq],t.N,t.X),r=A.e([new A.cy(b)],t.Y)
if(c)r.push(B.hS)
return new A.a7("label",s,r)},
tg(a,b,c,d,e,f,g){var s=A.b8(f,t.N,t.X)
s.i(0,"id",d)
s.i(0,"name",e)
if(g)s.i(0,"required",!0)
if(c!=null&&c.length!==0)s.i(0,"aria-invalid","true")
if(a!=null)s.i(0,"aria-describedby",a)
return s},
b5(a,b){return A.fI("h1",a,null,B.a,B.a,b)},
aq(a,b){return A.fI("h2",a,null,B.a,B.a,b)},
c4(a,b){return A.fI("h3",a,null,B.a,B.a,b)},
G(a,b){return A.fI("p",a,null,B.a,B.a,b)},
v(a,b){return A.fI("span",a,null,B.a,B.a,b)},
f5(a,b){return A.fI("strong",a,null,B.a,B.a,b)},
fI(a,b,c,d,e,f){return new A.a7(a,A.i(d,c,f,B.a,e),A.j(b,B.h))},
pj(a){var s,r=document,q=r.createElement("textarea")
q.toString
B.lD.six(q,a)
s=q.style
s.position="fixed"
s=q.style
s.top="-1000px"
s=q.style
s.left="-1000px"
s=r.body
if(s!=null)s.appendChild(q).toString
q.select()
r.execCommand("copy").toString
r=q.parentNode
if(r!=null)r.removeChild(q).toString},
xA(){var s,r=window.navigator.platform,q=window.navigator.userAgent
q.toString
s=(A.V(r)+" "+q).toLowerCase()
if(B.b.H(s,"win"))return"windows"
if(B.b.H(s,"mac"))return"macos"
if(B.b.H(s,"linux")||B.b.H(s,"x11"))return"linux"
return null},
xT(){A.xy("#app",$.uF(),$.uG())},
td(a){var s=null,r=A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,"contain",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,a,s,s,s,s),q=A.b8(B.a,t.N,t.X)
q.i(0,"src","/logo-icon.png")
q.i(0,"alt","Flint Dart logo")
q.i(0,"width",A.E(a,!1))
q.i(0,"height",A.E(a,!1))
q.i(0,"loading","lazy")
q.i(0,"decoding","async")
return new A.hH("img",A.i(q,s,r,B.jd,B.a),B.ag)}},B={}
var w=[A,J,B]
var $={}
A.pR.prototype={}
J.dC.prototype={
O(a,b){return a===b},
gL(a){return A.eV(a)},
l(a){return"Instance of '"+A.ig(a)+"'"},
gU(a){return A.dd(A.qg(this))}}
J.hK.prototype={
l(a){return String(a)},
gL(a){return a?519018:218159},
gU(a){return A.dd(t.y)},
$iam:1,
$iab:1}
J.eE.prototype={
O(a,b){return null==b},
l(a){return"null"},
gL(a){return 0},
$iam:1,
$iaH:1}
J.c.prototype={$iB:1}
J.cz.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.ib.prototype={}
J.dV.prototype={}
J.cf.prototype={
l(a){var s=a[$.qu()]
if(s==null)return this.eI(a)
return"JavaScript function for "+J.r(s)},
$ibS:1}
J.dF.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.dG.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.a4.prototype={
t(a,b){A.au(a).c.a(b)
a.$flags&1&&A.bt(a,29)
a.push(b)},
T(a,b){var s
a.$flags&1&&A.bt(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
aF(a,b){var s=A.au(a)
return new A.aA(a,s.h("ab(1)").a(b),s.h("aA<1>"))},
S(a,b){var s
A.au(a).h("n<1>").a(b)
a.$flags&1&&A.bt(a,"addAll",2)
if(Array.isArray(b)){this.eO(a,b)
return}for(s=J.b1(b);s.m();)a.push(s.gp(s))},
eO(a,b){var s,r
t.q.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.l(A.aR(a))
for(r=0;r<s;++r)a.push(b[r])},
bA(a){a.$flags&1&&A.bt(a,"clear","clear")
a.length=0},
ab(a,b,c){var s=A.au(a)
return new A.ad(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("ad<1,2>"))},
J(a,b){var s,r=A.hS(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.i(r,s,A.V(a[s]))
return r.join(b)},
i3(a,b,c,d){var s,r,q
d.a(b)
A.au(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.l(A.aR(a))}return r},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
gF(a){if(a.length>0)return a[0]
throw A.l(A.dD())},
gen(a){var s=a.length
if(s>0)return a[s-1]
throw A.l(A.dD())},
cw(a,b){var s,r
A.au(a).h("ab(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.l(A.aR(a))}return!1},
hS(a,b){var s,r
A.au(a).h("ab(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.l(A.aR(a))}return!0},
H(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gM(a){return a.length!==0},
l(a){return A.pQ(a,"[","]")},
gv(a){return new J.cN(a,a.length,A.au(a).h("cN<1>"))},
gL(a){return A.eV(a)},
gk(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.l(A.pp(a,b))
return a[b]},
i(a,b,c){A.au(a).c.a(c)
a.$flags&2&&A.bt(a)
if(!(b>=0&&b<a.length))throw A.l(A.pp(a,b))
a[b]=c},
eA(a,b){return new A.d4(a,b.h("d4<0>"))},
$iD:1,
$in:1,
$iC:1}
J.hJ.prototype={
iw(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ig(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.m_.prototype={}
J.cN.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aE(q)
throw A.l(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iah:1}
J.eF.prototype={
is(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.l(A.S(""+a+".toInt()"))},
i2(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.l(A.S(""+a+".floor()"))},
iv(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.l(A.aS(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.t(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.ca(A.S("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.t(p,1)
s=p[1]
if(3>=r)return A.t(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.bP("0",o)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b6(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
eK(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dY(a,b)},
a9(a,b){return(a|0)===a?a/b|0:this.dY(a,b)},
dY(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.l(A.S("Result of truncating division is "+A.V(s)+": "+A.V(a)+" ~/ "+b))},
hl(a,b){return b>31?0:a<<b>>>0},
co(a,b){var s
if(a>0)s=this.dV(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
ho(a,b){if(0>b)throw A.l(A.tb(b))
return this.dV(a,b)},
dV(a,b){return b>31?0:a>>>b},
gU(a){return A.dd(t.di)},
$iac:1,
$iaT:1}
J.eD.prototype={
gU(a){return A.dd(t.S)},
$iam:1,
$iw:1}
J.hL.prototype={
gU(a){return A.dd(t.i)},
$iam:1}
J.cX.prototype={
cu(a,b,c){var s=b.length
if(c>s)throw A.l(A.aS(c,0,s,null,null))
return new A.jF(b,a,c)},
e7(a,b){return this.cu(a,b,0)},
eb(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a5(a,r-s)},
cR(a,b,c){A.vm(0,0,a.length,"startIndex")
return A.y2(a,b,c,0)},
eG(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.dE){s=b.e
s=!(s==null?b.e=b.fc():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.fs(a,b)}},
aE(a,b,c,d){var s=A.dO(b,c,a.length)
return A.tu(a,b,s,d)},
fs(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.qL(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gp(s)
o=p.gbR(p)
n=p.gaV(p)
q=n-o
if(q===0&&r===o)continue
B.f.t(m,this.u(a,r,o))
r=n}if(r<a.length||q>0)B.f.t(m,this.a5(a,r))
return m},
X(a,b,c){var s
if(c<0||c>a.length)throw A.l(A.aS(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
K(a,b){return this.X(a,b,0)},
u(a,b,c){return a.substring(b,A.dO(b,c,a.length))},
a5(a,b){return this.u(a,b,null)},
D(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.t(p,0)
if(p.charCodeAt(0)===133){s=J.r4(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.t(p,r)
q=p.charCodeAt(r)===133?J.v7(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ew(a){var s=a.trimStart(),r=s.length
if(r===0)return s
if(0>=r)return A.t(s,0)
if(s.charCodeAt(0)!==133)return s
return s.substring(J.r4(s,1))},
bP(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.l(B.dc)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
eq(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bP(c,s)+a},
ep(a,b){return this.eq(a,b," ")},
bK(a,b,c){var s
if(c<0||c>a.length)throw A.l(A.aS(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cJ(a,b){return this.bK(a,b,0)},
hM(a,b,c){var s=a.length
if(c>s)throw A.l(A.aS(c,0,s,null,null))
return A.xZ(a,b,c)},
H(a,b){return this.hM(a,b,0)},
l(a){return a},
gL(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gU(a){return A.dd(t.N)},
gk(a){return a.length},
$iam:1,
$imy:1,
$if:1}
A.dZ.prototype={
gv(a){return new A.ek(J.b1(this.a),A.N(this).h("ek<1,2>"))},
gk(a){return J.bg(this.a)},
gB(a){return J.ef(this.a)},
gM(a){return J.dg(this.a)},
gF(a){return A.N(this).y[1].a(J.fT(this.a))},
l(a){return J.r(this.a)}}
A.ek.prototype={
m(){return this.a.m()},
gp(a){var s=this.a
return this.$ti.y[1].a(s.gp(s))},
$iah:1}
A.cQ.prototype={}
A.fb.prototype={$iD:1}
A.cR.prototype={
aR(a,b,c){return new A.cR(this.a,this.$ti.h("@<1,2>").C(b).C(c).h("cR<1,2,3,4>"))},
j(a,b){return this.$ti.h("4?").a(J.M(this.a,b))},
i(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
J.ar(this.a,s.c.a(b),s.y[1].a(c))},
T(a,b){return this.$ti.h("4?").a(J.uJ(this.a,b))},
N(a,b){J.pN(this.a,new A.kR(this,this.$ti.h("~(3,4)").a(b)))},
gR(a){var s=this.$ti
return A.qU(J.qO(this.a),s.c,s.y[2])},
ga2(a){var s=this.$ti
return A.qU(J.pO(this.a),s.y[1],s.y[3])},
gk(a){return J.bg(this.a)},
gB(a){return J.ef(this.a)},
gM(a){return J.dg(this.a)},
ga_(a){return J.ee(this.a).ab(0,new A.kQ(this),this.$ti.h("a1<3,4>"))}}
A.kR.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.kQ.prototype={
$1(a){var s=this.a.$ti
s.h("a1<1,2>").a(a)
return new A.a1(s.y[2].a(a.a),s.y[3].a(a.b),s.h("a1<3,4>"))},
$S(){return this.a.$ti.h("a1<3,4>(a1<1,2>)")}}
A.hP.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.dr.prototype={
gk(a){return this.a.length},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.t(s,b)
return s.charCodeAt(b)}}
A.nd.prototype={}
A.D.prototype={}
A.as.prototype={
gv(a){var s=this
return new A.by(s,s.gk(s),A.N(s).h("by<as.E>"))},
gB(a){return this.gk(this)===0},
gF(a){if(this.gk(this)===0)throw A.l(A.dD())
return this.I(0,0)},
J(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.V(p.I(0,0))
if(o!==p.gk(p))throw A.l(A.aR(p))
for(r=s,q=1;q<o;++q){r=r+b+A.V(p.I(0,q))
if(o!==p.gk(p))throw A.l(A.aR(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.V(p.I(0,q))
if(o!==p.gk(p))throw A.l(A.aR(p))}return r.charCodeAt(0)==0?r:r}},
aF(a,b){return this.cZ(0,A.N(this).h("ab(as.E)").a(b))},
ab(a,b,c){var s=A.N(this)
return new A.ad(this,s.C(c).h("1(as.E)").a(b),s.h("@<as.E>").C(c).h("ad<1,2>"))},
bN(a,b){var s=A.N(this).h("as.E")
if(b)s=A.aw(this,s)
else{s=A.aw(this,s)
s.$flags=1
s=s}return s}}
A.f1.prototype={
gfu(){var s=J.bg(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghs(){var s=J.bg(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.bg(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
I(a,b){var s=this,r=s.ghs()+b
if(b<0||r>=s.gfu())throw A.l(A.az(b,s.gk(0),s,"index"))
return J.qN(s.a,r)},
bN(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.al(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.r2(0,n):J.r1(0,n)}r=A.hS(s,m.I(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.f.i(r,q,m.I(n,o+q))
if(m.gk(n)<l)throw A.l(A.aR(p))}return r},
iu(a){return this.bN(0,!0)}}
A.by.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.al(q),o=p.gk(q)
if(r.b!==o)throw A.l(A.aR(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0},
$iah:1}
A.aP.prototype={
gv(a){return new A.eN(J.b1(this.a),this.b,A.N(this).h("eN<1,2>"))},
gk(a){return J.bg(this.a)},
gB(a){return J.ef(this.a)},
gF(a){return this.b.$1(J.fT(this.a))}}
A.cU.prototype={$iD:1}
A.eN.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp(r))
return!0}s.a=null
return!1},
gp(a){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.ad.prototype={
gk(a){return J.bg(this.a)},
I(a,b){return this.b.$1(J.qN(this.a,b))}}
A.aA.prototype={
gv(a){return new A.d3(J.b1(this.a),this.b,this.$ti.h("d3<1>"))},
ab(a,b,c){var s=this.$ti
return new A.aP(this,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("aP<1,2>"))}}
A.d3.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gp(s)))return!0
return!1},
gp(a){var s=this.a
return s.gp(s)},
$iah:1}
A.d2.prototype={
gv(a){var s=this.a
return new A.f2(s.gv(s),this.b,A.N(this).h("f2<1>"))}}
A.es.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(r>s)return s
return r},
$iD:1}
A.f2.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp(a){var s
if(this.b<0){this.$ti.c.a(null)
return null}s=this.a
return s.gp(s)},
$iah:1}
A.d4.prototype={
gv(a){return new A.f7(J.b1(this.a),this.$ti.h("f7<1>"))}}
A.f7.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp(s)))return!0
return!1},
gp(a){var s=this.a
return this.$ti.c.a(s.gp(s))},
$iah:1}
A.av.prototype={
sk(a,b){throw A.l(A.S("Cannot change the length of a fixed-length list"))},
t(a,b){A.aC(a).h("av.E").a(b)
throw A.l(A.S("Cannot add to a fixed-length list"))}}
A.cC.prototype={
i(a,b,c){A.N(this).h("cC.E").a(c)
throw A.l(A.S("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.l(A.S("Cannot change the length of an unmodifiable list"))},
t(a,b){A.N(this).h("cC.E").a(b)
throw A.l(A.S("Cannot add to an unmodifiable list"))}}
A.dW.prototype={}
A.ae.prototype={$r:"+(1,2)",$s:1}
A.aB.prototype={$r:"+body,title(1,2)",$s:2}
A.Z.prototype={$r:"+(1,2,3)",$s:3}
A.c7.prototype={$r:"+(1,2,3,4)",$s:4}
A.en.prototype={}
A.em.prototype={
aR(a,b,c){var s=A.N(this)
return A.rb(this,s.c,s.y[1],b,c)},
gB(a){return this.gk(this)===0},
gM(a){return this.gk(this)!==0},
l(a){return A.pX(this)},
i(a,b,c){var s=A.N(this)
s.c.a(b)
s.y[1].a(c)
A.qW()},
T(a,b){A.qW()},
ga_(a){return new A.e1(this.hR(0),A.N(this).h("e1<a1<1,2>>"))},
hR(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j
return function $async$ga_(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:n=s.gR(s),n=n.gv(n),m=A.N(s),l=m.y[1],m=m.h("a1<1,2>")
case 2:if(!n.m()){q=3
break}k=n.gp(n)
j=s.j(0,k)
q=4
return b.b=new A.a1(k,j==null?l.a(j):j,m),1
case 4:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}},
cL(a,b,c,d){var s=A.Y(c,d)
this.N(0,new A.kU(this,A.N(this).C(c).C(d).h("a1<1,2>(3,4)").a(b),s))
return s},
$iz:1}
A.kU.prototype={
$2(a,b){var s=A.N(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.i(0,r.a,r.b)},
$S(){return A.N(this.a).h("~(1,2)")}}
A.a6.prototype={
gk(a){return this.b.length},
gdD(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a1(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
j(a,b){if(!this.a1(0,b))return null
return this.b[this.a[b]]},
N(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gdD()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gR(a){return new A.d8(this.gdD(),this.$ti.h("d8<1>"))},
ga2(a){return new A.d8(this.b,this.$ti.h("d8<2>"))}}
A.d8.prototype={
gk(a){return this.a.length},
gB(a){return 0===this.a.length},
gM(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.co(s,s.length,this.$ti.h("co<1>"))}}
A.co.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iah:1}
A.ds.prototype={}
A.dt.prototype={
gk(a){return this.b},
gB(a){return this.b===0},
gM(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.co(s,s.length,r.$ti.h("co<1>"))},
H(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.cd.prototype={
gk(a){return this.a.length},
gB(a){return this.a.length===0},
gM(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.co(s,s.length,this.$ti.h("co<1>"))},
fH(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.eG(o.$ti.h("eG<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aE)(s),++q){p=s[q]
n.i(0,p,p)}o.$map=n}return n},
H(a,b){return this.fH().a1(0,b)}}
A.mz.prototype={
$0(){return B.X.i2(1000*this.a.now())},
$S:22}
A.eZ.prototype={}
A.nO.prototype={
a6(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.eT.prototype={
l(a){return"Null check operator used on a null value"}}
A.hM.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iN.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mw.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.et.prototype={}
A.fu.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icA:1}
A.cv.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.ty(r==null?"unknown":r)+"'"},
$ibS:1,
giC(){return this},
$C:"$1",
$R:1,
$D:null}
A.h6.prototype={$C:"$0",$R:0}
A.h7.prototype={$C:"$2",$R:2}
A.iz.prototype={}
A.ir.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.ty(s)+"'"}}
A.dl.prototype={
O(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dl))return!1
return this.$_target===b.$_target&&this.a===b.a},
gL(a){return(A.fN(this.a)^A.eV(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ig(this.a)+"'")}}
A.ik.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bT.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
gR(a){return new A.cg(this,A.N(this).h("cg<1>"))},
ga2(a){return new A.aO(this,A.N(this).h("aO<2>"))},
ga_(a){return new A.af(this,A.N(this).h("af<1,2>"))},
a1(a,b){var s,r
if(typeof b=="string"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.i6(b)},
i6(a){var s=this.d
if(s==null)return!1
return this.b4(s[this.b3(a)],a)>=0},
S(a,b){A.N(this).h("z<1,2>").a(b).N(0,new A.m0(this))},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.i7(b)},
i7(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b3(a)]
r=this.b4(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.N(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.d3(s==null?q.b=q.ci():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.d3(r==null?q.c=q.ci():r,b,c)}else q.i9(b,c)},
i9(a,b){var s,r,q,p,o=this,n=A.N(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.ci()
r=o.b3(a)
q=s[r]
if(q==null)s[r]=[o.cj(a,b)]
else{p=o.b4(q,a)
if(p>=0)q[p].b=b
else q.push(o.cj(a,b))}},
cM(a,b,c){var s,r,q=this,p=A.N(q)
p.c.a(b)
p.h("2()").a(c)
if(q.a1(0,b)){s=q.j(0,b)
return s==null?p.y[1].a(s):s}r=c.$0()
q.i(0,b,r)
return r},
T(a,b){var s=this
if(typeof b=="string")return s.d_(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.d_(s.c,b)
else return s.i8(b)},
i8(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b3(a)
r=n[s]
q=o.b4(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.d0(p)
if(r.length===0)delete n[s]
return p.b},
bA(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cg()}},
N(a,b){var s,r,q=this
A.N(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.l(A.aR(q))
s=s.c}},
d3(a,b,c){var s,r=A.N(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cj(b,c)
else s.b=c},
d_(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.d0(s)
delete a[b]
return s.b},
cg(){this.r=this.r+1&1073741823},
cj(a,b){var s=this,r=A.N(s),q=new A.m3(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cg()
return q},
d0(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cg()},
b3(a){return J.bH(a)&1073741823},
b4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
l(a){return A.pX(this)},
ci(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ipV:1}
A.m0.prototype={
$2(a,b){var s=this.a,r=A.N(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.N(this.a).h("~(1,2)")}}
A.m3.prototype={}
A.cg.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.eL(s,s.r,s.e,this.$ti.h("eL<1>"))}}
A.eL.prototype={
gp(a){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aR(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iah:1}
A.aO.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.cY(s,s.r,s.e,this.$ti.h("cY<1>"))}}
A.cY.prototype={
gp(a){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aR(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iah:1}
A.af.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.eK(s,s.r,s.e,this.$ti.h("eK<1,2>"))}}
A.eK.prototype={
gp(a){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aR(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.a1(s.a,s.b,r.$ti.h("a1<1,2>"))
r.c=s.c
return!0}},
$iah:1}
A.eG.prototype={
b3(a){return A.xv(a)&1073741823},
b4(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.pu.prototype={
$1(a){return this.a(a)},
$S:23}
A.pv.prototype={
$2(a,b){return this.a(a,b)},
$S:75}
A.pw.prototype={
$1(a){return this.a(A.U(a))},
$S:19}
A.bD.prototype={
l(a){return this.e0(!1)},
e0(a){var s,r,q,p,o,n=this.fw(),m=this.bj(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.t(m,q)
o=m[q]
l=a?l+A.re(o):l+A.V(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
fw(){var s,r=this.$s
while($.op.length<=r)B.f.t($.op,null)
s=$.op[r]
if(s==null){s=this.fb()
B.f.i($.op,r,s)}return s},
fb(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.f.i(k,q,r[s])}}return A.ra(k,t.K)}}
A.db.prototype={
bj(){return[this.a,this.b]},
O(a,b){if(b==null)return!1
return b instanceof A.db&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gL(a){return A.eU(this.$s,this.a,this.b,B.T)}}
A.e_.prototype={
bj(){return[this.a,this.b,this.c]},
O(a,b){var s=this
if(b==null)return!1
return b instanceof A.e_&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
gL(a){var s=this
return A.eU(s.$s,s.a,s.b,s.c)}}
A.e0.prototype={
bj(){return this.a},
O(a,b){if(b==null)return!1
return b instanceof A.e0&&this.$s===b.$s&&A.vT(this.a,b.a)},
gL(a){return A.eU(this.$s,A.v9(this.a),B.T,B.T)}}
A.dE.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdI(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.r5(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
fc(){var s,r=this.a
if(!B.b.H(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
i1(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fl(s)},
cu(a,b,c){var s=b.length
if(c>s)throw A.l(A.aS(c,0,s,null,null))
return new A.iW(this,b,c)},
e7(a,b){return this.cu(0,b,0)},
ds(a,b){var s,r=this.gdI()
if(r==null)r=A.aa(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fl(s)},
$imy:1,
$ivn:1}
A.fl.prototype={
gbR(a){return this.b.index},
gaV(a){var s=this.b
return s.index+s[0].length},
$idK:1,
$ieY:1}
A.iW.prototype={
gv(a){return new A.iX(this.a,this.b,this.c)}}
A.iX.prototype={
gp(a){var s=this.d
return s==null?t.cz.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.ds(l,s)
if(p!=null){m.d=p
o=p.gaV(0)
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.t(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.t(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iah:1}
A.f0.prototype={
gaV(a){return this.a+this.c.length},
$idK:1,
gbR(a){return this.a}}
A.jF.prototype={
gv(a){return new A.jG(this.a,this.b,this.c)},
gF(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.f0(r,s)
throw A.l(A.dD())}}
A.jG.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.f0(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(a){var s=this.d
s.toString
return s},
$iah:1}
A.dL.prototype={
gU(a){return B.lH},
$iam:1}
A.eP.prototype={
fU(a,b,c,d){var s=A.aS(b,0,c,d,null)
throw A.l(s)},
dg(a,b,c,d){if(b>>>0!==b||b>c)this.fU(a,b,c,d)}}
A.hZ.prototype={
gU(a){return B.lI},
$iam:1}
A.aX.prototype={
gk(a){return a.length},
hk(a,b,c,d,e){var s,r,q=a.length
this.dg(a,b,q,"start")
this.dg(a,c,q,"end")
if(b>c)throw A.l(A.aS(b,0,c,null,null))
s=c-b
if(e<0)throw A.l(A.c_(e,null))
r=d.length
if(r-e<s)throw A.l(A.ak("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ia3:1}
A.eO.prototype={
j(a,b){A.cp(b,a,a.length)
return a[b]},
i(a,b,c){A.rS(c)
a.$flags&2&&A.bt(a)
A.cp(b,a,a.length)
a[b]=c},
$iD:1,
$in:1,
$iC:1}
A.bz.prototype={
i(a,b,c){A.b_(c)
a.$flags&2&&A.bt(a)
A.cp(b,a,a.length)
a[b]=c},
bQ(a,b,c,d,e){t.hb.a(d)
a.$flags&2&&A.bt(a,5)
if(t.eB.b(d)){this.hk(a,b,c,d,e)
return}this.eJ(a,b,c,d,e)},
$iD:1,
$in:1,
$iC:1}
A.i_.prototype={
gU(a){return B.lJ},
$iam:1}
A.i0.prototype={
gU(a){return B.lK},
$iam:1}
A.i1.prototype={
gU(a){return B.lL},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1}
A.i2.prototype={
gU(a){return B.lM},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1}
A.i3.prototype={
gU(a){return B.lN},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1}
A.i4.prototype={
gU(a){return B.lP},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1}
A.i5.prototype={
gU(a){return B.lQ},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1}
A.eQ.prototype={
gU(a){return B.lR},
gk(a){return a.length},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1}
A.eR.prototype={
gU(a){return B.lS},
gk(a){return a.length},
j(a,b){A.cp(b,a,a.length)
return a[b]},
$iam:1,
$iq1:1}
A.fn.prototype={}
A.fo.prototype={}
A.fp.prototype={}
A.fq.prototype={}
A.bW.prototype={
h(a){return A.fD(v.typeUniverse,this,a)},
C(a){return A.rI(v.typeUniverse,this,a)}}
A.jd.prototype={}
A.jS.prototype={
l(a){return A.bF(this.a,null)}}
A.j8.prototype={
l(a){return this.a}}
A.fz.prototype={$icl:1}
A.nY.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.nX.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:72}
A.nZ.prototype={
$0(){this.a.$0()},
$S:12}
A.o_.prototype={
$0(){this.a.$0()},
$S:12}
A.fy.prototype={
eL(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.e9(new A.ou(this,b),0),a)
else throw A.l(A.S("`setTimeout()` not found."))},
eM(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.e9(new A.ot(this,a,Date.now(),b),0),a)
else throw A.l(A.S("Periodic timer."))},
ag(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.l(A.S("Canceling a timer."))},
$iiG:1}
A.ou.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.ot.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.r.eK(s,o)}q.c=p
r.d.$1(q)},
$S:12}
A.iY.prototype={
aS(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bX(b)
else{s=r.a
if(q.h("bi<1>").b(b))s.df(b)
else s.c6(b)}},
cA(a,b){var s=this.a
if(this.b)s.al(new A.b6(a,b))
else s.bY(new A.b6(a,b))}}
A.oG.prototype={
$1(a){return this.a.$2(0,a)},
$S:7}
A.oH.prototype={
$2(a,b){this.a.$2(1,new A.et(a,t.k.a(b)))},
$S:30}
A.oU.prototype={
$2(a,b){this.a(A.b_(a),b)},
$S:31}
A.fv.prototype={
gp(a){var s=this.b
return s==null?this.$ti.c.a(s):s},
he(a,b){var s,r,q
a=A.b_(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o,n=this,m=null,l=0
for(;;){s=n.d
if(s!=null)try{if(s.m()){r=s
n.b=r.gp(r)
return!0}else n.d=null}catch(q){m=q
l=1
n.d=null}p=n.he(l,m)
if(1===p)return!0
if(0===p){n.b=null
o=n.e
if(o==null||o.length===0){n.a=A.rD
return!1}if(0>=o.length)return A.t(o,-1)
n.a=o.pop()
l=0
m=null
continue}if(2===p){l=0
m=null
continue}if(3===p){m=n.c
n.c=null
o=n.e
if(o==null||o.length===0){n.b=null
n.a=A.rD
throw m
return!1}if(0>=o.length)return A.t(o,-1)
n.a=o.pop()
l=1
continue}throw A.l(A.ak("sync*"))}return!1},
iD(a){var s,r,q=this
if(a instanceof A.e1){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.f.t(r,q.a)
q.a=s
return 2}else{q.d=J.b1(a)
return 2}},
$iah:1}
A.e1.prototype={
gv(a){return new A.fv(this.a(),this.$ti.h("fv<1>"))}}
A.b6.prototype={
l(a){return A.V(this.a)},
$iao:1,
gaH(){return this.b}}
A.lE.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.bd(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aL(p)
q=A.cq(p)
l=r
o=q
n=A.rY(l,o)
l=new A.b6(l,o)
m.b.al(l)
return}m.b.bd(s)}},
$S:0}
A.j0.prototype={
cA(a,b){var s=this.a
if((s.a&30)!==0)throw A.l(A.ak("Future already completed"))
s.bY(A.wM(a,b))},
ah(a){return this.cA(a,null)}}
A.cn.prototype={
aS(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.l(A.ak("Future already completed"))
s.bX(r.h("1/").a(b))}}
A.d5.prototype={
ib(a){if((this.c&15)!==6)return!0
return this.b.b.cT(t.al.a(this.d),a.a,t.y,t.K)},
i4(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ag.b(q))p=l.io(q,m,a.b,o,n,t.k)
else p=l.cT(t.bI.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aL(s))){if((r.c&1)!==0)throw A.l(A.c_("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.l(A.c_("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.an.prototype={
cV(a,b,c){var s,r,q=this.$ti
q.C(c).h("1/(2)").a(a)
s=$.ag
if(s===B.z){if(!t.ag.b(b)&&!t.bI.b(b))throw A.l(A.eh(b,"onError",u.c))}else{c.h("@<0/>").C(q.c).h("1(2)").a(a)
b=A.x4(b,s)}r=new A.an(s,c.h("an<0>"))
this.bS(new A.d5(r,3,a,b,q.h("@<1>").C(c).h("d5<1,2>")))
return r},
e_(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.an($.ag,c.h("an<0>"))
this.bS(new A.d5(s,19,a,b,r.h("@<1>").C(c).h("d5<1,2>")))
return s},
hj(a){this.a=this.a&1|16
this.c=a},
bc(a){this.a=a.a&30|this.a&1
this.c=a.c},
bS(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.bS(a)
return}r.bc(s)}A.e6(null,null,r.b,t.M.a(new A.o5(r,a)))}},
dN(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.dN(a)
return}m.bc(n)}l.a=m.bq(a)
A.e6(null,null,m.b,t.M.a(new A.oa(l,m)))}},
aP(){var s=t.F.a(this.c)
this.c=null
return this.bq(s)},
bq(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bd(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bi<1>").b(a))A.o8(a,r,!0)
else{s=r.aP()
q.c.a(a)
r.a=8
r.c=a
A.d6(r,s)}},
c6(a){var s,r=this
r.$ti.c.a(a)
s=r.aP()
r.a=8
r.c=a
A.d6(r,s)},
fa(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.aP()
q.bc(a)
A.d6(q,r)},
al(a){var s=this.aP()
this.hj(a)
A.d6(this,s)},
bX(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bi<1>").b(a)){this.df(a)
return}this.f1(a)},
f1(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.e6(null,null,s.b,t.M.a(new A.o7(s,a)))},
df(a){A.o8(this.$ti.h("bi<1>").a(a),this,!1)
return},
bY(a){this.a^=2
A.e6(null,null,this.b,t.M.a(new A.o6(this,a)))},
ir(a,b,c){var s,r,q=this,p={},o=q.$ti
o.h("1/()?").a(c)
if((q.a&24)!==0){p=new A.an($.ag,o)
p.bX(q)
return p}s=$.ag
r=new A.an(s,o)
p.a=null
p.a=A.c5(b,new A.og(q,r,s,o.h("1/()").a(c)))
q.cV(new A.oh(p,q,r),new A.oi(p,r),t.b)
return r},
$ibi:1}
A.o5.prototype={
$0(){A.d6(this.a,this.b)},
$S:0}
A.oa.prototype={
$0(){A.d6(this.b,this.a.a)},
$S:0}
A.o9.prototype={
$0(){A.o8(this.a.a,this.b,!0)},
$S:0}
A.o7.prototype={
$0(){this.a.c6(this.b)},
$S:0}
A.o6.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.od.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.eu(t.fO.a(q.d),t.z)}catch(p){s=A.aL(p)
r=A.cq(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.kj(q)
n=k.a
n.c=new A.b6(q,o)
q=n}q.b=!0
return}if(j instanceof A.an&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.an){m=k.b.a
l=new A.an(m.b,m.$ti)
j.cV(new A.oe(l,m),new A.of(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.oe.prototype={
$1(a){this.a.fa(this.b)},
$S:3}
A.of.prototype={
$2(a,b){A.aa(a)
t.k.a(b)
this.a.al(new A.b6(a,b))},
$S:24}
A.oc.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cT(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aL(l)
r=A.cq(l)
q=s
p=r
if(p==null)p=A.kj(q)
o=this.a
o.c=new A.b6(q,p)
o.b=!0}},
$S:0}
A.ob.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.ib(s)&&p.a.e!=null){p.c=p.a.i4(s)
p.b=!1}}catch(o){r=A.aL(o)
q=A.cq(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.kj(p)
m=l.b
m.c=new A.b6(p,n)
p=m}p.b=!0}},
$S:0}
A.og.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.bd(n.c.eu(n.d,n.a.$ti.h("1/")))}catch(q){s=A.aL(q)
r=A.cq(q)
p=s
o=r
if(o==null)o=A.kj(p)
n.b.al(new A.b6(p,o))}},
$S:0}
A.oh.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.ag(0)
this.c.c6(a)}},
$S(){return this.b.$ti.h("aH(1)")}}
A.oi.prototype={
$2(a,b){var s
A.aa(a)
t.k.a(b)
s=this.a.a
if(s.b!=null){s.ag(0)
this.b.al(new A.b6(a,b))}},
$S:24}
A.iZ.prototype={}
A.it.prototype={
gk(a){var s,r,q=this,p={},o=new A.an($.ag,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.nq(p,q))
t.bn.a(new A.nr(p,o))
A.cE(q.a,q.b,r,!1,s.c)
return o}}
A.nq.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.nr.prototype={
$0(){this.b.bd(this.a.a)},
$S:0}
A.jE.prototype={}
A.fH.prototype={$iru:1}
A.jw.prototype={
ip(a){var s,r,q
t.M.a(a)
try{if(B.z===$.ag){a.$0()
return}A.t5(null,null,this,a,t.H)}catch(q){s=A.aL(q)
r=A.cq(q)
A.oN(A.aa(s),t.k.a(r))}},
iq(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.z===$.ag){a.$1(b)
return}A.t6(null,null,this,a,b,t.H,c)}catch(q){s=A.aL(q)
r=A.cq(q)
A.oN(A.aa(s),t.k.a(r))}},
cz(a){return new A.oq(this,t.M.a(a))},
e8(a,b){return new A.or(this,b.h("~(0)").a(a),b)},
eu(a,b){b.h("0()").a(a)
if($.ag===B.z)return a.$0()
return A.t5(null,null,this,a,b)},
cT(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.ag===B.z)return a.$1(b)
return A.t6(null,null,this,a,b,c,d)},
io(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ag===B.z)return a.$2(b,c)
return A.x5(null,null,this,a,b,c,d,e,f)},
es(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.oq.prototype={
$0(){return this.a.ip(this.b)},
$S:0}
A.or.prototype={
$1(a){var s=this.c
return this.a.iq(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.oO.prototype={
$0(){A.uW(this.a,this.b)},
$S:0}
A.ff.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
gR(a){return new A.d7(this,this.$ti.h("d7<1>"))},
ga2(a){var s=this.$ti
return A.bl(new A.d7(this,s.h("d7<1>")),new A.oj(this),s.c,s.y[1])},
a1(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.fg(b)},
fg(a){var s=this.d
if(s==null)return!1
return this.a8(this.dv(s,a),a)>=0},
j(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.q4(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.q4(q,b)
return r}else return this.fF(0,b)},
fF(a,b){var s,r,q=this.d
if(q==null)return null
s=this.dv(q,b)
r=this.a8(s,b)
return r<0?null:s[r+1]},
i(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.dk(s==null?m.b=A.q5():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.dk(r==null?m.c=A.q5():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.q5()
p=A.fN(b)&1073741823
o=q[p]
if(o==null){A.q6(q,p,[b,c]);++m.a
m.e=null}else{n=m.a8(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
T(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aO(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aO(s.c,b)
else return s.cn(0,b)},
cn(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=A.fN(b)&1073741823
r=n[s]
q=o.a8(r,b)
if(q<0)return null;--o.a
o.e=null
p=r.splice(q,2)[1]
if(0===r.length)delete n[s]
return p},
N(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.dl()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.j(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.l(A.aR(m))}},
dl(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hS(i.a,null,!1,t.z)
s=i.b
r=0
if(s!=null){q=Object.getOwnPropertyNames(s)
p=q.length
for(o=0;o<p;++o){h[r]=q[o];++r}}n=i.c
if(n!=null){q=Object.getOwnPropertyNames(n)
p=q.length
for(o=0;o<p;++o){h[r]=+q[o];++r}}m=i.d
if(m!=null){q=Object.getOwnPropertyNames(m)
p=q.length
for(o=0;o<p;++o){l=m[q[o]]
k=l.length
for(j=0;j<k;j+=2){h[r]=l[j];++r}}}return i.e=h},
dk(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.q6(a,b,c)},
aO(a,b){var s
if(a!=null&&a[b]!=null){s=this.$ti.y[1].a(A.q4(a,b))
delete a[b];--this.a
this.e=null
return s}else return null},
dv(a,b){return a[A.fN(b)&1073741823]}}
A.oj.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.j(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.fh.prototype={
a8(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.d7.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gM(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.fg(s,s.dl(),this.$ti.h("fg<1>"))}}
A.fg.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.l(A.aR(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iah:1}
A.d9.prototype={
gv(a){var s=this,r=new A.fi(s,s.r,s.$ti.h("fi<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
H(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
if(s==null)return!1
return t.g.a(s[b])!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
if(r==null)return!1
return t.g.a(r[b])!=null}else return this.ff(b)},
ff(a){var s=this.d
if(s==null)return!1
return this.a8(s[J.bH(a)&1073741823],a)>=0},
gF(a){var s=this.e
if(s==null)throw A.l(A.ak("No elements"))
return this.$ti.c.a(s.a)},
t(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dj(s==null?q.b=A.q7():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dj(r==null?q.c=A.q7():r,b)}else return q.eN(0,b)},
eN(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.q7()
r=J.bH(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.c4(b)]
else{if(p.a8(q,b)>=0)return!1
q.push(p.c4(b))}return!0},
T(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aO(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aO(s.c,b)
else return s.cn(0,b)},
cn(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.bH(b)&1073741823
r=o[s]
q=this.a8(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.e3(p)
return!0},
dj(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.c4(b)
return!0},
aO(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.e3(s)
delete a[b]
return!0},
c3(){this.r=this.r+1&1073741823},
c4(a){var s,r=this,q=new A.jl(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c3()
return q},
e3(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c3()},
a8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
$ir9:1}
A.jl.prototype={}
A.fi.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.l(A.aR(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iah:1}
A.m4.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:44}
A.A.prototype={
gv(a){return new A.by(a,this.gk(a),A.aC(a).h("by<A.E>"))},
I(a,b){return this.j(a,b)},
gB(a){return this.gk(a)===0},
gM(a){return this.gk(a)!==0},
gF(a){if(this.gk(a)===0)throw A.l(A.dD())
return this.j(a,0)},
cw(a,b){var s,r
A.aC(a).h("ab(A.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){if(b.$1(this.j(a,r)))return!0
if(s!==this.gk(a))throw A.l(A.aR(a))}return!1},
aF(a,b){var s=A.aC(a)
return new A.aA(a,s.h("ab(A.E)").a(b),s.h("aA<A.E>"))},
eA(a,b){return new A.d4(a,b.h("d4<0>"))},
ab(a,b,c){var s=A.aC(a)
return new A.ad(a,s.C(c).h("1(A.E)").a(b),s.h("@<A.E>").C(c).h("ad<1,2>"))},
t(a,b){var s
A.aC(a).h("A.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.i(a,s,b)},
i0(a,b,c,d){var s
A.aC(a).h("A.E?").a(d)
A.dO(b,c,this.gk(a))
for(s=b;s<c;++s)this.i(a,s,d)},
bQ(a,b,c,d,e){var s,r,q
A.aC(a).h("n<A.E>").a(d)
A.dO(b,c,this.gk(a))
s=c-b
if(s===0)return
A.eX(e,"skipCount")
r=J.al(d)
if(e+s>r.gk(d))throw A.l(A.ak("Too few elements"))
if(e<b)for(q=s-1;q>=0;--q)this.i(a,b+q,r.j(d,e+q))
else for(q=0;q<s;++q)this.i(a,b+q,r.j(d,e+q))},
l(a){return A.pQ(a,"[","]")},
$iD:1,
$in:1,
$iC:1}
A.T.prototype={
aR(a,b,c){var s=A.aC(a)
return A.rb(a,s.h("T.K"),s.h("T.V"),b,c)},
N(a,b){var s,r,q,p=A.aC(a)
p.h("~(T.K,T.V)").a(b)
for(s=J.b1(this.gR(a)),p=p.h("T.V");s.m();){r=s.gp(s)
q=this.j(a,r)
b.$2(r,q==null?p.a(q):q)}},
ga_(a){return J.k8(this.gR(a),new A.m5(a),A.aC(a).h("a1<T.K,T.V>"))},
cL(a,b,c,d){var s,r,q,p,o,n=A.aC(a)
n.C(c).C(d).h("a1<1,2>(T.K,T.V)").a(b)
s=A.Y(c,d)
for(r=J.b1(this.gR(a)),n=n.h("T.V");r.m();){q=r.gp(r)
p=this.j(a,q)
o=b.$2(q,p==null?n.a(p):p)
s.i(0,o.a,o.b)}return s},
ik(a,b){var s,r,q,p,o,n=A.aC(a)
n.h("ab(T.K,T.V)").a(b)
s=A.e([],n.h("a4<T.K>"))
for(r=J.b1(this.gR(a)),n=n.h("T.V");r.m();){q=r.gp(r)
p=this.j(a,q)
if(b.$2(q,p==null?n.a(p):p))B.f.t(s,q)}for(n=s.length,o=0;o<s.length;s.length===n||(0,A.aE)(s),++o)this.T(a,s[o])},
gk(a){return J.bg(this.gR(a))},
gB(a){return J.ef(this.gR(a))},
gM(a){return J.dg(this.gR(a))},
ga2(a){return new A.fj(a,A.aC(a).h("fj<T.K,T.V>"))},
l(a){return A.pX(a)},
$iz:1}
A.m5.prototype={
$1(a){var s=this.a,r=A.aC(s)
r.h("T.K").a(a)
s=J.M(s,a)
if(s==null)s=r.h("T.V").a(s)
return new A.a1(a,s,r.h("a1<T.K,T.V>"))},
$S(){return A.aC(this.a).h("a1<T.K,T.V>(T.K)")}}
A.m6.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.V(a)
r.a=(r.a+=s)+": "
s=A.V(b)
r.a+=s},
$S:16}
A.fj.prototype={
gk(a){return J.bg(this.a)},
gB(a){return J.ef(this.a)},
gM(a){return J.dg(this.a)},
gF(a){var s=this.a,r=J.de(s)
s=r.j(s,J.fT(r.gR(s)))
return s==null?this.$ti.y[1].a(s):s},
gv(a){var s=this.a
return new A.fk(J.b1(J.qO(s)),s,this.$ti.h("fk<1,2>"))}}
A.fk.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=J.M(s.b,r.gp(r))
return!0}s.c=null
return!1},
gp(a){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.fE.prototype={
i(a,b,c){var s=A.N(this)
s.c.a(b)
s.y[1].a(c)
throw A.l(A.S("Cannot modify unmodifiable map"))}}
A.dJ.prototype={
aR(a,b,c){return J.aU(this.a,b,c)},
j(a,b){return J.M(this.a,b)},
i(a,b,c){var s=A.N(this)
J.ar(this.a,s.c.a(b),s.y[1].a(c))},
N(a,b){J.pN(this.a,A.N(this).h("~(1,2)").a(b))},
gB(a){return J.ef(this.a)},
gM(a){return J.dg(this.a)},
gk(a){return J.bg(this.a)},
l(a){return J.r(this.a)},
ga2(a){return J.pO(this.a)},
ga_(a){return J.ee(this.a)},
cL(a,b,c,d){return J.cL(this.a,A.N(this).C(c).C(d).h("a1<1,2>(3,4)").a(b),c,d)},
$iz:1}
A.c6.prototype={
aR(a,b,c){return new A.c6(J.aU(this.a,b,c),b.h("@<0>").C(c).h("c6<1,2>"))}}
A.ch.prototype={
gB(a){return this.gk(this)===0},
gM(a){return this.gk(this)!==0},
ab(a,b,c){var s=A.N(this)
return new A.cU(this,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("cU<1,2>"))},
l(a){return A.pQ(this,"{","}")},
gF(a){var s=this.gv(this)
if(!s.m())throw A.l(A.dD())
return s.gp(s)},
$iD:1,
$in:1,
$idP:1}
A.fr.prototype={}
A.e2.prototype={}
A.jh.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.h5(b):s}},
gk(a){return this.b==null?this.c.a:this.am().length},
gB(a){return this.gk(0)===0},
gM(a){return this.gk(0)>0},
gR(a){var s
if(this.b==null){s=this.c
return new A.cg(s,A.N(s).h("cg<1>"))}return new A.ji(this)},
ga2(a){var s,r=this
if(r.b==null){s=r.c
return new A.aO(s,A.N(s).h("aO<2>"))}return A.bl(r.am(),new A.ol(r),t.N,t.z)},
i(a,b,c){var s,r,q=this
A.U(b)
if(q.b==null)q.c.i(0,b,c)
else if(q.a1(0,b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.e4().i(0,b,c)},
a1(a,b){if(this.b==null)return this.c.a1(0,b)
if(typeof b!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
T(a,b){if(this.b!=null&&!this.a1(0,b))return null
return this.e4().T(0,b)},
N(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.N(0,b)
s=o.am()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.oI(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.l(A.aR(o))}},
am(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
e4(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.Y(t.N,t.z)
r=n.am()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.i(0,o,n.j(0,o))}if(p===0)B.f.t(r,"")
else B.f.bA(r)
n.a=n.b=null
return n.c=s},
h5(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.oI(this.a[a])
return this.b[a]=s}}
A.ol.prototype={
$1(a){return this.a.j(0,A.U(a))},
$S:19}
A.ji.prototype={
gk(a){return this.a.gk(0)},
I(a,b){var s=this.a
if(s.b==null)s=s.gR(0).I(0,b)
else{s=s.am()
if(!(b>=0&&b<s.length))return A.t(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.gR(0)
s=s.gv(s)}else{s=s.am()
s=new J.cN(s,s.length,A.au(s).h("cN<1>"))}return s}}
A.oC.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:26}
A.oB.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:26}
A.h3.prototype={
ic(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a4.length
a6=A.dO(a5,a6,a2)
s=$.tY()
for(r=s.length,q=a5,p=q,o=null,n=-1,m=-1,l=0;q<a6;q=k){k=q+1
if(!(q<a2))return A.t(a4,q)
j=a4.charCodeAt(q)
if(j===37){i=k+2
if(i<=a6){if(!(k<a2))return A.t(a4,k)
h=A.pt(a4.charCodeAt(k))
g=k+1
if(!(g<a2))return A.t(a4,g)
f=A.pt(a4.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.t(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.t(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.aY("")
g=o}else g=o
g.a+=B.b.u(a4,p,q)
c=A.at(j)
g.a+=c
p=k
continue}}throw A.l(A.aV("Invalid base64 data",a4,q))}if(o!=null){a2=B.b.u(a4,p,a6)
a2=o.a+=a2
r=a2.length
if(n>=0)A.qP(a4,m,a6,n,l,r)
else{b=B.r.b6(r-1,4)+1
if(b===1)throw A.l(A.aV(a1,a4,a6))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aE(a4,a5,a6,a2.charCodeAt(0)==0?a2:a2)}a=a6-a5
if(n>=0)A.qP(a4,m,a6,n,l,a)
else{b=B.r.b6(a,4)
if(b===1)throw A.l(A.aV(a1,a4,a6))
if(b>1)a4=B.b.aE(a4,a6,a6,b===2?"==":"=")}return a4}}
A.kx.prototype={}
A.cS.prototype={}
A.hb.prototype={}
A.hl.prototype={}
A.eH.prototype={
l(a){var s=A.hm(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hO.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.hN.prototype={
aU(a,b,c){var s=A.x2(b,this.ghO().a)
return s},
aa(a,b){var s=A.vM(a,this.ghQ().b,null)
return s},
ghQ(){return B.iF},
ghO(){return B.iE}}
A.m2.prototype={}
A.m1.prototype={}
A.on.prototype={
eC(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.at(92)
s.a+=o
o=A.at(117)
s.a+=o
o=A.at(100)
s.a+=o
o=p>>>8&15
o=A.at(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.at(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.at(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.at(92)
s.a+=o
switch(p){case 8:o=A.at(98)
s.a+=o
break
case 9:o=A.at(116)
s.a+=o
break
case 10:o=A.at(110)
s.a+=o
break
case 12:o=A.at(102)
s.a+=o
break
case 13:o=A.at(114)
s.a+=o
break
default:o=A.at(117)
s.a+=o
o=A.at(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.at(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.at(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.u(a,r,q)
r=q+1
o=A.at(92)
s.a+=o
o=A.at(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.u(a,r,m)},
c1(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.l(new A.hO(a,null))}B.f.t(s,a)},
bO(a){var s,r,q,p,o=this
if(o.eB(a))return
o.c1(a)
try{s=o.b.$1(a)
if(!o.eB(s)){q=A.r6(a,null,o.gdL())
throw A.l(q)}q=o.a
if(0>=q.length)return A.t(q,-1)
q.pop()}catch(p){r=A.aL(p)
q=A.r6(a,r,o.gdL())
throw A.l(q)}},
eB(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.X.l(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.eC(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c1(a)
q.iz(a)
s=q.a
if(0>=s.length)return A.t(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.c1(a)
r=q.iA(a)
s=q.a
if(0>=s.length)return A.t(s,-1)
s.pop()
return r}else return!1},
iz(a){var s,r,q=this.c
q.a+="["
s=J.al(a)
if(s.gM(a)){this.bO(s.j(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bO(s.j(a,r))}}q.a+="]"},
iA(a){var s,r,q,p,o,n=this,m={},l=J.al(a)
if(l.gB(a)){n.c.a+="{}"
return!0}s=l.gk(a)*2
r=A.hS(s,null,!1,t.X)
q=m.a=0
m.b=!0
l.N(a,new A.oo(m,r))
if(!m.b)return!1
l=n.c
l.a+="{"
for(p='"';q<s;q+=2,p=',"'){l.a+=p
n.eC(A.U(r[q]))
l.a+='":'
o=q+1
if(!(o<s))return A.t(r,o)
n.bO(r[o])}l.a+="}"
return!0}}
A.oo.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.f.i(s,r.a++,a)
B.f.i(s,r.a++,b)},
$S:16}
A.om.prototype={
gdL(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iR.prototype={}
A.nU.prototype={
cB(a){var s,r,q,p,o=a.length,n=A.dO(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.oD(r)
if(q.fz(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.t(a,p)
q.ct()}return new Uint8Array(r.subarray(0,A.wv(0,q.b,s)))}}
A.oD.prototype={
ct(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.bt(q)
s=q.length
if(!(p<s))return A.t(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.t(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.t(q,p)
q[p]=189},
hJ(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.bt(r)
o=r.length
if(!(q<o))return A.t(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.t(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.t(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.t(r,p)
r[p]=s&63|128
return!0}else{n.ct()
return!1}},
fz(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.t(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.t(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.bt(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.t(a,m)
if(k.hJ(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.ct()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.bt(s)
if(!(m<q))return A.t(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.bt(s)
if(!(m<q))return A.t(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.t(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.t(s,m)
s[m]=n&63|128}}}return o}}
A.nT.prototype={
cB(a){return new A.oA(this.a).fk(t.B.a(a),0,null,!0)}}
A.oA.prototype={
fk(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.B.a(a)
s=A.dO(b,c,J.bg(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.wk(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.wj(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c7(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.wl(o)
l.b=0
throw A.l(A.aV(m,a,p+l.c))}return n},
c7(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.r.a9(b+c,2)
r=q.c7(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c7(a,s,c,d)}return q.hN(a,b,c,d)},
hN(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aY(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.t(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.t(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.t(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.at(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.at(h)
e.a+=p
break
case 65:p=A.at(h)
e.a+=p;--d
break
default:p=A.at(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.t(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.t(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.t(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.t(a,l)
p=A.at(a[l])
e.a+=p}else{p=A.rk(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.at(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.oy.prototype={
$2(a,b){var s,r
A.U(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.b1(t.U.a(b)),r=this.a;s.m();){b=s.gp(s)
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.bE(b)}},
$S:2}
A.cT.prototype={
O(a,b){if(b==null)return!1
return b instanceof A.cT&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gL(a){return A.eU(this.a,this.b,B.T,B.T)},
l(a){var s=this,r=A.uU(A.vi(s)),q=A.hh(A.vg(s)),p=A.hh(A.vc(s)),o=A.hh(A.vd(s)),n=A.hh(A.vf(s)),m=A.hh(A.vh(s)),l=A.qX(A.ve(s)),k=s.b,j=k===0?"":A.qX(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.bu.prototype={
gi5(){return B.r.a9(this.a,1000)},
O(a,b){if(b==null)return!1
return b instanceof A.bu&&this.a===b.a},
gL(a){return B.r.gL(this.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.r.a9(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.r.a9(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.r.a9(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.b.eq(B.r.l(n%1e6),6,"0")}}
A.o0.prototype={
l(a){return this.W()}}
A.ao.prototype={
gaH(){return A.vb(this)}}
A.fX.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hm(s)
return"Assertion failed"}}
A.cl.prototype={}
A.bL.prototype={
gcc(){return"Invalid argument"+(!this.a?"(s)":"")},
gcb(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.V(p),n=s.gcc()+q+o
if(!s.a)return n
return n+s.gcb()+": "+A.hm(s.gcK())},
gcK(){return this.b}}
A.eW.prototype={
gcK(){return A.rT(this.b)},
gcc(){return"RangeError"},
gcb(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.V(q):""
else if(q==null)s=": Not greater than or equal to "+A.V(r)
else if(q>r)s=": Not in inclusive range "+A.V(r)+".."+A.V(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.V(r)
return s}}
A.hI.prototype={
gcK(){return A.b_(this.b)},
gcc(){return"RangeError"},
gcb(){if(A.b_(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.f6.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.iM.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.d_.prototype={
l(a){return"Bad state: "+this.a}}
A.h9.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hm(s)+"."}}
A.i9.prototype={
l(a){return"Out of Memory"},
gaH(){return null},
$iao:1}
A.f_.prototype={
l(a){return"Stack Overflow"},
gaH(){return null},
$iao:1}
A.o3.prototype={
l(a){return"Exception: "+this.a}}
A.bR.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.u(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.t(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.t(e,n)
m=e.charCodeAt(n)
if(m===10||m===13){r=n
break}}l=""
if(r-p>78){k="..."
if(f-p<75){j=p+75
i=p}else{if(r-f<75){i=r-75
j=r
k=""}else{i=f-36
j=f+36}l="..."}}else{j=r
i=p
k=""}return g+l+B.b.u(e,i,j)+k+"\n"+B.b.bP(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.V(f)+")"):g}}
A.n.prototype={
ab(a,b,c){var s=A.N(this)
return A.bl(this,s.C(c).h("1(n.E)").a(b),s.h("n.E"),c)},
aF(a,b){var s=A.N(this)
return new A.aA(this,s.h("ab(n.E)").a(b),s.h("aA<n.E>"))},
J(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.r(q.gp(q))
if(!q.m())return s
if(b.length===0){r=s
do r+=J.r(q.gp(q))
while(q.m())}else{r=s
do r=r+b+J.r(q.gp(q))
while(q.m())}return r.charCodeAt(0)==0?r:r},
bN(a,b){var s=A.N(this).h("n.E")
if(b)s=A.aw(this,s)
else{s=A.aw(this,s)
s.$flags=1
s=s}return s},
gk(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gB(a){return!this.gv(this).m()},
gM(a){return!this.gB(this)},
gF(a){var s=this.gv(this)
if(!s.m())throw A.l(A.dD())
return s.gp(s)},
I(a,b){var s,r
A.eX(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gp(s);--r}throw A.l(A.az(b,b-r,this,"index"))},
l(a){return A.v5(this,"(",")")}}
A.a1.prototype={
l(a){return"MapEntry("+A.V(this.a)+": "+A.V(this.b)+")"}}
A.aH.prototype={
gL(a){return A.Q.prototype.gL.call(this,0)},
l(a){return"null"}}
A.Q.prototype={$iQ:1,
O(a,b){return this===b},
gL(a){return A.eV(this)},
l(a){return"Instance of '"+A.ig(this)+"'"},
gU(a){return A.ps(this)},
toString(){return this.l(this)}}
A.jJ.prototype={
l(a){return""},
$icA:1}
A.nn.prototype={
gea(){var s,r=this.b
if(r==null)r=$.ih.$0()
s=r-this.a
if($.qE()===1e6)return s
return s*1000}}
A.aY.prototype={
gk(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ivs:1}
A.nS.prototype={
$2(a,b){var s,r,q,p
t.V.a(a)
A.U(b)
s=B.b.cJ(b,"=")
if(s===-1){if(b!=="")J.ar(a,A.qe(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.u(b,0,s)
q=B.b.a5(b,s+1)
p=this.a
J.ar(a,A.qe(r,0,r.length,p,!0),A.qe(q,0,q.length,p,!0))}return a},
$S:79}
A.nR.prototype={
$2(a,b){throw A.l(A.aV("Illegal IPv6 address, "+a,this.a,b))},
$S:39}
A.fF.prototype={
gby(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.V(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gL(a){var s,r=this,q=r.y
if(q===$){s=B.b.gL(r.gby())
r.y!==$&&A.tv()
r.y=s
q=s}return q},
gcO(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.rt(s==null?"":s)
r.z!==$&&A.tv()
q=r.z=new A.c6(s,t.dw)}return q},
gez(){return this.b},
gaD(a){var s=this.c
if(s==null)return""
if(B.b.K(s,"[")&&!B.b.X(s,"v",1))return B.b.u(s,1,s.length-1)
return s},
gbM(a){var s=this.d
return s==null?A.rJ(this.a):s},
gcN(a){var s=this.f
return s==null?"":s},
geh(){var s=this.r
return s==null?"":s},
cQ(a,b){var s,r,q,p,o,n,m,l,k,j=this
t.h.a(b)
s=j.a
r=s==="file"
q=j.b
p=j.d
o=j.c
if(!(o!=null))o=q.length!==0||p!=null||r?"":null
n=j.e
if(!r)m=o!=null&&n.length!==0
else m=!0
if(m&&!B.b.K(n,"/"))n="/"+n
l=n
if(b!=null)k=A.qc(null,0,0,b)
else k=j.f
return A.qa(s,q,o,p,l,k,j.r)},
gem(){return this.a.length!==0},
gei(){return this.c!=null},
gel(){return this.f!=null},
gej(){return this.r!=null},
l(a){return this.gby()},
O(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.dD.b(b))if(p.a===b.gac())if(p.c!=null===b.gei())if(p.b===b.gez())if(p.gaD(0)===b.gaD(b))if(p.gbM(0)===b.gbM(b))if(p.e===b.ger(b)){r=p.f
q=r==null
if(!q===b.gel()){if(q)r=""
if(r===b.gcN(b)){r=p.r
q=r==null
if(!q===b.gej()){s=q?"":r
s=s===b.geh()}}}}return s},
$iiO:1,
gac(){return this.a},
ger(a){return this.e}}
A.ox.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.oz(1,a,B.U,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.oz(1,b,B.U,!0)
s.a+=r}},
$S:73}
A.ow.prototype={
$2(a,b){var s,r
A.U(a)
if(b==null||typeof b=="string")this.a.$2(a,A.bE(b))
else for(s=J.b1(t.U.a(b)),r=this.a;s.m();)r.$2(a,A.U(s.gp(s)))},
$S:2}
A.nQ.prototype={
gey(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.t(m,0)
s=o.a
m=m[0]+1
r=B.b.bK(s,"?",m)
q=s.length
if(r>=0){p=A.fG(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.j3("data","",n,n,A.fG(s,m,q,128,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.t(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jy.prototype={
gem(){return this.b>0},
gei(){return this.c>0},
gek(){return this.c>0&&this.d+1<this.e},
gel(){return this.f<this.r},
gej(){return this.r<this.a.length},
gac(){var s=this.w
return s==null?this.w=this.fd():s},
fd(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.K(r.a,"http"))return"http"
if(q===5&&B.b.K(r.a,"https"))return"https"
if(s&&B.b.K(r.a,"file"))return"file"
if(q===7&&B.b.K(r.a,"package"))return"package"
return B.b.u(r.a,0,q)},
gez(){var s=this.c,r=this.b+3
return s>r?B.b.u(this.a,r,s-1):""},
gaD(a){var s=this.c
return s>0?B.b.u(this.a,s,this.d):""},
gbM(a){var s,r=this
if(r.gek())return A.xO(B.b.u(r.a,r.d+1,r.e))
s=r.b
if(s===4&&B.b.K(r.a,"http"))return 80
if(s===5&&B.b.K(r.a,"https"))return 443
return 0},
ger(a){return B.b.u(this.a,this.e,this.f)},
gcN(a){var s=this.f,r=this.r
return s<r?B.b.u(this.a,s+1,r):""},
geh(){var s=this.r,r=this.a
return s<r.length?B.b.a5(r,s+1):""},
gcO(){if(this.f>=this.r)return B.co
return new A.c6(A.rt(this.gcN(0)),t.dw)},
cQ(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
t.h.a(b)
s=h.gac()
r=s==="file"
q=h.c
p=q>0?B.b.u(h.a,h.b+3,q):""
o=h.gek()?h.gbM(0):g
q=h.c
if(q>0)n=B.b.u(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.b.u(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.b.K(l,"/"))l="/"+l
if(b!=null)j=A.qc(g,0,0,b)
else{k=h.r
j=m<k?B.b.u(q,m+1,k):g}m=h.r
i=m<q.length?B.b.a5(q,m+1):g
return A.qa(s,p,n,o,l,j,i)},
gL(a){var s=this.x
return s==null?this.x=B.b.gL(this.a):s},
O(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.l(0)},
l(a){return this.a},
$iiO:1}
A.j3.prototype={}
A.K.prototype={}
A.fU.prototype={
gk(a){return a.length}}
A.fV.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.fW.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.ei.prototype={}
A.c1.prototype={
gk(a){return a.length}}
A.hc.prototype={
gk(a){return a.length}}
A.aj.prototype={$iaj:1}
A.dv.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.kX.prototype={}
A.b7.prototype={}
A.bN.prototype={}
A.hd.prototype={
gk(a){return a.length}}
A.he.prototype={
gk(a){return a.length}}
A.hg.prototype={
gk(a){return a.length}}
A.hi.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.eo.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.eU.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.ep.prototype={
l(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.V(r)+", "+A.V(s)+") "+A.V(this.gaG(a))+" x "+A.V(this.gaC(a))},
O(a,b){var s,r,q
if(b==null)return!1
s=!1
if(t.at.b(b)){r=a.left
r.toString
q=b.left
q.toString
if(r===q){r=a.top
r.toString
q=b.top
q.toString
if(r===q){s=J.de(b)
s=this.gaG(a)===s.gaG(b)&&this.gaC(a)===s.gaC(b)}}}return s},
gL(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.eU(r,s,this.gaG(a),this.gaC(a))},
gdB(a){return a.height},
gaC(a){var s=this.gdB(a)
s.toString
return s},
ge5(a){return a.width},
gaG(a){var s=this.ge5(a)
s.toString
return s},
$ibU:1}
A.hj.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){A.U(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.hk.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.I.prototype={
l(a){var s=a.localName
s.toString
return s}}
A.u.prototype={}
A.bh.prototype={$ibh:1}
A.hn.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.c8.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.ho.prototype={
gk(a){return a.length}}
A.hA.prototype={
gk(a){return a.length}}
A.bj.prototype={$ibj:1}
A.hF.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.cW.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.D.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.hU.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.hV.prototype={
gk(a){return a.length}}
A.hW.prototype={
j(a,b){return A.cH(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cH(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.m7(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.m8(s))
return s},
gk(a){var s=a.size
s.toString
return s},
gB(a){var s=a.size
s.toString
return s===0},
gM(a){var s=a.size
s.toString
return s!==0},
i(a,b,c){A.U(b)
throw A.l(A.S("Not supported"))},
T(a,b){throw A.l(A.S("Not supported"))},
$iz:1}
A.m7.prototype={
$2(a,b){return B.f.t(this.a,a)},
$S:2}
A.m8.prototype={
$2(a,b){return B.f.t(this.a,t.f.a(b))},
$S:2}
A.hX.prototype={
j(a,b){return A.cH(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cH(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.m9(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.ma(s))
return s},
gk(a){var s=a.size
s.toString
return s},
gB(a){var s=a.size
s.toString
return s===0},
gM(a){var s=a.size
s.toString
return s!==0},
i(a,b,c){A.U(b)
throw A.l(A.S("Not supported"))},
T(a,b){throw A.l(A.S("Not supported"))},
$iz:1}
A.m9.prototype={
$2(a,b){return B.f.t(this.a,a)},
$S:2}
A.ma.prototype={
$2(a,b){return B.f.t(this.a,t.f.a(b))},
$S:2}
A.bm.prototype={$ibm:1}
A.hY.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.cI.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.a2.prototype={
l(a){var s=a.nodeValue
return s==null?this.eH(a):s},
$ia2:1}
A.eS.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.D.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.bn.prototype={
gk(a){return a.length},
$ibn:1}
A.id.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.he.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.ij.prototype={
j(a,b){return A.cH(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cH(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.na(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.nb(s))
return s},
gk(a){var s=a.size
s.toString
return s},
gB(a){var s=a.size
s.toString
return s===0},
gM(a){var s=a.size
s.toString
return s!==0},
i(a,b,c){A.U(b)
throw A.l(A.S("Not supported"))},
T(a,b){throw A.l(A.S("Not supported"))},
$iz:1}
A.na.prototype={
$2(a,b){return B.f.t(this.a,a)},
$S:2}
A.nb.prototype={
$2(a,b){return B.f.t(this.a,t.f.a(b))},
$S:2}
A.il.prototype={
gk(a){return a.length}}
A.bo.prototype={$ibo:1}
A.im.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.fY.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.bp.prototype={$ibp:1}
A.io.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.dP.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.bq.prototype={
gk(a){return a.length},
$ibq:1}
A.is.prototype={
j(a,b){return a.getItem(A.U(b))},
i(a,b,c){a.setItem(A.U(b),A.U(c))},
T(a,b){var s
A.U(b)
s=a.getItem(b)
a.removeItem(b)
return s},
N(a,b){var s,r,q
t.eA.a(b)
for(s=0;;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.no(s))
return s},
ga2(a){var s=A.e([],t.s)
this.N(a,new A.np(s))
return s},
gk(a){var s=a.length
s.toString
return s},
gB(a){return a.key(0)==null},
gM(a){return a.key(0)!=null},
$iz:1}
A.no.prototype={
$2(a,b){return B.f.t(this.a,a)},
$S:18}
A.np.prototype={
$2(a,b){return B.f.t(this.a,b)},
$S:18}
A.b3.prototype={$ib3:1}
A.f4.prototype={
six(a,b){a.value=b}}
A.br.prototype={$ibr:1}
A.b4.prototype={$ib4:1}
A.iC.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.do.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.iD.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.a0.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.iF.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.bs.prototype={$ibs:1}
A.iH.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.aK.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.iI.prototype={
gk(a){return a.length}}
A.iQ.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.iS.prototype={
gk(a){return a.length}}
A.j1.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.g5.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.fa.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.V(p)+", "+A.V(s)+") "+A.V(r)+" x "+A.V(q)},
O(a,b){var s,r,q
if(b==null)return!1
s=!1
if(t.at.b(b)){r=a.left
r.toString
q=b.left
q.toString
if(r===q){r=a.top
r.toString
q=b.top
q.toString
if(r===q){r=a.width
r.toString
q=J.de(b)
if(r===q.gaG(b)){s=a.height
s.toString
q=s===q.gaC(b)
s=q}}}}return s},
gL(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.eU(p,s,r,q)},
gdB(a){return a.height},
gaC(a){var s=a.height
s.toString
return s},
ge5(a){return a.width},
gaG(a){var s=a.width
s.toString
return s}}
A.je.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
return a[b]},
i(a,b,c){t.g7.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){if(a.length>0)return a[0]
throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.fm.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.D.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.jC.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.gf.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.jK.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.gn.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$in:1,
$iC:1}
A.P.prototype={
gv(a){return new A.eu(a,this.gk(a),A.aC(a).h("eu<P.E>"))},
t(a,b){A.aC(a).h("P.E").a(b)
throw A.l(A.S("Cannot add to immutable List."))}}
A.eu.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.M(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
$iah:1}
A.j2.prototype={}
A.j4.prototype={}
A.j5.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.j9.prototype={}
A.ja.prototype={}
A.jf.prototype={}
A.jg.prototype={}
A.jm.prototype={}
A.jn.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.jq.prototype={}
A.jr.prototype={}
A.ju.prototype={}
A.jv.prototype={}
A.jx.prototype={}
A.fs.prototype={}
A.ft.prototype={}
A.jA.prototype={}
A.jB.prototype={}
A.jD.prototype={}
A.jL.prototype={}
A.jM.prototype={}
A.fw.prototype={}
A.fx.prototype={}
A.jO.prototype={}
A.jP.prototype={}
A.jT.prototype={}
A.jU.prototype={}
A.jV.prototype={}
A.jW.prototype={}
A.jX.prototype={}
A.jY.prototype={}
A.jZ.prototype={}
A.k_.prototype={}
A.k0.prototype={}
A.k1.prototype={}
A.mv.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pC.prototype={
$1(a){return this.a.aS(0,this.b.h("0/?").a(a))},
$S:7}
A.pD.prototype={
$1(a){if(a==null)return this.a.ah(new A.mv(a===undefined))
return this.a.ah(a)},
$S:7}
A.po.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.t2(a))return a
s=this.a
a.toString
if(s.a1(0,a))return s.j(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.ca(A.aS(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fM(!0,"isUtc",t.y)
return new A.cT(r,0,!0)}if(a instanceof RegExp)throw A.l(A.c_("structured clone of RegExp",null))
if(a instanceof Promise)return A.xX(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.Y(p,p)
s.i(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bK(n),p=s.gv(n);p.m();)m.push(A.th(p.gp(p)))
for(l=0;l<s.gk(n);++l){k=s.j(n,l)
if(!(l<m.length))return A.t(m,l)
j=m[l]
if(k!=null)o.i(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.i(0,a,o)
h=A.b_(a.length)
for(s=J.al(i),l=0;l<h;++l)o.push(this.$1(s.j(i,l)))
return o}return a},
$S:42}
A.bx.prototype={$ibx:1}
A.hQ.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.l(A.az(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.bG.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$in:1,
$iC:1}
A.bA.prototype={$ibA:1}
A.i7.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.l(A.az(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.ck.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$in:1,
$iC:1}
A.ie.prototype={
gk(a){return a.length}}
A.iu.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.l(A.az(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){A.U(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$in:1,
$iC:1}
A.bC.prototype={$ibC:1}
A.iJ.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.l(A.az(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.cM.a(c)
throw A.l(A.S("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.S("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$in:1,
$iC:1}
A.jj.prototype={}
A.jk.prototype={}
A.js.prototype={}
A.jt.prototype={}
A.jH.prototype={}
A.jI.prototype={}
A.jQ.prototype={}
A.jR.prototype={}
A.fZ.prototype={
gk(a){return a.length}}
A.h_.prototype={
j(a,b){return A.cH(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cH(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.kk(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.kl(s))
return s},
gk(a){var s=a.size
s.toString
return s},
gB(a){var s=a.size
s.toString
return s===0},
gM(a){var s=a.size
s.toString
return s!==0},
i(a,b,c){A.U(b)
throw A.l(A.S("Not supported"))},
T(a,b){throw A.l(A.S("Not supported"))},
$iz:1}
A.kk.prototype={
$2(a,b){return B.f.t(this.a,a)},
$S:2}
A.kl.prototype={
$2(a,b){return B.f.t(this.a,t.f.a(b))},
$S:2}
A.h0.prototype={
gk(a){return a.length}}
A.cu.prototype={}
A.i8.prototype={
gk(a){return a.length}}
A.j_.prototype={}
A.dX.prototype={
W(){return"WebSocketConnectionState."+this.b}}
A.cx.prototype={
W(){return"FlintErrorKind."+this.b}}
A.ex.prototype={
W(){return"FlintResponseType."+this.b}}
A.nm.prototype={}
A.bO.prototype={
l(a){var s,r=this,q="FlintError: "+r.a,p=r.b
if(p!=null)q+=" (Status: "+A.V(p)+")"
q+=" [Kind: "+r.r.b+"]"
p=r.e
if(p!=null){s=r.f
s=s==null?null:s.toUpperCase()
if(s==null)s="GET"
p=q+(" ["+s+" "+p.l(0)+"]")
q=p}return q.charCodeAt(0)==0?q:q}}
A.c3.prototype={}
A.l0.prototype={
iB(a){var s,r,q,p,o,n=null,m=t.N,l=A.b8(this.b,m,m)
l=new A.af(l,A.N(l).h("af<1,2>")).gv(0)
for(;;){if(!l.m()){s=n
break}r=l.d
if(r.a.toLowerCase()==="authorization"){s=r.b
break}}q=s!=null&&B.b.K(s,"Bearer ")?B.b.a5(s,7):n
p=this.a
if(B.b.eb(p,"/"))p=B.b.u(p,0,p.length-1)
o=B.b.K(a,"/")?a:"/"+a
return new A.lh(B.b.cR(p+o,A.bV("^http",!0,!1),"ws"),n,!1,!1,"token",q,n,A.Y(m,t.gz),A.e([],t.c7),B.ak)},
b5(a,b,c,d,e,f,g,h,i,j,k){return this.il(0,b,c,d,t.v.a(e),f,g,h,i,j,k,k.h("c3<0>"))},
il(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var s=0,r=A.bd(b4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$b5=A.be(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:a0=n.hH(a5,b1)
a1=new A.nn()
$.qE()
f=$.ih.$0()
a1.a=f
a1.b=null
m=a1
p=4
s=7
return A.b0(n.hi(a4.toUpperCase(),a0,a6,a7,b0,n.d,b3),$async$b5)
case 7:l=b6
f=m
if(f.b==null)f.b=$.ih.$0()
f=l.a
e=l.b
d=l.d
c=l.e
b=A.cD(a0,0,null)
k=A.qZ(e,A.kY(m.gea(),0,0),c,a4,f,n.x,d,b,b3)
n.du(k,null,a8,b3)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.aL(a2)
f=m
if(f.b==null)f.b=$.ih.$0()
i=j instanceof A.bO?j:A.uX(j,a4,A.cD(a0,0,null))
A.kY(m.gea(),0,0)
f=i.b
if(f==null)f=500
h=new A.c3(f,null,B.c5,null,!1,n.x,b3.h("c3<0>"))
n.du(h,i,a8,b3)
g=n.e
f=g
if(f!=null)f.$1(i)
q=h
s=1
break
s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$b5,r)},
hi(a,b,c,d,e,f,g){var s,r,q,p,o,n,m
t.v.a(d)
s=A.x(new v.G.XMLHttpRequest())
r=new A.an($.ag,g.h("an<c3<0>>"))
q=new A.cn(r,g.h("cn<c3<0>>"))
p=t.N
p=A.Y(p,p)
p.i(0,"Accept","application/json")
p.S(0,this.b)
if(d!=null)p.S(0,d)
o=this.f6(0,c,p)
s.open(a,b,!0)
s.withCredentials=!0
for(p=new A.af(p,p.$ti.h("af<1,2>")).gv(0);p.m();){n=p.d
s.setRequestHeader(n.a,n.b)}p=t.an
m=t.m
A.cE(s,"load",p.a(new A.l2(this,s,e,b,a,q,g)),!1,m)
A.cE(s,"error",p.a(new A.l3(q,b,a)),!1,m)
if(o==null)s.send()
else s.send(o)
return r.ir(0,f,new A.l4(s,f,b,a))},
hH(a,b){var s,r,q,p,o,n=this.a
if(B.b.eb(n,"/"))n=B.b.u(n,0,n.length-1)
s=A.cD(n+(B.b.K(a,"/")?a:"/"+a),0,null)
r=t.N
q=A.b8(s.gcO(),r,t.z)
q.S(0,this.c)
r=A.Y(r,r)
for(q=new A.af(q,A.N(q).h("af<1,2>")).gv(0);q.m();){p=q.d
o=p.b
if(o!=null)r.i(0,p.a,J.r(o))}return s.cQ(0,r.a===0?null:r).gby()},
f6(a,b,c){t.V.a(c)
if(b==null)return null
c.cM(0,"Content-Type",new A.l1())
return B.E.aa(b,null)},
h1(a,b,c,d){var s
if(B.b.D(a).length===0)return new A.cF(null,B.c5,d.h("cF<0>"))
if(B.b.H(b.toLowerCase(),"json")||B.b.K(B.b.ew(a),"{")||B.b.K(B.b.ew(a),"[")){s=d.h("0?").a(B.E.aU(0,a,null))
return new A.cF(s,B.hQ,d.h("cF<0>"))}d.h("0?").a(a)
return new A.cF(a,B.hR,d.h("cF<0>"))},
hc(a){var s,r,q,p,o=t.N,n=A.Y(o,o)
for(o=B.b.eG(a,A.bV("\\r?\\n",!0,!1)),s=o.length,r=0;r<o.length;o.length===s||(0,A.aE)(o),++r){q=o[r]
if(B.b.D(q).length===0)continue
p=B.b.cJ(q,":")
if(p<=0)continue
n.i(0,B.b.u(q,0,p).toLowerCase(),B.b.D(B.b.a5(q,p+1)))}return n},
du(a,b,c,d){d.h("c3<0>").a(a)}}
A.l2.prototype={
$1(a){var s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=A.U(l.responseText),j=A.bE(l.getResponseHeader("content-type"))
if(j==null)j=""
s=o.r
r=m.h1(k,j,o.c,s)
j=A.b_(l.status)
k=o.d
q=o.e
p=A.qZ(r.a,n,m.hc(A.U(l.getAllResponseHeaders())),q,j,m.x,r.b,A.cD(k,0,n),s)
m=p.a
l=o.f
if(B.aH.H(0,m))l.aS(0,p)
else l.ah(A.ht("HTTP "+m,p.b,B.b5,q,n,m,n,A.cD(k,0,n)))},
$S:4}
A.l3.prototype={
$1(a){var s=null
this.a.ah(A.ht("Network request failed",s,B.c4,this.c,s,s,s,A.cD(this.b,0,s)))},
$S:4}
A.l4.prototype={
$0(){var s=this,r=null
s.a.abort()
throw A.l(A.ht("Request timed out after "+s.b.gi5()+"ms",r,B.c3,s.d,r,r,r,A.cD(s.c,0,r)))},
$S:77}
A.l1.prototype={
$0(){return"application/json"},
$S:29}
A.lh.prototype={
bp(){var s=0,r=A.bd(t.dk),q,p=this,o,n
var $async$bp=A.be(function(a,b){if(a===1)return A.ba(b,r)
for(;;)switch(s){case 0:o=A.rx(null,t.dk)
s=3
return A.b0(o,$async$bp)
case 3:n=b
q=n==null?p.y:n
s=1
break
case 1:return A.bb(q,r)}})
return A.bc($async$bp,r)},
ba(){var s=0,r=A.bd(t.N),q,p=this,o,n
var $async$ba=A.be(function(a,b){if(a===1)return A.ba(b,r)
for(;;)switch(s){case 0:s=3
return A.b0(p.bp(),$async$ba)
case 3:o=A.cD(p.a,0,null)
n=t.N
n=A.b8(o.gcO(),n,n)
q=o.cQ(0,n.a===0?null:n).gby()
s=1
break
case 1:return A.bb(q,r)}})
return A.bc($async$ba,r)},
aT(){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aT=A.be(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.cx
if(h===B.al||h===B.cB){s=1
break}n.ax=!1
n.ar(B.cB)
p=4
s=7
return A.b0(n.ba(),$async$aT)
case 7:m=b
l=A.x(new v.G.WebSocket(m))
n.x=l
h=t.an
j=t.m
A.cE(l,"open",h.a(new A.lk(n)),!1,j)
A.cE(l,"message",h.a(new A.ll(n)),!1,j)
A.cE(l,"error",h.a(new A.lm(n)),!1,j)
A.cE(l,"close",h.a(new A.ln(n)),!1,j)
p=2
s=6
break
case 4:p=3
g=o.pop()
k=A.aL(g)
n.bk(k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$aT,r)},
hL(a,b,c){var s,r,q=this
q.ax=!0
q.at=!1
s=q.ch
if(s!=null)s.ag(0)
q.ch=null
try{s=q.x
if(s!=null)s.close(b,c)}catch(r){}q.x=null
q.ar(B.ak)
q.a3("close",c)},
ai(a,b,c){t.g6.a(c)
J.uH(this.Q.cM(0,b,new A.lo()),c)},
hP(a,b){var s,r=A.ai(["event",a,"data",b],t.N,t.z),q=this.x
if(q!=null&&this.cx===B.al)try{q.send(B.E.aa(r,null))
return}catch(s){}B.f.t(this.as,r)},
fL(a){var s,r,q,p,o=this,n="message"
try{s=B.E.aU(0,J.r(a),null)
if(t.P.b(s)){r=J.M(s,"event")
q=J.M(s,"data")
if(J.a9(r,"pong")){o.CW=new A.cT(Date.now(),0,!1)
return}if(typeof r=="string"&&r.length!==0)o.a3(r,q)
else o.a3(n,s)}else o.a3(n,s)}catch(p){o.a3(n,a)}},
bk(a){var s,r,q=this
if(q.cx===B.ak)return
s=q.ch
if(s!=null)s.ag(0)
q.ch=null
q.a3("disconnect",a)
if(q.ax){q.ar(B.ak)
return}if(q.at)return
q.at=!0
q.ar(B.lU)
s=q.ay
if(s>=5){q.at=!1
q.ar(B.ak)
q.c8("reconnect_failed")
return}r=A.kY(0,0,3*B.r.hl(1,s));++s
q.ay=s
q.a3("reconnect_scheduled",A.ai(["attempt",s,"delaySeconds",B.r.a9(r.a,1e6)],t.N,t.S))
A.c5(r,new A.li(q))},
ar(a){if(this.cx===a)return
this.cx=a
this.a3("state_change",a)},
a3(a,b){var s,r,q,p=this.Q.j(0,a)
if(p==null)return
for(s=A.eM(p,!0,t.Z),r=s.length,q=0;q<r;++q)s[q].$1(b)},
c8(a){return this.a3(a,null)},
fC(){var s,r,q,p,o,n,m,l=this
if(l.cx!==B.al||l.x==null)return
for(r=l.as,q=A.eM(r,!0,t.P),p=q.length,o=0;o<p;++o){s=q[o]
try{n=l.x
n.toString
n.send(B.E.aa(s,null))
B.f.T(r,s)}catch(m){break}}},
hr(){var s=this.ch
if(s!=null)s.ag(0)
this.ch=A.rn(B.fS,new A.lj(this))}}
A.lk.prototype={
$1(a){var s=this.a
s.ar(B.al)
s.ay=0
s.CW=new A.cT(Date.now(),0,!1)
s.c8("connect")
s.c8("open")
s.hr()
s.fC()},
$S:4}
A.ll.prototype={
$1(a){this.a.fL(A.th(a.data))},
$S:4}
A.lm.prototype={
$1(a){var s=this.a
s.a3("error",a)
s.bk(a)},
$S:4}
A.ln.prototype={
$1(a){var s=this.a
s.a3("close",a)
s.bk(a)},
$S:4}
A.lo.prototype={
$0(){return A.e([],t.g_)},
$S:38}
A.li.prototype={
$0(){var s=0,r=A.bd(t.H),q,p=this,o
var $async$$0=A.be(function(a,b){if(a===1)return A.ba(b,r)
for(;;)switch(s){case 0:o=p.a
o.at=!1
if(o.ax){s=1
break}s=3
return A.b0(o.aT(),$async$$0)
case 3:case 1:return A.bb(q,r)}})
return A.bc($async$$0,r)},
$S:20}
A.lj.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
if(s.cx!==B.al||s.x==null){a.ag(0)
return}if(s.CW!=null){r=Date.now()
q=s.CW
p=q.a
p=A.kY(0-q.b,r-p,0).a>3e7
r=p}else r=!1
if(r){s.bk("Heartbeat timeout")
return}r=t.z
s.hP("ping",A.Y(r,r))},
$S:21}
A.cF.prototype={}
A.ku.prototype={
gV(){var s=A.bE(A.x(A.x(v.G.window).localStorage).getItem("auth.token"))
if(s==null||s.length===0)return null
return s},
gak(a){var s=J.M(B.an.cP("auth.user"),"role")
return s==null?null:J.r(s)}}
A.l5.prototype={
hh(){if(this.d)return
this.d=!0
A.pG(new A.le(this))},
h0(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return
s=n.a
r=A.rv(s)
q=n.c
p=A.Y(t.N,t.e)
s.textContent=""
A.x(s.appendChild(n.be(m,"0",q,p)))
n.dS(r,s)
for(s=new A.af(q,A.N(q).h("af<1,2>")).gv(0);s.m();){o=s.d
if(!p.a1(0,o.a))n.bz(o.b)}n.c=p
n.e=!0},
be(a,b,c,d){var s=this,r=t.A
r.a(c)
r.a(d)
A:{if(a instanceof A.cy){r=A.x(A.x(v.G.document).createTextNode(a.a))
break A}if(a instanceof A.ev){r=s.fq(a.a,b,c,d)
break A}if(a instanceof A.a7){r=s.fp(0,a.a,a.b,a.c,b,c,d)
break A}if(a instanceof A.X){r=s.dr(a,b,c,d)
break A}if(a instanceof A.dy){r=s.dr(a.a,b,c,d)
break A}r=A.ca(A.S("Unsupported FlintNode type: "+A.ps(a).l(0)))}return r},
fq(a,b,c,d){var s,r,q
t.aw.a(a)
s=t.A
s.a(c)
s.a(d)
r=A.x(A.x(v.G.document).createDocumentFragment())
for(s=b+".",q=0;q<a.length;++q)A.x(r.appendChild(this.be(a[q],s+q,c,d)))
return r},
fp(a,b,c,d,e,f,g){var s,r,q
t.L.a(c)
t.aw.a(d)
s=t.A
s.a(f)
s.a(g)
r=this.fo(b)
this.eY(r,c)
for(s=e+".",q=0;q<d.length;++q)A.x(r.appendChild(this.be(d[q],s+q,f,g)))
return r},
fo(a){if(B.lq.H(0,a))return A.x(A.x(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
return A.x(A.x(v.G.document).createElement(a))},
dr(a,b,c,d){var s,r,q,p
t.dH.a(a)
s=t.A
s.a(c)
s.a(d)
r=c.j(0,b)
s=r!=null
if(s){A.ps(r.a)
A.ps(a)}q=A.x(A.x(v.G.document).createElement("flint-component"))
p=new A.f9(a,q,A.Y(t.N,t.e))
if(s)this.bz(r)
d.i(0,b,p)
a.a=t.M.a(new A.l9(this,p))
this.dR(p)
A.pG(a.gav())
return q},
hg(a){if(a.d)return
a.d=!0
A.pG(new A.ld(this,a))},
dR(a){var s,r=this,q=a.c,p=A.Y(t.N,t.e),o=a.b,n=A.rv(o)
o.textContent=""
o.setAttribute("style","display: contents;")
A.x(o.appendChild(r.be(r.dK(a.a.E()),"c",q,p)))
r.dS(n,o)
for(o=new A.af(q,A.N(q).h("af<1,2>")).gv(0);o.m();){s=o.d
if(!p.a1(0,s.a))r.bz(s.b)}a.shK(p)
a.e=!0},
dS(a,b){if(a==null)return
a.cS(0,b)
A.pG(new A.lb(a,b))
A.c5(B.aV,new A.lc(a,b))},
bz(a){var s
for(s=a.c,s=new A.cY(s,s.r,s.e,A.N(s).h("cY<2>"));s.m();)this.bz(s.d)
a.a.cW()},
eY(a,b){t.L.a(b).N(0,new A.l6(this,a))},
eW(a,b,c){var s,r
if(b==="value"){s=J.r(c)
if(A.U(a.value)!==s)a.value=s
return!0}if(b==="checked"){r=J.bf(c)
a.checked=r.O(c,!0)
if(r.O(c,!0))a.setAttribute(b,"")
return!0}return!1},
eX(a,b,c){var s
if(b==="muted"){s=J.bf(c)
a.muted=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="controls"){s=J.bf(c)
a.controls=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="autoplay"){s=J.bf(c)
a.autoplay=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="loop"){s=J.bf(c)
a.loop=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="playsinline"){s=J.bf(c)
a.playsInline=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}return!1},
hb(a){var s,r,q,p
if(B.b.D(a).length===0)return
s="flint-style-"+B.b.gL(a)
r=v.G
if(A.aQ(A.x(r.document).querySelector('style[data-flint-style-id="'+s+'"]'))!=null)return
q=A.aQ(A.x(r.document).querySelector("head"))
if(q==null)return
p=A.x(A.x(r.document).createElement("style"))
p.setAttribute("data-flint-style-id",s)
p.textContent=a
A.x(q.appendChild(p))},
eZ(a,b){if(typeof b=="string"){a.setAttribute("style",b)
return}if(t.L.b(b))a.setAttribute("style",J.ee(b).aF(0,new A.l7()).ab(0,new A.l8(),t.N).J(0,"; "))},
fX(a,b,c){a.addEventListener(b,A.oL(new A.la(c)))},
dK(a){var s
if(a instanceof A.J)return a
if(a instanceof A.X)return new A.dy(a)
s=a==null?null:J.r(a)
return new A.cy(s==null?"":s)}}
A.le.prototype={
$0(){var s=this.a
s.d=!1
s.h0()},
$S:0}
A.l9.prototype={
$0(){return this.a.hg(this.b)},
$S:0}
A.ld.prototype={
$0(){var s=this.b
s.d=!1
this.a.dR(s)
if(s.e)s.a.bC()},
$S:0}
A.lb.prototype={
$0(){return this.a.cS(0,this.b)},
$S:0}
A.lc.prototype={
$0(){return this.a.cS(0,this.b)},
$S:0}
A.l6.prototype={
$2(a,b){var s,r,q=this
A.U(a)
if(b==null||J.a9(b,!1))return
if(a==="_flintStyleCss"){q.a.hb(J.r(b))
return}if(a==="_flintMediaController")return
if(a==="_flintCanvasController")return
if(a==="_flintThreeSceneController")return
if(a==="className"){q.b.className=J.r(b)
return}if(a==="style"){q.a.eZ(q.b,b)
return}s=q.a
r=q.b
if(s.eW(r,a,b))return
if(s.eX(r,a,b))return
if(B.b.K(a,"on")&&t.Z.b(b)){s.fX(r,B.b.a5(a,2).toLowerCase(),b)
return}s=J.bf(b)
if(s.O(b,!0)){r.setAttribute(a,"")
return}r.setAttribute(a,s.l(b))},
$S:76}
A.l7.prototype={
$1(a){return t.d.a(a).b!=null},
$S:9}
A.l8.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.V(a.b)},
$S:10}
A.la.prototype={
$1(a){this.a.$1(A.x(a))},
$S:13}
A.f9.prototype={
shK(a){this.c=t.A.a(a)}}
A.nW.prototype={
cS(a,b){var s,r=this.fA(b)
if(r==null)return
s=this.b
if(A.U(r.value)!==s)r.value=s
r.focus()
this.hd(r)
return},
fA(a){var s,r,q,p,o,n=this,m=n.fB(a)
if(m!=null)return m
s=n.c
if(s!=null){r=A.aQ(A.x(v.G.document).getElementById(s))
if(r!=null&&A.e4(a.contains(r))&&n.dF(r))return r}q=A.x(a.querySelectorAll(n.a))
for(s=t.m,p=0;p<A.b_(q.length);++p){o=A.aQ(q.item(p))
if(s.b(o)&&n.dF(o))return o}return null},
fB(a){var s,r,q,p,o,n,m=null,l=this.f
if(l==null||l.length===0)return m
for(s=l.length,r=a,q=0;q<l.length;l.length===s||(0,A.aE)(l),++q,r=n){p=l[q]
o=A.x(r.childNodes)
if(p<0||p>=A.b_(o.length))return m
n=A.aQ(o.item(p))
if(n==null)return m}s=this.dG(r,!0)
if(s)return r
return m},
dG(a,b){var s,r,q,p=this
if(A.U(a.localName)!==p.a)return!1
s=p.e
if(s!=null&&A.U(a.type)!==s)return!1
s=p.d
r=s==null
if(!r&&A.U(a.name)===s)return!0
s=p.c
q=s==null
if(!q&&A.U(a.id)===s)return!0
return b&&r&&q},
dF(a){return this.dG(a,!1)},
hd(a){var s,r=this.r,q=this.w
if(r==null||q==null)return
try{a.setSelectionRange(r,q)}catch(s){}}}
A.kT.prototype={
cX(a,b,c,d){var s=null
t.v.a(c)
return this.a.b5(0,"GET",this.dM(b),s,c,s,s,s,s,s,d)},
eD(a,b,c){return this.cX(0,b,null,c)},
aj(a,b,c,d){var s=null
t.v.a(c)
return this.a.b5(0,"POST",this.dM(a),b,c,s,s,s,s,s,d)},
ie(a,b,c){return this.aj(a,b,null,c)},
ig(a,b,c){return this.aj(a,null,b,c)},
dM(a){var s=B.b.D(a),r=A.q2(s)
if(r!=null&&r.gem()&&r.gaD(r).length!==0)return s
return this.fV("",s)},
fV(a,b){var s,r=B.b.D(a),q=B.b.D(b)
if(r.length===0){if(q.length===0)s="/"
else s=B.b.K(q,"/")?q:"/"+q
return s}if(q.length===0||q==="/")return B.b.K(r,"/")?r:"/"+r
s=B.b.K(r,"/")?r:"/"+r
return B.b.cR(s,A.bV("/+$",!0,!1),"")+"/"+B.b.cR(q,A.bV("^/+",!0,!1),"")}}
A.X.prototype={
q(a){var s
t.M.a(a).$0()
s=this.a
if(s!=null)s.$0()},
a4(){},
bC(){},
cW(){}}
A.iq.prototype={}
A.pB.prototype={
$1(a){return B.b.D(A.U(a)).length!==0},
$S:8}
A.py.prototype={
$1(a){A.bE(a)
return a!=null&&B.b.D(a).length!==0},
$S:32}
A.pz.prototype={
$1(a){A.bE(a)
a.toString
return B.b.D(a)},
$S:33}
A.pI.prototype={
$1(a){t.d.a(a)
return a.b!=null&&a.a!=="_cssText"},
$S:9}
A.pJ.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.V(a.b)},
$S:10}
A.oP.prototype={
$1(a){t.dv.a(a)
return a.a+":"+A.pH(a.b.a7())},
$S:34}
A.oQ.prototype={
$1(a){t.ce.a(a)
return a.a.c+":"+A.pH(a.b.a7())},
$S:35}
A.oR.prototype={
$1(a){t.ah.a(a)
return a.a.b+":"+A.pH(a.b.a7())},
$S:36}
A.oS.prototype={
$1(a){t.d.a(a)
return a.b!=null&&a.a!=="_cssText"},
$S:9}
A.oT.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.V(a.b)+" !important"},
$S:10}
A.mx.prototype={}
A.h4.prototype={
ij(a){A.x(A.x(v.G.window).location).reload()}}
A.J.prototype={}
A.cy.prototype={}
A.ev.prototype={}
A.a7.prototype={}
A.dy.prototype={}
A.nJ.prototype={
W(){return"ToastPlacement."+this.b}}
A.nK.prototype={
ad(a,b){this.dT(a,"#a7f3d0","#052e22","rgba(52, 211, 153, 0.38)",B.fT,b,B.cA)},
P(a,b,c){this.dT(b,"#fca5a5","#450a0a","rgba(248, 113, 113, 0.42)",B.fW,c,B.cA)},
dT(a,b,c,d,e,f,g){var s,r,q=this.fe(g),p=v.G,o=A.x(A.x(p.document).createElement("div")),n=A.x(o.style)
n.display="grid"
n.gap="4px"
n.minWidth="280px"
n.maxWidth="380px"
n.padding="12px 16px"
n.borderRadius="12px"
n.border="1px solid "+d
n.background=c
n.color="#f8fafc"
n.boxShadow="0 20px 50px rgba(0, 0, 0, 0.32)"
n.pointerEvents="auto"
n.transform="translateY(-8px) scale(0.96)"
n.opacity="0"
n.transition="opacity 180ms cubic-bezier(0.16, 1, 0.3, 1), transform 180ms cubic-bezier(0.16, 1, 0.3, 1)"
s=A.x(A.x(p.document).createElement("strong"))
s.textContent=a
n=A.x(s.style)
n.fontSize="13px"
n.fontWeight="800"
n.color=b
A.x(o.appendChild(s))
if(f!=null&&B.b.D(f).length!==0){r=A.x(A.x(p.document).createElement("p"))
r.textContent=f
p=A.x(r.style)
p.margin="0"
p.fontSize="12px"
p.lineHeight="1.5"
p.color="#cbd5e1"
A.x(o.appendChild(r))}A.x(q.appendChild(o))
A.c5(B.aV,new A.nM(o))
A.c5(e,new A.nN(o,q))},
fe(a){var s,r,q="flint-toast-"+a.b,p=v.G,o=A.aQ(A.x(p.document).getElementById(q))
if(t.m.b(o))return o
s=A.x(A.x(p.document).createElement("div"))
s.id=q
r=A.x(s.style)
r.position="fixed"
r.zIndex="2147483647"
r.display="grid"
r.gap="10px"
r.pointerEvents="none"
switch(a.a){case 0:r=A.x(s.style)
r.top="20px"
r.right="20px"
break
case 1:r=A.x(s.style)
r.top="20px"
r.left="50%"
r.transform="translateX(-50%)"
break
case 2:r=A.x(s.style)
r.right="20px"
r.bottom="20px"
break
case 3:r=A.x(s.style)
r.left="50%"
r.bottom="20px"
r.transform="translateX(-50%)"
break}p=A.aQ(A.x(p.document).body)
if(p!=null)A.x(p.appendChild(s))
return s}}
A.nM.prototype={
$0(){var s=A.x(this.a.style)
s.opacity="1"
s.transform="translateY(0) scale(1)"},
$S:0}
A.nN.prototype={
$0(){var s=this.a,r=A.x(s.style)
r.opacity="0"
r.transform="translateY(-8px) scale(0.96)"
A.c5(B.fR,new A.nL(s,this.b))},
$S:0}
A.nL.prototype={
$0(){this.a.remove()
var s=this.b
if(A.b_(s.childElementCount)===0)s.remove()},
$S:0}
A.ew.prototype={}
A.hu.prototype={}
A.pn.prototype={
$2(a,b){var s=0,r=A.bd(t.H),q,p=this,o,n,m,l,k,j
var $async$$2=A.be(function(c,d){if(c===1)return A.ba(d,r)
for(;;)switch(s){case 0:j=new A.hu()
for(o=p.c,n=0;!1;++n)o[n].$1(j)
o=a.a
m=p.d.a.j(0,o)
if(m==null)l=null
else l=m
s=l==null?3:4
break
case 3:m=A.rx(null,t.bp)
s=5
return A.b0(m,$async$$2)
case 5:l=d
case 4:if(b!==p.a.a){s=1
break}if(l==null)throw A.l(A.ak('Flint page "'+o+'" was not registered.'))
k=l.$1(a.b)
if(k==null)k=p.r.$1(o)
o=p.w
o.b=o.dK(k)
o.hh()
case 1:return A.bb(q,r)}})
return A.bc($async$$2,r)},
$S:37}
A.pm.prototype={
$0(){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.be(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=++j.a
p=4
s=7
return A.b0(A.wB(n.b),$async$$0)
case 7:m=b
if(!J.a9(i,j.a)){s=1
break}n.c.setAttribute("data-flint-page",B.E.aa(m.a,null))
if(m.b!=null&&m.b.length!==0){j=A.x(v.G.document)
l=m.b
l.toString
j.title=l}s=8
return A.b0(n.d.$2(A.qY(m.a),i),$async$$0)
case 8:p=2
s=6
break
case 4:p=3
h=o.pop()
j=v.G
A.x(A.x(j.window).location).assign(A.U(A.x(A.x(j.window).location).pathname)+A.U(A.x(A.x(j.window).location).search))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$$0,r)},
$S:20}
A.pk.prototype={
$1(a){A.x(a)
this.a.$0()},
$S:13}
A.pl.prototype={
$1(a){A.x(a)
this.a.$0()},
$S:13}
A.oF.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.oJ.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.a
if(A.b_(k.status)<200||A.b_(k.status)>=300){l.b.ah(new A.d_("HTTP "+A.b_(k.status)))
return}try{r=A.U(k.responseText)
q=A.x(A.x(v.G.document).createElement("div"))
q.innerHTML=r
p=A.aQ(q.querySelector(l.c))
if(p==null)p=A.aQ(q.querySelector("[data-flint-page]"))
o=p==null?null:A.bE(p.getAttribute("data-flint-page"))
if(o==null||B.b.D(o).length===0)A.ca(A.ak("Missing data-flint-page payload in fetched page."))
n=B.E.aU(0,o,null)
if(!t.P.b(n))A.ca(A.ak("Invalid fetched Flint page payload."))
l.b.aS(0,new A.fd(n,A.xj(r)))}catch(m){s=A.aL(m)
l.b.ah(s)}},
$S:4}
A.oK.prototype={
$1(a){this.a.ah(new A.d_("Navigation request failed."))},
$S:4}
A.fd.prototype={}
A.dS.prototype={
ex(a,b){var s=this,r=s.$ti,q=r.h("1(1)").a(b).$1(s.a)
s.a=r.c.a(q)
s.bL()
return q},
ia(a){this.$ti.h("~(1)").a(a)
this.b.t(0,a)
return new A.nl(this,a)},
bL(){var s,r,q
for(s=A.eM(this.b,!0,this.$ti.h("~(1)")),r=s.length,q=0;q<r;++q)s[q].$1(this.a)}}
A.nl.prototype={
$0(){return this.a.b.T(0,this.b)},
$S:0}
A.cB.prototype={
E(){var s=this.c.a
return this.d.$1(s)},
a4(){this.d8()},
bC(){this.d8()},
cW(){var s=this.f
if(s!=null)s.$0()
this.e=this.f=null},
d8(){var s,r=this
if(r.e===r.c)return
s=r.f
if(s!=null)s.$0()
s=r.c
r.e=s
r.f=s.ia(new A.nk(r))}}
A.nk.prototype={
$1(a){var s=this.a
s.$ti.c.a(a)
s.q(new A.nj())},
$S(){return this.a.$ti.h("~(1)")}}
A.nj.prototype={
$0(){},
$S:0}
A.ej.prototype={
ih(a){var s=A.bE(A.x(A.x(v.G.window).localStorage).getItem(a))
if(s==null||s.length===0)return null
return B.E.aU(0,s,null)},
cP(a){var s=this.ih(a)
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kO(),t.N,t.z)
return B.Y}}
A.kO.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.kV.prototype={
W(){return"CookieSameSite."+this.b}}
A.kW.prototype={
fE(a){var s
switch(a.a){case 0:s="Lax"
break
case 1:s="Strict"
break
case 2:s="None"
break
default:s=null}return s}}
A.hT.prototype={}
A.iT.prototype={}
A.d.prototype={
l(a){return this.a}}
A.q.prototype={
a7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=this,e3=null,e4=e2.a
e4=e4==null?e3:e4.n()
s=e2.b
s=s==null?e3:s.n()
r=A.E(e2.c,!1)
q=A.E(e2.d,!1)
p=A.E(e2.e,!1)
o=A.E(e2.f,!1)
n=A.E(e2.r,!1)
m=A.E(e2.w,!1)
l=e2.x
l=l==null?e3:l.c
k=A.E(e2.y,!1)
j=e2.z
j=j==null?e3:j.c
i=A.E(e2.Q,!0)
h=e2.as
h=h==null?e3:h.c
g=A.E(e2.at,!0)
f=e2.ax
f=f==null?e3:f.c
e=A.E(e2.ay,!0)
d=A.E(e2.ch,!0)
c=A.E(e2.CW,!0)
b=A.E(e2.cx,!1)
a=A.E(e2.cy,!0)
a0=e2.db
a0=a0==null?e3:a0.c
a1=A.E(e2.dx,!1)
a2=A.E(e2.dy,!1)
a3=A.E(e2.fr,!1)
a4=A.E(e2.fx,!1)
a5=A.E(e2.go,!0)
a6=A.E(e2.id,!0)
a7=A.E(e2.k1,!0)
a8=A.E(e2.k2,!0)
a9=A.E(e2.k3,!0)
b0=e2.k4
b1=A.E(b0,!0)
b2=A.xb(b0)
b0=A.x0(b0)
b3=A.E(e2.ok,!0)
b4=A.E(e2.p1,!0)
b5=A.E(e2.p2,!0)
b6=A.E(e2.p3,!0)
b7=A.E(e2.p4,!0)
b8=A.E(e2.R8,!0)
b9=A.E(e2.RG,!1)
c0=A.E(e2.rx,!0)
c1=A.E(e2.ry,!0)
c2=A.E(e2.to,!1)
c3=A.E(e2.x1,!1)
c4=e2.x2==null?e3:"center"
c5=A.E(e2.xr,!0)
c6=A.E(e2.y1,!0)
c7=A.E(e2.y2,!0)
c8=A.E(e2.cD,!0)
c9=A.E(e2.ec,!0)
d0=A.E(e2.ed,!0)
d1=A.E(e2.aW,!0)
d2=A.E(e2.cE,!0)
d3=A.E(e2.aX,!1)
d4=A.E(e2.cH,!0)
d5=A.E(e2.cI,!0)
d6=A.E(e2.aY,!1)
d7=e2.aZ
d7=d7==null?e3:d7.n()
d8=e2.cF
d8=d8==null?e3:d8.n()
d9=e2.cG
d9=d9==null?e3:d9.n()
e0=A.E(e2.ee,!0)
e1=e2.b_
e1=e1 instanceof A.ap?e1.n():A.E(e1,!1)
return A.xm(A.ai(["padding",e4,"margin",s,"width",r,"height",q,"min-width",p,"max-width",o,"min-height",n,"max-height",m,"display",l,"gap",k,"align-items",j,"justify-items",i,"justify-content",h,"flex",g,"flex-direction",f,"flex-wrap",e,"flex-grow",d,"flex-shrink",c,"flex-basis",b,"grid-template-columns",a,"position",a0,"top",a1,"right",a2,"bottom",a3,"left",a4,"z-index",e2.fy,"overflow",a5,"overflow-x",a6,"overflow-y",a7,"box-sizing",a8,"scroll-behavior",a9,"scrollbar-display",b1,"scrollbar-width",b2,"-ms-overflow-style",b0,"aspect-ratio",b3,"object-fit",b4,"transform",b5,"backdrop-filter",b6,"mask-image",b7,"font-family",b8,"font-size",b9,"font-weight",c0,"line-height",c1,"letter-spacing",c2,"color",c3,"text-align",c4,"text-transform",c5,"text-decoration",c6,"text-overflow",c7,"white-space",c8,"word-break",c9,"overflow-wrap",d0,"cursor",d1,"resize",d2,"background",d3,"background-clip",d4,"-webkit-background-clip",d5,"border-radius",d6,"border",d7,"border-top",d8,"border-right",null,"border-bottom",d9,"border-left",null,"border-collapse",e0,"box-shadow",e1,"opacity",e2.b0,"transition",A.E(e2.b1,!0),"animation",A.E(e2.ef,!0),"will-change",A.E(e2.eg,!0)],t.N,t.X))},
ge9(){var s=this,r=A.Y(t.gY,t.x),q=s.aw
if(q!=null)r.i(0,B.cX,q)
q=s.az
if(q!=null)r.i(0,B.cY,q)
q=s.aA
if(q!=null)r.i(0,B.cV,q)
q=s.aB
if(q!=null)r.i(0,B.cW,q)
return r},
gcY(){var s,r=this,q=A.Y(t.N,t.x),p=r.bD
if(p!=null)q.i(0,":hover",p)
p=r.bE
if(p!=null)q.i(0,":focus-visible",p)
p=r.bF
if(p!=null)q.i(0,":active",p)
p=r.bG
s=p!=null
if(s)q.i(0,":disabled",p)
if(s)q.i(0,'[aria-disabled="true"]',p)
p=r.bH
if(p!=null)q.i(0,'[aria-invalid="true"]',p)
return q},
gev(){var s=A.Y(t.c,t.x),r=this.bI
if(r!=null)s.i(0,B.af,r)
r=this.bJ
if(r!=null)s.i(0,B.S,r)
return s},
Y(e4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3=this
if(e4==null)return e3
s=e4.a
if(s==null)s=e3.a
r=e4.b
if(r==null)r=e3.b
q=e4.c
if(q==null)q=e3.c
p=e4.d
if(p==null)p=e3.d
o=e4.e
if(o==null)o=e3.e
n=e4.f
if(n==null)n=e3.f
m=e4.r
if(m==null)m=e3.r
l=e4.w
if(l==null)l=e3.w
k=e4.x
if(k==null)k=e3.x
j=e4.y
if(j==null)j=e3.y
i=e4.z
if(i==null)i=e3.z
h=e4.as
if(h==null)h=e3.as
g=e4.at
if(g==null)g=e3.at
f=e4.ax
if(f==null)f=e3.ax
e=e4.ay
if(e==null)e=e3.ay
d=e4.cy
if(d==null)d=e3.cy
c=e4.db
if(c==null)c=e3.db
b=e4.dx
if(b==null)b=e3.dx
a=e4.dy
if(a==null)a=e3.dy
a0=e4.fr
if(a0==null)a0=e3.fr
a1=e4.fx
if(a1==null)a1=e3.fx
a2=e4.fy
if(a2==null)a2=e3.fy
a3=e4.go
if(a3==null)a3=e3.go
a4=e4.k2
if(a4==null)a4=e3.k2
a5=e4.k3
if(a5==null)a5=e3.k3
a6=e4.p1
if(a6==null)a6=e3.p1
a7=e4.p2
if(a7==null)a7=e3.p2
a8=e4.p3
if(a8==null)a8=e3.p3
a9=e4.p4
if(a9==null)a9=e3.p4
b0=e4.R8
if(b0==null)b0=e3.R8
b1=e4.RG
if(b1==null)b1=e3.RG
b2=e4.rx
if(b2==null)b2=e3.rx
b3=e4.ry
if(b3==null)b3=e3.ry
b4=e4.to
if(b4==null)b4=e3.to
b5=e4.x1
if(b5==null)b5=e3.x1
b6=e4.x2
if(b6==null)b6=e3.x2
b7=e4.y1
if(b7==null)b7=e3.y1
b8=e4.y2
if(b8==null)b8=e3.y2
b9=e4.cD
if(b9==null)b9=e3.cD
c0=e4.aW
if(c0==null)c0=e3.aW
c1=e4.cE
if(c1==null)c1=e3.cE
c2=e4.aX
if(c2==null)c2=e3.aX
c3=e4.aY
if(c3==null)c3=e3.aY
c4=e4.aZ
if(c4==null)c4=e3.aZ
c5=e4.cF
if(c5==null)c5=e3.cF
c6=e4.cG
if(c6==null)c6=e3.cG
c7=e4.b_
if(c7==null)c7=e3.b_
c8=e4.b0
if(c8==null)c8=e3.b0
c9=e4.cH
if(c9==null)c9=e3.cH
d0=e4.cI
if(d0==null)d0=e3.cI
d1=e4.b1
if(d1==null)d1=e3.b1
d2=e4.bD
if(d2==null)d2=e3.bD
d3=e4.bE
if(d3==null)d3=e3.bE
d4=e4.bF
if(d4==null)d4=e3.bF
d5=e4.bG
if(d5==null)d5=e3.bG
d6=e4.bH
if(d6==null)d6=e3.bH
d7=e4.bI
if(d7==null)d7=e3.bI
d8=e4.bJ
if(d8==null)d8=e3.bJ
d9=e4.aw
if(d9==null)d9=e3.aw
e0=e4.az
if(e0==null)e0=e3.az
e1=e4.aA
if(e1==null)e1=e3.aA
e2=e4.aB
if(e2==null)e2=e3.aB
return A.a(d4,i,e3.ef,e3.ok,a8,c2,c9,c4,c6,e3.ee,e3.hU,e3.hT,c5,a0,a4,e3.hX,b5,c0,d8,d5,k,e3.hZ,g,e3.cx,f,e3.ch,e3.CW,e,e3.hW,d3,b0,b1,b2,j,e3.hV,d,p,d2,d6,h,e3.Q,a1,b4,e1,d7,b3,r,a9,l,n,e0,m,o,a6,c8,a3,e3.ed,e3.id,e3.k1,s,c,c3,c1,a,a5,e3.k4,e3.hY,c7,d9,b6,b7,b8,e3.xr,b,a7,d1,d0,b9,q,e3.eg,e3.ec,e2,a2)}}
A.ez.prototype={
l(a){return this.a}}
A.lF.prototype={
l(a){return"bottom"}}
A.kv.prototype={
l(a){return this.a}}
A.bv.prototype={
l(a){return this.a}}
A.hs.prototype={
n(){return B.f.J(A.e([A.E(1,!0),A.E(1,!0),A.E("auto",!1)],t.s)," ")},
l(a){return this.n()}}
A.L.prototype={
n(){var s=A.E(this.a,!1),r=this.b
if(r==null)return s
return s+" "+A.wG(r)}}
A.c0.prototype={
W(){return"Breakpoint."+this.b}}
A.iE.prototype={
gcC(){var s,r,q,p,o,n=A.Y(t.N,t.X)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
q=r.a
q=B.b.D(A.cJ(q,".","-"))
p=A.bV("[^a-zA-Z0-9_-]+",!0,!1)
q=A.cJ(q,p,"-")
p=A.bV("^-+|-+$",!0,!1)
o=A.cJ(q,p,"")
q=o.length===0?"style":o
n.i(0,"--"+q,r.b)}return n}}
A.bP.prototype={
W(){return"FlintThemeMode."+this.b}}
A.b.prototype={
n(){var s="var(--"+A.x6(A.cJ(this.a,".","-")),r=this.b
if(r==null)return s+")"
return s+", "+A.E(r,!1)+")"},
l(a){return this.n()}}
A.hv.prototype={
gcv(){var s,r,q=this,p=A.Y(t.N,t.X)
for(s=q.b,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"color."+r.a,r.b)}for(s=q.c,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"space."+r.a,r.b)}for(s=q.d,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"radius."+r.a,r.b)}for(s=q.e,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"shadow."+r.a,r.b)}for(s=B.ck.ga_(B.ck),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"font."+r.a,r.b)}p.S(0,B.a)
return new A.iE(p)}}
A.lg.prototype={}
A.aN.prototype={
geE(){var s=this.a
if(typeof s=="number")return A.V(s)+"%"
return J.r(s)}}
A.ci.prototype={
gbB(a){var s=this.b,r=A.au(s),q=r.h("ad<1,f>"),p=new A.ad(s,r.h("f(1)").a(new A.nu()),q).cZ(0,q.h("ab(as.E)").a(new A.nv())).J(0,"\n")
if(p.length===0)return""
return"@keyframes "+this.a+" {\n"+p+"\n}"}}
A.nu.prototype={
$1(a){var s
t.fo.a(a)
s=A.qq(a.b.a7())
if(s.length===0)return""
return"  "+a.geE()+" { "+s+"; }"},
$S:28}
A.nv.prototype={
$1(a){return A.U(a).length!==0},
$S:8}
A.n8.prototype={
gbB(a){var s,r,q,p=this,o=p.b,n=p.c
if(n==null)o=null
else{s=n.c===B.S?n.b:n.a
o=s}s=A.e([],t.s)
if(o!=null)s.push(p.c5(":root",o.gcv().gcC()))
r=n!=null
if(r)s.push(p.c5(':root[data-theme="light"], [data-theme="light"]',n.a.gcv().gcC()))
if(r)s.push(p.c5(':root[data-theme="dark"], [data-theme="dark"]',n.b.gcv().gcC()))
n=p.r
if(n!=null)s.push(p.aI("*",n))
n=p.e
if(n!=null)s.push(p.aI("html",n))
n=p.f
if(n!=null)s.push(p.aI("body",n))
n=p.w
if(n!=null)s.push(p.aI("a",n))
for(n=B.cn.ga_(B.cn),n=n.gv(n);n.m();){r=n.gp(n)
s.push(p.aI(r.a,r.b))}for(n=p.y,r=n.length,q=0;q<n.length;n.length===r||(0,A.aE)(n),++q)s.push(n[q].gbB(0))
return new A.aA(s,t.bB.a(new A.n9()),t.cc).J(0,"\n")},
aI(a,b){var s,r=b.a7(),q=A.qq(t.L.a(r)),p=A.xa(a,r.j(0,"scrollbar-display"))
if(B.b.D(q).length===0)return p
s=A.e([a+" { "+q+"; }"],t.s)
if(p.length!==0)s.push(p)
return B.f.J(s,"\n")},
c5(a,b){var s=A.qq(t.L.a(b))
if(B.b.D(s).length===0)return""
return a+" { "+s+"; }"}}
A.n9.prototype={
$1(a){return B.b.D(A.U(a)).length!==0},
$S:8}
A.pE.prototype={
$1(a){var s
t.d.a(a)
if(a.b!=null){s=a.a
s=s!=="_cssText"&&s!=="scrollbar-display"}else s=!1
return s},
$S:9}
A.pF.prototype={
$1(a){var s
t.d.a(a)
s=a.a
return s+": "+A.E(a.b,B.lp.H(0,s))},
$S:10}
A.h.prototype={
n(){var s,r,q,p,o=this,n=o.a
n=A.E(n==null?0:n,!1)
s=o.b
s=A.E(s==null?0:s,!1)
r=o.c
r=A.E(r==null?0:r,!1)
q=o.d
p=A.e([n,s,r,A.E(q==null?0:q,!1)],t.s)
if(B.f.hS(p,new A.kZ(p)))return B.f.gF(p)
n=p[0]
s=p[2]
if(n===s&&p[1]===p[3])return n+" "+p[1]
r=p[1]
if(r===p[3])return n+" "+r+" "+s
return B.f.J(p," ")}}
A.kZ.prototype={
$1(a){return A.U(a)===B.f.gF(this.a)},
$S:8}
A.F.prototype={
l(a){return this.a}}
A.aG.prototype={
l(a){return this.a}}
A.bw.prototype={
l(a){return this.a}}
A.m.prototype={
n(){var s=this.c
if(s==="none")return"none"
return A.E(this.a,!1)+" "+s+" "+A.E(this.b,!1)}}
A.ap.prototype={
n(){var s,r=this
if(r===B.lr)return"none"
s=A.e([],t.s)
s.push(A.E(0,!1))
s.push(A.E(r.b,!1))
s.push(A.E(r.c,!1))
s.push(A.E(r.d,!1))
s.push(A.E(r.e,!1))
return B.f.J(s," ")}}
A.b9.prototype={
l(a){return this.a}}
A.nw.prototype={
$1(a){return t.dl.a(a).a},
$S:40}
A.d0.prototype={
l(a){return this.a}}
A.hw.prototype={
l(a){return this.a}}
A.kN.prototype={
l(a){return"border-box"}}
A.nc.prototype={
l(a){return"smooth"}}
A.hf.prototype={
l(a){return this.a}}
A.ia.prototype={
l(a){return this.a}}
A.nH.prototype={
l(a){return"none"}}
A.kw.prototype={
l(a){return"text"}}
A.l_.prototype={
l(a){return"wrap"}}
A.n7.prototype={
l(a){return"vertical"}}
A.iK.prototype={
l(a){return this.a}}
A.aZ.prototype={
l(a){return this.a}}
A.nx.prototype={
$1(a){return t.bc.a(a).a},
$S:41}
A.k9.prototype={
l(a){return"normal"}}
A.ka.prototype={
l(a){return"none"}}
A.kc.prototype={
l(a){return"running"}}
A.kb.prototype={
l(a){return A.E("infinite",!0)}}
A.ns.prototype={
l(a){return this.a}}
A.nt.prototype={
$1(a){return J.r(A.aa(a))},
$S:25}
A.nV.prototype={
l(a){return"transform"}}
A.cw.prototype={
W(){return"Display."+this.b}}
A.hr.prototype={
W(){return"FlexDirection."+this.b}}
A.cM.prototype={
W(){return"AlignItems."+this.b}}
A.eI.prototype={
W(){return"JustifyContent."+this.b}}
A.dM.prototype={
W(){return"Position."+this.b}}
A.nF.prototype={
W(){return"TextAlign."+this.b}}
A.dm.prototype={}
A.eC.prototype={
a4(){this.e6()},
bC(){this.e6()},
e6(){var s=A.x(v.G.document),r=this.d,q=A.aQ(s.getElementById(r))
if(q==null)return
q.innerHTML=this.c},
E(){var s=this,r=A.b8(s.w,t.N,t.X),q=s.d
r.i(0,"id",q)
return new A.k("div",A.i(r,s.f,s.r,B.a,B.a),A.j(null,B.h))}}
A.ip.prototype={}
A.ck.prototype={
scU(a,b){if(this.a===b)return
this.a=b
this.aK()},
aK(){var s=A.aw(this.b,t.M),r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.aE)(s),++q)s[q].$0()}}
A.lp.prototype={
a0(a){var s=this.b.j(0,a)
s=s==null?null:J.r(s)
return s==null?"":s},
Z(a,b){return this.c.cM(0,b,new A.lr(this,b))},
eF(a,b){var s,r,q
this.b.i(0,a,b)
s=this.c.j(0,a)
if(s!=null){r=s.a
q=b==null?null:J.r(b)
r=r!==(q==null?"":q)}else r=!1
if(r){r=b==null?null:J.r(b)
s.scU(0,r==null?"":r)
return}this.aK()},
im(a,b){var s,r,q,p=this,o=t.a
o.a(b)
for(s=B.f.gv(b),r=p.a;s.m();){q=s.gp(0)
p.eF(q,r.j(0,q))}s=A.e(b.slice(0),A.au(b))
o=o.a(s)
if(o.length===0)p.e=B.A
else p.e=p.e.iy(o)
p.aK()},
aK(){var s=A.aw(this.d,t.M),r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.aE)(s),++q)s[q].$0()}}
A.lr.prototype={
$0(){var s=this.a,r=this.b,q=s.a0(r),p=A.e([],t.r),o=new A.ck(q,p)
B.f.t(p,t.M.a(new A.lq(s,r,o)))
return o},
$S:43}
A.lq.prototype={
$0(){var s=this.a
s.b.i(0,this.b,this.c.a)
s.aK()},
$S:0}
A.hy.prototype={}
A.iA.prototype={}
A.nG.prototype={
$1(a){var s,r
A.aa(a)
s=t.m
r=s.b(a)?A.aQ(a.target):null
if(s.b(r))this.a.scU(0,A.U(r.value))},
$S:1}
A.iB.prototype={}
A.nI.prototype={
$1(a){var s,r
A.aa(a)
s=t.m
r=s.b(a)?A.aQ(a.target):null
if(s.b(r))this.a.scU(0,A.U(r.value))},
$S:1}
A.bQ.prototype={
i_(a){var s
if(a.length===0)return B.aF
s=this.a.j(0,a)
if(s==null)s=B.iY
return A.ra(s,t.N)},
iy(a){var s=t.a
s.a(a)
if(a.length===0)return B.A
s=A.b8(this.a,t.N,s)
s.ik(s,new A.ls(a))
return new A.bQ(s)},
gb2(){var s,r,q,p,o=t.N
o=A.Y(o,o)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
q=r.b
p=J.al(q)
if(p.gM(q))o.i(0,r.a,p.gF(q))}return o},
it(){var s,r,q=A.Y(t.N,t.X)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
q.i(0,r.a,r.b)}return q}}
A.ls.prototype={
$2(a,b){A.U(a)
t.a.a(b)
return B.f.H(this.a,a)},
$S:45}
A.lX.prototype={}
A.bI.prototype={}
A.hG.prototype={}
A.lY.prototype={
$1(a){t.fd.a(a)
return new A.a7(a.a,a.b,B.ag)},
$S:46}
A.hB.prototype={}
A.iV.prototype={}
A.h8.prototype={}
A.k.prototype={}
A.hH.prototype={}
A.hR.prototype={}
A.ii.prototype={}
A.dT.prototype={
W(){return"Tone."+this.b}}
A.el.prototype={
W(){return"ComponentSize."+this.b}}
A.dn.prototype={
W(){return"ButtonVariant."+this.b}}
A.lZ.prototype={
W(){return"InputVariant."+this.b}}
A.lf.prototype={
ht(){var s=this.c
if(this.b==null||s==null||s.length===0)return null
return A.xi(A.bE(A.x(A.x(v.G.window).localStorage).getItem(s)))},
hC(){var s,r
try{s=A.e4(A.x(A.x(v.G.window).matchMedia("(prefers-color-scheme: dark)")).matches)?B.S:B.af
return s}catch(r){return null}},
d7(a){var s,r=A.aQ(A.x(v.G.document).documentElement)
if(r!=null)r.setAttribute("data-theme",a.c)
s=this.d
if(s!=null)s.setAttribute("data-theme",a.c)}}
A.oY.prototype={
$1(a){return new A.dB(t.P.a(a))},
$S:47}
A.oZ.prototype={
$1(a){return new A.dz(t.P.a(a))},
$S:48}
A.p_.prototype={
$1(a){return new A.dY(t.P.a(a))},
$S:49}
A.pa.prototype={
$1(a){return new A.dp(t.P.a(a))},
$S:50}
A.pb.prototype={
$1(a){return new A.dq(t.P.a(a))},
$S:51}
A.pc.prototype={
$1(a){return new A.dh(t.P.a(a))},
$S:52}
A.pd.prototype={
$1(a){return new A.dA(t.P.a(a))},
$S:53}
A.pe.prototype={
$1(a){return new A.dU(t.P.a(a))},
$S:82}
A.pf.prototype={
$1(a){return new A.dx(t.P.a(a))},
$S:55}
A.pg.prototype={
$1(a){var s,r
t.P.a(a)
s=new A.cV(a)
r=J.M(a,"contentHtml")
r=r==null?null:J.r(r)
s.d=r
s.e=r==null||r.length===0
return s},
$S:56}
A.ph.prototype={
$1(a){return new A.di(t.P.a(a))},
$S:57}
A.p0.prototype={
$1(a){return new A.dN(t.P.a(a))},
$S:58}
A.p1.prototype={
$1(a){return new A.cO(t.P.a(a),A.hz(A.ai(["title","","tag","","body",""],t.N,t.X)),B.A)},
$S:81}
A.p2.prototype={
$1(a){return new A.dk(t.P.a(a))},
$S:60}
A.p3.prototype={
$1(a){return new A.dj(t.P.a(a),A.hz(A.ai(["body",""],t.N,t.X)),B.A)},
$S:61}
A.p4.prototype={
$1(a){return new A.cP(t.P.a(a),A.hz(A.ai(["title","","tag","","body",""],t.N,t.X)),B.A)},
$S:62}
A.p5.prototype={
$1(a){var s=t.N
return new A.cZ(t.P.a(a),A.hz(A.ai(["body",""],s,t.X)),B.A,new A.dS(null,A.dH(t.aT),t.aN),A.dH(s))},
$S:63}
A.p6.prototype={
$1(a){return new A.dR(t.P.a(a))},
$S:64}
A.p7.prototype={
$1(a){return new A.dQ(t.P.a(a))},
$S:65}
A.p8.prototype={
$1(a){return new A.d1(t.P.a(a),A.hz(A.ai(["title","","description","","what_it_does","","built_with","","image_1","","image_2","","image_3","","link_1_label","","link_1_url","","link_2_label","","link_2_url",""],t.N,t.X)),B.A)},
$S:66}
A.p9.prototype={
$1(a){return new A.du(t.P.a(a))},
$S:67}
A.eg.prototype={
E(){var s,r,q,p,o,n,m,l=null,k="color.muted",j=[]
for(s=this.c,r=l,q=0;q<20;++q){p=B.cf[q]
o=p.a
n=p.c
if(n!==r){j.push(new A.a7("p",A.i(B.a,l,new A.q(B.bW,B.h1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,10,700,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.j(n,B.h)))
r=n}m=o===s?new A.q(new A.h(8,12,8,12),l,l,l,l,l,l,l,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,new A.b("color.primary",l),l,l,l,l,l,l,l,l,l,new A.d("rgba(5, 150, 105, 0.08)"),8,new A.m(1,new A.d("rgba(5, 150, 105, 0.2)"),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.bH,l,l,l,l):new A.q(B.ac,l,l,l,l,l,l,l,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
j.push(A.W(p.b,B.h,m,"/fullstack/api/"+o,l,B.j,l))}s=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,2,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,0,l,l,l,l,l,l,B.a9,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
return new A.k("div",A.i(B.a,l,s.Y(this.d?A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l):A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.G,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,240,l,l,220,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.n,l,l,l,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a,B.a),A.j(l,j))}}
A.oV.prototype={
$1(a){return t.bl.a(a).a===this.a},
$S:68}
A.oW.prototype={
$1(a){return A.U(a).length!==0},
$S:8}
A.oX.prototype={
$1(a){A.U(a)
if(0>=a.length)return A.t(a,0)
return a[0].toUpperCase()+B.b.a5(a,1)},
$S:69}
A.hD.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,32,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"1 1 0",q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,0,q,q,B.u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.F("100%"),q,q,q,q),o=[]
if(this.c){s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.h(48,q,48,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.G("Loading...",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.h(0,0,0,0),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
o.push(new A.k("div",A.i(B.a,q,s,B.a,B.a),A.j(q,[r])))}else{s=this.d
if(s==null)s=""
r=t.N
o.push(A.ce("guide-md markdown-body",s,"guide-content",A.ai(["style",A.ai(["min-width","0","max-width","100%","overflow-wrap","break-word"],r,r)],r,t.X)))}o.push(this.fi())
return new A.k("div",A.i(B.a,q,p,B.a,B.a),A.j(q,o))},
fi(){var s,r,q,p=this,o=null,n="1 1 240px",m="color.line",l="color.panel",k="color.muted",j="color.text",i=p.e,h=i!=null
if(!h||i.length===0){s=p.r
s=s==null||s.length===0}else s=!1
if(s)return A.cr("span",[],A.Y(t.N,t.X))
s=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,o,o,o,o,o,B.i,o,o,o,o,o,16,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r=[]
if(h&&i.length!==0&&p.f!=null){h=p.f
h.toString
q=A.a(o,o,o,o,o,new A.b(l,o),o,new A.m(1,new A.b(m,o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,n,o,o,o,o,o,o,o,o,o,o,4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(16,16,16,16),o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r.push(A.W(o,[A.G("Previous Topic",A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(k,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,11,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),A.G(i,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(j,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,600,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],q,h,o,B.j,o))}else r.push(A.cr("span",[],A.Y(t.N,t.X)))
i=p.r
if(i!=null&&i.length!==0&&p.w!=null){h=p.w
h.toString
q=A.a(o,o,o,o,o,new A.b(l,o),o,new A.m(1,new A.b(m,o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,n,o,o,o,o,o,o,o,o,o,o,4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(16,16,16,16),o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r.push(A.W(o,[A.G("Next Topic",A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(k,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,11,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),A.G(i,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(j,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,600,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],q,h,o,B.j,o))}return A.y(r,s)}}
A.hE.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,2,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0,q,q,q,q,q,q,B.a9,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.F("100%"),q,q,q,q)
p=p.Y(this.d?A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q):A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.G,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,240,q,q,220,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.n,q,q,q,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
s=[]
for(r=0;r<26;++r)s.push(this.hq(B.j6[r]))
return new A.k("div",A.i(B.a,q,p,B.a,B.a),A.j(q,s))},
hq(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="/fullstack/guides/",b="color.primary",a="rgba(5, 150, 105, 0.08)",a0="color.muted"
t.g4.a(a1)
s=a1.a
r=a1.b
q=a1.c
if(q==null){p=s===e.c?A.a(d,d,d,d,d,new A.d(a),d,new A.m(1,new A.d("rgba(5, 150, 105, 0.2)"),"solid"),d,d,d,d,d,d,d,d,new A.b(b,d),d,B.bH,d,B.F,d,d,d,d,d,d,d,d,d,d,13,600,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.h(8,12,8,12),d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d):A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b(a0,d),d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,13,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ac,d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
return A.W(r,B.h,p,c+s,d,B.j,d)}o=e.e.j(0,s)===!0
p=J.bK(q)
n=p.cw(q,new A.lK(e))
m=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
l=n?600:500
k=n?new A.b(b,d):new A.b(a0,d)
l=A.a(d,B.d,d,d,d,new A.d("rgba(0, 0, 0, 0)"),d,B.cJ,d,d,d,d,d,d,d,d,k,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,13,l,6,d,d,d,d,d,B.iG,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ac,d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.F("100%"),d,d,d,d)
k=A.v(r,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
j=$.tC()
l=[A.ay(d,[k,A.H(j,n?new A.b(b,d):new A.b(a0,d),14)],l,!1,!1,new A.lL(e,o,s),B.a,B.w,B.y,B.D)]
if(o){k=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.h(d,d,d,12),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j=[]
for(p=p.gv(q),i=e.c;p.m();){h=p.gp(p)
g=h.a
f=g===i?new A.q(new A.h(6,12,6,12),d,d,d,d,d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,12,600,d,d,new A.b(b,d),d,d,d,d,d,d,d,d,d,new A.d(a),6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.eJ,d,d,d,d):new A.q(B.b2,d,d,d,d,d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,12,d,d,d,new A.b(a0,d),d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j.push(A.W(h.b,B.h,f,c+g,d,B.j,d))}l.push(new A.k("div",A.i(B.a,d,k,B.a,B.a),A.j(d,j)))}return new A.k("div",A.i(B.a,d,m,B.a,B.a),A.j(d,l))}}
A.lK.prototype={
$1(a){return t.fz.a(a).a===this.a.c},
$S:70}
A.lL.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.lJ(s,this.b,this.c))},
$S:1}
A.lJ.prototype={
$0(){var s=!this.b
this.a.e.i(0,this.c,s)
return s},
$S:0}
A.h5.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,10,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,760,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),o=A.a(q,B.d,q,q,q,B.aO,q,new A.m(1,B.bl,"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.k,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.aB,q,999,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.F("fit-content"),q,q,q,q)
o=A.y([A.H($.ec(),B.J,13),A.v("End-to-End Capabilities",B.bz)],o)
s=A.aq("Built for Complete Modern Applications",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,32,800,q,q,q,q,q,q,q,q,q,q,q,q,1.15,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
r=A.G("The Flint Ecosystem eliminates fragmentation across your entire technology stack. Every layer speaks the same expressive language.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,15,q,q,q,q,q,q,q,q,q,q,q,q,q,1.65,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
p=A.i(B.a,q,p,B.a,B.a)
r=A.j(q,[o,s,r])
s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.bw("repeat("+A.a_(2,!0)+", "+A.a_(B.N,!1)+")"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,16,q,B.M,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.bw("repeat("+A.a_(3,!0)+", "+A.a_(B.N,!1)+")"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,B.hd,q,q,q,s,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
o=t.dY
o=A.aw(new A.ad(B.iH,t.cv.a(new A.kP(this)),o),o.h("as.E"))
o=A.y(o,s)
return new A.k("div",A.i(B.a,q,B.av,B.a,B.a),A.j(q,[new A.k("div",p,r),o]))}}
A.kP.prototype={
$1(a){var s,r=null,q=t.g9.a(a).a,p=q[0],o=q[1],n=q[2]
q=q[3]
s=A.a(r,r,r,r,r,new A.b("color.panel",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,10,r,r,r,A.a(r,r,r,r,r,r,r,new A.m(1,new A.d(q),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ab,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
q=A.v(p,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.d(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,800,r,r,r,r,r,r,r,r,r,0.5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
o=A.c4(o,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,17,800,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
n=A.G(n,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.6,B.l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
return new A.k("div",A.i(B.a,r,s,B.a,B.a),A.j(r,[q,o,n]))},
$S:71}
A.hp.prototype={
E(){var s,r,q,p=null,o=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,B.eH,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.hb,p,20,p,p,p,p,p,new A.b("shadow.sm",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.d,p,p,p,B.aO,p,new A.m(1,B.bl,"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.aB,p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("fit-content"),p,p,p,p)
n=A.y([A.H($.k4(),B.J,13),A.v("Explore The Ecosystem",B.bz)],n)
s=A.aq("Choose your starting point in the Flint Ecosystem.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,28,800,p,p,p,p,p,p,p,p,p,p,p,p,1.18,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.G("Explore dedicated documentation guides, architectures, and examples for each of the four official ecosystem technologies.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.65,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,B.i,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,B.az,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
q=A.y([A.W("Full-Stack Web",B.h,p,"/fullstack",p,B.j,p),A.W("Client SDK",B.h,p,"/client",p,B.y,B.B),A.W("AI Engine",B.h,p,"/ai",p,B.y,B.B),A.W("Hardware & Robotics",B.h,p,"/hardware",p,B.y,B.B)],q)
o=A.i(B.a,p,o,B.a,B.a)
q=A.j(p,[n,s,r,q])
return new A.k("div",A.i(B.a,p,B.av,B.a,B.a),A.j(p,[new A.k("div",o,q)]))}}
A.eB.prototype={
a4(){var s=A.xA()
if(s!=null&&s!==this.d)this.q(new A.lW(this,s))},
fn(a){A.pj(a)
this.q(new A.lQ(this))
A.c5(B.ax,new A.lR(this))},
fm(a){A.pj(a)
this.q(new A.lN(this))
A.c5(B.ax,new A.lO(this))},
fG(){if(this.d==="windows")return'powershell -c "irm https://flintdart.dev/install.ps1 | iex"'
return"curl -fsSL https://flintdart.dev/install.sh | sh"},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="color.line",e="color.bg",d="color.panel",c="color.primary",b=j.fG(),a=$.qK(),a0=j.c
if(!(a0<4))return A.t(a,a0)
s=a[a0]
a0=t.G
a=A.a(i,i,i,i,i,A.aM(A.e([A.bk(B.ca,B.iZ),A.bk(B.hY,B.iI),A.bk(B.hZ,B.j8),A.aW(155,B.ci)],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
a=A.a(i,i,i,i,i,new A.b(e,i),i,i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,A.aM(A.e([A.bk(B.i0,B.cg),A.bk(B.hW,B.ch),A.bk(B.c7,B.iQ),A.aW(160,A.e([new A.L(new A.b(e,i),0),new A.L(new A.b(d,i),55),new A.L(new A.b("color.panelStrong",i),100)],a0))],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,a,i,i,i,i,i,i,new A.F("calc(100vh - 68px)"),i,i,i,B.u,i,i,i,i,B.a2,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F("100%"),i,i,i,i)
r=A.E(B.d5,!0)
q=new A.ad(B.iL,t.f7.a(A.qr()),t.en).J(0,", ")
q=A.i(B.cp,i,A.a(i,i,i,i,i,A.aM(A.e([B.ed,B.dJ],a0)),i,i,i,i,i,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0,i,i,i,i,i,new A.ez("linear-gradient(to "+r+", "+q+")"),i,i,i,i,i,i,0.45,i,i,i,i,i,B.aj,i,i,0,i,i,i,i,i,i,i,i,i,0,i,i,i,i,i,i,i,i,i),B.a,B.jl)
r=A.j(i,B.h)
p=j.eQ(new A.d("rgba(52, 211, 153, 0.15)"),380,"4%","8%",380)
o=j.eP("12%",new A.d("rgba(56, 189, 248, 0.14)"),440,"5%",440)
n=A.a(i,B.d,i,i,i,new A.b(d,i),i,new A.m(1,new A.d("rgba(16, 185, 129, 0.3)"),h),i,i,i,i,i,i,i,i,i,i,B.eK,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,10,i,i,i,A.a(i,i,i,i,i,i,i,new A.m(1,new A.d("rgba(52, 211, 153, 0.6)"),h),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b9("translateY("+A.E(-1,!1)+")"),i,i,i,i,i,i,i,i),i,i,i,i,i,i,B.eX,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.hx,i,999,i,i,i,i,i,new A.ap(8,24,-8,new A.d("rgba(16, 185, 129, 0.25)")),i,i,i,i,i,i,i,new A.aZ("all 180ms ease"),i,i,i,i,i,i,i)
n=A.y([A.W(i,[new A.k(g,A.i(B.a,i,A.a(i,i,i,i,i,new A.d("#10b981"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,999,i,i,i,i,i,B.lw,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i),B.a,B.a),A.j(i,B.h)),A.v("Flint v 1.3.2 Released",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(c,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,900,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.v("\u2022",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.muted",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.v("Explore Multi-Provider AI & Full-Stack Dart",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.text",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,700,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.qy(),new A.b(c,i),14)],n,"/whats-new",i,B.j,i)],B.fN)
a0=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,36,i,B.M,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,48,i,A.eA(A.e([new A.aG("minmax("+A.a_(B.a3,!1)+", "+A.a_(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.a_(520,!1)+", "+A.a_(new A.F("1.15fr"),!1)+")")],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,64,i,A.eA(A.e([new A.aG("minmax("+A.a_(B.a3,!1)+", "+A.a_(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.a_(600,!1)+", "+A.a_(new A.F("1.2fr"),!1)+")")],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i)
a0=A.y([j.fN(b),j.fQ(s)],a0)
m=A.a(i,i,i,i,i,new A.d("rgba(15, 23, 42, 0.65)"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("shadow.glow",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
m=A.a(i,i,i,i,new A.d0("blur("+A.E(16,!1)+")"),new A.b(d,i),i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,i,m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.eY,i,B.c_,i,i,i,i,i,i,i,i,i,i,i,i,B.a9,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F("100%"),i,i,i,i)
l=A.hC([j.bn($.ed(),"Full-Stack Web (SSR & ORM)","Reactive Flint UI & API gateway",new A.d("#10b981")),j.bn($.fS(),"Universal Client SDK","Offline sync & typed channels",new A.d("#06b6d4")),j.bn($.cs(),"Autonomous AI Mesh","Multi-provider tool calling & LLMs",new A.d("#a855f7")),j.bn($.cK(),"Hardware & Robotics (R&D)","ESP32, RP2040 & IMU telemetry",new A.d("#f97316"))],"repeat(auto-fit, minmax(240px, 1fr))",16)
m=A.i(B.a,i,m,B.a,B.a)
l=A.j(i,[l])
k=A.i(B.a,i,B.f8,B.a,B.a)
l=A.j(i,[n,a0,new A.k(g,m,l)])
return new A.k(g,A.i(B.a,i,a,B.a,B.a),A.j(i,[new A.k(g,q,r),p,o,new A.k(g,k,l)]))},
fN(a){var s,r,q,p,o,n,m,l=null,k=A.a(l,B.d,l,l,l,new A.d("rgba(16, 185, 129, 0.12)"),l,new A.m(1,new A.d("rgba(16, 185, 129, 0.28)"),"solid"),l,l,l,l,l,l,l,l,new A.d("#10b981"),l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,900,8,l,l,l,l,l,l,l,l,0.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b2,l,999,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),j=A.H($.cK(),new A.d("#10b981"),15),i=A.v("THE UNIFIED DART ECOSYSTEM",l)
k=A.i(B.a,l,k,B.a,B.a)
i=A.j(l,[j,i])
j=A.b5("Flint Ecosystem",A.a(l,l,l,l,l,A.aW(110,B.j4),B.am,l,l,l,l,l,l,l,l,l,new A.d("transparent"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.ly,900,l,l,l,l,l,l,l,l,l,l,l,l,0.98,B.aY,l,l,820,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.am,l,l,l,l,l,l))
s=A.aq("One language across your entire stack: Full-Stack Web, Client SDK, Native AI, and Robotics.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.text",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,23,800,l,l,l,l,l,l,l,l,l,l,l,l,1.28,B.az,l,l,720,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.G("Build end-to-end full-stack web applications with Flint Dart, universal cross-platform clients with Flint Client, autonomous AI agents with Flint AI, and connected hardware & robotics with Flint Hardware.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,B.az,l,l,680,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
q=A.a(l,B.d,l,l,new A.d0("blur("+A.E(14,!1)+")"),new A.d("rgba(3, 7, 18, 0.75)"),l,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),"solid"),l,l,l,l,l,l,l,l,B.C,l,l,l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,B.m,l,l,l,l,l,l,B.aZ,l,l,620,l,l,l,l,l,l,l,l,l,B.ay,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
p=A.y([A.v("$",B.bB),A.v(a,B.f1)],B.bE)
o=this.e
n=o?new A.d("rgba(16, 185, 129, 0.25)"):new A.d("rgba(255, 255, 255, 0.1)")
m=o?new A.d("#34d399"):B.C
m=A.a(l,B.d,l,l,l,n,l,l,l,l,l,l,l,l,l,l,m,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,800,6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b1,l,6,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.aZ("all 150ms ease"),l,l,l,l,l,l,l)
n=o?$.fP():$.fR()
n=A.H(n,o?new A.d("#34d399"):B.C,13)
o=A.ay(l,[n,A.v(this.e?"Copied":"Copy",l)],m,!1,!1,new A.lS(this,a),B.a,B.R,B.j,B.D)
q=A.i(B.a,l,q,B.a,B.a)
o=A.j(l,[p,o])
p=A.a(l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,15,900,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,46,l,l,l,l,l,l,l,B.bX,l,8,l,l,l,l,l,new A.ap(12,32,-10,new A.d("rgba(16, 185, 129, 0.5)")),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
return A.bM([new A.k("div",k,i),j,s,r,new A.k("div",q,o),A.q3([A.W(l,[A.v("Get Started Free",l),A.H($.bZ(),l,18)],p,"/fullstack",l,B.j,l),A.W(l,[A.H($.fO(),l,16),A.v("Documentation",l)],B.aR,"/guides",l,B.y,B.B),A.W(l,[A.H($.fQ(),l,16),A.v("GitHub",l)],B.bN,"https://github.com/flint-dart",l,B.y,B.D)],B.bS,12)],B.bG)},
fQ(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="solid",h="div",g="rgba(255, 255, 255, 0.03)",f=A.a(j,j,j,j,j,new A.d("#050b0a"),j,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),i),j,j,j,j,j,j,j,j,B.C,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.u,j,j,j,j,B.a2,12,j,j,j,j,j,new A.ap(28,70,-28,new A.d("rgba(0, 0, 0, 0.8)")),j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,2),e=A.a(j,B.d,j,j,j,new A.d(g),j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.1)"),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.ay,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),d=A.y([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.bi,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.aK,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.L,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h))],B.bT),c=[]
for(s=0;r=$.qK(),s<4;++s){r=r[s]
c.push(k.fR(r.f,k.c===s,r.e,s,r.a))}c=A.y(c,B.bx)
r=k.f
q=r?new A.d("#34d399"):new A.d("#94a3b8")
q=A.a(j,j,j,j,j,new A.d("rgba(255, 255, 255, 0.05)"),j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c0,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j)
q=A.ay(j,[A.H(r?$.fP():$.fR(),j,13)],q,!1,!1,new A.lT(k,a),B.a,B.R,B.j,B.D)
e=A.i(B.a,j,e,B.a,B.a)
q=A.j(j,[d,c,q])
c=A.a(j,B.d,j,j,j,new A.d("rgba(255, 255, 255, 0.02)"),j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.06)"),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
d=a.f
p=A.y([A.H(a.e,d,16),A.f5(a.b,B.bA),A.v("\u2022 "+a.c,B.bJ)],B.a8)
o=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,d,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,12,800,4,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o=A.W(j,[A.v("Docs",j),A.H($.qy(),j,14)],o,a.d,j,B.j,j)
c=A.i(B.a,j,c,B.a,B.a)
o=A.j(j,[p,o])
p=k.hB(a.x)
n=A.i(B.a,j,B.fE,B.a,B.a)
p=A.j(j,[p])
m=A.a(j,B.d,j,j,j,new A.d(g),j,j,j,j,j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.08)"),i),j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
d=A.y([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j),B.a,B.a),A.j(j,B.h)),A.v(a.r,B.bw)],B.a8)
l=A.v("Pure Dart \u2022 Zero Glue",B.bP)
m=A.i(B.a,j,m,B.a,B.a)
l=A.j(j,[d,l])
return new A.k(h,A.i(B.a,j,f,B.a,B.a),A.j(j,[new A.k(h,e,q),new A.k(h,c,o),new A.k(h,n,p),new A.k(h,m,l)]))},
fR(a,b,c,d,e){var s=null,r=b?900:600,q=b?B.C:B.a5,p=b?new A.d("rgba(255, 255, 255, 0.1)"):B.v
r=A.a(s,B.d,s,s,s,p,s,s,b?new A.m(2,a,"solid"):B.b9,s,s,s,s,s,s,s,q,s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,12,r,6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b0,s,6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.ay(s,[A.H(c,b?a:B.as,13),A.v(e,s)],r,!1,!1,new A.lV(this,d),B.a,B.R,B.j,B.D)},
hB(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.dX.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.ep(""+q,2)
o=A.i(B.a,h,B.by,B.a,B.a)
p=A.j(p,B.h)
n=[]
if(!(r<a.length))return A.t(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aE)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a7("span",A.i(B.a,h,new A.q(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.j(j.a,B.h)))}s.push(A.y([new A.a7("span",o,p),new A.k("div",A.i(B.a,h,B.bD,B.a,B.a),A.j(h,n))],B.bU))}return A.bM(s,B.bR)},
bn(a,b,c,d){var s=null,r=A.a(s,B.d,s,s,s,new A.d("rgba(16, 185, 129, 0.14)"),s,s,s,s,s,s,s,s,s,s,d,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,36,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,36,s,s,s,s),q=A.H(a,s,18)
return A.y([new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(q,B.h)),A.bM([A.f5(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.v(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.ew)],B.bQ)},
d6(a,b,c,d,e,f,g){var s=null
return new A.k("div",A.i(B.cp,s,A.a(s,s,s,s,new A.d0("blur("+A.E(70,!1)+")"),b,s,s,s,s,s,s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,c,s,s,s,s,d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.aj,999,s,e,s,s,s,s,s,s,s,s,s,f,s,s,s,s,g,s,s,s,s),B.a,B.a),A.j(s,B.h))},
eQ(a,b,c,d,e){return this.d6(null,a,b,c,null,d,e)},
eP(a,b,c,d,e){return this.d6(a,b,c,null,d,null,e)}}
A.lW.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.lQ.prototype={
$0(){return this.a.e=!0},
$S:0}
A.lR.prototype={
$0(){var s=this.a
s.q(new A.lP(s))},
$S:0}
A.lP.prototype={
$0(){return this.a.e=!1},
$S:0}
A.lN.prototype={
$0(){return this.a.f=!0},
$S:0}
A.lO.prototype={
$0(){var s=this.a
s.q(new A.lM(s))},
$S:0}
A.lM.prototype={
$0(){return this.a.f=!1},
$S:0}
A.lS.prototype={
$1(a){A.aa(a)
return this.a.fn(this.b)},
$S:1}
A.lT.prototype={
$1(a){A.aa(a)
return this.a.fm(this.b.w)},
$S:1}
A.lV.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.lU(s,this.b))},
$S:1}
A.lU.prototype={
$0(){return this.a.c=this.b},
$S:0}
A.jz.prototype={}
A.f8.prototype={}
A.jN.prototype={}
A.ic.prototype={
E(){var s,r,q=this,p=null,o=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,760,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.d,p,p,p,B.e5,p,new A.m(1,B.bn,"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.aB,p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("fit-content"),p,p,p,p)
n=A.y([A.H($.ec(),B.K,13),A.v("Four Ecosystem Pillars",B.eP)],n)
s=A.aq("The Complete Dart Technology Stack",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,32,800,p,p,p,p,p,p,p,p,p,p,p,p,1.15,new A.h(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.G("From server routes and browser UI to cross-platform client SDKs, AI agent mesh, and hardware robotics \u2014 everything runs in Dart.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.65,new A.h(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
o=A.i(B.a,p,o,B.a,B.a)
r=A.j(p,[n,s,r])
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.bw("repeat("+A.a_(2,!0)+", "+A.a_(B.N,!1)+")"),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,16,p,B.M,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.bw("repeat("+A.a_(4,!0)+", "+A.a_(B.N,!1)+")"),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,new A.h(32,p,0,p),p,p,p,s,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
s=A.y([q.bm("#34d399","Server HTTP routes, SSR, declarative Web UI, Row-Level Security database API gateway, and migrations.",$.ed(),"/fullstack","Explore Fullstack","Full-Stack Web Framework","Flint Dart"),q.bm("#38bdf8","Cross-platform HTTP & WebSocket client with memory/disk caching, offline sync, and real-time DB channels.",$.fS(),"/client","Explore Client","Universal Client SDK","Flint Client"),q.bm("#a78bfa","Multi-provider agent mesh, streaming chat, embeddings, function calling, audio transcription, and persistent memory.",$.cs(),"/ai","Explore AI Engine","Autonomous AI Engine","Flint AI"),q.bm("#f97316","Robotics state machines, HC-SR04 sonar, MPU6050 IMU, motor drivers, and Wokwi virtual simulator bundles.",$.cK(),"/hardware","Explore Hardware","Robotics & IoT SDK","Flint Hardware")],s)
return new A.k("div",A.i(B.a,p,B.av,B.a,B.a),A.j(p,[new A.k("div",o,r),s]))},
bm(a,b,c,d,e,f,g){var s,r,q,p=null,o="solid",n=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),o),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,B.x,p,p,p,p,p,p,p,p,16,p,p,p,A.a(p,p,p,p,p,p,p,new A.m(1,new A.d(a),o),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,B.m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(20,20,20,20),p,16,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),m=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.a(p,B.d,p,p,p,new A.d("rgba(15, 23, 42, 0.6)"),p,new A.m(1,new A.d(a),o),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,40,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,40,p,p,p,p),k=A.H(c,new A.d(a),20)
l=A.i(B.a,p,l,B.a,B.a)
k=A.j(p,[k])
s=A.c4(g,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,18,800,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.v(f,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.d(a),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,700,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.G(b,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,13,p,p,p,p,p,p,p,p,p,p,p,p,p,1.55,new A.h(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
m=A.i(B.a,p,m,B.a,B.a)
q=A.j(p,[new A.k("div",l,k),s,r,q])
r=A.W(e,B.h,A.a(p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.d(a),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,13,800,p,p,p,p,B.fH,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),d,p,B.j,p)
return new A.k("div",A.i(B.a,p,n,B.a,B.a),A.j(p,[new A.k("div",m,q),r]))}}
A.iL.prototype={
E(){var s,r,q,p,o=this,n=null,m="rgba(15, 23, 42, 0.72)",l=t.G
l=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(8, 47, 73, 0.52)"),0),new A.L(new A.d(m),46),new A.L(new A.d("rgba(20, 83, 45, 0.24)"),100)],l)),new A.d(m)],l)),n,new A.m(1,new A.d("rgba(56, 189, 248, 0.18)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,20,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ab,n,16,n,n,n,n,n,new A.b("shadow.sm",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,B.cC,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,18,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,280,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.v("Unified Dart Power",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,B.F,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.aq("Four official pillars engineered to work together.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,24,800,n,n,n,n,n,n,n,n,n,n,n,n,1.14,B.l,n,n,560,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r=A.i(B.a,n,r,B.a,B.a)
p=A.j(n,[q,p])
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.y([new A.k("div",r,p),A.y([o.cs("4 Pillars","Web, Client, AI, Robotics"),o.cs("0 Context Switch","pure Dart across all layers"),o.cs("100% Type-Safe","shared schemas and models")],q)],s)
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,14,n,n,n,n,n,B.q,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.y([o.bs($.ec(),"Full-Stack Web","High-performance backend routes, SSR & Web UI.",B.eA,"/fullstack"),o.bs($.fS(),"Universal Client","Cross-platform caching, offline sync & channels.",B.f3,"/client"),o.bs($.cs(),"Autonomous AI","Agent workflows, tool execution & embeddings.",B.fc,"/ai"),o.bs($.cK(),"Robotics & Hardware","Sensors, motor telemetry & virtual simulation.",B.eL,"/hardware")],q)
l=A.i(B.a,n,l,B.a,B.a)
q=A.j(n,[s,q])
return new A.k("div",A.i(B.a,n,B.fD,B.a,B.a),A.j(n,[new A.k("div",l,q)]))},
bs(a,b,c,d,e){var s=null,r="solid",q="color.line",p="color.text",o=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b(q,s),r),s,s,s,s,s,s,s,s,s,s,B.fG,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,10,s,s,s,A.a(s,s,s,s,s,s,s,new A.m(1,new A.b("color.primary",s),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,B.eR,s,s,s,s,s,s,s,240,s,s,s,s,s,s,B.a9,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),n=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,B.m,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),m=A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b(q,s),r),s,s,s,s,s,s,s,s,s,s,B.fj,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,34,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,34,s,s,s,s),l=A.H(a,new A.b(p,s),16)
return A.W(s,[A.y([new A.k("div",A.i(B.a,s,m,B.a,B.a),A.j(s,[l])),new A.k("div",A.i(B.a,s,d,B.a,B.a),A.j(s,B.h))],n),A.c4(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b(p,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,14,800,s,s,s,s,s,s,s,s,s,s,s,s,s,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,1.5,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],o,e,s,B.j,s)},
cs(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,B.eE,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,2,s,s,s,s,s,s,s,s,s,s,B.f2,s,s,s,s,s,s,s,130,s,s,s,s,s,s,B.aW,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.v(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))}}
A.iU.prototype={
E(){var s,r=this,q=null,p="div",o=A.a(q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,36,q,B.M,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,48,q,A.eA(A.e([new A.aG("minmax("+A.a_(420,!1)+", "+A.a_(B.N,!1)+")"),new A.aG("minmax("+A.a_(B.a3,!1)+", "+A.a_(new A.F("0.9fr"),!1)+")")],t.G)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.aa,q,18,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),m=r.bi("#f97316","HC-SR04 sonar & IMU sensors capture real-time telemetry.",$.cK(),"1","Edge Hardware & Sensors"),l=r.cd(),k=r.bi("#a78bfa","Multimodal agents analyze telemetry & invoke decision tools.",$.cs(),"2","Autonomous AI Engine"),j=r.cd(),i=r.bi("#34d399","Flint Dart enforces Row-Level Security & persists event models.",$.ed(),"3","Full-Stack Server & DB Gateway"),h=r.cd(),g=r.bi("#38bdf8","Clients stream live updates over real-time reactive signals.",$.fS(),"4","Universal Client & Web UI")
n=A.i(B.a,q,n,B.a,B.a)
g=A.j(q,[m,l,k,j,i,h,g])
h=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,14,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,300,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
i=A.a(q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
i=A.y([A.H($.tK(),B.K,16),A.v("Cross-Stack Synergy",B.fo)],i)
j=A.aq("Four Pillars. One Seamless Workflow.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,32,800,q,q,q,q,q,q,q,q,q,q,q,q,1.15,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
k=A.G("Data moves effortlessly from embedded hardware sensors into autonomous AI workflows, through secure backend database gateways, and up to real-time client dashboards \u2014 without converting data formats or switching languages.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,15,q,q,q,q,q,q,q,q,q,q,q,q,q,1.65,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
l=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,B.i,q,q,q,q,q,12,q,q,q,q,q,q,q,q,q,q,q,q,B.bY,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.v("Full-Stack Web",q)
s=$.bZ()
l=A.y([A.W(q,[m,A.H(s,q,16)],q,"/fullstack",q,B.j,q),A.W(q,[A.v("Robotics Guide",q),A.H(s,q,16)],q,"/hardware",q,B.y,B.B)],l)
h=A.i(B.a,q,h,B.a,B.a)
l=A.j(q,[i,j,k,l])
o=A.i(B.a,q,o,B.a,B.a)
l=A.j(q,[new A.k(p,n,g),new A.k(p,h,l)])
return new A.k(p,A.i(B.a,q,B.av,B.a,B.a),A.j(q,[new A.k(p,o,l)]))},
bi(a,b,c,d,e){var s,r,q,p=null,o=A.a(p,B.Q,p,p,p,new A.b("color.panelStrong",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.aX,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.d,p,p,p,new A.d("rgba(15, 23, 42, 0.7)"),p,new A.m(1,new A.d(a),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,36,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,36,p,p,p,p),m=A.H(c,new A.d(a),18)
n=A.i(B.a,p,n,B.a,B.a)
m=A.j(p,[m])
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,3,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.c4(e,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,800,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.G(b,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,1.45,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
s=A.i(B.a,p,s,B.a,B.a)
q=A.j(p,[r,q])
return new A.k("div",A.i(B.a,p,o,B.a,B.a),A.j(p,[new A.k("div",n,m),new A.k("div",s,q)]))},
cd(){var s=null,r=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.ha,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H($.tz(),new A.b("color.muted",s),16)
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.dh.prototype={
gd4(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="#install-and-setup",e="100%",d="color.line",c="color.panel",b="color.text",a="color.muted",a0="color.primary",a1=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,1040,B.aT,i,i,i,i,i,i,i,i,B.b_,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(e),i,i,i,i),a2=t.G
a2=A.a(i,i,i,i,i,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(125, 211, 252, 0.16)"),0),new A.L(new A.d("rgba(52, 211, 153, 0.13)"),50),new A.L(new A.b(c,i),100)],a2)),new A.b(c,i)],a2)),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.V,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,24,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.y([j.d5("Flint AI"),j.d5("Agents & tools")],q)
p=A.b5("Build AI agents inside Flint Dart.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.G("Flint AI adds providers, agents, tools, workflows, streaming chat, memory, persistence, and production tool policies to real Flint applications.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.i(B.a,i,r,B.a,B.a)
o=A.j(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,300,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(e),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.H,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.y([A.H($.cs(),B.a0,16),A.v("Runtime layers",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.accent",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aX,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.v("app.ai.useChatProvidersFromEnv()",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
k=A.v("ctx.ai.run(agent, input: request)",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.i(B.a,i,m,B.a,B.a)
k=A.j(i,[l,k])
l=A.G("Use AI from controllers, API routes, dashboards, queues, and internal automation.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.i(B.a,i,q,B.a,B.a)
l=A.j(i,[n,new A.k(g,m,k),l])
s=A.y([new A.k(g,r,o),new A.k(g,A.i(B.a,i,p,B.a,B.a),A.j(i,[new A.k(g,q,l)]))],s)
l=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.y([j.bT("Setup",f),j.bT("Streaming","#streaming-chat"),j.bT("Security","#production-tool-security")],l)
a2=A.i(B.a,i,a2,B.a,B.a)
l=A.j(i,[s,l])
s=A.a_(240,!1)
q=A.a_(B.N,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.M,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.bw("repeat("+A.a_("auto-fit",!0)+", "+A.a_(new A.aG("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.b7($.fQ(),"Provider setup","Configure OpenAI, Gemini, Anthropic, or custom providers from environment variables.",B.a0)
p=j.b7($.pK(),"Streaming chat","Send partial text chunks to chat UIs while preserving a final completion event.",B.a_)
o=j.b7($.qw(),"Memory and runs","Persist thread messages, run events, artifacts, and trace history through repositories.",B.ar)
r=j.b7($.qv(),"Tool policies","Gate destructive tools with roles, capabilities, production rules, and explicit policy checks.",B.bq)
q=A.i(B.a,i,q,B.a,B.a)
r=A.j(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.ad,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.u,i,i,i,B.H,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(e),i,i,i,i)
p=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,12,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.aq("AI documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.G("Providers, agents, tools, workflows, streaming, persistence, and production safety.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.i(B.a,i,s,B.a,B.a)
m=A.j(i,[k,m])
k=A.a(i,B.d,i,i,i,new A.d("rgba(52, 211, 153, 0.1)"),i,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.y([new A.k(g,s,m),A.W(i,[A.v("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.bZ(),new A.b(a0,i),14)],k,f,i,B.j,i)],p)]
if(j.gd4().length===0)p.push(A.G("The Flint AI guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else p.push(A.ce("api-md markdown-body",j.gd4(),"ai-content",B.aG))
s=A.i(B.a,i,o,B.a,B.a)
p=A.j(i,p)
a1=A.i(B.a,i,a1,B.a,B.a)
p=A.j(i,[new A.k(g,a2,l),new A.k(g,q,r),new A.k(g,s,p)])
return new A.ax(j.c,new A.k(g,A.i(B.a,i,B.au,B.a,B.a),A.j(i,[new A.k(g,a1,p)])))},
b7(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.H,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,d,20),p=A.c4(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p,o]))},
bT(a,b){var s=null
return A.W(a,B.h,A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b4,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,s,B.j,s)},
d5(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.F("max-content"),s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.di.prototype={
gd1(){var s=J.M(this.c,"initialSection")
s=s==null?null:J.r(s)
return s==null?"flint-class":s},
gdn(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
gaM(){var s=J.M(this.c,"previousApiTitle")
return s==null?null:J.r(s)},
gdO(){var s=J.M(this.c,"previousApiUrl")
return s==null?null:J.r(s)},
gaJ(){var s=J.M(this.c,"nextApiTitle")
return s==null?null:J.r(s)},
gdJ(){var s=J.M(this.c,"nextApiUrl")
return s==null?null:J.r(s)},
E(){var s=this,r=null,q=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.h(r,B.n,r,B.n),r,r,1152,r,r,r,r,r,r,r,r,r,new A.h(48,16,48,16),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("100%"),r,r,r,r),p=A.a(r,B.Q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,B.x,r,r,r,r,r,r,r,r,20,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.W,r,r,r,r,r,r,r,r,32,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),o=s.gd1(),n=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,28,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,"1 1 0",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,0,r,r,B.u,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("100%"),r,r,r,r),m=A.a(r,r,r,r,r,r,r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.h(r,r,8,r),r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),l=A.G("API Reference",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,800,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.h(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),k=A.b5(A.xo(s.gd1()),A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,34,r,r,r,r,r,r,r,r,r,r,r,r,r,1.12,new A.h(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),j=A.G("Focused reference for Flint Dart and Flint UI APIs, with copyable examples and practical notes.",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,r,r,r,r,r,r,r,r,r,r,r,r,r,1.7,new A.h(0,0,0,0),r,r,720,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
m=A.i(B.a,r,m,B.a,B.a)
j=A.j(r,[l,k,j])
k=s.fh(0)
l=s.h4()
p=A.y([new A.eg(o,!1),new A.k("div",A.i(B.a,r,n,B.a,B.a),A.j(r,[new A.k("div",m,j),k,l]))],p)
return new A.ax(s.c,new A.k("div",A.i(B.a,r,q,B.a,B.a),A.j(r,[p])))},
fh(a){var s,r,q=null
if(this.gdn().length===0){s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.h(48,q,48,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.G("This API page is being written.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.h(0,0,0,0),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
return new A.k("div",A.i(B.a,q,s,B.a,B.a),A.j(q,[r]))}s=t.N
return A.ce("api-md markdown-body",this.gdn(),"api-content",A.ai(["style",A.ai(["min-width","0","max-width","100%","overflow-wrap","break-word"],s,s)],s,t.X))},
h4(){var s,r,q,p,o,n,m=this,l=null,k="1 1 240px",j="color.line",i="color.panel",h="color.muted",g="color.text"
if(m.gaM()==null||m.gaM().length===0)s=m.gaJ()==null||m.gaJ().length===0
else s=!1
if(s)return A.cr("span",[],A.Y(t.N,t.X))
s=A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,l,l,l,B.i,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=[]
if(m.gaM()!=null&&m.gaM().length!==0&&m.gdO()!=null){q=m.gdO()
q.toString
p=A.a(l,l,l,l,l,new A.b(i,l),l,new A.m(1,new A.b(j,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,k,l,l,l,l,l,l,l,l,l,l,4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(16,16,16,16),l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=A.G("Previous API",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,11,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
n=m.gaM()
n.toString
r.push(A.W(l,[o,A.G(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(g,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],p,q,l,B.j,l))}else r.push(A.cr("span",[],A.Y(t.N,t.X)))
if(m.gaJ()!=null&&m.gaJ().length!==0&&m.gdJ()!=null){q=m.gdJ()
q.toString
p=A.a(l,l,l,l,l,new A.b(i,l),l,new A.m(1,new A.b(j,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,k,l,l,l,l,l,l,l,l,l,l,4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(16,16,16,16),l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=A.G("Next API",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,11,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
n=m.gaJ()
n.toString
r.push(A.W(l,[o,A.G(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(g,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],p,q,l,B.j,l))}return A.y(r,s)}}
A.cO.prototype={
gda(){return J.a9(J.M(this.c,"canAnswer"),!0)||A.dI(["admin","contributor","dev"],t.N).H(0,B.p.gak(0))},
E(){var s,r,q,p,o,n,m,l=this,k=null,j="solid",i="div",h="color.line",g="color.panel",f=l.c,e=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,24,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(k,B.n,k,B.n),k,k,960,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(48,16,48,16),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,B.u,k,k,k,new A.h(34,16,34,16),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.F("100%"),k,k,k,k),d=A.a(k,k,k,k,k,new A.b(g,k),k,new A.m(1,new A.b(h,k),j),k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(34,34,34,34),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,new A.h(24,24,24,24),k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),c=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,k,k,k,B.i,k,k,k,k,k,10,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
c=A.y([l.bV("Community"),l.bV("Ask clearly")],c)
s=A.b5("Ask a Flint question",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,31,750,k,k,k,k,k,k,k,k,k,k,k,k,1.12,new A.h(0,0,0,0),k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,38,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=A.G("Share the route, model, component, error message, or behavior you are working with. Good questions become useful docs for the whole community.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,15,k,k,k,k,k,k,k,k,k,k,k,k,k,1.7,new A.h(0,0,0,0),k,k,760,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=[new A.k(i,A.i(B.a,k,d,B.a,B.a),A.j(k,[c,s,r]))]
d=J.al(f)
if(!(J.a9(d.j(f,"isAuthenticated"),!0)||B.p.gV()!=null)){d=d.j(f,"authMode")
r.push(A.h2("/questions","Back to Questions","You can read questions without an account. Sign in or create a developer account to create a new thread.",(d==null?k:J.r(d))==="register","Sign in to ask"))}else{d=A.a(k,B.Q,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,B.x,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.W,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
c=A.a(k,k,k,k,k,new A.b(g,k),k,new A.m(1,new A.b(h,k),j),k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.a4,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(24,24,24,24),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,0,k,k,k,k,k,k,new A.h(18,18,18,18),k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.F("100%"),k,k,k,k)
s=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=[]
p=l.f
if(p!=null){o=A.a(k,k,k,k,k,new A.d("rgba(248, 113, 113, 0.08)"),k,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),j),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(12,12,12,12),k,10,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
p=A.G(p,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.d("#fca5a5"),k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
q.push(new A.k(i,A.i(B.a,k,o,B.a,B.a),A.j(k,[p])))}p=l.d
o=p.Z(0,"title")
n=l.e
m=$.ul()
q.push(A.bX(o,n,m,"Title","title","Example: How do I define a User model?",!0,"text"))
q.push(A.bX(p.Z(0,"tag"),l.e,m,"Topic","tag","Model, Flint UI, Routing, Auth...",!0,"text"))
q.push(A.f3(p.Z(0,"body"),l.e,"Question","body","Describe what you expected, what happened, and include any useful code or error output.",!0,10,$.uy()))
p=l.r
m=l.gda()
n=A.H($.k5(),k,15)
q.push(A.ay(k,[n,A.v(l.gda()?"Post Question":"Developer access required",k)],k,!m,p,k,B.ah,B.w,B.j,B.Z))
s=A.ey(q,s,l.gf0())
r.push(A.y([new A.k(i,A.i(B.a,k,c,B.a,B.a),A.j(k,[s])),l.hp()],d))}return new A.ax(f,new A.k(i,A.i(B.a,k,e,B.a,B.a),A.j(k,r)))},
b8(a){return this.hu(A.aa(a))},
hu(a9){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$b8=A.be(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:if(t.m.b(a9))a9.preventDefault()
if(n.r){s=1
break}n.q(new A.ke(n))
a=n.d
a0=B.b.D(a.a0("title"))
a1=B.b.D(a.a0("tag"))
a2=B.b.D(a.a0("body"))
a3=t.N
a4=A.Y(a3,t.a)
a5=a0.length
if(a5===0)a4.i(0,"title",A.e(["The title field is required."],t.s))
else if(a5<6)a4.i(0,"title",A.e(["The title must be at least 6 characters."],t.s))
if(a1.length===0)a4.i(0,"tag",A.e(["The tag field is required."],t.s))
a5=a2.length
if(a5===0)a4.i(0,"body",A.e(["The body field is required."],t.s))
else if(a5<20)a4.i(0,"body",A.e(["The body must be at least 20 characters."],t.s))
a6=new A.bQ(a4)
if(a4.gM(0)){f=n.bW(a6,"Please check your question.")
n.q(new A.kf(n,a6))
B.o.P(0,"Question not posted",f)
s=1
break}p=4
m=B.p.gV()
l=A.Y(a3,a3)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
k=l
s=7
return A.b0($.cb().aj("/questions/ask",A.ha(a.b,a3,t.X),k,t.P),$async$b8)
case 7:j=b1
i=j.b
if(j.f&&i!=null){l=J.M(i,"redirectTo")
h=l==null?null:J.r(l)
B.o.ad("Question posted","Opening the thread...")
l=h!=null&&h.length!==0
a=v.G
if(l)A.x(A.x(a.window).location).assign(h)
else A.x(A.x(a.window).location).assign("/questions")
s=1
break}g=A.cc(i)
l=i
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post question."
f=n.bW(g,l)
n.q(new A.kg(n,g,f))
B.o.P(0,"Question not posted",f)
p=2
s=6
break
case 4:p=3
a8=o.pop()
l=A.aL(a8)
if(l instanceof A.bO){e=l
d=n.f_(e)
c=A.cc(d)
l=d
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post question."
b=n.bW(c,l)
n.q(new A.kh(n,c,b))
B.o.P(0,"Question not posted",b)}else{n.q(new A.ki(n))
B.o.P(0,"Question not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$b8,r)},
bW(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb2()
s=A.N(r).h("aO<2>")
return A.iy(new A.aO(r,s),3,s.h("n.E")).J(0," ")},
f_(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kd(),t.N,t.z)
return null},
hp(){var s,r=null,q=A.a(r,r,r,r,r,new A.b("color.panelStrong",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("min(280px, 100%)"),r,r,r,r),r,r,r,r,r,r,r,r,new A.h(18,18,18,18),r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("100%"),r,r,r,r),p=A.aq("Good topics",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,16,700,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.h(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),o=A.G("Use a short topic so other developers can find your question later.",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.6,new A.h(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),n=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,r,r,r,B.i,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),m=[]
for(s=0;s<8;++s)m.push(this.bV(B.iS[s]))
n=A.y(m,n)
return new A.k("div",A.i(B.a,r,q,B.a,B.a),A.j(r,[p,o,n]))},
bV(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.ke.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.A
s.f=null},
$S:0}
A.kf.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.kg.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kh.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.ki.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post question. Please try again."},
$S:0}
A.kd.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dj.prototype={
gaq(){var s=t.fF.a(J.M(this.c,"post"))
s=s==null?null:J.aU(s,t.N,t.z)
return s==null?B.Y:s},
gf8(){var s,r,q=J.M(this.c,"comments")
if(t.j.b(q)){s=J.ct(q,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.kz()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O},
E(){var s,r,q,p,o,n,m,l,k=this,j=null,i="max-content",h="Back to Blog",g="div",f="color.muted",e=k.c,d=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(j,B.n,j,B.n),j,j,960,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(48,16,48,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,B.u,j,j,j,new A.h(34,16,34,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,j),c=k.gaq().j(0,"title"),b=c==null?j:J.r(c)
if(b==null)b="Blog post"
c=k.gaq().j(0,"tag")
s=c==null?j:J.r(c)
if(s==null)s="Blog"
c=k.gaq().j(0,"date")
r=c==null?j:J.r(c)
if(r==null)r=""
c=k.gaq().j(0,"author")
q=c==null?j:J.r(c)
if(q==null)q="Flint Team"
c=k.gaq().j(0,"excerpt")
p=c==null?j:J.r(c)
if(p==null)p=""
c=t.G
c=A.a(j,j,j,j,j,A.aM(A.e([A.aW(145,A.e([new A.L(new A.d("rgba(16, 185, 129, 0.12)"),0),new A.L(new A.d("rgba(14, 165, 233, 0.08)"),45),new A.L(new A.d("rgba(15, 23, 42, 0.82)"),100)],c)),B.ap],c)),j,B.bb,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(32,32,32,32),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,0,j,j,B.u,j,j,j,B.ab,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F(i),j,j,j,j)
o=A.W(j,[A.H($.pL(),j,15),A.v(h,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,700,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],o,"/blog",j,B.j,j)
n=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
m=A.a(j,j,j,j,j,new A.d("rgba(5, 150, 105, 0.08)"),j,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),j,j,j,j,j,j,j,j,j,j,B.a7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(5,10,5,10),j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F(i),j,j,j,j)
l=A.v(s,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.primary",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,11,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
l=[new A.k(g,A.i(B.a,j,m,B.a,B.a),A.j(j,[l]))]
if(r.length!==0){m=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
l.push(A.y([A.H($.qx(),new A.b(f,j),13),A.v(r,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,12,650,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],m))}o=[o,A.y(l,n),A.b5(b,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.text",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,31,760,j,j,j,j,j,j,j,j,j,j,j,j,1.12,new A.h(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,40,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))]
if(p.length!==0)o.push(A.G(p,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,1.72,new A.h(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)))
n=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o.push(A.y([A.H($.qD(),new A.b(f,j),15),A.v("By "+q,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,700,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],n))
n=A.a(j,j,j,j,j,j,j,new A.m(0,new A.b("color.line",j),"solid"),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(8,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
m=J.al(e)
l=m.j(e,"postBodyHtml")
l=l==null?j:J.r(l)
l=A.ce("markdown-body",l==null?"":l,"blog-post-body",B.aG)
o.push(new A.k(g,A.i(B.a,j,n,B.a,B.a),A.j(j,[l])))
o=[new A.k(g,A.i(B.a,j,c,B.a,B.a),A.j(j,o)),k.f9()]
if(J.a9(m.j(e,"isAuthenticated"),!0)||B.p.gV()!=null)o.push(k.f7())
else o.push(A.h2("/blog",h,"Create an account or sign in to join the discussion on this Flint post.",!1,"Sign in to comment"))
return new A.ax(e,new A.k(g,A.i(B.a,j,d,B.a,B.a),A.j(j,o)))},
f9(){var s,r,q,p,o,n,m,l,k=null,j="color.text",i="color.muted",h=this.gf8(),g=A.a(k,k,k,k,k,new A.b("color.panel",k),k,new A.m(1,new A.b("color.line",k),"solid"),k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(24,24,24,24),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,new A.h(18,18,18,18),k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),f=A.a(k,B.d,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,k,k,k,k,k,k,k,k,k,12,k,k,k,k,k,B.m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
f=[A.y([A.aq("Comments",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b(j,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)),A.v(""+h.length,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.primary",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],f)]
s=h.length
if(s===0)f.push(A.G("No comments yet. Start the conversation.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)))
else for(r=t.P,q=0;q<h.length;h.length===s||(0,A.aE)(h),++q){p=r.a(h[q])
o=J.al(p)
n=o.j(p,"author")
n=n==null?k:J.r(n)
if(n==null)n="Community"
m=A.i(B.a,k,new A.q(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,800,k,k,new A.b(j,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a)
n=A.j(n,B.h)
l=o.j(p,"date")
l=l==null?k:J.r(l)
if(l==null)l=""
l=A.y([new A.a7("span",m,n),new A.a7("span",A.i(B.a,k,new A.q(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,12,k,k,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a),A.j(l,B.h))],new A.q(k,k,k,k,k,k,k,k,B.c,8,B.d,k,k,k,k,B.i,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
p=o.j(p,"body")
p=p==null?k:J.r(p)
if(p==null)p=""
o=A.i(B.a,k,new A.q(k,new A.h(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,14,k,1.7,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a)
p=A.j(p,B.h)
f.push(new A.k("div",A.i(B.a,k,new A.q(new A.h(16,16,16,16),k,k,k,k,k,k,k,B.e,8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.panelStrong",k),14,new A.m(1,new A.d("rgba(51, 65, 85, 0.78)"),"solid"),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a),A.j(k,[l,new A.a7("p",o,p)])))}return new A.k("div",A.i(B.a,k,g,B.a,B.a),A.j(k,f))},
f7(){var s,r,q,p,o=this,n=null,m=o.gaq().j(0,"slug"),l=m==null?n:J.r(m)
if(l==null)l=""
m=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,new A.h(22,22,22,22),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
q=o.f
if(q!=null){p=A.a(n,n,n,n,n,new A.d("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.G(q,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r.push(new A.k("div",A.i(B.a,n,p,B.a,B.a),A.j(q,B.h)))}r.push(A.f3(o.d.Z(0,"body"),o.e,"Comment","body","Share a thought, question, or improvement...",!0,6,$.ux()))
q=o.r
r.push(A.ay(n,[A.H($.k5(),n,15),A.v("Submit Comment",n)],n,!1,q,n,B.ah,B.w,B.j,B.Z))
s=A.ey(r,s,new A.ky(o,l))
return new A.k("div",A.i(B.a,n,m,B.a,B.a),A.j(n,[s]))},
bw(a,b){return this.hy(a,b)},
hy(a5,a6){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bw=A.be(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:if(t.m.b(a5))a5.preventDefault()
if(n.r){s=1
break}n.q(new A.kB(n))
c=n.d
b=t.N
a=A.Y(b,t.a)
a0=B.b.D(c.a0("body")).length
if(a0===0)a.i(0,"body",A.e(["The body field is required."],t.s))
else if(a0<3)a.i(0,"body",A.e(["The body must be at least 3 characters."],t.s))
a1=new A.bQ(a)
if(a.gM(0)){h=n.bZ(a1,"Please check your comment.")
n.q(new A.kC(n,a1))
B.o.P(0,"Comment not posted",h)
s=1
break}p=4
m=B.p.gV()
a0=$.cb()
a2="/blog/"+a6
c=A.ha(c.b,b,t.X)
l=A.Y(b,b)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(a0.aj(a2+"/comments",c,l,t.P),$async$bw)
case 7:k=a8
j=k.b
if(k.f&&j!=null){B.o.ad("Comment posted","Refreshing comments...")
l=J.M(j,"redirectTo")
l=l==null?null:J.r(l)
if(l==null)l=a2
A.x(A.x(v.G.window).location).assign(l)
s=1
break}i=A.cc(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post comment."
h=n.bZ(i,l)
n.q(new A.kD(n,i,h))
B.o.P(0,"Comment not posted",h)
p=2
s=6
break
case 4:p=3
a4=o.pop()
l=A.aL(a4)
if(l instanceof A.bO){g=l
f=n.f3(g)
e=A.cc(f)
l=f
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post comment."
d=n.bZ(e,l)
n.q(new A.kE(n,e,d))
B.o.P(0,"Comment not posted",d)}else{n.q(new A.kF(n))
B.o.P(0,"Comment not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$bw,r)},
bZ(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb2()
s=A.N(r).h("aO<2>")
return A.iy(new A.aO(r,s),3,s.h("n.E")).J(0," ")},
f3(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kA(),t.N,t.z)
return null}}
A.kz.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.ky.prototype={
$1(a){return this.a.bw(A.aa(a),this.b)},
$S:1}
A.kB.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.A
s.f=null},
$S:0}
A.kC.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.kD.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kE.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kF.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post comment. Please try again."},
$S:0}
A.kA.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dk.prototype={
gh3(){var s,r,q=J.M(this.c,"posts")
if(t.j.b(q)){s=J.ct(q,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.kG()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O},
gde(){return J.a9(J.M(this.c,"canWriteBlog"),!0)||A.dI(["admin","contributor"],t.N).H(0,B.p.gak(0))},
E(){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h="solid",g="rgba(14, 165, 233, 0.1)",f="color.text",e="color.muted",d="color.primary",c=k.gh3(),b=c.length===0?j:B.f.gF(c),a=c.length<=1?B.O:A.q_(c,1,j,A.au(c).c).iu(0),a0=k.hE(c),a1=k.c,a2=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(j,B.n,j,B.n),j,j,1152,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(48,16,48,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,B.u,j,j,j,new A.h(34,16,34,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,j),a3=c.length,a4=a0.length,a5=t.G,a6=A.a(j,j,j,j,j,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(16, 185, 129, 0.16)"),0),new A.L(new A.d(g),42),new A.L(new A.d("rgba(15, 23, 42, 0.82)"),100)],a5)),B.ap],a5)),j,B.bb,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(40,40,40,40),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,B.V,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a7=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,20,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a8=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,720,j,j,0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a9=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a9=A.y([k.c_("Flint Blog"),k.c_("Engineering notes")],a9)
s=A.b5("Ideas, releases, and practical Flint engineering.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,32,760,j,j,j,j,j,j,j,j,j,j,j,j,1.08,new A.h(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,42,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
r=A.G("Read framework updates, backend patterns, UI notes, deployment lessons, and production guidance from the Flint ecosystem.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,1.7,new A.h(0,0,0,0),j,j,680,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a8=A.i(B.a,j,a8,B.a,B.a)
r=A.j(j,[a9,s,r])
s=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,220,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.n,j,j,j,j),j,0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,j)
a3=k.dX(""+a3,"Published posts")
a4=k.dX(""+a4,"Topics covered")
a7=A.y([new A.k(i,a8,r),new A.k(i,A.i(B.a,j,s,B.a,B.a),A.j(j,[a3,a4]))],a7)
a4=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a3=A.a(j,B.d,j,j,j,new A.d("rgba(52, 211, 153, 0.14)"),j,new A.m(1,new A.d("rgba(52, 211, 153, 0.42)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(10,16,10,16),j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a8=A.H(k.gde()?$.tG():$.qB(),j,16)
a9=k.gde()?"Write a Post":"Sign in to Write"
a3=[A.W(j,[a8,A.v(a9,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(d,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],a3,"/blog/create",j,B.j,j)]
if(!(J.a9(J.M(a1,"isAuthenticated"),!0)||B.p.gV()!=null)){a8=A.a(j,B.d,j,j,j,new A.d(g),j,new A.m(1,new A.d("rgba(125, 211, 252, 0.34)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(10,16,10,16),j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a3.push(A.W(j,[A.H($.k3(),j,16),A.v("Create account",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.accent",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],a8,"/blog/create?mode=register",j,B.j,j))}a3=A.y(a3,a4)
a3=[new A.k(i,A.i(B.a,j,a6,B.a,B.a),A.j(j,[a7,a3]))]
if(a0.length!==0)a3.push(k.hG(a0))
if(b==null){a4=A.a(j,j,j,j,j,new A.b("color.panel",j),j,new A.m(1,new A.b("color.line",j),h),j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(28,28,28,28),j,18,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a5=A.aq("No posts yet",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a6=A.G("Once the first Flint post is published, it will appear here.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a3.push(new A.k(i,A.i(B.a,j,a4,B.a,B.a),A.j(j,[a5,a6])))}else{t.P.a(b)
a4=J.al(b)
a6=a4.j(b,"title")
q=a6==null?j:J.r(a6)
if(q==null)q="Untitled post"
a6=a4.j(b,"href")
p=a6==null?j:J.r(a6)
if(p==null)p="/blog"
a6=a4.j(b,"excerpt")
o=a6==null?j:J.r(a6)
if(o==null)o=""
a6=a4.j(b,"tag")
n=a6==null?j:J.r(a6)
if(n==null)n="Update"
a6=a4.j(b,"author")
m=a6==null?j:J.r(a6)
if(m==null)m="Flint Team"
a4=a4.j(b,"date")
l=a4==null?j:J.r(a4)
if(l==null)l=""
a4=A.aM(A.e([A.aW(145,A.e([new A.L(new A.d("rgba(14, 165, 233, 0.14)"),0),new A.L(new A.d("rgba(15, 23, 42, 0.66)"),58),new A.L(new A.d("rgba(2, 6, 23, 0.78)"),100)],a5)),B.dr],a5))
a6=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(26,26,26,26),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a6=A.a(j,j,j,j,j,a4,j,B.cP,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,A.a(j,B.cE,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.eA(A.e([new A.aG("minmax("+A.a_(B.a3,!1)+", "+A.a_(new A.F("1.35fr"),!1)+")"),new A.aG("minmax("+A.a_(280,!1)+", "+A.a_(new A.F("0.65fr"),!1)+")")],a5)),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,a6,j,0,j,j,j,j,j,j,B.aa,j,20,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a5=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a4=k.dH(n,l)
a7=A.aq(q,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,26,750,j,j,j,j,j,j,j,j,j,j,j,j,1.14,new A.h(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,32,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a8=A.G(o,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,15,j,j,j,j,j,j,j,j,j,j,j,j,j,1.72,new A.h(0,0,0,0),j,j,720,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a9=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
s=k.d9(m)
r=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a9=A.y([s,A.y([A.v("Read featured post",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(d,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),A.H($.bZ(),new A.b(d,j),15)],r)],a9)
a5=A.i(B.a,j,a5,B.a,B.a)
a9=A.j(j,[a4,a7,a8,a9])
a8=A.a(j,j,j,j,j,new A.b("color.panelStrong",j),j,new A.m(1,new A.d("rgba(51, 65, 85, 0.82)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(22,22,22,22),j,18,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a7=A.H($.cs(),B.a0,24)
a4=A.c4("Latest insight",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,20,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.h(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
r=A.G("A short, readable article from the Flint team and community.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,j,j,j,j,j,j,j,j,j,j,j,j,j,1.65,new A.h(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a6=[A.W(j,[new A.k(i,a5,a9),new A.k(i,A.i(B.a,j,a8,B.a,B.a),A.j(j,[a7,a4,r]))],a6,p,j,B.j,j)]
if(a.length!==0)a6.push(k.h2(a))
B.f.S(a3,a6)}return new A.ax(a1,new A.k(i,A.i(B.a,j,a2,B.a,B.a),A.j(j,a3)))},
hG(a){var s,r,q,p,o,n,m,l=null,k="color.muted"
t.a.a(a)
s=A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,l,l,l,B.i,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=[]
for(q=A.q_(a,0,A.fM(10,"count",t.S),A.au(a).c),p=q.$ti,q=new A.by(q,q.gk(0),p.h("by<as.E>")),p=p.h("as.E");q.m();){o=q.d
if(o==null)o=p.a(o)
n=A.H($.tA(),new A.b(k,l),13)
m=A.i(B.a,l,new A.q(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,750,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a)
o=A.j(o,B.h)
r.push(new A.k("div",A.i(B.a,l,new A.q(new A.h(7,12,7,12),l,l,l,l,l,l,l,B.k,8,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.panel",l),999,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.j(l,[n,new A.a7("span",m,o)])))}return new A.k("div",A.i(B.a,l,s,B.a,B.a),A.j(l,r))},
h2(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="color.muted"
t.p.a(a)
s=A.a_(280,!1)
r=A.a_(B.N,!1)
r=A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,B.e,e,e,e,e,e,e,e,e,e,e,e,e,16,e,B.M,e,e,e,e,e,e,e,e,e,e,e,e,e,e,A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.bw("repeat("+A.a_("auto-fit",!0)+", "+A.a_(new A.aG("minmax("+s+", "+r+")"),!1)+")"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)
s=[]
for(q=a.length,p=t.P,o=0;o<a.length;a.length===q||(0,A.aE)(a),++o){n=p.a(a[o])
m=J.al(n)
l=m.j(n,"title")
k=l==null?e:J.r(l)
if(k==null)k="Untitled post"
l=m.j(n,"href")
j=l==null?e:J.r(l)
if(j==null)j="/blog"
l=m.j(n,"excerpt")
i=l==null?e:J.r(l)
if(i==null)i=""
l=m.j(n,"tag")
h=l==null?e:J.r(l)
if(h==null)h="Update"
l=m.j(n,"author")
g=l==null?e:J.r(l)
if(g==null)g="Flint Team"
n=m.j(n,"date")
f=n==null?e:J.r(n)
s.push(A.W(e,[this.dH(h,f==null?"":f),new A.a7("h2",A.i(B.a,e,new A.q(e,new A.h(0,0,0,0),e,e,e,new A.F("100%"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,21,750,1.25,e,new A.b("color.text",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(k,B.h)),new A.a7("p",A.i(B.a,e,new A.q(e,new A.h(0,0,0,0),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,13,e,1.68,e,new A.b(d,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(i,B.h)),A.y([this.d9(g),A.H($.bZ(),new A.b(d,e),15)],new A.q(e,e,e,e,e,e,e,e,B.c,12,B.d,e,B.m,e,e,B.i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e))],new A.q(new A.h(20,20,20,20),e,e,e,0,e,e,e,B.e,14,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b("color.panel",e),16,new A.m(1,new A.b("color.line",e),"solid"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),j,e,B.j,e))}return new A.k("div",A.i(B.a,e,r,B.a,B.a),A.j(e,s))},
dH(a,b){var s,r=null,q="color.muted",p=A.a(r,B.d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,r,r,r,B.i,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),o=[this.c_(a)]
if(b.length!==0){s=A.a(r,B.d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.k,r,r,r,r,r,r,r,r,r,r,r,r,6,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
o.push(A.y([A.H($.qx(),new A.b(q,r),13),A.v(b,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b(q,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,650,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))],s))}return A.y(o,p)},
d9(a){var s=null,r="color.muted",q=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.y([A.H($.qD(),new A.b(r,s),14),A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b(r,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],q)},
c_(a){var s=null,r=A.a(s,s,s,s,s,B.dx,s,B.cG,s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b0,s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.lz,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
dX(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.d("rgba(51, 65, 85, 0.82)"),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,3,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(16,16,16,16),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,24,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.v(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))},
hE(a){var s,r,q,p,o
t.p.a(a)
s=A.dH(t.N)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.aE)(a),++q){p=J.M(a[q],"tag")
o=p==null?null:B.b.D(J.r(p))
if(o!=null&&o.length!==0)s.t(0,o)}r=A.aw(s,s.$ti.c)
return r}}
A.kG.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.cP.prototype={
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="color.line",j="color.panel",i="color.text",h=o.c,g=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,24,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(n,B.n,n,B.n),n,n,960,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(48,16,48,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,B.u,n,n,n,new A.h(34,16,34,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F("100%"),n,n,n,n),f=A.a(n,n,n,n,n,new A.b(j,n),n,new A.m(1,new A.b(k,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(34,34,34,34),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,new A.h(24,24,24,24),n,22,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),e=A.G("Blog",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),d=A.b5("Write a Flint post",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(i,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,31,750,n,n,n,n,n,n,n,n,n,n,n,n,1.12,new A.h(0,0,0,0),n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),c=A.G("Publish framework updates, tutorials, architecture notes, and practical lessons for the Flint community.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.muted",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,15,n,n,n,n,n,n,n,n,n,n,n,n,n,1.7,new A.h(0,0,0,0),n,n,760,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
c=[new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[e,d,c]))]
f=J.al(h)
if(!(J.a9(f.j(h,"isAuthenticated"),!0)||B.p.gV()!=null)){f=f.j(h,"authMode")
c.push(A.h2("/blog","Back to Blog","Create an account or sign in to draft Flint articles, release notes, and community tutorials.",(f==null?n:J.r(f))==="register","Sign in to write"))}else if(!(J.a9(f.j(h,"canWriteBlog"),!0)||A.dI(["admin","contributor"],t.N).H(0,B.p.gak(0)))){f=A.a(n,n,n,n,n,new A.d("rgba(251, 191, 36, 0.08)"),n,new A.m(1,new A.d("rgba(251, 191, 36, 0.32)"),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(24,24,24,24),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
e=A.aq("Writer access required",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(i,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,22,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
d=A.G("Your account is signed in, but it does not currently have permission to publish blog posts.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.warning",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1.6,new A.h(8,n,0,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
c.push(new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[e,d])))}else{f=A.a(n,n,n,n,n,new A.b(j,n),n,new A.m(1,new A.b(k,n),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(24,24,24,24),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,0,n,n,n,n,n,n,new A.h(18,18,18,18),n,18,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
e=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,18,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
d=[]
s=o.f
if(s!=null){r=A.a(n,n,n,n,n,new A.d("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.G(s,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
d.push(new A.k(l,A.i(B.a,n,r,B.a,B.a),A.j(s,B.h)))}s=o.d
r=s.Z(0,"title")
q=o.e
p=$.uk()
d.push(A.bX(r,q,p,"Title","title","Example: Building controllers with Flint",!0,"text"))
d.push(A.bX(s.Z(0,"tag"),o.e,p,"Tag","tag","Guide, Release, Architecture...",!0,"text"))
d.push(A.f3(s.Z(0,"body"),o.e,"Body","body","Write the full post in Markdown...",!0,14,$.uw()))
s=o.r
d.push(A.ay(n,[A.H($.k5(),n,15),A.v("Publish Post",n)],n,!1,s,n,B.ah,B.w,B.j,B.Z))
e=A.ey(d,e,o.gf5())
c.push(new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[e])))}return new A.ax(h,new A.k(l,A.i(B.a,n,g,B.a,B.a),A.j(n,c)))},
b9(a){return this.hv(A.aa(a))},
hv(a8){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$b9=A.be(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:if(t.m.b(a8))a8.preventDefault()
if(n.r){s=1
break}n.q(new A.kI(n))
b=n.d
a=B.b.D(b.a0("title"))
a0=B.b.D(b.a0("tag"))
a1=B.b.D(b.a0("body"))
a2=t.N
a3=A.Y(a2,t.a)
a4=a.length
if(a4===0)a3.i(0,"title",A.e(["The title field is required."],t.s))
else if(a4<6)a3.i(0,"title",A.e(["The title must be at least 6 characters."],t.s))
if(a0.length===0)a3.i(0,"tag",A.e(["The tag field is required."],t.s))
a4=a1.length
if(a4===0)a3.i(0,"body",A.e(["The body field is required."],t.s))
else if(a4<40)a3.i(0,"body",A.e(["The body must be at least 40 characters."],t.s))
a5=new A.bQ(a3)
if(a3.gM(0)){g=n.c0(a5,"Please check your post.")
n.q(new A.kJ(n,a5))
B.o.P(0,"Post not published",g)
s=1
break}p=4
m=B.p.gV()
a4=$.cb()
b=A.ha(b.b,a2,t.X)
l=A.Y(a2,a2)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(a4.aj("/blog/create",b,l,t.P),$async$b9)
case 7:k=b0
j=k.b
if(k.f&&j!=null){l=J.M(j,"redirectTo")
i=l==null?null:J.r(l)
B.o.ad("Post published","Opening the article...")
l=i==null||i.length===0?"/blog":i
A.x(A.x(v.G.window).location).assign(l)
s=1
break}h=A.cc(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not publish post."
g=n.c0(h,l)
n.q(new A.kK(n,h,g))
B.o.P(0,"Post not published",g)
p=2
s=6
break
case 4:p=3
a7=o.pop()
l=A.aL(a7)
if(l instanceof A.bO){f=l
e=n.f4(f)
d=A.cc(e)
l=e
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not publish post."
c=n.c0(d,l)
n.q(new A.kL(n,d,c))
B.o.P(0,"Post not published",c)}else{n.q(new A.kM(n))
B.o.P(0,"Post not published",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$b9,r)},
c0(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb2()
s=A.N(r).h("aO<2>")
return A.iy(new A.aO(r,s),3,s.h("n.E")).J(0," ")},
f4(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kH(),t.N,t.z)
return null}}
A.kI.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.A
s.f=null},
$S:0}
A.kJ.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.kK.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kL.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kM.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not publish post. Please try again."},
$S:0}
A.kH.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dp.prototype={
gc9(){var s,r,q=J.M(this.b,"entries")
if(t.j.b(q)){s=J.ct(q,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.kS()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O},
E(){var s,r,q,p,o,n,m,l,k=this
if(k.gc9().length===0)s='<style>\n  #changelog-root, #changelog-root * { box-sizing: border-box; }\n  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }\n  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }\n  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }\n  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }\n  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }\n  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }\n  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }\n  .cl-md li { margin-bottom: 6px; }\n  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }\n  @media (max-width: 640px) {\n    .changelog-shell { padding: 34px 16px !important; }\n    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }\n  }\n</style>\n<div class="changelog-shell">\n  <div class="changelog-hero">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>\n    </div>\n    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>\n    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>\n  </div>\n\n  <div style="margin-top:28px;padding:24px;border-radius:14px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);">\n    <p style="color:#94a3b8;margin:0;">No changelog entries are available yet.</p>\n  </div>\n\n'
else for(r=0,s='<style>\n  #changelog-root, #changelog-root * { box-sizing: border-box; }\n  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }\n  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }\n  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }\n  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }\n  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }\n  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }\n  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }\n  .cl-md li { margin-bottom: 6px; }\n  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }\n  @media (max-width: 640px) {\n    .changelog-shell { padding: 34px 16px !important; }\n    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }\n  }\n</style>\n<div class="changelog-shell">\n  <div class="changelog-hero">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>\n    </div>\n    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>\n    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>\n  </div>\n\n';r<k.gc9().length;++r,s=n){q=k.gc9()
if(!(r<q.length))return A.t(q,r)
p=q[r]
o=r===0
q=J.al(p)
n=q.j(p,"version")
m=n==null?null:J.r(n)
if(m==null)m=""
q=q.j(p,"contentHtml")
l=q==null?null:J.r(q)
if(l==null)l=""
q=o?"latest":""
n=o?'<span style="padding:3px 10px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:10px;font-weight:700;color:#34d399;">Latest</span>':""
n=s+('  <div class="changelog-card '+q+'">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:14px;">\n      <h2 style="font-size:21px;font-weight:700;color:#fff;margin:0;">v'+m+"</h2>\n      "+n+'\n    </div>\n    <div class="cl-md">\n      '+l+"\n    </div>\n  </div>\n\n")}s+="</div>\n"
return new A.ax(k.b,A.ce(null,s.charCodeAt(0)==0?s:s,"changelog-root",B.cq))}}
A.kS.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.dq.prototype={
gdh(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="100%",e="color.line",d="rgba(52, 211, 153, 0.1)",c="color.panel",b="color.text",a="color.muted",a0="color.primary",a1=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,1040,B.aT,i,i,i,i,i,i,i,i,B.b_,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(f),i,i,i,i),a2=t.G
a2=A.a(i,i,i,i,i,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(14, 165, 233, 0.18)"),0),new A.L(new A.d(d),48),new A.L(new A.b(c,i),100)],a2)),new A.b(c,i)],a2)),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.V,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,24,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.y([j.di("FlintClient"),j.di("Dart HTTP")],q)
p=A.b5("A production-ready Dart client for modern APIs.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.G("FlintClient gives Dart and Flutter apps a clean way to call APIs with retries, caching, cancellation, structured errors, lifecycle hooks, and strict or lenient parsing.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.i(B.a,i,r,B.a,B.a)
o=A.j(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,280,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(f),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.H,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.y([A.H($.fQ(),B.a0,16),A.v("Install",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.accent",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aW,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.v("dart pub add flint_client",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,700,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.i(B.a,i,m,B.a,B.a)
l=A.j(i,[l])
k=A.G("Use it from Dart CLIs, Flutter apps, dashboards, and backend tools.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.i(B.a,i,q,B.a,B.a)
k=A.j(i,[n,new A.k(g,m,l),k])
s=A.y([new A.k(g,r,o),new A.k(g,A.i(B.a,i,p,B.a,B.a),A.j(i,[new A.k(g,q,k)]))],s)
k=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.y([j.c2("pub.dev","https://pub.dev/packages/flint_client"),j.c2("GitHub","https://github.com/flintdart/flint-client"),j.c2("Examples","/examples")],k)
a2=A.i(B.a,i,a2,B.a,B.a)
k=A.j(i,[s,k])
s=A.a_(240,!1)
q=A.a_(B.N,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.M,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.bw("repeat("+A.a_("auto-fit",!0)+", "+A.a_(new A.aG("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.bb($.pK(),"Retries that understand HTTP","Backoff, retry-after support, and safer behavior for idempotent requests.",B.a0)
p=j.bb($.qw(),"Cache with TTL control","Cache responses intentionally and avoid repeated network work.",B.L)
o=j.bb($.qv(),"Structured errors","Handle timeout, network, HTTP, parse, and cancelled states clearly.",B.bq)
r=j.bb($.tE(),"Lifecycle hooks","Attach logging, metrics, correlation IDs, and request tracing cleanly.",B.ar)
q=A.i(B.a,i,q,B.a,B.a)
r=A.j(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.ad,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.u,i,i,i,B.H,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(f),i,i,i,i)
p=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,12,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.aq("Client documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.G("Setup, requests, files, WebSocket usage, error handling, parse modes, and observability.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.i(B.a,i,s,B.a,B.a)
m=A.j(i,[l,m])
l=A.a(i,B.d,i,i,i,new A.d(d),i,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.y([new A.k(g,s,m),A.W(i,[A.v("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.bZ(),new A.b(a0,i),14)],l,"#basics",i,B.j,i)],p)]
if(j.gdh().length===0)p.push(A.G("The FlintClient guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else{s=t.N
p.push(A.ce("api-md markdown-body",j.gdh(),"client-content",A.ai(["style",A.ai(["min-width","0","max-width","100%","overflow-wrap","break-word"],s,s)],s,t.X)))}s=A.i(B.a,i,o,B.a,B.a)
p=A.j(i,p)
a1=A.i(B.a,i,a1,B.a,B.a)
p=A.j(i,[new A.k(g,a2,k),new A.k(g,q,r),new A.k(g,s,p)])
return new A.ax(j.c,new A.k(g,A.i(B.a,i,B.au,B.a,B.a),A.j(i,[new A.k(g,a1,p)])))},
bb(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.H,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,d,20),p=A.c4(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p,o]))},
c2(a,b){var s=null,r=B.b.K(b,"http")?"_blank":s
return A.W(a,B.h,A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b4,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,r,B.j,s)},
di(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.F("max-content"),s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.du.prototype={
E(){var s=null,r=this.b,q=J.M(r,"contentHtml")
q=q==null?s:J.r(q)
q=A.ce(s,q==null?"":q,"content-page",B.a)
return new A.ax(r,new A.k("div",A.i(B.a,s,B.fe,B.a,B.a),A.j(s,[q])))}}
A.dx.prototype={
E(){return new A.ax(this.b,A.ce(null,A.cJ("<style>\n  #examples-root, #examples-root * { box-sizing: border-box; }\n  #examples-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  #examples-root pre { max-width: 100%; overflow-x: auto; }\n  #examples-root code { overflow-wrap: normal; }\n  @media (max-width: 640px) {\n    #examples-root .examples-shell { padding: 34px 16px !important; }\n    #examples-root .examples-hero { padding: 24px !important; border-radius: 18px !important; }\n    #examples-root .examples-title { font-size: 30px !important; line-height: 1.12 !important; }\n    #examples-root .examples-section { padding: 18px !important; border-radius: 14px !important; }\n    #examples-root ol { padding-left: 18px !important; }\n    #examples-root pre { margin-left: -2px !important; margin-right: -2px !important; padding: 14px !important; }\n  }\n</style>\n<div class=\"examples-shell\" style=\"width:100%;max-width:1152px;padding:48px 16px;color:#e2e8f0;margin:0 auto;overflow:hidden;\">\n  <div class=\"examples-hero\" style=\"padding:40px;border-radius:24px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.7);\">\n    <div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:20px;\">\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;\">Examples</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#d1fae5;\">{{FLINT_DART_VERSION}}</span>\n      <span style=\"font-size:12px;color:#64748b;\">Hands-on tutorials</span>\n    </div>\n    <h1 class=\"examples-title\" style=\"font-size:36px;font-weight:600;color:#fff;margin:0 0 12px;\">Examples &amp; Tutorials</h1>\n    <p style=\"font-size:15px;color:#94a3b8;margin:0 0 16px;\">Learn by example with practical, end-to-end walkthroughs.</p>\n    <div style=\"display:flex;flex-wrap:wrap;gap:12px;\">\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">Auth ready</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">ORM included</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">Views + APIs</span>\n    </div>\n  </div>\n\n  <section class=\"examples-section\" style=\"margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);\">\n    <h2 style=\"font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;\">Blog Platform Tutorial</h2>\n    <p style=\"color:#94a3b8;margin:0 0 8px;\">Build a blog with role-based publishing, comments, and moderation.</p>\n    <span style=\"display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;\">Beginner</span>\n\n    <div style=\"margin-top:24px;\">\n      <h3 style=\"font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;\">Roles &amp; Permissions</h3>\n      <ul style=\"list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;\">\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">admin</code> and <code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">contributor</code> can publish blog posts.</li>\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">dev</code> can create questions/issues, answer, and comment.</li>\n        <li>All authenticated roles can comment on posts.</li>\n      </ul>\n    </div>\n\n    <ol style=\"margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;\">\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Setup Project</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Create a new Flint project and generate models:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">flint create blog_platform\ncd blog_platform\nflint --make-model User\nflint --make-model Post\nflint --make-model Comment\nflint migrate</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Create Models</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Define User, Post, and Comment models with relations:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class User extends Model&lt;User&gt; {\n  User() : super(() =&gt; User());\n\n  String? get name =&gt; getAttribute('name');\n  String? get email =&gt; getAttribute('email');\n  String? get role =&gt; getAttribute('role');\n\n  @override\n  Table get table =&gt; Table(\n        name: 'users',\n        columns: [\n          Column(name: 'name', type: ColumnType.string, length: 255),\n          Column(name: 'email', type: ColumnType.string, length: 255),\n          Column(name: 'password', type: ColumnType.string),\n          Column(name: 'role', type: ColumnType.string, length: 50),\n        ],\n      );\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Role Guard Middleware</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Gate publishing routes to admin and contributor roles:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class RoleGuard extends Middleware {\n  RoleGuard(this.allowedRoles);\n  final List&lt;String&gt; allowedRoles;\n\n  @override\n  Handler handle(Handler next) {\n    return (Context ctx) async {\n      final user = await ctx.req.user;\n      if (user == null) return ctx.res.status(401).json({'error': 'Unauthorized'});\n      final role = user['role'];\n      if (!allowedRoles.contains(role)) return ctx.res.status(403).json({'error': 'Forbidden'});\n      return next(ctx);\n    };\n  }\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Create Controllers</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Publish posts with role checks and comment support:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/posts', (Context ctx) async {\n  final data = await ctx.req.validate({\n    'title': 'required|string',\n    'content': 'required|string',\n  });\n  final user = await ctx.req.user;\n  final post = await Post().create({\n    'title': data['title'],\n    'content': data['content'],\n    'slug': data['title'].toString().toLowerCase().replaceAll(' ', '-'),\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'post': post}, status: 201);\n}).useMiddleware(RoleGuard(['admin', 'contributor']));</code></pre>\n      </li>\n    </ol>\n  </section>\n\n  <section class=\"examples-section\" style=\"margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);\">\n    <h2 style=\"font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;\">Questions &amp; Answers Tutorial</h2>\n    <p style=\"color:#94a3b8;margin:0 0 8px;\">Build a Q&amp;A system with role-based posting for issues and answers.</p>\n    <span style=\"display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(56,189,248,0.3);background:rgba(56,189,248,0.1);font-size:11px;font-weight:600;color:#bae6fd;\">Intermediate</span>\n\n    <div style=\"margin-top:24px;\">\n      <h3 style=\"font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;\">Roles &amp; Permissions</h3>\n      <ul style=\"list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;\">\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">dev</code> can post questions/issues and answers.</li>\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">admin</code> and <code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">contributor</code> can answer and comment as well.</li>\n        <li>All authenticated roles can comment on Q&amp;A threads.</li>\n      </ul>\n    </div>\n\n    <ol style=\"margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;\">\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Models</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Define Question and Answer models:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class Question extends Model&lt;Question&gt; {\n  Question() : super(() =&gt; Question());\n  @override\n  Table get table =&gt; Table(\n        name: 'questions',\n        columns: [\n          Column(name: 'title', type: ColumnType.string, length: 255),\n          Column(name: 'body', type: ColumnType.text),\n          Column(name: 'user_id', type: ColumnType.string),\n          Column(name: 'status', type: ColumnType.string, length: 50),\n        ],\n      );\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Routes &amp; Role Guard</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Allow devs to post questions and answers:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/questions', (Context ctx) async {\n  final data = await ctx.req.validate({\n    'title': 'required|string',\n    'body': 'required|string',\n  });\n  final user = await ctx.req.user;\n  final question = await Question().create({\n    'title': data['title'],\n    'body': data['body'],\n    'status': 'open',\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'question': question}, status: 201);\n}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Comments</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Reuse the comment model to attach comments to questions or answers:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/questions/:id/comments', (Context ctx) async {\n  final data = await ctx.req.validate({'content': 'required|string'});\n  final user = await ctx.req.user;\n  final comment = await Comment().create({\n    'content': data['content'],\n    'question_id': ctx.req.param('id'),\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'comment': comment});\n}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>\n      </li>\n    </ol>\n  </section>\n</div>\n","{{FLINT_DART_VERSION}}","v 1.3.2"),"examples-root",B.cq))}}
A.dz.prototype={
dq(a){A.pj(a)
this.q(new A.lx(this))
A.c5(B.ax,new A.ly(this))},
fl(a){A.pj(a)
this.q(new A.lu(this))
A.c5(B.ax,new A.lv(this))},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="solid",a1="div",a2="#10b981",a3="#06b6d4",a4="#8b5cf6",a5="#f59e0b",a6="100%",a7="color.bg",a8="color.text",a9="color.line",b0="color.panel",b1="color.muted",b2=$.qJ(),b3=b.d
if(!(b3<4))return A.t(b2,b3)
s=b2[b3]
b3=A.a(a,B.d,a,a,a,new A.b(a7,a),a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,B.c,a,a,a,B.x,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,a,a)
b2=t.G
r=A.a(a,a,a,a,a,A.aM(A.e([A.bk(B.i1,B.iR),A.bk(B.i_,B.iV),A.aW(155,B.ci)],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)
r=A.a(a,a,a,a,a,new A.b(a7,a),a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,A.a(a,a,a,a,a,A.aM(A.e([A.bk(B.ca,B.cg),A.bk(B.hX,B.ch),A.aW(160,A.e([new A.L(new A.b(a7,a),0),new A.L(new A.b(b0,a),55),new A.L(new A.b("color.panelStrong",a),100)],b2))],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,r,a,a,a,a,a,a,a,a,a,a,B.u,a,a,a,a,B.a2,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,a,a)
q=A.a(a,B.d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.e,a,a,a,a,a,a,a,a,a,a,a,a,40,a,B.M,a,a,a,a,a,a,a,A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,A.eA(A.e([new A.aG("minmax("+A.a_(B.a3,!1)+", "+A.a_(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.a_(540,!1)+", "+A.a_(new A.F("1.18fr"),!1)+")")],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,64,a,A.eA(A.e([new A.aG("minmax("+A.a_(B.a3,!1)+", "+A.a_(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.a_(620,!1)+", "+A.a_(new A.F("1.2fr"),!1)+")")],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a)
q=A.y([b.fO("flint create my_app --template=fullstack"),b.fP(s)],q)
p=A.i(B.a,a,B.ff,B.a,B.a)
q=A.j(a,[q])
r=A.i(B.a,a,r,B.a,B.a)
q=A.j(a,[new A.k(a1,p,q)])
p=A.bM([A.v("THE UNIFIED REQUEST LIFECYCLE",B.bL),A.aq("One Language From DOM to Database",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,32,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("No REST code generation drift. No dual TypeScript/Go models. Single unified typed contracts across the entire stack.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,680,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aw)
o=$.qC()
n=b.aL(new A.d(a2),"Pure Dart widgets rendered on server or client with instant hydration.",o,"01","SSR & Reactive Signals","Declarative Web UI")
m=$.tL()
l=b.aL(new A.d(a3),"Typed route params, session/JWT auth, and rate-limiting filters.",m,"02","Middleware Pipeline","Routing & Auth Guard")
k=$.ed()
j=b.aL(new A.d("#3b82f6"),"Controllers receive typed requests and return JSON or SSR Page views.",k,"03","Business Logic Core","Controller & Service")
i=$.qz()
h=b.aL(new A.d(a4),"PostgreSQL / MySQL / SQLite query builder with automated tenant isolation.",i,"04","Row-Level Security","ORM & RLS Gateway")
g=$.cK()
h=A.hC([n,l,j,h,b.aL(new A.d(a5),"Sub-millisecond broadcast channels for real-time live events.",g,"05","WebSocket Pub/Sub","Realtime Channels")],"repeat(auto-fit, minmax(220px, 1fr))",16)
j=A.i(B.a,a,B.eD,B.a,B.a)
h=A.j(a,[h])
l=A.i(B.a,a,B.eG,B.a,B.a)
h=A.j(a,[p,new A.k(a1,j,h)])
j=A.bM([A.v("BATTERIES INCLUDED",B.eM),A.aq("Everything You Need For Production Web Apps",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("No need to stitch together 15 disparate npm packages. Flint Dart comes with fully integrated, battle-tested fullstack primitives.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aw)
p=t.s
n=b.ap(new A.d(a2),A.e(["Controller routing with req.params, req.query, req.json()","Typed middleware guards for auth & permissions","Automatic HTTP error handling & JSON responses"],p),"High-speed asynchronous HTTP router with parametric matching, route grouping, middleware pipelines, and automatic CORS & rate-limiting.",k,"Sub-Millisecond Controller Routing")
o=b.ap(new A.d(a3),A.e(["Zero HTML/JSX templates: 100% typed Dart widget tree","Tokenized design system with instant dark/light themes","Canvas 2D, WebGL 3D scenes & reactive signal state"],p),"Compose web pages using pure Dart components. Server-Side Render (SSR) for blazing SEO speeds with lightweight client hydration.",o,"Pure Dart Declarative UI & SSR")
i=b.ap(new A.d("#3b82f6"),A.e(["Type-safe relations: hasMany, belongsTo, withRelation()","Automatic migration runner and seeder pipelines","Owner-level policy guards for multi-tenant SaaS"],p),"Fluent query builder for PostgreSQL, MySQL, and SQLite. Built-in Row-Level Security (RLS) guarantees automated tenant isolation.",i,"Flint ORM & Row-Level Security")
f=b.ap(new A.d(a5),A.e(["Channel broadcast pub/sub with room filtering","Live heartbeat & automatic reconnect handlers","Sub-millisecond packet serialization in Dart"],p),"Multiplex live WebSocket connections into named channels. Stream live events, user presence, and collaborative updates seamlessly.",g,"Real-Time WebSockets & Channels")
m=b.ap(new A.d(a4),A.e(["Session cookies with SameSite & Secure flags","Role-based authorization (@hasRole, _hasPermission)","Pre-built login, register, and password reset flows"],p),"Turnkey authentication engine supporting encrypted HTTP cookie sessions, JWT bearer tokens, password hashing, and role hierarchies.",m,"Built-in Auth, Sessions & RBAC")
e=$.tF()
e=A.hC([n,o,i,f,m,b.ap(new A.d("#ec4899"),A.e(["Single binary deployment: No Node runtime dependencies","Instant sub-10ms container cold starts on Linux","Built-in static asset compression and caching headers"],p),"Compile your entire full-stack app into a single native AOT executable or lightweight 25MB Docker container with instant cold starts.",e,"Zero-Config Native Deployment")],"repeat(auto-fit, minmax(320px, 1fr))",24)
p=A.i(B.a,a,B.bI,B.a,B.a)
e=A.j(a,[e])
m=A.i(B.a,a,B.bO,B.a,B.a)
e=A.j(a,[j,new A.k(a1,p,e)])
p=A.a(a,a,a,a,a,new A.b(b0,a),a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.aU,a,a,a,a,a,new A.F(a6),B.aP,a,a,a,a,a,a,a,a,B.aC,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,B.aS,a)
j=A.bM([A.v("WHY CHOOSE DART FOR FULLSTACK",B.bL),A.aq("Stack Comparison & Developer Experience",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("How Flint Dart stacks up against traditional ecosystems like Node.js, Next.js, Go Gin, and Python Django.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aw)
f=A.hC([b.bl("Single Native Binary (~25MB)",!0,"Pure Dart (Single Language)","< 0.5ms Async Core","Built-in ORM + RLS Security","Flint Dart","The Unified Stack","100% Shared End-to-End","Pure Dart Declarative + SSR"),b.bl("Heavy Node.js + node_modules",!1,"TypeScript + Node Runtime","~12ms Cold Overhead","Prisma / Drizzle third-party","Next.js / Node","JS/TS Ecosystem","Fragile npm ecosystem drift","React JSX + Server Components"),b.bl("Single Go Binary",!1,"Go (Backend) + JS (Frontend)","< 0.5ms Compiled","Gorm third-party","Go + Gin / Fiber","Backend Only","Requires code generation (OpenAPI)","Split stack (React/Vue needed)"),b.bl("Interpreted / Heavy venv",!1,"Python (Backend) + JS (Frontend)","~25ms Interpreter overhead","Django ORM","Python / Django","Classic MVC","Dynamic / Partial type hints","HTML Django templates")],"repeat(auto-fit, minmax(260px, 1fr))",16)
i=A.i(B.a,a,B.fp,B.a,B.a)
f=A.j(a,[f])
p=A.i(B.a,a,p,B.a,B.a)
f=A.j(a,[j,new A.k(a1,i,f)])
i=A.bM([A.v("PRODUCTION-READY STARTERS",B.fn),A.aq("Jumpstart Your Next Project in Seconds",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("Pre-configured fullstack templates with auth, database seeders, declarative UI dashboards, and API routes.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aw)
g=A.hC([b.bu(new A.d(a2),"flint create store --template=ecommerce","Full store with shopping cart, customer checkout, product catalogue, and order admin panel.",k,"Starter","E-Commerce Marketplace"),b.bu(new A.d(a3),"flint create saas_app --template=saas","Subscription billing ready, role permissions, analytics telemetry, and RLS tenant isolation.",$.ec(),"Popular","Multi-Tenant SaaS Admin"),b.bu(new A.d(a5),"flint create chat --template=realtime","WebSocket pub/sub rooms, live message streams, presence indicators, and notification tray.",g,"WebSocket","Real-Time Chat & Collab"),b.bu(new A.d(a4),"flint create publication --template=blog","Markdown publishing engine, comment threads, SEO metadata headers, and category archives.",$.fO(),"SSR & SEO","Multi-Author Blog & Media")],"repeat(auto-fit, minmax(280px, 1fr))",20)
k=A.i(B.a,a,B.bI,B.a,B.a)
g=A.j(a,[g])
j=A.i(B.a,a,B.bO,B.a,B.a)
g=A.j(a,[i,new A.k(a1,k,g)])
b2=A.a(a,a,a,a,a,A.aM(A.e([A.bk(B.c7,B.iU),new A.b(a7,a)],b2)),a,a,a,a,a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.aU,a,a,a,a,a,new A.F(a6),B.aP,a,a,a,a,a,a,a,a,B.aC,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,B.aS,a)
k=A.a(a,B.d,a,a,a,new A.b(b0,a),a,new A.m(1,B.L,a0),a,a,a,a,a,a,a,a,a,a,a,a,B.c,a,a,a,B.x,a,a,a,a,a,a,a,a,18,a,a,a,a,a,a,a,a,a,a,a,a,B.ad,a,a,820,a,a,a,a,a,a,a,a,a,B.hg,a,20,a,a,a,a,a,new A.ap(20,50,-15,new A.d("rgba(16, 185, 129, 0.2)")),a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)
i=A.a(a,B.d,a,a,a,new A.d("rgba(16, 185, 129, 0.15)"),a,a,a,a,a,a,a,a,a,a,new A.d(a2),a,a,a,B.e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,a,B.q,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,12,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,a,a,a)
o=A.H($.k4(),a,24)
i=A.i(B.a,a,i,B.a,B.a)
o=A.j(o,B.h)
n=A.aq("Start Building Fullstack Dart Apps Today",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,32,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a))
d=A.G("Install the Flint CLI, create your first project, and deploy native binaries in minutes.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,580,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a))
c=A.a(a,B.d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.k,a,a,a,a,a,a,a,a,a,a,15,900,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,46,a,a,a,a,a,a,a,B.h0,a,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)
c=A.q3([A.W(a,[A.v("Read Installation Guide",a),A.H($.bZ(),a,18)],c,"/guides/installation",a,B.j,a),A.W(a,[A.H($.fQ(),a,16),A.v("GitHub Repository",a)],B.aR,"https://github.com/flint-dart/flint_dart",a,B.y,B.B)],B.fM,12)
k=A.i(B.a,a,k,B.a,B.a)
c=A.j(a,[new A.k(a1,i,o),n,d,c])
b2=A.i(B.a,a,b2,B.a,B.a)
c=A.j(a,[new A.k(a1,k,c)])
return new A.ax(b.c,new A.k(a1,A.i(B.a,a,b3,B.a,B.a),A.j(a,[new A.k(a1,r,q),new A.k(a1,l,h),new A.k(a1,m,e),new A.k(a1,p,f),new A.k(a1,j,g),new A.k(a1,b2,c)])))},
fO(a){var s,r,q,p,o,n,m,l=null,k=A.a(l,B.d,l,l,l,new A.d("rgba(16, 185, 129, 0.12)"),l,new A.m(1,new A.d("rgba(16, 185, 129, 0.28)"),"solid"),l,l,l,l,l,l,l,l,new A.d("#10b981"),l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,900,8,l,l,l,l,l,l,l,l,0.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b2,l,999,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),j=A.H($.ec(),new A.d("#10b981"),15),i=A.v("FLINT DART FULL-STACK WEB FRAMEWORK",l)
k=A.i(B.a,l,k,B.a,B.a)
i=A.j(l,[j,i])
j=A.b5("Server, ORM, Web UI & Realtime. All Pure Dart.",A.a(l,l,l,l,l,A.aW(110,B.j7),B.am,l,l,l,l,l,l,l,l,l,new A.d("transparent"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.lA,900,l,l,l,l,l,l,l,l,l,l,l,l,1.05,B.aY,l,l,820,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.am,l,l,l,l,l,l))
s=A.aq("Build end-to-end full-stack web applications without JavaScript fatigue.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.text",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,22,800,l,l,l,l,l,l,l,l,l,l,l,l,1.35,B.aY,l,l,720,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.G("A cohesive web platform providing sub-millisecond controller routing, declarative pure-Dart UI components with SSR, type-safe ORM query builders, Row-Level Security, and bidirectional WebSockets in one unified runtime.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,B.az,l,l,680,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
q=A.a(l,B.d,l,l,new A.d0("blur("+A.E(14,!1)+")"),new A.d("rgba(3, 7, 18, 0.78)"),l,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),"solid"),l,l,l,l,l,l,l,l,B.C,l,l,l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,B.m,l,l,l,l,l,l,B.aZ,l,l,600,l,l,l,l,l,l,l,l,l,B.ay,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
p=A.y([A.v("$",B.bB),A.v(a,B.fK)],B.bE)
o=this.e
n=o?new A.d("rgba(16, 185, 129, 0.25)"):new A.d("rgba(255, 255, 255, 0.1)")
m=o?new A.d("#34d399"):B.C
m=A.a(l,B.d,l,l,l,n,l,l,l,l,l,l,l,l,l,l,m,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,800,6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b1,l,6,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.aZ("all 150ms ease"),l,l,l,l,l,l,l)
n=o?$.fP():$.fR()
n=A.H(n,o?new A.d("#34d399"):B.C,13)
o=A.ay(l,[n,A.v(this.e?"Copied":"Copy",l)],m,!1,!1,new A.lz(this,a),B.a,B.R,B.j,B.D)
q=A.i(B.a,l,q,B.a,B.a)
o=A.j(l,[p,o])
p=A.a(l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,15,900,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,46,l,l,l,l,l,l,l,B.bX,l,8,l,l,l,l,l,new A.ap(12,32,-10,new A.d("rgba(16, 185, 129, 0.5)")),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
return A.bM([new A.k("div",k,i),j,s,r,new A.k("div",q,o),A.q3([A.W(l,[A.v("Quickstart in 30s",l),A.H($.bZ(),l,18)],p,"/guides/installation",l,B.j,l),A.W(l,[A.H($.fO(),l,16),A.v("Full API Reference",l)],B.aR,"/api",l,B.y,B.B),A.W(l,[A.H($.cs(),l,16),A.v("Live Examples",l)],B.bN,"/examples",l,B.y,B.D)],B.bS,12)],B.bG)},
fP(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="solid",h="div",g="rgba(255, 255, 255, 0.1)",f="rgba(255, 255, 255, 0.03)",e=A.a(j,j,j,j,j,new A.d("#050b0a"),j,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),i),j,j,j,j,j,j,j,j,B.C,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.u,j,j,j,j,B.a2,12,j,j,j,j,j,new A.ap(28,70,-28,new A.d("rgba(0, 0, 0, 0.8)")),j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,2),d=A.a(j,B.d,j,j,j,new A.d(f),j,j,new A.m(1,new A.d(g),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.ay,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),c=A.y([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.bi,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.aK,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.L,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h))],B.bT),b=[]
for(s=0;r=$.qJ(),s<4;++s){q=k.d===s
p=q?900:600
o=q?B.C:B.a5
n=q?new A.d(g):B.v
m=q?new A.m(2,r[s].f,i):B.b9
l=r[s]
q=q?l.f:B.as
q=A.H(l.e,q,13)
r=r[s]
b.push(A.ay(j,[q,new A.a7("span",A.i(B.a,j,j,B.a,B.a),A.j(r.a,B.h))],new A.q(B.b0,j,j,j,j,j,j,j,B.k,6,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,12,p,j,j,o,j,j,j,j,j,j,j,j,j,n,6,j,j,j,m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,!1,new A.lB(k,s),B.a,B.R,B.j,B.D))}b=A.y(b,B.bx)
r=k.f
q=r?new A.d("#34d399"):new A.d("#94a3b8")
q=A.a(j,j,j,j,j,new A.d("rgba(255, 255, 255, 0.05)"),j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c0,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j)
q=A.ay(j,[A.H(r?$.fP():$.fR(),j,13)],q,!1,!1,new A.lC(k,a),B.a,B.R,B.j,B.D)
d=A.i(B.a,j,d,B.a,B.a)
q=A.j(j,[c,b,q])
b=A.a(j,B.d,j,j,j,new A.d("rgba(255, 255, 255, 0.02)"),j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.06)"),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
c=a.f
p=A.y([A.H(a.e,c,16),A.f5(a.b,B.bA),A.v("\u2022 "+a.c,B.bJ)],B.a8)
o=A.a(j,j,j,j,j,new A.d("rgba(16, 185, 129, 0.15)"),j,j,j,j,j,j,j,j,j,j,new A.d("#34d399"),j,j,j,j,j,j,j,j,j,j,j,j,j,j,11,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.bZ,j,4,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
n=A.v(a.d,j)
o=A.i(B.a,j,o,B.a,B.a)
n=A.j(j,[n])
b=A.i(B.a,j,b,B.a,B.a)
n=A.j(j,[p,new A.k(h,o,n)])
o=k.hA(a.x)
p=A.i(B.a,j,B.eQ,B.a,B.a)
o=A.j(j,[o])
m=A.a(j,B.d,j,j,j,new A.d(f),j,j,j,j,j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.08)"),i),j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
c=A.y([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j),B.a,B.a),A.j(j,B.h)),A.v(a.r,B.bw)],B.a8)
l=A.v("Flint Dart Full-Stack",B.bP)
m=A.i(B.a,j,m,B.a,B.a)
l=A.j(j,[c,l])
return new A.k(h,A.i(B.a,j,e,B.a,B.a),A.j(j,[new A.k(h,d,q),new A.k(h,b,n),new A.k(h,p,o),new A.k(h,m,l)]))},
aL(a,b,c,d,e,f){var s,r=null,q=A.a(r,r,r,r,r,new A.b("color.panel",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,B.x,r,r,r,r,r,r,r,r,10,r,r,r,A.a(r,r,r,r,r,r,r,new A.m(1,a,"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b9("translateY("+A.E(-3,!1)+")"),r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.aa,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.aZ("all 180ms ease"),r,r,r,r,r,r,r),p=A.a(r,B.d,r,r,r,new A.d("rgba(16, 185, 129, 0.12)"),r,r,r,r,r,r,r,r,r,r,a,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,r,r,B.q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,r,r,r,r),o=A.H(c,r,18)
o=A.y([new A.k("div",A.i(B.a,r,p,B.a,B.a),A.j(o,B.h)),A.v(d,B.fy)],B.aQ)
p=A.bM([A.f5(f,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,900,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),A.v(e,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,700,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))],B.bM)
s=A.G(b,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
return new A.k("div",A.i(B.a,r,q,B.a,B.a),A.j(r,[o,p,s]))},
ap(a,b,c,d,e){var s,r,q,p,o,n,m,l=null,k="color.line",j="color.text"
t.a.a(b)
s=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b(k,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,B.x,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.V,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=A.a(l,B.d,l,l,l,new A.d("rgba(16, 185, 129, 0.14)"),l,l,l,l,l,l,l,l,l,l,a,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,40,l,l,B.q,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,40,l,l,l,l)
q=A.H(d,l,20)
q=A.y([new A.k("div",A.i(B.a,l,r,B.a,B.a),A.j(q,B.h)),A.c4(e,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(j,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,17,900,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],B.bQ)
r=A.G(c,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,1.6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
p=A.a(l,l,l,l,l,l,l,l,l,l,l,l,new A.m(1,new A.b(k,l),"solid"),l,l,l,l,l,l,l,B.c,l,l,l,B.x,l,l,l,l,l,l,l,l,6,l,l,l,l,l,l,l,l,l,l,l,l,B.hy,l,l,l,l,l,l,l,l,l,l,l,l,B.bY,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=[]
for(n=0;n<3;++n){m=b[n]
o.push(A.y([A.H($.fP(),a,14),new A.a7("span",A.i(B.a,l,new A.q(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,600,l,l,new A.b(j,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.j(m,B.h))],B.a8))}p=A.i(B.a,l,p,B.a,B.a)
o=A.j(l,o)
return new A.k("div",A.i(B.a,l,s,B.a,B.a),A.j(l,[q,r,new A.k("div",p,o)]))},
bl(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m,l=this,k=null,j=b?new A.m(2,B.L,"solid"):new A.m(1,new A.b("color.line",k),"solid")
j=A.a(k,k,k,k,k,b?new A.d("rgba(16, 185, 129, 0.06)"):new A.b("color.bg",k),k,j,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,B.x,k,k,k,k,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ab,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
s=A.f5(f,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,b?B.L:new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,18,900,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=b?new A.d("rgba(16, 185, 129, 0.2)"):new A.d("rgba(255, 255, 255, 0.08)")
r=A.a(k,k,k,k,k,r,k,k,k,k,k,k,k,k,k,k,b?new A.d("#34d399"):new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,11,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.hj,k,4,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=A.v(g,k)
q=A.y([s,new A.k("div",A.i(B.a,k,r,B.a,B.a),A.j(k,[q]))],B.aQ)
r=l.ao("Language Stack",c,b)
s=l.ao("Type Consistency",h,b)
p=l.ao("HTTP Latency",d,b)
o=l.ao("Deployment Artifact",a,b)
n=l.ao("Frontend UI",i,b)
m=l.ao("ORM & Security",e,b)
return new A.k("div",A.i(B.a,k,j,B.a,B.a),A.j(k,[q,r,s,p,o,n,m]))},
ao(a,b,c){var s=null,r=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),q=c?800:500
return A.bM([r,A.v(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,c?B.C:new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.bM)},
bu(a,b,c,d,e,f){var s,r,q=null,p="div",o=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,B.x,q,q,q,q,q,q,q,q,16,q,q,q,q,q,B.m,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ab,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a(q,B.d,q,q,q,new A.d("rgba(16, 185, 129, 0.12)"),q,q,q,q,q,q,q,q,q,q,a,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,36,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,36,q,q,q,q),m=A.H(d,q,18)
n=A.i(B.a,q,n,B.a,B.a)
m=A.j(m,B.h)
s=A.a(q,q,q,q,q,new A.d("rgba(16, 185, 129, 0.15)"),q,q,q,q,q,q,q,q,q,q,a,q,q,q,q,q,q,q,q,q,q,q,q,q,q,11,800,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.bZ,q,4,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.v(e,q)
r=A.bM([A.y([new A.k(p,n,m),new A.k(p,A.i(B.a,q,s,B.a,B.a),A.j(q,[r]))],B.aQ),A.f5(f,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,16,900,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.G(c,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,13,q,q,q,q,q,q,q,q,q,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))],B.fb)
s=A.a(q,B.d,q,q,q,new A.d("rgba(0, 0, 0, 0.4)"),q,new A.m(1,new A.d("rgba(255, 255, 255, 0.08)"),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.m,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.b3,q,6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.v(b,B.fv)
n=A.ay(q,[A.H($.fR(),B.a5,12)],B.fz,!1,!1,new A.lD(this,b),B.a,B.R,B.j,B.D)
s=A.i(B.a,q,s,B.a,B.a)
n=A.j(q,[m,n])
return new A.k(p,A.i(B.a,q,o,B.a,B.a),A.j(q,[r,new A.k(p,s,n)]))},
hA(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.db.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.ep(""+q,2)
o=A.i(B.a,h,B.by,B.a,B.a)
p=A.j(p,B.h)
n=[]
if(!(r<a.length))return A.t(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aE)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a7("span",A.i(B.a,h,new A.q(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.j(j.a,B.h)))}s.push(A.y([new A.a7("span",o,p),new A.k("div",A.i(B.a,h,B.bD,B.a,B.a),A.j(h,n))],B.bU))}return A.bM(s,B.bR)}}
A.lx.prototype={
$0(){return this.a.e=!0},
$S:0}
A.ly.prototype={
$0(){var s=this.a
s.q(new A.lw(s))},
$S:0}
A.lw.prototype={
$0(){return this.a.e=!1},
$S:0}
A.lu.prototype={
$0(){return this.a.f=!0},
$S:0}
A.lv.prototype={
$0(){var s=this.a
s.q(new A.lt(s))},
$S:0}
A.lt.prototype={
$0(){return this.a.f=!1},
$S:0}
A.lz.prototype={
$1(a){A.aa(a)
return this.a.dq(this.b)},
$S:1}
A.lB.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.lA(s,this.b))},
$S:1}
A.lA.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.lC.prototype={
$1(a){A.aa(a)
return this.a.fl(this.b.w)},
$S:1}
A.lD.prototype={
$1(a){A.aa(a)
return this.a.dq(this.b)},
$S:1}
A.jb.prototype={}
A.fe.prototype={}
A.jc.prototype={}
A.cV.prototype={
gdz(){var s=J.M(this.c,"initialSection")
s=s==null?null:J.r(s)
return s==null?"introduction":s},
a4(){if(this.e)this.bh(this.gdz())},
bh(a){var s=0,r=A.bd(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$bh=A.be(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:l=B.jm.j(0,a)
k=l==null?a:l
q=3
s=6
return A.b0($.cb().eD(0,"/api/guides/section/"+A.V(k),t.P),$async$bh)
case 6:n=c
if(n.f&&n.b!=null)o.q(new A.lG(o,n))
else o.q(new A.lH(o))
q=1
s=5
break
case 3:q=2
j=p.pop()
o.q(new A.lI(o))
s=5
break
case 2:s=1
break
case 5:return A.bb(null,r)
case 1:return A.ba(p.at(-1),r)}})
return A.bc($async$bh,r)},
E(){var s,r,q=this,p=null,o=q.c,n=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(p,B.n,p,B.n),p,p,1152,p,p,p,p,p,p,p,p,p,new A.h(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("100%"),p,p,p,p),m=A.a(p,B.Q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,B.x,p,p,p,p,p,p,p,p,20,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.W,p,p,p,p,p,p,p,p,32,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.r_(q.gdz(),!1),k=q.e,j=q.d,i=J.al(o),h=i.j(o,"previousGuideTitle")
h=h==null?p:J.r(h)
s=i.j(o,"previousGuideUrl")
s=s==null?p:J.r(s)
r=i.j(o,"nextGuideTitle")
r=r==null?p:J.r(r)
i=i.j(o,"nextGuideUrl")
m=A.y([l,new A.hD(k,j,h,s,r,i==null?p:J.r(i))],m)
return new A.ax(o,new A.k("div",A.i(B.a,p,n,B.a,B.a),A.j(p,[m])))}}
A.lG.prototype={
$0(){var s=this.a,r=this.b.b
r.toString
r=J.M(r,"html")
r=r==null?null:J.r(r)
s.d=r==null?"":r
s.e=!1},
$S:0}
A.lH.prototype={
$0(){this.a.e=!1},
$S:0}
A.lI.prototype={
$0(){this.a.e=!1},
$S:0}
A.dA.prototype={
E(){var s,r,q,p,o,n=this,m=null,l="solid",k="div",j="color.line",i="color.panel",h="color.text",g="radius.md",f=n.c,e=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,22,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,1040,B.aT,m,m,m,m,m,m,m,m,B.b_,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m),d=t.G
d=A.a(m,m,m,m,m,A.aM(A.e([A.aW(135,A.e([new A.L(B.dQ,0),new A.L(B.di,48),new A.L(new A.b(i,m),100)],d)),new A.b(i,m)],d)),m,new A.m(1,new A.b(j,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,26,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.V,m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
s=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,24,m,m,m,m,m,B.m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,680,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.y([n.dA("FlintHardware"),n.dA("Robotics & Embedded Dart")],q)
p=A.b5("Declarative Embedded Systems & Robotics for Dart.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,34,760,m,m,m,m,m,m,m,m,m,m,m,m,1.08,B.l,m,m,m,B.f7,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
o=A.G("Build firmware, sensors, robotics state machines, and Wokwi simulation circuits in 100% pure Dart \u2014 compiled directly to ESP32, Raspberry Pi Pico, and STM32.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,1.6,B.l,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.i(B.a,m,r,B.a,B.a)
o=A.j(m,[q,p,o])
p=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
s=A.y([new A.k(k,r,o),A.y([A.W("View on GitHub",B.h,A.a(m,m,m,m,m,new A.b("color.accent",m),m,m,m,m,m,m,m,m,m,m,new A.b(i,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,14,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a1,m,new A.b(g,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"https://github.com/flint-dart/flint-hardware","_blank",B.j,m),A.W("Pub.dev",B.h,A.a(m,m,m,m,m,m,m,new A.m(1,new A.b(j,m),l),m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,14,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a1,m,new A.b(g,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"https://pub.dev/packages/flint_hardware","_blank",B.j,m)],p)],s)
d=A.i(B.a,m,d,B.a,B.a)
s=A.j(m,[s])
p=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
p=A.y([n.bo("\u26a1 Multi-MCU","Compile to MicroPython, Arduino C++, or C for ESP32 and RP2040."),n.bo("\ud83e\udd16 Robotics State Machine","Declarative state transitions with patrol, avoidance, and docking."),n.bo("\ud83d\udd79\ufe0f Drivers Pack","Built-in drivers for HC-SR04, MPU-6050, Differential Drive, and DHT22."),n.bo("\ud83c\udf10 Wokwi Simulator","Auto-generates diagram.json circuits for 1-click browser simulation.")],p)
o=A.a(m,m,m,m,m,new A.b(i,m),m,new A.m(1,new A.b(j,m),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.V,m,20,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=J.M(f,"contentHtml")
r=r==null?m:J.r(r)
r=A.ce("api-md markdown-body",r==null?"":r,"hardware-content",B.aG)
o=A.i(B.a,m,o,B.a,B.a)
r=A.j(m,[r])
e=A.i(B.a,m,e,B.a,B.a)
r=A.j(m,[new A.k(k,d,s),p,new A.k(k,o,r)])
return new A.ax(f,new A.k(k,A.i(B.a,m,B.au,B.a,B.a),A.j(m,[new A.k(k,e,r)])))},
dA(a){var s=null,r=A.a(s,s,s,s,s,B.dR,s,new A.m(1,B.dS,"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.aB,s,9999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,B.fB)
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
bo(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,220,s,s,s,s,s,s,B.a9,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.c4(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,15,800,s,s,s,s,s,s,s,s,s,s,s,s,s,B.hM,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.G(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.5,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))}}
A.dB.prototype={
E(){var s=null
return new A.ax(this.c,new A.k("div",A.i(B.a,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),B.a,B.a),A.j(s,[new A.eB(),new A.iL(),new A.ic(),new A.h5(),new A.iU(),new A.hp()])))}}
A.cZ.prototype={
gaf(){var s=t.fF.a(J.M(this.c,"question"))
s=s==null?null:J.aU(s,t.N,t.z)
return s==null?B.Y:s},
gbU(){var s=this.w.a
return s==null?this.gdC():s},
gdC(){var s,r,q=J.M(this.c,"answers")
if(t.j.b(q)){s=J.ct(q,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.mU()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O},
gbt(){var s=this.gaf().j(0,"slug")
s=s==null?null:J.r(s)
return s==null?"":s},
a4(){this.dm()
this.dW()},
bC(){this.dm()
this.dW()},
cW(){var s=this.w.b
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.c3()}s=this.z
if(s!=null){s.hL(0,1001,"Client disposed")
s.Q.bA(0)
B.f.bA(s.as)}s=this.y
if(s!=null)s.ag(0)},
E(){var s,r,q=this,p=null,o="Question",n="color.muted",m=q.c,l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(p,B.n,p,B.n),p,p,960,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,B.u,p,p,p,new A.h(34,16,34,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("100%"),p,p,p,p),k=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(28,28,28,28),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,0,p,p,p,p,p,p,new A.h(20,20,20,20),p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,B.i,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),i=q.gaf().j(0,"tag")
i=i==null?p:J.r(i)
if(i==null)i=o
s=A.i(B.a,p,A.a(p,p,p,p,p,new A.d("rgba(2, 132, 199, 0.08)"),p,new A.m(1,new A.d("rgba(2, 132, 199, 0.28)"),"solid"),p,p,p,p,p,p,p,p,new A.b("color.accent",p),p,B.ez,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(5,10,5,10),p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.a,B.a)
i=A.j(i,B.h)
r=q.gaf().j(0,"date")
r=r==null?p:J.r(r)
if(r==null)r=""
j=A.y([new A.k("div",s,i),A.v(r,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],j)
r=q.gaf().j(0,"title")
i=r==null?p:J.r(r)
if(i==null)i=o
i=A.b5(i,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,29,p,p,p,p,p,p,p,p,p,p,p,p,p,1.2,new A.h(0,0,0,0),p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
s=q.gaf().j(0,"body")
s=s==null?p:J.r(s)
if(s==null)s=""
s=A.G(s,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.75,new A.h(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=q.gaf().j(0,"author")
r=r==null?p:J.r(r)
if(r==null)r="Community"
r=A.v("By "+r,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=[new A.k("div",A.i(B.a,p,k,B.a,B.a),A.j(p,[j,i,s,r])),new A.cB(q.w,new A.n5(q),t.fp)]
k=J.al(m)
if(!(J.a9(k.j(m,"isAuthenticated"),!0)||B.p.gV()!=null))r.push(A.h2("/questions","Back to Questions","Create an account or sign in to answer this question and help improve the Flint knowledge base.",!1,"Sign in to answer"))
else if(J.a9(k.j(m,"canAnswer"),!0)||A.dI(["admin","contributor","dev"],t.N).H(0,B.p.gak(0)))r.push(q.eS())
else r.push(A.G("Your account can read answers but cannot post yet.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.warning",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)))
return new A.ax(m,new A.k("div",A.i(B.a,p,l,B.a,B.a),A.j(p,r)))},
eT(a){var s,r,q,p,o,n,m,l,k=null
t.p.a(a)
s=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
r=A.a(k,B.d,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,k,k,k,B.i,k,k,k,k,k,12,k,k,k,k,k,B.m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=A.aq("Answers",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.h(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
p=this.Q==="Live"
o=p?B.em:B.dC
n=p?B.aM:B.dD
o=A.a(k,B.d,k,k,k,n,k,new A.m(1,o,"solid"),k,k,k,k,k,k,k,k,k,k,k,k,B.k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.b1,k,999,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
n=A.i(B.a,k,A.a(k,k,k,k,k,p?B.dZ:B.ar,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,999,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k),B.a,B.a)
m=A.j(k,B.h)
l=this.Q
l=A.v(l,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,p?new A.b("color.primary",k):new A.b("color.warning",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,12,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=[A.y([q,new A.k("div",A.i(B.a,k,o,B.a,B.a),A.j(k,[new A.k("div",n,m),l]))],r)]
q=J.al(a)
if(q.gB(a))r.push(A.G("No answers yet. Be the first to help.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)))
else for(q=q.gv(a);q.m();)r.push(this.eR(q.gp(q)))
return new A.k("div",A.i(B.a,k,s,B.a,B.a),A.j(k,r))},
eR(a){var s,r,q,p,o,n,m,l=null,k="color.muted"
t.P.a(a)
s=J.al(a)
r=s.j(a,"id")
q=r==null?l:J.r(r)
p=J.a9(s.j(a,"can_edit"),!0)&&q!=null
o=q!=null&&this.x.H(0,q)
r=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(18,18,18,18),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,0,l,l,l,l,l,l,new A.h(16,16,16,16),l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
n=s.j(a,"body")
n=n==null?l:J.r(n)
if(n==null)n=""
n=A.G(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
m=A.a(l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,l,l,l,B.i,l,l,l,l,l,12,l,l,l,l,l,B.m,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
s=s.j(a,"author")
s=s==null?l:J.r(s)
if(s==null)s="Community"
s=[A.v("By "+s,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))]
if(p)s.push(A.ay(l,[A.H($.tN(),l,14),A.v("Delete",l)],l,!1,o,new A.mD(this,q),B.a,B.R,B.lF,B.D))
s=A.y(s,m)
return new A.k("div",A.i(B.a,l,r,B.a,B.a),A.j(l,[n,s]))},
eS(){var s,r,q,p,o=this,n=null,m=o.gaf().j(0,"slug"),l=m==null?n:J.r(m)
if(l==null)l=""
m=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,new A.h(22,22,22,22),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
q=o.f
if(q!=null){p=A.a(n,n,n,n,n,new A.d("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.G(q,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r.push(new A.k("div",A.i(B.a,n,p,B.a,B.a),A.j(q,B.h)))}r.push(A.f3(o.d.Z(0,"body"),o.e,"Your answer","body","Share the fix, explanation, or example...",!0,7,$.uv()))
q=o.r
r.push(A.ay(n,[A.H($.k5(),n,15),A.v("Post Answer",n)],n,!1,q,n,B.ah,B.w,B.j,B.Z))
s=A.ey(r,s,new A.mE(o,l))
return new A.k("div",A.i(B.a,n,m,B.a,B.a),A.j(n,[s]))},
aQ(a,b){return this.hx(a,b)},
hx(a6,a7){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aQ=A.be(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:if(t.m.b(a6))a6.preventDefault()
if(n.r){s=1
break}n.q(new A.n_(n))
b=n.d
a=t.N
a0=A.Y(a,t.a)
a1=B.b.D(b.a0("body")).length
if(a1===0)a0.i(0,"body",A.e(["The body field is required."],t.s))
else if(a1<10)a0.i(0,"body",A.e(["The body must be at least 10 characters."],t.s))
a2=new A.bQ(a0)
if(a0.gM(0)){g=n.ck(a2,"Please check your answer.")
n.q(new A.n0(n,a2))
B.o.P(0,"Answer not posted",g)
s=1
break}p=4
m=B.p.gV()
a1=$.cb()
a3=A.ha(b.b,a,t.X)
l=A.Y(a,a)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(a1.aj("/questions/"+a7+"/answers",a3,l,t.P),$async$aQ)
case 7:k=a9
j=k.b
s=k.f&&j!=null?8:9
break
case 8:i=J.M(j,"answer")
s=t.f.b(i)?10:12
break
case 10:n.d2(J.aU(i,a,t.z))
s=11
break
case 12:s=13
return A.b0(n.aN(),$async$aQ)
case 13:case 11:b.im(0,A.e(["body"],t.s))
n.q(new A.n1(n))
B.o.ad("Answer posted","Added to the thread.")
s=1
break
case 9:h=A.cc(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post answer."
g=n.ck(h,l)
n.q(new A.n2(n,h,g))
B.o.P(0,"Answer not posted",g)
p=2
s=6
break
case 4:p=3
a5=o.pop()
l=A.aL(a5)
if(l instanceof A.bO){f=l
e=n.dP(f)
d=A.cc(e)
l=e
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post answer."
c=n.ck(d,l)
n.q(new A.n3(n,d,c))
B.o.P(0,"Answer not posted",c)}else{n.q(new A.n4(n))
B.o.P(0,"Answer not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$aQ,r)},
ck(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb2()
s=A.N(r).h("aO<2>")
return A.iy(new A.aO(r,s),3,s.h("n.E")).J(0," ")},
dP(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.mT(),t.N,t.z)
return null},
dW(){var s=this
if(s.gbt().length===0||s.y!=null)return
s.y=A.rn(B.fV,new A.mZ(s))},
dm(){var s,r=this,q=r.gbt()
if(q.length===0||r.z!=null)return
s=$.cb().a.iB("/questions/"+q+"/live")
s.ai(0,"connect",new A.mK(r))
s.ai(0,"connected",new A.mL(r))
s.ai(0,"answer.created",new A.mM(r))
s.ai(0,"answer.deleted",new A.mN(r))
s.ai(0,"disconnect",new A.mO(r))
s.ai(0,"error",new A.mP(r))
s.ai(0,"reconnect_failed",new A.mQ(r))
r.z=s
s.aT()},
aN(){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$aN=A.be(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:a=n.gbt()
if(J.bg(a)===0){s=1
break}p=4
m=B.p.gV()
f=$.cb()
e=A.V(a)
d=t.N
l=A.Y(d,d)
J.ar(l,"Accept","application/json")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
d=t.P
s=7
return A.b0(f.cX(0,"/api/questions/"+e,l,d),$async$aN)
case 7:k=a2
l=k.b
j=l==null?null:J.M(l,"answers")
if(!t.j.b(j)){s=1
break}l=J.ct(j,t.f)
f=l.$ti
d=A.bl(l,f.h("z<f,@>(n.E)").a(new A.mV()),f.h("n.E"),d)
c=A.aw(d,A.N(d).h("n.E"))
i=c
h=B.E.aa(n.gbU(),null)
g=B.E.aa(i,null)
if(J.a9(h,g)){s=1
break}l=n.w
l.a=l.$ti.c.a(i)
l.bL()
p=2
s=6
break
case 4:p=3
a0=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$aN,r)},
d2(a){var s,r,q
t.P.a(a)
s=this.gbU()
r=a.j(0,"id")
q=r==null?null:J.r(r)
if(q!=null&&J.qM(s,new A.mB(q)))return
this.w.ex(0,new A.mC(s,a))},
bf(a){return this.ft(A.U(a))},
ft(a2){var s=0,r=A.bd(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bf=A.be(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:a0=m.gbt()
if(J.bg(a0)===0||m.x.H(0,a2)){s=1
break}if(!A.e4(A.x(v.G.window).confirm("Delete this answer?"))){s=1
break}m.q(new A.mR(m,a2))
p=4
l=B.p.gV()
e=$.cb()
d=A.V(a0)
c=t.N
k=A.Y(c,c)
J.ar(k,"Accept","application/json")
J.ar(k,"X-Requested-With","FlintClient")
if(l!=null)J.ar(k,"Authorization","Bearer "+l)
s=7
return A.b0(e.ig("/questions/"+d+"/answers/"+a2+"/delete",k,t.P),$async$bf)
case 7:j=a4
if(j.f){m.dQ(a2)
B.o.ad("Answer deleted","Removed from the thread.")}else{k=j.b
if(k==null)b=null
else{k=J.M(k,"message")
k=k==null?null:J.r(k)
b=k}i=b==null?"Could not delete answer.":b
B.o.P(0,"Delete failed",i)}n.push(6)
s=5
break
case 4:p=3
a1=o.pop()
k=A.aL(a1)
if(k instanceof A.bO){h=k
g=m.dP(h)
k=g
if(k==null)i=null
else{k=J.M(k,"message")
k=k==null?null:J.r(k)
i=k}f=i==null?"Could not delete answer.":i
B.o.P(0,"Delete failed",f)}else B.o.P(0,"Delete failed","Could not delete answer.")
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.q(new A.mS(m,a2))
s=n.pop()
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$bf,r)},
dQ(a){var s=this.gbU()
if(!J.qM(s,new A.mX(a)))return
this.w.ex(0,new A.mY(s,a))}}
A.mU.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.n5.prototype={
$1(a){var s
t.gw.a(a)
s=this.a
return s.eT(a==null?s.gdC():a)},
$S:74}
A.mD.prototype={
$1(a){A.aa(a)
return this.a.bf(this.b)},
$S:1}
A.mE.prototype={
$1(a){return this.a.aQ(A.aa(a),this.b)},
$S:1}
A.n_.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.A
s.f=null},
$S:0}
A.n0.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.n1.prototype={
$0(){var s=this.a
s.r=!1
s.e=B.A
s.f=null},
$S:0}
A.n2.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.n3.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.n4.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post answer. Please try again."},
$S:0}
A.mT.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.mZ.prototype={
$1(a){t.E.a(a)
return this.a.aN()},
$S:21}
A.mK.prototype={
$1(a){var s
A.eb("[questions.live] connect")
s=this.a
s.q(new A.mJ(s))},
$S:3}
A.mJ.prototype={
$0(){return this.a.Q="Live"},
$S:0}
A.mL.prototype={
$1(a){var s
A.eb("[questions.live] connected payload: "+A.V(a))
s=this.a
s.q(new A.mI(s))},
$S:3}
A.mI.prototype={
$0(){return this.a.Q="Live"},
$S:0}
A.mM.prototype={
$1(a){A.eb("[questions.live] answer.created payload: "+A.V(a))
if(t.f.b(a))this.a.d2(J.aU(a,t.N,t.z))},
$S:3}
A.mN.prototype={
$1(a){var s,r
A.eb("[questions.live] answer.deleted payload: "+A.V(a))
if(t.f.b(a)){s=J.M(a,"id")
r=s==null?null:J.r(s)
if(r!=null)this.a.dQ(r)}},
$S:3}
A.mO.prototype={
$1(a){var s
A.eb("[questions.live] disconnect")
s=this.a
s.q(new A.mH(s))},
$S:3}
A.mH.prototype={
$0(){return this.a.Q="Reconnecting"},
$S:0}
A.mP.prototype={
$1(a){var s
A.eb("[questions.live] error")
s=this.a
s.q(new A.mG(s))},
$S:3}
A.mG.prototype={
$0(){return this.a.Q="Reconnecting"},
$S:0}
A.mQ.prototype={
$1(a){var s
A.eb("[questions.live] reconnect_failed")
s=this.a
s.q(new A.mF(s))},
$S:3}
A.mF.prototype={
$0(){return this.a.Q="Offline"},
$S:0}
A.mV.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.mB.prototype={
$1(a){var s=J.M(t.P.a(a),"id")
s=s==null?null:J.r(s)
return s===this.a},
$S:15}
A.mC.prototype={
$1(a){var s
t.gw.a(a)
s=a==null?this.a:a
s=A.aw(s,t.P)
s.push(this.b)
return s},
$S:27}
A.mR.prototype={
$0(){return this.a.x.t(0,this.b)},
$S:0}
A.mS.prototype={
$0(){return this.a.x.T(0,this.b)},
$S:0}
A.mX.prototype={
$1(a){var s=J.M(t.P.a(a),"id")
s=s==null?null:J.r(s)
return s===this.a},
$S:15}
A.mY.prototype={
$1(a){var s
t.gw.a(a)
s=a==null?this.a:a
s=J.uK(s,new A.mW(this.b))
s=A.aw(s,s.$ti.h("n.E"))
return s},
$S:27}
A.mW.prototype={
$1(a){var s=J.M(t.P.a(a),"id")
s=s==null?null:J.r(s)
return s!==this.a},
$S:15}
A.dN.prototype={
gh9(){var s,r,q=J.M(this.c,"questions")
if(t.j.b(q)){s=J.ct(q,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.n6()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O},
E(){var s,r,q,p,o,n=this,m=null,l="solid",k="div",j="/questions/ask",i="isAuthenticated",h="Ask a Question",g="color.line",f="color.panel",e="color.text",d="color.muted",c="rgba(52, 211, 153, 0.4)",b="rgba(52, 211, 153, 0.12)",a=n.gh9(),a0=n.ha(a),a1=n.c,a2=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,28,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(m,B.n,m,B.n),m,m,1152,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(48,16,48,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,B.u,m,m,m,new A.h(34,16,34,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m),a3=a.length,a4=a0.length,a5=A.a(m,m,m,m,m,new A.b(f,m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(40,40,40,40),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,new A.h(24,24,24,24),m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a6=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,18,m,m,m,m,m,B.m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a7=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,720,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a8=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a8=A.y([n.cl("Community"),n.cl("Q&A")],a8)
s=A.b5("Flint Questions",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(e,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,32,750,m,m,m,m,m,m,m,m,m,m,m,m,1.1,new A.h(0,0,0,0),m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,40,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.G("Ask practical Flint Dart questions, share solutions, and keep answers easy to find for the next developer.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(d,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,1.7,new A.h(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a7=A.i(B.a,m,a7,B.a,B.a)
r=A.j(m,[a8,s,r])
s=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.n,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m)
a8=A.a(m,B.d,m,m,m,new A.d(b),m,new A.m(1,new A.d(c),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(10,16,10,16),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.H($.tI(),m,16)
p=J.al(a1)
o=J.a9(p.j(a1,i),!0)||B.p.gV()!=null?h:"Sign in to Ask"
a8=[A.W(m,[q,A.v(o,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.primary",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],a8,j,m,B.j,m)]
if(!(J.a9(p.j(a1,i),!0)||B.p.gV()!=null)){q=A.a(m,B.d,m,m,m,new A.d("rgba(14, 165, 233, 0.1)"),m,new A.m(1,new A.d("rgba(125, 211, 252, 0.34)"),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(10,16,10,16),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a8.push(A.W(m,[A.H($.k3(),m,16),A.v("Create account",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.accent",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],q,"/questions/ask?mode=register",m,B.j,m))}a6=A.y([new A.k(k,a7,r),A.y(a8,s)],a6)
a7=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a3=n.cm(""+a3,"Questions")
a4=n.cm(""+a4,"Topics")
a3=A.y([a3,a4,n.cm(J.a9(p.j(a1,"canAnswer"),!0)||A.dI(["admin","contributor","dev"],t.N).H(0,B.p.gak(0))?"Open":"Read","Participation")],a7)
a3=[new A.k(k,A.i(B.a,m,a5,B.a,B.a),A.j(m,[a6,a3])),n.hD(a0)]
if(a.length===0){a4=A.a(m,m,m,m,m,new A.b(f,m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(28,28,28,28),m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a5=A.aq("No questions yet",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(e,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,22,700,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a6=A.G("Start the first thread and help shape the Flint knowledge base.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(d,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a7=A.W(h,B.h,A.a(m,m,m,m,m,new A.d(b),m,new A.m(1,new A.d(c),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(9,14,9,14),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("max-content"),m,m,m,m),j,m,B.j,m)
a3.push(new A.k(k,A.i(B.a,m,a4,B.a,B.a),A.j(m,[a5,a6,a7])))}else a3.push(n.h8(a))
return new A.ax(a1,new A.k(k,A.i(B.a,m,a2,B.a,B.a),A.j(m,a3)))},
hD(a){var s,r,q,p,o,n,m=null
t.a.a(a)
if(a.length===0)return A.cr("span",[],A.Y(t.N,t.X))
s=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=[]
for(q=A.q_(a,0,A.fM(10,"count",t.S),A.au(a).c),p=q.$ti,q=new A.by(q,q.gk(0),p.h("by<as.E>")),p=p.h("as.E");q.m();){o=q.d
if(o==null)o=p.a(o)
n=A.i(B.a,m,new A.q(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,700,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.a,B.a)
o=A.j(o,B.h)
r.push(new A.k("div",A.i(B.a,m,new A.q(new A.h(7,12,7,12),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.panel",m),999,new A.m(1,new A.b("color.line",m),"solid"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.a,B.a),A.j(m,[new A.a7("span",n,o)])))}return new A.k("div",A.i(B.a,m,s,B.a,B.a),A.j(m,r))},
h8(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="span",c="color.muted"
t.p.a(a)
s=A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,B.e,e,e,e,e,e,e,e,e,e,e,e,e,14,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)
r=[]
for(q=a.length,p=t.P,o=0;o<a.length;a.length===q||(0,A.aE)(a),++o){n=p.a(a[o])
m=J.al(n)
l=m.j(n,"title")
k=l==null?e:J.r(l)
if(k==null)k="Untitled question"
l=m.j(n,"href")
j=l==null?e:J.r(l)
if(j==null)j="/questions"
l=m.j(n,"tag")
i=l==null?e:J.r(l)
if(i==null)i="General"
l=m.j(n,"excerpt")
h=l==null?e:J.r(l)
if(h==null)h=""
l=m.j(n,"author")
g=l==null?e:J.r(l)
if(g==null)g="Community"
n=m.j(n,"date")
f=n==null?e:J.r(n)
if(f==null)f=""
n=this.cl(i)
m=f.length===0?"Recently asked":f
m=[A.y([n,new A.a7(d,A.i(B.a,e,new A.q(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,e,e,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(m,B.h))],new A.q(e,e,e,e,e,e,e,e,B.c,10,B.d,e,e,e,e,B.i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)),new A.a7("h2",A.i(B.a,e,new A.q(e,new A.h(0,0,0,0),e,e,e,new A.F("100%"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,20,700,1.35,e,new A.b("color.text",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(k,B.h))]
if(h.length!==0)m.push(new A.a7("p",A.i(B.a,e,new A.q(e,new A.h(0,0,0,0),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,14,e,1.65,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(h,B.h)))
m.push(A.y([new A.a7(d,A.i(B.a,e,new A.q(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,e,e,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j("By "+g,B.h)),A.y([new A.a7(d,A.i(B.a,e,new A.q(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,700,e,e,new A.b("color.primary",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j("Open thread",B.h)),A.H($.bZ(),e,14)],new A.q(e,e,e,e,e,e,e,e,B.c,6,B.d,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e))],new A.q(e,e,e,e,e,e,e,e,B.c,12,B.d,e,B.m,e,e,B.i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)))
r.push(A.W(e,[new A.k("div",A.i(B.a,e,new A.q(e,e,e,e,e,e,e,e,B.e,12,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(e,m))],new A.q(new A.h(20,20,20,20),e,new A.F("100%"),e,0,e,e,e,B.F,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b("color.panel",e),16,new A.m(1,new A.b("color.line",e),"solid"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),j,e,B.j,e))}return new A.k("div",A.i(B.a,e,s,B.a,B.a),A.j(e,r))},
cl(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
cm(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,"1 1 132px",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,132,s,s,s,s,s,s,new A.h(14,14,14,14),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.G(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,22,800,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(0,0,0,0),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.G(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(2,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))},
ha(a){var s,r,q,p,o,n
t.p.a(a)
s=A.dH(t.N)
r=A.e([],t.s)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.aE)(a),++p){o=J.M(a[p],"tag")
n=o==null?null:B.b.D(J.r(o))
if(n==null||n.length===0)continue
if(s.t(0,n.toLowerCase()))B.f.t(r,n)}return r}}
A.n6.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.dQ.prototype={
E(){var s,r,q,p,o,n=this,m=null,l=n.c,k=t.fF.a(J.M(l,"project")),j=k==null?m:J.aU(k,t.N,t.z)
if(j==null)j=B.Y
k=j.j(0,"title")
s=k==null?m:J.r(k)
if(s==null)s="Flint build"
r=n.fW(j.j(0,"images"))
q=n.fY(j.j(0,"links"))
k=j.j(0,"built_with")
p=k==null?m:J.r(k)
if(p==null)p=""
k=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,24,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(m,B.n,m,B.n),m,m,1050,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(48,16,48,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,B.u,m,m,m,new A.h(34,16,34,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m)
o=[n.fM(j,s,p,q)]
if(r.length!==0)o.push(n.fS(s,r))
o.push(n.fj(j,q))
return new A.ax(l,new A.k("div",A.i(B.a,m,k,B.a,B.a),A.j(m,o)))},
fM(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=null,h="color.muted"
t.P.a(a)
t.p.a(d)
s=A.a(i,i,i,i,i,new A.b("color.panel",i),i,new A.m(1,new A.b("color.line",i),"solid"),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,18,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(40,40,40,40),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,new A.h(24,24,24,24),i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=[this.dU("Built with Flint")]
if(c.length!==0)q.push(this.dU(c))
r=A.y(q,r)
q=A.b5(b,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.text",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,32,800,i,i,i,i,i,i,i,i,i,i,i,i,1.12,new A.h(0,0,0,0),i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,44,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
p=a.j(0,"description")
p=p==null?i:J.r(p)
if(p==null)p=""
p=A.G(p,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(h,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.75,new A.h(0,0,0,0),i,i,780,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,14,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=a.j(0,"author")
n=n==null?i:J.r(n)
if(n==null)n="Flint developer"
n=A.v("By "+n,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(h,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=[]
for(k=d.length,j=0;j<d.length;d.length===k||(0,A.aE)(d),++j)l.push(this.dt(d[j]))
o=A.y([n,A.y(l,m)],o)
return new A.k("div",A.i(B.a,i,s,B.a,B.a),A.j(i,[r,q,p,o]))},
fS(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
t.a.a(b)
s=A.a(g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.e,g,g,g,g,g,g,g,g,g,g,g,g,14,g,"1fr",g,g,g,g,g,g,g,g,g,g,g,g,g,g,A.a(g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,"repeat(3, minmax(0, 1fr))",g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
r=[]
for(q=a+" screenshot ",p=t.N,o=t.X,n=t.eh,m=t.ct,l=m.h("as.E"),k=0;k<b.length;k=j){j=k+1
i=A.ai(["src",b[k],"alt",q+j,"loading","lazy","style",B.jp],p,o)
h=A.aw(new A.ad(B.h,n.a(A.pi()),m),l)
h.$flags=1
r.push(new A.k("div",A.i(B.a,g,new A.q(g,g,g,g,g,g,210,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.b("color.panelStrong",g),18,new A.m(1,new A.b("color.line",g),"solid"),g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),B.a,B.a),A.j(g,[new A.a7("img",i,h)])))}return new A.k("div",A.i(B.a,g,s,B.a,B.a),A.j(g,r))},
fj(a,b){var s,r,q,p,o,n,m,l=null,k="solid",j="color.line",i="color.text",h="color.muted",g=t.P
g.a(a)
t.p.a(b)
s=A.a(l,B.Q,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,B.x,l,l,l,l,l,l,l,l,18,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.W,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b(j,l),k),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,B.a4,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(22,22,22,22),l,18,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
q=A.aq("What the app does",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(i,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,22,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
p=a.j(0,"what_it_does")
p=p==null?l:J.r(p)
if(p==null)p=""
p=A.G(p,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,15,l,l,l,l,l,l,l,l,l,l,l,l,l,1.75,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.i(B.a,l,r,B.a,B.a)
p=A.j(l,[q,p])
q=A.a(l,l,l,l,l,new A.b("color.panelStrong",l),l,new A.m(1,new A.b(j,l),k),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("min(300px, 100%)"),l,l,l,l),l,l,l,l,l,l,l,l,new A.h(18,18,18,18),l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
o=[A.aq("Project links",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(i,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))]
n=b.length
if(n===0)o.push(A.G("No external links were added.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)))
else for(m=0;m<b.length;b.length===n||(0,A.aE)(b),++m)o.push(this.dt(g.a(b[m])))
g=A.a(l,B.d,l,l,l,new A.d("rgba(14, 165, 233, 0.09)"),l,new A.m(1,new A.d("rgba(125, 211, 252, 0.32)"),k),l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,l,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.h(9,12,9,12),l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o.push(A.W(l,[A.H($.pL(),l,15),A.v("Back to showcase",l)],g,"/showcase",l,B.j,l))
return A.y([new A.k("div",r,p),new A.k("div",A.i(B.a,l,q,B.a,B.a),A.j(l,o))],s)},
dt(a){var s,r,q,p,o=null
t.P.a(a)
s=J.al(a)
r=s.j(a,"url")
r=r==null?o:J.r(r)
if(r==null)r="#"
q=A.a(o,B.d,o,o,o,new A.d("rgba(52, 211, 153, 0.1)"),o,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.k,o,o,o,o,o,o,o,o,o,o,o,o,8,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(9,13,9,13),o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
p=A.H($.tH(),o,15)
s=s.j(a,"label")
s=s==null?o:J.r(s)
return A.W(o,[p,A.v(s==null?"Open link":s,o)],q,r,"_blank",B.j,o)},
dU(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
fW(a){var s
if(t.j.b(a)){s=J.k8(a,new A.ne(),t.N)
s=A.aw(s,s.$ti.h("as.E"))
return s}return B.aF},
fY(a){var s,r
if(t.j.b(a)){s=J.ct(a,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.nf()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O}}
A.ne.prototype={
$1(a){return J.r(a)},
$S:17}
A.nf.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.dR.prototype={
gh7(){var s,r,q=J.M(this.c,"projects")
if(t.j.b(q)){s=J.ct(q,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.ni()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O},
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="isAuthenticated",j="/showcase/submit",i="color.line",h="color.panel",g="color.text",f="color.muted",e="rgba(52, 211, 153, 0.4)",d="rgba(52, 211, 153, 0.12)",c=o.gh7(),b=o.c,a=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,28,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(n,B.n,n,B.n),n,n,1152,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(48,16,48,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,B.u,n,n,n,new A.h(34,16,34,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F("100%"),n,n,n,n),a0=c.length,a1=A.a(n,n,n,n,n,new A.b(h,n),n,new A.m(1,new A.b(i,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,24,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(40,40,40,40),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,new A.h(24,24,24,24),n,24,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a2=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,18,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a3=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,760,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a4=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a4=A.y([o.br("Built with Flint"),o.br("Community apps")],a4)
s=A.b5("See what developers are shipping with Flint",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(g,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,32,800,n,n,n,n,n,n,n,n,n,n,n,n,1.1,new A.h(0,0,0,0),n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,43,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r=A.G("A living gallery of dashboards, SaaS products, tools, portals, and backend-first fullstack apps built with pure Dart, Flint Dart, and Flint UI.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(f,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,1.7,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a3=A.i(B.a,n,a3,B.a,B.a)
r=A.j(n,[a4,s,r])
a4=J.al(b)
s=J.a9(a4.j(b,k),!0)||B.p.gV()!=null?j:"/showcase/submit?mode=register"
q=A.a(n,B.d,n,n,n,new A.d(d),n,new A.m(1,new A.d(e),m),n,n,n,n,n,n,n,n,n,n,n,n,B.k,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(10,16,10,16),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
p=A.H($.k4(),n,16)
a4=J.a9(a4.j(b,k),!0)||B.p.gV()!=null?"Submit your build":"Create and submit"
a2=A.y([new A.k(l,a3,r),A.W(n,[p,A.v(a4,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))],q,s,n,B.j,n)],a2)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.y([o.cp(""+a0,"Community builds"),o.cp("3","Images per build"),o.cp("2","Links per build")],s)
s=[new A.k(l,A.i(B.a,n,a1,B.a,B.a),A.j(n,[a2,s]))]
if(c.length===0){a0=A.a(n,n,n,n,n,new A.b(h,n),n,new A.m(1,new A.b(i,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(28,28,28,28),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a1=A.aq("No builds submitted yet",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(g,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,22,800,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a2=A.G("Be the first developer to show what Flint can do in production.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(f,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a3=A.a(n,B.d,n,n,n,new A.d(d),n,new A.m(1,new A.d(e),m),n,n,n,n,n,n,n,n,n,n,n,n,B.k,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(9,14,9,14),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F("max-content"),n,n,n,n)
a3=A.W(n,[A.H($.k3(),n,15),A.v("Submit a build",n)],a3,j,n,B.j,n)
s.push(new A.k(l,A.i(B.a,n,a0,B.a,B.a),A.j(n,[a1,a2,a3])))}else s.push(o.h6(c))
return new A.ax(b,new A.k(l,A.i(B.a,n,a,B.a,B.a),A.j(n,s)))},
h6(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="color.muted"
t.p.a(a2)
s=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"repeat(2, minmax(0, 1fr))",a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
s=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,18,a0,"1fr",a0,a0,a0,a0,a0,a0,a0,A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"repeat(3, minmax(0, 1fr))",a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,s,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
r=[]
for(q=a2.length,p=t.P,o=0;o<a2.length;a2.length===q||(0,A.aE)(a2),++o){n=p.a(a2[o])
m=J.al(n)
l=m.j(n,"title")
k=l==null?a0:J.r(l)
if(k==null)k="Untitled build"
l=m.j(n,"href")
j=l==null?a0:J.r(l)
if(j==null)j="/showcase"
l=m.j(n,"excerpt")
i=l==null?a0:J.r(l)
if(i==null)i=""
l=m.j(n,"built_with")
h=l==null?a0:J.r(l)
if(h==null)h=""
l=m.j(n,"author")
g=l==null?a0:J.r(l)
if(g==null)g="Flint developer"
l=m.j(n,"date")
f=l==null?a0:J.r(l)
if(f==null)f=""
e=a.hm(m.j(n,"images"))
d=a.hn(m.j(n,"links"))
n=a.fT(k,e)
m=[a.br(h.length===0?"Flint app":h)]
l=e.length
if(l>1)m.push(a.br(""+l+" images"))
m=[A.y(m,new A.q(a0,a0,a0,a0,a0,a0,a0,a0,B.c,8,a0,a0,a0,a0,a0,B.i,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),new A.a7("h2",A.i(B.a,a0,new A.q(a0,new A.h(0,0,0,0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,20,800,1.3,a0,new A.b("color.text",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(k,B.h))]
if(i.length!==0)m.push(new A.a7("p",A.i(B.a,a0,new A.q(a0,new A.h(0,0,0,0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,1.65,a0,new A.b(a1,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(i,B.h)))
l="By "+g
l=f.length===0?l:l+" \xb7 "+f
c=A.i(B.a,a0,new A.q(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,12,a0,a0,a0,new A.b(a1,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a)
l=A.j(l,B.h)
b=d.length
b=b===0?"View build":""+b+" links"
m.push(A.y([new A.a7("span",c,l),A.y([new A.a7("span",A.i(B.a,a0,new A.q(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,12,800,a0,a0,new A.b("color.primary",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(b,B.h)),A.H($.bZ(),a0,14)],new A.q(a0,a0,a0,a0,a0,a0,a0,a0,B.c,6,B.d,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0))],new A.q(a0,a0,a0,a0,a0,a0,a0,a0,B.c,12,B.d,a0,B.m,a0,a0,B.i,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)))
r.push(A.W(a0,[n,new A.k("div",A.i(B.a,a0,new A.q(new A.h(18,18,18,18),a0,a0,a0,a0,a0,a0,a0,B.e,12,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(a0,m))],new A.q(a0,a0,a0,a0,0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.b("color.panel",a0),18,new A.m(1,new A.b("color.line",a0),"solid"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),j,a0,B.j,a0))}return new A.k("div",A.i(B.a,a0,s,B.a,B.a),A.j(a0,r))},
fT(a,b){var s,r,q=null
t.a.a(b)
if(b.length===0){s=A.a(q,B.d,q,q,q,new A.b("color.panelStrong",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.H($.ec(),B.dO,34)
return new A.k("div",A.i(B.a,q,s,B.a,B.a),A.j(q,[r]))}return A.cr("img",B.h,A.ai(["src",B.f.gF(b),"alt",a,"loading","lazy","style",B.jb],t.N,t.X))},
br(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
cp(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,"1 1 132px",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,132,s,s,s,s,s,s,new A.h(14,14,14,14),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.G(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,22,800,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(0,0,0,0),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.G(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(2,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))},
hm(a){var s
if(t.j.b(a)){s=J.k8(a,new A.ng(),t.N)
s=A.aw(s,s.$ti.h("as.E"))
return s}return B.aF},
hn(a){var s,r
if(t.j.b(a)){s=J.ct(a,t.f)
r=s.$ti
r=A.bl(s,r.h("z<f,@>(n.E)").a(new A.nh()),r.h("n.E"),t.P)
s=A.aw(r,A.N(r).h("n.E"))
return s}return B.O}}
A.ni.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.ng.prototype={
$1(a){return J.r(a)},
$S:17}
A.nh.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.d1.prototype={
gdc(){return J.a9(J.M(this.c,"canAnswer"),!0)||A.dI(["admin","contributor","dev","developer"],t.N).H(0,B.p.gak(0))},
E(){var s,r,q=this,p=null,o=q.c,n=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,24,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(p,B.n,p,B.n),p,p,980,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,B.u,p,p,p,new A.h(34,16,34,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("100%"),p,p,p,p),m=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(34,34,34,34),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,new A.h(24,24,24,24),p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,B.i,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
l=A.y([q.au("Community showcase"),q.au("3 images \xb7 2 links")],l)
s=A.b5("Submit what you built with Flint",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,31,800,p,p,p,p,p,p,p,p,p,p,p,p,1.12,new A.h(0,0,0,0),p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,38,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.G("Add the app name, screenshots, useful links, and a clear explanation of what the product does. The page is rendered by Flint for SEO so other developers can discover it.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.7,new A.h(0,0,0,0),p,p,760,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=[new A.k("div",A.i(B.a,p,m,B.a,B.a),A.j(p,[l,s,r]))]
m=J.al(o)
if(!(J.a9(m.j(o,"isAuthenticated"),!0)||B.p.gV()!=null)){m=m.j(o,"authMode")
r.push(A.h2("/showcase","Back to Showcase","Create a developer account or sign in to share what you built with Flint.",(m==null?p:J.r(m))==="register","Sign in to submit"))}else r.push(q.fD())
return new A.ax(o,new A.k("div",A.i(B.a,p,n,B.a,B.a),A.j(p,r)))},
fD(){var s,r,q,p,o,n=this,m=null,l="solid",k="text",j="description",i="what_it_does",h="built_with",g="color.line",f=A.a(m,B.Q,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,B.x,m,m,m,m,m,m,m,m,22,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.W,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),e=A.a(m,m,m,m,m,new A.b("color.panel",m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(24,24,24,24),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,0,m,m,m,m,m,m,new A.h(18,18,18,18),m,18,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m),d=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,18,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),c=[],b=n.f
if(b!=null){s=A.a(m,m,m,m,m,new A.d("rgba(248, 113, 113, 0.08)"),m,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(12,12,12,12),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
b=A.G(b,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d("#fca5a5"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
c.push(new A.k("div",A.i(B.a,m,s,B.a,B.a),A.j(b,B.h)))}b=n.d
s=b.Z(0,"title")
r=n.e
q=$.qI()
c.push(A.bX(s,r,q,"App or product name","title","Example: ClinicOS, TutorDesk, PayPortal",!0,k))
r=b.Z(0,j)
s=n.e
p=$.uu()
c.push(A.f3(r,s,"Short description",j,"Describe the product, audience, and why you built it.",!0,5,p))
c.push(A.f3(b.Z(0,i),n.e,"What the app does",i,"List the core workflow, automation, dashboard, API, or fullstack experience it provides.",!0,7,p))
c.push(A.bX(b.Z(0,h),n.e,q,"Built with",h,"Flint Dart, Flint UI, MySQL",!1,k))
c.push(n.dw("Images"))
for(s=[1,2,3],o=0;o<3;++o){r=""+s[o]
p="image_"+r
c.push(A.bX(b.Z(0,p),n.e,q,"Image "+r+" URL",p,"https://example.com/screenshot-"+r+".png",!1,k))}c.push(n.dw("Links"))
c.push(n.dE(1))
c.push(n.dE(2))
b=n.r
s=n.gdc()
r=A.H($.k4(),m,15)
c.push(A.ay(m,[r,A.v(n.gdc()?"Publish Build":"Developer access required",m)],m,!s,b,m,B.ah,B.w,B.j,B.Z))
d=A.ey(c,d,n.ghz())
e=A.i(B.a,m,e,B.a,B.a)
d=A.j(m,[d])
c=A.a(m,m,m,m,m,new A.b("color.panelStrong",m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("min(280px, 100%)"),m,m,m,m),m,m,m,m,m,m,m,m,new A.h(18,18,18,18),m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m)
b=A.aq("What to include",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.text",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,800,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.h(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
s=A.G("Use real screenshots and practical links. Short, specific descriptions work best for search and for developers scanning the gallery.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,m,m,m,m,m,m,m,m,m,m,m,m,m,1.6,new A.h(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=A.y([n.au("Screenshots"),n.au("Live URL"),n.au("GitHub"),n.au("Use case")],r)
return A.y([new A.k("div",e,d),new A.k("div",A.i(B.a,m,c,B.a,B.a),A.j(m,[b,s,r]))],f)},
dE(a){var s,r,q,p,o,n,m=null,l=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,B.x,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.W,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),k=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),j=""+a,i="Link "+j
j="link_"+j
s=j+"_label"
r=this.d
q=r.Z(0,s)
p=this.e
o=a===1?"Live app":"GitHub"
n=$.qI()
o=A.bX(q,p,n,i+" label",s,o,!1,"text")
k=A.i(B.a,m,k,B.a,B.a)
o=A.j(m,[o])
s=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a4,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
j+="_url"
j=A.bX(r.Z(0,j),this.e,n,i+" URL",j,"https://example.com",!1,"text")
return A.y([new A.k("div",k,o),new A.k("div",A.i(B.a,m,s,B.a,B.a),A.j(m,[j]))],l)},
bx(a){return this.hw(A.aa(a))},
hw(a3){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bx=A.be(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:if(t.m.b(a3))a3.preventDefault()
if(n.r){s=1
break}n.q(new A.nz(n))
c=n.hI()
b=c.a
if(b.gM(b)){h=n.cr(c,"Check your build.")
n.q(new A.nA(n,c))
B.o.P(0,"Build not submitted",h)
s=1
break}p=4
m=B.p.gV()
b=$.cb()
a=t.N
a0=A.ha(n.d.b,a,t.X)
l=A.Y(a,a)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(b.aj("/showcase/submit",a0,l,t.P),$async$bx)
case 7:k=a5
j=k.b
if(k.f&&j!=null){B.o.ad("Build published","Opening the showcase page.")
l=J.M(j,"redirectTo")
l=l==null?null:J.r(l)
if(l==null)l="/showcase"
A.x(A.x(v.G.window).location).assign(l)
s=1
break}i=A.cc(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not submit build."
h=n.cr(i,l)
n.q(new A.nB(n,i,h))
B.o.P(0,"Build not submitted",h)
p=2
s=6
break
case 4:p=3
a2=o.pop()
l=A.aL(a2)
if(l instanceof A.bO){g=l
f=n.fv(g)
e=A.cc(f)
l=f
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not submit build."
d=n.cr(e,l)
n.q(new A.nC(n,e,d))
B.o.P(0,"Build not submitted",d)}else{n.q(new A.nD(n))
B.o.P(0,"Build not submitted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$bx,r)},
hI(){var s,r,q,p,o,n,m,l,k,j="description",i="what_it_does",h="Add at least 20 characters.",g="Use a full http or https URL.",f=A.Y(t.N,t.a),e=this.d,d=B.b.D(e.a0("title")),c=B.b.D(e.a0(j)),b=B.b.D(e.a0(i))
if(d.length<3)f.i(0,"title",A.e(["Add the app name."],t.s))
if(c.length<20)f.i(0,j,A.e([h],t.s))
if(b.length<20)f.i(0,i,A.e([h],t.s))
for(s=["image_1","image_2","image_3"],e=e.b,r=t.s,q=0;q<3;++q){p=s[q]
o=e.j(0,p)
o=o==null?null:J.r(o)
n=B.b.D(o==null?"":o)
if(n.length!==0){m=A.q2(n)
o=!1
if(m!=null)if(m.gaD(m).length!==0)o=m.gac()==="http"||m.gac()==="https"
o=!o}else o=!1
if(o)f.i(0,p,A.e([g],r))}for(s=[1,2],q=0;q<2;++q){o="link_"+s[q]
l=e.j(0,o+"_label")
l=l==null?null:J.r(l)
k=B.b.D(l==null?"":l)
o+="_url"
l=e.j(0,o)
l=l==null?null:J.r(l)
n=B.b.D(l==null?"":l)
if(k.length!==0&&n.length===0)f.i(0,o,A.e(["Add the URL for this link."],r))
if(n.length!==0){m=A.q2(n)
l=!1
if(m!=null)if(m.gaD(m).length!==0)l=m.gac()==="http"||m.gac()==="https"
l=!l}else l=!1
if(l)f.i(0,o,A.e([g],r))}return new A.bQ(f)},
fv(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.ny(),t.N,t.z)
return null},
cr(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb2()
s=A.N(r).h("aO<2>")
return A.iy(new A.aO(r,s),3,s.h("n.E")).J(0," ")},
dw(a){var s=null
return A.aq(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,15,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(4,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))},
au(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.nz.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.A
s.f=null},
$S:0}
A.nA.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.nB.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nC.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nD.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not submit build. Please try again."},
$S:0}
A.ny.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dU.prototype={
ge1(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="Components",e="#a-component-is-a-dart-class",d="HtmlContent",c="100%",b="color.line",a="color.panel",a0="color.text",a1="color.muted",a2="color.primary",a3=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(i,B.n,i,B.n),i,i,1040,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,28,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(48,18,48,18),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,new A.h(34,14,34,14),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(c),i,i,i,i),a4=t.G
a4=A.a(i,i,i,i,i,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(52, 211, 153, 0.18)"),0),new A.L(new A.d("rgba(14, 165, 233, 0.12)"),52),new A.L(new A.b(a,i),100)],a4)),new A.b(a,i)],a4)),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.V,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,24,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.y([j.e2("Flint UI"),j.e2("Dart components")],q)
p=A.b5("Build browser UI with Dart components.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.G("Flint UI keeps components, state, events, styling, server props, and trusted HTML rendering inside the Dart ecosystem.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.i(B.a,i,r,B.a,B.a)
o=A.j(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,290,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(c),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(a,i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.H,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.y([A.H($.cs(),new A.b(a2,i),16),A.v("Pure Dart UI",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a2,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aX,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.v("class Counter extends Component",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
k=A.v("setState(() => count++)",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.i(B.a,i,m,B.a,B.a)
k=A.j(i,[l,k])
l=A.G("The public API teaches Component, View, DartStyle, and state without exposing internal nodes.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.i(B.a,i,q,B.a,B.a)
l=A.j(i,[n,new A.k(g,m,k),l])
s=A.y([new A.k(g,r,o),new A.k(g,A.i(B.a,i,p,B.a,B.a),A.j(i,[new A.k(g,q,l)]))],s)
l=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.y([j.ce(f,e),j.ce("State","#state-updates-with-setstate"),j.ce(d,"#render-trusted-html")],l)
a4=A.i(B.a,i,a4,B.a,B.a)
l=A.j(i,[s,l])
s=A.a_(240,!1)
q=A.a_(B.N,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.M,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.bw("repeat("+A.a_("auto-fit",!0)+", "+A.a_(new A.aG("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.bg($.tB(),f,"Build screens from Dart classes with a simple View build method.",B.a_)
p=j.bg($.pK(),"State","Preserve component state and receive new constructor values with updateFrom.",B.a0)
o=j.bg($.fQ(),"DartStyle","Keep layout, spacing, colors, and responsive rules beside the component.",B.ar)
r=j.bg($.tD(),d,"Render trusted Markdown HTML without manual document selectors in app code.",B.dn)
q=A.i(B.a,i,q,B.a,B.a)
r=A.j(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(a,i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.ad,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.u,i,i,i,B.H,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(c),i,i,i,i)
p=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,12,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.aq("UI documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.G("Components, props, state, styling, page registration, client requests, and trusted HTML.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.i(B.a,i,s,B.a,B.a)
m=A.j(i,[k,m])
k=A.a(i,B.d,i,i,i,new A.d("rgba(52, 211, 153, 0.1)"),i,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.h(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.y([new A.k(g,s,m),A.W(i,[A.v("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a2,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.bZ(),new A.b(a2,i),14)],k,e,i,B.j,i)],p)]
if(j.ge1().length===0)p.push(A.G("The Flint UI guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else p.push(A.ce("api-md markdown-body",j.ge1(),"ui-content",B.aG))
s=A.i(B.a,i,o,B.a,B.a)
p=A.j(i,p)
return new A.ax(j.c,new A.k(g,A.i(B.a,i,a3,B.a,B.a),A.j(i,[new A.k(g,a4,l),new A.k(g,q,r),new A.k(g,s,p)])))},
bg(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.H,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,d,20),p=A.c4(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p,o]))},
ce(a,b){var s=null
return A.W(a,B.h,A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b4,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,s,B.j,s)},
e2(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.F("max-content"),s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.dY.prototype={
E(){var s,r,q,p,o=null,n="div",m=$.uj(),l=$.u3(),k=A.v("Product Updates",$.u5())
l=A.i(B.a,o,l,B.a,B.a)
k=A.j(o,[k])
s=$.u4()
r=A.v("What's New",$.u6())
r=A.y([new A.k(n,l,k),new A.k(n,A.i(B.a,o,s,B.a,B.a),A.j(o,[r]))],B.fd)
s=A.b5("What's New in Flint Dart",$.ui())
k=A.G("Highlights from the latest Flint Dart and Flint UI releases.",$.us())
m=A.i(B.a,o,m,B.a,B.a)
k=A.j(o,[r,s,k])
s=this.fI()
r=$.ub()
l=A.c4("Next",$.ue())
q=A.G("Follow the changelog for complete release history and migration notes.",$.ua())
p=$.uc()
p=A.W(o,[A.v("Open Changelog",$.ud())],p,"/changelog",o,B.j,o)
r=A.i(B.a,o,r,B.a,B.a)
p=A.j(o,[l,q,p])
q=A.i(B.a,o,B.fs,B.a,B.a)
p=A.j(o,[new A.k(n,m,k),s,new A.k(n,r,p)])
return new A.ax(this.c,new A.k(n,A.i(B.a,o,B.au,B.a,B.a),A.j(o,[new A.k(n,q,p)])))},
fI(){var s,r,q,p,o,n,m,l=null,k=[]
for(s=0;s<19;++s){r=B.iK[s]
q=$.u7()
p=A.i(B.a,l,$.u9(),B.a,B.a)
o=A.j(r.b,B.h)
n=A.i(B.a,l,$.u8(),B.a,B.a)
m=A.j(r.a,B.h)
k.push(new A.k("div",A.i(B.a,l,q,B.a,B.a),A.j(l,[new A.a7("h2",p,o),new A.a7("p",n,m)])))}return new A.k("div",A.i(B.a,l,B.eC,B.a,B.a),A.j(l,k))}}
A.h1.prototype={
E(){var s,r,q,p=this,o=null,n="Create account",m="password",l="color.muted",k=A.a(o,o,o,o,o,new A.b("color.panel",o),o,new A.m(1,new A.b("color.line",o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.e,o,o,o,o,o,o,o,o,o,o,o,o,18,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(24,24,24,24),o,16,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),j=A.aq(p.c,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b("color.text",o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,22,700,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),i=A.G(p.d,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(l,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,14,o,o,o,o,o,o,o,o,o,o,o,o,o,1.65,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),h=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,o,o,o,o,o,B.i,o,o,o,o,o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),g=p.z
g=(g==null?p.r:g)?B.D:B.bc
g=A.ay("Sign in",B.h,o,!1,!1,new A.kr(p),B.a,B.w,B.j,g)
s=p.z
s=(s==null?p.r:s)?B.bc:B.D
h=[j,i,A.y([g,A.ay(n,B.h,o,!1,!1,new A.ks(p),B.a,B.w,B.j,s)],h)]
j=p.as
if(j!=null){i=A.a(o,o,o,o,o,new A.d("rgba(248, 113, 113, 0.08)"),o,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(12,12,12,12),o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
j=A.G(j,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.d("#fca5a5"),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
h.push(new A.k("div",A.i(B.a,o,i,B.a,B.a),A.j(o,[j])))}j=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.e,o,o,o,o,o,o,o,o,o,o,o,o,14,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
i=[]
g=p.z
if(g==null?p.r:g)i.push(A.bX(p.x,o,$.qH(),"Name","name","Your name",!1,"text"))
g=$.qH()
i.push(A.bX(p.w,o,g,"Email or username","email","you@example.com",!1,"text"))
i.push(A.bX(p.y,o,g,"Password",m,"Minimum 8 characters",!1,m))
g=A.a(o,B.d,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,o,o,o,o,o,B.i,o,o,o,o,o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
s=p.Q
r=p.z
q=A.H((r==null?p.r:r)?$.k3():$.qB(),o,15)
r=p.z
i.push(A.y([A.ay(o,[q,A.v((r==null?p.r:r)?n:"Sign in",o)],o,!1,s,new A.kt(p),B.a,B.w,B.j,B.Z),A.W(p.f,B.h,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(l,o),o,o,o,B.k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.h(8,12,8,12),o,9,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),p.e,o,B.j,o)],g))
h.push(A.ey(i,j,o))
return new A.k("div",A.i(B.a,o,k,B.a,B.a),A.j(o,h))},
bv(){var s=0,r=A.bd(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bv=A.be(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.q(new A.km(n))
p=4
j=n.z
m=(j==null?n.r:j)?"/auth/register":"/auth/login"
i=$.cb()
h=t.N
l=A.Y(h,h)
J.ar(l,"email",B.b.D(n.w.a))
J.ar(l,"password",n.y.a)
j=n.z
if(j==null?n.r:j)J.ar(l,"name",B.b.D(n.x.a))
s=7
return A.b0(i.ie(m,l,t.P),$async$bv)
case 7:k=b
if(k.f){n.hf(k.b)
l=n.z
B.o.ad((l==null?n.r:l)?"Account created":"Signed in","Refreshing your session...")
A.v0(B.fX,B.bd.gii(B.bd),t.H)
s=1
break}n.q(new A.kn(n,k))
B.o.P(0,"Authentication failed",n.as)
p=2
s=6
break
case 4:p=3
f=o.pop()
n.q(new A.ko(n))
B.o.P(0,"Authentication failed",n.as)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bb(q,r)
case 2:return A.ba(o.at(-1),r)}})
return A.bc($async$bv,r)},
f2(a){var s,r,q
t.h.a(a)
s=a==null
r=s?null:J.M(a,"errors")
if(typeof r=="string")return r
if(t.f.b(r)&&J.dg(r)){q=J.fT(J.pO(r))
if(t.j.b(q)&&J.dg(q))return J.r(J.fT(q))
return J.r(q)}if(s)s=null
else{s=J.M(a,"message")
s=s==null?null:J.r(s)}return s==null?"Authentication failed.":s},
hf(a){var s,r,q,p,o,n,m,l,k=null
t.h.a(a)
s=a==null?k:J.M(a,"data")
r=t.f
q=r.b(s)?J.aU(s,t.N,t.z):k
p=q==null
if(p)o=k
else{n=q.j(0,"token")
o=n==null?k:J.r(n)}m=p?k:q.j(0,"user")
if(m==null)m=q
l=r.b(m)?J.aU(m,t.N,t.z):B.Y
if(o==null||o.length===0){if(l.gM(l)){r=B.E.aa(t.P.a(l),k)
A.x(A.x(v.G.window).localStorage).setItem("auth.user",r)}return}t.P.a(l)
r=v.G
A.x(A.x(r.window).localStorage).setItem("auth.token",o)
p=B.E.aa(l,k)
A.x(A.x(r.window).localStorage).setItem("auth.user",p)
r=A.x(r.document)
p=A.e([A.oz(2,"auth.token",B.U,!1)+"="+A.oz(2,o,B.U,!1)],t.s)
p.push("Max-Age=2592000")
p.push("Path=/")
p.push("SameSite="+B.d4.fE(B.es))
r.cookie=B.f.J(p,"; ")}}
A.kr.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.kq(s))},
$S:1}
A.kq.prototype={
$0(){var s=this.a
s.z=!1
s.as=null},
$S:0}
A.ks.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.kp(s))},
$S:1}
A.kp.prototype={
$0(){var s=this.a
s.z=!0
s.as=null},
$S:0}
A.kt.prototype={
$1(a){A.aa(a)
return this.a.bv()},
$S:1}
A.km.prototype={
$0(){var s=this.a
s.Q=!0
s.as=null},
$S:0}
A.kn.prototype={
$0(){var s=this.a
s.Q=!1
s.as=s.f2(this.b.b)},
$S:0}
A.ko.prototype={
$0(){var s=this.a
s.Q=!1
s.as="Could not sign in. Check your details and try again."},
$S:0}
A.hq.prototype={
gcq(){var s=J.M(this.b,"flashSuccess")
s=s==null?null:J.r(s)
return s==null?"":s},
gca(){var s=J.M(this.b,"flashError")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o=this,n=null
if(o.gcq().length===0&&o.gca().length===0)return A.cr("span",[],A.Y(t.N,t.X))
s=$.uD()
r=[]
if(o.gcq().length!==0){q=$.ut()
p=A.G(o.gcq(),$.qG())
r.push(new A.k("div",A.i(B.a,n,q,B.a,B.a),A.j(n,[p])))}if(o.gca().length!==0){q=$.uf()
p=A.G(o.gca(),$.qG())
r.push(new A.k("div",A.i(B.a,n,q,B.a,B.a),A.j(n,[p])))}return new A.k("div",A.i(B.a,n,s,B.a,B.a),A.j(n,r))}}
A.hx.prototype={
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="rgba(30, 41, 59, 0.72)",j="rgba(5, 7, 13, 0.98)",i="100%",h="color.muted",g=t.G,f=A.a(n,n,n,n,n,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(8, 47, 73, 0.2)"),0),new A.L(new A.d(j),48),new A.L(new A.d("rgba(20, 83, 45, 0.16)"),100)],g)),new A.d(j)],g)),n,n,n,n,n,n,new A.m(1,new A.d(k),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(48,n,0,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),e=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F(i),n,n,n,n),d=A.a(n,n,n,n,n,new A.b("color.panelStrong",n),n,new A.m(1,new A.d("rgba(56, 189, 248, 0.16)"),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,28,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(22,22,22,22),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),c=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(n,B.n,n,B.n),n,n,1152,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F(i),n,n,n,n),b=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,34,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,280,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a0=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
g=A.a(n,B.d,n,n,n,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(56, 189, 248, 0.24)"),0),new A.L(new A.d("rgba(52, 211, 153, 0.18)"),100)],g)),new A.d("rgba(15, 23, 42, 0.86)")],g)),n,new A.m(1,new A.d("rgba(56, 189, 248, 0.34)"),m),n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,B.q,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,n,n)
s=A.td(30)
g=A.i(B.a,n,g,B.a,B.a)
s=A.j(n,[s])
r=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.v("Flint Ecosystem",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,16,900,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.v("The Unified Dart Technology Stack",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,700,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a0=A.y([new A.k(l,g,s),new A.k(l,A.i(B.a,n,r,B.a,B.a),A.j(n,[q,p]))],a0)
p=A.G("One language powering Full-Stack Web, Cross-Platform Clients, Native AI, and Connected Robotics.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,1.6,new A.h(0,0,0,0),n,n,390,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.y([o.ae("Fullstack"),o.ae("Client SDK"),o.ae("AI Engine"),o.ae("Hardware")],q)
r=t.O
b=A.y([new A.k(l,A.i(B.a,n,a,B.a,B.a),A.j(n,[a0,p,q])),o.cf("Ecosystem Pillars",A.e([B.kl,B.jN,B.k4,B.jT,B.km,B.jM,B.kg],r)),o.cf("Updates & Resources",A.e([B.jX,B.kn,B.ky,B.kd,B.kt],r)),o.cf("Community",A.e([B.kc,B.kx,B.k9,B.k3,B.ka],r))],b)
c=A.i(B.a,n,c,B.a,B.a)
b=A.j(n,[b])
r=A.a(n,B.d,n,n,n,n,n,new A.m(1,new A.d(k),m),n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,12,n,n,n,n,n,B.m,n,n,n,n,n,n,new A.h(n,B.n,n,B.n),n,n,1152,n,n,n,n,n,n,n,n,n,new A.h(22,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F(i),n,n,n,n)
q=A.v("Copyright 2026 Flint Dart. Maintained by Eulogia Technologies.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.y([q,A.y([o.ae("v 1.3.2"),o.ae("MIT License"),o.ae("Built with Dart")],p)],r)
d=A.i(B.a,n,d,B.a,B.a)
r=A.j(n,[new A.k(l,c,b),r])
e=A.i(B.a,n,e,B.a,B.a)
r=A.j(n,[new A.k(l,d,r)])
return new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[new A.k(l,e,r)]))},
cf(a,b){var s,r,q,p,o,n=null
t.gk.a(b)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,150,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[A.v(a,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#67e8f9"),n,n,n,B.F,n,n,n,n,n,n,n,n,n,n,11,900,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.h(n,n,3,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))]
for(q=b.length,p=0;p<b.length;b.length===q||(0,A.aE)(b),++p){o=b[p]
r.push(A.W(o.b,B.h,new A.q(n,n,n,n,n,n,n,n,B.F,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,new A.d("#a8b3c5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),o.a,n,B.j,n))}return new A.k("div",A.i(B.a,n,s,B.a,B.a),A.j(n,r))},
ae(a){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.d("rgba(51, 65, 85, 0.76)"),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.h(5,10,5,10),s,9999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.v(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.i6.prototype={
gdd(){var s,r
if(!J.a9(J.M(this.b,"canWriteBlog"),!0)){s=t.cq.a(A.dI(["admin","contributor"],t.N))
r=B.p.gak(0)
s=r!=null&&s.H(0,r)}else s=!0
return s},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="solid",b="Ecosystem",a="/",a0="Fullstack",a1="/fullstack",a2="/client",a3="Hardware",a4="/hardware",a5="div",a6="Overview",a7="Features",a8="Changelog",a9="Ecosystem \u2197",b0="pub.dev \u2197",b1="color.line",b2="color.panel",b3="color.text",b4="color.muted",b5=A.E(18,!1),b6=A.a(d,d,d,d,d,new A.d("rgba(255, 255, 255, 0.9)"),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),b7=t.G
b6=A.a(d,d,d,d,new A.d0("blur("+b5+")"),new A.b(b2,d),d,d,new A.m(1,new A.b(b1,d),c),d,d,d,d,d,d,d,d,d,A.a(d,d,d,d,d,A.aM(A.e([A.aW(90,B.iP),B.bh],b7)),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.jL,d,d,d,d,d,d,d,d,d,d,d,d,0,d,d,d,d,d,d,d,d,50)
s=e.gan()
r=s!=="ecosystem"
if(s==="fullstack"){b5=J.M(e.b,"flintDartVersion")
q="v"+A.V(b5==null?"1.3.2":b5)
p=a1
o=a0
n=B.J}else if(s==="client"){b5=J.M(e.b,"flintClientVersion")
q="v"+A.V(b5==null?"0.1.0":b5)
p=a2
o="Client SDK"
n=B.K}else{q="v0.1.0"
if(s==="ai"){o="AI Engine"
p="/ai"
n=B.aL}else if(s==="hardware"){p=a4
o=a3
n=B.aI}else{q=d
p=a
o=b
n=B.K}}b5=A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,10,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
m=A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,12,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
b7=A.a(d,B.d,d,d,d,A.aM(A.e([A.aW(135,B.j3),new A.b(b2,d)],b7)),d,new A.m(1,new A.d("rgba(56, 189, 248, 0.34)"),c),d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,38,d,d,B.q,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b("radius.md",d),d,d,d,d,d,new A.b("shadow.glow",d),d,d,d,d,d,d,d,d,d,d,38,d,d,d,d)
l=A.td(30)
b7=A.i(B.a,d,b7,B.a,B.a)
l=A.j(d,[l])
k=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j=A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
i=[A.v("Flint",A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b(b3,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,15,800,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))]
if(q!=null){h=A.a(d,d,d,d,d,new A.d("rgba(52, 211, 153, 0.12)"),d,new A.m(1,new A.d("rgba(52, 211, 153, 0.3)"),c),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.h7,d,999,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
g=A.v(q,B.fQ)
i.push(new A.k(a5,A.i(B.a,d,h,B.a,B.a),A.j(d,[g])))}j=A.y(i,j)
i=A.v(o,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,r?n:new A.b(b4,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,11,800,d,d,d,d,d,d,d,d,d,0.3,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
m=[A.W(d,[new A.k(a5,b7,l),new A.k(a5,A.i(B.a,d,k,B.a,B.a),A.j(d,[j,i]))],m,p,d,B.j,d)]
if(r){b7=A.a(d,B.d,d,d,d,new A.d("rgba(255, 255, 255, 0.05)"),d,new A.m(1,new A.b(b1,d),c),d,d,d,d,d,d,d,d,new A.b(b4,d),d,d,d,B.G,d,d,d,d,d,d,d,d,d,d,11,700,4,d,d,d,A.a(d,d,d,d,d,new A.d("rgba(255, 255, 255, 0.1)"),d,d,d,d,d,d,d,d,d,d,new A.b(b3,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.hr,d,999,d,d,d,d,d,d,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.k,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d)
m.push(A.W(d,[A.H($.pL(),d,12),A.v(b,d)],b7,a,d,B.j,d))}b7=e.b
l=J.al(b7)
if(J.a9(l.j(b7,"showGuideMenu"),!0))m.push(e.fK())
if(J.a9(l.j(b7,"showApiMenu"),!0))m.push(e.eV())
b5=A.y(m,b5)
s=e.gan()
if(s==="fullstack")f=A.e([e.G(a1,a6),e.G("/fullstack#features",a7),e.G("/fullstack/guides","Guides"),e.G("/fullstack/api","API"),e.G("/fullstack/whats-new","What's New"),e.G("/fullstack/changelog",a8),e.G("/fullstack/examples","Examples"),e.G(a,a9)],t.Y)
else if(s==="client")f=A.e([e.G(a2,a6),e.G("/client#features",a7),e.G("/client#caching","Caching"),e.G("/client#channels","Real-Time"),e.G("https://pub.dev/packages/flint_client",b0),e.G(a,a9)],t.Y)
else if(s==="ai")f=A.e([e.G("/ai",a6),e.G("/ai#agents","Agents"),e.G("/ai#tools","Tool Policies"),e.G("/ai#chat","Streaming"),e.G("https://pub.dev/packages/flint_ai",b0),e.G(a,a9)],t.Y)
else{b7=t.Y
f=s==="hardware"?A.e([e.G(a4,a6),e.G("/hardware#sensors","Sensors"),e.G("/hardware#statemachine","State Machine"),e.G("/hardware#wokwi","Wokwi Simulator"),e.G("https://pub.dev/packages/flint_hardware",b0),e.G(a,a9)],b7):A.e([e.G(a,b),e.G(a1,a0),e.G(a2,"Client"),e.G("/ai","AI"),e.G(a4,a3),e.G("/api","API"),e.G("/blog","Blog"),e.G("/questions","Questions"),e.G("/changelog",a8)],b7)}b7=A.y(f,A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.G,d,d,d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
m=e.fZ()
m=[new A.k(a5,A.i(B.a,d,B.fr,B.a,B.a),A.j(d,[b5,b7,m]))]
if(e.c)m.push(e.h_())
if(e.d)m.push(e.fJ())
if(e.e)m.push(e.eU())
return new A.k(a5,A.i(B.a,d,b6,B.a,B.a),A.j(d,m))},
gan(){var s,r=this.b,q=J.al(r),p=q.j(r,"activePillar"),o=p==null?null:J.r(p)
if(o!=null&&o.length!==0)return o
r=q.j(r,"currentPath")
s=r==null?null:J.r(r)
if(s==null)s=""
if(B.b.K(s,"/fullstack")||B.b.K(s,"/guides")||B.b.K(s,"/api")||B.b.K(s,"/whats-new")||B.b.K(s,"/changelog")||B.b.K(s,"/examples")||B.b.K(s,"/ui"))return"fullstack"
if(B.b.K(s,"/client"))return"client"
if(B.b.K(s,"/ai"))return"ai"
if(B.b.K(s,"/hardware"))return"hardware"
return"ecosystem"},
fK(){var s=null,r=A.ai(["aria-label",this.d?"Close guide navigation":"Open guide navigation"],t.N,t.X),q=this.d,p=q?new A.d("rgba(52, 211, 153, 0.16)"):new A.b("color.panel",s)
p=A.a(s,B.d,s,s,s,p,s,new A.m(1,new A.d("rgba(52, 211, 153, 0.34)"),"solid"),s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,B.f0,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,B.q,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.G,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,B.l,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,s,s)
return A.ay(A.H(q?$.k6():$.fO(),s,17),B.h,p,!1,!1,new A.mm(this),r,B.w,B.y,B.B)},
eV(){var s=null,r=A.ai(["aria-label",this.e?"Close API navigation":"Open API navigation"],t.N,t.X),q=this.e,p=q?new A.d("rgba(14, 165, 233, 0.18)"):new A.b("color.panel",s)
p=A.a(s,B.d,s,s,s,p,s,new A.m(1,new A.d("rgba(56, 189, 248, 0.34)"),"solid"),s,s,s,s,s,s,s,s,new A.b("color.accent",s),s,B.fF,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,B.q,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.G,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,B.l,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,s,s)
return A.ay(A.H(q?$.k6():$.qA(),s,17),B.h,p,!1,!1,new A.mg(this),r,B.w,B.y,B.B)},
G(a,b){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(255, 255, 255, 0.06)"),s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.W(b,B.h,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.ap(0,0,3,new A.d("rgba(56, 189, 248, 0.28)")),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,13,700,s,s,s,s,r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b3,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aZ("all 160ms ease"),s,s,s,s,s,s,s),a,s,B.j,s)},
fZ(){var s,r,q,p,o,n=this,m=null,l="solid",k="radius.md",j="rgba(52, 211, 153, 0.34)",i="rgba(52, 211, 153, 0.1)",h="color.primary",g="auth.user",f=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),e=[]
if(n.gdd())e.push(A.W("Write",B.h,A.a(m,m,m,m,m,new A.d(i),m,new A.m(1,new A.d(j),l),m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,B.G,m,m,m,m,m,m,m,m,m,m,13,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,B.ac,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"/blog/write",m,B.j,m))
e.push(n.hF())
s=n.b
r=J.al(s)
if(J.a9(r.j(s,"isAuthenticated"),!0)||B.p.gV()!=null){q=A.a(m,B.d,m,m,m,new A.d(i),m,new A.m(1,new A.d(j),l),m,m,m,m,m,m,m,m,m,m,m,m,B.G,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,B.c2,m,new A.b("radius.pill",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
p=A.i(B.a,m,A.a(m,m,m,m,m,new A.d("#6ee7b7"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,9999,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m),B.a,B.a)
o=A.j(m,B.h)
s=r.j(s,"currentUserLabel")
s=s==null?m:J.r(s)
if(s==null){s=J.M(B.an.cP(g),"name")
s=s==null?m:J.r(s)}if(s==null){s=J.M(B.an.cP(g),"email")
s=s==null?m:J.r(s)}if(s==null)s="Signed in"
s=A.v(s,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
e.push(new A.k("div",A.i(B.a,m,q,B.a,B.a),A.j(m,[new A.k("div",p,o),s])))}e.push(A.W("GitHub",B.h,A.a(m,m,m,m,m,new A.d("rgba(2, 132, 199, 0.08)"),m,new A.m(1,new A.d("rgba(2, 132, 199, 0.28)"),l),m,m,m,m,m,m,m,m,new A.b("color.accent",m),m,B.fO,m,m,m,m,m,m,m,m,m,m,m,m,13,800,m,m,m,m,A.a(m,m,m,m,m,new A.d("rgba(2, 132, 199, 0.14)"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ac,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,new A.aZ("all 160ms ease"),m,m,m,m,m,m,m),"https://github.com/flint-dart/flint_dart","_blank",B.j,m))
e.push(A.ay("Menu",B.h,A.a(m,m,m,m,m,new A.b("color.panel",m),m,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),l),m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.G,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,56,m,m,m,m,m,m,B.c2,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),!1,!1,new A.mo(n),B.a,B.w,B.y,B.B))
return A.y(e,f)},
dZ(a){return new A.cB($.pM().a,new A.mu(a),t.ch)},
hF(){return this.dZ(!1)},
h_(){var s,r,q,p,o=this,n=null,m="/fullstack",l="Overview",k="Features",j="Changelog",i="div",h="Ecosystem Overview",g="/client",f="Client SDK",e="/ai",d="AI Engine",c="/hardware",b="Hardware & Robotics",a="/questions",a0="Questions",a1="pub.dev Package",a2="Fullstack Framework",a3="radius.md",a4="color.panel",a5="color.muted",a6="color.line",a7=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.b7,n,n,0,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,100),a8=A.cr("button",B.h,A.ai(["type","button","aria-label","Close navigation","onClick",new A.mr(o),"style",B.b6],t.N,t.X)),a9=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.ap(18,44,-28,new A.d("rgba(15, 23, 42, 0.22)")),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a9=A.a(n,n,n,n,n,new A.b(a4,n),n,new A.m(1,new A.d("rgba(71, 85, 105, 0.8)"),"solid"),n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.ap(18,54,-24,new A.d("rgba(0, 0, 0, 0.58)")),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,a9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.H,B.aj,new A.b(a3,n),n,12,n,n,n,n,n,n,n,n,n,12,n,n,n,n,new A.F("min(360px, calc(100% - 24px))"),n,n,n,n)
s=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.v("Navigation",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,14,900,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
q=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.y([r,A.y([o.dZ(!0),A.ay("Close",B.h,A.a(n,n,n,n,n,new A.b(a4,n),n,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),"solid"),n,n,n,n,n,n,n,n,new A.b(a5,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,58,n,n,n,n,n,n,B.c1,n,new A.b(a3,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),!1,!1,new A.ms(o),B.a,B.w,B.y,B.B)],q)],s)
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,6,n,n,n,n,n,n,n,n,n,n,n,n,B.h6,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
if(o.gan()==="fullstack")B.f.S(r,[A.v("FLINT FULLSTACK",B.f_),o.A(m,l),o.A("/fullstack#features",k),o.A("/fullstack/guides","Guides"),o.A("/fullstack/api","API Reference"),o.A("/fullstack/whats-new","What's New"),o.A("/fullstack/changelog",j),o.A("/fullstack/examples","Examples"),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),A.v("ECOSYSTEM",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(a5,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,800,n,n,n,n,n,n,n,n,n,0.5,n,n,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),o.A("/",h),o.A(g,f),o.A(e,d),o.A(c,b),o.A("/blog","Blog"),o.A(a,a0)])
else if(o.gan()==="client")B.f.S(r,[A.v("FLINT CLIENT SDK",B.ey),o.A(g,l),o.A("/client#features",k),o.A("/client#caching","Caching"),o.A("/client#channels","Real-Time Channels"),o.A("https://pub.dev/packages/flint_client",a1),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),o.A("/",h),o.A(m,a2),o.A(e,d),o.A(c,b)])
else if(o.gan()==="ai")B.f.S(r,[A.v("FLINT AI ENGINE",B.eO),o.A(e,l),o.A("/ai#agents","Agents & Workflows"),o.A("/ai#tools","Tool Policies"),o.A("/ai#chat","Streaming Chat"),o.A("https://pub.dev/packages/flint_ai",a1),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),o.A("/",h),o.A(m,a2),o.A(g,f),o.A(c,b)])
else if(o.gan()==="hardware")B.f.S(r,[A.v("FLINT HARDWARE & ROBOTICS",B.eF),o.A(c,l),o.A("/hardware#sensors","Sensors & IMU"),o.A("/hardware#statemachine","State Machine"),o.A("/hardware#wokwi","Wokwi Simulator"),o.A("https://pub.dev/packages/flint_hardware",a1),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aD,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),o.A("/",h),o.A(m,a2),o.A(g,f),o.A(e,d)])
else{p=[o.A("/","Ecosystem"),o.A(m,"Fullstack"),o.A(g,"Client"),o.A(e,"AI"),o.A(c,"Hardware"),o.A("/api","API"),o.A("/blog","Blog"),o.A(a,a0),o.A("/changelog",j)]
if(o.gdd())p.push(o.A("/blog/write","Write Blog Post"))
B.f.S(r,p)}q=A.i(B.a,n,q,B.a,B.a)
r=A.j(n,r)
a9=A.i(B.a,n,a9,B.a,B.a)
r=A.j(n,[s,new A.k(i,q,r)])
return new A.k(i,A.i(B.a,n,a7,B.a,B.a),A.j(n,[a8,new A.k(i,a9,r)]))},
fJ(){var s,r,q,p=null,o="solid",n="radius.md",m="color.panel",l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.G,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,B.b7,p,p,0,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,100),k=A.cr("button",B.h,A.ai(["type","button","aria-label","Close guide navigation","onClick",new A.mj(this),"style",B.b6],t.N,t.X)),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ap(18,44,-28,new A.d("rgba(15, 23, 42, 0.22)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
j=A.a(p,p,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(71, 85, 105, 0.8)"),o),p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ap(18,54,-24,new A.d("rgba(0, 0, 0, 0.58)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,j,p,p,p,new A.F("calc(100vh - 104px)"),p,p,p,p,p,p,B.cy,p,p,p,B.l,B.aj,new A.b(n,p),p,16,p,p,p,p,p,p,p,p,p,82,p,p,p,p,p,p,p,p,p)
s=A.a(p,B.d,p,p,p,p,p,p,new A.m(1,new A.d("rgba(30, 41, 59, 1)"),o),p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,B.m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.a(p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.y([A.H($.fO(),B.a_,16),A.v("Guides",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,900,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],r)
q=A.a(p,B.d,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),o),p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p)
s=A.y([r,A.ay(A.H($.k6(),p,16),B.h,q,!1,!1,new A.mk(this),B.jt,B.w,B.y,B.B)],s)
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=J.M(this.b,"initialSection")
r=r==null?p:J.r(r)
r=A.r_(r==null?"introduction":r,!0)
q=A.i(B.a,p,q,B.a,B.a)
r=A.j(p,[r])
j=A.i(B.a,p,j,B.a,B.a)
r=A.j(p,[s,new A.k("div",q,r)])
return new A.k("div",A.i(B.a,p,l,B.a,B.a),A.j(p,[k,new A.k("div",j,r)]))},
eU(){var s,r,q,p=null,o="solid",n="radius.md",m="color.panel",l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.G,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,B.b7,p,p,0,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,100),k=A.cr("button",B.h,A.ai(["type","button","aria-label","Close API navigation","onClick",new A.md(this),"style",B.b6],t.N,t.X)),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ap(18,44,-28,new A.d("rgba(15, 23, 42, 0.22)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
j=A.a(p,p,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(71, 85, 105, 0.8)"),o),p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.ap(18,54,-24,new A.d("rgba(0, 0, 0, 0.58)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,j,p,p,p,new A.F("calc(100vh - 104px)"),p,p,p,p,p,p,B.cy,p,p,p,B.l,B.aj,new A.b(n,p),p,16,p,p,p,p,p,p,p,p,p,82,p,p,p,p,p,p,p,p,p)
s=A.a(p,B.d,p,p,p,p,p,p,new A.m(1,new A.d("rgba(30, 41, 59, 1)"),o),p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,B.m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.a(p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.y([A.H($.qA(),B.aq,16),A.v("API",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,900,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],r)
q=A.a(p,B.d,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),o),p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p)
s=A.y([r,A.ay(A.H($.k6(),p,16),B.h,q,!1,!1,new A.me(this),B.js,B.w,B.y,B.B)],s)
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.h(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=J.M(this.b,"initialSection")
r=r==null?p:J.r(r)
if(r==null)r="flint-class"
q=A.i(B.a,p,q,B.a,B.a)
r=A.j(p,[new A.eg(r,!0)])
j=A.i(B.a,p,j,B.a,B.a)
r=A.j(p,[s,new A.k("div",q,r)])
return new A.k("div",A.i(B.a,p,l,B.a,B.a),A.j(p,[k,new A.k("div",j,r)]))},
A(a,b){var s=null
return A.W(b,B.h,A.a(s,s,s,s,s,new A.b("color.panel",s),s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.F,s,s,s,s,s,s,s,s,s,s,14,800,s,s,s,s,A.a(s,s,s,s,s,new A.d("rgba(255, 255, 255, 0.07)"),s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.fY,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),a,s,B.j,s)}}
A.mm.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.ml(s))},
$S:1}
A.ml.prototype={
$0(){var s=this.a
s.c=!1
s.d=!s.d},
$S:0}
A.mg.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mf(s))},
$S:1}
A.mf.prototype={
$0(){var s=this.a
s.d=s.c=!1
s.e=!s.e},
$S:0}
A.mo.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mn(s))},
$S:1}
A.mn.prototype={
$0(){var s=this.a
s.e=s.d=!1
s.c=!0},
$S:0}
A.mu.prototype={
$1(a){var s=null,r=t.c.a(a)===B.S,q=r?"Switch to light mode":"Switch to dark mode",p=A.ai(["aria-label",q,"title",q],t.N,t.X),o=this.a,n=o?B.n:38,m=o?B.bW:B.l,l=o?8:s
n=A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,38,A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,m,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aZ("all 160ms ease"),s,s,n,s,s,s,s)
m=[A.H(r?$.tM():$.tJ(),s,17)]
if(o){o=r?"Light mode":"Dark mode"
m.push(A.v(o,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)))}return A.ay(s,m,n,!1,!1,new A.mt(),p,B.w,B.y,B.B)},
$S:78}
A.mt.prototype={
$1(a){var s,r,q,p
A.aa(a)
s=$.pM()
r=s.a
q=r.a===B.S?B.af:B.S
r.a=r.$ti.c.a(q)
r.bL()
p=s.c
if(s.b!=null&&p!=null&&p.length!==0)A.x(A.x(v.G.window).localStorage).setItem(p,q.c)
s.d7(q)
return q},
$S:1}
A.mr.prototype={
$1(a){var s=this.a
return s.q(new A.mq(s))},
$S:7}
A.mq.prototype={
$0(){return this.a.c=!1},
$S:0}
A.ms.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mp(s))},
$S:1}
A.mp.prototype={
$0(){return this.a.c=!1},
$S:0}
A.mj.prototype={
$1(a){var s=this.a
return s.q(new A.mi(s))},
$S:7}
A.mi.prototype={
$0(){return this.a.d=!1},
$S:0}
A.mk.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mh(s))},
$S:1}
A.mh.prototype={
$0(){return this.a.d=!1},
$S:0}
A.md.prototype={
$1(a){var s=this.a
return s.q(new A.mc(s))},
$S:7}
A.mc.prototype={
$0(){return this.a.e=!1},
$S:0}
A.me.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mb(s))},
$S:1}
A.mb.prototype={
$0(){return this.a.e=!1},
$S:0}
A.ax.prototype={
E(){var s=null,r=$.up(),q=this.c,p=this.d,o=A.i(B.a,s,B.fu,B.a,B.a)
p=A.j(s,[p])
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[new A.i6(q),new A.hq(q),new A.k("div",o,p),new A.hx()]))}}
A.pP.prototype={}
A.o1.prototype={}
A.fc.prototype={$ivr:1}
A.o2.prototype={
$1(a){return this.a.$1(A.x(a))},
$S:4};(function aliases(){var s=J.dC.prototype
s.eH=s.l
s=J.cz.prototype
s.eI=s.l
s=A.A.prototype
s.eJ=s.bQ
s=A.n.prototype
s.cZ=s.aF})();(function installTearOffs(){var s=hunkHelpers._static_0,r=hunkHelpers._static_1,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_0i,o=hunkHelpers.installStaticTearOff,n=hunkHelpers._instance_1u
s(A,"wZ","va",22)
r(A,"xp","vI",11)
r(A,"xq","vJ",11)
r(A,"xr","vK",11)
s(A,"tc","xf",0)
r(A,"xx","wx",23)
q(A.X.prototype,"gav","a4",0)
r(A,"pi","y6",80)
p(A.h4.prototype,"gii","ij",0)
q(A.cB.prototype,"gav","a4",0)
r(A,"qr","wH",25)
o(A,"y3",1,null,["$2$unitlessNumber","$1"],["a_",function(a){return A.a_(a,!1)}],59,0)
o(A,"y4",1,null,["$2$unitlessNumber","$1"],["E",function(a){return A.E(a,!1)}],54,0)
q(A.eC.prototype,"gav","a4",0)
q(A.eB.prototype,"gav","a4",0)
n(A.cO.prototype,"gf0","b8",14)
n(A.cP.prototype,"gf5","b9",14)
q(A.cV.prototype,"gav","a4",0)
q(A.cZ.prototype,"gav","a4",0)
n(A.d1.prototype,"ghz","bx",14)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.Q,null)
q(A.Q,[A.pR,J.dC,A.eZ,J.cN,A.n,A.ek,A.T,A.cv,A.ao,A.A,A.nd,A.by,A.eN,A.d3,A.f2,A.f7,A.av,A.cC,A.bD,A.dJ,A.em,A.co,A.ch,A.nO,A.mw,A.et,A.fu,A.m3,A.eL,A.cY,A.eK,A.dE,A.fl,A.iX,A.f0,A.jG,A.bW,A.jd,A.jS,A.fy,A.iY,A.fv,A.b6,A.j0,A.d5,A.an,A.iZ,A.it,A.jE,A.fH,A.fg,A.jl,A.fi,A.fk,A.fE,A.cS,A.hb,A.on,A.oD,A.oA,A.cT,A.bu,A.o0,A.i9,A.f_,A.o3,A.bR,A.a1,A.aH,A.jJ,A.nn,A.aY,A.fF,A.nQ,A.jy,A.kX,A.P,A.eu,A.mv,A.nm,A.bO,A.c3,A.l0,A.lh,A.cF,A.ku,A.l5,A.f9,A.nW,A.kT,A.J,A.mx,A.h4,A.nK,A.ew,A.hu,A.fd,A.dS,A.ej,A.kW,A.d,A.q,A.ez,A.lF,A.kv,A.bv,A.hs,A.L,A.iE,A.b,A.hv,A.lg,A.aN,A.ci,A.n8,A.h,A.F,A.aG,A.bw,A.m,A.ap,A.b9,A.d0,A.hw,A.kN,A.nc,A.hf,A.ia,A.nH,A.kw,A.l_,A.n7,A.iK,A.aZ,A.k9,A.ka,A.kc,A.kb,A.ns,A.nV,A.ck,A.lp,A.bQ,A.lX,A.bI,A.lf,A.jz,A.f8,A.jN,A.jb,A.fe,A.jc,A.pP,A.fc])
q(J.dC,[J.hK,J.eE,J.c,J.dF,J.dG,J.eF,J.cX])
q(J.c,[J.cz,J.a4,A.dL,A.eP,A.u,A.fU,A.ei,A.bN,A.aj,A.j2,A.b7,A.hg,A.hi,A.j4,A.ep,A.j6,A.hk,A.j9,A.bj,A.hF,A.jf,A.hU,A.hV,A.jm,A.jn,A.bm,A.jo,A.jq,A.bn,A.ju,A.jx,A.bp,A.jA,A.bq,A.jD,A.b3,A.jL,A.iF,A.bs,A.jO,A.iI,A.iQ,A.jT,A.jV,A.jX,A.jZ,A.k0,A.bx,A.jj,A.bA,A.js,A.ie,A.jH,A.bC,A.jQ,A.fZ,A.j_])
q(J.cz,[J.ib,J.dV,J.cf])
r(J.hJ,A.eZ)
r(J.m_,J.a4)
q(J.eF,[J.eD,J.hL])
q(A.n,[A.dZ,A.D,A.aP,A.aA,A.d2,A.d4,A.d8,A.iW,A.jF,A.e1])
r(A.cQ,A.dZ)
r(A.fb,A.cQ)
q(A.T,[A.cR,A.bT,A.ff,A.jh])
q(A.cv,[A.h7,A.kQ,A.h6,A.iz,A.pu,A.pw,A.nY,A.nX,A.oG,A.oe,A.oh,A.nq,A.or,A.oj,A.m5,A.ol,A.pC,A.pD,A.po,A.l2,A.l3,A.lk,A.ll,A.lm,A.ln,A.lj,A.l7,A.l8,A.la,A.pB,A.py,A.pz,A.pI,A.pJ,A.oP,A.oQ,A.oR,A.oS,A.oT,A.pk,A.pl,A.oJ,A.oK,A.nk,A.nu,A.nv,A.n9,A.pE,A.pF,A.kZ,A.nw,A.nx,A.nt,A.nG,A.nI,A.lY,A.oY,A.oZ,A.p_,A.pa,A.pb,A.pc,A.pd,A.pe,A.pf,A.pg,A.ph,A.p0,A.p1,A.p2,A.p3,A.p4,A.p5,A.p6,A.p7,A.p8,A.p9,A.oV,A.oW,A.oX,A.lK,A.lL,A.kP,A.lS,A.lT,A.lV,A.kz,A.ky,A.kG,A.kS,A.lz,A.lB,A.lC,A.lD,A.mU,A.n5,A.mD,A.mE,A.mZ,A.mK,A.mL,A.mM,A.mN,A.mO,A.mP,A.mQ,A.mV,A.mB,A.mC,A.mX,A.mY,A.mW,A.n6,A.ne,A.nf,A.ni,A.ng,A.nh,A.kr,A.ks,A.kt,A.mm,A.mg,A.mo,A.mu,A.mt,A.mr,A.ms,A.mj,A.mk,A.md,A.me,A.o2])
q(A.h7,[A.kR,A.kU,A.m0,A.pv,A.oH,A.oU,A.of,A.oi,A.m4,A.m6,A.oo,A.oy,A.nS,A.nR,A.ox,A.ow,A.m7,A.m8,A.m9,A.ma,A.na,A.nb,A.no,A.np,A.kk,A.kl,A.l6,A.pn,A.oF,A.kO,A.ls,A.kd,A.kA,A.kH,A.mT,A.ny])
q(A.ao,[A.hP,A.cl,A.hM,A.iN,A.ik,A.j8,A.eH,A.fX,A.bL,A.f6,A.iM,A.d_,A.h9])
r(A.dW,A.A)
r(A.dr,A.dW)
q(A.D,[A.as,A.cg,A.aO,A.af,A.d7,A.fj])
q(A.as,[A.f1,A.ad,A.ji])
r(A.cU,A.aP)
r(A.es,A.d2)
q(A.bD,[A.db,A.e_,A.e0])
q(A.db,[A.ae,A.aB])
r(A.Z,A.e_)
r(A.c7,A.e0)
r(A.e2,A.dJ)
r(A.c6,A.e2)
r(A.en,A.c6)
r(A.a6,A.em)
q(A.ch,[A.ds,A.fr])
q(A.ds,[A.dt,A.cd])
q(A.h6,[A.mz,A.nZ,A.o_,A.ou,A.ot,A.lE,A.o5,A.oa,A.o9,A.o7,A.o6,A.od,A.oc,A.ob,A.og,A.nr,A.oq,A.oO,A.oC,A.oB,A.l4,A.l1,A.lo,A.li,A.le,A.l9,A.ld,A.lb,A.lc,A.nM,A.nN,A.nL,A.pm,A.nl,A.nj,A.lr,A.lq,A.lJ,A.lW,A.lQ,A.lR,A.lP,A.lN,A.lO,A.lM,A.lU,A.ke,A.kf,A.kg,A.kh,A.ki,A.kB,A.kC,A.kD,A.kE,A.kF,A.kI,A.kJ,A.kK,A.kL,A.kM,A.lx,A.ly,A.lw,A.lu,A.lv,A.lt,A.lA,A.lG,A.lH,A.lI,A.n_,A.n0,A.n1,A.n2,A.n3,A.n4,A.mJ,A.mI,A.mH,A.mG,A.mF,A.mR,A.mS,A.nz,A.nA,A.nB,A.nC,A.nD,A.kq,A.kp,A.km,A.kn,A.ko,A.ml,A.mf,A.mn,A.mq,A.mp,A.mi,A.mh,A.mc,A.mb])
r(A.eT,A.cl)
q(A.iz,[A.ir,A.dl])
r(A.eG,A.bT)
q(A.eP,[A.hZ,A.aX])
q(A.aX,[A.fn,A.fp])
r(A.fo,A.fn)
r(A.eO,A.fo)
r(A.fq,A.fp)
r(A.bz,A.fq)
q(A.eO,[A.i_,A.i0])
q(A.bz,[A.i1,A.i2,A.i3,A.i4,A.i5,A.eQ,A.eR])
r(A.fz,A.j8)
r(A.cn,A.j0)
r(A.jw,A.fH)
r(A.fh,A.ff)
r(A.d9,A.fr)
q(A.cS,[A.h3,A.hl,A.hN])
q(A.hb,[A.kx,A.m2,A.m1,A.nU,A.nT])
r(A.hO,A.eH)
r(A.om,A.on)
r(A.iR,A.hl)
q(A.bL,[A.eW,A.hI])
r(A.j3,A.fF)
q(A.u,[A.a2,A.ho,A.bo,A.fs,A.br,A.b4,A.fw,A.iS,A.h0,A.cu])
q(A.a2,[A.I,A.c1])
r(A.K,A.I)
q(A.K,[A.fV,A.fW,A.hA,A.il,A.f4])
r(A.hc,A.bN)
r(A.dv,A.j2)
q(A.b7,[A.hd,A.he])
r(A.j5,A.j4)
r(A.eo,A.j5)
r(A.j7,A.j6)
r(A.hj,A.j7)
r(A.bh,A.ei)
r(A.ja,A.j9)
r(A.hn,A.ja)
r(A.jg,A.jf)
r(A.cW,A.jg)
r(A.hW,A.jm)
r(A.hX,A.jn)
r(A.jp,A.jo)
r(A.hY,A.jp)
r(A.jr,A.jq)
r(A.eS,A.jr)
r(A.jv,A.ju)
r(A.id,A.jv)
r(A.ij,A.jx)
r(A.ft,A.fs)
r(A.im,A.ft)
r(A.jB,A.jA)
r(A.io,A.jB)
r(A.is,A.jD)
r(A.jM,A.jL)
r(A.iC,A.jM)
r(A.fx,A.fw)
r(A.iD,A.fx)
r(A.jP,A.jO)
r(A.iH,A.jP)
r(A.jU,A.jT)
r(A.j1,A.jU)
r(A.fa,A.ep)
r(A.jW,A.jV)
r(A.je,A.jW)
r(A.jY,A.jX)
r(A.fm,A.jY)
r(A.k_,A.jZ)
r(A.jC,A.k_)
r(A.k1,A.k0)
r(A.jK,A.k1)
r(A.jk,A.jj)
r(A.hQ,A.jk)
r(A.jt,A.js)
r(A.i7,A.jt)
r(A.jI,A.jH)
r(A.iu,A.jI)
r(A.jR,A.jQ)
r(A.iJ,A.jR)
r(A.h_,A.j_)
r(A.i8,A.cu)
q(A.o0,[A.dX,A.cx,A.ex,A.nJ,A.kV,A.c0,A.bP,A.cw,A.hr,A.cM,A.eI,A.dM,A.nF,A.dT,A.el,A.dn,A.lZ])
q(A.J,[A.X,A.cy,A.ev,A.a7,A.dy])
q(A.X,[A.iq,A.h5,A.iL,A.dp,A.du,A.dx,A.hq,A.i6])
q(A.iq,[A.cB,A.eC,A.eg,A.hD,A.hE,A.hp,A.eB,A.ic,A.iU,A.dh,A.di,A.cO,A.dj,A.dk,A.cP,A.dq,A.dz,A.cV,A.dA,A.dB,A.cZ,A.dN,A.dQ,A.dR,A.d1,A.dU,A.dY,A.h1,A.hx,A.ax])
r(A.iT,A.ej)
r(A.hT,A.iT)
q(A.a7,[A.dm,A.ip,A.hy,A.iA,A.iB,A.hG,A.hB,A.iV,A.h8,A.k,A.hH,A.hR,A.ii])
r(A.o1,A.it)
s(A.dW,A.cC)
s(A.fn,A.A)
s(A.fo,A.av)
s(A.fp,A.A)
s(A.fq,A.av)
s(A.e2,A.fE)
s(A.j2,A.kX)
s(A.j4,A.A)
s(A.j5,A.P)
s(A.j6,A.A)
s(A.j7,A.P)
s(A.j9,A.A)
s(A.ja,A.P)
s(A.jf,A.A)
s(A.jg,A.P)
s(A.jm,A.T)
s(A.jn,A.T)
s(A.jo,A.A)
s(A.jp,A.P)
s(A.jq,A.A)
s(A.jr,A.P)
s(A.ju,A.A)
s(A.jv,A.P)
s(A.jx,A.T)
s(A.fs,A.A)
s(A.ft,A.P)
s(A.jA,A.A)
s(A.jB,A.P)
s(A.jD,A.T)
s(A.jL,A.A)
s(A.jM,A.P)
s(A.fw,A.A)
s(A.fx,A.P)
s(A.jO,A.A)
s(A.jP,A.P)
s(A.jT,A.A)
s(A.jU,A.P)
s(A.jV,A.A)
s(A.jW,A.P)
s(A.jX,A.A)
s(A.jY,A.P)
s(A.jZ,A.A)
s(A.k_,A.P)
s(A.k0,A.A)
s(A.k1,A.P)
s(A.jj,A.A)
s(A.jk,A.P)
s(A.js,A.A)
s(A.jt,A.P)
s(A.jH,A.A)
s(A.jI,A.P)
s(A.jQ,A.A)
s(A.jR,A.P)
s(A.j_,A.T)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{w:"int",ac:"double",aT:"num",f:"String",ab:"bool",aH:"Null",C:"List",Q:"Object",z:"Map",B:"JSObject"},mangledNames:{},types:["~()","~(Q)","~(f,@)","aH(@)","~(B)","z<f,@>(z<@,@>)","a1<f,@>(@,@)","~(@)","ab(f)","ab(a1<f,Q?>)","f(a1<f,Q?>)","~(~())","aH()","aH(B)","bi<~>(Q)","ab(z<f,@>)","~(Q?,Q?)","f(@)","~(f,f)","@(f)","bi<~>()","~(iG)","w()","@(@)","aH(Q,cA)","f(Q)","@()","C<z<f,@>>(C<z<f,@>>?)","f(aN)","f()","aH(@,cA)","~(w,@)","ab(f?)","f(f?)","f(a1<f,q>)","f(a1<bP,q>)","f(a1<c0,q>)","bi<~>(ew,w)","C<bS>()","0&(f,w?)","f(b9)","f(aZ)","Q?(Q?)","ck()","~(@,@)","ab(f,C<f>)","a7(bI)","dB(z<f,@>)","dz(z<f,@>)","dY(z<f,@>)","dp(z<f,@>)","dq(z<f,@>)","dh(z<f,@>)","dA(z<f,@>)","f(Q?{unitlessNumber:ab})","dx(z<f,@>)","cV(z<f,@>)","di(z<f,@>)","dN(z<f,@>)","f(Q{unitlessNumber:ab})","dk(z<f,@>)","dj(z<f,@>)","cP(z<f,@>)","cZ(z<f,@>)","dR(z<f,@>)","dQ(z<f,@>)","d1(z<f,@>)","du(z<f,@>)","ab(+(f,f,f))","f(f)","ab(+(f,f))","J(+(f,f,f,f))","aH(~())","~(f,f?)","Q?(C<z<f,@>>?)","@(@,f)","~(f,Q?)","0&()","dm(bP)","z<f,f>(z<f,f>,f)","J(Q?)","cO(z<f,@>)","dU(z<f,@>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.ae&&a.b(c.a)&&b.b(c.b),"2;body,title":(a,b)=>c=>c instanceof A.aB&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.Z&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.c7&&A.xV(a,b.a)}}
A.w1(v.typeUniverse,JSON.parse('{"ib":"cz","dV":"cz","cf":"cz","yb":"c","yr":"c","yq":"c","yd":"cu","yc":"u","za":"u","zc":"u","z7":"I","ye":"K","z8":"K","ys":"a2","yp":"a2","zr":"b4","yh":"c1","zg":"c1","yt":"cW","yi":"aj","yk":"bN","ym":"b3","yn":"b7","yj":"b7","yl":"b7","z9":"dL","hK":{"ab":[],"am":[]},"eE":{"aH":[],"am":[]},"c":{"B":[]},"cz":{"B":[]},"a4":{"C":["1"],"D":["1"],"B":[],"n":["1"]},"hJ":{"eZ":[]},"m_":{"a4":["1"],"C":["1"],"D":["1"],"B":[],"n":["1"]},"cN":{"ah":["1"]},"eF":{"ac":[],"aT":[]},"eD":{"ac":[],"w":[],"aT":[],"am":[]},"hL":{"ac":[],"aT":[],"am":[]},"cX":{"f":[],"my":[],"am":[]},"dZ":{"n":["2"]},"ek":{"ah":["2"]},"cQ":{"dZ":["1","2"],"n":["2"],"n.E":"2"},"fb":{"cQ":["1","2"],"dZ":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"cR":{"T":["3","4"],"z":["3","4"],"T.K":"3","T.V":"4"},"hP":{"ao":[]},"dr":{"A":["w"],"cC":["w"],"C":["w"],"D":["w"],"n":["w"],"A.E":"w","cC.E":"w"},"D":{"n":["1"]},"as":{"D":["1"],"n":["1"]},"f1":{"as":["1"],"D":["1"],"n":["1"],"n.E":"1","as.E":"1"},"by":{"ah":["1"]},"aP":{"n":["2"],"n.E":"2"},"cU":{"aP":["1","2"],"D":["2"],"n":["2"],"n.E":"2"},"eN":{"ah":["2"]},"ad":{"as":["2"],"D":["2"],"n":["2"],"n.E":"2","as.E":"2"},"aA":{"n":["1"],"n.E":"1"},"d3":{"ah":["1"]},"d2":{"n":["1"],"n.E":"1"},"es":{"d2":["1"],"D":["1"],"n":["1"],"n.E":"1"},"f2":{"ah":["1"]},"d4":{"n":["1"],"n.E":"1"},"f7":{"ah":["1"]},"dW":{"A":["1"],"cC":["1"],"C":["1"],"D":["1"],"n":["1"]},"ae":{"db":[],"bD":[]},"aB":{"db":[],"bD":[]},"Z":{"e_":[],"bD":[]},"c7":{"e0":[],"bD":[]},"en":{"c6":["1","2"],"e2":["1","2"],"dJ":["1","2"],"fE":["1","2"],"z":["1","2"]},"em":{"z":["1","2"]},"a6":{"em":["1","2"],"z":["1","2"]},"d8":{"n":["1"],"n.E":"1"},"co":{"ah":["1"]},"ds":{"ch":["1"],"dP":["1"],"D":["1"],"n":["1"]},"dt":{"ds":["1"],"ch":["1"],"dP":["1"],"D":["1"],"n":["1"]},"cd":{"ds":["1"],"ch":["1"],"dP":["1"],"D":["1"],"n":["1"]},"eT":{"cl":[],"ao":[]},"hM":{"ao":[]},"iN":{"ao":[]},"fu":{"cA":[]},"cv":{"bS":[]},"h6":{"bS":[]},"h7":{"bS":[]},"iz":{"bS":[]},"ir":{"bS":[]},"dl":{"bS":[]},"ik":{"ao":[]},"bT":{"T":["1","2"],"pV":["1","2"],"z":["1","2"],"T.K":"1","T.V":"2"},"cg":{"D":["1"],"n":["1"],"n.E":"1"},"eL":{"ah":["1"]},"aO":{"D":["1"],"n":["1"],"n.E":"1"},"cY":{"ah":["1"]},"af":{"D":["a1<1,2>"],"n":["a1<1,2>"],"n.E":"a1<1,2>"},"eK":{"ah":["a1<1,2>"]},"eG":{"bT":["1","2"],"T":["1","2"],"pV":["1","2"],"z":["1","2"],"T.K":"1","T.V":"2"},"db":{"bD":[]},"e_":{"bD":[]},"e0":{"bD":[]},"dE":{"vn":[],"my":[]},"fl":{"eY":[],"dK":[]},"iW":{"n":["eY"],"n.E":"eY"},"iX":{"ah":["eY"]},"f0":{"dK":[]},"jF":{"n":["dK"],"n.E":"dK"},"jG":{"ah":["dK"]},"dL":{"B":[],"am":[]},"eP":{"B":[]},"hZ":{"B":[],"am":[]},"aX":{"a3":["1"],"B":[]},"eO":{"A":["ac"],"aX":["ac"],"C":["ac"],"a3":["ac"],"D":["ac"],"B":[],"n":["ac"],"av":["ac"]},"bz":{"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"]},"i_":{"A":["ac"],"aX":["ac"],"C":["ac"],"a3":["ac"],"D":["ac"],"B":[],"n":["ac"],"av":["ac"],"am":[],"A.E":"ac","av.E":"ac"},"i0":{"A":["ac"],"aX":["ac"],"C":["ac"],"a3":["ac"],"D":["ac"],"B":[],"n":["ac"],"av":["ac"],"am":[],"A.E":"ac","av.E":"ac"},"i1":{"bz":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"i2":{"bz":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"i3":{"bz":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"i4":{"bz":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"i5":{"bz":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"eQ":{"bz":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"eR":{"bz":[],"q1":[],"A":["w"],"aX":["w"],"C":["w"],"a3":["w"],"D":["w"],"B":[],"n":["w"],"av":["w"],"am":[],"A.E":"w","av.E":"w"},"j8":{"ao":[]},"fz":{"cl":[],"ao":[]},"fy":{"iG":[]},"fv":{"ah":["1"]},"e1":{"n":["1"],"n.E":"1"},"b6":{"ao":[]},"cn":{"j0":["1"]},"an":{"bi":["1"]},"fH":{"ru":[]},"jw":{"fH":[],"ru":[]},"ff":{"T":["1","2"],"z":["1","2"]},"fh":{"ff":["1","2"],"T":["1","2"],"z":["1","2"],"T.K":"1","T.V":"2"},"d7":{"D":["1"],"n":["1"],"n.E":"1"},"fg":{"ah":["1"]},"d9":{"ch":["1"],"r9":["1"],"dP":["1"],"D":["1"],"n":["1"]},"fi":{"ah":["1"]},"A":{"C":["1"],"D":["1"],"n":["1"]},"T":{"z":["1","2"]},"fj":{"D":["2"],"n":["2"],"n.E":"2"},"fk":{"ah":["2"]},"dJ":{"z":["1","2"]},"c6":{"e2":["1","2"],"dJ":["1","2"],"fE":["1","2"],"z":["1","2"]},"ch":{"dP":["1"],"D":["1"],"n":["1"]},"fr":{"ch":["1"],"dP":["1"],"D":["1"],"n":["1"]},"jh":{"T":["f","@"],"z":["f","@"],"T.K":"f","T.V":"@"},"ji":{"as":["f"],"D":["f"],"n":["f"],"n.E":"f","as.E":"f"},"h3":{"cS":["C<w>","f"]},"hl":{"cS":["f","C<w>"]},"eH":{"ao":[]},"hO":{"ao":[]},"hN":{"cS":["Q?","f"]},"iR":{"cS":["f","C<w>"]},"ac":{"aT":[]},"w":{"aT":[]},"C":{"D":["1"],"n":["1"]},"eY":{"dK":[]},"f":{"my":[]},"fX":{"ao":[]},"cl":{"ao":[]},"bL":{"ao":[]},"eW":{"ao":[]},"hI":{"ao":[]},"f6":{"ao":[]},"iM":{"ao":[]},"d_":{"ao":[]},"h9":{"ao":[]},"i9":{"ao":[]},"f_":{"ao":[]},"jJ":{"cA":[]},"aY":{"vs":[]},"fF":{"iO":[]},"jy":{"iO":[]},"j3":{"iO":[]},"aj":{"B":[]},"bh":{"B":[]},"bj":{"B":[]},"bm":{"B":[]},"a2":{"B":[]},"bn":{"B":[]},"bo":{"B":[]},"bp":{"B":[]},"bq":{"B":[]},"b3":{"B":[]},"br":{"B":[]},"b4":{"B":[]},"bs":{"B":[]},"K":{"a2":[],"B":[]},"fU":{"B":[]},"fV":{"a2":[],"B":[]},"fW":{"a2":[],"B":[]},"ei":{"B":[]},"c1":{"a2":[],"B":[]},"hc":{"B":[]},"dv":{"B":[]},"b7":{"B":[]},"bN":{"B":[]},"hd":{"B":[]},"he":{"B":[]},"hg":{"B":[]},"hi":{"B":[]},"eo":{"A":["bU<aT>"],"P":["bU<aT>"],"C":["bU<aT>"],"a3":["bU<aT>"],"D":["bU<aT>"],"B":[],"n":["bU<aT>"],"P.E":"bU<aT>","A.E":"bU<aT>"},"ep":{"bU":["aT"],"B":[]},"hj":{"A":["f"],"P":["f"],"C":["f"],"a3":["f"],"D":["f"],"B":[],"n":["f"],"P.E":"f","A.E":"f"},"hk":{"B":[]},"I":{"a2":[],"B":[]},"u":{"B":[]},"hn":{"A":["bh"],"P":["bh"],"C":["bh"],"a3":["bh"],"D":["bh"],"B":[],"n":["bh"],"P.E":"bh","A.E":"bh"},"ho":{"B":[]},"hA":{"a2":[],"B":[]},"hF":{"B":[]},"cW":{"A":["a2"],"P":["a2"],"C":["a2"],"a3":["a2"],"D":["a2"],"B":[],"n":["a2"],"P.E":"a2","A.E":"a2"},"hU":{"B":[]},"hV":{"B":[]},"hW":{"T":["f","@"],"B":[],"z":["f","@"],"T.K":"f","T.V":"@"},"hX":{"T":["f","@"],"B":[],"z":["f","@"],"T.K":"f","T.V":"@"},"hY":{"A":["bm"],"P":["bm"],"C":["bm"],"a3":["bm"],"D":["bm"],"B":[],"n":["bm"],"P.E":"bm","A.E":"bm"},"eS":{"A":["a2"],"P":["a2"],"C":["a2"],"a3":["a2"],"D":["a2"],"B":[],"n":["a2"],"P.E":"a2","A.E":"a2"},"id":{"A":["bn"],"P":["bn"],"C":["bn"],"a3":["bn"],"D":["bn"],"B":[],"n":["bn"],"P.E":"bn","A.E":"bn"},"ij":{"T":["f","@"],"B":[],"z":["f","@"],"T.K":"f","T.V":"@"},"il":{"a2":[],"B":[]},"im":{"A":["bo"],"P":["bo"],"C":["bo"],"a3":["bo"],"D":["bo"],"B":[],"n":["bo"],"P.E":"bo","A.E":"bo"},"io":{"A":["bp"],"P":["bp"],"C":["bp"],"a3":["bp"],"D":["bp"],"B":[],"n":["bp"],"P.E":"bp","A.E":"bp"},"is":{"T":["f","f"],"B":[],"z":["f","f"],"T.K":"f","T.V":"f"},"f4":{"a2":[],"B":[]},"iC":{"A":["b4"],"P":["b4"],"C":["b4"],"a3":["b4"],"D":["b4"],"B":[],"n":["b4"],"P.E":"b4","A.E":"b4"},"iD":{"A":["br"],"P":["br"],"C":["br"],"a3":["br"],"D":["br"],"B":[],"n":["br"],"P.E":"br","A.E":"br"},"iF":{"B":[]},"iH":{"A":["bs"],"P":["bs"],"C":["bs"],"a3":["bs"],"D":["bs"],"B":[],"n":["bs"],"P.E":"bs","A.E":"bs"},"iI":{"B":[]},"iQ":{"B":[]},"iS":{"B":[]},"j1":{"A":["aj"],"P":["aj"],"C":["aj"],"a3":["aj"],"D":["aj"],"B":[],"n":["aj"],"P.E":"aj","A.E":"aj"},"fa":{"bU":["aT"],"B":[]},"je":{"A":["bj?"],"P":["bj?"],"C":["bj?"],"a3":["bj?"],"D":["bj?"],"B":[],"n":["bj?"],"P.E":"bj?","A.E":"bj?"},"fm":{"A":["a2"],"P":["a2"],"C":["a2"],"a3":["a2"],"D":["a2"],"B":[],"n":["a2"],"P.E":"a2","A.E":"a2"},"jC":{"A":["bq"],"P":["bq"],"C":["bq"],"a3":["bq"],"D":["bq"],"B":[],"n":["bq"],"P.E":"bq","A.E":"bq"},"jK":{"A":["b3"],"P":["b3"],"C":["b3"],"a3":["b3"],"D":["b3"],"B":[],"n":["b3"],"P.E":"b3","A.E":"b3"},"eu":{"ah":["1"]},"bx":{"B":[]},"bA":{"B":[]},"bC":{"B":[]},"hQ":{"A":["bx"],"P":["bx"],"C":["bx"],"D":["bx"],"B":[],"n":["bx"],"P.E":"bx","A.E":"bx"},"i7":{"A":["bA"],"P":["bA"],"C":["bA"],"D":["bA"],"B":[],"n":["bA"],"P.E":"bA","A.E":"bA"},"ie":{"B":[]},"iu":{"A":["f"],"P":["f"],"C":["f"],"D":["f"],"B":[],"n":["f"],"P.E":"f","A.E":"f"},"iJ":{"A":["bC"],"P":["bC"],"C":["bC"],"D":["bC"],"B":[],"n":["bC"],"P.E":"bC","A.E":"bC"},"fZ":{"B":[]},"h_":{"T":["f","@"],"B":[],"z":["f","@"],"T.K":"f","T.V":"@"},"h0":{"B":[]},"cu":{"B":[]},"i8":{"B":[]},"X":{"J":[]},"iq":{"X":[],"J":[]},"a7":{"J":[]},"cy":{"J":[]},"ev":{"J":[]},"dy":{"J":[]},"cB":{"X":[],"J":[]},"hT":{"ej":[]},"iT":{"ej":[]},"dm":{"J":[]},"eC":{"X":[],"J":[]},"ip":{"J":[]},"hy":{"J":[]},"iA":{"J":[]},"iB":{"J":[]},"hG":{"J":[]},"hB":{"J":[]},"iV":{"J":[]},"h8":{"J":[]},"k":{"J":[]},"hH":{"J":[]},"hR":{"J":[]},"ii":{"J":[]},"eg":{"X":[],"J":[]},"hD":{"X":[],"J":[]},"hE":{"X":[],"J":[]},"h5":{"X":[],"J":[]},"hp":{"X":[],"J":[]},"eB":{"X":[],"J":[]},"ic":{"X":[],"J":[]},"iL":{"X":[],"J":[]},"iU":{"X":[],"J":[]},"dh":{"X":[],"J":[]},"di":{"X":[],"J":[]},"cO":{"X":[],"J":[]},"dj":{"X":[],"J":[]},"dk":{"X":[],"J":[]},"cP":{"X":[],"J":[]},"dp":{"X":[],"J":[]},"dq":{"X":[],"J":[]},"du":{"X":[],"J":[]},"dx":{"X":[],"J":[]},"dz":{"X":[],"J":[]},"cV":{"X":[],"J":[]},"dA":{"X":[],"J":[]},"dB":{"X":[],"J":[]},"cZ":{"X":[],"J":[]},"dN":{"X":[],"J":[]},"dQ":{"X":[],"J":[]},"dR":{"X":[],"J":[]},"d1":{"X":[],"J":[]},"dU":{"X":[],"J":[]},"dY":{"X":[],"J":[]},"h1":{"X":[],"J":[]},"hq":{"X":[],"J":[]},"hx":{"X":[],"J":[]},"i6":{"X":[],"J":[]},"ax":{"X":[],"J":[]},"o1":{"it":["1"]},"fc":{"vr":["1"]},"v3":{"C":["w"],"D":["w"],"n":["w"]},"q1":{"C":["w"],"D":["w"],"n":["w"]},"vC":{"C":["w"],"D":["w"],"n":["w"]},"v1":{"C":["w"],"D":["w"],"n":["w"]},"vA":{"C":["w"],"D":["w"],"n":["w"]},"v2":{"C":["w"],"D":["w"],"n":["w"]},"vB":{"C":["w"],"D":["w"],"n":["w"]},"uZ":{"C":["ac"],"D":["ac"],"n":["ac"]},"v_":{"C":["ac"],"D":["ac"],"n":["ac"]}}'))
A.w0(v.typeUniverse,JSON.parse('{"dW":1,"aX":1,"fr":1,"hb":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.aD
return{n:s("b6"),gY:s("c0"),e8:s("dr"),bU:s("a6<f,Q>"),w:s("a6<f,f>"),J:s("a6<f,Q?>"),fe:s("dt<f>"),g5:s("aj"),x:s("q"),W:s("D<@>"),C:s("ao"),c8:s("bh"),dH:s("X"),f0:s("J"),cv:s("J(+(f,f,f,f))"),eh:s("J(Q?)"),c:s("bP"),Z:s("bS"),R:s("cd<w>"),fd:s("bI"),U:s("n<@>"),hb:s("n<w>"),Y:s("a4<J>"),g_:s("a4<bS>"),l:s("a4<bI>"),cB:s("a4<aN>"),c7:s("a4<z<f,@>>"),Q:s("a4<z<@,@>>"),G:s("a4<Q>"),O:s("a4<+(f,f)>"),s:s("a4<f>"),o:s("a4<ci>"),fS:s("a4<aZ>"),q:s("a4<@>"),t:s("a4<w>"),d4:s("a4<f?>"),r:s("a4<~()>"),T:s("eE"),m:s("B"),cj:s("cf"),aU:s("a3<@>"),fo:s("aN"),bG:s("bx"),aw:s("C<J>"),gz:s("C<bS>"),p:s("C<z<f,@>>"),gk:s("C<+(f,f)>"),a:s("C<f>"),dX:s("C<f8>"),db:s("C<fe>"),j:s("C<@>"),B:s("C<w>"),ah:s("a1<c0,q>"),ce:s("a1<bP,q>"),dv:s("a1<f,q>"),I:s("a1<f,@>"),d:s("a1<f,Q?>"),V:s("z<f,f>"),A:s("z<f,f9>"),P:s("z<f,@>"),f:s("z<@,@>"),L:s("z<f,Q?>"),bZ:s("aP<f,f>"),en:s("ad<Q,f>"),dY:s("ad<+(f,f,f,f),J>"),ct:s("ad<Q?,J>"),cI:s("bm"),eB:s("bz"),D:s("a2"),b:s("aH"),ck:s("bA"),K:s("Q"),he:s("bn"),gT:s("zb"),bQ:s("+()"),fz:s("+(f,f)"),bl:s("+(f,f,f)"),g4:s("+(f,f,C<+(f,f)>?)"),g9:s("+(f,f,f,f)"),at:s("bU<@>"),eU:s("bU<aT>"),cz:s("eY"),cq:s("dP<f>"),fY:s("bo"),dP:s("bp"),gf:s("bq"),k:s("cA"),ch:s("cB<bP>"),fp:s("cB<C<z<f,@>>?>"),aN:s("dS<C<z<f,@>>?>"),N:s("f"),f7:s("f(Q)"),dG:s("f(f)"),gn:s("b3"),dl:s("b9"),bc:s("aZ"),bO:s("ck"),a0:s("br"),do:s("b4"),E:s("iG"),aK:s("bs"),cM:s("bC"),dm:s("am"),eK:s("cl"),ak:s("dV"),dw:s("c6<f,f>"),dD:s("iO"),bv:s("aA<+(f,f,f)>"),cc:s("aA<f>"),cp:s("cn<fd>"),e:s("f9"),bJ:s("an<fd>"),_:s("an<@>"),fJ:s("an<w>"),hg:s("fh<Q?,Q?>"),y:s("ab"),al:s("ab(Q)"),dt:s("ab(+(f,f,f))"),bB:s("ab(f)"),i:s("ac"),z:s("@"),fO:s("@()"),bI:s("@(Q)"),ag:s("@(Q,cA)"),g6:s("@(@)"),S:s("w"),bp:s("X(z<f,@>)?"),eH:s("bi<aH>?"),g7:s("bj?"),bX:s("B?"),gw:s("C<z<f,@>>?"),bM:s("C<@>?"),v:s("z<f,f>?"),h:s("z<f,@>?"),fF:s("z<@,@>?"),X:s("Q?"),dk:s("f?"),F:s("d5<@,@>?"),g:s("jl?"),fQ:s("ab?"),cD:s("ac?"),h6:s("w?"),cg:s("aT?"),bn:s("~()?"),an:s("~(B)?"),di:s("aT"),H:s("~"),M:s("~()"),eA:s("~(f,f)"),u:s("~(f,@)"),fM:s("~(iG)"),aT:s("~(C<z<f,@>>?)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.iB=J.dC.prototype
B.f=J.a4.prototype
B.r=J.eD.prototype
B.X=J.eF.prototype
B.b=J.cX.prototype
B.iC=J.cf.prototype
B.iD=J.c.prototype
B.cr=A.eR.prototype
B.cz=J.ib.prototype
B.lD=A.f4.prototype
B.b8=J.dV.prototype
B.cC=new A.cM("flex-end",2,"end")
B.d=new A.cM("center",1,"center")
B.Q=new A.cM("flex-start",0,"start")
B.cE=new A.cM("stretch",3,"stretch")
B.v=new A.d("transparent")
B.b9=new A.m(0,B.v,"none")
B.ba=new A.m(1,B.v,"solid")
B.dy=new A.d("rgba(5, 150, 105, 0.28)")
B.cG=new A.m(1,B.dy,"solid")
B.dm=new A.d("rgba(0, 0, 0, 0)")
B.cJ=new A.m(0,B.dm,"solid")
B.dM=new A.d("rgba(30, 41, 59, 0.95)")
B.bb=new A.m(1,B.dM,"solid")
B.ei=new A.d("rgba(30, 41, 59, 1)")
B.cP=new A.m(1,B.ei,"solid")
B.cV=new A.c0(1024,2,"lg")
B.cW=new A.c0(1280,3,"xl")
B.cX=new A.c0(640,0,"sm")
B.cY=new A.c0(768,1,"md")
B.Z=new A.dn(0,"solid")
B.bc=new A.dn(1,"soft")
B.B=new A.dn(2,"outline")
B.D=new A.dn(3,"ghost")
B.cZ=new A.k9()
B.d_=new A.ka()
B.d0=new A.kb()
B.d1=new A.kc()
B.an=new A.hT()
B.p=new A.ku()
B.am=new A.kw()
B.lV=new A.kx()
B.d2=new A.h3()
B.d3=new A.kN()
B.bd=new A.h4()
B.d4=new A.kW()
B.a4=new A.hs()
B.i=new A.l_()
B.d5=new A.lF()
B.be=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.d6=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.db=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.d7=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.da=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.d9=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.d8=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.bf=function(hooks) { return hooks; }

B.E=new A.hN()
B.dc=new A.i9()
B.de=new A.nc()
B.T=new A.nd()
B.aH=new A.cd([200,201,202,204],t.R)
B.m_=new A.cd([400,401,402,403,404,405,408,409,410,422,429,500,501,502,503,504],t.R)
B.lX=new A.cd([301,302,303,304,307,308],t.R)
B.lZ=new A.cd([400,401,402,403,404,405,408,409,410,422,429],t.R)
B.lY=new A.cd([500,501,502,503,504],t.R)
B.df=new A.nm()
B.bg=new A.nH()
B.o=new A.nK()
B.U=new A.iR()
B.dg=new A.nU()
B.dh=new A.nV()
B.z=new A.jw()
B.ao=new A.jJ()
B.di=new A.d("rgba(234, 179, 8, 0.1)")
B.J=new A.d("#34d399")
B.bh=new A.d("rgba(5, 7, 13, 0.94)")
B.dn=new A.d("#c4b5fd")
B.aI=new A.d("#f97316")
B.dr=new A.d("rgba(15, 23, 42, 0.68)")
B.ap=new A.d("rgba(15, 23, 42, 0.72)")
B.dx=new A.d("rgba(5, 150, 105, 0.08)")
B.a_=new A.d("#a7f3d0")
B.aq=new A.d("#bae6fd")
B.aK=new A.d("#f59e0b")
B.dD=new A.d("rgba(251, 191, 36, 0.08)")
B.dC=new A.d("rgba(251, 191, 36, 0.32)")
B.bi=new A.d("#ef4444")
B.C=new A.d("#ffffff")
B.aL=new A.d("#a78bfa")
B.dJ=new A.d("linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)")
B.a5=new A.d("#94a3b8")
B.aM=new A.d("rgba(52, 211, 153, 0.1)")
B.bl=new A.d("rgba(52, 211, 153, 0.3)")
B.dO=new A.d("#67e8f9")
B.dR=new A.d("rgba(249, 115, 22, 0.12)")
B.dQ=new A.d("rgba(249, 115, 22, 0.18)")
B.dS=new A.d("rgba(249, 115, 22, 0.32)")
B.bn=new A.d("rgba(56, 189, 248, 0.3)")
B.dZ=new A.d("#6ee7b7")
B.K=new A.d("#38bdf8")
B.ar=new A.d("#fbbf24")
B.a0=new A.d("#7dd3fc")
B.as=new A.d("#64748b")
B.L=new A.d("#10b981")
B.e5=new A.d("rgba(56, 189, 248, 0.12)")
B.bq=new A.d("#fca5a5")
B.ed=new A.d("linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)")
B.aO=new A.d("rgba(52, 211, 153, 0.12)")
B.em=new A.d("rgba(52, 211, 153, 0.36)")
B.bt=new A.el(0,"xs")
B.R=new A.el(1,"sm")
B.w=new A.el(2,"md")
B.es=new A.kV(0,"lax")
B.bu=new A.hf("not-allowed")
B.et=new A.hf("pointer")
B.bv=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(0)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ev=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eu=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ew=new A.q(null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.I=new A.hw('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace')
B.bw=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.I,11,null,null,null,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c=new A.cw("flex",3,"flex")
B.bx=new A.q(null,null,null,null,null,null,null,null,B.c,4,B.d,null,null,null,null,B.i,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ae=new A.h(null,null,4,null)
B.ey=new A.q(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bV=new A.cw("inline-block",2,"inlineBlock")
B.bm=new A.d("#475569")
B.by=new A.q(null,null,22,null,null,null,null,null,B.bV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,B.bm,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.t=new A.F("100%")
B.q=new A.eI("center",1,"center")
B.au=new A.q(null,null,B.t,null,null,null,null,null,B.c,null,null,null,B.q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bp=new A.d("rgba(14, 165, 233, 0.1)")
B.dk=new A.d("rgba(125, 211, 252, 0.28)")
B.cF=new A.m(1,B.dk,"solid")
B.ez=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aq,null,null,null,null,null,null,null,null,null,B.bp,null,B.cF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aA=new A.h(2,2,2,2)
B.eA=new A.q(B.aA,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.J,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dd=new A.n7()
B.eB=new A.q(null,null,null,null,null,null,96,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bz=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.he=new A.h(32,null,null,null)
B.e=new A.cw("grid",5,"grid")
B.eC=new A.q(null,B.he,null,null,null,null,null,null,B.e,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hi=new A.h(36,null,null,null)
B.eD=new A.q(null,B.hi,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aC=new A.h(64,20,64,20)
B.hu=new A.h(64,36,64,36)
B.fa=new A.q(B.hu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hA=new A.h(72,56,72,56)
B.fq=new A.q(B.hA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hE=new A.h(80,80,80,80)
B.eW=new A.q(B.hE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.av=new A.q(B.aC,null,B.t,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fa,B.fq,B.eW)
B.dB=new A.d("rgba(148, 163, 184, 0.16)")
B.cQ=new A.m(1,B.dB,"solid")
B.eE=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bA=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,900,null,null,B.C,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hz=new A.h(72,36,72,36)
B.aP=new A.q(B.hz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eF=new A.q(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.aI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bB=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.I,14,900,null,null,B.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ho=new A.h(48,20,48,20)
B.ej=new A.d("rgba(255, 255, 255, 0.08)")
B.cR=new A.m(1,B.ej,"solid")
B.hs=new A.h(56,36,56,36)
B.bF=new A.q(B.hs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hv=new A.h(64,56,64,56)
B.bC=new A.q(B.hv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hB=new A.h(72,80,72,80)
B.bK=new A.q(B.hB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eG=new A.q(B.ho,null,B.t,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bF,B.bC,B.bK)
B.dj=new A.d("rgba(8, 47, 73, 0.25)")
B.en=new A.d("rgba(52, 211, 153, 0.38)")
B.cS=new A.m(1,B.en,"solid")
B.eH=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dj,null,B.cS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hJ=new A.h(null,18,null,18)
B.eI=new A.q(B.hJ,null,null,null,null,null,46,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bD=new A.q(null,null,null,null,null,null,null,null,B.bV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.m=new A.eI("space-between",3,"between")
B.aQ=new A.q(null,null,null,null,null,null,null,null,B.c,null,B.d,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h_=new A.h(12,20,12,20)
B.k=new A.cw("inline-flex",4,"inlineFlex")
B.aR=new A.q(B.h_,null,null,null,null,null,46,null,B.k,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,800,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.at=new A.d("rgba(52, 211, 153, 0.08)")
B.eJ=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,null,null,null,null,null,null,null,null,null,B.at,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ds=new A.d("rgba(15, 23, 42, 0.75)")
B.eK=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ds,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aw=new A.q(null,null,null,null,null,null,null,null,null,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eL=new A.q(B.aA,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aI,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bE=new A.q(null,null,null,null,0,null,null,null,B.c,10,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aJ=new A.d("#06b6d4")
B.eM=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.aJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bG=new A.q(null,null,null,null,null,null,null,null,null,0,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eO=new A.q(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.aL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dK=new A.d("rgba(52, 211, 153, 0.2)")
B.cM=new A.m(1,B.dK,"solid")
B.bH=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,null,null,null,null,null,null,null,null,null,B.aM,null,B.cM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eP=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aa=new A.h(20,20,20,20)
B.bs=new A.d("#040807")
B.eQ=new A.q(B.aa,null,null,null,null,null,null,380,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,B.I,13,null,1.65,null,null,null,null,null,null,"pre",null,null,null,null,B.bs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dv=new A.d("rgba(255, 255, 255, 0.92)")
B.eR=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.b3=new A.h(8,10,8,10)
B.eU=new A.q(B.b3,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c_=new A.h(48,null,null,null)
B.bI=new A.q(null,B.c_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hH=new A.h(null,12,null,12)
B.eV=new A.q(B.hH,null,null,null,null,null,34,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bJ=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.I,12,null,null,null,B.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hG=new A.h(96,80,96,80)
B.aS=new A.q(B.hG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dE=new A.d("rgba(255, 255, 255, 0.85)")
B.eX=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dF=new A.d("rgba(255, 255, 255, 0.75)")
B.dt=new A.d("rgba(15, 23, 42, 0.15)")
B.lx=new A.ap(12,32,-16,B.dt)
B.eY=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dF,null,null,null,null,null,null,null,B.lx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f_=new A.q(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f0=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,null,null,null,null,null,null,null,null,null,B.ap,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aN=new A.d("#e2e8f0")
B.f1=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.I,12,null,null,null,B.aN,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bL=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ek=new A.d("rgba(255, 255, 255, 0.88)")
B.f2=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ek,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f3=new A.q(B.aA,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.K,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bo=new A.d("rgba(56, 189, 248, 0.1)")
B.cH=new A.m(1,B.bn,"solid")
B.f5=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bo,null,B.cH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dT=new A.d("rgba(56, 189, 248, 0.4)")
B.cI=new A.m(1,B.dT,"solid")
B.f4=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bo,null,B.cI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hI=new A.h(null,14,null,14)
B.f6=new A.q(B.hI,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bM=new A.q(null,null,null,null,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f7=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,42,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eo=new A.d("rgba(52, 211, 153, 0.24)")
B.cT=new A.m(1,B.eo,"solid")
B.a6=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.at,null,B.cT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ep=new A.d("rgba(52, 211, 153, 0.28)")
B.cU=new A.m(1,B.ep,"solid")
B.a7=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.at,null,B.cU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hf=new A.h(36,20,36,20)
B.a2=new A.dM("relative",1,"relative")
B.hp=new A.h(48,36,48,36)
B.fJ=new A.q(B.hp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ht=new A.h(56,56,56,56)
B.ex=new A.q(B.ht,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hw=new A.h(64,80,64,80)
B.eZ=new A.q(B.hw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f8=new A.q(B.hf,null,B.t,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a2,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fJ,B.ex,B.eZ)
B.c1=new A.h(6,8,6,8)
B.f9=new A.q(B.c1,null,null,null,null,null,32,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fb=new A.q(null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fc=new A.q(B.aA,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aL,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fd=new A.q(null,null,null,null,null,null,null,null,B.c,12,B.d,null,null,null,null,B.i,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fZ=new A.h(12,16,12,16)
B.bN=new A.q(B.fZ,null,null,null,null,null,46,null,B.k,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,800,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fe=new A.q(null,null,B.t,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hk=new A.h(40,20,40,20)
B.ff=new A.q(B.hk,null,B.t,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a2,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bF,B.bC,B.bK)
B.hC=new A.h(7,9,7,9)
B.fh=new A.q(B.hC,null,null,null,null,null,36,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dq=new A.d("rgba(255, 255, 255, 0.1)")
B.cK=new A.m(1,B.dq,"solid")
B.fj=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fk=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bu,null,null,null,null,null,null,null,null,null,null,0.55,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aW=new A.h(10,12,10,12)
B.fl=new A.q(B.aW,null,null,null,null,null,46,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hn=new A.h(48,18,48,18)
B.aT=new A.q(B.hn,null,null,null,null,null,null,null,null,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fm=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(16px)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.br=new A.d("#3b82f6")
B.fn=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.br,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.F=new A.cw("block",0,"block")
B.fo=new A.q(null,null,null,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,800,null,0.5,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hD=new A.h(80,56,80,56)
B.aU=new A.q(B.hD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bO=new A.q(B.aC,null,B.t,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aP,B.aU,B.aS)
B.hl=new A.h(40,null,null,null)
B.fp=new A.q(null,B.hl,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h2=new A.h(14,20,14,20)
B.h3=new A.h(14,36,14,36)
B.fL=new A.q(B.h3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h4=new A.h(14,56,14,56)
B.fA=new A.q(B.h4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h5=new A.h(14,80,14,80)
B.eN=new A.q(B.h5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr=new A.q(B.h2,null,B.t,null,null,B.t,null,null,B.c,16,B.d,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fL,B.fA,B.eN)
B.hm=new A.h(48,16,48,16)
B.n=new A.F("auto")
B.ad=new A.h(null,B.n,null,B.n)
B.fs=new A.q(B.hm,B.ad,B.t,null,null,1152,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hK=new A.h(null,8,null,8)
B.ft=new A.q(B.hK,null,null,null,null,null,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bP=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,null,B.as,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.x=new A.hr("column",2,"column")
B.fu=new A.q(null,null,B.t,null,null,null,null,null,B.c,null,B.d,null,null,null,B.x,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fv=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.I,11,null,null,null,B.aN,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fw=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(-16px)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fx=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"scale(1)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fy=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.I,12,900,null,null,B.as,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hq=new A.h(4,4,4,4)
B.fz=new A.q(B.hq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a8=new A.q(null,null,null,null,null,null,null,null,B.c,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bQ=new A.q(null,null,null,null,null,null,null,null,B.c,12,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bR=new A.q(null,null,null,null,null,null,null,null,null,2,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aZ=new A.h(24,null,null,null)
B.bS=new A.q(null,B.aZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dV=new A.d("#ea580c")
B.dw=new A.d("#fdba74")
B.eT=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fB=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,null,B.dV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eT,null,null,null,null)
B.fC=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"scale(0.95)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h8=new A.h(28,20,28,20)
B.h9=new A.h(28,36,28,36)
B.fg=new A.q(B.h9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hc=new A.h(32,56,32,56)
B.eS=new A.q(B.hc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hh=new A.h(36,80,36,80)
B.fP=new A.q(B.hh,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fD=new A.q(B.h8,null,B.t,null,null,B.t,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fg,B.eS,B.fP)
B.fE=new A.q(B.aa,null,null,null,null,null,null,400,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,B.I,13,null,1.65,null,null,null,null,null,null,"pre",null,null,null,null,B.bs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fF=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aq,null,null,null,null,null,null,null,null,null,B.ap,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.e3=new A.d("rgba(148, 163, 184, 0.18)")
B.cO=new A.m(1,B.e3,"solid")
B.fG=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fH=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"underline",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dL=new A.d("rgba(52, 211, 153, 0.4)")
B.cN=new A.m(1,B.dL,"solid")
B.fI=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aM,null,B.cN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fK=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.I,13,null,null,null,B.aN,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hF=new A.h(8,null,null,null)
B.fM=new A.q(null,B.hF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hL=new A.h(null,null,28,null)
B.fN=new A.q(null,B.hL,null,null,null,null,null,null,B.c,null,null,null,B.q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bT=new A.q(null,null,null,null,null,null,null,null,B.c,6,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.e6=new A.d("rgba(56, 189, 248, 0.32)")
B.cL=new A.m(1,B.e6,"solid")
B.fO=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aq,null,null,null,null,null,null,null,null,null,B.bp,null,B.cL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fQ=new A.q(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10,800,null,null,B.J,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cD=new A.cM("baseline",4,"baseline")
B.bU=new A.q(null,null,B.t,null,null,null,null,null,B.c,14,B.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.G=new A.cw("none",6,"none")
B.aV=new A.bu(0)
B.fR=new A.bu(2e5)
B.ax=new A.bu(2e6)
B.fS=new A.bu(25e6)
B.fT=new A.bu(3e6)
B.fU=new A.bu(3e7)
B.fV=new A.bu(4e6)
B.fW=new A.bu(5e6)
B.fX=new A.bu(65e4)
B.l=new A.h(0,0,0,0)
B.bW=new A.h(0,12,0,12)
B.ay=new A.h(10,14,10,14)
B.a1=new A.h(10,16,10,16)
B.fY=new A.h(11,12,11,12)
B.bX=new A.h(12,22,12,22)
B.h0=new A.h(12,24,12,24)
B.h1=new A.h(12,null,4,null)
B.bY=new A.h(12,null,null,null)
B.aX=new A.h(14,14,14,14)
B.a9=new A.h(16,16,16,16)
B.az=new A.h(16,null,0,null)
B.H=new A.h(18,18,18,18)
B.aY=new A.h(18,null,0,null)
B.h6=new A.h(18,null,null,null)
B.h7=new A.h(1,5,1,5)
B.ab=new A.h(22,22,22,22)
B.V=new A.h(24,24,24,24)
B.bZ=new A.h(2,8,2,8)
B.ha=new A.h(2,null,2,null)
B.hb=new A.h(32,32,32,32)
B.hd=new A.h(32,null,0,null)
B.b_=new A.h(34,14,34,14)
B.hg=new A.h(36,36,36,36)
B.hj=new A.h(3,8,3,8)
B.aB=new A.h(4,10,4,10)
B.hr=new A.h(4,8,4,8)
B.b0=new A.h(5,10,5,10)
B.b1=new A.h(6,10,6,10)
B.b2=new A.h(6,12,6,12)
B.hx=new A.h(6,14,6,14)
B.c0=new A.h(6,6,6,6)
B.hy=new A.h(6,null,null,null)
B.c2=new A.h(7,10,7,10)
B.ac=new A.h(8,12,8,12)
B.aD=new A.h(8,null,8,null)
B.b4=new A.h(9,14,9,14)
B.hM=new A.h(null,null,6,null)
B.W=new A.hr("row",0,"row")
B.hN=new A.cx(0,"unknown")
B.c3=new A.cx(1,"timeout")
B.hO=new A.cx(2,"cancelled")
B.c4=new A.cx(3,"network")
B.b5=new A.cx(4,"http")
B.hP=new A.cx(5,"parse")
B.hQ=new A.ex(0,"json")
B.hR=new A.ex(1,"text")
B.c5=new A.ex(3,"unknown")
B.hS=new A.cy(" *")
B.S=new A.bP("dark",1,"dark")
B.af=new A.bP("light",0,"light")
B.cs={bg:0,text:1,muted:2,panel:3,panelStrong:4,line:5,primary:6,accent:7,warning:8}
B.ec=new A.d("#f8fafc")
B.bj=new A.d("#0f172a")
B.e0=new A.d("#f1f5f9")
B.e4=new A.d("rgba(148, 163, 184, 0.42)")
B.dz=new A.d("#059669")
B.eg=new A.d("#0284c7")
B.dl=new A.d("#b45309")
B.jo=new A.a6(B.cs,[B.ec,B.bj,B.bm,B.C,B.e0,B.e4,B.dz,B.eg,B.dl],t.J)
B.jD={pageX:0,sectionY:1}
B.lC=new A.F("min(1152px, calc(100% - 32px))")
B.cm=new A.a6(B.jD,[B.lC,64],t.J)
B.jC={md:0,pill:1}
B.cl=new A.a6(B.jC,[8,9999],t.J)
B.cw={sm:0,glow:1}
B.du=new A.d("rgba(15, 23, 42, 0.18)")
B.lv=new A.ap(14,34,-24,B.du)
B.dY=new A.d("rgba(2, 132, 199, 0.2)")
B.lt=new A.ap(18,54,-30,B.dY)
B.jg=new A.a6(B.cw,[B.lv,B.lt],t.J)
B.jF={sans:0,mono:1}
B.c6=new A.hw('Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif')
B.ck=new A.a6(B.jF,[B.c6,B.I],t.J)
B.ai={}
B.a=new A.a6(B.ai,[],t.J)
B.m0=new A.iE(B.a)
B.hV=new A.hv(B.jo,B.cm,B.cl,B.jg)
B.dN=new A.d("#05070d")
B.ef=new A.d("#a8b3c5")
B.eh=new A.d("#111827")
B.dp=new A.d("rgba(51, 65, 85, 0.82)")
B.jn=new A.a6(B.cs,[B.dN,B.C,B.ef,B.bj,B.eh,B.dp,B.J,B.K,B.aK],t.J)
B.dA=new A.d("rgba(2, 6, 23, 0.42)")
B.ls=new A.ap(14,34,-24,B.dA)
B.e7=new A.d("rgba(56, 189, 248, 0.42)")
B.lu=new A.ap(18,54,-30,B.e7)
B.jf=new A.a6(B.cw,[B.ls,B.lu],t.J)
B.hU=new A.hv(B.jn,B.cm,B.cl,B.jf)
B.hT=new A.lg(B.hV,B.hU,B.S)
B.jk=new A.a6(B.ai,[],A.aD("a6<f,C<f>>"))
B.A=new A.bQ(B.jk)
B.c7=new A.bv("50% 50%")
B.hW=new A.bv("88% 12%")
B.hY=new A.bv("85% 10%")
B.hX=new A.bv("85% 15%")
B.c8=new A.bv("88% 8%")
B.c9=new A.bv("18% 0%")
B.hZ=new A.bv("50% 60%")
B.i_=new A.bv("80% 10%")
B.ca=new A.bv("15% 0%")
B.i0=new A.bv("12% 0%")
B.i1=new A.bv("20% 0%")
B.M=new A.bw("1fr")
B.N=new A.aG("1fr")
B.ce=new A.lZ(0,"outline")
B.iE=new A.m1(null)
B.iF=new A.m2(null)
B.iG=new A.eI("flex-start",0,"start")
B.lk=new A.c7(["FULL-STACK WEB","Server, SSR & Declarative UI","High-performance HTTP server, SEO-first server-side rendering, and declarative Web UI without client bloat.","#34d399"])
B.lm=new A.c7(["CROSS-PLATFORM CLIENT","Universal SDK & Sync","Multi-tier caching, offline mutation replay, streaming WebSocket channels, and seamless database queries.","#38bdf8"])
B.lo=new A.c7(["AI AGENT MESH","Multimodal Inference & Tools","Autonomous agents with tool policies, memory persistence, streaming responses, and vector embeddings.","#a78bfa"])
B.ln=new A.c7(["ROBOTICS & HARDWARE","Edge Firmware & Sensors","Sonar distance sensors, IMU motion trackers, motor drivers, and instant Wokwi browser simulation.","#f97316"])
B.lj=new A.c7(["SECURE DATA GATEWAY","Row-Level Security & Wire Protocol","Owner-isolated CRUD policies, concealed fields, query AST compilers, and relational data hydration.","#ec4899"])
B.ll=new A.c7(["DEVELOPER EXPERIENCE","100% Type-Safe Pure Dart","Shared data models, end-to-end type checking, instant worker hot reload, and streamlined CLI tooling.","#f59e0b"])
B.iH=s([B.lk,B.lm,B.lo,B.ln,B.lj,B.ll],A.aD("a4<+(f,f,f,f)>"))
B.dU=new A.d("rgba(56, 189, 248, 0.2)")
B.ip=new A.L(B.dU,0)
B.aE=new A.L(B.v,45)
B.iI=s([B.ip,B.aE],t.G)
B.iJ=s(["models","orm","orm-query","orm-relations"],t.s)
B.jU=new A.aB("Flint Dart now sanitizes res.page() props before embedding them in the browser payload, including DateTime, Uri, enum values, models, maps, iterables, and objects with toJson() or toMap().","JSON-Safe Flint Page Props")
B.k_=new A.aB("Flint UI now replaces child components by default during parent rebuilds, so constructor-provided values stay current without requiring updateFrom for ordinary display components.","Fresh Child Component Values")
B.jZ=new A.aB("StatefulComponent and StatelessComponent make lifecycle intent clear. Component remains backwards-compatible, while components that must survive parent rebuilds can opt in with preserveState.","Explicit Component Lifecycle Bases")
B.k2=new A.aB("The docs app now targets hosted pub.dev versions of flint_dart and flint_ui, keeping deployment independent of GitHub package overrides.","Hosted Package Deployment")
B.k0=new A.aB("Flint UI now lets docs pages and app screens be built with Dart components, state, events, and inline DartStyle without leaving the Dart ecosystem.","Flint UI Components")
B.kp=new A.aB("Docs now show a cleaner project shape with controllers, models, routes, UI pages, shared layouts, and reusable components organized in predictable folders.","Clear App Folder Structure")
B.ke=new A.aB("Column(renamedFrom: ...) lets migrations rename existing columns without dropping user data, with warnings for risky case-only renames.","Safer Column Renames")
B.kf=new A.aB("Schema columns now support comment metadata and MySQL-only after placement for cleaner migrated tables.","Column Comments & Placement")
B.kb=new A.aB("app.controller(...) gives route groups a concise, request-scoped controller API while still creating a fresh controller for every request.","Cleaner Controller Routes")
B.k1=new A.aB("Auth.verifyPasswordResetCode(...) lets apps validate reset codes before changing a password, and resetPasswordWithCode(...) now shares the same verification logic.","Password Reset Code Checks")
B.kw=new A.aB("AuthVerification.verifyPasswordResetCode(...) keeps extension-based auth flows aligned with the new core reset-code verifier.","Auth Verification Wrapper")
B.jQ=new A.aB("Exception middleware regression coverage now includes awaited async handlers that throw AuthException.","Async Auth Errors Covered")
B.jW=new A.aB("validate(), input(), allInput(), and rawBody() now cover JSON, forms, multipart fields, files, query params, and route params through one request API.","Unified Request Input")
B.jY=new A.aB("WebSocket rooms are now isolated by path, with explicit cross-namespace helpers like emitToRoomIn(...) and emitToNamespace(...).","WebSocket Namespaces")
B.k6=new A.aB("emit(...) and sendJson(...) now normalize values like DateTime, collections, exceptions, and objects with toMap() or toJson() before encoding.","Safer WebSocket Payloads")
B.kv=new A.aB("Generated docs now include app.websocket(...) handshake routes with 101 Switching Protocols and Flint-specific metadata.","Swagger Knows WebSockets")
B.k7=new A.aB("The docs now emphasize lib/config/seeder_registry.dart as the canonical entry point for flint --db-seed.","Seeder Registry First")
B.jR=new A.aB("orWhere(...) now compiles consistently across select, update, delete, and model helpers, and all() preserves any query filters you chained before it.","ORM Query Fixes")
B.jS=new A.aB("All core docs now use (Context ctx) examples for better autocomplete and consistency.","Context-First Docs")
B.iK=s([B.jU,B.k_,B.jZ,B.k2,B.k0,B.kp,B.ke,B.kf,B.kb,B.k1,B.kw,B.jQ,B.jW,B.jY,B.k6,B.kv,B.k7,B.jR,B.jS],A.aD("a4<+body,title(f,f)>"))
B.bk=new A.d("#000000")
B.ii=new A.L(B.bk,0)
B.il=new A.L(B.bk,65)
B.i4=new A.L(B.v,100)
B.iL=s([B.ii,B.il,B.i4],t.G)
B.dG=new A.d("rgba(16, 185, 129, 0.12)")
B.i2=new A.L(B.dG,null)
B.i6=new A.L(B.v,30)
B.iN=s([B.i2,B.i6],t.G)
B.dW=new A.d("rgba(14, 165, 233, 0.14)")
B.ij=new A.L(B.dW,null)
B.i8=new A.L(B.v,34)
B.iO=s([B.ij,B.i8],t.G)
B.e8=new A.d("rgba(56, 189, 248, 0.08)")
B.ie=new A.L(B.e8,null)
B.ix=new A.L(B.at,null)
B.i3=new A.L(B.bh,null)
B.iP=s([B.ie,B.ix,B.i3],t.G)
B.dP=new A.d("rgba(139, 92, 246, 0.1)")
B.is=new A.L(B.dP,0)
B.cc=new A.L(B.v,55)
B.iQ=s([B.is,B.cc],t.G)
B.dH=new A.d("rgba(16, 185, 129, 0.18)")
B.cd=new A.L(B.dH,0)
B.iR=s([B.cd,B.aE],t.G)
B.kM=new A.Z("flint-class","Flint Class","Core Framework")
B.kN=new A.Z("request","Request","Core Framework")
B.lb=new A.Z("response","Response","Core Framework")
B.kB=new A.Z("router","Router","Core Framework")
B.l2=new A.Z("middleware","Middleware","Core Framework")
B.l7=new A.Z("model","Model","Database")
B.kD=new A.Z("query-builder","Query Builder","Database")
B.l6=new A.Z("migration","Migration","Database")
B.lc=new A.Z("schema","Schema","Database")
B.kW=new A.Z("auth","Auth Manager","Authentication")
B.kU=new A.Z("guards","Auth Guards","Authentication")
B.kG=new A.Z("providers","Auth Providers","Authentication")
B.la=new A.Z("components","Components","Flint UI")
B.kE=new A.Z("layout","Layout","Flint UI")
B.kX=new A.Z("forms","Forms","Flint UI")
B.kP=new A.Z("cache","Cache","Utilities")
B.ld=new A.Z("session","Session","Utilities")
B.le=new A.Z("storage","Storage","Utilities")
B.l4=new A.Z("mail","Mail","Utilities")
B.lg=new A.Z("validation","Validation","Utilities")
B.cf=s([B.kM,B.kN,B.lb,B.kB,B.l2,B.l7,B.kD,B.l6,B.lc,B.kW,B.kU,B.kG,B.la,B.kE,B.kX,B.kP,B.ld,B.le,B.l4,B.lg],A.aD("a4<+(f,f,f)>"))
B.iS=s(["Flint","Model","Flint UI","Routing","Auth","Middleware","Database","Deployment"],t.s)
B.iT=s(["authentication","security"],t.s)
B.dI=new A.d("rgba(16, 185, 129, 0.15)")
B.iv=new A.L(B.dI,0)
B.ib=new A.L(B.v,60)
B.iU=s([B.iv,B.ib],t.G)
B.e9=new A.d("rgba(56, 189, 248, 0.18)")
B.id=new A.L(B.e9,0)
B.iV=s([B.id,B.aE],t.G)
B.iX=s([],A.aD("a4<~(hu)>"))
B.ag=s([],t.Y)
B.O=s([],t.c7)
B.aF=s([],t.s)
B.lW=s([],t.o)
B.iW=s([],A.aD("a4<zf>"))
B.iY=s([],t.q)
B.h=s([],A.aD("a4<Q?>"))
B.i9=new A.L(B.v,42)
B.cg=s([B.cd,B.i9],t.G)
B.eq=new A.d("rgba(52, 211, 153, 0.22)")
B.iu=new A.L(B.eq,0)
B.iZ=s([B.iu,B.aE],t.G)
B.dX=new A.d("rgba(14, 165, 233, 0.18)")
B.iq=new A.L(B.dX,0)
B.ia=new A.L(B.v,44)
B.ch=s([B.iq,B.ia],t.G)
B.ea=new A.d("rgba(56, 189, 248, 0.16)")
B.ig=new A.L(B.ea,null)
B.i7=new A.L(B.v,32)
B.j0=s([B.ig,B.i7],t.G)
B.e1=new A.d("#f8fffb")
B.ik=new A.L(B.e1,0)
B.e2=new A.d("#f0faf5")
B.ir=new A.L(B.e2,48)
B.ee=new A.d("#eaf6fa")
B.iA=new A.L(B.ee,100)
B.ci=s([B.ik,B.ir,B.iA],t.G)
B.j2=s(["middleware","validation"],t.s)
B.eb=new A.d("rgba(56, 189, 248, 0.24)")
B.ih=new A.L(B.eb,null)
B.er=new A.d("rgba(52, 211, 153, 0.18)")
B.iy=new A.L(B.er,null)
B.j3=s([B.ih,B.iy],t.G)
B.cb=new A.L(B.L,0)
B.io=new A.L(B.aJ,45)
B.e_=new A.d("#8b5cf6")
B.it=new A.L(B.e_,100)
B.j4=s([B.cb,B.io,B.it],t.G)
B.j5=s(["routing","route-params","query-params","request-response","request-body","file-uploads","route-groups"],t.s)
B.l_=new A.Z("introduction","Introduction",null)
B.kC=new A.Z("flint-story","Flint Story",null)
B.kZ=new A.Z("installation","Install",null)
B.kI=new A.Z("create-run","Create & Run",null)
B.kR=new A.Z("cli","CLI",null)
B.kq=new A.ae("routing","Overview")
B.kz=new A.ae("route-params","Route Params")
B.kh=new A.ae("query-params","Query Params")
B.ku=new A.ae("request-response","Request & Response")
B.k5=new A.ae("request-body","Request Body")
B.ki=new A.ae("file-uploads","File Uploads")
B.kr=new A.ae("route-groups","Route Groups")
B.j_=s([B.kq,B.kz,B.kh,B.ku,B.k5,B.ki,B.kr],t.O)
B.kL=new A.Z("routing","Routing",B.j_)
B.kj=new A.ae("middleware","Overview")
B.jP=new A.ae("validation","Input Validation")
B.j9=s([B.kj,B.jP],t.O)
B.l1=new A.Z("middleware","Middleware",B.j9)
B.k8=new A.ae("authentication","Overview")
B.ks=new A.ae("security","Security")
B.j1=s([B.k8,B.ks],t.O)
B.kY=new A.Z("authentication","Authentication",B.j1)
B.kH=new A.Z("sessions","Sessions & Cookies",null)
B.kQ=new A.Z("cache","Caching",null)
B.lf=new A.Z("storage","Storage",null)
B.l3=new A.Z("logging","Logging",null)
B.kF=new A.Z("errors","Errors & Exceptions",null)
B.kA=new A.Z("helpers","Helpers & Utils",null)
B.kV=new A.Z("architecture","Controllers & Services",null)
B.l5=new A.Z("mail","Mail",null)
B.l9=new A.Z("ai","AI Runtime",null)
B.l0=new A.Z("isolate","Isolate",null)
B.kO=new A.Z("swagger-docs","Swagger Docs",null)
B.kS=new A.Z("database","Database",null)
B.li=new A.Z("websockets","WebSockets",null)
B.lh=new A.Z("views","Views",null)
B.kK=new A.Z("theme-mode","Light & Dark Mode",null)
B.kk=new A.ae("models","Overview")
B.ko=new A.ae("orm","ORM")
B.jV=new A.ae("orm-query","Query")
B.jO=new A.ae("orm-relations","Relations")
B.iM=s([B.kk,B.ko,B.jV,B.jO],t.O)
B.kJ=new A.Z("models","Models & Tables",B.iM)
B.l8=new A.Z("table-sync","Table Sync",null)
B.kT=new A.Z("deployment","Deployment",null)
B.j6=s([B.l_,B.kC,B.kZ,B.kI,B.kR,B.kL,B.l1,B.kY,B.kH,B.kQ,B.lf,B.l3,B.kF,B.kA,B.kV,B.l5,B.l9,B.l0,B.kO,B.kS,B.li,B.lh,B.kK,B.kJ,B.l8,B.kT],A.aD("a4<+(f,f,C<+(f,f)>?)>"))
B.im=new A.L(B.aJ,48)
B.ic=new A.L(B.br,100)
B.j7=s([B.cb,B.im,B.ic],t.G)
B.el=new A.d("rgba(167, 139, 250, 0.12)")
B.iw=new A.L(B.el,0)
B.j8=s([B.iw,B.cc],t.G)
B.iz=new A.L(B.aO,null)
B.i5=new A.L(B.v,28)
B.ja=s([B.iz,B.i5],t.G)
B.jG={width:0,height:1,"object-fit":2,display:3,background:4}
B.jb=new A.a6(B.jG,["100%","100%","cover","block","#020617"],t.w)
B.jK={margin:0,"font-size":1,color:2}
B.jc=new A.a6(B.jK,[0,"13px","#b42318"],t.bU)
B.jE={display:0,"max-width":1}
B.jd=new A.a6(B.jE,["block","100%"],t.J)
B.cv={display:0,gap:1}
B.cj=new A.a6(B.cv,["grid","6px"],t.w)
B.je=new A.a6(B.cv,["grid","16px"],t.J)
B.cu={display:0,"flex-direction":1}
B.jh=new A.a6(B.cu,["flex","row"],t.J)
B.ji=new A.a6(B.cu,["flex","column"],t.J)
B.jJ={type:0}
B.ah=new A.a6(B.jJ,["submit"],t.J)
B.cn=new A.a6(B.ai,[],A.aD("a6<f,q>"))
B.co=new A.a6(B.ai,[],t.w)
B.Y=new A.a6(B.ai,[],A.aD("a6<f,@>"))
B.jH={"background-size":0}
B.jl=new A.a6(B.jH,["44px 44px, 44px 44px"],t.J)
B.jw={introduction:0,installation:1,"create-run":2,cli:3,routing:4,"route-params":5,"query-params":6,"request-response":7,"request-body":8,"file-uploads":9,"route-groups":10,middleware:11,validation:12,authentication:13,security:14,sessions:15,cache:16,storage:17,logging:18,errors:19,helpers:20,architecture:21,mail:22,ai:23,isolate:24,"swagger-docs":25,database:26,websockets:27,views:28,models:29,orm:30,"orm-query":31,"orm-relations":32,"table-sync":33,deployment:34}
B.jm=new A.a6(B.jw,["installation","installation","create-run","cli","routing","routing","routing","routing","routing","routing","route-groups","middleware","validation","authentication","security","sessions","cache","storage","logging","errors","helpers","architecture","mail","ai","isolate","swagger-docs","database","websockets","views","models","models","models","models","table-sync","deployment"],t.w)
B.ju={"aria-hidden":0}
B.cp=new A.a6(B.ju,["true"],t.J)
B.cx={style:0}
B.jB={width:0,"max-width":1,"overflow-x":2}
B.jr=new A.a6(B.jB,["100%","100%","hidden"],t.w)
B.cq=new A.a6(B.cx,[B.jr],t.J)
B.jx={"min-width":0,"max-width":1,"overflow-wrap":2}
B.jj=new A.a6(B.jx,["0","100%","break-word"],t.w)
B.aG=new A.a6(B.cx,[B.jj],t.J)
B.jv={position:0,inset:1,display:2,width:3,height:4,padding:5,margin:6,border:7,"border-radius":8,background:9,appearance:10,cursor:11}
B.b6=new A.a6(B.jv,["absolute","0","block","100%","100%","0","0","0","0","rgba(2, 6, 23, 0.78)","none","pointer"],t.w)
B.jy={width:0,height:1,"min-height":2,"object-fit":3,display:4}
B.jp=new A.a6(B.jy,["100%","100%","210px","cover","block"],t.w)
B.jz={"font-size":0,"font-weight":1,color:2}
B.jq=new A.a6(B.jz,["14px",600,"#344054"],t.bU)
B.ct={"aria-label":0}
B.js=new A.a6(B.ct,["Close API navigation"],t.J)
B.jt=new A.a6(B.ct,["Close guide navigation"],t.J)
B.cy=new A.ia("auto")
B.u=new A.ia("hidden")
B.aj=new A.dM("absolute",2,"absolute")
B.b7=new A.dM("fixed",3,"fixed")
B.jL=new A.dM("sticky",4,"sticky")
B.jM=new A.ae("/ai","AI Engine")
B.jN=new A.ae("/fullstack/guides","Fullstack Guides")
B.jT=new A.ae("/fullstack/examples","Examples & Tutorials")
B.jX=new A.ae("/fullstack/whats-new","What's New")
B.k3=new A.ae("https://github.com/flint-dart/flint_dart/discussions","Discussions")
B.k4=new A.ae("/fullstack/api","Fullstack API")
B.k9=new A.ae("https://github.com/flint-dart/flint_dart/issues","Issues")
B.ka=new A.ae("https://github.com/flint-dart/flint_dart/pulls","Pull requests")
B.kc=new A.ae("/showcase","Built with Flint")
B.kd=new A.ae("/blog","Blog")
B.kg=new A.ae("/hardware","Hardware & Robotics")
B.kl=new A.ae("/fullstack","Fullstack Framework")
B.km=new A.ae("/client","Client SDK")
B.kn=new A.ae("/fullstack/changelog","Changelog")
B.kt=new A.ae("/dart","Dart Lessons")
B.kx=new A.ae("/showcase/submit","Submit a build")
B.ky=new A.ae("/questions","Questions")
B.jI={flex:0,"flex-grow":1,"flex-shrink":2,"font-weight":3,"line-height":4,opacity:5,"z-index":6}
B.lp=new A.dt(B.jI,7,t.fe)
B.jA={svg:0,path:1,line:2,polyline:3,polygon:4,circle:5,rect:6,ellipse:7,title:8,g:9}
B.lq=new A.dt(B.jA,10,t.fe)
B.lr=new A.ap(1,0,0,B.v)
B.lw=new A.ap(0,10,2,B.L)
B.ly=new A.F("clamp(3rem, 6.2vw, 5.2rem)")
B.lz=new A.F("max-content")
B.lA=new A.F("clamp(2.5rem, 5.2vw, 4.4rem)")
B.a3=new A.F("0")
B.lB=new A.F("100vh")
B.P=new A.nF(1,"center")
B.cA=new A.nJ(0,"topRight")
B.y=new A.dT(0,"neutral")
B.j=new A.dT(1,"primary")
B.lE=new A.dT(3,"warning")
B.lF=new A.dT(4,"danger")
B.m1=new A.iK("ease")
B.lG=new A.iK("linear")
B.lH=A.bY("yf")
B.lI=A.bY("yg")
B.lJ=A.bY("uZ")
B.lK=A.bY("v_")
B.lL=A.bY("v1")
B.lM=A.bY("v2")
B.lN=A.bY("v3")
B.lO=A.bY("Q")
B.lP=A.bY("vA")
B.lQ=A.bY("vB")
B.lR=A.bY("vC")
B.lS=A.bY("q1")
B.lT=new A.nT(!1)
B.ak=new A.dX(0,"disconnected")
B.cB=new A.dX(1,"connecting")
B.al=new A.dX(2,"connected")
B.lU=new A.dX(3,"reconnecting")})();(function staticFields(){$.ok=null
$.bG=A.e([],t.G)
$.rc=null
$.mA=0
$.ih=A.wZ()
$.qS=null
$.qR=null
$.tm=null
$.ta=null
$.tq=null
$.pq=null
$.px=null
$.qm=null
$.op=A.e([],A.aD("a4<C<Q>?>"))
$.e5=null
$.fJ=null
$.fK=null
$.qh=!1
$.ag=B.z
$.t4=A.dH(t.N)
$.t3=A.dH(t.N)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"yo","qu",()=>A.xG("_$dart_dartClosure"))
s($,"zY","uo",()=>A.e([new J.hJ()],A.aD("a4<eZ>")))
s($,"zh","tO",()=>A.cm(A.nP({
toString:function(){return"$receiver$"}})))
s($,"zi","tP",()=>A.cm(A.nP({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"zj","tQ",()=>A.cm(A.nP(null)))
s($,"zk","tR",()=>A.cm(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"zn","tU",()=>A.cm(A.nP(void 0)))
s($,"zo","tV",()=>A.cm(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"zm","tT",()=>A.cm(A.rp(null)))
s($,"zl","tS",()=>A.cm(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"zq","tX",()=>A.cm(A.rp(void 0)))
s($,"zp","tW",()=>A.cm(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"zs","qF",()=>A.vH())
s($,"zy","u2",()=>A.v8(4096))
s($,"zw","u0",()=>new A.oC().$0())
s($,"zx","u1",()=>new A.oB().$0())
s($,"zt","tY",()=>new Int8Array(A.wz(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"zu","tZ",()=>A.bV("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"zv","u_",()=>typeof URLSearchParams=="function")
s($,"zQ","k7",()=>A.fN(B.lO))
s($,"zd","qE",()=>{A.vj()
return $.mA})
s($,"Ag","cb",()=>{var r=A.wt()
return new A.kT(new A.l0(r,B.co,B.Y,B.fU,null,!1,null,!1,B.df,!0))})
s($,"yu","pK",()=>A.a8("activity",A.e([A.c9("22 12 18 12 15 21 9 3 6 12 2 12")],t.l)))
s($,"yv","qv",()=>A.a8("alertCircle",A.e([A.c8(12,12,10),A.aJ(12,8,12,13),A.aJ(12,17,12,17)],t.l)))
s($,"yw","qw",()=>A.a8("archive",A.e([A.fL(3,4,18,4,null),A.a0("M5 8v12h14V8"),A.a0("M10 12h4")],t.l)))
s($,"yx","tz",()=>A.a8("arrowDown",A.e([A.a0("M12 5v14"),A.c9("19 12 12 19 5 12")],t.l)))
s($,"yy","pL",()=>A.a8("arrowLeft",A.e([A.a0("M19 12H5"),A.c9("12 19 5 12 12 5")],t.l)))
s($,"yz","bZ",()=>A.a8("arrowRight",A.e([A.a0("M5 12h14"),A.c9("12 5 19 12 12 19")],t.l)))
s($,"yA","fO",()=>A.a8("book",A.e([A.a0("M4 19.5A2.5 2.5 0 0 1 6.5 17H20"),A.a0("M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z")],t.l)))
s($,"yB","tA",()=>A.a8("bookmark",A.e([A.a0("M6 3h12v18l-6-4-6 4V3z")],t.l)))
s($,"yC","tB",()=>A.a8("box",A.e([A.a0("M21 8 12 3 3 8l9 5 9-5z"),A.a0("M3 8v8l9 5 9-5V8"),A.a0("M12 13v8")],t.l)))
s($,"yD","qx",()=>A.a8("calendar",A.e([A.fL(3,4,18,17,2),A.aJ(16,2,16,6),A.aJ(8,2,8,6),A.aJ(3,10,21,10)],t.l)))
s($,"yE","fP",()=>A.a8("check",A.e([A.c9("20 6 9 17 4 12")],t.l)))
s($,"yF","tC",()=>A.a8("chevronDown",A.e([A.c9("6 9 12 15 18 9")],t.l)))
s($,"yG","qy",()=>A.a8("chevronRight",A.e([A.c9("9 18 15 12 9 6")],t.l)))
s($,"yH","tD",()=>A.a8("clipboard",A.e([A.fL(5,4,14,18,2),A.a0("M9 4a3 3 0 0 1 6 0"),A.a0("M9 4h6")],t.l)))
s($,"yI","tE",()=>A.a8("clock",A.e([A.c8(12,12,10),A.a0("M12 6v6l4 2")],t.l)))
s($,"yJ","tF",()=>A.a8("cloud",A.e([A.a0("M17.5 19H7a5 5 0 1 1 1.1-9.9A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19z")],t.l)))
s($,"yK","fQ",()=>A.a8("code",A.e([A.c9("8 9 4 12 8 15"),A.c9("16 9 20 12 16 15"),A.a0("M14 5l-4 14")],t.l)))
s($,"yL","fR",()=>A.a8("copy",A.e([A.fL(8,8,12,12,2),A.a0("M16 8V4H4v12h4")],t.l)))
s($,"yM","qz",()=>A.a8("database",A.e([A.r0("ellipse",A.ai(["cx",12,"cy",5,"rx",8,"ry",3],t.N,t.X)),A.a0("M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"),A.a0("M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6")],t.l)))
s($,"yN","qA",()=>A.a8("document",A.e([A.a0("M6 2h8l4 4v16H6V2z"),A.a0("M14 2v5h5"),A.a0("M9 13h6"),A.a0("M9 17h6")],t.l)))
s($,"yO","tG",()=>A.a8("edit",A.e([A.a0("M4 20h4L19 9l-4-4L4 16v4z"),A.a0("M13 7l4 4")],t.l)))
s($,"yP","fS",()=>A.a8("globe",A.e([A.c8(12,12,10),A.a0("M2 12h20"),A.a0("M12 2a15 15 0 0 1 0 20"),A.a0("M12 2a15 15 0 0 0 0 20")],t.l)))
s($,"yQ","ec",()=>A.a8("layers",A.e([A.r0("polygon",A.ai(["points","12 2 2 7 12 12 22 7 12 2"],t.N,t.X)),A.c9("2 12 12 17 22 12"),A.c9("2 17 12 22 22 17")],t.l)))
s($,"yR","tH",()=>A.a8("link",A.e([A.a0("M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"),A.a0("M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1")],t.l)))
s($,"yS","qB",()=>A.a8("logIn",A.e([A.a0("M15 3h4v18h-4"),A.a0("M10 17l5-5-5-5"),A.a0("M15 12H3")],t.l)))
s($,"yT","tI",()=>A.a8("message",A.e([A.a0("M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z")],t.l)))
s($,"yU","tJ",()=>A.a8("moon",A.e([A.a0("M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z")],t.l)))
s($,"yV","qC",()=>A.a8("palette",A.e([A.a0("M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.3-3.5 1.8 1.8 0 0 1 1.2-3.2H18a6 6 0 0 0 0-12h-6z"),A.c8(7.5,10,1),A.c8(10,7,1),A.c8(14,7,1)],t.l)))
s($,"yW","k3",()=>A.a8("plus",A.e([A.aJ(12,5,12,19),A.aJ(5,12,19,12)],t.l)))
s($,"yX","k4",()=>A.a8("rocket",A.e([A.a0("M5 15c-1 1-2 4-2 6 2 0 5-1 6-2"),A.a0("M9 15 4 10l5-1 6-6c2-2 5-1 6-1 0 1 1 4-1 6l-6 6-1 5-4-4z"),A.c8(15,9,1.5)],t.l)))
s($,"yY","tK",()=>A.a8("route",A.e([A.c8(6,18,3),A.c8(18,6,3),A.a0("M9 18h4a5 5 0 0 0 0-10H9")],t.l)))
s($,"yZ","k5",()=>A.a8("send",A.e([A.a0("M22 2 11 13"),A.a0("M22 2 15 22l-4-9-9-4 20-7z")],t.l)))
s($,"z_","ed",()=>A.a8("server",A.e([A.fL(3,4,18,6,2),A.fL(3,14,18,6,2),A.aJ(7,7,7,7),A.aJ(7,17,7,17)],t.l)))
s($,"z0","tL",()=>A.a8("shield",A.e([A.a0("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],t.l)))
s($,"z1","cs",()=>A.a8("sparkles",A.e([A.a0("M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"),A.a0("M5 14l1 2.2L8 17l-2 .8L5 20l-1-2.2L2 17l2-.8L5 14z"),A.a0("M19 13l1 2.2 2 .8-2 .8L19 19l-1-2.2-2-.8 2-.8L19 13z")],t.l)))
s($,"z2","tM",()=>A.a8("sun",A.e([A.c8(12,12,4),A.aJ(12,2,12,4),A.aJ(12,20,12,22),A.aJ(4.9,4.9,6.3,6.3),A.aJ(17.7,17.7,19.1,19.1),A.aJ(2,12,4,12),A.aJ(20,12,22,12),A.aJ(4.9,19.1,6.3,17.7),A.aJ(17.7,6.3,19.1,4.9)],t.l)))
s($,"z3","tN",()=>A.a8("trash",A.e([A.a0("M3 6h18"),A.a0("M8 6V4h8v2"),A.a0("M6 6l1 16h10l1-16"),A.aJ(10,11,10,18),A.aJ(14,11,14,18)],t.l)))
s($,"z4","qD",()=>A.a8("user",A.e([A.c8(12,8,4),A.a0("M4 22a8 8 0 0 1 16 0")],t.l)))
s($,"z5","k6",()=>A.a8("x",A.e([A.aJ(18,6,6,18),A.aJ(6,6,18,18)],t.l)))
s($,"z6","cK",()=>A.a8("zap",A.e([A.a0("M13 2 3 14h8l-1 8 11-14h-8l0-6z")],t.l)))
s($,"Af","uE",()=>{var r=null
return A.a(r,B.d,r,r,r,r,r,A.uM(B.v,1),r,r,r,r,r,r,r,r,r,B.et,r,r,B.k,r,r,r,r,r,r,r,r,r,r,r,600,8,r,r,r,r,r,B.q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,B.bg,r,r,r,r,A.rm(120),r,r,r,r,r,r,r)})
s($,"Ak","pM",()=>new A.lf(A.vq(B.af,t.c)))
s($,"Ah","uF",()=>{var r=t.N,q=A.aD("X(z<f,@>)"),p=A.Y(r,q)
p.S(0,A.aD("z<f,X(z<f,@>)>").a(A.ai(["Home",new A.oY(),"Fullstack",new A.oZ(),"WhatsNew",new A.p_(),"Changelog",new A.pa(),"Client",new A.pb(),"Ai",new A.pc(),"Hardware",new A.pd(),"UiDocs",new A.pe(),"Examples",new A.pf(),"Guides",new A.pg(),"Api",new A.ph(),"Questions",new A.p0(),"AskQuestion",new A.p1(),"Blog",new A.p2(),"BlogDetail",new A.p3(),"BlogWrite",new A.p4(),"QuestionDetail",new A.p5(),"Showcase",new A.p6(),"ShowcaseDetail",new A.p7(),"SubmitBuild",new A.p8(),"Content",new A.p9()],r,q)))
return new A.mx(p)})
s($,"zW","un",()=>A.aF("#f43f5e"))
s($,"zN","uh",()=>A.aF("#38bdf8"))
s($,"Ac","uC",()=>A.aF("#34d399"))
s($,"A1","ur",()=>A.aF("#fbbf24"))
s($,"Aa","uA",()=>A.aF("#e2e8f0"))
s($,"A_","qK",()=>{var r,q,p,o,n="import ",m=";",l="(",k="async",j=" {",i="    final ",h="await ",g="        .",f="main",e="  final ",d="  );",c="  rover.",b="    ctx.",a=$.ed(),a0=A.aF("#10b981"),a1=$.un(),a2=A.p(n,a1,!0),a3=$.ur(),a4=A.p("'package:flint_dart/flint_dart.dart'",a3,!1),a5=$.uA(),a6=A.aD("a4<jN>")
a4=A.R(A.e([a2,a4,A.p(m,a5,!1)],a6))
a2=A.R(A.e([],a6))
r=$.uC()
q=A.p("void ",r,!1)
p=$.uh()
o=A.aD("a4<f8>")
q=A.os(a0,"import 'package:flint_dart/flint_dart.dart';\n\nvoid registerRoutes(Flint app) {\n  app.get('/api/projects', (ctx) async {\n    final user = await ctx.req.auth;\n    final projects = await Project()\n        .where('user_id', '=', user.id)\n        .withRelation('deployments')\n        .get();\n\n    return ctx.res?.json({'status': true, 'data': projects});\n  });\n}","lib/controllers/project_controller.dart","/fullstack",a,A.e([a4,a2,A.R(A.e([q,A.p("registerRoutes",p,!1),A.p(l,a5,!1),A.p("Flint",r,!0),A.p(" app) {",a5,!1)],a6)),A.R(A.e([A.p("  app.",a5,!1),A.p("get",p,!1),A.p("('/api/projects', (ctx) ",a3,!1),A.p(k,a1,!0),A.p(j,a5,!1)],a6)),A.R(A.e([A.p(i,a1,!1),A.p("user = ",a5,!1),A.p(h,a1,!1),A.p("ctx.req.",a5,!1),A.p("auth",p,!1),A.p(m,a5,!1)],a6)),A.R(A.e([A.p(i,a1,!1),A.p("projects = ",a5,!1),A.p(h,a1,!1),A.p("Project",r,!0),A.p("()",a5,!1)],a6)),A.R(A.e([A.p(g,a5,!1),A.p("where",p,!1),A.p("('user_id', '=', user.id)",a5,!1)],a6)),A.R(A.e([A.p(g,a5,!1),A.p("withRelation",p,!1),A.p("('deployments')",a3,!1)],a6)),A.R(A.e([A.p(g,a5,!1),A.p("get",p,!1),A.p("();",a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p("    return ",a1,!0),A.p("ctx.res?.",a5,!1),A.p("json",p,!1),A.p("({'status': true, 'data': projects});",a5,!1)],a6)),A.R(A.e([A.p("  });",a5,!1)],a6)),A.R(A.e([A.p("}",a5,!1)],a6))],o),"Flint Dart Web Server","HTTP 200 OK \u2022 0.4ms latency \u2022 RLS Active","server.dart")
a2=$.fS()
a2=A.os(A.aF("#06b6d4"),"import 'package:flint_client/flint_client.dart';\n\nFuture<void> main() async {\n  final client = FlintClient(\n    baseUrl: 'https://api.flintdart.dev',\n    debug: true,\n  );\n\n  final response = await client.get<Map<String, dynamic>>('/api/projects');\n  if (response.isSuccess) {\n    print('Projects: ${response.data}');\n  }\n}","lib/services/api_sync.dart","/client",a2,A.e([A.R(A.e([A.p(n,a1,!0),A.p("'package:flint_client/flint_client.dart'",a3,!1),A.p(m,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p("Future<",r,!1),A.p("void",r,!1),A.p("> ",a5,!1),A.p(f,p,!1),A.p("() ",a5,!1),A.p(k,a1,!0),A.p(j,a5,!1)],a6)),A.R(A.e([A.p(e,a1,!1),A.p("client = ",a5,!1),A.p("FlintClient",r,!0),A.p(l,a5,!1)],a6)),A.R(A.e([A.p("    baseUrl: ",a5,!1),A.p("'https://api.flintdart.dev'",a3,!1),A.p(",",a5,!1)],a6)),A.R(A.e([A.p("    debug: ",a5,!1),A.p("true",a1,!0),A.p(",",a5,!1)],a6)),A.R(A.e([A.p(d,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p(e,a1,!1),A.p("response = ",a5,!1),A.p(h,a1,!1),A.p("client.",a5,!1),A.p("get",p,!1),A.p("<",a5,!1),A.p("Map<String, dynamic>",r,!1),A.p(">(",a5,!1),A.p("'/api/projects'",a3,!1),A.p(");",a5,!1)],a6)),A.R(A.e([A.p("  if ",a1,!0),A.p("(response.",a5,!1),A.p("isSuccess",p,!1),A.p(") {",a5,!1)],a6)),A.R(A.e([A.p("    print(",a5,!1),A.p("'Projects: ${response.data}'",a3,!1),A.p(");",a5,!1)],a6)),A.R(A.e([A.p("  }",a5,!1)],a6)),A.R(A.e([A.p("}",a5,!1)],a6))],o),"Flint Client SDK","Client Ready \u2022 Typed response \u2022 In-memory cache","client.dart")
a4=$.cs()
a4=A.os(A.aF("#a855f7"),"import 'package:flint_ai/flint_ai.dart';\n\nFuture<void> main() async {\n  final ai = FlintAi();\n\n  final result = await ai.run(\n    agent: TaskAgent(),\n    goal: const AiGoal(\n      task: 'Analyze production server metrics',\n      input: {'clusterId': 'eu-central-1'},\n    ),\n    userId: 'user-1',\n  );\n\n  print(result.output);\n}","lib/agents/metrics_agent.dart","/ai",a4,A.e([A.R(A.e([A.p(n,a1,!0),A.p("'package:flint_ai/flint_ai.dart'",a3,!1),A.p(m,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p("Future<",r,!1),A.p("void",r,!1),A.p("> ",a5,!1),A.p(f,p,!1),A.p("() ",a5,!1),A.p(k,a1,!0),A.p(j,a5,!1)],a6)),A.R(A.e([A.p(e,a1,!1),A.p("ai = ",a5,!1),A.p("FlintAi",r,!0),A.p("();",a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p(e,a1,!1),A.p("result = ",a5,!1),A.p(h,a1,!1),A.p("ai.",a5,!1),A.p("run",p,!1),A.p(l,a5,!1)],a6)),A.R(A.e([A.p("    agent: ",a5,!1),A.p("TaskAgent",r,!0),A.p("(),",a5,!1)],a6)),A.R(A.e([A.p("    goal: ",a5,!1),A.p("const ",a1,!1),A.p("AiGoal",r,!0),A.p(l,a5,!1)],a6)),A.R(A.e([A.p("      task: ",a5,!1),A.p("'Analyze production metrics'",a3,!1),A.p(",",a5,!1)],a6)),A.R(A.e([A.p("      input: {'clusterId': 'eu-central-1'},",a5,!1)],a6)),A.R(A.e([A.p("    ),",a5,!1)],a6)),A.R(A.e([A.p("    userId: ",a5,!1),A.p("'user-1'",a3,!1),A.p(",",a5,!1)],a6)),A.R(A.e([A.p(d,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p("  print(",a5,!1),A.p("result.output",a5,!1),A.p(");",a5,!1)],a6)),A.R(A.e([A.p("}",a5,!1)],a6))],o),"Flint AI Engine","Multi-Provider Mesh \u2022 AiGoal -> AiPlan -> AiRunResult","ai_agent.dart")
a=$.cK()
return A.e([q,a2,a4,A.os(A.aF("#f97316"),"import 'dart:io';\nimport 'package:flint_hardware/flint_hardware.dart';\n\nvoid main() async {\n  final rover = FirmwareBuilder('autonomous_rover', target: BoardTarget.esp32);\n\n  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);\n  final imu = rover.imu(sdaPin: 21, sclPin: 22);\n  final drive = rover.differentialDrive(\n    leftPwmPin: 14, leftDirPin: 27,\n    rightPwmPin: 12, rightDirPin: 26,\n  );\n\n  rover.meshSwarm(swarm: SwarmId.robotics, channel: WifiChannel.ch6);\n  rover.bluetooth(\n    deviceName: 'Flint-Rover-01',\n    services: [BleService.battery(initialLevelPercent: 100)],\n  );\n\n  rover.loop((ctx) {\n    ctx.setPwm(drive.leftPwmPin, 0.8);\n    ctx.setPwm(drive.rightPwmPin, 0.8);\n  });\n\n  await rover.exportBundle(Directory('build/rover'));\n}","firmware/rover.dart","/hardware",a,A.e([A.R(A.e([A.p(n,a1,!0),A.p("'dart:io'",a3,!1),A.p(m,a5,!1)],a6)),A.R(A.e([A.p(n,a1,!0),A.p("'package:flint_hardware/flint_hardware.dart'",a3,!1),A.p(m,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p("void ",r,!1),A.p(f,p,!1),A.p("() ",a5,!1),A.p(k,a1,!0),A.p(j,a5,!1)],a6)),A.R(A.e([A.p(e,a1,!1),A.p("rover = ",a5,!1),A.p("FirmwareBuilder",r,!0),A.p("('rover', target: ",a5,!1),A.p("BoardTarget",r,!1),A.p(".esp32);",a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p(e,a1,!1),A.p("sonar = rover.",a5,!1),A.p("sonar",p,!1),A.p("(triggerPin: 5, echoPin: 18);",a5,!1)],a6)),A.R(A.e([A.p(e,a1,!1),A.p("imu = rover.",a5,!1),A.p("imu",p,!1),A.p("(sdaPin: 21, sclPin: 22);",a5,!1)],a6)),A.R(A.e([A.p(e,a1,!1),A.p("drive = rover.",a5,!1),A.p("differentialDrive",p,!1),A.p(l,a5,!1)],a6)),A.R(A.e([A.p("    leftPwmPin: 14, leftDirPin: 27,",a5,!1)],a6)),A.R(A.e([A.p("    rightPwmPin: 12, rightDirPin: 26,",a5,!1)],a6)),A.R(A.e([A.p(d,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p(c,a5,!1),A.p("meshSwarm",p,!1),A.p("(swarm: ",a5,!1),A.p("SwarmId",r,!1),A.p(".robotics, channel: ",a5,!1),A.p("WifiChannel",r,!1),A.p(".ch6);",a5,!1)],a6)),A.R(A.e([A.p(c,a5,!1),A.p("bluetooth",p,!1),A.p(l,a5,!1)],a6)),A.R(A.e([A.p("    deviceName: ",a5,!1),A.p("'Flint-Rover-01'",a3,!1),A.p(",",a5,!1)],a6)),A.R(A.e([A.p("    services: [",a5,!1),A.p("BleService",r,!1),A.p(".battery(initialLevelPercent: 100)],",a5,!1)],a6)),A.R(A.e([A.p(d,a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p(c,a5,!1),A.p("loop",p,!1),A.p("((ctx) {",a5,!1)],a6)),A.R(A.e([A.p(b,a5,!1),A.p("setPwm",p,!1),A.p("(drive.leftPwmPin, 0.8);",a5,!1)],a6)),A.R(A.e([A.p(b,a5,!1),A.p("setPwm",p,!1),A.p("(drive.rightPwmPin, 0.8);",a5,!1)],a6)),A.R(A.e([A.p("  });",a5,!1)],a6)),A.R(A.e([],a6)),A.R(A.e([A.p("  await ",a1,!1),A.p("rover.",a5,!1),A.p("exportBundle",p,!1),A.p(l,a5,!1),A.p("Directory",r,!1),A.p("('build/rover'));",a3,!1)],a6)),A.R(A.e([A.p("}",a5,!1)],a6))],o),"Flint Hardware & Robotics","ESP32 Native \u2022 Swarm Mesh \u2022 Wokwi & C99/ROS 2 Export","robotics.dart")],A.aD("a4<jz>"))})
s($,"Aj","uG",()=>{var r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.d3,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),o=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.de,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a5("bg",q),m=t.G,l=A.a(q,q,q,q,q,A.aM(A.e([A.bk(B.c9,B.iO),A.bk(B.c8,B.iN),A.aF("#f8fafc")],m)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.a(q,q,q,q,q,A.aM(A.e([A.bk(B.c9,B.j0),A.bk(B.c8,B.ja),A.aF("#05070d")],m)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
l=A.a(q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,A.a5("text",q),q,m,q,q,q,q,q,q,q,q,q,q,q,A.vz("font.sans",q),q,q,q,q,q,q,q,q,q,q,q,q,q,l,q,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.aF("inherit"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.bg,q,q,q,q,q,q,q,q,q,q,q,q)
n=t.cB
r=A.aD("a4<b9>")
return A.rg(p,l,o,A.e([A.iv("flint-docs-rise",A.e([A.pT(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ix(22),q,q,q,q,q,q,q,q)),A.pU(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ix(0),q,q,q,q,q,q,q,q))],n)),A.iv("flint-docs-float",A.e([A.eJ(0,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.pZ(A.e([A.ix(0),A.iw(0)],r)),q,q,q,q,q,q,q,q)),A.eJ(50,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.pZ(A.e([A.ix(-16),A.iw("3deg")],r)),q,q,q,q,q,q,q,q)),A.eJ(100,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.pZ(A.e([A.ix(0),A.iw(0)],r)),q,q,q,q,q,q,q,q))],n)),A.iv("flint-docs-orbit",A.e([A.pT(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iw(0),q,q,q,q,q,q,q,q)),A.pU(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iw("360deg"),q,q,q,q,q,q,q,q))],n)),A.iv("flint-docs-scan",A.e([A.pT(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.rl(A.ri(-120)),q,q,q,q,q,q,q,q)),A.pU(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.rl(A.ri(120)),q,q,q,q,q,q,q,q))],n)),A.iv("flint-docs-pulse",A.e([A.eJ(0,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.42,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.eJ(50,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.86,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.eJ(100,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.42,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))],n))],t.o),m,"flint-docs-root",q,B.hT)})
s($,"zS","ul",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A5","uy",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,190,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A6","ux",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,150,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zT","uk",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A7","uw",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,260,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zX","um",()=>A.aF("#f43f5e"))
s($,"zO","ug",()=>A.aF("#38bdf8"))
s($,"Ad","uB",()=>A.aF("#34d399"))
s($,"A2","uq",()=>A.aF("#fbbf24"))
s($,"Ab","uz",()=>A.aF("#e2e8f0"))
s($,"A0","qJ",()=>{var r,q,p,o,n,m="import ",l="'package:flint_dart/flint_dart.dart'",k=";",j="    final ",i="        .",h="    return ",g="extends ",f="  @override",e="  String ",d="get ",c="getAttribute",b="          Column(name: ",a=", type: ",a0="ColumnType.",a1="    socket.",a2=$.ed(),a3=A.aF("#10b981"),a4=$.um(),a5=A.o(m,a4,!0),a6=$.uq(),a7=A.o(l,a6,!1),a8=$.uz(),a9=A.aD("a4<jc>")
a7=A.O(A.e([a5,a7,A.o(k,a8,!1)],a9))
a5=A.O(A.e([A.o(m,a4,!0),A.o("'package:app/models/project_model.dart'",a6,!1),A.o(k,a8,!1)],a9))
r=A.O(A.e([],a9))
q=$.uB()
p=A.o("void ",q,!1)
o=$.ug()
n=A.aD("a4<fe>")
p=A.o4(a3,"import 'package:flint_dart/flint_dart.dart';\nimport 'package:app/models/project_model.dart';\n\nvoid registerRoutes(Flint app) {\n  app.get('/api/projects', (ctx) async {\n    final user = await ctx.req.auth;\n    final projects = await Project()\n        .where('user_id', '=', user.id)\n        .withRelation('deployments')\n        .get();\n\n    return ctx.res?.json({\n      'status': 'success',\n      'data': projects.map((p) => p.toMap()).toList(),\n    });\n  });\n}","lib/routes/api_routes.dart",a2,"Unified Routing & Context (ctx)",A.e([a7,a5,r,A.O(A.e([p,A.o("registerRoutes",o,!1),A.o("(",a8,!1),A.o("Flint",q,!0),A.o(" app) {",a8,!1)],a9)),A.O(A.e([A.o("  app.",a8,!1),A.o("get",o,!1),A.o("('/api/projects', (ctx) ",a6,!1),A.o("async",a4,!0),A.o(" {",a8,!1)],a9)),A.O(A.e([A.o(j,a4,!1),A.o("user = ",a8,!1),A.o("await ",a4,!1),A.o("ctx.req.",a8,!1),A.o("auth",o,!1),A.o(k,a8,!1)],a9)),A.O(A.e([A.o(j,a4,!1),A.o("projects = ",a8,!1),A.o("await ",a4,!1),A.o("Project",q,!0),A.o("()",a8,!1)],a9)),A.O(A.e([A.o(i,a8,!1),A.o("where",o,!1),A.o("('user_id', '=', user.id)",a8,!1)],a9)),A.O(A.e([A.o(i,a8,!1),A.o("withRelation",o,!1),A.o("('deployments')",a6,!1)],a9)),A.O(A.e([A.o(i,a8,!1),A.o("get",o,!1),A.o("();",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o(h,a4,!0),A.o("ctx.res?.",a8,!1),A.o("json",o,!1),A.o("({",a8,!1)],a9)),A.O(A.e([A.o("      'status': ",a8,!1),A.o("'success'",a6,!1),A.o(",",a8,!1)],a9)),A.O(A.e([A.o("      'data': projects.",a8,!1),A.o("map",o,!1),A.o("((p) => p.",a8,!1),A.o("toMap",o,!1),A.o("()).",a8,!1),A.o("toList",o,!1),A.o("(),",a8,!1)],a9)),A.O(A.e([A.o("    });",a8,!1)],a9)),A.O(A.e([A.o("  });",a8,!1)],a9)),A.O(A.e([A.o("}",a8,!1)],a9))],n),"HTTP 200 OK \u2022 0.3ms latency \u2022 Unified Context","routes.dart","Context Route")
r=$.qC()
r=A.o4(A.aF("#06b6d4"),"import 'package:flint_dart/ui.dart';\n\nclass DashboardPage extends Component {\n  final Map<String, dynamic> props;\n  DashboardPage(this.props);\n\n  @override\n  View build() {\n    return Container(\n      dartStyle: const DartStyle(padding: EdgeInsets.all(24)),\n      children: [\n        Text.h1('Active Deployments', dartStyle: _headingStyle),\n        ResourceView<List<Project>>(\n          data: props['projects'],\n          builder: (projects) => ProjectGrid(projects),\n        ),\n      ],\n    );\n  }\n}","lib/ui/pages/dashboard_page.dart",r,"Declarative Web UI & SSR",A.e([A.O(A.e([A.o(m,a4,!0),A.o("'package:flint_dart/ui.dart'",a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o("class ",a4,!0),A.o("DashboardPage ",q,!0),A.o(g,a4,!1),A.o("Component",q,!1),A.o(" {",a8,!1)],a9)),A.O(A.e([A.o("  final ",a4,!1),A.o("Map<String, dynamic> props;",a8,!1)],a9)),A.O(A.e([A.o("  DashboardPage(this.props);",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o(f,o,!1)],a9)),A.O(A.e([A.o("  View ",q,!1),A.o("build",o,!1),A.o("() {",a8,!1)],a9)),A.O(A.e([A.o(h,a4,!0),A.o("Container",q,!0),A.o("(",a8,!1)],a9)),A.O(A.e([A.o("      dartStyle: ",a8,!1),A.o("const ",a4,!1),A.o("DartStyle",q,!1),A.o("(padding: ",a8,!1),A.o("EdgeInsets.",q,!1),A.o("all",o,!1),A.o("(24)),",a8,!1)],a9)),A.O(A.e([A.o("      children: [",a8,!1)],a9)),A.O(A.e([A.o("        Text.",a8,!1),A.o("h1",o,!1),A.o("('Active Deployments', dartStyle: _headingStyle),",a6,!1)],a9)),A.O(A.e([A.o("        ResourceView<",q,!1),A.o("List<Project>",q,!0),A.o(">(",a8,!1)],a9)),A.O(A.e([A.o("          data: props['projects'],",a8,!1)],a9)),A.O(A.e([A.o("          builder: (projects) => ",a8,!1),A.o("ProjectGrid",q,!1),A.o("(projects),",a8,!1)],a9)),A.O(A.e([A.o("        ),",a8,!1)],a9)),A.O(A.e([A.o("      ],",a8,!1)],a9)),A.O(A.e([A.o("    );",a8,!1)],a9)),A.O(A.e([A.o("  }",a8,!1)],a9)),A.O(A.e([A.o("}",a8,!1)],a9))],n),"SSR Hydrated \u2022 60fps Reactive Signals \u2022 Theme Aware","ui_page.dart","Frontend Component")
a5=$.qz()
a5=A.o4(A.aF("#3b82f6"),"import 'package:flint_dart/model.dart';\nimport 'package:flint_dart/schema.dart';\n\nclass Project extends Model<Project> {\n  Project() : super(() => Project());\n\n  String get name => getAttribute('name') ?? '';\n  String get status => getAttribute('status') ?? 'draft';\n  String get userId => getAttribute('user_id') ?? '';\n\n  @override\n  Table get table => Table(\n        name: 'projects',\n        columns: [\n          Column(name: 'name', type: ColumnType.string, length: 255),\n          Column(name: 'status', type: ColumnType.string, length: 50),\n          Column(name: 'user_id', type: ColumnType.string, length: 100),\n        ],\n      );\n}","lib/models/project_model.dart",a5,"Flint ORM & Database Layer",A.e([A.O(A.e([A.o(m,a4,!0),A.o("'package:flint_dart/model.dart'",a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([A.o(m,a4,!0),A.o("'package:flint_dart/schema.dart'",a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o("class ",a4,!0),A.o("Project ",q,!0),A.o(g,a4,!1),A.o("Model<Project>",q,!1),A.o(" {",a8,!1)],a9)),A.O(A.e([A.o("  Project() : ",a8,!1),A.o("super",a4,!0),A.o("(() => ",a8,!1),A.o("Project",q,!1),A.o("());",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o(e,q,!1),A.o(d,a4,!1),A.o("name => ",a8,!1),A.o(c,o,!1),A.o("('name') ?? ",a6,!1),A.o("''",a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([A.o(e,q,!1),A.o(d,a4,!1),A.o("status => ",a8,!1),A.o(c,o,!1),A.o("('status') ?? ",a6,!1),A.o("'draft'",a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o(f,o,!1)],a9)),A.O(A.e([A.o("  Table ",q,!1),A.o(d,a4,!1),A.o("table => ",a8,!1),A.o("Table",q,!0),A.o("(",a8,!1)],a9)),A.O(A.e([A.o("        name: ",a8,!1),A.o("'projects'",a6,!1),A.o(",",a8,!1)],a9)),A.O(A.e([A.o("        columns: [",a8,!1)],a9)),A.O(A.e([A.o(b,a8,!1),A.o("'name'",a6,!1),A.o(a,a8,!1),A.o(a0,q,!1),A.o("string",a8,!1),A.o(", length: 255),",a8,!1)],a9)),A.O(A.e([A.o(b,a8,!1),A.o("'status'",a6,!1),A.o(a,a8,!1),A.o(a0,q,!1),A.o("string",a8,!1),A.o(", length: 50),",a8,!1)],a9)),A.O(A.e([A.o("        ],",a8,!1)],a9)),A.O(A.e([A.o("      );",a8,!1)],a9)),A.O(A.e([A.o("}",a8,!1)],a9))],n),"PostgreSQL Active \u2022 Relations Typed \u2022 RLS Policy Enforced","model.dart","ORM & RLS Model")
a7=$.cK()
return A.e([p,r,a5,A.o4(A.aF("#f59e0b"),"import 'package:flint_dart/flint_dart.dart';\n\nvoid registerWebSockets(Flint app) {\n  app.websocket('/ws/deployments', (req, socket) {\n    final projectId = req.query['id'] ?? 'global';\n    socket.join(projectId);\n\n    socket.on('deploy', (data) {\n      socket.emitToRoom(projectId, 'deployment_updated', {\n        'status': 'building',\n        'timestamp': DateTime.now().toIso8601String(),\n      });\n    });\n  });\n}","lib/routes/ws_routes.dart",a7,"Real-Time WebSocket Layer",A.e([A.O(A.e([A.o(m,a4,!0),A.o(l,a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o("void ",q,!1),A.o("registerWebSockets",o,!1),A.o("(",a8,!1),A.o("Flint",q,!0),A.o(" app) {",a8,!1)],a9)),A.O(A.e([A.o("  app.",a8,!1),A.o("websocket",o,!1),A.o("('/ws/deployments', (req, socket) {",a6,!1)],a9)),A.O(A.e([A.o(j,a4,!1),A.o("projectId = req.query['id'] ?? ",a8,!1),A.o("'global'",a6,!1),A.o(k,a8,!1)],a9)),A.O(A.e([A.o(a1,a8,!1),A.o("join",o,!1),A.o("(projectId);",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.o(a1,a8,!1),A.o("on",o,!1),A.o("('deploy', (data) {",a6,!1)],a9)),A.O(A.e([A.o("      socket.",a8,!1),A.o("emitToRoom",o,!1),A.o("(projectId, 'deployment_updated', {",a6,!1)],a9)),A.O(A.e([A.o("        'status': ",a8,!1),A.o("'building'",a6,!1),A.o(",",a8,!1)],a9)),A.O(A.e([A.o("        'timestamp': ",a8,!1),A.o("DateTime.",q,!1),A.o("now",o,!1),A.o("().",a8,!1),A.o("toIso8601String",o,!1),A.o("(),",a8,!1)],a9)),A.O(A.e([A.o("      });",a8,!1)],a9)),A.O(A.e([A.o("    });",a8,!1)],a9)),A.O(A.e([A.o("  });",a8,!1)],a9)),A.O(A.e([A.o("}",a8,!1)],a9))],n),"0.1ms Room Broadcast \u2022 Presence Active \u2022 Sub-millisecond","websocket.dart","Live Channels")],A.aD("a4<jb>"))})
s($,"A8","uv",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,160,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zU","qI",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A9","uu",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,140,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zR","uj",()=>{var r=null,q=A.eq(40),p=A.b2(A.c2(56,189,248,0.3),"solid",1)
return A.a(r,r,r,r,r,A.a5("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,24,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zz","u3",()=>{var r=null,q=A.er(12,4),p=A.b2(A.c2(2,132,199,0.3),"solid",1)
return A.a(r,r,r,r,r,A.c2(2,132,199,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.f5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,9999,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zA","u4",()=>{var r=null,q=A.er(12,4),p=A.b2(A.c2(5,150,105,0.3),"solid",1)
return A.a(r,r,r,r,r,A.c2(5,150,105,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.f4,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,9999,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zB","u5",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("accent",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zC","u6",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zP","ui",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dw(0,r,20),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A3","us",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dw(0,r,12),r,r,720,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zE","u7",()=>{var r=null,q=A.eq(20),p=A.b2(A.a5("line",r),"solid",1)
return A.a(r,r,r,r,r,A.a5("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zG","u9",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,16,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.eq(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zF","u8",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.55,A.dw(0,r,8),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zI","ub",()=>{var r=null,q=A.eq(24),p=A.b2(A.a5("line",r),"solid",1)
return A.a(r,r,r,r,r,A.a5("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dw(r,r,32),r,r,r,r,r,r,r,r,r,r,r,r,q,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zL","ue",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,18,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.eq(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zH","ua",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dw(0,r,8),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zJ","uc",()=>{var r=null,q=A.er(16,8),p=A.b2(A.c2(5,150,105,0.34),"solid",1)
return A.a(r,r,r,r,r,A.c2(5,150,105,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.fI,r,B.k,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dw(r,r,16),r,r,r,r,r,r,r,r,r,r,r,r,q,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zK","ud",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zV","qH",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Ae","uD",()=>{var r=null,q=A.er(16,0)
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,A.dw(0,r,16),r,r,1152,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A4","ut",()=>{var r=null,q=A.er(16,12),p=A.b2(A.c2(52,211,153,0.4),"solid",1)
return A.a(r,r,r,r,r,A.c2(52,211,153,0.1),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zM","uf",()=>{var r=null,q=A.er(16,12),p=A.b2(A.c2(248,113,113,0.4),"solid",1)
return A.a(r,r,r,r,r,A.c2(248,113,113,0.1),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zD","qG",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.eq(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zZ","up",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("bg",r),r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,B.c,r,r,r,B.x,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.lB,0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.t,r,r,r,r)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.dC,AbortPaymentEvent:J.c,AnimationEffectReadOnly:J.c,AnimationEffectTiming:J.c,AnimationEffectTimingReadOnly:J.c,AnimationEvent:J.c,AnimationPlaybackEvent:J.c,AnimationTimeline:J.c,AnimationWorkletGlobalScope:J.c,ApplicationCacheErrorEvent:J.c,AuthenticatorAssertionResponse:J.c,AuthenticatorAttestationResponse:J.c,AuthenticatorResponse:J.c,BackgroundFetchClickEvent:J.c,BackgroundFetchEvent:J.c,BackgroundFetchFailEvent:J.c,BackgroundFetchFetch:J.c,BackgroundFetchManager:J.c,BackgroundFetchSettledFetch:J.c,BackgroundFetchedEvent:J.c,BarProp:J.c,BarcodeDetector:J.c,BeforeInstallPromptEvent:J.c,BeforeUnloadEvent:J.c,BlobEvent:J.c,BluetoothRemoteGATTDescriptor:J.c,Body:J.c,BudgetState:J.c,CacheStorage:J.c,CanMakePaymentEvent:J.c,CanvasGradient:J.c,CanvasPattern:J.c,CanvasRenderingContext2D:J.c,Client:J.c,Clients:J.c,ClipboardEvent:J.c,CloseEvent:J.c,CompositionEvent:J.c,CookieStore:J.c,Coordinates:J.c,Credential:J.c,CredentialUserData:J.c,CredentialsContainer:J.c,Crypto:J.c,CryptoKey:J.c,CSS:J.c,CSSVariableReferenceValue:J.c,CustomElementRegistry:J.c,CustomEvent:J.c,DataTransfer:J.c,DataTransferItem:J.c,DeprecatedStorageInfo:J.c,DeprecatedStorageQuota:J.c,DeprecationReport:J.c,DetectedBarcode:J.c,DetectedFace:J.c,DetectedText:J.c,DeviceAcceleration:J.c,DeviceMotionEvent:J.c,DeviceOrientationEvent:J.c,DeviceRotationRate:J.c,DirectoryEntry:J.c,webkitFileSystemDirectoryEntry:J.c,FileSystemDirectoryEntry:J.c,DirectoryReader:J.c,WebKitDirectoryReader:J.c,webkitFileSystemDirectoryReader:J.c,FileSystemDirectoryReader:J.c,DocumentOrShadowRoot:J.c,DocumentTimeline:J.c,DOMError:J.c,DOMImplementation:J.c,Iterator:J.c,DOMMatrix:J.c,DOMMatrixReadOnly:J.c,DOMParser:J.c,DOMPoint:J.c,DOMPointReadOnly:J.c,DOMQuad:J.c,DOMStringMap:J.c,Entry:J.c,webkitFileSystemEntry:J.c,FileSystemEntry:J.c,ErrorEvent:J.c,Event:J.c,InputEvent:J.c,SubmitEvent:J.c,ExtendableEvent:J.c,ExtendableMessageEvent:J.c,External:J.c,FaceDetector:J.c,FederatedCredential:J.c,FetchEvent:J.c,FileEntry:J.c,webkitFileSystemFileEntry:J.c,FileSystemFileEntry:J.c,DOMFileSystem:J.c,WebKitFileSystem:J.c,webkitFileSystem:J.c,FileSystem:J.c,FocusEvent:J.c,FontFace:J.c,FontFaceSetLoadEvent:J.c,FontFaceSource:J.c,ForeignFetchEvent:J.c,FormData:J.c,GamepadButton:J.c,GamepadEvent:J.c,GamepadPose:J.c,Geolocation:J.c,Position:J.c,GeolocationPosition:J.c,HashChangeEvent:J.c,Headers:J.c,HTMLHyperlinkElementUtils:J.c,IdleDeadline:J.c,ImageBitmap:J.c,ImageBitmapRenderingContext:J.c,ImageCapture:J.c,ImageData:J.c,InputDeviceCapabilities:J.c,InstallEvent:J.c,IntersectionObserver:J.c,IntersectionObserverEntry:J.c,InterventionReport:J.c,KeyboardEvent:J.c,KeyframeEffect:J.c,KeyframeEffectReadOnly:J.c,MediaCapabilities:J.c,MediaCapabilitiesInfo:J.c,MediaDeviceInfo:J.c,MediaEncryptedEvent:J.c,MediaError:J.c,MediaKeyMessageEvent:J.c,MediaKeyStatusMap:J.c,MediaKeySystemAccess:J.c,MediaKeys:J.c,MediaKeysPolicy:J.c,MediaMetadata:J.c,MediaQueryListEvent:J.c,MediaSession:J.c,MediaSettingsRange:J.c,MediaStreamEvent:J.c,MediaStreamTrackEvent:J.c,MemoryInfo:J.c,MessageChannel:J.c,MessageEvent:J.c,Metadata:J.c,MIDIConnectionEvent:J.c,MIDIMessageEvent:J.c,MouseEvent:J.c,DragEvent:J.c,MutationEvent:J.c,MutationObserver:J.c,WebKitMutationObserver:J.c,MutationRecord:J.c,NavigationPreloadManager:J.c,Navigator:J.c,NavigatorAutomationInformation:J.c,NavigatorConcurrentHardware:J.c,NavigatorCookies:J.c,NavigatorUserMediaError:J.c,NodeFilter:J.c,NodeIterator:J.c,NonDocumentTypeChildNode:J.c,NonElementParentNode:J.c,NoncedElement:J.c,NotificationEvent:J.c,OffscreenCanvasRenderingContext2D:J.c,OverconstrainedError:J.c,PageTransitionEvent:J.c,PaintRenderingContext2D:J.c,PaintSize:J.c,PaintWorkletGlobalScope:J.c,PasswordCredential:J.c,Path2D:J.c,PaymentAddress:J.c,PaymentInstruments:J.c,PaymentManager:J.c,PaymentRequestEvent:J.c,PaymentRequestUpdateEvent:J.c,PaymentResponse:J.c,PerformanceEntry:J.c,PerformanceLongTaskTiming:J.c,PerformanceMark:J.c,PerformanceMeasure:J.c,PerformanceNavigation:J.c,PerformanceNavigationTiming:J.c,PerformanceObserver:J.c,PerformanceObserverEntryList:J.c,PerformancePaintTiming:J.c,PerformanceResourceTiming:J.c,PerformanceServerTiming:J.c,PerformanceTiming:J.c,Permissions:J.c,PhotoCapabilities:J.c,PointerEvent:J.c,PopStateEvent:J.c,PositionError:J.c,GeolocationPositionError:J.c,Presentation:J.c,PresentationConnectionAvailableEvent:J.c,PresentationConnectionCloseEvent:J.c,PresentationReceiver:J.c,ProgressEvent:J.c,PromiseRejectionEvent:J.c,PublicKeyCredential:J.c,PushEvent:J.c,PushManager:J.c,PushMessageData:J.c,PushSubscription:J.c,PushSubscriptionOptions:J.c,Range:J.c,RelatedApplication:J.c,ReportBody:J.c,ReportingObserver:J.c,ResizeObserver:J.c,ResizeObserverEntry:J.c,RTCCertificate:J.c,RTCDataChannelEvent:J.c,RTCDTMFToneChangeEvent:J.c,RTCIceCandidate:J.c,mozRTCIceCandidate:J.c,RTCLegacyStatsReport:J.c,RTCPeerConnectionIceEvent:J.c,RTCRtpContributingSource:J.c,RTCRtpReceiver:J.c,RTCRtpSender:J.c,RTCSessionDescription:J.c,mozRTCSessionDescription:J.c,RTCStatsResponse:J.c,RTCTrackEvent:J.c,Screen:J.c,ScrollState:J.c,ScrollTimeline:J.c,SecurityPolicyViolationEvent:J.c,Selection:J.c,SensorErrorEvent:J.c,SpeechRecognitionAlternative:J.c,SpeechRecognitionError:J.c,SpeechRecognitionEvent:J.c,SpeechSynthesisEvent:J.c,SpeechSynthesisVoice:J.c,StaticRange:J.c,StorageEvent:J.c,StorageManager:J.c,StyleMedia:J.c,StylePropertyMap:J.c,StylePropertyMapReadonly:J.c,SyncEvent:J.c,SyncManager:J.c,TaskAttributionTiming:J.c,TextDetector:J.c,TextEvent:J.c,TextMetrics:J.c,TouchEvent:J.c,TrackDefault:J.c,TrackEvent:J.c,TransitionEvent:J.c,WebKitTransitionEvent:J.c,TreeWalker:J.c,TrustedHTML:J.c,TrustedScriptURL:J.c,TrustedURL:J.c,UIEvent:J.c,UnderlyingSourceBase:J.c,URLSearchParams:J.c,VRCoordinateSystem:J.c,VRDeviceEvent:J.c,VRDisplayCapabilities:J.c,VRDisplayEvent:J.c,VREyeParameters:J.c,VRFrameData:J.c,VRFrameOfReference:J.c,VRPose:J.c,VRSessionEvent:J.c,VRStageBounds:J.c,VRStageBoundsPoint:J.c,VRStageParameters:J.c,ValidityState:J.c,VideoPlaybackQuality:J.c,VideoTrack:J.c,VTTRegion:J.c,WheelEvent:J.c,WindowClient:J.c,WorkletAnimation:J.c,WorkletGlobalScope:J.c,XPathEvaluator:J.c,XPathExpression:J.c,XPathNSResolver:J.c,XPathResult:J.c,XMLSerializer:J.c,XSLTProcessor:J.c,Bluetooth:J.c,BluetoothCharacteristicProperties:J.c,BluetoothRemoteGATTServer:J.c,BluetoothRemoteGATTService:J.c,BluetoothUUID:J.c,BudgetService:J.c,Cache:J.c,DOMFileSystemSync:J.c,DirectoryEntrySync:J.c,DirectoryReaderSync:J.c,EntrySync:J.c,FileEntrySync:J.c,FileReaderSync:J.c,FileWriterSync:J.c,HTMLAllCollection:J.c,Mojo:J.c,MojoHandle:J.c,MojoInterfaceRequestEvent:J.c,MojoWatcher:J.c,NFC:J.c,PagePopupController:J.c,Report:J.c,Request:J.c,ResourceProgressEvent:J.c,Response:J.c,SubtleCrypto:J.c,USBAlternateInterface:J.c,USBConfiguration:J.c,USBConnectionEvent:J.c,USBDevice:J.c,USBEndpoint:J.c,USBInTransferResult:J.c,USBInterface:J.c,USBIsochronousInTransferPacket:J.c,USBIsochronousInTransferResult:J.c,USBIsochronousOutTransferPacket:J.c,USBIsochronousOutTransferResult:J.c,USBOutTransferResult:J.c,WorkerLocation:J.c,WorkerNavigator:J.c,Worklet:J.c,IDBCursor:J.c,IDBCursorWithValue:J.c,IDBFactory:J.c,IDBIndex:J.c,IDBKeyRange:J.c,IDBObjectStore:J.c,IDBObservation:J.c,IDBObserver:J.c,IDBObserverChanges:J.c,IDBVersionChangeEvent:J.c,SVGAngle:J.c,SVGAnimatedAngle:J.c,SVGAnimatedBoolean:J.c,SVGAnimatedEnumeration:J.c,SVGAnimatedInteger:J.c,SVGAnimatedLength:J.c,SVGAnimatedLengthList:J.c,SVGAnimatedNumber:J.c,SVGAnimatedNumberList:J.c,SVGAnimatedPreserveAspectRatio:J.c,SVGAnimatedRect:J.c,SVGAnimatedString:J.c,SVGAnimatedTransformList:J.c,SVGMatrix:J.c,SVGPoint:J.c,SVGPreserveAspectRatio:J.c,SVGRect:J.c,SVGUnitTypes:J.c,AudioListener:J.c,AudioParam:J.c,AudioProcessingEvent:J.c,AudioTrack:J.c,AudioWorkletGlobalScope:J.c,AudioWorkletProcessor:J.c,OfflineAudioCompletionEvent:J.c,PeriodicWave:J.c,WebGLActiveInfo:J.c,ANGLEInstancedArrays:J.c,ANGLE_instanced_arrays:J.c,WebGLBuffer:J.c,WebGLCanvas:J.c,WebGLColorBufferFloat:J.c,WebGLCompressedTextureASTC:J.c,WebGLCompressedTextureATC:J.c,WEBGL_compressed_texture_atc:J.c,WebGLCompressedTextureETC1:J.c,WEBGL_compressed_texture_etc1:J.c,WebGLCompressedTextureETC:J.c,WebGLCompressedTexturePVRTC:J.c,WEBGL_compressed_texture_pvrtc:J.c,WebGLCompressedTextureS3TC:J.c,WEBGL_compressed_texture_s3tc:J.c,WebGLCompressedTextureS3TCsRGB:J.c,WebGLContextEvent:J.c,WebGLDebugRendererInfo:J.c,WEBGL_debug_renderer_info:J.c,WebGLDebugShaders:J.c,WEBGL_debug_shaders:J.c,WebGLDepthTexture:J.c,WEBGL_depth_texture:J.c,WebGLDrawBuffers:J.c,WEBGL_draw_buffers:J.c,EXTsRGB:J.c,EXT_sRGB:J.c,EXTBlendMinMax:J.c,EXT_blend_minmax:J.c,EXTColorBufferFloat:J.c,EXTColorBufferHalfFloat:J.c,EXTDisjointTimerQuery:J.c,EXTDisjointTimerQueryWebGL2:J.c,EXTFragDepth:J.c,EXT_frag_depth:J.c,EXTShaderTextureLOD:J.c,EXT_shader_texture_lod:J.c,EXTTextureFilterAnisotropic:J.c,EXT_texture_filter_anisotropic:J.c,WebGLFramebuffer:J.c,WebGLGetBufferSubDataAsync:J.c,WebGLLoseContext:J.c,WebGLExtensionLoseContext:J.c,WEBGL_lose_context:J.c,OESElementIndexUint:J.c,OES_element_index_uint:J.c,OESStandardDerivatives:J.c,OES_standard_derivatives:J.c,OESTextureFloat:J.c,OES_texture_float:J.c,OESTextureFloatLinear:J.c,OES_texture_float_linear:J.c,OESTextureHalfFloat:J.c,OES_texture_half_float:J.c,OESTextureHalfFloatLinear:J.c,OES_texture_half_float_linear:J.c,OESVertexArrayObject:J.c,OES_vertex_array_object:J.c,WebGLProgram:J.c,WebGLQuery:J.c,WebGLRenderbuffer:J.c,WebGLRenderingContext:J.c,WebGL2RenderingContext:J.c,WebGLSampler:J.c,WebGLShader:J.c,WebGLShaderPrecisionFormat:J.c,WebGLSync:J.c,WebGLTexture:J.c,WebGLTimerQueryEXT:J.c,WebGLTransformFeedback:J.c,WebGLUniformLocation:J.c,WebGLVertexArrayObject:J.c,WebGLVertexArrayObjectOES:J.c,WebGL2RenderingContextBase:J.c,ArrayBuffer:A.dL,SharedArrayBuffer:A.dL,ArrayBufferView:A.eP,DataView:A.hZ,Float32Array:A.i_,Float64Array:A.i0,Int16Array:A.i1,Int32Array:A.i2,Int8Array:A.i3,Uint16Array:A.i4,Uint32Array:A.i5,Uint8ClampedArray:A.eQ,CanvasPixelArray:A.eQ,Uint8Array:A.eR,HTMLAudioElement:A.K,HTMLBRElement:A.K,HTMLBaseElement:A.K,HTMLBodyElement:A.K,HTMLButtonElement:A.K,HTMLCanvasElement:A.K,HTMLContentElement:A.K,HTMLDListElement:A.K,HTMLDataElement:A.K,HTMLDataListElement:A.K,HTMLDetailsElement:A.K,HTMLDialogElement:A.K,HTMLDivElement:A.K,HTMLEmbedElement:A.K,HTMLFieldSetElement:A.K,HTMLHRElement:A.K,HTMLHeadElement:A.K,HTMLHeadingElement:A.K,HTMLHtmlElement:A.K,HTMLIFrameElement:A.K,HTMLImageElement:A.K,HTMLInputElement:A.K,HTMLLIElement:A.K,HTMLLabelElement:A.K,HTMLLegendElement:A.K,HTMLLinkElement:A.K,HTMLMapElement:A.K,HTMLMediaElement:A.K,HTMLMenuElement:A.K,HTMLMetaElement:A.K,HTMLMeterElement:A.K,HTMLModElement:A.K,HTMLOListElement:A.K,HTMLObjectElement:A.K,HTMLOptGroupElement:A.K,HTMLOptionElement:A.K,HTMLOutputElement:A.K,HTMLParagraphElement:A.K,HTMLParamElement:A.K,HTMLPictureElement:A.K,HTMLPreElement:A.K,HTMLProgressElement:A.K,HTMLQuoteElement:A.K,HTMLScriptElement:A.K,HTMLShadowElement:A.K,HTMLSlotElement:A.K,HTMLSourceElement:A.K,HTMLSpanElement:A.K,HTMLStyleElement:A.K,HTMLTableCaptionElement:A.K,HTMLTableCellElement:A.K,HTMLTableDataCellElement:A.K,HTMLTableHeaderCellElement:A.K,HTMLTableColElement:A.K,HTMLTableElement:A.K,HTMLTableRowElement:A.K,HTMLTableSectionElement:A.K,HTMLTemplateElement:A.K,HTMLTimeElement:A.K,HTMLTitleElement:A.K,HTMLTrackElement:A.K,HTMLUListElement:A.K,HTMLUnknownElement:A.K,HTMLVideoElement:A.K,HTMLDirectoryElement:A.K,HTMLFontElement:A.K,HTMLFrameElement:A.K,HTMLFrameSetElement:A.K,HTMLMarqueeElement:A.K,HTMLElement:A.K,AccessibleNodeList:A.fU,HTMLAnchorElement:A.fV,HTMLAreaElement:A.fW,Blob:A.ei,CDATASection:A.c1,CharacterData:A.c1,Comment:A.c1,ProcessingInstruction:A.c1,Text:A.c1,CSSPerspective:A.hc,CSSCharsetRule:A.aj,CSSConditionRule:A.aj,CSSFontFaceRule:A.aj,CSSGroupingRule:A.aj,CSSImportRule:A.aj,CSSKeyframeRule:A.aj,MozCSSKeyframeRule:A.aj,WebKitCSSKeyframeRule:A.aj,CSSKeyframesRule:A.aj,MozCSSKeyframesRule:A.aj,WebKitCSSKeyframesRule:A.aj,CSSMediaRule:A.aj,CSSNamespaceRule:A.aj,CSSPageRule:A.aj,CSSRule:A.aj,CSSStyleRule:A.aj,CSSSupportsRule:A.aj,CSSViewportRule:A.aj,CSSStyleDeclaration:A.dv,MSStyleCSSProperties:A.dv,CSS2Properties:A.dv,CSSImageValue:A.b7,CSSKeywordValue:A.b7,CSSNumericValue:A.b7,CSSPositionValue:A.b7,CSSResourceValue:A.b7,CSSUnitValue:A.b7,CSSURLImageValue:A.b7,CSSStyleValue:A.b7,CSSMatrixComponent:A.bN,CSSRotation:A.bN,CSSScale:A.bN,CSSSkew:A.bN,CSSTranslation:A.bN,CSSTransformComponent:A.bN,CSSTransformValue:A.hd,CSSUnparsedValue:A.he,DataTransferItemList:A.hg,DOMException:A.hi,ClientRectList:A.eo,DOMRectList:A.eo,DOMRectReadOnly:A.ep,DOMStringList:A.hj,DOMTokenList:A.hk,MathMLElement:A.I,SVGAElement:A.I,SVGAnimateElement:A.I,SVGAnimateMotionElement:A.I,SVGAnimateTransformElement:A.I,SVGAnimationElement:A.I,SVGCircleElement:A.I,SVGClipPathElement:A.I,SVGDefsElement:A.I,SVGDescElement:A.I,SVGDiscardElement:A.I,SVGEllipseElement:A.I,SVGFEBlendElement:A.I,SVGFEColorMatrixElement:A.I,SVGFEComponentTransferElement:A.I,SVGFECompositeElement:A.I,SVGFEConvolveMatrixElement:A.I,SVGFEDiffuseLightingElement:A.I,SVGFEDisplacementMapElement:A.I,SVGFEDistantLightElement:A.I,SVGFEFloodElement:A.I,SVGFEFuncAElement:A.I,SVGFEFuncBElement:A.I,SVGFEFuncGElement:A.I,SVGFEFuncRElement:A.I,SVGFEGaussianBlurElement:A.I,SVGFEImageElement:A.I,SVGFEMergeElement:A.I,SVGFEMergeNodeElement:A.I,SVGFEMorphologyElement:A.I,SVGFEOffsetElement:A.I,SVGFEPointLightElement:A.I,SVGFESpecularLightingElement:A.I,SVGFESpotLightElement:A.I,SVGFETileElement:A.I,SVGFETurbulenceElement:A.I,SVGFilterElement:A.I,SVGForeignObjectElement:A.I,SVGGElement:A.I,SVGGeometryElement:A.I,SVGGraphicsElement:A.I,SVGImageElement:A.I,SVGLineElement:A.I,SVGLinearGradientElement:A.I,SVGMarkerElement:A.I,SVGMaskElement:A.I,SVGMetadataElement:A.I,SVGPathElement:A.I,SVGPatternElement:A.I,SVGPolygonElement:A.I,SVGPolylineElement:A.I,SVGRadialGradientElement:A.I,SVGRectElement:A.I,SVGScriptElement:A.I,SVGSetElement:A.I,SVGStopElement:A.I,SVGStyleElement:A.I,SVGElement:A.I,SVGSVGElement:A.I,SVGSwitchElement:A.I,SVGSymbolElement:A.I,SVGTSpanElement:A.I,SVGTextContentElement:A.I,SVGTextElement:A.I,SVGTextPathElement:A.I,SVGTextPositioningElement:A.I,SVGTitleElement:A.I,SVGUseElement:A.I,SVGViewElement:A.I,SVGGradientElement:A.I,SVGComponentTransferFunctionElement:A.I,SVGFEDropShadowElement:A.I,SVGMPathElement:A.I,Element:A.I,AbsoluteOrientationSensor:A.u,Accelerometer:A.u,AccessibleNode:A.u,AmbientLightSensor:A.u,Animation:A.u,ApplicationCache:A.u,DOMApplicationCache:A.u,OfflineResourceList:A.u,BackgroundFetchRegistration:A.u,BatteryManager:A.u,BroadcastChannel:A.u,CanvasCaptureMediaStreamTrack:A.u,DedicatedWorkerGlobalScope:A.u,EventSource:A.u,FileReader:A.u,FontFaceSet:A.u,Gyroscope:A.u,XMLHttpRequest:A.u,XMLHttpRequestEventTarget:A.u,XMLHttpRequestUpload:A.u,LinearAccelerationSensor:A.u,Magnetometer:A.u,MediaDevices:A.u,MediaKeySession:A.u,MediaQueryList:A.u,MediaRecorder:A.u,MediaSource:A.u,MediaStream:A.u,MediaStreamTrack:A.u,MessagePort:A.u,MIDIAccess:A.u,MIDIInput:A.u,MIDIOutput:A.u,MIDIPort:A.u,NetworkInformation:A.u,Notification:A.u,OffscreenCanvas:A.u,OrientationSensor:A.u,PaymentRequest:A.u,Performance:A.u,PermissionStatus:A.u,PresentationAvailability:A.u,PresentationConnection:A.u,PresentationConnectionList:A.u,PresentationRequest:A.u,RelativeOrientationSensor:A.u,RemotePlayback:A.u,RTCDataChannel:A.u,DataChannel:A.u,RTCDTMFSender:A.u,RTCPeerConnection:A.u,webkitRTCPeerConnection:A.u,mozRTCPeerConnection:A.u,ScreenOrientation:A.u,Sensor:A.u,ServiceWorker:A.u,ServiceWorkerContainer:A.u,ServiceWorkerGlobalScope:A.u,ServiceWorkerRegistration:A.u,SharedWorker:A.u,SharedWorkerGlobalScope:A.u,SpeechRecognition:A.u,webkitSpeechRecognition:A.u,SpeechSynthesis:A.u,SpeechSynthesisUtterance:A.u,VR:A.u,VRDevice:A.u,VRDisplay:A.u,VRSession:A.u,VisualViewport:A.u,WebSocket:A.u,Window:A.u,DOMWindow:A.u,Worker:A.u,WorkerGlobalScope:A.u,WorkerPerformance:A.u,BluetoothDevice:A.u,BluetoothRemoteGATTCharacteristic:A.u,Clipboard:A.u,MojoInterfaceInterceptor:A.u,USB:A.u,IDBDatabase:A.u,IDBOpenDBRequest:A.u,IDBVersionChangeRequest:A.u,IDBRequest:A.u,IDBTransaction:A.u,AnalyserNode:A.u,RealtimeAnalyserNode:A.u,AudioBufferSourceNode:A.u,AudioDestinationNode:A.u,AudioNode:A.u,AudioScheduledSourceNode:A.u,AudioWorkletNode:A.u,BiquadFilterNode:A.u,ChannelMergerNode:A.u,AudioChannelMerger:A.u,ChannelSplitterNode:A.u,AudioChannelSplitter:A.u,ConstantSourceNode:A.u,ConvolverNode:A.u,DelayNode:A.u,DynamicsCompressorNode:A.u,GainNode:A.u,AudioGainNode:A.u,IIRFilterNode:A.u,MediaElementAudioSourceNode:A.u,MediaStreamAudioDestinationNode:A.u,MediaStreamAudioSourceNode:A.u,OscillatorNode:A.u,Oscillator:A.u,PannerNode:A.u,AudioPannerNode:A.u,webkitAudioPannerNode:A.u,ScriptProcessorNode:A.u,JavaScriptAudioNode:A.u,StereoPannerNode:A.u,WaveShaperNode:A.u,EventTarget:A.u,File:A.bh,FileList:A.hn,FileWriter:A.ho,HTMLFormElement:A.hA,Gamepad:A.bj,History:A.hF,HTMLCollection:A.cW,HTMLFormControlsCollection:A.cW,HTMLOptionsCollection:A.cW,Location:A.hU,MediaList:A.hV,MIDIInputMap:A.hW,MIDIOutputMap:A.hX,MimeType:A.bm,MimeTypeArray:A.hY,Document:A.a2,DocumentFragment:A.a2,HTMLDocument:A.a2,ShadowRoot:A.a2,XMLDocument:A.a2,Attr:A.a2,DocumentType:A.a2,Node:A.a2,NodeList:A.eS,RadioNodeList:A.eS,Plugin:A.bn,PluginArray:A.id,RTCStatsReport:A.ij,HTMLSelectElement:A.il,SourceBuffer:A.bo,SourceBufferList:A.im,SpeechGrammar:A.bp,SpeechGrammarList:A.io,SpeechRecognitionResult:A.bq,Storage:A.is,CSSStyleSheet:A.b3,StyleSheet:A.b3,HTMLTextAreaElement:A.f4,TextTrack:A.br,TextTrackCue:A.b4,VTTCue:A.b4,TextTrackCueList:A.iC,TextTrackList:A.iD,TimeRanges:A.iF,Touch:A.bs,TouchList:A.iH,TrackDefaultList:A.iI,URL:A.iQ,VideoTrackList:A.iS,CSSRuleList:A.j1,ClientRect:A.fa,DOMRect:A.fa,GamepadList:A.je,NamedNodeMap:A.fm,MozNamedAttrMap:A.fm,SpeechRecognitionResultList:A.jC,StyleSheetList:A.jK,SVGLength:A.bx,SVGLengthList:A.hQ,SVGNumber:A.bA,SVGNumberList:A.i7,SVGPointList:A.ie,SVGStringList:A.iu,SVGTransform:A.bC,SVGTransformList:A.iJ,AudioBuffer:A.fZ,AudioParamMap:A.h_,AudioTrackList:A.h0,AudioContext:A.cu,webkitAudioContext:A.cu,BaseAudioContext:A.cu,OfflineAudioContext:A.i8})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AbortPaymentEvent:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationEvent:true,AnimationPlaybackEvent:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,ApplicationCacheErrorEvent:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BackgroundFetchedEvent:true,BarProp:true,BarcodeDetector:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanMakePaymentEvent:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,External:true,FaceDetector:true,FederatedCredential:true,FetchEvent:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FontFaceSource:true,ForeignFetchEvent:true,FormData:true,GamepadButton:true,GamepadEvent:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,HashChangeEvent:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyboardEvent:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaSettingsRange:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,NotificationEvent:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PageTransitionEvent:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PointerEvent:true,PopStateEvent:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PresentationReceiver:true,ProgressEvent:true,PromiseRejectionEvent:true,PublicKeyCredential:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCPeerConnectionIceEvent:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,RTCTrackEvent:true,Screen:true,ScrollState:true,ScrollTimeline:true,SecurityPolicyViolationEvent:true,Selection:true,SensorErrorEvent:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StaticRange:true,StorageEvent:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncEvent:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextEvent:true,TextMetrics:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDeviceEvent:true,VRDisplayCapabilities:true,VRDisplayEvent:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRSessionEvent:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoInterfaceRequestEvent:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioProcessingEvent:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,VideoTrackList:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true})
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.fn.$nativeSuperclassTag="ArrayBufferView"
A.fo.$nativeSuperclassTag="ArrayBufferView"
A.eO.$nativeSuperclassTag="ArrayBufferView"
A.fp.$nativeSuperclassTag="ArrayBufferView"
A.fq.$nativeSuperclassTag="ArrayBufferView"
A.bz.$nativeSuperclassTag="ArrayBufferView"
A.fs.$nativeSuperclassTag="EventTarget"
A.ft.$nativeSuperclassTag="EventTarget"
A.fw.$nativeSuperclassTag="EventTarget"
A.fx.$nativeSuperclassTag="EventTarget"})()
Function.prototype.$2=function(a,b){return this(a,b)}
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$3=function(a,b,c){return this(a,b,c)}
Function.prototype.$4=function(a,b,c,d){return this(a,b,c,d)}
Function.prototype.$1$1=function(a){return this(a)}
Function.prototype.$2$1=function(a){return this(a)}
Function.prototype.$2$0=function(){return this()}
Function.prototype.$1$0=function(){return this()}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q){s[q].removeEventListener("load",onLoad,false)}a(b.target)}for(var r=0;r<s.length;++r){s[r].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var s=A.xT
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
