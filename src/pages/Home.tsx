import { Link } from 'react-router-dom';
import { ButtonInfo, MapView, SearchBar } from '../components';

export const Home = () => {
    return (
        <div>
            <SearchBar />
            <ButtonInfo />
            <MapView />
            <Link to="/logs">ir a logs</Link>
        </div>
    )
}