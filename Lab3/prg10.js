import http from "http";

const server = http.createServer((req, res) => {
    if(req.url === "/" && req.method === "GET"){
        res.end("<h1> Product Details</h1>");
    }
    else if(req.url === "/products" && req.method==="GET"){
        
    }
    else{
        res.statusCode=404;
        res.end("not found");
    }

});


server.listen(3700, ()=> console.log("prg10 is live at 3700....."));