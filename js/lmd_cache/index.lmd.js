(function a(b,c,d,e,f){var g={},h=b.eval,i=b.document,j=function(a,c){var f={exports:{}};return g[a]=1,d[a]=f.exports,c?typeof c=="function"&&(c=c(e[a]?null:k,f.exports,f)||f.exports):c=b[a],d[a]=c},k=function(a){var b=d[a];return g[a]&&b?b:(/^\(function\(/.test(b)&&(b=h(b)),j(a,b))},l={exports:{}};for(var m in d)g[m]=0;k.async=function(a,c){var e=d[a],f=b.XMLHttpRequest||b.ActiveXObject;if(e){c(g[a]?e:k(a));return}var i=new f("Microsoft.XMLHTTP");i.onreadystatechange=function(){i.readyState==4&&(i.status<201?(e=i.responseText,/script$|json$/.test(i.getResponseHeader("content-type"))&&(e=h("("+e+")")),c(j(a,e))):c())},i.open("get",a),i.send()},b.localStorage&&f&&function(){try{b.localStorage.lmd=b.JSON.stringify({version:f,modules:d,main:"("+c+")",lmd:"("+a+")",sandboxed:e})}catch(g){}}(),c(k,l.exports,l)})(this,function(a,b,c){var d=a().$,e=a("b-roster");new e(d("body"))},{"b-roster":'(function(a,b,c){function e(b){b.innerHTML+=this.renderWrapper();var c=[];for(var e=100;e-->0;)c.push(this.renderItem());d(".b-roster").innerHTML=c.join(""),d(".b-roster").addEventListener("click",function(c){a.async("js/lmd/modules/b-dialog.min.js",function(a){new a(b)})},!1)}function f(a){return g("<span>"+a+"</span>")}function g(a){return h("<span>"+a+"</span>")}function h(a){return i("<span>"+a+"</span>")}function i(a){return j("<span>"+a+"</span>")}function j(a){return k("<span>"+a+"</span>")}function k(a){return l("<span>"+a+"</span>")}function l(a){return m("<span>"+a+"</span>")}function m(a){return n("<span>"+a+"</span>")}function n(a){return o("<span>"+a+"</span>")}function o(a){return p("<span>"+a+"</span>")}function p(a){return q("<span>"+a+"</span>")}function q(a){return r("<span>"+a+"</span>")}function r(a){return s("<span>"+a+"</span>")}function s(a){return t("<span>"+a+"</span>")}function t(a){return u("<span>"+a+"</span>")}function u(a){return v("<span>"+a+"</span>")}function v(a){return w("<span>"+a+"</span>")}function w(a){return x("<span>"+a+"</span>")}function x(a){return y("<span>"+a+"</span>")}function y(a){return z("<span>"+a+"</span>")}function z(a){return A("<span>"+a+"</span>")}function A(a){return B("<span>"+a+"</span>")}function B(a){return C("<span>"+a+"</span>")}function C(a){return D("<span>"+a+"</span>")}function D(a){return E("<span>"+a+"</span>")}function E(a){return F("<span>"+a+"</span>")}function F(a){return G("<span>"+a+"</span>")}function G(a){return H("<span>"+a+"</span>")}function H(a){return I("<span>"+a+"</span>")}function I(a){return J("<span>"+a+"</span>")}function J(a){return K("<span>"+a+"</span>")}function K(a){return L("<span>"+a+"</span>")}function L(a){return M("<span>"+a+"</span>")}function M(a){return N("<span>"+a+"</span>")}function N(a){return O("<span>"+a+"</span>")}function O(a){return P("<span>"+a+"</span>")}function P(a){return Q("<span>"+a+"</span>")}function Q(a){return R("<span>"+a+"</span>")}function R(a){return S("<span>"+a+"</span>")}function S(a){return T("<span>"+a+"</span>")}function T(a){return U("<span>"+a+"</span>")}function U(a){return V("<span>"+a+"</span>")}function V(a){return W("<span>"+a+"</span>")}function W(a){return X("<span>"+a+"</span>")}function X(a){return Y("<span>"+a+"</span>")}function Y(a){return Z("<span>"+a+"</span>")}function Z(a){return $("<span>"+a+"</span>")}function $(a){return _("<span>"+a+"</span>")}function _(a){return ba("<span>"+a+"</span>")}function ba(a){return bb("<span>"+a+"</span>")}function bb(a){return bc("<span>"+a+"</span>")}function bc(a){return bd("<span>"+a+"</span>")}function bd(a){return be("<span>"+a+"</span>")}function be(a){return bf("<span>"+a+"</span>")}function bf(a){return bg("<span>"+a+"</span>")}function bg(a){return bh("<span>"+a+"</span>")}function bh(a){return bi("<span>"+a+"</span>")}function bi(a){return bj("<span>"+a+"</span>")}function bj(a){return bk("<span>"+a+"</span>")}function bk(a){return bl("<span>"+a+"</span>")}function bl(a){return bm("<span>"+a+"</span>")}function bm(a){return bn("<span>"+a+"</span>")}function bn(a){return bo("<span>"+a+"</span>")}function bo(a){return bp("<span>"+a+"</span>")}function bp(a){return bq("<span>"+a+"</span>")}function bq(a){return br("<span>"+a+"</span>")}function br(a){return bs("<span>"+a+"</span>")}function bs(a){return bt("<span>"+a+"</span>")}function bt(a){return bu("<span>"+a+"</span>")}function bu(a){return bv("<span>"+a+"</span>")}function bv(a){return bw("<span>"+a+"</span>")}function bw(a){return bx("<span>"+a+"</span>")}function bx(a){return by("<span>"+a+"</span>")}function by(a){return bz("<span>"+a+"</span>")}function bz(a){return bA("<span>"+a+"</span>")}function bA(a){return bB("<span>"+a+"</span>")}function bB(a){return bC("<span>"+a+"</span>")}function bC(a){return bD("<span>"+a+"</span>")}function bD(a){return bE("<span>"+a+"</span>")}function bE(a){return bF("<span>"+a+"</span>")}function bF(a){return bG("<span>"+a+"</span>")}function bG(a){return bH("<span>"+a+"</span>")}function bH(a){return bI("<span>"+a+"</span>")}function bI(a){return bJ("<span>"+a+"</span>")}function bJ(a){return bK("<span>"+a+"</span>")}function bK(a){return bL("<span>"+a+"</span>")}function bL(a){return bM("<span>"+a+"</span>")}function bM(a){return bN("<span>"+a+"</span>")}function bN(a){return bO("<span>"+a+"</span>")}function bO(a){return bP("<span>"+a+"</span>")}function bP(a){return bQ("<span>"+a+"</span>")}function bQ(a){return bR("<span>"+a+"</span>")}function bR(a){return bS("<span>"+a+"</span>")}function bS(a){return bT("<span>"+a+"</span>")}function bT(a){return bU("<span>"+a+"</span>")}function bU(a){return bV("<span>"+a+"</span>")}function bV(a){return bW("<span>"+a+"</span>")}function bW(a){return bX("<span>"+a+"</span>")}function bX(a){return bY("<span>"+a+"</span>")}function bY(a){return bZ("<span>"+a+"</span>")}function bZ(a){return b$("<span>"+a+"</span>")}function b$(a){return b_("<span>"+a+"</span>")}function b_(a){return ca("<span>"+a+"</span>")}function ca(a){return cb("<span>"+a+"</span>")}function cb(a){return cc("<span>"+a+"</span>")}function cc(a){return cd("<span>"+a+"</span>")}function cd(a){return ce("<span>"+a+"</span>")}function ce(a){return cf("<span>"+a+"</span>")}function cf(a){return cg("<span>"+a+"</span>")}function cg(a){return ch("<span>"+a+"</span>")}function ch(a){return ci("<span>"+a+"</span>")}function ci(a){return cj("<span>"+a+"</span>")}function cj(a){return ck("<span>"+a+"</span>")}function ck(a){return cl("<span>"+a+"</span>")}function cl(a){return cm("<span>"+a+"</span>")}function cm(a){return cn("<span>"+a+"</span>")}function cn(a){return co("<span>"+a+"</span>")}function co(a){return cp("<span>"+a+"</span>")}function cp(a){return cq("<span>"+a+"</span>")}function cq(a){return cr("<span>"+a+"</span>")}function cr(a){return cs("<span>"+a+"</span>")}function cs(a){return ct("<span>"+a+"</span>")}function ct(a){return cu("<span>"+a+"</span>")}function cu(a){return cv("<span>"+a+"</span>")}function cv(a){return cw("<span>"+a+"</span>")}function cw(a){return cx("<span>"+a+"</span>")}function cx(a){return cy("<span>"+a+"</span>")}function cy(a){return cz("<span>"+a+"</span>")}function cz(a){return cA("<span>"+a+"</span>")}function cA(a){return cB("<span>"+a+"</span>")}function cB(a){return cC("<span>"+a+"</span>")}function cC(a){return cD("<span>"+a+"</span>")}function cD(a){return cE("<span>"+a+"</span>")}function cE(a){return cF("<span>"+a+"</span>")}function cF(a){return cG("<span>"+a+"</span>")}function cG(a){return cH("<span>"+a+"</span>")}function cH(a){return cI("<span>"+a+"</span>")}function cI(a){return cJ("<span>"+a+"</span>")}function cJ(a){return cK("<span>"+a+"</span>")}function cK(a){return cL("<span>"+a+"</span>")}function cL(a){return cM("<span>"+a+"</span>")}function cM(a){return cN("<span>"+a+"</span>")}function cN(a){return cO("<span>"+a+"</span>")}function cO(a){return cP("<span>"+a+"</span>")}function cP(a){return cQ("<span>"+a+"</span>")}function cQ(a){return cR("<span>"+a+"</span>")}function cR(a){return cS("<span>"+a+"</span>")}function cS(a){return cT("<span>"+a+"</span>")}function cT(a){return cU("<span>"+a+"</span>")}function cU(a){return cV("<span>"+a+"</span>")}function cV(a){return cW("<span>"+a+"</span>")}function cW(a){return cX("<span>"+a+"</span>")}function cX(a){return cY("<span>"+a+"</span>")}function cY(a){return cZ("<span>"+a+"</span>")}function cZ(a){return c$("<span>"+a+"</span>")}function c$(a){return c_("<span>"+a+"</span>")}function c_(a){return da("<span>"+a+"</span>")}function da(a){return db("<span>"+a+"</span>")}function db(a){return dc("<span>"+a+"</span>")}function dc(a){return dd("<span>"+a+"</span>")}function dd(a){return de("<span>"+a+"</span>")}function de(a){return df("<span>"+a+"</span>")}function df(a){return dg("<span>"+a+"</span>")}function dg(a){return dh("<span>"+a+"</span>")}function dh(a){return di("<span>"+a+"</span>")}function di(a){return dj("<span>"+a+"</span>")}function dj(a){return dk("<span>"+a+"</span>")}function dk(a){return dl("<span>"+a+"</span>")}function dl(a){return dm("<span>"+a+"</span>")}function dm(a){return dn("<span>"+a+"</span>")}function dn(a){return dp("<span>"+a+"</span>")}function dp(a){return dq("<span>"+a+"</span>")}function dq(a){return dr("<span>"+a+"</span>")}function dr(a){return ds("<span>"+a+"</span>")}function ds(a){return dt("<span>"+a+"</span>")}function dt(a){return du("<span>"+a+"</span>")}function du(a){return dv("<span>"+a+"</span>")}function dv(a){return dw("<span>"+a+"</span>")}function dw(a){return dx("<span>"+a+"</span>")}function dx(a){return dy("<span>"+a+"</span>")}function dy(a){return dz("<span>"+a+"</span>")}function dz(a){return dA("<span>"+a+"</span>")}function dA(a){return dB("<span>"+a+"</span>")}function dB(a){return dC("<span>"+a+"</span>")}function dC(a){return dD("<span>"+a+"</span>")}function dD(a){return dE("<span>"+a+"</span>")}function dE(a){return dF("<span>"+a+"</span>")}function dF(a){return dG("<span>"+a+"</span>")}function dG(a){return dH("<span>"+a+"</span>")}function dH(a){return dI("<span>"+a+"</span>")}function dI(a){return dJ("<span>"+a+"</span>")}function dJ(a){return dK("<span>"+a+"</span>")}function dK(a){return dL("<span>"+a+"</span>")}function dL(a){return dM("<span>"+a+"</span>")}function dM(a){return dN("<span>"+a+"</span>")}function dN(a){return dO("<span>"+a+"</span>")}function dO(a){return dP("<span>"+a+"</span>")}function dP(a){return dQ("<span>"+a+"</span>")}function dQ(a){return dR("<span>"+a+"</span>")}function dR(a){return dS("<span>"+a+"</span>")}function dS(a){return dT("<span>"+a+"</span>")}function dT(a){return dU("<span>"+a+"</span>")}function dU(a){return dV("<span>"+a+"</span>")}function dV(a){return dW("<span>"+a+"</span>")}function dW(a){return dX("<span>"+a+"</span>")}function dX(a){return dY("<span>"+a+"</span>")}function dY(a){return dZ("<span>"+a+"</span>")}function dZ(a){return d$("<span>"+a+"</span>")}function d$(a){return d_("<span>"+a+"</span>")}function d_(a){return ea("<span>"+a+"</span>")}function ea(a){return eb("<span>"+a+"</span>")}function eb(a){return ec("<span>"+a+"</span>")}function ec(a){return ed("<span>"+a+"</span>")}function ed(a){return ee("<span>"+a+"</span>")}function ee(a){return ef("<span>"+a+"</span>")}function ef(a){return eg("<span>"+a+"</span>")}function eg(a){return eh("<span>"+a+"</span>")}function eh(a){return ei("<span>"+a+"</span>")}function ei(a){return ej("<span>"+a+"</span>")}function ej(a){return ek("<span>"+a+"</span>")}function ek(a){return el("<span>"+a+"</span>")}function el(a){return em("<span>"+a+"</span>")}function em(a){return en("<span>"+a+"</span>")}function en(a){return eo("<span>"+a+"</span>")}function eo(a){return ep("<span>"+a+"</span>")}function ep(a){return eq("<span>"+a+"</span>")}function eq(a){return er("<span>"+a+"</span>")}function er(a){return es("<span>"+a+"</span>")}function es(a){return et("<span>"+a+"</span>")}function et(a){return eu("<span>"+a+"</span>")}function eu(a){return ev("<span>"+a+"</span>")}function ev(a){return ew("<span>"+a+"</span>")}function ew(a){return ex("<span>"+a+"</span>")}function ex(a){return ey("<span>"+a+"</span>")}function ey(a){return ez("<span>"+a+"</span>")}function ez(a){return eA("<span>"+a+"</span>")}function eA(a){return eB("<span>"+a+"</span>")}function eB(a){return eC("<span>"+a+"</span>")}function eC(a){return eD("<span>"+a+"</span>")}function eD(a){return eE("<span>"+a+"</span>")}function eE(a){return eF("<span>"+a+"</span>")}function eF(a){return eG("<span>"+a+"</span>")}function eG(a){return eH("<span>"+a+"</span>")}function eH(a){return eI("<span>"+a+"</span>")}function eI(a){return eJ("<span>"+a+"</span>")}function eJ(a){return eK("<span>"+a+"</span>")}function eK(a){return eL("<span>"+a+"</span>")}function eL(a){return eM("<span>"+a+"</span>")}function eM(a){return eN("<span>"+a+"</span>")}function eN(a){return eO("<span>"+a+"</span>")}function eO(a){return eP("<span>"+a+"</span>")}function eP(a){return eQ("<span>"+a+"</span>")}function eQ(a){return eR("<span>"+a+"</span>")}function eR(a){return eS("<span>"+a+"</span>")}function eS(a){return eT("<span>"+a+"</span>")}function eT(a){return eU("<span>"+a+"</span>")}function eU(a){return eV("<span>"+a+"</span>")}function eV(a){return eW("<span>"+a+"</span>")}function eW(a){return eX("<span>"+a+"</span>")}function eX(a){return eY("<span>"+a+"</span>")}function eY(a){return eZ("<span>"+a+"</span>")}function eZ(a){return e$("<span>"+a+"</span>")}function e$(a){return e_("<span>"+a+"</span>")}function e_(a){return fa("<span>"+a+"</span>")}function fa(a){return fb("<span>"+a+"</span>")}function fb(a){return fc("<span>"+a+"</span>")}function fc(a){return fd("<span>"+a+"</span>")}function fd(a){return fe("<span>"+a+"</span>")}function fe(a){return ff("<span>"+a+"</span>")}function ff(a){return fg("<span>"+a+"</span>")}function fg(a){return fh("<span>"+a+"</span>")}function fh(a){return fi("<span>"+a+"</span>")}function fi(a){return fj("<span>"+a+"</span>")}function fj(a){return fk("<span>"+a+"</span>")}function fk(a){return fl("<span>"+a+"</span>")}function fl(a){return fm("<span>"+a+"</span>")}function fm(a){return fn("<span>"+a+"</span>")}function fn(a){return fo("<span>"+a+"</span>")}function fo(a){return fp("<span>"+a+"</span>")}function fp(a){return fq("<span>"+a+"</span>")}function fq(a){return fr("<span>"+a+"</span>")}function fr(a){return fs("<span>"+a+"</span>")}function fs(a){return ft("<span>"+a+"</span>")}function ft(a){return fu("<span>"+a+"</span>")}function fu(a){return fv("<span>"+a+"</span>")}function fv(a){return fw("<span>"+a+"</span>")}function fw(a){return fx("<span>"+a+"</span>")}function fx(a){return fy("<span>"+a+"</span>")}function fy(a){return fz("<span>"+a+"</span>")}function fz(a){return fA("<span>"+a+"</span>")}function fA(a){return fB("<span>"+a+"</span>")}function fB(a){return fC("<span>"+a+"</span>")}function fC(a){return fD("<span>"+a+"</span>")}function fD(a){return fE("<span>"+a+"</span>")}function fE(a){return fF("<span>"+a+"</span>")}function fF(a){return fG("<span>"+a+"</span>")}function fG(a){return fH("<span>"+a+"</span>")}function fH(a){return fI("<span>"+a+"</span>")}function fI(a){return fJ("<span>"+a+"</span>")}function fJ(a){return a}var d=a().$;e.prototype.renderWrapper=function(){return\'<div class="b-roster"></div>\'},e.prototype.renderItem=function(){return\'<div class="b-roster__item js-item"><div class="b-roster__item__photo js-photo"></div><div class="b-roster__item__meta"><div class="b-roster__item__meta__name">\'+this.renderName("Test Test Test Test")+"</div>"+\'<div class="b-roster__item__meta__status b-roster__item__meta__status_status_online">\'+\'<span class="b-roster__item__meta__status_icon"></span>\'+"<span>Online</span>"+"</div>"+"</div>"+"</div>"},e.prototype.renderName=function(a){return f("<span>"+a+"</span>")},c.exports=e})',"undefined":'(function(a,b){var c=a("document");b.$=function(a,b){return(b||c).querySelector(a)}})'},{},"1.6.3-1")