const priceAndDiscount = require('../src/getPriceAndDiscount');

describe('Take out food', function () {

  it('should return price and discount object when input booking object array', function () {
    const inputs = [
      {id: "ITEM0001", name: "黄焖鸡", price: 18, count: 1, totalPrice: 18},
      {id: "ITEM0013", name: "肉夹馍", price: 6, count: 2, totalPrice: 12},
      {id: "ITEM0022", name: "凉皮", price: 8, count: 1, totalPrice: 8}
    ];
    let summary = priceAndDiscount.getTotalPriceWithPromotion(inputs);

    let expected = {discount: 13, finalTotalPrice: 25, discountType: "指定菜品半价(黄焖鸡，凉皮)"};
    expect(summary).toEqual(expected);
  });
});
