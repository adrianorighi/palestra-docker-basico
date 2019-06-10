var express = require("express");
var app = express();
var router = express.Router();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.send("Hello World");
});

app.use("/", router);

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
