import PropTypes from 'prop-types'

const Button = ({cor, texto, onClick}) => {

    return (
        <button 
            onClick={onClick} 
            style={{backgroundColor: cor}} 
            className='btn'
        >
            {texto}
        </button>
    )
}

Button.defaultProps = {
    cor: 'steelblue'
}

Button.propTypes = {
    texto: PropTypes.string,
    cor: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
