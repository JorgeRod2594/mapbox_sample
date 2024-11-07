import { Link } from 'react-router-dom';
import { MapView } from '../components';

export const Home = () => {
    return (
        <div>
            <MapView />
            <Link to="/logs">ir a logs</Link>
        </div>
    )
}