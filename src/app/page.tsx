import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import HomeCom from './component/Home';
import About from './component/About';
import Skill from './component/Skill';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Education from './component/Education';
import Project from './component/Project';

export default function Home() {
  return (
    <div>
      <div className='homeBg'>
        <div style={{ padding: '10px 10px 0px 10px' }}>
          <NavBar />
        </div>
        <section id='home'>
          <HomeCom />
        </section>
      </div>
      <section id='about'>
        <About />
      </section>
      <section id='education'>
        <Education />
      </section>
      <section id='skill'>
        <Skill />
      </section>
      <section id='project'>
        <Project />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
