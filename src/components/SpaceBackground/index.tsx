import { ScaleLinear, scaleLinear } from 'd3-scale'
import { useEffect, useRef } from 'react'

type Props = {}
export default function SpaceBackground({}: Props) {
  const [canvasRef] = useCanvas()

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="w-screen h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-950/25 via-slate-950 to-[#1d113522]"
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
  return [ref]
}

type CanvasObject = Star

const FPS = 24

class Canvas {
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  objects: CanvasObject[]
  colors: ScaleLinear<string, string, never>

  stop: boolean
  frameCount: number
  fps: number
  fpsInterval: number
  then: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    this.objects = []
    this.colors = scaleLinear(
      [-100, 0, 100],
      ['#ba1e68', 'lightgray', '#0c164f']
    )

    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight

      this.resetStars()
    })

    this.stop = false
    this.frameCount = 0
    this.fps = FPS
    this.fpsInterval = 1000 / this.fps
    this.then = Date.now()
  }

  startAnimation() {}

  animate() {
    requestAnimationFrame(() => this.animate())

    const now = Date.now()
    const elapsed = now - this.then

    if (elapsed > this.fpsInterval) {
      this.then = now - (elapsed % this.fpsInterval)

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.objects.forEach((obj) => {
        obj.update(this.colors)
        obj.draw()
      })
    }
  }

  addStars(count: number | void) {
    if (count) {
      for (let i = 0; i < count; i++) {
        this.addObject(new Star(this.canvas))
      }
    } else {
      // get star count by canvas size
      const area = this.canvas.width * this.canvas.height
      const starCount = area / 250

      for (let i = 0; i < starCount; i++) {
        this.addObject(new Star(this.canvas))
      }
    }
  }

  // TODO:
  resetStars() {
    return
  }

  addObject(object: CanvasObject) {
    this.objects.push(object)
  }
}

class Star {
  x: number
  y: number
  fill: string
  size: number
  canvas: HTMLCanvasElement
  ctx: CanvasRenderingContext2D
  shadowBlur: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    const isBig = randomNum(0, 1) > 0.99
    const isExtraSmall = isBig ? false : randomNum(0, 1) > 0.25
    if (isBig) {
      this.size = randomNum(1, 2)
    } else if (isExtraSmall) {
      this.size = randomNum(0.4, 0.5)
    } else {
      this.size = randomNum(0.5, 1)
    }
    this.x = randomNum(0, canvas.width)
    this.y = randomNum(0, canvas.height)
    this.fill = '#000'
    this.shadowBlur = this.size
  }
  update(colors: ScaleLinear<string, string, never>) {
    // flicker
    this.fill = colors(randomNum(-50, 50))
    // this.ctx.shadowColor = this.fill
  }
  draw() {
    this.ctx.fillStyle = this.fill
    // this.ctx.shadowColor = '#fff'
    // this.ctx.shadowBlur = this.shadowBlur
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.stroke()
    this.ctx.fill()
  }
}

function randomNum(min = 0, max = 10) {
  if (min >= max) return 0
  return Math.random() * (max - min) + min
}
