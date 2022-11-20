import { AuthTypes, LayoutTypes } from './types'
import Home from '../pages/home'

const RouteList = [
  {
    path: '/',
    key: 'home',
    authLevel: AuthTypes.NORMAL,
    layout: LayoutTypes.STANDART,
    component: Home
  }
]

export default RouteList
