import { React } from "react";
import "../../App.css";

const Details = ({
  title,
  thumbnail,
  description,
  genre,
  platform,
  publisher,
  screenshots,
}) => {
  return (
    <>
      <div className="detail-item">
        <img className="img-detail" src={thumbnail} alt={title} />
        <div className="detail-body">
          <p className="detail-title">{title}</p>
          {screenshots.map((item) => (
            <img src={item.image} alt={item.id} key={item.id} />
          ))}
          <p className="detail-description">{description}</p>
          <p className="detail-genre">Gênero: {genre}</p>
          <p className="detail-platform">Plataforma: {platform}</p>
          <p className="detail-publisher">Empresa: {publisher}</p>
        </div>
      </div>
    </>
  );
};
export default Details;