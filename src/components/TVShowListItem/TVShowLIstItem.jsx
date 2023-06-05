import s from "./style.module.css";
import { BACKDROP_BASE_URL_SMALL } from "../../config";

export function TVShowListItem({tvShow, onClick}){
    return(
        <div onClick={() => onClick(tvShow)} className={s.container}>
            <img src={BACKDROP_BASE_URL_SMALL + tvShow.backdrop_path} alt="miniature de série" className={s.img}/>
            <div className={s.name}>{tvShow.name}</div>
        </div>
    )
}