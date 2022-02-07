const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const styleSheetRead = fs.readFileSync(`${__dirname}/../client/style.css`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const styleSheet = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(styleSheetRead);
  response.end();
};

module.exports = {
  getIndex,
  styleSheet,
};
