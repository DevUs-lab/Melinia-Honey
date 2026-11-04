import { useState } from 'react';
import { Phone, Mail, Clock, Send, Info } from 'lucide-react';
import { siteConfig, waLink } from '../data/siteConfig';

const initialForm = {
    name: '',
    phone: '',
    email: '',
    product: '',
    quantity: '1',
    message: '',
};

export default function Contact() {
    const [form, setForm] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((current) => ({ ...current, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const lines = [
            'Hello Bien Gıda, I would like to place an order:',
            '',
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
        ];
        if (form.email) lines.push(`Email: ${form.email}`);
        if (form.product) lines.push(`Product: ${form.product}`);
        lines.push(`Quantity: ${form.quantity}`);
        if (form.message) lines.push(`Message: ${form.message}`);

        window.open(waLink(lines.join('\n')), '_blank');
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-heading">
                    <p className="kicker">Contact / Order</p>
                    <h2>Place your order on WhatsApp.</h2>
                    <p>
                        Fill in your details below and we will open WhatsApp with your order
                        ready to send. You can also call or visit us in Beyoğlu, Istanbul.
                    </p>
                </div>

                <div className="contact-grid">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <label className="form-field">
                                <span>Customer name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </label>

                            <label className="form-field">
                                <span>Phone number</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Your phone number"
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-row">
                            <label className="form-field">
                                <span>Email</span>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                />
                            </label>

                            <label className="form-field">
                                <span>Quantity</span>
                                <input
                                    type="number"
                                    min="1"
                                    name="quantity"
                                    value={form.quantity}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>

                        <label className="form-field">
                            <span>Product interested in</span>
                            <select
                                name="product"
                                value={form.product}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a product</option>
                                {siteConfig.products.map((product) => (
                                    <option value={product.name} key={product.id}>
                                        {product.name}
                                    </option>
                                ))}
                                <option value="General question">General question</option>
                            </select>
                        </label>

                        <label className="form-field">
                            <span>Message</span>
                            <textarea
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell us about your inquiry or preferred order details."
                            />
                        </label>

                        <button className="btn btn-primary form-submit" type="submit">
                            <Send size={17} />
                            Send Order on WhatsApp
                        </button>
                    </form>

                    <aside className="contact-aside">
                        <h3>Contact details</h3>

                        <div className="contact-placeholder">
                            <Phone size={20} />
                            <a href={`tel:${siteConfig.contact.phoneHref}`}>
                                {siteConfig.contact.phone}
                            </a>
                        </div>

                        <div className="contact-placeholder">
                            <Mail size={20} />
                            <span>{siteConfig.contact.email}</span>
                        </div>

                        <div className="contact-placeholder">
                            <Clock size={20} />
                            <span>{siteConfig.contact.hours}</span>
                        </div>

                        <div className="contact-placeholder">
                            <Info size={20} />
                            <span>{siteConfig.address}</span>
                        </div>

                        <a
                            className="btn btn-secondary"
                            href={siteConfig.mapsUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open Google Maps Listing
                        </a>
                    </aside>
                </div>
            </div>
        </section>
    );
}
