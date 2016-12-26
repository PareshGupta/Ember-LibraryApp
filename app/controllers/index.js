import Ember from 'ember';

export default Ember.Controller.extend({

  emailValue: '',
  firstName: 'Paresh',
  lastName: 'Gupta',
  emailAddress: '',
  responseMessage: '',

  actions: {
    saveInvitation() {
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
      this.set('emailAddress', '');
    }
  },

  actualEmailAddress: Ember.computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: Ember.observer('emailAddress', function() {
    console.log('observer is called', this.get('email'));
  }),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  // isDisabled: Ember.computed.empty('emailValue'),

  // fullName: Ember.computed('firstName', 'lastName', {
  //   get(key) {
  //     return `${this.get('firstName')} ${this.get('lastName')}`;    
  //   },

  //   set(key, value) {
  //     let [firstName, lastName] = value.split(/\s+/);
  //     this.set('firstName', firstName);
  //     this.set('lastName', lastName);
  //     return value;
  //   }
  // })

});
