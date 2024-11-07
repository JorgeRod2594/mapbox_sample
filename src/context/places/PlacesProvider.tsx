import { useEffect, useReducer } from 'react';
import { searchApi } from '../../apis';
import { getUserLocation } from '../../helpers';
import { Feature, PlacesResponse } from '../../types/places';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './PlacesReducer';

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [ number, number ];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

    useEffect(() => {
        getUserLocation()
            .then(lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
    }, [])

    const searchPlaces = async( query: string ): Promise<Feature[]> => {
        if ( query.length === 0 ) {
            dispatch({ type: 'setPlaces', payload: [] });
            return [];
        };
        if ( !state.userLocation ) throw new Error('No existe ubicación..');

        dispatch({ type: 'setLoadingPlaces' });

        const resp = await searchApi.get<PlacesResponse>(`${query}.json`, {
            params: {
                proximity: state.userLocation.join(',')
            }
        });

        dispatch({ type: 'setPlaces', payload: resp.data.features });
        return resp.data.features;
    }

    return(
        <PlacesContext.Provider value={{
            ...state,
            // methods
            searchPlaces
        }}>
            { children }
        </PlacesContext.Provider>
    )
}