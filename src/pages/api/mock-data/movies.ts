export interface Movie {
  title: string;
  // TODO: Clean up the numbers
  year: string | number;
  runningTime: string;
  rating: string;
  id: number;
  posterPath?: string;
}

const movies: Movie[] = [
  {
    title: "The Shawshank Redemption",
    year: 1994,
    runningTime: "2h 22m",
    rating: "R",
    id: 1,
  },
  {
    title: "The Godfather",
    year: 1972,
    runningTime: "2h 55m",
    rating: "R",
    id: 2,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    runningTime: "2h 32m",
    rating: "PG-13",
    id: 3,
  },
  {
    title: "The Godfather Part II",
    year: 1974,
    runningTime: "3h 22m",
    rating: "R",
    id: 4,
  },
  {
    title: "12 Angry Men",
    id: 5,
    year: 1957,
    runningTime: "1h 36m",
    rating: "Approved",
  },
  {
    title: "Schindler's List",
    id: 6,
    year: 1993,
    runningTime: "3h 15m",
    rating: "R",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    id: 7,
    year: 2003,
    runningTime: "3h 21m",
    rating: "PG-13",
  },
  {
    title: "Pulp Fiction",
    id: 8,
    year: 1994,
    runningTime: "2h 34m",
    rating: "R",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    id: 9,
    year: 2001,
    runningTime: "2h 58m",
    rating: "PG-13",
  },
  {
    title: "The Good, the Bad and the Ugly",
    id: 10,
    year: 1966,
    runningTime: "2h 58m",
    rating: "Approved",
  },
  {
    title: "Forrest Gump",
    id: 11,
    year: 1994,
    runningTime: "2h 22m",
    rating: "PG-13",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    id: 12,
    year: 2002,
    runningTime: "2h 59m",
    rating: "PG-13",
  },
  {
    title: "Fight Club",
    id: 13,
    year: 1999,
    runningTime: "2h 19m",
    rating: "R",
  },
];

export default movies;
