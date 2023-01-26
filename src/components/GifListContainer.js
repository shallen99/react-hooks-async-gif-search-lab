import React,{ useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

const GifListContainer = () => {
    const[gif, setGif] = useState([])
    const [search, setSearch] = useState("dolphins");
    const apiKey = '2Dcf4vvWfQpBcQ2Cq9WQiUQIGwcxEpD8';

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then((res)=>res.json())
        .then(({data})=>{
            const gifs = data.slice(0,12).map((gif) => ({ url: gif.images.original.url }));
            setGif(gifs);
            
        })
    
    },[search])


  return (
    <div className='container'>
    <GifSearch submit = {setSearch} />
    <GifList  gifs={gif} />
    </div>
  )
}

export default GifListContainer