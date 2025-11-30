function reversedDayOfWeek(dayName : string): void {
    enum Weekdays {
        Monday=1,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    }
    console.log(Weekdays[dayName as keyof typeof Weekdays] || `error`)
}

reversedDayOfWeek('Monday');
reversedDayOfWeek('');
reversedDayOfWeek('Invalid')
