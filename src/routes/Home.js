import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
  const [loading,setLoading]=useState(true);
  const [movies,setMovies]=useState([]);
  const getMovie=async()=>{
    const json=await(
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)).json();
    setLoading(false);
    setMovies(json.data.movies);
  };
  useEffect(()=>{
    getMovie(); 
  },[]);
  console.log(movies);

  return (
    <div>
      {loading? "loading...":(
      <div>
        {movies.map((movie)=>(
          <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.summary}/>
        ))}
        </div>)}
    </div>
  );
}

export default Home;