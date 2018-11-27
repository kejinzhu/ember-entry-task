import Route from '@ember/routing/route';
import $ from 'jquery';
import { get,set } from '@ember/object';

export default Route.extend({
  model(){
    let obj={
      All:"All"
    };
    let now = new Date();
    let from,to;
    from=now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear();
    to=(now.getDate()+1)+"/"+(now.getMonth()+1)+"/"+now.getFullYear();
    $.ajax({
      url:'http://localhost:3000/api/v1/events',
      type:'GET',
      beforeSend:function(request){
        request.setRequestHeader('X-BLACKCAT-TOKEN',get(document.cookie.match(/apiKey\=([^;]*)/),'1'))
      },
      success:(data)=>{
        set(this.context,"data",data.events,true);  
        set(this.context,"datas",data.events,true); 
        data.events.forEach(item=>{
          obj[item.channel.name]=item.channel.name;
        })
        set(this.context,"channel",Object.keys(obj),true);        
      }
    })
    return {
      avatar:window.localStorage.getItem('avatar'),
      data:this.store.findAll('event'),
      renderHeader:true,
      search:["ANYTIME","TODAY","TOMORROW","THIS WEEK","THIS MONTH","LATER"],
      fromDate:from,
      toDate:to
    }
  }
});