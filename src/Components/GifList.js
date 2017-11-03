import React from 'react';
import Gif from './Gif';
import PropTyppes from 'prop-types';
import NoGifs from "./NoGifs";

const GifList = props => {

  const results = props.data;
  let gifs = results.map(gif =>
    <Gif url={gif.images.fixed_height.url} key={gif.id}/>
  );
  
  return(
    results.length ?
    <ul className="gif-list">
      { gifs }
    </ul>
      :
    <NoGifs/>
  );
};

GifList.propTypes = {
  data: PropTyppes.array.isRequired,
};

export default GifList;
