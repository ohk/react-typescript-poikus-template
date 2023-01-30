import { Navigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { AuthTypes } from '../constants/types'
import authState from '../managers/stateManager/authState'

interface Props {
  authLevel: AuthTypes
  children: JSX.Element
  pathName: string
}

const ProtectedRoute = ({ authLevel, children, pathName, ...props }: Props): JSX.Element => {
  const authHandler = useRecoilValue(authState)
  const isAuthProtected = authLevel > 0
  const isAuthLevelEnough = authHandler.authLevel >= authLevel
  const isUserLogin = authHandler.userInfo !== undefined

  if (isAuthLevelEnough !== true) {
    return <Navigate to={{ pathname: '/401' }} />
  }
  if (isAuthProtected && !isUserLogin) {
    return <Navigate to={{ pathname: '/login' }} state={{ from: pathName, ...props }} />
  }
  return children
}

export default ProtectedRoute
