import { useEffect, useState } from "react";
import { getAll } from "../../services/index";
import { endpoint } from "../../services/constant";
import ImgMediaCard from "../Card";
import { Container, Grid } from "@mui/material";
import styles from"./index.module.css"
function Cards() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getAll(endpoint.movies)
      .then((response) => {
        setMovies(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(movies);
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          {movies &&
            movies.map((movie) => {
              return <ImgMediaCard key={movie.id} movie={movie} />;
            })}
        </Grid>
      </Container>
    </>
  );
}

export default Cards;
