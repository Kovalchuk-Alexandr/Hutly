import React from "react";
import "./style.css";
import testimonials from "../../data/testimonials";
import Testimonial from "../testimonial/testimonial";

// Импортируем данные из файла testimonials.js
// const testimonials = [
//   {
//     text: `They make it super easy and safe to find a room for rent, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful, ensuring a smooth experience. I wholeheartedly endorse this platform.`,
//     author: "Ashley Cooper",
//     rating: 4,
//   },
//   {
//     text: `They make it super easy and safe to find a room for rent, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful, ensuring a smooth experience. I wholeheartedly endorse this platform.`,
//     author: "Ashley Cooper",
//     rating: 5,
//   },
//   {
//     text: `They make it super easy and safe to find a room for rent, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful, ensuring a smooth experience. I wholeheartedly endorse this platform.`,
//     author: "Ashley Cooper",
//     rating: 3,
//   },
//   {
//     text: `They make it super easy and safe to find a room for rent, prioritizing both convenience and safety. The customer support team is exceptionally responsive and genuinely helpful, ensuring a smooth experience. I wholeheartedly endorse this platform.`,
//     author: "Ashley Cooper",
//     rating: 2,
//   },
// ];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__list">
          <h2 className="testimonials__title">What our customers say</h2>
          {testimonials.map((item, idx) => (
            <Testimonial key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
