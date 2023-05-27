(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5936)}])},5936:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(5893),s=n(7294);let i=(0,s.forwardRef)((e,t)=>{let{children:n}=e;return(0,r.jsx)("div",{ref:t,className:"relative h-screen w-screen snap-start p-10",children:n})});var l=n(9008),a=n.n(l),c=n(944);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return e>=t?0:Math.random()*(t-e)+e}class h{update(e){this.fill=e(o(-40,50))}draw(){this.ctx.fillStyle=this.fill,this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.size,0,2*Math.PI),this.ctx.stroke(),this.ctx.fill()}constructor(e){this.canvas=e,this.ctx=e.getContext("2d");let t=o(0,1)>.993,n=!t&&o(0,1)>.25;t?this.size=o(1,2):n?this.size=o(.4,.5):this.size=o(.5,1),this.x=o(0,e.width),this.y=o(0,e.height),this.fill="#000"}}class d{startAnimation(){}animate(){requestAnimationFrame(()=>this.animate());let e=Date.now(),t=e-this.then;t>this.fpsInterval&&(this.then=e-t%this.fpsInterval,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.objects.forEach(e=>{e.update(this.colors),e.draw()}))}addStars(e){if(e)for(let t=0;t<e;t++)this.addObject(new h(this.canvas));else{let e=this.canvas.width*this.canvas.height,t=e/250;for(let e=0;e<t;e++)this.addObject(new h(this.canvas))}}resetStars(){}addObject(e){this.objects.push(e)}constructor(e){this.canvas=e,this.ctx=e.getContext("2d",{alpha:!1}),this.objects=[],this.colors=(0,c.Z)([-100,0,100],["#ba1e68","#fffc","#0c164f"]),this.stop=!1,this.frameCount=0,this.fps=12,this.fpsInterval=1e3/this.fps,this.then=Date.now()}}function u(e){let{scrollContainerRef:t}=e,n=function(){let e=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=e.current;if(!t)return;t.width=window.innerWidth,t.height=window.innerHeight;let n=t.getContext("2d");if(!n)return;let r=new d(t);r.addStars(),r.animate()},[]),e}();return(0,s.useEffect)(()=>{var e;let r=e=>{n.current&&(n.current.style.transform="translateY(-".concat(function(e,t){if(!e.current||!t.current)return 0;let n=e.current.scrollTop/e.current.clientHeight*12;return n}(t,n),"px)"))};return null===(e=t.current)||void 0===e||e.addEventListener("scroll",r),()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.removeEventListener("scroll",r)}},[]),(0,r.jsx)("div",{children:(0,r.jsx)("canvas",{ref:n,className:"bg-red-slate/20 relative h-[105vh] w-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-950/25 via-slate-950 to-[#1d113522] transition-transform duration-100 ease-in-out"})})}function x(e){let{children:t}=e,n=(0,s.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"arel.dev | Software Developer"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{className:"overflow-hidden",children:[(0,r.jsx)("div",{className:"fixed inset-0",children:(0,r.jsx)(u,{scrollContainerRef:n})}),(0,r.jsx)("div",{className:"relative z-10 h-screen w-screen snap-y snap-mandatory overflow-scroll",ref:n,children:t})]})]})}var f=n(6010);function m(e){let{children:t,bottom:n,onClick:s}=e;return(0,r.jsx)("div",{className:(0,f.Z)("absolute inset-x-0 flex justify-center",{"bottom-8":n,"top-8":!n}),children:(0,r.jsx)("button",{onClick:s,className:"text-sm uppercase tracking-wider opacity-60",children:t})})}function j(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,f.Z)("rounded-xl bg-black bg-opacity-30 p-10",n),children:t})}function v(e){let{children:t}=e;return(0,r.jsx)("h2",{className:"absolute mt-6 text-7xl font-bold opacity-20 md:mt-0 md:text-8xl",children:t})}function p(e){let{children:t}=e;return(0,r.jsx)("span",{style:{textShadow:"1px 1px #fdba74"},children:t})}function w(e){let{children:t,className:n}=e;return(0,r.jsx)("div",{className:(0,f.Z)("flex h-full items-center justify-center text-justify",n),children:t})}function b(e){let{children:t}=e;return(0,r.jsx)("p",{className:"md:text-lg",children:t})}let g=new Date("2021-03-01");function y(e){let{onClickNavItem:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{onClick:()=>t("home"),children:"Home"}),(0,r.jsx)(v,{children:"About"}),(0,r.jsx)(w,{children:(0,r.jsx)(j,{children:(0,r.jsxs)("div",{className:"max-w-xl space-y-6",children:[(0,r.jsxs)(b,{children:["Hey! I'm a ",(0,r.jsx)(p,{children:"Software Developer"})," currently based in Istanbul, Turkey. I've been a professional software developer for about"," ",(0,r.jsx)(p,{children:function(e,t){let n=(t.getFullYear()-e.getFullYear())*12;n-=e.getMonth(),n+=t.getMonth();let r=Math.floor(n/12);return n=n%12+1,"".concat(r,"+ years")}(g,new Date)}),", developing"," ",(0,r.jsx)(p,{children:"web apps"})," using modern technologies like ",(0,r.jsx)(p,{children:"TypeScript"}),","," ",(0,r.jsx)(p,{children:"React"}),", and ",(0,r.jsx)(p,{children:"Redux"}),"."]}),(0,r.jsxs)(b,{children:["My experience goes beyond the ",(0,r.jsx)(p,{children:"Frontend"}),", as I have also worked with technologies such as ",(0,r.jsx)(p,{children:"Node.js"}),", ",(0,r.jsx)(p,{children:"Express"}),", and some ",(0,r.jsx)(p,{children:"AWS"})," services. I am eager to stay up-to-date with the latest industry standards, and learning new skills and techniques."]})]})})}),(0,r.jsx)(m,{onClick:()=>t("contact"),bottom:!0,children:"Contact"})]})}function k(e){let{children:t,...n}=e;return(0,r.jsx)("a",{className:"text-orange-300",style:{textShadow:"1px 1px #0ea5e9"},...n,children:t})}function N(e){let{onClickNavItem:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v,{children:"Contact"}),(0,r.jsx)(m,{onClick:()=>t("about"),children:"About"}),(0,r.jsx)(w,{children:(0,r.jsx)(j,{className:"max-w-xl",children:(0,r.jsxs)(b,{children:["If you have any questions or want to get to know more about me, you can contact me through"," ",(0,r.jsx)(k,{href:"mailto:arelalkmy@gmail.com",children:"email"}),", or"," ",(0,r.jsx)(k,{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/arelalkim/",children:"LinkedIn"}),". You can also view my projects and contributions on"," ",(0,r.jsx)(k,{target:"_blank",rel:"noreferrer",href:"https://github.com/Arelera",children:"GitHub"}),"."]})})})]})}function _(e){let{onClickNavItem:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-center",children:(0,r.jsxs)(j,{children:[(0,r.jsxs)("h1",{className:"mb-4 text-8xl",children:["arel",(0,r.jsx)("a",{href:"https://github.com/Arelera",className:"text-blue-500",target:"_blank",rel:"noreferrer",children:".dev"})]}),(0,r.jsx)("h2",{className:"text-xl",children:"Software Developer"})]})}),(0,r.jsx)(m,{onClick:()=>t("about"),bottom:!0,children:"About"})]})}function C(e){let{}=e,t=(0,s.useRef)(null),n=(0,s.useRef)(null),l=(0,s.useRef)(null),a=e=>{var r,s,i;"home"===e?null===(r=t.current)||void 0===r||r.scrollIntoView({behavior:"smooth"}):"about"===e?null===(s=n.current)||void 0===s||s.scrollIntoView({behavior:"smooth"}):"contact"===e&&(null===(i=l.current)||void 0===i||i.scrollIntoView({behavior:"smooth"}))};return(0,r.jsxs)(x,{children:[(0,r.jsx)(i,{ref:t,children:(0,r.jsx)(_,{onClickNavItem:a})}),(0,r.jsx)(i,{ref:n,children:(0,r.jsx)(y,{onClickNavItem:a})}),(0,r.jsx)(i,{ref:l,children:(0,r.jsx)(N,{onClickNavItem:a})})]})}}},function(e){e.O(0,[78,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);