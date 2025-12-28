import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Pastor } from './components/Pastor';
import { Events } from './components/Events';
import { Projects } from './components/Projects';
import { Ministries } from './components/Ministries';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Pastor />
        <Events />
        <Projects />
        <Ministries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}