import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Products from './pages/Products';
// import Contactus from './pages/Contactus';
// import Aboutus  from './pages/Aboutus';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    MuiAppBar: {
      styleOverrides: {
      root: {
        zIndex: 1300,
      },
      },
    },
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            {/* <Route path="/contactus" element={<Contactus />} />
            <Route path="/aboutus" element={<Aboutus  />} /> */}
          </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
