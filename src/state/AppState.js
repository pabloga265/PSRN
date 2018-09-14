import { observable, computed, action } from 'mobx'
import api from '../db/generalState'
import hunterActions from '../utils/utilHunters'

class ObservableGeneralState {
  @observable generalState = {}

  /*steps for initializing the state*/
  init () {
  	api.GET(['General'])
  }

  addGeneralStateItem (item) {
    this.generalState = {
      tutorial: item[0].tutorial,
      hunters: this.parseHunters(item[0].hunters),
      town: this.parseTown(item[0].town),
      nextHunterId: item[0].hunters[item[0].hunters.length - 1].id + 1
    }

    hunterActions.assignHuntersToTasks()
  }



  /* get actions */
  @computed get listHunters () {return this.generalState.hunters}
  @computed get getId () {return this.generalState.nextHunterId}
  
  @action addHunter (hunter) {
    this.generalState.hunters.push(hunter)
    api.PUT(['Hunter'], hunter)
  }

  /* Parsers */
  parseHunters (hunters) {
    let hunterList = hunters.map((hunter) => { 
      return {
        sex: hunter.sex,
        level: hunter.level,
        age: hunter.age,
        name: hunter.name,
        id: hunter.id,
        dad: hunter.dad,
        mum: hunter.mum,
        born: hunter.born,
        deceased: hunter.deceased || false,
        hp: hunterActions.calculateStat(hunter, 'hp'),
        stamina: hunterActions.calculateStat(hunter, 'stamina'),
        mana: hunterActions.calculateStat(hunter, 'mana'),
        defense: {
          phisical: 'int',  
          magical: 'int',   
          resistance: 'int'
        },
        stats: {
          CHARISMA: hunter.stats.CHARISMA,
          ENDURANCE: hunter.stats.ENDURANCE,
          PERSONA: hunter.stats.PERSONA,
          REFLEX: hunter.stats.REFLEX,
          SMARTS: hunter.stats.SMARTS,
          STRENGTH: hunter.stats.STRENGTH
        },
        equipment: []
      }
    })

    return hunterList
  }

  parseTown (town) {
    return town
  }
}


const generalState = new ObservableGeneralState()
export default generalState