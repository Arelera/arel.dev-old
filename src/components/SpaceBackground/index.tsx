import { RefObject, useEffect, useRef } from 'react'
import Canvas from './Canvas'

type Props = {
  scrollContainerRef: RefObject<HTMLDivElement>
}
export default function SpaceBackground({ scrollContainerRef }: Props) {
  const canvasRef = useCanvas()

  useEffect(() => {
    const onScroll = (e: Event) => {
      if (canvasRef.current) {
        canvasRef.current.style.transform = `translateY(-${getCanvasYOffset(
          scrollContainerRef,
          canvasRef,
        )}px)`
      }
    }
    scrollContainerRef.current?.addEventListener('scroll', onScroll)
    return () =>
      scrollContainerRef.current?.removeEventListener('scroll', onScroll)
  }, [])

  // could get h-[105vh] with window height plus some padding
  return (
    <div>
      <canvas
        ref={canvasRef}
        className="bg-red-slate/20 relative h-[105vh] w-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-950/25 via-slate-950 to-[#1d113522] transition-transform duration-100 ease-in-out"
      />
    </div>
  )
}

function useCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvasEl = ref.current
    if (!canvasEl) return
    canvasEl.width = window.innerWidth
    canvasEl.height = window.innerHeight
    const ctx = canvasEl.getContext('2d')
    if (!ctx) return

    const canvas = new Canvas(canvasEl)
    canvas.addStars()
    canvas.animate()
  }, [])
  return ref
}

function getCanvasYOffset(
  containerRef: RefObject<HTMLDivElement>,
  canvasRef: RefObject<HTMLCanvasElement>,
) {
  if (!containerRef.current || !canvasRef.current) return 0
  const offset =
    (containerRef.current.scrollTop / containerRef.current.clientHeight) * 12

  return offset
}
