const http=require('http');
const fs=require('fs')
const server=http.createServer((req,resp)=>{
    console.log("request made");

    // set header content type
    resp.setHeader('Content-type','text/html');
    let path='./view/'
    switch (req.url) {
        case '/':
            resp.statusCode=200
            path+='index.html'
            break;
        case '/about':
            resp.statusCode=200
            path+='about.html'
            break;
        case '/about-me':
            resp.statusCode=301
            resp.setHeader('Location','/about')
            resp.end()
        break;
        default:
            resp.statusCode=404
            path+='404error.html'
            break;
    }
    // reading the file
    fs.readFile(path,(err,data)=>{
        if (err) {
            console.log(err)
            resp.end()
        }
        // resp.write(data)
        resp.end(data)
    })


})

server.listen(3000,'localhost',()=>{
    console.log('request is coming on port 300')
})