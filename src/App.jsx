
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { AppBar } from '@mui/material';

import NavBar from './component/navBar/NavBar';
import { Routes, Route,BrowserRouter } from 'react-router-dom';

import  Documentales  from './pages/Documentales';
import Series from './pages/Series';
import Peliculas from './pages/Peliculas';
import Novedades from './pages/Novedades';
import Search from './pages/Search';
import ItemListConteiner from './component/itemListConteiner/ItemListConteiner';


const navigationLink = [

  {
    "title": "Peliculas",
    "path": "/Peliculas",
    "icon": <LiveTvIcon />,
  },

  {
    title: "Series",
    path: "/Series",
    icon: <LiveTvIcon />,
  },
  {

    title: "Documentales",
    path: "/Documentales",
    icon: <LiveTvIcon />,
  },
  {

    title: "Novedades",
    path: "/Novedades",
    icon: <LiveTvIcon />,
  }

];

function App() {


  return (

      <>
      <NavBar navigationLink={navigationLink} />
        <Routes>

          <Route
            path="/"
            element={<ItemListConteiner/>}
          />
          <Route
            path="/series"
            element={<Series />}
          />
          <Route
            path="/peliculas"
            element={<Peliculas />}
          />
          <Route
            path="/Documentales"
            element={<Documentales />}
          />
          <Route
            path="/Novedades"
            element={<Novedades />}
          />
          <Route
            path="/Search"
            element={<Search />}
          />

        </Routes>
     </>



    

  )
}

export default App
