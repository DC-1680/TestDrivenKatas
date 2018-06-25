const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns an empty string if empty string was provided', () => {
        expect(wrap("", 20)).to.equal("");
    });
    it('Inserts line break after specified max length', () => {
        expect(wrap('Before jumping into any code, take some time to think about possible test cases.', 20).to.be('Before jumping into \nany code, take some \ntime to think about \npossible test cases.'));
    });
});
