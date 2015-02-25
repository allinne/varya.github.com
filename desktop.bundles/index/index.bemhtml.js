(function(g) {
  var __bem_xjst = (function(exports) {
     var __$ref={};function apply(ctx){try{return applyc(ctx||this,__$ref)}catch(e){(ctx||this).xjstContext=e;throw e}}exports.apply=apply;function applyc(__$ctx,__$ref){var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var cache;var __$r=__$g6(__$ctx,__$ref);if(__$r!==__$ref)return __$r}[function(exports,context){var BEM_={},toString=Object.prototype.toString,isArray=Array.isArray||function(obj){return toString.call(obj)==="[object Array]"},SHORT_TAGS={area:1,base:1,br:1,col:1,command:1,embed:1,hr:1,img:1,input:1,keygen:1,link:1,meta:1,param:1,source:1,wbr:1};!function(BEM,undefined){var MOD_DELIM="_",ELEM_DELIM="__",NAME_PATTERN="[a-zA-Z0-9-]+";function buildModPostfix(modName,modVal){var res=MOD_DELIM+modName;if(modVal!==true)res+=MOD_DELIM+modVal;return res}function buildBlockClass(name,modName,modVal){var res=name;if(modVal)res+=buildModPostfix(modName,modVal);return res}function buildElemClass(block,name,modName,modVal){var res=buildBlockClass(block)+ELEM_DELIM+name;if(modVal)res+=buildModPostfix(modName,modVal);return res}BEM.INTERNAL={NAME_PATTERN:NAME_PATTERN,MOD_DELIM:MOD_DELIM,ELEM_DELIM:ELEM_DELIM,buildModPostfix:buildModPostfix,buildClass:function(block,elem,modName,modVal){var typeOfModName=typeof modName;if(typeOfModName==="string"||typeOfModName==="boolean"){var typeOfModVal=typeof modVal;if(typeOfModVal!=="string"&&typeOfModVal!=="boolean"){modVal=modName;modName=elem;elem=undefined}}else if(typeOfModName!=="undefined"){modName=undefined}else if(elem&&typeof elem!=="string"){elem=undefined}if(!(elem||modName)){return block}if(elem)return buildElemClass(block,elem,modName,modVal);else return buildBlockClass(block,modName,modVal)},buildModsClasses:function(block,elem,mods){var res="";if(mods){var modName;for(modName in mods){if(!mods.hasOwnProperty(modName))continue;var modVal=mods[modName];if(!modVal&&modVal!==0)continue;typeof modVal!=="boolean"&&(modVal+="");res+=" "+(elem?buildElemClass(block,elem,modName,modVal):buildBlockClass(block,modName,modVal))}}return res},buildClasses:function(block,elem,mods){var res="";if(elem)res+=buildElemClass(block,elem);else res+=buildBlockClass(block);res+=this.buildModsClasses(block,elem,mods);return res}}}(BEM_);var ts={'"':"&quot;","&":"&amp;","<":"&lt;",">":"&gt;"},f=function(t){return ts[t]||t};var buildEscape=function(r){r=new RegExp(r,"g");return function(s){return(""+s).replace(r,f)}};function BEMContext(context,apply_){this.ctx=typeof context===null?"":context;this.apply=apply_;this._str="";var self=this;this._buf={push:function(){var chunks=Array.prototype.slice.call(arguments).join("");self._str+=chunks},join:function(){return this._str}};this._=this;this._start=true;this._mode="";this._listLength=0;this._notNewList=false;this.position=0;this.block=undefined;this.elem=undefined;this.mods=undefined;this.elemMods=undefined}context.BEMContext=BEMContext;BEMContext.prototype.isArray=isArray;BEMContext.prototype.isSimple=function isSimple(obj){if(!obj||obj===true)return true;var t=typeof obj;return t==="string"||t==="number"};BEMContext.prototype.isShortTag=function isShortTag(t){return SHORT_TAGS.hasOwnProperty(t)};BEMContext.prototype.extend=function extend(o1,o2){if(!o1||!o2)return o1||o2;var res={},n;for(n in o1)o1.hasOwnProperty(n)&&(res[n]=o1[n]);for(n in o2)o2.hasOwnProperty(n)&&(res[n]=o2[n]);return res};var cnt=0,id=+new Date,expando="__"+id,get=function(){return"uniq"+id+ ++cnt};BEMContext.prototype.identify=function(obj,onlyGet){if(!obj)return get();if(onlyGet||obj[expando]){return obj[expando]}else{return obj[expando]=get()}};BEMContext.prototype.xmlEscape=buildEscape("[&<>]");BEMContext.prototype.attrEscape=buildEscape('["&<>]');BEMContext.prototype.BEM=BEM_;BEMContext.prototype.isFirst=function isFirst(){return this.position===1};BEMContext.prototype.isLast=function isLast(){return this.position===this._listLength};BEMContext.prototype.generateId=function generateId(){return this.identify(this.ctx)};var oldApply=exports.apply;exports.apply=BEMContext.apply=function _apply(context){var ctx=new BEMContext(context||this,oldApply);ctx.apply();return ctx._str};BEMContext.prototype.reapply=BEMContext.apply}].forEach(function(fn){fn(exports,this)},{recordExtensions:function(ctx){ctx._mode=undefined;ctx.__$anflg4=false;ctx.ctx=undefined;ctx.__$a=0;ctx.__$anflg3=false;ctx.__$anflg2=false;ctx.__$anflg1=false;ctx._buf=undefined;ctx._ieCommented=undefined;ctx._str=undefined;ctx.block=undefined;ctx.elem=undefined;ctx._notNewList=undefined;ctx.position=undefined;ctx._listLength=undefined;ctx._currBlock=undefined;ctx.mods=undefined;ctx.elemMods=undefined}});function __$b58(__$ctx,__$ref){__$ctx.__$a=0;{var _$tctx__$35=__$ctx.ctx,_$tprops__$36=["title","target"],_$tp__$37=typeof _$tctx__$35.url,_$ta__$38={href:_$tp__$37==="undefined"||_$tp__$37==="string"?_$tctx__$35.url:(_$tp__$37=[],function(){var __$r__$39;var __$l0__$40=__$ctx._buf;__$ctx._buf=_$tp__$37;var __$l1__$41=__$ctx._mode;__$ctx._mode="";var __$l2__$42=__$ctx.ctx;__$ctx.ctx=_$tctx__$35.url;__$r__$39=applyc(__$ctx,__$ref);__$ctx._buf=__$l0__$40;__$ctx._mode=__$l1__$41;__$ctx.ctx=__$l2__$42;return __$r__$39}(),_$tp__$37.join(""))};while(_$tp__$37=_$tprops__$36.pop()){_$tctx__$35[_$tp__$37]&&(_$ta__$38[_$tp__$37]=_$tctx__$35[_$tp__$37])}return _$ta__$38}return}function __$b59(__$ctx,__$ref){__$ctx.__$a=0;var attrs__$43={},ctx__$44=__$ctx.ctx,url__$45=ctx__$44.url,typeOfUrl__$46=typeof url__$45;typeOfUrl__$46!=="undefined"&&(attrs__$43.href=typeOfUrl__$46==="string"?url__$45:BEMHTML.apply(url__$45));ctx__$44.title&&(attrs__$43.title=ctx__$44.title);ctx__$44.target&&(attrs__$43.target=ctx__$44.target);return attrs__$43}function __$b83(__$ctx,__$ref){__$ctx.__$a=0;{var _$15ctx__$0=__$ctx.ctx,_$15dtype__$1=function(){var __$r__$2;var __$l0__$3=__$ctx._mode;__$ctx._mode="doctype";__$r__$2=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$3;return __$r__$2}(),_$15xUA__$4=function(){var __$r__$5;var __$l1__$6=__$ctx._mode;__$ctx._mode="xUACompatible";__$r__$5=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$6;return __$r__$5}(),_$15buf__$7=[_$15dtype__$1,{elem:"root",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},_$15xUA__$4,{tag:"title",content:_$15ctx__$0.title},_$15ctx__$0.favicon?{elem:"favicon",url:_$15ctx__$0.favicon}:"",_$15ctx__$0.meta,{block:"i-ua"},_$15ctx__$0.head]},_$15ctx__$0]}];var __$r__$8;var __$l2__$9=__$ctx.__$anflg4;__$ctx.__$anflg4=true;var __$r__$10;var __$l3__$11=__$ctx.ctx;__$ctx.ctx=_$15buf__$7;var __$l4__$12=__$ctx._mode;__$ctx._mode="";applyc(__$ctx,__$ref);__$r__$10=undefined;__$ctx.ctx=__$l3__$11;__$ctx._mode=__$l4__$12;__$r__$8=undefined;__$ctx.__$anflg4=__$l2__$9;undefined}return}function __$b84(__$ctx,__$ref){__$ctx.__$a=0;__$ctx.ctx.elem=null;var __$r__$14;__$ctx.__$a=2;__$r__$14=applyc(__$ctx,__$ref);return}function __$b85(__$ctx,__$ref){__$ctx.__$a=0;var ctx__$16=__$ctx.ctx;var __$r__$17;var __$l0__$18=__$ctx._mode;__$ctx._mode="";var __$l1__$19=__$ctx.ctx;__$ctx.ctx=[ctx__$16.doctype||"<!DOCTYPE html>",{tag:"html",cls:"ua_js_no",content:[{elem:"head",content:[{tag:"meta",attrs:{charset:"utf-8"}},{tag:"title",content:ctx__$16.title},{block:"ua"},ctx__$16.head,ctx__$16.styles,ctx__$16.favicon?{elem:"favicon",url:ctx__$16.favicon}:""]},__$ctx.extend(ctx__$16,{elem:"body"})]}];var __$r__$20;__$ctx.__$a=4;__$r__$20=applyc(__$ctx,__$ref);__$r__$17=__$r__$20;__$ctx._mode=__$l0__$18;__$ctx.ctx=__$l1__$19;return}function __$b86(__$ctx,__$ref){__$ctx.__$a=0;{var _$5ie__$47=__$ctx.ctx.ie;if(_$5ie__$47===true){var __$r__$48;var __$l0__$49=__$ctx._mode;__$ctx._mode="";var __$l1__$50=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:this.ctx.url+".ie"+v+".css",ie:"IE "+v}},__$ctx);applyc(__$ctx,__$ref);__$r__$48=undefined;__$ctx._mode=__$l0__$49;__$ctx.ctx=__$l1__$50;undefined}else{var _$5hideRule__$51=!_$5ie__$47?["gt IE 9","<!-->","<!--"]:_$5ie__$47==="!IE"?[_$5ie__$47,"<!-->","<!--"]:[_$5ie__$47,"",""];var __$r__$52;var __$l2__$53=__$ctx._mode;__$ctx._mode="";var __$l5__$54=__$ctx.ctx;var __$l3__$55=__$l5__$54._ieCommented;__$l5__$54._ieCommented=true;var __$l4__$56=__$ctx.ctx;__$ctx.ctx=["<!--[if "+_$5hideRule__$51[0]+"]>",_$5hideRule__$51[1],__$ctx.ctx,_$5hideRule__$51[2],"<![endif]-->"];applyc(__$ctx,__$ref);__$r__$52=undefined;__$ctx._mode=__$l2__$53;__$l5__$54._ieCommented=__$l3__$55;__$ctx.ctx=__$l4__$56;undefined}}return}function __$b87(__$ctx,__$ref){__$ctx.__$a=0;var url__$57=__$ctx.ctx.url;var __$r__$58;var __$l0__$59=__$ctx._mode;__$ctx._mode="";var __$l1__$60=__$ctx.ctx;__$ctx.ctx=[6,7,8,9].map(function(v){return{elem:"css",url:url__$57+".ie"+v+".css",ie:"IE "+v}});var __$r__$61;__$ctx.__$a=5;__$r__$61=applyc(__$ctx,__$ref);__$r__$58=__$r__$61;__$ctx._mode=__$l0__$59;__$ctx.ctx=__$l1__$60;return}function __$b88(__$ctx,__$ref){__$ctx.__$a=0;var ie__$62=__$ctx.ctx.ie,hideRule__$63=!ie__$62?["gt IE 9","<!-->","<!--"]:ie__$62==="!IE"?[ie__$62,"<!-->","<!--"]:[ie__$62,"",""];var __$r__$64;var __$l0__$65=__$ctx._mode;__$ctx._mode="";var __$l3__$66=__$ctx.ctx;var __$l1__$67=__$l3__$66._ieCommented;__$l3__$66._ieCommented=true;var __$l2__$68=__$ctx.ctx;__$ctx.ctx=["<!--[if "+hideRule__$63[0]+"]>"+hideRule__$63[1],__$ctx.ctx,hideRule__$63[2]+"<![endif]-->"];__$r__$64=applyc(__$ctx,__$ref);__$ctx._mode=__$l0__$65;__$l3__$66._ieCommented=__$l1__$67;__$ctx.ctx=__$l2__$68;return}function __$b89(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$21;var __$l0__$22=__$ctx.__$anflg3;__$ctx.__$anflg3=true;var __$r__$23;var __$l1__$24=__$ctx.ctx;__$ctx.ctx={block:"footer",elem:"outer",content:__$ctx.ctx};applyc(__$ctx,__$ref);__$r__$23=undefined;__$ctx.ctx=__$l1__$24;__$r__$21=undefined;__$ctx.__$anflg3=__$l0__$22;return}function __$b90(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$25;var __$l0__$26=__$ctx.__$anflg2;__$ctx.__$anflg2=true;var __$r__$27;var __$l1__$28=__$ctx._mode;__$ctx._mode="";var __$l2__$29=__$ctx.ctx;__$ctx.ctx={block:"link",mix:[{block:__$ctx.ctx.block,elem:__$ctx.ctx.elem,mods:__$ctx.ctx.mods}],url:__$ctx.ctx.url,title:__$ctx.ctx.title,target:"_blank"};applyc(__$ctx,__$ref);__$r__$27=undefined;__$ctx._mode=__$l1__$28;__$ctx.ctx=__$l2__$29;__$r__$25=undefined;__$ctx.__$anflg2=__$l0__$26;return}function __$b91(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$30;var __$l0__$31=__$ctx.__$anflg1;__$ctx.__$anflg1=true;var __$r__$32;var __$l1__$33=__$ctx._mode;__$ctx._mode="";var __$l2__$34=__$ctx.ctx;__$ctx.ctx={block:"menu-vert",mix:[{block:"social-ico"}],content:[{elem:"item",content:[{block:"menu-vert",mix:[{block:"social-ico",elem:"text"}],content:[{elem:"item",content:{block:"link",mix:[{block:"social-ico",elem:"rss-text"}],url:"/en/feed.xml",title:"New on Varya.me in English",content:"en"}},{elem:"item",content:{block:"link",mix:[{block:"social-ico",elem:"rss-text"}],url:"/ru/feed.xml",title:"Новые записи на Varya.me",content:"ru"}}]},{block:"social-ico",elem:"ico",mods:{type:"rss"},url:"/feed.xml",title:"New on Varya.me in both English and Russian"}]},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"twitter"},url:"https://twitter.com/toivonens"}},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"github"},url:"https://github.com/toivonen"}},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"facebook"},url:"https://www.facebook.com/varvara.stepanova.9"}},{elem:"item",content:{block:"social-ico",elem:"ico",mods:{type:"linkedin"},url:"http://www.linkedin.com/pub/varvara-stepanova/30/72a/96b"}}]};applyc(__$ctx,__$ref);__$r__$32=undefined;__$ctx._mode=__$l1__$33;__$ctx.ctx=__$l2__$34;__$r__$30=undefined;__$ctx.__$anflg1=__$l0__$31;return}function __$b92(__$ctx,__$ref){__$ctx.__$a=0;var _this__$69=__$ctx,BEM___$70=_this__$69.BEM,v__$71=__$ctx.ctx,isBEM__$72,tag__$73,result__$74;var __$r__$75;var __$l0__$76=__$ctx._str;__$ctx._str="";var __$r__$77;var __$l1__$78=__$ctx._mode;__$ctx._mode="tag";__$r__$77=applyc(__$ctx,__$ref);__$ctx._mode=__$l1__$78;tag__$73=__$r__$77;typeof tag__$73!=="undefined"||(tag__$73=v__$71.tag);typeof tag__$73!=="undefined"||(tag__$73="div");if(tag__$73){var jsParams__$79,js__$80;if(__$ctx.block&&v__$71.js!==false){var __$r__$81;var __$l2__$82=__$ctx._mode;__$ctx._mode="js";__$r__$81=applyc(__$ctx,__$ref);__$ctx._mode=__$l2__$82;js__$80=__$r__$81;js__$80=js__$80?__$ctx._.extend(v__$71.js,js__$80===true?{}:js__$80):v__$71.js===true?{}:v__$71.js;js__$80&&((jsParams__$79={})[BEM___$70.INTERNAL.buildClass(__$ctx.block,v__$71.elem)]=js__$80)}__$ctx._str+="<"+tag__$73;var __$r__$83;var __$l3__$84=__$ctx._mode;__$ctx._mode="bem";__$r__$83=applyc(__$ctx,__$ref);__$ctx._mode=__$l3__$84;isBEM__$72=__$r__$83;typeof isBEM__$72!=="undefined"||(isBEM__$72=typeof v__$71.bem!=="undefined"?v__$71.bem:v__$71.block||v__$71.elem);var __$r__$86;var __$l4__$87=__$ctx._mode;__$ctx._mode="cls";__$r__$86=applyc(__$ctx,__$ref);__$ctx._mode=__$l4__$87;var cls__$85=__$r__$86;cls__$85||(cls__$85=v__$71.cls);var addJSInitClass__$88=v__$71.block&&jsParams__$79;if(isBEM__$72||cls__$85){__$ctx._str+=' class="';if(isBEM__$72){__$ctx._str+=BEM___$70.INTERNAL.buildClasses(__$ctx.block,v__$71.elem,v__$71.elemMods||v__$71.mods);var __$r__$90;var __$l5__$91=__$ctx._mode;__$ctx._mode="mix";__$r__$90=applyc(__$ctx,__$ref);__$ctx._mode=__$l5__$91;var mix__$89=__$r__$90;v__$71.mix&&(mix__$89=mix__$89?mix__$89.concat(v__$71.mix):v__$71.mix);if(mix__$89){var visited__$92={},visitedKey__$93=function(block,elem){return(block||"")+"__"+(elem||"")};visited__$92[visitedKey__$93(__$ctx.block,__$ctx.elem)]=true;if(!__$ctx._.isArray(mix__$89))mix__$89=[mix__$89];for(var i__$94=0;i__$94<mix__$89.length;i__$94++){var mixItem__$95=mix__$89[i__$94],hasItem__$96=mixItem__$95.block||mixItem__$95.elem,block__$97=mixItem__$95.block||mixItem__$95._block||_this__$69.block,elem__$98=mixItem__$95.elem||mixItem__$95._elem||_this__$69.elem;if(hasItem__$96)__$ctx._str+=" ";__$ctx._str+=BEM___$70.INTERNAL[hasItem__$96?"buildClasses":"buildModsClasses"](block__$97,mixItem__$95.elem||mixItem__$95._elem||(mixItem__$95.block?undefined:_this__$69.elem),mixItem__$95.elemMods||mixItem__$95.mods);if(mixItem__$95.js){(jsParams__$79||(jsParams__$79={}))[BEM___$70.INTERNAL.buildClass(block__$97,mixItem__$95.elem)]=mixItem__$95.js===true?{}:mixItem__$95.js;addJSInitClass__$88||(addJSInitClass__$88=block__$97&&!mixItem__$95.elem)}if(hasItem__$96&&!visited__$92[visitedKey__$93(block__$97,elem__$98)]){visited__$92[visitedKey__$93(block__$97,elem__$98)]=true;var __$r__$100;var __$l6__$101=__$ctx._mode;__$ctx._mode="mix";var __$l7__$102=__$ctx.block;__$ctx.block=block__$97;var __$l8__$103=__$ctx.elem;__$ctx.elem=elem__$98;__$r__$100=applyc(__$ctx,__$ref);__$ctx._mode=__$l6__$101;__$ctx.block=__$l7__$102;__$ctx.elem=__$l8__$103;var nestedMix__$99=__$r__$100;if(nestedMix__$99){for(var j__$104=0;j__$104<nestedMix__$99.length;j__$104++){var nestedItem__$105=nestedMix__$99[j__$104];if(!nestedItem__$105.block&&!nestedItem__$105.elem||!visited__$92[visitedKey__$93(nestedItem__$105.block,nestedItem__$105.elem)]){nestedItem__$105._block=block__$97;nestedItem__$105._elem=elem__$98;mix__$89.splice(i__$94+1,0,nestedItem__$105)}}}}}}}if(cls__$85)__$ctx._str+=isBEM__$72?" "+cls__$85:cls__$85;if(addJSInitClass__$88)__$ctx._str+=' i-bem"';else __$ctx._str+='"'}if(isBEM__$72&&jsParams__$79){__$ctx._str+=' data-bem="'+__$ctx._.attrEscape(JSON.stringify(jsParams__$79))+'"'}var __$r__$107;var __$l9__$108=__$ctx._mode;__$ctx._mode="attrs";__$r__$107=applyc(__$ctx,__$ref);__$ctx._mode=__$l9__$108;var attrs__$106=__$r__$107;attrs__$106=__$ctx._.extend(attrs__$106,v__$71.attrs);if(attrs__$106){var name__$109,attr__$110;for(name__$109 in attrs__$106){attr__$110=attrs__$106[name__$109];if(attr__$110===undefined)continue;__$ctx._str+=" "+name__$109+'="'+__$ctx._.attrEscape(__$ctx._.isSimple(attr__$110)?attr__$110:__$ctx.reapply(attr__$110))+'"'}}}if(__$ctx._.isShortTag(tag__$73)){__$ctx._str+="/>"}else{if(tag__$73)__$ctx._str+=">";var __$r__$112;var __$l10__$113=__$ctx._mode;__$ctx._mode="content";__$r__$112=applyc(__$ctx,__$ref);__$ctx._mode=__$l10__$113;var content__$111=__$r__$112;if(content__$111||content__$111===0){isBEM__$72=__$ctx.block||__$ctx.elem;var __$r__$114;var __$l11__$115=__$ctx._mode;__$ctx._mode="";var __$l12__$116=__$ctx._notNewList;__$ctx._notNewList=false;var __$l13__$117=__$ctx.position;__$ctx.position=isBEM__$72?1:__$ctx.position;var __$l14__$118=__$ctx._listLength;__$ctx._listLength=isBEM__$72?1:__$ctx._listLength;var __$l15__$119=__$ctx.ctx;__$ctx.ctx=content__$111;__$r__$114=applyc(__$ctx,__$ref);__$ctx._mode=__$l11__$115;__$ctx._notNewList=__$l12__$116;__$ctx.position=__$l13__$117;__$ctx._listLength=__$l14__$118;__$ctx.ctx=__$l15__$119}if(tag__$73)__$ctx._str+="</"+tag__$73+">"}result__$74=__$ctx._str;__$r__$75=undefined;__$ctx._str=__$l0__$76;__$ctx._buf.push(result__$74);return}function __$b95(__$ctx,__$ref){__$ctx.__$a=0;var __$r__$120;var __$l0__$121=__$ctx._mode;__$ctx._mode="";var __$l1__$122=__$ctx.ctx;__$ctx.ctx=__$ctx.ctx._value;var __$r__$123;__$ctx.__$a=6;__$r__$123=applyc(__$ctx,__$ref);__$r__$120=__$r__$123;__$ctx._mode=__$l0__$121;__$ctx.ctx=__$l1__$122;return}function __$b96(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;var ctx__$124=__$ctx.ctx;if(ctx__$124&&ctx__$124!==true||ctx__$124===0){__$ctx._buf.push(ctx__$124+"")}return}function __$b97(__$ctx,__$ref){__$ctx.__$a=0;__$ctx._listLength--;return}function __$b98(__$ctx,__$ref){__$ctx.__$a=0;var v__$125=__$ctx.ctx,l__$126=v__$125.length,i__$127=0,prevPos__$128=__$ctx.position,prevNotNewList__$129=__$ctx._notNewList;if(prevNotNewList__$129){__$ctx._listLength+=l__$126-1}else{__$ctx.position=0;__$ctx._listLength=l__$126}__$ctx._notNewList=true;while(i__$127<l__$126)!function(){var __$r__$130;var __$l0__$131=__$ctx.ctx;__$ctx.ctx=v__$125[i__$127++];__$r__$130=applyc(__$ctx,__$ref);__$ctx.ctx=__$l0__$131;return __$r__$130}();prevNotNewList__$129||(__$ctx.position=prevPos__$128);return}function __$b99(__$ctx,__$ref){__$ctx.__$a=0;var vBlock__$132=__$ctx.ctx.block,vElem__$133=__$ctx.ctx.elem,block__$134=__$ctx._currBlock||__$ctx.block;__$ctx.ctx||(__$ctx.ctx={});var __$r__$135;var __$l0__$136=__$ctx._mode;__$ctx._mode="default";var __$l1__$137=__$ctx.block;__$ctx.block=vBlock__$132||(vElem__$133?block__$134:undefined);var __$l2__$138=__$ctx._currBlock;__$ctx._currBlock=vBlock__$132||vElem__$133?undefined:block__$134;var __$l3__$139=__$ctx.elem;__$ctx.elem=__$ctx.ctx.elem;var __$l4__$140=__$ctx.mods;__$ctx.mods=vBlock__$132?__$ctx.ctx.mods||(__$ctx.ctx.mods={}):__$ctx.mods;var __$l5__$141=__$ctx.elemMods;__$ctx.elemMods=__$ctx.ctx.elemMods||{};__$ctx.block||__$ctx.elem?__$ctx.position=(__$ctx.position||0)+1:__$ctx._listLength--;applyc(__$ctx,__$ref);__$r__$135=undefined;__$ctx._mode=__$l0__$136;__$ctx.block=__$l1__$137;__$ctx._currBlock=__$l2__$138;__$ctx.elem=__$l3__$139;__$ctx.mods=__$l4__$140;__$ctx.elemMods=__$l5__$141;return}function __$g0(__$ctx,__$ref){if(!__$ctx.elem){__$ctx.__$a=0;return"body"}var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return"script";__$ctx.__$a=0;return"script"}else if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="link"){__$ctx.__$a=0;return"link"}else if(__$t==="body"){__$ctx.__$a=0;return"body"}else if(__$t==="css"){if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style";if(__$ctx.ctx.url){__$ctx.__$a=0;return"link"}__$ctx.__$a=0;return"style"}return __$ref}function __$g1(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="highlight"){if(__$ctx.elem==="code"){__$ctx.__$a=0;return"code"}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="favicon"){__$ctx.__$a=0;return"link"}else if(__$t==="meta"){__$ctx.__$a=0;return"meta"}else if(__$t==="head"){__$ctx.__$a=0;return"head"}else if(__$t==="root"){__$ctx.__$a=0;return"html"}var __$r=__$g0(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;return"a"}if(!__$ctx.elem){__$ctx.__$a=0;return"a"}}else if(__$t==="footer"){if(!__$ctx.elem){__$ctx.__$a=0;return"footer"}}else if(__$t==="prompting"){if(!__$ctx.elem){__$ctx.__$a=0;return"aside"}}else if(__$t==="menu-vert"){if(__$ctx.elem==="item"){__$ctx.__$a=0;return"li"}if(!__$ctx.elem){__$ctx.__$a=0;return"ul"}}else if(__$t==="sidebar"){if(!__$ctx.elem){__$ctx.__$a=0;return"nav"}}else if(__$t==="related"){if(__$ctx.elem==="header"){__$ctx.__$a=0;return"h4"}}else if(__$t==="header"){if(!__$ctx.elem){__$ctx.__$a=0;return"header"}}else if(__$t==="article"){var __$t=__$ctx.elem;if(__$t==="header"){__$ctx.__$a=0;return"h1"}else if(__$t==="details"){__$ctx.__$a=0;return"span"}}else if(__$t==="main"){if(!__$ctx.elem){__$ctx.__$a=0;return"section"}}else if(__$t==="logo"){if(!__$ctx.elem){__$ctx.__$a=0;return"logo"}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return"script"}if(!__$ctx.elem){__$ctx.__$a=0;return"script"}}__$ctx.__$a=0;return undefined;return __$ref}function __$g2(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="highlight"){if(!__$ctx.elem){__$ctx.__$a=0;return{tag:"pre",content:{elem:"code",content:__$ctx._.xmlEscape(__$ctx.ctx.content)}}}}else if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="head"){if(__$ctx.__$a!==1){__$ctx.__$a=0;return[__$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}},function(){var __$r__$13;__$ctx.__$a=1;__$r__$13=applyc(__$ctx,__$ref);return __$r__$13}()]}}else if(__$t==="body"){if(__$ctx.__$a!==3){__$ctx.__$a=0;return[function(){var __$r__$15;__$ctx.__$a=3;__$r__$15=applyc(__$ctx,__$ref);return __$r__$15}(),__$ctx.ctx.scripts]}}}else if(__$t==="footer"){var __$t=__$ctx.elem;if(__$t==="right"){__$ctx.__$a=0;return"O"}else if(__$t==="center"){__$ctx.__$a=0;return"xxx"}else if(__$t==="left"){__$ctx.__$a=0;return[{block:"b-menu-vert",content:[{elem:"item",content:{block:"b-link",url:"#",content:"Blog"}},{elem:"item",content:{block:"b-link",url:"#",content:"Articles and talks"}},{elem:"item",content:{block:"b-link",url:"#",content:"About me"}}]}]}}else if(__$t==="github"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"header",content:[{elem:"title",content:"Me on GitHub",mix:{block:"box",elem:"title"}}]},{elem:"body"}]}}else if(__$t==="related"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"body",mix:{block:"box",elem:"body"},content:[{elem:"header",content:"Related info"}]},{elem:"text",content:__$ctx.ctx.text}]}}else if(__$t==="header"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"left",mix:{block:"candies",js:{size:{max:28,min:12},reverse:true}}},{block:"logo",mix:{block:"header",elem:"center"}},{elem:"right",mix:{block:"candies",js:{size:{max:28,min:12}}}}]}}else if(__$t==="article"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return[{block:"share"},__$ctx.ctx.content]}if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"body",mix:{block:"box",elem:"body"},content:[{elem:"header",content:__$ctx.ctx.title},{elem:"details",content:"by Varya Stepanova on 29th April"}]},{elem:"text",content:__$ctx.ctx.text}]}}else if(__$t==="logo"){if(!__$ctx.elem){__$ctx.__$a=0;return'&sdot;&sdot;&sdot;<b class="var">var</b>&sdot;<b class="ya">ya</b>;<b class="cursor"></b>'}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=[";(function(d,e,c,r){","e=d.documentElement;",'c="className";','r="replace";','e[c]=e[c][r]("ua_js_no","ua_js_yes");','if(d.compatMode!="CSS1Compat")','e[c]=e[c][r]("ua_css_standart","ua_css_quirks")',"})(document);"].join("");if(__$r!==__$ref)return __$r}if(!__$ctx.elem){__$ctx.__$a=0;return["(function(e,c){",'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");','})(document.documentElement,"className");']}}__$ctx.__$a=0;return __$ctx.ctx.content;return __$ref}function __$g3(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){var __$t=__$ctx.ctx.url;if(__$t){__$ctx.__$a=0;return{src:__$ctx.ctx.url};__$ctx.__$a=0;return{src:__$ctx.ctx.url}}}else if(__$t==="favicon"){__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url};__$ctx.__$a=0;return{rel:"shortcut icon",href:__$ctx.ctx.url}}else if(__$t==="meta"){__$ctx.__$a=0;return __$ctx.ctx.attrs}else if(__$t==="css"){var __$t=__$ctx.ctx.url;if(__$t){__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url};__$ctx.__$a=0;return{rel:"stylesheet",href:__$ctx.ctx.url}}}}else if(__$t==="link"){if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b58(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem){__$ctx.__$a=0;var __$r=__$b59(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;return undefined;return __$ref}function __$g4(__$ctx,__$ref){var __$t=__$ctx.block;if(__$t==="page"){var __$t=__$ctx.elem;if(__$t==="js"){__$ctx.__$a=0;return false;__$ctx.__$a=0;return false}else if(__$t==="favicon"){__$ctx.__$a=0;return false;__$ctx.__$a=0;return false}else if(__$t==="meta"){__$ctx.__$a=0;return false;__$ctx.__$a=0;return false}else if(__$t==="head"){__$ctx.__$a=0;return false;__$ctx.__$a=0;return false}else if(__$t==="root"){__$ctx.__$a=0;return false}else if(__$t==="link"){__$ctx.__$a=0;return false}else if(__$t==="css"){__$ctx.__$a=0;return false;__$ctx.__$a=0;return false}}else if(__$t==="ua"){if(!__$ctx.elem){__$ctx.__$a=0;return false}if(!__$ctx.elem){__$ctx.__$a=0;return false}}__$ctx.__$a=0;return undefined;return __$ref}function __$g5(__$ctx,__$ref){if(!__$ctx.elem&&__$ctx["__$anflg4"]!==true){__$ctx.__$a=0;var __$r=__$b83(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx.elem==="body"&&__$ctx.__$a!==2){__$ctx.__$a=0;var __$r=__$b84(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx.__$a!==4){__$ctx.__$a=0;var __$r=__$b85(__$ctx,__$ref);if(__$r!==__$ref)return __$r}var __$t=__$ctx.elem;if(__$t==="css"){if(__$ctx.ctx.hasOwnProperty("ie")&&!__$ctx.ctx._ieCommented){__$ctx.__$a=0;var __$r=__$b86(__$ctx,__$ref);if(__$r!==__$ref)return __$r}var __$t=!__$ctx.ctx._ieCommented;if(__$t){var __$t=__$ctx.ctx.hasOwnProperty("ie");if(__$t){if(__$ctx.ctx.ie===true&&__$ctx.__$a!==5){__$ctx.__$a=0;var __$r=__$b87(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b88(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}}return __$ref}function __$g6(__$ctx,__$ref){var __$t=__$ctx._mode;if(__$t==="tag"){var __$r=__$g1(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="content"){var __$r=__$g2(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="js"){if(__$ctx.block==="highlight"&&!__$ctx.elem){__$ctx.__$a=0;return{}}__$ctx.__$a=0;return undefined}else if(__$t==="attrs"){var __$r=__$g3(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="bem"){var __$r=__$g4(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="cls"){var __$t=__$ctx.block;if(__$t==="page"){if(__$ctx.elem==="root"){__$ctx.__$a=0;return"ua_js_no ua_css_standard"}}else if(__$t==="article"){if(__$ctx.elem==="details"){__$ctx.__$a=0;return"author vcard"}}__$ctx.__$a=0;return undefined}else if(__$t==="mix"){var __$t=__$ctx.block;if(__$t==="page"){if(!__$ctx.elem){__$ctx.__$a=0;return[{elem:"body"}]}}else if(__$t==="related"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return[{block:"box",elem:"island"}]}}else if(__$t==="article"){if(__$ctx.elem==="text"){__$ctx.__$a=0;return[{block:"box",elem:"island"}]}}__$ctx.__$a=0;return undefined}else if(__$t==="default"){var __$t=__$ctx.block;if(__$t==="page"){var __$r=__$g5(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="footer"){if(!__$ctx.elem&&__$ctx["__$anflg3"]!==true){__$ctx.__$a=0;var __$r=__$b89(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}else if(__$t==="social-ico"){if(__$ctx.elem==="ico"&&__$ctx["__$anflg2"]!==true){__$ctx.__$a=0;var __$r=__$b90(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.elem&&__$ctx["__$anflg1"]!==true){__$ctx.__$a=0;var __$r=__$b91(__$ctx,__$ref);if(__$r!==__$ref)return __$r}}__$ctx.__$a=0;var __$r=__$b92(__$ctx,__$ref);if(__$r!==__$ref)return __$r}else if(__$t==="xUACompatible"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx["x-ua-compatible"]===false?false:{tag:"meta",attrs:{"http-equiv":"X-UA-Compatible",content:__$ctx.ctx["x-ua-compatible"]||"IE=edge"}}}}else if(__$t==="doctype"){if(__$ctx.block==="page"&&!__$ctx.elem){__$ctx.__$a=0;return __$ctx.ctx.doctype||"<!DOCTYPE html>"}}else if(__$t===""){if(__$ctx.ctx&&__$ctx.ctx._vow&&__$ctx.__$a!==6){__$ctx.__$a=0;var __$r=__$b95(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isSimple(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b96(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(!__$ctx.ctx){__$ctx.__$a=0;var __$r=__$b97(__$ctx,__$ref);if(__$r!==__$ref)return __$r}if(__$ctx._.isArray(__$ctx.ctx)){__$ctx.__$a=0;var __$r=__$b98(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;var __$r=__$b99(__$ctx,__$ref);if(__$r!==__$ref)return __$r}__$ctx.__$a=0;return __$ref};
     return exports;
  })({});
  var defineAsGlobal = true;
  if(typeof exports === "object") {
    exports["BEMHTML"] = __bem_xjst;
    defineAsGlobal = false;
  }
  if(typeof modules === "object") {
    modules.define("BEMHTML",
                   function(provide) { provide(__bem_xjst) });
    defineAsGlobal = false;
  }
  defineAsGlobal && (g["BEMHTML"] = __bem_xjst);
})(this);