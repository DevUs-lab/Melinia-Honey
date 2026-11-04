export const siteConfig = {
    name: 'Bien Gıda',
    tagline: 'Organik Gıda Pazarı',
    businessCategory: 'Organic Food Market & Honey Farm',
    address:
        'Büyük Hendek Caddesi, Kuledibi, Beyoğlu, İstanbul 34421, Türkiye',
    addressLines: [
        'Büyük Hendek Caddesi, Kuledibi',
        'Beyoğlu, İstanbul 34421, Türkiye',
    ],
    mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=41.0271956,28.9722515',
    mapsEmbedUrl:
        'https://www.google.com/maps?q=41.0271956,28.9722515&output=embed',
    heroImage: '/hero.webp',
    aboutImage: '/gallery1.webp',
    contact: {
        phone: '+90 537 815 25 67',
        phoneHref: '+905378152567',
        whatsapp: '905378152567',
        email: 'info@biengida.com',
        hours: 'Open daily · see Google Maps for hours',
    },
    nav: [
        { label: 'Home', href: '#home' },
        { label: 'Our Honey', href: '#honey' },
        { label: 'About', href: '#about' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Contact', href: '#contact' },
    ],
    products: [
        {
            id: 'flower-honey',
            name: 'Natural Flower Honey',
            shortDescription:
                'Pure flower honey harvested from highland meadows, with a light golden color and a delicate, floral aroma.',
            price: 'Contact for pricing',
            image: '/image1.webp',
            badge: 'Bestseller',
            details:
                'Our Natural Flower Honey is collected from wild highland flowers and gently processed to keep its natural aroma. Available at our organic food market in Beyoğlu, Istanbul.',
        },
        {
            id: 'pine-honey',
            name: 'Pine Forest Honey',
            shortDescription:
                'Dark, rich pine honey with a deep malty flavor, prized for its dense texture and long shelf life.',
            price: 'Contact for pricing',
            image: '/image2.webp',
            badge: 'Organic',
            details:
                'Pine Forest Honey is a slow-crystallizing honey gathered from pine forests. Its rich, full-bodied taste makes it a favorite at our store.',
        },
        {
            id: 'honeycomb',
            name: 'Raw Honeycomb',
            shortDescription:
                'Natural honeycomb straight from the hive, full of pure honey in its most authentic form.',
            price: 'Contact for pricing',
            image: '/image3.webp',
            badge: 'Pure & Natural',
            details:
                'Our Raw Honeycomb is harvested directly from the hive and packed whole. A natural, unprocessed treat available at Bien Gıda.',
        },
        {
            id: 'gift-set',
            name: 'Premium Honey Gift Selection',
            shortDescription:
                'A curated set of our finest honeys, beautifully packaged and ready to gift for any occasion.',
            price: 'Contact for pricing',
            image: '/image4.webp',
            badge: 'Gift Ready',
            details:
                'The Premium Honey Gift Selection brings together our most popular honeys in an elegant package. Ideal for gifts and special occasions.',
        },
    ],
    gallery: [
        { src: '/gallery1.webp', alt: 'Bien Gıda products', caption: 'Our honey selection' },
        { src: '/gallery4.webp', alt: 'Fresh honey in jars', caption: 'Fresh from the hive' },
        { src: '/image1.webp', alt: 'Natural flower honey', caption: 'Natural flower honey' },
        { src: '/image2.webp', alt: 'Pine forest honey', caption: 'Pine forest honey' },
        { src: '/image3.webp', alt: 'Raw honeycomb', caption: 'Raw honeycomb' },
        { src: '/image4.webp', alt: 'Premium gift selection', caption: 'Premium gift selection' },
    ],
};

// Build a WhatsApp order link with an optional pre-filled message.
export const waLink = (message) =>
    `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
