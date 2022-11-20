import { atom } from 'recoil'
import { AuthTypes } from '../../constants/types'

const authState = atom({
  key: 'authState',
  default: {
    userInfo: undefined,
    authLevel: AuthTypes.NORMAL
  }
})

export default authState
