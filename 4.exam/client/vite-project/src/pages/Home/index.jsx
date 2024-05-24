import React, { useContext, useState } from "react";
import { ProductsContext } from "../../context/productsContext";
import style from "./index.module.scss";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TextField from "@mui/material/TextField";
import { BasketContext } from "../../context/basketContext";
import { FavoriteContext } from "../../context/favoriteContext";
const Home = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const { basket, setBasket, setLocalBasket } = useContext(BasketContext);
  const { favorite, setFavorite, setLocalFavorite } =
    useContext(FavoriteContext);
  const [query, setQuery] = useState("");
  const filteredProducts = products.filter((x) => {
    return x.title.toLowerCase().trim().includes(query.toLowerCase().trim());
  });
  return (
    <>
      <section id={style["cards"]}>
        <Container>
          <TextField
            style={{ marginBottom: "20px" }}
            id="search"
            label="search"
            variant="outlined"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Grid container spacing={2}>
            {filteredProducts.length > 0 &&
              filteredProducts.map((product) => {
                return (
                  <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
                    <div className={style.card}>
                      <div className={style.cardimg}>
                        <img src={product.image} alt={product.title} />
                      </div>
                      <div className={style.cardbody}>
                        <h2>{product.title}</h2>
                        <p className={style.price}>${product.price}</p>
                        <p>{product.description}</p>
                        <div className={style.buttons}>
                          <Button size="small" variant="contained">
                            <Link to={`/${product._id}`}>
                              <InfoIcon fontSize="small" />
                            </Link>
                          </Button>
                          <Button
                            onClick={() => {
                              const basketItem = basket.find(
                                (x) => x._id === product._id
                              );
                              if (basketItem) {
                                basketItem.count += 1;
                                setBasket([...basket]);
                                setLocalBasket([...basket]);
                              } else {
                                const firstBasket = { ...product };
                                firstBasket.count = 1;
                                setBasket([...basket, firstBasket]);
                                setLocalBasket([...basket, firstBasket]);
                              }
                            }}
                            variant="contained"
                            size="small"
                          >
                            <ShoppingCartIcon fontSize="small" />
                          </Button>
                          <Button
                            onClick={() => {
                              const found = favorite.find(
                                (x) => x._id === product._id
                              );
                              if (found) {
                                const updated = favorite.filter(
                                  (x) => x._id !== product._id
                                );
                                setFavorite(updated);
                                setLocalFavorite(updated);
                              } else {
                                setFavorite([...favorite, product]);
                                setLocalFavorite([...favorite, product]);
                              }
                            }}
                            variant="contained"
                            size="small"
                          >
                            fav
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </section>

      <section id={style["leader"]}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={style.card}>
                <div className={style.cardimg}>
                  <img
                    src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
                    alt="person"
                  />
                </div>
                <div className={style.cardbody}>
                  <p className={style.price}>MINING EXPERT</p>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat. At, soluta. Repellendus vero, consequuntur!
                  </h2>
                  <div className={style.buttons}>
                    <Button size="small" variant="contained">
                      <Link to={`/`}>back</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={style.card}>
                <div className={style.cardimg}>
                  <img
                    src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
                    alt="person"
                  />
                </div>
                <div className={style.cardbody}>
                  <p className={style.price}>MINING EXPERT</p>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat. At, soluta. Repellendus vero, consequuntur!
                  </h2>
                  <div className={style.buttons}>
                    <Button size="small" variant="contained">
                      <Link to={`/`}>back</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={style.card}>
                <div className={style.cardimg}>
                  <img
                    src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
                    alt="person"
                  />
                </div>
                <div className={style.cardbody}>
                  <p className={style.price}>MINING EXPERT</p>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat. At, soluta. Repellendus vero, consequuntur!
                  </h2>
                  <div className={style.buttons}>
                    <Button size="small" variant="contained">
                      <Link to={`/`}>back</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <div className={style.card}>
                <div className={style.cardimg}>
                  <img
                    src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
                    alt="person"
                  />
                </div>
                <div className={style.cardbody}>
                  <p className={style.price}>MINING EXPERT</p>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque, repellat. At, soluta. Repellendus vero, consequuntur!
                  </h2>
                  <div className={style.buttons}>
                    <Button size="small" variant="contained">
                      <Link to={`/`}>back</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Home;
