import React from 'react';
import './Card.css';
import { truncatedInfo } from '../utility';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Card = ({ id,image,name,info,price }) => {
    const navigate=useNavigate()
    
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{truncatedInfo(info)}</p>
       {/* <button className="card-button" onClick={()=>navigate('/toursapp/tour/'+id)}>details...</button>*/}
        <NavLink to={'/toursapp/tour/'+id}><p className="tour-price bg-gradient">details</p></NavLink>
      </div>
    </div>
  );
};

export default Card;
