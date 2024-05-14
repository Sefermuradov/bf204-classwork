import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  useDeleteMoviesMutation,
  useGetAllmoviesQuery,
} from "../../services/moviesApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MainMovies = () => {
  const { data: movies, refetch } = useGetAllmoviesQuery();
  const [Deletemovies] = useDeleteMoviesMutation();
  return (
    <>
      <Container sx={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            spaceBetween={30}
            slidesPerView={3}
          >
            {movies &&
              movies.map((movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 400 }}
                        image={movie.posterImg}
                        title={movie.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {movie.title}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" variant="contained">
                          <Link
                            to={`/detailmovies/${movie.id}`}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <InfoIcon />
                          </Link>
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
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </Grid>
      </Container>
    </>
  );
};

export default MainMovies;
