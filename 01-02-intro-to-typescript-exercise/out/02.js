"use strict";
function dayOfWeek(dayNum) {
    let Weekdays;
    (function (Weekdays) {
        Weekdays[Weekdays["Monday"] = 1] = "Monday";
        Weekdays[Weekdays["Tuesday"] = 2] = "Tuesday";
        Weekdays[Weekdays["Wednesday"] = 3] = "Wednesday";
        Weekdays[Weekdays["Thursday"] = 4] = "Thursday";
        Weekdays[Weekdays["Friday"] = 5] = "Friday";
        Weekdays[Weekdays["Saturday"] = 6] = "Saturday";
        Weekdays[Weekdays["Sunday"] = 7] = "Sunday";
    })(Weekdays || (Weekdays = {}));
    ;
    console.log(Weekdays[dayNum] || 'error');
}
dayOfWeek(1);
dayOfWeek(8);
dayOfWeek(6);
//# sourceMappingURL=02.js.map