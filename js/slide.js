// /*轮播切换*/
// var distanceY = 0;
// var disY = 0;
// var count = 0;
// window.onload = function () {
//     var isMove = false;
//     // var moveStartY = 0;
//     // var moveEndY = 0;
//     // var cW = document.querySelector(".common_Width");
//     var cW = $(".common_Width");
//     // var nBS = document.querySelector(".navBarSlide");
//     var nBS = $(".navBarSlide");
//     // cW.addEventListener("touchstart",function (e) {
//     //     // moveStartY = e.touches[0].clientY;
//     //     console.log("start touch");
//     // });
//     cW.on("touchstart",function () {
//         console.log("start touch");
//     });
//     cW.on("touchmove",function (e) {
//         // e.preventDefault();
//         disY = e.changedTouches[0].clientY;
//         console.log("disY: ",disY);
//         distanceY = distanceY + disY;
//         if (disY > 50){
//             isMove = true;
//             // disY = 0;
//         }
//         console.log(isMove)
//         console.log("moving...");
//         count ++;
//         // if (count > 1){
//         //     return false;
//         // }
//         console.log("count: ",count);
//     });
//     cW.on("touchend",function (e) {
//         console.log("jump into touchend")
//         // moveEndY = e.touches[0].clientY;
//         // distanceY = moveEndY - moveStartY;
//         if(isMove == true){
//             console.log("distanceY",distanceY);
//             console.log("endmove");
//             nBS.css({
//                 top: disY + 'px'
//             })
//         }else{
//             console.log("no move");
//             n();
//         }
//         isMove = false;
//         distanceY = 0;
//         console.log(distanceY);
//     });
// };
// function n() {
//     $(".navBarIcon").click(function () {
//         $(".navBarSlide").animate({
//             right: "-100vw"
//         },500);
//     });
//     $(".link").click(function () {
//         $(".navBarSlide").animate({
//             right: "100vw"
//         },500);
//     });
//     $(".restPart1").click(function () {
//         $(".navBarSlide").animate({
//             right: "100vw"
//         },500);
//     });
//     $(".restPart2").click(function () {
//         $(".navBarSlide").animate({
//             right: "100vw"
//         },500);
//     });
//
// }
