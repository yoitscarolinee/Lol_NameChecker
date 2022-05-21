const fs = require("fs");

var wordlist = fs.readFileSync('wordlistall.txt').toString().split("\n");

for (let i = 0; i < wordlist.length; i++) {
    const nick = wordlist[i];
    
    if (4 < nick.length && nick.length < 6) {
        let content = nick;
            content += "\n";
            fs.appendFile("5.txt", content, (err) => {
                return console.log(err);
            });
    } else {
        let content = nick;
            content += "\n";
            fs.appendFile("nao5.txt", content, (err) => {
                return console.log(err);
            });
    }

}