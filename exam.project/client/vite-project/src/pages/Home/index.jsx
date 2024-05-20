import React from 'react'
import style from "./index.module.scss"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const Home = () => {
  return (
    <>
      <section id={style["shop-image"]}>
        <Container>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={style.hero}>
                <h2>Shop With Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
              </div>
              <div className={style.buttons}>
                <button className={style.right}>SHOP NOW</button>
                <button className={style.left}>CLUB MEMBERSHIP</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section>
        
      </section>

    </>
  )
}

export default Home