// window.onload = function () {
//     UpDownSlide();
//     /*上下滑动*/
//
//     /*函数中第一个参数是需要隐藏的，第二个是被点击的，第三个是需要显示的*/
//     // Judge_touch(DOM,DOM1,DOM2);
//     // Judge_touch(DOM2,DOM3,DOM);
//     // Judge_touch(DOM2,DOM4,DOM5);
// };
//
// /*点击操作的DOM*/
// // var DOM = document.querySelector(".freshman_zone")
// // var DOM1 = document.querySelector(".box1");
// // var DOM2 = document.querySelector(".overview_njupt");
// // var DOM3 = document.querySelector(".overview_icon");
// // var DOM4 = document.querySelector(".overview1");
// // var DOM5 = document.querySelector(".college_intro");
//
// var startTime = 0;
// var endTime = 0;
// var distanceTime = 0;
// var isMove = false;
// var Judge_touch = function (e,e1,e2) {
//     e1.addEventListener("touchstart",function () {
//         startTime = Date.now();
//     });
//     e1.addEventListener("touchmove",function () {
//         isMove = true;
//     });
//     e1.addEventListener("touchend",function () {
//         endTime = Date.now();
//         distanceTime = endTime - startTime;
//
//         if(isMove == false && distanceTime < 150){
//             console.log("123");
//             e1.style.pointerEvents = "auto";
//             e.style.display="none";
//             // e1.style.pointerEvents = "none";
//
//             //DOM.classList.add("hidden");
//             console.log(distanceTime);
//
//             e2.classList.remove("hidden");
//             e2.style.pointerEvents = "none";
//             // DOM2.classList.remove("hidden");
//         }
//         startTime = 0;
//         endTime = 0;
//         distanceTime = 0;
//         isMove = false;
//     });
// };



/*实现一个上下滑动的效果*/
// var UpDownSlide = function () {
//     var parentBox = document.querySelector("welcome_content");
//     var childBox = document.querySelector("ul");
//     var startY = 0;
//     var distanceY = 0;
//     var moveY = 0;
//     var currentY = 0;
//     var isMove = false;
//
//     var addTransition = function () {
//         childBox.style.transition = "all 0.5s";
//         childBox.style.webkitTransition = "all 0.5s";
//     }
//     /*清除过渡*/
//     var removeTransition = function () {
//         childBox.style.transition = "none";
//         childBox.style.webkitTransition = "none";
//     }
//     /*图片位移*/
//     var setTranslateY = function (translateY) {
//         childBox.style.transform = 'translateY('+translateY+'px)';
//         childBox.style.webkitTransform = 'translateY('+translateY+'px)';/*兼容*/
//     };
//
//     childBox.addEventListener("touchstart",function (e) {
//         startY = e.touches[0].clientY;
//     });
//     childBox.addEventListener("touchmove",function (e) {
//         moveY = e.touches[0].clientY;
//         distanceY = moveY - startY;
//         var translateY = currentY + distanceY;
//
//         childBox.style.transform = 'translateY('+translateY+'px)'
//         childBox.style.webkitTransform = 'translateY('+translateY+'px)'
//         isMove = true;
//     });
//     childBox.addEventListener("touchend",function (e) {
//         currentY = currentY +distanceY;
//         if(isMove){
//             if(Math.abs(distanceY) > 30){
//                 if(distanceY > 0){
//                     /*往下滑*/
//                     addTransition();
//                     setTranslateY(currentY - distanceY);
//                 }
//                 if(distanceY < 0){
//                     /*向上滑*/
//                     addTransition();
//                     setTranslateY(currentY - distanceY);
//                 }
//             }
//         }
//         startY = 0;
//         currentY = 0;
//         distanceY = 0;
//         isMove = false;
//         moveY = 0;
//     });
//
// };

$(function () {
    FastClick.attach(document.body);
    // var testA,testB,testC,testD,testE;
    // testA = $(".overview1");
    // testB = $(".college_intro");
    // testC = $(".overview_njupt");
    // testD = $(".slide1");
    // testE = $(".freshman_zone");
    // testF = $(".back1");
    // testA.one('click',function () {
    //     testB.removeClass("hidden");
    //     testC.addClass('hidden');
    //     return false;
    // });
    // /*给click事件先“解绑”再“绑定”，否则click事件会执行两次，123会在控制台输出两次*/
    // testD.unbind('click').click(function () {
    //     console.log("123");
    //     testC.removeClass("hidden");
    //     testE.addClass('hidden');
    // });
    // testF.one('click',function () {
    //     console.log("345");
    //     window.history.go(-1)
    // })

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
    jump1.unbind('click').click(function () {
        jump.addClass("hidden");
        overview.removeClass("hidden");
    });
    /*用于获取南邮概况事件的变量*/
    var overview = $(".overview_njupt");
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
    overview1.unbind('click').click(function () {
        overview.addClass("hidden");
        college1.removeClass("hidden");
    })
})