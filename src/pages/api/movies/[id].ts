import type { NextApiRequest, NextApiResponse } from "next";
import movies from "../mock-data/movies";

export type Movie = {
  director: string;
  title: string;
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie | Error>
) {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        const selectedMovie = movies.find((m) => {
          return m.id === Number(req.query.id);
        });

        if (selectedMovie) res.status(200).json(selectedMovie);
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
