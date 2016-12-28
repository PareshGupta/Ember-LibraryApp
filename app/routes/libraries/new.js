import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('library');  
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
