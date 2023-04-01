import "./Mainpagecomponent.css";
export default function Newmainpagecomponent(props){
    return(
        <>
        <div className="mainpagecomponent__main">
            <div className="mainpagecomponent__right">
                <img height="450" src={props.link} />
            </div>
            <div className="mainpagecomponent__left" style={{paddingRight:"150px",paddingLeft:"0px"}}>
                <p>
                    {props.title}
                </p>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
        <div className="borderline">
        </div>
        </>
    )
}