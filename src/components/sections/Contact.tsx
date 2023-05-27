import { NavItems } from '@/types'
import NavButton from '../NavButton/NavButton'
import PageTitle from '../PageTitle'
import Card from '../Card'
import CenterContainer from '../Container/Center'
import A from '../A'
import P from '../P'

type Props = {
  onClickNavItem: (item: NavItems) => void
}
export default function ContactSection({ onClickNavItem }: Props) {
  return (
    <>
      <PageTitle>Contact</PageTitle>
      <NavButton onClick={() => onClickNavItem('about')}>About</NavButton>
      <CenterContainer>
        <Card className="max-w-xl">
          <P>
            If you have any questions or want to get to know more about me, you
            can contact me through{' '}
            <A href="mailto:arelalkmy@gmail.com">email</A>, or{' '}
            <A
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/arelalkim/"
            >
              LinkedIn
            </A>
            . You can also view my projects and contributions on{' '}
            <A
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Arelera"
            >
              GitHub
            </A>
            .
          </P>
        </Card>
      </CenterContainer>
    </>
  )
}
