const currentD = moment().format("dddd, LL");
let currentDay = $("#currentDay");
let $button = $("button")

arrayof$Times = [$("#9am"), $("#10am"), $("#11am"), $("#12pm"), $("#1pm"), $("#2pm"), $("#3pm"), $("#4pm"), $("#5pm")];

arrayof$TimesID = [$("#9am").attr("id"), $("#10am").attr("id"), $("#11am").attr("id"), $("#12pm").attr("id"), $("#1pm").attr("id"), $("#2pm").attr("id"), $("#3pm").attr("id"), $("#4pm").attr("id"), $("#5pm").attr("id")];

currentDay.text(currentD)


for (i=0; i<arrayof$Times.length; i++) {
    if (moment().hour() > (9+i)) {
        arrayof$Times[i].addClass("past");
    } else if (moment().hour() == (9+i)) {
        arrayof$Times[i].addClass("present");
    } else if (moment().hour() < (9+i)) {
        arrayof$Times[i].addClass("future");
    }
    arrayof$Times[i].val(localStorage.getItem(arrayof$Times[i]));
}


$button.click(function() {
   $currEntryAtt = $(this).siblings("").attr("id");
   $currEntry = $(this).siblings("").val();
        localStorage.setItem($currEntryAtt, $currEntry)
    } 
)

console.log(moment().hour());


