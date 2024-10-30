// src/view/components/Avatar.js
import React from 'react';

const Avatar = ({ src, alt, size = '50px' }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        objectFit: 'cover',
      }}
      className="shadow"
    />
  );
};

export default Avatar;
