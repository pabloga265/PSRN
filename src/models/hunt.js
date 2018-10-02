import huntActions from '../utils/utilHunters'
import hunterActions from '../utils/utilHunters'

class Hunt {
  constructor (hunters, floor) {
    this.position = ['lt', 'rt', 'lb', 'rb']
    this.H = this.parseHunters(hunters)
    this.F = this.parseFloor(floor)

    //.sort((a, b) => a.speed < b.speed)
  }

  parseFloor (floor) {
    return floor
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

    return parsedHunters
  }
}

export default Hunt
