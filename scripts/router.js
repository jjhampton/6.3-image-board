import ImageView from './views/index';

import {ImageCollection} from './models/image';


var Router = Backbone.Router.extend({
  routes: {
    // '': 'index', will be user login screen
    '': 'index' //property name will be changed once user login screen added
  },

  initialize: function() {
    // // this.listenTo(this.images, 'add', function() {
    //   this.navigate('index', {trigger: true});
    // });
    this.images = new ImageCollection();

  },

  /*
   * Route Handlers
   */

  index: function() {
    var imageView = new ImageView({
      collection: this.images
    });
    $('.app-container').html(imageView.el);
    this.images.fetch();
  }
});

var router = new Router();

export default router;
