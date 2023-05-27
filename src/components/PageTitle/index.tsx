import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function PageTitle({ children }: Props) {
  return (
    <h2 className="absolute mt-6 text-7xl font-bold opacity-20 md:mt-0 md:text-8xl">
      {children}
    </h2>
  )
}
