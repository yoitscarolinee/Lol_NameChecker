var axios = require("axios").default;
const fs = require("fs");

var wordlist = fs.readFileSync('5.txt').toString().split("\n");

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

for (let idx = 0; idx < wordlist.length; idx++) {
    setTimeout(function timer() {
        let nick = wordlist[idx];

        var options = {
            method: 'GET',
            url: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + nick,
            params: { '': ['', ''] },
            headers: { 'X-Riot-Token': '<Sua API key aqui>' }
        };

        axios.request(options).then(function (response) {
            console.log('nick ' + "'" + nick + "'" + ' não disponivel.');
        }).catch(function (error) {
            let content = nick;
            content += "\n";
            fs.appendFile("disponiveis5.txt", content, (err) => {
                return console.log(err);
            });
        });
    }, idx * 1200);
}