import React from "react";
import "./style.css";

const Service = ({ id, title, desc, reversed, isActive, onClick }) => {

  return (
    <div className={`service ${isActive ? "service--active" : ""}`} onClick={onClick} key={id}>
      <div className="service__number">{id}</div>
      <div className="service__content">
        <div className="service__title">
          {title}
          {/* {title.map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))} */}
        </div>
        <div className="service__desc">{desc}</div>
      </div>
    </div>
  );
};

export default Service; 