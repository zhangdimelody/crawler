module.exports = function(){

  this["JST"] = this["JST"] || {};

  this["JST"]["temp.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n<title>NEW search</title>\r\n<link type="text/css" rel="stylesheet" href="http://www.search.com/css/aol.css" />\r\n<script type="text/javascript" src="http://www.search.com/js/jquery.js"></script>\r\n<script type="text/javascript" src="http://www.search.com/js/migrate.js"></script>\r\n<script type="text/javascript">\r\n\t$(function(){\r\n\t\t$(".search_btn").click(function(){\r\n\t\t\twindow.location.href = "/search?k=" + $(".search_input").val();\r\n\t\t});\r\n\t});\r\n</script>\r\n</head>\r\n<body>\r\n\t<p>\r\n\t\t<input class="search_input" type="text" value=\'d\'><a href="javascript:void(0)" class="search_btn">搜索</a>\r\n\t</p>\r\n\t\r\n\t\r\n</body>\r\n</html>';}return __p};

  this["JST"]["temp1.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n<html xmlns="http://www.w3.org/1999/xhtml">\r\n<head>\r\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\r\n<title>NEW search</title>\r\n<link type="text/css" rel="stylesheet" href="http://www.search.com/css/aol.css" />\r\n<script type="text/javascript" src="http://www.search.com/js/jquery.js"></script>\r\n<script type="text/javascript" src="http://www.search.com/js/migrate.js"></script>\r\n<script type="text/javascript" src="http://www.search.com/node_modules/underscore.js"></script>\r\n<script type="text/javascript">\r\n\t$(function(){\r\n\t\t$(".search_btn").click(function(){\r\n\t\t\twindow.location.href = "/search?k=" + $(".search_input").val();\r\n\t\t});\r\n\t});\r\n</script>\r\n</head>\r\n<body>\r\n\r\n<input class="search_input" type="text"/><a href="javascript:void(0)" class="search_btn">搜索</a>\r\n\r\n\r\n</body>\r\n</html>';}return __p};

  return this["JST"];

};