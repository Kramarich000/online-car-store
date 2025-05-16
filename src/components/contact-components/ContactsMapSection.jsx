export default function ContactsMapSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Мы на карте</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.887830021963!2d37.58872710000001!3d55.745026800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bb18e1014e5%3A0x9cbc04519e04f3b3!2z0JPQsNCz0LDRgNC40L3RgdC60LjQuSDQv9C10YAuLCA0NSwg0JzQvtGB0LrQstCwLCAxMTkwMDI!5e0!3m2!1sru!2sru!4v1743435962406!5m2!1sru!2sru"
        width="100%"
        height="600"
        loading="lazy"
      ></iframe>
    </section>
  );
}
