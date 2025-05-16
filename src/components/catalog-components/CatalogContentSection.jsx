import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { cars } from '../../data/Cars';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import RadixSelect from '../main-components/RadixSelect';
import { filters } from '../../data/Filters';
import { options } from '../../data/Options';

export default function CatalogContentSection() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortType, setSortType] = useState('price');

  const handleFilterChange = (newFilter) => {
    searchParams.set('filter', newFilter);
    setSearchParams(searchParams);
  };
  const filterType = searchParams.get('filter') || 'all';

  const sortedCars = [...cars]
    .filter((car) => filterType === 'all' || car.type === filterType)
    .sort((a, b) =>
      sortType === 'price' ? a.price - b.price : b.rating - a.rating,
    );
  return (
    <>
      <div className="flex justify-between items-center mb-6 gap-2 flex-wrap">
        <RadixSelect
          options={options}
          value={sortType}
          onValueChange={setSortType}
        />
        <RadixSelect
          options={filters}
          value={filterType}
          onValueChange={handleFilterChange}
        />
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        key={filterType}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {sortedCars.map((car, id) => (
          <motion.div
            key={car.id}
            className="md:p-4 p-1 border rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * id }}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p>Цена: {car.price.toLocaleString()} ₽</p>
            <p className="flex items-center justify-center text-yellow-500">
              <Star className="w-6 h-5 fill-amber-400" /> {car.rating}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
