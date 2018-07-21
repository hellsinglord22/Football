const express = require('express');
const app = express();
const PORT = 3000;
const data = [{
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



app
    .get('/v1/competitions', (req, res) => {
        res.send(data);
    })
    .get('/v1/competitions/:competitionId/teams', (req, res) => {
        const { competitionId } = req.params;
        const resData = data.filter( (obj) => obj.id === parseInt(competitionId) );
        res.send(resData);
    })
    .get('/v1/teams/:teamId/fixtures');



console.log('Listining on port: ', PORT);
app.listen(PORT);