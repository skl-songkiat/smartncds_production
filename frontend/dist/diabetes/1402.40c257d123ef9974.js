"use strict";(self.webpackChunkdiabetes=self.webpackChunkdiabetes||[]).push([[1402],{1402:(U,d,o)=>{o.r(d),o.d(d,{DoctorListModule:()=>T});var h=o(6814),l=o(4190),g=o(5313),p=o(685),t=o(5879),b=o(764),D=o(4721),u=o(3566),v=o(6110),f=o(8881),c=o(6223);function Z(i,m){if(1&i){const a=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t._UZ(5,"br"),t.TgZ(6,"small"),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"div",16)(12,"input",17),t.NdJ("ngModelChange",function(s){const r=t.CHM(a).$implicit;return t.KtG(r.isStatus=s)}),t.qZA(),t.TgZ(13,"label",18),t._uU(14,"checkbox"),t.qZA()()()()}if(2&i){const a=m.$implicit,e=m.index;t.xp6(2),t.Oqu(a.speciality),t.xp6(2),t.hij("",a.memberSince," "),t.xp6(3),t.Oqu(a.time),t.xp6(2),t.Oqu(a.earned),t.xp6(3),t.s9C("id","data.toggle"+e),t.Q6J("ngModel",a.isStatus),t.xp6(1),t.s9C("for","data.toggle"+e)}}const A=[{path:"",component:(()=>{class i{constructor(a,e,s){this.data=a,this.pagination=e,this.router=s,this.routes=p._,this.tableData=[],this.initChecked=!1,this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.pagination.tablePageSize.subscribe(n=>{})}getTableData(a){this.data.getDoctorList().subscribe(e=>{this.tableData=[],this.serialNumberArray=[],this.totalData=e.totalData,e.data.map((s,n)=>{const r=n+1;n>=a.skip&&r<=a.limit&&(s.id=r,this.tableData.push(s),this.serialNumberArray.push(r))}),this.dataSource=new g.by(this.tableData),this.pagination.calculatePageSize.next({totalData:this.totalData,pageSize:this.pageSize,tableData:this.tableData,serialNumberArray:this.serialNumberArray,tableData2:[],tableData3:[],tableData4:[]})})}sortData(a){const e=this.tableData.slice();this.tableData=a.active&&""!==a.direction?e.sort((s,n)=>(s[a.active]<n[a.active]?-1:1)*("asc"===a.direction?1:-1)):e}selectAll(a){this.tableData.forEach(a?e=>{e.isSelected=!1}:e=>{e.isSelected=!0})}static#t=this.\u0275fac=function(e){return new(e||i)(t.Y36(b.D),t.Y36(D.N),t.Y36(l.F0))};static#a=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-doctor-list"]],decls:29,vars:1,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"table-responsive"],["matSort","",1,"datatable","table","table-hover","table-center","mb-0",3,"matSortChange"],["mat-sort-header","doctorName"],["mat-sort-header","speciality"],["mat-sort-header","memberSince"],["mat-sort-header","earned"],["mat-sort-header","accountStatus"],[4,"ngFor","ngForOf"],[1,"status-toggle"],["type","checkbox",1,"check",3,"id","ngModel","ngModelChange"],[1,"checktoggle",3,"for"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6,"List of Doctors"),t.qZA()()()(),t.TgZ(7,"div",3)(8,"div",4)(9,"div",6)(10,"div",7)(11,"div",8),t._UZ(12,"app-pagination-header"),t.TgZ(13,"table",9),t.NdJ("matSortChange",function(r){return s.sortData(r)}),t.TgZ(14,"thead")(15,"tr")(16,"th",10),t._uU(17,"Doctor Name"),t.qZA(),t.TgZ(18,"th",11),t._uU(19,"Speciality"),t.qZA(),t.TgZ(20,"th",12),t._uU(21,"Member Since"),t.qZA(),t.TgZ(22,"th",13),t._uU(23,"Earned"),t.qZA(),t.TgZ(24,"th",14),t._uU(25,"Account Status"),t.qZA()()(),t.TgZ(26,"tbody"),t.YNc(27,Z,15,7,"tr",15),t.qZA()()(),t._UZ(28,"app-custom-pagination"),t.qZA()()()()()()),2&e&&(t.xp6(27),t.Q6J("ngForOf",s.tableData))},dependencies:[h.sg,u.YE,u.nU,v.v,f.W,c.Wl,c.JJ,c.On]})}return i})()}];let S=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#a=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(A),l.Bz]})}return i})();var C=o(5531);let T=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#a=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[h.ez,S,C.m]})}return i})()}}]);