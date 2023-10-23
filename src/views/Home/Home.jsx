import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Traslator from '../../components/Traslator/Traslator'
import WhyTraslator from '../../components/WhyTraslator/WhyTraslator'
import Publications from '../../components/Publications/Publications'
import OtherProjects from '../../components/OtherProjects/OtherProjects'
import About from '../../components/Aboutme/Aboutme'
import Clients from '../../components/Clients/Clients'
import BurgeesAndFAQ from '../../components/BurgeesAndFAQ/BurgeesAndFAQ'
import Contact from '../../components/Contact/Contact'


const Home = () =>{
    
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

export default Home;