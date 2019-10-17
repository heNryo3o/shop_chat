var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[[5],[1,'cu-bar fixed']],[[2,'?:'],[[2,'!='],[[7],[3,'bgImage']],[1,'']],[1,'none-bg text-white bg-img'],[1,'']]],[[7],[3,'bgColor']]]])
Z([[7],[3,'style']])
Z([[7],[3,'isBack']])
Z([3,'__e'])
Z([3,'action'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'BackPage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'backText'])
Z([3,'content'])
Z([3,'right'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'Chat_Record']])
Z(z[0])
Z([[4],[[5],[[5],[1,'cu-item']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'item']],[3,'from_id']],[[7],[3,'username']]],[1,'self'],[1,'']]]])
Z([[7],[3,'item']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'from_id']],[[6],[[7],[3,'chater_info']],[3,'username']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'from_id']],[[7],[3,'username']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'Conversation']])
Z(z[0])
Z([3,'__e'])
Z([3,'cu-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'to_chat']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[7],[3,'item']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'unread_msg_count']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'FrindList']])
Z(z[0])
Z([3,'__e'])
Z([3,'cu-item'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'to_chat']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([[7],[3,'item']])
Z([[2,'!='],[[6],[[7],[3,'item']],[3,'unread_msg_count']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'text-bold'])
Z([3,'font-size:38rpx;'])
Z([[2,'=='],[[6],[[7],[3,'info_me']],[3,'gender']],[1,1]])
Z([[2,'=='],[[6],[[7],[3,'info_me']],[3,'gender']],[1,2]])
Z([[2,'=='],[[6],[[7],[3,'info_me']],[3,'gender']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./colorui/components/cu-custom.wxml','./pages/chat/chat.wxml','./pages/chatlist/chatlist.wxml','./pages/index/index.wxml','./pages/login/login.wxml','./pages/me/me.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['bindtap',3,'class',1,'data-event-opts',2],[],e,s,gg)
var fE=_n('slot')
_rz(z,fE,'name',6,e,s,gg)
_(oD,fE)
_(xC,oD)
}
var cF=_n('slot')
_rz(z,cF,'name',7,e,s,gg)
_(oB,cF)
var hG=_n('slot')
_rz(z,hG,'name',8,e,s,gg)
_(oB,hG)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cI=_v()
_(r,cI)
var oJ=function(aL,lK,tM,gg){
var bO=_mz(z,'view',['class',4,'id',1],[],aL,lK,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,6,aL,lK,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,7,aL,lK,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(tM,bO)
return tM
}
cI.wxXCkey=2
_2z(z,2,oJ,e,s,gg,cI,'item','index','index')
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fS=_v()
_(r,fS)
var cT=function(oV,hU,cW,gg){
var lY=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'id',3],[],oV,hU,gg)
var aZ=_v()
_(lY,aZ)
if(_oz(z,8,oV,hU,gg)){aZ.wxVkey=1
}
aZ.wxXCkey=1
_(cW,lY)
return cW
}
fS.wxXCkey=2
_2z(z,2,cT,e,s,gg,fS,'item','index','index')
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var e2=_v()
_(r,e2)
var b3=function(x5,o4,o6,gg){
var c8=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2,'id',3],[],x5,o4,gg)
var h9=_v()
_(c8,h9)
if(_oz(z,8,x5,o4,gg)){h9.wxVkey=1
}
h9.wxXCkey=1
_(o6,c8)
return o6
}
e2.wxXCkey=2
_2z(z,2,b3,e,s,gg,e2,'item','index','index')
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oBB=_mz(z,'text',['class',0,'style',1],[],e,s,gg)
var lCB=_v()
_(oBB,lCB)
if(_oz(z,2,e,s,gg)){lCB.wxVkey=1
}
var aDB=_v()
_(oBB,aDB)
if(_oz(z,3,e,s,gg)){aDB.wxVkey=1
}
var tEB=_v()
_(oBB,tEB)
if(_oz(z,4,e,s,gg)){tEB.wxVkey=1
}
lCB.wxXCkey=1
aDB.wxXCkey=1
tEB.wxXCkey=1
_(r,oBB)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index","pages/chatlist/chatlist","pages/me/me","pages/chat/chat"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"black","selectedColor":"#1CBBB4","backgroundColor":"white","list":[{"pagePath":"pages/chatlist/chatlist","text":"消息"},{"pagePath":"pages/index/index","text":"通讯录"},{"pagePath":"pages/me/me","text":"我"}]},"nvueCompiler":"weex","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"极光im测试","compilerVersion":"2.0.1","usingComponents":{"md5":"/js_sdk/js-md5/build/md5.min","j-i-m":"/js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min","cu-custom":"/colorui/components/cu-custom"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['colorui/components/cu-custom.json']={"usingComponents":{},"component":true};
__wxAppCode__['colorui/components/cu-custom.wxml']=$gwx('./colorui/components/cu-custom.wxml');

__wxAppCode__['pages/chat/chat.json']={"navigationBarTitleText":"聊天","navigationBarBackgroundColor":"white","usingComponents":{}};
__wxAppCode__['pages/chat/chat.wxml']=$gwx('./pages/chat/chat.wxml');

__wxAppCode__['pages/chatlist/chatlist.json']={"navigationBarTitleText":"消息","navigationBarBackgroundColor":"white","usingComponents":{}};
__wxAppCode__['pages/chatlist/chatlist.wxml']=$gwx('./pages/chatlist/chatlist.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"JIM测试","navigationBarBackgroundColor":"white","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","navigationBarBackgroundColor":"white","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/me/me.json']={"navigationBarTitleText":"我","navigationBarBackgroundColor":"white","usingComponents":{}};
__wxAppCode__['pages/me/me.wxml']=$gwx('./pages/me/me.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _jmessageWxappletSdk140Min = _interopRequireDefault(__webpack_require__(/*! js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js"));
var _md = _interopRequireDefault(__webpack_require__(/*! js_sdk/js-md5/src/md5.js */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\js-md5\\src\\md5.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =
{
  onLaunch: function onLaunch() {
    _vue.default.prototype.JIM = new _jmessageWxappletSdk140Min.default({});
    console.log('App Launch', " at App.vue:8");
    var appkey = '69e776bb51c3a264cf364a97';
    var key = '4f7f3575a6910c9560f3d966';
    var timestamp = new Date().getTime();
    var signature = (0, _md.default)("appkey=69e776bb51c3a264cf364a97&timestamp=" + timestamp + "&random_str=022cd9fd995849b66666&key=4f7f3575a6910c9560f3d966");
    console.log(signature, " at App.vue:13");
    this.JIM.init({
      "appkey": appkey,
      "random_str": "022cd9fd995849b66666",
      "signature": signature,
      "timestamp": timestamp,
      "flag": 1 }).
    onSuccess(function (data) {
      console.log(data, " at App.vue:21");
    }).onFail(function (data) {
      //TODO
    });
    //
    this.JIM.onDisconnect(function () {
      console.log('JIM断开链接', " at App.vue:27");
    });

    this.JIM.onMsgReceive(function (data) {
      // 接受在线消息
      console.log('在线接受消息', " at App.vue:32");
      console.log(data, " at App.vue:33");
      uni.$emit('msg_ol', data.messages[0].content);
    });

    //this.JIM.isInit();// 无回调函数，调用则成功
    _vue.default.prototype.onSyncConversation = null;
    uni.$once('onSyncConversation', function (data) {
      this.onSyncConversation = data;
      console.log('离线传递：', " at App.vue:41");
      console.log(data, " at App.vue:42");
      uni.$off();
    });





  },
  onShow: function onShow() {
    console.log('App Show', " at App.vue:52");
  },
  onHide: function onHide() {
    console.log('App Hide', " at App.vue:55");
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue":
/*!*****************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/App.vue ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/App.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/App.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

},[["C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict"; /******/(function (modules) {// webpackBootstrap
  /******/ // install a JSONP callback for chunk loading
  /******/function webpackJsonpCallback(data) {
    /******/var chunkIds = data[0];
    /******/var moreModules = data[1];
    /******/var executeModules = data[2];
    /******/
    /******/ // add "moreModules" to the modules object,
    /******/ // then flag all "chunkIds" as loaded and fire callback
    /******/var moduleId,chunkId,i = 0,resolves = [];
    /******/for (; i < chunkIds.length; i++) {
      /******/chunkId = chunkIds[i];
      /******/if (installedChunks[chunkId]) {
        /******/resolves.push(installedChunks[chunkId][0]);
        /******/}
      /******/installedChunks[chunkId] = 0;
      /******/}
    /******/for (moduleId in moreModules) {
      /******/if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
        /******/modules[moduleId] = moreModules[moduleId];
        /******/}
      /******/}
    /******/if (parentJsonpFunction) parentJsonpFunction(data);
    /******/
    /******/while (resolves.length) {
      /******/resolves.shift()();
      /******/}
    /******/
    /******/ // add entry modules from loaded chunk to deferred list
    /******/deferredModules.push.apply(deferredModules, executeModules || []);
    /******/
    /******/ // run deferred modules when all chunks ready
    /******/return checkDeferredModules();
    /******/};
  /******/function checkDeferredModules() {
    /******/var result;
    /******/for (var i = 0; i < deferredModules.length; i++) {
      /******/var deferredModule = deferredModules[i];
      /******/var fulfilled = true;
      /******/for (var j = 1; j < deferredModule.length; j++) {
        /******/var depId = deferredModule[j];
        /******/if (installedChunks[depId] !== 0) fulfilled = false;
        /******/}
      /******/if (fulfilled) {
        /******/deferredModules.splice(i--, 1);
        /******/result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
        /******/}
      /******/}
    /******/return result;
    /******/}
  /******/
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // object to store loaded and loading chunks
  /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
  /******/ // Promise = chunk loading, 0 = chunk loaded
  /******/var installedChunks = {
    /******/"common/runtime": 0
    /******/ };
  /******/
  /******/var deferredModules = [];
  /******/
  /******/ // script path function
  /******/function jsonpScriptSrc(chunkId) {
    /******/return __webpack_require__.p + "" + chunkId + ".js";
    /******/}
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/}
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/}
  /******/
  /******/ // This file contains only the entry chunk.
  /******/ // The chunk loading function for additional chunks
  /******/__webpack_require__.e = function requireEnsure(chunkId) {
    /******/var promises = [];
    /******/
    /******/
    /******/ // JSONP chunk loading for javascript
    /******/
    /******/var installedChunkData = installedChunks[chunkId];
    /******/if (installedChunkData !== 0) {// 0 means "already installed".
      /******/
      /******/ // a Promise means "currently loading".
      /******/if (installedChunkData) {
        /******/promises.push(installedChunkData[2]);
        /******/} else {
        /******/ // setup Promise in chunk cache
        /******/var promise = new Promise(function (resolve, reject) {
          /******/installedChunkData = installedChunks[chunkId] = [resolve, reject];
          /******/});
        /******/promises.push(installedChunkData[2] = promise);
        /******/
        /******/ // start chunk loading
        /******/var script = document.createElement('script');
        /******/var onScriptComplete;
        /******/
        /******/script.charset = 'utf-8';
        /******/script.timeout = 120;
        /******/if (__webpack_require__.nc) {
          /******/script.setAttribute("nonce", __webpack_require__.nc);
          /******/}
        /******/script.src = jsonpScriptSrc(chunkId);
        /******/
        /******/onScriptComplete = function onScriptComplete(event) {
          /******/ // avoid mem leaks in IE.
          /******/script.onerror = script.onload = null;
          /******/clearTimeout(timeout);
          /******/var chunk = installedChunks[chunkId];
          /******/if (chunk !== 0) {
            /******/if (chunk) {
              /******/var errorType = event && (event.type === 'load' ? 'missing' : event.type);
              /******/var realSrc = event && event.target && event.target.src;
              /******/var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
              /******/error.type = errorType;
              /******/error.request = realSrc;
              /******/chunk[1](error);
              /******/}
            /******/installedChunks[chunkId] = undefined;
            /******/}
          /******/};
        /******/var timeout = setTimeout(function () {
          /******/onScriptComplete({ type: 'timeout', target: script });
          /******/}, 120000);
        /******/script.onerror = script.onload = onScriptComplete;
        /******/document.head.appendChild(script);
        /******/}
      /******/}
    /******/return Promise.all(promises);
    /******/};
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/}
    /******/};
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/}
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/};
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {__webpack_require__.d(ns, key, function (key) {return value[key];}.bind(null, key));}
    /******/return ns;
    /******/};
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {return module['default'];} :
    /******/function getModuleExports() {return module;};
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/};
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {return Object.prototype.hasOwnProperty.call(object, property);};
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";
  /******/
  /******/ // on error function for async loading
  /******/__webpack_require__.oe = function (err) {console.error(err);throw err;};
  /******/
  /******/var jsonpArray = global["webpackJsonp"] = global["webpackJsonp"] || [];
  /******/var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
  /******/jsonpArray.push = webpackJsonpCallback;
  /******/jsonpArray = jsonpArray.slice();
  /******/for (var i = 0; i < jsonpArray.length; i++) {webpackJsonpCallback(jsonpArray[i]);}
  /******/var parentJsonpFunction = oldJsonpFunction;
  /******/
  /******/
  /******/ // run deferred modules from other chunks
  /******/checkDeferredModules();
  /******/})(
/************************************************************************/
/******/[]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ "./node_modules/@dcloudio/uni-app-plus/dist/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-app-plus/dist/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createPage = createPage;exports.createComponent = createComponent;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SYNC_API_RE = /^\$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var CALLBACK_API_RE = /^on/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name);
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name);
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {params[_key - 1] = arguments[_key];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return api.apply(void 0, [options].concat(params));
    }
    return handlePromise(new Promise(function (resolve, reject) {
      api.apply(void 0, [Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
      /* eslint-disable no-extend-native */
      if (!Promise.prototype.finally) {
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(
          function (value) {return promise.resolve(callback()).then(function () {return value;});},
          function (reason) {return promise.resolve(callback()).then(function () {
              throw reason;
            });});

        };
      }
    }));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var protocols = {};
var todos = [];
var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("app-plus ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("app-plus \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}



var eventApi = /*#__PURE__*/Object.freeze({
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


function wrapper$1(webview) {
  webview.$processed = true;

  webview.postMessage = function (data) {
    plus.webview.postMessageToUniNView({
      type: 'UniAppSubNVue',
      data: data },
    webview.id);
  };
  var callbacks = [];
  webview.onMessage = function (callback) {
    callbacks.push(callback);
  };
  webview.$consumeMessage = function (e) {
    callbacks.forEach(function (callback) {return callback(e);});
  };

  if (!webview.__uniapp_mask_id) {
    return;
  }
  var maskColor = webview.__uniapp_mask;
  var maskWebview = plus.webview.getWebviewById(webview.__uniapp_mask_id);
  maskWebview = maskWebview.parent() || maskWebview; // 再次检测父
  var oldShow = webview.show;
  var oldHide = webview.hide;
  var oldClose = webview.close;

  var showMask = function showMask() {
    maskWebview.setStyle({
      mask: maskColor });

  };
  var closeMask = function closeMask() {
    maskWebview.setStyle({
      mask: 'none' });

  };
  webview.show = function () {
    showMask();for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
    return oldShow.apply(webview, args);
  };
  webview.hide = function () {
    closeMask();for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {args[_key3] = arguments[_key3];}
    return oldHide.apply(webview, args);
  };
  webview.close = function () {
    closeMask();
    callbacks = [];for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
    return oldClose.apply(webview, args);
  };
}

function getSubNVueById(id) {
  var webview = plus.webview.getWebviewById(id);
  if (webview && !webview.$processed) {
    wrapper$1(webview);
  }
  return webview;
}

function requireNativePlugin(pluginName) {
  /* eslint-disable no-undef */
  if (typeof weex !== 'undefined') {
    return weex.requireModule(pluginName);
  }
  /* eslint-disable no-undef */
  return __requireNativePlugin__(pluginName);
}

var api = /*#__PURE__*/Object.freeze({
  requireNativePlugin: requireNativePlugin,
  getSubNVueById: getSubNVueById });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {args[_key5 - 1] = arguments[_key5];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function initHooks(mpOptions, hooks) {
  hooks.forEach(function (hook) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  });
}

function initVueComponent(Vue$$1, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue$$1.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = String;
          vueProps['value'] = null;
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type, value, file);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts, null, file);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$2(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *[
                                                  *    ['data.items', 'data.id', item.data.id],
                                                  *    ['metas', 'id', meta.id]
                                                  *],
                                                  *'test'
                                                  */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$2(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var eventOpts = (event.currentTarget || event.target).dataset.eventOpts;
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName));

        }
      });
    }
  });
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref2)


