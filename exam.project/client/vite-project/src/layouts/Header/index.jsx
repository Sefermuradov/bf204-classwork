import React from 'react'
import style from "./index.module.scss"
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header id={style["header"]}>
                <Container>
                    <nav className={style.nav}>
                        <div className={style.selling}>
                            <h1>Selling</h1>
                        </div>
                        <div className={style.links}>
                            <Link to={`/`}>Home</Link>
                            <Link to={`/`}></Link>
                            <Link to={`/basket`}>Basket</Link>
                            <Link to={`/addproduct`}>Add Product</Link>
                        </div>
                    </nav>
                </Container>
            </header>
        </>
    )
}

export default Header