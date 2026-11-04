import { ArrowRight, MapPin } from 'lucide-react';
import { siteConfig, waLink } from '../data/siteConfig';

export default function Hero() {
    return (
        <section
            id="home"
            className="hero"
            style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        >
            <div className="container hero-content">
                <p className="hero-eyebrow">Beyoğlu, Istanbul • Organic Food Market</p>

                <h1>The Natural Golden Taste of Pure Honey</h1>

                <p>
                    Discover Bien Gıda, your organic food market and honey store in
                    the heart of Istanbul.
                </p>

                <div className="hero-actions">
                    <a
                        className="btn btn-honey"
                        href={waLink('Hello Bien Gıda, I would like to order honey.')}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Order on WhatsApp
                        <ArrowRight size={18} />
                    </a>
                    <a className="btn btn-ghost-light" href="#location">
                        <MapPin size={18} />
                        Find Our Location
                    </a>
                </div>
            </div>
        </section>
    );
}
