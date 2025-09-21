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
                    <a href="">Produtos</a>
                </nav>
            </div>
        </>
    );
}

export default Header;