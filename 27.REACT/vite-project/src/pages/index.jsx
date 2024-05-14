import React from 'react'
import Header from '../layouts/Header'
import { Outlet } from 'react-router-dom'

const MoviesRoot = () => {
  return (
    <> 
    <Header/>
    <Outlet/>
    </>
  )
}

export default MoviesRoot