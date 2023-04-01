import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
export default function Home(){
    const navigate = useNavigate();
    const [authenticated, setauthenticated] = useState(false);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        // Redirect
        navigate("/login");
    }

   
    else{
    return(
        <>
            <Nav />
            <Banner />
            <Row title="Trending" fetchURL={requests.fetchTrending} isLargeRow/>
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}/>
            <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
            <Row title="Top Documentaries" fetchURL={requests.fetchDocumentaries}/>
        </>
    )
}
}