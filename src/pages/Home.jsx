import Hero from '../components/Hero'
import About from '../components/About'
import Events from '../components/Events'
import Technologies from '../components/Technologies'
import Community from '../components/Community'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <Hero />
            <About />
            <Events />
            <Technologies />
            <Community />
        </div>
    )
}

export default Home
