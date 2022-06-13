const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")
("sk_test_51L19tOSHKachyYg7rmdvqVlGxWMpLKJcGFhNy7xygRxaKBILhpHp2X9wKuuEVETinSRxXhGlKcYQFxtuoeJOZFAQ00cxQwIXbw");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response)=>response.status(200).send("Hello world"));

app.post("/payments/create", async(request,response) => {
	const total = request.query.total;
	console.log("payment request received ===", total);
	if(total>0){
		const paymentIntent = await stripe.paymentIntents.create({
			payment_method_types: ['card'],
			amount: total,
			currency: "INR",
		});
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	}
})

exports.api = functions.https.onRequest(app);

