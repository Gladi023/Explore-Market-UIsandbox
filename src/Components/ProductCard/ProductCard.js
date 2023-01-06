import React from 'react';

const ProductCard = ({ name, id }) => {
  return (
    <div>
    <div className='tc grow bg-light-green br2 pa3 ma2 dib bw2 shadow-5'>
      <img alt='hats' src={`https://images.unsplash.com/photo-1670938258821-2956d4ce9c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60${id}?size=50x50`} class="o-50" />
      <div>
        <h2>{'Product Form will go here'}</h2>
      </div>
    </div>

    <div className='tc grow bg-light-green br2 pa3 ma2 dib bw2 shadow-5'>
      <img alt='car' src={`https://images.unsplash.com/photo-1670938258821-2956d4ce9c9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60${id}?size=50x50`} class="o-50" />
      <div>
        <h2>{'Search results will go here'}</h2>
      </div>
    </div>

    </div>
    
  );
}

export default ProductCard;