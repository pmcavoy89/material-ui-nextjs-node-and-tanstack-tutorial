import { Movie } from "@/pages/api/mock-data/movies";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const MovieCard = ({
  title,
  year,
  runningTime,
  rating,
  id,
  posterPath,
}: Movie) => (
  <Grid item xs={4} sm={4} md={3} textAlign="center">
    <CardActionArea href={`/movies/${id}`}>
      {/* TODO: Figure a better way to layout the content in the card for different title lengths */}
      <Card sx={{ width: 300, height: 750 }}>
        <CardMedia
          sx={{ height: 500 }}
          image={`https://image.tmdb.org/t/p/w500/${posterPath}`}
          title={`${title}`}
        />
        <CardContent>
          <List>
            <ListItem>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="body2" color="text.secondary">
                Rated: {rating}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year: {year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {/* TODO: Fix the formatting of Running Time */}
                Running Time: {runningTime}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </CardActionArea>
  </Grid>
);

export default MovieCard;
