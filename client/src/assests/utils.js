export const pickRandomLocation = locations => {
  const locationCount = locations.data.length;
  const randomIndex = Math.floor(Math.random() * locationCount);
  return locations.data[randomIndex];
};

export const formatDate = strDate => {
  const dateObj = new Date(strDate);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  return `${month}/${day}/${year}`;
};
