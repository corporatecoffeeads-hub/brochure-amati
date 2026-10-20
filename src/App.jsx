import { Header, Hero, WhyUs, Origin, Explore, Footer } from './components/Sections.jsx';
import Finder from './components/Finder.jsx';
import Contact, { WhatsAppFab } from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <WhyUs />
        <Origin />
        <Explore />
        <Finder />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
