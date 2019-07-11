const Items = require("./items");

const getItemInfo = (id) => {
  return Items.loadAllItems().filter(item => item.id === id)[0];
}

const getCompleteBookInfo = (booking) => {
  let result = [];
  Object.keys(booking).forEach(id => {
    let tempItem = getItemInfo(id);
    tempItem.count = parseInt(booking[id]);
    tempItem.totalPrice = tempItem.count * tempItem.price;
    result.push(tempItem);
  })
  return result;
}


module.exports = {
  getCompleteBookInfo,
}
