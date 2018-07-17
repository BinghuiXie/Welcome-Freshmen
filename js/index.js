window.onload = function (ev) { 
    UpDownSlide();
}

/*实现一个上下滑动的效果*/
var UpDownSlide = function () {
    var parentBox = document.querySelector(".welcome_content");
    new IScroll(parentBox);
}