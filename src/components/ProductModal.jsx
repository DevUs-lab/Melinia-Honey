import { useEffect } from 'react';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { waLink } from '../data/siteConfig';

export default function ProductModal({ product, onClose }) {
    useEffect(() => {
        if (!product) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [product, onClose]);

    if (!product) return null;

    return (
        <div
            className="modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="modal" role="dialog" aria-modal="true" aria-label={product.name}>
                <div className="modal-image">
                    <img src={product.image} alt={product.name} />
                </div>

                <div className="modal-content">
                    <button
                        className="modal-close"
                        type="button"
                        onClick={onClose}
                        aria-label="Close product details"
                    >
                        <X size={22} />
                    </button>

                    <p className="kicker">{product.badge}</p>
                    <h2>{product.name}</h2>
                    <p>{product.details}</p>

                    <div className="modal-price">{product.price}</div>

                    <div className="modal-actions">
                        <a
                            className="btn btn-primary"
                            href={waLink(`Hello Bien Gıda, I would like to order: ${product.name}`)}
                            target="_blank"
                            rel="noreferrer"
                            onClick={onClose}
                        >
                            <MessageCircle size={16} />
                            Order on WhatsApp
                        </a>
                        <button className="btn btn-secondary" type="button" onClick={onClose}>
                            Continue Browsing
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
