(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(16),r=n.n(c),s=(n(45),n.p,n(46),n(18)),o=n(19),l=n(24),j=n(22),h=n(59),d=n(61),b=n(60),u=n(37),p=n(58),O=(n(47),n(33),n(38)),x=n(6),f=n(20),g=(n(48),n(5)),v=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={todaydate:null,copyright:null,hdimage:null,explanation:null,title:null},a.gotoApi=a.gotoApi.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://api.nasa.gov/planetary/apod?api_key=NELryzealMsDJXthW3MbZvVP8ILeevYPMk2u8PfX").then((function(t){return t.json()})).then((function(e){t.setState({todaydate:e.date,copyright:e.copyright,hdimage:e.hdurl,explanation:e.explanation,title:e.title})}))}},{key:"gotoApi",value:function(){alert("hello")}},{key:"render",value:function(){return Object(g.jsxs)("div",{class:"aboutToday",children:[Object(g.jsxs)("h3",{id:"date",children:[" About Today: ",this.state.todaydate]}),Object(g.jsx)("img",{src:this.state.hdimage,alt:""}),Object(g.jsxs)("p",{id:"title",children:['"',this.state.title,'"']}),Object(g.jsxs)("p",{id:"copyright",children:["Copyright by: ",this.state.copyright]}),Object(g.jsx)("p",{id:"exp",children:this.state.explanation}),Object(g.jsx)(p.a,{variant:"outline-info",id:"apibtn",href:"https://api.nasa.gov/planetary/apod?api_key=NELryzealMsDJXthW3MbZvVP8ILeevYPMk2u8PfX",target:"_blank",children:"View API JSON"})]})}}]),n}(i.a.Component),y=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Hello"})})},k=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsxs)(h.a,{id:"nav-bg",expand:"lg",variant:"dark",sticky:"top",children:[Object(g.jsx)(h.a.Brand,{href:"#home",id:"logo",children:"SpaceInfo.neWs"}),Object(g.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsxs)(h.a.Collapse,{id:"basic-navbar-nav",children:[Object(g.jsxs)(d.a,{className:"mr-auto",bg:"light",children:[Object(g.jsx)(d.a.Link,{href:"/",children:"Home"}),Object(g.jsx)(d.a.Link,{href:"/about",children:"About"})]}),Object(g.jsxs)(b.a,{inline:!0,id:"search",children:[Object(g.jsx)(u.a,{type:"text",placeholder:"Search"}),Object(g.jsx)(p.a,{variant:"outline-info",id:"searchbtn",children:"Search"})]})]})]})}),Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{children:Object(g.jsxs)(x.c,{children:[Object(g.jsx)(x.a,{exact:!0,path:"/",children:Object(g.jsx)(v,{})}),Object(g.jsx)(x.a,{exact:!0,path:"/about",children:Object(g.jsx)(y,{})})]})})})]})}}]),n}(i.a.Component);var m=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(k,{})})},P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(m,{})}),document.getElementById("root")),P()}},[[56,1,2]]]);
//# sourceMappingURL=main.ba60dcae.chunk.js.map