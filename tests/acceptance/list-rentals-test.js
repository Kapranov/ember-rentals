import { test } from 'qunit';
import moduleForAcceptance from 'ember-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('visiting /rentals', function (assert) {
  visit('/rentals');

  andThen(function() {
    assert.equal(currentURL(), '/rentals');
  });
});

test('should link to root application and redirect to rentals.', function (assert) {
  visit('/rentals');
  click('a:contains("SuperRentals")');

  andThen(function () {
    assert.equal(currentURL(), '/rentals', 'should navigate to root application and redirect to rentals');
  });
});

test('should link to information about the company.', function (assert) {
  visit('/rentals');
  click('a:contains("About Us!")');

  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to about page.', function (assert) {
  visit('/rentals');
  click('a:contains("About")');

  andThen(function () {
    assert.equal(currentURL(), '/about', 'should go to about page');
  });
});

test('should link to contact page.', function (assert) {
  visit('/rentals');
  click('a:contains("Contact")');

  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should go to contact page');
  });
});

test('should show contents for a rentals', function (assert) {
  visit('/rentals');

  andThen(function() {
    var jombo = find('.jumbo');
    var tomster = find('.jumbo .right .tomster');
    var title = find('.jumbo h2');
    var paragraph = find('.jumbo p');
    var links = find('.jumbo a');
    assert.equal(jombo.length, 1);
    assert.equal(tomster.length, 0);
    assert.equal(title.length, 1);
    assert.equal(paragraph.length, 1);
    assert.equal(links.length, 1);
    assert.equal(find('.jumbo').is(':visible'), true);
    assert.equal(find('.jumbo .right').is(':visible'), true);
    assert.equal(find('.jumbo .tomster').is(':visible'), true);
    assert.equal(find('p').is(':visible'), true);
    assert.equal(find('.jumbo h2').text(), "Welcome!", 'should title the rentals');
    assert.equal(find('.button').is(':visible'), true);
    assert.equal(find('article').is(':visible'), true);
    assert.equal(find('article.listing').is(':visible'), true);
    assert.equal(find('article .detail.owner').is(':visible'), true);
    assert.equal(find('article .detail.owner span').is(':visible'), true);
    assert.equal(find('article .detail.type').is(':visible'), true);
    assert.equal(find('article .detail.type span').is(':visible'), true);
    assert.equal(find('article .detail.type span').is(':visible'), true);
    assert.equal(find('article .detail.location').is(':visible'), true);
    assert.equal(find('article .detail.location span').is(':visible'), true);
    assert.equal(find('article .detail.bedrooms').is(':visible'), true);
    assert.equal(find('article .detail.bedrooms span').is(':visible'), true);
  });
});
