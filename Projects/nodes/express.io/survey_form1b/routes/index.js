module.exports = function Route(app){
	app.get('/', function(req, res){
    	res.render('index', {title:'Welcome Page'});
	});
 //you will add more routes and logic here but this is how to write the default route for your project
 	app.post('/result', function (req, res){
      console.log(req.body);
      name = req.body.name;
      location = req.body.location;
      language = req.body.language;
      comment = req.body.comment;
    	res.render('results', {title:'Submitted Information'});
  	});

}