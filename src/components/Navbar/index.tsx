import { NavItem, NavItems } from '@/types'
import { useRouter } from 'next/router'

type Props = {
  onClickNavItem: (item: NavItems) => void
}
export default function Navbar({ onClickNavItem }: Props) {
  const router = useRouter()

  return (
    <div className="absolute inset-y-0 right-0 flex items-center p-10 text-right">
      <nav className="relative z-30 rounded-xl bg-black/50 p-4">
        <ul className="space-y-6">
          {links.map((link) => (
            <li key={link.href}>
              <button onClick={() => onClickNavItem(link.href)}>
                {link.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const links: { text: string; href: NavItems }[] = [
  { text: 'Home', href: NavItem.home },
  { text: 'About', href: NavItem.about },
  { text: 'Contact', href: NavItem.contact },
]
