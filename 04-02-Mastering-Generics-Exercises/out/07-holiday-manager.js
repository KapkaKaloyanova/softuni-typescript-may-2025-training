"use strict";
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    _startDate = new Date();
    _endDate = new Date();
    constructor(startDate, endDate) {
        this._startDate = startDate;
        this.end = endDate;
        this.start = startDate;
    }
    set start(val) {
        if (val > this._endDate) {
            throw new Error('Start date cannot be after end date');
        }
        this._startDate = val;
    }
    set end(val) {
        if (val < this._startDate) {
            throw new Error('End date cannot be before start date');
        }
        this._endDate = val;
    }
    getInfo() {
        return `Holiday: ${this._startDate.getDate()}/${this._startDate.getMonth() + 1}/${this._startDate.getFullYear()}  - ${this._endDate.getDate()}/${this._endDate.getMonth() + 1}/${this._endDate.getFullYear()}`;
    }
}
class HolidayManager {
    holidays = new Map(); // 
    reserveVacation(holiday, vacationType) {
        this.holidays.set(holiday, vacationType);
    }
    listReservations() {
        let result = [];
        Array.from(this.holidays.entries()).forEach(entry => {
            result.push(`${entry[0].getInfo()} => ${entry[1]}`);
        });
        return result.join('\n');
    }
}
// Input 1
let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));
let holidayManager = new HolidayManager();
holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
console.log(holidayManager.listReservations());
// Input 2
// let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
// let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));
// let holidayManager = new HolidayManager<Holiday, BeachVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, BeachVacation.Sea);
// console.log(holidayManager.listReservations())
//Input 3
// let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
// let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));
//Input 4
// let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
// let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2024, 3, 17));
// let holidayManager = new HolidayManager<Holiday, MountainVacation>();
// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);
// console.log(holidayManager.listReservations())
//# sourceMappingURL=07-holiday-manager.js.map