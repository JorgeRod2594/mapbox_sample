import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';

export const Contact = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
      }
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
      
      const card = (
        <React.Fragment>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
              Card de contacto
            </Typography>
            <Typography variant="h5" component="div">
              Jorge Rojas Diaz
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>jor567.jr@gmail.com</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <LinkedInIcon /> 
            <Link target="_blank" to="https://www.linkedin.com/in/jorge-rojas-diaz-613608196" rel="noreferrer">
                <Typography variant="body2">Ver más</Typography>
            </Link>
          </CardActions>
        </React.Fragment>
      );
      
    return (
        <div>
            <Box sx={{ minWidth: 275, padding: '35px 10px'}}>
                <Card variant="outlined">{card}</Card>
            </Box>
            <Button
            className="btn-info"
            variant="contained" 
            startIcon={<HomeIcon />}
            onClick={handleClick}
            >
                Regresar
            </Button>
        </div>
    )
}