import { ArrowRight, MessageCircle } from 'lucide-react';
import { waLink } from '../data/siteConfig';

export default function ProductCard({ product, onDetails }) {
    return (
        <article className="product-card">
            <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-badge">{product.badge}</span>
            </div>

            <div className="product-body">
                <h3>{product.name}</h3>
                <p>{product.shortDescription}</p>
                <span className="product-price">{product.price}</span>

                <div className="product-actions">
                    <button
                        className="btn btn-secondary"
                        type="button"
                        onClick={() => onDetails(product)}
                    >
                        View Details
                        <ArrowRight size={16} />
                    </button>

                    <a
                        className="btn btn-primary"
                        href={waLink(`Hello Bien Gıda, I would like to order: ${product.name}`)}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MessageCircle size={16} />
                        Order
                    </a>
                </div>
            </div>
        </article>
    );
}
