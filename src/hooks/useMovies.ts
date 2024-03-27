import { Movie } from "@/pages/api/mock-data/movies";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// TODO: Define a return type
const useMovies = ({ page }: { page: number }): any => {
  const { data, error, isError, isFetching } = useQuery<Movie[], AxiosError>({
    queryKey: ["movies", page],
    // TODO: Move to Service Layer
    queryFn: async () => {
      const { data } = await axios.get<Movie[]>("/api/movies", {
        params: {
          page,
        },
      });

      return data;
    },
  });

  return {
    data,
    error,
    isError,
    isFetching,
  };
};

export default useMovies;
