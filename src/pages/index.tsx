import AboutSection from '@/components/About'
import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Nav/Navbar'
import SkillsSection from '@/components/Skills'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <HeroSection />
      <div id='skills'>
        <AboutSection />
        <SkillsSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home
