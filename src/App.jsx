
import './App.css'
import { useEffect , useState} from 'react'
import Contact_Us from './Components/Contact_Us/Contact_Us'
import About_us from './Components/About_Us/About_us'
import Footer from './Components/Footer/Footer'
import Timeline from './Components/Timeline/Timeline'
import Home from './Components/Home/Home'
import Events_card from './Components/Events_card/Events_card'
import Aos from 'aos'
import 'aos/dist/aos.css';


const PageLoad = ({ setHideLoader }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      if (counter < 100) {
        setCounter(counter + 2);
      } else {
        clearInterval(count);
        setHideLoader(false);
      }
    }, 25);

    return () => {
      clearInterval(count);
    };
  }, [counter, setHideLoader]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        width: "100%",
        height: "100%",
        backgroundColor: 'black',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: 'yellow',
        flexDirection: "column"
      }}
    >
      <span style={{ fontWeight: "bold", opacity: 0.4 }}>
        Tech fest 2024
      </span>
      <p style={{ fontSize: "8vw", maxWidth: "100%" }}>
        A N O K H Y A
      </p>
      <div style={{ display: "flex", justifyContent: "space-between", width: "40%" }}>
        <span style={{ opacity: 0.3 }}>Loading...</span>
        <span style={{ fontSize: "7rem", fontWeight: "bold" }}>
          {counter}%
        </span>
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    Aos.init();
  })


  const [hideLoader, setHideLoader] = useState(true);

  return (
    <>
      {hideLoader && <PageLoad setHideLoader={setHideLoader} />}
      {!hideLoader && (
        <div>
          <div className='homeanim'>
      <Home/>
      </div>
      <About_us />
      <Events_card />
      <Timeline />
      <Contact_Us />
      <Footer />
      </div>)}
    </>
  )
}

export default App
