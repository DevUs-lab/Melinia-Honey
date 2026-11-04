import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig, waLink } from '../data/siteConfig';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="container header-inner">
                <a
                    className="wordmark"
                    href="#home"
                    onClick={() => setOpen(false)}
                    aria-label="Bien Gıda home"
                >
                    <span>Bien Gıda</span>
                    <small>Organik Gıda Pazarı</small>
                </a>

                <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
                    {siteConfig.nav.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}

                    <a
                        className="btn btn-primary nav-order"
                        href={waLink('Hello Bien Gıda, I would like to place an order.')}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setOpen(false)}
                    >
                        <MessageCircle size={16} />
                        Order on WhatsApp
                    </a>
                </nav>

                <a
                    className="btn btn-primary header-cta"
                    href={waLink('Hello Bien Gıda, I would like to place an order.')}
                    target="_blank"
                    rel="noreferrer"
                >
                    <MessageCircle size={16} />
                    Order
                </a>

                <button
                    className="mobile-toggle"
                    type="button"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    onClick={() => setOpen((value) => !value)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
}
