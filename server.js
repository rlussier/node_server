// const http = require("http");
// const fs = require("fs");

// const PORT = process.env.PORT || 3030;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html");

//     let path = './';
//     switch(req.url) {
//         case '/':
//             path += './views/index.html';
//             break;
//             case '/about':
//                 path += './views/about.html';
//                 break;
//                 default:
//                     path += './views/404.html';
//                     break;
//     }

//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.error(err);
//             res.end();
//         } else {
//             res.end(data);
//         }
//     });
// });

// server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
