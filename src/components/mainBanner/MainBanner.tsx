import Banner from "../../static/img/banner.png"
import "./index.css"

interface IBanner {
    name?: string;
    img: string;
}

export function MainBanner({name, img}: IBanner) {
    return (
        <div>
            <img src={img} alt="" className="banner"/>
        </div>
    )
}