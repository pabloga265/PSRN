import error from './utilErrors'
import camp from './utilCamp'
import Hunter from '../models/hunter'
import generalState from '../state/AppState'

const hunterActions = {
  procreate: (parent1, parent2) => {
    if (parent1.sex === parent2.sex) { console.log(error.sameSex()); return }

    let F = parent1.sex === 'M' ? parent1 : parent2
    let M = parent1.sex === 'F' ? parent1 : parent2

    let baby = new Hunter(F, M)

    camp.presentBaby(baby)
    return baby
  },

  generateName: (sex) => {
    let names = {
      M: ['Pablo', 'Gagik', 'Nerif', 'Ugeen'],
      F: ['Minna', 'Bast', 'Nora', 'Ada']
    }

    return names[sex][Math.floor(Math.random() * Math.floor(names[sex].length))]
  },

  getNextId: () => generalState.getId,

  calculateStat (hunter, stat) {
    let statsMap = {
      hp: {
        main: 'ENDURANCE',
        scnd: 'STRENGTH'
      },
      stamina: {
        main: 'ENDURANCE',
        scnd: 'REFLEX'
      },
      mana: {
        main: 'PERSONA',
        scnd: 'SMARTS'
      },
      perception: {
        main: 'SMARTS',
        scnd: 'REFLEX'
      }
    }

    let S = statsMap[stat]
    let H = hunter.stats
    let E = hunter.equipment
    let L = hunter.level

    return Math.floor(10 * L + H[S.main] + H[S.scnd] / 2 + (E.length ? E.reduce((ac, item) => ac + item[stat] + item[S.main] + item[S.scnd] / 2) : 0))
  },

  calculateSpeed: (h) => h.stats.REFLEX * 10 - (h.stats.STRENGTH - h.eqipment.reduce(this.calculateWeight, 0)),

  calculateWeight: (acc, cur) => acc + cur.weight,

  assignToTasks () { }
}

export default hunterActions
