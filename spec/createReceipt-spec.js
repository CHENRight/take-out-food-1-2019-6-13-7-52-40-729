const createreceipt = require("../src/createReceipt");

describe('Take out food', function () {

  it('should return receipt string when it input a receipt object array and bookingInfo', function() {
    //given
    const firstReceipt = {discount: 13, finalTotalPrice: 25, discountType: "指定菜品半价(黄焖鸡，凉皮)"};
    const bookingInfo = [
      {id: "ITEM0001", name: "黄焖鸡", price: 18, count: 1, totalPrice: 18},
      {id: "ITEM0013", name: "肉夹馍", price: 6, count: 2, totalPrice: 12},
      {id: "ITEM0022", name: "凉皮", price: 8, count: 1, totalPrice: 8}
    ];
    //when
    const result = createreceipt.createReceipt(firstReceipt,bookingInfo);
    const expected = "黄焖鸡 x 1 = 18元\n" +
      "肉夹馍 x 2 = 12元\n" +
      "凉皮 x 1 = 8元\n" +
      "-----------------------------------\n" +
      "使用优惠:\n" +
      "指定菜品半价(黄焖鸡，凉皮)，省13元\n";
    //then
    expect(result).toEqual(expected);

  });

});
