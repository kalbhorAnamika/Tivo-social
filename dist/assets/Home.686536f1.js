import{j as e,a as r,r as a,A as u,b as v,s as g,d as h}from"./index.cb691754.js";import{B as f,t as i,R as s,A as d,o as l,a as c,S as x,U as y,c as b,b as w,h as A,W as M}from"./URLs.e1d684e8.js";import{F as N}from"./Footer.e912f8a2.js";import"./useUpdateLikedMovies.9a0bfa6d.js";import"./index.47922fc0.js";import"./MoviePopUp.526f20e6.js";/* empty css                       */const W="/assets/disney.c4059d54.png",S="/assets/marvel.e9c1323d.png",H="/assets/nationalG.7a8236a9.png",V="/assets/pixar.c423f7c1.png",F="/assets/starwar.1eab3a7b.png",U="/assets/star-wars.6bfec285.mp4",j="/assets/disney.dc7d5ffd.mp4",C="/assets/marvel.2bc69f97.mp4",G="/assets/national-geographic.50e971d7.mp4",P="/assets/pixar.faceac07.mp4";function z(){return e("div",{className:"flex gap-2 md:gap-5 p-2 px-5 md:px-16 ",children:[{id:1,image:W,video:j},{id:2,image:V,video:P},{id:3,image:S,video:C},{id:4,image:F,video:U},{id:5,image:H,video:G}].map(t=>r("div",{className:"border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl  shadow-gray-800 ",children:[e("video",{src:t.video,autoPlay:!0,loop:!0,playsInline:!0,muted:!0,className:"absolute z-0  top-0 rounded-md  opacity-0 hover:opacity-50"}),e("img",{src:t.image,className:"w-full z-[1] opacity-100"})]}))})}function O(){const{User:o}=a.exports.useContext(u),[t,p]=a.exports.useState([]);return a.exports.useEffect(()=>{v(g(h,"WatchedMovies",o.uid)).then(n=>{if(n.exists()){const m=n.data();p(m.movies)}})},[]),r("div",{children:[e(f,{url:i}),e("div",{className:"div pb-20 pt-10",children:e(z,{})}),r("div",{className:"w-[99%] ml-1 pt-20",children:[e(s,{first:!0,title:"Trending",url:i},i),e(s,{title:"Animated",url:d},d),t.length!=0?e(s,{title:"Watched Movies",movieData:t},"Watched Movies"):null,e(s,{title:"Netflix Originals",islarge:!0,url:l},l),e(s,{title:"Trending Series",url:c},c),e(s,{title:"Science Fiction",url:x}),e(s,{title:"Upcoming Movies",url:y}),e(s,{title:"Comedy",url:b}),e(s,{title:"Adventure",url:w}),e(s,{title:"Horror",url:A}),e(s,{title:"War",url:M})]}),e(N,{})]})}export{O as default};
