(this.webpackJsonpsmellingbee=this.webpackJsonpsmellingbee||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),s=(a(15),a(3)),l=a.n(s),i=a(5),u=a(1),m=(a(17),a(9)),d=a(8),f=["January","February","March","April","May","June","July","August","September","October","November","December"],h=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f[t.getMonth()],n=t.getDate(),c=t.getFullYear(),"https://cors-anywhere.herokuapp.com/",e.next=6,fetch("".concat("https://cors-anywhere.herokuapp.com/","https://spellingbeeanswers.com/spelling-bee-").concat(a,"-").concat(n,"-").concat(c,"-answers"),{mode:"cors"}).then((function(e){return e.text()})).then((function(e){for(var t=(new DOMParser).parseFromString(e,"text/html").getElementsByClassName("aanswer"),a=[],n=0;n<t.length;n++){var c,r=null===(c=t.item(n))||void 0===c?void 0:c.innerHTML.substring(6);null!=r&&a.push(r)}return a}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t,a=[],n=Object(d.a)(e.join(""));try{for(n.s();!(t=n.n()).done;){var c=t.value;a.includes(c)||a.push(c)}}catch(r){n.e(r)}finally{n.f()}return a},v=function(e,t){var a=e.map((function(e){return t.filter((function(t){return t.includes(e)})).length}));return e[a.indexOf(Math.max.apply(Math,Object(m.a)(a)))]},p=a(18),b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),m=s[0],d=s[1],b=Object(n.useState)(""),w=Object(u.a)(b,2),E=w[0],N=w[1],k=Object(n.useState)(""),y=Object(u.a)(k,2),O=y[0],j=y[1],M=Object(n.useState)([]),x=Object(u.a)(M,2),D=x[0],C=x[1],S=Object(n.useState)([]),A=Object(u.a)(S,2),_=A[0],F=A[1],T=Object(n.useState)(new Date(Date.now())),J=Object(u.a)(T,2),B=J[0],Y=J[1],H=function(){var e=Object(i.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C([]),F([]),e.next=4,h(B);case 4:t=e.sent,a=g(t),r(t),d(a),N(v(a,t));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){j(e),p.delay((function(){j("")}),500)},L=m.filter((function(e){return e!==E}));Object(n.useEffect)((function(){H()}),[B]);var P=new Date(B.getTime()-864e5),V=new Date(B.getTime()+864e5);return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"dates-container-large"},c.a.createElement("div",{className:"previous-date",onClick:function(){return Y(P)}},"< ".concat(f[P.getMonth()]," ").concat(P.getDate(),", ").concat(P.getFullYear())),c.a.createElement("div",{className:"current-date"},"".concat(f[B.getMonth()]," ").concat(B.getDate(),", ").concat(B.getFullYear())),c.a.createElement("div",{className:"next-date",onClick:function(){return Y(V)}},"".concat(f[V.getMonth()]," ").concat(V.getDate(),", ").concat(V.getFullYear()," >"))),c.a.createElement("div",{className:"dates-container-small"},c.a.createElement("div",{className:"previous-date",onClick:function(){return Y(P)}},"<  ".concat(f[P.getMonth()]," ").concat(P.getDate())),c.a.createElement("div",{className:"current-date"},"".concat(f[B.getMonth()]," ").concat(B.getDate())),c.a.createElement("div",{className:"next-date",onClick:function(){return Y(V)}},"".concat(f[V.getMonth()]," ").concat(V.getDate(),"  >"))),c.a.createElement("div",{className:"game-content-container"},c.a.createElement("div",{className:"letters"},L.slice(0,3),c.a.createElement("span",{className:"core-letter"},E),L.slice(3),c.a.createElement("svg",{className:"refresh-icon",onClick:function(){d(p.shuffle(m))},"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sync",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"}))),c.a.createElement("input",{className:"guess-input",onKeyPress:function(e){var t=e.currentTarget.value.toLowerCase();13===(e.which||e.keyCode)&&(e.currentTarget.value="",t.length<=3?z("Too short"):a.includes(t)?D.includes(t)?z("Already found"):(z("Nice!"),D.push(t),C(D)):Math.random()<.1?z("Fuck you"):z("Nope"))}}),c.a.createElement("div",{className:"bottom-panel"},c.a.createElement("div",{className:"found"},D.map((function(e,t){return c.a.createElement("div",{className:"found-item",key:t},"".concat(t+1,". ").concat(e))})),_.map((function(e,t){return c.a.createElement("div",{className:"missed-item",key:t},"".concat(t+D.length+1,". ").concat(e))}))),c.a.createElement("div",{className:"bottom-right-panel"},c.a.createElement("div",{className:"done-container",onClick:function(){F(a.filter((function(e){return!D.includes(e)})))}},"Show Answers"),c.a.createElement("div",{className:"num-remaining-container"},"".concat(D.length,"/").concat(a.length," found"))))),c.a.createElement("div",{className:"guess-feedback__outer-container"},c.a.createElement("div",{className:"guess_feedback ".concat(O.length?"guess_feedback__active":""," ").concat("Nice!"===O?"guess_feedback__correct":"")},O)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.c408567d.chunk.js.map