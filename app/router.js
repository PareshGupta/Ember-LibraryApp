import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');

  this.route('admin', function() {
    this.route('invitations');
    this.route('contacts');
  });

  this.route('libraries', function() {
    this.route('new');
    this.route('edit', { path: '/:library_id/edit' });
    this.route('delete', { path: '/:library_id/' });
  });
});

export default Router;
