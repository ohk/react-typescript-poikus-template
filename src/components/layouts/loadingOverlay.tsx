import { useRecoilValue } from 'recoil'
import networkState from '../../managers/stateManager/networkState'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import ClipLoader from 'react-spinners/RiseLoader'
const LoadingOverlay = () => {
  const networkVal = useRecoilValue(networkState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (Object.keys(networkVal).length > 0) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [networkVal])
  return (
    <div
      className={twMerge(
        'flex bg-white bg-opacity-20  w-screen h-screen absolute top-0 left-0 justify-center items-center content-center',
        !loading ? 'invisible ' : 'visible'
      )}
    >
      <ClipLoader color={'#ffffff'} loading={true} size={15} aria-label="Loading Spinner" data-testid="loader" />
    </div>
  )
}

export default LoadingOverlay
