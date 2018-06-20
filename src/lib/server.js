'use strict';

const http = require('http');
const cowsay = require('cowsay');
const bodyParser = require('./body-parser.js');

const server = module.exports = {};
const app = http.createServer((req, res) => {
  bodyParser(req)
    .then((parsedRequest) => {
      if (parseRequet.method === 'GET' && parseRequest.url.pathname === '/api/time') {
        res.writeHead(200, { 'Content-Type': 'application/json'});
        res.write(JSON.stringify({
          date: new Date(),
        }));
        res.end();
        return undefined;
      }
//method for GET request i.e. http GET :3000/api/cowsayPage?text=hello
      if (parsedRequest.method === 'GET' && parsedRequest.url.pathname === '/api/cowsayPage') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const cowsayText = cowsay.say({
          text: parsedRequest.url.query.text,
        });
        res.write(`<section><a href="api/time">Click here for current time</a></h3><pre>${cowsayText}</pre></section>`);
        res.end();
        return undefined;
      }
//method for POTS request with arbitrary key/value pair data i.e. http POST :3000/api/echo name=judy hometown=seattle
    });
});
