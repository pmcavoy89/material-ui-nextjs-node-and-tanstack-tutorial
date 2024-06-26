import { Movie } from "./movies";

export interface MovieDetails extends Movie {
  actors: string[];
  director: string;
  voteAverage?: number;
  writers: string[];
}

const movies: MovieDetails[] = [
  {
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    writers: ["Stephen King", "Frank Darabont"],
    director: "Frank Darabont",
    title: "The Shawshank Redemption",
    year: 1994,
    runningTime: "2h 22m",
    rating: "R",
    id: 1,
  },
  {
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    writers: ["Mario Puzo", "Francis Ford Coppola"],
    director: "Francis Ford Coppola",
    title: "The Godfather",
    year: 1972,
    runningTime: "2h 55m",
    rating: "R",
    id: 2,
  },
  {
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    writers: ["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
    director: "Christopher Nolan",
    title: "The Dark Knight",
    year: 2008,
    runningTime: "2h 32m",
    rating: "PG-13",
    id: 3,
  },
  {
    actors: ["Al Pacino", "Robert De Niro", "Robert Duvall"],
    writers: ["Mario Puzo", "Francis Ford Coppola"],
    director: "Francis Ford Coppola",
    title: "The Godfather Part II",
    year: 1974,
    runningTime: "3h 22m",
    rating: "R",
    id: 4,
  },
  {
    actors: ["Henry Fonda", "Lee J. Cobb", "Martin Balsam"],
    writers: ["Reginald Rose"],
    director: "Sidney Lumet",
    title: "12 Angry Men",
    id: 5,
    year: 1957,
    runningTime: "1h 36m",
    rating: "Approved",
  },
  {
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    writers: ["Thomas Keneally", "Steven Zaillian"],
    director: "Steven Spielberg",
    title: "Schindler's List",
    id: 6,
    year: 1993,
    runningTime: "3h 15m",
    rating: "R",
  },
  {
    actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen"],
    writers: ["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
    director: "Peter Jackson",
    title: "The Lord of the Rings: The Return of the King",
    id: 7,
    year: 2003,
    runningTime: "3h 21m",
    rating: "PG-13",
  },
  {
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    writers: ["Quentin Tarantino", "Roger Avary"],
    director: "Quentin Tarantino",
    title: "Pulp Fiction",
    id: 8,
    year: 1994,
    runningTime: "2h 34m",
    rating: "R",
  },
  {
    actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    writers: ["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
    director: "Peter Jackson",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    id: 9,
    year: 2001,
    runningTime: "2h 58m",
    rating: "PG-13",
  },
  {
    actors: ["Clint Eastwood", "Eli Wallach", "Lee Van Cleef"],
    writers: ["Luciano Vincenzoni", "Sergio Leone", "Agenore Incrocci"],
    director: "Sergio Leone",
    title: "The Good, the Bad and the Ugly",
    id: 10,
    year: 1966,
    runningTime: "2h 58m",
    rating: "Approved",
  },
  {
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    writers: ["Winston Groom", "Eric Roth"],
    director: "Robert Zemeckis",
    title: "Forrest Gump",
    id: 11,
    year: 1994,
    runningTime: "2h 22m",
    rating: "PG-13",
  },
  {
    actors: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
    writers: ["J.R.R. Tolkien", "Fran Walsh", "Philippa Boyens"],
    director: "Peter Jackson",
    title: "The Lord of the Rings: The Two Towers",
    id: 12,
    year: 2002,
    runningTime: "2h 59m",
    rating: "PG-13",
  },
  {
    actors: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
    writers: ["Chuck Palahniuk", "Jim Uhls"],
    director: "David Fincher",
    title: "Fight Club",
    id: 13,
    year: 1999,
    runningTime: "2h 19m",
    rating: "R",
  },
];

export default movies;
