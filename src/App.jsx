import { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowLIst/TVShowLIst";
import { SearchBar } from "./components/SearchBar/SearchBar";

TVShowAPI.fetchRecommendation(1402);
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);
  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }
  async function fetchRecommendation(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendation(tvShowId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendation(currentTVShow.id);
    }
  }, [currentTVShow]);


  async function searchTvShow(tvShowName) {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
     console.log(searchResponse);
     if(searchResponse.length > 0){
        setCurrentTVShow(searchResponse[0]);
     }
  }

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Advise me"
              subtitles="FInd a good show to watch"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <SearchBar onSubmit={searchTvShow}/>
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendationList && <TVShowList onClickItem={setCurrentTVShow} tvShowList={recommendationList}/>}
      </div>
    </div>
  );
}
