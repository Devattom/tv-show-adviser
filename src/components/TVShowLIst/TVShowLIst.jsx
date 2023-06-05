import { TVShowListItem } from "../TVShowListItem/TVShowLIstItem";
import s from "./style.module.css";

export function TVShowList({tvShowList, onClickItem}){
    return(
        <>
        <div className={s.title}>You may like it</div>
        <div className={s.list}>
            {tvShowList.map(tvShow => {
                return (
                    <span key={tvShow.id} className={s.tvShowListItem}>
                        <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
                    </span>
                );
            })}
        </div>
        </>
    )
}