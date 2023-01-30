import { getRecoil, setRecoil } from 'recoil-nexus'
import { ThemeManagerActionType, ThemeTypes } from '../constants/types'
import themeState from './stateManager/themeState'

const ThemeManager = (action?: ThemeManagerActionType) => {
  const themeMode = getRecoil(themeState)
  switch (action) {
    case ThemeManagerActionType.SWITCH:
      if (themeMode === ThemeTypes.LIGHT) {
        setRecoil(themeState, ThemeTypes.DARK)
      } else {
        setRecoil(themeState, ThemeTypes.LIGHT)
      }
      break
    default:
      return themeMode
      break
  }
}

export default ThemeManager
