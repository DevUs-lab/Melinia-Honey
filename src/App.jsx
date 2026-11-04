import Header from './components/Header';
import Hero from './components/Hero';
import HoneySection from './components/HoneySection';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyOrderButton from './components/StickyOrderButton';

export default function App() {
    return (
        <div className="app">
            <Header />

            <main>
                <Hero />
                <HoneySection />
                <About />
                <WhyChooseUs />
                <Gallery />
                <Location />
                <Contact />

                <section id="privacy" className="privacy-section">
                    <div className="container">
                        <p className="kicker">Privacy</p>
                        <h2>Privacy Policy</h2>
                        <p>
                            Bien Gıda respects your privacy. We only use the contact
                            details you share through this website to respond to your orders
                            and inquiries via WhatsApp, phone, or email. We do not sell or
                            share your personal information with third parties.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
            <StickyOrderButton />
        </div>
    );
}
