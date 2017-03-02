var express       = require('express');
var url = require("url");
var router        = express.Router();
var controller    = require('../controllers/pokemon');

router.get('/',function(req, res, next){
  controller.kindofPokemon(req,res);
  res.end();
});


module.exports    = router;