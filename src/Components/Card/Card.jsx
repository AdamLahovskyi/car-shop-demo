import React from 'react'
import './Card.css'
import {PropTypes} from 'prop-types'

const Card = (props) => {
  return (
    <div className={`car-card ${props.isSelected ? 'selected' : ''}`} onClick={props.onClick}>
        <img className="card-image" src={props.image_path} alt={`${props.name} ${props.model}`}/>
        <h3>Make: {props.name}</h3>
        <p>Model: {props.model}</p>
        <p>Price: {props.price}$</p>
        <p>Description: {props.description}</p>
    </div>
  )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    image_path: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
  };

export default Card
