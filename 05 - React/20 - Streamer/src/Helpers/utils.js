export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
};

export const dateFormatting = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const yearFormatting = {
  year: 'numeric',
};
