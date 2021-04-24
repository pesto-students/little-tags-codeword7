const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('');

const app = express();

app.use(cors({
    origin: true
}));
app.use(express.json());

app.post('/payments/create', async (req, res) => {
    try {
        const { amount, shipping } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            shipping,
            amount: '800',
            currency: 'usd'
        });
        console.log(paymentIntent);
        res
            .status(200)
            .send(paymentIntent.client_secret);

    } catch (err) {
        console.log(err.message);
        res
            .status(500)
            .json({
                statusCode: 500,
                message: err.message
            });
    }
})

app.get('*', (req, res) => {
    res
        .status(404)
        .send('404, Not Found.');
});

app.listen(5000, () => console.log("Server running on 5000"));
