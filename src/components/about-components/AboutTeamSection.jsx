import { team } from '../../data/team';
import { motion } from 'framer-motion';

export default function AboutTeamSection() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold text-center mb-4">Наша команда</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {team.map((member, id) => (
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
  );
}
