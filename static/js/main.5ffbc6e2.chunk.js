(this["webpackJsonpchild-gender"]=this["webpackJsonpchild-gender"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),l=a.n(o),i=(a(12),a(3)),h=a(4),c=a(6),s=a(5),u=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleFatherInputChange=function(e){n.setState({fatherBirthday:e.target.value})},n.handleMotherInputChange=function(e){n.setState({motherBirthday:e.target.value})},n.handleConceptionInputChange=function(e){n.setState({conceptionDate:e.target.value})},n.handleInputData=function(e){e.preventDefault(),console.log(n.state.fatherBirthday,n.state.motherBirthday,n.state.conceptionDate)},n.handleBloodChange=function(){var e=n.state.fatherBirthday.slice(0,4),t=n.state.conceptionDate.slice(0,4),a=n.state.motherBirthday.slice(0,4),r=n.state.fatherBirthday.slice(5,7),o=n.state.motherBirthday.slice(5,7),l=n.state.conceptionDate.slice(5,7);return(t-e+(l-r)/12)%4-(t-a+(l-o)/12)%3<0?"\u041c\u0430\u043b\u044c\u0447\u0438\u043a":"\u0414\u0435\u0432\u043e\u0447\u043a\u0430"},n.state={fatherBirthday:"",motherBirthday:"",conceptionDate:""},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"\u041f\u043e\u043b \u0440\u0435\u0431\u0435\u043d\u043a\u0430"),r.a.createElement("form",null,r.a.createElement("labeL",{for:"Bithday"},r.a.createElement("h3",null,"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f")),r.a.createElement("p",null,"\u041f\u0430\u043f\u0430:"," ",r.a.createElement("input",{type:"date",id:"fatherBirthday",name:"Birthday",value:this.state.fatherBirthday,onChange:this.handleFatherInputChange})),r.a.createElement("p",null,"\u041c\u0430\u043c\u0430:"," ",r.a.createElement("input",{type:"date",id:"motherBirthday",name:"Birthday",value:this.state.motherBirthday,onChange:this.handleMotherInputChange})),r.a.createElement("p",null,"\u0417\u0430\u0447\u0430\u0442\u0438\u0435:"," ",r.a.createElement("input",{type:"date",id:"conceptionDate",name:"Birthday",value:this.state.conceptionDate,onChange:this.handleConceptionInputChange})),r.a.createElement("button",{type:"submit",onClick:this.handleInputData},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),"\u0414\u0435\u0432\u043e\u0447\u043a\u0430"==this.handleBloodChange()?r.a.createElement("h1",{style:{color:"red"}},"\u0414\u0435\u0432\u043e\u0447\u043a\u0430"):r.a.createElement("h1",{style:{color:"blue"}},"\u041c\u0430\u043b\u044c\u0447\u0438\u043a"))}}]),a}(n.Component);var d=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.5ffbc6e2.chunk.js.map