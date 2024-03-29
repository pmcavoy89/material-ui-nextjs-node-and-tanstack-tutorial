import { useRouter } from "next/router";
import {
  Alert,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import TheatersIcon from "@mui/icons-material/Theaters";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MovieCrumbs from "@/components/MovieCrumbs";
import useMovieDetails from "@/hooks/useMovieDetails";
import Head from "next/head";

const ActorItem = ({ name }: { name: string }) => (
  <ListItem>
    <ListItemIcon>
      <StarIcon />
    </ListItemIcon>
    {name}
  </ListItem>
);
const Director = ({ name }: { name: string }) => (
  <ListItem>
    <ListItemIcon>
      <TheatersIcon />
    </ListItemIcon>
    {name}
  </ListItem>
);
const Writer = ({ name }: { name: string }) => (
  <ListItem>
    <ListItemIcon>
      <EditNoteIcon />
    </ListItemIcon>
    {name}
  </ListItem>
);

export default function MovieDetailsPage() {
  const { query } = useRouter();
  const { data, error, isError, isFetching } = useMovieDetails({
    id: query.id,
  });

  if (isError) {
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
  // TODO: Figure out where I want to place the image
  // TODO: Write tests

  return (
    <Grid
      container
      alignItems="center"
      spacing={3}
      paddingTop={3}
      paddingLeft={7}
      paddingBottom={7}
    >
      <Grid item xs={12} md={12}>
        <MovieCrumbs>{data?.title}</MovieCrumbs>
      </Grid>
      <Grid item justifyContent="center" xs={12} md={12}>
        <Typography variant="h2" gutterBottom textAlign="center">
          {data?.title}
        </Typography>
      </Grid>
      <Grid item xs={10} sm={4} md={3}>
        <Card variant="outlined" sx={{ maxWidth: "200px" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Rating: {data?.rating}
            </Typography>
            <Typography variant="h5" component="div">
              Release year: {data?.year}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Running Time: {data?.runningTime}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        {/* TODO: Fix the hr running on too long */}
        <hr />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Typography variant="h6">
          Director: <Director name={data?.director} />
        </Typography>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Typography variant="h6">Movie Stars: </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          {data?.actors?.slice(0, 9).map((name: string) => (
            <ActorItem key={name} name={name} />
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Typography variant="h6">Writers:</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          {data?.writers.slice(0, 9).map((name: string) => (
            <Writer key={name} name={name} />
          ))}
        </List>
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
