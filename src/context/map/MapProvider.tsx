import { Marker, Map, Popup } from "mapbox-gl";
import { useContext, useEffect, useReducer } from "react";
import { PlacesContext } from "../places/PlacesContext";
import { MapContext } from "./MapContext";
import { mapReducer } from "./MapReducer";

export interface MapState {
    isMapReady: boolean;
    map?: Map;
    markers?: Marker[];
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: [],
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
    const { places } = useContext(PlacesContext);

    useEffect(() => {
        console.log(places);
        if (state.markers) {
           state.markers.forEach(marker => {
                marker.remove()
            }); 
        }
        
        const newMarkers: Marker[] = [];

        for (const place of places) {
            const coords = place.geometry.coordinates;
            const popup = new Popup()
                .setHTML(`
                    <h6>${place.properties.name}</h6>
                    <h6>${place.properties.place_formatted}</h6>
                `);
            const newMarker = new Marker()
                .setPopup( popup )
                .setLngLat( [coords[0], coords[1]] )
                .addTo(state.map!)
            
            newMarkers.push( newMarker );

            dispatch({ type: 'setMarkers', payload: newMarkers });
        }
    }, [places])

    const setMap = (map: Map) => {
        const myLocationPopep = new Popup()
            .setHTML(`
            <h4>Aquí estoy<h4>
        `)
        new Marker()
            .setLngLat( map.getCenter() )
            .setPopup( myLocationPopep )
            .addTo(map);
        dispatch({ type: 'setMap', payload: map })
    }

    return (
        <MapContext.Provider value={{
            ...state,
            // methods
            setMap
        }}>
            { children }
        </MapContext.Provider>
    )
}