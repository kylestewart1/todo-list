export function sameDay(date1, date2) {
    return (date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate());
}

export function dayOfDate(date) {
    const currentTime = date.getMilliseconds() + 1000*(date.getSeconds() + 60 * (date.getMinutes() + 60 * date.get(hours)));
    const currentDate = date.getTime() - currentTime;
    return new Date(currentDate);
}

export function differenceInDays(date1, date2) {
    return (date1 - date2) / (1000 * 60 * 60 * 24);
}

export function withinOneWeekOfToday(date) {
    const now = new Date();
    const diff = differenceInDays(date, now);
    return (diff >=0 && diff <= 7) 
}