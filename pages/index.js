
import { Input } from 'postcss'
import tw from 'tailwind-styled-components'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import ManagementVideo from './components/ManagementVideo'
import StayFocus from './components/StayFocus'
import Technology from './components/Technology'
import Test from './components/Test'

export default function Home() {

  return (
    <>
    <Header />
    <ManagementVideo />
    <Features />
    <Test />
    <Technology />
    <StayFocus />
    <Contact />
    <Footer />
    </>
  )
};

const Wrapper = tw.div`
  flex flex-col h-screen
`



