export default class HelpersDateOptions {

    // 11 ม.ค. 66
    static activityDateFormatOption: Intl.DateTimeFormatOptions = {
        year: '2-digit',
        month: 'short',
        day: 'numeric',
    };

    // 1/2566
    static learningDateFormatOption: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
    };

    // 11 ม.ค. 2566
    static homeDateFormatOption: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    // วันจันทร์ที่ 11 พฤศจิกายน 2566
    static fullDateformatOption: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour12: false
    };

    // พฤศจิกายน 2566
    static calendarFormatOption: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long'
    }


}



