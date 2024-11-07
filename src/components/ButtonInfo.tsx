import { Button } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

export const ButtonInfo = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/contact");
      }
    return (
        <Button
            className="btn-info"
            variant="contained" 
            startIcon={<InfoIcon />}
            onClick={handleClick}
        >
            Info
        </Button>
    )
}