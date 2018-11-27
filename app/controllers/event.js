import Controller from '@ember/controller';
// import models from '../models';
import $ from 'jquery';
// import { get,set } from '@ember/object';

export default Controller.extend({
  avatar:'',
  searchText:'',
  channelText:'',
  actions:{
    doSelect(...params){
      if(params[0]){
        this.searchText=params[0];
        this.set("model.searchText",params[0]);
      }
      if(params[1]){
        this.channelText=params[1];
        this.set("model.channelText",params[1]);
      }
      if(this.searchText&&this.channelText){
        $(".showActivity").eq(0).css({
          display:"block"
        })
        $(".search-button").eq(0).css({
          backgroundColor:'#D5EF7F'
        })
        $(".channel-activity").eq(0).html(this.channelText);
        if(this.searchText=="LATER"){
          let from=$("#inp input").eq(0).val().split("/");
          let to=$("#inp input").eq(1).val().split("/");
          $(".date-activity").eq(0).html(`from ${from[0]}/${from[1]} to ${to[0]}/${to[1]}`);
        }else{
          $(".date-activity").eq(0).html(this.searchText);
        }
      }else {
        $("showActivity").eq(0).css({
          display:"none"
        })
        $(".search-button").eq(0).css({
          backgroundColor:'#BABABA'
        })
      }
    },
    doChoice(){
      if(this.searchText&&this.channelText){
        let modelData = this.get("model.datas");
        let event = $(".event").eq(0);
        let search_template = $(".search-template").eq(0);
        let header = $("header").eq(0);
        search_template.css({
          left:'-2.4rem'
        })
        header.css({
          left:'0rem'
        })
        event.css({
          left:'0rem'
        })
        modelData=this.channelText=='All'?modelData:modelData.filter(item=>{
          return item.channel.name==this.channelText
        })
        this.set("model.data",modelData);
      }else {
        console.log(1);
      }
      
    }
  }
});
