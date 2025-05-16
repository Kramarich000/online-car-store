import { motion } from 'framer-motion';
import ContactsSection from '../components/contact-components/ContactsHero';
import ContactsFormSection from '../components/contact-components/ContactsFormSection';
import ContactsMapSection from '../components/contact-components/ContactsMapSection';
import ContactsHero from '../components/contact-components/ContactsHero';
export default function Contact() {
  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-6">Контакты</h1>
      <ContactsHero />
      <ContactsSection />
      <ContactsFormSection />
      <ContactsMapSection />
    </motion.div>
  );
}
