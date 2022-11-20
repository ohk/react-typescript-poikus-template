import { atom } from 'recoil'

/* eslint-disable  @typescript-eslint/no-explicit-any */

const logState = atom({
  key: 'logState',
  default: [] as any[]
})

export default logState
