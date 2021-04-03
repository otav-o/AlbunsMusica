import Album from './Album'

const Albuns = ({albuns, onDelete, onUpdate}) => {
    return (
        <>
            {albuns.map((album) => (
                <Album 
                    key={album.id} 
                    album={album}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </>
    )
}

export default Albuns
