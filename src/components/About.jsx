import { MapPin, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container about-grid">
                <div className="about-image">
                    <img
                        src={siteConfig.aboutImage}
                        alt="Melinia Honey products"
                        loading="lazy"
                    />
                </div>

                <div className="about-copy">
                    <p className="kicker">About Melinia Honey</p>
                    <h2>A wholesale honey store in the heart of Istanbul.</h2>

                    <p>
                        Melinia Honey is a wholesale food store in Fatih, Istanbul,
                        offering a carefully selected range of pure, natural honey. We
                        supply businesses and retail customers with high-quality honey
                        sourced and packed with care.
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
