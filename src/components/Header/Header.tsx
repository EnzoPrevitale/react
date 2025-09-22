import './Header.scss';
import Logo from '../../assets/logo.png'

function Header() {
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <img src={Logo}></img>
                </div>
                <nav>
                    <a href="">Home</a>
                    <a href="">Pokémon</a>
                </nav>
            </div>
            <div className='black'></div>
            <div className='white'></div>
        </>
    );
}

export default Header;