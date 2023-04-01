import { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";
export default function Banner(){
    const[bannermovie,setBannerMovie] = useState([]);
    useEffect(()=>{
        async function fetchBannerMovie(){
            const bannerrequest = await axios.get(requests.fetchTrending);
            var rand = Math.floor(Math.random()*19);
            setBannerMovie(bannerrequest.data.results[rand]);
            // console.log(bannerrequest.data.results[rand]);
            return bannerrequest;
        }
        fetchBannerMovie();
    },[])
    return(
        <header className="banner" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original/${bannermovie.backdrop_path}")`,backgroundSize: "cover", backgroundPosition:"center center"}}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {bannermovie.original_title}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        Play
                    </button>
                    <button className="banner__button">
                        My List
                    </button>
                </div>
                <h1 className="banner__description"> 
                    {
                        bannermovie.overview
                    }
                </h1>
                <div className="banner__bottom">
                </div>
            </div>
        </header>
    )
}