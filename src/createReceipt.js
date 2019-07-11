
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
module.exports = {
  createReceipt,
}
