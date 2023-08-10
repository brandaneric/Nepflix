import { useState,useEffect } from 'react'
import ItemListMovie from '../itemListMovie/ItemListMovie'


const ItemListConteiner = () => {
  const KEY = "c9f04fa4"
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=c9f04fa4&Plot=full&s=movie")
      .then(respuesta => respuesta.json())
      .then(data => {
        setPeliculas(data.Search);

      })
  },[])


  return (
        
        peliculas &&  <ItemListMovie peliculas= {peliculas} />
        //peliculas === undefined ? <h2>no ahi datos</h2> : 
        
         

  )

}

export default ItemListConteiner
