import { MessageCircle } from 'lucide-react';
import { waLink } from '../data/siteConfig';

export default function StickyOrderButton() {
    return (
        <a
            className="sticky-order"
            href={waLink('Hello Bien Gıda, I would like to place an order.')}
            target="_blank"
            rel="noreferrer"
        >
            <MessageCircle size={20} />
            Order on WhatsApp
        </a>
    );
}
