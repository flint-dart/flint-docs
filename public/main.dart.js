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
if(a[b]!==s){A.y6(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.e(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.qm(b)
return new s(c,this)}:function(){if(s===null)s=A.qm(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.qm(a).prototype
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
qq(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ps(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qo==null){A.xM()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.l(A.rt("Return interceptor for "+A.W(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.ol
if(o==null)o=$.ol=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.xT(a)
if(p!=null)return p
if(typeof a=="function")return B.j6
s=Object.getPrototypeOf(a)
if(s==null)return B.cI
if(s===Object.prototype)return B.cI
if(typeof q=="function"){o=$.ol
if(o==null)o=$.ol=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.ba,enumerable:false,writable:true,configurable:true})
return B.ba}return B.ba},
r4(a,b){if(a<0||a>4294967295)throw A.l(A.aQ(a,0,4294967295,"length",null))
return J.v8(new Array(a),b)},
r5(a,b){if(a<0)throw A.l(A.c0("Length must be a non-negative integer: "+a,null))
return A.e(new Array(a),b.h("a4<0>"))},
v8(a,b){var s=A.e(a,b.h("a4<0>"))
s.$flags=1
return s},
r6(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
r7(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.r6(r))break;++b}return b},
v9(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.t(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.r6(q))break}return b},
bg(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eG.prototype
return J.hM.prototype}if(typeof a=="string")return J.cX.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.hL.prototype
if(Array.isArray(a))return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cg.prototype
if(typeof a=="symbol")return J.dI.prototype
if(typeof a=="bigint")return J.dH.prototype
return a}if(a instanceof A.Q)return a
return J.ps(a)},
al(a){if(typeof a=="string")return J.cX.prototype
if(a==null)return a
if(Array.isArray(a))return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cg.prototype
if(typeof a=="symbol")return J.dI.prototype
if(typeof a=="bigint")return J.dH.prototype
return a}if(a instanceof A.Q)return a
return J.ps(a)},
bM(a){if(a==null)return a
if(Array.isArray(a))return J.a4.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cg.prototype
if(typeof a=="symbol")return J.dI.prototype
if(typeof a=="bigint")return J.dH.prototype
return a}if(a instanceof A.Q)return a
return J.ps(a)},
xH(a){if(typeof a=="string")return J.cX.prototype
if(a==null)return a
if(!(a instanceof A.Q))return J.dY.prototype
return a},
de(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cg.prototype
if(typeof a=="symbol")return J.dI.prototype
if(typeof a=="bigint")return J.dH.prototype
return a}if(a instanceof A.Q)return a
return J.ps(a)},
a9(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bg(a).O(a,b)},
M(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.xQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).j(a,b)},
ar(a,b,c){return J.bM(a).i(a,b,c)},
uJ(a,b){return J.bM(a).u(a,b)},
qO(a,b){return J.xH(a).e8(a,b)},
qP(a,b){return J.bM(a).cz(a,b)},
aU(a,b,c){return J.de(a).aS(a,b,c)},
qQ(a,b){return J.bM(a).I(a,b)},
pP(a,b){return J.de(a).N(a,b)},
eh(a){return J.de(a).ga_(a)},
fT(a){return J.bM(a).gF(a)},
bI(a){return J.bg(a).gL(a)},
ei(a){return J.al(a).gB(a)},
di(a){return J.al(a).gM(a)},
b1(a){return J.bM(a).gv(a)},
qR(a){return J.de(a).gR(a)},
bh(a){return J.al(a).gk(a)},
uK(a){return J.bg(a).gU(a)},
pQ(a){return J.de(a).ga2(a)},
k9(a,b,c){return J.bM(a).ab(a,b,c)},
cL(a,b,c,d){return J.bM(a).cM(a,b,c,d)},
uL(a,b){return J.bM(a).T(a,b)},
r(a){return J.bg(a).l(a)},
uM(a,b){return J.bM(a).aG(a,b)},
cu(a,b){return J.bM(a).eB(a,b)},
dE:function dE(){},
hL:function hL(){},
eH:function eH(){},
c:function c(){},
cA:function cA(){},
ic:function ic(){},
dY:function dY(){},
cg:function cg(){},
dH:function dH(){},
dI:function dI(){},
a4:function a4(a){this.$ti=a},
hK:function hK(){},
m0:function m0(a){this.$ti=a},
cN:function cN(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eI:function eI(){},
eG:function eG(){},
hM:function hM(){},
cX:function cX(){}},A={pT:function pT(){},
qX(a,b,c){if(t.W.b(a))return new A.fd(a,b.h("@<0>").C(c).h("fd<1,2>"))
return new A.cQ(a,b.h("@<0>").C(c).h("cQ<1,2>"))},
ra(a){return new A.hQ("Field '"+a+"' has been assigned during initialization.")},
pu(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
ck(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nF(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fO(a,b,c){return a},
qp(a){var s,r
for(s=$.bH.length,r=0;r<s;++r)if(a===$.bH[r])return!0
return!1},
q1(a,b,c,d){A.eZ(b,"start")
if(c!=null){A.eZ(c,"end")
if(b>c)A.ca(A.aQ(b,0,c,"start",null))}return new A.f3(a,b,c,d.h("f3<0>"))},
bn(a,b,c,d){if(t.W.b(a))return new A.cU(a,b,c.h("@<0>").C(d).h("cU<1,2>"))
return new A.aP(a,b,c.h("@<0>").C(d).h("aP<1,2>"))},
iz(a,b,c){var s="takeCount"
A.uN(b,s,t.S)
A.eZ(b,s)
if(t.W.b(a))return new A.ev(a,b,c.h("ev<0>"))
return new A.d2(a,b,c.h("d2<0>"))},
dF(){return new A.d_("No element")},
e1:function e1(){},
en:function en(a,b){this.a=a
this.$ti=b},
cQ:function cQ(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b){this.a=a
this.$ti=b},
kS:function kS(a,b){this.a=a
this.b=b},
kR:function kR(a){this.a=a},
hQ:function hQ(a){this.a=a},
dt:function dt(a){this.a=a},
ne:function ne(){},
D:function D(){},
as:function as(){},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bz:function bz(a,b,c){var _=this
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
eP:function eP(a,b,c){var _=this
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
ev:function ev(a,b,c){this.a=a
this.b=b
this.$ti=c},
f4:function f4(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b){this.a=a
this.$ti=b},
f9:function f9(a,b){this.a=a
this.$ti=b},
av:function av(){},
cD:function cD(){},
dZ:function dZ(){},
ha(a,b,c){var s,r,q,p,o,n,m,l=A.N(a),k=A.eO(new A.ch(a,l.h("ch<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.aE)(k),++i,p=o){r=k[i]
c.a(a.j(0,r))
o=p+1
q[r]=p}n=A.eO(new A.aO(a,l.h("aO<2>")),!0,c)
m=new A.a6(q,n,b.h("@<0>").C(c).h("a6<1,2>"))
m.$keys=k
return m}return new A.eq(A.pY(a,b,c),b.h("@<0>").C(c).h("eq<1,2>"))},
qZ(){throw A.l(A.R("Cannot modify unmodifiable Map"))},
tB(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
xQ(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
W(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.r(a)
return s},
eX(a){var s,r=$.rf
if(r==null)r=$.rf=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
rg(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.t(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.l(A.aQ(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
ih(a){var s,r,q,p
if(a instanceof A.Q)return A.bG(A.aC(a),null)
s=J.bg(a)
if(s===B.j5||s===B.j7||t.ak.b(a)){r=B.bg(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bG(A.aC(a),null)},
rh(a){var s,r,q
if(a==null||typeof a=="number"||A.oN(a))return J.r(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cw)return a.l(0)
if(a instanceof A.bE)return a.e1(!0)
s=$.uq()
for(r=0;r<1;++r){q=s[r].ix(a)
if(q!=null)return q}return"Instance of '"+A.ih(a)+"'"},
vc(){return Date.now()},
vl(){var s,r
if($.mB!==0)return
$.mB=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mB=1e6
$.ii=new A.mA(r)},
vm(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
at(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.t.cp(s,10)|55296)>>>0,s&1023|56320)}}throw A.l(A.aQ(a,0,1114111,null,null))},
bC(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vk(a){return a.c?A.bC(a).getUTCFullYear()+0:A.bC(a).getFullYear()+0},
vi(a){return a.c?A.bC(a).getUTCMonth()+1:A.bC(a).getMonth()+1},
ve(a){return a.c?A.bC(a).getUTCDate()+0:A.bC(a).getDate()+0},
vf(a){return a.c?A.bC(a).getUTCHours()+0:A.bC(a).getHours()+0},
vh(a){return a.c?A.bC(a).getUTCMinutes()+0:A.bC(a).getMinutes()+0},
vj(a){return a.c?A.bC(a).getUTCSeconds()+0:A.bC(a).getSeconds()+0},
vg(a){return a.c?A.bC(a).getUTCMilliseconds()+0:A.bC(a).getMilliseconds()+0},
vd(a){var s=a.$thrownJsError
if(s==null)return null
return A.cr(s)},
ri(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aK(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
xK(a){throw A.l(A.te(a))},
t(a,b){if(a==null)J.bh(a)
throw A.l(A.pq(a,b))},
pq(a,b){var s,r="index"
if(!A.t2(b))return new A.bO(!0,b,r,null)
s=A.b_(J.bh(a))
if(b<0||b>=s)return A.az(b,s,a,r)
return A.vn(b,r)},
xD(a,b,c){if(a>c)return A.aQ(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aQ(b,a,c,"end",null)
return new A.bO(!0,b,"end",null)},
te(a){return new A.bO(!0,a,null,null)},
l(a){return A.aK(a,new Error())},
aK(a,b){var s
if(a==null)a=new A.cm()
b.dartException=a
s=A.y8
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
y8(){return J.r(this.dartException)},
ca(a,b){throw A.aK(a,b==null?new Error():b)},
bv(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ca(A.wA(a,b,c),s)},
wA(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.f8("'"+s+"': Cannot "+o+" "+l+k+n)},
aE(a){throw A.l(A.aS(a))},
cn(a){var s,r,q,p,o,n
a=A.tu(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.e([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.nP(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
nQ(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rs(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
pU(a,b){var s=b==null,r=s?null:b.method
return new A.hN(a,r,s?null:b.receiver)},
aL(a){var s
if(a==null)return new A.mx(a)
if(a instanceof A.ew){s=a.a
return A.cJ(a,s==null?A.aa(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cJ(a,a.dartException)
return A.xn(a)},
cJ(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
xn(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.t.cp(r,16)&8191)===10)switch(q){case 438:return A.cJ(a,A.pU(A.W(s)+" (Error "+q+")",null))
case 445:case 5007:A.W(s)
return A.cJ(a,new A.eV())}}if(a instanceof TypeError){p=$.tQ()
o=$.tR()
n=$.tS()
m=$.tT()
l=$.tW()
k=$.tX()
j=$.tV()
$.tU()
i=$.tZ()
h=$.tY()
g=p.a6(s)
if(g!=null)return A.cJ(a,A.pU(A.U(s),g))
else{g=o.a6(s)
if(g!=null){g.method="call"
return A.cJ(a,A.pU(A.U(s),g))}else if(n.a6(s)!=null||m.a6(s)!=null||l.a6(s)!=null||k.a6(s)!=null||j.a6(s)!=null||m.a6(s)!=null||i.a6(s)!=null||h.a6(s)!=null){A.U(s)
return A.cJ(a,new A.eV())}}return A.cJ(a,new A.iO(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.f1()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cJ(a,new A.bO(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.f1()
return a},
cr(a){var s
if(a instanceof A.ew)return a.b
if(a==null)return new A.fw(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fw(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fP(a){if(a==null)return J.bI(a)
if(typeof a=="object")return A.eX(a)
return J.bI(a)},
xx(a){if(typeof a=="number")return B.Y.gL(a)
if(a instanceof A.jT)return A.eX(a)
if(a instanceof A.bE)return a.gL(a)
return A.fP(a)},
xF(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
xG(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
wP(a,b,c,d,e,f){t.Z.a(a)
switch(A.b_(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.l(new A.o4("Unsupported number of arguments for wrapped closure"))},
ec(a,b){var s=a.$identity
if(!!s)return s
s=A.xy(a,b)
a.$identity=s
return s},
xy(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.wP)},
uV(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.is().constructor.prototype):Object.create(new A.dn(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.qY(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.uR(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.qY(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
uR(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.l("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.uP)}throw A.l("Error in functionType of tearoff")},
uS(a,b,c,d){var s=A.qW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
qY(a,b,c,d){if(c)return A.uU(a,b,d)
return A.uS(b.length,d,a,b)},
uT(a,b,c,d){var s=A.qW,r=A.uQ
switch(b?-1:a){case 0:throw A.l(new A.il("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
uU(a,b,c){var s,r
if($.qU==null)$.qU=A.qT("interceptor")
if($.qV==null)$.qV=A.qT("receiver")
s=b.length
r=A.uT(s,c,a,b)
return r},
qm(a){return A.uV(a)},
uP(a,b){return A.fF(v.typeUniverse,A.aC(a.a),b)},
qW(a){return a.a},
uQ(a){return a.b},
qT(a){var s,r,q,p=new A.dn("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.l(A.c0("Field name "+a+" not found.",null))},
xI(a){return v.getIsolateTag(a)},
Aj(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
xT(a){var s,r,q,p,o,n=A.U($.tp.$1(a)),m=$.pr[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pz[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bF($.td.$2(a,n))
if(q!=null){m=$.pr[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pz[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.pC(s)
$.pr[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.pz[n]=s
return s}if(p==="-"){o=A.pC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.ts(a,s)
if(p==="*")throw A.l(A.rt(n))
if(v.leafTags[n]===true){o=A.pC(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.ts(a,s)},
ts(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.qq(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
pC(a){return J.qq(a,!1,null,!!a.$ia3)},
xV(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.pC(s)
else return J.qq(s,c,null,null)},
xM(){if(!0===$.qo)return
$.qo=!0
A.xN()},
xN(){var s,r,q,p,o,n,m,l
$.pr=Object.create(null)
$.pz=Object.create(null)
A.xL()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.tt.$1(o)
if(n!=null){m=A.xV(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
xL(){var s,r,q,p,o,n,m=B.df()
m=A.eb(B.dg,A.eb(B.dh,A.eb(B.bh,A.eb(B.bh,A.eb(B.di,A.eb(B.dj,A.eb(B.dk(B.bg),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.tp=new A.pv(p)
$.td=new A.pw(o)
$.tt=new A.px(n)},
eb(a,b){return a(b)||b},
vV(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.t(b,s)
if(!J.a9(r,b[s]))return!1}return!0},
xB(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
r8(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.l(A.aV("Illegal RegExp pattern ("+String(o)+")",a,null))},
y_(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qn(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
y2(a,b,c,d){var s=b.dt(a,d)
if(s==null)return a
return A.tx(a,s.b.index,s.gaW(0),c)},
tu(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cK(a,b,c){var s
if(typeof b=="string")return A.y1(a,b,c)
if(b instanceof A.dG){s=b.gdJ()
s.lastIndex=0
return a.replace(s,A.qn(c))}return A.y0(a,b,c)},
y0(a,b,c){var s,r,q,p
for(s=J.qO(b,a),s=s.gv(s),r=0,q="";s.m();){p=s.gp(s)
q=q+a.substring(r,p.gbS(p))+c
r=p.gaW(p)}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
y1(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.tu(b),"g"),A.qn(c))},
y3(a,b,c,d){return d===0?a.replace(b.b,A.qn(c)):A.y2(a,b,c,d)},
tx(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
ae:function ae(a,b){this.a=a
this.b=b},
aB:function aB(a,b){this.a=a
this.b=b},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(a){this.a=a},
eq:function eq(a,b){this.a=a
this.$ti=b},
ep:function ep(){},
kV:function kV(a,b,c){this.a=a
this.b=b
this.c=c},
a6:function a6(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b){this.a=a
this.$ti=b},
cp:function cp(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
du:function du(){},
dv:function dv(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b){this.a=a
this.$ti=b},
mA:function mA(a){this.a=a},
f0:function f0(){},
nP:function nP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eV:function eV(){},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
mx:function mx(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
fw:function fw(a){this.a=a
this.b=null},
cw:function cw(){},
h6:function h6(){},
h7:function h7(){},
iA:function iA(){},
is:function is(){},
dn:function dn(a,b){this.a=a
this.b=b},
il:function il(a){this.a=a},
bV:function bV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
m1:function m1(a){this.a=a},
m4:function m4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ch:function ch(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c,d){var _=this
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
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eJ:function eJ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pv:function pv(a){this.a=a},
pw:function pw(a){this.a=a},
px:function px(a){this.a=a},
bE:function bE(){},
db:function db(){},
e2:function e2(){},
e3:function e3(){},
dG:function dG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fn:function fn(a){this.b=a},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
f2:function f2(a,b){this.a=a
this.c=b},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
wB(a){return a},
va(a){return new Uint8Array(a)},
cq(a,b,c){if(a>>>0!==a||a>=c)throw A.l(A.pq(b,a))},
wx(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.l(A.xD(a,b,c))
return b},
dO:function dO(){},
eR:function eR(){},
i_:function i_(){},
aX:function aX(){},
eQ:function eQ(){},
bA:function bA(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
i5:function i5(){},
i6:function i6(){},
eS:function eS(){},
eT:function eT(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
q_(a,b){var s=b.c
return s==null?b.c=A.fD(a,"bk",[b.x]):s},
rk(a){var s=a.w
if(s===6||s===7)return A.rk(a.x)
return s===11||s===12},
vq(a){return a.as},
xW(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aD(a){return A.ow(v.typeUniverse,a,!1)},
dc(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dc(a1,s,a3,a4)
if(r===s)return a2
return A.rJ(a1,r,!0)
case 7:s=a2.x
r=A.dc(a1,s,a3,a4)
if(r===s)return a2
return A.rI(a1,r,!0)
case 8:q=a2.y
p=A.ea(a1,q,a3,a4)
if(p===q)return a2
return A.fD(a1,a2.x,p)
case 9:o=a2.x
n=A.dc(a1,o,a3,a4)
m=a2.y
l=A.ea(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.qa(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ea(a1,j,a3,a4)
if(i===j)return a2
return A.rK(a1,k,i)
case 11:h=a2.x
g=A.dc(a1,h,a3,a4)
f=a2.y
e=A.xi(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.rH(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ea(a1,d,a3,a4)
o=a2.x
n=A.dc(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.qb(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.l(A.fY("Attempted to substitute unexpected RTI kind "+a0))}},
ea(a,b,c,d){var s,r,q,p,o=b.length,n=A.oF(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dc(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xj(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.oF(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dc(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xi(a,b,c,d){var s,r=b.a,q=A.ea(a,r,c,d),p=b.b,o=A.ea(a,p,c,d),n=b.c,m=A.xj(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.je()
s.a=q
s.b=o
s.c=m
return s},
e(a,b){a[v.arrayRti]=b
return a},
ti(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.xJ(s)
return a.$S()}return null},
xP(a,b){var s
if(A.rk(b))if(a instanceof A.cw){s=A.ti(a)
if(s!=null)return s}return A.aC(a)},
aC(a){if(a instanceof A.Q)return A.N(a)
if(Array.isArray(a))return A.au(a)
return A.qi(J.bg(a))},
au(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
N(a){var s=a.$ti
return s!=null?s:A.qi(a)},
qi(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.wN(a,s)},
wN(a,b){var s=a instanceof A.cw?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.w4(v.typeUniverse,s.name)
b.$ccache=r
return r},
xJ(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.ow(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pt(a){return A.dd(A.N(a))},
qk(a){var s
if(a instanceof A.bE)return A.xE(a.$r,a.bk())
s=a instanceof A.cw?A.ti(a):null
if(s!=null)return s
if(t.dm.b(a))return J.uK(a).a
if(Array.isArray(a))return A.au(a)
return A.aC(a)},
dd(a){var s=a.r
return s==null?a.r=new A.jT(a):s},
xE(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.t(q,0)
s=A.fF(v.typeUniverse,A.qk(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.t(q,r)
s=A.rL(v.typeUniverse,s,A.qk(q[r]))}return A.fF(v.typeUniverse,s,a)},
c_(a){return A.dd(A.ow(v.typeUniverse,a,!1))},
wM(a){var s=this
s.b=A.xf(s)
return s.b(a)},
xf(a){var s,r,q,p,o
if(a===t.K)return A.wV
if(A.df(a))return A.wZ
s=a.w
if(s===6)return A.wH
if(s===1)return A.t4
if(s===7)return A.wQ
r=A.xe(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.df)){a.f="$i"+q
if(q==="C")return A.wT
if(a===t.m)return A.wS
return A.wY}}else if(s===10){p=A.xB(a.x,a.y)
o=p==null?A.t4:p
return o==null?A.aa(o):o}return A.wF},
xe(a){if(a.w===8){if(a===t.S)return A.t2
if(a===t.i||a===t.di)return A.wU
if(a===t.N)return A.wX
if(a===t.y)return A.oN}return null},
wL(a){var s=this,r=A.wE
if(A.df(s))r=A.wt
else if(s===t.K)r=A.aa
else if(A.ed(s)){r=A.wG
if(s===t.h6)r=A.qh
else if(s===t.dk)r=A.bF
else if(s===t.fQ)r=A.wp
else if(s===t.cg)r=A.rW
else if(s===t.cD)r=A.wq
else if(s===t.bX)r=A.aR}else if(s===t.S)r=A.b_
else if(s===t.N)r=A.U
else if(s===t.y)r=A.e7
else if(s===t.di)r=A.wr
else if(s===t.i)r=A.rV
else if(s===t.m)r=A.y
s.a=r
return s.a(a)},
wF(a){var s=this
if(a==null)return A.ed(s)
return A.xR(v.typeUniverse,A.xP(a,s),s)},
wH(a){if(a==null)return!0
return this.x.b(a)},
wY(a){var s,r=this
if(a==null)return A.ed(r)
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.bg(a)[s]},
wT(a){var s,r=this
if(a==null)return A.ed(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.Q)return!!a[s]
return!!J.bg(a)[s]},
wS(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.Q)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
t3(a){if(typeof a=="object"){if(a instanceof A.Q)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
wE(a){var s=this
if(a==null){if(A.ed(s))return a}else if(s.b(a))return a
throw A.aK(A.rY(a,s),new Error())},
wG(a){var s=this
if(a==null||s.b(a))return a
throw A.aK(A.rY(a,s),new Error())},
rY(a,b){return new A.fB("TypeError: "+A.rz(a,A.bG(b,null)))},
rz(a,b){return A.hn(a)+": type '"+A.bG(A.qk(a),null)+"' is not a subtype of type '"+b+"'"},
bL(a,b){return new A.fB("TypeError: "+A.rz(a,b))},
wQ(a){var s=this
return s.x.b(a)||A.q_(v.typeUniverse,s).b(a)},
wV(a){return a!=null},
aa(a){if(a!=null)return a
throw A.aK(A.bL(a,"Object"),new Error())},
wZ(a){return!0},
wt(a){return a},
t4(a){return!1},
oN(a){return!0===a||!1===a},
e7(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aK(A.bL(a,"bool"),new Error())},
wp(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aK(A.bL(a,"bool?"),new Error())},
rV(a){if(typeof a=="number")return a
throw A.aK(A.bL(a,"double"),new Error())},
wq(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.bL(a,"double?"),new Error())},
t2(a){return typeof a=="number"&&Math.floor(a)===a},
b_(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aK(A.bL(a,"int"),new Error())},
qh(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aK(A.bL(a,"int?"),new Error())},
wU(a){return typeof a=="number"},
wr(a){if(typeof a=="number")return a
throw A.aK(A.bL(a,"num"),new Error())},
rW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aK(A.bL(a,"num?"),new Error())},
wX(a){return typeof a=="string"},
U(a){if(typeof a=="string")return a
throw A.aK(A.bL(a,"String"),new Error())},
bF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aK(A.bL(a,"String?"),new Error())},
y(a){if(A.t3(a))return a
throw A.aK(A.bL(a,"JSObject"),new Error())},
aR(a){if(a==null)return a
if(A.t3(a))return a
throw A.aK(A.bL(a,"JSObject?"),new Error())},
ta(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bG(a[q],b)
return s},
x5(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ta(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bG(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
rZ(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.e([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.f.u(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.t(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bG(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bG(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bG(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bG(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bG(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bG(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bG(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bG(a.x,b)+">"
if(l===8){p=A.xm(a.x)
o=a.y
return o.length>0?p+("<"+A.ta(o,b)+">"):p}if(l===10)return A.x5(a,b)
if(l===11)return A.rZ(a,b,null)
if(l===12)return A.rZ(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.t(b,n)
return b[n]}return"?"},
xm(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
w5(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
w4(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.ow(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fE(a,5,"#")
q=A.oF(s)
for(p=0;p<s;++p)q[p]=r
o=A.fD(a,b,q)
n[b]=o
return o}else return m},
w3(a,b){return A.rT(a.tR,b)},
w2(a,b){return A.rT(a.eT,b)},
ow(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.rE(A.rC(a,null,b,!1))
r.set(b,s)
return s},
fF(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.rE(A.rC(a,b,c,!0))
q.set(c,r)
return r},
rL(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.qa(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cH(a,b){b.a=A.wL
b.b=A.wM
return b},
fE(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.bY(null,null)
s.w=b
s.as=c
r=A.cH(a,s)
a.eC.set(c,r)
return r},
rJ(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.w0(a,b,r,c)
a.eC.set(r,s)
return s},
w0(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.df(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.ed(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.bY(null,null)
q.w=6
q.x=b
q.as=c
return A.cH(a,q)},
rI(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.vZ(a,b,r,c)
a.eC.set(r,s)
return s},
vZ(a,b,c,d){var s,r
if(d){s=b.w
if(A.df(b)||b===t.K)return b
else if(s===1)return A.fD(a,"bk",[b])
else if(b===t.b||b===t.T)return t.eH}r=new A.bY(null,null)
r.w=7
r.x=b
r.as=c
return A.cH(a,r)},
w1(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.bY(null,null)
s.w=13
s.x=b
s.as=q
r=A.cH(a,s)
a.eC.set(q,r)
return r},
fC(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
vY(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fD(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fC(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.bY(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cH(a,r)
a.eC.set(p,q)
return q},
qa(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fC(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.bY(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cH(a,o)
a.eC.set(q,n)
return n},
rK(a,b,c){var s,r,q="+"+(b+"("+A.fC(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.bY(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cH(a,s)
a.eC.set(q,r)
return r},
rH(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fC(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fC(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.vY(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.bY(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cH(a,p)
a.eC.set(r,o)
return o},
qb(a,b,c,d){var s,r=b.as+("<"+A.fC(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.w_(a,b,c,r,d)
a.eC.set(r,s)
return s},
w_(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.oF(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dc(a,b,r,0)
m=A.ea(a,c,r,0)
return A.qb(a,n,m,c!==m)}}l=new A.bY(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cH(a,l)},
rC(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
rE(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.vQ(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.rD(a,r,l,k,!1)
else if(q===46)r=A.rD(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.da(a.u,a.e,k.pop()))
break
case 94:k.push(A.w1(a.u,k.pop()))
break
case 35:k.push(A.fE(a.u,5,"#"))
break
case 64:k.push(A.fE(a.u,2,"@"))
break
case 126:k.push(A.fE(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.vS(a,k)
break
case 38:A.vR(a,k)
break
case 63:p=a.u
k.push(A.rJ(p,A.da(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.rI(p,A.da(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.vP(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.rF(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.vU(a.u,a.e,o)
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
vQ(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
rD(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.w5(s,o.x)[p]
if(n==null)A.ca('No "'+p+'" in "'+A.vq(o)+'"')
d.push(A.fF(s,o,n))}else d.push(p)
return m},
vS(a,b){var s,r=a.u,q=A.rB(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fD(r,p,q))
else{s=A.da(r,a.e,p)
switch(s.w){case 11:b.push(A.qb(r,s,q,a.n))
break
default:b.push(A.qa(r,s,q))
break}}},
vP(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.rB(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.da(p,a.e,o)
q=new A.je()
q.a=s
q.b=n
q.c=m
b.push(A.rH(p,r,q))
return
case-4:b.push(A.rK(p,b.pop(),s))
return
default:throw A.l(A.fY("Unexpected state under `()`: "+A.W(o)))}},
vR(a,b){var s=b.pop()
if(0===s){b.push(A.fE(a.u,1,"0&"))
return}if(1===s){b.push(A.fE(a.u,4,"1&"))
return}throw A.l(A.fY("Unexpected extended operation "+A.W(s)))},
rB(a,b){var s=b.splice(a.p)
A.rF(a.u,a.e,s)
a.p=b.pop()
return s},
da(a,b,c){if(typeof c=="string")return A.fD(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.vT(a,b,c)}else return c},
rF(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.da(a,b,c[s])},
vU(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.da(a,b,c[s])},
vT(a,b,c){var s,r,q=b.w
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
xR(a,b,c){var s,r=b.d
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
return A.aI(a,A.q_(a,b),c,d,e)}if(s===6)return A.aI(a,p,c,d,e)&&A.aI(a,b.x,c,d,e)
if(q===7){if(A.aI(a,b,c,d.x,e))return!0
return A.aI(a,b,c,A.q_(a,d),e)}if(q===6)return A.aI(a,b,c,p,e)||A.aI(a,b,c,d.x,e)
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
if(!A.aI(a,j,c,i,e)||!A.aI(a,i,e,j,c))return!1}return A.t1(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.t1(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.wR(a,b,c,d,e)}if(o&&q===10)return A.wW(a,b,c,d,e)
return!1},
t1(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
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
wR(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fF(a,b,r[o])
return A.rU(a,p,null,c,d.y,e)}return A.rU(a,b.y,null,c,d.y,e)},
rU(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aI(a,b[s],d,e[s],f))return!1
return!0},
wW(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aI(a,r[s],c,q[s],e))return!1
return!0},
ed(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.df(a))if(s!==6)r=s===7&&A.ed(a.x)
return r},
df(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
rT(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
oF(a){return a>0?new Array(a):v.typeUniverse.sEA},
bY:function bY(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
je:function je(){this.c=this.b=this.a=null},
jT:function jT(a){this.a=a},
j9:function j9(){},
fB:function fB(a){this.a=a},
vJ(){var s,r,q
if(self.scheduleImmediate!=null)return A.xr()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.ec(new A.nZ(s),1)).observe(r,{childList:true})
return new A.nY(s,r,q)}else if(self.setImmediate!=null)return A.xs()
return A.xt()},
vK(a){self.scheduleImmediate(A.ec(new A.o_(t.M.a(a)),0))},
vL(a){self.setImmediate(A.ec(new A.o0(t.M.a(a)),0))},
vM(a){A.q2(B.aW,t.M.a(a))},
q2(a,b){var s=B.t.a9(a.a,1000)
return A.vW(s<0?0:s,b)},
rr(a,b){var s=B.t.a9(a.a,1000)
return A.vX(s<0?0:s,b)},
vW(a,b){var s=new A.fA(!0)
s.eM(a,b)
return s},
vX(a,b){var s=new A.fA(!1)
s.eN(a,b)
return s},
be(a){return new A.iZ(new A.an($.ag,a.h("an<0>")),a.h("iZ<0>"))},
bd(a,b){a.$2(0,null)
b.b=!0
return b.a},
b0(a,b){A.wu(a,b)},
bc(a,b){b.aT(0,a)},
bb(a,b){b.cB(A.aL(a),A.cr(a))},
wu(a,b){var s,r,q=new A.oH(b),p=new A.oI(b)
if(a instanceof A.an)a.e0(q,p,t.z)
else{s=t.z
if(a instanceof A.an)a.cW(q,p,s)
else{r=new A.an($.ag,t._)
r.a=8
r.c=a
r.e0(q,p,s)}}},
bf(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ag.eu(new A.oV(s),t.H,t.S,t.z)},
rG(a,b,c){return 0},
kk(a){var s
if(t.C.b(a)){s=a.gaI()
if(s!=null)return s}return B.ao},
v2(a,b,c){var s=new A.an($.ag,c.h("an<0>"))
A.c5(a,new A.lF(b,s,c))
return s},
t0(a,b){if($.ag===B.A)return null
return null},
wO(a,b){if($.ag!==B.A)A.t0(a,b)
if(b==null)if(t.C.b(a)){b=a.gaI()
if(b==null){A.ri(a,B.ao)
b=B.ao}}else b=B.ao
else if(t.C.b(a))A.ri(a,b)
return new A.b7(a,b)},
rA(a,b){var s=new A.an($.ag,b.h("an<0>"))
b.a(a)
s.a=8
s.c=a
return s},
o9(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.vr()
b.bZ(new A.b7(new A.bO(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dO(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.aQ()
b.bd(o.a)
A.d6(b,p)
return}b.a^=2
A.e9(null,null,b.b,t.M.a(new A.oa(o,b)))},
d6(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.oO(m.a,m.b)}return}q.a=b
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
A.oO(j.a,j.b)
return}g=$.ag
if(g!==h)$.ag=h
else g=null
c=c.c
if((c&15)===8)new A.oe(q,d,n).$0()
else if(o){if((c&1)!==0)new A.od(q,j).$0()}else if((c&2)!==0)new A.oc(d,q).$0()
if(g!=null)$.ag=g
c=q.c
if(c instanceof A.an){p=q.a.$ti
p=p.h("bk<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.br(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.o9(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.br(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
x6(a,b){var s
if(t.ag.b(a))return b.eu(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw A.l(A.ek(a,"onError",u.c))},
x1(){var s,r
for(s=$.e8;s!=null;s=$.e8){$.fM=null
r=s.b
$.e8=r
if(r==null)$.fL=null
s.a.$0()}},
xh(){$.qj=!0
try{A.x1()}finally{$.fM=null
$.qj=!1
if($.e8!=null)$.qI().$1(A.tf())}},
tc(a){var s=new A.j_(a),r=$.fL
if(r==null){$.e8=$.fL=s
if(!$.qj)$.qI().$1(A.tf())}else $.fL=r.b=s},
x9(a){var s,r,q,p=$.e8
if(p==null){A.tc(a)
$.fM=$.fL
return}s=new A.j_(a)
r=$.fM
if(r==null){s.b=p
$.e8=$.fM=s}else{q=r.b
s.b=q
$.fM=r.b=s
if(q==null)$.fL=s}},
pI(a){var s=null,r=$.ag
if(B.A===r){A.e9(s,s,B.A,a)
return}A.e9(s,s,r,t.M.a(r.cA(a)))},
zf(a,b){A.fO(a,"stream",t.K)
return new A.jF(b.h("jF<0>"))},
c5(a,b){var s=$.ag
if(s===B.A)return A.q2(a,t.M.a(b))
return A.q2(a,t.M.a(s.cA(b)))},
rq(a,b){var s=$.ag
if(s===B.A)return A.rr(a,t.fM.a(b))
return A.rr(a,t.fM.a(s.e9(b,t.E)))},
oO(a,b){A.x9(new A.oP(a,b))},
t8(a,b,c,d,e){var s,r=$.ag
if(r===c)return d.$0()
$.ag=c
s=r
try{r=d.$0()
return r}finally{$.ag=s}},
t9(a,b,c,d,e,f,g){var s,r=$.ag
if(r===c)return d.$1(e)
$.ag=c
s=r
try{r=d.$1(e)
return r}finally{$.ag=s}},
x7(a,b,c,d,e,f,g,h,i){var s,r=$.ag
if(r===c)return d.$2(e,f)
$.ag=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ag=s}},
e9(a,b,c,d){t.M.a(d)
if(B.A!==c){d=c.cA(d)
d=d}A.tc(d)},
nZ:function nZ(a){this.a=a},
nY:function nY(a,b,c){this.a=a
this.b=b
this.c=c},
o_:function o_(a){this.a=a},
o0:function o0(a){this.a=a},
fA:function fA(a){this.a=a
this.b=null
this.c=0},
ov:function ov(a,b){this.a=a
this.b=b},
ou:function ou(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b){this.a=a
this.b=!1
this.$ti=b},
oH:function oH(a){this.a=a},
oI:function oI(a){this.a=a},
oV:function oV(a){this.a=a},
fx:function fx(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
e4:function e4(a,b){this.a=a
this.$ti=b},
b7:function b7(a,b){this.a=a
this.b=b},
lF:function lF(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(){},
co:function co(a,b){this.a=a
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
o6:function o6(a,b){this.a=a
this.b=b},
ob:function ob(a,b){this.a=a
this.b=b},
oa:function oa(a,b){this.a=a
this.b=b},
o8:function o8(a,b){this.a=a
this.b=b},
o7:function o7(a,b){this.a=a
this.b=b},
oe:function oe(a,b,c){this.a=a
this.b=b
this.c=c},
of:function of(a,b){this.a=a
this.b=b},
og:function og(a){this.a=a},
od:function od(a,b){this.a=a
this.b=b},
oc:function oc(a,b){this.a=a
this.b=b},
oh:function oh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oi:function oi(a,b,c){this.a=a
this.b=b
this.c=c},
oj:function oj(a,b){this.a=a
this.b=b},
j_:function j_(a){this.a=a
this.b=null},
iu:function iu(){},
nr:function nr(a,b){this.a=a
this.b=b},
ns:function ns(a,b){this.a=a
this.b=b},
jF:function jF(a){this.$ti=a},
fJ:function fJ(){},
jx:function jx(){},
or:function or(a,b){this.a=a
this.b=b},
os:function os(a,b,c){this.a=a
this.b=b
this.c=c},
oP:function oP(a,b){this.a=a
this.b=b},
q6(a,b){var s=a[b]
return s===a?null:s},
q8(a,b,c){if(c==null)a[b]=a
else a[b]=c},
q7(){var s=Object.create(null)
A.q8(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
rb(a,b){return new A.bV(a.h("@<0>").C(b).h("bV<1,2>"))},
ai(a,b,c){return b.h("@<0>").C(c).h("pX<1,2>").a(A.xF(a,new A.bV(b.h("@<0>").C(c).h("bV<1,2>"))))},
Z(a,b){return new A.bV(a.h("@<0>").C(b).h("bV<1,2>"))},
dK(a){return new A.d9(a.h("d9<0>"))},
dL(a,b){return b.h("rc<0>").a(A.xG(a,new A.d9(b.h("d9<0>"))))},
q9(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
v6(a,b){var s=J.b1(a.a)
if(new A.d3(s,a.b,a.$ti.h("d3<1>")).m())return s.gp(s)
return null},
pY(a,b,c){var s=A.rb(b,c)
a.N(0,new A.m5(s,b,c))
return s},
b9(a,b,c){var s=A.rb(b,c)
s.S(0,a)
return s},
pZ(a){var s,r
if(A.qp(a))return"{...}"
s=new A.aY("")
try{r={}
B.f.u($.bH,a)
s.a+="{"
r.a=!0
J.pP(a,new A.m7(r,s))
s.a+="}"}finally{if(0>=$.bH.length)return A.t($.bH,-1)
$.bH.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
fh:function fh(){},
ok:function ok(a){this.a=a},
fj:function fj(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
d7:function d7(a,b){this.a=a
this.$ti=b},
fi:function fi(a,b,c){var _=this
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
jm:function jm(a){this.a=a
this.c=this.b=null},
fk:function fk(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
m5:function m5(a,b,c){this.a=a
this.b=b
this.c=c},
A:function A(){},
T:function T(){},
m6:function m6(a){this.a=a},
m7:function m7(a,b){this.a=a
this.b=b},
fl:function fl(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fG:function fG(){},
dM:function dM(){},
c6:function c6(a,b){this.a=a
this.$ti=b},
ci:function ci(){},
ft:function ft(){},
e5:function e5(){},
x4(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aL(r)
q=A.aV(String(s),null,null)
throw A.l(q)}q=A.oJ(p)
return q},
oJ(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.ji(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.oJ(a[s])
return a},
wm(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.u4()
else s=new Uint8Array(o)
for(r=J.al(a),q=0;q<o;++q){p=r.j(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
wl(a,b,c,d){var s=a?$.u3():$.u2()
if(s==null)return null
if(0===c&&d===b.length)return A.rS(s,b)
return A.rS(s,b.subarray(c,d))},
rS(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
qS(a,b,c,d,e,f){if(B.t.b7(f,4)!==0)throw A.l(A.aV("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.l(A.aV("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.l(A.aV("Invalid base64 padding, more than two '=' characters",a,b))},
r9(a,b,c){return new A.eK(a,b)},
wz(a){return a.iu()},
vN(a,b){return new A.on(a,[],A.xz())},
vO(a,b,c){var s,r=new A.aY(""),q=A.vN(r,b)
q.bP(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
wn(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
ji:function ji(a,b){this.a=a
this.b=b
this.c=null},
om:function om(a){this.a=a},
jj:function jj(a){this.a=a},
oD:function oD(){},
oC:function oC(){},
h3:function h3(){},
ky:function ky(){},
cS:function cS(){},
hb:function hb(){},
hm:function hm(){},
eK:function eK(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hO:function hO(){},
m3:function m3(a){this.b=a},
m2:function m2(a){this.a=a},
oo:function oo(){},
op:function op(a,b){this.a=a
this.b=b},
on:function on(a,b,c){this.c=a
this.a=b
this.b=c},
iS:function iS(){},
nV:function nV(){},
oE:function oE(a){this.b=0
this.c=a},
nU:function nU(a){this.a=a},
oB:function oB(a){this.a=a
this.b=16
this.c=0},
py(a,b){var s=A.rg(a,b)
if(s!=null)return s
throw A.l(A.aV(a,null,null))},
uX(a,b){a=A.aK(a,new Error())
if(a==null)a=A.aa(a)
a.stack=b.l(0)
throw a},
hT(a,b,c,d){var s,r=c?J.r5(a,d):J.r4(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
eO(a,b,c){var s,r=A.e([],c.h("a4<0>"))
for(s=J.b1(a);s.m();)B.f.u(r,c.a(s.gp(s)))
if(b)return r
r.$flags=1
return r},
aw(a,b){var s,r
if(Array.isArray(a))return A.e(a.slice(0),b.h("a4<0>"))
s=A.e([],b.h("a4<0>"))
for(r=J.b1(a);r.m();)B.f.u(s,r.gp(r))
return s},
rd(a,b){var s=A.eO(a,!1,b)
s.$flags=3
return s},
rn(a,b,c){var s,r
A.eZ(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.l(A.aQ(c,b,null,"end",null))
if(s===0)return""}r=A.vv(a,b,c)
return r},
vv(a,b,c){var s=a.length
if(b>=s)return""
return A.vm(a,b,c==null||c>s?s:c)},
bX(a,b,c){return new A.dG(a,A.r8(a,!1,b,!1,c,""))},
rm(a,b,c){var s=J.b1(b)
if(!s.m())return a
if(c.length===0){do a+=A.W(s.gp(s))
while(s.m())}else{a+=A.W(s.gp(s))
while(s.m())a=a+c+A.W(s.gp(s))}return a},
oA(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.W){s=$.u0()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.dq.cC(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.f.charCodeAt(o)&a)!==0)p+=A.at(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
wd(a){var s,r,q
if(!$.u1())return A.we(a)
s=new URLSearchParams()
a.N(0,new A.oz(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.b.t(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
vr(){return A.cr(new Error())},
uW(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
r_(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hi(a){if(a>=10)return""+a
return"0"+a},
kZ(a,b,c){return new A.bw(a+1000*b+1e6*c)},
hn(a){if(typeof a=="number"||A.oN(a)||a==null)return J.r(a)
if(typeof a=="string")return JSON.stringify(a)
return A.rh(a)},
uY(a,b){A.fO(a,"error",t.K)
A.fO(b,"stackTrace",t.k)
A.uX(a,b)},
fY(a){return new A.fX(a)},
c0(a,b){return new A.bO(!1,null,b,a)},
ek(a,b,c){return new A.bO(!0,a,b,c)},
uN(a,b,c){return a},
vn(a,b){return new A.eY(null,null,!0,a,b,"Value not in range")},
aQ(a,b,c,d,e){return new A.eY(b,c,!0,a,d,"Invalid value")},
vo(a,b,c,d){if(a<b||a>c)throw A.l(A.aQ(a,b,c,d,null))
return a},
dR(a,b,c){if(0>a||a>c)throw A.l(A.aQ(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.l(A.aQ(b,a,c,"end",null))
return b}return c},
eZ(a,b){if(a<0)throw A.l(A.aQ(a,0,null,b,null))
return a},
az(a,b,c,d){return new A.hJ(b,!0,a,d,"Index out of range")},
R(a){return new A.f8(a)},
rt(a){return new A.iN(a)},
ak(a){return new A.d_(a)},
aS(a){return new A.h9(a)},
aV(a,b,c){return new A.bT(a,b,c)},
v7(a,b,c){var s,r
if(A.qp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.e([],t.s)
B.f.u($.bH,a)
try{A.x_(a,s)}finally{if(0>=$.bH.length)return A.t($.bH,-1)
$.bH.pop()}r=A.rm(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
pS(a,b,c){var s,r
if(A.qp(a))return b+"..."+c
s=new A.aY(b)
B.f.u($.bH,a)
try{r=s
r.a=A.rm(r.a,a,", ")}finally{if(0>=$.bH.length)return A.t($.bH,-1)
$.bH.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
x_(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.W(l.gp(l))
B.f.u(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.t(b,-1)
r=b.pop()
if(0>=b.length)return A.t(b,-1)
q=b.pop()}else{p=l.gp(l);++j
if(!l.m()){if(j<=4){B.f.u(b,A.W(p))
return}r=A.W(p)
if(0>=b.length)return A.t(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gp(l);++j
for(;l.m();p=o,o=n){n=l.gp(l);++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.t(b,-1)
k-=b.pop().length+2;--j}B.f.u(b,"...")
return}}q=A.W(p)
r=A.W(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.t(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.f.u(b,m)
B.f.u(b,q)
B.f.u(b,r)},
re(a,b,c,d,e){return new A.cR(a,b.h("@<0>").C(c).C(d).C(e).h("cR<1,2,3,4>"))},
eW(a,b,c,d){var s
if(B.V===c){s=B.Y.gL(a)
b=J.bI(b)
return A.nF(A.ck(A.ck($.k8(),s),b))}if(B.V===d){s=B.Y.gL(a)
b=J.bI(b)
c=J.bI(c)
return A.nF(A.ck(A.ck(A.ck($.k8(),s),b),c))}s=B.Y.gL(a)
b=J.bI(b)
c=J.bI(c)
d=J.bI(d)
d=A.nF(A.ck(A.ck(A.ck(A.ck($.k8(),s),b),c),d))
return d},
vb(a){var s,r,q=$.k8()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aE)(a),++r)q=A.ck(q,J.bI(a[r]))
return A.nF(q)},
ee(a){A.xX(a)},
cE(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
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
if(n===0)return A.ru(a7>0||a8<a8?B.b.t(a6,a7,a8):a6,5,a5).gez()
else if(n===32)return A.ru(B.b.t(a6,s,a8),0,a5).gez()}m=A.hT(8,0,!1,t.S)
B.f.i(m,0,0)
r=a7-1
B.f.i(m,1,r)
B.f.i(m,2,r)
B.f.i(m,7,r)
B.f.i(m,3,a7)
B.f.i(m,4,a7)
B.f.i(m,5,a8)
B.f.i(m,6,a8)
if(A.tb(a6,a7,a8,0,m)>=14)B.f.i(m,7,a8)
l=m[1]
if(l>=a7)if(A.tb(a6,a7,l,20,m)===20)m[7]=l
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
n=2}a6=c+B.b.t(a6,i,a8)
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
if(s){a6=B.b.aF(a6,i,h,"/");++h;++g;++a8}else{a6=B.b.t(a6,a7,i)+"/"+B.b.t(a6,h,a8)
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
if(s){a6=B.b.aF(a6,j,i,"")
i-=3
h-=3
g-=3
a8-=3}else{a6=B.b.t(a6,a7,j)+B.b.t(a6,i,a8)
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
if(s){a6=B.b.aF(a6,j,i,"")
i-=4
h-=4
g-=4
a8-=3}else{a6=B.b.t(a6,a7,j)+B.b.t(a6,i,a8)
l-=a7
k-=a7
j-=a7
s=4+a7
i-=s
h-=s
g-=s
a8=a6.length
a7=d}}e="https"}f=!q}}}}if(f){if(a7>0||a8<a6.length){a6=B.b.t(a6,a7,a8)
l-=a7
k-=a7
j-=a7
i-=a7
h-=a7
g-=a7}return new A.jz(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.wf(a6,a7,l)
else{if(l===a7)A.e6(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.wg(a6,a,k-1):""
a1=A.wa(a6,k,j,!1)
s=j+1
if(s<i){a2=A.rg(B.b.t(a6,s,i),a5)
b=A.wc(a2==null?A.ca(A.aV("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.wb(a6,i,h,a5,e,a1!=null)
a4=h<g?A.qe(a6,h+1,g,a5):a5
return A.qc(e,a0,a1,b,a3,a4,g<a8?A.w9(a6,g+1,a8):a5)},
q4(a){var s,r,q=0,p=null
try{s=A.cE(a,q,p)
return s}catch(r){if(A.aL(r) instanceof A.bT)return null
else throw r}},
rw(a){var s=t.N
return B.f.i4(A.e(a.split("&"),t.s),A.Z(s,s),new A.nT(B.W),t.V)},
iQ(a,b,c){throw A.l(A.aV("Illegal IPv4 address, "+a,b,c))},
vF(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.t(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iQ("each part must be in the range 0..255",a,r)}A.iQ("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iQ(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.bv(d)
if(!(k<16))return A.t(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iQ(j,a,q)
p=l}A.iQ("IPv4 address should contain exactly 4 parts",a,q)},
vG(a,b,c){var s
if(b===c)throw A.l(A.aV("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.t(a,b)
if(a.charCodeAt(b)===118){s=A.vH(a,b,c)
if(s!=null)throw A.l(s)
return!1}A.rv(a,b,c)
return!0},
vH(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.f;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.t(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.bT(n,a,q)
r=q
break}return new A.bT("Unexpected character",a,q-1)}if(r-1===b)return new A.bT(n,a,r)
return new A.bT("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.bT("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.t(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.t(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.bT("Invalid IPvFuture address character",a,r)}},
rv(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.nS(a3)
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
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.vF(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.t.cp(l,8)
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
B.cA.bR(s,a0,16,s,a)
B.cA.i1(s,a,a0,0)}}return s},
qc(a,b,c,d,e,f,g){return new A.fH(a,b,c,d,e,f,g)},
rM(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
e6(a,b,c){throw A.l(A.aV(c,a,b))},
wc(a,b){if(a!=null&&a===A.rM(b))return null
return a},
wa(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.t(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.t(a,r)
if(a.charCodeAt(r)!==93)A.e6(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.t(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.w7(a,q,r)
if(o<r){n=o+1
p=A.rR(a,B.b.X(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.vG(a,q,o)
l=B.b.t(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.t(a,k)
if(a.charCodeAt(k)===58){o=B.b.bL(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.rR(a,B.b.X(a,"25",n)?o+3:n,c,"%25")}else p=""
A.rv(a,b,o)
return"["+B.b.t(a,b,o)+p+"]"}}return A.wi(a,b,c)},
w7(a,b,c){var s=B.b.bL(a,"%",b)
return s>=b&&s<c?s:c},
rR(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.aY(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.t(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.qf(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.aY("")
l=h.a+=B.b.t(a,q,r)
if(m)n=B.b.t(a,r,r+3)
else if(n==="%")A.e6(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.f.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.aY("")
if(q<r){h.a+=B.b.t(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.t(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.t(a,q,r)
if(h==null){h=new A.aY("")
m=h}else m=h
m.a+=i
l=A.qd(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.t(a,b,c)
if(q<c){i=B.b.t(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
wi(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.f
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.t(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.qf(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.aY("")
k=B.b.t(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.t(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.aY("")
if(q<r){p.a+=B.b.t(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.e6(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.t(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.t(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.aY("")
l=p}else l=p
l.a+=k
j=A.qd(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.t(a,b,c)
if(q<c){k=B.b.t(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
wf(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.t(a,b)
if(!A.rO(a.charCodeAt(b)))A.e6(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.t(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.f.charCodeAt(p)&8)!==0))A.e6(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.t(a,b,c)
return A.w6(q?a.toLowerCase():a)},
w6(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
wg(a,b,c){return A.fI(a,b,c,16,!1,!1)},
wb(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.fI(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.b.K(s,"/"))s="/"+s
return A.wh(s,e,f)},
wh(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.K(a,"/")&&!B.b.K(a,"\\"))return A.wj(a,!s||c)
return A.wk(a)},
qe(a,b,c,d){if(a!=null){if(d!=null)throw A.l(A.c0("Both query and queryParameters specified",null))
return A.fI(a,b,c,256,!0,!1)}if(d==null)return null
return A.wd(d)},
we(a){var s={},r=new A.aY("")
s.a=""
a.N(0,new A.ox(new A.oy(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
w9(a,b,c){return A.fI(a,b,c,256,!0,!1)},
qf(a,b,c){var s,r,q,p,o,n,m=u.f,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.t(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.t(a,l)
q=a.charCodeAt(l)
p=A.pu(r)
o=A.pu(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.t(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.at(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.t(a,b,b+3).toUpperCase()
return null},
qd(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
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
for(o=0;--p,p>=0;q=128){n=B.t.hp(a,6*p)&63|q
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
o+=3}}return A.rn(s,0,null)},
fI(a,b,c,d,e,f){var s=A.rQ(a,b,c,d,e,f)
return s==null?B.b.t(a,b,c):s},
rQ(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.f
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.t(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.qf(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.e6(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.t(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.qd(n)}if(o==null){o=new A.aY("")
k=o}else k=o
k.a=(k.a+=B.b.t(a,p,q))+l
if(typeof m!=="number")return A.xK(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.t(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
rP(a){if(B.b.K(a,"."))return!0
return B.b.cK(a,"/.")!==-1},
wk(a){var s,r,q,p,o,n,m
if(!A.rP(a))return a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.t(s,-1)
s.pop()
if(s.length===0)B.f.u(s,"")}p=!0}else{p="."===n
if(!p)B.f.u(s,n)}}if(p)B.f.u(s,"")
return B.f.J(s,"/")},
wj(a,b){var s,r,q,p,o,n
if(!A.rP(a))return!b?A.rN(a):a
s=A.e([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.f.geo(s)!==".."){if(0>=s.length)return A.t(s,-1)
s.pop()}else B.f.u(s,"..")
p=!0}else{p="."===n
if(!p)B.f.u(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.f.u(s,"")
if(!b){if(0>=s.length)return A.t(s,0)
B.f.i(s,0,A.rN(s[0]))}return B.f.J(s,"/")},
rN(a){var s,r,q,p=u.f,o=a.length
if(o>=2&&A.rO(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.t(a,0,s)+"%3A"+B.b.a5(a,s+1)
if(r<=127){if(!(r<128))return A.t(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
w8(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.t(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.l(A.c0("Invalid URL encoding",null))}}return r},
qg(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.t(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.W===d)return B.b.t(a,b,c)
else p=new A.dt(B.b.t(a,b,c))
else{p=A.e([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.t(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.l(A.c0("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.l(A.c0("Truncated URI",null))
B.f.u(p,A.w8(a,n+1))
n+=2}else if(r===43)B.f.u(p,32)
else B.f.u(p,r)}}t.B.a(p)
return B.mo.cC(p)},
rO(a){var s=a|32
return 97<=s&&s<=122},
ru(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.e([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.l(A.aV(k,a,r))}}if(q<0&&r>b)throw A.l(A.aV(k,a,r))
while(p!==44){B.f.u(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.t(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.f.u(j,o)
else{n=B.f.geo(j)
if(p!==44||r!==n+7||!B.b.X(a,"base64",n+1))throw A.l(A.aV("Expecting '='",a,r))
break}}B.f.u(j,r)
m=r+1
if((j.length&1)===1)a=B.db.ie(0,a,m,s)
else{l=A.rQ(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aF(a,m,s,l)}return new A.nR(a,j,c)},
tb(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.t(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.t(n,p)
o=n.charCodeAt(p)
d=o&31
B.f.i(e,o>>>5,r)}return d},
oz:function oz(a){this.a=a},
cT:function cT(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a},
o1:function o1(){},
ao:function ao(){},
fX:function fX(a){this.a=a},
cm:function cm(){},
bO:function bO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eY:function eY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hJ:function hJ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
f8:function f8(a){this.a=a},
iN:function iN(a){this.a=a},
d_:function d_(a){this.a=a},
h9:function h9(a){this.a=a},
ia:function ia(){},
f1:function f1(){},
o4:function o4(a){this.a=a},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
a1:function a1(a,b,c){this.a=a
this.b=b
this.$ti=c},
aH:function aH(){},
Q:function Q(){},
jK:function jK(){},
no:function no(){this.b=this.a=0},
aY:function aY(a){this.a=a},
nT:function nT(a){this.a=a},
nS:function nS(a){this.a=a},
fH:function fH(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
oy:function oy(a,b){this.a=a
this.b=b},
ox:function ox(a){this.a=a},
nR:function nR(a,b,c){this.a=a
this.b=b
this.c=c},
jz:function jz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
j4:function j4(a,b,c,d,e,f,g){var _=this
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
el:function el(){},
c2:function c2(){},
hc:function hc(){},
aj:function aj(){},
dx:function dx(){},
kY:function kY(){},
b8:function b8(){},
bP:function bP(){},
hd:function hd(){},
he:function he(){},
hh:function hh(){},
hj:function hj(){},
er:function er(){},
es:function es(){},
hk:function hk(){},
hl:function hl(){},
I:function I(){},
v:function v(){},
bj:function bj(){},
ho:function ho(){},
hp:function hp(){},
hB:function hB(){},
bl:function bl(){},
hG:function hG(){},
cW:function cW(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
m8:function m8(a){this.a=a},
m9:function m9(a){this.a=a},
hY:function hY(){},
ma:function ma(a){this.a=a},
mb:function mb(a){this.a=a},
bo:function bo(){},
hZ:function hZ(){},
a2:function a2(){},
eU:function eU(){},
bp:function bp(){},
ie:function ie(){},
ik:function ik(){},
nb:function nb(a){this.a=a},
nc:function nc(a){this.a=a},
im:function im(){},
bq:function bq(){},
io:function io(){},
br:function br(){},
ip:function ip(){},
bs:function bs(){},
it:function it(){},
np:function np(a){this.a=a},
nq:function nq(a){this.a=a},
b4:function b4(){},
f6:function f6(){},
bt:function bt(){},
b5:function b5(){},
iD:function iD(){},
iE:function iE(){},
iG:function iG(){},
bu:function bu(){},
iI:function iI(){},
iJ:function iJ(){},
iR:function iR(){},
iT:function iT(){},
j2:function j2(){},
fc:function fc(){},
jf:function jf(){},
fo:function fo(){},
jD:function jD(){},
jL:function jL(){},
P:function P(){},
ex:function ex(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
j3:function j3(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
ja:function ja(){},
jb:function jb(){},
jg:function jg(){},
jh:function jh(){},
jn:function jn(){},
jo:function jo(){},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
js:function js(){},
jv:function jv(){},
jw:function jw(){},
jy:function jy(){},
fu:function fu(){},
fv:function fv(){},
jB:function jB(){},
jC:function jC(){},
jE:function jE(){},
jM:function jM(){},
jN:function jN(){},
fy:function fy(){},
fz:function fz(){},
jP:function jP(){},
jQ:function jQ(){},
jU:function jU(){},
jV:function jV(){},
jW:function jW(){},
jX:function jX(){},
jY:function jY(){},
jZ:function jZ(){},
k_:function k_(){},
k0:function k0(){},
k1:function k1(){},
k2:function k2(){},
mw:function mw(a){this.a=a},
oM(a){var s
if(typeof a=="function")throw A.l(A.c0("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.ww,a)
s[$.qw()]=a
return s},
ww(a,b,c){t.Z.a(a)
if(A.b_(c)>=1)return a.$1(b)
return a.$0()},
xY(a,b){var s=new A.an($.ag,b.h("an<0>")),r=new A.co(s,b.h("co<0>"))
a.then(A.ec(new A.pE(r,b),1),A.ec(new A.pF(r),1))
return s},
t5(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
tk(a){if(A.t5(a))return a
return new A.pp(new A.fj(t.hg)).$1(a)},
pE:function pE(a,b){this.a=a
this.b=b},
pF:function pF(a){this.a=a},
pp:function pp(a){this.a=a},
by:function by(){},
hR:function hR(){},
bB:function bB(){},
i8:function i8(){},
ig:function ig(){},
iv:function iv(){},
bD:function bD(){},
iK:function iK(){},
jk:function jk(){},
jl:function jl(){},
jt:function jt(){},
ju:function ju(){},
jI:function jI(){},
jJ:function jJ(){},
jR:function jR(){},
jS:function jS(){},
fZ:function fZ(){},
h_:function h_(){},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
h0:function h0(){},
cv:function cv(){},
i9:function i9(){},
j0:function j0(){},
e_:function e_(a,b){this.a=a
this.b=b},
hu(a,b,c,d,e,f,g,h){var s=c==null?A.v_(a,f,e):c,r=Date.now()
return new A.bQ(a,f,b,h,d,s,new A.cT(r,0,!1))},
uZ(a,b,c){var s=null
if(a instanceof A.bQ)return a
return A.hu(J.r(a),s,s,b,a,s,s,c)},
v_(a,b,c){var s=a.toLowerCase()
if(B.b.H(s,"cancel"))return B.ij
if(b===408||B.b.H(s,"timeout"))return B.cb
if(b!=null)return B.b7
if(c instanceof A.bT)return B.ik
if(B.b.H(s,"network"))return B.cc
return B.ii},
r1(a,b,c,d,e,f,g,h,i){var s=B.aJ.H(0,e)
B.aJ.H(0,e)
if(!B.aJ.H(0,e))A.hu("HTTP "+e,a,B.b7,d,null,e,null,h)
Date.now()
return new A.c4(e,a,g,c,s,f,i.h("c4<0>"))},
cy:function cy(a,b){this.a=a
this.b=b},
eA:function eA(a,b){this.a=a
this.b=b},
nn:function nn(){},
bQ:function bQ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
c4:function c4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.Q=f
_.$ti=g},
l1:function l1(a,b,c,d,e,f,g,h,i,j){var _=this
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
l3:function l3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
l4:function l4(a,b,c){this.a=a
this.b=b
this.c=c},
l5:function l5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l2:function l2(){},
li:function li(a,b,c,d,e,f,g,h,i,j){var _=this
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
ll:function ll(a){this.a=a},
lm:function lm(a){this.a=a},
ln:function ln(a){this.a=a},
lo:function lo(a){this.a=a},
lp:function lp(){},
lj:function lj(a){this.a=a},
lk:function lk(a){this.a=a},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
kv:function kv(){},
ry(a){var s,r,q,p,o=null,n=A.aR(A.y(v.G.document).activeElement)
if(n==null||!A.e7(a.contains(n)))return o
s=A.U(n.value)
r=A.U(n.id).length===0?o:A.U(n.id)
q=A.U(n.name).length===0?o:A.U(n.name)
p=A.U(n.type).length===0?o:A.U(n.type)
return new A.nX("input",s,r,q,p,A.vI(a,n),A.qh(n.selectionStart),A.qh(n.selectionEnd))},
vI(a,b){var s,r,q,p,o,n,m=A.e([],t.t),l=m.$flags|0,k=b
for(;;){s=J.bg(k)
r=s.O(k,a)
if(!!r)break
q=A.aR(k.parentNode)
if(q==null)return null
p=A.y(q.childNodes)
n=0
for(;;){if(!(n<A.b_(p.length))){o=-1
break}if(J.a9(A.aR(p.item(n)),k)){o=n
break}++n}if(o===-1)return null
l&1&&A.bv(m,"insert",2)
m.splice(0,0,o)
k=q}if(!s.O(k,a))return null
return m},
l6:function l6(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=!1},
lf:function lf(a){this.a=a},
la:function la(a,b){this.a=a
this.b=b},
le:function le(a,b){this.a=a
this.b=b},
lc:function lc(a,b){this.a=a
this.b=b},
ld:function ld(a,b){this.a=a
this.b=b},
l7:function l7(a,b){this.a=a
this.b=b},
l8:function l8(){},
l9:function l9(){},
lb:function lb(a){this.a=a},
fb:function fb(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=!1},
nX:function nX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wv(){var s,r,q=A.y(A.y(v.G.window).location),p=A.U(q.origin)
if(p.length!==0)return p
s=A.U(q.protocol)
r=A.U(q.host)
if(s.length!==0&&r.length!==0)return s+"//"+r
return"http://localhost"},
kU:function kU(a){this.a=a},
Y:function Y(){},
ir:function ir(){},
i(a,b,c,d,e){var s,r,q,p,o,n,m,l="className",k=null,j="style",i=a.j(0,l),h=i==null?k:J.r(i),g=a.j(0,j)
i=c==null
s=i?k:c.a7()
if(s==null)s=B.a
A:{if(t.L.b(g)){r=g
break A}if(typeof g=="string"){r=A.ai(["_cssText",g],t.N,t.X)
break A}r=B.a
break A}q=A.tr(d,B.a,s,e,r)
r=t.N
s=t.X
p=A.b9(a,r,s)
p.T(0,j)
if(i)o=k
else o=c.az!=null||c.aA!=null||c.aB!=null||c.aC!=null||c.bE!=null||c.bF!=null||c.bG!=null||c.bH!=null||c.bI!=null||c.bJ!=null||c.bK!=null
if(o===!0){c.toString
n="flint-s-"+B.t.iw(A.xg(A.xb(c)),36)}else n=k
m=A.xS(A.e([h,b,n],t.d4))
s=A.b9(p,r,s)
if(m.length!==0)s.i(0,l,m)
if(n!=null){c.toString
s.i(0,"_flintStyleCss",A.xa(n,c))}if(q.a!==0){if(typeof g=="string"){i=i?k:c.a7()
i=new A.aA(A.e([A.pJ(A.tr(d,B.a,i==null?B.a:i,e,B.a)),g],t.s),t.bB.a(new A.pD()),t.cc).J(0,"; ")}else i=q
s.i(0,j,i)}return s},
tr(a,b,c,d,e){var s,r,q,p,o,n=A.Z(t.N,t.X)
for(s=[a,b,c,d,e],r=0;r<5;++r)for(q=J.eh(s[r]),q=q.gv(q);q.m();){p=q.gp(q)
o=p.b
if(o!=null&&p.a!=="_cssText")n.i(0,p.a,o)}return n},
j(a,b){var s,r,q=[]
if(a!=null)q.push(a)
B.f.S(q,b)
s=A.au(q)
r=s.h("ad<1,J>")
q=A.aw(new A.ad(q,s.h("J(1)").a(A.pj()),r),r.h("as.E"))
q.$flags=1
return q},
y7(a){var s
if(a instanceof A.J)return a
if(a instanceof A.Y)return new A.dA(a)
if(t.U.b(a))return new A.ey(J.k9(a,A.pj(),t.f0).bO(0,!1))
s=a==null?null:J.r(a)
return new A.cz(s==null?"":s)},
xS(a){var s=A.au(a)
return new A.aP(new A.aA(a,s.h("ab(1)").a(new A.pA()),s.h("aA<1>")),s.h("h(1)").a(new A.pB()),s.h("aP<1,h>")).J(0," ")},
pJ(a){var s=A.N(a).h("af<1,2>")
return new A.aP(new A.aA(new A.af(a,s),s.h("ab(o.E)").a(new A.pK()),s.h("aA<o.E>")),s.h("h(o.E)").a(new A.pL()),s.h("aP<o.E,h>")).J(0,"; ")},
xa(a,b){var s,r,q,p,o,n=A.e([],t.s)
for(s=b.gcZ(),s=new A.af(s,A.N(s).h("af<1,2>")).gv(0),r="."+a;s.m();){q=s.d
p=A.ql(q.b.a7())
if(p.length===0)continue
B.f.u(n,r+q.a+" { "+p+"; }")}for(s=b.gew(),s=new A.af(s,A.N(s).h("af<1,2>")).gv(0);s.m();){q=s.d
p=A.ql(q.b.a7())
if(p.length===0)continue
o=q.a.c
B.f.u(n,'[data-theme="'+o+'"] .'+a+", ."+a+'[data-theme="'+o+'"] { '+p+"; }")}for(s=b.gea(),s=new A.af(s,A.N(s).h("af<1,2>")).gv(0);s.m();){q=s.d
p=A.ql(q.b.a7())
if(p.length===0)continue
B.f.u(n,"@media (min-width: "+q.a.c+"px) { ."+a+" { "+p+"; } }")}return B.f.J(n,"\n")},
xb(a){var s,r=a.gcZ(),q=A.N(r).h("af<1,2>"),p=t.N
r=A.aw(A.bn(new A.af(r,q),q.h("h(o.E)").a(new A.oQ()),q.h("o.E"),p),p)
q=a.gew()
s=A.N(q).h("af<1,2>")
B.f.S(r,A.bn(new A.af(q,s),s.h("h(o.E)").a(new A.oR()),s.h("o.E"),p))
s=a.gea()
q=A.N(s).h("af<1,2>")
B.f.S(r,A.bn(new A.af(s,q),q.h("h(o.E)").a(new A.oS()),q.h("o.E"),p))
return B.f.J(r,"|")},
ql(a){var s=A.N(a).h("af<1,2>")
return new A.aP(new A.aA(new A.af(a,s),s.h("ab(o.E)").a(new A.oT()),s.h("aA<o.E>")),s.h("h(o.E)").a(new A.oU()),s.h("aP<o.E,h>")).J(0,"; ")},
xg(a){var s,r,q,p
for(s=new A.dt(a),r=t.e8,s=new A.bz(s,s.gk(0),r.h("bz<A.E>")),r=r.h("A.E"),q=2166136261;s.m();){p=s.d
q=((q^(p==null?r.a(p):p))>>>0)*16777619>>>0}return q},
pD:function pD(){},
pA:function pA(){},
pB:function pB(){},
pK:function pK(){},
pL:function pL(){},
oQ:function oQ(){},
oR:function oR(){},
oS:function oS(){},
oT:function oT(){},
oU:function oU(){},
my:function my(a){this.a=a},
h4:function h4(){},
J:function J(){},
cz:function cz(a){this.a=a},
ey:function ey(a){this.a=a},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a){this.a=a},
nK:function nK(a,b){this.a=a
this.b=b},
nL:function nL(){},
nN:function nN(a){this.a=a},
nO:function nO(a,b){this.a=a
this.b=b},
nM:function nM(a,b){this.a=a
this.b=b},
r0(a){var s,r,q=J.al(a),p=q.j(a,"component")
p=p==null?null:J.r(p)
if(p==null)p=""
s=A.ws(q.j(a,"props"))
r=q.j(a,"url")
if(r!=null)J.r(r)
q=q.j(a,"version")
if(q!=null)J.r(q)
return new A.ez(p,s)},
xA(a,b,c){var s,r,q,p,o,n,m,l,k,j=null,i="from",h="to",g={},f=v.G,e=A.aR(A.y(f.document).querySelector(a))
if(e==null)throw A.l(A.ak('No element found for selector "'+a+'".'))
s=A.wK(c,j,j)
r=s!=null
if(r&&A.bF(e.getAttribute("data-theme"))==null)e.setAttribute("data-theme",s.c)
if(r){r=$.pO()
r.b=B.an
r.c="flint.theme.mode"
r.d=e
q=r.a
p=r.hu()
if(p==null)p=r.hD()
if(p==null)p=s
q.a=q.$ti.c.a(p)
q.bM()
r.d8(q.a)}r=t.cB
A.qr(A.rj(j,j,j,A.e([new A.cj("flint-spin",A.e([new A.aN(i,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.ba("rotate("+A.E(0,!1)+")"),j,j,j,j,j,j,j,j)),new A.aN(h,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.ba("rotate("+A.E("360deg",!1)+")"),j,j,j,j,j,j,j,j))],r)),new A.cj("flint-fade-in",A.e([new A.aN(i,B.fD),new A.aN(h,B.eE)],r)),new A.cj("flint-slide-up",A.e([new A.aN(i,B.fH),new A.aN(h,B.bB)],r)),new A.cj("flint-slide-down",A.e([new A.aN(i,B.fS),new A.aN(h,B.bB)],r)),new A.cj("flint-scale-in",A.e([new A.aN(i,B.fZ),new A.aN(h,B.fT)],r))],t.o),j,"flint-animations",j,j))
o=A.wo(j,j,j)
if(o!=null)A.qr(o)
A.qr(c)
for(n=0;!1;++n)A.xZ(B.jq[n])
m=A.bF(e.getAttribute("data-flint-page"))
if(m==null||B.b.D(m).length===0)A.ca(A.ak("Missing data-flint-page payload on Flint app root."))
l=B.E.aV(0,m,j)
if(!t.P.b(l))A.ca(A.ak("Invalid Flint page payload."))
k=A.r0(l)
g.a=0
r=new A.po(g,e,B.jr,b,j,j,j,new A.l6(e,A.Z(t.N,t.e)))
q=new A.pn(g,a,e,r)
r.$2(k,0)
A.y(f.window).addEventListener("flint:navigate",A.oM(new A.pl(q)))
A.y(f.window).addEventListener("popstate",A.oM(new A.pm(q)))},
wo(a,b,c){return null},
wK(a,b,c){var s=a.c
s=s==null?null:s.c
return s},
ws(a){if(t.P.b(a))return a
if(t.f.b(a))return J.cL(a,new A.oG(),t.N,t.z)
return B.Z},
wD(a){var s,r=v.G,q=A.U(A.y(A.y(r.window).location).pathname),p=A.U(A.y(A.y(r.window).location).search),o=A.y(new r.XMLHttpRequest())
r=new A.an($.ag,t.bJ)
s=new A.co(r,t.cp)
o.open("GET",q+p,!0)
o.setRequestHeader("Accept","text/html")
p=t.an
q=t.m
A.cF(o,"load",p.a(new A.oK(o,s,a)),!1,q)
A.cF(o,"error",p.a(new A.oL(s)),!1,q)
o.send()
return r},
xl(a){var s,r,q,p=A.bX("<title[^>]*>(.*?)</title>",!1,!0).i2(a)
if(p==null)return null
s=p.b
if(1>=s.length)return A.t(s,1)
r=s[1]
if(r==null)r=""
q=A.y(A.y(v.G.document).createElement("textarea"))
q.innerHTML=r
s=A.bF(q.textContent)
return B.b.D(s==null?r:s)},
ez:function ez(a,b){this.a=a
this.b=b},
hv:function hv(){},
po:function po(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pn:function pn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pl:function pl(a){this.a=a},
pm:function pm(a){this.a=a},
oG:function oG(){},
oK:function oK(a,b,c){this.a=a
this.b=b
this.c=c},
oL:function oL(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
vs(a,b){return new A.dV(a,A.dK(b.h("~(0)")),b.h("dV<0>"))},
dV:function dV(a,b,c){this.a=a
this.b=b
this.$ti=c},
nm:function nm(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c){var _=this
_.c=a
_.d=b
_.a=_.f=_.e=null
_.$ti=c},
nl:function nl(a){this.a=a},
nk:function nk(){},
em:function em(){},
kP:function kP(){},
kW:function kW(a,b){this.a=a
this.b=b},
kX:function kX(){},
hU:function hU(){},
iU:function iU(){},
aF(a){return new A.d(a)},
c3(a,b,c,d){return new A.d("rgba("+a+", "+b+", "+c+", "+A.W(d)+")")},
a(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3){return new A.n(e0,c7,f9,b7,d3,d0,d2,c9,a1,b4,b,c1,c0,a3,a5,a8,a6,a7,a4,b6,e1,f4,e4,n,c2,g3,d6,d8,d9,o,e5,e6,d,d4,f5,e,c8,b1,b2,b3,c6,c3,q,f0,f3,f1,f2,f8,g1,d7,r,e3,f,e2,h,m,l,i,k,j,e8,d5,b5,g,f7,f6,c,g0,b8,a9,b0,a,a0,p,e7,a2,b9,c5,s,e9,d1,c4,g2)},
xd(a){return null},
x2(a){return null},
aW(a,b){var s=A.au(b)
return new A.eC("linear-gradient("+a+"deg, "+new A.ad(b,s.h("h(1)").a(A.qt()),s.h("ad<1,h>")).J(0,", ")+")")},
bm(a,b){var s=A.E(a,!1),r=A.au(b)
return new A.eC("radial-gradient("+("circle at "+s)+", "+new A.ad(b,r.h("h(1)").a(A.qt()),r.h("ad<1,h>")).J(0,", ")+")")},
aM(a){var s
if(a.length===0)throw A.l(A.ek(a,"layers","Must not be empty."))
s=A.au(a)
return new A.kw(new A.ad(a,s.h("h(1)").a(A.y5()),s.h("ad<1,h>")).J(0,", "))},
wJ(a){A.aa(a)
if(a instanceof A.L)return a.n()
return A.E(a,!1)},
wI(a){var s
if(typeof a=="number"){B.t.b7(a,1)
s=B.t.it(a)
return""+s+"%"}return A.E(a,!1)},
vB(a,b){return new A.b(a,b)},
a5(a,b){return new A.b("color."+a,b)},
pV(a){return new A.aN("from",a)},
pW(a){return new A.aN("to",a)},
eL(a,b){return new A.aN(a,b)},
iw(a,b){return new A.cj(a,b)},
rj(a,b,c,d,e,f,g,h){return new A.n9(f,g,h,c,b,a,e,d)},
qs(a){var s=A.N(a).h("af<1,2>")
return new A.aP(new A.aA(new A.af(a,s),s.h("ab(o.E)").a(new A.pG()),s.h("aA<o.E>")),s.h("h(o.E)").a(new A.pH()),s.h("aP<o.E,h>")).J(0,"; ")},
xc(a,b){if((b==null?null:B.b.D(J.r(b)).toLowerCase())!=="none")return""
return B.f.J(A.e([a+"::-webkit-scrollbar { width: 0; height: 0; display: none; }",a+"::-webkit-scrollbar-track { background: transparent; }",a+"::-webkit-scrollbar-thumb { background: transparent; }"],t.s),"\n")},
dy(a,b,c){return new A.f(c,null,a,b)},
et(a){return new A.f(a,a,a,a)},
eu(a,b){return new A.f(b,a,b,a)},
rl(a){return new A.F(""+a+"%")},
eD(a){var s
if(a.length===0)throw A.l(A.ek(a,"tracks","Must not be empty."))
s=A.au(a)
return new A.b3(new A.ad(a,s.h("h(1)").a(A.y4()),s.h("ad<1,h>")).J(0," "))},
X(a,b){A.aa(a)
A.e7(b)
if(a instanceof A.aG)return a.a
if(a instanceof A.b3)return a.a
return A.E(a,b)},
b2(a,b,c){return new A.m(c,a,b)},
uO(a,b){return new A.m(b,a,"solid")},
iy(a){return new A.ba("translate3d("+A.E(0,!1)+", "+A.E(a,!1)+", "+A.E(0,!1)+")")},
ro(a){return new A.ba("translateX("+A.E(a,!1)+")")},
ix(a){return new A.ba("rotate("+A.E(a,!1)+")")},
q0(a){var s
if(a.length===0)throw A.l(A.ek(a,"transforms","Must not be empty."))
s=A.au(a)
return new A.ba(new A.ad(a,s.h("h(1)").a(new A.nx()),s.h("ad<1,h>")).J(0," "))},
rp(a){var s=""+a
return A.vx(A.e([new A.aZ("color "+s+"ms ease"),new A.aZ("background "+s+"ms ease"),new A.aZ("border-color "+s+"ms ease")],t.fS))},
vx(a){var s
if(a.length===0)throw A.l(A.ek(a,"transitions","Must not be empty."))
s=A.au(a)
return new A.aZ(new A.ad(a,s.h("h(1)").a(new A.ny()),s.h("ad<1,h>")).J(0,", "))},
vw(a,b,c,d){var s=A.e([a,""+c+"ms",d],t.G)
s.push(A.E(b,!0))
s.push(B.d7)
s.push(B.d8)
s.push(B.da)
return new A.nt(new A.ad(s,t.f7.a(new A.nu()),t.en).J(0," "))},
E(a,b){A.e7(b)
if(a==null)return""
if(a instanceof A.b)return a.n()
if(a instanceof A.F)return a.a
if(a instanceof A.ht)return a.n()
if(a instanceof A.m)return a.n()
if(a instanceof A.aq)return a.n()
if(typeof a=="number")return b?B.Y.l(a):A.W(a)+"px"
return J.r(a)},
xo(a){var s,r,q,p=A.Z(t.N,t.X)
for(s=new A.af(a,A.N(a).h("af<1,2>")).gv(0);s.m();){r=s.d
q=r.b
if(q!=null&&!J.a9(q,""))p.i(0,r.a,q)}return p},
x8(a){var s,r=B.b.D(a),q=A.bX("[^a-zA-Z0-9_-]+",!0,!1)
r=A.cK(r,q,"-")
q=A.bX("^-+|-+$",!0,!1)
s=A.cK(r,q,"")
return s.length===0?"style":s},
d:function d(a){this.a=a},
n:function n(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3){var _=this
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
_.cE=c8
_.ed=c9
_.ee=d0
_.aX=d1
_.cF=d2
_.aY=d3
_.aZ=d4
_.b_=d5
_.cG=d6
_.hU=d7
_.cH=d8
_.hV=d9
_.ef=e0
_.b0=e1
_.b1=e2
_.hW=e3
_.cI=e4
_.cJ=e5
_.b2=e6
_.eg=e7
_.eh=e8
_.bE=e9
_.hX=f0
_.bF=f1
_.bG=f2
_.bH=f3
_.hY=f4
_.hZ=f5
_.i_=f6
_.bI=f7
_.bJ=f8
_.bK=f9
_.az=g0
_.aA=g1
_.aB=g2
_.aC=g3},
eC:function eC(a){this.a=a},
lG:function lG(){},
kw:function kw(a){this.a=a},
bx:function bx(a){this.a=a},
ht:function ht(){},
L:function L(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.c=a
this.a=b
this.b=c},
iF:function iF(a){this.a=a},
bR:function bR(a,b,c){this.c=a
this.a=b
this.b=c},
b:function b(a,b){this.a=a
this.b=b},
hw:function hw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lh:function lh(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b){this.a=a
this.b=b},
cj:function cj(a,b){this.a=a
this.b=b},
nv:function nv(){},
nw:function nw(){},
n9:function n9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.y=h},
na:function na(){},
pG:function pG(){},
pH:function pH(){},
f:function f(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l_:function l_(a){this.a=a},
F:function F(a){this.a=a},
aG:function aG(a){this.a=a},
b3:function b3(a){this.a=a},
m:function m(a,b,c){this.a=a
this.b=b
this.c=c},
aq:function aq(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ba:function ba(a){this.a=a},
nx:function nx(){},
d0:function d0(a){this.a=a},
hx:function hx(a){this.a=a},
kO:function kO(){},
nd:function nd(){},
hf:function hf(a){this.a=a},
ib:function ib(a){this.a=a},
nI:function nI(){},
kx:function kx(){},
l0:function l0(){},
n8:function n8(){},
iL:function iL(a){this.a=a},
aZ:function aZ(a){this.a=a},
ny:function ny(){},
ka:function ka(){},
kb:function kb(){},
kd:function kd(){},
kc:function kc(){},
nt:function nt(a){this.a=a},
nu:function nu(){},
nW:function nW(){},
cx:function cx(a,b,c){this.c=a
this.a=b
this.b=c},
hs:function hs(a,b,c){this.c=a
this.a=b
this.b=c},
cM:function cM(a,b,c){this.c=a
this.a=b
this.b=c},
dJ:function dJ(a,b,c){this.c=a
this.a=b
this.b=c},
dP:function dP(a,b,c){this.c=a
this.a=b
this.b=c},
nG:function nG(a,b){this.a=a
this.b=b},
ay(a,b,c,d,e,f,g,h,i,j){var s,r=t.N,q=t.X,p=A.b9(g,r,q),o=g.j(0,"type")
p.i(0,"type",o==null?"button":o)
o=!d
if(!o||e)p.i(0,"disabled",!0)
if(e)p.i(0,"aria-busy","true")
if(f!=null&&o&&!e)p.i(0,"onClick",f)
p=A.i(p,null,A.th(d,e,h,i,j).Y(c),B.a,B.a)
o=A.e([],t.Y)
if(e){s=A.b9(B.a,r,q)
s.i(0,"role","status")
s.i(0,"aria-label","Loading")
r=A.i(s,null,null,A.ai(["display","inline-block","width",A.tw(B.bz),"height",A.tw(B.bz),"border","2px solid "+A.k3(i),"border-top-color",A.qu(i),"border-radius","999px","animation",A.E(A.vw("flint-spin",B.d9,800,B.mb),!1),"will-change",A.E(B.dr,!1),"flex-shrink",0],r,q),B.a)
o.push(new A.iq("span",r,B.ag))}B.f.S(o,A.j(a,b))
return new A.dp("button",p,o)},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
cf(a,b,c,d){return new A.eF(b,c,a,d)},
eF:function eF(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=null
_.f=c
_.r=null
_.w=d
_.x=!0
_.y=$
_.a=null},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
hA(a){var s=t.N,r=A.e([],t.r),q=t.X
return new A.lq(A.pY(a,s,q),A.pY(a,s,q),A.Z(s,t.bO),r,B.B)},
cl:function cl(a,b){this.a=a
this.b=b},
lq:function lq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ls:function ls(a,b){this.a=a
this.b=b},
lr:function lr(a,b,c){this.a=a
this.b=b
this.c=c},
eB(a,b,c){var s=A.b9(B.a,t.N,t.X)
if(c!=null)s.i(0,"onSubmit",c)
return new A.hz("form",A.i(s,null,b,B.jJ,B.a),A.j(null,a))},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
f5(a,b,c,d,e,f,g,h){var s,r=null,q="textarea",p=A.i(B.a,r,r,B.cs,B.a),o=a.a,n=A.tv(r,b,d),m=A.vy(a,r),l=A.tm(q,d,B.a),k=A.tl(r,n,r,l),j=A.e([],t.Y)
j.push(A.tn(l,c,!0))
s=A.b9(A.tj(k,!1,n,l,d,B.a,!0),t.N,t.X)
s.i(0,"rows",g)
if(o!=null)s.i(0,"value",o)
s.i(0,"placeholder",e)
if(m!=null)s.i(0,"onInput",m)
j.push(new A.a7(q,A.i(s,r,A.tq(!1,n!=null&&n.length!==0,B.x,B.cm).Y(B.eP).Y(h),B.a,B.a),B.ag))
B.f.S(j,A.to(n,r,l))
return new A.iB("div",p,j)},
vy(a,b){return new A.nH(a,b)},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function nH(a,b){this.a=a
this.b=b},
bZ(a,b,c,d,e,f,g,h){var s=null,r=A.i(B.a,s,s,B.cs,B.a),q=a.a
return new A.iC("div",r,A.vz(!1,A.tv(s,b,e),s,c,B.a,B.a,d,e,A.vA(a,s),s,f,!1,g,B.x,h,q,B.cm))},
vA(a,b){return new A.nJ(a,b)},
vz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2){var s,r,q,p,o=A.tm("field",h,e)
e.j(0,"aria-describedby")
s=A.tl(null,b,c,o)
r=A.e([],t.Y)
r.push(A.tn(o,g,m))
q=A.b9(A.tj(s,!1,b,o,h,e,m),t.N,t.X)
q.i(0,"type",a0)
if(a1!=null)q.i(0,"value",a1)
q.i(0,"placeholder",k)
if(i!=null)q.i(0,"onInput",i)
p=A.tq(!1,b!=null&&b.length!==0,n,a2)
r.push(new A.a7("input",A.i(q,null,p.Y(null).Y(d),B.a,f),B.ag))
B.f.S(r,A.to(b,c,o))
return r},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
nJ:function nJ(a,b){this.a=a
this.b=b},
cd(a){var s,r,q,p,o
if(a==null)return B.B
if(t.V.b(a)){s=A.Z(t.N,t.a)
for(r=J.eh(a),r=r.gv(r),q=t.s;r.m();){p=r.gp(r)
s.i(0,p.a,A.e([p.b],q))}return new A.bS(s)}o=A.wC(a)
s=A.Z(t.N,t.a)
for(r=J.eh(o),r=r.gv(r);r.m();){q=r.gp(r)
s.i(0,J.r(q.a),A.x3(q.b))}return new A.bS(s)},
tv(a,b,c){var s,r
if(b==null)s=null
else{r=b.i0(c)
s=r.length===0?null:B.f.gF(r)}return s},
wC(a){var s=J.M(a,"errors")
if(t.f.b(s))return s
return a},
x3(a){var s,r,q
if(a==null)return B.aH
if(typeof a=="string")return A.e([a],t.s)
if(t.U.b(a)){s=A.e([],t.s)
for(r=J.b1(a);r.m();){q=r.gp(r)
if(q!=null&&J.r(q).length!==0)s.push(J.r(q))}return s}return A.e([J.r(a)],t.s)},
bS:function bS(a){this.a=a},
lt:function lt(a){this.a=a},
a8(a,b){return new A.lY(a,b)},
r3(a,b){return new A.bJ(a,b)},
H(a,b,c){var s,r,q="currentColor",p=t.N,o=t.X,n=A.b9(B.a,p,o)
n.i(0,"xmlns","http://www.w3.org/2000/svg")
n.i(0,"viewBox","0 0 24 24")
n.i(0,"fill","none")
n.i(0,"stroke",q)
n.i(0,"stroke-width",2)
n.i(0,"stroke-linecap","round")
n.i(0,"stroke-linejoin","round")
n.i(0,"focusable","false")
n.i(0,"aria-hidden","true")
s=A.t_(c)
r=A.t_(c)
p=A.i(n,null,null,A.ai(["display","inline-block","width",s,"height",r,"color",b==null?q:b,"vertical-align","middle","flex-shrink",0],p,o),B.a)
o=A.e([],t.Y)
n=a.c
s=A.au(n)
B.f.S(o,new A.ad(n,s.h("J(1)").a(new A.lZ()),s.h("ad<1,J>")))
return new A.hH("svg",p,o)},
t_(a){return""+a+"px"},
a0(a){return new A.bJ("path",A.ai(["d",a],t.N,t.X))},
c9(a){return new A.bJ("polyline",A.ai(["points",a],t.N,t.X))},
aJ(a,b,c,d){return new A.bJ("line",A.ai(["x1",a,"y1",b,"x2",c,"y2",d],t.N,t.X))},
c8(a,b,c){return new A.bJ("circle",A.ai(["cx",a,"cy",b,"r",c],t.N,t.X))},
fN(a,b,c,d,e){var s=A.Z(t.N,t.X)
s.i(0,"x",a)
s.i(0,"y",b)
s.i(0,"width",c)
s.i(0,"height",d)
if(e!=null)s.i(0,"rx",e)
return new A.bJ("rect",s)},
lY:function lY(a,b){this.a=a
this.c=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
lZ:function lZ(){},
hD(a,b,c){var s=null,r=A.Z(t.N,t.X)
r.i(0,"display","grid")
r.i(0,"grid-template-columns",A.wy(b))
r.i(0,"gap",A.E(c,!1))
return new A.hC("div",A.i(B.a,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s).Y(s),r,B.a),A.j(s,a))},
wy(a){return A.E(a,!1)},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
q5(a,b,c){var s=A.Z(t.N,t.X)
s.i(0,"display","flex")
s.i(0,"flex-wrap",A.E(B.i,!0))
s.i(0,"gap",A.E(c,!1))
return new A.iW("div",A.i(B.a,null,b,s,B.a),A.j(null,a))},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
bi(a,b){var s=null,r=b.x
if(r===B.e)r=B.c
else if(r==null)r=B.c
return new A.h8("div",A.i(B.a,s,A.a(s,b.z,s,s,b.p3,b.aY,s,b.b_,s,s,s,s,s,b.fr,s,s,b.x1,b.aX,s,s,r,s,s,s,B.y,s,s,b.ay,s,s,s,b.RG,b.rx,b.y,s,s,b.d,s,s,b.as,s,b.fx,s,b.aB,s,s,b.b,s,b.w,b.f,b.aA,b.r,b.e,s,b.b1,b.go,s,s,s,b.a,b.db,b.aZ,s,b.dy,s,s,s,b.b0,b.az,b.x2,s,s,s,b.dx,b.p2,b.b2,s,s,b.c,s,s,b.aC,b.fy),B.jN,B.a),A.j(s,a))},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
V(a,b,c,d,e,f,g){var s=A.b9(B.a,t.N,t.X)
s.i(0,"href",d)
if(e!=null)s.i(0,"target",e)
return new A.hS("a",A.i(s,null,g==null?c:A.th(!1,!1,B.x,f,g).Y(c),B.a,B.a),A.j(a,b))},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
w(a,b){var s=null,r=b.x
if(r===B.e)r=B.c
else if(r==null)r=B.c
return new A.ij("div",A.i(B.a,s,A.a(s,b.z,s,s,b.p3,b.aY,s,b.b_,s,s,s,s,s,b.fr,s,s,b.x1,b.aX,s,s,r,s,s,s,B.X,s,s,b.ay,s,s,s,b.RG,b.rx,b.y,s,s,b.d,s,s,b.as,s,b.fx,s,b.aB,s,s,b.b,s,s,b.f,b.aA,b.r,b.e,s,b.b1,b.go,s,s,s,b.a,b.db,b.aZ,s,b.dy,s,s,s,b.b0,b.az,b.x2,s,s,s,b.dx,b.p2,b.b2,s,s,b.c,s,s,b.aC,b.fy),B.jM,B.a),A.j(s,a))},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
th(a,b,c,d,e){var s,r=null,q=$.uG().Y(A.xv(c)).Y(A.xw(e,d))
if(a||b)s=B.fF
else{s=A.xu(e,d)
s=A.a(A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ba("scale(0.98)"),r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.aq(0,0,3,A.ya(d)),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}return q.Y(s)},
xv(a){var s
switch(a.a){case 0:s=B.fO
break
case 1:s=B.fa
break
case 2:s=B.fo
break
case 3:s=B.eW
break
default:s=null}return s},
xw(a,b){var s,r=null,q="solid"
switch(a.a){case 0:s=A.a(r,r,r,r,r,A.qu(b),r,new A.m(1,A.qu(b),q),r,r,r,r,r,r,r,r,A.yb(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 1:s=A.a(r,r,r,r,r,A.k3(b),r,new A.m(1,A.k3(b),q),r,r,r,r,r,r,r,r,A.qv(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 2:s=A.a(r,r,r,r,r,B.v,r,new A.m(1,A.y9(b),q),r,r,r,r,r,r,r,r,A.qv(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 3:s=A.a(r,r,r,r,r,B.v,r,B.bc,r,r,r,r,r,r,r,r,A.qv(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
default:s=r}return s},
xu(a,b){var s,r=null
switch(a.a){case 0:s=A.a(r,r,r,r,r,A.tA(b),r,new A.m(1,A.tA(b),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 1:s=A.a(r,r,r,r,r,A.tz(b),r,new A.m(1,A.tz(b),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 2:s=A.a(r,r,r,r,r,A.k3(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 3:s=A.a(r,r,r,r,r,A.k3(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
default:s=r}return s},
tq(a,b,c,d){var s=null,r="solid",q="#d92d20",p="color.dangerSolid",o=new A.b("color.inputBorder","#d0d5dd").n(),n=new A.b("radius.md","8px").n(),m=new A.b("color.inputText","#101828").n(),l=new A.b("color.inputSurface","#ffffff").n(),k=A.rp(120),j=A.a(s,s,s,s,s,s,s,new A.m(1,new A.b("color.primarySolid","#155eef").n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aq(0,0,3,new A.b("color.primaryFocus","#155eef").n()),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),i=A.a(s,s,s,s,s,s,s,new A.m(1,new A.b(p,q).n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aq(0,0,3,new A.b("color.dangerFocus",q).n()),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),h=A.a(s,s,s,s,s,l,s,new A.m(1,o,r),s,s,s,s,s,s,s,s,m,s,s,A.a(s,s,s,s,s,new A.b("color.disabledSurface","#f3f4f6").n(),s,s,s,s,s,s,s,s,s,s,new A.b("color.disabledText","#98a2b3").n(),B.bA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s,j,B.ce,s,s,s,s,s,s,s,i,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,n,s,s,s,s,s,s,s,s,s,s,s,s,s,k,s,s,B.p,s,s,s,s).Y(A.xO(c))
switch(d.a){case 0:o=B.eF
break
case 1:o=A.a(s,s,s,s,s,new A.b("color.inputSoft","#f9fafb").n(),s,new A.m(1,B.v,r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
break
case 2:o=A.a(s,s,s,s,s,B.v,s,B.bc,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
break
default:o=s}o=h.Y(o)
o=o.Y(s)
return o.Y(b?A.a(s,s,s,s,s,s,s,new A.m(1,new A.b(p,q).n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s):s)},
xO(a){var s
switch(a.a){case 0:s=B.ft
break
case 1:s=B.fC
break
case 2:s=B.f8
break
case 3:s=B.fG
break
default:s=null}return s},
tw(a){var s
switch(a.a){case 0:s="14px"
break
case 1:s="16px"
break
case 2:s="20px"
break
case 3:s="24px"
break
default:s=null}return s},
qu(a){var s
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
tA(a){var s
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
k3(a){var s
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
tz(a){var s
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
y9(a){var s
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
qv(a){var s
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
yb(a){var s
A:{if(B.m9===a){s=new A.b("color.warningOnSolid","#111827").n()
break A}s=new A.b("color.onSolid","#ffffff").n()
break A}return s},
ya(a){var s
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
dW:function dW(a,b){this.a=a
this.b=b},
eo:function eo(a,b){this.a=a
this.b=b},
dq:function dq(a,b){this.a=a
this.b=b},
m_:function m_(a,b){this.a=a
this.b=b},
xk(a){var s
A:{if("light"===a){s=B.af
break A}if("dark"===a){s=B.U
break A}s=null
break A}return s},
lg:function lg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
oZ:function oZ(){},
p_:function p_(){},
p0:function p0(){},
pb:function pb(){},
pc:function pc(){},
pd:function pd(){},
pe:function pe(){},
pf:function pf(){},
pg:function pg(){},
ph:function ph(){},
pi:function pi(){},
p1:function p1(){},
p2:function p2(){},
p3:function p3(){},
p4:function p4(){},
p5:function p5(){},
p6:function p6(){},
p7:function p7(){},
p8:function p8(){},
p9:function p9(){},
pa:function pa(){},
xq(a){var s=A.v6(new A.aA(B.co,t.dt.a(new A.oW(a)),t.bv),t.bl)
if(s!=null)return s.b
return new A.aP(new A.aA(A.e(a.split("-"),t.s),t.bB.a(new A.oX()),t.cc),t.dG.a(new A.oY()),t.bZ).J(0," ")},
ej:function ej(a,b){this.c=a
this.d=b
this.a=null},
oW:function oW(a){this.a=a},
oX:function oX(){},
oY:function oY(){},
hE:function hE(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.a=null},
r2(a,b){var s=A.Z(t.N,t.y)
if(B.f.H(B.jA,a))s.i(0,"routing",!0)
if(B.f.H(B.jx,a))s.i(0,"middleware",!0)
if(B.f.H(B.jn,a))s.i(0,"auth",!0)
if(B.f.H(B.jd,a))s.i(0,"models",!0)
return new A.hF(a,b,s)},
hF:function hF(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
lL:function lL(a){this.a=a},
lM:function lM(a,b,c){this.a=a
this.b=b
this.c=c},
lK:function lK(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(){this.a=null},
kQ:function kQ(a){this.a=a},
hg:function hg(){this.a=null},
hq:function hq(){this.a=null},
ot(a,b,c,d,e,f,g,h,i){return new A.jA(i,g,c,d,e,a,h,b,f)},
S(a){return new A.fa(a)},
q(a,b,c){return new A.jO(a,b,c)},
eE:function eE(){var _=this
_.c=0
_.d="linux"
_.f=_.e=!1
_.a=null},
lX:function lX(a,b){this.a=a
this.b=b},
lR:function lR(a){this.a=a},
lS:function lS(a){this.a=a},
lQ:function lQ(a){this.a=a},
lO:function lO(a){this.a=a},
lP:function lP(a){this.a=a},
lN:function lN(a){this.a=a},
lT:function lT(a,b){this.a=a
this.b=b},
lU:function lU(a,b){this.a=a
this.b=b},
lW:function lW(a,b){this.a=a
this.b=b},
lV:function lV(a,b){this.a=a
this.b=b},
jA:function jA(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
fa:function fa(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){this.a=null},
iM:function iM(){this.a=null},
iV:function iV(){this.a=null},
dj:function dj(a){this.c=a
this.a=null},
dk:function dk(a){this.c=a
this.a=null},
cO:function cO(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kf:function kf(a){this.a=a},
kg:function kg(a,b){this.a=a
this.b=b},
kh:function kh(a,b,c){this.a=a
this.b=b
this.c=c},
ki:function ki(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(a){this.a=a},
ke:function ke(){},
dl:function dl(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kA:function kA(){},
kz:function kz(a,b){this.a=a
this.b=b},
kC:function kC(a){this.a=a},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(a){this.a=a},
kB:function kB(){},
dm:function dm(a){this.c=a
this.a=null},
kH:function kH(){},
cP:function cP(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kJ:function kJ(a){this.a=a},
kK:function kK(a,b){this.a=a
this.b=b},
kL:function kL(a,b,c){this.a=a
this.b=b
this.c=c},
kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a){this.a=a},
kI:function kI(){},
dr:function dr(a){this.b=a
this.a=null},
kT:function kT(){},
ds:function ds(a){this.c=a
this.a=null},
dw:function dw(a){this.b=a
this.a=null},
dz:function dz(a){this.b=a
this.a=null},
o5(a,b,c,d,e,f,g,h,i){return new A.jc(h,e,c,i,d,a,g,b,f)},
O(a){return new A.fg(a)},
p(a,b,c){return new A.jd(a,b,c)},
dB:function dB(a){var _=this
_.c=a
_.d=0
_.f=_.e=!1
_.a=null},
ly:function ly(a){this.a=a},
lz:function lz(a){this.a=a},
lx:function lx(a){this.a=a},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
lu:function lu(a){this.a=a},
lA:function lA(a,b){this.a=a
this.b=b},
lC:function lC(a,b){this.a=a
this.b=b},
lB:function lB(a,b){this.a=a
this.b=b},
lD:function lD(a,b){this.a=a
this.b=b},
lE:function lE(a,b){this.a=a
this.b=b},
jc:function jc(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
fg:function fg(a){this.a=a},
jd:function jd(a,b,c){this.a=a
this.b=b
this.c=c},
cV:function cV(a){var _=this
_.c=a
_.d=null
_.e=!0
_.a=null},
lH:function lH(a,b){this.a=a
this.b=b},
lI:function lI(a){this.a=a},
lJ:function lJ(a){this.a=a},
dC:function dC(a){this.c=a
this.a=null},
dD:function dD(a){this.c=a
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
mV:function mV(){},
n6:function n6(a){this.a=a},
mE:function mE(a,b){this.a=a
this.b=b},
mF:function mF(a,b){this.a=a
this.b=b},
n0:function n0(a){this.a=a},
n1:function n1(a,b){this.a=a
this.b=b},
n2:function n2(a){this.a=a},
n3:function n3(a,b,c){this.a=a
this.b=b
this.c=c},
n4:function n4(a,b,c){this.a=a
this.b=b
this.c=c},
n5:function n5(a){this.a=a},
mU:function mU(){},
n_:function n_(a){this.a=a},
mL:function mL(a){this.a=a},
mK:function mK(a){this.a=a},
mM:function mM(a){this.a=a},
mJ:function mJ(a){this.a=a},
mN:function mN(a){this.a=a},
mO:function mO(a){this.a=a},
mP:function mP(a){this.a=a},
mI:function mI(a){this.a=a},
mQ:function mQ(a){this.a=a},
mH:function mH(a){this.a=a},
mR:function mR(a){this.a=a},
mG:function mG(a){this.a=a},
mW:function mW(){},
mC:function mC(a){this.a=a},
mD:function mD(a,b){this.a=a
this.b=b},
mS:function mS(a,b){this.a=a
this.b=b},
mT:function mT(a,b){this.a=a
this.b=b},
mY:function mY(a){this.a=a},
mZ:function mZ(a,b){this.a=a
this.b=b},
mX:function mX(a){this.a=a},
dQ:function dQ(a){this.c=a
this.a=null},
n7:function n7(){},
dT:function dT(a){this.c=a
this.a=null},
nf:function nf(){},
ng:function ng(){},
dU:function dU(a){this.c=a
this.a=null},
nj:function nj(){},
nh:function nh(){},
ni:function ni(){},
d1:function d1(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
nA:function nA(a){this.a=a},
nB:function nB(a,b){this.a=a
this.b=b},
nC:function nC(a,b,c){this.a=a
this.b=b
this.c=c},
nD:function nD(a,b,c){this.a=a
this.b=b
this.c=c},
nE:function nE(a){this.a=a},
nz:function nz(){},
dX:function dX(a){this.c=a
this.a=null},
e0:function e0(a){this.c=a
this.a=null},
h2(a,b,c,d,e){var s=t.r
return new A.h1(e,c,a,b,d,new A.cl("",A.e([],s)),new A.cl("",A.e([],s)),new A.cl("",A.e([],s)))},
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
ks:function ks(a){this.a=a},
kr:function kr(a){this.a=a},
kt:function kt(a){this.a=a},
kq:function kq(a){this.a=a},
ku:function ku(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(a){this.a=a},
hr:function hr(a){this.b=a
this.a=null},
hy:function hy(){this.a=null},
i7:function i7(a){var _=this
_.b=a
_.e=_.d=_.c=!1
_.a=null},
mn:function mn(a){this.a=a},
mm:function mm(a){this.a=a},
mh:function mh(a){this.a=a},
mg:function mg(a){this.a=a},
mp:function mp(a){this.a=a},
mo:function mo(a){this.a=a},
mv:function mv(a){this.a=a},
mu:function mu(){},
ms:function ms(a){this.a=a},
mr:function mr(a){this.a=a},
mt:function mt(a){this.a=a},
mq:function mq(a){this.a=a},
mk:function mk(a){this.a=a},
mj:function mj(a){this.a=a},
ml:function ml(a){this.a=a},
mi:function mi(a){this.a=a},
me:function me(a){this.a=a},
md:function md(a){this.a=a},
mf:function mf(a){this.a=a},
mc:function mc(a){this.a=a},
ax:function ax(a,b){this.c=a
this.d=b
this.a=null},
cF(a,b,c,d,e){var s=A.xp(new A.o3(c),t.m)
s=s==null?null:A.oM(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.fe(a,b,s,!1,e.h("fe<0>"))},
xp(a,b){var s=$.ag
if(s===B.A)return a
return s.e9(a,b)},
pR:function pR(a,b){this.a=a
this.$ti=b},
o2:function o2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fe:function fe(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
o3:function o3(a){this.a=a},
xX(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
y6(a){throw A.aK(A.ra(a),new Error())},
ty(){throw A.aK(A.ra(""),new Error())},
rX(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.oN(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.cI(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
for(;;){r=a.length
r.toString
if(!(p<r))break
q.push(A.rX(a[p]));++p}return q}return a},
cI(a){var s,r,q,p,o,n
if(a==null)return null
s=A.Z(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.aE)(r),++p){o=r[p]
n=o
n.toString
s.i(0,n,A.rX(a[o]))}return s},
cs(a,b,c){var s=A.au(b),r=s.h("ad<1,J>")
s=A.aw(new A.ad(b,s.h("J(1)").a(A.pj()),r),r.h("as.E"))
s.$flags=1
return new A.a7(a,c,s)},
qr(a){var s,r,q,p,o=a.a
if($.t6.H(0,o))return
s=a.gbC(0)
if(B.b.D(s).length===0)return
r=v.G
q=A.aR(A.y(r.document).querySelector("head"))
if(q==null)return
p=A.y(A.y(r.document).createElement("style"))
p.setAttribute("data-flint-root-design",o)
p.textContent=s
A.y(q.appendChild(p))
$.t6.u(0,o)},
xZ(a){var s,r,q
if($.t7.H(0,a.gep(a)))return
s=v.G
r=A.aR(A.y(s.document).querySelector("head"))
if(r==null)return
q=A.y(A.y(s.document).createElement("style"))
q.setAttribute("data-flint-stylesheet",a.gep(a))
q.textContent=a.gbC(a)
A.y(r.appendChild(q))
$.t7.u(0,a.gep(a))},
tm(a,b,c){var s,r,q
c.j(0,"id")
s=b.length===0?a:b
r=A.bX("[^a-z0-9_-]+",!0,!1)
r=A.cK(s.toLowerCase(),r,"-")
q=A.bX("^-+|-+$",!0,!1)
return"flint-"+a+"-"+A.cK(r,q,"")},
tl(a,b,c,d){var s=A.e([],t.s)
if(b!=null&&b.length!==0)s.push(d+"-error")
return s.length===0?null:B.f.J(s," ")},
to(a,b,c){var s=A.e([],t.Y)
if(a!=null&&a.length!==0)s.push(new A.a7("p",A.ai(["id",c+"-error","style",B.jH],t.N,t.X),A.j(a,B.h)))
return s},
tn(a,b,c){var s=A.ai(["for",a,"style",B.jV],t.N,t.X),r=A.e([new A.cz(b)],t.Y)
if(c)r.push(B.io)
return new A.a7("label",s,r)},
tj(a,b,c,d,e,f,g){var s=A.b9(f,t.N,t.X)
s.i(0,"id",d)
s.i(0,"name",e)
if(g)s.i(0,"required",!0)
if(c!=null&&c.length!==0)s.i(0,"aria-invalid","true")
if(a!=null)s.i(0,"aria-describedby",a)
return s},
b6(a,b){return A.fK("h1",a,null,B.a,B.a,b)},
ap(a,b){return A.fK("h2",a,null,B.a,B.a,b)},
bK(a,b){return A.fK("h3",a,null,B.a,B.a,b)},
G(a,b){return A.fK("p",a,null,B.a,B.a,b)},
u(a,b){return A.fK("span",a,null,B.a,B.a,b)},
f7(a,b){return A.fK("strong",a,null,B.a,B.a,b)},
fK(a,b,c,d,e,f){return new A.a7(a,A.i(d,c,f,B.a,e),A.j(b,B.h))},
pk(a){var s,r=document,q=r.createElement("textarea")
q.toString
B.m8.siy(q,a)
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
xC(){var s,r=window.navigator.platform,q=window.navigator.userAgent
q.toString
s=(A.W(r)+" "+q).toLowerCase()
if(B.b.H(s,"win"))return"windows"
if(B.b.H(s,"mac"))return"macos"
if(B.b.H(s,"linux")||B.b.H(s,"x11"))return"linux"
return null},
xU(){A.xA("#app",$.uH(),$.uI())},
tg(a){var s=null,r=A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,"contain",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,a,s,s,s,s),q=A.b9(B.a,t.N,t.X)
q.i(0,"src","/logo-icon.png")
q.i(0,"alt","Flint Dart logo")
q.i(0,"width",A.E(a,!1))
q.i(0,"height",A.E(a,!1))
q.i(0,"loading","lazy")
q.i(0,"decoding","async")
return new A.hI("img",A.i(q,s,r,B.jI,B.a),B.ag)}},B={}
var w=[A,J,B]
var $={}
A.pT.prototype={}
J.dE.prototype={
O(a,b){return a===b},
gL(a){return A.eX(a)},
l(a){return"Instance of '"+A.ih(a)+"'"},
gU(a){return A.dd(A.qi(this))}}
J.hL.prototype={
l(a){return String(a)},
gL(a){return a?519018:218159},
gU(a){return A.dd(t.y)},
$iam:1,
$iab:1}
J.eH.prototype={
O(a,b){return null==b},
l(a){return"null"},
gL(a){return 0},
$iam:1,
$iaH:1}
J.c.prototype={$iB:1}
J.cA.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.ic.prototype={}
J.dY.prototype={}
J.cg.prototype={
l(a){var s=a[$.qw()]
if(s==null)return this.eJ(a)
return"JavaScript function for "+J.r(s)},
$ibU:1}
J.dH.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.dI.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.a4.prototype={
u(a,b){A.au(a).c.a(b)
a.$flags&1&&A.bv(a,29)
a.push(b)},
T(a,b){var s
a.$flags&1&&A.bv(a,"remove",1)
for(s=0;s<a.length;++s)if(J.a9(a[s],b)){a.splice(s,1)
return!0}return!1},
aG(a,b){var s=A.au(a)
return new A.aA(a,s.h("ab(1)").a(b),s.h("aA<1>"))},
S(a,b){var s
A.au(a).h("o<1>").a(b)
a.$flags&1&&A.bv(a,"addAll",2)
if(Array.isArray(b)){this.eP(a,b)
return}for(s=J.b1(b);s.m();)a.push(s.gp(s))},
eP(a,b){var s,r
t.q.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.l(A.aS(a))
for(r=0;r<s;++r)a.push(b[r])},
bB(a){a.$flags&1&&A.bv(a,"clear","clear")
a.length=0},
ab(a,b,c){var s=A.au(a)
return new A.ad(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("ad<1,2>"))},
J(a,b){var s,r=A.hT(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.i(r,s,A.W(a[s]))
return r.join(b)},
i4(a,b,c,d){var s,r,q
d.a(b)
A.au(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.l(A.aS(a))}return r},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
gF(a){if(a.length>0)return a[0]
throw A.l(A.dF())},
geo(a){var s=a.length
if(s>0)return a[s-1]
throw A.l(A.dF())},
cz(a,b){var s,r
A.au(a).h("ab(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.l(A.aS(a))}return!1},
hT(a,b){var s,r
A.au(a).h("ab(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.l(A.aS(a))}return!0},
H(a,b){var s
for(s=0;s<a.length;++s)if(J.a9(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gM(a){return a.length!==0},
l(a){return A.pS(a,"[","]")},
gv(a){return new J.cN(a,a.length,A.au(a).h("cN<1>"))},
gL(a){return A.eX(a)},
gk(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.l(A.pq(a,b))
return a[b]},
i(a,b,c){A.au(a).c.a(c)
a.$flags&2&&A.bv(a)
if(!(b>=0&&b<a.length))throw A.l(A.pq(a,b))
a[b]=c},
eB(a,b){return new A.d4(a,b.h("d4<0>"))},
$iD:1,
$io:1,
$iC:1}
J.hK.prototype={
ix(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.ih(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.m0.prototype={}
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
J.eI.prototype={
it(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.l(A.R(""+a+".toInt()"))},
i3(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.l(A.R(""+a+".floor()"))},
iw(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.l(A.aQ(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.t(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.ca(A.R("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.t(p,1)
s=p[1]
if(3>=r)return A.t(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.bQ("0",o)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b7(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
eL(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dZ(a,b)},
a9(a,b){return(a|0)===a?a/b|0:this.dZ(a,b)},
dZ(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.l(A.R("Result of truncating division is "+A.W(s)+": "+A.W(a)+" ~/ "+b))},
hm(a,b){return b>31?0:a<<b>>>0},
cp(a,b){var s
if(a>0)s=this.dW(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hp(a,b){if(0>b)throw A.l(A.te(b))
return this.dW(a,b)},
dW(a,b){return b>31?0:a>>>b},
gU(a){return A.dd(t.di)},
$iac:1,
$iaT:1}
J.eG.prototype={
gU(a){return A.dd(t.S)},
$iam:1,
$ix:1}
J.hM.prototype={
gU(a){return A.dd(t.i)},
$iam:1}
J.cX.prototype={
cv(a,b,c){var s=b.length
if(c>s)throw A.l(A.aQ(c,0,s,null,null))
return new A.jG(b,a,c)},
e8(a,b){return this.cv(a,b,0)},
ec(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a5(a,r-s)},
cS(a,b,c){A.vo(0,0,a.length,"startIndex")
return A.y3(a,b,c,0)},
eH(a,b){var s
if(typeof b=="string")return A.e(a.split(b),t.s)
else{if(b instanceof A.dG){s=b.e
s=!(s==null?b.e=b.fd():s)}else s=!1
if(s)return A.e(a.split(b.b),t.s)
else return this.ft(a,b)}},
aF(a,b,c,d){var s=A.dR(b,c,a.length)
return A.tx(a,b,s,d)},
ft(a,b){var s,r,q,p,o,n,m=A.e([],t.s)
for(s=J.qO(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gp(s)
o=p.gbS(p)
n=p.gaW(p)
q=n-o
if(q===0&&r===o)continue
B.f.u(m,this.t(a,r,o))
r=n}if(r<a.length||q>0)B.f.u(m,this.a5(a,r))
return m},
X(a,b,c){var s
if(c<0||c>a.length)throw A.l(A.aQ(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
K(a,b){return this.X(a,b,0)},
t(a,b,c){return a.substring(b,A.dR(b,c,a.length))},
a5(a,b){return this.t(a,b,null)},
D(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.t(p,0)
if(p.charCodeAt(0)===133){s=J.r7(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.t(p,r)
q=p.charCodeAt(r)===133?J.v9(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
ex(a){var s=a.trimStart(),r=s.length
if(r===0)return s
if(0>=r)return A.t(s,0)
if(s.charCodeAt(0)!==133)return s
return s.substring(J.r7(s,1))},
bQ(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.l(B.dl)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
er(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bQ(c,s)+a},
eq(a,b){return this.er(a,b," ")},
bL(a,b,c){var s
if(c<0||c>a.length)throw A.l(A.aQ(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cK(a,b){return this.bL(a,b,0)},
hN(a,b,c){var s=a.length
if(c>s)throw A.l(A.aQ(c,0,s,null,null))
return A.y_(a,b,c)},
H(a,b){return this.hN(a,b,0)},
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
$imz:1,
$ih:1}
A.e1.prototype={
gv(a){return new A.en(J.b1(this.a),A.N(this).h("en<1,2>"))},
gk(a){return J.bh(this.a)},
gB(a){return J.ei(this.a)},
gM(a){return J.di(this.a)},
gF(a){return A.N(this).y[1].a(J.fT(this.a))},
l(a){return J.r(this.a)}}
A.en.prototype={
m(){return this.a.m()},
gp(a){var s=this.a
return this.$ti.y[1].a(s.gp(s))},
$iah:1}
A.cQ.prototype={}
A.fd.prototype={$iD:1}
A.cR.prototype={
aS(a,b,c){return new A.cR(this.a,this.$ti.h("@<1,2>").C(b).C(c).h("cR<1,2,3,4>"))},
j(a,b){return this.$ti.h("4?").a(J.M(this.a,b))},
i(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
J.ar(this.a,s.c.a(b),s.y[1].a(c))},
T(a,b){return this.$ti.h("4?").a(J.uL(this.a,b))},
N(a,b){J.pP(this.a,new A.kS(this,this.$ti.h("~(3,4)").a(b)))},
gR(a){var s=this.$ti
return A.qX(J.qR(this.a),s.c,s.y[2])},
ga2(a){var s=this.$ti
return A.qX(J.pQ(this.a),s.y[1],s.y[3])},
gk(a){return J.bh(this.a)},
gB(a){return J.ei(this.a)},
gM(a){return J.di(this.a)},
ga_(a){return J.eh(this.a).ab(0,new A.kR(this),this.$ti.h("a1<3,4>"))}}
A.kS.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.kR.prototype={
$1(a){var s=this.a.$ti
s.h("a1<1,2>").a(a)
return new A.a1(s.y[2].a(a.a),s.y[3].a(a.b),s.h("a1<3,4>"))},
$S(){return this.a.$ti.h("a1<3,4>(a1<1,2>)")}}
A.hQ.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.dt.prototype={
gk(a){return this.a.length},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.t(s,b)
return s.charCodeAt(b)}}
A.ne.prototype={}
A.D.prototype={}
A.as.prototype={
gv(a){var s=this
return new A.bz(s,s.gk(s),A.N(s).h("bz<as.E>"))},
gB(a){return this.gk(this)===0},
gF(a){if(this.gk(this)===0)throw A.l(A.dF())
return this.I(0,0)},
J(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.W(p.I(0,0))
if(o!==p.gk(p))throw A.l(A.aS(p))
for(r=s,q=1;q<o;++q){r=r+b+A.W(p.I(0,q))
if(o!==p.gk(p))throw A.l(A.aS(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.W(p.I(0,q))
if(o!==p.gk(p))throw A.l(A.aS(p))}return r.charCodeAt(0)==0?r:r}},
aG(a,b){return this.d_(0,A.N(this).h("ab(as.E)").a(b))},
ab(a,b,c){var s=A.N(this)
return new A.ad(this,s.C(c).h("1(as.E)").a(b),s.h("@<as.E>").C(c).h("ad<1,2>"))},
bO(a,b){var s=A.N(this).h("as.E")
if(b)s=A.aw(this,s)
else{s=A.aw(this,s)
s.$flags=1
s=s}return s}}
A.f3.prototype={
gfv(){var s=J.bh(this.a),r=this.c
if(r==null||r>s)return s
return r},
ght(){var s=J.bh(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.bh(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
I(a,b){var s=this,r=s.ght()+b
if(b<0||r>=s.gfv())throw A.l(A.az(b,s.gk(0),s,"index"))
return J.qQ(s.a,r)},
bO(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.al(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.r5(0,n):J.r4(0,n)}r=A.hT(s,m.I(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.f.i(r,q,m.I(n,o+q))
if(m.gk(n)<l)throw A.l(A.aS(p))}return r},
iv(a){return this.bO(0,!0)}}
A.bz.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.al(q),o=p.gk(q)
if(r.b!==o)throw A.l(A.aS(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0},
$iah:1}
A.aP.prototype={
gv(a){return new A.eP(J.b1(this.a),this.b,A.N(this).h("eP<1,2>"))},
gk(a){return J.bh(this.a)},
gB(a){return J.ei(this.a)},
gF(a){return this.b.$1(J.fT(this.a))}}
A.cU.prototype={$iD:1}
A.eP.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gp(r))
return!0}s.a=null
return!1},
gp(a){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.ad.prototype={
gk(a){return J.bh(this.a)},
I(a,b){return this.b.$1(J.qQ(this.a,b))}}
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
return new A.f4(s.gv(s),this.b,A.N(this).h("f4<1>"))}}
A.ev.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(r>s)return s
return r},
$iD:1}
A.f4.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gp(a){var s
if(this.b<0){this.$ti.c.a(null)
return null}s=this.a
return s.gp(s)},
$iah:1}
A.d4.prototype={
gv(a){return new A.f9(J.b1(this.a),this.$ti.h("f9<1>"))}}
A.f9.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gp(s)))return!0
return!1},
gp(a){var s=this.a
return this.$ti.c.a(s.gp(s))},
$iah:1}
A.av.prototype={
sk(a,b){throw A.l(A.R("Cannot change the length of a fixed-length list"))},
u(a,b){A.aC(a).h("av.E").a(b)
throw A.l(A.R("Cannot add to a fixed-length list"))}}
A.cD.prototype={
i(a,b,c){A.N(this).h("cD.E").a(c)
throw A.l(A.R("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.l(A.R("Cannot change the length of an unmodifiable list"))},
u(a,b){A.N(this).h("cD.E").a(b)
throw A.l(A.R("Cannot add to an unmodifiable list"))}}
A.dZ.prototype={}
A.ae.prototype={$r:"+(1,2)",$s:1}
A.aB.prototype={$r:"+body,title(1,2)",$s:2}
A.a_.prototype={$r:"+(1,2,3)",$s:3}
A.c7.prototype={$r:"+(1,2,3,4)",$s:4}
A.eq.prototype={}
A.ep.prototype={
aS(a,b,c){var s=A.N(this)
return A.re(this,s.c,s.y[1],b,c)},
gB(a){return this.gk(this)===0},
gM(a){return this.gk(this)!==0},
l(a){return A.pZ(this)},
i(a,b,c){var s=A.N(this)
s.c.a(b)
s.y[1].a(c)
A.qZ()},
T(a,b){A.qZ()},
ga_(a){return new A.e4(this.hS(0),A.N(this).h("e4<a1<1,2>>"))},
hS(a){var s=this
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
cM(a,b,c,d){var s=A.Z(c,d)
this.N(0,new A.kV(this,A.N(this).C(c).C(d).h("a1<1,2>(3,4)").a(b),s))
return s},
$iz:1}
A.kV.prototype={
$2(a,b){var s=A.N(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.i(0,r.a,r.b)},
$S(){return A.N(this.a).h("~(1,2)")}}
A.a6.prototype={
gk(a){return this.b.length},
gdE(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a1(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
j(a,b){if(!this.a1(0,b))return null
return this.b[this.a[b]]},
N(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gdE()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gR(a){return new A.d8(this.gdE(),this.$ti.h("d8<1>"))},
ga2(a){return new A.d8(this.b,this.$ti.h("d8<2>"))}}
A.d8.prototype={
gk(a){return this.a.length},
gB(a){return 0===this.a.length},
gM(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.cp(s,s.length,this.$ti.h("cp<1>"))}}
A.cp.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iah:1}
A.du.prototype={}
A.dv.prototype={
gk(a){return this.b},
gB(a){return this.b===0},
gM(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.cp(s,s.length,r.$ti.h("cp<1>"))},
H(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.ce.prototype={
gk(a){return this.a.length},
gB(a){return this.a.length===0},
gM(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.cp(s,s.length,this.$ti.h("cp<1>"))},
fI(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.eJ(o.$ti.h("eJ<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aE)(s),++q){p=s[q]
n.i(0,p,p)}o.$map=n}return n},
H(a,b){return this.fI().a1(0,b)}}
A.mA.prototype={
$0(){return B.Y.i3(1000*this.a.now())},
$S:22}
A.f0.prototype={}
A.nP.prototype={
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
A.eV.prototype={
l(a){return"Null check operator used on a null value"}}
A.hN.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iO.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mx.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ew.prototype={}
A.fw.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icB:1}
A.cw.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.tB(r==null?"unknown":r)+"'"},
$ibU:1,
giD(){return this},
$C:"$1",
$R:1,
$D:null}
A.h6.prototype={$C:"$0",$R:0}
A.h7.prototype={$C:"$2",$R:2}
A.iA.prototype={}
A.is.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.tB(s)+"'"}}
A.dn.prototype={
O(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.dn))return!1
return this.$_target===b.$_target&&this.a===b.a},
gL(a){return(A.fP(this.a)^A.eX(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.ih(this.a)+"'")}}
A.il.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bV.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
gR(a){return new A.ch(this,A.N(this).h("ch<1>"))},
ga2(a){return new A.aO(this,A.N(this).h("aO<2>"))},
ga_(a){return new A.af(this,A.N(this).h("af<1,2>"))},
a1(a,b){var s,r
if(typeof b=="string"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.i7(b)},
i7(a){var s=this.d
if(s==null)return!1
return this.b5(s[this.b4(a)],a)>=0},
S(a,b){A.N(this).h("z<1,2>").a(b).N(0,new A.m1(this))},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.i8(b)},
i8(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b4(a)]
r=this.b5(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.N(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.d4(s==null?q.b=q.cj():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.d4(r==null?q.c=q.cj():r,b,c)}else q.ia(b,c)},
ia(a,b){var s,r,q,p,o=this,n=A.N(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.cj()
r=o.b4(a)
q=s[r]
if(q==null)s[r]=[o.ck(a,b)]
else{p=o.b5(q,a)
if(p>=0)q[p].b=b
else q.push(o.ck(a,b))}},
cN(a,b,c){var s,r,q=this,p=A.N(q)
p.c.a(b)
p.h("2()").a(c)
if(q.a1(0,b)){s=q.j(0,b)
return s==null?p.y[1].a(s):s}r=c.$0()
q.i(0,b,r)
return r},
T(a,b){var s=this
if(typeof b=="string")return s.d0(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.d0(s.c,b)
else return s.i9(b)},
i9(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b4(a)
r=n[s]
q=o.b5(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.d1(p)
if(r.length===0)delete n[s]
return p.b},
bB(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.ci()}},
N(a,b){var s,r,q=this
A.N(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.l(A.aS(q))
s=s.c}},
d4(a,b,c){var s,r=A.N(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.ck(b,c)
else s.b=c},
d0(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.d1(s)
delete a[b]
return s.b},
ci(){this.r=this.r+1&1073741823},
ck(a,b){var s=this,r=A.N(s),q=new A.m4(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.ci()
return q},
d1(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.ci()},
b4(a){return J.bI(a)&1073741823},
b5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
l(a){return A.pZ(this)},
cj(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$ipX:1}
A.m1.prototype={
$2(a,b){var s=this.a,r=A.N(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.N(this.a).h("~(1,2)")}}
A.m4.prototype={}
A.ch.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.eN(s,s.r,s.e,this.$ti.h("eN<1>"))}}
A.eN.prototype={
gp(a){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aS(q))
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
if(r.b!==q.r)throw A.l(A.aS(q))
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
return new A.eM(s,s.r,s.e,this.$ti.h("eM<1,2>"))}}
A.eM.prototype={
gp(a){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.l(A.aS(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.a1(s.a,s.b,r.$ti.h("a1<1,2>"))
r.c=s.c
return!0}},
$iah:1}
A.eJ.prototype={
b4(a){return A.xx(a)&1073741823},
b5(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1}}
A.pv.prototype={
$1(a){return this.a(a)},
$S:23}
A.pw.prototype={
$2(a,b){return this.a(a,b)},
$S:75}
A.px.prototype={
$1(a){return this.a(A.U(a))},
$S:19}
A.bE.prototype={
l(a){return this.e1(!1)},
e1(a){var s,r,q,p,o,n=this.fz(),m=this.bk(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.t(m,q)
o=m[q]
l=a?l+A.rh(o):l+A.W(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
fz(){var s,r=this.$s
while($.oq.length<=r)B.f.u($.oq,null)
s=$.oq[r]
if(s==null){s=this.fc()
B.f.i($.oq,r,s)}return s},
fc(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.e(new Array(l),t.G)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.f.i(k,q,r[s])}}return A.rd(k,t.K)}}
A.db.prototype={
bk(){return[this.a,this.b]},
O(a,b){if(b==null)return!1
return b instanceof A.db&&this.$s===b.$s&&J.a9(this.a,b.a)&&J.a9(this.b,b.b)},
gL(a){return A.eW(this.$s,this.a,this.b,B.V)}}
A.e2.prototype={
bk(){return[this.a,this.b,this.c]},
O(a,b){var s=this
if(b==null)return!1
return b instanceof A.e2&&s.$s===b.$s&&J.a9(s.a,b.a)&&J.a9(s.b,b.b)&&J.a9(s.c,b.c)},
gL(a){var s=this
return A.eW(s.$s,s.a,s.b,s.c)}}
A.e3.prototype={
bk(){return this.a},
O(a,b){if(b==null)return!1
return b instanceof A.e3&&this.$s===b.$s&&A.vV(this.a,b.a)},
gL(a){return A.eW(this.$s,A.vb(this.a),B.V,B.V)}}
A.dG.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdJ(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.r8(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
fd(){var s,r=this.a
if(!B.b.H(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
i2(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fn(s)},
cv(a,b,c){var s=b.length
if(c>s)throw A.l(A.aQ(c,0,s,null,null))
return new A.iX(this,b,c)},
e8(a,b){return this.cv(0,b,0)},
dt(a,b){var s,r=this.gdJ()
if(r==null)r=A.aa(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fn(s)},
$imz:1,
$ivp:1}
A.fn.prototype={
gbS(a){return this.b.index},
gaW(a){var s=this.b
return s.index+s[0].length},
$idN:1,
$if_:1}
A.iX.prototype={
gv(a){return new A.iY(this.a,this.b,this.c)}}
A.iY.prototype={
gp(a){var s=this.d
return s==null?t.cz.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.dt(l,s)
if(p!=null){m.d=p
o=p.gaW(0)
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
A.f2.prototype={
gaW(a){return this.a+this.c.length},
$idN:1,
gbS(a){return this.a}}
A.jG.prototype={
gv(a){return new A.jH(this.a,this.b,this.c)},
gF(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.f2(r,s)
throw A.l(A.dF())}}
A.jH.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.f2(s,o)
q.c=r===q.c?r+1:r
return!0},
gp(a){var s=this.d
s.toString
return s},
$iah:1}
A.dO.prototype={
gU(a){return B.mc},
$iam:1}
A.eR.prototype={
fV(a,b,c,d){var s=A.aQ(b,0,c,d,null)
throw A.l(s)},
dh(a,b,c,d){if(b>>>0!==b||b>c)this.fV(a,b,c,d)}}
A.i_.prototype={
gU(a){return B.md},
$iam:1}
A.aX.prototype={
gk(a){return a.length},
hl(a,b,c,d,e){var s,r,q=a.length
this.dh(a,b,q,"start")
this.dh(a,c,q,"end")
if(b>c)throw A.l(A.aQ(b,0,c,null,null))
s=c-b
if(e<0)throw A.l(A.c0(e,null))
r=d.length
if(r-e<s)throw A.l(A.ak("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ia3:1}
A.eQ.prototype={
j(a,b){A.cq(b,a,a.length)
return a[b]},
i(a,b,c){A.rV(c)
a.$flags&2&&A.bv(a)
A.cq(b,a,a.length)
a[b]=c},
$iD:1,
$io:1,
$iC:1}
A.bA.prototype={
i(a,b,c){A.b_(c)
a.$flags&2&&A.bv(a)
A.cq(b,a,a.length)
a[b]=c},
bR(a,b,c,d,e){t.hb.a(d)
a.$flags&2&&A.bv(a,5)
if(t.eB.b(d)){this.hl(a,b,c,d,e)
return}this.eK(a,b,c,d,e)},
$iD:1,
$io:1,
$iC:1}
A.i0.prototype={
gU(a){return B.me},
$iam:1}
A.i1.prototype={
gU(a){return B.mf},
$iam:1}
A.i2.prototype={
gU(a){return B.mg},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1}
A.i3.prototype={
gU(a){return B.mh},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1}
A.i4.prototype={
gU(a){return B.mi},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1}
A.i5.prototype={
gU(a){return B.mk},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1}
A.i6.prototype={
gU(a){return B.ml},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1}
A.eS.prototype={
gU(a){return B.mm},
gk(a){return a.length},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1}
A.eT.prototype={
gU(a){return B.mn},
gk(a){return a.length},
j(a,b){A.cq(b,a,a.length)
return a[b]},
$iam:1,
$iq3:1}
A.fp.prototype={}
A.fq.prototype={}
A.fr.prototype={}
A.fs.prototype={}
A.bY.prototype={
h(a){return A.fF(v.typeUniverse,this,a)},
C(a){return A.rL(v.typeUniverse,this,a)}}
A.je.prototype={}
A.jT.prototype={
l(a){return A.bG(this.a,null)}}
A.j9.prototype={
l(a){return this.a}}
A.fB.prototype={$icm:1}
A.nZ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.nY.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:72}
A.o_.prototype={
$0(){this.a.$0()},
$S:12}
A.o0.prototype={
$0(){this.a.$0()},
$S:12}
A.fA.prototype={
eM(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.ec(new A.ov(this,b),0),a)
else throw A.l(A.R("`setTimeout()` not found."))},
eN(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.ec(new A.ou(this,a,Date.now(),b),0),a)
else throw A.l(A.R("Periodic timer."))},
ag(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.l(A.R("Canceling a timer."))},
$iiH:1}
A.ov.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.ou.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.t.eL(s,o)}q.c=p
r.d.$1(q)},
$S:12}
A.iZ.prototype={
aT(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.bY(b)
else{s=r.a
if(q.h("bk<1>").b(b))s.dg(b)
else s.c7(b)}},
cB(a,b){var s=this.a
if(this.b)s.al(new A.b7(a,b))
else s.bZ(new A.b7(a,b))}}
A.oH.prototype={
$1(a){return this.a.$2(0,a)},
$S:7}
A.oI.prototype={
$2(a,b){this.a.$2(1,new A.ew(a,t.k.a(b)))},
$S:30}
A.oV.prototype={
$2(a,b){this.a(A.b_(a),b)},
$S:31}
A.fx.prototype={
gp(a){var s=this.b
return s==null?this.$ti.c.a(s):s},
hf(a,b){var s,r,q
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
n.d=null}p=n.hf(l,m)
if(1===p)return!0
if(0===p){n.b=null
o=n.e
if(o==null||o.length===0){n.a=A.rG
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
n.a=A.rG
throw m
return!1}if(0>=o.length)return A.t(o,-1)
n.a=o.pop()
l=1
continue}throw A.l(A.ak("sync*"))}return!1},
iE(a){var s,r,q=this
if(a instanceof A.e4){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.f.u(r,q.a)
q.a=s
return 2}else{q.d=J.b1(a)
return 2}},
$iah:1}
A.e4.prototype={
gv(a){return new A.fx(this.a(),this.$ti.h("fx<1>"))}}
A.b7.prototype={
l(a){return A.W(this.a)},
$iao:1,
gaI(){return this.b}}
A.lF.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.be(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aL(p)
q=A.cr(p)
l=r
o=q
n=A.t0(l,o)
l=new A.b7(l,o)
m.b.al(l)
return}m.b.be(s)}},
$S:0}
A.j1.prototype={
cB(a,b){var s=this.a
if((s.a&30)!==0)throw A.l(A.ak("Future already completed"))
s.bZ(A.wO(a,b))},
ah(a){return this.cB(a,null)}}
A.co.prototype={
aT(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.l(A.ak("Future already completed"))
s.bY(r.h("1/").a(b))}}
A.d5.prototype={
ic(a){if((this.c&15)!==6)return!0
return this.b.b.cU(t.al.a(this.d),a.a,t.y,t.K)},
i5(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ag.b(q))p=l.ip(q,m,a.b,o,n,t.k)
else p=l.cU(t.bI.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aL(s))){if((r.c&1)!==0)throw A.l(A.c0("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.l(A.c0("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.an.prototype={
cW(a,b,c){var s,r,q=this.$ti
q.C(c).h("1/(2)").a(a)
s=$.ag
if(s===B.A){if(!t.ag.b(b)&&!t.bI.b(b))throw A.l(A.ek(b,"onError",u.c))}else{c.h("@<0/>").C(q.c).h("1(2)").a(a)
b=A.x6(b,s)}r=new A.an(s,c.h("an<0>"))
this.bT(new A.d5(r,3,a,b,q.h("@<1>").C(c).h("d5<1,2>")))
return r},
e0(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.an($.ag,c.h("an<0>"))
this.bT(new A.d5(s,19,a,b,r.h("@<1>").C(c).h("d5<1,2>")))
return s},
hk(a){this.a=this.a&1|16
this.c=a},
bd(a){this.a=a.a&30|this.a&1
this.c=a.c},
bT(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.bT(a)
return}r.bd(s)}A.e9(null,null,r.b,t.M.a(new A.o6(r,a)))}},
dO(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.dO(a)
return}m.bd(n)}l.a=m.br(a)
A.e9(null,null,m.b,t.M.a(new A.ob(l,m)))}},
aQ(){var s=t.F.a(this.c)
this.c=null
return this.br(s)},
br(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
be(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bk<1>").b(a))A.o9(a,r,!0)
else{s=r.aQ()
q.c.a(a)
r.a=8
r.c=a
A.d6(r,s)}},
c7(a){var s,r=this
r.$ti.c.a(a)
s=r.aQ()
r.a=8
r.c=a
A.d6(r,s)},
fb(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.aQ()
q.bd(a)
A.d6(q,r)},
al(a){var s=this.aQ()
this.hk(a)
A.d6(this,s)},
bY(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bk<1>").b(a)){this.dg(a)
return}this.f2(a)},
f2(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.e9(null,null,s.b,t.M.a(new A.o8(s,a)))},
dg(a){A.o9(this.$ti.h("bk<1>").a(a),this,!1)
return},
bZ(a){this.a^=2
A.e9(null,null,this.b,t.M.a(new A.o7(this,a)))},
is(a,b,c){var s,r,q=this,p={},o=q.$ti
o.h("1/()?").a(c)
if((q.a&24)!==0){p=new A.an($.ag,o)
p.bY(q)
return p}s=$.ag
r=new A.an(s,o)
p.a=null
p.a=A.c5(b,new A.oh(q,r,s,o.h("1/()").a(c)))
q.cW(new A.oi(p,q,r),new A.oj(p,r),t.b)
return r},
$ibk:1}
A.o6.prototype={
$0(){A.d6(this.a,this.b)},
$S:0}
A.ob.prototype={
$0(){A.d6(this.b,this.a.a)},
$S:0}
A.oa.prototype={
$0(){A.o9(this.a.a,this.b,!0)},
$S:0}
A.o8.prototype={
$0(){this.a.c7(this.b)},
$S:0}
A.o7.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.oe.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.ev(t.fO.a(q.d),t.z)}catch(p){s=A.aL(p)
r=A.cr(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.kk(q)
n=k.a
n.c=new A.b7(q,o)
q=n}q.b=!0
return}if(j instanceof A.an&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.an){m=k.b.a
l=new A.an(m.b,m.$ti)
j.cW(new A.of(l,m),new A.og(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.of.prototype={
$1(a){this.a.fb(this.b)},
$S:3}
A.og.prototype={
$2(a,b){A.aa(a)
t.k.a(b)
this.a.al(new A.b7(a,b))},
$S:24}
A.od.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.cU(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aL(l)
r=A.cr(l)
q=s
p=r
if(p==null)p=A.kk(q)
o=this.a
o.c=new A.b7(q,p)
o.b=!0}},
$S:0}
A.oc.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.ic(s)&&p.a.e!=null){p.c=p.a.i5(s)
p.b=!1}}catch(o){r=A.aL(o)
q=A.cr(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.kk(p)
m=l.b
m.c=new A.b7(p,n)
p=m}p.b=!0}},
$S:0}
A.oh.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.be(n.c.ev(n.d,n.a.$ti.h("1/")))}catch(q){s=A.aL(q)
r=A.cr(q)
p=s
o=r
if(o==null)o=A.kk(p)
n.b.al(new A.b7(p,o))}},
$S:0}
A.oi.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.ag(0)
this.c.c7(a)}},
$S(){return this.b.$ti.h("aH(1)")}}
A.oj.prototype={
$2(a,b){var s
A.aa(a)
t.k.a(b)
s=this.a.a
if(s.b!=null){s.ag(0)
this.b.al(new A.b7(a,b))}},
$S:24}
A.j_.prototype={}
A.iu.prototype={
gk(a){var s,r,q=this,p={},o=new A.an($.ag,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.nr(p,q))
t.bn.a(new A.ns(p,o))
A.cF(q.a,q.b,r,!1,s.c)
return o}}
A.nr.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.ns.prototype={
$0(){this.b.be(this.a.a)},
$S:0}
A.jF.prototype={}
A.fJ.prototype={$irx:1}
A.jx.prototype={
iq(a){var s,r,q
t.M.a(a)
try{if(B.A===$.ag){a.$0()
return}A.t8(null,null,this,a,t.H)}catch(q){s=A.aL(q)
r=A.cr(q)
A.oO(A.aa(s),t.k.a(r))}},
ir(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.A===$.ag){a.$1(b)
return}A.t9(null,null,this,a,b,t.H,c)}catch(q){s=A.aL(q)
r=A.cr(q)
A.oO(A.aa(s),t.k.a(r))}},
cA(a){return new A.or(this,t.M.a(a))},
e9(a,b){return new A.os(this,b.h("~(0)").a(a),b)},
ev(a,b){b.h("0()").a(a)
if($.ag===B.A)return a.$0()
return A.t8(null,null,this,a,b)},
cU(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.ag===B.A)return a.$1(b)
return A.t9(null,null,this,a,b,c,d)},
ip(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ag===B.A)return a.$2(b,c)
return A.x7(null,null,this,a,b,c,d,e,f)},
eu(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.or.prototype={
$0(){return this.a.iq(this.b)},
$S:0}
A.os.prototype={
$1(a){var s=this.c
return this.a.ir(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.oP.prototype={
$0(){A.uY(this.a,this.b)},
$S:0}
A.fh.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
gR(a){return new A.d7(this,this.$ti.h("d7<1>"))},
ga2(a){var s=this.$ti
return A.bn(new A.d7(this,s.h("d7<1>")),new A.ok(this),s.c,s.y[1])},
a1(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.fh(b)},
fh(a){var s=this.d
if(s==null)return!1
return this.a8(this.dw(s,a),a)>=0},
j(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.q6(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.q6(q,b)
return r}else return this.fG(0,b)},
fG(a,b){var s,r,q=this.d
if(q==null)return null
s=this.dw(q,b)
r=this.a8(s,b)
return r<0?null:s[r+1]},
i(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.dl(s==null?m.b=A.q7():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.dl(r==null?m.c=A.q7():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.q7()
p=A.fP(b)&1073741823
o=q[p]
if(o==null){A.q8(q,p,[b,c]);++m.a
m.e=null}else{n=m.a8(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
T(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aP(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aP(s.c,b)
else return s.co(0,b)},
co(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=A.fP(b)&1073741823
r=n[s]
q=o.a8(r,b)
if(q<0)return null;--o.a
o.e=null
p=r.splice(q,2)[1]
if(0===r.length)delete n[s]
return p},
N(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.dm()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.j(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.l(A.aS(m))}},
dm(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hT(i.a,null,!1,t.z)
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
dl(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.q8(a,b,c)},
aP(a,b){var s
if(a!=null&&a[b]!=null){s=this.$ti.y[1].a(A.q6(a,b))
delete a[b];--this.a
this.e=null
return s}else return null},
dw(a,b){return a[A.fP(b)&1073741823]}}
A.ok.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.j(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.fj.prototype={
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
return new A.fi(s,s.dm(),this.$ti.h("fi<1>"))}}
A.fi.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.l(A.aS(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iah:1}
A.d9.prototype={
gv(a){var s=this,r=new A.fk(s,s.r,s.$ti.h("fk<1>"))
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
return t.g.a(r[b])!=null}else return this.fg(b)},
fg(a){var s=this.d
if(s==null)return!1
return this.a8(s[J.bI(a)&1073741823],a)>=0},
gF(a){var s=this.e
if(s==null)throw A.l(A.ak("No elements"))
return this.$ti.c.a(s.a)},
u(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.dk(s==null?q.b=A.q9():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.dk(r==null?q.c=A.q9():r,b)}else return q.eO(0,b)},
eO(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.q9()
r=J.bI(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.c5(b)]
else{if(p.a8(q,b)>=0)return!1
q.push(p.c5(b))}return!0},
T(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aP(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aP(s.c,b)
else return s.co(0,b)},
co(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.bI(b)&1073741823
r=o[s]
q=this.a8(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.e4(p)
return!0},
dk(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.c5(b)
return!0},
aP(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.e4(s)
delete a[b]
return!0},
c4(){this.r=this.r+1&1073741823},
c5(a){var s,r=this,q=new A.jm(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c4()
return q},
e4(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c4()},
a8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.a9(a[r].a,b))return r
return-1},
$irc:1}
A.jm.prototype={}
A.fk.prototype={
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.l(A.aS(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iah:1}
A.m5.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:44}
A.A.prototype={
gv(a){return new A.bz(a,this.gk(a),A.aC(a).h("bz<A.E>"))},
I(a,b){return this.j(a,b)},
gB(a){return this.gk(a)===0},
gM(a){return this.gk(a)!==0},
gF(a){if(this.gk(a)===0)throw A.l(A.dF())
return this.j(a,0)},
cz(a,b){var s,r
A.aC(a).h("ab(A.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){if(b.$1(this.j(a,r)))return!0
if(s!==this.gk(a))throw A.l(A.aS(a))}return!1},
aG(a,b){var s=A.aC(a)
return new A.aA(a,s.h("ab(A.E)").a(b),s.h("aA<A.E>"))},
eB(a,b){return new A.d4(a,b.h("d4<0>"))},
ab(a,b,c){var s=A.aC(a)
return new A.ad(a,s.C(c).h("1(A.E)").a(b),s.h("@<A.E>").C(c).h("ad<1,2>"))},
u(a,b){var s
A.aC(a).h("A.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.i(a,s,b)},
i1(a,b,c,d){var s
A.aC(a).h("A.E?").a(d)
A.dR(b,c,this.gk(a))
for(s=b;s<c;++s)this.i(a,s,d)},
bR(a,b,c,d,e){var s,r,q
A.aC(a).h("o<A.E>").a(d)
A.dR(b,c,this.gk(a))
s=c-b
if(s===0)return
A.eZ(e,"skipCount")
r=J.al(d)
if(e+s>r.gk(d))throw A.l(A.ak("Too few elements"))
if(e<b)for(q=s-1;q>=0;--q)this.i(a,b+q,r.j(d,e+q))
else for(q=0;q<s;++q)this.i(a,b+q,r.j(d,e+q))},
l(a){return A.pS(a,"[","]")},
$iD:1,
$io:1,
$iC:1}
A.T.prototype={
aS(a,b,c){var s=A.aC(a)
return A.re(a,s.h("T.K"),s.h("T.V"),b,c)},
N(a,b){var s,r,q,p=A.aC(a)
p.h("~(T.K,T.V)").a(b)
for(s=J.b1(this.gR(a)),p=p.h("T.V");s.m();){r=s.gp(s)
q=this.j(a,r)
b.$2(r,q==null?p.a(q):q)}},
ga_(a){return J.k9(this.gR(a),new A.m6(a),A.aC(a).h("a1<T.K,T.V>"))},
cM(a,b,c,d){var s,r,q,p,o,n=A.aC(a)
n.C(c).C(d).h("a1<1,2>(T.K,T.V)").a(b)
s=A.Z(c,d)
for(r=J.b1(this.gR(a)),n=n.h("T.V");r.m();){q=r.gp(r)
p=this.j(a,q)
o=b.$2(q,p==null?n.a(p):p)
s.i(0,o.a,o.b)}return s},
il(a,b){var s,r,q,p,o,n=A.aC(a)
n.h("ab(T.K,T.V)").a(b)
s=A.e([],n.h("a4<T.K>"))
for(r=J.b1(this.gR(a)),n=n.h("T.V");r.m();){q=r.gp(r)
p=this.j(a,q)
if(b.$2(q,p==null?n.a(p):p))B.f.u(s,q)}for(n=s.length,o=0;o<s.length;s.length===n||(0,A.aE)(s),++o)this.T(a,s[o])},
gk(a){return J.bh(this.gR(a))},
gB(a){return J.ei(this.gR(a))},
gM(a){return J.di(this.gR(a))},
ga2(a){return new A.fl(a,A.aC(a).h("fl<T.K,T.V>"))},
l(a){return A.pZ(a)},
$iz:1}
A.m6.prototype={
$1(a){var s=this.a,r=A.aC(s)
r.h("T.K").a(a)
s=J.M(s,a)
if(s==null)s=r.h("T.V").a(s)
return new A.a1(a,s,r.h("a1<T.K,T.V>"))},
$S(){return A.aC(this.a).h("a1<T.K,T.V>(T.K)")}}
A.m7.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.W(a)
r.a=(r.a+=s)+": "
s=A.W(b)
r.a+=s},
$S:16}
A.fl.prototype={
gk(a){return J.bh(this.a)},
gB(a){return J.ei(this.a)},
gM(a){return J.di(this.a)},
gF(a){var s=this.a,r=J.de(s)
s=r.j(s,J.fT(r.gR(s)))
return s==null?this.$ti.y[1].a(s):s},
gv(a){var s=this.a
return new A.fm(J.b1(J.qR(s)),s,this.$ti.h("fm<1,2>"))}}
A.fm.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=J.M(s.b,r.gp(r))
return!0}s.c=null
return!1},
gp(a){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iah:1}
A.fG.prototype={
i(a,b,c){var s=A.N(this)
s.c.a(b)
s.y[1].a(c)
throw A.l(A.R("Cannot modify unmodifiable map"))}}
A.dM.prototype={
aS(a,b,c){return J.aU(this.a,b,c)},
j(a,b){return J.M(this.a,b)},
i(a,b,c){var s=A.N(this)
J.ar(this.a,s.c.a(b),s.y[1].a(c))},
N(a,b){J.pP(this.a,A.N(this).h("~(1,2)").a(b))},
gB(a){return J.ei(this.a)},
gM(a){return J.di(this.a)},
gk(a){return J.bh(this.a)},
l(a){return J.r(this.a)},
ga2(a){return J.pQ(this.a)},
ga_(a){return J.eh(this.a)},
cM(a,b,c,d){return J.cL(this.a,A.N(this).C(c).C(d).h("a1<1,2>(3,4)").a(b),c,d)},
$iz:1}
A.c6.prototype={
aS(a,b,c){return new A.c6(J.aU(this.a,b,c),b.h("@<0>").C(c).h("c6<1,2>"))}}
A.ci.prototype={
gB(a){return this.gk(this)===0},
gM(a){return this.gk(this)!==0},
ab(a,b,c){var s=A.N(this)
return new A.cU(this,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("cU<1,2>"))},
l(a){return A.pS(this,"{","}")},
gF(a){var s=this.gv(this)
if(!s.m())throw A.l(A.dF())
return s.gp(s)},
$iD:1,
$io:1,
$idS:1}
A.ft.prototype={}
A.e5.prototype={}
A.ji.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.h6(b):s}},
gk(a){return this.b==null?this.c.a:this.am().length},
gB(a){return this.gk(0)===0},
gM(a){return this.gk(0)>0},
gR(a){var s
if(this.b==null){s=this.c
return new A.ch(s,A.N(s).h("ch<1>"))}return new A.jj(this)},
ga2(a){var s,r=this
if(r.b==null){s=r.c
return new A.aO(s,A.N(s).h("aO<2>"))}return A.bn(r.am(),new A.om(r),t.N,t.z)},
i(a,b,c){var s,r,q=this
A.U(b)
if(q.b==null)q.c.i(0,b,c)
else if(q.a1(0,b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.e5().i(0,b,c)},
a1(a,b){if(this.b==null)return this.c.a1(0,b)
if(typeof b!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
T(a,b){if(this.b!=null&&!this.a1(0,b))return null
return this.e5().T(0,b)},
N(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.N(0,b)
s=o.am()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.oJ(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.l(A.aS(o))}},
am(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.e(Object.keys(this.a),t.s)
return s},
e5(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.Z(t.N,t.z)
r=n.am()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.i(0,o,n.j(0,o))}if(p===0)B.f.u(r,"")
else B.f.bB(r)
n.a=n.b=null
return n.c=s},
h6(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.oJ(this.a[a])
return this.b[a]=s}}
A.om.prototype={
$1(a){return this.a.j(0,A.U(a))},
$S:19}
A.jj.prototype={
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
A.oD.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:26}
A.oC.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:26}
A.h3.prototype={
ie(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a4.length
a6=A.dR(a5,a6,a2)
s=$.u_()
for(r=s.length,q=a5,p=q,o=null,n=-1,m=-1,l=0;q<a6;q=k){k=q+1
if(!(q<a2))return A.t(a4,q)
j=a4.charCodeAt(q)
if(j===37){i=k+2
if(i<=a6){if(!(k<a2))return A.t(a4,k)
h=A.pu(a4.charCodeAt(k))
g=k+1
if(!(g<a2))return A.t(a4,g)
f=A.pu(a4.charCodeAt(g))
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
g.a+=B.b.t(a4,p,q)
c=A.at(j)
g.a+=c
p=k
continue}}throw A.l(A.aV("Invalid base64 data",a4,q))}if(o!=null){a2=B.b.t(a4,p,a6)
a2=o.a+=a2
r=a2.length
if(n>=0)A.qS(a4,m,a6,n,l,r)
else{b=B.t.b7(r-1,4)+1
if(b===1)throw A.l(A.aV(a1,a4,a6))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aF(a4,a5,a6,a2.charCodeAt(0)==0?a2:a2)}a=a6-a5
if(n>=0)A.qS(a4,m,a6,n,l,a)
else{b=B.t.b7(a,4)
if(b===1)throw A.l(A.aV(a1,a4,a6))
if(b>1)a4=B.b.aF(a4,a6,a6,b===2?"==":"=")}return a4}}
A.ky.prototype={}
A.cS.prototype={}
A.hb.prototype={}
A.hm.prototype={}
A.eK.prototype={
l(a){var s=A.hn(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hP.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.hO.prototype={
aV(a,b,c){var s=A.x4(b,this.ghP().a)
return s},
aa(a,b){var s=A.vO(a,this.ghR().b,null)
return s},
ghR(){return B.j9},
ghP(){return B.j8}}
A.m3.prototype={}
A.m2.prototype={}
A.oo.prototype={
eD(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.t(a,r,q)
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
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.t(a,r,q)
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
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.t(a,r,q)
r=q+1
o=A.at(92)
s.a+=o
o=A.at(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.t(a,r,m)},
c2(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.l(new A.hP(a,null))}B.f.u(s,a)},
bP(a){var s,r,q,p,o=this
if(o.eC(a))return
o.c2(a)
try{s=o.b.$1(a)
if(!o.eC(s)){q=A.r9(a,null,o.gdM())
throw A.l(q)}q=o.a
if(0>=q.length)return A.t(q,-1)
q.pop()}catch(p){r=A.aL(p)
q=A.r9(a,r,o.gdM())
throw A.l(q)}},
eC(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.Y.l(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.eD(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c2(a)
q.iA(a)
s=q.a
if(0>=s.length)return A.t(s,-1)
s.pop()
return!0}else if(t.f.b(a)){q.c2(a)
r=q.iB(a)
s=q.a
if(0>=s.length)return A.t(s,-1)
s.pop()
return r}else return!1},
iA(a){var s,r,q=this.c
q.a+="["
s=J.al(a)
if(s.gM(a)){this.bP(s.j(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bP(s.j(a,r))}}q.a+="]"},
iB(a){var s,r,q,p,o,n=this,m={},l=J.al(a)
if(l.gB(a)){n.c.a+="{}"
return!0}s=l.gk(a)*2
r=A.hT(s,null,!1,t.X)
q=m.a=0
m.b=!0
l.N(a,new A.op(m,r))
if(!m.b)return!1
l=n.c
l.a+="{"
for(p='"';q<s;q+=2,p=',"'){l.a+=p
n.eD(A.U(r[q]))
l.a+='":'
o=q+1
if(!(o<s))return A.t(r,o)
n.bP(r[o])}l.a+="}"
return!0}}
A.op.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.f.i(s,r.a++,a)
B.f.i(s,r.a++,b)},
$S:16}
A.on.prototype={
gdM(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iS.prototype={}
A.nV.prototype={
cC(a){var s,r,q,p,o=a.length,n=A.dR(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.oE(r)
if(q.fA(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.t(a,p)
q.cu()}return new Uint8Array(r.subarray(0,A.wx(0,q.b,s)))}}
A.oE.prototype={
cu(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.bv(q)
s=q.length
if(!(p<s))return A.t(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.t(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.t(q,p)
q[p]=189},
hK(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.bv(r)
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
return!0}else{n.cu()
return!1}},
fA(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.t(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.t(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.bv(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.t(a,m)
if(k.hK(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cu()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.bv(s)
if(!(m<q))return A.t(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.bv(s)
if(!(m<q))return A.t(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.t(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.t(s,m)
s[m]=n&63|128}}}return o}}
A.nU.prototype={
cC(a){return new A.oB(this.a).fl(t.B.a(a),0,null,!0)}}
A.oB.prototype={
fl(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.B.a(a)
s=A.dR(b,c,J.bh(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.wm(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.wl(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.c8(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.wn(o)
l.b=0
throw A.l(A.aV(m,a,p+l.c))}return n},
c8(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.t.a9(b+c,2)
r=q.c8(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.c8(a,s,c,d)}return q.hO(a,b,c,d)},
hO(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.aY(""),d=b+1,c=a.length
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
e.a+=p}else{p=A.rn(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.at(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.oz.prototype={
$2(a,b){var s,r
A.U(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.b1(t.U.a(b)),r=this.a;s.m();){b=s.gp(s)
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.bF(b)}},
$S:2}
A.cT.prototype={
O(a,b){if(b==null)return!1
return b instanceof A.cT&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gL(a){return A.eW(this.a,this.b,B.V,B.V)},
l(a){var s=this,r=A.uW(A.vk(s)),q=A.hi(A.vi(s)),p=A.hi(A.ve(s)),o=A.hi(A.vf(s)),n=A.hi(A.vh(s)),m=A.hi(A.vj(s)),l=A.r_(A.vg(s)),k=s.b,j=k===0?"":A.r_(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.bw.prototype={
gi6(){return B.t.a9(this.a,1000)},
O(a,b){if(b==null)return!1
return b instanceof A.bw&&this.a===b.a},
gL(a){return B.t.gL(this.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.t.a9(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.t.a9(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.t.a9(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.b.er(B.t.l(n%1e6),6,"0")}}
A.o1.prototype={
l(a){return this.W()}}
A.ao.prototype={
gaI(){return A.vd(this)}}
A.fX.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hn(s)
return"Assertion failed"}}
A.cm.prototype={}
A.bO.prototype={
gcd(){return"Invalid argument"+(!this.a?"(s)":"")},
gcc(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.W(p),n=s.gcd()+q+o
if(!s.a)return n
return n+s.gcc()+": "+A.hn(s.gcL())},
gcL(){return this.b}}
A.eY.prototype={
gcL(){return A.rW(this.b)},
gcd(){return"RangeError"},
gcc(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.W(q):""
else if(q==null)s=": Not greater than or equal to "+A.W(r)
else if(q>r)s=": Not in inclusive range "+A.W(r)+".."+A.W(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.W(r)
return s}}
A.hJ.prototype={
gcL(){return A.b_(this.b)},
gcd(){return"RangeError"},
gcc(){if(A.b_(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.f8.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.iN.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.d_.prototype={
l(a){return"Bad state: "+this.a}}
A.h9.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hn(s)+"."}}
A.ia.prototype={
l(a){return"Out of Memory"},
gaI(){return null},
$iao:1}
A.f1.prototype={
l(a){return"Stack Overflow"},
gaI(){return null},
$iao:1}
A.o4.prototype={
l(a){return"Exception: "+this.a}}
A.bT.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.t(e,0,75)+"..."
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
k=""}return g+l+B.b.t(e,i,j)+k+"\n"+B.b.bQ(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.W(f)+")"):g}}
A.o.prototype={
ab(a,b,c){var s=A.N(this)
return A.bn(this,s.C(c).h("1(o.E)").a(b),s.h("o.E"),c)},
aG(a,b){var s=A.N(this)
return new A.aA(this,s.h("ab(o.E)").a(b),s.h("aA<o.E>"))},
J(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.r(q.gp(q))
if(!q.m())return s
if(b.length===0){r=s
do r+=J.r(q.gp(q))
while(q.m())}else{r=s
do r=r+b+J.r(q.gp(q))
while(q.m())}return r.charCodeAt(0)==0?r:r},
bO(a,b){var s=A.N(this).h("o.E")
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
if(!s.m())throw A.l(A.dF())
return s.gp(s)},
I(a,b){var s,r
A.eZ(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gp(s);--r}throw A.l(A.az(b,b-r,this,"index"))},
l(a){return A.v7(this,"(",")")}}
A.a1.prototype={
l(a){return"MapEntry("+A.W(this.a)+": "+A.W(this.b)+")"}}
A.aH.prototype={
gL(a){return A.Q.prototype.gL.call(this,0)},
l(a){return"null"}}
A.Q.prototype={$iQ:1,
O(a,b){return this===b},
gL(a){return A.eX(this)},
l(a){return"Instance of '"+A.ih(this)+"'"},
gU(a){return A.pt(this)},
toString(){return this.l(this)}}
A.jK.prototype={
l(a){return""},
$icB:1}
A.no.prototype={
geb(){var s,r=this.b
if(r==null)r=$.ii.$0()
s=r-this.a
if($.qH()===1e6)return s
return s*1000}}
A.aY.prototype={
gk(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ivu:1}
A.nT.prototype={
$2(a,b){var s,r,q,p
t.V.a(a)
A.U(b)
s=B.b.cK(b,"=")
if(s===-1){if(b!=="")J.ar(a,A.qg(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.t(b,0,s)
q=B.b.a5(b,s+1)
p=this.a
J.ar(a,A.qg(r,0,r.length,p,!0),A.qg(q,0,q.length,p,!0))}return a},
$S:79}
A.nS.prototype={
$2(a,b){throw A.l(A.aV("Illegal IPv6 address, "+a,this.a,b))},
$S:39}
A.fH.prototype={
gbz(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.W(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gL(a){var s,r=this,q=r.y
if(q===$){s=B.b.gL(r.gbz())
r.y!==$&&A.ty()
r.y=s
q=s}return q},
gcP(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.rw(s==null?"":s)
r.z!==$&&A.ty()
q=r.z=new A.c6(s,t.dw)}return q},
geA(){return this.b},
gaE(a){var s=this.c
if(s==null)return""
if(B.b.K(s,"[")&&!B.b.X(s,"v",1))return B.b.t(s,1,s.length-1)
return s},
gbN(a){var s=this.d
return s==null?A.rM(this.a):s},
gcO(a){var s=this.f
return s==null?"":s},
gei(){var s=this.r
return s==null?"":s},
cR(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
if(b!=null)k=A.qe(null,0,0,b)
else k=j.f
return A.qc(s,q,o,p,l,k,j.r)},
gen(){return this.a.length!==0},
gej(){return this.c!=null},
gem(){return this.f!=null},
gek(){return this.r!=null},
l(a){return this.gbz()},
O(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.dD.b(b))if(p.a===b.gac())if(p.c!=null===b.gej())if(p.b===b.geA())if(p.gaE(0)===b.gaE(b))if(p.gbN(0)===b.gbN(b))if(p.e===b.ges(b)){r=p.f
q=r==null
if(!q===b.gem()){if(q)r=""
if(r===b.gcO(b)){r=p.r
q=r==null
if(!q===b.gek()){s=q?"":r
s=s===b.gei()}}}}return s},
$iiP:1,
gac(){return this.a},
ges(a){return this.e}}
A.oy.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.oA(1,a,B.W,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.oA(1,b,B.W,!0)
s.a+=r}},
$S:73}
A.ox.prototype={
$2(a,b){var s,r
A.U(a)
if(b==null||typeof b=="string")this.a.$2(a,A.bF(b))
else for(s=J.b1(t.U.a(b)),r=this.a;s.m();)r.$2(a,A.U(s.gp(s)))},
$S:2}
A.nR.prototype={
gez(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.t(m,0)
s=o.a
m=m[0]+1
r=B.b.bL(s,"?",m)
q=s.length
if(r>=0){p=A.fI(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.j4("data","",n,n,A.fI(s,m,q,128,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.t(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jz.prototype={
gen(){return this.b>0},
gej(){return this.c>0},
gel(){return this.c>0&&this.d+1<this.e},
gem(){return this.f<this.r},
gek(){return this.r<this.a.length},
gac(){var s=this.w
return s==null?this.w=this.fe():s},
fe(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.K(r.a,"http"))return"http"
if(q===5&&B.b.K(r.a,"https"))return"https"
if(s&&B.b.K(r.a,"file"))return"file"
if(q===7&&B.b.K(r.a,"package"))return"package"
return B.b.t(r.a,0,q)},
geA(){var s=this.c,r=this.b+3
return s>r?B.b.t(this.a,r,s-1):""},
gaE(a){var s=this.c
return s>0?B.b.t(this.a,s,this.d):""},
gbN(a){var s,r=this
if(r.gel())return A.py(B.b.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.b.K(r.a,"http"))return 80
if(s===5&&B.b.K(r.a,"https"))return 443
return 0},
ges(a){return B.b.t(this.a,this.e,this.f)},
gcO(a){var s=this.f,r=this.r
return s<r?B.b.t(this.a,s+1,r):""},
gei(){var s=this.r,r=this.a
return s<r.length?B.b.a5(r,s+1):""},
gcP(){if(this.f>=this.r)return B.cx
return new A.c6(A.rw(this.gcO(0)),t.dw)},
cR(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
t.h.a(b)
s=h.gac()
r=s==="file"
q=h.c
p=q>0?B.b.t(h.a,h.b+3,q):""
o=h.gel()?h.gbN(0):g
q=h.c
if(q>0)n=B.b.t(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.b.t(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.b.K(l,"/"))l="/"+l
if(b!=null)j=A.qe(g,0,0,b)
else{k=h.r
j=m<k?B.b.t(q,m+1,k):g}m=h.r
i=m<q.length?B.b.a5(q,m+1):g
return A.qc(s,p,n,o,l,j,i)},
gL(a){var s=this.x
return s==null?this.x=B.b.gL(this.a):s},
O(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.l(0)},
l(a){return this.a},
$iiP:1}
A.j4.prototype={}
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
A.el.prototype={}
A.c2.prototype={
gk(a){return a.length}}
A.hc.prototype={
gk(a){return a.length}}
A.aj.prototype={$iaj:1}
A.dx.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.kY.prototype={}
A.b8.prototype={}
A.bP.prototype={}
A.hd.prototype={
gk(a){return a.length}}
A.he.prototype={
gk(a){return a.length}}
A.hh.prototype={
gk(a){return a.length}}
A.hj.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.er.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.es.prototype={
l(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.W(r)+", "+A.W(s)+") "+A.W(this.gaH(a))+" x "+A.W(this.gaD(a))},
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
s=this.gaH(a)===s.gaH(b)&&this.gaD(a)===s.gaD(b)}}}return s},
gL(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.eW(r,s,this.gaH(a),this.gaD(a))},
gdC(a){return a.height},
gaD(a){var s=this.gdC(a)
s.toString
return s},
ge6(a){return a.width},
gaH(a){var s=this.ge6(a)
s.toString
return s},
$ibW:1}
A.hk.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.hl.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.I.prototype={
l(a){var s=a.localName
s.toString
return s}}
A.v.prototype={}
A.bj.prototype={$ibj:1}
A.ho.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.hp.prototype={
gk(a){return a.length}}
A.hB.prototype={
gk(a){return a.length}}
A.bl.prototype={$ibl:1}
A.hG.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.hV.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.hW.prototype={
gk(a){return a.length}}
A.hX.prototype={
j(a,b){return A.cI(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cI(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.m8(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.m9(s))
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
throw A.l(A.R("Not supported"))},
T(a,b){throw A.l(A.R("Not supported"))},
$iz:1}
A.m8.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.m9.prototype={
$2(a,b){return B.f.u(this.a,t.f.a(b))},
$S:2}
A.hY.prototype={
j(a,b){return A.cI(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cI(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.ma(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.mb(s))
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
throw A.l(A.R("Not supported"))},
T(a,b){throw A.l(A.R("Not supported"))},
$iz:1}
A.ma.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.mb.prototype={
$2(a,b){return B.f.u(this.a,t.f.a(b))},
$S:2}
A.bo.prototype={$ibo:1}
A.hZ.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.a2.prototype={
l(a){var s=a.nodeValue
return s==null?this.eI(a):s},
$ia2:1}
A.eU.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.bp.prototype={
gk(a){return a.length},
$ibp:1}
A.ie.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.ik.prototype={
j(a,b){return A.cI(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cI(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.nb(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.nc(s))
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
throw A.l(A.R("Not supported"))},
T(a,b){throw A.l(A.R("Not supported"))},
$iz:1}
A.nb.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.nc.prototype={
$2(a,b){return B.f.u(this.a,t.f.a(b))},
$S:2}
A.im.prototype={
gk(a){return a.length}}
A.bq.prototype={$ibq:1}
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
i(a,b,c){t.fY.a(c)
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.br.prototype={$ibr:1}
A.ip.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.bs.prototype={
gk(a){return a.length},
$ibs:1}
A.it.prototype={
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
this.N(a,new A.np(s))
return s},
ga2(a){var s=A.e([],t.s)
this.N(a,new A.nq(s))
return s},
gk(a){var s=a.length
s.toString
return s},
gB(a){return a.key(0)==null},
gM(a){return a.key(0)!=null},
$iz:1}
A.np.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:18}
A.nq.prototype={
$2(a,b){return B.f.u(this.a,b)},
$S:18}
A.b4.prototype={$ib4:1}
A.f6.prototype={
siy(a,b){a.value=b}}
A.bt.prototype={$ibt:1}
A.b5.prototype={$ib5:1}
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
i(a,b,c){t.do.a(c)
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.iE.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.iG.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.bu.prototype={$ibu:1}
A.iI.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.iJ.prototype={
gk(a){return a.length}}
A.iR.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.iT.prototype={
gk(a){return a.length}}
A.j2.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.fc.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.W(p)+", "+A.W(s)+") "+A.W(r)+" x "+A.W(q)},
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
if(r===q.gaH(b)){s=a.height
s.toString
q=s===q.gaD(b)
s=q}}}}return s},
gL(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.eW(p,s,r,q)},
gdC(a){return a.height},
gaD(a){var s=a.height
s.toString
return s},
ge6(a){return a.width},
gaH(a){var s=a.width
s.toString
return s}}
A.jf.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.l(A.az(b,s,a,null))
return a[b]},
i(a,b,c){t.g7.a(c)
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){if(a.length>0)return a[0]
throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.fo.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.jD.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.jL.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.t(a,b)
return a[b]},
$iD:1,
$ia3:1,
$io:1,
$iC:1}
A.P.prototype={
gv(a){return new A.ex(a,this.gk(a),A.aC(a).h("ex<P.E>"))},
u(a,b){A.aC(a).h("P.E").a(b)
throw A.l(A.R("Cannot add to immutable List."))}}
A.ex.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.M(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gp(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
$iah:1}
A.j3.prototype={}
A.j5.prototype={}
A.j6.prototype={}
A.j7.prototype={}
A.j8.prototype={}
A.ja.prototype={}
A.jb.prototype={}
A.jg.prototype={}
A.jh.prototype={}
A.jn.prototype={}
A.jo.prototype={}
A.jp.prototype={}
A.jq.prototype={}
A.jr.prototype={}
A.js.prototype={}
A.jv.prototype={}
A.jw.prototype={}
A.jy.prototype={}
A.fu.prototype={}
A.fv.prototype={}
A.jB.prototype={}
A.jC.prototype={}
A.jE.prototype={}
A.jM.prototype={}
A.jN.prototype={}
A.fy.prototype={}
A.fz.prototype={}
A.jP.prototype={}
A.jQ.prototype={}
A.jU.prototype={}
A.jV.prototype={}
A.jW.prototype={}
A.jX.prototype={}
A.jY.prototype={}
A.jZ.prototype={}
A.k_.prototype={}
A.k0.prototype={}
A.k1.prototype={}
A.k2.prototype={}
A.mw.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pE.prototype={
$1(a){return this.a.aT(0,this.b.h("0/?").a(a))},
$S:7}
A.pF.prototype={
$1(a){if(a==null)return this.a.ah(new A.mw(a===undefined))
return this.a.ah(a)},
$S:7}
A.pp.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.t5(a))return a
s=this.a
a.toString
if(s.a1(0,a))return s.j(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.ca(A.aQ(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fO(!0,"isUtc",t.y)
return new A.cT(r,0,!0)}if(a instanceof RegExp)throw A.l(A.c0("structured clone of RegExp",null))
if(a instanceof Promise)return A.xY(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.Z(p,p)
s.i(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bM(n),p=s.gv(n);p.m();)m.push(A.tk(p.gp(p)))
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
A.by.prototype={$iby:1}
A.hR.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$io:1,
$iC:1}
A.bB.prototype={$ibB:1}
A.i8.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$io:1,
$iC:1}
A.ig.prototype={
gk(a){return a.length}}
A.iv.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$io:1,
$iC:1}
A.bD.prototype={$ibD:1}
A.iK.prototype={
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
throw A.l(A.R("Cannot assign element of immutable List."))},
sk(a,b){throw A.l(A.R("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.l(A.ak("No elements"))},
I(a,b){return this.j(a,b)},
$iD:1,
$io:1,
$iC:1}
A.jk.prototype={}
A.jl.prototype={}
A.jt.prototype={}
A.ju.prototype={}
A.jI.prototype={}
A.jJ.prototype={}
A.jR.prototype={}
A.jS.prototype={}
A.fZ.prototype={
gk(a){return a.length}}
A.h_.prototype={
j(a,b){return A.cI(a.get(A.U(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cI(r.value[1]))}},
gR(a){var s=A.e([],t.s)
this.N(a,new A.kl(s))
return s},
ga2(a){var s=A.e([],t.Q)
this.N(a,new A.km(s))
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
throw A.l(A.R("Not supported"))},
T(a,b){throw A.l(A.R("Not supported"))},
$iz:1}
A.kl.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.km.prototype={
$2(a,b){return B.f.u(this.a,t.f.a(b))},
$S:2}
A.h0.prototype={
gk(a){return a.length}}
A.cv.prototype={}
A.i9.prototype={
gk(a){return a.length}}
A.j0.prototype={}
A.e_.prototype={
W(){return"WebSocketConnectionState."+this.b}}
A.cy.prototype={
W(){return"FlintErrorKind."+this.b}}
A.eA.prototype={
W(){return"FlintResponseType."+this.b}}
A.nn.prototype={}
A.bQ.prototype={
l(a){var s,r=this,q="FlintError: "+r.a,p=r.b
if(p!=null)q+=" (Status: "+A.W(p)+")"
q+=" [Kind: "+r.r.b+"]"
p=r.e
if(p!=null){s=r.f
s=s==null?null:s.toUpperCase()
if(s==null)s="GET"
p=q+(" ["+s+" "+p.l(0)+"]")
q=p}return q.charCodeAt(0)==0?q:q}}
A.c4.prototype={}
A.l1.prototype={
iC(a){var s,r,q,p,o,n=null,m=t.N,l=A.b9(this.b,m,m)
l=new A.af(l,A.N(l).h("af<1,2>")).gv(0)
for(;;){if(!l.m()){s=n
break}r=l.d
if(r.a.toLowerCase()==="authorization"){s=r.b
break}}q=s!=null&&B.b.K(s,"Bearer ")?B.b.a5(s,7):n
p=this.a
if(B.b.ec(p,"/"))p=B.b.t(p,0,p.length-1)
o=B.b.K(a,"/")?a:"/"+a
return new A.li(B.b.cS(p+o,A.bX("^http",!0,!1),"ws"),n,!1,!1,"token",q,n,A.Z(m,t.gz),A.e([],t.c7),B.ak)},
b6(a,b,c,d,e,f,g,h,i,j,k){return this.im(0,b,c,d,t.v.a(e),f,g,h,i,j,k,k.h("c4<0>"))},
im(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var s=0,r=A.be(b4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$b6=A.bf(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:a0=n.hI(a5,b1)
a1=new A.no()
$.qH()
f=$.ii.$0()
a1.a=f
a1.b=null
m=a1
p=4
s=7
return A.b0(n.hj(a4.toUpperCase(),a0,a6,a7,b0,n.d,b3),$async$b6)
case 7:l=b6
f=m
if(f.b==null)f.b=$.ii.$0()
f=l.a
e=l.b
d=l.d
c=l.e
b=A.cE(a0,0,null)
k=A.r1(e,A.kZ(m.geb(),0,0),c,a4,f,n.x,d,b,b3)
n.dv(k,null,a8,b3)
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
if(f.b==null)f.b=$.ii.$0()
i=j instanceof A.bQ?j:A.uZ(j,a4,A.cE(a0,0,null))
A.kZ(m.geb(),0,0)
f=i.b
if(f==null)f=500
h=new A.c4(f,null,B.cd,null,!1,n.x,b3.h("c4<0>"))
n.dv(h,i,a8,b3)
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
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$b6,r)},
hj(a,b,c,d,e,f,g){var s,r,q,p,o,n,m
t.v.a(d)
s=A.y(new v.G.XMLHttpRequest())
r=new A.an($.ag,g.h("an<c4<0>>"))
q=new A.co(r,g.h("co<c4<0>>"))
p=t.N
p=A.Z(p,p)
p.i(0,"Accept","application/json")
p.S(0,this.b)
if(d!=null)p.S(0,d)
o=this.f7(0,c,p)
s.open(a,b,!0)
s.withCredentials=!0
for(p=new A.af(p,p.$ti.h("af<1,2>")).gv(0);p.m();){n=p.d
s.setRequestHeader(n.a,n.b)}p=t.an
m=t.m
A.cF(s,"load",p.a(new A.l3(this,s,e,b,a,q,g)),!1,m)
A.cF(s,"error",p.a(new A.l4(q,b,a)),!1,m)
if(o==null)s.send()
else s.send(o)
return r.is(0,f,new A.l5(s,f,b,a))},
hI(a,b){var s,r,q,p,o,n=this.a
if(B.b.ec(n,"/"))n=B.b.t(n,0,n.length-1)
s=A.cE(n+(B.b.K(a,"/")?a:"/"+a),0,null)
r=t.N
q=A.b9(s.gcP(),r,t.z)
q.S(0,this.c)
r=A.Z(r,r)
for(q=new A.af(q,A.N(q).h("af<1,2>")).gv(0);q.m();){p=q.d
o=p.b
if(o!=null)r.i(0,p.a,J.r(o))}return s.cR(0,r.a===0?null:r).gbz()},
f7(a,b,c){t.V.a(c)
if(b==null)return null
c.cN(0,"Content-Type",new A.l2())
return B.E.aa(b,null)},
h2(a,b,c,d){var s
if(B.b.D(a).length===0)return new A.cG(null,B.cd,d.h("cG<0>"))
if(B.b.H(b.toLowerCase(),"json")||B.b.K(B.b.ex(a),"{")||B.b.K(B.b.ex(a),"[")){s=d.h("0?").a(B.E.aV(0,a,null))
return new A.cG(s,B.il,d.h("cG<0>"))}d.h("0?").a(a)
return new A.cG(a,B.im,d.h("cG<0>"))},
hd(a){var s,r,q,p,o=t.N,n=A.Z(o,o)
for(o=B.b.eH(a,A.bX("\\r?\\n",!0,!1)),s=o.length,r=0;r<o.length;o.length===s||(0,A.aE)(o),++r){q=o[r]
if(B.b.D(q).length===0)continue
p=B.b.cK(q,":")
if(p<=0)continue
n.i(0,B.b.t(q,0,p).toLowerCase(),B.b.D(B.b.a5(q,p+1)))}return n},
dv(a,b,c,d){d.h("c4<0>").a(a)}}
A.l3.prototype={
$1(a){var s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=A.U(l.responseText),j=A.bF(l.getResponseHeader("content-type"))
if(j==null)j=""
s=o.r
r=m.h2(k,j,o.c,s)
j=A.b_(l.status)
k=o.d
q=o.e
p=A.r1(r.a,n,m.hd(A.U(l.getAllResponseHeaders())),q,j,m.x,r.b,A.cE(k,0,n),s)
m=p.a
l=o.f
if(B.aJ.H(0,m))l.aT(0,p)
else l.ah(A.hu("HTTP "+m,p.b,B.b7,q,n,m,n,A.cE(k,0,n)))},
$S:4}
A.l4.prototype={
$1(a){var s=null
this.a.ah(A.hu("Network request failed",s,B.cc,this.c,s,s,s,A.cE(this.b,0,s)))},
$S:4}
A.l5.prototype={
$0(){var s=this,r=null
s.a.abort()
throw A.l(A.hu("Request timed out after "+s.b.gi6()+"ms",r,B.cb,s.d,r,r,r,A.cE(s.c,0,r)))},
$S:77}
A.l2.prototype={
$0(){return"application/json"},
$S:29}
A.li.prototype={
bq(){var s=0,r=A.be(t.dk),q,p=this,o,n
var $async$bq=A.bf(function(a,b){if(a===1)return A.bb(b,r)
for(;;)switch(s){case 0:o=A.rA(null,t.dk)
s=3
return A.b0(o,$async$bq)
case 3:n=b
q=n==null?p.y:n
s=1
break
case 1:return A.bc(q,r)}})
return A.bd($async$bq,r)},
bb(){var s=0,r=A.be(t.N),q,p=this,o,n
var $async$bb=A.bf(function(a,b){if(a===1)return A.bb(b,r)
for(;;)switch(s){case 0:s=3
return A.b0(p.bq(),$async$bb)
case 3:o=A.cE(p.a,0,null)
n=t.N
n=A.b9(o.gcP(),n,n)
q=o.cR(0,n.a===0?null:n).gbz()
s=1
break
case 1:return A.bc(q,r)}})
return A.bd($async$bb,r)},
aU(){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aU=A.bf(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.cx
if(h===B.al||h===B.cK){s=1
break}n.ax=!1
n.ar(B.cK)
p=4
s=7
return A.b0(n.bb(),$async$aU)
case 7:m=b
l=A.y(new v.G.WebSocket(m))
n.x=l
h=t.an
j=t.m
A.cF(l,"open",h.a(new A.ll(n)),!1,j)
A.cF(l,"message",h.a(new A.lm(n)),!1,j)
A.cF(l,"error",h.a(new A.ln(n)),!1,j)
A.cF(l,"close",h.a(new A.lo(n)),!1,j)
p=2
s=6
break
case 4:p=3
g=o.pop()
k=A.aL(g)
n.bl(k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$aU,r)},
hM(a,b,c){var s,r,q=this
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
J.uJ(this.Q.cN(0,b,new A.lp()),c)},
hQ(a,b){var s,r=A.ai(["event",a,"data",b],t.N,t.z),q=this.x
if(q!=null&&this.cx===B.al)try{q.send(B.E.aa(r,null))
return}catch(s){}B.f.u(this.as,r)},
fM(a){var s,r,q,p,o=this,n="message"
try{s=B.E.aV(0,J.r(a),null)
if(t.P.b(s)){r=J.M(s,"event")
q=J.M(s,"data")
if(J.a9(r,"pong")){o.CW=new A.cT(Date.now(),0,!1)
return}if(typeof r=="string"&&r.length!==0)o.a3(r,q)
else o.a3(n,s)}else o.a3(n,s)}catch(p){o.a3(n,a)}},
bl(a){var s,r,q=this
if(q.cx===B.ak)return
s=q.ch
if(s!=null)s.ag(0)
q.ch=null
q.a3("disconnect",a)
if(q.ax){q.ar(B.ak)
return}if(q.at)return
q.at=!0
q.ar(B.mp)
s=q.ay
if(s>=5){q.at=!1
q.ar(B.ak)
q.c9("reconnect_failed")
return}r=A.kZ(0,0,3*B.t.hm(1,s));++s
q.ay=s
q.a3("reconnect_scheduled",A.ai(["attempt",s,"delaySeconds",B.t.a9(r.a,1e6)],t.N,t.S))
A.c5(r,new A.lj(q))},
ar(a){if(this.cx===a)return
this.cx=a
this.a3("state_change",a)},
a3(a,b){var s,r,q,p=this.Q.j(0,a)
if(p==null)return
for(s=A.eO(p,!0,t.Z),r=s.length,q=0;q<r;++q)s[q].$1(b)},
c9(a){return this.a3(a,null)},
fD(){var s,r,q,p,o,n,m,l=this
if(l.cx!==B.al||l.x==null)return
for(r=l.as,q=A.eO(r,!0,t.P),p=q.length,o=0;o<p;++o){s=q[o]
try{n=l.x
n.toString
n.send(B.E.aa(s,null))
B.f.T(r,s)}catch(m){break}}},
hs(){var s=this.ch
if(s!=null)s.ag(0)
this.ch=A.rq(B.hg,new A.lk(this))}}
A.ll.prototype={
$1(a){var s=this.a
s.ar(B.al)
s.ay=0
s.CW=new A.cT(Date.now(),0,!1)
s.c9("connect")
s.c9("open")
s.hs()
s.fD()},
$S:4}
A.lm.prototype={
$1(a){this.a.fM(A.tk(a.data))},
$S:4}
A.ln.prototype={
$1(a){var s=this.a
s.a3("error",a)
s.bl(a)},
$S:4}
A.lo.prototype={
$1(a){var s=this.a
s.a3("close",a)
s.bl(a)},
$S:4}
A.lp.prototype={
$0(){return A.e([],t.g_)},
$S:38}
A.lj.prototype={
$0(){var s=0,r=A.be(t.H),q,p=this,o
var $async$$0=A.bf(function(a,b){if(a===1)return A.bb(b,r)
for(;;)switch(s){case 0:o=p.a
o.at=!1
if(o.ax){s=1
break}s=3
return A.b0(o.aU(),$async$$0)
case 3:case 1:return A.bc(q,r)}})
return A.bd($async$$0,r)},
$S:20}
A.lk.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
if(s.cx!==B.al||s.x==null){a.ag(0)
return}if(s.CW!=null){r=Date.now()
q=s.CW
p=q.a
p=A.kZ(0-q.b,r-p,0).a>3e7
r=p}else r=!1
if(r){s.bl("Heartbeat timeout")
return}r=t.z
s.hQ("ping",A.Z(r,r))},
$S:21}
A.cG.prototype={}
A.kv.prototype={
gV(){var s=A.bF(A.y(A.y(v.G.window).localStorage).getItem("auth.token"))
if(s==null||s.length===0)return null
return s},
gak(a){var s=J.M(B.an.cQ("auth.user"),"role")
return s==null?null:J.r(s)}}
A.l6.prototype={
hi(){if(this.d)return
this.d=!0
A.pI(new A.lf(this))},
h1(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return
s=n.a
r=A.ry(s)
q=n.c
p=A.Z(t.N,t.e)
s.textContent=""
A.y(s.appendChild(n.bf(m,"0",q,p)))
n.dT(r,s)
for(s=new A.af(q,A.N(q).h("af<1,2>")).gv(0);s.m();){o=s.d
if(!p.a1(0,o.a))n.bA(o.b)}n.c=p
n.e=!0},
bf(a,b,c,d){var s=this,r=t.A
r.a(c)
r.a(d)
A:{if(a instanceof A.cz){r=A.y(A.y(v.G.document).createTextNode(a.a))
break A}if(a instanceof A.ey){r=s.fs(a.a,b,c,d)
break A}if(a instanceof A.a7){r=s.fq(0,a.a,a.b,a.c,b,c,d)
break A}if(a instanceof A.Y){r=s.ds(a,b,c,d)
break A}if(a instanceof A.dA){r=s.ds(a.a,b,c,d)
break A}r=A.ca(A.R("Unsupported FlintNode type: "+A.pt(a).l(0)))}return r},
fs(a,b,c,d){var s,r,q
t.aw.a(a)
s=t.A
s.a(c)
s.a(d)
r=A.y(A.y(v.G.document).createDocumentFragment())
for(s=b+".",q=0;q<a.length;++q)A.y(r.appendChild(this.bf(a[q],s+q,c,d)))
return r},
fq(a,b,c,d,e,f,g){var s,r,q
t.L.a(c)
t.aw.a(d)
s=t.A
s.a(f)
s.a(g)
r=this.fp(b)
this.eZ(r,c)
for(s=e+".",q=0;q<d.length;++q)A.y(r.appendChild(this.bf(d[q],s+q,f,g)))
return r},
fp(a){if(B.lV.H(0,a))return A.y(A.y(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
return A.y(A.y(v.G.document).createElement(a))},
ds(a,b,c,d){var s,r,q,p
t.dH.a(a)
s=t.A
s.a(c)
s.a(d)
r=c.j(0,b)
s=r!=null
if(s){A.pt(r.a)
A.pt(a)}q=A.y(A.y(v.G.document).createElement("flint-component"))
p=new A.fb(a,q,A.Z(t.N,t.e))
if(s)this.bA(r)
d.i(0,b,p)
a.a=t.M.a(new A.la(this,p))
this.dS(p)
A.pI(a.gaw())
return q},
hh(a){if(a.d)return
a.d=!0
A.pI(new A.le(this,a))},
dS(a){var s,r=this,q=a.c,p=A.Z(t.N,t.e),o=a.b,n=A.ry(o)
o.textContent=""
o.setAttribute("style","display: contents;")
A.y(o.appendChild(r.bf(r.dL(a.a.E()),"c",q,p)))
r.dT(n,o)
for(o=new A.af(q,A.N(q).h("af<1,2>")).gv(0);o.m();){s=o.d
if(!p.a1(0,s.a))r.bA(s.b)}a.shL(p)
a.e=!0},
dT(a,b){if(a==null)return
a.cT(0,b)
A.pI(new A.lc(a,b))
A.c5(B.aW,new A.ld(a,b))},
bA(a){var s
for(s=a.c,s=new A.cY(s,s.r,s.e,A.N(s).h("cY<2>"));s.m();)this.bA(s.d)
a.a.cX()},
eZ(a,b){t.L.a(b).N(0,new A.l7(this,a))},
eX(a,b,c){var s,r
if(b==="value"){s=J.r(c)
if(A.U(a.value)!==s)a.value=s
return!0}if(b==="checked"){r=J.bg(c)
a.checked=r.O(c,!0)
if(r.O(c,!0))a.setAttribute(b,"")
return!0}return!1},
eY(a,b,c){var s
if(b==="muted"){s=J.bg(c)
a.muted=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="controls"){s=J.bg(c)
a.controls=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="autoplay"){s=J.bg(c)
a.autoplay=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="loop"){s=J.bg(c)
a.loop=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="playsinline"){s=J.bg(c)
a.playsInline=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}return!1},
hc(a){var s,r,q,p
if(B.b.D(a).length===0)return
s="flint-style-"+B.b.gL(a)
r=v.G
if(A.aR(A.y(r.document).querySelector('style[data-flint-style-id="'+s+'"]'))!=null)return
q=A.aR(A.y(r.document).querySelector("head"))
if(q==null)return
p=A.y(A.y(r.document).createElement("style"))
p.setAttribute("data-flint-style-id",s)
p.textContent=a
A.y(q.appendChild(p))},
f_(a,b){if(typeof b=="string"){a.setAttribute("style",b)
return}if(t.L.b(b))a.setAttribute("style",J.eh(b).aG(0,new A.l8()).ab(0,new A.l9(),t.N).J(0,"; "))},
fY(a,b,c){a.addEventListener(b,A.oM(new A.lb(c)))},
dL(a){var s
if(a instanceof A.J)return a
if(a instanceof A.Y)return new A.dA(a)
s=a==null?null:J.r(a)
return new A.cz(s==null?"":s)}}
A.lf.prototype={
$0(){var s=this.a
s.d=!1
s.h1()},
$S:0}
A.la.prototype={
$0(){return this.a.hh(this.b)},
$S:0}
A.le.prototype={
$0(){var s=this.b
s.d=!1
this.a.dS(s)
if(s.e)s.a.bD()},
$S:0}
A.lc.prototype={
$0(){return this.a.cT(0,this.b)},
$S:0}
A.ld.prototype={
$0(){return this.a.cT(0,this.b)},
$S:0}
A.l7.prototype={
$2(a,b){var s,r,q=this
A.U(a)
if(b==null||J.a9(b,!1))return
if(a==="_flintStyleCss"){q.a.hc(J.r(b))
return}if(a==="_flintMediaController")return
if(a==="_flintCanvasController")return
if(a==="_flintThreeSceneController")return
if(a==="className"){q.b.className=J.r(b)
return}if(a==="style"){q.a.f_(q.b,b)
return}s=q.a
r=q.b
if(s.eX(r,a,b))return
if(s.eY(r,a,b))return
if(B.b.K(a,"on")&&t.Z.b(b)){s.fY(r,B.b.a5(a,2).toLowerCase(),b)
return}s=J.bg(b)
if(s.O(b,!0)){r.setAttribute(a,"")
return}r.setAttribute(a,s.l(b))},
$S:76}
A.l8.prototype={
$1(a){return t.d.a(a).b!=null},
$S:9}
A.l9.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.W(a.b)},
$S:10}
A.lb.prototype={
$1(a){this.a.$1(A.y(a))},
$S:13}
A.fb.prototype={
shL(a){this.c=t.A.a(a)}}
A.nX.prototype={
cT(a,b){var s,r=this.fB(b)
if(r==null)return
s=this.b
if(A.U(r.value)!==s)r.value=s
r.focus()
this.he(r)
return},
fB(a){var s,r,q,p,o,n=this,m=n.fC(a)
if(m!=null)return m
s=n.c
if(s!=null){r=A.aR(A.y(v.G.document).getElementById(s))
if(r!=null&&A.e7(a.contains(r))&&n.dG(r))return r}q=A.y(a.querySelectorAll(n.a))
for(s=t.m,p=0;p<A.b_(q.length);++p){o=A.aR(q.item(p))
if(s.b(o)&&n.dG(o))return o}return null},
fC(a){var s,r,q,p,o,n,m=null,l=this.f
if(l==null||l.length===0)return m
for(s=l.length,r=a,q=0;q<l.length;l.length===s||(0,A.aE)(l),++q,r=n){p=l[q]
o=A.y(r.childNodes)
if(p<0||p>=A.b_(o.length))return m
n=A.aR(o.item(p))
if(n==null)return m}s=this.dH(r,!0)
if(s)return r
return m},
dH(a,b){var s,r,q,p=this
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
dG(a){return this.dH(a,!1)},
he(a){var s,r=this.r,q=this.w
if(r==null||q==null)return
try{a.setSelectionRange(r,q)}catch(s){}}}
A.kU.prototype={
cY(a,b,c,d){var s=null
t.v.a(c)
return this.a.b6(0,"GET",this.dN(b),s,c,s,s,s,s,s,d)},
eE(a,b,c){return this.cY(0,b,null,c)},
aj(a,b,c,d){var s=null
t.v.a(c)
return this.a.b6(0,"POST",this.dN(a),b,c,s,s,s,s,s,d)},
ig(a,b,c){return this.aj(a,b,null,c)},
ih(a,b,c){return this.aj(a,null,b,c)},
dN(a){var s=B.b.D(a),r=A.q4(s)
if(r!=null&&r.gen()&&r.gaE(r).length!==0)return s
return this.fW("",s)},
fW(a,b){var s,r=B.b.D(a),q=B.b.D(b)
if(r.length===0){if(q.length===0)s="/"
else s=B.b.K(q,"/")?q:"/"+q
return s}if(q.length===0||q==="/")return B.b.K(r,"/")?r:"/"+r
s=B.b.K(r,"/")?r:"/"+r
return B.b.cS(s,A.bX("/+$",!0,!1),"")+"/"+B.b.cS(q,A.bX("^/+",!0,!1),"")}}
A.Y.prototype={
q(a){var s
t.M.a(a).$0()
s=this.a
if(s!=null)s.$0()},
a4(){},
bD(){},
cX(){}}
A.ir.prototype={}
A.pD.prototype={
$1(a){return B.b.D(A.U(a)).length!==0},
$S:8}
A.pA.prototype={
$1(a){A.bF(a)
return a!=null&&B.b.D(a).length!==0},
$S:32}
A.pB.prototype={
$1(a){A.bF(a)
a.toString
return B.b.D(a)},
$S:33}
A.pK.prototype={
$1(a){t.d.a(a)
return a.b!=null&&a.a!=="_cssText"},
$S:9}
A.pL.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.W(a.b)},
$S:10}
A.oQ.prototype={
$1(a){t.dv.a(a)
return a.a+":"+A.pJ(a.b.a7())},
$S:34}
A.oR.prototype={
$1(a){t.ce.a(a)
return a.a.c+":"+A.pJ(a.b.a7())},
$S:35}
A.oS.prototype={
$1(a){t.ah.a(a)
return a.a.b+":"+A.pJ(a.b.a7())},
$S:36}
A.oT.prototype={
$1(a){t.d.a(a)
return a.b!=null&&a.a!=="_cssText"},
$S:9}
A.oU.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.W(a.b)+" !important"},
$S:10}
A.my.prototype={}
A.h4.prototype={
ik(a){A.y(A.y(v.G.window).location).reload()}}
A.J.prototype={}
A.cz.prototype={}
A.ey.prototype={}
A.a7.prototype={}
A.dA.prototype={}
A.nK.prototype={
W(){return"ToastPlacement."+this.b}}
A.nL.prototype={
ad(a,b){this.dU(a,"#a7f3d0","#052e22","rgba(52, 211, 153, 0.38)",B.hh,b,B.cJ)},
P(a,b,c){this.dU(b,"#fca5a5","#450a0a","rgba(248, 113, 113, 0.42)",B.hk,c,B.cJ)},
dU(a,b,c,d,e,f,g){var s,r,q=this.ff(g),p=v.G,o=A.y(A.y(p.document).createElement("div")),n=A.y(o.style)
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
s=A.y(A.y(p.document).createElement("strong"))
s.textContent=a
n=A.y(s.style)
n.fontSize="13px"
n.fontWeight="800"
n.color=b
A.y(o.appendChild(s))
if(f!=null&&B.b.D(f).length!==0){r=A.y(A.y(p.document).createElement("p"))
r.textContent=f
p=A.y(r.style)
p.margin="0"
p.fontSize="12px"
p.lineHeight="1.5"
p.color="#cbd5e1"
A.y(o.appendChild(r))}A.y(q.appendChild(o))
A.c5(B.aW,new A.nN(o))
A.c5(e,new A.nO(o,q))},
ff(a){var s,r,q="flint-toast-"+a.b,p=v.G,o=A.aR(A.y(p.document).getElementById(q))
if(t.m.b(o))return o
s=A.y(A.y(p.document).createElement("div"))
s.id=q
r=A.y(s.style)
r.position="fixed"
r.zIndex="2147483647"
r.display="grid"
r.gap="10px"
r.pointerEvents="none"
switch(a.a){case 0:r=A.y(s.style)
r.top="20px"
r.right="20px"
break
case 1:r=A.y(s.style)
r.top="20px"
r.left="50%"
r.transform="translateX(-50%)"
break
case 2:r=A.y(s.style)
r.right="20px"
r.bottom="20px"
break
case 3:r=A.y(s.style)
r.left="50%"
r.bottom="20px"
r.transform="translateX(-50%)"
break}p=A.aR(A.y(p.document).body)
if(p!=null)A.y(p.appendChild(s))
return s}}
A.nN.prototype={
$0(){var s=A.y(this.a.style)
s.opacity="1"
s.transform="translateY(0) scale(1)"},
$S:0}
A.nO.prototype={
$0(){var s=this.a,r=A.y(s.style)
r.opacity="0"
r.transform="translateY(-8px) scale(0.96)"
A.c5(B.hf,new A.nM(s,this.b))},
$S:0}
A.nM.prototype={
$0(){this.a.remove()
var s=this.b
if(A.b_(s.childElementCount)===0)s.remove()},
$S:0}
A.ez.prototype={}
A.hv.prototype={}
A.po.prototype={
$2(a,b){var s=0,r=A.be(t.H),q,p=this,o,n,m,l,k,j
var $async$$2=A.bf(function(c,d){if(c===1)return A.bb(d,r)
for(;;)switch(s){case 0:j=new A.hv()
for(o=p.c,n=0;!1;++n)o[n].$1(j)
o=a.a
m=p.d.a.j(0,o)
if(m==null)l=null
else l=m
s=l==null?3:4
break
case 3:m=A.rA(null,t.bp)
s=5
return A.b0(m,$async$$2)
case 5:l=d
case 4:if(b!==p.a.a){s=1
break}if(l==null)throw A.l(A.ak('Flint page "'+o+'" was not registered.'))
k=l.$1(a.b)
if(k==null)k=p.r.$1(o)
o=p.w
o.b=o.dL(k)
o.hi()
case 1:return A.bc(q,r)}})
return A.bd($async$$2,r)},
$S:37}
A.pn.prototype={
$0(){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.bf(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=++j.a
p=4
s=7
return A.b0(A.wD(n.b),$async$$0)
case 7:m=b
if(!J.a9(i,j.a)){s=1
break}n.c.setAttribute("data-flint-page",B.E.aa(m.a,null))
if(m.b!=null&&m.b.length!==0){j=A.y(v.G.document)
l=m.b
l.toString
j.title=l}s=8
return A.b0(n.d.$2(A.r0(m.a),i),$async$$0)
case 8:p=2
s=6
break
case 4:p=3
h=o.pop()
j=v.G
A.y(A.y(j.window).location).assign(A.U(A.y(A.y(j.window).location).pathname)+A.U(A.y(A.y(j.window).location).search))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$$0,r)},
$S:20}
A.pl.prototype={
$1(a){A.y(a)
this.a.$0()},
$S:13}
A.pm.prototype={
$1(a){A.y(a)
this.a.$0()},
$S:13}
A.oG.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.oK.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.a
if(A.b_(k.status)<200||A.b_(k.status)>=300){l.b.ah(new A.d_("HTTP "+A.b_(k.status)))
return}try{r=A.U(k.responseText)
q=A.y(A.y(v.G.document).createElement("div"))
q.innerHTML=r
p=A.aR(q.querySelector(l.c))
if(p==null)p=A.aR(q.querySelector("[data-flint-page]"))
o=p==null?null:A.bF(p.getAttribute("data-flint-page"))
if(o==null||B.b.D(o).length===0)A.ca(A.ak("Missing data-flint-page payload in fetched page."))
n=B.E.aV(0,o,null)
if(!t.P.b(n))A.ca(A.ak("Invalid fetched Flint page payload."))
l.b.aT(0,new A.ff(n,A.xl(r)))}catch(m){s=A.aL(m)
l.b.ah(s)}},
$S:4}
A.oL.prototype={
$1(a){this.a.ah(new A.d_("Navigation request failed."))},
$S:4}
A.ff.prototype={}
A.dV.prototype={
ey(a,b){var s=this,r=s.$ti,q=r.h("1(1)").a(b).$1(s.a)
s.a=r.c.a(q)
s.bM()
return q},
ib(a){this.$ti.h("~(1)").a(a)
this.b.u(0,a)
return new A.nm(this,a)},
bM(){var s,r,q
for(s=A.eO(this.b,!0,this.$ti.h("~(1)")),r=s.length,q=0;q<r;++q)s[q].$1(this.a)}}
A.nm.prototype={
$0(){return this.a.b.T(0,this.b)},
$S:0}
A.cC.prototype={
E(){var s=this.c.a
return this.d.$1(s)},
a4(){this.d9()},
bD(){this.d9()},
cX(){var s=this.f
if(s!=null)s.$0()
this.e=this.f=null},
d9(){var s,r=this
if(r.e===r.c)return
s=r.f
if(s!=null)s.$0()
s=r.c
r.e=s
r.f=s.ib(new A.nl(r))}}
A.nl.prototype={
$1(a){var s=this.a
s.$ti.c.a(a)
s.q(new A.nk())},
$S(){return this.a.$ti.h("~(1)")}}
A.nk.prototype={
$0(){},
$S:0}
A.em.prototype={
ii(a){var s=A.bF(A.y(A.y(v.G.window).localStorage).getItem(a))
if(s==null||s.length===0)return null
return B.E.aV(0,s,null)},
cQ(a){var s=this.ii(a)
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kP(),t.N,t.z)
return B.Z}}
A.kP.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.kW.prototype={
W(){return"CookieSameSite."+this.b}}
A.kX.prototype={
fF(a){var s
switch(a.a){case 0:s="Lax"
break
case 1:s="Strict"
break
case 2:s="None"
break
default:s=null}return s}}
A.hU.prototype={}
A.iU.prototype={}
A.d.prototype={
l(a){return this.a}}
A.n.prototype={
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
b2=A.xd(b0)
b0=A.x2(b0)
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
c8=A.E(e2.cE,!0)
c9=A.E(e2.ed,!0)
d0=A.E(e2.ee,!0)
d1=A.E(e2.aX,!0)
d2=A.E(e2.cF,!0)
d3=A.E(e2.aY,!1)
d4=A.E(e2.cI,!0)
d5=A.E(e2.cJ,!0)
d6=A.E(e2.aZ,!1)
d7=e2.b_
d7=d7==null?e3:d7.n()
d8=e2.cG
d8=d8==null?e3:d8.n()
d9=e2.cH
d9=d9==null?e3:d9.n()
e0=A.E(e2.ef,!0)
e1=e2.b0
e1=e1 instanceof A.aq?e1.n():A.E(e1,!1)
return A.xo(A.ai(["padding",e4,"margin",s,"width",r,"height",q,"min-width",p,"max-width",o,"min-height",n,"max-height",m,"display",l,"gap",k,"align-items",j,"justify-items",i,"justify-content",h,"flex",g,"flex-direction",f,"flex-wrap",e,"flex-grow",d,"flex-shrink",c,"flex-basis",b,"grid-template-columns",a,"position",a0,"top",a1,"right",a2,"bottom",a3,"left",a4,"z-index",e2.fy,"overflow",a5,"overflow-x",a6,"overflow-y",a7,"box-sizing",a8,"scroll-behavior",a9,"scrollbar-display",b1,"scrollbar-width",b2,"-ms-overflow-style",b0,"aspect-ratio",b3,"object-fit",b4,"transform",b5,"backdrop-filter",b6,"mask-image",b7,"font-family",b8,"font-size",b9,"font-weight",c0,"line-height",c1,"letter-spacing",c2,"color",c3,"text-align",c4,"text-transform",c5,"text-decoration",c6,"text-overflow",c7,"white-space",c8,"word-break",c9,"overflow-wrap",d0,"cursor",d1,"resize",d2,"background",d3,"background-clip",d4,"-webkit-background-clip",d5,"border-radius",d6,"border",d7,"border-top",d8,"border-right",null,"border-bottom",d9,"border-left",null,"border-collapse",e0,"box-shadow",e1,"opacity",e2.b1,"transition",A.E(e2.b2,!0),"animation",A.E(e2.eg,!0),"will-change",A.E(e2.eh,!0)],t.N,t.X))},
gea(){var s=this,r=A.Z(t.gY,t.x),q=s.az
if(q!=null)r.i(0,B.d5,q)
q=s.aA
if(q!=null)r.i(0,B.d6,q)
q=s.aB
if(q!=null)r.i(0,B.d3,q)
q=s.aC
if(q!=null)r.i(0,B.d4,q)
return r},
gcZ(){var s,r=this,q=A.Z(t.N,t.x),p=r.bE
if(p!=null)q.i(0,":hover",p)
p=r.bF
if(p!=null)q.i(0,":focus-visible",p)
p=r.bG
if(p!=null)q.i(0,":active",p)
p=r.bH
s=p!=null
if(s)q.i(0,":disabled",p)
if(s)q.i(0,'[aria-disabled="true"]',p)
p=r.bI
if(p!=null)q.i(0,'[aria-invalid="true"]',p)
return q},
gew(){var s=A.Z(t.c,t.x),r=this.bJ
if(r!=null)s.i(0,B.af,r)
r=this.bK
if(r!=null)s.i(0,B.U,r)
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
b9=e4.cE
if(b9==null)b9=e3.cE
c0=e4.aX
if(c0==null)c0=e3.aX
c1=e4.cF
if(c1==null)c1=e3.cF
c2=e4.aY
if(c2==null)c2=e3.aY
c3=e4.aZ
if(c3==null)c3=e3.aZ
c4=e4.b_
if(c4==null)c4=e3.b_
c5=e4.cG
if(c5==null)c5=e3.cG
c6=e4.cH
if(c6==null)c6=e3.cH
c7=e4.b0
if(c7==null)c7=e3.b0
c8=e4.b1
if(c8==null)c8=e3.b1
c9=e4.cI
if(c9==null)c9=e3.cI
d0=e4.cJ
if(d0==null)d0=e3.cJ
d1=e4.b2
if(d1==null)d1=e3.b2
d2=e4.bE
if(d2==null)d2=e3.bE
d3=e4.bF
if(d3==null)d3=e3.bF
d4=e4.bG
if(d4==null)d4=e3.bG
d5=e4.bH
if(d5==null)d5=e3.bH
d6=e4.bI
if(d6==null)d6=e3.bI
d7=e4.bJ
if(d7==null)d7=e3.bJ
d8=e4.bK
if(d8==null)d8=e3.bK
d9=e4.az
if(d9==null)d9=e3.az
e0=e4.aA
if(e0==null)e0=e3.aA
e1=e4.aB
if(e1==null)e1=e3.aB
e2=e4.aC
if(e2==null)e2=e3.aC
return A.a(d4,i,e3.eg,e3.ok,a8,c2,c9,c4,c6,e3.ef,e3.hV,e3.hU,c5,a0,a4,e3.hY,b5,c0,d8,d5,k,e3.i_,g,e3.cx,f,e3.ch,e3.CW,e,e3.hX,d3,b0,b1,b2,j,e3.hW,d,p,d2,d6,h,e3.Q,a1,b4,e1,d7,b3,r,a9,l,n,e0,m,o,a6,c8,a3,e3.ee,e3.id,e3.k1,s,c,c3,c1,a,a5,e3.k4,e3.hZ,c7,d9,b6,b7,b8,e3.xr,b,a7,d1,d0,b9,q,e3.eh,e3.ed,e2,a2)}}
A.eC.prototype={
l(a){return this.a}}
A.lG.prototype={
l(a){return"bottom"}}
A.kw.prototype={
l(a){return this.a}}
A.bx.prototype={
l(a){return this.a}}
A.ht.prototype={
n(){return B.f.J(A.e([A.E(1,!0),A.E(1,!0),A.E("auto",!1)],t.s)," ")},
l(a){return this.n()}}
A.L.prototype={
n(){var s=A.E(this.a,!1),r=this.b
if(r==null)return s
return s+" "+A.wI(r)}}
A.c1.prototype={
W(){return"Breakpoint."+this.b}}
A.iF.prototype={
gcD(){var s,r,q,p,o,n=A.Z(t.N,t.X)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
q=r.a
q=B.b.D(A.cK(q,".","-"))
p=A.bX("[^a-zA-Z0-9_-]+",!0,!1)
q=A.cK(q,p,"-")
p=A.bX("^-+|-+$",!0,!1)
o=A.cK(q,p,"")
q=o.length===0?"style":o
n.i(0,"--"+q,r.b)}return n}}
A.bR.prototype={
W(){return"FlintThemeMode."+this.b}}
A.b.prototype={
n(){var s="var(--"+A.x8(A.cK(this.a,".","-")),r=this.b
if(r==null)return s+")"
return s+", "+A.E(r,!1)+")"},
l(a){return this.n()}}
A.hw.prototype={
gcw(){var s,r,q=this,p=A.Z(t.N,t.X)
for(s=q.b,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"color."+r.a,r.b)}for(s=q.c,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"space."+r.a,r.b)}for(s=q.d,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"radius."+r.a,r.b)}for(s=q.e,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"shadow."+r.a,r.b)}for(s=B.ct.ga_(B.ct),s=s.gv(s);s.m();){r=s.gp(s)
p.i(0,"font."+r.a,r.b)}p.S(0,B.a)
return new A.iF(p)}}
A.lh.prototype={}
A.aN.prototype={
geF(){var s=this.a
if(typeof s=="number")return A.W(s)+"%"
return J.r(s)}}
A.cj.prototype={
gbC(a){var s=this.b,r=A.au(s),q=r.h("ad<1,h>"),p=new A.ad(s,r.h("h(1)").a(new A.nv()),q).d_(0,q.h("ab(as.E)").a(new A.nw())).J(0,"\n")
if(p.length===0)return""
return"@keyframes "+this.a+" {\n"+p+"\n}"}}
A.nv.prototype={
$1(a){var s
t.fo.a(a)
s=A.qs(a.b.a7())
if(s.length===0)return""
return"  "+a.geF()+" { "+s+"; }"},
$S:28}
A.nw.prototype={
$1(a){return A.U(a).length!==0},
$S:8}
A.n9.prototype={
gbC(a){var s,r,q,p=this,o=p.b,n=p.c
if(n==null)o=null
else{s=n.c===B.U?n.b:n.a
o=s}s=A.e([],t.s)
if(o!=null)s.push(p.c6(":root",o.gcw().gcD()))
r=n!=null
if(r)s.push(p.c6(':root[data-theme="light"], [data-theme="light"]',n.a.gcw().gcD()))
if(r)s.push(p.c6(':root[data-theme="dark"], [data-theme="dark"]',n.b.gcw().gcD()))
n=p.r
if(n!=null)s.push(p.aJ("*",n))
n=p.e
if(n!=null)s.push(p.aJ("html",n))
n=p.f
if(n!=null)s.push(p.aJ("body",n))
n=p.w
if(n!=null)s.push(p.aJ("a",n))
for(n=B.cw.ga_(B.cw),n=n.gv(n);n.m();){r=n.gp(n)
s.push(p.aJ(r.a,r.b))}for(n=p.y,r=n.length,q=0;q<n.length;n.length===r||(0,A.aE)(n),++q)s.push(n[q].gbC(0))
return new A.aA(s,t.bB.a(new A.na()),t.cc).J(0,"\n")},
aJ(a,b){var s,r=b.a7(),q=A.qs(t.L.a(r)),p=A.xc(a,r.j(0,"scrollbar-display"))
if(B.b.D(q).length===0)return p
s=A.e([a+" { "+q+"; }"],t.s)
if(p.length!==0)s.push(p)
return B.f.J(s,"\n")},
c6(a,b){var s=A.qs(t.L.a(b))
if(B.b.D(s).length===0)return""
return a+" { "+s+"; }"}}
A.na.prototype={
$1(a){return B.b.D(A.U(a)).length!==0},
$S:8}
A.pG.prototype={
$1(a){var s
t.d.a(a)
if(a.b!=null){s=a.a
s=s!=="_cssText"&&s!=="scrollbar-display"}else s=!1
return s},
$S:9}
A.pH.prototype={
$1(a){var s
t.d.a(a)
s=a.a
return s+": "+A.E(a.b,B.lU.H(0,s))},
$S:10}
A.f.prototype={
n(){var s,r,q,p,o=this,n=o.a
n=A.E(n==null?0:n,!1)
s=o.b
s=A.E(s==null?0:s,!1)
r=o.c
r=A.E(r==null?0:r,!1)
q=o.d
p=A.e([n,s,r,A.E(q==null?0:q,!1)],t.s)
if(B.f.hT(p,new A.l_(p)))return B.f.gF(p)
n=p[0]
s=p[2]
if(n===s&&p[1]===p[3])return n+" "+p[1]
r=p[1]
if(r===p[3])return n+" "+r+" "+s
return B.f.J(p," ")}}
A.l_.prototype={
$1(a){return A.U(a)===B.f.gF(this.a)},
$S:8}
A.F.prototype={
l(a){return this.a}}
A.aG.prototype={
l(a){return this.a}}
A.b3.prototype={
l(a){return this.a}}
A.m.prototype={
n(){var s=this.c
if(s==="none")return"none"
return A.E(this.a,!1)+" "+s+" "+A.E(this.b,!1)}}
A.aq.prototype={
n(){var s,r=this
if(r===B.lW)return"none"
s=A.e([],t.s)
s.push(A.E(0,!1))
s.push(A.E(r.b,!1))
s.push(A.E(r.c,!1))
s.push(A.E(r.d,!1))
s.push(A.E(r.e,!1))
return B.f.J(s," ")}}
A.ba.prototype={
l(a){return this.a}}
A.nx.prototype={
$1(a){return t.dl.a(a).a},
$S:40}
A.d0.prototype={
l(a){return this.a}}
A.hx.prototype={
l(a){return this.a}}
A.kO.prototype={
l(a){return"border-box"}}
A.nd.prototype={
l(a){return"smooth"}}
A.hf.prototype={
l(a){return this.a}}
A.ib.prototype={
l(a){return this.a}}
A.nI.prototype={
l(a){return"none"}}
A.kx.prototype={
l(a){return"text"}}
A.l0.prototype={
l(a){return"wrap"}}
A.n8.prototype={
l(a){return"vertical"}}
A.iL.prototype={
l(a){return this.a}}
A.aZ.prototype={
l(a){return this.a}}
A.ny.prototype={
$1(a){return t.bc.a(a).a},
$S:41}
A.ka.prototype={
l(a){return"normal"}}
A.kb.prototype={
l(a){return"none"}}
A.kd.prototype={
l(a){return"running"}}
A.kc.prototype={
l(a){return A.E("infinite",!0)}}
A.nt.prototype={
l(a){return this.a}}
A.nu.prototype={
$1(a){return J.r(A.aa(a))},
$S:25}
A.nW.prototype={
l(a){return"transform"}}
A.cx.prototype={
W(){return"Display."+this.b}}
A.hs.prototype={
W(){return"FlexDirection."+this.b}}
A.cM.prototype={
W(){return"AlignItems."+this.b}}
A.dJ.prototype={
W(){return"JustifyContent."+this.b}}
A.dP.prototype={
W(){return"Position."+this.b}}
A.nG.prototype={
W(){return"TextAlign."+this.b}}
A.dp.prototype={}
A.eF.prototype={
a4(){this.e7()},
bD(){this.e7()},
e7(){var s=A.y(v.G.document),r=this.d,q=A.aR(s.getElementById(r))
if(q==null)return
q.innerHTML=this.c},
E(){var s=this,r=A.b9(s.w,t.N,t.X),q=s.d
r.i(0,"id",q)
return new A.k("div",A.i(r,s.f,s.r,B.a,B.a),A.j(null,B.h))}}
A.iq.prototype={}
A.cl.prototype={
scV(a,b){if(this.a===b)return
this.a=b
this.aL()},
aL(){var s=A.aw(this.b,t.M),r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.aE)(s),++q)s[q].$0()}}
A.lq.prototype={
a0(a){var s=this.b.j(0,a)
s=s==null?null:J.r(s)
return s==null?"":s},
Z(a,b){return this.c.cN(0,b,new A.ls(this,b))},
eG(a,b){var s,r,q
this.b.i(0,a,b)
s=this.c.j(0,a)
if(s!=null){r=s.a
q=b==null?null:J.r(b)
r=r!==(q==null?"":q)}else r=!1
if(r){r=b==null?null:J.r(b)
s.scV(0,r==null?"":r)
return}this.aL()},
io(a,b){var s,r,q,p=this,o=t.a
o.a(b)
for(s=B.f.gv(b),r=p.a;s.m();){q=s.gp(0)
p.eG(q,r.j(0,q))}s=A.e(b.slice(0),A.au(b))
o=o.a(s)
if(o.length===0)p.e=B.B
else p.e=p.e.iz(o)
p.aL()},
aL(){var s=A.aw(this.d,t.M),r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.aE)(s),++q)s[q].$0()}}
A.ls.prototype={
$0(){var s=this.a,r=this.b,q=s.a0(r),p=A.e([],t.r),o=new A.cl(q,p)
B.f.u(p,t.M.a(new A.lr(s,r,o)))
return o},
$S:43}
A.lr.prototype={
$0(){var s=this.a
s.b.i(0,this.b,this.c.a)
s.aL()},
$S:0}
A.hz.prototype={}
A.iB.prototype={}
A.nH.prototype={
$1(a){var s,r
A.aa(a)
s=t.m
r=s.b(a)?A.aR(a.target):null
if(s.b(r))this.a.scV(0,A.U(r.value))},
$S:1}
A.iC.prototype={}
A.nJ.prototype={
$1(a){var s,r
A.aa(a)
s=t.m
r=s.b(a)?A.aR(a.target):null
if(s.b(r))this.a.scV(0,A.U(r.value))},
$S:1}
A.bS.prototype={
i0(a){var s
if(a.length===0)return B.aH
s=this.a.j(0,a)
if(s==null)s=B.js
return A.rd(s,t.N)},
iz(a){var s=t.a
s.a(a)
if(a.length===0)return B.B
s=A.b9(this.a,t.N,s)
s.il(s,new A.lt(a))
return new A.bS(s)},
gb3(){var s,r,q,p,o=t.N
o=A.Z(o,o)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
q=r.b
p=J.al(q)
if(p.gM(q))o.i(0,r.a,p.gF(q))}return o},
iu(){var s,r,q=A.Z(t.N,t.X)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gp(s)
q.i(0,r.a,r.b)}return q}}
A.lt.prototype={
$2(a,b){A.U(a)
t.a.a(b)
return B.f.H(this.a,a)},
$S:45}
A.lY.prototype={}
A.bJ.prototype={}
A.hH.prototype={}
A.lZ.prototype={
$1(a){t.fd.a(a)
return new A.a7(a.a,a.b,B.ag)},
$S:46}
A.hC.prototype={}
A.iW.prototype={}
A.h8.prototype={}
A.k.prototype={}
A.hI.prototype={}
A.hS.prototype={}
A.ij.prototype={}
A.dW.prototype={
W(){return"Tone."+this.b}}
A.eo.prototype={
W(){return"ComponentSize."+this.b}}
A.dq.prototype={
W(){return"ButtonVariant."+this.b}}
A.m_.prototype={
W(){return"InputVariant."+this.b}}
A.lg.prototype={
hu(){var s=this.c
if(this.b==null||s==null||s.length===0)return null
return A.xk(A.bF(A.y(A.y(v.G.window).localStorage).getItem(s)))},
hD(){var s,r
try{s=A.e7(A.y(A.y(v.G.window).matchMedia("(prefers-color-scheme: dark)")).matches)?B.U:B.af
return s}catch(r){return null}},
d8(a){var s,r=A.aR(A.y(v.G.document).documentElement)
if(r!=null)r.setAttribute("data-theme",a.c)
s=this.d
if(s!=null)s.setAttribute("data-theme",a.c)}}
A.oZ.prototype={
$1(a){return new A.dD(t.P.a(a))},
$S:47}
A.p_.prototype={
$1(a){return new A.dB(t.P.a(a))},
$S:48}
A.p0.prototype={
$1(a){return new A.e0(t.P.a(a))},
$S:49}
A.pb.prototype={
$1(a){return new A.dr(t.P.a(a))},
$S:50}
A.pc.prototype={
$1(a){return new A.ds(t.P.a(a))},
$S:51}
A.pd.prototype={
$1(a){return new A.dj(t.P.a(a))},
$S:52}
A.pe.prototype={
$1(a){return new A.dC(t.P.a(a))},
$S:53}
A.pf.prototype={
$1(a){return new A.dX(t.P.a(a))},
$S:82}
A.pg.prototype={
$1(a){return new A.dz(t.P.a(a))},
$S:55}
A.ph.prototype={
$1(a){var s,r
t.P.a(a)
s=new A.cV(a)
r=J.M(a,"contentHtml")
r=r==null?null:J.r(r)
s.d=r
s.e=r==null||r.length===0
return s},
$S:56}
A.pi.prototype={
$1(a){return new A.dk(t.P.a(a))},
$S:57}
A.p1.prototype={
$1(a){return new A.dQ(t.P.a(a))},
$S:58}
A.p2.prototype={
$1(a){return new A.cO(t.P.a(a),A.hA(A.ai(["title","","tag","","body",""],t.N,t.X)),B.B)},
$S:81}
A.p3.prototype={
$1(a){return new A.dm(t.P.a(a))},
$S:60}
A.p4.prototype={
$1(a){return new A.dl(t.P.a(a),A.hA(A.ai(["body",""],t.N,t.X)),B.B)},
$S:61}
A.p5.prototype={
$1(a){return new A.cP(t.P.a(a),A.hA(A.ai(["title","","tag","","body",""],t.N,t.X)),B.B)},
$S:62}
A.p6.prototype={
$1(a){var s=t.N
return new A.cZ(t.P.a(a),A.hA(A.ai(["body",""],s,t.X)),B.B,new A.dV(null,A.dK(t.aT),t.aN),A.dK(s))},
$S:63}
A.p7.prototype={
$1(a){return new A.dU(t.P.a(a))},
$S:64}
A.p8.prototype={
$1(a){return new A.dT(t.P.a(a))},
$S:65}
A.p9.prototype={
$1(a){return new A.d1(t.P.a(a),A.hA(A.ai(["title","","description","","what_it_does","","built_with","","image_1","","image_2","","image_3","","link_1_label","","link_1_url","","link_2_label","","link_2_url",""],t.N,t.X)),B.B)},
$S:66}
A.pa.prototype={
$1(a){return new A.dw(t.P.a(a))},
$S:67}
A.ej.prototype={
E(){var s,r,q,p,o,n,m,l=null,k="color.muted",j=[]
for(s=this.c,r=l,q=0;q<20;++q){p=B.co[q]
o=p.a
n=p.c
if(n!==r){j.push(new A.a7("p",A.i(B.a,l,new A.n(B.c2,B.hq,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,10,700,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.j(n,B.h)))
r=n}m=o===s?new A.n(new A.f(8,12,8,12),l,l,l,l,l,l,l,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,new A.b("color.primary",l),l,l,l,l,l,l,l,l,l,new A.d("rgba(5, 150, 105, 0.08)"),8,new A.m(1,new A.d("rgba(5, 150, 105, 0.2)"),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.bN,l,l,l,l):new A.n(B.ac,l,l,l,l,l,l,l,B.F,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
j.push(A.V(p.b,B.h,m,"/fullstack/api/"+o,l,B.j,l))}s=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,2,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,0,l,l,l,l,l,l,B.a9,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
return new A.k("div",A.i(B.a,l,s.Y(this.d?A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l):A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.J,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,240,l,l,220,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.n,l,l,l,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a,B.a),A.j(l,j))}}
A.oW.prototype={
$1(a){return t.bl.a(a).a===this.a},
$S:68}
A.oX.prototype={
$1(a){return A.U(a).length!==0},
$S:8}
A.oY.prototype={
$1(a){A.U(a)
if(0>=a.length)return A.t(a,0)
return a[0].toUpperCase()+B.b.a5(a,1)},
$S:69}
A.hE.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,32,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"1 1 0",q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,0,q,q,B.u,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.F("100%"),q,q,q,q),o=[]
if(this.c){s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.r,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.f(48,q,48,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.G("Loading...",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.f(0,0,0,0),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
o.push(new A.k("div",A.i(B.a,q,s,B.a,B.a),A.j(q,[r])))}else{s=this.d
if(s==null)s=""
r=t.N
o.push(A.cf("guide-md markdown-body",s,"guide-content",A.ai(["style",A.ai(["min-width","0","max-width","100%","overflow-wrap","break-word"],r,r)],r,t.X)))}o.push(this.fj())
return new A.k("div",A.i(B.a,q,p,B.a,B.a),A.j(q,o))},
fj(){var s,r,q,p=this,o=null,n="1 1 240px",m="color.line",l="color.panel",k="color.muted",j="color.text",i=p.e,h=i!=null
if(!h||i.length===0){s=p.r
s=s==null||s.length===0}else s=!1
if(s)return A.cs("span",[],A.Z(t.N,t.X))
s=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,o,o,o,o,o,B.i,o,o,o,o,o,16,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r=[]
if(h&&i.length!==0&&p.f!=null){h=p.f
h.toString
q=A.a(o,o,o,o,o,new A.b(l,o),o,new A.m(1,new A.b(m,o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,n,o,o,o,o,o,o,o,o,o,o,4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(16,16,16,16),o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r.push(A.V(o,[A.G("Previous Topic",A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(k,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,11,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),A.G(i,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(j,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,600,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],q,h,o,B.j,o))}else r.push(A.cs("span",[],A.Z(t.N,t.X)))
i=p.r
if(i!=null&&i.length!==0&&p.w!=null){h=p.w
h.toString
q=A.a(o,o,o,o,o,new A.b(l,o),o,new A.m(1,new A.b(m,o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,n,o,o,o,o,o,o,o,o,o,o,4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(16,16,16,16),o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r.push(A.V(o,[A.G("Next Topic",A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(k,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,11,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),A.G(i,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(j,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,600,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],q,h,o,B.j,o))}return A.w(r,s)}}
A.hF.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,2,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0,q,q,q,q,q,q,B.a9,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.F("100%"),q,q,q,q)
p=p.Y(this.d?A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q):A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.J,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,240,q,q,220,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.n,q,q,q,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
s=[]
for(r=0;r<26;++r)s.push(this.hr(B.jB[r]))
return new A.k("div",A.i(B.a,q,p,B.a,B.a),A.j(q,s))},
hr(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="/fullstack/guides/",b="color.primary",a="rgba(5, 150, 105, 0.08)",a0="color.muted"
t.g4.a(a1)
s=a1.a
r=a1.b
q=a1.c
if(q==null){p=s===e.c?A.a(d,d,d,d,d,new A.d(a),d,new A.m(1,new A.d("rgba(5, 150, 105, 0.2)"),"solid"),d,d,d,d,d,d,d,d,new A.b(b,d),d,B.bN,d,B.F,d,d,d,d,d,d,d,d,d,d,13,600,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.f(8,12,8,12),d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d):A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b(a0,d),d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,13,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ac,d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
return A.V(r,B.h,p,c+s,d,B.j,d)}o=e.e.j(0,s)===!0
p=J.bM(q)
n=p.cz(q,new A.lL(e))
m=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
l=n?600:500
k=n?new A.b(b,d):new A.b(a0,d)
l=A.a(d,B.d,d,d,d,new A.d("rgba(0, 0, 0, 0)"),d,B.cS,d,d,d,d,d,d,d,d,k,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,13,l,6,d,d,d,d,d,B.cn,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ac,d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.F("100%"),d,d,d,d)
k=A.u(r,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
j=$.tF()
l=[A.ay(d,[k,A.H(j,n?new A.b(b,d):new A.b(a0,d),14)],l,!1,!1,new A.lM(e,o,s),B.a,B.x,B.z,B.D)]
if(o){k=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.f(d,d,d,12),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j=[]
for(p=p.gv(q),i=e.c;p.m();){h=p.gp(p)
g=h.a
f=g===i?new A.n(new A.f(6,12,6,12),d,d,d,d,d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,12,600,d,d,new A.b(b,d),d,d,d,d,d,d,d,d,d,new A.d(a),6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.eX,d,d,d,d):new A.n(B.b4,d,d,d,d,d,d,d,B.F,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,12,d,d,d,new A.b(a0,d),d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j.push(A.V(h.b,B.h,f,c+g,d,B.j,d))}l.push(new A.k("div",A.i(B.a,d,k,B.a,B.a),A.j(d,j)))}return new A.k("div",A.i(B.a,d,m,B.a,B.a),A.j(d,l))}}
A.lL.prototype={
$1(a){return t.fz.a(a).a===this.a.c},
$S:70}
A.lM.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.lK(s,this.b,this.c))},
$S:1}
A.lK.prototype={
$0(){var s=!this.b
this.a.e.i(0,this.c,s)
return s},
$S:0}
A.h5.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,10,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,760,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),o=A.a(q,B.d,q,q,q,B.aP,q,new A.m(1,B.bo,"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.k,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.aD,q,999,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.F("fit-content"),q,q,q,q)
o=A.w([A.H($.dg(),B.N,13),A.u("End-to-End Capabilities",B.bF)],o)
s=A.ap("Built for Complete Modern Applications",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,32,800,q,q,q,q,q,q,q,q,q,q,q,q,1.15,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
r=A.G("The Flint Ecosystem eliminates fragmentation across your entire technology stack. Every layer speaks the same expressive language.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,15,q,q,q,q,q,q,q,q,q,q,q,q,q,1.65,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
p=A.i(B.a,q,p,B.a,B.a)
r=A.j(q,[o,s,r])
s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b3("repeat("+A.X(2,!0)+", "+A.X(B.H,!1)+")"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,16,q,B.K,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b3("repeat("+A.X(3,!0)+", "+A.X(B.H,!1)+")"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,B.hD,q,q,q,s,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
o=t.dY
o=A.aw(new A.ad(B.jb,t.cv.a(new A.kQ(this)),o),o.h("as.E"))
o=A.w(o,s)
return new A.k("div",A.i(B.a,q,B.ax,B.a,B.a),A.j(q,[new A.k("div",p,r),o]))}}
A.kQ.prototype={
$1(a){var s,r=null,q=t.g9.a(a).a,p=q[0],o=q[1],n=q[2]
q=q[3]
s=A.a(r,r,r,r,r,new A.b("color.panel",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,10,r,r,r,A.a(r,r,r,r,r,r,r,new A.m(1,new A.d(q),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ab,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
q=A.u(p,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.d(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,800,r,r,r,r,r,r,r,r,r,0.5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
o=A.bK(o,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,17,800,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
n=A.G(n,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.6,B.l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
return new A.k("div",A.i(B.a,r,s,B.a,B.a),A.j(r,[q,o,n]))},
$S:71}
A.hg.prototype={
E(){var s,r,q,p,o,n,m,l,k,j=this,i="solid",h=null,g="div",f=A.a(h,h,h,h,h,B.au,h,new A.m(1,B.ef,i),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.eK,h,h,h,h,h,B.p,B.fq,h,h,h,h,h,h,h,h,B.i0,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.p,h,h,B.fz,h),e=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.e,h,h,h,h,h,h,h,h,h,h,h,h,14,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,840,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),d=A.a(h,B.d,h,h,h,B.bu,h,new A.m(1,B.eg,i),h,h,h,h,h,h,h,h,h,h,h,h,B.k,h,h,h,h,h,h,h,h,h,h,h,h,8,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.hV,h,999,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.m5,h,h,h,h)
d=A.w([A.H($.cb(),B.G,14),A.u("THE DART LANGUAGE RENAISSANCE",B.fp)],d)
s=A.ap("How Flint Amplifies the Dart Language",A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.w,h,h,h,h,h,h,h,h,h,h,h,h,h,h,34,900,h,h,h,h,h,h,h,h,h,-0.5,h,h,1.15,B.l,h,h,h,B.bT,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h))
r=A.G("For years, developers loved Dart\u2019s elegance, sound null safety, and fast compilation \u2014 but were confined to client UI. Flint unlocks Dart across the entire computing spectrum: Cloud Backends, WebAssembly SSR, Autonomous AI Agents, and Bare-Metal Robotics.",A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.R,h,h,h,h,h,h,h,h,h,h,h,h,h,h,16,h,h,h,h,h,h,h,h,h,h,h,h,h,1.7,B.l,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h))
e=A.i(B.a,h,e,B.a,B.a)
r=A.j(h,[d,s,r])
s=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.b3("repeat("+A.X(2,!0)+", "+A.X(B.H,!1)+")"),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
s=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.e,h,h,h,h,h,h,h,h,h,h,h,h,20,h,B.K,h,h,h,h,h,h,h,A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.b3("repeat("+A.X(3,!0)+", "+A.X(B.H,!1)+")"),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,B.hQ,h,h,h,s,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
d=j.av("#38bdf8","Universal Dart","No longer confined to mobile apps. Flint makes Dart a first-class language for High-Concurrency Cloud APIs, Real-Time Web, Edge AI, and Microcontroller Firmware.",$.eg(),"01","Beyond the Client Sandbox","Universal Computing Surface")
q=j.av("#10b981","Sound Types","Experience absolute type certainty. From PostgreSQL database schema columns, HTTP Context payloads, AI tool parameters, down to GPIO pins \u2014 everything is verified at compile time.",$.qF(),"02","Zero Runtime Type Drift","End-to-End Null Safety")
p=$.ct()
o=j.av("#f59e0b","JIT & AOT","Instant hot reload during local development, and sub-millisecond cold starts in production via native AOT binaries with zero JRE/Node runtime bloat.",p,"03","Sub-Second JIT + Native AOT","Dual Compilation Prowess")
n=j.av("#a855f7","Isolate Actors","Dart Isolates provide true shared-nothing memory actor concurrency. Handle high-throughput WebSocket broadcasts and parallel AI agent streaming without mutex bugs.",$.dg(),"04","Actor Isolates & Zero Deadlocks","Lock-Free Concurrency")
m=j.av("#f43f5e","C99 & ROS 2","Flint Hardware transpiles declarative Dart robotics definitions directly into native C99, C++, and MicroPython for ESP32, nRF52, and ROS 2 robotics nodes.",$.ef(),"05","Direct Hardware & C99 Code Gen","Bare-Metal & C-FFI Transpilation")
l=j.av("#06b6d4","10x Velocity","Unify your entire engineering organization. Share models, validation rules, utility logic, and client SDKs seamlessly across backend, frontend, and hardware teams.",$.dh(),"06","One Mindset. One Team. One pub.dev","Zero Context Switching")
s=A.i(B.a,h,s,B.a,B.a)
l=A.j(h,[d,q,o,n,m,l])
m=A.a(h,h,h,h,h,B.bk,h,new A.m(1,B.bq,i),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.h0,h,h,h,h,h,h,h,h,B.hy,h,18,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.p,h,h,h,h)
n=A.a(h,B.d,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.e,h,h,h,h,h,h,h,h,h,h,h,h,24,h,B.K,h,h,h,h,h,h,h,A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.b3("repeat("+A.X(2,!0)+", "+A.X(B.H,!1)+")"),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
o=A.bi([A.bK("Dart Was Built for Modern Software Engineering",B.eN),A.G("Flint finishes the vision: elevating Dart from an exceptional UI language into the most unified, productive, and versatile programming ecosystem on earth.",B.fW)],B.fc)
q=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.c,h,h,h,h,h,h,B.i,h,h,h,h,h,12,h,h,h,h,h,B.cn,h,h,h,B.fP,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
d=A.a(h,B.d,h,h,h,B.G,h,h,h,h,h,h,h,h,h,h,B.au,h,h,h,B.k,h,h,h,h,h,h,h,h,h,h,13,800,8,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.aY,h,10,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
d=A.V(h,[A.u("Explore Fullstack Dart",B.fb),A.H($.bN(),B.au,16)],d,"/fullstack",h,B.j,h)
k=A.a(h,B.d,h,h,h,B.dM,h,new A.m(1,B.dN,i),h,h,h,h,h,h,h,h,B.w,h,h,h,B.k,h,h,h,h,h,h,h,h,h,h,13,700,8,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.aY,h,10,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
n=A.w([o,A.w([d,A.V(h,[A.u("See Dart on Hardware",B.f4),A.H(p,B.ap,15)],k,"/hardware",h,B.j,h)],q)],n)
m=A.i(B.a,h,m,B.a,B.a)
n=A.j(h,[n])
return new A.k(g,A.i(B.a,h,f,B.a,B.a),A.j(h,[new A.k(g,e,r),new A.k(g,s,l),new A.k(g,m,n)]))},
av(a,b,c,d,e,f,g){var s=null,r="solid",q=A.py(B.b.t(a,1,3),16),p=A.py(B.b.t(a,3,5),16),o=A.py(B.b.t(a,5,7),16),n=A.a(s,s,s,s,s,B.e8,s,new A.m(1,B.bx,r),s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,B.y,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.T,B.a_,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),m=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.p,s,s,s,s),l="rgba("+q+", "+p+", "+o,k=A.a(s,B.d,s,s,s,new A.d(l+", 0.15)"),s,new A.m(1,new A.d(l+", 0.35)"),r),s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,42,s,s,B.r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,42,s,s,s,s),j=A.H(d,new A.d(a),20)
m=A.bi([A.w([new A.k("div",A.i(B.a,s,k,B.a,B.a),A.j(s,[j])),A.u(b,A.a(s,s,s,s,s,new A.d(l+", 0.1)"),s,new A.m(1,new A.d(l+", 0.25)"),r),s,s,s,s,s,s,s,s,new A.d(a),s,s,s,s,s,s,s,s,s,s,s,s,s,s,10,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.hJ,s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],m),A.bi([A.bK(g,B.f9),A.u(f,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.d(a),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.h1),A.G(c,B.fs)],B.eJ)
return new A.k("div",A.i(B.a,s,n,B.a,B.a),A.j(s,[m]))}}
A.hq.prototype={
E(){var s,r,q,p=null,o=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,B.eV,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.hB,p,20,p,p,p,p,p,new A.b("shadow.sm",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.d,p,p,p,B.aP,p,new A.m(1,B.bo,"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.aD,p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("fit-content"),p,p,p,p)
n=A.w([A.H($.k5(),B.N,13),A.u("Explore The Ecosystem",B.bF)],n)
s=A.ap("Choose your starting point in the Flint Ecosystem.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,28,800,p,p,p,p,p,p,p,p,p,p,p,p,1.18,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.G("Explore dedicated documentation guides, architectures, and examples for each of the four official ecosystem technologies.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.65,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,B.i,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,B.aB,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
q=A.w([A.V("Full-Stack Web",B.h,p,"/fullstack",p,B.j,p),A.V("Client SDK",B.h,p,"/client",p,B.z,B.C),A.V("AI Engine",B.h,p,"/ai",p,B.z,B.C),A.V("Hardware & Robotics",B.h,p,"/hardware",p,B.z,B.C)],q)
o=A.i(B.a,p,o,B.a,B.a)
q=A.j(p,[n,s,r,q])
return new A.k("div",A.i(B.a,p,B.ax,B.a,B.a),A.j(p,[new A.k("div",o,q)]))}}
A.eE.prototype={
a4(){var s=A.xC()
if(s!=null&&s!==this.d)this.q(new A.lX(this,s))},
fo(a){A.pk(a)
this.q(new A.lR(this))
A.c5(B.az,new A.lS(this))},
fn(a){A.pk(a)
this.q(new A.lO(this))
A.c5(B.az,new A.lP(this))},
fH(){if(this.d==="windows")return'powershell -c "irm https://flintdart.dev/install.ps1 | iex"'
return"curl -fsSL https://flintdart.dev/install.sh | sh"},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="color.line",e="color.bg",d="color.panel",c="color.primary",b=j.fH(),a=$.qN(),a0=j.c
if(!(a0<4))return A.t(a,a0)
s=a[a0]
a0=t.G
a=A.a(i,i,i,i,i,A.aM(A.e([A.bm(B.ci,B.jt),A.bm(B.iu,B.jc),A.bm(B.iv,B.jD),A.aW(155,B.cr)],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
a=A.a(i,i,i,i,i,new A.b(e,i),i,i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,A.aM(A.e([A.bm(B.ix,B.cp),A.bm(B.is,B.cq),A.bm(B.cf,B.jk),A.aW(160,A.e([new A.L(new A.b(e,i),0),new A.L(new A.b(d,i),55),new A.L(new A.b("color.panelStrong",i),100)],a0))],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,a,i,i,i,i,i,i,new A.F("calc(100vh - 68px)"),i,i,i,B.u,i,i,i,i,B.a_,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F("100%"),i,i,i,i)
r=A.E(B.de,!0)
q=new A.ad(B.jf,t.f7.a(A.qt()),t.en).J(0,", ")
q=A.i(B.cy,i,A.a(i,i,i,i,i,A.aM(A.e([B.eo,B.dT],a0)),i,i,i,i,i,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0,i,i,i,i,i,new A.eC("linear-gradient(to "+r+", "+q+")"),i,i,i,i,i,i,0.45,i,i,i,i,i,B.aj,i,i,0,i,i,i,i,i,i,i,i,i,0,i,i,i,i,i,i,i,i,i),B.a,B.jQ)
r=A.j(i,B.h)
p=j.eR(new A.d("rgba(52, 211, 153, 0.15)"),380,"4%","8%",380)
o=j.eQ("12%",new A.d("rgba(56, 189, 248, 0.14)"),440,"5%",440)
n=A.a(i,B.d,i,i,i,new A.b(d,i),i,new A.m(1,new A.d("rgba(16, 185, 129, 0.3)"),h),i,i,i,i,i,i,i,i,i,i,B.eY,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,10,i,i,i,A.a(i,i,i,i,i,i,i,new A.m(1,new A.d("rgba(52, 211, 153, 0.6)"),h),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.ba("translateY("+A.E(-1,!1)+")"),i,i,i,i,i,i,i,i),i,i,i,i,i,i,B.fe,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.hZ,i,999,i,i,i,i,i,new A.aq(8,24,-8,new A.d("rgba(16, 185, 129, 0.25)")),i,i,i,i,i,i,i,new A.aZ("all 180ms ease"),i,i,i,i,i,i,i)
n=A.w([A.V(i,[new A.k(g,A.i(B.a,i,A.a(i,i,i,i,i,new A.d("#10b981"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,999,i,i,i,i,i,B.m0,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i),B.a,B.a),A.j(i,B.h)),A.u("Flint v 1.3.2 Released",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(c,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,900,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.u("\u2022",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.muted",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.u("Explore Multi-Provider AI & Full-Stack Dart",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.text",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,700,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.qA(),new A.b(c,i),14)],n,"/whats-new",i,B.j,i)],B.hb)
a0=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,36,i,B.K,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,48,i,A.eD(A.e([new A.aG("minmax("+A.X(B.a4,!1)+", "+A.X(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.X(520,!1)+", "+A.X(new A.F("1.15fr"),!1)+")")],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,64,i,A.eD(A.e([new A.aG("minmax("+A.X(B.a4,!1)+", "+A.X(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.X(600,!1)+", "+A.X(new A.F("1.2fr"),!1)+")")],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i)
a0=A.w([j.fO(b),j.fR(s)],a0)
m=A.a(i,i,i,i,i,new A.d("rgba(15, 23, 42, 0.65)"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("shadow.glow",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
m=A.a(i,i,i,i,new A.d0("blur("+A.E(16,!1)+")"),new A.b(d,i),i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,i,m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.ff,i,B.c7,i,i,i,i,i,i,i,i,i,i,i,i,B.a9,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F("100%"),i,i,i,i)
l=A.hD([j.bo($.dh(),"Full-Stack Web (SSR & ORM)","Reactive Flint UI & API gateway",new A.d("#10b981")),j.bo($.eg(),"Universal Client SDK","Offline sync & typed channels",new A.d("#06b6d4")),j.bo($.cb(),"Autonomous AI Mesh","Multi-provider tool calling & LLMs",new A.d("#a855f7")),j.bo($.ct(),"Hardware & Robotics (R&D)","ESP32, RP2040 & IMU telemetry",new A.d("#f97316"))],"repeat(auto-fit, minmax(240px, 1fr))",16)
m=A.i(B.a,i,m,B.a,B.a)
l=A.j(i,[l])
k=A.i(B.a,i,B.fr,B.a,B.a)
l=A.j(i,[n,a0,new A.k(g,m,l)])
return new A.k(g,A.i(B.a,i,a,B.a,B.a),A.j(i,[new A.k(g,q,r),p,o,new A.k(g,k,l)]))},
fO(a){var s,r,q,p,o,n,m,l=null,k=A.a(l,B.d,l,l,l,new A.d("rgba(16, 185, 129, 0.12)"),l,new A.m(1,new A.d("rgba(16, 185, 129, 0.28)"),"solid"),l,l,l,l,l,l,l,l,new A.d("#10b981"),l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,900,8,l,l,l,l,l,l,l,l,0.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b4,l,999,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),j=A.H($.ct(),new A.d("#10b981"),15),i=A.u("THE UNIFIED DART ECOSYSTEM",l)
k=A.i(B.a,l,k,B.a,B.a)
i=A.j(l,[j,i])
j=A.b6("Flint Ecosystem",A.a(l,l,l,l,l,A.aW(110,B.jz),B.am,l,l,l,l,l,l,l,l,l,new A.d("transparent"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.m2,900,l,l,l,l,l,l,l,l,l,l,l,l,0.98,B.b_,l,l,820,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.am,l,l,l,l,l,l))
s=A.ap("One language across your entire stack: Full-Stack Web, Client SDK, Native AI, and Robotics.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.text",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,23,800,l,l,l,l,l,l,l,l,l,l,l,l,1.28,B.aB,l,l,720,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.G("Build end-to-end full-stack web applications with Flint Dart, universal cross-platform clients with Flint Client, autonomous AI agents with Flint AI, and connected hardware & robotics with Flint Hardware.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,B.aB,l,l,680,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
q=A.a(l,B.d,l,l,new A.d0("blur("+A.E(14,!1)+")"),new A.d("rgba(3, 7, 18, 0.75)"),l,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),"solid"),l,l,l,l,l,l,l,l,B.w,l,l,l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,B.m,l,l,l,l,l,l,B.b0,l,l,620,l,l,l,l,l,l,l,l,l,B.aA,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
p=A.w([A.u("$",B.bH),A.u(a,B.fj)],B.bK)
o=this.e
n=o?new A.d("rgba(16, 185, 129, 0.25)"):new A.d("rgba(255, 255, 255, 0.1)")
m=o?new A.d("#34d399"):B.w
m=A.a(l,B.d,l,l,l,n,l,l,l,l,l,l,l,l,l,l,m,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,800,6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b3,l,6,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.aZ("all 150ms ease"),l,l,l,l,l,l,l)
n=o?$.fR():$.fS()
n=A.H(n,o?new A.d("#34d399"):B.w,13)
o=A.ay(l,[n,A.u(this.e?"Copied":"Copy",l)],m,!1,!1,new A.lT(this,a),B.a,B.S,B.j,B.D)
q=A.i(B.a,l,q,B.a,B.a)
o=A.j(l,[p,o])
p=A.a(l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,15,900,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,46,l,l,l,l,l,l,l,B.c3,l,8,l,l,l,l,l,new A.aq(12,32,-10,new A.d("rgba(16, 185, 129, 0.5)")),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
return A.bi([new A.k("div",k,i),j,s,r,new A.k("div",q,o),A.q5([A.V(l,[A.u("Get Started Free",l),A.H($.bN(),l,18)],p,"/fullstack",l,B.j,l),A.V(l,[A.H($.fQ(),l,16),A.u("Documentation",l)],B.aS,"/guides",l,B.z,B.C),A.V(l,[A.H($.ef(),l,16),A.u("GitHub",l)],B.bU,"https://github.com/flint-dart",l,B.z,B.D)],B.bZ,12)],B.bM)},
fR(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="solid",h="div",g="rgba(255, 255, 255, 0.03)",f=A.a(j,j,j,j,j,new A.d("#050b0a"),j,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),i),j,j,j,j,j,j,j,j,B.w,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.u,j,j,j,j,B.a_,12,j,j,j,j,j,new A.aq(28,70,-28,new A.d("rgba(0, 0, 0, 0.8)")),j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,2),e=A.a(j,B.d,j,j,j,new A.d(g),j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.1)"),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.aA,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),d=A.w([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.bl,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.aL,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.O,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h))],B.c_),c=[]
for(s=0;r=$.qN(),s<4;++s){r=r[s]
c.push(k.fS(r.f,k.c===s,r.e,s,r.a))}c=A.w(c,B.bD)
r=k.f
q=r?new A.d("#34d399"):new A.d("#94a3b8")
q=A.a(j,j,j,j,j,new A.d("rgba(255, 255, 255, 0.05)"),j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c8,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j)
q=A.ay(j,[A.H(r?$.fR():$.fS(),j,13)],q,!1,!1,new A.lU(k,a),B.a,B.S,B.j,B.D)
e=A.i(B.a,j,e,B.a,B.a)
q=A.j(j,[d,c,q])
c=A.a(j,B.d,j,j,j,new A.d("rgba(255, 255, 255, 0.02)"),j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.06)"),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
d=a.f
p=A.w([A.H(a.e,d,16),A.f7(a.b,B.bG),A.u("\u2022 "+a.c,B.bP)],B.a8)
o=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,d,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,12,800,4,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o=A.V(j,[A.u("Docs",j),A.H($.qA(),j,14)],o,a.d,j,B.j,j)
c=A.i(B.a,j,c,B.a,B.a)
o=A.j(j,[p,o])
p=k.hC(a.x)
n=A.i(B.a,j,B.h2,B.a,B.a)
p=A.j(j,[p])
m=A.a(j,B.d,j,j,j,new A.d(g),j,j,j,j,j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.08)"),i),j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
d=A.w([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j),B.a,B.a),A.j(j,B.h)),A.u(a.r,B.bC)],B.a8)
l=A.u("Pure Dart \u2022 Zero Glue",B.bW)
m=A.i(B.a,j,m,B.a,B.a)
l=A.j(j,[d,l])
return new A.k(h,A.i(B.a,j,f,B.a,B.a),A.j(j,[new A.k(h,e,q),new A.k(h,c,o),new A.k(h,n,p),new A.k(h,m,l)]))},
fS(a,b,c,d,e){var s=null,r=b?900:600,q=b?B.w:B.R,p=b?new A.d("rgba(255, 255, 255, 0.1)"):B.v
r=A.a(s,B.d,s,s,s,p,s,s,b?new A.m(2,a,"solid"):B.bb,s,s,s,s,s,s,s,q,s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,12,r,6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b2,s,6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.ay(s,[A.H(c,b?a:B.at,13),A.u(e,s)],r,!1,!1,new A.lW(this,d),B.a,B.S,B.j,B.D)},
hC(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.dX.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.eq(""+q,2)
o=A.i(B.a,h,B.bE,B.a,B.a)
p=A.j(p,B.h)
n=[]
if(!(r<a.length))return A.t(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aE)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a7("span",A.i(B.a,h,new A.n(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.j(j.a,B.h)))}s.push(A.w([new A.a7("span",o,p),new A.k("div",A.i(B.a,h,B.bJ,B.a,B.a),A.j(h,n))],B.c0))}return A.bi(s,B.bY)},
bo(a,b,c,d){var s=null,r=A.a(s,B.d,s,s,s,new A.d("rgba(16, 185, 129, 0.14)"),s,s,s,s,s,s,s,s,s,s,d,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,36,s,s,B.r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,36,s,s,s,s),q=A.H(a,s,18)
return A.w([new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(q,B.h)),A.bi([A.f7(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.u(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.eG)],B.bX)},
d7(a,b,c,d,e,f,g){var s=null
return new A.k("div",A.i(B.cy,s,A.a(s,s,s,s,new A.d0("blur("+A.E(70,!1)+")"),b,s,s,s,s,s,s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,c,s,s,s,s,d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.aj,999,s,e,s,s,s,s,s,s,s,s,s,f,s,s,s,s,g,s,s,s,s),B.a,B.a),A.j(s,B.h))},
eR(a,b,c,d,e){return this.d7(null,a,b,c,null,d,e)},
eQ(a,b,c,d,e){return this.d7(a,b,c,null,d,null,e)}}
A.lX.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.lR.prototype={
$0(){return this.a.e=!0},
$S:0}
A.lS.prototype={
$0(){var s=this.a
s.q(new A.lQ(s))},
$S:0}
A.lQ.prototype={
$0(){return this.a.e=!1},
$S:0}
A.lO.prototype={
$0(){return this.a.f=!0},
$S:0}
A.lP.prototype={
$0(){var s=this.a
s.q(new A.lN(s))},
$S:0}
A.lN.prototype={
$0(){return this.a.f=!1},
$S:0}
A.lT.prototype={
$1(a){A.aa(a)
return this.a.fo(this.b)},
$S:1}
A.lU.prototype={
$1(a){A.aa(a)
return this.a.fn(this.b.w)},
$S:1}
A.lW.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.lV(s,this.b))},
$S:1}
A.lV.prototype={
$0(){return this.a.c=this.b},
$S:0}
A.jA.prototype={}
A.fa.prototype={}
A.jO.prototype={}
A.id.prototype={
E(){var s,r,q=this,p=null,o=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,760,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.d,p,p,p,B.bu,p,new A.m(1,B.br,"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.aD,p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("fit-content"),p,p,p,p)
n=A.w([A.H($.dg(),B.G,13),A.u("Four Ecosystem Pillars",B.f2)],n)
s=A.ap("The Complete Dart Technology Stack",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,32,800,p,p,p,p,p,p,p,p,p,p,p,p,1.15,new A.f(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.G("From server routes and browser UI to cross-platform client SDKs, AI agent mesh, and hardware robotics \u2014 everything runs in Dart.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.65,new A.f(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
o=A.i(B.a,p,o,B.a,B.a)
r=A.j(p,[n,s,r])
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b3("repeat("+A.X(2,!0)+", "+A.X(B.H,!1)+")"),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,16,p,B.K,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b3("repeat("+A.X(4,!0)+", "+A.X(B.H,!1)+")"),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,new A.f(32,p,0,p),p,p,p,s,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
s=A.w([q.bn("#34d399","Server HTTP routes, SSR, declarative Web UI, Row-Level Security database API gateway, and migrations.",$.dh(),"/fullstack","Explore Fullstack","Full-Stack Web Framework","Flint Dart"),q.bn("#38bdf8","Cross-platform HTTP & WebSocket client with memory/disk caching, offline sync, and real-time DB channels.",$.eg(),"/client","Explore Client","Universal Client SDK","Flint Client"),q.bn("#a78bfa","Multi-provider agent mesh, streaming chat, embeddings, function calling, audio transcription, and persistent memory.",$.cb(),"/ai","Explore AI Engine","Autonomous AI Engine","Flint AI"),q.bn("#f97316","Robotics state machines, HC-SR04 sonar, MPU6050 IMU, motor drivers, and Wokwi virtual simulator bundles.",$.ct(),"/hardware","Explore Hardware","Robotics & IoT SDK","Flint Hardware")],s)
return new A.k("div",A.i(B.a,p,B.ax,B.a,B.a),A.j(p,[new A.k("div",o,r),s]))},
bn(a,b,c,d,e,f,g){var s,r,q,p=null,o="solid",n=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),o),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,B.y,p,p,p,p,p,p,p,p,16,p,p,p,A.a(p,p,p,p,p,p,p,new A.m(1,new A.d(a),o),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,B.m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(20,20,20,20),p,16,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),m=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.a(p,B.d,p,p,p,new A.d("rgba(15, 23, 42, 0.6)"),p,new A.m(1,new A.d(a),o),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,40,p,p,B.r,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,40,p,p,p,p),k=A.H(c,new A.d(a),20)
l=A.i(B.a,p,l,B.a,B.a)
k=A.j(p,[k])
s=A.bK(g,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,18,800,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.u(f,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.d(a),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,700,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.G(b,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,13,p,p,p,p,p,p,p,p,p,p,p,p,p,1.55,new A.f(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
m=A.i(B.a,p,m,B.a,B.a)
q=A.j(p,[new A.k("div",l,k),s,r,q])
r=A.V(e,B.h,A.a(p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.d(a),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,13,800,p,p,p,p,B.h5,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),d,p,B.j,p)
return new A.k("div",A.i(B.a,p,n,B.a,B.a),A.j(p,[new A.k("div",m,q),r]))}}
A.iM.prototype={
E(){var s,r,q,p,o=this,n=null,m="rgba(15, 23, 42, 0.72)",l=t.G
l=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(8, 47, 73, 0.52)"),0),new A.L(new A.d(m),46),new A.L(new A.d("rgba(20, 83, 45, 0.24)"),100)],l)),new A.d(m)],l)),n,new A.m(1,new A.d("rgba(56, 189, 248, 0.18)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,20,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.ab,n,16,n,n,n,n,n,new A.b("shadow.sm",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,B.cL,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,18,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,280,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.u("Unified Dart Power",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,B.F,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.ap("Four official pillars engineered to work together.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,24,800,n,n,n,n,n,n,n,n,n,n,n,n,1.14,B.l,n,n,560,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r=A.i(B.a,n,r,B.a,B.a)
p=A.j(n,[q,p])
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.w([new A.k("div",r,p),A.w([o.ct("4 Pillars","Web, Client, AI, Robotics"),o.ct("0 Context Switch","pure Dart across all layers"),o.ct("100% Type-Safe","shared schemas and models")],q)],s)
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,14,n,n,n,n,n,B.r,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.w([o.bt($.dg(),"Full-Stack Web","High-performance backend routes, SSR & Web UI.",B.eO,"/fullstack"),o.bt($.eg(),"Universal Client","Cross-platform caching, offline sync & channels.",B.fl,"/client"),o.bt($.cb(),"Autonomous AI","Agent workflows, tool execution & embeddings.",B.fw,"/ai"),o.bt($.ct(),"Robotics & Hardware","Sensors, motor telemetry & virtual simulation.",B.eZ,"/hardware")],q)
l=A.i(B.a,n,l,B.a,B.a)
q=A.j(n,[s,q])
return new A.k("div",A.i(B.a,n,B.h_,B.a,B.a),A.j(n,[new A.k("div",l,q)]))},
bt(a,b,c,d,e){var s=null,r="solid",q="color.line",p="color.text",o=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b(q,s),r),s,s,s,s,s,s,s,s,s,s,B.h4,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,10,s,s,s,A.a(s,s,s,s,s,s,s,new A.m(1,new A.b("color.primary",s),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,B.f5,s,s,s,s,s,s,s,240,s,s,s,s,s,s,B.a9,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),n=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,B.m,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),m=A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b(q,s),r),s,s,s,s,s,s,s,s,s,s,B.fE,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,34,s,s,B.r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,34,s,s,s,s),l=A.H(a,new A.b(p,s),16)
return A.V(s,[A.w([new A.k("div",A.i(B.a,s,m,B.a,B.a),A.j(s,[l])),new A.k("div",A.i(B.a,s,d,B.a,B.a),A.j(s,B.h))],n),A.bK(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b(p,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,14,800,s,s,s,s,s,s,s,s,s,s,s,s,s,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,1.5,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],o,e,s,B.j,s)},
ct(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,B.eS,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,2,s,s,s,s,s,s,s,s,s,s,B.fk,s,s,s,s,s,s,s,130,s,s,s,s,s,s,B.aX,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))}}
A.iV.prototype={
E(){var s,r=this,q=null,p="div",o=A.a(q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,36,q,B.K,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,48,q,A.eD(A.e([new A.aG("minmax("+A.X(420,!1)+", "+A.X(B.H,!1)+")"),new A.aG("minmax("+A.X(B.a4,!1)+", "+A.X(new A.F("0.9fr"),!1)+")")],t.G)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.aa,q,18,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),m=r.bj("#f97316","HC-SR04 sonar & IMU sensors capture real-time telemetry.",$.ct(),"1","Edge Hardware & Sensors"),l=r.ce(),k=r.bj("#a78bfa","Multimodal agents analyze telemetry & invoke decision tools.",$.cb(),"2","Autonomous AI Engine"),j=r.ce(),i=r.bj("#34d399","Flint Dart enforces Row-Level Security & persists event models.",$.dh(),"3","Full-Stack Server & DB Gateway"),h=r.ce(),g=r.bj("#38bdf8","Clients stream live updates over real-time reactive signals.",$.eg(),"4","Universal Client & Web UI")
n=A.i(B.a,q,n,B.a,B.a)
g=A.j(q,[m,l,k,j,i,h,g])
h=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,14,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,300,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
i=A.a(q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
i=A.w([A.H($.tN(),B.G,16),A.u("Cross-Stack Synergy",B.fJ)],i)
j=A.ap("Four Pillars. One Seamless Workflow.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,32,800,q,q,q,q,q,q,q,q,q,q,q,q,1.15,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
k=A.G("Data moves effortlessly from embedded hardware sensors into autonomous AI workflows, through secure backend database gateways, and up to real-time client dashboards \u2014 without converting data formats or switching languages.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,15,q,q,q,q,q,q,q,q,q,q,q,q,q,1.65,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
l=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,B.i,q,q,q,q,q,12,q,q,q,q,q,q,q,q,q,q,q,q,B.c4,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.u("Full-Stack Web",q)
s=$.bN()
l=A.w([A.V(q,[m,A.H(s,q,16)],q,"/fullstack",q,B.j,q),A.V(q,[A.u("Robotics Guide",q),A.H(s,q,16)],q,"/hardware",q,B.z,B.C)],l)
h=A.i(B.a,q,h,B.a,B.a)
l=A.j(q,[i,j,k,l])
o=A.i(B.a,q,o,B.a,B.a)
l=A.j(q,[new A.k(p,n,g),new A.k(p,h,l)])
return new A.k(p,A.i(B.a,q,B.ax,B.a,B.a),A.j(q,[new A.k(p,o,l)]))},
bj(a,b,c,d,e){var s,r,q,p=null,o=A.a(p,B.I,p,p,p,new A.b("color.panelStrong",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.aZ,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.d,p,p,p,new A.d("rgba(15, 23, 42, 0.7)"),p,new A.m(1,new A.d(a),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,36,p,p,B.r,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,36,p,p,p,p),m=A.H(c,new A.d(a),18)
n=A.i(B.a,p,n,B.a,B.a)
m=A.j(p,[m])
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,3,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.bK(e,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,800,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.G(b,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,1.45,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
s=A.i(B.a,p,s,B.a,B.a)
q=A.j(p,[r,q])
return new A.k("div",A.i(B.a,p,o,B.a,B.a),A.j(p,[new A.k("div",n,m),new A.k("div",s,q)]))},
ce(){var s=null,r=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.hA,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H($.tC(),new A.b("color.muted",s),16)
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.dj.prototype={
gd5(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="#install-and-setup",e="100%",d="color.line",c="color.panel",b="color.text",a="color.muted",a0="color.primary",a1=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,1040,B.aU,i,i,i,i,i,i,i,i,B.b1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(e),i,i,i,i),a2=t.G
a2=A.a(i,i,i,i,i,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(125, 211, 252, 0.16)"),0),new A.L(new A.d("rgba(52, 211, 153, 0.13)"),50),new A.L(new A.b(c,i),100)],a2)),new A.b(c,i)],a2)),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.T,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,24,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.w([j.d6("Flint AI"),j.d6("Agents & tools")],q)
p=A.b6("Build AI agents inside Flint Dart.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.G("Flint AI adds providers, agents, tools, workflows, streaming chat, memory, persistence, and production tool policies to real Flint applications.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.i(B.a,i,r,B.a,B.a)
o=A.j(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,300,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(e),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.L,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.w([A.H($.cb(),B.a2,16),A.u("Runtime layers",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.accent",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aZ,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.u("app.ai.useChatProvidersFromEnv()",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
k=A.u("ctx.ai.run(agent, input: request)",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.i(B.a,i,m,B.a,B.a)
k=A.j(i,[l,k])
l=A.G("Use AI from controllers, API routes, dashboards, queues, and internal automation.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.i(B.a,i,q,B.a,B.a)
l=A.j(i,[n,new A.k(g,m,k),l])
s=A.w([new A.k(g,r,o),new A.k(g,A.i(B.a,i,p,B.a,B.a),A.j(i,[new A.k(g,q,l)]))],s)
l=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.w([j.bU("Setup",f),j.bU("Streaming","#streaming-chat"),j.bU("Security","#production-tool-security")],l)
a2=A.i(B.a,i,a2,B.a,B.a)
l=A.j(i,[s,l])
s=A.X(240,!1)
q=A.X(B.H,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.K,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b3("repeat("+A.X("auto-fit",!0)+", "+A.X(new A.aG("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.b8($.ef(),"Provider setup","Configure OpenAI, Gemini, Anthropic, or custom providers from environment variables.",B.a2)
p=j.b8($.pM(),"Streaming chat","Send partial text chunks to chat UIs while preserving a final completion event.",B.a1)
o=j.b8($.qy(),"Memory and runs","Persist thread messages, run events, artifacts, and trace history through repositories.",B.as)
r=j.b8($.qx(),"Tool policies","Gate destructive tools with roles, capabilities, production rules, and explicit policy checks.",B.bv)
q=A.i(B.a,i,q,B.a,B.a)
r=A.j(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.ad,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.u,i,i,i,B.L,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(e),i,i,i,i)
p=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,12,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.ap("AI documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.G("Providers, agents, tools, workflows, streaming, persistence, and production safety.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.i(B.a,i,s,B.a,B.a)
m=A.j(i,[k,m])
k=A.a(i,B.d,i,i,i,new A.d("rgba(52, 211, 153, 0.1)"),i,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.w([new A.k(g,s,m),A.V(i,[A.u("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.bN(),new A.b(a0,i),14)],k,f,i,B.j,i)],p)]
if(j.gd5().length===0)p.push(A.G("The Flint AI guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else p.push(A.cf("api-md markdown-body",j.gd5(),"ai-content",B.aI))
s=A.i(B.a,i,o,B.a,B.a)
p=A.j(i,p)
a1=A.i(B.a,i,a1,B.a,B.a)
p=A.j(i,[new A.k(g,a2,l),new A.k(g,q,r),new A.k(g,s,p)])
return new A.ax(j.c,new A.k(g,A.i(B.a,i,B.aw,B.a,B.a),A.j(i,[new A.k(g,a1,p)])))},
b8(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.L,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,d,20),p=A.bK(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p,o]))},
bU(a,b){var s=null
return A.V(a,B.h,A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b6,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,s,B.j,s)},
d6(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.F("max-content"),s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.dk.prototype={
gd2(){var s=J.M(this.c,"initialSection")
s=s==null?null:J.r(s)
return s==null?"flint-class":s},
gdq(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
gaN(){var s=J.M(this.c,"previousApiTitle")
return s==null?null:J.r(s)},
gdP(){var s=J.M(this.c,"previousApiUrl")
return s==null?null:J.r(s)},
gaK(){var s=J.M(this.c,"nextApiTitle")
return s==null?null:J.r(s)},
gdK(){var s=J.M(this.c,"nextApiUrl")
return s==null?null:J.r(s)},
E(){var s=this,r=null,q=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.f(r,B.n,r,B.n),r,r,1152,r,r,r,r,r,r,r,r,r,new A.f(48,16,48,16),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("100%"),r,r,r,r),p=A.a(r,B.I,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,B.y,r,r,r,r,r,r,r,r,20,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.X,r,r,r,r,r,r,r,r,32,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),o=s.gd2(),n=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,28,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,"1 1 0",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,0,r,r,B.u,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("100%"),r,r,r,r),m=A.a(r,r,r,r,r,r,r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.f(r,r,8,r),r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),l=A.G("API Reference",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,800,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.f(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),k=A.b6(A.xq(s.gd2()),A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,34,r,r,r,r,r,r,r,r,r,r,r,r,r,1.12,new A.f(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),j=A.G("Focused reference for Flint Dart and Flint UI APIs, with copyable examples and practical notes.",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,r,r,r,r,r,r,r,r,r,r,r,r,r,1.7,new A.f(0,0,0,0),r,r,720,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
m=A.i(B.a,r,m,B.a,B.a)
j=A.j(r,[l,k,j])
k=s.fi(0)
l=s.h5()
p=A.w([new A.ej(o,!1),new A.k("div",A.i(B.a,r,n,B.a,B.a),A.j(r,[new A.k("div",m,j),k,l]))],p)
return new A.ax(s.c,new A.k("div",A.i(B.a,r,q,B.a,B.a),A.j(r,[p])))},
fi(a){var s,r,q=null
if(this.gdq().length===0){s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.r,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.f(48,q,48,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.G("This API page is being written.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.f(0,0,0,0),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
return new A.k("div",A.i(B.a,q,s,B.a,B.a),A.j(q,[r]))}s=t.N
return A.cf("api-md markdown-body",this.gdq(),"api-content",A.ai(["style",A.ai(["min-width","0","max-width","100%","overflow-wrap","break-word"],s,s)],s,t.X))},
h5(){var s,r,q,p,o,n,m=this,l=null,k="1 1 240px",j="color.line",i="color.panel",h="color.muted",g="color.text"
if(m.gaN()==null||m.gaN().length===0)s=m.gaK()==null||m.gaK().length===0
else s=!1
if(s)return A.cs("span",[],A.Z(t.N,t.X))
s=A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,l,l,l,B.i,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=[]
if(m.gaN()!=null&&m.gaN().length!==0&&m.gdP()!=null){q=m.gdP()
q.toString
p=A.a(l,l,l,l,l,new A.b(i,l),l,new A.m(1,new A.b(j,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,k,l,l,l,l,l,l,l,l,l,l,4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(16,16,16,16),l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=A.G("Previous API",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,11,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
n=m.gaN()
n.toString
r.push(A.V(l,[o,A.G(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(g,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],p,q,l,B.j,l))}else r.push(A.cs("span",[],A.Z(t.N,t.X)))
if(m.gaK()!=null&&m.gaK().length!==0&&m.gdK()!=null){q=m.gdK()
q.toString
p=A.a(l,l,l,l,l,new A.b(i,l),l,new A.m(1,new A.b(j,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,k,l,l,l,l,l,l,l,l,l,l,4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(16,16,16,16),l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=A.G("Next API",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,11,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
n=m.gaK()
n.toString
r.push(A.V(l,[o,A.G(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(g,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],p,q,l,B.j,l))}return A.w(r,s)}}
A.cO.prototype={
gdc(){return J.a9(J.M(this.c,"canAnswer"),!0)||A.dL(["admin","contributor","dev"],t.N).H(0,B.q.gak(0))},
E(){var s,r,q,p,o,n,m,l=this,k=null,j="solid",i="div",h="color.line",g="color.panel",f=l.c,e=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,24,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(k,B.n,k,B.n),k,k,960,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(48,16,48,16),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,B.u,k,k,k,new A.f(34,16,34,16),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.F("100%"),k,k,k,k),d=A.a(k,k,k,k,k,new A.b(g,k),k,new A.m(1,new A.b(h,k),j),k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(34,34,34,34),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,new A.f(24,24,24,24),k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),c=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,k,k,k,B.i,k,k,k,k,k,10,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
c=A.w([l.bW("Community"),l.bW("Ask clearly")],c)
s=A.b6("Ask a Flint question",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,31,750,k,k,k,k,k,k,k,k,k,k,k,k,1.12,new A.f(0,0,0,0),k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,38,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=A.G("Share the route, model, component, error message, or behavior you are working with. Good questions become useful docs for the whole community.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,15,k,k,k,k,k,k,k,k,k,k,k,k,k,1.7,new A.f(0,0,0,0),k,k,760,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=[new A.k(i,A.i(B.a,k,d,B.a,B.a),A.j(k,[c,s,r]))]
d=J.al(f)
if(!(J.a9(d.j(f,"isAuthenticated"),!0)||B.q.gV()!=null)){d=d.j(f,"authMode")
r.push(A.h2("/questions","Back to Questions","You can read questions without an account. Sign in or create a developer account to create a new thread.",(d==null?k:J.r(d))==="register","Sign in to ask"))}else{d=A.a(k,B.I,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,B.y,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.X,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
c=A.a(k,k,k,k,k,new A.b(g,k),k,new A.m(1,new A.b(h,k),j),k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.a5,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(24,24,24,24),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,0,k,k,k,k,k,k,new A.f(18,18,18,18),k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.F("100%"),k,k,k,k)
s=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=[]
p=l.f
if(p!=null){o=A.a(k,k,k,k,k,new A.d("rgba(248, 113, 113, 0.08)"),k,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),j),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(12,12,12,12),k,10,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
p=A.G(p,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.d("#fca5a5"),k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
q.push(new A.k(i,A.i(B.a,k,o,B.a,B.a),A.j(k,[p])))}p=l.d
o=p.Z(0,"title")
n=l.e
m=$.un()
q.push(A.bZ(o,n,m,"Title","title","Example: How do I define a User model?",!0,"text"))
q.push(A.bZ(p.Z(0,"tag"),l.e,m,"Topic","tag","Model, Flint UI, Routing, Auth...",!0,"text"))
q.push(A.f5(p.Z(0,"body"),l.e,"Question","body","Describe what you expected, what happened, and include any useful code or error output.",!0,10,$.uA()))
p=l.r
m=l.gdc()
n=A.H($.k6(),k,15)
q.push(A.ay(k,[n,A.u(l.gdc()?"Post Question":"Developer access required",k)],k,!m,p,k,B.ah,B.x,B.j,B.a0))
s=A.eB(q,s,l.gf1())
r.push(A.w([new A.k(i,A.i(B.a,k,c,B.a,B.a),A.j(k,[s])),l.hq()],d))}return new A.ax(f,new A.k(i,A.i(B.a,k,e,B.a,B.a),A.j(k,r)))},
b9(a){return this.hv(A.aa(a))},
hv(a9){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$b9=A.bf(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:if(t.m.b(a9))a9.preventDefault()
if(n.r){s=1
break}n.q(new A.kf(n))
a=n.d
a0=B.b.D(a.a0("title"))
a1=B.b.D(a.a0("tag"))
a2=B.b.D(a.a0("body"))
a3=t.N
a4=A.Z(a3,t.a)
a5=a0.length
if(a5===0)a4.i(0,"title",A.e(["The title field is required."],t.s))
else if(a5<6)a4.i(0,"title",A.e(["The title must be at least 6 characters."],t.s))
if(a1.length===0)a4.i(0,"tag",A.e(["The tag field is required."],t.s))
a5=a2.length
if(a5===0)a4.i(0,"body",A.e(["The body field is required."],t.s))
else if(a5<20)a4.i(0,"body",A.e(["The body must be at least 20 characters."],t.s))
a6=new A.bS(a4)
if(a4.gM(0)){f=n.bX(a6,"Please check your question.")
n.q(new A.kg(n,a6))
B.o.P(0,"Question not posted",f)
s=1
break}p=4
m=B.q.gV()
l=A.Z(a3,a3)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
k=l
s=7
return A.b0($.cc().aj("/questions/ask",A.ha(a.b,a3,t.X),k,t.P),$async$b9)
case 7:j=b1
i=j.b
if(j.f&&i!=null){l=J.M(i,"redirectTo")
h=l==null?null:J.r(l)
B.o.ad("Question posted","Opening the thread...")
l=h!=null&&h.length!==0
a=v.G
if(l)A.y(A.y(a.window).location).assign(h)
else A.y(A.y(a.window).location).assign("/questions")
s=1
break}g=A.cd(i)
l=i
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post question."
f=n.bX(g,l)
n.q(new A.kh(n,g,f))
B.o.P(0,"Question not posted",f)
p=2
s=6
break
case 4:p=3
a8=o.pop()
l=A.aL(a8)
if(l instanceof A.bQ){e=l
d=n.f0(e)
c=A.cd(d)
l=d
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post question."
b=n.bX(c,l)
n.q(new A.ki(n,c,b))
B.o.P(0,"Question not posted",b)}else{n.q(new A.kj(n))
B.o.P(0,"Question not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$b9,r)},
bX(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb3()
s=A.N(r).h("aO<2>")
return A.iz(new A.aO(r,s),3,s.h("o.E")).J(0," ")},
f0(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.ke(),t.N,t.z)
return null},
hq(){var s,r=null,q=A.a(r,r,r,r,r,new A.b("color.panelStrong",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("min(280px, 100%)"),r,r,r,r),r,r,r,r,r,r,r,r,new A.f(18,18,18,18),r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.F("100%"),r,r,r,r),p=A.ap("Good topics",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,16,700,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.f(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),o=A.G("Use a short topic so other developers can find your question later.",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.6,new A.f(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),n=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,r,r,r,B.i,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),m=[]
for(s=0;s<8;++s)m.push(this.bW(B.jm[s]))
n=A.w(m,n)
return new A.k("div",A.i(B.a,r,q,B.a,B.a),A.j(r,[p,o,n]))},
bW(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.kf.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.B
s.f=null},
$S:0}
A.kg.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
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
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kj.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post question. Please try again."},
$S:0}
A.ke.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dl.prototype={
gaq(){var s=t.fF.a(J.M(this.c,"post"))
s=s==null?null:J.aU(s,t.N,t.z)
return s==null?B.Z:s},
gf9(){var s,r,q=J.M(this.c,"comments")
if(t.j.b(q)){s=J.cu(q,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.kA()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P},
E(){var s,r,q,p,o,n,m,l,k=this,j=null,i="max-content",h="Back to Blog",g="div",f="color.muted",e=k.c,d=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(j,B.n,j,B.n),j,j,960,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(48,16,48,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,B.u,j,j,j,new A.f(34,16,34,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,j),c=k.gaq().j(0,"title"),b=c==null?j:J.r(c)
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
c=A.a(j,j,j,j,j,A.aM(A.e([A.aW(145,A.e([new A.L(new A.d("rgba(16, 185, 129, 0.12)"),0),new A.L(new A.d("rgba(14, 165, 233, 0.08)"),45),new A.L(new A.d("rgba(15, 23, 42, 0.82)"),100)],c)),B.aq],c)),j,B.bd,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(32,32,32,32),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,0,j,j,B.u,j,j,j,B.ab,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F(i),j,j,j,j)
o=A.V(j,[A.H($.pN(),j,15),A.u(h,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,700,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],o,"/blog",j,B.j,j)
n=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
m=A.a(j,j,j,j,j,new A.d("rgba(5, 150, 105, 0.08)"),j,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),j,j,j,j,j,j,j,j,j,j,B.a7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(5,10,5,10),j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F(i),j,j,j,j)
l=A.u(s,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.primary",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,11,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
l=[new A.k(g,A.i(B.a,j,m,B.a,B.a),A.j(j,[l]))]
if(r.length!==0){m=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
l.push(A.w([A.H($.qz(),new A.b(f,j),13),A.u(r,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,12,650,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],m))}o=[o,A.w(l,n),A.b6(b,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.text",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,31,760,j,j,j,j,j,j,j,j,j,j,j,j,1.12,new A.f(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,40,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))]
if(p.length!==0)o.push(A.G(p,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,1.72,new A.f(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)))
n=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o.push(A.w([A.H($.qG(),new A.b(f,j),15),A.u("By "+q,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,700,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],n))
n=A.a(j,j,j,j,j,j,j,new A.m(0,new A.b("color.line",j),"solid"),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(8,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
m=J.al(e)
l=m.j(e,"postBodyHtml")
l=l==null?j:J.r(l)
l=A.cf("markdown-body",l==null?"":l,"blog-post-body",B.aI)
o.push(new A.k(g,A.i(B.a,j,n,B.a,B.a),A.j(j,[l])))
o=[new A.k(g,A.i(B.a,j,c,B.a,B.a),A.j(j,o)),k.fa()]
if(J.a9(m.j(e,"isAuthenticated"),!0)||B.q.gV()!=null)o.push(k.f8())
else o.push(A.h2("/blog",h,"Create an account or sign in to join the discussion on this Flint post.",!1,"Sign in to comment"))
return new A.ax(e,new A.k(g,A.i(B.a,j,d,B.a,B.a),A.j(j,o)))},
fa(){var s,r,q,p,o,n,m,l,k=null,j="color.text",i="color.muted",h=this.gf9(),g=A.a(k,k,k,k,k,new A.b("color.panel",k),k,new A.m(1,new A.b("color.line",k),"solid"),k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(24,24,24,24),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,new A.f(18,18,18,18),k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),f=A.a(k,B.d,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,k,k,k,k,k,k,k,k,k,12,k,k,k,k,k,B.m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
f=[A.w([A.ap("Comments",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b(j,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)),A.u(""+h.length,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.primary",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],f)]
s=h.length
if(s===0)f.push(A.G("No comments yet. Start the conversation.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)))
else for(r=t.P,q=0;q<h.length;h.length===s||(0,A.aE)(h),++q){p=r.a(h[q])
o=J.al(p)
n=o.j(p,"author")
n=n==null?k:J.r(n)
if(n==null)n="Community"
m=A.i(B.a,k,new A.n(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,800,k,k,new A.b(j,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a)
n=A.j(n,B.h)
l=o.j(p,"date")
l=l==null?k:J.r(l)
if(l==null)l=""
l=A.w([new A.a7("span",m,n),new A.a7("span",A.i(B.a,k,new A.n(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,12,k,k,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a),A.j(l,B.h))],new A.n(k,k,k,k,k,k,k,k,B.c,8,B.d,k,k,k,k,B.i,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
p=o.j(p,"body")
p=p==null?k:J.r(p)
if(p==null)p=""
o=A.i(B.a,k,new A.n(k,new A.f(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,14,k,1.7,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a)
p=A.j(p,B.h)
f.push(new A.k("div",A.i(B.a,k,new A.n(new A.f(16,16,16,16),k,k,k,k,k,k,k,B.e,8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.panelStrong",k),14,new A.m(1,new A.d("rgba(51, 65, 85, 0.78)"),"solid"),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a),A.j(k,[l,new A.a7("p",o,p)])))}return new A.k("div",A.i(B.a,k,g,B.a,B.a),A.j(k,f))},
f8(){var s,r,q,p,o=this,n=null,m=o.gaq().j(0,"slug"),l=m==null?n:J.r(m)
if(l==null)l=""
m=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,new A.f(22,22,22,22),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
q=o.f
if(q!=null){p=A.a(n,n,n,n,n,new A.d("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.G(q,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r.push(new A.k("div",A.i(B.a,n,p,B.a,B.a),A.j(q,B.h)))}r.push(A.f5(o.d.Z(0,"body"),o.e,"Comment","body","Share a thought, question, or improvement...",!0,6,$.uz()))
q=o.r
r.push(A.ay(n,[A.H($.k6(),n,15),A.u("Submit Comment",n)],n,!1,q,n,B.ah,B.x,B.j,B.a0))
s=A.eB(r,s,new A.kz(o,l))
return new A.k("div",A.i(B.a,n,m,B.a,B.a),A.j(n,[s]))},
bx(a,b){return this.hz(a,b)},
hz(a5,a6){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bx=A.bf(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:if(t.m.b(a5))a5.preventDefault()
if(n.r){s=1
break}n.q(new A.kC(n))
c=n.d
b=t.N
a=A.Z(b,t.a)
a0=B.b.D(c.a0("body")).length
if(a0===0)a.i(0,"body",A.e(["The body field is required."],t.s))
else if(a0<3)a.i(0,"body",A.e(["The body must be at least 3 characters."],t.s))
a1=new A.bS(a)
if(a.gM(0)){h=n.c_(a1,"Please check your comment.")
n.q(new A.kD(n,a1))
B.o.P(0,"Comment not posted",h)
s=1
break}p=4
m=B.q.gV()
a0=$.cc()
a2="/blog/"+a6
c=A.ha(c.b,b,t.X)
l=A.Z(b,b)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(a0.aj(a2+"/comments",c,l,t.P),$async$bx)
case 7:k=a8
j=k.b
if(k.f&&j!=null){B.o.ad("Comment posted","Refreshing comments...")
l=J.M(j,"redirectTo")
l=l==null?null:J.r(l)
if(l==null)l=a2
A.y(A.y(v.G.window).location).assign(l)
s=1
break}i=A.cd(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post comment."
h=n.c_(i,l)
n.q(new A.kE(n,i,h))
B.o.P(0,"Comment not posted",h)
p=2
s=6
break
case 4:p=3
a4=o.pop()
l=A.aL(a4)
if(l instanceof A.bQ){g=l
f=n.f4(g)
e=A.cd(f)
l=f
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post comment."
d=n.c_(e,l)
n.q(new A.kF(n,e,d))
B.o.P(0,"Comment not posted",d)}else{n.q(new A.kG(n))
B.o.P(0,"Comment not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$bx,r)},
c_(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb3()
s=A.N(r).h("aO<2>")
return A.iz(new A.aO(r,s),3,s.h("o.E")).J(0," ")},
f4(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kB(),t.N,t.z)
return null}}
A.kA.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.kz.prototype={
$1(a){return this.a.bx(A.aa(a),this.b)},
$S:1}
A.kC.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.B
s.f=null},
$S:0}
A.kD.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
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
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kG.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post comment. Please try again."},
$S:0}
A.kB.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dm.prototype={
gh4(){var s,r,q=J.M(this.c,"posts")
if(t.j.b(q)){s=J.cu(q,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.kH()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P},
gdf(){return J.a9(J.M(this.c,"canWriteBlog"),!0)||A.dL(["admin","contributor"],t.N).H(0,B.q.gak(0))},
E(){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h="solid",g="rgba(14, 165, 233, 0.1)",f="color.text",e="color.muted",d="color.primary",c=k.gh4(),b=c.length===0?j:B.f.gF(c),a=c.length<=1?B.P:A.q1(c,1,j,A.au(c).c).iv(0),a0=k.hF(c),a1=k.c,a2=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(j,B.n,j,B.n),j,j,1152,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(48,16,48,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,B.u,j,j,j,new A.f(34,16,34,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,j),a3=c.length,a4=a0.length,a5=t.G,a6=A.a(j,j,j,j,j,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(16, 185, 129, 0.16)"),0),new A.L(new A.d(g),42),new A.L(new A.d("rgba(15, 23, 42, 0.82)"),100)],a5)),B.aq],a5)),j,B.bd,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(40,40,40,40),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,B.T,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a7=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,20,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a8=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,720,j,j,0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a9=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a9=A.w([k.c0("Flint Blog"),k.c0("Engineering notes")],a9)
s=A.b6("Ideas, releases, and practical Flint engineering.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,32,760,j,j,j,j,j,j,j,j,j,j,j,j,1.08,new A.f(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,42,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
r=A.G("Read framework updates, backend patterns, UI notes, deployment lessons, and production guidance from the Flint ecosystem.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,1.7,new A.f(0,0,0,0),j,j,680,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a8=A.i(B.a,j,a8,B.a,B.a)
r=A.j(j,[a9,s,r])
s=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,220,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.n,j,j,j,j),j,0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,j)
a3=k.dY(""+a3,"Published posts")
a4=k.dY(""+a4,"Topics covered")
a7=A.w([new A.k(i,a8,r),new A.k(i,A.i(B.a,j,s,B.a,B.a),A.j(j,[a3,a4]))],a7)
a4=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a3=A.a(j,B.d,j,j,j,new A.d("rgba(52, 211, 153, 0.14)"),j,new A.m(1,new A.d("rgba(52, 211, 153, 0.42)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(10,16,10,16),j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a8=A.H(k.gdf()?$.tJ():$.qD(),j,16)
a9=k.gdf()?"Write a Post":"Sign in to Write"
a3=[A.V(j,[a8,A.u(a9,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(d,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],a3,"/blog/create",j,B.j,j)]
if(!(J.a9(J.M(a1,"isAuthenticated"),!0)||B.q.gV()!=null)){a8=A.a(j,B.d,j,j,j,new A.d(g),j,new A.m(1,new A.d("rgba(125, 211, 252, 0.34)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(10,16,10,16),j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a3.push(A.V(j,[A.H($.k4(),j,16),A.u("Create account",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.accent",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],a8,"/blog/create?mode=register",j,B.j,j))}a3=A.w(a3,a4)
a3=[new A.k(i,A.i(B.a,j,a6,B.a,B.a),A.j(j,[a7,a3]))]
if(a0.length!==0)a3.push(k.hH(a0))
if(b==null){a4=A.a(j,j,j,j,j,new A.b("color.panel",j),j,new A.m(1,new A.b("color.line",j),h),j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(28,28,28,28),j,18,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a5=A.ap("No posts yet",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a6=A.G("Once the first Flint post is published, it will appear here.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
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
a4=A.aM(A.e([A.aW(145,A.e([new A.L(new A.d("rgba(14, 165, 233, 0.14)"),0),new A.L(new A.d("rgba(15, 23, 42, 0.66)"),58),new A.L(new A.d("rgba(2, 6, 23, 0.78)"),100)],a5)),B.dA],a5))
a6=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(26,26,26,26),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a6=A.a(j,j,j,j,j,a4,j,B.cY,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,A.a(j,B.cN,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.eD(A.e([new A.aG("minmax("+A.X(B.a4,!1)+", "+A.X(new A.F("1.35fr"),!1)+")"),new A.aG("minmax("+A.X(280,!1)+", "+A.X(new A.F("0.65fr"),!1)+")")],a5)),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,a6,j,0,j,j,j,j,j,j,B.aa,j,20,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a5=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a4=k.dI(n,l)
a7=A.ap(q,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,26,750,j,j,j,j,j,j,j,j,j,j,j,j,1.14,new A.f(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,32,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a8=A.G(o,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,15,j,j,j,j,j,j,j,j,j,j,j,j,j,1.72,new A.f(0,0,0,0),j,j,720,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a9=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,B.i,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
s=k.da(m)
r=A.a(j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a9=A.w([s,A.w([A.u("Read featured post",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(d,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),A.H($.bN(),new A.b(d,j),15)],r)],a9)
a5=A.i(B.a,j,a5,B.a,B.a)
a9=A.j(j,[a4,a7,a8,a9])
a8=A.a(j,j,j,j,j,new A.b("color.panelStrong",j),j,new A.m(1,new A.d("rgba(51, 65, 85, 0.82)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(22,22,22,22),j,18,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a7=A.H($.cb(),B.a2,24)
a4=A.bK("Latest insight",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,20,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.f(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
r=A.G("A short, readable article from the Flint team and community.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,j,j,j,j,j,j,j,j,j,j,j,j,j,1.65,new A.f(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a6=[A.V(j,[new A.k(i,a5,a9),new A.k(i,A.i(B.a,j,a8,B.a,B.a),A.j(j,[a7,a4,r]))],a6,p,j,B.j,j)]
if(a.length!==0)a6.push(k.h3(a))
B.f.S(a3,a6)}return new A.ax(a1,new A.k(i,A.i(B.a,j,a2,B.a,B.a),A.j(j,a3)))},
hH(a){var s,r,q,p,o,n,m,l=null,k="color.muted"
t.a.a(a)
s=A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,l,l,l,B.i,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=[]
for(q=A.q1(a,0,A.fO(10,"count",t.S),A.au(a).c),p=q.$ti,q=new A.bz(q,q.gk(0),p.h("bz<as.E>")),p=p.h("as.E");q.m();){o=q.d
if(o==null)o=p.a(o)
n=A.H($.tD(),new A.b(k,l),13)
m=A.i(B.a,l,new A.n(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,750,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a)
o=A.j(o,B.h)
r.push(new A.k("div",A.i(B.a,l,new A.n(new A.f(7,12,7,12),l,l,l,l,l,l,l,B.k,8,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.panel",l),999,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.j(l,[n,new A.a7("span",m,o)])))}return new A.k("div",A.i(B.a,l,s,B.a,B.a),A.j(l,r))},
h3(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="color.muted"
t.p.a(a)
s=A.X(280,!1)
r=A.X(B.H,!1)
r=A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,B.e,e,e,e,e,e,e,e,e,e,e,e,e,16,e,B.K,e,e,e,e,e,e,e,e,e,e,e,e,e,e,A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b3("repeat("+A.X("auto-fit",!0)+", "+A.X(new A.aG("minmax("+s+", "+r+")"),!1)+")"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)
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
s.push(A.V(e,[this.dI(h,f==null?"":f),new A.a7("h2",A.i(B.a,e,new A.n(e,new A.f(0,0,0,0),e,e,e,new A.F("100%"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,21,750,1.25,e,new A.b("color.text",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(k,B.h)),new A.a7("p",A.i(B.a,e,new A.n(e,new A.f(0,0,0,0),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,13,e,1.68,e,new A.b(d,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(i,B.h)),A.w([this.da(g),A.H($.bN(),new A.b(d,e),15)],new A.n(e,e,e,e,e,e,e,e,B.c,12,B.d,e,B.m,e,e,B.i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e))],new A.n(new A.f(20,20,20,20),e,e,e,0,e,e,e,B.e,14,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b("color.panel",e),16,new A.m(1,new A.b("color.line",e),"solid"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),j,e,B.j,e))}return new A.k("div",A.i(B.a,e,r,B.a,B.a),A.j(e,s))},
dI(a,b){var s,r=null,q="color.muted",p=A.a(r,B.d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,r,r,r,B.i,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),o=[this.c0(a)]
if(b.length!==0){s=A.a(r,B.d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.k,r,r,r,r,r,r,r,r,r,r,r,r,6,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
o.push(A.w([A.H($.qz(),new A.b(q,r),13),A.u(b,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b(q,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,650,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))],s))}return A.w(o,p)},
da(a){var s=null,r="color.muted",q=A.a(s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.w([A.H($.qG(),new A.b(r,s),14),A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b(r,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],q)},
c0(a){var s=null,r=A.a(s,s,s,s,s,B.dF,s,B.cP,s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b2,s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.m3,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
dY(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.d("rgba(51, 65, 85, 0.82)"),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,3,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(16,16,16,16),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,24,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))},
hF(a){var s,r,q,p,o
t.p.a(a)
s=A.dK(t.N)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.aE)(a),++q){p=J.M(a[q],"tag")
o=p==null?null:B.b.D(J.r(p))
if(o!=null&&o.length!==0)s.u(0,o)}r=A.aw(s,s.$ti.c)
return r}}
A.kH.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.cP.prototype={
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="color.line",j="color.panel",i="color.text",h=o.c,g=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,24,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(n,B.n,n,B.n),n,n,960,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(48,16,48,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,B.u,n,n,n,new A.f(34,16,34,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F("100%"),n,n,n,n),f=A.a(n,n,n,n,n,new A.b(j,n),n,new A.m(1,new A.b(k,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(34,34,34,34),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,new A.f(24,24,24,24),n,22,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),e=A.G("Blog",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),d=A.b6("Write a Flint post",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(i,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,31,750,n,n,n,n,n,n,n,n,n,n,n,n,1.12,new A.f(0,0,0,0),n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),c=A.G("Publish framework updates, tutorials, architecture notes, and practical lessons for the Flint community.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.muted",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,15,n,n,n,n,n,n,n,n,n,n,n,n,n,1.7,new A.f(0,0,0,0),n,n,760,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
c=[new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[e,d,c]))]
f=J.al(h)
if(!(J.a9(f.j(h,"isAuthenticated"),!0)||B.q.gV()!=null)){f=f.j(h,"authMode")
c.push(A.h2("/blog","Back to Blog","Create an account or sign in to draft Flint articles, release notes, and community tutorials.",(f==null?n:J.r(f))==="register","Sign in to write"))}else if(!(J.a9(f.j(h,"canWriteBlog"),!0)||A.dL(["admin","contributor"],t.N).H(0,B.q.gak(0)))){f=A.a(n,n,n,n,n,new A.d("rgba(251, 191, 36, 0.08)"),n,new A.m(1,new A.d("rgba(251, 191, 36, 0.32)"),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(24,24,24,24),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
e=A.ap("Writer access required",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(i,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,22,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
d=A.G("Your account is signed in, but it does not currently have permission to publish blog posts.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.warning",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1.6,new A.f(8,n,0,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
c.push(new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[e,d])))}else{f=A.a(n,n,n,n,n,new A.b(j,n),n,new A.m(1,new A.b(k,n),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(24,24,24,24),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,0,n,n,n,n,n,n,new A.f(18,18,18,18),n,18,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
e=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,18,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
d=[]
s=o.f
if(s!=null){r=A.a(n,n,n,n,n,new A.d("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.G(s,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
d.push(new A.k(l,A.i(B.a,n,r,B.a,B.a),A.j(s,B.h)))}s=o.d
r=s.Z(0,"title")
q=o.e
p=$.um()
d.push(A.bZ(r,q,p,"Title","title","Example: Building controllers with Flint",!0,"text"))
d.push(A.bZ(s.Z(0,"tag"),o.e,p,"Tag","tag","Guide, Release, Architecture...",!0,"text"))
d.push(A.f5(s.Z(0,"body"),o.e,"Body","body","Write the full post in Markdown...",!0,14,$.uy()))
s=o.r
d.push(A.ay(n,[A.H($.k6(),n,15),A.u("Publish Post",n)],n,!1,s,n,B.ah,B.x,B.j,B.a0))
e=A.eB(d,e,o.gf6())
c.push(new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[e])))}return new A.ax(h,new A.k(l,A.i(B.a,n,g,B.a,B.a),A.j(n,c)))},
ba(a){return this.hw(A.aa(a))},
hw(a8){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$ba=A.bf(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:if(t.m.b(a8))a8.preventDefault()
if(n.r){s=1
break}n.q(new A.kJ(n))
b=n.d
a=B.b.D(b.a0("title"))
a0=B.b.D(b.a0("tag"))
a1=B.b.D(b.a0("body"))
a2=t.N
a3=A.Z(a2,t.a)
a4=a.length
if(a4===0)a3.i(0,"title",A.e(["The title field is required."],t.s))
else if(a4<6)a3.i(0,"title",A.e(["The title must be at least 6 characters."],t.s))
if(a0.length===0)a3.i(0,"tag",A.e(["The tag field is required."],t.s))
a4=a1.length
if(a4===0)a3.i(0,"body",A.e(["The body field is required."],t.s))
else if(a4<40)a3.i(0,"body",A.e(["The body must be at least 40 characters."],t.s))
a5=new A.bS(a3)
if(a3.gM(0)){g=n.c1(a5,"Please check your post.")
n.q(new A.kK(n,a5))
B.o.P(0,"Post not published",g)
s=1
break}p=4
m=B.q.gV()
a4=$.cc()
b=A.ha(b.b,a2,t.X)
l=A.Z(a2,a2)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(a4.aj("/blog/create",b,l,t.P),$async$ba)
case 7:k=b0
j=k.b
if(k.f&&j!=null){l=J.M(j,"redirectTo")
i=l==null?null:J.r(l)
B.o.ad("Post published","Opening the article...")
l=i==null||i.length===0?"/blog":i
A.y(A.y(v.G.window).location).assign(l)
s=1
break}h=A.cd(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not publish post."
g=n.c1(h,l)
n.q(new A.kL(n,h,g))
B.o.P(0,"Post not published",g)
p=2
s=6
break
case 4:p=3
a7=o.pop()
l=A.aL(a7)
if(l instanceof A.bQ){f=l
e=n.f5(f)
d=A.cd(e)
l=e
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not publish post."
c=n.c1(d,l)
n.q(new A.kM(n,d,c))
B.o.P(0,"Post not published",c)}else{n.q(new A.kN(n))
B.o.P(0,"Post not published",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$ba,r)},
c1(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb3()
s=A.N(r).h("aO<2>")
return A.iz(new A.aO(r,s),3,s.h("o.E")).J(0," ")},
f5(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.kI(),t.N,t.z)
return null}}
A.kJ.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.B
s.f=null},
$S:0}
A.kK.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
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
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kN.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not publish post. Please try again."},
$S:0}
A.kI.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dr.prototype={
gca(){var s,r,q=J.M(this.b,"entries")
if(t.j.b(q)){s=J.cu(q,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.kT()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P},
E(){var s,r,q,p,o,n,m,l,k=this
if(k.gca().length===0)s='<style>\n  #changelog-root, #changelog-root * { box-sizing: border-box; }\n  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }\n  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }\n  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }\n  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }\n  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }\n  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }\n  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }\n  .cl-md li { margin-bottom: 6px; }\n  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }\n  @media (max-width: 640px) {\n    .changelog-shell { padding: 34px 16px !important; }\n    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }\n  }\n</style>\n<div class="changelog-shell">\n  <div class="changelog-hero">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>\n    </div>\n    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>\n    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>\n  </div>\n\n  <div style="margin-top:28px;padding:24px;border-radius:14px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);">\n    <p style="color:#94a3b8;margin:0;">No changelog entries are available yet.</p>\n  </div>\n\n'
else for(r=0,s='<style>\n  #changelog-root, #changelog-root * { box-sizing: border-box; }\n  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }\n  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }\n  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }\n  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }\n  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }\n  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }\n  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }\n  .cl-md li { margin-bottom: 6px; }\n  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }\n  @media (max-width: 640px) {\n    .changelog-shell { padding: 34px 16px !important; }\n    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }\n  }\n</style>\n<div class="changelog-shell">\n  <div class="changelog-hero">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>\n    </div>\n    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>\n    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>\n  </div>\n\n';r<k.gca().length;++r,s=n){q=k.gca()
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
return new A.ax(k.b,A.cf(null,s.charCodeAt(0)==0?s:s,"changelog-root",B.cz))}}
A.kT.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.ds.prototype={
gdi(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="100%",e="color.line",d="rgba(52, 211, 153, 0.1)",c="color.panel",b="color.text",a="color.muted",a0="color.primary",a1=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,1040,B.aU,i,i,i,i,i,i,i,i,B.b1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(f),i,i,i,i),a2=t.G
a2=A.a(i,i,i,i,i,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(14, 165, 233, 0.18)"),0),new A.L(new A.d(d),48),new A.L(new A.b(c,i),100)],a2)),new A.b(c,i)],a2)),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.T,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,24,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.w([j.dj("FlintClient"),j.dj("Dart HTTP")],q)
p=A.b6("A production-ready Dart client for modern APIs.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.G("FlintClient gives Dart and Flutter apps a clean way to call APIs with retries, caching, cancellation, structured errors, lifecycle hooks, and strict or lenient parsing.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.i(B.a,i,r,B.a,B.a)
o=A.j(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,280,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(f),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.L,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.w([A.H($.ef(),B.a2,16),A.u("Install",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.accent",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aX,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.u("dart pub add flint_client",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,700,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.i(B.a,i,m,B.a,B.a)
l=A.j(i,[l])
k=A.G("Use it from Dart CLIs, Flutter apps, dashboards, and backend tools.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.i(B.a,i,q,B.a,B.a)
k=A.j(i,[n,new A.k(g,m,l),k])
s=A.w([new A.k(g,r,o),new A.k(g,A.i(B.a,i,p,B.a,B.a),A.j(i,[new A.k(g,q,k)]))],s)
k=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.w([j.c3("pub.dev","https://pub.dev/packages/flint_client"),j.c3("GitHub","https://github.com/flintdart/flint-client"),j.c3("Examples","/examples")],k)
a2=A.i(B.a,i,a2,B.a,B.a)
k=A.j(i,[s,k])
s=A.X(240,!1)
q=A.X(B.H,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.K,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b3("repeat("+A.X("auto-fit",!0)+", "+A.X(new A.aG("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.bc($.pM(),"Retries that understand HTTP","Backoff, retry-after support, and safer behavior for idempotent requests.",B.a2)
p=j.bc($.qy(),"Cache with TTL control","Cache responses intentionally and avoid repeated network work.",B.O)
o=j.bc($.qx(),"Structured errors","Handle timeout, network, HTTP, parse, and cancelled states clearly.",B.bv)
r=j.bc($.tH(),"Lifecycle hooks","Attach logging, metrics, correlation IDs, and request tracing cleanly.",B.as)
q=A.i(B.a,i,q,B.a,B.a)
r=A.j(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.ad,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.u,i,i,i,B.L,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(f),i,i,i,i)
p=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,12,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.ap("Client documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.G("Setup, requests, files, WebSocket usage, error handling, parse modes, and observability.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.i(B.a,i,s,B.a,B.a)
m=A.j(i,[l,m])
l=A.a(i,B.d,i,i,i,new A.d(d),i,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.w([new A.k(g,s,m),A.V(i,[A.u("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.bN(),new A.b(a0,i),14)],l,"#basics",i,B.j,i)],p)]
if(j.gdi().length===0)p.push(A.G("The FlintClient guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else{s=t.N
p.push(A.cf("api-md markdown-body",j.gdi(),"client-content",A.ai(["style",A.ai(["min-width","0","max-width","100%","overflow-wrap","break-word"],s,s)],s,t.X)))}s=A.i(B.a,i,o,B.a,B.a)
p=A.j(i,p)
a1=A.i(B.a,i,a1,B.a,B.a)
p=A.j(i,[new A.k(g,a2,k),new A.k(g,q,r),new A.k(g,s,p)])
return new A.ax(j.c,new A.k(g,A.i(B.a,i,B.aw,B.a,B.a),A.j(i,[new A.k(g,a1,p)])))},
bc(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.L,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,d,20),p=A.bK(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p,o]))},
c3(a,b){var s=null,r=B.b.K(b,"http")?"_blank":s
return A.V(a,B.h,A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b6,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,r,B.j,s)},
dj(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.F("max-content"),s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.dw.prototype={
E(){var s=null,r=this.b,q=J.M(r,"contentHtml")
q=q==null?s:J.r(q)
q=A.cf(s,q==null?"":q,"content-page",B.a)
return new A.ax(r,new A.k("div",A.i(B.a,s,B.fy,B.a,B.a),A.j(s,[q])))}}
A.dz.prototype={
E(){return new A.ax(this.b,A.cf(null,A.cK("<style>\n  #examples-root, #examples-root * { box-sizing: border-box; }\n  #examples-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  #examples-root pre { max-width: 100%; overflow-x: auto; }\n  #examples-root code { overflow-wrap: normal; }\n  @media (max-width: 640px) {\n    #examples-root .examples-shell { padding: 34px 16px !important; }\n    #examples-root .examples-hero { padding: 24px !important; border-radius: 18px !important; }\n    #examples-root .examples-title { font-size: 30px !important; line-height: 1.12 !important; }\n    #examples-root .examples-section { padding: 18px !important; border-radius: 14px !important; }\n    #examples-root ol { padding-left: 18px !important; }\n    #examples-root pre { margin-left: -2px !important; margin-right: -2px !important; padding: 14px !important; }\n  }\n</style>\n<div class=\"examples-shell\" style=\"width:100%;max-width:1152px;padding:48px 16px;color:#e2e8f0;margin:0 auto;overflow:hidden;\">\n  <div class=\"examples-hero\" style=\"padding:40px;border-radius:24px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.7);\">\n    <div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:20px;\">\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;\">Examples</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#d1fae5;\">{{FLINT_DART_VERSION}}</span>\n      <span style=\"font-size:12px;color:#64748b;\">Hands-on tutorials</span>\n    </div>\n    <h1 class=\"examples-title\" style=\"font-size:36px;font-weight:600;color:#fff;margin:0 0 12px;\">Examples &amp; Tutorials</h1>\n    <p style=\"font-size:15px;color:#94a3b8;margin:0 0 16px;\">Learn by example with practical, end-to-end walkthroughs.</p>\n    <div style=\"display:flex;flex-wrap:wrap;gap:12px;\">\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">Auth ready</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">ORM included</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">Views + APIs</span>\n    </div>\n  </div>\n\n  <section class=\"examples-section\" style=\"margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);\">\n    <h2 style=\"font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;\">Blog Platform Tutorial</h2>\n    <p style=\"color:#94a3b8;margin:0 0 8px;\">Build a blog with role-based publishing, comments, and moderation.</p>\n    <span style=\"display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;\">Beginner</span>\n\n    <div style=\"margin-top:24px;\">\n      <h3 style=\"font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;\">Roles &amp; Permissions</h3>\n      <ul style=\"list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;\">\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">admin</code> and <code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">contributor</code> can publish blog posts.</li>\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">dev</code> can create questions/issues, answer, and comment.</li>\n        <li>All authenticated roles can comment on posts.</li>\n      </ul>\n    </div>\n\n    <ol style=\"margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;\">\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Setup Project</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Create a new Flint project and generate models:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">flint create blog_platform\ncd blog_platform\nflint --make-model User\nflint --make-model Post\nflint --make-model Comment\nflint migrate</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Create Models</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Define User, Post, and Comment models with relations:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class User extends Model&lt;User&gt; {\n  User() : super(() =&gt; User());\n\n  String? get name =&gt; getAttribute('name');\n  String? get email =&gt; getAttribute('email');\n  String? get role =&gt; getAttribute('role');\n\n  @override\n  Table get table =&gt; Table(\n        name: 'users',\n        columns: [\n          Column(name: 'name', type: ColumnType.string, length: 255),\n          Column(name: 'email', type: ColumnType.string, length: 255),\n          Column(name: 'password', type: ColumnType.string),\n          Column(name: 'role', type: ColumnType.string, length: 50),\n        ],\n      );\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Role Guard Middleware</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Gate publishing routes to admin and contributor roles:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class RoleGuard extends Middleware {\n  RoleGuard(this.allowedRoles);\n  final List&lt;String&gt; allowedRoles;\n\n  @override\n  Handler handle(Handler next) {\n    return (Context ctx) async {\n      final user = await ctx.req.user;\n      if (user == null) return ctx.res.status(401).json({'error': 'Unauthorized'});\n      final role = user['role'];\n      if (!allowedRoles.contains(role)) return ctx.res.status(403).json({'error': 'Forbidden'});\n      return next(ctx);\n    };\n  }\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Create Controllers</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Publish posts with role checks and comment support:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/posts', (Context ctx) async {\n  final data = await ctx.req.validate({\n    'title': 'required|string',\n    'content': 'required|string',\n  });\n  final user = await ctx.req.user;\n  final post = await Post().create({\n    'title': data['title'],\n    'content': data['content'],\n    'slug': data['title'].toString().toLowerCase().replaceAll(' ', '-'),\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'post': post}, status: 201);\n}).useMiddleware(RoleGuard(['admin', 'contributor']));</code></pre>\n      </li>\n    </ol>\n  </section>\n\n  <section class=\"examples-section\" style=\"margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);\">\n    <h2 style=\"font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;\">Questions &amp; Answers Tutorial</h2>\n    <p style=\"color:#94a3b8;margin:0 0 8px;\">Build a Q&amp;A system with role-based posting for issues and answers.</p>\n    <span style=\"display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(56,189,248,0.3);background:rgba(56,189,248,0.1);font-size:11px;font-weight:600;color:#bae6fd;\">Intermediate</span>\n\n    <div style=\"margin-top:24px;\">\n      <h3 style=\"font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;\">Roles &amp; Permissions</h3>\n      <ul style=\"list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;\">\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">dev</code> can post questions/issues and answers.</li>\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">admin</code> and <code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">contributor</code> can answer and comment as well.</li>\n        <li>All authenticated roles can comment on Q&amp;A threads.</li>\n      </ul>\n    </div>\n\n    <ol style=\"margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;\">\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Models</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Define Question and Answer models:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class Question extends Model&lt;Question&gt; {\n  Question() : super(() =&gt; Question());\n  @override\n  Table get table =&gt; Table(\n        name: 'questions',\n        columns: [\n          Column(name: 'title', type: ColumnType.string, length: 255),\n          Column(name: 'body', type: ColumnType.text),\n          Column(name: 'user_id', type: ColumnType.string),\n          Column(name: 'status', type: ColumnType.string, length: 50),\n        ],\n      );\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Routes &amp; Role Guard</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Allow devs to post questions and answers:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/questions', (Context ctx) async {\n  final data = await ctx.req.validate({\n    'title': 'required|string',\n    'body': 'required|string',\n  });\n  final user = await ctx.req.user;\n  final question = await Question().create({\n    'title': data['title'],\n    'body': data['body'],\n    'status': 'open',\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'question': question}, status: 201);\n}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Comments</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Reuse the comment model to attach comments to questions or answers:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/questions/:id/comments', (Context ctx) async {\n  final data = await ctx.req.validate({'content': 'required|string'});\n  final user = await ctx.req.user;\n  final comment = await Comment().create({\n    'content': data['content'],\n    'question_id': ctx.req.param('id'),\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'comment': comment});\n}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>\n      </li>\n    </ol>\n  </section>\n</div>\n","{{FLINT_DART_VERSION}}","v 1.3.2"),"examples-root",B.cz))}}
A.dB.prototype={
dr(a){A.pk(a)
this.q(new A.ly(this))
A.c5(B.az,new A.lz(this))},
fm(a){A.pk(a)
this.q(new A.lv(this))
A.c5(B.az,new A.lw(this))},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="solid",a1="div",a2="#10b981",a3="#06b6d4",a4="#8b5cf6",a5="#f59e0b",a6="100%",a7="color.bg",a8="color.text",a9="color.line",b0="color.panel",b1="color.muted",b2=$.qM(),b3=b.d
if(!(b3<4))return A.t(b2,b3)
s=b2[b3]
b3=A.a(a,B.d,a,a,a,new A.b(a7,a),a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,B.c,a,a,a,B.y,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,a,a)
b2=t.G
r=A.a(a,a,a,a,a,A.aM(A.e([A.bm(B.iy,B.jl),A.bm(B.iw,B.jp),A.aW(155,B.cr)],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)
r=A.a(a,a,a,a,a,new A.b(a7,a),a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,A.a(a,a,a,a,a,A.aM(A.e([A.bm(B.ci,B.cp),A.bm(B.it,B.cq),A.aW(160,A.e([new A.L(new A.b(a7,a),0),new A.L(new A.b(b0,a),55),new A.L(new A.b("color.panelStrong",a),100)],b2))],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,r,a,a,a,a,a,a,a,a,a,a,B.u,a,a,a,a,B.a_,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,a,a)
q=A.a(a,B.d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.e,a,a,a,a,a,a,a,a,a,a,a,a,40,a,B.K,a,a,a,a,a,a,a,A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,A.eD(A.e([new A.aG("minmax("+A.X(B.a4,!1)+", "+A.X(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.X(540,!1)+", "+A.X(new A.F("1.18fr"),!1)+")")],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,64,a,A.eD(A.e([new A.aG("minmax("+A.X(B.a4,!1)+", "+A.X(new A.F("1.05fr"),!1)+")"),new A.aG("minmax("+A.X(620,!1)+", "+A.X(new A.F("1.2fr"),!1)+")")],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a)
q=A.w([b.fP("flint create my_app --template=fullstack"),b.fQ(s)],q)
p=A.i(B.a,a,B.fA,B.a,B.a)
q=A.j(a,[q])
r=A.i(B.a,a,r,B.a,B.a)
q=A.j(a,[new A.k(a1,p,q)])
p=A.bi([A.u("THE UNIFIED REQUEST LIFECYCLE",B.bR),A.ap("One Language From DOM to Database",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,32,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("No REST code generation drift. No dual TypeScript/Go models. Single unified typed contracts across the entire stack.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,680,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.ay)
o=$.qE()
n=b.aM(new A.d(a2),"Pure Dart widgets rendered on server or client with instant hydration.",o,"01","SSR & Reactive Signals","Declarative Web UI")
m=$.qF()
l=b.aM(new A.d(a3),"Typed route params, session/JWT auth, and rate-limiting filters.",m,"02","Middleware Pipeline","Routing & Auth Guard")
k=$.dh()
j=b.aM(new A.d("#3b82f6"),"Controllers receive typed requests and return JSON or SSR Page views.",k,"03","Business Logic Core","Controller & Service")
i=$.qB()
h=b.aM(new A.d(a4),"PostgreSQL / MySQL / SQLite query builder with automated tenant isolation.",i,"04","Row-Level Security","ORM & RLS Gateway")
g=$.ct()
h=A.hD([n,l,j,h,b.aM(new A.d(a5),"Sub-millisecond broadcast channels for real-time live events.",g,"05","WebSocket Pub/Sub","Realtime Channels")],"repeat(auto-fit, minmax(220px, 1fr))",16)
j=A.i(B.a,a,B.eR,B.a,B.a)
h=A.j(a,[h])
l=A.i(B.a,a,B.eU,B.a,B.a)
h=A.j(a,[p,new A.k(a1,j,h)])
j=A.bi([A.u("BATTERIES INCLUDED",B.f_),A.ap("Everything You Need For Production Web Apps",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("No need to stitch together 15 disparate npm packages. Flint Dart comes with fully integrated, battle-tested fullstack primitives.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.ay)
p=t.s
n=b.ap(new A.d(a2),A.e(["Controller routing with req.params, req.query, req.json()","Typed middleware guards for auth & permissions","Automatic HTTP error handling & JSON responses"],p),"High-speed asynchronous HTTP router with parametric matching, route grouping, middleware pipelines, and automatic CORS & rate-limiting.",k,"Sub-Millisecond Controller Routing")
o=b.ap(new A.d(a3),A.e(["Zero HTML/JSX templates: 100% typed Dart widget tree","Tokenized design system with instant dark/light themes","Canvas 2D, WebGL 3D scenes & reactive signal state"],p),"Compose web pages using pure Dart components. Server-Side Render (SSR) for blazing SEO speeds with lightweight client hydration.",o,"Pure Dart Declarative UI & SSR")
i=b.ap(new A.d("#3b82f6"),A.e(["Type-safe relations: hasMany, belongsTo, withRelation()","Automatic migration runner and seeder pipelines","Owner-level policy guards for multi-tenant SaaS"],p),"Fluent query builder for PostgreSQL, MySQL, and SQLite. Built-in Row-Level Security (RLS) guarantees automated tenant isolation.",i,"Flint ORM & Row-Level Security")
f=b.ap(new A.d(a5),A.e(["Channel broadcast pub/sub with room filtering","Live heartbeat & automatic reconnect handlers","Sub-millisecond packet serialization in Dart"],p),"Multiplex live WebSocket connections into named channels. Stream live events, user presence, and collaborative updates seamlessly.",g,"Real-Time WebSockets & Channels")
m=b.ap(new A.d(a4),A.e(["Session cookies with SameSite & Secure flags","Role-based authorization (@hasRole, _hasPermission)","Pre-built login, register, and password reset flows"],p),"Turnkey authentication engine supporting encrypted HTTP cookie sessions, JWT bearer tokens, password hashing, and role hierarchies.",m,"Built-in Auth, Sessions & RBAC")
e=$.tI()
e=A.hD([n,o,i,f,m,b.ap(new A.d("#ec4899"),A.e(["Single binary deployment: No Node runtime dependencies","Instant sub-10ms container cold starts on Linux","Built-in static asset compression and caching headers"],p),"Compile your entire full-stack app into a single native AOT executable or lightweight 25MB Docker container with instant cold starts.",e,"Zero-Config Native Deployment")],"repeat(auto-fit, minmax(320px, 1fr))",24)
p=A.i(B.a,a,B.bO,B.a,B.a)
e=A.j(a,[e])
m=A.i(B.a,a,B.bV,B.a,B.a)
e=A.j(a,[j,new A.k(a1,p,e)])
p=A.a(a,a,a,a,a,new A.b(b0,a),a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.aV,a,a,a,a,a,new A.F(a6),B.aQ,a,a,a,a,a,a,a,a,B.aE,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,B.aT,a)
j=A.bi([A.u("WHY CHOOSE DART FOR FULLSTACK",B.bR),A.ap("Stack Comparison & Developer Experience",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("How Flint Dart stacks up against traditional ecosystems like Node.js, Next.js, Go Gin, and Python Django.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.ay)
f=A.hD([b.bm("Single Native Binary (~25MB)",!0,"Pure Dart (Single Language)","< 0.5ms Async Core","Built-in ORM + RLS Security","Flint Dart","The Unified Stack","100% Shared End-to-End","Pure Dart Declarative + SSR"),b.bm("Heavy Node.js + node_modules",!1,"TypeScript + Node Runtime","~12ms Cold Overhead","Prisma / Drizzle third-party","Next.js / Node","JS/TS Ecosystem","Fragile npm ecosystem drift","React JSX + Server Components"),b.bm("Single Go Binary",!1,"Go (Backend) + JS (Frontend)","< 0.5ms Compiled","Gorm third-party","Go + Gin / Fiber","Backend Only","Requires code generation (OpenAPI)","Split stack (React/Vue needed)"),b.bm("Interpreted / Heavy venv",!1,"Python (Backend) + JS (Frontend)","~25ms Interpreter overhead","Django ORM","Python / Django","Classic MVC","Dynamic / Partial type hints","HTML Django templates")],"repeat(auto-fit, minmax(260px, 1fr))",16)
i=A.i(B.a,a,B.fK,B.a,B.a)
f=A.j(a,[f])
p=A.i(B.a,a,p,B.a,B.a)
f=A.j(a,[j,new A.k(a1,i,f)])
i=A.bi([A.u("PRODUCTION-READY STARTERS",B.fI),A.ap("Jumpstart Your Next Project in Seconds",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.G("Pre-configured fullstack templates with auth, database seeders, declarative UI dashboards, and API routes.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.ay)
g=A.hD([b.bv(new A.d(a2),"flint create store --template=ecommerce","Full store with shopping cart, customer checkout, product catalogue, and order admin panel.",k,"Starter","E-Commerce Marketplace"),b.bv(new A.d(a3),"flint create saas_app --template=saas","Subscription billing ready, role permissions, analytics telemetry, and RLS tenant isolation.",$.dg(),"Popular","Multi-Tenant SaaS Admin"),b.bv(new A.d(a5),"flint create chat --template=realtime","WebSocket pub/sub rooms, live message streams, presence indicators, and notification tray.",g,"WebSocket","Real-Time Chat & Collab"),b.bv(new A.d(a4),"flint create publication --template=blog","Markdown publishing engine, comment threads, SEO metadata headers, and category archives.",$.fQ(),"SSR & SEO","Multi-Author Blog & Media")],"repeat(auto-fit, minmax(280px, 1fr))",20)
k=A.i(B.a,a,B.bO,B.a,B.a)
g=A.j(a,[g])
j=A.i(B.a,a,B.bV,B.a,B.a)
g=A.j(a,[i,new A.k(a1,k,g)])
b2=A.a(a,a,a,a,a,A.aM(A.e([A.bm(B.cf,B.jo),new A.b(a7,a)],b2)),a,a,a,a,a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.aV,a,a,a,a,a,new A.F(a6),B.aQ,a,a,a,a,a,a,a,a,B.aE,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.F(a6),a,a,B.aT,a)
k=A.a(a,B.d,a,a,a,new A.b(b0,a),a,new A.m(1,B.O,a0),a,a,a,a,a,a,a,a,a,a,a,a,B.c,a,a,a,B.y,a,a,a,a,a,a,a,a,18,a,a,a,a,a,a,a,a,a,a,a,a,B.ad,a,a,820,a,a,a,a,a,a,a,a,a,B.c6,a,20,a,a,a,a,a,new A.aq(20,50,-15,new A.d("rgba(16, 185, 129, 0.2)")),a,B.Q,a,a,a,a,a,a,a,a,a,a,a,a,a)
i=A.a(a,B.d,a,a,a,new A.d("rgba(16, 185, 129, 0.15)"),a,a,a,a,a,a,a,a,a,a,new A.d(a2),a,a,a,B.e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,a,B.r,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,12,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,a,a,a)
o=A.H($.k5(),a,24)
i=A.i(B.a,a,i,B.a,B.a)
o=A.j(o,B.h)
n=A.ap("Start Building Fullstack Dart Apps Today",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,32,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a))
d=A.G("Install the Flint CLI, create your first project, and deploy native binaries in minutes.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,580,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a))
c=A.a(a,B.d,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.k,a,a,a,a,a,a,a,a,a,a,15,900,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,46,a,a,a,a,a,a,a,B.hp,a,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)
c=A.q5([A.V(a,[A.u("Read Installation Guide",a),A.H($.bN(),a,18)],c,"/guides/installation",a,B.j,a),A.V(a,[A.H($.ef(),a,16),A.u("GitHub Repository",a)],B.aS,"https://github.com/flint-dart/flint_dart",a,B.z,B.C)],B.ha,12)
k=A.i(B.a,a,k,B.a,B.a)
c=A.j(a,[new A.k(a1,i,o),n,d,c])
b2=A.i(B.a,a,b2,B.a,B.a)
c=A.j(a,[new A.k(a1,k,c)])
return new A.ax(b.c,new A.k(a1,A.i(B.a,a,b3,B.a,B.a),A.j(a,[new A.k(a1,r,q),new A.k(a1,l,h),new A.k(a1,m,e),new A.k(a1,p,f),new A.k(a1,j,g),new A.k(a1,b2,c)])))},
fP(a){var s,r,q,p,o,n,m,l=null,k=A.a(l,B.d,l,l,l,new A.d("rgba(16, 185, 129, 0.12)"),l,new A.m(1,new A.d("rgba(16, 185, 129, 0.28)"),"solid"),l,l,l,l,l,l,l,l,new A.d("#10b981"),l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,900,8,l,l,l,l,l,l,l,l,0.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b4,l,999,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),j=A.H($.dg(),new A.d("#10b981"),15),i=A.u("FLINT DART FULL-STACK WEB FRAMEWORK",l)
k=A.i(B.a,l,k,B.a,B.a)
i=A.j(l,[j,i])
j=A.b6("Server, ORM, Web UI & Realtime. All Pure Dart.",A.a(l,l,l,l,l,A.aW(110,B.jC),B.am,l,l,l,l,l,l,l,l,l,new A.d("transparent"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.m4,900,l,l,l,l,l,l,l,l,l,l,l,l,1.05,B.b_,l,l,820,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.am,l,l,l,l,l,l))
s=A.ap("Build end-to-end full-stack web applications without JavaScript fatigue.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.text",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,22,800,l,l,l,l,l,l,l,l,l,l,l,l,1.35,B.b_,l,l,720,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.G("A cohesive web platform providing sub-millisecond controller routing, declarative pure-Dart UI components with SSR, type-safe ORM query builders, Row-Level Security, and bidirectional WebSockets in one unified runtime.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,B.aB,l,l,680,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
q=A.a(l,B.d,l,l,new A.d0("blur("+A.E(14,!1)+")"),new A.d("rgba(3, 7, 18, 0.78)"),l,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),"solid"),l,l,l,l,l,l,l,l,B.w,l,l,l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,B.m,l,l,l,l,l,l,B.b0,l,l,600,l,l,l,l,l,l,l,l,l,B.aA,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
p=A.w([A.u("$",B.bH),A.u(a,B.h8)],B.bK)
o=this.e
n=o?new A.d("rgba(16, 185, 129, 0.25)"):new A.d("rgba(255, 255, 255, 0.1)")
m=o?new A.d("#34d399"):B.w
m=A.a(l,B.d,l,l,l,n,l,l,l,l,l,l,l,l,l,l,m,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,800,6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.b3,l,6,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.aZ("all 150ms ease"),l,l,l,l,l,l,l)
n=o?$.fR():$.fS()
n=A.H(n,o?new A.d("#34d399"):B.w,13)
o=A.ay(l,[n,A.u(this.e?"Copied":"Copy",l)],m,!1,!1,new A.lA(this,a),B.a,B.S,B.j,B.D)
q=A.i(B.a,l,q,B.a,B.a)
o=A.j(l,[p,o])
p=A.a(l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,15,900,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,46,l,l,l,l,l,l,l,B.c3,l,8,l,l,l,l,l,new A.aq(12,32,-10,new A.d("rgba(16, 185, 129, 0.5)")),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
return A.bi([new A.k("div",k,i),j,s,r,new A.k("div",q,o),A.q5([A.V(l,[A.u("Quickstart in 30s",l),A.H($.bN(),l,18)],p,"/guides/installation",l,B.j,l),A.V(l,[A.H($.fQ(),l,16),A.u("Full API Reference",l)],B.aS,"/api",l,B.z,B.C),A.V(l,[A.H($.cb(),l,16),A.u("Live Examples",l)],B.bU,"/examples",l,B.z,B.D)],B.bZ,12)],B.bM)},
fQ(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="solid",h="div",g="rgba(255, 255, 255, 0.1)",f="rgba(255, 255, 255, 0.03)",e=A.a(j,j,j,j,j,new A.d("#050b0a"),j,new A.m(1,new A.d("rgba(56, 189, 248, 0.25)"),i),j,j,j,j,j,j,j,j,B.w,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.u,j,j,j,j,B.a_,12,j,j,j,j,j,new A.aq(28,70,-28,new A.d("rgba(0, 0, 0, 0.8)")),j,j,j,j,j,j,j,j,j,j,new A.F("100%"),j,j,j,2),d=A.a(j,B.d,j,j,j,new A.d(f),j,j,new A.m(1,new A.d(g),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.aA,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),c=A.w([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.bl,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.aL,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h)),new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,B.O,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.j(j,B.h))],B.c_),b=[]
for(s=0;r=$.qM(),s<4;++s){q=k.d===s
p=q?900:600
o=q?B.w:B.R
n=q?new A.d(g):B.v
m=q?new A.m(2,r[s].f,i):B.bb
l=r[s]
q=q?l.f:B.at
q=A.H(l.e,q,13)
r=r[s]
b.push(A.ay(j,[q,new A.a7("span",A.i(B.a,j,j,B.a,B.a),A.j(r.a,B.h))],new A.n(B.b2,j,j,j,j,j,j,j,B.k,6,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,12,p,j,j,o,j,j,j,j,j,j,j,j,j,n,6,j,j,j,m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,!1,new A.lC(k,s),B.a,B.S,B.j,B.D))}b=A.w(b,B.bD)
r=k.f
q=r?new A.d("#34d399"):new A.d("#94a3b8")
q=A.a(j,j,j,j,j,new A.d("rgba(255, 255, 255, 0.05)"),j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c8,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j)
q=A.ay(j,[A.H(r?$.fR():$.fS(),j,13)],q,!1,!1,new A.lD(k,a),B.a,B.S,B.j,B.D)
d=A.i(B.a,j,d,B.a,B.a)
q=A.j(j,[c,b,q])
b=A.a(j,B.d,j,j,j,new A.d("rgba(255, 255, 255, 0.02)"),j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.06)"),i),j,j,j,j,j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
c=a.f
p=A.w([A.H(a.e,c,16),A.f7(a.b,B.bG),A.u("\u2022 "+a.c,B.bP)],B.a8)
o=A.a(j,j,j,j,j,new A.d("rgba(16, 185, 129, 0.15)"),j,j,j,j,j,j,j,j,j,j,new A.d("#34d399"),j,j,j,j,j,j,j,j,j,j,j,j,j,j,11,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.c5,j,4,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
n=A.u(a.d,j)
o=A.i(B.a,j,o,B.a,B.a)
n=A.j(j,[n])
b=A.i(B.a,j,b,B.a,B.a)
n=A.j(j,[p,new A.k(h,o,n)])
o=k.hB(a.x)
p=A.i(B.a,j,B.f3,B.a,B.a)
o=A.j(j,[o])
m=A.a(j,B.d,j,j,j,new A.d(f),j,j,j,j,j,j,new A.m(1,new A.d("rgba(255, 255, 255, 0.08)"),i),j,j,j,j,j,j,j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.a3,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
c=A.w([new A.k(h,A.i(B.a,j,A.a(j,j,j,j,j,c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j),B.a,B.a),A.j(j,B.h)),A.u(a.r,B.bC)],B.a8)
l=A.u("Flint Dart Full-Stack",B.bW)
m=A.i(B.a,j,m,B.a,B.a)
l=A.j(j,[c,l])
return new A.k(h,A.i(B.a,j,e,B.a,B.a),A.j(j,[new A.k(h,d,q),new A.k(h,b,n),new A.k(h,p,o),new A.k(h,m,l)]))},
aM(a,b,c,d,e,f){var s,r=null,q=A.a(r,r,r,r,r,new A.b("color.panel",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.c,r,r,r,B.y,r,r,r,r,r,r,r,r,10,r,r,r,A.a(r,r,r,r,r,r,r,new A.m(1,a,"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.ba("translateY("+A.E(-3,!1)+")"),r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.aa,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.aZ("all 180ms ease"),r,r,r,r,r,r,r),p=A.a(r,B.d,r,r,r,new A.d("rgba(16, 185, 129, 0.12)"),r,r,r,r,r,r,r,r,r,r,a,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,r,r,B.r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,r,r,r,r),o=A.H(c,r,18)
o=A.w([new A.k("div",A.i(B.a,r,p,B.a,B.a),A.j(o,B.h)),A.u(d,B.fU)],B.aR)
p=A.bi([A.f7(f,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,900,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),A.u(e,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,700,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))],B.bS)
s=A.G(b,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
return new A.k("div",A.i(B.a,r,q,B.a,B.a),A.j(r,[o,p,s]))},
ap(a,b,c,d,e){var s,r,q,p,o,n,m,l=null,k="color.line",j="color.text"
t.a.a(b)
s=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b(k,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,B.y,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.T,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=A.a(l,B.d,l,l,l,new A.d("rgba(16, 185, 129, 0.14)"),l,l,l,l,l,l,l,l,l,l,a,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,40,l,l,B.r,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,40,l,l,l,l)
q=A.H(d,l,20)
q=A.w([new A.k("div",A.i(B.a,l,r,B.a,B.a),A.j(q,B.h)),A.bK(e,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(j,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,17,900,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],B.bX)
r=A.G(c,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,1.6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
p=A.a(l,l,l,l,l,l,l,l,l,l,l,l,new A.m(1,new A.b(k,l),"solid"),l,l,l,l,l,l,l,B.c,l,l,l,B.y,l,l,l,l,l,l,l,l,6,l,l,l,l,l,l,l,l,l,l,l,l,B.i_,l,l,l,l,l,l,l,l,l,l,l,l,B.c4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=[]
for(n=0;n<3;++n){m=b[n]
o.push(A.w([A.H($.fR(),a,14),new A.a7("span",A.i(B.a,l,new A.n(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,600,l,l,new A.b(j,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.j(m,B.h))],B.a8))}p=A.i(B.a,l,p,B.a,B.a)
o=A.j(l,o)
return new A.k("div",A.i(B.a,l,s,B.a,B.a),A.j(l,[q,r,new A.k("div",p,o)]))},
bm(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m,l=this,k=null,j=b?new A.m(2,B.O,"solid"):new A.m(1,new A.b("color.line",k),"solid")
j=A.a(k,k,k,k,k,b?new A.d("rgba(16, 185, 129, 0.06)"):new A.b("color.bg",k),k,j,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,B.y,k,k,k,k,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ab,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
s=A.f7(f,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,b?B.O:new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,18,900,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=b?new A.d("rgba(16, 185, 129, 0.2)"):new A.d("rgba(255, 255, 255, 0.08)")
r=A.a(k,k,k,k,k,r,k,k,k,k,k,k,k,k,k,k,b?new A.d("#34d399"):new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,11,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.hI,k,4,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=A.u(g,k)
q=A.w([s,new A.k("div",A.i(B.a,k,r,B.a,B.a),A.j(k,[q]))],B.aR)
r=l.ao("Language Stack",c,b)
s=l.ao("Type Consistency",h,b)
p=l.ao("HTTP Latency",d,b)
o=l.ao("Deployment Artifact",a,b)
n=l.ao("Frontend UI",i,b)
m=l.ao("ORM & Security",e,b)
return new A.k("div",A.i(B.a,k,j,B.a,B.a),A.j(k,[q,r,s,p,o,n,m]))},
ao(a,b,c){var s=null,r=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),q=c?800:500
return A.bi([r,A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,c?B.w:new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.bS)},
bv(a,b,c,d,e,f){var s,r,q=null,p="div",o=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,B.y,q,q,q,q,q,q,q,q,16,q,q,q,q,q,B.m,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ab,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a(q,B.d,q,q,q,new A.d("rgba(16, 185, 129, 0.12)"),q,q,q,q,q,q,q,q,q,q,a,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,36,q,q,B.r,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,36,q,q,q,q),m=A.H(d,q,18)
n=A.i(B.a,q,n,B.a,B.a)
m=A.j(m,B.h)
s=A.a(q,q,q,q,q,new A.d("rgba(16, 185, 129, 0.15)"),q,q,q,q,q,q,q,q,q,q,a,q,q,q,q,q,q,q,q,q,q,q,q,q,q,11,800,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c5,q,4,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.u(e,q)
r=A.bi([A.w([new A.k(p,n,m),new A.k(p,A.i(B.a,q,s,B.a,B.a),A.j(q,[r]))],B.aR),A.f7(f,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,16,900,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.G(c,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,13,q,q,q,q,q,q,q,q,q,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))],B.fv)
s=A.a(q,B.d,q,q,q,new A.d("rgba(0, 0, 0, 0.4)"),q,new A.m(1,new A.d("rgba(255, 255, 255, 0.08)"),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.m,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.b5,q,6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.u(b,B.fR)
n=A.ay(q,[A.H($.fS(),B.R,12)],B.fV,!1,!1,new A.lE(this,b),B.a,B.S,B.j,B.D)
s=A.i(B.a,q,s,B.a,B.a)
n=A.j(q,[m,n])
return new A.k(p,A.i(B.a,q,o,B.a,B.a),A.j(q,[r,new A.k(p,s,n)]))},
hB(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.db.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.eq(""+q,2)
o=A.i(B.a,h,B.bE,B.a,B.a)
p=A.j(p,B.h)
n=[]
if(!(r<a.length))return A.t(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aE)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a7("span",A.i(B.a,h,new A.n(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.j(j.a,B.h)))}s.push(A.w([new A.a7("span",o,p),new A.k("div",A.i(B.a,h,B.bJ,B.a,B.a),A.j(h,n))],B.c0))}return A.bi(s,B.bY)}}
A.ly.prototype={
$0(){return this.a.e=!0},
$S:0}
A.lz.prototype={
$0(){var s=this.a
s.q(new A.lx(s))},
$S:0}
A.lx.prototype={
$0(){return this.a.e=!1},
$S:0}
A.lv.prototype={
$0(){return this.a.f=!0},
$S:0}
A.lw.prototype={
$0(){var s=this.a
s.q(new A.lu(s))},
$S:0}
A.lu.prototype={
$0(){return this.a.f=!1},
$S:0}
A.lA.prototype={
$1(a){A.aa(a)
return this.a.dr(this.b)},
$S:1}
A.lC.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.lB(s,this.b))},
$S:1}
A.lB.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.lD.prototype={
$1(a){A.aa(a)
return this.a.fm(this.b.w)},
$S:1}
A.lE.prototype={
$1(a){A.aa(a)
return this.a.dr(this.b)},
$S:1}
A.jc.prototype={}
A.fg.prototype={}
A.jd.prototype={}
A.cV.prototype={
gdA(){var s=J.M(this.c,"initialSection")
s=s==null?null:J.r(s)
return s==null?"introduction":s},
a4(){if(this.e)this.bi(this.gdA())},
bi(a){var s=0,r=A.be(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$bi=A.bf(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:l=B.jR.j(0,a)
k=l==null?a:l
q=3
s=6
return A.b0($.cc().eE(0,"/api/guides/section/"+A.W(k),t.P),$async$bi)
case 6:n=c
if(n.f&&n.b!=null)o.q(new A.lH(o,n))
else o.q(new A.lI(o))
q=1
s=5
break
case 3:q=2
j=p.pop()
o.q(new A.lJ(o))
s=5
break
case 2:s=1
break
case 5:return A.bc(null,r)
case 1:return A.bb(p.at(-1),r)}})
return A.bd($async$bi,r)},
E(){var s,r,q=this,p=null,o=q.c,n=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(p,B.n,p,B.n),p,p,1152,p,p,p,p,p,p,p,p,p,new A.f(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("100%"),p,p,p,p),m=A.a(p,B.I,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,B.y,p,p,p,p,p,p,p,p,20,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.X,p,p,p,p,p,p,p,p,32,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.r2(q.gdA(),!1),k=q.e,j=q.d,i=J.al(o),h=i.j(o,"previousGuideTitle")
h=h==null?p:J.r(h)
s=i.j(o,"previousGuideUrl")
s=s==null?p:J.r(s)
r=i.j(o,"nextGuideTitle")
r=r==null?p:J.r(r)
i=i.j(o,"nextGuideUrl")
m=A.w([l,new A.hE(k,j,h,s,r,i==null?p:J.r(i))],m)
return new A.ax(o,new A.k("div",A.i(B.a,p,n,B.a,B.a),A.j(p,[m])))}}
A.lH.prototype={
$0(){var s=this.a,r=this.b.b
r.toString
r=J.M(r,"html")
r=r==null?null:J.r(r)
s.d=r==null?"":r
s.e=!1},
$S:0}
A.lI.prototype={
$0(){this.a.e=!1},
$S:0}
A.lJ.prototype={
$0(){this.a.e=!1},
$S:0}
A.dC.prototype={
E(){var s,r,q,p,o,n=this,m=null,l="solid",k="div",j="color.line",i="color.panel",h="color.text",g="radius.md",f=n.c,e=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,22,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,1040,B.aU,m,m,m,m,m,m,m,m,B.b1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m),d=t.G
d=A.a(m,m,m,m,m,A.aM(A.e([A.aW(135,A.e([new A.L(B.e_,0),new A.L(B.ds,48),new A.L(new A.b(i,m),100)],d)),new A.b(i,m)],d)),m,new A.m(1,new A.b(j,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,26,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.T,m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
s=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,24,m,m,m,m,m,B.m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,680,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.w([n.dB("FlintHardware"),n.dB("Robotics & Embedded Dart")],q)
p=A.b6("Declarative Embedded Systems & Robotics for Dart.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,34,760,m,m,m,m,m,m,m,m,m,m,m,m,1.08,B.l,m,m,m,B.bT,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
o=A.G("Build firmware, sensors, robotics state machines, and Wokwi simulation circuits in 100% pure Dart \u2014 compiled directly to ESP32, Raspberry Pi Pico, and STM32.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,1.6,B.l,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.i(B.a,m,r,B.a,B.a)
o=A.j(m,[q,p,o])
p=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
s=A.w([new A.k(k,r,o),A.w([A.V("View on GitHub",B.h,A.a(m,m,m,m,m,new A.b("color.accent",m),m,m,m,m,m,m,m,m,m,m,new A.b(i,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,14,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a3,m,new A.b(g,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"https://github.com/flint-dart/flint-hardware","_blank",B.j,m),A.V("Pub.dev",B.h,A.a(m,m,m,m,m,m,m,new A.m(1,new A.b(j,m),l),m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,14,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a3,m,new A.b(g,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"https://pub.dev/packages/flint_hardware","_blank",B.j,m)],p)],s)
d=A.i(B.a,m,d,B.a,B.a)
s=A.j(m,[s])
p=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
p=A.w([n.bp("\u26a1 Multi-MCU","Compile to MicroPython, Arduino C++, or C for ESP32 and RP2040."),n.bp("\ud83e\udd16 Robotics State Machine","Declarative state transitions with patrol, avoidance, and docking."),n.bp("\ud83d\udd79\ufe0f Drivers Pack","Built-in drivers for HC-SR04, MPU-6050, Differential Drive, and DHT22."),n.bp("\ud83c\udf10 Wokwi Simulator","Auto-generates diagram.json circuits for 1-click browser simulation.")],p)
o=A.a(m,m,m,m,m,new A.b(i,m),m,new A.m(1,new A.b(j,m),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.T,m,20,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=J.M(f,"contentHtml")
r=r==null?m:J.r(r)
r=A.cf("api-md markdown-body",r==null?"":r,"hardware-content",B.aI)
o=A.i(B.a,m,o,B.a,B.a)
r=A.j(m,[r])
e=A.i(B.a,m,e,B.a,B.a)
r=A.j(m,[new A.k(k,d,s),p,new A.k(k,o,r)])
return new A.ax(f,new A.k(k,A.i(B.a,m,B.aw,B.a,B.a),A.j(m,[new A.k(k,e,r)])))},
dB(a){var s=null,r=A.a(s,s,s,s,s,B.e0,s,new A.m(1,B.e1,"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.aD,s,9999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,B.fY)
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
bp(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,220,s,s,s,s,s,s,B.a9,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.bK(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,15,800,s,s,s,s,s,s,s,s,s,s,s,s,s,B.ih,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.G(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.5,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))}}
A.dD.prototype={
E(){return new A.ax(this.c,new A.k("div",A.i(B.a,null,B.eH,B.a,B.a),A.j(null,[new A.eE(),new A.iM(),new A.id(),new A.hg(),new A.h5(),new A.iV(),new A.hq()])))}}
A.cZ.prototype={
gaf(){var s=t.fF.a(J.M(this.c,"question"))
s=s==null?null:J.aU(s,t.N,t.z)
return s==null?B.Z:s},
gbV(){var s=this.w.a
return s==null?this.gdD():s},
gdD(){var s,r,q=J.M(this.c,"answers")
if(t.j.b(q)){s=J.cu(q,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.mV()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P},
gbu(){var s=this.gaf().j(0,"slug")
s=s==null?null:J.r(s)
return s==null?"":s},
a4(){this.dn()
this.dX()},
bD(){this.dn()
this.dX()},
cX(){var s=this.w.b
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.c4()}s=this.z
if(s!=null){s.hM(0,1001,"Client disposed")
s.Q.bB(0)
B.f.bB(s.as)}s=this.y
if(s!=null)s.ag(0)},
E(){var s,r,q=this,p=null,o="Question",n="color.muted",m=q.c,l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(p,B.n,p,B.n),p,p,960,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,B.u,p,p,p,new A.f(34,16,34,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("100%"),p,p,p,p),k=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(28,28,28,28),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,0,p,p,p,p,p,p,new A.f(20,20,20,20),p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,B.i,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),i=q.gaf().j(0,"tag")
i=i==null?p:J.r(i)
if(i==null)i=o
s=A.i(B.a,p,A.a(p,p,p,p,p,new A.d("rgba(2, 132, 199, 0.08)"),p,new A.m(1,new A.d("rgba(2, 132, 199, 0.28)"),"solid"),p,p,p,p,p,p,p,p,new A.b("color.accent",p),p,B.eM,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(5,10,5,10),p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.a,B.a)
i=A.j(i,B.h)
r=q.gaf().j(0,"date")
r=r==null?p:J.r(r)
if(r==null)r=""
j=A.w([new A.k("div",s,i),A.u(r,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],j)
r=q.gaf().j(0,"title")
i=r==null?p:J.r(r)
if(i==null)i=o
i=A.b6(i,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,29,p,p,p,p,p,p,p,p,p,p,p,p,p,1.2,new A.f(0,0,0,0),p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
s=q.gaf().j(0,"body")
s=s==null?p:J.r(s)
if(s==null)s=""
s=A.G(s,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.75,new A.f(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=q.gaf().j(0,"author")
r=r==null?p:J.r(r)
if(r==null)r="Community"
r=A.u("By "+r,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=[new A.k("div",A.i(B.a,p,k,B.a,B.a),A.j(p,[j,i,s,r])),new A.cC(q.w,new A.n6(q),t.fp)]
k=J.al(m)
if(!(J.a9(k.j(m,"isAuthenticated"),!0)||B.q.gV()!=null))r.push(A.h2("/questions","Back to Questions","Create an account or sign in to answer this question and help improve the Flint knowledge base.",!1,"Sign in to answer"))
else if(J.a9(k.j(m,"canAnswer"),!0)||A.dL(["admin","contributor","dev"],t.N).H(0,B.q.gak(0)))r.push(q.eT())
else r.push(A.G("Your account can read answers but cannot post yet.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.warning",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)))
return new A.ax(m,new A.k("div",A.i(B.a,p,l,B.a,B.a),A.j(p,r)))},
eU(a){var s,r,q,p,o,n,m,l,k=null
t.p.a(a)
s=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
r=A.a(k,B.d,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.c,k,k,k,k,k,k,B.i,k,k,k,k,k,12,k,k,k,k,k,B.m,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=A.ap("Answers",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.f(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
p=this.Q==="Live"
o=p?B.ew:B.dK
n=p?B.aN:B.dL
o=A.a(k,B.d,k,k,k,n,k,new A.m(1,o,"solid"),k,k,k,k,k,k,k,k,k,k,k,k,B.k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.b3,k,999,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
n=A.i(B.a,k,A.a(k,k,k,k,k,p?B.e7:B.as,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,999,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k),B.a,B.a)
m=A.j(k,B.h)
l=this.Q
l=A.u(l,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,p?new A.b("color.primary",k):new A.b("color.warning",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,12,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=[A.w([q,new A.k("div",A.i(B.a,k,o,B.a,B.a),A.j(k,[new A.k("div",n,m),l]))],r)]
q=J.al(a)
if(q.gB(a))r.push(A.G("No answers yet. Be the first to help.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)))
else for(q=q.gv(a);q.m();)r.push(this.eS(q.gp(q)))
return new A.k("div",A.i(B.a,k,s,B.a,B.a),A.j(k,r))},
eS(a){var s,r,q,p,o,n,m,l=null,k="color.muted"
t.P.a(a)
s=J.al(a)
r=s.j(a,"id")
q=r==null?l:J.r(r)
p=J.a9(s.j(a,"can_edit"),!0)&&q!=null
o=q!=null&&this.x.H(0,q)
r=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(18,18,18,18),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,0,l,l,l,l,l,l,new A.f(16,16,16,16),l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
n=s.j(a,"body")
n=n==null?l:J.r(n)
if(n==null)n=""
n=A.G(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
m=A.a(l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,l,l,l,B.i,l,l,l,l,l,12,l,l,l,l,l,B.m,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
s=s.j(a,"author")
s=s==null?l:J.r(s)
if(s==null)s="Community"
s=[A.u("By "+s,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))]
if(p)s.push(A.ay(l,[A.H($.tP(),l,14),A.u("Delete",l)],l,!1,o,new A.mE(this,q),B.a,B.S,B.ma,B.D))
s=A.w(s,m)
return new A.k("div",A.i(B.a,l,r,B.a,B.a),A.j(l,[n,s]))},
eT(){var s,r,q,p,o=this,n=null,m=o.gaf().j(0,"slug"),l=m==null?n:J.r(m)
if(l==null)l=""
m=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,new A.f(22,22,22,22),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
q=o.f
if(q!=null){p=A.a(n,n,n,n,n,new A.d("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.G(q,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r.push(new A.k("div",A.i(B.a,n,p,B.a,B.a),A.j(q,B.h)))}r.push(A.f5(o.d.Z(0,"body"),o.e,"Your answer","body","Share the fix, explanation, or example...",!0,7,$.ux()))
q=o.r
r.push(A.ay(n,[A.H($.k6(),n,15),A.u("Post Answer",n)],n,!1,q,n,B.ah,B.x,B.j,B.a0))
s=A.eB(r,s,new A.mF(o,l))
return new A.k("div",A.i(B.a,n,m,B.a,B.a),A.j(n,[s]))},
aR(a,b){return this.hy(a,b)},
hy(a6,a7){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aR=A.bf(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:if(t.m.b(a6))a6.preventDefault()
if(n.r){s=1
break}n.q(new A.n0(n))
b=n.d
a=t.N
a0=A.Z(a,t.a)
a1=B.b.D(b.a0("body")).length
if(a1===0)a0.i(0,"body",A.e(["The body field is required."],t.s))
else if(a1<10)a0.i(0,"body",A.e(["The body must be at least 10 characters."],t.s))
a2=new A.bS(a0)
if(a0.gM(0)){g=n.cl(a2,"Please check your answer.")
n.q(new A.n1(n,a2))
B.o.P(0,"Answer not posted",g)
s=1
break}p=4
m=B.q.gV()
a1=$.cc()
a3=A.ha(b.b,a,t.X)
l=A.Z(a,a)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(a1.aj("/questions/"+a7+"/answers",a3,l,t.P),$async$aR)
case 7:k=a9
j=k.b
s=k.f&&j!=null?8:9
break
case 8:i=J.M(j,"answer")
s=t.f.b(i)?10:12
break
case 10:n.d3(J.aU(i,a,t.z))
s=11
break
case 12:s=13
return A.b0(n.aO(),$async$aR)
case 13:case 11:b.io(0,A.e(["body"],t.s))
n.q(new A.n2(n))
B.o.ad("Answer posted","Added to the thread.")
s=1
break
case 9:h=A.cd(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post answer."
g=n.cl(h,l)
n.q(new A.n3(n,h,g))
B.o.P(0,"Answer not posted",g)
p=2
s=6
break
case 4:p=3
a5=o.pop()
l=A.aL(a5)
if(l instanceof A.bQ){f=l
e=n.dQ(f)
d=A.cd(e)
l=e
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not post answer."
c=n.cl(d,l)
n.q(new A.n4(n,d,c))
B.o.P(0,"Answer not posted",c)}else{n.q(new A.n5(n))
B.o.P(0,"Answer not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$aR,r)},
cl(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb3()
s=A.N(r).h("aO<2>")
return A.iz(new A.aO(r,s),3,s.h("o.E")).J(0," ")},
dQ(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.mU(),t.N,t.z)
return null},
dX(){var s=this
if(s.gbu().length===0||s.y!=null)return
s.y=A.rq(B.hj,new A.n_(s))},
dn(){var s,r=this,q=r.gbu()
if(q.length===0||r.z!=null)return
s=$.cc().a.iC("/questions/"+q+"/live")
s.ai(0,"connect",new A.mL(r))
s.ai(0,"connected",new A.mM(r))
s.ai(0,"answer.created",new A.mN(r))
s.ai(0,"answer.deleted",new A.mO(r))
s.ai(0,"disconnect",new A.mP(r))
s.ai(0,"error",new A.mQ(r))
s.ai(0,"reconnect_failed",new A.mR(r))
r.z=s
s.aU()},
aO(){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$aO=A.bf(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:a=n.gbu()
if(J.bh(a)===0){s=1
break}p=4
m=B.q.gV()
f=$.cc()
e=A.W(a)
d=t.N
l=A.Z(d,d)
J.ar(l,"Accept","application/json")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
d=t.P
s=7
return A.b0(f.cY(0,"/api/questions/"+e,l,d),$async$aO)
case 7:k=a2
l=k.b
j=l==null?null:J.M(l,"answers")
if(!t.j.b(j)){s=1
break}l=J.cu(j,t.f)
f=l.$ti
d=A.bn(l,f.h("z<h,@>(o.E)").a(new A.mW()),f.h("o.E"),d)
c=A.aw(d,A.N(d).h("o.E"))
i=c
h=B.E.aa(n.gbV(),null)
g=B.E.aa(i,null)
if(J.a9(h,g)){s=1
break}l=n.w
l.a=l.$ti.c.a(i)
l.bM()
p=2
s=6
break
case 4:p=3
a0=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$aO,r)},
d3(a){var s,r,q
t.P.a(a)
s=this.gbV()
r=a.j(0,"id")
q=r==null?null:J.r(r)
if(q!=null&&J.qP(s,new A.mC(q)))return
this.w.ey(0,new A.mD(s,a))},
bg(a){return this.fu(A.U(a))},
fu(a2){var s=0,r=A.be(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bg=A.bf(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:a0=m.gbu()
if(J.bh(a0)===0||m.x.H(0,a2)){s=1
break}if(!A.e7(A.y(v.G.window).confirm("Delete this answer?"))){s=1
break}m.q(new A.mS(m,a2))
p=4
l=B.q.gV()
e=$.cc()
d=A.W(a0)
c=t.N
k=A.Z(c,c)
J.ar(k,"Accept","application/json")
J.ar(k,"X-Requested-With","FlintClient")
if(l!=null)J.ar(k,"Authorization","Bearer "+l)
s=7
return A.b0(e.ih("/questions/"+d+"/answers/"+a2+"/delete",k,t.P),$async$bg)
case 7:j=a4
if(j.f){m.dR(a2)
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
if(k instanceof A.bQ){h=k
g=m.dQ(h)
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
m.q(new A.mT(m,a2))
s=n.pop()
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$bg,r)},
dR(a){var s=this.gbV()
if(!J.qP(s,new A.mY(a)))return
this.w.ey(0,new A.mZ(s,a))}}
A.mV.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.n6.prototype={
$1(a){var s
t.gw.a(a)
s=this.a
return s.eU(a==null?s.gdD():a)},
$S:74}
A.mE.prototype={
$1(a){A.aa(a)
return this.a.bg(this.b)},
$S:1}
A.mF.prototype={
$1(a){return this.a.aR(A.aa(a),this.b)},
$S:1}
A.n0.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.B
s.f=null},
$S:0}
A.n1.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.n2.prototype={
$0(){var s=this.a
s.r=!1
s.e=B.B
s.f=null},
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
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.n5.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post answer. Please try again."},
$S:0}
A.mU.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.n_.prototype={
$1(a){t.E.a(a)
return this.a.aO()},
$S:21}
A.mL.prototype={
$1(a){var s
A.ee("[questions.live] connect")
s=this.a
s.q(new A.mK(s))},
$S:3}
A.mK.prototype={
$0(){return this.a.Q="Live"},
$S:0}
A.mM.prototype={
$1(a){var s
A.ee("[questions.live] connected payload: "+A.W(a))
s=this.a
s.q(new A.mJ(s))},
$S:3}
A.mJ.prototype={
$0(){return this.a.Q="Live"},
$S:0}
A.mN.prototype={
$1(a){A.ee("[questions.live] answer.created payload: "+A.W(a))
if(t.f.b(a))this.a.d3(J.aU(a,t.N,t.z))},
$S:3}
A.mO.prototype={
$1(a){var s,r
A.ee("[questions.live] answer.deleted payload: "+A.W(a))
if(t.f.b(a)){s=J.M(a,"id")
r=s==null?null:J.r(s)
if(r!=null)this.a.dR(r)}},
$S:3}
A.mP.prototype={
$1(a){var s
A.ee("[questions.live] disconnect")
s=this.a
s.q(new A.mI(s))},
$S:3}
A.mI.prototype={
$0(){return this.a.Q="Reconnecting"},
$S:0}
A.mQ.prototype={
$1(a){var s
A.ee("[questions.live] error")
s=this.a
s.q(new A.mH(s))},
$S:3}
A.mH.prototype={
$0(){return this.a.Q="Reconnecting"},
$S:0}
A.mR.prototype={
$1(a){var s
A.ee("[questions.live] reconnect_failed")
s=this.a
s.q(new A.mG(s))},
$S:3}
A.mG.prototype={
$0(){return this.a.Q="Offline"},
$S:0}
A.mW.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.mC.prototype={
$1(a){var s=J.M(t.P.a(a),"id")
s=s==null?null:J.r(s)
return s===this.a},
$S:15}
A.mD.prototype={
$1(a){var s
t.gw.a(a)
s=a==null?this.a:a
s=A.aw(s,t.P)
s.push(this.b)
return s},
$S:27}
A.mS.prototype={
$0(){return this.a.x.u(0,this.b)},
$S:0}
A.mT.prototype={
$0(){return this.a.x.T(0,this.b)},
$S:0}
A.mY.prototype={
$1(a){var s=J.M(t.P.a(a),"id")
s=s==null?null:J.r(s)
return s===this.a},
$S:15}
A.mZ.prototype={
$1(a){var s
t.gw.a(a)
s=a==null?this.a:a
s=J.uM(s,new A.mX(this.b))
s=A.aw(s,s.$ti.h("o.E"))
return s},
$S:27}
A.mX.prototype={
$1(a){var s=J.M(t.P.a(a),"id")
s=s==null?null:J.r(s)
return s!==this.a},
$S:15}
A.dQ.prototype={
gha(){var s,r,q=J.M(this.c,"questions")
if(t.j.b(q)){s=J.cu(q,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.n7()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P},
E(){var s,r,q,p,o,n=this,m=null,l="solid",k="div",j="/questions/ask",i="isAuthenticated",h="Ask a Question",g="color.line",f="color.panel",e="color.text",d="color.muted",c="rgba(52, 211, 153, 0.4)",b="rgba(52, 211, 153, 0.12)",a=n.gha(),a0=n.hb(a),a1=n.c,a2=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,28,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(m,B.n,m,B.n),m,m,1152,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(48,16,48,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,B.u,m,m,m,new A.f(34,16,34,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m),a3=a.length,a4=a0.length,a5=A.a(m,m,m,m,m,new A.b(f,m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(40,40,40,40),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,new A.f(24,24,24,24),m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a6=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,18,m,m,m,m,m,B.m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a7=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,720,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a8=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a8=A.w([n.cm("Community"),n.cm("Q&A")],a8)
s=A.b6("Flint Questions",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(e,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,32,750,m,m,m,m,m,m,m,m,m,m,m,m,1.1,new A.f(0,0,0,0),m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,40,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.G("Ask practical Flint Dart questions, share solutions, and keep answers easy to find for the next developer.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(d,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,1.7,new A.f(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a7=A.i(B.a,m,a7,B.a,B.a)
r=A.j(m,[a8,s,r])
s=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.n,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m)
a8=A.a(m,B.d,m,m,m,new A.d(b),m,new A.m(1,new A.d(c),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(10,16,10,16),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.H($.tL(),m,16)
p=J.al(a1)
o=J.a9(p.j(a1,i),!0)||B.q.gV()!=null?h:"Sign in to Ask"
a8=[A.V(m,[q,A.u(o,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.primary",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],a8,j,m,B.j,m)]
if(!(J.a9(p.j(a1,i),!0)||B.q.gV()!=null)){q=A.a(m,B.d,m,m,m,new A.d("rgba(14, 165, 233, 0.1)"),m,new A.m(1,new A.d("rgba(125, 211, 252, 0.34)"),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(10,16,10,16),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a8.push(A.V(m,[A.H($.k4(),m,16),A.u("Create account",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.accent",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],q,"/questions/ask?mode=register",m,B.j,m))}a6=A.w([new A.k(k,a7,r),A.w(a8,s)],a6)
a7=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a3=n.cn(""+a3,"Questions")
a4=n.cn(""+a4,"Topics")
a3=A.w([a3,a4,n.cn(J.a9(p.j(a1,"canAnswer"),!0)||A.dL(["admin","contributor","dev"],t.N).H(0,B.q.gak(0))?"Open":"Read","Participation")],a7)
a3=[new A.k(k,A.i(B.a,m,a5,B.a,B.a),A.j(m,[a6,a3])),n.hE(a0)]
if(a.length===0){a4=A.a(m,m,m,m,m,new A.b(f,m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(28,28,28,28),m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a5=A.ap("No questions yet",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(e,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,22,700,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a6=A.G("Start the first thread and help shape the Flint knowledge base.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(d,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a7=A.V(h,B.h,A.a(m,m,m,m,m,new A.d(b),m,new A.m(1,new A.d(c),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(9,14,9,14),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("max-content"),m,m,m,m),j,m,B.j,m)
a3.push(new A.k(k,A.i(B.a,m,a4,B.a,B.a),A.j(m,[a5,a6,a7])))}else a3.push(n.h9(a))
return new A.ax(a1,new A.k(k,A.i(B.a,m,a2,B.a,B.a),A.j(m,a3)))},
hE(a){var s,r,q,p,o,n,m=null
t.a.a(a)
if(a.length===0)return A.cs("span",[],A.Z(t.N,t.X))
s=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=[]
for(q=A.q1(a,0,A.fO(10,"count",t.S),A.au(a).c),p=q.$ti,q=new A.bz(q,q.gk(0),p.h("bz<as.E>")),p=p.h("as.E");q.m();){o=q.d
if(o==null)o=p.a(o)
n=A.i(B.a,m,new A.n(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,700,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.a,B.a)
o=A.j(o,B.h)
r.push(new A.k("div",A.i(B.a,m,new A.n(new A.f(7,12,7,12),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.panel",m),999,new A.m(1,new A.b("color.line",m),"solid"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.a,B.a),A.j(m,[new A.a7("span",n,o)])))}return new A.k("div",A.i(B.a,m,s,B.a,B.a),A.j(m,r))},
h9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="span",c="color.muted"
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
n=this.cm(i)
m=f.length===0?"Recently asked":f
m=[A.w([n,new A.a7(d,A.i(B.a,e,new A.n(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,e,e,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(m,B.h))],new A.n(e,e,e,e,e,e,e,e,B.c,10,B.d,e,e,e,e,B.i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)),new A.a7("h2",A.i(B.a,e,new A.n(e,new A.f(0,0,0,0),e,e,e,new A.F("100%"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,20,700,1.35,e,new A.b("color.text",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(k,B.h))]
if(h.length!==0)m.push(new A.a7("p",A.i(B.a,e,new A.n(e,new A.f(0,0,0,0),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,14,e,1.65,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(h,B.h)))
m.push(A.w([new A.a7(d,A.i(B.a,e,new A.n(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,e,e,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j("By "+g,B.h)),A.w([new A.a7(d,A.i(B.a,e,new A.n(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,700,e,e,new A.b("color.primary",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j("Open thread",B.h)),A.H($.bN(),e,14)],new A.n(e,e,e,e,e,e,e,e,B.c,6,B.d,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e))],new A.n(e,e,e,e,e,e,e,e,B.c,12,B.d,e,B.m,e,e,B.i,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)))
r.push(A.V(e,[new A.k("div",A.i(B.a,e,new A.n(e,e,e,e,e,e,e,e,B.e,12,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.j(e,m))],new A.n(new A.f(20,20,20,20),e,new A.F("100%"),e,0,e,e,e,B.F,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b("color.panel",e),16,new A.m(1,new A.b("color.line",e),"solid"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),j,e,B.j,e))}return new A.k("div",A.i(B.a,e,s,B.a,B.a),A.j(e,r))},
cm(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
cn(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,"1 1 132px",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,132,s,s,s,s,s,s,new A.f(14,14,14,14),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.G(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,22,800,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(0,0,0,0),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.G(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(2,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))},
hb(a){var s,r,q,p,o,n
t.p.a(a)
s=A.dK(t.N)
r=A.e([],t.s)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.aE)(a),++p){o=J.M(a[p],"tag")
n=o==null?null:B.b.D(J.r(o))
if(n==null||n.length===0)continue
if(s.u(0,n.toLowerCase()))B.f.u(r,n)}return r}}
A.n7.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.dT.prototype={
E(){var s,r,q,p,o,n=this,m=null,l=n.c,k=t.fF.a(J.M(l,"project")),j=k==null?m:J.aU(k,t.N,t.z)
if(j==null)j=B.Z
k=j.j(0,"title")
s=k==null?m:J.r(k)
if(s==null)s="Flint build"
r=n.fX(j.j(0,"images"))
q=n.fZ(j.j(0,"links"))
k=j.j(0,"built_with")
p=k==null?m:J.r(k)
if(p==null)p=""
k=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,24,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(m,B.n,m,B.n),m,m,1050,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(48,16,48,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,B.u,m,m,m,new A.f(34,16,34,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m)
o=[n.fN(j,s,p,q)]
if(r.length!==0)o.push(n.fT(s,r))
o.push(n.fk(j,q))
return new A.ax(l,new A.k("div",A.i(B.a,m,k,B.a,B.a),A.j(m,o)))},
fN(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=null,h="color.muted"
t.P.a(a)
t.p.a(d)
s=A.a(i,i,i,i,i,new A.b("color.panel",i),i,new A.m(1,new A.b("color.line",i),"solid"),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,18,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(40,40,40,40),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,new A.f(24,24,24,24),i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=[this.dV("Built with Flint")]
if(c.length!==0)q.push(this.dV(c))
r=A.w(q,r)
q=A.b6(b,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.text",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,32,800,i,i,i,i,i,i,i,i,i,i,i,i,1.12,new A.f(0,0,0,0),i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,44,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
p=a.j(0,"description")
p=p==null?i:J.r(p)
if(p==null)p=""
p=A.G(p,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(h,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.75,new A.f(0,0,0,0),i,i,780,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,14,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=a.j(0,"author")
n=n==null?i:J.r(n)
if(n==null)n="Flint developer"
n=A.u("By "+n,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(h,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=[]
for(k=d.length,j=0;j<d.length;d.length===k||(0,A.aE)(d),++j)l.push(this.du(d[j]))
o=A.w([n,A.w(l,m)],o)
return new A.k("div",A.i(B.a,i,s,B.a,B.a),A.j(i,[r,q,p,o]))},
fT(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
t.a.a(b)
s=A.a(g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.e,g,g,g,g,g,g,g,g,g,g,g,g,14,g,"1fr",g,g,g,g,g,g,g,g,g,g,g,g,g,g,A.a(g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,"repeat(3, minmax(0, 1fr))",g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
r=[]
for(q=a+" screenshot ",p=t.N,o=t.X,n=t.eh,m=t.ct,l=m.h("as.E"),k=0;k<b.length;k=j){j=k+1
i=A.ai(["src",b[k],"alt",q+j,"loading","lazy","style",B.jU],p,o)
h=A.aw(new A.ad(B.h,n.a(A.pj()),m),l)
h.$flags=1
r.push(new A.k("div",A.i(B.a,g,new A.n(g,g,g,g,g,g,210,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.u,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.b("color.panelStrong",g),18,new A.m(1,new A.b("color.line",g),"solid"),g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),B.a,B.a),A.j(g,[new A.a7("img",i,h)])))}return new A.k("div",A.i(B.a,g,s,B.a,B.a),A.j(g,r))},
fk(a,b){var s,r,q,p,o,n,m,l=null,k="solid",j="color.line",i="color.text",h="color.muted",g=t.P
g.a(a)
t.p.a(b)
s=A.a(l,B.I,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.c,l,l,l,B.y,l,l,l,l,l,l,l,l,18,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.X,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b(j,l),k),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,B.a5,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(22,22,22,22),l,18,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
q=A.ap("What the app does",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(i,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,22,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
p=a.j(0,"what_it_does")
p=p==null?l:J.r(p)
if(p==null)p=""
p=A.G(p,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,15,l,l,l,l,l,l,l,l,l,l,l,l,l,1.75,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.i(B.a,l,r,B.a,B.a)
p=A.j(l,[q,p])
q=A.a(l,l,l,l,l,new A.b("color.panelStrong",l),l,new A.m(1,new A.b(j,l),k),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("min(300px, 100%)"),l,l,l,l),l,l,l,l,l,l,l,l,new A.f(18,18,18,18),l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.F("100%"),l,l,l,l)
o=[A.ap("Project links",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(i,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))]
n=b.length
if(n===0)o.push(A.G("No external links were added.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)))
else for(m=0;m<b.length;b.length===n||(0,A.aE)(b),++m)o.push(this.du(g.a(b[m])))
g=A.a(l,B.d,l,l,l,new A.d("rgba(14, 165, 233, 0.09)"),l,new A.m(1,new A.d("rgba(125, 211, 252, 0.32)"),k),l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,l,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.f(9,12,9,12),l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o.push(A.V(l,[A.H($.pN(),l,15),A.u("Back to showcase",l)],g,"/showcase",l,B.j,l))
return A.w([new A.k("div",r,p),new A.k("div",A.i(B.a,l,q,B.a,B.a),A.j(l,o))],s)},
du(a){var s,r,q,p,o=null
t.P.a(a)
s=J.al(a)
r=s.j(a,"url")
r=r==null?o:J.r(r)
if(r==null)r="#"
q=A.a(o,B.d,o,o,o,new A.d("rgba(52, 211, 153, 0.1)"),o,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.k,o,o,o,o,o,o,o,o,o,o,o,o,8,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(9,13,9,13),o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
p=A.H($.tK(),o,15)
s=s.j(a,"label")
s=s==null?o:J.r(s)
return A.V(o,[p,A.u(s==null?"Open link":s,o)],q,r,"_blank",B.j,o)},
dV(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
fX(a){var s
if(t.j.b(a)){s=J.k9(a,new A.nf(),t.N)
s=A.aw(s,s.$ti.h("as.E"))
return s}return B.aH},
fZ(a){var s,r
if(t.j.b(a)){s=J.cu(a,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.ng()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P}}
A.nf.prototype={
$1(a){return J.r(a)},
$S:17}
A.ng.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.dU.prototype={
gh8(){var s,r,q=J.M(this.c,"projects")
if(t.j.b(q)){s=J.cu(q,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.nj()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P},
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="isAuthenticated",j="/showcase/submit",i="color.line",h="color.panel",g="color.text",f="color.muted",e="rgba(52, 211, 153, 0.4)",d="rgba(52, 211, 153, 0.12)",c=o.gh8(),b=o.c,a=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,28,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(n,B.n,n,B.n),n,n,1152,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(48,16,48,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,B.u,n,n,n,new A.f(34,16,34,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F("100%"),n,n,n,n),a0=c.length,a1=A.a(n,n,n,n,n,new A.b(h,n),n,new A.m(1,new A.b(i,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,24,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(40,40,40,40),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,new A.f(24,24,24,24),n,24,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a2=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,18,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a3=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,760,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a4=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a4=A.w([o.bs("Built with Flint"),o.bs("Community apps")],a4)
s=A.b6("See what developers are shipping with Flint",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(g,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,32,800,n,n,n,n,n,n,n,n,n,n,n,n,1.1,new A.f(0,0,0,0),n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,43,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r=A.G("A living gallery of dashboards, SaaS products, tools, portals, and backend-first fullstack apps built with pure Dart, Flint Dart, and Flint UI.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(f,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,1.7,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a3=A.i(B.a,n,a3,B.a,B.a)
r=A.j(n,[a4,s,r])
a4=J.al(b)
s=J.a9(a4.j(b,k),!0)||B.q.gV()!=null?j:"/showcase/submit?mode=register"
q=A.a(n,B.d,n,n,n,new A.d(d),n,new A.m(1,new A.d(e),m),n,n,n,n,n,n,n,n,n,n,n,n,B.k,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(10,16,10,16),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
p=A.H($.k5(),n,16)
a4=J.a9(a4.j(b,k),!0)||B.q.gV()!=null?"Submit your build":"Create and submit"
a2=A.w([new A.k(l,a3,r),A.V(n,[p,A.u(a4,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))],q,s,n,B.j,n)],a2)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.w([o.cq(""+a0,"Community builds"),o.cq("3","Images per build"),o.cq("2","Links per build")],s)
s=[new A.k(l,A.i(B.a,n,a1,B.a,B.a),A.j(n,[a2,s]))]
if(c.length===0){a0=A.a(n,n,n,n,n,new A.b(h,n),n,new A.m(1,new A.b(i,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(28,28,28,28),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a1=A.ap("No builds submitted yet",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(g,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,22,800,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a2=A.G("Be the first developer to show what Flint can do in production.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(f,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a3=A.a(n,B.d,n,n,n,new A.d(d),n,new A.m(1,new A.d(e),m),n,n,n,n,n,n,n,n,n,n,n,n,B.k,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(9,14,9,14),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F("max-content"),n,n,n,n)
a3=A.V(n,[A.H($.k4(),n,15),A.u("Submit a build",n)],a3,j,n,B.j,n)
s.push(new A.k(l,A.i(B.a,n,a0,B.a,B.a),A.j(n,[a1,a2,a3])))}else s.push(o.h7(c))
return new A.ax(b,new A.k(l,A.i(B.a,n,a,B.a,B.a),A.j(n,s)))},
h7(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="color.muted"
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
e=a.hn(m.j(n,"images"))
d=a.ho(m.j(n,"links"))
n=a.fU(k,e)
m=[a.bs(h.length===0?"Flint app":h)]
l=e.length
if(l>1)m.push(a.bs(""+l+" images"))
m=[A.w(m,new A.n(a0,a0,a0,a0,a0,a0,a0,a0,B.c,8,a0,a0,a0,a0,a0,B.i,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),new A.a7("h2",A.i(B.a,a0,new A.n(a0,new A.f(0,0,0,0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,20,800,1.3,a0,new A.b("color.text",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(k,B.h))]
if(i.length!==0)m.push(new A.a7("p",A.i(B.a,a0,new A.n(a0,new A.f(0,0,0,0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,1.65,a0,new A.b(a1,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(i,B.h)))
l="By "+g
l=f.length===0?l:l+" \xb7 "+f
c=A.i(B.a,a0,new A.n(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,12,a0,a0,a0,new A.b(a1,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a)
l=A.j(l,B.h)
b=d.length
b=b===0?"View build":""+b+" links"
m.push(A.w([new A.a7("span",c,l),A.w([new A.a7("span",A.i(B.a,a0,new A.n(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,12,800,a0,a0,new A.b("color.primary",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(b,B.h)),A.H($.bN(),a0,14)],new A.n(a0,a0,a0,a0,a0,a0,a0,a0,B.c,6,B.d,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0))],new A.n(a0,a0,a0,a0,a0,a0,a0,a0,B.c,12,B.d,a0,B.m,a0,a0,B.i,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)))
r.push(A.V(a0,[n,new A.k("div",A.i(B.a,a0,new A.n(new A.f(18,18,18,18),a0,a0,a0,a0,a0,a0,a0,B.e,12,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.j(a0,m))],new A.n(a0,a0,a0,a0,0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.b("color.panel",a0),18,new A.m(1,new A.b("color.line",a0),"solid"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),j,a0,B.j,a0))}return new A.k("div",A.i(B.a,a0,s,B.a,B.a),A.j(a0,r))},
fU(a,b){var s,r,q=null
t.a.a(b)
if(b.length===0){s=A.a(q,B.d,q,q,q,new A.b("color.panelStrong",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.r,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.H($.dg(),B.dY,34)
return new A.k("div",A.i(B.a,q,s,B.a,B.a),A.j(q,[r]))}return A.cs("img",B.h,A.ai(["src",B.f.gF(b),"alt",a,"loading","lazy","style",B.jG],t.N,t.X))},
bs(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))},
cq(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,"1 1 132px",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,132,s,s,s,s,s,s,new A.f(14,14,14,14),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.G(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,22,800,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(0,0,0,0),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.G(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(2,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p]))},
hn(a){var s
if(t.j.b(a)){s=J.k9(a,new A.nh(),t.N)
s=A.aw(s,s.$ti.h("as.E"))
return s}return B.aH},
ho(a){var s,r
if(t.j.b(a)){s=J.cu(a,t.f)
r=s.$ti
r=A.bn(s,r.h("z<h,@>(o.E)").a(new A.ni()),r.h("o.E"),t.P)
s=A.aw(r,A.N(r).h("o.E"))
return s}return B.P}}
A.nj.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.nh.prototype={
$1(a){return J.r(a)},
$S:17}
A.ni.prototype={
$1(a){return J.aU(t.f.a(a),t.N,t.z)},
$S:5}
A.d1.prototype={
gdd(){return J.a9(J.M(this.c,"canAnswer"),!0)||A.dL(["admin","contributor","dev","developer"],t.N).H(0,B.q.gak(0))},
E(){var s,r,q=this,p=null,o=q.c,n=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,24,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(p,B.n,p,B.n),p,p,980,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,B.u,p,p,p,new A.f(34,16,34,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.F("100%"),p,p,p,p),m=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(34,34,34,34),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,new A.f(24,24,24,24),p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,B.i,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
l=A.w([q.au("Community showcase"),q.au("3 images \xb7 2 links")],l)
s=A.b6("Submit what you built with Flint",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,31,800,p,p,p,p,p,p,p,p,p,p,p,p,1.12,new A.f(0,0,0,0),p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,38,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.G("Add the app name, screenshots, useful links, and a clear explanation of what the product does. The page is rendered by Flint for SEO so other developers can discover it.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.7,new A.f(0,0,0,0),p,p,760,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=[new A.k("div",A.i(B.a,p,m,B.a,B.a),A.j(p,[l,s,r]))]
m=J.al(o)
if(!(J.a9(m.j(o,"isAuthenticated"),!0)||B.q.gV()!=null)){m=m.j(o,"authMode")
r.push(A.h2("/showcase","Back to Showcase","Create a developer account or sign in to share what you built with Flint.",(m==null?p:J.r(m))==="register","Sign in to submit"))}else r.push(q.fE())
return new A.ax(o,new A.k("div",A.i(B.a,p,n,B.a,B.a),A.j(p,r)))},
fE(){var s,r,q,p,o,n=this,m=null,l="solid",k="text",j="description",i="what_it_does",h="built_with",g="color.line",f=A.a(m,B.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,B.y,m,m,m,m,m,m,m,m,22,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.X,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),e=A.a(m,m,m,m,m,new A.b("color.panel",m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(24,24,24,24),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,0,m,m,m,m,m,m,new A.f(18,18,18,18),m,18,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m),d=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,18,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),c=[],b=n.f
if(b!=null){s=A.a(m,m,m,m,m,new A.d("rgba(248, 113, 113, 0.08)"),m,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(12,12,12,12),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
b=A.G(b,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.d("#fca5a5"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
c.push(new A.k("div",A.i(B.a,m,s,B.a,B.a),A.j(b,B.h)))}b=n.d
s=b.Z(0,"title")
r=n.e
q=$.qL()
c.push(A.bZ(s,r,q,"App or product name","title","Example: ClinicOS, TutorDesk, PayPortal",!0,k))
r=b.Z(0,j)
s=n.e
p=$.uw()
c.push(A.f5(r,s,"Short description",j,"Describe the product, audience, and why you built it.",!0,5,p))
c.push(A.f5(b.Z(0,i),n.e,"What the app does",i,"List the core workflow, automation, dashboard, API, or fullstack experience it provides.",!0,7,p))
c.push(A.bZ(b.Z(0,h),n.e,q,"Built with",h,"Flint Dart, Flint UI, MySQL",!1,k))
c.push(n.dz("Images"))
for(s=[1,2,3],o=0;o<3;++o){r=""+s[o]
p="image_"+r
c.push(A.bZ(b.Z(0,p),n.e,q,"Image "+r+" URL",p,"https://example.com/screenshot-"+r+".png",!1,k))}c.push(n.dz("Links"))
c.push(n.dF(1))
c.push(n.dF(2))
b=n.r
s=n.gdd()
r=A.H($.k5(),m,15)
c.push(A.ay(m,[r,A.u(n.gdd()?"Publish Build":"Developer access required",m)],m,!s,b,m,B.ah,B.x,B.j,B.a0))
d=A.eB(c,d,n.ghA())
e=A.i(B.a,m,e,B.a,B.a)
d=A.j(m,[d])
c=A.a(m,m,m,m,m,new A.b("color.panelStrong",m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("min(280px, 100%)"),m,m,m,m),m,m,m,m,m,m,m,m,new A.f(18,18,18,18),m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.F("100%"),m,m,m,m)
b=A.ap("What to include",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.text",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,800,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.f(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
s=A.G("Use real screenshots and practical links. Short, specific descriptions work best for search and for developers scanning the gallery.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,m,m,m,m,m,m,m,m,m,m,m,m,m,1.6,new A.f(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,B.i,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=A.w([n.au("Screenshots"),n.au("Live URL"),n.au("GitHub"),n.au("Use case")],r)
return A.w([new A.k("div",e,d),new A.k("div",A.i(B.a,m,c,B.a,B.a),A.j(m,[b,s,r]))],f)},
dF(a){var s,r,q,p,o,n,m=null,l=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,B.y,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.X,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),k=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),j=""+a,i="Link "+j
j="link_"+j
s=j+"_label"
r=this.d
q=r.Z(0,s)
p=this.e
o=a===1?"Live app":"GitHub"
n=$.qL()
o=A.bZ(q,p,n,i+" label",s,o,!1,"text")
k=A.i(B.a,m,k,B.a,B.a)
o=A.j(m,[o])
s=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
j+="_url"
j=A.bZ(r.Z(0,j),this.e,n,i+" URL",j,"https://example.com",!1,"text")
return A.w([new A.k("div",k,o),new A.k("div",A.i(B.a,m,s,B.a,B.a),A.j(m,[j]))],l)},
by(a){return this.hx(A.aa(a))},
hx(a3){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$by=A.bf(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:if(t.m.b(a3))a3.preventDefault()
if(n.r){s=1
break}n.q(new A.nA(n))
c=n.hJ()
b=c.a
if(b.gM(b)){h=n.cs(c,"Check your build.")
n.q(new A.nB(n,c))
B.o.P(0,"Build not submitted",h)
s=1
break}p=4
m=B.q.gV()
b=$.cc()
a=t.N
a0=A.ha(n.d.b,a,t.X)
l=A.Z(a,a)
J.ar(l,"Accept","application/json")
J.ar(l,"X-Requested-With","FlintClient")
if(m!=null)J.ar(l,"Authorization","Bearer "+m)
s=7
return A.b0(b.aj("/showcase/submit",a0,l,t.P),$async$by)
case 7:k=a5
j=k.b
if(k.f&&j!=null){B.o.ad("Build published","Opening the showcase page.")
l=J.M(j,"redirectTo")
l=l==null?null:J.r(l)
if(l==null)l="/showcase"
A.y(A.y(v.G.window).location).assign(l)
s=1
break}i=A.cd(j)
l=j
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not submit build."
h=n.cs(i,l)
n.q(new A.nC(n,i,h))
B.o.P(0,"Build not submitted",h)
p=2
s=6
break
case 4:p=3
a2=o.pop()
l=A.aL(a2)
if(l instanceof A.bQ){g=l
f=n.fw(g)
e=A.cd(f)
l=f
if(l==null)l=null
else{l=J.M(l,"message")
l=l==null?null:J.r(l)}if(l==null)l="Could not submit build."
d=n.cs(e,l)
n.q(new A.nD(n,e,d))
B.o.P(0,"Build not submitted",d)}else{n.q(new A.nE(n))
B.o.P(0,"Build not submitted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$by,r)},
hJ(){var s,r,q,p,o,n,m,l,k,j="description",i="what_it_does",h="Add at least 20 characters.",g="Use a full http or https URL.",f=A.Z(t.N,t.a),e=this.d,d=B.b.D(e.a0("title")),c=B.b.D(e.a0(j)),b=B.b.D(e.a0(i))
if(d.length<3)f.i(0,"title",A.e(["Add the app name."],t.s))
if(c.length<20)f.i(0,j,A.e([h],t.s))
if(b.length<20)f.i(0,i,A.e([h],t.s))
for(s=["image_1","image_2","image_3"],e=e.b,r=t.s,q=0;q<3;++q){p=s[q]
o=e.j(0,p)
o=o==null?null:J.r(o)
n=B.b.D(o==null?"":o)
if(n.length!==0){m=A.q4(n)
o=!1
if(m!=null)if(m.gaE(m).length!==0)o=m.gac()==="http"||m.gac()==="https"
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
if(n.length!==0){m=A.q4(n)
l=!1
if(m!=null)if(m.gaE(m).length!==0)l=m.gac()==="http"||m.gac()==="https"
l=!l}else l=!1
if(l)f.i(0,o,A.e([g],r))}return new A.bS(f)},
fw(a){var s=a.d
if(t.P.b(s))return s
if(t.f.b(s))return J.cL(s,new A.nz(),t.N,t.z)
return null},
cs(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb3()
s=A.N(r).h("aO<2>")
return A.iz(new A.aO(r,s),3,s.h("o.E")).J(0," ")},
dz(a){var s=null
return A.ap(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,15,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(4,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))},
au(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.nA.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.B
s.f=null},
$S:0}
A.nB.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
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
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nE.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not submit build. Please try again."},
$S:0}
A.nz.prototype={
$2(a,b){return new A.a1(J.r(a),b,t.I)},
$S:6}
A.dX.prototype={
ge2(){var s=J.M(this.c,"contentHtml")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="Components",e="#a-component-is-a-dart-class",d="HtmlContent",c="100%",b="color.line",a="color.panel",a0="color.text",a1="color.muted",a2="color.primary",a3=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(i,B.n,i,B.n),i,i,1040,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,28,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(48,18,48,18),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,new A.f(34,14,34,14),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(c),i,i,i,i),a4=t.G
a4=A.a(i,i,i,i,i,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(52, 211, 153, 0.18)"),0),new A.L(new A.d("rgba(14, 165, 233, 0.12)"),52),new A.L(new A.b(a,i),100)],a4)),new A.b(a,i)],a4)),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.T,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,24,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.w([j.e3("Flint UI"),j.e3("Dart components")],q)
p=A.b6("Build browser UI with Dart components.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.G("Flint UI keeps components, state, events, styling, server props, and trusted HTML rendering inside the Dart ecosystem.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.i(B.a,i,r,B.a,B.a)
o=A.j(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,290,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(c),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(a,i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.L,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.w([A.H($.cb(),new A.b(a2,i),16),A.u("Pure Dart UI",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a2,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aZ,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.u("class Counter extends Component",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
k=A.u("setState(() => count++)",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.i(B.a,i,m,B.a,B.a)
k=A.j(i,[l,k])
l=A.G("The public API teaches Component, View, DartStyle, and state without exposing internal nodes.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.i(B.a,i,q,B.a,B.a)
l=A.j(i,[n,new A.k(g,m,k),l])
s=A.w([new A.k(g,r,o),new A.k(g,A.i(B.a,i,p,B.a,B.a),A.j(i,[new A.k(g,q,l)]))],s)
l=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.w([j.cf(f,e),j.cf("State","#state-updates-with-setstate"),j.cf(d,"#render-trusted-html")],l)
a4=A.i(B.a,i,a4,B.a,B.a)
l=A.j(i,[s,l])
s=A.X(240,!1)
q=A.X(B.H,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.K,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b3("repeat("+A.X("auto-fit",!0)+", "+A.X(new A.aG("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.bh($.tE(),f,"Build screens from Dart classes with a simple View build method.",B.a1)
p=j.bh($.pM(),"State","Preserve component state and receive new constructor values with updateFrom.",B.a2)
o=j.bh($.ef(),"DartStyle","Keep layout, spacing, colors, and responsive rules beside the component.",B.as)
r=j.bh($.tG(),d,"Render trusted Markdown HTML without manual document selectors in app code.",B.dx)
q=A.i(B.a,i,q,B.a,B.a)
r=A.j(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(a,i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.ad,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.u,i,i,i,B.L,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.F(c),i,i,i,i)
p=A.a(i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.c,i,i,i,i,i,i,B.i,i,i,i,i,i,12,i,i,i,i,i,B.m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.ap("UI documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.G("Components, props, state, styling, page registration, client requests, and trusted HTML.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.i(B.a,i,s,B.a,B.a)
m=A.j(i,[k,m])
k=A.a(i,B.d,i,i,i,new A.d("rgba(52, 211, 153, 0.1)"),i,new A.m(1,new A.d("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.f(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.w([new A.k(g,s,m),A.V(i,[A.u("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a2,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.H($.bN(),new A.b(a2,i),14)],k,e,i,B.j,i)],p)]
if(j.ge2().length===0)p.push(A.G("The Flint UI guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else p.push(A.cf("api-md markdown-body",j.ge2(),"ui-content",B.aI))
s=A.i(B.a,i,o,B.a,B.a)
p=A.j(i,p)
return new A.ax(j.c,new A.k(g,A.i(B.a,i,a3,B.a,B.a),A.j(i,[new A.k(g,a4,l),new A.k(g,q,r),new A.k(g,s,p)])))},
bh(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.L,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,d,20),p=A.bK(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.G(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q,p,o]))},
cf(a,b){var s=null
return A.V(a,B.h,A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b6,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,s,B.j,s)},
e3(a){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.d("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.a7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.F("max-content"),s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.e0.prototype={
E(){var s,r,q,p,o=null,n="div",m=$.ul(),l=$.u5(),k=A.u("Product Updates",$.u7())
l=A.i(B.a,o,l,B.a,B.a)
k=A.j(o,[k])
s=$.u6()
r=A.u("What's New",$.u8())
r=A.w([new A.k(n,l,k),new A.k(n,A.i(B.a,o,s,B.a,B.a),A.j(o,[r]))],B.fx)
s=A.b6("What's New in Flint Dart",$.uk())
k=A.G("Highlights from the latest Flint Dart and Flint UI releases.",$.uu())
m=A.i(B.a,o,m,B.a,B.a)
k=A.j(o,[r,s,k])
s=this.fJ()
r=$.ud()
l=A.bK("Next",$.ug())
q=A.G("Follow the changelog for complete release history and migration notes.",$.uc())
p=$.ue()
p=A.V(o,[A.u("Open Changelog",$.uf())],p,"/changelog",o,B.j,o)
r=A.i(B.a,o,r,B.a,B.a)
p=A.j(o,[l,q,p])
q=A.i(B.a,o,B.fN,B.a,B.a)
p=A.j(o,[new A.k(n,m,k),s,new A.k(n,r,p)])
return new A.ax(this.c,new A.k(n,A.i(B.a,o,B.aw,B.a,B.a),A.j(o,[new A.k(n,q,p)])))},
fJ(){var s,r,q,p,o,n,m,l=null,k=[]
for(s=0;s<19;++s){r=B.je[s]
q=$.u9()
p=A.i(B.a,l,$.ub(),B.a,B.a)
o=A.j(r.b,B.h)
n=A.i(B.a,l,$.ua(),B.a,B.a)
m=A.j(r.a,B.h)
k.push(new A.k("div",A.i(B.a,l,q,B.a,B.a),A.j(l,[new A.a7("h2",p,o),new A.a7("p",n,m)])))}return new A.k("div",A.i(B.a,l,B.eQ,B.a,B.a),A.j(l,k))}}
A.h1.prototype={
E(){var s,r,q,p=this,o=null,n="Create account",m="password",l="color.muted",k=A.a(o,o,o,o,o,new A.b("color.panel",o),o,new A.m(1,new A.b("color.line",o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.e,o,o,o,o,o,o,o,o,o,o,o,o,18,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(24,24,24,24),o,16,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),j=A.ap(p.c,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b("color.text",o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,22,700,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),i=A.G(p.d,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(l,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,14,o,o,o,o,o,o,o,o,o,o,o,o,o,1.65,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),h=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,o,o,o,o,o,B.i,o,o,o,o,o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),g=p.z
g=(g==null?p.r:g)?B.D:B.be
g=A.ay("Sign in",B.h,o,!1,!1,new A.ks(p),B.a,B.x,B.j,g)
s=p.z
s=(s==null?p.r:s)?B.be:B.D
h=[j,i,A.w([g,A.ay(n,B.h,o,!1,!1,new A.kt(p),B.a,B.x,B.j,s)],h)]
j=p.as
if(j!=null){i=A.a(o,o,o,o,o,new A.d("rgba(248, 113, 113, 0.08)"),o,new A.m(1,new A.d("rgba(248, 113, 113, 0.35)"),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(12,12,12,12),o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
j=A.G(j,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.d("#fca5a5"),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
h.push(new A.k("div",A.i(B.a,o,i,B.a,B.a),A.j(o,[j])))}j=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.e,o,o,o,o,o,o,o,o,o,o,o,o,14,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
i=[]
g=p.z
if(g==null?p.r:g)i.push(A.bZ(p.x,o,$.qK(),"Name","name","Your name",!1,"text"))
g=$.qK()
i.push(A.bZ(p.w,o,g,"Email or username","email","you@example.com",!1,"text"))
i.push(A.bZ(p.y,o,g,"Password",m,"Minimum 8 characters",!1,m))
g=A.a(o,B.d,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.c,o,o,o,o,o,o,B.i,o,o,o,o,o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
s=p.Q
r=p.z
q=A.H((r==null?p.r:r)?$.k4():$.qD(),o,15)
r=p.z
i.push(A.w([A.ay(o,[q,A.u((r==null?p.r:r)?n:"Sign in",o)],o,!1,s,new A.ku(p),B.a,B.x,B.j,B.a0),A.V(p.f,B.h,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(l,o),o,o,o,B.k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.f(8,12,8,12),o,9,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),p.e,o,B.j,o)],g))
h.push(A.eB(i,j,o))
return new A.k("div",A.i(B.a,o,k,B.a,B.a),A.j(o,h))},
bw(){var s=0,r=A.be(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bw=A.bf(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.q(new A.kn(n))
p=4
j=n.z
m=(j==null?n.r:j)?"/auth/register":"/auth/login"
i=$.cc()
h=t.N
l=A.Z(h,h)
J.ar(l,"email",B.b.D(n.w.a))
J.ar(l,"password",n.y.a)
j=n.z
if(j==null?n.r:j)J.ar(l,"name",B.b.D(n.x.a))
s=7
return A.b0(i.ig(m,l,t.P),$async$bw)
case 7:k=b
if(k.f){n.hg(k.b)
l=n.z
B.o.ad((l==null?n.r:l)?"Account created":"Signed in","Refreshing your session...")
A.v2(B.hl,B.bf.gij(B.bf),t.H)
s=1
break}n.q(new A.ko(n,k))
B.o.P(0,"Authentication failed",n.as)
p=2
s=6
break
case 4:p=3
f=o.pop()
n.q(new A.kp(n))
B.o.P(0,"Authentication failed",n.as)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bc(q,r)
case 2:return A.bb(o.at(-1),r)}})
return A.bd($async$bw,r)},
f3(a){var s,r,q
t.h.a(a)
s=a==null
r=s?null:J.M(a,"errors")
if(typeof r=="string")return r
if(t.f.b(r)&&J.di(r)){q=J.fT(J.pQ(r))
if(t.j.b(q)&&J.di(q))return J.r(J.fT(q))
return J.r(q)}if(s)s=null
else{s=J.M(a,"message")
s=s==null?null:J.r(s)}return s==null?"Authentication failed.":s},
hg(a){var s,r,q,p,o,n,m,l,k=null
t.h.a(a)
s=a==null?k:J.M(a,"data")
r=t.f
q=r.b(s)?J.aU(s,t.N,t.z):k
p=q==null
if(p)o=k
else{n=q.j(0,"token")
o=n==null?k:J.r(n)}m=p?k:q.j(0,"user")
if(m==null)m=q
l=r.b(m)?J.aU(m,t.N,t.z):B.Z
if(o==null||o.length===0){if(l.gM(l)){r=B.E.aa(t.P.a(l),k)
A.y(A.y(v.G.window).localStorage).setItem("auth.user",r)}return}t.P.a(l)
r=v.G
A.y(A.y(r.window).localStorage).setItem("auth.token",o)
p=B.E.aa(l,k)
A.y(A.y(r.window).localStorage).setItem("auth.user",p)
r=A.y(r.document)
p=A.e([A.oA(2,"auth.token",B.W,!1)+"="+A.oA(2,o,B.W,!1)],t.s)
p.push("Max-Age=2592000")
p.push("Path=/")
p.push("SameSite="+B.dd.fF(B.eC))
r.cookie=B.f.J(p,"; ")}}
A.ks.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.kr(s))},
$S:1}
A.kr.prototype={
$0(){var s=this.a
s.z=!1
s.as=null},
$S:0}
A.kt.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.kq(s))},
$S:1}
A.kq.prototype={
$0(){var s=this.a
s.z=!0
s.as=null},
$S:0}
A.ku.prototype={
$1(a){A.aa(a)
return this.a.bw()},
$S:1}
A.kn.prototype={
$0(){var s=this.a
s.Q=!0
s.as=null},
$S:0}
A.ko.prototype={
$0(){var s=this.a
s.Q=!1
s.as=s.f3(this.b.b)},
$S:0}
A.kp.prototype={
$0(){var s=this.a
s.Q=!1
s.as="Could not sign in. Check your details and try again."},
$S:0}
A.hr.prototype={
gcr(){var s=J.M(this.b,"flashSuccess")
s=s==null?null:J.r(s)
return s==null?"":s},
gcb(){var s=J.M(this.b,"flashError")
s=s==null?null:J.r(s)
return s==null?"":s},
E(){var s,r,q,p,o=this,n=null
if(o.gcr().length===0&&o.gcb().length===0)return A.cs("span",[],A.Z(t.N,t.X))
s=$.uF()
r=[]
if(o.gcr().length!==0){q=$.uv()
p=A.G(o.gcr(),$.qJ())
r.push(new A.k("div",A.i(B.a,n,q,B.a,B.a),A.j(n,[p])))}if(o.gcb().length!==0){q=$.uh()
p=A.G(o.gcb(),$.qJ())
r.push(new A.k("div",A.i(B.a,n,q,B.a,B.a),A.j(n,[p])))}return new A.k("div",A.i(B.a,n,s,B.a,B.a),A.j(n,r))}}
A.hy.prototype={
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="rgba(30, 41, 59, 0.72)",j="rgba(5, 7, 13, 0.98)",i="100%",h="color.muted",g=t.G,f=A.a(n,n,n,n,n,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(8, 47, 73, 0.2)"),0),new A.L(new A.d(j),48),new A.L(new A.d("rgba(20, 83, 45, 0.16)"),100)],g)),new A.d(j)],g)),n,n,n,n,n,n,new A.m(1,new A.d(k),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(48,n,0,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),e=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F(i),n,n,n,n),d=A.a(n,n,n,n,n,new A.b("color.panelStrong",n),n,new A.m(1,new A.d("rgba(56, 189, 248, 0.16)"),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,28,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(22,22,22,22),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),c=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(n,B.n,n,B.n),n,n,1152,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F(i),n,n,n,n),b=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,34,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,280,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a0=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
g=A.a(n,B.d,n,n,n,A.aM(A.e([A.aW(135,A.e([new A.L(new A.d("rgba(56, 189, 248, 0.24)"),0),new A.L(new A.d("rgba(52, 211, 153, 0.18)"),100)],g)),new A.d("rgba(15, 23, 42, 0.86)")],g)),n,new A.m(1,new A.d("rgba(56, 189, 248, 0.34)"),m),n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,B.r,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,n,n)
s=A.tg(30)
g=A.i(B.a,n,g,B.a,B.a)
s=A.j(n,[s])
r=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.u("Flint Ecosystem",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,16,900,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.u("The Unified Dart Technology Stack",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,700,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a0=A.w([new A.k(l,g,s),new A.k(l,A.i(B.a,n,r,B.a,B.a),A.j(n,[q,p]))],a0)
p=A.G("One language powering Full-Stack Web, Cross-Platform Clients, Native AI, and Connected Robotics.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,1.6,new A.f(0,0,0,0),n,n,390,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.w([o.ae("Fullstack"),o.ae("Client SDK"),o.ae("AI Engine"),o.ae("Hardware")],q)
r=t.O
b=A.w([new A.k(l,A.i(B.a,n,a,B.a,B.a),A.j(n,[a0,p,q])),o.cg("Ecosystem Pillars",A.e([B.kQ,B.kh,B.kz,B.kn,B.kR,B.kg,B.kL],r)),o.cg("Updates & Resources",A.e([B.kr,B.kS,B.l2,B.kI,B.kY],r)),o.cg("Community",A.e([B.kH,B.l1,B.kE,B.ky,B.kF],r))],b)
c=A.i(B.a,n,c,B.a,B.a)
b=A.j(n,[b])
r=A.a(n,B.d,n,n,n,n,n,new A.m(1,new A.d(k),m),n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,12,n,n,n,n,n,B.m,n,n,n,n,n,n,new A.f(n,B.n,n,B.n),n,n,1152,n,n,n,n,n,n,n,n,n,new A.f(22,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.F(i),n,n,n,n)
q=A.u("Copyright 2026 Flint Dart. Maintained by Eulogia Technologies.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,B.i,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.w([q,A.w([o.ae("v 1.3.2"),o.ae("MIT License"),o.ae("Built with Dart")],p)],r)
d=A.i(B.a,n,d,B.a,B.a)
r=A.j(n,[new A.k(l,c,b),r])
e=A.i(B.a,n,e,B.a,B.a)
r=A.j(n,[new A.k(l,d,r)])
return new A.k(l,A.i(B.a,n,f,B.a,B.a),A.j(n,[new A.k(l,e,r)]))},
cg(a,b){var s,r,q,p,o,n=null
t.gk.a(b)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,150,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[A.u(a,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.d("#67e8f9"),n,n,n,B.F,n,n,n,n,n,n,n,n,n,n,11,900,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.f(n,n,3,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))]
for(q=b.length,p=0;p<b.length;b.length===q||(0,A.aE)(b),++p){o=b[p]
r.push(A.V(o.b,B.h,new A.n(n,n,n,n,n,n,n,n,B.F,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,new A.d("#a8b3c5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),o.a,n,B.j,n))}return new A.k("div",A.i(B.a,n,s,B.a,B.a),A.j(n,r))},
ae(a){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.d("rgba(51, 65, 85, 0.76)"),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.f(5,10,5,10),s,9999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[q]))}}
A.i7.prototype={
gde(){var s,r
if(!J.a9(J.M(this.b,"canWriteBlog"),!0)){s=t.cq.a(A.dL(["admin","contributor"],t.N))
r=B.q.gak(0)
s=r!=null&&s.H(0,r)}else s=!0
return s},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="solid",b="Ecosystem",a="/",a0="Fullstack",a1="/fullstack",a2="/client",a3="Hardware",a4="/hardware",a5="div",a6="Overview",a7="Features",a8="Changelog",a9="Ecosystem \u2197",b0="pub.dev \u2197",b1="color.line",b2="color.panel",b3="color.text",b4="color.muted",b5=A.E(18,!1),b6=A.a(d,d,d,d,d,new A.d("rgba(255, 255, 255, 0.9)"),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),b7=t.G
b6=A.a(d,d,d,d,new A.d0("blur("+b5+")"),new A.b(b2,d),d,d,new A.m(1,new A.b(b1,d),c),d,d,d,d,d,d,d,d,d,A.a(d,d,d,d,d,A.aM(A.e([A.aW(90,B.jj),B.bj],b7)),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.kf,d,d,d,d,d,d,d,d,d,d,d,d,0,d,d,d,d,d,d,d,d,50)
s=e.gan()
r=s!=="ecosystem"
if(s==="fullstack"){b5=J.M(e.b,"flintDartVersion")
q="v"+A.W(b5==null?"1.3.2":b5)
p=a1
o=a0
n=B.N}else if(s==="client"){b5=J.M(e.b,"flintClientVersion")
q="v"+A.W(b5==null?"0.1.0":b5)
p=a2
o="Client SDK"
n=B.G}else{q="v0.1.0"
if(s==="ai"){o="AI Engine"
p="/ai"
n=B.aM}else if(s==="hardware"){p=a4
o=a3
n=B.ap}else{q=d
p=a
o=b
n=B.G}}b5=A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,10,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
m=A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,12,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
b7=A.a(d,B.d,d,d,d,A.aM(A.e([A.aW(135,B.jy),new A.b(b2,d)],b7)),d,new A.m(1,new A.d("rgba(56, 189, 248, 0.34)"),c),d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,38,d,d,B.r,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b("radius.md",d),d,d,d,d,d,new A.b("shadow.glow",d),d,d,d,d,d,d,d,d,d,d,38,d,d,d,d)
l=A.tg(30)
b7=A.i(B.a,d,b7,B.a,B.a)
l=A.j(d,[l])
k=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j=A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
i=[A.u("Flint",A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b(b3,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,15,800,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))]
if(q!=null){h=A.a(d,d,d,d,d,new A.d("rgba(52, 211, 153, 0.12)"),d,new A.m(1,new A.d("rgba(52, 211, 153, 0.3)"),c),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.hw,d,999,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
g=A.u(q,B.he)
i.push(new A.k(a5,A.i(B.a,d,h,B.a,B.a),A.j(d,[g])))}j=A.w(i,j)
i=A.u(o,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,r?n:new A.b(b4,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,11,800,d,d,d,d,d,d,d,d,d,0.3,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
m=[A.V(d,[new A.k(a5,b7,l),new A.k(a5,A.i(B.a,d,k,B.a,B.a),A.j(d,[j,i]))],m,p,d,B.j,d)]
if(r){b7=A.a(d,B.d,d,d,d,new A.d("rgba(255, 255, 255, 0.05)"),d,new A.m(1,new A.b(b1,d),c),d,d,d,d,d,d,d,d,new A.b(b4,d),d,d,d,B.J,d,d,d,d,d,d,d,d,d,d,11,700,4,d,d,d,A.a(d,d,d,d,d,new A.d("rgba(255, 255, 255, 0.1)"),d,d,d,d,d,d,d,d,d,d,new A.b(b3,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.hS,d,999,d,d,d,d,d,d,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.k,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d)
m.push(A.V(d,[A.H($.pN(),d,12),A.u(b,d)],b7,a,d,B.j,d))}b7=e.b
l=J.al(b7)
if(J.a9(l.j(b7,"showGuideMenu"),!0))m.push(e.fL())
if(J.a9(l.j(b7,"showApiMenu"),!0))m.push(e.eW())
b5=A.w(m,b5)
s=e.gan()
if(s==="fullstack")f=A.e([e.G(a1,a6),e.G("/fullstack#features",a7),e.G("/fullstack/guides","Guides"),e.G("/fullstack/api","API"),e.G("/fullstack/whats-new","What's New"),e.G("/fullstack/changelog",a8),e.G("/fullstack/examples","Examples"),e.G(a,a9)],t.Y)
else if(s==="client")f=A.e([e.G(a2,a6),e.G("/client#features",a7),e.G("/client#caching","Caching"),e.G("/client#channels","Real-Time"),e.G("https://pub.dev/packages/flint_client",b0),e.G(a,a9)],t.Y)
else if(s==="ai")f=A.e([e.G("/ai",a6),e.G("/ai#agents","Agents"),e.G("/ai#tools","Tool Policies"),e.G("/ai#chat","Streaming"),e.G("https://pub.dev/packages/flint_ai",b0),e.G(a,a9)],t.Y)
else{b7=t.Y
f=s==="hardware"?A.e([e.G(a4,a6),e.G("/hardware#sensors","Sensors"),e.G("/hardware#statemachine","State Machine"),e.G("/hardware#wokwi","Wokwi Simulator"),e.G("https://pub.dev/packages/flint_hardware",b0),e.G(a,a9)],b7):A.e([e.G(a,b),e.G(a1,a0),e.G(a2,"Client"),e.G("/ai","AI"),e.G(a4,a3),e.G("/api","API"),e.G("/blog","Blog"),e.G("/questions","Questions"),e.G("/changelog",a8)],b7)}b7=A.w(f,A.a(d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.J,d,d,d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
m=e.h_()
m=[new A.k(a5,A.i(B.a,d,B.fM,B.a,B.a),A.j(d,[b5,b7,m]))]
if(e.c)m.push(e.h0())
if(e.d)m.push(e.fK())
if(e.e)m.push(e.eV())
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
fL(){var s=null,r=A.ai(["aria-label",this.d?"Close guide navigation":"Open guide navigation"],t.N,t.X),q=this.d,p=q?new A.d("rgba(52, 211, 153, 0.16)"):new A.b("color.panel",s)
p=A.a(s,B.d,s,s,s,p,s,new A.m(1,new A.d("rgba(52, 211, 153, 0.34)"),"solid"),s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,B.fi,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,B.r,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.J,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,B.l,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,s,s)
return A.ay(A.H(q?$.k7():$.fQ(),s,17),B.h,p,!1,!1,new A.mn(this),r,B.x,B.z,B.C)},
eW(){var s=null,r=A.ai(["aria-label",this.e?"Close API navigation":"Open API navigation"],t.N,t.X),q=this.e,p=q?new A.d("rgba(14, 165, 233, 0.18)"):new A.b("color.panel",s)
p=A.a(s,B.d,s,s,s,p,s,new A.m(1,new A.d("rgba(56, 189, 248, 0.34)"),"solid"),s,s,s,s,s,s,s,s,new A.b("color.accent",s),s,B.h3,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,B.r,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.J,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,B.l,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,s,s)
return A.ay(A.H(q?$.k7():$.qC(),s,17),B.h,p,!1,!1,new A.mh(this),r,B.x,B.z,B.C)},
G(a,b){var s=null,r=A.a(s,s,s,s,s,new A.d("rgba(255, 255, 255, 0.06)"),s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.V(b,B.h,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aq(0,0,3,new A.d("rgba(56, 189, 248, 0.28)")),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,13,700,s,s,s,s,r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.b5,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aZ("all 160ms ease"),s,s,s,s,s,s,s),a,s,B.j,s)},
h_(){var s,r,q,p,o,n=this,m=null,l="solid",k="radius.md",j="rgba(52, 211, 153, 0.34)",i="rgba(52, 211, 153, 0.1)",h="color.primary",g="auth.user",f=A.a(m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),e=[]
if(n.gde())e.push(A.V("Write",B.h,A.a(m,m,m,m,m,new A.d(i),m,new A.m(1,new A.d(j),l),m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,B.J,m,m,m,m,m,m,m,m,m,m,13,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,B.ac,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"/blog/write",m,B.j,m))
e.push(n.hG())
s=n.b
r=J.al(s)
if(J.a9(r.j(s,"isAuthenticated"),!0)||B.q.gV()!=null){q=A.a(m,B.d,m,m,m,new A.d(i),m,new A.m(1,new A.d(j),l),m,m,m,m,m,m,m,m,m,m,m,m,B.J,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,B.ca,m,new A.b("radius.pill",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
p=A.i(B.a,m,A.a(m,m,m,m,m,new A.d("#6ee7b7"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,9999,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m),B.a,B.a)
o=A.j(m,B.h)
s=r.j(s,"currentUserLabel")
s=s==null?m:J.r(s)
if(s==null){s=J.M(B.an.cQ(g),"name")
s=s==null?m:J.r(s)}if(s==null){s=J.M(B.an.cQ(g),"email")
s=s==null?m:J.r(s)}if(s==null)s="Signed in"
s=A.u(s,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
e.push(new A.k("div",A.i(B.a,m,q,B.a,B.a),A.j(m,[new A.k("div",p,o),s])))}e.push(A.V("GitHub",B.h,A.a(m,m,m,m,m,new A.d("rgba(2, 132, 199, 0.08)"),m,new A.m(1,new A.d("rgba(2, 132, 199, 0.28)"),l),m,m,m,m,m,m,m,m,new A.b("color.accent",m),m,B.hc,m,m,m,m,m,m,m,m,m,m,m,m,13,800,m,m,m,m,A.a(m,m,m,m,m,new A.d("rgba(2, 132, 199, 0.14)"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ac,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,new A.aZ("all 160ms ease"),m,m,m,m,m,m,m),"https://github.com/flint-dart/flint_dart","_blank",B.j,m))
e.push(A.ay("Menu",B.h,A.a(m,m,m,m,m,new A.b("color.panel",m),m,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),l),m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.J,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,56,m,m,m,m,m,m,B.ca,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),!1,!1,new A.mp(n),B.a,B.x,B.z,B.C))
return A.w(e,f)},
e_(a){return new A.cC($.pO().a,new A.mv(a),t.ch)},
hG(){return this.e_(!1)},
h0(){var s,r,q,p,o=this,n=null,m="/fullstack",l="Overview",k="Features",j="Changelog",i="div",h="Ecosystem Overview",g="/client",f="Client SDK",e="/ai",d="AI Engine",c="/hardware",b="Hardware & Robotics",a="/questions",a0="Questions",a1="pub.dev Package",a2="Fullstack Framework",a3="radius.md",a4="color.panel",a5="color.muted",a6="color.line",a7=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.b9,n,n,0,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,100),a8=A.cs("button",B.h,A.ai(["type","button","aria-label","Close navigation","onClick",new A.ms(o),"style",B.b8],t.N,t.X)),a9=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.aq(18,44,-28,new A.d("rgba(15, 23, 42, 0.22)")),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a9=A.a(n,n,n,n,n,new A.b(a4,n),n,new A.m(1,new A.d("rgba(71, 85, 105, 0.8)"),"solid"),n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.aq(18,54,-24,new A.d("rgba(0, 0, 0, 0.58)")),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,a9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.L,B.aj,new A.b(a3,n),n,12,n,n,n,n,n,n,n,n,n,12,n,n,n,n,new A.F("min(360px, calc(100% - 24px))"),n,n,n,n)
s=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,B.m,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.u("Navigation",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,14,900,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
q=A.a(n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.w([r,A.w([o.e_(!0),A.ay("Close",B.h,A.a(n,n,n,n,n,new A.b(a4,n),n,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),"solid"),n,n,n,n,n,n,n,n,new A.b(a5,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,58,n,n,n,n,n,n,B.c9,n,new A.b(a3,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),!1,!1,new A.mt(o),B.a,B.x,B.z,B.C)],q)],s)
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,6,n,n,n,n,n,n,n,n,n,n,n,n,B.hv,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
if(o.gan()==="fullstack")B.f.S(r,[A.u("FLINT FULLSTACK",B.fh),o.A(m,l),o.A("/fullstack#features",k),o.A("/fullstack/guides","Guides"),o.A("/fullstack/api","API Reference"),o.A("/fullstack/whats-new","What's New"),o.A("/fullstack/changelog",j),o.A("/fullstack/examples","Examples"),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),A.u("ECOSYSTEM",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(a5,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,800,n,n,n,n,n,n,n,n,n,0.5,n,n,n,B.ae,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),o.A("/",h),o.A(g,f),o.A(e,d),o.A(c,b),o.A("/blog","Blog"),o.A(a,a0)])
else if(o.gan()==="client")B.f.S(r,[A.u("FLINT CLIENT SDK",B.eL),o.A(g,l),o.A("/client#features",k),o.A("/client#caching","Caching"),o.A("/client#channels","Real-Time Channels"),o.A("https://pub.dev/packages/flint_client",a1),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),o.A("/",h),o.A(m,a2),o.A(e,d),o.A(c,b)])
else if(o.gan()==="ai")B.f.S(r,[A.u("FLINT AI ENGINE",B.f1),o.A(e,l),o.A("/ai#agents","Agents & Workflows"),o.A("/ai#tools","Tool Policies"),o.A("/ai#chat","Streaming Chat"),o.A("https://pub.dev/packages/flint_ai",a1),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),o.A("/",h),o.A(m,a2),o.A(g,f),o.A(c,b)])
else if(o.gan()==="hardware")B.f.S(r,[A.u("FLINT HARDWARE & ROBOTICS",B.eT),o.A(c,l),o.A("/hardware#sensors","Sensors & IMU"),o.A("/hardware#statemachine","State Machine"),o.A("/hardware#wokwi","Wokwi Simulator"),o.A("https://pub.dev/packages/flint_hardware",a1),new A.k(i,A.i(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.aF,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.j(n,B.h)),o.A("/",h),o.A(m,a2),o.A(g,f),o.A(e,d)])
else{p=[o.A("/","Ecosystem"),o.A(m,"Fullstack"),o.A(g,"Client"),o.A(e,"AI"),o.A(c,"Hardware"),o.A("/api","API"),o.A("/blog","Blog"),o.A(a,a0),o.A("/changelog",j)]
if(o.gde())p.push(o.A("/blog/write","Write Blog Post"))
B.f.S(r,p)}q=A.i(B.a,n,q,B.a,B.a)
r=A.j(n,r)
a9=A.i(B.a,n,a9,B.a,B.a)
r=A.j(n,[s,new A.k(i,q,r)])
return new A.k(i,A.i(B.a,n,a7,B.a,B.a),A.j(n,[a8,new A.k(i,a9,r)]))},
fK(){var s,r,q,p=null,o="solid",n="radius.md",m="color.panel",l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.J,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,B.b9,p,p,0,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,100),k=A.cs("button",B.h,A.ai(["type","button","aria-label","Close guide navigation","onClick",new A.mk(this),"style",B.b8],t.N,t.X)),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.aq(18,44,-28,new A.d("rgba(15, 23, 42, 0.22)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
j=A.a(p,p,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(71, 85, 105, 0.8)"),o),p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.aq(18,54,-24,new A.d("rgba(0, 0, 0, 0.58)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,j,p,p,p,new A.F("calc(100vh - 104px)"),p,p,p,p,p,p,B.cH,p,p,p,B.l,B.aj,new A.b(n,p),p,16,p,p,p,p,p,p,p,p,p,82,p,p,p,p,p,p,p,p,p)
s=A.a(p,B.d,p,p,p,p,p,p,new A.m(1,new A.d("rgba(30, 41, 59, 1)"),o),p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,B.m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.a(p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.w([A.H($.fQ(),B.a1,16),A.u("Guides",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,900,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],r)
q=A.a(p,B.d,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),o),p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,B.r,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p)
s=A.w([r,A.ay(A.H($.k7(),p,16),B.h,q,!1,!1,new A.ml(this),B.jY,B.x,B.z,B.C)],s)
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=J.M(this.b,"initialSection")
r=r==null?p:J.r(r)
r=A.r2(r==null?"introduction":r,!0)
q=A.i(B.a,p,q,B.a,B.a)
r=A.j(p,[r])
j=A.i(B.a,p,j,B.a,B.a)
r=A.j(p,[s,new A.k("div",q,r)])
return new A.k("div",A.i(B.a,p,l,B.a,B.a),A.j(p,[k,new A.k("div",j,r)]))},
eV(){var s,r,q,p=null,o="solid",n="radius.md",m="color.panel",l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.J,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,B.b9,p,p,0,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,100),k=A.cs("button",B.h,A.ai(["type","button","aria-label","Close API navigation","onClick",new A.me(this),"style",B.b8],t.N,t.X)),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.aq(18,44,-28,new A.d("rgba(15, 23, 42, 0.22)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
j=A.a(p,p,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(71, 85, 105, 0.8)"),o),p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.aq(18,54,-24,new A.d("rgba(0, 0, 0, 0.58)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,j,p,p,p,new A.F("calc(100vh - 104px)"),p,p,p,p,p,p,B.cH,p,p,p,B.l,B.aj,new A.b(n,p),p,16,p,p,p,p,p,p,p,p,p,82,p,p,p,p,p,p,p,p,p)
s=A.a(p,B.d,p,p,p,p,p,p,new A.m(1,new A.d("rgba(30, 41, 59, 1)"),o),p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,B.m,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.a(p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.w([A.H($.qC(),B.ar,16),A.u("API",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,900,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],r)
q=A.a(p,B.d,p,p,p,new A.b(m,p),p,new A.m(1,new A.d("rgba(51, 65, 85, 0.95)"),o),p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,B.r,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p)
s=A.w([r,A.ay(A.H($.k7(),p,16),B.h,q,!1,!1,new A.mf(this),B.jX,B.x,B.z,B.C)],s)
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.f(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=J.M(this.b,"initialSection")
r=r==null?p:J.r(r)
if(r==null)r="flint-class"
q=A.i(B.a,p,q,B.a,B.a)
r=A.j(p,[new A.ej(r,!0)])
j=A.i(B.a,p,j,B.a,B.a)
r=A.j(p,[s,new A.k("div",q,r)])
return new A.k("div",A.i(B.a,p,l,B.a,B.a),A.j(p,[k,new A.k("div",j,r)]))},
A(a,b){var s=null
return A.V(b,B.h,A.a(s,s,s,s,s,new A.b("color.panel",s),s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.F,s,s,s,s,s,s,s,s,s,s,14,800,s,s,s,s,A.a(s,s,s,s,s,new A.d("rgba(255, 255, 255, 0.07)"),s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.hn,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),a,s,B.j,s)}}
A.mn.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mm(s))},
$S:1}
A.mm.prototype={
$0(){var s=this.a
s.c=!1
s.d=!s.d},
$S:0}
A.mh.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mg(s))},
$S:1}
A.mg.prototype={
$0(){var s=this.a
s.d=s.c=!1
s.e=!s.e},
$S:0}
A.mp.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mo(s))},
$S:1}
A.mo.prototype={
$0(){var s=this.a
s.e=s.d=!1
s.c=!0},
$S:0}
A.mv.prototype={
$1(a){var s=null,r=t.c.a(a)===B.U,q=r?"Switch to light mode":"Switch to dark mode",p=A.ai(["aria-label",q,"title",q],t.N,t.X),o=this.a,n=o?B.n:38,m=o?B.c2:B.l,l=o?8:s
n=A.a(s,B.d,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,38,A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,B.r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,m,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,new A.aZ("all 160ms ease"),s,s,n,s,s,s,s)
m=[A.H(r?$.tO():$.tM(),s,17)]
if(o){o=r?"Light mode":"Dark mode"
m.push(A.u(o,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)))}return A.ay(s,m,n,!1,!1,new A.mu(),p,B.x,B.z,B.C)},
$S:78}
A.mu.prototype={
$1(a){var s,r,q,p
A.aa(a)
s=$.pO()
r=s.a
q=r.a===B.U?B.af:B.U
r.a=r.$ti.c.a(q)
r.bM()
p=s.c
if(s.b!=null&&p!=null&&p.length!==0)A.y(A.y(v.G.window).localStorage).setItem(p,q.c)
s.d8(q)
return q},
$S:1}
A.ms.prototype={
$1(a){var s=this.a
return s.q(new A.mr(s))},
$S:7}
A.mr.prototype={
$0(){return this.a.c=!1},
$S:0}
A.mt.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mq(s))},
$S:1}
A.mq.prototype={
$0(){return this.a.c=!1},
$S:0}
A.mk.prototype={
$1(a){var s=this.a
return s.q(new A.mj(s))},
$S:7}
A.mj.prototype={
$0(){return this.a.d=!1},
$S:0}
A.ml.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mi(s))},
$S:1}
A.mi.prototype={
$0(){return this.a.d=!1},
$S:0}
A.me.prototype={
$1(a){var s=this.a
return s.q(new A.md(s))},
$S:7}
A.md.prototype={
$0(){return this.a.e=!1},
$S:0}
A.mf.prototype={
$1(a){var s
A.aa(a)
s=this.a
return s.q(new A.mc(s))},
$S:1}
A.mc.prototype={
$0(){return this.a.e=!1},
$S:0}
A.ax.prototype={
E(){var s=null,r=$.ur(),q=this.c,p=this.d,o=A.i(B.a,s,B.fQ,B.a,B.a)
p=A.j(s,[p])
return new A.k("div",A.i(B.a,s,r,B.a,B.a),A.j(s,[new A.i7(q),new A.hr(q),new A.k("div",o,p),new A.hy()]))}}
A.pR.prototype={}
A.o2.prototype={}
A.fe.prototype={$ivt:1}
A.o3.prototype={
$1(a){return this.a.$1(A.y(a))},
$S:4};(function aliases(){var s=J.dE.prototype
s.eI=s.l
s=J.cA.prototype
s.eJ=s.l
s=A.A.prototype
s.eK=s.bR
s=A.o.prototype
s.d_=s.aG})();(function installTearOffs(){var s=hunkHelpers._static_0,r=hunkHelpers._static_1,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_0i,o=hunkHelpers.installStaticTearOff,n=hunkHelpers._instance_1u
s(A,"x0","vc",22)
r(A,"xr","vK",11)
r(A,"xs","vL",11)
r(A,"xt","vM",11)
s(A,"tf","xh",0)
r(A,"xz","wz",23)
q(A.Y.prototype,"gaw","a4",0)
r(A,"pj","y7",80)
p(A.h4.prototype,"gij","ik",0)
q(A.cC.prototype,"gaw","a4",0)
r(A,"qt","wJ",25)
o(A,"y4",1,null,["$2$unitlessNumber","$1"],["X",function(a){return A.X(a,!1)}],59,0)
o(A,"y5",1,null,["$2$unitlessNumber","$1"],["E",function(a){return A.E(a,!1)}],54,0)
q(A.eF.prototype,"gaw","a4",0)
q(A.eE.prototype,"gaw","a4",0)
n(A.cO.prototype,"gf1","b9",14)
n(A.cP.prototype,"gf6","ba",14)
q(A.cV.prototype,"gaw","a4",0)
q(A.cZ.prototype,"gaw","a4",0)
n(A.d1.prototype,"ghA","by",14)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.Q,null)
q(A.Q,[A.pT,J.dE,A.f0,J.cN,A.o,A.en,A.T,A.cw,A.ao,A.A,A.ne,A.bz,A.eP,A.d3,A.f4,A.f9,A.av,A.cD,A.bE,A.dM,A.ep,A.cp,A.ci,A.nP,A.mx,A.ew,A.fw,A.m4,A.eN,A.cY,A.eM,A.dG,A.fn,A.iY,A.f2,A.jH,A.bY,A.je,A.jT,A.fA,A.iZ,A.fx,A.b7,A.j1,A.d5,A.an,A.j_,A.iu,A.jF,A.fJ,A.fi,A.jm,A.fk,A.fm,A.fG,A.cS,A.hb,A.oo,A.oE,A.oB,A.cT,A.bw,A.o1,A.ia,A.f1,A.o4,A.bT,A.a1,A.aH,A.jK,A.no,A.aY,A.fH,A.nR,A.jz,A.kY,A.P,A.ex,A.mw,A.nn,A.bQ,A.c4,A.l1,A.li,A.cG,A.kv,A.l6,A.fb,A.nX,A.kU,A.J,A.my,A.h4,A.nL,A.ez,A.hv,A.ff,A.dV,A.em,A.kX,A.d,A.n,A.eC,A.lG,A.kw,A.bx,A.ht,A.L,A.iF,A.b,A.hw,A.lh,A.aN,A.cj,A.n9,A.f,A.F,A.aG,A.b3,A.m,A.aq,A.ba,A.d0,A.hx,A.kO,A.nd,A.hf,A.ib,A.nI,A.kx,A.l0,A.n8,A.iL,A.aZ,A.ka,A.kb,A.kd,A.kc,A.nt,A.nW,A.cl,A.lq,A.bS,A.lY,A.bJ,A.lg,A.jA,A.fa,A.jO,A.jc,A.fg,A.jd,A.pR,A.fe])
q(J.dE,[J.hL,J.eH,J.c,J.dH,J.dI,J.eI,J.cX])
q(J.c,[J.cA,J.a4,A.dO,A.eR,A.v,A.fU,A.el,A.bP,A.aj,A.j3,A.b8,A.hh,A.hj,A.j5,A.es,A.j7,A.hl,A.ja,A.bl,A.hG,A.jg,A.hV,A.hW,A.jn,A.jo,A.bo,A.jp,A.jr,A.bp,A.jv,A.jy,A.br,A.jB,A.bs,A.jE,A.b4,A.jM,A.iG,A.bu,A.jP,A.iJ,A.iR,A.jU,A.jW,A.jY,A.k_,A.k1,A.by,A.jk,A.bB,A.jt,A.ig,A.jI,A.bD,A.jR,A.fZ,A.j0])
q(J.cA,[J.ic,J.dY,J.cg])
r(J.hK,A.f0)
r(J.m0,J.a4)
q(J.eI,[J.eG,J.hM])
q(A.o,[A.e1,A.D,A.aP,A.aA,A.d2,A.d4,A.d8,A.iX,A.jG,A.e4])
r(A.cQ,A.e1)
r(A.fd,A.cQ)
q(A.T,[A.cR,A.bV,A.fh,A.ji])
q(A.cw,[A.h7,A.kR,A.h6,A.iA,A.pv,A.px,A.nZ,A.nY,A.oH,A.of,A.oi,A.nr,A.os,A.ok,A.m6,A.om,A.pE,A.pF,A.pp,A.l3,A.l4,A.ll,A.lm,A.ln,A.lo,A.lk,A.l8,A.l9,A.lb,A.pD,A.pA,A.pB,A.pK,A.pL,A.oQ,A.oR,A.oS,A.oT,A.oU,A.pl,A.pm,A.oK,A.oL,A.nl,A.nv,A.nw,A.na,A.pG,A.pH,A.l_,A.nx,A.ny,A.nu,A.nH,A.nJ,A.lZ,A.oZ,A.p_,A.p0,A.pb,A.pc,A.pd,A.pe,A.pf,A.pg,A.ph,A.pi,A.p1,A.p2,A.p3,A.p4,A.p5,A.p6,A.p7,A.p8,A.p9,A.pa,A.oW,A.oX,A.oY,A.lL,A.lM,A.kQ,A.lT,A.lU,A.lW,A.kA,A.kz,A.kH,A.kT,A.lA,A.lC,A.lD,A.lE,A.mV,A.n6,A.mE,A.mF,A.n_,A.mL,A.mM,A.mN,A.mO,A.mP,A.mQ,A.mR,A.mW,A.mC,A.mD,A.mY,A.mZ,A.mX,A.n7,A.nf,A.ng,A.nj,A.nh,A.ni,A.ks,A.kt,A.ku,A.mn,A.mh,A.mp,A.mv,A.mu,A.ms,A.mt,A.mk,A.ml,A.me,A.mf,A.o3])
q(A.h7,[A.kS,A.kV,A.m1,A.pw,A.oI,A.oV,A.og,A.oj,A.m5,A.m7,A.op,A.oz,A.nT,A.nS,A.oy,A.ox,A.m8,A.m9,A.ma,A.mb,A.nb,A.nc,A.np,A.nq,A.kl,A.km,A.l7,A.po,A.oG,A.kP,A.lt,A.ke,A.kB,A.kI,A.mU,A.nz])
q(A.ao,[A.hQ,A.cm,A.hN,A.iO,A.il,A.j9,A.eK,A.fX,A.bO,A.f8,A.iN,A.d_,A.h9])
r(A.dZ,A.A)
r(A.dt,A.dZ)
q(A.D,[A.as,A.ch,A.aO,A.af,A.d7,A.fl])
q(A.as,[A.f3,A.ad,A.jj])
r(A.cU,A.aP)
r(A.ev,A.d2)
q(A.bE,[A.db,A.e2,A.e3])
q(A.db,[A.ae,A.aB])
r(A.a_,A.e2)
r(A.c7,A.e3)
r(A.e5,A.dM)
r(A.c6,A.e5)
r(A.eq,A.c6)
r(A.a6,A.ep)
q(A.ci,[A.du,A.ft])
q(A.du,[A.dv,A.ce])
q(A.h6,[A.mA,A.o_,A.o0,A.ov,A.ou,A.lF,A.o6,A.ob,A.oa,A.o8,A.o7,A.oe,A.od,A.oc,A.oh,A.ns,A.or,A.oP,A.oD,A.oC,A.l5,A.l2,A.lp,A.lj,A.lf,A.la,A.le,A.lc,A.ld,A.nN,A.nO,A.nM,A.pn,A.nm,A.nk,A.ls,A.lr,A.lK,A.lX,A.lR,A.lS,A.lQ,A.lO,A.lP,A.lN,A.lV,A.kf,A.kg,A.kh,A.ki,A.kj,A.kC,A.kD,A.kE,A.kF,A.kG,A.kJ,A.kK,A.kL,A.kM,A.kN,A.ly,A.lz,A.lx,A.lv,A.lw,A.lu,A.lB,A.lH,A.lI,A.lJ,A.n0,A.n1,A.n2,A.n3,A.n4,A.n5,A.mK,A.mJ,A.mI,A.mH,A.mG,A.mS,A.mT,A.nA,A.nB,A.nC,A.nD,A.nE,A.kr,A.kq,A.kn,A.ko,A.kp,A.mm,A.mg,A.mo,A.mr,A.mq,A.mj,A.mi,A.md,A.mc])
r(A.eV,A.cm)
q(A.iA,[A.is,A.dn])
r(A.eJ,A.bV)
q(A.eR,[A.i_,A.aX])
q(A.aX,[A.fp,A.fr])
r(A.fq,A.fp)
r(A.eQ,A.fq)
r(A.fs,A.fr)
r(A.bA,A.fs)
q(A.eQ,[A.i0,A.i1])
q(A.bA,[A.i2,A.i3,A.i4,A.i5,A.i6,A.eS,A.eT])
r(A.fB,A.j9)
r(A.co,A.j1)
r(A.jx,A.fJ)
r(A.fj,A.fh)
r(A.d9,A.ft)
q(A.cS,[A.h3,A.hm,A.hO])
q(A.hb,[A.ky,A.m3,A.m2,A.nV,A.nU])
r(A.hP,A.eK)
r(A.on,A.oo)
r(A.iS,A.hm)
q(A.bO,[A.eY,A.hJ])
r(A.j4,A.fH)
q(A.v,[A.a2,A.hp,A.bq,A.fu,A.bt,A.b5,A.fy,A.iT,A.h0,A.cv])
q(A.a2,[A.I,A.c2])
r(A.K,A.I)
q(A.K,[A.fV,A.fW,A.hB,A.im,A.f6])
r(A.hc,A.bP)
r(A.dx,A.j3)
q(A.b8,[A.hd,A.he])
r(A.j6,A.j5)
r(A.er,A.j6)
r(A.j8,A.j7)
r(A.hk,A.j8)
r(A.bj,A.el)
r(A.jb,A.ja)
r(A.ho,A.jb)
r(A.jh,A.jg)
r(A.cW,A.jh)
r(A.hX,A.jn)
r(A.hY,A.jo)
r(A.jq,A.jp)
r(A.hZ,A.jq)
r(A.js,A.jr)
r(A.eU,A.js)
r(A.jw,A.jv)
r(A.ie,A.jw)
r(A.ik,A.jy)
r(A.fv,A.fu)
r(A.io,A.fv)
r(A.jC,A.jB)
r(A.ip,A.jC)
r(A.it,A.jE)
r(A.jN,A.jM)
r(A.iD,A.jN)
r(A.fz,A.fy)
r(A.iE,A.fz)
r(A.jQ,A.jP)
r(A.iI,A.jQ)
r(A.jV,A.jU)
r(A.j2,A.jV)
r(A.fc,A.es)
r(A.jX,A.jW)
r(A.jf,A.jX)
r(A.jZ,A.jY)
r(A.fo,A.jZ)
r(A.k0,A.k_)
r(A.jD,A.k0)
r(A.k2,A.k1)
r(A.jL,A.k2)
r(A.jl,A.jk)
r(A.hR,A.jl)
r(A.ju,A.jt)
r(A.i8,A.ju)
r(A.jJ,A.jI)
r(A.iv,A.jJ)
r(A.jS,A.jR)
r(A.iK,A.jS)
r(A.h_,A.j0)
r(A.i9,A.cv)
q(A.o1,[A.e_,A.cy,A.eA,A.nK,A.kW,A.c1,A.bR,A.cx,A.hs,A.cM,A.dJ,A.dP,A.nG,A.dW,A.eo,A.dq,A.m_])
q(A.J,[A.Y,A.cz,A.ey,A.a7,A.dA])
q(A.Y,[A.ir,A.h5,A.hg,A.iM,A.dr,A.dw,A.dz,A.hr,A.i7])
q(A.ir,[A.cC,A.eF,A.ej,A.hE,A.hF,A.hq,A.eE,A.id,A.iV,A.dj,A.dk,A.cO,A.dl,A.dm,A.cP,A.ds,A.dB,A.cV,A.dC,A.dD,A.cZ,A.dQ,A.dT,A.dU,A.d1,A.dX,A.e0,A.h1,A.hy,A.ax])
r(A.iU,A.em)
r(A.hU,A.iU)
q(A.a7,[A.dp,A.iq,A.hz,A.iB,A.iC,A.hH,A.hC,A.iW,A.h8,A.k,A.hI,A.hS,A.ij])
r(A.o2,A.iu)
s(A.dZ,A.cD)
s(A.fp,A.A)
s(A.fq,A.av)
s(A.fr,A.A)
s(A.fs,A.av)
s(A.e5,A.fG)
s(A.j3,A.kY)
s(A.j5,A.A)
s(A.j6,A.P)
s(A.j7,A.A)
s(A.j8,A.P)
s(A.ja,A.A)
s(A.jb,A.P)
s(A.jg,A.A)
s(A.jh,A.P)
s(A.jn,A.T)
s(A.jo,A.T)
s(A.jp,A.A)
s(A.jq,A.P)
s(A.jr,A.A)
s(A.js,A.P)
s(A.jv,A.A)
s(A.jw,A.P)
s(A.jy,A.T)
s(A.fu,A.A)
s(A.fv,A.P)
s(A.jB,A.A)
s(A.jC,A.P)
s(A.jE,A.T)
s(A.jM,A.A)
s(A.jN,A.P)
s(A.fy,A.A)
s(A.fz,A.P)
s(A.jP,A.A)
s(A.jQ,A.P)
s(A.jU,A.A)
s(A.jV,A.P)
s(A.jW,A.A)
s(A.jX,A.P)
s(A.jY,A.A)
s(A.jZ,A.P)
s(A.k_,A.A)
s(A.k0,A.P)
s(A.k1,A.A)
s(A.k2,A.P)
s(A.jk,A.A)
s(A.jl,A.P)
s(A.jt,A.A)
s(A.ju,A.P)
s(A.jI,A.A)
s(A.jJ,A.P)
s(A.jR,A.A)
s(A.jS,A.P)
s(A.j0,A.T)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{x:"int",ac:"double",aT:"num",h:"String",ab:"bool",aH:"Null",C:"List",Q:"Object",z:"Map",B:"JSObject"},mangledNames:{},types:["~()","~(Q)","~(h,@)","aH(@)","~(B)","z<h,@>(z<@,@>)","a1<h,@>(@,@)","~(@)","ab(h)","ab(a1<h,Q?>)","h(a1<h,Q?>)","~(~())","aH()","aH(B)","bk<~>(Q)","ab(z<h,@>)","~(Q?,Q?)","h(@)","~(h,h)","@(h)","bk<~>()","~(iH)","x()","@(@)","aH(Q,cB)","h(Q)","@()","C<z<h,@>>(C<z<h,@>>?)","h(aN)","h()","aH(@,cB)","~(x,@)","ab(h?)","h(h?)","h(a1<h,n>)","h(a1<bR,n>)","h(a1<c1,n>)","bk<~>(ez,x)","C<bU>()","0&(h,x?)","h(ba)","h(aZ)","Q?(Q?)","cl()","~(@,@)","ab(h,C<h>)","a7(bJ)","dD(z<h,@>)","dB(z<h,@>)","e0(z<h,@>)","dr(z<h,@>)","ds(z<h,@>)","dj(z<h,@>)","dC(z<h,@>)","h(Q?{unitlessNumber:ab})","dz(z<h,@>)","cV(z<h,@>)","dk(z<h,@>)","dQ(z<h,@>)","h(Q{unitlessNumber:ab})","dm(z<h,@>)","dl(z<h,@>)","cP(z<h,@>)","cZ(z<h,@>)","dU(z<h,@>)","dT(z<h,@>)","d1(z<h,@>)","dw(z<h,@>)","ab(+(h,h,h))","h(h)","ab(+(h,h))","J(+(h,h,h,h))","aH(~())","~(h,h?)","Q?(C<z<h,@>>?)","@(@,h)","~(h,Q?)","0&()","dp(bR)","z<h,h>(z<h,h>,h)","J(Q?)","cO(z<h,@>)","dX(z<h,@>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.ae&&a.b(c.a)&&b.b(c.b),"2;body,title":(a,b)=>c=>c instanceof A.aB&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.a_&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.c7&&A.xW(a,b.a)}}
A.w3(v.typeUniverse,JSON.parse('{"ic":"cA","dY":"cA","cg":"cA","yc":"c","ys":"c","yr":"c","ye":"cv","yd":"v","zb":"v","zd":"v","z8":"I","yf":"K","z9":"K","yt":"a2","yq":"a2","zs":"b5","yi":"c2","zh":"c2","yu":"cW","yj":"aj","yl":"bP","yn":"b4","yo":"b8","yk":"b8","ym":"b8","za":"dO","hL":{"ab":[],"am":[]},"eH":{"aH":[],"am":[]},"c":{"B":[]},"cA":{"B":[]},"a4":{"C":["1"],"D":["1"],"B":[],"o":["1"]},"hK":{"f0":[]},"m0":{"a4":["1"],"C":["1"],"D":["1"],"B":[],"o":["1"]},"cN":{"ah":["1"]},"eI":{"ac":[],"aT":[]},"eG":{"ac":[],"x":[],"aT":[],"am":[]},"hM":{"ac":[],"aT":[],"am":[]},"cX":{"h":[],"mz":[],"am":[]},"e1":{"o":["2"]},"en":{"ah":["2"]},"cQ":{"e1":["1","2"],"o":["2"],"o.E":"2"},"fd":{"cQ":["1","2"],"e1":["1","2"],"D":["2"],"o":["2"],"o.E":"2"},"cR":{"T":["3","4"],"z":["3","4"],"T.K":"3","T.V":"4"},"hQ":{"ao":[]},"dt":{"A":["x"],"cD":["x"],"C":["x"],"D":["x"],"o":["x"],"A.E":"x","cD.E":"x"},"D":{"o":["1"]},"as":{"D":["1"],"o":["1"]},"f3":{"as":["1"],"D":["1"],"o":["1"],"o.E":"1","as.E":"1"},"bz":{"ah":["1"]},"aP":{"o":["2"],"o.E":"2"},"cU":{"aP":["1","2"],"D":["2"],"o":["2"],"o.E":"2"},"eP":{"ah":["2"]},"ad":{"as":["2"],"D":["2"],"o":["2"],"o.E":"2","as.E":"2"},"aA":{"o":["1"],"o.E":"1"},"d3":{"ah":["1"]},"d2":{"o":["1"],"o.E":"1"},"ev":{"d2":["1"],"D":["1"],"o":["1"],"o.E":"1"},"f4":{"ah":["1"]},"d4":{"o":["1"],"o.E":"1"},"f9":{"ah":["1"]},"dZ":{"A":["1"],"cD":["1"],"C":["1"],"D":["1"],"o":["1"]},"ae":{"db":[],"bE":[]},"aB":{"db":[],"bE":[]},"a_":{"e2":[],"bE":[]},"c7":{"e3":[],"bE":[]},"eq":{"c6":["1","2"],"e5":["1","2"],"dM":["1","2"],"fG":["1","2"],"z":["1","2"]},"ep":{"z":["1","2"]},"a6":{"ep":["1","2"],"z":["1","2"]},"d8":{"o":["1"],"o.E":"1"},"cp":{"ah":["1"]},"du":{"ci":["1"],"dS":["1"],"D":["1"],"o":["1"]},"dv":{"du":["1"],"ci":["1"],"dS":["1"],"D":["1"],"o":["1"]},"ce":{"du":["1"],"ci":["1"],"dS":["1"],"D":["1"],"o":["1"]},"eV":{"cm":[],"ao":[]},"hN":{"ao":[]},"iO":{"ao":[]},"fw":{"cB":[]},"cw":{"bU":[]},"h6":{"bU":[]},"h7":{"bU":[]},"iA":{"bU":[]},"is":{"bU":[]},"dn":{"bU":[]},"il":{"ao":[]},"bV":{"T":["1","2"],"pX":["1","2"],"z":["1","2"],"T.K":"1","T.V":"2"},"ch":{"D":["1"],"o":["1"],"o.E":"1"},"eN":{"ah":["1"]},"aO":{"D":["1"],"o":["1"],"o.E":"1"},"cY":{"ah":["1"]},"af":{"D":["a1<1,2>"],"o":["a1<1,2>"],"o.E":"a1<1,2>"},"eM":{"ah":["a1<1,2>"]},"eJ":{"bV":["1","2"],"T":["1","2"],"pX":["1","2"],"z":["1","2"],"T.K":"1","T.V":"2"},"db":{"bE":[]},"e2":{"bE":[]},"e3":{"bE":[]},"dG":{"vp":[],"mz":[]},"fn":{"f_":[],"dN":[]},"iX":{"o":["f_"],"o.E":"f_"},"iY":{"ah":["f_"]},"f2":{"dN":[]},"jG":{"o":["dN"],"o.E":"dN"},"jH":{"ah":["dN"]},"dO":{"B":[],"am":[]},"eR":{"B":[]},"i_":{"B":[],"am":[]},"aX":{"a3":["1"],"B":[]},"eQ":{"A":["ac"],"aX":["ac"],"C":["ac"],"a3":["ac"],"D":["ac"],"B":[],"o":["ac"],"av":["ac"]},"bA":{"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"]},"i0":{"A":["ac"],"aX":["ac"],"C":["ac"],"a3":["ac"],"D":["ac"],"B":[],"o":["ac"],"av":["ac"],"am":[],"A.E":"ac","av.E":"ac"},"i1":{"A":["ac"],"aX":["ac"],"C":["ac"],"a3":["ac"],"D":["ac"],"B":[],"o":["ac"],"av":["ac"],"am":[],"A.E":"ac","av.E":"ac"},"i2":{"bA":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"i3":{"bA":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"i4":{"bA":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"i5":{"bA":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"i6":{"bA":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"eS":{"bA":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"eT":{"bA":[],"q3":[],"A":["x"],"aX":["x"],"C":["x"],"a3":["x"],"D":["x"],"B":[],"o":["x"],"av":["x"],"am":[],"A.E":"x","av.E":"x"},"j9":{"ao":[]},"fB":{"cm":[],"ao":[]},"fA":{"iH":[]},"fx":{"ah":["1"]},"e4":{"o":["1"],"o.E":"1"},"b7":{"ao":[]},"co":{"j1":["1"]},"an":{"bk":["1"]},"fJ":{"rx":[]},"jx":{"fJ":[],"rx":[]},"fh":{"T":["1","2"],"z":["1","2"]},"fj":{"fh":["1","2"],"T":["1","2"],"z":["1","2"],"T.K":"1","T.V":"2"},"d7":{"D":["1"],"o":["1"],"o.E":"1"},"fi":{"ah":["1"]},"d9":{"ci":["1"],"rc":["1"],"dS":["1"],"D":["1"],"o":["1"]},"fk":{"ah":["1"]},"A":{"C":["1"],"D":["1"],"o":["1"]},"T":{"z":["1","2"]},"fl":{"D":["2"],"o":["2"],"o.E":"2"},"fm":{"ah":["2"]},"dM":{"z":["1","2"]},"c6":{"e5":["1","2"],"dM":["1","2"],"fG":["1","2"],"z":["1","2"]},"ci":{"dS":["1"],"D":["1"],"o":["1"]},"ft":{"ci":["1"],"dS":["1"],"D":["1"],"o":["1"]},"ji":{"T":["h","@"],"z":["h","@"],"T.K":"h","T.V":"@"},"jj":{"as":["h"],"D":["h"],"o":["h"],"o.E":"h","as.E":"h"},"h3":{"cS":["C<x>","h"]},"hm":{"cS":["h","C<x>"]},"eK":{"ao":[]},"hP":{"ao":[]},"hO":{"cS":["Q?","h"]},"iS":{"cS":["h","C<x>"]},"ac":{"aT":[]},"x":{"aT":[]},"C":{"D":["1"],"o":["1"]},"f_":{"dN":[]},"h":{"mz":[]},"fX":{"ao":[]},"cm":{"ao":[]},"bO":{"ao":[]},"eY":{"ao":[]},"hJ":{"ao":[]},"f8":{"ao":[]},"iN":{"ao":[]},"d_":{"ao":[]},"h9":{"ao":[]},"ia":{"ao":[]},"f1":{"ao":[]},"jK":{"cB":[]},"aY":{"vu":[]},"fH":{"iP":[]},"jz":{"iP":[]},"j4":{"iP":[]},"aj":{"B":[]},"bj":{"B":[]},"bl":{"B":[]},"bo":{"B":[]},"a2":{"B":[]},"bp":{"B":[]},"bq":{"B":[]},"br":{"B":[]},"bs":{"B":[]},"b4":{"B":[]},"bt":{"B":[]},"b5":{"B":[]},"bu":{"B":[]},"K":{"a2":[],"B":[]},"fU":{"B":[]},"fV":{"a2":[],"B":[]},"fW":{"a2":[],"B":[]},"el":{"B":[]},"c2":{"a2":[],"B":[]},"hc":{"B":[]},"dx":{"B":[]},"b8":{"B":[]},"bP":{"B":[]},"hd":{"B":[]},"he":{"B":[]},"hh":{"B":[]},"hj":{"B":[]},"er":{"A":["bW<aT>"],"P":["bW<aT>"],"C":["bW<aT>"],"a3":["bW<aT>"],"D":["bW<aT>"],"B":[],"o":["bW<aT>"],"P.E":"bW<aT>","A.E":"bW<aT>"},"es":{"bW":["aT"],"B":[]},"hk":{"A":["h"],"P":["h"],"C":["h"],"a3":["h"],"D":["h"],"B":[],"o":["h"],"P.E":"h","A.E":"h"},"hl":{"B":[]},"I":{"a2":[],"B":[]},"v":{"B":[]},"ho":{"A":["bj"],"P":["bj"],"C":["bj"],"a3":["bj"],"D":["bj"],"B":[],"o":["bj"],"P.E":"bj","A.E":"bj"},"hp":{"B":[]},"hB":{"a2":[],"B":[]},"hG":{"B":[]},"cW":{"A":["a2"],"P":["a2"],"C":["a2"],"a3":["a2"],"D":["a2"],"B":[],"o":["a2"],"P.E":"a2","A.E":"a2"},"hV":{"B":[]},"hW":{"B":[]},"hX":{"T":["h","@"],"B":[],"z":["h","@"],"T.K":"h","T.V":"@"},"hY":{"T":["h","@"],"B":[],"z":["h","@"],"T.K":"h","T.V":"@"},"hZ":{"A":["bo"],"P":["bo"],"C":["bo"],"a3":["bo"],"D":["bo"],"B":[],"o":["bo"],"P.E":"bo","A.E":"bo"},"eU":{"A":["a2"],"P":["a2"],"C":["a2"],"a3":["a2"],"D":["a2"],"B":[],"o":["a2"],"P.E":"a2","A.E":"a2"},"ie":{"A":["bp"],"P":["bp"],"C":["bp"],"a3":["bp"],"D":["bp"],"B":[],"o":["bp"],"P.E":"bp","A.E":"bp"},"ik":{"T":["h","@"],"B":[],"z":["h","@"],"T.K":"h","T.V":"@"},"im":{"a2":[],"B":[]},"io":{"A":["bq"],"P":["bq"],"C":["bq"],"a3":["bq"],"D":["bq"],"B":[],"o":["bq"],"P.E":"bq","A.E":"bq"},"ip":{"A":["br"],"P":["br"],"C":["br"],"a3":["br"],"D":["br"],"B":[],"o":["br"],"P.E":"br","A.E":"br"},"it":{"T":["h","h"],"B":[],"z":["h","h"],"T.K":"h","T.V":"h"},"f6":{"a2":[],"B":[]},"iD":{"A":["b5"],"P":["b5"],"C":["b5"],"a3":["b5"],"D":["b5"],"B":[],"o":["b5"],"P.E":"b5","A.E":"b5"},"iE":{"A":["bt"],"P":["bt"],"C":["bt"],"a3":["bt"],"D":["bt"],"B":[],"o":["bt"],"P.E":"bt","A.E":"bt"},"iG":{"B":[]},"iI":{"A":["bu"],"P":["bu"],"C":["bu"],"a3":["bu"],"D":["bu"],"B":[],"o":["bu"],"P.E":"bu","A.E":"bu"},"iJ":{"B":[]},"iR":{"B":[]},"iT":{"B":[]},"j2":{"A":["aj"],"P":["aj"],"C":["aj"],"a3":["aj"],"D":["aj"],"B":[],"o":["aj"],"P.E":"aj","A.E":"aj"},"fc":{"bW":["aT"],"B":[]},"jf":{"A":["bl?"],"P":["bl?"],"C":["bl?"],"a3":["bl?"],"D":["bl?"],"B":[],"o":["bl?"],"P.E":"bl?","A.E":"bl?"},"fo":{"A":["a2"],"P":["a2"],"C":["a2"],"a3":["a2"],"D":["a2"],"B":[],"o":["a2"],"P.E":"a2","A.E":"a2"},"jD":{"A":["bs"],"P":["bs"],"C":["bs"],"a3":["bs"],"D":["bs"],"B":[],"o":["bs"],"P.E":"bs","A.E":"bs"},"jL":{"A":["b4"],"P":["b4"],"C":["b4"],"a3":["b4"],"D":["b4"],"B":[],"o":["b4"],"P.E":"b4","A.E":"b4"},"ex":{"ah":["1"]},"by":{"B":[]},"bB":{"B":[]},"bD":{"B":[]},"hR":{"A":["by"],"P":["by"],"C":["by"],"D":["by"],"B":[],"o":["by"],"P.E":"by","A.E":"by"},"i8":{"A":["bB"],"P":["bB"],"C":["bB"],"D":["bB"],"B":[],"o":["bB"],"P.E":"bB","A.E":"bB"},"ig":{"B":[]},"iv":{"A":["h"],"P":["h"],"C":["h"],"D":["h"],"B":[],"o":["h"],"P.E":"h","A.E":"h"},"iK":{"A":["bD"],"P":["bD"],"C":["bD"],"D":["bD"],"B":[],"o":["bD"],"P.E":"bD","A.E":"bD"},"fZ":{"B":[]},"h_":{"T":["h","@"],"B":[],"z":["h","@"],"T.K":"h","T.V":"@"},"h0":{"B":[]},"cv":{"B":[]},"i9":{"B":[]},"Y":{"J":[]},"ir":{"Y":[],"J":[]},"a7":{"J":[]},"cz":{"J":[]},"ey":{"J":[]},"dA":{"J":[]},"cC":{"Y":[],"J":[]},"hU":{"em":[]},"iU":{"em":[]},"dp":{"J":[]},"eF":{"Y":[],"J":[]},"iq":{"J":[]},"hz":{"J":[]},"iB":{"J":[]},"iC":{"J":[]},"hH":{"J":[]},"hC":{"J":[]},"iW":{"J":[]},"h8":{"J":[]},"k":{"J":[]},"hI":{"J":[]},"hS":{"J":[]},"ij":{"J":[]},"ej":{"Y":[],"J":[]},"hE":{"Y":[],"J":[]},"hF":{"Y":[],"J":[]},"h5":{"Y":[],"J":[]},"hg":{"Y":[],"J":[]},"hq":{"Y":[],"J":[]},"eE":{"Y":[],"J":[]},"id":{"Y":[],"J":[]},"iM":{"Y":[],"J":[]},"iV":{"Y":[],"J":[]},"dj":{"Y":[],"J":[]},"dk":{"Y":[],"J":[]},"cO":{"Y":[],"J":[]},"dl":{"Y":[],"J":[]},"dm":{"Y":[],"J":[]},"cP":{"Y":[],"J":[]},"dr":{"Y":[],"J":[]},"ds":{"Y":[],"J":[]},"dw":{"Y":[],"J":[]},"dz":{"Y":[],"J":[]},"dB":{"Y":[],"J":[]},"cV":{"Y":[],"J":[]},"dC":{"Y":[],"J":[]},"dD":{"Y":[],"J":[]},"cZ":{"Y":[],"J":[]},"dQ":{"Y":[],"J":[]},"dT":{"Y":[],"J":[]},"dU":{"Y":[],"J":[]},"d1":{"Y":[],"J":[]},"dX":{"Y":[],"J":[]},"e0":{"Y":[],"J":[]},"h1":{"Y":[],"J":[]},"hr":{"Y":[],"J":[]},"hy":{"Y":[],"J":[]},"i7":{"Y":[],"J":[]},"ax":{"Y":[],"J":[]},"o2":{"iu":["1"]},"fe":{"vt":["1"]},"v5":{"C":["x"],"D":["x"],"o":["x"]},"q3":{"C":["x"],"D":["x"],"o":["x"]},"vE":{"C":["x"],"D":["x"],"o":["x"]},"v3":{"C":["x"],"D":["x"],"o":["x"]},"vC":{"C":["x"],"D":["x"],"o":["x"]},"v4":{"C":["x"],"D":["x"],"o":["x"]},"vD":{"C":["x"],"D":["x"],"o":["x"]},"v0":{"C":["ac"],"D":["ac"],"o":["ac"]},"v1":{"C":["ac"],"D":["ac"],"o":["ac"]}}'))
A.w2(v.typeUniverse,JSON.parse('{"dZ":1,"aX":1,"ft":1,"hb":2}'))
var u={f:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.aD
return{n:s("b7"),gY:s("c1"),e8:s("dt"),bU:s("a6<h,Q>"),w:s("a6<h,h>"),J:s("a6<h,Q?>"),fe:s("dv<h>"),g5:s("aj"),x:s("n"),W:s("D<@>"),C:s("ao"),c8:s("bj"),dH:s("Y"),f0:s("J"),cv:s("J(+(h,h,h,h))"),eh:s("J(Q?)"),c:s("bR"),Z:s("bU"),R:s("ce<x>"),fd:s("bJ"),U:s("o<@>"),hb:s("o<x>"),Y:s("a4<J>"),g_:s("a4<bU>"),l:s("a4<bJ>"),cB:s("a4<aN>"),c7:s("a4<z<h,@>>"),Q:s("a4<z<@,@>>"),G:s("a4<Q>"),O:s("a4<+(h,h)>"),s:s("a4<h>"),o:s("a4<cj>"),fS:s("a4<aZ>"),q:s("a4<@>"),t:s("a4<x>"),d4:s("a4<h?>"),r:s("a4<~()>"),T:s("eH"),m:s("B"),cj:s("cg"),aU:s("a3<@>"),fo:s("aN"),bG:s("by"),aw:s("C<J>"),gz:s("C<bU>"),p:s("C<z<h,@>>"),gk:s("C<+(h,h)>"),a:s("C<h>"),dX:s("C<fa>"),db:s("C<fg>"),j:s("C<@>"),B:s("C<x>"),ah:s("a1<c1,n>"),ce:s("a1<bR,n>"),dv:s("a1<h,n>"),I:s("a1<h,@>"),d:s("a1<h,Q?>"),V:s("z<h,h>"),A:s("z<h,fb>"),P:s("z<h,@>"),f:s("z<@,@>"),L:s("z<h,Q?>"),bZ:s("aP<h,h>"),en:s("ad<Q,h>"),dY:s("ad<+(h,h,h,h),J>"),ct:s("ad<Q?,J>"),cI:s("bo"),eB:s("bA"),D:s("a2"),b:s("aH"),ck:s("bB"),K:s("Q"),he:s("bp"),gT:s("zc"),bQ:s("+()"),fz:s("+(h,h)"),bl:s("+(h,h,h)"),g4:s("+(h,h,C<+(h,h)>?)"),g9:s("+(h,h,h,h)"),at:s("bW<@>"),eU:s("bW<aT>"),cz:s("f_"),cq:s("dS<h>"),fY:s("bq"),dP:s("br"),gf:s("bs"),k:s("cB"),ch:s("cC<bR>"),fp:s("cC<C<z<h,@>>?>"),aN:s("dV<C<z<h,@>>?>"),N:s("h"),f7:s("h(Q)"),dG:s("h(h)"),gn:s("b4"),dl:s("ba"),bc:s("aZ"),bO:s("cl"),a0:s("bt"),do:s("b5"),E:s("iH"),aK:s("bu"),cM:s("bD"),dm:s("am"),eK:s("cm"),ak:s("dY"),dw:s("c6<h,h>"),dD:s("iP"),bv:s("aA<+(h,h,h)>"),cc:s("aA<h>"),cp:s("co<ff>"),e:s("fb"),bJ:s("an<ff>"),_:s("an<@>"),fJ:s("an<x>"),hg:s("fj<Q?,Q?>"),y:s("ab"),al:s("ab(Q)"),dt:s("ab(+(h,h,h))"),bB:s("ab(h)"),i:s("ac"),z:s("@"),fO:s("@()"),bI:s("@(Q)"),ag:s("@(Q,cB)"),g6:s("@(@)"),S:s("x"),bp:s("Y(z<h,@>)?"),eH:s("bk<aH>?"),g7:s("bl?"),bX:s("B?"),gw:s("C<z<h,@>>?"),bM:s("C<@>?"),v:s("z<h,h>?"),h:s("z<h,@>?"),fF:s("z<@,@>?"),X:s("Q?"),dk:s("h?"),F:s("d5<@,@>?"),g:s("jm?"),fQ:s("ab?"),cD:s("ac?"),h6:s("x?"),cg:s("aT?"),bn:s("~()?"),an:s("~(B)?"),di:s("aT"),H:s("~"),M:s("~()"),eA:s("~(h,h)"),u:s("~(h,@)"),fM:s("~(iH)"),aT:s("~(C<z<h,@>>?)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.j5=J.dE.prototype
B.f=J.a4.prototype
B.t=J.eG.prototype
B.Y=J.eI.prototype
B.b=J.cX.prototype
B.j6=J.cg.prototype
B.j7=J.c.prototype
B.cA=A.eT.prototype
B.cI=J.ic.prototype
B.m8=A.f6.prototype
B.ba=J.dY.prototype
B.cL=new A.cM("flex-end",2,"end")
B.d=new A.cM("center",1,"center")
B.I=new A.cM("flex-start",0,"start")
B.cN=new A.cM("stretch",3,"stretch")
B.v=new A.d("transparent")
B.bb=new A.m(0,B.v,"none")
B.bc=new A.m(1,B.v,"solid")
B.dG=new A.d("rgba(5, 150, 105, 0.28)")
B.cP=new A.m(1,B.dG,"solid")
B.dw=new A.d("rgba(0, 0, 0, 0)")
B.cS=new A.m(0,B.dw,"solid")
B.dW=new A.d("rgba(30, 41, 59, 0.95)")
B.bd=new A.m(1,B.dW,"solid")
B.et=new A.d("rgba(30, 41, 59, 1)")
B.cY=new A.m(1,B.et,"solid")
B.d3=new A.c1(1024,2,"lg")
B.d4=new A.c1(1280,3,"xl")
B.d5=new A.c1(640,0,"sm")
B.d6=new A.c1(768,1,"md")
B.a0=new A.dq(0,"solid")
B.be=new A.dq(1,"soft")
B.C=new A.dq(2,"outline")
B.D=new A.dq(3,"ghost")
B.d7=new A.ka()
B.d8=new A.kb()
B.d9=new A.kc()
B.da=new A.kd()
B.an=new A.hU()
B.q=new A.kv()
B.am=new A.kx()
B.mq=new A.ky()
B.db=new A.h3()
B.dc=new A.kO()
B.bf=new A.h4()
B.dd=new A.kX()
B.a5=new A.ht()
B.i=new A.l0()
B.de=new A.lG()
B.bg=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.df=function() {
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
B.dk=function(getTagFallback) {
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
B.dg=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.dj=function(hooks) {
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
B.di=function(hooks) {
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
B.dh=function(hooks) {
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
B.bh=function(hooks) { return hooks; }

B.E=new A.hO()
B.dl=new A.ia()
B.dn=new A.nd()
B.V=new A.ne()
B.aJ=new A.ce([200,201,202,204],t.R)
B.mv=new A.ce([400,401,402,403,404,405,408,409,410,422,429,500,501,502,503,504],t.R)
B.ms=new A.ce([301,302,303,304,307,308],t.R)
B.mu=new A.ce([400,401,402,403,404,405,408,409,410,422,429],t.R)
B.mt=new A.ce([500,501,502,503,504],t.R)
B.dp=new A.nn()
B.bi=new A.nI()
B.o=new A.nL()
B.W=new A.iS()
B.dq=new A.nV()
B.dr=new A.nW()
B.A=new A.jx()
B.ao=new A.jK()
B.ds=new A.d("rgba(234, 179, 8, 0.1)")
B.N=new A.d("#34d399")
B.bj=new A.d("rgba(5, 7, 13, 0.94)")
B.dx=new A.d("#c4b5fd")
B.ap=new A.d("#f97316")
B.dA=new A.d("rgba(15, 23, 42, 0.68)")
B.aq=new A.d("rgba(15, 23, 42, 0.72)")
B.bk=new A.d("rgba(15, 23, 42, 0.75)")
B.dF=new A.d("rgba(5, 150, 105, 0.08)")
B.a1=new A.d("#a7f3d0")
B.ar=new A.d("#bae6fd")
B.aL=new A.d("#f59e0b")
B.dL=new A.d("rgba(251, 191, 36, 0.08)")
B.dK=new A.d("rgba(251, 191, 36, 0.32)")
B.bl=new A.d("#ef4444")
B.w=new A.d("#ffffff")
B.dM=new A.d("rgba(255, 255, 255, 0.05)")
B.dN=new A.d("rgba(255, 255, 255, 0.15)")
B.aM=new A.d("#a78bfa")
B.dT=new A.d("linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)")
B.R=new A.d("#94a3b8")
B.aN=new A.d("rgba(52, 211, 153, 0.1)")
B.bo=new A.d("rgba(52, 211, 153, 0.3)")
B.dY=new A.d("#67e8f9")
B.e0=new A.d("rgba(249, 115, 22, 0.12)")
B.e_=new A.d("rgba(249, 115, 22, 0.18)")
B.e1=new A.d("rgba(249, 115, 22, 0.32)")
B.bq=new A.d("rgba(56, 189, 248, 0.2)")
B.br=new A.d("rgba(56, 189, 248, 0.3)")
B.e7=new A.d("#6ee7b7")
B.e8=new A.d("rgba(15, 23, 42, 0.6)")
B.G=new A.d("#38bdf8")
B.as=new A.d("#fbbf24")
B.a2=new A.d("#7dd3fc")
B.at=new A.d("#64748b")
B.O=new A.d("#10b981")
B.bu=new A.d("rgba(56, 189, 248, 0.12)")
B.ef=new A.d("rgba(56, 189, 248, 0.15)")
B.eg=new A.d("rgba(56, 189, 248, 0.35)")
B.bv=new A.d("#fca5a5")
B.eo=new A.d("linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)")
B.bx=new A.d("rgba(255, 255, 255, 0.08)")
B.au=new A.d("#050b14")
B.aP=new A.d("rgba(52, 211, 153, 0.12)")
B.ew=new A.d("rgba(52, 211, 153, 0.36)")
B.bz=new A.eo(0,"xs")
B.S=new A.eo(1,"sm")
B.x=new A.eo(2,"md")
B.eC=new A.kW(0,"lax")
B.bA=new A.hf("not-allowed")
B.eD=new A.hf("pointer")
B.bB=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(0)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eF=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eE=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eG=new A.n(null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.e=new A.cx("grid",5,"grid")
B.eH=new A.n(null,null,null,null,null,null,null,null,B.e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eJ=new A.n(null,null,null,null,null,null,null,null,null,14,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i9=new A.f(96,56,96,56)
B.eK=new A.n(B.i9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.M=new A.hx('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace')
B.bC=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.M,11,null,null,null,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c=new A.cx("flex",3,"flex")
B.bD=new A.n(null,null,null,null,null,null,null,null,B.c,4,B.d,null,null,null,null,B.i,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ae=new A.f(null,null,4,null)
B.eL=new A.n(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c1=new A.cx("inline-block",2,"inlineBlock")
B.bp=new A.d("#475569")
B.bE=new A.n(null,null,22,null,null,null,null,null,B.c1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,B.bp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.p=new A.F("100%")
B.r=new A.dJ("center",1,"center")
B.aw=new A.n(null,null,B.p,null,null,null,null,null,B.c,null,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bt=new A.d("rgba(14, 165, 233, 0.1)")
B.du=new A.d("rgba(125, 211, 252, 0.28)")
B.cO=new A.m(1,B.du,"solid")
B.eM=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ar,null,null,null,null,null,null,null,null,null,B.bt,null,B.cO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.l=new A.f(0,0,0,0)
B.eN=new A.n(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,22,800,null,null,B.w,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aC=new A.f(2,2,2,2)
B.eO=new A.n(B.aC,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.N,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dm=new A.n8()
B.eP=new A.n(null,null,null,null,null,null,96,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dm,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bF=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hE=new A.f(32,null,null,null)
B.eQ=new A.n(null,B.hE,null,null,null,null,null,null,B.e,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hH=new A.f(36,null,null,null)
B.eR=new A.n(null,B.hH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aE=new A.f(64,20,64,20)
B.hW=new A.f(64,36,64,36)
B.fu=new A.n(B.hW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i2=new A.f(72,56,72,56)
B.fL=new A.n(B.i2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i7=new A.f(80,80,80,80)
B.fd=new A.n(B.i7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ax=new A.n(B.aE,null,B.p,null,null,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fu,B.fL,B.fd)
B.dJ=new A.d("rgba(148, 163, 184, 0.16)")
B.cZ=new A.m(1,B.dJ,"solid")
B.eS=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bG=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,900,null,null,B.w,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i1=new A.f(72,36,72,36)
B.aQ=new A.n(B.i1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eT=new A.n(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.ap,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bH=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.M,14,900,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hO=new A.f(48,20,48,20)
B.d_=new A.m(1,B.bx,"solid")
B.hT=new A.f(56,36,56,36)
B.bL=new A.n(B.hT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hX=new A.f(64,56,64,56)
B.bI=new A.n(B.hX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i3=new A.f(72,80,72,80)
B.bQ=new A.n(B.i3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eU=new A.n(B.hO,null,B.p,null,null,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.d_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bL,B.bI,B.bQ)
B.dt=new A.d("rgba(8, 47, 73, 0.25)")
B.ex=new A.d("rgba(52, 211, 153, 0.38)")
B.d0=new A.m(1,B.ex,"solid")
B.eV=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dt,null,B.d0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.id=new A.f(null,18,null,18)
B.eW=new A.n(B.id,null,null,null,null,null,46,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bJ=new A.n(null,null,null,null,null,null,null,null,B.c1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.m=new A.dJ("space-between",3,"between")
B.aR=new A.n(null,null,null,null,null,null,null,null,B.c,null,B.d,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aY=new A.f(12,20,12,20)
B.k=new A.cx("inline-flex",4,"inlineFlex")
B.aS=new A.n(B.aY,null,null,null,null,null,46,null,B.k,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,800,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.av=new A.d("rgba(52, 211, 153, 0.08)")
B.eX=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a1,null,null,null,null,null,null,null,null,null,B.av,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eY=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ay=new A.n(null,null,null,null,null,null,null,null,null,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZ=new A.n(B.aC,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ap,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bK=new A.n(null,null,null,null,0,null,null,null,B.c,10,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aK=new A.d("#06b6d4")
B.f_=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.aK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bM=new A.n(null,null,null,null,null,null,null,null,null,0,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f1=new A.n(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.aM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dU=new A.d("rgba(52, 211, 153, 0.2)")
B.cV=new A.m(1,B.dU,"solid")
B.bN=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a1,null,null,null,null,null,null,null,null,null,B.aN,null,B.cV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f2=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aa=new A.f(20,20,20,20)
B.by=new A.d("#040807")
B.f3=new A.n(B.aa,null,null,null,null,null,null,380,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,B.M,13,null,1.65,null,null,null,null,null,null,"pre",null,null,null,null,B.by,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f4=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,700,null,null,B.w,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dD=new A.d("rgba(255, 255, 255, 0.92)")
B.f5=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.b5=new A.f(8,10,8,10)
B.f8=new A.n(B.b5,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.f9=new A.n(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,18,800,null,null,B.w,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c7=new A.f(48,null,null,null)
B.bO=new A.n(null,B.c7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ib=new A.f(null,12,null,12)
B.fa=new A.n(B.ib,null,null,null,null,null,34,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fb=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,800,null,null,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fc=new A.n(null,null,null,null,null,null,null,null,null,12,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bP=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.M,12,null,null,null,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ia=new A.f(96,80,96,80)
B.aT=new A.n(B.ia,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dO=new A.d("rgba(255, 255, 255, 0.85)")
B.fe=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dP=new A.d("rgba(255, 255, 255, 0.75)")
B.dB=new A.d("rgba(15, 23, 42, 0.15)")
B.m1=new A.aq(12,32,-16,B.dB)
B.ff=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dP,null,null,null,null,null,null,null,B.m1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fh=new A.n(null,B.ae,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fi=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a1,null,null,null,null,null,null,null,null,null,B.aq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aO=new A.d("#e2e8f0")
B.fj=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.M,12,null,null,null,B.aO,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bR=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eu=new A.d("rgba(255, 255, 255, 0.88)")
B.fk=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fl=new A.n(B.aC,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.G,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bs=new A.d("rgba(56, 189, 248, 0.1)")
B.cQ=new A.m(1,B.br,"solid")
B.fn=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bs,null,B.cQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.e2=new A.d("rgba(56, 189, 248, 0.4)")
B.cR=new A.m(1,B.e2,"solid")
B.fm=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bs,null,B.cR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ic=new A.f(null,14,null,14)
B.fo=new A.n(B.ic,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fp=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,900,null,0.8,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bS=new A.n(null,null,null,null,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bT=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,42,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i5=new A.f(80,36,80,36)
B.fq=new A.n(B.i5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ey=new A.d("rgba(52, 211, 153, 0.24)")
B.d1=new A.m(1,B.ey,"solid")
B.a6=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.av,null,B.d1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ez=new A.d("rgba(52, 211, 153, 0.28)")
B.d2=new A.m(1,B.ez,"solid")
B.a7=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.av,null,B.d2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hF=new A.f(36,20,36,20)
B.a_=new A.dP("relative",1,"relative")
B.hP=new A.f(48,36,48,36)
B.h7=new A.n(B.hP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hU=new A.f(56,56,56,56)
B.eI=new A.n(B.hU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hY=new A.f(64,80,64,80)
B.fg=new A.n(B.hY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr=new A.n(B.hF,null,B.p,null,null,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.h7,B.eI,B.fg)
B.fs=new A.n(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,1.6,null,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c9=new A.f(6,8,6,8)
B.ft=new A.n(B.c9,null,null,null,null,null,32,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fv=new A.n(null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fw=new A.n(B.aC,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aM,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fx=new A.n(null,null,null,null,null,null,null,null,B.c,12,B.d,null,null,null,null,B.i,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ho=new A.f(12,16,12,16)
B.bU=new A.n(B.ho,null,null,null,null,null,46,null,B.k,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,800,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fy=new A.n(null,null,B.p,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hm=new A.f(104,80,104,80)
B.fz=new A.n(B.hm,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hK=new A.f(40,20,40,20)
B.fA=new A.n(B.hK,null,B.p,null,null,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a_,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bL,B.bI,B.bQ)
B.i4=new A.f(7,9,7,9)
B.fC=new A.n(B.i4,null,null,null,null,null,36,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fD=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dz=new A.d("rgba(255, 255, 255, 0.1)")
B.cT=new A.m(1,B.dz,"solid")
B.fE=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fF=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bA,null,null,null,null,null,null,null,null,null,null,0.55,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aX=new A.f(10,12,10,12)
B.fG=new A.n(B.aX,null,null,null,null,null,46,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hN=new A.f(48,18,48,18)
B.aU=new A.n(B.hN,null,null,null,null,null,null,null,null,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fH=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(16px)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bw=new A.d("#3b82f6")
B.fI=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.bw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.F=new A.cx("block",0,"block")
B.fJ=new A.n(null,null,null,null,null,null,null,null,B.F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,800,null,0.5,B.G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i6=new A.f(80,56,80,56)
B.aV=new A.n(B.i6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bV=new A.n(B.aE,null,B.p,null,null,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aQ,B.aV,B.aT)
B.hL=new A.f(40,null,null,null)
B.fK=new A.n(null,B.hL,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hr=new A.f(14,20,14,20)
B.hs=new A.f(14,36,14,36)
B.h9=new A.n(B.hs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ht=new A.f(14,56,14,56)
B.fX=new A.n(B.ht,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hu=new A.f(14,80,14,80)
B.f0=new A.n(B.hu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fM=new A.n(B.hr,null,B.p,null,null,B.p,null,null,B.c,16,B.d,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.h9,B.fX,B.f0)
B.hM=new A.f(48,16,48,16)
B.n=new A.F("auto")
B.ad=new A.f(null,B.n,null,B.n)
B.fN=new A.n(B.hM,B.ad,B.p,null,null,1152,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ie=new A.f(null,8,null,8)
B.fO=new A.n(B.ie,null,null,null,null,null,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ja=new A.dJ("flex-end",2,"end")
B.fP=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,B.ja,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bW=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,null,B.at,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.y=new A.hs("column",2,"column")
B.fQ=new A.n(null,null,B.p,null,null,null,null,null,B.c,null,B.d,null,null,null,B.y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fR=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.M,11,null,null,null,B.aO,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fS=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(-16px)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fT=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"scale(1)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fU=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.M,12,900,null,null,B.at,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hR=new A.f(4,4,4,4)
B.fV=new A.n(B.hR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a8=new A.n(null,null,null,null,null,null,null,null,B.c,8,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bX=new A.n(null,null,null,null,null,null,null,null,B.c,12,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bY=new A.n(null,null,null,null,null,null,null,null,null,2,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fW=new A.n(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,1.6,null,B.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.b0=new A.f(24,null,null,null)
B.bZ=new A.n(null,B.b0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.e3=new A.d("#ea580c")
B.dE=new A.d("#fdba74")
B.f7=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fY=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,null,B.e3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.f7,null,null,null,null)
B.fZ=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"scale(0.95)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hx=new A.f(28,20,28,20)
B.hz=new A.f(28,36,28,36)
B.fB=new A.n(B.hz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hC=new A.f(32,56,32,56)
B.f6=new A.n(B.hC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hG=new A.f(36,80,36,80)
B.hd=new A.n(B.hG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h_=new A.n(B.hx,null,B.p,null,null,B.p,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fB,B.f6,B.hd)
B.c6=new A.f(36,36,36,36)
B.h0=new A.n(B.c6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h1=new A.n(null,null,null,null,null,null,null,null,null,4,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h2=new A.n(B.aa,null,null,null,null,null,null,400,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,B.M,13,null,1.65,null,null,null,null,null,null,"pre",null,null,null,null,B.by,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h3=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ar,null,null,null,null,null,null,null,null,null,B.aq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ed=new A.d("rgba(148, 163, 184, 0.18)")
B.cX=new A.m(1,B.ed,"solid")
B.h4=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h5=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"underline",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.dV=new A.d("rgba(52, 211, 153, 0.4)")
B.cW=new A.m(1,B.dV,"solid")
B.h6=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aN,null,B.cW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h8=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.M,13,null,null,null,B.aO,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i8=new A.f(8,null,null,null)
B.ha=new A.n(null,B.i8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ig=new A.f(null,null,28,null)
B.hb=new A.n(null,B.ig,null,null,null,null,null,null,B.c,null,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c_=new A.n(null,null,null,null,null,null,null,null,B.c,6,B.d,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eh=new A.d("rgba(56, 189, 248, 0.32)")
B.cU=new A.m(1,B.eh,"solid")
B.hc=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ar,null,null,null,null,null,null,null,null,null,B.bt,null,B.cU,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.he=new A.n(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10,800,null,null,B.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cM=new A.cM("baseline",4,"baseline")
B.c0=new A.n(null,null,B.p,null,null,null,null,null,B.c,14,B.cM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.J=new A.cx("none",6,"none")
B.aW=new A.bw(0)
B.hf=new A.bw(2e5)
B.az=new A.bw(2e6)
B.hg=new A.bw(25e6)
B.hh=new A.bw(3e6)
B.hi=new A.bw(3e7)
B.hj=new A.bw(4e6)
B.hk=new A.bw(5e6)
B.hl=new A.bw(65e4)
B.c2=new A.f(0,12,0,12)
B.aA=new A.f(10,14,10,14)
B.a3=new A.f(10,16,10,16)
B.hn=new A.f(11,12,11,12)
B.c3=new A.f(12,22,12,22)
B.hp=new A.f(12,24,12,24)
B.hq=new A.f(12,null,4,null)
B.c4=new A.f(12,null,null,null)
B.aZ=new A.f(14,14,14,14)
B.a9=new A.f(16,16,16,16)
B.aB=new A.f(16,null,0,null)
B.L=new A.f(18,18,18,18)
B.b_=new A.f(18,null,0,null)
B.hv=new A.f(18,null,null,null)
B.hw=new A.f(1,5,1,5)
B.ab=new A.f(22,22,22,22)
B.T=new A.f(24,24,24,24)
B.hy=new A.f(28,28,28,28)
B.c5=new A.f(2,8,2,8)
B.hA=new A.f(2,null,2,null)
B.hB=new A.f(32,32,32,32)
B.hD=new A.f(32,null,0,null)
B.b1=new A.f(34,14,34,14)
B.hI=new A.f(3,8,3,8)
B.hJ=new A.f(3,9,3,9)
B.hQ=new A.f(48,null,40,null)
B.aD=new A.f(4,10,4,10)
B.hS=new A.f(4,8,4,8)
B.b2=new A.f(5,10,5,10)
B.hV=new A.f(5,12,5,12)
B.b3=new A.f(6,10,6,10)
B.b4=new A.f(6,12,6,12)
B.hZ=new A.f(6,14,6,14)
B.c8=new A.f(6,6,6,6)
B.i_=new A.f(6,null,null,null)
B.i0=new A.f(72,20,72,20)
B.ca=new A.f(7,10,7,10)
B.ac=new A.f(8,12,8,12)
B.aF=new A.f(8,null,8,null)
B.b6=new A.f(9,14,9,14)
B.ih=new A.f(null,null,6,null)
B.X=new A.hs("row",0,"row")
B.ii=new A.cy(0,"unknown")
B.cb=new A.cy(1,"timeout")
B.ij=new A.cy(2,"cancelled")
B.cc=new A.cy(3,"network")
B.b7=new A.cy(4,"http")
B.ik=new A.cy(5,"parse")
B.il=new A.eA(0,"json")
B.im=new A.eA(1,"text")
B.cd=new A.eA(3,"unknown")
B.io=new A.cz(" *")
B.U=new A.bR("dark",1,"dark")
B.af=new A.bR("light",0,"light")
B.cB={bg:0,text:1,muted:2,panel:3,panelStrong:4,line:5,primary:6,accent:7,warning:8}
B.en=new A.d("#f8fafc")
B.bm=new A.d("#0f172a")
B.ea=new A.d("#f1f5f9")
B.ee=new A.d("rgba(148, 163, 184, 0.42)")
B.dH=new A.d("#059669")
B.er=new A.d("#0284c7")
B.dv=new A.d("#b45309")
B.jT=new A.a6(B.cB,[B.en,B.bm,B.bp,B.w,B.ea,B.ee,B.dH,B.er,B.dv],t.J)
B.k7={pageX:0,sectionY:1}
B.m7=new A.F("min(1152px, calc(100% - 32px))")
B.cv=new A.a6(B.k7,[B.m7,64],t.J)
B.k6={md:0,pill:1}
B.cu=new A.a6(B.k6,[8,9999],t.J)
B.cF={sm:0,glow:1}
B.dC=new A.d("rgba(15, 23, 42, 0.18)")
B.m_=new A.aq(14,34,-24,B.dC)
B.e6=new A.d("rgba(2, 132, 199, 0.2)")
B.lY=new A.aq(18,54,-30,B.e6)
B.jL=new A.a6(B.cF,[B.m_,B.lY],t.J)
B.k9={sans:0,mono:1}
B.ce=new A.hx('Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif')
B.ct=new A.a6(B.k9,[B.ce,B.M],t.J)
B.ai={}
B.a=new A.a6(B.ai,[],t.J)
B.mw=new A.iF(B.a)
B.ir=new A.hw(B.jT,B.cv,B.cu,B.jL)
B.dX=new A.d("#05070d")
B.eq=new A.d("#a8b3c5")
B.es=new A.d("#111827")
B.dy=new A.d("rgba(51, 65, 85, 0.82)")
B.jS=new A.a6(B.cB,[B.dX,B.w,B.eq,B.bm,B.es,B.dy,B.N,B.G,B.aL],t.J)
B.dI=new A.d("rgba(2, 6, 23, 0.42)")
B.lX=new A.aq(14,34,-24,B.dI)
B.ei=new A.d("rgba(56, 189, 248, 0.42)")
B.lZ=new A.aq(18,54,-30,B.ei)
B.jK=new A.a6(B.cF,[B.lX,B.lZ],t.J)
B.iq=new A.hw(B.jS,B.cv,B.cu,B.jK)
B.ip=new A.lh(B.ir,B.iq,B.U)
B.jP=new A.a6(B.ai,[],A.aD("a6<h,C<h>>"))
B.B=new A.bS(B.jP)
B.cf=new A.bx("50% 50%")
B.is=new A.bx("88% 12%")
B.iu=new A.bx("85% 10%")
B.it=new A.bx("85% 15%")
B.cg=new A.bx("88% 8%")
B.ch=new A.bx("18% 0%")
B.iv=new A.bx("50% 60%")
B.iw=new A.bx("80% 10%")
B.ci=new A.bx("15% 0%")
B.ix=new A.bx("12% 0%")
B.iy=new A.bx("20% 0%")
B.K=new A.b3("1fr")
B.H=new A.aG("1fr")
B.cm=new A.m_(0,"outline")
B.j8=new A.m2(null)
B.j9=new A.m3(null)
B.cn=new A.dJ("flex-start",0,"start")
B.lP=new A.c7(["FULL-STACK WEB","Server, SSR & Declarative UI","High-performance HTTP server, SEO-first server-side rendering, and declarative Web UI without client bloat.","#34d399"])
B.lR=new A.c7(["CROSS-PLATFORM CLIENT","Universal SDK & Sync","Multi-tier caching, offline mutation replay, streaming WebSocket channels, and seamless database queries.","#38bdf8"])
B.lT=new A.c7(["AI AGENT MESH","Multimodal Inference & Tools","Autonomous agents with tool policies, memory persistence, streaming responses, and vector embeddings.","#a78bfa"])
B.lS=new A.c7(["ROBOTICS & HARDWARE","Edge Firmware & Sensors","Sonar distance sensors, IMU motion trackers, motor drivers, and instant Wokwi browser simulation.","#f97316"])
B.lO=new A.c7(["SECURE DATA GATEWAY","Row-Level Security & Wire Protocol","Owner-isolated CRUD policies, concealed fields, query AST compilers, and relational data hydration.","#ec4899"])
B.lQ=new A.c7(["DEVELOPER EXPERIENCE","100% Type-Safe Pure Dart","Shared data models, end-to-end type checking, instant worker hot reload, and streamlined CLI tooling.","#f59e0b"])
B.jb=s([B.lP,B.lR,B.lT,B.lS,B.lO,B.lQ],A.aD("a4<+(h,h,h,h)>"))
B.iU=new A.L(B.bq,0)
B.aG=new A.L(B.v,45)
B.jc=s([B.iU,B.aG],t.G)
B.jd=s(["models","orm","orm-query","orm-relations"],t.s)
B.ko=new A.aB("Flint Dart now sanitizes res.page() props before embedding them in the browser payload, including DateTime, Uri, enum values, models, maps, iterables, and objects with toJson() or toMap().","JSON-Safe Flint Page Props")
B.ku=new A.aB("Flint UI now replaces child components by default during parent rebuilds, so constructor-provided values stay current without requiring updateFrom for ordinary display components.","Fresh Child Component Values")
B.kt=new A.aB("StatefulComponent and StatelessComponent make lifecycle intent clear. Component remains backwards-compatible, while components that must survive parent rebuilds can opt in with preserveState.","Explicit Component Lifecycle Bases")
B.kx=new A.aB("The docs app now targets hosted pub.dev versions of flint_dart and flint_ui, keeping deployment independent of GitHub package overrides.","Hosted Package Deployment")
B.kv=new A.aB("Flint UI now lets docs pages and app screens be built with Dart components, state, events, and inline DartStyle without leaving the Dart ecosystem.","Flint UI Components")
B.kU=new A.aB("Docs now show a cleaner project shape with controllers, models, routes, UI pages, shared layouts, and reusable components organized in predictable folders.","Clear App Folder Structure")
B.kJ=new A.aB("Column(renamedFrom: ...) lets migrations rename existing columns without dropping user data, with warnings for risky case-only renames.","Safer Column Renames")
B.kK=new A.aB("Schema columns now support comment metadata and MySQL-only after placement for cleaner migrated tables.","Column Comments & Placement")
B.kG=new A.aB("app.controller(...) gives route groups a concise, request-scoped controller API while still creating a fresh controller for every request.","Cleaner Controller Routes")
B.kw=new A.aB("Auth.verifyPasswordResetCode(...) lets apps validate reset codes before changing a password, and resetPasswordWithCode(...) now shares the same verification logic.","Password Reset Code Checks")
B.l0=new A.aB("AuthVerification.verifyPasswordResetCode(...) keeps extension-based auth flows aligned with the new core reset-code verifier.","Auth Verification Wrapper")
B.kk=new A.aB("Exception middleware regression coverage now includes awaited async handlers that throw AuthException.","Async Auth Errors Covered")
B.kq=new A.aB("validate(), input(), allInput(), and rawBody() now cover JSON, forms, multipart fields, files, query params, and route params through one request API.","Unified Request Input")
B.ks=new A.aB("WebSocket rooms are now isolated by path, with explicit cross-namespace helpers like emitToRoomIn(...) and emitToNamespace(...).","WebSocket Namespaces")
B.kB=new A.aB("emit(...) and sendJson(...) now normalize values like DateTime, collections, exceptions, and objects with toMap() or toJson() before encoding.","Safer WebSocket Payloads")
B.l_=new A.aB("Generated docs now include app.websocket(...) handshake routes with 101 Switching Protocols and Flint-specific metadata.","Swagger Knows WebSockets")
B.kC=new A.aB("The docs now emphasize lib/config/seeder_registry.dart as the canonical entry point for flint --db-seed.","Seeder Registry First")
B.kl=new A.aB("orWhere(...) now compiles consistently across select, update, delete, and model helpers, and all() preserves any query filters you chained before it.","ORM Query Fixes")
B.km=new A.aB("All core docs now use (Context ctx) examples for better autocomplete and consistency.","Context-First Docs")
B.je=s([B.ko,B.ku,B.kt,B.kx,B.kv,B.kU,B.kJ,B.kK,B.kG,B.kw,B.l0,B.kk,B.kq,B.ks,B.kB,B.l_,B.kC,B.kl,B.km],A.aD("a4<+body,title(h,h)>"))
B.bn=new A.d("#000000")
B.iO=new A.L(B.bn,0)
B.iR=new A.L(B.bn,65)
B.iB=new A.L(B.v,100)
B.jf=s([B.iO,B.iR,B.iB],t.G)
B.dQ=new A.d("rgba(16, 185, 129, 0.12)")
B.iz=new A.L(B.dQ,null)
B.iD=new A.L(B.v,30)
B.jh=s([B.iz,B.iD],t.G)
B.e4=new A.d("rgba(14, 165, 233, 0.14)")
B.iP=new A.L(B.e4,null)
B.iF=new A.L(B.v,34)
B.ji=s([B.iP,B.iF],t.G)
B.ej=new A.d("rgba(56, 189, 248, 0.08)")
B.iL=new A.L(B.ej,null)
B.j1=new A.L(B.av,null)
B.iA=new A.L(B.bj,null)
B.jj=s([B.iL,B.j1,B.iA],t.G)
B.dZ=new A.d("rgba(139, 92, 246, 0.1)")
B.iX=new A.L(B.dZ,0)
B.ck=new A.L(B.v,55)
B.jk=s([B.iX,B.ck],t.G)
B.dR=new A.d("rgba(16, 185, 129, 0.18)")
B.cl=new A.L(B.dR,0)
B.jl=s([B.cl,B.aG],t.G)
B.lg=new A.a_("flint-class","Flint Class","Core Framework")
B.lh=new A.a_("request","Request","Core Framework")
B.lG=new A.a_("response","Response","Core Framework")
B.l5=new A.a_("router","Router","Core Framework")
B.lx=new A.a_("middleware","Middleware","Core Framework")
B.lC=new A.a_("model","Model","Database")
B.l7=new A.a_("query-builder","Query Builder","Database")
B.lB=new A.a_("migration","Migration","Database")
B.lH=new A.a_("schema","Schema","Database")
B.lq=new A.a_("auth","Auth Manager","Authentication")
B.lo=new A.a_("guards","Auth Guards","Authentication")
B.la=new A.a_("providers","Auth Providers","Authentication")
B.lF=new A.a_("components","Components","Flint UI")
B.l8=new A.a_("layout","Layout","Flint UI")
B.lr=new A.a_("forms","Forms","Flint UI")
B.lj=new A.a_("cache","Cache","Utilities")
B.lI=new A.a_("session","Session","Utilities")
B.lJ=new A.a_("storage","Storage","Utilities")
B.lz=new A.a_("mail","Mail","Utilities")
B.lL=new A.a_("validation","Validation","Utilities")
B.co=s([B.lg,B.lh,B.lG,B.l5,B.lx,B.lC,B.l7,B.lB,B.lH,B.lq,B.lo,B.la,B.lF,B.l8,B.lr,B.lj,B.lI,B.lJ,B.lz,B.lL],A.aD("a4<+(h,h,h)>"))
B.jm=s(["Flint","Model","Flint UI","Routing","Auth","Middleware","Database","Deployment"],t.s)
B.jn=s(["authentication","security"],t.s)
B.dS=new A.d("rgba(16, 185, 129, 0.15)")
B.j_=new A.L(B.dS,0)
B.iI=new A.L(B.v,60)
B.jo=s([B.j_,B.iI],t.G)
B.ek=new A.d("rgba(56, 189, 248, 0.18)")
B.iK=new A.L(B.ek,0)
B.jp=s([B.iK,B.aG],t.G)
B.jr=s([],A.aD("a4<~(hv)>"))
B.ag=s([],t.Y)
B.P=s([],t.c7)
B.aH=s([],t.s)
B.mr=s([],t.o)
B.jq=s([],A.aD("a4<zg>"))
B.js=s([],t.q)
B.h=s([],A.aD("a4<Q?>"))
B.iG=new A.L(B.v,42)
B.cp=s([B.cl,B.iG],t.G)
B.eA=new A.d("rgba(52, 211, 153, 0.22)")
B.iZ=new A.L(B.eA,0)
B.jt=s([B.iZ,B.aG],t.G)
B.e5=new A.d("rgba(14, 165, 233, 0.18)")
B.iV=new A.L(B.e5,0)
B.iH=new A.L(B.v,44)
B.cq=s([B.iV,B.iH],t.G)
B.el=new A.d("rgba(56, 189, 248, 0.16)")
B.iM=new A.L(B.el,null)
B.iE=new A.L(B.v,32)
B.jv=s([B.iM,B.iE],t.G)
B.eb=new A.d("#f8fffb")
B.iQ=new A.L(B.eb,0)
B.ec=new A.d("#f0faf5")
B.iW=new A.L(B.ec,48)
B.ep=new A.d("#eaf6fa")
B.j4=new A.L(B.ep,100)
B.cr=s([B.iQ,B.iW,B.j4],t.G)
B.jx=s(["middleware","validation"],t.s)
B.em=new A.d("rgba(56, 189, 248, 0.24)")
B.iN=new A.L(B.em,null)
B.eB=new A.d("rgba(52, 211, 153, 0.18)")
B.j2=new A.L(B.eB,null)
B.jy=s([B.iN,B.j2],t.G)
B.cj=new A.L(B.O,0)
B.iT=new A.L(B.aK,45)
B.e9=new A.d("#8b5cf6")
B.iY=new A.L(B.e9,100)
B.jz=s([B.cj,B.iT,B.iY],t.G)
B.jA=s(["routing","route-params","query-params","request-response","request-body","file-uploads","route-groups"],t.s)
B.lu=new A.a_("introduction","Introduction",null)
B.l6=new A.a_("flint-story","Flint Story",null)
B.lt=new A.a_("installation","Install",null)
B.lc=new A.a_("create-run","Create & Run",null)
B.ll=new A.a_("cli","CLI",null)
B.kV=new A.ae("routing","Overview")
B.l3=new A.ae("route-params","Route Params")
B.kM=new A.ae("query-params","Query Params")
B.kZ=new A.ae("request-response","Request & Response")
B.kA=new A.ae("request-body","Request Body")
B.kN=new A.ae("file-uploads","File Uploads")
B.kW=new A.ae("route-groups","Route Groups")
B.ju=s([B.kV,B.l3,B.kM,B.kZ,B.kA,B.kN,B.kW],t.O)
B.lf=new A.a_("routing","Routing",B.ju)
B.kO=new A.ae("middleware","Overview")
B.kj=new A.ae("validation","Input Validation")
B.jE=s([B.kO,B.kj],t.O)
B.lw=new A.a_("middleware","Middleware",B.jE)
B.kD=new A.ae("authentication","Overview")
B.kX=new A.ae("security","Security")
B.jw=s([B.kD,B.kX],t.O)
B.ls=new A.a_("authentication","Authentication",B.jw)
B.lb=new A.a_("sessions","Sessions & Cookies",null)
B.lk=new A.a_("cache","Caching",null)
B.lK=new A.a_("storage","Storage",null)
B.ly=new A.a_("logging","Logging",null)
B.l9=new A.a_("errors","Errors & Exceptions",null)
B.l4=new A.a_("helpers","Helpers & Utils",null)
B.lp=new A.a_("architecture","Controllers & Services",null)
B.lA=new A.a_("mail","Mail",null)
B.lE=new A.a_("ai","AI Runtime",null)
B.lv=new A.a_("isolate","Isolate",null)
B.li=new A.a_("swagger-docs","Swagger Docs",null)
B.lm=new A.a_("database","Database",null)
B.lN=new A.a_("websockets","WebSockets",null)
B.lM=new A.a_("views","Views",null)
B.le=new A.a_("theme-mode","Light & Dark Mode",null)
B.kP=new A.ae("models","Overview")
B.kT=new A.ae("orm","ORM")
B.kp=new A.ae("orm-query","Query")
B.ki=new A.ae("orm-relations","Relations")
B.jg=s([B.kP,B.kT,B.kp,B.ki],t.O)
B.ld=new A.a_("models","Models & Tables",B.jg)
B.lD=new A.a_("table-sync","Table Sync",null)
B.ln=new A.a_("deployment","Deployment",null)
B.jB=s([B.lu,B.l6,B.lt,B.lc,B.ll,B.lf,B.lw,B.ls,B.lb,B.lk,B.lK,B.ly,B.l9,B.l4,B.lp,B.lA,B.lE,B.lv,B.li,B.lm,B.lN,B.lM,B.le,B.ld,B.lD,B.ln],A.aD("a4<+(h,h,C<+(h,h)>?)>"))
B.iS=new A.L(B.aK,48)
B.iJ=new A.L(B.bw,100)
B.jC=s([B.cj,B.iS,B.iJ],t.G)
B.ev=new A.d("rgba(167, 139, 250, 0.12)")
B.j0=new A.L(B.ev,0)
B.jD=s([B.j0,B.ck],t.G)
B.j3=new A.L(B.aP,null)
B.iC=new A.L(B.v,28)
B.jF=s([B.j3,B.iC],t.G)
B.ka={width:0,height:1,"object-fit":2,display:3,background:4}
B.jG=new A.a6(B.ka,["100%","100%","cover","block","#020617"],t.w)
B.ke={margin:0,"font-size":1,color:2}
B.jH=new A.a6(B.ke,[0,"13px","#b42318"],t.bU)
B.k8={display:0,"max-width":1}
B.jI=new A.a6(B.k8,["block","100%"],t.J)
B.cE={display:0,gap:1}
B.cs=new A.a6(B.cE,["grid","6px"],t.w)
B.jJ=new A.a6(B.cE,["grid","16px"],t.J)
B.cD={display:0,"flex-direction":1}
B.jM=new A.a6(B.cD,["flex","row"],t.J)
B.jN=new A.a6(B.cD,["flex","column"],t.J)
B.kd={type:0}
B.ah=new A.a6(B.kd,["submit"],t.J)
B.cw=new A.a6(B.ai,[],A.aD("a6<h,n>"))
B.cx=new A.a6(B.ai,[],t.w)
B.Z=new A.a6(B.ai,[],A.aD("a6<h,@>"))
B.kb={"background-size":0}
B.jQ=new A.a6(B.kb,["44px 44px, 44px 44px"],t.J)
B.k0={introduction:0,installation:1,"create-run":2,cli:3,routing:4,"route-params":5,"query-params":6,"request-response":7,"request-body":8,"file-uploads":9,"route-groups":10,middleware:11,validation:12,authentication:13,security:14,sessions:15,cache:16,storage:17,logging:18,errors:19,helpers:20,architecture:21,mail:22,ai:23,isolate:24,"swagger-docs":25,database:26,websockets:27,views:28,models:29,orm:30,"orm-query":31,"orm-relations":32,"table-sync":33,deployment:34}
B.jR=new A.a6(B.k0,["installation","installation","create-run","cli","routing","routing","routing","routing","routing","routing","route-groups","middleware","validation","authentication","security","sessions","cache","storage","logging","errors","helpers","architecture","mail","ai","isolate","swagger-docs","database","websockets","views","models","models","models","models","table-sync","deployment"],t.w)
B.jZ={"aria-hidden":0}
B.cy=new A.a6(B.jZ,["true"],t.J)
B.cG={style:0}
B.k5={width:0,"max-width":1,"overflow-x":2}
B.jW=new A.a6(B.k5,["100%","100%","hidden"],t.w)
B.cz=new A.a6(B.cG,[B.jW],t.J)
B.k1={"min-width":0,"max-width":1,"overflow-wrap":2}
B.jO=new A.a6(B.k1,["0","100%","break-word"],t.w)
B.aI=new A.a6(B.cG,[B.jO],t.J)
B.k_={position:0,inset:1,display:2,width:3,height:4,padding:5,margin:6,border:7,"border-radius":8,background:9,appearance:10,cursor:11}
B.b8=new A.a6(B.k_,["absolute","0","block","100%","100%","0","0","0","0","rgba(2, 6, 23, 0.78)","none","pointer"],t.w)
B.k2={width:0,height:1,"min-height":2,"object-fit":3,display:4}
B.jU=new A.a6(B.k2,["100%","100%","210px","cover","block"],t.w)
B.k3={"font-size":0,"font-weight":1,color:2}
B.jV=new A.a6(B.k3,["14px",600,"#344054"],t.bU)
B.cC={"aria-label":0}
B.jX=new A.a6(B.cC,["Close API navigation"],t.J)
B.jY=new A.a6(B.cC,["Close guide navigation"],t.J)
B.cH=new A.ib("auto")
B.u=new A.ib("hidden")
B.aj=new A.dP("absolute",2,"absolute")
B.b9=new A.dP("fixed",3,"fixed")
B.kf=new A.dP("sticky",4,"sticky")
B.kg=new A.ae("/ai","AI Engine")
B.kh=new A.ae("/fullstack/guides","Fullstack Guides")
B.kn=new A.ae("/fullstack/examples","Examples & Tutorials")
B.kr=new A.ae("/fullstack/whats-new","What's New")
B.ky=new A.ae("https://github.com/flint-dart/flint_dart/discussions","Discussions")
B.kz=new A.ae("/fullstack/api","Fullstack API")
B.kE=new A.ae("https://github.com/flint-dart/flint_dart/issues","Issues")
B.kF=new A.ae("https://github.com/flint-dart/flint_dart/pulls","Pull requests")
B.kH=new A.ae("/showcase","Built with Flint")
B.kI=new A.ae("/blog","Blog")
B.kL=new A.ae("/hardware","Hardware & Robotics")
B.kQ=new A.ae("/fullstack","Fullstack Framework")
B.kR=new A.ae("/client","Client SDK")
B.kS=new A.ae("/fullstack/changelog","Changelog")
B.kY=new A.ae("/dart","Dart Lessons")
B.l1=new A.ae("/showcase/submit","Submit a build")
B.l2=new A.ae("/questions","Questions")
B.kc={flex:0,"flex-grow":1,"flex-shrink":2,"font-weight":3,"line-height":4,opacity:5,"z-index":6}
B.lU=new A.dv(B.kc,7,t.fe)
B.k4={svg:0,path:1,line:2,polyline:3,polygon:4,circle:5,rect:6,ellipse:7,title:8,g:9}
B.lV=new A.dv(B.k4,10,t.fe)
B.lW=new A.aq(1,0,0,B.v)
B.m0=new A.aq(0,10,2,B.O)
B.m2=new A.F("clamp(3rem, 6.2vw, 5.2rem)")
B.m3=new A.F("max-content")
B.m4=new A.F("clamp(2.5rem, 5.2vw, 4.4rem)")
B.a4=new A.F("0")
B.m5=new A.F("fit-content")
B.m6=new A.F("100vh")
B.Q=new A.nG(1,"center")
B.cJ=new A.nK(0,"topRight")
B.z=new A.dW(0,"neutral")
B.j=new A.dW(1,"primary")
B.m9=new A.dW(3,"warning")
B.ma=new A.dW(4,"danger")
B.mx=new A.iL("ease")
B.mb=new A.iL("linear")
B.mc=A.c_("yg")
B.md=A.c_("yh")
B.me=A.c_("v0")
B.mf=A.c_("v1")
B.mg=A.c_("v3")
B.mh=A.c_("v4")
B.mi=A.c_("v5")
B.mj=A.c_("Q")
B.mk=A.c_("vC")
B.ml=A.c_("vD")
B.mm=A.c_("vE")
B.mn=A.c_("q3")
B.mo=new A.nU(!1)
B.ak=new A.e_(0,"disconnected")
B.cK=new A.e_(1,"connecting")
B.al=new A.e_(2,"connected")
B.mp=new A.e_(3,"reconnecting")})();(function staticFields(){$.ol=null
$.bH=A.e([],t.G)
$.rf=null
$.mB=0
$.ii=A.x0()
$.qV=null
$.qU=null
$.tp=null
$.td=null
$.tt=null
$.pr=null
$.pz=null
$.qo=null
$.oq=A.e([],A.aD("a4<C<Q>?>"))
$.e8=null
$.fL=null
$.fM=null
$.qj=!1
$.ag=B.A
$.t7=A.dK(t.N)
$.t6=A.dK(t.N)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"yp","qw",()=>A.xI("_$dart_dartClosure"))
s($,"zZ","uq",()=>A.e([new J.hK()],A.aD("a4<f0>")))
s($,"zi","tQ",()=>A.cn(A.nQ({
toString:function(){return"$receiver$"}})))
s($,"zj","tR",()=>A.cn(A.nQ({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"zk","tS",()=>A.cn(A.nQ(null)))
s($,"zl","tT",()=>A.cn(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"zo","tW",()=>A.cn(A.nQ(void 0)))
s($,"zp","tX",()=>A.cn(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"zn","tV",()=>A.cn(A.rs(null)))
s($,"zm","tU",()=>A.cn(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"zr","tZ",()=>A.cn(A.rs(void 0)))
s($,"zq","tY",()=>A.cn(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"zt","qI",()=>A.vJ())
s($,"zz","u4",()=>A.va(4096))
s($,"zx","u2",()=>new A.oD().$0())
s($,"zy","u3",()=>new A.oC().$0())
s($,"zu","u_",()=>new Int8Array(A.wB(A.e([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"zv","u0",()=>A.bX("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"zw","u1",()=>typeof URLSearchParams=="function")
s($,"zR","k8",()=>A.fP(B.mj))
s($,"ze","qH",()=>{A.vl()
return $.mB})
s($,"Ah","cc",()=>{var r=A.wv()
return new A.kU(new A.l1(r,B.cx,B.Z,B.hi,null,!1,null,!1,B.dp,!0))})
s($,"yv","pM",()=>A.a8("activity",A.e([A.c9("22 12 18 12 15 21 9 3 6 12 2 12")],t.l)))
s($,"yw","qx",()=>A.a8("alertCircle",A.e([A.c8(12,12,10),A.aJ(12,8,12,13),A.aJ(12,17,12,17)],t.l)))
s($,"yx","qy",()=>A.a8("archive",A.e([A.fN(3,4,18,4,null),A.a0("M5 8v12h14V8"),A.a0("M10 12h4")],t.l)))
s($,"yy","tC",()=>A.a8("arrowDown",A.e([A.a0("M12 5v14"),A.c9("19 12 12 19 5 12")],t.l)))
s($,"yz","pN",()=>A.a8("arrowLeft",A.e([A.a0("M19 12H5"),A.c9("12 19 5 12 12 5")],t.l)))
s($,"yA","bN",()=>A.a8("arrowRight",A.e([A.a0("M5 12h14"),A.c9("12 5 19 12 12 19")],t.l)))
s($,"yB","fQ",()=>A.a8("book",A.e([A.a0("M4 19.5A2.5 2.5 0 0 1 6.5 17H20"),A.a0("M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z")],t.l)))
s($,"yC","tD",()=>A.a8("bookmark",A.e([A.a0("M6 3h12v18l-6-4-6 4V3z")],t.l)))
s($,"yD","tE",()=>A.a8("box",A.e([A.a0("M21 8 12 3 3 8l9 5 9-5z"),A.a0("M3 8v8l9 5 9-5V8"),A.a0("M12 13v8")],t.l)))
s($,"yE","qz",()=>A.a8("calendar",A.e([A.fN(3,4,18,17,2),A.aJ(16,2,16,6),A.aJ(8,2,8,6),A.aJ(3,10,21,10)],t.l)))
s($,"yF","fR",()=>A.a8("check",A.e([A.c9("20 6 9 17 4 12")],t.l)))
s($,"yG","tF",()=>A.a8("chevronDown",A.e([A.c9("6 9 12 15 18 9")],t.l)))
s($,"yH","qA",()=>A.a8("chevronRight",A.e([A.c9("9 18 15 12 9 6")],t.l)))
s($,"yI","tG",()=>A.a8("clipboard",A.e([A.fN(5,4,14,18,2),A.a0("M9 4a3 3 0 0 1 6 0"),A.a0("M9 4h6")],t.l)))
s($,"yJ","tH",()=>A.a8("clock",A.e([A.c8(12,12,10),A.a0("M12 6v6l4 2")],t.l)))
s($,"yK","tI",()=>A.a8("cloud",A.e([A.a0("M17.5 19H7a5 5 0 1 1 1.1-9.9A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19z")],t.l)))
s($,"yL","ef",()=>A.a8("code",A.e([A.c9("8 9 4 12 8 15"),A.c9("16 9 20 12 16 15"),A.a0("M14 5l-4 14")],t.l)))
s($,"yM","fS",()=>A.a8("copy",A.e([A.fN(8,8,12,12,2),A.a0("M16 8V4H4v12h4")],t.l)))
s($,"yN","qB",()=>A.a8("database",A.e([A.r3("ellipse",A.ai(["cx",12,"cy",5,"rx",8,"ry",3],t.N,t.X)),A.a0("M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"),A.a0("M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6")],t.l)))
s($,"yO","qC",()=>A.a8("document",A.e([A.a0("M6 2h8l4 4v16H6V2z"),A.a0("M14 2v5h5"),A.a0("M9 13h6"),A.a0("M9 17h6")],t.l)))
s($,"yP","tJ",()=>A.a8("edit",A.e([A.a0("M4 20h4L19 9l-4-4L4 16v4z"),A.a0("M13 7l4 4")],t.l)))
s($,"yQ","eg",()=>A.a8("globe",A.e([A.c8(12,12,10),A.a0("M2 12h20"),A.a0("M12 2a15 15 0 0 1 0 20"),A.a0("M12 2a15 15 0 0 0 0 20")],t.l)))
s($,"yR","dg",()=>A.a8("layers",A.e([A.r3("polygon",A.ai(["points","12 2 2 7 12 12 22 7 12 2"],t.N,t.X)),A.c9("2 12 12 17 22 12"),A.c9("2 17 12 22 22 17")],t.l)))
s($,"yS","tK",()=>A.a8("link",A.e([A.a0("M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"),A.a0("M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1")],t.l)))
s($,"yT","qD",()=>A.a8("logIn",A.e([A.a0("M15 3h4v18h-4"),A.a0("M10 17l5-5-5-5"),A.a0("M15 12H3")],t.l)))
s($,"yU","tL",()=>A.a8("message",A.e([A.a0("M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z")],t.l)))
s($,"yV","tM",()=>A.a8("moon",A.e([A.a0("M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z")],t.l)))
s($,"yW","qE",()=>A.a8("palette",A.e([A.a0("M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.3-3.5 1.8 1.8 0 0 1 1.2-3.2H18a6 6 0 0 0 0-12h-6z"),A.c8(7.5,10,1),A.c8(10,7,1),A.c8(14,7,1)],t.l)))
s($,"yX","k4",()=>A.a8("plus",A.e([A.aJ(12,5,12,19),A.aJ(5,12,19,12)],t.l)))
s($,"yY","k5",()=>A.a8("rocket",A.e([A.a0("M5 15c-1 1-2 4-2 6 2 0 5-1 6-2"),A.a0("M9 15 4 10l5-1 6-6c2-2 5-1 6-1 0 1 1 4-1 6l-6 6-1 5-4-4z"),A.c8(15,9,1.5)],t.l)))
s($,"yZ","tN",()=>A.a8("route",A.e([A.c8(6,18,3),A.c8(18,6,3),A.a0("M9 18h4a5 5 0 0 0 0-10H9")],t.l)))
s($,"z_","k6",()=>A.a8("send",A.e([A.a0("M22 2 11 13"),A.a0("M22 2 15 22l-4-9-9-4 20-7z")],t.l)))
s($,"z0","dh",()=>A.a8("server",A.e([A.fN(3,4,18,6,2),A.fN(3,14,18,6,2),A.aJ(7,7,7,7),A.aJ(7,17,7,17)],t.l)))
s($,"z1","qF",()=>A.a8("shield",A.e([A.a0("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],t.l)))
s($,"z2","cb",()=>A.a8("sparkles",A.e([A.a0("M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"),A.a0("M5 14l1 2.2L8 17l-2 .8L5 20l-1-2.2L2 17l2-.8L5 14z"),A.a0("M19 13l1 2.2 2 .8-2 .8L19 19l-1-2.2-2-.8 2-.8L19 13z")],t.l)))
s($,"z3","tO",()=>A.a8("sun",A.e([A.c8(12,12,4),A.aJ(12,2,12,4),A.aJ(12,20,12,22),A.aJ(4.9,4.9,6.3,6.3),A.aJ(17.7,17.7,19.1,19.1),A.aJ(2,12,4,12),A.aJ(20,12,22,12),A.aJ(4.9,19.1,6.3,17.7),A.aJ(17.7,6.3,19.1,4.9)],t.l)))
s($,"z4","tP",()=>A.a8("trash",A.e([A.a0("M3 6h18"),A.a0("M8 6V4h8v2"),A.a0("M6 6l1 16h10l1-16"),A.aJ(10,11,10,18),A.aJ(14,11,14,18)],t.l)))
s($,"z5","qG",()=>A.a8("user",A.e([A.c8(12,8,4),A.a0("M4 22a8 8 0 0 1 16 0")],t.l)))
s($,"z6","k7",()=>A.a8("x",A.e([A.aJ(18,6,6,18),A.aJ(6,6,18,18)],t.l)))
s($,"z7","ct",()=>A.a8("zap",A.e([A.a0("M13 2 3 14h8l-1 8 11-14h-8l0-6z")],t.l)))
s($,"Ag","uG",()=>{var r=null
return A.a(r,B.d,r,r,r,r,r,A.uO(B.v,1),r,r,r,r,r,r,r,r,r,B.eD,r,r,B.k,r,r,r,r,r,r,r,r,r,r,r,600,8,r,r,r,r,r,B.r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,B.bi,r,r,r,r,A.rp(120),r,r,r,r,r,r,r)})
s($,"Al","pO",()=>new A.lg(A.vs(B.af,t.c)))
s($,"Ai","uH",()=>{var r=t.N,q=A.aD("Y(z<h,@>)"),p=A.Z(r,q)
p.S(0,A.aD("z<h,Y(z<h,@>)>").a(A.ai(["Home",new A.oZ(),"Fullstack",new A.p_(),"WhatsNew",new A.p0(),"Changelog",new A.pb(),"Client",new A.pc(),"Ai",new A.pd(),"Hardware",new A.pe(),"UiDocs",new A.pf(),"Examples",new A.pg(),"Guides",new A.ph(),"Api",new A.pi(),"Questions",new A.p1(),"AskQuestion",new A.p2(),"Blog",new A.p3(),"BlogDetail",new A.p4(),"BlogWrite",new A.p5(),"QuestionDetail",new A.p6(),"Showcase",new A.p7(),"ShowcaseDetail",new A.p8(),"SubmitBuild",new A.p9(),"Content",new A.pa()],r,q)))
return new A.my(p)})
s($,"zX","up",()=>A.aF("#f43f5e"))
s($,"zO","uj",()=>A.aF("#38bdf8"))
s($,"Ad","uE",()=>A.aF("#34d399"))
s($,"A2","ut",()=>A.aF("#fbbf24"))
s($,"Ab","uC",()=>A.aF("#e2e8f0"))
s($,"A0","qN",()=>{var r,q,p,o,n="import ",m="(",l="async",k="    final ",j="await ",i="        .",h="main",g="  final ",f=",",e="  );",d="const ",c="  visionGuard.",b=$.dh(),a=A.aF("#10b981"),a0=$.up(),a1=A.q(n,a0,!0),a2=$.ut(),a3=A.q("'package:flint_dart/flint_dart.dart'",a2,!1),a4=$.uC(),a5=A.aD("a4<jO>")
a3=A.S(A.e([a1,a3,A.q(";",a4,!1)],a5))
a1=A.S(A.e([],a5))
r=$.uE()
q=A.q("void ",r,!1)
p=$.uj()
o=A.aD("a4<fa>")
q=A.ot(a,"import 'package:flint_dart/flint_dart.dart';\n\nvoid registerRoutes(Flint app) {\n  app.get('/api/projects', (ctx) async {\n    final user = await ctx.req.auth;\n    final projects = await Project()\n        .where('user_id', '=', user.id)\n        .withRelation('deployments')\n        .get();\n\n    return ctx.res?.json({'status': true, 'data': projects});\n  });\n}","lib/controllers/project_controller.dart","/fullstack",b,A.e([a3,a1,A.S(A.e([q,A.q("registerRoutes",p,!1),A.q(m,a4,!1),A.q("Flint",r,!0),A.q(" app) {",a4,!1)],a5)),A.S(A.e([A.q("  app.",a4,!1),A.q("get",p,!1),A.q("('/api/projects', (ctx) ",a2,!1),A.q(l,a0,!0),A.q(" {",a4,!1)],a5)),A.S(A.e([A.q(k,a0,!1),A.q("user = ",a4,!1),A.q(j,a0,!1),A.q("ctx.req.",a4,!1),A.q("auth",p,!1),A.q(";",a4,!1)],a5)),A.S(A.e([A.q(k,a0,!1),A.q("projects = ",a4,!1),A.q(j,a0,!1),A.q("Project",r,!0),A.q("()",a4,!1)],a5)),A.S(A.e([A.q(i,a4,!1),A.q("where",p,!1),A.q("('user_id', '=', user.id)",a4,!1)],a5)),A.S(A.e([A.q(i,a4,!1),A.q("withRelation",p,!1),A.q("('deployments')",a2,!1)],a5)),A.S(A.e([A.q(i,a4,!1),A.q("get",p,!1),A.q("();",a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q("    return ",a0,!0),A.q("ctx.res?.",a4,!1),A.q("json",p,!1),A.q("({'status': true, 'data': projects});",a4,!1)],a5)),A.S(A.e([A.q("  });",a4,!1)],a5)),A.S(A.e([A.q("}",a4,!1)],a5))],o),"Flint Dart Web Server","HTTP 200 OK \u2022 0.4ms latency \u2022 RLS Active","server.dart")
a1=$.eg()
a1=A.ot(A.aF("#06b6d4"),"import 'package:flint_client/flint_client.dart';\n\nFuture<void> main() async {\n  final client = FlintClient(\n    baseUrl: 'https://api.flintdart.dev',\n    debug: true,\n  );\n\n  final response = await client.get<Map<String, dynamic>>('/api/projects');\n  if (response.isSuccess) {\n    print('Projects: ${response.data}');\n  }\n}","lib/services/api_sync.dart","/client",a1,A.e([A.S(A.e([A.q(n,a0,!0),A.q("'package:flint_client/flint_client.dart'",a2,!1),A.q(";",a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q("Future<",r,!1),A.q("void",r,!1),A.q("> ",a4,!1),A.q(h,p,!1),A.q("() ",a4,!1),A.q(l,a0,!0),A.q(" {",a4,!1)],a5)),A.S(A.e([A.q(g,a0,!1),A.q("client = ",a4,!1),A.q("FlintClient",r,!0),A.q(m,a4,!1)],a5)),A.S(A.e([A.q("    baseUrl: ",a4,!1),A.q("'https://api.flintdart.dev'",a2,!1),A.q(f,a4,!1)],a5)),A.S(A.e([A.q("    debug: ",a4,!1),A.q("true",a0,!0),A.q(f,a4,!1)],a5)),A.S(A.e([A.q(e,a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q(g,a0,!1),A.q("response = ",a4,!1),A.q(j,a0,!1),A.q("client.",a4,!1),A.q("get",p,!1),A.q("<",a4,!1),A.q("Map<String, dynamic>",r,!1),A.q(">(",a4,!1),A.q("'/api/projects'",a2,!1),A.q(");",a4,!1)],a5)),A.S(A.e([A.q("  if ",a0,!0),A.q("(response.",a4,!1),A.q("isSuccess",p,!1),A.q(") {",a4,!1)],a5)),A.S(A.e([A.q("    print(",a4,!1),A.q("'Projects: ${response.data}'",a2,!1),A.q(");",a4,!1)],a5)),A.S(A.e([A.q("  }",a4,!1)],a5)),A.S(A.e([A.q("}",a4,!1)],a5))],o),"Flint Client SDK","Client Ready \u2022 Typed response \u2022 In-memory cache","client.dart")
a3=$.cb()
a3=A.ot(A.aF("#a855f7"),"import 'package:flint_ai/flint_ai.dart';\n\nFuture<void> main() async {\n  final ai = FlintAi();\n\n  final result = await ai.run(\n    agent: TaskAgent(),\n    goal: const AiGoal(\n      task: 'Analyze production server metrics',\n      input: {'clusterId': 'eu-central-1'},\n    ),\n    userId: 'user-1',\n  );\n\n  print(result.output);\n}","lib/agents/metrics_agent.dart","/ai",a3,A.e([A.S(A.e([A.q(n,a0,!0),A.q("'package:flint_ai/flint_ai.dart'",a2,!1),A.q(";",a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q("Future<",r,!1),A.q("void",r,!1),A.q("> ",a4,!1),A.q(h,p,!1),A.q("() ",a4,!1),A.q(l,a0,!0),A.q(" {",a4,!1)],a5)),A.S(A.e([A.q(g,a0,!1),A.q("ai = ",a4,!1),A.q("FlintAi",r,!0),A.q("();",a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q(g,a0,!1),A.q("result = ",a4,!1),A.q(j,a0,!1),A.q("ai.",a4,!1),A.q("run",p,!1),A.q(m,a4,!1)],a5)),A.S(A.e([A.q("    agent: ",a4,!1),A.q("TaskAgent",r,!0),A.q("(),",a4,!1)],a5)),A.S(A.e([A.q("    goal: ",a4,!1),A.q(d,a0,!1),A.q("AiGoal",r,!0),A.q(m,a4,!1)],a5)),A.S(A.e([A.q("      task: ",a4,!1),A.q("'Analyze production metrics'",a2,!1),A.q(f,a4,!1)],a5)),A.S(A.e([A.q("      input: {'clusterId': 'eu-central-1'},",a4,!1)],a5)),A.S(A.e([A.q("    ),",a4,!1)],a5)),A.S(A.e([A.q("    userId: ",a4,!1),A.q("'user-1'",a2,!1),A.q(f,a4,!1)],a5)),A.S(A.e([A.q(e,a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q("  print(",a4,!1),A.q("result.output",a4,!1),A.q(");",a4,!1)],a5)),A.S(A.e([A.q("}",a4,!1)],a5))],o),"Flint AI Engine","Multi-Provider Mesh \u2022 AiGoal -> AiPlan -> AiRunResult","ai_agent.dart")
b=$.ct()
return A.e([q,a1,a3,A.ot(A.aF("#f97316"),"import 'package:flint_hardware/flint_hardware.dart';\n\nvoid main() {\n  final visionGuard = FirmwareBuilder('cam_guard', target: BoardTarget.esp32Cam);\n\n  // 1. Configure On-Board Camera\n  visionGuard.camera(\n    resolution: CameraResolution.qvga,\n    format: PixelFormat.rgb565,\n    frameRate: 15,\n  );\n\n  // 2. Load Quantized TFLite Micro Model\n  final model = visionGuard.tfliteModel(\n    name: 'person_detect',\n    assetPath: 'models/person_detect.tflite',\n    inputShape: const [1, 96, 96, 1],\n    outputShape: const [1, 2],\n    quantization: TensorQuantization.int8,\n    tensorArenaSizeKb: 128,\n  );\n\n  // 3. Real-Time Edge Inference Loop\n  visionGuard.loop((ctx) {\n    ctx.log('Running on-device TFLite inference...');\n  });\n}","firmware/cam_guard.dart","/hardware",b,A.e([A.S(A.e([A.q(n,a0,!0),A.q("'package:flint_hardware/flint_hardware.dart'",a2,!1),A.q(";",a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q("void ",r,!1),A.q(h,p,!1),A.q("() {",a4,!1)],a5)),A.S(A.e([A.q(g,a0,!1),A.q("visionGuard = ",a4,!1),A.q("FirmwareBuilder",r,!0),A.q("('cam_guard', target: ",a4,!1),A.q("BoardTarget",r,!1),A.q(".esp32Cam);",a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q(c,a4,!1),A.q("camera",p,!1),A.q(m,a4,!1)],a5)),A.S(A.e([A.q("    resolution: ",a4,!1),A.q("CameraResolution",r,!1),A.q(".qvga,",a4,!1)],a5)),A.S(A.e([A.q("    format: ",a4,!1),A.q("PixelFormat",r,!1),A.q(".rgb565, frameRate: 15,",a4,!1)],a5)),A.S(A.e([A.q(e,a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q(g,a0,!1),A.q("model = visionGuard.",a4,!1),A.q("tfliteModel",p,!1),A.q(m,a4,!1)],a5)),A.S(A.e([A.q("    name: ",a4,!1),A.q("'person_detect'",a2,!1),A.q(f,a4,!1)],a5)),A.S(A.e([A.q("    assetPath: ",a4,!1),A.q("'models/person_detect.tflite'",a2,!1),A.q(f,a4,!1)],a5)),A.S(A.e([A.q("    inputShape: ",a4,!1),A.q(d,a0,!1),A.q("[1, 96, 96, 1],",a4,!1)],a5)),A.S(A.e([A.q("    outputShape: ",a4,!1),A.q(d,a0,!1),A.q("[1, 2],",a4,!1)],a5)),A.S(A.e([A.q("    quantization: ",a4,!1),A.q("TensorQuantization",r,!1),A.q(".int8,",a4,!1)],a5)),A.S(A.e([A.q("    tensorArenaSizeKb: 128,",a4,!1)],a5)),A.S(A.e([A.q(e,a4,!1)],a5)),A.S(A.e([],a5)),A.S(A.e([A.q(c,a4,!1),A.q("loop",p,!1),A.q("((ctx) {",a4,!1)],a5)),A.S(A.e([A.q("    ctx.",a4,!1),A.q("log",p,!1),A.q("('Running on-device TFLite inference...');",a2,!1)],a5)),A.S(A.e([A.q("  });",a4,!1)],a5)),A.S(A.e([A.q("}",a4,!1)],a5))],o),"Flint Hardware & Robotics","ESP32-CAM Native \u2022 TFLite Micro Model \u2022 15 FPS Inference","robotics.dart")],A.aD("a4<jA>"))})
s($,"Ak","uI",()=>{var r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.dc,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),o=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.dn,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a5("bg",q),m=t.G,l=A.a(q,q,q,q,q,A.aM(A.e([A.bm(B.ch,B.ji),A.bm(B.cg,B.jh),A.aF("#f8fafc")],m)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.a(q,q,q,q,q,A.aM(A.e([A.bm(B.ch,B.jv),A.bm(B.cg,B.jF),A.aF("#05070d")],m)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
l=A.a(q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,A.a5("text",q),q,m,q,q,q,q,q,q,q,q,q,q,q,A.vB("font.sans",q),q,q,q,q,q,q,q,q,q,q,q,q,q,l,q,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.aF("inherit"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.bi,q,q,q,q,q,q,q,q,q,q,q,q)
n=t.cB
r=A.aD("a4<ba>")
return A.rj(p,l,o,A.e([A.iw("flint-docs-rise",A.e([A.pV(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iy(22),q,q,q,q,q,q,q,q)),A.pW(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iy(0),q,q,q,q,q,q,q,q))],n)),A.iw("flint-docs-float",A.e([A.eL(0,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.q0(A.e([A.iy(0),A.ix(0)],r)),q,q,q,q,q,q,q,q)),A.eL(50,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.q0(A.e([A.iy(-16),A.ix("3deg")],r)),q,q,q,q,q,q,q,q)),A.eL(100,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.q0(A.e([A.iy(0),A.ix(0)],r)),q,q,q,q,q,q,q,q))],n)),A.iw("flint-docs-orbit",A.e([A.pV(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ix(0),q,q,q,q,q,q,q,q)),A.pW(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ix("360deg"),q,q,q,q,q,q,q,q))],n)),A.iw("flint-docs-scan",A.e([A.pV(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ro(A.rl(-120)),q,q,q,q,q,q,q,q)),A.pW(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ro(A.rl(120)),q,q,q,q,q,q,q,q))],n)),A.iw("flint-docs-pulse",A.e([A.eL(0,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.42,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.eL(50,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.86,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.eL(100,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.42,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))],n))],t.o),m,"flint-docs-root",q,B.ip)})
s($,"zT","un",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A6","uA",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,190,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A7","uz",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,150,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zU","um",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A8","uy",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,260,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zY","uo",()=>A.aF("#f43f5e"))
s($,"zP","ui",()=>A.aF("#38bdf8"))
s($,"Ae","uD",()=>A.aF("#34d399"))
s($,"A3","us",()=>A.aF("#fbbf24"))
s($,"Ac","uB",()=>A.aF("#e2e8f0"))
s($,"A1","qM",()=>{var r,q,p,o,n,m="import ",l="'package:flint_dart/flint_dart.dart'",k=";",j="    final ",i="        .",h="    return ",g="extends ",f="  @override",e="  String ",d="get ",c="getAttribute",b="          Column(name: ",a=", type: ",a0="ColumnType.",a1="    socket.",a2=$.dh(),a3=A.aF("#10b981"),a4=$.uo(),a5=A.p(m,a4,!0),a6=$.us(),a7=A.p(l,a6,!1),a8=$.uB(),a9=A.aD("a4<jd>")
a7=A.O(A.e([a5,a7,A.p(k,a8,!1)],a9))
a5=A.O(A.e([A.p(m,a4,!0),A.p("'package:app/models/project_model.dart'",a6,!1),A.p(k,a8,!1)],a9))
r=A.O(A.e([],a9))
q=$.uD()
p=A.p("void ",q,!1)
o=$.ui()
n=A.aD("a4<fg>")
p=A.o5(a3,"import 'package:flint_dart/flint_dart.dart';\nimport 'package:app/models/project_model.dart';\n\nvoid registerRoutes(Flint app) {\n  app.get('/api/projects', (ctx) async {\n    final user = await ctx.req.auth;\n    final projects = await Project()\n        .where('user_id', '=', user.id)\n        .withRelation('deployments')\n        .get();\n\n    return ctx.res?.json({\n      'status': 'success',\n      'data': projects.map((p) => p.toMap()).toList(),\n    });\n  });\n}","lib/routes/api_routes.dart",a2,"Unified Routing & Context (ctx)",A.e([a7,a5,r,A.O(A.e([p,A.p("registerRoutes",o,!1),A.p("(",a8,!1),A.p("Flint",q,!0),A.p(" app) {",a8,!1)],a9)),A.O(A.e([A.p("  app.",a8,!1),A.p("get",o,!1),A.p("('/api/projects', (ctx) ",a6,!1),A.p("async",a4,!0),A.p(" {",a8,!1)],a9)),A.O(A.e([A.p(j,a4,!1),A.p("user = ",a8,!1),A.p("await ",a4,!1),A.p("ctx.req.",a8,!1),A.p("auth",o,!1),A.p(k,a8,!1)],a9)),A.O(A.e([A.p(j,a4,!1),A.p("projects = ",a8,!1),A.p("await ",a4,!1),A.p("Project",q,!0),A.p("()",a8,!1)],a9)),A.O(A.e([A.p(i,a8,!1),A.p("where",o,!1),A.p("('user_id', '=', user.id)",a8,!1)],a9)),A.O(A.e([A.p(i,a8,!1),A.p("withRelation",o,!1),A.p("('deployments')",a6,!1)],a9)),A.O(A.e([A.p(i,a8,!1),A.p("get",o,!1),A.p("();",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p(h,a4,!0),A.p("ctx.res?.",a8,!1),A.p("json",o,!1),A.p("({",a8,!1)],a9)),A.O(A.e([A.p("      'status': ",a8,!1),A.p("'success'",a6,!1),A.p(",",a8,!1)],a9)),A.O(A.e([A.p("      'data': projects.",a8,!1),A.p("map",o,!1),A.p("((p) => p.",a8,!1),A.p("toMap",o,!1),A.p("()).",a8,!1),A.p("toList",o,!1),A.p("(),",a8,!1)],a9)),A.O(A.e([A.p("    });",a8,!1)],a9)),A.O(A.e([A.p("  });",a8,!1)],a9)),A.O(A.e([A.p("}",a8,!1)],a9))],n),"HTTP 200 OK \u2022 0.3ms latency \u2022 Unified Context","routes.dart","Context Route")
r=$.qE()
r=A.o5(A.aF("#06b6d4"),"import 'package:flint_dart/ui.dart';\n\nclass DashboardPage extends Component {\n  final Map<String, dynamic> props;\n  DashboardPage(this.props);\n\n  @override\n  View build() {\n    return Container(\n      dartStyle: const DartStyle(padding: EdgeInsets.all(24)),\n      children: [\n        Text.h1('Active Deployments', dartStyle: _headingStyle),\n        ResourceView<List<Project>>(\n          data: props['projects'],\n          builder: (projects) => ProjectGrid(projects),\n        ),\n      ],\n    );\n  }\n}","lib/ui/pages/dashboard_page.dart",r,"Declarative Web UI & SSR",A.e([A.O(A.e([A.p(m,a4,!0),A.p("'package:flint_dart/ui.dart'",a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p("class ",a4,!0),A.p("DashboardPage ",q,!0),A.p(g,a4,!1),A.p("Component",q,!1),A.p(" {",a8,!1)],a9)),A.O(A.e([A.p("  final ",a4,!1),A.p("Map<String, dynamic> props;",a8,!1)],a9)),A.O(A.e([A.p("  DashboardPage(this.props);",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p(f,o,!1)],a9)),A.O(A.e([A.p("  View ",q,!1),A.p("build",o,!1),A.p("() {",a8,!1)],a9)),A.O(A.e([A.p(h,a4,!0),A.p("Container",q,!0),A.p("(",a8,!1)],a9)),A.O(A.e([A.p("      dartStyle: ",a8,!1),A.p("const ",a4,!1),A.p("DartStyle",q,!1),A.p("(padding: ",a8,!1),A.p("EdgeInsets.",q,!1),A.p("all",o,!1),A.p("(24)),",a8,!1)],a9)),A.O(A.e([A.p("      children: [",a8,!1)],a9)),A.O(A.e([A.p("        Text.",a8,!1),A.p("h1",o,!1),A.p("('Active Deployments', dartStyle: _headingStyle),",a6,!1)],a9)),A.O(A.e([A.p("        ResourceView<",q,!1),A.p("List<Project>",q,!0),A.p(">(",a8,!1)],a9)),A.O(A.e([A.p("          data: props['projects'],",a8,!1)],a9)),A.O(A.e([A.p("          builder: (projects) => ",a8,!1),A.p("ProjectGrid",q,!1),A.p("(projects),",a8,!1)],a9)),A.O(A.e([A.p("        ),",a8,!1)],a9)),A.O(A.e([A.p("      ],",a8,!1)],a9)),A.O(A.e([A.p("    );",a8,!1)],a9)),A.O(A.e([A.p("  }",a8,!1)],a9)),A.O(A.e([A.p("}",a8,!1)],a9))],n),"SSR Hydrated \u2022 60fps Reactive Signals \u2022 Theme Aware","ui_page.dart","Frontend Component")
a5=$.qB()
a5=A.o5(A.aF("#3b82f6"),"import 'package:flint_dart/model.dart';\nimport 'package:flint_dart/schema.dart';\n\nclass Project extends Model<Project> {\n  Project() : super(() => Project());\n\n  String get name => getAttribute('name') ?? '';\n  String get status => getAttribute('status') ?? 'draft';\n  String get userId => getAttribute('user_id') ?? '';\n\n  @override\n  Table get table => Table(\n        name: 'projects',\n        columns: [\n          Column(name: 'name', type: ColumnType.string, length: 255),\n          Column(name: 'status', type: ColumnType.string, length: 50),\n          Column(name: 'user_id', type: ColumnType.string, length: 100),\n        ],\n      );\n}","lib/models/project_model.dart",a5,"Flint ORM & Database Layer",A.e([A.O(A.e([A.p(m,a4,!0),A.p("'package:flint_dart/model.dart'",a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([A.p(m,a4,!0),A.p("'package:flint_dart/schema.dart'",a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p("class ",a4,!0),A.p("Project ",q,!0),A.p(g,a4,!1),A.p("Model<Project>",q,!1),A.p(" {",a8,!1)],a9)),A.O(A.e([A.p("  Project() : ",a8,!1),A.p("super",a4,!0),A.p("(() => ",a8,!1),A.p("Project",q,!1),A.p("());",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p(e,q,!1),A.p(d,a4,!1),A.p("name => ",a8,!1),A.p(c,o,!1),A.p("('name') ?? ",a6,!1),A.p("''",a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([A.p(e,q,!1),A.p(d,a4,!1),A.p("status => ",a8,!1),A.p(c,o,!1),A.p("('status') ?? ",a6,!1),A.p("'draft'",a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p(f,o,!1)],a9)),A.O(A.e([A.p("  Table ",q,!1),A.p(d,a4,!1),A.p("table => ",a8,!1),A.p("Table",q,!0),A.p("(",a8,!1)],a9)),A.O(A.e([A.p("        name: ",a8,!1),A.p("'projects'",a6,!1),A.p(",",a8,!1)],a9)),A.O(A.e([A.p("        columns: [",a8,!1)],a9)),A.O(A.e([A.p(b,a8,!1),A.p("'name'",a6,!1),A.p(a,a8,!1),A.p(a0,q,!1),A.p("string",a8,!1),A.p(", length: 255),",a8,!1)],a9)),A.O(A.e([A.p(b,a8,!1),A.p("'status'",a6,!1),A.p(a,a8,!1),A.p(a0,q,!1),A.p("string",a8,!1),A.p(", length: 50),",a8,!1)],a9)),A.O(A.e([A.p("        ],",a8,!1)],a9)),A.O(A.e([A.p("      );",a8,!1)],a9)),A.O(A.e([A.p("}",a8,!1)],a9))],n),"PostgreSQL Active \u2022 Relations Typed \u2022 RLS Policy Enforced","model.dart","ORM & RLS Model")
a7=$.ct()
return A.e([p,r,a5,A.o5(A.aF("#f59e0b"),"import 'package:flint_dart/flint_dart.dart';\n\nvoid registerWebSockets(Flint app) {\n  app.websocket('/ws/deployments', (req, socket) {\n    final projectId = req.query['id'] ?? 'global';\n    socket.join(projectId);\n\n    socket.on('deploy', (data) {\n      socket.emitToRoom(projectId, 'deployment_updated', {\n        'status': 'building',\n        'timestamp': DateTime.now().toIso8601String(),\n      });\n    });\n  });\n}","lib/routes/ws_routes.dart",a7,"Real-Time WebSocket Layer",A.e([A.O(A.e([A.p(m,a4,!0),A.p(l,a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p("void ",q,!1),A.p("registerWebSockets",o,!1),A.p("(",a8,!1),A.p("Flint",q,!0),A.p(" app) {",a8,!1)],a9)),A.O(A.e([A.p("  app.",a8,!1),A.p("websocket",o,!1),A.p("('/ws/deployments', (req, socket) {",a6,!1)],a9)),A.O(A.e([A.p(j,a4,!1),A.p("projectId = req.query['id'] ?? ",a8,!1),A.p("'global'",a6,!1),A.p(k,a8,!1)],a9)),A.O(A.e([A.p(a1,a8,!1),A.p("join",o,!1),A.p("(projectId);",a8,!1)],a9)),A.O(A.e([],a9)),A.O(A.e([A.p(a1,a8,!1),A.p("on",o,!1),A.p("('deploy', (data) {",a6,!1)],a9)),A.O(A.e([A.p("      socket.",a8,!1),A.p("emitToRoom",o,!1),A.p("(projectId, 'deployment_updated', {",a6,!1)],a9)),A.O(A.e([A.p("        'status': ",a8,!1),A.p("'building'",a6,!1),A.p(",",a8,!1)],a9)),A.O(A.e([A.p("        'timestamp': ",a8,!1),A.p("DateTime.",q,!1),A.p("now",o,!1),A.p("().",a8,!1),A.p("toIso8601String",o,!1),A.p("(),",a8,!1)],a9)),A.O(A.e([A.p("      });",a8,!1)],a9)),A.O(A.e([A.p("    });",a8,!1)],a9)),A.O(A.e([A.p("  });",a8,!1)],a9)),A.O(A.e([A.p("}",a8,!1)],a9))],n),"0.1ms Room Broadcast \u2022 Presence Active \u2022 Sub-millisecond","websocket.dart","Live Channels")],A.aD("a4<jc>"))})
s($,"A9","ux",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,160,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zV","qL",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Aa","uw",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,140,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zS","ul",()=>{var r=null,q=A.et(40),p=A.b2(A.c3(56,189,248,0.3),"solid",1)
return A.a(r,r,r,r,r,A.a5("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,24,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zA","u5",()=>{var r=null,q=A.eu(12,4),p=A.b2(A.c3(2,132,199,0.3),"solid",1)
return A.a(r,r,r,r,r,A.c3(2,132,199,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.fn,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,9999,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zB","u6",()=>{var r=null,q=A.eu(12,4),p=A.b2(A.c3(5,150,105,0.3),"solid",1)
return A.a(r,r,r,r,r,A.c3(5,150,105,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.fm,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,9999,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zC","u7",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("accent",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zD","u8",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zQ","uk",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dy(0,r,20),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A4","uu",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dy(0,r,12),r,r,720,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zF","u9",()=>{var r=null,q=A.et(20),p=A.b2(A.a5("line",r),"solid",1)
return A.a(r,r,r,r,r,A.a5("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zH","ub",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,16,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.et(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zG","ua",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.55,A.dy(0,r,8),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zJ","ud",()=>{var r=null,q=A.et(24),p=A.b2(A.a5("line",r),"solid",1)
return A.a(r,r,r,r,r,A.a5("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dy(r,r,32),r,r,r,r,r,r,r,r,r,r,r,r,q,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zM","ug",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,18,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.et(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zI","uc",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dy(0,r,8),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zK","ue",()=>{var r=null,q=A.eu(16,8),p=A.b2(A.c3(5,150,105,0.34),"solid",1)
return A.a(r,r,r,r,r,A.c3(5,150,105,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.h6,r,B.k,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dy(r,r,16),r,r,r,r,r,r,r,r,r,r,r,r,q,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zL","uf",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zW","qK",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("panelStrong",r),r,A.b2(A.a5("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Af","uF",()=>{var r=null,q=A.eu(16,0)
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,A.dy(0,r,16),r,r,1152,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A5","uv",()=>{var r=null,q=A.eu(16,12),p=A.b2(A.c3(52,211,153,0.4),"solid",1)
return A.a(r,r,r,r,r,A.c3(52,211,153,0.1),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zN","uh",()=>{var r=null,q=A.eu(16,12),p=A.b2(A.c3(248,113,113,0.4),"solid",1)
return A.a(r,r,r,r,r,A.c3(248,113,113,0.1),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zE","qJ",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.et(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A_","ur",()=>{var r=null
return A.a(r,r,r,r,r,A.a5("bg",r),r,r,r,r,r,r,r,r,r,r,A.a5("text",r),r,r,r,B.c,r,r,r,B.y,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.m6,0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.p,r,r,r,r)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.dE,AbortPaymentEvent:J.c,AnimationEffectReadOnly:J.c,AnimationEffectTiming:J.c,AnimationEffectTimingReadOnly:J.c,AnimationEvent:J.c,AnimationPlaybackEvent:J.c,AnimationTimeline:J.c,AnimationWorkletGlobalScope:J.c,ApplicationCacheErrorEvent:J.c,AuthenticatorAssertionResponse:J.c,AuthenticatorAttestationResponse:J.c,AuthenticatorResponse:J.c,BackgroundFetchClickEvent:J.c,BackgroundFetchEvent:J.c,BackgroundFetchFailEvent:J.c,BackgroundFetchFetch:J.c,BackgroundFetchManager:J.c,BackgroundFetchSettledFetch:J.c,BackgroundFetchedEvent:J.c,BarProp:J.c,BarcodeDetector:J.c,BeforeInstallPromptEvent:J.c,BeforeUnloadEvent:J.c,BlobEvent:J.c,BluetoothRemoteGATTDescriptor:J.c,Body:J.c,BudgetState:J.c,CacheStorage:J.c,CanMakePaymentEvent:J.c,CanvasGradient:J.c,CanvasPattern:J.c,CanvasRenderingContext2D:J.c,Client:J.c,Clients:J.c,ClipboardEvent:J.c,CloseEvent:J.c,CompositionEvent:J.c,CookieStore:J.c,Coordinates:J.c,Credential:J.c,CredentialUserData:J.c,CredentialsContainer:J.c,Crypto:J.c,CryptoKey:J.c,CSS:J.c,CSSVariableReferenceValue:J.c,CustomElementRegistry:J.c,CustomEvent:J.c,DataTransfer:J.c,DataTransferItem:J.c,DeprecatedStorageInfo:J.c,DeprecatedStorageQuota:J.c,DeprecationReport:J.c,DetectedBarcode:J.c,DetectedFace:J.c,DetectedText:J.c,DeviceAcceleration:J.c,DeviceMotionEvent:J.c,DeviceOrientationEvent:J.c,DeviceRotationRate:J.c,DirectoryEntry:J.c,webkitFileSystemDirectoryEntry:J.c,FileSystemDirectoryEntry:J.c,DirectoryReader:J.c,WebKitDirectoryReader:J.c,webkitFileSystemDirectoryReader:J.c,FileSystemDirectoryReader:J.c,DocumentOrShadowRoot:J.c,DocumentTimeline:J.c,DOMError:J.c,DOMImplementation:J.c,Iterator:J.c,DOMMatrix:J.c,DOMMatrixReadOnly:J.c,DOMParser:J.c,DOMPoint:J.c,DOMPointReadOnly:J.c,DOMQuad:J.c,DOMStringMap:J.c,Entry:J.c,webkitFileSystemEntry:J.c,FileSystemEntry:J.c,ErrorEvent:J.c,Event:J.c,InputEvent:J.c,SubmitEvent:J.c,ExtendableEvent:J.c,ExtendableMessageEvent:J.c,External:J.c,FaceDetector:J.c,FederatedCredential:J.c,FetchEvent:J.c,FileEntry:J.c,webkitFileSystemFileEntry:J.c,FileSystemFileEntry:J.c,DOMFileSystem:J.c,WebKitFileSystem:J.c,webkitFileSystem:J.c,FileSystem:J.c,FocusEvent:J.c,FontFace:J.c,FontFaceSetLoadEvent:J.c,FontFaceSource:J.c,ForeignFetchEvent:J.c,FormData:J.c,GamepadButton:J.c,GamepadEvent:J.c,GamepadPose:J.c,Geolocation:J.c,Position:J.c,GeolocationPosition:J.c,HashChangeEvent:J.c,Headers:J.c,HTMLHyperlinkElementUtils:J.c,IdleDeadline:J.c,ImageBitmap:J.c,ImageBitmapRenderingContext:J.c,ImageCapture:J.c,ImageData:J.c,InputDeviceCapabilities:J.c,InstallEvent:J.c,IntersectionObserver:J.c,IntersectionObserverEntry:J.c,InterventionReport:J.c,KeyboardEvent:J.c,KeyframeEffect:J.c,KeyframeEffectReadOnly:J.c,MediaCapabilities:J.c,MediaCapabilitiesInfo:J.c,MediaDeviceInfo:J.c,MediaEncryptedEvent:J.c,MediaError:J.c,MediaKeyMessageEvent:J.c,MediaKeyStatusMap:J.c,MediaKeySystemAccess:J.c,MediaKeys:J.c,MediaKeysPolicy:J.c,MediaMetadata:J.c,MediaQueryListEvent:J.c,MediaSession:J.c,MediaSettingsRange:J.c,MediaStreamEvent:J.c,MediaStreamTrackEvent:J.c,MemoryInfo:J.c,MessageChannel:J.c,MessageEvent:J.c,Metadata:J.c,MIDIConnectionEvent:J.c,MIDIMessageEvent:J.c,MouseEvent:J.c,DragEvent:J.c,MutationEvent:J.c,MutationObserver:J.c,WebKitMutationObserver:J.c,MutationRecord:J.c,NavigationPreloadManager:J.c,Navigator:J.c,NavigatorAutomationInformation:J.c,NavigatorConcurrentHardware:J.c,NavigatorCookies:J.c,NavigatorUserMediaError:J.c,NodeFilter:J.c,NodeIterator:J.c,NonDocumentTypeChildNode:J.c,NonElementParentNode:J.c,NoncedElement:J.c,NotificationEvent:J.c,OffscreenCanvasRenderingContext2D:J.c,OverconstrainedError:J.c,PageTransitionEvent:J.c,PaintRenderingContext2D:J.c,PaintSize:J.c,PaintWorkletGlobalScope:J.c,PasswordCredential:J.c,Path2D:J.c,PaymentAddress:J.c,PaymentInstruments:J.c,PaymentManager:J.c,PaymentRequestEvent:J.c,PaymentRequestUpdateEvent:J.c,PaymentResponse:J.c,PerformanceEntry:J.c,PerformanceLongTaskTiming:J.c,PerformanceMark:J.c,PerformanceMeasure:J.c,PerformanceNavigation:J.c,PerformanceNavigationTiming:J.c,PerformanceObserver:J.c,PerformanceObserverEntryList:J.c,PerformancePaintTiming:J.c,PerformanceResourceTiming:J.c,PerformanceServerTiming:J.c,PerformanceTiming:J.c,Permissions:J.c,PhotoCapabilities:J.c,PointerEvent:J.c,PopStateEvent:J.c,PositionError:J.c,GeolocationPositionError:J.c,Presentation:J.c,PresentationConnectionAvailableEvent:J.c,PresentationConnectionCloseEvent:J.c,PresentationReceiver:J.c,ProgressEvent:J.c,PromiseRejectionEvent:J.c,PublicKeyCredential:J.c,PushEvent:J.c,PushManager:J.c,PushMessageData:J.c,PushSubscription:J.c,PushSubscriptionOptions:J.c,Range:J.c,RelatedApplication:J.c,ReportBody:J.c,ReportingObserver:J.c,ResizeObserver:J.c,ResizeObserverEntry:J.c,RTCCertificate:J.c,RTCDataChannelEvent:J.c,RTCDTMFToneChangeEvent:J.c,RTCIceCandidate:J.c,mozRTCIceCandidate:J.c,RTCLegacyStatsReport:J.c,RTCPeerConnectionIceEvent:J.c,RTCRtpContributingSource:J.c,RTCRtpReceiver:J.c,RTCRtpSender:J.c,RTCSessionDescription:J.c,mozRTCSessionDescription:J.c,RTCStatsResponse:J.c,RTCTrackEvent:J.c,Screen:J.c,ScrollState:J.c,ScrollTimeline:J.c,SecurityPolicyViolationEvent:J.c,Selection:J.c,SensorErrorEvent:J.c,SpeechRecognitionAlternative:J.c,SpeechRecognitionError:J.c,SpeechRecognitionEvent:J.c,SpeechSynthesisEvent:J.c,SpeechSynthesisVoice:J.c,StaticRange:J.c,StorageEvent:J.c,StorageManager:J.c,StyleMedia:J.c,StylePropertyMap:J.c,StylePropertyMapReadonly:J.c,SyncEvent:J.c,SyncManager:J.c,TaskAttributionTiming:J.c,TextDetector:J.c,TextEvent:J.c,TextMetrics:J.c,TouchEvent:J.c,TrackDefault:J.c,TrackEvent:J.c,TransitionEvent:J.c,WebKitTransitionEvent:J.c,TreeWalker:J.c,TrustedHTML:J.c,TrustedScriptURL:J.c,TrustedURL:J.c,UIEvent:J.c,UnderlyingSourceBase:J.c,URLSearchParams:J.c,VRCoordinateSystem:J.c,VRDeviceEvent:J.c,VRDisplayCapabilities:J.c,VRDisplayEvent:J.c,VREyeParameters:J.c,VRFrameData:J.c,VRFrameOfReference:J.c,VRPose:J.c,VRSessionEvent:J.c,VRStageBounds:J.c,VRStageBoundsPoint:J.c,VRStageParameters:J.c,ValidityState:J.c,VideoPlaybackQuality:J.c,VideoTrack:J.c,VTTRegion:J.c,WheelEvent:J.c,WindowClient:J.c,WorkletAnimation:J.c,WorkletGlobalScope:J.c,XPathEvaluator:J.c,XPathExpression:J.c,XPathNSResolver:J.c,XPathResult:J.c,XMLSerializer:J.c,XSLTProcessor:J.c,Bluetooth:J.c,BluetoothCharacteristicProperties:J.c,BluetoothRemoteGATTServer:J.c,BluetoothRemoteGATTService:J.c,BluetoothUUID:J.c,BudgetService:J.c,Cache:J.c,DOMFileSystemSync:J.c,DirectoryEntrySync:J.c,DirectoryReaderSync:J.c,EntrySync:J.c,FileEntrySync:J.c,FileReaderSync:J.c,FileWriterSync:J.c,HTMLAllCollection:J.c,Mojo:J.c,MojoHandle:J.c,MojoInterfaceRequestEvent:J.c,MojoWatcher:J.c,NFC:J.c,PagePopupController:J.c,Report:J.c,Request:J.c,ResourceProgressEvent:J.c,Response:J.c,SubtleCrypto:J.c,USBAlternateInterface:J.c,USBConfiguration:J.c,USBConnectionEvent:J.c,USBDevice:J.c,USBEndpoint:J.c,USBInTransferResult:J.c,USBInterface:J.c,USBIsochronousInTransferPacket:J.c,USBIsochronousInTransferResult:J.c,USBIsochronousOutTransferPacket:J.c,USBIsochronousOutTransferResult:J.c,USBOutTransferResult:J.c,WorkerLocation:J.c,WorkerNavigator:J.c,Worklet:J.c,IDBCursor:J.c,IDBCursorWithValue:J.c,IDBFactory:J.c,IDBIndex:J.c,IDBKeyRange:J.c,IDBObjectStore:J.c,IDBObservation:J.c,IDBObserver:J.c,IDBObserverChanges:J.c,IDBVersionChangeEvent:J.c,SVGAngle:J.c,SVGAnimatedAngle:J.c,SVGAnimatedBoolean:J.c,SVGAnimatedEnumeration:J.c,SVGAnimatedInteger:J.c,SVGAnimatedLength:J.c,SVGAnimatedLengthList:J.c,SVGAnimatedNumber:J.c,SVGAnimatedNumberList:J.c,SVGAnimatedPreserveAspectRatio:J.c,SVGAnimatedRect:J.c,SVGAnimatedString:J.c,SVGAnimatedTransformList:J.c,SVGMatrix:J.c,SVGPoint:J.c,SVGPreserveAspectRatio:J.c,SVGRect:J.c,SVGUnitTypes:J.c,AudioListener:J.c,AudioParam:J.c,AudioProcessingEvent:J.c,AudioTrack:J.c,AudioWorkletGlobalScope:J.c,AudioWorkletProcessor:J.c,OfflineAudioCompletionEvent:J.c,PeriodicWave:J.c,WebGLActiveInfo:J.c,ANGLEInstancedArrays:J.c,ANGLE_instanced_arrays:J.c,WebGLBuffer:J.c,WebGLCanvas:J.c,WebGLColorBufferFloat:J.c,WebGLCompressedTextureASTC:J.c,WebGLCompressedTextureATC:J.c,WEBGL_compressed_texture_atc:J.c,WebGLCompressedTextureETC1:J.c,WEBGL_compressed_texture_etc1:J.c,WebGLCompressedTextureETC:J.c,WebGLCompressedTexturePVRTC:J.c,WEBGL_compressed_texture_pvrtc:J.c,WebGLCompressedTextureS3TC:J.c,WEBGL_compressed_texture_s3tc:J.c,WebGLCompressedTextureS3TCsRGB:J.c,WebGLContextEvent:J.c,WebGLDebugRendererInfo:J.c,WEBGL_debug_renderer_info:J.c,WebGLDebugShaders:J.c,WEBGL_debug_shaders:J.c,WebGLDepthTexture:J.c,WEBGL_depth_texture:J.c,WebGLDrawBuffers:J.c,WEBGL_draw_buffers:J.c,EXTsRGB:J.c,EXT_sRGB:J.c,EXTBlendMinMax:J.c,EXT_blend_minmax:J.c,EXTColorBufferFloat:J.c,EXTColorBufferHalfFloat:J.c,EXTDisjointTimerQuery:J.c,EXTDisjointTimerQueryWebGL2:J.c,EXTFragDepth:J.c,EXT_frag_depth:J.c,EXTShaderTextureLOD:J.c,EXT_shader_texture_lod:J.c,EXTTextureFilterAnisotropic:J.c,EXT_texture_filter_anisotropic:J.c,WebGLFramebuffer:J.c,WebGLGetBufferSubDataAsync:J.c,WebGLLoseContext:J.c,WebGLExtensionLoseContext:J.c,WEBGL_lose_context:J.c,OESElementIndexUint:J.c,OES_element_index_uint:J.c,OESStandardDerivatives:J.c,OES_standard_derivatives:J.c,OESTextureFloat:J.c,OES_texture_float:J.c,OESTextureFloatLinear:J.c,OES_texture_float_linear:J.c,OESTextureHalfFloat:J.c,OES_texture_half_float:J.c,OESTextureHalfFloatLinear:J.c,OES_texture_half_float_linear:J.c,OESVertexArrayObject:J.c,OES_vertex_array_object:J.c,WebGLProgram:J.c,WebGLQuery:J.c,WebGLRenderbuffer:J.c,WebGLRenderingContext:J.c,WebGL2RenderingContext:J.c,WebGLSampler:J.c,WebGLShader:J.c,WebGLShaderPrecisionFormat:J.c,WebGLSync:J.c,WebGLTexture:J.c,WebGLTimerQueryEXT:J.c,WebGLTransformFeedback:J.c,WebGLUniformLocation:J.c,WebGLVertexArrayObject:J.c,WebGLVertexArrayObjectOES:J.c,WebGL2RenderingContextBase:J.c,ArrayBuffer:A.dO,SharedArrayBuffer:A.dO,ArrayBufferView:A.eR,DataView:A.i_,Float32Array:A.i0,Float64Array:A.i1,Int16Array:A.i2,Int32Array:A.i3,Int8Array:A.i4,Uint16Array:A.i5,Uint32Array:A.i6,Uint8ClampedArray:A.eS,CanvasPixelArray:A.eS,Uint8Array:A.eT,HTMLAudioElement:A.K,HTMLBRElement:A.K,HTMLBaseElement:A.K,HTMLBodyElement:A.K,HTMLButtonElement:A.K,HTMLCanvasElement:A.K,HTMLContentElement:A.K,HTMLDListElement:A.K,HTMLDataElement:A.K,HTMLDataListElement:A.K,HTMLDetailsElement:A.K,HTMLDialogElement:A.K,HTMLDivElement:A.K,HTMLEmbedElement:A.K,HTMLFieldSetElement:A.K,HTMLHRElement:A.K,HTMLHeadElement:A.K,HTMLHeadingElement:A.K,HTMLHtmlElement:A.K,HTMLIFrameElement:A.K,HTMLImageElement:A.K,HTMLInputElement:A.K,HTMLLIElement:A.K,HTMLLabelElement:A.K,HTMLLegendElement:A.K,HTMLLinkElement:A.K,HTMLMapElement:A.K,HTMLMediaElement:A.K,HTMLMenuElement:A.K,HTMLMetaElement:A.K,HTMLMeterElement:A.K,HTMLModElement:A.K,HTMLOListElement:A.K,HTMLObjectElement:A.K,HTMLOptGroupElement:A.K,HTMLOptionElement:A.K,HTMLOutputElement:A.K,HTMLParagraphElement:A.K,HTMLParamElement:A.K,HTMLPictureElement:A.K,HTMLPreElement:A.K,HTMLProgressElement:A.K,HTMLQuoteElement:A.K,HTMLScriptElement:A.K,HTMLShadowElement:A.K,HTMLSlotElement:A.K,HTMLSourceElement:A.K,HTMLSpanElement:A.K,HTMLStyleElement:A.K,HTMLTableCaptionElement:A.K,HTMLTableCellElement:A.K,HTMLTableDataCellElement:A.K,HTMLTableHeaderCellElement:A.K,HTMLTableColElement:A.K,HTMLTableElement:A.K,HTMLTableRowElement:A.K,HTMLTableSectionElement:A.K,HTMLTemplateElement:A.K,HTMLTimeElement:A.K,HTMLTitleElement:A.K,HTMLTrackElement:A.K,HTMLUListElement:A.K,HTMLUnknownElement:A.K,HTMLVideoElement:A.K,HTMLDirectoryElement:A.K,HTMLFontElement:A.K,HTMLFrameElement:A.K,HTMLFrameSetElement:A.K,HTMLMarqueeElement:A.K,HTMLElement:A.K,AccessibleNodeList:A.fU,HTMLAnchorElement:A.fV,HTMLAreaElement:A.fW,Blob:A.el,CDATASection:A.c2,CharacterData:A.c2,Comment:A.c2,ProcessingInstruction:A.c2,Text:A.c2,CSSPerspective:A.hc,CSSCharsetRule:A.aj,CSSConditionRule:A.aj,CSSFontFaceRule:A.aj,CSSGroupingRule:A.aj,CSSImportRule:A.aj,CSSKeyframeRule:A.aj,MozCSSKeyframeRule:A.aj,WebKitCSSKeyframeRule:A.aj,CSSKeyframesRule:A.aj,MozCSSKeyframesRule:A.aj,WebKitCSSKeyframesRule:A.aj,CSSMediaRule:A.aj,CSSNamespaceRule:A.aj,CSSPageRule:A.aj,CSSRule:A.aj,CSSStyleRule:A.aj,CSSSupportsRule:A.aj,CSSViewportRule:A.aj,CSSStyleDeclaration:A.dx,MSStyleCSSProperties:A.dx,CSS2Properties:A.dx,CSSImageValue:A.b8,CSSKeywordValue:A.b8,CSSNumericValue:A.b8,CSSPositionValue:A.b8,CSSResourceValue:A.b8,CSSUnitValue:A.b8,CSSURLImageValue:A.b8,CSSStyleValue:A.b8,CSSMatrixComponent:A.bP,CSSRotation:A.bP,CSSScale:A.bP,CSSSkew:A.bP,CSSTranslation:A.bP,CSSTransformComponent:A.bP,CSSTransformValue:A.hd,CSSUnparsedValue:A.he,DataTransferItemList:A.hh,DOMException:A.hj,ClientRectList:A.er,DOMRectList:A.er,DOMRectReadOnly:A.es,DOMStringList:A.hk,DOMTokenList:A.hl,MathMLElement:A.I,SVGAElement:A.I,SVGAnimateElement:A.I,SVGAnimateMotionElement:A.I,SVGAnimateTransformElement:A.I,SVGAnimationElement:A.I,SVGCircleElement:A.I,SVGClipPathElement:A.I,SVGDefsElement:A.I,SVGDescElement:A.I,SVGDiscardElement:A.I,SVGEllipseElement:A.I,SVGFEBlendElement:A.I,SVGFEColorMatrixElement:A.I,SVGFEComponentTransferElement:A.I,SVGFECompositeElement:A.I,SVGFEConvolveMatrixElement:A.I,SVGFEDiffuseLightingElement:A.I,SVGFEDisplacementMapElement:A.I,SVGFEDistantLightElement:A.I,SVGFEFloodElement:A.I,SVGFEFuncAElement:A.I,SVGFEFuncBElement:A.I,SVGFEFuncGElement:A.I,SVGFEFuncRElement:A.I,SVGFEGaussianBlurElement:A.I,SVGFEImageElement:A.I,SVGFEMergeElement:A.I,SVGFEMergeNodeElement:A.I,SVGFEMorphologyElement:A.I,SVGFEOffsetElement:A.I,SVGFEPointLightElement:A.I,SVGFESpecularLightingElement:A.I,SVGFESpotLightElement:A.I,SVGFETileElement:A.I,SVGFETurbulenceElement:A.I,SVGFilterElement:A.I,SVGForeignObjectElement:A.I,SVGGElement:A.I,SVGGeometryElement:A.I,SVGGraphicsElement:A.I,SVGImageElement:A.I,SVGLineElement:A.I,SVGLinearGradientElement:A.I,SVGMarkerElement:A.I,SVGMaskElement:A.I,SVGMetadataElement:A.I,SVGPathElement:A.I,SVGPatternElement:A.I,SVGPolygonElement:A.I,SVGPolylineElement:A.I,SVGRadialGradientElement:A.I,SVGRectElement:A.I,SVGScriptElement:A.I,SVGSetElement:A.I,SVGStopElement:A.I,SVGStyleElement:A.I,SVGElement:A.I,SVGSVGElement:A.I,SVGSwitchElement:A.I,SVGSymbolElement:A.I,SVGTSpanElement:A.I,SVGTextContentElement:A.I,SVGTextElement:A.I,SVGTextPathElement:A.I,SVGTextPositioningElement:A.I,SVGTitleElement:A.I,SVGUseElement:A.I,SVGViewElement:A.I,SVGGradientElement:A.I,SVGComponentTransferFunctionElement:A.I,SVGFEDropShadowElement:A.I,SVGMPathElement:A.I,Element:A.I,AbsoluteOrientationSensor:A.v,Accelerometer:A.v,AccessibleNode:A.v,AmbientLightSensor:A.v,Animation:A.v,ApplicationCache:A.v,DOMApplicationCache:A.v,OfflineResourceList:A.v,BackgroundFetchRegistration:A.v,BatteryManager:A.v,BroadcastChannel:A.v,CanvasCaptureMediaStreamTrack:A.v,DedicatedWorkerGlobalScope:A.v,EventSource:A.v,FileReader:A.v,FontFaceSet:A.v,Gyroscope:A.v,XMLHttpRequest:A.v,XMLHttpRequestEventTarget:A.v,XMLHttpRequestUpload:A.v,LinearAccelerationSensor:A.v,Magnetometer:A.v,MediaDevices:A.v,MediaKeySession:A.v,MediaQueryList:A.v,MediaRecorder:A.v,MediaSource:A.v,MediaStream:A.v,MediaStreamTrack:A.v,MessagePort:A.v,MIDIAccess:A.v,MIDIInput:A.v,MIDIOutput:A.v,MIDIPort:A.v,NetworkInformation:A.v,Notification:A.v,OffscreenCanvas:A.v,OrientationSensor:A.v,PaymentRequest:A.v,Performance:A.v,PermissionStatus:A.v,PresentationAvailability:A.v,PresentationConnection:A.v,PresentationConnectionList:A.v,PresentationRequest:A.v,RelativeOrientationSensor:A.v,RemotePlayback:A.v,RTCDataChannel:A.v,DataChannel:A.v,RTCDTMFSender:A.v,RTCPeerConnection:A.v,webkitRTCPeerConnection:A.v,mozRTCPeerConnection:A.v,ScreenOrientation:A.v,Sensor:A.v,ServiceWorker:A.v,ServiceWorkerContainer:A.v,ServiceWorkerGlobalScope:A.v,ServiceWorkerRegistration:A.v,SharedWorker:A.v,SharedWorkerGlobalScope:A.v,SpeechRecognition:A.v,webkitSpeechRecognition:A.v,SpeechSynthesis:A.v,SpeechSynthesisUtterance:A.v,VR:A.v,VRDevice:A.v,VRDisplay:A.v,VRSession:A.v,VisualViewport:A.v,WebSocket:A.v,Window:A.v,DOMWindow:A.v,Worker:A.v,WorkerGlobalScope:A.v,WorkerPerformance:A.v,BluetoothDevice:A.v,BluetoothRemoteGATTCharacteristic:A.v,Clipboard:A.v,MojoInterfaceInterceptor:A.v,USB:A.v,IDBDatabase:A.v,IDBOpenDBRequest:A.v,IDBVersionChangeRequest:A.v,IDBRequest:A.v,IDBTransaction:A.v,AnalyserNode:A.v,RealtimeAnalyserNode:A.v,AudioBufferSourceNode:A.v,AudioDestinationNode:A.v,AudioNode:A.v,AudioScheduledSourceNode:A.v,AudioWorkletNode:A.v,BiquadFilterNode:A.v,ChannelMergerNode:A.v,AudioChannelMerger:A.v,ChannelSplitterNode:A.v,AudioChannelSplitter:A.v,ConstantSourceNode:A.v,ConvolverNode:A.v,DelayNode:A.v,DynamicsCompressorNode:A.v,GainNode:A.v,AudioGainNode:A.v,IIRFilterNode:A.v,MediaElementAudioSourceNode:A.v,MediaStreamAudioDestinationNode:A.v,MediaStreamAudioSourceNode:A.v,OscillatorNode:A.v,Oscillator:A.v,PannerNode:A.v,AudioPannerNode:A.v,webkitAudioPannerNode:A.v,ScriptProcessorNode:A.v,JavaScriptAudioNode:A.v,StereoPannerNode:A.v,WaveShaperNode:A.v,EventTarget:A.v,File:A.bj,FileList:A.ho,FileWriter:A.hp,HTMLFormElement:A.hB,Gamepad:A.bl,History:A.hG,HTMLCollection:A.cW,HTMLFormControlsCollection:A.cW,HTMLOptionsCollection:A.cW,Location:A.hV,MediaList:A.hW,MIDIInputMap:A.hX,MIDIOutputMap:A.hY,MimeType:A.bo,MimeTypeArray:A.hZ,Document:A.a2,DocumentFragment:A.a2,HTMLDocument:A.a2,ShadowRoot:A.a2,XMLDocument:A.a2,Attr:A.a2,DocumentType:A.a2,Node:A.a2,NodeList:A.eU,RadioNodeList:A.eU,Plugin:A.bp,PluginArray:A.ie,RTCStatsReport:A.ik,HTMLSelectElement:A.im,SourceBuffer:A.bq,SourceBufferList:A.io,SpeechGrammar:A.br,SpeechGrammarList:A.ip,SpeechRecognitionResult:A.bs,Storage:A.it,CSSStyleSheet:A.b4,StyleSheet:A.b4,HTMLTextAreaElement:A.f6,TextTrack:A.bt,TextTrackCue:A.b5,VTTCue:A.b5,TextTrackCueList:A.iD,TextTrackList:A.iE,TimeRanges:A.iG,Touch:A.bu,TouchList:A.iI,TrackDefaultList:A.iJ,URL:A.iR,VideoTrackList:A.iT,CSSRuleList:A.j2,ClientRect:A.fc,DOMRect:A.fc,GamepadList:A.jf,NamedNodeMap:A.fo,MozNamedAttrMap:A.fo,SpeechRecognitionResultList:A.jD,StyleSheetList:A.jL,SVGLength:A.by,SVGLengthList:A.hR,SVGNumber:A.bB,SVGNumberList:A.i8,SVGPointList:A.ig,SVGStringList:A.iv,SVGTransform:A.bD,SVGTransformList:A.iK,AudioBuffer:A.fZ,AudioParamMap:A.h_,AudioTrackList:A.h0,AudioContext:A.cv,webkitAudioContext:A.cv,BaseAudioContext:A.cv,OfflineAudioContext:A.i9})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AbortPaymentEvent:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationEvent:true,AnimationPlaybackEvent:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,ApplicationCacheErrorEvent:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BackgroundFetchedEvent:true,BarProp:true,BarcodeDetector:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanMakePaymentEvent:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,External:true,FaceDetector:true,FederatedCredential:true,FetchEvent:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FontFaceSource:true,ForeignFetchEvent:true,FormData:true,GamepadButton:true,GamepadEvent:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,HashChangeEvent:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyboardEvent:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaSettingsRange:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,NotificationEvent:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PageTransitionEvent:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PointerEvent:true,PopStateEvent:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PresentationReceiver:true,ProgressEvent:true,PromiseRejectionEvent:true,PublicKeyCredential:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCPeerConnectionIceEvent:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,RTCTrackEvent:true,Screen:true,ScrollState:true,ScrollTimeline:true,SecurityPolicyViolationEvent:true,Selection:true,SensorErrorEvent:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StaticRange:true,StorageEvent:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncEvent:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextEvent:true,TextMetrics:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDeviceEvent:true,VRDisplayCapabilities:true,VRDisplayEvent:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRSessionEvent:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoInterfaceRequestEvent:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioProcessingEvent:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,VideoTrackList:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true})
A.aX.$nativeSuperclassTag="ArrayBufferView"
A.fp.$nativeSuperclassTag="ArrayBufferView"
A.fq.$nativeSuperclassTag="ArrayBufferView"
A.eQ.$nativeSuperclassTag="ArrayBufferView"
A.fr.$nativeSuperclassTag="ArrayBufferView"
A.fs.$nativeSuperclassTag="ArrayBufferView"
A.bA.$nativeSuperclassTag="ArrayBufferView"
A.fu.$nativeSuperclassTag="EventTarget"
A.fv.$nativeSuperclassTag="EventTarget"
A.fy.$nativeSuperclassTag="EventTarget"
A.fz.$nativeSuperclassTag="EventTarget"})()
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
var s=A.xU
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
