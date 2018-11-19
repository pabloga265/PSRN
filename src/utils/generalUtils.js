import error from './utilErrors'

const utils = {
  rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
}

/* deep counting

const count = arr => arr.reduce((count, subArr) => (
  subArr.forEach(m => count[m] = (count[m] || 0) + 1),
  count
), {})

FOREACH ASYNC

const searchForEach = (callback, [name, ...names]) =>
  !name
    ? Promise.resolve()
    : callback(name).then(searchForEach(callback, names))

*/
export default utils
