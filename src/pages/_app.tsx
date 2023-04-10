import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'

const michroma = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={michroma.className}>
      <Component {...pageProps} />
    </main>
  )
}
