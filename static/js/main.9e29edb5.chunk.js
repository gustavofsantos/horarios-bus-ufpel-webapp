(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,a,n){e.exports=n(39)},,,,,,function(e,a,n){},,,,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var r=n(0),t=n.n(r),o=n(9),i=n.n(o),c=(n(17),n(3)),s=n(4),l=n(6),u=n(5),h=n(7),m=n(1),p=n.n(m),f=n(2);function d(e){switch(e){case"anglo-ru":return"Anglo - RU";case"anglo-med":return"Anglo - Medicina";case"anglo-esef":return"Anglo - ESEF";case"anglo-capao":return"Anglo - Cap\xe3o";case"capao-anglo":return"Cap\xe3o - Anglo";default:return""}}n(21);function g(e){return t.a.createElement("div",{className:"header"},t.a.createElement("select",{className:"header__select",onChange:function(a){return e.onLinhaChange(a.target.value)}},e.linhas.map(function(e,a){return t.a.createElement("option",{className:"header__select--option",key:a,value:e},d(e))})))}n(23);var v=function(e){return t.a.createElement("div",{className:"horario-card",id:e.horario},t.a.createElement("span",{className:"horario-card__horario"},e.horario),t.a.createElement("span",{className:"horario-card__obs"},e.observacao))},b=(n(25),function(e){return t.a.createElement("div",{className:"container"},e.horarios.map(function(e,a){return t.a.createElement(v,{horario:e.horario,observacao:e.ceu?"CEU":"",key:a})}))});n(27);function w(e){return t.a.createElement("div",{className:"section"},t.a.createElement("p",{className:"section__text"},e.text||e.children),t.a.createElement("br",null))}n(29);function E(e){return t.a.createElement("div",{className:"horario-grande ".concat(function(e){switch(e){case"anglo-ru":return"background-anglo-ru";case"anglo-med":return"background-anglo-med";case"anglo-esef":return"background-anglo-esef";case"anglo-capao":return"background-anglo-capao";case"capao-anglo":return"background-capao-anglo";default:return"background-white"}}(e.linha))},t.a.createElement("div",{className:"horario-grande__header"},t.a.createElement("span",{className:"horario-grande__header--linha"},d(e.linha)),t.a.createElement("span",{className:"horario-grande__header--observacao"},e.observacao)),t.a.createElement("div",{className:"horario-grande__horario-container"},t.a.createElement("span",{className:"horario-grande__horario-container--horario"},e.horario)))}n(31);function k(e){return t.a.createElement("div",{className:"proximos-horarios"},e.horarios.map(function(e,a){return e.proximoHorario?t.a.createElement(E,{key:a,linha:e.linha,observacao:e.observacao,horario:e.proximoHorario}):t.a.createElement("div",null)}))}var x="https://raw.githubusercontent.com/gustavofsantos/horarios-onibus-institucional-ufpel/master/horarios.json";function N(){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(p.a.mark(function e(){var a,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=localStorage.getItem("horarios-onibus-ufpel")){e.next=19;break}return e.prev=2,e.next=5,fetch(x);case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,localStorage.setItem("horarios-onibus-ufpel",JSON.stringify(r)),e.abrupt("return",r);case 13:throw e.prev=13,e.t0=e.catch(2),console.error(e.t0),e.t0;case 17:e.next=20;break;case 19:return e.abrupt("return",JSON.parse(a));case 20:case"end":return e.stop()}},e,this,[[2,13]])}))).apply(this,arguments)}n(33),n(35);var _=function(e){return t.a.createElement("div",{className:"carregando"},t.a.createElement("span",{className:"carregando__texto"},e.mensagem?e.mensagem:"Carregando..."))},j=n(10);var O=function(e){function a(){var e,n;Object(c.a)(this,a);for(var r=arguments.length,t=new Array(r),o=0;o<r;o++)t[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(t)))).state={linha:"anglo-ru",horarios:[],proximosHorarios:[],todosHorarios:{}},n.linhas=["anglo-ru","anglo-med","anglo-esef","anglo-capao","capao-anglo"],n.onLinhaChange=function(){var e=Object(f.a)(p.a.mark(function e(a){var r,t;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:r=e.sent,t=r[a],n.setState({linha:a,horarios:t,todosHorarios:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(a){return e.apply(this,arguments)}}(),n.computProximosHorarios=function(){var e=n.state.todosHorarios,a=Object.keys(e).map(function(a){var n=function(e){for(var a=new Date,n=a.getHours(),r=a.getMinutes(),t=0;t<e.length;t++){var o=e[t].horario.split(":"),i=Object(j.a)(o,2),c=i[0],s=i[1],l=parseInt(c),u=parseInt(s);if(l===n&&u>=r)return e[t];if(l>n)return e[t]}return null}(e[a]);return"object"===typeof n?{linha:a,proximoHorario:n?n.horario:"",observacao:n&&n.ceu?"CEU":""}:null}).filter(function(e){return!!e.proximoHorario});n.setState({proximosHorarios:a})},n}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=Object(f.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.onLinhaChange(this.state.linha);case 2:this.computProximosHorarios();case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return t.a.createElement("div",null,this.state.horarios.length?t.a.createElement("div",{className:"main-container"},t.a.createElement(g,{linha:this.state.linha,linhas:this.linhas,onLinhaChange:this.onLinhaChange}),this.state.proximosHorarios.length>0?t.a.createElement("div",null,t.a.createElement(w,null,"Pr\xf3ximos hor\xe1rios"),t.a.createElement(k,{horarios:this.state.proximosHorarios})):t.a.createElement("div",null),t.a.createElement(w,null,"Todos hor\xe1rios"),t.a.createElement(b,{horarios:this.state.horarios})):t.a.createElement(_,null))}}]),a}(t.a.Component),C=(n(37),function(e){function a(){return Object(c.a)(this,a),Object(l.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return t.a.createElement("div",{className:"App"},t.a.createElement(O,null))}}]),a}(r.Component)),H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(t.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/horarios-bus-ufpel-webapp",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/horarios-bus-ufpel-webapp","/service-worker.js");H?(function(e,a){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):A(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):A(a,e)})}}()}],[[11,2,1]]]);
//# sourceMappingURL=main.9e29edb5.chunk.js.map