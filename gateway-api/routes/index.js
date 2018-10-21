const express = require('express');
const router = express.Router();
const axios = require('axios');
const request = require('request');

router.get('/clients', async (req, res, next) => {
  try {
    const name = req.query.name || '';
    const email = req.query.email || '';
    const phone = req.query.phone || '';
    const url = `http://localhost:8081/v1/clients/search/byNamePhoneEmail?name=${name}&phone=${email}&email=${phone}`;
    const response = await axios.get(url);
    const { clients } = response.data._embedded;
    res.setHeader('Content-Type', 'application/json');
    res.send(clients);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
