import { Movie } from "@/pages/api/mock-data/movies";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const MovieCard = ({ title, year, runningTime, rating, id }: Movie) => (
  <Grid item>
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea href={`/movies/${id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={`images/${id}.jpg`}
          title={`${title}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rated: {rating} Year: {year} Running Time: {runningTime}{" "}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
);

export default MovieCard;
