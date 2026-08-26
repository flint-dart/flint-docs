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
if(a[b]!==s){A.yu(b)}a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a,b){if(b!=null)A.d(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s){convertToFastObject(a[s])}}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.qE(b)
return new s(c,this)}:function(){if(s===null)s=A.qE(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.qE(a).prototype
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
qI(a,b,c,d){return{i:a,p:b,e:c,x:d}},
pK(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.qG==null){A.y9()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.n(A.rK("Return interceptor for "+A.Z(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.oE
if(o==null)o=$.oE=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.yg(a)
if(p!=null)return p
if(typeof a=="function")return B.k9
s=Object.getPrototypeOf(a)
if(s==null)return B.du
if(s===Object.prototype)return B.du
if(typeof q=="function"){o=$.oE
if(o==null)o=$.oE=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.by,enumerable:false,writable:true,configurable:true})
return B.by}return B.by},
rl(a,b){if(a<0||a>4294967295)throw A.n(A.aU(a,0,4294967295,"length",null))
return J.vw(new Array(a),b)},
rm(a,b){if(a<0)throw A.n(A.c5("Length must be a non-negative integer: "+a,null))
return A.d(new Array(a),b.h("a2<0>"))},
vw(a,b){var s=A.d(a,b.h("a2<0>"))
s.$flags=1
return s},
rn(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
ro(a,b){var s,r
for(s=a.length;b<s;){r=a.charCodeAt(b)
if(r!==32&&r!==13&&!J.rn(r))break;++b}return b},
vx(a,b){var s,r,q
for(s=a.length;b>0;b=r){r=b-1
if(!(r<s))return A.v(a,r)
q=a.charCodeAt(r)
if(q!==32&&q!==13&&!J.rn(q))break}return b},
bl(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.eJ.prototype
return J.hR.prototype}if(typeof a=="string")return J.d1.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.hQ.prototype
if(Array.isArray(a))return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
if(typeof a=="symbol")return J.dM.prototype
if(typeof a=="bigint")return J.dL.prototype
return a}if(a instanceof A.T)return a
return J.pK(a)},
ao(a){if(typeof a=="string")return J.d1.prototype
if(a==null)return a
if(Array.isArray(a))return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
if(typeof a=="symbol")return J.dM.prototype
if(typeof a=="bigint")return J.dL.prototype
return a}if(a instanceof A.T)return a
return J.pK(a)},
bQ(a){if(a==null)return a
if(Array.isArray(a))return J.a2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
if(typeof a=="symbol")return J.dM.prototype
if(typeof a=="bigint")return J.dL.prototype
return a}if(a instanceof A.T)return a
return J.pK(a)},
y4(a){if(typeof a=="string")return J.d1.prototype
if(a==null)return a
if(!(a instanceof A.T))return J.e1.prototype
return a},
dj(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.cj.prototype
if(typeof a=="symbol")return J.dM.prototype
if(typeof a=="bigint")return J.dL.prototype
return a}if(a instanceof A.T)return a
return J.pK(a)},
ac(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bl(a).O(a,b)},
P(a,b){if(typeof b==="number")if(Array.isArray(a)||typeof a=="string"||A.yd(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ao(a).j(a,b)},
au(a,b,c){return J.bQ(a).i(a,b,c)},
v5(a,b){return J.bQ(a).u(a,b)},
r5(a,b){return J.y4(a).ed(a,b)},
r6(a,b){return J.bQ(a).cE(a,b)},
b_(a,b,c){return J.dj(a).aU(a,b,c)},
r7(a,b){return J.bQ(a).I(a,b)},
q6(a,b){return J.dj(a).N(a,b)},
ek(a){return J.dj(a).ga_(a)},
fY(a){return J.bQ(a).gF(a)},
bN(a){return J.bl(a).gL(a)},
el(a){return J.ao(a).gB(a)},
dm(a){return J.ao(a).gM(a)},
b6(a){return J.bQ(a).gv(a)},
r8(a){return J.dj(a).gR(a)},
bm(a){return J.ao(a).gk(a)},
v6(a){return J.bl(a).gU(a)},
q7(a){return J.dj(a).ga2(a)},
kh(a,b,c){return J.bQ(a).ab(a,b,c)},
cQ(a,b,c,d){return J.bQ(a).cR(a,b,c,d)},
v7(a,b){return J.bQ(a).T(a,b)},
t(a){return J.bl(a).l(a)},
v8(a,b){return J.bQ(a).aH(a,b)},
cx(a,b){return J.bQ(a).eF(a,b)},
dI:function dI(){},
hQ:function hQ(){},
eK:function eK(){},
c:function c(){},
cE:function cE(){},
ii:function ii(){},
e1:function e1(){},
cj:function cj(){},
dL:function dL(){},
dM:function dM(){},
a2:function a2(a){this.$ti=a},
hP:function hP(){},
mi:function mi(a){this.$ti=a},
cS:function cS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
eL:function eL(){},
eJ:function eJ(){},
hR:function hR(){},
d1:function d1(){}},A={qa:function qa(){},
re(a,b,c){if(t.W.b(a))return new A.fg(a,b.h("@<0>").C(c).h("fg<1,2>"))
return new A.cV(a,b.h("@<0>").C(c).h("cV<1,2>"))},
rr(a){return new A.hV("Field '"+a+"' has been assigned during initialization.")},
pM(a){var s,r=a^48
if(r<=9)return r
s=a|32
if(97<=s&&s<=102)return s-87
return-1},
cn(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
nX(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
fS(a,b,c){return a},
qH(a){var s,r
for(s=$.bM.length,r=0;r<s;++r)if(a===$.bM[r])return!0
return!1},
qj(a,b,c,d){A.f1(b,"start")
if(c!=null){A.f1(c,"end")
if(b>c)A.ce(A.aU(b,0,c,"start",null))}return new A.f6(a,b,c,d.h("f6<0>"))},
bq(a,b,c,d){if(t.W.b(a))return new A.cZ(a,b,c.h("@<0>").C(d).h("cZ<1,2>"))
return new A.aT(a,b,c.h("@<0>").C(d).h("aT<1,2>"))},
iE(a,b,c){var s="takeCount"
A.v9(b,s,t.S)
A.f1(b,s)
if(t.W.b(a))return new A.ey(a,b,c.h("ey<0>"))
return new A.d7(a,b,c.h("d7<0>"))},
dJ(){return new A.d4("No element")},
e5:function e5(){},
eq:function eq(a,b){this.a=a
this.$ti=b},
cV:function cV(a,b){this.a=a
this.$ti=b},
fg:function fg(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b){this.a=a
this.$ti=b},
l_:function l_(a,b){this.a=a
this.b=b},
kZ:function kZ(a){this.a=a},
hV:function hV(a){this.a=a},
dx:function dx(a){this.a=a},
nw:function nw(){},
E:function E(){},
ax:function ax(){},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aT:function aT(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
af:function af(a,b,c){this.a=a
this.b=b
this.$ti=c},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
d8:function d8(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a,b,c){this.a=a
this.b=b
this.$ti=c},
f7:function f7(a,b,c){this.a=a
this.b=b
this.$ti=c},
d9:function d9(a,b){this.a=a
this.$ti=b},
fc:function fc(a,b){this.a=a
this.$ti=b},
aA:function aA(){},
cH:function cH(){},
e2:function e2(){},
hf(a,b,c){var s,r,q,p,o,n,m,l=A.Q(a),k=A.eR(new A.ck(a,l.h("ck<1>")),!0,b),j=k.length,i=0
for(;;){if(!(i<j)){s=!0
break}r=k[i]
if(typeof r!="string"||"__proto__"===r){s=!1
break}++i}if(s){q={}
for(p=0,i=0;i<k.length;k.length===j||(0,A.aJ)(k),++i,p=o){r=k[i]
c.a(a.j(0,r))
o=p+1
q[r]=p}n=A.eR(new A.aS(a,l.h("aS<2>")),!0,c)
m=new A.a9(q,n,b.h("@<0>").C(c).h("a9<1,2>"))
m.$keys=k
return m}return new A.et(A.qf(a,b,c),b.h("@<0>").C(c).h("et<1,2>"))},
rg(){throw A.n(A.U("Cannot modify unmodifiable Map"))},
tT(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
yd(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
Z(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.t(a)
return s},
f_(a){var s,r=$.rw
if(r==null)r=$.rw=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
rx(a,b){var s,r,q,p,o,n=null,m=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(m==null)return n
if(3>=m.length)return A.v(m,3)
s=m[3]
if(b==null){if(s!=null)return parseInt(a,10)
if(m[2]!=null)return parseInt(a,16)
return n}if(b<2||b>36)throw A.n(A.aU(b,2,36,"radix",n))
if(b===10&&s!=null)return parseInt(a,10)
if(b<10||s==null){r=b<=10?47+b:86+b
q=m[1]
for(p=q.length,o=0;o<p;++o)if((q.charCodeAt(o)|32)>r)return n}return parseInt(a,b)},
im(a){var s,r,q,p
if(a instanceof A.T)return A.bL(A.aI(a),null)
s=J.bl(a)
if(s===B.k8||s===B.ka||t.ak.b(a)){r=B.bG(a)
if(r!=="Object"&&r!=="")return r
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string"&&p!=="Object"&&p!=="")return p}}return A.bL(A.aI(a),null)},
ry(a){var s,r,q
if(a==null||typeof a=="number"||A.p5(a))return J.t(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.cz)return a.l(0)
if(a instanceof A.bJ)return a.e6(!0)
s=$.uK()
for(r=0;r<1;++r){q=s[r].iG(a)
if(q!=null)return q}return"Instance of '"+A.im(a)+"'"},
vA(){return Date.now()},
vJ(){var s,r
if($.mT!==0)return
$.mT=1000
if(typeof window=="undefined")return
s=window
if(s==null)return
if(!!s.dartUseDateNowForTicks)return
r=s.performance
if(r==null)return
if(typeof r.now!="function")return
$.mT=1e6
$.io=new A.mS(r)},
vK(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
ay(a){var s
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.w.cu(s,10)|55296)>>>0,s&1023|56320)}}throw A.n(A.aU(a,0,1114111,null,null))},
bH(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
vI(a){return a.c?A.bH(a).getUTCFullYear()+0:A.bH(a).getFullYear()+0},
vG(a){return a.c?A.bH(a).getUTCMonth()+1:A.bH(a).getMonth()+1},
vC(a){return a.c?A.bH(a).getUTCDate()+0:A.bH(a).getDate()+0},
vD(a){return a.c?A.bH(a).getUTCHours()+0:A.bH(a).getHours()+0},
vF(a){return a.c?A.bH(a).getUTCMinutes()+0:A.bH(a).getMinutes()+0},
vH(a){return a.c?A.bH(a).getUTCSeconds()+0:A.bH(a).getSeconds()+0},
vE(a){return a.c?A.bH(a).getUTCMilliseconds()+0:A.bH(a).getMilliseconds()+0},
vB(a){var s=a.$thrownJsError
if(s==null)return null
return A.cu(s)},
rz(a,b){var s
if(a.$thrownJsError==null){s=new Error()
A.aP(a,s)
a.$thrownJsError=s
s.stack=b.l(0)}},
y7(a){throw A.n(A.tw(a))},
v(a,b){if(a==null)J.bm(a)
throw A.n(A.pI(a,b))},
pI(a,b){var s,r="index"
if(!A.tj(b))return new A.bS(!0,b,r,null)
s=A.b4(J.bm(a))
if(b<0||b>=s)return A.aF(b,s,a,r)
return A.vL(b,r)},
y0(a,b,c){if(a>c)return A.aU(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aU(b,a,c,"end",null)
return new A.bS(!0,b,"end",null)},
tw(a){return new A.bS(!0,a,null,null)},
n(a){return A.aP(a,new Error())},
aP(a,b){var s
if(a==null)a=new A.cp()
b.dartException=a
s=A.yw
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:s})
b.name=""}else b.toString=s
return b},
yw(){return J.t(this.dartException)},
ce(a,b){throw A.aP(a,b==null?new Error():b)},
by(a,b,c){var s
if(b==null)b=0
if(c==null)c=0
s=Error()
A.ce(A.wY(a,b,c),s)},
wY(a,b,c){var s,r,q,p,o,n,m,l,k
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
return new A.fb("'"+s+"': Cannot "+o+" "+l+k+n)},
aJ(a){throw A.n(A.aW(a))},
cq(a){var s,r,q,p,o,n
a=A.tM(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.d([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.o6(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
o7(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
rJ(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
qb(a,b){var s=b==null,r=s?null:b.method
return new A.hS(a,r,s?null:b.receiver)},
aQ(a){var s
if(a==null)return new A.mP(a)
if(a instanceof A.ez){s=a.a
return A.cN(a,s==null?A.ab(s):s)}if(typeof a!=="object")return a
if("dartException" in a)return A.cN(a,a.dartException)
return A.xL(a)},
cN(a,b){if(t.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
xL(a){var s,r,q,p,o,n,m,l,k,j,i,h,g
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.w.cu(r,16)&8191)===10)switch(q){case 438:return A.cN(a,A.qb(A.Z(s)+" (Error "+q+")",null))
case 445:case 5007:A.Z(s)
return A.cN(a,new A.eY())}}if(a instanceof TypeError){p=$.u7()
o=$.u8()
n=$.u9()
m=$.ua()
l=$.ud()
k=$.ue()
j=$.uc()
$.ub()
i=$.ug()
h=$.uf()
g=p.a6(s)
if(g!=null)return A.cN(a,A.qb(A.X(s),g))
else{g=o.a6(s)
if(g!=null){g.method="call"
return A.cN(a,A.qb(A.X(s),g))}else if(n.a6(s)!=null||m.a6(s)!=null||l.a6(s)!=null||k.a6(s)!=null||j.a6(s)!=null||m.a6(s)!=null||i.a6(s)!=null||h.a6(s)!=null){A.X(s)
return A.cN(a,new A.eY())}}return A.cN(a,new A.iT(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.f4()
s=function(b){try{return String(b)}catch(f){}return null}(a)
return A.cN(a,new A.bS(!1,null,null,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.f4()
return a},
cu(a){var s
if(a instanceof A.ez)return a.b
if(a==null)return new A.fA(a)
s=a.$cachedTrace
if(s!=null)return s
s=new A.fA(a)
if(typeof a==="object")a.$cachedTrace=s
return s},
fU(a){if(a==null)return J.bN(a)
if(typeof a=="object")return A.f_(a)
return J.bN(a)},
xV(a){if(typeof a=="number")return B.a4.gL(a)
if(a instanceof A.k_)return A.f_(a)
if(a instanceof A.bJ)return a.gL(a)
return A.fU(a)},
y2(a,b){var s,r,q,p=a.length
for(s=0;s<p;s=q){r=s+1
q=r+1
b.i(0,a[s],a[r])}return b},
y3(a,b){var s,r=a.length
for(s=0;s<r;++s)b.u(0,a[s])
return b},
xc(a,b,c,d,e,f){t.Z.a(a)
switch(A.b4(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.n(new A.om("Unsupported number of arguments for wrapped closure"))},
eg(a,b){var s=a.$identity
if(!!s)return s
s=A.xW(a,b)
a.$identity=s
return s},
xW(a,b){var s
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
return function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.xc)},
vh(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.ix().constructor.prototype):Object.create(new A.ds(null,null).constructor.prototype)
s.$initialize=s.constructor
r=h?function static_tear_off(){this.$initialize()}:function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.rf(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.vd(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.rf(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
vd(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.n("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.vb)}throw A.n("Error in functionType of tearoff")},
ve(a,b,c,d){var s=A.rd
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
rf(a,b,c,d){if(c)return A.vg(a,b,d)
return A.ve(b.length,d,a,b)},
vf(a,b,c,d){var s=A.rd,r=A.vc
switch(b?-1:a){case 0:throw A.n(new A.ir("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
vg(a,b,c){var s,r
if($.rb==null)$.rb=A.ra("interceptor")
if($.rc==null)$.rc=A.ra("receiver")
s=b.length
r=A.vf(s,c,a,b)
return r},
qE(a){return A.vh(a)},
vb(a,b){return A.fJ(v.typeUniverse,A.aI(a.a),b)},
rd(a){return a.a},
vc(a){return a.b},
ra(a){var s,r,q,p=new A.ds("receiver","interceptor"),o=Object.getOwnPropertyNames(p)
o.$flags=1
s=o
for(o=s.length,r=0;r<o;++r){q=s[r]
if(p[q]===a)return q}throw A.n(A.c5("Field name "+a+" not found.",null))},
y5(a){return v.getIsolateTag(a)},
AO(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
yg(a){var s,r,q,p,o,n=A.X($.tH.$1(a)),m=$.pJ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pQ[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.bK($.tv.$2(a,n))
if(q!=null){m=$.pJ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.pQ[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.pT(s)
$.pJ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.pQ[n]=s
return s}if(p==="-"){o=A.pT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.tK(a,s)
if(p==="*")throw A.n(A.rK(n))
if(v.leafTags[n]===true){o=A.pT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.tK(a,s)},
tK(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.qI(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
pT(a){return J.qI(a,!1,null,!!a.$ia6)},
yi(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.pT(s)
else return J.qI(s,c,null,null)},
y9(){if(!0===$.qG)return
$.qG=!0
A.ya()},
ya(){var s,r,q,p,o,n,m,l
$.pJ=Object.create(null)
$.pQ=Object.create(null)
A.y8()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.tL.$1(o)
if(n!=null){m=A.yi(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
y8(){var s,r,q,p,o,n,m=B.e_()
m=A.ef(B.e0,A.ef(B.e1,A.ef(B.bH,A.ef(B.bH,A.ef(B.e2,A.ef(B.e3,A.ef(B.e4(B.bG),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(Array.isArray(s))for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.tH=new A.pN(p)
$.tv=new A.pO(o)
$.tL=new A.pP(n)},
ef(a,b){return a(b)||b},
wi(a,b){var s,r
for(s=0;s<a.length;++s){r=a[s]
if(!(s<b.length))return A.v(b,s)
if(!J.ac(r,b[s]))return!1}return!0},
xZ(a,b){var s=b.length,r=v.rttc[""+s+";"+a]
if(r==null)return null
if(s===0)return r
if(s===r.length)return r.apply(null,b)
return r(b)},
rp(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=function(g,h){try{return new RegExp(g,h)}catch(n){return n}}(a,s+r+q+p+f)
if(o instanceof RegExp)return o
throw A.n(A.b0("Illegal RegExp pattern ("+String(o)+")",a,null))},
yn(a,b,c){var s=a.indexOf(b,c)
return s>=0},
qF(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
yq(a,b,c,d){var s=b.dA(a,d)
if(s==null)return a
return A.tP(a,s.b.index,s.gaY(0),c)},
tM(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
cO(a,b,c){var s
if(typeof b=="string")return A.yp(a,b,c)
if(b instanceof A.dK){s=b.gdO()
s.lastIndex=0
return a.replace(s,A.qF(c))}return A.yo(a,b,c)},
yo(a,b,c){var s,r,q,p
for(s=J.r5(b,a),s=s.gv(s),r=0,q="";s.m();){p=s.gq(s)
q=q+a.substring(r,p.gbX(p))+c
r=p.gaY(p)}s=q+a.substring(r)
return s.charCodeAt(0)==0?s:s},
yp(a,b,c){var s,r,q
if(b===""){if(a==="")return c
s=a.length
for(r=c,q=0;q<s;++q)r=r+a[q]+c
return r.charCodeAt(0)==0?r:r}if(a.indexOf(b,0)<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(A.tM(b),"g"),A.qF(c))},
yr(a,b,c,d){return d===0?a.replace(b.b,A.qF(c)):A.yq(a,b,c,d)},
tP(a,b,c,d){return a.substring(0,b)+d+a.substring(c)},
ag:function ag(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(a){this.a=a},
et:function et(a,b){this.a=a
this.$ti=b},
es:function es(){},
l2:function l2(a,b,c){this.a=a
this.b=b
this.c=c},
a9:function a9(a,b,c){this.a=a
this.b=b
this.$ti=c},
dd:function dd(a,b){this.a=a
this.$ti=b},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
dy:function dy(){},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b){this.a=a
this.$ti=b},
mS:function mS(a){this.a=a},
f3:function f3(){},
o6:function o6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eY:function eY(){},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
mP:function mP(a){this.a=a},
ez:function ez(a,b){this.a=a
this.b=b},
fA:function fA(a){this.a=a
this.b=null},
cz:function cz(){},
hb:function hb(){},
hc:function hc(){},
iF:function iF(){},
ix:function ix(){},
ds:function ds(a,b){this.a=a
this.b=b},
ir:function ir(a){this.a=a},
bZ:function bZ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
mj:function mj(a){this.a=a},
mm:function mm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ck:function ck(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aS:function aS(a,b){this.a=a
this.$ti=b},
d2:function d2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
ah:function ah(a,b){this.a=a
this.$ti=b},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eM:function eM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
pN:function pN(a){this.a=a},
pO:function pO(a){this.a=a},
pP:function pP(a){this.a=a},
bJ:function bJ(){},
dg:function dg(){},
e6:function e6(){},
e7:function e7(){},
dK:function dK(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
fr:function fr(a){this.b=a},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c},
j2:function j2(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
f5:function f5(a,b){this.a=a
this.c=b},
jN:function jN(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
wZ(a){return a},
vy(a){return new Uint8Array(a)},
ct(a,b,c){if(a>>>0!==a||a>=c)throw A.n(A.pI(b,a))},
wV(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.n(A.y0(a,b,c))
return b},
dS:function dS(){},
eU:function eU(){},
i4:function i4(){},
b1:function b1(){},
eT:function eT(){},
bF:function bF(){},
i5:function i5(){},
i6:function i6(){},
i7:function i7(){},
i8:function i8(){},
i9:function i9(){},
ia:function ia(){},
ib:function ib(){},
eV:function eV(){},
eW:function eW(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
qh(a,b){var s=b.c
return s==null?b.c=A.fH(a,"bo",[b.x]):s},
rB(a){var s=a.w
if(s===6||s===7)return A.rB(a.x)
return s===11||s===12},
vO(a){return a.as},
yj(a,b){var s,r=b.length
for(s=0;s<r;++s)if(!a[s].b(b[s]))return!1
return!0},
aE(a){return A.oP(v.typeUniverse,a,!1)},
dh(a1,a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=a2.w
switch(a0){case 5:case 1:case 2:case 3:case 4:return a2
case 6:s=a2.x
r=A.dh(a1,s,a3,a4)
if(r===s)return a2
return A.t_(a1,r,!0)
case 7:s=a2.x
r=A.dh(a1,s,a3,a4)
if(r===s)return a2
return A.rZ(a1,r,!0)
case 8:q=a2.y
p=A.ee(a1,q,a3,a4)
if(p===q)return a2
return A.fH(a1,a2.x,p)
case 9:o=a2.x
n=A.dh(a1,o,a3,a4)
m=a2.y
l=A.ee(a1,m,a3,a4)
if(n===o&&l===m)return a2
return A.qs(a1,n,l)
case 10:k=a2.x
j=a2.y
i=A.ee(a1,j,a3,a4)
if(i===j)return a2
return A.t0(a1,k,i)
case 11:h=a2.x
g=A.dh(a1,h,a3,a4)
f=a2.y
e=A.xG(a1,f,a3,a4)
if(g===h&&e===f)return a2
return A.rY(a1,g,e)
case 12:d=a2.y
a4+=d.length
c=A.ee(a1,d,a3,a4)
o=a2.x
n=A.dh(a1,o,a3,a4)
if(c===d&&n===o)return a2
return A.qt(a1,n,c,!0)
case 13:b=a2.x
if(b<a4)return a2
a=a3[b-a4]
if(a==null)return a2
return a
default:throw A.n(A.h2("Attempted to substitute unexpected RTI kind "+a0))}},
ee(a,b,c,d){var s,r,q,p,o=b.length,n=A.oY(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.dh(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
xH(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.oY(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.dh(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
xG(a,b,c,d){var s,r=b.a,q=A.ee(a,r,c,d),p=b.b,o=A.ee(a,p,c,d),n=b.c,m=A.xH(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.jj()
s.a=q
s.b=o
s.c=m
return s},
d(a,b){a[v.arrayRti]=b
return a},
tA(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.y6(s)
return a.$S()}return null},
yc(a,b){var s
if(A.rB(b))if(a instanceof A.cz){s=A.tA(a)
if(s!=null)return s}return A.aI(a)},
aI(a){if(a instanceof A.T)return A.Q(a)
if(Array.isArray(a))return A.az(a)
return A.qA(J.bl(a))},
az(a){var s=a[v.arrayRti],r=t.q
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
Q(a){var s=a.$ti
return s!=null?s:A.qA(a)},
qA(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.xa(a,s)},
xa(a,b){var s=a instanceof A.cz?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,r=A.ws(v.typeUniverse,s.name)
b.$ccache=r
return r},
y6(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.oP(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
pL(a){return A.di(A.Q(a))},
qC(a){var s
if(a instanceof A.bJ)return A.y1(a.$r,a.bn())
s=a instanceof A.cz?A.tA(a):null
if(s!=null)return s
if(t.dm.b(a))return J.v6(a).a
if(Array.isArray(a))return A.az(a)
return A.aI(a)},
di(a){var s=a.r
return s==null?a.r=new A.k_(a):s},
y1(a,b){var s,r,q=b,p=q.length
if(p===0)return t.bQ
if(0>=p)return A.v(q,0)
s=A.fJ(v.typeUniverse,A.qC(q[0]),"@<0>")
for(r=1;r<p;++r){if(!(r<q.length))return A.v(q,r)
s=A.t1(v.typeUniverse,s,A.qC(q[r]))}return A.fJ(v.typeUniverse,s,a)},
c3(a){return A.di(A.oP(v.typeUniverse,a,!1))},
x9(a){var s=this
s.b=A.xD(s)
return s.b(a)},
xD(a){var s,r,q,p,o
if(a===t.K)return A.xi
if(A.dk(a))return A.xm
s=a.w
if(s===6)return A.x4
if(s===1)return A.tl
if(s===7)return A.xd
r=A.xC(a)
if(r!=null)return r
if(s===8){q=a.x
if(a.y.every(A.dk)){a.f="$i"+q
if(q==="B")return A.xg
if(a===t.m)return A.xf
return A.xl}}else if(s===10){p=A.xZ(a.x,a.y)
o=p==null?A.tl:p
return o==null?A.ab(o):o}return A.x2},
xC(a){if(a.w===8){if(a===t.S)return A.tj
if(a===t.i||a===t.di)return A.xh
if(a===t.N)return A.xk
if(a===t.y)return A.p5}return null},
x8(a){var s=this,r=A.x1
if(A.dk(s))r=A.wR
else if(s===t.K)r=A.ab
else if(A.ei(s)){r=A.x3
if(s===t.h6)r=A.qz
else if(s===t.dk)r=A.bK
else if(s===t.fQ)r=A.wN
else if(s===t.cg)r=A.tc
else if(s===t.cD)r=A.wO
else if(s===t.bX)r=A.aV}else if(s===t.S)r=A.b4
else if(s===t.N)r=A.X
else if(s===t.y)r=A.eb
else if(s===t.di)r=A.wP
else if(s===t.i)r=A.tb
else if(s===t.m)r=A.z
s.a=r
return s.a(a)},
x2(a){var s=this
if(a==null)return A.ei(s)
return A.ye(v.typeUniverse,A.yc(a,s),s)},
x4(a){if(a==null)return!0
return this.x.b(a)},
xl(a){var s,r=this
if(a==null)return A.ei(r)
s=r.f
if(a instanceof A.T)return!!a[s]
return!!J.bl(a)[s]},
xg(a){var s,r=this
if(a==null)return A.ei(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.f
if(a instanceof A.T)return!!a[s]
return!!J.bl(a)[s]},
xf(a){var s=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.T)return!!a[s.f]
return!0}if(typeof a=="function")return!0
return!1},
tk(a){if(typeof a=="object"){if(a instanceof A.T)return t.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
x1(a){var s=this
if(a==null){if(A.ei(s))return a}else if(s.b(a))return a
throw A.aP(A.te(a,s),new Error())},
x3(a){var s=this
if(a==null||s.b(a))return a
throw A.aP(A.te(a,s),new Error())},
te(a,b){return new A.fF("TypeError: "+A.rQ(a,A.bL(b,null)))},
rQ(a,b){return A.hs(a)+": type '"+A.bL(A.qC(a),null)+"' is not a subtype of type '"+b+"'"},
bP(a,b){return new A.fF("TypeError: "+A.rQ(a,b))},
xd(a){var s=this
return s.x.b(a)||A.qh(v.typeUniverse,s).b(a)},
xi(a){return a!=null},
ab(a){if(a!=null)return a
throw A.aP(A.bP(a,"Object"),new Error())},
xm(a){return!0},
wR(a){return a},
tl(a){return!1},
p5(a){return!0===a||!1===a},
eb(a){if(!0===a)return!0
if(!1===a)return!1
throw A.aP(A.bP(a,"bool"),new Error())},
wN(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.aP(A.bP(a,"bool?"),new Error())},
tb(a){if(typeof a=="number")return a
throw A.aP(A.bP(a,"double"),new Error())},
wO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aP(A.bP(a,"double?"),new Error())},
tj(a){return typeof a=="number"&&Math.floor(a)===a},
b4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.aP(A.bP(a,"int"),new Error())},
qz(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.aP(A.bP(a,"int?"),new Error())},
xh(a){return typeof a=="number"},
wP(a){if(typeof a=="number")return a
throw A.aP(A.bP(a,"num"),new Error())},
tc(a){if(typeof a=="number")return a
if(a==null)return a
throw A.aP(A.bP(a,"num?"),new Error())},
xk(a){return typeof a=="string"},
X(a){if(typeof a=="string")return a
throw A.aP(A.bP(a,"String"),new Error())},
bK(a){if(typeof a=="string")return a
if(a==null)return a
throw A.aP(A.bP(a,"String?"),new Error())},
z(a){if(A.tk(a))return a
throw A.aP(A.bP(a,"JSObject"),new Error())},
aV(a){if(a==null)return a
if(A.tk(a))return a
throw A.aP(A.bP(a,"JSObject?"),new Error())},
ts(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.bL(a[q],b)
return s},
xt(a,b){var s,r,q,p,o,n,m=a.x,l=a.y
if(""===m)return"("+A.ts(l,b)+")"
s=l.length
r=m.split(",")
q=r.length-s
for(p="(",o="",n=0;n<s;++n,o=", "){p+=o
if(q===0)p+="{"
p+=A.bL(l[n],b)
if(q>=0)p+=" "+r[q];++q}return p+"})"},
tf(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=", ",a2=null
if(a5!=null){s=a5.length
if(a4==null)a4=A.d([],t.s)
else a2=a4.length
r=a4.length
for(q=s;q>0;--q)B.f.u(a4,"T"+(r+q))
for(p=t.X,o="<",n="",q=0;q<s;++q,n=a1){m=a4.length
l=m-1-q
if(!(l>=0))return A.v(a4,l)
o=o+n+a4[l]
k=a5[q]
j=k.w
if(!(j===2||j===3||j===4||j===5||k===p))o+=" extends "+A.bL(k,a4)}o+=">"}else o=""
p=a3.x
i=a3.y
h=i.a
g=h.length
f=i.b
e=f.length
d=i.c
c=d.length
b=A.bL(p,a4)
for(a="",a0="",q=0;q<g;++q,a0=a1)a+=a0+A.bL(h[q],a4)
if(e>0){a+=a0+"["
for(a0="",q=0;q<e;++q,a0=a1)a+=a0+A.bL(f[q],a4)
a+="]"}if(c>0){a+=a0+"{"
for(a0="",q=0;q<c;q+=3,a0=a1){a+=a0
if(d[q+1])a+="required "
a+=A.bL(d[q+2],a4)+" "+d[q]}a+="}"}if(a2!=null){a4.toString
a4.length=a2}return o+"("+a+") => "+b},
bL(a,b){var s,r,q,p,o,n,m,l=a.w
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=a.x
r=A.bL(s,b)
q=s.w
return(q===11||q===12?"("+r+")":r)+"?"}if(l===7)return"FutureOr<"+A.bL(a.x,b)+">"
if(l===8){p=A.xK(a.x)
o=a.y
return o.length>0?p+("<"+A.ts(o,b)+">"):p}if(l===10)return A.xt(a,b)
if(l===11)return A.tf(a,b,null)
if(l===12)return A.tf(a.x,b,a.y)
if(l===13){n=a.x
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.v(b,n)
return b[n]}return"?"},
xK(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
wt(a,b){var s=a.tR[b]
while(typeof s=="string")s=a.tR[s]
return s},
ws(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.oP(a,b,!1)
else if(typeof m=="number"){s=m
r=A.fI(a,5,"#")
q=A.oY(s)
for(p=0;p<s;++p)q[p]=r
o=A.fH(a,b,q)
n[b]=o
return o}else return m},
wr(a,b){return A.t9(a.tR,b)},
wq(a,b){return A.t9(a.eT,b)},
oP(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.rV(A.rT(a,null,b,!1))
r.set(b,s)
return s},
fJ(a,b,c){var s,r,q=b.z
if(q==null)q=b.z=new Map()
s=q.get(c)
if(s!=null)return s
r=A.rV(A.rT(a,b,c,!0))
q.set(c,r)
return r},
t1(a,b,c){var s,r,q,p=b.Q
if(p==null)p=b.Q=new Map()
s=c.as
r=p.get(s)
if(r!=null)return r
q=A.qs(a,b,c.w===9?c.y:[c])
p.set(s,q)
return q},
cL(a,b){b.a=A.x8
b.b=A.x9
return b},
fI(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.c1(null,null)
s.w=b
s.as=c
r=A.cL(a,s)
a.eC.set(c,r)
return r},
t_(a,b,c){var s,r=b.as+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.wo(a,b,r,c)
a.eC.set(r,s)
return s},
wo(a,b,c,d){var s,r,q
if(d){s=b.w
r=!0
if(!A.dk(b))if(!(b===t.b||b===t.T))if(s!==6)r=s===7&&A.ei(b.x)
if(r)return b
else if(s===1)return t.b}q=new A.c1(null,null)
q.w=6
q.x=b
q.as=c
return A.cL(a,q)},
rZ(a,b,c){var s,r=b.as+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.wm(a,b,r,c)
a.eC.set(r,s)
return s},
wm(a,b,c,d){var s,r
if(d){s=b.w
if(A.dk(b)||b===t.K)return b
else if(s===1)return A.fH(a,"bo",[b])
else if(b===t.b||b===t.T)return t.eH}r=new A.c1(null,null)
r.w=7
r.x=b
r.as=c
return A.cL(a,r)},
wp(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.c1(null,null)
s.w=13
s.x=b
s.as=q
r=A.cL(a,s)
a.eC.set(q,r)
return r},
fG(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].as
return s},
wl(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].as}return s},
fH(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.fG(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.c1(null,null)
r.w=8
r.x=b
r.y=c
if(c.length>0)r.c=c[0]
r.as=p
q=A.cL(a,r)
a.eC.set(p,q)
return q},
qs(a,b,c){var s,r,q,p,o,n
if(b.w===9){s=b.x
r=b.y.concat(c)}else{r=c
s=b}q=s.as+(";<"+A.fG(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.c1(null,null)
o.w=9
o.x=s
o.y=r
o.as=q
n=A.cL(a,o)
a.eC.set(q,n)
return n},
t0(a,b,c){var s,r,q="+"+(b+"("+A.fG(c)+")"),p=a.eC.get(q)
if(p!=null)return p
s=new A.c1(null,null)
s.w=10
s.x=b
s.y=c
s.as=q
r=A.cL(a,s)
a.eC.set(q,r)
return r},
rY(a,b,c){var s,r,q,p,o,n=b.as,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.fG(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.fG(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.wl(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.c1(null,null)
p.w=11
p.x=b
p.y=c
p.as=r
o=A.cL(a,p)
a.eC.set(r,o)
return o},
qt(a,b,c,d){var s,r=b.as+("<"+A.fG(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.wn(a,b,c,r,d)
a.eC.set(r,s)
return s},
wn(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.oY(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.w===1){r[p]=o;++q}}if(q>0){n=A.dh(a,b,r,0)
m=A.ee(a,c,r,0)
return A.qt(a,n,m,c!==m)}}l=new A.c1(null,null)
l.w=12
l.x=b
l.y=c
l.as=d
return A.cL(a,l)},
rT(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
rV(a){var s,r,q,p,o,n,m,l=a.r,k=a.s
for(s=l.length,r=0;r<s;){q=l.charCodeAt(r)
if(q>=48&&q<=57)r=A.wd(r+1,q,l,k)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36||q===124)r=A.rU(a,r,l,k,!1)
else if(q===46)r=A.rU(a,r,l,k,!0)
else{++r
switch(q){case 44:break
case 58:k.push(!1)
break
case 33:k.push(!0)
break
case 59:k.push(A.df(a.u,a.e,k.pop()))
break
case 94:k.push(A.wp(a.u,k.pop()))
break
case 35:k.push(A.fI(a.u,5,"#"))
break
case 64:k.push(A.fI(a.u,2,"@"))
break
case 126:k.push(A.fI(a.u,3,"~"))
break
case 60:k.push(a.p)
a.p=k.length
break
case 62:A.wf(a,k)
break
case 38:A.we(a,k)
break
case 63:p=a.u
k.push(A.t_(p,A.df(p,a.e,k.pop()),a.n))
break
case 47:p=a.u
k.push(A.rZ(p,A.df(p,a.e,k.pop()),a.n))
break
case 40:k.push(-3)
k.push(a.p)
a.p=k.length
break
case 41:A.wc(a,k)
break
case 91:k.push(a.p)
a.p=k.length
break
case 93:o=k.splice(a.p)
A.rW(a.u,a.e,o)
a.p=k.pop()
k.push(o)
k.push(-1)
break
case 123:k.push(a.p)
a.p=k.length
break
case 125:o=k.splice(a.p)
A.wh(a.u,a.e,o)
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
return A.df(a.u,a.e,m)},
wd(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
rU(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.w===9)o=o.x
n=A.wt(s,o.x)[p]
if(n==null)A.ce('No "'+p+'" in "'+A.vO(o)+'"')
d.push(A.fJ(s,o,n))}else d.push(p)
return m},
wf(a,b){var s,r=a.u,q=A.rS(a,b),p=b.pop()
if(typeof p=="string")b.push(A.fH(r,p,q))
else{s=A.df(r,a.e,p)
switch(s.w){case 11:b.push(A.qt(r,s,q,a.n))
break
default:b.push(A.qs(r,s,q))
break}}},
wc(a,b){var s,r,q,p=a.u,o=b.pop(),n=null,m=null
if(typeof o=="number")switch(o){case-1:n=b.pop()
break
case-2:m=b.pop()
break
default:b.push(o)
break}else b.push(o)
s=A.rS(a,b)
o=b.pop()
switch(o){case-3:o=b.pop()
if(n==null)n=p.sEA
if(m==null)m=p.sEA
r=A.df(p,a.e,o)
q=new A.jj()
q.a=s
q.b=n
q.c=m
b.push(A.rY(p,r,q))
return
case-4:b.push(A.t0(p,b.pop(),s))
return
default:throw A.n(A.h2("Unexpected state under `()`: "+A.Z(o)))}},
we(a,b){var s=b.pop()
if(0===s){b.push(A.fI(a.u,1,"0&"))
return}if(1===s){b.push(A.fI(a.u,4,"1&"))
return}throw A.n(A.h2("Unexpected extended operation "+A.Z(s)))},
rS(a,b){var s=b.splice(a.p)
A.rW(a.u,a.e,s)
a.p=b.pop()
return s},
df(a,b,c){if(typeof c=="string")return A.fH(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.wg(a,b,c)}else return c},
rW(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.df(a,b,c[s])},
wh(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.df(a,b,c[s])},
wg(a,b,c){var s,r,q=b.w
if(q===9){if(c===0)return b.x
s=b.y
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.x
q=b.w}else if(c===0)return b
if(q!==8)throw A.n(A.h2("Indexed base must be an interface type"))
s=b.y
if(c<=s.length)return s[c-1]
throw A.n(A.h2("Bad index "+c+" for "+b.l(0)))},
ye(a,b,c){var s,r=b.d
if(r==null)r=b.d=new Map()
s=r.get(c)
if(s==null){s=A.aN(a,b,null,c,null)
r.set(c,s)}return s},
aN(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j,i
if(b===d)return!0
if(A.dk(d))return!0
s=b.w
if(s===4)return!0
if(A.dk(b))return!1
if(b.w===1)return!0
r=s===13
if(r)if(A.aN(a,c[b.x],c,d,e))return!0
q=d.w
p=t.b
if(b===p||b===t.T){if(q===7)return A.aN(a,b,c,d.x,e)
return d===p||d===t.T||q===6}if(d===t.K){if(s===7)return A.aN(a,b.x,c,d,e)
return s!==6}if(s===7){if(!A.aN(a,b.x,c,d,e))return!1
return A.aN(a,A.qh(a,b),c,d,e)}if(s===6)return A.aN(a,p,c,d,e)&&A.aN(a,b.x,c,d,e)
if(q===7){if(A.aN(a,b,c,d.x,e))return!0
return A.aN(a,b,c,A.qh(a,d),e)}if(q===6)return A.aN(a,b,c,p,e)||A.aN(a,b,c,d.x,e)
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
if(!A.aN(a,j,c,i,e)||!A.aN(a,i,e,j,c))return!1}return A.ti(a,b.x,c,d.x,e)}if(q===11){if(b===t.cj)return!0
if(p)return!1
return A.ti(a,b,c,d,e)}if(s===8){if(q!==8)return!1
return A.xe(a,b,c,d,e)}if(o&&q===10)return A.xj(a,b,c,d,e)
return!1},
ti(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.aN(a3,a4.x,a5,a6.x,a7))return!1
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
if(!A.aN(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.aN(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.aN(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.aN(a3,e[a+2],a7,g,a5))return!1
break}}while(b<d){if(f[b+1])return!1
b+=3}return!0},
xe(a,b,c,d,e){var s,r,q,p,o,n=b.x,m=d.x
while(n!==m){s=a.tR[n]
if(s==null)return!1
if(typeof s=="string"){n=s
continue}r=s[m]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fJ(a,b,r[o])
return A.ta(a,p,null,c,d.y,e)}return A.ta(a,b.y,null,c,d.y,e)},
ta(a,b,c,d,e,f){var s,r=b.length
for(s=0;s<r;++s)if(!A.aN(a,b[s],d,e[s],f))return!1
return!0},
xj(a,b,c,d,e){var s,r=b.y,q=d.y,p=r.length
if(p!==q.length)return!1
if(b.x!==d.x)return!1
for(s=0;s<p;++s)if(!A.aN(a,r[s],c,q[s],e))return!1
return!0},
ei(a){var s=a.w,r=!0
if(!(a===t.b||a===t.T))if(!A.dk(a))if(s!==6)r=s===7&&A.ei(a.x)
return r},
dk(a){var s=a.w
return s===2||s===3||s===4||s===5||a===t.X},
t9(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
oY(a){return a>0?new Array(a):v.typeUniverse.sEA},
c1:function c1(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
jj:function jj(){this.c=this.b=this.a=null},
k_:function k_(a){this.a=a},
je:function je(){},
fF:function fF(a){this.a=a},
w6(){var s,r,q
if(self.scheduleImmediate!=null)return A.xP()
if(self.MutationObserver!=null&&self.document!=null){s={}
r=self.document.createElement("div")
q=self.document.createElement("span")
s.a=null
new self.MutationObserver(A.eg(new A.og(s),1)).observe(r,{childList:true})
return new A.of(s,r,q)}else if(self.setImmediate!=null)return A.xQ()
return A.xR()},
w7(a){self.scheduleImmediate(A.eg(new A.oh(t.M.a(a)),0))},
w8(a){self.setImmediate(A.eg(new A.oi(t.M.a(a)),0))},
w9(a){A.qk(B.bi,t.M.a(a))},
qk(a,b){var s=B.w.a9(a.a,1000)
return A.wj(s<0?0:s,b)},
rI(a,b){var s=B.w.a9(a.a,1000)
return A.wk(s<0?0:s,b)},
wj(a,b){var s=new A.fE(!0)
s.eQ(a,b)
return s},
wk(a,b){var s=new A.fE(!1)
s.eR(a,b)
return s},
bj(a){return new A.j3(new A.aq($.ai,a.h("aq<0>")),a.h("j3<0>"))},
bi(a,b){a.$2(0,null)
b.b=!0
return b.a},
b5(a,b){A.wS(a,b)},
bh(a,b){b.aV(0,a)},
bg(a,b){b.cG(A.aQ(a),A.cu(a))},
wS(a,b){var s,r,q=new A.p_(b),p=new A.p0(b)
if(a instanceof A.aq)a.e5(q,p,t.z)
else{s=t.z
if(a instanceof A.aq)a.d1(q,p,s)
else{r=new A.aq($.ai,t._)
r.a=8
r.c=a
r.e5(q,p,s)}}},
bk(a){var s=function(b,c){return function(d,e){while(true){try{b(d,e)
break}catch(r){e=r
d=c}}}}(a,1)
return $.ai.ey(new A.pd(s),t.H,t.S,t.z)},
rX(a,b,c){return 0},
ks(a){var s
if(t.C.b(a)){s=a.gaJ()
if(s!=null)return s}return B.aE},
vp(a,b,c){var s=new A.aq($.ai,c.h("aq<0>"))
A.bO(a,new A.lN(b,s,c))
return s},
th(a,b){if($.ai===B.F)return null
return null},
xb(a,b){if($.ai!==B.F)A.th(a,b)
if(b==null)if(t.C.b(a)){b=a.gaJ()
if(b==null){A.rz(a,B.aE)
b=B.aE}}else b=B.aE
else if(t.C.b(a))A.rz(a,b)
return new A.bb(a,b)},
rR(a,b){var s=new A.aq($.ai,b.h("aq<0>"))
b.a(a)
s.a=8
s.c=a
return s},
or(a,b,c){var s,r,q,p,o={},n=o.a=a
for(s=t._;r=n.a,(r&4)!==0;n=a){a=s.a(n.c)
o.a=a}if(n===b){s=A.vP()
b.c3(new A.bb(new A.bS(!0,n,null,"Cannot complete a future with itself"),s))
return}q=b.a&1
s=n.a=r|q
if((s&24)===0){p=t.F.a(b.c)
b.a=b.a&1|4
b.c=n
n.dT(p)
return}if(!c)if(b.c==null)n=(s&16)===0||q!==0
else n=!1
else n=!0
if(n){p=b.aS()
b.bf(o.a)
A.db(b,p)
return}b.a^=2
A.ed(null,null,b.b,t.M.a(new A.os(o,b)))},
db(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d={},c=d.a=a
for(s=t.n,r=t.F;;){q={}
p=c.a
o=(p&16)===0
n=!o
if(b==null){if(n&&(p&1)===0){m=s.a(c.c)
A.p6(m.a,m.b)}return}q.a=b
l=b.a
for(c=b;l!=null;c=l,l=k){c.a=null
A.db(d.a,c)
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
A.p6(j.a,j.b)
return}g=$.ai
if(g!==h)$.ai=h
else g=null
c=c.c
if((c&15)===8)new A.ow(q,d,n).$0()
else if(o){if((c&1)!==0)new A.ov(q,j).$0()}else if((c&2)!==0)new A.ou(d,q).$0()
if(g!=null)$.ai=g
c=q.c
if(c instanceof A.aq){p=q.a.$ti
p=p.h("bo<2>").b(c)||!p.y[1].b(c)}else p=!1
if(p){f=q.a.b
if((c.a&24)!==0){e=r.a(f.c)
f.c=null
b=f.bu(e)
f.a=c.a&30|f.a&1
f.c=c.c
d.a=c
continue}else A.or(c,f,!0)
return}}f=q.a.b
e=r.a(f.c)
f.c=null
b=f.bu(e)
c=q.b
p=q.c
if(!c){f.$ti.c.a(p)
f.a=8
f.c=p}else{s.a(p)
f.a=f.a&1|16
f.c=p}d.a=f
c=f}},
xu(a,b){var s
if(t.ag.b(a))return b.ey(a,t.z,t.K,t.k)
s=t.bI
if(s.b(a))return s.a(a)
throw A.n(A.en(a,"onError",u.c))},
xp(){var s,r
for(s=$.ec;s!=null;s=$.ec){$.fQ=null
r=s.b
$.ec=r
if(r==null)$.fP=null
s.a.$0()}},
xF(){$.qB=!0
try{A.xp()}finally{$.fQ=null
$.qB=!1
if($.ec!=null)$.qZ().$1(A.tx())}},
tu(a){var s=new A.j4(a),r=$.fP
if(r==null){$.ec=$.fP=s
if(!$.qB)$.qZ().$1(A.tx())}else $.fP=r.b=s},
xx(a){var s,r,q,p=$.ec
if(p==null){A.tu(a)
$.fQ=$.fP
return}s=new A.j4(a)
r=$.fQ
if(r==null){s.b=p
$.ec=$.fQ=s}else{q=r.b
s.b=q
$.fQ=r.b=s
if(q==null)$.fP=s}},
pZ(a){var s=null,r=$.ai
if(B.F===r){A.ed(s,s,B.F,a)
return}A.ed(s,s,r,t.M.a(r.cF(a)))},
zE(a,b){A.fS(a,"stream",t.K)
return new A.jM(b.h("jM<0>"))},
bO(a,b){var s=$.ai
if(s===B.F)return A.qk(a,t.M.a(b))
return A.qk(a,t.M.a(s.cF(b)))},
rH(a,b){var s=$.ai
if(s===B.F)return A.rI(a,t.fM.a(b))
return A.rI(a,t.fM.a(s.ee(b,t.E)))},
p6(a,b){A.xx(new A.p7(a,b))},
tq(a,b,c,d,e){var s,r=$.ai
if(r===c)return d.$0()
$.ai=c
s=r
try{r=d.$0()
return r}finally{$.ai=s}},
tr(a,b,c,d,e,f,g){var s,r=$.ai
if(r===c)return d.$1(e)
$.ai=c
s=r
try{r=d.$1(e)
return r}finally{$.ai=s}},
xv(a,b,c,d,e,f,g,h,i){var s,r=$.ai
if(r===c)return d.$2(e,f)
$.ai=c
s=r
try{r=d.$2(e,f)
return r}finally{$.ai=s}},
ed(a,b,c,d){t.M.a(d)
if(B.F!==c){d=c.cF(d)
d=d}A.tu(d)},
og:function og(a){this.a=a},
of:function of(a,b,c){this.a=a
this.b=b
this.c=c},
oh:function oh(a){this.a=a},
oi:function oi(a){this.a=a},
fE:function fE(a){this.a=a
this.b=null
this.c=0},
oO:function oO(a,b){this.a=a
this.b=b},
oN:function oN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b){this.a=a
this.b=!1
this.$ti=b},
p_:function p_(a){this.a=a},
p0:function p0(a){this.a=a},
pd:function pd(a){this.a=a},
fB:function fB(a,b){var _=this
_.a=a
_.e=_.d=_.c=_.b=null
_.$ti=b},
e8:function e8(a,b){this.a=a
this.$ti=b},
bb:function bb(a,b){this.a=a
this.b=b},
lN:function lN(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(){},
cr:function cr(a,b){this.a=a
this.$ti=b},
da:function da(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aq:function aq(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
oo:function oo(a,b){this.a=a
this.b=b},
ot:function ot(a,b){this.a=a
this.b=b},
os:function os(a,b){this.a=a
this.b=b},
oq:function oq(a,b){this.a=a
this.b=b},
op:function op(a,b){this.a=a
this.b=b},
ow:function ow(a,b,c){this.a=a
this.b=b
this.c=c},
ox:function ox(a,b){this.a=a
this.b=b},
oy:function oy(a){this.a=a},
ov:function ov(a,b){this.a=a
this.b=b},
ou:function ou(a,b){this.a=a
this.b=b},
oz:function oz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oA:function oA(a,b,c){this.a=a
this.b=b
this.c=c},
oB:function oB(a,b){this.a=a
this.b=b},
j4:function j4(a){this.a=a
this.b=null},
iz:function iz(){},
nJ:function nJ(a,b){this.a=a
this.b=b},
nK:function nK(a,b){this.a=a
this.b=b},
jM:function jM(a){this.$ti=a},
fN:function fN(){},
jE:function jE(){},
oK:function oK(a,b){this.a=a
this.b=b},
oL:function oL(a,b,c){this.a=a
this.b=b
this.c=c},
p7:function p7(a,b){this.a=a
this.b=b},
qo(a,b){var s=a[b]
return s===a?null:s},
qq(a,b,c){if(c==null)a[b]=a
else a[b]=c},
qp(){var s=Object.create(null)
A.qq(s,"<non-identifier-key>",s)
delete s["<non-identifier-key>"]
return s},
rs(a,b){return new A.bZ(a.h("@<0>").C(b).h("bZ<1,2>"))},
ak(a,b,c){return b.h("@<0>").C(c).h("qe<1,2>").a(A.y2(a,new A.bZ(b.h("@<0>").C(c).h("bZ<1,2>"))))},
a0(a,b){return new A.bZ(a.h("@<0>").C(b).h("bZ<1,2>"))},
dO(a){return new A.de(a.h("de<0>"))},
dP(a,b){return b.h("rt<0>").a(A.y3(a,new A.de(b.h("de<0>"))))},
qr(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
vu(a,b){var s=J.b6(a.a)
if(new A.d8(s,a.b,a.$ti.h("d8<1>")).m())return s.gq(s)
return null},
qf(a,b,c){var s=A.rs(b,c)
a.N(0,new A.mn(s,b,c))
return s},
bd(a,b,c){var s=A.rs(b,c)
s.S(0,a)
return s},
qg(a){var s,r
if(A.qH(a))return"{...}"
s=new A.b2("")
try{r={}
B.f.u($.bM,a)
s.a+="{"
r.a=!0
J.q6(a,new A.mp(r,s))
s.a+="}"}finally{if(0>=$.bM.length)return A.v($.bM,-1)
$.bM.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
fl:function fl(){},
oD:function oD(a){this.a=a},
fn:function fn(a){var _=this
_.a=0
_.e=_.d=_.c=_.b=null
_.$ti=a},
dc:function dc(a,b){this.a=a
this.$ti=b},
fm:function fm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
de:function de(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jt:function jt(a){this.a=a
this.c=this.b=null},
fo:function fo(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
mn:function mn(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(){},
W:function W(){},
mo:function mo(a){this.a=a},
mp:function mp(a,b){this.a=a
this.b=b},
fp:function fp(a,b){this.a=a
this.$ti=b},
fq:function fq(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
fK:function fK(){},
dQ:function dQ(){},
ca:function ca(a,b){this.a=a
this.$ti=b},
cl:function cl(){},
fx:function fx(){},
e9:function e9(){},
xs(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aQ(r)
q=A.b0(String(s),null,null)
throw A.n(q)}q=A.p1(p)
return q},
p1(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(!Array.isArray(a))return new A.jp(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.p1(a[s])
return a},
wK(a,b,c){var s,r,q,p,o=c-b
if(o<=4096)s=$.um()
else s=new Uint8Array(o)
for(r=J.ao(a),q=0;q<o;++q){p=r.j(a,b+q)
if((p&255)!==p)p=255
s[q]=p}return s},
wJ(a,b,c,d){var s=a?$.ul():$.uk()
if(s==null)return null
if(0===c&&d===b.length)return A.t8(s,b)
return A.t8(s,b.subarray(c,d))},
t8(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
r9(a,b,c,d,e,f){if(B.w.b9(f,4)!==0)throw A.n(A.b0("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw A.n(A.b0("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw A.n(A.b0("Invalid base64 padding, more than two '=' characters",a,b))},
rq(a,b,c){return new A.eN(a,b)},
wX(a){return a.iD()},
wa(a,b){return new A.oG(a,[],A.xX())},
wb(a,b,c){var s,r=new A.b2(""),q=A.wa(r,b)
q.bU(a)
s=r.a
return s.charCodeAt(0)==0?s:s},
wL(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
jp:function jp(a,b){this.a=a
this.b=b
this.c=null},
oF:function oF(a){this.a=a},
jq:function jq(a){this.a=a},
oW:function oW(){},
oV:function oV(){},
h8:function h8(){},
kG:function kG(){},
cX:function cX(){},
hg:function hg(){},
hr:function hr(){},
eN:function eN(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hT:function hT(){},
ml:function ml(a){this.b=a},
mk:function mk(a){this.a=a},
oH:function oH(){},
oI:function oI(a,b){this.a=a
this.b=b},
oG:function oG(a,b,c){this.c=a
this.a=b
this.b=c},
iX:function iX(){},
oc:function oc(){},
oX:function oX(a){this.b=0
this.c=a},
ob:function ob(a){this.a=a},
oU:function oU(a){this.a=a
this.b=16
this.c=0},
eh(a,b){var s=A.rx(a,b)
if(s!=null)return s
throw A.n(A.b0(a,null,null))},
vj(a,b){a=A.aP(a,new Error())
if(a==null)a=A.ab(a)
a.stack=b.l(0)
throw a},
hY(a,b,c,d){var s,r=c?J.rm(a,d):J.rl(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
eR(a,b,c){var s,r=A.d([],c.h("a2<0>"))
for(s=J.b6(a);s.m();)B.f.u(r,c.a(s.gq(s)))
if(b)return r
r.$flags=1
return r},
aC(a,b){var s,r
if(Array.isArray(a))return A.d(a.slice(0),b.h("a2<0>"))
s=A.d([],b.h("a2<0>"))
for(r=J.b6(a);r.m();)B.f.u(s,r.gq(r))
return s},
ru(a,b){var s=A.eR(a,!1,b)
s.$flags=3
return s},
rE(a,b,c){var s,r
A.f1(b,"start")
if(c!=null){s=c-b
if(s<0)throw A.n(A.aU(c,b,null,"end",null))
if(s===0)return""}r=A.vT(a,b,c)
return r},
vT(a,b,c){var s=a.length
if(b>=s)return""
return A.vK(a,b,c==null||c>s?s:c)},
c0(a,b,c){return new A.dK(a,A.rp(a,!1,b,!1,c,""))},
rD(a,b,c){var s=J.b6(b)
if(!s.m())return a
if(c.length===0){do a+=A.Z(s.gq(s))
while(s.m())}else{a+=A.Z(s.gq(s))
while(s.m())a=a+c+A.Z(s.gq(s))}return a},
oT(a,b,c,d){var s,r,q,p,o,n="0123456789ABCDEF"
if(c===B.a0){s=$.ui()
s=s.b.test(b)}else s=!1
if(s)return b
r=B.e9.cH(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128&&(u.v.charCodeAt(o)&a)!==0)p+=A.ay(o)
else p=d&&o===32?p+"+":p+"%"+n[o>>>4&15]+n[o&15]}return p.charCodeAt(0)==0?p:p},
wB(a){var s,r,q
if(!$.uj())return A.wC(a)
s=new URLSearchParams()
a.N(0,new A.oS(s))
r=s.toString()
q=r.length
if(q>0&&r[q-1]==="=")r=B.b.t(r,0,q-1)
return r.replace(/=&|\*|%7E/g,b=>b==="=&"?"&":b==="*"?"%2A":"~")},
vP(){return A.cu(new Error())},
vi(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
rh(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
hn(a){if(a>=10)return""+a
return"0"+a},
l6(a,b,c){return new A.bA(a+1000*b+1e6*c)},
hs(a){if(typeof a=="number"||A.p5(a)||a==null)return J.t(a)
if(typeof a=="string")return JSON.stringify(a)
return A.ry(a)},
vk(a,b){A.fS(a,"error",t.K)
A.fS(b,"stackTrace",t.k)
A.vj(a,b)},
h2(a){return new A.h1(a)},
c5(a,b){return new A.bS(!1,null,b,a)},
en(a,b,c){return new A.bS(!0,a,b,c)},
v9(a,b,c){return a},
vL(a,b){return new A.f0(null,null,!0,a,b,"Value not in range")},
aU(a,b,c,d,e){return new A.f0(b,c,!0,a,d,"Invalid value")},
vM(a,b,c,d){if(a<b||a>c)throw A.n(A.aU(a,b,c,d,null))
return a},
dV(a,b,c){if(0>a||a>c)throw A.n(A.aU(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.n(A.aU(b,a,c,"end",null))
return b}return c},
f1(a,b){if(a<0)throw A.n(A.aU(a,0,null,b,null))
return a},
aF(a,b,c,d){return new A.hO(b,!0,a,d,"Index out of range")},
U(a){return new A.fb(a)},
rK(a){return new A.iS(a)},
an(a){return new A.d4(a)},
aW(a){return new A.he(a)},
b0(a,b,c){return new A.bX(a,b,c)},
vv(a,b,c){var s,r
if(A.qH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.d([],t.s)
B.f.u($.bM,a)
try{A.xn(a,s)}finally{if(0>=$.bM.length)return A.v($.bM,-1)
$.bM.pop()}r=A.rD(b,t.U.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
q9(a,b,c){var s,r
if(A.qH(a))return b+"..."+c
s=new A.b2(b)
B.f.u($.bM,a)
try{r=s
r.a=A.rD(r.a,a,", ")}finally{if(0>=$.bM.length)return A.v($.bM,-1)
$.bM.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
xn(a,b){var s,r,q,p,o,n,m,l=a.gv(a),k=0,j=0
for(;;){if(!(k<80||j<3))break
if(!l.m())return
s=A.Z(l.gq(l))
B.f.u(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.v(b,-1)
r=b.pop()
if(0>=b.length)return A.v(b,-1)
q=b.pop()}else{p=l.gq(l);++j
if(!l.m()){if(j<=4){B.f.u(b,A.Z(p))
return}r=A.Z(p)
if(0>=b.length)return A.v(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gq(l);++j
for(;l.m();p=o,o=n){n=l.gq(l);++j
if(j>100){for(;;){if(!(k>75&&j>3))break
if(0>=b.length)return A.v(b,-1)
k-=b.pop().length+2;--j}B.f.u(b,"...")
return}}q=A.Z(p)
r=A.Z(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
for(;;){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.v(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.f.u(b,m)
B.f.u(b,q)
B.f.u(b,r)},
rv(a,b,c,d,e){return new A.cW(a,b.h("@<0>").C(c).C(d).C(e).h("cW<1,2,3,4>"))},
eZ(a,b,c,d){var s
if(B.a_===c){s=B.a4.gL(a)
b=J.bN(b)
return A.nX(A.cn(A.cn($.kg(),s),b))}if(B.a_===d){s=B.a4.gL(a)
b=J.bN(b)
c=J.bN(c)
return A.nX(A.cn(A.cn(A.cn($.kg(),s),b),c))}s=B.a4.gL(a)
b=J.bN(b)
c=J.bN(c)
d=J.bN(d)
d=A.nX(A.cn(A.cn(A.cn(A.cn($.kg(),s),b),c),d))
return d},
vz(a){var s,r,q=$.kg()
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.aJ)(a),++r)q=A.cn(q,J.bN(a[r]))
return A.nX(q)},
ej(a){A.yk(a)},
cI(a6,a7,a8){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=null
a8=a6.length
s=a7+5
if(a8>=s){r=a7+4
if(!(r<a8))return A.v(a6,r)
if(!(a7<a8))return A.v(a6,a7)
q=a7+1
if(!(q<a8))return A.v(a6,q)
p=a7+2
if(!(p<a8))return A.v(a6,p)
o=a7+3
if(!(o<a8))return A.v(a6,o)
n=((a6.charCodeAt(r)^58)*3|a6.charCodeAt(a7)^100|a6.charCodeAt(q)^97|a6.charCodeAt(p)^116|a6.charCodeAt(o)^97)>>>0
if(n===0)return A.rL(a7>0||a8<a8?B.b.t(a6,a7,a8):a6,5,a5).geD()
else if(n===32)return A.rL(B.b.t(a6,s,a8),0,a5).geD()}m=A.hY(8,0,!1,t.S)
B.f.i(m,0,0)
r=a7-1
B.f.i(m,1,r)
B.f.i(m,2,r)
B.f.i(m,7,r)
B.f.i(m,3,a7)
B.f.i(m,4,a7)
B.f.i(m,5,a8)
B.f.i(m,6,a8)
if(A.tt(a6,a7,a8,0,m)>=14)B.f.i(m,7,a8)
l=m[1]
if(l>=a7)if(A.tt(a6,a7,l,20,m)===20)m[7]=l
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
if(s){a6=B.b.aG(a6,i,h,"/");++h;++g;++a8}else{a6=B.b.t(a6,a7,i)+"/"+B.b.t(a6,h,a8)
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
if(s){a6=B.b.aG(a6,j,i,"")
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
if(s){a6=B.b.aG(a6,j,i,"")
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
g-=a7}return new A.jG(a6,l,k,j,i,h,g,e)}if(e==null)if(l>a7)e=A.wD(a6,a7,l)
else{if(l===a7)A.ea(a6,a7,"Invalid empty scheme")
e=""}b=a5
if(k>a7){a=l+3
a0=a<k?A.wE(a6,a,k-1):""
a1=A.wy(a6,k,j,!1)
s=j+1
if(s<i){a2=A.rx(B.b.t(a6,s,i),a5)
b=A.wA(a2==null?A.ce(A.b0("Invalid port",a6,s)):a2,e)}}else{a1=a5
a0=""}a3=A.wz(a6,i,h,a5,e,a1!=null)
a4=h<g?A.qw(a6,h+1,g,a5):a5
return A.qu(e,a0,a1,b,a3,a4,g<a8?A.wx(a6,g+1,a8):a5)},
qm(a){var s,r,q=0,p=null
try{s=A.cI(a,q,p)
return s}catch(r){if(A.aQ(r) instanceof A.bX)return null
else throw r}},
rN(a){var s=t.N
return B.f.ie(A.d(a.split("&"),t.s),A.a0(s,s),new A.oa(B.a0),t.V)},
iV(a,b,c){throw A.n(A.b0("Illegal IPv4 address, "+a,b,c))},
w2(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j="invalid character"
for(s=a.length,r=b,q=r,p=0,o=0;;){if(q>=c)n=0
else{if(!(q>=0&&q<s))return A.v(a,q)
n=a.charCodeAt(q)}m=n^48
if(m<=9){if(o!==0||q===r){o=o*10+m
if(o<=255){++q
continue}A.iV("each part must be in the range 0..255",a,r)}A.iV("parts must not have leading zeros",a,r)}if(q===r){if(q===c)break
A.iV(j,a,q)}l=p+1
k=e+p
d.$flags&2&&A.by(d)
if(!(k<16))return A.v(d,k)
d[k]=o
if(n===46){if(l<4){++q
p=l
r=q
o=0
continue}break}if(q===c){if(l===4)return
break}A.iV(j,a,q)
p=l}A.iV("IPv4 address should contain exactly 4 parts",a,q)},
w3(a,b,c){var s
if(b===c)throw A.n(A.b0("Empty IP address",a,b))
if(!(b>=0&&b<a.length))return A.v(a,b)
if(a.charCodeAt(b)===118){s=A.w4(a,b,c)
if(s!=null)throw A.n(s)
return!1}A.rM(a,b,c)
return!0},
w4(a,b,c){var s,r,q,p,o,n="Missing hex-digit in IPvFuture address",m=u.v;++b
for(s=a.length,r=b;;r=q){if(r<c){q=r+1
if(!(r>=0&&r<s))return A.v(a,r)
p=a.charCodeAt(r)
if((p^48)<=9)continue
o=p|32
if(o>=97&&o<=102)continue
if(p===46){if(q-1===b)return new A.bX(n,a,q)
r=q
break}return new A.bX("Unexpected character",a,q-1)}if(r-1===b)return new A.bX(n,a,r)
return new A.bX("Missing '.' in IPvFuture address",a,r)}if(r===c)return new A.bX("Missing address in IPvFuture address, host, cursor",null,null)
for(;;){if(!(r>=0&&r<s))return A.v(a,r)
p=a.charCodeAt(r)
if(!(p<128))return A.v(m,p)
if((m.charCodeAt(p)&16)!==0){++r
if(r<c)continue
return null}return new A.bX("Invalid IPvFuture address character",a,r)}},
rM(a3,a4,a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1="an address must contain at most 8 parts",a2=new A.o9(a3)
if(a5-a4<2)a2.$2("address is too short",null)
s=new Uint8Array(16)
r=a3.length
if(!(a4>=0&&a4<r))return A.v(a3,a4)
q=-1
p=0
if(a3.charCodeAt(a4)===58){o=a4+1
if(!(o<r))return A.v(a3,o)
if(a3.charCodeAt(o)===58){n=a4+2
m=n
q=0
p=1}else{a2.$2("invalid start colon",a4)
n=a4
m=n}}else{n=a4
m=n}for(l=0,k=!0;;){if(n>=a5)j=0
else{if(!(n<r))return A.v(a3,n)
j=a3.charCodeAt(n)}A:{i=j^48
h=!1
if(i<=9)g=i
else{f=j|32
if(f>=97&&f<=102)g=f-87
else break A
k=h}if(n<m+4){l=l*16+g;++n
continue}a2.$2("an IPv6 part can contain a maximum of 4 hex digits",m)}if(n>m){if(j===46){if(k){if(p<=6){A.w2(a3,m,a5,s,p*2)
p+=2
n=a5
break}a2.$2(a1,m)}break}o=p*2
e=B.w.cu(l,8)
if(!(o<16))return A.v(s,o)
s[o]=e;++o
if(!(o<16))return A.v(s,o)
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
B.dm.bW(s,a0,16,s,a)
B.dm.ia(s,a,a0,0)}}return s},
qu(a,b,c,d,e,f,g){return new A.fL(a,b,c,d,e,f,g)},
t2(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
ea(a,b,c){throw A.n(A.b0(c,a,b))},
wA(a,b){if(a!=null&&a===A.t2(b))return null
return a},
wy(a,b,c,d){var s,r,q,p,o,n,m,l,k
if(b===c)return""
s=a.length
if(!(b>=0&&b<s))return A.v(a,b)
if(a.charCodeAt(b)===91){r=c-1
if(!(r>=0&&r<s))return A.v(a,r)
if(a.charCodeAt(r)!==93)A.ea(a,b,"Missing end `]` to match `[` in host")
q=b+1
if(!(q<s))return A.v(a,q)
p=""
if(a.charCodeAt(q)!==118){o=A.wv(a,q,r)
if(o<r){n=o+1
p=A.t7(a,B.b.X(a,"25",n)?o+3:n,r,"%25")}}else o=r
m=A.w3(a,q,o)
l=B.b.t(a,q,o)
return"["+(m?l.toLowerCase():l)+p+"]"}for(k=b;k<c;++k){if(!(k<s))return A.v(a,k)
if(a.charCodeAt(k)===58){o=B.b.bQ(a,"%",b)
o=o>=b&&o<c?o:c
if(o<c){n=o+1
p=A.t7(a,B.b.X(a,"25",n)?o+3:n,c,"%25")}else p=""
A.rM(a,b,o)
return"["+B.b.t(a,b,o)+p+"]"}}return A.wG(a,b,c)},
wv(a,b,c){var s=B.b.bQ(a,"%",b)
return s>=b&&s<c?s:c},
t7(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i,h=d!==""?new A.b2(d):null
for(s=a.length,r=b,q=r,p=!0;r<c;){if(!(r>=0&&r<s))return A.v(a,r)
o=a.charCodeAt(r)
if(o===37){n=A.qx(a,r,!0)
m=n==null
if(m&&p){r+=3
continue}if(h==null)h=new A.b2("")
l=h.a+=B.b.t(a,q,r)
if(m)n=B.b.t(a,r,r+3)
else if(n==="%")A.ea(a,r,"ZoneID should not contain % anymore")
h.a=l+n
r+=3
q=r
p=!0}else if(o<127&&(u.v.charCodeAt(o)&1)!==0){if(p&&65<=o&&90>=o){if(h==null)h=new A.b2("")
if(q<r){h.a+=B.b.t(a,q,r)
q=r}p=!1}++r}else{k=1
if((o&64512)===55296&&r+1<c){m=r+1
if(!(m<s))return A.v(a,m)
j=a.charCodeAt(m)
if((j&64512)===56320){o=65536+((o&1023)<<10)+(j&1023)
k=2}}i=B.b.t(a,q,r)
if(h==null){h=new A.b2("")
m=h}else m=h
m.a+=i
l=A.qv(o)
m.a+=l
r+=k
q=r}}if(h==null)return B.b.t(a,b,c)
if(q<c){i=B.b.t(a,q,c)
h.a+=i}s=h.a
return s.charCodeAt(0)==0?s:s},
wG(a,b,c){var s,r,q,p,o,n,m,l,k,j,i,h,g=u.v
for(s=a.length,r=b,q=r,p=null,o=!0;r<c;){if(!(r>=0&&r<s))return A.v(a,r)
n=a.charCodeAt(r)
if(n===37){m=A.qx(a,r,!0)
l=m==null
if(l&&o){r+=3
continue}if(p==null)p=new A.b2("")
k=B.b.t(a,q,r)
if(!o)k=k.toLowerCase()
j=p.a+=k
i=3
if(l)m=B.b.t(a,r,r+3)
else if(m==="%"){m="%25"
i=1}p.a=j+m
r+=i
q=r
o=!0}else if(n<127&&(g.charCodeAt(n)&32)!==0){if(o&&65<=n&&90>=n){if(p==null)p=new A.b2("")
if(q<r){p.a+=B.b.t(a,q,r)
q=r}o=!1}++r}else if(n<=93&&(g.charCodeAt(n)&1024)!==0)A.ea(a,r,"Invalid character")
else{i=1
if((n&64512)===55296&&r+1<c){l=r+1
if(!(l<s))return A.v(a,l)
h=a.charCodeAt(l)
if((h&64512)===56320){n=65536+((n&1023)<<10)+(h&1023)
i=2}}k=B.b.t(a,q,r)
if(!o)k=k.toLowerCase()
if(p==null){p=new A.b2("")
l=p}else l=p
l.a+=k
j=A.qv(n)
l.a+=j
r+=i
q=r}}if(p==null)return B.b.t(a,b,c)
if(q<c){k=B.b.t(a,q,c)
if(!o)k=k.toLowerCase()
p.a+=k}s=p.a
return s.charCodeAt(0)==0?s:s},
wD(a,b,c){var s,r,q,p
if(b===c)return""
s=a.length
if(!(b<s))return A.v(a,b)
if(!A.t4(a.charCodeAt(b)))A.ea(a,b,"Scheme not starting with alphabetic character")
for(r=b,q=!1;r<c;++r){if(!(r<s))return A.v(a,r)
p=a.charCodeAt(r)
if(!(p<128&&(u.v.charCodeAt(p)&8)!==0))A.ea(a,r,"Illegal scheme character")
if(65<=p&&p<=90)q=!0}a=B.b.t(a,b,c)
return A.wu(q?a.toLowerCase():a)},
wu(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
wE(a,b,c){return A.fM(a,b,c,16,!1,!1)},
wz(a,b,c,d,e,f){var s,r=e==="file",q=r||f
if(a==null)return r?"/":""
else s=A.fM(a,b,c,128,!0,!0)
if(s.length===0){if(r)return"/"}else if(q&&!B.b.K(s,"/"))s="/"+s
return A.wF(s,e,f)},
wF(a,b,c){var s=b.length===0
if(s&&!c&&!B.b.K(a,"/")&&!B.b.K(a,"\\"))return A.wH(a,!s||c)
return A.wI(a)},
qw(a,b,c,d){if(a!=null){if(d!=null)throw A.n(A.c5("Both query and queryParameters specified",null))
return A.fM(a,b,c,256,!0,!1)}if(d==null)return null
return A.wB(d)},
wC(a){var s={},r=new A.b2("")
s.a=""
a.N(0,new A.oQ(new A.oR(s,r)))
s=r.a
return s.charCodeAt(0)==0?s:s},
wx(a,b,c){return A.fM(a,b,c,256,!0,!1)},
qx(a,b,c){var s,r,q,p,o,n,m=u.v,l=b+2,k=a.length
if(l>=k)return"%"
s=b+1
if(!(s>=0&&s<k))return A.v(a,s)
r=a.charCodeAt(s)
if(!(l>=0))return A.v(a,l)
q=a.charCodeAt(l)
p=A.pM(r)
o=A.pM(q)
if(p<0||o<0)return"%"
n=p*16+o
if(n<127){if(!(n>=0))return A.v(m,n)
l=(m.charCodeAt(n)&1)!==0}else l=!1
if(l)return A.ay(c&&65<=n&&90>=n?(n|32)>>>0:n)
if(r>=97||q>=97)return B.b.t(a,b,b+3).toUpperCase()
return null},
qv(a){var s,r,q,p,o,n,m,l,k="0123456789ABCDEF"
if(a<=127){s=new Uint8Array(3)
s[0]=37
r=a>>>4
if(!(r<16))return A.v(k,r)
s[1]=k.charCodeAt(r)
s[2]=k.charCodeAt(a&15)}else{if(a>2047)if(a>65535){q=240
p=4}else{q=224
p=3}else{q=192
p=2}r=3*p
s=new Uint8Array(r)
for(o=0;--p,p>=0;q=128){n=B.w.hy(a,6*p)&63|q
if(!(o<r))return A.v(s,o)
s[o]=37
m=o+1
l=n>>>4
if(!(l<16))return A.v(k,l)
if(!(m<r))return A.v(s,m)
s[m]=k.charCodeAt(l)
l=o+2
if(!(l<r))return A.v(s,l)
s[l]=k.charCodeAt(n&15)
o+=3}}return A.rE(s,0,null)},
fM(a,b,c,d,e,f){var s=A.t6(a,b,c,d,e,f)
return s==null?B.b.t(a,b,c):s},
t6(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h=u.v
for(s=!e,r=a.length,q=b,p=q,o=i;q<c;){if(!(q>=0&&q<r))return A.v(a,q)
n=a.charCodeAt(q)
if(n<127&&(h.charCodeAt(n)&d)!==0)++q
else{m=1
if(n===37){l=A.qx(a,q,!1)
if(l==null){q+=3
continue}if("%"===l)l="%25"
else m=3}else if(n===92&&f)l="/"
else if(s&&n<=93&&(h.charCodeAt(n)&1024)!==0){A.ea(a,q,"Invalid character")
m=i
l=m}else{if((n&64512)===55296){k=q+1
if(k<c){if(!(k<r))return A.v(a,k)
j=a.charCodeAt(k)
if((j&64512)===56320){n=65536+((n&1023)<<10)+(j&1023)
m=2}}}l=A.qv(n)}if(o==null){o=new A.b2("")
k=o}else k=o
k.a=(k.a+=B.b.t(a,p,q))+l
if(typeof m!=="number")return A.y7(m)
q+=m
p=q}}if(o==null)return i
if(p<c){s=B.b.t(a,p,c)
o.a+=s}s=o.a
return s.charCodeAt(0)==0?s:s},
t5(a){if(B.b.K(a,"."))return!0
return B.b.cP(a,"/.")!==-1},
wI(a){var s,r,q,p,o,n,m
if(!A.t5(a))return a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(n===".."){m=s.length
if(m!==0){if(0>=m)return A.v(s,-1)
s.pop()
if(s.length===0)B.f.u(s,"")}p=!0}else{p="."===n
if(!p)B.f.u(s,n)}}if(p)B.f.u(s,"")
return B.f.J(s,"/")},
wH(a,b){var s,r,q,p,o,n
if(!A.t5(a))return!b?A.t3(a):a
s=A.d([],t.s)
for(r=a.split("/"),q=r.length,p=!1,o=0;o<q;++o){n=r[o]
if(".."===n){if(s.length!==0&&B.f.geu(s)!==".."){if(0>=s.length)return A.v(s,-1)
s.pop()}else B.f.u(s,"..")
p=!0}else{p="."===n
if(!p)B.f.u(s,n.length===0&&s.length===0?"./":n)}}if(s.length===0)return"./"
if(p)B.f.u(s,"")
if(!b){if(0>=s.length)return A.v(s,0)
B.f.i(s,0,A.t3(s[0]))}return B.f.J(s,"/")},
t3(a){var s,r,q,p=u.v,o=a.length
if(o>=2&&A.t4(a.charCodeAt(0)))for(s=1;s<o;++s){r=a.charCodeAt(s)
if(r===58)return B.b.t(a,0,s)+"%3A"+B.b.a5(a,s+1)
if(r<=127){if(!(r<128))return A.v(p,r)
q=(p.charCodeAt(r)&8)===0}else q=!0
if(q)break}return a},
ww(a,b){var s,r,q,p,o
for(s=a.length,r=0,q=0;q<2;++q){p=b+q
if(!(p<s))return A.v(a,p)
o=a.charCodeAt(p)
if(48<=o&&o<=57)r=r*16+o-48
else{o|=32
if(97<=o&&o<=102)r=r*16+o-87
else throw A.n(A.c5("Invalid URL encoding",null))}}return r},
qy(a,b,c,d,e){var s,r,q,p,o=a.length,n=b
for(;;){if(!(n<c)){s=!0
break}if(!(n<o))return A.v(a,n)
r=a.charCodeAt(n)
q=!0
if(r<=127)if(r!==37)q=r===43
if(q){s=!1
break}++n}if(s)if(B.a0===d)return B.b.t(a,b,c)
else p=new A.dx(B.b.t(a,b,c))
else{p=A.d([],t.t)
for(n=b;n<c;++n){if(!(n<o))return A.v(a,n)
r=a.charCodeAt(n)
if(r>127)throw A.n(A.c5("Illegal percent encoding in URI",null))
if(r===37){if(n+3>o)throw A.n(A.c5("Truncated URI",null))
B.f.u(p,A.ww(a,n+1))
n+=2}else if(r===43)B.f.u(p,32)
else B.f.u(p,r)}}t.B.a(p)
return B.nw.cH(p)},
t4(a){var s=a|32
return 97<=s&&s<=122},
rL(a,b,c){var s,r,q,p,o,n,m,l,k="Invalid MIME type",j=A.d([b-1],t.t)
for(s=a.length,r=b,q=-1,p=null;r<s;++r){p=a.charCodeAt(r)
if(p===44||p===59)break
if(p===47){if(q<0){q=r
continue}throw A.n(A.b0(k,a,r))}}if(q<0&&r>b)throw A.n(A.b0(k,a,r))
while(p!==44){B.f.u(j,r);++r
for(o=-1;r<s;++r){if(!(r>=0))return A.v(a,r)
p=a.charCodeAt(r)
if(p===61){if(o<0)o=r}else if(p===59||p===44)break}if(o>=0)B.f.u(j,o)
else{n=B.f.geu(j)
if(p!==44||r!==n+7||!B.b.X(a,"base64",n+1))throw A.n(A.b0("Expecting '='",a,r))
break}}B.f.u(j,r)
m=r+1
if((j.length&1)===1)a=B.dW.ip(0,a,m,s)
else{l=A.t6(a,m,s,256,!0,!1)
if(l!=null)a=B.b.aG(a,m,s,l)}return new A.o8(a,j,c)},
tt(a,b,c,d,e){var s,r,q,p,o,n='\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe3\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0e\x03\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\n\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\xeb\xeb\x8b\xeb\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x83\xeb\xeb\x8b\xeb\x8b\xeb\xcd\x8b\xeb\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x92\x83\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\x8b\xeb\x8b\xeb\x8b\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xebD\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12D\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe8\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05\xe5\xe5\xe5\x05\xe5D\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\xe5\x8a\xe5\xe5\x05\xe5\x05\xe5\xcd\x05\xe5\x05\x05\x05\x05\x05\x05\x05\x05\x05\x8a\x05\x05\x05\x05\x05\x05\x05\x05\x05\x05f\x05\xe5\x05\xe5\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7D\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\xe7\xe7\xe7\xe7\xe7\xe7\xcd\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\xe7\x8a\x07\x07\x07\x07\x07\x07\x07\x07\x07\x07\xe7\xe7\xe7\xe7\xe7\xac\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\x05\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\b\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x10\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x12\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\n\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\f\xec\xec\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\f\xec\xec\xec\xec\f\xec\f\xec\xcd\f\xec\f\f\f\f\f\f\f\f\f\xec\f\f\f\f\f\f\f\f\f\f\xec\f\xec\f\xec\f\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\r\xed\xed\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\r\xed\xed\xed\xed\r\xed\r\xed\xed\r\xed\r\r\r\r\r\r\r\r\r\xed\r\r\r\r\r\r\r\r\r\r\xed\r\xed\r\xed\r\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xea\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x0f\xea\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe1\xe1\x01\xe1\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\xe1\xe9\xe1\xe1\x01\xe1\x01\xe1\xcd\x01\xe1\x01\x01\x01\x01\x01\x01\x01\x01\x01\t\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01"\x01\xe1\x01\xe1\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x11\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xe9\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\t\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\x13\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xeb\xeb\v\xeb\xeb\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\v\xeb\xea\xeb\xeb\v\xeb\v\xeb\xcd\v\xeb\v\v\v\v\v\v\v\v\v\xea\v\v\v\v\v\v\v\v\v\v\xeb\v\xeb\v\xeb\xac\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\xf5\x15\xf5\x15\x15\xf5\x15\x15\x15\x15\x15\x15\x15\x15\x15\x15\xf5\xf5\xf5\xf5\xf5\xf5'
for(s=a.length,r=b;r<c;++r){if(!(r<s))return A.v(a,r)
q=a.charCodeAt(r)^96
if(q>95)q=31
p=d*96+q
if(!(p<2112))return A.v(n,p)
o=n.charCodeAt(p)
d=o&31
B.f.i(e,o>>>5,r)}return d},
oS:function oS(a){this.a=a},
cY:function cY(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a},
oj:function oj(){},
as:function as(){},
h1:function h1(a){this.a=a},
cp:function cp(){},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hO:function hO(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fb:function fb(a){this.a=a},
iS:function iS(a){this.a=a},
d4:function d4(a){this.a=a},
he:function he(a){this.a=a},
ig:function ig(){},
f4:function f4(){},
om:function om(a){this.a=a},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
o:function o(){},
a4:function a4(a,b,c){this.a=a
this.b=b
this.$ti=c},
aM:function aM(){},
T:function T(){},
jR:function jR(){},
nG:function nG(){this.b=this.a=0},
b2:function b2(a){this.a=a},
oa:function oa(a){this.a=a},
o9:function o9(a){this.a=a},
fL:function fL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
oR:function oR(a,b){this.a=a
this.b=b},
oQ:function oQ(a){this.a=a},
o8:function o8(a,b,c){this.a=a
this.b=b
this.c=c},
jG:function jG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=null},
j9:function j9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.z=_.y=_.w=$},
N:function N(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
eo:function eo(){},
c7:function c7(){},
hh:function hh(){},
am:function am(){},
dB:function dB(){},
l5:function l5(){},
bc:function bc(){},
bT:function bT(){},
hi:function hi(){},
hj:function hj(){},
hm:function hm(){},
ho:function ho(){},
eu:function eu(){},
ev:function ev(){},
hp:function hp(){},
hq:function hq(){},
L:function L(){},
x:function x(){},
bn:function bn(){},
ht:function ht(){},
hu:function hu(){},
hG:function hG(){},
bp:function bp(){},
hL:function hL(){},
d0:function d0(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
mq:function mq(a){this.a=a},
mr:function mr(a){this.a=a},
i2:function i2(){},
ms:function ms(a){this.a=a},
mt:function mt(a){this.a=a},
br:function br(){},
i3:function i3(){},
a5:function a5(){},
eX:function eX(){},
bs:function bs(){},
ik:function ik(){},
iq:function iq(){},
nt:function nt(a){this.a=a},
nu:function nu(a){this.a=a},
is:function is(){},
bt:function bt(){},
it:function it(){},
bu:function bu(){},
iu:function iu(){},
bv:function bv(){},
iy:function iy(){},
nH:function nH(a){this.a=a},
nI:function nI(a){this.a=a},
b8:function b8(){},
f9:function f9(){},
bw:function bw(){},
b9:function b9(){},
iI:function iI(){},
iJ:function iJ(){},
iL:function iL(){},
bx:function bx(){},
iN:function iN(){},
iO:function iO(){},
iW:function iW(){},
iY:function iY(){},
j7:function j7(){},
ff:function ff(){},
jk:function jk(){},
fs:function fs(){},
jK:function jK(){},
jS:function jS(){},
S:function S(){},
eA:function eA(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
j8:function j8(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
jf:function jf(){},
jg:function jg(){},
jn:function jn(){},
jo:function jo(){},
ju:function ju(){},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
jy:function jy(){},
jz:function jz(){},
jC:function jC(){},
jD:function jD(){},
jF:function jF(){},
fy:function fy(){},
fz:function fz(){},
jI:function jI(){},
jJ:function jJ(){},
jL:function jL(){},
jT:function jT(){},
jU:function jU(){},
fC:function fC(){},
fD:function fD(){},
jW:function jW(){},
jX:function jX(){},
k0:function k0(){},
k1:function k1(){},
k2:function k2(){},
k3:function k3(){},
k4:function k4(){},
k5:function k5(){},
k6:function k6(){},
k7:function k7(){},
k8:function k8(){},
k9:function k9(){},
mO:function mO(a){this.a=a},
p4(a){var s
if(typeof a=="function")throw A.n(A.c5("Attempting to rewrap a JS function.",null))
s=function(b,c){return function(d){return b(c,d,arguments.length)}}(A.wU,a)
s[$.qO()]=a
return s},
wU(a,b,c){t.Z.a(a)
if(A.b4(c)>=1)return a.$1(b)
return a.$0()},
yl(a,b){var s=new A.aq($.ai,b.h("aq<0>")),r=new A.cr(s,b.h("cr<0>"))
a.then(A.eg(new A.pV(r,b),1),A.eg(new A.pW(r),1))
return s},
tm(a){return a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string"||a instanceof Int8Array||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int16Array||a instanceof Uint16Array||a instanceof Int32Array||a instanceof Uint32Array||a instanceof Float32Array||a instanceof Float64Array||a instanceof ArrayBuffer||a instanceof DataView},
tC(a){if(A.tm(a))return a
return new A.pH(new A.fn(t.hg)).$1(a)},
pV:function pV(a,b){this.a=a
this.b=b},
pW:function pW(a){this.a=a},
pH:function pH(a){this.a=a},
bD:function bD(){},
hW:function hW(){},
bG:function bG(){},
id:function id(){},
il:function il(){},
iA:function iA(){},
bI:function bI(){},
iP:function iP(){},
jr:function jr(){},
js:function js(){},
jA:function jA(){},
jB:function jB(){},
jP:function jP(){},
jQ:function jQ(){},
jY:function jY(){},
jZ:function jZ(){},
h3:function h3(){},
h4:function h4(){},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
h5:function h5(){},
cy:function cy(){},
ie:function ie(){},
j5:function j5(){},
e3:function e3(a,b){this.a=a
this.b=b},
hz(a,b,c,d,e,f,g,h){var s=c==null?A.vm(a,f,e):c,r=Date.now()
return new A.bU(a,f,b,h,d,s,new A.cY(r,0,!1))},
vl(a,b,c){var s=null
if(a instanceof A.bU)return a
return A.hz(J.t(a),s,s,b,a,s,s,c)},
vm(a,b,c){var s=a.toLowerCase()
if(B.b.H(s,"cancel"))return B.jn
if(b===408||B.b.H(s,"timeout"))return B.cT
if(b!=null)return B.bt
if(c instanceof A.bX)return B.jo
if(B.b.H(s,"network"))return B.cU
return B.jm},
rj(a,b,c,d,e,f,g,h,i){var s=B.aX.H(0,e)
B.aX.H(0,e)
if(!B.aX.H(0,e))A.hz("HTTP "+e,a,B.bt,d,null,e,null,h)
Date.now()
return new A.c9(e,a,g,c,s,f,i.h("c9<0>"))},
cB:function cB(a,b){this.a=a
this.b=b},
eD:function eD(a,b){this.a=a
this.b=b},
nF:function nF(){},
bU:function bU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
c9:function c9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.Q=f
_.$ti=g},
l9:function l9(a,b,c,d,e,f,g,h,i,j){var _=this
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
lb:function lb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
lc:function lc(a,b,c){this.a=a
this.b=b
this.c=c},
ld:function ld(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
la:function la(){},
lq:function lq(a,b,c,d,e,f,g,h,i,j){var _=this
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
lt:function lt(a){this.a=a},
lu:function lu(a){this.a=a},
lv:function lv(a){this.a=a},
lw:function lw(a){this.a=a},
lx:function lx(){},
lr:function lr(a){this.a=a},
ls:function ls(a){this.a=a},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
kD:function kD(){},
rP(a){var s,r,q,p,o=null,n=A.aV(A.z(v.G.document).activeElement)
if(n==null||!A.eb(a.contains(n)))return o
s=A.X(n.value)
r=A.X(n.id).length===0?o:A.X(n.id)
q=A.X(n.name).length===0?o:A.X(n.name)
p=A.X(n.type).length===0?o:A.X(n.type)
return new A.oe("input",s,r,q,p,A.w5(a,n),A.qz(n.selectionStart),A.qz(n.selectionEnd))},
w5(a,b){var s,r,q,p,o,n,m=A.d([],t.t),l=m.$flags|0,k=b
for(;;){s=J.bl(k)
r=s.O(k,a)
if(!!r)break
q=A.aV(k.parentNode)
if(q==null)return null
p=A.z(q.childNodes)
n=0
for(;;){if(!(n<A.b4(p.length))){o=-1
break}if(J.ac(A.aV(p.item(n)),k)){o=n
break}++n}if(o===-1)return null
l&1&&A.by(m,"insert",2)
m.splice(0,0,o)
k=q}if(!s.O(k,a))return null
return m},
le:function le(a,b){var _=this
_.a=a
_.b=null
_.c=b
_.e=_.d=!1},
ln:function ln(a){this.a=a},
li:function li(a,b){this.a=a
this.b=b},
lm:function lm(a,b){this.a=a
this.b=b},
lk:function lk(a,b){this.a=a
this.b=b},
ll:function ll(a,b){this.a=a
this.b=b},
lf:function lf(a,b){this.a=a
this.b=b},
lg:function lg(){},
lh:function lh(){},
lj:function lj(a){this.a=a},
fe:function fe(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.e=_.d=!1},
oe:function oe(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
wT(){var s,r,q=A.z(A.z(v.G.window).location),p=A.X(q.origin)
if(p.length!==0)return p
s=A.X(q.protocol)
r=A.X(q.host)
if(s.length!==0&&r.length!==0)return s+"//"+r
return"http://localhost"},
l1:function l1(a){this.a=a},
a_:function a_(){},
iw:function iw(){},
f(a,b,c,d,e){var s,r,q,p,o,n,m,l="className",k=null,j="style",i=a.j(0,l),h=i==null?k:J.t(i),g=a.j(0,j)
i=c==null
s=i?k:c.a7()
if(s==null)s=B.a
A:{if(t.L.b(g)){r=g
break A}if(typeof g=="string"){r=A.ak(["_cssText",g],t.N,t.X)
break A}r=B.a
break A}q=A.tJ(d,B.a,s,e,r)
r=t.N
s=t.X
p=A.bd(a,r,s)
p.T(0,j)
if(i)o=k
else o=c.aA!=null||c.aB!=null||c.aC!=null||c.aD!=null||c.bJ!=null||c.bK!=null||c.bL!=null||c.bM!=null||c.bN!=null||c.bO!=null||c.bP!=null
if(o===!0){c.toString
n="flint-s-"+B.w.iF(A.xE(A.xz(c)),36)}else n=k
m=A.yf(A.d([h,b,n],t.d4))
s=A.bd(p,r,s)
if(m.length!==0)s.i(0,l,m)
if(n!=null){c.toString
s.i(0,"_flintStyleCss",A.xy(n,c))}if(q.a!==0){if(typeof g=="string"){i=i?k:c.a7()
i=new A.aG(A.d([A.q_(A.tJ(d,B.a,i==null?B.a:i,e,B.a)),g],t.s),t.bB.a(new A.pU()),t.cc).J(0,"; ")}else i=q
s.i(0,j,i)}return s},
tJ(a,b,c,d,e){var s,r,q,p,o,n=A.a0(t.N,t.X)
for(s=[a,b,c,d,e],r=0;r<5;++r)for(q=J.ek(s[r]),q=q.gv(q);q.m();){p=q.gq(q)
o=p.b
if(o!=null&&p.a!=="_cssText")n.i(0,p.a,o)}return n},
h(a,b){var s,r,q=[]
if(a!=null)q.push(a)
B.f.S(q,b)
s=A.az(q)
r=s.h("af<1,M>")
q=A.aC(new A.af(q,s.h("M(1)").a(A.pC()),r),r.h("ax.E"))
q.$flags=1
return q},
yv(a){var s
if(a instanceof A.M)return a
if(a instanceof A.a_)return new A.dE(a)
if(t.U.b(a))return new A.eB(J.kh(a,A.pC(),t.f0).bT(0,!1))
s=a==null?null:J.t(a)
return new A.cC(s==null?"":s)},
yf(a){var s=A.az(a)
return new A.aT(new A.aG(a,s.h("ad(1)").a(new A.pR()),s.h("aG<1>")),s.h("j(1)").a(new A.pS()),s.h("aT<1,j>")).J(0," ")},
q_(a){var s=A.Q(a).h("ah<1,2>")
return new A.aT(new A.aG(new A.ah(a,s),s.h("ad(o.E)").a(new A.q0()),s.h("aG<o.E>")),s.h("j(o.E)").a(new A.q1()),s.h("aT<o.E,j>")).J(0,"; ")},
xy(a,b){var s,r,q,p,o,n=A.d([],t.s)
for(s=b.gd4(),s=new A.ah(s,A.Q(s).h("ah<1,2>")).gv(0),r="."+a;s.m();){q=s.d
p=A.qD(q.b.a7())
if(p.length===0)continue
B.f.u(n,r+q.a+" { "+p+"; }")}for(s=b.geA(),s=new A.ah(s,A.Q(s).h("ah<1,2>")).gv(0);s.m();){q=s.d
p=A.qD(q.b.a7())
if(p.length===0)continue
o=q.a.c
B.f.u(n,'[data-theme="'+o+'"] .'+a+", ."+a+'[data-theme="'+o+'"] { '+p+"; }")}for(s=b.gef(),s=new A.ah(s,A.Q(s).h("ah<1,2>")).gv(0);s.m();){q=s.d
p=A.qD(q.b.a7())
if(p.length===0)continue
B.f.u(n,"@media (min-width: "+q.a.c+"px) { ."+a+" { "+p+"; } }")}return B.f.J(n,"\n")},
xz(a){var s,r=a.gd4(),q=A.Q(r).h("ah<1,2>"),p=t.N
r=A.aC(A.bq(new A.ah(r,q),q.h("j(o.E)").a(new A.p8()),q.h("o.E"),p),p)
q=a.geA()
s=A.Q(q).h("ah<1,2>")
B.f.S(r,A.bq(new A.ah(q,s),s.h("j(o.E)").a(new A.p9()),s.h("o.E"),p))
s=a.gef()
q=A.Q(s).h("ah<1,2>")
B.f.S(r,A.bq(new A.ah(s,q),q.h("j(o.E)").a(new A.pa()),q.h("o.E"),p))
return B.f.J(r,"|")},
qD(a){var s=A.Q(a).h("ah<1,2>")
return new A.aT(new A.aG(new A.ah(a,s),s.h("ad(o.E)").a(new A.pb()),s.h("aG<o.E>")),s.h("j(o.E)").a(new A.pc()),s.h("aT<o.E,j>")).J(0,"; ")},
xE(a){var s,r,q,p
for(s=new A.dx(a),r=t.e8,s=new A.bE(s,s.gk(0),r.h("bE<C.E>")),r=r.h("C.E"),q=2166136261;s.m();){p=s.d
q=((q^(p==null?r.a(p):p))>>>0)*16777619>>>0}return q},
pU:function pU(){},
pR:function pR(){},
pS:function pS(){},
q0:function q0(){},
q1:function q1(){},
p8:function p8(){},
p9:function p9(){},
pa:function pa(){},
pb:function pb(){},
pc:function pc(){},
mQ:function mQ(a){this.a=a},
h9:function h9(){},
M:function M(){},
cC:function cC(a){this.a=a},
eB:function eB(a){this.a=a},
a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},
dE:function dE(a){this.a=a},
o1:function o1(a,b){this.a=a
this.b=b},
o2:function o2(){},
o4:function o4(a){this.a=a},
o5:function o5(a,b){this.a=a
this.b=b},
o3:function o3(a,b){this.a=a
this.b=b},
ri(a){var s,r,q=J.ao(a),p=q.j(a,"component")
p=p==null?null:J.t(p)
if(p==null)p=""
s=A.wQ(q.j(a,"props"))
r=q.j(a,"url")
if(r!=null)J.t(r)
q=q.j(a,"version")
if(q!=null)J.t(q)
return new A.eC(p,s)},
xY(a,b,c){var s,r,q,p,o,n,m,l,k,j=null,i="from",h="to",g={},f=v.G,e=A.aV(A.z(f.document).querySelector(a))
if(e==null)throw A.n(A.an('No element found for selector "'+a+'".'))
s=A.x7(c,j,j)
r=s!=null
if(r&&A.bK(e.getAttribute("data-theme"))==null)e.setAttribute("data-theme",s.c)
if(r){r=$.q5()
r.b=B.aD
r.c="flint.theme.mode"
r.d=e
q=r.a
p=r.hD()
if(p==null)p=r.hM()
if(p==null)p=s
q.a=q.$ti.c.a(p)
q.bR()
r.df(q.a)}r=t.cB
A.qJ(A.rA(j,j,j,A.d([new A.cm("flint-spin",A.d([new A.aR(i,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.be("rotate("+A.G(0,!1)+")"),j,j,j,j,j,j,j,j)),new A.aR(h,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.be("rotate("+A.G("360deg",!1)+")"),j,j,j,j,j,j,j,j))],r)),new A.cm("flint-fade-in",A.d([new A.aR(i,B.hD),new A.aR(h,B.fq)],r)),new A.cm("flint-slide-up",A.d([new A.aR(i,B.hH),new A.aR(h,B.c5)],r)),new A.cm("flint-slide-down",A.d([new A.aR(i,B.hS),new A.aR(h,B.c5)],r)),new A.cm("flint-scale-in",A.d([new A.aR(i,B.hZ),new A.aR(h,B.hT)],r))],t.o),j,"flint-animations",j,j))
o=A.wM(j,j,j)
if(o!=null)A.qJ(o)
A.qJ(c)
for(n=0;!1;++n)A.ym(B.kx[n])
m=A.bK(e.getAttribute("data-flint-page"))
if(m==null||B.b.D(m).length===0)A.ce(A.an("Missing data-flint-page payload on Flint app root."))
l=B.J.aX(0,m,j)
if(!t.P.b(l))A.ce(A.an("Invalid Flint page payload."))
k=A.ri(l)
g.a=0
r=new A.pG(g,e,B.ky,b,j,j,j,new A.le(e,A.a0(t.N,t.e)))
q=new A.pF(g,a,e,r)
r.$2(k,0)
A.z(f.window).addEventListener("flint:navigate",A.p4(new A.pD(q)))
A.z(f.window).addEventListener("popstate",A.p4(new A.pE(q)))},
wM(a,b,c){return null},
x7(a,b,c){var s=a.c
s=s==null?null:s.c
return s},
wQ(a){if(t.P.b(a))return a
if(t.G.b(a))return J.cQ(a,new A.oZ(),t.N,t.z)
return B.a5},
x0(a){var s,r=v.G,q=A.X(A.z(A.z(r.window).location).pathname),p=A.X(A.z(A.z(r.window).location).search),o=A.z(new r.XMLHttpRequest())
r=new A.aq($.ai,t.bJ)
s=new A.cr(r,t.cp)
o.open("GET",q+p,!0)
o.setRequestHeader("Accept","text/html")
p=t.an
q=t.m
A.cJ(o,"load",p.a(new A.p2(o,s,a)),!1,q)
A.cJ(o,"error",p.a(new A.p3(s)),!1,q)
o.send()
return r},
xJ(a){var s,r,q,p=A.c0("<title[^>]*>(.*?)</title>",!1,!0).ib(a)
if(p==null)return null
s=p.b
if(1>=s.length)return A.v(s,1)
r=s[1]
if(r==null)r=""
q=A.z(A.z(v.G.document).createElement("textarea"))
q.innerHTML=r
s=A.bK(q.textContent)
return B.b.D(s==null?r:s)},
eC:function eC(a,b){this.a=a
this.b=b},
hA:function hA(){},
pG:function pG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h},
pF:function pF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pD:function pD(a){this.a=a},
pE:function pE(a){this.a=a},
oZ:function oZ(){},
p2:function p2(a,b,c){this.a=a
this.b=b
this.c=c},
p3:function p3(a){this.a=a},
fi:function fi(a,b){this.a=a
this.b=b},
vQ(a,b){return new A.dZ(a,A.dO(b.h("~(0)")),b.h("dZ<0>"))},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
nE:function nE(a,b){this.a=a
this.b=b},
cG:function cG(a,b,c){var _=this
_.c=a
_.d=b
_.a=_.f=_.e=null
_.$ti=c},
nD:function nD(a){this.a=a},
nC:function nC(){},
ep:function ep(){},
kX:function kX(){},
l3:function l3(a,b){this.a=a
this.b=b},
l4:function l4(){},
hZ:function hZ(){},
iZ:function iZ(){},
ar(a){return new A.e(a)},
c8(a,b,c,d){return new A.e("rgba("+a+", "+b+", "+c+", "+A.Z(d)+")")},
a(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3){return new A.l(e0,c7,f9,b7,d3,d0,d2,c9,a1,b4,b,c1,c0,a3,a5,a8,a6,a7,a4,b6,e1,f4,e4,n,c2,g3,d6,d8,d9,o,e5,e6,d,d4,f5,e,c8,b1,b2,b3,c6,c3,q,f0,f3,f1,f2,f8,g1,d7,r,e3,f,e2,h,m,l,i,k,j,e8,d5,b5,g,f7,f6,c,g0,b8,a9,b0,a,a0,p,e7,a2,b9,c5,s,e9,d1,c4,g2)},
xB(a){return null},
xq(a){return null},
aX(a,b){var s=A.az(b)
return new A.eF("linear-gradient("+a+"deg, "+new A.af(b,s.h("j(1)").a(A.qL()),s.h("af<1,j>")).J(0,", ")+")")},
aY(a,b){var s=A.G(a,!1),r=A.az(b)
return new A.eF("radial-gradient("+("circle at "+s)+", "+new A.af(b,r.h("j(1)").a(A.qL()),r.h("af<1,j>")).J(0,", ")+")")},
aK(a){var s
if(a.length===0)throw A.n(A.en(a,"layers","Must not be empty."))
s=A.az(a)
return new A.kE(new A.af(a,s.h("j(1)").a(A.yt()),s.h("af<1,j>")).J(0,", "))},
x6(a){A.ab(a)
if(a instanceof A.K)return a.n()
return A.G(a,!1)},
x5(a){var s
if(typeof a=="number"){B.w.b9(a,1)
s=B.w.iC(a)
return""+s+"%"}return A.G(a,!1)},
vZ(a,b){return new A.b(a,b)},
a7(a,b){return new A.b("color."+a,b)},
qc(a){return new A.aR("from",a)},
qd(a){return new A.aR("to",a)},
eO(a,b){return new A.aR(a,b)},
iB(a,b){return new A.cm(a,b)},
rA(a,b,c,d,e,f,g,h){return new A.nr(f,g,h,c,b,a,e,d)},
qK(a){var s=A.Q(a).h("ah<1,2>")
return new A.aT(new A.aG(new A.ah(a,s),s.h("ad(o.E)").a(new A.pX()),s.h("aG<o.E>")),s.h("j(o.E)").a(new A.pY()),s.h("aT<o.E,j>")).J(0,"; ")},
xA(a,b){if((b==null?null:B.b.D(J.t(b)).toLowerCase())!=="none")return""
return B.f.J(A.d([a+"::-webkit-scrollbar { width: 0; height: 0; display: none; }",a+"::-webkit-scrollbar-track { background: transparent; }",a+"::-webkit-scrollbar-thumb { background: transparent; }"],t.s),"\n")},
dC(a,b,c){return new A.i(c,null,a,b)},
ew(a){return new A.i(a,a,a,a)},
ex(a,b){return new A.i(b,a,b,a)},
rC(a){return new A.I(""+a+"%")},
eG(a){var s
if(a.length===0)throw A.n(A.en(a,"tracks","Must not be empty."))
s=A.az(a)
return new A.aB(new A.af(a,s.h("j(1)").a(A.ys()),s.h("af<1,j>")).J(0," "))},
O(a,b){A.ab(a)
A.eb(b)
if(a instanceof A.aL)return a.a
if(a instanceof A.aB)return a.a
return A.G(a,b)},
b7(a,b,c){return new A.m(c,a,b)},
va(a,b){return new A.m(b,a,"solid")},
iD(a){return new A.be("translate3d("+A.G(0,!1)+", "+A.G(a,!1)+", "+A.G(0,!1)+")")},
rF(a){return new A.be("translateX("+A.G(a,!1)+")")},
iC(a){return new A.be("rotate("+A.G(a,!1)+")")},
qi(a){var s
if(a.length===0)throw A.n(A.en(a,"transforms","Must not be empty."))
s=A.az(a)
return new A.be(new A.af(a,s.h("j(1)").a(new A.nP()),s.h("af<1,j>")).J(0," "))},
rG(a){var s=""+a
return A.vV(A.d([new A.b3("color "+s+"ms ease"),new A.b3("background "+s+"ms ease"),new A.b3("border-color "+s+"ms ease")],t.fS))},
vV(a){var s
if(a.length===0)throw A.n(A.en(a,"transitions","Must not be empty."))
s=A.az(a)
return new A.b3(new A.af(a,s.h("j(1)").a(new A.nQ()),s.h("af<1,j>")).J(0,", "))},
vU(a,b,c,d){var s=A.d([a,""+c+"ms",d],t.f)
s.push(A.G(b,!0))
s.push(B.dS)
s.push(B.dT)
s.push(B.dV)
return new A.nL(new A.af(s,t.f7.a(new A.nM()),t.en).J(0," "))},
G(a,b){A.eb(b)
if(a==null)return""
if(a instanceof A.b)return a.n()
if(a instanceof A.I)return a.a
if(a instanceof A.hy)return a.n()
if(a instanceof A.m)return a.n()
if(a instanceof A.at)return a.n()
if(typeof a=="number")return b?B.a4.l(a):A.Z(a)+"px"
return J.t(a)},
xM(a){var s,r,q,p=A.a0(t.N,t.X)
for(s=new A.ah(a,A.Q(a).h("ah<1,2>")).gv(0);s.m();){r=s.d
q=r.b
if(q!=null&&!J.ac(q,""))p.i(0,r.a,q)}return p},
xw(a){var s,r=B.b.D(a),q=A.c0("[^a-zA-Z0-9_-]+",!0,!1)
r=A.cO(r,q,"-")
q=A.c0("^-+|-+$",!0,!1)
s=A.cO(r,q,"")
return s.length===0?"style":s},
e:function e(a){this.a=a},
l:function l(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,f0,f1,f2,f3,f4,f5,f6,f7,f8,f9,g0,g1,g2,g3){var _=this
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
_.cJ=c8
_.ei=c9
_.ej=d0
_.aZ=d1
_.cK=d2
_.b_=d3
_.b0=d4
_.b1=d5
_.cL=d6
_.i2=d7
_.cM=d8
_.i3=d9
_.ek=e0
_.b2=e1
_.b3=e2
_.i4=e3
_.cN=e4
_.cO=e5
_.b4=e6
_.el=e7
_.em=e8
_.bJ=e9
_.i5=f0
_.bK=f1
_.bL=f2
_.bM=f3
_.i6=f4
_.i7=f5
_.i8=f6
_.bN=f7
_.bO=f8
_.bP=f9
_.aA=g0
_.aB=g1
_.aC=g2
_.aD=g3},
eF:function eF(a){this.a=a},
lO:function lO(){},
kE:function kE(a){this.a=a},
bB:function bB(a){this.a=a},
hy:function hy(){},
K:function K(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.c=a
this.a=b
this.b=c},
iK:function iK(a){this.a=a},
bV:function bV(a,b,c){this.c=a
this.a=b
this.b=c},
b:function b(a,b){this.a=a
this.b=b},
hB:function hB(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
lp:function lp(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a,b){this.a=a
this.b=b},
cm:function cm(a,b){this.a=a
this.b=b},
nN:function nN(){},
nO:function nO(){},
nr:function nr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.e=d
_.f=e
_.r=f
_.w=g
_.y=h},
ns:function ns(){},
pX:function pX(){},
pY:function pY(){},
i:function i(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
l7:function l7(a){this.a=a},
I:function I(a){this.a=a},
aL:function aL(a){this.a=a},
aB:function aB(a){this.a=a},
m:function m(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
be:function be(a){this.a=a},
nP:function nP(){},
d5:function d5(a){this.a=a},
hC:function hC(a){this.a=a},
kW:function kW(){},
nv:function nv(){},
hk:function hk(a){this.a=a},
ih:function ih(a){this.a=a},
o_:function o_(){},
kF:function kF(){},
l8:function l8(){},
nq:function nq(){},
iQ:function iQ(a){this.a=a},
b3:function b3(a){this.a=a},
nQ:function nQ(){},
ki:function ki(){},
kj:function kj(){},
kl:function kl(){},
kk:function kk(){},
nL:function nL(a){this.a=a},
nM:function nM(){},
od:function od(){},
cA:function cA(a,b,c){this.c=a
this.a=b
this.b=c},
hx:function hx(a,b,c){this.c=a
this.a=b
this.b=c},
cR:function cR(a,b,c){this.c=a
this.a=b
this.b=c},
dN:function dN(a,b,c){this.c=a
this.a=b
this.b=c},
dT:function dT(a,b,c){this.c=a
this.a=b
this.b=c},
nY:function nY(a,b){this.a=a
this.b=b},
av(a,b,c,d,e,f,g,h,i,j){var s,r=t.N,q=t.X,p=A.bd(g,r,q),o=g.j(0,"type")
p.i(0,"type",o==null?"button":o)
o=!d
if(!o||e)p.i(0,"disabled",!0)
if(e)p.i(0,"aria-busy","true")
if(f!=null&&o&&!e)p.i(0,"onClick",f)
p=A.f(p,null,A.tz(d,e,h,i,j).Y(c),B.a,B.a)
o=A.d([],t.Y)
if(e){s=A.bd(B.a,r,q)
s.i(0,"role","status")
s.i(0,"aria-label","Loading")
r=A.f(s,null,null,A.ak(["display","inline-block","width",A.tO(B.c3),"height",A.tO(B.c3),"border","2px solid "+A.ka(i),"border-top-color",A.qM(i),"border-radius","999px","animation",A.G(A.vU("flint-spin",B.dU,800,B.nj),!1),"will-change",A.G(B.ea,!1),"flex-shrink",0],r,q),B.a)
o.push(new A.iv("span",r,B.aw))}B.f.S(o,A.h(a,b))
return new A.dt("button",p,o)},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
cD(a,b,c,d){return new A.eI(b,c,a,d)},
eI:function eI(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=null
_.f=c
_.r=null
_.w=d
_.x=!0
_.y=$
_.a=null},
iv:function iv(a,b,c){this.a=a
this.b=b
this.c=c},
hF(a){var s=t.N,r=A.d([],t.r),q=t.X
return new A.ly(A.qf(a,s,q),A.qf(a,s,q),A.a0(s,t.bO),r,B.G)},
co:function co(a,b){this.a=a
this.b=b},
ly:function ly(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
lA:function lA(a,b){this.a=a
this.b=b},
lz:function lz(a,b,c){this.a=a
this.b=b
this.c=c},
eE(a,b,c){var s=A.bd(B.a,t.N,t.X)
if(c!=null)s.i(0,"onSubmit",c)
return new A.hE("form",A.f(s,null,b,B.kR,B.a),A.h(null,a))},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
f8(a,b,c,d,e,f,g,h){var s,r=null,q="textarea",p=A.f(B.a,r,r,B.de,B.a),o=a.a,n=A.tN(r,b,d),m=A.vW(a,r),l=A.tE(q,d,B.a),k=A.tD(r,n,r,l),j=A.d([],t.Y)
j.push(A.tF(l,c,!0))
s=A.bd(A.tB(k,!1,n,l,d,B.a,!0),t.N,t.X)
s.i(0,"rows",g)
if(o!=null)s.i(0,"value",o)
s.i(0,"placeholder",e)
if(m!=null)s.i(0,"onInput",m)
j.push(new A.a8(q,A.f(s,r,A.tI(!1,n!=null&&n.length!==0,B.z,B.d8).Y(B.fD).Y(h),B.a,B.a),B.aw))
B.f.S(j,A.tG(n,r,l))
return new A.iG("div",p,j)},
vW(a,b){return new A.nZ(a,b)},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
nZ:function nZ(a,b){this.a=a
this.b=b},
c2(a,b,c,d,e,f,g,h){var s=null,r=A.f(B.a,s,s,B.de,B.a),q=a.a
return new A.iH("div",r,A.vX(!1,A.tN(s,b,e),s,c,B.a,B.a,d,e,A.vY(a,s),s,f,!1,g,B.z,h,q,B.d8))},
vY(a,b){return new A.o0(a,b)},
vX(a,b,c,d,e,f,g,h,i,j,k,l,m,n,a0,a1,a2){var s,r,q,p,o=A.tE("field",h,e)
e.j(0,"aria-describedby")
s=A.tD(null,b,c,o)
r=A.d([],t.Y)
r.push(A.tF(o,g,m))
q=A.bd(A.tB(s,!1,b,o,h,e,m),t.N,t.X)
q.i(0,"type",a0)
if(a1!=null)q.i(0,"value",a1)
q.i(0,"placeholder",k)
if(i!=null)q.i(0,"onInput",i)
p=A.tI(!1,b!=null&&b.length!==0,n,a2)
r.push(new A.a8("input",A.f(q,null,p.Y(null).Y(d),B.a,f),B.aw))
B.f.S(r,A.tG(b,c,o))
return r},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
o0:function o0(a,b){this.a=a
this.b=b},
ch(a){var s,r,q,p,o
if(a==null)return B.G
if(t.V.b(a)){s=A.a0(t.N,t.a)
for(r=J.ek(a),r=r.gv(r),q=t.s;r.m();){p=r.gq(r)
s.i(0,p.a,A.d([p.b],q))}return new A.bW(s)}o=A.x_(a)
s=A.a0(t.N,t.a)
for(r=J.ek(o),r=r.gv(r);r.m();){q=r.gq(r)
s.i(0,J.t(q.a),A.xr(q.b))}return new A.bW(s)},
tN(a,b,c){var s,r
if(b==null)s=null
else{r=b.i9(c)
s=r.length===0?null:B.f.gF(r)}return s},
x_(a){var s=J.P(a,"errors")
if(t.G.b(s))return s
return a},
xr(a){var s,r,q
if(a==null)return B.aV
if(typeof a=="string")return A.d([a],t.s)
if(t.U.b(a)){s=A.d([],t.s)
for(r=J.b6(a);r.m();){q=r.gq(r)
if(q!=null&&J.t(q).length!==0)s.push(J.t(q))}return s}return A.d([J.t(a)],t.s)},
bW:function bW(a){this.a=a},
lB:function lB(a){this.a=a},
aa(a,b){return new A.mf(a,b)},
vq(a,b){return new A.bC(a,b)},
F(a,b,c){var s,r,q="currentColor",p=t.N,o=t.X,n=A.bd(B.a,p,o)
n.i(0,"xmlns","http://www.w3.org/2000/svg")
n.i(0,"viewBox","0 0 24 24")
n.i(0,"fill","none")
n.i(0,"stroke",q)
n.i(0,"stroke-width",2)
n.i(0,"stroke-linecap","round")
n.i(0,"stroke-linejoin","round")
n.i(0,"focusable","false")
n.i(0,"aria-hidden","true")
s=A.tg(c)
r=A.tg(c)
p=A.f(n,null,null,A.ak(["display","inline-block","width",s,"height",r,"color",b==null?q:b,"vertical-align","middle","flex-shrink",0],p,o),B.a)
o=A.d([],t.Y)
n=a.c
s=A.az(n)
B.f.S(o,new A.af(n,s.h("M(1)").a(new A.mg()),s.h("af<1,M>")))
return new A.hM("svg",p,o)},
tg(a){return""+a+"px"},
a3(a){return new A.bC("path",A.ak(["d",a],t.N,t.X))},
cd(a){return new A.bC("polyline",A.ak(["points",a],t.N,t.X))},
tn(a){return new A.bC("polygon",A.ak(["points",a],t.N,t.X))},
aO(a,b,c,d){return new A.bC("line",A.ak(["x1",a,"y1",b,"x2",c,"y2",d],t.N,t.X))},
cc(a,b,c){return new A.bC("circle",A.ak(["cx",a,"cy",b,"r",c],t.N,t.X))},
fR(a,b,c,d,e){var s=A.a0(t.N,t.X)
s.i(0,"x",a)
s.i(0,"y",b)
s.i(0,"width",c)
s.i(0,"height",d)
if(e!=null)s.i(0,"rx",e)
return new A.bC("rect",s)},
mf:function mf(a,b){this.a=a
this.c=b},
bC:function bC(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
mg:function mg(){},
hI(a,b,c){var s=null,r=A.a0(t.N,t.X)
r.i(0,"display","grid")
r.i(0,"grid-template-columns",A.wW(b))
r.i(0,"gap",A.G(c,!1))
return new A.hH("div",A.f(B.a,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s).Y(s),r,B.a),A.h(s,a))},
wW(a){return A.G(a,!1)},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
qn(a,b,c){var s=A.a0(t.N,t.X)
s.i(0,"display","flex")
s.i(0,"flex-wrap",A.G(B.j,!0))
s.i(0,"gap",A.G(c,!1))
return new A.j0("div",A.f(B.a,null,b,s,B.a),A.h(null,a))},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
aw(a,b){var s=null,r=b.x
if(r===B.e)r=B.d
else if(r==null)r=B.d
return new A.hd("div",A.f(B.a,s,A.a(s,b.z,s,s,b.p3,b.b_,s,b.b1,s,s,s,s,s,b.fr,s,s,b.x1,b.aZ,s,s,r,s,s,s,B.u,s,s,b.ay,s,s,s,b.RG,b.rx,b.y,s,s,b.d,s,s,b.as,s,b.fx,s,b.aC,s,s,b.b,s,b.w,b.f,b.aB,b.r,b.e,s,b.b3,b.go,s,s,s,b.a,b.db,b.b0,s,b.dy,s,s,s,b.b2,b.aA,b.x2,s,s,s,b.dx,b.p2,b.b4,s,s,b.c,s,s,b.aD,b.fy),B.kV,B.a),A.h(s,a))},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
Y(a,b,c,d,e,f,g){var s=A.bd(B.a,t.N,t.X)
s.i(0,"href",d)
if(e!=null)s.i(0,"target",e)
return new A.hX("a",A.f(s,null,g==null?c:A.tz(!1,!1,B.z,f,g).Y(c),B.a,B.a),A.h(a,b))},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
w(a,b){var s=null,r=b.x
if(r===B.e)r=B.d
else if(r==null)r=B.d
return new A.ip("div",A.f(B.a,s,A.a(s,b.z,s,s,b.p3,b.b_,s,b.b1,s,s,s,s,s,b.fr,s,s,b.x1,b.aZ,s,s,r,s,s,s,B.a3,s,s,b.ay,s,s,s,b.RG,b.rx,b.y,s,s,b.d,s,s,b.as,s,b.fx,s,b.aC,s,s,b.b,s,s,b.f,b.aB,b.r,b.e,s,b.b3,b.go,s,s,s,b.a,b.db,b.b0,s,b.dy,s,s,s,b.b2,b.aA,b.x2,s,s,s,b.dx,b.p2,b.b4,s,s,b.c,s,s,b.aD,b.fy),B.kU,B.a),A.h(s,a))},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
tz(a,b,c,d,e){var s,r=null,q=$.v2().Y(A.xT(c)).Y(A.xU(e,d))
if(a||b)s=B.hF
else{s=A.xS(e,d)
s=A.a(A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.be("scale(0.98)"),r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.at(0,0,3,A.yy(d)),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,s,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)}return q.Y(s)},
xT(a){var s
switch(a.a){case 0:s=B.hO
break
case 1:s=B.h5
break
case 2:s=B.hn
break
case 3:s=B.fO
break
default:s=null}return s},
xU(a,b){var s,r=null,q="solid"
switch(a.a){case 0:s=A.a(r,r,r,r,r,A.qM(b),r,new A.m(1,A.qM(b),q),r,r,r,r,r,r,r,r,A.yz(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 1:s=A.a(r,r,r,r,r,A.ka(b),r,new A.m(1,A.ka(b),q),r,r,r,r,r,r,r,r,A.qN(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 2:s=A.a(r,r,r,r,r,B.x,r,new A.m(1,A.yx(b),q),r,r,r,r,r,r,r,r,A.qN(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 3:s=A.a(r,r,r,r,r,B.x,r,B.bB,r,r,r,r,r,r,r,r,A.qN(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
default:s=r}return s},
xS(a,b){var s,r=null
switch(a.a){case 0:s=A.a(r,r,r,r,r,A.tS(b),r,new A.m(1,A.tS(b),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 1:s=A.a(r,r,r,r,r,A.tR(b),r,new A.m(1,A.tR(b),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 2:s=A.a(r,r,r,r,r,A.ka(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
case 3:s=A.a(r,r,r,r,r,A.ka(b),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
break
default:s=r}return s},
tI(a,b,c,d){var s=null,r="solid",q="#d92d20",p="color.dangerSolid",o=new A.b("color.inputBorder","#d0d5dd").n(),n=new A.b("radius.md","8px").n(),m=new A.b("color.inputText","#101828").n(),l=new A.b("color.inputSurface","#ffffff").n(),k=A.rG(120),j=A.a(s,s,s,s,s,s,s,new A.m(1,new A.b("color.primarySolid","#155eef").n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.at(0,0,3,new A.b("color.primaryFocus","#155eef").n()),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),i=A.a(s,s,s,s,s,s,s,new A.m(1,new A.b(p,q).n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.at(0,0,3,new A.b("color.dangerFocus",q).n()),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),h=A.a(s,s,s,s,s,l,s,new A.m(1,o,r),s,s,s,s,s,s,s,s,m,s,s,A.a(s,s,s,s,s,new A.b("color.disabledSurface","#f3f4f6").n(),s,s,s,s,s,s,s,s,s,s,new A.b("color.disabledText","#98a2b3").n(),B.c4,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s,j,B.cW,s,s,s,s,s,s,s,i,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,n,s,s,s,s,s,s,s,s,s,s,s,s,s,k,s,s,B.m,s,s,s,s).Y(A.yb(c))
switch(d.a){case 0:o=B.fr
break
case 1:o=A.a(s,s,s,s,s,new A.b("color.inputSoft","#f9fafb").n(),s,new A.m(1,B.x,r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
break
case 2:o=A.a(s,s,s,s,s,B.x,s,B.bB,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
break
default:o=s}o=h.Y(o)
o=o.Y(s)
return o.Y(b?A.a(s,s,s,s,s,s,s,new A.m(1,new A.b(p,q).n(),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s):s)},
yb(a){var s
switch(a.a){case 0:s=B.ht
break
case 1:s=B.hC
break
case 2:s=B.h4
break
case 3:s=B.hG
break
default:s=null}return s},
tO(a){var s
switch(a.a){case 0:s="14px"
break
case 1:s="16px"
break
case 2:s="20px"
break
case 3:s="24px"
break
default:s=null}return s},
qM(a){var s
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
tS(a){var s
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
ka(a){var s
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
tR(a){var s
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
yx(a){var s
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
qN(a){var s
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
yz(a){var s
A:{if(B.nh===a){s=new A.b("color.warningOnSolid","#111827").n()
break A}s=new A.b("color.onSolid","#ffffff").n()
break A}return s},
yy(a){var s
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
e_:function e_(a,b){this.a=a
this.b=b},
er:function er(a,b){this.a=a
this.b=b},
du:function du(a,b){this.a=a
this.b=b},
mh:function mh(a,b){this.a=a
this.b=b},
xI(a){var s
A:{if("light"===a){s=B.av
break A}if("dark"===a){s=B.Y
break A}s=null
break A}return s},
lo:function lo(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ph:function ph(){},
pi:function pi(){},
pj:function pj(){},
pu:function pu(){},
pv:function pv(){},
pw:function pw(){},
px:function px(){},
py:function py(){},
pz:function pz(){},
pA:function pA(){},
pB:function pB(){},
pk:function pk(){},
pl:function pl(){},
pm:function pm(){},
pn:function pn(){},
po:function po(){},
pp:function pp(){},
pq:function pq(){},
pr:function pr(){},
ps:function ps(){},
pt:function pt(){},
xO(a){var s=A.vu(new A.aG(B.da,t.dt.a(new A.pe(a)),t.bv),t.bl)
if(s!=null)return s.b
return new A.aT(new A.aG(A.d(a.split("-"),t.s),t.bB.a(new A.pf()),t.cc),t.dG.a(new A.pg()),t.bZ).J(0," ")},
em:function em(a,b){this.c=a
this.d=b
this.a=null},
pe:function pe(a){this.a=a},
pf:function pf(){},
pg:function pg(){},
hJ:function hJ(a,b,c,d,e,f){var _=this
_.c=a
_.d=b
_.e=c
_.f=d
_.r=e
_.w=f
_.a=null},
rk(a,b){var s=A.a0(t.N,t.y)
if(B.f.H(B.kI,a))s.i(0,"routing",!0)
if(B.f.H(B.kF,a))s.i(0,"middleware",!0)
if(B.f.H(B.ku,a))s.i(0,"auth",!0)
if(B.f.H(B.kg,a))s.i(0,"models",!0)
return new A.hK(a,b,s)},
hK:function hK(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.a=null},
lT:function lT(a){this.a=a},
lU:function lU(a,b,c){this.a=a
this.b=b
this.c=c},
lS:function lS(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(){this.a=null},
kY:function kY(a){this.a=a},
hl:function hl(){this.a=null},
hv:function hv(){this.a=null},
oM(a,b,c,d,e,f,g,h,i){return new A.jH(i,g,c,d,e,a,h,b,f)},
V(a){return new A.fd(a)},
r(a,b,c){return new A.jV(a,b,c)},
eH:function eH(){var _=this
_.c=0
_.d="linux"
_.f=_.e=!1
_.a=null},
me:function me(a,b){this.a=a
this.b=b},
m8:function m8(a){this.a=a},
m9:function m9(a){this.a=a},
m7:function m7(a){this.a=a},
m5:function m5(a){this.a=a},
m6:function m6(a){this.a=a},
m4:function m4(a){this.a=a},
ma:function ma(a,b){this.a=a
this.b=b},
mb:function mb(a,b){this.a=a
this.b=b},
md:function md(a,b){this.a=a
this.b=b},
mc:function mc(a,b){this.a=a
this.b=b},
jH:function jH(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
fd:function fd(a){this.a=a},
jV:function jV(a,b,c){this.a=a
this.b=b
this.c=c},
ij:function ij(){this.a=null},
iR:function iR(){this.a=null},
j_:function j_(){this.a=null},
dn:function dn(a){this.c=a
this.a=null},
dp:function dp(a){this.c=a
this.a=null},
cT:function cT(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kn:function kn(a){this.a=a},
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a,b,c){this.a=a
this.b=b
this.c=c},
kr:function kr(a){this.a=a},
km:function km(){},
dq:function dq(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kI:function kI(){},
kH:function kH(a,b){this.a=a
this.b=b},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b},
kM:function kM(a,b,c){this.a=a
this.b=b
this.c=c},
kN:function kN(a,b,c){this.a=a
this.b=b
this.c=c},
kO:function kO(a){this.a=a},
kJ:function kJ(){},
dr:function dr(a){this.c=a
this.a=null},
kP:function kP(){},
cU:function cU(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
kR:function kR(a){this.a=a},
kS:function kS(a,b){this.a=a
this.b=b},
kT:function kT(a,b,c){this.a=a
this.b=b
this.c=c},
kU:function kU(a,b,c){this.a=a
this.b=b
this.c=c},
kV:function kV(a){this.a=a},
kQ:function kQ(){},
dv:function dv(a){this.b=a
this.a=null},
l0:function l0(){},
dw:function dw(a){this.c=a
this.a=null},
dA:function dA(a){this.b=a
this.a=null},
dD:function dD(a){this.b=a
this.a=null},
on(a,b,c,d,e,f,g,h,i){return new A.jh(h,e,c,i,d,a,g,b,f)},
R(a){return new A.fj(a)},
p(a,b,c){return new A.ji(a,b,c)},
dF:function dF(a){var _=this
_.c=a
_.d=0
_.f=_.e=!1
_.a=null},
lG:function lG(a){this.a=a},
lH:function lH(a){this.a=a},
lF:function lF(a){this.a=a},
lD:function lD(a){this.a=a},
lE:function lE(a){this.a=a},
lC:function lC(a){this.a=a},
lI:function lI(a,b){this.a=a
this.b=b},
lK:function lK(a,b){this.a=a
this.b=b},
lJ:function lJ(a,b){this.a=a
this.b=b},
lL:function lL(a,b){this.a=a
this.b=b},
lM:function lM(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i},
fj:function fj(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a){var _=this
_.c=a
_.d=null
_.e=!0
_.a=null},
lP:function lP(a,b){this.a=a
this.b=b},
lQ:function lQ(a){this.a=a},
lR:function lR(a){this.a=a},
oC(a,b,c,d,e,f,g,h){return new A.jl(h,e,d,a,g,b,f)},
J(a){return new A.fk(a)},
q(a,b,c){return new A.jm(a,b,c)},
dG:function dG(a){var _=this
_.c=a
_.d=0
_.f=_.e=!1
_.a=null},
lZ:function lZ(a){this.a=a},
m_:function m_(a){this.a=a},
lY:function lY(a){this.a=a},
lW:function lW(a){this.a=a},
lX:function lX(a){this.a=a},
lV:function lV(a){this.a=a},
m3:function m3(a){this.a=a},
m1:function m1(a,b){this.a=a
this.b=b},
m0:function m0(a,b){this.a=a
this.b=b},
m2:function m2(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.d=c
_.e=d
_.f=e
_.r=f
_.w=g},
fk:function fk(a){this.a=a},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a){this.c=a
this.a=null},
d3:function d3(a,b,c,d,e){var _=this
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
nc:function nc(){},
no:function no(a){this.a=a},
mW:function mW(a,b){this.a=a
this.b=b},
mX:function mX(a,b){this.a=a
this.b=b},
ni:function ni(a){this.a=a},
nj:function nj(a,b){this.a=a
this.b=b},
nk:function nk(a){this.a=a},
nl:function nl(a,b,c){this.a=a
this.b=b
this.c=c},
nm:function nm(a,b,c){this.a=a
this.b=b
this.c=c},
nn:function nn(a){this.a=a},
nb:function nb(){},
nh:function nh(a){this.a=a},
n2:function n2(a){this.a=a},
n1:function n1(a){this.a=a},
n3:function n3(a){this.a=a},
n0:function n0(a){this.a=a},
n4:function n4(a){this.a=a},
n5:function n5(a){this.a=a},
n6:function n6(a){this.a=a},
n_:function n_(a){this.a=a},
n7:function n7(a){this.a=a},
mZ:function mZ(a){this.a=a},
n8:function n8(a){this.a=a},
mY:function mY(a){this.a=a},
nd:function nd(){},
mU:function mU(a){this.a=a},
mV:function mV(a,b){this.a=a
this.b=b},
n9:function n9(a,b){this.a=a
this.b=b},
na:function na(a,b){this.a=a
this.b=b},
nf:function nf(a){this.a=a},
ng:function ng(a,b){this.a=a
this.b=b},
ne:function ne(a){this.a=a},
dU:function dU(a){this.c=a
this.a=null},
np:function np(){},
dX:function dX(a){this.c=a
this.a=null},
nx:function nx(){},
ny:function ny(){},
dY:function dY(a){this.c=a
this.a=null},
nB:function nB(){},
nz:function nz(){},
nA:function nA(){},
d6:function d6(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.f=null
_.r=!1
_.a=null},
nS:function nS(a){this.a=a},
nT:function nT(a,b){this.a=a
this.b=b},
nU:function nU(a,b,c){this.a=a
this.b=b
this.c=c},
nV:function nV(a,b,c){this.a=a
this.b=b
this.c=c},
nW:function nW(a){this.a=a},
nR:function nR(){},
e0:function e0(a){this.c=a
this.a=null},
e4:function e4(a){this.c=a
this.a=null},
h7(a,b,c,d,e){var s=t.r
return new A.h6(e,c,a,b,d,new A.co("",A.d([],s)),new A.co("",A.d([],s)),new A.co("",A.d([],s)))},
h6:function h6(a,b,c,d,e,f,g,h){var _=this
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
kA:function kA(a){this.a=a},
kz:function kz(a){this.a=a},
kB:function kB(a){this.a=a},
ky:function ky(a){this.a=a},
kC:function kC(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a,b){this.a=a
this.b=b},
kx:function kx(a){this.a=a},
hw:function hw(a){this.b=a
this.a=null},
hD:function hD(){this.a=null},
ic:function ic(a){var _=this
_.b=a
_.e=_.d=_.c=!1
_.a=null},
mF:function mF(a){this.a=a},
mE:function mE(a){this.a=a},
mz:function mz(a){this.a=a},
my:function my(a){this.a=a},
mH:function mH(a){this.a=a},
mG:function mG(a){this.a=a},
mN:function mN(a){this.a=a},
mM:function mM(){},
mK:function mK(a){this.a=a},
mJ:function mJ(a){this.a=a},
mL:function mL(a){this.a=a},
mI:function mI(a){this.a=a},
mC:function mC(a){this.a=a},
mB:function mB(a){this.a=a},
mD:function mD(a){this.a=a},
mA:function mA(a){this.a=a},
mw:function mw(a){this.a=a},
mv:function mv(a){this.a=a},
mx:function mx(a){this.a=a},
mu:function mu(a){this.a=a},
aD:function aD(a,b){this.c=a
this.d=b
this.a=null},
cJ(a,b,c,d,e){var s=A.xN(new A.ol(c),t.m)
s=s==null?null:A.p4(s)
if(s!=null)a.addEventListener(b,s,!1)
return new A.fh(a,b,s,!1,e.h("fh<0>"))},
xN(a,b){var s=$.ai
if(s===B.F)return a
return s.ee(a,b)},
q8:function q8(a,b){this.a=a
this.$ti=b},
ok:function ok(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fh:function fh(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
ol:function ol(a){this.a=a},
yk(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
yu(a){throw A.aP(A.rr(a),new Error())},
tQ(){throw A.aP(A.rr(""),new Error())},
td(a){var s,r,q,p
if(a==null)return a
if(typeof a=="string"||typeof a=="number"||A.p5(a))return a
s=Object.getPrototypeOf(a)
r=s===Object.prototype
r.toString
if(!r){r=s===null
r.toString}else r=!0
if(r)return A.cM(a)
r=Array.isArray(a)
r.toString
if(r){q=[]
p=0
for(;;){r=a.length
r.toString
if(!(p<r))break
q.push(A.td(a[p]));++p}return q}return a},
cM(a){var s,r,q,p,o,n
if(a==null)return null
s=A.a0(t.N,t.z)
r=Object.getOwnPropertyNames(a)
for(q=r.length,p=0;p<r.length;r.length===q||(0,A.aJ)(r),++p){o=r[p]
n=o
n.toString
s.i(0,n,A.td(a[o]))}return s},
cv(a,b,c){var s=A.az(b),r=s.h("af<1,M>")
s=A.aC(new A.af(b,s.h("M(1)").a(A.pC()),r),r.h("ax.E"))
s.$flags=1
return new A.a8(a,c,s)},
qJ(a){var s,r,q,p,o=a.a
if($.to.H(0,o))return
s=a.gbH(0)
if(B.b.D(s).length===0)return
r=v.G
q=A.aV(A.z(r.document).querySelector("head"))
if(q==null)return
p=A.z(A.z(r.document).createElement("style"))
p.setAttribute("data-flint-root-design",o)
p.textContent=s
A.z(q.appendChild(p))
$.to.u(0,o)},
ym(a){var s,r,q
if($.tp.H(0,a.gev(a)))return
s=v.G
r=A.aV(A.z(s.document).querySelector("head"))
if(r==null)return
q=A.z(A.z(s.document).createElement("style"))
q.setAttribute("data-flint-stylesheet",a.gev(a))
q.textContent=a.gbH(a)
A.z(r.appendChild(q))
$.tp.u(0,a.gev(a))},
tE(a,b,c){var s,r,q
c.j(0,"id")
s=b.length===0?a:b
r=A.c0("[^a-z0-9_-]+",!0,!1)
r=A.cO(s.toLowerCase(),r,"-")
q=A.c0("^-+|-+$",!0,!1)
return"flint-"+a+"-"+A.cO(r,q,"")},
tD(a,b,c,d){var s=A.d([],t.s)
if(b!=null&&b.length!==0)s.push(d+"-error")
return s.length===0?null:B.f.J(s," ")},
tG(a,b,c){var s=A.d([],t.Y)
if(a!=null&&a.length!==0)s.push(new A.a8("p",A.ak(["id",c+"-error","style",B.kP],t.N,t.X),A.h(a,B.h)))
return s},
tF(a,b,c){var s=A.ak(["for",a,"style",B.l2],t.N,t.X),r=A.d([new A.cC(b)],t.Y)
if(c)r.push(B.jr)
return new A.a8("label",s,r)},
tB(a,b,c,d,e,f,g){var s=A.bd(f,t.N,t.X)
s.i(0,"id",d)
s.i(0,"name",e)
if(g)s.i(0,"required",!0)
if(c!=null&&c.length!==0)s.i(0,"aria-invalid","true")
if(a!=null)s.i(0,"aria-describedby",a)
return s},
ba(a,b){return A.fO("h1",a,null,B.a,B.a,b)},
al(a,b){return A.fO("h2",a,null,B.a,B.a,b)},
bf(a,b){return A.fO("h3",a,null,B.a,B.a,b)},
H(a,b){return A.fO("p",a,null,B.a,B.a,b)},
u(a,b){return A.fO("span",a,null,B.a,B.a,b)},
fa(a,b){return A.fO("strong",a,null,B.a,B.a,b)},
fO(a,b,c,d,e,f){return new A.a8(a,A.f(d,c,f,B.a,e),A.h(b,B.h))},
fT(a){var s,r=document,q=r.createElement("textarea")
q.toString
B.ng.siH(q,a)
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
y_(){var s,r=window.navigator.platform,q=window.navigator.userAgent
q.toString
s=(A.Z(r)+" "+q).toLowerCase()
if(B.b.H(s,"win"))return"windows"
if(B.b.H(s,"mac"))return"macos"
if(B.b.H(s,"linux")||B.b.H(s,"x11"))return"linux"
return null},
yh(){A.xY("#app",$.v3(),$.v4())},
ty(a){var s=null,r=A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,"contain",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,a,s,s,s,s),q=A.bd(B.a,t.N,t.X)
q.i(0,"src","/logo-icon.png")
q.i(0,"alt","Flint Dart logo")
q.i(0,"width",A.G(a,!1))
q.i(0,"height",A.G(a,!1))
q.i(0,"loading","lazy")
q.i(0,"decoding","async")
return new A.hN("img",A.f(q,s,r,B.kQ,B.a),B.aw)}},B={}
var w=[A,J,B]
var $={}
A.qa.prototype={}
J.dI.prototype={
O(a,b){return a===b},
gL(a){return A.f_(a)},
l(a){return"Instance of '"+A.im(a)+"'"},
gU(a){return A.di(A.qA(this))}}
J.hQ.prototype={
l(a){return String(a)},
gL(a){return a?519018:218159},
gU(a){return A.di(t.y)},
$iap:1,
$iad:1}
J.eK.prototype={
O(a,b){return null==b},
l(a){return"null"},
gL(a){return 0},
$iap:1,
$iaM:1}
J.c.prototype={$iD:1}
J.cE.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.ii.prototype={}
J.e1.prototype={}
J.cj.prototype={
l(a){var s=a[$.qO()]
if(s==null)return this.eN(a)
return"JavaScript function for "+J.t(s)},
$ibY:1}
J.dL.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.dM.prototype={
gL(a){return 0},
l(a){return String(a)}}
J.a2.prototype={
u(a,b){A.az(a).c.a(b)
a.$flags&1&&A.by(a,29)
a.push(b)},
T(a,b){var s
a.$flags&1&&A.by(a,"remove",1)
for(s=0;s<a.length;++s)if(J.ac(a[s],b)){a.splice(s,1)
return!0}return!1},
aH(a,b){var s=A.az(a)
return new A.aG(a,s.h("ad(1)").a(b),s.h("aG<1>"))},
S(a,b){var s
A.az(a).h("o<1>").a(b)
a.$flags&1&&A.by(a,"addAll",2)
if(Array.isArray(b)){this.eT(a,b)
return}for(s=J.b6(b);s.m();)a.push(s.gq(s))},
eT(a,b){var s,r
t.q.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.n(A.aW(a))
for(r=0;r<s;++r)a.push(b[r])},
bG(a){a.$flags&1&&A.by(a,"clear","clear")
a.length=0},
ab(a,b,c){var s=A.az(a)
return new A.af(a,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("af<1,2>"))},
J(a,b){var s,r=A.hY(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.i(r,s,A.Z(a[s]))
return r.join(b)},
ie(a,b,c,d){var s,r,q
d.a(b)
A.az(a).C(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.n(A.aW(a))}return r},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
gF(a){if(a.length>0)return a[0]
throw A.n(A.dJ())},
geu(a){var s=a.length
if(s>0)return a[s-1]
throw A.n(A.dJ())},
cE(a,b){var s,r
A.az(a).h("ad(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(b.$1(a[r]))return!0
if(a.length!==s)throw A.n(A.aW(a))}return!1},
i1(a,b){var s,r
A.az(a).h("ad(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(!b.$1(a[r]))return!1
if(a.length!==s)throw A.n(A.aW(a))}return!0},
H(a,b){var s
for(s=0;s<a.length;++s)if(J.ac(a[s],b))return!0
return!1},
gB(a){return a.length===0},
gM(a){return a.length!==0},
l(a){return A.q9(a,"[","]")},
gv(a){return new J.cS(a,a.length,A.az(a).h("cS<1>"))},
gL(a){return A.f_(a)},
gk(a){return a.length},
j(a,b){if(!(b>=0&&b<a.length))throw A.n(A.pI(a,b))
return a[b]},
i(a,b,c){A.az(a).c.a(c)
a.$flags&2&&A.by(a)
if(!(b>=0&&b<a.length))throw A.n(A.pI(a,b))
a[b]=c},
eF(a,b){return new A.d9(a,b.h("d9<0>"))},
$iE:1,
$io:1,
$iB:1}
J.hP.prototype={
iG(a){var s,r,q
if(!Array.isArray(a))return null
s=a.$flags|0
if((s&4)!==0)r="const, "
else if((s&2)!==0)r="unmodifiable, "
else r=(s&1)!==0?"fixed, ":""
q="Instance of '"+A.im(a)+"'"
if(r==="")return q
return q+" ("+r+"length: "+a.length+")"}}
J.mi.prototype={}
J.cS.prototype={
gq(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p){q=A.aJ(q)
throw A.n(q)}s=r.c
if(s>=p){r.d=null
return!1}r.d=q[s]
r.c=s+1
return!0},
$iaj:1}
J.eL.prototype={
iC(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.n(A.U(""+a+".toInt()"))},
ic(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.n(A.U(""+a+".floor()"))},
iF(a,b){var s,r,q,p,o
if(b<2||b>36)throw A.n(A.aU(b,2,36,"radix",null))
s=a.toString(b)
r=s.length
q=r-1
if(!(q>=0))return A.v(s,q)
if(s.charCodeAt(q)!==41)return s
p=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(s)
if(p==null)A.ce(A.U("Unexpected toString result: "+s))
r=p.length
if(1>=r)return A.v(p,1)
s=p[1]
if(3>=r)return A.v(p,3)
o=+p[3]
r=p[2]
if(r!=null){s+=r
o-=r.length}return s+B.b.bV("0",o)},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gL(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
b9(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
eP(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.e3(a,b)},
a9(a,b){return(a|0)===a?a/b|0:this.e3(a,b)},
e3(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.n(A.U("Result of truncating division is "+A.Z(s)+": "+A.Z(a)+" ~/ "+b))},
hv(a,b){return b>31?0:a<<b>>>0},
cu(a,b){var s
if(a>0)s=this.e0(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
hy(a,b){if(0>b)throw A.n(A.tw(b))
return this.e0(a,b)},
e0(a,b){return b>31?0:a>>>b},
gU(a){return A.di(t.di)},
$iae:1,
$iaZ:1}
J.eJ.prototype={
gU(a){return A.di(t.S)},
$iap:1,
$iy:1}
J.hR.prototype={
gU(a){return A.di(t.i)},
$iap:1}
J.d1.prototype={
cC(a,b,c){var s=b.length
if(c>s)throw A.n(A.aU(c,0,s,null,null))
return new A.jN(b,a,c)},
ed(a,b){return this.cC(a,b,0)},
eh(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.a5(a,r-s)},
cY(a,b,c){A.vM(0,0,a.length,"startIndex")
return A.yr(a,b,c,0)},
eL(a,b){var s
if(typeof b=="string")return A.d(a.split(b),t.s)
else{if(b instanceof A.dK){s=b.e
s=!(s==null?b.e=b.fh():s)}else s=!1
if(s)return A.d(a.split(b.b),t.s)
else return this.fA(a,b)}},
aG(a,b,c,d){var s=A.dV(b,c,a.length)
return A.tP(a,b,s,d)},
fA(a,b){var s,r,q,p,o,n,m=A.d([],t.s)
for(s=J.r5(b,a),s=s.gv(s),r=0,q=1;s.m();){p=s.gq(s)
o=p.gbX(p)
n=p.gaY(p)
q=n-o
if(q===0&&r===o)continue
B.f.u(m,this.t(a,r,o))
r=n}if(r<a.length||q>0)B.f.u(m,this.a5(a,r))
return m},
X(a,b,c){var s
if(c<0||c>a.length)throw A.n(A.aU(c,0,a.length,null,null))
s=c+b.length
if(s>a.length)return!1
return b===a.substring(c,s)},
K(a,b){return this.X(a,b,0)},
t(a,b,c){return a.substring(b,A.dV(b,c,a.length))},
a5(a,b){return this.t(a,b,null)},
D(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(0>=o)return A.v(p,0)
if(p.charCodeAt(0)===133){s=J.ro(p,1)
if(s===o)return""}else s=0
r=o-1
if(!(r>=0))return A.v(p,r)
q=p.charCodeAt(r)===133?J.vx(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
eB(a){var s=a.trimStart(),r=s.length
if(r===0)return s
if(0>=r)return A.v(s,0)
if(s.charCodeAt(0)!==133)return s
return s.substring(J.ro(s,1))},
bV(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.n(B.e5)
for(s=a,r="";;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
ew(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bV(c,s)+a},
cS(a,b){return this.ew(a,b," ")},
bQ(a,b,c){var s
if(c<0||c>a.length)throw A.n(A.aU(c,0,a.length,null,null))
s=a.indexOf(b,c)
return s},
cP(a,b){return this.bQ(a,b,0)},
hW(a,b,c){var s=a.length
if(c>s)throw A.n(A.aU(c,0,s,null,null))
return A.yn(a,b,c)},
H(a,b){return this.hW(a,b,0)},
l(a){return a},
gL(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gU(a){return A.di(t.N)},
gk(a){return a.length},
$iap:1,
$imR:1,
$ij:1}
A.e5.prototype={
gv(a){return new A.eq(J.b6(this.a),A.Q(this).h("eq<1,2>"))},
gk(a){return J.bm(this.a)},
gB(a){return J.el(this.a)},
gM(a){return J.dm(this.a)},
gF(a){return A.Q(this).y[1].a(J.fY(this.a))},
l(a){return J.t(this.a)}}
A.eq.prototype={
m(){return this.a.m()},
gq(a){var s=this.a
return this.$ti.y[1].a(s.gq(s))},
$iaj:1}
A.cV.prototype={}
A.fg.prototype={$iE:1}
A.cW.prototype={
aU(a,b,c){return new A.cW(this.a,this.$ti.h("@<1,2>").C(b).C(c).h("cW<1,2,3,4>"))},
j(a,b){return this.$ti.h("4?").a(J.P(this.a,b))},
i(a,b,c){var s=this.$ti
s.y[2].a(b)
s.y[3].a(c)
J.au(this.a,s.c.a(b),s.y[1].a(c))},
T(a,b){return this.$ti.h("4?").a(J.v7(this.a,b))},
N(a,b){J.q6(this.a,new A.l_(this,this.$ti.h("~(3,4)").a(b)))},
gR(a){var s=this.$ti
return A.re(J.r8(this.a),s.c,s.y[2])},
ga2(a){var s=this.$ti
return A.re(J.q7(this.a),s.y[1],s.y[3])},
gk(a){return J.bm(this.a)},
gB(a){return J.el(this.a)},
gM(a){return J.dm(this.a)},
ga_(a){return J.ek(this.a).ab(0,new A.kZ(this),this.$ti.h("a4<3,4>"))}}
A.l_.prototype={
$2(a,b){var s=this.a.$ti
s.c.a(a)
s.y[1].a(b)
this.b.$2(s.y[2].a(a),s.y[3].a(b))},
$S(){return this.a.$ti.h("~(1,2)")}}
A.kZ.prototype={
$1(a){var s=this.a.$ti
s.h("a4<1,2>").a(a)
return new A.a4(s.y[2].a(a.a),s.y[3].a(a.b),s.h("a4<3,4>"))},
$S(){return this.a.$ti.h("a4<3,4>(a4<1,2>)")}}
A.hV.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.dx.prototype={
gk(a){return this.a.length},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.v(s,b)
return s.charCodeAt(b)}}
A.nw.prototype={}
A.E.prototype={}
A.ax.prototype={
gv(a){var s=this
return new A.bE(s,s.gk(s),A.Q(s).h("bE<ax.E>"))},
gB(a){return this.gk(this)===0},
gF(a){if(this.gk(this)===0)throw A.n(A.dJ())
return this.I(0,0)},
J(a,b){var s,r,q,p=this,o=p.gk(p)
if(b.length!==0){if(o===0)return""
s=A.Z(p.I(0,0))
if(o!==p.gk(p))throw A.n(A.aW(p))
for(r=s,q=1;q<o;++q){r=r+b+A.Z(p.I(0,q))
if(o!==p.gk(p))throw A.n(A.aW(p))}return r.charCodeAt(0)==0?r:r}else{for(q=0,r="";q<o;++q){r+=A.Z(p.I(0,q))
if(o!==p.gk(p))throw A.n(A.aW(p))}return r.charCodeAt(0)==0?r:r}},
aH(a,b){return this.d5(0,A.Q(this).h("ad(ax.E)").a(b))},
ab(a,b,c){var s=A.Q(this)
return new A.af(this,s.C(c).h("1(ax.E)").a(b),s.h("@<ax.E>").C(c).h("af<1,2>"))},
bT(a,b){var s=A.Q(this).h("ax.E")
if(b)s=A.aC(this,s)
else{s=A.aC(this,s)
s.$flags=1
s=s}return s}}
A.f6.prototype={
gfC(){var s=J.bm(this.a),r=this.c
if(r==null||r>s)return s
return r},
ghC(){var s=J.bm(this.a),r=this.b
if(r>s)return s
return r},
gk(a){var s,r=J.bm(this.a),q=this.b
if(q>=r)return 0
s=this.c
if(s==null||s>=r)return r-q
return s-q},
I(a,b){var s=this,r=s.ghC()+b
if(b<0||r>=s.gfC())throw A.n(A.aF(b,s.gk(0),s,"index"))
return J.r7(s.a,r)},
bT(a,b){var s,r,q,p=this,o=p.b,n=p.a,m=J.ao(n),l=m.gk(n),k=p.c
if(k!=null&&k<l)l=k
s=l-o
if(s<=0){n=p.$ti.c
return b?J.rm(0,n):J.rl(0,n)}r=A.hY(s,m.I(n,o),b,p.$ti.c)
for(q=1;q<s;++q){B.f.i(r,q,m.I(n,o+q))
if(m.gk(n)<l)throw A.n(A.aW(p))}return r},
iE(a){return this.bT(0,!0)}}
A.bE.prototype={
gq(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s,r=this,q=r.a,p=J.ao(q),o=p.gk(q)
if(r.b!==o)throw A.n(A.aW(q))
s=r.c
if(s>=o){r.d=null
return!1}r.d=p.I(q,s);++r.c
return!0},
$iaj:1}
A.aT.prototype={
gv(a){return new A.eS(J.b6(this.a),this.b,A.Q(this).h("eS<1,2>"))},
gk(a){return J.bm(this.a)},
gB(a){return J.el(this.a)},
gF(a){return this.b.$1(J.fY(this.a))}}
A.cZ.prototype={$iE:1}
A.eS.prototype={
m(){var s=this,r=s.b
if(r.m()){s.a=s.c.$1(r.gq(r))
return!0}s.a=null
return!1},
gq(a){var s=this.a
return s==null?this.$ti.y[1].a(s):s},
$iaj:1}
A.af.prototype={
gk(a){return J.bm(this.a)},
I(a,b){return this.b.$1(J.r7(this.a,b))}}
A.aG.prototype={
gv(a){return new A.d8(J.b6(this.a),this.b,this.$ti.h("d8<1>"))},
ab(a,b,c){var s=this.$ti
return new A.aT(this,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("aT<1,2>"))}}
A.d8.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(r.$1(s.gq(s)))return!0
return!1},
gq(a){var s=this.a
return s.gq(s)},
$iaj:1}
A.d7.prototype={
gv(a){var s=this.a
return new A.f7(s.gv(s),this.b,A.Q(this).h("f7<1>"))}}
A.ey.prototype={
gk(a){var s=this.a,r=s.gk(s)
s=this.b
if(r>s)return s
return r},
$iE:1}
A.f7.prototype={
m(){if(--this.b>=0)return this.a.m()
this.b=-1
return!1},
gq(a){var s
if(this.b<0){this.$ti.c.a(null)
return null}s=this.a
return s.gq(s)},
$iaj:1}
A.d9.prototype={
gv(a){return new A.fc(J.b6(this.a),this.$ti.h("fc<1>"))}}
A.fc.prototype={
m(){var s,r
for(s=this.a,r=this.$ti.c;s.m();)if(r.b(s.gq(s)))return!0
return!1},
gq(a){var s=this.a
return this.$ti.c.a(s.gq(s))},
$iaj:1}
A.aA.prototype={
sk(a,b){throw A.n(A.U("Cannot change the length of a fixed-length list"))},
u(a,b){A.aI(a).h("aA.E").a(b)
throw A.n(A.U("Cannot add to a fixed-length list"))}}
A.cH.prototype={
i(a,b,c){A.Q(this).h("cH.E").a(c)
throw A.n(A.U("Cannot modify an unmodifiable list"))},
sk(a,b){throw A.n(A.U("Cannot change the length of an unmodifiable list"))},
u(a,b){A.Q(this).h("cH.E").a(b)
throw A.n(A.U("Cannot add to an unmodifiable list"))}}
A.e2.prototype={}
A.ag.prototype={$r:"+(1,2)",$s:1}
A.aH.prototype={$r:"+body,title(1,2)",$s:2}
A.a1.prototype={$r:"+(1,2,3)",$s:3}
A.cb.prototype={$r:"+(1,2,3,4)",$s:4}
A.et.prototype={}
A.es.prototype={
aU(a,b,c){var s=A.Q(this)
return A.rv(this,s.c,s.y[1],b,c)},
gB(a){return this.gk(this)===0},
gM(a){return this.gk(this)!==0},
l(a){return A.qg(this)},
i(a,b,c){var s=A.Q(this)
s.c.a(b)
s.y[1].a(c)
A.rg()},
T(a,b){A.rg()},
ga_(a){return new A.e8(this.i0(0),A.Q(this).h("e8<a4<1,2>>"))},
i0(a){var s=this
return function(){var r=a
var q=0,p=1,o=[],n,m,l,k,j
return function $async$ga_(b,c,d){if(c===1){o.push(d)
q=p}for(;;)switch(q){case 0:n=s.gR(s),n=n.gv(n),m=A.Q(s),l=m.y[1],m=m.h("a4<1,2>")
case 2:if(!n.m()){q=3
break}k=n.gq(n)
j=s.j(0,k)
q=4
return b.b=new A.a4(k,j==null?l.a(j):j,m),1
case 4:q=2
break
case 3:return 0
case 1:return b.c=o.at(-1),3}}}},
cR(a,b,c,d){var s=A.a0(c,d)
this.N(0,new A.l2(this,A.Q(this).C(c).C(d).h("a4<1,2>(3,4)").a(b),s))
return s},
$iA:1}
A.l2.prototype={
$2(a,b){var s=A.Q(this.a),r=this.b.$2(s.c.a(a),s.y[1].a(b))
this.c.i(0,r.a,r.b)},
$S(){return A.Q(this.a).h("~(1,2)")}}
A.a9.prototype={
gk(a){return this.b.length},
gdJ(){var s=this.$keys
if(s==null){s=Object.keys(this.a)
this.$keys=s}return s},
a1(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)},
j(a,b){if(!this.a1(0,b))return null
return this.b[this.a[b]]},
N(a,b){var s,r,q,p
this.$ti.h("~(1,2)").a(b)
s=this.gdJ()
r=this.b
for(q=s.length,p=0;p<q;++p)b.$2(s[p],r[p])},
gR(a){return new A.dd(this.gdJ(),this.$ti.h("dd<1>"))},
ga2(a){return new A.dd(this.b,this.$ti.h("dd<2>"))}}
A.dd.prototype={
gk(a){return this.a.length},
gB(a){return 0===this.a.length},
gM(a){return 0!==this.a.length},
gv(a){var s=this.a
return new A.cs(s,s.length,this.$ti.h("cs<1>"))}}
A.cs.prototype={
gq(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c
if(r>=s.b){s.d=null
return!1}s.d=s.a[r]
s.c=r+1
return!0},
$iaj:1}
A.dy.prototype={}
A.dz.prototype={
gk(a){return this.b},
gB(a){return this.b===0},
gM(a){return this.b!==0},
gv(a){var s,r=this,q=r.$keys
if(q==null){q=Object.keys(r.a)
r.$keys=q}s=q
return new A.cs(s,s.length,r.$ti.h("cs<1>"))},
H(a,b){if(typeof b!="string")return!1
if("__proto__"===b)return!1
return this.a.hasOwnProperty(b)}}
A.ci.prototype={
gk(a){return this.a.length},
gB(a){return this.a.length===0},
gM(a){return this.a.length!==0},
gv(a){var s=this.a
return new A.cs(s,s.length,this.$ti.h("cs<1>"))},
fP(){var s,r,q,p,o=this,n=o.$map
if(n==null){n=new A.eM(o.$ti.h("eM<1,1>"))
for(s=o.a,r=s.length,q=0;q<s.length;s.length===r||(0,A.aJ)(s),++q){p=s[q]
n.i(0,p,p)}o.$map=n}return n},
H(a,b){return this.fP().a1(0,b)}}
A.mS.prototype={
$0(){return B.a4.ic(1000*this.a.now())},
$S:22}
A.f3.prototype={}
A.o6.prototype={
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
A.eY.prototype={
l(a){return"Null check operator used on a null value"}}
A.hS.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.iT.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.mP.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.ez.prototype={}
A.fA.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$icF:1}
A.cz.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.tT(r==null?"unknown":r)+"'"},
$ibY:1,
giM(){return this},
$C:"$1",
$R:1,
$D:null}
A.hb.prototype={$C:"$0",$R:0}
A.hc.prototype={$C:"$2",$R:2}
A.iF.prototype={}
A.ix.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.tT(s)+"'"}}
A.ds.prototype={
O(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.ds))return!1
return this.$_target===b.$_target&&this.a===b.a},
gL(a){return(A.fU(this.a)^A.f_(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.im(this.a)+"'")}}
A.ir.prototype={
l(a){return"RuntimeError: "+this.a}}
A.bZ.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
gR(a){return new A.ck(this,A.Q(this).h("ck<1>"))},
ga2(a){return new A.aS(this,A.Q(this).h("aS<2>"))},
ga_(a){return new A.ah(this,A.Q(this).h("ah<1,2>"))},
a1(a,b){var s,r
if(typeof b=="string"){s=this.b
if(s==null)return!1
return s[b]!=null}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=this.c
if(r==null)return!1
return r[b]!=null}else return this.ii(b)},
ii(a){var s=this.d
if(s==null)return!1
return this.b7(s[this.b6(a)],a)>=0},
S(a,b){A.Q(this).h("A<1,2>").a(b).N(0,new A.mj(this))},
j(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.ij(b)},
ij(a){var s,r,q=this.d
if(q==null)return null
s=q[this.b6(a)]
r=this.b7(s,a)
if(r<0)return null
return s[r].b},
i(a,b,c){var s,r,q=this,p=A.Q(q)
p.c.a(b)
p.y[1].a(c)
if(typeof b=="string"){s=q.b
q.da(s==null?q.b=q.co():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=q.c
q.da(r==null?q.c=q.co():r,b,c)}else q.il(b,c)},
il(a,b){var s,r,q,p,o=this,n=A.Q(o)
n.c.a(a)
n.y[1].a(b)
s=o.d
if(s==null)s=o.d=o.co()
r=o.b6(a)
q=s[r]
if(q==null)s[r]=[o.cp(a,b)]
else{p=o.b7(q,a)
if(p>=0)q[p].b=b
else q.push(o.cp(a,b))}},
cT(a,b,c){var s,r,q=this,p=A.Q(q)
p.c.a(b)
p.h("2()").a(c)
if(q.a1(0,b)){s=q.j(0,b)
return s==null?p.y[1].a(s):s}r=c.$0()
q.i(0,b,r)
return r},
T(a,b){var s=this
if(typeof b=="string")return s.d6(s.b,b)
else if(typeof b=="number"&&(b&0x3fffffff)===b)return s.d6(s.c,b)
else return s.ik(b)},
ik(a){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=o.b6(a)
r=n[s]
q=o.b7(r,a)
if(q<0)return null
p=r.splice(q,1)[0]
o.d7(p)
if(r.length===0)delete n[s]
return p.b},
bG(a){var s=this
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.cn()}},
N(a,b){var s,r,q=this
A.Q(q).h("~(1,2)").a(b)
s=q.e
r=q.r
while(s!=null){b.$2(s.a,s.b)
if(r!==q.r)throw A.n(A.aW(q))
s=s.c}},
da(a,b,c){var s,r=A.Q(this)
r.c.a(b)
r.y[1].a(c)
s=a[b]
if(s==null)a[b]=this.cp(b,c)
else s.b=c},
d6(a,b){var s
if(a==null)return null
s=a[b]
if(s==null)return null
this.d7(s)
delete a[b]
return s.b},
cn(){this.r=this.r+1&1073741823},
cp(a,b){var s=this,r=A.Q(s),q=new A.mm(r.c.a(a),r.y[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.cn()
return q},
d7(a){var s=this,r=a.d,q=a.c
if(r==null)s.e=q
else r.c=q
if(q==null)s.f=r
else q.d=r;--s.a
s.cn()},
b6(a){return J.bN(a)&1073741823},
b7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1},
l(a){return A.qg(this)},
co(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
$iqe:1}
A.mj.prototype={
$2(a,b){var s=this.a,r=A.Q(s)
s.i(0,r.c.a(a),r.y[1].a(b))},
$S(){return A.Q(this.a).h("~(1,2)")}}
A.mm.prototype={}
A.ck.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.eQ(s,s.r,s.e,this.$ti.h("eQ<1>"))}}
A.eQ.prototype={
gq(a){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.a
r.c=s.c
return!0}},
$iaj:1}
A.aS.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.d2(s,s.r,s.e,this.$ti.h("d2<1>"))}}
A.d2.prototype={
gq(a){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=s.b
r.c=s.c
return!0}},
$iaj:1}
A.ah.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gv(a){var s=this.a
return new A.eP(s,s.r,s.e,this.$ti.h("eP<1,2>"))}}
A.eP.prototype={
gq(a){var s=this.d
s.toString
return s},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.n(A.aW(q))
s=r.c
if(s==null){r.d=null
return!1}else{r.d=new A.a4(s.a,s.b,r.$ti.h("a4<1,2>"))
r.c=s.c
return!0}},
$iaj:1}
A.eM.prototype={
b6(a){return A.xV(a)&1073741823},
b7(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1}}
A.pN.prototype={
$1(a){return this.a(a)},
$S:23}
A.pO.prototype={
$2(a,b){return this.a(a,b)},
$S:75}
A.pP.prototype={
$1(a){return this.a(A.X(a))},
$S:19}
A.bJ.prototype={
l(a){return this.e6(!1)},
e6(a){var s,r,q,p,o,n=this.fE(),m=this.bn(),l=(a?"Record ":"")+"("
for(s=n.length,r="",q=0;q<s;++q,r=", "){l+=r
p=n[q]
if(typeof p=="string")l=l+p+": "
if(!(q<m.length))return A.v(m,q)
o=m[q]
l=a?l+A.ry(o):l+A.Z(o)}l+=")"
return l.charCodeAt(0)==0?l:l},
fE(){var s,r=this.$s
while($.oJ.length<=r)B.f.u($.oJ,null)
s=$.oJ[r]
if(s==null){s=this.fg()
B.f.i($.oJ,r,s)}return s},
fg(){var s,r,q,p=this.$r,o=p.indexOf("("),n=p.substring(1,o),m=p.substring(o),l=m==="()"?0:m.replace(/[^,]/g,"").length+1,k=A.d(new Array(l),t.f)
for(s=0;s<l;++s)k[s]=s
if(n!==""){r=n.split(",")
s=r.length
for(q=l;s>0;){--q;--s
B.f.i(k,q,r[s])}}return A.ru(k,t.K)}}
A.dg.prototype={
bn(){return[this.a,this.b]},
O(a,b){if(b==null)return!1
return b instanceof A.dg&&this.$s===b.$s&&J.ac(this.a,b.a)&&J.ac(this.b,b.b)},
gL(a){return A.eZ(this.$s,this.a,this.b,B.a_)}}
A.e6.prototype={
bn(){return[this.a,this.b,this.c]},
O(a,b){var s=this
if(b==null)return!1
return b instanceof A.e6&&s.$s===b.$s&&J.ac(s.a,b.a)&&J.ac(s.b,b.b)&&J.ac(s.c,b.c)},
gL(a){var s=this
return A.eZ(s.$s,s.a,s.b,s.c)}}
A.e7.prototype={
bn(){return this.a},
O(a,b){if(b==null)return!1
return b instanceof A.e7&&this.$s===b.$s&&A.wi(this.a,b.a)},
gL(a){return A.eZ(this.$s,A.vz(this.a),B.a_,B.a_)}}
A.dK.prototype={
l(a){return"RegExp/"+this.a+"/"+this.b.flags},
gdO(){var s=this,r=s.c
if(r!=null)return r
r=s.b
return s.c=A.rp(s.a,r.multiline,!r.ignoreCase,r.unicode,r.dotAll,"g")},
fh(){var s,r=this.a
if(!B.b.H(r,"("))return!1
s=this.b.unicode?"u":""
return new RegExp("(?:)|"+r,s).exec("").length>1},
ib(a){var s=this.b.exec(a)
if(s==null)return null
return new A.fr(s)},
cC(a,b,c){var s=b.length
if(c>s)throw A.n(A.aU(c,0,s,null,null))
return new A.j1(this,b,c)},
ed(a,b){return this.cC(0,b,0)},
dA(a,b){var s,r=this.gdO()
if(r==null)r=A.ab(r)
r.lastIndex=b
s=r.exec(a)
if(s==null)return null
return new A.fr(s)},
$imR:1,
$ivN:1}
A.fr.prototype={
gbX(a){return this.b.index},
gaY(a){var s=this.b
return s.index+s[0].length},
$idR:1,
$if2:1}
A.j1.prototype={
gv(a){return new A.j2(this.a,this.b,this.c)}}
A.j2.prototype={
gq(a){var s=this.d
return s==null?t.cz.a(s):s},
m(){var s,r,q,p,o,n,m=this,l=m.b
if(l==null)return!1
s=m.c
r=l.length
if(s<=r){q=m.a
p=q.dA(l,s)
if(p!=null){m.d=p
o=p.gaY(0)
if(p.b.index===o){s=!1
if(q.b.unicode){q=m.c
n=q+1
if(n<r){if(!(q>=0&&q<r))return A.v(l,q)
q=l.charCodeAt(q)
if(q>=55296&&q<=56319){if(!(n>=0))return A.v(l,n)
s=l.charCodeAt(n)
s=s>=56320&&s<=57343}}}o=(s?o+1:o)+1}m.c=o
return!0}}m.b=m.d=null
return!1},
$iaj:1}
A.f5.prototype={
gaY(a){return this.a+this.c.length},
$idR:1,
gbX(a){return this.a}}
A.jN.prototype={
gv(a){return new A.jO(this.a,this.b,this.c)},
gF(a){var s=this.b,r=this.a.indexOf(s,this.c)
if(r>=0)return new A.f5(r,s)
throw A.n(A.dJ())}}
A.jO.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.f5(s,o)
q.c=r===q.c?r+1:r
return!0},
gq(a){var s=this.d
s.toString
return s},
$iaj:1}
A.dS.prototype={
gU(a){return B.nk},
$iap:1}
A.eU.prototype={
h3(a,b,c,d){var s=A.aU(b,0,c,d,null)
throw A.n(s)},
dn(a,b,c,d){if(b>>>0!==b||b>c)this.h3(a,b,c,d)}}
A.i4.prototype={
gU(a){return B.nl},
$iap:1}
A.b1.prototype={
gk(a){return a.length},
hu(a,b,c,d,e){var s,r,q=a.length
this.dn(a,b,q,"start")
this.dn(a,c,q,"end")
if(b>c)throw A.n(A.aU(b,0,c,null,null))
s=c-b
if(e<0)throw A.n(A.c5(e,null))
r=d.length
if(r-e<s)throw A.n(A.an("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$ia6:1}
A.eT.prototype={
j(a,b){A.ct(b,a,a.length)
return a[b]},
i(a,b,c){A.tb(c)
a.$flags&2&&A.by(a)
A.ct(b,a,a.length)
a[b]=c},
$iE:1,
$io:1,
$iB:1}
A.bF.prototype={
i(a,b,c){A.b4(c)
a.$flags&2&&A.by(a)
A.ct(b,a,a.length)
a[b]=c},
bW(a,b,c,d,e){t.hb.a(d)
a.$flags&2&&A.by(a,5)
if(t.eB.b(d)){this.hu(a,b,c,d,e)
return}this.eO(a,b,c,d,e)},
$iE:1,
$io:1,
$iB:1}
A.i5.prototype={
gU(a){return B.nm},
$iap:1}
A.i6.prototype={
gU(a){return B.nn},
$iap:1}
A.i7.prototype={
gU(a){return B.no},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1}
A.i8.prototype={
gU(a){return B.np},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1}
A.i9.prototype={
gU(a){return B.nq},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1}
A.ia.prototype={
gU(a){return B.ns},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1}
A.ib.prototype={
gU(a){return B.nt},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1}
A.eV.prototype={
gU(a){return B.nu},
gk(a){return a.length},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1}
A.eW.prototype={
gU(a){return B.nv},
gk(a){return a.length},
j(a,b){A.ct(b,a,a.length)
return a[b]},
$iap:1,
$iql:1}
A.ft.prototype={}
A.fu.prototype={}
A.fv.prototype={}
A.fw.prototype={}
A.c1.prototype={
h(a){return A.fJ(v.typeUniverse,this,a)},
C(a){return A.t1(v.typeUniverse,this,a)}}
A.jj.prototype={}
A.k_.prototype={
l(a){return A.bL(this.a,null)}}
A.je.prototype={
l(a){return this.a}}
A.fF.prototype={$icp:1}
A.og.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:3}
A.of.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:72}
A.oh.prototype={
$0(){this.a.$0()},
$S:12}
A.oi.prototype={
$0(){this.a.$0()},
$S:12}
A.fE.prototype={
eQ(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.eg(new A.oO(this,b),0),a)
else throw A.n(A.U("`setTimeout()` not found."))},
eR(a,b){if(self.setTimeout!=null)this.b=self.setInterval(A.eg(new A.oN(this,a,Date.now(),b),0),a)
else throw A.n(A.U("Periodic timer."))},
ag(a){var s
if(self.setTimeout!=null){s=this.b
if(s==null)return
if(this.a)self.clearTimeout(s)
else self.clearInterval(s)
this.b=null}else throw A.n(A.U("Canceling a timer."))},
$iiM:1}
A.oO.prototype={
$0(){var s=this.a
s.b=null
s.c=1
this.b.$0()},
$S:0}
A.oN.prototype={
$0(){var s,r=this,q=r.a,p=q.c+1,o=r.b
if(o>0){s=Date.now()-r.c
if(s>(p+1)*o)p=B.w.eP(s,o)}q.c=p
r.d.$1(q)},
$S:12}
A.j3.prototype={
aV(a,b){var s,r=this,q=r.$ti
q.h("1/?").a(b)
if(b==null)b=q.c.a(b)
if(!r.b)r.a.c2(b)
else{s=r.a
if(q.h("bo<1>").b(b))s.dm(b)
else s.cc(b)}},
cG(a,b){var s=this.a
if(this.b)s.al(new A.bb(a,b))
else s.c3(new A.bb(a,b))}}
A.p_.prototype={
$1(a){return this.a.$2(0,a)},
$S:7}
A.p0.prototype={
$2(a,b){this.a.$2(1,new A.ez(a,t.k.a(b)))},
$S:30}
A.pd.prototype={
$2(a,b){this.a(A.b4(a),b)},
$S:31}
A.fB.prototype={
gq(a){var s=this.b
return s==null?this.$ti.c.a(s):s},
ho(a,b){var s,r,q
a=A.b4(a)
b=b
s=this.a
for(;;)try{r=s(this,a,b)
return r}catch(q){b=q
a=1}},
m(){var s,r,q,p,o,n=this,m=null,l=0
for(;;){s=n.d
if(s!=null)try{if(s.m()){r=s
n.b=r.gq(r)
return!0}else n.d=null}catch(q){m=q
l=1
n.d=null}p=n.ho(l,m)
if(1===p)return!0
if(0===p){n.b=null
o=n.e
if(o==null||o.length===0){n.a=A.rX
return!1}if(0>=o.length)return A.v(o,-1)
n.a=o.pop()
l=0
m=null
continue}if(2===p){l=0
m=null
continue}if(3===p){m=n.c
n.c=null
o=n.e
if(o==null||o.length===0){n.b=null
n.a=A.rX
throw m
return!1}if(0>=o.length)return A.v(o,-1)
n.a=o.pop()
l=1
continue}throw A.n(A.an("sync*"))}return!1},
iN(a){var s,r,q=this
if(a instanceof A.e8){s=a.a()
r=q.e
if(r==null)r=q.e=[]
B.f.u(r,q.a)
q.a=s
return 2}else{q.d=J.b6(a)
return 2}},
$iaj:1}
A.e8.prototype={
gv(a){return new A.fB(this.a(),this.$ti.h("fB<1>"))}}
A.bb.prototype={
l(a){return A.Z(this.a)},
$ias:1,
gaJ(){return this.b}}
A.lN.prototype={
$0(){var s,r,q,p,o,n,m=this,l=m.a
if(l==null){m.c.a(null)
m.b.bg(null)}else{s=null
try{s=l.$0()}catch(p){r=A.aQ(p)
q=A.cu(p)
l=r
o=q
n=A.th(l,o)
l=new A.bb(l,o)
m.b.al(l)
return}m.b.bg(s)}},
$S:0}
A.j6.prototype={
cG(a,b){var s=this.a
if((s.a&30)!==0)throw A.n(A.an("Future already completed"))
s.c3(A.xb(a,b))},
ah(a){return this.cG(a,null)}}
A.cr.prototype={
aV(a,b){var s,r=this.$ti
r.h("1/?").a(b)
s=this.a
if((s.a&30)!==0)throw A.n(A.an("Future already completed"))
s.c2(r.h("1/").a(b))}}
A.da.prototype={
io(a){if((this.c&15)!==6)return!0
return this.b.b.d_(t.al.a(this.d),a.a,t.y,t.K)},
ig(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.ag.b(q))p=l.iy(q,m,a.b,o,n,t.k)
else p=l.d_(t.bI.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aQ(s))){if((r.c&1)!==0)throw A.n(A.c5("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.n(A.c5("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.aq.prototype={
d1(a,b,c){var s,r,q=this.$ti
q.C(c).h("1/(2)").a(a)
s=$.ai
if(s===B.F){if(!t.ag.b(b)&&!t.bI.b(b))throw A.n(A.en(b,"onError",u.c))}else{c.h("@<0/>").C(q.c).h("1(2)").a(a)
b=A.xu(b,s)}r=new A.aq(s,c.h("aq<0>"))
this.bY(new A.da(r,3,a,b,q.h("@<1>").C(c).h("da<1,2>")))
return r},
e5(a,b,c){var s,r=this.$ti
r.C(c).h("1/(2)").a(a)
s=new A.aq($.ai,c.h("aq<0>"))
this.bY(new A.da(s,19,a,b,r.h("@<1>").C(c).h("da<1,2>")))
return s},
ht(a){this.a=this.a&1|16
this.c=a},
bf(a){this.a=a.a&30|this.a&1
this.c=a.c},
bY(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t._.a(r.c)
if((s.a&24)===0){s.bY(a)
return}r.bf(s)}A.ed(null,null,r.b,t.M.a(new A.oo(r,a)))}},
dT(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t._.a(m.c)
if((n.a&24)===0){n.dT(a)
return}m.bf(n)}l.a=m.bu(a)
A.ed(null,null,m.b,t.M.a(new A.ot(l,m)))}},
aS(){var s=t.F.a(this.c)
this.c=null
return this.bu(s)},
bu(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
bg(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
if(q.h("bo<1>").b(a))A.or(a,r,!0)
else{s=r.aS()
q.c.a(a)
r.a=8
r.c=a
A.db(r,s)}},
cc(a){var s,r=this
r.$ti.c.a(a)
s=r.aS()
r.a=8
r.c=a
A.db(r,s)},
ff(a){var s,r,q=this
if((a.a&16)!==0){s=q.b===a.b
s=!(s||s)}else s=!1
if(s)return
r=q.aS()
q.bf(a)
A.db(q,r)},
al(a){var s=this.aS()
this.ht(a)
A.db(this,s)},
c2(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("bo<1>").b(a)){this.dm(a)
return}this.f6(a)},
f6(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.ed(null,null,s.b,t.M.a(new A.oq(s,a)))},
dm(a){A.or(this.$ti.h("bo<1>").a(a),this,!1)
return},
c3(a){this.a^=2
A.ed(null,null,this.b,t.M.a(new A.op(this,a)))},
iB(a,b,c){var s,r,q=this,p={},o=q.$ti
o.h("1/()?").a(c)
if((q.a&24)!==0){p=new A.aq($.ai,o)
p.c2(q)
return p}s=$.ai
r=new A.aq(s,o)
p.a=null
p.a=A.bO(b,new A.oz(q,r,s,o.h("1/()").a(c)))
q.d1(new A.oA(p,q,r),new A.oB(p,r),t.b)
return r},
$ibo:1}
A.oo.prototype={
$0(){A.db(this.a,this.b)},
$S:0}
A.ot.prototype={
$0(){A.db(this.b,this.a.a)},
$S:0}
A.os.prototype={
$0(){A.or(this.a.a,this.b,!0)},
$S:0}
A.oq.prototype={
$0(){this.a.cc(this.b)},
$S:0}
A.op.prototype={
$0(){this.a.al(this.b)},
$S:0}
A.ow.prototype={
$0(){var s,r,q,p,o,n,m,l,k=this,j=null
try{q=k.a.a
j=q.b.b.ez(t.fO.a(q.d),t.z)}catch(p){s=A.aQ(p)
r=A.cu(p)
if(k.c&&t.n.a(k.b.a.c).a===s){q=k.a
q.c=t.n.a(k.b.a.c)}else{q=s
o=r
if(o==null)o=A.ks(q)
n=k.a
n.c=new A.bb(q,o)
q=n}q.b=!0
return}if(j instanceof A.aq&&(j.a&24)!==0){if((j.a&16)!==0){q=k.a
q.c=t.n.a(j.c)
q.b=!0}return}if(j instanceof A.aq){m=k.b.a
l=new A.aq(m.b,m.$ti)
j.d1(new A.ox(l,m),new A.oy(l),t.H)
q=k.a
q.c=l
q.b=!1}},
$S:0}
A.ox.prototype={
$1(a){this.a.ff(this.b)},
$S:3}
A.oy.prototype={
$2(a,b){A.ab(a)
t.k.a(b)
this.a.al(new A.bb(a,b))},
$S:24}
A.ov.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.d_(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aQ(l)
r=A.cu(l)
q=s
p=r
if(p==null)p=A.ks(q)
o=this.a
o.c=new A.bb(q,p)
o.b=!0}},
$S:0}
A.ou.prototype={
$0(){var s,r,q,p,o,n,m,l=this
try{s=t.n.a(l.a.a.c)
p=l.b
if(p.a.io(s)&&p.a.e!=null){p.c=p.a.ig(s)
p.b=!1}}catch(o){r=A.aQ(o)
q=A.cu(o)
p=t.n.a(l.a.a.c)
if(p.a===r){n=l.b
n.c=p
p=n}else{p=r
n=q
if(n==null)n=A.ks(p)
m=l.b
m.c=new A.bb(p,n)
p=m}p.b=!0}},
$S:0}
A.oz.prototype={
$0(){var s,r,q,p,o,n=this
try{n.b.bg(n.c.ez(n.d,n.a.$ti.h("1/")))}catch(q){s=A.aQ(q)
r=A.cu(q)
p=s
o=r
if(o==null)o=A.ks(p)
n.b.al(new A.bb(p,o))}},
$S:0}
A.oA.prototype={
$1(a){var s
this.b.$ti.c.a(a)
s=this.a.a
if(s.b!=null){s.ag(0)
this.c.cc(a)}},
$S(){return this.b.$ti.h("aM(1)")}}
A.oB.prototype={
$2(a,b){var s
A.ab(a)
t.k.a(b)
s=this.a.a
if(s.b!=null){s.ag(0)
this.b.al(new A.bb(a,b))}},
$S:24}
A.j4.prototype={}
A.iz.prototype={
gk(a){var s,r,q=this,p={},o=new A.aq($.ai,t.fJ)
p.a=0
s=q.$ti
r=s.h("~(1)?").a(new A.nJ(p,q))
t.bn.a(new A.nK(p,o))
A.cJ(q.a,q.b,r,!1,s.c)
return o}}
A.nJ.prototype={
$1(a){this.b.$ti.c.a(a);++this.a.a},
$S(){return this.b.$ti.h("~(1)")}}
A.nK.prototype={
$0(){this.b.bg(this.a.a)},
$S:0}
A.jM.prototype={}
A.fN.prototype={$irO:1}
A.jE.prototype={
iz(a){var s,r,q
t.M.a(a)
try{if(B.F===$.ai){a.$0()
return}A.tq(null,null,this,a,t.H)}catch(q){s=A.aQ(q)
r=A.cu(q)
A.p6(A.ab(s),t.k.a(r))}},
iA(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.F===$.ai){a.$1(b)
return}A.tr(null,null,this,a,b,t.H,c)}catch(q){s=A.aQ(q)
r=A.cu(q)
A.p6(A.ab(s),t.k.a(r))}},
cF(a){return new A.oK(this,t.M.a(a))},
ee(a,b){return new A.oL(this,b.h("~(0)").a(a),b)},
ez(a,b){b.h("0()").a(a)
if($.ai===B.F)return a.$0()
return A.tq(null,null,this,a,b)},
d_(a,b,c,d){c.h("@<0>").C(d).h("1(2)").a(a)
d.a(b)
if($.ai===B.F)return a.$1(b)
return A.tr(null,null,this,a,b,c,d)},
iy(a,b,c,d,e,f){d.h("@<0>").C(e).C(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.ai===B.F)return a.$2(b,c)
return A.xv(null,null,this,a,b,c,d,e,f)},
ey(a,b,c,d){return b.h("@<0>").C(c).C(d).h("1(2,3)").a(a)}}
A.oK.prototype={
$0(){return this.a.iz(this.b)},
$S:0}
A.oL.prototype={
$1(a){var s=this.c
return this.a.iA(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.p7.prototype={
$0(){A.vk(this.a,this.b)},
$S:0}
A.fl.prototype={
gk(a){return this.a},
gB(a){return this.a===0},
gM(a){return this.a!==0},
gR(a){return new A.dc(this,this.$ti.h("dc<1>"))},
ga2(a){var s=this.$ti
return A.bq(new A.dc(this,s.h("dc<1>")),new A.oD(this),s.c,s.y[1])},
a1(a,b){var s,r
if(typeof b=="string"&&b!=="__proto__"){s=this.b
return s==null?!1:s[b]!=null}else if(typeof b=="number"&&(b&1073741823)===b){r=this.c
return r==null?!1:r[b]!=null}else return this.fl(b)},
fl(a){var s=this.d
if(s==null)return!1
return this.a8(this.dE(s,a),a)>=0},
j(a,b){var s,r,q
if(typeof b=="string"&&b!=="__proto__"){s=this.b
r=s==null?null:A.qo(s,b)
return r}else if(typeof b=="number"&&(b&1073741823)===b){q=this.c
r=q==null?null:A.qo(q,b)
return r}else return this.fN(0,b)},
fN(a,b){var s,r,q=this.d
if(q==null)return null
s=this.dE(q,b)
r=this.a8(s,b)
return r<0?null:s[r+1]},
i(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.y[1].a(c)
if(typeof b=="string"&&b!=="__proto__"){s=m.b
m.dt(s==null?m.b=A.qp():s,b,c)}else if(typeof b=="number"&&(b&1073741823)===b){r=m.c
m.dt(r==null?m.c=A.qp():r,b,c)}else{q=m.d
if(q==null)q=m.d=A.qp()
p=A.fU(b)&1073741823
o=q[p]
if(o==null){A.qq(q,p,[b,c]);++m.a
m.e=null}else{n=m.a8(o,b)
if(n>=0)o[n+1]=c
else{o.push(b,c);++m.a
m.e=null}}}},
T(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aR(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aR(s.c,b)
else return s.ct(0,b)},
ct(a,b){var s,r,q,p,o=this,n=o.d
if(n==null)return null
s=A.fU(b)&1073741823
r=n[s]
q=o.a8(r,b)
if(q<0)return null;--o.a
o.e=null
p=r.splice(q,2)[1]
if(0===r.length)delete n[s]
return p},
N(a,b){var s,r,q,p,o,n,m=this,l=m.$ti
l.h("~(1,2)").a(b)
s=m.du()
for(r=s.length,q=l.c,l=l.y[1],p=0;p<r;++p){o=s[p]
q.a(o)
n=m.j(0,o)
b.$2(o,n==null?l.a(n):n)
if(s!==m.e)throw A.n(A.aW(m))}},
du(){var s,r,q,p,o,n,m,l,k,j,i=this,h=i.e
if(h!=null)return h
h=A.hY(i.a,null,!1,t.z)
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
dt(a,b,c){var s=this.$ti
s.c.a(b)
s.y[1].a(c)
if(a[b]==null){++this.a
this.e=null}A.qq(a,b,c)},
aR(a,b){var s
if(a!=null&&a[b]!=null){s=this.$ti.y[1].a(A.qo(a,b))
delete a[b];--this.a
this.e=null
return s}else return null},
dE(a,b){return a[A.fU(b)&1073741823]}}
A.oD.prototype={
$1(a){var s=this.a,r=s.$ti
s=s.j(0,r.c.a(a))
return s==null?r.y[1].a(s):s},
$S(){return this.a.$ti.h("2(1)")}}
A.fn.prototype={
a8(a,b){var s,r,q
if(a==null)return-1
s=a.length
for(r=0;r<s;r+=2){q=a[r]
if(q==null?b==null:q===b)return r}return-1}}
A.dc.prototype={
gk(a){return this.a.a},
gB(a){return this.a.a===0},
gM(a){return this.a.a!==0},
gv(a){var s=this.a
return new A.fm(s,s.du(),this.$ti.h("fm<1>"))}}
A.fm.prototype={
gq(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.b,q=s.c,p=s.a
if(r!==p.e)throw A.n(A.aW(p))
else if(q>=r.length){s.d=null
return!1}else{s.d=r[q]
s.c=q+1
return!0}},
$iaj:1}
A.de.prototype={
gv(a){var s=this,r=new A.fo(s,s.r,s.$ti.h("fo<1>"))
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
return t.g.a(r[b])!=null}else return this.fk(b)},
fk(a){var s=this.d
if(s==null)return!1
return this.a8(s[J.bN(a)&1073741823],a)>=0},
gF(a){var s=this.e
if(s==null)throw A.n(A.an("No elements"))
return this.$ti.c.a(s.a)},
u(a,b){var s,r,q=this
q.$ti.c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.ds(s==null?q.b=A.qr():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.ds(r==null?q.c=A.qr():r,b)}else return q.eS(0,b)},
eS(a,b){var s,r,q,p=this
p.$ti.c.a(b)
s=p.d
if(s==null)s=p.d=A.qr()
r=J.bN(b)&1073741823
q=s[r]
if(q==null)s[r]=[p.ca(b)]
else{if(p.a8(q,b)>=0)return!1
q.push(p.ca(b))}return!0},
T(a,b){var s=this
if(typeof b=="string"&&b!=="__proto__")return s.aR(s.b,b)
else if(typeof b=="number"&&(b&1073741823)===b)return s.aR(s.c,b)
else return s.ct(0,b)},
ct(a,b){var s,r,q,p,o=this.d
if(o==null)return!1
s=J.bN(b)&1073741823
r=o[s]
q=this.a8(r,b)
if(q<0)return!1
p=r.splice(q,1)[0]
if(0===r.length)delete o[s]
this.e9(p)
return!0},
ds(a,b){this.$ti.c.a(b)
if(t.g.a(a[b])!=null)return!1
a[b]=this.ca(b)
return!0},
aR(a,b){var s
if(a==null)return!1
s=t.g.a(a[b])
if(s==null)return!1
this.e9(s)
delete a[b]
return!0},
c9(){this.r=this.r+1&1073741823},
ca(a){var s,r=this,q=new A.jt(r.$ti.c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.c9()
return q},
e9(a){var s=this,r=a.c,q=a.b
if(r==null)s.e=q
else r.b=q
if(q==null)s.f=r
else q.c=r;--s.a
s.c9()},
a8(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.ac(a[r].a,b))return r
return-1},
$irt:1}
A.jt.prototype={}
A.fo.prototype={
gq(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.n(A.aW(q))
else if(r==null){s.d=null
return!1}else{s.d=s.$ti.h("1?").a(r.a)
s.c=r.b
return!0}},
$iaj:1}
A.mn.prototype={
$2(a,b){this.a.i(0,this.b.a(a),this.c.a(b))},
$S:44}
A.C.prototype={
gv(a){return new A.bE(a,this.gk(a),A.aI(a).h("bE<C.E>"))},
I(a,b){return this.j(a,b)},
gB(a){return this.gk(a)===0},
gM(a){return this.gk(a)!==0},
gF(a){if(this.gk(a)===0)throw A.n(A.dJ())
return this.j(a,0)},
cE(a,b){var s,r
A.aI(a).h("ad(C.E)").a(b)
s=this.gk(a)
for(r=0;r<s;++r){if(b.$1(this.j(a,r)))return!0
if(s!==this.gk(a))throw A.n(A.aW(a))}return!1},
aH(a,b){var s=A.aI(a)
return new A.aG(a,s.h("ad(C.E)").a(b),s.h("aG<C.E>"))},
eF(a,b){return new A.d9(a,b.h("d9<0>"))},
ab(a,b,c){var s=A.aI(a)
return new A.af(a,s.C(c).h("1(C.E)").a(b),s.h("@<C.E>").C(c).h("af<1,2>"))},
u(a,b){var s
A.aI(a).h("C.E").a(b)
s=this.gk(a)
this.sk(a,s+1)
this.i(a,s,b)},
ia(a,b,c,d){var s
A.aI(a).h("C.E?").a(d)
A.dV(b,c,this.gk(a))
for(s=b;s<c;++s)this.i(a,s,d)},
bW(a,b,c,d,e){var s,r,q
A.aI(a).h("o<C.E>").a(d)
A.dV(b,c,this.gk(a))
s=c-b
if(s===0)return
A.f1(e,"skipCount")
r=J.ao(d)
if(e+s>r.gk(d))throw A.n(A.an("Too few elements"))
if(e<b)for(q=s-1;q>=0;--q)this.i(a,b+q,r.j(d,e+q))
else for(q=0;q<s;++q)this.i(a,b+q,r.j(d,e+q))},
l(a){return A.q9(a,"[","]")},
$iE:1,
$io:1,
$iB:1}
A.W.prototype={
aU(a,b,c){var s=A.aI(a)
return A.rv(a,s.h("W.K"),s.h("W.V"),b,c)},
N(a,b){var s,r,q,p=A.aI(a)
p.h("~(W.K,W.V)").a(b)
for(s=J.b6(this.gR(a)),p=p.h("W.V");s.m();){r=s.gq(s)
q=this.j(a,r)
b.$2(r,q==null?p.a(q):q)}},
ga_(a){return J.kh(this.gR(a),new A.mo(a),A.aI(a).h("a4<W.K,W.V>"))},
cR(a,b,c,d){var s,r,q,p,o,n=A.aI(a)
n.C(c).C(d).h("a4<1,2>(W.K,W.V)").a(b)
s=A.a0(c,d)
for(r=J.b6(this.gR(a)),n=n.h("W.V");r.m();){q=r.gq(r)
p=this.j(a,q)
o=b.$2(q,p==null?n.a(p):p)
s.i(0,o.a,o.b)}return s},
iv(a,b){var s,r,q,p,o,n=A.aI(a)
n.h("ad(W.K,W.V)").a(b)
s=A.d([],n.h("a2<W.K>"))
for(r=J.b6(this.gR(a)),n=n.h("W.V");r.m();){q=r.gq(r)
p=this.j(a,q)
if(b.$2(q,p==null?n.a(p):p))B.f.u(s,q)}for(n=s.length,o=0;o<s.length;s.length===n||(0,A.aJ)(s),++o)this.T(a,s[o])},
gk(a){return J.bm(this.gR(a))},
gB(a){return J.el(this.gR(a))},
gM(a){return J.dm(this.gR(a))},
ga2(a){return new A.fp(a,A.aI(a).h("fp<W.K,W.V>"))},
l(a){return A.qg(a)},
$iA:1}
A.mo.prototype={
$1(a){var s=this.a,r=A.aI(s)
r.h("W.K").a(a)
s=J.P(s,a)
if(s==null)s=r.h("W.V").a(s)
return new A.a4(a,s,r.h("a4<W.K,W.V>"))},
$S(){return A.aI(this.a).h("a4<W.K,W.V>(W.K)")}}
A.mp.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=A.Z(a)
r.a=(r.a+=s)+": "
s=A.Z(b)
r.a+=s},
$S:16}
A.fp.prototype={
gk(a){return J.bm(this.a)},
gB(a){return J.el(this.a)},
gM(a){return J.dm(this.a)},
gF(a){var s=this.a,r=J.dj(s)
s=r.j(s,J.fY(r.gR(s)))
return s==null?this.$ti.y[1].a(s):s},
gv(a){var s=this.a
return new A.fq(J.b6(J.r8(s)),s,this.$ti.h("fq<1,2>"))}}
A.fq.prototype={
m(){var s=this,r=s.a
if(r.m()){s.c=J.P(s.b,r.gq(r))
return!0}s.c=null
return!1},
gq(a){var s=this.c
return s==null?this.$ti.y[1].a(s):s},
$iaj:1}
A.fK.prototype={
i(a,b,c){var s=A.Q(this)
s.c.a(b)
s.y[1].a(c)
throw A.n(A.U("Cannot modify unmodifiable map"))}}
A.dQ.prototype={
aU(a,b,c){return J.b_(this.a,b,c)},
j(a,b){return J.P(this.a,b)},
i(a,b,c){var s=A.Q(this)
J.au(this.a,s.c.a(b),s.y[1].a(c))},
N(a,b){J.q6(this.a,A.Q(this).h("~(1,2)").a(b))},
gB(a){return J.el(this.a)},
gM(a){return J.dm(this.a)},
gk(a){return J.bm(this.a)},
l(a){return J.t(this.a)},
ga2(a){return J.q7(this.a)},
ga_(a){return J.ek(this.a)},
cR(a,b,c,d){return J.cQ(this.a,A.Q(this).C(c).C(d).h("a4<1,2>(3,4)").a(b),c,d)},
$iA:1}
A.ca.prototype={
aU(a,b,c){return new A.ca(J.b_(this.a,b,c),b.h("@<0>").C(c).h("ca<1,2>"))}}
A.cl.prototype={
gB(a){return this.gk(this)===0},
gM(a){return this.gk(this)!==0},
ab(a,b,c){var s=A.Q(this)
return new A.cZ(this,s.C(c).h("1(2)").a(b),s.h("@<1>").C(c).h("cZ<1,2>"))},
l(a){return A.q9(this,"{","}")},
gF(a){var s=this.gv(this)
if(!s.m())throw A.n(A.dJ())
return s.gq(s)},
$iE:1,
$io:1,
$idW:1}
A.fx.prototype={}
A.e9.prototype={}
A.jp.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.hf(b):s}},
gk(a){return this.b==null?this.c.a:this.am().length},
gB(a){return this.gk(0)===0},
gM(a){return this.gk(0)>0},
gR(a){var s
if(this.b==null){s=this.c
return new A.ck(s,A.Q(s).h("ck<1>"))}return new A.jq(this)},
ga2(a){var s,r=this
if(r.b==null){s=r.c
return new A.aS(s,A.Q(s).h("aS<2>"))}return A.bq(r.am(),new A.oF(r),t.N,t.z)},
i(a,b,c){var s,r,q=this
A.X(b)
if(q.b==null)q.c.i(0,b,c)
else if(q.a1(0,b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.ea().i(0,b,c)},
a1(a,b){if(this.b==null)return this.c.a1(0,b)
if(typeof b!="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
T(a,b){if(this.b!=null&&!this.a1(0,b))return null
return this.ea().T(0,b)},
N(a,b){var s,r,q,p,o=this
t.u.a(b)
if(o.b==null)return o.c.N(0,b)
s=o.am()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.p1(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.n(A.aW(o))}},
am(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.d(Object.keys(this.a),t.s)
return s},
ea(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.a0(t.N,t.z)
r=n.am()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.i(0,o,n.j(0,o))}if(p===0)B.f.u(r,"")
else B.f.bG(r)
n.a=n.b=null
return n.c=s},
hf(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.p1(this.a[a])
return this.b[a]=s}}
A.oF.prototype={
$1(a){return this.a.j(0,A.X(a))},
$S:19}
A.jq.prototype={
gk(a){return this.a.gk(0)},
I(a,b){var s=this.a
if(s.b==null)s=s.gR(0).I(0,b)
else{s=s.am()
if(!(b>=0&&b<s.length))return A.v(s,b)
s=s[b]}return s},
gv(a){var s=this.a
if(s.b==null){s=s.gR(0)
s=s.gv(s)}else{s=s.am()
s=new J.cS(s,s.length,A.az(s).h("cS<1>"))}return s}}
A.oW.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:26}
A.oV.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:26}
A.h8.prototype={
ip(a3,a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a1="Invalid base64 encoding length ",a2=a4.length
a6=A.dV(a5,a6,a2)
s=$.uh()
for(r=s.length,q=a5,p=q,o=null,n=-1,m=-1,l=0;q<a6;q=k){k=q+1
if(!(q<a2))return A.v(a4,q)
j=a4.charCodeAt(q)
if(j===37){i=k+2
if(i<=a6){if(!(k<a2))return A.v(a4,k)
h=A.pM(a4.charCodeAt(k))
g=k+1
if(!(g<a2))return A.v(a4,g)
f=A.pM(a4.charCodeAt(g))
e=h*16+f-(f&256)
if(e===37)e=-1
k=i}else e=-1}else e=j
if(0<=e&&e<=127){if(!(e>=0&&e<r))return A.v(s,e)
d=s[e]
if(d>=0){if(!(d<64))return A.v(a0,d)
e=a0.charCodeAt(d)
if(e===j)continue
j=e}else{if(d===-1){if(n<0){g=o==null?null:o.a.length
if(g==null)g=0
n=g+(q-p)
m=q}++l
if(j===61)continue}j=e}if(d!==-2){if(o==null){o=new A.b2("")
g=o}else g=o
g.a+=B.b.t(a4,p,q)
c=A.ay(j)
g.a+=c
p=k
continue}}throw A.n(A.b0("Invalid base64 data",a4,q))}if(o!=null){a2=B.b.t(a4,p,a6)
a2=o.a+=a2
r=a2.length
if(n>=0)A.r9(a4,m,a6,n,l,r)
else{b=B.w.b9(r-1,4)+1
if(b===1)throw A.n(A.b0(a1,a4,a6))
while(b<4){a2+="="
o.a=a2;++b}}a2=o.a
return B.b.aG(a4,a5,a6,a2.charCodeAt(0)==0?a2:a2)}a=a6-a5
if(n>=0)A.r9(a4,m,a6,n,l,a)
else{b=B.w.b9(a,4)
if(b===1)throw A.n(A.b0(a1,a4,a6))
if(b>1)a4=B.b.aG(a4,a6,a6,b===2?"==":"=")}return a4}}
A.kG.prototype={}
A.cX.prototype={}
A.hg.prototype={}
A.hr.prototype={}
A.eN.prototype={
l(a){var s=A.hs(this.a)
return(this.b!=null?"Converting object to an encodable object failed:":"Converting object did not return an encodable object:")+" "+s}}
A.hU.prototype={
l(a){return"Cyclic error in JSON stringify"}}
A.hT.prototype={
aX(a,b,c){var s=A.xs(b,this.ghY().a)
return s},
aa(a,b){var s=A.wb(a,this.gi_().b,null)
return s},
gi_(){return B.kc},
ghY(){return B.kb}}
A.ml.prototype={}
A.mk.prototype={}
A.oH.prototype={
eH(a){var s,r,q,p,o,n,m=a.length
for(s=this.c,r=0,q=0;q<m;++q){p=a.charCodeAt(q)
if(p>92){if(p>=55296){o=p&64512
if(o===55296){n=q+1
n=!(n<m&&(a.charCodeAt(n)&64512)===56320)}else n=!1
if(!n)if(o===56320){o=q-1
o=!(o>=0&&(a.charCodeAt(o)&64512)===55296)}else o=!1
else o=!0
if(o){if(q>r)s.a+=B.b.t(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(117)
s.a+=o
o=A.ay(100)
s.a+=o
o=p>>>8&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p>>>4&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ay(o<10?48+o:87+o)
s.a+=o}}continue}if(p<32){if(q>r)s.a+=B.b.t(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
switch(p){case 8:o=A.ay(98)
s.a+=o
break
case 9:o=A.ay(116)
s.a+=o
break
case 10:o=A.ay(110)
s.a+=o
break
case 12:o=A.ay(102)
s.a+=o
break
case 13:o=A.ay(114)
s.a+=o
break
default:o=A.ay(117)
s.a+=o
o=A.ay(48)
s.a=(s.a+=o)+o
o=p>>>4&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
o=p&15
o=A.ay(o<10?48+o:87+o)
s.a+=o
break}}else if(p===34||p===92){if(q>r)s.a+=B.b.t(a,r,q)
r=q+1
o=A.ay(92)
s.a+=o
o=A.ay(p)
s.a+=o}}if(r===0)s.a+=a
else if(r<m)s.a+=B.b.t(a,r,m)},
c7(a){var s,r,q,p
for(s=this.a,r=s.length,q=0;q<r;++q){p=s[q]
if(a==null?p==null:a===p)throw A.n(new A.hU(a,null))}B.f.u(s,a)},
bU(a){var s,r,q,p,o=this
if(o.eG(a))return
o.c7(a)
try{s=o.b.$1(a)
if(!o.eG(s)){q=A.rq(a,null,o.gdR())
throw A.n(q)}q=o.a
if(0>=q.length)return A.v(q,-1)
q.pop()}catch(p){r=A.aQ(p)
q=A.rq(a,r,o.gdR())
throw A.n(q)}},
eG(a){var s,r,q=this
if(typeof a=="number"){if(!isFinite(a))return!1
q.c.a+=B.a4.l(a)
return!0}else if(a===!0){q.c.a+="true"
return!0}else if(a===!1){q.c.a+="false"
return!0}else if(a==null){q.c.a+="null"
return!0}else if(typeof a=="string"){s=q.c
s.a+='"'
q.eH(a)
s.a+='"'
return!0}else if(t.j.b(a)){q.c7(a)
q.iJ(a)
s=q.a
if(0>=s.length)return A.v(s,-1)
s.pop()
return!0}else if(t.G.b(a)){q.c7(a)
r=q.iK(a)
s=q.a
if(0>=s.length)return A.v(s,-1)
s.pop()
return r}else return!1},
iJ(a){var s,r,q=this.c
q.a+="["
s=J.ao(a)
if(s.gM(a)){this.bU(s.j(a,0))
for(r=1;r<s.gk(a);++r){q.a+=","
this.bU(s.j(a,r))}}q.a+="]"},
iK(a){var s,r,q,p,o,n=this,m={},l=J.ao(a)
if(l.gB(a)){n.c.a+="{}"
return!0}s=l.gk(a)*2
r=A.hY(s,null,!1,t.X)
q=m.a=0
m.b=!0
l.N(a,new A.oI(m,r))
if(!m.b)return!1
l=n.c
l.a+="{"
for(p='"';q<s;q+=2,p=',"'){l.a+=p
n.eH(A.X(r[q]))
l.a+='":'
o=q+1
if(!(o<s))return A.v(r,o)
n.bU(r[o])}l.a+="}"
return!0}}
A.oI.prototype={
$2(a,b){var s,r
if(typeof a!="string")this.a.b=!1
s=this.b
r=this.a
B.f.i(s,r.a++,a)
B.f.i(s,r.a++,b)},
$S:16}
A.oG.prototype={
gdR(){var s=this.c.a
return s.charCodeAt(0)==0?s:s}}
A.iX.prototype={}
A.oc.prototype={
cH(a){var s,r,q,p,o=a.length,n=A.dV(0,null,o)
if(n===0)return new Uint8Array(0)
s=n*3
r=new Uint8Array(s)
q=new A.oX(r)
if(q.fF(a,0,n)!==n){p=n-1
if(!(p>=0&&p<o))return A.v(a,p)
q.cB()}return new Uint8Array(r.subarray(0,A.wV(0,q.b,s)))}}
A.oX.prototype={
cB(){var s,r=this,q=r.c,p=r.b,o=r.b=p+1
q.$flags&2&&A.by(q)
s=q.length
if(!(p<s))return A.v(q,p)
q[p]=239
p=r.b=o+1
if(!(o<s))return A.v(q,o)
q[o]=191
r.b=p+1
if(!(p<s))return A.v(q,p)
q[p]=189},
hT(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
r.$flags&2&&A.by(r)
o=r.length
if(!(q<o))return A.v(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.v(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.v(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.v(r,p)
r[p]=s&63|128
return!0}else{n.cB()
return!1}},
fF(a,b,c){var s,r,q,p,o,n,m,l,k=this
if(b!==c){s=c-1
if(!(s>=0&&s<a.length))return A.v(a,s)
s=(a.charCodeAt(s)&64512)===55296}else s=!1
if(s)--c
for(s=k.c,r=s.$flags|0,q=s.length,p=a.length,o=b;o<c;++o){if(!(o<p))return A.v(a,o)
n=a.charCodeAt(o)
if(n<=127){m=k.b
if(m>=q)break
k.b=m+1
r&2&&A.by(s)
s[m]=n}else{m=n&64512
if(m===55296){if(k.b+4>q)break
m=o+1
if(!(m<p))return A.v(a,m)
if(k.hT(n,a.charCodeAt(m)))o=m}else if(m===56320){if(k.b+3>q)break
k.cB()}else if(n<=2047){m=k.b
l=m+1
if(l>=q)break
k.b=l
r&2&&A.by(s)
if(!(m<q))return A.v(s,m)
s[m]=n>>>6|192
k.b=l+1
s[l]=n&63|128}else{m=k.b
if(m+2>=q)break
l=k.b=m+1
r&2&&A.by(s)
if(!(m<q))return A.v(s,m)
s[m]=n>>>12|224
m=k.b=l+1
if(!(l<q))return A.v(s,l)
s[l]=n>>>6&63|128
k.b=m+1
if(!(m<q))return A.v(s,m)
s[m]=n&63|128}}}return o}}
A.ob.prototype={
cH(a){return new A.oU(this.a).fp(t.B.a(a),0,null,!0)}}
A.oU.prototype={
fp(a,b,c,d){var s,r,q,p,o,n,m,l=this
t.B.a(a)
s=A.dV(b,c,J.bm(a))
if(b===s)return""
if(a instanceof Uint8Array){r=a
q=r
p=0}else{q=A.wK(a,b,s)
s-=b
p=b
b=0}if(s-b>=15){o=l.a
n=A.wJ(o,q,b,s)
if(n!=null){if(!o)return n
if(n.indexOf("\ufffd")<0)return n}}n=l.cd(q,b,s,!0)
o=l.b
if((o&1)!==0){m=A.wL(o)
l.b=0
throw A.n(A.b0(m,a,p+l.c))}return n},
cd(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.w.a9(b+c,2)
r=q.cd(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.cd(a,s,c,d)}return q.hX(a,b,c,d)},
hX(a,b,a0,a1){var s,r,q,p,o,n,m,l,k=this,j="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",i=" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",h=65533,g=k.b,f=k.c,e=new A.b2(""),d=b+1,c=a.length
if(!(b>=0&&b<c))return A.v(a,b)
s=a[b]
A:for(r=k.a;;){for(;;d=o){if(!(s>=0&&s<256))return A.v(j,s)
q=j.charCodeAt(s)&31
f=g<=32?s&61694>>>q:(s&63|f<<6)>>>0
p=g+q
if(!(p>=0&&p<144))return A.v(i,p)
g=i.charCodeAt(p)
if(g===0){p=A.ay(f)
e.a+=p
if(d===a0)break A
break}else if((g&1)!==0){if(r)switch(g){case 69:case 67:p=A.ay(h)
e.a+=p
break
case 65:p=A.ay(h)
e.a+=p;--d
break
default:p=A.ay(h)
e.a=(e.a+=p)+p
break}else{k.b=g
k.c=d-1
return""}g=0}if(d===a0)break A
o=d+1
if(!(d>=0&&d<c))return A.v(a,d)
s=a[d]}o=d+1
if(!(d>=0&&d<c))return A.v(a,d)
s=a[d]
if(s<128){for(;;){if(!(o<a0)){n=a0
break}m=o+1
if(!(o>=0&&o<c))return A.v(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-d<20)for(l=d;l<n;++l){if(!(l<c))return A.v(a,l)
p=A.ay(a[l])
e.a+=p}else{p=A.rE(a,d,n)
e.a+=p}if(n===a0)break A
d=o}else d=o}if(a1&&g>32)if(r){c=A.ay(h)
e.a+=c}else{k.b=77
k.c=a0
return""}k.b=g
k.c=f
c=e.a
return c.charCodeAt(0)==0?c:c}}
A.oS.prototype={
$2(a,b){var s,r
A.X(a)
if(typeof b=="string")this.a.set(a,b)
else if(b==null)this.a.set(a,"")
else for(s=J.b6(t.U.a(b)),r=this.a;s.m();){b=s.gq(s)
if(typeof b=="string")r.append(a,b)
else if(b==null)r.append(a,"")
else A.bK(b)}},
$S:2}
A.cY.prototype={
O(a,b){if(b==null)return!1
return b instanceof A.cY&&this.a===b.a&&this.b===b.b&&this.c===b.c},
gL(a){return A.eZ(this.a,this.b,B.a_,B.a_)},
l(a){var s=this,r=A.vi(A.vI(s)),q=A.hn(A.vG(s)),p=A.hn(A.vC(s)),o=A.hn(A.vD(s)),n=A.hn(A.vF(s)),m=A.hn(A.vH(s)),l=A.rh(A.vE(s)),k=s.b,j=k===0?"":A.rh(k)
k=r+"-"+q
if(s.c)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l+j}}
A.bA.prototype={
gih(){return B.w.a9(this.a,1000)},
O(a,b){if(b==null)return!1
return b instanceof A.bA&&this.a===b.a},
gL(a){return B.w.gL(this.a)},
l(a){var s,r,q,p,o,n=this.a,m=B.w.a9(n,36e8),l=n%36e8
if(n<0){m=0-m
n=0-l
s="-"}else{n=l
s=""}r=B.w.a9(n,6e7)
n%=6e7
q=r<10?"0":""
p=B.w.a9(n,1e6)
o=p<10?"0":""
return s+m+":"+q+r+":"+o+p+"."+B.b.ew(B.w.l(n%1e6),6,"0")}}
A.oj.prototype={
l(a){return this.W()}}
A.as.prototype={
gaJ(){return A.vB(this)}}
A.h1.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.hs(s)
return"Assertion failed"}}
A.cp.prototype={}
A.bS.prototype={
gcj(){return"Invalid argument"+(!this.a?"(s)":"")},
gci(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+A.Z(p),n=s.gcj()+q+o
if(!s.a)return n
return n+s.gci()+": "+A.hs(s.gcQ())},
gcQ(){return this.b}}
A.f0.prototype={
gcQ(){return A.tc(this.b)},
gcj(){return"RangeError"},
gci(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.Z(q):""
else if(q==null)s=": Not greater than or equal to "+A.Z(r)
else if(q>r)s=": Not in inclusive range "+A.Z(r)+".."+A.Z(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.Z(r)
return s}}
A.hO.prototype={
gcQ(){return A.b4(this.b)},
gcj(){return"RangeError"},
gci(){if(A.b4(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.fb.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.iS.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.d4.prototype={
l(a){return"Bad state: "+this.a}}
A.he.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.hs(s)+"."}}
A.ig.prototype={
l(a){return"Out of Memory"},
gaJ(){return null},
$ias:1}
A.f4.prototype={
l(a){return"Stack Overflow"},
gaJ(){return null},
$ias:1}
A.om.prototype={
l(a){return"Exception: "+this.a}}
A.bX.prototype={
l(a){var s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=""!==h?"FormatException: "+h:"FormatException",f=this.c,e=this.b
if(typeof e=="string"){if(f!=null)s=f<0||f>e.length
else s=!1
if(s)f=null
if(f==null){if(e.length>78)e=B.b.t(e,0,75)+"..."
return g+"\n"+e}for(r=e.length,q=1,p=0,o=!1,n=0;n<f;++n){if(!(n<r))return A.v(e,n)
m=e.charCodeAt(n)
if(m===10){if(p!==n||!o)++q
p=n+1
o=!1}else if(m===13){++q
p=n+1
o=!0}}g=q>1?g+(" (at line "+q+", character "+(f-p+1)+")\n"):g+(" (at character "+(f+1)+")\n")
for(n=f;n<r;++n){if(!(n>=0))return A.v(e,n)
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
k=""}return g+l+B.b.t(e,i,j)+k+"\n"+B.b.bV(" ",f-i+l.length)+"^\n"}else return f!=null?g+(" (at offset "+A.Z(f)+")"):g}}
A.o.prototype={
ab(a,b,c){var s=A.Q(this)
return A.bq(this,s.C(c).h("1(o.E)").a(b),s.h("o.E"),c)},
aH(a,b){var s=A.Q(this)
return new A.aG(this,s.h("ad(o.E)").a(b),s.h("aG<o.E>"))},
J(a,b){var s,r,q=this.gv(this)
if(!q.m())return""
s=J.t(q.gq(q))
if(!q.m())return s
if(b.length===0){r=s
do r+=J.t(q.gq(q))
while(q.m())}else{r=s
do r=r+b+J.t(q.gq(q))
while(q.m())}return r.charCodeAt(0)==0?r:r},
bT(a,b){var s=A.Q(this).h("o.E")
if(b)s=A.aC(this,s)
else{s=A.aC(this,s)
s.$flags=1
s=s}return s},
gk(a){var s,r=this.gv(this)
for(s=0;r.m();)++s
return s},
gB(a){return!this.gv(this).m()},
gM(a){return!this.gB(this)},
gF(a){var s=this.gv(this)
if(!s.m())throw A.n(A.dJ())
return s.gq(s)},
I(a,b){var s,r
A.f1(b,"index")
s=this.gv(this)
for(r=b;s.m();){if(r===0)return s.gq(s);--r}throw A.n(A.aF(b,b-r,this,"index"))},
l(a){return A.vv(this,"(",")")}}
A.a4.prototype={
l(a){return"MapEntry("+A.Z(this.a)+": "+A.Z(this.b)+")"}}
A.aM.prototype={
gL(a){return A.T.prototype.gL.call(this,0)},
l(a){return"null"}}
A.T.prototype={$iT:1,
O(a,b){return this===b},
gL(a){return A.f_(this)},
l(a){return"Instance of '"+A.im(this)+"'"},
gU(a){return A.pL(this)},
toString(){return this.l(this)}}
A.jR.prototype={
l(a){return""},
$icF:1}
A.nG.prototype={
geg(){var s,r=this.b
if(r==null)r=$.io.$0()
s=r-this.a
if($.qY()===1e6)return s
return s*1000}}
A.b2.prototype={
gk(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s},
$ivS:1}
A.oa.prototype={
$2(a,b){var s,r,q,p
t.V.a(a)
A.X(b)
s=B.b.cP(b,"=")
if(s===-1){if(b!=="")J.au(a,A.qy(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.t(b,0,s)
q=B.b.a5(b,s+1)
p=this.a
J.au(a,A.qy(r,0,r.length,p,!0),A.qy(q,0,q.length,p,!0))}return a},
$S:79}
A.o9.prototype={
$2(a,b){throw A.n(A.b0("Illegal IPv6 address, "+a,this.a,b))},
$S:39}
A.fL.prototype={
gbE(){var s,r,q,p,o=this,n=o.w
if(n===$){s=o.a
r=s.length!==0?s+":":""
q=o.c
p=q==null
if(!p||s==="file"){s=r+"//"
r=o.b
if(r.length!==0)s=s+r+"@"
if(!p)s+=q
r=o.d
if(r!=null)s=s+":"+A.Z(r)}else s=r
s+=o.e
r=o.f
if(r!=null)s=s+"?"+r
r=o.r
if(r!=null)s=s+"#"+r
n=o.w=s.charCodeAt(0)==0?s:s}return n},
gL(a){var s,r=this,q=r.y
if(q===$){s=B.b.gL(r.gbE())
r.y!==$&&A.tQ()
r.y=s
q=s}return q},
gcV(){var s,r=this,q=r.z
if(q===$){s=r.f
s=A.rN(s==null?"":s)
r.z!==$&&A.tQ()
q=r.z=new A.ca(s,t.dw)}return q},
geE(){return this.b},
gaF(a){var s=this.c
if(s==null)return""
if(B.b.K(s,"[")&&!B.b.X(s,"v",1))return B.b.t(s,1,s.length-1)
return s},
gbS(a){var s=this.d
return s==null?A.t2(this.a):s},
gcU(a){var s=this.f
return s==null?"":s},
gen(){var s=this.r
return s==null?"":s},
cX(a,b){var s,r,q,p,o,n,m,l,k,j=this
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
if(b!=null)k=A.qw(null,0,0,b)
else k=j.f
return A.qu(s,q,o,p,l,k,j.r)},
ges(){return this.a.length!==0},
geo(){return this.c!=null},
ger(){return this.f!=null},
gep(){return this.r!=null},
l(a){return this.gbE()},
O(a,b){var s,r,q,p=this
if(b==null)return!1
if(p===b)return!0
s=!1
if(t.dD.b(b))if(p.a===b.gac())if(p.c!=null===b.geo())if(p.b===b.geE())if(p.gaF(0)===b.gaF(b))if(p.gbS(0)===b.gbS(b))if(p.e===b.gex(b)){r=p.f
q=r==null
if(!q===b.ger()){if(q)r=""
if(r===b.gcU(b)){r=p.r
q=r==null
if(!q===b.gep()){s=q?"":r
s=s===b.gen()}}}}return s},
$iiU:1,
gac(){return this.a},
gex(a){return this.e}}
A.oR.prototype={
$2(a,b){var s=this.b,r=this.a
s.a+=r.a
r.a="&"
r=A.oT(1,a,B.a0,!0)
r=s.a+=r
if(b!=null&&b.length!==0){s.a=r+"="
r=A.oT(1,b,B.a0,!0)
s.a+=r}},
$S:73}
A.oQ.prototype={
$2(a,b){var s,r
A.X(a)
if(b==null||typeof b=="string")this.a.$2(a,A.bK(b))
else for(s=J.b6(t.U.a(b)),r=this.a;s.m();)r.$2(a,A.X(s.gq(s)))},
$S:2}
A.o8.prototype={
geD(){var s,r,q,p,o=this,n=null,m=o.c
if(m==null){m=o.b
if(0>=m.length)return A.v(m,0)
s=o.a
m=m[0]+1
r=B.b.bQ(s,"?",m)
q=s.length
if(r>=0){p=A.fM(s,r+1,q,256,!1,!1)
q=r}else p=n
m=o.c=new A.j9("data","",n,n,A.fM(s,m,q,128,!1,!1),p,n)}return m},
l(a){var s,r=this.b
if(0>=r.length)return A.v(r,0)
s=this.a
return r[0]===-1?"data:"+s:s}}
A.jG.prototype={
ges(){return this.b>0},
geo(){return this.c>0},
geq(){return this.c>0&&this.d+1<this.e},
ger(){return this.f<this.r},
gep(){return this.r<this.a.length},
gac(){var s=this.w
return s==null?this.w=this.fi():s},
fi(){var s,r=this,q=r.b
if(q<=0)return""
s=q===4
if(s&&B.b.K(r.a,"http"))return"http"
if(q===5&&B.b.K(r.a,"https"))return"https"
if(s&&B.b.K(r.a,"file"))return"file"
if(q===7&&B.b.K(r.a,"package"))return"package"
return B.b.t(r.a,0,q)},
geE(){var s=this.c,r=this.b+3
return s>r?B.b.t(this.a,r,s-1):""},
gaF(a){var s=this.c
return s>0?B.b.t(this.a,s,this.d):""},
gbS(a){var s,r=this
if(r.geq())return A.eh(B.b.t(r.a,r.d+1,r.e),null)
s=r.b
if(s===4&&B.b.K(r.a,"http"))return 80
if(s===5&&B.b.K(r.a,"https"))return 443
return 0},
gex(a){return B.b.t(this.a,this.e,this.f)},
gcU(a){var s=this.f,r=this.r
return s<r?B.b.t(this.a,s+1,r):""},
gen(){var s=this.r,r=this.a
return s<r.length?B.b.a5(r,s+1):""},
gcV(){if(this.f>=this.r)return B.dj
return new A.ca(A.rN(this.gcU(0)),t.dw)},
cX(a,b){var s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
t.h.a(b)
s=h.gac()
r=s==="file"
q=h.c
p=q>0?B.b.t(h.a,h.b+3,q):""
o=h.geq()?h.gbS(0):g
q=h.c
if(q>0)n=B.b.t(h.a,q,h.d)
else n=p.length!==0||o!=null||r?"":g
q=h.a
m=h.f
l=B.b.t(q,h.e,m)
if(!r)k=n!=null&&l.length!==0
else k=!0
if(k&&!B.b.K(l,"/"))l="/"+l
if(b!=null)j=A.qw(g,0,0,b)
else{k=h.r
j=m<k?B.b.t(q,m+1,k):g}m=h.r
i=m<q.length?B.b.a5(q,m+1):g
return A.qu(s,p,n,o,l,j,i)},
gL(a){var s=this.x
return s==null?this.x=B.b.gL(this.a):s},
O(a,b){if(b==null)return!1
if(this===b)return!0
return t.dD.b(b)&&this.a===b.l(0)},
l(a){return this.a},
$iiU:1}
A.j9.prototype={}
A.N.prototype={}
A.fZ.prototype={
gk(a){return a.length}}
A.h_.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.h0.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.eo.prototype={}
A.c7.prototype={
gk(a){return a.length}}
A.hh.prototype={
gk(a){return a.length}}
A.am.prototype={$iam:1}
A.dB.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.l5.prototype={}
A.bc.prototype={}
A.bT.prototype={}
A.hi.prototype={
gk(a){return a.length}}
A.hj.prototype={
gk(a){return a.length}}
A.hm.prototype={
gk(a){return a.length}}
A.ho.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.eu.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.eU.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.ev.prototype={
l(a){var s,r=a.left
r.toString
s=a.top
s.toString
return"Rectangle ("+A.Z(r)+", "+A.Z(s)+") "+A.Z(this.gaI(a))+" x "+A.Z(this.gaE(a))},
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
if(r===q){s=J.dj(b)
s=this.gaI(a)===s.gaI(b)&&this.gaE(a)===s.gaE(b)}}}return s},
gL(a){var s,r=a.left
r.toString
s=a.top
s.toString
return A.eZ(r,s,this.gaI(a),this.gaE(a))},
gdH(a){return a.height},
gaE(a){var s=this.gdH(a)
s.toString
return s},
geb(a){return a.width},
gaI(a){var s=this.geb(a)
s.toString
return s},
$ic_:1}
A.hp.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){A.X(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.hq.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.L.prototype={
l(a){var s=a.localName
s.toString
return s}}
A.x.prototype={}
A.bn.prototype={$ibn:1}
A.ht.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.c8.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.hu.prototype={
gk(a){return a.length}}
A.hG.prototype={
gk(a){return a.length}}
A.bp.prototype={$ibp:1}
A.hL.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.d0.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.D.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.i_.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.i0.prototype={
gk(a){return a.length}}
A.i1.prototype={
j(a,b){return A.cM(a.get(A.X(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cM(r.value[1]))}},
gR(a){var s=A.d([],t.s)
this.N(a,new A.mq(s))
return s},
ga2(a){var s=A.d([],t.Q)
this.N(a,new A.mr(s))
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
i(a,b,c){A.X(b)
throw A.n(A.U("Not supported"))},
T(a,b){throw A.n(A.U("Not supported"))},
$iA:1}
A.mq.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.mr.prototype={
$2(a,b){return B.f.u(this.a,t.G.a(b))},
$S:2}
A.i2.prototype={
j(a,b){return A.cM(a.get(A.X(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cM(r.value[1]))}},
gR(a){var s=A.d([],t.s)
this.N(a,new A.ms(s))
return s},
ga2(a){var s=A.d([],t.Q)
this.N(a,new A.mt(s))
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
i(a,b,c){A.X(b)
throw A.n(A.U("Not supported"))},
T(a,b){throw A.n(A.U("Not supported"))},
$iA:1}
A.ms.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.mt.prototype={
$2(a,b){return B.f.u(this.a,t.G.a(b))},
$S:2}
A.br.prototype={$ibr:1}
A.i3.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.cI.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.a5.prototype={
l(a){var s=a.nodeValue
return s==null?this.eM(a):s},
$ia5:1}
A.eX.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.D.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.bs.prototype={
gk(a){return a.length},
$ibs:1}
A.ik.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.he.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.iq.prototype={
j(a,b){return A.cM(a.get(A.X(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cM(r.value[1]))}},
gR(a){var s=A.d([],t.s)
this.N(a,new A.nt(s))
return s},
ga2(a){var s=A.d([],t.Q)
this.N(a,new A.nu(s))
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
i(a,b,c){A.X(b)
throw A.n(A.U("Not supported"))},
T(a,b){throw A.n(A.U("Not supported"))},
$iA:1}
A.nt.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.nu.prototype={
$2(a,b){return B.f.u(this.a,t.G.a(b))},
$S:2}
A.is.prototype={
gk(a){return a.length}}
A.bt.prototype={$ibt:1}
A.it.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.fY.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.bu.prototype={$ibu:1}
A.iu.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.dP.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.bv.prototype={
gk(a){return a.length},
$ibv:1}
A.iy.prototype={
j(a,b){return a.getItem(A.X(b))},
i(a,b,c){a.setItem(A.X(b),A.X(c))},
T(a,b){var s
A.X(b)
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
gR(a){var s=A.d([],t.s)
this.N(a,new A.nH(s))
return s},
ga2(a){var s=A.d([],t.s)
this.N(a,new A.nI(s))
return s},
gk(a){var s=a.length
s.toString
return s},
gB(a){return a.key(0)==null},
gM(a){return a.key(0)!=null},
$iA:1}
A.nH.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:18}
A.nI.prototype={
$2(a,b){return B.f.u(this.a,b)},
$S:18}
A.b8.prototype={$ib8:1}
A.f9.prototype={
siH(a,b){a.value=b}}
A.bw.prototype={$ibw:1}
A.b9.prototype={$ib9:1}
A.iI.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.do.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.iJ.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.a0.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.iL.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.bx.prototype={$ibx:1}
A.iN.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.aK.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.iO.prototype={
gk(a){return a.length}}
A.iW.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.iY.prototype={
gk(a){return a.length}}
A.j7.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.g5.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.ff.prototype={
l(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return"Rectangle ("+A.Z(p)+", "+A.Z(s)+") "+A.Z(r)+" x "+A.Z(q)},
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
q=J.dj(b)
if(r===q.gaI(b)){s=a.height
s.toString
q=s===q.gaE(b)
s=q}}}}return s},
gL(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.eZ(p,s,r,q)},
gdH(a){return a.height},
gaE(a){var s=a.height
s.toString
return s},
geb(a){return a.width},
gaI(a){var s=a.width
s.toString
return s}}
A.jk.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
return a[b]},
i(a,b,c){t.g7.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){if(a.length>0)return a[0]
throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.fs.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.D.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.jK.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.gf.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.jS.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length,r=b>>>0!==b||b>=s
r.toString
if(r)throw A.n(A.aF(b,s,a,null))
s=a[b]
s.toString
return s},
i(a,b,c){t.gn.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s
if(a.length>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){if(!(b>=0&&b<a.length))return A.v(a,b)
return a[b]},
$iE:1,
$ia6:1,
$io:1,
$iB:1}
A.S.prototype={
gv(a){return new A.eA(a,this.gk(a),A.aI(a).h("eA<S.E>"))},
u(a,b){A.aI(a).h("S.E").a(b)
throw A.n(A.U("Cannot add to immutable List."))}}
A.eA.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.d=J.P(s.a,r)
s.c=r
return!0}s.d=null
s.c=q
return!1},
gq(a){var s=this.d
return s==null?this.$ti.c.a(s):s},
$iaj:1}
A.j8.prototype={}
A.ja.prototype={}
A.jb.prototype={}
A.jc.prototype={}
A.jd.prototype={}
A.jf.prototype={}
A.jg.prototype={}
A.jn.prototype={}
A.jo.prototype={}
A.ju.prototype={}
A.jv.prototype={}
A.jw.prototype={}
A.jx.prototype={}
A.jy.prototype={}
A.jz.prototype={}
A.jC.prototype={}
A.jD.prototype={}
A.jF.prototype={}
A.fy.prototype={}
A.fz.prototype={}
A.jI.prototype={}
A.jJ.prototype={}
A.jL.prototype={}
A.jT.prototype={}
A.jU.prototype={}
A.fC.prototype={}
A.fD.prototype={}
A.jW.prototype={}
A.jX.prototype={}
A.k0.prototype={}
A.k1.prototype={}
A.k2.prototype={}
A.k3.prototype={}
A.k4.prototype={}
A.k5.prototype={}
A.k6.prototype={}
A.k7.prototype={}
A.k8.prototype={}
A.k9.prototype={}
A.mO.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.pV.prototype={
$1(a){return this.a.aV(0,this.b.h("0/?").a(a))},
$S:7}
A.pW.prototype={
$1(a){if(a==null)return this.a.ah(new A.mO(a===undefined))
return this.a.ah(a)},
$S:7}
A.pH.prototype={
$1(a){var s,r,q,p,o,n,m,l,k,j,i,h
if(A.tm(a))return a
s=this.a
a.toString
if(s.a1(0,a))return s.j(0,a)
if(a instanceof Date){r=a.getTime()
if(r<-864e13||r>864e13)A.ce(A.aU(r,-864e13,864e13,"millisecondsSinceEpoch",null))
A.fS(!0,"isUtc",t.y)
return new A.cY(r,0,!0)}if(a instanceof RegExp)throw A.n(A.c5("structured clone of RegExp",null))
if(a instanceof Promise)return A.yl(a,t.X)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=t.X
o=A.a0(p,p)
s.i(0,a,o)
n=Object.keys(a)
m=[]
for(s=J.bQ(n),p=s.gv(n);p.m();)m.push(A.tC(p.gq(p)))
for(l=0;l<s.gk(n);++l){k=s.j(n,l)
if(!(l<m.length))return A.v(m,l)
j=m[l]
if(k!=null)o.i(0,j,this.$1(a[k]))}return o}if(a instanceof Array){i=a
o=[]
s.i(0,a,o)
h=A.b4(a.length)
for(s=J.ao(i),l=0;l<h;++l)o.push(this.$1(s.j(i,l)))
return o}return a},
$S:42}
A.bD.prototype={$ibD:1}
A.hW.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.n(A.aF(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.bG.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){return this.j(a,b)},
$iE:1,
$io:1,
$iB:1}
A.bG.prototype={$ibG:1}
A.id.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.n(A.aF(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.ck.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){return this.j(a,b)},
$iE:1,
$io:1,
$iB:1}
A.il.prototype={
gk(a){return a.length}}
A.iA.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.n(A.aF(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){A.X(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){return this.j(a,b)},
$iE:1,
$io:1,
$iB:1}
A.bI.prototype={$ibI:1}
A.iP.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=a.length
s.toString
s=b>>>0!==b||b>=s
s.toString
if(s)throw A.n(A.aF(b,this.gk(a),a,null))
s=a.getItem(b)
s.toString
return s},
i(a,b,c){t.cM.a(c)
throw A.n(A.U("Cannot assign element of immutable List."))},
sk(a,b){throw A.n(A.U("Cannot resize immutable List."))},
gF(a){var s=a.length
s.toString
if(s>0){s=a[0]
s.toString
return s}throw A.n(A.an("No elements"))},
I(a,b){return this.j(a,b)},
$iE:1,
$io:1,
$iB:1}
A.jr.prototype={}
A.js.prototype={}
A.jA.prototype={}
A.jB.prototype={}
A.jP.prototype={}
A.jQ.prototype={}
A.jY.prototype={}
A.jZ.prototype={}
A.h3.prototype={
gk(a){return a.length}}
A.h4.prototype={
j(a,b){return A.cM(a.get(A.X(b)))},
N(a,b){var s,r,q
t.u.a(b)
s=a.entries()
for(;;){r=s.next()
q=r.done
q.toString
if(q)return
q=r.value[0]
q.toString
b.$2(q,A.cM(r.value[1]))}},
gR(a){var s=A.d([],t.s)
this.N(a,new A.kt(s))
return s},
ga2(a){var s=A.d([],t.Q)
this.N(a,new A.ku(s))
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
i(a,b,c){A.X(b)
throw A.n(A.U("Not supported"))},
T(a,b){throw A.n(A.U("Not supported"))},
$iA:1}
A.kt.prototype={
$2(a,b){return B.f.u(this.a,a)},
$S:2}
A.ku.prototype={
$2(a,b){return B.f.u(this.a,t.G.a(b))},
$S:2}
A.h5.prototype={
gk(a){return a.length}}
A.cy.prototype={}
A.ie.prototype={
gk(a){return a.length}}
A.j5.prototype={}
A.e3.prototype={
W(){return"WebSocketConnectionState."+this.b}}
A.cB.prototype={
W(){return"FlintErrorKind."+this.b}}
A.eD.prototype={
W(){return"FlintResponseType."+this.b}}
A.nF.prototype={}
A.bU.prototype={
l(a){var s,r=this,q="FlintError: "+r.a,p=r.b
if(p!=null)q+=" (Status: "+A.Z(p)+")"
q+=" [Kind: "+r.r.b+"]"
p=r.e
if(p!=null){s=r.f
s=s==null?null:s.toUpperCase()
if(s==null)s="GET"
p=q+(" ["+s+" "+p.l(0)+"]")
q=p}return q.charCodeAt(0)==0?q:q}}
A.c9.prototype={}
A.l9.prototype={
iL(a){var s,r,q,p,o,n=null,m=t.N,l=A.bd(this.b,m,m)
l=new A.ah(l,A.Q(l).h("ah<1,2>")).gv(0)
for(;;){if(!l.m()){s=n
break}r=l.d
if(r.a.toLowerCase()==="authorization"){s=r.b
break}}q=s!=null&&B.b.K(s,"Bearer ")?B.b.a5(s,7):n
p=this.a
if(B.b.eh(p,"/"))p=B.b.t(p,0,p.length-1)
o=B.b.K(a,"/")?a:"/"+a
return new A.lq(B.b.cY(p+o,A.c0("^http",!0,!1),"ws"),n,!1,!1,"token",q,n,A.a0(m,t.gz),A.d([],t.c7),B.aA)},
b8(a,b,c,d,e,f,g,h,i,j,k){return this.iw(0,b,c,d,t.v.a(e),f,g,h,i,j,k,k.h("c9<0>"))},
iw(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var s=0,r=A.bj(b4),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$b8=A.bk(function(b5,b6){if(b5===1){o.push(b6)
s=p}for(;;)switch(s){case 0:a0=n.hR(a5,b1)
a1=new A.nG()
$.qY()
f=$.io.$0()
a1.a=f
a1.b=null
m=a1
p=4
s=7
return A.b5(n.hs(a4.toUpperCase(),a0,a6,a7,b0,n.d,b3),$async$b8)
case 7:l=b6
f=m
if(f.b==null)f.b=$.io.$0()
f=l.a
e=l.b
d=l.d
c=l.e
b=A.cI(a0,0,null)
k=A.rj(e,A.l6(m.geg(),0,0),c,a4,f,n.x,d,b,b3)
n.dC(k,null,a8,b3)
q=k
s=1
break
p=2
s=6
break
case 4:p=3
a2=o.pop()
j=A.aQ(a2)
f=m
if(f.b==null)f.b=$.io.$0()
i=j instanceof A.bU?j:A.vl(j,a4,A.cI(a0,0,null))
A.l6(m.geg(),0,0)
f=i.b
if(f==null)f=500
h=new A.c9(f,null,B.cV,null,!1,n.x,b3.h("c9<0>"))
n.dC(h,i,a8,b3)
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
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$b8,r)},
hs(a,b,c,d,e,f,g){var s,r,q,p,o,n,m
t.v.a(d)
s=A.z(new v.G.XMLHttpRequest())
r=new A.aq($.ai,g.h("aq<c9<0>>"))
q=new A.cr(r,g.h("cr<c9<0>>"))
p=t.N
p=A.a0(p,p)
p.i(0,"Accept","application/json")
p.S(0,this.b)
if(d!=null)p.S(0,d)
o=this.fb(0,c,p)
s.open(a,b,!0)
s.withCredentials=!0
for(p=new A.ah(p,p.$ti.h("ah<1,2>")).gv(0);p.m();){n=p.d
s.setRequestHeader(n.a,n.b)}p=t.an
m=t.m
A.cJ(s,"load",p.a(new A.lb(this,s,e,b,a,q,g)),!1,m)
A.cJ(s,"error",p.a(new A.lc(q,b,a)),!1,m)
if(o==null)s.send()
else s.send(o)
return r.iB(0,f,new A.ld(s,f,b,a))},
hR(a,b){var s,r,q,p,o,n=this.a
if(B.b.eh(n,"/"))n=B.b.t(n,0,n.length-1)
s=A.cI(n+(B.b.K(a,"/")?a:"/"+a),0,null)
r=t.N
q=A.bd(s.gcV(),r,t.z)
q.S(0,this.c)
r=A.a0(r,r)
for(q=new A.ah(q,A.Q(q).h("ah<1,2>")).gv(0);q.m();){p=q.d
o=p.b
if(o!=null)r.i(0,p.a,J.t(o))}return s.cX(0,r.a===0?null:r).gbE()},
fb(a,b,c){t.V.a(c)
if(b==null)return null
c.cT(0,"Content-Type",new A.la())
return B.J.aa(b,null)},
hb(a,b,c,d){var s
if(B.b.D(a).length===0)return new A.cK(null,B.cV,d.h("cK<0>"))
if(B.b.H(b.toLowerCase(),"json")||B.b.K(B.b.eB(a),"{")||B.b.K(B.b.eB(a),"[")){s=d.h("0?").a(B.J.aX(0,a,null))
return new A.cK(s,B.jp,d.h("cK<0>"))}d.h("0?").a(a)
return new A.cK(a,B.jq,d.h("cK<0>"))},
hm(a){var s,r,q,p,o=t.N,n=A.a0(o,o)
for(o=B.b.eL(a,A.c0("\\r?\\n",!0,!1)),s=o.length,r=0;r<o.length;o.length===s||(0,A.aJ)(o),++r){q=o[r]
if(B.b.D(q).length===0)continue
p=B.b.cP(q,":")
if(p<=0)continue
n.i(0,B.b.t(q,0,p).toLowerCase(),B.b.D(B.b.a5(q,p+1)))}return n},
dC(a,b,c,d){d.h("c9<0>").a(a)}}
A.lb.prototype={
$1(a){var s,r,q,p,o=this,n=null,m=o.a,l=o.b,k=A.X(l.responseText),j=A.bK(l.getResponseHeader("content-type"))
if(j==null)j=""
s=o.r
r=m.hb(k,j,o.c,s)
j=A.b4(l.status)
k=o.d
q=o.e
p=A.rj(r.a,n,m.hm(A.X(l.getAllResponseHeaders())),q,j,m.x,r.b,A.cI(k,0,n),s)
m=p.a
l=o.f
if(B.aX.H(0,m))l.aV(0,p)
else l.ah(A.hz("HTTP "+m,p.b,B.bt,q,n,m,n,A.cI(k,0,n)))},
$S:4}
A.lc.prototype={
$1(a){var s=null
this.a.ah(A.hz("Network request failed",s,B.cU,this.c,s,s,s,A.cI(this.b,0,s)))},
$S:4}
A.ld.prototype={
$0(){var s=this,r=null
s.a.abort()
throw A.n(A.hz("Request timed out after "+s.b.gih()+"ms",r,B.cT,s.d,r,r,r,A.cI(s.c,0,r)))},
$S:77}
A.la.prototype={
$0(){return"application/json"},
$S:29}
A.lq.prototype={
bt(){var s=0,r=A.bj(t.dk),q,p=this,o,n
var $async$bt=A.bk(function(a,b){if(a===1)return A.bg(b,r)
for(;;)switch(s){case 0:o=A.rR(null,t.dk)
s=3
return A.b5(o,$async$bt)
case 3:n=b
q=n==null?p.y:n
s=1
break
case 1:return A.bh(q,r)}})
return A.bi($async$bt,r)},
bd(){var s=0,r=A.bj(t.N),q,p=this,o,n
var $async$bd=A.bk(function(a,b){if(a===1)return A.bg(b,r)
for(;;)switch(s){case 0:s=3
return A.b5(p.bt(),$async$bd)
case 3:o=A.cI(p.a,0,null)
n=t.N
n=A.bd(o.gcV(),n,n)
q=o.cX(0,n.a===0?null:n).gbE()
s=1
break
case 1:return A.bh(q,r)}})
return A.bi($async$bd,r)},
aW(){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g
var $async$aW=A.bk(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:h=n.cx
if(h===B.aB||h===B.dw){s=1
break}n.ax=!1
n.au(B.dw)
p=4
s=7
return A.b5(n.bd(),$async$aW)
case 7:m=b
l=A.z(new v.G.WebSocket(m))
n.x=l
h=t.an
j=t.m
A.cJ(l,"open",h.a(new A.lt(n)),!1,j)
A.cJ(l,"message",h.a(new A.lu(n)),!1,j)
A.cJ(l,"error",h.a(new A.lv(n)),!1,j)
A.cJ(l,"close",h.a(new A.lw(n)),!1,j)
p=2
s=6
break
case 4:p=3
g=o.pop()
k=A.aQ(g)
n.bo(k)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$aW,r)},
hV(a,b,c){var s,r,q=this
q.ax=!0
q.at=!1
s=q.ch
if(s!=null)s.ag(0)
q.ch=null
try{s=q.x
if(s!=null)s.close(b,c)}catch(r){}q.x=null
q.au(B.aA)
q.a3("close",c)},
ai(a,b,c){t.g6.a(c)
J.v5(this.Q.cT(0,b,new A.lx()),c)},
hZ(a,b){var s,r=A.ak(["event",a,"data",b],t.N,t.z),q=this.x
if(q!=null&&this.cx===B.aB)try{q.send(B.J.aa(r,null))
return}catch(s){}B.f.u(this.as,r)},
fT(a){var s,r,q,p,o=this,n="message"
try{s=B.J.aX(0,J.t(a),null)
if(t.P.b(s)){r=J.P(s,"event")
q=J.P(s,"data")
if(J.ac(r,"pong")){o.CW=new A.cY(Date.now(),0,!1)
return}if(typeof r=="string"&&r.length!==0)o.a3(r,q)
else o.a3(n,s)}else o.a3(n,s)}catch(p){o.a3(n,a)}},
bo(a){var s,r,q=this
if(q.cx===B.aA)return
s=q.ch
if(s!=null)s.ag(0)
q.ch=null
q.a3("disconnect",a)
if(q.ax){q.au(B.aA)
return}if(q.at)return
q.at=!0
q.au(B.nx)
s=q.ay
if(s>=5){q.at=!1
q.au(B.aA)
q.ce("reconnect_failed")
return}r=A.l6(0,0,3*B.w.hv(1,s));++s
q.ay=s
q.a3("reconnect_scheduled",A.ak(["attempt",s,"delaySeconds",B.w.a9(r.a,1e6)],t.N,t.S))
A.bO(r,new A.lr(q))},
au(a){if(this.cx===a)return
this.cx=a
this.a3("state_change",a)},
a3(a,b){var s,r,q,p=this.Q.j(0,a)
if(p==null)return
for(s=A.eR(p,!0,t.Z),r=s.length,q=0;q<r;++q)s[q].$1(b)},
ce(a){return this.a3(a,null)},
fI(){var s,r,q,p,o,n,m,l=this
if(l.cx!==B.aB||l.x==null)return
for(r=l.as,q=A.eR(r,!0,t.P),p=q.length,o=0;o<p;++o){s=q[o]
try{n=l.x
n.toString
n.send(B.J.aa(s,null))
B.f.T(r,s)}catch(m){break}}},
hB(){var s=this.ch
if(s!=null)s.ag(0)
this.ch=A.rH(B.im,new A.ls(this))}}
A.lt.prototype={
$1(a){var s=this.a
s.au(B.aB)
s.ay=0
s.CW=new A.cY(Date.now(),0,!1)
s.ce("connect")
s.ce("open")
s.hB()
s.fI()},
$S:4}
A.lu.prototype={
$1(a){this.a.fT(A.tC(a.data))},
$S:4}
A.lv.prototype={
$1(a){var s=this.a
s.a3("error",a)
s.bo(a)},
$S:4}
A.lw.prototype={
$1(a){var s=this.a
s.a3("close",a)
s.bo(a)},
$S:4}
A.lx.prototype={
$0(){return A.d([],t.g_)},
$S:38}
A.lr.prototype={
$0(){var s=0,r=A.bj(t.H),q,p=this,o
var $async$$0=A.bk(function(a,b){if(a===1)return A.bg(b,r)
for(;;)switch(s){case 0:o=p.a
o.at=!1
if(o.ax){s=1
break}s=3
return A.b5(o.aW(),$async$$0)
case 3:case 1:return A.bh(q,r)}})
return A.bi($async$$0,r)},
$S:20}
A.ls.prototype={
$1(a){var s,r,q,p
t.E.a(a)
s=this.a
if(s.cx!==B.aB||s.x==null){a.ag(0)
return}if(s.CW!=null){r=Date.now()
q=s.CW
p=q.a
p=A.l6(0-q.b,r-p,0).a>3e7
r=p}else r=!1
if(r){s.bo("Heartbeat timeout")
return}r=t.z
s.hZ("ping",A.a0(r,r))},
$S:21}
A.cK.prototype={}
A.kD.prototype={
gV(){var s=A.bK(A.z(A.z(v.G.window).localStorage).getItem("auth.token"))
if(s==null||s.length===0)return null
return s},
gak(a){var s=J.P(B.aD.cW("auth.user"),"role")
return s==null?null:J.t(s)}}
A.le.prototype={
hr(){if(this.d)return
this.d=!0
A.pZ(new A.ln(this))},
ha(){var s,r,q,p,o,n=this,m=n.b
if(m==null)return
s=n.a
r=A.rP(s)
q=n.c
p=A.a0(t.N,t.e)
s.textContent=""
A.z(s.appendChild(n.bh(m,"0",q,p)))
n.dY(r,s)
for(s=new A.ah(q,A.Q(q).h("ah<1,2>")).gv(0);s.m();){o=s.d
if(!p.a1(0,o.a))n.bF(o.b)}n.c=p
n.e=!0},
bh(a,b,c,d){var s=this,r=t.A
r.a(c)
r.a(d)
A:{if(a instanceof A.cC){r=A.z(A.z(v.G.document).createTextNode(a.a))
break A}if(a instanceof A.eB){r=s.fz(a.a,b,c,d)
break A}if(a instanceof A.a8){r=s.fw(0,a.a,a.b,a.c,b,c,d)
break A}if(a instanceof A.a_){r=s.dz(a,b,c,d)
break A}if(a instanceof A.dE){r=s.dz(a.a,b,c,d)
break A}r=A.ce(A.U("Unsupported FlintNode type: "+A.pL(a).l(0)))}return r},
fz(a,b,c,d){var s,r,q
t.aw.a(a)
s=t.A
s.a(c)
s.a(d)
r=A.z(A.z(v.G.document).createDocumentFragment())
for(s=b+".",q=0;q<a.length;++q)A.z(r.appendChild(this.bh(a[q],s+q,c,d)))
return r},
fw(a,b,c,d,e,f,g){var s,r,q
t.L.a(c)
t.aw.a(d)
s=t.A
s.a(f)
s.a(g)
r=this.fv(b)
this.f2(r,c)
for(s=e+".",q=0;q<d.length;++q)A.z(r.appendChild(this.bh(d[q],s+q,f,g)))
return r},
fv(a){if(B.n2.H(0,a))return A.z(A.z(v.G.document).createElementNS("http://www.w3.org/2000/svg",a))
return A.z(A.z(v.G.document).createElement(a))},
dz(a,b,c,d){var s,r,q,p
t.dH.a(a)
s=t.A
s.a(c)
s.a(d)
r=c.j(0,b)
s=r!=null
if(s){A.pL(r.a)
A.pL(a)}q=A.z(A.z(v.G.document).createElement("flint-component"))
p=new A.fe(a,q,A.a0(t.N,t.e))
if(s)this.bF(r)
d.i(0,b,p)
a.a=t.M.a(new A.li(this,p))
this.dX(p)
A.pZ(a.gaz())
return q},
hq(a){if(a.d)return
a.d=!0
A.pZ(new A.lm(this,a))},
dX(a){var s,r=this,q=a.c,p=A.a0(t.N,t.e),o=a.b,n=A.rP(o)
o.textContent=""
o.setAttribute("style","display: contents;")
A.z(o.appendChild(r.bh(r.dQ(a.a.E()),"c",q,p)))
r.dY(n,o)
for(o=new A.ah(q,A.Q(q).h("ah<1,2>")).gv(0);o.m();){s=o.d
if(!p.a1(0,s.a))r.bF(s.b)}a.shU(p)
a.e=!0},
dY(a,b){if(a==null)return
a.cZ(0,b)
A.pZ(new A.lk(a,b))
A.bO(B.bi,new A.ll(a,b))},
bF(a){var s
for(s=a.c,s=new A.d2(s,s.r,s.e,A.Q(s).h("d2<2>"));s.m();)this.bF(s.d)
a.a.d2()},
f2(a,b){t.L.a(b).N(0,new A.lf(this,a))},
f0(a,b,c){var s,r
if(b==="value"){s=J.t(c)
if(A.X(a.value)!==s)a.value=s
return!0}if(b==="checked"){r=J.bl(c)
a.checked=r.O(c,!0)
if(r.O(c,!0))a.setAttribute(b,"")
return!0}return!1},
f1(a,b,c){var s
if(b==="muted"){s=J.bl(c)
a.muted=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="controls"){s=J.bl(c)
a.controls=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="autoplay"){s=J.bl(c)
a.autoplay=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="loop"){s=J.bl(c)
a.loop=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}if(b==="playsinline"){s=J.bl(c)
a.playsInline=s.O(c,!0)
if(s.O(c,!0))a.setAttribute(b,"")
return!0}return!1},
hl(a){var s,r,q,p
if(B.b.D(a).length===0)return
s="flint-style-"+B.b.gL(a)
r=v.G
if(A.aV(A.z(r.document).querySelector('style[data-flint-style-id="'+s+'"]'))!=null)return
q=A.aV(A.z(r.document).querySelector("head"))
if(q==null)return
p=A.z(A.z(r.document).createElement("style"))
p.setAttribute("data-flint-style-id",s)
p.textContent=a
A.z(q.appendChild(p))},
f3(a,b){if(typeof b=="string"){a.setAttribute("style",b)
return}if(t.L.b(b))a.setAttribute("style",J.ek(b).aH(0,new A.lg()).ab(0,new A.lh(),t.N).J(0,"; "))},
h6(a,b,c){a.addEventListener(b,A.p4(new A.lj(c)))},
dQ(a){var s
if(a instanceof A.M)return a
if(a instanceof A.a_)return new A.dE(a)
s=a==null?null:J.t(a)
return new A.cC(s==null?"":s)}}
A.ln.prototype={
$0(){var s=this.a
s.d=!1
s.ha()},
$S:0}
A.li.prototype={
$0(){return this.a.hq(this.b)},
$S:0}
A.lm.prototype={
$0(){var s=this.b
s.d=!1
this.a.dX(s)
if(s.e)s.a.bI()},
$S:0}
A.lk.prototype={
$0(){return this.a.cZ(0,this.b)},
$S:0}
A.ll.prototype={
$0(){return this.a.cZ(0,this.b)},
$S:0}
A.lf.prototype={
$2(a,b){var s,r,q=this
A.X(a)
if(b==null||J.ac(b,!1))return
if(a==="_flintStyleCss"){q.a.hl(J.t(b))
return}if(a==="_flintMediaController")return
if(a==="_flintCanvasController")return
if(a==="_flintThreeSceneController")return
if(a==="className"){q.b.className=J.t(b)
return}if(a==="style"){q.a.f3(q.b,b)
return}s=q.a
r=q.b
if(s.f0(r,a,b))return
if(s.f1(r,a,b))return
if(B.b.K(a,"on")&&t.Z.b(b)){s.h6(r,B.b.a5(a,2).toLowerCase(),b)
return}s=J.bl(b)
if(s.O(b,!0)){r.setAttribute(a,"")
return}r.setAttribute(a,s.l(b))},
$S:76}
A.lg.prototype={
$1(a){return t.d.a(a).b!=null},
$S:9}
A.lh.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.Z(a.b)},
$S:10}
A.lj.prototype={
$1(a){this.a.$1(A.z(a))},
$S:13}
A.fe.prototype={
shU(a){this.c=t.A.a(a)}}
A.oe.prototype={
cZ(a,b){var s,r=this.fG(b)
if(r==null)return
s=this.b
if(A.X(r.value)!==s)r.value=s
r.focus()
this.hn(r)
return},
fG(a){var s,r,q,p,o,n=this,m=n.fH(a)
if(m!=null)return m
s=n.c
if(s!=null){r=A.aV(A.z(v.G.document).getElementById(s))
if(r!=null&&A.eb(a.contains(r))&&n.dL(r))return r}q=A.z(a.querySelectorAll(n.a))
for(s=t.m,p=0;p<A.b4(q.length);++p){o=A.aV(q.item(p))
if(s.b(o)&&n.dL(o))return o}return null},
fH(a){var s,r,q,p,o,n,m=null,l=this.f
if(l==null||l.length===0)return m
for(s=l.length,r=a,q=0;q<l.length;l.length===s||(0,A.aJ)(l),++q,r=n){p=l[q]
o=A.z(r.childNodes)
if(p<0||p>=A.b4(o.length))return m
n=A.aV(o.item(p))
if(n==null)return m}s=this.dM(r,!0)
if(s)return r
return m},
dM(a,b){var s,r,q,p=this
if(A.X(a.localName)!==p.a)return!1
s=p.e
if(s!=null&&A.X(a.type)!==s)return!1
s=p.d
r=s==null
if(!r&&A.X(a.name)===s)return!0
s=p.c
q=s==null
if(!q&&A.X(a.id)===s)return!0
return b&&r&&q},
dL(a){return this.dM(a,!1)},
hn(a){var s,r=this.r,q=this.w
if(r==null||q==null)return
try{a.setSelectionRange(r,q)}catch(s){}}}
A.l1.prototype={
d3(a,b,c,d){var s=null
t.v.a(c)
return this.a.b8(0,"GET",this.dS(b),s,c,s,s,s,s,s,d)},
eI(a,b,c){return this.d3(0,b,null,c)},
aj(a,b,c,d){var s=null
t.v.a(c)
return this.a.b8(0,"POST",this.dS(a),b,c,s,s,s,s,s,d)},
iq(a,b,c){return this.aj(a,b,null,c)},
ir(a,b,c){return this.aj(a,null,b,c)},
dS(a){var s=B.b.D(a),r=A.qm(s)
if(r!=null&&r.ges()&&r.gaF(r).length!==0)return s
return this.h4("",s)},
h4(a,b){var s,r=B.b.D(a),q=B.b.D(b)
if(r.length===0){if(q.length===0)s="/"
else s=B.b.K(q,"/")?q:"/"+q
return s}if(q.length===0||q==="/")return B.b.K(r,"/")?r:"/"+r
s=B.b.K(r,"/")?r:"/"+r
return B.b.cY(s,A.c0("/+$",!0,!1),"")+"/"+B.b.cY(q,A.c0("^/+",!0,!1),"")}}
A.a_.prototype={
p(a){var s
t.M.a(a).$0()
s=this.a
if(s!=null)s.$0()},
a4(){},
bI(){},
d2(){}}
A.iw.prototype={}
A.pU.prototype={
$1(a){return B.b.D(A.X(a)).length!==0},
$S:8}
A.pR.prototype={
$1(a){A.bK(a)
return a!=null&&B.b.D(a).length!==0},
$S:32}
A.pS.prototype={
$1(a){A.bK(a)
a.toString
return B.b.D(a)},
$S:33}
A.q0.prototype={
$1(a){t.d.a(a)
return a.b!=null&&a.a!=="_cssText"},
$S:9}
A.q1.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.Z(a.b)},
$S:10}
A.p8.prototype={
$1(a){t.dv.a(a)
return a.a+":"+A.q_(a.b.a7())},
$S:34}
A.p9.prototype={
$1(a){t.ce.a(a)
return a.a.c+":"+A.q_(a.b.a7())},
$S:35}
A.pa.prototype={
$1(a){t.ah.a(a)
return a.a.b+":"+A.q_(a.b.a7())},
$S:36}
A.pb.prototype={
$1(a){t.d.a(a)
return a.b!=null&&a.a!=="_cssText"},
$S:9}
A.pc.prototype={
$1(a){t.d.a(a)
return a.a+": "+A.Z(a.b)+" !important"},
$S:10}
A.mQ.prototype={}
A.h9.prototype={
iu(a){A.z(A.z(v.G.window).location).reload()}}
A.M.prototype={}
A.cC.prototype={}
A.eB.prototype={}
A.a8.prototype={}
A.dE.prototype={}
A.o1.prototype={
W(){return"ToastPlacement."+this.b}}
A.o2.prototype={
ad(a,b){this.dZ(a,"#a7f3d0","#052e22","rgba(52, 211, 153, 0.38)",B.io,b,B.dv)},
P(a,b,c){this.dZ(b,"#fca5a5","#450a0a","rgba(248, 113, 113, 0.42)",B.ir,c,B.dv)},
dZ(a,b,c,d,e,f,g){var s,r,q=this.fj(g),p=v.G,o=A.z(A.z(p.document).createElement("div")),n=A.z(o.style)
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
s=A.z(A.z(p.document).createElement("strong"))
s.textContent=a
n=A.z(s.style)
n.fontSize="13px"
n.fontWeight="800"
n.color=b
A.z(o.appendChild(s))
if(f!=null&&B.b.D(f).length!==0){r=A.z(A.z(p.document).createElement("p"))
r.textContent=f
p=A.z(r.style)
p.margin="0"
p.fontSize="12px"
p.lineHeight="1.5"
p.color="#cbd5e1"
A.z(o.appendChild(r))}A.z(q.appendChild(o))
A.bO(B.bi,new A.o4(o))
A.bO(e,new A.o5(o,q))},
fj(a){var s,r,q="flint-toast-"+a.b,p=v.G,o=A.aV(A.z(p.document).getElementById(q))
if(t.m.b(o))return o
s=A.z(A.z(p.document).createElement("div"))
s.id=q
r=A.z(s.style)
r.position="fixed"
r.zIndex="2147483647"
r.display="grid"
r.gap="10px"
r.pointerEvents="none"
switch(a.a){case 0:r=A.z(s.style)
r.top="20px"
r.right="20px"
break
case 1:r=A.z(s.style)
r.top="20px"
r.left="50%"
r.transform="translateX(-50%)"
break
case 2:r=A.z(s.style)
r.right="20px"
r.bottom="20px"
break
case 3:r=A.z(s.style)
r.left="50%"
r.bottom="20px"
r.transform="translateX(-50%)"
break}p=A.aV(A.z(p.document).body)
if(p!=null)A.z(p.appendChild(s))
return s}}
A.o4.prototype={
$0(){var s=A.z(this.a.style)
s.opacity="1"
s.transform="translateY(0) scale(1)"},
$S:0}
A.o5.prototype={
$0(){var s=this.a,r=A.z(s.style)
r.opacity="0"
r.transform="translateY(-8px) scale(0.96)"
A.bO(B.il,new A.o3(s,this.b))},
$S:0}
A.o3.prototype={
$0(){this.a.remove()
var s=this.b
if(A.b4(s.childElementCount)===0)s.remove()},
$S:0}
A.eC.prototype={}
A.hA.prototype={}
A.pG.prototype={
$2(a,b){var s=0,r=A.bj(t.H),q,p=this,o,n,m,l,k,j
var $async$$2=A.bk(function(c,d){if(c===1)return A.bg(d,r)
for(;;)switch(s){case 0:j=new A.hA()
for(o=p.c,n=0;!1;++n)o[n].$1(j)
o=a.a
m=p.d.a.j(0,o)
if(m==null)l=null
else l=m
s=l==null?3:4
break
case 3:m=A.rR(null,t.bp)
s=5
return A.b5(m,$async$$2)
case 5:l=d
case 4:if(b!==p.a.a){s=1
break}if(l==null)throw A.n(A.an('Flint page "'+o+'" was not registered.'))
k=l.$1(a.b)
if(k==null)k=p.r.$1(o)
o=p.w
o.b=o.dQ(k)
o.hr()
case 1:return A.bh(q,r)}})
return A.bi($async$$2,r)},
$S:37}
A.pF.prototype={
$0(){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h
var $async$$0=A.bk(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:j=n.a
i=++j.a
p=4
s=7
return A.b5(A.x0(n.b),$async$$0)
case 7:m=b
if(!J.ac(i,j.a)){s=1
break}n.c.setAttribute("data-flint-page",B.J.aa(m.a,null))
if(m.b!=null&&m.b.length!==0){j=A.z(v.G.document)
l=m.b
l.toString
j.title=l}s=8
return A.b5(n.d.$2(A.ri(m.a),i),$async$$0)
case 8:p=2
s=6
break
case 4:p=3
h=o.pop()
j=v.G
A.z(A.z(j.window).location).assign(A.X(A.z(A.z(j.window).location).pathname)+A.X(A.z(A.z(j.window).location).search))
s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$$0,r)},
$S:20}
A.pD.prototype={
$1(a){A.z(a)
this.a.$0()},
$S:13}
A.pE.prototype={
$1(a){A.z(a)
this.a.$0()},
$S:13}
A.oZ.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.p2.prototype={
$1(a){var s,r,q,p,o,n,m,l=this,k=l.a
if(A.b4(k.status)<200||A.b4(k.status)>=300){l.b.ah(new A.d4("HTTP "+A.b4(k.status)))
return}try{r=A.X(k.responseText)
q=A.z(A.z(v.G.document).createElement("div"))
q.innerHTML=r
p=A.aV(q.querySelector(l.c))
if(p==null)p=A.aV(q.querySelector("[data-flint-page]"))
o=p==null?null:A.bK(p.getAttribute("data-flint-page"))
if(o==null||B.b.D(o).length===0)A.ce(A.an("Missing data-flint-page payload in fetched page."))
n=B.J.aX(0,o,null)
if(!t.P.b(n))A.ce(A.an("Invalid fetched Flint page payload."))
l.b.aV(0,new A.fi(n,A.xJ(r)))}catch(m){s=A.aQ(m)
l.b.ah(s)}},
$S:4}
A.p3.prototype={
$1(a){this.a.ah(new A.d4("Navigation request failed."))},
$S:4}
A.fi.prototype={}
A.dZ.prototype={
eC(a,b){var s=this,r=s.$ti,q=r.h("1(1)").a(b).$1(s.a)
s.a=r.c.a(q)
s.bR()
return q},
im(a){this.$ti.h("~(1)").a(a)
this.b.u(0,a)
return new A.nE(this,a)},
bR(){var s,r,q
for(s=A.eR(this.b,!0,this.$ti.h("~(1)")),r=s.length,q=0;q<r;++q)s[q].$1(this.a)}}
A.nE.prototype={
$0(){return this.a.b.T(0,this.b)},
$S:0}
A.cG.prototype={
E(){var s=this.c.a
return this.d.$1(s)},
a4(){this.dg()},
bI(){this.dg()},
d2(){var s=this.f
if(s!=null)s.$0()
this.e=this.f=null},
dg(){var s,r=this
if(r.e===r.c)return
s=r.f
if(s!=null)s.$0()
s=r.c
r.e=s
r.f=s.im(new A.nD(r))}}
A.nD.prototype={
$1(a){var s=this.a
s.$ti.c.a(a)
s.p(new A.nC())},
$S(){return this.a.$ti.h("~(1)")}}
A.nC.prototype={
$0(){},
$S:0}
A.ep.prototype={
is(a){var s=A.bK(A.z(A.z(v.G.window).localStorage).getItem(a))
if(s==null||s.length===0)return null
return B.J.aX(0,s,null)},
cW(a){var s=this.is(a)
if(t.P.b(s))return s
if(t.G.b(s))return J.cQ(s,new A.kX(),t.N,t.z)
return B.a5}}
A.kX.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.l3.prototype={
W(){return"CookieSameSite."+this.b}}
A.l4.prototype={
fK(a){var s
switch(a.a){case 0:s="Lax"
break
case 1:s="Strict"
break
case 2:s="None"
break
default:s=null}return s}}
A.hZ.prototype={}
A.iZ.prototype={}
A.e.prototype={
l(a){return this.a}}
A.l.prototype={
a7(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2=this,e3=null,e4=e2.a
e4=e4==null?e3:e4.n()
s=e2.b
s=s==null?e3:s.n()
r=A.G(e2.c,!1)
q=A.G(e2.d,!1)
p=A.G(e2.e,!1)
o=A.G(e2.f,!1)
n=A.G(e2.r,!1)
m=A.G(e2.w,!1)
l=e2.x
l=l==null?e3:l.c
k=A.G(e2.y,!1)
j=e2.z
j=j==null?e3:j.c
i=A.G(e2.Q,!0)
h=e2.as
h=h==null?e3:h.c
g=A.G(e2.at,!0)
f=e2.ax
f=f==null?e3:f.c
e=A.G(e2.ay,!0)
d=A.G(e2.ch,!0)
c=A.G(e2.CW,!0)
b=A.G(e2.cx,!1)
a=A.G(e2.cy,!0)
a0=e2.db
a0=a0==null?e3:a0.c
a1=A.G(e2.dx,!1)
a2=A.G(e2.dy,!1)
a3=A.G(e2.fr,!1)
a4=A.G(e2.fx,!1)
a5=A.G(e2.go,!0)
a6=A.G(e2.id,!0)
a7=A.G(e2.k1,!0)
a8=A.G(e2.k2,!0)
a9=A.G(e2.k3,!0)
b0=e2.k4
b1=A.G(b0,!0)
b2=A.xB(b0)
b0=A.xq(b0)
b3=A.G(e2.ok,!0)
b4=A.G(e2.p1,!0)
b5=A.G(e2.p2,!0)
b6=A.G(e2.p3,!0)
b7=A.G(e2.p4,!0)
b8=A.G(e2.R8,!0)
b9=A.G(e2.RG,!1)
c0=A.G(e2.rx,!0)
c1=A.G(e2.ry,!0)
c2=A.G(e2.to,!1)
c3=A.G(e2.x1,!1)
c4=e2.x2==null?e3:"center"
c5=A.G(e2.xr,!0)
c6=A.G(e2.y1,!0)
c7=A.G(e2.y2,!0)
c8=A.G(e2.cJ,!0)
c9=A.G(e2.ei,!0)
d0=A.G(e2.ej,!0)
d1=A.G(e2.aZ,!0)
d2=A.G(e2.cK,!0)
d3=A.G(e2.b_,!1)
d4=A.G(e2.cN,!0)
d5=A.G(e2.cO,!0)
d6=A.G(e2.b0,!1)
d7=e2.b1
d7=d7==null?e3:d7.n()
d8=e2.cL
d8=d8==null?e3:d8.n()
d9=e2.cM
d9=d9==null?e3:d9.n()
e0=A.G(e2.ek,!0)
e1=e2.b2
e1=e1 instanceof A.at?e1.n():A.G(e1,!1)
return A.xM(A.ak(["padding",e4,"margin",s,"width",r,"height",q,"min-width",p,"max-width",o,"min-height",n,"max-height",m,"display",l,"gap",k,"align-items",j,"justify-items",i,"justify-content",h,"flex",g,"flex-direction",f,"flex-wrap",e,"flex-grow",d,"flex-shrink",c,"flex-basis",b,"grid-template-columns",a,"position",a0,"top",a1,"right",a2,"bottom",a3,"left",a4,"z-index",e2.fy,"overflow",a5,"overflow-x",a6,"overflow-y",a7,"box-sizing",a8,"scroll-behavior",a9,"scrollbar-display",b1,"scrollbar-width",b2,"-ms-overflow-style",b0,"aspect-ratio",b3,"object-fit",b4,"transform",b5,"backdrop-filter",b6,"mask-image",b7,"font-family",b8,"font-size",b9,"font-weight",c0,"line-height",c1,"letter-spacing",c2,"color",c3,"text-align",c4,"text-transform",c5,"text-decoration",c6,"text-overflow",c7,"white-space",c8,"word-break",c9,"overflow-wrap",d0,"cursor",d1,"resize",d2,"background",d3,"background-clip",d4,"-webkit-background-clip",d5,"border-radius",d6,"border",d7,"border-top",d8,"border-right",null,"border-bottom",d9,"border-left",null,"border-collapse",e0,"box-shadow",e1,"opacity",e2.b3,"transition",A.G(e2.b4,!0),"animation",A.G(e2.el,!0),"will-change",A.G(e2.em,!0)],t.N,t.X))},
gef(){var s=this,r=A.a0(t.gY,t.x),q=s.aA
if(q!=null)r.i(0,B.dQ,q)
q=s.aB
if(q!=null)r.i(0,B.dR,q)
q=s.aC
if(q!=null)r.i(0,B.dO,q)
q=s.aD
if(q!=null)r.i(0,B.dP,q)
return r},
gd4(){var s,r=this,q=A.a0(t.N,t.x),p=r.bJ
if(p!=null)q.i(0,":hover",p)
p=r.bK
if(p!=null)q.i(0,":focus-visible",p)
p=r.bL
if(p!=null)q.i(0,":active",p)
p=r.bM
s=p!=null
if(s)q.i(0,":disabled",p)
if(s)q.i(0,'[aria-disabled="true"]',p)
p=r.bN
if(p!=null)q.i(0,'[aria-invalid="true"]',p)
return q},
geA(){var s=A.a0(t.c,t.x),r=this.bO
if(r!=null)s.i(0,B.av,r)
r=this.bP
if(r!=null)s.i(0,B.Y,r)
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
b9=e4.cJ
if(b9==null)b9=e3.cJ
c0=e4.aZ
if(c0==null)c0=e3.aZ
c1=e4.cK
if(c1==null)c1=e3.cK
c2=e4.b_
if(c2==null)c2=e3.b_
c3=e4.b0
if(c3==null)c3=e3.b0
c4=e4.b1
if(c4==null)c4=e3.b1
c5=e4.cL
if(c5==null)c5=e3.cL
c6=e4.cM
if(c6==null)c6=e3.cM
c7=e4.b2
if(c7==null)c7=e3.b2
c8=e4.b3
if(c8==null)c8=e3.b3
c9=e4.cN
if(c9==null)c9=e3.cN
d0=e4.cO
if(d0==null)d0=e3.cO
d1=e4.b4
if(d1==null)d1=e3.b4
d2=e4.bJ
if(d2==null)d2=e3.bJ
d3=e4.bK
if(d3==null)d3=e3.bK
d4=e4.bL
if(d4==null)d4=e3.bL
d5=e4.bM
if(d5==null)d5=e3.bM
d6=e4.bN
if(d6==null)d6=e3.bN
d7=e4.bO
if(d7==null)d7=e3.bO
d8=e4.bP
if(d8==null)d8=e3.bP
d9=e4.aA
if(d9==null)d9=e3.aA
e0=e4.aB
if(e0==null)e0=e3.aB
e1=e4.aC
if(e1==null)e1=e3.aC
e2=e4.aD
if(e2==null)e2=e3.aD
return A.a(d4,i,e3.el,e3.ok,a8,c2,c9,c4,c6,e3.ek,e3.i3,e3.i2,c5,a0,a4,e3.i6,b5,c0,d8,d5,k,e3.i8,g,e3.cx,f,e3.ch,e3.CW,e,e3.i5,d3,b0,b1,b2,j,e3.i4,d,p,d2,d6,h,e3.Q,a1,b4,e1,d7,b3,r,a9,l,n,e0,m,o,a6,c8,a3,e3.ej,e3.id,e3.k1,s,c,c3,c1,a,a5,e3.k4,e3.i7,c7,d9,b6,b7,b8,e3.xr,b,a7,d1,d0,b9,q,e3.em,e3.ei,e2,a2)}}
A.eF.prototype={
l(a){return this.a}}
A.lO.prototype={
l(a){return"bottom"}}
A.kE.prototype={
l(a){return this.a}}
A.bB.prototype={
l(a){return this.a}}
A.hy.prototype={
n(){return B.f.J(A.d([A.G(1,!0),A.G(1,!0),A.G("auto",!1)],t.s)," ")},
l(a){return this.n()}}
A.K.prototype={
n(){var s=A.G(this.a,!1),r=this.b
if(r==null)return s
return s+" "+A.x5(r)}}
A.c6.prototype={
W(){return"Breakpoint."+this.b}}
A.iK.prototype={
gcI(){var s,r,q,p,o,n=A.a0(t.N,t.X)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
q=r.a
q=B.b.D(A.cO(q,".","-"))
p=A.c0("[^a-zA-Z0-9_-]+",!0,!1)
q=A.cO(q,p,"-")
p=A.c0("^-+|-+$",!0,!1)
o=A.cO(q,p,"")
q=o.length===0?"style":o
n.i(0,"--"+q,r.b)}return n}}
A.bV.prototype={
W(){return"FlintThemeMode."+this.b}}
A.b.prototype={
n(){var s="var(--"+A.xw(A.cO(this.a,".","-")),r=this.b
if(r==null)return s+")"
return s+", "+A.G(r,!1)+")"},
l(a){return this.n()}}
A.hB.prototype={
gcD(){var s,r,q=this,p=A.a0(t.N,t.X)
for(s=q.b,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
p.i(0,"color."+r.a,r.b)}for(s=q.c,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
p.i(0,"space."+r.a,r.b)}for(s=q.d,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
p.i(0,"radius."+r.a,r.b)}for(s=q.e,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
p.i(0,"shadow."+r.a,r.b)}for(s=B.df.ga_(B.df),s=s.gv(s);s.m();){r=s.gq(s)
p.i(0,"font."+r.a,r.b)}p.S(0,B.a)
return new A.iK(p)}}
A.lp.prototype={}
A.aR.prototype={
geJ(){var s=this.a
if(typeof s=="number")return A.Z(s)+"%"
return J.t(s)}}
A.cm.prototype={
gbH(a){var s=this.b,r=A.az(s),q=r.h("af<1,j>"),p=new A.af(s,r.h("j(1)").a(new A.nN()),q).d5(0,q.h("ad(ax.E)").a(new A.nO())).J(0,"\n")
if(p.length===0)return""
return"@keyframes "+this.a+" {\n"+p+"\n}"}}
A.nN.prototype={
$1(a){var s
t.fo.a(a)
s=A.qK(a.b.a7())
if(s.length===0)return""
return"  "+a.geJ()+" { "+s+"; }"},
$S:28}
A.nO.prototype={
$1(a){return A.X(a).length!==0},
$S:8}
A.nr.prototype={
gbH(a){var s,r,q,p=this,o=p.b,n=p.c
if(n==null)o=null
else{s=n.c===B.Y?n.b:n.a
o=s}s=A.d([],t.s)
if(o!=null)s.push(p.cb(":root",o.gcD().gcI()))
r=n!=null
if(r)s.push(p.cb(':root[data-theme="light"], [data-theme="light"]',n.a.gcD().gcI()))
if(r)s.push(p.cb(':root[data-theme="dark"], [data-theme="dark"]',n.b.gcD().gcI()))
n=p.r
if(n!=null)s.push(p.aK("*",n))
n=p.e
if(n!=null)s.push(p.aK("html",n))
n=p.f
if(n!=null)s.push(p.aK("body",n))
n=p.w
if(n!=null)s.push(p.aK("a",n))
for(n=B.di.ga_(B.di),n=n.gv(n);n.m();){r=n.gq(n)
s.push(p.aK(r.a,r.b))}for(n=p.y,r=n.length,q=0;q<n.length;n.length===r||(0,A.aJ)(n),++q)s.push(n[q].gbH(0))
return new A.aG(s,t.bB.a(new A.ns()),t.cc).J(0,"\n")},
aK(a,b){var s,r=b.a7(),q=A.qK(t.L.a(r)),p=A.xA(a,r.j(0,"scrollbar-display"))
if(B.b.D(q).length===0)return p
s=A.d([a+" { "+q+"; }"],t.s)
if(p.length!==0)s.push(p)
return B.f.J(s,"\n")},
cb(a,b){var s=A.qK(t.L.a(b))
if(B.b.D(s).length===0)return""
return a+" { "+s+"; }"}}
A.ns.prototype={
$1(a){return B.b.D(A.X(a)).length!==0},
$S:8}
A.pX.prototype={
$1(a){var s
t.d.a(a)
if(a.b!=null){s=a.a
s=s!=="_cssText"&&s!=="scrollbar-display"}else s=!1
return s},
$S:9}
A.pY.prototype={
$1(a){var s
t.d.a(a)
s=a.a
return s+": "+A.G(a.b,B.n1.H(0,s))},
$S:10}
A.i.prototype={
n(){var s,r,q,p,o=this,n=o.a
n=A.G(n==null?0:n,!1)
s=o.b
s=A.G(s==null?0:s,!1)
r=o.c
r=A.G(r==null?0:r,!1)
q=o.d
p=A.d([n,s,r,A.G(q==null?0:q,!1)],t.s)
if(B.f.i1(p,new A.l7(p)))return B.f.gF(p)
n=p[0]
s=p[2]
if(n===s&&p[1]===p[3])return n+" "+p[1]
r=p[1]
if(r===p[3])return n+" "+r+" "+s
return B.f.J(p," ")}}
A.l7.prototype={
$1(a){return A.X(a)===B.f.gF(this.a)},
$S:8}
A.I.prototype={
l(a){return this.a}}
A.aL.prototype={
l(a){return this.a}}
A.aB.prototype={
l(a){return this.a}}
A.m.prototype={
n(){var s=this.c
if(s==="none")return"none"
return A.G(this.a,!1)+" "+s+" "+A.G(this.b,!1)}}
A.at.prototype={
n(){var s,r=this
if(r===B.n3)return"none"
s=A.d([],t.s)
s.push(A.G(0,!1))
s.push(A.G(r.b,!1))
s.push(A.G(r.c,!1))
s.push(A.G(r.d,!1))
s.push(A.G(r.e,!1))
return B.f.J(s," ")}}
A.be.prototype={
l(a){return this.a}}
A.nP.prototype={
$1(a){return t.dl.a(a).a},
$S:40}
A.d5.prototype={
l(a){return this.a}}
A.hC.prototype={
l(a){return this.a}}
A.kW.prototype={
l(a){return"border-box"}}
A.nv.prototype={
l(a){return"smooth"}}
A.hk.prototype={
l(a){return this.a}}
A.ih.prototype={
l(a){return this.a}}
A.o_.prototype={
l(a){return"none"}}
A.kF.prototype={
l(a){return"text"}}
A.l8.prototype={
l(a){return"wrap"}}
A.nq.prototype={
l(a){return"vertical"}}
A.iQ.prototype={
l(a){return this.a}}
A.b3.prototype={
l(a){return this.a}}
A.nQ.prototype={
$1(a){return t.bc.a(a).a},
$S:41}
A.ki.prototype={
l(a){return"normal"}}
A.kj.prototype={
l(a){return"none"}}
A.kl.prototype={
l(a){return"running"}}
A.kk.prototype={
l(a){return A.G("infinite",!0)}}
A.nL.prototype={
l(a){return this.a}}
A.nM.prototype={
$1(a){return J.t(A.ab(a))},
$S:25}
A.od.prototype={
l(a){return"transform"}}
A.cA.prototype={
W(){return"Display."+this.b}}
A.hx.prototype={
W(){return"FlexDirection."+this.b}}
A.cR.prototype={
W(){return"AlignItems."+this.b}}
A.dN.prototype={
W(){return"JustifyContent."+this.b}}
A.dT.prototype={
W(){return"Position."+this.b}}
A.nY.prototype={
W(){return"TextAlign."+this.b}}
A.dt.prototype={}
A.eI.prototype={
a4(){this.ec()},
bI(){this.ec()},
ec(){var s=A.z(v.G.document),r=this.d,q=A.aV(s.getElementById(r))
if(q==null)return
q.innerHTML=this.c},
E(){var s=this,r=A.bd(s.w,t.N,t.X),q=s.d
r.i(0,"id",q)
return new A.k("div",A.f(r,s.f,s.r,B.a,B.a),A.h(null,B.h))}}
A.iv.prototype={}
A.co.prototype={
sd0(a,b){if(this.a===b)return
this.a=b
this.aN()},
aN(){var s=A.aC(this.b,t.M),r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.aJ)(s),++q)s[q].$0()}}
A.ly.prototype={
a0(a){var s=this.b.j(0,a)
s=s==null?null:J.t(s)
return s==null?"":s},
Z(a,b){return this.c.cT(0,b,new A.lA(this,b))},
eK(a,b){var s,r,q
this.b.i(0,a,b)
s=this.c.j(0,a)
if(s!=null){r=s.a
q=b==null?null:J.t(b)
r=r!==(q==null?"":q)}else r=!1
if(r){r=b==null?null:J.t(b)
s.sd0(0,r==null?"":r)
return}this.aN()},
ix(a,b){var s,r,q,p=this,o=t.a
o.a(b)
for(s=B.f.gv(b),r=p.a;s.m();){q=s.gq(0)
p.eK(q,r.j(0,q))}s=A.d(b.slice(0),A.az(b))
o=o.a(s)
if(o.length===0)p.e=B.G
else p.e=p.e.iI(o)
p.aN()},
aN(){var s=A.aC(this.d,t.M),r=s.length,q=0
for(;q<s.length;s.length===r||(0,A.aJ)(s),++q)s[q].$0()}}
A.lA.prototype={
$0(){var s=this.a,r=this.b,q=s.a0(r),p=A.d([],t.r),o=new A.co(q,p)
B.f.u(p,t.M.a(new A.lz(s,r,o)))
return o},
$S:43}
A.lz.prototype={
$0(){var s=this.a
s.b.i(0,this.b,this.c.a)
s.aN()},
$S:0}
A.hE.prototype={}
A.iG.prototype={}
A.nZ.prototype={
$1(a){var s,r
A.ab(a)
s=t.m
r=s.b(a)?A.aV(a.target):null
if(s.b(r))this.a.sd0(0,A.X(r.value))},
$S:1}
A.iH.prototype={}
A.o0.prototype={
$1(a){var s,r
A.ab(a)
s=t.m
r=s.b(a)?A.aV(a.target):null
if(s.b(r))this.a.sd0(0,A.X(r.value))},
$S:1}
A.bW.prototype={
i9(a){var s
if(a.length===0)return B.aV
s=this.a.j(0,a)
if(s==null)s=B.kz
return A.ru(s,t.N)},
iI(a){var s=t.a
s.a(a)
if(a.length===0)return B.G
s=A.bd(this.a,t.N,s)
s.iv(s,new A.lB(a))
return new A.bW(s)},
gb5(){var s,r,q,p,o=t.N
o=A.a0(o,o)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
q=r.b
p=J.ao(q)
if(p.gM(q))o.i(0,r.a,p.gF(q))}return o},
iD(){var s,r,q=A.a0(t.N,t.X)
for(s=this.a,s=s.ga_(s),s=s.gv(s);s.m();){r=s.gq(s)
q.i(0,r.a,r.b)}return q}}
A.lB.prototype={
$2(a,b){A.X(a)
t.a.a(b)
return B.f.H(this.a,a)},
$S:45}
A.mf.prototype={}
A.bC.prototype={}
A.hM.prototype={}
A.mg.prototype={
$1(a){t.fd.a(a)
return new A.a8(a.a,a.b,B.aw)},
$S:46}
A.hH.prototype={}
A.j0.prototype={}
A.hd.prototype={}
A.k.prototype={}
A.hN.prototype={}
A.hX.prototype={}
A.ip.prototype={}
A.e_.prototype={
W(){return"Tone."+this.b}}
A.er.prototype={
W(){return"ComponentSize."+this.b}}
A.du.prototype={
W(){return"ButtonVariant."+this.b}}
A.mh.prototype={
W(){return"InputVariant."+this.b}}
A.lo.prototype={
hD(){var s=this.c
if(this.b==null||s==null||s.length===0)return null
return A.xI(A.bK(A.z(A.z(v.G.window).localStorage).getItem(s)))},
hM(){var s,r
try{s=A.eb(A.z(A.z(v.G.window).matchMedia("(prefers-color-scheme: dark)")).matches)?B.Y:B.av
return s}catch(r){return null}},
df(a){var s,r=A.aV(A.z(v.G.document).documentElement)
if(r!=null)r.setAttribute("data-theme",a.c)
s=this.d
if(s!=null)s.setAttribute("data-theme",a.c)}}
A.ph.prototype={
$1(a){return new A.dH(t.P.a(a))},
$S:47}
A.pi.prototype={
$1(a){return new A.dF(t.P.a(a))},
$S:48}
A.pj.prototype={
$1(a){return new A.e4(t.P.a(a))},
$S:49}
A.pu.prototype={
$1(a){return new A.dv(t.P.a(a))},
$S:50}
A.pv.prototype={
$1(a){return new A.dw(t.P.a(a))},
$S:51}
A.pw.prototype={
$1(a){return new A.dn(t.P.a(a))},
$S:52}
A.px.prototype={
$1(a){return new A.dG(t.P.a(a))},
$S:53}
A.py.prototype={
$1(a){return new A.e0(t.P.a(a))},
$S:82}
A.pz.prototype={
$1(a){return new A.dD(t.P.a(a))},
$S:55}
A.pA.prototype={
$1(a){var s,r
t.P.a(a)
s=new A.d_(a)
r=J.P(a,"contentHtml")
r=r==null?null:J.t(r)
s.d=r
s.e=r==null||r.length===0
return s},
$S:56}
A.pB.prototype={
$1(a){return new A.dp(t.P.a(a))},
$S:57}
A.pk.prototype={
$1(a){return new A.dU(t.P.a(a))},
$S:58}
A.pl.prototype={
$1(a){return new A.cT(t.P.a(a),A.hF(A.ak(["title","","tag","","body",""],t.N,t.X)),B.G)},
$S:81}
A.pm.prototype={
$1(a){return new A.dr(t.P.a(a))},
$S:60}
A.pn.prototype={
$1(a){return new A.dq(t.P.a(a),A.hF(A.ak(["body",""],t.N,t.X)),B.G)},
$S:61}
A.po.prototype={
$1(a){return new A.cU(t.P.a(a),A.hF(A.ak(["title","","tag","","body",""],t.N,t.X)),B.G)},
$S:62}
A.pp.prototype={
$1(a){var s=t.N
return new A.d3(t.P.a(a),A.hF(A.ak(["body",""],s,t.X)),B.G,new A.dZ(null,A.dO(t.aT),t.aN),A.dO(s))},
$S:63}
A.pq.prototype={
$1(a){return new A.dY(t.P.a(a))},
$S:64}
A.pr.prototype={
$1(a){return new A.dX(t.P.a(a))},
$S:65}
A.ps.prototype={
$1(a){return new A.d6(t.P.a(a),A.hF(A.ak(["title","","description","","what_it_does","","built_with","","image_1","","image_2","","image_3","","link_1_label","","link_1_url","","link_2_label","","link_2_url",""],t.N,t.X)),B.G)},
$S:66}
A.pt.prototype={
$1(a){return new A.dA(t.P.a(a))},
$S:67}
A.em.prototype={
E(){var s,r,q,p,o,n,m,l=null,k="color.muted",j=[]
for(s=this.c,r=l,q=0;q<20;++q){p=B.da[q]
o=p.a
n=p.c
if(n!==r){j.push(new A.a8("p",A.f(B.a,l,new A.l(B.cD,B.iz,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,10,700,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.h(n,B.h)))
r=n}m=o===s?new A.l(new A.i(8,12,8,12),l,l,l,l,l,l,l,B.M,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,new A.b("color.primary",l),l,l,l,l,l,l,l,l,l,new A.e("rgba(5, 150, 105, 0.08)"),8,new A.m(1,new A.e("rgba(5, 150, 105, 0.2)"),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.ck,l,l,l,l):new A.l(B.ar,l,l,l,l,l,l,l,B.M,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
j.push(A.Y(p.b,B.h,m,"/fullstack/api/"+o,l,B.i,l))}s=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,2,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,0,l,l,l,l,l,l,B.aQ,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.I("100%"),l,l,l,l)
return new A.k("div",A.f(B.a,l,s.Y(this.d?A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l):A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.O,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,240,l,l,220,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.o,l,l,l,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),B.a,B.a),A.h(l,j))}}
A.pe.prototype={
$1(a){return t.bl.a(a).a===this.a},
$S:68}
A.pf.prototype={
$1(a){return A.X(a).length!==0},
$S:8}
A.pg.prototype={
$1(a){A.X(a)
if(0>=a.length)return A.v(a,0)
return a[0].toUpperCase()+B.b.a5(a,1)},
$S:69}
A.hJ.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,32,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,"1 1 0",q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,0,q,q,B.v,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.I("100%"),q,q,q,q),o=[]
if(this.c){s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.i(48,q,48,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.H("Loading...",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.i(0,0,0,0),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
o.push(new A.k("div",A.f(B.a,q,s,B.a,B.a),A.h(q,[r])))}else{s=this.d
if(s==null)s=""
r=t.N
o.push(A.cD("guide-md markdown-body",s,"guide-content",A.ak(["style",A.ak(["min-width","0","max-width","100%","overflow-wrap","break-word"],r,r)],r,t.X)))}o.push(this.fn())
return new A.k("div",A.f(B.a,q,p,B.a,B.a),A.h(q,o))},
fn(){var s,r,q,p=this,o=null,n="1 1 240px",m="color.line",l="color.panel",k="color.muted",j="color.text",i=p.e,h=i!=null
if(!h||i.length===0){s=p.r
s=s==null||s.length===0}else s=!1
if(s)return A.cv("span",[],A.a0(t.N,t.X))
s=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.d,o,o,o,o,o,o,B.j,o,o,o,o,o,16,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r=[]
if(h&&i.length!==0&&p.f!=null){h=p.f
h.toString
q=A.a(o,o,o,o,o,new A.b(l,o),o,new A.m(1,new A.b(m,o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.d,o,n,o,o,o,o,o,o,o,o,o,o,4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(16,16,16,16),o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r.push(A.Y(o,[A.H("Previous Topic",A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(k,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,11,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),A.H(i,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(j,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,600,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],q,h,o,B.i,o))}else r.push(A.cv("span",[],A.a0(t.N,t.X)))
i=p.r
if(i!=null&&i.length!==0&&p.w!=null){h=p.w
h.toString
q=A.a(o,o,o,o,o,new A.b(l,o),o,new A.m(1,new A.b(m,o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.d,o,n,o,o,o,o,o,o,o,o,o,o,4,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(16,16,16,16),o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
r.push(A.Y(o,[A.H("Next Topic",A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(k,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,11,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),A.H(i,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(j,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,600,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))],q,h,o,B.i,o))}return A.w(r,s)}}
A.hK.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,2,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0,q,q,q,q,q,q,B.aQ,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.I("100%"),q,q,q,q)
p=p.Y(this.d?A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q):A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.O,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,240,q,q,220,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.o,q,q,q,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
s=[]
for(r=0;r<26;++r)s.push(this.hA(B.kJ[r]))
return new A.k("div",A.f(B.a,q,p,B.a,B.a),A.h(q,s))},
hA(a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="/fullstack/guides/",b="color.primary",a="rgba(5, 150, 105, 0.08)",a0="color.muted"
t.g4.a(a1)
s=a1.a
r=a1.b
q=a1.c
if(q==null){p=s===e.c?A.a(d,d,d,d,d,new A.e(a),d,new A.m(1,new A.e("rgba(5, 150, 105, 0.2)"),"solid"),d,d,d,d,d,d,d,d,new A.b(b,d),d,B.ck,d,B.M,d,d,d,d,d,d,d,d,d,d,13,600,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.i(8,12,8,12),d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d):A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b(a0,d),d,d,d,B.M,d,d,d,d,d,d,d,d,d,d,13,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ar,d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
return A.Y(r,B.h,p,c+s,d,B.i,d)}o=e.e.j(0,s)===!0
p=J.bQ(q)
n=p.cE(q,new A.lT(e))
m=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
l=n?600:500
k=n?new A.b(b,d):new A.b(a0,d)
l=A.a(d,B.c,d,d,d,new A.e("rgba(0, 0, 0, 0)"),d,B.dD,d,d,d,d,d,d,d,d,k,d,d,d,B.d,d,d,d,d,d,d,d,d,d,d,13,l,6,d,d,d,d,d,B.d9,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ar,d,8,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.I("100%"),d,d,d,d)
k=A.u(r,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.M,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
j=$.tX()
l=[A.av(d,[k,A.F(j,n?new A.b(b,d):new A.b(a0,d),14)],l,!1,!1,new A.lU(e,o,s),B.a,B.z,B.B,B.C)]
if(o){k=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.i(d,d,d,12),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j=[]
for(p=p.gv(q),i=e.c;p.m();){h=p.gq(p)
g=h.a
f=g===i?new A.l(new A.i(6,12,6,12),d,d,d,d,d,d,d,B.M,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,12,600,d,d,new A.b(b,d),d,d,d,d,d,d,d,d,d,new A.e(a),6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.fR,d,d,d,d):new A.l(B.aU,d,d,d,d,d,d,d,B.M,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,12,d,d,d,new A.b(a0,d),d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j.push(A.Y(h.b,B.h,f,c+g,d,B.i,d))}l.push(new A.k("div",A.f(B.a,d,k,B.a,B.a),A.h(d,j)))}return new A.k("div",A.f(B.a,d,m,B.a,B.a),A.h(d,l))}}
A.lT.prototype={
$1(a){return t.fz.a(a).a===this.a.c},
$S:70}
A.lU.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.lS(s,this.b,this.c))},
$S:1}
A.lS.prototype={
$0(){var s=!this.b
this.a.e.i(0,this.c,s)
return s},
$S:0}
A.ha.prototype={
E(){var s,r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,10,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,760,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),o=A.a(q,B.c,q,q,q,B.b4,q,new A.m(1,B.bQ,"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.k,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.bp,q,999,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.I("fit-content"),q,q,q,q)
o=A.w([A.F($.cf(),B.T,13),A.u("End-to-End Capabilities",B.cb)],o)
s=A.al("Built for Complete Modern Applications",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,32,800,q,q,q,q,q,q,q,q,q,q,q,q,1.15,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
r=A.H("The Flint Ecosystem eliminates fragmentation across your entire technology stack. Every layer speaks the same expressive language.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,15,q,q,q,q,q,q,q,q,q,q,q,q,q,1.65,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
p=A.f(B.a,q,p,B.a,B.a)
r=A.h(q,[o,s,r])
s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,16,q,B.D,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.aB("repeat("+A.O(3,!0)+", "+A.O(B.y,!1)+")"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,B.iO,q,q,q,s,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
o=t.dY
o=A.aC(new A.af(B.ke,t.cv.a(new A.kY(this)),o),o.h("ax.E"))
o=A.w(o,s)
return new A.k("div",A.f(B.a,q,B.aL,B.a,B.a),A.h(q,[new A.k("div",p,r),o]))}}
A.kY.prototype={
$1(a){var s,r=null,q=t.g9.a(a).a,p=q[0],o=q[1],n=q[2]
q=q[3]
s=A.a(r,r,r,r,r,new A.b("color.panel",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,10,r,r,r,A.a(r,r,r,r,r,r,r,new A.m(1,new A.e(q),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.X,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
q=A.u(p,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e(q),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,800,r,r,r,r,r,r,r,r,r,0.5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
o=A.bf(o,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,17,800,r,r,r,r,r,r,r,r,r,r,r,r,r,B.l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
n=A.H(n,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.6,B.l,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
return new A.k("div",A.f(B.a,r,s,B.a,B.a),A.h(r,[q,o,n]))},
$S:71}
A.hl.prototype={
E(){var s,r,q,p,o,n,m,l,k,j=this,i="solid",h=null,g="div",f=A.a(h,h,h,h,h,B.Q,h,new A.m(1,B.eX,i),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.ah,h,h,h,h,h,B.m,B.aj,h,h,h,h,h,h,h,h,B.aq,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.m,h,h,B.am,h),e=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.e,h,h,h,h,h,h,h,h,h,h,h,h,14,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,840,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),d=A.a(h,B.c,h,h,h,B.bZ,h,new A.m(1,B.eY,i),h,h,h,h,h,h,h,h,h,h,h,h,B.k,h,h,h,h,h,h,h,h,h,h,h,h,8,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.ap,h,999,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.nd,h,h,h,h)
d=A.w([A.F($.c4(),B.L,14),A.u("THE DART LANGUAGE RENAISSANCE",B.hr)],d)
s=A.al("How Flint Amplifies the Dart Language",A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.r,h,h,h,h,h,h,h,h,h,h,h,h,h,h,34,900,h,h,h,h,h,h,h,h,h,-0.5,h,h,1.15,B.l,h,h,h,B.cr,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h))
r=A.H("For years, developers loved Dart\u2019s elegance, sound null safety, and fast compilation \u2014 but were confined to client UI. Flint unlocks Dart across the entire computing spectrum: Cloud Backends, WebAssembly SSR, Autonomous AI Agents, and Bare-Metal Robotics.",A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.K,h,h,h,h,h,h,h,h,h,h,h,h,h,h,16,h,h,h,h,h,h,h,h,h,h,h,h,h,1.7,B.l,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h))
e=A.f(B.a,h,e,B.a,B.a)
r=A.h(h,[d,s,r])
s=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
s=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.e,h,h,h,h,h,h,h,h,h,h,h,h,20,h,B.D,h,h,h,h,h,h,h,A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.aB("repeat("+A.O(3,!0)+", "+A.O(B.y,!1)+")"),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,B.j_,h,h,h,s,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
d=j.aw("#38bdf8","Universal Dart","No longer confined to mobile apps. Flint makes Dart a first-class language for High-Concurrency Cloud APIs, Real-Time Web, Edge AI, and Microcontroller Firmware.",$.cP(),"01","Beyond the Client Sandbox","Universal Computing Surface")
q=j.aw("#10b981","Sound Types","Experience absolute type certainty. From PostgreSQL database schema columns, HTTP Context payloads, AI tool parameters, down to GPIO pins \u2014 everything is verified at compile time.",$.ke(),"02","Zero Runtime Type Drift","End-to-End Null Safety")
p=$.bR()
o=j.aw("#f59e0b","JIT & AOT","Instant hot reload during local development, and sub-millisecond cold starts in production via native AOT binaries with zero JRE/Node runtime bloat.",p,"03","Sub-Second JIT + Native AOT","Dual Compilation Prowess")
n=j.aw("#a855f7","Isolate Actors","Dart Isolates provide true shared-nothing memory actor concurrency. Handle high-throughput WebSocket broadcasts and parallel AI agent streaming without mutex bugs.",$.cf(),"04","Actor Isolates & Zero Deadlocks","Lock-Free Concurrency")
m=j.aw("#f43f5e","C99 & ROS 2","Flint Hardware transpiles declarative Dart robotics definitions directly into native C99, C++, and MicroPython for ESP32, nRF52, and ROS 2 robotics nodes.",$.dl(),"05","Direct Hardware & C99 Code Gen","Bare-Metal & C-FFI Transpilation")
l=j.aw("#06b6d4","10x Velocity","Unify your entire engineering organization. Share models, validation rules, utility logic, and client SDKs seamlessly across backend, frontend, and hardware teams.",$.cw(),"06","One Mindset. One Team. One pub.dev","Zero Context Switching")
s=A.f(B.a,h,s,B.a,B.a)
l=A.h(h,[d,q,o,n,m,l])
m=A.a(h,h,h,h,h,B.bL,h,new A.m(1,B.bT,i),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.i0,h,h,h,h,h,h,h,h,B.iJ,h,18,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.m,h,h,h,h)
n=A.a(h,B.c,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.e,h,h,h,h,h,h,h,h,h,h,h,h,24,h,B.D,h,h,h,h,h,h,h,A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
o=A.aw([A.bf("Dart Was Built for Modern Software Engineering",B.fB),A.H("Flint finishes the vision: elevating Dart from an exceptional UI language into the most unified, productive, and versatile programming ecosystem on earth.",B.hW)],B.bd)
q=A.a(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.d,h,h,h,h,h,h,B.j,h,h,h,h,h,12,h,h,h,h,h,B.d9,h,h,h,B.hP,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
d=A.a(h,B.c,h,h,h,B.L,h,h,h,h,h,h,h,h,h,h,B.Q,h,h,h,B.k,h,h,h,h,h,h,h,h,h,h,13,800,8,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.bk,h,10,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
d=A.Y(h,[A.u("Explore Fullstack Dart",B.bc),A.F($.bz(),B.Q,16)],d,"/fullstack",h,B.i,h)
k=A.a(h,B.c,h,h,h,B.bO,h,new A.m(1,B.bN,i),h,h,h,h,h,h,h,h,B.r,h,h,h,B.k,h,h,h,h,h,h,h,h,h,h,13,700,8,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,B.bk,h,10,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h)
n=A.w([o,A.w([d,A.Y(h,[A.u("See Dart on Hardware",B.h0),A.F(p,B.A,15)],k,"/hardware",h,B.i,h)],q)],n)
m=A.f(B.a,h,m,B.a,B.a)
n=A.h(h,[n])
return new A.k(g,A.f(B.a,h,f,B.a,B.a),A.h(h,[new A.k(g,e,r),new A.k(g,s,l),new A.k(g,m,n)]))},
aw(a,b,c,d,e,f,g){var s=null,r="solid",q=A.eh(B.b.t(a,1,3),16),p=A.eh(B.b.t(a,3,5),16),o=A.eh(B.b.t(a,5,7),16),n=A.a(s,s,s,s,s,B.b2,s,new A.m(1,B.U,r),s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,B.u,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.a2,B.Z,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),m=A.a(s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.m,s,s,s,s),l="rgba("+q+", "+p+", "+o,k=A.a(s,B.c,s,s,s,new A.e(l+", 0.15)"),s,new A.m(1,new A.e(l+", 0.35)"),r),s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,42,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,42,s,s,s,s),j=A.F(d,new A.e(a),20)
m=A.aw([A.w([new A.k("div",A.f(B.a,s,k,B.a,B.a),A.h(s,[j])),A.u(b,A.a(s,s,s,s,s,new A.e(l+", 0.1)"),s,new A.m(1,new A.e(l+", 0.25)"),r),s,s,s,s,s,s,s,s,new A.e(a),s,s,s,s,s,s,s,s,s,s,s,s,s,s,10,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.iT,s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],m),A.aw([A.bf(g,B.bb),A.u(f,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e(a),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.i2),A.H(c,B.cs)],B.c7)
return new A.k("div",A.f(B.a,s,n,B.a,B.a),A.h(s,[m]))}}
A.hv.prototype={
E(){var s,r,q,p=null,o=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,B.fL,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.iM,p,20,p,p,p,p,p,new A.b("shadow.sm",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.c,p,p,p,B.b4,p,new A.m(1,B.bQ,"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.bp,p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.I("fit-content"),p,p,p,p)
n=A.w([A.F($.kc(),B.T,13),A.u("Explore The Ecosystem",B.cb)],n)
s=A.al("Choose your starting point in the Flint Ecosystem.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,28,800,p,p,p,p,p,p,p,p,p,p,p,p,1.18,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.H("Explore dedicated documentation guides, architectures, and examples for each of the four official ecosystem technologies.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.65,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,B.j,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,B.aR,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
q=A.w([A.Y("Full-Stack Web",B.h,p,"/fullstack",p,B.i,p),A.Y("Client SDK",B.h,p,"/client",p,B.B,B.H),A.Y("AI Engine",B.h,p,"/ai",p,B.B,B.H),A.Y("Hardware & Robotics",B.h,p,"/hardware",p,B.B,B.H)],q)
o=A.f(B.a,p,o,B.a,B.a)
q=A.h(p,[n,s,r,q])
return new A.k("div",A.f(B.a,p,B.aL,B.a,B.a),A.h(p,[new A.k("div",o,q)]))}}
A.eH.prototype={
a4(){var s=A.y_()
if(s!=null&&s!==this.d)this.p(new A.me(this,s))},
fu(a){A.fT(a)
this.p(new A.m8(this))
A.bO(B.aa,new A.m9(this))},
ft(a){A.fT(a)
this.p(new A.m5(this))
A.bO(B.aa,new A.m6(this))},
fO(){if(this.d==="windows")return'powershell -c "irm https://flintdart.dev/install.ps1 | iex"'
return"curl -fsSL https://flintdart.dev/install.sh | sh"},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="color.line",e="color.bg",d="color.panel",c="color.primary",b=j.fO(),a=$.r4(),a0=j.c
if(!(a0<4))return A.v(a,a0)
s=a[a0]
a0=t.f
a=A.a(i,i,i,i,i,A.aK(A.d([A.aY(B.bu,B.kA),A.aY(B.jw,B.kf),A.aY(B.jx,B.kL),A.aX(155,B.dd)],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
a=A.a(i,i,i,i,i,new A.b(e,i),i,i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,A.aK(A.d([A.aY(B.jy,B.db),A.aY(B.jv,B.dc),A.aY(B.cX,B.kq),A.aX(160,A.d([new A.K(new A.b(e,i),0),new A.K(new A.b(d,i),55),new A.K(new A.b("color.panelStrong",i),100)],a0))],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,a,i,i,i,i,i,i,new A.I("calc(100vh - 68px)"),i,i,i,B.v,i,i,i,i,B.Z,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I("100%"),i,i,i,i)
r=A.G(B.dZ,!0)
q=new A.af(B.kk,t.f7.a(A.qL()),t.en).J(0,", ")
q=A.f(B.dk,i,A.a(i,i,i,i,i,A.aK(A.d([B.f5,B.eA],a0)),i,i,i,i,i,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,0,i,i,i,i,i,new A.eF("linear-gradient(to "+r+", "+q+")"),i,i,i,i,i,i,0.45,i,i,i,i,i,B.az,i,i,0,i,i,i,i,i,i,i,i,i,0,i,i,i,i,i,i,i,i,i),B.a,B.kY)
r=A.h(i,B.h)
p=j.eV(new A.e("rgba(52, 211, 153, 0.15)"),380,"4%","8%",380)
o=j.eU("12%",new A.e("rgba(56, 189, 248, 0.14)"),440,"5%",440)
n=A.a(i,B.c,i,i,i,new A.b(d,i),i,new A.m(1,new A.e("rgba(16, 185, 129, 0.3)"),h),i,i,i,i,i,i,i,i,i,i,B.fS,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,10,i,i,i,A.a(i,i,i,i,i,i,i,new A.m(1,new A.e("rgba(52, 211, 153, 0.6)"),h),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.be("translateY("+A.G(-1,!1)+")"),i,i,i,i,i,i,i,i),i,i,i,i,i,i,B.h8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.cN,i,999,i,i,i,i,i,new A.at(8,24,-8,new A.e("rgba(16, 185, 129, 0.25)")),i,i,i,i,i,i,i,new A.b3("all 180ms ease"),i,i,i,i,i,i,i)
n=A.w([A.Y(i,[new A.k(g,A.f(B.a,i,A.a(i,i,i,i,i,new A.e("#10b981"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,999,i,i,i,i,i,B.n8,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i),B.a,B.a),A.h(i,B.h)),A.u("Flint v 1.3.2 Released",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(c,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,900,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.u("\u2022",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.muted",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.u("Explore Multi-Provider AI & Full-Stack Dart",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.text",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,700,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.F($.qS(),new A.b(c,i),14)],n,"/whats-new",i,B.i,i)],B.ih)
a0=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,36,i,B.D,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,48,i,A.eG(A.d([new A.aL("minmax("+A.O(B.ad,!1)+", "+A.O(new A.I("1.05fr"),!1)+")"),new A.aL("minmax("+A.O(520,!1)+", "+A.O(new A.I("1.15fr"),!1)+")")],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,64,i,A.eG(A.d([new A.aL("minmax("+A.O(B.ad,!1)+", "+A.O(new A.I("1.05fr"),!1)+")"),new A.aL("minmax("+A.O(600,!1)+", "+A.O(new A.I("1.2fr"),!1)+")")],a0)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i)
a0=A.w([j.fW(b),j.fZ(s)],a0)
m=A.a(i,i,i,i,i,new A.e("rgba(15, 23, 42, 0.65)"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("shadow.glow",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
m=A.a(i,i,i,i,new A.d5("blur("+A.G(16,!1)+")"),new A.b(d,i),i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,i,m,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.h9,i,B.cM,i,i,i,i,i,i,i,i,i,i,i,i,B.aQ,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I("100%"),i,i,i,i)
l=A.hI([j.bs($.cw(),"Full-Stack Web (SSR & ORM)","Reactive Flint UI & API gateway",new A.e("#10b981")),j.bs($.cP(),"Universal Client SDK","Offline sync & typed channels",new A.e("#06b6d4")),j.bs($.c4(),"Autonomous AI Mesh","Multi-provider tool calling & LLMs",new A.e("#a855f7")),j.bs($.bR(),"Hardware & Robotics (R&D)","ESP32, RP2040 & IMU telemetry",new A.e("#f97316"))],"repeat(auto-fit, minmax(240px, 1fr))",16)
m=A.f(B.a,i,m,B.a,B.a)
l=A.h(i,[l])
k=A.f(B.a,i,B.hs,B.a,B.a)
l=A.h(i,[n,a0,new A.k(g,m,l)])
return new A.k(g,A.f(B.a,i,a,B.a,B.a),A.h(i,[new A.k(g,q,r),p,o,new A.k(g,k,l)]))},
fW(a){var s,r,q,p,o,n,m,l=null,k=A.a(l,B.c,l,l,l,new A.e("rgba(16, 185, 129, 0.12)"),l,new A.m(1,new A.e("rgba(16, 185, 129, 0.28)"),"solid"),l,l,l,l,l,l,l,l,new A.e("#10b981"),l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,900,8,l,l,l,l,l,l,l,l,0.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.aU,l,999,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),j=A.F($.bR(),new A.e("#10b981"),15),i=A.u("THE UNIFIED DART ECOSYSTEM",l)
k=A.f(B.a,l,k,B.a,B.a)
i=A.h(l,[j,i])
j=A.ba("Flint Ecosystem",A.a(l,l,l,l,l,A.aX(110,B.kH),B.aC,l,l,l,l,l,l,l,l,l,new A.e("transparent"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.na,900,l,l,l,l,l,l,l,l,l,l,l,l,0.98,B.bm,l,l,820,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.aC,l,l,l,l,l,l))
s=A.al("One language across your entire stack: Full-Stack Web, Client SDK, Native AI, and Robotics.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.text",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,23,800,l,l,l,l,l,l,l,l,l,l,l,l,1.28,B.aR,l,l,720,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.H("Build end-to-end full-stack web applications with Flint Dart, universal cross-platform clients with Flint Client, autonomous AI agents with Flint AI, and connected hardware & robotics with Flint Hardware.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,B.aR,l,l,680,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
q=A.a(l,B.c,l,l,new A.d5("blur("+A.G(14,!1)+")"),new A.e("rgba(3, 7, 18, 0.75)"),l,new A.m(1,new A.e("rgba(56, 189, 248, 0.25)"),"solid"),l,l,l,l,l,l,l,l,B.r,l,l,l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,B.n,l,l,l,l,l,l,B.bn,l,l,620,l,l,l,l,l,l,l,l,l,B.aP,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.I("100%"),l,l,l,l)
p=A.w([A.u("$",B.cd),A.u(a,B.hf)],B.cg)
o=this.e
n=o?new A.e("rgba(16, 185, 129, 0.25)"):new A.e("rgba(255, 255, 255, 0.1)")
m=o?new A.e("#34d399"):B.r
m=A.a(l,B.c,l,l,l,n,l,l,l,l,l,l,l,l,l,l,m,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,800,6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.bq,l,6,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b3("all 150ms ease"),l,l,l,l,l,l,l)
n=o?$.fW():$.fX()
n=A.F(n,o?new A.e("#34d399"):B.r,13)
o=A.av(l,[n,A.u(this.e?"Copied":"Copy",l)],m,!1,!1,new A.ma(this,a),B.a,B.N,B.i,B.C)
q=A.f(B.a,l,q,B.a,B.a)
o=A.h(l,[p,o])
p=A.a(l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,15,900,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,46,l,l,l,l,l,l,l,B.cF,l,8,l,l,l,l,l,new A.at(12,32,-10,new A.e("rgba(16, 185, 129, 0.5)")),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
return A.aw([new A.k("div",k,i),j,s,r,new A.k("div",q,o),A.qn([A.Y(l,[A.u("Get Started Free",l),A.F($.bz(),l,18)],p,"/fullstack",l,B.i,l),A.Y(l,[A.F($.fV(),l,16),A.u("Documentation",l)],B.ba,"/guides",l,B.B,B.H),A.Y(l,[A.F($.dl(),l,16),A.u("GitHub",l)],B.ct,"https://github.com/flint-dart",l,B.B,B.C)],B.cz,12)],B.ci)},
fZ(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="solid",h="div",g="rgba(255, 255, 255, 0.03)",f=A.a(j,j,j,j,j,new A.e("#050b0a"),j,new A.m(1,new A.e("rgba(56, 189, 248, 0.25)"),i),j,j,j,j,j,j,j,j,B.r,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.v,j,j,j,j,B.Z,12,j,j,j,j,j,new A.at(28,70,-28,new A.e("rgba(0, 0, 0, 0.8)")),j,j,j,j,j,j,j,j,j,j,new A.I("100%"),j,j,j,2),e=A.a(j,B.c,j,j,j,new A.e(g),j,j,new A.m(1,new A.e("rgba(255, 255, 255, 0.1)"),i),j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.aP,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),d=A.w([new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,B.aZ,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.h(j,B.h)),new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,B.aH,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.h(j,B.h)),new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,B.I,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.h(j,B.h))],B.cA),c=[]
for(s=0;r=$.r4(),s<4;++s){r=r[s]
c.push(k.h0(r.f,k.c===s,r.e,s,r.a))}c=A.w(c,B.c9)
r=k.f
q=r?new A.e("#34d399"):new A.e("#94a3b8")
q=A.a(j,j,j,j,j,new A.e("rgba(255, 255, 255, 0.05)"),j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.cO,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j)
q=A.av(j,[A.F(r?$.fW():$.fX(),j,13)],q,!1,!1,new A.mb(k,a),B.a,B.N,B.i,B.C)
e=A.f(B.a,j,e,B.a,B.a)
q=A.h(j,[d,c,q])
c=A.a(j,B.c,j,j,j,new A.e("rgba(255, 255, 255, 0.02)"),j,j,new A.m(1,new A.e("rgba(255, 255, 255, 0.06)"),i),j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.an,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
d=a.f
p=A.w([A.F(a.e,d,16),A.fa(a.b,B.cc),A.u("\u2022 "+a.c,B.cm)],B.a1)
o=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,d,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,12,800,4,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o=A.Y(j,[A.u("Docs",j),A.F($.qS(),j,14)],o,a.d,j,B.i,j)
c=A.f(B.a,j,c,B.a,B.a)
o=A.h(j,[p,o])
p=k.hL(a.x)
n=A.f(B.a,j,B.i5,B.a,B.a)
p=A.h(j,[p])
m=A.a(j,B.c,j,j,j,new A.e(g),j,j,j,j,j,j,new A.m(1,new A.e("rgba(255, 255, 255, 0.08)"),i),j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.an,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
d=A.w([new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j),B.a,B.a),A.h(j,B.h)),A.u(a.r,B.c8)],B.a1)
l=A.u("Pure Dart \u2022 Zero Glue",B.cx)
m=A.f(B.a,j,m,B.a,B.a)
l=A.h(j,[d,l])
return new A.k(h,A.f(B.a,j,f,B.a,B.a),A.h(j,[new A.k(h,e,q),new A.k(h,c,o),new A.k(h,n,p),new A.k(h,m,l)]))},
h0(a,b,c,d,e){var s=null,r=b?900:600,q=b?B.r:B.K,p=b?new A.e("rgba(255, 255, 255, 0.1)"):B.x
r=A.a(s,B.c,s,s,s,p,s,s,b?new A.m(2,a,"solid"):B.bA,s,s,s,s,s,s,s,q,s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,12,r,6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.ao,s,6,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.av(s,[A.F(c,b?a:B.aI,13),A.u(e,s)],r,!1,!1,new A.md(this,d),B.a,B.N,B.i,B.C)},
hL(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.dX.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.cS(""+q,2)
o=A.f(B.a,h,B.b5,B.a,B.a)
p=A.h(p,B.h)
n=[]
if(!(r<a.length))return A.v(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aJ)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a8("span",A.f(B.a,h,new A.l(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.h(j.a,B.h)))}s.push(A.w([new A.a8("span",o,p),new A.k("div",A.f(B.a,h,B.b8,B.a,B.a),A.h(h,n))],B.bh))}return A.aw(s,B.bf)},
bs(a,b,c,d){var s=null,r=A.a(s,B.c,s,s,s,new A.e("rgba(16, 185, 129, 0.14)"),s,s,s,s,s,s,s,s,s,s,d,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,36,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,36,s,s,s,s),q=A.F(a,s,18)
return A.w([new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(q,B.h)),A.aw([A.fa(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.u(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.fs)],B.cy)},
de(a,b,c,d,e,f,g){var s=null
return new A.k("div",A.f(B.dk,s,A.a(s,s,s,s,new A.d5("blur("+A.G(70,!1)+")"),b,s,s,s,s,s,s,s,a,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,c,s,s,s,s,d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.az,999,s,e,s,s,s,s,s,s,s,s,s,f,s,s,s,s,g,s,s,s,s),B.a,B.a),A.h(s,B.h))},
eV(a,b,c,d,e){return this.de(null,a,b,c,null,d,e)},
eU(a,b,c,d,e){return this.de(a,b,c,null,d,null,e)}}
A.me.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.m8.prototype={
$0(){return this.a.e=!0},
$S:0}
A.m9.prototype={
$0(){var s=this.a
s.p(new A.m7(s))},
$S:0}
A.m7.prototype={
$0(){return this.a.e=!1},
$S:0}
A.m5.prototype={
$0(){return this.a.f=!0},
$S:0}
A.m6.prototype={
$0(){var s=this.a
s.p(new A.m4(s))},
$S:0}
A.m4.prototype={
$0(){return this.a.f=!1},
$S:0}
A.ma.prototype={
$1(a){A.ab(a)
return this.a.fu(this.b)},
$S:1}
A.mb.prototype={
$1(a){A.ab(a)
return this.a.ft(this.b.w)},
$S:1}
A.md.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.mc(s,this.b))},
$S:1}
A.mc.prototype={
$0(){return this.a.c=this.b},
$S:0}
A.jH.prototype={}
A.fd.prototype={}
A.jV.prototype={}
A.ij.prototype={
E(){var s,r,q=this,p=null,o=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,760,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.c,p,p,p,B.bZ,p,new A.m(1,B.bU,"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.bp,p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.I("fit-content"),p,p,p,p)
n=A.w([A.F($.cf(),B.L,13),A.u("Four Ecosystem Pillars",B.fZ)],n)
s=A.al("The Complete Dart Technology Stack",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,32,800,p,p,p,p,p,p,p,p,p,p,p,p,1.15,new A.i(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.H("From server routes and browser UI to cross-platform client SDKs, AI agent mesh, and hardware robotics \u2014 everything runs in Dart.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.65,new A.i(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
o=A.f(B.a,p,o,B.a,B.a)
r=A.h(p,[n,s,r])
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,16,p,B.D,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.aB("repeat("+A.O(4,!0)+", "+A.O(B.y,!1)+")"),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,new A.i(32,p,0,p),p,p,p,s,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
s=A.w([q.br("#34d399","Server HTTP routes, SSR, declarative Web UI, Row-Level Security database API gateway, and migrations.",$.cw(),"/fullstack","Explore Fullstack","Full-Stack Web Framework","Flint Dart"),q.br("#38bdf8","Cross-platform HTTP & WebSocket client with memory/disk caching, offline sync, and real-time DB channels.",$.cP(),"/client","Explore Client","Universal Client SDK","Flint Client"),q.br("#a78bfa","Multi-provider agent mesh, streaming chat, embeddings, function calling, audio transcription, and persistent memory.",$.c4(),"/ai","Explore AI Engine","Autonomous AI Engine","Flint AI"),q.br("#f97316","Robotics state machines, HC-SR04 sonar, MPU6050 IMU, motor drivers, and Wokwi virtual simulator bundles.",$.bR(),"/hardware","Explore Hardware","Robotics & IoT SDK","Flint Hardware")],s)
return new A.k("div",A.f(B.a,p,B.aL,B.a,B.a),A.h(p,[new A.k("div",o,r),s]))},
br(a,b,c,d,e,f,g){var s,r,q,p=null,o="solid",n=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),o),p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,B.u,p,p,p,p,p,p,p,p,16,p,p,p,A.a(p,p,p,p,p,p,p,new A.m(1,new A.e(a),o),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,B.n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(20,20,20,20),p,16,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),m=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.a(p,B.c,p,p,p,new A.e("rgba(15, 23, 42, 0.6)"),p,new A.m(1,new A.e(a),o),p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,40,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,40,p,p,p,p),k=A.F(c,new A.e(a),20)
l=A.f(B.a,p,l,B.a,B.a)
k=A.h(p,[k])
s=A.bf(g,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,18,800,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.u(f,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e(a),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,700,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.H(b,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,13,p,p,p,p,p,p,p,p,p,p,p,p,p,1.55,new A.i(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
m=A.f(B.a,p,m,B.a,B.a)
q=A.h(p,[new A.k("div",l,k),s,r,q])
r=A.Y(e,B.h,A.a(p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.e(a),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,13,800,p,p,p,p,B.i9,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),d,p,B.i,p)
return new A.k("div",A.f(B.a,p,n,B.a,B.a),A.h(p,[new A.k("div",m,q),r]))}}
A.iR.prototype={
E(){var s,r,q,p,o=this,n=null,m="rgba(15, 23, 42, 0.72)",l=t.f
l=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(8, 47, 73, 0.52)"),0),new A.K(new A.e(m),46),new A.K(new A.e("rgba(20, 83, 45, 0.24)"),100)],l)),new A.e(m)],l)),n,new A.m(1,new A.e("rgba(56, 189, 248, 0.18)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,20,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.X,n,16,n,n,n,n,n,new A.b("shadow.sm",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,B.dx,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,18,n,n,n,n,n,B.n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,280,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.u("Unified Dart Power",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,B.M,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.al("Four official pillars engineered to work together.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,24,800,n,n,n,n,n,n,n,n,n,n,n,n,1.14,B.l,n,n,560,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r=A.f(B.a,n,r,B.a,B.a)
p=A.h(n,[q,p])
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.w([new A.k("div",r,p),A.w([o.cA("4 Pillars","Web, Client, AI, Robotics"),o.cA("0 Context Switch","pure Dart across all layers"),o.cA("100% Type-Safe","shared schemas and models")],q)],s)
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,14,n,n,n,n,n,B.q,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.w([o.bw($.cf(),"Full-Stack Web","High-performance backend routes, SSR & Web UI.",B.fC,"/fullstack"),o.bw($.cP(),"Universal Client","Cross-platform caching, offline sync & channels.",B.hk,"/client"),o.bw($.c4(),"Autonomous AI","Agent workflows, tool execution & embeddings.",B.hx,"/ai"),o.bw($.bR(),"Robotics & Hardware","Sensors, motor telemetry & virtual simulation.",B.fT,"/hardware")],q)
l=A.f(B.a,n,l,B.a,B.a)
q=A.h(n,[s,q])
return new A.k("div",A.f(B.a,n,B.i_,B.a,B.a),A.h(n,[new A.k("div",l,q)]))},
bw(a,b,c,d,e){var s=null,r="solid",q="color.line",p="color.text",o=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b(q,s),r),s,s,s,s,s,s,s,s,s,s,B.i7,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,10,s,s,s,A.a(s,s,s,s,s,s,s,new A.m(1,new A.b("color.primary",s),r),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,B.h1,s,s,s,s,s,s,s,240,s,s,s,s,s,s,B.aQ,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),n=A.a(s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,B.n,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),m=A.a(s,B.c,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b(q,s),r),s,s,s,s,s,s,s,s,s,s,B.hE,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,34,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,34,s,s,s,s),l=A.F(a,new A.b(p,s),16)
return A.Y(s,[A.w([new A.k("div",A.f(B.a,s,m,B.a,B.a),A.h(s,[l])),new A.k("div",A.f(B.a,s,d,B.a,B.a),A.h(s,B.h))],n),A.bf(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b(p,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,14,800,s,s,s,s,s,s,s,s,s,s,s,s,s,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.H(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,1.5,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],o,e,s,B.i,s)},
cA(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,B.fH,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,2,s,s,s,s,s,s,s,s,s,s,B.hj,s,s,s,s,s,s,s,130,s,s,s,s,s,s,B.bj,s,8,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p]))}}
A.j_.prototype={
E(){var s,r=this,q=null,p="div",o=A.a(q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,36,q,B.D,q,q,q,q,q,q,q,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,48,q,A.eG(A.d([new A.aL("minmax("+A.O(420,!1)+", "+A.O(B.y,!1)+")"),new A.aL("minmax("+A.O(B.ad,!1)+", "+A.O(new A.I("0.9fr"),!1)+")")],t.f)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.ab,q,18,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),m=r.bl("#f97316","HC-SR04 sonar & IMU sensors capture real-time telemetry.",$.bR(),"1","Edge Hardware & Sensors"),l=r.ck(),k=r.bl("#a78bfa","Multimodal agents analyze telemetry & invoke decision tools.",$.c4(),"2","Autonomous AI Engine"),j=r.ck(),i=r.bl("#34d399","Flint Dart enforces Row-Level Security & persists event models.",$.cw(),"3","Full-Stack Server & DB Gateway"),h=r.ck(),g=r.bl("#38bdf8","Clients stream live updates over real-time reactive signals.",$.cP(),"4","Universal Client & Web UI")
n=A.f(B.a,q,n,B.a,B.a)
g=A.h(q,[m,l,k,j,i,h,g])
h=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,14,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,300,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
i=A.a(q,B.c,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
i=A.w([A.F($.u4(),B.L,16),A.u("Cross-Stack Synergy",B.hJ)],i)
j=A.al("Four Pillars. One Seamless Workflow.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,32,800,q,q,q,q,q,q,q,q,q,q,q,q,1.15,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
k=A.H("Data moves effortlessly from embedded hardware sensors into autonomous AI workflows, through secure backend database gateways, and up to real-time client dashboards \u2014 without converting data formats or switching languages.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,15,q,q,q,q,q,q,q,q,q,q,q,q,q,1.65,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
l=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,q,q,q,B.j,q,q,q,q,q,12,q,q,q,q,q,q,q,q,q,q,q,q,B.cG,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.u("Full-Stack Web",q)
s=$.bz()
l=A.w([A.Y(q,[m,A.F(s,q,16)],q,"/fullstack",q,B.i,q),A.Y(q,[A.u("Robotics Guide",q),A.F(s,q,16)],q,"/hardware",q,B.B,B.H)],l)
h=A.f(B.a,q,h,B.a,B.a)
l=A.h(q,[i,j,k,l])
o=A.f(B.a,q,o,B.a,B.a)
l=A.h(q,[new A.k(p,n,g),new A.k(p,h,l)])
return new A.k(p,A.f(B.a,q,B.aL,B.a,B.a),A.h(q,[new A.k(p,o,l)]))},
bl(a,b,c,d,e){var s,r,q,p=null,o=A.a(p,B.E,p,p,p,new A.b("color.panelStrong",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.bl,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),n=A.a(p,B.c,p,p,p,new A.e("rgba(15, 23, 42, 0.7)"),p,new A.m(1,new A.e(a),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,36,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,36,p,p,p,p),m=A.F(c,new A.e(a),18)
n=A.f(B.a,p,n,B.a,B.a)
m=A.h(p,[m])
s=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,3,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.bf(e,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,800,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
q=A.H(b,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,1.45,B.l,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
s=A.f(B.a,p,s,B.a,B.a)
q=A.h(p,[r,q])
return new A.k("div",A.f(B.a,p,o,B.a,B.a),A.h(p,[new A.k("div",n,m),new A.k("div",s,q)]))},
ck(){var s=null,r=A.a(s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.iL,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.F($.tU(),new A.b("color.muted",s),16)
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.dn.prototype={
gdc(){var s=J.P(this.c,"contentHtml")
s=s==null?null:J.t(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="#install-and-setup",e="100%",d="color.line",c="color.panel",b="color.text",a="color.muted",a0="color.primary",a1=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,1040,B.cv,i,i,i,i,i,i,i,i,B.cK,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(e),i,i,i,i),a2=t.f
a2=A.a(i,i,i,i,i,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(125, 211, 252, 0.16)"),0),new A.K(new A.e("rgba(52, 211, 153, 0.13)"),50),new A.K(new A.b(c,i),100)],a2)),new A.b(c,i)],a2)),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a2,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,24,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.w([j.dd("Flint AI"),j.dd("Agents & tools")],q)
p=A.ba("Build AI agents inside Flint Dart.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.H("Flint AI adds providers, agents, tools, workflows, streaming chat, memory, persistence, and production tool policies to real Flint applications.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.f(B.a,i,r,B.a,B.a)
o=A.h(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,300,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(e),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.R,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.w([A.F($.c4(),B.a9,16),A.u("Runtime layers",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.accent",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.bl,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.u("app.ai.useChatProvidersFromEnv()",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
k=A.u("ctx.ai.run(agent, input: request)",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.f(B.a,i,m,B.a,B.a)
k=A.h(i,[l,k])
l=A.H("Use AI from controllers, API routes, dashboards, queues, and internal automation.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.f(B.a,i,q,B.a,B.a)
l=A.h(i,[n,new A.k(g,m,k),l])
s=A.w([new A.k(g,r,o),new A.k(g,A.f(B.a,i,p,B.a,B.a),A.h(i,[new A.k(g,q,l)]))],s)
l=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.w([j.bZ("Setup",f),j.bZ("Streaming","#streaming-chat"),j.bZ("Security","#production-tool-security")],l)
a2=A.f(B.a,i,a2,B.a,B.a)
l=A.h(i,[s,l])
s=A.O(240,!1)
q=A.O(B.y,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.D,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.aB("repeat("+A.O("auto-fit",!0)+", "+A.O(new A.aL("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.ba($.dl(),"Provider setup","Configure OpenAI, Gemini, Anthropic, or custom providers from environment variables.",B.a9)
p=j.ba($.q2(),"Streaming chat","Send partial text chunks to chat UIs while preserving a final completion event.",B.a7)
o=j.ba($.qQ(),"Memory and runs","Persist thread messages, run events, artifacts, and trace history through repositories.",B.W)
r=j.ba($.qP(),"Tool policies","Gate destructive tools with roles, capabilities, production rules, and explicit policy checks.",B.c_)
q=A.f(B.a,i,q,B.a,B.a)
r=A.h(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(d,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.at,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.v,i,i,i,B.R,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(e),i,i,i,i)
p=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,12,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.al("AI documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.H("Providers, agents, tools, workflows, streaming, persistence, and production safety.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.f(B.a,i,s,B.a,B.a)
m=A.h(i,[k,m])
k=A.a(i,B.c,i,i,i,new A.e("rgba(52, 211, 153, 0.1)"),i,new A.m(1,new A.e("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.w([new A.k(g,s,m),A.Y(i,[A.u("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.F($.bz(),new A.b(a0,i),14)],k,f,i,B.i,i)],p)]
if(j.gdc().length===0)p.push(A.H("The Flint AI guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else p.push(A.cD("api-md markdown-body",j.gdc(),"ai-content",B.bv))
s=A.f(B.a,i,o,B.a,B.a)
p=A.h(i,p)
a1=A.f(B.a,i,a1,B.a,B.a)
p=A.h(i,[new A.k(g,a2,l),new A.k(g,q,r),new A.k(g,s,p)])
return new A.aD(j.c,new A.k(g,A.f(B.a,i,B.b6,B.a,B.a),A.h(i,[new A.k(g,a1,p)])))},
ba(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.R,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.F(a,d,20),p=A.bf(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.H(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p,o]))},
bZ(a,b){var s=null
return A.Y(a,B.h,A.a(s,B.c,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.bs,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,s,B.i,s)},
dd(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.al,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.I("max-content"),s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.dp.prototype={
gd8(){var s=J.P(this.c,"initialSection")
s=s==null?null:J.t(s)
return s==null?"flint-class":s},
gdw(){var s=J.P(this.c,"contentHtml")
s=s==null?null:J.t(s)
return s==null?"":s},
gaP(){var s=J.P(this.c,"previousApiTitle")
return s==null?null:J.t(s)},
gdU(){var s=J.P(this.c,"previousApiUrl")
return s==null?null:J.t(s)},
gaM(){var s=J.P(this.c,"nextApiTitle")
return s==null?null:J.t(s)},
gdP(){var s=J.P(this.c,"nextApiUrl")
return s==null?null:J.t(s)},
E(){var s=this,r=null,q=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.i(r,B.o,r,B.o),r,r,1152,r,r,r,r,r,r,r,r,r,new A.i(48,16,48,16),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.I("100%"),r,r,r,r),p=A.a(r,B.E,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.d,r,r,r,B.u,r,r,r,r,r,r,r,r,20,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.a3,r,r,r,r,r,r,r,r,32,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),o=s.gd8(),n=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,28,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,"1 1 0",r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),r,0,r,r,B.v,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.I("100%"),r,r,r,r),m=A.a(r,r,r,r,r,r,r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.i(r,r,8,r),r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),l=A.H("API Reference",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,800,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.i(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),k=A.ba(A.xO(s.gd8()),A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,34,r,r,r,r,r,r,r,r,r,r,r,r,r,1.12,new A.i(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),j=A.H("Focused reference for Flint Dart and Flint UI APIs, with copyable examples and practical notes.",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,r,r,r,r,r,r,r,r,r,r,r,r,r,1.7,new A.i(0,0,0,0),r,r,720,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
m=A.f(B.a,r,m,B.a,B.a)
j=A.h(r,[l,k,j])
k=s.fm(0)
l=s.he()
p=A.w([new A.em(o,!1),new A.k("div",A.f(B.a,r,n,B.a,B.a),A.h(r,[new A.k("div",m,j),k,l]))],p)
return new A.aD(s.c,new A.k("div",A.f(B.a,r,q,B.a,B.a),A.h(r,[p])))},
fm(a){var s,r,q=null
if(this.gdw().length===0){s=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.i(48,q,48,q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.H("This API page is being written.",A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.i(0,0,0,0),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))
return new A.k("div",A.f(B.a,q,s,B.a,B.a),A.h(q,[r]))}s=t.N
return A.cD("api-md markdown-body",this.gdw(),"api-content",A.ak(["style",A.ak(["min-width","0","max-width","100%","overflow-wrap","break-word"],s,s)],s,t.X))},
he(){var s,r,q,p,o,n,m=this,l=null,k="1 1 240px",j="color.line",i="color.panel",h="color.muted",g="color.text"
if(m.gaP()==null||m.gaP().length===0)s=m.gaM()==null||m.gaM().length===0
else s=!1
if(s)return A.cv("span",[],A.a0(t.N,t.X))
s=A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,l,l,l,l,l,B.j,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=[]
if(m.gaP()!=null&&m.gaP().length!==0&&m.gdU()!=null){q=m.gdU()
q.toString
p=A.a(l,l,l,l,l,new A.b(i,l),l,new A.m(1,new A.b(j,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,k,l,l,l,l,l,l,l,l,l,l,4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(16,16,16,16),l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=A.H("Previous API",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,11,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
n=m.gaP()
n.toString
r.push(A.Y(l,[o,A.H(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(g,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],p,q,l,B.i,l))}else r.push(A.cv("span",[],A.a0(t.N,t.X)))
if(m.gaM()!=null&&m.gaM().length!==0&&m.gdP()!=null){q=m.gdP()
q.toString
p=A.a(l,l,l,l,l,new A.b(i,l),l,new A.m(1,new A.b(j,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,k,l,l,l,l,l,l,l,l,l,l,4,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(16,16,16,16),l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=A.H("Next API",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,11,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
n=m.gaM()
n.toString
r.push(A.Y(l,[o,A.H(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(g,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,600,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],p,q,l,B.i,l))}return A.w(r,s)}}
A.cT.prototype={
gdi(){return J.ac(J.P(this.c,"canAnswer"),!0)||A.dP(["admin","contributor","dev"],t.N).H(0,B.t.gak(0))},
E(){var s,r,q,p,o,n,m,l=this,k=null,j="solid",i="div",h="color.line",g="color.panel",f=l.c,e=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,24,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(k,B.o,k,B.o),k,k,960,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(48,16,48,16),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,B.v,k,k,k,new A.i(34,16,34,16),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.I("100%"),k,k,k,k),d=A.a(k,k,k,k,k,new A.b(g,k),k,new A.m(1,new A.b(h,k),j),k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(34,34,34,34),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,new A.i(24,24,24,24),k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),c=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.d,k,k,k,k,k,k,B.j,k,k,k,k,k,10,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
c=A.w([l.c0("Community"),l.c0("Ask clearly")],c)
s=A.ba("Ask a Flint question",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,31,750,k,k,k,k,k,k,k,k,k,k,k,k,1.12,new A.i(0,0,0,0),k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,38,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=A.H("Share the route, model, component, error message, or behavior you are working with. Good questions become useful docs for the whole community.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,15,k,k,k,k,k,k,k,k,k,k,k,k,k,1.7,new A.i(0,0,0,0),k,k,760,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=[new A.k(i,A.f(B.a,k,d,B.a,B.a),A.h(k,[c,s,r]))]
d=J.ao(f)
if(!(J.ac(d.j(f,"isAuthenticated"),!0)||B.t.gV()!=null)){d=d.j(f,"authMode")
r.push(A.h7("/questions","Back to Questions","You can read questions without an account. Sign in or create a developer account to create a new thread.",(d==null?k:J.t(d))==="register","Sign in to ask"))}else{d=A.a(k,B.E,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.d,k,k,k,B.u,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.a3,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
c=A.a(k,k,k,k,k,new A.b(g,k),k,new A.m(1,new A.b(h,k),j),k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.ae,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(24,24,24,24),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,0,k,k,k,k,k,k,new A.i(18,18,18,18),k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.I("100%"),k,k,k,k)
s=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=[]
p=l.f
if(p!=null){o=A.a(k,k,k,k,k,new A.e("rgba(248, 113, 113, 0.08)"),k,new A.m(1,new A.e("rgba(248, 113, 113, 0.35)"),j),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(12,12,12,12),k,10,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
p=A.H(p,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.e("#fca5a5"),k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
q.push(new A.k(i,A.f(B.a,k,o,B.a,B.a),A.h(k,[p])))}p=l.d
o=p.Z(0,"title")
n=l.e
m=$.uG()
q.push(A.c2(o,n,m,"Title","title","Example: How do I define a User model?",!0,"text"))
q.push(A.c2(p.Z(0,"tag"),l.e,m,"Topic","tag","Model, Flint UI, Routing, Auth...",!0,"text"))
q.push(A.f8(p.Z(0,"body"),l.e,"Question","body","Describe what you expected, what happened, and include any useful code or error output.",!0,10,$.uV()))
p=l.r
m=l.gdi()
n=A.F($.kd(),k,15)
q.push(A.av(k,[n,A.u(l.gdi()?"Post Question":"Developer access required",k)],k,!m,p,k,B.ax,B.z,B.i,B.a6))
s=A.eE(q,s,l.gf5())
r.push(A.w([new A.k(i,A.f(B.a,k,c,B.a,B.a),A.h(k,[s])),l.hz()],d))}return new A.aD(f,new A.k(i,A.f(B.a,k,e,B.a,B.a),A.h(k,r)))},
bb(a){return this.hE(A.ab(a))},
hE(a9){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
var $async$bb=A.bk(function(b0,b1){if(b0===1){o.push(b1)
s=p}for(;;)switch(s){case 0:if(t.m.b(a9))a9.preventDefault()
if(n.r){s=1
break}n.p(new A.kn(n))
a=n.d
a0=B.b.D(a.a0("title"))
a1=B.b.D(a.a0("tag"))
a2=B.b.D(a.a0("body"))
a3=t.N
a4=A.a0(a3,t.a)
a5=a0.length
if(a5===0)a4.i(0,"title",A.d(["The title field is required."],t.s))
else if(a5<6)a4.i(0,"title",A.d(["The title must be at least 6 characters."],t.s))
if(a1.length===0)a4.i(0,"tag",A.d(["The tag field is required."],t.s))
a5=a2.length
if(a5===0)a4.i(0,"body",A.d(["The body field is required."],t.s))
else if(a5<20)a4.i(0,"body",A.d(["The body must be at least 20 characters."],t.s))
a6=new A.bW(a4)
if(a4.gM(0)){f=n.c1(a6,"Please check your question.")
n.p(new A.ko(n,a6))
B.p.P(0,"Question not posted",f)
s=1
break}p=4
m=B.t.gV()
l=A.a0(a3,a3)
J.au(l,"Accept","application/json")
J.au(l,"X-Requested-With","FlintClient")
if(m!=null)J.au(l,"Authorization","Bearer "+m)
k=l
s=7
return A.b5($.cg().aj("/questions/ask",A.hf(a.b,a3,t.X),k,t.P),$async$bb)
case 7:j=b1
i=j.b
if(j.f&&i!=null){l=J.P(i,"redirectTo")
h=l==null?null:J.t(l)
B.p.ad("Question posted","Opening the thread...")
l=h!=null&&h.length!==0
a=v.G
if(l)A.z(A.z(a.window).location).assign(h)
else A.z(A.z(a.window).location).assign("/questions")
s=1
break}g=A.ch(i)
l=i
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not post question."
f=n.c1(g,l)
n.p(new A.kp(n,g,f))
B.p.P(0,"Question not posted",f)
p=2
s=6
break
case 4:p=3
a8=o.pop()
l=A.aQ(a8)
if(l instanceof A.bU){e=l
d=n.f4(e)
c=A.ch(d)
l=d
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not post question."
b=n.c1(c,l)
n.p(new A.kq(n,c,b))
B.p.P(0,"Question not posted",b)}else{n.p(new A.kr(n))
B.p.P(0,"Question not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bb,r)},
c1(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb5()
s=A.Q(r).h("aS<2>")
return A.iE(new A.aS(r,s),3,s.h("o.E")).J(0," ")},
f4(a){var s=a.d
if(t.P.b(s))return s
if(t.G.b(s))return J.cQ(s,new A.km(),t.N,t.z)
return null},
hz(){var s,r=null,q=A.a(r,r,r,r,r,new A.b("color.panelStrong",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.I("min(280px, 100%)"),r,r,r,r),r,r,r,r,r,r,r,r,new A.i(18,18,18,18),r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.I("100%"),r,r,r,r),p=A.al("Good topics",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,16,700,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.i(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),o=A.H("Use a short topic so other developers can find your question later.",A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.6,new A.i(0,0,0,0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),n=A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.d,r,r,r,r,r,r,B.j,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),m=[]
for(s=0;s<8;++s)m.push(this.c0(B.kt[s]))
n=A.w(m,n)
return new A.k("div",A.f(B.a,r,q,B.a,B.a),A.h(r,[p,o,n]))},
c0(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.kn.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.G
s.f=null},
$S:0}
A.ko.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.kp.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kq.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kr.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post question. Please try again."},
$S:0}
A.km.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.dq.prototype={
gar(){var s=t.fF.a(J.P(this.c,"post"))
s=s==null?null:J.b_(s,t.N,t.z)
return s==null?B.a5:s},
gfd(){var s,r,q=J.P(this.c,"comments")
if(t.j.b(q)){s=J.cx(q,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.kI()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V},
E(){var s,r,q,p,o,n,m,l,k=this,j=null,i="max-content",h="Back to Blog",g="div",f="color.muted",e=k.c,d=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(j,B.o,j,B.o),j,j,960,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(48,16,48,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,B.v,j,j,j,new A.i(34,16,34,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.I("100%"),j,j,j,j),c=k.gar().j(0,"title"),b=c==null?j:J.t(c)
if(b==null)b="Blog post"
c=k.gar().j(0,"tag")
s=c==null?j:J.t(c)
if(s==null)s="Blog"
c=k.gar().j(0,"date")
r=c==null?j:J.t(c)
if(r==null)r=""
c=k.gar().j(0,"author")
q=c==null?j:J.t(c)
if(q==null)q="Flint Team"
c=k.gar().j(0,"excerpt")
p=c==null?j:J.t(c)
if(p==null)p=""
c=t.f
c=A.a(j,j,j,j,j,A.aK(A.d([A.aX(145,A.d([new A.K(new A.e("rgba(16, 185, 129, 0.12)"),0),new A.K(new A.e("rgba(14, 165, 233, 0.08)"),45),new A.K(new A.e("rgba(15, 23, 42, 0.82)"),100)],c)),B.aF],c)),j,B.bC,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(32,32,32,32),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,0,j,j,B.v,j,j,j,B.X,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.I(i),j,j,j,j)
o=A.Y(j,[A.F($.q3(),j,15),A.u(h,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,700,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],o,"/blog",j,B.i,j)
n=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,B.j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
m=A.a(j,j,j,j,j,new A.e("rgba(5, 150, 105, 0.08)"),j,new A.m(1,new A.e("rgba(5, 150, 105, 0.28)"),"solid"),j,j,j,j,j,j,j,j,j,j,B.al,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(5,10,5,10),j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.I(i),j,j,j,j)
l=A.u(s,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.primary",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,11,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
l=[new A.k(g,A.f(B.a,j,m,B.a,B.a),A.h(j,[l]))]
if(r.length!==0){m=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
l.push(A.w([A.F($.qR(),new A.b(f,j),13),A.u(r,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,12,650,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],m))}o=[o,A.w(l,n),A.ba(b,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.text",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,31,760,j,j,j,j,j,j,j,j,j,j,j,j,1.12,new A.i(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,40,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))]
if(p.length!==0)o.push(A.H(p,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,1.72,new A.i(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)))
n=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
o.push(A.w([A.F($.qX(),new A.b(f,j),15),A.u("By "+q,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,700,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],n))
n=A.a(j,j,j,j,j,j,j,new A.m(0,new A.b("color.line",j),"solid"),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(8,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
m=J.ao(e)
l=m.j(e,"postBodyHtml")
l=l==null?j:J.t(l)
l=A.cD("markdown-body",l==null?"":l,"blog-post-body",B.bv)
o.push(new A.k(g,A.f(B.a,j,n,B.a,B.a),A.h(j,[l])))
o=[new A.k(g,A.f(B.a,j,c,B.a,B.a),A.h(j,o)),k.fe()]
if(J.ac(m.j(e,"isAuthenticated"),!0)||B.t.gV()!=null)o.push(k.fc())
else o.push(A.h7("/blog",h,"Create an account or sign in to join the discussion on this Flint post.",!1,"Sign in to comment"))
return new A.aD(e,new A.k(g,A.f(B.a,j,d,B.a,B.a),A.h(j,o)))},
fe(){var s,r,q,p,o,n,m,l,k=null,j="color.text",i="color.muted",h=this.gfd(),g=A.a(k,k,k,k,k,new A.b("color.panel",k),k,new A.m(1,new A.b("color.line",k),"solid"),k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(24,24,24,24),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),k,k,k,k,k,k,k,k,new A.i(18,18,18,18),k,18,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),f=A.a(k,B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.d,k,k,k,k,k,k,k,k,k,k,k,k,12,k,k,k,k,k,B.n,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
f=[A.w([A.al("Comments",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b(j,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)),A.u(""+h.length,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.primary",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],f)]
s=h.length
if(s===0)f.push(A.H("No comments yet. Start the conversation.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)))
else for(r=t.P,q=0;q<h.length;h.length===s||(0,A.aJ)(h),++q){p=r.a(h[q])
o=J.ao(p)
n=o.j(p,"author")
n=n==null?k:J.t(n)
if(n==null)n="Community"
m=A.f(B.a,k,new A.l(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,13,800,k,k,new A.b(j,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a)
n=A.h(n,B.h)
l=o.j(p,"date")
l=l==null?k:J.t(l)
if(l==null)l=""
l=A.w([new A.a8("span",m,n),new A.a8("span",A.f(B.a,k,new A.l(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,12,k,k,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a),A.h(l,B.h))],new A.l(k,k,k,k,k,k,k,k,B.d,8,B.c,k,k,k,k,B.j,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
p=o.j(p,"body")
p=p==null?k:J.t(p)
if(p==null)p=""
o=A.f(B.a,k,new A.l(k,new A.i(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,14,k,1.7,k,new A.b(i,k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a)
p=A.h(p,B.h)
f.push(new A.k("div",A.f(B.a,k,new A.l(new A.i(16,16,16,16),k,k,k,k,k,k,k,B.e,8,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.panelStrong",k),14,new A.m(1,new A.e("rgba(51, 65, 85, 0.78)"),"solid"),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a,B.a),A.h(k,[l,new A.a8("p",o,p)])))}return new A.k("div",A.f(B.a,k,g,B.a,B.a),A.h(k,f))},
fc(){var s,r,q,p,o=this,n=null,m=o.gar().j(0,"slug"),l=m==null?n:J.t(m)
if(l==null)l=""
m=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,new A.i(22,22,22,22),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
q=o.f
if(q!=null){p=A.a(n,n,n,n,n,new A.e("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.e("rgba(248, 113, 113, 0.35)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.H(q,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r.push(new A.k("div",A.f(B.a,n,p,B.a,B.a),A.h(q,B.h)))}r.push(A.f8(o.d.Z(0,"body"),o.e,"Comment","body","Share a thought, question, or improvement...",!0,6,$.uU()))
q=o.r
r.push(A.av(n,[A.F($.kd(),n,15),A.u("Submit Comment",n)],n,!1,q,n,B.ax,B.z,B.i,B.a6))
s=A.eE(r,s,new A.kH(o,l))
return new A.k("div",A.f(B.a,n,m,B.a,B.a),A.h(n,[s]))},
bA(a,b){return this.hI(a,b)},
hI(a5,a6){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
var $async$bA=A.bk(function(a7,a8){if(a7===1){o.push(a8)
s=p}for(;;)switch(s){case 0:if(t.m.b(a5))a5.preventDefault()
if(n.r){s=1
break}n.p(new A.kK(n))
c=n.d
b=t.N
a=A.a0(b,t.a)
a0=B.b.D(c.a0("body")).length
if(a0===0)a.i(0,"body",A.d(["The body field is required."],t.s))
else if(a0<3)a.i(0,"body",A.d(["The body must be at least 3 characters."],t.s))
a1=new A.bW(a)
if(a.gM(0)){h=n.c4(a1,"Please check your comment.")
n.p(new A.kL(n,a1))
B.p.P(0,"Comment not posted",h)
s=1
break}p=4
m=B.t.gV()
a0=$.cg()
a2="/blog/"+a6
c=A.hf(c.b,b,t.X)
l=A.a0(b,b)
J.au(l,"Accept","application/json")
J.au(l,"X-Requested-With","FlintClient")
if(m!=null)J.au(l,"Authorization","Bearer "+m)
s=7
return A.b5(a0.aj(a2+"/comments",c,l,t.P),$async$bA)
case 7:k=a8
j=k.b
if(k.f&&j!=null){B.p.ad("Comment posted","Refreshing comments...")
l=J.P(j,"redirectTo")
l=l==null?null:J.t(l)
if(l==null)l=a2
A.z(A.z(v.G.window).location).assign(l)
s=1
break}i=A.ch(j)
l=j
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not post comment."
h=n.c4(i,l)
n.p(new A.kM(n,i,h))
B.p.P(0,"Comment not posted",h)
p=2
s=6
break
case 4:p=3
a4=o.pop()
l=A.aQ(a4)
if(l instanceof A.bU){g=l
f=n.f8(g)
e=A.ch(f)
l=f
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not post comment."
d=n.c4(e,l)
n.p(new A.kN(n,e,d))
B.p.P(0,"Comment not posted",d)}else{n.p(new A.kO(n))
B.p.P(0,"Comment not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bA,r)},
c4(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb5()
s=A.Q(r).h("aS<2>")
return A.iE(new A.aS(r,s),3,s.h("o.E")).J(0," ")},
f8(a){var s=a.d
if(t.P.b(s))return s
if(t.G.b(s))return J.cQ(s,new A.kJ(),t.N,t.z)
return null}}
A.kI.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.kH.prototype={
$1(a){return this.a.bA(A.ab(a),this.b)},
$S:1}
A.kK.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.G
s.f=null},
$S:0}
A.kL.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
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
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kO.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post comment. Please try again."},
$S:0}
A.kJ.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.dr.prototype={
ghd(){var s,r,q=J.P(this.c,"posts")
if(t.j.b(q)){s=J.cx(q,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.kP()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V},
gdl(){return J.ac(J.P(this.c,"canWriteBlog"),!0)||A.dP(["admin","contributor"],t.N).H(0,B.t.gak(0))},
E(){var s,r,q,p,o,n,m,l,k=this,j=null,i="div",h="solid",g="rgba(14, 165, 233, 0.1)",f="color.text",e="color.muted",d="color.primary",c=k.ghd(),b=c.length===0?j:B.f.gF(c),a=c.length<=1?B.V:A.qj(c,1,j,A.az(c).c).iE(0),a0=k.hO(c),a1=k.c,a2=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(j,B.o,j,B.o),j,j,1152,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(48,16,48,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,B.v,j,j,j,new A.i(34,16,34,16),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.I("100%"),j,j,j,j),a3=c.length,a4=a0.length,a5=t.f,a6=A.a(j,j,j,j,j,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(16, 185, 129, 0.16)"),0),new A.K(new A.e(g),42),new A.K(new A.e("rgba(15, 23, 42, 0.82)"),100)],a5)),B.aF],a5)),j,B.bC,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(40,40,40,40),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,B.a2,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a7=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,B.j,j,j,j,j,j,20,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a8=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,720,j,j,0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),a9=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,B.j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a9=A.w([k.c5("Flint Blog"),k.c5("Engineering notes")],a9)
s=A.ba("Ideas, releases, and practical Flint engineering.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,32,760,j,j,j,j,j,j,j,j,j,j,j,j,1.08,new A.i(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,42,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
r=A.H("Read framework updates, backend patterns, UI notes, deployment lessons, and production guidance from the Flint ecosystem.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,1.7,new A.i(0,0,0,0),j,j,680,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a8=A.f(B.a,j,a8,B.a,B.a)
r=A.h(j,[a9,s,r])
s=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,220,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.o,j,j,j,j),j,0,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.I("100%"),j,j,j,j)
a3=k.e2(""+a3,"Published posts")
a4=k.e2(""+a4,"Topics covered")
a7=A.w([new A.k(i,a8,r),new A.k(i,A.f(B.a,j,s,B.a,B.a),A.h(j,[a3,a4]))],a7)
a4=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,B.j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a3=A.a(j,B.c,j,j,j,new A.e("rgba(52, 211, 153, 0.14)"),j,new A.m(1,new A.e("rgba(52, 211, 153, 0.42)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(10,16,10,16),j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a8=A.F(k.gdl()?$.u0():$.qV(),j,16)
a9=k.gdl()?"Write a Post":"Sign in to Write"
a3=[A.Y(j,[a8,A.u(a9,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(d,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],a3,"/blog/create",j,B.i,j)]
if(!(J.ac(J.P(a1,"isAuthenticated"),!0)||B.t.gV()!=null)){a8=A.a(j,B.c,j,j,j,new A.e(g),j,new A.m(1,new A.e("rgba(125, 211, 252, 0.34)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,8,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(10,16,10,16),j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a3.push(A.Y(j,[A.F($.kb(),j,16),A.u("Create account",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b("color.accent",j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))],a8,"/blog/create?mode=register",j,B.i,j))}a3=A.w(a3,a4)
a3=[new A.k(i,A.f(B.a,j,a6,B.a,B.a),A.h(j,[a7,a3]))]
if(a0.length!==0)a3.push(k.hQ(a0))
if(b==null){a4=A.a(j,j,j,j,j,new A.b("color.panel",j),j,new A.m(1,new A.b("color.line",j),h),j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(28,28,28,28),j,18,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a5=A.al("No posts yet",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,24,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a6=A.H("Once the first Flint post is published, it will appear here.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a3.push(new A.k(i,A.f(B.a,j,a4,B.a,B.a),A.h(j,[a5,a6])))}else{t.P.a(b)
a4=J.ao(b)
a6=a4.j(b,"title")
q=a6==null?j:J.t(a6)
if(q==null)q="Untitled post"
a6=a4.j(b,"href")
p=a6==null?j:J.t(a6)
if(p==null)p="/blog"
a6=a4.j(b,"excerpt")
o=a6==null?j:J.t(a6)
if(o==null)o=""
a6=a4.j(b,"tag")
n=a6==null?j:J.t(a6)
if(n==null)n="Update"
a6=a4.j(b,"author")
m=a6==null?j:J.t(a6)
if(m==null)m="Flint Team"
a4=a4.j(b,"date")
l=a4==null?j:J.t(a4)
if(l==null)l=""
a4=A.aK(A.d([A.aX(145,A.d([new A.K(new A.e("rgba(14, 165, 233, 0.14)"),0),new A.K(new A.e("rgba(15, 23, 42, 0.66)"),58),new A.K(new A.e("rgba(2, 6, 23, 0.78)"),100)],a5)),B.ej],a5))
a6=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(26,26,26,26),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a6=A.a(j,j,j,j,j,a4,j,B.dJ,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,22,j,j,j,j,j,j,j,j,j,A.a(j,B.dy,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,A.eG(A.d([new A.aL("minmax("+A.O(B.ad,!1)+", "+A.O(new A.I("1.35fr"),!1)+")"),new A.aL("minmax("+A.O(280,!1)+", "+A.O(new A.I("0.65fr"),!1)+")")],a5)),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,a6,j,0,j,j,j,j,j,j,B.ab,j,20,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a5=A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,16,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a4=k.dN(n,l)
a7=A.al(q,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,26,750,j,j,j,j,j,j,j,j,j,j,j,j,1.14,new A.i(0,0,0,0),j,j,j,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,32,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a8=A.H(o,A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,15,j,j,j,j,j,j,j,j,j,j,j,j,j,1.72,new A.i(0,0,0,0),j,j,720,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a9=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,B.j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
s=k.dh(m)
r=A.a(j,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.k,j,j,j,j,j,j,j,j,j,j,j,j,7,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a9=A.w([s,A.w([A.u("Read featured post",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(d,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)),A.F($.bz(),new A.b(d,j),15)],r)],a9)
a5=A.f(B.a,j,a5,B.a,B.a)
a9=A.h(j,[a4,a7,a8,a9])
a8=A.a(j,j,j,j,j,new A.b("color.panelStrong",j),j,new A.m(1,new A.e("rgba(51, 65, 85, 0.82)"),h),j,j,j,j,j,j,j,j,j,j,j,j,B.e,j,j,j,j,j,j,j,j,j,j,j,j,14,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(22,22,22,22),j,18,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
a7=A.F($.c4(),B.a9,24)
a4=A.bf("Latest insight",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(f,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,20,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.i(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
r=A.H("A short, readable article from the Flint team and community.",A.a(j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new A.b(e,j),j,j,j,j,j,j,j,j,j,j,j,j,j,j,13,j,j,j,j,j,j,j,j,j,j,j,j,j,1.65,new A.i(0,0,0,0),j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j))
a6=[A.Y(j,[new A.k(i,a5,a9),new A.k(i,A.f(B.a,j,a8,B.a,B.a),A.h(j,[a7,a4,r]))],a6,p,j,B.i,j)]
if(a.length!==0)a6.push(k.hc(a))
B.f.S(a3,a6)}return new A.aD(a1,new A.k(i,A.f(B.a,j,a2,B.a,B.a),A.h(j,a3)))},
hQ(a){var s,r,q,p,o,n,m,l=null,k="color.muted"
t.a.a(a)
s=A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,l,l,l,l,l,B.j,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=[]
for(q=A.qj(a,0,A.fS(10,"count",t.S),A.az(a).c),p=q.$ti,q=new A.bE(q,q.gk(0),p.h("bE<ax.E>")),p=p.h("ax.E");q.m();){o=q.d
if(o==null)o=p.a(o)
n=A.F($.tV(),new A.b(k,l),13)
m=A.f(B.a,l,new A.l(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,750,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a)
o=A.h(o,B.h)
r.push(new A.k("div",A.f(B.a,l,new A.l(new A.i(7,12,7,12),l,l,l,l,l,l,l,B.k,8,B.c,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.panel",l),999,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.h(l,[n,new A.a8("span",m,o)])))}return new A.k("div",A.f(B.a,l,s,B.a,B.a),A.h(l,r))},
hc(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="color.muted"
t.p.a(a)
s=A.O(280,!1)
r=A.O(B.y,!1)
r=A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,B.e,e,e,e,e,e,e,e,e,e,e,e,e,16,e,B.D,e,e,e,e,e,e,e,e,e,e,e,e,e,e,A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.aB("repeat("+A.O("auto-fit",!0)+", "+A.O(new A.aL("minmax("+s+", "+r+")"),!1)+")"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)
s=[]
for(q=a.length,p=t.P,o=0;o<a.length;a.length===q||(0,A.aJ)(a),++o){n=p.a(a[o])
m=J.ao(n)
l=m.j(n,"title")
k=l==null?e:J.t(l)
if(k==null)k="Untitled post"
l=m.j(n,"href")
j=l==null?e:J.t(l)
if(j==null)j="/blog"
l=m.j(n,"excerpt")
i=l==null?e:J.t(l)
if(i==null)i=""
l=m.j(n,"tag")
h=l==null?e:J.t(l)
if(h==null)h="Update"
l=m.j(n,"author")
g=l==null?e:J.t(l)
if(g==null)g="Flint Team"
n=m.j(n,"date")
f=n==null?e:J.t(n)
s.push(A.Y(e,[this.dN(h,f==null?"":f),new A.a8("h2",A.f(B.a,e,new A.l(e,new A.i(0,0,0,0),e,e,e,new A.I("100%"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,21,750,1.25,e,new A.b("color.text",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h(k,B.h)),new A.a8("p",A.f(B.a,e,new A.l(e,new A.i(0,0,0,0),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,13,e,1.68,e,new A.b(d,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h(i,B.h)),A.w([this.dh(g),A.F($.bz(),new A.b(d,e),15)],new A.l(e,e,e,e,e,e,e,e,B.d,12,B.c,e,B.n,e,e,B.j,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e))],new A.l(new A.i(20,20,20,20),e,e,e,0,e,e,e,B.e,14,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b("color.panel",e),16,new A.m(1,new A.b("color.line",e),"solid"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),j,e,B.i,e))}return new A.k("div",A.f(B.a,e,r,B.a,B.a),A.h(e,s))},
dN(a,b){var s,r=null,q="color.muted",p=A.a(r,B.c,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.d,r,r,r,r,r,r,B.j,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),o=[this.c5(a)]
if(b.length!==0){s=A.a(r,B.c,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.k,r,r,r,r,r,r,r,r,r,r,r,r,6,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
o.push(A.w([A.F($.qR(),new A.b(q,r),13),A.u(b,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b(q,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,650,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))],s))}return A.w(o,p)},
dh(a){var s=null,r="color.muted",q=A.a(s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,7,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.w([A.F($.qX(),new A.b(r,s),14),A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b(r,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],q)},
c5(a){var s=null,r=A.a(s,s,s,s,s,B.eo,s,B.dA,s,s,s,s,s,s,s,s,s,s,B.al,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.ao,s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.nb,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))},
e2(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.e("rgba(51, 65, 85, 0.82)"),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,3,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(16,16,16,16),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,24,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p]))},
hO(a){var s,r,q,p,o
t.p.a(a)
s=A.dO(t.N)
for(r=a.length,q=0;q<a.length;a.length===r||(0,A.aJ)(a),++q){p=J.P(a[q],"tag")
o=p==null?null:B.b.D(J.t(p))
if(o!=null&&o.length!==0)s.u(0,o)}r=A.aC(s,s.$ti.c)
return r}}
A.kP.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.cU.prototype={
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="color.line",j="color.panel",i="color.text",h=o.c,g=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,24,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(n,B.o,n,B.o),n,n,960,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(48,16,48,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,B.v,n,n,n,new A.i(34,16,34,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.I("100%"),n,n,n,n),f=A.a(n,n,n,n,n,new A.b(j,n),n,new A.m(1,new A.b(k,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(34,34,34,34),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,new A.i(24,24,24,24),n,22,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),e=A.H("Blog",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),d=A.ba("Write a Flint post",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(i,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,31,750,n,n,n,n,n,n,n,n,n,n,n,n,1.12,new A.i(0,0,0,0),n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),c=A.H("Publish framework updates, tutorials, architecture notes, and practical lessons for the Flint community.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.muted",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,15,n,n,n,n,n,n,n,n,n,n,n,n,n,1.7,new A.i(0,0,0,0),n,n,760,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
c=[new A.k(l,A.f(B.a,n,f,B.a,B.a),A.h(n,[e,d,c]))]
f=J.ao(h)
if(!(J.ac(f.j(h,"isAuthenticated"),!0)||B.t.gV()!=null)){f=f.j(h,"authMode")
c.push(A.h7("/blog","Back to Blog","Create an account or sign in to draft Flint articles, release notes, and community tutorials.",(f==null?n:J.t(f))==="register","Sign in to write"))}else if(!(J.ac(f.j(h,"canWriteBlog"),!0)||A.dP(["admin","contributor"],t.N).H(0,B.t.gak(0)))){f=A.a(n,n,n,n,n,new A.e("rgba(251, 191, 36, 0.08)"),n,new A.m(1,new A.e("rgba(251, 191, 36, 0.32)"),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(24,24,24,24),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
e=A.al("Writer access required",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(i,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,22,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
d=A.H("Your account is signed in, but it does not currently have permission to publish blog posts.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.warning",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1.6,new A.i(8,n,0,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
c.push(new A.k(l,A.f(B.a,n,f,B.a,B.a),A.h(n,[e,d])))}else{f=A.a(n,n,n,n,n,new A.b(j,n),n,new A.m(1,new A.b(k,n),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(24,24,24,24),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,0,n,n,n,n,n,n,new A.i(18,18,18,18),n,18,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
e=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,18,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
d=[]
s=o.f
if(s!=null){r=A.a(n,n,n,n,n,new A.e("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.e("rgba(248, 113, 113, 0.35)"),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.H(s,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
d.push(new A.k(l,A.f(B.a,n,r,B.a,B.a),A.h(s,B.h)))}s=o.d
r=s.Z(0,"title")
q=o.e
p=$.uF()
d.push(A.c2(r,q,p,"Title","title","Example: Building controllers with Flint",!0,"text"))
d.push(A.c2(s.Z(0,"tag"),o.e,p,"Tag","tag","Guide, Release, Architecture...",!0,"text"))
d.push(A.f8(s.Z(0,"body"),o.e,"Body","body","Write the full post in Markdown...",!0,14,$.uT()))
s=o.r
d.push(A.av(n,[A.F($.kd(),n,15),A.u("Publish Post",n)],n,!1,s,n,B.ax,B.z,B.i,B.a6))
e=A.eE(d,e,o.gfa())
c.push(new A.k(l,A.f(B.a,n,f,B.a,B.a),A.h(n,[e])))}return new A.aD(h,new A.k(l,A.f(B.a,n,g,B.a,B.a),A.h(n,c)))},
bc(a){return this.hF(A.ab(a))},
hF(a8){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
var $async$bc=A.bk(function(a9,b0){if(a9===1){o.push(b0)
s=p}for(;;)switch(s){case 0:if(t.m.b(a8))a8.preventDefault()
if(n.r){s=1
break}n.p(new A.kR(n))
b=n.d
a=B.b.D(b.a0("title"))
a0=B.b.D(b.a0("tag"))
a1=B.b.D(b.a0("body"))
a2=t.N
a3=A.a0(a2,t.a)
a4=a.length
if(a4===0)a3.i(0,"title",A.d(["The title field is required."],t.s))
else if(a4<6)a3.i(0,"title",A.d(["The title must be at least 6 characters."],t.s))
if(a0.length===0)a3.i(0,"tag",A.d(["The tag field is required."],t.s))
a4=a1.length
if(a4===0)a3.i(0,"body",A.d(["The body field is required."],t.s))
else if(a4<40)a3.i(0,"body",A.d(["The body must be at least 40 characters."],t.s))
a5=new A.bW(a3)
if(a3.gM(0)){g=n.c6(a5,"Please check your post.")
n.p(new A.kS(n,a5))
B.p.P(0,"Post not published",g)
s=1
break}p=4
m=B.t.gV()
a4=$.cg()
b=A.hf(b.b,a2,t.X)
l=A.a0(a2,a2)
J.au(l,"Accept","application/json")
J.au(l,"X-Requested-With","FlintClient")
if(m!=null)J.au(l,"Authorization","Bearer "+m)
s=7
return A.b5(a4.aj("/blog/create",b,l,t.P),$async$bc)
case 7:k=b0
j=k.b
if(k.f&&j!=null){l=J.P(j,"redirectTo")
i=l==null?null:J.t(l)
B.p.ad("Post published","Opening the article...")
l=i==null||i.length===0?"/blog":i
A.z(A.z(v.G.window).location).assign(l)
s=1
break}h=A.ch(j)
l=j
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not publish post."
g=n.c6(h,l)
n.p(new A.kT(n,h,g))
B.p.P(0,"Post not published",g)
p=2
s=6
break
case 4:p=3
a7=o.pop()
l=A.aQ(a7)
if(l instanceof A.bU){f=l
e=n.f9(f)
d=A.ch(e)
l=e
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not publish post."
c=n.c6(d,l)
n.p(new A.kU(n,d,c))
B.p.P(0,"Post not published",c)}else{n.p(new A.kV(n))
B.p.P(0,"Post not published",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bc,r)},
c6(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb5()
s=A.Q(r).h("aS<2>")
return A.iE(new A.aS(r,s),3,s.h("o.E")).J(0," ")},
f9(a){var s=a.d
if(t.P.b(s))return s
if(t.G.b(s))return J.cQ(s,new A.kQ(),t.N,t.z)
return null}}
A.kR.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.G
s.f=null},
$S:0}
A.kS.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.kT.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kU.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.kV.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not publish post. Please try again."},
$S:0}
A.kQ.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.dv.prototype={
gcf(){var s,r,q=J.P(this.b,"entries")
if(t.j.b(q)){s=J.cx(q,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.l0()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V},
E(){var s,r,q,p,o,n,m,l,k=this
if(k.gcf().length===0)s='<style>\n  #changelog-root, #changelog-root * { box-sizing: border-box; }\n  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }\n  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }\n  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }\n  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }\n  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }\n  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }\n  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }\n  .cl-md li { margin-bottom: 6px; }\n  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }\n  @media (max-width: 640px) {\n    .changelog-shell { padding: 34px 16px !important; }\n    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }\n  }\n</style>\n<div class="changelog-shell">\n  <div class="changelog-hero">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>\n    </div>\n    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>\n    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>\n  </div>\n\n  <div style="margin-top:28px;padding:24px;border-radius:14px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);">\n    <p style="color:#94a3b8;margin:0;">No changelog entries are available yet.</p>\n  </div>\n\n'
else for(r=0,s='<style>\n  #changelog-root, #changelog-root * { box-sizing: border-box; }\n  #changelog-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  .changelog-shell { width: 100%; max-width: 1152px; padding: 48px 16px; color: #e2e8f0; margin: 0 auto; overflow: hidden; }\n  .changelog-hero { padding: 40px; border-radius: 24px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(15, 23, 42, 0.7); }\n  .changelog-card { margin-top: 24px; padding: 24px; border-radius: 16px; border: 1px solid rgba(30, 41, 59, 1); background: rgba(15, 23, 42, 0.6); }\n  .changelog-card.latest { border-color: rgba(52, 211, 153, 0.35); background: rgba(52, 211, 153, 0.06); }\n  .cl-md h2, .cl-md h3, .cl-md h4 { color: #fff; margin: 16px 0 8px; }\n  .cl-md p { color: #94a3b8; line-height: 1.7; margin: 0 0 12px; }\n  .cl-md ul { list-style: disc; padding-left: 20px; color: #cbd5e1; line-height: 1.7; }\n  .cl-md li { margin-bottom: 6px; }\n  .cl-md code { background: rgba(30, 41, 59, 0.8); color: #38bdf8; padding: 2px 6px; border-radius: 4px; font-size: 13px; }\n  .cl-md pre { background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(30, 41, 59, 0.8); padding: 16px; border-radius: 12px; overflow-x: auto; max-width: 100%; }\n  @media (max-width: 640px) {\n    .changelog-shell { padding: 34px 16px !important; }\n    .changelog-hero { padding: 24px !important; border-radius: 18px !important; }\n  }\n</style>\n<div class="changelog-shell">\n  <div class="changelog-hero">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:18px;">\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Release Notes</span>\n      <span style="padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.32);background:rgba(52,211,153,0.1);font-size:11px;font-weight:700;color:#34d399;">Changelog</span>\n    </div>\n    <h1 style="font-size:38px;font-weight:700;line-height:1.12;color:#fff;margin:0 0 12px;">Flint Dart Changelog</h1>\n    <p style="font-size:15px;line-height:1.7;color:#94a3b8;margin:0;max-width:720px;">A version-by-version history of features, fixes, and behavior changes across the Flint ecosystem.</p>\n  </div>\n\n';r<k.gcf().length;++r,s=n){q=k.gcf()
if(!(r<q.length))return A.v(q,r)
p=q[r]
o=r===0
q=J.ao(p)
n=q.j(p,"version")
m=n==null?null:J.t(n)
if(m==null)m=""
q=q.j(p,"contentHtml")
l=q==null?null:J.t(q)
if(l==null)l=""
q=o?"latest":""
n=o?'<span style="padding:3px 10px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:10px;font-weight:700;color:#34d399;">Latest</span>':""
n=s+('  <div class="changelog-card '+q+'">\n    <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:14px;">\n      <h2 style="font-size:21px;font-weight:700;color:#fff;margin:0;">v'+m+"</h2>\n      "+n+'\n    </div>\n    <div class="cl-md">\n      '+l+"\n    </div>\n  </div>\n\n")}s+="</div>\n"
return new A.aD(k.b,A.cD(null,s.charCodeAt(0)==0?s:s,"changelog-root",B.dl))}}
A.l0.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.dw.prototype={
gdq(){var s=J.P(this.c,"contentHtml")
s=s==null?null:J.t(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="100%",e="color.line",d="rgba(52, 211, 153, 0.1)",c="color.panel",b="color.text",a="color.muted",a0="color.primary",a1=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,1040,B.cv,i,i,i,i,i,i,i,i,B.cK,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(f),i,i,i,i),a2=t.f
a2=A.a(i,i,i,i,i,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(14, 165, 233, 0.18)"),0),new A.K(new A.e(d),48),new A.K(new A.b(c,i),100)],a2)),new A.b(c,i)],a2)),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a2,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,24,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.w([j.dr("FlintClient"),j.dr("Dart HTTP")],q)
p=A.ba("A production-ready Dart client for modern APIs.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.H("FlintClient gives Dart and Flutter apps a clean way to call APIs with retries, caching, cancellation, structured errors, lifecycle hooks, and strict or lenient parsing.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.f(B.a,i,r,B.a,B.a)
o=A.h(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,280,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(f),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.R,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.w([A.F($.dl(),B.a9,16),A.u("Install",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.accent",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.bj,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.u("dart pub add flint_client",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,700,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.f(B.a,i,m,B.a,B.a)
l=A.h(i,[l])
k=A.H("Use it from Dart CLIs, Flutter apps, dashboards, and backend tools.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.f(B.a,i,q,B.a,B.a)
k=A.h(i,[n,new A.k(g,m,l),k])
s=A.w([new A.k(g,r,o),new A.k(g,A.f(B.a,i,p,B.a,B.a),A.h(i,[new A.k(g,q,k)]))],s)
k=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.w([j.c8("pub.dev","https://pub.dev/packages/flint_client"),j.c8("GitHub","https://github.com/flintdart/flint-client"),j.c8("Examples","/examples")],k)
a2=A.f(B.a,i,a2,B.a,B.a)
k=A.h(i,[s,k])
s=A.O(240,!1)
q=A.O(B.y,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.D,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.aB("repeat("+A.O("auto-fit",!0)+", "+A.O(new A.aL("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.be($.q2(),"Retries that understand HTTP","Backoff, retry-after support, and safer behavior for idempotent requests.",B.a9)
p=j.be($.qQ(),"Cache with TTL control","Cache responses intentionally and avoid repeated network work.",B.I)
o=j.be($.qP(),"Structured errors","Handle timeout, network, HTTP, parse, and cancelled states clearly.",B.c_)
r=j.be($.tZ(),"Lifecycle hooks","Attach logging, metrics, correlation IDs, and request tracing cleanly.",B.W)
q=A.f(B.a,i,q,B.a,B.a)
r=A.h(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(c,i),i,new A.m(1,new A.b(e,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.at,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.v,i,i,i,B.R,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(f),i,i,i,i)
p=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,12,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.al("Client documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(b,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.H("Setup, requests, files, WebSocket usage, error handling, parse modes, and observability.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.f(B.a,i,s,B.a,B.a)
m=A.h(i,[l,m])
l=A.a(i,B.c,i,i,i,new A.e(d),i,new A.m(1,new A.e("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.w([new A.k(g,s,m),A.Y(i,[A.u("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.F($.bz(),new A.b(a0,i),14)],l,"#basics",i,B.i,i)],p)]
if(j.gdq().length===0)p.push(A.H("The FlintClient guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else{s=t.N
p.push(A.cD("api-md markdown-body",j.gdq(),"client-content",A.ak(["style",A.ak(["min-width","0","max-width","100%","overflow-wrap","break-word"],s,s)],s,t.X)))}s=A.f(B.a,i,o,B.a,B.a)
p=A.h(i,p)
a1=A.f(B.a,i,a1,B.a,B.a)
p=A.h(i,[new A.k(g,a2,k),new A.k(g,q,r),new A.k(g,s,p)])
return new A.aD(j.c,new A.k(g,A.f(B.a,i,B.b6,B.a,B.a),A.h(i,[new A.k(g,a1,p)])))},
be(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.R,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.F(a,d,20),p=A.bf(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.H(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p,o]))},
c8(a,b){var s=null,r=B.b.K(b,"http")?"_blank":s
return A.Y(a,B.h,A.a(s,B.c,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.bs,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,r,B.i,s)},
dr(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.al,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.I("max-content"),s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.dA.prototype={
E(){var s=null,r=this.b,q=J.P(r,"contentHtml")
q=q==null?s:J.t(q)
q=A.cD(s,q==null?"":q,"content-page",B.a)
return new A.aD(r,new A.k("div",A.f(B.a,s,B.hA,B.a,B.a),A.h(s,[q])))}}
A.dD.prototype={
E(){return new A.aD(this.b,A.cD(null,A.cO("<style>\n  #examples-root, #examples-root * { box-sizing: border-box; }\n  #examples-root { width: 100%; max-width: 100%; overflow-x: hidden; }\n  #examples-root pre { max-width: 100%; overflow-x: auto; }\n  #examples-root code { overflow-wrap: normal; }\n  @media (max-width: 640px) {\n    #examples-root .examples-shell { padding: 34px 16px !important; }\n    #examples-root .examples-hero { padding: 24px !important; border-radius: 18px !important; }\n    #examples-root .examples-title { font-size: 30px !important; line-height: 1.12 !important; }\n    #examples-root .examples-section { padding: 18px !important; border-radius: 14px !important; }\n    #examples-root ol { padding-left: 18px !important; }\n    #examples-root pre { margin-left: -2px !important; margin-right: -2px !important; padding: 14px !important; }\n  }\n</style>\n<div class=\"examples-shell\" style=\"width:100%;max-width:1152px;padding:48px 16px;color:#e2e8f0;margin:0 auto;overflow:hidden;\">\n  <div class=\"examples-hero\" style=\"padding:40px;border-radius:24px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.7);\">\n    <div style=\"display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:20px;\">\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;\">Examples</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.4);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#d1fae5;\">{{FLINT_DART_VERSION}}</span>\n      <span style=\"font-size:12px;color:#64748b;\">Hands-on tutorials</span>\n    </div>\n    <h1 class=\"examples-title\" style=\"font-size:36px;font-weight:600;color:#fff;margin:0 0 12px;\">Examples &amp; Tutorials</h1>\n    <p style=\"font-size:15px;color:#94a3b8;margin:0 0 16px;\">Learn by example with practical, end-to-end walkthroughs.</p>\n    <div style=\"display:flex;flex-wrap:wrap;gap:12px;\">\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">Auth ready</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">ORM included</span>\n      <span style=\"padding:4px 12px;border-radius:9999px;border:1px solid rgba(30,41,59,1);background:rgba(15,23,42,0.6);font-size:12px;color:#94a3b8;\">Views + APIs</span>\n    </div>\n  </div>\n\n  <section class=\"examples-section\" style=\"margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);\">\n    <h2 style=\"font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;\">Blog Platform Tutorial</h2>\n    <p style=\"color:#94a3b8;margin:0 0 8px;\">Build a blog with role-based publishing, comments, and moderation.</p>\n    <span style=\"display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(52,211,153,0.3);background:rgba(52,211,153,0.1);font-size:11px;font-weight:600;color:#a7f3d0;\">Beginner</span>\n\n    <div style=\"margin-top:24px;\">\n      <h3 style=\"font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;\">Roles &amp; Permissions</h3>\n      <ul style=\"list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;\">\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">admin</code> and <code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">contributor</code> can publish blog posts.</li>\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">dev</code> can create questions/issues, answer, and comment.</li>\n        <li>All authenticated roles can comment on posts.</li>\n      </ul>\n    </div>\n\n    <ol style=\"margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;\">\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Setup Project</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Create a new Flint project and generate models:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">flint create blog_platform\ncd blog_platform\nflint --make-model User\nflint --make-model Post\nflint --make-model Comment\nflint migrate</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Create Models</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Define User, Post, and Comment models with relations:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class User extends Model&lt;User&gt; {\n  User() : super(() =&gt; User());\n\n  String? get name =&gt; getAttribute('name');\n  String? get email =&gt; getAttribute('email');\n  String? get role =&gt; getAttribute('role');\n\n  @override\n  Table get table =&gt; Table(\n        name: 'users',\n        columns: [\n          Column(name: 'name', type: ColumnType.string, length: 255),\n          Column(name: 'email', type: ColumnType.string, length: 255),\n          Column(name: 'password', type: ColumnType.string),\n          Column(name: 'role', type: ColumnType.string, length: 50),\n        ],\n      );\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Role Guard Middleware</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Gate publishing routes to admin and contributor roles:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class RoleGuard extends Middleware {\n  RoleGuard(this.allowedRoles);\n  final List&lt;String&gt; allowedRoles;\n\n  @override\n  Handler handle(Handler next) {\n    return (Context ctx) async {\n      final user = await ctx.req.user;\n      if (user == null) return ctx.res.status(401).json({'error': 'Unauthorized'});\n      final role = user['role'];\n      if (!allowedRoles.contains(role)) return ctx.res.status(403).json({'error': 'Forbidden'});\n      return next(ctx);\n    };\n  }\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Create Controllers</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Publish posts with role checks and comment support:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/posts', (Context ctx) async {\n  final data = await ctx.req.validate({\n    'title': 'required|string',\n    'content': 'required|string',\n  });\n  final user = await ctx.req.user;\n  final post = await Post().create({\n    'title': data['title'],\n    'content': data['content'],\n    'slug': data['title'].toString().toLowerCase().replaceAll(' ', '-'),\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'post': post}, status: 201);\n}).useMiddleware(RoleGuard(['admin', 'contributor']));</code></pre>\n      </li>\n    </ol>\n  </section>\n\n  <section class=\"examples-section\" style=\"margin-top:40px;padding:24px;border-radius:16px;border:1px solid rgba(30,41,59,0.7);background:rgba(15,23,42,0.4);\">\n    <h2 style=\"font-size:22px;font-weight:600;color:#fff;margin:0 0 8px;\">Questions &amp; Answers Tutorial</h2>\n    <p style=\"color:#94a3b8;margin:0 0 8px;\">Build a Q&amp;A system with role-based posting for issues and answers.</p>\n    <span style=\"display:inline-block;padding:4px 12px;border-radius:9999px;border:1px solid rgba(56,189,248,0.3);background:rgba(56,189,248,0.1);font-size:11px;font-weight:600;color:#bae6fd;\">Intermediate</span>\n\n    <div style=\"margin-top:24px;\">\n      <h3 style=\"font-size:16px;font-weight:600;color:#fff;margin:0 0 8px;\">Roles &amp; Permissions</h3>\n      <ul style=\"list-style:disc;padding-left:20px;color:#cbd5e1;line-height:1.7;\">\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">dev</code> can post questions/issues and answers.</li>\n        <li><code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">admin</code> and <code style=\"background:rgba(30,41,59,0.6);padding:1px 4px;border-radius:4px;font-size:13px;\">contributor</code> can answer and comment as well.</li>\n        <li>All authenticated roles can comment on Q&amp;A threads.</li>\n      </ul>\n    </div>\n\n    <ol style=\"margin-top:24px;padding-left:20px;color:#cbd5e1;line-height:1.7;display:grid;gap:24px;\">\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Models</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Define Question and Answer models:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">class Question extends Model&lt;Question&gt; {\n  Question() : super(() =&gt; Question());\n  @override\n  Table get table =&gt; Table(\n        name: 'questions',\n        columns: [\n          Column(name: 'title', type: ColumnType.string, length: 255),\n          Column(name: 'body', type: ColumnType.text),\n          Column(name: 'user_id', type: ColumnType.string),\n          Column(name: 'status', type: ColumnType.string, length: 50),\n        ],\n      );\n}</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Routes &amp; Role Guard</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Allow devs to post questions and answers:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/questions', (Context ctx) async {\n  final data = await ctx.req.validate({\n    'title': 'required|string',\n    'body': 'required|string',\n  });\n  final user = await ctx.req.user;\n  final question = await Question().create({\n    'title': data['title'],\n    'body': data['body'],\n    'status': 'open',\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'question': question}, status: 201);\n}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>\n      </li>\n      <li>\n        <h4 style=\"font-size:14px;font-weight:600;color:#fff;margin:0 0 4px;\">Comments</h4>\n        <p style=\"margin:0 0 8px;color:#94a3b8;font-size:14px;\">Reuse the comment model to attach comments to questions or answers:</p>\n        <pre style=\"border-radius:12px;border:1px solid rgba(30,41,59,0.8);background:rgba(15,23,42,0.7);padding:16px;overflow-x:auto;\"><code style=\"font-size:13px;color:#e2e8f0;\">app.post('/questions/:id/comments', (Context ctx) async {\n  final data = await ctx.req.validate({'content': 'required|string'});\n  final user = await ctx.req.user;\n  final comment = await Comment().create({\n    'content': data['content'],\n    'question_id': ctx.req.param('id'),\n    'user_id': user?['id'],\n  });\n  return ctx.res.json({'success': true, 'comment': comment});\n}).useMiddleware(RoleGuard(['dev', 'admin', 'contributor']));</code></pre>\n      </li>\n    </ol>\n  </section>\n</div>\n","{{FLINT_DART_VERSION}}","v 1.3.2"),"examples-root",B.dl))}}
A.dF.prototype={
dD(a){A.fT(a)
this.p(new A.lG(this))
A.bO(B.aa,new A.lH(this))},
fL(a){A.fT(a)
this.p(new A.lD(this))
A.bO(B.aa,new A.lE(this))},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=null,a0="solid",a1="div",a2="#10b981",a3="#06b6d4",a4="#8b5cf6",a5="#f59e0b",a6="100%",a7="color.bg",a8="color.text",a9="color.line",b0="color.panel",b1="color.muted",b2=$.r3(),b3=b.d
if(!(b3<4))return A.v(b2,b3)
s=b2[b3]
b3=A.a(a,B.c,a,a,a,new A.b(a7,a),a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,B.d,a,a,a,B.u,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.I(a6),a,a,a,a)
b2=t.f
r=A.a(a,a,a,a,a,A.aK(A.d([A.aY(B.d1,B.kr),A.aY(B.d0,B.kw),A.aX(155,B.dd)],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)
r=A.a(a,a,a,a,a,new A.b(a7,a),a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,A.a(a,a,a,a,a,A.aK(A.d([A.aY(B.bu,B.db),A.aY(B.cY,B.dc),A.aX(160,A.d([new A.K(new A.b(a7,a),0),new A.K(new A.b(b0,a),55),new A.K(new A.b("color.panelStrong",a),100)],b2))],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,r,a,a,a,a,a,a,a,a,a,a,B.v,a,a,a,a,B.Z,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.I(a6),a,a,a,a)
q=A.a(a,B.c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.e,a,a,a,a,a,a,a,a,a,a,a,a,40,a,B.D,a,a,a,a,a,a,a,A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,A.eG(A.d([new A.aL("minmax("+A.O(B.ad,!1)+", "+A.O(new A.I("1.05fr"),!1)+")"),new A.aL("minmax("+A.O(540,!1)+", "+A.O(new A.I("1.18fr"),!1)+")")],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,64,a,A.eG(A.d([new A.aL("minmax("+A.O(B.ad,!1)+", "+A.O(new A.I("1.05fr"),!1)+")"),new A.aL("minmax("+A.O(620,!1)+", "+A.O(new A.I("1.2fr"),!1)+")")],b2)),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a),a)
q=A.w([b.fX("flint create my_app --template=fullstack"),b.fY(s)],q)
p=A.f(B.a,a,B.cu,B.a,B.a)
q=A.h(a,[q])
r=A.f(B.a,a,r,B.a,B.a)
q=A.h(a,[new A.k(a1,p,q)])
p=A.aw([A.u("THE UNIFIED REQUEST LIFECYCLE",B.cp),A.al("One Language From DOM to Database",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,32,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.H("No REST code generation drift. No dual TypeScript/Go models. Single unified typed contracts across the entire stack.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,680,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aM)
o=$.qW()
n=b.aL(new A.e(a2),"Pure Dart widgets rendered on server or client with instant hydration.",o,"01","SSR & Reactive Signals","Declarative Web UI")
m=$.ke()
l=b.aL(new A.e(a3),"Typed route params, session/JWT auth, and rate-limiting filters.",m,"02","Middleware Pipeline","Routing & Auth Guard")
k=$.cw()
j=b.aL(new A.e("#3b82f6"),"Controllers receive typed requests and return JSON or SSR Page views.",k,"03","Business Logic Core","Controller & Service")
i=$.qT()
h=b.aL(new A.e(a4),"PostgreSQL / MySQL / SQLite query builder with automated tenant isolation.",i,"04","Row-Level Security","ORM & RLS Gateway")
g=$.bR()
h=A.hI([n,l,j,h,b.aL(new A.e(a5),"Sub-millisecond broadcast channels for real-time live events.",g,"05","WebSocket Pub/Sub","Realtime Channels")],"repeat(auto-fit, minmax(220px, 1fr))",16)
j=A.f(B.a,a,B.fF,B.a,B.a)
h=A.h(a,[h])
l=A.f(B.a,a,B.fK,B.a,B.a)
h=A.h(a,[p,new A.k(a1,j,h)])
j=A.aw([A.u("BATTERIES INCLUDED",B.fU),A.al("Everything You Need For Production Web Apps",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.H("No need to stitch together 15 disparate npm packages. Flint Dart comes with fully integrated, battle-tested fullstack primitives.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aM)
p=t.s
n=b.ao(new A.e(a2),A.d(["Controller routing with req.params, req.query, req.json()","Typed middleware guards for auth & permissions","Automatic HTTP error handling & JSON responses"],p),"High-speed asynchronous HTTP router with parametric matching, route grouping, middleware pipelines, and automatic CORS & rate-limiting.",k,"Sub-Millisecond Controller Routing")
o=b.ao(new A.e(a3),A.d(["Zero HTML/JSX templates: 100% typed Dart widget tree","Tokenized design system with instant dark/light themes","Canvas 2D, WebGL 3D scenes & reactive signal state"],p),"Compose web pages using pure Dart components. Server-Side Render (SSR) for blazing SEO speeds with lightweight client hydration.",o,"Pure Dart Declarative UI & SSR")
i=b.ao(new A.e("#3b82f6"),A.d(["Type-safe relations: hasMany, belongsTo, withRelation()","Automatic migration runner and seeder pipelines","Owner-level policy guards for multi-tenant SaaS"],p),"Fluent query builder for PostgreSQL, MySQL, and SQLite. Built-in Row-Level Security (RLS) guarantees automated tenant isolation.",i,"Flint ORM & Row-Level Security")
f=b.ao(new A.e(a5),A.d(["Channel broadcast pub/sub with room filtering","Live heartbeat & automatic reconnect handlers","Sub-millisecond packet serialization in Dart"],p),"Multiplex live WebSocket connections into named channels. Stream live events, user presence, and collaborative updates seamlessly.",g,"Real-Time WebSockets & Channels")
m=b.ao(new A.e(a4),A.d(["Session cookies with SameSite & Secure flags","Role-based authorization (@hasRole, _hasPermission)","Pre-built login, register, and password reset flows"],p),"Turnkey authentication engine supporting encrypted HTTP cookie sessions, JWT bearer tokens, password hashing, and role hierarchies.",m,"Built-in Auth, Sessions & RBAC")
e=$.u_()
e=A.hI([n,o,i,f,m,b.ao(new A.e("#ec4899"),A.d(["Single binary deployment: No Node runtime dependencies","Instant sub-10ms container cold starts on Linux","Built-in static asset compression and caching headers"],p),"Compile your entire full-stack app into a single native AOT executable or lightweight 25MB Docker container with instant cold starts.",e,"Zero-Config Native Deployment")],"repeat(auto-fit, minmax(320px, 1fr))",24)
p=A.f(B.a,a,B.cl,B.a,B.a)
e=A.h(a,[e])
m=A.f(B.a,a,B.cw,B.a,B.a)
e=A.h(a,[j,new A.k(a1,p,e)])
p=A.a(a,a,a,a,a,new A.b(b0,a),a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.bg,a,a,a,a,a,new A.I(a6),B.b7,a,a,a,a,a,a,a,a,B.aT,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.I(a6),a,a,B.be,a)
j=A.aw([A.u("WHY CHOOSE DART FOR FULLSTACK",B.cp),A.al("Stack Comparison & Developer Experience",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.H("How Flint Dart stacks up against traditional ecosystems like Node.js, Next.js, Go Gin, and Python Django.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aM)
f=A.hI([b.bq("Single Native Binary (~25MB)",!0,"Pure Dart (Single Language)","< 0.5ms Async Core","Built-in ORM + RLS Security","Flint Dart","The Unified Stack","100% Shared End-to-End","Pure Dart Declarative + SSR"),b.bq("Heavy Node.js + node_modules",!1,"TypeScript + Node Runtime","~12ms Cold Overhead","Prisma / Drizzle third-party","Next.js / Node","JS/TS Ecosystem","Fragile npm ecosystem drift","React JSX + Server Components"),b.bq("Single Go Binary",!1,"Go (Backend) + JS (Frontend)","< 0.5ms Compiled","Gorm third-party","Go + Gin / Fiber","Backend Only","Requires code generation (OpenAPI)","Split stack (React/Vue needed)"),b.bq("Interpreted / Heavy venv",!1,"Python (Backend) + JS (Frontend)","~25ms Interpreter overhead","Django ORM","Python / Django","Classic MVC","Dynamic / Partial type hints","HTML Django templates")],"repeat(auto-fit, minmax(260px, 1fr))",16)
i=A.f(B.a,a,B.hK,B.a,B.a)
f=A.h(a,[f])
p=A.f(B.a,a,p,B.a,B.a)
f=A.h(a,[j,new A.k(a1,i,f)])
i=A.aw([A.u("PRODUCTION-READY STARTERS",B.hI),A.al("Jumpstart Your Next Project in Seconds",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,34,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)),A.H("Pre-configured fullstack templates with auth, database seeders, declarative UI dashboards, and API routes.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,720,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a))],B.aM)
g=A.hI([b.bm(new A.e(a2),"flint create store --template=ecommerce","Full store with shopping cart, customer checkout, product catalogue, and order admin panel.",k,"Starter","E-Commerce Marketplace"),b.bm(new A.e(a3),"flint create saas_app --template=saas","Subscription billing ready, role permissions, analytics telemetry, and RLS tenant isolation.",$.cf(),"Popular","Multi-Tenant SaaS Admin"),b.bm(new A.e(a5),"flint create chat --template=realtime","WebSocket pub/sub rooms, live message streams, presence indicators, and notification tray.",g,"WebSocket","Real-Time Chat & Collab"),b.bm(new A.e(a4),"flint create publication --template=blog","Markdown publishing engine, comment threads, SEO metadata headers, and category archives.",$.fV(),"SSR & SEO","Multi-Author Blog & Media")],"repeat(auto-fit, minmax(280px, 1fr))",20)
k=A.f(B.a,a,B.cl,B.a,B.a)
g=A.h(a,[g])
j=A.f(B.a,a,B.cw,B.a,B.a)
g=A.h(a,[i,new A.k(a1,k,g)])
b2=A.a(a,a,a,a,a,A.aK(A.d([A.aY(B.cX,B.kv),new A.b(a7,a)],b2)),a,a,a,a,a,a,new A.m(1,new A.b(a9,a),a0),a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.bg,a,a,a,a,a,new A.I(a6),B.b7,a,a,a,a,a,a,a,a,B.aT,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.I(a6),a,a,B.be,a)
k=A.a(a,B.c,a,a,a,new A.b(b0,a),a,new A.m(1,B.I,a0),a,a,a,a,a,a,a,a,a,a,a,a,B.d,a,a,a,B.u,a,a,a,a,a,a,a,a,18,a,a,a,a,a,a,a,a,a,a,a,a,B.at,a,a,820,a,a,a,a,a,a,a,a,a,B.bo,a,20,a,a,a,a,a,new A.at(20,50,-15,new A.e("rgba(16, 185, 129, 0.2)")),a,B.P,a,a,a,a,a,a,a,a,a,a,a,a,a)
i=A.a(a,B.c,a,a,a,new A.e("rgba(16, 185, 129, 0.15)"),a,a,a,a,a,a,a,a,a,a,new A.e(a2),a,a,a,B.e,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,a,B.q,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,12,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,48,a,a,a,a)
o=A.F($.kc(),a,24)
i=A.f(B.a,a,i,B.a,B.a)
o=A.h(o,B.h)
n=A.al("Start Building Fullstack Dart Apps Today",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(a8,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,32,900,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a))
d=A.H("Install the Flint CLI, create your first project, and deploy native binaries in minutes.",A.a(a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,new A.b(b1,a),a,a,a,a,a,a,a,a,a,a,a,a,a,a,16,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,580,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a))
c=A.a(a,B.c,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,B.k,a,a,a,a,a,a,a,a,a,a,15,900,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,46,a,a,a,a,a,a,a,B.iy,a,8,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a)
c=A.qn([A.Y(a,[A.u("Read Installation Guide",a),A.F($.bz(),a,18)],c,"/guides/installation",a,B.i,a),A.Y(a,[A.F($.dl(),a,16),A.u("GitHub Repository",a)],B.ba,"https://github.com/flint-dart/flint_dart",a,B.B,B.H)],B.ig,12)
k=A.f(B.a,a,k,B.a,B.a)
c=A.h(a,[new A.k(a1,i,o),n,d,c])
b2=A.f(B.a,a,b2,B.a,B.a)
c=A.h(a,[new A.k(a1,k,c)])
return new A.aD(b.c,new A.k(a1,A.f(B.a,a,b3,B.a,B.a),A.h(a,[new A.k(a1,r,q),new A.k(a1,l,h),new A.k(a1,m,e),new A.k(a1,p,f),new A.k(a1,j,g),new A.k(a1,b2,c)])))},
fX(a){var s,r,q,p,o,n,m,l=null,k=A.a(l,B.c,l,l,l,new A.e("rgba(16, 185, 129, 0.12)"),l,new A.m(1,new A.e("rgba(16, 185, 129, 0.28)"),"solid"),l,l,l,l,l,l,l,l,new A.e("#10b981"),l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,900,8,l,l,l,l,l,l,l,l,0.5,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.aU,l,999,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),j=A.F($.cf(),new A.e("#10b981"),15),i=A.u("FLINT DART FULL-STACK WEB FRAMEWORK",l)
k=A.f(B.a,l,k,B.a,B.a)
i=A.h(l,[j,i])
j=A.ba("Server, ORM, Web UI & Realtime. All Pure Dart.",A.a(l,l,l,l,l,A.aX(110,B.kK),B.aC,l,l,l,l,l,l,l,l,l,new A.e("transparent"),l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.nc,900,l,l,l,l,l,l,l,l,l,l,l,l,1.05,B.bm,l,l,820,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.aC,l,l,l,l,l,l))
s=A.al("Build end-to-end full-stack web applications without JavaScript fatigue.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.text",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,22,800,l,l,l,l,l,l,l,l,l,l,l,l,1.35,B.bm,l,l,720,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.H("A cohesive web platform providing sub-millisecond controller routing, declarative pure-Dart UI components with SSR, type-safe ORM query builders, Row-Level Security, and bidirectional WebSockets in one unified runtime.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,B.aR,l,l,680,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
q=A.a(l,B.c,l,l,new A.d5("blur("+A.G(14,!1)+")"),new A.e("rgba(3, 7, 18, 0.78)"),l,new A.m(1,new A.e("rgba(56, 189, 248, 0.25)"),"solid"),l,l,l,l,l,l,l,l,B.r,l,l,l,B.d,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,B.n,l,l,l,l,l,l,B.bn,l,l,600,l,l,l,l,l,l,l,l,l,B.aP,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.I("100%"),l,l,l,l)
p=A.w([A.u("$",B.cd),A.u(a,B.id)],B.cg)
o=this.e
n=o?new A.e("rgba(16, 185, 129, 0.25)"):new A.e("rgba(255, 255, 255, 0.1)")
m=o?new A.e("#34d399"):B.r
m=A.a(l,B.c,l,l,l,n,l,l,l,l,l,l,l,l,l,l,m,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,12,800,6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.bq,l,6,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b3("all 150ms ease"),l,l,l,l,l,l,l)
n=o?$.fW():$.fX()
n=A.F(n,o?new A.e("#34d399"):B.r,13)
o=A.av(l,[n,A.u(this.e?"Copied":"Copy",l)],m,!1,!1,new A.lI(this,a),B.a,B.N,B.i,B.C)
q=A.f(B.a,l,q,B.a,B.a)
o=A.h(l,[p,o])
p=A.a(l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,15,900,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,46,l,l,l,l,l,l,l,B.cF,l,8,l,l,l,l,l,new A.at(12,32,-10,new A.e("rgba(16, 185, 129, 0.5)")),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
return A.aw([new A.k("div",k,i),j,s,r,new A.k("div",q,o),A.qn([A.Y(l,[A.u("Quickstart in 30s",l),A.F($.bz(),l,18)],p,"/guides/installation",l,B.i,l),A.Y(l,[A.F($.fV(),l,16),A.u("Full API Reference",l)],B.ba,"/api",l,B.B,B.H),A.Y(l,[A.F($.c4(),l,16),A.u("Live Examples",l)],B.ct,"/examples",l,B.B,B.C)],B.cz,12)],B.ci)},
fY(a){var s,r,q,p,o,n,m,l,k=this,j=null,i="solid",h="div",g="rgba(255, 255, 255, 0.1)",f="rgba(255, 255, 255, 0.03)",e=A.a(j,j,j,j,j,new A.e("#050b0a"),j,new A.m(1,new A.e("rgba(56, 189, 248, 0.25)"),i),j,j,j,j,j,j,j,j,B.r,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.v,j,j,j,j,B.Z,12,j,j,j,j,j,new A.at(28,70,-28,new A.e("rgba(0, 0, 0, 0.8)")),j,j,j,j,j,j,j,j,j,j,new A.I("100%"),j,j,j,2),d=A.a(j,B.c,j,j,j,new A.e(f),j,j,new A.m(1,new A.e(g),i),j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,12,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.aP,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),c=A.w([new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,B.aZ,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.h(j,B.h)),new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,B.aH,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.h(j,B.h)),new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,B.I,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,10,j,j,j,j),B.a,B.a),A.h(j,B.h))],B.cA),b=[]
for(s=0;r=$.r3(),s<4;++s){q=k.d===s
p=q?900:600
o=q?B.r:B.K
n=q?new A.e(g):B.x
m=q?new A.m(2,r[s].f,i):B.bA
l=r[s]
q=q?l.f:B.aI
q=A.F(l.e,q,13)
r=r[s]
b.push(A.av(j,[q,new A.a8("span",A.f(B.a,j,j,B.a,B.a),A.h(r.a,B.h))],new A.l(B.ao,j,j,j,j,j,j,j,B.k,6,B.c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,12,p,j,j,o,j,j,j,j,j,j,j,j,j,n,6,j,j,j,m,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j),!1,!1,new A.lK(k,s),B.a,B.N,B.i,B.C))}b=A.w(b,B.c9)
r=k.f
q=r?new A.e("#34d399"):new A.e("#94a3b8")
q=A.a(j,j,j,j,j,new A.e("rgba(255, 255, 255, 0.05)"),j,j,j,j,j,j,j,j,j,j,q,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.cO,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,28,j,j,j,j)
q=A.av(j,[A.F(r?$.fW():$.fX(),j,13)],q,!1,!1,new A.lL(k,a),B.a,B.N,B.i,B.C)
d=A.f(B.a,j,d,B.a,B.a)
q=A.h(j,[c,b,q])
b=A.a(j,B.c,j,j,j,new A.e("rgba(255, 255, 255, 0.02)"),j,j,new A.m(1,new A.e("rgba(255, 255, 255, 0.06)"),i),j,j,j,j,j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.an,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
c=a.f
p=A.w([A.F(a.e,c,16),A.fa(a.b,B.cc),A.u("\u2022 "+a.c,B.cm)],B.a1)
o=A.a(j,j,j,j,j,new A.e("rgba(16, 185, 129, 0.15)"),j,j,j,j,j,j,j,j,j,j,new A.e("#34d399"),j,j,j,j,j,j,j,j,j,j,j,j,j,j,11,800,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.cJ,j,4,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
n=A.u(a.d,j)
o=A.f(B.a,j,o,B.a,B.a)
n=A.h(j,[n])
b=A.f(B.a,j,b,B.a,B.a)
n=A.h(j,[p,new A.k(h,o,n)])
o=k.fM(a.x)
p=A.f(B.a,j,B.h_,B.a,B.a)
o=A.h(j,[o])
m=A.a(j,B.c,j,j,j,new A.e(f),j,j,j,j,j,j,new A.m(1,new A.e("rgba(255, 255, 255, 0.08)"),i),j,j,j,j,j,j,j,B.d,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.n,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,B.an,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j)
c=A.w([new A.k(h,A.f(B.a,j,A.a(j,j,j,j,j,c,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,999,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,6,j,j,j,j),B.a,B.a),A.h(j,B.h)),A.u(a.r,B.c8)],B.a1)
l=A.u("Flint Dart Full-Stack",B.cx)
m=A.f(B.a,j,m,B.a,B.a)
l=A.h(j,[c,l])
return new A.k(h,A.f(B.a,j,e,B.a,B.a),A.h(j,[new A.k(h,d,q),new A.k(h,b,n),new A.k(h,p,o),new A.k(h,m,l)]))},
aL(a,b,c,d,e,f){var s,r=null,q=A.a(r,r,r,r,r,new A.b("color.panel",r),r,new A.m(1,new A.b("color.line",r),"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.d,r,r,r,B.u,r,r,r,r,r,r,r,r,10,r,r,r,A.a(r,r,r,r,r,r,r,new A.m(1,a,"solid"),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.be("translateY("+A.G(-3,!1)+")"),r,r,r,r,r,r,r,r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ab,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b3("all 180ms ease"),r,r,r,r,r,r,r),p=A.a(r,B.c,r,r,r,new A.e("rgba(16, 185, 129, 0.12)"),r,r,r,r,r,r,r,r,r,r,a,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,r,r,B.q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,r,r,r,r),o=A.F(c,r,18)
o=A.w([new A.k("div",A.f(B.a,r,p,B.a,B.a),A.h(o,B.h)),A.u(d,B.hU)],B.b9)
p=A.aw([A.fa(f,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,900,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),A.u(e,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,a,r,r,r,r,r,r,r,r,r,r,r,r,r,r,12,700,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))],B.cq)
s=A.H(b,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.b("color.muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.5,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r))
return new A.k("div",A.f(B.a,r,q,B.a,B.a),A.h(r,[o,p,s]))},
ao(a,b,c,d,e){var s,r,q,p,o,n,m,l=null,k="color.line",j="color.text"
t.a.a(b)
s=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b(k,l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,l,l,B.u,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.a2,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=A.a(l,B.c,l,l,l,new A.e("rgba(16, 185, 129, 0.14)"),l,l,l,l,l,l,l,l,l,l,a,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,40,l,l,B.q,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,40,l,l,l,l)
q=A.F(d,l,20)
q=A.w([new A.k("div",A.f(B.a,l,r,B.a,B.a),A.h(q,B.h)),A.bf(e,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(j,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,17,900,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))],B.cy)
r=A.H(c,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b("color.muted",l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,1.6,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
p=A.a(l,l,l,l,l,l,l,l,l,l,l,l,new A.m(1,new A.b(k,l),"solid"),l,l,l,l,l,l,l,B.d,l,l,l,B.u,l,l,l,l,l,l,l,l,6,l,l,l,l,l,l,l,l,l,l,l,l,B.j7,l,l,l,l,l,l,l,l,l,l,l,l,B.cG,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o=[]
for(n=0;n<3;++n){m=b[n]
o.push(A.w([A.F($.fW(),a,14),new A.a8("span",A.f(B.a,l,new A.l(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,600,l,l,new A.b(j,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),B.a,B.a),A.h(m,B.h))],B.a1))}p=A.f(B.a,l,p,B.a,B.a)
o=A.h(l,o)
return new A.k("div",A.f(B.a,l,s,B.a,B.a),A.h(l,[q,r,new A.k("div",p,o)]))},
bq(a,b,c,d,e,f,g,h,i){var s,r,q,p,o,n,m,l=this,k=null,j=b?new A.m(2,B.I,"solid"):new A.m(1,new A.b("color.line",k),"solid")
j=A.a(k,k,k,k,k,b?new A.e("rgba(16, 185, 129, 0.06)"):new A.b("color.bg",k),k,j,k,k,k,k,k,k,k,k,k,k,k,k,B.d,k,k,k,B.u,k,k,k,k,k,k,k,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.X,k,12,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
s=A.fa(f,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,b?B.I:new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,18,900,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=b?new A.e("rgba(16, 185, 129, 0.2)"):new A.e("rgba(255, 255, 255, 0.08)")
r=A.a(k,k,k,k,k,r,k,k,k,k,k,k,k,k,k,k,b?new A.e("#34d399"):new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,11,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.cL,k,4,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=A.u(g,k)
q=A.w([s,new A.k("div",A.f(B.a,k,r,B.a,B.a),A.h(k,[q]))],B.b9)
r=l.ap("Language Stack",c,b)
s=l.ap("Type Consistency",h,b)
p=l.ap("HTTP Latency",d,b)
o=l.ap("Deployment Artifact",a,b)
n=l.ap("Frontend UI",i,b)
m=l.ap("ORM & Security",e,b)
return new A.k("div",A.f(B.a,k,j,B.a,B.a),A.h(k,[q,r,s,p,o,n,m]))},
ap(a,b,c){var s=null,r=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),q=c?800:500
return A.aw([r,A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,c?B.r:new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.cq)},
bm(a,b,c,d,e,f){var s,r,q=null,p="div",o=A.a(q,q,q,q,q,new A.b("color.panel",q),q,new A.m(1,new A.b("color.line",q),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,B.u,q,q,q,q,q,q,q,q,16,q,q,q,q,q,B.n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.X,q,12,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a(q,B.c,q,q,q,new A.e("rgba(16, 185, 129, 0.12)"),q,q,q,q,q,q,q,q,q,q,a,q,q,q,B.e,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,36,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,8,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,36,q,q,q,q),m=A.F(d,q,18)
n=A.f(B.a,q,n,B.a,B.a)
m=A.h(m,B.h)
s=A.a(q,q,q,q,q,new A.e("rgba(16, 185, 129, 0.15)"),q,q,q,q,q,q,q,q,q,q,a,q,q,q,q,q,q,q,q,q,q,q,q,q,q,11,800,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.cJ,q,4,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.u(e,q)
r=A.aw([A.w([new A.k(p,n,m),new A.k(p,A.f(B.a,q,s,B.a,B.a),A.h(q,[r]))],B.b9),A.fa(f,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.text",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,16,900,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.H(c,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new A.b("color.muted",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,13,q,q,q,q,q,q,q,q,q,q,q,q,q,1.5,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))],B.hw)
s=A.a(q,B.c,q,q,q,new A.e("rgba(0, 0, 0, 0.4)"),q,new A.m(1,new A.e("rgba(255, 255, 255, 0.08)"),"solid"),q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.br,q,6,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.u(b,B.hR)
n=A.av(q,[A.F($.fX(),B.K,12)],B.hV,!1,!1,new A.lM(this,b),B.a,B.N,B.i,B.C)
s=A.f(B.a,q,s,B.a,B.a)
n=A.h(q,[m,n])
return new A.k(p,A.f(B.a,q,o,B.a,B.a),A.h(q,[r,new A.k(p,s,n)]))},
fM(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.db.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.cS(""+q,2)
o=A.f(B.a,h,B.b5,B.a,B.a)
p=A.h(p,B.h)
n=[]
if(!(r<a.length))return A.v(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aJ)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a8("span",A.f(B.a,h,new A.l(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.h(j.a,B.h)))}s.push(A.w([new A.a8("span",o,p),new A.k("div",A.f(B.a,h,B.b8,B.a,B.a),A.h(h,n))],B.bh))}return A.aw(s,B.bf)}}
A.lG.prototype={
$0(){return this.a.e=!0},
$S:0}
A.lH.prototype={
$0(){var s=this.a
s.p(new A.lF(s))},
$S:0}
A.lF.prototype={
$0(){return this.a.e=!1},
$S:0}
A.lD.prototype={
$0(){return this.a.f=!0},
$S:0}
A.lE.prototype={
$0(){var s=this.a
s.p(new A.lC(s))},
$S:0}
A.lC.prototype={
$0(){return this.a.f=!1},
$S:0}
A.lI.prototype={
$1(a){A.ab(a)
return this.a.dD(this.b)},
$S:1}
A.lK.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.lJ(s,this.b))},
$S:1}
A.lJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.lL.prototype={
$1(a){A.ab(a)
return this.a.fL(this.b.w)},
$S:1}
A.lM.prototype={
$1(a){A.ab(a)
return this.a.dD(this.b)},
$S:1}
A.jh.prototype={}
A.fj.prototype={}
A.ji.prototype={}
A.d_.prototype={
gdG(){var s=J.P(this.c,"initialSection")
s=s==null?null:J.t(s)
return s==null?"introduction":s},
a4(){if(this.e)this.bk(this.gdG())},
bk(a){var s=0,r=A.bj(t.H),q=1,p=[],o=this,n,m,l,k,j
var $async$bk=A.bk(function(b,c){if(b===1){p.push(c)
s=q}for(;;)switch(s){case 0:l=B.kZ.j(0,a)
k=l==null?a:l
q=3
s=6
return A.b5($.cg().eI(0,"/api/guides/section/"+A.Z(k),t.P),$async$bk)
case 6:n=c
if(n.f&&n.b!=null)o.p(new A.lP(o,n))
else o.p(new A.lQ(o))
q=1
s=5
break
case 3:q=2
j=p.pop()
o.p(new A.lR(o))
s=5
break
case 2:s=1
break
case 5:return A.bh(null,r)
case 1:return A.bg(p.at(-1),r)}})
return A.bi($async$bk,r)},
E(){var s,r,q=this,p=null,o=q.c,n=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(p,B.o,p,B.o),p,p,1152,p,p,p,p,p,p,p,p,p,new A.i(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.I("100%"),p,p,p,p),m=A.a(p,B.E,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,B.u,p,p,p,p,p,p,p,p,20,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a3,p,p,p,p,p,p,p,p,32,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.rk(q.gdG(),!1),k=q.e,j=q.d,i=J.ao(o),h=i.j(o,"previousGuideTitle")
h=h==null?p:J.t(h)
s=i.j(o,"previousGuideUrl")
s=s==null?p:J.t(s)
r=i.j(o,"nextGuideTitle")
r=r==null?p:J.t(r)
i=i.j(o,"nextGuideUrl")
m=A.w([l,new A.hJ(k,j,h,s,r,i==null?p:J.t(i))],m)
return new A.aD(o,new A.k("div",A.f(B.a,p,n,B.a,B.a),A.h(p,[m])))}}
A.lP.prototype={
$0(){var s=this.a,r=this.b.b
r.toString
r=J.P(r,"html")
r=r==null?null:J.t(r)
s.d=r==null?"":r
s.e=!1},
$S:0}
A.lQ.prototype={
$0(){this.a.e=!1},
$S:0}
A.lR.prototype={
$0(){this.a.e=!1},
$S:0}
A.dG.prototype={
fs(a){A.fT(a)
this.p(new A.lZ(this))
A.bO(B.aa,new A.m_(this))},
fq(a){A.fT(a)
this.p(new A.lW(this))
A.bO(B.aa,new A.lX(this))},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="solid",a2="div",a3="#f97316",a4="#fbbf24",a5="#38bdf8",a6="#10b981",a7="Differential Drive",a8="240 MHz (Dual Core)",a9=$.r2(),b0=a.d
if(!(b0<4))return A.v(a9,b0)
s=a9[b0]
b0=A.a(a0,B.c,a0,a0,a0,new A.b("color.bg",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.b("color.text",a0),a0,a0,a0,B.d,a0,a0,a0,B.u,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.m,a0,a0,a0,a0)
a9=a.h_(s)
r=A.a(a0,a0,a0,a0,a0,B.af,a0,a0,new A.m(1,B.b1,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ah,a0,a0,a0,a0,a0,B.m,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,B.aq,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.m,a0,a0,B.am,a0)
q=A.a(a0,B.c,a0,a0,a0,B.a8,a0,new A.m(1,B.ag,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.k,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ap,a0,999,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
p=$.cf()
o=A.F(p,B.A,14)
n=A.u("COMPILATION & TARGET SYNTHESIS",B.ai)
n=A.aw([new A.k(a2,A.f(B.a,a0,q,B.a,B.a),A.h(a0,[o,n])),A.al("End-to-End Hardware Execution Pipeline",B.aN),A.H("From high-level declarative Dart definitions to bare-metal C99, quantized TFLite inference, and instant Wokwi browser circuits.",B.aO)],B.cf)
o=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,16,a0,B.D,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.aB("repeat("+A.O(5,!0)+", "+A.O(B.y,!1)+")"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
q=$.dl()
m=a.aO(a3,"Sensors, actuators, TFLite models, and BLE services configured in pure Dart.",q,"01","Declarative Dart")
l=$.ke()
k=a.aO(a4,"Static validation of pin multiplexing, PWM timers, and memory arena limits.",l,"02","AST & Pin Arbiter")
j=$.bR()
i=a.aO(a5,"High-speed transpilation into zero-overhead C99, C++, MicroPython, and ROS 2 nodes.",j,"03","C99 / ROS 2 Gen")
h=$.q4()
g=a.aO(a6,"Instant browser simulation or serial flashing to ESP32, nRF52840, or STM32.",h,"04","Wokwi & Flash")
f=$.cP()
e=a.aO("#a855f7","Live BLE telemetry sync to Flint Server DB and real-time mesh swarm broadcast.",f,"05","Swarm & Telemetry")
o=A.f(B.a,a0,o,B.a,B.a)
e=A.h(a0,[m,k,i,g,e])
r=A.f(B.a,a0,r,B.a,B.a)
e=A.h(a0,[n,new A.k(a2,o,e)])
o=A.a(a0,B.c,a0,a0,a0,B.a8,a0,new A.m(1,B.ag,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.k,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ap,a0,999,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
n=A.F(l,B.A,14)
g=A.u("ROBOTICS ARCHITECTURE",B.ai)
g=A.aw([new A.k(a2,A.f(B.a,a0,o,B.a,B.a),A.h(a0,[n,g])),A.al("Engineered for Precision, Edge AI & Swarms",B.aN),A.H("Flint Hardware bridges high-level Dart programming with the strictest demands of embedded microcontrollers.",B.aO)],B.co)
n=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
n=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,24,a0,B.D,a0,a0,a0,a0,a0,a0,a0,A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.aB("repeat("+A.O(3,!0)+", "+A.O(B.y,!1)+")"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,n,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
o=$.cw()
i=t.s
k=a.aq(a3,"BoardTarget",A.d(["Type-safe BoardTarget enum definitions","Automatic pin map mapping for each MCU","Memory layout & flash partition validation"],i),"Target ESP32, ESP32-S3/CAM, nRF52840, STM32F4, and Raspberry Pi Pico from a unified codebase.",o,"Universal MCU Targets")
m=a.aq(a4,"TFLite Micro",A.d(["On-board OV2640 / OV3660 camera drivers","Int8 tensor arena allocation & quantization","15+ FPS on-device person/object detection"],i),"Run quantized TensorFlow Lite Micro models and stream camera frames with zero memory copies.",j,"Edge AI & Computer Vision")
p=a.aq(a5,a7,A.d(["L298N & TB6612FNG H-bridge drivers","Precise 50Hz PWM radar sweeping servos","Encoder odometry & PID closed-loop velocity"],i),"Orchestrate 2-wheel/4-wheel differential drives, sweep radar servos, and stepper motor actuators.",p,"Robotics Kinematics & Motor Drivers")
l=a.aq(a6,"HC-SR04 & IMU",A.d(["HC-SR04 ultrasonic sonar distance driver","MPU6050 6-axis IMU over I2C bus","DHT22 / BME280 temperature & humidity sensors"],i),"Read ultrasonic distance, 6-axis gyro/accelerometers, and environmental telemetry concurrently.",l,"Sensor Fusion & Peripherals")
f=a.aq("#a855f7","SwarmId & BLE",A.d(["Zero-config radio mesh swarm broadcasting","Standard BLE Battery & Device Info services","Seamless real-time bridge to Flint Cloud DB"],i),"Create peer-to-peer self-healing robot swarms with typed channels and Bluetooth Low Energy telemetry.",f,"Wireless Swarm Mesh & BLE")
h=a.aq("#06b6d4","exportBundle()",A.d(["Generates diagram.json for Wokwi simulation","Publishes /cmd_vel and /scan ROS 2 topics","Zero external build tools needed to start"],i),"1-click export to complete C99/C++ codebases, ROS 2 pub/sub nodes, and Wokwi browser circuits.",h,"Wokwi & ROS 2 Code Export")
n=A.f(B.a,a0,n,B.a,B.a)
h=A.h(a0,[k,m,p,l,f,h])
f=A.f(B.a,a0,B.cj,B.a,B.a)
h=A.h(a0,[g,new A.k(a2,n,h)])
n=A.a(a0,a0,a0,a0,a0,B.af,a0,a0,a0,a0,a0,a0,new A.m(1,B.a8,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ah,a0,a0,a0,a0,a0,B.m,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,B.aq,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.m,a0,a0,B.am,a0)
g=A.a(a0,B.c,a0,a0,a0,B.a8,a0,new A.m(1,B.ag,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.k,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ap,a0,999,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
o=A.F(o,B.A,14)
l=A.u("SUPPORTED TARGETS",B.ai)
l=A.aw([new A.k(a2,A.f(B.a,a0,g,B.a,B.a),A.h(a0,[o,l])),A.al("Microcontroller Target Comparison Matrix",B.aN),A.H("Flint Hardware generates highly optimized C99 and register-level drivers for your target architecture.",B.aO)],B.cf)
o=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,16,a0,B.D,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.aB("repeat("+A.O(4,!0)+", "+A.O(B.y,!1)+")"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
g=a.bC(a3,"TFLite Quantized",a8,"BoardTarget.esp32Cam","Edge AI Vision & Security","ESP32-CAM","Wi-Fi + BLE 4.2","520 KB + 4MB PSRAM")
p=a.bC(a4,"Vector Extensions",a8,"BoardTarget.esp32","Autonomous Rovers & IoT","ESP32-S3 Node","Wi-Fi + BLE 5.0 + Mesh","512 KB + 8MB Flash")
m=a.bC(a5,"Low Power Telemetry","64 MHz (Cortex-M4)","BoardTarget.nrf52840","Swarm Beacons & Wearables","nRF52840 Dongle","BLE 5.3 + Thread","256 KB + 1MB Flash")
k=a.bC(a6,"Precision Steppers","133 MHz (Cortex-M0+)","BoardTarget.rp2040","Robotics Actuators & CNC","RP2040 Pico","Programmable PIO","264 KB + 2MB Flash")
o=A.f(B.a,a0,o,B.a,B.a)
k=A.h(a0,[g,p,m,k])
n=A.f(B.a,a0,n,B.a,B.a)
k=A.h(a0,[l,new A.k(a2,o,k)])
o=A.a(a0,B.c,a0,a0,a0,B.a8,a0,new A.m(1,B.ag,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.k,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ap,a0,999,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
l=A.F(j,B.A,14)
m=A.u("ROBOTICS STARTERS",B.ai)
m=A.aw([new A.k(a2,A.f(B.a,a0,o,B.a,B.a),A.h(a0,[l,m])),A.al("Production Hardware Starter Blueprints",B.aN),A.H("Instant starting points with pre-wired sensor pins, motor controllers, and simulation bundles.",B.aO)],B.co)
l=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
l=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,20,a0,B.D,a0,a0,a0,a0,a0,a0,a0,A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.aB("repeat("+A.O(4,!0)+", "+A.O(B.y,!1)+")"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,l,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
o=a.by(a3,"flint create guard --template=vision","ESP32-CAM with OV2640 camera & quantized TFLite Micro person detect pipeline.","Computer Vision","Edge AI Vision Guard")
p=a.by(a4,"flint create rover --template=rover","2-wheel obstacle-avoiding rover with ultrasonic sonar, 6-axis IMU, and Wokwi sim.",a7,"Autonomous Rover")
g=a.by(a5,"flint create beacon --template=swarm","nRF52840 low-power mesh node with BME280 sensor and BLE battery telemetry.","BLE Telemetry","Swarm Mesh Beacon")
i=a.by(a6,"flint create ros_bot --template=ros2","ESP32 robotics driver publishing /scan and subscribing to /cmd_vel kinematics.","ROS 2 Bridge","ROS 2 Teleop Node")
l=A.f(B.a,a0,l,B.a,B.a)
i=A.h(a0,[o,p,g,i])
g=A.f(B.a,a0,B.cj,B.a,B.a)
i=A.h(a0,[m,new A.k(a2,l,i)])
l=A.a(a0,a0,a0,a0,a0,B.af,a0,a0,a0,a0,a0,a0,new A.m(1,B.b1,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.ah,a0,a0,a0,a0,a0,B.m,B.aj,a0,a0,a0,a0,a0,a0,a0,a0,B.aq,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.m,a0,a0,B.am,a0)
m=A.a(a0,a0,a0,a0,a0,B.eH,a0,new A.m(1,B.bR,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.c6,a0,a0,a0,a0,a0,a0,a0,a0,B.bo,a0,24,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.m,a0,a0,a0,a0)
p=A.a(a0,B.c,a0,a0,a0,B.b1,a0,new A.m(1,B.f7,a1),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.d,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,56,a0,a0,B.q,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,999,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,56,a0,a0,a0,a0)
j=A.F(j,B.A,28)
p=A.f(B.a,a0,p,B.a,B.a)
j=A.h(a0,[j])
o=A.al("Start Building Hardware with Pure Dart Today",B.ft)
d=A.H("Join engineers building autonomous rovers, Edge AI cameras, and swarm robotics without fighting C++ pointers or fragmented toolchains.",B.hz)
c=A.a(a0,B.c,a0,a0,a0,B.A,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.Q,a0,a0,a0,B.k,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,14,800,8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.iA,a0,12,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
c=A.Y(a0,[A.u("Read Hardware Guides",B.bc),A.F($.bz(),B.Q,16)],c,"/guides",a0,B.i,a0)
b=A.a(a0,B.c,a0,a0,a0,B.bX,a0,new A.m(1,B.bN,a1),a0,a0,a0,a0,a0,a0,a0,a0,B.r,a0,a0,a0,B.k,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,14,700,8,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.cI,a0,12,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
b=A.aw([new A.k(a2,p,j),o,d,A.w([c,A.Y(a0,[A.F(q,B.W,16),A.u("View GitHub Source",a0)],b,"https://github.com/flint-dart/flint_hardware",a0,B.i,a0)],B.i3)],B.fp)
m=A.f(B.a,a0,m,B.a,B.a)
b=A.h(a0,[b])
l=A.f(B.a,a0,l,B.a,B.a)
b=A.h(a0,[new A.k(a2,m,b)])
return new A.aD(a.c,new A.k(a2,A.f(B.a,a0,b0,B.a,B.a),A.h(a0,[a9,new A.k(a2,r,e),new A.k(a2,f,h),new A.k(a2,n,k),new A.k(a2,g,i),new A.k(a2,l,b)])))},
h_(a0){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="color.line",e="color.bg",d="color.panel",c="color.text",b=t.f,a=A.a(i,i,i,i,i,A.aK(A.d([A.aY(B.d1,B.km),A.aY(B.d0,B.ki),A.aX(155,B.kD)],b)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
a=A.a(i,i,i,i,i,new A.b(e,i),i,i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,A.aK(A.d([A.aY(B.bu,B.ks),A.aY(B.cY,B.kj),A.aX(160,A.d([new A.K(new A.b(e,i),0),new A.K(new A.b(d,i),55),new A.K(new A.b("color.panelStrong",i),100)],b))],b)),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,a,i,i,i,i,i,i,i,i,i,i,B.v,i,i,i,i,B.Z,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m,i,i,i,i)
b=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,40,i,B.D,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,48,i,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,64,i,new A.aB("repeat("+A.O(2,!0)+", "+A.O(B.y,!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i)
s=A.a(i,B.c,i,i,i,B.a8,i,new A.m(1,B.ag,h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.cN,i,999,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.f(B.a,i,B.fI,B.a,B.a)
q=A.h(i,B.h)
p=A.u("FLINT HARDWARE & ROBOTICS",B.ai)
o=A.u("\u2022",B.hY)
n=A.u("BARE-METAL DART",B.fw)
s=A.f(B.a,i,s,B.a,B.a)
n=A.h(i,[new A.k(g,r,q),p,o,n])
o=A.ba("Declarative Robotics, Edge AI & Embedded Systems in Pure Dart.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(c,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,36,900,i,i,i,i,i,i,i,i,i,-0.8,i,i,1.12,B.l,i,i,i,B.fv,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.fG,i))
p=A.H("Build autonomous rovers, Edge AI computer vision pipelines, wireless swarm meshes, and multi-sensor telemetry\u2014with compile-time safety, zero runtime bloat, and instant 1-click Wokwi simulation export.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.muted",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.7,B.l,i,i,i,B.ia,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.a(i,B.c,i,i,i,B.Q,i,new A.m(1,B.bR,h),i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,520,i,i,i,i,i,i,i,i,i,B.an,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m,i,i,i,i)
r=A.w([A.u("$",B.fz),A.u("dart pub add flint_hardware",B.hv)],B.fQ)
m=j.e
l=m?B.bJ:B.U
l=A.a(i,i,i,i,i,l,i,i,i,i,i,i,i,i,i,i,m?B.I:B.r,i,i,i,i,i,i,i,i,i,i,i,i,i,i,11,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.aU,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.av(i,[A.u(m?"COPIED!":"COPY",i)],l,!1,!1,new A.m3(j),B.a,B.N,B.i,B.C)
q=A.f(B.a,i,q,B.a,B.a)
l=A.h(i,[r,l])
r=A.a(i,B.c,i,i,i,B.A,i,i,i,i,i,i,i,i,i,i,B.Q,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,14,800,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.cI,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.Y(i,[A.u("Explore Hardware SDK",B.bc),A.F($.bz(),B.Q,16)],r,"/guides",i,B.i,i)
k=A.a(i,B.c,i,i,i,new A.b(d,i),i,new A.m(1,new A.b(f,i),h),i,i,i,i,i,i,i,i,new A.b(c,i),i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,14,700,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.cH,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
b=A.w([A.aw([new A.k(g,s,n),o,p,new A.k(g,q,l),A.w([r,A.Y(i,[A.F($.q4(),B.W,16),A.u("Launch Simulator",i)],k,"https://wokwi.com",i,B.i,i)],B.i1),A.w([j.bp($.bR(),"Sub-ms Loop Latency",B.A),j.bp($.cw(),"ESP32 \u2022 nRF \u2022 STM32 \u2022 RP2040",B.W),j.bp($.cf(),"TFLite Micro Quantization",B.L),j.bp($.ke(),"C99 & ROS 2 Code Gen",B.I)],B.i8)],B.hg),j.fU(a0)],b)
k=A.f(B.a,i,B.cu,B.a,B.a)
b=A.h(i,[b])
return new A.k(g,A.f(B.a,i,a,B.a,B.a),A.h(i,[new A.k(g,k,b)]))},
bp(a,b,c){var s=null
return A.w([A.F(a,c,14),A.u(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))],B.fW)},
fU(a){var s,r,q,p,o,n=this,m=null,l="solid",k="div",j=A.a(m,m,m,m,m,B.eK,m,new A.m(1,B.f8,l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.v,m,m,m,m,m,20,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.m,m,m,m,m),i=A.a(m,B.c,m,m,m,B.af,m,m,new A.m(1,B.U,l),m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.n,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.cE,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),h=A.w([new A.k(k,A.f(B.a,m,A.a(m,m,m,m,m,B.aZ,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,999,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m),B.a,B.a),A.h(m,B.h)),new A.k(k,A.f(B.a,m,A.a(m,m,m,m,m,B.aH,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,999,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m),B.a,B.a),A.h(m,B.h)),new A.k(k,A.f(B.a,m,A.a(m,m,m,m,m,B.I,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,999,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m),B.a,B.a),A.h(m,B.h))],B.a1),g=[]
for(s=0;r=$.r2(),s<4;++s){q=n.d===s
p=q?B.c1:B.x
o=q?B.A:B.K
q=q?800:600
r=r[s]
g.push(A.av(m,[new A.a8("span",A.f(B.a,m,m,B.a,B.a),A.h(r.a,B.h))],new A.l(B.ao,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,11,q,m,m,o,m,m,m,m,m,m,m,m,m,p,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),!1,!1,new A.m1(n,s),B.a,B.N,B.i,B.C))}g=A.w(g,B.h2)
r=n.f
q=r?B.bJ:B.bX
q=A.a(m,m,m,m,m,q,m,m,m,m,m,m,m,m,m,m,r?B.I:B.aJ,m,m,m,m,m,m,m,m,m,m,m,m,m,m,11,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ao,m,6,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.av(m,[A.u(r?"COPIED":"COPY",m)],q,!1,!1,new A.m2(n,a),B.a,B.N,B.i,B.C)
i=A.f(B.a,m,i,B.a,B.a)
q=A.h(m,[h,g,q])
g=A.a(m,B.c,m,m,m,B.eI,m,m,new A.m(1,B.bO,l),m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.n,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.iv,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
h=a.e
h=A.w([A.F(a.d,h,14),A.u(a.b,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],B.a1)
p=A.u(a.f,B.hb)
g=A.f(B.a,m,g,B.a,B.a)
p=A.h(m,[h,p])
h=n.hK(a.w)
o=A.f(B.a,m,B.hq,B.a,B.a)
h=A.h(m,[h])
return new A.k(k,A.f(B.a,m,j,B.a,B.a),A.h(m,[new A.k(k,i,q),new A.k(k,g,p),new A.k(k,o,h)]))},
hK(a){var s,r,q,p,o,n,m,l,k,j,i,h=null
t.c2.a(a)
s=[]
for(r=0;r<a.length;r=q){q=r+1
p=B.b.cS(""+q,2)
o=A.f(B.a,h,B.b5,B.a,B.a)
p=A.h(p,B.h)
n=[]
if(!(r<a.length))return A.v(a,r)
m=a[r].a
l=m.length
k=0
for(;k<m.length;m.length===l||(0,A.aJ)(m),++k){j=m[k]
i=j.c?800:400
n.push(new A.a8("span",A.f(B.a,h,new A.l(h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i,h,h,j.b,h,h,h,h,"pre",h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),B.a,B.a),A.h(j.a,B.h)))}s.push(A.w([new A.a8("span",o,p),new A.k("div",A.f(B.a,h,B.b8,B.a,B.a),A.h(h,n))],B.bh))}return A.aw(s,B.bf)},
aO(a,b,c,d,e){var s=null,r=A.a(s,s,s,s,s,B.eQ,s,new A.m(1,B.U,"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,B.u,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.ab,s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.a(s,B.c,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.n,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.m,s,s,s,s)
q=A.aw([A.w([A.u(d,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e(a),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,900,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.F(c,new A.e(a),16)],q),A.bf(e,B.fx),A.H(b,B.ca)],B.bd)
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))},
aq(a,b,c,d,e,f){var s,r,q,p,o,n,m,l,k,j,i=null,h="solid"
t.a.a(c)
s=A.eh(B.b.t(a,1,3),16)
r=A.eh(B.b.t(a,3,5),16)
q=A.eh(B.b.t(a,5,7),16)
p=A.a(i,i,i,i,i,B.ek,i,new A.m(1,B.U,h),i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,B.u,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a2,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
o=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.m,i,i,i,i)
n="rgba("+s+", "+r+", "+q
m=A.a(i,B.c,i,i,i,new A.e(n+", 0.15)"),i,new A.m(1,new A.e(n+", 0.35)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,38,i,i,B.q,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,38,i,i,i,i)
l=A.F(e,new A.e(a),18)
o=A.w([new A.k("div",A.f(B.a,i,m,B.a,B.a),A.h(i,[l])),A.u(b,A.a(i,i,i,i,i,new A.e(n+", 0.1)"),i,new A.m(1,new A.e(n+", 0.25)"),h),i,i,i,i,i,i,i,i,new A.e(a),i,i,i,i,i,i,i,i,i,i,i,i,i,i,10,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.cL,i,999,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],o)
n=A.bf(f,B.bb)
l=A.H(d,B.cs)
m=[]
for(k=0;k<3;++k){j=c[k]
m.push(A.w([A.F($.c4(),new A.e(a),10),new A.a8("span",A.f(B.a,i,B.fM,B.a,B.a),A.h(j,B.h))],B.h7))}o=A.aw([o,n,l,A.aw(m,B.fP)],B.c7)
return new A.k("div",A.f(B.a,i,p,B.a,B.a),A.h(i,[o]))},
bC(a,b,c,d,e,f,g,h){var s=this,r=null,q=A.a(r,r,r,r,r,B.b2,r,new A.m(1,B.U,"solid"),r,r,r,r,r,r,r,r,r,r,r,r,B.d,r,r,r,B.u,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.X,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r),p=A.aw([A.bf(f,B.bb),A.u(d,A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new A.e(a),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,800,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)),new A.k("div",A.f(B.a,r,B.cB,B.a,B.a),A.h(r,B.h)),s.bD("Clock",c),s.bD("Memory",h),s.bD("Radio",g),s.bD("AI Engine",b),new A.k("div",A.f(B.a,r,B.cB,B.a,B.a),A.h(r,B.h)),A.H("Best for: "+e,B.i4)],B.bd)
return new A.k("div",A.f(B.a,r,q,B.a,B.a),A.h(r,[p]))},
bD(a,b){var s=null,r=A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.n,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.m,s,s,s,s)
return A.w([A.u(a,B.hi),A.u(b,B.ho)],r)},
by(a,b,c,d,e){var s=null,r=A.a(s,s,s,s,s,B.b2,s,new A.m(1,B.U,"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.d,s,s,s,B.u,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.X,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.aw([A.u(d,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.e(a),s,s,s,s,s,s,s,s,s,s,s,s,s,s,10,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),A.bf(e,B.fN),A.H(c,B.ca)],B.hh),p=A.u(b,B.he),o=A.f(B.a,s,B.fX,B.a,B.a)
p=A.h(s,[p])
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,new A.k("div",o,p)]))}}
A.lZ.prototype={
$0(){return this.a.e=!0},
$S:0}
A.m_.prototype={
$0(){var s=this.a
s.p(new A.lY(s))},
$S:0}
A.lY.prototype={
$0(){return this.a.e=!1},
$S:0}
A.lW.prototype={
$0(){return this.a.f=!0},
$S:0}
A.lX.prototype={
$0(){var s=this.a
s.p(new A.lV(s))},
$S:0}
A.lV.prototype={
$0(){return this.a.f=!1},
$S:0}
A.m3.prototype={
$1(a){A.ab(a)
return this.a.fs("dart pub add flint_hardware")},
$S:1}
A.m1.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.m0(s,this.b))},
$S:1}
A.m0.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.m2.prototype={
$1(a){A.ab(a)
return this.a.fq(this.b.r)},
$S:1}
A.jl.prototype={}
A.fk.prototype={}
A.jm.prototype={}
A.dH.prototype={
E(){return new A.aD(this.c,new A.k("div",A.f(B.a,null,B.fu,B.a,B.a),A.h(null,[new A.eH(),new A.iR(),new A.ij(),new A.hl(),new A.ha(),new A.j_(),new A.hv()])))}}
A.d3.prototype={
gaf(){var s=t.fF.a(J.P(this.c,"question"))
s=s==null?null:J.b_(s,t.N,t.z)
return s==null?B.a5:s},
gc_(){var s=this.w.a
return s==null?this.gdI():s},
gdI(){var s,r,q=J.P(this.c,"answers")
if(t.j.b(q)){s=J.cx(q,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.nc()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V},
gbx(){var s=this.gaf().j(0,"slug")
s=s==null?null:J.t(s)
return s==null?"":s},
a4(){this.dv()
this.e1()},
bI(){this.dv()
this.e1()},
d2(){var s=this.w.b
if(s.a>0){s.b=s.c=s.d=s.e=s.f=null
s.a=0
s.c9()}s=this.z
if(s!=null){s.hV(0,1001,"Client disposed")
s.Q.bG(0)
B.f.bG(s.as)}s=this.y
if(s!=null)s.ag(0)},
E(){var s,r,q=this,p=null,o="Question",n="color.muted",m=q.c,l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,22,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(p,B.o,p,B.o),p,p,960,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,B.v,p,p,p,new A.i(34,16,34,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.I("100%"),p,p,p,p),k=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(28,28,28,28),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,0,p,p,p,p,p,p,new A.i(20,20,20,20),p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,B.j,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),i=q.gaf().j(0,"tag")
i=i==null?p:J.t(i)
if(i==null)i=o
s=A.f(B.a,p,A.a(p,p,p,p,p,new A.e("rgba(2, 132, 199, 0.08)"),p,new A.m(1,new A.e("rgba(2, 132, 199, 0.28)"),"solid"),p,p,p,p,p,p,p,p,new A.b("color.accent",p),p,B.fA,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(5,10,5,10),p,999,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),B.a,B.a)
i=A.h(i,B.h)
r=q.gaf().j(0,"date")
r=r==null?p:J.t(r)
if(r==null)r=""
j=A.w([new A.k("div",s,i),A.u(r,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],j)
r=q.gaf().j(0,"title")
i=r==null?p:J.t(r)
if(i==null)i=o
i=A.ba(i,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,29,p,p,p,p,p,p,p,p,p,p,p,p,p,1.2,new A.i(0,0,0,0),p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
s=q.gaf().j(0,"body")
s=s==null?p:J.t(s)
if(s==null)s=""
s=A.H(s,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.75,new A.i(0,0,0,0),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=q.gaf().j(0,"author")
r=r==null?p:J.t(r)
if(r==null)r="Community"
r=A.u("By "+r,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=[new A.k("div",A.f(B.a,p,k,B.a,B.a),A.h(p,[j,i,s,r])),new A.cG(q.w,new A.no(q),t.fp)]
k=J.ao(m)
if(!(J.ac(k.j(m,"isAuthenticated"),!0)||B.t.gV()!=null))r.push(A.h7("/questions","Back to Questions","Create an account or sign in to answer this question and help improve the Flint knowledge base.",!1,"Sign in to answer"))
else if(J.ac(k.j(m,"canAnswer"),!0)||A.dP(["admin","contributor","dev"],t.N).H(0,B.t.gak(0)))r.push(q.eX())
else r.push(A.H("Your account can read answers but cannot post yet.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.warning",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)))
return new A.aD(m,new A.k("div",A.f(B.a,p,l,B.a,B.a),A.h(p,r)))},
eY(a){var s,r,q,p,o,n,m,l,k=null
t.p.a(a)
s=A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.e,k,k,k,k,k,k,k,k,k,k,k,k,14,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
r=A.a(k,B.c,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.d,k,k,k,k,k,k,B.j,k,k,k,k,k,12,k,k,k,k,k,B.n,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
q=A.al("Answers",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.text",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,22,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.i(0,0,0,0),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
p=this.Q==="Live"
o=p?B.fh:B.et
n=p?B.b0:B.eu
o=A.a(k,B.c,k,k,k,n,k,new A.m(1,o,"solid"),k,k,k,k,k,k,k,k,k,k,k,k,B.k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,B.bq,k,999,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)
n=A.f(B.a,k,A.a(k,k,k,k,k,p?B.eP:B.W,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,999,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,7,k,k,k,k),B.a,B.a)
m=A.h(k,B.h)
l=this.Q
l=A.u(l,A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,p?new A.b("color.primary",k):new A.b("color.warning",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,12,800,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k))
r=[A.w([q,new A.k("div",A.f(B.a,k,o,B.a,B.a),A.h(k,[new A.k("div",n,m),l]))],r)]
q=J.ao(a)
if(q.gB(a))r.push(A.H("No answers yet. Be the first to help.",A.a(k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,new A.b("color.muted",k),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k)))
else for(q=q.gv(a);q.m();)r.push(this.eW(q.gq(q)))
return new A.k("div",A.f(B.a,k,s,B.a,B.a),A.h(k,r))},
eW(a){var s,r,q,p,o,n,m,l=null,k="color.muted"
t.P.a(a)
s=J.ao(a)
r=s.j(a,"id")
q=r==null?l:J.t(r)
p=J.ac(s.j(a,"can_edit"),!0)&&q!=null
o=q!=null&&this.x.H(0,q)
r=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b("color.line",l),"solid"),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(18,18,18,18),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,0,l,l,l,l,l,l,new A.i(16,16,16,16),l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
n=s.j(a,"body")
n=n==null?l:J.t(n)
if(n==null)n=""
n=A.H(n,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,1.7,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
m=A.a(l,B.c,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,l,l,l,l,l,B.j,l,l,l,l,l,12,l,l,l,l,l,B.n,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
s=s.j(a,"author")
s=s==null?l:J.t(s)
if(s==null)s="Community"
s=[A.u("By "+s,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(k,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))]
if(p)s.push(A.av(l,[A.F($.u6(),l,14),A.u("Delete",l)],l,!1,o,new A.mW(this,q),B.a,B.N,B.ni,B.C))
s=A.w(s,m)
return new A.k("div",A.f(B.a,l,r,B.a,B.a),A.h(l,[n,s]))},
eX(){var s,r,q,p,o=this,n=null,m=o.gaf().j(0,"slug"),l=m==null?n:J.t(m)
if(l==null)l=""
m=A.a(n,n,n,n,n,new A.b("color.panel",n),n,new A.m(1,new A.b("color.line",n),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,new A.i(22,22,22,22),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
q=o.f
if(q!=null){p=A.a(n,n,n,n,n,new A.e("rgba(248, 113, 113, 0.08)"),n,new A.m(1,new A.e("rgba(248, 113, 113, 0.35)"),"solid"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(12,12,12,12),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.H(q,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e("#fca5a5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r.push(new A.k("div",A.f(B.a,n,p,B.a,B.a),A.h(q,B.h)))}r.push(A.f8(o.d.Z(0,"body"),o.e,"Your answer","body","Share the fix, explanation, or example...",!0,7,$.uS()))
q=o.r
r.push(A.av(n,[A.F($.kd(),n,15),A.u("Post Answer",n)],n,!1,q,n,B.ax,B.z,B.i,B.a6))
s=A.eE(r,s,new A.mX(o,l))
return new A.k("div",A.f(B.a,n,m,B.a,B.a),A.h(n,[s]))},
aT(a,b){return this.hH(a,b)},
hH(a6,a7){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
var $async$aT=A.bk(function(a8,a9){if(a8===1){o.push(a9)
s=p}for(;;)switch(s){case 0:if(t.m.b(a6))a6.preventDefault()
if(n.r){s=1
break}n.p(new A.ni(n))
b=n.d
a=t.N
a0=A.a0(a,t.a)
a1=B.b.D(b.a0("body")).length
if(a1===0)a0.i(0,"body",A.d(["The body field is required."],t.s))
else if(a1<10)a0.i(0,"body",A.d(["The body must be at least 10 characters."],t.s))
a2=new A.bW(a0)
if(a0.gM(0)){g=n.cq(a2,"Please check your answer.")
n.p(new A.nj(n,a2))
B.p.P(0,"Answer not posted",g)
s=1
break}p=4
m=B.t.gV()
a1=$.cg()
a3=A.hf(b.b,a,t.X)
l=A.a0(a,a)
J.au(l,"Accept","application/json")
J.au(l,"X-Requested-With","FlintClient")
if(m!=null)J.au(l,"Authorization","Bearer "+m)
s=7
return A.b5(a1.aj("/questions/"+a7+"/answers",a3,l,t.P),$async$aT)
case 7:k=a9
j=k.b
s=k.f&&j!=null?8:9
break
case 8:i=J.P(j,"answer")
s=t.G.b(i)?10:12
break
case 10:n.d9(J.b_(i,a,t.z))
s=11
break
case 12:s=13
return A.b5(n.aQ(),$async$aT)
case 13:case 11:b.ix(0,A.d(["body"],t.s))
n.p(new A.nk(n))
B.p.ad("Answer posted","Added to the thread.")
s=1
break
case 9:h=A.ch(j)
l=j
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not post answer."
g=n.cq(h,l)
n.p(new A.nl(n,h,g))
B.p.P(0,"Answer not posted",g)
p=2
s=6
break
case 4:p=3
a5=o.pop()
l=A.aQ(a5)
if(l instanceof A.bU){f=l
e=n.dV(f)
d=A.ch(e)
l=e
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not post answer."
c=n.cq(d,l)
n.p(new A.nm(n,d,c))
B.p.P(0,"Answer not posted",c)}else{n.p(new A.nn(n))
B.p.P(0,"Answer not posted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$aT,r)},
cq(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb5()
s=A.Q(r).h("aS<2>")
return A.iE(new A.aS(r,s),3,s.h("o.E")).J(0," ")},
dV(a){var s=a.d
if(t.P.b(s))return s
if(t.G.b(s))return J.cQ(s,new A.nb(),t.N,t.z)
return null},
e1(){var s=this
if(s.gbx().length===0||s.y!=null)return
s.y=A.rH(B.iq,new A.nh(s))},
dv(){var s,r=this,q=r.gbx()
if(q.length===0||r.z!=null)return
s=$.cg().a.iL("/questions/"+q+"/live")
s.ai(0,"connect",new A.n2(r))
s.ai(0,"connected",new A.n3(r))
s.ai(0,"answer.created",new A.n4(r))
s.ai(0,"answer.deleted",new A.n5(r))
s.ai(0,"disconnect",new A.n6(r))
s.ai(0,"error",new A.n7(r))
s.ai(0,"reconnect_failed",new A.n8(r))
r.z=s
s.aW()},
aQ(){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
var $async$aQ=A.bk(function(a1,a2){if(a1===1){o.push(a2)
s=p}for(;;)switch(s){case 0:a=n.gbx()
if(J.bm(a)===0){s=1
break}p=4
m=B.t.gV()
f=$.cg()
e=A.Z(a)
d=t.N
l=A.a0(d,d)
J.au(l,"Accept","application/json")
if(m!=null)J.au(l,"Authorization","Bearer "+m)
d=t.P
s=7
return A.b5(f.d3(0,"/api/questions/"+e,l,d),$async$aQ)
case 7:k=a2
l=k.b
j=l==null?null:J.P(l,"answers")
if(!t.j.b(j)){s=1
break}l=J.cx(j,t.G)
f=l.$ti
d=A.bq(l,f.h("A<j,@>(o.E)").a(new A.nd()),f.h("o.E"),d)
c=A.aC(d,A.Q(d).h("o.E"))
i=c
h=B.J.aa(n.gc_(),null)
g=B.J.aa(i,null)
if(J.ac(h,g)){s=1
break}l=n.w
l.a=l.$ti.c.a(i)
l.bR()
p=2
s=6
break
case 4:p=3
a0=o.pop()
s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$aQ,r)},
d9(a){var s,r,q
t.P.a(a)
s=this.gc_()
r=a.j(0,"id")
q=r==null?null:J.t(r)
if(q!=null&&J.r6(s,new A.mU(q)))return
this.w.eC(0,new A.mV(s,a))},
bi(a){return this.fB(A.X(a))},
fB(a2){var s=0,r=A.bj(t.H),q,p=2,o=[],n=[],m=this,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
var $async$bi=A.bk(function(a3,a4){if(a3===1){o.push(a4)
s=p}for(;;)switch(s){case 0:a0=m.gbx()
if(J.bm(a0)===0||m.x.H(0,a2)){s=1
break}if(!A.eb(A.z(v.G.window).confirm("Delete this answer?"))){s=1
break}m.p(new A.n9(m,a2))
p=4
l=B.t.gV()
e=$.cg()
d=A.Z(a0)
c=t.N
k=A.a0(c,c)
J.au(k,"Accept","application/json")
J.au(k,"X-Requested-With","FlintClient")
if(l!=null)J.au(k,"Authorization","Bearer "+l)
s=7
return A.b5(e.ir("/questions/"+d+"/answers/"+a2+"/delete",k,t.P),$async$bi)
case 7:j=a4
if(j.f){m.dW(a2)
B.p.ad("Answer deleted","Removed from the thread.")}else{k=j.b
if(k==null)b=null
else{k=J.P(k,"message")
k=k==null?null:J.t(k)
b=k}i=b==null?"Could not delete answer.":b
B.p.P(0,"Delete failed",i)}n.push(6)
s=5
break
case 4:p=3
a1=o.pop()
k=A.aQ(a1)
if(k instanceof A.bU){h=k
g=m.dV(h)
k=g
if(k==null)i=null
else{k=J.P(k,"message")
k=k==null?null:J.t(k)
i=k}f=i==null?"Could not delete answer.":i
B.p.P(0,"Delete failed",f)}else B.p.P(0,"Delete failed","Could not delete answer.")
n.push(6)
s=5
break
case 3:n=[2]
case 5:p=2
m.p(new A.na(m,a2))
s=n.pop()
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bi,r)},
dW(a){var s=this.gc_()
if(!J.r6(s,new A.nf(a)))return
this.w.eC(0,new A.ng(s,a))}}
A.nc.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.no.prototype={
$1(a){var s
t.gw.a(a)
s=this.a
return s.eY(a==null?s.gdI():a)},
$S:74}
A.mW.prototype={
$1(a){A.ab(a)
return this.a.bi(this.b)},
$S:1}
A.mX.prototype={
$1(a){return this.a.aT(A.ab(a),this.b)},
$S:1}
A.ni.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.G
s.f=null},
$S:0}
A.nj.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.nk.prototype={
$0(){var s=this.a
s.r=!1
s.e=B.G
s.f=null},
$S:0}
A.nl.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nm.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nn.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not post answer. Please try again."},
$S:0}
A.nb.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.nh.prototype={
$1(a){t.E.a(a)
return this.a.aQ()},
$S:21}
A.n2.prototype={
$1(a){var s
A.ej("[questions.live] connect")
s=this.a
s.p(new A.n1(s))},
$S:3}
A.n1.prototype={
$0(){return this.a.Q="Live"},
$S:0}
A.n3.prototype={
$1(a){var s
A.ej("[questions.live] connected payload: "+A.Z(a))
s=this.a
s.p(new A.n0(s))},
$S:3}
A.n0.prototype={
$0(){return this.a.Q="Live"},
$S:0}
A.n4.prototype={
$1(a){A.ej("[questions.live] answer.created payload: "+A.Z(a))
if(t.G.b(a))this.a.d9(J.b_(a,t.N,t.z))},
$S:3}
A.n5.prototype={
$1(a){var s,r
A.ej("[questions.live] answer.deleted payload: "+A.Z(a))
if(t.G.b(a)){s=J.P(a,"id")
r=s==null?null:J.t(s)
if(r!=null)this.a.dW(r)}},
$S:3}
A.n6.prototype={
$1(a){var s
A.ej("[questions.live] disconnect")
s=this.a
s.p(new A.n_(s))},
$S:3}
A.n_.prototype={
$0(){return this.a.Q="Reconnecting"},
$S:0}
A.n7.prototype={
$1(a){var s
A.ej("[questions.live] error")
s=this.a
s.p(new A.mZ(s))},
$S:3}
A.mZ.prototype={
$0(){return this.a.Q="Reconnecting"},
$S:0}
A.n8.prototype={
$1(a){var s
A.ej("[questions.live] reconnect_failed")
s=this.a
s.p(new A.mY(s))},
$S:3}
A.mY.prototype={
$0(){return this.a.Q="Offline"},
$S:0}
A.nd.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.mU.prototype={
$1(a){var s=J.P(t.P.a(a),"id")
s=s==null?null:J.t(s)
return s===this.a},
$S:15}
A.mV.prototype={
$1(a){var s
t.gw.a(a)
s=a==null?this.a:a
s=A.aC(s,t.P)
s.push(this.b)
return s},
$S:27}
A.n9.prototype={
$0(){return this.a.x.u(0,this.b)},
$S:0}
A.na.prototype={
$0(){return this.a.x.T(0,this.b)},
$S:0}
A.nf.prototype={
$1(a){var s=J.P(t.P.a(a),"id")
s=s==null?null:J.t(s)
return s===this.a},
$S:15}
A.ng.prototype={
$1(a){var s
t.gw.a(a)
s=a==null?this.a:a
s=J.v8(s,new A.ne(this.b))
s=A.aC(s,s.$ti.h("o.E"))
return s},
$S:27}
A.ne.prototype={
$1(a){var s=J.P(t.P.a(a),"id")
s=s==null?null:J.t(s)
return s!==this.a},
$S:15}
A.dU.prototype={
ghj(){var s,r,q=J.P(this.c,"questions")
if(t.j.b(q)){s=J.cx(q,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.np()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V},
E(){var s,r,q,p,o,n=this,m=null,l="solid",k="div",j="/questions/ask",i="isAuthenticated",h="Ask a Question",g="color.line",f="color.panel",e="color.text",d="color.muted",c="rgba(52, 211, 153, 0.4)",b="rgba(52, 211, 153, 0.12)",a=n.ghj(),a0=n.hk(a),a1=n.c,a2=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,28,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(m,B.o,m,B.o),m,m,1152,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(48,16,48,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,B.v,m,m,m,new A.i(34,16,34,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("100%"),m,m,m,m),a3=a.length,a4=a0.length,a5=A.a(m,m,m,m,m,new A.b(f,m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(40,40,40,40),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,new A.i(24,24,24,24),m,24,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a6=A.a(m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,B.j,m,m,m,m,m,18,m,m,m,m,m,B.n,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a7=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,720,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),a8=A.a(m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,B.j,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a8=A.w([n.cr("Community"),n.cr("Q&A")],a8)
s=A.ba("Flint Questions",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(e,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,32,750,m,m,m,m,m,m,m,m,m,m,m,m,1.1,new A.i(0,0,0,0),m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,40,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.H("Ask practical Flint Dart questions, share solutions, and keep answers easy to find for the next developer.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(d,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,1.7,new A.i(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a7=A.f(B.a,m,a7,B.a,B.a)
r=A.h(m,[a8,s,r])
s=A.a(m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,B.j,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.o,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("100%"),m,m,m,m)
a8=A.a(m,B.c,m,m,m,new A.e(b),m,new A.m(1,new A.e(c),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(10,16,10,16),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
q=A.F($.u2(),m,16)
p=J.ao(a1)
o=J.ac(p.j(a1,i),!0)||B.t.gV()!=null?h:"Sign in to Ask"
a8=[A.Y(m,[q,A.u(o,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.primary",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],a8,j,m,B.i,m)]
if(!(J.ac(p.j(a1,i),!0)||B.t.gV()!=null)){q=A.a(m,B.c,m,m,m,new A.e("rgba(14, 165, 233, 0.1)"),m,new A.m(1,new A.e("rgba(125, 211, 252, 0.34)"),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(10,16,10,16),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a8.push(A.Y(m,[A.F($.kb(),m,16),A.u("Create account",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.accent",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,700,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))],q,"/questions/ask?mode=register",m,B.i,m))}a6=A.w([new A.k(k,a7,r),A.w(a8,s)],a6)
a7=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,B.j,m,m,m,m,m,12,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a3=n.cs(""+a3,"Questions")
a4=n.cs(""+a4,"Topics")
a3=A.w([a3,a4,n.cs(J.ac(p.j(a1,"canAnswer"),!0)||A.dP(["admin","contributor","dev"],t.N).H(0,B.t.gak(0))?"Open":"Read","Participation")],a7)
a3=[new A.k(k,A.f(B.a,m,a5,B.a,B.a),A.h(m,[a6,a3])),n.hN(a0)]
if(a.length===0){a4=A.a(m,m,m,m,m,new A.b(f,m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(28,28,28,28),m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
a5=A.al("No questions yet",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(e,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,22,700,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a6=A.H("Start the first thread and help shape the Flint knowledge base.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(d,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
a7=A.Y(h,B.h,A.a(m,m,m,m,m,new A.e(b),m,new A.m(1,new A.e(c),l),m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(9,14,9,14),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("max-content"),m,m,m,m),j,m,B.i,m)
a3.push(new A.k(k,A.f(B.a,m,a4,B.a,B.a),A.h(m,[a5,a6,a7])))}else a3.push(n.hi(a))
return new A.aD(a1,new A.k(k,A.f(B.a,m,a2,B.a,B.a),A.h(m,a3)))},
hN(a){var s,r,q,p,o,n,m=null
t.a.a(a)
if(a.length===0)return A.cv("span",[],A.a0(t.N,t.X))
s=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,B.j,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=[]
for(q=A.qj(a,0,A.fS(10,"count",t.S),A.az(a).c),p=q.$ti,q=new A.bE(q,q.gk(0),p.h("bE<ax.E>")),p=p.h("ax.E");q.m();){o=q.d
if(o==null)o=p.a(o)
n=A.f(B.a,m,new A.l(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,700,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.a,B.a)
o=A.h(o,B.h)
r.push(new A.k("div",A.f(B.a,m,new A.l(new A.i(7,12,7,12),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.panel",m),999,new A.m(1,new A.b("color.line",m),"solid"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),B.a,B.a),A.h(m,[new A.a8("span",n,o)])))}return new A.k("div",A.f(B.a,m,s,B.a,B.a),A.h(m,r))},
hi(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d="span",c="color.muted"
t.p.a(a)
s=A.a(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,B.e,e,e,e,e,e,e,e,e,e,e,e,e,14,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)
r=[]
for(q=a.length,p=t.P,o=0;o<a.length;a.length===q||(0,A.aJ)(a),++o){n=p.a(a[o])
m=J.ao(n)
l=m.j(n,"title")
k=l==null?e:J.t(l)
if(k==null)k="Untitled question"
l=m.j(n,"href")
j=l==null?e:J.t(l)
if(j==null)j="/questions"
l=m.j(n,"tag")
i=l==null?e:J.t(l)
if(i==null)i="General"
l=m.j(n,"excerpt")
h=l==null?e:J.t(l)
if(h==null)h=""
l=m.j(n,"author")
g=l==null?e:J.t(l)
if(g==null)g="Community"
n=m.j(n,"date")
f=n==null?e:J.t(n)
if(f==null)f=""
n=this.cr(i)
m=f.length===0?"Recently asked":f
m=[A.w([n,new A.a8(d,A.f(B.a,e,new A.l(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,e,e,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h(m,B.h))],new A.l(e,e,e,e,e,e,e,e,B.d,10,B.c,e,e,e,e,B.j,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)),new A.a8("h2",A.f(B.a,e,new A.l(e,new A.i(0,0,0,0),e,e,e,new A.I("100%"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,20,700,1.35,e,new A.b("color.text",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h(k,B.h))]
if(h.length!==0)m.push(new A.a8("p",A.f(B.a,e,new A.l(e,new A.i(0,0,0,0),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,14,e,1.65,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h(h,B.h)))
m.push(A.w([new A.a8(d,A.f(B.a,e,new A.l(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,e,e,e,new A.b(c,e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h("By "+g,B.h)),A.w([new A.a8(d,A.f(B.a,e,new A.l(e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,12,700,e,e,new A.b("color.primary",e),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h("Open thread",B.h)),A.F($.bz(),e,14)],new A.l(e,e,e,e,e,e,e,e,B.d,6,B.c,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e))],new A.l(e,e,e,e,e,e,e,e,B.d,12,B.c,e,B.n,e,e,B.j,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e)))
r.push(A.Y(e,[new A.k("div",A.f(B.a,e,new A.l(e,e,e,e,e,e,e,e,B.e,12,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),B.a,B.a),A.h(e,m))],new A.l(new A.i(20,20,20,20),e,new A.I("100%"),e,0,e,e,e,B.M,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,new A.b("color.panel",e),16,new A.m(1,new A.b("color.line",e),"solid"),e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e,e),j,e,B.i,e))}return new A.k("div",A.f(B.a,e,s,B.a,B.a),A.h(e,r))},
cr(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))},
cs(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,"1 1 132px",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,132,s,s,s,s,s,s,new A.i(14,14,14,14),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,22,800,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(0,0,0,0),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.H(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(2,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p]))},
hk(a){var s,r,q,p,o,n
t.p.a(a)
s=A.dO(t.N)
r=A.d([],t.s)
for(q=a.length,p=0;p<a.length;a.length===q||(0,A.aJ)(a),++p){o=J.P(a[p],"tag")
n=o==null?null:B.b.D(J.t(o))
if(n==null||n.length===0)continue
if(s.u(0,n.toLowerCase()))B.f.u(r,n)}return r}}
A.np.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.dX.prototype={
E(){var s,r,q,p,o,n=this,m=null,l=n.c,k=t.fF.a(J.P(l,"project")),j=k==null?m:J.b_(k,t.N,t.z)
if(j==null)j=B.a5
k=j.j(0,"title")
s=k==null?m:J.t(k)
if(s==null)s="Flint build"
r=n.h5(j.j(0,"images"))
q=n.h7(j.j(0,"links"))
k=j.j(0,"built_with")
p=k==null?m:J.t(k)
if(p==null)p=""
k=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,24,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(m,B.o,m,B.o),m,m,1050,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(48,16,48,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,B.v,m,m,m,new A.i(34,16,34,16),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("100%"),m,m,m,m)
o=[n.fV(j,s,p,q)]
if(r.length!==0)o.push(n.h1(s,r))
o.push(n.fo(j,q))
return new A.aD(l,new A.k("div",A.f(B.a,m,k,B.a,B.a),A.h(m,o)))},
fV(a,b,c,d){var s,r,q,p,o,n,m,l,k,j,i=null,h="color.muted"
t.P.a(a)
t.p.a(d)
s=A.a(i,i,i,i,i,new A.b("color.panel",i),i,new A.m(1,new A.b("color.line",i),"solid"),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,18,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(40,40,40,40),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,new A.i(24,24,24,24),i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=[this.e_("Built with Flint")]
if(c.length!==0)q.push(this.e_(c))
r=A.w(q,r)
q=A.ba(b,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b("color.text",i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,32,800,i,i,i,i,i,i,i,i,i,i,i,i,1.12,new A.i(0,0,0,0),i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,44,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
p=a.j(0,"description")
p=p==null?i:J.t(p)
if(p==null)p=""
p=A.H(p,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(h,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.75,new A.i(0,0,0,0),i,i,780,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,14,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=a.j(0,"author")
n=n==null?i:J.t(n)
if(n==null)n="Flint developer"
n=A.u("By "+n,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(h,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=[]
for(k=d.length,j=0;j<d.length;d.length===k||(0,A.aJ)(d),++j)l.push(this.dB(d[j]))
o=A.w([n,A.w(l,m)],o)
return new A.k("div",A.f(B.a,i,s,B.a,B.a),A.h(i,[r,q,p,o]))},
h1(a,b){var s,r,q,p,o,n,m,l,k,j,i,h,g=null
t.a.a(b)
s=A.a(g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.e,g,g,g,g,g,g,g,g,g,g,g,g,14,g,"1fr",g,g,g,g,g,g,g,g,g,g,g,g,g,g,A.a(g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,"repeat(3, minmax(0, 1fr))",g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g)
r=[]
for(q=a+" screenshot ",p=t.N,o=t.X,n=t.eh,m=t.ct,l=m.h("ax.E"),k=0;k<b.length;k=j){j=k+1
i=A.ak(["src",b[k],"alt",q+j,"loading","lazy","style",B.l1],p,o)
h=A.aC(new A.af(B.h,n.a(A.pC()),m),l)
h.$flags=1
r.push(new A.k("div",A.f(B.a,g,new A.l(g,g,g,g,g,g,210,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,B.v,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,new A.b("color.panelStrong",g),18,new A.m(1,new A.b("color.line",g),"solid"),g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g),B.a,B.a),A.h(g,[new A.a8("img",i,h)])))}return new A.k("div",A.f(B.a,g,s,B.a,B.a),A.h(g,r))},
fo(a,b){var s,r,q,p,o,n,m,l=null,k="solid",j="color.line",i="color.text",h="color.muted",g=t.P
g.a(a)
t.p.a(b)
s=A.a(l,B.E,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.d,l,l,l,B.u,l,l,l,l,l,l,l,l,18,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,B.a3,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
r=A.a(l,l,l,l,l,new A.b("color.panel",l),l,new A.m(1,new A.b(j,l),k),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,B.ae,l,l,l,l,l,l,l,l,l,l,14,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(22,22,22,22),l,18,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
q=A.al("What the app does",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(i,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,22,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
p=a.j(0,"what_it_does")
p=p==null?l:J.t(p)
if(p==null)p=""
p=A.H(p,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,15,l,l,l,l,l,l,l,l,l,l,l,l,l,1.75,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))
r=A.f(B.a,l,r,B.a,B.a)
p=A.h(l,[q,p])
q=A.a(l,l,l,l,l,new A.b("color.panelStrong",l),l,new A.m(1,new A.b(j,l),k),l,l,l,l,l,l,l,l,l,l,l,l,B.e,l,l,l,l,l,l,l,l,l,l,l,l,12,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.I("min(300px, 100%)"),l,l,l,l),l,l,l,l,l,l,l,l,new A.i(18,18,18,18),l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.I("100%"),l,l,l,l)
o=[A.al("Project links",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(i,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,16,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l))]
n=b.length
if(n===0)o.push(A.H("No external links were added.",A.a(l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.b(h,l),l,l,l,l,l,l,l,l,l,l,l,l,l,l,13,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(0,0,0,0),l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)))
else for(m=0;m<b.length;b.length===n||(0,A.aJ)(b),++m)o.push(this.dB(g.a(b[m])))
g=A.a(l,B.c,l,l,l,new A.e("rgba(14, 165, 233, 0.09)"),l,new A.m(1,new A.e("rgba(125, 211, 252, 0.32)"),k),l,l,l,l,l,l,l,l,l,l,l,l,B.k,l,l,l,l,l,l,l,l,l,l,l,l,8,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,new A.i(9,12,9,12),l,10,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l)
o.push(A.Y(l,[A.F($.q3(),l,15),A.u("Back to showcase",l)],g,"/showcase",l,B.i,l))
return A.w([new A.k("div",r,p),new A.k("div",A.f(B.a,l,q,B.a,B.a),A.h(l,o))],s)},
dB(a){var s,r,q,p,o=null
t.P.a(a)
s=J.ao(a)
r=s.j(a,"url")
r=r==null?o:J.t(r)
if(r==null)r="#"
q=A.a(o,B.c,o,o,o,new A.e("rgba(52, 211, 153, 0.1)"),o,new A.m(1,new A.e("rgba(52, 211, 153, 0.36)"),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.k,o,o,o,o,o,o,o,o,o,o,o,o,8,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(9,13,9,13),o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
p=A.F($.u1(),o,15)
s=s.j(a,"label")
s=s==null?o:J.t(s)
return A.Y(o,[p,A.u(s==null?"Open link":s,o)],q,r,"_blank",B.i,o)},
e_(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))},
h5(a){var s
if(t.j.b(a)){s=J.kh(a,new A.nx(),t.N)
s=A.aC(s,s.$ti.h("ax.E"))
return s}return B.aV},
h7(a){var s,r
if(t.j.b(a)){s=J.cx(a,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.ny()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V}}
A.nx.prototype={
$1(a){return J.t(a)},
$S:17}
A.ny.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.dY.prototype={
ghh(){var s,r,q=J.P(this.c,"projects")
if(t.j.b(q)){s=J.cx(q,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.nB()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V},
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="isAuthenticated",j="/showcase/submit",i="color.line",h="color.panel",g="color.text",f="color.muted",e="rgba(52, 211, 153, 0.4)",d="rgba(52, 211, 153, 0.12)",c=o.ghh(),b=o.c,a=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,28,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(n,B.o,n,B.o),n,n,1152,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(48,16,48,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,B.v,n,n,n,new A.i(34,16,34,16),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.I("100%"),n,n,n,n),a0=c.length,a1=A.a(n,n,n,n,n,new A.b(h,n),n,new A.m(1,new A.b(i,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,24,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(40,40,40,40),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,new A.i(24,24,24,24),n,24,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a2=A.a(n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,18,n,n,n,n,n,B.n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a3=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,760,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a4=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a4=A.w([o.bv("Built with Flint"),o.bv("Community apps")],a4)
s=A.ba("See what developers are shipping with Flint",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(g,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,32,800,n,n,n,n,n,n,n,n,n,n,n,n,1.1,new A.i(0,0,0,0),n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,43,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
r=A.H("A living gallery of dashboards, SaaS products, tools, portals, and backend-first fullstack apps built with pure Dart, Flint Dart, and Flint UI.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(f,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,1.7,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a3=A.f(B.a,n,a3,B.a,B.a)
r=A.h(n,[a4,s,r])
a4=J.ao(b)
s=J.ac(a4.j(b,k),!0)||B.t.gV()!=null?j:"/showcase/submit?mode=register"
q=A.a(n,B.c,n,n,n,new A.e(d),n,new A.m(1,new A.e(e),m),n,n,n,n,n,n,n,n,n,n,n,n,B.k,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(10,16,10,16),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
p=A.F($.kc(),n,16)
a4=J.ac(a4.j(b,k),!0)||B.t.gV()!=null?"Submit your build":"Create and submit"
a2=A.w([new A.k(l,a3,r),A.Y(n,[p,A.u(a4,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.primary",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))],q,s,n,B.i,n)],a2)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.w([o.cv(""+a0,"Community builds"),o.cv("3","Images per build"),o.cv("2","Links per build")],s)
s=[new A.k(l,A.f(B.a,n,a1,B.a,B.a),A.h(n,[a2,s]))]
if(c.length===0){a0=A.a(n,n,n,n,n,new A.b(h,n),n,new A.m(1,new A.b(i,n),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(28,28,28,28),n,16,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a1=A.al("No builds submitted yet",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(g,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,22,800,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a2=A.H("Be the first developer to show what Flint can do in production.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(f,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a3=A.a(n,B.c,n,n,n,new A.e(d),n,new A.m(1,new A.e(e),m),n,n,n,n,n,n,n,n,n,n,n,n,B.k,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(9,14,9,14),n,10,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.I("max-content"),n,n,n,n)
a3=A.Y(n,[A.F($.kb(),n,15),A.u("Submit a build",n)],a3,j,n,B.i,n)
s.push(new A.k(l,A.f(B.a,n,a0,B.a,B.a),A.h(n,[a1,a2,a3])))}else s.push(o.hg(c))
return new A.aD(b,new A.k(l,A.f(B.a,n,a,B.a,B.a),A.h(n,s)))},
hg(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=null,a1="color.muted"
t.p.a(a2)
s=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"repeat(2, minmax(0, 1fr))",a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
s=A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,18,a0,"1fr",a0,a0,a0,a0,a0,a0,a0,A.a(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,"repeat(3, minmax(0, 1fr))",a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),a0,a0,a0,a0,a0,a0,s,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)
r=[]
for(q=a2.length,p=t.P,o=0;o<a2.length;a2.length===q||(0,A.aJ)(a2),++o){n=p.a(a2[o])
m=J.ao(n)
l=m.j(n,"title")
k=l==null?a0:J.t(l)
if(k==null)k="Untitled build"
l=m.j(n,"href")
j=l==null?a0:J.t(l)
if(j==null)j="/showcase"
l=m.j(n,"excerpt")
i=l==null?a0:J.t(l)
if(i==null)i=""
l=m.j(n,"built_with")
h=l==null?a0:J.t(l)
if(h==null)h=""
l=m.j(n,"author")
g=l==null?a0:J.t(l)
if(g==null)g="Flint developer"
l=m.j(n,"date")
f=l==null?a0:J.t(l)
if(f==null)f=""
e=a.hw(m.j(n,"images"))
d=a.hx(m.j(n,"links"))
n=a.h2(k,e)
m=[a.bv(h.length===0?"Flint app":h)]
l=e.length
if(l>1)m.push(a.bv(""+l+" images"))
m=[A.w(m,new A.l(a0,a0,a0,a0,a0,a0,a0,a0,B.d,8,a0,a0,a0,a0,a0,B.j,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)),new A.a8("h2",A.f(B.a,a0,new A.l(a0,new A.i(0,0,0,0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,20,800,1.3,a0,new A.b("color.text",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.h(k,B.h))]
if(i.length!==0)m.push(new A.a8("p",A.f(B.a,a0,new A.l(a0,new A.i(0,0,0,0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,14,a0,1.65,a0,new A.b(a1,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.h(i,B.h)))
l="By "+g
l=f.length===0?l:l+" \xb7 "+f
c=A.f(B.a,a0,new A.l(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,12,a0,a0,a0,new A.b(a1,a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a)
l=A.h(l,B.h)
b=d.length
b=b===0?"View build":""+b+" links"
m.push(A.w([new A.a8("span",c,l),A.w([new A.a8("span",A.f(B.a,a0,new A.l(a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,12,800,a0,a0,new A.b("color.primary",a0),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.h(b,B.h)),A.F($.bz(),a0,14)],new A.l(a0,a0,a0,a0,a0,a0,a0,a0,B.d,6,B.c,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0))],new A.l(a0,a0,a0,a0,a0,a0,a0,a0,B.d,12,B.c,a0,B.n,a0,a0,B.j,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0)))
r.push(A.Y(a0,[n,new A.k("div",A.f(B.a,a0,new A.l(new A.i(18,18,18,18),a0,a0,a0,a0,a0,a0,a0,B.e,12,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),B.a,B.a),A.h(a0,m))],new A.l(a0,a0,a0,a0,0,a0,a0,a0,B.e,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,B.v,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,new A.b("color.panel",a0),18,new A.m(1,new A.b("color.line",a0),"solid"),a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0,a0),j,a0,B.i,a0))}return new A.k("div",A.f(B.a,a0,s,B.a,B.a),A.h(a0,r))},
h2(a,b){var s,r,q=null
t.a.a(b)
if(b.length===0){s=A.a(q,B.c,q,q,q,new A.b("color.panelStrong",q),q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.d,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
r=A.F($.cf(),B.eF,34)
return new A.k("div",A.f(B.a,q,s,B.a,B.a),A.h(q,[r]))}return A.cv("img",B.h,A.ak(["src",B.f.gF(b),"alt",a,"loading","lazy","style",B.kO],t.N,t.X))},
bv(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))},
cv(a,b){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,"1 1 132px",s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,132,s,s,s,s,s,s,new A.i(14,14,14,14),s,14,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.H(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,22,800,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(0,0,0,0),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),p=A.H(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(2,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p]))},
hw(a){var s
if(t.j.b(a)){s=J.kh(a,new A.nz(),t.N)
s=A.aC(s,s.$ti.h("ax.E"))
return s}return B.aV},
hx(a){var s,r
if(t.j.b(a)){s=J.cx(a,t.G)
r=s.$ti
r=A.bq(s,r.h("A<j,@>(o.E)").a(new A.nA()),r.h("o.E"),t.P)
s=A.aC(r,A.Q(r).h("o.E"))
return s}return B.V}}
A.nB.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.nz.prototype={
$1(a){return J.t(a)},
$S:17}
A.nA.prototype={
$1(a){return J.b_(t.G.a(a),t.N,t.z)},
$S:5}
A.d6.prototype={
gdj(){return J.ac(J.P(this.c,"canAnswer"),!0)||A.dP(["admin","contributor","dev","developer"],t.N).H(0,B.t.gak(0))},
E(){var s,r,q=this,p=null,o=q.c,n=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,24,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(p,B.o,p,B.o),p,p,980,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(48,16,48,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,B.v,p,p,p,new A.i(34,16,34,16),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.I("100%"),p,p,p,p),m=A.a(p,p,p,p,p,new A.b("color.panel",p),p,new A.m(1,new A.b("color.line",p),"solid"),p,p,p,p,p,p,p,p,p,p,p,p,B.e,p,p,p,p,p,p,p,p,p,p,p,p,14,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(34,34,34,34),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,new A.i(24,24,24,24),p,22,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,B.j,p,p,p,p,p,10,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
l=A.w([q.av("Community showcase"),q.av("3 images \xb7 2 links")],l)
s=A.ba("Submit what you built with Flint",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,31,800,p,p,p,p,p,p,p,p,p,p,p,p,1.12,new A.i(0,0,0,0),p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,38,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=A.H("Add the app name, screenshots, useful links, and a clear explanation of what the product does. The page is rendered by Flint for SEO so other developers can discover it.",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,15,p,p,p,p,p,p,p,p,p,p,p,p,p,1.7,new A.i(0,0,0,0),p,p,760,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))
r=[new A.k("div",A.f(B.a,p,m,B.a,B.a),A.h(p,[l,s,r]))]
m=J.ao(o)
if(!(J.ac(m.j(o,"isAuthenticated"),!0)||B.t.gV()!=null)){m=m.j(o,"authMode")
r.push(A.h7("/showcase","Back to Showcase","Create a developer account or sign in to share what you built with Flint.",(m==null?p:J.t(m))==="register","Sign in to submit"))}else r.push(q.fJ())
return new A.aD(o,new A.k("div",A.f(B.a,p,n,B.a,B.a),A.h(p,r)))},
fJ(){var s,r,q,p,o,n=this,m=null,l="solid",k="text",j="description",i="what_it_does",h="built_with",g="color.line",f=A.a(m,B.E,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,B.u,m,m,m,m,m,m,m,m,22,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a3,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),e=A.a(m,m,m,m,m,new A.b("color.panel",m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ae,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(24,24,24,24),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,0,m,m,m,m,m,m,new A.i(18,18,18,18),m,18,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("100%"),m,m,m,m),d=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,18,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),c=[],b=n.f
if(b!=null){s=A.a(m,m,m,m,m,new A.e("rgba(248, 113, 113, 0.08)"),m,new A.m(1,new A.e("rgba(248, 113, 113, 0.35)"),l),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(12,12,12,12),m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
b=A.H(b,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.e("#fca5a5"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
c.push(new A.k("div",A.f(B.a,m,s,B.a,B.a),A.h(b,B.h)))}b=n.d
s=b.Z(0,"title")
r=n.e
q=$.r1()
c.push(A.c2(s,r,q,"App or product name","title","Example: ClinicOS, TutorDesk, PayPortal",!0,k))
r=b.Z(0,j)
s=n.e
p=$.uR()
c.push(A.f8(r,s,"Short description",j,"Describe the product, audience, and why you built it.",!0,5,p))
c.push(A.f8(b.Z(0,i),n.e,"What the app does",i,"List the core workflow, automation, dashboard, API, or fullstack experience it provides.",!0,7,p))
c.push(A.c2(b.Z(0,h),n.e,q,"Built with",h,"Flint Dart, Flint UI, MySQL",!1,k))
c.push(n.dF("Images"))
for(s=[1,2,3],o=0;o<3;++o){r=""+s[o]
p="image_"+r
c.push(A.c2(b.Z(0,p),n.e,q,"Image "+r+" URL",p,"https://example.com/screenshot-"+r+".png",!1,k))}c.push(n.dF("Links"))
c.push(n.dK(1))
c.push(n.dK(2))
b=n.r
s=n.gdj()
r=A.F($.kc(),m,15)
c.push(A.av(m,[r,A.u(n.gdj()?"Publish Build":"Developer access required",m)],m,!s,b,m,B.ax,B.z,B.i,B.a6))
d=A.eE(c,d,n.ghJ())
e=A.f(B.a,m,e,B.a,B.a)
d=A.h(m,[d])
c=A.a(m,m,m,m,m,new A.b("color.panelStrong",m),m,new A.m(1,new A.b(g,m),l),m,m,m,m,m,m,m,m,m,m,m,m,B.e,m,m,m,m,m,m,m,m,m,m,m,m,14,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("min(280px, 100%)"),m,m,m,m),m,m,m,m,m,m,m,m,new A.i(18,18,18,18),m,16,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.I("100%"),m,m,m,m)
b=A.al("What to include",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.text",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,16,800,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.i(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
s=A.H("Use real screenshots and practical links. Short, specific descriptions work best for search and for developers scanning the gallery.",A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,13,m,m,m,m,m,m,m,m,m,m,m,m,m,1.6,new A.i(0,0,0,0),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
r=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,B.j,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
r=A.w([n.av("Screenshots"),n.av("Live URL"),n.av("GitHub"),n.av("Use case")],r)
return A.w([new A.k("div",e,d),new A.k("div",A.f(B.a,m,c,B.a,B.a),A.h(m,[b,s,r]))],f)},
dK(a){var s,r,q,p,o,n,m=null,l=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,B.u,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.a3,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),k=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ae,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),j=""+a,i="Link "+j
j="link_"+j
s=j+"_label"
r=this.d
q=r.Z(0,s)
p=this.e
o=a===1?"Live app":"GitHub"
n=$.r1()
o=A.c2(q,p,n,i+" label",s,o,!1,"text")
k=A.f(B.a,m,k,B.a,B.a)
o=A.h(m,[o])
s=A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ae,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
j+="_url"
j=A.c2(r.Z(0,j),this.e,n,i+" URL",j,"https://example.com",!1,"text")
return A.w([new A.k("div",k,o),new A.k("div",A.f(B.a,m,s,B.a,B.a),A.h(m,[j]))],l)},
bB(a){return this.hG(A.ab(a))},
hG(a3){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
var $async$bB=A.bk(function(a4,a5){if(a4===1){o.push(a5)
s=p}for(;;)switch(s){case 0:if(t.m.b(a3))a3.preventDefault()
if(n.r){s=1
break}n.p(new A.nS(n))
c=n.hS()
b=c.a
if(b.gM(b)){h=n.cz(c,"Check your build.")
n.p(new A.nT(n,c))
B.p.P(0,"Build not submitted",h)
s=1
break}p=4
m=B.t.gV()
b=$.cg()
a=t.N
a0=A.hf(n.d.b,a,t.X)
l=A.a0(a,a)
J.au(l,"Accept","application/json")
J.au(l,"X-Requested-With","FlintClient")
if(m!=null)J.au(l,"Authorization","Bearer "+m)
s=7
return A.b5(b.aj("/showcase/submit",a0,l,t.P),$async$bB)
case 7:k=a5
j=k.b
if(k.f&&j!=null){B.p.ad("Build published","Opening the showcase page.")
l=J.P(j,"redirectTo")
l=l==null?null:J.t(l)
if(l==null)l="/showcase"
A.z(A.z(v.G.window).location).assign(l)
s=1
break}i=A.ch(j)
l=j
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not submit build."
h=n.cz(i,l)
n.p(new A.nU(n,i,h))
B.p.P(0,"Build not submitted",h)
p=2
s=6
break
case 4:p=3
a2=o.pop()
l=A.aQ(a2)
if(l instanceof A.bU){g=l
f=n.fD(g)
e=A.ch(f)
l=f
if(l==null)l=null
else{l=J.P(l,"message")
l=l==null?null:J.t(l)}if(l==null)l="Could not submit build."
d=n.cz(e,l)
n.p(new A.nV(n,e,d))
B.p.P(0,"Build not submitted",d)}else{n.p(new A.nW(n))
B.p.P(0,"Build not submitted",n.f)}s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bB,r)},
hS(){var s,r,q,p,o,n,m,l,k,j="description",i="what_it_does",h="Add at least 20 characters.",g="Use a full http or https URL.",f=A.a0(t.N,t.a),e=this.d,d=B.b.D(e.a0("title")),c=B.b.D(e.a0(j)),b=B.b.D(e.a0(i))
if(d.length<3)f.i(0,"title",A.d(["Add the app name."],t.s))
if(c.length<20)f.i(0,j,A.d([h],t.s))
if(b.length<20)f.i(0,i,A.d([h],t.s))
for(s=["image_1","image_2","image_3"],e=e.b,r=t.s,q=0;q<3;++q){p=s[q]
o=e.j(0,p)
o=o==null?null:J.t(o)
n=B.b.D(o==null?"":o)
if(n.length!==0){m=A.qm(n)
o=!1
if(m!=null)if(m.gaF(m).length!==0)o=m.gac()==="http"||m.gac()==="https"
o=!o}else o=!1
if(o)f.i(0,p,A.d([g],r))}for(s=[1,2],q=0;q<2;++q){o="link_"+s[q]
l=e.j(0,o+"_label")
l=l==null?null:J.t(l)
k=B.b.D(l==null?"":l)
o+="_url"
l=e.j(0,o)
l=l==null?null:J.t(l)
n=B.b.D(l==null?"":l)
if(k.length!==0&&n.length===0)f.i(0,o,A.d(["Add the URL for this link."],r))
if(n.length!==0){m=A.qm(n)
l=!1
if(m!=null)if(m.gaF(m).length!==0)l=m.gac()==="http"||m.gac()==="https"
l=!l}else l=!1
if(l)f.i(0,o,A.d([g],r))}return new A.bW(f)},
fD(a){var s=a.d
if(t.P.b(s))return s
if(t.G.b(s))return J.cQ(s,new A.nR(),t.N,t.z)
return null},
cz(a,b){var s,r=a.a
if(r.gB(r))return b
r=a.gb5()
s=A.Q(r).h("aS<2>")
return A.iE(new A.aS(r,s),3,s.h("o.E")).J(0," ")},
dF(a){var s=null
return A.al(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,15,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(4,s,0,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))},
av(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.24)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.ak,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.nS.prototype={
$0(){var s=this.a
s.r=!0
s.e=B.G
s.f=null},
$S:0}
A.nT.prototype={
$0(){var s=this.a
s.r=!1
s.e=this.b},
$S:0}
A.nU.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nV.prototype={
$0(){var s,r=this.a
r.r=!1
s=this.b
r.e=s
s=s.a
r.f=s.gB(s)?this.c:null},
$S:0}
A.nW.prototype={
$0(){var s=this.a
s.r=!1
s.f="Could not submit build. Please try again."},
$S:0}
A.nR.prototype={
$2(a,b){return new A.a4(J.t(a),b,t.I)},
$S:6}
A.e0.prototype={
ge7(){var s=J.P(this.c,"contentHtml")
s=s==null?null:J.t(s)
return s==null?"":s},
E(){var s,r,q,p,o,n,m,l,k,j=this,i=null,h="solid",g="div",f="Components",e="#a-component-is-a-dart-class",d="HtmlContent",c="100%",b="color.line",a="color.panel",a0="color.text",a1="color.muted",a2="color.primary",a3=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,22,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(i,B.o,i,B.o),i,i,1040,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,28,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(48,18,48,18),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,new A.i(34,14,34,14),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(c),i,i,i,i),a4=t.f
a4=A.a(i,i,i,i,i,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(52, 211, 153, 0.18)"),0),new A.K(new A.e("rgba(14, 165, 233, 0.12)"),52),new A.K(new A.b(a,i),100)],a4)),new A.b(a,i)],a4)),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,26,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.a2,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,24,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
r=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,680,i,i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
q=A.w([j.e8("Flint UI"),j.e8("Dart components")],q)
p=A.ba("Build browser UI with Dart components.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,34,760,i,i,i,i,i,i,i,i,i,i,i,i,1.08,B.l,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,42,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
o=A.H("Flint UI keeps components, state, events, styling, server props, and trusted HTML rendering inside the Dart ecosystem.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,1.72,B.l,i,i,660,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
r=A.f(B.a,i,r,B.a,B.a)
o=A.h(i,[q,p,o])
p=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,290,i,i,i,i),i,0,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(c),i,i,i,i)
q=A.a(i,i,i,i,i,new A.b(a,i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.R,i,16,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
n=A.w([A.F($.c4(),new A.b(a2,i),16),A.u("Pure Dart UI",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a2,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))],n)
m=A.a(i,i,i,i,i,new A.b("color.panelStrong",i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,8,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.bl,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.u("class Counter extends Component",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
k=A.u("setState(() => count++)",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.f(B.a,i,m,B.a,B.a)
k=A.h(i,[l,k])
l=A.H("The public API teaches Component, View, DartStyle, and state without exposing internal nodes.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,i,i,i,i,i,i,i,i,i,i,i,i,i,1.6,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
q=A.f(B.a,i,q,B.a,B.a)
l=A.h(i,[n,new A.k(g,m,k),l])
s=A.w([new A.k(g,r,o),new A.k(g,A.f(B.a,i,p,B.a,B.a),A.h(i,[new A.k(g,q,l)]))],s)
l=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
l=A.w([j.cl(f,e),j.cl("State","#state-updates-with-setstate"),j.cl(d,"#render-trusted-html")],l)
a4=A.f(B.a,i,a4,B.a,B.a)
l=A.h(i,[s,l])
s=A.O(240,!1)
q=A.O(B.y,!1)
q=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,14,i,B.D,i,i,i,i,i,i,i,i,i,i,i,i,i,i,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.aB("repeat("+A.O("auto-fit",!0)+", "+A.O(new A.aL("minmax("+s+", "+q+")"),!1)+")"),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=j.bj($.tW(),f,"Build screens from Dart classes with a simple View build method.",B.a7)
p=j.bj($.q2(),"State","Preserve component state and receive new constructor values with updateFrom.",B.a9)
o=j.bj($.dl(),"DartStyle","Keep layout, spacing, colors, and responsive rules beside the component.",B.W)
r=j.bj($.tY(),d,"Render trusted Markdown HTML without manual document selectors in app code.",B.ef)
q=A.f(B.a,i,q,B.a,B.a)
r=A.h(i,[s,p,o,r])
o=A.a(i,i,i,i,i,new A.b(a,i),i,new A.m(1,new A.b(b,i),h),i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,20,i,i,i,i,i,i,i,i,i,i,i,i,B.at,i,i,880,A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(26,26,26,26),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i),i,i,i,i,B.v,i,i,i,B.R,i,20,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.I(c),i,i,i,i)
p=A.a(i,B.c,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.d,i,i,i,i,i,i,B.j,i,i,i,i,i,12,i,i,i,i,i,B.n,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
s=A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.e,i,i,i,i,i,i,i,i,i,i,i,i,5,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
k=A.al("UI documentation",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a0,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,24,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
m=A.H("Components, props, state, styling, page registration, client requests, and trusted HTML.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,13,i,i,i,i,i,i,i,i,i,i,i,i,i,i,B.l,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i))
s=A.f(B.a,i,s,B.a,B.a)
m=A.h(i,[k,m])
k=A.a(i,B.c,i,i,i,new A.e("rgba(52, 211, 153, 0.1)"),i,new A.m(1,new A.e("rgba(52, 211, 153, 0.36)"),h),i,i,i,i,i,i,i,i,i,i,i,i,B.k,i,i,i,i,i,i,i,i,i,i,i,i,7,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.i(9,13,9,13),i,10,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)
p=[A.w([new A.k(g,s,m),A.Y(i,[A.u("Start reading",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a2,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,12,800,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)),A.F($.bz(),new A.b(a2,i),14)],k,e,i,B.i,i)],p)]
if(j.ge7().length===0)p.push(A.H("The Flint UI guide is being written.",A.a(i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.b(a1,i),i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i)))
else p.push(A.cD("api-md markdown-body",j.ge7(),"ui-content",B.bv))
s=A.f(B.a,i,o,B.a,B.a)
p=A.h(i,p)
return new A.aD(j.c,new A.k(g,A.f(B.a,i,a3,B.a,B.a),A.h(i,[new A.k(g,a4,l),new A.k(g,q,r),new A.k(g,s,p)])))},
bj(a,b,c,d){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,B.e,s,s,s,s,s,s,s,s,s,s,s,s,12,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.R,s,16,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.F(a,d,20),p=A.bf(b,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,17,s,s,s,s,s,s,s,s,s,s,s,s,s,1.25,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)),o=A.H(c,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,13,s,s,s,s,s,s,s,s,s,s,s,s,s,1.65,B.l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q,p,o]))},
cl(a,b){var s=null
return A.Y(a,B.h,A.a(s,B.c,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,13,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.bs,s,10,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),b,s,B.i,s)},
e8(a){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(5, 150, 105, 0.08)"),s,new A.m(1,new A.e("rgba(5, 150, 105, 0.28)"),"solid"),s,s,s,s,s,s,s,s,s,s,B.al,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.I("max-content"),s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.e4.prototype={
E(){var s,r,q,p,o=null,n="div",m=$.uE(),l=$.un(),k=A.u("Product Updates",$.up())
l=A.f(B.a,o,l,B.a,B.a)
k=A.h(o,[k])
s=$.uo()
r=A.u("What's New",$.uq())
r=A.w([new A.k(n,l,k),new A.k(n,A.f(B.a,o,s,B.a,B.a),A.h(o,[r]))],B.hy)
s=A.ba("What's New in Flint Dart",$.uD())
k=A.H("Highlights from the latest Flint Dart and Flint UI releases.",$.uP())
m=A.f(B.a,o,m,B.a,B.a)
k=A.h(o,[r,s,k])
s=this.fQ()
r=$.uv()
l=A.bf("Next",$.uy())
q=A.H("Follow the changelog for complete release history and migration notes.",$.uu())
p=$.uw()
p=A.Y(o,[A.u("Open Changelog",$.ux())],p,"/changelog",o,B.i,o)
r=A.f(B.a,o,r,B.a,B.a)
p=A.h(o,[l,q,p])
q=A.f(B.a,o,B.hN,B.a,B.a)
p=A.h(o,[new A.k(n,m,k),s,new A.k(n,r,p)])
return new A.aD(this.c,new A.k(n,A.f(B.a,o,B.b6,B.a,B.a),A.h(o,[new A.k(n,q,p)])))},
fQ(){var s,r,q,p,o,n,m,l=null,k=[]
for(s=0;s<19;++s){r=B.kh[s]
q=$.ur()
p=A.f(B.a,l,$.ut(),B.a,B.a)
o=A.h(r.b,B.h)
n=A.f(B.a,l,$.us(),B.a,B.a)
m=A.h(r.a,B.h)
k.push(new A.k("div",A.f(B.a,l,q,B.a,B.a),A.h(l,[new A.a8("h2",p,o),new A.a8("p",n,m)])))}return new A.k("div",A.f(B.a,l,B.fE,B.a,B.a),A.h(l,k))}}
A.h6.prototype={
E(){var s,r,q,p=this,o=null,n="Create account",m="password",l="color.muted",k=A.a(o,o,o,o,o,new A.b("color.panel",o),o,new A.m(1,new A.b("color.line",o),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,B.e,o,o,o,o,o,o,o,o,o,o,o,o,18,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(24,24,24,24),o,16,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),j=A.al(p.c,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b("color.text",o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,22,700,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),i=A.H(p.d,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(l,o),o,o,o,o,o,o,o,o,o,o,o,o,o,o,14,o,o,o,o,o,o,o,o,o,o,o,o,o,1.65,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)),h=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.d,o,o,o,o,o,o,B.j,o,o,o,o,o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),g=p.z
g=(g==null?p.r:g)?B.C:B.bE
g=A.av("Sign in",B.h,o,!1,!1,new A.kA(p),B.a,B.z,B.i,g)
s=p.z
s=(s==null?p.r:s)?B.bE:B.C
h=[j,i,A.w([g,A.av(n,B.h,o,!1,!1,new A.kB(p),B.a,B.z,B.i,s)],h)]
j=p.as
if(j!=null){i=A.a(o,o,o,o,o,new A.e("rgba(248, 113, 113, 0.08)"),o,new A.m(1,new A.e("rgba(248, 113, 113, 0.35)"),"solid"),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(12,12,12,12),o,10,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
j=A.H(j,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.e("#fca5a5"),o,o,o,o,o,o,o,o,o,o,o,o,o,o,13,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(0,0,0,0),o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o))
h.push(new A.k("div",A.f(B.a,o,i,B.a,B.a),A.h(o,[j])))}j=A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.e,o,o,o,o,o,o,o,o,o,o,o,o,14,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
i=[]
g=p.z
if(g==null?p.r:g)i.push(A.c2(p.x,o,$.r0(),"Name","name","Your name",!1,"text"))
g=$.r0()
i.push(A.c2(p.w,o,g,"Email or username","email","you@example.com",!1,"text"))
i.push(A.c2(p.y,o,g,"Password",m,"Minimum 8 characters",!1,m))
g=A.a(o,B.c,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,B.d,o,o,o,o,o,o,B.j,o,o,o,o,o,12,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o)
s=p.Q
r=p.z
q=A.F((r==null?p.r:r)?$.kb():$.qV(),o,15)
r=p.z
i.push(A.w([A.av(o,[q,A.u((r==null?p.r:r)?n:"Sign in",o)],o,!1,s,new A.kC(p),B.a,B.z,B.i,B.a6),A.Y(p.f,B.h,A.a(o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.b(l,o),o,o,o,B.k,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new A.i(8,12,8,12),o,9,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),p.e,o,B.i,o)],g))
h.push(A.eE(i,j,o))
return new A.k("div",A.f(B.a,o,k,B.a,B.a),A.h(o,h))},
bz(){var s=0,r=A.bj(t.H),q,p=2,o=[],n=this,m,l,k,j,i,h,g,f
var $async$bz=A.bk(function(a,b){if(a===1){o.push(b)
s=p}for(;;)switch(s){case 0:n.p(new A.kv(n))
p=4
j=n.z
m=(j==null?n.r:j)?"/auth/register":"/auth/login"
i=$.cg()
h=t.N
l=A.a0(h,h)
J.au(l,"email",B.b.D(n.w.a))
J.au(l,"password",n.y.a)
j=n.z
if(j==null?n.r:j)J.au(l,"name",B.b.D(n.x.a))
s=7
return A.b5(i.iq(m,l,t.P),$async$bz)
case 7:k=b
if(k.f){n.hp(k.b)
l=n.z
B.p.ad((l==null?n.r:l)?"Account created":"Signed in","Refreshing your session...")
A.vp(B.is,B.bF.git(B.bF),t.H)
s=1
break}n.p(new A.kw(n,k))
B.p.P(0,"Authentication failed",n.as)
p=2
s=6
break
case 4:p=3
f=o.pop()
n.p(new A.kx(n))
B.p.P(0,"Authentication failed",n.as)
s=6
break
case 3:s=2
break
case 6:case 1:return A.bh(q,r)
case 2:return A.bg(o.at(-1),r)}})
return A.bi($async$bz,r)},
f7(a){var s,r,q
t.h.a(a)
s=a==null
r=s?null:J.P(a,"errors")
if(typeof r=="string")return r
if(t.G.b(r)&&J.dm(r)){q=J.fY(J.q7(r))
if(t.j.b(q)&&J.dm(q))return J.t(J.fY(q))
return J.t(q)}if(s)s=null
else{s=J.P(a,"message")
s=s==null?null:J.t(s)}return s==null?"Authentication failed.":s},
hp(a){var s,r,q,p,o,n,m,l,k=null
t.h.a(a)
s=a==null?k:J.P(a,"data")
r=t.G
q=r.b(s)?J.b_(s,t.N,t.z):k
p=q==null
if(p)o=k
else{n=q.j(0,"token")
o=n==null?k:J.t(n)}m=p?k:q.j(0,"user")
if(m==null)m=q
l=r.b(m)?J.b_(m,t.N,t.z):B.a5
if(o==null||o.length===0){if(l.gM(l)){r=B.J.aa(t.P.a(l),k)
A.z(A.z(v.G.window).localStorage).setItem("auth.user",r)}return}t.P.a(l)
r=v.G
A.z(A.z(r.window).localStorage).setItem("auth.token",o)
p=B.J.aa(l,k)
A.z(A.z(r.window).localStorage).setItem("auth.user",p)
r=A.z(r.document)
p=A.d([A.oT(2,"auth.token",B.a0,!1)+"="+A.oT(2,o,B.a0,!1)],t.s)
p.push("Max-Age=2592000")
p.push("Path=/")
p.push("SameSite="+B.dY.fK(B.fn))
r.cookie=B.f.J(p,"; ")}}
A.kA.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.kz(s))},
$S:1}
A.kz.prototype={
$0(){var s=this.a
s.z=!1
s.as=null},
$S:0}
A.kB.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.ky(s))},
$S:1}
A.ky.prototype={
$0(){var s=this.a
s.z=!0
s.as=null},
$S:0}
A.kC.prototype={
$1(a){A.ab(a)
return this.a.bz()},
$S:1}
A.kv.prototype={
$0(){var s=this.a
s.Q=!0
s.as=null},
$S:0}
A.kw.prototype={
$0(){var s=this.a
s.Q=!1
s.as=s.f7(this.b.b)},
$S:0}
A.kx.prototype={
$0(){var s=this.a
s.Q=!1
s.as="Could not sign in. Check your details and try again."},
$S:0}
A.hw.prototype={
gcw(){var s=J.P(this.b,"flashSuccess")
s=s==null?null:J.t(s)
return s==null?"":s},
gcg(){var s=J.P(this.b,"flashError")
s=s==null?null:J.t(s)
return s==null?"":s},
E(){var s,r,q,p,o=this,n=null
if(o.gcw().length===0&&o.gcg().length===0)return A.cv("span",[],A.a0(t.N,t.X))
s=$.v1()
r=[]
if(o.gcw().length!==0){q=$.uQ()
p=A.H(o.gcw(),$.r_())
r.push(new A.k("div",A.f(B.a,n,q,B.a,B.a),A.h(n,[p])))}if(o.gcg().length!==0){q=$.uz()
p=A.H(o.gcg(),$.r_())
r.push(new A.k("div",A.f(B.a,n,q,B.a,B.a),A.h(n,[p])))}return new A.k("div",A.f(B.a,n,s,B.a,B.a),A.h(n,r))}}
A.hD.prototype={
E(){var s,r,q,p,o=this,n=null,m="solid",l="div",k="rgba(30, 41, 59, 0.72)",j="rgba(5, 7, 13, 0.98)",i="100%",h="color.muted",g=t.f,f=A.a(n,n,n,n,n,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(8, 47, 73, 0.2)"),0),new A.K(new A.e(j),48),new A.K(new A.e("rgba(20, 83, 45, 0.16)"),100)],g)),new A.e(j)],g)),n,n,n,n,n,n,new A.m(1,new A.e(k),m),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(48,n,0,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),e=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(0,0,0,0),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.I(i),n,n,n,n),d=A.a(n,n,n,n,n,new A.b("color.panelStrong",n),n,new A.m(1,new A.e("rgba(56, 189, 248, 0.16)"),m),n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,28,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(22,22,22,22),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),c=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(n,B.o,n,B.o),n,n,1152,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.I(i),n,n,n,n),b=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,34,n,n,n,n,n,B.n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,14,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,280,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),a0=A.a(n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
g=A.a(n,B.c,n,n,n,A.aK(A.d([A.aX(135,A.d([new A.K(new A.e("rgba(56, 189, 248, 0.24)"),0),new A.K(new A.e("rgba(52, 211, 153, 0.18)"),100)],g)),new A.e("rgba(15, 23, 42, 0.86)")],g)),n,new A.m(1,new A.e("rgba(56, 189, 248, 0.34)"),m),n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,B.q,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,38,n,n,n,n)
s=A.ty(30)
g=A.f(B.a,n,g,B.a,B.a)
s=A.h(n,[s])
r=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,2,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.u("Flint Ecosystem",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,16,900,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.u("The Unified Dart Technology Stack",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,700,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
a0=A.w([new A.k(l,g,s),new A.k(l,A.f(B.a,n,r,B.a,B.a),A.h(n,[q,p]))],a0)
p=A.H("One language powering Full-Stack Web, Cross-Platform Clients, Native AI, and Connected Robotics.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,n,n,n,n,n,n,n,n,n,n,1.6,new A.i(0,0,0,0),n,n,390,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
q=A.w([o.ae("Fullstack"),o.ae("Client SDK"),o.ae("AI Engine"),o.ae("Hardware")],q)
r=t.O
b=A.w([new A.k(l,A.f(B.a,n,a,B.a,B.a),A.h(n,[a0,p,q])),o.cm("Ecosystem Pillars",A.d([B.lY,B.lp,B.lH,B.lv,B.lZ,B.lo,B.lT],r)),o.cm("Updates & Resources",A.d([B.lz,B.m_,B.ma,B.lQ,B.m5],r)),o.cm("Community",A.d([B.lP,B.m9,B.lM,B.lG,B.lN],r))],b)
c=A.f(B.a,n,c,B.a,B.a)
b=A.h(n,[b])
r=A.a(n,B.c,n,n,n,n,n,new A.m(1,new A.e(k),m),n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,12,n,n,n,n,n,B.n,n,n,n,n,n,n,new A.i(n,B.o,n,B.o),n,n,1152,n,n,n,n,n,n,n,n,n,new A.i(22,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.I(i),n,n,n,n)
q=A.u("Copyright 2026 Flint Dart. Maintained by Eulogia Technologies.",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(h,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
p=A.a(n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,B.j,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.w([q,A.w([o.ae("v 1.3.2"),o.ae("MIT License"),o.ae("Built with Dart")],p)],r)
d=A.f(B.a,n,d,B.a,B.a)
r=A.h(n,[new A.k(l,c,b),r])
e=A.f(B.a,n,e,B.a,B.a)
r=A.h(n,[new A.k(l,d,r)])
return new A.k(l,A.f(B.a,n,f,B.a,B.a),A.h(n,[new A.k(l,e,r)]))},
cm(a,b){var s,r,q,p,o,n=null
t.gk.a(b)
s=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,150,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[A.u(a,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.e("#67e8f9"),n,n,n,B.M,n,n,n,n,n,n,n,n,n,n,11,900,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.i(n,n,3,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))]
for(q=b.length,p=0;p<b.length;b.length===q||(0,A.aJ)(b),++p){o=b[p]
r.push(A.Y(o.b,B.h,new A.l(n,n,n,n,n,n,n,n,B.M,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,13,n,n,n,new A.e("#a8b3c5"),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),o.a,n,B.i,n))}return new A.k("div",A.f(B.a,n,s,B.a,B.a),A.h(n,r))},
ae(a){var s=null,r=A.a(s,s,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.e("rgba(51, 65, 85, 0.76)"),"solid"),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.i(5,10,5,10),s,9999,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),q=A.u(a,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,11,700,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s))
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[q]))}}
A.ic.prototype={
gdk(){var s,r
if(!J.ac(J.P(this.b,"canWriteBlog"),!0)){s=t.cq.a(A.dP(["admin","contributor"],t.N))
r=B.t.gak(0)
s=r!=null&&s.H(0,r)}else s=!0
return s},
E(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,c="solid",b="Ecosystem",a="/",a0="Fullstack",a1="/fullstack",a2="/client",a3="Hardware",a4="/hardware",a5="div",a6="Overview",a7="Features",a8="Changelog",a9="Ecosystem \u2197",b0="pub.dev \u2197",b1="color.line",b2="color.panel",b3="color.text",b4="color.muted",b5=A.G(18,!1),b6=A.a(d,d,d,d,d,new A.e("rgba(255, 255, 255, 0.9)"),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),b7=t.f
b6=A.a(d,d,d,d,new A.d5("blur("+b5+")"),new A.b(b2,d),d,d,new A.m(1,new A.b(b1,d),c),d,d,d,d,d,d,d,d,d,A.a(d,d,d,d,d,A.aK(A.d([A.aX(90,B.kp),B.bK],b7)),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,b6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.ln,d,d,d,d,d,d,d,d,d,d,d,d,0,d,d,d,d,d,d,d,d,50)
s=e.gan()
r=s!=="ecosystem"
if(s==="fullstack"){b5=J.P(e.b,"flintDartVersion")
q="v"+A.Z(b5==null?"1.3.2":b5)
p=a1
o=a0
n=B.T}else if(s==="client"){b5=J.P(e.b,"flintClientVersion")
q="v"+A.Z(b5==null?"0.1.0":b5)
p=a2
o="Client SDK"
n=B.L}else{q="v0.1.0"
if(s==="ai"){o="AI Engine"
p="/ai"
n=B.b_}else if(s==="hardware"){p=a4
o=a3
n=B.A}else{q=d
p=a
o=b
n=B.L}}b5=A.a(d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,10,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,0,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
m=A.a(d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,12,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
b7=A.a(d,B.c,d,d,d,A.aK(A.d([A.aX(135,B.kG),new A.b(b2,d)],b7)),d,new A.m(1,new A.e("rgba(56, 189, 248, 0.34)"),c),d,d,d,d,d,d,d,d,d,d,d,d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,38,d,d,B.q,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b("radius.md",d),d,d,d,d,d,new A.b("shadow.glow",d),d,d,d,d,d,d,d,d,d,d,38,d,d,d,d)
l=A.ty(30)
b7=A.f(B.a,d,b7,B.a,B.a)
l=A.h(d,[l])
k=A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.e,d,d,d,d,d,d,d,d,d,d,d,d,2,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
j=A.a(d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
i=[A.u("Flint",A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new A.b(b3,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,15,800,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))]
if(q!=null){h=A.a(d,d,d,d,d,new A.e("rgba(52, 211, 153, 0.12)"),d,new A.m(1,new A.e("rgba(52, 211, 153, 0.3)"),c),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.iH,d,999,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d)
g=A.u(q,B.ik)
i.push(new A.k(a5,A.f(B.a,d,h,B.a,B.a),A.h(d,[g])))}j=A.w(i,j)
i=A.u(o,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,r?n:new A.b(b4,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,11,800,d,d,d,d,d,d,d,d,d,0.3,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
m=[A.Y(d,[new A.k(a5,b7,l),new A.k(a5,A.f(B.a,d,k,B.a,B.a),A.h(d,[j,i]))],m,p,d,B.i,d)]
if(r){b7=A.a(d,B.c,d,d,d,new A.e("rgba(255, 255, 255, 0.05)"),d,new A.m(1,new A.b(b1,d),c),d,d,d,d,d,d,d,d,new A.b(b4,d),d,d,d,B.O,d,d,d,d,d,d,d,d,d,d,11,700,4,d,d,d,A.a(d,d,d,d,d,new A.e("rgba(255, 255, 255, 0.1)"),d,d,d,d,d,d,d,d,d,d,new A.b(b3,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.j1,d,999,d,d,d,d,d,d,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.k,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d)
m.push(A.Y(d,[A.F($.q3(),d,12),A.u(b,d)],b7,a,d,B.i,d))}b7=e.b
l=J.ao(b7)
if(J.ac(l.j(b7,"showGuideMenu"),!0))m.push(e.fS())
if(J.ac(l.j(b7,"showApiMenu"),!0))m.push(e.f_())
b5=A.w(m,b5)
s=e.gan()
if(s==="fullstack")f=A.d([e.G(a1,a6),e.G("/fullstack#features",a7),e.G("/fullstack/guides","Guides"),e.G("/fullstack/api","API"),e.G("/fullstack/whats-new","What's New"),e.G("/fullstack/changelog",a8),e.G("/fullstack/examples","Examples"),e.G(a,a9)],t.Y)
else if(s==="client")f=A.d([e.G(a2,a6),e.G("/client#features",a7),e.G("/client#caching","Caching"),e.G("/client#channels","Real-Time"),e.G("https://pub.dev/packages/flint_client",b0),e.G(a,a9)],t.Y)
else if(s==="ai")f=A.d([e.G("/ai",a6),e.G("/ai#agents","Agents"),e.G("/ai#tools","Tool Policies"),e.G("/ai#chat","Streaming"),e.G("https://pub.dev/packages/flint_ai",b0),e.G(a,a9)],t.Y)
else{b7=t.Y
f=s==="hardware"?A.d([e.G(a4,a6),e.G("/hardware#sensors","Sensors"),e.G("/hardware#statemachine","State Machine"),e.G("/hardware#wokwi","Wokwi Simulator"),e.G("https://pub.dev/packages/flint_hardware",b0),e.G(a,a9)],b7):A.d([e.G(a,b),e.G(a1,a0),e.G(a2,"Client"),e.G("/ai","AI"),e.G(a4,a3),e.G("/api","API"),e.G("/blog","Blog"),e.G("/questions","Questions"),e.G("/changelog",a8)],b7)}b7=A.w(f,A.a(d,B.c,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.O,d,d,d,d,d,d,d,d,d,d,d,d,6,d,d,d,d,d,d,d,d,d,A.a(d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,B.d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d),d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d))
m=e.h8()
m=[new A.k(a5,A.f(B.a,d,B.hM,B.a,B.a),A.h(d,[b5,b7,m]))]
if(e.c)m.push(e.h9())
if(e.d)m.push(e.fR())
if(e.e)m.push(e.eZ())
return new A.k(a5,A.f(B.a,d,b6,B.a,B.a),A.h(d,m))},
gan(){var s,r=this.b,q=J.ao(r),p=q.j(r,"activePillar"),o=p==null?null:J.t(p)
if(o!=null&&o.length!==0)return o
r=q.j(r,"currentPath")
s=r==null?null:J.t(r)
if(s==null)s=""
if(B.b.K(s,"/fullstack")||B.b.K(s,"/guides")||B.b.K(s,"/api")||B.b.K(s,"/whats-new")||B.b.K(s,"/changelog")||B.b.K(s,"/examples")||B.b.K(s,"/ui"))return"fullstack"
if(B.b.K(s,"/client"))return"client"
if(B.b.K(s,"/ai"))return"ai"
if(B.b.K(s,"/hardware"))return"hardware"
return"ecosystem"},
fS(){var s=null,r=A.ak(["aria-label",this.d?"Close guide navigation":"Open guide navigation"],t.N,t.X),q=this.d,p=q?new A.e("rgba(52, 211, 153, 0.16)"):new A.b("color.panel",s)
p=A.a(s,B.c,s,s,s,p,s,new A.m(1,new A.e("rgba(52, 211, 153, 0.34)"),"solid"),s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,B.hd,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,B.q,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.O,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,B.l,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,s,s)
return A.av(A.F(q?$.kf():$.fV(),s,17),B.h,p,!1,!1,new A.mF(this),r,B.z,B.B,B.H)},
f_(){var s=null,r=A.ak(["aria-label",this.e?"Close API navigation":"Open API navigation"],t.N,t.X),q=this.e,p=q?new A.e("rgba(14, 165, 233, 0.18)"):new A.b("color.panel",s)
p=A.a(s,B.c,s,s,s,p,s,new A.m(1,new A.e("rgba(56, 189, 248, 0.34)"),"solid"),s,s,s,s,s,s,s,s,new A.b("color.accent",s),s,B.i6,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,B.q,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.O,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,B.l,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,38,s,s,s,s)
return A.av(A.F(q?$.kf():$.qU(),s,17),B.h,p,!1,!1,new A.mz(this),r,B.z,B.B,B.H)},
G(a,b){var s=null,r=A.a(s,s,s,s,s,new A.e("rgba(255, 255, 255, 0.06)"),s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)
return A.Y(b,B.h,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,s,s,s,s,s,s,s,s,s,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.at(0,0,3,new A.e("rgba(56, 189, 248, 0.28)")),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,13,700,s,s,s,s,r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.br,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b3("all 160ms ease"),s,s,s,s,s,s,s),a,s,B.i,s)},
h8(){var s,r,q,p,o,n=this,m=null,l="solid",k="radius.md",j="rgba(52, 211, 153, 0.34)",i="rgba(52, 211, 153, 0.1)",h="color.primary",g="auth.user",f=A.a(m,B.c,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,10,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),e=[]
if(n.gdk())e.push(A.Y("Write",B.h,A.a(m,m,m,m,m,new A.e(i),m,new A.m(1,new A.e(j),l),m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,B.O,m,m,m,m,m,m,m,m,m,m,13,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.k,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,B.ar,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),"/blog/write",m,B.i,m))
e.push(n.hP())
s=n.b
r=J.ao(s)
if(J.ac(r.j(s,"isAuthenticated"),!0)||B.t.gV()!=null){q=A.a(m,B.c,m,m,m,new A.e(i),m,new A.m(1,new A.e(j),l),m,m,m,m,m,m,m,m,m,m,m,m,B.O,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.d,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,B.cQ,m,new A.b("radius.pill",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m)
p=A.f(B.a,m,A.a(m,m,m,m,m,new A.e("#6ee7b7"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,9999,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,8,m,m,m,m),B.a,B.a)
o=A.h(m,B.h)
s=r.j(s,"currentUserLabel")
s=s==null?m:J.t(s)
if(s==null){s=J.P(B.aD.cW(g),"name")
s=s==null?m:J.t(s)}if(s==null){s=J.P(B.aD.cW(g),"email")
s=s==null?m:J.t(s)}if(s==null)s="Signed in"
s=A.u(s,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b(h,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m))
e.push(new A.k("div",A.f(B.a,m,q,B.a,B.a),A.h(m,[new A.k("div",p,o),s])))}e.push(A.Y("GitHub",B.h,A.a(m,m,m,m,m,new A.e("rgba(2, 132, 199, 0.08)"),m,new A.m(1,new A.e("rgba(2, 132, 199, 0.28)"),l),m,m,m,m,m,m,m,m,new A.b("color.accent",m),m,B.ii,m,m,m,m,m,m,m,m,m,m,m,m,13,800,m,m,m,m,A.a(m,m,m,m,m,new A.e("rgba(2, 132, 199, 0.14)"),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.ar,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,new A.b3("all 160ms ease"),m,m,m,m,m,m,m),"https://github.com/flint-dart/flint_dart","_blank",B.i,m))
e.push(A.av("Menu",B.h,A.a(m,m,m,m,m,new A.b("color.panel",m),m,new A.m(1,new A.e("rgba(51, 65, 85, 0.95)"),l),m,m,m,m,m,m,m,m,new A.b("color.muted",m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,12,800,m,m,m,m,m,m,m,m,m,m,A.a(m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,B.O,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m,m,m,m,m,m,m,m,56,m,m,m,m,m,m,B.cQ,m,new A.b(k,m),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),!1,!1,new A.mH(n),B.a,B.z,B.B,B.H))
return A.w(e,f)},
e4(a){return new A.cG($.q5().a,new A.mN(a),t.ch)},
hP(){return this.e4(!1)},
h9(){var s,r,q,p,o=this,n=null,m="/fullstack",l="Overview",k="Features",j="Changelog",i="div",h="Ecosystem Overview",g="/client",f="Client SDK",e="/ai",d="AI Engine",c="/hardware",b="Hardware & Robotics",a="/questions",a0="Questions",a1="pub.dev Package",a2="Fullstack Framework",a3="radius.md",a4="color.panel",a5="color.muted",a6="color.line",a7=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.bx,n,n,0,n,n,n,n,n,n,n,n,n,0,n,n,n,n,n,n,n,n,100),a8=A.cv("button",B.h,A.ak(["type","button","aria-label","Close navigation","onClick",new A.mK(o),"style",B.bw],t.N,t.X)),a9=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.at(18,44,-28,new A.e("rgba(15, 23, 42, 0.22)")),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
a9=A.a(n,n,n,n,n,new A.b(a4,n),n,new A.m(1,new A.e("rgba(71, 85, 105, 0.8)"),"solid"),n,n,n,n,n,n,n,n,n,n,A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.at(18,54,-24,new A.e("rgba(0, 0, 0, 0.58)")),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,a9,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.R,B.az,new A.b(a3,n),n,12,n,n,n,n,n,n,n,n,n,12,n,n,n,n,new A.I("min(360px, calc(100% - 24px))"),n,n,n,n)
s=A.a(n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,12,n,n,n,n,n,B.n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=A.u("Navigation",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b("color.text",n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,14,900,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n))
q=A.a(n,B.c,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.d,n,n,n,n,n,n,n,n,n,n,n,n,8,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
s=A.w([r,A.w([o.e4(!0),A.av("Close",B.h,A.a(n,n,n,n,n,new A.b(a4,n),n,new A.m(1,new A.e("rgba(51, 65, 85, 0.95)"),"solid"),n,n,n,n,n,n,n,n,new A.b(a5,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,12,800,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,58,n,n,n,n,n,n,B.cP,n,new A.b(a3,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),!1,!1,new A.mL(o),B.a,B.z,B.B,B.H)],q)],s)
q=A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,B.e,n,n,n,n,n,n,n,n,n,n,n,n,6,n,n,n,n,n,n,n,n,n,n,n,n,B.iG,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)
r=[]
if(o.gan()==="fullstack")B.f.S(r,[A.u("FLINT FULLSTACK",B.hc),o.A(m,l),o.A("/fullstack#features",k),o.A("/fullstack/guides","Guides"),o.A("/fullstack/api","API Reference"),o.A("/fullstack/whats-new","What's New"),o.A("/fullstack/changelog",j),o.A("/fullstack/examples","Examples"),new A.k(i,A.f(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.as,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.h(n,B.h)),A.u("ECOSYSTEM",A.a(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,new A.b(a5,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,11,800,n,n,n,n,n,n,n,n,n,0.5,n,n,n,B.au,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)),o.A("/",h),o.A(g,f),o.A(e,d),o.A(c,b),o.A("/blog","Blog"),o.A(a,a0)])
else if(o.gan()==="client")B.f.S(r,[A.u("FLINT CLIENT SDK",B.fy),o.A(g,l),o.A("/client#features",k),o.A("/client#caching","Caching"),o.A("/client#channels","Real-Time Channels"),o.A("https://pub.dev/packages/flint_client",a1),new A.k(i,A.f(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.as,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.h(n,B.h)),o.A("/",h),o.A(m,a2),o.A(e,d),o.A(c,b)])
else if(o.gan()==="ai")B.f.S(r,[A.u("FLINT AI ENGINE",B.fY),o.A(e,l),o.A("/ai#agents","Agents & Workflows"),o.A("/ai#tools","Tool Policies"),o.A("/ai#chat","Streaming Chat"),o.A("https://pub.dev/packages/flint_ai",a1),new A.k(i,A.f(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.as,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.h(n,B.h)),o.A("/",h),o.A(m,a2),o.A(g,f),o.A(c,b)])
else if(o.gan()==="hardware")B.f.S(r,[A.u("FLINT HARDWARE & ROBOTICS",B.fJ),o.A(c,l),o.A("/hardware#sensors","Sensors & IMU"),o.A("/hardware#statemachine","State Machine"),o.A("/hardware#wokwi","Wokwi Simulator"),o.A("https://pub.dev/packages/flint_hardware",a1),new A.k(i,A.f(B.a,n,A.a(n,n,n,n,n,new A.b(a6,n),n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,n,n,n,n,n,n,n,n,B.as,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),B.a,B.a),A.h(n,B.h)),o.A("/",h),o.A(m,a2),o.A(g,f),o.A(e,d)])
else{p=[o.A("/","Ecosystem"),o.A(m,"Fullstack"),o.A(g,"Client"),o.A(e,"AI"),o.A(c,"Hardware"),o.A("/api","API"),o.A("/blog","Blog"),o.A(a,a0),o.A("/changelog",j)]
if(o.gdk())p.push(o.A("/blog/write","Write Blog Post"))
B.f.S(r,p)}q=A.f(B.a,n,q,B.a,B.a)
r=A.h(n,r)
a9=A.f(B.a,n,a9,B.a,B.a)
r=A.h(n,[s,new A.k(i,q,r)])
return new A.k(i,A.f(B.a,n,a7,B.a,B.a),A.h(n,[a8,new A.k(i,a9,r)]))},
fR(){var s,r,q,p=null,o="solid",n="radius.md",m="color.panel",l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.O,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,B.bx,p,p,0,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,100),k=A.cv("button",B.h,A.ak(["type","button","aria-label","Close guide navigation","onClick",new A.mC(this),"style",B.bw],t.N,t.X)),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.at(18,44,-28,new A.e("rgba(15, 23, 42, 0.22)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
j=A.a(p,p,p,p,p,new A.b(m,p),p,new A.m(1,new A.e("rgba(71, 85, 105, 0.8)"),o),p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.at(18,54,-24,new A.e("rgba(0, 0, 0, 0.58)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,j,p,p,p,new A.I("calc(100vh - 104px)"),p,p,p,p,p,p,B.aW,p,p,p,B.l,B.az,new A.b(n,p),p,16,p,p,p,p,p,p,p,p,p,82,p,p,p,p,p,p,p,p,p)
s=A.a(p,B.c,p,p,p,p,p,p,new A.m(1,new A.e("rgba(30, 41, 59, 1)"),o),p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,B.n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.a(p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.w([A.F($.fV(),B.a7,16),A.u("Guides",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,900,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],r)
q=A.a(p,B.c,p,p,p,new A.b(m,p),p,new A.m(1,new A.e("rgba(51, 65, 85, 0.95)"),o),p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p)
s=A.w([r,A.av(A.F($.kf(),p,16),B.h,q,!1,!1,new A.mD(this),B.l5,B.z,B.B,B.H)],s)
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=J.P(this.b,"initialSection")
r=r==null?p:J.t(r)
r=A.rk(r==null?"introduction":r,!0)
q=A.f(B.a,p,q,B.a,B.a)
r=A.h(p,[r])
j=A.f(B.a,p,j,B.a,B.a)
r=A.h(p,[s,new A.k("div",q,r)])
return new A.k("div",A.f(B.a,p,l,B.a,B.a),A.h(p,[k,new A.k("div",j,r)]))},
eZ(){var s,r,q,p=null,o="solid",n="radius.md",m="color.panel",l=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.O,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,B.bx,p,p,0,p,p,p,p,p,p,p,p,p,0,p,p,p,p,p,p,p,p,100),k=A.cv("button",B.h,A.ak(["type","button","aria-label","Close API navigation","onClick",new A.mw(this),"style",B.bw],t.N,t.X)),j=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.at(18,44,-28,new A.e("rgba(15, 23, 42, 0.22)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
j=A.a(p,p,p,p,p,new A.b(m,p),p,new A.m(1,new A.e("rgba(71, 85, 105, 0.8)"),o),p,p,p,p,p,p,p,p,p,p,A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.at(18,54,-24,new A.e("rgba(0, 0, 0, 0.58)")),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,16,p,p,j,p,p,p,new A.I("calc(100vh - 104px)"),p,p,p,p,p,p,B.aW,p,p,p,B.l,B.az,new A.b(n,p),p,16,p,p,p,p,p,p,p,p,p,82,p,p,p,p,p,p,p,p,p)
s=A.a(p,B.c,p,p,p,p,p,p,new A.m(1,new A.e("rgba(30, 41, 59, 1)"),o),p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,12,p,p,p,p,p,B.n,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.a(p,B.c,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.d,p,p,p,p,p,p,p,p,p,p,p,p,8,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.w([A.F($.qU(),B.aG,16),A.u("API",A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.b("color.text",p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,14,900,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p))],r)
q=A.a(p,B.c,p,p,p,new A.b(m,p),p,new A.m(1,new A.e("rgba(51, 65, 85, 0.95)"),o),p,p,p,p,p,p,p,p,new A.b("color.muted",p),p,p,p,B.k,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,B.q,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.l,p,new A.b(n,p),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,34,p,p,p,p)
s=A.w([r,A.av(A.F($.kf(),p,16),B.h,q,!1,!1,new A.mx(this),B.l4,B.z,B.B,B.H)],s)
q=A.a(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new A.i(14,14,14,14),p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=J.P(this.b,"initialSection")
r=r==null?p:J.t(r)
if(r==null)r="flint-class"
q=A.f(B.a,p,q,B.a,B.a)
r=A.h(p,[new A.em(r,!0)])
j=A.f(B.a,p,j,B.a,B.a)
r=A.h(p,[s,new A.k("div",q,r)])
return new A.k("div",A.f(B.a,p,l,B.a,B.a),A.h(p,[k,new A.k("div",j,r)]))},
A(a,b){var s=null
return A.Y(b,B.h,A.a(s,s,s,s,s,new A.b("color.panel",s),s,s,s,s,s,s,s,s,s,s,new A.b("color.muted",s),s,s,s,B.M,s,s,s,s,s,s,s,s,s,s,14,800,s,s,s,s,A.a(s,s,s,s,s,new A.e("rgba(255, 255, 255, 0.07)"),s,s,s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,B.ix,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),a,s,B.i,s)}}
A.mF.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.mE(s))},
$S:1}
A.mE.prototype={
$0(){var s=this.a
s.c=!1
s.d=!s.d},
$S:0}
A.mz.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.my(s))},
$S:1}
A.my.prototype={
$0(){var s=this.a
s.d=s.c=!1
s.e=!s.e},
$S:0}
A.mH.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.mG(s))},
$S:1}
A.mG.prototype={
$0(){var s=this.a
s.e=s.d=!1
s.c=!0},
$S:0}
A.mN.prototype={
$1(a){var s=null,r=t.c.a(a)===B.Y,q=r?"Switch to light mode":"Switch to dark mode",p=A.ak(["aria-label",q,"title",q],t.N,t.X),o=this.a,n=o?B.o:38,m=o?B.cD:B.l,l=o?8:s
n=A.a(s,B.c,s,s,s,new A.b("color.panel",s),s,new A.m(1,new A.b("color.line",s),"solid"),s,s,s,s,s,s,s,s,new A.b("color.text",s),s,s,s,B.k,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,38,A.a(s,s,s,s,s,new A.b("color.panelStrong",s),s,s,s,s,s,s,s,s,s,s,new A.b("color.primary",s),s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s),s,B.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,m,s,new A.b("radius.md",s),s,s,s,s,s,s,s,s,s,s,s,s,s,new A.b3("all 160ms ease"),s,s,n,s,s,s,s)
m=[A.F(r?$.u5():$.u3(),s,17)]
if(o){o=r?"Light mode":"Dark mode"
m.push(A.u(o,A.a(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,12,800,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s)))}return A.av(s,m,n,!1,!1,new A.mM(),p,B.z,B.B,B.H)},
$S:78}
A.mM.prototype={
$1(a){var s,r,q,p
A.ab(a)
s=$.q5()
r=s.a
q=r.a===B.Y?B.av:B.Y
r.a=r.$ti.c.a(q)
r.bR()
p=s.c
if(s.b!=null&&p!=null&&p.length!==0)A.z(A.z(v.G.window).localStorage).setItem(p,q.c)
s.df(q)
return q},
$S:1}
A.mK.prototype={
$1(a){var s=this.a
return s.p(new A.mJ(s))},
$S:7}
A.mJ.prototype={
$0(){return this.a.c=!1},
$S:0}
A.mL.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.mI(s))},
$S:1}
A.mI.prototype={
$0(){return this.a.c=!1},
$S:0}
A.mC.prototype={
$1(a){var s=this.a
return s.p(new A.mB(s))},
$S:7}
A.mB.prototype={
$0(){return this.a.d=!1},
$S:0}
A.mD.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.mA(s))},
$S:1}
A.mA.prototype={
$0(){return this.a.d=!1},
$S:0}
A.mw.prototype={
$1(a){var s=this.a
return s.p(new A.mv(s))},
$S:7}
A.mv.prototype={
$0(){return this.a.e=!1},
$S:0}
A.mx.prototype={
$1(a){var s
A.ab(a)
s=this.a
return s.p(new A.mu(s))},
$S:1}
A.mu.prototype={
$0(){return this.a.e=!1},
$S:0}
A.aD.prototype={
E(){var s=null,r=$.uL(),q=this.c,p=this.d,o=A.f(B.a,s,B.hQ,B.a,B.a)
p=A.h(s,[p])
return new A.k("div",A.f(B.a,s,r,B.a,B.a),A.h(s,[new A.ic(q),new A.hw(q),new A.k("div",o,p),new A.hD()]))}}
A.q8.prototype={}
A.ok.prototype={}
A.fh.prototype={$ivR:1}
A.ol.prototype={
$1(a){return this.a.$1(A.z(a))},
$S:4};(function aliases(){var s=J.dI.prototype
s.eM=s.l
s=J.cE.prototype
s.eN=s.l
s=A.C.prototype
s.eO=s.bW
s=A.o.prototype
s.d5=s.aH})();(function installTearOffs(){var s=hunkHelpers._static_0,r=hunkHelpers._static_1,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_0i,o=hunkHelpers.installStaticTearOff,n=hunkHelpers._instance_1u
s(A,"xo","vA",22)
r(A,"xP","w7",11)
r(A,"xQ","w8",11)
r(A,"xR","w9",11)
s(A,"tx","xF",0)
r(A,"xX","wX",23)
q(A.a_.prototype,"gaz","a4",0)
r(A,"pC","yv",80)
p(A.h9.prototype,"git","iu",0)
q(A.cG.prototype,"gaz","a4",0)
r(A,"qL","x6",25)
o(A,"ys",1,null,["$2$unitlessNumber","$1"],["O",function(a){return A.O(a,!1)}],59,0)
o(A,"yt",1,null,["$2$unitlessNumber","$1"],["G",function(a){return A.G(a,!1)}],54,0)
q(A.eI.prototype,"gaz","a4",0)
q(A.eH.prototype,"gaz","a4",0)
n(A.cT.prototype,"gf5","bb",14)
n(A.cU.prototype,"gfa","bc",14)
q(A.d_.prototype,"gaz","a4",0)
q(A.d3.prototype,"gaz","a4",0)
n(A.d6.prototype,"ghJ","bB",14)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.T,null)
q(A.T,[A.qa,J.dI,A.f3,J.cS,A.o,A.eq,A.W,A.cz,A.as,A.C,A.nw,A.bE,A.eS,A.d8,A.f7,A.fc,A.aA,A.cH,A.bJ,A.dQ,A.es,A.cs,A.cl,A.o6,A.mP,A.ez,A.fA,A.mm,A.eQ,A.d2,A.eP,A.dK,A.fr,A.j2,A.f5,A.jO,A.c1,A.jj,A.k_,A.fE,A.j3,A.fB,A.bb,A.j6,A.da,A.aq,A.j4,A.iz,A.jM,A.fN,A.fm,A.jt,A.fo,A.fq,A.fK,A.cX,A.hg,A.oH,A.oX,A.oU,A.cY,A.bA,A.oj,A.ig,A.f4,A.om,A.bX,A.a4,A.aM,A.jR,A.nG,A.b2,A.fL,A.o8,A.jG,A.l5,A.S,A.eA,A.mO,A.nF,A.bU,A.c9,A.l9,A.lq,A.cK,A.kD,A.le,A.fe,A.oe,A.l1,A.M,A.mQ,A.h9,A.o2,A.eC,A.hA,A.fi,A.dZ,A.ep,A.l4,A.e,A.l,A.eF,A.lO,A.kE,A.bB,A.hy,A.K,A.iK,A.b,A.hB,A.lp,A.aR,A.cm,A.nr,A.i,A.I,A.aL,A.aB,A.m,A.at,A.be,A.d5,A.hC,A.kW,A.nv,A.hk,A.ih,A.o_,A.kF,A.l8,A.nq,A.iQ,A.b3,A.ki,A.kj,A.kl,A.kk,A.nL,A.od,A.co,A.ly,A.bW,A.mf,A.bC,A.lo,A.jH,A.fd,A.jV,A.jh,A.fj,A.ji,A.jl,A.fk,A.jm,A.q8,A.fh])
q(J.dI,[J.hQ,J.eK,J.c,J.dL,J.dM,J.eL,J.d1])
q(J.c,[J.cE,J.a2,A.dS,A.eU,A.x,A.fZ,A.eo,A.bT,A.am,A.j8,A.bc,A.hm,A.ho,A.ja,A.ev,A.jc,A.hq,A.jf,A.bp,A.hL,A.jn,A.i_,A.i0,A.ju,A.jv,A.br,A.jw,A.jy,A.bs,A.jC,A.jF,A.bu,A.jI,A.bv,A.jL,A.b8,A.jT,A.iL,A.bx,A.jW,A.iO,A.iW,A.k0,A.k2,A.k4,A.k6,A.k8,A.bD,A.jr,A.bG,A.jA,A.il,A.jP,A.bI,A.jY,A.h3,A.j5])
q(J.cE,[J.ii,J.e1,J.cj])
r(J.hP,A.f3)
r(J.mi,J.a2)
q(J.eL,[J.eJ,J.hR])
q(A.o,[A.e5,A.E,A.aT,A.aG,A.d7,A.d9,A.dd,A.j1,A.jN,A.e8])
r(A.cV,A.e5)
r(A.fg,A.cV)
q(A.W,[A.cW,A.bZ,A.fl,A.jp])
q(A.cz,[A.hc,A.kZ,A.hb,A.iF,A.pN,A.pP,A.og,A.of,A.p_,A.ox,A.oA,A.nJ,A.oL,A.oD,A.mo,A.oF,A.pV,A.pW,A.pH,A.lb,A.lc,A.lt,A.lu,A.lv,A.lw,A.ls,A.lg,A.lh,A.lj,A.pU,A.pR,A.pS,A.q0,A.q1,A.p8,A.p9,A.pa,A.pb,A.pc,A.pD,A.pE,A.p2,A.p3,A.nD,A.nN,A.nO,A.ns,A.pX,A.pY,A.l7,A.nP,A.nQ,A.nM,A.nZ,A.o0,A.mg,A.ph,A.pi,A.pj,A.pu,A.pv,A.pw,A.px,A.py,A.pz,A.pA,A.pB,A.pk,A.pl,A.pm,A.pn,A.po,A.pp,A.pq,A.pr,A.ps,A.pt,A.pe,A.pf,A.pg,A.lT,A.lU,A.kY,A.ma,A.mb,A.md,A.kI,A.kH,A.kP,A.l0,A.lI,A.lK,A.lL,A.lM,A.m3,A.m1,A.m2,A.nc,A.no,A.mW,A.mX,A.nh,A.n2,A.n3,A.n4,A.n5,A.n6,A.n7,A.n8,A.nd,A.mU,A.mV,A.nf,A.ng,A.ne,A.np,A.nx,A.ny,A.nB,A.nz,A.nA,A.kA,A.kB,A.kC,A.mF,A.mz,A.mH,A.mN,A.mM,A.mK,A.mL,A.mC,A.mD,A.mw,A.mx,A.ol])
q(A.hc,[A.l_,A.l2,A.mj,A.pO,A.p0,A.pd,A.oy,A.oB,A.mn,A.mp,A.oI,A.oS,A.oa,A.o9,A.oR,A.oQ,A.mq,A.mr,A.ms,A.mt,A.nt,A.nu,A.nH,A.nI,A.kt,A.ku,A.lf,A.pG,A.oZ,A.kX,A.lB,A.km,A.kJ,A.kQ,A.nb,A.nR])
q(A.as,[A.hV,A.cp,A.hS,A.iT,A.ir,A.je,A.eN,A.h1,A.bS,A.fb,A.iS,A.d4,A.he])
r(A.e2,A.C)
r(A.dx,A.e2)
q(A.E,[A.ax,A.ck,A.aS,A.ah,A.dc,A.fp])
q(A.ax,[A.f6,A.af,A.jq])
r(A.cZ,A.aT)
r(A.ey,A.d7)
q(A.bJ,[A.dg,A.e6,A.e7])
q(A.dg,[A.ag,A.aH])
r(A.a1,A.e6)
r(A.cb,A.e7)
r(A.e9,A.dQ)
r(A.ca,A.e9)
r(A.et,A.ca)
r(A.a9,A.es)
q(A.cl,[A.dy,A.fx])
q(A.dy,[A.dz,A.ci])
q(A.hb,[A.mS,A.oh,A.oi,A.oO,A.oN,A.lN,A.oo,A.ot,A.os,A.oq,A.op,A.ow,A.ov,A.ou,A.oz,A.nK,A.oK,A.p7,A.oW,A.oV,A.ld,A.la,A.lx,A.lr,A.ln,A.li,A.lm,A.lk,A.ll,A.o4,A.o5,A.o3,A.pF,A.nE,A.nC,A.lA,A.lz,A.lS,A.me,A.m8,A.m9,A.m7,A.m5,A.m6,A.m4,A.mc,A.kn,A.ko,A.kp,A.kq,A.kr,A.kK,A.kL,A.kM,A.kN,A.kO,A.kR,A.kS,A.kT,A.kU,A.kV,A.lG,A.lH,A.lF,A.lD,A.lE,A.lC,A.lJ,A.lP,A.lQ,A.lR,A.lZ,A.m_,A.lY,A.lW,A.lX,A.lV,A.m0,A.ni,A.nj,A.nk,A.nl,A.nm,A.nn,A.n1,A.n0,A.n_,A.mZ,A.mY,A.n9,A.na,A.nS,A.nT,A.nU,A.nV,A.nW,A.kz,A.ky,A.kv,A.kw,A.kx,A.mE,A.my,A.mG,A.mJ,A.mI,A.mB,A.mA,A.mv,A.mu])
r(A.eY,A.cp)
q(A.iF,[A.ix,A.ds])
r(A.eM,A.bZ)
q(A.eU,[A.i4,A.b1])
q(A.b1,[A.ft,A.fv])
r(A.fu,A.ft)
r(A.eT,A.fu)
r(A.fw,A.fv)
r(A.bF,A.fw)
q(A.eT,[A.i5,A.i6])
q(A.bF,[A.i7,A.i8,A.i9,A.ia,A.ib,A.eV,A.eW])
r(A.fF,A.je)
r(A.cr,A.j6)
r(A.jE,A.fN)
r(A.fn,A.fl)
r(A.de,A.fx)
q(A.cX,[A.h8,A.hr,A.hT])
q(A.hg,[A.kG,A.ml,A.mk,A.oc,A.ob])
r(A.hU,A.eN)
r(A.oG,A.oH)
r(A.iX,A.hr)
q(A.bS,[A.f0,A.hO])
r(A.j9,A.fL)
q(A.x,[A.a5,A.hu,A.bt,A.fy,A.bw,A.b9,A.fC,A.iY,A.h5,A.cy])
q(A.a5,[A.L,A.c7])
r(A.N,A.L)
q(A.N,[A.h_,A.h0,A.hG,A.is,A.f9])
r(A.hh,A.bT)
r(A.dB,A.j8)
q(A.bc,[A.hi,A.hj])
r(A.jb,A.ja)
r(A.eu,A.jb)
r(A.jd,A.jc)
r(A.hp,A.jd)
r(A.bn,A.eo)
r(A.jg,A.jf)
r(A.ht,A.jg)
r(A.jo,A.jn)
r(A.d0,A.jo)
r(A.i1,A.ju)
r(A.i2,A.jv)
r(A.jx,A.jw)
r(A.i3,A.jx)
r(A.jz,A.jy)
r(A.eX,A.jz)
r(A.jD,A.jC)
r(A.ik,A.jD)
r(A.iq,A.jF)
r(A.fz,A.fy)
r(A.it,A.fz)
r(A.jJ,A.jI)
r(A.iu,A.jJ)
r(A.iy,A.jL)
r(A.jU,A.jT)
r(A.iI,A.jU)
r(A.fD,A.fC)
r(A.iJ,A.fD)
r(A.jX,A.jW)
r(A.iN,A.jX)
r(A.k1,A.k0)
r(A.j7,A.k1)
r(A.ff,A.ev)
r(A.k3,A.k2)
r(A.jk,A.k3)
r(A.k5,A.k4)
r(A.fs,A.k5)
r(A.k7,A.k6)
r(A.jK,A.k7)
r(A.k9,A.k8)
r(A.jS,A.k9)
r(A.js,A.jr)
r(A.hW,A.js)
r(A.jB,A.jA)
r(A.id,A.jB)
r(A.jQ,A.jP)
r(A.iA,A.jQ)
r(A.jZ,A.jY)
r(A.iP,A.jZ)
r(A.h4,A.j5)
r(A.ie,A.cy)
q(A.oj,[A.e3,A.cB,A.eD,A.o1,A.l3,A.c6,A.bV,A.cA,A.hx,A.cR,A.dN,A.dT,A.nY,A.e_,A.er,A.du,A.mh])
q(A.M,[A.a_,A.cC,A.eB,A.a8,A.dE])
q(A.a_,[A.iw,A.ha,A.hl,A.iR,A.dv,A.dA,A.dD,A.hw,A.ic])
q(A.iw,[A.cG,A.eI,A.em,A.hJ,A.hK,A.hv,A.eH,A.ij,A.j_,A.dn,A.dp,A.cT,A.dq,A.dr,A.cU,A.dw,A.dF,A.d_,A.dG,A.dH,A.d3,A.dU,A.dX,A.dY,A.d6,A.e0,A.e4,A.h6,A.hD,A.aD])
r(A.iZ,A.ep)
r(A.hZ,A.iZ)
q(A.a8,[A.dt,A.iv,A.hE,A.iG,A.iH,A.hM,A.hH,A.j0,A.hd,A.k,A.hN,A.hX,A.ip])
r(A.ok,A.iz)
s(A.e2,A.cH)
s(A.ft,A.C)
s(A.fu,A.aA)
s(A.fv,A.C)
s(A.fw,A.aA)
s(A.e9,A.fK)
s(A.j8,A.l5)
s(A.ja,A.C)
s(A.jb,A.S)
s(A.jc,A.C)
s(A.jd,A.S)
s(A.jf,A.C)
s(A.jg,A.S)
s(A.jn,A.C)
s(A.jo,A.S)
s(A.ju,A.W)
s(A.jv,A.W)
s(A.jw,A.C)
s(A.jx,A.S)
s(A.jy,A.C)
s(A.jz,A.S)
s(A.jC,A.C)
s(A.jD,A.S)
s(A.jF,A.W)
s(A.fy,A.C)
s(A.fz,A.S)
s(A.jI,A.C)
s(A.jJ,A.S)
s(A.jL,A.W)
s(A.jT,A.C)
s(A.jU,A.S)
s(A.fC,A.C)
s(A.fD,A.S)
s(A.jW,A.C)
s(A.jX,A.S)
s(A.k0,A.C)
s(A.k1,A.S)
s(A.k2,A.C)
s(A.k3,A.S)
s(A.k4,A.C)
s(A.k5,A.S)
s(A.k6,A.C)
s(A.k7,A.S)
s(A.k8,A.C)
s(A.k9,A.S)
s(A.jr,A.C)
s(A.js,A.S)
s(A.jA,A.C)
s(A.jB,A.S)
s(A.jP,A.C)
s(A.jQ,A.S)
s(A.jY,A.C)
s(A.jZ,A.S)
s(A.j5,A.W)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{y:"int",ae:"double",aZ:"num",j:"String",ad:"bool",aM:"Null",B:"List",T:"Object",A:"Map",D:"JSObject"},mangledNames:{},types:["~()","~(T)","~(j,@)","aM(@)","~(D)","A<j,@>(A<@,@>)","a4<j,@>(@,@)","~(@)","ad(j)","ad(a4<j,T?>)","j(a4<j,T?>)","~(~())","aM()","aM(D)","bo<~>(T)","ad(A<j,@>)","~(T?,T?)","j(@)","~(j,j)","@(j)","bo<~>()","~(iM)","y()","@(@)","aM(T,cF)","j(T)","@()","B<A<j,@>>(B<A<j,@>>?)","j(aR)","j()","aM(@,cF)","~(y,@)","ad(j?)","j(j?)","j(a4<j,l>)","j(a4<bV,l>)","j(a4<c6,l>)","bo<~>(eC,y)","B<bY>()","0&(j,y?)","j(be)","j(b3)","T?(T?)","co()","~(@,@)","ad(j,B<j>)","a8(bC)","dH(A<j,@>)","dF(A<j,@>)","e4(A<j,@>)","dv(A<j,@>)","dw(A<j,@>)","dn(A<j,@>)","dG(A<j,@>)","j(T?{unitlessNumber:ad})","dD(A<j,@>)","d_(A<j,@>)","dp(A<j,@>)","dU(A<j,@>)","j(T{unitlessNumber:ad})","dr(A<j,@>)","dq(A<j,@>)","cU(A<j,@>)","d3(A<j,@>)","dY(A<j,@>)","dX(A<j,@>)","d6(A<j,@>)","dA(A<j,@>)","ad(+(j,j,j))","j(j)","ad(+(j,j))","M(+(j,j,j,j))","aM(~())","~(j,j?)","T?(B<A<j,@>>?)","@(@,j)","~(j,T?)","0&()","dt(bV)","A<j,j>(A<j,j>,j)","M(T?)","cT(A<j,@>)","e0(A<j,@>)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti"),rttc:{"2;":(a,b)=>c=>c instanceof A.ag&&a.b(c.a)&&b.b(c.b),"2;body,title":(a,b)=>c=>c instanceof A.aH&&a.b(c.a)&&b.b(c.b),"3;":(a,b,c)=>d=>d instanceof A.a1&&a.b(d.a)&&b.b(d.b)&&c.b(d.c),"4;":a=>b=>b instanceof A.cb&&A.yj(a,b.a)}}
A.wr(v.typeUniverse,JSON.parse('{"ii":"cE","e1":"cE","cj":"cE","yA":"c","yQ":"c","yP":"c","yC":"cy","yB":"x","zA":"x","zC":"x","zx":"L","yD":"N","zy":"N","yR":"a5","yO":"a5","zR":"b9","yG":"c7","zG":"c7","yS":"d0","yH":"am","yJ":"bT","yL":"b8","yM":"bc","yI":"bc","yK":"bc","zz":"dS","hQ":{"ad":[],"ap":[]},"eK":{"aM":[],"ap":[]},"c":{"D":[]},"cE":{"D":[]},"a2":{"B":["1"],"E":["1"],"D":[],"o":["1"]},"hP":{"f3":[]},"mi":{"a2":["1"],"B":["1"],"E":["1"],"D":[],"o":["1"]},"cS":{"aj":["1"]},"eL":{"ae":[],"aZ":[]},"eJ":{"ae":[],"y":[],"aZ":[],"ap":[]},"hR":{"ae":[],"aZ":[],"ap":[]},"d1":{"j":[],"mR":[],"ap":[]},"e5":{"o":["2"]},"eq":{"aj":["2"]},"cV":{"e5":["1","2"],"o":["2"],"o.E":"2"},"fg":{"cV":["1","2"],"e5":["1","2"],"E":["2"],"o":["2"],"o.E":"2"},"cW":{"W":["3","4"],"A":["3","4"],"W.K":"3","W.V":"4"},"hV":{"as":[]},"dx":{"C":["y"],"cH":["y"],"B":["y"],"E":["y"],"o":["y"],"C.E":"y","cH.E":"y"},"E":{"o":["1"]},"ax":{"E":["1"],"o":["1"]},"f6":{"ax":["1"],"E":["1"],"o":["1"],"o.E":"1","ax.E":"1"},"bE":{"aj":["1"]},"aT":{"o":["2"],"o.E":"2"},"cZ":{"aT":["1","2"],"E":["2"],"o":["2"],"o.E":"2"},"eS":{"aj":["2"]},"af":{"ax":["2"],"E":["2"],"o":["2"],"o.E":"2","ax.E":"2"},"aG":{"o":["1"],"o.E":"1"},"d8":{"aj":["1"]},"d7":{"o":["1"],"o.E":"1"},"ey":{"d7":["1"],"E":["1"],"o":["1"],"o.E":"1"},"f7":{"aj":["1"]},"d9":{"o":["1"],"o.E":"1"},"fc":{"aj":["1"]},"e2":{"C":["1"],"cH":["1"],"B":["1"],"E":["1"],"o":["1"]},"ag":{"dg":[],"bJ":[]},"aH":{"dg":[],"bJ":[]},"a1":{"e6":[],"bJ":[]},"cb":{"e7":[],"bJ":[]},"et":{"ca":["1","2"],"e9":["1","2"],"dQ":["1","2"],"fK":["1","2"],"A":["1","2"]},"es":{"A":["1","2"]},"a9":{"es":["1","2"],"A":["1","2"]},"dd":{"o":["1"],"o.E":"1"},"cs":{"aj":["1"]},"dy":{"cl":["1"],"dW":["1"],"E":["1"],"o":["1"]},"dz":{"dy":["1"],"cl":["1"],"dW":["1"],"E":["1"],"o":["1"]},"ci":{"dy":["1"],"cl":["1"],"dW":["1"],"E":["1"],"o":["1"]},"eY":{"cp":[],"as":[]},"hS":{"as":[]},"iT":{"as":[]},"fA":{"cF":[]},"cz":{"bY":[]},"hb":{"bY":[]},"hc":{"bY":[]},"iF":{"bY":[]},"ix":{"bY":[]},"ds":{"bY":[]},"ir":{"as":[]},"bZ":{"W":["1","2"],"qe":["1","2"],"A":["1","2"],"W.K":"1","W.V":"2"},"ck":{"E":["1"],"o":["1"],"o.E":"1"},"eQ":{"aj":["1"]},"aS":{"E":["1"],"o":["1"],"o.E":"1"},"d2":{"aj":["1"]},"ah":{"E":["a4<1,2>"],"o":["a4<1,2>"],"o.E":"a4<1,2>"},"eP":{"aj":["a4<1,2>"]},"eM":{"bZ":["1","2"],"W":["1","2"],"qe":["1","2"],"A":["1","2"],"W.K":"1","W.V":"2"},"dg":{"bJ":[]},"e6":{"bJ":[]},"e7":{"bJ":[]},"dK":{"vN":[],"mR":[]},"fr":{"f2":[],"dR":[]},"j1":{"o":["f2"],"o.E":"f2"},"j2":{"aj":["f2"]},"f5":{"dR":[]},"jN":{"o":["dR"],"o.E":"dR"},"jO":{"aj":["dR"]},"dS":{"D":[],"ap":[]},"eU":{"D":[]},"i4":{"D":[],"ap":[]},"b1":{"a6":["1"],"D":[]},"eT":{"C":["ae"],"b1":["ae"],"B":["ae"],"a6":["ae"],"E":["ae"],"D":[],"o":["ae"],"aA":["ae"]},"bF":{"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"]},"i5":{"C":["ae"],"b1":["ae"],"B":["ae"],"a6":["ae"],"E":["ae"],"D":[],"o":["ae"],"aA":["ae"],"ap":[],"C.E":"ae","aA.E":"ae"},"i6":{"C":["ae"],"b1":["ae"],"B":["ae"],"a6":["ae"],"E":["ae"],"D":[],"o":["ae"],"aA":["ae"],"ap":[],"C.E":"ae","aA.E":"ae"},"i7":{"bF":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"i8":{"bF":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"i9":{"bF":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"ia":{"bF":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"ib":{"bF":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"eV":{"bF":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"eW":{"bF":[],"ql":[],"C":["y"],"b1":["y"],"B":["y"],"a6":["y"],"E":["y"],"D":[],"o":["y"],"aA":["y"],"ap":[],"C.E":"y","aA.E":"y"},"je":{"as":[]},"fF":{"cp":[],"as":[]},"fE":{"iM":[]},"fB":{"aj":["1"]},"e8":{"o":["1"],"o.E":"1"},"bb":{"as":[]},"cr":{"j6":["1"]},"aq":{"bo":["1"]},"fN":{"rO":[]},"jE":{"fN":[],"rO":[]},"fl":{"W":["1","2"],"A":["1","2"]},"fn":{"fl":["1","2"],"W":["1","2"],"A":["1","2"],"W.K":"1","W.V":"2"},"dc":{"E":["1"],"o":["1"],"o.E":"1"},"fm":{"aj":["1"]},"de":{"cl":["1"],"rt":["1"],"dW":["1"],"E":["1"],"o":["1"]},"fo":{"aj":["1"]},"C":{"B":["1"],"E":["1"],"o":["1"]},"W":{"A":["1","2"]},"fp":{"E":["2"],"o":["2"],"o.E":"2"},"fq":{"aj":["2"]},"dQ":{"A":["1","2"]},"ca":{"e9":["1","2"],"dQ":["1","2"],"fK":["1","2"],"A":["1","2"]},"cl":{"dW":["1"],"E":["1"],"o":["1"]},"fx":{"cl":["1"],"dW":["1"],"E":["1"],"o":["1"]},"jp":{"W":["j","@"],"A":["j","@"],"W.K":"j","W.V":"@"},"jq":{"ax":["j"],"E":["j"],"o":["j"],"o.E":"j","ax.E":"j"},"h8":{"cX":["B<y>","j"]},"hr":{"cX":["j","B<y>"]},"eN":{"as":[]},"hU":{"as":[]},"hT":{"cX":["T?","j"]},"iX":{"cX":["j","B<y>"]},"ae":{"aZ":[]},"y":{"aZ":[]},"B":{"E":["1"],"o":["1"]},"f2":{"dR":[]},"j":{"mR":[]},"h1":{"as":[]},"cp":{"as":[]},"bS":{"as":[]},"f0":{"as":[]},"hO":{"as":[]},"fb":{"as":[]},"iS":{"as":[]},"d4":{"as":[]},"he":{"as":[]},"ig":{"as":[]},"f4":{"as":[]},"jR":{"cF":[]},"b2":{"vS":[]},"fL":{"iU":[]},"jG":{"iU":[]},"j9":{"iU":[]},"am":{"D":[]},"bn":{"D":[]},"bp":{"D":[]},"br":{"D":[]},"a5":{"D":[]},"bs":{"D":[]},"bt":{"D":[]},"bu":{"D":[]},"bv":{"D":[]},"b8":{"D":[]},"bw":{"D":[]},"b9":{"D":[]},"bx":{"D":[]},"N":{"a5":[],"D":[]},"fZ":{"D":[]},"h_":{"a5":[],"D":[]},"h0":{"a5":[],"D":[]},"eo":{"D":[]},"c7":{"a5":[],"D":[]},"hh":{"D":[]},"dB":{"D":[]},"bc":{"D":[]},"bT":{"D":[]},"hi":{"D":[]},"hj":{"D":[]},"hm":{"D":[]},"ho":{"D":[]},"eu":{"C":["c_<aZ>"],"S":["c_<aZ>"],"B":["c_<aZ>"],"a6":["c_<aZ>"],"E":["c_<aZ>"],"D":[],"o":["c_<aZ>"],"S.E":"c_<aZ>","C.E":"c_<aZ>"},"ev":{"c_":["aZ"],"D":[]},"hp":{"C":["j"],"S":["j"],"B":["j"],"a6":["j"],"E":["j"],"D":[],"o":["j"],"S.E":"j","C.E":"j"},"hq":{"D":[]},"L":{"a5":[],"D":[]},"x":{"D":[]},"ht":{"C":["bn"],"S":["bn"],"B":["bn"],"a6":["bn"],"E":["bn"],"D":[],"o":["bn"],"S.E":"bn","C.E":"bn"},"hu":{"D":[]},"hG":{"a5":[],"D":[]},"hL":{"D":[]},"d0":{"C":["a5"],"S":["a5"],"B":["a5"],"a6":["a5"],"E":["a5"],"D":[],"o":["a5"],"S.E":"a5","C.E":"a5"},"i_":{"D":[]},"i0":{"D":[]},"i1":{"W":["j","@"],"D":[],"A":["j","@"],"W.K":"j","W.V":"@"},"i2":{"W":["j","@"],"D":[],"A":["j","@"],"W.K":"j","W.V":"@"},"i3":{"C":["br"],"S":["br"],"B":["br"],"a6":["br"],"E":["br"],"D":[],"o":["br"],"S.E":"br","C.E":"br"},"eX":{"C":["a5"],"S":["a5"],"B":["a5"],"a6":["a5"],"E":["a5"],"D":[],"o":["a5"],"S.E":"a5","C.E":"a5"},"ik":{"C":["bs"],"S":["bs"],"B":["bs"],"a6":["bs"],"E":["bs"],"D":[],"o":["bs"],"S.E":"bs","C.E":"bs"},"iq":{"W":["j","@"],"D":[],"A":["j","@"],"W.K":"j","W.V":"@"},"is":{"a5":[],"D":[]},"it":{"C":["bt"],"S":["bt"],"B":["bt"],"a6":["bt"],"E":["bt"],"D":[],"o":["bt"],"S.E":"bt","C.E":"bt"},"iu":{"C":["bu"],"S":["bu"],"B":["bu"],"a6":["bu"],"E":["bu"],"D":[],"o":["bu"],"S.E":"bu","C.E":"bu"},"iy":{"W":["j","j"],"D":[],"A":["j","j"],"W.K":"j","W.V":"j"},"f9":{"a5":[],"D":[]},"iI":{"C":["b9"],"S":["b9"],"B":["b9"],"a6":["b9"],"E":["b9"],"D":[],"o":["b9"],"S.E":"b9","C.E":"b9"},"iJ":{"C":["bw"],"S":["bw"],"B":["bw"],"a6":["bw"],"E":["bw"],"D":[],"o":["bw"],"S.E":"bw","C.E":"bw"},"iL":{"D":[]},"iN":{"C":["bx"],"S":["bx"],"B":["bx"],"a6":["bx"],"E":["bx"],"D":[],"o":["bx"],"S.E":"bx","C.E":"bx"},"iO":{"D":[]},"iW":{"D":[]},"iY":{"D":[]},"j7":{"C":["am"],"S":["am"],"B":["am"],"a6":["am"],"E":["am"],"D":[],"o":["am"],"S.E":"am","C.E":"am"},"ff":{"c_":["aZ"],"D":[]},"jk":{"C":["bp?"],"S":["bp?"],"B":["bp?"],"a6":["bp?"],"E":["bp?"],"D":[],"o":["bp?"],"S.E":"bp?","C.E":"bp?"},"fs":{"C":["a5"],"S":["a5"],"B":["a5"],"a6":["a5"],"E":["a5"],"D":[],"o":["a5"],"S.E":"a5","C.E":"a5"},"jK":{"C":["bv"],"S":["bv"],"B":["bv"],"a6":["bv"],"E":["bv"],"D":[],"o":["bv"],"S.E":"bv","C.E":"bv"},"jS":{"C":["b8"],"S":["b8"],"B":["b8"],"a6":["b8"],"E":["b8"],"D":[],"o":["b8"],"S.E":"b8","C.E":"b8"},"eA":{"aj":["1"]},"bD":{"D":[]},"bG":{"D":[]},"bI":{"D":[]},"hW":{"C":["bD"],"S":["bD"],"B":["bD"],"E":["bD"],"D":[],"o":["bD"],"S.E":"bD","C.E":"bD"},"id":{"C":["bG"],"S":["bG"],"B":["bG"],"E":["bG"],"D":[],"o":["bG"],"S.E":"bG","C.E":"bG"},"il":{"D":[]},"iA":{"C":["j"],"S":["j"],"B":["j"],"E":["j"],"D":[],"o":["j"],"S.E":"j","C.E":"j"},"iP":{"C":["bI"],"S":["bI"],"B":["bI"],"E":["bI"],"D":[],"o":["bI"],"S.E":"bI","C.E":"bI"},"h3":{"D":[]},"h4":{"W":["j","@"],"D":[],"A":["j","@"],"W.K":"j","W.V":"@"},"h5":{"D":[]},"cy":{"D":[]},"ie":{"D":[]},"a_":{"M":[]},"iw":{"a_":[],"M":[]},"a8":{"M":[]},"cC":{"M":[]},"eB":{"M":[]},"dE":{"M":[]},"cG":{"a_":[],"M":[]},"hZ":{"ep":[]},"iZ":{"ep":[]},"dt":{"M":[]},"eI":{"a_":[],"M":[]},"iv":{"M":[]},"hE":{"M":[]},"iG":{"M":[]},"iH":{"M":[]},"hM":{"M":[]},"hH":{"M":[]},"j0":{"M":[]},"hd":{"M":[]},"k":{"M":[]},"hN":{"M":[]},"hX":{"M":[]},"ip":{"M":[]},"em":{"a_":[],"M":[]},"hJ":{"a_":[],"M":[]},"hK":{"a_":[],"M":[]},"ha":{"a_":[],"M":[]},"hl":{"a_":[],"M":[]},"hv":{"a_":[],"M":[]},"eH":{"a_":[],"M":[]},"ij":{"a_":[],"M":[]},"iR":{"a_":[],"M":[]},"j_":{"a_":[],"M":[]},"dn":{"a_":[],"M":[]},"dp":{"a_":[],"M":[]},"cT":{"a_":[],"M":[]},"dq":{"a_":[],"M":[]},"dr":{"a_":[],"M":[]},"cU":{"a_":[],"M":[]},"dv":{"a_":[],"M":[]},"dw":{"a_":[],"M":[]},"dA":{"a_":[],"M":[]},"dD":{"a_":[],"M":[]},"dF":{"a_":[],"M":[]},"d_":{"a_":[],"M":[]},"dG":{"a_":[],"M":[]},"dH":{"a_":[],"M":[]},"d3":{"a_":[],"M":[]},"dU":{"a_":[],"M":[]},"dX":{"a_":[],"M":[]},"dY":{"a_":[],"M":[]},"d6":{"a_":[],"M":[]},"e0":{"a_":[],"M":[]},"e4":{"a_":[],"M":[]},"h6":{"a_":[],"M":[]},"hw":{"a_":[],"M":[]},"hD":{"a_":[],"M":[]},"ic":{"a_":[],"M":[]},"aD":{"a_":[],"M":[]},"ok":{"iz":["1"]},"fh":{"vR":["1"]},"vt":{"B":["y"],"E":["y"],"o":["y"]},"ql":{"B":["y"],"E":["y"],"o":["y"]},"w1":{"B":["y"],"E":["y"],"o":["y"]},"vr":{"B":["y"],"E":["y"],"o":["y"]},"w_":{"B":["y"],"E":["y"],"o":["y"]},"vs":{"B":["y"],"E":["y"],"o":["y"]},"w0":{"B":["y"],"E":["y"],"o":["y"]},"vn":{"B":["ae"],"E":["ae"],"o":["ae"]},"vo":{"B":["ae"],"E":["ae"],"o":["ae"]}}'))
A.wq(v.typeUniverse,JSON.parse('{"e2":1,"b1":1,"fx":1,"hg":2}'))
var u={v:"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00",d:"'package:flint_hardware/flint_hardware.dart'",s:"('Running on-device TFLite inference...');",A:"ESP32-CAM Native \u2022 TFLite Micro Model \u2022 15 FPS Inference",c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",l:"import 'package:flint_hardware/flint_hardware.dart';\n\nvoid main() {\n  final visionGuard = FirmwareBuilder('cam_guard', target: BoardTarget.esp32Cam);\n\n  // 1. Configure On-Board Camera\n  visionGuard.camera(\n    resolution: CameraResolution.qvga,\n    format: PixelFormat.rgb565,\n    frameRate: 15,\n  );\n\n  // 2. Load Quantized TFLite Micro Model\n  final model = visionGuard.tfliteModel(\n    name: 'person_detect',\n    assetPath: 'models/person_detect.tflite',\n    inputShape: const [1, 96, 96, 1],\n    outputShape: const [1, 2],\n    quantization: TensorQuantization.int8,\n    tensorArenaSizeKb: 128,\n  );\n\n  // 3. Real-Time Edge Inference Loop\n  visionGuard.loop((ctx) {\n    ctx.log('Running on-device TFLite inference...');\n  });\n}"}
var t=(function rtii(){var s=A.aE
return{n:s("bb"),gY:s("c6"),e8:s("dx"),bU:s("a9<j,T>"),w:s("a9<j,j>"),J:s("a9<j,T?>"),fe:s("dz<j>"),g5:s("am"),x:s("l"),W:s("E<@>"),C:s("as"),c8:s("bn"),dH:s("a_"),f0:s("M"),cv:s("M(+(j,j,j,j))"),eh:s("M(T?)"),c:s("bV"),Z:s("bY"),R:s("ci<y>"),fd:s("bC"),U:s("o<@>"),hb:s("o<y>"),Y:s("a2<M>"),g_:s("a2<bY>"),l:s("a2<bC>"),cB:s("a2<aR>"),c7:s("a2<A<j,@>>"),Q:s("a2<A<@,@>>"),f:s("a2<T>"),O:s("a2<+(j,j)>"),s:s("a2<j>"),o:s("a2<cm>"),fS:s("a2<b3>"),q:s("a2<@>"),t:s("a2<y>"),d4:s("a2<j?>"),r:s("a2<~()>"),T:s("eK"),m:s("D"),cj:s("cj"),aU:s("a6<@>"),fo:s("aR"),bG:s("bD"),aw:s("B<M>"),gz:s("B<bY>"),p:s("B<A<j,@>>"),gk:s("B<+(j,j)>"),a:s("B<j>"),dX:s("B<fd>"),db:s("B<fj>"),c2:s("B<fk>"),j:s("B<@>"),B:s("B<y>"),ah:s("a4<c6,l>"),ce:s("a4<bV,l>"),dv:s("a4<j,l>"),I:s("a4<j,@>"),d:s("a4<j,T?>"),V:s("A<j,j>"),A:s("A<j,fe>"),P:s("A<j,@>"),G:s("A<@,@>"),L:s("A<j,T?>"),bZ:s("aT<j,j>"),en:s("af<T,j>"),dY:s("af<+(j,j,j,j),M>"),ct:s("af<T?,M>"),cI:s("br"),eB:s("bF"),D:s("a5"),b:s("aM"),ck:s("bG"),K:s("T"),he:s("bs"),gT:s("zB"),bQ:s("+()"),fz:s("+(j,j)"),bl:s("+(j,j,j)"),g4:s("+(j,j,B<+(j,j)>?)"),g9:s("+(j,j,j,j)"),at:s("c_<@>"),eU:s("c_<aZ>"),cz:s("f2"),cq:s("dW<j>"),fY:s("bt"),dP:s("bu"),gf:s("bv"),k:s("cF"),ch:s("cG<bV>"),fp:s("cG<B<A<j,@>>?>"),aN:s("dZ<B<A<j,@>>?>"),N:s("j"),f7:s("j(T)"),dG:s("j(j)"),gn:s("b8"),dl:s("be"),bc:s("b3"),bO:s("co"),a0:s("bw"),do:s("b9"),E:s("iM"),aK:s("bx"),cM:s("bI"),dm:s("ap"),eK:s("cp"),ak:s("e1"),dw:s("ca<j,j>"),dD:s("iU"),bv:s("aG<+(j,j,j)>"),cc:s("aG<j>"),cp:s("cr<fi>"),e:s("fe"),bJ:s("aq<fi>"),_:s("aq<@>"),fJ:s("aq<y>"),hg:s("fn<T?,T?>"),y:s("ad"),al:s("ad(T)"),dt:s("ad(+(j,j,j))"),bB:s("ad(j)"),i:s("ae"),z:s("@"),fO:s("@()"),bI:s("@(T)"),ag:s("@(T,cF)"),g6:s("@(@)"),S:s("y"),bp:s("a_(A<j,@>)?"),eH:s("bo<aM>?"),g7:s("bp?"),bX:s("D?"),gw:s("B<A<j,@>>?"),bM:s("B<@>?"),v:s("A<j,j>?"),h:s("A<j,@>?"),fF:s("A<@,@>?"),X:s("T?"),dk:s("j?"),F:s("da<@,@>?"),g:s("jt?"),fQ:s("ad?"),cD:s("ae?"),h6:s("y?"),cg:s("aZ?"),bn:s("~()?"),an:s("~(D)?"),di:s("aZ"),H:s("~"),M:s("~()"),eA:s("~(j,j)"),u:s("~(j,@)"),fM:s("~(iM)"),aT:s("~(B<A<j,@>>?)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.k8=J.dI.prototype
B.f=J.a2.prototype
B.w=J.eJ.prototype
B.a4=J.eL.prototype
B.b=J.d1.prototype
B.k9=J.cj.prototype
B.ka=J.c.prototype
B.dm=A.eW.prototype
B.du=J.ii.prototype
B.ng=A.f9.prototype
B.by=J.e1.prototype
B.dx=new A.cR("flex-end",2,"end")
B.c=new A.cR("center",1,"center")
B.E=new A.cR("flex-start",0,"start")
B.dy=new A.cR("stretch",3,"stretch")
B.x=new A.e("transparent")
B.bA=new A.m(0,B.x,"none")
B.bB=new A.m(1,B.x,"solid")
B.ep=new A.e("rgba(5, 150, 105, 0.28)")
B.dA=new A.m(1,B.ep,"solid")
B.ee=new A.e("rgba(0, 0, 0, 0)")
B.dD=new A.m(0,B.ee,"solid")
B.eD=new A.e("rgba(30, 41, 59, 0.95)")
B.bC=new A.m(1,B.eD,"solid")
B.fd=new A.e("rgba(30, 41, 59, 1)")
B.dJ=new A.m(1,B.fd,"solid")
B.dO=new A.c6(1024,2,"lg")
B.dP=new A.c6(1280,3,"xl")
B.dQ=new A.c6(640,0,"sm")
B.dR=new A.c6(768,1,"md")
B.a6=new A.du(0,"solid")
B.bE=new A.du(1,"soft")
B.H=new A.du(2,"outline")
B.C=new A.du(3,"ghost")
B.dS=new A.ki()
B.dT=new A.kj()
B.dU=new A.kk()
B.dV=new A.kl()
B.aD=new A.hZ()
B.t=new A.kD()
B.aC=new A.kF()
B.ny=new A.kG()
B.dW=new A.h8()
B.dX=new A.kW()
B.bF=new A.h9()
B.dY=new A.l4()
B.ae=new A.hy()
B.j=new A.l8()
B.dZ=new A.lO()
B.bG=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.e_=function() {
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
B.e4=function(getTagFallback) {
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
B.e0=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.e3=function(hooks) {
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
B.e2=function(hooks) {
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
B.e1=function(hooks) {
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
B.bH=function(hooks) { return hooks; }

B.J=new A.hT()
B.e5=new A.ig()
B.e7=new A.nv()
B.a_=new A.nw()
B.aX=new A.ci([200,201,202,204],t.R)
B.nD=new A.ci([400,401,402,403,404,405,408,409,410,422,429,500,501,502,503,504],t.R)
B.nA=new A.ci([301,302,303,304,307,308],t.R)
B.nC=new A.ci([400,401,402,403,404,405,408,409,410,422,429],t.R)
B.nB=new A.ci([500,501,502,503,504],t.R)
B.e8=new A.nF()
B.bI=new A.o_()
B.p=new A.o2()
B.a0=new A.iX()
B.e9=new A.oc()
B.ea=new A.od()
B.F=new A.jE()
B.aE=new A.jR()
B.bJ=new A.e("rgba(16, 185, 129, 0.2)")
B.T=new A.e("#34d399")
B.bK=new A.e("rgba(5, 7, 13, 0.94)")
B.ef=new A.e("#c4b5fd")
B.A=new A.e("#f97316")
B.ek=new A.e("rgba(15, 23, 42, 0.65)")
B.ej=new A.e("rgba(15, 23, 42, 0.68)")
B.aF=new A.e("rgba(15, 23, 42, 0.72)")
B.bL=new A.e("rgba(15, 23, 42, 0.75)")
B.eo=new A.e("rgba(5, 150, 105, 0.08)")
B.a7=new A.e("#a7f3d0")
B.aG=new A.e("#bae6fd")
B.aH=new A.e("#f59e0b")
B.eu=new A.e("rgba(251, 191, 36, 0.08)")
B.et=new A.e("rgba(251, 191, 36, 0.32)")
B.aZ=new A.e("#ef4444")
B.r=new A.e("#ffffff")
B.bO=new A.e("rgba(255, 255, 255, 0.05)")
B.bN=new A.e("rgba(255, 255, 255, 0.15)")
B.b_=new A.e("#a78bfa")
B.eA=new A.e("linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)")
B.K=new A.e("#94a3b8")
B.af=new A.e("#03070d")
B.b0=new A.e("rgba(52, 211, 153, 0.1)")
B.bQ=new A.e("rgba(52, 211, 153, 0.3)")
B.eF=new A.e("#67e8f9")
B.eI=new A.e("rgba(249, 115, 22, 0.05)")
B.eH=new A.e("rgba(249, 115, 22, 0.06)")
B.a8=new A.e("rgba(249, 115, 22, 0.12)")
B.b1=new A.e("rgba(249, 115, 22, 0.15)")
B.bR=new A.e("rgba(249, 115, 22, 0.25)")
B.ag=new A.e("rgba(249, 115, 22, 0.35)")
B.eK=new A.e("#060b13")
B.bT=new A.e("rgba(56, 189, 248, 0.2)")
B.bU=new A.e("rgba(56, 189, 248, 0.3)")
B.bX=new A.e("rgba(255, 255, 255, 0.06)")
B.eP=new A.e("#6ee7b7")
B.b2=new A.e("rgba(15, 23, 42, 0.6)")
B.eQ=new A.e("rgba(15, 23, 42, 0.7)")
B.L=new A.e("#38bdf8")
B.W=new A.e("#fbbf24")
B.a9=new A.e("#7dd3fc")
B.aI=new A.e("#64748b")
B.I=new A.e("#10b981")
B.bZ=new A.e("rgba(56, 189, 248, 0.12)")
B.eX=new A.e("rgba(56, 189, 248, 0.15)")
B.eY=new A.e("rgba(56, 189, 248, 0.35)")
B.aJ=new A.e("#cbd5e1")
B.c_=new A.e("#fca5a5")
B.f5=new A.e("linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)")
B.c1=new A.e("rgba(249, 115, 22, 0.2)")
B.f8=new A.e("rgba(249, 115, 22, 0.3)")
B.f7=new A.e("rgba(249, 115, 22, 0.4)")
B.U=new A.e("rgba(255, 255, 255, 0.08)")
B.Q=new A.e("#050b14")
B.b4=new A.e("rgba(52, 211, 153, 0.12)")
B.fh=new A.e("rgba(52, 211, 153, 0.36)")
B.c3=new A.er(0,"xs")
B.N=new A.er(1,"sm")
B.z=new A.er(2,"md")
B.fn=new A.l3(0,"lax")
B.c4=new A.hk("not-allowed")
B.fo=new A.hk("pointer")
B.c5=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(0)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.P=new A.nY(1,"center")
B.fp=new A.l(null,null,null,null,null,null,null,null,null,20,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fr=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fq=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fs=new A.l(null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.l=new A.i(0,0,0,0)
B.cr=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,42,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ft=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,32,900,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.cr,null,null)
B.e=new A.cA("grid",5,"grid")
B.fu=new A.l(null,null,null,null,null,null,null,null,B.e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.j3=new A.i(56,56,56,56)
B.c6=new A.l(B.j3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fv=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,48,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c7=new A.l(null,null,null,null,null,null,null,null,null,14,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jf=new A.i(96,56,96,56)
B.ah=new A.l(B.jf,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fw=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,null,B.W,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.S=new A.hC('ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace')
B.c8=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.S,11,null,null,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.d=new A.cA("flex",3,"flex")
B.c9=new A.l(null,null,null,null,null,null,null,null,B.d,4,B.c,null,null,null,null,B.j,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fx=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16,800,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.au=new A.i(null,null,4,null)
B.fy=new A.l(null,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cC=new A.cA("inline-block",2,"inlineBlock")
B.bS=new A.e("#475569")
B.b5=new A.l(null,null,22,null,null,null,null,null,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,B.bS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fz=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,900,null,null,B.A,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.m=new A.I("100%")
B.q=new A.dN("center",1,"center")
B.b6=new A.l(null,null,B.m,null,null,null,null,null,B.d,null,null,null,B.q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bW=new A.e("rgba(14, 165, 233, 0.1)")
B.ec=new A.e("rgba(125, 211, 252, 0.28)")
B.dz=new A.m(1,B.ec,"solid")
B.fA=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aG,null,null,null,null,null,null,null,null,null,B.bW,null,B.dz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ca=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,1.5,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fB=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,22,800,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aS=new A.i(2,2,2,2)
B.fC=new A.l(B.aS,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.T,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.e6=new A.nq()
B.fD=new A.l(null,null,null,null,null,null,96,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.e6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cb=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iP=new A.i(32,null,null,null)
B.fE=new A.l(null,B.iP,null,null,null,null,null,null,B.e,16,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iS=new A.i(36,null,null,null)
B.fF=new A.l(null,B.iS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fG=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,54,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aT=new A.i(64,20,64,20)
B.j4=new A.i(64,36,64,36)
B.hu=new A.l(B.j4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.j9=new A.i(72,56,72,56)
B.hL=new A.l(B.j9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.je=new A.i(80,80,80,80)
B.h6=new A.l(B.je,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aL=new A.l(B.aT,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.hu,B.hL,B.h6)
B.es=new A.e("rgba(148, 163, 184, 0.16)")
B.dK=new A.m(1,B.es,"solid")
B.fH=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fI=new A.l(null,null,8,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.A,999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cc=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,900,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.j8=new A.i(72,36,72,36)
B.b7=new A.l(B.j8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fJ=new A.l(null,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.A,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cd=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.S,14,900,null,null,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iY=new A.i(48,20,48,20)
B.bD=new A.m(1,B.U,"solid")
B.j2=new A.i(56,36,56,36)
B.ch=new A.l(B.j2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.j5=new A.i(64,56,64,56)
B.ce=new A.l(B.j5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ja=new A.i(72,80,72,80)
B.cn=new A.l(B.ja,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fK=new A.l(B.iY,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ch,B.ce,B.cn)
B.eb=new A.e("rgba(8, 47, 73, 0.25)")
B.fi=new A.e("rgba(52, 211, 153, 0.38)")
B.dL=new A.m(1,B.fi,"solid")
B.fL=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.eb,null,B.dL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fM=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,600,null,null,B.aJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fN=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,17,800,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jj=new A.i(null,18,null,18)
B.fO=new A.l(B.jj,null,null,null,null,null,46,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.b8=new A.l(null,null,null,null,null,null,null,null,B.cC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.n=new A.dN("space-between",3,"between")
B.b9=new A.l(null,null,null,null,null,null,null,null,B.d,null,B.c,null,B.n,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fP=new A.l(null,null,null,null,null,null,null,null,null,8,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bk=new A.i(12,20,12,20)
B.k=new A.cA("inline-flex",4,"inlineFlex")
B.ba=new A.l(B.bk,null,null,null,null,null,46,null,B.k,8,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,800,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fQ=new A.l(null,null,null,null,null,null,null,null,B.d,10,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aK=new A.e("rgba(52, 211, 153, 0.08)")
B.fR=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a7,null,null,null,null,null,null,null,null,null,B.aK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cS=new A.i(null,null,48,null)
B.cf=new A.l(null,B.cS,null,null,null,null,null,null,null,14,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fS=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aM=new A.l(null,null,null,null,null,null,null,null,null,8,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fT=new A.l(B.aS,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.A,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cg=new A.l(null,null,null,null,0,null,null,null,B.d,10,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ai=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,900,null,0.8,B.A,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aY=new A.e("#06b6d4")
B.fU=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.aY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ci=new A.l(null,null,null,null,null,null,null,null,null,0,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fW=new A.l(null,null,null,null,null,null,null,null,B.k,6,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aq=new A.i(72,20,72,20)
B.jc=new A.i(80,36,80,36)
B.aj=new A.l(B.jc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.it=new A.i(104,80,104,80)
B.am=new A.l(B.it,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cj=new A.l(B.aq,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aj,B.ah,B.am)
B.iu=new A.i(10,10,10,10)
B.iF=new A.i(16,null,null,null)
B.fX=new A.l(B.iu,B.iF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.af,8,B.bD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fY=new A.l(null,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.b_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eB=new A.e("rgba(52, 211, 153, 0.2)")
B.dG=new A.m(1,B.eB,"solid")
B.ck=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a7,null,null,null,null,null,null,null,null,null,B.b0,null,B.dG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fZ=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ab=new A.i(20,20,20,20)
B.c2=new A.e("#040807")
B.h_=new A.l(B.ab,null,null,null,null,null,null,380,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,B.S,13,null,1.65,null,null,null,null,null,null,"pre",null,null,null,null,B.c2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.h0=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,700,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.en=new A.e("rgba(255, 255, 255, 0.92)")
B.h1=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.en,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aW=new A.ih("auto")
B.h2=new A.l(null,null,null,null,null,null,null,null,B.d,4,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.br=new A.i(8,10,8,10)
B.h4=new A.l(B.br,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bb=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,18,800,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cM=new A.i(48,null,null,null)
B.cl=new A.l(null,B.cM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jh=new A.i(null,12,null,12)
B.h5=new A.l(B.jh,null,null,null,null,null,34,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bc=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,800,null,null,B.Q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bd=new A.l(null,null,null,null,null,null,null,null,null,12,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cm=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.S,12,null,null,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bz=new A.cR("baseline",4,"baseline")
B.h7=new A.l(null,null,null,null,null,null,null,null,B.d,8,B.bz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jg=new A.i(96,80,96,80)
B.be=new A.l(B.jg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ev=new A.e("rgba(255, 255, 255, 0.85)")
B.h8=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ev,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ew=new A.e("rgba(255, 255, 255, 0.75)")
B.el=new A.e("rgba(15, 23, 42, 0.15)")
B.n9=new A.at(12,32,-16,B.el)
B.h9=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ew,null,null,null,null,null,null,null,B.n9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hb=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,700,null,null,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.co=new A.l(null,B.cS,null,null,null,null,null,null,null,14,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hc=new A.l(null,B.au,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,0.5,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hd=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.a7,null,null,null,null,null,null,null,null,null,B.aF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.he=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10,700,null,null,B.aJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.b3=new A.e("#e2e8f0")
B.hf=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.S,12,null,null,null,B.b3,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cp=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.I,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hg=new A.l(null,null,null,null,null,null,null,null,null,20,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hh=new A.l(null,null,null,null,null,null,null,null,null,10,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hi=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,600,null,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fe=new A.e("rgba(255, 255, 255, 0.88)")
B.hj=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.fe,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hk=new A.l(B.aS,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.L,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bV=new A.e("rgba(56, 189, 248, 0.1)")
B.dB=new A.m(1,B.bU,"solid")
B.hm=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bV,null,B.dB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eL=new A.e("rgba(56, 189, 248, 0.4)")
B.dC=new A.m(1,B.eL,"solid")
B.hl=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.bV,null,B.dC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ji=new A.i(null,14,null,14)
B.hn=new A.l(B.ji,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ho=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,700,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.X=new A.i(22,22,22,22)
B.hq=new A.l(B.X,null,null,null,null,null,null,460,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hr=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,900,null,0.8,B.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cq=new A.l(null,null,null,null,null,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fj=new A.e("rgba(52, 211, 153, 0.24)")
B.dM=new A.m(1,B.fj,"solid")
B.ak=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aK,null,B.dM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.fk=new A.e("rgba(52, 211, 153, 0.28)")
B.dN=new A.m(1,B.fk,"solid")
B.al=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aK,null,B.dN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iQ=new A.i(36,20,36,20)
B.Z=new A.dT("relative",1,"relative")
B.iZ=new A.i(48,36,48,36)
B.ic=new A.l(B.iZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.j6=new A.i(64,80,64,80)
B.ha=new A.l(B.j6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hs=new A.l(B.iQ,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ic,B.c6,B.ha)
B.cs=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,1.6,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cP=new A.i(6,8,6,8)
B.ht=new A.l(B.cP,null,null,null,null,null,32,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bY=new A.e("#f1f5f9")
B.hv=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,600,null,0.2,B.bY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hw=new A.l(null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hx=new A.l(B.aS,null,null,null,44,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.b_,9999,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hy=new A.l(null,null,null,null,null,null,null,null,B.d,12,B.c,null,null,null,null,B.j,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cE=new A.i(12,16,12,16)
B.ct=new A.l(B.cE,null,null,null,null,null,46,null,B.k,8,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,800,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hz=new A.l(null,B.l,null,null,null,680,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16,null,1.6,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hA=new A.l(null,null,B.m,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iU=new A.i(40,20,40,20)
B.cu=new A.l(B.iU,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.Z,null,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ch,B.ce,B.cn)
B.jb=new A.i(7,9,7,9)
B.hC=new A.l(B.jb,null,null,null,null,null,36,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hD=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ei=new A.e("rgba(255, 255, 255, 0.1)")
B.dE=new A.m(1,B.ei,"solid")
B.hE=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hF=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.c4,null,null,null,null,null,null,null,null,null,null,0.55,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bj=new A.i(10,12,10,12)
B.hG=new A.l(B.bj,null,null,null,null,null,46,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,15,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iX=new A.i(48,18,48,18)
B.cv=new A.l(B.iX,null,null,null,null,null,null,null,null,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hH=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(16px)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.c0=new A.e("#3b82f6")
B.hI=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,900,null,1,B.c0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.M=new A.cA("block",0,"block")
B.hJ=new A.l(null,null,null,null,null,null,null,null,B.M,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,800,null,0.5,B.L,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jd=new A.i(80,56,80,56)
B.bg=new A.l(B.jd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cw=new A.l(B.aT,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.b7,B.bg,B.be)
B.iV=new A.i(40,null,null,null)
B.hK=new A.l(null,B.iV,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cH=new A.i(14,20,14,20)
B.iB=new A.i(14,36,14,36)
B.ie=new A.l(B.iB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iC=new A.i(14,56,14,56)
B.hX=new A.l(B.iC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iD=new A.i(14,80,14,80)
B.fV=new A.l(B.iD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hM=new A.l(B.cH,null,B.m,null,null,B.m,null,null,B.d,16,B.c,null,B.n,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.ie,B.hX,B.fV)
B.iW=new A.i(48,16,48,16)
B.o=new A.I("auto")
B.at=new A.i(null,B.o,null,B.o)
B.hN=new A.l(B.iW,B.at,B.m,null,null,1152,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jk=new A.i(null,8,null,8)
B.hO=new A.l(B.jk,null,null,null,null,null,28,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.kd=new A.dN("flex-end",2,"end")
B.hP=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,B.kd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cx=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,800,null,null,B.aI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.u=new A.hx("column",2,"column")
B.hQ=new A.l(null,null,B.m,null,null,null,null,null,B.d,null,B.c,null,null,null,B.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hR=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.S,11,null,null,null,B.b3,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hS=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"translateY(-16px)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hT=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"scale(1)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hU=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.S,12,900,null,null,B.aI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.j0=new A.i(4,4,4,4)
B.hV=new A.l(B.j0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.a1=new A.l(null,null,null,null,null,null,null,null,B.d,8,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cy=new A.l(null,null,null,null,null,null,null,null,B.d,12,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bf=new A.l(null,null,null,null,null,null,null,null,null,2,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hW=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,14,null,1.6,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bn=new A.i(24,null,null,null)
B.cz=new A.l(null,B.bn,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hY=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,11,null,null,null,B.A,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hZ=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"scale(0.95)",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iI=new A.i(28,20,28,20)
B.iK=new A.i(28,36,28,36)
B.hB=new A.l(B.iK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iN=new A.i(32,56,32,56)
B.h3=new A.l(B.iN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iR=new A.i(36,80,36,80)
B.ij=new A.l(B.iR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i_=new A.l(B.iI,null,B.m,null,null,B.m,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.hB,B.h3,B.ij)
B.bo=new A.i(36,36,36,36)
B.i0=new A.l(B.bo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cR=new A.i(8,null,null,null)
B.i1=new A.l(B.cR,null,null,null,null,null,null,null,B.d,12,null,null,null,null,null,B.j,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.hp=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,40,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aN=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,32,900,null,null,B.r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.hp,null,null)
B.i2=new A.l(null,null,null,null,null,null,null,null,null,4,B.E,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iw=new A.i(10,null,null,null)
B.i3=new A.l(B.iw,null,null,null,null,null,null,null,B.d,14,null,null,B.q,null,null,B.j,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i4=new A.l(null,B.l,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,12,700,null,null,B.aJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i5=new A.l(B.ab,null,null,null,null,null,null,400,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"auto",null,null,null,null,null,null,null,null,null,null,B.S,13,null,1.65,null,null,null,null,null,null,"pre",null,null,null,null,B.c2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i6=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aG,null,null,null,null,null,null,null,null,null,B.aF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eV=new A.e("rgba(148, 163, 184, 0.18)")
B.dI=new A.m(1,B.eV,"solid")
B.i7=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.dI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.iE=new A.i(14,null,null,null)
B.i8=new A.l(B.iE,null,null,null,null,null,null,null,B.d,20,null,null,null,null,null,B.j,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.i9=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"underline",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ia=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,17,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eC=new A.e("rgba(52, 211, 153, 0.4)")
B.dH=new A.m(1,B.eC,"solid")
B.ib=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.b0,null,B.dH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.id=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"hidden",null,null,null,null,null,null,null,null,null,null,B.S,13,null,null,null,B.b3,null,null,null,"ellipsis","nowrap",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ig=new A.l(null,B.cR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.jl=new A.i(null,null,28,null)
B.ih=new A.l(null,B.jl,null,null,null,null,null,null,B.d,null,null,null,B.q,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.aO=new A.l(null,B.l,null,null,null,720,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,16,null,null,null,B.K,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.cA=new A.l(null,null,null,null,null,null,null,null,B.d,6,B.c,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.eZ=new A.e("rgba(56, 189, 248, 0.32)")
B.dF=new A.m(1,B.eZ,"solid")
B.ii=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.aG,null,null,null,null,null,null,null,null,null,B.bW,null,B.dF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.ik=new A.l(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10,800,null,null,B.T,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.as=new A.i(8,null,8,null)
B.cB=new A.l(null,B.as,B.m,1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,B.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.bh=new A.l(null,null,B.m,null,null,null,null,null,B.d,14,B.bz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"pre",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
B.O=new A.cA("none",6,"none")
B.bi=new A.bA(0)
B.il=new A.bA(2e5)
B.aa=new A.bA(2e6)
B.im=new A.bA(25e6)
B.io=new A.bA(3e6)
B.ip=new A.bA(3e7)
B.iq=new A.bA(4e6)
B.ir=new A.bA(5e6)
B.is=new A.bA(65e4)
B.cD=new A.i(0,12,0,12)
B.aP=new A.i(10,14,10,14)
B.an=new A.i(10,16,10,16)
B.iv=new A.i(10,20,10,20)
B.ix=new A.i(11,12,11,12)
B.cF=new A.i(12,22,12,22)
B.iy=new A.i(12,24,12,24)
B.iz=new A.i(12,null,4,null)
B.cG=new A.i(12,null,null,null)
B.bl=new A.i(14,14,14,14)
B.cI=new A.i(14,24,14,24)
B.iA=new A.i(14,28,14,28)
B.aQ=new A.i(16,16,16,16)
B.aR=new A.i(16,null,0,null)
B.R=new A.i(18,18,18,18)
B.bm=new A.i(18,null,0,null)
B.iG=new A.i(18,null,null,null)
B.iH=new A.i(1,5,1,5)
B.a2=new A.i(24,24,24,24)
B.iJ=new A.i(28,28,28,28)
B.cJ=new A.i(2,8,2,8)
B.iL=new A.i(2,null,2,null)
B.iM=new A.i(32,32,32,32)
B.iO=new A.i(32,null,0,null)
B.cK=new A.i(34,14,34,14)
B.cL=new A.i(3,8,3,8)
B.iT=new A.i(3,9,3,9)
B.j_=new A.i(48,null,40,null)
B.bp=new A.i(4,10,4,10)
B.j1=new A.i(4,8,4,8)
B.ao=new A.i(5,10,5,10)
B.ap=new A.i(5,12,5,12)
B.bq=new A.i(6,10,6,10)
B.aU=new A.i(6,12,6,12)
B.cN=new A.i(6,14,6,14)
B.cO=new A.i(6,6,6,6)
B.j7=new A.i(6,null,null,null)
B.cQ=new A.i(7,10,7,10)
B.ar=new A.i(8,12,8,12)
B.bs=new A.i(9,14,9,14)
B.a3=new A.hx("row",0,"row")
B.jm=new A.cB(0,"unknown")
B.cT=new A.cB(1,"timeout")
B.jn=new A.cB(2,"cancelled")
B.cU=new A.cB(3,"network")
B.bt=new A.cB(4,"http")
B.jo=new A.cB(5,"parse")
B.jp=new A.eD(0,"json")
B.jq=new A.eD(1,"text")
B.cV=new A.eD(3,"unknown")
B.jr=new A.cC(" *")
B.Y=new A.bV("dark",1,"dark")
B.av=new A.bV("light",0,"light")
B.dn={bg:0,text:1,muted:2,panel:3,panelStrong:4,line:5,primary:6,accent:7,warning:8}
B.f4=new A.e("#f8fafc")
B.bM=new A.e("#0f172a")
B.eW=new A.e("rgba(148, 163, 184, 0.42)")
B.eq=new A.e("#059669")
B.fb=new A.e("#0284c7")
B.ed=new A.e("#b45309")
B.l0=new A.a9(B.dn,[B.f4,B.bM,B.bS,B.r,B.bY,B.eW,B.eq,B.fb,B.ed],t.J)
B.lf={pageX:0,sectionY:1}
B.nf=new A.I("min(1152px, calc(100% - 32px))")
B.dh=new A.a9(B.lf,[B.nf,64],t.J)
B.le={md:0,pill:1}
B.dg=new A.a9(B.le,[8,9999],t.J)
B.ds={sm:0,glow:1}
B.em=new A.e("rgba(15, 23, 42, 0.18)")
B.n7=new A.at(14,34,-24,B.em)
B.eO=new A.e("rgba(2, 132, 199, 0.2)")
B.n5=new A.at(18,54,-30,B.eO)
B.kT=new A.a9(B.ds,[B.n7,B.n5],t.J)
B.lh={sans:0,mono:1}
B.cW=new A.hC('Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif')
B.df=new A.a9(B.lh,[B.cW,B.S],t.J)
B.ay={}
B.a=new A.a9(B.ay,[],t.J)
B.nE=new A.iK(B.a)
B.ju=new A.hB(B.l0,B.dh,B.dg,B.kT)
B.eE=new A.e("#05070d")
B.fa=new A.e("#a8b3c5")
B.fc=new A.e("#111827")
B.eg=new A.e("rgba(51, 65, 85, 0.82)")
B.l_=new A.a9(B.dn,[B.eE,B.r,B.fa,B.bM,B.fc,B.eg,B.T,B.L,B.aH],t.J)
B.er=new A.e("rgba(2, 6, 23, 0.42)")
B.n4=new A.at(14,34,-24,B.er)
B.f_=new A.e("rgba(56, 189, 248, 0.42)")
B.n6=new A.at(18,54,-30,B.f_)
B.kS=new A.a9(B.ds,[B.n4,B.n6],t.J)
B.jt=new A.hB(B.l_,B.dh,B.dg,B.kS)
B.js=new A.lp(B.ju,B.jt,B.Y)
B.kX=new A.a9(B.ay,[],A.aE("a9<j,B<j>>"))
B.G=new A.bW(B.kX)
B.cX=new A.bB("50% 50%")
B.jv=new A.bB("88% 12%")
B.jw=new A.bB("85% 10%")
B.cY=new A.bB("85% 15%")
B.cZ=new A.bB("88% 8%")
B.d_=new A.bB("18% 0%")
B.jx=new A.bB("50% 60%")
B.d0=new A.bB("80% 10%")
B.bu=new A.bB("15% 0%")
B.jy=new A.bB("12% 0%")
B.d1=new A.bB("20% 0%")
B.D=new A.aB("1fr")
B.y=new A.aL("1fr")
B.d8=new A.mh(0,"outline")
B.kb=new A.mk(null)
B.kc=new A.ml(null)
B.d9=new A.dN("flex-start",0,"start")
B.mX=new A.cb(["FULL-STACK WEB","Server, SSR & Declarative UI","High-performance HTTP server, SEO-first server-side rendering, and declarative Web UI without client bloat.","#34d399"])
B.mZ=new A.cb(["CROSS-PLATFORM CLIENT","Universal SDK & Sync","Multi-tier caching, offline mutation replay, streaming WebSocket channels, and seamless database queries.","#38bdf8"])
B.n0=new A.cb(["AI AGENT MESH","Multimodal Inference & Tools","Autonomous agents with tool policies, memory persistence, streaming responses, and vector embeddings.","#a78bfa"])
B.n_=new A.cb(["ROBOTICS & HARDWARE","Edge Firmware & Sensors","Sonar distance sensors, IMU motion trackers, motor drivers, and instant Wokwi browser simulation.","#f97316"])
B.mW=new A.cb(["SECURE DATA GATEWAY","Row-Level Security & Wire Protocol","Owner-isolated CRUD policies, concealed fields, query AST compilers, and relational data hydration.","#ec4899"])
B.mY=new A.cb(["DEVELOPER EXPERIENCE","100% Type-Safe Pure Dart","Shared data models, end-to-end type checking, instant worker hot reload, and streamlined CLI tooling.","#f59e0b"])
B.ke=s([B.mX,B.mZ,B.n0,B.n_,B.mW,B.mY],A.aE("a2<+(j,j,j,j)>"))
B.jV=new A.K(B.bT,0)
B.ac=new A.K(B.x,45)
B.kf=s([B.jV,B.ac],t.f)
B.kg=s(["models","orm","orm-query","orm-relations"],t.s)
B.lw=new A.aH("Flint Dart now sanitizes res.page() props before embedding them in the browser payload, including DateTime, Uri, enum values, models, maps, iterables, and objects with toJson() or toMap().","JSON-Safe Flint Page Props")
B.lC=new A.aH("Flint UI now replaces child components by default during parent rebuilds, so constructor-provided values stay current without requiring updateFrom for ordinary display components.","Fresh Child Component Values")
B.lB=new A.aH("StatefulComponent and StatelessComponent make lifecycle intent clear. Component remains backwards-compatible, while components that must survive parent rebuilds can opt in with preserveState.","Explicit Component Lifecycle Bases")
B.lF=new A.aH("The docs app now targets hosted pub.dev versions of flint_dart and flint_ui, keeping deployment independent of GitHub package overrides.","Hosted Package Deployment")
B.lD=new A.aH("Flint UI now lets docs pages and app screens be built with Dart components, state, events, and inline DartStyle without leaving the Dart ecosystem.","Flint UI Components")
B.m1=new A.aH("Docs now show a cleaner project shape with controllers, models, routes, UI pages, shared layouts, and reusable components organized in predictable folders.","Clear App Folder Structure")
B.lR=new A.aH("Column(renamedFrom: ...) lets migrations rename existing columns without dropping user data, with warnings for risky case-only renames.","Safer Column Renames")
B.lS=new A.aH("Schema columns now support comment metadata and MySQL-only after placement for cleaner migrated tables.","Column Comments & Placement")
B.lO=new A.aH("app.controller(...) gives route groups a concise, request-scoped controller API while still creating a fresh controller for every request.","Cleaner Controller Routes")
B.lE=new A.aH("Auth.verifyPasswordResetCode(...) lets apps validate reset codes before changing a password, and resetPasswordWithCode(...) now shares the same verification logic.","Password Reset Code Checks")
B.m8=new A.aH("AuthVerification.verifyPasswordResetCode(...) keeps extension-based auth flows aligned with the new core reset-code verifier.","Auth Verification Wrapper")
B.ls=new A.aH("Exception middleware regression coverage now includes awaited async handlers that throw AuthException.","Async Auth Errors Covered")
B.ly=new A.aH("validate(), input(), allInput(), and rawBody() now cover JSON, forms, multipart fields, files, query params, and route params through one request API.","Unified Request Input")
B.lA=new A.aH("WebSocket rooms are now isolated by path, with explicit cross-namespace helpers like emitToRoomIn(...) and emitToNamespace(...).","WebSocket Namespaces")
B.lJ=new A.aH("emit(...) and sendJson(...) now normalize values like DateTime, collections, exceptions, and objects with toMap() or toJson() before encoding.","Safer WebSocket Payloads")
B.m7=new A.aH("Generated docs now include app.websocket(...) handshake routes with 101 Switching Protocols and Flint-specific metadata.","Swagger Knows WebSockets")
B.lK=new A.aH("The docs now emphasize lib/config/seeder_registry.dart as the canonical entry point for flint --db-seed.","Seeder Registry First")
B.lt=new A.aH("orWhere(...) now compiles consistently across select, update, delete, and model helpers, and all() preserves any query filters you chained before it.","ORM Query Fixes")
B.lu=new A.aH("All core docs now use (Context ctx) examples for better autocomplete and consistency.","Context-First Docs")
B.kh=s([B.lw,B.lC,B.lB,B.lF,B.lD,B.m1,B.lR,B.lS,B.lO,B.lE,B.m8,B.ls,B.ly,B.lA,B.lJ,B.m7,B.lK,B.lt,B.lu],A.aE("a2<+body,title(j,j)>"))
B.f9=new A.e("rgba(234, 179, 8, 0.15)")
B.d2=new A.K(B.f9,0)
B.ki=s([B.d2,B.ac],t.f)
B.d5=new A.K(B.x,44)
B.kj=s([B.d2,B.d5],t.f)
B.bP=new A.e("#000000")
B.jN=new A.K(B.bP,0)
B.jR=new A.K(B.bP,65)
B.jB=new A.K(B.x,100)
B.kk=s([B.jN,B.jR,B.jB],t.f)
B.eJ=new A.e("rgba(249, 115, 22, 0.18)")
B.jS=new A.K(B.eJ,0)
B.km=s([B.jS,B.ac],t.f)
B.ex=new A.e("rgba(16, 185, 129, 0.12)")
B.jz=new A.K(B.ex,null)
B.jD=new A.K(B.x,30)
B.kn=s([B.jz,B.jD],t.f)
B.eM=new A.e("rgba(14, 165, 233, 0.14)")
B.jP=new A.K(B.eM,null)
B.jF=new A.K(B.x,34)
B.ko=s([B.jP,B.jF],t.f)
B.f0=new A.e("rgba(56, 189, 248, 0.08)")
B.jJ=new A.K(B.f0,null)
B.k4=new A.K(B.aK,null)
B.jA=new A.K(B.bK,null)
B.kp=s([B.jJ,B.k4,B.jA],t.f)
B.eG=new A.e("rgba(139, 92, 246, 0.1)")
B.jZ=new A.K(B.eG,0)
B.d6=new A.K(B.x,55)
B.kq=s([B.jZ,B.d6],t.f)
B.ey=new A.e("rgba(16, 185, 129, 0.18)")
B.d7=new A.K(B.ey,0)
B.kr=s([B.d7,B.ac],t.f)
B.jO=new A.K(B.c1,0)
B.d4=new A.K(B.x,42)
B.ks=s([B.jO,B.d4],t.f)
B.mo=new A.a1("flint-class","Flint Class","Core Framework")
B.mp=new A.a1("request","Request","Core Framework")
B.mO=new A.a1("response","Response","Core Framework")
B.md=new A.a1("router","Router","Core Framework")
B.mF=new A.a1("middleware","Middleware","Core Framework")
B.mK=new A.a1("model","Model","Database")
B.mf=new A.a1("query-builder","Query Builder","Database")
B.mJ=new A.a1("migration","Migration","Database")
B.mP=new A.a1("schema","Schema","Database")
B.my=new A.a1("auth","Auth Manager","Authentication")
B.mw=new A.a1("guards","Auth Guards","Authentication")
B.mi=new A.a1("providers","Auth Providers","Authentication")
B.mN=new A.a1("components","Components","Flint UI")
B.mg=new A.a1("layout","Layout","Flint UI")
B.mz=new A.a1("forms","Forms","Flint UI")
B.mr=new A.a1("cache","Cache","Utilities")
B.mQ=new A.a1("session","Session","Utilities")
B.mR=new A.a1("storage","Storage","Utilities")
B.mH=new A.a1("mail","Mail","Utilities")
B.mT=new A.a1("validation","Validation","Utilities")
B.da=s([B.mo,B.mp,B.mO,B.md,B.mF,B.mK,B.mf,B.mJ,B.mP,B.my,B.mw,B.mi,B.mN,B.mg,B.mz,B.mr,B.mQ,B.mR,B.mH,B.mT],A.aE("a2<+(j,j,j)>"))
B.kt=s(["Flint","Model","Flint UI","Routing","Auth","Middleware","Database","Deployment"],t.s)
B.ku=s(["authentication","security"],t.s)
B.ez=new A.e("rgba(16, 185, 129, 0.15)")
B.k2=new A.K(B.ez,0)
B.jG=new A.K(B.x,60)
B.kv=s([B.k2,B.jG],t.f)
B.f1=new A.e("rgba(56, 189, 248, 0.18)")
B.jI=new A.K(B.f1,0)
B.kw=s([B.jI,B.ac],t.f)
B.ky=s([],A.aE("a2<~(hA)>"))
B.aw=s([],t.Y)
B.V=s([],t.c7)
B.aV=s([],t.s)
B.nz=s([],t.o)
B.kx=s([],A.aE("a2<zF>"))
B.kz=s([],t.q)
B.h=s([],A.aE("a2<T?>"))
B.db=s([B.d7,B.d4],t.f)
B.fl=new A.e("rgba(52, 211, 153, 0.22)")
B.k0=new A.K(B.fl,0)
B.kA=s([B.k0,B.ac],t.f)
B.eN=new A.e("rgba(14, 165, 233, 0.18)")
B.jX=new A.K(B.eN,0)
B.dc=s([B.jX,B.d5],t.f)
B.f2=new A.e("rgba(56, 189, 248, 0.16)")
B.jK=new A.K(B.f2,null)
B.jE=new A.K(B.x,32)
B.kC=s([B.jK,B.jE],t.f)
B.fg=new A.e("#fffaf5")
B.k1=new A.K(B.fg,0)
B.eR=new A.e("#fbf5ee")
B.jW=new A.K(B.eR,48)
B.eh=new A.e("#f5ede3")
B.jM=new A.K(B.eh,100)
B.kD=s([B.k1,B.jW,B.jM],t.f)
B.eT=new A.e("#f8fffb")
B.jQ=new A.K(B.eT,0)
B.eU=new A.e("#f0faf5")
B.jY=new A.K(B.eU,48)
B.f6=new A.e("#eaf6fa")
B.k7=new A.K(B.f6,100)
B.dd=s([B.jQ,B.jY,B.k7],t.f)
B.kF=s(["middleware","validation"],t.s)
B.f3=new A.e("rgba(56, 189, 248, 0.24)")
B.jL=new A.K(B.f3,null)
B.fm=new A.e("rgba(52, 211, 153, 0.18)")
B.k5=new A.K(B.fm,null)
B.kG=s([B.jL,B.k5],t.f)
B.d3=new A.K(B.I,0)
B.jU=new A.K(B.aY,45)
B.eS=new A.e("#8b5cf6")
B.k_=new A.K(B.eS,100)
B.kH=s([B.d3,B.jU,B.k_],t.f)
B.kI=s(["routing","route-params","query-params","request-response","request-body","file-uploads","route-groups"],t.s)
B.mC=new A.a1("introduction","Introduction",null)
B.me=new A.a1("flint-story","Flint Story",null)
B.mB=new A.a1("installation","Install",null)
B.mk=new A.a1("create-run","Create & Run",null)
B.mt=new A.a1("cli","CLI",null)
B.m2=new A.ag("routing","Overview")
B.mb=new A.ag("route-params","Route Params")
B.lU=new A.ag("query-params","Query Params")
B.m6=new A.ag("request-response","Request & Response")
B.lI=new A.ag("request-body","Request Body")
B.lV=new A.ag("file-uploads","File Uploads")
B.m3=new A.ag("route-groups","Route Groups")
B.kB=s([B.m2,B.mb,B.lU,B.m6,B.lI,B.lV,B.m3],t.O)
B.mn=new A.a1("routing","Routing",B.kB)
B.lW=new A.ag("middleware","Overview")
B.lr=new A.ag("validation","Input Validation")
B.kM=s([B.lW,B.lr],t.O)
B.mE=new A.a1("middleware","Middleware",B.kM)
B.lL=new A.ag("authentication","Overview")
B.m4=new A.ag("security","Security")
B.kE=s([B.lL,B.m4],t.O)
B.mA=new A.a1("authentication","Authentication",B.kE)
B.mj=new A.a1("sessions","Sessions & Cookies",null)
B.ms=new A.a1("cache","Caching",null)
B.mS=new A.a1("storage","Storage",null)
B.mG=new A.a1("logging","Logging",null)
B.mh=new A.a1("errors","Errors & Exceptions",null)
B.mc=new A.a1("helpers","Helpers & Utils",null)
B.mx=new A.a1("architecture","Controllers & Services",null)
B.mI=new A.a1("mail","Mail",null)
B.mM=new A.a1("ai","AI Runtime",null)
B.mD=new A.a1("isolate","Isolate",null)
B.mq=new A.a1("swagger-docs","Swagger Docs",null)
B.mu=new A.a1("database","Database",null)
B.mV=new A.a1("websockets","WebSockets",null)
B.mU=new A.a1("views","Views",null)
B.mm=new A.a1("theme-mode","Light & Dark Mode",null)
B.lX=new A.ag("models","Overview")
B.m0=new A.ag("orm","ORM")
B.lx=new A.ag("orm-query","Query")
B.lq=new A.ag("orm-relations","Relations")
B.kl=s([B.lX,B.m0,B.lx,B.lq],t.O)
B.ml=new A.a1("models","Models & Tables",B.kl)
B.mL=new A.a1("table-sync","Table Sync",null)
B.mv=new A.a1("deployment","Deployment",null)
B.kJ=s([B.mC,B.me,B.mB,B.mk,B.mt,B.mn,B.mE,B.mA,B.mj,B.ms,B.mS,B.mG,B.mh,B.mc,B.mx,B.mI,B.mM,B.mD,B.mq,B.mu,B.mV,B.mU,B.mm,B.ml,B.mL,B.mv],A.aE("a2<+(j,j,B<+(j,j)>?)>"))
B.jT=new A.K(B.aY,48)
B.jH=new A.K(B.c0,100)
B.kK=s([B.d3,B.jT,B.jH],t.f)
B.ff=new A.e("rgba(167, 139, 250, 0.12)")
B.k3=new A.K(B.ff,0)
B.kL=s([B.k3,B.d6],t.f)
B.k6=new A.K(B.b4,null)
B.jC=new A.K(B.x,28)
B.kN=s([B.k6,B.jC],t.f)
B.li={width:0,height:1,"object-fit":2,display:3,background:4}
B.kO=new A.a9(B.li,["100%","100%","cover","block","#020617"],t.w)
B.lm={margin:0,"font-size":1,color:2}
B.kP=new A.a9(B.lm,[0,"13px","#b42318"],t.bU)
B.lg={display:0,"max-width":1}
B.kQ=new A.a9(B.lg,["block","100%"],t.J)
B.dr={display:0,gap:1}
B.de=new A.a9(B.dr,["grid","6px"],t.w)
B.kR=new A.a9(B.dr,["grid","16px"],t.J)
B.dq={display:0,"flex-direction":1}
B.kU=new A.a9(B.dq,["flex","row"],t.J)
B.kV=new A.a9(B.dq,["flex","column"],t.J)
B.ll={type:0}
B.ax=new A.a9(B.ll,["submit"],t.J)
B.di=new A.a9(B.ay,[],A.aE("a9<j,l>"))
B.dj=new A.a9(B.ay,[],t.w)
B.a5=new A.a9(B.ay,[],A.aE("a9<j,@>"))
B.lj={"background-size":0}
B.kY=new A.a9(B.lj,["44px 44px, 44px 44px"],t.J)
B.l8={introduction:0,installation:1,"create-run":2,cli:3,routing:4,"route-params":5,"query-params":6,"request-response":7,"request-body":8,"file-uploads":9,"route-groups":10,middleware:11,validation:12,authentication:13,security:14,sessions:15,cache:16,storage:17,logging:18,errors:19,helpers:20,architecture:21,mail:22,ai:23,isolate:24,"swagger-docs":25,database:26,websockets:27,views:28,models:29,orm:30,"orm-query":31,"orm-relations":32,"table-sync":33,deployment:34}
B.kZ=new A.a9(B.l8,["installation","installation","create-run","cli","routing","routing","routing","routing","routing","routing","route-groups","middleware","validation","authentication","security","sessions","cache","storage","logging","errors","helpers","architecture","mail","ai","isolate","swagger-docs","database","websockets","views","models","models","models","models","table-sync","deployment"],t.w)
B.l6={"aria-hidden":0}
B.dk=new A.a9(B.l6,["true"],t.J)
B.dt={style:0}
B.ld={width:0,"max-width":1,"overflow-x":2}
B.l3=new A.a9(B.ld,["100%","100%","hidden"],t.w)
B.dl=new A.a9(B.dt,[B.l3],t.J)
B.l9={"min-width":0,"max-width":1,"overflow-wrap":2}
B.kW=new A.a9(B.l9,["0","100%","break-word"],t.w)
B.bv=new A.a9(B.dt,[B.kW],t.J)
B.l7={position:0,inset:1,display:2,width:3,height:4,padding:5,margin:6,border:7,"border-radius":8,background:9,appearance:10,cursor:11}
B.bw=new A.a9(B.l7,["absolute","0","block","100%","100%","0","0","0","0","rgba(2, 6, 23, 0.78)","none","pointer"],t.w)
B.la={width:0,height:1,"min-height":2,"object-fit":3,display:4}
B.l1=new A.a9(B.la,["100%","100%","210px","cover","block"],t.w)
B.lb={"font-size":0,"font-weight":1,color:2}
B.l2=new A.a9(B.lb,["14px",600,"#344054"],t.bU)
B.dp={"aria-label":0}
B.l4=new A.a9(B.dp,["Close API navigation"],t.J)
B.l5=new A.a9(B.dp,["Close guide navigation"],t.J)
B.v=new A.ih("hidden")
B.az=new A.dT("absolute",2,"absolute")
B.bx=new A.dT("fixed",3,"fixed")
B.ln=new A.dT("sticky",4,"sticky")
B.lo=new A.ag("/ai","AI Engine")
B.lp=new A.ag("/fullstack/guides","Fullstack Guides")
B.lv=new A.ag("/fullstack/examples","Examples & Tutorials")
B.lz=new A.ag("/fullstack/whats-new","What's New")
B.lG=new A.ag("https://github.com/flint-dart/flint_dart/discussions","Discussions")
B.lH=new A.ag("/fullstack/api","Fullstack API")
B.lM=new A.ag("https://github.com/flint-dart/flint_dart/issues","Issues")
B.lN=new A.ag("https://github.com/flint-dart/flint_dart/pulls","Pull requests")
B.lP=new A.ag("/showcase","Built with Flint")
B.lQ=new A.ag("/blog","Blog")
B.lT=new A.ag("/hardware","Hardware & Robotics")
B.lY=new A.ag("/fullstack","Fullstack Framework")
B.lZ=new A.ag("/client","Client SDK")
B.m_=new A.ag("/fullstack/changelog","Changelog")
B.m5=new A.ag("/dart","Dart Lessons")
B.m9=new A.ag("/showcase/submit","Submit a build")
B.ma=new A.ag("/questions","Questions")
B.lk={flex:0,"flex-grow":1,"flex-shrink":2,"font-weight":3,"line-height":4,opacity:5,"z-index":6}
B.n1=new A.dz(B.lk,7,t.fe)
B.lc={svg:0,path:1,line:2,polyline:3,polygon:4,circle:5,rect:6,ellipse:7,title:8,g:9}
B.n2=new A.dz(B.lc,10,t.fe)
B.n3=new A.at(1,0,0,B.x)
B.n8=new A.at(0,10,2,B.I)
B.na=new A.I("clamp(3rem, 6.2vw, 5.2rem)")
B.nb=new A.I("max-content")
B.nc=new A.I("clamp(2.5rem, 5.2vw, 4.4rem)")
B.ad=new A.I("0")
B.nd=new A.I("fit-content")
B.ne=new A.I("100vh")
B.dv=new A.o1(0,"topRight")
B.B=new A.e_(0,"neutral")
B.i=new A.e_(1,"primary")
B.nh=new A.e_(3,"warning")
B.ni=new A.e_(4,"danger")
B.nF=new A.iQ("ease")
B.nj=new A.iQ("linear")
B.nk=A.c3("yE")
B.nl=A.c3("yF")
B.nm=A.c3("vn")
B.nn=A.c3("vo")
B.no=A.c3("vr")
B.np=A.c3("vs")
B.nq=A.c3("vt")
B.nr=A.c3("T")
B.ns=A.c3("w_")
B.nt=A.c3("w0")
B.nu=A.c3("w1")
B.nv=A.c3("ql")
B.nw=new A.ob(!1)
B.aA=new A.e3(0,"disconnected")
B.dw=new A.e3(1,"connecting")
B.aB=new A.e3(2,"connected")
B.nx=new A.e3(3,"reconnecting")})();(function staticFields(){$.oE=null
$.bM=A.d([],t.f)
$.rw=null
$.mT=0
$.io=A.xo()
$.rc=null
$.rb=null
$.tH=null
$.tv=null
$.tL=null
$.pJ=null
$.pQ=null
$.qG=null
$.oJ=A.d([],A.aE("a2<B<T>?>"))
$.ec=null
$.fP=null
$.fQ=null
$.qB=!1
$.ai=B.F
$.tp=A.dO(t.N)
$.to=A.dO(t.N)})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"yN","qO",()=>A.y5("_$dart_dartClosure"))
s($,"Ap","uK",()=>A.d([new J.hP()],A.aE("a2<f3>")))
s($,"zH","u7",()=>A.cq(A.o7({
toString:function(){return"$receiver$"}})))
s($,"zI","u8",()=>A.cq(A.o7({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"zJ","u9",()=>A.cq(A.o7(null)))
s($,"zK","ua",()=>A.cq(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"zN","ud",()=>A.cq(A.o7(void 0)))
s($,"zO","ue",()=>A.cq(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"zM","uc",()=>A.cq(A.rJ(null)))
s($,"zL","ub",()=>A.cq(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"zQ","ug",()=>A.cq(A.rJ(void 0)))
s($,"zP","uf",()=>A.cq(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"zS","qZ",()=>A.w6())
s($,"zY","um",()=>A.vy(4096))
s($,"zW","uk",()=>new A.oW().$0())
s($,"zX","ul",()=>new A.oV().$0())
s($,"zT","uh",()=>new Int8Array(A.wZ(A.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],t.t))))
s($,"zU","ui",()=>A.c0("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1))
s($,"zV","uj",()=>typeof URLSearchParams=="function")
s($,"Ag","kg",()=>A.fU(B.nr))
s($,"zD","qY",()=>{A.vJ()
return $.mT})
s($,"AM","cg",()=>{var r=A.wT()
return new A.l1(new A.l9(r,B.dj,B.a5,B.ip,null,!1,null,!1,B.e8,!0))})
s($,"yT","q2",()=>A.aa("activity",A.d([A.cd("22 12 18 12 15 21 9 3 6 12 2 12")],t.l)))
s($,"yU","qP",()=>A.aa("alertCircle",A.d([A.cc(12,12,10),A.aO(12,8,12,13),A.aO(12,17,12,17)],t.l)))
s($,"yV","qQ",()=>A.aa("archive",A.d([A.fR(3,4,18,4,null),A.a3("M5 8v12h14V8"),A.a3("M10 12h4")],t.l)))
s($,"yW","tU",()=>A.aa("arrowDown",A.d([A.a3("M12 5v14"),A.cd("19 12 12 19 5 12")],t.l)))
s($,"yX","q3",()=>A.aa("arrowLeft",A.d([A.a3("M19 12H5"),A.cd("12 19 5 12 12 5")],t.l)))
s($,"yY","bz",()=>A.aa("arrowRight",A.d([A.a3("M5 12h14"),A.cd("12 5 19 12 12 19")],t.l)))
s($,"yZ","fV",()=>A.aa("book",A.d([A.a3("M4 19.5A2.5 2.5 0 0 1 6.5 17H20"),A.a3("M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15z")],t.l)))
s($,"z_","tV",()=>A.aa("bookmark",A.d([A.a3("M6 3h12v18l-6-4-6 4V3z")],t.l)))
s($,"z0","tW",()=>A.aa("box",A.d([A.a3("M21 8 12 3 3 8l9 5 9-5z"),A.a3("M3 8v8l9 5 9-5V8"),A.a3("M12 13v8")],t.l)))
s($,"z1","qR",()=>A.aa("calendar",A.d([A.fR(3,4,18,17,2),A.aO(16,2,16,6),A.aO(8,2,8,6),A.aO(3,10,21,10)],t.l)))
s($,"z2","fW",()=>A.aa("check",A.d([A.cd("20 6 9 17 4 12")],t.l)))
s($,"z3","tX",()=>A.aa("chevronDown",A.d([A.cd("6 9 12 15 18 9")],t.l)))
s($,"z4","qS",()=>A.aa("chevronRight",A.d([A.cd("9 18 15 12 9 6")],t.l)))
s($,"z5","tY",()=>A.aa("clipboard",A.d([A.fR(5,4,14,18,2),A.a3("M9 4a3 3 0 0 1 6 0"),A.a3("M9 4h6")],t.l)))
s($,"z6","tZ",()=>A.aa("clock",A.d([A.cc(12,12,10),A.a3("M12 6v6l4 2")],t.l)))
s($,"z7","u_",()=>A.aa("cloud",A.d([A.a3("M17.5 19H7a5 5 0 1 1 1.1-9.9A7 7 0 0 1 21 12.5 3.5 3.5 0 0 1 17.5 19z")],t.l)))
s($,"z8","dl",()=>A.aa("code",A.d([A.cd("8 9 4 12 8 15"),A.cd("16 9 20 12 16 15"),A.a3("M14 5l-4 14")],t.l)))
s($,"z9","fX",()=>A.aa("copy",A.d([A.fR(8,8,12,12,2),A.a3("M16 8V4H4v12h4")],t.l)))
s($,"za","qT",()=>A.aa("database",A.d([A.vq("ellipse",A.ak(["cx",12,"cy",5,"rx",8,"ry",3],t.N,t.X)),A.a3("M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"),A.a3("M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6")],t.l)))
s($,"zb","qU",()=>A.aa("document",A.d([A.a3("M6 2h8l4 4v16H6V2z"),A.a3("M14 2v5h5"),A.a3("M9 13h6"),A.a3("M9 17h6")],t.l)))
s($,"zc","u0",()=>A.aa("edit",A.d([A.a3("M4 20h4L19 9l-4-4L4 16v4z"),A.a3("M13 7l4 4")],t.l)))
s($,"zd","cP",()=>A.aa("globe",A.d([A.cc(12,12,10),A.a3("M2 12h20"),A.a3("M12 2a15 15 0 0 1 0 20"),A.a3("M12 2a15 15 0 0 0 0 20")],t.l)))
s($,"ze","cf",()=>A.aa("layers",A.d([A.tn("12 2 2 7 12 12 22 7 12 2"),A.cd("2 12 12 17 22 12"),A.cd("2 17 12 22 22 17")],t.l)))
s($,"zf","u1",()=>A.aa("link",A.d([A.a3("M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"),A.a3("M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1")],t.l)))
s($,"zg","qV",()=>A.aa("logIn",A.d([A.a3("M15 3h4v18h-4"),A.a3("M10 17l5-5-5-5"),A.a3("M15 12H3")],t.l)))
s($,"zh","u2",()=>A.aa("message",A.d([A.a3("M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z")],t.l)))
s($,"zi","u3",()=>A.aa("moon",A.d([A.a3("M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z")],t.l)))
s($,"zj","qW",()=>A.aa("palette",A.d([A.a3("M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.3-3.5 1.8 1.8 0 0 1 1.2-3.2H18a6 6 0 0 0 0-12h-6z"),A.cc(7.5,10,1),A.cc(10,7,1),A.cc(14,7,1)],t.l)))
s($,"zk","q4",()=>A.aa("play",A.d([A.tn("8 5 19 12 8 19 8 5")],t.l)))
s($,"zl","kb",()=>A.aa("plus",A.d([A.aO(12,5,12,19),A.aO(5,12,19,12)],t.l)))
s($,"zm","kc",()=>A.aa("rocket",A.d([A.a3("M5 15c-1 1-2 4-2 6 2 0 5-1 6-2"),A.a3("M9 15 4 10l5-1 6-6c2-2 5-1 6-1 0 1 1 4-1 6l-6 6-1 5-4-4z"),A.cc(15,9,1.5)],t.l)))
s($,"zn","u4",()=>A.aa("route",A.d([A.cc(6,18,3),A.cc(18,6,3),A.a3("M9 18h4a5 5 0 0 0 0-10H9")],t.l)))
s($,"zo","kd",()=>A.aa("send",A.d([A.a3("M22 2 11 13"),A.a3("M22 2 15 22l-4-9-9-4 20-7z")],t.l)))
s($,"zp","cw",()=>A.aa("server",A.d([A.fR(3,4,18,6,2),A.fR(3,14,18,6,2),A.aO(7,7,7,7),A.aO(7,17,7,17)],t.l)))
s($,"zq","ke",()=>A.aa("shield",A.d([A.a3("M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z")],t.l)))
s($,"zr","c4",()=>A.aa("sparkles",A.d([A.a3("M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"),A.a3("M5 14l1 2.2L8 17l-2 .8L5 20l-1-2.2L2 17l2-.8L5 14z"),A.a3("M19 13l1 2.2 2 .8-2 .8L19 19l-1-2.2-2-.8 2-.8L19 13z")],t.l)))
s($,"zs","u5",()=>A.aa("sun",A.d([A.cc(12,12,4),A.aO(12,2,12,4),A.aO(12,20,12,22),A.aO(4.9,4.9,6.3,6.3),A.aO(17.7,17.7,19.1,19.1),A.aO(2,12,4,12),A.aO(20,12,22,12),A.aO(4.9,19.1,6.3,17.7),A.aO(17.7,6.3,19.1,4.9)],t.l)))
s($,"zt","u6",()=>A.aa("trash",A.d([A.a3("M3 6h18"),A.a3("M8 6V4h8v2"),A.a3("M6 6l1 16h10l1-16"),A.aO(10,11,10,18),A.aO(14,11,14,18)],t.l)))
s($,"zu","qX",()=>A.aa("user",A.d([A.cc(12,8,4),A.a3("M4 22a8 8 0 0 1 16 0")],t.l)))
s($,"zv","kf",()=>A.aa("x",A.d([A.aO(18,6,6,18),A.aO(6,6,18,18)],t.l)))
s($,"zw","bR",()=>A.aa("zap",A.d([A.a3("M13 2 3 14h8l-1 8 11-14h-8l0-6z")],t.l)))
s($,"AL","v2",()=>{var r=null
return A.a(r,B.c,r,r,r,r,r,A.va(B.x,1),r,r,r,r,r,r,r,r,r,B.fo,r,r,B.k,r,r,r,r,r,r,r,r,r,r,r,600,8,r,r,r,r,r,B.q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,B.bI,r,r,r,r,A.rG(120),r,r,r,r,r,r,r)})
s($,"AQ","q5",()=>new A.lo(A.vQ(B.av,t.c)))
s($,"AN","v3",()=>{var r=t.N,q=A.aE("a_(A<j,@>)"),p=A.a0(r,q)
p.S(0,A.aE("A<j,a_(A<j,@>)>").a(A.ak(["Home",new A.ph(),"Fullstack",new A.pi(),"WhatsNew",new A.pj(),"Changelog",new A.pu(),"Client",new A.pv(),"Ai",new A.pw(),"Hardware",new A.px(),"UiDocs",new A.py(),"Examples",new A.pz(),"Guides",new A.pA(),"Api",new A.pB(),"Questions",new A.pk(),"AskQuestion",new A.pl(),"Blog",new A.pm(),"BlogDetail",new A.pn(),"BlogWrite",new A.po(),"QuestionDetail",new A.pp(),"Showcase",new A.pq(),"ShowcaseDetail",new A.pr(),"SubmitBuild",new A.ps(),"Content",new A.pt()],r,q)))
return new A.mQ(p)})
s($,"Am","uJ",()=>A.ar("#f43f5e"))
s($,"Ac","uC",()=>A.ar("#38bdf8"))
s($,"AH","v0",()=>A.ar("#34d399"))
s($,"Au","uO",()=>A.ar("#fbbf24"))
s($,"AE","uY",()=>A.ar("#e2e8f0"))
s($,"Ar","r4",()=>{var r,q,p,o,n="import ",m="(",l="async",k="    final ",j="await ",i="        .",h="main",g="  final ",f=",",e="  );",d="const ",c="  visionGuard.",b=$.cw(),a=A.ar("#10b981"),a0=$.uJ(),a1=A.r(n,a0,!0),a2=$.uO(),a3=A.r("'package:flint_dart/flint_dart.dart'",a2,!1),a4=$.uY(),a5=A.aE("a2<jV>")
a3=A.V(A.d([a1,a3,A.r(";",a4,!1)],a5))
a1=A.V(A.d([],a5))
r=$.v0()
q=A.r("void ",r,!1)
p=$.uC()
o=A.aE("a2<fd>")
q=A.oM(a,"import 'package:flint_dart/flint_dart.dart';\n\nvoid registerRoutes(Flint app) {\n  app.get('/api/projects', (ctx) async {\n    final user = await ctx.req.auth;\n    final projects = await Project()\n        .where('user_id', '=', user.id)\n        .withRelation('deployments')\n        .get();\n\n    return ctx.res?.json({'status': true, 'data': projects});\n  });\n}","lib/controllers/project_controller.dart","/fullstack",b,A.d([a3,a1,A.V(A.d([q,A.r("registerRoutes",p,!1),A.r(m,a4,!1),A.r("Flint",r,!0),A.r(" app) {",a4,!1)],a5)),A.V(A.d([A.r("  app.",a4,!1),A.r("get",p,!1),A.r("('/api/projects', (ctx) ",a2,!1),A.r(l,a0,!0),A.r(" {",a4,!1)],a5)),A.V(A.d([A.r(k,a0,!1),A.r("user = ",a4,!1),A.r(j,a0,!1),A.r("ctx.req.",a4,!1),A.r("auth",p,!1),A.r(";",a4,!1)],a5)),A.V(A.d([A.r(k,a0,!1),A.r("projects = ",a4,!1),A.r(j,a0,!1),A.r("Project",r,!0),A.r("()",a4,!1)],a5)),A.V(A.d([A.r(i,a4,!1),A.r("where",p,!1),A.r("('user_id', '=', user.id)",a4,!1)],a5)),A.V(A.d([A.r(i,a4,!1),A.r("withRelation",p,!1),A.r("('deployments')",a2,!1)],a5)),A.V(A.d([A.r(i,a4,!1),A.r("get",p,!1),A.r("();",a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r("    return ",a0,!0),A.r("ctx.res?.",a4,!1),A.r("json",p,!1),A.r("({'status': true, 'data': projects});",a4,!1)],a5)),A.V(A.d([A.r("  });",a4,!1)],a5)),A.V(A.d([A.r("}",a4,!1)],a5))],o),"Flint Dart Web Server","HTTP 200 OK \u2022 0.4ms latency \u2022 RLS Active","server.dart")
a1=$.cP()
a1=A.oM(A.ar("#06b6d4"),"import 'package:flint_client/flint_client.dart';\n\nFuture<void> main() async {\n  final client = FlintClient(\n    baseUrl: 'https://api.flintdart.dev',\n    debug: true,\n  );\n\n  final response = await client.get<Map<String, dynamic>>('/api/projects');\n  if (response.isSuccess) {\n    print('Projects: ${response.data}');\n  }\n}","lib/services/api_sync.dart","/client",a1,A.d([A.V(A.d([A.r(n,a0,!0),A.r("'package:flint_client/flint_client.dart'",a2,!1),A.r(";",a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r("Future<",r,!1),A.r("void",r,!1),A.r("> ",a4,!1),A.r(h,p,!1),A.r("() ",a4,!1),A.r(l,a0,!0),A.r(" {",a4,!1)],a5)),A.V(A.d([A.r(g,a0,!1),A.r("client = ",a4,!1),A.r("FlintClient",r,!0),A.r(m,a4,!1)],a5)),A.V(A.d([A.r("    baseUrl: ",a4,!1),A.r("'https://api.flintdart.dev'",a2,!1),A.r(f,a4,!1)],a5)),A.V(A.d([A.r("    debug: ",a4,!1),A.r("true",a0,!0),A.r(f,a4,!1)],a5)),A.V(A.d([A.r(e,a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r(g,a0,!1),A.r("response = ",a4,!1),A.r(j,a0,!1),A.r("client.",a4,!1),A.r("get",p,!1),A.r("<",a4,!1),A.r("Map<String, dynamic>",r,!1),A.r(">(",a4,!1),A.r("'/api/projects'",a2,!1),A.r(");",a4,!1)],a5)),A.V(A.d([A.r("  if ",a0,!0),A.r("(response.",a4,!1),A.r("isSuccess",p,!1),A.r(") {",a4,!1)],a5)),A.V(A.d([A.r("    print(",a4,!1),A.r("'Projects: ${response.data}'",a2,!1),A.r(");",a4,!1)],a5)),A.V(A.d([A.r("  }",a4,!1)],a5)),A.V(A.d([A.r("}",a4,!1)],a5))],o),"Flint Client SDK","Client Ready \u2022 Typed response \u2022 In-memory cache","client.dart")
a3=$.c4()
a3=A.oM(A.ar("#a855f7"),"import 'package:flint_ai/flint_ai.dart';\n\nFuture<void> main() async {\n  final ai = FlintAi();\n\n  final result = await ai.run(\n    agent: TaskAgent(),\n    goal: const AiGoal(\n      task: 'Analyze production server metrics',\n      input: {'clusterId': 'eu-central-1'},\n    ),\n    userId: 'user-1',\n  );\n\n  print(result.output);\n}","lib/agents/metrics_agent.dart","/ai",a3,A.d([A.V(A.d([A.r(n,a0,!0),A.r("'package:flint_ai/flint_ai.dart'",a2,!1),A.r(";",a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r("Future<",r,!1),A.r("void",r,!1),A.r("> ",a4,!1),A.r(h,p,!1),A.r("() ",a4,!1),A.r(l,a0,!0),A.r(" {",a4,!1)],a5)),A.V(A.d([A.r(g,a0,!1),A.r("ai = ",a4,!1),A.r("FlintAi",r,!0),A.r("();",a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r(g,a0,!1),A.r("result = ",a4,!1),A.r(j,a0,!1),A.r("ai.",a4,!1),A.r("run",p,!1),A.r(m,a4,!1)],a5)),A.V(A.d([A.r("    agent: ",a4,!1),A.r("TaskAgent",r,!0),A.r("(),",a4,!1)],a5)),A.V(A.d([A.r("    goal: ",a4,!1),A.r(d,a0,!1),A.r("AiGoal",r,!0),A.r(m,a4,!1)],a5)),A.V(A.d([A.r("      task: ",a4,!1),A.r("'Analyze production metrics'",a2,!1),A.r(f,a4,!1)],a5)),A.V(A.d([A.r("      input: {'clusterId': 'eu-central-1'},",a4,!1)],a5)),A.V(A.d([A.r("    ),",a4,!1)],a5)),A.V(A.d([A.r("    userId: ",a4,!1),A.r("'user-1'",a2,!1),A.r(f,a4,!1)],a5)),A.V(A.d([A.r(e,a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r("  print(",a4,!1),A.r("result.output",a4,!1),A.r(");",a4,!1)],a5)),A.V(A.d([A.r("}",a4,!1)],a5))],o),"Flint AI Engine","Multi-Provider Mesh \u2022 AiGoal -> AiPlan -> AiRunResult","ai_agent.dart")
b=$.bR()
return A.d([q,a1,a3,A.oM(A.ar("#f97316"),u.l,"firmware/cam_guard.dart","/hardware",b,A.d([A.V(A.d([A.r(n,a0,!0),A.r(u.d,a2,!1),A.r(";",a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r("void ",r,!1),A.r(h,p,!1),A.r("() {",a4,!1)],a5)),A.V(A.d([A.r(g,a0,!1),A.r("visionGuard = ",a4,!1),A.r("FirmwareBuilder",r,!0),A.r("('cam_guard', target: ",a4,!1),A.r("BoardTarget",r,!1),A.r(".esp32Cam);",a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r(c,a4,!1),A.r("camera",p,!1),A.r(m,a4,!1)],a5)),A.V(A.d([A.r("    resolution: ",a4,!1),A.r("CameraResolution",r,!1),A.r(".qvga,",a4,!1)],a5)),A.V(A.d([A.r("    format: ",a4,!1),A.r("PixelFormat",r,!1),A.r(".rgb565, frameRate: 15,",a4,!1)],a5)),A.V(A.d([A.r(e,a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r(g,a0,!1),A.r("model = visionGuard.",a4,!1),A.r("tfliteModel",p,!1),A.r(m,a4,!1)],a5)),A.V(A.d([A.r("    name: ",a4,!1),A.r("'person_detect'",a2,!1),A.r(f,a4,!1)],a5)),A.V(A.d([A.r("    assetPath: ",a4,!1),A.r("'models/person_detect.tflite'",a2,!1),A.r(f,a4,!1)],a5)),A.V(A.d([A.r("    inputShape: ",a4,!1),A.r(d,a0,!1),A.r("[1, 96, 96, 1],",a4,!1)],a5)),A.V(A.d([A.r("    outputShape: ",a4,!1),A.r(d,a0,!1),A.r("[1, 2],",a4,!1)],a5)),A.V(A.d([A.r("    quantization: ",a4,!1),A.r("TensorQuantization",r,!1),A.r(".int8,",a4,!1)],a5)),A.V(A.d([A.r("    tensorArenaSizeKb: 128,",a4,!1)],a5)),A.V(A.d([A.r(e,a4,!1)],a5)),A.V(A.d([],a5)),A.V(A.d([A.r(c,a4,!1),A.r("loop",p,!1),A.r("((ctx) {",a4,!1)],a5)),A.V(A.d([A.r("    ctx.",a4,!1),A.r("log",p,!1),A.r(u.s,a2,!1)],a5)),A.V(A.d([A.r("  });",a4,!1)],a5)),A.V(A.d([A.r("}",a4,!1)],a5))],o),"Flint Hardware & Robotics",u.A,"robotics.dart")],A.aE("a2<jH>"))})
s($,"AP","v4",()=>{var r,q=null,p=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.dX,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),o=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.e7,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),n=A.a7("bg",q),m=t.f,l=A.a(q,q,q,q,q,A.aK(A.d([A.aY(B.d_,B.ko),A.aY(B.cZ,B.kn),A.ar("#f8fafc")],m)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.a(q,q,q,q,q,A.aK(A.d([A.aY(B.d_,B.kC),A.aY(B.cZ,B.kN),A.ar("#05070d")],m)),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
l=A.a(q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,A.a7("text",q),q,m,q,q,q,q,q,q,q,q,q,q,q,A.vZ("font.sans",q),q,q,q,q,q,q,q,q,q,q,q,q,q,l,q,B.l,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)
m=A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.ar("inherit"),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,B.bI,q,q,q,q,q,q,q,q,q,q,q,q)
n=t.cB
r=A.aE("a2<be>")
return A.rA(p,l,o,A.d([A.iB("flint-docs-rise",A.d([A.qc(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iD(22),q,q,q,q,q,q,q,q)),A.qd(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iD(0),q,q,q,q,q,q,q,q))],n)),A.iB("flint-docs-float",A.d([A.eO(0,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.qi(A.d([A.iD(0),A.iC(0)],r)),q,q,q,q,q,q,q,q)),A.eO(50,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.qi(A.d([A.iD(-16),A.iC("3deg")],r)),q,q,q,q,q,q,q,q)),A.eO(100,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.qi(A.d([A.iD(0),A.iC(0)],r)),q,q,q,q,q,q,q,q))],n)),A.iB("flint-docs-orbit",A.d([A.qc(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iC(0),q,q,q,q,q,q,q,q)),A.qd(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.iC("360deg"),q,q,q,q,q,q,q,q))],n)),A.iB("flint-docs-scan",A.d([A.qc(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.rF(A.rC(-120)),q,q,q,q,q,q,q,q)),A.qd(A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,A.rF(A.rC(120)),q,q,q,q,q,q,q,q))],n)),A.iB("flint-docs-pulse",A.d([A.eO(0,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.42,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.eO(50,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.86,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q)),A.eO(100,A.a(q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,0.42,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q))],n))],t.o),m,"flint-docs-root",q,B.js)})
s($,"Ai","uG",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Az","uV",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,190,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"AA","uU",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,150,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Aj","uF",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"AB","uT",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,260,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"An","uI",()=>A.ar("#f43f5e"))
s($,"Ad","uB",()=>A.ar("#38bdf8"))
s($,"AI","v_",()=>A.ar("#34d399"))
s($,"Av","uN",()=>A.ar("#fbbf24"))
s($,"AF","uX",()=>A.ar("#e2e8f0"))
s($,"As","r3",()=>{var r,q,p,o,n,m="import ",l="'package:flint_dart/flint_dart.dart'",k=";",j="    final ",i="        .",h="    return ",g="extends ",f="  @override",e="  String ",d="get ",c="getAttribute",b="          Column(name: ",a=", type: ",a0="ColumnType.",a1="    socket.",a2=$.cw(),a3=A.ar("#10b981"),a4=$.uI(),a5=A.p(m,a4,!0),a6=$.uN(),a7=A.p(l,a6,!1),a8=$.uX(),a9=A.aE("a2<ji>")
a7=A.R(A.d([a5,a7,A.p(k,a8,!1)],a9))
a5=A.R(A.d([A.p(m,a4,!0),A.p("'package:app/models/project_model.dart'",a6,!1),A.p(k,a8,!1)],a9))
r=A.R(A.d([],a9))
q=$.v_()
p=A.p("void ",q,!1)
o=$.uB()
n=A.aE("a2<fj>")
p=A.on(a3,"import 'package:flint_dart/flint_dart.dart';\nimport 'package:app/models/project_model.dart';\n\nvoid registerRoutes(Flint app) {\n  app.get('/api/projects', (ctx) async {\n    final user = await ctx.req.auth;\n    final projects = await Project()\n        .where('user_id', '=', user.id)\n        .withRelation('deployments')\n        .get();\n\n    return ctx.res?.json({\n      'status': 'success',\n      'data': projects.map((p) => p.toMap()).toList(),\n    });\n  });\n}","lib/routes/api_routes.dart",a2,"Unified Routing & Context (ctx)",A.d([a7,a5,r,A.R(A.d([p,A.p("registerRoutes",o,!1),A.p("(",a8,!1),A.p("Flint",q,!0),A.p(" app) {",a8,!1)],a9)),A.R(A.d([A.p("  app.",a8,!1),A.p("get",o,!1),A.p("('/api/projects', (ctx) ",a6,!1),A.p("async",a4,!0),A.p(" {",a8,!1)],a9)),A.R(A.d([A.p(j,a4,!1),A.p("user = ",a8,!1),A.p("await ",a4,!1),A.p("ctx.req.",a8,!1),A.p("auth",o,!1),A.p(k,a8,!1)],a9)),A.R(A.d([A.p(j,a4,!1),A.p("projects = ",a8,!1),A.p("await ",a4,!1),A.p("Project",q,!0),A.p("()",a8,!1)],a9)),A.R(A.d([A.p(i,a8,!1),A.p("where",o,!1),A.p("('user_id', '=', user.id)",a8,!1)],a9)),A.R(A.d([A.p(i,a8,!1),A.p("withRelation",o,!1),A.p("('deployments')",a6,!1)],a9)),A.R(A.d([A.p(i,a8,!1),A.p("get",o,!1),A.p("();",a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p(h,a4,!0),A.p("ctx.res?.",a8,!1),A.p("json",o,!1),A.p("({",a8,!1)],a9)),A.R(A.d([A.p("      'status': ",a8,!1),A.p("'success'",a6,!1),A.p(",",a8,!1)],a9)),A.R(A.d([A.p("      'data': projects.",a8,!1),A.p("map",o,!1),A.p("((p) => p.",a8,!1),A.p("toMap",o,!1),A.p("()).",a8,!1),A.p("toList",o,!1),A.p("(),",a8,!1)],a9)),A.R(A.d([A.p("    });",a8,!1)],a9)),A.R(A.d([A.p("  });",a8,!1)],a9)),A.R(A.d([A.p("}",a8,!1)],a9))],n),"HTTP 200 OK \u2022 0.3ms latency \u2022 Unified Context","routes.dart","Context Route")
r=$.qW()
r=A.on(A.ar("#06b6d4"),"import 'package:flint_dart/ui.dart';\n\nclass DashboardPage extends Component {\n  final Map<String, dynamic> props;\n  DashboardPage(this.props);\n\n  @override\n  View build() {\n    return Container(\n      dartStyle: const DartStyle(padding: EdgeInsets.all(24)),\n      children: [\n        Text.h1('Active Deployments', dartStyle: _headingStyle),\n        ResourceView<List<Project>>(\n          data: props['projects'],\n          builder: (projects) => ProjectGrid(projects),\n        ),\n      ],\n    );\n  }\n}","lib/ui/pages/dashboard_page.dart",r,"Declarative Web UI & SSR",A.d([A.R(A.d([A.p(m,a4,!0),A.p("'package:flint_dart/ui.dart'",a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p("class ",a4,!0),A.p("DashboardPage ",q,!0),A.p(g,a4,!1),A.p("Component",q,!1),A.p(" {",a8,!1)],a9)),A.R(A.d([A.p("  final ",a4,!1),A.p("Map<String, dynamic> props;",a8,!1)],a9)),A.R(A.d([A.p("  DashboardPage(this.props);",a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p(f,o,!1)],a9)),A.R(A.d([A.p("  View ",q,!1),A.p("build",o,!1),A.p("() {",a8,!1)],a9)),A.R(A.d([A.p(h,a4,!0),A.p("Container",q,!0),A.p("(",a8,!1)],a9)),A.R(A.d([A.p("      dartStyle: ",a8,!1),A.p("const ",a4,!1),A.p("DartStyle",q,!1),A.p("(padding: ",a8,!1),A.p("EdgeInsets.",q,!1),A.p("all",o,!1),A.p("(24)),",a8,!1)],a9)),A.R(A.d([A.p("      children: [",a8,!1)],a9)),A.R(A.d([A.p("        Text.",a8,!1),A.p("h1",o,!1),A.p("('Active Deployments', dartStyle: _headingStyle),",a6,!1)],a9)),A.R(A.d([A.p("        ResourceView<",q,!1),A.p("List<Project>",q,!0),A.p(">(",a8,!1)],a9)),A.R(A.d([A.p("          data: props['projects'],",a8,!1)],a9)),A.R(A.d([A.p("          builder: (projects) => ",a8,!1),A.p("ProjectGrid",q,!1),A.p("(projects),",a8,!1)],a9)),A.R(A.d([A.p("        ),",a8,!1)],a9)),A.R(A.d([A.p("      ],",a8,!1)],a9)),A.R(A.d([A.p("    );",a8,!1)],a9)),A.R(A.d([A.p("  }",a8,!1)],a9)),A.R(A.d([A.p("}",a8,!1)],a9))],n),"SSR Hydrated \u2022 60fps Reactive Signals \u2022 Theme Aware","ui_page.dart","Frontend Component")
a5=$.qT()
a5=A.on(A.ar("#3b82f6"),"import 'package:flint_dart/model.dart';\nimport 'package:flint_dart/schema.dart';\n\nclass Project extends Model<Project> {\n  Project() : super(() => Project());\n\n  String get name => getAttribute('name') ?? '';\n  String get status => getAttribute('status') ?? 'draft';\n  String get userId => getAttribute('user_id') ?? '';\n\n  @override\n  Table get table => Table(\n        name: 'projects',\n        columns: [\n          Column(name: 'name', type: ColumnType.string, length: 255),\n          Column(name: 'status', type: ColumnType.string, length: 50),\n          Column(name: 'user_id', type: ColumnType.string, length: 100),\n        ],\n      );\n}","lib/models/project_model.dart",a5,"Flint ORM & Database Layer",A.d([A.R(A.d([A.p(m,a4,!0),A.p("'package:flint_dart/model.dart'",a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([A.p(m,a4,!0),A.p("'package:flint_dart/schema.dart'",a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p("class ",a4,!0),A.p("Project ",q,!0),A.p(g,a4,!1),A.p("Model<Project>",q,!1),A.p(" {",a8,!1)],a9)),A.R(A.d([A.p("  Project() : ",a8,!1),A.p("super",a4,!0),A.p("(() => ",a8,!1),A.p("Project",q,!1),A.p("());",a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p(e,q,!1),A.p(d,a4,!1),A.p("name => ",a8,!1),A.p(c,o,!1),A.p("('name') ?? ",a6,!1),A.p("''",a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([A.p(e,q,!1),A.p(d,a4,!1),A.p("status => ",a8,!1),A.p(c,o,!1),A.p("('status') ?? ",a6,!1),A.p("'draft'",a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p(f,o,!1)],a9)),A.R(A.d([A.p("  Table ",q,!1),A.p(d,a4,!1),A.p("table => ",a8,!1),A.p("Table",q,!0),A.p("(",a8,!1)],a9)),A.R(A.d([A.p("        name: ",a8,!1),A.p("'projects'",a6,!1),A.p(",",a8,!1)],a9)),A.R(A.d([A.p("        columns: [",a8,!1)],a9)),A.R(A.d([A.p(b,a8,!1),A.p("'name'",a6,!1),A.p(a,a8,!1),A.p(a0,q,!1),A.p("string",a8,!1),A.p(", length: 255),",a8,!1)],a9)),A.R(A.d([A.p(b,a8,!1),A.p("'status'",a6,!1),A.p(a,a8,!1),A.p(a0,q,!1),A.p("string",a8,!1),A.p(", length: 50),",a8,!1)],a9)),A.R(A.d([A.p("        ],",a8,!1)],a9)),A.R(A.d([A.p("      );",a8,!1)],a9)),A.R(A.d([A.p("}",a8,!1)],a9))],n),"PostgreSQL Active \u2022 Relations Typed \u2022 RLS Policy Enforced","model.dart","ORM & RLS Model")
a7=$.bR()
return A.d([p,r,a5,A.on(A.ar("#f59e0b"),"import 'package:flint_dart/flint_dart.dart';\n\nvoid registerWebSockets(Flint app) {\n  app.websocket('/ws/deployments', (req, socket) {\n    final projectId = req.query['id'] ?? 'global';\n    socket.join(projectId);\n\n    socket.on('deploy', (data) {\n      socket.emitToRoom(projectId, 'deployment_updated', {\n        'status': 'building',\n        'timestamp': DateTime.now().toIso8601String(),\n      });\n    });\n  });\n}","lib/routes/ws_routes.dart",a7,"Real-Time WebSocket Layer",A.d([A.R(A.d([A.p(m,a4,!0),A.p(l,a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p("void ",q,!1),A.p("registerWebSockets",o,!1),A.p("(",a8,!1),A.p("Flint",q,!0),A.p(" app) {",a8,!1)],a9)),A.R(A.d([A.p("  app.",a8,!1),A.p("websocket",o,!1),A.p("('/ws/deployments', (req, socket) {",a6,!1)],a9)),A.R(A.d([A.p(j,a4,!1),A.p("projectId = req.query['id'] ?? ",a8,!1),A.p("'global'",a6,!1),A.p(k,a8,!1)],a9)),A.R(A.d([A.p(a1,a8,!1),A.p("join",o,!1),A.p("(projectId);",a8,!1)],a9)),A.R(A.d([],a9)),A.R(A.d([A.p(a1,a8,!1),A.p("on",o,!1),A.p("('deploy', (data) {",a6,!1)],a9)),A.R(A.d([A.p("      socket.",a8,!1),A.p("emitToRoom",o,!1),A.p("(projectId, 'deployment_updated', {",a6,!1)],a9)),A.R(A.d([A.p("        'status': ",a8,!1),A.p("'building'",a6,!1),A.p(",",a8,!1)],a9)),A.R(A.d([A.p("        'timestamp': ",a8,!1),A.p("DateTime.",q,!1),A.p("now",o,!1),A.p("().",a8,!1),A.p("toIso8601String",o,!1),A.p("(),",a8,!1)],a9)),A.R(A.d([A.p("      });",a8,!1)],a9)),A.R(A.d([A.p("    });",a8,!1)],a9)),A.R(A.d([A.p("  });",a8,!1)],a9)),A.R(A.d([A.p("}",a8,!1)],a9))],n),"0.1ms Room Broadcast \u2022 Presence Active \u2022 Sub-millisecond","websocket.dart","Live Channels")],A.aE("a2<jh>"))})
s($,"Ao","uH",()=>A.ar("#f43f5e"))
s($,"Ae","uA",()=>A.ar("#38bdf8"))
s($,"AJ","uZ",()=>A.ar("#34d399"))
s($,"Aw","uM",()=>A.ar("#fbbf24"))
s($,"AG","uW",()=>A.ar("#e2e8f0"))
s($,"At","r2",()=>{var r,q,p,o,n="import ",m=u.d,l="void ",k="main",j="() {",i="  final ",h="FirmwareBuilder",g="BoardTarget",f="  visionGuard.",e="(",d="  );",c="loop",b="((ctx) {",a="    ctx.",a0="  });",a1="rover = ",a2="('rover_explorer', target: ",a3=".esp32);",a4="sonar = rover.",a5="(triggerPin: 5, echoPin: 18);",a6="drive = rover.",a7="differentialDrive",a8="    leftPwmPin: 14, leftDirPin: 27,",a9="    rightPwmPin: 12, rightDirPin: 26,",b0="setPwm",b1="  beacon.",b2="      BleService.",b3=$.bR(),b4=A.ar("#f97316"),b5=$.uH(),b6=A.q(n,b5,!0),b7=$.uM(),b8=A.q(m,b7,!1),b9=$.uW(),c0=A.aE("a2<jm>")
b8=A.J(A.d([b6,b8,A.q(";",b9,!1)],c0))
b6=A.J(A.d([],c0))
r=$.uZ()
q=A.q(l,r,!1)
p=$.uA()
o=A.aE("a2<fk>")
q=A.oC(b4,u.l,"firmware/cam_guard.dart",b3,"Edge AI & Computer Vision",A.d([b8,b6,A.J(A.d([q,A.q(k,p,!1),A.q(j,b9,!1)],c0)),A.J(A.d([A.q(i,b5,!1),A.q("visionGuard = ",b9,!1),A.q(h,r,!0),A.q("('cam_guard', target: ",b9,!1),A.q(g,r,!1),A.q(".esp32Cam);",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(f,b9,!1),A.q("camera",p,!1),A.q(e,b9,!1)],c0)),A.J(A.d([A.q("    resolution: ",b9,!1),A.q("CameraResolution",r,!1),A.q(".qvga,",b9,!1)],c0)),A.J(A.d([A.q("    format: ",b9,!1),A.q("PixelFormat",r,!1),A.q(".rgb565, frameRate: 15,",b9,!1)],c0)),A.J(A.d([A.q(d,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(i,b5,!1),A.q("model = visionGuard.",b9,!1),A.q("tfliteModel",p,!1),A.q(e,b9,!1)],c0)),A.J(A.d([A.q("    name: ",b9,!1),A.q("'person_detect'",b7,!1),A.q(",",b9,!1)],c0)),A.J(A.d([A.q("    assetPath: ",b9,!1),A.q("'models/person_detect.tflite'",b7,!1),A.q(",",b9,!1)],c0)),A.J(A.d([A.q("    inputShape: ",b9,!1),A.q("const ",b5,!1),A.q("[1, 96, 96, 1],",b9,!1)],c0)),A.J(A.d([A.q("    outputShape: ",b9,!1),A.q("const ",b5,!1),A.q("[1, 2],",b9,!1)],c0)),A.J(A.d([A.q("    quantization: ",b9,!1),A.q("TensorQuantization",r,!1),A.q(".int8,",b9,!1)],c0)),A.J(A.d([A.q("    tensorArenaSizeKb: 128,",b9,!1)],c0)),A.J(A.d([A.q(d,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(f,b9,!1),A.q(c,p,!1),A.q(b,b9,!1)],c0)),A.J(A.d([A.q(a,b9,!1),A.q("log",p,!1),A.q(u.s,b7,!1)],c0)),A.J(A.d([A.q(a0,b9,!1)],c0)),A.J(A.d([A.q("}",b9,!1)],c0))],o),u.A,"vision_guard.dart")
b6=$.cf()
b6=A.oC(A.ar("#fbbf24"),"import 'package:flint_hardware/flint_hardware.dart';\n\nvoid main() {\n  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);\n\n  // Ultrasonic Sonar & 6-Axis IMU\n  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);\n  final imu = rover.imu(sdaPin: 21, sclPin: 22);\n\n  // 2-Wheel Differential Drive (L298N)\n  final drive = rover.differentialDrive(\n    leftPwmPin: 14, leftDirPin: 27,\n    rightPwmPin: 12, rightDirPin: 26,\n  );\n\n  final radarServo = rover.pwmOutput(13, frequencyHz: 50);\n\n  rover.loop((ctx) {\n    ctx.setPwm(drive.leftPwmPin, 0.75);\n    ctx.setPwm(drive.rightPwmPin, 0.75);\n    ctx.delay(const Duration(seconds: 1));\n\n    ctx.setPwm(radarServo, 0.05); // Sweep radar left\n  });\n}","firmware/rover_controller.dart",b6,"Robotics Kinematics & Sonar Sweep",A.d([A.J(A.d([A.q(n,b5,!0),A.q(m,b7,!1),A.q(";",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(l,r,!1),A.q(k,p,!1),A.q(j,b9,!1)],c0)),A.J(A.d([A.q(i,b5,!1),A.q(a1,b9,!1),A.q(h,r,!0),A.q(a2,b9,!1),A.q(g,r,!1),A.q(a3,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(i,b5,!1),A.q(a4,b9,!1),A.q("sonar",p,!1),A.q(a5,b9,!1)],c0)),A.J(A.d([A.q(i,b5,!1),A.q("imu = rover.",b9,!1),A.q("imu",p,!1),A.q("(sdaPin: 21, sclPin: 22);",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(i,b5,!1),A.q(a6,b9,!1),A.q(a7,p,!1),A.q(e,b9,!1)],c0)),A.J(A.d([A.q(a8,b9,!1)],c0)),A.J(A.d([A.q(a9,b9,!1)],c0)),A.J(A.d([A.q(d,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(i,b5,!1),A.q("radarServo = rover.",b9,!1),A.q("pwmOutput",p,!1),A.q("(13, frequencyHz: 50);",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q("  rover.",b9,!1),A.q(c,p,!1),A.q(b,b9,!1)],c0)),A.J(A.d([A.q(a,b9,!1),A.q(b0,p,!1),A.q("(drive.leftPwmPin, 0.75);",b9,!1)],c0)),A.J(A.d([A.q(a,b9,!1),A.q(b0,p,!1),A.q("(drive.rightPwmPin, 0.75);",b9,!1)],c0)),A.J(A.d([A.q(a,b9,!1),A.q("delay",p,!1),A.q("(const Duration(seconds: 1));",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(a,b9,!1),A.q(b0,p,!1),A.q("(radarServo, 0.05);",b9,!1)],c0)),A.J(A.d([A.q(a0,b9,!1)],c0)),A.J(A.d([A.q("}",b9,!1)],c0))],o),"Differential Drive Active \u2022 6-Axis IMU \u2022 50Hz Servo Radar","autonomous_rover.dart")
b8=$.cP()
b8=A.oC(A.ar("#38bdf8"),"import 'package:flint_hardware/flint_hardware.dart';\n\nvoid main() {\n  final beacon = FirmwareBuilder('swarm_beacon', target: BoardTarget.nrf52840);\n\n  // Strongly-typed BLE Services\n  beacon.bluetooth(\n    deviceName: 'Flint-Swarm-01',\n    services: [\n      BleService.battery(initialLevelPercent: 95),\n      BleService.deviceInfo(manufacturer: 'Eulogia', model: 'Beacon-X1'),\n    ],\n  );\n\n  // Strongly-typed Swarm Domain & Radio Channel\n  beacon.meshSwarm(\n    swarm: SwarmId.robotics,\n    channel: WifiChannel.ch6,\n  );\n\n  beacon.loop((ctx) {\n    ctx.log('Broadcasting swarm state packet...');\n  });\n}","firmware/swarm_beacon.dart",b8,"Wireless Swarm Mesh & BLE Telemetry",A.d([A.J(A.d([A.q(n,b5,!0),A.q(m,b7,!1),A.q(";",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(l,r,!1),A.q(k,p,!1),A.q(j,b9,!1)],c0)),A.J(A.d([A.q(i,b5,!1),A.q("beacon = ",b9,!1),A.q(h,r,!0),A.q("('swarm_beacon', target: ",b9,!1),A.q(g,r,!1),A.q(".nrf52840);",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(b1,b9,!1),A.q("bluetooth",p,!1),A.q(e,b9,!1)],c0)),A.J(A.d([A.q("    deviceName: ",b9,!1),A.q("'Flint-Swarm-01'",b7,!1),A.q(",",b9,!1)],c0)),A.J(A.d([A.q("    services: [",b9,!1)],c0)),A.J(A.d([A.q(b2,b9,!1),A.q("battery",p,!1),A.q("(initialLevelPercent: 95),",b9,!1)],c0)),A.J(A.d([A.q(b2,b9,!1),A.q("deviceInfo",p,!1),A.q("(manufacturer: 'Eulogia', model: 'Beacon-X1'),",b7,!1)],c0)),A.J(A.d([A.q("    ],",b9,!1)],c0)),A.J(A.d([A.q(d,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(b1,b9,!1),A.q("meshSwarm",p,!1),A.q(e,b9,!1)],c0)),A.J(A.d([A.q("    swarm: ",b9,!1),A.q("SwarmId",r,!1),A.q(".robotics,",b9,!1)],c0)),A.J(A.d([A.q("    channel: ",b9,!1),A.q("WifiChannel",r,!1),A.q(".ch6,",b9,!1)],c0)),A.J(A.d([A.q(d,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(b1,b9,!1),A.q(c,p,!1),A.q(b,b9,!1)],c0)),A.J(A.d([A.q(a,b9,!1),A.q("log",p,!1),A.q("('Broadcasting swarm state packet...');",b7,!1)],c0)),A.J(A.d([A.q(a0,b9,!1)],c0)),A.J(A.d([A.q("}",b9,!1)],c0))],o),"Mesh Ch 6 Active \u2022 BLE Battery 95% \u2022 P2P Swarm Broadcasting","swarm_mesh.dart")
b3=$.q4()
return A.d([q,b6,b8,A.oC(A.ar("#10b981"),"import 'dart:io';\nimport 'package:flint_hardware/flint_hardware.dart';\n\nvoid main() async {\n  final rover = FirmwareBuilder('rover_explorer', target: BoardTarget.esp32);\n\n  final sonar = rover.sonar(triggerPin: 5, echoPin: 18);\n  final drive = rover.differentialDrive(\n    leftPwmPin: 14, leftDirPin: 27,\n    rightPwmPin: 12, rightDirPin: 26,\n  );\n\n  // 1-Click Multi-Language C99/ROS 2 & Wokwi Simulation\n  final outputDir = Directory('build/rover_demo');\n  await rover.exportBundle(outputDir);\n\n  print('Simulation bundle exported to ${outputDir.path}/');\n}","tool/export_simulation.dart",b3,"1-Click Wokwi & C99 Code Generation",A.d([A.J(A.d([A.q(n,b5,!0),A.q("'dart:io'",b7,!1),A.q(";",b9,!1)],c0)),A.J(A.d([A.q(n,b5,!0),A.q(m,b7,!1),A.q(";",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(l,r,!1),A.q(k,p,!1),A.q("() ",b9,!1),A.q("async",b5,!0),A.q(" {",b9,!1)],c0)),A.J(A.d([A.q(i,b5,!1),A.q(a1,b9,!1),A.q(h,r,!0),A.q(a2,b9,!1),A.q(g,r,!1),A.q(a3,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(i,b5,!1),A.q(a4,b9,!1),A.q("sonar",p,!1),A.q(a5,b9,!1)],c0)),A.J(A.d([A.q(i,b5,!1),A.q(a6,b9,!1),A.q(a7,p,!1),A.q(e,b9,!1)],c0)),A.J(A.d([A.q(a8,b9,!1)],c0)),A.J(A.d([A.q(a9,b9,!1)],c0)),A.J(A.d([A.q(d,b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q(i,b5,!1),A.q("outputDir = ",b9,!1),A.q("Directory",r,!1),A.q("('build/rover_demo');",b7,!1)],c0)),A.J(A.d([A.q("  await ",b5,!1),A.q("rover.",b9,!1),A.q("exportBundle",p,!1),A.q("(outputDir);",b9,!1)],c0)),A.J(A.d([],c0)),A.J(A.d([A.q("  print(",b9,!1),A.q("'Simulation bundle exported to ${outputDir.path}/'",b7,!1),A.q(");",b9,!1)],c0)),A.J(A.d([A.q("}",b9,!1)],c0))],o),"Wokwi JSON Generated \u2022 C99 / C++ / ROS 2 Code Exported","simulation_export.dart")],A.aE("a2<jl>"))})
s($,"AC","uS",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,160,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Ak","r1",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"AD","uR",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,140,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Ah","uE",()=>{var r=null,q=A.ew(40),p=A.b7(A.c8(56,189,248,0.3),"solid",1)
return A.a(r,r,r,r,r,A.a7("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,24,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"zZ","un",()=>{var r=null,q=A.ex(12,4),p=A.b7(A.c8(2,132,199,0.3),"solid",1)
return A.a(r,r,r,r,r,A.c8(2,132,199,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.hm,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,9999,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A_","uo",()=>{var r=null,q=A.ex(12,4),p=A.b7(A.c8(5,150,105,0.3),"solid",1)
return A.a(r,r,r,r,r,A.c8(5,150,105,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.hl,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,9999,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A0","up",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("accent",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A1","uq",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,11,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Af","uD",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,36,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dC(0,r,20),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Ax","uP",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,15,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dC(0,r,12),r,r,720,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A3","ur",()=>{var r=null,q=A.ew(20),p=A.b7(A.a7("line",r),"solid",1)
return A.a(r,r,r,r,r,A.a7("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A5","ut",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,16,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.ew(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A4","us",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,r,r,r,r,r,r,r,r,r,r,r,r,r,1.55,A.dC(0,r,8),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A7","uv",()=>{var r=null,q=A.ew(24),p=A.b7(A.a7("line",r),"solid",1)
return A.a(r,r,r,r,r,A.a7("panel",r),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dC(r,r,32),r,r,r,r,r,r,r,r,r,r,r,r,q,r,16,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Aa","uy",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,18,600,r,r,r,r,r,r,r,r,r,r,r,r,r,A.ew(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A6","uu",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("muted",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dC(0,r,8),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A8","uw",()=>{var r=null,q=A.ex(16,8),p=A.b7(A.c8(5,150,105,0.34),"solid",1)
return A.a(r,r,r,r,r,A.c8(5,150,105,0.08),r,p,r,r,r,r,r,r,r,r,r,r,B.ib,r,B.k,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.dC(r,r,16),r,r,r,r,r,r,r,r,r,r,r,r,q,r,8,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A9","ux",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("primary",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,13,600,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Al","r0",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("panelStrong",r),r,A.b7(A.a7("line",r),"solid",1),r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"AK","v1",()=>{var r=null,q=A.ex(16,0)
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.e,r,r,r,r,r,r,r,r,r,r,r,r,8,r,r,r,r,r,r,r,r,r,r,r,r,A.dC(0,r,16),r,r,1152,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Ay","uQ",()=>{var r=null,q=A.ex(16,12),p=A.b7(A.c8(52,211,153,0.4),"solid",1)
return A.a(r,r,r,r,r,A.c8(52,211,153,0.1),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Ab","uz",()=>{var r=null,q=A.ex(16,12),p=A.b7(A.c8(248,113,113,0.4),"solid",1)
return A.a(r,r,r,r,r,A.c8(248,113,113,0.1),r,p,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,12,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"A2","r_",()=>{var r=null
return A.a(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,r,r,r,r,r,r,r,r,r,r,r,14,r,r,r,r,r,r,r,r,r,r,r,r,r,r,A.ew(0),r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)})
s($,"Aq","uL",()=>{var r=null
return A.a(r,r,r,r,r,A.a7("bg",r),r,r,r,r,r,r,r,r,r,r,A.a7("text",r),r,r,r,B.d,r,r,r,B.u,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.ne,0,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,B.m,r,r,r,r)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({WebGL:J.dI,AbortPaymentEvent:J.c,AnimationEffectReadOnly:J.c,AnimationEffectTiming:J.c,AnimationEffectTimingReadOnly:J.c,AnimationEvent:J.c,AnimationPlaybackEvent:J.c,AnimationTimeline:J.c,AnimationWorkletGlobalScope:J.c,ApplicationCacheErrorEvent:J.c,AuthenticatorAssertionResponse:J.c,AuthenticatorAttestationResponse:J.c,AuthenticatorResponse:J.c,BackgroundFetchClickEvent:J.c,BackgroundFetchEvent:J.c,BackgroundFetchFailEvent:J.c,BackgroundFetchFetch:J.c,BackgroundFetchManager:J.c,BackgroundFetchSettledFetch:J.c,BackgroundFetchedEvent:J.c,BarProp:J.c,BarcodeDetector:J.c,BeforeInstallPromptEvent:J.c,BeforeUnloadEvent:J.c,BlobEvent:J.c,BluetoothRemoteGATTDescriptor:J.c,Body:J.c,BudgetState:J.c,CacheStorage:J.c,CanMakePaymentEvent:J.c,CanvasGradient:J.c,CanvasPattern:J.c,CanvasRenderingContext2D:J.c,Client:J.c,Clients:J.c,ClipboardEvent:J.c,CloseEvent:J.c,CompositionEvent:J.c,CookieStore:J.c,Coordinates:J.c,Credential:J.c,CredentialUserData:J.c,CredentialsContainer:J.c,Crypto:J.c,CryptoKey:J.c,CSS:J.c,CSSVariableReferenceValue:J.c,CustomElementRegistry:J.c,CustomEvent:J.c,DataTransfer:J.c,DataTransferItem:J.c,DeprecatedStorageInfo:J.c,DeprecatedStorageQuota:J.c,DeprecationReport:J.c,DetectedBarcode:J.c,DetectedFace:J.c,DetectedText:J.c,DeviceAcceleration:J.c,DeviceMotionEvent:J.c,DeviceOrientationEvent:J.c,DeviceRotationRate:J.c,DirectoryEntry:J.c,webkitFileSystemDirectoryEntry:J.c,FileSystemDirectoryEntry:J.c,DirectoryReader:J.c,WebKitDirectoryReader:J.c,webkitFileSystemDirectoryReader:J.c,FileSystemDirectoryReader:J.c,DocumentOrShadowRoot:J.c,DocumentTimeline:J.c,DOMError:J.c,DOMImplementation:J.c,Iterator:J.c,DOMMatrix:J.c,DOMMatrixReadOnly:J.c,DOMParser:J.c,DOMPoint:J.c,DOMPointReadOnly:J.c,DOMQuad:J.c,DOMStringMap:J.c,Entry:J.c,webkitFileSystemEntry:J.c,FileSystemEntry:J.c,ErrorEvent:J.c,Event:J.c,InputEvent:J.c,SubmitEvent:J.c,ExtendableEvent:J.c,ExtendableMessageEvent:J.c,External:J.c,FaceDetector:J.c,FederatedCredential:J.c,FetchEvent:J.c,FileEntry:J.c,webkitFileSystemFileEntry:J.c,FileSystemFileEntry:J.c,DOMFileSystem:J.c,WebKitFileSystem:J.c,webkitFileSystem:J.c,FileSystem:J.c,FocusEvent:J.c,FontFace:J.c,FontFaceSetLoadEvent:J.c,FontFaceSource:J.c,ForeignFetchEvent:J.c,FormData:J.c,GamepadButton:J.c,GamepadEvent:J.c,GamepadPose:J.c,Geolocation:J.c,Position:J.c,GeolocationPosition:J.c,HashChangeEvent:J.c,Headers:J.c,HTMLHyperlinkElementUtils:J.c,IdleDeadline:J.c,ImageBitmap:J.c,ImageBitmapRenderingContext:J.c,ImageCapture:J.c,ImageData:J.c,InputDeviceCapabilities:J.c,InstallEvent:J.c,IntersectionObserver:J.c,IntersectionObserverEntry:J.c,InterventionReport:J.c,KeyboardEvent:J.c,KeyframeEffect:J.c,KeyframeEffectReadOnly:J.c,MediaCapabilities:J.c,MediaCapabilitiesInfo:J.c,MediaDeviceInfo:J.c,MediaEncryptedEvent:J.c,MediaError:J.c,MediaKeyMessageEvent:J.c,MediaKeyStatusMap:J.c,MediaKeySystemAccess:J.c,MediaKeys:J.c,MediaKeysPolicy:J.c,MediaMetadata:J.c,MediaQueryListEvent:J.c,MediaSession:J.c,MediaSettingsRange:J.c,MediaStreamEvent:J.c,MediaStreamTrackEvent:J.c,MemoryInfo:J.c,MessageChannel:J.c,MessageEvent:J.c,Metadata:J.c,MIDIConnectionEvent:J.c,MIDIMessageEvent:J.c,MouseEvent:J.c,DragEvent:J.c,MutationEvent:J.c,MutationObserver:J.c,WebKitMutationObserver:J.c,MutationRecord:J.c,NavigationPreloadManager:J.c,Navigator:J.c,NavigatorAutomationInformation:J.c,NavigatorConcurrentHardware:J.c,NavigatorCookies:J.c,NavigatorUserMediaError:J.c,NodeFilter:J.c,NodeIterator:J.c,NonDocumentTypeChildNode:J.c,NonElementParentNode:J.c,NoncedElement:J.c,NotificationEvent:J.c,OffscreenCanvasRenderingContext2D:J.c,OverconstrainedError:J.c,PageTransitionEvent:J.c,PaintRenderingContext2D:J.c,PaintSize:J.c,PaintWorkletGlobalScope:J.c,PasswordCredential:J.c,Path2D:J.c,PaymentAddress:J.c,PaymentInstruments:J.c,PaymentManager:J.c,PaymentRequestEvent:J.c,PaymentRequestUpdateEvent:J.c,PaymentResponse:J.c,PerformanceEntry:J.c,PerformanceLongTaskTiming:J.c,PerformanceMark:J.c,PerformanceMeasure:J.c,PerformanceNavigation:J.c,PerformanceNavigationTiming:J.c,PerformanceObserver:J.c,PerformanceObserverEntryList:J.c,PerformancePaintTiming:J.c,PerformanceResourceTiming:J.c,PerformanceServerTiming:J.c,PerformanceTiming:J.c,Permissions:J.c,PhotoCapabilities:J.c,PointerEvent:J.c,PopStateEvent:J.c,PositionError:J.c,GeolocationPositionError:J.c,Presentation:J.c,PresentationConnectionAvailableEvent:J.c,PresentationConnectionCloseEvent:J.c,PresentationReceiver:J.c,ProgressEvent:J.c,PromiseRejectionEvent:J.c,PublicKeyCredential:J.c,PushEvent:J.c,PushManager:J.c,PushMessageData:J.c,PushSubscription:J.c,PushSubscriptionOptions:J.c,Range:J.c,RelatedApplication:J.c,ReportBody:J.c,ReportingObserver:J.c,ResizeObserver:J.c,ResizeObserverEntry:J.c,RTCCertificate:J.c,RTCDataChannelEvent:J.c,RTCDTMFToneChangeEvent:J.c,RTCIceCandidate:J.c,mozRTCIceCandidate:J.c,RTCLegacyStatsReport:J.c,RTCPeerConnectionIceEvent:J.c,RTCRtpContributingSource:J.c,RTCRtpReceiver:J.c,RTCRtpSender:J.c,RTCSessionDescription:J.c,mozRTCSessionDescription:J.c,RTCStatsResponse:J.c,RTCTrackEvent:J.c,Screen:J.c,ScrollState:J.c,ScrollTimeline:J.c,SecurityPolicyViolationEvent:J.c,Selection:J.c,SensorErrorEvent:J.c,SpeechRecognitionAlternative:J.c,SpeechRecognitionError:J.c,SpeechRecognitionEvent:J.c,SpeechSynthesisEvent:J.c,SpeechSynthesisVoice:J.c,StaticRange:J.c,StorageEvent:J.c,StorageManager:J.c,StyleMedia:J.c,StylePropertyMap:J.c,StylePropertyMapReadonly:J.c,SyncEvent:J.c,SyncManager:J.c,TaskAttributionTiming:J.c,TextDetector:J.c,TextEvent:J.c,TextMetrics:J.c,TouchEvent:J.c,TrackDefault:J.c,TrackEvent:J.c,TransitionEvent:J.c,WebKitTransitionEvent:J.c,TreeWalker:J.c,TrustedHTML:J.c,TrustedScriptURL:J.c,TrustedURL:J.c,UIEvent:J.c,UnderlyingSourceBase:J.c,URLSearchParams:J.c,VRCoordinateSystem:J.c,VRDeviceEvent:J.c,VRDisplayCapabilities:J.c,VRDisplayEvent:J.c,VREyeParameters:J.c,VRFrameData:J.c,VRFrameOfReference:J.c,VRPose:J.c,VRSessionEvent:J.c,VRStageBounds:J.c,VRStageBoundsPoint:J.c,VRStageParameters:J.c,ValidityState:J.c,VideoPlaybackQuality:J.c,VideoTrack:J.c,VTTRegion:J.c,WheelEvent:J.c,WindowClient:J.c,WorkletAnimation:J.c,WorkletGlobalScope:J.c,XPathEvaluator:J.c,XPathExpression:J.c,XPathNSResolver:J.c,XPathResult:J.c,XMLSerializer:J.c,XSLTProcessor:J.c,Bluetooth:J.c,BluetoothCharacteristicProperties:J.c,BluetoothRemoteGATTServer:J.c,BluetoothRemoteGATTService:J.c,BluetoothUUID:J.c,BudgetService:J.c,Cache:J.c,DOMFileSystemSync:J.c,DirectoryEntrySync:J.c,DirectoryReaderSync:J.c,EntrySync:J.c,FileEntrySync:J.c,FileReaderSync:J.c,FileWriterSync:J.c,HTMLAllCollection:J.c,Mojo:J.c,MojoHandle:J.c,MojoInterfaceRequestEvent:J.c,MojoWatcher:J.c,NFC:J.c,PagePopupController:J.c,Report:J.c,Request:J.c,ResourceProgressEvent:J.c,Response:J.c,SubtleCrypto:J.c,USBAlternateInterface:J.c,USBConfiguration:J.c,USBConnectionEvent:J.c,USBDevice:J.c,USBEndpoint:J.c,USBInTransferResult:J.c,USBInterface:J.c,USBIsochronousInTransferPacket:J.c,USBIsochronousInTransferResult:J.c,USBIsochronousOutTransferPacket:J.c,USBIsochronousOutTransferResult:J.c,USBOutTransferResult:J.c,WorkerLocation:J.c,WorkerNavigator:J.c,Worklet:J.c,IDBCursor:J.c,IDBCursorWithValue:J.c,IDBFactory:J.c,IDBIndex:J.c,IDBKeyRange:J.c,IDBObjectStore:J.c,IDBObservation:J.c,IDBObserver:J.c,IDBObserverChanges:J.c,IDBVersionChangeEvent:J.c,SVGAngle:J.c,SVGAnimatedAngle:J.c,SVGAnimatedBoolean:J.c,SVGAnimatedEnumeration:J.c,SVGAnimatedInteger:J.c,SVGAnimatedLength:J.c,SVGAnimatedLengthList:J.c,SVGAnimatedNumber:J.c,SVGAnimatedNumberList:J.c,SVGAnimatedPreserveAspectRatio:J.c,SVGAnimatedRect:J.c,SVGAnimatedString:J.c,SVGAnimatedTransformList:J.c,SVGMatrix:J.c,SVGPoint:J.c,SVGPreserveAspectRatio:J.c,SVGRect:J.c,SVGUnitTypes:J.c,AudioListener:J.c,AudioParam:J.c,AudioProcessingEvent:J.c,AudioTrack:J.c,AudioWorkletGlobalScope:J.c,AudioWorkletProcessor:J.c,OfflineAudioCompletionEvent:J.c,PeriodicWave:J.c,WebGLActiveInfo:J.c,ANGLEInstancedArrays:J.c,ANGLE_instanced_arrays:J.c,WebGLBuffer:J.c,WebGLCanvas:J.c,WebGLColorBufferFloat:J.c,WebGLCompressedTextureASTC:J.c,WebGLCompressedTextureATC:J.c,WEBGL_compressed_texture_atc:J.c,WebGLCompressedTextureETC1:J.c,WEBGL_compressed_texture_etc1:J.c,WebGLCompressedTextureETC:J.c,WebGLCompressedTexturePVRTC:J.c,WEBGL_compressed_texture_pvrtc:J.c,WebGLCompressedTextureS3TC:J.c,WEBGL_compressed_texture_s3tc:J.c,WebGLCompressedTextureS3TCsRGB:J.c,WebGLContextEvent:J.c,WebGLDebugRendererInfo:J.c,WEBGL_debug_renderer_info:J.c,WebGLDebugShaders:J.c,WEBGL_debug_shaders:J.c,WebGLDepthTexture:J.c,WEBGL_depth_texture:J.c,WebGLDrawBuffers:J.c,WEBGL_draw_buffers:J.c,EXTsRGB:J.c,EXT_sRGB:J.c,EXTBlendMinMax:J.c,EXT_blend_minmax:J.c,EXTColorBufferFloat:J.c,EXTColorBufferHalfFloat:J.c,EXTDisjointTimerQuery:J.c,EXTDisjointTimerQueryWebGL2:J.c,EXTFragDepth:J.c,EXT_frag_depth:J.c,EXTShaderTextureLOD:J.c,EXT_shader_texture_lod:J.c,EXTTextureFilterAnisotropic:J.c,EXT_texture_filter_anisotropic:J.c,WebGLFramebuffer:J.c,WebGLGetBufferSubDataAsync:J.c,WebGLLoseContext:J.c,WebGLExtensionLoseContext:J.c,WEBGL_lose_context:J.c,OESElementIndexUint:J.c,OES_element_index_uint:J.c,OESStandardDerivatives:J.c,OES_standard_derivatives:J.c,OESTextureFloat:J.c,OES_texture_float:J.c,OESTextureFloatLinear:J.c,OES_texture_float_linear:J.c,OESTextureHalfFloat:J.c,OES_texture_half_float:J.c,OESTextureHalfFloatLinear:J.c,OES_texture_half_float_linear:J.c,OESVertexArrayObject:J.c,OES_vertex_array_object:J.c,WebGLProgram:J.c,WebGLQuery:J.c,WebGLRenderbuffer:J.c,WebGLRenderingContext:J.c,WebGL2RenderingContext:J.c,WebGLSampler:J.c,WebGLShader:J.c,WebGLShaderPrecisionFormat:J.c,WebGLSync:J.c,WebGLTexture:J.c,WebGLTimerQueryEXT:J.c,WebGLTransformFeedback:J.c,WebGLUniformLocation:J.c,WebGLVertexArrayObject:J.c,WebGLVertexArrayObjectOES:J.c,WebGL2RenderingContextBase:J.c,ArrayBuffer:A.dS,SharedArrayBuffer:A.dS,ArrayBufferView:A.eU,DataView:A.i4,Float32Array:A.i5,Float64Array:A.i6,Int16Array:A.i7,Int32Array:A.i8,Int8Array:A.i9,Uint16Array:A.ia,Uint32Array:A.ib,Uint8ClampedArray:A.eV,CanvasPixelArray:A.eV,Uint8Array:A.eW,HTMLAudioElement:A.N,HTMLBRElement:A.N,HTMLBaseElement:A.N,HTMLBodyElement:A.N,HTMLButtonElement:A.N,HTMLCanvasElement:A.N,HTMLContentElement:A.N,HTMLDListElement:A.N,HTMLDataElement:A.N,HTMLDataListElement:A.N,HTMLDetailsElement:A.N,HTMLDialogElement:A.N,HTMLDivElement:A.N,HTMLEmbedElement:A.N,HTMLFieldSetElement:A.N,HTMLHRElement:A.N,HTMLHeadElement:A.N,HTMLHeadingElement:A.N,HTMLHtmlElement:A.N,HTMLIFrameElement:A.N,HTMLImageElement:A.N,HTMLInputElement:A.N,HTMLLIElement:A.N,HTMLLabelElement:A.N,HTMLLegendElement:A.N,HTMLLinkElement:A.N,HTMLMapElement:A.N,HTMLMediaElement:A.N,HTMLMenuElement:A.N,HTMLMetaElement:A.N,HTMLMeterElement:A.N,HTMLModElement:A.N,HTMLOListElement:A.N,HTMLObjectElement:A.N,HTMLOptGroupElement:A.N,HTMLOptionElement:A.N,HTMLOutputElement:A.N,HTMLParagraphElement:A.N,HTMLParamElement:A.N,HTMLPictureElement:A.N,HTMLPreElement:A.N,HTMLProgressElement:A.N,HTMLQuoteElement:A.N,HTMLScriptElement:A.N,HTMLShadowElement:A.N,HTMLSlotElement:A.N,HTMLSourceElement:A.N,HTMLSpanElement:A.N,HTMLStyleElement:A.N,HTMLTableCaptionElement:A.N,HTMLTableCellElement:A.N,HTMLTableDataCellElement:A.N,HTMLTableHeaderCellElement:A.N,HTMLTableColElement:A.N,HTMLTableElement:A.N,HTMLTableRowElement:A.N,HTMLTableSectionElement:A.N,HTMLTemplateElement:A.N,HTMLTimeElement:A.N,HTMLTitleElement:A.N,HTMLTrackElement:A.N,HTMLUListElement:A.N,HTMLUnknownElement:A.N,HTMLVideoElement:A.N,HTMLDirectoryElement:A.N,HTMLFontElement:A.N,HTMLFrameElement:A.N,HTMLFrameSetElement:A.N,HTMLMarqueeElement:A.N,HTMLElement:A.N,AccessibleNodeList:A.fZ,HTMLAnchorElement:A.h_,HTMLAreaElement:A.h0,Blob:A.eo,CDATASection:A.c7,CharacterData:A.c7,Comment:A.c7,ProcessingInstruction:A.c7,Text:A.c7,CSSPerspective:A.hh,CSSCharsetRule:A.am,CSSConditionRule:A.am,CSSFontFaceRule:A.am,CSSGroupingRule:A.am,CSSImportRule:A.am,CSSKeyframeRule:A.am,MozCSSKeyframeRule:A.am,WebKitCSSKeyframeRule:A.am,CSSKeyframesRule:A.am,MozCSSKeyframesRule:A.am,WebKitCSSKeyframesRule:A.am,CSSMediaRule:A.am,CSSNamespaceRule:A.am,CSSPageRule:A.am,CSSRule:A.am,CSSStyleRule:A.am,CSSSupportsRule:A.am,CSSViewportRule:A.am,CSSStyleDeclaration:A.dB,MSStyleCSSProperties:A.dB,CSS2Properties:A.dB,CSSImageValue:A.bc,CSSKeywordValue:A.bc,CSSNumericValue:A.bc,CSSPositionValue:A.bc,CSSResourceValue:A.bc,CSSUnitValue:A.bc,CSSURLImageValue:A.bc,CSSStyleValue:A.bc,CSSMatrixComponent:A.bT,CSSRotation:A.bT,CSSScale:A.bT,CSSSkew:A.bT,CSSTranslation:A.bT,CSSTransformComponent:A.bT,CSSTransformValue:A.hi,CSSUnparsedValue:A.hj,DataTransferItemList:A.hm,DOMException:A.ho,ClientRectList:A.eu,DOMRectList:A.eu,DOMRectReadOnly:A.ev,DOMStringList:A.hp,DOMTokenList:A.hq,MathMLElement:A.L,SVGAElement:A.L,SVGAnimateElement:A.L,SVGAnimateMotionElement:A.L,SVGAnimateTransformElement:A.L,SVGAnimationElement:A.L,SVGCircleElement:A.L,SVGClipPathElement:A.L,SVGDefsElement:A.L,SVGDescElement:A.L,SVGDiscardElement:A.L,SVGEllipseElement:A.L,SVGFEBlendElement:A.L,SVGFEColorMatrixElement:A.L,SVGFEComponentTransferElement:A.L,SVGFECompositeElement:A.L,SVGFEConvolveMatrixElement:A.L,SVGFEDiffuseLightingElement:A.L,SVGFEDisplacementMapElement:A.L,SVGFEDistantLightElement:A.L,SVGFEFloodElement:A.L,SVGFEFuncAElement:A.L,SVGFEFuncBElement:A.L,SVGFEFuncGElement:A.L,SVGFEFuncRElement:A.L,SVGFEGaussianBlurElement:A.L,SVGFEImageElement:A.L,SVGFEMergeElement:A.L,SVGFEMergeNodeElement:A.L,SVGFEMorphologyElement:A.L,SVGFEOffsetElement:A.L,SVGFEPointLightElement:A.L,SVGFESpecularLightingElement:A.L,SVGFESpotLightElement:A.L,SVGFETileElement:A.L,SVGFETurbulenceElement:A.L,SVGFilterElement:A.L,SVGForeignObjectElement:A.L,SVGGElement:A.L,SVGGeometryElement:A.L,SVGGraphicsElement:A.L,SVGImageElement:A.L,SVGLineElement:A.L,SVGLinearGradientElement:A.L,SVGMarkerElement:A.L,SVGMaskElement:A.L,SVGMetadataElement:A.L,SVGPathElement:A.L,SVGPatternElement:A.L,SVGPolygonElement:A.L,SVGPolylineElement:A.L,SVGRadialGradientElement:A.L,SVGRectElement:A.L,SVGScriptElement:A.L,SVGSetElement:A.L,SVGStopElement:A.L,SVGStyleElement:A.L,SVGElement:A.L,SVGSVGElement:A.L,SVGSwitchElement:A.L,SVGSymbolElement:A.L,SVGTSpanElement:A.L,SVGTextContentElement:A.L,SVGTextElement:A.L,SVGTextPathElement:A.L,SVGTextPositioningElement:A.L,SVGTitleElement:A.L,SVGUseElement:A.L,SVGViewElement:A.L,SVGGradientElement:A.L,SVGComponentTransferFunctionElement:A.L,SVGFEDropShadowElement:A.L,SVGMPathElement:A.L,Element:A.L,AbsoluteOrientationSensor:A.x,Accelerometer:A.x,AccessibleNode:A.x,AmbientLightSensor:A.x,Animation:A.x,ApplicationCache:A.x,DOMApplicationCache:A.x,OfflineResourceList:A.x,BackgroundFetchRegistration:A.x,BatteryManager:A.x,BroadcastChannel:A.x,CanvasCaptureMediaStreamTrack:A.x,DedicatedWorkerGlobalScope:A.x,EventSource:A.x,FileReader:A.x,FontFaceSet:A.x,Gyroscope:A.x,XMLHttpRequest:A.x,XMLHttpRequestEventTarget:A.x,XMLHttpRequestUpload:A.x,LinearAccelerationSensor:A.x,Magnetometer:A.x,MediaDevices:A.x,MediaKeySession:A.x,MediaQueryList:A.x,MediaRecorder:A.x,MediaSource:A.x,MediaStream:A.x,MediaStreamTrack:A.x,MessagePort:A.x,MIDIAccess:A.x,MIDIInput:A.x,MIDIOutput:A.x,MIDIPort:A.x,NetworkInformation:A.x,Notification:A.x,OffscreenCanvas:A.x,OrientationSensor:A.x,PaymentRequest:A.x,Performance:A.x,PermissionStatus:A.x,PresentationAvailability:A.x,PresentationConnection:A.x,PresentationConnectionList:A.x,PresentationRequest:A.x,RelativeOrientationSensor:A.x,RemotePlayback:A.x,RTCDataChannel:A.x,DataChannel:A.x,RTCDTMFSender:A.x,RTCPeerConnection:A.x,webkitRTCPeerConnection:A.x,mozRTCPeerConnection:A.x,ScreenOrientation:A.x,Sensor:A.x,ServiceWorker:A.x,ServiceWorkerContainer:A.x,ServiceWorkerGlobalScope:A.x,ServiceWorkerRegistration:A.x,SharedWorker:A.x,SharedWorkerGlobalScope:A.x,SpeechRecognition:A.x,webkitSpeechRecognition:A.x,SpeechSynthesis:A.x,SpeechSynthesisUtterance:A.x,VR:A.x,VRDevice:A.x,VRDisplay:A.x,VRSession:A.x,VisualViewport:A.x,WebSocket:A.x,Window:A.x,DOMWindow:A.x,Worker:A.x,WorkerGlobalScope:A.x,WorkerPerformance:A.x,BluetoothDevice:A.x,BluetoothRemoteGATTCharacteristic:A.x,Clipboard:A.x,MojoInterfaceInterceptor:A.x,USB:A.x,IDBDatabase:A.x,IDBOpenDBRequest:A.x,IDBVersionChangeRequest:A.x,IDBRequest:A.x,IDBTransaction:A.x,AnalyserNode:A.x,RealtimeAnalyserNode:A.x,AudioBufferSourceNode:A.x,AudioDestinationNode:A.x,AudioNode:A.x,AudioScheduledSourceNode:A.x,AudioWorkletNode:A.x,BiquadFilterNode:A.x,ChannelMergerNode:A.x,AudioChannelMerger:A.x,ChannelSplitterNode:A.x,AudioChannelSplitter:A.x,ConstantSourceNode:A.x,ConvolverNode:A.x,DelayNode:A.x,DynamicsCompressorNode:A.x,GainNode:A.x,AudioGainNode:A.x,IIRFilterNode:A.x,MediaElementAudioSourceNode:A.x,MediaStreamAudioDestinationNode:A.x,MediaStreamAudioSourceNode:A.x,OscillatorNode:A.x,Oscillator:A.x,PannerNode:A.x,AudioPannerNode:A.x,webkitAudioPannerNode:A.x,ScriptProcessorNode:A.x,JavaScriptAudioNode:A.x,StereoPannerNode:A.x,WaveShaperNode:A.x,EventTarget:A.x,File:A.bn,FileList:A.ht,FileWriter:A.hu,HTMLFormElement:A.hG,Gamepad:A.bp,History:A.hL,HTMLCollection:A.d0,HTMLFormControlsCollection:A.d0,HTMLOptionsCollection:A.d0,Location:A.i_,MediaList:A.i0,MIDIInputMap:A.i1,MIDIOutputMap:A.i2,MimeType:A.br,MimeTypeArray:A.i3,Document:A.a5,DocumentFragment:A.a5,HTMLDocument:A.a5,ShadowRoot:A.a5,XMLDocument:A.a5,Attr:A.a5,DocumentType:A.a5,Node:A.a5,NodeList:A.eX,RadioNodeList:A.eX,Plugin:A.bs,PluginArray:A.ik,RTCStatsReport:A.iq,HTMLSelectElement:A.is,SourceBuffer:A.bt,SourceBufferList:A.it,SpeechGrammar:A.bu,SpeechGrammarList:A.iu,SpeechRecognitionResult:A.bv,Storage:A.iy,CSSStyleSheet:A.b8,StyleSheet:A.b8,HTMLTextAreaElement:A.f9,TextTrack:A.bw,TextTrackCue:A.b9,VTTCue:A.b9,TextTrackCueList:A.iI,TextTrackList:A.iJ,TimeRanges:A.iL,Touch:A.bx,TouchList:A.iN,TrackDefaultList:A.iO,URL:A.iW,VideoTrackList:A.iY,CSSRuleList:A.j7,ClientRect:A.ff,DOMRect:A.ff,GamepadList:A.jk,NamedNodeMap:A.fs,MozNamedAttrMap:A.fs,SpeechRecognitionResultList:A.jK,StyleSheetList:A.jS,SVGLength:A.bD,SVGLengthList:A.hW,SVGNumber:A.bG,SVGNumberList:A.id,SVGPointList:A.il,SVGStringList:A.iA,SVGTransform:A.bI,SVGTransformList:A.iP,AudioBuffer:A.h3,AudioParamMap:A.h4,AudioTrackList:A.h5,AudioContext:A.cy,webkitAudioContext:A.cy,BaseAudioContext:A.cy,OfflineAudioContext:A.ie})
hunkHelpers.setOrUpdateLeafTags({WebGL:true,AbortPaymentEvent:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationEvent:true,AnimationPlaybackEvent:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,ApplicationCacheErrorEvent:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BackgroundFetchedEvent:true,BarProp:true,BarcodeDetector:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanMakePaymentEvent:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,webkitFileSystemDirectoryEntry:true,FileSystemDirectoryEntry:true,DirectoryReader:true,WebKitDirectoryReader:true,webkitFileSystemDirectoryReader:true,FileSystemDirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,webkitFileSystemEntry:true,FileSystemEntry:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,External:true,FaceDetector:true,FederatedCredential:true,FetchEvent:true,FileEntry:true,webkitFileSystemFileEntry:true,FileSystemFileEntry:true,DOMFileSystem:true,WebKitFileSystem:true,webkitFileSystem:true,FileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FontFaceSource:true,ForeignFetchEvent:true,FormData:true,GamepadButton:true,GamepadEvent:true,GamepadPose:true,Geolocation:true,Position:true,GeolocationPosition:true,HashChangeEvent:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyboardEvent:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaSettingsRange:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,NotificationEvent:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PageTransitionEvent:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PointerEvent:true,PopStateEvent:true,PositionError:true,GeolocationPositionError:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PresentationReceiver:true,ProgressEvent:true,PromiseRejectionEvent:true,PublicKeyCredential:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCPeerConnectionIceEvent:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,RTCTrackEvent:true,Screen:true,ScrollState:true,ScrollTimeline:true,SecurityPolicyViolationEvent:true,Selection:true,SensorErrorEvent:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StaticRange:true,StorageEvent:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncEvent:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextEvent:true,TextMetrics:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDeviceEvent:true,VRDisplayCapabilities:true,VRDisplayEvent:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRSessionEvent:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoInterfaceRequestEvent:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioProcessingEvent:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,MathMLElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,webkitSpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Window:true,DOMWindow:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTextAreaElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,VideoTrackList:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true})
A.b1.$nativeSuperclassTag="ArrayBufferView"
A.ft.$nativeSuperclassTag="ArrayBufferView"
A.fu.$nativeSuperclassTag="ArrayBufferView"
A.eT.$nativeSuperclassTag="ArrayBufferView"
A.fv.$nativeSuperclassTag="ArrayBufferView"
A.fw.$nativeSuperclassTag="ArrayBufferView"
A.bF.$nativeSuperclassTag="ArrayBufferView"
A.fy.$nativeSuperclassTag="EventTarget"
A.fz.$nativeSuperclassTag="EventTarget"
A.fC.$nativeSuperclassTag="EventTarget"
A.fD.$nativeSuperclassTag="EventTarget"})()
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
var s=A.yh
if(typeof dartMainRunner==="function"){dartMainRunner(s,[])}else{s([])}})})()
//# sourceMappingURL=main.dart.js.map
