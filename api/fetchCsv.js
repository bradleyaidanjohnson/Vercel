import fetch from 'node-fetch';

export default async function handler(req, res) {
  const CSV_URL = 'https://jemstonerecruitment-my.sharepoint.com/:x:/p/jemma/ESF_iG50PUhGvwJsrGZIF4cBHY4cZj1WZ1ieHEYRDsMxEg?e=jI4vJr&download=1'; // replace this

  try {
    const response = await fetch(CSV_URL);
    if (!response.ok) throw new Error(`Error fetching CSV: ${response.status}`);

    const csvText = await response.text();

    res.setHeader('Content-Type', 'text/csv');
    res.status(200).send(csvText);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
