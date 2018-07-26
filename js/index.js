//
$(function () {
    // FastClick.attach(document.body);

    /*用于获取首页事件的变量*/
    var page0 = $("#page0");
    var page1 = $("#page1");
    var page2 = $("#page2");
    var page3 = $("#page3");
    var page4 = $("#page4");
    var page5 = $("#page5");
    var page6 = $("#page6");
    var page7 = $("#page7");
    var page8 = $("#page8");
    var page9 = $("#page9");
    var page10 = $("#page10");
    var page11 = $("#page11");
    var page12 = $("#page12");
    var page13 = $("#page13");
    var page14 = $("#page14");
    var page15 = $("#page15");
    var page16 = $("#page16");
    var page17 = $("#page17");
    var page18 = $("#page18");
    var page19 = $("#page19");
    var page20 = $("#page20");
    var page21 = $("#page21");
    var page22 = $("#page22");
    var page23 = $("#page23");
    var page24 = $("#page24");
    var page25 = $("#page25");
    var page26 = $("#page26");
    var page27 = $("#page27");
    var page28 = $("#page28");
    var page29 = $("#page29");
    var page30 = $("#page30");
    var page31 = $("#page31");
    var page32 = $("#page32");
    var page33 = $("#page33");
    var page34 = $("#page34");
    var page35 = $("#page35");
    var page36 = $("#page36");
    var page37 = $("#page37");
    var page38 = $("#page38");
    var page39 = $("#page39");
    var page40 = $("#page40");
    var page41 = $("#page41");
    var page42 = $("#page42");
    var page43 = $("#page43");
    var page44 = $("#page44");
    var page45 = $("#page45");
    var page46 = $("#page46");
    var page47= $("#page47");
    var page48 = $("#page48");
    var page49 = $("#page49");
    var page50 = $("#page50");
    var page51 = $("#page51");
    var page52 = $("#page52");
    var page53 = $("#page53");
    var page54 = $("#page54");
    var page55 = $("#page55");
    var page56 = $("#page56");
    var page57 = $("#page57");
    var page58 = $("#page58");
    var page59 = $("#page59");
    var page60 = $("#page60");
    var page61 = $("#page61");
    var page62 = $("#page62");
    var page63 = $("#page63");
    var page64 = $("#page64");
    var page65 = $("#page65");
    var page66 = $("#page66");

    var nav0 = $("#nav0");
    var nav1 = $("#nav1");
    var nav2 = $("#nav2");
    var nav3 = $("#nav3");
    var nav4 = $("#nav4");
    var nav5 = $("#nav5");
    var nav6 = $("#nav6");
    var nav7 = $("#nav7");
    var nav8 = $("#nav8");
    var nav9 = $("#nav9");
    var nav10 = $("#nav10");
    var nav11 = $("#nav11");
    var nav12 = $("#nav12");
    var nav13 = $("#nav13");
    var nav14 = $("#nav14");
    var nav15 = $("#nav15");
    var nav16 = $("#nav16");
    var nav17 = $("#nav17");
    var nav18 = $("#nav18");
    var nav19 = $("#nav19");
    var nav20 = $("#nav20");
    var nav21 = $("#nav21");
    var nav22 = $("#nav22");
    var nav23 = $("#nav23");
    var nav24 = $("#nav24");
    var nav25 = $("#nav25");
    var nav26 = $("#nav26");
    var nav27 = $("#nav27");
    var nav28 = $("#nav28");
    var nav29 = $("#nav29");
    var nav30 = $("#nav30");
    var nav31 = $("#nav31");
    var nav32 = $("#nav32");
    var nav33 = $("#nav33");
    var nav34 = $("#nav34");
    var nav35 = $("#nav35");
    var nav36 = $("#nav36");
    var nav37 = $("#nav37");
    var nav38 = $("#nav38");
    var nav39 = $("#nav39");
    var nav40 = $("#nav40");
    var nav41 = $("#nav41");
    var nav42 = $("#nav42");
    var nav43 = $("#nav43");
    var nav44 = $("#nav44");
    var nav45 = $("#nav45");
    var nav46 = $("#nav46");
    var nav47 = $("#nav47");
    var nav48= $("#nav48");
    var nav49 = $("#nav49");
    var nav50 = $("#nav50");
    var nav51 = $("#nav51");
    var nav52 = $("#nav52");
    var nav53 = $("#nav53");
    var nav54 = $("#nav54");
    var nav55 = $("#nav55");
    var nav56 = $("#nav56");
    var nav57 = $("#nav57");
    var nav58 = $("#nav58");
    var nav59 = $("#nav59");
    var nav60 = $("#nav60");
    var nav61 = $("#nav61");
    var nav62 = $("#nav62");
    var nav63 = $("#nav63");
    var nav64 = $("#nav64");
    var nav65 = $("#nav65");
    var nav66 = $("#nav66");
    var nav67 = $("#nav67");

    navJump(nav2,page2);/*学校简介*/
    navJump(nav3,page3);/*学校章程*/
    navJump(nav4,page4);/*南邮校史*/
   /* navJump(nav7,page2);暂无*//*全景地图*/

    /*现任领导的跳转*/
    navJump(nav8,page6);
    navJump(nav9,page7);
    navJump(nav10,page8);
    navJump(nav11,page9);
    navJump(nav12,page10);
    navJump(nav13,page11);
    navJump(nav14,page12);
    navJump(nav15,page13);
    navJump(nav16,page14);
    navJump(nav17,page15);

    /*电子地图的跳转*/
    navJump(nav18,page17);
    navJump(nav19,page18);
    navJump(nav20,page19);

    /*点击返回首页*/
    var allPages = $("[type = 'welcome']");
    for (var i = 0; i < allPages.length; i++){
        if(typeof(allPages.attr("name"))=="undefined"){
            /*currentPage是当前浏览界面，日后这个部分还需改进*/
            var currentPage = allPages[i];
        }
    }
    navJump(nav0,page0);

    /*新生导航跳转*/
    navJump(nav22,page21);
    navJump(nav23,page22);
    navJump(nav24,page23);
    navJump(nav25,page24);

    /*军训攻略跳转*/
    navJump(nav60,page66);

    /*生活攻略跳转*/
    navJump(nav27,page42);
    navJump(nav28,page43);
    navJump(nav29,page44);
    navJump(nav30,page45);
    navJump(nav31,page46);
    navJump(nav32,page47);
    navJump(nav33,page48);
    navJump(nav34,page49);
    navJump(nav35,page50);
    navJump(nav36,page51);
    navJump(nav37,page52);
    navJump(nav38,page53);/*新生群*/
    navJump(nav39,page54);/*心理咨询*/
    navJump(nav40,page55);
    navJump(nav41,page56);
    navJump(nav43,page57);
    navJump(nav43,page58);

    /*院系概览跳转*/
    navJump(nav45,page26);
    navJump(nav46,page27);
    navJump(nav47,page28);
    navJump(nav48,page29);
    navJump(nav49,page30);
    navJump(nav50,page31);
    navJump(nav51,page32);
    navJump(nav52,page33);
    navJump(nav53,page34);
    navJump(nav54,page35);
    navJump(nav55,page36);
    navJump(nav56,page37);
    navJump(nav57,page38);
    navJump(nav58,page39);
    navJump(nav59,page40);

    /*技能学习跳转*/
    navJump(nav62,page60);
    navJump(nav63,page61);
    navJump(nav64,page62);
    navJump(nav65,page63);
    navJump(nav66,page64);
    navJump(nav67,page65);


    var slide1 = $(".slide1");
    var slide2 = $(".slide2");
    var slide3 = $(".slide3");
    var slide4 = $(".slide4");
    var slide5 = $(".slide5");
    var slide6 = $(".slide6");
    var slide7 = $(".slide7");
    var slide8 = $(".slide8");

    var overview1 = $(".overview1");
    var overview2 = $(".overview2");
    var overview3 = $(".overview3");
    var overview4 = $(".overview4");
    var overview5 = $(".overview5");
    var overview6 = $(".overview6");

    /*点击跳转实现*/
    navJump(slide1,page1);
    navJump(overview1,page2);
    navJump(overview2,page3);
    navJump(overview3,page4);
    navJump(overview4,page5);
    navJump(overview5,page16);
    /*360°全景地图暂未开启*/
    // navJump(overview6,);

    /*现任领导*/
    var leader1 = $(".leader1");
    var leader2 = $(".leader2");
    var leader3 = $(".leader3");
    var leader4 = $(".leader4");
    var leader5 = $(".leader5");
    var leader6 = $(".leader6");
    var leader7 = $(".leader7");
    var leader8 = $(".leader8");
    var leader9 = $(".leader9");
    var leader10 = $(".leader10");

    navJump(leader1,page6);
    navJump(leader2,page7);
    navJump(leader3,page8);
    navJump(leader4,page9);
    navJump(leader5,page10);
    navJump(leader6,page11);
    navJump(leader7,page12);
    navJump(leader8,page13);
    navJump(leader9,page14);
    navJump(leader10,page15);

    /*新生导航*/
    var guide1 = $(".guide1");
    var guide2 = $(".guide2");
    var guide3 = $(".guide3");
    var guide4 = $(".guide4");

    navJump(slide2,page20);
    navJump(guide1,page21);
    navJump(guide2,page22);
    navJump(guide3,page23);
    navJump(guide4,page24);

    /*生活攻略*/


    navJump(slide3,page41);

    var tip1 = $(".tip1");/*衣在南邮*/
    var tip2 = $(".tip2");/*食在南邮*/
    var tip3 = $(".tip3");/*住在南邮*/
    var tip4 = $(".tip4");/*行在南邮*/
    var tip5 = $(".tip5");/*南京天气*/
    var tip6 = $(".tip6");/*周围商区*/
    var tip7 = $(".tip7");/*食堂介绍*/
    var tip8 = $(".tip8");/*宿舍介绍*/
    var tip9 = $(".tip9");/*校车时刻表*/
    var tip10 = $(".tip10");/*南京旅游地点*/
    var tip11 = $(".tip11");/*老乡群*/
    var tip12 = $(".tip12");/*新生群*/
    var tip13 = $(".tip13");/*心理咨询*/
    var tip14 = $(".tip14");/*校园安全*/
    var tip15 = $(".tip15");/*校园公共账号*/
    var tip16 = $(".tip16");/*周边美食*/
    var tip17 = $(".tip17");/*小程序*/

    navJump(tip1,page42);/*跳转 - 衣在南邮*/
    navJump(tip2,page43);/*跳转 - 食在南邮*/
    navJump(tip3,page44);/*跳转 - 住在南邮*/
    navJump(tip4,page45);/*跳转 - 行在南邮*/
    navJump(tip5,page46);/*跳转 - 南京天气*/
    navJump(tip6,page47);/*跳转 - 周围商区*/
    navJump(tip7,page48);/*跳转 - 食堂介绍*/
    navJump(tip8,page49);/*跳转 - 宿舍介绍*/
    navJump(tip9,page50);/*跳转 - 校车时刻表*/
    navJump(tip10,page51);/*跳转 - 南京旅游地点*/
    navJump(tip11,page52);/*跳转 - 老乡群*/
    navJump(tip12,page53);/*跳转 - 新生群*/
    navJump(tip13,page54);/*跳转 - 心理咨询*/
    navJump(tip14,page55);/*跳转 - 校园安全*/
    navJump(tip15,page56);/*跳转 - 校园公共账号*/
    navJump(tip16,page57);/*跳转 - 周边美食*/
    navJump(tip17,page58);/*跳转 - 小程序*/


    /*院系概览*/
    var Institute1 = $(".Institute1");
    var Institute2 = $(".Institute2");
    var Institute3 = $(".Institute3");
    var Institute4 = $(".Institute4");
    var Institute5 = $(".Institute5");
    var Institute6 = $(".Institute6");
    var Institute7 = $(".Institute7");
    var Institute8 = $(".Institute8");
    var Institute9 = $(".Institute9");
    var Institute10 = $(".Institute10");
    var Institute11 = $(".Institute11");
    var Institute12 = $(".Institute12");
    var Institute13 = $(".Institute13");
    var Institute14 = $(".Institute14");
    var Institute15 = $(".Institute15");
    var Institute16 = $(".Institute16");

    navJump(slide4,page25)

    navJump(Institute1,page26);
    navJump(Institute2,page27);
    navJump(Institute3,page28);
    navJump(Institute4,page29);
    navJump(Institute5,page30);
    navJump(Institute6,page31);
    navJump(Institute7,page32);
    navJump(Institute8,page33);
    navJump(Institute9,page34);
    navJump(Institute10,page35);
    navJump(Institute11,page36);
    navJump(Institute12,page37);
    navJump(Institute13,page38);
    navJump(Institute14,page39);
    navJump(Institute15,page40);
    navJump(Institute16,page41);

    /*军训攻略*/
    navJump(slide5,page66);

    /*技能学习*/
    var skills1 = $(".skills1");
    var skills2 = $(".skills2");
    var skills3 = $(".skills3");
    var skills4 = $(".skills4");
    var skills5 = $(".skills5");
    var skills6 = $(".skills6");

    navJump(slide7,page59);
    navJump(skills1,page60);
    navJump(skills2,page61);
    navJump(skills3,page62);
    navJump(skills4,page63);
    navJump(skills5,page64);
    navJump(skills6,page65);

    /*生活攻略二层界面的跳转*/
    var page67 = $("#page67");
    var page68 = $("#page68");
    /*南京天气和周围商区*/
    navJump(page67,page46);
    navJump(page68,page47);

    /*食在南邮部分跳转*/
    var page69 = $("#page69");
    navJump(page69,page57);

    /*住在南邮*/
    var page70 = $("#page70");
    var page71 = $("#page71");

    navJump(page70,page49);
    navJump(page71,page55);

    /*行在南邮跳转*/
    var page72 = $("#page72");
    var page73 = $("#page73");
    var page74 = $("#page74");
    var page75 = $("#page75");
    navJump(page72,page52);
    navJump(page73,page51);
    navJump(page74,page53);
    navJump(page75,page50);

    /*电子地图*/
    var page76 = $("#page76");
    var page77 = $("#page77");
    var page78 = $("#page78");
    navJump(page76,page17);
    navJump(page77,page18);
    navJump(page78,page19);
});


/*navJump函数：
*
*  第一个参数：点击的导航上的链接；
*  第二个参数：要显示的界面；
*
* */
function navJump (e,e2) {
    var nameMark = $("[name = 'mark']");
    // console.log(nameMark.length);
    e.click(function () {
        // alert("123");
        // if (e.cancelable) {
        //     // 判断默认行为是否已经被禁用
        //     if (!e.defaultPrevented) {
        //         e.preventDefault();
        //     }
        // }
        e2.removeAttr("name");
        nameMark.addClass("hidden");
        e2.removeClass("hidden");
        // e1.addClass("hidden");
        // e2.removeClass("hidden");
    });
}


//
//
//
//
