import './App.css'
import {useEffect} from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Image from './components/Image'
import Card from './components/Card';
import aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    aos.init({
      offset:100,
      duration: 500,
      once: true
    });
 },[])

  return (
    <>
      <Navbar />
      <Image />
      <Card />
      <Footer />
    </>
  );
}

export default App
