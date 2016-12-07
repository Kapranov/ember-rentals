import { test } from 'qunit';
import moduleForAcceptance from 'ember-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting /about', function (assert) {
  visit('/about');
  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});

test('visiting /contact', function (assert) {
  visit('/contact');
  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('should show contents for a about', function (assert) {
  visit('/about');
  andThen(function() {
    var jombo = find('.jumbo');
    var tomster = find('.jumbo .right .tomster');
    var title = find('.jumbo h2');
    var paragraph = find('.jumbo p');
    assert.equal(jombo.length, 1);
    assert.equal(tomster.length, 0);
    assert.equal(title.length, 1);
    assert.equal(paragraph.length, 1);
    assert.equal(find('.jumbo').is(':visible'), true);
    assert.equal(find('.jumbo .right').is(':visible'), true);
    assert.equal(find('.jumbo .tomster').is(':visible'), true);
    assert.equal(find('.jumbo h2').is(':visible'), true);
    assert.equal(find('.jumbo p').is(':visible'), true);
    assert.equal(find('.jumbo h2').text(), "About Super Rentals", 'should title the about');
    assert.equal(find('a').is(':visible'), true);
    assert.equal(find('.button').is(':visible'), true);
  });
});

test('should show contents for a contact', function (assert) {
  visit('/contact');
  andThen(function() {
    var jombo = find('.jumbo');
    var tomster = find('.jumbo .right .tomster');
    var title = find('.jumbo h2');
    var paragraph = find('.jumbo p');
    var links = find('.jumbo p a');
    var new_line = find('.jumbo p br');
    assert.equal(jombo.length, 1);
    assert.equal(tomster.length, 0);
    assert.equal(title.length, 1);
    assert.equal(paragraph.length, 2);
    assert.equal(links.length, 2);
    assert.equal(new_line.length, 3);
    assert.equal(find('.jumbo').is(':visible'), true);
    assert.equal(find('.jumbo .right').is(':visible'), true);
    assert.equal(find('.jumbo .tomster').is(':visible'), true);
    assert.equal(find('p').is(':visible'), true);
    assert.equal(find('br').is(':visible'), false);
    assert.equal(find('address').is(':visible'), true);
    assert.equal(find('a').is(':visible'), true);
    assert.equal(find('.button').is(':visible'), true);
  });
});

test('should link to contact information', function (assert) {
  visit('/about');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/contact');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});
