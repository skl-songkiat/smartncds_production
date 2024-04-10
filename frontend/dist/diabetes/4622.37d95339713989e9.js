"use strict";(self.webpackChunkdiabetes=self.webpackChunkdiabetes||[]).push([[4622],{4622:(h,p,d)=>{d.r(p),d.d(p,{MobileOtpModule:()=>f});var u=d(6814),g=d(4190),r=d(685),e=d(5879),s=d(6223);const m=[{path:"",component:(()=>{class i{ValueChanged(a,n){if("digit-1"==n&&a.length>0)document.getElementById("digit-2")?.focus();else if("digit-2"==n&&a.length>0)document.getElementById("digit-3")?.focus();else{if(!("digit-3"==n&&a.length>0))return;document.getElementById("digit-4")?.focus()}}tiggerBackspace(a,n){let t;t=a?a.toString():null,"digit-4"==n&&null==t?document.getElementById("digit-3")?.focus():"digit-3"==n&&null==t?document.getElementById("digit-2")?.focus():"digit-2"==n&&null==t&&document.getElementById("digit-1")?.focus()}constructor(a){this.router=a,this.routes=r._,this.oneTimePassword={data1:"",data2:"",data3:"",data4:""}}navigation(){this.router.navigate([r._.doctorDashboard])}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(g.F0))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-mobile-otp"]],decls:45,vars:5,consts:[[1,"login-content-info"],[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-4","col-md-6"],[1,"account-content"],[1,"login-shapes"],[1,"shape-img-left"],["src","assets/img/shape-01.png","alt","shape-image"],[1,"shape-img-right"],["src","assets/img/shape-02.png","alt","shape-image"],[1,"account-info"],[1,"login-back"],[3,"routerLink"],[1,"fa-solid","fa-arrow-left-long"],[1,"login-verify-img"],["src","assets/img/icons/mobile-icon.svg","alt","mobile-icon"],[1,"login-title"],[1,"mb-0"],["method","get","data-group-name","digits","data-autosubmit","false","autocomplete","off","tabindex","1",1,"digit-group","login-form-control",3,"click","keydown"],[1,"otp-box"],[1,"forms-block"],["maxlength","1","type","text","id","digit-1","name","digit-1","data-next","digit-2","maxlength","1",3,"ngModel","ngModelChange","keydown.backspace","input"],["maxlength","1","type","text","id","digit-2","name","digit-2","data-next","digit-3","data-previous","digit-1","maxlength","1",3,"ngModel","ngModelChange","keydown.backspace","input"],["maxlength","1","type","text","id","digit-3","name","digit-3","data-next","digit-4","data-previous","digit-2","maxlength","1",3,"ngModel","ngModelChange","keydown.backspace","input"],["maxlength","1","type","text","id","digit-4","name","digit-4","data-next","digit-5","data-previous","digit-3","maxlength","1",3,"ngModel","ngModelChange","keydown.backspace","input"],[1,"otp-info"],[1,"otp-code"],["href","javascript:void(0);"],[1,"otp-sec"],[1,"feather","icon-clock"],[1,"reset-btn"],["type","button",1,"btn","w-100"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),e._UZ(7,"img",7),e.qZA(),e.TgZ(8,"div",8),e._UZ(9,"img",9),e.qZA()(),e.TgZ(10,"div",10)(11,"div",11)(12,"a",12),e._UZ(13,"i",13),e._uU(14," Back"),e.qZA()(),e.TgZ(15,"div",14),e._UZ(16,"img",15),e.qZA(),e.TgZ(17,"div",16)(18,"h3"),e._uU(19,"Phone OTP Verification"),e.qZA(),e.TgZ(20,"p",17),e._uU(21,"OTP sent to your mobile number ending "),e.TgZ(22,"strong"),e._uU(23,"******9575"),e.qZA()()(),e.TgZ(24,"form",18),e.NdJ("click",function(){return t.navigation()})("keydown",function(){return t.navigation()}),e.TgZ(25,"div",19)(26,"div",20)(27,"input",21),e.NdJ("ngModelChange",function(l){return t.oneTimePassword.data1=l})("keydown.backspace",function(){return t.tiggerBackspace(t.oneTimePassword.data1,"digit-1")})("input",function(){return t.ValueChanged(t.oneTimePassword.data1,"digit-1")}),e.qZA(),e.TgZ(28,"input",22),e.NdJ("ngModelChange",function(l){return t.oneTimePassword.data2=l})("keydown.backspace",function(){return t.tiggerBackspace(t.oneTimePassword.data2,"digit-2")})("input",function(){return t.ValueChanged(t.oneTimePassword.data2,"digit-2")}),e.qZA(),e.TgZ(29,"input",23),e.NdJ("ngModelChange",function(l){return t.oneTimePassword.data3=l})("keydown.backspace",function(){return t.tiggerBackspace(t.oneTimePassword.data3,"digit-3")})("input",function(){return t.ValueChanged(t.oneTimePassword.data3,"digit-3")}),e.qZA(),e.TgZ(30,"input",24),e.NdJ("ngModelChange",function(l){return t.oneTimePassword.data4=l})("keydown.backspace",function(){return t.tiggerBackspace(t.oneTimePassword.data4,"digit-4")})("input",function(){return t.ValueChanged(t.oneTimePassword.data4,"digit-4")}),e.qZA()()(),e.TgZ(31,"div",20)(32,"div",25)(33,"div",26)(34,"p"),e._uU(35,"Didn't receive OTP code?"),e.qZA(),e.TgZ(36,"a",27),e._uU(37,"Resend Code"),e.qZA()(),e.TgZ(38,"div",28)(39,"p"),e._UZ(40,"i",29),e._uU(41," 00:25 secs"),e.qZA()()()(),e.TgZ(42,"div",30)(43,"button",31),e._uU(44,"Submit"),e.qZA()()()()()()()()()),2&n&&(e.xp6(12),e.Q6J("routerLink",t.routes.loginPhoneOtp),e.xp6(15),e.Q6J("ngModel",t.oneTimePassword.data1),e.xp6(1),e.Q6J("ngModel",t.oneTimePassword.data2),e.xp6(1),e.Q6J("ngModel",t.oneTimePassword.data3),e.xp6(1),e.Q6J("ngModel",t.oneTimePassword.data4))},dependencies:[g.rH,s._Y,s.Fj,s.JJ,s.JL,s.nD,s.On,s.F]})}return i})()}];let c=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[g.Bz.forChild(m),g.Bz]})}return i})();var _=d(5531);let f=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275mod=e.oAB({type:i});static#n=this.\u0275inj=e.cJS({imports:[u.ez,c,_.m]})}return i})()}}]);