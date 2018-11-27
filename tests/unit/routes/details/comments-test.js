import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | details/comments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:details/comments');
    assert.ok(route);
  });
});
