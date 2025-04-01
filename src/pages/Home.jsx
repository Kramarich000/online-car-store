import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const categories = [
    { name: "Седаны", value: "sedans" },
    { name: "Внедорожники", value: "suv" },
    { name: "Купе", value: "coupe" },
  ];

  const popularCars = [
    { name: "BMW X5", price: "5 000 000 ₽" },
    { name: "Audi Q7", price: "4 800 000 ₽" },
    { name: "Tesla Model 3", price: "4 500 000 ₽" },
  ];

  const specialOffers = [
    "Скидки до 20% на популярные модели",
    "Рассрочка 0% на 12 месяцев",
    "Бесплатное ТО на 2 года при покупке нового авто",
  ];
  
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(`/catalog?filter=${category}`);
  };

  return (
    <div className="container mx-auto px-4">

      <div className="text-center py-6">
        <h1 className="text-4xl font-bold">Добро пожаловать в наш автосалон!</h1>
        <p className="text-lg mt-2">Лучшие автомобили по выгодным ценам</p>
      </div>

      <section className="text-center my-8 bg-gray-200 dark:bg-gray-900 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold">Найдите любимый автомобиль уже сегодня!</h2>
        <p className="mt-2">Каталог с широким выбором новых и подержанных авто</p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="p-4 border rounded-lg text-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition" 
            onClick={() => handleCategoryClick(category.value)}
          >
            {category.name}
          </div>
        ))}
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-semibold">Популярные автомобили</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {popularCars.map((car, index) => (
            <div key={index} className="p-4 border rounded-lg text-center">
              <h3 className="text-lg font-bold">{car.name}</h3>
              <p className="">{car.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg text-center my-8">
        <h2 className="text-xl font-bold">🔥 Специальные предложения</h2>
        <ul className="mt-2 space-y-2">
          {specialOffers.map((offer, index) => (
            <li key={index}>{offer}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
