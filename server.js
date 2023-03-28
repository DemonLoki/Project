const express = require('express');
const app = express();

app.get('/' ,(req, res) => {
        res.sendFile('BucketList.html', {'root': 'public'})
      });
      
      app.listen(9000, function () {
        console.log(`App running on port ${ this.address().port }`);
      });
      