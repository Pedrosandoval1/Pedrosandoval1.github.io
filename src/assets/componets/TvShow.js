import axios from 'axios';
import {baseUrl, apiKey} from './config';

export const fetchPopular = async() => {
  try {
      const response = await axios.get(`${baseUrl}tv/popular${apiKey}`)
      // console.log(response.data.results);
      return response.data.results;
  } catch (err) {
      console.log(err);
  }
}
export const fetchBytitle = async(title) => {
  try {
      const response = await axios.get(`${baseUrl}search/tv${apiKey}&query=${title}`)
      // console.log(response.data.results);
      return response.data.results;
  } catch (err) {
      console.log(err);
  }
}
export const fetchRecommendations = async(tvShowId) => {
  try {
      const response = await axios.get(`${baseUrl}tv/${tvShowId}/recommendations${apiKey}`)
      // console.log(response.data.results);
      return response.data.results;
  } catch (err) {
      console.log(err);
  }
}