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
        'bottom-8 pb-[env(safe-area-inset-top)]': bottom,
        'top-8 pt-[env(safe-area-inset-bottom)]': !bottom,
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
