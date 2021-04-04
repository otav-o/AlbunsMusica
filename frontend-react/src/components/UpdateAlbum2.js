import {useState} from 'react';
import Button from './Button';
import Musica from './Musica';
import AddMusica from './AddMusica';

const UpdateAlbum = ({album, onUpdate}, props) => {

    const[nome, setNome] = useState(album.nome)
    const[anoLancamento, setAnoLancamento] = useState(album.anoLancamento)
    const[musicas, setMusicas] = useState([...album.musicas])
    const[albumId] = useState(album.albumId)

    const[mostrarAddMusica, setMostrarAddMusica] = useState(false)

    console.log(album);
    console.log(musicas);

    const onSubmit = (e) => {
        // e.preventDefault()

        if (!nome) {
            alert('Campo vazio!')
            return
        }

        onUpdate({albumId, nome, anoLancamento, musicas})
    }

    const deleteMusica = (id) => {
        setMusicas(musicas.filter((musica) => musica.musicaId !== id))
    }

    // const addMusica = ({nome, duracao}) => {
    //     setMusicas(...musicas, {nome: nome, duracao: duracao})
    //     console.log(musicas)
    // }

    const addMusica = (musica) => {
        console.log(musicas)
        setMusicas([...musicas, musica], { musicaId: (Math.floor(Math.random() * 10000) + 1).toString() }) // !
    }

    return (
        <>
        <form className='add-form' //onSubmit={onSubmit}
        >
            <div className='form-control'>
                <label>Álbum</label>
                <input type='text' placeholder='Nome' 
                    value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Ano de lançamento</label>
                <input type='number' placeholder='Ano' 
                    value={anoLancamento} onChange={(e) => setAnoLancamento(e.target.value)}/>
            </div>
            {(musicas.length === 0) ?
                    (<>Sem músicas ainda.</>)
                : 
                musicas.map((musica) => (
                    <>
                        <Musica 
                            key={musica.musicaId} 
                            musica={musica} 
                            onDelete={deleteMusica}
                        />
                    </>
                ))}
            </form>
            <Button 
                texto='Nova música' 
                cor='limegreen' 
                onClick={() => setMostrarAddMusica(!mostrarAddMusica)}
            />
            {(mostrarAddMusica) ? (
                <AddMusica addMusica={addMusica}/>
            ) : ''}
            
            {/* <input type='submit' value='Salvar álbum' className='btn btn-block'/> */}
        
            <Button texto='Salvar álbum' className='btn btn-block' onClick={() => onSubmit()}/>
        </>
    )
}

export default UpdateAlbum
