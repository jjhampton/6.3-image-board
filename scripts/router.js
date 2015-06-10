import ImageView from './views/index';

import {ImagesCollection} from './models/image';


var Router = Backbone.Router.extend({
  routes: {
    // '': 'index', will be user login screen
    '': 'messageList' //property name will be changed once user login screen added
  },

  initialize: function() {

  },

  messageList: function() {

  }
});

var router = new Router();

export default router;
