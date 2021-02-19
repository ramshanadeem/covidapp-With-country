(this["webpackJsonpcovid-app"]=this["webpackJsonpcovid-app"]||[]).push([[0],{209:function(e,t,a){},210:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=(a(90),a(4)),u=a.n(s),i=a(9),l=a(73),d=a(74),p=a(82),m=a(81),f=(a(92),a(35)),v=a.n(f),h=a(231),b=a(237),g=a(211),E=a(233),w=a(234),y=a(235),x=(a(97),Object(h.a)((function(e){return Object(b.a)({root:{float:"left",flexWrap:"wrap","& > *":{margin:e.spacing(2),width:e.spacing(48),height:e.spacing(16)}}})})));function C(e){var t=e.data,a=x(),n=t.confirmed,c=t.deaths,o=t.recovered,s=t.lastUpdate;return console.log(n),n?r.a.createElement("div",{className:"".concat(a.root," card-main")},r.a.createElement(g.a,{variant:"square",elevation:4,component:"div"},r.a.createElement(E.a,{className:"card-root1"},r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"new",color:"textSecondary",gutterBottom:!0},"New Confirmed Cases"),r.a.createElement(y.a,{className:"pos",variant:"h5",component:"h2"},r.a.createElement(v.a,{start:0,end:n.value,duration:2.75,separator:","})),r.a.createElement(y.a,{variant:"body2",component:"p"},"Dated: ",new Date(s).toDateString())))),r.a.createElement(g.a,{variant:"square",elevation:5,component:"div"},r.a.createElement(E.a,{className:"card-root2"},r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"death",color:"textSecondary",gutterBottom:!0},"New Confirmed Deaths"),r.a.createElement(y.a,{className:"pos",variant:"h5",component:"h2"},r.a.createElement(v.a,{start:0,end:c.value,duration:2.75,separator:","})),r.a.createElement(y.a,{variant:"body2",component:"p"},"Dated: ",new Date(s).toDateString())))),r.a.createElement(g.a,{variant:"square",elevation:5,component:"div"},r.a.createElement(E.a,{className:"card-root3"},r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"rec",color:"textSecondary",gutterBottom:!0},"New Confirmed Recovered"),r.a.createElement(y.a,{className:"pos",variant:"h5",component:"h2"},r.a.createElement(v.a,{start:0,end:o.value,duration:2.75,separator:","}),"        "),r.a.createElement(y.a,{variant:"body2",component:"p"},"Dated: ",new Date(s).toDateString()))))):"data is loading..."}var j=a(33),k=a(31),O=a(17),N=a.n(O),D="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})),console.log(n),e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(D,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=D,t&&(a="".concat(D,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),q=a(80),I=a.n(q),U=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)([]),d=Object(j.a)(l,2),p=d[0],m=d[1];Object(n.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:t=e.sent,m(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var f=a?r.a.createElement(k.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgb(228, 228, 77) ","#f700ff","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null,v=p[0]?r.a.createElement(k.b,{data:{labels:p.map((function(e){return e.date})),datasets:[{data:p.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb(228, 228, 77) ",fill:!0},{data:p.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:I.a.container},s?f:v)},W=a(238),A=a(236),J=(a(209),function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{style:{color:"white"}},r.a.createElement(W.a,{className:"formControl"},r.a.createElement(A.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))}),M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,console.log(t),this.setState({data:t});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{style:{backgroundColor:"#9dfffc",color:"white"},className:"App"},r.a.createElement("img",{style:{width:"100%",height:"400px"},src:"https://image.freepik.com/free-vector/covid-19-coronavirus-outbreak-design-with-virus-blood-cell-microscopic-view-shiny-red-background-2019-ncov-corona-virus-illustration-dangerous-sars-epidemic-theme-banner_1314-2654.jpg"}),r.a.createElement(J,{handleCountryChange:this.handleCountryChange}),r.a.createElement(C,{data:t}),r.a.createElement(U,{data:t,country:a}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports={container:"Chart_container__34xv_"}},85:function(e,t,a){e.exports=a(210)},90:function(e,t,a){},92:function(e,t,a){},97:function(e,t,a){}},[[85,1,2]]]);
//# sourceMappingURL=main.def0aeb7.chunk.js.map