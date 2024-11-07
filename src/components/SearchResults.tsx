import { Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useContext } from "react"
import { PlacesContext } from "../context"

export const SearchResults = () => {

    const { places } = useContext( PlacesContext );

    return (
        <List className={places.length == 0 ? "not-visible" : "results-container" } >
            { places.map((place, i) => {
              return (
                <ListItem button key={place.id}>
                    <ListItemText key={i} primary={place.properties.full_address} />
                </ListItem> 
              )
            })}
        </List>
    )
}