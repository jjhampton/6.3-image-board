export default Backbone.View.extend({
    template: JST.imageList,

    events: {
      'submit .add-image-form': 'addImage'
    },

    initialize: function(options) {
    // this.username SEE EXAMPLE
    this.render();
    this.listenTo(this.collection, 'update', this.render);
    },

    render: function() {
      this.$el.html(this.template(this.collection.toJSON()));
    },

    addImage: function(event) {
      event.preventDefault();
      var url = this.$('.image-input-url').val();
      var caption = this.$('.image-input-caption').val();
      this.collection.create({
        caption: caption,
        url: url
      });

    }
});
