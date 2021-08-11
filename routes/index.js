var express = require('express');
var router = express.Router();
var nano = require('nano')('http://localhost:5984')
var books = nano.db.use('books')

/* GET home page. */
router.get('/', function(req, res, next) {

  // Get a list of all books
books.list(function (err, body) {
  if (err) {
    console.log(err)
  } else {
    console.log(body.rows)
  }
});
  res.sendFile(__dirname + '../public/index.html');
  // res.render('index', { title: 'Express' });
});




module.exports = router;
