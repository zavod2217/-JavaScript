/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
  let arrFilter = [], arrSelect = []
  Object.values(arguments).forEach(item => {
    if (typeof item === 'function' && item.name === 'filterData') arrFilter.push(item)
    if (typeof item === 'function' && item.name === 'selectData') arrSelect.push(item)
  })
  arrFilter.forEach(func => collection = func(collection))
  arrSelect.forEach(func => collection = func(collection))

  return collection
}

/**
 * @params {String[]}
 */
function select() {
  const selectData = data => {
    return data.map(item =>  {
      const element = {}
      Object.values(arguments).forEach(field => {
        if (item[field]) element[field] = item[field]
      })
      return element
    }).filter(item => Object.keys(item).length)
  }
  return selectData
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
  const filterData = data => {
    return data.filter(item => {
      return values.indexOf(item[property]) > -1
    })
  }
  return filterData
}


module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
