import type { NextApiRequest, NextApiResponse } from "next";
import movies from "../mock-data/movies";

export type Movie = {
  director: string;
  title: string;
  id: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[] | Movie>
) {
  console.log("here in handler");
  switch (req.method) {
    case "GET":
      console.log("here");
      console.log("req = ", req.url);
      // if (req) {
      //   const selectedMovie = movies[req.query?.id as unknown as number];
      //   console.log("selectedMovie = ", selectedMovie);
      //   res.status(200).json(selectedMovie);
      // }
      break;
    default:
      console.log("no match");
  }
  console.log("getting movies");
  const movieList: Movie[] = await new Promise((resolve) => {
    setTimeout(() => resolve(movies), 1000);
  });
  res.status(200).json(movieList);

  console.log("after timeout");
}
