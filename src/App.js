import React, { useState } from 'react';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button, Grid } from '@material-ui/core';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Hooks
import { CountryProvider } from './hooks/countries';
// Commons
import NavBar from './components/Commons/NavBar';
import MainContainer from './components/Commons/MainContainer';
import Text from './components/Commons/Text';
// Routes
import Homepage from './components/Homepage';
import Countrypage from './components/Countrypage';

const darkMode = createMuiTheme({
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    fontWeightRegular: 300,
    fontWeightMedium: 600,
  },
  palette: {
    primary: { main: 'hsl(0, 0%, 100%)' },
    background: {
      main: 'hsl(207, 26%, 17%)',
      second: 'hsl(209, 23%, 22%)',
    },
    boxShadow: 'rgba(18,18,18,0.57)',
  },
});

const lightMode = createMuiTheme({
  typography: {
    fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    fontWeightRegular: 300,
    fontWeightMedium: 600,
  },
  palette: {
    primary: { main: 'hsl(200, 15%, 8%)' },
    background: {
      main: 'hsl(0, 0%, 98%)',
      second: '#fff',
    },
    boxShadow: 'rgba(227,227,227,1)',
  },
});

const App = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  return (
    <ThemeProvider theme={isLightMode ? lightMode : darkMode}>
      <CountryProvider>
        <Router>
          <MainContainer container>
            <NavBar container justify='space-between' alignItems='center'>
              <Link
                to={process.env.PUBLIC_URL + '/'}
                style={{ textDecoration: 'none' }}
              >
                <Text style={{ fontWeight: '800' }}>Where in the world?</Text>
              </Link>
              <Button
                style={{
                  textTransform: 'capitalize',
                  color: isLightMode
                    ? lightMode.palette.primary.main
                    : darkMode.palette.primary.main,
                }}
                onClick={() => setIsLightMode((prevState) => !prevState)}
                startIcon={<Brightness6Icon fontSize='small' />}
              >
                Dark Mode
              </Button>
            </NavBar>
            <Grid container>
              <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'}>
                  <Homepage />
                </Route>
                <Route exact path={process.env.PUBLIC_URL + '/country'}>
                  <Countrypage />
                </Route>
              </Switch>
            </Grid>
          </MainContainer>
        </Router>
      </CountryProvider>
    </ThemeProvider>
  );
};

export default App;
