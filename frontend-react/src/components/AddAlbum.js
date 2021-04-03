import {useState} from 'react';

const AddAlbum = ({onAdd}) => {

    const[nome, setNome] = useState('')
    const[anoLancamento, setAnoLancamento] = useState('')
    const[musicas, setMusicas] = useState([])


    const onSubmit = (e) => {
        e.preventDefault()

        if (!nome) {
            alert('Campo vazio!')
            return
        }

        onAdd({nome, anoLancamento, musicas}) // executa a função lá do App
        setNome('')
        setAnoLancamento('')
        setMusicas([])
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Álbum</label>
                <input type='text' placeholder='Adicionar álbum' 
                    value={nome} onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Ano de lançamento</label>
                <input type='number' placeholder='Ano de lançamento' 
                    value={anoLancamento} onChange={(e) => setAnoLancamento(e.target.value)}/>
            </div>

            <input type='submit' value='Salvar álbum' className='btn btn-block'/>
        </form>
    )
}

export default AddAlbum
