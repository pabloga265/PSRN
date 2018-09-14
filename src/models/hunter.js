import hunterActions from '../utils/utilHunters'
import utils from '../utils/generalUtils'

class Hunter {
  constructor (daddy, mummy, id) {
    this.sex = !utils.rand(0, 1) ? 'M' : 'F'
    this.level = 0
    this.age = 0
    this.name = hunterActions.generateName(this.sex)
    this.id = hunterActions.getId()
    this.dad = daddy.id
    this.mum = mummy.id
    this.born = new Date()
    this.stats = this.getNewStats(daddy.stats, mummy.stats)
  }

  /*eslint-disable*/
  getNewStats (F, M) {
    let _SKILL =     utils.rand(0, 1)
    let _YO =        utils.rand(0, 1)
    let _STRENGTH =  utils.rand(0, 10)
    let _ENDURANCE = utils.rand(0, 10)
    let _REFLEX =    utils.rand(0, 10)
    let _SMARTS =    utils.rand(0, 10)
    let _CHARISMA =  utils.rand(0, 10)
    let _PERSONA =   utils.rand(0, 10)

    let stats = {
      CHARISMA:   Math.min(Math.floor((F.CHARISMA   * 0.4 + M.CHARISMA  * 0.6) + (_CHARISMA  * _YO)),    100 + ((_CHARISMA === 10  && _YO === 1)    && 10)),
      ENDURANCE:  Math.min(Math.floor((F.ENDURANCE  * 0.7 + M.ENDURANCE * 0.3) + (_ENDURANCE * _SKILL)), 100 + ((_ENDURANCE === 10 && _SKILL === 1) && 10)),
      PERSONA:    Math.min(Math.floor((F.PERSONA    * 0.2 + M.PERSONA   * 0.8) + (_PERSONA   * _YO)),    100 + ((_PERSONA === 10   && _YO === 1)    && 10)),
      REFLEX:     Math.min(Math.floor((F.REFLEX     * 0.6 + M.REFLEX    * 0.4) + (_REFLEX    * _SKILL)), 100 + ((_REFLEX === 10    && _SKILL === 1) && 10)),
      SMARTS:     Math.min(Math.floor((F.SMARTS     * 0.3 + M.SMARTS    * 0.7) + (_SMARTS    * _YO)),    100 + ((_SMARTS === 10    && _YO === 1)    && 10)),
      STRENGTH:   Math.min(Math.floor((F.STRENGTH   * 0.8 + M.STRENGTH  * 0.2) + (_STRENGTH  * _SKILL)), 100 + ((_STRENGTH === 10  && _SKILL === 1) && 10))
    }

    return stats
  }
}
export default Hunter