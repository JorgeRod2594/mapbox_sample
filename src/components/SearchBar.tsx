import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, useContext, useRef } from 'react';
import { PlacesContext } from '../context';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {

    const { searchPlaces } = useContext(PlacesContext);
    const debounceRef = useRef<NodeJS.Timeout>();

    const onQueryChange = (event:ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current) {
            clearTimeout( debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            // todo: buscar o ejecutar consulta
            searchPlaces( event.target.value );
        }, 1000);
    }
    return (
        <div>
        <Paper
            component="form"
            className="search-container"
            style={{ position:'fixed' }}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search mapbox"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={onQueryChange}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
        <SearchResults />
        </div>
    )
}