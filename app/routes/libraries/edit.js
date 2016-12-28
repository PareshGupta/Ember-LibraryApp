import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  // below is a hook method used when need to set params with along with routes.
  // in this case:- title and buttonLabel used in form.hbs
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit library');
    controller.set('buttonLabel', 'Save changes');
  },

  // below is a hook method used when need to render differenttemplate then default.(by default:- edit.hbs).
  renderTemplate() {
    this.render('libraries/form');
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => {
        this.transitionTo('libraries');
        this.get('flashMessages').success('Library successfully updated.');
      });
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
