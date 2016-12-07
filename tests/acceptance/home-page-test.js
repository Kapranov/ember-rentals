import { test } from 'qunit';
import moduleForAcceptance from 'ember-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home page');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/rentals');
  });
});
test('should redirect link to rentals.', function (assert) {
  visit('/');

  andThen(function () {
    assert.equal(currentURL(), '/rentals', 'should redirect to rentals');
  });
});
