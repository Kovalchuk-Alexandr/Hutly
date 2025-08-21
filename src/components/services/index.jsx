import React, { useEffect, useState } from "react";
import "./style.css";
import services from "../../data/services";
import Service from "../service";

const Services = () => {
  const [activeItem, setActiveItem] = useState("01"); // Храним название активного пункта
  
  const handleItemClick = (itemId) => {
    setActiveItem(itemId);
    // console.log("activeItem %s", activeItem);
    // console.log("itemId %s", itemId);
  };

  // useEffect(() => {
  //   console.log("-----InUseEffect-------");
  //   console.log("activeItem %s", activeItem);
  // },[activeItem])

  return (
    <section className="services">
      <div className="container">
        <div className="services-wrapper">
          <h2 className="services__title">Services</h2>
          <div className="services__list">
            {services.map((service) => (
              <Service
                key={service.id}
                {...service}
                isActive={activeItem === service.id}
                onClick={() => handleItemClick(service.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;