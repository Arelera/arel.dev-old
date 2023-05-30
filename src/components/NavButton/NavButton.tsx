import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bottom?: boolean
  onClick: () => void
}
export default function NavButton({ children, bottom, onClick }: Props) {
  return (
    <div
      className={clsx('absolute inset-x-0 flex justify-center', {
        'pt-safe bottom-8': bottom,
        'pb-safe top-8': !bottom,
      })}
    >
      <button
        onClick={onClick}
        className="text-sm uppercase tracking-wider opacity-60"
      >
        {children}
      </button>
    </div>
  )
}
