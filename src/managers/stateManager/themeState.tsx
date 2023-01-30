import { atom } from 'recoil'
import { ThemeTypes } from '../../constants/types'

const themeState = atom({
  key: 'themeState',
  default: ThemeTypes.LIGHT
})

export default themeState
