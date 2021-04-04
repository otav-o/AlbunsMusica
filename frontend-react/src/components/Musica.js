import Button from './Button'

const Musica = ({musica, onDelete}) => {
    return (
        <div className='musica'>
            {console.log(musica)}
            <p><span>Nome</span>: {musica.nome}</p>
            <p><span>Duração</span>: {musica.duracao} segundos</p>

            {onDelete !== undefined ? 
            <Button cor='pink' texto='apagar música' onClick={() => onDelete(musica.musicaId)}/>
            : ''}
            
        </div>
    )
}

export default Musica

 