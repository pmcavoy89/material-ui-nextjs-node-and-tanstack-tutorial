import type { NextApiRequest, NextApiResponse } from "next";
import movies, { Movie } from "../mock-data/movies";
import axios from "axios";

interface MoviesResponse {
  movies: Movie[];
  pages: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MoviesResponse | string>
) {
  const { page } = req.query;

  switch (req.method) {
    case "GET":
      try {
        const movieList = await getMovies(page);

        res.status(200).json({
          movies: movieList,
          pages: 501,
        });
      } catch (e) {
        console.error("an error has happened = ", e?.response?.data);
        res.status(500).json({
          statusText: e?.response?.data?.status_message,
        });
      }
      // await new Promise((resolve) => {
      //   setTimeout(() => resolve(movies), 1000);
      // });
      break;
    default:
      console.warn(`/movies: ${req.method} - not a supported method`);
      res.status(405).send("Method not supported.");
  }
}

const getMovies = async (page: any): Promise<Movie[]> => {
  const url = `${process.env.MOVIE_DB_API}/discover/movie`;

  const { data } = await axios.get(url, {
    params: {
      api_key: `${process.env.MOVIE_DB_API_KEY}`,
      include_adult: true,
      include_video: false,
      language: "en-US",
      page,
      sort_by: "popularity.desc",
    },
  });

  const movieList: Movie[] = data?.results.map((m: any) => ({
    title: m.title,
    year: m.release_date,
    runningTime: "unknown",
    rating: "unknown",
    id: m.id,
    posterPath: m.poster_path,
  }));

  return movieList;
};
