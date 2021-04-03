import { useState } from 'react'
import Musica from './Musica'

const ReadAlbum = ({album}) => {

    const [musicas, setMusicas] = useState([...album.musicas])

    const deleteMusica = (id) => {
        setMusicas(musicas.filter((musica) => musica.musicaId !== id)) // remover a música somente da UI
    }

    return (
        <div>
            <div className='album'>

                {console.log(musicas)}

                {(musicas.length === 0) ?
                    (<>Sem músicas ainda.</>)
                :
                // album.musicas.map((musica) => ())
                musicas.map((musica) => (
                    <>
                        <Musica key={musica.musicaId} musica={musica}/>
                    </>
                ))}
            </div>        
        </div>
    )
}

export default ReadAlbum
