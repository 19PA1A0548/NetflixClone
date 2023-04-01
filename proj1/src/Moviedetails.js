
export default function Moviedetails(props){
    const base_url = "https://image.tmdb.org/t/p/original/";
    return(
        <div className="content">
            <div className="background">
                <div className="left">
                        <p> <span style={{fontWeight: "bolder",fontSize: "30px"}}>NETFLIX</span> <span style={{fontWeight: "lighter",fontSize: "25px",marginLeft: "3px"}}>ORIGINAL</span> </p>
                        <p style={{fontWeight:"bolder",fontSize:"45px"}}>
                                {props.moviedesc.original_title}
                        </p>
                        <p style={{marginTop:"15px"}}>
                               <span style={{color:"green",fontWeight:"bold"}}>80% </span>match <span style={{fontWeight:"bold",marginLeft:"10px"}}>2016</span> <span style={{marginLeft:"7px",border:"1px solid white",fontWeight:'bold',padding:"1px 4px"}}>TV-14</span>
                        </p>
                        <p className="moviedescri">
                                {props.moviedesc.overview}
                        </p>
                        <div className="btnscontainer">
                            <button className="playbtn">
                                <i className="fa fa-play" style={{marginRight:"5px"}}></i>PLAY
                            </button>
                            <button className="playbtn newplaybtn">
                                <i className="fa fa-plus" style={{marginRight:"5px"}}></i>MY LIST
                            </button>
                        </div>
                </div>
                <div className="right">
                    <img src={base_url+props.moviedesc.backdrop_path} width="100%" height="100%"/>
                </div>
            </div>
        </div>
    )
}