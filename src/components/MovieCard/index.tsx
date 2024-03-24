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
  <Grid item xs={3}>
    <CardActionArea href={`/movies/${id}`}>
      <Card sx={{ width: 300, height: 300 }}>
        <CardMedia
          sx={{ height: 150 }}
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
      </Card>
    </CardActionArea>
  </Grid>
);

export default MovieCard;
