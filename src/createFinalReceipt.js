
const createFinalReceiptString = (receipt,firstReceipt) =>{
  let result = "============= 订餐明细 =============\n";
  result += receipt;
  result += "-----------------------------------\n";
  result += `总计：${firstReceipt.finalTotalPrice}元\n`;
  result += "===================================";
  return result;

}

module.exports = {
  createFinalReceiptString,
}
