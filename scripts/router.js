import ImageView from './views/index';

import {ImagesCollection} from './models/image';


var Router = Backbone.Router.extend({
  routes: {
    // '': 'index', will be user login screen
    '': 'imageBoard' //property name will be changed once user login screen added
  },

  initialize: function() {
    this.listenTo(this.images, 'add', function() {
      this.navigate('messages', {trigger: true});
    });
    this.images = new ImagesCollection();

  },

  // index: function(){
  //   ADD DURING HARD MODE FOR USER LOGIN
  // },

  imageBoard: function() {
    var imageView = new ImageView({
      collection: this.images
    });
    $('.app-container').html(imageView.el);
    this.images.fetch();
  }
});

var router = new Router();

export default router;
