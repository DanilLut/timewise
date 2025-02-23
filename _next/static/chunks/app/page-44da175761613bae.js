(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7240:function(e,t,r){Promise.resolve().then(r.bind(r,6689))},6689:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ei}});var a=r(288),s=r(5192),l=r(9773),n=r(7009);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m6)((0,l.W)(t))}let i=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:o("rounded-lg border bg-card text-card-foreground shadow-sm",r),...s})});i.displayName="Card",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:o("flex flex-col space-y-1.5 p-6",r),...s})}).displayName="CardHeader",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:o("text-2xl font-semibold leading-none tracking-tight",r),...s})}).displayName="CardTitle",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:o("text-sm text-muted-foreground",r),...s})}).displayName="CardDescription";let d=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:o("p-6 pt-0",r),...s})});d.displayName="CardContent",s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)("div",{ref:t,className:o("flex items-center p-6 pt-0",r),...s})}).displayName="CardFooter";var c=r(1232),u=r(7940);let m=(0,u.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),f=s.forwardRef((e,t)=>{let{className:r,variant:s,size:l,asChild:n=!1,...i}=e,d=n?c.g7:"button";return(0,a.jsx)(d,{className:o(m({variant:s,size:l,className:r})),ref:t,...i})});f.displayName="Button";let x=s.forwardRef((e,t)=>{let{className:r,type:s,...l}=e;return(0,a.jsx)("input",{type:s,className:o("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),ref:t,...l})});x.displayName="Input";var p=r(5649);let g=(0,u.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),h=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(p.f,{ref:t,className:o(g(),r),...s})});h.displayName=p.f.displayName;let b=(e,t,r)=>{let[a,l]=(0,s.useState)(e.workDuration),[n,o]=(0,s.useState)(!1),[i,d]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1),[m,f]=(0,s.useState)(1),[x,p]=(0,s.useState)(0),[g,h]=(0,s.useState)(!1),[b,y]=(0,s.useState)(!0),[v,N]=(0,s.useState)(null),[k,j]=(0,s.useState)(null),w=(0,s.useRef)(!1),C=(0,s.useCallback)((e,t)=>{B.current||(B.current=new(window.AudioContext||window.webkitAudioContext));let r=B.current.createOscillator();r.type="sine",r.frequency.setValueAtTime(e,B.current.currentTime),r.connect(B.current.destination),r.start(),r.stop(B.current.currentTime+t)},[]),S=(0,s.useRef)(null),B=(0,s.useRef)(null),D=(0,s.useCallback)(()=>{n?(o(!1),l(e.workDuration),m%e.sessionsBeforeLongBreak==0&&p(e=>e+1),f(e=>e+1),C(440,.5)):(o(!0),m%e.sessionsBeforeLongBreak==0?(d(!0),l(e.longBreakDuration)):(d(!1),l(e.shortBreakDuration)),C(523.25,.5));let t=Date.now();N(t),j(t)},[e,m,n,C]),T=(0,s.useCallback)(()=>{h(!1),N(null),j(null)},[]),E=(0,s.useCallback)(()=>{if(g){if(e.totalCycles>0&&x>=e.totalCycles){h(!1),z();return}let r=Date.now();!n||n&&t?(l(e=>{let t=Math.max(0,e-1);return 0===t&&(n?(T(),u(!0)):D()),t}),N(r),j(r)):N(r)}},[g,n,t,e.totalCycles,x,D,T]),R=(0,s.useCallback)(()=>{let e=Date.now();h(!0),N(e),j(e)},[]),z=(0,s.useCallback)(()=>{T(),l(e.workDuration),o(!1),d(!1),f(1),p(0)},[e.workDuration,T]);return(0,s.useEffect)(()=>{let e=()=>{let e=!document.hidden;if(y(e),e&&g&&v){let e=Date.now();if(!n||n&&t&&k){let t=Math.floor((e-k)/1e3);t>0&&(l(e=>{let r=Math.max(0,e-t);return 0===r&&D(),r}),j(e))}N(e)}};return document.addEventListener("visibilitychange",e),()=>{document.removeEventListener("visibilitychange",e)}},[g,v,k,n,t,D]),(0,s.useEffect)(()=>{if(!w.current){let e=localStorage.getItem("breakTimerState");if(e){let t=JSON.parse(e);if(l(t.timeLeft),o(t.isBreak),d(t.isLongBreak),f(t.currentSession),p(t.completedCycles),h(t.isRunning),t.isRunning){let e=Date.now(),r=t.lastTimestamp||e;if(!t.isBreak||t.isBreak&&t.enforceBreak){let a=Math.floor((e-(t.lastActiveTimestamp||r))/1e3);a>0&&l(Math.max(0,t.timeLeft-a)),j(e)}N(e)}else N(t.lastTimestamp),j(t.lastActiveTimestamp)}w.current=!0}"Notification"in window&&Notification.requestPermission()},[]),(0,s.useEffect)(()=>{w.current&&localStorage.setItem("breakTimerState",JSON.stringify({timeLeft:a,isBreak:n,isLongBreak:i,currentSession:m,completedCycles:x,isRunning:g,lastTimestamp:v,lastActiveTimestamp:k,enforceBreak:t}))},[a,n,i,m,x,g,v,k,t]),(0,s.useEffect)(()=>(g?S.current=window.setInterval(E,1e3):S.current&&clearInterval(S.current),()=>{S.current&&clearInterval(S.current)}),[g,E]),(0,s.useEffect)(()=>{n&&r(!1)},[n,r]),{timeLeft:a,isBreak:n,isLongBreak:i,currentSession:m,completedCycles:x,isRunning:g,isBreakEnded:c,start:R,pause:T,reset:z,switchMode:D,resetBreakEnded:()=>u(!1)}};function y(e){let{onEnforce:t,onSkip:r}=e,[l,n]=(0,s.useState)(!1),o=(0,s.useCallback)(e=>{let r=document.getElementById("enforce-box");if(r){let a=r.getBoundingClientRect(),s=e.clientX>=a.left&&e.clientX<=a.right&&e.clientY>=a.top&&e.clientY<=a.bottom;n(s),t(s)}},[t]),i=(0,s.useCallback)(()=>{n(!1),t(!1)},[t]);return(0,s.useEffect)(()=>(window.addEventListener("mousemove",o),window.addEventListener("mouseleave",i),()=>{window.removeEventListener("mousemove",o),window.removeEventListener("mouseleave",i)}),[o,i]),(0,a.jsxs)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{id:"enforce-box",className:"w-64 h-64 flex items-center justify-center text-white text-center p-4 rounded-lg ".concat(l?"bg-green-500":"bg-red-500"),children:l?"Keep your mouse here during the break":"Move your mouse back inside to continue the break"}),(0,a.jsx)(f,{onClick:r,className:"mt-4",children:"Skip Break"})]})}var v=r(7723),N=r(1207);let k=v.fC,j=v.xz,w=v.h_;v.x8;let C=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(v.aV,{ref:t,className:o("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",r),...s})});C.displayName=v.aV.displayName;let S=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,a.jsxs)(w,{children:[(0,a.jsx)(C,{}),(0,a.jsxs)(v.VY,{ref:t,className:o("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",r),...l,children:[s,(0,a.jsxs)(v.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(N.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});S.displayName=v.VY.displayName;let B=e=>{let{className:t,...r}=e;return(0,a.jsx)("div",{className:o("flex flex-col space-y-1.5 text-center sm:text-left",t),...r})};B.displayName="DialogHeader";let D=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(v.Dx,{ref:t,className:o("text-lg font-semibold leading-none tracking-tight",r),...s})});D.displayName=v.Dx.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(v.dk,{ref:t,className:o("text-sm text-muted-foreground",r),...s})}).displayName=v.dk.displayName;let T=(0,s.createContext)({theme:"system",setTheme:()=>null});function E(e){let{children:t,defaultTheme:r="system",storageKey:l="ui-theme",...n}=e,[o,i]=(0,s.useState)(r);return(0,s.useEffect)(()=>{let e=localStorage.getItem(l);i(null!=e?e:r)},[]),(0,s.useEffect)(()=>{if(!o)return;let e=window.document.documentElement;if(e.classList.remove("light","dark"),"system"===o){let t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";e.classList.add(t)}else e.classList.add(o);localStorage.setItem(l,o)},[o]),(0,a.jsx)(T.Provider,{...n,value:{theme:o,setTheme:i},children:t})}var R=r(2019),z=r(6650),L=r(9048),I=r(4506),_=r(7962),Z=r(8211);let O=L.fC,A=L.xz;L.ZA,L.Uv,L.Tr,L.Ee,s.forwardRef((e,t)=>{let{className:r,inset:s,children:l,...n}=e;return(0,a.jsxs)(L.fF,{ref:t,className:o("flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",s&&"pl-8",r),...n,children:[l,(0,a.jsx)(I.Z,{className:"ml-auto"})]})}).displayName=L.fF.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(L.tu,{ref:t,className:o("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...s})}).displayName=L.tu.displayName;let P=s.forwardRef((e,t)=>{let{className:r,sideOffset:s=4,...l}=e;return(0,a.jsx)(L.Uv,{children:(0,a.jsx)(L.VY,{ref:t,sideOffset:s,className:o("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",r),...l})})});P.displayName=L.VY.displayName;let M=s.forwardRef((e,t)=>{let{className:r,inset:s,...l}=e;return(0,a.jsx)(L.ck,{ref:t,className:o("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",s&&"pl-8",r),...l})});M.displayName=L.ck.displayName,s.forwardRef((e,t)=>{let{className:r,children:s,checked:l,...n}=e;return(0,a.jsxs)(L.oC,{ref:t,className:o("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),checked:l,...n,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(L.wU,{children:(0,a.jsx)(_.Z,{className:"h-4 w-4"})})}),s]})}).displayName=L.oC.displayName,s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,a.jsxs)(L.Rk,{ref:t,className:o("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",r),...l,children:[(0,a.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,a.jsx)(L.wU,{children:(0,a.jsx)(Z.Z,{className:"h-2 w-2 fill-current"})})}),s]})}).displayName=L.Rk.displayName,s.forwardRef((e,t)=>{let{className:r,inset:s,...l}=e;return(0,a.jsx)(L.__,{ref:t,className:o("px-2 py-1.5 text-sm font-semibold",s&&"pl-8",r),...l})}).displayName=L.__.displayName,s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(L.Z0,{ref:t,className:o("-mx-1 my-1 h-px bg-muted",r),...s})}).displayName=L.Z0.displayName;let W=()=>{let e=(0,s.useContext)(T);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e},V={light:"Светлая тема",dark:"Темная тема",system:"Авто"};function F(){let{setTheme:e,theme:t}=W();return(0,a.jsxs)(O,{children:[(0,a.jsx)(A,{asChild:!0,children:(0,a.jsxs)(f,{variant:"outline",className:"flex items-center gap-2",children:[(0,a.jsxs)("div",{className:"relative flex items-center justify-center w-5 h-5",children:[(0,a.jsx)(R.Z,{className:"absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,a.jsx)(z.Z,{className:"absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"})]}),(0,a.jsx)("span",{children:V[t]})]})}),(0,a.jsx)(P,{align:"end",children:Object.entries(V).map(t=>{let[r,s]=t;return(0,a.jsx)(M,{onClick:()=>{e(r)},children:s},r)})})]})}var J=r(1290);let Y=J.fC,H=J.wy,K=J.Fw;var U=r(957);let q=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e;return(0,a.jsxs)(U.fC,{ref:t,className:o("relative overflow-hidden",r),...l,children:[(0,a.jsx)(U.l_,{className:"h-full w-full rounded-[inherit]",children:s}),(0,a.jsx)(X,{}),(0,a.jsx)(U.Ns,{})]})});q.displayName=U.fC.displayName;let X=s.forwardRef((e,t)=>{let{className:r,orientation:s="vertical",...l}=e;return(0,a.jsx)(U.gb,{ref:t,orientation:s,className:o("flex touch-none select-none transition-colors","vertical"===s&&"h-full w-2.5 border-l border-l-transparent p-[1px]","horizontal"===s&&"h-2.5 flex-col border-t border-t-transparent p-[1px]",r),...l,children:(0,a.jsx)(U.q4,{className:"relative flex-1 rounded-full bg-border"})})});X.displayName=U.gb.displayName;var $=r(2608),G=r(4773),Q=r(9590),ee=r(2203),et=r(4647);let er=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(et.fC,{ref:t,className:o("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r),...s,children:(0,a.jsx)(et.z$,{className:o("flex items-center justify-center text-current"),children:(0,a.jsx)(_.Z,{className:"h-4 w-4"})})})});er.displayName=et.fC.displayName;var ea=r(2799);let es=(0,u.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function el(e){let{className:t,variant:r,...s}=e;return(0,a.jsx)("div",{className:o(es({variant:r}),t),...s})}let en=e=>{if(0===e)return"0s";let t=Math.floor(e/3600),r=Math.floor(e%3600/60),a=e%60,s=[];return t>0&&s.push("".concat(t,"h")),r>0&&s.push("".concat(r,"m")),a>0&&s.push("".concat(a,"s")),s.length>0?s.join(" "):"0s"},eo=(e,t)=>{try{let r=e.replace(/\s+/g,"").toLowerCase();if(!r)return t;if(r.startsWith("+")||r.startsWith("-")){let e=eo(r.slice(1),0);return t+(r.startsWith("-")?-e:e)}return r.split(/(?=[+-])/g).reduce((e,t)=>{let r=t.startsWith("-")?-1:1,a=t.replace(/^[+-]/,""),s=Array.from(a.matchAll(/(\d+)(h|m|s)?/g));if(0===s.length)throw Error("Invalid format");let l=s.reduce((e,t)=>{let r=parseInt(t[1],10);switch((t[2]||"s").toLowerCase()){case"h":return e+3600*r;case"m":return e+60*r;case"s":return e+r;default:throw Error("Invalid unit")}},0);return e+l*r},0)}catch(e){return NaN}};function ei(){let[e,t]=(0,s.useState)(!1),[r,l]=(0,s.useState)(!1),[n,o]=(0,s.useState)(""),[c,u]=(0,s.useState)([]),[m,p]=(0,s.useState)(null);(0,s.useEffect)(()=>{l(!0),o(localStorage.getItem("breakTimerTask")||"");let e=localStorage.getItem("breakTimerTasks");u(e?JSON.parse(e):[]),p(localStorage.getItem("selectedTaskId")||null)},[]),(0,s.useEffect)(()=>{r&&localStorage.setItem("selectedTaskId",m||"")},[m,r]),(0,s.useEffect)(()=>{r&&localStorage.setItem("breakTimerTask",n)},[n,r]),(0,s.useEffect)(()=>{r&&localStorage.setItem("breakTimerTasks",JSON.stringify(c))},[c,r]);let g=()=>{n.trim()&&(u(e=>[...e,{id:Date.now().toString(),text:n.trim(),createdAt:Date.now(),completed:!1,priority:void 0}]),o(""))},v=(e,t)=>{u(r=>r.map(r=>r.id===e?{...r,priority:t}:r))},w={high:1,medium:2,low:3,none:4},C={high:{label:"High",class:"bg-red-200 dark:bg-red-400/30 dark:text-red-200 dark:border-red-400/40 text-red-800 hover:bg-red-200 border-red-300/60"},medium:{label:"Medium",class:"bg-yellow-200 dark:bg-yellow-400/30 dark:text-yellow-200 dark:border-yellow-400/40 text-yellow-800 hover:bg-yellow-200 border-yellow-300/60"},low:{label:"Low",class:"bg-blue-200 dark:bg-blue-400/30 dark:text-blue-200 dark:border-blue-400/40 text-blue-800 hover:bg-blue-200 border-blue-300/60"},none:{label:"None",class:"bg-gray-200 dark:bg-gray-400/30 dark:text-gray-200 dark:border-gray-400/40 text-gray-800 hover:bg-gray-200 border-gray-300/60"}},T=e=>{let{priority:t}=e,r=t||"none";return(0,a.jsx)(el,{variant:"outline",className:"rounded-sm px-2 py-1 text-xs font-medium transition-colors ".concat(C[r].class," ").concat(t?"":"opacity-70"),children:C[r].label})},R=(e,t)=>{o(r=>m===t?"":e),p(e=>e===t?null:t)},z=e=>{u(t=>t.map(t=>t.id===e?{...t,completed:!t.completed}:t))},[L,I]=(0,s.useState)(!1),_=e=>{u(t=>t.filter(t=>t.id!==e)),m===e&&p(null)},[Z,W]=(0,s.useState)(()=>{let e=localStorage.getItem("breakTimerConfig");if(e)return JSON.parse(e);{let e={workDuration:1440,shortBreakDuration:300,longBreakDuration:900,sessionsBeforeLongBreak:4,totalCycles:0};return localStorage.setItem("breakTimerConfig",JSON.stringify(e)),e}}),[V,J]=(0,s.useState)(()=>{let e=localStorage.getItem("breakTimerConfig");if(!e)return{workDuration:"24m",shortBreakDuration:"5m",longBreakDuration:"15m"};{let t=JSON.parse(e);return{workDuration:en(t.workDuration),shortBreakDuration:en(t.shortBreakDuration),longBreakDuration:en(t.longBreakDuration)}}});(0,s.useEffect)(()=>{localStorage.setItem("breakTimerConfig",JSON.stringify(Z))},[Z]);let U=e=>t=>{if("Enter"===t.key){let r=eo(V[e],Z[e]);!isNaN(r)&&r>=0?(W(t=>({...t,[e]:r})),J(t=>({...t,[e]:en(r)}))):J(t=>({...t,[e]:en(Z[e])})),t.currentTarget.blur()}},X=e=>t=>{J(r=>({...r,[e]:t.target.value}))},et=e=>{let{name:t,value:r}=e.target,a=Number.parseInt(r);!isNaN(a)&&a>=0&&W(e=>({...e,[t]:a}))},[es,ei]=(0,s.useState)(!0),{timeLeft:ed,isBreak:ec,isLongBreak:eu,currentSession:em,completedCycles:ef,isRunning:ex,isBreakEnded:ep,start:eg,pause:eh,reset:eb,switchMode:ey,resetBreakEnded:ev}=b(Z,es,ei);(0,s.useEffect)(()=>{let e=ec?eu?" - Long Break":" - Short Break":n?" - ".concat(n):" - Work Session";document.title=ex?"".concat(eN(ed)).concat(e):"TimeWise"},[ed,ec,eu,em]);let eN=e=>{let t=Math.floor(e/3600),r=[];return t>0&&r.push(t.toString().padStart(2,"0")),r.push(Math.floor(e%3600/60).toString().padStart(2,"0")),r.push((e%60).toString().padStart(2,"0")),r.join(":")};return r?(0,a.jsx)(E,{defaultTheme:"system",storageKey:"ui-theme",children:(0,a.jsxs)("div",{className:"container mx-auto p-4 sm:px-8 px-4",children:[(0,a.jsxs)("div",{className:"flex gap-4 mt-8 mb-6 flex-col sm:gap-2 sm:flex-row items-center",children:[(0,a.jsxs)("h1",{className:"text-3xl font-bold sm:mr-auto flex items-center gap-2",children:[(0,a.jsx)(ea.E_i,{size:36})," TimeWise"]}),(0,a.jsxs)("div",{className:"flex gap-2",children:[(0,a.jsx)(F,{}),(0,a.jsxs)(k,{open:e,onOpenChange:t,children:[(0,a.jsx)(j,{asChild:!0,children:(0,a.jsx)(f,{variant:"outline",size:"icon",children:(0,a.jsx)(ea.PhS,{})})}),(0,a.jsxs)(S,{className:"max-w-md",children:[(0,a.jsx)(B,{children:(0,a.jsx)(D,{children:"Configuration"})}),(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[[{id:"workDuration",label:"Work Duration",field:"workDuration"},{id:"shortBreakDuration",label:"Short Break",field:"shortBreakDuration"},{id:"longBreakDuration",label:"Long Break",field:"longBreakDuration"}].map(e=>{let{id:t,label:r,field:s}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(h,{htmlFor:t,children:r}),(0,a.jsx)(x,{id:t,value:V[s],onChange:X(s),onKeyDown:U(s),onBlur:()=>{let e=eo(V[s],Z[s]);!isNaN(e)&&e>=0?(W(t=>({...t,[s]:e})),J(t=>({...t,[s]:en(e)}))):J(e=>({...e,[s]:en(Z[s])}))},placeholder:"e.g., 1m 30s, 150+5s"}),(0,a.jsxs)("div",{className:"text-sm text-muted-foreground mt-1",children:[Z[s]," ","seconds"]})]},t)}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h,{htmlFor:"sessionsBeforeLongBreak",children:"Sessions before Long Break"}),(0,a.jsx)(x,{id:"sessionsBeforeLongBreak",name:"sessionsBeforeLongBreak",type:"number",min:"1",value:Z.sessionsBeforeLongBreak,onChange:et})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(h,{htmlFor:"totalCycles",children:"Total Cycles (0 for infinite)"}),(0,a.jsx)(x,{id:"totalCycles",name:"totalCycles",type:"number",min:"0",value:Z.totalCycles,onChange:et})]})]})]})]})]})]}),(0,a.jsxs)("div",{className:"mb-3 space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1 my-2",children:[(0,a.jsxs)(h,{className:"flex gap-1 items-center",children:[(0,a.jsx)(ea.dpT,{size:18}),"Session Task"]}),(0,a.jsx)("span",{className:"text-sm text-primary/60",children:"•"}),(0,a.jsx)("span",{className:"text-sm text-primary/60",children:"Press Enter to save"})]}),(0,a.jsxs)("div",{className:"flex gap-2 relative",children:[(0,a.jsx)(x,{value:n,onChange:e=>{let t=e.target.value;o(t),m&&u(e=>e.map(e=>e.id===m?{...e,text:t}:e))},placeholder:"✨ What's your focus for this session?",className:"flex-1 pl-4 pr-20 py-5",onKeyDown:e=>"Enter"===e.key&&g()}),(0,a.jsxs)("div",{className:"absolute right-2 top-1/2 -translate-y-1/2 flex gap-2",children:[(0,a.jsx)(f,{variant:"ghost",onClick:()=>{o(""),p(null)},className:"h-7 w-7 p-2 rounded-lg hover:bg-primary/10 text-primary/80 hover:text-primary",title:"Clear input",children:(0,a.jsx)(N.Z,{className:"h-4 w-4"})}),(0,a.jsx)(f,{onClick:g,className:"h-7 w-7 p-2",title:"Add task",children:(0,a.jsx)($.Z,{className:"h-4 w-4"})})]})]}),c.length>0&&(0,a.jsxs)(Y,{open:L,onOpenChange:I,className:"mt-4",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between rounded-lg p-1",children:[(0,a.jsx)(H,{asChild:!0,children:(0,a.jsxs)(f,{variant:"ghost",className:"w-full justify-between px-4 py-2 hover:bg-muted/30 rounded-lg transition-colors",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsxs)("span",{className:"font-medium flex items-center gap-1",children:[(0,a.jsx)(ea.P05,{size:24}),"Saved Tasks"]}),(0,a.jsx)("span",{className:"bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold",children:c.length})]}),L?(0,a.jsx)(G.Z,{className:"h-5 w-5 text-primary/80"}):(0,a.jsx)(Q.Z,{className:"h-5 w-5 text-primary/80"})]})}),(0,a.jsx)(f,{variant:"ghost",size:"sm",onClick:()=>{u([]),p(null)},className:"text-red-600 hover:text-red-700 p-2 mx-1 h-8 w-8",title:"Delete all tasks",children:(0,a.jsx)(ee.Z,{className:"h-4 w-4"})})]}),(0,a.jsx)(K,{children:(0,a.jsx)(q,{className:"bg-background shadow-sm",children:(0,a.jsx)("div",{className:"p-2 px-8 space-y-1",children:[...c].sort((e,t)=>{let r=e.priority||"none",a=t.priority||"none",s=w[r],l=w[a];return s!==l?s-l:e.createdAt-t.createdAt}).map(e=>(0,a.jsxs)("div",{onClick:()=>R(e.text,e.id),className:"flex items-center justify-between p-2.5 hover:bg-muted/30 rounded-md group transition-colors cursor-pointer\n                                        ".concat(e.id===m?e.completed?"bg-lime-50 dark:bg-lime-900/20 border border-lime-200 dark:border-lime-800":"bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800":"","\n                                        ").concat(e.id!==m||e.completed?e.completed?"border-l-4 rounded-l-none dark:border-lime-800 border-lime-200":"border-l-4 rounded-l-none dark:border-zinc-800 border-zinc-200":"border-l-4 rounded-l-none border-yellow-200 dark:border-yellow-800","\n                                    "),children:[(0,a.jsxs)("div",{className:"flex items-center gap-3 flex-1",children:[(0,a.jsx)(er,{checked:e.completed,onCheckedChange:()=>z(e.id),onClick:e=>e.stopPropagation()}),(0,a.jsx)("span",{className:"truncate transition-colors w-0 flex-1 ".concat(e.completed?"text-primary/50 line-through":"text-primary/90 hover:text-primary"),children:e.text}),(0,a.jsx)(f,{variant:"ghost",size:"sm",onClick:t=>{t.stopPropagation(),_(e.id)},className:"h-7 w-7 p-1.5 text-red-600 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity",title:"Delete task",children:(0,a.jsx)(N.Z,{className:"h-3.5 w-3.5"})})]}),(0,a.jsxs)("div",{className:"flex items-center gap-2 ml-4",children:[(0,a.jsxs)(O,{children:[(0,a.jsx)(A,{className:"focus:outline-none",children:(0,a.jsx)(T,{priority:e.priority})}),(0,a.jsxs)(P,{align:"end",className:"w-32 p-1",children:[(0,a.jsx)(M,{onClick:t=>{t.stopPropagation(),setTimeout(()=>{v(e.id,"high")},120)},className:"focus:bg-red-100 dark:focus:bg-red-500/20 cursor-pointer",children:(0,a.jsx)("span",{className:"text-red-500",children:"High"})}),(0,a.jsx)(M,{onClick:t=>{t.stopPropagation(),setTimeout(()=>{v(e.id,"medium")},120)},className:"focus:bg-yellow-100 dark:focus:bg-yellow-500/20 cursor-pointer",children:(0,a.jsx)("span",{className:"text-yellow-500",children:"Medium"})}),(0,a.jsx)(M,{onClick:t=>{t.stopPropagation(),setTimeout(()=>{v(e.id,"low")},120)},className:"focus:bg-blue-100 dark:focus:bg-blue-500/20 cursor-pointer",children:(0,a.jsx)("span",{className:"text-blue-500",children:"Low"})}),(0,a.jsx)(M,{onClick:t=>{t.stopPropagation(),setTimeout(()=>{v(e.id,void 0)},120)},className:"focus:bg-zinc-100 dark:focus:bg-zinc-500/20 cursor-pointer",children:(0,a.jsx)("span",{className:"text-zinc-500",children:"None"})})]})]}),(0,a.jsx)("span",{className:"text-xs text-muted-foreground font-mono",children:new Date(e.createdAt).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})})]})]},e.id))})})})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-6 mt-8",children:(0,a.jsx)(i,{className:"border-none",children:(0,a.jsxs)(d,{className:"sm:block grid sm:text-left text-center justify-center",children:[(0,a.jsx)("div",{className:"text-6xl font-bold mb-4",children:eN(ed)}),(0,a.jsx)("div",{className:"mb-4",children:ec?eu?"Long Break":"Short Break":"Work Session ".concat(em)}),(0,a.jsxs)("div",{className:"mb-4",children:["Completed Cycles: ",ef," ",Z.totalCycles>0&&"/ ".concat(Z.totalCycles)]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)(f,{onClick:eg,disabled:ex,children:"Start"}),(0,a.jsx)(f,{onClick:eh,disabled:!ex,children:"Pause"}),(0,a.jsx)(f,{onClick:eb,children:"Reset"})]})]})})}),ec&&(0,a.jsxs)(a.Fragment,{children:[!ep&&(0,a.jsx)(y,{onEnforce:ei,onSkip:()=>{ei(!0),ey()}}),ep&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:(0,a.jsxs)("div",{className:"bg-background p-8 rounded-lg flex flex-col items-center gap-4",children:[(0,a.jsx)("p",{className:"text-lg",children:"Break time is over!"}),(0,a.jsx)(f,{onClick:()=>{ey(),eg(),ev()},size:"lg",children:"I'm ready to start the next session"})]})})]})]})}):null}}},function(e){e.O(0,[401,223,24,240,744],function(){return e(e.s=7240)}),_N_E=e.O()}]);