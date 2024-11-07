import { Link } from 'react-router-dom';
import { MapView, SearchBar } from '../components';

export const Home = () => {
    return (
        <div>
            <SearchBar />
            <MapView />
            <Link to="/logs">ir a logs</Link>
        </div>
    )
}