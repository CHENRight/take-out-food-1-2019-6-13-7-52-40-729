
const getItemInfo = (id) => {
  return loadAllItems().filter(item => item.id === id)[0]
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


module.exports = {
  getCompleteBookInfo,
}
