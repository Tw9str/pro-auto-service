export const siteConfig = {
  name: 'Pro Auto Service',
  description: 'Vakkundige zorg voor de auto waarop u vertrouwt.',
  phone: {
    display: '085 - 014 27 88',
    href: 'tel:+31850142788',
  },
  email: {
    display: 'service@proautoservice.nl',
    href: 'mailto:service@proautoservice.nl',
  },
  address: ['Weg 123', '1234AB Arnhem'],
  hours: ['Ma–vr: 08:00–18:00', 'Zaterdag: 08:00–15:00', 'Zondag: gesloten'],
  navigation: [
    { label: 'Diensten', href: '#services' },
    { label: 'APK', href: '#apk' },
    { label: 'Waarom wij', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;
