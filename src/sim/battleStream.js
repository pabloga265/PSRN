import hunterActions from '../utils/utilHunters'
import huntActions from '../utils/utilHunt'
import Hunt from '../models/hunt'

class Battle {
  constructor (hunters, floor) {
    this.position = ['lt', 'rt', 'lb', 'rb']
    this.H = this.parseHunters(hunters)
    this.F = this.parseFloor(floor)

    this.hunt = new Hunt(this.H, this.F)
  }

  parseFloor (floor) {
    let floorSteps = []

    /* with the number of floors and having in state how many times they
    have visited that floor we chose 5 steps that can be traps enemies bosses etc... */
    floorSteps.push(huntActions.getMap(floor))
  }

  parseHunters (hunters) {
    let parsedHunters = []

    hunters.forEach((h, i) => {
      let hunter = {
        name: h.name, 
        id: h.id,
        hp: h.hp,
        mana: h.mana,
        stamina: h.stamina,
        speed: hunterActions.calculateSpeed(h),
        position: this.position[i]
      }

      parsedHunters.push(hunter)
    })

    return parsedHunters.sort((a, b) => a.speed < b.speed)
  }
}

export default Battle
