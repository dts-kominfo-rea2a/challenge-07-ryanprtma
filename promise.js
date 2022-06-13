const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (data) => {
  return (async () => {
    let result = 0
    const res1 = await promiseTheaterIXX()
    const res2 = await promiseTheaterVGC()
    let newArr = [...res1, ...res2]
    newArr.forEach(element => {
      if (data == 'marah' && element.hasil == 'marah') {
        result++
      } else if (data == 'tidak marah' && element.hasil == 'tidak marah') {
        result++
      }
    });
    return result
  })()
}

module.exports = {
  promiseOutput,
};
