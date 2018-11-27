import Component from '@ember/component';

export default Component.extend({
  avatar:'',
  flag:true,
  renderHeader:true,
  actions:{
    doSearch(){
      let event = document.getElementsByClassName("event")[0];
      let search_template = document.getElementsByClassName("search-template")[0];
      let header = document.getElementsByTagName("header")[0];
      if(this.flag){
        event.style.left="2.4rem";
        header.style.left="2.4rem";
        search_template.style.left="0rem";
        this.flag = false;
      }else{
        event.style.left="0rem";
        header.style.left="0rem";
        search_template.style.left="-2.4rem";
        this.flag = true;
      }
    }
  }
});
