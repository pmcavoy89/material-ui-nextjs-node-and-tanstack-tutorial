import { Breadcrumbs, Button, Link } from "@mui/material";

const MovieCrumbs = ({ children }: any) => (
  <Breadcrumbs aria-label="breadcrumb">
    <Button href="/movies">Movie List</Button>
    <Button disabled>{children}</Button>
  </Breadcrumbs>
);

export default MovieCrumbs;
