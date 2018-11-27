import Component from '@ember/component';

export default Component.extend({
  flag:true,
  didRender(){
    let viewAll = document.getElementsByClassName("view-all")[0];
    let _span = viewAll.getElementsByTagName("span")[0];
    // let description = document.getElementById("description");
    let self = this;
    _span.addEventListener('click',function(){
      if(self.flag){
        viewAll.style.background="none";
        _span.innerHTML="FOLD UP"
        self.flag=false;
      }else{
        viewAll.style.background="linear-gradient(transparent,#ffffff)";
        _span.innerHTML="VIEW ALL"
        self.flag=true;
      }
    })
  }
});
