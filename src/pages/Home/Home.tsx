import Header from '../../components/Header/Header';
import ApiData from '../../components/ApiData/ApiData';
import './Home.scss'

function Home() {
    return (
        <>
            <Header />
            <h1>Procurar Pokémon</h1>
            <div className='data'>
                <ApiData />
            </div>
        </>
    );
}

export default Home;