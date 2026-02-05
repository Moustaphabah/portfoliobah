

import Header from './components/header/Header'
import About from './components/about/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Accueil from './components/accueil/accueil'
import Footer from './components/footer/Footer'
import SkillsCard from './components/SkillsCard/SkillsCard'
import SkillsCarousel from './components/SkillsCard/SkillsCarousel'


function App() {
    return (
        <div>
            <Header />
            <main>
                <Accueil />
                <About />
                <Projects />
                <Contact /> 
                                <SkillsCard>
                                    <h1 className='titleCompetences'>Compétences</h1>
                                    <p className='pSkillsCard'>Voici un aperçu de mes compétences
                                         techniques : React, JavaScript, TypeScript, Vite, HTML, CSS, Git et GitHub.</p>
                                    <SkillsCarousel />
                                </SkillsCard>
                <Footer/>
            </main>
            
           
        </div>
    )
}

export default App