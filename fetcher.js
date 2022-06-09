let agrs = process.argv.slice(2);

const request = require('request');
const fs = require('fs');
request(agrs[0], (error, response, body) => {
  fs.writeFile(agrs[1], body, err => {
    if (err){
      console.error(err);
    }
    let stats = fs.statSync(body);
    let filesSize = stats["size"];
    console.log(`Downloaded and saved ${filesSize} bytes to ${agrs[1]}`);
  });
});