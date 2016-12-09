import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('rentals', function() {
    this.route('show', {
      path: '/:rental_id'
    });
  });
  this.route('page-not-found', {
    path: '/*wildcard'
  });
  this.route('widgets');
});

export default Router;
