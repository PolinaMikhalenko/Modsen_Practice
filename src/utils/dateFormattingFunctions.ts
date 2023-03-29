export function getWeekDay(date: Date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday ',
    'Friday',
    'Saturday',
  ];

  return days[date.getDay()];
}

export function getMonth(date: Date) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return months[date.getMonth()];
}
