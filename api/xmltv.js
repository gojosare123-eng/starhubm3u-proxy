import fetch from 'node-fetch';

const ORIGIN = 'http://livebox.pro:80';
const USERNAME = '11223344';
const PASSWORD = 'kyft6ks0g7gr7uw0xio6';

export default async function handler(req, res) {
  try {
    const url = `${ORIGIN}/xmltv.php?username=${USERNAME}&password=${PASSWORD}`;
    const response = await fetch(url);
    const text = await response.text();

    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(text);
  } catch (error) {
    res.status(500).send(`<?xml version="1.0"?><tv>Error</tv>`);
  }
}
