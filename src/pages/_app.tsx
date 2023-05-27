import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Space_Mono } from 'next/font/google'
import Script from 'next/script'

const spaceMono = Space_Mono({
  weight: ['400'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_KEY}`}
      ></Script>
      <Script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.NEXT_PUBLIC_GA_KEY});
          `,
        }}
      ></Script>
      <main className={spaceMono.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
