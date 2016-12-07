import { test } from 'qunit';
import moduleForAcceptance from 'ember-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact page');

test('visiting /contact', function (assert) {
  visit('/contact');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});

test('should link to root application and redirect to rentals.', function (assert) {
  visit('/contact');

  click('a:contains("SuperRentals")');
  andThen(function () {
    assert.equal(currentURL(), '/rentals', 'should navigate to root application and redirect to rentals');
  });
});

test('should link to about page.', function (assert) {
  visit('/contact');
  click('a:contains("About")');

  andThen(function () {
    assert.equal(currentURL(), '/about', 'should go to about page');
  });
});

test('should link to contact page.', function (assert) {
  visit('/contact');
  click('a:contains("Contact")');

  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should go to contact page');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/contact');
  click('a:contains("About")');

  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should show contents for a contact', function (assert) {
  visit('/contact');
  fillIn('.tomster', 'http://emberjs.com/images/tomsters/teaching.png');

  andThen(function() {
    var jombo = find('.jumbo');
    var tomster = find('.jumbo .right .tomster');
    var title = find('.jumbo h2');
    var paragraph = find('.jumbo p');
    var links = find('.jumbo p a');
    var new_line = find('.jumbo p br');
    var button = find('.jumbo a.button');
    assert.equal(jombo.length, 1);
    assert.equal(tomster.length, 0);
    assert.equal(title.length, 1);
    assert.equal(paragraph.length, 2);
    assert.equal(links.length, 2);
    assert.equal(new_line.length, 3);
    assert.equal(button.length, 1);
    assert.equal(find('.jumbo h2').text(), "Contact Us", 'should title the contact');
    assert.equal(find('.jumbo').is(':visible'), true);
    assert.equal(find('.jumbo .right').is(':visible'), true);
    assert.equal(find('.jumbo .tomster').is(':visible'), true);
    assert.equal(find('a').is(':visible'), true);
    assert.equal(find('p').is(':visible'), true);
    assert.equal(find('.button').is(':visible'), true);
    assert.equal(find('address').is(':visible'), true);
    assert.equal(find('p a').notNull);
  });
});
