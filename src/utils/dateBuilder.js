export const dateBuilder = (inputDate) => {
  const months = ["January", "February", "March", "April", "May","June",
  "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
  "Friday", "Saturday"];

  const day = days[inputDate.getDay()]; // 0 - 6
  const date = inputDate.getDate(); // 1 -31
  const month = months[inputDate.getMonth()]; // 0 - 11
  const year = inputDate.getFullYear(); // 2020

  return `${day} ${date} ${month} ${year}`;
}
