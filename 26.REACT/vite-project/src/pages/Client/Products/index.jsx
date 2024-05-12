import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Link, useOutletContext } from "react-router-dom";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

const ClientProducts = () => {
  const [products, setProducts] = useOutletContext();
  
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((x) => {
    return x.name.toLowerCase().trim().includes(query.toLowerCase().trim());
  });
  return (
    <>
      <Container sx={{ marginTop: "50px" }}>
        <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
          <TextField
            id="standard-basic"
            label="Search Product"
            variant="outlined"
            onChange={(e) => setQuery(e.target.value)}
          />
          <FormControl sx={{ width: "200px" }}>
            <InputLabel id="demo-simple-select-label">Sort by Name</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={""}
              label="Age"
              onChange={() => {}}
            >
              <MenuItem value={""} selected disabled>
                Sort by Name
              </MenuItem>
              <MenuItem value={"a-z"}>A-Z</MenuItem>
              <MenuItem value={"z-a"}>Z-A</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid container spacing={3}>
          {filteredProducts &&
            filteredProducts.map((product) => {
              return (
                <Grid key={product.id} item xs={12} sm={6} md={6} lg={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 340 }}
                      image={product.imgSrc}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Price:</b> {product.salePrice}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Discount:</b> {product.discountPercentage}%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Stock Count:</b> {product.stockCount}
                      </Typography>
                    </CardContent>
                    <CardActions
                    // style={{
                    //   display: "flex",
                    //   justifyContent: "center",
                    // }}
                    >
                      <Button size="small" variant="contained">
                        <Link
                          to={`/products/${product.id}`}
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
                      <Button size="small" variant="contained" color="error">
                        <Link
                          to={`/basket`}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ShoppingBasketIcon />
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default ClientProducts;
