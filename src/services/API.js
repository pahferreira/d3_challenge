import axios from 'axios';

const getCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.eu/rest/v2/all');
    console.log(response);
    if (response) {
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default { getCountries };
