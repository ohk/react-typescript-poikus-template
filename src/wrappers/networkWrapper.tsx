import { LogTypes, NetworkRequestTypes } from '../constants/types'
import LoggerWrapper from './loggerWrapper'

/**
 *
 * @param path Request için gerekli zorunlu path
 * @param parameters Request'in alabileceği parametreler - zorunlu değil
 * @returns base_url ile hazırlanmış bir url döner
 */
const prepareRequestUrl = (path: string, parameters: JSON | undefined): string => {
  let changedUrl = process.env.REACT_APP_BASE_URL + '/' + path
  if (parameters !== undefined) {
    changedUrl += '?'
    for (const [key, value] of Object.entries(parameters)) {
      changedUrl += `${key}=${value}&`
    }
    changedUrl = changedUrl.substring(0, changedUrl.length - 1)
  }
  return changedUrl
}

/**
 *
 * @param type Request'in type'ını belirler. NetworkRequestTypes enum'ından beslenir
 * @param path Request için gerekli zorunlu path
 * @param parameters Request'in alabileceği parametreler - zorunlu değil
 * @param body Request'in bir body'si varsa burada doldurulur
 * @returns Promise -> Resolve or Reject
 */
const NetworkWrapper = async (type: NetworkRequestTypes, path: string, parameters?: JSON | undefined, body?: JSON | undefined) => {
  const begin = Date.now()
  const preparedURL = prepareRequestUrl(path, parameters)
  const response = await fetch(preparedURL, {
    method: type,
    mode: 'cors',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'
    },
    body: JSON.stringify(body)
  })

  const end = Date.now()
  const resonseJSON = await response.json()
  LoggerWrapper(
    {
      'Request Response Time': `${end - begin} ms`,
      'Request Full URL': preparedURL,
      'Request Type': type,
      'Request Body': body,
      Response: resonseJSON
    },
    'Service Request',
    response.status === 200 ? LogTypes.info : LogTypes.error
  )

  return new Promise((resolve, reject) => {
    switch (response.status) {
      case 200:
        resolve(resonseJSON)
        break
      case 400:
      case 403:
        reject(resonseJSON)
        break
      case 401:
      case 404:
        // TODO: LOGIN, REDIRECT
        break
      default:
        reject(resonseJSON)
        break
    }
  })
}

export default NetworkWrapper
