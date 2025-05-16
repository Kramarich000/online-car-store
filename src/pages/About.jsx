import { motion } from 'framer-motion';
import AboutHero from '../components/about-components/AboutHero';
import AboutRuleSection from '../components/about-components/AboutRuleSection';
import AboutTeamSection from '../components/about-components/AboutTeamSection';
import AboutSocialSection from '../components/about-components/AboutSocialSection';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-6">О нас</h1>

      <AboutHero />
      <AboutRuleSection />
      <AboutTeamSection />
      <AboutSocialSection />
    </motion.div>
  );
}
