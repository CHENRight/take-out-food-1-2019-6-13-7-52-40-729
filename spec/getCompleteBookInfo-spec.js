const getInfo = require('../src/getCompleteBookInfo.js');

it('should be result = expected when invoke getCompleteBookInfo given inputs = inputs', () => {
  //given
  const inputs ={ITEM0001: "1", ITEM0013: "2", ITEM0022: "1"};
  //when
  const result = getInfo.getCompleteBookInfo(inputs);
  const expected = [
    {id: "ITEM0001", name: "黄焖鸡", price: 18, count: 1, totalPrice: 18},
    {id: "ITEM0013", name: "肉夹馍", price: 6, count: 2, totalPrice: 12},
    {id: "ITEM0022", name: "凉皮", price: 8, count: 1, totalPrice: 8}
  ];
  //then
  expect(result).toEqual(expected);
});
