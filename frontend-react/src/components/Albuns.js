import Album from './Album'

const Albuns = ({albuns}) => {
    return (
        <>
            {albuns.map((album) => (
                <Album 
                    key={album.id} 
                    album={album} 
                />
            ))}
        </>
    )
}

export default Albuns
