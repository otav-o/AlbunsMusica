import Album from './Album'

const Albuns = ({albuns, onDelete}) => {
    return (
        <>
            {albuns.map((album) => (
                <Album 
                    key={album.id} 
                    album={album}
                    onDelete={onDelete}
                />
            ))}
        </>
    )
}

export default Albuns
