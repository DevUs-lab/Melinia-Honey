export const siteConfig = {
    name: 'Melinia Honey',
    tagline: 'Wholesale Food Store',
    businessCategory: 'Wholesale food store',
    rating: { value: '4.9', count: 37 },
    address:
        'Haseki Sultan Mah. Özbek Süleyman Efendi Sok. Aras B No:8/A, 34096 Fatih/İstanbul, Türkiye',
    addressLines: [
        'Haseki Sultan Mah. Özbek Süleyman Efendi Sok. Aras B No:8/A',
        '34096 Fatih/İstanbul, Türkiye',
    ],
    plusCode: '2W6R+88 Fatih, İstanbul, Türkiye',
    mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=2W6R%2B88+Fatih+Istanbul',
    mapsEmbedUrl:
        'https://www.google.com/maps?q=2W6R%2B88%20Fatih%20Istanbul&output=embed',
    heroImage: '/hero.webp',
    aboutImage: '/gallery1.webp',
    contact: {
        phone: '+90 552 332 22 93',
        phoneHref: '+905523322293',
        whatsapp: '905523322293',
        email: 'info@meliniahoney.com',
        hours: 'Closed now · Opens 12:00 AM Monday',
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
            price: 'Wholesale pricing on request',
            image: '/image1.webp',
            badge: 'Bestseller',
            details:
                'Our Natural Flower Honey is collected from wild highland flowers and gently processed to keep its natural aroma. Available in both bulk and retail jars for wholesale orders.',
        },
        {
            id: 'pine-honey',
            name: 'Pine Forest Honey',
            shortDescription:
                'Dark, rich pine honey with a deep malty flavor, prized for its dense texture and long shelf life.',
            price: 'Wholesale pricing on request',
            image: '/image2.webp',
            badge: 'Wholesale',
            details:
                'Pine Forest Honey is a slow-crystallizing honey gathered from pine forests. Its rich, full-bodied taste makes it a favorite for wholesale and retail customers alike.',
        },
        {
            id: 'honeycomb',
            name: 'Raw Honeycomb',
            shortDescription:
                'Natural honeycomb straight from the hive, full of pure honey in its most authentic form.',
            price: 'Wholesale pricing on request',
            image: '/image3.webp',
            badge: 'Pure & Natural',
            details:
                'Our Raw Honeycomb is harvested directly from the hive and packed whole. A natural, unprocessed treat available in wholesale quantities.',
        },
        {
            id: 'gift-set',
            name: 'Premium Honey Gift Selection',
            shortDescription:
                'A curated set of our finest honeys, beautifully packaged and ready to gift for any occasion.',
            price: 'Wholesale pricing on request',
            image: '/image4.webp',
            badge: 'Gift Ready',
            details:
                'The Premium Honey Gift Selection brings together our most popular honeys in an elegant package. Ideal for corporate gifts, holidays, and wholesale orders.',
        },
    ],
    gallery: [
        { src: '/gallery1.webp', alt: 'Melinia Honey products', caption: 'Our honey selection' },
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
