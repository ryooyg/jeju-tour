"use strict";(self["webpackChunkjeju_tour"]=self["webpackChunkjeju_tour"]||[]).push([[343],{8343:function(s,e,a){a.r(e),a.d(e,{default:function(){return H}});var t=a(6768),i=a(4232),l=a(5130);const n=s=>((0,t.Qi)("data-v-07018862"),s=s(),(0,t.jt)(),s),o={class:"container"},c={class:"row align-items-center min-vh-100"},r={class:"col-12 col-sm-8 col-md-6 col-lg-4 offset-0 offset-sm-2 offset-md-3 offset-lg-4"},d=n((()=>(0,t.Lk)("div",{class:"mb-3 text-center"},[(0,t.Lk)("h2",null,"제주 여행")],-1))),m=n((()=>(0,t.Lk)("hr",null,null,-1))),u={key:0,class:"mb-3 border bg-warning border-warning rounded p-2",style:{"--bs-bg-opacity":"0.2"}},k={class:"mb-3"},h=n((()=>(0,t.Lk)("label",{class:"form-label",for:"email"},"이메일",-1))),p={class:"mb-4"},g=n((()=>(0,t.Lk)("label",{class:"form-label",for:"password"},"암호",-1))),b={class:"input-group mb-3"},f=["type"],w={class:"input-group-text"},L={class:"d-flex justify-content-center align-items-center"},v=n((()=>(0,t.Lk)("button",{class:"btn btn-primary"},"로그인",-1))),x={class:"ms-3 text-end"},y={class:"ms-3 text-start"},W=n((()=>(0,t.Lk)("div",{class:"footer"},"만든이 : 유용규",-1))),_={class:"text-center my-3"},A=n((()=>(0,t.Lk)("h4",{class:"mb-3"},"또는",-1))),P=n((()=>(0,t.Lk)("div",{class:"d-flex justify-content-center align-items-center gap-2"},[(0,t.Lk)("span",{class:"align-self-baseline"}," 구글 로그인 ")],-1))),C=[P],I={class:"mb-3 text-center"},V=n((()=>(0,t.Lk)("img",{src:"https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg",width:"222",alt:"카카오 로그인 버튼"},null,-1))),j=[V],N={class:"mb-3 text-center"},E=n((()=>(0,t.Lk)("img",{src:"https://static.nid.naver.com/oauth/big_g.PNG",width:"222"},null,-1))),K=[E];function U(s,e,a,n,P,V){const E=(0,t.g2)("router-link");return(0,t.uX)(),(0,t.CE)("div",o,[(0,t.Lk)("div",c,[(0,t.Lk)("div",r,[(0,t.Lk)("form",{onSubmit:e[3]||(e[3]=(...s)=>V.loginWithEmailAndPassword&&V.loginWithEmailAndPassword(...s))},[d,m,this.message?((0,t.uX)(),(0,t.CE)("div",u,(0,i.v_)(this.message),1)):(0,t.Q3)("",!0),(0,t.Lk)("div",k,[h,(0,t.bo)((0,t.Lk)("input",{class:"form-control",type:"email",name:"email",id:"email","onUpdate:modelValue":e[0]||(e[0]=s=>this.email=s),placeholder:"e-메일계정",required:""},null,512),[[l.Jo,this.email]])]),(0,t.Lk)("div",p,[g,(0,t.Lk)("div",b,[(0,t.bo)((0,t.Lk)("input",{type:this.isPasswordVisible?"text":"password",class:"form-control",name:"password",placeholder:"암호","onUpdate:modelValue":e[1]||(e[1]=s=>this.password=s),required:""},null,8,f),[[l.hp,this.password]]),(0,t.Lk)("div",w,[(0,t.bo)((0,t.Lk)("input",{class:"form-check-input mt-0 me-2",type:"checkbox","aria-label":"Checkbox for following text input","onUpdate:modelValue":e[2]||(e[2]=s=>this.isPasswordVisible=s)},null,512),[[l.lH,this.isPasswordVisible]]),(0,t.eW)("Show ")])])]),(0,t.Lk)("div",L,[v,(0,t.Lk)("span",x,[(0,t.eW)("등록을 안 하셨다면? "),(0,t.bF)(E,{to:"/sign-up"},{default:(0,t.k6)((()=>[(0,t.eW)("등록")])),_:1})]),(0,t.Lk)("span",y,[(0,t.bF)(E,{to:"/passwd"},{default:(0,t.k6)((()=>[(0,t.eW)("암호재설정")])),_:1})])]),W],32),(0,t.Lk)("div",_,[A,(0,t.Lk)("button",{class:"btn btn-lg btn-outline-primary",onClick:e[4]||(e[4]=s=>this.$store.dispatch("signInWithGoogle"))},C)]),(0,t.Lk)("div",I,[(0,t.Lk)("a",{id:"custom-login-btn",onClick:e[5]||(e[5]=s=>V.kakaoLogin())},j)]),(0,t.Lk)("div",N,[(0,t.Lk)("a",{onClick:e[6]||(e[6]=(...s)=>V.loginWithNaver&&V.loginWithNaver(...s))},K)])])])])}var q={name:"SignInView",data(){return{email:"",password:"",username:"",message:"",isPasswordVisible:!1,naverLogin:null}},mounted(){},methods:{async loginWithEmailAndPassword(s){s.preventDefault();const e={email:this.email,password:this.password};try{await this.$store.dispatch("signInWithEmailAndPassword",e)}catch(a){this.message=a.message}},kakaoLogin(){window.Kakao.Auth.login({scope:"profile_image, account_email",success:this.getKakaoAccount})},getKakaoAccount(){window.Kakao.API.request({url:"/v2/user/me",success:s=>{const e=s.kakao_account,a=e.profile.ninkname,t=e.email;console.log("ninkname",a),console.log("email",t),console.log("로그인 성공!"),this.$store.dispatch("signInWithKakao",{username:a,email:t})},fail:s=>{console.log(s)}})},loginWithNaver(){const s=new naver.LoginWithNaverId({clientId:"kRURwahAXMuelx8fF5Vw",callbackUrl:"http://localhost:8000/navercallback",callbackHandle:!0});s.init(),s.reprompt()}}},S=a(1241);const F=(0,S.A)(q,[["render",U],["__scopeId","data-v-07018862"]]);var H=F}}]);
//# sourceMappingURL=343.8ac25c34.js.map