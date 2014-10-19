var Backbone = require("backbone");

return Backbone.View.extend({
  template: _.template('<input class="search_input" type="text"/><a href="#" class="search_btn">搜索</a>')
  ,initialize:function(){

  }
  ,render:function(){
    this.$el.html(this.template());
  }
});
