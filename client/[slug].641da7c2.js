import{S as t,i as s,s as a,l as e,e as n,t as o,p as r,E as l,d as c,m as i,c as d,a as p,b as f,q as u,f as m,g as h,h as g,r as x,j as $,u as v,v as w,w as j}from"./client.9d4cab0e.js";import{P as y}from"./_postInfo.e0fdd14d.js";function b(t){let s,a,b,E,H,I,q,D,L,M=t[0].data.title+"",T=t[0].content+"";document.title=s=t[0].data.title;const V=new y({props:{post:t[0]}});return{c(){a=e(),b=n("div"),E=n("h1"),H=o(M),I=e(),r(V.$$.fragment),q=e(),D=n("div"),this.h()},l(t){l('[data-svelte="svelte-1any9pj"]',document.head).forEach(c),a=i(t),b=d(t,"DIV",{class:!0});var s=p(b);E=d(s,"H1",{class:!0});var e=p(E);H=f(e,M),e.forEach(c),I=i(s),u(V.$$.fragment,s),q=i(s),D=d(s,"DIV",{class:!0}),p(D).forEach(c),s.forEach(c),this.h()},h(){m(E,"class","text-4xl font-thin"),m(D,"class","post-content svelte-z75mjw"),m(b,"class"," bg-gray-100 flex flex-col border-2 rounded-md shadow-lg px-8 py-8\n  sm:py-16 sm:px-16 text-lg leading-relaxed w-full break-words")},m(t,s){h(t,a,s),h(t,b,s),g(b,E),g(E,H),g(b,I),x(V,b,null),g(b,q),g(b,D),D.innerHTML=T,L=!0},p(t,[a]){(!L||1&a)&&s!==(s=t[0].data.title)&&(document.title=s),(!L||1&a)&&M!==(M=t[0].data.title+"")&&$(H,M);const e={};1&a&&(e.post=t[0]),V.$set(e),(!L||1&a)&&T!==(T=t[0].content+"")&&(D.innerHTML=T)},i(t){L||(v(V.$$.fragment,t),L=!0)},o(t){w(V.$$.fragment,t),L=!1},d(t){t&&c(a),t&&c(b),j(V)}}}async function E({params:t,query:s}){const a=await this.fetch(`${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function H(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,H,b,a,{post:0})}}export{E as preload};
