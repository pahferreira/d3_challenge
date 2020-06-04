import React from 'react';
import { CardContent, CardMedia, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Text from '../Commons/Text';
import useStyles from './styles';
import NumberFormat from 'react-number-format';

const CountryCard = ({ country, selectCountry }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      className={classes.container}
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={3}
      onClick={() => selectCountry(country)}
    >
      <Link
        to={process.env.PUBLIC_URL + '/country'}
        style={{ width: '100%', textDecoration: 'none' }}
      >
        <CardMedia
          className={classes.media}
          image={country.flag}
          title={country.name}
        />
        <CardContent>
          <Text
            variant='h6'
            component='p'
            fontFamily='Nunito Sans'
            className={classes.bolder}
          >
            {country.name}
          </Text>
          <Text variant='body2'>
            <span className={classes.bold}>Population:</span>{' '}
            <NumberFormat
              value={country.population}
              displayType={'text'}
              thousandSeparator={true}
            />
          </Text>
          <Text variant='body2'>
            <span className={classes.bold}>Region:</span> {country.region}
          </Text>
          <Text variant='body2'>
            <span className={classes.bold}>Capital:</span> {country.capital}
          </Text>
        </CardContent>
      </Link>
    </Grid>
  );
};

export default React.memo(CountryCard);
