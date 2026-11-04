import { MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container about-grid">
                <div className="about-image">
                    <img
                        src={siteConfig.aboutImage}
                        alt="Bien Gıda products"
                        loading="lazy"
                    />
                </div>

                <div className="about-copy">
                    <p className="kicker">About Bien Gıda</p>
                    <h2>An organic food market and honey store in the heart of Istanbul.</h2>

                    <p>
                        Bien Gıda — Organik Gıda Pazarı is an organic food market in
                        Beyoğlu, Istanbul, offering a carefully selected range of pure,
                        natural honey and organic foods. We serve businesses and retail
                        customers with high-quality, natural products sourced and packed
                        with care.
                    </p>

                    <div className="about-address">
                        <MapPin size={20} />
                        <div>
                            <strong>Address</strong>
                            <span>{siteConfig.address}</span>
                        </div>
                    </div>

                    <div className="about-actions">
                        <a className="btn btn-primary" href="#location">
                            Visit Our Location
                            <ArrowRight size={16} />
                        </a>
                        <a className="btn btn-secondary" href="#contact">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
