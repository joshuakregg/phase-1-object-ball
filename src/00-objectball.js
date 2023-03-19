function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }

    }
}

console.log(gameObject())

function numPointsScored(playerName) {
    const obj = gameObject();
    if (obj["home"]["players"][playerName] != undefined) {
        return obj["home"]["players"][playerName]["points"];
    }
    else {
        return obj["away"]["players"][playerName]["points"];
    }
}


// console.log(numPointsScored("Reggie Evans"));
// console.log(numPointsScored("Brendan Haywood"));


function shoeSize(playerName) {
    const obj = gameObject();
    if (obj["home"]["players"][playerName] != undefined) {
        return obj["home"]["players"][playerName]["shoe"];
    }
    else {
        return obj["away"]["players"][playerName]["shoe"];
    }
}

// console.log(shoeSize("Reggie Evans"));
// console.log(shoeSize("Brendan Haywood"));

function teamColors(teamName) {
    const obj = gameObject();
    if (teamName === "Brooklyn Nets") {
        return obj["home"]["colors"];
    }
    else {
        return obj["away"]["colors"];
    }
}

// console.log(teamColors("Brooklyn Nets"));
// console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    const obj = gameObject();
    const array = [];
    array.push(obj["home"]["teamName"]);
    array.push(obj["away"]["teamName"]);
    return array
}

// console.log(teamNames());

function teamNumbers(teamName) {
    const obj = gameObject();
    
    if (teamName === "Brooklyn Nets") {
      const array = []
      for(let player in obj.home.players){
      array.push(obj.home.players[player]["number"]);
       console.log(player);
      }
      return array;
    }
    else {
        const array = []
        for(let player in obj.away.players){

        array.push(obj.away.players[player]["number"]);
         
        }
        return array;
    }
}
// console.log(teamNumbers("Charlotte Hornets"));

function playerStats(playerName) {
    const obj = gameObject();
    if (obj["home"]["players"][playerName] != undefined){
        const stats = obj["home"]["players"][playerName];
        return stats;
    }
    else {
        const stats = obj["away"]["players"][playerName];
        return stats;
    }
    
}

