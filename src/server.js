const http = require('http');
const url = require('url');
const query = require('querystring');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.styleSheet,
  '/success': jsonHandler.success,
  '/badRequest': jsonHandler.badRequest,
  notFound: jsonHandler.notFound,
};

const onRequest = (request, response) => {
  const parsedURL = url.parse(request.url);
  const params = query.parse(parsedURL.query);

  console.log(parsedURL);
  console.log(params);

  if (urlStruct[parsedURL.pathname]) {
    urlStruct[parsedURL.pathname](request, response, params);
  } else {
    urlStruct.notFound(request, response, params);
  }

  //   switch (request.url) {
  //     case '/':
  //       htmlHandler.getIndex(request, response);
  //       break;

//     default:
//       htmlHandler.getIndex(request, response);
//       break;
//   }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
