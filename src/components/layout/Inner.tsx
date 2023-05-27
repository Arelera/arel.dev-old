import { ReactNode, forwardRef } from 'react'

type Props = JSX.IntrinsicElements['div'] & {
  children: ReactNode
}
const InnerLayout = forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div ref={ref} className="relative h-screen w-screen snap-start p-10">
      {children}
    </div>
  )
})

export default InnerLayout
