import './Header.scss';
import Logo from '../../assets/logo.png'
import{ Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <img src={Logo}></img>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/pokemon">Pokémon</Link>
                </nav>
            </div>
            <div className='black'></div>
            <div className='white'></div>
        </>
    );
}

export default Header;