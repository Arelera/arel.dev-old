import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function B({ children }: Props) {
  return <span style={{ textShadow: '1px 1px #fdba74' }}>{children}</span>
}
