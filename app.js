const express = require('express');
const {Wit, log ,interactive} = require('node-wit');

let app = express();

app.post('/temp', (request, response) => {

 let query = request.query.question;
 let answer = '';
 
  const client = new Wit({
    accessToken: 'YETENYZMIDTT5AEH3VSRLDZHP6WCYOI3',
    logger: new log.Logger(log.DEBUG) // optional
  });
  
  client.message(query || 'nothing').then((data)=> {
    
      if(data.entities && data.entities.intent && data.entities.intent[0].value == 'temp_get'){
        response.send('temperature is 30 degree C');
      }
      else if(data.entities && data.entities.intent &&  data.entities.intent[0].value == 'temp_set'){
        response.send('temperature set to 30 degree C');
      }
      else{
        response.send( 'Sorry!! can\'t understand');
      }
 
  });

 

}).listen(process.env.PORT || 3000);







