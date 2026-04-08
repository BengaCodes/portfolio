import Footer from '@/components/Footer'
import HeroSection from '@/components/Hero'
import Navbar from '@/components/Nav/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

export default Home
