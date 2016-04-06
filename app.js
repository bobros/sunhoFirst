var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.listen(3000, function(){
  console.log('Server On!');
});
