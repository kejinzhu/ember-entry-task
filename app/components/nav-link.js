import Component from '@ember/component';

export default Component.extend({
  didRender(){
    let navLink = document.getElementById("nav-link");
    let allA = navLink.getElementsByTagName("a");
    let allI = navLink.getElementsByTagName("i");
    let details = document.getElementsByClassName("details")[0];
    let top = navLink.offsetTop-40;
    for(let i=0;i<allA.length;i++){
      let cur = allA[i];
      cur.addEventListener('click',function(){
        if(i==0){
          allI[0].className="icon-info";
          allI[1].className="icon-people-outline";
          allI[2].className="icon-comment-outline";
          details.style.top="0.4rem";
        }else if(i==1){
          allI[0].className="icon-info-outline";
          allI[1].className="icon-people";
          allI[2].className="icon-comment-outline";
          details.style.top=-top+"px";
        }else if(i==2){
          allI[0].className="icon-info-outline";
          allI[1].className="icon-people-outline";
          allI[2].className="icon-comment";
          details.style.top=-top+"px";
        }
        for(var j = 0;j<allA.length;j++){
          allA[j].style.color="#8C8C8C";
        }
        this.style.color = "#AECB4F";
      })
    }
  }
});
