import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Albuns from './components/Albuns'
import AddAlbum from './components/AddAlbum'


function App() {

  const[albuns, setAlbuns] = useState(
    [
      {
        albumId: "2",
        nome: "22",
        anoLancamento: 0,
        musicas: []
      },
      {
        albumId: "3",
        nome: "25453",
        anoLancamento: 0,
        musicas: [
          {
            musicaId: "2",
            nome: "musica boa",
            duracao: 150
          },
          {
            musicaId: "3",
            nome: "musica ruim",
            duracao: 152
          }
        ]
      },
      {
        albumId: "4",
        nome: "oi",
        anoLancamento: 0,
        musicas: []
      },
      {
        albumId: "guid232",
        nome: 'esse ano',
        anoLancamento: 2021,
        musicas: []
      },
      {
        albumId: "string",
        nome: "stringe",
        anoLancamento: 0,
        musicas: []
      }
    ]
  )

  const [mostrarAddAlbum, setMostrarAddAlbum] = useState(false)
  // const [mostrarAlbum, setMostrarAlbum] = useState(false)

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
          // onRead={() => setMostrarAlbum(!mostrarAlbum)}
        />
      ) : ('Não há álbuns por aqui.')}

      <Footer/>
    </div>
  );
}

export default App;
