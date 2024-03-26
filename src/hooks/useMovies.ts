import { Movie } from "@/pages/api/mock-data/movies";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

// TODO: Define a return type
const useMovies = (): any => {
  const { data, error, isError, isFetching } = useQuery<Movie[], AxiosError>({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios.get<Movie[]>("/api/movies");

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
