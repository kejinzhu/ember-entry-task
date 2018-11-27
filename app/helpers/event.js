import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
export function event(params) {
  let images = params[1],
    goings_count = params[2],
    likes_count = params[3],
    me_going = params[4],
    me_likes = params[5];
    goings_count = goings_count?goings_count:'',
    likes_count = likes_count?likes_count:'';
  let nowTimestamp = new Date().getTime(),timestamp = new Date(params[0]).getTime();
  const disTimestamp = nowTimestamp - timestamp;
  const secondMillisecond = 1000;
  const minuteMillisecond = 60000;
  const hourMillisecond = 3600000;
  const dayMillisecond = 86400000;
  const weekMillisecond = 604800000;
  function formatTime(time){
    time=new Date(time);
    let d = time.getDate(),
      M = time.getMonth() + 1,
      y = time.getFullYear(),
      h = time.getHours(),
      m = time.getMinutes();
      h=h>=10?h:"0"+h;
      m=m>=10?m:"0"+m;
    switch (M) {
      case 1:
        M = 'Jan';
        break;
      case 2:
        M = 'Feb';
        break;
      case 3:
        M = 'Mar';
        break;
      case 4:
        M = 'Apr';
        break;
      case 5:
        M = 'May';
        break;
      case 6:
        M = 'Jun';
        break;
      case 7:
        M = 'Jul';
        break;
      case 8:
        M = 'Aug';
        break;
      case 9:
        M = 'sept';
        break;
      case 10:
        M = 'Oct';
        break;
      case 11:
        M = 'Nev';
        break;
      case '12':
        M = 'Dec';
        break;
      default:
        break;
    }
    return d + " " + M + " " + y + " " + h + ":" + m;
  }
  if(params[0]){
    if (disTimestamp < secondMillisecond) {
      return '1 second ago';
    }
    if (disTimestamp < minuteMillisecond) {
        return `${Math.ceil(disTimestamp / secondMillisecond)} seconds ago`;
    }
    if (disTimestamp < hourMillisecond) {
        return `${Math.ceil(disTimestamp / minuteMillisecond)} minutes ago`;
    }
    if (disTimestamp < dayMillisecond) {
        return `${Math.ceil(disTimestamp / hourMillisecond)} hours ago`;
    }
    if (disTimestamp < weekMillisecond) {
        return `${Math.ceil(disTimestamp / dayMillisecond)} days ago`;
    }
    return formatTime(params[0]);
  } else if (images) {
    let img = null;
    img = images.length ? images[0] : null;
    if(img){
      return htmlSafe(`<img src=${img} alt="">`);
    }
  }else{
    if(!me_going&&!me_likes){
      return htmlSafe(`<span class="go">
      <span class="icon icon-check green"></span>
      <span class="txt">${goings_count}&nbsp;I am going!</span>
    </span>
    <span class="like">
      <span class="icon icon-like red"></span>
      <span class="txt">${likes_count}&nbsp;I like it</span>
    </span>`);
    }else if(me_going&&!me_likes){
      return htmlSafe(`<span class="go">
      <span class="icon icon-check-outline purple"></span>
      <span class="txt">${goings_count}&nbsp;Going</span>
    </span>
    <span class="like">
      <span class="icon icon-like red"></span>
      <span class="txt">${likes_count}&nbsp;I like it</span>
    </span>`);
    }else if(!me_going&&me_likes){
      return htmlSafe(`<span class="go">
      <span class="icon icon-check green"></span>
      <span class="txt">${goings_count}&nbsp;I am going!</span>
    </span>
    <span class="like">
      <span class="icon icon-like-outline purple"></span>
      <span class="txt">${likes_count}&nbsp;Likes</span>
    </span>`);
    }else{
      return htmlSafe(`<span class="go">
      <span class="icon icon-check-outline purple"></span>
      <span class="txt">${goings_count}&nbsp;Going</span>
    </span>
    <span class="like">
      <span class="icon icon-like-outline purple"></span>
      <span class="txt">${likes_count}&nbsp;Likes</span>
    </span>`);
    }
  }
}
export default helper(event)
