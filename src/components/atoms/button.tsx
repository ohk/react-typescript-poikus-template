import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonColorTypes, ThemeTypes } from '../../constants/types'
import ThemeManager from '../../managers/themeManager'

interface Props {
  children?: ReactNode
  className?: string
  color?: ButtonColorTypes
  disabled?: boolean
  onClick: (...args: any[]) => any
}

const getButtonColor = (disabled?: boolean, color?: ButtonColorTypes): string => {
  const theme = ThemeManager()
  if (theme === ThemeTypes.DARK) {
    if (color === ButtonColorTypes.SECONDARY) {
      if (disabled === true) {
        return 'bg-secondaryDark-300 border-secondaryDark-700'
      } else {
        return 'bg-secondayDark-500 border-secondaryDark-700'
      }
    } else {
      if (disabled === true) {
        return 'bg-primaryDark-300 border-primaryDark-700'
      } else {
        return 'bg-primaryDark-500 border-primaryDark-700'
      }
    }
  } else {
    if (color === ButtonColorTypes.SECONDARY) {
      if (disabled === true) {
        return 'bg-secondaryLight-300 border-secondaryLight-700'
      } else {
        return 'bg-secondaryLight-500 border-secondaryLight-700'
      }
    } else {
      if (disabled === true) {
        return 'bg-primaryLight-300 border-primaryLight-700'
      } else {
        return 'bg-primaryLight-500 border-primaryLight-700'
      }
    }
  }
}

const PKSButton = ({ children, className, color, disabled, onClick, ...props }: Props) => {
  return (
    <button disabled={disabled} className={twMerge('border-2 p-4 rounded-2xl my-2', getButtonColor(disabled, color), className)} onClick={(e) => onClick(e)}>
      {children}
    </button>
  )
}

export default PKSButton
