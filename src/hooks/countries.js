import React, { createContext, useState, useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import API from '../services/API';

const CountryContext = createContext(null);

const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setselectedCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await API.getCountries();
      if (data) {
        setCountries(data);
        setLoading(false);
      }
    })();
  }, []);

  const selectCountry = (country) => {
    const borders = country.borders.map((border) => {
      const borderCountry = countries.filter(
        (country) => country.alpha3Code === border
      );
      return borderCountry[0];
    });
    setselectedCountry({ ...country, borders });
    return <Redirect to='/country' />;
  };

  return (
    <CountryContext.Provider
      value={{ selectCountry, countries, selectedCountry, loading }}
    >
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => {
  const context = useContext(CountryContext);
  return context;
};

export { CountryProvider, useCountry };
