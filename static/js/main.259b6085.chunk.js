(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{58:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s.n(n),r=s(29),i=s.n(r),c=s(9),o=s(2),l=s(17),u=s.n(l),j=s(30),m=s(11),d=s(12),h=s(14),b=s(13),p=s(31),v=s.n(p),O=s(5),x=s.n(O),f=(s(58),s(1));function y(e){var t=e.id,s=e.year,n=e.title,a=e.summary,r=e.poster,i=e.genres;return Object(f.jsx)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:n,summary:a,poster:r,genres:i}},children:Object(f.jsxs)("div",{className:"movie",children:[Object(f.jsx)("img",{src:r,alt:n,title:n}),Object(f.jsxs)("div",{className:"move_data",children:[Object(f.jsx)("h3",{className:"movie__title",children:n}),Object(f.jsx)("h5",{className:"movie__year",children:s}),Object(f.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(f.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(f.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})})}y.prototypes={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};var g=y,_=(s(63),function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(j.a)(u.a.mark((function t(){var s,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(f.jsx)("section",{className:"container",children:t?Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(f.jsx)("div",{className:"movies",children:s.map((function(e){return Object(f.jsx)(g,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component));s(64);var N=function(e){return console.log(e),Object(f.jsxs)("div",{className:"about__container",children:[Object(f.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(f.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},w=(s(65),function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props,t=e.location,s=e.history;return t.state?Object(f.jsxs)("span",{children:[Object(f.jsx)("h2",{class:"movie__title",children:t.state.title}),Object(f.jsx)("p",{children:s.location.state.summary})]}):null}}]),s}(a.a.Component));s(66);var k=function(){return Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsx)(c.b,{to:"/",children:"Home"}),Object(f.jsx)(c.b,{to:"/about",children:"About"})]})};s(67);var q=function(){return Object(f.jsxs)(c.a,{children:[Object(f.jsx)(k,{}),Object(f.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(f.jsx)(o.a,{path:"/about",component:N}),Object(f.jsx)(o.a,{path:"/movie/:id",component:w})]})};i.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.259b6085.chunk.js.map