{var mocks = _ref2.mocks,initRefs = _ref2.initRefs;
  _vue.default.prototype.mpHost = "app-plus";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属
  var parentVm = $children.find(function (childVm) {return childVm.$scope._$vueId === vuePid;});
  if (parentVm) {
    return parentVm;
  }
  // 反向递归查找
  for (var i = $children.length - 1; i >= 0; i--) {
    parentVm = findVmByVueId($children[i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref3 =



  event.detail || event.value,vuePid = _ref3.vuePid,vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

var hooks$1 = [
'onUniNViewMessage'];


function parseApp$1(vm) {
  var appOptions = parseApp(vm);

  initHooks(appOptions, hooks$1);

  return appOptions;
}

function createApp(vm) {
  App(parseApp$1(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage$$1 = _ref4.isPage,initRelation$$1 = _ref4.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var componentOptions = {
    options: {
      multipleSlots: true,
      addGlobalClass: true },

    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage$$1.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation$$1.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (isPage$$1) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function parseComponent$1(vueComponentOptions) {
  var componentOptions = parseComponent(vueComponentOptions);

  componentOptions.methods.$getAppWebview = function () {
    return plus.webview.getWebviewById("".concat(this.__wxWebviewId__));
  };
  return componentOptions;
}

var hooks$2 = [
'onShow',
'onHide',
'onUnload'];


hooks$2.push.apply(hooks$2, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref5)


{var isPage = _ref5.isPage,initRelation = _ref5.initRelation;
  var pageOptions = parseComponent$1(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });


  initHooks(pageOptions.methods, hooks$2);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$3 = [
'onBackPress',
'onNavigationBarButtonTap',
'onNavigationBarSearchInputChanged',
'onNavigationBarSearchInputConfirmed',
'onNavigationBarSearchInputClicked'];


function parsePage$1(vuePageOptions) {
  var pageOptions = parsePage(vuePageOptions);

  initHooks(pageOptions.methods, hooks$3);

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage$1(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent$1(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (name === 'upx2px') {
        return upx2px;
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    } });

} else {
  uni.upx2px = upx2px;

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

{
  if (typeof global !== 'undefined') {
    global.UniEmitter = eventApi;
  }
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(vm._getFormData || (vm.$parent && vm.$parent.__next_tick_pending)){
              return
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
    // 确保当前 vm 所有数据被同步
    var dataKeys = [].concat(
        Object.keys(vm._data || {}),
        Object.keys(vm._computedWatchers || {}));

    var ret = dataKeys.reduce(function(ret, key) {
        ret[key] = vm[key];
        return ret
    }, Object.create(null));
    //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
    Object.assign(ret, vm.$mp.data || {});
    if (
        Array.isArray(vm.$options.behaviors) &&
        vm.$options.behaviors.indexOf('uni://form-field') !== -1
    ) { //form-field
        ret['name'] = vm.name;
        ret['value'] = vm.value;
    }
    return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
    var this$1 = this;

    if (vnode === null) { //destroy
        return
    }
    if (this.mpType === 'page' || this.mpType === 'component') {
        var mpInstance = this.$scope;
        var data = cloneWithData(this);
        data.__webviewId__ = mpInstance.data.__webviewId__;
        var mpData = Object.create(null);
        Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
            mpData[key] = mpInstance.data[key];
        });
        var diffData = diff(data, mpData);
        if (Object.keys(diffData).length) {
            if (Object({"VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
                console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
                    ']差量更新',
                    JSON.stringify(diffData));
            }
            this.__next_tick_pending = true;
            mpInstance.setData(diffData, function () {
                this$1.__next_tick_pending = false;
                flushCallbacks$1(this$1);
            });
        } else {
            flushCallbacks$1(this);
        }
    }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
    var parts = path.split('.');
    var key = parts[0];
    if (key.indexOf('__$n') === 0) { //number index
        key = parseInt(key.replace('__$n', ''));
    }
    if (parts.length === 1) {
        return obj[key]
    }
    return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

    var oldEmit = Vue.prototype.$emit;

    Vue.prototype.$emit = function(event) {
        if (this.$scope && event) {
            this.$scope['triggerEvent'](event, {
                __args__: toArray(arguments, 1)
            });
        }
        return oldEmit.apply(this, arguments)
    };
    
    Vue.prototype.$nextTick = function (fn) {
      return nextTick$1(this, fn)
    };

    MP_METHODS.forEach(function (method) {
        Vue.prototype[method] = function(args) {
            if (this.$scope) {
                return this.$scope[method](args)
            }
        };
    });

    Vue.prototype.__init_provide = initProvide;

    Vue.prototype.__init_injections = initInjections;

    Vue.prototype.__call_hook = function(hook, args) {
        var vm = this;
        // #7573 disable dep collection when invoking lifecycle hooks
        pushTarget();
        var handlers = vm.$options[hook];
        var info = hook + " hook";
        var ret;
        if (handlers) {
            for (var i = 0, j = handlers.length; i < j; i++) {
                ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
            }
        }
        if (vm._hasHookEvent) {
            vm.$emit('hook:' + hook);
        }
        popTarget();
        return ret
    };

    Vue.prototype.__set_model = function(target, key, value, modifiers) {
        if (Array.isArray(modifiers)) {
            if (modifiers.indexOf('trim') !== -1) {
                value = value.trim();
            }
            if (modifiers.indexOf('number') !== -1) {
                value = this._n(value);
            }
        }
        if(!target){
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__set_sync = function(target, key, value) {
        if(!target){
            target = this;
        }
        target[key] = value;
    };

    Vue.prototype.__get_orig = function(item) {
        if (isPlainObject(item)) {
            return item['$orig'] || item
        }
        return item
    };

    Vue.prototype.__get_value = function(dataPath, target) {
        return getTarget(target || this, dataPath)
    };


    Vue.prototype.__get_class = function(dynamicClass, staticClass) {
        return renderClass(staticClass, dynamicClass)
    };

    Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
        if (!dynamicStyle && !staticStyle) {
            return ''
        }
        var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
        var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
        return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
    };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/process.js":
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
	setTimeout(fn, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\js-md5\\build\\md5.min.js":
/*!****************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/js_sdk/js-md5/build/md5.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__; /**
               * [js-md5]{@link https://github.com/emn178/js-md5}
               *
               * @namespace md5
               * @version 0.7.3
               * @author Chen, Yi-Cyuan [emn178@gmail.com]
               * @copyright Chen, Yi-Cyuan 2014-2017
               * @license MIT
               */
!function () {"use strict";function t(t) {if (t) d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0, this.blocks = d, this.buffer8 = l;else if (a) {var r = new ArrayBuffer(68);this.buffer8 = new Uint8Array(r), this.blocks = new Uint32Array(r);} else this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;}var r = "input is invalid type",e = "object" == typeof window,i = e ? window : {};i.JS_MD5_NO_WINDOW && (e = !1);var s = !e && "object" == typeof self,h = !i.JS_MD5_NO_NODE_JS && "object" == typeof process && process.versions && process.versions.node;h ? i = global : s && (i = self);var f = !i.JS_MD5_NO_COMMON_JS && "object" == typeof module && module.exports,o =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js"),a = !i.JS_MD5_NO_ARRAY_BUFFER && "undefined" != typeof ArrayBuffer,n = "0123456789abcdef".split(""),u = [128, 32768, 8388608, -2147483648],y = [0, 8, 16, 24],c = ["hex", "array", "digest", "buffer", "arrayBuffer", "base64"],p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d = [],l;if (a) {var A = new ArrayBuffer(68);l = new Uint8Array(A), d = new Uint32Array(A);}!i.JS_MD5_NO_NODE_JS && Array.isArray || (Array.isArray = function (t) {return "[object Array]" === Object.prototype.toString.call(t);}), !a || !i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function (t) {return "object" == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;});var b = function b(r) {return function (e) {return new t(!0).update(e)[r]();};},v = function v() {var r = b("hex");h && (r = w(r)), r.create = function () {return new t();}, r.update = function (t) {return r.create().update(t);};for (var e = 0; e < c.length; ++e) {var i = c[e];r[i] = b(i);}return r;},w = function w(t) {var e = eval("require('crypto')"),i = eval("require('buffer').Buffer"),s = function s(_s) {if ("string" == typeof _s) return e.createHash("md5").update(_s, "utf8").digest("hex");if (null === _s || void 0 === _s) throw r;return _s.constructor === ArrayBuffer && (_s = new Uint8Array(_s)), Array.isArray(_s) || ArrayBuffer.isView(_s) || _s.constructor === i ? e.createHash("md5").update(new i(_s)).digest("hex") : t(_s);};return s;};t.prototype.update = function (t) {if (!this.finalized) {var e,i = typeof t;if ("string" !== i) {if ("object" !== i) throw r;if (null === t) throw r;if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t);else if (!(Array.isArray(t) || a && ArrayBuffer.isView(t))) throw r;e = !0;}for (var s, h, f = 0, o = t.length, n = this.blocks, u = this.buffer8; f < o;) {if (this.hashed && (this.hashed = !1, n[0] = n[16], n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0), e) {if (a) for (h = this.start; f < o && h < 64; ++f) {u[h++] = t[f];} else for (h = this.start; f < o && h < 64; ++f) {n[h >> 2] |= t[f] << y[3 & h++];}} else if (a) for (h = this.start; f < o && h < 64; ++f) {(s = t.charCodeAt(f)) < 128 ? u[h++] = s : s < 2048 ? (u[h++] = 192 | s >> 6, u[h++] = 128 | 63 & s) : s < 55296 || s >= 57344 ? (u[h++] = 224 | s >> 12, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), u[h++] = 240 | s >> 18, u[h++] = 128 | s >> 12 & 63, u[h++] = 128 | s >> 6 & 63, u[h++] = 128 | 63 & s);} else for (h = this.start; f < o && h < 64; ++f) {(s = t.charCodeAt(f)) < 128 ? n[h >> 2] |= s << y[3 & h++] : s < 2048 ? (n[h >> 2] |= (192 | s >> 6) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : s < 55296 || s >= 57344 ? (n[h >> 2] |= (224 | s >> 12) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]) : (s = 65536 + ((1023 & s) << 10 | 1023 & t.charCodeAt(++f)), n[h >> 2] |= (240 | s >> 18) << y[3 & h++], n[h >> 2] |= (128 | s >> 12 & 63) << y[3 & h++], n[h >> 2] |= (128 | s >> 6 & 63) << y[3 & h++], n[h >> 2] |= (128 | 63 & s) << y[3 & h++]);}this.lastByteIndex = h, this.bytes += h - this.start, h >= 64 ? (this.start = h - 64, this.hash(), this.hashed = !0) : this.start = h;}return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;}}, t.prototype.finalize = function () {if (!this.finalized) {this.finalized = !0;var t = this.blocks,r = this.lastByteIndex;t[r >> 2] |= u[3 & r], r >= 56 && (this.hashed || this.hash(), t[0] = t[16], t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.bytes << 3, t[15] = this.hBytes << 3 | this.bytes >>> 29, this.hash();}}, t.prototype.hash = function () {var t,r,e,i,s,h,f = this.blocks;this.first ? r = ((r = ((t = ((t = f[0] - 680876937) << 7 | t >>> 25) - 271733879 << 0) ^ (e = ((e = (-271733879 ^ (i = ((i = (-1732584194 ^ 2004318071 & t) + f[1] - 117830708) << 12 | i >>> 20) + t << 0) & (-271733879 ^ t)) + f[2] - 1126478375) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1316259209) << 22 | r >>> 10) + e << 0 : (t = this.h0, r = this.h1, e = this.h2, r = ((r += ((t = ((t += ((i = this.h3) ^ r & (e ^ i)) + f[0] - 680876936) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[1] - 389564586) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[2] + 606105819) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[3] - 1044525330) << 22 | r >>> 10) + e << 0), r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[4] - 176418897) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[5] + 1200080426) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[6] - 1473231341) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[7] - 45705983) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[8] + 1770035416) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[9] - 1958414417) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[10] - 42063) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[11] - 1990404162) << 22 | r >>> 10) + e << 0, r = ((r += ((t = ((t += (i ^ r & (e ^ i)) + f[12] + 1804603682) << 7 | t >>> 25) + r << 0) ^ (e = ((e += (r ^ (i = ((i += (e ^ t & (r ^ e)) + f[13] - 40341101) << 12 | i >>> 20) + t << 0) & (t ^ r)) + f[14] - 1502002290) << 17 | e >>> 15) + i << 0) & (i ^ t)) + f[15] + 1236535329) << 22 | r >>> 10) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[1] - 165796510) << 5 | t >>> 27) + r << 0) ^ r)) + f[6] - 1069501632) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[11] + 643717713) << 14 | e >>> 18) + i << 0) ^ i)) + f[0] - 373897302) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[5] - 701558691) << 5 | t >>> 27) + r << 0) ^ r)) + f[10] + 38016083) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[15] - 660478335) << 14 | e >>> 18) + i << 0) ^ i)) + f[4] - 405537848) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[9] + 568446438) << 5 | t >>> 27) + r << 0) ^ r)) + f[14] - 1019803690) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[3] - 187363961) << 14 | e >>> 18) + i << 0) ^ i)) + f[8] + 1163531501) << 20 | r >>> 12) + e << 0, r = ((r += ((i = ((i += (r ^ e & ((t = ((t += (e ^ i & (r ^ e)) + f[13] - 1444681467) << 5 | t >>> 27) + r << 0) ^ r)) + f[2] - 51403784) << 9 | i >>> 23) + t << 0) ^ t & ((e = ((e += (t ^ r & (i ^ t)) + f[7] + 1735328473) << 14 | e >>> 18) + i << 0) ^ i)) + f[12] - 1926607734) << 20 | r >>> 12) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[5] - 378558) << 4 | t >>> 28) + r << 0)) + f[8] - 2022574463) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[11] + 1839030562) << 16 | e >>> 16) + i << 0)) + f[14] - 35309556) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[1] - 1530992060) << 4 | t >>> 28) + r << 0)) + f[4] + 1272893353) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[7] - 155497632) << 16 | e >>> 16) + i << 0)) + f[10] - 1094730640) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[13] + 681279174) << 4 | t >>> 28) + r << 0)) + f[0] - 358537222) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[3] - 722521979) << 16 | e >>> 16) + i << 0)) + f[6] + 76029189) << 23 | r >>> 9) + e << 0, r = ((r += ((h = (i = ((i += ((s = r ^ e) ^ (t = ((t += (s ^ i) + f[9] - 640364487) << 4 | t >>> 28) + r << 0)) + f[12] - 421815835) << 11 | i >>> 21) + t << 0) ^ t) ^ (e = ((e += (h ^ r) + f[15] + 530742520) << 16 | e >>> 16) + i << 0)) + f[2] - 995338651) << 23 | r >>> 9) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[0] - 198630844) << 6 | t >>> 26) + r << 0) | ~e)) + f[7] + 1126891415) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[14] - 1416354905) << 15 | e >>> 17) + i << 0) | ~t)) + f[5] - 57434055) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[12] + 1700485571) << 6 | t >>> 26) + r << 0) | ~e)) + f[3] - 1894986606) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[10] - 1051523) << 15 | e >>> 17) + i << 0) | ~t)) + f[1] - 2054922799) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[8] + 1873313359) << 6 | t >>> 26) + r << 0) | ~e)) + f[15] - 30611744) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[6] - 1560198380) << 15 | e >>> 17) + i << 0) | ~t)) + f[13] + 1309151649) << 21 | r >>> 11) + e << 0, r = ((r += ((i = ((i += (r ^ ((t = ((t += (e ^ (r | ~i)) + f[4] - 145523070) << 6 | t >>> 26) + r << 0) | ~e)) + f[11] - 1120210379) << 10 | i >>> 22) + t << 0) ^ ((e = ((e += (t ^ (i | ~r)) + f[2] + 718787259) << 15 | e >>> 17) + i << 0) | ~t)) + f[9] - 343485551) << 21 | r >>> 11) + e << 0, this.first ? (this.h0 = t + 1732584193 << 0, this.h1 = r - 271733879 << 0, this.h2 = e - 1732584194 << 0, this.h3 = i + 271733878 << 0, this.first = !1) : (this.h0 = this.h0 + t << 0, this.h1 = this.h1 + r << 0, this.h2 = this.h2 + e << 0, this.h3 = this.h3 + i << 0);}, t.prototype.hex = function () {this.finalize();var t = this.h0,r = this.h1,e = this.h2,i = this.h3;return n[t >> 4 & 15] + n[15 & t] + n[t >> 12 & 15] + n[t >> 8 & 15] + n[t >> 20 & 15] + n[t >> 16 & 15] + n[t >> 28 & 15] + n[t >> 24 & 15] + n[r >> 4 & 15] + n[15 & r] + n[r >> 12 & 15] + n[r >> 8 & 15] + n[r >> 20 & 15] + n[r >> 16 & 15] + n[r >> 28 & 15] + n[r >> 24 & 15] + n[e >> 4 & 15] + n[15 & e] + n[e >> 12 & 15] + n[e >> 8 & 15] + n[e >> 20 & 15] + n[e >> 16 & 15] + n[e >> 28 & 15] + n[e >> 24 & 15] + n[i >> 4 & 15] + n[15 & i] + n[i >> 12 & 15] + n[i >> 8 & 15] + n[i >> 20 & 15] + n[i >> 16 & 15] + n[i >> 28 & 15] + n[i >> 24 & 15];}, t.prototype.toString = t.prototype.hex, t.prototype.digest = function () {this.finalize();var t = this.h0,r = this.h1,e = this.h2,i = this.h3;return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & i, i >> 8 & 255, i >> 16 & 255, i >> 24 & 255];}, t.prototype.array = t.prototype.digest, t.prototype.arrayBuffer = function () {this.finalize();var t = new ArrayBuffer(16),r = new Uint32Array(t);return r[0] = this.h0, r[1] = this.h1, r[2] = this.h2, r[3] = this.h3, t;}, t.prototype.buffer = t.prototype.arrayBuffer, t.prototype.base64 = function () {for (var t, r, e, i = "", s = this.array(), h = 0; h < 15;) {t = s[h++], r = s[h++], e = s[h++], i += p[t >>> 2] + p[63 & (t << 4 | r >>> 4)] + p[63 & (r << 2 | e >>> 6)] + p[63 & e];}return t = s[h], i += p[t >>> 2] + p[t << 4 & 63] + "==";};var _ = v();f ? module.exports = _ : (i.md5 = _, o && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {return _;}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js"), __webpack_require__(/*! (webpack)/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\js-md5\\src\\md5.js":
/*!**********************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/js_sdk/js-md5/src/md5.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__; /**
               * [js-md5]{@link https://github.com/emn178/js-md5}
               *
               * @namespace md5
               * @version 0.7.3
               * @author Chen, Yi-Cyuan [emn178@gmail.com]
               * @copyright Chen, Yi-Cyuan 2014-2017
               * @license MIT
               */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = typeof window === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && typeof self === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  var blocks = [],buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
     * @method hex
     * @memberof md5
     * @description Output hash as hex string
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} Hex string
     * @example
     * md5.hex('The quick brown fox jumps over the lazy dog');
     * // equal to
     * md5('The quick brown fox jumps over the lazy dog');
     */
  /**
         * @method digest
         * @memberof md5
         * @description Output hash as bytes array
         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
         * @returns {Array} Bytes array
         * @example
         * md5.digest('The quick brown fox jumps over the lazy dog');
         */
  /**
             * @method array
             * @memberof md5
             * @description Output hash as bytes array
             * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
             * @returns {Array} Bytes array
             * @example
             * md5.array('The quick brown fox jumps over the lazy dog');
             */
  /**
                 * @method arrayBuffer
                 * @memberof md5
                 * @description Output hash as ArrayBuffer
                 * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                 * @returns {ArrayBuffer} ArrayBuffer
                 * @example
                 * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
                 */
  /**
                     * @method buffer
                     * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
                     * @memberof md5
                     * @description Output hash as ArrayBuffer
                     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                     * @returns {ArrayBuffer} ArrayBuffer
                     * @example
                     * md5.buffer('The quick brown fox jumps over the lazy dog');
                     */
  /**
                         * @method base64
                         * @memberof md5
                         * @description Output hash as base64 string
                         * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
                         * @returns {String} base64 string
                         * @example
                         * md5.base64('The quick brown fox jumps over the lazy dog');
                         */
  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
      * @method create
      * @memberof md5
      * @description Create Md5 object
      * @returns {Md5} Md5 object.
      * @example
      * var hash = md5.create();
      */
  /**
          * @method update
          * @memberof md5
          * @description Create and update Md5 object
          * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
          * @returns {Md5} Md5 object.
          * @example
          * var hash = md5.update('The quick brown fox jumps over the lazy dog');
          * // equal to
          * var hash = md5.create();
          * hash.update('The quick brown fox jumps over the lazy dog');
          */
  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) ||
      message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
      * Md5 class
      * @class Md5
      * @description This is internal class.
      * @see {@link md5.create}
      */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
     * @method update
     * @memberof Md5
     * @instance
     * @description Update hash
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {Md5} Md5 object.
     * @see {@link md5.update}
     */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,type = typeof message;
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code,index = 0,i,length = message.length,blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a,b,c,d,bc,da,blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
      * @method hex
      * @memberof Md5
      * @instance
      * @description Output hash as hex string
      * @returns {String} Hex string
      * @see {@link md5.hex}
      * @example
      * hash.hex();
      */
  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0,h1 = this.h1,h2 = this.h2,h3 = this.h3;

    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] +
    HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] +
    HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] +
    HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] +
    HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] +
    HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] +
    HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] +
    HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] +
    HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] +
    HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] +
    HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] +
    HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] +
    HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] +
    HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] +
    HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] +
    HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };

  /**
      * @method toString
      * @memberof Md5
      * @instance
      * @description Output hash as hex string
      * @returns {String} Hex string
      * @see {@link md5.hex}
      * @example
      * hash.toString();
      */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
                                               * @method digest
                                               * @memberof Md5
                                               * @instance
                                               * @description Output hash as bytes array
                                               * @returns {Array} Bytes array
                                               * @see {@link md5.digest}
                                               * @example
                                               * hash.digest();
                                               */
  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0,h1 = this.h1,h2 = this.h2,h3 = this.h3;
    return [
    h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF,
    h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF,
    h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF,
    h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];

  };

  /**
      * @method array
      * @memberof Md5
      * @instance
      * @description Output hash as bytes array
      * @returns {Array} Bytes array
      * @see {@link md5.array}
      * @example
      * hash.array();
      */
  Md5.prototype.array = Md5.prototype.digest;

  /**
                                               * @method arrayBuffer
                                               * @memberof Md5
                                               * @instance
                                               * @description Output hash as ArrayBuffer
                                               * @returns {ArrayBuffer} ArrayBuffer
                                               * @see {@link md5.arrayBuffer}
                                               * @example
                                               * hash.arrayBuffer();
                                               */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
      * @method buffer
      * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
      * @memberof Md5
      * @instance
      * @description Output hash as ArrayBuffer
      * @returns {ArrayBuffer} ArrayBuffer
      * @see {@link md5.buffer}
      * @example
      * hash.buffer();
      */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
                                                     * @method base64
                                                     * @memberof Md5
                                                     * @instance
                                                     * @description Output hash as base64 string
                                                     * @returns {String} base64 string
                                                     * @see {@link md5.base64}
                                                     * @example
                                                     * hash.base64();
                                                     */
  Md5.prototype.base64 = function () {
    var v1,v2,v3,base64Str = '',bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
      BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] +
      BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] +
      BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] +
    BASE64_ENCODE_CHAR[v1 << 4 & 63] +
    '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
           * @method md5
           * @description Md5 hash function, export to global in browsers.
           * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
           * @returns {String} md5 hashes
           * @example
           * md5(''); // d41d8cd98f00b204e9800998ecf8427e
           * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
           * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
           *
           * // It also supports UTF-8 encoding
           * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
           *
           * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
           * md5([]); // d41d8cd98f00b204e9800998ecf8427e
           * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
           */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ "./node_modules/node-libs-browser/mock/process.js"), __webpack_require__(/*! (webpack)/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
!function (t, e) { true ? module.exports = e() : undefined;}(void 0, function () {return function (t) {function e(o) {if (n[o]) return n[o].exports;var i = n[o] = { exports: {}, id: o, loaded: !1 };return t[o].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;}var n = {};return e.m = t, e.c = n, e.p = "", e(0);}([function (t, e, n) {t.exports = n(18);}, function (t, e, n) {(function (o) {function i() {return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31;}function s() {var t = arguments,n = this.useColors;if (t[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + t[0] + (n ? "%c " : " ") + "+" + e.humanize(this.diff), !n) return t;var o = "color: " + this.color;t = [t[0], o, "color: inherit"].concat(Array.prototype.slice.call(t, 1));var i = 0,s = 0;return t[0].replace(/%[a-z%]/g, function (t) {"%%" !== t && (i++, "%c" === t && (s = i));}), t.splice(s, 0, o), t;}function r() {return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);}function a(t) {try {null == t ? e.storage.removeItem("debug") : e.storage.debug = t;} catch (t) {}}function c() {try {return e.storage.debug;} catch (t) {}if ("undefined" != typeof o && "env" in o) return o.env.DEBUG;}function p() {try {return window.localStorage;} catch (t) {}}e = t.exports = n(34), e.log = r, e.formatArgs = s, e.save = a, e.load = c, e.useColors = i, e.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : p(), e.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], e.formatters.j = function (t) {try {return JSON.stringify(t);} catch (t) {return "[UnexpectedJSONParseError]: " + t.message;}}, e.enable(c());}).call(e, n(38));}, function (t, e, n) {t.exports = n(25);}, function (t, e, n) {function o(t) {if (t) return i(t);}function i(t) {for (var e in o.prototype) {t[e] = o.prototype[e];}return t;}t.exports = o, o.prototype.on = o.prototype.addEventListener = function (t, e) {return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this;}, o.prototype.once = function (t, e) {function n() {this.off(t, n), e.apply(this, arguments);}return n.fn = e, this.on(t, n), this;}, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (t, e) {if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks["$" + t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks["$" + t], this;for (var o, i = 0; i < n.length; i++) {if (o = n[i], o === e || o.fn === e) {n.splice(i, 1);break;}}return this;}, o.prototype.emit = function (t) {this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),n = this._callbacks["$" + t];if (n) {n = n.slice(0);for (var o = 0, i = n.length; o < i; ++o) {n[o].apply(this, e);}}return this;}, o.prototype.listeners = function (t) {return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [];}, o.prototype.hasListeners = function (t) {return !!this.listeners(t).length;};}, function (t, e) {var n = { SDK_VERSION: "2.6.0", WSS_ADDRESS: "wss://ws.im.jiguang.cn", UPLOAD_FILE: "https://sdk.im.jiguang.cn/resource", ALLOW_MSG_TYPE: ["text", "image", "file", "location", "custom"], LOGIN_OUT_EVENT: [1, 2], FROM_PLATFORM: "x", ACK_TIMEOUT: 5e3, RESP_TIMEOUT: 3e4, RETRY_TIMES: 5, SYNC_INTERVAL: 15e4, RECEIPT_REPORT_INTERVAL: 2e3, RECEIPT_REPORT_MAX_SIZE: 50, EVENT_KEY: "eve-k-", CONVERSATION_KEY: "conversations-", SYNC_TYPE_OPEN: 1, SYNC_TYPE_CLOSE: 0, FRIEND_INVITE: 1, FRIEND_INVITED: 2, PLAT_CHANNEL: "w", EVENTS: { ACK: "ack", INIT: "c_init", LOGIN: "login", REGISTER: "register", GET_USER_INFO: "get_across_user_info", GET_ACROSS_USER_INFO: "get_across_user_info", S_SINGLE_TEXT: "s_across_single_text", S_SINGLE_TEXT_: "s_single_text", MSG_SYNC: "msg_sync", MSG_RECV: "msg_recv", MSG_RECV_V2: "msg_recv_v2", SEND_GROUP_MSG: "send_group_msg", CREATE_GROUP: "create_group", GET_GROUPS_LIST: "get_groups_list", GET_GROUP_INFO: "get_group_info", ADD_GROUP_MEMBER: "add_group_member", ADD_ACROSS_GROUP_MEMBER: "add_across_group_member", DEL_GROUP_MEMBER: "del_group_member", DEL_ACROSS_GROUP_MEMBER: "del_across_group_member", GET_GROUP_MEMBERS: "get_group_members", UPDATE_GROUP_INFO: "update_group_info", EXIT_GROUP: "exit_group", EVENT_NOTIFICATION: "event_notification", GET_CONVERSATIONS: "get_conversations", GET_UPLOAD_TOKEN: "get_upload_token", NO_DISTURB: "no_disturb", ADD_MSG_NO_DISTURB_SINGLE: "add_msg_no_disturb_single", DELETE_MSG_NO_DISTURB_SINGLE: "delete_msg_no_disturb_single", ADD_MSG_NO_DISTURB_GROUP: "add_msg_no_disturb_group", DELETE_MSG_NO_DISTURB_GROUP: "delete_msg_no_disturb_group", ADD_MSG_NO_DISTURB_GLOBAL: "add_msg_no_disturb_global", DELETE_MSG_NO_DISTURB_GLOBAL: "delete_msg_no_disturb_global", DISCONNECT: "disconnect", GET_BLACK_LIST: "get_black_list", ADD_BLACK_LIST: "add_black_list", DEL_BLACK_LIST: "del_black_list", UPDATE_SELF_INFO: "update_user_inf", UPDATE_SELF_PWD: "update_user_pwd", ADD_MSG_SHIELD_GROUP: "add_msg_shield_group", DEL_MSG_SHIELD_GROUP: "del_msg_shield_group", ADD_FRIEND: "add_friend", DEL_FRIEND: "del_friend", UPDATE_FRIEND_MEMO: "update_friend_memo", GET_FRIEND_LIST: "get_friend_list", SYNC_CHECK: "sync_check", SYNC_CONVERSATION: "sync_conversation", SYNC_CONVERSATION_ACK: "sync_conversation_ack", MSG_RETRACT: "msg_retract", GET_RESOURCE: "get_resource", LIST_SHIELD_GROUP: "list_shield_group", SYNC_EVENT_CHECK: "sync_event_check", SYNC_EVENT: "sync_event", SYNC_EVENT_ACK: "sync_event_ack", RECEIPT_REPORT: "receipt_report", SYNC_RECEIPT_ACK: "sync_receipt_ack", SYNC_RECEIPT: "sync_receipt", RECEIPT_CHANGE: "receipt_change", UNREAD_GROUP_COUNT: "unread_group_count", UNREAD_SINGLE_COUNT: "unread_single_count", MSG_UNREAD_LIST: "msg_unread_list", TRANS_MSG_SINGLE: "trans_msg_single", TRANS_MSG_GROUP: "trans_msg_group", TRANS_MSG_PLATFORM: "trans_msg_platform", TRANS_MSG_REC: "trans_msg_rec", ADMIN_ADD_GROUP_MEMBER: "admin_add_group_member", APPLY_JOIN_GROUP: "apply_join_group", ROOM_LIST: "room_list", ROOM_LIST_SELF: "room_list_self", JOIN_ROOM: "join_room", EXIT_ROOM: "exit_room", ROOM_INFO: "room_info", SEND_ROOM_MSG: "send_room_msg", ROOM_MSG_SYNC: "room_msg_sync", GROUP_MEM_SILENCE: "group_mem_silence", ROOM_MSG_SYNC_HIS: "room_msg_sync_his", DISSOLVE_GROUP: "dissolve_group", ADD_GROUP_KEEPER: "add_group_keeper", DEL_GROUP_KEEPER: "del_group_keeper", CHANGE_GROUP_ADMIN: "change_group_admin", PUBLIC_GROUP_LIST: "public_group_list" } };t.exports = n;}, function (t, e, n) {function o() {}function i(t) {var n = "",o = !1;return n += t.type, e.BINARY_EVENT != t.type && e.BINARY_ACK != t.type || (n += t.attachments, n += "-"), t.nsp && "/" != t.nsp && (o = !0, n += t.nsp), null != t.id && (o && (n += ",", o = !1), n += t.id), null != t.data && (o && (n += ","), n += JSON.stringify(t.data)), h("encoded %j as %s", t, n), n;}function s(t, e) {function n(t) {var n = f.deconstructPacket(t),o = i(n.packet),s = n.buffers;s.unshift(o), e(s);}f.removeBlobs(t, n);}function r() {this.reconstructor = null;}function a(t) {var n = {},o = 0;if (n.type = Number(t.charAt(0)), null == e.types[n.type]) return u();if (e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type) {for (var i = ""; "-" != t.charAt(++o) && (i += t.charAt(o), o != t.length);) {;}if (i != Number(i) || "-" != t.charAt(o)) throw new Error("Illegal attachments");n.attachments = Number(i);}if ("/" == t.charAt(o + 1)) for (n.nsp = ""; ++o;) {var s = t.charAt(o);if ("," == s) break;if (n.nsp += s, o == t.length) break;} else n.nsp = "/";var r = t.charAt(o + 1);if ("" !== r && Number(r) == r) {for (n.id = ""; ++o;) {var s = t.charAt(o);if (null == s || Number(s) != s) {--o;break;}if (n.id += t.charAt(o), o == t.length) break;}n.id = Number(n.id);}return t.charAt(++o) && (n = c(n, t.substr(o))), h("decoded %s as %j", t, n), n;}function c(t, e) {try {t.data = JSON.parse(e);} catch (t) {return u();}return t;}function p(t) {this.reconPack = t, this.buffers = [];}function u(t) {return { type: e.ERROR, data: "parser error" };}var h = n(1)("socket.io-parser"),_ = n(40),f = n(39),d = n(16);e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = o, e.Decoder = r, o.prototype.encode = function (t, n) {if (h("encoding packet %j", t), e.BINARY_EVENT == t.type || e.BINARY_ACK == t.type) s(t, n);else {var o = i(t);n([o]);}}, _(r.prototype), r.prototype.add = function (t) {var n;if ("string" == typeof t) n = a(t), e.BINARY_EVENT == n.type || e.BINARY_ACK == n.type ? (this.reconstructor = new p(n), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", n)) : this.emit("decoded", n);else {if (!d(t) && !t.base64) throw new Error("Unknown type: " + t);if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");n = this.reconstructor.takeBinaryData(t), n && (this.reconstructor = null, this.emit("decoded", n));}}, r.prototype.destroy = function () {this.reconstructor && this.reconstructor.finishedReconstruction();}, p.prototype.takeBinaryData = function (t) {if (this.buffers.push(t), this.buffers.length == this.reconPack.attachments) {var e = f.reconstructPacket(this.reconPack, this.buffers);return this.finishedReconstruction(), e;}return null;}, p.prototype.finishedReconstruction = function () {this.reconPack = null, this.buffers = [];};}, function (t, e, n) {function o(t, e) {return this instanceof o ? (t && "object" == typeof t && (e = t, t = void 0), e = e || {}, e.path = e.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = e, this.reconnection(e.reconnection !== !1), this.reconnectionAttempts(e.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e.reconnectionDelay || 2e3), this.reconnectionDelayMax(e.reconnectionDelayMax || 2e3), this.randomizationFactor(e.randomizationFactor || .5), this.backoff = new _({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e.timeout ? 3e3 : e.timeout), this.readyState = "closed", this.uri = t, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new a.Encoder(), this.decoder = new a.Decoder(), this.autoConnect = e.autoConnect !== !1, void (this.autoConnect && this.open())) : new o(t, e);}var i = n(27),s = n(8),r = n(3),a = n(5),c = n(7),p = n(11),u = n(1)("socket.io-client:manager"),h = n(12),_ = n(32),f = Object.prototype.hasOwnProperty;t.exports = o, o.prototype.emitAll = function () {this.emit.apply(this, arguments);for (var t in this.nsps) {f.call(this.nsps, t) && this.nsps[t].emit.apply(this.nsps[t], arguments);}}, o.prototype.updateSocketIds = function () {for (var t in this.nsps) {f.call(this.nsps, t) && (this.nsps[t].id = this.engine.id);}}, r(o.prototype), o.prototype.reconnection = function (t) {return arguments.length ? (this._reconnection = !!t, this) : this._reconnection;}, o.prototype.reconnectionAttempts = function (t) {return arguments.length ? (this._reconnectionAttempts = t, this) : this._reconnectionAttempts;}, o.prototype.reconnectionDelay = function (t) {return arguments.length ? (this._reconnectionDelay = t, this.backoff && this.backoff.setMin(t), this) : this._reconnectionDelay;}, o.prototype.randomizationFactor = function (t) {return arguments.length ? (this._randomizationFactor = t, this.backoff && this.backoff.setJitter(t), this) : this._randomizationFactor;}, o.prototype.reconnectionDelayMax = function (t) {return arguments.length ? (this._reconnectionDelayMax = t, this.backoff && this.backoff.setMax(t), this) : this._reconnectionDelayMax;}, o.prototype.timeout = function (t) {return arguments.length ? (this._timeout = t, this) : this._timeout;}, o.prototype.maybeReconnectOnOpen = function () {!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();}, o.prototype.open = o.prototype.connect = function (t, e) {if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;u("opening %s", this.uri), this.engine = i(this.uri, this.opts);var n = this.engine,o = this;this.readyState = "opening", this.skipReconnect = !1;var s = c(n, "open", function () {o.onopen(), t && t();}),r = c(n, "error", function (e) {if (u("connect_error"), o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", e), t) {var n = new Error("Connection error");n.data = e, t(n);} else o.maybeReconnectOnOpen();});if (!1 !== this._timeout) {var a = this._timeout;u("connect attempt will timeout after %d", a);var p = setTimeout(function () {u("connect attempt timed out after %d", a), s.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", a);}, a);this.subs.push({ destroy: function destroy() {clearTimeout(p);} });}return this.subs.push(s), this.subs.push(r), this;}, o.prototype.onopen = function () {u("open"), this.cleanup(), this.readyState = "open", this.emit("open");var t = this.engine;this.subs.push(c(t, "data", p(this, "ondata"))), this.subs.push(c(t, "ping", p(this, "onping"))), this.subs.push(c(t, "pong", p(this, "onpong"))), this.subs.push(c(t, "error", p(this, "onerror"))), this.subs.push(c(t, "close", p(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", p(this, "ondecoded")));}, o.prototype.onping = function () {this.lastPing = new Date(), this.emitAll("ping");}, o.prototype.onpong = function () {this.emitAll("pong", new Date() - this.lastPing);}, o.prototype.ondata = function (t) {this.decoder.add(t);}, o.prototype.ondecoded = function (t) {this.emit("packet", t);}, o.prototype.onerror = function (t) {u("error", t), this.emitAll("error", t);}, o.prototype.socket = function (t, e) {function n() {~h(i.connecting, o) || i.connecting.push(o);}var o = this.nsps[t];if (!o) {o = new s(this, t, e), this.nsps[t] = o;var i = this;o.on("connecting", n), o.on("connect", function () {o.id = i.engine.id;}), this.autoConnect && n();}return o;}, o.prototype.destroy = function (t) {var e = h(this.connecting, t);~e && this.connecting.splice(e, 1), this.connecting.length || this.close();}, o.prototype.packet = function (t) {u("writing packet %j", t);var e = this;t.query && 0 === t.type && (t.nsp += "?" + t.query), e.encoding ? e.packetBuffer.push(t) : (e.encoding = !0, this.encoder.encode(t, function (n) {for (var o = 0; o < n.length; o++) {e.engine.write(n[o], t.options);}e.encoding = !1, e.processPacketQueue();}));}, o.prototype.processPacketQueue = function () {if (this.packetBuffer.length > 0 && !this.encoding) {var t = this.packetBuffer.shift();this.packet(t);}}, o.prototype.cleanup = function () {u("cleanup");for (var t = this.subs.length, e = 0; e < t; e++) {var n = this.subs.shift();n.destroy();}this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy();}, o.prototype.close = o.prototype.disconnect = function () {u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close();}, o.prototype.onclose = function (t) {u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", t), this._reconnection && !this.skipReconnect && this.reconnect();}, o.prototype.reconnect = function () {if (this.reconnecting || this.skipReconnect) return this;var t = this;if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;else {var e = this.backoff.duration();u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;var n = setTimeout(function () {t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function (e) {e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect());}));}, e);this.subs.push({ destroy: function destroy() {clearTimeout(n);} });}}, o.prototype.onreconnect = function () {var t = this.backoff.attempts;this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", t);};}, function (t, e) {function n(t, e, n) {return t.on(e, n), { destroy: function destroy() {t.removeListener(e, n);} };}t.exports = n;}, function (t, e, n) {function o(t, e, n) {this.io = t, this.nsp = e, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, n && n.query && (this.query = n.query), this.io.autoConnect && this.open();}var i = n(5),s = n(3),r = n(41),a = n(7),c = n(11),p = n(1)("socket.io-client:socket"),u = n(35);t.exports = e = o;var h = { connect: 1, connect_error: 1, connect_timeout: 1, connecting: 1, disconnect: 1, error: 1, reconnect: 1, reconnect_attempt: 1, reconnect_failed: 1, reconnect_error: 1, reconnecting: 1, ping: 1, pong: 1 },_ = s.prototype.emit;s(o.prototype), o.prototype.subEvents = function () {if (!this.subs) {var t = this.io;this.subs = [a(t, "open", c(this, "onopen")), a(t, "packet", c(this, "onpacket")), a(t, "close", c(this, "onclose"))];}}, o.prototype.open = o.prototype.connect = function () {return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this);}, o.prototype.send = function () {var t = r(arguments);return t.unshift("message"), this.emit.apply(this, t), this;}, o.prototype.emit = function (t) {if (h.hasOwnProperty(t)) return _.apply(this, arguments), this;var e = r(arguments),n = i.EVENT,o = { type: n, data: e };return o.options = {}, o.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof e[e.length - 1] && (p("emitting packet with ack id %d", this.ids), this.acks[this.ids] = e.pop(), o.id = this.ids++), this.connected ? this.packet(o) : this.sendBuffer.push(o), delete this.flags, this;}, o.prototype.packet = function (t) {t.nsp = this.nsp, this.io.packet(t);}, o.prototype.onopen = function () {p("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({ type: i.CONNECT, query: this.query }) : this.packet({ type: i.CONNECT }));}, o.prototype.onclose = function (t) {p("close (%s)", t), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", t);}, o.prototype.onpacket = function (t) {if (t.nsp === this.nsp) switch (t.type) {case i.CONNECT:this.onconnect();break;case i.EVENT:this.onevent(t);break;case i.BINARY_EVENT:this.onevent(t);break;case i.ACK:this.onack(t);break;case i.BINARY_ACK:this.onack(t);break;case i.DISCONNECT:this.ondisconnect();break;case i.ERROR:this.emit("error", t.data);}}, o.prototype.onevent = function (t) {var e = t.data || [];p("emitting event %j", e), null != t.id && (p("attaching ack callback to event"), e.push(this.ack(t.id))), this.connected ? _.apply(this, e) : this.receiveBuffer.push(e);}, o.prototype.ack = function (t) {var e = this,n = !1;return function () {if (!n) {n = !0;var o = r(arguments);p("sending ack %j", o);var s = u(o) ? i.BINARY_ACK : i.ACK;e.packet({ type: s, id: t, data: o });}};}, o.prototype.onack = function (t) {var e = this.acks[t.id];"function" == typeof e ? (p("calling ack %s with %j", t.id, t.data), e.apply(this, t.data), delete this.acks[t.id]) : p("bad ack %s", t.id);}, o.prototype.onconnect = function () {this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered();}, o.prototype.emitBuffered = function () {var t;for (t = 0; t < this.receiveBuffer.length; t++) {_.apply(this, this.receiveBuffer[t]);}for (this.receiveBuffer = [], t = 0; t < this.sendBuffer.length; t++) {this.packet(this.sendBuffer[t]);}this.sendBuffer = [];}, o.prototype.ondisconnect = function () {p("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect");}, o.prototype.destroy = function () {if (this.subs) {for (var t = 0; t < this.subs.length; t++) {this.subs[t].destroy();}this.subs = null;}this.io.destroy(this);}, o.prototype.close = o.prototype.disconnect = function () {return this.connected && (p("performing disconnect (%s)", this.nsp), this.packet({ type: i.DISCONNECT })), this.destroy(), this.connected && this.onclose("io client disconnect"), this;}, o.prototype.compress = function (t) {return this.flags = this.flags || {}, this.flags.compress = t, this;};}, function (t, e, n) {function o(t) {this.path = t.path, this.hostname = t.hostname, this.port = t.port, this.secure = t.secure, this.query = t.query, this.timestampParam = t.timestampParam, this.timestampRequests = t.timestampRequests, this.readyState = "", this.agent = t.agent || !1, this.socket = t.socket, this.enablesXDR = t.enablesXDR, this.pfx = t.pfx, this.key = t.key, this.passphrase = t.passphrase, this.cert = t.cert, this.ca = t.ca, this.ciphers = t.ciphers, this.rejectUnauthorized = t.rejectUnauthorized, this.forceNode = t.forceNode, this.extraHeaders = t.extraHeaders, this.localAddress = t.localAddress;}var i = n(2),s = n(3);t.exports = o, s(o.prototype), o.prototype.onError = function (t, e) {var n = new Error(t);return n.type = "TransportError", n.description = e, this.emit("error", n), this;}, o.prototype.open = function () {return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this;}, o.prototype.close = function () {return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;}, o.prototype.send = function (t) {if ("open" !== this.readyState) throw new Error("Transport not open");this.write(t);}, o.prototype.onOpen = function () {this.readyState = "open", this.writable = !0, this.emit("open");}, o.prototype.onData = function (t) {var e = i.decodePacket(t, this.socket.binaryType);this.onPacket(e);}, o.prototype.onPacket = function (t) {this.emit("packet", t);}, o.prototype.onClose = function () {this.readyState = "closed", this.emit("close");};}, function (t, e, n) {function o(t) {var e = t && t.forceBase64;e && (this.supportsBinary = !1), this.perMessageDeflate = t.perMessageDeflate, i.call(this, t);}var i = n(9),s = n(2),r = n(14),a = n(33),c = n(42),p = n(1)("engine.io-client:websocket");t.exports = o, a(o, i), o.prototype.name = "wx", o.prototype.supportsBinary = !0, o.prototype.doOpen = function () {if (this.check()) {var t = this.uri(),e = { agent: this.agent, perMessageDeflate: this.perMessageDeflate };e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (e.headers = this.extraHeaders), this.localAddress && (e.localAddress = this.localAddress), this.isOk = !1, this.ws = wx, this.ws.connectSocket({ url: t }), void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners();}}, o.prototype.addEventListeners = function () {var t = this;this.ws.onSocketOpen(function () {t.onOpen(), t.isOk = !0;}), this.ws.onSocketClose(function () {t.onClose(), t.isOk = !1;}), this.ws.onSocketMessage(function (e) {t.onData(e.data);}), this.ws.onSocketError(function (e) {t.onError("websocket error", e);});}, o.prototype.write = function (t) {function e() {n.emit("flush"), setTimeout(function () {n.writable = !0, n.emit("drain");}, 0);}var n = this;this.writable = !1;for (var o = t.length, i = 0, r = o; i < r; i++) {!function (t) {s.encodePacket(t, n.supportsBinary, function (t) {try {n.ws.sendSocketMessage({ data: t });} catch (t) {p("websocket closed before onclose event");}--o || e();});}(t[i]);}}, o.prototype.onClose = function () {i.prototype.onClose.call(this);}, o.prototype.doClose = function () {"undefined" != typeof this.ws && this.ws.closeSocket();}, o.prototype.uri = function () {var t = this.query || {},e = this.secure ? "wss" : "ws",n = "";this.port && ("wss" === e && 443 !== Number(this.port) || "ws" === e && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (t[this.timestampParam] = c()), this.supportsBinary || (t.b64 = 1), t = r.encode(t), t.length && (t = "?" + t);var o = this.hostname.indexOf(":") !== -1;return e + "://" + (o ? "[" + this.hostname + "]" : this.hostname) + n + this.path + t;}, o.prototype.check = function () {return !this.isOk;};}, function (t, e) {var n = [].slice;t.exports = function (t, e) {if ("string" == typeof e && (e = t[e]), "function" != typeof e) throw new Error("bind() requires a function");var o = n.call(arguments, 2);return function () {return e.apply(t, o.concat(n.call(arguments)));};};}, function (t, e) {var n = [].indexOf;t.exports = function (t, e) {if (n) return t.indexOf(e);for (var o = 0; o < t.length; ++o) {if (t[o] === e) return o;}return -1;};}, function (t, e) {t.exports = Array.isArray || function (t) {return "[object Array]" == Object.prototype.toString.call(t);};}, function (t, e) {e.encode = function (t) {var e = "";for (var n in t) {t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));}return e;}, e.decode = function (t) {for (var e = {}, n = t.split("&"), o = 0, i = n.length; o < i; o++) {var s = n[o].split("=");e[decodeURIComponent(s[0])] = decodeURIComponent(s[1]);}return e;};}, function (t, e) {var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];t.exports = function (t) {var e = t,i = t.indexOf("["),s = t.indexOf("]");i != -1 && s != -1 && (t = t.substring(0, i) + t.substring(i, s).replace(/:/g, ";") + t.substring(s, t.length));for (var r = n.exec(t || ""), a = {}, c = 14; c--;) {a[o[c]] = r[c] || "";}return i != -1 && s != -1 && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a;};}, function (t, e) {(function (e) {function n(t) {return e.Buffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer;}t.exports = n;}).call(e, function () {return this;}());}, function (t, e, n) {"use strict";var o = n(3),i = n(28),s = n(4),r = function r(t) {this.init(t);};r.prototype.init = function (t) {this.opts = t, this.dataCache = {}, this.memStore = {}, this.sync_key = 0, this.sync_type = 0, void 0 != this.client && this.client.close(), this.client = i(this.opts.address, { transports: ["websocket", "polling"] });var e = this,n = o.prototype.emit,s = this.client.onevent;this.client.onevent = function (t) {var o = t.data || [];s.call(e.client, t), n.apply(e.client, ["*"].concat(o));}, this.client.on("*", function (t, n) {e.onReceive(t, n);});}, r.prototype.onReceive = function (t, e) {if (this.opts.debug && console.log("---<- event:%s, data:%s", t, JSON.stringify(e), " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:1"), t !== s.EVENTS.EVENT_NOTIFICATION && t !== s.EVENTS.MSG_SYNC && t !== s.EVENTS.SYNC_CONVERSATION && t !== s.EVENTS.SYNC_EVENT && t !== s.EVENTS.SYNC_RECEIPT && t !== s.EVENTS.RECEIPT_CHANGE && t !== s.ROOM_MSG_SYNC && t !== s.ROOM_MSG_SYNC_HIS) {var n = this.dataCache[e.rid];delete e.rid, n && (0 === e.code && t === s.EVENTS.GET_GROUP_MEMBERS ? e.member_list.forEach(function (t) {n.userInfoGet && n.userInfoGet(t.uid, t.mtime), delete t.uid, delete t.mtime;}) : 0 === e.code && t === s.EVENTS.GET_CONVERSATIONS ? e.conversations.forEach(function (t) {3 === t.type && (n.userInfoGet && n.userInfoGet(t.key, t.utime), delete t.utime);}) : 0 === e.code && t === s.EVENTS.GET_FRIEND_LIST ? e.friend_list.forEach(function (t) {n.userInfoGet && n.userInfoGet(t.uid, 1e3 * t.mtime), delete t.uid;}) : 0 === e.code && t === s.EVENTS.GET_BLACK_LIST && e.black_list.forEach(function (t) {delete t.uid;}), t === s.EVENTS.ACK ? (n.ack && n.ack({ rid: e.rid, data: n.data }), n.cleanAckTimeout()) : (n.cleanRespTimeout(), delete this.dataCache[n.rid], e.code && 0 !== e.code ? n.fail && n.fail(e) : t != s.EVENTS.S_SINGLE_TEXT_ && t != s.EVENTS.SEND_GROUP_MSG && t != s.EVENTS.SEND_ROOM_MSG ? n.hook ? n.hook(e, n.success) : n.success && n.success(e) : (n.data.msg_id = e.msg_id, t === s.EVENTS.S_SINGLE_TEXT_ && (e.target_username = n.data.content.target_id, e.appkey = n.data.appkey), n.success && n.success(e, n.data), n.innerCall && n.innerCall(e.msg_id))));}}, r.prototype.generateRid = function () {for (var t = Math.floor(Math.random() * -2147483646 + 2147483647); this.dataCache[t];) {t = Math.floor(Math.random() * -2147483646 + 2147483647);}return t;}, r.prototype.send = function (t, e) {this.opts.debug && console.log("--->- event:%s, data:%s", t, JSON.stringify(e), " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:1"), this.client.emit(t, e);}, t.exports = r;}, function (t, e, n) {"use strict";var o = n(19);t.exports = o;}, function (t, e, n) {"use strict";var o = n(31),i = n(17),s = n(4),r = n(21),a = n(23),c = n(22),p = n(20)(),u = n(24),h = function h(t) {var e = t ? t : {};this.opts = { address: e.address ? e.address : s.WSS_ADDRESS, debug: !!e.debug }, this.channel = new i(this.opts), this.syncTask = 0, this.msgReceipTask = 0;};h.prototype.init = function (t) {var e = this;return e.autoDiscon = !0, t.flag !== s.SYNC_TYPE_OPEN && t.flag !== s.SYNC_TYPE_CLOSE || (e.channel.sync_type = t.flag), t.fromPlatForm = s.FROM_PLATFORM, new r(this.channel).setEvent(s.EVENTS.INIT).setData(t).send().addHook(function (n, o) {e.current_appkey = t.appkey, o && o(n);});}, h.prototype.loginOut = function () {if (this.current_user) {this.autoDiscon = !1, this.channel.client.close();var t = this.channel.dataCache;for (var e in t) {t[e].cleanAckTimeout(), t[e].cleanRespTimeout();}this.current_user = null, this.current_appkey = null, this.channel.init(this.channel.opts);}}, h.prototype.login = function (t) {this.__checkInit(), t.is_md5 || (t.password = p(t.password)), t.version = s.SDK_VERSION;var e = this,n = new r(this.channel).setEvent(s.EVENTS.LOGIN).setData(t).addHook(function (n, o) {e.current_user = t.username, u.StorageUtils.removeItems(e.current_user), e.channel.sync_key = 0, e.channel.sync_event_key = 0, e.channel.msg_receipt_key = 0, e.channel.ses_key = s.SESSION_KEY + e.current_appkey + "-" + e.current_user, e.channel.conversations_key = s.CONVERSATION_KEY + e.current_appkey + "-" + e.current_user, e.channel.event_key = s.EVENT_KEY + e.current_appkey + "-" + e.current_user, e._syncCheckTask(), e._receiptReportTask(), e._initConversation(), e.lastMsgs = {}, e.channel.client.removeListener(s.EVENTS.LOGIN), e._addEventListen(), e.firstLogin = !1, o && o(n);});return setTimeout(function () {n.send();}, 500), n;}, h.prototype._initConversation = function () {var t = this,e = u.StorageUtils.getItem(t.channel.conversations_key);null !== e && "" !== e || (e = JSON.stringify({}), u.StorageUtils.addItem(t.channel.conversations_key, e)), t.conversations = JSON.parse(e);}, h.prototype._receiptReportTask = function () {var t = this;t.report = [], t.msgReceipTask = setInterval(function () {t._receiptReport();}, s.RECEIPT_REPORT_INTERVAL);}, h.prototype._syncCheckTask = function () {var t = this,e = u.StorageUtils.getItem(t.channel.event_key);null != e && (t.channel.sync_event_key = e), t._syncCheck({ sync_key: t.channel.sync_key, sync_type: t.channel.sync_type, sync_event_key: t.channel.sync_event_key, msg_receipt_key: t.channel.msg_receipt_key }).onSuccess(function (e) {e && 0 === e.code && (t.channel.sync_key = e.sync_key, t.channel.sync_type = e.sync_type, t.channel.sync_event_key = e.sync_event_key, t.channel.msg_receipt_key = e.msg_receipt_key, u.StorageUtils.addItem(t.channel.event_key, e.sync_event_key));}), t.syncTask = setInterval(function () {t._syncCheck({ sync_key: t.channel.sync_key, sync_type: t.channel.sync_type, sync_event_key: t.channel.sync_event_key, msg_receipt_key: t.channel.msg_receipt_key }).onSuccess(function (e) {e && 0 === e.code && (t.channel.sync_key = e.sync_key, t.channel.sync_type = e.sync_type, t.channel.sync_event_key = e.sync_event_key, t.channel.msg_receipt_key = e.msg_receipt_key, u.StorageUtils.addItem(t.channel.event_key, e.sync_event_key));});}, s.SYNC_INTERVAL);}, h.prototype._syncCheck = function (t) {return new r(this.channel).setEvent(s.EVENTS.SYNC_CHECK).setData(t).send();}, h.prototype.register = function (t) {return this.__checkInit(), t.is_md5 || (t.password = p(t.password)), new r(this.channel).setEvent(s.EVENTS.REGISTER).setData(t).send();}, h.prototype.getUserInfo = function (t) {return this.__checkLogin(), u.StringUtils.isBlack(t.appkey) && (t.appkey = this.current_appkey), new r(this.channel).setEvent(s.EVENTS.GET_ACROSS_USER_INFO).setData(t).send();}, h.prototype.updateSelfInfo = function (t) {return this.__checkLogin(), u.StringUtils.isBlack(t.avatar) || delete t.avatar, new r(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO).setData(t).send();}, h.prototype.updateSelfAvatar = function (t) {this.__checkLogin();var e = new r(this.channel).setEvent(s.EVENTS.UPDATE_SELF_INFO),n = this;return this.__uploadFile({ appkey: n.current_appkey, username: n.current_user, file: t.avatar, type: "image" }, function (t, n) {return t ? t.is_timeout ? e.timeout && e.timeout(t.data) : e.fail && e.fail(t.data) : void e.setData({ avatar: n.media_id }).send();}), e;}, h.prototype.updateSelfPwd = function (t) {return this.__checkLogin(), t.is_md5 || (t.old_pwd = p(t.old_pwd), t.new_pwd = p(t.new_pwd)), new r(this.channel).setEvent(s.EVENTS.UPDATE_SELF_PWD).setData(t).send();}, h.prototype.getConversation = function () {var t = this;return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_CONVERSATIONS).setData({}).send().onUserInfoGet(function (e, n) {t[e] = n;}).addHook(function (e, n) {e.conversations.forEach(function (e) {var n;3 === e.type ? (t[e.key] = e.utime, delete e.utime, n = e.appkey + e.username) : (n = e.key, e.gid = e.key), t.conversations[n] ? (t.conversations[n].extras ? e.extras = t.conversations[n].extras : e.extras = {}, e.unread_msg_count = t.conversations[n].unread_msg_count) : (e.extras = {}, e.unread_msg_count = 0, t.conversations[n] = {}, t.conversations[n].extras = {}, t.conversations[n].unread_msg_count = 0, t.conversations[n].msg_time = []);}), u.StorageUtils.addItem(t.channel.conversations_key, JSON.stringify(t.conversations)), n && n(e);});}, h.prototype.resetUnreadCount = function (t) {this.__checkLogin();var e,n = this;t.gid ? e = String(t.gid) : (t.appkey || (t.appkey = n.current_appkey), e = t.appkey + t.username), n.conversations[e] = void 0 === n.conversations[e] ? {} : n.conversations[e], t.gid ? n._updateGroupUnreadCount({ gid: t.gid }) : n._updateSingleUnreadCount({ appkey: t.appkey, username: t.username }), n.conversations[e].unread_msg_count = 0, n.conversations[e].msg_time = [];var o = new Date().getTime();n.lastMsgs[e] && (o = n.lastMsgs[e].last_msg_time), n.conversations[e].recent_time = o, n.current_conversation = e, u.StorageUtils.addItem(n.channel.conversations_key, JSON.stringify(n.conversations));
    }, h.prototype.getUnreadMsgCnt = function (t) {this.__checkLogin();var e,n = this;return t.gid ? e = String(t.gid) : (t.appkey || (t.appkey = n.current_appkey), e = t.appkey + t.username), n.conversations[e] || (n.conversations[e] = {}), n.conversations[e] = void 0 === n.conversations[e] ? {} : n.conversations[e], n.conversations[e].unread_msg_count ? n.conversations[e].unread_msg_count : 0;}, h.prototype.msgRetract = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.MSG_RETRACT).setData(t).send();}, h.prototype.sendSingleMsg = function (t) {return this.__checkLogin(), this.__sendMsg({ type: "single", target_id: t.target_username, target_name: t.target_nickname, content: t.content, extras: t.extras, msg_body: t.msg_body, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupMsg = function (t) {return this.__checkLogin(), this.__sendMsg({ type: "group", target_id: t.target_gid, target_name: t.target_gname, content: t.content, extras: t.extras, msg_body: t.msg_body, at_list: t.at_list, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendSinglePic = function (t) {return this.__checkLogin(), this.__sendPic({ type: "single", target_id: t.target_username, target_name: t.target_nickname, file: t.image, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupPic = function (t) {return this.__checkLogin(), this.__sendPic({ type: "group", target_id: t.target_gid, target_name: t.target_gname, file: t.image, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendSingleFile = function (t) {return this.__sendVideoOrFile({ type: "single", target_id: t.target_username, target_name: t.target_nickname, file: t.file, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "file");}, h.prototype.sendGroupFile = function (t) {return this.__sendVideoOrFile({ type: "group", target_id: t.target_gid, target_name: t.target_gname, file: t.file, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "file");}, h.prototype.sendSingleVedio = function (t) {return this.__sendVideoOrFile({ type: "single", target_id: t.target_username, target_name: t.target_nickname, file: t.file, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "video");}, h.prototype.sendGroupVedio = function (t) {return this.__sendVideoOrFile({ type: "group", target_id: t.target_gid, target_name: t.target_gname, file: t.file, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt }, "video");}, h.prototype.sendSingleLocation = function (t) {return this.__checkLogin(), this.__sendLocation({ type: "single", target_id: t.target_username, target_name: t.target_nickname, latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label, msg_body: t.msg_body, extras: t.extras, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupLocation = function (t) {return this.__checkLogin(), this.__sendLocation({ type: "group", target_id: t.target_gid, target_name: t.target_gname, latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendSingleCustom = function (t) {return this.__checkLogin(), this.__sendCustom({ type: "single", target_id: t.target_username, target_name: t.target_nickname, custom: t.custom, extras: t.extras, msg_body: t.msg_body, appkey: t.appkey, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.sendGroupCustom = function (t) {return this.__checkLogin(), this.__sendCustom({ type: "group", target_id: t.target_gid, target_name: t.target_gname, custom: t.custom, msg_body: t.msg_body, extras: t.extras, no_offline: t.no_offline, no_notification: t.no_notification, custom_notification: t.custom_notification, need_receipt: t.need_receipt });}, h.prototype.createGroup = function (t) {this.__checkLogin();var e = this,n = new r(this.channel).setEvent(s.EVENTS.CREATE_GROUP);return t.avatar ? this.__uploadFile({ appkey: e.current_appkey, username: e.current_user, file: t.avatar, type: "image" }, function (e, o) {return e ? e.is_timeout ? n.timeout && n.timeout(e.data) : n.fail && n.fail(e.data) : (delete t.avatar, t.media_id = o.media_id, void n.setData(t).send());}) : n.setData(t).send(), n;}, h.prototype.exitGroup = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.EXIT_GROUP).setData(t).send();}, h.prototype.getGroups = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_GROUPS_LIST).setData({}).send().addHook(function (t, e) {t.group_list.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.getGroupInfo = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_GROUP_INFO).setData(t).send().addHook(function (t, e) {t.group_info.group_type = t.group_info.flag, delete t.group_info.flag, e && e(t);});}, h.prototype.updateGroupInfo = function (t) {this.__checkLogin();var e = this,n = new r(this.channel).setEvent(s.EVENTS.UPDATE_GROUP_INFO);return t.avatar ? this.__uploadFile({ appkey: e.current_appkey, username: e.current_user, file: t.avatar, type: "image" }, function (e, o) {return e ? e.is_timeout ? n.timeout && n.timeout(e.data) : n.fail && n.fail(e.data) : (delete t.avatar, t.media_id = o.media_id, void n.setData(t).send());}) : n.setData(t).send(), n;}, h.prototype.getGroupMembers = function (t) {var e = this;return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_GROUP_MEMBERS).setData(t).send().onUserInfoGet(function (t, n) {e[t] = n;});}, h.prototype.addGroupMembers = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_ACROSS_GROUP_MEMBER).setData(t).send();}, h.prototype.delGroupMembers = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_ACROSS_GROUP_MEMBER).setData(t).send();}, h.prototype.getNoDisturb = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.NO_DISTURB).setData({ version: 0 }).send().addHook(function (t, e) {t.no_disturb.groups.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.addSingleNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_SINGLE).setData(t).send();}, h.prototype.delSingleNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_SINGLE).setData(t).send();}, h.prototype.addGroupNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GROUP).setData(t).send();}, h.prototype.delGroupNoDisturb = function (t) {return this.__checkLogin(), t.version = 0, new r(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GROUP).setData(t).send();}, h.prototype.addGlobalNoDisturb = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_MSG_NO_DISTURB_GLOBAL).setData({ version: 0 }).send();}, h.prototype.delGlobalNoDisturb = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DELETE_MSG_NO_DISTURB_GLOBAL).setData({ version: 0 }).send();}, h.prototype.getBlacks = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_BLACK_LIST).setData({ version: 0 }).send();}, h.prototype.addSingleBlacks = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_BLACK_LIST).setData(t).send();}, h.prototype.delSingleBlacks = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_BLACK_LIST).setData(t).send();}, h.prototype.getFriendList = function () {var t = this;return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_FRIEND_LIST).setData({}).send().onUserInfoGet(function (e, n) {t[e] = n;});}, h.prototype.addFriend = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send();}, h.prototype.acceptFriend = function (t) {return this.__checkLogin(), t.why = "yes", t.from_type = s.FRIEND_INVITED, new r(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send();}, h.prototype.declineFriend = function (t) {return this.__checkLogin(), t.why && "" != t.why.trim() || (t.why = "no"), t.from_type = s.FRIEND_INVITED, new r(this.channel).setEvent(s.EVENTS.ADD_FRIEND).setData(t).send();}, h.prototype.delFriend = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_FRIEND).setData(t).send();}, h.prototype.updateFriendMemo = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.UPDATE_FRIEND_MEMO).setData(t).send();}, h.prototype.addGroupShield = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_MSG_SHIELD_GROUP).setData(t).send();}, h.prototype.delGroupShield = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_MSG_SHIELD_GROUP).setData(t).send();}, h.prototype.groupShieldList = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.LIST_SHIELD_GROUP).setData(t).send().addHook(function (t, e) {t.groups.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.getResource = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_RESOURCE).setData(t).send();}, h.prototype._updateGroupUnreadCount = function (t) {this.__checkLogin(), t.type = 4, new r(this.channel).setEvent(s.EVENTS.UNREAD_GROUP_COUNT).setData(t).send();}, h.prototype._updateSingleUnreadCount = function (t) {this.__checkLogin(), t.type = 3, new r(this.channel).setEvent(s.EVENTS.UNREAD_SINGLE_COUNT).setData(t).send();}, h.prototype.msgUnreadList = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.MSG_UNREAD_LIST).setData(t).send();}, h.prototype.addGroupReceiptReport = function (t) {this.__checkLogin();var e = this;if (!(t.msg_ids instanceof Array) || 0 === t.msg_ids.length) return void console.error("msg_ids is not Array type or msg_ids size=0", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:2");t.key = t.gid, t.type = 4;var n = new a(t);return e.report.push(n), setTimeout(function () {e._checkReportSize() >= s.RECEIPT_REPORT_MAX_SIZE && e._receiptReport();}, 50), n;}, h.prototype.addSingleReceiptReport = function (t) {this.__checkLogin();var e = this;if (!(t.msg_ids instanceof Array) || 0 === t.msg_ids.length) return void console.error("msg_ids is not Array type or msg_ids size=0", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:2");t.appkey || (t.appkey = e.current_appkey), t.type = 3, t.key = t.appkey + t.username;var n = new a(t);return e.report.push(n), setTimeout(function () {e._checkReportSize() >= s.RECEIPT_REPORT_MAX_SIZE && e._receiptReport();}, 50), n;}, h.prototype._checkReportSize = function () {var t = this,e = 0;return t.report.forEach(function (t) {e += t.args.msg_ids.length;}), e;}, h.prototype.transSingleMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.TRANS_MSG_SINGLE).setData(t).send();}, h.prototype.transGroupMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.TRANS_MSG_GROUP).setData(t).send();}, h.prototype.transPlatMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.TRANS_MSG_PLATFORM).setData(t).send();}, h.prototype.updateConversation = function (t) {this.__checkLogin();var e = this;t.appkey || (t.appkey = e.current_appkey);var n;t.gid ? n = t.gid : t.username && (n = t.appkey + t.username), n && t.extras && (e.conversations[n] || (e.conversations[n] = {}), e.conversations[n].extras = t.extras), u.StorageUtils.addItem(e.channel.conversations_key, JSON.stringify(e.conversations));}, h.prototype.addGroupMemberResp = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADMIN_ADD_GROUP_MEMBER).setData(t).send();}, h.prototype.joinGroup = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.APPLY_JOIN_GROUP).setData(t).send();}, h.prototype.getAppkeyChatrooms = function (t) {return this.__checkLogin(), !t && (t = {}), new r(this.channel).setEvent(s.EVENTS.ROOM_LIST).setData(t).send().addHook(function (t, e) {t.result.rooms.forEach(function (t) {u.Cache.rooms[t.id] = t;}), e && e(t);});}, h.prototype.getSelfChatrooms = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ROOM_LIST_SELF).setData({}).send().addHook(function (t, e) {t.chat_rooms.forEach(function (t) {u.Cache.rooms[t.id] = t;}), e && e(t);});}, h.prototype.getChatroomInfo = function (t) {this.__checkLogin();var e = new r(this.channel);return u.Cache.rooms[t.id] ? setTimeout(function () {var n = {};n.code = 0, n.message = "success", n.info = u.Cache.rooms[t.id], e.cleanRespTimeout(), e.success && e.success(n);}, 100) : e.setEvent(s.EVENTS.ROOM_INFO).setData(t).send().addHook(function (t, e) {u.Cache.rooms[t.info.id] = t.info, e && e(t);}), e;}, h.prototype.enterChatroom = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.JOIN_ROOM).setData(t).send();}, h.prototype.exitChatroom = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.EXIT_ROOM).setData(t).send();}, h.prototype.sendChatroomMsg = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendMsg({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, content: t.content, extras: t.extras, msg_body: t.msg_body });}, h.prototype.sendChatroomPic = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendPic({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, file: t.image, extras: t.extras, msg_body: t.msg_body });}, h.prototype.sendChatroomFile = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendVideoOrFile({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, file: t.file, extras: t.extras, msg_body: t.msg_body }, "file");}, h.prototype.sendChatroomVideo = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendVideoOrFile({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, file: t.file, msg_body: t.msg_body, extras: t.extras }, "video");}, h.prototype.sendChatroomCustom = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendCustom({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, custom: t.custom, extras: t.extras, msg_body: t.msg_body });}, h.prototype.sendChatroomLocation = function (t) {return this.__checkLogin(), t.target_rname || (t.target_rname = void 0 === u.Cache.rooms[t.target_rid] ? "" : u.Cache.rooms[t.target_rid].name), this.__sendLocation({ type: "chatroom", target_id: t.target_rid, target_name: t.target_rname, latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label, extras: t.extras, msg_body: t.msg_body });}, h.prototype.addGroupMemSilence = function (t) {return this.__checkLogin(), t.keep_silence = !0, new r(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send();}, h.prototype.delGroupMemSilence = function (t) {return this.__checkLogin(), t.keep_silence = !1, new r(this.channel).setEvent(s.EVENTS.GROUP_MEM_SILENCE).setData(t).send();}, h.prototype.dissolveGroup = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DISSOLVE_GROUP).setData(t).send();}, h.prototype.addGroupKeeper = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.ADD_GROUP_KEEPER).setData(t).send();}, h.prototype.delGroupKeeper = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.DEL_GROUP_KEEPER).setData(t).send();}, h.prototype.changeGroupAdmin = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.CHANGE_GROUP_ADMIN).setData(t).send();}, h.prototype.getAppkeyPublicGroups = function (t) {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.PUBLIC_GROUP_LIST).setData(t).send().addHook(function (t, e) {t.result.groups.forEach(function (t) {t.group_type = t.flag, delete t.flag;}), e && e(t);});}, h.prototype.isInit = function () {return !!this.current_appkey;}, h.prototype.isLogin = function () {return !!this.current_user;}, h.prototype.isConnect = function () {return !!this.channel.client.connected;}, h.prototype._addEventListen = function () {var t = this;t.channel.client.on(s.EVENTS.MSG_SYNC, function (e) {t._onMsgReceive(e);}), t.channel.client.on(s.EVENTS.EVENT_NOTIFICATION, function (e) {t._onEventNotification(e);}), t.channel.client.on(s.EVENTS.SYNC_CONVERSATION, function (e) {t._onSyncConversation(e);}), t.channel.client.on(s.EVENTS.SYNC_EVENT, function (e) {t._onSyncEvent(e);}), t.channel.client.on(s.EVENTS.SYNC_RECEIPT, function (e) {t._onSyncMsgReceipt(e);}), t.channel.client.on(s.EVENTS.RECEIPT_CHANGE, function (e) {t._onMsgReceiptChange(e);}), t.channel.client.on(s.EVENTS.TRANS_MSG_REC, function (e) {t._onTransMsgRec(e);}), t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC, function (e) {t._onRoomMsg(e);}), t.channel.client.on(s.EVENTS.ROOM_MSG_SYNC_HIS, function (e) {t._onSyncRoomMsg(e);}), t.channel.client.on("disconnect", function () {t._onDisconnect();});}, h.prototype.onRoomMsg = function (t) {this._onRoomMsgFn = t;}, h.prototype._onRoomMsg = function (t) {this._onRoomMsgFn && this._onRoomMsgFn(t);}, h.prototype._onSyncRoomMsg = function (t) {var e = this;t.messages.forEach(function (n) {u.Cache.rooms[n.room_id] || e.getChatroomInfo({ id: t.room_id }), n.msgs && n.msgs.forEach(function (t) {e._onRoomMsgFn && e._onRoomMsgFn(t);});});}, h.prototype.onMsgReceive = function (t) {this._onMsgReceiveFn = t;}, h.prototype._onMsgReceive = function (t) {var e = [],n = this;Array.prototype.push.apply(e, t.messages.map(function (t) {return { msg_id: t.msg_id, msg_type: t.msg_type, from_uid: t.from_uid, from_gid: t.from_gid };})), t.messages.forEach(function (t) {if (t.content.sui_mtime && n[t.from_uid] && t.content.sui_mtime > new Date(n[t.from_uid]).getTime() / 1e3) {n[t.from_uid] = 1e3 * t.content.sui_mtime;var e = {};e.from_username = t.content.from_id, e.from_appkey = t.content.from_appkey, e.mtime = t.content.sui_mtime, delete t.content.sui_mtime, n._updateInfoEventFun && n._updateInfoEventFun(e);}var o;3 === t.msg_type ? (t.key = t.from_uid, t.from_username = t.content.from_id, t.from_appkey = t.content.from_appkey, o = t.from_appkey + t.from_username) : (t.key = t.from_gid, o = String(t.from_gid)), 0 === t.msg_level ? t.msg_level = "normal" : 1 === t.msg_level && (t.msg_level = "across");var i = !1;if (t.from_appkey === n.current_appkey && t.from_username === n.current_user) {i = !0;var a = void 0 === t.content.target_appkey || "" === t.content.target_appkey ? t.content.from_appkey : t.content.target_appkey;o = a + t.content.target_id;}n.lastMsgs[o] = { last_msg_time: t.ctime_ms }, n.conversations[o] || (n.conversations[o] = {}, n.conversations[o].extras = {}, n.conversations[o].unread_msg_count = 0, n.conversations[o].msg_time = []), n.current_conversation === o || i ? (n.conversations[o].recent_time = t.ctime_ms, n.conversations[o].unread_msg_count = 0, n.conversations[o].msg_time = []) : (n.conversations[o].unread_msg_count = n.conversations[o].unread_msg_count + 1, n.conversations[o].msg_time.push(t.ctime_ms)), new r(n.channel).setEvent(s.EVENTS.MSG_RECV_V2).setData({ msg_id: t.msg_id, msg_type: t.msg_type, from_uid: t.from_uid, from_gid: t.from_gid }).send();}), u.StorageUtils.addItem(n.channel.conversations_key, JSON.stringify(n.conversations)), this._onMsgReceiveFn && this._onMsgReceiveFn(t);}, h.prototype.onEventNotification = function (t) {this._onEventNotificationFn = t;}, h.prototype._onEventNotification = function (t) {var e = this;if (200 === t.event_type) return void (3 === t.description.type ? e._dealMutlReadEvent(t.description.type, t.ctime_ms, t.description.appkey, t.description.username) : e._dealMutlReadEvent(t.description.type, t.ctime_ms, t.description.gid));var n = e.__eventDateFilter(t);if (56 === t.event_type && 10 == t.extra ? (n.by_self = !1, delete n.extra) : 56 === t.event_type && 59 == t.extra && (n.by_self = !0, delete n.extra), 1 === t.event_type) {var o = { event_id: t.event_id, event_type: t.event_type, from_uid: t.from_uid, gid: t.gid };new r(e.channel).setEvent(s.EVENTS.EVENT_NOTIFICATION).setData(o).send();}e._onEventNotificationFn && e._onEventNotificationFn(n), s.LOGIN_OUT_EVENT.indexOf(t.event_type) != -1 && e.loginOut();}, h.prototype.onSyncConversation = function (t) {this._onSyncConversationFn = t;}, h.prototype._onSyncConversation = function (t) {var e = this;e.channel.sync_key = t.sync_key, t.messages && (t.messages.forEach(function (t) {var n,o = 0;n = 3 === t.msg_type ? t.from_appkey + t.from_username : String(t.from_gid);var i = t.msgs[t.msgs.length - 1].ctime_ms;if (e.current_conversation === n) e.conversations[n] = void 0 === e.conversations[n] ? {} : e.conversations[n], e.conversations[n].unread_msg_count = o, e.conversations[n].recent_time = i, e.conversations[n].msg_time = [];else if (e.conversations[n] && e.conversations[n].recent_time) {var r = e.conversations[n].recent_time;t.msgs.forEach(function (t) {t.ctime_ms <= r || t.content.from_appkey === e.current_appkey && t.content.from_id === e.current_user ? (o = 0, e.conversations[n].msg_time = []) : (o++, e.conversations[n].msg_time.push(t.ctime_ms));}), e.channel.sync_type === s.SYNC_TYPE_OPEN ? e.conversations[n].unread_msg_count = o : e.conversations[n].unread_msg_count += o;} else o = t.unsync_count, e.conversations[n] = void 0 === e.conversations[n] ? {} : e.conversations[n], e.conversations[n].unread_msg_count = o, t.msgs.length - 1 - o < 0 ? e.conversations[n].recent_time = -1 : e.conversations[n].recent_time = t.msgs[t.msgs.length - 1 - o].ctime_ms, e.conversations[n].msg_time = [];e.lastMsgs[n] = { last_msg_time: i }, delete t.unsync_count, t.unread_msg_count = o;}), u.StorageUtils.addItem(e.channel.conversations_key, JSON.stringify(e.conversations)), e._onSyncConversationFn && t.messages.length > 0 && e._onSyncConversationFn(t.messages));var n = { sync_key: e.channel.sync_key };new r(e.channel).setEvent(s.EVENTS.SYNC_CONVERSATION_ACK).setData(n).send();}, h.prototype.onSyncEvent = function (t) {this._onSyncEventFn = t;}, h.prototype._onSyncEvent = function (t) {var e = this;e.channel.sync_event_key = t.sync_key, u.StorageUtils.addItem(e.channel.event_key, t.sync_key);var n = { sync_key: e.channel.sync_event_key };new r(e.channel).setEvent(s.EVENTS.SYNC_EVENT_ACK).setData(n).send(), setTimeout(function () {if (e._onSyncEventFn && t.events && t.events.length > 0) {var n = [];t.events.forEach(function (o) {if (200 === o.event_type) 3 === o.description.type ? e._dealMutlReadEvent(o.description.type, o.ctime_ms, o.description.appkey, o.description.username) : e._dealMutlReadEvent(o.description.type, o.ctime_ms, o.description.gid);else {var i = e.__eventDateFilter(o);56 === t.event_type && 10 == t.extra ? (delete i.extra, i.by_self = !1) : 56 === t.event_type && 59 == t.extra && (delete i.extra, i.by_self = !0), n.push(i);}}), e._onSyncEventFn(n);}}, 1700);}, h.prototype.onSyncMsgReceipt = function (t) {this._onSyncMsgReceiptFn = t;}, h.prototype._onSyncMsgReceipt = function (t) {var e = this;if (e.channel.msg_receipt_key = t.sync_key, e._onSyncMsgReceiptFn && t.receipts && t.receipts.length > 0) {var n = {},o = [];t.receipts.forEach(function (t) {var e = t.gid;if (3 === t.type && (e = t.appkey + t.username), n[e]) {var i = Number(n[e]);Array.prototype.push.apply(o[i].receipt_msgs, t.receipt_msgs);} else t.receipt_msgs.length > 0 && (n[e] = String(o.length), o.push(t));}), setTimeout(function () {e._onSyncMsgReceiptFn && o.length > 0 && e._onSyncMsgReceiptFn(o);}, 1500);}var i = { sync_key: e.channel.msg_receipt_key };new r(e.channel).setEvent(s.EVENTS.SYNC_RECEIPT_ACK).setData(i).send();}, h.prototype.onMsgReceiptChange = function (t) {this._onMsgReceiptChangeFn = t;}, h.prototype._onMsgReceiptChange = function (t) {this._onMsgReceiptChangeFn && this._onMsgReceiptChangeFn(t);}, h.prototype.onUserInfUpdate = function (t) {this._updateInfoEventFun = t;}, h.prototype.onMutiUnreadMsgUpdate = function (t) {this._conversationUpdateFun = t;}, h.prototype.onTransMsgRec = function (t) {this._onTransMsgRecFn = t;}, h.prototype._onTransMsgRec = function (t) {this._onTransMsgRecFn && this._onTransMsgRecFn(t);}, h.prototype.onDisconnect = function (t) {this._onDisconnectFn = t;}, h.prototype._onDisconnect = function () {var t = this;clearTimeout(t.syncTask), clearTimeout(t.msgReceipTask), t.autoDiscon && (t.current_appkey = null, t.current_user = null, t._onDisconnectFn && t._onDisconnectFn()), this.channel.init(this.channel.opts);}, h.prototype._dealMutlReadEvent = function (t, e, n, o) {var i,s = this,r = {};if (r.type = t, 3 === t ? (i = n + o, r.username = o, r.appkey = n) : (i = String(n), r.gid = n), s.conversations[i] = void 0 === s.conversations[i] ? { msg_time: [], unread_msg_count: 0 } : s.conversations[i], s.conversations[i].recent_time = e, s.current_conversation === i) s.conversations[i].unread_msg_count = 0, s.conversations[i].msg_time = [];else {var a = s.conversations[i].unread_msg_count,c = s.conversations[i].msg_time,p = [],h = 0;c.forEach(function (t) {t > e && (h++, p.push(t));}), s.conversations[i].msg_time = p, h < a && (s.conversations[i].unread_msg_count = h, r.unreadCount = h, u.StorageUtils.addItem(s.channel.conversations_key, JSON.stringify(s.conversations)), s._conversationUpdateFun && s._conversationUpdateFun(r));}}, h.prototype._receiptReport = function () {var t = this;if (t.report.length > 0) {var e = {},n = [];t.report.forEach(function (t) {if (e[t.args.key]) {var o = Number(e[t.args.key]);Array.prototype.push.apply(n[o].result.msg_ids, t.args.msg_ids), n[o].msg_reports.push(t);} else e[t.args.key] = String(n.length), n.push({ result: t.args, msg_reports: [t] });}), t.report = [];for (var o = 0; o < n.length; o++) {n[o].result.msg_ids = u.ArrayUtils.delRepeatItem(n[o].result.msg_ids), delete n[o].result.key, t._msgReceipt(n[o]);}}}, h.prototype._msgReceipt = function (t) {new r(this.channel).setEvent(s.EVENTS.RECEIPT_REPORT).setData({ sessions: [t.result] }).send().onSuccess(function (e) {t.msg_reports.forEach(function (t) {t.success && t.success(e, t.args.msg_ids);});}).onFail(function (e) {t.msg_reports.forEach(function (t) {t.fail && t.fail(e, t.args.msg_ids);});}).onAck(function (e) {t.msg_reports.forEach(function (t) {t.ack && t.ack(e, t.args.msg_ids);});}).onTimeout(function (e) {t.msg_reports.forEach(function (t) {t.timeout && t.timeout(e, t.args.msg_ids);});});}, h.prototype.__eventDateFilter = function (t) {var e = {};return e.event_id = t.event_id, e.event_type = t.event_type, e.from_username = t.from_username, e.gid = t.gid, e.to_usernames = t.to_usernames, e.ctime = t.ctime, e.extra = t.extra, e.return_code = t.return_code, e.from_appkey = t.from_appkey, e.msg_ids = t.msg_ids, e.from_gid = t.from_gid, e.msgid_list = t.msgid_list, e.to_groups = t.to_groups, e.new_owner = t.new_owner, e.group_name = t.group_name, e.ctime_ms = t.ctime_ms, e.media_id = t.media_id, e.from_nickname = t.from_nickname, e.from_eventid = t.from_eventid, 100 === t.event_type && 7 === t.extra ? e.description = JSON.parse(t.description) : e.description = t.description, 55 === t.event_type && 0 === t.from_gid ? e.type = 0 : 55 === t.event_type && 0 != t.from_gid && (e.type = 1), e;}, h.prototype.__checkConnect = function () {if (!this.channel.client.connected) throw new Error("wss socket not connect");}, h.prototype.__checkInit = function () {if (!this.current_appkey) throw new Error("必须执行init操作后能执行此动作");}, h.prototype.__checkLogin = function () {if (!this.current_user) throw new Error("必须执行login操作后能执行此动作");}, h.prototype.__getUploadToken = function () {return this.__checkLogin(), new r(this.channel).setEvent(s.EVENTS.GET_UPLOAD_TOKEN).setData({}).send();}, h.prototype.__uploadFile0 = function (t, e) {wx.uploadFile({ url: s.UPLOAD_FILE + "?type=" + t.type, filePath: t.file, name: "file", header: { "X-App-Key": t.appkey, Authorization: "Basic " + o.btoa(t.username + ":" + t.token), "jm-channel": s.PLAT_CHANNEL }, success: function success(t) {if (200 == t.statusCode) e(null, JSON.parse(t.data));else try {var n = JSON.parse(t.data);e(898061 === n.error.code ? { code: 880210, message: "file size exceed limit" } : n);} catch (t) {e({ code: 880210, message: "file size exceed the limit" });}}, fail: function fail(t) {console.error(JSON.parse(t), " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:2");} });}, h.prototype.__uploadFile = function (t, e) {var n = this;n.__getUploadToken().onSuccess(function (o) {n.__uploadFile0({ type: t.type, file: t.file, appkey: t.appkey, username: t.username, token: o.uptoken }, e);}).onFail(function (t) {e({ data: t });}).onTimeout(function (t) {e({ is_timeout: !0, data: t });});}, h.prototype.__sendMsg = function (t) {return this.__checkLogin(), new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user, this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setText(t.content ? t.content : t.msg_body.text, t.content ? t.extras : t.msg_body.extras).setAtList(t.at_list).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification).build()).send();}, h.prototype.__sendPic = function (t) {this.__checkLogin();var e = new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG),n = this,o = new c(n.current_user, n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification);return t.file ? this.__uploadFile({ appkey: n.current_appkey, username: n.current_user, file: t.file, type: "image" }, function (n, i) {return n ? n.is_timeout ? e.timeout && e.timeout(n.data) : e.fail && e.fail(n.data) : void e.setData(o.setImage(i, t.extras).build()).send();}) : e.setData(o.setImage(t.msg_body, t.msg_body.extras).build()).send(), e;}, h.prototype.__sendVideoOrFile = function (t, e) {this.__checkLogin();var n = new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG),o = this,i = new c(o.current_user, o.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification);return t.file ? this.__uploadFile({ appkey: o.current_appkey, username: o.current_user, file: t.file, type: "file" }, function (o, s) {return o ? o.is_timeout ? n.timeout && n.timeout(o.data) : n.fail && n.fail(o.data) : ("video" === e && (!t.extras && (t.extras = {}), t.extras.video = s.media_id.slice(s.media_id.lastIndexOf(".") + 1)), void n.setData(i.setFile(s, t.extras).build()).send());}) : n.setData(i.setFile(t.msg_body, t.msg_body.extras).build()).send(), n;}, h.prototype.__sendVoice = function (t) {this.__checkLogin();var e = new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : s.EVENTS.SEND_GROUP_MSG),n = this,o = new c(n.current_user, n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification);return t.file ? this.__uploadFile({ appkey: n.current_appkey, username: n.current_user, file: t.file, type: "voice" }, function (n, i) {return n ? n.is_timeout ? e.timeout && e.timeout(n.data) : e.fail && e.fail(n.data) : void e.setData(o.setVoice(i, t.extras).build()).send();}) : e.setData(o.setVoice(t.msg_body, t.msg_body.extras).build()).send(), e;}, h.prototype.__sendLocation = function (t) {return this.__checkLogin(), new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user, this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setLocation(t.latitude ? t : t.msg_body, t.latitude ? t.extras : t.msg_body.extras).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification).build()).send();}, h.prototype.__sendCustom = function (t) {return this.__checkLogin(), new r(this.channel).setEvent("single" === t.type ? s.EVENTS.S_SINGLE_TEXT : "group" === t.type ? s.EVENTS.SEND_GROUP_MSG : s.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user, this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id, t.target_name).setCustom(t.custom ? t.custom : t.msg_body, t.custom ? t.extras : t.msg_body.extras).setCustom(t.custom).setNoOffline(t.no_offline === !0).setNoNotification(t.no_notification === !0).setCustomNotification(t.custom_notification).build()).send();
    }, t.exports = h;}, function (t, e) {"use strict";t.exports = function () {function t(t, e) {var n = (65535 & t) + (65535 & e),o = (t >> 16) + (e >> 16) + (n >> 16);return o << 16 | 65535 & n;}function e(t, e) {return t << e | t >>> 32 - e;}function n(n, o, i, s, r, a) {return t(e(t(t(o, n), t(s, a)), r), i);}function o(t, e, o, i, s, r, a) {return n(e & o | ~e & i, t, e, s, r, a);}function i(t, e, o, i, s, r, a) {return n(e & i | o & ~i, t, e, s, r, a);}function s(t, e, o, i, s, r, a) {return n(e ^ o ^ i, t, e, s, r, a);}function r(t, e, o, i, s, r, a) {return n(o ^ (e | ~i), t, e, s, r, a);}function a(e, n) {e[n >> 5] |= 128 << n % 32, e[(n + 64 >>> 9 << 4) + 14] = n;var a,c,p,u,h,_ = 1732584193,f = -271733879,d = -1732584194,l = 271733878;for (a = 0; a < e.length; a += 16) {c = _, p = f, u = d, h = l, _ = o(_, f, d, l, e[a], 7, -680876936), l = o(l, _, f, d, e[a + 1], 12, -389564586), d = o(d, l, _, f, e[a + 2], 17, 606105819), f = o(f, d, l, _, e[a + 3], 22, -1044525330), _ = o(_, f, d, l, e[a + 4], 7, -176418897), l = o(l, _, f, d, e[a + 5], 12, 1200080426), d = o(d, l, _, f, e[a + 6], 17, -1473231341), f = o(f, d, l, _, e[a + 7], 22, -45705983), _ = o(_, f, d, l, e[a + 8], 7, 1770035416), l = o(l, _, f, d, e[a + 9], 12, -1958414417), d = o(d, l, _, f, e[a + 10], 17, -42063), f = o(f, d, l, _, e[a + 11], 22, -1990404162), _ = o(_, f, d, l, e[a + 12], 7, 1804603682), l = o(l, _, f, d, e[a + 13], 12, -40341101), d = o(d, l, _, f, e[a + 14], 17, -1502002290), f = o(f, d, l, _, e[a + 15], 22, 1236535329), _ = i(_, f, d, l, e[a + 1], 5, -165796510), l = i(l, _, f, d, e[a + 6], 9, -1069501632), d = i(d, l, _, f, e[a + 11], 14, 643717713), f = i(f, d, l, _, e[a], 20, -373897302), _ = i(_, f, d, l, e[a + 5], 5, -701558691), l = i(l, _, f, d, e[a + 10], 9, 38016083), d = i(d, l, _, f, e[a + 15], 14, -660478335), f = i(f, d, l, _, e[a + 4], 20, -405537848), _ = i(_, f, d, l, e[a + 9], 5, 568446438), l = i(l, _, f, d, e[a + 14], 9, -1019803690), d = i(d, l, _, f, e[a + 3], 14, -187363961), f = i(f, d, l, _, e[a + 8], 20, 1163531501), _ = i(_, f, d, l, e[a + 13], 5, -1444681467), l = i(l, _, f, d, e[a + 2], 9, -51403784), d = i(d, l, _, f, e[a + 7], 14, 1735328473), f = i(f, d, l, _, e[a + 12], 20, -1926607734), _ = s(_, f, d, l, e[a + 5], 4, -378558), l = s(l, _, f, d, e[a + 8], 11, -2022574463), d = s(d, l, _, f, e[a + 11], 16, 1839030562), f = s(f, d, l, _, e[a + 14], 23, -35309556), _ = s(_, f, d, l, e[a + 1], 4, -1530992060), l = s(l, _, f, d, e[a + 4], 11, 1272893353), d = s(d, l, _, f, e[a + 7], 16, -155497632), f = s(f, d, l, _, e[a + 10], 23, -1094730640), _ = s(_, f, d, l, e[a + 13], 4, 681279174), l = s(l, _, f, d, e[a], 11, -358537222), d = s(d, l, _, f, e[a + 3], 16, -722521979), f = s(f, d, l, _, e[a + 6], 23, 76029189), _ = s(_, f, d, l, e[a + 9], 4, -640364487), l = s(l, _, f, d, e[a + 12], 11, -421815835), d = s(d, l, _, f, e[a + 15], 16, 530742520), f = s(f, d, l, _, e[a + 2], 23, -995338651), _ = r(_, f, d, l, e[a], 6, -198630844), l = r(l, _, f, d, e[a + 7], 10, 1126891415), d = r(d, l, _, f, e[a + 14], 15, -1416354905), f = r(f, d, l, _, e[a + 5], 21, -57434055), _ = r(_, f, d, l, e[a + 12], 6, 1700485571), l = r(l, _, f, d, e[a + 3], 10, -1894986606), d = r(d, l, _, f, e[a + 10], 15, -1051523), f = r(f, d, l, _, e[a + 1], 21, -2054922799), _ = r(_, f, d, l, e[a + 8], 6, 1873313359), l = r(l, _, f, d, e[a + 15], 10, -30611744), d = r(d, l, _, f, e[a + 6], 15, -1560198380), f = r(f, d, l, _, e[a + 13], 21, 1309151649), _ = r(_, f, d, l, e[a + 4], 6, -145523070), l = r(l, _, f, d, e[a + 11], 10, -1120210379), d = r(d, l, _, f, e[a + 2], 15, 718787259), f = r(f, d, l, _, e[a + 9], 21, -343485551), _ = t(_, c), f = t(f, p), d = t(d, u), l = t(l, h);}return [_, f, d, l];}function c(t) {var e,n = "";for (e = 0; e < 32 * t.length; e += 8) {n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);}return n;}function p(t) {var e,n = [];for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1) {n[e] = 0;}for (e = 0; e < 8 * t.length; e += 8) {n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;}return n;}function u(t) {return c(a(p(t), 8 * t.length));}function h(t, e) {var n,o,i = p(t),s = [],r = [];for (s[15] = r[15] = void 0, i.length > 16 && (i = a(i, 8 * t.length)), n = 0; n < 16; n += 1) {s[n] = 909522486 ^ i[n], r[n] = 1549556828 ^ i[n];}return o = a(s.concat(p(e)), 512 + 8 * e.length), c(a(r.concat(o), 640));}function _(t) {var e,n,o = "0123456789abcdef",i = "";for (n = 0; n < t.length; n += 1) {e = t.charCodeAt(n), i += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);}return i;}function f(t) {return unescape(encodeURIComponent(t));}function d(t) {return u(f(t));}function l(t) {return _(d(t));}function g(t, e) {return h(f(t), f(e));}function m(t, e) {return _(g(t, e));}function y(t, e, n) {return e ? n ? g(e, t) : m(e, t) : n ? d(t) : l(t);}return y;};}, function (t, e, n) {"use strict";var o = n(4),i = function i(t) {this.channel = t, this.rid = this.channel.generateRid(), this.times = 1;};i.prototype.setEvent = function (t) {return this.event = t, this;}, i.prototype.setData = function (t) {return this.data = t, this;}, i.prototype.onSuccess = function (t) {return "function" == typeof t && (this.success = t), this;}, i.prototype.onFail = function (t) {return "function" == typeof t && (this.fail = t), this;}, i.prototype.onTimeout = function (t) {if ("function" == typeof t) {this.timeout = t;var e = this;this.respTimeoutTaskId = setTimeout(function () {e.respTimeoutTask();}, o.RESP_TIMEOUT);}return this;}, i.prototype.onAck = function (t) {return "function" == typeof t && (this.ack = t), this;}, i.prototype.onInnerCall = function (t) {return "function" == typeof t && (this.innerCall = t), this;}, i.prototype.onUserInfoGet = function (t) {return "function" == typeof t && (this.userInfoGet = t), this;}, i.prototype.addHook = function (t) {return "function" == typeof t && (this.hook = t), this;}, i.prototype.ackTimeoutTask = function () {if (this.times < o.RETRY_TIMES) {this.channel.send(this.event, this._data), this.times++;var t = this;this.ackTimeoutTaskId = setTimeout(function () {t.ackTimeoutTask();}, o.ACK_TIMEOUT);} else this.timeout && this.timeout({ rid: this.rid, data: this.data, response_timeout: !1 }), delete this.channel.dataCache[this.rid];return this;}, i.prototype.respTimeoutTask = function () {if (this.times < o.RETRY_TIMES) {this.channel.send(this.event, this._data), this.times++;var t = this;this.respTimeoutTaskId = setTimeout(function () {t.respTimeoutTask();}, o.RESP_TIMEOUT);} else this.timeout && this.timeout({ rid: this.rid, data: this.data, response_timeout: !0 }), delete this.channel.dataCache[this.rid];return this;}, i.prototype.cleanAckTimeout = function () {return this.ackTimeoutTaskId && clearTimeout(this.ackTimeoutTaskId), this;}, i.prototype.cleanRespTimeout = function () {return this.respTimeoutTaskId && clearTimeout(this.respTimeoutTaskId), this;}, i.prototype.send = function () {if (!this.event || !this.data) return void console.error("发send fail，event and data can not empty", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");var t = this;return this.ackTimeoutTaskId = setTimeout(function () {t.ackTimeoutTask();}, o.ACK_TIMEOUT), this._data = JSON.parse(JSON.stringify(this.data)), this._data.rid = this.rid, this.channel.send(this.event, this._data), this.channel.dataCache[this.rid] = this, this;}, t.exports = i;}, function (t, e) {"use strict";var n = function n(t, e) {this.current_user = t, this.current_appkey = e, this.version = 1, this.from_platform = "web";};n.prototype.setNeedReceipt = function (t) {return this.need_receipt = t, this;}, n.prototype.setNoOffline = function (t) {return this.no_offline = t, this;}, n.prototype.setNoNotification = function (t) {return this.no_notification = t, this;}, n.prototype.setType = function (t) {return this.type = t, this;}, n.prototype.setAtList = function (t) {return this.at_list = t, this;}, n.prototype.setAppkey = function (t) {return t && (this.appkey = t), this;}, n.prototype.setTarget = function (t, e) {return this.target_id = t.toString(), this.target_name = e, this;}, n.prototype.setFromName = function (t) {return this.from_name = t, this;}, n.prototype.setText = function (t, e) {return this.msg_type = "text", this.msg_body = { text: t }, e && (this.msg_body.extras = e), this;}, n.prototype.setImage = function (t, e) {return this.msg_type = "image", this.msg_body = { media_id: t.media_id, media_crc32: t.media_crc32, width: t.width, height: t.height, format: t.format, fsize: t.fsize }, e && (this.msg_body.extras = e), this;}, n.prototype.setFile = function (t, e) {return this.msg_type = "file", this.msg_body = { media_id: t.media_id, media_crc32: t.media_crc32, hash: t.hash, fsize: t.fsize, fname: t.fname }, e && (this.msg_body.extras = e), this;}, n.prototype.setVoice = function (t, e) {return this.msg_type = "voice", this.msg_body = { media_id: t.media_id, media_crc32: t.media_crc32, hash: t.hash, fsize: t.fsize, duration: t.duration, format: t.format }, e && (this.msg_body.extras = e), this;}, n.prototype.setCustomNotification = function (t) {return t && (this.custom_notification = t), this;}, n.prototype.setLocation = function (t, e) {return this.msg_type = "location", this.msg_body = { latitude: t.latitude, longitude: t.longitude, scale: t.scale, label: t.label }, e && (this.msg_body.extras = e), this;}, n.prototype.setCustom = function (t) {return this.msg_type = "custom", this.msg_body = t, this;}, n.prototype.build = function () {var t = this.current_user;if ("single" != this.type && "group" != this.type && "across_single" != this.type && "chatroom" != this.type) return console.log("type must be single or group or chatroom", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.target_id) return console.error("target_id must not null", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if ("text" == this.msg_type) {if (!this.msg_body.text && this.at_list && "single" != this.type) this.msg_body.text = " ";else if (!this.msg_body.text && !this.at_list) return console.error("未设置文本消息内容", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");} else if ("custom" == this.msg_type) {if (!this.msg_body) return console.error("custom对象不能为空", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");} else if ("image" == this.msg_type) {if (!this.msg_body.media_id) return console.error("未设置image消息media_id字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.media_crc32) return console.error("未设置image消息media_crc32字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.width) return console.error("未设置image消息width字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.height) return console.error("未设置image消息height字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");} else if ("file" == this.msg_type) {if (!this.msg_body.media_id) return console.error("未设置file消息media_id字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.media_crc32) return console.error("未设置file消息media_crc32字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.fsize) return console.error("未设置file消息fsize字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.fname) return console.error("未设置file消息fname字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");} else if ("location" == this.msg_type) {if (!this.msg_body.latitude) return console.error("未设置location消息latitude字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.longitude) return console.error("未设置location消息longitude字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.scale) return console.error("未设置location消息scale字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.label) return console.error("未设置location消息label字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");} else {if ("voice" != this.msg_type) return console.error("请设置合法的msg_type", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.media_id) return console.error("未设置voice消息media_id字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if (!this.msg_body.media_crc32) return console.error("未设置voice消息media_crc32字段", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");}var e = { version: this.version, target_type: this.type, from_platform: this.from_platform, target_id: this.target_id, target_name: this.target_name, from_id: t, from_name: this.from_name, create_time: new Date().getTime(), msg_type: this.msg_type, msg_body: this.msg_body };this.appkey && (e.target_appkey = this.appkey, e.from_appkey = this.current_appkey);var n = { content: e };if (n.no_offline = this.no_offline, n.no_notification = this.no_notification, n.custom_notification = this.custom_notification, n.target_name = e.target_name, n.need_receipt = this.need_receipt, "single" == e.target_type) n.target_name = e.target_id;else if (n.target_gid = e.target_id, this.at_list && this.at_list instanceof Array) n.users = this.at_list;else if (this.at_list && !(this.at_list instanceof Array)) return console.error("参数值不合法，at_list必须为数组类型", " at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");return this.appkey ? n.appkey = this.appkey : n.appkey = this.current_appkey, n;}, t.exports = n;}, function (t, e) {"use strict";var n = function n(t) {this.args = t;};n.prototype.onSuccess = function (t) {return "function" == typeof t && (this.success = t), this;}, n.prototype.onFail = function (t) {return "function" == typeof t && (this.fail = t), this;}, n.prototype.onTimeout = function (t) {return "function" == typeof t && (this.timeout = t), this;}, n.prototype.onAck = function (t) {return "function" == typeof t && (this.ack = t), this;}, t.exports = n;}, function (t, e) {"use strict";var n = {};n.isBlack = function (t) {return !(t && "string" == typeof t && t.length > 0);};var o = {};o.addItem = function (t, e) {wx.setStorage({ key: t.toString(), data: e });}, o.removeItems = function (t) {wx.getStorageInfo({ success: function success(e) {var n = e.keys,o = [];n.forEach(function (e) {try {var n = wx.getStorageSync(e);n === t && o.push(e);} catch (t) {}}), o.forEach(function (t) {wx.removeStorage({ key: t, success: function success(t) {} });});} });}, o.getItem = function (t) {return wx.getStorageSync(t);};var i = {};i.delRepeatItem = function (t) {var e = [];return t.forEach(function (t) {e.indexOf(t) === -1 && null != t && e.push(t);}), e;};var s = {};s.rooms = {}, t.exports = { StringUtils: n, StorageUtils: o, ArrayUtils: i, Cache: s };}, function (t, e, n) {var o = n(26);e.protocol = 3;var i = e.packets = { open: 0, close: 1, ping: 2, pong: 3, message: 4, upgrade: 5, noop: 6 },s = o(i),r = { type: "error", data: "parser error" };e.encodePacket = function (t, e, n, o) {"function" == typeof n && (o = n, n = null);var s = i[t.type];return void 0 !== t.data && (s += String(t.data)), o("" + s);}, e.decodePacket = function (t, e, n) {if (void 0 === t) return r;if ("string" == typeof t) {var o = t.charAt(0);return Number(o) == o && s[o] ? t.length > 1 ? { type: s[o], data: t.substring(1) } : { type: s[o] } : r;}};}, function (t, e) {t.exports = Object.keys || function (t) {var e = [],n = Object.prototype.hasOwnProperty;for (var o in t) {n.call(t, o) && e.push(o);}return e;};}, function (t, e, n) {t.exports = n(30), t.exports.parser = n(2);}, function (t, e, n) {function o(t, e) {"object" == typeof t && (e = t, t = void 0), e = e || {};var n,o = s(t),r = o.source,u = o.id,h = o.path,_ = p[u] && h in p[u].nsps,f = e.forceNew || e["force new connection"] || !1 === e.multiplex || _;return f ? (c("ignoring socket cache for %s", r), n = a(r, e)) : (p[u] || (c("new io instance for %s", r), p[u] = a(r, e)), n = p[u]), o.query && !e.query ? e.query = o.query : e && "object" == typeof e.query && (e.query = i(e.query)), n.socket(o.path, e);}function i(t) {var e = [];for (var n in t) {t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));}return e.join("&");}var s = n(29),r = n(5),a = n(6),c = n(1)("socket.io-client");t.exports = e = o;var p = e.managers = {};e.protocol = r.protocol, e.connect = o, e.Manager = n(6), e.Socket = n(8);}, function (t, e, n) {function o(t, e) {var n = t;null == t && (t = e.protocol + "//" + e.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? e.protocol + t : e.host + t), /^(https?|wss?):\/\//.test(t) || (s("protocol-less url %s", t), t = "undefined" != typeof e ? e.protocol + "//" + t : "https://" + t), s("parse %s", t), n = i(t)), n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")), n.path = n.path || "/";var o = n.host.indexOf(":") !== -1,r = o ? "[" + n.host + "]" : n.host;return n.id = n.protocol + "://" + r + ":" + n.port, n.href = n.protocol + "://" + r + (e && e.port === n.port ? "" : ":" + n.port), n;}var i = n(15),s = n(1)("socket.io-client:url");t.exports = o;}, function (t, e, n) {function o(t, e) {return this instanceof o ? (e = e || {}, t && "object" == typeof t && (e = t, t = null), t ? (t = u(t), e.hostname = t.host, e.secure = "https" === t.protocol || "wss" === t.protocol, e.port = t.port, t.query && (e.query = t.query)) : e.host && (e.hostname = u(e.host).host), this.secure = !0, this.port = "443", this.agent = e.agent || !1, this.hostname = e.hostname, this.port = e.port, this.query = e.query || {}, "string" == typeof this.query && (this.query = _.decode(this.query)), this.upgrade = !1 !== e.upgrade, this.path = (e.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!e.forceJSONP, this.jsonp = !1 !== e.jsonp, this.forceBase64 = !!e.forceBase64, this.enablesXDR = !!e.enablesXDR, this.timestampParam = e.timestampParam || "t", this.timestampRequests = e.timestampRequests, this.transports = e.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = e.policyPort || 843, this.rememberUpgrade = e.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = e.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== e.perMessageDeflate && (e.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = e.pfx || null, this.key = e.key || null, this.passphrase = e.passphrase || null, this.cert = e.cert || null, this.ca = e.ca || null, this.ciphers = e.ciphers || null, this.rejectUnauthorized = void 0 === e.rejectUnauthorized ? null : e.rejectUnauthorized, this.forceNode = !!e.forceNode, this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, void this.open()) : new o(t, e);}function i(t) {var e = {};for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}return e;}var s = n(10),r = n(3),a = n(1)("engine.io-client:socket"),c = n(12),p = n(2),u = n(15),h = n(37),_ = n(14);t.exports = o, o.priorWebsocketSuccess = !1, r(o.prototype), o.protocol = p.protocol, o.Socket = o, o.Transport = n(9), o.transports = n(10), o.parser = n(2), o.prototype.createTransport = function (t) {a('creating transport "%s"', t);var e = i(this.query);e.EIO = p.protocol, e.transport = t, this.id && (e.sid = this.id);var n = new s({ agent: this.agent, hostname: this.hostname, port: this.port, secure: this.secure, path: this.path, query: e, forceJSONP: this.forceJSONP, jsonp: this.jsonp, forceBase64: this.forceBase64, enablesXDR: this.enablesXDR, timestampRequests: this.timestampRequests, timestampParam: this.timestampParam, policyPort: this.policyPort, socket: this, pfx: this.pfx, key: this.key, passphrase: this.passphrase, cert: this.cert, ca: this.ca, ciphers: this.ciphers, rejectUnauthorized: this.rejectUnauthorized, perMessageDeflate: this.perMessageDeflate, extraHeaders: this.extraHeaders, forceNode: this.forceNode, localAddress: this.localAddress });return n;}, o.prototype.open = function () {var t = "websocket";this.readyState = "opening";try {t = this.createTransport(t);} catch (t) {return this.transports.shift(), void this.open();}t.open(), this.setTransport(t);}, o.prototype.setTransport = function (t) {a("setting transport %s", t.name);var e = this;this.transport && (a("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = t, t.on("drain", function () {e.onDrain();}).on("packet", function (t) {e.onPacket(t);}).on("error", function (t) {e.onError(t);}).on("close", function () {e.onClose("transport close");});}, o.prototype.probe = function (t) {function e() {if (_.onlyBinaryUpgrades) {var e = !this.supportsBinary && _.transport.supportsBinary;h = h || e;}h || (a('probe transport "%s" opened', t), u.send([{ type: "ping", data: "probe" }]), u.once("packet", function (e) {if (!h) if ("pong" === e.type && "probe" === e.data) {if (a('probe transport "%s" pong', t), _.upgrading = !0, _.emit("upgrading", u), !u) return;o.priorWebsocketSuccess = "websocket" === u.name, a('pausing current transport "%s"', _.transport.name), _.transport.pause(function () {h || "closed" !== _.readyState && (a("changing transport and sending upgrade packet"), p(), _.setTransport(u), u.send([{ type: "upgrade" }]), _.emit("upgrade", u), u = null, _.upgrading = !1, _.flush());});} else {a('probe transport "%s" failed', t);var n = new Error("probe error");n.transport = u.name, _.emit("upgradeError", n);}}));}function n() {h || (h = !0, p(), u.close(), u = null);}function i(e) {var o = new Error("probe error: " + e);o.transport = u.name, n(), a('probe transport "%s" failed because of error: %s', t, e), _.emit("upgradeError", o);}function s() {i("transport closed");}function r() {i("socket closed");}function c(t) {u && t.name !== u.name && (a('"%s" works - aborting "%s"', t.name, u.name), n());}function p() {u.removeListener("open", e), u.removeListener("error", i), u.removeListener("close", s), _.removeListener("close", r), _.removeListener("upgrading", c);}a('probing transport "%s"', t);var u = this.createTransport(t, { probe: 1 }),h = !1,_ = this;o.priorWebsocketSuccess = !1, u.once("open", e), u.once("error", i), u.once("close", s), this.once("close", r), this.once("upgrading", c), u.open();}, o.prototype.onOpen = function () {if (this.readyState = "open", o.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {a("starting upgrade probes");for (var t = 0, e = this.upgrades.length; t < e; t++) {this.probe(this.upgrades[t]);}}}, o.prototype.onPacket = function (t) {if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (a('socket receive: type "%s", data "%s"', t.type, t.data), this.emit("packet", t), this.emit("heartbeat"), t.type) {case "open":this.onHandshake(h(t.data));break;case "pong":this.setPing(), this.emit("pong");break;case "error":var e = new Error("server error");e.code = t.data, this.onError(e);break;case "message":this.emit("data", t.data), this.emit("message", t.data);} else a('packet received with socket readyState "%s"', this.readyState);}, o.prototype.onHandshake = function (t) {this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat));}, o.prototype.onHeartbeat = function (t) {clearTimeout(this.pingTimeoutTimer);var e = this;e.pingTimeoutTimer = setTimeout(function () {"closed" !== e.readyState && e.onClose("ping timeout");}, t || e.pingInterval + e.pingTimeout);}, o.prototype.setPing = function () {var t = this;clearTimeout(t.pingIntervalTimer), t.pingIntervalTimer = setTimeout(function () {a("writing ping packet - expecting pong within %sms", t.pingTimeout), t.ping(), t.onHeartbeat(t.pingTimeout);}, t.pingInterval);}, o.prototype.ping = function () {var t = this;this.sendPacket("ping", function () {t.emit("ping");});}, o.prototype.onDrain = function () {this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush();}, o.prototype.flush = function () {"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (a("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"));}, o.prototype.write = o.prototype.send = function (t, e, n) {return this.sendPacket("message", t, e, n), this;}, o.prototype.sendPacket = function (t, e, n, o) {if ("function" == typeof e && (o = e, e = void 0), "function" == typeof n && (o = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {n = n || {}, n.compress = !1 !== n.compress;var i = { type: t, data: e, options: n };this.emit("packetCreate", i), this.writeBuffer.push(i), o && this.once("flush", o), this.flush();}}, o.prototype.close = function () {function t() {o.onClose("forced close"), a("socket closing - telling transport to close"), o.transport.close();}function e() {o.removeListener("upgrade", e), o.removeListener("upgradeError", e), t();}function n() {o.once("upgrade", e), o.once("upgradeError", e);}if ("opening" === this.readyState || "open" === this.readyState) {this.readyState = "closing";var o = this;this.writeBuffer.length ? this.once("drain", function () {this.upgrading ? n() : t();}) : this.upgrading ? n() : t();}return this;}, o.prototype.onError = function (t) {a("socket error %j", t), o.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t);}, o.prototype.onClose = function (t, e) {if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {a('socket close with reason: "%s"', t);var n = this;clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", t, e), n.writeBuffer = [], n.prevBufferLen = 0;}}, o.prototype.filterUpgrades = function (t) {for (var e = [], n = 0, o = t.length; n < o; n++) {~c(this.transports, t[n]) && e.push(t[n]);}return e;};}, function (t, e, n) {!function () {function t(t) {this.message = t;}var n = e,o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype = new Error(), t.prototype.name = "InvalidCharacterError", n.btoa || (n.btoa = function (e) {for (var n, i, s = String(e), r = 0, a = o, c = ""; s.charAt(0 | r) || (a = "=", r % 1); c += a.charAt(63 & n >> 8 - r % 1 * 8)) {if (i = s.charCodeAt(r += .75), i > 255) throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n = n << 8 | i;}return c;}), n.atob || (n.atob = function (e) {var n = String(e).replace(/=+$/, "");if (n.length % 4 == 1) throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for (var i, s, r = 0, a = 0, c = ""; s = n.charAt(a++); ~s && (i = r % 4 ? 64 * i + s : s, r++ % 4) ? c += String.fromCharCode(255 & i >> (-2 * r & 6)) : 0) {s = o.indexOf(s);}return c;});}();}, function (t, e) {function n(t) {t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0;}t.exports = n, n.prototype.duration = function () {var t = this.ms * Math.pow(this.factor, this.attempts++);if (this.jitter) {var e = Math.random(),n = Math.floor(e * this.jitter * t);t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n;}return 0 | Math.min(t, this.max);}, n.prototype.reset = function () {this.attempts = 0;}, n.prototype.setMin = function (t) {this.ms = t;}, n.prototype.setMax = function (t) {this.max = t;}, n.prototype.setJitter = function (t) {this.jitter = t;};}, function (t, e) {t.exports = function (t, e) {var n = function n() {};n.prototype = e.prototype, t.prototype = new n(), t.prototype.constructor = t;};}, function (t, e, n) {function o() {return e.colors[u++ % e.colors.length];}function i(t) {function n() {}function i() {var t = i,n = +new Date(),s = n - (p || n);t.diff = s, t.prev = p, t.curr = n, p = n, null == t.useColors && (t.useColors = e.useColors()), null == t.color && t.useColors && (t.color = o());for (var r = new Array(arguments.length), a = 0; a < r.length; a++) {r[a] = arguments[a];}r[0] = e.coerce(r[0]), "string" != typeof r[0] && (r = ["%o"].concat(r));var c = 0;r[0] = r[0].replace(/%([a-z%])/g, function (n, o) {if ("%%" === n) return n;c++;var i = e.formatters[o];if ("function" == typeof i) {var s = r[c];n = i.call(t, s), r.splice(c, 1), c--;}return n;}), r = e.formatArgs.apply(t, r);var u = i.log || e.log || console.log.bind(console);u.apply(t, r);}n.enabled = !1, i.enabled = !0;var s = e.enabled(t) ? i : n;return s.namespace = t, s;}function s(t) {e.save(t);for (var n = (t || "").split(/[\s,]+/), o = n.length, i = 0; i < o; i++) {n[i] && (t = n[i].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === t[0] ? e.skips.push(new RegExp("^" + t.substr(1) + "$")) : e.names.push(new RegExp("^" + t + "$")));}}function r() {e.enable("");}function a(t) {var n, o;for (n = 0, o = e.skips.length; n < o; n++) {if (e.skips[n].test(t)) return !1;}for (n = 0, o = e.names.length; n < o; n++) {if (e.names[n].test(t)) return !0;}return !1;}function c(t) {return t instanceof Error ? t.stack || t.message : t;}e = t.exports = i.debug = i, e.coerce = c, e.disable = r, e.enable = s, e.enabled = a, e.humanize = n(36), e.names = [], e.skips = [], e.formatters = {};var p,u = 0;}, function (t, e, n) {(function (e) {function o(t) {function n(t) {if (!t) return !1;if (e.Buffer && e.Buffer.isBuffer && e.Buffer.isBuffer(t) || e.ArrayBuffer && t instanceof ArrayBuffer || e.Blob && t instanceof Blob || e.File && t instanceof File) return !0;if (i(t)) {for (var o = 0; o < t.length; o++) {if (n(t[o])) return !0;}} else if (t && "object" == typeof t) {t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON());for (var s in t) {if (Object.prototype.hasOwnProperty.call(t, s) && n(t[s])) return !0;}}return !1;}return n(t);}var i = n(13);t.exports = o;}).call(e, function () {return this;}());}, function (t, e) {function n(t) {if (t = String(t), !(t.length > 1e4)) {var e = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if (e) {var n = parseFloat(e[1]),o = (e[2] || "ms").toLowerCase();switch (o) {case "years":case "year":case "yrs":case "yr":case "y":return n * u;case "days":case "day":case "d":return n * p;case "hours":case "hour":case "hrs":case "hr":case "h":return n * c;case "minutes":case "minute":case "mins":case "min":case "m":return n * a;case "seconds":case "second":case "secs":case "sec":case "s":return n * r;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":return n;default:return;}}}}function o(t) {return t >= p ? Math.round(t / p) + "d" : t >= c ? Math.round(t / c) + "h" : t >= a ? Math.round(t / a) + "m" : t >= r ? Math.round(t / r) + "s" : t + "ms";}function i(t) {return s(t, p, "day") || s(t, c, "hour") || s(t, a, "minute") || s(t, r, "second") || t + " ms";}function s(t, e, n) {if (!(t < e)) return t < 1.5 * e ? Math.floor(t / e) + " " + n : Math.ceil(t / e) + " " + n + "s";}var r = 1e3,a = 60 * r,c = 60 * a,p = 24 * c,u = 365.25 * p;t.exports = function (t, e) {e = e || {};var s = typeof t;if ("string" === s && t.length > 0) return n(t);if ("number" === s && isNaN(t) === !1) return e.long ? i(t) : o(t);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));};}, function (t, e) {var n = /^\s+/,o = /\s+$/;t.exports = function (t) {return "string" == typeof t && t ? (t = t.replace(n, "").replace(o, ""), JSON.parse(t)) : null;};}, function (t, e) {function n() {throw new Error("setTimeout has not been defined");}function o() {throw new Error("clearTimeout has not been defined");}function i(t) {if (u === setTimeout) return setTimeout(t, 0);if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0);try {return u(t, 0);} catch (e) {try {return u.call(null, t, 0);} catch (e) {return u.call(this, t, 0);}}}function s(t) {if (h === clearTimeout) return clearTimeout(t);if ((h === o || !h) && clearTimeout) return h = clearTimeout, clearTimeout(t);try {return h(t);} catch (e) {try {return h.call(null, t);} catch (e) {return h.call(this, t);}}}function r() {l && f && (l = !1, f.length ? d = f.concat(d) : g = -1, d.length && a());}function a() {if (!l) {var t = i(r);l = !0;for (var e = d.length; e;) {for (f = d, d = []; ++g < e;) {f && f[g].run();}g = -1, e = d.length;}f = null, l = !1, s(t);}}function c(t, e) {this.fun = t, this.array = e;}function p() {}var u,h,_ = t.exports = {};!function () {try {u = "function" == typeof setTimeout ? setTimeout : n;} catch (t) {u = n;}try {h = "function" == typeof clearTimeout ? clearTimeout : o;} catch (t) {h = o;}}();var f,d = [],l = !1,g = -1;_.nextTick = function (t) {var e = new Array(arguments.length - 1);if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {e[n - 1] = arguments[n];}d.push(new c(t, e)), 1 !== d.length || l || i(a);}, c.prototype.run = function () {this.fun.apply(null, this.array);}, _.title = "browser", _.browser = !0, _.env = {}, _.argv = [], _.version = "", _.versions = {}, _.on = p, _.addListener = p, _.once = p, _.off = p, _.removeListener = p, _.removeAllListeners = p, _.emit = p, _.binding = function (t) {throw new Error("process.binding is not supported");}, _.cwd = function () {return "/";}, _.chdir = function (t) {throw new Error("process.chdir is not supported");}, _.umask = function () {return 0;};}, function (t, e, n) {(function (t) {var o = n(13),i = n(16);e.deconstructPacket = function (t) {function e(t) {if (!t) return t;if (i(t)) {var s = { _placeholder: !0, num: n.length };return n.push(t), s;}if (o(t)) {for (var r = new Array(t.length), a = 0; a < t.length; a++) {r[a] = e(t[a]);}return r;}if ("object" == typeof t && !(t instanceof Date)) {var r = {};for (var c in t) {r[c] = e(t[c]);}return r;}return t;}var n = [],s = t.data,r = t;return r.data = e(s), r.attachments = n.length, { packet: r, buffers: n };}, e.reconstructPacket = function (t, e) {function n(t) {if (t && t._placeholder) {var i = e[t.num];return i;}if (o(t)) {for (var s = 0; s < t.length; s++) {t[s] = n(t[s]);}return t;}if (t && "object" == typeof t) {for (var r in t) {t[r] = n(t[r]);}return t;}return t;}return t.data = n(t.data), t.attachments = void 0, t;}, e.removeBlobs = function (e, n) {function s(e, c, p) {if (!e) return e;if (t.Blob && e instanceof Blob || t.File && e instanceof File) {r++;var u = new FileReader();u.onload = function () {p ? p[c] = this.result : a = this.result, --r || n(a);}, u.readAsArrayBuffer(e);} else if (o(e)) for (var h = 0; h < e.length; h++) {s(e[h], h, e);} else if (e && "object" == typeof e && !i(e)) for (var _ in e) {s(e[_], _, e);}}var r = 0,a = e;s(a), r || n(a);};}).call(e, function () {return this;}());}, function (t, e) {function n(t) {if (t) return o(t);}function o(t) {for (var e in n.prototype) {t[e] = n.prototype[e];}return t;}t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this;}, n.prototype.once = function (t, e) {function n() {o.off(t, n), e.apply(this, arguments);}var o = this;return this._callbacks = this._callbacks || {}, n.fn = e, this.on(t, n), this;}, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;var n = this._callbacks[t];if (!n) return this;if (1 == arguments.length) return delete this._callbacks[t], this;for (var o, i = 0; i < n.length; i++) {if (o = n[i], o === e || o.fn === e) {n.splice(i, 1);break;}}return this;}, n.prototype.emit = function (t) {this._callbacks = this._callbacks || {};var e = [].slice.call(arguments, 1),n = this._callbacks[t];if (n) {n = n.slice(0);for (var o = 0, i = n.length; o < i; ++o) {n[o].apply(this, e);}}return this;}, n.prototype.listeners = function (t) {return this._callbacks = this._callbacks || {}, this._callbacks[t] || [];}, n.prototype.hasListeners = function (t) {return !!this.listeners(t).length;};}, function (t, e) {function n(t, e) {var n = [];e = e || 0;for (var o = e || 0; o < t.length; o++) {n[o - e] = t[o];}return n;}t.exports = n;}, function (t, e) {"use strict";function n(t) {var e = "";do {e = r[t % a] + e, t = Math.floor(t / a);} while (t > 0);return e;}function o(t) {var e = 0;for (u = 0; u < t.length; u++) {e = e * a + c[t.charAt(u)];}return e;}function i() {var t = n(+new Date());return t !== s ? (p = 0, s = t) : t + "." + n(p++);}for (var s, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), a = 64, c = {}, p = 0, u = 0; u < a; u++) {c[r[u]] = u;}i.encode = n, i.decode = o, t.exports = i;}]);});

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js":
/*!*****************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json");
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\App.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var md5 = function md5() {return __webpack_require__.e(/*! import() | js_sdk/js-md5/build/md5.min */ "common/vendor").then(__webpack_require__.t.bind(null, /*! ./js_sdk/js-md5/build/md5.min.js */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\js-md5\\build\\md5.min.js", 7));};


_vue.default.component('md5', md5);var JIM = function JIM() {return Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! ./js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min.js */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js", 7));};

_vue.default.component('JIM', JIM);var cuCustom = function cuCustom() {return __webpack_require__.e(/*! import() | colorui/components/cu-custom */ "colorui/components/cu-custom").then(__webpack_require__.bind(null, /*! ./colorui/components/cu-custom.vue */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\colorui\\components\\cu-custom.vue"));};

_vue.default.component('cu-custom', cuCustom);
// Vue.prototype.JIM=new JMessage({})

_vue.default.config.productionTip = false;

_App.default.mpType = 'app';

var app = new _vue.default(_objectSpread({},
_App.default));

createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createApp"]))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Fchat%2Fchat\"}":
/*!************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/main.js?{"page":"pages%2Fchat%2Fchat"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat.vue */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Fchatlist%2Fchatlist\"}":
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/main.js?{"page":"pages%2Fchatlist%2Fchatlist"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _chatlist = _interopRequireDefault(__webpack_require__(/*! ./pages/chatlist/chatlist.vue */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chatlist.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Findex%2Findex\"}":
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Flogin%2Flogin\"}":
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/main.js?{"page":"pages%2Flogin%2Flogin"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _login = _interopRequireDefault(__webpack_require__(/*! ./pages/login/login.vue */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_login.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Fme%2Fme\"}":
/*!********************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/main.js?{"page":"pages%2Fme%2Fme"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json");

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js"));
var _me = _interopRequireDefault(__webpack_require__(/*! ./pages/me/me.vue */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_me.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["createPage"]))

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages.json":
/*!********************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ })

}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'colorui/components/cu-custom';__wxRouteBegin = true;__wxAppCurrentFile__ = 'colorui/components/cu-custom.js';

define('colorui/components/cu-custom.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["colorui/components/cu-custom"], {

  /***/"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=script&lang=js&":
  /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                              !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/colorui/components/cu-custom.vue?vue&type=script&lang=js& ***!
                                                                                                                                                                                                                                                                                                                                                                              \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBabelLoaderLibIndexJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibScriptJsNode_modulesVueLoaderLibIndexJsCUsersAdministratorDesktopImColoruiComponentsCuCustomVueVueTypeScriptLangJs(module, exports, __webpack_require__) {

    "use strict";
    /* WEBPACK VAR INJECTION */(function (uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      //
      var _default =
      {
        data: function data() {
          return {
            StatusBar: this.StatusBar,
            CustomBar: this.CustomBar };

        },
        name: 'cu-custom',
        computed: {
          style: function style() {
            var StatusBar = this.StatusBar;
            var CustomBar = this.CustomBar;
            var bgImage = this.bgImage;
            var style = "height:".concat(CustomBar, "px;padding-top:").concat(StatusBar, "px;");
            if (this.bgImage) {
              style = "".concat(style, "background-image:url(").concat(bgImage, ");");
            }
            return style;
          } },

        props: {
          bgColor: {
            type: String,
            default: '' },

          isBack: {
            type: [Boolean, String],
            default: false },

          bgImage: {
            type: String,
            default: '' } },


        methods: {
          BackPage: function BackPage() {
            uni.navigateBack({
              delta: 1 });

          } } };exports.default = _default;
      /* WEBPACK VAR INJECTION */}).call(this, __webpack_require__( /*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */"./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]);

    /***/},

  /***/"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=template&id=111be6be&":
  /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
                                                                                                                                                                                                                                                                                                                                                                                                      !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/colorui/components/cu-custom.vue?vue&type=template&id=111be6be& ***!
                                                                                                                                                                                                                                                                                                                                                                                                      \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function node_modulesVueLoaderLibLoadersTemplateLoaderJsNode_modulesDcloudioVueCliPluginUniPackagesWebpackPreprocessLoaderIndexJsNode_modulesDcloudioWebpackUniMpLoaderLibTemplateJsNode_modulesVueLoaderLibIndexJsCUsersAdministratorDesktopImColoruiComponentsCuCustomVueVueTypeTemplateId111be6be(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "render", function () {return render;});
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return staticRenderFns;});
    var render = function render() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
    };
    var staticRenderFns = [];
    render._withStripped = true;



    /***/},

  /***/"C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue":
  /*!******************************************************************************!*\
                                                                                                              !*** C:/Users/Administrator/Desktop/极光im测试/colorui/components/cu-custom.vue ***!
                                                                                                              \******************************************************************************/
  /*! no static exports found */
  /***/function CUsersAdministratorDesktopImColoruiComponentsCuCustomVue(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _cu_custom_vue_vue_type_template_id_111be6be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./cu-custom.vue?vue&type=template&id=111be6be& */"C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=template&id=111be6be&");
    /* harmony import */var _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./cu-custom.vue?vue&type=script&lang=js& */"C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=script&lang=js&");
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony import */var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */"./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





    /* normalize component */

    var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
    _cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
    _cu_custom_vue_vue_type_template_id_111be6be___WEBPACK_IMPORTED_MODULE_0__["render"],
    _cu_custom_vue_vue_type_template_id_111be6be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
    false,
    null,
    null,
    null);



    /* hot reload */
    if (false) {var api;}
    component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/colorui/components/cu-custom.vue";
    /* harmony default export */__webpack_exports__["default"] = component.exports;

    /***/},

  /***/"C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=script&lang=js&":
  /*!*******************************************************************************************************!*\
                                                                                                                                       !*** C:/Users/Administrator/Desktop/极光im测试/colorui/components/cu-custom.vue?vue&type=script&lang=js& ***!
                                                                                                                                       \*******************************************************************************************************/
  /*! no static exports found */
  /***/function CUsersAdministratorDesktopImColoruiComponentsCuCustomVueVueTypeScriptLangJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=script&lang=js& */"./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=script&lang=js&");
    /* harmony import */var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
    /* harmony reexport (unknown) */for (var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) {if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {__webpack_require__.d(__webpack_exports__, key, function () {return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key];});})(__WEBPACK_IMPORT_KEY__);}
    /* harmony default export */__webpack_exports__["default"] = _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a;

    /***/},

  /***/"C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=template&id=111be6be&":
  /*!*************************************************************************************************************!*\
                                                                                                                                             !*** C:/Users/Administrator/Desktop/极光im测试/colorui/components/cu-custom.vue?vue&type=template&id=111be6be& ***!
                                                                                                                                             \*************************************************************************************************************/
  /*! exports provided: render, staticRenderFns */
  /***/function CUsersAdministratorDesktopImColoruiComponentsCuCustomVueVueTypeTemplateId111be6be(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_111be6be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./cu-custom.vue?vue&type=template&id=111be6be& */"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue?vue&type=template&id=111be6be&");
    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "render", function () {return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_111be6be___WEBPACK_IMPORTED_MODULE_0__["render"];});

    /* harmony reexport (safe) */__webpack_require__.d(__webpack_exports__, "staticRenderFns", function () {return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cu_custom_vue_vue_type_template_id_111be6be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"];});



    /***/} }]);


