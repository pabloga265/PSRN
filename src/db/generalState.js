import generalState from '../state/AppState'

const Realm = require('realm')

// ------------------ MODELS ------------------
const HunterSchema = {
  name: 'Hunter',
  primaryKey: 'id',
  properties: {
    id: 'int', // D.id + M.id
    level: 'int', // 0-100
    age: 'int', // 0-30
    sex: 'string', // [F]emale | [M]ale
    name: 'string', // Free form default hunterActions.generateName(sex)
    dad: 'int', // D.id
    mum: 'int', // M.id
    born: 'date', // new Date()
    deceased: 'int?', // new Date() when dead
    stats: 'HunterStats',
    equipment: 'HunterEquipment[]',
    skills: 'HunterSkills[]'
  }
}

const HunterEquipmentSchema = {
  name: 'HunterEquipment',
  properties: {
    name: 'string',
    hp: 'int',
    stamina: 'int',
    mana: 'int',
    STRENGTH: 'int',
    ENDURANCE: 'int',
    REFLEX: 'int',
    CHARISMA: 'int',
    SMARTS: 'int',
    PERSONA: 'int',
    skills: 'HunterSkills[]'
  }
}

const HunterStats = {
  name: 'HunterStats',
  properties: {
    STRENGTH: 'int',
    ENDURANCE: 'int',
    REFLEX: 'int',
    CHARISMA: 'int',
    SMARTS: 'int',
    PERSONA: 'int'
  }
}

const HunterSkillsSchema = {
  name: 'HunterSkills',
  properties: {
    name: 'string',
    effect: 'string'
  }
}

const TownSchema = {
  name: 'Town',
  properties: {
    id: 'int'
  }
}

const GeneralSchema = {
  name: 'General',
  properties: {
    tutorial: {type: 'bool', default: false},
    hunters: 'Hunter[]',
    town: 'Town[]',
    floorReached: {type: 'int', default: 0}
  }
}

class ApiRealm {
  constructor (options) {
    this.schemaName = {
      'General': [GeneralSchema, HunterSchema, TownSchema, HunterStats, HunterEquipmentSchema, HunterSkillsSchema],
      'Hunter': [HunterSchema, HunterStats, HunterEquipmentSchema, HunterSkillsSchema],
      'Town': TownSchema
    }
  }

  errorHandler (error) {
    console.log('%c%cERROR%c',
      'padding:4px 50px;background: repeating-linear-gradient(-55deg, Yellow, yellow 10px, black 10px, black 20px);',
      'color:Yellow;background-color:black;padding:4px 10px;text-align:center;',
      'padding:4px 50px;background: repeating-linear-gradient(-55deg, Yellow, yellow 10px, black 10px, black 20px);')
    console.log(error)
  }

  // POST    - Create           - 201 (Created)
  POST (schema, data) {
    Realm.open({schema: [...schema]})
      .then(realm => {
        realm.write(() => {
          realm.create(schema, data)
        })
        realm.close()
      })
      .catch(error => this.errorHandler(error))
  }

  addHunter (schema, data) {
    let schemas = schema.map(schema => this.schemaName['General']).reduce((acc, val) => acc.concat(val), [])
    Realm.open({schema: [...schemas]})
      .then(realm => {
        realm.write(() => {
          realm.objects('General')[0].hunters.push(realm.create(schema[0], data, true))
        })
        realm.close()
      })
      .catch(error => this.errorHandler(error))
  }

  PATCH (schema, data) {
    let schemas = schema.map(schema => this.schemaName[schema]).reduce((acc, val) => acc.concat(val), [])
    Realm.open({schema: [...schemas]})
      .then(realm => {
        realm.write(() => {
          realm.create(schema[0], data)
        })
        realm.close()
      })
      .catch(error => this.errorHandler(error))
  }

  // GET     - Read             - 200 (OK)
  GET (schema, filter = '', sort = '') {
    let schemas = schema.map(schema => this.schemaName[schema])
    let flatSchemas = schemas.reduce((acc, val) => acc.concat(val), [])
    Realm.open({schema: [...flatSchemas]})
      .then(realm => {
        if (realm.empty) {
          realm.write(() => {
            let initialState = realm.create('General', {tutorial: false, hunters: [], town: [], floorReached: 0})
            initialState.hunters.push({
              id: 1,
              sex: 'M',
              name: '...',
              dad: 0,
              mum: 0,
              born: new Date(),
              level: 1,
              age: 1,
              stats: {
                STRENGTH: 2,
                ENDURANCE: 1,
                REFLEX: 1,
                CHARISMA: 1,
                SMARTS: 1,
                PERSONA: 0
              },
              items: [],
              skills: []
            })
            initialState.hunters.push({
              id: 2,
              sex: 'F',
              name: '...',
              dad: 0,
              mum: 0,
              born: new Date(),
              level: 1,
              age: 1,
              stats: {
                STRENGTH: 1,
                ENDURANCE: 1,
                REFLEX: 1,
                CHARISMA: 2,
                SMARTS: 1,
                PERSONA: 0
              },
              items: [],
              skills: []
            })
            initialState.hunters.push({
              id: 3,
              sex: 'M',
              name: '...',
              dad: 0,
              mum: 0,
              born: new Date(),
              level: 1,
              age: 1,
              stats: {
                STRENGTH: 1,
                ENDURANCE: 2,
                REFLEX: 1,
                CHARISMA: 1,
                SMARTS: 1,
                PERSONA: 0
              },
              items: [],
              skills: []
            })
            initialState.hunters.push({
              id: 4,
              sex: 'F',
              name: '...',
              dad: 0,
              mum: 0,
              born: new Date(),
              level: 1,
              age: 1,
              stats: {
                STRENGTH: 1,
                ENDURANCE: 1,
                REFLEX: 1,
                CHARISMA: 1,
                SMARTS: 2,
                PERSONA: 0
              },
              items: [],
              skills: []
            })
            initialState.town.push({id: 1})
          })
        }
        let objects = realm.objects(schema[0])
        generalState.addGeneralStateItem(objects)
        realm.close()
      })
      .catch(error => this.errorHandler(error))
  }
}

const api = new ApiRealm()
export default api
