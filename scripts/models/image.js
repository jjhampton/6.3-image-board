var Image = Backbone.Model.extend({
  idAttribute: '_id',
  //Try removing function from defaults if this doesn't work -
  defaults: function() {
    return {
      caption: '',
      url: '',
      created_at: new Date()
    };
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/images'
});

export default {Image, ImageCollection };
