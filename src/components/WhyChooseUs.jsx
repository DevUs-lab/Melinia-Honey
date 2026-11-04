import { ShieldCheck, Sparkles, HeartHandshake, Package } from 'lucide-react';

const features = [
    {
        icon: ShieldCheck,
        title: 'Pure & Natural Quality',
        text: 'Carefully selected honey, processed gently to preserve its natural aroma and quality.',
    },
    {
        icon: Sparkles,
        title: 'Wide Honey Variety',
        text: 'From flower honey to pine honey and raw honeycomb, we offer a range for every taste.',
    },
    {
        icon: HeartHandshake,
        title: 'Friendly Service',
        text: 'Order easily through WhatsApp and get a quick response from our team.',
    },
    {
        icon: Package,
        title: 'Wholesale Available',
        text: 'Bulk and wholesale orders welcome, with competitive pricing for businesses.',
    },
];

export default function WhyChooseUs() {
    return (
        <section className="section why-section">
            <div className="container">
                <div className="section-heading">
                    <p className="kicker">Why Choose Us</p>
                    <h2>What makes Bien Gıda different.</h2>
                    <p>
                        Quality honey, honest service, and easy ordering — here is what our
                        customers can count on.
                    </p>
                </div>

                <div className="feature-grid">
                    {features.map(({ icon: Icon, title, text }) => (
                        <article className="feature-card" key={title}>
                            <div className="feature-icon">
                                <Icon size={24} />
                            </div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
