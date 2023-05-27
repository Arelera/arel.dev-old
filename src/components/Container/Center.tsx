import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}
export default function CenterContainer({ children, className }: Props) {
  return (
    <div
      className={clsx(
        'flex h-full items-center justify-center text-justify',
        className,
      )}
    >
      {children}
    </div>
  )
}
