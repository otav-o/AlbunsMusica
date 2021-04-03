import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({titulo, onAdd, mostrarAddAlbum}) => { // ou props

    return (
        <header className='header'>
            <h1>{titulo}</h1>
            <Button
                cor={mostrarAddAlbum?'red':'green'} 
                texto= {mostrarAddAlbum?'Fechar':'Adicionar'} 
                onClick={onAdd}
            />
        </header>
    )
}

Header.defaultProps = {
    titulo: 'Gerenciador de álbuns',
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}

export default Header

// rafce + enter