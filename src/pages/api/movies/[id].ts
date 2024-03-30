import type { NextApiRequest, NextApiResponse } from "next";
import { MovieDetails } from "../mock-data/movies-details";
import axios from "axios";
import { MOVIE_DB_API, MOVIE_DB_API_KEY } from "@/constants";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<MovieDetails | Error>
) {
  switch (req.method) {
    case "GET":
      if (req.query.id) {
        // TODO: Clean up code
        try {
          const { id: movieId } = req.query;

          const movieDetailsUrl = `${MOVIE_DB_API}/movie/${movieId}`;
          const movieCreditsUrl = `${MOVIE_DB_API}/movie/${movieId}/credits`;

          const axiosConfig = {
            params: { api_key: `${MOVIE_DB_API_KEY}` },
          };
          const movieDetailsResponse = axios.get(movieDetailsUrl, {
            params: {
              ...axiosConfig.params,
              append_to_response: "release_dates",
            },
          });
          const movieCreditsResponse = axios.get(movieCreditsUrl, axiosConfig);

          const [{ data: movieDetailsData }, { data: movieCreditsData }] =
            await Promise.all([movieDetailsResponse, movieCreditsResponse]);

          const response = {
            runningTime: movieDetailsData?.runtime,
            year: movieDetailsData?.release_date,
            title: movieDetailsData?.title,
            writers: movieCreditsData.crew
              .filter((c: any) => c.job === "Writer")
              .map((c: any) => c.name),
            director: movieCreditsData.crew
              .filter((c: any) => c.job === "Director")
              .map((c: any) => c.name),
            actors: movieCreditsData.cast.map((c: any) => c.name),
            filmRating: movieDetailsData.release_dates?.results?.find(
              ({ iso_3166_1 }: { iso_3166_1: string }) => iso_3166_1 === "US"
            ).release_dates[0].certification,
            posterPath: movieDetailsData?.backdrop_path,
            voteAverage: movieDetailsData?.vote_average,
          };

          res.status(200).json({
            ...response,
          } as MovieDetails);
        } catch (e) {
          res.status(e?.response.status ?? 500).json({
            statusText: e?.response?.statusText,
          });
        }
        // const movieList: Movie[] = await new Promise((resolve) => {
        //   setTimeout(() => resolve(movies), 1000);
        // });
        // const selectedMovie = movieList.find((m) => {
        //   return m.id === Number(req.query.id);
        // });

        // const selectedMovieDetails = moviesDetails.find((m) => {
        //   return m.id === Number(req.query.id);
        // });

        // if (selectedMovie)
        // res.status(200).json({
        //   ...selectedMovie,
        //   ...selectedMovieDetails,
        // } as MovieDetails);
        // else res.status(404).send(new Error("Not Found"));
      } else {
        // TODO: Send back required / look to enforce a schema validation library?
      }
      break;
    default:
      console.warn(`/movies/[id]: ${req.method} - not a supported method`);
      res.status(405).send("Method not supported.");
  }
}
