import GenreMovieList from './Components/GenreMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'

function App() {

  return (
    <>
      <div className='bg-[#131420]'> 
        <Header/>
        <Slider/>
        <ProductionHouse/>
        <GenreMovieList/>
      </div>
    </>
  )
}

export default App
