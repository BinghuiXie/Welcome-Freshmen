
$(function () {
    FastClick.attach(document.body);

    /*用于获取首页事件的变量*/
    var jump;
    /*首页七个链接的变量*/
    var jump1,jump2,jump3,jump4,jump5,jump6,jump7;
    jump = $(".freshman_zone");
    jump1 = $(".slide1");
    jump2 = $(".slide2");
    jump3 = $(".slide3");
    jump4 = $(".slide4");
    jump5 = $(".slide5");
    jump6 = $(".slide6");
    jump7 = $(".slide7");
    /*用于获取南邮概况事件的变量*/
    var overview = $(".overview_njupt");
    PageJump(jump,jump1,overview);
    /*用于获取南邮概况界面6个模块事件变量*/
    var overview1,overview2,overview3,overview4,overview5,overview6;
    overview1 = $(".overview1");
    overview2 = $(".overview2");
    overview3 = $(".overview3");
    overview4 = $(".overview4");
    overview5 = $(".overview5");
    overview6 = $(".overview6");
    /*获取南邮概况内部内容*/
    var college1,college2,college3,college4,college5,college6;
    college1 = $(".college_intro");
    college2 = $(".college_rule");
    college3 = $(".college_history");
    college4 = $(".now_leader");
    college5 = $(".electronicMap");
    // college6 = $(".college_intro");
    PageJump(overview,overview1,college1);
    PageJump(overview,overview2,college2);
    PageJump(overview,overview3,college3);
    PageJump(overview,overview4,college4);
    PageJump(overview,overview5,college5);
    /*领导介绍列表*/
    var leader1,leader2,leader3,leader4,leader5,leader6,leader7,leader8,leader9,leader10,
    leader1 = $(".leader1");
    leader2 = $(".leader2");
    leader3 = $(".leader3");
    leader4 = $(".leader4");
    leader5 = $(".leader5");
    leader6 = $(".leader6");
    leader7 = $(".leader7");
    leader8 = $(".leader8");
    leader9 = $(".leader9");
    leader10 = $(".leader10");
    /*领导介绍内容*/
    var liuchen = $(".liuchen");/*刘陈*/
    var yangzhen = $(".yangzhen");/*杨震*/
    var wck = $(".wangchengkuan");/*王成宽*/
    var wgp = $(".wangguoping");/*王国平*/
    var wzr = $(".wangzongrong");/*王宗荣*/
    var jgp = $(".jiangguoping");/*蒋国平*/
    var zzh = $(".zhangzhihua");/*张志华*/
    var znp = $(".zhounanping");/*周南平*/
    var lzq = $(".liziquan");/*李子全*/
    var wlh = $(".wanglianhui");/*汪联辉*/
    PageJump(college4,leader1,liuchen);
    PageJump(college4,leader2,yangzhen);
    PageJump(college4,leader3,wck);
    PageJump(college4,leader4,wgp);
    PageJump(college4,leader5,wzr);
    PageJump(college4,leader6,jgp);
    PageJump(college4,leader7,zzh);
    PageJump(college4,leader8,znp);
    PageJump(college4,leader9,lzq);
    PageJump(college4,leader10,wlh);
    /*南邮概况 - 电子地图内容*/
    var xianlin_map = $(".xianlin_map");
    var san_map = $(".san_map");
    var suo_map = $(".suo_map");
    /*电子地图列表*/
    var xianlin = $(".bgColor5");
    var sanPL = $(".bgColor6");
    var suoJC = $(".bgColor7");
    PageJump(college5,xianlin,xianlin_map);
    PageJump(college5,sanPL,san_map);
    PageJump(college5,suoJC,suo_map);


});
/*PageJump函数：
* 第一个参数：需要隐藏的界面；
* 第二个参数：点击的界面；
* 第三个参数：需要显示的界面；
* */
var PageJump = function (e1,e,e2) {
    e.unbind('click').click(function () {
        console.log("123");
        e1.addClass("hidden");
        e2.removeClass("hidden");
    });
}





