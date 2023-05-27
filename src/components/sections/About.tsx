import { NavItems } from '@/types'
import NavButton from '../NavButton/NavButton'
import Card from '../Card'
import PageTitle from '../PageTitle'
import B from '../B'
import CenterContainer from '../Container/Center'
import P from '../P'

const START_DATE = new Date('2021-03-01')

type Props = {
  onClickNavItem: (item: NavItems) => void
}
export default function AboutSection({ onClickNavItem }: Props) {
  return (
    <>
      <NavButton onClick={() => onClickNavItem('home')}>Home</NavButton>
      <PageTitle>About</PageTitle>
      <CenterContainer>
        <Card>
          <div className="max-w-xl space-y-6">
            <P>
              Hey! I'm a <B>Software Developer</B> currently based in Istanbul,
              Turkey. I've been a professional software developer for about{' '}
              <B>{dateDiff(START_DATE, new Date())}</B>, developing{' '}
              <B>web apps</B> using modern technologies like <B>TypeScript</B>,{' '}
              <B>React</B>, and <B>Redux</B>.
            </P>
            <P>
              My experience goes beyond the <B>Frontend</B>, as I have also
              worked with technologies such as <B>Node.js</B>, <B>Express</B>,
              and some <B>AWS</B> services. I am eager to stay up-to-date with
              the latest industry standards, and learning new skills and
              techniques.
            </P>
          </div>
        </Card>
      </CenterContainer>
      <NavButton onClick={() => onClickNavItem('contact')} bottom>
        Contact
      </NavButton>
    </>
  )
}

function dateDiff(start: Date, end: Date) {
  let months = (end.getFullYear() - start.getFullYear()) * 12
  months -= start.getMonth()
  months += end.getMonth()
  const years = Math.floor(months / 12)
  months = (months % 12) + 1 // plus 1 to include current month
  return `${years}+ years` // and ${months} months`
}
