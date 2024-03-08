function formatDate(inputDateString) {
  // Parse the input date string
  // Assuming the format is "3/8/2024, 9:03:12 PM"
  const [datePart, timePart] = inputDateString.split(", ");
  const [month, day, year] = datePart.split("/");
  const [hours, minutes] = timePart.split(":");

  // Create a new Date object (note: month is 0-indexed)
  const date = new Date(year, month - 1, day, hours, minutes);

  // Format the date
  const formattedDay = String(date.getDate()).padStart(2, "0");
  const formattedMonth = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const formattedYear = date.getFullYear();

  // Combine into the desired format
  return `${formattedDay}.${formattedMonth}.${formattedYear}`;
}

module.exports = formatDate;
