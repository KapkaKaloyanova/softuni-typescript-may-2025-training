function dayOfWeek(dayNum: number): void {
    enum Weekdays {
        Monday = 1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    };

    console.log(Weekdays[dayNum] || 'error');
}

dayOfWeek(1);
dayOfWeek(8);
dayOfWeek(6);
