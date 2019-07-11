const loadallitems = require("./items");
const loadpromotion = require("./promotions");

const createItemList = items => {
  let result = {};
  items.forEach(item => {
    item = item.replace(/\s/ig, '');
    let temp = item.split("x");
    result[temp[0]] = temp[1];
  });
  return result;
}

const getItemInfo = (id) => {
  return loadallitems.loadAllItems().filter(item => item.id === id)[0]
}

const getCompleteBookInfo = (booking) => {
  let result = [];
  Object.keys(booking).forEach(id => {
    let tempItem = getItemInfo(id);
    tempItem.count = parseInt(booking[id]);
    tempItem.totalPrice = parseInt(tempItem.count * tempItem.price);
    result.push(tempItem);
  })
  return result;
}

const getTotalPriceWithPromotion = (bookingInfo) => {

  let promotionID = loadpromotion.loadPromotions()[1].items;
  let initPrice = bookingInfo.reduce((tempresult,curItem) => {
    return tempresult + curItem.totalPrice;
  },0);
  let promotion1 = initPrice >= 30 ? 6 : 0;
  let promotion2 = bookingInfo.reduce((tempresult,curItem) => {
    if(promotionID.indexOf(curItem.id) !== -1){
      tempresult += curItem.totalPrice / 2;
    }
    return tempresult;
  },0);
  let result = {};
  result.discount = promotion1 > promotion2 ? promotion1 : promotion2;
  result.finalTotalPrice = initPrice - result.discount;
  result.discountType = promotion1 > promotion2 ? "满30减6元" : "指定菜品半价(黄焖鸡，凉皮)";
  return result;

}

const createReceipt = (firstReceipt,bookingInfo) => {
  let receipt = '';
  bookingInfo.forEach(item =>{
    receipt += `${item.name} x ${item.count} = ${item.totalPrice}元\n`;
  })
  if(firstReceipt.discount > 0){
    receipt += "-----------------------------------\n使用优惠:\n";
    receipt += `${firstReceipt.discountType}，省${firstReceipt.discount}元\n`;
  }
  return receipt;
}

const createFinalReceiptString = (receipt,firstReceipt) =>{
  let result = "============= 订餐明细 =============\n";
  result += receipt;
  result += "-----------------------------------\n"
  result += `总计：${firstReceipt.finalTotalPrice}元\n`
  result += "===================================";
  return result;

}

function bestCharge(inputs) {
  
  const bookingList = createItemList(inputs);
  const bookingInfo = getCompleteBookInfo(bookingList);
  const firstReceipt = getTotalPriceWithPromotion(bookingInfo);
  const receipt = createReceipt(firstReceipt,bookingInfo);
  return  createFinalReceiptString(receipt,firstReceipt);

}

module.exports = bestCharge;

