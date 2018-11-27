import Route from '@ember/routing/route';
import $ from 'jquery';
import { get,set } from '@ember/object';

export default Route.extend({
  model(params){
    return {
      data:this.store.findRecord('event',params.event_id),
      like:$.ajax({
        url:'http://localhost:3000/api/v1/events/'+params.event_id+'/likes',
        type:'GET',
        beforeSend:function(request){
          request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
        },
        success:(data)=>{
          set(this.context,"likes",data.users,true);        
        }
      }),
      participant:$.ajax({
        url:'http://localhost:3000/api/v1/events/'+params.event_id+'/participants',
        type:'GET',
        beforeSend:function(request){
          request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
        },
        success:(data)=>{
          // console.log(data.users);
          
          data.users.length?set(this.context,"isRenderParticipants",true,true):set(this.context,"isRenderParticipants",false,true);
          set(this.context,"participants",data.users,true);        
        }
      }),
      comment:$.ajax({
        url:'http://localhost:3000/api/v1/events/'+params.event_id+'/comments',
        type:'GET',
        beforeSend:function(request){
          request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
        },
        success:(data)=>{
          data.comments.length?set(this.context,"isRenderComments",true,true):set(this.context,"isRenderComments",false,true);
          set(this.context,"comments",data.comments,true);        
        }
      }),
      renderHeader:false,
      avatar:window.localStorage.getItem('avatar')
    };
  }
});
