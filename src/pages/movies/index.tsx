import { Alert, Grid, Pagination, Stack, Typography } from "@mui/material";
import Head from "next/head";
import { CircularProgress } from "@mui/material";
import { Movie } from "../api/mock-data/movies";
import MovieCard from "@/components/MovieCard";
import useMovies from "@/hooks/useMovies";
import { useState } from "react";

const MoviesPage = () => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const { data, error, isError, isFetching } = useMovies({
    page: selectedPage,
  });

  if (isError) {
    return (
      <Alert severity="error" data-testid="movies-page-error">
        {/* TODO: Fix the typecasting */}
        Error Status Code: {error?.response?.status} <br />
        Error Message: {error?.response?.statusText}
      </Alert>
    );
  }
  if (isFetching)
    return (
      <Stack alignItems="center">
        <CircularProgress data-testid="loading-movies" />
      </Stack>
    );

  return (
    <Grid container alignItems="center" paddingLeft={7} paddingBottom={7}>
      <Grid item xs={12} textAlign="center">
        <Typography variant="h2">Movie List</Typography>
      </Grid>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.movies.map((movie: Movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </Grid>
      <Grid item xs={12} textAlign="center">
        <Pagination
          count={data?.pages}
          page={selectedPage}
          onChange={(_, page) => setSelectedPage(page)}
        />
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
