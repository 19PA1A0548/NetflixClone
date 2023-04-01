import {useEffect, useState} from "react";
import axios from "./axios";
import "./Row.css";
import 'font-awesome/css/font-awesome.min.css';
import Moviedetails from "./Moviedetails";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({title,fetchURL,isLargeRow}){
    const[movies,setMovies] = useState([]);
    const[moviedesc,setMoviedesc] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            // console.log(request.data.results);
            return request;
        }
        fetchData();
    },[fetchURL])

    // const opts = {
    //     height: "390",
    //     width: "100%",
    //     playerVars: {
    //         autoplay: 1
    //     }
    // }

    const handleClick = (movie)=>{
        if(moviedesc){
            setMoviedesc("");
        }
        else{
            setMoviedesc(movie);
            console.log(movie);
        }
    }

    return(
        <div className="row">
            <h3>
                {title} 
            </h3>
            <div className="row__posters">
                {movies.map(movie=>(
                    <img key={movie.id} onClick={()=> handleClick(movie)} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={isLargeRow ? base_url+movie.poster_path: base_url+movie.backdrop_path} alt={movie.original_title} width="50px"/>
                ))}
            </div>
            {moviedesc && 
                <Moviedetails moviedesc={moviedesc} />
            }
        </div>
    )
}