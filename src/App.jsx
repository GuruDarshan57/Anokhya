
import './App.css'
import { useEffect, useState } from 'react'


import Contact_Us from './Components/Contact_Us/Contact_Us'
import About_us from './Components/About_Us/About_us'
import Timeline from './Components/Timeline/Timeline'
import Home from './Components/Home/Home'
import PageLoader from './Components/PageLoader/PageLoader'
import Events from './Components/Events/Events'


import Aos from 'aos'
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    Aos.init();
  })


  const [hideLoader, setHideLoader] = useState(true);

  return (
    <>
      {hideLoader && <PageLoader setHideLoader={setHideLoader} />}
      {!hideLoader && (
        <>
          <div className='homeanim'>
            <Home />
          </div>
          <About_us />
          <Events />
          <Timeline />
          <Contact_Us />
        </>)}
    </>
  )
}

export default App
