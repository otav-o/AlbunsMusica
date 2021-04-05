import {useState} from 'react';
import Button from './Button';
import Musica from './Musica';
import AddMusica from './AddMusica';

const UpdateAlbum = ({album, onUpdate}) => {

    const[nome, setNome] = useState(album.nome)
    const[anoLancamento, setAnoLancamento] = useState(album.anoLancamento)
    const[musicas, setMusicas] = useState([...album.musicas])
    const[albumId] = useState(album.albumId)

    const[mostrarAddMusica, setMostrarAddMusica] = useState(false)

    const onSubmit = () => {

        if (!nome) {
            alert('Campo vazio!')
            return
        }
        console.log('musicas: ', musicas)
        onUpdate({albumId, nome, anoLancamento, musicas}) 
        // [asp.net + EF] infelizmente não está dando o put dos detalhes (músicas). Mas atualiza o nome e o ano do álbum normalmente.
        // Acredito que seja necessário dar um novo get por id do backend (já que o álbum recebido por parâmetro pode ter sido alterado)
        // Funcionou no JSON Server
    }

    const deleteMusica = (id) => {
        setMusicas(musicas.filter((musica) => musica.musicaId !== id))
    }


    const addMusica = (musica) => {
        console.log(musicas)
        setMusicas([...musicas, musica]) // !
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
        
            <Button texto='Salvar álbum' className='btn btn-block' onClick={onSubmit}/>
        </>
    )
}

export default UpdateAlbum
