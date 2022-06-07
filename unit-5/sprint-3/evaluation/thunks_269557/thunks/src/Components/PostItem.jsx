import React from 'react';

export const PostItem = (prop) => {
  const { id, title, body } = prop;
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};
