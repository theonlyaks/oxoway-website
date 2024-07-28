"use client"
import HeroSection from '../components/HeroSection';
import FeatureCardOne from '../components/FeatureCardOne';
import DetailedAnswerSection from '@/components/DetailedAnswerSection';
import PricePointSection from '@/components/PricePointSection';
import GetEdgeSection from '@/components/GetEdgeSection';
import FooterSection from '@/components/FooterSection';
import TeamSection from '@/components/TeamSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PricePointSection/>
      <DetailedAnswerSection/>
      <FeatureCardOne />
      <TeamSection/>
      <GetEdgeSection/>
      <FooterSection/>
    </main>
  );
}