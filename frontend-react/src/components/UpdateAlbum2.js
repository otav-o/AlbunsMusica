import {useState} from 'react';
import Button from './Button';

const UpdateAlbum = ({album, onUpdate}, props) => {

    const[nome, setNome] = useState(album.nome)
    const[anoLancamento, setAnoLancamento] = useState(album.anoLancamento)
    const[musicas, setMusicas] = useState(album.musicas)
    const[albumId] = useState(album.albumId)

    console.log(album);

    const onSubmit = (e) => {
        e.preventDefault()

        if (!nome) {
            alert('Campo vazio!')
            return
        }

        onUpdate({albumId, nome, anoLancamento, musicas})
        setNome('')
        setAnoLancamento('')
        setMusicas([])
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
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

            <input type='submit' value='Salvar álbum' className='btn btn-block'/>
            <Button cor='pink' texto='Voltar' onClick={() => props.history.goBack()}/>
        </form>
    )
}

export default UpdateAlbum
