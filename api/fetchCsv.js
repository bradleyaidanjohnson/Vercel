const fetch = require('node-fetch');

module.exports = async function handler(req, res) {
  const CSV_URL = 'https://jemstonerecruitment-my.sharepoint.com/:x:/p/jemma/ESF_iG50PUhGvwJsrGZIF4cBHY4cZj1WZ1ieHEYRDsMxEg?e=jI4vJr&download=1';

  try {
    const response = await fetch(CSV_URL);

    if (!response.ok) {
      console.error(`Error fetching CSV: ${response.status} ${response.statusText}`);
      return res.status(500).send(`Error fetching CSV: ${response.status}`);
    }

    const csvText = await response.text();

    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(csvText);

  } catch (error) {
    console.error('Fetch failed:', error);
    res.status(500).send('Fetch failed: ' + error.message);
  }
};
