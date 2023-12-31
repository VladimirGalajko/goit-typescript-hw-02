enum IsWeekend {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
} 

function isWeekend(status: IsWeekend): boolean {
  return (status === IsWeekend.Saturday || status === IsWeekend.Sunday);
}

