// import Navbar from "@/components/Navbar";
// import HeroSection from "@/components/HeroSection";
// import AboutSection from "@/components/AboutSection";
// import SkillsSection from "@/components/SkillsSection";
// import ProjectsSection from "@/components/ProjectsSection";
// import ContactSection from "@/components/ContactSection";

import Navbar from '@/components/Nav/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      {/* <HeroSection />
      <div id="skills">
        <AboutSection />
        <SkillsSection />
      </div>
      <ProjectsSection />
      <ContactSection /> */}
      <footer className='py-8 text-center text-sm text-muted-foreground font-body border-t border-border'>
        © {new Date().getFullYear()} — Built with purpose
      </footer>
    </div>
  )
}

export default Home
