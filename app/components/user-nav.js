import Component from '@ember/component';

export default Component.extend({
  past_count:'',
  likes_count:'',
  goings_count:'',
  didRender(){
    let navLink = document.getElementById("nav-link");
    let allA = navLink.getElementsByTagName("a");
    let allI = navLink.getElementsByTagName("i");
    for(let i=0;i<allA.length;i++){
      let cur = allA[i];
      cur.addEventListener('click',function(){
        if(i==0){
          allI[0].className="icon-like";
          allI[1].className="icon-check-outline";
          allI[2].className="icon-past-outline";
        }else if(i==1){
          allI[0].className="icon-like-outline";
          allI[1].className="icon-check";
          allI[2].className="icon-past-outline";
        }else if(i==2){
          allI[0].className="icon-like-outline";
          allI[1].className="icon-check-outline";
          allI[2].className="icon-past";
        }
        for(var j = 0;j<allA.length;j++){
          allA[j].style.color="#8C8C8C";
        }
        this.style.color = "#AECB4F";
      })
    }
  }
});
