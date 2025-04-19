import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function About() {
  const Team = [
    {
      name: "Алексей",
      surname: "Иванов",
      post: "Генеральный директор",
      image: "/images/member1.jpg",
    },
    {
      name: "Мария",
      surname: "Смирнова",
      post: "Менеджер по продажам",
      image: "/images/member2.jpg",
    },
    {
      name: "Иван",
      surname: "Петров",
      post: "Сервисный инженер",
      image: "/images/member3.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold text-center mb-6">О нас</h1>

      <section className="text-center mb-8">
        <p className="text-lg">
          AutoLux — это ваш надежный партнер в мире автомобилей. Мы предлагаем
          широкий выбор новых и подержанных авто по выгодным ценам, а также
          полный спектр услуг по покупке, продаже и обслуживанию.
        </p>
      </section>

      <motion.section className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md mb-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}>
        <h2 className="text-2xl font-semibold text-center">Наши принципы</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Прозрачность и честность в сделках</li>
          <li>Широкий ассортимент и гибкие условия</li>
          <li>Качественное обслуживание и поддержка клиентов</li>
          <li>Гарантия на автомобили и сервисные услуги</li>
        </ul>
      </motion.section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Наша команда
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {Team.map((member, id) => (
            <motion.div
              key={id}
              className="p-4 border rounded-lg shadow-md bg-gray-200 dark:bg-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: id * 0.2 }}
            >
              <img
                className="text-center inline rounded-full w-32 h-32 object-cover mx-auto"
                src={member.image}
                alt={`${member.name} ${member.surname}`}
              />
              <h3 className="text-lg font-bold">
                {member.name} {member.surname}
              </h3>
              <p className="dark:text-gray-100">{member.post}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg text-center flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .5 }}>
        <h2 className="text-xl font-bold mb-2">Свяжитесь с нами</h2>
        <a
          href="tel:+79001234567"
          className="flex items-center gap-2 mx-auto mt-3 hover:text-blue-600"
        >
          <Phone size={18} /> +7 (900) 123-45-67
        </a>
        <a
          href="mailto:info@autolux.ru"
          className="flex items-center gap-2 mx-auto mt-1 hover:text-blue-600"
        >
          <Mail size={18} /> info@autolux.ru
        </a>
      </motion.section>
    </motion.div>
  );
}
