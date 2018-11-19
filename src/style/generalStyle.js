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
  DGREEN: '#598234',

  BG: '#575C68',
  BODY: '#272C38',
  TEXT: '#272C38',
  TEXTLIGHT: '#737A88',
  ELEM: '#313544',
  ACCENT: '#51E3C2',
  DARKACCENT: '#344F55',
  LISTEVEN: '#222635',
  LISTODD: '#282C3A'
}

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BG
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
    color: COLORS.TEXTLIGHT,
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
    margin: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.BODY
  },
  liContainerFocus: {
    margin: 1,
    minHeight: 200,
    backgroundColor: COLORS.BODY
  },
  listContainerFloorNumber: {
    height: '100%',
    backgroundColor: COLORS.ELEM,
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
    backgroundColor: COLORS.ACCENT,
    position: 'absolute',
    bottom: -20,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.DARKACCENT
  },
  radialMenu_Icon_Active: {
    color: COLORS.ACCENT
  },
  radialMenu_Choices: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    width: '100%',
    height: '100%'
  },
  radialMenu_Choice: {
    color: COLORS.ACCENT
  },
  radialMenu_Icon: {
    color: COLORS.DARKACCENT,
    alignSelf: 'center'
  },

  leftLine: {
    borderWidth: 1,
    borderColor: COLORS.DARKACCENT,
    position: 'absolute',
    height: '100%',
    left: '15%'
  }
})
