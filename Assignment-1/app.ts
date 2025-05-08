// export function formatString(input: string, toUpper?: boolean): string {
//     var result = input;

//     return (toUpper || toUpper === undefined) ? input.toUpperCase() : input.toLowerCase();

// }

export function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
