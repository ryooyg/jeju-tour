"use strict";(self["webpackChunkjeju_tour"]=self["webpackChunkjeju_tour"]||[]).push([[698],{6698:function(e,n,t){function u(e,n,t,u,a,r){return null}t.r(n),t.d(n,{default:function(){return s}});var a=t(6740),r={name:"NaverloginCallback",data(){return{}},mounted(){const e=new naver.LoginWithNaverId({clientId:"kRURwahAXMuelx8fF5Vw"});e.init(),e.getLoginStatus((function(n){n?a.A.dispatch("signInWithNaver",{username:e.user.name,email:e.user.email}):console.log("AccessToken이 올바르지 않습니다.")}))}},i=t(1241);const o=(0,i.A)(r,[["render",u]]);var s=o}}]);
//# sourceMappingURL=698.b9ad89bb.js.map