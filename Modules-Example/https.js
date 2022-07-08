const request = require('./request');
const response = require('./response');

function req(url, data){
    request.send(url, data);
    return response.read();
}

const responseData= req('https://google.com', 'hello');

//console.log(responseData);
console.log(require.cache);