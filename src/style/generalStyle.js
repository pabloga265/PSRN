import { StyleSheet, Platform } from 'react-native'

const COLORS = {
  LGREY: '#F0F7F4',
  MLGREY: '#303236',
  MDGREY: '#373c45',
  DGREY: '#24323F',
  LRED: '#CD533B',
  DRED: '#CD232F',
  LBLUE: '#CEE5F2',
  DBLUE: '#7E8D85',
  LGREEN: '#AEBD38',
  DGREEN: '#598234'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.DGREY
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  contentContainerStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  nrmText: {
    color: COLORS.LGREY,
    fontSize: 16,
    lineHeight: 20
  },
  warText: {
    color: COLORS.LRED,
    fontSize: 16,
    lineHeight: 20
  },
  ErrText: {
    color: COLORS.DRED,
    fontSize: 16,
    lineHeight: 20
  },
  sccText: {
    color: COLORS.LGREEN,
    fontSize: 16,
    lineHeight: 20
  },
  nrmTextBG: {
    color: COLORS.DGREY,
    backgroundColor: COLORS.LGREY,
    padding: 2,
    fontSize: 16,
    lineHeight: 20
  },
  warTextBG: {
    color: COLORS.LGREY,
    backgroundColor: COLORS.LRED,
    padding: 2,
    fontSize: 16,
    lineHeight: 20
  },
  errTextBG: {
    color: COLORS.LGREY,
    backgroundColor: COLORS.DRED,
    padding: 2,
    fontSize: 16,
    lineHeight: 20
  },
  sccTextBG: {
    color: COLORS.LGREY,
    backgroundColor: COLORS.DGREEN,
    padding: 2,
    fontSize: 16,
    lineHeight: 20
  },
  dblText: {
    color: COLORS.DBLUE,
    fontSize: 16,
    lineHeight: 20
  },
  dgrText: {
    color: COLORS.DGREEN,
    fontSize: 16,
    lineHeight: 20
  },
  smallTitle: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: 'bold'
  },

  /* list items */
  liContainer: {
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    width: '90%',
    alignSelf: 'center',
    minHeight: 50,
    margin: 5,
    flexDirection: 'row',
    backgroundColor: COLORS.MDGREY
  },
  liContainerFocus: {
    margin: 1,
    minHeight: 200,
    backgroundColor: COLORS.MDGREY
  },
  listContainerFloorNumber: {
    height: '100%',
    backgroundColor: COLORS.MLGREY,
    width: '20%',
    paddingTop: 10,
    marginRight: 15,
    textAlign: 'center',
    textAlignVertical: 'center'
  },

  /* Radial menu */
  radialMenu_Container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    bottom: 0,
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  radialMenu: {
    backgroundColor: COLORS.DGREY,
    position: 'absolute',
    bottom: -20,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.LBLUE
  },
  radialMenu_Icon_Active: {
    color: COLORS.LGREEN
  },
  radialMenu_Choices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%'
  },
  radialMenu_Choice: {
    color: COLORS.LGREY
  },
  radialMenu_Icon: {
    color: COLORS.LGREY,
    alignSelf: 'center'
  },

  leftLine: {
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    height: '100%',
    left: '15%'
  }
})
