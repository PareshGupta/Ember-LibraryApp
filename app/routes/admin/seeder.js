import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return new Promise((resolve, reject) => {
  //     Promise.all([
  //       this.store.findAll('library'),
  //       this.store.findAll('book'),
  //       this.store.findAll('author')
  //     ]).then(results => {
  //       resolve(results);
  //     })
  //   })
  // },

  model() {
    return Ember.RSVP.hash({
      libraries: this.store.findAll('library'),
      books: this.store.findAll('book'),
      authors: this.store.findAll('author')
    })
  },

  setupController(controller, model) {
    controller.set('libraries', model.libraries);
    controller.set('books', model.books);
    controller.set('authors', model.authors);
  }

});
