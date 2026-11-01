import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import { siteConfig } from '../data/siteConfig';

export default function HoneySection() {
    const [activeProduct, setActiveProduct] = useState(null);

    return (
        <section id="honey" className="section honey-section">
            <div className="container">
                <div className="section-heading">
                    <p className="kicker">Our Honey</p>
                    <h2>Our Honey Collection</h2>
                    <p>
                        A selection of pure, natural honeys available for wholesale and
                        retail. Order any of these directly through WhatsApp.
                    </p>
                </div>

                <div className="product-grid">
                    {siteConfig.products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onDetails={setActiveProduct}
                        />
                    ))}
                </div>
            </div>

            <ProductModal
                product={activeProduct}
                onClose={() => setActiveProduct(null)}
            />
        </section>
    );
}
