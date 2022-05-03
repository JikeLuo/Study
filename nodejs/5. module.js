const mom = require('moment')
const ds = require('./module/getDate')

const dd = new Date();
console.log(dd)
const da = ds.dateFormat(dd)
console.log(da)

const dz = mom().format();
console.log(dz)