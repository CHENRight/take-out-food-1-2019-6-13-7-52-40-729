const createfinalreceipt = require("../src/createFinalReceipt");


describe('Take out food', function () {

  it('should return completed receipt string when it input receipt and firstReceipt Object', function() {
    //given
    const firstReceipt = {discount: 13, finalTotalPrice: 25, discountType: "指定菜品半价(黄焖鸡，凉皮)"};
    const receipt =  "黄焖鸡 x 1 = 18元\n" +
      "肉夹馍 x 2 = 12元\n" +
      "凉皮 x 1 = 8元\n" +
      "-----------------------------------\n" +
      "使用优惠:\n" +
      "指定菜品半价(黄焖鸡，凉皮)，省13元\n" ;
    //when
    const result = createfinalreceipt.createFinalReceiptString(receipt,firstReceipt);
    const expected = `
============= 订餐明细 =============
黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元
-----------------------------------
使用优惠:
指定菜品半价(黄焖鸡，凉皮)，省13元
-----------------------------------
总计：25元
===================================`.trim()
    //then
    expect(result).toEqual(expected);

  });

});

