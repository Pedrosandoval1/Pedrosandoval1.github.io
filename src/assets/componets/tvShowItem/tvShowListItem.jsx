import { backdropBasethreehundredpx } from "../config";
import { ContainerTvShow, ImgTvShow } from "./styledTvShow";
import "./styletvShowListItem.css"

const TvShowListItem = ({tvShow, onClick}) => {
  const max_Name = 20;
  const onClick_ = () =>{
    onClick(tvShow);
  }

  return (
    <ContainerTvShow onClick={onClick_}>

    <ImgTvShow
    alt={tvShow.name}
    src={`${backdropBasethreehundredpx}${tvShow.backdrop_path}`}
    />
    <div className="title">
      {
        tvShow.name.length > max_Name
        ?tvShow.name.slice(0, max_Name) + "..."
        : tvShow.name
      }
    </div>
    </ContainerTvShow>
  )
}

export default TvShowListItem