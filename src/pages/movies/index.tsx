import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Alert, Grid, List, ListItemButton } from "@mui/material";
import Head from "next/head";
import { CircularProgress } from "@mui/material";
import { Movie } from "../api/movies";

const MoviesPage = () => {
  const { data, error, isError, isFetching } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await axios.get<Movie[]>("/api/movies");

      return data;
    },
  });

  if (isError) {
    return (
      <Alert severity="error">
        {/* TODO: Get the type for the error to be AxiosError */}
        {error.response.status} occurred with the following message;{" "}
        {error.response.data}
      </Alert>
    );
  }
  if (isFetching) return <CircularProgress />;

  return (
    <>
      <h1>Movie List</h1>
      <List>
        {data?.map((movie: any) => (
          <ListItemButton
            component="a"
            href={`movies/${movie.id}`}
            key={movie.id}
          >
            {movie.title}
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

MoviesPage.layout = (page: any) => (
  <>
    <Head>
      <title>Movies - GET</title>
    </Head>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>{page}</Grid>
    </Grid>
  </>
);

export default MoviesPage;
