export function getWeekDay(date: Date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
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

export function formatDate(date: Date) {
  const weekDay = getWeekDay(date);
  const day = date.getDate();
  const month = getMonth(date);
  const year = date.getFullYear();

  return `${weekDay}, ${day} ${month} ${year}`;
}
