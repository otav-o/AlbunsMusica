import PropTypes from 'prop-types'

const Header = ({titulo}) => { // ou props

    return (
        <header className='header'>
            <h1>{titulo}</h1>
        </header>
    )
}

Header.defaultProps = {
    titulo: 'Gerenciador de álbuns',
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired,
}

// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header

// rafce + enter