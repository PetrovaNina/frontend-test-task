export const formatDate = (str) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(str);
  return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};
