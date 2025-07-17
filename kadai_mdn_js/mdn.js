const today = new Date();
const year = today.getFullYear() + "年";
const mounth = today.getMonth()+1 + "月";
const date = today.getDate() + "日";
console.log(year + mounth + date);