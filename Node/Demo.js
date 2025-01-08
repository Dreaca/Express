import http from 'http';
import fs from 'fs';
import path from 'path';
const server = http.createServer((req, res) => {
    const dash = path.join(process.cwd(), 'Dashboard.html');
    const adc = path.join(process.cwd(), 'AddCustomer.html');
    if (req.url === "/") {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(dash, (err, data) => {
            if (err) {
                res.write("INTERNAL SERVER ERROR");
                res.end();
            }
            else {
                res.end(data);
            }
        });
    }
    else if (req.url === '/add' && req.method === 'POST') {
        res.setHeader('Content-Type', 'text/html');
        fs.readFile(adc, (err, data) => {
            if (err) {
                res.write("INTERNAL SERVER ERROR");
                res.end();
            }
            else {
                const body = [];
                req.on('data', (data) => {
                    body.push(data);
                });
                req.on('end', () => {
                    const parsedBody = Buffer.concat(body).toString();
                    const itemName = parsedBody.split('=')[1];
                    fs.writeFile('items.txt', itemName, (err) => {
                        res.write("Items List");
                        res.end();
                    });
                });
            }
        });
    }
    else {
        res.end('404 Not Found');
    }
});
server.listen(3000);
