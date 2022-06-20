export function labelFromDays(days: number[]): string {
  switch (days.length) {
    case 0:
      return "";
    case 1:
      return String(days[0]);
    case 2:
      const delimiter = 1 + days[0] === days[1] ? " – " : ", ";

      return days[0] + delimiter + days[1];
    default:
      return `${days[0]} – ${days[2]}`;
  }
}
