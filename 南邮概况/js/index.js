window.onload = function () {
    UpDownSlide();
    /*上下滑动*/
};
var UpDownSlide = function () {
    var parentBox = document.querySelector(".overview_Content");
    var childBox = parentBox.querySelector("ul");
    var startY = 0;
    var distanceY = 0;
    var moveY = 0;
    var currentY = 0;
    var isMove = false;

    var addTransition = function () {
        childBox.style.transition = "all 0.5s";
        childBox.style.webkitTransition = "all 0.5s";
    }
    /*清除过渡*/
    var removeTransition = function () {
        childBox.style.transition = "none";
        childBox.style.webkitTransition = "none";
    }
    /*图片位移*/
    var setTranslateY = function (translateY) {
        childBox.style.transform = 'translateY('+translateY+'px)';
        childBox.style.webkitTransform = 'translateY('+translateY+'px)';/*兼容*/
    };

    childBox.addEventListener("touchstart",function (e) {
        startY = e.touches[0].clientY;
    });
    childBox.addEventListener("touchmove",function (e) {
        moveY = e.touches[0].clientY;
        distanceY = moveY - startY;
        var translateY = currentY + distanceY;

        childBox.style.transform = 'translateY('+translateY+'px)'
        childBox.style.webkitTransform = 'translateY('+translateY+'px)'
        isMove = true;
    });
    childBox.addEventListener("touchend",function (e) {
        currentY = currentY +distanceY;
        if(isMove){
            if(Math.abs(distanceY) > 30){
                if(distanceY > 0){
                    /*往下滑*/
                    addTransition();
                    setTranslateY(currentY - distanceY);
                }
                if(distanceY < 0){
                    /*向上滑*/
                    addTransition();
                    setTranslateY(currentY - distanceY);
                }
            }
        }
        startY = 0;
        currentY = 0;
        distanceY = 0;
        isMove = false;
        moveY = 0;
    });

};