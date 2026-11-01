import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
    items,
    activeIndex,
    onClose,
    onPrevious,
    onNext,
}) {
    useEffect(() => {
        if (activeIndex === null) return undefined;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose();
            if (event.key === 'ArrowLeft') onPrevious();
            if (event.key === 'ArrowRight') onNext();
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [activeIndex, onClose, onPrevious, onNext]);

    if (activeIndex === null) return null;

    const item = items[activeIndex];

    return (
        <div
            className="lightbox-backdrop"
            role="presentation"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image gallery">
                <button
                    className="lightbox-close"
                    type="button"
                    onClick={onClose}
                    aria-label="Close gallery"
                >
                    <X size={24} />
                </button>

                <button
                    className="lightbox-nav prev"
                    type="button"
                    onClick={onPrevious}
                    aria-label="Previous image"
                >
                    <ChevronLeft size={28} />
                </button>

                <img src={item.src} alt={item.alt} />

                <button
                    className="lightbox-nav next"
                    type="button"
                    onClick={onNext}
                    aria-label="Next image"
                >
                    <ChevronRight size={28} />
                </button>

                <p className="lightbox-caption">{item.caption}</p>
            </div>
        </div>
    );
}