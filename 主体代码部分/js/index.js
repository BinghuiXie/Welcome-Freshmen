//
$(function () {
    FastClick.attach(document.body);

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
});


/*navJump函数：
*
*
*  第一个参数：点击的导航上的链接；
*  第二个参数：要显示的界面；
*
* */
var navJump = function (e,e2) {
    var nameMark = $("[name = 'mark']");
    // console.log(nameMark.length);
    e.click(function () {
        if (e.cancelable) {
            // 判断默认行为是否已经被禁用
            if (!e.defaultPrevented) {
                e.preventDefault();
            }
        }
        e2.removeAttr("name");
        nameMark.addClass("hidden");
        // console.log(nameMark.length);
        // console.log(nameMark[0]);
        // for (var i = 0; i < nameMark.length; i++){
        //     if (nameMark.hasClass("hidden") == false){
        //         nameMark[i].addClass("hidden");
        //     }
        // }
        // if(nameMark.hasClass("hidden") == true){
        //     ;
        // }else{
        //     console.log("123");
        //     nameMark.addClass("hidden");
        //     console.log("123");
        // }
        e2.removeClass("hidden");
        // e1.addClass("hidden");
        // e2.removeClass("hidden");
    });

};

//
//
//
//
