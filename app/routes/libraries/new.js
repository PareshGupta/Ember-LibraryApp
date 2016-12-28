import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('library');  
  },

  // below is a hook method used when need to set params with along with routes.
  // in this case:- title and buttonLabel used in form.hbs
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new library');
    controller.set('buttonLabel', 'Create');
  },

  // below is a hook method used when need to render differenttemplate then default.(by default:- new.hbs).
  renderTemplate() {
    this.render('libraries/form');
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => {
        this.transitionTo('libraries');
        this.get('flashMessages').success('Library successfully created.');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
