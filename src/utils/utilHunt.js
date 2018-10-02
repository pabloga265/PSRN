import Hunt from '../models/hunt'
import { minerals, plants } from '../models/materials'
import floors from '../models/floors'

const huntActions = {
  coords: {
    X: x => x,
    N: y => y + 1,
    W: x => x - 1,
    E: x => x + 1,
    S: y => y - 1
  },

  getMap: (n) => {
    let floor = floors[n]
    let map = this.generateGrid(floor.depth, floor.width)
    let c = this.coords

    /* fill the grid */
    /* initial room in the midle of floor 0 */
    let initialRoom = this.generateNewRoom(floor, 0, 'start')
    map[0][Math.ceil(floor.width / 2)].push(initialRoom)

    for (let x = 2; x < 21; x++) {
      let countRoomsWidth = 0
      for (let y = 1; y < 11; y++) {
        if (countRoomsWidth > 1) break // to avoid floors too crouded, this may cause map to be too left sided.

        let currentTile = {
          NW: map[c.N(x)][c.W(y)],
          NX: map[c.N(x)][c.X(y)],
          NE: map[c.N(x)][c.E(y)],
          XW: map[c.X(x)][c.W(y)],
          XX: map[c.X(x)][c.X(y)],
          XE: map[c.X(x)][c.E(y)],
          SW: map[c.S(x)][c.W(y)],
          SX: map[c.S(x)][c.X(y)],
          SE: map[c.S(x)][c.E(y)]
        }

        if (Math.random() > 0.9 && Object.entries(currentTile).every(room => room.length === 0)) {
          currentTile.XX = this.generateNewRoom(n, x)
        }
      }
    }

    let _map = this.createPaths(map)

    return _map
  },

  createPaths: (map) => {
    return true
  },

  generateNewRoom: (floor, depth, modifier) => {
    return 'room'
  },

  drawMap: (map) => {

  },

  /* generate empty grid Y x X + 1 margin */
  generateGrid: (depth, width) => {
    let tiles = []
    for (let x = 0; x < depth + 2; x++) {
      tiles.push(new Array(width + 2))
    }
    return tiles
  },

  drawMap: (map) => {

  }
}

export default huntActions
