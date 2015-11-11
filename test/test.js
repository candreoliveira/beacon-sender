var BeaconSender = require('../src/beacon');
var expect = require('expect.js');
var sinon = require('sinon');
console.log(BeaconSender)
//
// describe('Send', function() {
//   it('should dispatch xhr', function () {
//     assert.equal(-1, [1,2,3].indexOf(5));
//     assert.equal(-1, [1,2,3].indexOf(0));
//   });
// });

var xhr, requests, sender;

before(function () {
    sender = new BeaconSender;
});

it("Test", function () {
    var spy = sinon.spy(sender.eventsQueue, "push");
    sender.queue({
      topic: 'a',
      data: 'b'
    });
    expect(spy.calledOnce).to.be.ok();
    // getTodos(42, sinon.spy());
    //
    // assert.equals(requests.length, 1);
    // assert.match(requests[0].url, "/todo/42/items");
});
