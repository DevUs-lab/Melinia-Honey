import { ArrowRight, MapPin, Star } from 'lucide-react';
import { siteConfig, waLink } from '../data/siteConfig';

export default function Hero() {
    return (
        <section
            id="home"
            className="hero"
            style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
        >
            <div className="container hero-content">
                <p className="hero-eyebrow">Fatih, Istanbul • Wholesale Food Store</p>

                <h1>The Natural Golden Taste of Pure Honey</h1>

                <p>
                    Discover Melinia Honey, your trusted wholesale honey store in the
                    heart of Istanbul.
                </p>

                <div className="hero-rating">
                    <Star size={18} fill="currentColor" />
                    <strong>{siteConfig.rating.value}</strong>
                    <span>({siteConfig.rating.count} reviews)</span>
                </div>

                <div className="hero-actions">
                    <a
                        className="btn btn-honey"
                        href={waLink('Hello Melinia Honey, I would like to order honey.')}
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
