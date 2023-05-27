import { NavItems } from '@/types'
import Card from '../Card'
import NavButton from '../NavButton/NavButton'

type Props = {
  onClickNavItem: (item: NavItems) => void
}
export default function HomeSection({ onClickNavItem }: Props) {
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <Card>
          <h1 className="mb-4 text-8xl">
            arel
            <a
              href="https://github.com/Arelera"
              className="text-blue-500"
              target="_blank"
              rel="noreferrer"
            >
              .dev
            </a>
          </h1>
          <h2 className="text-xl">Software Developer</h2>
        </Card>
      </div>
      <NavButton onClick={() => onClickNavItem('about')} bottom>
        About
      </NavButton>
    </>
  )
}
