import Button from './Button'

const Musica = ({musica}) => {
    return (
        <div className='musica'>
            {console.log(musica)}
            <p><span>Nome</span>: {musica.nome}</p>
            <p><span>Duração</span>: {musica.duracao} segundos</p>
        </div>
    )
}

export default Musica

 