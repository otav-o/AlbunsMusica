import Button from './Button'

const Album = ({album}) => {

    return (
        <div className='album'>

                <h3>{album.nome}</h3>
                <p>{album.anoLancamento}</p>
                
                <Button
                    cor='blue'
                    texto='Ver'
                    // onClick={}
                />
                <Button
                    cor='orange'
                    texto='Alterar'
                    // onClick={}
                />
                <Button
                    cor='red'
                    texto='Apagar'
                    // onClick={}
                />
        </div>
    )
}

export default Album
