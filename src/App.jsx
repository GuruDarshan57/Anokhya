
import './App.css'
import { useEffect } from 'react'
import Contact_Us from './Components/Contact_Us/Contact_Us'
import About_us from './Components/About_Us/About_us'
import Footer from './Components/Footer/Footer'
import Timeline from './Components/Timeline/Timeline'
import Home from './Components/Home/Home'
import Events_card from './Components/Events_card/Events_card'
import Aos from 'aos'
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init();
  })


  return (
    <>
      <Home />
      <About_us />
      <Events_card />
      <Timeline />
      <Contact_Us />
      <Footer />

    </>
  )
}

export default App
