const loadpromotion = require("./promotions");

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
  result.discountType = promotion1 > promotion2 ? "满满30减6元" : "指定菜品半价(黄焖鸡，凉皮)";
  return result;

}

module.exports = {
  getTotalPriceWithPromotion,
}
