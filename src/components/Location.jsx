import { MapPin, Navigation, Phone, Info } from 'lucide-react';
import { siteConfig, waLink } from '../data/siteConfig';

export default function Location() {
    return (
        <section id="location" className="section location-section">
            <div className="container">
                <div className="section-heading">
                    <p className="kicker">Location</p>
                    <h2>Find Melinia Honey in Fatih, Istanbul.</h2>
                    <p>
                        Visit our store or get in touch — we are happy to help with your
                        wholesale and retail honey orders.
                    </p>
                </div>

                <div className="location-grid">
                    <div className="location-info">
                        <div className="info-row">
                            <MapPin size={22} />
                            <div>
                                <strong>Address</strong>
                                <p>{siteConfig.address}</p>
                            </div>
                        </div>

                        <div className="info-row">
                            <Phone size={22} />
                            <div>
                                <strong>Phone</strong>
                                <p>
                                    <a href={`tel:${siteConfig.contact.phoneHref}`}>
                                        {siteConfig.contact.phone}
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="info-row">
                            <Info size={22} />
                            <div>
                                <strong>Google Maps Plus Code</strong>
                                <p>{siteConfig.plusCode}</p>
                            </div>
                        </div>

                        <div className="info-row">
                            <Navigation size={22} />
                            <div>
                                <strong>Directions</strong>
                                <p>
                                    Open the Google Maps listing for live navigation and
                                    current opening hours.
                                </p>
                            </div>
                        </div>

                        <div className="location-actions">
                            <a
                                className="btn btn-primary"
                                href={siteConfig.mapsUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Navigation size={17} />
                                Get Directions
                            </a>
                            <a
                                className="btn btn-secondary"
                                href={waLink('Hello Melinia Honey, I would like to place an order.')}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Order on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="map-card">
                        <iframe
                            title="Melinia Honey location map"
                            src={siteConfig.mapsEmbedUrl}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
