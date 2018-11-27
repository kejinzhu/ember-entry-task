import Component from '@ember/component';
import $ from "jquery";
// import "jquery-ui";

export default Component.extend({
  search:'',
  channel:'',
  searchText:'',
  channelText:'',
  fromDate:'',
  toDate:'',
  click(event){
    let target=event.originalEvent.target;
    if(target.className=='date-choice'){
      this.searchText=target.innerText;
      $(".date-choice").each(function(){
        $(this).removeClass("selected");
      });
      $(target).addClass("selected");
      if(this.searchText=="LATER"){
        $("#inp").css({
          display:"block"
        });
        $("#inp input").eq(0).val(this.fromDate);
        $("#inp input").eq(1).val(this.toDate);
      }else{
        $("#inp").css({
          display:"none"
        })
      }
    }
    if(target.className=='channel-choice'){
      this.channelText=target.innerText;
      $(".channel-choice").each(function(){
        $(this).removeClass("selected");
      })
      $(target).addClass("selected");
    }
    this.get("onClick")(this.searchText,this.channelText);
  },
  actions:{
    doSomethingWithSelectedValue(event){
      console.dir(event);
    }
  }
});
