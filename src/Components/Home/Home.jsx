import React, { useState } from 'react'
import Card from '../Card/Card'
import './Home.css'

const cars = [
  {
    id: 1,
    name: "Porsche",
    model: "911 Turbo",
    price: 999999,
    image_path: "/911turbo.jpg",
    description: "A high-performance sports car with a powerful engine and sleek design.",
  },
  {
    id: 2,
    name: "Porsche",
    model: "Cayenne",
    price: 999999,
    image_path: "/cayenne.jpg",
    description: "A luxury SUV that combines performance with practicality.",
  },
  {
    id: 3,
    name: "Porsche",
    model: "Macan",
    price: 999999,
    image_path: "/macan.jpg",
    description: "A compact SUV with sporty handling and a stylish interior.",
  },
  {
    id: 4,
    name: "Porsche",
    model: "Panamera",
    price: 999999,
    image_path: "/panamera.jpg",
    description: "A luxury sedan that offers both comfort and performance.",
  },
  {
    id: 5,
    name: "Porsche",
    model: "Taycan",
    price: 999999,
    image_path: "/taycan.jpg",
    description: "An all-electric sports car with cutting-edge technology.",
  }
];


const Home = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardSelect = (id) =>{
    if(selectedCard === id){
      setSelectedCard(null);
    }
    else{
      setSelectedCard(id);
    }
    
  }

  return (
    <>
    <div className='car-list'>
      {cars.map(car=>(
        <Card
        key={car.id}
        isSelected={car.id === selectedCard}
        image_path={car.image_path}
        name={car.name}
        model={car.model}
        price={car.price}
        description={car.description}
        onClick={()=>handleCardSelect(car.id)}
        />
      ))}

    </div>
    </>
  )
}

export default Home