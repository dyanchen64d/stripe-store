require('dotenv').config();

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/checkout', async (req, res) => {
  const { items } = req.body;

  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url:
      'https://stripe-store-iolgo1gw6-dyanchen64d.vercel.app/success',
    cancel_url: 'https://stripe-store-iolgo1gw6-dyanchen64d.vercel.app/cancel',
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4003, () => console.log('server at 4003'));
