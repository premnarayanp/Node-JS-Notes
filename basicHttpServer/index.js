const http = require('http');
const port = 8471;

function requestHandler(req, res) {
    console.log(req.url);
}

const server = http.createServer(requestHandler);

server.listen(port, function(error) {

    if (error) {
        console.log('there is error ==========');
        console.log(error);
        return;
    }

    console.log("server is up and running on port number;" + port);
});

//==================================basicHttpServer========================================================
//------------------------NOTES--------------------------------
//1-first require http and declare port number and assign port 
//2-create requestHandler function which handle req and res.
//3-create server   and  in createServer function and  pass requestHandler which is a callback .
//4-create server.listen that show server  successfully running or not 
//5- To run the server ----PS C:\Users\premn\Desktop\NODEWS\basichttpserver> node index.js

//-------------------------OUTPUT------------------------------------
//1- first type command for run the server on console as  <node index.js> 
//output as: server is up and running on port number;8471

//2- type on Browser http://localhost:8471
// output as: nothing print on server console

//3- then after port number if type..  http://localhost:8471/hellow
// output as: print on server console url value "hello"

//4-then after port number if type..  http://localhost:8471/firstpage
// output as: print on server console url value "firstpage"

//========================================================================================================