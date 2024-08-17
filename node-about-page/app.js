#!/usr/bin/node

const EventEmitter = require('node:events');
var http = require('http');
var fs = require('fs');

// serv.createServer(function (req, res) {
//     res.write('Hello World!'); //write a response to the client
//     res.end(); //end the response
//     return res.end();
//   }).listen(8080); 

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'text/html')

  let path = './files/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/contact-me':
      path += 'contact-me.html';
      break;
      case '/about':
        path += 'about.html';
        break;
    default:
      path += '404.html';
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err)  {
        console.log(err)
        res.end()
      } else {
        console.log(req.url)
        console.log(path)
        res.end(data)
      }
      });
  }).listen(8080);



