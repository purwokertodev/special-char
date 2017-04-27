'use strict';

const chai = require('chai');
chai.should();
const sinon = require('sinon');

const StringDecoder = require('string_decoder').StringDecoder;

const sc = require('../index');

describe('Getting Special Character', () => {

  let decoder = null;

  before(() => {
    decoder = new StringDecoder('utf8');
  });

  it('should return special char', (done) => {
    sc.YEN_SIGN.should.be.equal(decoder.write(Buffer.from([0xc2, 0xa5])));
    done();
  });


});
