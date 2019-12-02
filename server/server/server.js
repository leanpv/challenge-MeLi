require('./config/config');

const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

app.use(cors());

app.get('/search/:item', function(req, res) {

    const item = req.params.item;

    axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${ item }`).then(resp => {

        // category = data.filters[0].values[0].name;
        // results = {...data.results };

        // Trae la cant. de resultados
        // resLength = Object.keys(results).length;

        data = resp.data;
        respuesta = [];

        for (let i = 0; i < 4; i++) {

            const results = data.results[i];

            respuesta.push({
                author: 'No hay nombre de (author) en este endpoint solo el id: ' + results.seller.id,
                category: data.filters[0].values[0].name,
                items: [{
                    id: results.id,
                    title: results.title,
                    price: {
                        currency: results.currency_id,
                        amount: results.price
                    },
                    picture: results.thumbnail,
                    condition: results.condition,
                    free_shipping: results.shipping.free_shipping
                }]
            });
        }
        res.json(respuesta);
    });

});

app.get('/item/:id', function(req, res) {

    const id = req.params.id;
    respuesta = [];

    let one = `https://api.mercadolibre.com/items/${ id }`;
    let two = `https://api.mercadolibre.com/items/${ id }/description`;

    const reqOne = axios.get(one);
    const reqTwo = axios.get(two);

    axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
        const resOne = responses[0].data;
        const resTwo = responses[1].data;

        respuesta.push({
            author: 'No hay nombre de (author) en este endpoint solo el id: ' + resOne.seller_id,
            item: {
                id: resOne.id,
                title: resOne.title,
                price: {
                    currency: resOne.currency_id,
                    amount: resOne.price
                },
                picture: resOne.pictures[0].url,
                condition: resOne.condition,
                free_shipping: resOne.shipping.free_shipping,
                sold_quantity: resOne.sold_quantity,
                description: resTwo.plain_text
            }
        });

        res.json(...respuesta);


    })).catch(errors => {});

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});