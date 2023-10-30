export function abbreviateNumber(
  number: number,
  precision: number = 2
): string {
  const abbreviations: string[] = ["", "k", "M", "B", "T"];
  let index: number = 0;

  while (number >= 1000 && index < abbreviations.length - 1) {
    number /= 1000;
    index++;
  }

  return number.toFixed(precision) + abbreviations[index];
}

export const getDate = (timestamp: string) => {
  const parsedDate = new Date(timestamp);

  // Define options for formatting the date
  const options = { year: "numeric", month: "long", day: "numeric" };

  // Format the parsed date
  const formattedDate = parsedDate.toLocaleDateString();

  console.log(formattedDate);
  return formattedDate;
};
