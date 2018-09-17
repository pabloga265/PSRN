import { StyleSheet, Platform } from 'react-native'

const COLORS = {
  LGREY: '#D0CCD0',
  DGREY: '#605856',
  LRED: '#CD533B',
  DRED: '#CD232F',
  LBLUE: '#91AEC1',
  DBLUE: '#274156',
  LGREEN: '#AEBD38',
  DGREEN: '#598234'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DGREY,
    padding: 15
  },
  nrmText: {
    color: COLORS.LGREY
  },
  warText: {
    color: COLORS.LRED
  },
  ErrText: {
    color: COLORS.DRED
  },
  sccText: {
    color: COLORS.LGREEN
  },
  radialMenu_Container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    bottom: 0,
    height:'40%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  radialMenu: {
    backgroundColor: COLORS.LBLUE,
    position: 'absolute',
    bottom: -20,
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.DBLUE
  },
  radialMenu_Icon: {
    color: COLORS.LGREY,
    alignSelf: 'center'
  }
})
