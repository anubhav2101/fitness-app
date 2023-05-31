export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ca279930a2msh18e2f3548de5c82p13e5b5jsn1994459ff48c",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const videosOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ca279930a2msh18e2f3548de5c82p13e5b5jsn1994459ff48c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
