import Route from '@ember/routing/route';
import $ from 'jquery';
import { get,set } from '@ember/object';

export default Route.extend({
  model(){
    return {
      event:$.ajax({
        url:'http://localhost:3000/api/v1/user/events?type=past',
        type:'GET',
        beforeSend:function(request){
          request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
        },
        success:(data)=>{
          set(this.context,"past",data.past,true);         
        }
      })
    }
  }
});
