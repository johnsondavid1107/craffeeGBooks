(this.webpackJsonpg_books=this.webpackJsonpg_books||[]).push([[0],{35:function(e,t,s){},36:function(e,t,s){},61:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(24),a=s.n(n),r=(s(35),s.p,s(36),s.p+"static/media/developers.877f8504.png"),o=s(10),l=s(0);var d=function(){return Object(l.jsx)("nav",{className:"navbar is-spaced is-light",role:"navigation","aria-label":"main navigation",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)("a",{className:"navbar-start",href:"#",children:Object(l.jsx)("img",{src:r,alt:"Bulma: Free, open source, and modern CSS framework based on Flexbox",width:"112",height:"28"})}),Object(l.jsx)(o.b,{to:"/search",className:"navbar-item",children:Object(l.jsx)("button",{className:"button is-outlined is-warning",children:"Search Books"})}),Object(l.jsx)(o.b,{to:"/saved",className:"navbar-item",children:Object(l.jsx)("button",{className:"button is-outlined is-warning",children:"Saved Books"})})]})})},u=s(2),j=s(26),m=s(27),b=s(30),h=s(29),p=s(28),x=s.n(p),v=function(){return x.a.get("/searchBooks")},O=function(e){Object(b.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(j.a)(this,s);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={searchField:""},e.handleSearch=function(){v().then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(s,[{key:"render",value:function(){var e={inputField:{margin:"20px"},spaceResultsCard:{marginBottom:"50px"},spaceButton:{marginBottom:"20px"}};return Object(l.jsx)("div",{className:"card",style:e.spaceResultsCard,children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("p",{className:"title is-5 is-flex",children:"Book Search"}),Object(l.jsx)("input",{className:"input is-danger",type:"text",placeholder:"Search for your books here!",style:e.inputField}),Object(l.jsx)("button",{className:"button is-pulled-right is-success is-outlined ",style:e.spaceButton,onClick:this.handleSearch,children:"Search!"})]})})})}}]),s}(c.a.Component);var g=function(){var e={buttonMargin:{margin:"5px"}};return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsx)("div",{className:"column",children:"First column"}),Object(l.jsxs)("div",{className:"column is-flex is-justify-content-flex-end",children:[Object(l.jsx)("button",{className:"button  is-small is-primary is-outlined",style:e.buttonMargin,children:"View"}),Object(l.jsx)("button",{className:"button  is-small is-link is-outlined",style:e.buttonMargin,children:"Save"})]})]}),Object(l.jsx)("div",{className:"columns",children:Object(l.jsx)("div",{className:"column",children:"Title Two"})}),Object(l.jsx)("div",{className:"columns",children:Object(l.jsx)("div",{className:"column",children:"Author"})}),Object(l.jsxs)("div",{className:"columns",children:[Object(l.jsx)("div",{className:"column is-one-third",children:"Image"}),Object(l.jsx)("div",{className:"column ",children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero accusantium, inventore ea, error odio architecto eveniet perferendis molestiae necessitatibus sunt quod optio eius alias deserunt adipisci. Dolor ad cupiditate amet quas est commodi? In modi atque nam dolor officia nobis ipsa, ipsum, dolores accusamus commodi exercitationem sapiente voluptas aut reprehenderit harum tempore reiciendis aliquid sunt iusto libero officiis. Architecto molestiae id sed molestias, porro perspiciatis beatae velit, pariatur repudiandae in enim. Fuga dignissimos, voluptatum ipsum praesentium, voluptates natus repellendus soluta quis aut, voluptatibus cupiditate sunt sit? Voluptatem ab fugiat odio sequi nisi, optio porro sed cumque saepe corrupti, vel possimus."})]})]})};var f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card",style:{marginBottom:"30px"},children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsxs)("div",{className:"content",children:[Object(l.jsx)("p",{className:"title is-3 is-flex",children:"Results"}),Object(l.jsx)(g,{})]})})})})};var N=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{}),Object(l.jsx)(f,{})]})};s(61);var y=function(){var e={topCard:{marginTop:"30px",marginBottom:"100px"},contentMargin:{marginTop:"20px",marginBottom:"20px"}};return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card",style:e.topCard,children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",style:e.contentMargin,children:Object(l.jsx)("p",{className:"title is-1 is-flex is-justify-content-center",children:"Google Book Search!"})})})})})};var B=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"card",style:{marginBottom:"30px"},children:Object(l.jsx)("div",{className:"card-content",children:Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("p",{className:"title is-3 is-flex",children:"Saved Books"})})})})})};var k=function(){return Object(l.jsxs)(o.a,{children:[Object(l.jsx)(d,{}),Object(l.jsx)(y,{}),Object(l.jsxs)("div",{children:[Object(l.jsx)(u.a,{exact:!0,path:"/search",component:N}),Object(l.jsx)(u.a,{exact:!0,path:"/saved",component:B})]})]})},S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),i(e),c(e),n(e),a(e)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),S()}},[[62,1,2]]]);
//# sourceMappingURL=main.a42dc8a0.chunk.js.map