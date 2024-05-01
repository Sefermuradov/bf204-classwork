import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function ImgMediaCard({ movie }) {
  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={movie.posterUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title} <br />
            {movie.genre} <br />
            {movie.releaseYear}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Show cast</Button>
          <Button size="small">Add cast</Button>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
