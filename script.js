const currentD = moment().format("dddd, LL");
// console.log(currentDay);
let currentDay = $("#currentDay");
currentDay.text(currentD);

let currentTime = moment.format("hh:mm a")
currentDay.text(currentD)