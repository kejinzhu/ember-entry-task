import { helper } from '@ember/component/helper';
// import { htmlSafe } from '@ember/template';
export function details(params) {
  let nowTimestamp = new Date().getTime(),timestamp = new Date(params[0]).getTime();
  const disTimestamp = nowTimestamp - timestamp;
  const secondMillisecond = 1000;
  const minuteMillisecond = 60000;
  const hourMillisecond = 3600000;
  const dayMillisecond = 86400000;
  const weekMillisecond = 604800000;
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
  }else if(params[1]){
    return formatTime(params[1]);
  }else if (params[2]){
    return formatTime(params[2]);
  }else if (params[3]){
    return formatTime(params[3]);
  }
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
    if(params[0]){
      return d + " " + M + " " + y + " " + h + ":" + m;
    }else if(params[1]){
      return d + " " + M + " " + y;
    }else if(params[2]){
      return h + ":" + m;
    }else if(params[3]){
      return h>12?"pm":"am";
    }
  }
}
export default helper(details)