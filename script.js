const currentD = moment().format("dddd, LL");
// console.log(currentD);
let currentDay = $("#currentDay");
currentDay.text(currentD);

let currentTime = moment().format("hh:mm a")
currentDay.text(currentD)
// console.log(currentD)

let $9amInput = $('#9am')
let $10amInput = $('10am')
let $11amInput = $('11am')
let $12pmInput = $('12pm')
let $1pmInput = $('1pm')
let $2pmInput = $('2pm')
let $3pmInput = $('3pm')
let $4pmInput = $('4pm')
let $5pmInput = $('5pm')




    moment("9:00 AM", "h:mm A").isAfter(moment("8:00 AM", "h:mm A"))
    
    if (moment().isAfter(moment("8:00 AM", 'h:mm A'))) {
       $9amInput.addClass("past");}
// if (moment().isAfter("10:00")) {
//     $9amInput.addClass(".past");
