(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,a,r){e.exports=r(39)},,,,,,function(e,a,r){},,,,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){},,function(e,a,r){"use strict";r.r(a);var n=r(0),t=r.n(n),o=r(9),c=r.n(o),i=(r(17),r(3)),s=r(4),l=r(6),u=r(5),h=r(7),m=r(1),p=r.n(m),f=r(2);function d(e){switch(e){case"anglo-ru":return"Anglo - RU";case"anglo-med":return"Anglo - Medicina";case"anglo-esef":return"Anglo - ESEF";case"anglo-capao":return"Anglo - Cap\xe3o";case"capao-anglo":return"Cap\xe3o - Anglo";default:return""}}r(21);function g(e){return t.a.createElement("div",{className:"header"},t.a.createElement("select",{className:"header__select",onChange:function(a){return e.onLinhaChange(a.target.value)}},e.linhas.map(function(e,a){return t.a.createElement("option",{className:"header__select--option",key:a,value:e},d(e))})))}r(23);var v=function(e){return t.a.createElement("div",{className:"horario-card",id:e.horario},t.a.createElement("span",{className:"horario-card__horario"},e.horario),t.a.createElement("span",{className:"horario-card__obs"},e.observacao))},b=(r(25),function(e){return t.a.createElement("div",{className:"container"},e.horarios.map(function(e,a){return t.a.createElement(v,{horario:e.horario,observacao:e.ceu?"CEU":"",key:a})}))});r(27);function E(e){return t.a.createElement("div",{className:"section"},t.a.createElement("p",{className:"section__text"},e.text||e.children),t.a.createElement("br",null))}r(29);function x(e){return t.a.createElement("div",{className:"horario-grande ".concat(function(e){switch(e){case"anglo-ru":return"background-anglo-ru";case"anglo-med":return"background-anglo-med";case"anglo-esef":return"background-anglo-esef";case"anglo-capao":return"background-anglo-capao";case"capao-anglo":return"background-capao-anglo";default:return"background-white"}}(e.linha))},t.a.createElement("div",{className:"horario-grande__header"},t.a.createElement("span",{className:"horario-grande__header--linha"},d(e.linha)),t.a.createElement("span",{className:"horario-grande__header--observacao"},e.observacao)),t.a.createElement("div",{className:"horario-grande__horario-container"},t.a.createElement("span",{className:"horario-grande__horario-container--horario"},e.horario)))}r(31);function w(e){return t.a.createElement("div",{className:"proximos-horarios"},e.horarios.map(function(e,a){return e.proximoHorario?t.a.createElement(x,{key:a,linha:e.linha,observacao:e.observacao,horario:e.proximoHorario}):t.a.createElement("div",null)}))}var k="https://raw.githubusercontent.com/gustavofsantos/horarios-onibus-institucional-ufpel/master/horarios.json";function N(){return _.apply(this,arguments)}function _(){return(_=Object(f.a)(p.a.mark(function e(){var a,r,n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("horarios-onibus-ufpel")){e.next=19;break}return e.prev=2,e.next=5,fetch(k);case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,localStorage.setItem("horarios-onibus-ufpel",JSON.stringify(n)),e.abrupt("return",n);case 13:throw e.prev=13,e.t0=e.catch(2),console.error(e.t0),e.t0;case 17:e.next=20;break;case 19:return e.abrupt("return",JSON.parse(a));case 20:case"end":return e.stop()}},e,this,[[2,13]])}))).apply(this,arguments)}r(33),r(35);var j=function(e){return t.a.createElement("div",{className:"carregando"},t.a.createElement("span",{className:"carregando__texto"},e.mensagem?e.mensagem:"Carregando..."))},y=r(10);var O=function(e){function a(){var e,r;Object(i.a)(this,a);for(var n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(t)))).state={linha:"anglo-ru",horarios:[],proximosHorarios:[],todosHorarios:{}},r.linhas=["anglo-ru","anglo-med","anglo-esef","anglo-capao","capao-anglo"],r.onLinhaChange=function(){var e=Object(f.a)(p.a.mark(function e(a){var n,t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:n=e.sent,t=n[a],r.setState({linha:a,horarios:t,todosHorarios:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),r.computProximosHorarios=function(){var e=r.state.todosHorarios,a=Object.keys(e).map(function(a){var r=function(e){for(var a=new Date,r=a.getHours(),n=a.getMinutes(),t=0;t<e.length;t++){var o=e[t].horario.split(":"),c=Object(y.a)(o,2),i=c[0],s=c[1],l=parseInt(i),u=parseInt(s);if(l===r&&u>=n)return e[t];if(l>r)return e[t]}return null}(e[a]);return"object"===typeof r?{linha:a,proximoHorario:r?r.horario:"",observacao:r&&r.ceu?"CEU":""}:null}).filter(function(e){return!!e.proximoHorario});r.setState({proximosHorarios:a})},r}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=Object(f.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onLinhaChange(this.state.linha);case 2:this.computProximosHorarios();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return t.a.createElement("div",null,this.state.horarios.length?t.a.createElement("div",{className:"main-container"},t.a.createElement(g,{linha:this.state.linha,linhas:this.linhas,onLinhaChange:this.onLinhaChange}),this.state.proximosHorarios.length>0?t.a.createElement("div",null,t.a.createElement(E,null,"Pr\xf3ximos hor\xe1rios"),t.a.createElement(w,{horarios:this.state.proximosHorarios})):t.a.createElement("div",null),t.a.createElement(E,null,"Todos hor\xe1rios"),t.a.createElement(b,{horarios:this.state.horarios})):t.a.createElement(j,null))}}]),a}(t.a.Component),H=(r(37),function(e){function a(){return Object(i.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement(O,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(t.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.4ac148a5.chunk.js.map