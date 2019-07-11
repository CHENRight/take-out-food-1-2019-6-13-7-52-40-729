
const createItemList = items => {
  let result = {}
  items.forEach(item => {
    item = item.replace(/\s/ig, '');
    let temp = item.split("x");
    result[temp[0]] = temp[1];
  })
  return result;
}

module.exports = {
  createItemList,
}
