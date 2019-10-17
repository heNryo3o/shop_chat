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
  
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
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
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/index/index.wxml','./pages/login/login.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/login/login","pages/index/index"],"subPackages":[],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"极光im测试","compilerVersion":"1.9.4","usingComponents":{"md5":"/js_sdk/js-md5/build/md5.min","j-i-m":"/js_sdk/wxmp-jiguang/jmessage-wxapplet-sdk-1.4.0/jmessage-wxapplet-sdk-1.4.0.min"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"uni-app","usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/login.json']={"navigationBarTitleText":"登录","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"039f":function(n,e,t){"use strict";var o=t("97be"),a=t.n(o);a.a},2741:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=c(t("66fd")),a=c(t("98cb")),u=c(t("a30c"));function c(n){return n&&n.__esModule?n:{default:n}}var f={onLaunch:function(){o.default.prototype.JIM=new a.default({}),console.log("App Launch"," at App.vue:8");var n="69e776bb51c3a264cf364a97",e=(new Date).getTime(),t=(0,u.default)("appkey=69e776bb51c3a264cf364a97&timestamp="+e+"&random_str=022cd9fd995849b66666&key=4f7f3575a6910c9560f3d966");console.log(t," at App.vue:13"),this.JIM.init({appkey:n,random_str:"022cd9fd995849b66666",signature:t,timestamp:e}).onSuccess(function(n){console.log(n," at App.vue:20")}).onFail(function(n){}),this.JIM.onDisconnect(function(){console.log("JIM断开链接"," at App.vue:26")}),this.JIM.isInit()},onShow:function(){console.log("App Show"," at App.vue:31")},onHide:function(){console.log("App Hide"," at App.vue:34")}};e.default=f},"81a3":function(n,e,t){"use strict";t.r(e);var o=t("aefb");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("039f");var u,c,f=t("2877"),i=Object(f["a"])(o["default"],u,c,!1,null,null,null);e["default"]=i.exports},"97be":function(n,e,t){},aefb:function(n,e,t){"use strict";t.r(e);var o=t("2741"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=a.a}},[["912d","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var t, l, i = r[0], f = r[1], a = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (t in f) {
      Object.prototype.hasOwnProperty.call(f, t) && (e[t] = f[t]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, a || []), n();
  }

  function n() {
    for (var e, r = 0; r < u.length; r++) {
      for (var n = u[r], t = !0, i = 1; i < n.length; i++) {
        var f = n[i];
        0 !== o[f] && (t = !1);
      }

      t && (u.splice(r--, 1), e = l(l.s = n[0]));
    }

    return e;
  }

  var t = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (t[r]) return t[r].exports;
    var n = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(n.exports, n, n.exports, l), n.l = !0, n.exports;
  }

  l.e = function () {
    return Promise.resolve();
  }, l.m = e, l.c = t, l.d = function (e, r, n) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: n
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var t in e) {
      l.d(n, t, function (r) {
        return e[r];
      }.bind(null, t));
    }
    return n;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      f = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var a = 0; a < i.length; a++) {
    r(i[a]);
  }

  var c = f;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0259":function(t,e,n){"use strict";(function(t){n("a2fa");r(n("66fd"));var e=r(n("e3c3"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,s,a){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var p=u.render;u.render=function(t,e){return c.call(e),p(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return r})},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},4362:function(t,e,n){e.nextTick=function(t){setTimeout(t,0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"455d":function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */!function(){function t(t){if(t)d[0]=d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0,this.blocks=d,this.buffer8=l;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}var r="input is invalid type",e="object"==typeof window,i=e?window:{};i.JS_MD5_NO_WINDOW&&(e=!1);var s=!e&&"object"==typeof self,h=!i.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;h?i=global:s&&(i=self);var f=!i.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,o=__webpack_require__("3c35"),a=!i.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,n="0123456789abcdef".split(""),u=[128,32768,8388608,-2147483648],y=[0,8,16,24],c=["hex","array","digest","buffer","arrayBuffer","base64"],p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),d=[],l;if(a){var A=new ArrayBuffer(68);l=new Uint8Array(A),d=new Uint32Array(A)}!i.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!a||!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"==typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var b=function(e){return function(n){return new t(!0).update(n)[e]()}},v=function(){var e=b("hex");h&&(e=w(e)),e.create=function(){return new t},e.update=function(t){return e.create().update(t)};for(var n=0;n<c.length;++n){var r=c[n];e[r]=b(r)}return e},w=function w(t){var e=eval("require('crypto')"),i=eval("require('buffer').Buffer"),s=function(n){if("string"==typeof n)return e.createHash("md5").update(n,"utf8").digest("hex");if(null===n||void 0===n)throw r;return n.constructor===ArrayBuffer&&(n=new Uint8Array(n)),Array.isArray(n)||ArrayBuffer.isView(n)||n.constructor===i?e.createHash("md5").update(new i(n)).digest("hex"):t(n)};return s};t.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw r;if(null===t)throw r;if(a&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!(Array.isArray(t)||a&&ArrayBuffer.isView(t)))throw r;e=!0}for(var o,i,s=0,c=t.length,u=this.blocks,p=this.buffer8;s<c;){if(this.hashed&&(this.hashed=!1,u[0]=u[16],u[16]=u[1]=u[2]=u[3]=u[4]=u[5]=u[6]=u[7]=u[8]=u[9]=u[10]=u[11]=u[12]=u[13]=u[14]=u[15]=0),e)if(a)for(i=this.start;s<c&&i<64;++s)p[i++]=t[s];else for(i=this.start;s<c&&i<64;++s)u[i>>2]|=t[s]<<y[3&i++];else if(a)for(i=this.start;s<c&&i<64;++s)(o=t.charCodeAt(s))<128?p[i++]=o:o<2048?(p[i++]=192|o>>6,p[i++]=128|63&o):o<55296||o>=57344?(p[i++]=224|o>>12,p[i++]=128|o>>6&63,p[i++]=128|63&o):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),p[i++]=240|o>>18,p[i++]=128|o>>12&63,p[i++]=128|o>>6&63,p[i++]=128|63&o);else for(i=this.start;s<c&&i<64;++s)(o=t.charCodeAt(s))<128?u[i>>2]|=o<<y[3&i++]:o<2048?(u[i>>2]|=(192|o>>6)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]):o<55296||o>=57344?(u[i>>2]|=(224|o>>12)<<y[3&i++],u[i>>2]|=(128|o>>6&63)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]):(o=65536+((1023&o)<<10|1023&t.charCodeAt(++s)),u[i>>2]|=(240|o>>18)<<y[3&i++],u[i>>2]|=(128|o>>12&63)<<y[3&i++],u[i>>2]|=(128|o>>6&63)<<y[3&i++],u[i>>2]|=(128|63&o)<<y[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},t.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=u[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},t.prototype.hash=function(){var t,e,n,r,o,i,s=this.blocks;this.first?e=((e=((t=((t=s[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(r=((r=(-1732584194^2004318071&t)+s[1]-117830708)<<12|r>>>20)+t<<0)&(-271733879^t))+s[2]-1126478375)<<17|n>>>15)+r<<0)&(r^t))+s[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((r=this.h3)^e&(n^r))+s[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[1]-389564586)<<12|r>>>20)+t<<0)&(t^e))+s[2]+606105819)<<17|n>>>15)+r<<0)&(r^t))+s[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(r^e&(n^r))+s[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[5]+1200080426)<<12|r>>>20)+t<<0)&(t^e))+s[6]-1473231341)<<17|n>>>15)+r<<0)&(r^t))+s[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+s[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[9]-1958414417)<<12|r>>>20)+t<<0)&(t^e))+s[10]-42063)<<17|n>>>15)+r<<0)&(r^t))+s[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+s[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+s[13]-40341101)<<12|r>>>20)+t<<0)&(t^e))+s[14]-1502002290)<<17|n>>>15)+r<<0)&(r^t))+s[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[1]-165796510)<<5|t>>>27)+e<<0)^e))+s[6]-1069501632)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[11]+643717713)<<14|n>>>18)+r<<0)^r))+s[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[5]-701558691)<<5|t>>>27)+e<<0)^e))+s[10]+38016083)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[15]-660478335)<<14|n>>>18)+r<<0)^r))+s[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[9]+568446438)<<5|t>>>27)+e<<0)^e))+s[14]-1019803690)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[3]-187363961)<<14|n>>>18)+r<<0)^r))+s[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+s[13]-1444681467)<<5|t>>>27)+e<<0)^e))+s[2]-51403784)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+s[7]+1735328473)<<14|n>>>18)+r<<0)^r))+s[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[5]-378558)<<4|t>>>28)+e<<0))+s[8]-2022574463)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[11]+1839030562)<<16|n>>>16)+r<<0))+s[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[1]-1530992060)<<4|t>>>28)+e<<0))+s[4]+1272893353)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[7]-155497632)<<16|n>>>16)+r<<0))+s[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[13]+681279174)<<4|t>>>28)+e<<0))+s[0]-358537222)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[3]-722521979)<<16|n>>>16)+r<<0))+s[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((i=(r=((r+=((o=e^n)^(t=((t+=(o^r)+s[9]-640364487)<<4|t>>>28)+e<<0))+s[12]-421815835)<<11|r>>>21)+t<<0)^t)^(n=((n+=(i^e)+s[15]+530742520)<<16|n>>>16)+r<<0))+s[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[0]-198630844)<<6|t>>>26)+e<<0)|~n))+s[7]+1126891415)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[14]-1416354905)<<15|n>>>17)+r<<0)|~t))+s[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+s[3]-1894986606)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[10]-1051523)<<15|n>>>17)+r<<0)|~t))+s[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+s[15]-30611744)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[6]-1560198380)<<15|n>>>17)+r<<0)|~t))+s[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+s[4]-145523070)<<6|t>>>26)+e<<0)|~n))+s[11]-1120210379)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+s[2]+718787259)<<15|n>>>17)+r<<0)|~t))+s[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},t.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,o=this.h3;return n[t>>4&15]+n[15&t]+n[t>>12&15]+n[t>>8&15]+n[t>>20&15]+n[t>>16&15]+n[t>>28&15]+n[t>>24&15]+n[e>>4&15]+n[15&e]+n[e>>12&15]+n[e>>8&15]+n[e>>20&15]+n[e>>16&15]+n[e>>28&15]+n[e>>24&15]+n[r>>4&15]+n[15&r]+n[r>>12&15]+n[r>>8&15]+n[r>>20&15]+n[r>>16&15]+n[r>>28&15]+n[r>>24&15]+n[o>>4&15]+n[15&o]+n[o>>12&15]+n[o>>8&15]+n[o>>20&15]+n[o>>16&15]+n[o>>28&15]+n[o>>24&15]},t.prototype.toString=t.prototype.hex,t.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},t.prototype.array=t.prototype.digest,t.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},t.prototype.buffer=t.prototype.arrayBuffer,t.prototype.base64=function(){for(var t,e,n,r="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],n=o[i++],r+=p[t>>>2]+p[63&(t<<4|e>>>4)]+p[63&(e<<2|n>>>6)]+p[63&n];return t=o[i],r+(p[t>>>2]+p[t<<4&63]+"==")};var _=v();f?module.exports=_:(i.md5=_,o&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return _}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function s(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var u=Object.prototype.toString;function p(t){return"[object Object]"===u.call(t)}function f(t){return"[object RegExp]"===u.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function l(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function _(t){return null==t?"":Array.isArray(t)||p(t)&&t.toString===u?JSON.stringify(t,null,2):String(t)}function d(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var g=y("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function E(t,e){return v.call(t,e)}function k(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var b=/-(\w)/g,S=k(function(t){return t.replace(b,function(t,e){return e?e.toUpperCase():""})}),w=k(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,A=k(function(t){return t.replace(T,"-$1").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function N(t,e){return t.bind(e)}var R=Function.prototype.bind?N:O;function x(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function C(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function I(t,e,n){}var M=function(t,e,n){return!1},j=function(t){return t};function P(t,e){if(t===e)return!0;var n=c(t),r=c(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return P(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var s=Object.keys(t),a=Object.keys(e);return s.length===a.length&&s.every(function(n){return P(t[n],e[n])})}catch(u){return!1}}function L(t,e){for(var n=0;n<t.length;n++)if(P(t[n],e))return n;return-1}function $(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var U=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],V={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:I,parsePlatformTagName:j,mustUseProp:M,async:!0,_lifecycleHooks:B},G=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Y=new RegExp("[^"+G.source+".$_\\d]");function z(t){if(!Y.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J,K="__proto__"in{},X="undefined"!==typeof window,q="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,W=q&&WXEnvironment.platform.toLowerCase(),Z=X&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===W),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(X)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(no){}var ot=function(){return void 0===J&&(J=!X&&!q&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),J},it=X&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function st(t){return"function"===typeof t&&/native code/.test(t.toString())}var at,ct="undefined"!==typeof Symbol&&st(Symbol)&&"undefined"!==typeof Reflect&&st(Reflect.ownKeys);at="undefined"!==typeof Set&&st(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ut=I,pt=0,ft=function(){this.id=pt++,this.subs=[]};ft.prototype.addSub=function(t){this.subs.push(t)},ft.prototype.removeSub=function(t){m(this.subs,t)},ft.prototype.depend=function(){ft.target&&ft.target.addDep(this)},ft.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ft.target=null;var ht=[];function lt(t){ht.push(t),ft.target=t}function _t(){ht.pop(),ft.target=ht[ht.length-1]}var dt=function(t,e,n,r,o,i,s,a){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=s,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yt={child:{configurable:!0}};yt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,yt);var gt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function mt(t){return new dt(void 0,void 0,void 0,String(t))}function vt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var Et=Array.prototype,kt=Object.create(Et),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=Et[t];H(kt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),s=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),i})});var St=Object.getOwnPropertyNames(kt),wt=!0;function Tt(t){wt=t}var At=function(t){this.value=t,this.dep=new ft,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(K?Ot(t,kt):Nt(t,kt,St),this.observeArray(t)):this.walk(t)};function Ot(t,e){t.__proto__=e}function Nt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function Rt(t,e){var n;if(c(t)&&!(t instanceof dt))return E(t,"__ob__")&&t.__ob__ instanceof At?n=t.__ob__:wt&&!ot()&&(Array.isArray(t)||p(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new At(t)),e&&n&&n.vmCount++,n}function xt(t,e,n,r,o){var i=new ft,s=Object.getOwnPropertyDescriptor(t,e);if(!s||!1!==s.configurable){var a=s&&s.get,c=s&&s.set;a&&!c||2!==arguments.length||(n=t[e]);var u=!o&&Rt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=a?a.call(t):n;return ft.target&&(i.depend(),u&&(u.dep.depend(),Array.isArray(e)&&It(e))),e},set:function(e){var r=a?a.call(t):n;e===r||e!==e&&r!==r||a&&!c||(c?c.call(t,e):n=e,u=!o&&Rt(e),i.notify())}})}}function Ct(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(xt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Dt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||E(t,e)&&(delete t[e],n&&n.dep.notify())}}function It(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&It(e)}At.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)xt(t,e[n])},At.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Rt(t[e])};var Mt=V.optionMergeStrategies;function jt(t,e){if(!e)return t;for(var n,r,o,i=ct?Reflect.ownKeys(e):Object.keys(e),s=0;s<i.length;s++)n=i[s],"__ob__"!==n&&(r=t[n],o=e[n],E(t,n)?r!==o&&p(r)&&p(o)&&jt(r,o):Ct(t,n,o));return t}function Pt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?jt(r,o):o}:e?t?function(){return jt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?$t(n):n}function $t(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Ut(t,e,n,r){var o=Object.create(t||null);return e?C(o,e):o}Mt.data=function(t,e,n){return n?Pt(t,e,n):e&&"function"!==typeof e?t:Pt(t,e)},B.forEach(function(t){Mt[t]=Lt}),U.forEach(function(t){Mt[t+"s"]=Ut}),Mt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in C(o,t),e){var s=o[i],a=e[i];s&&!Array.isArray(s)&&(s=[s]),o[i]=s?s.concat(a):Array.isArray(a)?a:[a]}return o},Mt.props=Mt.methods=Mt.inject=Mt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return C(o,t),e&&C(o,e),o},Mt.provide=Pt;var Bt=function(t,e){return void 0===e?t:e};function Vt(t,e){var n=t.props;if(n){var r,o,i,s={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=S(o),s[i]={type:null})}else if(p(n))for(var a in n)o=n[a],i=S(a),s[i]=p(o)?o:{type:o};else 0;t.props=s}}function Gt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(p(n))for(var i in n){var s=n[i];r[i]=p(s)?C({from:i},s):{from:s}}else 0}}function Ft(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Vt(e,n),Gt(e,n),Ft(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ht(t,e.mixins[r],n);var i,s={};for(i in t)a(i);for(i in e)E(t,i)||a(i);function a(r){var o=Mt[r]||Bt;s[r]=o(t[r],e[r],n,r)}return s}function Yt(t,e,n,r){if("string"===typeof n){var o=t[e];if(E(o,n))return o[n];var i=S(n);if(E(o,i))return o[i];var s=w(i);if(E(o,s))return o[s];var a=o[n]||o[i]||o[s];return a}}function zt(t,e,n,r){var o=e[t],i=!E(n,t),s=n[t],a=qt(Boolean,o.type);if(a>-1)if(i&&!E(o,"default"))s=!1;else if(""===s||s===A(t)){var c=qt(String,o.type);(c<0||a<c)&&(s=!0)}if(void 0===s){s=Jt(r,o,t);var u=wt;Tt(!0),Rt(s),Tt(u)}return s}function Jt(t,e,n){if(E(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Kt(e.type)?r.call(t):r}}function Kt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Kt(t)===Kt(e)}function qt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Xt(e[n],t))return n;return-1}function Wt(t,e,n){lt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var s=!1===o[i].call(r,t,e,n);if(s)return}catch(no){Qt(no,r,"errorCaptured hook")}}}Qt(t,e,n)}finally{_t()}}function Zt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&l(i)&&!i._handled&&(i.catch(function(t){return Wt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(no){Wt(no,r,o)}return i}function Qt(t,e,n){if(V.errorHandler)try{return V.errorHandler.call(null,t,e,n)}catch(no){no!==t&&te(no,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!X&&!q||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function oe(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&st(Promise)){var ie=Promise.resolve();ee=function(){ie.then(oe),et&&setTimeout(I)}}else if(Q||"undefined"===typeof MutationObserver||!st(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&st(setImmediate)?function(){setImmediate(oe)}:function(){setTimeout(oe,0)};else{var se=1,ae=new MutationObserver(oe),ce=document.createTextNode(String(se));ae.observe(ce,{characterData:!0}),ee=function(){se=(se+1)%2,ce.data=String(se)}}function ue(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(no){Wt(no,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var pe=new at;function fe(t){he(t,pe),pe.clear()}function he(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!c(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)he(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)he(t[r[n]],e)}}}var le=k(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function _e(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Zt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Zt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,s,a){var c,u,p,f;for(c in t)u=t[c],p=e[c],f=le(c),r(u)||(r(p)?(r(u.fns)&&(u=t[c]=_e(u,a)),i(f.once)&&(u=t[c]=s(f.name,u,f.capture)),n(f.name,u,f.capture,f.passive,f.params)):u!==p&&(p.fns=u,t[c]=p));for(c in e)r(t[c])&&(f=le(c),o(f.name,e[c],f.capture))}function ye(t,e,n){var i=e.options.props;if(!r(i)){var s={},a=t.attrs,c=t.props;if(o(a)||o(c))for(var u in i){var p=A(u);ge(s,c,u,p,!0)||ge(s,a,u,p,!1)}return s}}function ge(t,e,n,r,i){if(o(e)){if(E(e,n))return t[n]=e[n],i||delete e[n],!0;if(E(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function me(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ve(t){return a(t)?[mt(t)]:Array.isArray(t)?ke(t):void 0}function Ee(t){return o(t)&&o(t.text)&&s(t.isComment)}function ke(t,e){var n,s,c,u,p=[];for(n=0;n<t.length;n++)s=t[n],r(s)||"boolean"===typeof s||(c=p.length-1,u=p[c],Array.isArray(s)?s.length>0&&(s=ke(s,(e||"")+"_"+n),Ee(s[0])&&Ee(u)&&(p[c]=mt(u.text+s[0].text),s.shift()),p.push.apply(p,s)):a(s)?Ee(u)?p[c]=mt(u.text+s):""!==s&&p.push(mt(s)):Ee(s)&&Ee(u)?p[c]=mt(u.text+s.text):(i(t._isVList)&&o(s.tag)&&r(s.key)&&o(e)&&(s.key="__vlist"+e+"_"+n+"__"),p.push(s)));return p}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function Se(t){var e=we(t.$options.inject,t);e&&(Tt(!1),Object.keys(e).forEach(function(n){xt(t,n,e[n])}),Tt(!0))}function we(t,e){if(t){for(var n=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var s=t[i].from,a=e;while(a){if(a._provided&&E(a._provided,s)){n[i]=a._provided[s];break}a=a.$parent}if(!a)if("default"in t[i]){var c=t[i].default;n[i]="function"===typeof c?c.call(e):c}else 0}}return n}}function Te(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,i.context!==e&&i.fnContext!==e||!s||null==s.slot)(n.default||(n.default=[])).push(i);else{var a=s.slot,c=n[a]||(n[a]=[]);"template"===i.tag?c.push.apply(c,i.children||[]):c.push(i)}}for(var u in n)n[u].every(Ae)&&delete n[u];return n}function Ae(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Oe(t,e,r){var o,i=Object.keys(e).length>0,s=t?!!t.$stable:!i,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(s&&r&&r!==n&&a===r.$key&&!i&&!r.$hasNormal)return r;for(var c in o={},t)t[c]&&"$"!==c[0]&&(o[c]=Ne(e,c,t[c]))}else o={};for(var u in e)u in o||(o[u]=Re(e,u));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",s),H(o,"$key",a),H(o,"$hasNormal",i),o}function Ne(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ve(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Re(t,e){return function(){return t[e]}}function xe(t,e){var n,r,i,s,a;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(c(t))if(ct&&t[Symbol.iterator]){n=[];var u=t[Symbol.iterator](),p=u.next();while(!p.done)n.push(e(p.value,n.length)),p=u.next()}else for(s=Object.keys(t),n=new Array(s.length),r=0,i=s.length;r<i;r++)a=s[r],n[r]=e(t[a],a,r);return o(n)||(n=[]),n._isVList=!0,n}function Ce(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=C(C({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var s=n&&n.slot;return s?this.$createElement("template",{slot:s},o):o}function De(t){return Yt(this.$options,"filters",t,!0)||j}function Ie(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Me(t,e,n,r,o){var i=V.keyCodes[e]||n;return o&&r&&!V.keyCodes[e]?Ie(o,r):i?Ie(i,t):r?A(r)!==e:void 0}function je(t,e,n,r,o){if(n)if(c(n)){var i;Array.isArray(n)&&(n=D(n));var s=function(s){if("class"===s||"style"===s||g(s))i=t;else{var a=t.attrs&&t.attrs.type;i=r||V.mustUseProp(e,a,s)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=S(s),u=A(s);if(!(c in i)&&!(u in i)&&(i[s]=n[s],o)){var p=t.on||(t.on={});p["update:"+s]=function(t){n[s]=t}}};for(var a in n)s(a)}else;return t}function Pe(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),$e(r,"__static__"+t,!1),r)}function Le(t,e,n){return $e(t,"__once__"+e+(n?"_"+n:""),!0),t}function $e(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ue(t[r],e+"_"+r,n);else Ue(t,e,n)}function Ue(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(p(e)){var n=t.on=t.on?C({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ve(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ve(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function Ge(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Fe(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Le,t._n=d,t._s=_,t._l=xe,t._t=Ce,t._q=P,t._i=L,t._m=Pe,t._f=De,t._k=Me,t._b=je,t._v=mt,t._e=gt,t._u=Ve,t._g=Be,t._d=Ge,t._p=Fe}function Ye(t,e,r,o,s){var a,c=this,u=s.options;E(o,"_uid")?(a=Object.create(o),a._original=o):(a=o,o=o._original);var p=i(u._compiled),f=!p;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=we(u.inject,o),this.slots=function(){return c.$slots||Oe(t.scopedSlots,c.$slots=Te(r,o)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Oe(t.scopedSlots,this.slots())}}),p&&(this.$options=u,this.$slots=this.slots(),this.$scopedSlots=Oe(t.scopedSlots,this.$slots)),u._scopeId?this._c=function(t,e,n,r){var i=on(a,t,e,n,r,f);return i&&!Array.isArray(i)&&(i.fnScopeId=u._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return on(a,t,e,n,r,f)}}function ze(t,e,r,i,s){var a=t.options,c={},u=a.props;if(o(u))for(var p in u)c[p]=zt(p,u,e||n);else o(r.attrs)&&Ke(c,r.attrs),o(r.props)&&Ke(c,r.props);var f=new Ye(r,c,s,i,t),h=a.render.call(null,f._c,f);if(h instanceof dt)return Je(h,r,f.parent,a,f);if(Array.isArray(h)){for(var l=ve(h)||[],_=new Array(l.length),d=0;d<l.length;d++)_[d]=Je(l[d],r,f.parent,a,f);return _}}function Je(t,e,n,r,o){var i=vt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Ke(t,e){for(var n in e)t[S(n)]=e[n]}He(Ye.prototype);var Xe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Xe.prepatch(n,n)}else{var r=t.componentInstance=Ze(t,wn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Nn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):xn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Cn(e,!0):e.$destroy())}},qe=Object.keys(Xe);function We(t,e,n,s,a){if(!r(t)){var u=n.$options._base;if(c(t)&&(t=u.extend(t)),"function"===typeof t){var p;if(r(t.cid)&&(p=t,t=dn(p,u),void 0===t))return _n(p,e,n,s,a);e=e||{},lr(t),o(e.model)&&en(t.options,e);var f=ye(e,t,a);if(i(t.options.functional))return ze(t,f,e,n,s);var h=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var l=e.slot;e={},l&&(e.slot=l)}Qe(e);var _=t.options.name||a,d=new dt("vue-component-"+t.cid+(_?"-"+_:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:f,listeners:h,tag:a,children:s},p);return d}}}function Ze(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Qe(t){for(var e=t.hook||(t.hook={}),n=0;n<qe.length;n++){var r=qe[n],o=e[r],i=Xe[r];o===i||o&&o._merged||(e[r]=o?tn(i,o):i)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),s=i[r],a=e.model.callback;o(s)?(Array.isArray(s)?-1===s.indexOf(a):s!==a)&&(i[r]=[a].concat(s)):i[r]=a}var nn=1,rn=2;function on(t,e,n,r,o,s){return(Array.isArray(n)||a(n))&&(o=r,r=n,n=void 0),i(s)&&(o=rn),sn(t,e,n,r,o)}function sn(t,e,n,r,i){if(o(n)&&o(n.__ob__))return gt();if(o(n)&&o(n.is)&&(e=n.is),!e)return gt();var s,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===rn?r=ve(r):i===nn&&(r=me(r)),"string"===typeof e)?(a=t.$vnode&&t.$vnode.ns||V.getTagNamespace(e),s=V.isReservedTag(e)?new dt(V.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(c=Yt(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):We(c,n,t,r,e)):s=We(e,n,t,r);return Array.isArray(s)?s:o(s)?(o(a)&&an(s,a),o(n)&&cn(n),s):gt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var s=0,a=t.children.length;s<a;s++){var c=t.children[s];o(c.tag)&&(r(c.ns)||i(n)&&"svg"!==c.tag)&&an(c,e,n)}}function cn(t){c(t.style)&&fe(t.style),c(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Te(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return on(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return on(t,e,n,r,o,!0)};var i=r&&r.data;xt(t,"$attrs",i&&i.attrs||n,null,!0),xt(t,"$listeners",e._parentListeners||n,null,!0)}var pn,fn=null;function hn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=Oe(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(no){Wt(no,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=gt()),t.parent=o,t}}function ln(t,e){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?e.extend(t):t}function _n(t,e,n,r,o){var i=gt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var s=t.owners=[n],a=!0,u=null,p=null;n.$on("hook:destroyed",function(){return m(s,n)});var f=function(t){for(var e=0,n=s.length;e<n;e++)s[e].$forceUpdate();t&&(s.length=0,null!==u&&(clearTimeout(u),u=null),null!==p&&(clearTimeout(p),p=null))},h=$(function(n){t.resolved=ln(n,e),a?s.length=0:f(!0)}),_=$(function(e){o(t.errorComp)&&(t.error=!0,f(!0))}),d=t(h,_);return c(d)&&(l(d)?r(t.resolved)&&d.then(h,_):l(d.component)&&(d.component.then(h,_),o(d.error)&&(t.errorComp=ln(d.error,e)),o(d.loading)&&(t.loadingComp=ln(d.loading,e),0===d.delay?t.loading=!0:u=setTimeout(function(){u=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,f(!1))},d.delay||200)),o(d.timeout)&&(p=setTimeout(function(){p=null,r(t.resolved)&&_(null)},d.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function yn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||yn(n)))return n}}function mn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function vn(t,e){pn.$on(t,e)}function En(t,e){pn.$off(t,e)}function kn(t,e){var n=pn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function bn(t,e,n){pn=t,de(e,n||{},vn,En,kn,t),pn=void 0}function Sn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,s=n._events[t];if(!s)return n;if(!e)return n._events[t]=null,n;var a=s.length;while(a--)if(i=s[a],i===e||i.fn===e){s.splice(a,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?x(n):n;for(var r=x(arguments,1),o='event handler for "'+t+'"',i=0,s=n.length;i<s;i++)Zt(n[i],e,r,e,o)}return e}}var wn=null;function Tn(t){var e=wn;return wn=t,function(){wn=e}}function An(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function On(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=Tn(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Nn(t,e,r,o,i){var s=o.data.scopedSlots,a=t.$scopedSlots,c=!!(s&&!s.$stable||a!==n&&!a.$stable||s&&t.$scopedSlots.$key!==s.$key),u=!!(i||t.$options._renderChildren||c);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Tt(!1);for(var p=t._props,f=t.$options._propKeys||[],h=0;h<f.length;h++){var l=f[h],_=t.$options.props;p[l]=zt(l,_,e,t)}Tt(!0),t.$options.propsData=e}r=r||n;var d=t.$options._parentListeners;t.$options._parentListeners=r,bn(t,r,d),u&&(t.$slots=Te(i,o.context),t.$forceUpdate())}function Rn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function xn(t,e){if(e){if(t._directInactive=!1,Rn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)xn(t.$children[n]);Dn(t,"activated")}}function Cn(t,e){if((!e||(t._directInactive=!0,!Rn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Cn(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){lt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Zt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),_t()}var In=[],Mn=[],jn={},Pn=!1,Ln=!1,$n=0;function Un(){$n=In.length=Mn.length=0,jn={},Pn=Ln=!1}var Bn=Date.now;if(X&&!Q){var Vn=window.performance;Vn&&"function"===typeof Vn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Vn.now()})}function Gn(){var t,e;for(Bn(),Ln=!0,In.sort(function(t,e){return t.id-e.id}),$n=0;$n<In.length;$n++)t=In[$n],t.before&&t.before(),e=t.id,jn[e]=null,t.run();var n=Mn.slice(),r=In.slice();Un(),Yn(n),Fn(r),it&&V.devtools&&it.emit("flush")}function Fn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function Hn(t){t._inactive=!1,Mn.push(t)}function Yn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,xn(t[e],!0)}function zn(t){var e=t.id;if(null==jn[e]){if(jn[e]=!0,Ln){var n=In.length-1;while(n>$n&&In[n].id>t.id)n--;In.splice(n+1,0,t)}else In.push(t);Pn||(Pn=!0,ue(Gn))}}var Jn=0,Kn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Jn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new at,this.newDepIds=new at,this.expression="","function"===typeof e?this.getter=e:(this.getter=z(e),this.getter||(this.getter=I)),this.value=this.lazy?void 0:this.get()};Kn.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(no){if(!this.user)throw no;Wt(no,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),_t(),this.cleanupDeps()}return t},Kn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Kn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Kn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Kn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(no){Wt(no,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Kn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Kn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Kn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xn={enumerable:!0,configurable:!0,get:I,set:I};function qn(t,e,n){Xn.get=function(){return this[e][n]},Xn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Xn)}function Wn(t){t._watchers=[];var e=t.$options;e.props&&Zn(t,e.props),e.methods&&sr(t,e.methods),e.data?Qn(t):Rt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Zn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||Tt(!1);var s=function(i){o.push(i);var s=zt(i,e,n,t);xt(r,i,s),i in t||qn(t,"_props",i)};for(var a in e)s(a);Tt(!0)}function Qn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},p(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&E(r,i)||F(i)||qn(t,"_data",i)}Rt(e,!0)}function tr(t,e){lt();try{return t.call(e,e)}catch(no){return Wt(no,e,"data()"),{}}finally{_t()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],s="function"===typeof i?i:i.get;0,r||(n[o]=new Kn(t,s||I,I,er)),o in t||rr(t,o,i)}}function rr(t,e,n){var r=!ot();"function"===typeof n?(Xn.get=r?or(e):ir(n),Xn.set=I):(Xn.get=n.get?r&&!1!==n.cache?or(e):ir(n.get):I,Xn.set=n.set||I),Object.defineProperty(t,e,Xn)}function or(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ft.target&&e.depend(),e.value}}function ir(t){return function(){return t.call(this,this)}}function sr(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?I:R(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)cr(t,n,r[o]);else cr(t,n,r)}}function cr(t,e,n,r){return p(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ct,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,n){var r=this;if(p(e))return cr(r,t,e,n);n=n||{},n.user=!0;var o=new Kn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Wt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var pr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=pr++,e._isVue=!0,t&&t._isComponent?hr(e,t):e.$options=Ht(lr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,An(e),mn(e),un(e),Dn(e,"beforeCreate"),Wn(e),e.$options.el&&e.$mount(e.$options.el)}}function hr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function lr(t){var e=t.options;if(t.super){var n=lr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=_r(t);o&&C(t.extendOptions,o),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function _r(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function yr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function mr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var s=function(t){this._init(t)};return s.prototype=Object.create(n.prototype),s.prototype.constructor=s,s.cid=e++,s.options=Ht(n.options,t),s["super"]=n,s.options.props&&vr(s),s.options.computed&&Er(s),s.extend=n.extend,s.mixin=n.mixin,s.use=n.use,U.forEach(function(t){s[t]=n[t]}),i&&(s.options.components[i]=s),s.superOptions=n.options,s.extendOptions=t,s.sealedOptions=C({},s.options),o[r]=s,s}}function vr(t){var e=t.options.props;for(var n in e)qn(t.prototype,"_props",n)}function Er(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function kr(t){U.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&p(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function br(t){return t&&(t.Ctor.options.name||t.tag)}function Sr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!f(t)&&t.test(e)}function wr(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var s=n[i];if(s){var a=br(s.componentOptions);a&&!e(a)&&Tr(n,i,r,o)}}}function Tr(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,m(n,e)}fr(dr),ur(dr),Sn(dr),On(dr),hn(dr);var Ar=[String,RegExp,Array],Or={name:"keep-alive",abstract:!0,props:{include:Ar,exclude:Ar,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Tr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){wr(t,function(t){return Sr(e,t)})}),this.$watch("exclude",function(e){wr(t,function(t){return!Sr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=br(n),o=this,i=o.include,s=o.exclude;if(i&&(!r||!Sr(i,r))||s&&r&&Sr(s,r))return e;var a=this,c=a.cache,u=a.keys,p=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;c[p]?(e.componentInstance=c[p].componentInstance,m(u,p),u.push(p)):(c[p]=e,u.push(p),this.max&&u.length>parseInt(this.max)&&Tr(c,u[0],u,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Nr={KeepAlive:Or};function Rr(t){var e={get:function(){return V}};Object.defineProperty(t,"config",e),t.util={warn:ut,extend:C,mergeOptions:Ht,defineReactive:xt},t.set=Ct,t.delete=Dt,t.nextTick=ue,t.observable=function(t){return Rt(t),t},t.options=Object.create(null),U.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,Nr),yr(t),gr(t),mr(t),kr(t)}Rr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Ye}),dr.version="2.6.10";var xr="[object Array]",Cr="[object Object]";function Dr(t,e){var n={};return Ir(t,e),Mr(t,e,"",n),n}function Ir(t,e){if(t!==e){var n=Pr(t),r=Pr(e);if(n==Cr&&r==Cr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Ir(i,e[o])}}else n==xr&&r==xr&&t.length>=e.length&&e.forEach(function(e,n){Ir(t[n],e)})}}function Mr(t,e,n,r){if(t!==e){var o=Pr(t),i=Pr(e);if(o==Cr)if(i!=Cr||Object.keys(t).length<Object.keys(e).length)jr(r,n,t);else{var s=function(o){var i=t[o],s=e[o],a=Pr(i),c=Pr(s);if(a!=xr&&a!=Cr)i!=e[o]&&jr(r,(""==n?"":n+".")+o,i);else if(a==xr)c!=xr?jr(r,(""==n?"":n+".")+o,i):i.length<s.length?jr(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Mr(t,s[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(a==Cr)if(c!=Cr||Object.keys(i).length<Object.keys(s).length)jr(r,(""==n?"":n+".")+o,i);else for(var u in i)Mr(i[u],s[u],(""==n?"":n+".")+o+"."+u,r)};for(var a in t)s(a)}else o==xr?i!=xr?jr(r,n,t):t.length<e.length?jr(r,n,t):t.forEach(function(t,o){Mr(t,e[o],n+"["+o+"]",r)}):jr(r,n,t)}}function jr(t,e,n){t[e]=n}function Pr(t){return Object.prototype.toString.call(t)}function Lr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$mp[t.mpType];console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function $r(t){return In.find(function(e){return t._watcher===e})}function Ur(t,e){if(!t.__next_tick_pending&&!$r(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$mp[t.mpType];console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$mp[t.mpType];console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(no){Wt(no,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Br(t){var e=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{})),n=e.reduce(function(e,n){return e[n]=t[n],e},Object.create(null));return Object.assign(n,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(n["name"]=t.name,n["value"]=t.value),JSON.parse(JSON.stringify(n))}var Vr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$mp[this.mpType],o=Br(this);o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var s=Dr(o,i);Object.keys(s).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(s)),this.__next_tick_pending=!0,r.setData(s,function(){n.__next_tick_pending=!1,Lr(n)})):Lr(this)}};function Gr(){}function Fr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Gr),t.$options.render||(t.$options.render=Gr);var r=function(){t._update(t._render(),n)};return new Kn(t,r,I,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return o(t)||o(e)?Yr(t,zr(e)):""}function Yr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Jr(t):c(t)?Kr(t):"string"===typeof t?t:""}function Jr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Kr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Xr=k(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function qr(t){return Array.isArray(t)?D(t):"string"===typeof t?Xr(t):t}var Wr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Zr(t[r],n.slice(1).join("."))}function Qr(t){var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$mp&&t&&this.$mp[this.mpType]["triggerEvent"](t,{__args__:x(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ur(this,t)},Wr.forEach(function(e){t.prototype[e]=function(t){if(this.$mp)return this.$mp[this.mpType][e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=Se,t.prototype.__call_hook=function(t,e){var n=this;lt();var r,o=n.$options[t],i=t+" hook";if(o)for(var s=0,a=o.length;s<a;s++)r=Zt(o[s],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),_t(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t[e]=n},t.prototype.__set_sync=function(t,e,n){t[e]=n},t.prototype.__get_orig=function(t){return p(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=qr(t),r=e?C(e,n):n;return Object.keys(r).map(function(t){return A(t)+":"+r[t]}).join(";")}}var to=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onReady","onPageShow","onPageHide","onPageResize"];function eo(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==to.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;to.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=to}dr.prototype.__patch__=Vr,dr.prototype.$mount=function(t,e){return Fr(this,t,e)},eo(dr),Qr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=vt,e.createPage=bt,e.createComponent=wt,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=Object.prototype.toString,a=Object.prototype.hasOwnProperty;function c(t){return"function"===typeof t}function u(t){return"string"===typeof t}function p(t){return"[object Object]"===s.call(t)}function f(t,e){return a.call(t,e)}function h(){}function l(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var _=/-(\w)/g,d=l(function(t){return t.replace(_,function(t,e){return e?e.toUpperCase():""})}),y=/requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$/,g=/^create|Manager$/,m=/^on/;function v(t){return g.test(t)}function E(t){return y.test(t)}function k(t){return m.test(t)}function b(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function S(t){return!(v(t)||E(t)||k(t))}function w(t,e){return S(t)?function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return c(t.success)||c(t.fail)||c(t.complete)?e.apply(void 0,[t].concat(r)):b(new Promise(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}))}:e}var T=1e-4,A=750,O=!1,N=0,R=0;function x(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;N=r,R=n,O="ios"===e}function C(t,e){if(0===N&&x(),t=Number(t),0===t)return 0;var n=t/A*(e||N);return n<0&&(n=-n),n=Math.floor(n+T),0===n?1!==R&&O?.5:1:t<0?-n:n}var D={},I=["success","fail","cancel","complete"];function M(t,e,n){return function(r){return e(P(t,r,n))}}function j(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(p(e)){var i=!0===o?e:{};for(var s in c(n)&&(n=n(e,i)||{}),e)if(f(n,s)){var a=n[s];c(a)&&(a=a(e[s],e,i)),a?u(a)?i[a]=e[s]:p(a)&&(i[a.name?a.name:s]=a.value):console.warn("app-plus ".concat(t,"暂不支持").concat(s))}else-1!==I.indexOf(s)?i[s]=M(t,e[s],r):o||(i[s]=e[s]);return i}return c(e)&&(e=M(t,e,r)),e}function P(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return c(D.returnValue)&&(e=D.returnValue(t,e)),j(t,e,n,{},r)}function L(t,e){if(f(D,t)){var n=D[t];return n?function(e,r){var o=n;c(n)&&(o=n(e)),e=j(t,e,o.args,o.returnValue);var i=wx[o.name||t](e,r);return E(t)?P(t,i,o.returnValue,v(t)):i}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var $=Object.create(null),U=["subscribePush","unsubscribePush","onPush","offPush","share"];function B(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};c(n)&&n(o),c(r)&&r(o)}}function V(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}U.forEach(function(t){$[t]=B(t)});var G=Object.freeze({requireNativePlugin:V}),F=Page,H=Component,Y=/:/g,z=l(function(t){return d(t.replace(Y,"-"))});function J(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[z(n)].concat(o))}}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e="onLoad",n=t[e];return t[e]=n?function(){J(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){J(this)},F(t)};var K=Behavior({created:function(){J(this)}});Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(t.behaviors||(t.behaviors=[])).unshift(K),H(t)};var X=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function q(t,e){t.triggerEvent("__l",t.$vm||e,{bubbles:!0,composed:!0})}function W(t){t.detail.$mp?t.detail.$parent||(t.detail.$parent=this.$vm,t.detail.$parent.$children.push(t.detail),t.detail.$root=this.$vm.$root):t.detail.parent||(t.detail.parent=this.$vm)}function Z(t){Q(t)}function Q(t){t.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))}}function tt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){f(n,e)&&(t[e]=n[e])})}function et(t,e){e.forEach(function(e){t[e]=function(t){return this.$vm.__call_hook(e,t)}})}function nt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return p(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||f(n,t)||(n[t]=r[t])}),n}var rt=[String,Number,Boolean,Object,Array,null];function ot(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function it(t){var e=t["behaviors"],n=t["extends"],r=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var i=[];return Array.isArray(e)&&e.forEach(function(t){i.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]=String,o["value"]=null))}),p(n)&&n.props&&i.push(Behavior({properties:at(n.props,!0)})),Array.isArray(r)&&r.forEach(function(t){p(t)&&t.props&&i.push(Behavior({properties:at(t.props,!0)}))}),i}function st(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function at(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r={};return e||(r.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){r[t]={type:null,observer:ot(t)}}):p(t)&&Object.keys(t).forEach(function(e){var o=t[e];if(p(o)){var i=o["default"];c(i)&&(i=i()),o.type=st(e,o.type,i,n),r[e]={type:-1!==rt.indexOf(o.type)?o.type:null,value:i,observer:ot(e)}}else{var s=st(e,o,null,n);r[e]={type:-1!==rt.indexOf(s)?s:null,observer:ot(e)}}}),r}function ct(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=h,t.preventDefault=h,t.target=t.target||{},f(t,"detail")||(t.detail={}),p(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function ut(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],s=e[3],a=r?t.__get_value(r,n):n;Number.isInteger(a)?n=o:i?Array.isArray(a)?n=a.find(function(e){return t.__get_value(i,e)===o}):p(a)?n=Object.keys(a).find(function(e){return t.__get_value(i,a[e])===o}):console.error("v-for 暂不支持循环数据：",a):n=a[o],s&&(n=t.__get_value(s,n))}}),n}function pt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=ut(t,e)}),r}function ft(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,s=!1;if(o&&(s=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return s?[e]:e.detail.__args__||e.detail;var a=pt(t,r,e),c=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!s?c.push(e.detail.__args__[0]):c.push(e):c.push(e.target.value):Array.isArray(t)&&"o"===t[0]?c.push(ft(t)):"string"===typeof t&&f(a,t)?c.push(a[t]):c.push(t)}),c}var lt="~",_t="^";function dt(t){var e=this;t=ct(t);var n=(t.currentTarget||t.target).dataset.eventOpts;if(!n)return console.warn("事件信息不存在");var r=t.type;n.forEach(function(n){var o=n[0],i=n[1],s=o.charAt(0)===_t;o=s?o.slice(1):o;var a=o.charAt(0)===lt;o=a?o.slice(1):o,i&&r===o&&i.forEach(function(n){var r=n[0];if(r){var o=e.$vm[r];if(!c(o))throw new Error(" _vm.".concat(r," is not a function"));if(a){if(o.once)return;o.once=!0}o.apply(e.$vm,ht(e.$vm,t,n[1],n[2],s,r))}})})}function yt(t){var e=t.$mp[t.mpType];Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}var gt=["onHide","onError","onPageNotFound","onUniNViewMessage"];function mt(t){this.$vm||(this.$vm=t,this.$vm.$mp={app:this})}function vt(t){r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=i({data:{}},this.mpType,this.$options.mpInstance),delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(yt(this),tt(this,X)))},created:function(){this.__init_injections(this),this.__init_provide(this)}});var e={onLaunch:function(e){mt.call(this,t),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onLaunch",e)},onShow:function(e){mt.call(this,t),this.$vm.__call_hook("onShow",e)}};return e.globalData=t.$options.globalData||{},et(e,gt),App(e),t}var Et=["onShow","onHide","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap","onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function kt(t){this.$vm||(this.$vm=new t({mpType:"page",mpInstance:this}),this.$vm.__call_hook("created"),this.$vm.$mount())}function bt(t){var e;t=t.default||t,c(t)?(e=t,t=e.extendOptions):e=r.default.extend(t);var n={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),lifetimes:{attached:function(){kt.call(this,e)},ready:function(){this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},methods:{onLoad:function(t){kt.call(this,e),this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},onUnload:function(){this.$vm.__call_hook("onUnload")},__e:dt,__l:W}};return et(n.methods,Et),Z(n),Component(n)}function St(t){if(!this.$vm){var e={mpType:"component",mpInstance:this,propsData:this.properties};this.$vm=new t(e);var n=this.properties.vueSlots;if(Array.isArray(n)&&n.length){var r=Object.create(null);n.forEach(function(t){r[t]=!0}),this.$vm.$scopedSlots=this.$vm.$slots=r}this.$vm.$mount()}}function wt(t){t=t.default||t;var e=it(t),n=at(t.props,!1,t.__file),o=r.default.extend(t),i={options:{multipleSlots:!0,addGlobalClass:!0},data:nt(t,r.default.prototype),behaviors:e,properties:n,lifetimes:{attached:function(){St.call(this,o)},ready:function(){St.call(this,o),q(this),this.$vm.__call_hook("created"),this.$vm.__call_hook("beforeMount"),this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady")},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__e:dt,__l:W}};return Q(i),Component(i)}var Tt={};"undefined"!==typeof Proxy?Tt=new Proxy({},{get:function(t,e){return"upx2px"===e?C:G[e]?w(e,G[e]):f(wx,e)||f(D,e)?w(e,L(e,wx[e])):void 0}}):(Tt.upx2px=C,Object.keys(G).forEach(function(t){Tt[t]=w(t,G[t])}),Object.keys(wx).forEach(function(t){(f(wx,t)||f(D,t))&&(Tt[t]=w(t,L(t,wx[t])))}));var At=Tt,Ot=At;e.default=Ot},"7bd0":function(t,e,n){"use strict";(function(t){n("a2fa");r(n("66fd"));var e=r(n("9702"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"912d":function(t,e,n){"use strict";(function(t){n("a2fa");var e=o(n("66fd")),r=o(n("81a3"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){s(t,e,n[e])})}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(){return n.e("common/vendor").then(n.t.bind(null,"455d",7))};e.default.component("md5",a);var c=function(){return Promise.resolve().then(n.t.bind(null,"98cb",7))};e.default.component("JIM",c),e.default.config.productionTip=!1,r.default.mpType="app";var u=new e.default(i({},r.default));t(u).$mount()}).call(this,n("6e42")["createApp"])},"98cb":function(t,e,n){"use strict";!function(e,n){t.exports=n()}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){t.exports=n(18)},function(t,e,n){(function(r){function o(){return"undefined"!=typeof document&&"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function i(){var t=arguments,n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return t;var r="color: "+this.color;t=[t[0],r,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r),t}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function c(){try{return e.storage.debug}catch(t){}if("undefined"!=typeof r&&"env"in r)return r.env.DEBUG}function u(){try{return window.localStorage}catch(t){}}e=t.exports=n(34),e.log=s,e.formatArgs=i,e.save=a,e.load=c,e.useColors=o,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:u(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(c())}).call(e,n(38))},function(t,e,n){t.exports=n(25)},function(t,e,n){function r(t){if(t)return o(t)}function o(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){var n={SDK_VERSION:"2.6.0",WSS_ADDRESS:"wss://ws.im.jiguang.cn",UPLOAD_FILE:"https://sdk.im.jiguang.cn/resource",ALLOW_MSG_TYPE:["text","image","file","location","custom"],LOGIN_OUT_EVENT:[1,2],FROM_PLATFORM:"x",ACK_TIMEOUT:5e3,RESP_TIMEOUT:3e4,RETRY_TIMES:5,SYNC_INTERVAL:15e4,RECEIPT_REPORT_INTERVAL:2e3,RECEIPT_REPORT_MAX_SIZE:50,EVENT_KEY:"eve-k-",CONVERSATION_KEY:"conversations-",SYNC_TYPE_OPEN:1,SYNC_TYPE_CLOSE:0,FRIEND_INVITE:1,FRIEND_INVITED:2,PLAT_CHANNEL:"w",EVENTS:{ACK:"ack",INIT:"c_init",LOGIN:"login",REGISTER:"register",GET_USER_INFO:"get_across_user_info",GET_ACROSS_USER_INFO:"get_across_user_info",S_SINGLE_TEXT:"s_across_single_text",S_SINGLE_TEXT_:"s_single_text",MSG_SYNC:"msg_sync",MSG_RECV:"msg_recv",MSG_RECV_V2:"msg_recv_v2",SEND_GROUP_MSG:"send_group_msg",CREATE_GROUP:"create_group",GET_GROUPS_LIST:"get_groups_list",GET_GROUP_INFO:"get_group_info",ADD_GROUP_MEMBER:"add_group_member",ADD_ACROSS_GROUP_MEMBER:"add_across_group_member",DEL_GROUP_MEMBER:"del_group_member",DEL_ACROSS_GROUP_MEMBER:"del_across_group_member",GET_GROUP_MEMBERS:"get_group_members",UPDATE_GROUP_INFO:"update_group_info",EXIT_GROUP:"exit_group",EVENT_NOTIFICATION:"event_notification",GET_CONVERSATIONS:"get_conversations",GET_UPLOAD_TOKEN:"get_upload_token",NO_DISTURB:"no_disturb",ADD_MSG_NO_DISTURB_SINGLE:"add_msg_no_disturb_single",DELETE_MSG_NO_DISTURB_SINGLE:"delete_msg_no_disturb_single",ADD_MSG_NO_DISTURB_GROUP:"add_msg_no_disturb_group",DELETE_MSG_NO_DISTURB_GROUP:"delete_msg_no_disturb_group",ADD_MSG_NO_DISTURB_GLOBAL:"add_msg_no_disturb_global",DELETE_MSG_NO_DISTURB_GLOBAL:"delete_msg_no_disturb_global",DISCONNECT:"disconnect",GET_BLACK_LIST:"get_black_list",ADD_BLACK_LIST:"add_black_list",DEL_BLACK_LIST:"del_black_list",UPDATE_SELF_INFO:"update_user_inf",UPDATE_SELF_PWD:"update_user_pwd",ADD_MSG_SHIELD_GROUP:"add_msg_shield_group",DEL_MSG_SHIELD_GROUP:"del_msg_shield_group",ADD_FRIEND:"add_friend",DEL_FRIEND:"del_friend",UPDATE_FRIEND_MEMO:"update_friend_memo",GET_FRIEND_LIST:"get_friend_list",SYNC_CHECK:"sync_check",SYNC_CONVERSATION:"sync_conversation",SYNC_CONVERSATION_ACK:"sync_conversation_ack",MSG_RETRACT:"msg_retract",GET_RESOURCE:"get_resource",LIST_SHIELD_GROUP:"list_shield_group",SYNC_EVENT_CHECK:"sync_event_check",SYNC_EVENT:"sync_event",SYNC_EVENT_ACK:"sync_event_ack",RECEIPT_REPORT:"receipt_report",SYNC_RECEIPT_ACK:"sync_receipt_ack",SYNC_RECEIPT:"sync_receipt",RECEIPT_CHANGE:"receipt_change",UNREAD_GROUP_COUNT:"unread_group_count",UNREAD_SINGLE_COUNT:"unread_single_count",MSG_UNREAD_LIST:"msg_unread_list",TRANS_MSG_SINGLE:"trans_msg_single",TRANS_MSG_GROUP:"trans_msg_group",TRANS_MSG_PLATFORM:"trans_msg_platform",TRANS_MSG_REC:"trans_msg_rec",ADMIN_ADD_GROUP_MEMBER:"admin_add_group_member",APPLY_JOIN_GROUP:"apply_join_group",ROOM_LIST:"room_list",ROOM_LIST_SELF:"room_list_self",JOIN_ROOM:"join_room",EXIT_ROOM:"exit_room",ROOM_INFO:"room_info",SEND_ROOM_MSG:"send_room_msg",ROOM_MSG_SYNC:"room_msg_sync",GROUP_MEM_SILENCE:"group_mem_silence",ROOM_MSG_SYNC_HIS:"room_msg_sync_his",DISSOLVE_GROUP:"dissolve_group",ADD_GROUP_KEEPER:"add_group_keeper",DEL_GROUP_KEEPER:"del_group_keeper",CHANGE_GROUP_ADMIN:"change_group_admin",PUBLIC_GROUP_LIST:"public_group_list"}};t.exports=n},function(t,e,n){function r(){}function o(t){var n="",r=!1;return n+=t.type,e.BINARY_EVENT!=t.type&&e.BINARY_ACK!=t.type||(n+=t.attachments,n+="-"),t.nsp&&"/"!=t.nsp&&(r=!0,n+=t.nsp),null!=t.id&&(r&&(n+=",",r=!1),n+=t.id),null!=t.data&&(r&&(n+=","),n+=JSON.stringify(t.data)),f("encoded %j as %s",t,n),n}function i(t,e){function n(t){var n=l.deconstructPacket(t),r=o(n.packet),i=n.buffers;i.unshift(r),e(i)}l.removeBlobs(t,n)}function s(){this.reconstructor=null}function a(t){var n={},r=0;if(n.type=Number(t.charAt(0)),null==e.types[n.type])return p();if(e.BINARY_EVENT==n.type||e.BINARY_ACK==n.type){for(var o="";"-"!=t.charAt(++r)&&(o+=t.charAt(r),r!=t.length););if(o!=Number(o)||"-"!=t.charAt(r))throw new Error("Illegal attachments");n.attachments=Number(o)}if("/"==t.charAt(r+1))for(n.nsp="";++r;){var i=t.charAt(r);if(","==i)break;if(n.nsp+=i,r==t.length)break}else n.nsp="/";var s=t.charAt(r+1);if(""!==s&&Number(s)==s){for(n.id="";++r;){i=t.charAt(r);if(null==i||Number(i)!=i){--r;break}if(n.id+=t.charAt(r),r==t.length)break}n.id=Number(n.id)}return t.charAt(++r)&&(n=c(n,t.substr(r))),f("decoded %s as %j",t,n),n}function c(t,e){try{t.data=JSON.parse(e)}catch(t){return p()}return t}function u(t){this.reconPack=t,this.buffers=[]}function p(t){return{type:e.ERROR,data:"parser error"}}var f=n(1)("socket.io-parser"),h=n(40),l=n(39),_=n(16);e.protocol=4,e.types=["CONNECT","DISCONNECT","EVENT","ACK","ERROR","BINARY_EVENT","BINARY_ACK"],e.CONNECT=0,e.DISCONNECT=1,e.EVENT=2,e.ACK=3,e.ERROR=4,e.BINARY_EVENT=5,e.BINARY_ACK=6,e.Encoder=r,e.Decoder=s,r.prototype.encode=function(t,n){if(f("encoding packet %j",t),e.BINARY_EVENT==t.type||e.BINARY_ACK==t.type)i(t,n);else{var r=o(t);n([r])}},h(s.prototype),s.prototype.add=function(t){var n;if("string"==typeof t)n=a(t),e.BINARY_EVENT==n.type||e.BINARY_ACK==n.type?(this.reconstructor=new u(n),0===this.reconstructor.reconPack.attachments&&this.emit("decoded",n)):this.emit("decoded",n);else{if(!_(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");n=this.reconstructor.takeBinaryData(t),n&&(this.reconstructor=null,this.emit("decoded",n))}},s.prototype.destroy=function(){this.reconstructor&&this.reconstructor.finishedReconstruction()},u.prototype.takeBinaryData=function(t){if(this.buffers.push(t),this.buffers.length==this.reconPack.attachments){var e=l.reconstructPacket(this.reconPack,this.buffers);return this.finishedReconstruction(),e}return null},u.prototype.finishedReconstruction=function(){this.reconPack=null,this.buffers=[]}},function(t,e,n){function r(t,e){return this instanceof r?(t&&"object"==typeof t&&(e=t,t=void 0),e=e||{},e.path=e.path||"/socket.io",this.nsps={},this.subs=[],this.opts=e,this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||2e3),this.reconnectionDelayMax(e.reconnectionDelayMax||2e3),this.randomizationFactor(e.randomizationFactor||.5),this.backoff=new h({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?3e3:e.timeout),this.readyState="closed",this.uri=t,this.connecting=[],this.lastPing=null,this.encoding=!1,this.packetBuffer=[],this.encoder=new a.Encoder,this.decoder=new a.Decoder,this.autoConnect=!1!==e.autoConnect,void(this.autoConnect&&this.open())):new r(t,e)}var o=n(27),i=n(8),s=n(3),a=n(5),c=n(7),u=n(11),p=n(1)("socket.io-client:manager"),f=n(12),h=n(32),l=Object.prototype.hasOwnProperty;t.exports=r,r.prototype.emitAll=function(){for(var t in this.emit.apply(this,arguments),this.nsps)l.call(this.nsps,t)&&this.nsps[t].emit.apply(this.nsps[t],arguments)},r.prototype.updateSocketIds=function(){for(var t in this.nsps)l.call(this.nsps,t)&&(this.nsps[t].id=this.engine.id)},s(r.prototype),r.prototype.reconnection=function(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection},r.prototype.reconnectionAttempts=function(t){return arguments.length?(this._reconnectionAttempts=t,this):this._reconnectionAttempts},r.prototype.reconnectionDelay=function(t){return arguments.length?(this._reconnectionDelay=t,this.backoff&&this.backoff.setMin(t),this):this._reconnectionDelay},r.prototype.randomizationFactor=function(t){return arguments.length?(this._randomizationFactor=t,this.backoff&&this.backoff.setJitter(t),this):this._randomizationFactor},r.prototype.reconnectionDelayMax=function(t){return arguments.length?(this._reconnectionDelayMax=t,this.backoff&&this.backoff.setMax(t),this):this._reconnectionDelayMax},r.prototype.timeout=function(t){return arguments.length?(this._timeout=t,this):this._timeout},r.prototype.maybeReconnectOnOpen=function(){!this.reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()},r.prototype.open=r.prototype.connect=function(t,e){if(p("readyState %s",this.readyState),~this.readyState.indexOf("open"))return this;p("opening %s",this.uri),this.engine=o(this.uri,this.opts);var n=this.engine,r=this;this.readyState="opening",this.skipReconnect=!1;var i=c(n,"open",function(){r.onopen(),t&&t()}),s=c(n,"error",function(e){if(p("connect_error"),r.cleanup(),r.readyState="closed",r.emitAll("connect_error",e),t){var n=new Error("Connection error");n.data=e,t(n)}else r.maybeReconnectOnOpen()});if(!1!==this._timeout){var a=this._timeout;p("connect attempt will timeout after %d",a);var u=setTimeout(function(){p("connect attempt timed out after %d",a),i.destroy(),n.close(),n.emit("error","timeout"),r.emitAll("connect_timeout",a)},a);this.subs.push({destroy:function(){clearTimeout(u)}})}return this.subs.push(i),this.subs.push(s),this},r.prototype.onopen=function(){p("open"),this.cleanup(),this.readyState="open",this.emit("open");var t=this.engine;this.subs.push(c(t,"data",u(this,"ondata"))),this.subs.push(c(t,"ping",u(this,"onping"))),this.subs.push(c(t,"pong",u(this,"onpong"))),this.subs.push(c(t,"error",u(this,"onerror"))),this.subs.push(c(t,"close",u(this,"onclose"))),this.subs.push(c(this.decoder,"decoded",u(this,"ondecoded")))},r.prototype.onping=function(){this.lastPing=new Date,this.emitAll("ping")},r.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)},r.prototype.ondata=function(t){this.decoder.add(t)},r.prototype.ondecoded=function(t){this.emit("packet",t)},r.prototype.onerror=function(t){p("error",t),this.emitAll("error",t)},r.prototype.socket=function(t,e){function n(){~f(o.connecting,r)||o.connecting.push(r)}var r=this.nsps[t];if(!r){r=new i(this,t,e),this.nsps[t]=r;var o=this;r.on("connecting",n),r.on("connect",function(){r.id=o.engine.id}),this.autoConnect&&n()}return r},r.prototype.destroy=function(t){var e=f(this.connecting,t);~e&&this.connecting.splice(e,1),this.connecting.length||this.close()},r.prototype.packet=function(t){p("writing packet %j",t);var e=this;t.query&&0===t.type&&(t.nsp+="?"+t.query),e.encoding?e.packetBuffer.push(t):(e.encoding=!0,this.encoder.encode(t,function(n){for(var r=0;r<n.length;r++)e.engine.write(n[r],t.options);e.encoding=!1,e.processPacketQueue()}))},r.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var t=this.packetBuffer.shift();this.packet(t)}},r.prototype.cleanup=function(){p("cleanup");for(var t=this.subs.length,e=0;e<t;e++){var n=this.subs.shift();n.destroy()}this.packetBuffer=[],this.encoding=!1,this.lastPing=null,this.decoder.destroy()},r.prototype.close=r.prototype.disconnect=function(){p("disconnect"),this.skipReconnect=!0,this.reconnecting=!1,"opening"===this.readyState&&this.cleanup(),this.backoff.reset(),this.readyState="closed",this.engine&&this.engine.close()},r.prototype.onclose=function(t){p("onclose"),this.cleanup(),this.backoff.reset(),this.readyState="closed",this.emit("close",t),this._reconnection&&!this.skipReconnect&&this.reconnect()},r.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var t=this;if(this.backoff.attempts>=this._reconnectionAttempts)p("reconnect failed"),this.backoff.reset(),this.emitAll("reconnect_failed"),this.reconnecting=!1;else{var e=this.backoff.duration();p("will wait %dms before reconnect attempt",e),this.reconnecting=!0;var n=setTimeout(function(){t.skipReconnect||(p("attempting reconnect"),t.emitAll("reconnect_attempt",t.backoff.attempts),t.emitAll("reconnecting",t.backoff.attempts),t.skipReconnect||t.open(function(e){e?(p("reconnect attempt error"),t.reconnecting=!1,t.reconnect(),t.emitAll("reconnect_error",e.data)):(p("reconnect success"),t.onreconnect())}))},e);this.subs.push({destroy:function(){clearTimeout(n)}})}},r.prototype.onreconnect=function(){var t=this.backoff.attempts;this.reconnecting=!1,this.backoff.reset(),this.updateSocketIds(),this.emitAll("reconnect",t)}},function(t,e){function n(t,e,n){return t.on(e,n),{destroy:function(){t.removeListener(e,n)}}}t.exports=n},function(t,e,n){function r(t,e,n){this.io=t,this.nsp=e,this.json=this,this.ids=0,this.acks={},this.receiveBuffer=[],this.sendBuffer=[],this.connected=!1,this.disconnected=!0,n&&n.query&&(this.query=n.query),this.io.autoConnect&&this.open()}var o=n(5),i=n(3),s=n(41),a=n(7),c=n(11),u=n(1)("socket.io-client:socket"),p=n(35);t.exports=r;var f={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1},h=i.prototype.emit;i(r.prototype),r.prototype.subEvents=function(){if(!this.subs){var t=this.io;this.subs=[a(t,"open",c(this,"onopen")),a(t,"packet",c(this,"onpacket")),a(t,"close",c(this,"onclose"))]}},r.prototype.open=r.prototype.connect=function(){return this.connected?this:(this.subEvents(),this.io.open(),"open"===this.io.readyState&&this.onopen(),this.emit("connecting"),this)},r.prototype.send=function(){var t=s(arguments);return t.unshift("message"),this.emit.apply(this,t),this},r.prototype.emit=function(t){if(f.hasOwnProperty(t))return h.apply(this,arguments),this;var e=s(arguments),n=o.EVENT,r={type:n,data:e,options:{}};return r.options.compress=!this.flags||!1!==this.flags.compress,"function"==typeof e[e.length-1]&&(u("emitting packet with ack id %d",this.ids),this.acks[this.ids]=e.pop(),r.id=this.ids++),this.connected?this.packet(r):this.sendBuffer.push(r),delete this.flags,this},r.prototype.packet=function(t){t.nsp=this.nsp,this.io.packet(t)},r.prototype.onopen=function(){u("transport is open - connecting"),"/"!==this.nsp&&(this.query?this.packet({type:o.CONNECT,query:this.query}):this.packet({type:o.CONNECT}))},r.prototype.onclose=function(t){u("close (%s)",t),this.connected=!1,this.disconnected=!0,delete this.id,this.emit("disconnect",t)},r.prototype.onpacket=function(t){if(t.nsp===this.nsp)switch(t.type){case o.CONNECT:this.onconnect();break;case o.EVENT:this.onevent(t);break;case o.BINARY_EVENT:this.onevent(t);break;case o.ACK:this.onack(t);break;case o.BINARY_ACK:this.onack(t);break;case o.DISCONNECT:this.ondisconnect();break;case o.ERROR:this.emit("error",t.data)}},r.prototype.onevent=function(t){var e=t.data||[];u("emitting event %j",e),null!=t.id&&(u("attaching ack callback to event"),e.push(this.ack(t.id))),this.connected?h.apply(this,e):this.receiveBuffer.push(e)},r.prototype.ack=function(t){var e=this,n=!1;return function(){if(!n){n=!0;var r=s(arguments);u("sending ack %j",r);var i=p(r)?o.BINARY_ACK:o.ACK;e.packet({type:i,id:t,data:r})}}},r.prototype.onack=function(t){var e=this.acks[t.id];"function"==typeof e?(u("calling ack %s with %j",t.id,t.data),e.apply(this,t.data),delete this.acks[t.id]):u("bad ack %s",t.id)},r.prototype.onconnect=function(){this.connected=!0,this.disconnected=!1,this.emit("connect"),this.emitBuffered()},r.prototype.emitBuffered=function(){var t;for(t=0;t<this.receiveBuffer.length;t++)h.apply(this,this.receiveBuffer[t]);for(this.receiveBuffer=[],t=0;t<this.sendBuffer.length;t++)this.packet(this.sendBuffer[t]);this.sendBuffer=[]},r.prototype.ondisconnect=function(){u("server disconnect (%s)",this.nsp),this.destroy(),this.onclose("io server disconnect")},r.prototype.destroy=function(){if(this.subs){for(var t=0;t<this.subs.length;t++)this.subs[t].destroy();this.subs=null}this.io.destroy(this)},r.prototype.close=r.prototype.disconnect=function(){return this.connected&&(u("performing disconnect (%s)",this.nsp),this.packet({type:o.DISCONNECT})),this.destroy(),this.connected&&this.onclose("io client disconnect"),this},r.prototype.compress=function(t){return this.flags=this.flags||{},this.flags.compress=t,this}},function(t,e,n){function r(t){this.path=t.path,this.hostname=t.hostname,this.port=t.port,this.secure=t.secure,this.query=t.query,this.timestampParam=t.timestampParam,this.timestampRequests=t.timestampRequests,this.readyState="",this.agent=t.agent||!1,this.socket=t.socket,this.enablesXDR=t.enablesXDR,this.pfx=t.pfx,this.key=t.key,this.passphrase=t.passphrase,this.cert=t.cert,this.ca=t.ca,this.ciphers=t.ciphers,this.rejectUnauthorized=t.rejectUnauthorized,this.forceNode=t.forceNode,this.extraHeaders=t.extraHeaders,this.localAddress=t.localAddress}var o=n(2),i=n(3);t.exports=r,i(r.prototype),r.prototype.onError=function(t,e){var n=new Error(t);return n.type="TransportError",n.description=e,this.emit("error",n),this},r.prototype.open=function(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this},r.prototype.close=function(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this},r.prototype.send=function(t){if("open"!==this.readyState)throw new Error("Transport not open");this.write(t)},r.prototype.onOpen=function(){this.readyState="open",this.writable=!0,this.emit("open")},r.prototype.onData=function(t){var e=o.decodePacket(t,this.socket.binaryType);this.onPacket(e)},r.prototype.onPacket=function(t){this.emit("packet",t)},r.prototype.onClose=function(){this.readyState="closed",this.emit("close")}},function(t,e,n){function r(t){var e=t&&t.forceBase64;e&&(this.supportsBinary=!1),this.perMessageDeflate=t.perMessageDeflate,o.call(this,t)}var o=n(9),i=n(2),s=n(14),a=n(33),c=n(42),u=n(1)("engine.io-client:websocket");t.exports=r,a(r,o),r.prototype.name="wx",r.prototype.supportsBinary=!0,r.prototype.doOpen=function(){if(this.check()){var t=this.uri(),e={agent:this.agent,perMessageDeflate:this.perMessageDeflate};e.pfx=this.pfx,e.key=this.key,e.passphrase=this.passphrase,e.cert=this.cert,e.ca=this.ca,e.ciphers=this.ciphers,e.rejectUnauthorized=this.rejectUnauthorized,this.extraHeaders&&(e.headers=this.extraHeaders),this.localAddress&&(e.localAddress=this.localAddress),this.isOk=!1,this.ws=wx,this.ws.connectSocket({url:t}),void 0===this.ws.binaryType&&(this.supportsBinary=!1),this.ws.supports&&this.ws.supports.binary?(this.supportsBinary=!0,this.ws.binaryType="nodebuffer"):this.ws.binaryType="arraybuffer",this.addEventListeners()}},r.prototype.addEventListeners=function(){var t=this;this.ws.onSocketOpen(function(){t.onOpen(),t.isOk=!0}),this.ws.onSocketClose(function(){t.onClose(),t.isOk=!1}),this.ws.onSocketMessage(function(e){t.onData(e.data)}),this.ws.onSocketError(function(e){t.onError("websocket error",e)})},r.prototype.write=function(t){function e(){n.emit("flush"),setTimeout(function(){n.writable=!0,n.emit("drain")},0)}var n=this;this.writable=!1;for(var r=t.length,o=0,s=r;o<s;o++)!function(t){i.encodePacket(t,n.supportsBinary,function(t){try{n.ws.sendSocketMessage({data:t})}catch(t){u("websocket closed before onclose event")}--r||e()})}(t[o])},r.prototype.onClose=function(){o.prototype.onClose.call(this)},r.prototype.doClose=function(){"undefined"!=typeof this.ws&&this.ws.closeSocket()},r.prototype.uri=function(){var t=this.query||{},e=this.secure?"wss":"ws",n="";this.port&&("wss"===e&&443!==Number(this.port)||"ws"===e&&80!==Number(this.port))&&(n=":"+this.port),this.timestampRequests&&(t[this.timestampParam]=c()),this.supportsBinary||(t.b64=1),t=s.encode(t),t.length&&(t="?"+t);var r=-1!==this.hostname.indexOf(":");return e+"://"+(r?"["+this.hostname+"]":this.hostname)+n+this.path+t},r.prototype.check=function(){return!this.isOk}},function(t,e){var n=[].slice;t.exports=function(t,e){if("string"==typeof e&&(e=t[e]),"function"!=typeof e)throw new Error("bind() requires a function");var r=n.call(arguments,2);return function(){return e.apply(t,r.concat(n.call(arguments)))}}},function(t,e){var n=[].indexOf;t.exports=function(t,e){if(n)return t.indexOf(e);for(var r=0;r<t.length;++r)if(t[r]===e)return r;return-1}},function(t,e){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},function(t,e){e.encode=function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&(e.length&&(e+="&"),e+=encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e},e.decode=function(t){for(var e={},n=t.split("&"),r=0,o=n.length;r<o;r++){var i=n[r].split("=");e[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return e}},function(t,e){var n=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];t.exports=function(t){var e=t,o=t.indexOf("["),i=t.indexOf("]");-1!=o&&-1!=i&&(t=t.substring(0,o)+t.substring(o,i).replace(/:/g,";")+t.substring(i,t.length));for(var s=n.exec(t||""),a={},c=14;c--;)a[r[c]]=s[c]||"";return-1!=o&&-1!=i&&(a.source=e,a.host=a.host.substring(1,a.host.length-1).replace(/;/g,":"),a.authority=a.authority.replace("[","").replace("]","").replace(/;/g,":"),a.ipv6uri=!0),a}},function(t,e){(function(e){function n(t){return e.Buffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer}t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(3),o=n(28),i=n(4),s=function(t){this.init(t)};s.prototype.init=function(t){this.opts=t,this.dataCache={},this.memStore={},this.sync_key=0,this.sync_type=0,void 0!=this.client&&this.client.close(),this.client=o(this.opts.address,{transports:["websocket","polling"]});var e=this,n=r.prototype.emit,i=this.client.onevent;this.client.onevent=function(t){var r=t.data||[];i.call(e.client,t),n.apply(e.client,["*"].concat(r))},this.client.on("*",function(t,n){e.onReceive(t,n)})},s.prototype.onReceive=function(t,e){if(this.opts.debug&&console.log("---<- event:%s, data:%s",t,JSON.stringify(e)," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:1"),t!==i.EVENTS.EVENT_NOTIFICATION&&t!==i.EVENTS.MSG_SYNC&&t!==i.EVENTS.SYNC_CONVERSATION&&t!==i.EVENTS.SYNC_EVENT&&t!==i.EVENTS.SYNC_RECEIPT&&t!==i.EVENTS.RECEIPT_CHANGE&&t!==i.ROOM_MSG_SYNC&&t!==i.ROOM_MSG_SYNC_HIS){var n=this.dataCache[e.rid];delete e.rid,n&&(0===e.code&&t===i.EVENTS.GET_GROUP_MEMBERS?e.member_list.forEach(function(t){n.userInfoGet&&n.userInfoGet(t.uid,t.mtime),delete t.uid,delete t.mtime}):0===e.code&&t===i.EVENTS.GET_CONVERSATIONS?e.conversations.forEach(function(t){3===t.type&&(n.userInfoGet&&n.userInfoGet(t.key,t.utime),delete t.utime)}):0===e.code&&t===i.EVENTS.GET_FRIEND_LIST?e.friend_list.forEach(function(t){n.userInfoGet&&n.userInfoGet(t.uid,1e3*t.mtime),delete t.uid}):0===e.code&&t===i.EVENTS.GET_BLACK_LIST&&e.black_list.forEach(function(t){delete t.uid}),t===i.EVENTS.ACK?(n.ack&&n.ack({rid:e.rid,data:n.data}),n.cleanAckTimeout()):(n.cleanRespTimeout(),delete this.dataCache[n.rid],e.code&&0!==e.code?n.fail&&n.fail(e):t!=i.EVENTS.S_SINGLE_TEXT_&&t!=i.EVENTS.SEND_GROUP_MSG&&t!=i.EVENTS.SEND_ROOM_MSG?n.hook?n.hook(e,n.success):n.success&&n.success(e):(n.data.msg_id=e.msg_id,t===i.EVENTS.S_SINGLE_TEXT_&&(e.target_username=n.data.content.target_id,e.appkey=n.data.appkey),n.success&&n.success(e,n.data),n.innerCall&&n.innerCall(e.msg_id))))}},s.prototype.generateRid=function(){for(var t=Math.floor(-2147483646*Math.random()+2147483647);this.dataCache[t];)t=Math.floor(-2147483646*Math.random()+2147483647);return t},s.prototype.send=function(t,e){this.opts.debug&&console.log("---\x3e- event:%s, data:%s",t,JSON.stringify(e)," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:1"),this.client.emit(t,e)},t.exports=s},function(t,e,n){var r=n(19);t.exports=r},function(t,e,n){var r=n(31),o=n(17),i=n(4),s=n(21),a=n(23),c=n(22),u=n(20)(),p=n(24),f=function(t){var e=t||{};this.opts={address:e.address?e.address:i.WSS_ADDRESS,debug:!!e.debug},this.channel=new o(this.opts),this.syncTask=0,this.msgReceipTask=0};f.prototype.init=function(t){var e=this;return e.autoDiscon=!0,t.flag!==i.SYNC_TYPE_OPEN&&t.flag!==i.SYNC_TYPE_CLOSE||(e.channel.sync_type=t.flag),t.fromPlatForm=i.FROM_PLATFORM,new s(this.channel).setEvent(i.EVENTS.INIT).setData(t).send().addHook(function(n,r){e.current_appkey=t.appkey,r&&r(n)})},f.prototype.loginOut=function(){if(this.current_user){this.autoDiscon=!1,this.channel.client.close();var t=this.channel.dataCache;for(var e in t)t[e].cleanAckTimeout(),t[e].cleanRespTimeout();this.current_user=null,this.current_appkey=null,this.channel.init(this.channel.opts)}},f.prototype.login=function(t){this.__checkInit(),t.is_md5||(t.password=u(t.password)),t.version=i.SDK_VERSION;var e=this,n=new s(this.channel).setEvent(i.EVENTS.LOGIN).setData(t).addHook(function(n,r){e.current_user=t.username,p.StorageUtils.removeItems(e.current_user),e.channel.sync_key=0,e.channel.sync_event_key=0,e.channel.msg_receipt_key=0,e.channel.ses_key=i.SESSION_KEY+e.current_appkey+"-"+e.current_user,e.channel.conversations_key=i.CONVERSATION_KEY+e.current_appkey+"-"+e.current_user,e.channel.event_key=i.EVENT_KEY+e.current_appkey+"-"+e.current_user,e._syncCheckTask(),e._receiptReportTask(),e._initConversation(),e.lastMsgs={},e.channel.client.removeListener(i.EVENTS.LOGIN),e._addEventListen(),e.firstLogin=!1,r&&r(n)});return setTimeout(function(){n.send()},500),n},f.prototype._initConversation=function(){var t=this,e=p.StorageUtils.getItem(t.channel.conversations_key);null!==e&&""!==e||(e=JSON.stringify({}),p.StorageUtils.addItem(t.channel.conversations_key,e)),t.conversations=JSON.parse(e)},f.prototype._receiptReportTask=function(){var t=this;t.report=[],t.msgReceipTask=setInterval(function(){t._receiptReport()},i.RECEIPT_REPORT_INTERVAL)},f.prototype._syncCheckTask=function(){var t=this,e=p.StorageUtils.getItem(t.channel.event_key);null!=e&&(t.channel.sync_event_key=e),t._syncCheck({sync_key:t.channel.sync_key,sync_type:t.channel.sync_type,sync_event_key:t.channel.sync_event_key,msg_receipt_key:t.channel.msg_receipt_key}).onSuccess(function(e){e&&0===e.code&&(t.channel.sync_key=e.sync_key,t.channel.sync_type=e.sync_type,t.channel.sync_event_key=e.sync_event_key,t.channel.msg_receipt_key=e.msg_receipt_key,p.StorageUtils.addItem(t.channel.event_key,e.sync_event_key))}),t.syncTask=setInterval(function(){t._syncCheck({sync_key:t.channel.sync_key,sync_type:t.channel.sync_type,sync_event_key:t.channel.sync_event_key,msg_receipt_key:t.channel.msg_receipt_key}).onSuccess(function(e){e&&0===e.code&&(t.channel.sync_key=e.sync_key,t.channel.sync_type=e.sync_type,t.channel.sync_event_key=e.sync_event_key,t.channel.msg_receipt_key=e.msg_receipt_key,p.StorageUtils.addItem(t.channel.event_key,e.sync_event_key))})},i.SYNC_INTERVAL)},f.prototype._syncCheck=function(t){return new s(this.channel).setEvent(i.EVENTS.SYNC_CHECK).setData(t).send()},f.prototype.register=function(t){return this.__checkInit(),t.is_md5||(t.password=u(t.password)),new s(this.channel).setEvent(i.EVENTS.REGISTER).setData(t).send()},f.prototype.getUserInfo=function(t){return this.__checkLogin(),p.StringUtils.isBlack(t.appkey)&&(t.appkey=this.current_appkey),new s(this.channel).setEvent(i.EVENTS.GET_ACROSS_USER_INFO).setData(t).send()},f.prototype.updateSelfInfo=function(t){return this.__checkLogin(),p.StringUtils.isBlack(t.avatar)||delete t.avatar,new s(this.channel).setEvent(i.EVENTS.UPDATE_SELF_INFO).setData(t).send()},f.prototype.updateSelfAvatar=function(t){this.__checkLogin();var e=new s(this.channel).setEvent(i.EVENTS.UPDATE_SELF_INFO),n=this;return this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.avatar,type:"image"},function(t,n){return t?t.is_timeout?e.timeout&&e.timeout(t.data):e.fail&&e.fail(t.data):void e.setData({avatar:n.media_id}).send()}),e},f.prototype.updateSelfPwd=function(t){return this.__checkLogin(),t.is_md5||(t.old_pwd=u(t.old_pwd),t.new_pwd=u(t.new_pwd)),new s(this.channel).setEvent(i.EVENTS.UPDATE_SELF_PWD).setData(t).send()},f.prototype.getConversation=function(){var t=this;return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_CONVERSATIONS).setData({}).send().onUserInfoGet(function(e,n){t[e]=n}).addHook(function(e,n){e.conversations.forEach(function(e){var n;3===e.type?(t[e.key]=e.utime,delete e.utime,n=e.appkey+e.username):(n=e.key,e.gid=e.key),t.conversations[n]?(t.conversations[n].extras?e.extras=t.conversations[n].extras:e.extras={},e.unread_msg_count=t.conversations[n].unread_msg_count):(e.extras={},e.unread_msg_count=0,t.conversations[n]={},t.conversations[n].extras={},t.conversations[n].unread_msg_count=0,t.conversations[n].msg_time=[])}),p.StorageUtils.addItem(t.channel.conversations_key,JSON.stringify(t.conversations)),n&&n(e)})},f.prototype.resetUnreadCount=function(t){this.__checkLogin();var e,n=this;t.gid?e=String(t.gid):(t.appkey||(t.appkey=n.current_appkey),e=t.appkey+t.username),n.conversations[e]=void 0===n.conversations[e]?{}:n.conversations[e],t.gid?n._updateGroupUnreadCount({gid:t.gid}):n._updateSingleUnreadCount({appkey:t.appkey,username:t.username}),n.conversations[e].unread_msg_count=0,n.conversations[e].msg_time=[];var r=(new Date).getTime();n.lastMsgs[e]&&(r=n.lastMsgs[e].last_msg_time),n.conversations[e].recent_time=r,n.current_conversation=e,p.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations))},f.prototype.getUnreadMsgCnt=function(t){this.__checkLogin();var e,n=this;return t.gid?e=String(t.gid):(t.appkey||(t.appkey=n.current_appkey),e=t.appkey+t.username),n.conversations[e]||(n.conversations[e]={}),n.conversations[e]=void 0===n.conversations[e]?{}:n.conversations[e],n.conversations[e].unread_msg_count?n.conversations[e].unread_msg_count:0},f.prototype.msgRetract=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.MSG_RETRACT).setData(t).send()},f.prototype.sendSingleMsg=function(t){return this.__checkLogin(),this.__sendMsg({type:"single",target_id:t.target_username,target_name:t.target_nickname,content:t.content,extras:t.extras,msg_body:t.msg_body,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendGroupMsg=function(t){return this.__checkLogin(),this.__sendMsg({type:"group",target_id:t.target_gid,target_name:t.target_gname,content:t.content,extras:t.extras,msg_body:t.msg_body,at_list:t.at_list,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendSinglePic=function(t){return this.__checkLogin(),this.__sendPic({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.image,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendGroupPic=function(t){return this.__checkLogin(),this.__sendPic({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.image,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendSingleFile=function(t){return this.__sendVideoOrFile({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.file,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"file")},f.prototype.sendGroupFile=function(t){return this.__sendVideoOrFile({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.file,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"file")},f.prototype.sendSingleVedio=function(t){return this.__sendVideoOrFile({type:"single",target_id:t.target_username,target_name:t.target_nickname,file:t.file,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"video")},f.prototype.sendGroupVedio=function(t){return this.__sendVideoOrFile({type:"group",target_id:t.target_gid,target_name:t.target_gname,file:t.file,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt},"video")},f.prototype.sendSingleLocation=function(t){return this.__checkLogin(),this.__sendLocation({type:"single",target_id:t.target_username,target_name:t.target_nickname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,msg_body:t.msg_body,extras:t.extras,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendGroupLocation=function(t){return this.__checkLogin(),this.__sendLocation({type:"group",target_id:t.target_gid,target_name:t.target_gname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendSingleCustom=function(t){return this.__checkLogin(),this.__sendCustom({type:"single",target_id:t.target_username,target_name:t.target_nickname,custom:t.custom,extras:t.extras,msg_body:t.msg_body,appkey:t.appkey,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.sendGroupCustom=function(t){return this.__checkLogin(),this.__sendCustom({type:"group",target_id:t.target_gid,target_name:t.target_gname,custom:t.custom,msg_body:t.msg_body,extras:t.extras,no_offline:t.no_offline,no_notification:t.no_notification,custom_notification:t.custom_notification,need_receipt:t.need_receipt})},f.prototype.createGroup=function(t){this.__checkLogin();var e=this,n=new s(this.channel).setEvent(i.EVENTS.CREATE_GROUP);return t.avatar?this.__uploadFile({appkey:e.current_appkey,username:e.current_user,file:t.avatar,type:"image"},function(e,r){return e?e.is_timeout?n.timeout&&n.timeout(e.data):n.fail&&n.fail(e.data):(delete t.avatar,t.media_id=r.media_id,void n.setData(t).send())}):n.setData(t).send(),n},f.prototype.exitGroup=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.EXIT_GROUP).setData(t).send()},f.prototype.getGroups=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_GROUPS_LIST).setData({}).send().addHook(function(t,e){t.group_list.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},f.prototype.getGroupInfo=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_GROUP_INFO).setData(t).send().addHook(function(t,e){t.group_info.group_type=t.group_info.flag,delete t.group_info.flag,e&&e(t)})},f.prototype.updateGroupInfo=function(t){this.__checkLogin();var e=this,n=new s(this.channel).setEvent(i.EVENTS.UPDATE_GROUP_INFO);return t.avatar?this.__uploadFile({appkey:e.current_appkey,username:e.current_user,file:t.avatar,type:"image"},function(e,r){return e?e.is_timeout?n.timeout&&n.timeout(e.data):n.fail&&n.fail(e.data):(delete t.avatar,t.media_id=r.media_id,void n.setData(t).send())}):n.setData(t).send(),n},f.prototype.getGroupMembers=function(t){var e=this;return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_GROUP_MEMBERS).setData(t).send().onUserInfoGet(function(t,n){e[t]=n})},f.prototype.addGroupMembers=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADD_ACROSS_GROUP_MEMBER).setData(t).send()},f.prototype.delGroupMembers=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DEL_ACROSS_GROUP_MEMBER).setData(t).send()},f.prototype.getNoDisturb=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.NO_DISTURB).setData({version:0}).send().addHook(function(t,e){t.no_disturb.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},f.prototype.addSingleNoDisturb=function(t){return this.__checkLogin(),t.version=0,new s(this.channel).setEvent(i.EVENTS.ADD_MSG_NO_DISTURB_SINGLE).setData(t).send()},f.prototype.delSingleNoDisturb=function(t){return this.__checkLogin(),t.version=0,new s(this.channel).setEvent(i.EVENTS.DELETE_MSG_NO_DISTURB_SINGLE).setData(t).send()},f.prototype.addGroupNoDisturb=function(t){return this.__checkLogin(),t.version=0,new s(this.channel).setEvent(i.EVENTS.ADD_MSG_NO_DISTURB_GROUP).setData(t).send()},f.prototype.delGroupNoDisturb=function(t){return this.__checkLogin(),t.version=0,new s(this.channel).setEvent(i.EVENTS.DELETE_MSG_NO_DISTURB_GROUP).setData(t).send()},f.prototype.addGlobalNoDisturb=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADD_MSG_NO_DISTURB_GLOBAL).setData({version:0}).send()},f.prototype.delGlobalNoDisturb=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DELETE_MSG_NO_DISTURB_GLOBAL).setData({version:0}).send()},f.prototype.getBlacks=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_BLACK_LIST).setData({version:0}).send()},f.prototype.addSingleBlacks=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADD_BLACK_LIST).setData(t).send()},f.prototype.delSingleBlacks=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DEL_BLACK_LIST).setData(t).send()},f.prototype.getFriendList=function(){var t=this;return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_FRIEND_LIST).setData({}).send().onUserInfoGet(function(e,n){t[e]=n})},f.prototype.addFriend=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADD_FRIEND).setData(t).send()},f.prototype.acceptFriend=function(t){return this.__checkLogin(),t.why="yes",t.from_type=i.FRIEND_INVITED,new s(this.channel).setEvent(i.EVENTS.ADD_FRIEND).setData(t).send()},f.prototype.declineFriend=function(t){return this.__checkLogin(),t.why&&""!=t.why.trim()||(t.why="no"),t.from_type=i.FRIEND_INVITED,new s(this.channel).setEvent(i.EVENTS.ADD_FRIEND).setData(t).send()},f.prototype.delFriend=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DEL_FRIEND).setData(t).send()},f.prototype.updateFriendMemo=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.UPDATE_FRIEND_MEMO).setData(t).send()},f.prototype.addGroupShield=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADD_MSG_SHIELD_GROUP).setData(t).send()},f.prototype.delGroupShield=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DEL_MSG_SHIELD_GROUP).setData(t).send()},f.prototype.groupShieldList=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.LIST_SHIELD_GROUP).setData(t).send().addHook(function(t,e){t.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},f.prototype.getResource=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_RESOURCE).setData(t).send()},f.prototype._updateGroupUnreadCount=function(t){this.__checkLogin(),t.type=4,new s(this.channel).setEvent(i.EVENTS.UNREAD_GROUP_COUNT).setData(t).send()},f.prototype._updateSingleUnreadCount=function(t){this.__checkLogin(),t.type=3,new s(this.channel).setEvent(i.EVENTS.UNREAD_SINGLE_COUNT).setData(t).send()},f.prototype.msgUnreadList=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.MSG_UNREAD_LIST).setData(t).send()},f.prototype.addGroupReceiptReport=function(t){this.__checkLogin();var e=this;if(t.msg_ids instanceof Array&&0!==t.msg_ids.length){t.key=t.gid,t.type=4;var n=new a(t);return e.report.push(n),setTimeout(function(){e._checkReportSize()>=i.RECEIPT_REPORT_MAX_SIZE&&e._receiptReport()},50),n}console.error("msg_ids is not Array type or msg_ids size=0"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:2")},f.prototype.addSingleReceiptReport=function(t){this.__checkLogin();var e=this;if(t.msg_ids instanceof Array&&0!==t.msg_ids.length){t.appkey||(t.appkey=e.current_appkey),t.type=3,t.key=t.appkey+t.username;var n=new a(t);return e.report.push(n),setTimeout(function(){e._checkReportSize()>=i.RECEIPT_REPORT_MAX_SIZE&&e._receiptReport()},50),n}console.error("msg_ids is not Array type or msg_ids size=0"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:2")},f.prototype._checkReportSize=function(){var t=this,e=0;return t.report.forEach(function(t){e+=t.args.msg_ids.length}),e},f.prototype.transSingleMsg=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.TRANS_MSG_SINGLE).setData(t).send()},f.prototype.transGroupMsg=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.TRANS_MSG_GROUP).setData(t).send()},f.prototype.transPlatMsg=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.TRANS_MSG_PLATFORM).setData(t).send()},f.prototype.updateConversation=function(t){this.__checkLogin();var e,n=this;t.appkey||(t.appkey=n.current_appkey),t.gid?e=t.gid:t.username&&(e=t.appkey+t.username),e&&t.extras&&(n.conversations[e]||(n.conversations[e]={}),n.conversations[e].extras=t.extras),p.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations))},f.prototype.addGroupMemberResp=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADMIN_ADD_GROUP_MEMBER).setData(t).send()},f.prototype.joinGroup=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.APPLY_JOIN_GROUP).setData(t).send()},f.prototype.getAppkeyChatrooms=function(t){return this.__checkLogin(),!t&&(t={}),new s(this.channel).setEvent(i.EVENTS.ROOM_LIST).setData(t).send().addHook(function(t,e){t.result.rooms.forEach(function(t){p.Cache.rooms[t.id]=t}),e&&e(t)})},f.prototype.getSelfChatrooms=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ROOM_LIST_SELF).setData({}).send().addHook(function(t,e){t.chat_rooms.forEach(function(t){p.Cache.rooms[t.id]=t}),e&&e(t)})},f.prototype.getChatroomInfo=function(t){this.__checkLogin();var e=new s(this.channel);return p.Cache.rooms[t.id]?setTimeout(function(){var n={code:0,message:"success"};n.info=p.Cache.rooms[t.id],e.cleanRespTimeout(),e.success&&e.success(n)},100):e.setEvent(i.EVENTS.ROOM_INFO).setData(t).send().addHook(function(t,e){p.Cache.rooms[t.info.id]=t.info,e&&e(t)}),e},f.prototype.enterChatroom=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.JOIN_ROOM).setData(t).send()},f.prototype.exitChatroom=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.EXIT_ROOM).setData(t).send()},f.prototype.sendChatroomMsg=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===p.Cache.rooms[t.target_rid]?"":p.Cache.rooms[t.target_rid].name),this.__sendMsg({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,content:t.content,extras:t.extras,msg_body:t.msg_body})},f.prototype.sendChatroomPic=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===p.Cache.rooms[t.target_rid]?"":p.Cache.rooms[t.target_rid].name),this.__sendPic({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.image,extras:t.extras,msg_body:t.msg_body})},f.prototype.sendChatroomFile=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===p.Cache.rooms[t.target_rid]?"":p.Cache.rooms[t.target_rid].name),this.__sendVideoOrFile({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.file,extras:t.extras,msg_body:t.msg_body},"file")},f.prototype.sendChatroomVideo=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===p.Cache.rooms[t.target_rid]?"":p.Cache.rooms[t.target_rid].name),this.__sendVideoOrFile({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,file:t.file,msg_body:t.msg_body,extras:t.extras},"video")},f.prototype.sendChatroomCustom=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===p.Cache.rooms[t.target_rid]?"":p.Cache.rooms[t.target_rid].name),this.__sendCustom({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,custom:t.custom,extras:t.extras,msg_body:t.msg_body})},f.prototype.sendChatroomLocation=function(t){return this.__checkLogin(),t.target_rname||(t.target_rname=void 0===p.Cache.rooms[t.target_rid]?"":p.Cache.rooms[t.target_rid].name),this.__sendLocation({type:"chatroom",target_id:t.target_rid,target_name:t.target_rname,latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label,extras:t.extras,msg_body:t.msg_body})},f.prototype.addGroupMemSilence=function(t){return this.__checkLogin(),t.keep_silence=!0,new s(this.channel).setEvent(i.EVENTS.GROUP_MEM_SILENCE).setData(t).send()},f.prototype.delGroupMemSilence=function(t){return this.__checkLogin(),t.keep_silence=!1,new s(this.channel).setEvent(i.EVENTS.GROUP_MEM_SILENCE).setData(t).send()},f.prototype.dissolveGroup=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DISSOLVE_GROUP).setData(t).send()},f.prototype.addGroupKeeper=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.ADD_GROUP_KEEPER).setData(t).send()},f.prototype.delGroupKeeper=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.DEL_GROUP_KEEPER).setData(t).send()},f.prototype.changeGroupAdmin=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.CHANGE_GROUP_ADMIN).setData(t).send()},f.prototype.getAppkeyPublicGroups=function(t){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.PUBLIC_GROUP_LIST).setData(t).send().addHook(function(t,e){t.result.groups.forEach(function(t){t.group_type=t.flag,delete t.flag}),e&&e(t)})},f.prototype.isInit=function(){return!!this.current_appkey},f.prototype.isLogin=function(){return!!this.current_user},f.prototype.isConnect=function(){return!!this.channel.client.connected},f.prototype._addEventListen=function(){var t=this;t.channel.client.on(i.EVENTS.MSG_SYNC,function(e){t._onMsgReceive(e)}),t.channel.client.on(i.EVENTS.EVENT_NOTIFICATION,function(e){t._onEventNotification(e)}),t.channel.client.on(i.EVENTS.SYNC_CONVERSATION,function(e){t._onSyncConversation(e)}),t.channel.client.on(i.EVENTS.SYNC_EVENT,function(e){t._onSyncEvent(e)}),t.channel.client.on(i.EVENTS.SYNC_RECEIPT,function(e){t._onSyncMsgReceipt(e)}),t.channel.client.on(i.EVENTS.RECEIPT_CHANGE,function(e){t._onMsgReceiptChange(e)}),t.channel.client.on(i.EVENTS.TRANS_MSG_REC,function(e){t._onTransMsgRec(e)}),t.channel.client.on(i.EVENTS.ROOM_MSG_SYNC,function(e){t._onRoomMsg(e)}),t.channel.client.on(i.EVENTS.ROOM_MSG_SYNC_HIS,function(e){t._onSyncRoomMsg(e)}),t.channel.client.on("disconnect",function(){t._onDisconnect()})},f.prototype.onRoomMsg=function(t){this._onRoomMsgFn=t},f.prototype._onRoomMsg=function(t){this._onRoomMsgFn&&this._onRoomMsgFn(t)},f.prototype._onSyncRoomMsg=function(t){var e=this;t.messages.forEach(function(n){p.Cache.rooms[n.room_id]||e.getChatroomInfo({id:t.room_id}),n.msgs&&n.msgs.forEach(function(t){e._onRoomMsgFn&&e._onRoomMsgFn(t)})})},f.prototype.onMsgReceive=function(t){this._onMsgReceiveFn=t},f.prototype._onMsgReceive=function(t){var e=[],n=this;Array.prototype.push.apply(e,t.messages.map(function(t){return{msg_id:t.msg_id,msg_type:t.msg_type,from_uid:t.from_uid,from_gid:t.from_gid}})),t.messages.forEach(function(t){if(t.content.sui_mtime&&n[t.from_uid]&&t.content.sui_mtime>new Date(n[t.from_uid]).getTime()/1e3){n[t.from_uid]=1e3*t.content.sui_mtime;var e={};e.from_username=t.content.from_id,e.from_appkey=t.content.from_appkey,e.mtime=t.content.sui_mtime,delete t.content.sui_mtime,n._updateInfoEventFun&&n._updateInfoEventFun(e)}var r;3===t.msg_type?(t.key=t.from_uid,t.from_username=t.content.from_id,t.from_appkey=t.content.from_appkey,r=t.from_appkey+t.from_username):(t.key=t.from_gid,r=String(t.from_gid)),0===t.msg_level?t.msg_level="normal":1===t.msg_level&&(t.msg_level="across");var o=!1;if(t.from_appkey===n.current_appkey&&t.from_username===n.current_user){o=!0;var a=void 0===t.content.target_appkey||""===t.content.target_appkey?t.content.from_appkey:t.content.target_appkey;r=a+t.content.target_id}n.lastMsgs[r]={last_msg_time:t.ctime_ms},n.conversations[r]||(n.conversations[r]={},n.conversations[r].extras={},n.conversations[r].unread_msg_count=0,n.conversations[r].msg_time=[]),n.current_conversation===r||o?(n.conversations[r].recent_time=t.ctime_ms,n.conversations[r].unread_msg_count=0,n.conversations[r].msg_time=[]):(n.conversations[r].unread_msg_count=n.conversations[r].unread_msg_count+1,n.conversations[r].msg_time.push(t.ctime_ms)),new s(n.channel).setEvent(i.EVENTS.MSG_RECV_V2).setData({msg_id:t.msg_id,msg_type:t.msg_type,from_uid:t.from_uid,from_gid:t.from_gid}).send()}),p.StorageUtils.addItem(n.channel.conversations_key,JSON.stringify(n.conversations)),this._onMsgReceiveFn&&this._onMsgReceiveFn(t)},f.prototype.onEventNotification=function(t){this._onEventNotificationFn=t},f.prototype._onEventNotification=function(t){var e=this;if(200!==t.event_type){var n=e.__eventDateFilter(t);if(56===t.event_type&&10==t.extra?(n.by_self=!1,delete n.extra):56===t.event_type&&59==t.extra&&(n.by_self=!0,delete n.extra),1===t.event_type){var r={event_id:t.event_id,event_type:t.event_type,from_uid:t.from_uid,gid:t.gid};new s(e.channel).setEvent(i.EVENTS.EVENT_NOTIFICATION).setData(r).send()}e._onEventNotificationFn&&e._onEventNotificationFn(n),-1!=i.LOGIN_OUT_EVENT.indexOf(t.event_type)&&e.loginOut()}else 3===t.description.type?e._dealMutlReadEvent(t.description.type,t.ctime_ms,t.description.appkey,t.description.username):e._dealMutlReadEvent(t.description.type,t.ctime_ms,t.description.gid)},f.prototype.onSyncConversation=function(t){this._onSyncConversationFn=t},f.prototype._onSyncConversation=function(t){var e=this;e.channel.sync_key=t.sync_key,t.messages&&(t.messages.forEach(function(t){var n,r=0;n=3===t.msg_type?t.from_appkey+t.from_username:String(t.from_gid);var o=t.msgs[t.msgs.length-1].ctime_ms;if(e.current_conversation===n)e.conversations[n]=void 0===e.conversations[n]?{}:e.conversations[n],e.conversations[n].unread_msg_count=r,e.conversations[n].recent_time=o,e.conversations[n].msg_time=[];else if(e.conversations[n]&&e.conversations[n].recent_time){var s=e.conversations[n].recent_time;t.msgs.forEach(function(t){t.ctime_ms<=s||t.content.from_appkey===e.current_appkey&&t.content.from_id===e.current_user?(r=0,e.conversations[n].msg_time=[]):(r++,e.conversations[n].msg_time.push(t.ctime_ms))}),e.channel.sync_type===i.SYNC_TYPE_OPEN?e.conversations[n].unread_msg_count=r:e.conversations[n].unread_msg_count+=r}else r=t.unsync_count,e.conversations[n]=void 0===e.conversations[n]?{}:e.conversations[n],e.conversations[n].unread_msg_count=r,t.msgs.length-1-r<0?e.conversations[n].recent_time=-1:e.conversations[n].recent_time=t.msgs[t.msgs.length-1-r].ctime_ms,e.conversations[n].msg_time=[];e.lastMsgs[n]={last_msg_time:o},delete t.unsync_count,t.unread_msg_count=r}),p.StorageUtils.addItem(e.channel.conversations_key,JSON.stringify(e.conversations)),e._onSyncConversationFn&&t.messages.length>0&&e._onSyncConversationFn(t.messages));var n={sync_key:e.channel.sync_key};new s(e.channel).setEvent(i.EVENTS.SYNC_CONVERSATION_ACK).setData(n).send()},f.prototype.onSyncEvent=function(t){this._onSyncEventFn=t},f.prototype._onSyncEvent=function(t){var e=this;e.channel.sync_event_key=t.sync_key,p.StorageUtils.addItem(e.channel.event_key,t.sync_key);var n={sync_key:e.channel.sync_event_key};new s(e.channel).setEvent(i.EVENTS.SYNC_EVENT_ACK).setData(n).send(),setTimeout(function(){if(e._onSyncEventFn&&t.events&&t.events.length>0){var n=[];t.events.forEach(function(r){if(200===r.event_type)3===r.description.type?e._dealMutlReadEvent(r.description.type,r.ctime_ms,r.description.appkey,r.description.username):e._dealMutlReadEvent(r.description.type,r.ctime_ms,r.description.gid);else{var o=e.__eventDateFilter(r);56===t.event_type&&10==t.extra?(delete o.extra,o.by_self=!1):56===t.event_type&&59==t.extra&&(delete o.extra,o.by_self=!0),n.push(o)}}),e._onSyncEventFn(n)}},1700)},f.prototype.onSyncMsgReceipt=function(t){this._onSyncMsgReceiptFn=t},f.prototype._onSyncMsgReceipt=function(t){var e=this;if(e.channel.msg_receipt_key=t.sync_key,e._onSyncMsgReceiptFn&&t.receipts&&t.receipts.length>0){var n={},r=[];t.receipts.forEach(function(t){var e=t.gid;if(3===t.type&&(e=t.appkey+t.username),n[e]){var o=Number(n[e]);Array.prototype.push.apply(r[o].receipt_msgs,t.receipt_msgs)}else t.receipt_msgs.length>0&&(n[e]=String(r.length),r.push(t))}),setTimeout(function(){e._onSyncMsgReceiptFn&&r.length>0&&e._onSyncMsgReceiptFn(r)},1500)}var o={sync_key:e.channel.msg_receipt_key};new s(e.channel).setEvent(i.EVENTS.SYNC_RECEIPT_ACK).setData(o).send()},f.prototype.onMsgReceiptChange=function(t){this._onMsgReceiptChangeFn=t},f.prototype._onMsgReceiptChange=function(t){this._onMsgReceiptChangeFn&&this._onMsgReceiptChangeFn(t)},f.prototype.onUserInfUpdate=function(t){this._updateInfoEventFun=t},f.prototype.onMutiUnreadMsgUpdate=function(t){this._conversationUpdateFun=t},f.prototype.onTransMsgRec=function(t){this._onTransMsgRecFn=t},f.prototype._onTransMsgRec=function(t){this._onTransMsgRecFn&&this._onTransMsgRecFn(t)},f.prototype.onDisconnect=function(t){this._onDisconnectFn=t},f.prototype._onDisconnect=function(){var t=this;clearTimeout(t.syncTask),clearTimeout(t.msgReceipTask),t.autoDiscon&&(t.current_appkey=null,t.current_user=null,t._onDisconnectFn&&t._onDisconnectFn()),this.channel.init(this.channel.opts)},f.prototype._dealMutlReadEvent=function(t,e,n,r){var o,i=this,s={};if(s.type=t,3===t?(o=n+r,s.username=r,s.appkey=n):(o=String(n),s.gid=n),i.conversations[o]=void 0===i.conversations[o]?{msg_time:[],unread_msg_count:0}:i.conversations[o],i.conversations[o].recent_time=e,i.current_conversation===o)i.conversations[o].unread_msg_count=0,i.conversations[o].msg_time=[];else{var a=i.conversations[o].unread_msg_count,c=i.conversations[o].msg_time,u=[],f=0;c.forEach(function(t){t>e&&(f++,u.push(t))}),i.conversations[o].msg_time=u,f<a&&(i.conversations[o].unread_msg_count=f,s.unreadCount=f,p.StorageUtils.addItem(i.channel.conversations_key,JSON.stringify(i.conversations)),i._conversationUpdateFun&&i._conversationUpdateFun(s))}},f.prototype._receiptReport=function(){var t=this;if(t.report.length>0){var e={},n=[];t.report.forEach(function(t){if(e[t.args.key]){var r=Number(e[t.args.key]);Array.prototype.push.apply(n[r].result.msg_ids,t.args.msg_ids),n[r].msg_reports.push(t)}else e[t.args.key]=String(n.length),n.push({result:t.args,msg_reports:[t]})}),t.report=[];for(var r=0;r<n.length;r++)n[r].result.msg_ids=p.ArrayUtils.delRepeatItem(n[r].result.msg_ids),delete n[r].result.key,t._msgReceipt(n[r])}},f.prototype._msgReceipt=function(t){new s(this.channel).setEvent(i.EVENTS.RECEIPT_REPORT).setData({sessions:[t.result]}).send().onSuccess(function(e){t.msg_reports.forEach(function(t){t.success&&t.success(e,t.args.msg_ids)})}).onFail(function(e){t.msg_reports.forEach(function(t){t.fail&&t.fail(e,t.args.msg_ids)})}).onAck(function(e){t.msg_reports.forEach(function(t){t.ack&&t.ack(e,t.args.msg_ids)})}).onTimeout(function(e){t.msg_reports.forEach(function(t){t.timeout&&t.timeout(e,t.args.msg_ids)})})},f.prototype.__eventDateFilter=function(t){var e={};return e.event_id=t.event_id,e.event_type=t.event_type,e.from_username=t.from_username,e.gid=t.gid,e.to_usernames=t.to_usernames,e.ctime=t.ctime,e.extra=t.extra,e.return_code=t.return_code,e.from_appkey=t.from_appkey,e.msg_ids=t.msg_ids,e.from_gid=t.from_gid,e.msgid_list=t.msgid_list,e.to_groups=t.to_groups,e.new_owner=t.new_owner,e.group_name=t.group_name,e.ctime_ms=t.ctime_ms,e.media_id=t.media_id,e.from_nickname=t.from_nickname,e.from_eventid=t.from_eventid,100===t.event_type&&7===t.extra?e.description=JSON.parse(t.description):e.description=t.description,55===t.event_type&&0===t.from_gid?e.type=0:55===t.event_type&&0!=t.from_gid&&(e.type=1),e},f.prototype.__checkConnect=function(){if(!this.channel.client.connected)throw new Error("wss socket not connect")},f.prototype.__checkInit=function(){if(!this.current_appkey)throw new Error("必须执行init操作后能执行此动作")},f.prototype.__checkLogin=function(){if(!this.current_user)throw new Error("必须执行login操作后能执行此动作")},f.prototype.__getUploadToken=function(){return this.__checkLogin(),new s(this.channel).setEvent(i.EVENTS.GET_UPLOAD_TOKEN).setData({}).send()},f.prototype.__uploadFile0=function(t,e){wx.uploadFile({url:i.UPLOAD_FILE+"?type="+t.type,filePath:t.file,name:"file",header:{"X-App-Key":t.appkey,Authorization:"Basic "+r.btoa(t.username+":"+t.token),"jm-channel":i.PLAT_CHANNEL},success:function(t){if(200==t.statusCode)e(null,JSON.parse(t.data));else try{var n=JSON.parse(t.data);e(898061===n.error.code?{code:880210,message:"file size exceed limit"}:n)}catch(t){e({code:880210,message:"file size exceed the limit"})}},fail:function(t){console.error(JSON.parse(t)," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:2")}})},f.prototype.__uploadFile=function(t,e){var n=this;n.__getUploadToken().onSuccess(function(r){n.__uploadFile0({type:t.type,file:t.file,appkey:t.appkey,username:t.username,token:r.uptoken},e)}).onFail(function(t){e({data:t})}).onTimeout(function(t){e({is_timeout:!0,data:t})})},f.prototype.__sendMsg=function(t){return this.__checkLogin(),new s(this.channel).setEvent("single"===t.type?i.EVENTS.S_SINGLE_TEXT:"group"===t.type?i.EVENTS.SEND_GROUP_MSG:i.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setText(t.content?t.content:t.msg_body.text,t.content?t.extras:t.msg_body.extras).setAtList(t.at_list).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},f.prototype.__sendPic=function(t){this.__checkLogin();var e=new s(this.channel).setEvent("single"===t.type?i.EVENTS.S_SINGLE_TEXT:"group"===t.type?i.EVENTS.SEND_GROUP_MSG:i.EVENTS.SEND_ROOM_MSG),n=this,r=new c(n.current_user,n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.file,type:"image"},function(n,o){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):void e.setData(r.setImage(o,t.extras).build()).send()}):e.setData(r.setImage(t.msg_body,t.msg_body.extras).build()).send(),e},f.prototype.__sendVideoOrFile=function(t,e){this.__checkLogin();var n=new s(this.channel).setEvent("single"===t.type?i.EVENTS.S_SINGLE_TEXT:"group"===t.type?i.EVENTS.SEND_GROUP_MSG:i.EVENTS.SEND_ROOM_MSG),r=this,o=new c(r.current_user,r.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:r.current_appkey,username:r.current_user,file:t.file,type:"file"},function(r,i){return r?r.is_timeout?n.timeout&&n.timeout(r.data):n.fail&&n.fail(r.data):("video"===e&&(!t.extras&&(t.extras={}),t.extras.video=i.media_id.slice(i.media_id.lastIndexOf(".")+1)),void n.setData(o.setFile(i,t.extras).build()).send())}):n.setData(o.setFile(t.msg_body,t.msg_body.extras).build()).send(),n},f.prototype.__sendVoice=function(t){this.__checkLogin();var e=new s(this.channel).setEvent("single"===t.type?i.EVENTS.S_SINGLE_TEXT:i.EVENTS.SEND_GROUP_MSG),n=this,r=new c(n.current_user,n.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification);return t.file?this.__uploadFile({appkey:n.current_appkey,username:n.current_user,file:t.file,type:"voice"},function(n,o){return n?n.is_timeout?e.timeout&&e.timeout(n.data):e.fail&&e.fail(n.data):void e.setData(r.setVoice(o,t.extras).build()).send()}):e.setData(r.setVoice(t.msg_body,t.msg_body.extras).build()).send(),e},f.prototype.__sendLocation=function(t){return this.__checkLogin(),new s(this.channel).setEvent("single"===t.type?i.EVENTS.S_SINGLE_TEXT:"group"===t.type?i.EVENTS.SEND_GROUP_MSG:i.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setLocation(t.latitude?t:t.msg_body,t.latitude?t.extras:t.msg_body.extras).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},f.prototype.__sendCustom=function(t){return this.__checkLogin(),new s(this.channel).setEvent("single"===t.type?i.EVENTS.S_SINGLE_TEXT:"group"===t.type?i.EVENTS.SEND_GROUP_MSG:i.EVENTS.SEND_ROOM_MSG).setData(new c(this.current_user,this.current_appkey).setType(t.type).setAppkey(t.appkey).setNeedReceipt(t.need_receipt).setTarget(t.target_id,t.target_name).setCustom(t.custom?t.custom:t.msg_body,t.custom?t.extras:t.msg_body.extras).setCustom(t.custom).setNoOffline(!0===t.no_offline).setNoNotification(!0===t.no_notification).setCustomNotification(t.custom_notification).build()).send()},t.exports=f},function(t,e){t.exports=function(){function t(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n}function e(t,e){return t<<e|t>>>32-e}function n(n,r,o,i,s,a){return t(e(t(t(r,n),t(i,a)),s),o)}function r(t,e,r,o,i,s,a){return n(e&r|~e&o,t,e,i,s,a)}function o(t,e,r,o,i,s,a){return n(e&o|r&~o,t,e,i,s,a)}function i(t,e,r,o,i,s,a){return n(e^r^o,t,e,i,s,a)}function s(t,e,r,o,i,s,a){return n(r^(e|~o),t,e,i,s,a)}function a(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;var a,c,u,p,f,h=1732584193,l=-271733879,_=-1732584194,d=271733878;for(a=0;a<e.length;a+=16)c=h,u=l,p=_,f=d,h=r(h,l,_,d,e[a],7,-680876936),d=r(d,h,l,_,e[a+1],12,-389564586),_=r(_,d,h,l,e[a+2],17,606105819),l=r(l,_,d,h,e[a+3],22,-1044525330),h=r(h,l,_,d,e[a+4],7,-176418897),d=r(d,h,l,_,e[a+5],12,1200080426),_=r(_,d,h,l,e[a+6],17,-1473231341),l=r(l,_,d,h,e[a+7],22,-45705983),h=r(h,l,_,d,e[a+8],7,1770035416),d=r(d,h,l,_,e[a+9],12,-1958414417),_=r(_,d,h,l,e[a+10],17,-42063),l=r(l,_,d,h,e[a+11],22,-1990404162),h=r(h,l,_,d,e[a+12],7,1804603682),d=r(d,h,l,_,e[a+13],12,-40341101),_=r(_,d,h,l,e[a+14],17,-1502002290),l=r(l,_,d,h,e[a+15],22,1236535329),h=o(h,l,_,d,e[a+1],5,-165796510),d=o(d,h,l,_,e[a+6],9,-1069501632),_=o(_,d,h,l,e[a+11],14,643717713),l=o(l,_,d,h,e[a],20,-373897302),h=o(h,l,_,d,e[a+5],5,-701558691),d=o(d,h,l,_,e[a+10],9,38016083),_=o(_,d,h,l,e[a+15],14,-660478335),l=o(l,_,d,h,e[a+4],20,-405537848),h=o(h,l,_,d,e[a+9],5,568446438),d=o(d,h,l,_,e[a+14],9,-1019803690),_=o(_,d,h,l,e[a+3],14,-187363961),l=o(l,_,d,h,e[a+8],20,1163531501),h=o(h,l,_,d,e[a+13],5,-1444681467),d=o(d,h,l,_,e[a+2],9,-51403784),_=o(_,d,h,l,e[a+7],14,1735328473),l=o(l,_,d,h,e[a+12],20,-1926607734),h=i(h,l,_,d,e[a+5],4,-378558),d=i(d,h,l,_,e[a+8],11,-2022574463),_=i(_,d,h,l,e[a+11],16,1839030562),l=i(l,_,d,h,e[a+14],23,-35309556),h=i(h,l,_,d,e[a+1],4,-1530992060),d=i(d,h,l,_,e[a+4],11,1272893353),_=i(_,d,h,l,e[a+7],16,-155497632),l=i(l,_,d,h,e[a+10],23,-1094730640),h=i(h,l,_,d,e[a+13],4,681279174),d=i(d,h,l,_,e[a],11,-358537222),_=i(_,d,h,l,e[a+3],16,-722521979),l=i(l,_,d,h,e[a+6],23,76029189),h=i(h,l,_,d,e[a+9],4,-640364487),d=i(d,h,l,_,e[a+12],11,-421815835),_=i(_,d,h,l,e[a+15],16,530742520),l=i(l,_,d,h,e[a+2],23,-995338651),h=s(h,l,_,d,e[a],6,-198630844),d=s(d,h,l,_,e[a+7],10,1126891415),_=s(_,d,h,l,e[a+14],15,-1416354905),l=s(l,_,d,h,e[a+5],21,-57434055),h=s(h,l,_,d,e[a+12],6,1700485571),d=s(d,h,l,_,e[a+3],10,-1894986606),_=s(_,d,h,l,e[a+10],15,-1051523),l=s(l,_,d,h,e[a+1],21,-2054922799),h=s(h,l,_,d,e[a+8],6,1873313359),d=s(d,h,l,_,e[a+15],10,-30611744),_=s(_,d,h,l,e[a+6],15,-1560198380),l=s(l,_,d,h,e[a+13],21,1309151649),h=s(h,l,_,d,e[a+4],6,-145523070),d=s(d,h,l,_,e[a+11],10,-1120210379),_=s(_,d,h,l,e[a+2],15,718787259),l=s(l,_,d,h,e[a+9],21,-343485551),h=t(h,c),l=t(l,u),_=t(_,p),d=t(d,f);return[h,l,_,d]}function c(t){var e,n="";for(e=0;e<32*t.length;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function u(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;for(e=0;e<8*t.length;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function p(t){return c(a(u(t),8*t.length))}function f(t,e){var n,r,o=u(t),i=[],s=[];for(i[15]=s[15]=void 0,o.length>16&&(o=a(o,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],s[n]=1549556828^o[n];return r=a(i.concat(u(e)),512+8*e.length),c(a(s.concat(r),640))}function h(t){var e,n,r="0123456789abcdef",o="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),o+=r.charAt(e>>>4&15)+r.charAt(15&e);return o}function l(t){return unescape(encodeURIComponent(t))}function _(t){return p(l(t))}function d(t){return h(_(t))}function y(t,e){return f(l(t),l(e))}function g(t,e){return h(y(t,e))}function m(t,e,n){return e?n?y(e,t):g(e,t):n?_(t):d(t)}return m}},function(t,e,n){var r=n(4),o=function(t){this.channel=t,this.rid=this.channel.generateRid(),this.times=1};o.prototype.setEvent=function(t){return this.event=t,this},o.prototype.setData=function(t){return this.data=t,this},o.prototype.onSuccess=function(t){return"function"==typeof t&&(this.success=t),this},o.prototype.onFail=function(t){return"function"==typeof t&&(this.fail=t),this},o.prototype.onTimeout=function(t){if("function"==typeof t){this.timeout=t;var e=this;this.respTimeoutTaskId=setTimeout(function(){e.respTimeoutTask()},r.RESP_TIMEOUT)}return this},o.prototype.onAck=function(t){return"function"==typeof t&&(this.ack=t),this},o.prototype.onInnerCall=function(t){return"function"==typeof t&&(this.innerCall=t),this},o.prototype.onUserInfoGet=function(t){return"function"==typeof t&&(this.userInfoGet=t),this},o.prototype.addHook=function(t){return"function"==typeof t&&(this.hook=t),this},o.prototype.ackTimeoutTask=function(){if(this.times<r.RETRY_TIMES){this.channel.send(this.event,this._data),this.times++;var t=this;this.ackTimeoutTaskId=setTimeout(function(){t.ackTimeoutTask()},r.ACK_TIMEOUT)}else this.timeout&&this.timeout({rid:this.rid,data:this.data,response_timeout:!1}),delete this.channel.dataCache[this.rid];return this},o.prototype.respTimeoutTask=function(){if(this.times<r.RETRY_TIMES){this.channel.send(this.event,this._data),this.times++;var t=this;this.respTimeoutTaskId=setTimeout(function(){t.respTimeoutTask()},r.RESP_TIMEOUT)}else this.timeout&&this.timeout({rid:this.rid,data:this.data,response_timeout:!0}),delete this.channel.dataCache[this.rid];return this},o.prototype.cleanAckTimeout=function(){return this.ackTimeoutTaskId&&clearTimeout(this.ackTimeoutTaskId),this},o.prototype.cleanRespTimeout=function(){return this.respTimeoutTaskId&&clearTimeout(this.respTimeoutTaskId),this},o.prototype.send=function(){if(this.event&&this.data){var t=this;return this.ackTimeoutTaskId=setTimeout(function(){t.ackTimeoutTask()},r.ACK_TIMEOUT),this._data=JSON.parse(JSON.stringify(this.data)),this._data.rid=this.rid,this.channel.send(this.event,this._data),this.channel.dataCache[this.rid]=this,this}console.error("发send fail，event and data can not empty"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")},t.exports=o},function(t,e){var n=function(t,e){this.current_user=t,this.current_appkey=e,this.version=1,this.from_platform="web"};n.prototype.setNeedReceipt=function(t){return this.need_receipt=t,this},n.prototype.setNoOffline=function(t){return this.no_offline=t,this},n.prototype.setNoNotification=function(t){return this.no_notification=t,this},n.prototype.setType=function(t){return this.type=t,this},n.prototype.setAtList=function(t){return this.at_list=t,this},n.prototype.setAppkey=function(t){return t&&(this.appkey=t),this},n.prototype.setTarget=function(t,e){return this.target_id=t.toString(),this.target_name=e,this},n.prototype.setFromName=function(t){return this.from_name=t,this},n.prototype.setText=function(t,e){return this.msg_type="text",this.msg_body={text:t},e&&(this.msg_body.extras=e),this},n.prototype.setImage=function(t,e){return this.msg_type="image",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,width:t.width,height:t.height,format:t.format,fsize:t.fsize},e&&(this.msg_body.extras=e),this},n.prototype.setFile=function(t,e){return this.msg_type="file",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,hash:t.hash,fsize:t.fsize,fname:t.fname},e&&(this.msg_body.extras=e),this},n.prototype.setVoice=function(t,e){return this.msg_type="voice",this.msg_body={media_id:t.media_id,media_crc32:t.media_crc32,hash:t.hash,fsize:t.fsize,duration:t.duration,format:t.format},e&&(this.msg_body.extras=e),this},n.prototype.setCustomNotification=function(t){return t&&(this.custom_notification=t),this},n.prototype.setLocation=function(t,e){return this.msg_type="location",this.msg_body={latitude:t.latitude,longitude:t.longitude,scale:t.scale,label:t.label},e&&(this.msg_body.extras=e),this},n.prototype.setCustom=function(t){return this.msg_type="custom",this.msg_body=t,this},n.prototype.build=function(){var t=this.current_user;if("single"!=this.type&&"group"!=this.type&&"across_single"!=this.type&&"chatroom"!=this.type)return console.log("type must be single or group or chatroom"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.target_id)return console.error("target_id must not null"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if("text"==this.msg_type){if(!this.msg_body.text&&this.at_list&&"single"!=this.type)this.msg_body.text=" ";else if(!this.msg_body.text&&!this.at_list)return console.error("未设置文本消息内容"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")}else if("custom"==this.msg_type){if(!this.msg_body)return console.error("custom对象不能为空"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")}else if("image"==this.msg_type){if(!this.msg_body.media_id)return console.error("未设置image消息media_id字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.media_crc32)return console.error("未设置image消息media_crc32字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.width)return console.error("未设置image消息width字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.height)return console.error("未设置image消息height字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")}else if("file"==this.msg_type){if(!this.msg_body.media_id)return console.error("未设置file消息media_id字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.media_crc32)return console.error("未设置file消息media_crc32字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.fsize)return console.error("未设置file消息fsize字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.fname)return console.error("未设置file消息fname字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")}else if("location"==this.msg_type){if(!this.msg_body.latitude)return console.error("未设置location消息latitude字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.longitude)return console.error("未设置location消息longitude字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.scale)return console.error("未设置location消息scale字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.label)return console.error("未设置location消息label字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")}else{if("voice"!=this.msg_type)return console.error("请设置合法的msg_type"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.media_id)return console.error("未设置voice消息media_id字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");if(!this.msg_body.media_crc32)return console.error("未设置voice消息media_crc32字段"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3")}var e={version:this.version,target_type:this.type,from_platform:this.from_platform,target_id:this.target_id,target_name:this.target_name,from_id:t,from_name:this.from_name,create_time:(new Date).getTime(),msg_type:this.msg_type,msg_body:this.msg_body};this.appkey&&(e.target_appkey=this.appkey,e.from_appkey=this.current_appkey);var n={content:e};if(n.no_offline=this.no_offline,n.no_notification=this.no_notification,n.custom_notification=this.custom_notification,n.target_name=e.target_name,n.need_receipt=this.need_receipt,"single"==e.target_type)n.target_name=e.target_id;else if(n.target_gid=e.target_id,this.at_list&&this.at_list instanceof Array)n.users=this.at_list;else if(this.at_list&&!(this.at_list instanceof Array))return console.error("参数值不合法，at_list必须为数组类型"," at js_sdk\\wxmp-jiguang\\jmessage-wxapplet-sdk-1.4.0\\jmessage-wxapplet-sdk-1.4.0.min.js:3");return this.appkey?n.appkey=this.appkey:n.appkey=this.current_appkey,n},t.exports=n},function(t,e){var n=function(t){this.args=t};n.prototype.onSuccess=function(t){return"function"==typeof t&&(this.success=t),this},n.prototype.onFail=function(t){return"function"==typeof t&&(this.fail=t),this},n.prototype.onTimeout=function(t){return"function"==typeof t&&(this.timeout=t),this},n.prototype.onAck=function(t){return"function"==typeof t&&(this.ack=t),this},t.exports=n},function(t,e){var n={isBlack:function(t){return!(t&&"string"==typeof t&&t.length>0)}},r={addItem:function(t,e){wx.setStorage({key:t.toString(),data:e})},removeItems:function(t){wx.getStorageInfo({success:function(e){var n=e.keys,r=[];n.forEach(function(e){try{var n=wx.getStorageSync(e);n===t&&r.push(e)}catch(t){}}),r.forEach(function(t){wx.removeStorage({key:t,success:function(t){}})})}})},getItem:function(t){return wx.getStorageSync(t)}},o={delRepeatItem:function(t){var e=[];return t.forEach(function(t){-1===e.indexOf(t)&&null!=t&&e.push(t)}),e}},i={rooms:{}};t.exports={StringUtils:n,StorageUtils:r,ArrayUtils:o,Cache:i}},function(t,e,n){var r=n(26);e.protocol=3;var o=e.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6},i=r(o),s={type:"error",data:"parser error"};e.encodePacket=function(t,e,n,r){"function"==typeof n&&(r=n,n=null);var i=o[t.type];return void 0!==t.data&&(i+=String(t.data)),r(""+i)},e.decodePacket=function(t,e,n){if(void 0===t)return s;if("string"==typeof t){var r=t.charAt(0);return Number(r)==r&&i[r]?t.length>1?{type:i[r],data:t.substring(1)}:{type:i[r]}:s}}},function(t,e){t.exports=Object.keys||function(t){var e=[],n=Object.prototype.hasOwnProperty;for(var r in t)n.call(t,r)&&e.push(r);return e}},function(t,e,n){t.exports=n(30),t.exports.parser=n(2)},function(t,e,n){function r(t,e){"object"==typeof t&&(e=t,t=void 0),e=e||{};var n,r=i(t),s=r.source,p=r.id,f=r.path,h=u[p]&&f in u[p].nsps,l=e.forceNew||e["force new connection"]||!1===e.multiplex||h;return l?(c("ignoring socket cache for %s",s),n=a(s,e)):(u[p]||(c("new io instance for %s",s),u[p]=a(s,e)),n=u[p]),r.query&&!e.query?e.query=r.query:e&&"object"==typeof e.query&&(e.query=o(e.query)),n.socket(r.path,e)}function o(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")}var i=n(29),s=n(5),a=n(6),c=n(1)("socket.io-client");t.exports=e=r;var u=e.managers={};e.protocol=s.protocol,e.connect=r,e.Manager=n(6),e.Socket=n(8)},function(t,e,n){function r(t,e){var n=t;null==t&&(t=e.protocol+"//"+e.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?e.protocol+t:e.host+t),/^(https?|wss?):\/\//.test(t)||(i("protocol-less url %s",t),t="undefined"!=typeof e?e.protocol+"//"+t:"https://"+t),i("parse %s",t),n=o(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";var r=-1!==n.host.indexOf(":"),s=r?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+s+":"+n.port,n.href=n.protocol+"://"+s+(e&&e.port===n.port?"":":"+n.port),n}var o=n(15),i=n(1)("socket.io-client:url");t.exports=r},function(t,e,n){function r(t,e){return this instanceof r?(e=e||{},t&&"object"==typeof t&&(e=t,t=null),t?(t=p(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=p(e.host).host),this.secure=!0,this.port="443",this.agent=e.agent||!1,this.hostname=e.hostname,this.port=e.port,this.query=e.query||{},"string"==typeof this.query&&(this.query=h.decode(this.query)),this.upgrade=!1!==e.upgrade,this.path=(e.path||"/engine.io").replace(/\/$/,"")+"/",this.forceJSONP=!!e.forceJSONP,this.jsonp=!1!==e.jsonp,this.forceBase64=!!e.forceBase64,this.enablesXDR=!!e.enablesXDR,this.timestampParam=e.timestampParam||"t",this.timestampRequests=e.timestampRequests,this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.policyPort=e.policyPort||843,this.rememberUpgrade=e.rememberUpgrade||!1,this.binaryType=null,this.onlyBinaryUpgrades=e.onlyBinaryUpgrades,this.perMessageDeflate=!1!==e.perMessageDeflate&&(e.perMessageDeflate||{}),!0===this.perMessageDeflate&&(this.perMessageDeflate={}),this.perMessageDeflate&&null==this.perMessageDeflate.threshold&&(this.perMessageDeflate.threshold=1024),this.pfx=e.pfx||null,this.key=e.key||null,this.passphrase=e.passphrase||null,this.cert=e.cert||null,this.ca=e.ca||null,this.ciphers=e.ciphers||null,this.rejectUnauthorized=void 0===e.rejectUnauthorized?null:e.rejectUnauthorized,this.forceNode=!!e.forceNode,this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingIntervalTimer=null,this.pingTimeoutTimer=null,void this.open()):new r(t,e)}function o(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}var i=n(10),s=n(3),a=n(1)("engine.io-client:socket"),c=n(12),u=n(2),p=n(15),f=n(37),h=n(14);t.exports=r,r.priorWebsocketSuccess=!1,s(r.prototype),r.protocol=u.protocol,r.Socket=r,r.Transport=n(9),r.transports=n(10),r.parser=n(2),r.prototype.createTransport=function(t){a('creating transport "%s"',t);var e=o(this.query);e.EIO=u.protocol,e.transport=t,this.id&&(e.sid=this.id);var n=new i({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:e,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders,forceNode:this.forceNode,localAddress:this.localAddress});return n},r.prototype.open=function(){var t="websocket";this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)},r.prototype.setTransport=function(t){a("setting transport %s",t.name);var e=this;this.transport&&(a("clearing existing transport %s",this.transport.name),this.transport.removeAllListeners()),this.transport=t,t.on("drain",function(){e.onDrain()}).on("packet",function(t){e.onPacket(t)}).on("error",function(t){e.onError(t)}).on("close",function(){e.onClose("transport close")})},r.prototype.probe=function(t){function e(){if(h.onlyBinaryUpgrades){var e=!this.supportsBinary&&h.transport.supportsBinary;f=f||e}f||(a('probe transport "%s" opened',t),p.send([{type:"ping",data:"probe"}]),p.once("packet",function(e){if(!f)if("pong"===e.type&&"probe"===e.data){if(a('probe transport "%s" pong',t),h.upgrading=!0,h.emit("upgrading",p),!p)return;r.priorWebsocketSuccess="websocket"===p.name,a('pausing current transport "%s"',h.transport.name),h.transport.pause(function(){f||"closed"!==h.readyState&&(a("changing transport and sending upgrade packet"),u(),h.setTransport(p),p.send([{type:"upgrade"}]),h.emit("upgrade",p),p=null,h.upgrading=!1,h.flush())})}else{a('probe transport "%s" failed',t);var n=new Error("probe error");n.transport=p.name,h.emit("upgradeError",n)}}))}function n(){f||(f=!0,u(),p.close(),p=null)}function o(e){var r=new Error("probe error: "+e);r.transport=p.name,n(),a('probe transport "%s" failed because of error: %s',t,e),h.emit("upgradeError",r)}function i(){o("transport closed")}function s(){o("socket closed")}function c(t){p&&t.name!==p.name&&(a('"%s" works - aborting "%s"',t.name,p.name),n())}function u(){p.removeListener("open",e),p.removeListener("error",o),p.removeListener("close",i),h.removeListener("close",s),h.removeListener("upgrading",c)}a('probing transport "%s"',t);var p=this.createTransport(t,{probe:1}),f=!1,h=this;r.priorWebsocketSuccess=!1,p.once("open",e),p.once("error",o),p.once("close",i),this.once("close",s),this.once("upgrading",c),p.open()},r.prototype.onOpen=function(){if(this.readyState="open",r.priorWebsocketSuccess="websocket"===this.transport.name,this.emit("open"),this.flush(),"open"===this.readyState&&this.upgrade&&this.transport.pause){a("starting upgrade probes");for(var t=0,e=this.upgrades.length;t<e;t++)this.probe(this.upgrades[t])}},r.prototype.onPacket=function(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(a('socket receive: type "%s", data "%s"',t.type,t.data),this.emit("packet",t),this.emit("heartbeat"),t.type){case"open":this.onHandshake(f(t.data));break;case"pong":this.setPing(),this.emit("pong");break;case"error":var e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emit("data",t.data),this.emit("message",t.data)}else a('packet received with socket readyState "%s"',this.readyState)},r.prototype.onHandshake=function(t){this.emit("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.onOpen(),"closed"!==this.readyState&&(this.setPing(),this.removeListener("heartbeat",this.onHeartbeat),this.on("heartbeat",this.onHeartbeat))},r.prototype.onHeartbeat=function(t){clearTimeout(this.pingTimeoutTimer);var e=this;e.pingTimeoutTimer=setTimeout(function(){"closed"!==e.readyState&&e.onClose("ping timeout")},t||e.pingInterval+e.pingTimeout)},r.prototype.setPing=function(){var t=this;clearTimeout(t.pingIntervalTimer),t.pingIntervalTimer=setTimeout(function(){a("writing ping packet - expecting pong within %sms",t.pingTimeout),t.ping(),t.onHeartbeat(t.pingTimeout)},t.pingInterval)},r.prototype.ping=function(){var t=this;this.sendPacket("ping",function(){t.emit("ping")})},r.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emit("drain"):this.flush()},r.prototype.flush=function(){"closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length&&(a("flushing %d packets in socket",this.writeBuffer.length),this.transport.send(this.writeBuffer),this.prevBufferLen=this.writeBuffer.length,this.emit("flush"))},r.prototype.write=r.prototype.send=function(t,e,n){return this.sendPacket("message",t,e,n),this},r.prototype.sendPacket=function(t,e,n,r){if("function"==typeof e&&(r=e,e=void 0),"function"==typeof n&&(r=n,n=null),"closing"!==this.readyState&&"closed"!==this.readyState){n=n||{},n.compress=!1!==n.compress;var o={type:t,data:e,options:n};this.emit("packetCreate",o),this.writeBuffer.push(o),r&&this.once("flush",r),this.flush()}},r.prototype.close=function(){function t(){r.onClose("forced close"),a("socket closing - telling transport to close"),r.transport.close()}function e(){r.removeListener("upgrade",e),r.removeListener("upgradeError",e),t()}function n(){r.once("upgrade",e),r.once("upgradeError",e)}if("opening"===this.readyState||"open"===this.readyState){this.readyState="closing";var r=this;this.writeBuffer.length?this.once("drain",function(){this.upgrading?n():t()}):this.upgrading?n():t()}return this},r.prototype.onError=function(t){a("socket error %j",t),r.priorWebsocketSuccess=!1,this.emit("error",t),this.onClose("transport error",t)},r.prototype.onClose=function(t,e){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState){a('socket close with reason: "%s"',t);var n=this;clearTimeout(this.pingIntervalTimer),clearTimeout(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),this.readyState="closed",this.id=null,this.emit("close",t,e),n.writeBuffer=[],n.prevBufferLen=0}},r.prototype.filterUpgrades=function(t){for(var e=[],n=0,r=t.length;n<r;n++)~c(this.transports,t[n])&&e.push(t[n]);return e}},function(t,e,n){!function(){function t(t){this.message=t}var n=e,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=new Error,t.prototype.name="InvalidCharacterError",n.btoa||(n.btoa=function(e){for(var n,o,i=String(e),s=0,a=r,c="";i.charAt(0|s)||(a="=",s%1);c+=a.charAt(63&n>>8-s%1*8)){if(o=i.charCodeAt(s+=.75),o>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|o}return c}),n.atob||(n.atob=function(e){var n=String(e).replace(/=+$/,"");if(n.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,i,s=0,a=0,c="";i=n.charAt(a++);~i&&(o=s%4?64*o+i:i,s++%4)?c+=String.fromCharCode(255&o>>(-2*s&6)):0)i=r.indexOf(i);return c})}()},function(t,e){function n(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}t.exports=n,n.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),n=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-n:t+n}return 0|Math.min(t,this.max)},n.prototype.reset=function(){this.attempts=0},n.prototype.setMin=function(t){this.ms=t},n.prototype.setMax=function(t){this.max=t},n.prototype.setJitter=function(t){this.jitter=t}},function(t,e){t.exports=function(t,e){var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e,n){function r(){return e.colors[p++%e.colors.length]}function o(t){function n(){}function o(){var t=o,n=+new Date,i=n-(u||n);t.diff=i,t.prev=u,t.curr=n,u=n,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=r());for(var s=new Array(arguments.length),a=0;a<s.length;a++)s[a]=arguments[a];s[0]=e.coerce(s[0]),"string"!=typeof s[0]&&(s=["%o"].concat(s));var c=0;s[0]=s[0].replace(/%([a-z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=s[c];n=o.call(t,i),s.splice(c,1),c--}return n}),s=e.formatArgs.apply(t,s);var p=o.log||e.log||console.log.bind(console);p.apply(t,s)}n.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:n;return i.namespace=t,i}function i(t){e.save(t);for(var n=(t||"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/[\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){e.enable("")}function a(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function c(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o.debug=o,e.coerce=c,e.disable=s,e.enable=i,e.enabled=a,e.humanize=n(36),e.names=[],e.skips=[],e.formatters={};var u,p=0},function(t,e,n){(function(e){function r(t){function n(t){if(!t)return!1;if(e.Buffer&&e.Buffer.isBuffer&&e.Buffer.isBuffer(t)||e.ArrayBuffer&&t instanceof ArrayBuffer||e.Blob&&t instanceof Blob||e.File&&t instanceof File)return!0;if(o(t)){for(var r=0;r<t.length;r++)if(n(t[r]))return!0}else if(t&&"object"==typeof t)for(var i in t.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),t)if(Object.prototype.hasOwnProperty.call(t,i)&&n(t[i]))return!0;return!1}return n(t)}var o=n(13);t.exports=r}).call(e,function(){return this}())},function(t,e){function n(t){if(t=String(t),!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*p;case"days":case"day":case"d":return n*u;case"hours":case"hour":case"hrs":case"hr":case"h":return n*c;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function r(t){return t>=u?Math.round(t/u)+"d":t>=c?Math.round(t/c)+"h":t>=a?Math.round(t/a)+"m":t>=s?Math.round(t/s)+"s":t+"ms"}function o(t){return i(t,u,"day")||i(t,c,"hour")||i(t,a,"minute")||i(t,s,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var s=1e3,a=60*s,c=60*a,u=24*c,p=365.25*u;t.exports=function(t,e){e=e||{};var i=typeof t;if("string"===i&&t.length>0)return n(t);if("number"===i&&!1===isNaN(t))return e.long?o(t):r(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},function(t,e){var n=/^\s+/,r=/\s+$/;t.exports=function(t){return"string"==typeof t&&t?(t=t.replace(n,"").replace(r,""),JSON.parse(t)):null}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(p===setTimeout)return setTimeout(t,0);if((p===n||!p)&&setTimeout)return p=setTimeout,setTimeout(t,0);try{return p(t,0)}catch(e){try{return p.call(null,t,0)}catch(e){return p.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){d&&l&&(d=!1,l.length?_=l.concat(_):y=-1,_.length&&a())}function a(){if(!d){var t=o(s);d=!0;for(var e=_.length;e;){for(l=_,_=[];++y<e;)l&&l[y].run();y=-1,e=_.length}l=null,d=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var p,f,h=t.exports={};!function(){try{p="function"==typeof setTimeout?setTimeout:n}catch(t){p=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(t){f=r}}();var l,_=[],d=!1,y=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];_.push(new c(t,e)),1!==_.length||d||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=u,h.addListener=u,h.once=u,h.off=u,h.removeListener=u,h.removeAllListeners=u,h.emit=u,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(t,e,n){(function(t){var r=n(13),o=n(16);e.deconstructPacket=function(t){function e(t){if(!t)return t;if(o(t)){var i={_placeholder:!0,num:n.length};return n.push(t),i}if(r(t)){for(var s=new Array(t.length),a=0;a<t.length;a++)s[a]=e(t[a]);return s}if("object"==typeof t&&!(t instanceof Date)){s={};for(var c in t)s[c]=e(t[c]);return s}return t}var n=[],i=t.data,s=t;return s.data=e(i),s.attachments=n.length,{packet:s,buffers:n}},e.reconstructPacket=function(t,e){function n(t){if(t&&t._placeholder){var o=e[t.num];return o}if(r(t)){for(var i=0;i<t.length;i++)t[i]=n(t[i]);return t}if(t&&"object"==typeof t){for(var s in t)t[s]=n(t[s]);return t}return t}return t.data=n(t.data),t.attachments=void 0,t},e.removeBlobs=function(e,n){function i(e,c,u){if(!e)return e;if(t.Blob&&e instanceof Blob||t.File&&e instanceof File){s++;var p=new FileReader;p.onload=function(){u?u[c]=this.result:a=this.result,--s||n(a)},p.readAsArrayBuffer(e)}else if(r(e))for(var f=0;f<e.length;f++)i(e[f],f,e);else if(e&&"object"==typeof e&&!o(e))for(var h in e)i(e[h],h,e)}var s=0,a=e;i(a),s||n(a)}}).call(e,function(){return this}())},function(t,e){function n(t){if(t)return r(t)}function r(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks[t]=this._callbacks[t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){r.off(t,n),e.apply(this,arguments)}var r=this;return this._callbacks=this._callbacks||{},n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks[t];if(!n)return this;if(1==arguments.length)return delete this._callbacks[t],this;for(var r,o=0;o<n.length;o++)if(r=n[o],r===e||r.fn===e){n.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks[t];if(n){n=n.slice(0);for(var r=0,o=n.length;r<o;++r)n[r].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks[t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e){function n(t,e){var n=[];e=e||0;for(var r=e||0;r<t.length;r++)n[r-e]=t[r];return n}t.exports=n},function(t,e){function n(t){var e="";do{e=s[t%a]+e,t=Math.floor(t/a)}while(t>0);return e}function r(t){var e=0;for(p=0;p<t.length;p++)e=e*a+c[t.charAt(p)];return e}function o(){var t=n(+new Date);return t!==i?(u=0,i=t):t+"."+n(u++)}for(var i,s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),a=64,c={},u=0,p=0;p<a;p++)c[s[p]]=p;o.encode=n,o.decode=r,t.exports=o}])})},a2fa:function(t,e,n){},a30c:function(module,exports,__webpack_require__){"use strict";(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function(){var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var n=OUTPUT_TYPES[e];t[n]=createOutputMethod(n)}return t},nodeWrap=function nodeWrap(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,n=typeof t;if("string"!==n){if("object"!==n)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var r,o,i=0,s=t.length,a=this.blocks,c=this.buffer8;while(i<s){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),e)if(ARRAY_BUFFER)for(o=this.start;i<s&&o<64;++i)c[o++]=t[i];else for(o=this.start;i<s&&o<64;++i)a[o>>2]|=t[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<s&&o<64;++i)r=t.charCodeAt(i),r<128?c[o++]=r:r<2048?(c[o++]=192|r>>6,c[o++]=128|63&r):r<55296||r>=57344?(c[o++]=224|r>>12,c[o++]=128|r>>6&63,c[o++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),c[o++]=240|r>>18,c[o++]=128|r>>12&63,c[o++]=128|r>>6&63,c[o++]=128|63&r);else for(o=this.start;i<s&&o<64;++i)r=t.charCodeAt(i),r<128?a[o>>2]|=r<<SHIFT[3&o++]:r<2048?(a[o>>2]|=(192|r>>6)<<SHIFT[3&o++],a[o>>2]|=(128|63&r)<<SHIFT[3&o++]):r<55296||r>=57344?(a[o>>2]|=(224|r>>12)<<SHIFT[3&o++],a[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&r)<<SHIFT[3&o++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++i)),a[o>>2]|=(240|r>>18)<<SHIFT[3&o++],a[o>>2]|=(128|r>>12&63)<<SHIFT[3&o++],a[o>>2]|=(128|r>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&r)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,n,r,o,i,s=this.blocks;this.first?(t=s[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,r=(-1732584194^2004318071&t)+s[1]-117830708,r=(r<<12|r>>>20)+t<<0,n=(-271733879^r&(-271733879^t))+s[2]-1126478375,n=(n<<17|n>>>15)+r<<0,e=(t^n&(r^t))+s[3]-1316259209,e=(e<<22|e>>>10)+n<<0):(t=this.h0,e=this.h1,n=this.h2,r=this.h3,t+=(r^e&(n^r))+s[0]-680876936,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+s[1]-389564586,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+s[2]+606105819,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+s[3]-1044525330,e=(e<<22|e>>>10)+n<<0),t+=(r^e&(n^r))+s[4]-176418897,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+s[5]+1200080426,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+s[6]-1473231341,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+s[7]-45705983,e=(e<<22|e>>>10)+n<<0,t+=(r^e&(n^r))+s[8]+1770035416,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+s[9]-1958414417,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+s[10]-42063,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+s[11]-1990404162,e=(e<<22|e>>>10)+n<<0,t+=(r^e&(n^r))+s[12]+1804603682,t=(t<<7|t>>>25)+e<<0,r+=(n^t&(e^n))+s[13]-40341101,r=(r<<12|r>>>20)+t<<0,n+=(e^r&(t^e))+s[14]-1502002290,n=(n<<17|n>>>15)+r<<0,e+=(t^n&(r^t))+s[15]+1236535329,e=(e<<22|e>>>10)+n<<0,t+=(n^r&(e^n))+s[1]-165796510,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+s[6]-1069501632,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+s[11]+643717713,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+s[0]-373897302,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+s[5]-701558691,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+s[10]+38016083,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+s[15]-660478335,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+s[4]-405537848,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+s[9]+568446438,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+s[14]-1019803690,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+s[3]-187363961,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+s[8]+1163531501,e=(e<<20|e>>>12)+n<<0,t+=(n^r&(e^n))+s[13]-1444681467,t=(t<<5|t>>>27)+e<<0,r+=(e^n&(t^e))+s[2]-51403784,r=(r<<9|r>>>23)+t<<0,n+=(t^e&(r^t))+s[7]+1735328473,n=(n<<14|n>>>18)+r<<0,e+=(r^t&(n^r))+s[12]-1926607734,e=(e<<20|e>>>12)+n<<0,o=e^n,t+=(o^r)+s[5]-378558,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+s[8]-2022574463,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+s[11]+1839030562,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+s[14]-35309556,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+s[1]-1530992060,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+s[4]+1272893353,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+s[7]-155497632,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+s[10]-1094730640,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+s[13]+681279174,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+s[0]-358537222,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+s[3]-722521979,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+s[6]+76029189,e=(e<<23|e>>>9)+n<<0,o=e^n,t+=(o^r)+s[9]-640364487,t=(t<<4|t>>>28)+e<<0,r+=(o^t)+s[12]-421815835,r=(r<<11|r>>>21)+t<<0,i=r^t,n+=(i^e)+s[15]+530742520,n=(n<<16|n>>>16)+r<<0,e+=(i^n)+s[2]-995338651,e=(e<<23|e>>>9)+n<<0,t+=(n^(e|~r))+s[0]-198630844,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+s[7]+1126891415,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+s[14]-1416354905,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+s[5]-57434055,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+s[12]+1700485571,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+s[3]-1894986606,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+s[10]-1051523,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+s[1]-2054922799,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+s[8]+1873313359,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+s[15]-30611744,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+s[6]-1560198380,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+s[13]+1309151649,e=(e<<21|e>>>11)+n<<0,t+=(n^(e|~r))+s[4]-145523070,t=(t<<6|t>>>26)+e<<0,r+=(e^(t|~n))+s[11]-1120210379,r=(r<<10|r>>>22)+t<<0,n+=(t^(r|~e))+s[2]+718787259,n=(n<<15|n>>>17)+r<<0,e+=(r^(n|~t))+s[9]-343485551,e=(e<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[n>>4&15]+HEX_CHARS[15&n]+HEX_CHARS[n>>12&15]+HEX_CHARS[n>>8&15]+HEX_CHARS[n>>20&15]+HEX_CHARS[n>>16&15]+HEX_CHARS[n>>28&15]+HEX_CHARS[n>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,n,r="",o=this.array(),i=0;i<15;)t=o[i++],e=o[i++],n=o[i++],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|n>>>6)]+BASE64_ENCODE_CHAR[63&n];return t=o[i],r+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",r};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var o=t[r];"."===o?t.splice(r,1):".."===o?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return r.exec(t).slice(1)};function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,o=arguments.length-1;o>=-1&&!r;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(e=s+"/"+e,r="/"===s.charAt(0))}return e=n(i(e.split("/"),function(t){return!!t}),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),function(t){return!!t}),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var o=r(t.split("/")),i=r(n.split("/")),s=Math.min(o.length,i.length),a=s,c=0;c<s;c++)if(o[c]!==i[c]){a=c;break}var u=[];for(c=a;c<o.length;c++)u.push("..");return u=u.concat(i.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=o(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=o(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"2c81":function(n,o,e){"use strict";e.r(o);var t=e("8a5a"),a=e.n(t);for(var s in t)"default"!==s&&function(n){e.d(o,n,function(){return t[n]})}(s);o["default"]=a.a},"5c4f":function(n,o,e){"use strict";var t=function(){var n=this,o=n.$createElement;n._self._c},a=[];e.d(o,"a",function(){return t}),e.d(o,"b",function(){return a})},"8a5a":function(n,o,e){"use strict";(function(n){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;t(e("a30c"));function t(n){return n&&n.__esModule?n:{default:n}}var a={data:function(){return{username:"",password:"",re_un:"",re_pw:"",re_nickname:""}},onLoad:function(){},methods:{login_in:function(){var o=this,e=o.$data.username,t=o.$data.password;e&&t?this.JIM.login({username:e,password:t}).onSuccess(function(o){console.log("%c%s","color: red; font-size: 24px;","登录成功"," at pages\\login\\login.vue:47"),console.log(o," at pages\\login\\login.vue:48"),n.showToast({title:"登录成功"})}).onFail(function(o){console.log("JIM -登录失败"," at pages\\login\\login.vue:53"),n.showToast({title:"登录失败"})}):n.showToast({title:"输入不完整"})},register:function(){var o=this,e=o.$data.re_un,t=o.$data.re_pw,a=o.$data.re_nickname;e&&t&&a?this.JIM.register({username:e,password:t,nickname:a,is_md5:!1,address:"江苏"}).onSuccess(function(o){console.log("%c%s","color: red; font-size: 24px;","注册成功"," at pages\\login\\login.vue:80"),n.showToast({title:"注册成功"})}).onFail(function(o){console.log("JIM -注册失败"," at pages\\login\\login.vue:85"),console.log(o," at pages\\login\\login.vue:86"),n.showToast({title:"注册失败"})}):n.showToast({title:"输入不完整"})}}};o.default=a}).call(this,e("6e42")["default"])},a628:function(n,o,e){},b205:function(n,o,e){"use strict";var t=e("a628"),a=e.n(t);a.a},e3c3:function(n,o,e){"use strict";e.r(o);var t=e("5c4f"),a=e("2c81");for(var s in a)"default"!==s&&function(n){e.d(o,n,function(){return a[n]})}(s);e("b205");var i=e("2877"),u=Object(i["a"])(a["default"],t["a"],t["b"],!1,null,null,null);o["default"]=u.exports}},[["0259","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"03a9":function(n,t,e){"use strict";var u=e("c597"),a=e.n(u);a.a},"098a":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"1ddc":function(n,t,e){"use strict";e.r(t);var u=e("a8a8"),a=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=a.a},9702:function(n,t,e){"use strict";e.r(t);var u=e("098a"),a=e("1ddc");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("03a9");var r=e("2877"),c=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},a8a8:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;u(e("a30c"));function u(n){return n&&n.__esModule?n:{default:n}}var a={data:function(){return{title:"Hello"}},onLoad:function(){},methods:{}};t.default=a},c597:function(n,t,e){}},[["7bd0","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
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

