const express = require('express');
const router = express.Router();
const axios = require('axios');
const request = require('request');

async function getClients({ name, email, phone }) {
  const url = `http://localhost:8081/v1/clients/search/byNamePhoneEmail?name=${name}&phone=${email}&email=${phone}`;
  const response = await axios.get(url);
  const { clients } = response.data._embedded;
  return clients;
}

async function getOrders(ids, dateStart, dateEnd) {
  const clientIds = ids || '';
  const start = dateStart ? `&start=${dateStart}` : '';
  const end = dateEnd ? `&end=${dateEnd}` : '';
  let url;
  if (clientIds) {
    url = `http://localhost:8082/v1/orders/search/byClientIds?clientIds=${clientIds}${start}${end}`;
  } else if (start || end) {
    url = `http://localhost:8082/v1/orders/search/byDate?${start}${end}`;
  } else {
    url = `http://localhost:8082/v1/orders`;
  }
  const response = await axios.get(url);
  const { orders } = response.data._embedded;
  return orders;
}

router.get('/orders', async (req, res, next) => {
  try {
    const name = req.query.name || '';
    const email = req.query.email || '';
    const phone = req.query.phone || '';

    const clients = await getClients({ name, email, phone });

    const clientIds = clients.map((client, index) => {
      const selfId = client._links.self.href.split('/');
      const id = selfId[selfId.length - 1];
      clients[index].id = id;
      return id;
    });

    const orders = await getOrders(clientIds, req.query.start, req.query);

    const data = {
      clients,
      orders,
    };

    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

module.exports = router;
