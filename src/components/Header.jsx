import PropTypes from 'prop-types';

function Header({text}) {
    const headerStyles = { 
        backgroundColor : 'blue', 
        color : 'pink'
    }

    return (
    <header style = {headerStyles}>
        <div className="container">
            <h3>{text}</h3>
        </div>
    </header >
  )
}
// to set default value for text property 
Header.defaultProps = {
    text : 'Feedback UI',
}

// To set the type of property, this adds an additional check 
// and makes sure only string values are assigned to text 
Header.propTypes = {
    text : PropTypes.string,      
}
// we can also do ->  text : PropTypes.string.isRequired
export default Header