/*global describe, it*/

var isItBST = require('./index');
require('chai').should();

describe('isItBST()', function() {
  it('knows', function () {
    // start of year
    isItBST(new Date('2014-01-01 12:00Z')).should.equal(false);

    // day before clocks go forward
    isItBST(new Date('2014-03-29 12:00Z')).should.equal(false);

    // moment of clocks going forward
    isItBST(new Date('2014-03-30 00:00Z')).should.equal(false);
    isItBST(new Date('2014-03-30 00:59Z')).should.equal(false);
    isItBST(new Date('2014-03-30 01:00Z')).should.equal(true);
    isItBST(new Date('2014-03-30 02:00Z')).should.equal(true);

    // day after clocks go forward
    isItBST(new Date('2014-03-31 12:00Z')).should.equal(true);

    // mid summer
    isItBST(new Date('2014-06-21 12:00Z')).should.equal(true);

    // day before clocks go back
    isItBST(new Date('2014-10-25 12:00Z')).should.equal(true);

    // moment of clocks going back
    isItBST(new Date('2014-10-26 00:00Z')).should.equal(true);
    isItBST(new Date('2014-10-26 00:59Z')).should.equal(true);
    isItBST(new Date('2014-10-26 01:00Z')).should.equal(false);
    isItBST(new Date('2014-10-26 02:00Z')).should.equal(false);

    // day after clocks go back
    isItBST(new Date('2014-10-27 12:00Z')).should.equal(false);

    // end of year
    isItBST(new Date('2014-12-31 12:00Z')).should.equal(false);
  });

  it('can be called without arguments', function () {
    isItBST().should.be.a('boolean');
  });
});
