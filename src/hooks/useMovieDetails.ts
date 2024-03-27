import { MovieDetails } from "@/pages/api/mock-data/movies-details";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// TODO: Types
const useMovieDetails = ({ id }: { id: any }): any => {
  const { data, error, isError, isFetching } = useQuery<
    MovieDetails,
    AxiosError
  >({
    queryKey: ["movies", id],
    queryFn: async ({ queryKey }) => {
      const [_, id] = queryKey;
      const { data } = await axios.get<MovieDetails>(`/api/movies/${id}`);

      return data;
    },
    enabled: !!id,
  });

  return {
    data,
    error,
    isError,
    isFetching,
  };
};

export default useMovieDetails;
