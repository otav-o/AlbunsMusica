import Button from './Button'
import { useState } from 'react'
import ReadAlbum from './ReadAlbum'

const Album = ({album, onDelete}) => {

    const [mostrarAlbum, setMostrarAlbum] = useState(false)

    return (
        <div className='album'>

                <h3>{album.nome}</h3>
                <p>{album.anoLancamento}</p>
                
                <Button
                    cor='blue'
                    texto='Ver'
                    onClick={() => setMostrarAlbum(!mostrarAlbum)}
                />
                <Button
                    cor='orange'
                    texto='Alterar'
                    // onClick={}
                />
                <Button
                    cor='red'
                    texto='Apagar'
                    onClick={() => onDelete(album.albumId)}
                />
                {
                    mostrarAlbum ?  
                        <ReadAlbum album={album}/> : ''
                }
        </div>
    )
}

export default Album
