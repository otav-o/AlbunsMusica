import Album from './Album'

const Albuns = ({albuns, onDelete, onUpdate, obterAlbum}) => {
    return (
        <>
            {albuns.map((album) => (
                <Album 
                    key={album.id} 
                    album={album}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    obterAlbum={obterAlbum}
                />
            ))}
        </>
    )
}

export default Albuns
