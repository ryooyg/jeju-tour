(function(){var e={1587:function(e,t,n){"use strict";var r=n(5130),o=n(6768);function i(e,t,n,r,i,a){const s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(s)}var a={},s=n(1241);const u=(0,s.A)(a,[["render",i]]);var c=u,l=n(5234),d=n(9325),f=n(6740),h=n(5015),m=n(7934);const g=(0,l.Ey)(),p=(0,r.Ef)(c);p.use(g),p.use(d.A),p.use(f.A),p.use(h.Ay),p.use(m.Ay),p.mount("#app"),window.Kakao.init("a41458ef2e3d9f206eea7bb9d44dac45")},9325:function(e,t,n){"use strict";var r=n(1387),o=n(6740);const i=[{path:"/sign-in",name:"sign-in",component:()=>n.e(358).then(n.bind(n,4358))},{path:"/",name:"root",component:()=>n.e(358).then(n.bind(n,4358))},{path:"/sign-up",name:"sign-up",component:()=>Promise.all([n.e(100),n.e(72)]).then(n.bind(n,72))},{path:"/home",name:"home",component:()=>n.e(993).then(n.bind(n,2993)),meta:{requiresAuth:!0}},{path:"/passwd",name:"passwd",component:()=>Promise.all([n.e(100),n.e(714)]).then(n.bind(n,8714))},{path:"/userinfo",name:"userinfo",component:()=>n.e(821).then(n.bind(n,5821)),meta:{requiresAuth:!0}},{path:"/admin",name:"admin",component:()=>n.e(536).then(n.bind(n,6536)),meta:{requiresAuth:!0}},{path:"/navercallback",name:"navercallback",component:()=>n.e(698).then(n.bind(n,6698))}],a=(0,r.aE)({history:(0,r.LA)(),routes:i});a.beforeEach((async(e,t,n)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if(o.A.getters.isAuthenticated)return void n();n("/sign-in")}else n()})),t.A=a},6740:function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n(4249),o=(n(4114),n(9325)),i=n(6400),a=n(8607),s=n(9675);const u={apiKey:"AIzaSyCAoe5LjzjXaww6_XTBaxpGBtBPgTWcU-Y",authDomain:"jeju-tour-6b6e9.firebaseapp.com",projectId:"jeju-tour-6b6e9",storageBucket:"jeju-tour-6b6e9.appspot.com",messagingSenderId:"935848543566",appId:"1:935848543566:web:dd3caa9389552e65f84a1f",measurementId:"G-1LQ63V3B7T"},c=(0,i.Wp)(u);s.getFirestore(c);var l={state:{user:null,userList:null},getters:{isAuthenticated(e){return!!e.user}},mutations:{signUp(){o.A.push("/sign-in")},signIn(e,t){e.user=t,o.A.push("/home")},signOut(e){e.user={},o.A.push("/sign-in")},fetchAlluserList(e,t){e.userList=t}},actions:{async signUpWithEmailAndPassword({commit:e},{email:t,password:n,username:r,telnum:o}){await a.createUserWithEmailAndPassword(a.getAuth(c),t,n).then((t=>{a.sendEmailVerification(t.user).then((()=>e("signUp")));try{var n=(0,s.getFirestore)(c);const e=s.collection(n,"users"),i=(0,s.doc)(e,t.user.uid);(0,s.setDoc)(i,{uid:t.user.uid,email:t.user.email,username:r,authority:!1,telnum:o,create_at:Date.now()})}catch(i){console.log(i)}})).catch((()=>{throw Error("Email is already registered.")}))},async signInWithEmailAndPassword({commit:e},{email:t,password:n}){await a.signInWithEmailAndPassword(a.getAuth(c),t,n).then((t=>{if(!t.user.emailVerified)throw Error("Email isn't verified.");try{var n=(0,s.getFirestore)(c);const r=(0,s.doc)(n,"users",t.user.uid);(0,s.getDoc)(r).then((t=>{t.exists()?e("signIn",t.data()):console.log("No such document")}))}catch(r){console.log(r)}e("signIn",t.user)})).catch((e=>{if("Email isn't verified."===e.message)throw Error("Email isn't verified.");throw Error("Invalid email or password.")}))},async sendResetPassword({commit:e},{email:t}){await a.sendPasswordResetEmail(a.getAuth(c),t).then((()=>{console.log("good sent to"+t)})).catch((e=>{console.log(e)})),e("signIn","")},async signInWithGoogle({commit:e}){await a.signInWithPopup(a.getAuth(c),new a.GoogleAuthProvider).then((t=>{const n={email:t.user.email,username:t.user.displayName,photoUrl:t.user.photoURL};e("signIn",n)}))},async signInWithKakao({commit:e},t){e("signIn",t)},async signInWithNaver({commit:e},t){e("signIn",t)},async signOut({commit:e}){await a.signOut(a.getAuth(c)).then((()=>e("signOut"))).catch((e=>{console.log(e)}))},async fetchAlluserList({commit:e}){let t=[];try{var n=(0,s.getFirestore)(c);const r=(0,s.query)(s.collection(n,"users")),o=await(0,s.getDocs)(r);o.forEach((e=>{t.push(e.data())})),t.length>0&&e("fetchAlluserList",t)}catch(r){console.log(r)}},async fireBaseDeleteUser({dispatch:e},t){a.deleteUser(t).then((()=>{console.log("good delete user")})).catch((e=>{console.log(e)}));try{var n=(0,s.getFirestore)(c);const r=(0,s.doc)(n,"users",t.uid);console.log(r),(0,s.deleteDoc)(r).then((()=>e("fetchAlluserList"))).catch((()=>{throw Error("Error due delete User.")}))}catch(r){console.log(r)}},async userAuthrity({dispatch:e},t){try{var n=(0,s.getFirestore)(c);const r=(0,s.doc)(n,"users",t.uid);(0,s.updateDoc)(r,{authority:t.authority}).then((()=>e("fetchAlluserList"))).catch((()=>{throw Error("Error due userAuthriy.")}))}catch(r){console.log(r)}}}},d=(0,r.y$)({namespaced:!0,state:{},getters:{},mutations:{},actions:{},modules:{auth:l}})},8625:function(){},6504:function(){},6580:function(){}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{72:"12a4c521",100:"94a0dfa8",167:"2d73f492",223:"983a0b3c",234:"37ada31f",243:"419042e9",358:"3fc38366",441:"f78e3e4a",536:"94aaf6a9",632:"e83bd2f6",698:"b9ad89bb",714:"fd1225db",821:"728e95a1",847:"92a9157c",855:"7ccb102b",967:"3934a683",993:"1d60f857"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{72:"6d1fd1c9",358:"2edc0cda",536:"12d5d2d0",714:"83a6a9ee",821:"d3a8bbb0",993:"51476af9"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="jeju-tour:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&n.type,s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+": "+s+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,i.parentNode&&i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return o();e(r,s,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={72:1,358:1,536:1,714:1,821:1,993:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkjeju_tour"]=self["webpackChunkjeju_tour"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1587)}));r=n.O(r)})();
//# sourceMappingURL=app.8c708cce.js.map