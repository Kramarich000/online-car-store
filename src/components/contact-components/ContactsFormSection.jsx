import { motion } from 'framer-motion';

export default function ContactsFormSection() {
  return (
    <motion.section
      className="p-1 md:p-6 rounded-lg shadow-md mb-8 text-black dark:text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl  font-semibold text-center mb-4">Напишите нам</h2>
      <motion.form
        className="mx-auto space-y-4 max-w-[500px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.input
          type="text"
          placeholder="Ваше имя"
          className="w-full p-2 border rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.input
          type="email"
          placeholder="Ваш email"
          className="w-full p-2 border rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />

        <motion.textarea
          placeholder="Ваше сообщение"
          rows="4"
          className="w-full p-2 border rounded"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />

        <motion.button
          type="submit"
          className="w-full bg-gray-900 text-white p-2 rounded hover:bg-blue-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, delay: 0.1 }}
        >
          Отправить
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
