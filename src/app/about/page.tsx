import type { Metadata } from 'next';
import AboutView from '@/components/AboutView';

export const metadata: Metadata = {
  title: 'About Us — Vorqentra Labs',
  description:
    'Discover the story, mission, philosophy, and virtuoso minds behind Vorqentra Labs. We engineer bespoke artificial intelligence, predictive machine learning, and master-crafted data systems for global enterprises.',
  openGraph: {
    title: 'About Us — Vorqentra Labs',
    description:
      'Master craftsmen at the frontier of machine intelligence, predictive models, and data systems.',
    images: [{ url: '/logo.jpg', width: 1024, height: 1024, alt: 'Vorqentra Labs' }],
  },
};

export default function AboutPage() {
  return <AboutView />;
}
