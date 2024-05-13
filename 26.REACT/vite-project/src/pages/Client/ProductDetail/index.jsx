import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Container, Grid } from "@mui/material";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { getOne } from "../../../services";
import { endpoint } from "../../../services/constant";
import { useEffect, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [products] = useOutletContext();
  const { id } = useParams();
  // useEffect(() => {
  //   getOne(endpoint.products, id)
  //     .then((response) => {
  //       setProduct(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    setProduct(products.find((x) => x.id == id));
  }, [id, products]);

  return (
    <>
      <Container sx={{ marginTop: "50px" }}>
        {product && (
          <Grid
            style={{ display: "flex", justifyContent: "center" }}
            container
            spacing={3}
          >
            <Card sx={{ maxWidth: 550 }}>
              <img
                style={{
                  display: "block",
                  margin: "0 auto",
                  height: 340,
                }}
                src={product.imgSrc}
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
                <Typography variant="body2" color="text.secondary">
                  <b>Description</b> {product.description}
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button size="small" variant="contained">
                  <Link
                    to={`/products`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Back
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
        )}
      </Container>
    </>
  );
};

export default ProductDetail;
