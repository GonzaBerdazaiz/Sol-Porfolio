import Header from '../src/components/Header/Header'
import Hero from '../src/components/Hero/Hero'
import Traslator from '../src/components/Traslator/Traslator'
import WhyTraslator from '../src/components/WhyTraslator/WhyTraslator'
import Publications from '../src/components/Publications/Publications'
import OtherProjects from '../src/components/OtherProjects/OtherProjects'
import About from '../src/components/Aboutme/Aboutme'
import Clients from '../src/components/Clients/Clients'
import BurgeesAndFAQ from '../src/components/BurgeesAndFAQ/BurgeesAndFAQ'
import Contact from '../src/components/Contact/Contact'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Traslator />
      <WhyTraslator />
      <Publications />
      <OtherProjects />
      <About />
      <Clients />
      <BurgeesAndFAQ />
      <Contact />

    </div>
  )
}

export default App
