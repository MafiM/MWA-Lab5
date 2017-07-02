var app = require('express')();
var path = require('path')
var fetch = require('node-fetch')

const url = 'http://jsonplaceholder.typicode.com/users'
      

 app.set('view engine', 'ejs')
 app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res){
  res.status(200)
  res.render('index.ejs',{ title: 'Express' })
  res.end()
})
app.get('/users', function(req, res){
  
  res.status(200)
  fetch(url).then(x=>x.json()).then(x=>{
    res.render('users.ejs', {users : x}) 
  });
  
})
app.listen(3000, function() {
  console.log('listening')
})