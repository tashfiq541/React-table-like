export const genres = [
  { id: "g01", name: "Action" },
  { id: "g02", name: "Comedy" },
  { id: "g03", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
