import { getRecoil, setRecoil } from 'recoil-nexus'
import { LogTypes } from '../constants/types'
import logState from '../managers/stateManager/logState'

/* eslint-disable no-console */
/* eslint-disable  @typescript-eslint/no-explicit-any */

const printMessage = (type: LogTypes, message: any, key?: any) => {
  if (message === undefined) {
    return
  }
  const consoller = type === LogTypes.warn ? console.warn : type === LogTypes.error ? console.error : console.log
  if (key !== undefined) {
    consoller(`${key} -> `, message)
  } else {
    consoller(message)
  }
}

/**
 *
 * @param message Log olarak basılacak mesaj - Zorunlu - JSON yada String
 * @param group Eğer bir group mesaj olarak iletilecek group ismi
 * @param type Log tipi -> info || warn || error
 */
const LoggerWrapper = async (message: any, group?: string, type: LogTypes = LogTypes.info) => {
  const logs = getRecoil(logState)
  let anyArray: any[] = [...logs]
  anyArray.unshift(message)
  if (process.env.NODE_ENV !== 'production') {
    if (group !== undefined) {
      console.group(group)
    }
    switch (typeof message) {
      case 'object':
        for (const [key, value] of Object.entries(message)) {
          printMessage(type, value, key)
        }
        break
      default:
        printMessage(type, message)
        break
    }
    if (group !== undefined) {
      console.groupEnd()
    }
  }
  const envMaxLimit = process.env.REACT_APP_MAX_LOG_LIMIT
  const maxLogLimit = envMaxLimit !== undefined ? parseInt(envMaxLimit) : 10
  if (logs.length > maxLogLimit) {
    // TODO: SEND LOG TO LOG SERVERS
    console.log('Log Manager', anyArray)
    anyArray = []
  }
  setRecoil(logState, anyArray)
}

export default LoggerWrapper
