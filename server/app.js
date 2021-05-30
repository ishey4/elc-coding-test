
const data      = require('./data');
const http      = require('http');
const hostname  = 'localhost';
const port      = 3035;

const filterDeep = (searchTerm) => (value) => {
    if (typeof value === 'string') {
        return value.includes(searchTerm)
    }
    if (typeof value === 'object') {
        return Object.values(value)
            .filter(filterDeep(searchTerm)).length
    }
}

http.createServer(function (req, res) {
  
    const [_match, query] = req.url.match('[?|&]query=([^&]*)') || [];
    const filteredResults = data
        .filter(({ isActive }) => isActive)
        .filter(filterDeep(query));
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3030')
    res.write(JSON.stringify(filteredResults));
    res.end(); 
}).listen(port);


console.log(`[Server running on ${hostname}:${port}]`);
