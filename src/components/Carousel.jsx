import React from 'react';
import './Carousel.css';

const Carousel = ({
  images,
  reverse = false,
  width = 120,     // ✅ Reduced default width for mobile
  height = 100,    // ✅ Shorter height for mobile
  quantity = 10,
  className = ''
}) => {
  return (
    <div
      className={`slider ${className}`}
      style={{
        '--width': `${width}px`,
        '--height': `${height}px`,
        '--quantity': quantity,
      }}
      reverse={reverse ? 'true' : undefined}
    >
      <div className="list">
        {images.map((image, index) => (
          <div
            className="item"
            key={index}
            style={{
              '--position': index + 1,
            }}
          >
            <img src={image} alt={`slider-item-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
