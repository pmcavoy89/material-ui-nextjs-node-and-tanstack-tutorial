import { useRouter } from "next/router";
import Image from "next/image";
import {
  Alert,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import MovieCrumbs from "@/components/MovieCrumbs";
import useMovieDetails from "@/hooks/useMovieDetails";
import Head from "next/head";

export default function MovieDetailsPage() {
  const { query } = useRouter();
  const { data, error, isError, isFetching } = useMovieDetails({
    id: query.id,
  });

  if (isError) {
    // TODO: Figure out the error object type definition
    return (
      <Alert severity="error" data-testid="movie-details-page-error">
        Error Status Code: {error?.response?.status} <br />
        Error Message: {error?.response?.statusText}
      </Alert>
    );
  }

  if (isFetching) {
    return (
      <Stack alignItems="center">
        <CircularProgress data-testid="loading-movie-details" />
      </Stack>
    );
  }

  // TODO: Clean up component
  // TODO: Figre out how I want to lay out the data
  // TODO: Write tests
  return (
    <Grid container alignItems="center" paddingLeft={7} paddingBottom={7}>
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
            alt={`${data?.title}`}
            width={500}
            height={700}
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500/${data?.posterPath}`}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

MovieDetailsPage.layout = (page: any) => (
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
      <Grid>{page}</Grid>
    </Grid>
  </>
);
