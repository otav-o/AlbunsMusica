import Album from './Album'

const Albuns = ({albuns, onDelete, onRead}) => {
    return (
        <>
            {albuns.map((album) => (
                <Album 
                    key={album.id} 
                    album={album}
                    onDelete={onDelete}
                    // onRead={onRead}
                />
            ))}
        </>
    )
}

export default Albuns
