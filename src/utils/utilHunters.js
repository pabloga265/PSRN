import error from './utilErrors'
import camp from './utilCamp'
import Hunter from '../models/hunter'

const hunterActions = {
  procreate: (parent1, parent2) => {
    console.log(`Procreating...\n\t1: ${parent1}\n\t2: ${parent2}`)
    if (parent1.sex === parent2.sex) { console.log(error.sameSex()); return }

    let F = parent1.sex === 'M' ? parent1 : parent2
    let M = parent1.sex === 'F' ? parent1 : parent2

    let baby = new Hunter(F, M)
    camp.presentBaby(baby)
    return baby
  },

  generateName: (sex) => {
    let names = {
      M: ['Pablo', 'Gagik', 'Nerif'],
      F: ['Minna', 'Bast', 'Nora']
    }

    return names[sex][Math.floor(Math.random() * Math.floor(names[sex].length))]
  },

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
      }
    }

    let S = statsMap[stat]
    let H = hunter.stats
    let E = hunter.equipment

    return Math.floor(100 + H[S.main] + H[S.scnd] / 2 + (E.length ? E.reduce((ac, item) => ac + item[stat] + item[S.main] + item[S.scnd] / 2) : 0))
  },

  assignHuntersToTasks () { }
}

export default hunterActions
