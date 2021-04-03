import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Albuns from './components/Albuns'
import AddAlbum from './components/AddAlbum'


function App() {

  const[albuns, setAlbuns] = useState([])

  const [mostrarAddAlbum, setMostrarAddAlbum] = useState(false)

  const baseUrl = 'http://localhost:3000/albuns'
  // const baseUrl = 'https://localhost:44305/api/albums' // asp.net

  
  useEffect(() => {
    const getAlbuns = async() => { // async pois obterAlbuns retorna uma promise
      console.log(albuns)
      const albunsDoServidor = await obterAlbuns()
      setAlbuns(albunsDoServidor)
    }

    getAlbuns()
  }, [])

  // GET
  const obterAlbuns = async () => {
    const res = await fetch(baseUrl)
    const data = await res.json()

    return data
  }

  // POST
  const addAlbum = async (album) => {
    const res = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(album)
    })

    const data = await res.json() // lembrar do await
    setAlbuns([...albuns, data])
    console.log(album)
  }

  // DELETE
  const deleteAlbum = async (id) => {

    console.log(id)
    await fetch(`${baseUrl}/${id}`, {method: 'DELETE'})
    // Estava retornando vazio, pois o json não reconhece "albumId" como id
    // Solução: npx json-server db.json --id albumId 

    setAlbuns(albuns.filter((album) => album.albumId !== id)) // não mostrar na UI 
  }

  // PUT
  const atualizarAlbum = async (albumAtualizado) => {
    const res = await fetch(`${baseUrl}/${albumAtualizado.albumId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(albumAtualizado)
    })

    // const data = await res.json()

    // setAlbuns(albuns.map((album) => 
    //   album.id === albumAtualizado.id ? {...album, musicas: data.musica} : album // cuidado
    // ))
  }

  return (
    <Router>
    <div className="App">
      <Header 
          onAdd={() => setMostrarAddAlbum(!mostrarAddAlbum)}
          mostrarAddAlbum={mostrarAddAlbum}
        />

    </div>
    <Route path='/' exact render={(props) => (
      <>
        {mostrarAddAlbum ? 
          (<AddAlbum
            onAdd={addAlbum}
          />) : ''} 

      {albuns.length > 0 ? (
        <Albuns 
          albuns={albuns} 
          onDelete={deleteAlbum}
          onUpdate={atualizarAlbum}
        />
      ) : ('Não há álbuns por aqui.')}
      </>
    )} />

    {/* <Route name='editar' path='/album/editar/:id' component={UpdateAlbum}/> */}
    <Footer/>
    </Router>
  );
}

export default App;
