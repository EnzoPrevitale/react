import Header from '../../components/Header/Header';
import ApiData from '../../components/ApiData/ApiData';
import './Home.scss'

function Home() {
    return (
        <>
            <Header />
            <div className='data'>
                <ApiData />
            </div>
        </>
    );
}

export default Home;