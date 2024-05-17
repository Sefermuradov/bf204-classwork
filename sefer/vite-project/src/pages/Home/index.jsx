import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container, Grid } from "@mui/material";
import { useGetAllMenusQuery } from "../../services/menuApi";

const Home = () => {
  const { data: menus, refetch } = useGetAllMenusQuery();
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <Grid container spacing={3}>
          {menus &&
            menus.data.map((menu) => {
              return (
                <Grid
                  key={menu._id}
                  item
                  xs={12}
                  md={12}
                  lg={6}
                  // style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={menu.image}
                        title={menu.title}
                        alt={menu.title}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {menu.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {menu.ingredient}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
