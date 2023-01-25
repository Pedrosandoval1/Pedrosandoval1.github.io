import axios from "axios";
import { useState, useEffect } from "react";
import * as tvShow from "./assets/componets/TvShow";
import SearchBar from "../src/assets/componets/search/searchBar";
import TvShowDetaile from "./assets/componets/tvShowDetaile/TvShowDetaile";
import TvShowList from "./assets/componets/tvShowList/tvshowList";
import { backdropBase } from "./assets/componets/config";
import s from "./style.module.css";
import "./global.css";

function App() {
  const [currentTvShow, setCurrentTvShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);
  const fetchPopular = async () => {
    const popularTvShowlist = await tvShow.fetchPopular();
    // console.log("en el app",popularTvShowlist);
    if (popularTvShowlist && popularTvShowlist.length > 0) {
      setCurrentTvShow(popularTvShowlist[0]);
    }
  };
  const fetchBytitle = async (title) => {
    const searchResponse = await tvShow.fetchBytitle(title);
    // console.log("en el app",popularTvShowlist);
    if (searchResponse.length > 0) {
      setCurrentTvShow(searchResponse[0]);
    }
  };
  const fetchRecommendations = async (tvShowId) => {
    const recommendationsResponse = await tvShow.fetchRecommendations(tvShowId);
    console.log("en el app", recommendationsResponse);
    if (recommendationsResponse.length > 0) {
      setRecommendationsList(recommendationsResponse.slice(0, 10));
    }
  };
  console.log("tvShowLits", recommendationsList);
  const updateCurrentTvShow = (tvShow) => {
    setCurrentTvShow(tvShow);
  };

  useEffect(() => {
    fetchPopular();
    // fetchBytitle();
  }, []);
  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
    // fetchBytitle();
  }, [currentTvShow]);
  // console.log(currentTvShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
      url("${backdropBase}${currentTvShow.backdrop_path}")
      no-repeat center / cover`
          : "black",
      }}
    >
      <div className="div_containerR">
        <div>
          <h1>Recommended tv shows</h1>
        </div>

        <div className={s.header}>
          <SearchBar onSubmit={fetchBytitle} />
        </div>
        <div className="tvShowDetaile">
          {currentTvShow && <TvShowDetaile tvShow={currentTvShow} />}
        </div>
      </div>
      <div className="recomendados">
        {currentTvShow && (
          <TvShowList
            onClickItem={updateCurrentTvShow}
            tvShowList={recommendationsList}
          />
        )}
      </div>
    </div>
  );
}
export default App;
