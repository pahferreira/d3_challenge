import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import {
  CircularProgress,
  Grid,
  Input,
  InputAdornment,
  Select,
  MenuItem,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Search from '@material-ui/icons/Search';
import { useCountry } from '../../hooks/countries';
// Commons
import Content from '../Commons/Content';
import Text from '../Commons/Text';
// Components
import CountryCard from './CountryCard';
import Loader from './Loader';

const filterValues = {
  ALL: 'Filter by Region',
  AFRICA: 'Africa',
  AMERICA: 'Americas',
  ASIA: 'Asia',
  EUROPE: 'Europe',
  OCEANIA: 'Oceania',
};

const Homepage = () => {
  const classes = useStyles();
  const { countries, selectCountry, loading } = useCountry();
  const [filteredContries, setFilteredContries] = useState(countries);
  const [filter, setFilter] = useState(filterValues.ALL);
  const [inputSearch, setInputSearch] = useState('');

  useEffect(() => {
    if (filter === filterValues.ALL) {
      return setFilteredContries(countries);
    }
    return setFilteredContries(
      countries.filter((country) => country.region === filter)
    );
  }, [filter, countries]);

  useEffect(() => {
    return setFilteredContries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(inputSearch.toLowerCase())
      )
    );
  }, [inputSearch, countries]);

  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <Content container justify='space-between'>
      {loading ? (
        matches ? (
          <Loader />
        ) : (
          <Grid container direction='row' justify='center' alignItems='center'>
            <CircularProgress />
          </Grid>
        )
      ) : (
        <>
          <Grid
            container
            justify='space-between'
            wrap='wrap'
            alignItems='center'
            className={classes.searchAndFilter}
          >
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
              <Input
                className={classes.searchInput}
                id='search-input'
                placeholder='Search for a country...'
                disableUnderline
                value={inputSearch}
                onChange={(e) => setInputSearch(e.target.value)}
                startAdornment={
                  <InputAdornment position='start'>
                    <Search fontSize='small' />
                  </InputAdornment>
                }
              />
            </Grid>
            <Select
              variant='filled'
              disableUnderline
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className={classes.filterSelect}
            >
              <MenuItem value={filterValues.ALL}>Filter by Region</MenuItem>
              <MenuItem value={filterValues.AFRICA}>Africa</MenuItem>
              <MenuItem value={filterValues.AMERICA}>America</MenuItem>
              <MenuItem value={filterValues.ASIA}>Asia</MenuItem>
              <MenuItem value={filterValues.EUROPE}>Europe</MenuItem>
              <MenuItem value={filterValues.OCEANIA}>Oceania</MenuItem>
            </Select>
          </Grid>
          <Grid container justify='space-between' style={{ height: '100%' }}>
            {filteredContries.length > 0 ? (
              filteredContries.map((country) => (
                <CountryCard
                  country={country}
                  key={country.alpha3Code}
                  selectCountry={selectCountry}
                />
              ))
            ) : (
              <Text>No countries found.</Text>
            )}
          </Grid>
        </>
      )}
    </Content>
  );
};

export default Homepage;
