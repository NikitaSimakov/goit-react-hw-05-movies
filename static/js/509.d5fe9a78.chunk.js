"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[509],{974:function(e,t,s){s.d(t,{H:function(){return a}});var i=s(861),n=s(757),r=s.n(n),a=function(){var e=(0,i.Z)(r().mark((function e(t){var s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.themoviedb.org/3/".concat(t,"api_key=").concat("fac36845d9f7873a94c26906e62793ef"));case 3:return s=e.sent,e.next=6,s.json();case 6:return i=e.sent,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},509:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var i=s(439),n=s(791),r=s(974),a=s(204),c="MovieDetails_movieDetails_wrapper__JFBJB",o="MovieDetails_movieDetails_card__3Ykbw",l="MovieDetails_movieDetails_genres__6TiTZ",u="MovieDetails_movieDetails_backButton__yYsim",v="MovieDetails_movieDetails_img__0kdfr",d="MovieDetails_movieDetails_cardText__FQbNc",h=s(184),_=s(87),m=_.useParams,p=_.Link,f=_.Outlet,x=_.useLocation,j=function(){var e,t,s=(0,n.useState)({}),_=(0,i.Z)(s,2),j=_[0],g=_[1],w=m(),b=x(),k=(0,n.useRef)(b);(0,n.useEffect)((function(){var e=w.movieId,t="movie/".concat(e,"?");(0,r.H)(t).then((function(e){return g(e)}))}),[w]);var D="/movies".concat(null!==(e=null===(t=k.current.state)||void 0===t?void 0:t.from.search)&&void 0!==e?e:"");return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("p",{className:l,children:j.genres&&j.genres.map((function(e){return e.name+" "}))}),(0,h.jsx)(p,{to:k.current.state?D:"/",children:(0,h.jsx)("button",{type:"button",className:u,children:"Go back"})}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("img",{className:v,alt:j.title,src:j.poster_path&&"https://image.tmdb.org/t/p/w300".concat(j.poster_path)}),(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("h1",{children:j.original_title}),(0,h.jsxs)("p",{children:["User score: ",Math.trunc(10*j.vote_average),"%"]}),(0,h.jsx)("h2",{children:"Overview"}),(0,h.jsx)("p",{children:j.overview})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(p,{to:"/movies/".concat(w.movieId,"/cast"),children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(p,{to:"/movies/".concat(w.movieId,"/reviews"),children:"Reviews"})})]})]}),(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(a.Z,{}),children:(0,h.jsx)(f,{})})]})}}}]);
//# sourceMappingURL=509.d5fe9a78.chunk.js.map