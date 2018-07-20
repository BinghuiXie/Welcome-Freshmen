var DOM = document.querySelector(".freshman_zone")
var DOM1 = document.querySelector(".box1");
var DOM2 = document.querySelector(".overview_njupt");
var DOM3 = document.querySelector(".overview_icon");
var DOM4 = document.querySelector(".overview1");
var DOM5 = document.querySelector(".college_intro");
window.onload = function (ev) {
    /*函数中第一个参数是需要隐藏的，第二个是被点击的，第三个是需要显示的*/
    Judge_touch(DOM,DOM1,DOM2);
    Judge_touch(DOM2,DOM3,DOM);
    Judge_touch(DOM2,DOM4,DOM5);
}

var startTime = 0;
var endTime = 0;
var distanceTime = 0;
var isMove = false;
var Judge_touch = function (e,e1,e2) {
    e1.addEventListener("touchstart",function () {
        startTime = Date.now();
    })
    e1.addEventListener("touchmove",function () {
       isMove = true;
    });
    e1.addEventListener("touchend",function () {
       endTime = Date.now();
       distanceTime = endTime - startTime;

       if(isMove == false && distanceTime < 150){
           e1.style.pointerEvents = "auto";
           e.style.display="none";
           // e1.style.pointerEvents = "none";

           //DOM.classList.add("hidden");
           console.log(distanceTime);

           e2.classList.remove("hidden");
           e2.style.pointerEvents = "none";
           // DOM2.classList.remove("hidden");
       }
       startTime = 0;
       endTime = 0;
       distanceTime = 0;
       isMove = false;
    });
};