import error from './utilErrors'

const utils = {
  rand: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
}

export default utils
