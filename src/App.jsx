import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import MoviePage from '../pages/movies/MoviePage';
import './index.css'


function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies/:id' element={<MoviePage />} />
{/* NON NECESSARIO PER L'ESERCIZIO, MA PER RENDERLO PIU COMPLETO  */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
