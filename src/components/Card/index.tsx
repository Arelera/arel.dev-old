import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}
export default function Card({ children, className }: Props) {
  return (
    <div className={clsx('rounded-xl bg-black bg-opacity-30 p-10', className)}>
      {children}
    </div>
  )
}
