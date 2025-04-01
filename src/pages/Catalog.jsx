import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { useSearchParams } from "react-router-dom";

const cars = [
  { id: 1, name: "BMW X5", price: 7000000, rating: 4.8, type: "suv", image: "/src/assets/images/bmw-x5.jpg" },
  { id: 2, name: "Toyota Camry", price: 3500000, rating: 4.5, type: "sedans", image: "/src/assets/images/toyota-camry.jpg" },
  { id: 3, name: "Mercedes-Benz G-Class", price: 12000000, rating: 4.9, type: "sedans", image: "/src/assets/images/mercedes-g.jpg" },
  { id: 4, name: "Audi A6", price: 4500000, rating: 4.6, type: "sedans", image: "/src/assets/images/audi-a6.jpg" },
  { id: 5, name: "Porsche 911", price: 15000000, rating: 5.0, type: "coupe", image: "/src/assets/images/porsche-911.jpg" },
];

const options = [
  { value: "price", label: "Сортировать по цене" },
  { value: "rating", label: "Сортировать по рейтингу" }
];

const filters = [
  { value: "all", label: "Все" },
  { value: "suv", label: "Внедорожник" },
  { value: "sedans", label: "Седан" },
  { value: "coupe", label: "Купе" }
];
export default function Catalog() {
  const [sortType, setSortType] = useState("price");
  const [searchParams, setSearchParams] = useSearchParams();
  
  const filterType = searchParams.get("filter") || "all"; 
  
  const sortedCars = [...cars]
    .filter((car) => filterType === "all" || car.type === filterType)
    .sort((a, b) => (sortType === "price" ? a.price - b.price : b.rating - a.rating));

  const handleFilterChange = (newFilter) => {
    searchParams.set("filter", newFilter); 
    setSearchParams(searchParams); 
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-6">Каталог машин</h1>
      <div className="flex justify-between items-center mb-6">
        <RadixSelect options={options} value={sortType} onValueChange={setSortType} />
        <RadixSelect options={filters} value={filterType} onValueChange={handleFilterChange} /> 
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
            className="p-4 border rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 * id }}
          >
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover mb-4 rounded-md" />
            <h2 className="text-lg font-bold">{car.name}</h2>
            <p>Цена: {car.price.toLocaleString()} ₽</p>
            <p className="flex items-center justify-center text-yellow-500">
              <Star className="w-6 h-5 fill-amber-400" /> {car.rating}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function RadixSelect({ options, value, onValueChange }) {
  return (
    <Select.Root value={value} onValueChange={onValueChange}>
      <Select.Trigger className="p-2 border rounded w-90 flex justify-between items-center bg-gray-100 dark:bg-gray-800  dark:text-white focus:outline-none outline-none focus:border-blue-500">
        <Select.Value placeholder="Выбрать" />
        <ChevronDownIcon className="w-5 h-5" />
      </Select.Trigger>
      <Select.Portal>
      <Select.Content className="bg-white dark:bg-gray-800 border rounded shadow-lg fixed z-50">
      <Select.Viewport className="p-1">
            {options.map((option) => (
              <Select.Item key={option.value} value={option.value} className="p-2 flex items-center justify-between cursor-pointer hover:bg-gray-600 hover:text-white transition rounded outline-none">
                <Select.ItemText>{option.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="w-4 h-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
