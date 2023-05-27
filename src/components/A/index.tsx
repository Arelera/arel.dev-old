import { ReactNode, HTMLProps } from 'react'

type Props = HTMLProps<HTMLAnchorElement> & {
  children: ReactNode
}
export default function A({ children, ...props }: Props) {
  return (
    <a
      className="text-orange-300"
      style={{ textShadow: '1px 1px #0ea5e9' }}
      {...props}
    >
      {children}
    </a>
  )
}
