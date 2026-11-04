import { siteConfig } from '../data/siteConfig';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <a className="footer-wordmark" href="#home">
                        Bien Gıda
                    </a>
                    <p>
                        Organik Gıda Pazarı — an organic food market and honey store in
                        Beyoğlu, Istanbul.
                    </p>
                </div>

                <div>
                    <h4>Navigate</h4>
                    <div className="footer-links">
                        {siteConfig.nav.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                        <a href="#privacy">Privacy Policy</a>
                    </div>
                </div>

                <div>
                    <h4>Location</h4>
                    <p>{siteConfig.address}</p>
                    <a
                        className="footer-map-link"
                        href={siteConfig.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open in Google Maps
                    </a>
                </div>

                <div>
                    <h4>Contact</h4>
                    <p>
                        <a href={`tel:${siteConfig.contact.phoneHref}`}>
                            {siteConfig.contact.phone}
                        </a>
                    </p>
                    <p>{siteConfig.contact.email}</p>
                    <p>{siteConfig.contact.hours}</p>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© {new Date().getFullYear()} Bien Gıda. All rights reserved.</p>
            </div>
        </footer>
    );
}
