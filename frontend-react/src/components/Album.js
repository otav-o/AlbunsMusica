import Button from './Button'
import { useState, useEffect } from 'react'
import ReadAlbum from './ReadAlbum'
import UpdateAlbum from './UpdateAlbum2'

const Album = ({album, onDelete, onUpdate, obterAlbum}) => {

    const [mostrarAlbum, setMostrarAlbum] = useState(false)
    const [mostrarAlterarAlbum, setmostrarAlterarAlbum] = useState(false)
    const [albumCompleto, setAlbumCompleto] = useState({})

 
    // useEffect() é semelhante a componentDidMount() e foi necessário para evitar requisições infinitas à api (loop)

    useEffect(() => {
        const getAlbum = async (id) => {
            const albumRecuperado = await obterAlbum(id)
            setAlbumCompleto(albumRecuperado)
        }
    
        getAlbum(album.albumId)
      }, []) // [album]
    

    // const baseUrl = 'https://localhost:44305/api/albums' // asp.net
    // fetch(`${baseUrl}/${album.albumId}`).then(
    //     (data) => data.json()
    //   ).then((data) => {
    //     setAlbumCompleto(data)        
    //   }) 
    // // também está em loop!!
    
    // console.log(albumCompleto.albumId)

    console.log(album)

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
                            album={albumCompleto}
                        /> : ''
                }

                { mostrarAlterarAlbum ? 
                    <UpdateAlbum
                        album={albumCompleto}
                        onUpdate={onUpdate}
                    /> : ''}
        </div>
    )
}

export default Album
