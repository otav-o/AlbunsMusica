import Button from './Button'
import { useState } from 'react'
import ReadAlbum from './ReadAlbum'
import { Link } from 'react-router-dom'
import UpdateAlbum from './UpdateAlbum2'

const Album = ({album, onDelete, onUpdate}) => {

    const [mostrarAlbum, setMostrarAlbum] = useState(false)
    const [mostrarAlterarAlbum, setmostrarAlterarAlbum] = useState(false)

    return (
        <div className='album'>

                <h3>{album.nome}</h3>
                <p>{album.anoLancamento}</p>
                
                <Button
                    cor='blue'
                    texto='Ver'
                    onClick={() => setMostrarAlbum(!mostrarAlbum)}
                />
                {/* <Link to={`/album/editar/${album.albumId}`}> */}
                <Button
                    cor='orange'
                    texto='Alterar'
                    onClick={() => setmostrarAlterarAlbum(!mostrarAlterarAlbum)}
                />
                

                <Button
                    cor='red'
                    texto='Apagar'
                    onClick={() => onDelete(album.albumId)}
                />
                {
                    mostrarAlbum ?  
                        <ReadAlbum 
                            album={album}
                        /> : ''
                }

                { mostrarAlterarAlbum ? 
                    <UpdateAlbum
                        album={album}
                        onUpdate={onUpdate}
                    /> : ''}
        </div>
    )
}

export default Album
