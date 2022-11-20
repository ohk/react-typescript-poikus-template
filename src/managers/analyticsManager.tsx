import { logEvent } from 'firebase/analytics'
import { analytics } from '../wrappers/firebaseWrapper'
import LoggerWrapper from '../wrappers/loggerWrapper'

/* eslint-disable  @typescript-eslint/no-explicit-any */

const AnalyticsManager = (eventID: string, eventData: any) => {
  logEvent(analytics, eventID, eventData)
  LoggerWrapper({ eventID, eventData }, 'Analytics Event Sended')
}

export default AnalyticsManager
