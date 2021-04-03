import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Albuns from './components/Albuns'
import AddAlbum from './components/AddAlbum'


function App() {

  const[albuns, setAlbuns] = useState([])

  const [mostrarAddAlbum, setMostrarAddAlbum] = useState(false)

  const baseUrl = 'http://localhost:5000/albuns'

  useEffect(() => {
    const obterAlbuns = async () => {
      const res = await fetch(baseUrl)
      const data = await res.json()

      console.log(data)
    }

    obterAlbuns()
  }, [])


  const addAlbum = (album) => {
    setAlbuns([...albuns, album])
    console.log(album)
  }

  const deleteAlbum = (id) => {
    // console.log('deletar:', id)
    setAlbuns(albuns.filter((album) => album.albumId !== id)) // não mostrar na UI 
  }

  return (
    <div className="App">
      <Header 
          onAdd={() => setMostrarAddAlbum(!mostrarAddAlbum)}
          mostrarAddAlbum={mostrarAddAlbum}
        />

      {mostrarAddAlbum ? 
          (<AddAlbum
            onAdd={addAlbum}
          />) : ''} 

      {albuns.length > 0 ? (
        <Albuns 
          albuns={albuns} 
          onDelete={deleteAlbum}
        />
      ) : ('Não há álbuns por aqui.')}

      <Footer/>
    </div>
  );
}

export default App;
