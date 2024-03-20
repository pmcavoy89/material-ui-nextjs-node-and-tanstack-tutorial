import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Checkbox,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import Head from "next/head";
import { CircularProgress } from "@mui/material";

const MoviesPage = ({ children }: any) => {
  const { data, error, isError, isFetching } = useQuery({
    queryKey: ["movie-list"],
    queryFn: async () => {
      const { data } = await axios.get("/api/movies");

      return data;
    },
  });

  if (isError) return <>Failed to load</>;
  if (isFetching) return <CircularProgress />;
  return (
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
        <Grid item>
          <h1>Movie List</h1>
          <List>
            {data.map((movie) => (
              <ListItemButton
                component="a"
                href={`movies/${movie.id}`}
                key={movie.id}
              >
                {movie.title}
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default MoviesPage;
