import{c as l,u as k,r as a,j as e,L as S}from"./index-Cl2Lap3H.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=l("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=l("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=l("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=l("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=l("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=l("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=l("Timer",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);function C(){const x=k(),[h,u]=a.useState(40),[n,y]=a.useState(""),[i,p]=a.useState(!1),[d,j]=a.useState(0),[f,w]=a.useState(100),m=a.useMemo(()=>["يا ريس، الصفحة دي فص ملح ودابت!","شكلك دخلت حارة سد في السيستم..","404.. حتى الهاكرز مش عارفين هي فين!","السيستم بيطردك.. هترجع الرئيسية حالا!","يا برنس، السيرفر بيقولك مشفتهاش والله!"],[]);a.useEffect(()=>{const o=Date.now();let s=localStorage.getItem("404_redirect_timestamp");s||(s=(o+6e4).toString(),localStorage.setItem("404_redirect_timestamp",s));const r=()=>{const b=Math.max(0,Math.floor((parseInt(s)-Date.now())/1e3));u(b),b<=0&&(localStorage.removeItem("404_redirect_timestamp"),x("/"))};r();const c=setInterval(r,1e3);return()=>clearInterval(c)},[x]),a.useEffect(()=>{const o=setTimeout(()=>{const s=d%m.length,r=m[s];y(i?r.substring(0,n.length-1):r.substring(0,n.length+1)),w(i?40:100),!i&&n===r?setTimeout(()=>p(!0),1500):i&&n===""&&(p(!1),j(d+1))},f);return()=>clearTimeout(o)},[n,i,d,f,m]);const[v,N]=a.useState([]);a.useEffect(()=>{const t="ابتثجحخدذرزسشصضطظعغفقكلمنهوي٠١٢٣٤٥٦٧٨٩",o=window.innerWidth<640?35:85,s=Array.from({length:o},(r,c)=>({id:c,char:t[Math.floor(Math.random()*t.length)],left:Math.random()*100,animationDuration:5+Math.random()*10,animationDelay:Math.random()*5,fontSize:Math.floor(Math.random()*10)+12}));N(s)},[]);const g=()=>localStorage.removeItem("404_redirect_timestamp");return e.jsxs("div",{className:"min-h-screen bg-[#050505] text-emerald-500 relative overflow-hidden flex items-center justify-center py-10",dir:"rtl",children:[e.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none opacity-20",children:v.map(t=>e.jsx("div",{className:"absolute text-emerald-500/40 font-mono whitespace-nowrap leading-none",style:{left:`${t.left}%`,fontSize:`${t.fontSize}px`,animation:`matrix-fall ${t.animationDuration}s linear ${t.animationDelay}s infinite`,writingMode:"vertical-rl"},children:t.char},t.id))}),e.jsx("div",{className:"relative z-10 w-full px-4 max-w-2xl mx-auto",children:e.jsxs("div",{className:"bg-[#0a0a0a] border border-emerald-900/50 rounded-xl shadow-[0_0_50px_rgba(16,185,129,0.1)] overflow-hidden",children:[e.jsxs("div",{className:"bg-emerald-950/20 border-b border-emerald-900/30 px-4 py-3 flex items-center justify-between",children:[e.jsxs("div",{className:"flex gap-1.5",children:[e.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"}),e.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"})]}),e.jsxs("div",{className:"flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-500/60 font-mono font-bold",children:[e.jsx(I,{size:12}),"ALFURQAN_SECURE_KERNEL"]})]}),e.jsxs("div",{className:"p-6 sm:p-10 text-center",children:[e.jsx("h1",{className:"text-8xl sm:text-9xl font-black text-emerald-500 font-mono tracking-tighter custom-glitch mb-6","data-text":"404",children:"404"}),e.jsx("div",{className:"mb-8 min-h-[40px]",children:e.jsxs("span",{className:"text-xl sm:text-2xl font-bold text-white/90 font-mono",children:[n,e.jsx("span",{className:"inline-block w-2 h-6 bg-emerald-500 ml-1 animate-pulse align-middle"})]})}),e.jsxs("div",{className:"bg-black/40 rounded-lg p-5 mb-8 font-mono text-sm text-right space-y-3 border border-emerald-900/20",children:[e.jsxs("div",{className:"flex items-start gap-2 text-red-400",children:[e.jsx(E,{size:16,className:"shrink-0 mt-0.5"}),e.jsx("span",{children:"[ERROR] لم يتم العثور على المسار المطلوب."})]}),e.jsxs("div",{className:"flex items-start gap-2 text-emerald-500/80",children:[e.jsx(T,{size:16,className:"shrink-0 mt-0.5"}),e.jsx("span",{children:"$ الحالة: جاري البحث في الأرشيف.. ملقيناش حاجة."})]}),e.jsxs("div",{className:"flex items-start gap-2 text-blue-400/80",children:[e.jsx(M,{size:16,className:"shrink-0 mt-0.5"}),e.jsxs("span",{children:["$ المصدر: ",window.location.host]})]}),e.jsx("div",{className:"pr-6 text-yellow-500 font-bold border-r-2 border-yellow-500/50 animate-pulse",children:"$ نصيحة: متلفش ورايا كتير، ارجع للرئيسية أحسن."})]}),e.jsxs("div",{className:"bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 mb-8",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-emerald-400 mb-2",children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx(L,{size:14,className:"animate-spin-slow"}),"تصفية الجلسة إجبارياً"]}),e.jsxs("span",{className:"font-bold",children:[h,"s"]})]}),e.jsx("div",{className:"w-full h-1 bg-emerald-900/30 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-1000 ease-linear shadow-[0_0_10px_#10b981]",style:{width:`${h/40*100}%`}})})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[e.jsxs(S,{to:"/",onClick:g,className:"flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-black px-8 py-3 rounded-lg font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]",children:[e.jsx(z,{size:18}),"إهرب بسرعة"]}),e.jsxs("button",{onClick:()=>{g(),window.history.back()},className:"flex items-center justify-center gap-2 border border-emerald-800 hover:bg-emerald-900/20 text-emerald-500 px-8 py-3 rounded-lg font-bold transition-all",children:[e.jsx(_,{size:18}),"العودة للخلف"]})]})]}),e.jsx("div",{className:"bg-emerald-950/10 px-6 py-2 border-t border-emerald-900/20 text-center text-[9px] font-mono text-emerald-500/30 tracking-[0.2em] uppercase",children:"Session Lockdown Active // IP_LOGGED: TRUE"})]})}),e.jsx("style",{children:`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-spin-slow { animation: spin 3s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .custom-glitch {
          position: relative;
          text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 255, 0, 0.75);
          animation: glitch 500ms infinite;
        }
        @keyframes glitch {
          0%, 14% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.05em -0.025em 0 rgba(0, 255, 0, 0.75); }
          15%, 49% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75); }
          50%, 99% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75); }
          100% { text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75); }
        }
      `})]})}export{C as default};
