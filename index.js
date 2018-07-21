const express = require('express');
const app = express();
const PORT = 3000;


app
    .get('/v1/competitions', (req, res) => {

        const resposneObj = [{
            "id": 424,
            "caption": "Brazil",
            "numberOfTeams": 25,
            "numberOfGames": 8,
        }, {
            "id": 433,
            "caption": "Kupa na Bulgarija",
            "numberOfTeams": 267,
            "numberOfGames": 34,
        },{
            "id": 444,
            "caption": "European Championships France",
            "numberOfTeams": 24,
            "numberOfGames": 38,
        }];
        res.send(resposneObj);

    });



console.log('Listining on port: ', PORT);
app.listen(PORT);