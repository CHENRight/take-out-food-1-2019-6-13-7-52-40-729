
const oprateBooking = items => {
  let result = {};
  items.forEach(item => {
    item = item.replace(/\s/ig, '');
    let temp = item.split("x");
    result[temp[0]] = temp[1];
  })
  //console.log(result);
  return result;
}

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

function bestCharge(inputs) {
  let result = "============= 订餐明细 =============\n";
  const booking = oprateBooking(inputs);
  const bookingInfo = getCompleteBookInfo(booking);


  return result;
}