;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
'colorui/components/cu-custom-create-component',
{
  'colorui/components/cu-custom-create-component': function coloruiComponentsCuCustomCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("C:\\Users\\Administrator\\Desktop\\\u6781\u5149im\u6D4B\u8BD5\\colorui\\components\\cu-custom.vue"));
  } },

[['colorui/components/cu-custom-create-component']]]);
});
require('colorui/components/cu-custom.js');

__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/login/login"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;















var _md = _interopRequireDefault(__webpack_require__(/*! ../../js_sdk/js-md5/src/md5.js */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\js-md5\\src\\md5.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { username: 'moxiyu', password: 'weiaini', re_un: '', re_pw: '', re_nickname: '' };}, onLoad: function onLoad() {}, methods: {
    login_in: function login_in() {
      var that = this;
      var un = that.$data.username;
      var pw = that.$data.password;
      if (!un || !pw) {
        uni.showToast({
          title: '输入不完整' });

        return;
      }
      this.JIM.login({
        'username': un,
        'password': pw }).
      onSuccess(function (data) {
        console.log("%c%s", "color: red; font-size: 24px;", "登录成功", " at pages\\login\\login.vue:47");
        console.log(data, " at pages\\login\\login.vue:48");
        uni.showToast({
          title: '登录成功' });



        uni.setStorage({
          key: 'username',
          data: that.$data.username,
          success: function success() {
            uni.reLaunch({
              url: '../index/index' });

          } });


      }).onFail(function (data) {
        console.log('JIM -登录失败', " at pages\\login\\login.vue:65");
        uni.showToast({
          title: '登录失败' });

      });



    },

    register: function register() {
      var that = this;
      var un = that.$data.re_un;
      var pw = that.$data.re_pw;
      var nn = that.$data.re_nickname;

      if (!un || !pw || !nn) {
        uni.showToast({
          title: '输入不完整' });

        return;
      }

      this.JIM.register({
        'username': un,
        'password': pw,
        'nickname': nn,
        'is_md5': false,
        'address': '江苏',
        'extras': {
          'avatar': 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/github.svg' },

        'media_id': 'qiniu/image/j/4A70699BFF43CC1CE992DD3070AD0909.png' }).
      onSuccess(function (data) {
        console.log("%c%s", "color: red; font-size: 24px;", "注册成功", " at pages\\login\\login.vue:99");
        uni.showToast({
          title: '注册成功' });

      }).onFail(function (data) {
        console.log('JIM -注册失败', " at pages\\login\\login.vue:104");
        console.log(data, " at pages\\login\\login.vue:105");
        uni.showToast({
          title: '注册失败' });

      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=template&id=450b6a95&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue?vue&type=template&id=450b6a95& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue":
/*!*******************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_450b6a95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=450b6a95& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=template&id=450b6a95&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_450b6a95___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_450b6a95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=template&id=450b6a95&":
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/login/login.vue?vue&type=template&id=450b6a95& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_450b6a95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=450b6a95& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\login\\login.vue?vue&type=template&id=450b6a95&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_450b6a95___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_450b6a95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Flogin%2Flogin\"}","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      username: uni.getStorageSync("username"),
      FriendList: null,
      info_me: null };

  },
  onLoad: function onLoad() {
    this.get_info_me();
    this.get_my_friends();
  },
  onShow: function onShow() {
    var username = this.$data.username;
    console.log('我的帐号：' + username, " at pages\\index\\index.vue:34");
    this.JIM.onSyncConversation(function (data) {//离线消息同步监听,可以不要
      console.log('离线消息:', " at pages\\index\\index.vue:36");
      console.log(data, " at pages\\index\\index.vue:37");
      uni.$emit('onSyncConversation', data);

    });
  },
  methods: {
    get_info_me: function get_info_me() {
      var that = this;
      var username = this.$data.username;
      this.JIM.getUserInfo({
        'username': username,
        'appkey': '69e776bb51c3a264cf364a97' }).
      onSuccess(function (data) {
        console.log(data, " at pages\\index\\index.vue:50");
        that.$data.info_me = data.user_info;
        that.get_avatar_me();
      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });
    },
    get_avatar_me: function get_avatar_me() {
      var that = this;
      this.JIM.getResource({
        'media_id': this.$data.info_me.avatar }).
      onSuccess(function (data) {
        //data.code 返回码
        //data.message 描述
        //data.url 资源临时访问路径，具体超时时间expire time会包含在url中
        console.log(data, " at pages\\index\\index.vue:66");
        //头像：data.user_info.avatar
        that.$data.my_avatar = data.url;
        uni.setStorage({
          key: 'my_avatar',
          data: data.url });

      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });
    },
    get_my_friends: function get_my_friends() {
      this.JIM.getFriendList().onSuccess(function (data) {
        console.log(data, " at pages\\index\\index.vue:80");
        //data.code 返回码
        //data.message 描述
        //data.friend_list[] 好友列表，示例如下
        //data.friend_list[0].username
        //data.friend_list[0].appkey
        //data.friend_list[0].nickname
        //data.friend_list[0].avatar 头像
        //data.friend_list[0].memo_nam 好友备注
        //data.friend_list[0].memo_others 其他备注
        //data.friend_list[0].birthday 生日，默认空
        //data.friend_list[0].gender 性别 0 未知， 1 男 ，2 女
        //data.friend_list[0].signature 用户签名
        //data.friend_list[0].region 用户所属地区
        //data.friend_list[0].address 用户地址
        //data.friend_list[0].mtime 用户信息最后修改时间
      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=template&id=729311a7&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/index/index.vue?vue&type=template&id=729311a7& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue":
/*!*******************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/index/index.vue ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_729311a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=729311a7& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=template&id=729311a7&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_729311a7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_729311a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/index/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=template&id=729311a7&":
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/index/index.vue?vue&type=template&id=729311a7& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_729311a7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=729311a7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\index\\index.vue?vue&type=template&id=729311a7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_729311a7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_729311a7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Findex%2Findex\"}","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/chatlist/chatlist';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chatlist/chatlist.js';

define('pages/chatlist/chatlist.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chatlist/chatlist"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/chatlist/chatlist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      Conversation: null,
      username: uni.getStorageSync("username"),
      Time_now: {
        Date: '',
        Y: '',
        M: '',
        D: '',
        h: '',
        m: '',
        s: '' } };


  },
  onLoad: function onLoad() {
    uni.showLoading({
      title: '加载中' });

  },
  onShow: function onShow() {
    this.Times_now();
    this.getConversation();
  },
  methods: {
    getConversation: function getConversation() {
      var that = this;
      this.JIM.getConversation().onSuccess(function (data) {
        console.log('消息列表：', " at pages\\chatlist\\chatlist.vue:58");
        console.log(data.conversations, " at pages\\chatlist\\chatlist.vue:59");
        that.$data.Conversation = data.conversations.reverse();
        //data.code 返回码
        //data.message 描述
        //data.conversations[] 会话列表，属性如下示例
        //data.conversations[0].extras 附加字段
        //data.conversations[0].unread_msg_count 消息未读数
        //data.conversations[0].name  会话名称
        //data.conversations[0].appkey  appkey(单聊)
        //data.conversations[0].username  用户名(单聊)
        //data.conversations[0].nickname  用户昵称(单聊)
        //data.conversations[0].avatar  头像 media_id 
        //data.conversations[0].mtime 会话最后的消息时间戳
        //data.conversations[0].gid 群 id(群聊)
        //data.conversations[0].type  会话类型(3 代表单聊会话类型，4 代表群聊会话类型)

        //console.log(that.get_message_time(data.conversations[0].mtime))



        for (var i = 0; i < data.conversations.length; i++) {
          that.get_message_time(data.conversations[i].mtime, i);
          that.get_avatar(data.conversations[i].avatar, i);
        }
        uni.hideLoading();

      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
        uni.hideLoading();
      });



      this.JIM.onSyncConversation(function (data) {//离线消息同步监听
        console.log('离线消息:', " at pages\\chatlist\\chatlist.vue:94");
        console.log(data, " at pages\\chatlist\\chatlist.vue:95");

      });
      this.JIM.onEventNotification(function (data) {
        console.log(data, " at pages\\chatlist\\chatlist.vue:99");
      });

      this.JIM.onUserInfUpdate(function (data) {
        console.log('onUserInfUpdate : ', " at pages\\chatlist\\chatlist.vue:103");
        console.log(data, " at pages\\chatlist\\chatlist.vue:104");
      });



    },
    get_message_time: function get_message_time(timestamp, msg_ids) {
      var that = this;
      var Time_now = that.$data.Time_now;

      var date = new Date(timestamp);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      if (Y == Time_now.Y && M == Time_now.M && D == Time_now.D) {
        that.$data.Conversation[msg_ids].timess = h + m;
      } else {
        that.$data.Conversation[msg_ids].timess = M + D;
      }
      // return Y + M + D + h + m + s;
    },
    test: function test() {
      con = {
        'version': '1.4.0',
        'target_type': 'single',
        'target_id': 'moxiyu',
        'from_type': 'user',
        'from_id': 'test3',
        'from_name': 'test3',
        'create_time': '时间戳，精确到秒',
        'msg_type': 'text, voice, image, file, video, location, custom',
        'msg_body': '' };

    },
    Times_now: function Times_now() {
      var that = this;
      var date = new Date();
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      // console.log(date)
      that.$data.Time_now.Date = date;
      that.$data.Time_now.Y = Y;
      that.$data.Time_now.M = M;
      that.$data.Time_now.D = D;
      that.$data.Time_now.h = h;
      that.$data.Time_now.m = m;
      that.$data.Time_now.s = s;
    },
    get_avatar: function get_avatar(media_id, msg_ids) {
      var that = this;
      this.JIM.getResource({
        'media_id': media_id }).
      onSuccess(function (data) {
        //data.code 返回码
        //data.message 描述
        //data.url 资源临时访问路径，具体超时时间expire time会包含在url中
        console.log(data, " at pages\\chatlist\\chatlist.vue:167");
        //头像：data.user_info.avatar
        //that.$data.my_avatar=data.url
        that.$data.Conversation[msg_ids].avatar = data.url;
      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });
    },
    to_chat: function to_chat(list_id) {
      var that = this;
      var chater_info = that.$data.Conversation[list_id];
      uni.setStorage({
        key: 'chater_info',
        data: chater_info });

      uni.navigateTo({
        url: '../chat/chat',
        animationDuration: 300 });


    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=template&id=0228e5c1&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/chatlist/chatlist.vue?vue&type=template&id=0228e5c1& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue":
/*!*************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chatlist/chatlist.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chatlist_vue_vue_type_template_id_0228e5c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatlist.vue?vue&type=template&id=0228e5c1& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=template&id=0228e5c1&");
/* harmony import */ var _chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatlist.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chatlist_vue_vue_type_template_id_0228e5c1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chatlist_vue_vue_type_template_id_0228e5c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/pages/chatlist/chatlist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chatlist/chatlist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./chatlist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=template&id=0228e5c1&":
/*!********************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chatlist/chatlist.vue?vue&type=template&id=0228e5c1& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_template_id_0228e5c1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./chatlist.vue?vue&type=template&id=0228e5c1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chatlist\\chatlist.vue?vue&type=template&id=0228e5c1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_template_id_0228e5c1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chatlist_vue_vue_type_template_id_0228e5c1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Fchatlist%2Fchatlist\"}","common/runtime","common/vendor"]]]);
});
require('pages/chatlist/chatlist.js');
__wxRoute = 'pages/me/me';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/me/me.js';

define('pages/me/me.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/me/me"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























var _md = _interopRequireDefault(__webpack_require__(/*! js_sdk/js-md5/src/md5.js */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\js_sdk\\js-md5\\src\\md5.js"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { username: uni.getStorageSync("username"), info_me: null, set_nickname: null, set_gender: null, my_avatar: null };}, onLoad: function onLoad() {}, onShow: function onShow() {this.getinfo();}, methods: { getinfo: function getinfo() {var that = this;var userid = this.userid;var appkey = this.appkey;var username = this.$data.username;this.JIM.getUserInfo({ 'username': username, 'appkey': '69e776bb51c3a264cf364a97' }).onSuccess(function (data) {console.log(data, " at pages\\me\\me.vue:59");that.$data.info_me = data.user_info;that.get_avatar_me(); //data.code 返回码
        //data.message 描述
        //data.user_info.username
        //data.user_info.appkey
        //data.user_info.nickname
        //data.user_info.avatar 头像
        //data.user_info.birthday 生日，默认空
        //data.user_info.gender 性别 0 - 未知， 1 - 男 ，2 - 女
        //data.user_info.signature 用户签名
        //data.user_info.region 用户所属地区
        //data.user_info.address 用户地址
        //data.user_info.mtime 用户信息最后修改时间
        //data.extras 自定义json字段
      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });


      // 此处示范如何获取头像真实地址
      // 获取的用户头像不能直接使用,那只是个文件id,得再次获取真实地址
      // 与其这样费事不如直接用extras开一个avatar字段来保存自己服务器上面的头像链接
    },
    get_avatar_me: function get_avatar_me() {
      var that = this;
      this.JIM.getResource({
        'media_id': this.$data.info_me.avatar }).
      onSuccess(function (data) {
        //data.code 返回码
        //data.message 描述
        //data.url 资源临时访问路径，具体超时时间expire time会包含在url中
        console.log(data, " at pages\\me\\me.vue:93");
        //头像：data.user_info.avatar
        that.$data.my_avatar = data.url;
        uni.setStorage({
          key: 'my_avatar',
          data: data.url });

      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });
    },
    set_userinfo: function set_userinfo() {
      var that = this;
      var nickname = that.$data.set_nickname;
      var gender = that.$data.set_gender;

      var appkey = '69e776bb51c3a264cf364a97';
      var key = '4f7f3575a6910c9560f3d966';
      var timestamp = new Date().getTime();
      var signature = (0, _md.default)("appkey=69e776bb51c3a264cf364a97&timestamp=" + timestamp +
      "&random_str=022cd9fd995849b66666&key=4f7f3575a6910c9560f3d966");

      if (nickname && gender) {
        this.JIM.updateSelfInfo({
          'nickname': nickname,
          'signature': signature,
          'gender': gender }).
        onSuccess(function (data) {
          //data.code 返回码
          //data.message 描述
          console.log(data, " at pages\\me\\me.vue:124");
          that.getinfo();
        }).onFail(function (data) {
          //同上
        });



      } else {

      }
    },
    choice_avatar: function choice_avatar() {
      var that = this;
      var tempFilePaths = null;
      uni.chooseImage({
        count: 1,
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths[0];
          console.log(tempFilePaths, " at pages\\me\\me.vue:143");
          that.JIM.updateSelfAvatar({
            'avatar': tempFilePaths }).
          onSuccess(function (data) {
            //data.code 返回码
            console.log(data, " at pages\\me\\me.vue:148");
            //data.message 描述

            //重新获取信息
            that.getinfo();
          }).onFail(function (data) {
            //同上
          });
        } });




    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=template&id=2fdea041&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue?vue&type=template&id=2fdea041& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue":
/*!*************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _me_vue_vue_type_template_id_2fdea041___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./me.vue?vue&type=template&id=2fdea041& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=template&id=2fdea041&");
/* harmony import */ var _me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./me.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _me_vue_vue_type_template_id_2fdea041___WEBPACK_IMPORTED_MODULE_0__["render"],
  _me_vue_vue_type_template_id_2fdea041___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./me.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./me.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=template&id=2fdea041&":
/*!********************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/me/me.vue?vue&type=template&id=2fdea041& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_template_id_2fdea041___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./me.vue?vue&type=template&id=2fdea041& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\me\\me.vue?vue&type=template&id=2fdea041&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_template_id_2fdea041___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_me_vue_vue_type_template_id_2fdea041___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Fme%2Fme\"}","common/runtime","common/vendor"]]]);
});
require('pages/me/me.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      username: uni.getStorageSync("username"),
      msgss: null,
      my_avatar: uni.getStorageSync("my_avatar"),
      chater_info: null,
      Chat_Record: null,
      my_say_text: '',
      InputBottom: 0,
      Time_now: {
        Date: '',
        Y: '',
        M: '',
        D: '',
        h: '',
        m: '',
        s: '' } };


  },
  onLoad: function onLoad() {
    uni.showLoading({
      title: '加载中' });

    this.Times_now();
    this.load_chater_info();
    this.to_bottom();
    this.get_msg_ol();

  },
  onShow: function onShow() {
    this.to_bottom();

  },
  methods: {
    load_chater_info: function load_chater_info() {
      var that = this;
      var chater_info;
      chater_info = uni.getStorageSync('chater_info');
      that.$data.chater_info = chater_info;
      console.log(chater_info, " at pages\\chat\\chat.vue:90");
      uni.setNavigationBarTitle({
        title: chater_info.nickName });


      //下方初始化聊天记录
      var Chat_Record;

      var Chat_Record_ol = [];
      uni.request({
        url: 'https://report.im.jpush.cn/v2/users/' + that.$data.username +
        '/messages?count=1000&begin_time=2019-06-09%2023:59:59&end_time=2019-06-15%2023:59:59',
        header: {
          "Authorization": 'Basic NjllNzc2YmI1MWMzYTI2NGNmMzY0YTk3OjRmN2YzNTc1YTY5MTBjOTU2MGYzZDk2Ng==' },

        success: function success(res) {
          console.log(res.data, " at pages\\chat\\chat.vue:106");
          var lszs = res.data.messages;
          console.log(res.data.messages, " at pages\\chat\\chat.vue:108");
          for (var i = 0; i < res.data.messages.length; i++) {
            if (res.data.messages[i].from_id == that.$data.chater_info.username && res.data.messages[i].target_id == that.$data.
            username || res.data.messages[i].from_id == that.$data.username && res.data.messages[i].target_id == that.$data.
            chater_info.username) {
              console.log(res.data.messages[i], " at pages\\chat\\chat.vue:113");
              // res.data.messages[i].create_time=that.get_message_time(res.data.messages[i].create_time,i)
              Chat_Record_ol.push(res.data.messages[i]);
            }
          }
          console.log(Chat_Record_ol, " at pages\\chat\\chat.vue:118");
          that.$data.Chat_Record = Chat_Record_ol;
          for (var e = 0; e < Chat_Record_ol.length; e++) {
            that.get_message_time(Chat_Record_ol[e].msg_ctime, e);
          }
        } });

      that.to_bottom();
      uni.hideLoading();
      //更新会话未读消息数   填对方的username，不要填自己的
      this.JIM.resetUnreadCount({
        'username': that.$data.chater_info.username });

    },
    to_bottom: function to_bottom() {
      setTimeout(function () {
        uni.pageScrollTo({
          scrollTop: 3000 });

      }, 1000);

    },
    Times_now: function Times_now() {
      var that = this;
      var date = new Date();
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      // console.log(date)
      that.$data.Time_now.Date = date;
      that.$data.Time_now.Y = Y;
      that.$data.Time_now.M = M;
      that.$data.Time_now.D = D;
      that.$data.Time_now.h = h;
      that.$data.Time_now.m = m;
      that.$data.Time_now.s = s;
    },
    get_message_time: function get_message_time(timestamp, msg_ids) {
      var that = this;
      var Time_now = that.$data.Time_now;

      var date = new Date(timestamp);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
      var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
      var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + '';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      if (Y == Time_now.Y && M == Time_now.M && D == Time_now.D) {
        that.$data.Chat_Record[msg_ids].timess = h + m;
      } else {
        that.$data.Chat_Record[msg_ids].timess = M + D;
      }
      // return Y + M + D + h + m + s;
    },
    to_send: function to_send() {
      var that = this;
      var my_say_text = that.$data.my_say_text;
      if (!my_say_text || my_say_text == '') {
        //无内容直接跳出
        return;
      }

      this.JIM.sendSingleMsg({
        'target_username': that.$data.chater_info.username,
        'target_nickname': that.$data.chater_info.nickName,
        'content': my_say_text,
        'appkey': '69e776bb51c3a264cf364a97' }).
      onSuccess(function (data, msg) {
        //data.code 返回码
        //data.message 描述
        //data.msg_id 发送成功后的消息 id
        //data.ctime_ms 消息生成时间,毫秒
        //data.appkey 用户所属 appkey
        //data.target_username 用户名
        //msg.content 发送成功消息体,见下面消息体详情
        if (data.code == 0) {
          //发送成功了
          that.Times_now();
          var msgss = that.$data.Chat_Record;
          msg.content.timess = that.$data.Time_now.h + that.$data.Time_now.m;
          msgss.push(msg.content);
          that.$data.my_say_text = '';
          that.to_bottom();
        } else {
          uni.showToast({
            title: '发送失败' });

        }
        console.log(data, " at pages\\chat\\chat.vue:210");
        console.log(msg, " at pages\\chat\\chat.vue:211");
      }).onFail(function (data) {
        //data.code 返回码
        //data.message 描述
      });
    },
    get_msg_ol: function get_msg_ol() {
      var that = this;
      uni.$on('msg_ol', function (data) {
        console.log('收到消息，收到消息，收到消息', " at pages\\chat\\chat.vue:220");
        if (data.from_id == that.chater_info.username) {
          that.Times_now();
          var msgss = that.$data.Chat_Record;
          data.timess = that.$data.Time_now.h + that.$data.Time_now.m;
          msgss.push(data);
          that.to_bottom();
          this.JIM.resetUnreadCount({
            'username': that.$data.chater_info.username });

        }
      });
    },

    //编辑框事件
    InputFocus: function InputFocus(e) {
      this.InputBottom = e.detail.height;
    },
    InputBlur: function InputBlur(e) {
      this.InputBottom = 0;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-app-plus/dist/index.js */ "./node_modules/@dcloudio/uni-app-plus/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=template&id=bdb1dcfe&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue?vue&type=template&id=bdb1dcfe& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue":
/*!*****************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_vue_vue_type_template_id_bdb1dcfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.vue?vue&type=template&id=bdb1dcfe& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=template&id=bdb1dcfe&");
/* harmony import */ var _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.vue?vue&type=script&lang=js& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.vue?vue&type=style&index=0&lang=css& */ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_vue_vue_type_template_id_bdb1dcfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_vue_vue_type_template_id_bdb1dcfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=script&lang=js&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=template&id=bdb1dcfe&":
/*!************************************************************************************************!*\
  !*** C:/Users/Administrator/Desktop/极光im测试/pages/chat/chat.vue?vue&type=template&id=bdb1dcfe& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_bdb1dcfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./chat.vue?vue&type=template&id=bdb1dcfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Administrator\\Desktop\\极光im测试\\pages\\chat\\chat.vue?vue&type=template&id=bdb1dcfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_bdb1dcfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_app_HBuilderX_1_9_8_20190518_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_chat_vue_vue_type_template_id_bdb1dcfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["C:\\Users\\Administrator\\Desktop\\极光im测试\\main.js?{\"page\":\"pages%2Fchat%2Fchat\"}","common/runtime","common/vendor"]]]);
});
require('pages/chat/chat.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

