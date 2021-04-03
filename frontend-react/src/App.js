import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Albuns from './components/Albuns'
import AddAlbum from './components/AddAlbum'


function App() {

  const[albuns, setAlbuns] = useState([])

  const [mostrarAddAlbum, setMostrarAddAlbum] = useState(false)

  const baseUrl = 'http://localhost:3000/albuns'

  useEffect(() => {
    const getAlbuns = async() => { // async pois obterAlbuns retorna uma promise
      const albunsDoServidor = await obterAlbuns()
      setAlbuns(albunsDoServidor)
    }

    getAlbuns()
  }, [])

  // Obter do servidor
  const obterAlbuns = async () => {
    const res = await fetch(baseUrl)
    const data = await res.json()

    return data
  }


  const addAlbum = (album) => {
    setAlbuns([...albuns, album])
    console.log(album)
  }

  const deleteAlbum = async (id) => {

    console.log(id)
    await fetch(`${baseUrl}/${id}`, {method: 'DELETE'})
    // Estava retornando vazio, pois o json server espera "id", e não "albumId"
    // Solução: npx json-server db.json --id albumId 

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
