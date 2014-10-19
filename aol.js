

var express = require('express');
var app = express();

app.get('/hello', function(req, res){
	var now = new Date;

	var Crawler = require("crawler").Crawler;
	var keyword="grunt";
	var url = 'http://search.aol.com/aol/search?v_t=comsearch&enabled_terms=&q='+keyword+'&page=';
	var urls = [];
	var max = 1;
	for(var i=1;i<=max;i++){
		urls.push(url+i);
	}

	var results = [];

	var cnt = 1;
	var c = new Crawler({
		"maxConnections":10,
		"callback":function(error,result,$) {
			$('.hac a').each(function(){ 
				results.push ( $(this).attr('href') ); 
			});

			if(cnt++ == max){

				res.send("<h1>" +(new Date() - now)+"</h1>" + results.join(""));

			}

			
		}
	});


	c.queue(urls);
  
});



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});