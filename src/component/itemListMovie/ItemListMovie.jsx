import React from 'react'
import ItemMovie from '../itemMovie/ItemMovie'


const ItemListMovie = (peliculas) => {

  return (
     
     peliculas.peliculas.map (item => <ItemMovie pelicula= {item} />)
    //console.log(`esto es lo que devolvio ${peliculas.pe}`)
  )
}

export default ItemListMovie