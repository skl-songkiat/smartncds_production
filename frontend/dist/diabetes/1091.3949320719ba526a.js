"use strict";(self.webpackChunkdiabetes=self.webpackChunkdiabetes||[]).push([[1091],{1091:(_,s,i)=>{i.r(s),i.d(s,{DashboardModule:()=>l});var g=i(6814),r=i(4190),c=i(685),t=i(5879),h=i(6903);const u=["chart"],n=[{path:"",component:(()=>{class d{constructor(){this.routes=c._,this.chartOptions1={series:[{name:"Revenue",data:[60,100,240,120,80,100,300],color:"#1b5a90"}],chart:{height:350,type:"area",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2},xaxis:{categories:["2013","2014","2015","2016","2017","2018","2019"]},markers:{size:4,strokeWidth:0,hover:{sizeOffset:3}}},this.chartOptions2={series:[{name:"Doctors",data:[100,20,90,50,120],color:"#1b5a90"},{name:"Patients",data:[30,60,120,80,150],color:"#ff9d00"}],chart:{height:350,width:"100%",type:"line",toolbar:{show:!1},zoom:{enabled:!1}},dataLabels:{enabled:!1},legend:{show:!1},stroke:{show:!0,curve:"smooth",width:2,dashArray:0},xaxis:{categories:["2015","2016","2017","2018","2019"]},markers:{size:4,strokeWidth:0,hover:{sizeOffset:3}}}}static#t=this.\u0275fac=function(a){return new(a||d)};static#e=this.\u0275cmp=t.Xpm({type:d,selectors:[["app-dashboard"]],viewQuery:function(a,e){if(1&a&&t.Gf(u,5),2&a){let o;t.iGM(o=t.CRH())&&(e.chart=o.first)}},decls:325,vars:14,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item","active"],[1,"col-xl-3","col-sm-6","col-12"],[1,"card"],[1,"card-body"],[1,"dash-widget-header"],[1,"dash-widget-icon","text-primary","border-primary"],[1,"fe","fe-users"],[1,"dash-count"],[1,"dash-widget-info"],[1,"text-muted"],[1,"progress","progress-sm"],[1,"progress-bar","bg-primary","w-50"],[1,"dash-widget-icon","text-success"],[1,"fe","fe-credit-card"],[1,"progress-bar","bg-success","w-50"],[1,"dash-widget-icon","text-danger","border-danger"],[1,"fe","fe-money"],[1,"progress-bar","bg-danger","w-50"],[1,"dash-widget-icon","text-warning","border-warning"],[1,"fe","fe-folder"],[1,"progress-bar","bg-warning","w-50"],[1,"col-md-12","col-lg-6"],[1,"card","card-chart"],[1,"card-header"],[1,"card-title"],["id","morrisArea"],[3,"series","chart","xaxis","stroke","tooltip","dataLabels","markers"],["id","morrisLine"],[3,"series","chart","xaxis","dataLabels","stroke","legend","markers"],[1,"col-md-6","d-flex"],[1,"card","card-table","flex-fill"],[1,"table-responsive"],[1,"table","table-hover","table-center","mb-0"],[1,"fe","fe-star","text-warning"],[1,"fe","fe-star-o","text-secondary"],[1,"col-md-12"],[1,"card","card-table"],[1,"text-primary","d-block"],[1,"status-toggle"],["type","checkbox","id","status_1","checked","",1,"check"],["for","status_1",1,"checktoggle"],["type","checkbox","id","status_2","checked","",1,"check"],["for","status_2",1,"checktoggle"],["type","checkbox","id","status_3","checked","",1,"check"],["for","status_3",1,"checktoggle"],["type","checkbox","id","status_4","checked","",1,"check"],["for","status_4",1,"checktoggle"],["type","checkbox","id","status_5","checked","",1,"check"],["for","status_5",1,"checktoggle"]],template:function(a,e){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6,"Welcome Admin!"),t.qZA(),t.TgZ(7,"ul",6)(8,"li",7),t._uU(9,"Dashboard"),t.qZA()()()()(),t.TgZ(10,"div",3)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"span",12),t._UZ(16,"i",13),t.qZA(),t.TgZ(17,"div",14)(18,"h3"),t._uU(19,"168"),t.qZA()()(),t.TgZ(20,"div",15)(21,"h6",16),t._uU(22,"Doctors"),t.qZA(),t.TgZ(23,"div",17),t._UZ(24,"div",18),t.qZA()()()()(),t.TgZ(25,"div",8)(26,"div",9)(27,"div",10)(28,"div",11)(29,"span",19),t._UZ(30,"i",20),t.qZA(),t.TgZ(31,"div",14)(32,"h3"),t._uU(33,"487"),t.qZA()()(),t.TgZ(34,"div",15)(35,"h6",16),t._uU(36,"Patients"),t.qZA(),t.TgZ(37,"div",17),t._UZ(38,"div",21),t.qZA()()()()(),t.TgZ(39,"div",8)(40,"div",9)(41,"div",10)(42,"div",11)(43,"span",22),t._UZ(44,"i",23),t.qZA(),t.TgZ(45,"div",14)(46,"h3"),t._uU(47,"485"),t.qZA()()(),t.TgZ(48,"div",15)(49,"h6",16),t._uU(50,"Appointment"),t.qZA(),t.TgZ(51,"div",17),t._UZ(52,"div",24),t.qZA()()()()(),t.TgZ(53,"div",8)(54,"div",9)(55,"div",10)(56,"div",11)(57,"span",25),t._UZ(58,"i",26),t.qZA(),t.TgZ(59,"div",14)(60,"h3"),t._uU(61,"$62523"),t.qZA()()(),t.TgZ(62,"div",15)(63,"h6",16),t._uU(64,"Revenue"),t.qZA(),t.TgZ(65,"div",17),t._UZ(66,"div",27),t.qZA()()()()()(),t.TgZ(67,"div",3)(68,"div",28)(69,"div",29)(70,"div",30)(71,"h4",31),t._uU(72,"Revenue"),t.qZA()(),t.TgZ(73,"div",10)(74,"div",32),t._UZ(75,"apx-chart",33),t.qZA()()()(),t.TgZ(76,"div",28)(77,"div",29)(78,"div",30)(79,"h4",31),t._uU(80,"Status"),t.qZA()(),t.TgZ(81,"div",10)(82,"div",34),t._UZ(83,"apx-chart",35),t.qZA()()()()(),t.TgZ(84,"div",3)(85,"div",36)(86,"div",37)(87,"div",30)(88,"h4",31),t._uU(89,"Doctors List"),t.qZA()(),t.TgZ(90,"div",10)(91,"div",38)(92,"table",39)(93,"thead")(94,"tr")(95,"th"),t._uU(96,"Doctor Name"),t.qZA(),t.TgZ(97,"th"),t._uU(98,"Speciality"),t.qZA(),t.TgZ(99,"th"),t._uU(100,"Earned"),t.qZA(),t.TgZ(101,"th"),t._uU(102,"Reviews"),t.qZA()()(),t.TgZ(103,"tbody")(104,"tr"),t._UZ(105,"td"),t.TgZ(106,"td"),t._uU(107,"Dental"),t.qZA(),t.TgZ(108,"td"),t._uU(109,"$3200.00"),t.qZA(),t.TgZ(110,"td"),t._UZ(111,"i",40)(112,"i",40)(113,"i",40)(114,"i",40)(115,"i",41),t.qZA()(),t.TgZ(116,"tr"),t._UZ(117,"td"),t.TgZ(118,"td"),t._uU(119,"Dental"),t.qZA(),t.TgZ(120,"td"),t._uU(121,"$3100.00"),t.qZA(),t.TgZ(122,"td"),t._UZ(123,"i",40)(124,"i",40)(125,"i",40)(126,"i",40)(127,"i",41),t.qZA()(),t.TgZ(128,"tr"),t._UZ(129,"td"),t.TgZ(130,"td"),t._uU(131,"Cardiology"),t.qZA(),t.TgZ(132,"td"),t._uU(133,"$4000.00"),t.qZA(),t.TgZ(134,"td"),t._UZ(135,"i",40)(136,"i",40)(137,"i",40)(138,"i",40)(139,"i",41),t.qZA()(),t.TgZ(140,"tr"),t._UZ(141,"td"),t.TgZ(142,"td"),t._uU(143,"Urology"),t.qZA(),t.TgZ(144,"td"),t._uU(145,"$3200.00"),t.qZA(),t.TgZ(146,"td"),t._UZ(147,"i",40)(148,"i",40)(149,"i",40)(150,"i",40)(151,"i",41),t.qZA()(),t.TgZ(152,"tr"),t._UZ(153,"td"),t.TgZ(154,"td"),t._uU(155,"Orthopaedics"),t.qZA(),t.TgZ(156,"td"),t._uU(157,"$3500.00"),t.qZA(),t.TgZ(158,"td"),t._UZ(159,"i",40)(160,"i",40)(161,"i",40)(162,"i",40)(163,"i",41),t.qZA()()()()()()()(),t.TgZ(164,"div",36)(165,"div",37)(166,"div",30)(167,"h4",31),t._uU(168,"Patients List"),t.qZA()(),t.TgZ(169,"div",10)(170,"div",38)(171,"table",39)(172,"thead")(173,"tr")(174,"th"),t._uU(175,"Patient Name"),t.qZA(),t.TgZ(176,"th"),t._uU(177,"Phone"),t.qZA(),t.TgZ(178,"th"),t._uU(179,"Last Visit"),t.qZA(),t.TgZ(180,"th"),t._uU(181,"Paid"),t.qZA()()(),t.TgZ(182,"tbody")(183,"tr"),t._UZ(184,"td"),t.TgZ(185,"td"),t._uU(186,"8286329170"),t.qZA(),t.TgZ(187,"td"),t._uU(188,"20 Oct 2023"),t.qZA(),t.TgZ(189,"td"),t._uU(190,"$100.00"),t.qZA()(),t.TgZ(191,"tr"),t._UZ(192,"td"),t.TgZ(193,"td"),t._uU(194,"2077299974"),t.qZA(),t.TgZ(195,"td"),t._uU(196,"22 Oct 2023"),t.qZA(),t.TgZ(197,"td"),t._uU(198,"$200.00"),t.qZA()(),t.TgZ(199,"tr"),t._UZ(200,"td"),t.TgZ(201,"td"),t._uU(202,"2607247769"),t.qZA(),t.TgZ(203,"td"),t._uU(204,"21 Oct 2023"),t.qZA(),t.TgZ(205,"td"),t._uU(206,"$250.00"),t.qZA()(),t.TgZ(207,"tr"),t._UZ(208,"td"),t.TgZ(209,"td"),t._uU(210,"5043686874"),t.qZA(),t.TgZ(211,"td"),t._uU(212,"21 Sep 2023"),t.qZA(),t.TgZ(213,"td"),t._uU(214,"$150.00"),t.qZA()(),t.TgZ(215,"tr"),t._UZ(216,"td"),t.TgZ(217,"td"),t._uU(218,"9548207887"),t.qZA(),t.TgZ(219,"td"),t._uU(220,"18 Sep 2023"),t.qZA(),t.TgZ(221,"td"),t._uU(222,"$350.00"),t.qZA()()()()()()()()(),t.TgZ(223,"div",3)(224,"div",42)(225,"div",43)(226,"div",30)(227,"h4",31),t._uU(228,"Appointment List"),t.qZA()(),t.TgZ(229,"div",10)(230,"div",38)(231,"table",39)(232,"thead")(233,"tr")(234,"th"),t._uU(235,"Doctor Name"),t.qZA(),t.TgZ(236,"th"),t._uU(237,"Speciality"),t.qZA(),t.TgZ(238,"th"),t._uU(239,"Patient Name"),t.qZA(),t.TgZ(240,"th"),t._uU(241,"Appointment Time"),t.qZA(),t.TgZ(242,"th"),t._uU(243,"Status"),t.qZA(),t.TgZ(244,"th"),t._uU(245,"Amount"),t.qZA()()(),t.TgZ(246,"tbody")(247,"tr"),t._UZ(248,"td"),t.TgZ(249,"td"),t._uU(250,"Dental"),t.qZA(),t._UZ(251,"td"),t.TgZ(252,"td"),t._uU(253,"9 Nov 2023 "),t.TgZ(254,"span",44),t._uU(255,"11.00 AM - 11.15 AM"),t.qZA()(),t.TgZ(256,"td")(257,"div",45),t._UZ(258,"input",46),t.TgZ(259,"label",47),t._uU(260,"checkbox"),t.qZA()()(),t.TgZ(261,"td"),t._uU(262," $200.00 "),t.qZA()(),t.TgZ(263,"tr"),t._UZ(264,"td"),t.TgZ(265,"td"),t._uU(266,"Dental"),t.qZA(),t._UZ(267,"td"),t.TgZ(268,"td"),t._uU(269,"5 Nov 2023 "),t.TgZ(270,"span",44),t._uU(271,"11.00 AM - 11.35 AM"),t.qZA()(),t.TgZ(272,"td")(273,"div",45),t._UZ(274,"input",48),t.TgZ(275,"label",49),t._uU(276,"checkbox"),t.qZA()()(),t.TgZ(277,"td"),t._uU(278," $300.00 "),t.qZA()(),t.TgZ(279,"tr"),t._UZ(280,"td"),t.TgZ(281,"td"),t._uU(282,"Cardiology"),t.qZA(),t._UZ(283,"td"),t.TgZ(284,"td"),t._uU(285,"11 Nov 2023 "),t.TgZ(286,"span",44),t._uU(287,"12.00 PM - 12.15 PM"),t.qZA()(),t.TgZ(288,"td")(289,"div",45),t._UZ(290,"input",50),t.TgZ(291,"label",51),t._uU(292,"checkbox"),t.qZA()()(),t.TgZ(293,"td"),t._uU(294," $150.00 "),t.qZA()(),t.TgZ(295,"tr"),t._UZ(296,"td"),t.TgZ(297,"td"),t._uU(298,"Urology"),t.qZA(),t._UZ(299,"td"),t.TgZ(300,"td"),t._uU(301,"7 Nov 2023"),t.TgZ(302,"span",44),t._uU(303,"1.00 PM - 1.20 PM"),t.qZA()(),t.TgZ(304,"td")(305,"div",45),t._UZ(306,"input",52),t.TgZ(307,"label",53),t._uU(308,"checkbox"),t.qZA()()(),t.TgZ(309,"td"),t._uU(310," $150.00 "),t.qZA()(),t.TgZ(311,"tr")(312,"td"),t._uU(313,"Orthopaedics"),t.qZA(),t.TgZ(314,"td"),t._uU(315,"15 Nov 2023 "),t.TgZ(316,"span",44),t._uU(317,"1.00 PM - 1.15 PM"),t.qZA()(),t.TgZ(318,"td")(319,"div",45),t._UZ(320,"input",54),t.TgZ(321,"label",55),t._uU(322,"checkbox"),t.qZA()()(),t.TgZ(323,"td"),t._uU(324," $200.00 "),t.qZA()()()()()()()()()()()),2&a&&(t.xp6(75),t.Q6J("series",e.chartOptions1.series)("chart",e.chartOptions1.chart)("xaxis",e.chartOptions1.xaxis)("stroke",e.chartOptions1.stroke)("tooltip",e.chartOptions1.tooltip)("dataLabels",e.chartOptions1.dataLabels)("markers",e.chartOptions1.markers),t.xp6(8),t.Q6J("series",e.chartOptions2.series)("chart",e.chartOptions2.chart)("xaxis",e.chartOptions2.xaxis)("dataLabels",e.chartOptions2.dataLabels)("stroke",e.chartOptions2.stroke)("legend",e.chartOptions2.legend)("markers",e.chartOptions2.markers))},dependencies:[h.x]})}return d})()}];let U=(()=>{class d{static#t=this.\u0275fac=function(a){return new(a||d)};static#e=this.\u0275mod=t.oAB({type:d});static#d=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(n),r.Bz]})}return d})();var T=i(5531);let l=(()=>{class d{static#t=this.\u0275fac=function(a){return new(a||d)};static#e=this.\u0275mod=t.oAB({type:d});static#d=this.\u0275inj=t.cJS({imports:[g.ez,U,T.m]})}return d})()}}]);