var express = require('express');
var crawler = require("crawler");
var backbone = require("backbone");
var app = express();
var crawler = crawler;
var Backbone = backbone;

app.get('/search', function(req, res){
	// var now = new Date;
	return Backbone.View.extend({
		// template: _.template('<input class="search_input" type="text"/><a href="#" class="search_btn">搜索</a>')
		events:{
			"click .search_btn"   : "searchResult"
		}
		,initialize:function(){

		}
		,render:function(){
			alert(0)
			this.$el.html('<input class="search_input" type="text"/><a href="#" class="search_btn">搜索</a>');
			return this;
		}
		,searchResult:function(){
			var Crawler = crawler.Crawler;
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
						// (new Date() - now)
						res.send("<h1>" +"</h1>" + results.join(""));

					}

					
				}
			});


			c.queue(urls);
		}
	});

	// view.render();

	
  
});



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});