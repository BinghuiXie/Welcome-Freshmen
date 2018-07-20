/*轮播切换*/
window.onload = function () {
   $(".slide1").click(function () {
       console.log("123");
        $("#slideAnimate").carousel(11);
   });
    $(".back1").click(function () {
        $("#slideAnimate").carousel(0);
    });
};