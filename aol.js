var express = require('express');
var crawler = require("crawler");
var app = express();
var crawler = crawler;
// app.register('.html', require('jade'));

app.get('/',function(req,res){
	// res.render('aol.html');
	res.sendfile('aol.html');
	
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
				
				res.send('<html xmlns="http://www.w3.org/1999/xhtml">'
						+'<head>'
						+'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
						+'<title>NEW search</title>'
						+'<link type="text/css" rel="stylesheet" href="http://www.search.com/css/aol.css" />'
						+'<script type="text/javascript" src="http://www.search.com/js/jquery.js"></script>'
						+'<script type="text/javascript" src="http://www.search.com/js/migrate.js"></script>'
						+'<script type="text/javascript">'
						+	'$(function(){'
						+		'$(".search_btn").click(function(){'
						+			'window.location.href = "/search?k=" + $(".search_input").val();'
						+		'});'
						+	'});'
						+'</script>'
						+'</head>'
						+'<body>'
						+'<p><input class="search_input" type="text" value='+keyword+'><a href="javascript:void(0)" class="search_btn">搜索</a>'
						+'</p><h1>' +'</h1>' + results.join("<br/>"))
						+'</body>'
						+'</html>';
				
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