import Home from './Pages/Home';
import ListGames from './Pages/ListGames';
import News from './Pages/News'; 
import {Routes, Route} from 'react-router-dom';
import Detalhe from './Pages/Detalhe';

const Router = () => {
  return (<Routes><Route exact path="/" element={<Home/>} /> 
          <Route exact path="/listgames" element={<ListGames/>} />
          <Route exact path="/news" element={<News/>} />
          <Route exact path="/detalhe" element={<Detalhe/>} />
  </Routes>)
}

export default Router;