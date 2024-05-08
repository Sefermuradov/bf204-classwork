import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
const ClientCountries = () => {
  const [countries, setCountries] = useOutletContext();
  return (
    <Container>
      <Grid container spacing={2}>
        {countries &&
          countries.map((country) => {
            return (
              <Grid key={country.id} item xs={12} sm={6} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={country.flagImg}
                    title={country.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {country.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>capital:</b> {country.capital}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <b>population:</b> {country.population}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Link to={`/countries/${country.id}`}>Detail</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default ClientCountries;
