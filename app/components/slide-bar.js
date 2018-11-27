import Component from '@ember/component';

export default Component.extend({
  slideData: '',
  didRender() {
    var slideBar = document.getElementById("slideBar"),
      lis = slideBar.getElementsByTagName("li");
    var startx , starty ;
    var width = parseFloat(getComputedStyle(lis[0])["width"]) + parseFloat(getComputedStyle(lis[0])["marginRight"]);
    slideBar.style.width = width * lis.length + "rem";
    //获得角度
    function getAngle(angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    }

    //根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;

        //如果滑动距离太短
        if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
            return result;
        }

        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -45) {
            result = 1;
        } else if (angle > 45 && angle < 135) {
            result = 2;
        } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
            result = 3;
        } else if (angle >= -45 && angle <= 45) {
            result = 4;
        }

        return result;
    }
    //手指接触屏幕
    slideBar.addEventListener("touchstart", function(e) {
      startx = e.touches[0].pageX;
      starty = e.touches[0].pageY;
    }, false);
    slideBar.addEventListener("touchend", function(e) {
      var endx, endy,distance,left=parseFloat(getComputedStyle(slideBar)["left"]),
      maxLeft=parseFloat(slideBar.style.width)-parseFloat(slideBar.parentNode.clientWidth);
      endx = e.changedTouches[0].pageX;
      endy = e.changedTouches[0].pageY;
      distance=endx-startx;
      var direction = getDirection(startx, starty, endx, endy);
      if(direction===3){
        if(left>-maxLeft){
          slideBar.style.left = parseFloat(left)+distance+"px";
          left = parseFloat(slideBar.style.left);
        }else{
          slideBar.style.left = -maxLeft+"px";
        }
      }else if(direction===4){
        if(left<0){
          slideBar.style.left = parseFloat(left)+distance+"px";
          left = parseFloat(slideBar.style.right);
        }else{
          slideBar.style.left = "0px";
        }
      }
      // console.log(left);
      
  }, false);

  }
});
