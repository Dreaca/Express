import http from 'http';
import fs from 'fs';
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    fs.writeFileSync('demo.txt', (req.url + ':' + req.method));
    process.exit();
});
server.listen(3000);
