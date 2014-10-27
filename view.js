var Backbone = require("backbone");

return Backbone.View.extend({
  template: JST["temp.html"]
  ,initialize:function(){

  }
  ,render:function(){
    this.$el.html(this.template());
  }
});
