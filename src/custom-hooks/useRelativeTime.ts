
export const useRelativeTime=()=>(formatDate:any)=>{
    const dayjs = require("dayjs");
    const relativeTime = require("dayjs/plugin/relativeTime");
    dayjs.extend(relativeTime);
    return  dayjs(formatDate).fromNow() 
  
}