import NavButton from '@/components/NavButton/NavButton'
import InnerLayout from '@/components/layout/Inner'
import MainLayout from '@/components/layout/Main'
import AboutSection from '@/components/sections/About'
import ContactSection from '@/components/sections/Contact'
import HomeSection from '@/components/sections/Home'
import { NavItem, NavItems } from '@/types'
import { useEffect, useRef } from 'react'

type Props = {}
export default function Home({}: Props) {
  const homeRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const onClickNavItem = (item: NavItems) => {
    if (item === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' })
    else if (item === 'about')
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
    else if (item === 'contact')
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <MainLayout>
      <InnerLayout ref={homeRef}>
        <HomeSection onClickNavItem={onClickNavItem} />
      </InnerLayout>
      <InnerLayout ref={aboutRef}>
        <AboutSection onClickNavItem={onClickNavItem} />
      </InnerLayout>
      <InnerLayout ref={contactRef}>
        <ContactSection onClickNavItem={onClickNavItem} />
      </InnerLayout>
    </MainLayout>
  )
}
