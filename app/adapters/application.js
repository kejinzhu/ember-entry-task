// app/adapters/application.js
import DS from 'ember-data';
import { get } from '@ember/object';
import { computed } from '@ember/object';

// import JSONAPIAdapter from 'ember-data/adapters/json-api';
export default DS.RESTAdapter.extend({
  namespace:'api/v1',
  host: 'http://localhost:3000',
  headers: computed(function() {
    return {
      'X-BLACKCAT-TOKEN':get(document.cookie.match(/apiKey\=([^;]*)/),'1')
    };
  }).volatile()
});
