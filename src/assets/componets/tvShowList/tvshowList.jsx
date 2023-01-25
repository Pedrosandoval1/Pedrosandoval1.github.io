import TvShowListItem from "../tvShowItem/tvShowListItem";
import "./styletvShowList.css";
const TvshowList = ({onClickItem, tvShowList}) => (
  
  <div>
    <div className="title">Recomend</div>
    <div className="list">{
      tvShowList.map((el) =>{
        return(
          <span key={el.id}>
          <TvShowListItem  
          tvShow={el} onClick={onClickItem}
          />
          </span>
          )
      })
    }</div>
  </div>
)



export default TvshowList