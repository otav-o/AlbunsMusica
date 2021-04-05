import {useState} from 'react';

const AddMusica = ({addMusica}) => {

    const [musica, setMusica] = useState({nome: '', duracao: 0, musicaId: ''})
    
    console.log(musica)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!musica.nome) {
            alert('Campo vazio!')
            return
        }

        console.log(musica)
        addMusica(musica)
        
        setMusica({nome: '', duracao: 0})
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Música</label>
                <input type='text' placeholder='Nome'
                    value={musica.nome} onChange={(e) => setMusica({...musica, nome: e.target.value})}
                />
            </div>
            <div>
                <label>Duração</label>
                <input type='number' placeholder='Tempo em segundos' value={musica.duracao} onChange={(e) => setMusica({...musica, duracao: e.target.value})}/>
            </div>
            <input type='submit' value='Adicionar'/>
        </form>
    )
}

export default AddMusica
