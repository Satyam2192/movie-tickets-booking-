import axios from '';

export const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

export const fetchShowById = (id) => {
  return axios.get(`https://api.tvmaze.com/shows/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getBookingDetails = () => {
  const bookingDetails = localStorage.getItem('bookingDetails');
  if (bookingDetails) {
    return JSON.parse(bookingDetails);
  } else {
    return null;
  }
};

export const clearBookingDetails = () => {
  localStorage.removeItem('bookingDetails');
};