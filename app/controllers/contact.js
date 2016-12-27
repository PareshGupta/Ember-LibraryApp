import Ember from 'ember';

export default Ember.Controller.extend({

  message: '',
  emailAddress: '',
  name: '',
  responseMessage:'',

  emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  messageValid: Ember.computed.gte('message.length', 10),
  nameValid: Ember.computed.gt('name.length', 0),

  isValid: Ember.computed.and('nameValid', 'messageValid', 'emailValid'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
    sendMessage() {
      this.set('responseMessage', 'We got your message and we’ll get in touch soon');
      this.set('message', '');
      this.set('emailAddress', '');
      this.set('name', '');
    }
  },

  messageChanged: Ember.observer('message', function() {
    console.log('observer is called', this.get('message'));
  })

  
});
