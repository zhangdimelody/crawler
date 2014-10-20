var express = require('express');
var crawler = require("crawler");
var app = express();
var crawler = crawler;

app.get('/',function(req,res){
	res.sendfile('aol.html');
});

// 匹配所有以 /search 开头的请求
app.get(/^\/search/, function(req, res){
	var Crawler = crawler.Crawler;
	
	var originalUrl = req.originalUrl;
	var keyword = originalUrl.substring(originalUrl.indexOf('k='));
	
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
				
				res.send('<p><input class="search_input" type="text"/><a href="javascript:void(0)" class="search_btn">搜索</a>'
					+'</p><h1>' +'</h1>' + results.join(""));

			}
		// $("#pagination ul a").length
			
		}
	});


	c.queue(urls);

  
});



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});