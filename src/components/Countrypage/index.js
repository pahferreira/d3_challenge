import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Grid, Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NumberFormat from 'react-number-format';
// Hooks
import { useCountry } from '../../hooks/countries';
// Commons
import Content from '../Commons/Content';
import Text from '../Commons/Text';

const Countrypage = () => {
  const classes = useStyles();
  const { selectedCountry } = useCountry();
  const matches = useMediaQuery('(max-width: 600px)');

  return !selectedCountry ? (
    <Redirect to='/' />
  ) : (
    <Content container direction='column' alignItems='flex-start'>
      <Grid container className={classes.backContainer}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button
            className={classes.backButton}
            startIcon={<KeyboardBackspaceIcon />}
          >
            Back
          </Button>
        </Link>
      </Grid>
      <Grid container justify='space-between'>
        <Grid
          container
          item
          xl={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={classes.container}
        >
          <img
            src={selectedCountry.flag}
            alt='Country Flag'
            className={classes.image}
          />
        </Grid>
        <Grid
          container
          item
          xl={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={classes.infoContainer}
          direction={matches ? 'row' : 'column'}
          justify='space-between'
        >
          <Grid container>
            <Text variant='h5' component='h1'>
              {selectedCountry.name}
            </Text>
            <Grid container justify='space-between'>
              <Grid>
                <Text variant='body2'>
                  <span className={classes.bold}>Native Name:</span>{' '}
                  {selectedCountry.nativeName}
                </Text>
                <Text variant='body2'>
                  <span className={classes.bold}>Population:</span>{' '}
                  <NumberFormat
                    value={selectedCountry.population}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </Text>
                <Text variant='body2'>
                  <span className={classes.bold}>Region:</span>{' '}
                  {selectedCountry.region}
                </Text>
                <Text>
                  <span className={classes.bold}>Sub Region:</span>{' '}
                  {selectedCountry.subregion}
                </Text>
                <Text variant='body2'>
                  <span className={classes.bold}>Capital:</span>{' '}
                  {selectedCountry.capital}
                </Text>
              </Grid>
              <Grid className={classes.rightInfoContainer}>
                <Text variant='body2'>
                  <span className={classes.bold}>Top Level Domain:</span>{' '}
                  {selectedCountry.topLevelDomain}
                </Text>
                <Text variant='body2'>
                  <span className={classes.bold}>Currencies:</span>{' '}
                  {selectedCountry.currencies
                    .map((currency) => currency.name)
                    .join(', ')}
                </Text>
                <Text variant='body2'>
                  <span className={classes.bold}>languages:</span>{' '}
                  {selectedCountry.languages
                    .map((language) => language.name)
                    .join(', ')}
                </Text>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            wrap={'wrap'}
            direction={matches ? 'column' : 'row'}
            alignItems={matches ? 'flex-start' : 'center'}
            style={{ marginBottom: matches && '30px' }}
          >
            <Text className={classes.bold}>Border Countries:</Text>
            {selectedCountry.borders.map((border) => (
              <Button key={border.alpha3Code} className={classes.borderButton}>
                {border.name}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Content>
  );
};

export default Countrypage;
