(this["webpackJsonpmovie-explorer"]=this["webpackJsonpmovie-explorer"]||[]).push([[0],{33:function(e,t,n){e.exports=n.p+"static/media/unavailable-image.2347b06b.jpg"},36:function(e,t,n){e.exports=n(64)},41:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(41),n(3)),s=n(4),u=n(6),l=n(5),p=n(8),h=n(26),d=n(18),m=n(28),f=n.n(m),E=n(15),b=n(7),v=n(29),O=n.n(v),j=n(11),y=n.n(j),g=n(23),k="http://www.omdbapi.com/?apikey=".concat("d8e2dd93","&");function M(){return(M=Object(g.a)(y.a.mark((function e(t){var n,a,r,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="&s=".concat(t),a=k+n,e.next=4,fetch(a).catch((function(e){throw e}));case 4:return r=e.sent,e.next=7,r.json();case 7:if("False"!==(c=e.sent).Response){e.next=10;break}throw c.Error;case 10:return e.abrupt("return",c.Search);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(g.a)(y.a.mark((function e(t){var n,a,r,c,o,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[];case 1:if(!(n.length<t)){e.next=16;break}return a=C(1e6,3135392),r="&i=tt".concat(a),c=k+r,e.next=7,fetch(c).catch((function(e){throw e}));case 7:return o=e.sent,e.next=10,o.json();case 10:if("False"!==(i=e.sent).Response){e.next=13;break}return e.abrupt("continue",1);case 13:n.push(i),e.next=1;break;case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}n(60);var x=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={title:""},a.onChange=a.onChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"onChange",value:function(e){this.setState(Object(E.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.title;t&&this.props.fetchMovies(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"container-max-width"},r.a.createElement("div",{className:"container-search"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",name:"title",onChange:this.onChange,value:this.state.title,placeholder:"Type a movie to search..."}),r.a.createElement("button",{type:"search"},r.a.createElement(O.a,{color:"#fff",fontSize:"30px"}))))))}}]),n}(a.Component),I=Object(p.b)(null,{fetchMovies:function(e){return function(t){t({type:"USER_SEARCHED"}),t({type:"MOVIE_REQUESTED"}),function(e){return M.apply(this,arguments)}(e).then((function(e){return t({type:"MOVIE_RECEIVED",payload:e})})).catch((function(e){return t({type:"MOVIE_FAILED",payload:e})}))}}})(x),S=n(32),D=n.n(S),R=n(33),V=n.n(R),N=(n(61),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).onClick=a.onClick.bind(Object(b.a)(a)),a.onError=a.onError.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"onClick",value:function(e){e.preventDefault(),this.props.onClick(this.props.id)}},{key:"onError",value:function(e){e.target.onerror=null,e.target.src=V.a}},{key:"render",value:function(){return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"item"},r.a.createElement("img",{src:this.props.poster,onError:this.onError,alt:"poster"}),r.a.createElement(D.a,{className:"icon",onClick:this.onClick,color:"#ff443a",fontSize:"20px"}),r.a.createElement("div",{className:"container-placeholder"}),r.a.createElement("div",{className:"container-text"},r.a.createElement("h1",null,this.props.title),r.a.createElement("h2",null,this.props.year))))}}]),n}(a.Component)),L=(n(62),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).deleteMovie=a.deleteMovie.bind(Object(b.a)(a)),a}return Object(s.a)(n,[{key:"deleteMovie",value:function(e){this.props.deleteMovie(e)}},{key:"render",value:function(){var e=this,t=this.props.movies.map((function(t,n){return r.a.createElement(N,{key:n,id:n,poster:t.Poster,title:t.Title,year:t.Year,onClick:e.deleteMovie})}));return r.a.createElement("div",{className:"Results container-max-width"},r.a.createElement("div",{className:"grid-row"},t))}}]),n}(a.Component)),_=Object(p.b)((function(e){return{movies:e.data.movies}}),{deleteMovie:function(e){return function(t){t({type:"DELETE MOVIE",payload:e})}}})(L);function A(){var e=Object(h.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: white;\n  width: 100%;\n"]);return A=function(){return e},e}var T=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchRandomMovies(10)}},{key:"render",value:function(){var e=r.a.createElement("div",{className:"container-loader container-max-width"},r.a.createElement(f.a,{css:F,size:25,color:"#2f8be6",loading:this.props.isLoading}));return r.a.createElement("div",{className:"RootContainer"},r.a.createElement("header",null,r.a.createElement(I,null)),r.a.createElement("section",null,e,r.a.createElement(_,null)))}}]),n}(a.Component),F=Object(d.css)(A()),U=Object(p.b)((function(e){return{isLoading:e.data.isLoading}}),{fetchRandomMovies:function(e){return function(t){t({type:"MOVIE_REQUESTED"}),function(e){return w.apply(this,arguments)}(e).then((function(e){return t({type:"RANDOM_MOVIE_RECEIVED",payload:e})})).catch((function(e){return t({type:"MOVIE_FAILED",payload:e})}))}}})(T),z=n(9),Q=n(34),B=n(2),H={isLoading:!1,userSearched:!1,movies:[]},J=Object(z.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SEARCHED":return Object(B.a)(Object(B.a)({},e),{},{userSearched:!0});case"MOVIE_REQUESTED":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0});case"RANDOM_MOVIE_RECEIVED":return e.userSearched?Object(B.a)(Object(B.a)({},e),{},{isLoading:!1}):Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,movies:t.payload});case"MOVIE_RECEIVED":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,movies:t.payload});case"MOVIE_FAILED":return Object(B.a)(Object(B.a)({},e),{},{isLoading:!1,error:t.payload});case"DELETE MOVIE":return Object(B.a)(Object(B.a)({},e),{},{movies:e.movies.filter((function(e,n){return t.payload!==n}))});default:return e}}}),W=[Q.a],P=Object(z.e)(J,{},Object(z.d)(z.a.apply(void 0,W))),Y=(n(63),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(p.a,{store:P},r.a.createElement(U,null))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.0cb73b60.chunk.js.map