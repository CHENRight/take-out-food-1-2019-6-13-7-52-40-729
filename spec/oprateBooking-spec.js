const opratebook = require("..//src/oprateBooking.js");
describe('Take out food', function () {

  it('should return a array when booking has input', function() {
    //given
    const inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"]
    //when
    const result = opratebook.oprateBooking(inputs);
    const expected = {ITEM0001: "1", ITEM0013: "2", ITEM0022: "1"}
    //then
    expect(result).toStrictEqual(expected);

  });



});
