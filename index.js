var _ = require("underscore");
var express = require('express');
var crawler = require("crawler");
var JST = require("./templates/common.js");
var app = express();
var crawler = crawler;
var Backbone = require("backbone");
// app.register('.html', require('jade'));

app.get('/',function(req,res){
	// res.render('aol.html');
	res.sendfile('temp1.html');
	
});

// 匹配所有以 /search 开头的请求
app.get(/^\/search/, function(req, res){
	var Crawler = crawler.Crawler;
	var originalUrl = req.originalUrl;
	
	var temp = originalUrl.indexOf('k=')+2;
	var keyword = originalUrl.substring(temp);
	
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
				console.log(results)
				// var template = JST["temp.html"]();
				// console.log(template)

				// return Backbone.View.extend({
				//   template: JST["temp.html"]
				//   ,initialize:function(){

				//   }
				//   ,render:function(){
				//     $('body').html(this.template());
				//   }
				// });
				// item.render();
				var data = {};
				data.content = results;
				var te = {'a' : 1};
				var ab = JST()["temp1.html"];
				var cc = ab(te)
				// console.log(a)
				res.send(cc);
				
			}
		// $("#pagination ul a").length
			
		}
	});


	c.queue(urls);

  
});
// app.use();


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});