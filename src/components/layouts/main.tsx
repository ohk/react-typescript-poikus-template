import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { LayoutTypes } from '../../constants/types'

interface Props {
  children?: ReactNode
  className?: string
  type?: LayoutTypes
}

function AuthLayout({ children, className, ...props }: Props) {
  return (
    <div className={twMerge('flex bg-background justify-center items-center min-h-screen', className)} {...props}>
      <div className={twMerge('w-[500px] border-2 border-primary-64 bg-white p-4 rounded-lg min-h-[200px]')}>{children}</div>
    </div>
  )
}

function StandartLayout({ children, className, ...props }: Props) {
  return (
    <div className={twMerge('flex bg-background justify-center items-center min-h-screen', className)} {...props}>
      {children}
    </div>
  )
}

function Layout({ type, children, ...props }: Props) {
  const ChosenLayout = type === LayoutTypes.AUTH ? AuthLayout : StandartLayout
  return <ChosenLayout {...props}>{children}</ChosenLayout>
}

export default Layout
