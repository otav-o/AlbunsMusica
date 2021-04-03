import Header from './components/Header'
import Footer from './components/Footer'
import Albuns from './components/Albuns'



function App() {

    const albuns = [
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

  return (
    <div className="App">
      <Header/>
      <Albuns 
        albuns={albuns} 
      />
      <Footer/>
    </div>
  );
}

export default App;
