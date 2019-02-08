import React from 'react'
import PropType from 'prop-types'

const Login = (props) => {
    return (
    <nav className="login">
        <h2>Login</h2>
        <p>Signin!!!!</p>
        <button className="github" onClick={() => props.authenticate('Github')}>Login with Github</button>
        {/* <button className="twitter" onClick={() => props.authenticate('Twitter')}>Login with Twitter</button> */}

    </nav>
    
    )
}

Login.propTypes = {
    authenticate: PropType.func.isRequired
}

export default Login