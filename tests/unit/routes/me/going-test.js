import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | me/going', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:me/going');
    assert.ok(route);
  });
});
