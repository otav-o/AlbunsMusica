import Button from './Button'

const Musica = ({musica, deleteMusica}) => {
    return (
        <div>
            {console.log(musica)}
            <p>Nome: {musica.nome}</p>
            <p>Duração: {musica.duracao} segundos</p>
            <Button
                cor='red'
                texto='Apagar música'
                onClick={() => deleteMusica(musica.musicaId)}
            />
        </div>
    )
}

export default Musica
