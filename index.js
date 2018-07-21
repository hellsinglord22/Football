const express = require('express');
const app = express();
const PORT = 3000;



app
    .get('/v1/competitions', (req, res) => {

        res.send([{
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
        }]);

    })
    .get('/v1/competitions/:competitionId/teams', (req, res) => {

        res.send({
            teams: [{
                    "id": 4,
                    "name": "Manchester",
                    "crestUrl": "https://www.gstatic.com/webp/gallery3/1.png",
                },
                {
                    "id": 3,
                    "name": "ManCity",
                    "crestUrl": "https://www.gstatic.com/webp/gallery3/2_webp_ll.png",
                },
                {
                    "id": 7,
                    "name": "team7",
                    "crestUrl": "https://www.gstatic.com/webp/gallery3/3_webp_ll.png",
                },
                {
                    "id": 6,
                    "name": "Team8",
                    "crestUrl": "https://www.gstatic.com/webp/gallery3/5_webp_ll.png",
                }
            ]
        });
    })
    .get('/v1/teams/:teamId/fixtures', (req, res) => {
        res.send({



        });
    });



console.log('Listining on port: ', PORT);
app.listen(PORT);