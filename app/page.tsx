import { ApkSection } from '@/components/home/ApkSection';
import { BookingSection } from '@/components/home/BookingSection';
import { DifferenceSection } from '@/components/home/DifferenceSection';
import { HeroSection } from '@/components/home/HeroSection';
import { HighlightsSection } from '@/components/home/HighlightsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WorkshopGallery } from '@/components/home/WorkshopGallery';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <ApkSection />
      <DifferenceSection />
      <WorkshopGallery />
      <ProcessSection />
      <ReviewsSection />
      <BookingSection />
    </main>
  );
}
