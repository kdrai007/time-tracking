

type Timeframe = {
    current: number;
    previous: number;
};

type JsonData = {
    title: string;
    background: string;
    timeframes: {
        daily: Timeframe;
        weekly: Timeframe;
        monthly: Timeframe;
    };
};

interface CardsProps {
    json: JsonData;
}

// import socialIcon from "../assets/images/icon-exercise.svg";
const cards = ({ json }: CardsProps) => {
    console.log(json.background)
    return (
        <div className="main-card" style={{ backgroundColor: `${json.background}` }}>
            <div className="card-img">
                <img src={`./images/icon-${json.title.toLowerCase() == "self care" ? "self-care" : json.title.toLowerCase()}.svg`} alt="" />
            </div>
            <div className="card-details">
                <div className="first">
                    <p>{json.title}</p>
                    <img src="./images/icon-ellipsis.svg" alt="" />
                </div>
                <div className="second" style={{ textAlign: "left" }}>
                    <h3>{json.timeframes.weekly.current}hrs</h3>
                    <p>Last Week-  {json.timeframes.daily.previous}hrs</p>
                </div>
            </div>
        </div>
    )
}

export default cards