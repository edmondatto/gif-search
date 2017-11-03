import React from 'react';
import Gif from './Gif';
import PropTyppes from 'prop-types';

const GifList = props => {

  const results = props.data;
  let gifs = results.map(gif =>
    <Gif url={gif.images.fixed_height.url} key={gif.id}/>
  );
  
  return(
    <ul className="gif-list">
      { gifs }
    </ul> 
  );
};

GifList.propTypes = {
  data: PropTyppes.array.isRequired,
};

export default GifList;
