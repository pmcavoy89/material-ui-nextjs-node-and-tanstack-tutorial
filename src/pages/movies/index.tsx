import axios, { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Alert, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { CircularProgress } from "@mui/material";
import { Movie } from "../api/mock-data/movies";
import MovieCard from "@/components/MovieCard";

const MoviesPage = () => {
  const { data, error, isError, isFetching } = useQuery<Movie[], AxiosError>({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios.get<Movie[]>("/api/movies");

      return data;
    },
  });

  if (isError) {
    return (
      <Alert severity="error">
        {error?.response?.status} occurred with the following message;
        {/* TODO: Fix the typecasting */}
        {error?.response?.data as string}
      </Alert>
    );
  }
  if (isFetching) return <CircularProgress />;

  return (
    <Grid container alignItems="center" paddingLeft={7} paddingBottom={7}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h2">Movie List</Typography>
      </Grid>
      <Grid container spacing={3}>
        {data?.map((movie: Movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Grid>
    </Grid>
  );
};

MoviesPage.layout = (page: any) => (
  <>
    <Head>
      <title>Movies - GET</title>
    </Head>
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>{page}</Grid>
    </Grid>
  </>
);

export default MoviesPage;
