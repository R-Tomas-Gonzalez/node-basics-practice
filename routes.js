//importing file system module
const fs = require('fs');
const { parse } = require('path/posix');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome!</title></head>')
        res.write('<body><form action="/create-user" method="POST" ><input type="text" name="user" /><button type="submit">Submit!</button></form></body>')
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome!</title></head>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>User 1</li>');
        res.write('<li>User 2</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    };

    if (url==='/create-user' && method === "POST") {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedUser = Buffer.concat(body).toString();
            const user = parsedUser.split('=')[1];
            console.log(user);
        });
        res.statusCode=302;
        res.setHeader('Location', '/');
        res.end();
    };

}

module.exports = requestHandler;