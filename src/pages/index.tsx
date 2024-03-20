import { Grid, Paper, Typography } from "@mui/material";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Material UI, NextJS, Node and Tanstack Tutorial</title>
      </Head>
      <Typography variant="h1" gutterBottom textAlign="center">
        Material UI, NextJS, Node and Tanstack Tutorial
      </Typography>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom textAlign="center">
            Material UI
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom textAlign="center">
            NextJS
          </Typography>
          {/* TODO: Figure out how to get below this */}
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item xs={12}>
              Talking point about NextJS.
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom textAlign="center">
            Node
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3" gutterBottom textAlign="center">
            Tanstack
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
