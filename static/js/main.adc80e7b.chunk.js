(this.webpackJsonpsmellingbee=this.webpackJsonpsmellingbee||[]).push([[0],{13:function(e,t,a){e.exports=a(23)},18:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(18),a(3)),l=a.n(s),u=a(6),i=a(1),m=(a(20),a(11)),g=a(10),f=["January","February","March","April","May","June","July","August","September","October","November","December"],d=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f[t.getMonth()],n=t.getDate(),c=t.getFullYear(),"https://cors-anywhere.herokuapp.com/",e.next=6,fetch("".concat("https://cors-anywhere.herokuapp.com/","https://spellingbeeanswers.com/spelling-bee-").concat(a,"-").concat(n,"-").concat(c,"-answers"),{mode:"cors"}).then((function(e){return e.text()})).then((function(e){for(var t=(new DOMParser).parseFromString(e,"text/html").getElementsByClassName("aanswer"),a=[],n=0;n<t.length;n++){var c,r=null===(c=t.item(n))||void 0===c?void 0:c.innerHTML.substring(6);null!=r&&a.push(r)}return a}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t,a=[],n=Object(g.a)(e.join(""));try{for(n.s();!(t=n.n()).done;){var c=t.value;a.includes(c)||a.push(c)}}catch(r){n.e(r)}finally{n.f()}return a},v=function(e,t){var a=e.map((function(e){return t.filter((function(t){return t.includes(e)})).length}));return e[a.indexOf(Math.max.apply(Math,Object(m.a)(a)))]},p=(a(8),function(e){var t=new Date(e.currentDate.getTime()-864e5),a=new Date(e.currentDate.getTime()+864e5),r=new Date(Date.now()),o=Object(n.useMemo)((function(){for(var e=[],t=r,a=1;t>=new Date("January 10, 2019");)e.push(t),t=new Date(r.getTime()-864e5*a),a++;return e}),[r]),s=c.a.createElement("div",{className:"current-date"},c.a.createElement("select",{id:"date-selector",onChange:function(t){e.setCurrentDate(new Date(t.target.value))},value:"".concat(f[e.currentDate.getMonth()]," ").concat(e.currentDate.getDate(),", ").concat(e.currentDate.getFullYear())},o.map((function(e,t){return c.a.createElement("option",{key:t,value:"".concat(f[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},"".concat(f[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear()))}))));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"dates-container-large"},c.a.createElement("div",{className:"previous-date",onClick:function(){return e.setCurrentDate(t)}},"< ".concat(f[t.getMonth()]," ").concat(t.getDate(),", ").concat(t.getFullYear())),s,c.a.createElement("div",{className:"next-date",onClick:function(){return e.setCurrentDate(a)}},"".concat(f[a.getMonth()]," ").concat(a.getDate(),", ").concat(a.getFullYear()," >"))),c.a.createElement("div",{className:"dates-container-small"},c.a.createElement("div",{className:"previous-date",onClick:function(){return e.setCurrentDate(t)}},"<  ".concat(f[t.getMonth()]," ").concat(t.getDate())),s,c.a.createElement("div",{className:"next-date",onClick:function(){return e.setCurrentDate(a)}},"".concat(f[a.getMonth()]," ").concat(a.getDate(),"  >"))))}),b=a(12),w=a(8),D=new b.a,E=D.get("current_date"),N=new Date;E&&(N=new Date(E));var y=function(e,t){D.set(e,t,{path:"/",expires:new Date("January 1 2050")})},O=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(["loading..."]),s=Object(i.a)(o,2),m=s[0],g=s[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),E=b[0],O=b[1],k=Object(n.useState)(""),j=Object(i.a)(k,2),C=j[0],M=j[1],x=Object(n.useState)(N),S=Object(i.a)(x,2),_=S[0],A=S[1],F=Object(n.useState)([]),J=Object(i.a)(F,2),T=J[0],Y=J[1],B=Object(n.useState)([]),H=Object(i.a)(B,2),z=H[0],L=H[1],P=function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y([]),L([]),g(["loading..."]),r([]),O(""),e.next=7,d(_);case 7:t=e.sent,a=h(t),r(t),O(v(a,t)),0===a.length&&(a=["Error"]),g(a),(n=D.get(_.toDateString()))&&Y(n);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(e){M(e),w.delay((function(){M("")}),500)},W=m.filter((function(e){return e!==E}));return Object(n.useEffect)((function(){P(),y("current_date",JSON.stringify(_))}),[_]),c.a.createElement("div",{className:"App"},c.a.createElement(p,{currentDate:_,setCurrentDate:A}),c.a.createElement("div",{className:"game-content-container"},c.a.createElement("div",{className:"letters"},W.slice(0,3),c.a.createElement("span",{className:"core-letter"},E),W.slice(3),c.a.createElement("svg",{className:"refresh-icon",onClick:function(){m[0].length>1?P():g(w.shuffle(m))},"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"sync",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c.a.createElement("path",{fill:"currentColor",d:"M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"}))),c.a.createElement("input",{className:"guess-input",onKeyPress:function(e){var t=e.currentTarget.value.toLowerCase();13===(e.which||e.keyCode)&&(e.currentTarget.value="",t.length<=3?V("Too short"):a.includes(t)?T.includes(t)?V("Already found"):(V("Nice!"),T.push(t),Y(T),y(_.toDateString(),JSON.stringify(T))):V("Nope"))}}),c.a.createElement("div",{className:"bottom-panel"},c.a.createElement("div",{className:"found"},T.map((function(e,t){return c.a.createElement("div",{className:"found-item",key:t},"".concat(t+1,". ").concat(e))})),z.map((function(e,t){return c.a.createElement("div",{className:"missed-item",key:t},"".concat(t+T.length+1,". ").concat(e))}))),c.a.createElement("div",{className:"bottom-right-panel"},c.a.createElement("div",{className:"done-container",onClick:function(){z.length?L([]):L(a.filter((function(e){return!T.includes(e)})))}},z.length?"Hide Answers":"Show Answers"),c.a.createElement("div",{className:"num-remaining-container"},"".concat(T.length,"/").concat(a.length," found"))))),c.a.createElement("div",{className:"guess-feedback__outer-container"},c.a.createElement("div",{className:"guess_feedback ".concat(C.length?"guess_feedback__active":""," ").concat("Nice!"===C?"guess_feedback__correct":"")},C)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.adc80e7b.chunk.js.map