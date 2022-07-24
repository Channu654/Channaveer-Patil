import React from 'react';
import { useSelector } from 'react-redux/es/exports';

const ShoeCard = ({ data }) => {
  let shoeId = null;

  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img
          data-cy='shoe-card-image'
          src={data.image}
          alt=''
          style={{
            display: 'grid',
            gridtemplatecolumns: 'repeat(3, 1fr)',
            width: '20%',
            height: '100px',
            border: '1px solid black',
            alignItems: 'center',
            marginRight: '100px',
          }}
        />
      </div>
      <div>
        <div data-cy='shoe-name'>{data.name}</div>
        <div data-cy='shoe-category'>{data.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
