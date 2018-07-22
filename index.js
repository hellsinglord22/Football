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
        },]);

    })
    .get('/v1/competitions/:competitionId/teams', (req, res) => {

        const { competitionId } = req.params;
        if (competitionId == 424) {
            res.send({
            "teams":
                [
                    {
                        "id": 3,
                        "name": "Manchester",
                        "crestUrl": "https://i.pinimg.com/originals/ee/c8/b5/eec8b50995db204e5445bf1fb5fe2431.jpg" ,
                    },
                    {
                        "id": 4,
                        "name": "ManCity",
                        "crestUrl": "https://i.pinimg.com/originals/6a/db/94/6adb94f14f5bdcb9627e9f5a7a41522d.jpg",
                    }
                ]})
        }
        else if (competitionId == 433) {
            res.send({
                "teams": [{
                    "id": 9,
                    "name": "Afghanistan",
                    "crestUrl": "https://i.pinimg.com/originals/7e/61/b2/7e61b234578a94ad988dba07a4dacde0.jpg" ,
                },
                {
                    "id": 7,
                    "name": "WC Qualification",
                    "crestUrl": "https://i.pinimg.com/originals/1a/ff/99/1aff99b61852e2d4c4f824f8fff6a2de.png",
                },
                {
                    "id": 8,
                    "name": "Argentina",
                    "crestUrl": "https://i.pinimg.com/originals/38/b8/2c/38b82c83cd8ffb8404131a31caaf64c8.png",
                }]
            })
        }
        else {
            res.send({});
        }
    })
    .get('/v1/teams/:teamId/fixtures', (req, res) => {
        res.send({
            "fixtures": [  
             {
                 "homeTeamId": 4,
                "awayTeamId" : 6,
                   "status": "FINISHED",
                   "result": {
                       "goalsHomeTeam": 3,
                       "goalsAwayTeam": 3,
                   }
             },
               {     "homeTeamId": 7,
                   "awayTeamId" : 6,
                   "status": "SCHEDULED",
                   "result": {
                       "goalsHomeTeam": 3,
                       "goalsAwayTeam": 0,
                   }
             },
               {     "homeTeamId": 3,
                   "awayTeamId" : 7,
                   "status": "FINISHED",
                   "result": {
                       "goalsHomeTeam": 6,
                       "goalsAwayTeam": 1,
                   }
             },
               {     "homeTeamId": 4,
                     "awayTeamId" : 7,
                     "status": "SCHEDULED",
                     "result": {
                       "goalsHomeTeam": 1,
                       "goalsAwayTeam": 3,
                     }
             }
            ]
        });
    });



console.log('Listining on port: ', PORT);
app.listen(PORT);