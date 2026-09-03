import http from "http"

const server = http.createServer((req,res) => {
    if(req.url === '/' && req.method === "GET")
        res.end("Home Page")
    else if(req.url === "/product" && req.method === "GET"){
    const products = [
      {
        id: 1,
        name: "Mobile",
        price: 2000,
      },
      {
        id: 2,
        name: "Duster",
        price: 10,
      },
    ]; 
    res.end(JSON.stringify(products));
    }
        
    else if(req.url === '/product' && req.method === "POST")
        
       {
         // Retrive data from client
         let body = "";
         req.on("data", (chunk) => {
           body += chunk;
         });

         req.on("end", () => {
           const product = JSON.parse(body);

           // Add data to database
           res.writeHead(201, {
             "content-type": "application/json",
           });

           // Send back the status
           res.end(
             JSON.stringify({
               msg: "Product added",
               product,
             }),
           );
         });
       }


        
    else if(req.url === '/product' && req.method === 'PUT')
        res.end("Update Product")
    else if(req.url === '/product' && req.method === 'DELETE')
        res.end('Remove Product')
    else {
        res.statusCode = 404;
        res.end("Not Found");
    }
})

server.listen(3000,()=> console.log("Prg11 is running"))