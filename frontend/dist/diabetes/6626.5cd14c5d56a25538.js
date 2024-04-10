"use strict";(self.webpackChunkdiabetes=self.webpackChunkdiabetes||[]).push([[6626],{6626:(q,c,s)=>{s.r(c),s.d(c,{SpecialitiesModule:()=>T});var m=s(6814),n=s(4190),p=s(5313),h=s(685),t=s(5879),g=s(764),b=s(4721),u=s(3566),v=s(6110),Z=s(8881),r=s(6223);function f(a,D){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"h2",35),t.qZA(),t.TgZ(5,"td")(6,"div",36)(7,"a",37),t._UZ(8,"i",38),t._uU(9," Edit "),t.qZA(),t.TgZ(10,"a",39),t._UZ(11,"i",40),t._uU(12," Delete "),t.qZA()()()()),2&a){const i=D.$implicit;t.xp6(2),t.Oqu(i.id)}}const A=[{path:"",component:(()=>{class a{constructor(i,e,l){this.data=i,this.pagination=e,this.router=l,this.routes=h._,this.tableData=[],this.pageSize=10,this.serialNumberArray=[],this.totalData=0,this.showFilter=!1,this.searchDataValue="",this.pagination.tablePageSize.subscribe(d=>{})}getTableData(i){this.data.getSpecialities().subscribe(e=>{this.tableData=[],this.serialNumberArray=[],this.totalData=e.totalData,e.data.map((l,d)=>{const o=d+1;d>=i.skip&&o<=i.limit&&(l.id=o,this.tableData.push(l),this.serialNumberArray.push(o))}),this.dataSource=new p.by(this.tableData),this.pagination.calculatePageSize.next({totalData:this.totalData,pageSize:this.pageSize,tableData:this.tableData,serialNumberArray:this.serialNumberArray,tableData2:[],tableData3:[],tableData4:[]})})}sortData(i){const e=this.tableData.slice();this.tableData=i.active&&""!==i.direction?e.sort((l,d)=>(l[i.active]<d[i.active]?-1:1)*("asc"===i.direction?1:-1)):e}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(g.D),t.Y36(b.N),t.Y36(n.F0))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-specialities"]],decls:75,vars:1,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-7","col-auto"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-sm-5","col"],["href","#Add_Specialities_details","data-bs-toggle","modal",1,"btn","btn-primary","float-end","mt-2"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"table-responsive"],["matSort","",1,"datatable","table","table-hover","table-center","mb-0",3,"matSortChange"],["mat-sort-header","id"],["mat-sort-header","specialities"],["mat-sort-header","action"],[4,"ngFor","ngForOf"],["id","Add_Specialities_details","aria-hidden","true","role","dialog",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"col-12","col-sm-6"],[1,"mb-3"],["for","specialities",1,"mb-2"],["type","text",1,"form-control"],["for","image",1,"mb-2"],["type","file",1,"form-control"],["type","submit",1,"btn","btn-primary","w-100"],["id","edit_specialities_details","aria-hidden","true","role","dialog",1,"modal","fade"],["type","text","value","Cardiology",1,"form-control"],[1,"table-avatar"],[1,"actions"],["data-bs-toggle","modal","href","#edit_specialities_details",1,"btn","btn-sm","bg-success-light","me-1"],[1,"fe","fe-pencil"],["data-bs-toggle","modal","href","#delete_modal",1,"btn","btn-sm","bg-danger-light"],[1,"fe","fe-trash"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6,"Specialities"),t.qZA(),t.TgZ(7,"ul",6)(8,"li",7),t._uU(9,"Specialities"),t.qZA()()(),t.TgZ(10,"div",8)(11,"a",9),t._uU(12,"Add"),t.qZA()()()(),t.TgZ(13,"div",3)(14,"div",10)(15,"div",11)(16,"div",12)(17,"div",13),t._UZ(18,"app-pagination-header"),t.TgZ(19,"table",14),t.NdJ("matSortChange",function(o){return l.sortData(o)}),t.TgZ(20,"thead")(21,"tr")(22,"th",15),t._uU(23,"#"),t.qZA(),t.TgZ(24,"th",16),t._uU(25,"Specialities"),t.qZA(),t.TgZ(26,"th",17),t._uU(27,"Actions"),t.qZA()()(),t.TgZ(28,"tbody"),t.YNc(29,f,13,1,"tr",18),t.qZA()(),t._UZ(30,"app-custom-pagination"),t.qZA()()()()()()(),t.TgZ(31,"div",19)(32,"div",20)(33,"div",21)(34,"div",22)(35,"h5",23),t._uU(36,"Add Specialities"),t.qZA(),t._UZ(37,"button",24),t.qZA(),t.TgZ(38,"div",25)(39,"form")(40,"div",3)(41,"div",26)(42,"div",27)(43,"label",28),t._uU(44,"Specialities"),t.qZA(),t._UZ(45,"input",29),t.qZA()(),t.TgZ(46,"div",26)(47,"div",27)(48,"label",30),t._uU(49,"Image"),t.qZA(),t._UZ(50,"input",31),t.qZA()()(),t.TgZ(51,"button",32),t._uU(52,"Save"),t.qZA()()()()()(),t.TgZ(53,"div",33)(54,"div",20)(55,"div",21)(56,"div",22)(57,"h5",23),t._uU(58,"Edit Specialities"),t.qZA(),t._UZ(59,"button",24),t.qZA(),t.TgZ(60,"div",25)(61,"form")(62,"div",3)(63,"div",26)(64,"div",27)(65,"label",28),t._uU(66,"Specialities"),t.qZA(),t._UZ(67,"input",34),t.qZA()(),t.TgZ(68,"div",26)(69,"div",27)(70,"label",30),t._uU(71,"Image"),t.qZA(),t._UZ(72,"input",31),t.qZA()()(),t.TgZ(73,"button",32),t._uU(74,"Save"),t.qZA()()()()()()),2&e&&(t.xp6(29),t.Q6J("ngForOf",l.tableData))},dependencies:[m.sg,u.YE,u.nU,v.v,Z.W,r._Y,r.JL,r.F]})}return a})()}];let S=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[n.Bz.forChild(A),n.Bz]})}return a})();var U=s(5531);let T=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[m.ez,S,U.m]})}return a})()}}]);