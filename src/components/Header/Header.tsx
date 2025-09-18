import './Header.scss';

function Header() {
    return (
        <>
            <div className="header">
                <div className='logo'>
                    <p>Logo</p>
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