
import '../../App.css'
import { useEffect, useState } from 'react'


import Contact_Us from '../../Components/Contact_Us/Contact_Us'
import About_us from '../../Components/About_Us/About_us'
import Timeline from '../../Components/Timeline/Timeline'
import Landing_Page from '../../Components/Landing_Page/Landing_Page'
import PageLoader from '../../Components/PageLoader/PageLoader'
import Events from '../../Components/Events/Events'
import Sponsors from '../../Components/Sponsors/Sponsors'


import Aos from 'aos'
import 'aos/dist/aos.css';





function Home() {
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
                        <Landing_Page />
                    </div>
                    <About_us />
                    <Events />
                    <Timeline />
                    <Sponsors/>
                    <Contact_Us />
                </>)}
        </>
    )
}

export default Home
