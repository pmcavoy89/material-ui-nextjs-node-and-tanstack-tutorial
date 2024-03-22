import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Alert,
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { CircularProgress } from "@mui/material";
import { Movie } from "../api/mock-data/movies";

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
    <Box>
      <Typography variant="h2">Movie List</Typography>
      <List>
        {/* TODO: Make a reusable presentational component (MovieListItemButton) */}
        {data?.map((movie: Movie) => (
          <ListItemButton
            component="a"
            href={`movies/${movie.id}`}
            key={movie.id}
          >
            <ListItemText>
              {movie.title} - {movie.year}{" "}
            </ListItemText>
          </ListItemButton>
        ))}
      </List>
    </Box>
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
