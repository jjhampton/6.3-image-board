export default Backbone.View.extend({
    template: JST.image-list,

    events: {
      'submit .add-image-form': 'addImage'
    },

    initialize: function(options) {
    // this.username SEE EXAMPLE
    this.render();
    this.listenTo(this.collection, 'update', this.render)
    },

    render: function() {
      this.$el.html(this.templatethis.collection());
    },

    addImage: function() {

    }
});
