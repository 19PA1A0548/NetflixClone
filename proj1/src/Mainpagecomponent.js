import "./Mainpagecomponent.css";
export default function Mainpagecomponent(props){
    return(
        <>
        <div className="mainpagecomponent__main">
            <div className="mainpagecomponent__left">
                <p>
                    {props.title}
                </p>
                <p>
                    {props.description}
                </p>
            </div>
            <div className="mainpagecomponent__right">
                <br/>
                <div className="mainpagecomponent__rightinside">
                    <video autoPlay playsInline muted loop >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
        <div className="borderline">
        </div>
        </>
    )
}