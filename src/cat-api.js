'use strict';

import { Notify } from 'notiflix';

import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_ubjDByo5lgRwp97IdJzakDrFUvfZ5jpSrWWdrrfKU2atPAD4RjwufMAbolGN6Oms';

const errorMessage = document.querySelector('.error');

export const fetchBreeds = () => {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      return response.data;
    })
    .catch(error => Notify.failure(errorMessage.textContent));
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
    })
    .catch(error => Notify.failure(errorMessage.textContent));
};
