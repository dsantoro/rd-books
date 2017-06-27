var axios = require('axios');

const GOOGLEBOOKS_URL = 'https://www.googleapis.com/books/v1/volumes';

function getBooks(term) {

  const encodedLocation = encodeURIComponent(term);
  let requestUrl = `${GOOGLEBOOKS_URL}?q=${encodedLocation}`;

  return axios.get(requestUrl).then(function (res) {
    if(res.data.cod && res.data.message) {
      throw new Error(res.data.message);
    } else {
      return res.data;
    }
  }, function (res){
    throw new Error(res.data.message);
  });
}

export default getBooks;
