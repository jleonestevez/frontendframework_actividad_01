import React from 'react';
import user from '../user.png';
import logo from '../targaryen.png'


function NavBar({onLogoClick, onProfileClick}) {

    return <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#" onClick={() => {
                onLogoClick()
            }
            }>
                <img src={logo} alt="HD" width="30" height="30"
                     className="d-inline-block align-text-top"/>
                House of Dragon
            </a>
            <img src={user} alt="Perfil" width="30" height="30" onClick= { onProfileClick}
                 className="d-inline-block align-text-top"/>
        </div>
    </nav>
}

export default NavBar;