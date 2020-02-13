export const getTableData = text => {
    return fetch(`http://www.json-generator.com/api/json/get/coJwhddnNe`)
      .then(res => res.json())
      .then(results => results)
  }