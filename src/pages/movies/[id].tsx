import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  Alert,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { MovieDetails } from "../api/mock-data/movies-details";
import MovieCrumbs from "@/components/MovieCrumbs";

export default function MovieDetailsPage() {
  const { query } = useRouter();
  const { data, error, isError, isFetching, isPending } = useQuery({
    queryKey: ["movies", query.id],
    queryFn: async ({ queryKey }) => {
      const [_, id] = queryKey;
      const { data } = await axios.get<MovieDetails>(`/api/movies/${id}`);

      return data;
    },
    enabled: !!query.id,
  });

  if (isFetching || isPending)
    return (
      <Stack alignItems="center">
        <CircularProgress />
      </Stack>
    );

  if (isError) {
    // TODO: Figure out the error object type definition
    return (
      <Alert severity="warning">
        Error Status Code: {error?.response?.status} <br />
        Error Message: {error?.response?.statusText}
      </Alert>
    );
  }

  // TODO: Clean up component
  // TODO: Figre out how I want to lay out the data
  // TODO: Write tests
  return (
    <>
      <MovieCrumbs>{data?.title}</MovieCrumbs>
      <Typography variant="h2" gutterBottom textAlign="center">
        {data?.title}
      </Typography>
      <Grid container spacing={6}>
        <Grid item>
          <Typography variant="h6" textAlign="center">
            Director: {data?.director}
          </Typography>
        </Grid>
        <Grid item>
          {/* TODO: Make a List Component */}
          <Typography variant="h6" textAlign="center">
            Movie Stars: {data?.actors}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" textAlign="center">
            Rating: {data?.rating}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" textAlign="center">
            {/* TODO: Reuse List Component Above  */}
            Writers: {data?.writers}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" textAlign="center">
            Year: {data?.year}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" textAlign="center">
            Running Time: {data?.runningTime}
          </Typography>
        </Grid>
        <Grid item>
          <Image
            alt={`${data.title}`}
            width={500}
            height={700}
            src={`https://image.tmdb.org/t/p/w500${data.posterPath}`}
          />
        </Grid>
      </Grid>
    </>
  );
}
