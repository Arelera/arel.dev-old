import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function P({ children }: Props) {
  return <p className="md:text-lg">{children}</p>
}
