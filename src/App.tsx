import { ThemeProvider } from '@mui/material';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import SwitchColorMode from './components/SwitchColorMode';
import MainContainer from './Layouts/MainContainer';
import createCustomTheme from './theme';
import { useColorMode } from './hooks/useColorMode';
import { PlacesProvider } from './context'
import { Home } from './pages/Home';
import { Logs } from './pages/Logs';

const App = () => {
  const mode = useColorMode();
  const theme = createCustomTheme(mode);

  return (
    <BrowserRouter>
    <PlacesProvider>
    <ThemeProvider theme={theme}>
      <MainContainer>
      <SwitchColorMode />
      <Routes>
        <Route index path="/" element={ <Home /> } />
        <Route path="logs" element={ <Logs /> } />
      </Routes>
      </MainContainer>
    </ThemeProvider>
    </PlacesProvider>
    </BrowserRouter>
  );
};

export default App;
