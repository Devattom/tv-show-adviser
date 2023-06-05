import s from "./style.module.css";
import { StarFill, StarHalf, Star } from "react-bootstrap-icons";

export function FiveStarRating({rating}){
    const starList = [];

    const starFill = Math.floor(rating);
    const hasStarHalf = rating - starFill >= 0.5;
    const starEmpty = 5 - starFill - (hasStarHalf ? 1 : 0);

    for (let i = 0; i < starFill; i++){
        starList.push(<StarFill key={"star-fill" + i}/>);
    }
    if(hasStarHalf){
        starList.push(<StarHalf/>)
    }
    for(let i=0; i<starEmpty; i++){
        starList.push(<Star key={"star-empty" + i}/>)
    }
    return(
        <div className={s.starlist_container}>
            {starList}
        </div>
    )
}