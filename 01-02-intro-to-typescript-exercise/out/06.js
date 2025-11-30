"use strict";
function reversedDayOfWeek(dayName) {
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
    console.log(Weekdays[dayName] || `error`);
}
reversedDayOfWeek('Monday');
reversedDayOfWeek('');
reversedDayOfWeek('Invalid');
//# sourceMappingURL=06.js.map