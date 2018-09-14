/*eslint-disable */

/*
null  = 0 // 0000
built = 1 // 0001
level = 2 // 0010
working = 4 // 0100
destroyed = 8 // 1000
*/

export const Town = {
  farm: 0,
  laboratory: 0,
  lore: 0,
  politics: 0,
  workshop: 0,
  mating: 0,
  recruiting: 0,
  exploring: 0,
  alchemy: 0,
  religion: 0
}

export const Hunter = {
  level: 'int',       // 0-100 First level won in education next levels won when beating monsters|tasks equals or higher level
  age: 'int',         // 0-30 every hunt +1 20 > get a chance to die = Math.random() * 10 <= age - 20
  sex: 'string',      // [F]emale | [M]ale
  name: 'string',     // Free form default utils.generateName(sex)
  id: 'int',          // next.id //TODO 
  dad: 'int',         // D.id
  mum: 'int',         // M.id
  born: 'date',       // new Date()
  deceased: 'int',    // new Date()

  hp: 'int',          // Math.floor(100 + hunter.stats.ENDURANCE + hunter.stats.STRENGTH / 2 + hunter.equipment.reduce((ac, item) => ac + item.hp      + item.ENDURANCE + item.STRENGTH / 2)),
  stamina: 'int',     // Math.floor(100 + hunter.stats.ENDURANCE + hunter.stats.REFLEX   / 2 + hunter.equipment.reduce((ac, item) => ac + item.stamina + item.ENDURANCE + item.REFLEX   / 2)),
  mana: 'int',        // Math.floor(100 + hunter.stats.PERSONA   + hunter.stats.SMARTS   / 2 + hunter.equipment.reduce((ac, item) => ac + item.mana    + item.PERSONA   + item.SMARTS   / 2)),

  defennse: {
    phisical: 'int',  // 
    magical: 'int',   // 
    resistance: 'int' // 
  },

  stats:{
    CHARISMA: 'int',    // 0-100  Math.min(Math.floor((F.CHARISMA   * 0.4 + M.CHARISMA  * 0.6) + (_CHARISMA  * _YO)),    100 + ((_CHARISMA === 10  && _YO === 1)    && 10))
    ENDURANCE: 'int',   // 0-100  Math.min(Math.floor((F.ENDURANCE  * 0.7 + M.ENDURANCE * 0.3) + (_ENDURANCE * _SKILL)), 100 + ((_ENDURANCE === 10 && _SKILL === 1) && 10))
    PERSONA: 'int',     // 0-100  Math.min(Math.floor((F.PERSONA    * 0.2 + M.PERSONA   * 0.8) + (_PERSONA   * _YO)),    100 + ((_PERSONA === 10   && _YO === 1)    && 10))
    REFLEX: 'int',      // 0-100  Math.min(Math.floor((F.REFLEX     * 0.6 + M.REFLEX    * 0.4) + (_REFLEX    * _SKILL)), 100 + ((_REFLEX === 10    && _SKILL === 1) && 10))
    SMARTS: 'int',      // 0-100  Math.min(Math.floor((F.SMARTS     * 0.3 + M.SMARTS    * 0.7) + (_SMARTS    * _YO)),    100 + ((_SMARTS === 10    && _YO === 1)    && 10))
    STRENGTH: 'int',    // 0-100  Math.min(Math.floor((F.STRENGTH   * 0.8 + M.STRENGTH  * 0.2) + (_STRENGTH  * _SKILL)), 100 + ((_STRENGTH === 10  && _SKILL === 1) && 10))

    _STRENGTH: 'int',   // rand 0-10 
    _ENDURANCE: 'int',  // rand 0-10 
    _REFLEX: 'int',     // rand 0-10 
    _SMARTS: 'int',     // rand 0-10 
    _PERSONA: 'int',    // rand 0-10 
    _CHARISMA: 'int',   // rand 0-10 

    _SKILL: 'int',      // rand 0-1
    _YO: 'int'          // rand 0-1
  },

  equipment: {},
  skills: {},
  assignment: {}
} 


export const Society = {

}

export const Monster = {

}
