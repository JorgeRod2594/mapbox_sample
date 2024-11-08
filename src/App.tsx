import { ThemeProvider } from '@mui/material';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import SwitchColorMode from './components/SwitchColorMode';
import MainContainer from './Layouts/MainContainer';
import createCustomTheme from './theme';
import { useColorMode } from './hooks/useColorMode';
import { MapProvider, PlacesProvider } from './context'
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

const App = () => {
  const mode = useColorMode();
  const theme = createCustomTheme(mode);

  return (
    <BrowserRouter>
    <PlacesProvider>
      <MapProvider>
      <ThemeProvider theme={theme}>
        <MainContainer>
        <Routes>
          <Route index path="/" element={ <Home /> } />
          <Route path="contact" element={ <Contact /> } />
        </Routes>
        </MainContainer>
      </ThemeProvider>
      </MapProvider>
    </PlacesProvider>
    </BrowserRouter>
  );
};

export default App;
