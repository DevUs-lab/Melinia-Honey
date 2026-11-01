import { useState } from 'react';
import Lightbox from './Lightbox';
import { siteConfig } from '../data/siteConfig';

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(null);

    const openLightbox = (index) => setActiveIndex(index);
    const closeLightbox = () => setActiveIndex(null);

    const showPrevious = () =>
        setActiveIndex((index) =>
            index === null
                ? null
                : (index - 1 + siteConfig.gallery.length) % siteConfig.gallery.length
        );

    const showNext = () =>
        setActiveIndex((index) =>
            index === null ? null : (index + 1) % siteConfig.gallery.length
        );

    return (
        <section id="gallery" className="section gallery-section">
            <div className="container">
                <div className="section-heading">
                    <p className="kicker">Gallery</p>
                    <h2>A look at our honey.</h2>
                    <p>A glimpse of the Melinia Honey collection and our products.</p>
                </div>

                <div className="gallery-grid">
                    {siteConfig.gallery.map((image, index) => (
                        <button
                            key={image.src}
                            className="gallery-item"
                            type="button"
                            onClick={() => openLightbox(index)}
                            aria-label={`Open image: ${image.caption}`}
                        >
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <span className="gallery-overlay">{image.caption}</span>
                        </button>
                    ))}
                </div>
            </div>

            <Lightbox
                items={siteConfig.gallery}
                activeIndex={activeIndex}
                onClose={closeLightbox}
                onPrevious={showPrevious}
                onNext={showNext}
            />
        </section>
    );
}
