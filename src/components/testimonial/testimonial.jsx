import './style.css';

const Testimonial = ({ idx, item }) => {
    // console.log(item);
	return (
        <div className="testimonial__card" key={idx}>
            <p className="testimonial__text">{item.text}</p>
            <div className="testimonial__footer">
              <span className="testimonial__author">{item.author}</span>
              <div className="testimonial__stars">
              {[...Array(item.rating)].map((_, i) => (
                <svg key={i} width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 0L9.184 4.755L14.285 5.09L10.392 8.245L11.633 13.21L7.5 10.5L3.367 13.21L4.608 8.245L0.715 5.09L5.816 4.755L7.5 0Z" fill="#FFC250"/>
                </svg>
              ))}
              </div>
            </div>
        </div>
	);
}

export default Testimonial;
