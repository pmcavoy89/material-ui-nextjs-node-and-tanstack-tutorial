import type { NextApiRequest, NextApiResponse } from "next";
import movies from "../mock-data/movies";

export type Movie = {
  director: string;
  title: string;
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[] | string>
) {
  switch (req.method) {
    case "GET":
      const movieList: Movie[] = await new Promise((resolve) => {
        setTimeout(() => resolve(movies), 1000);
      });

      res.status(200).json(movieList);
      break;
    default:
      console.warn(`/movies: ${req.method} - not a supported method`);
      res.status(405).send("Method not supported.");
  }
}
