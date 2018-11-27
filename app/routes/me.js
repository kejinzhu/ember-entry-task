import Route from '@ember/routing/route';
import $ from 'jquery';
import { get,set } from '@ember/object';

export default Route.extend({
  model(){
    return {
      event:$.ajax({
        url:'http://localhost:3000/api/v1/user/events?type=liked',
        type:'GET',
        beforeSend:function(request){
          request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
        },
        success:(data)=>{
          var reg = new RegExp("(^|&)type=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          r?set(this.context,"type",false,true):set(this.context,"type",true,true);
          set(this.context,"liked",data.liked,true);         
        }
      }),
      user:$.ajax({
        url:'http://localhost:3000/api/v1/user',
        type:'GET',
        beforeSend:function(request){
          request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
        },
        success:(data)=>{
          set(this.context,"username",data.username,true);    
          set(this.context,"email",data.email,true);  
          set(this.context,"avatar",data.avatar,true);    
          set(this.context,"goings_count",data.goings_count,true);    
          set(this.context,"likes_count",data.likes_count,true);  
          set(this.context,"past_count",data.past_count,true);  
          data.likes_count?set(this.context,"isRenderLike",true,true):set(this.context,"isRenderLike",false,true); 
          data.goings_count?set(this.context,"isRenderGoing",true,true):set(this.context,"isRenderGoing",false,true); 
          data.past_count?set(this.context,"isRenderPast",true,true):set(this.context,"isRenderPast",false,true); 
        }
      }),
      renderHeader:false
    }
  }
});
