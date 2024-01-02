const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url}New Request Received\n`;
    const myurl = url.parse(req.url , true);
    console.log(myurl);
    fs.appendFile(`log.txt`, log, (err, data) => {
        switch(myurl.pathname){
            case '/' : res.end("HomePage");
            break;
            case '/about' : res.end("I am Ritik Verma")
            break;
            case "/signup" :
                if(req.method === "GET"){
                   res.end("This is a Signup Page"); 
                } 
                else if(req.method === "POST"){
                    //DB Query
                    res.end("Success");
                }
                break;
            default : res.end("404 Not Found");
        }

    });
});
 
server.listen(8000, () => {
    console.log("Server Started");
});

