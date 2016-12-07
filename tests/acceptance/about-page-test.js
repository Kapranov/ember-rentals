import { test } from 'qunit';
import moduleForAcceptance from 'ember-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about page');

test('visiting /about', function (assert) {
  visit('/about');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('should link to root application and redirect to rentals.', function (assert) {
  visit('/about');

  click('a:contains("SuperRentals")');
  andThen(function () {
    assert.equal(currentURL(), '/rentals', 'should navigate to root application and redirect to rentals');
  });
});

test('should link to about page.', function (assert) {
  visit('/about');
  click('a:contains("About")');

  andThen(function () {
    assert.equal(currentURL(), '/about', 'should go to about page');
  });
});

test('should link to contact page.', function (assert) {
  visit('/about');
  click('a:contains("Contact")');

  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should go to contact page');
  });
});

test('should link to contact information', function (assert) {
  visit('/about');
  click('a:contains("Contact")').then(function() {
    fillIn('.jumbo a.button', 'Contact');
  });

  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should show contents for a about', function (assert) {
  visit('/about');
  fillIn('.jumbo .right.tomster', 'http://emberjs.com/images/tomsters/teaching.png');

  andThen(function() {
    var jombo = find('.jumbo');
    var tomster = find('.jumbo .right .tomster');
    var title = find('.jumbo h2');
    var paragraph = find('.jumbo p');
    var button = find('.jumbo a.button');
    assert.equal(jombo.length, 1);
    assert.equal(tomster.length, 0);
    assert.equal(title.length, 1);
    assert.equal(paragraph.length, 1);
    assert.equal(button.length, 1);
    assert.equal(find('.jumbo').is(':visible'), true);
    assert.equal(find('.jumbo .right').is(':visible'), true);
    assert.equal(find('.jumbo .tomster').is(':visible'), true);
    assert.equal(find('.jumbo h2').is(':visible'), true);
    assert.equal(find('.jumbo p').is(':visible'), true);
    assert.equal(find('.jumbo h2').text(), "About Super Rentals", 'should title the about');
    assert.equal(find('.jumbo p').exists);
    assert.equal(find('a').is(':visible'), true);
    assert.equal(find('p').is(':visible'), true);
    assert.equal(find('.button').is(':visible'), true);
  });
});
