import axios from 'axios';

const getCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    if (response) {
      return response.data;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export default { getCountries };
