import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Container, Grid } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteMoviesMutation,
  useGetmoviesByIDQuery,
} from "../../services/moviesApi";
import DeleteIcon from "@mui/icons-material/Delete";

const DetailMovies = () => {
  const { id } = useParams();
  const { data: movie, refetch } = useGetmoviesByIDQuery(id);
  const [Deletemovies] = useDeleteMoviesMutation(id);
  const navigate = useNavigate();
  function handleBack() {
    navigate(-1);
  }
  return (
    <>
      <Container sx={{ marginTop: "50px" }}>
        {movie && (
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            container
            spacing={3}
          >
            <Card sx={{ maxWidth: 300 }}>
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  height: 350,
                }}
                src={movie.posterImg}
                title={movie.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Release Year:</b> {movie.releaseYear}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Genre:</b> {movie.genre}
                </Typography>
              </CardContent>
              <CardActions
              // style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="small" onClick={handleBack} variant="contained">
                  back
                </Button>
                <Button
                  onClick={async (id) => {
                    await Deletemovies(id);
                    refetch();
                  }}
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  size="small"
                  color="error"
                  variant="contained"
                >
                  <DeleteIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Container>
    </>
  );
};

export default DetailMovies;
