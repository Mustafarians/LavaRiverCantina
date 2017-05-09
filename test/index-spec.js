var assert = require('assert');
var Tester = require('../index')
describe('Port Number,', function() {
    it('Just checking port Number', function() {
        var result = Tester.port;
        assert.equal(result, "10000");  
    })
});