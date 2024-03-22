import type { NextApiRequest, NextApiResponse } from "next";
import movies, { Movie } from "../mock-data/movies";
import moviesDetails, { MovieDetails } from "../mock-data/movies-details";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieDetails | Error>
) {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        const movieList: Movie[] = await new Promise((resolve) => {
          setTimeout(() => resolve(movies), 1000);
        });
        const selectedMovie = movieList.find((m) => {
          return m.id === Number(req.query.id);
        });

        const selectedMovieDetails = moviesDetails.find((m) => {
          return m.id === Number(req.query.id);
        });

        if (selectedMovie)
          res.status(200).json({
            ...selectedMovie,
            ...selectedMovieDetails,
          } as MovieDetails);
        else res.status(404).send(new Error("Not Found"));
      } else {
        // TODO: Send back required / look to enforce a schema validation library?
      }
      break;
    default:
      console.warn(`/movies/[id]: ${req.method} - not a supported method`);
      res.status(405).send("Method not supported.");
  }
}
