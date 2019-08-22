const fetch = require('node-fetch');

const getLocationDetails = async (yelp_id) => {
  const url = `${process.env.YELP_API}/businesses/${yelp_id}`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.YELP_TOKEN}` }
  });

  if (response.status !== 200) throw new Error;
  
  const data = await response.json();
  return {
    address: data.location['display_address'],
    phone: data['display_phone'],
    website: data.url,
    categories: data.categories,
    rating: data.rating,
    price: data.price,
    photos: data.photos,
  };
};

const getReviews = async (yelp_id) => {
  const url = `${process.env.YELP_API}/businesses/${yelp_id}/reviews`;
  const response = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.YELP_TOKEN}` }
  });

  if (response.status !== 200) throw new Error;

  const data = await response.json();
  return data.reviews;
};

module.exports = {
  getLocationDetails,
  getReviews,
};