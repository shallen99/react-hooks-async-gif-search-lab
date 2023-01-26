import React from 'react'

const GifList = ({gifs}) => {
  return (

<div className="container text-center">
  <div className="row align-items-start">
    {gifs.map((gif) => (
        <div className="col-sm-3 mb-3 mb-sm-0" key={gif.url}>
            <img className='gif-img' src={gif.url} alt="gif" style={{width: '250px', height: '250px', marginBottom: '20px' }}/>
        </div>
    ))}
  </div>
</div>
    
  )
}

export default GifList