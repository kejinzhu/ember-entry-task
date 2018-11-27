import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | details/participants', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:details/participants');
    assert.ok(route);
  });
});
