import Features from "./components/Features";
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import HowitWorks from "./components/HowitWorks";
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import * as Sentry from '@sentry/react';


const App = () => {

  
  

  return (

    


    <main className="gb-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowitWorks/>
    </main>
  )
}

export default Sentry.withProfiler(App);
